/**
 * @schema CloudTrailAddTagsRequest
 */
export interface CloudTrailAddTagsRequest {
  /**
   * @schema CloudTrailAddTagsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CloudTrailAddTagsRequest#TagsList
   */
  readonly tagsList?: CloudTrailTag[];

}

/**
 * Converts an object of type 'CloudTrailAddTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailAddTagsRequest(obj: CloudTrailAddTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagsList': obj.tagsList?.map(y => toJson_CloudTrailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailAddTagsResponse
 */
export interface CloudTrailAddTagsResponse {
}

/**
 * Converts an object of type 'CloudTrailAddTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailAddTagsResponse(obj: CloudTrailAddTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailCreateTrailRequest
 */
export interface CloudTrailCreateTrailRequest {
  /**
   * @schema CloudTrailCreateTrailRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CloudTrailCreateTrailRequest#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CloudTrailCreateTrailRequest#EnableLogFileValidation
   */
  readonly enableLogFileValidation?: boolean;

  /**
   * @schema CloudTrailCreateTrailRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CloudTrailCreateTrailRequest#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

  /**
   * @schema CloudTrailCreateTrailRequest#TagsList
   */
  readonly tagsList?: CloudTrailTag[];

}

/**
 * Converts an object of type 'CloudTrailCreateTrailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailCreateTrailRequest(obj: CloudTrailCreateTrailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'SnsTopicName': obj.snsTopicName,
    'IncludeGlobalServiceEvents': obj.includeGlobalServiceEvents,
    'IsMultiRegionTrail': obj.isMultiRegionTrail,
    'EnableLogFileValidation': obj.enableLogFileValidation,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'CloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'IsOrganizationTrail': obj.isOrganizationTrail,
    'TagsList': obj.tagsList?.map(y => toJson_CloudTrailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailCreateTrailResponse
 */
export interface CloudTrailCreateTrailResponse {
  /**
   * @schema CloudTrailCreateTrailResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CloudTrailCreateTrailResponse#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CloudTrailCreateTrailResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema CloudTrailCreateTrailResponse#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CloudTrailCreateTrailResponse#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * Converts an object of type 'CloudTrailCreateTrailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailCreateTrailResponse(obj: CloudTrailCreateTrailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'SnsTopicName': obj.snsTopicName,
    'SnsTopicARN': obj.snsTopicArn,
    'IncludeGlobalServiceEvents': obj.includeGlobalServiceEvents,
    'IsMultiRegionTrail': obj.isMultiRegionTrail,
    'TrailARN': obj.trailArn,
    'LogFileValidationEnabled': obj.logFileValidationEnabled,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'CloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'IsOrganizationTrail': obj.isOrganizationTrail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailDeleteTrailRequest
 */
export interface CloudTrailDeleteTrailRequest {
  /**
   * @schema CloudTrailDeleteTrailRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudTrailDeleteTrailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailDeleteTrailRequest(obj: CloudTrailDeleteTrailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailDeleteTrailResponse
 */
export interface CloudTrailDeleteTrailResponse {
}

/**
 * Converts an object of type 'CloudTrailDeleteTrailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailDeleteTrailResponse(obj: CloudTrailDeleteTrailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailDescribeTrailsRequest
 */
export interface CloudTrailDescribeTrailsRequest {
  /**
   * @schema CloudTrailDescribeTrailsRequest#trailNameList
   */
  readonly trailNameList?: string[];

  /**
   * @schema CloudTrailDescribeTrailsRequest#includeShadowTrails
   */
  readonly includeShadowTrails?: boolean;

}

/**
 * Converts an object of type 'CloudTrailDescribeTrailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailDescribeTrailsRequest(obj: CloudTrailDescribeTrailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'trailNameList': obj.trailNameList?.map(y => y),
    'includeShadowTrails': obj.includeShadowTrails,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailDescribeTrailsResponse
 */
export interface CloudTrailDescribeTrailsResponse {
  /**
   * @schema CloudTrailDescribeTrailsResponse#trailList
   */
  readonly trailList?: CloudTrailTrail[];

}

/**
 * Converts an object of type 'CloudTrailDescribeTrailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailDescribeTrailsResponse(obj: CloudTrailDescribeTrailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'trailList': obj.trailList?.map(y => toJson_CloudTrailTrail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetEventSelectorsRequest
 */
export interface CloudTrailGetEventSelectorsRequest {
  /**
   * @schema CloudTrailGetEventSelectorsRequest#TrailName
   */
  readonly trailName?: string;

}

/**
 * Converts an object of type 'CloudTrailGetEventSelectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetEventSelectorsRequest(obj: CloudTrailGetEventSelectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailName': obj.trailName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetEventSelectorsResponse
 */
export interface CloudTrailGetEventSelectorsResponse {
  /**
   * @schema CloudTrailGetEventSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailGetEventSelectorsResponse#EventSelectors
   */
  readonly eventSelectors?: CloudTrailEventSelector[];

