/**
 * @schema CloudTrailAddTagsRequest
 */
export interface CloudTrailAddTagsRequest {
  /**
   * @schema CloudTrailAddTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CloudTrailAddTagsRequest#TagsList
   */
  readonly tagsList?: CloudTrailTag[];

}

/**
 * @schema CloudTrailAddTagsResponse
 */
export interface CloudTrailAddTagsResponse {
}

/**
 * @schema CloudTrailCreateTrailRequest
 */
export interface CloudTrailCreateTrailRequest {
  /**
   * @schema CloudTrailCreateTrailRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudTrailCreateTrailRequest#S3BucketName
   */
  readonly s3BucketName: string;

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
 * @schema CloudTrailDeleteTrailRequest
 */
export interface CloudTrailDeleteTrailRequest {
  /**
   * @schema CloudTrailDeleteTrailRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudTrailDeleteTrailResponse
 */
export interface CloudTrailDeleteTrailResponse {
}

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
 * @schema CloudTrailDescribeTrailsResponse
 */
export interface CloudTrailDescribeTrailsResponse {
  /**
   * @schema CloudTrailDescribeTrailsResponse#trailList
   */
  readonly trailList?: CloudTrailTrail[];

}

/**
 * @schema CloudTrailGetEventSelectorsRequest
 */
export interface CloudTrailGetEventSelectorsRequest {
  /**
   * @schema CloudTrailGetEventSelectorsRequest#TrailName
   */
  readonly trailName: string;

}

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
 * @schema CloudTrailGetInsightSelectorsRequest
 */
export interface CloudTrailGetInsightSelectorsRequest {
  /**
   * @schema CloudTrailGetInsightSelectorsRequest#TrailName
   */
  readonly trailName: string;

}

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
 * @schema CloudTrailGetTrailRequest
 */
export interface CloudTrailGetTrailRequest {
  /**
   * @schema CloudTrailGetTrailRequest#Name
   */
  readonly name: string;

}

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
 * @schema CloudTrailGetTrailStatusRequest
 */
export interface CloudTrailGetTrailStatusRequest {
  /**
   * @schema CloudTrailGetTrailStatusRequest#Name
   */
  readonly name: string;

}

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
 * @schema CloudTrailListTagsRequest
 */
export interface CloudTrailListTagsRequest {
  /**
   * @schema CloudTrailListTagsRequest#ResourceIdList
   */
  readonly resourceIdList: string[];

  /**
   * @schema CloudTrailListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudTrailListTrailsRequest
 */
export interface CloudTrailListTrailsRequest {
  /**
   * @schema CloudTrailListTrailsRequest#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudTrailPutEventSelectorsRequest
 */
export interface CloudTrailPutEventSelectorsRequest {
  /**
   * @schema CloudTrailPutEventSelectorsRequest#TrailName
   */
  readonly trailName: string;

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
 * @schema CloudTrailPutInsightSelectorsRequest
 */
export interface CloudTrailPutInsightSelectorsRequest {
  /**
   * @schema CloudTrailPutInsightSelectorsRequest#TrailName
   */
  readonly trailName: string;

  /**
   * @schema CloudTrailPutInsightSelectorsRequest#InsightSelectors
   */
  readonly insightSelectors: CloudTrailInsightSelector[];

}

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
 * @schema CloudTrailRemoveTagsRequest
 */
export interface CloudTrailRemoveTagsRequest {
  /**
   * @schema CloudTrailRemoveTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema CloudTrailRemoveTagsRequest#TagsList
   */
  readonly tagsList?: CloudTrailTag[];

}

/**
 * @schema CloudTrailRemoveTagsResponse
 */
export interface CloudTrailRemoveTagsResponse {
}

/**
 * @schema CloudTrailStartLoggingRequest
 */
export interface CloudTrailStartLoggingRequest {
  /**
   * @schema CloudTrailStartLoggingRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudTrailStartLoggingResponse
 */
export interface CloudTrailStartLoggingResponse {
}

/**
 * @schema CloudTrailStopLoggingRequest
 */
export interface CloudTrailStopLoggingRequest {
  /**
   * @schema CloudTrailStopLoggingRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudTrailStopLoggingResponse
 */
export interface CloudTrailStopLoggingResponse {
}

/**
 * @schema CloudTrailUpdateTrailRequest
 */
export interface CloudTrailUpdateTrailRequest {
  /**
   * @schema CloudTrailUpdateTrailRequest#Name
   */
  readonly name: string;

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
 * @schema CloudTrailTag
 */
export interface CloudTrailTag {
  /**
   * @schema CloudTrailTag#Key
   */
  readonly key: string;

  /**
   * @schema CloudTrailTag#Value
   */
  readonly value?: string;

}

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
 * @schema CloudTrailAdvancedEventSelector
 */
export interface CloudTrailAdvancedEventSelector {
  /**
   * @schema CloudTrailAdvancedEventSelector#Name
   */
  readonly name: string;

  /**
   * @schema CloudTrailAdvancedEventSelector#FieldSelectors
   */
  readonly fieldSelectors: CloudTrailAdvancedFieldSelector[];

}

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
 * @schema CloudTrailLookupAttribute
 */
export interface CloudTrailLookupAttribute {
  /**
   * @schema CloudTrailLookupAttribute#AttributeKey
   */
  readonly attributeKey: string;

  /**
   * @schema CloudTrailLookupAttribute#AttributeValue
   */
  readonly attributeValue: string;

}

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
 * @schema CloudTrailAdvancedFieldSelector
 */
export interface CloudTrailAdvancedFieldSelector {
  /**
   * @schema CloudTrailAdvancedFieldSelector#Field
   */
  readonly field: string;

  /**
   * @schema CloudTrailAdvancedFieldSelector#Equals
   */
  readonly equals?: string[];

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