  /**
   * @schema CloudTrailGetEventSelectorsResponse#AdvancedEventSelectors
   */
  readonly advancedEventSelectors?: CloudTrailAdvancedEventSelector[];

}

/**
 * Converts an object of type 'CloudTrailGetEventSelectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetEventSelectorsResponse(obj: CloudTrailGetEventSelectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailARN': obj.trailArn,
    'EventSelectors': obj.eventSelectors?.map(y => toJson_CloudTrailEventSelector(y)),
    'AdvancedEventSelectors': obj.advancedEventSelectors?.map(y => toJson_CloudTrailAdvancedEventSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetInsightSelectorsRequest
 */
export interface CloudTrailGetInsightSelectorsRequest {
  /**
   * @schema CloudTrailGetInsightSelectorsRequest#TrailName
   */
  readonly trailName?: string;

}

/**
 * Converts an object of type 'CloudTrailGetInsightSelectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetInsightSelectorsRequest(obj: CloudTrailGetInsightSelectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailName': obj.trailName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetInsightSelectorsResponse
 */
export interface CloudTrailGetInsightSelectorsResponse {
  /**
   * @schema CloudTrailGetInsightSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailGetInsightSelectorsResponse#InsightSelectors
   */
  readonly insightSelectors?: CloudTrailInsightSelector[];

}

/**
 * Converts an object of type 'CloudTrailGetInsightSelectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetInsightSelectorsResponse(obj: CloudTrailGetInsightSelectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailARN': obj.trailArn,
    'InsightSelectors': obj.insightSelectors?.map(y => toJson_CloudTrailInsightSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetTrailRequest
 */
export interface CloudTrailGetTrailRequest {
  /**
   * @schema CloudTrailGetTrailRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudTrailGetTrailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetTrailRequest(obj: CloudTrailGetTrailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetTrailResponse
 */
export interface CloudTrailGetTrailResponse {
  /**
   * @schema CloudTrailGetTrailResponse#Trail
   */
  readonly trail?: CloudTrailTrail;

}

/**
 * Converts an object of type 'CloudTrailGetTrailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetTrailResponse(obj: CloudTrailGetTrailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trail': toJson_CloudTrailTrail(obj.trail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetTrailStatusRequest
 */
export interface CloudTrailGetTrailStatusRequest {
  /**
   * @schema CloudTrailGetTrailStatusRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudTrailGetTrailStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetTrailStatusRequest(obj: CloudTrailGetTrailStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailGetTrailStatusResponse
 */
export interface CloudTrailGetTrailStatusResponse {
  /**
   * @schema CloudTrailGetTrailStatusResponse#IsLogging
   */
  readonly isLogging?: boolean;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestDeliveryError
   */
  readonly latestDeliveryError?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestNotificationError
   */
  readonly latestNotificationError?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestDeliveryTime
   */
  readonly latestDeliveryTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestNotificationTime
   */
  readonly latestNotificationTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#StartLoggingTime
   */
  readonly startLoggingTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#StopLoggingTime
   */
  readonly stopLoggingTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestCloudWatchLogsDeliveryError
   */
  readonly latestCloudWatchLogsDeliveryError?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestCloudWatchLogsDeliveryTime
   */
  readonly latestCloudWatchLogsDeliveryTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestDigestDeliveryTime
   */
  readonly latestDigestDeliveryTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestDigestDeliveryError
   */
  readonly latestDigestDeliveryError?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestDeliveryAttemptTime
   */
  readonly latestDeliveryAttemptTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestNotificationAttemptTime
   */
  readonly latestNotificationAttemptTime?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestNotificationAttemptSucceeded
   */
  readonly latestNotificationAttemptSucceeded?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#LatestDeliveryAttemptSucceeded
   */
  readonly latestDeliveryAttemptSucceeded?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#TimeLoggingStarted
   */
  readonly timeLoggingStarted?: string;

  /**
   * @schema CloudTrailGetTrailStatusResponse#TimeLoggingStopped
   */
  readonly timeLoggingStopped?: string;

}

/**
 * Converts an object of type 'CloudTrailGetTrailStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailGetTrailStatusResponse(obj: CloudTrailGetTrailStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IsLogging': obj.isLogging,
    'LatestDeliveryError': obj.latestDeliveryError,
    'LatestNotificationError': obj.latestNotificationError,
    'LatestDeliveryTime': obj.latestDeliveryTime,
    'LatestNotificationTime': obj.latestNotificationTime,
    'StartLoggingTime': obj.startLoggingTime,
    'StopLoggingTime': obj.stopLoggingTime,
    'LatestCloudWatchLogsDeliveryError': obj.latestCloudWatchLogsDeliveryError,
    'LatestCloudWatchLogsDeliveryTime': obj.latestCloudWatchLogsDeliveryTime,
    'LatestDigestDeliveryTime': obj.latestDigestDeliveryTime,
    'LatestDigestDeliveryError': obj.latestDigestDeliveryError,
    'LatestDeliveryAttemptTime': obj.latestDeliveryAttemptTime,
    'LatestNotificationAttemptTime': obj.latestNotificationAttemptTime,
    'LatestNotificationAttemptSucceeded': obj.latestNotificationAttemptSucceeded,
    'LatestDeliveryAttemptSucceeded': obj.latestDeliveryAttemptSucceeded,
    'TimeLoggingStarted': obj.timeLoggingStarted,
    'TimeLoggingStopped': obj.timeLoggingStopped,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailListPublicKeysRequest
 */
export interface CloudTrailListPublicKeysRequest {
  /**
   * @schema CloudTrailListPublicKeysRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema CloudTrailListPublicKeysRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema CloudTrailListPublicKeysRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailListPublicKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailListPublicKeysRequest(obj: CloudTrailListPublicKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailListPublicKeysResponse
 */
export interface CloudTrailListPublicKeysResponse {
  /**
   * @schema CloudTrailListPublicKeysResponse#PublicKeyList
   */
  readonly publicKeyList?: CloudTrailPublicKey[];

  /**
   * @schema CloudTrailListPublicKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailListPublicKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailListPublicKeysResponse(obj: CloudTrailListPublicKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicKeyList': obj.publicKeyList?.map(y => toJson_CloudTrailPublicKey(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailListTagsRequest
 */
export interface CloudTrailListTagsRequest {
  /**
   * @schema CloudTrailListTagsRequest#ResourceIdList
   */
  readonly resourceIdList?: string[];

  /**
   * @schema CloudTrailListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailListTagsRequest(obj: CloudTrailListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdList': obj.resourceIdList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailListTagsResponse
 */
export interface CloudTrailListTagsResponse {
  /**
   * @schema CloudTrailListTagsResponse#ResourceTagList
   */
  readonly resourceTagList?: CloudTrailResourceTag[];

  /**
   * @schema CloudTrailListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailListTagsResponse(obj: CloudTrailListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTagList': obj.resourceTagList?.map(y => toJson_CloudTrailResourceTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailListTrailsRequest
 */
export interface CloudTrailListTrailsRequest {
  /**
   * @schema CloudTrailListTrailsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailListTrailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailListTrailsRequest(obj: CloudTrailListTrailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailListTrailsResponse
 */
export interface CloudTrailListTrailsResponse {
  /**
   * @schema CloudTrailListTrailsResponse#Trails
   */
  readonly trails?: CloudTrailTrailInfo[];

  /**
   * @schema CloudTrailListTrailsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailListTrailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailListTrailsResponse(obj: CloudTrailListTrailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Trails': obj.trails?.map(y => toJson_CloudTrailTrailInfo(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailLookupEventsRequest
 */
export interface CloudTrailLookupEventsRequest {
  /**
   * @schema CloudTrailLookupEventsRequest#LookupAttributes
   */
  readonly lookupAttributes?: CloudTrailLookupAttribute[];

  /**
   * @schema CloudTrailLookupEventsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema CloudTrailLookupEventsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema CloudTrailLookupEventsRequest#EventCategory
   */
  readonly eventCategory?: string;

  /**
   * @schema CloudTrailLookupEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudTrailLookupEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailLookupEventsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailLookupEventsRequest(obj: CloudTrailLookupEventsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LookupAttributes': obj.lookupAttributes?.map(y => toJson_CloudTrailLookupAttribute(y)),
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'EventCategory': obj.eventCategory,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailLookupEventsResponse
 */
export interface CloudTrailLookupEventsResponse {
  /**
   * @schema CloudTrailLookupEventsResponse#Events
   */
  readonly events?: CloudTrailEvent[];

  /**
   * @schema CloudTrailLookupEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudTrailLookupEventsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailLookupEventsResponse(obj: CloudTrailLookupEventsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Events': obj.events?.map(y => toJson_CloudTrailEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailPutEventSelectorsRequest
 */
export interface CloudTrailPutEventSelectorsRequest {
  /**
   * @schema CloudTrailPutEventSelectorsRequest#TrailName
   */
  readonly trailName?: string;

  /**
   * @schema CloudTrailPutEventSelectorsRequest#EventSelectors
   */
  readonly eventSelectors?: CloudTrailEventSelector[];

  /**
   * @schema CloudTrailPutEventSelectorsRequest#AdvancedEventSelectors
   */
  readonly advancedEventSelectors?: CloudTrailAdvancedEventSelector[];

}

/**
 * Converts an object of type 'CloudTrailPutEventSelectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailPutEventSelectorsRequest(obj: CloudTrailPutEventSelectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailName': obj.trailName,
    'EventSelectors': obj.eventSelectors?.map(y => toJson_CloudTrailEventSelector(y)),
    'AdvancedEventSelectors': obj.advancedEventSelectors?.map(y => toJson_CloudTrailAdvancedEventSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailPutEventSelectorsResponse
 */
export interface CloudTrailPutEventSelectorsResponse {
  /**
   * @schema CloudTrailPutEventSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailPutEventSelectorsResponse#EventSelectors
   */
  readonly eventSelectors?: CloudTrailEventSelector[];

  /**
   * @schema CloudTrailPutEventSelectorsResponse#AdvancedEventSelectors
   */
  readonly advancedEventSelectors?: CloudTrailAdvancedEventSelector[];

}

/**
 * Converts an object of type 'CloudTrailPutEventSelectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailPutEventSelectorsResponse(obj: CloudTrailPutEventSelectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailARN': obj.trailArn,
    'EventSelectors': obj.eventSelectors?.map(y => toJson_CloudTrailEventSelector(y)),
    'AdvancedEventSelectors': obj.advancedEventSelectors?.map(y => toJson_CloudTrailAdvancedEventSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailPutInsightSelectorsRequest
 */
export interface CloudTrailPutInsightSelectorsRequest {
  /**
   * @schema CloudTrailPutInsightSelectorsRequest#TrailName
   */
  readonly trailName?: string;

  /**
   * @schema CloudTrailPutInsightSelectorsRequest#InsightSelectors
   */
  readonly insightSelectors?: CloudTrailInsightSelector[];

}

/**
 * Converts an object of type 'CloudTrailPutInsightSelectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailPutInsightSelectorsRequest(obj: CloudTrailPutInsightSelectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailName': obj.trailName,
    'InsightSelectors': obj.insightSelectors?.map(y => toJson_CloudTrailInsightSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailPutInsightSelectorsResponse
 */
export interface CloudTrailPutInsightSelectorsResponse {
  /**
   * @schema CloudTrailPutInsightSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailPutInsightSelectorsResponse#InsightSelectors
   */
  readonly insightSelectors?: CloudTrailInsightSelector[];

}

/**
 * Converts an object of type 'CloudTrailPutInsightSelectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailPutInsightSelectorsResponse(obj: CloudTrailPutInsightSelectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailARN': obj.trailArn,
    'InsightSelectors': obj.insightSelectors?.map(y => toJson_CloudTrailInsightSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailRemoveTagsRequest
 */
export interface CloudTrailRemoveTagsRequest {
  /**
   * @schema CloudTrailRemoveTagsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CloudTrailRemoveTagsRequest#TagsList
   */
  readonly tagsList?: CloudTrailTag[];

}

/**
 * Converts an object of type 'CloudTrailRemoveTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailRemoveTagsRequest(obj: CloudTrailRemoveTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagsList': obj.tagsList?.map(y => toJson_CloudTrailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailRemoveTagsResponse
 */
export interface CloudTrailRemoveTagsResponse {
}

/**
 * Converts an object of type 'CloudTrailRemoveTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailRemoveTagsResponse(obj: CloudTrailRemoveTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailStartLoggingRequest
 */
export interface CloudTrailStartLoggingRequest {
  /**
   * @schema CloudTrailStartLoggingRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudTrailStartLoggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailStartLoggingRequest(obj: CloudTrailStartLoggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailStartLoggingResponse
 */
export interface CloudTrailStartLoggingResponse {
}

/**
 * Converts an object of type 'CloudTrailStartLoggingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailStartLoggingResponse(obj: CloudTrailStartLoggingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailStopLoggingRequest
 */
export interface CloudTrailStopLoggingRequest {
  /**
   * @schema CloudTrailStopLoggingRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudTrailStopLoggingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailStopLoggingRequest(obj: CloudTrailStopLoggingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailStopLoggingResponse
 */
export interface CloudTrailStopLoggingResponse {
}

/**
 * Converts an object of type 'CloudTrailStopLoggingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailStopLoggingResponse(obj: CloudTrailStopLoggingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailUpdateTrailRequest
 */
export interface CloudTrailUpdateTrailRequest {
  /**
   * @schema CloudTrailUpdateTrailRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CloudTrailUpdateTrailRequest#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CloudTrailUpdateTrailRequest#EnableLogFileValidation
   */
  readonly enableLogFileValidation?: boolean;

  /**
   * @schema CloudTrailUpdateTrailRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CloudTrailUpdateTrailRequest#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * Converts an object of type 'CloudTrailUpdateTrailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailUpdateTrailRequest(obj: CloudTrailUpdateTrailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'SnsTopicName': obj.snsTopicName,
    'IncludeGlobalServiceEvents': obj.includeGlobalServiceEvents,
    'IsMultiRegionTrail': obj.isMultiRegionTrail,
    'EnableLogFileValidation': obj.enableLogFileValidation,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'CloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'IsOrganizationTrail': obj.isOrganizationTrail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailUpdateTrailResponse
 */
export interface CloudTrailUpdateTrailResponse {
  /**
   * @schema CloudTrailUpdateTrailResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CloudTrailUpdateTrailResponse#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CloudTrailUpdateTrailResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema CloudTrailUpdateTrailResponse#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CloudTrailUpdateTrailResponse#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * Converts an object of type 'CloudTrailUpdateTrailResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailUpdateTrailResponse(obj: CloudTrailUpdateTrailResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'SnsTopicName': obj.snsTopicName,
    'SnsTopicARN': obj.snsTopicArn,
    'IncludeGlobalServiceEvents': obj.includeGlobalServiceEvents,
    'IsMultiRegionTrail': obj.isMultiRegionTrail,
    'TrailARN': obj.trailArn,
    'LogFileValidationEnabled': obj.logFileValidationEnabled,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'CloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'IsOrganizationTrail': obj.isOrganizationTrail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailTag
 */
export interface CloudTrailTag {
  /**
   * @schema CloudTrailTag#Key
   */
  readonly key?: string;

  /**
   * @schema CloudTrailTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudTrailTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailTag(obj: CloudTrailTag | undefined): Record<string, any> | undefined {
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
 * @schema CloudTrailTrail
 */
export interface CloudTrailTrail {
  /**
   * @schema CloudTrailTrail#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailTrail#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CloudTrailTrail#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CloudTrailTrail#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CloudTrailTrail#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema CloudTrailTrail#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CloudTrailTrail#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CloudTrailTrail#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema CloudTrailTrail#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailTrail#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema CloudTrailTrail#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CloudTrailTrail#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CloudTrailTrail#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CloudTrailTrail#HasCustomEventSelectors
   */
  readonly hasCustomEventSelectors?: boolean;

  /**
   * @schema CloudTrailTrail#HasInsightSelectors
   */
  readonly hasInsightSelectors?: boolean;

  /**
   * @schema CloudTrailTrail#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * Converts an object of type 'CloudTrailTrail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailTrail(obj: CloudTrailTrail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'S3BucketName': obj.s3BucketName,
    'S3KeyPrefix': obj.s3KeyPrefix,
    'SnsTopicName': obj.snsTopicName,
    'SnsTopicARN': obj.snsTopicArn,
    'IncludeGlobalServiceEvents': obj.includeGlobalServiceEvents,
    'IsMultiRegionTrail': obj.isMultiRegionTrail,
    'HomeRegion': obj.homeRegion,
    'TrailARN': obj.trailArn,
    'LogFileValidationEnabled': obj.logFileValidationEnabled,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
    'CloudWatchLogsRoleArn': obj.cloudWatchLogsRoleArn,
    'KmsKeyId': obj.kmsKeyId,
    'HasCustomEventSelectors': obj.hasCustomEventSelectors,
    'HasInsightSelectors': obj.hasInsightSelectors,
    'IsOrganizationTrail': obj.isOrganizationTrail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailEventSelector
 */
export interface CloudTrailEventSelector {
  /**
   * @schema CloudTrailEventSelector#ReadWriteType
   */
  readonly readWriteType?: string;

  /**
   * @schema CloudTrailEventSelector#IncludeManagementEvents
   */
  readonly includeManagementEvents?: boolean;

  /**
   * @schema CloudTrailEventSelector#DataResources
   */
  readonly dataResources?: CloudTrailDataResource[];

  /**
   * @schema CloudTrailEventSelector#ExcludeManagementEventSources
   */
  readonly excludeManagementEventSources?: string[];

}

/**
 * Converts an object of type 'CloudTrailEventSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailEventSelector(obj: CloudTrailEventSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReadWriteType': obj.readWriteType,
    'IncludeManagementEvents': obj.includeManagementEvents,
    'DataResources': obj.dataResources?.map(y => toJson_CloudTrailDataResource(y)),
    'ExcludeManagementEventSources': obj.excludeManagementEventSources?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailAdvancedEventSelector
 */
export interface CloudTrailAdvancedEventSelector {
  /**
   * @schema CloudTrailAdvancedEventSelector#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailAdvancedEventSelector#FieldSelectors
   */
  readonly fieldSelectors?: CloudTrailAdvancedFieldSelector[];

}

/**
 * Converts an object of type 'CloudTrailAdvancedEventSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailAdvancedEventSelector(obj: CloudTrailAdvancedEventSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'FieldSelectors': obj.fieldSelectors?.map(y => toJson_CloudTrailAdvancedFieldSelector(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailInsightSelector
 */
export interface CloudTrailInsightSelector {
  /**
   * @schema CloudTrailInsightSelector#InsightType
   */
  readonly insightType?: string;

}

/**
 * Converts an object of type 'CloudTrailInsightSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailInsightSelector(obj: CloudTrailInsightSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InsightType': obj.insightType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailPublicKey
 */
export interface CloudTrailPublicKey {
  /**
   * @schema CloudTrailPublicKey#Value
   */
  readonly value?: any;

  /**
   * @schema CloudTrailPublicKey#ValidityStartTime
   */
  readonly validityStartTime?: string;

  /**
   * @schema CloudTrailPublicKey#ValidityEndTime
   */
  readonly validityEndTime?: string;

  /**
   * @schema CloudTrailPublicKey#Fingerprint
   */
  readonly fingerprint?: string;

}

/**
 * Converts an object of type 'CloudTrailPublicKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailPublicKey(obj: CloudTrailPublicKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'ValidityStartTime': obj.validityStartTime,
    'ValidityEndTime': obj.validityEndTime,
    'Fingerprint': obj.fingerprint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailResourceTag
 */
export interface CloudTrailResourceTag {
  /**
   * @schema CloudTrailResourceTag#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema CloudTrailResourceTag#TagsList
   */
  readonly tagsList?: CloudTrailTag[];

}

/**
 * Converts an object of type 'CloudTrailResourceTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailResourceTag(obj: CloudTrailResourceTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagsList': obj.tagsList?.map(y => toJson_CloudTrailTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailTrailInfo
 */
export interface CloudTrailTrailInfo {
  /**
   * @schema CloudTrailTrailInfo#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CloudTrailTrailInfo#Name
   */
  readonly name?: string;

  /**
   * @schema CloudTrailTrailInfo#HomeRegion
   */
  readonly homeRegion?: string;

}

/**
 * Converts an object of type 'CloudTrailTrailInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailTrailInfo(obj: CloudTrailTrailInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrailARN': obj.trailArn,
    'Name': obj.name,
    'HomeRegion': obj.homeRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailLookupAttribute
 */
export interface CloudTrailLookupAttribute {
  /**
   * @schema CloudTrailLookupAttribute#AttributeKey
   */
  readonly attributeKey?: string;

  /**
   * @schema CloudTrailLookupAttribute#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * Converts an object of type 'CloudTrailLookupAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailLookupAttribute(obj: CloudTrailLookupAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeKey': obj.attributeKey,
    'AttributeValue': obj.attributeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailEvent
 */
export interface CloudTrailEvent {
  /**
   * @schema CloudTrailEvent#EventId
   */
  readonly eventId?: string;

  /**
   * @schema CloudTrailEvent#EventName
   */
  readonly eventName?: string;

  /**
   * @schema CloudTrailEvent#ReadOnly
   */
  readonly readOnly?: string;

  /**
   * @schema CloudTrailEvent#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema CloudTrailEvent#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema CloudTrailEvent#EventSource
   */
  readonly eventSource?: string;

  /**
   * @schema CloudTrailEvent#Username
   */
  readonly username?: string;

  /**
   * @schema CloudTrailEvent#Resources
   */
  readonly resources?: CloudTrailResource[];

  /**
   * @schema CloudTrailEvent#CloudTrailEvent
   */
  readonly cloudTrailEvent?: string;

}

/**
 * Converts an object of type 'CloudTrailEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailEvent(obj: CloudTrailEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventId': obj.eventId,
    'EventName': obj.eventName,
    'ReadOnly': obj.readOnly,
    'AccessKeyId': obj.accessKeyId,
    'EventTime': obj.eventTime,
    'EventSource': obj.eventSource,
    'Username': obj.username,
    'Resources': obj.resources?.map(y => toJson_CloudTrailResource(y)),
    'CloudTrailEvent': obj.cloudTrailEvent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailDataResource
 */
export interface CloudTrailDataResource {
  /**
   * @schema CloudTrailDataResource#Type
   */
  readonly type?: string;

  /**
   * @schema CloudTrailDataResource#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'CloudTrailDataResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailDataResource(obj: CloudTrailDataResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailAdvancedFieldSelector
 */
export interface CloudTrailAdvancedFieldSelector {
  /**
   * @schema CloudTrailAdvancedFieldSelector#Field
   */
  readonly field?: string;

  /**
   * @schema CloudTrailAdvancedFieldSelector#Equals2
   */
  readonly equals2?: string[];

  /**
   * @schema CloudTrailAdvancedFieldSelector#StartsWith
   */
  readonly startsWith?: string[];

  /**
   * @schema CloudTrailAdvancedFieldSelector#EndsWith
   */
  readonly endsWith?: string[];

  /**
   * @schema CloudTrailAdvancedFieldSelector#NotEquals
   */
  readonly notEquals?: string[];

  /**
   * @schema CloudTrailAdvancedFieldSelector#NotStartsWith
   */
  readonly notStartsWith?: string[];

  /**
   * @schema CloudTrailAdvancedFieldSelector#NotEndsWith
   */
  readonly notEndsWith?: string[];

}

/**
 * Converts an object of type 'CloudTrailAdvancedFieldSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailAdvancedFieldSelector(obj: CloudTrailAdvancedFieldSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Field': obj.field,
    'Equals2': obj.equals2?.map(y => y),
    'StartsWith': obj.startsWith?.map(y => y),
    'EndsWith': obj.endsWith?.map(y => y),
    'NotEquals': obj.notEquals?.map(y => y),
    'NotStartsWith': obj.notStartsWith?.map(y => y),
    'NotEndsWith': obj.notEndsWith?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudTrailResource
 */
export interface CloudTrailResource {
  /**
   * @schema CloudTrailResource#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudTrailResource#ResourceName
   */
  readonly resourceName?: string;

}

/**
 * Converts an object of type 'CloudTrailResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudTrailResource(obj: CloudTrailResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceName': obj.resourceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
