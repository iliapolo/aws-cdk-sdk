/**
 * @schema AddTagsRequest
 */
export interface AddTagsRequest {
  /**
   * @schema AddTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AddTagsRequest#TagsList
   */
  readonly tagsList?: Tag[];

}

/**
 * @schema AddTagsResponse
 */
export interface AddTagsResponse {
}

/**
 * @schema CreateTrailRequest
 */
export interface CreateTrailRequest {
  /**
   * @schema CreateTrailRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateTrailRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema CreateTrailRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CreateTrailRequest#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CreateTrailRequest#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CreateTrailRequest#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CreateTrailRequest#EnableLogFileValidation
   */
  readonly enableLogFileValidation?: boolean;

  /**
   * @schema CreateTrailRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CreateTrailRequest#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CreateTrailRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateTrailRequest#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

  /**
   * @schema CreateTrailRequest#TagsList
   */
  readonly tagsList?: Tag[];

}

/**
 * @schema CreateTrailResponse
 */
export interface CreateTrailResponse {
  /**
   * @schema CreateTrailResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateTrailResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CreateTrailResponse#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema CreateTrailResponse#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema CreateTrailResponse#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema CreateTrailResponse#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema CreateTrailResponse#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema CreateTrailResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema CreateTrailResponse#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema CreateTrailResponse#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema CreateTrailResponse#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema CreateTrailResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateTrailResponse#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * @schema DeleteTrailRequest
 */
export interface DeleteTrailRequest {
  /**
   * @schema DeleteTrailRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteTrailResponse
 */
export interface DeleteTrailResponse {
}

/**
 * @schema DescribeTrailsRequest
 */
export interface DescribeTrailsRequest {
  /**
   * @schema DescribeTrailsRequest#trailNameList
   */
  readonly trailNameList?: string[];

  /**
   * @schema DescribeTrailsRequest#includeShadowTrails
   */
  readonly includeShadowTrails?: boolean;

}

/**
 * @schema DescribeTrailsResponse
 */
export interface DescribeTrailsResponse {
  /**
   * @schema DescribeTrailsResponse#trailList
   */
  readonly trailList?: Trail[];

}

/**
 * @schema GetEventSelectorsRequest
 */
export interface GetEventSelectorsRequest {
  /**
   * @schema GetEventSelectorsRequest#TrailName
   */
  readonly trailName: string;

}

/**
 * @schema GetEventSelectorsResponse
 */
export interface GetEventSelectorsResponse {
  /**
   * @schema GetEventSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema GetEventSelectorsResponse#EventSelectors
   */
  readonly eventSelectors?: EventSelector[];

  /**
   * @schema GetEventSelectorsResponse#AdvancedEventSelectors
   */
  readonly advancedEventSelectors?: AdvancedEventSelector[];

}

/**
 * @schema GetInsightSelectorsRequest
 */
export interface GetInsightSelectorsRequest {
  /**
   * @schema GetInsightSelectorsRequest#TrailName
   */
  readonly trailName: string;

}

/**
 * @schema GetInsightSelectorsResponse
 */
export interface GetInsightSelectorsResponse {
  /**
   * @schema GetInsightSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema GetInsightSelectorsResponse#InsightSelectors
   */
  readonly insightSelectors?: InsightSelector[];

}

/**
 * @schema GetTrailRequest
 */
export interface GetTrailRequest {
  /**
   * @schema GetTrailRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetTrailResponse
 */
export interface GetTrailResponse {
  /**
   * @schema GetTrailResponse#Trail
   */
  readonly trail?: Trail;

}

/**
 * @schema GetTrailStatusRequest
 */
export interface GetTrailStatusRequest {
  /**
   * @schema GetTrailStatusRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetTrailStatusResponse
 */
export interface GetTrailStatusResponse {
  /**
   * @schema GetTrailStatusResponse#IsLogging
   */
  readonly isLogging?: boolean;

  /**
   * @schema GetTrailStatusResponse#LatestDeliveryError
   */
  readonly latestDeliveryError?: string;

  /**
   * @schema GetTrailStatusResponse#LatestNotificationError
   */
  readonly latestNotificationError?: string;

  /**
   * @schema GetTrailStatusResponse#LatestDeliveryTime
   */
  readonly latestDeliveryTime?: string;

  /**
   * @schema GetTrailStatusResponse#LatestNotificationTime
   */
  readonly latestNotificationTime?: string;

  /**
   * @schema GetTrailStatusResponse#StartLoggingTime
   */
  readonly startLoggingTime?: string;

  /**
   * @schema GetTrailStatusResponse#StopLoggingTime
   */
  readonly stopLoggingTime?: string;

  /**
   * @schema GetTrailStatusResponse#LatestCloudWatchLogsDeliveryError
   */
  readonly latestCloudWatchLogsDeliveryError?: string;

  /**
   * @schema GetTrailStatusResponse#LatestCloudWatchLogsDeliveryTime
   */
  readonly latestCloudWatchLogsDeliveryTime?: string;

  /**
   * @schema GetTrailStatusResponse#LatestDigestDeliveryTime
   */
  readonly latestDigestDeliveryTime?: string;

  /**
   * @schema GetTrailStatusResponse#LatestDigestDeliveryError
   */
  readonly latestDigestDeliveryError?: string;

  /**
   * @schema GetTrailStatusResponse#LatestDeliveryAttemptTime
   */
  readonly latestDeliveryAttemptTime?: string;

  /**
   * @schema GetTrailStatusResponse#LatestNotificationAttemptTime
   */
  readonly latestNotificationAttemptTime?: string;

  /**
   * @schema GetTrailStatusResponse#LatestNotificationAttemptSucceeded
   */
  readonly latestNotificationAttemptSucceeded?: string;

  /**
   * @schema GetTrailStatusResponse#LatestDeliveryAttemptSucceeded
   */
  readonly latestDeliveryAttemptSucceeded?: string;

  /**
   * @schema GetTrailStatusResponse#TimeLoggingStarted
   */
  readonly timeLoggingStarted?: string;

  /**
   * @schema GetTrailStatusResponse#TimeLoggingStopped
   */
  readonly timeLoggingStopped?: string;

}

/**
 * @schema ListPublicKeysRequest
 */
export interface ListPublicKeysRequest {
  /**
   * @schema ListPublicKeysRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ListPublicKeysRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ListPublicKeysRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPublicKeysResponse
 */
export interface ListPublicKeysResponse {
  /**
   * @schema ListPublicKeysResponse#PublicKeyList
   */
  readonly publicKeyList?: PublicKey[];

  /**
   * @schema ListPublicKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#ResourceIdList
   */
  readonly resourceIdList: string[];

  /**
   * @schema ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#ResourceTagList
   */
  readonly resourceTagList?: ResourceTag[];

  /**
   * @schema ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrailsRequest
 */
export interface ListTrailsRequest {
  /**
   * @schema ListTrailsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrailsResponse
 */
export interface ListTrailsResponse {
  /**
   * @schema ListTrailsResponse#Trails
   */
  readonly trails?: TrailInfo[];

  /**
   * @schema ListTrailsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LookupEventsRequest
 */
export interface LookupEventsRequest {
  /**
   * @schema LookupEventsRequest#LookupAttributes
   */
  readonly lookupAttributes?: LookupAttribute[];

  /**
   * @schema LookupEventsRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema LookupEventsRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema LookupEventsRequest#EventCategory
   */
  readonly eventCategory?: string;

  /**
   * @schema LookupEventsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LookupEventsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LookupEventsResponse
 */
export interface LookupEventsResponse {
  /**
   * @schema LookupEventsResponse#Events
   */
  readonly events?: Event[];

  /**
   * @schema LookupEventsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutEventSelectorsRequest
 */
export interface PutEventSelectorsRequest {
  /**
   * @schema PutEventSelectorsRequest#TrailName
   */
  readonly trailName: string;

  /**
   * @schema PutEventSelectorsRequest#EventSelectors
   */
  readonly eventSelectors?: EventSelector[];

  /**
   * @schema PutEventSelectorsRequest#AdvancedEventSelectors
   */
  readonly advancedEventSelectors?: AdvancedEventSelector[];

}

/**
 * @schema PutEventSelectorsResponse
 */
export interface PutEventSelectorsResponse {
  /**
   * @schema PutEventSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema PutEventSelectorsResponse#EventSelectors
   */
  readonly eventSelectors?: EventSelector[];

  /**
   * @schema PutEventSelectorsResponse#AdvancedEventSelectors
   */
  readonly advancedEventSelectors?: AdvancedEventSelector[];

}

/**
 * @schema PutInsightSelectorsRequest
 */
export interface PutInsightSelectorsRequest {
  /**
   * @schema PutInsightSelectorsRequest#TrailName
   */
  readonly trailName: string;

  /**
   * @schema PutInsightSelectorsRequest#InsightSelectors
   */
  readonly insightSelectors: InsightSelector[];

}

/**
 * @schema PutInsightSelectorsResponse
 */
export interface PutInsightSelectorsResponse {
  /**
   * @schema PutInsightSelectorsResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema PutInsightSelectorsResponse#InsightSelectors
   */
  readonly insightSelectors?: InsightSelector[];

}

/**
 * @schema RemoveTagsRequest
 */
export interface RemoveTagsRequest {
  /**
   * @schema RemoveTagsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema RemoveTagsRequest#TagsList
   */
  readonly tagsList?: Tag[];

}

/**
 * @schema RemoveTagsResponse
 */
export interface RemoveTagsResponse {
}

/**
 * @schema StartLoggingRequest
 */
export interface StartLoggingRequest {
  /**
   * @schema StartLoggingRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartLoggingResponse
 */
export interface StartLoggingResponse {
}

/**
 * @schema StopLoggingRequest
 */
export interface StopLoggingRequest {
  /**
   * @schema StopLoggingRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopLoggingResponse
 */
export interface StopLoggingResponse {
}

/**
 * @schema UpdateTrailRequest
 */
export interface UpdateTrailRequest {
  /**
   * @schema UpdateTrailRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateTrailRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema UpdateTrailRequest#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema UpdateTrailRequest#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema UpdateTrailRequest#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema UpdateTrailRequest#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema UpdateTrailRequest#EnableLogFileValidation
   */
  readonly enableLogFileValidation?: boolean;

  /**
   * @schema UpdateTrailRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema UpdateTrailRequest#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema UpdateTrailRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema UpdateTrailRequest#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * @schema UpdateTrailResponse
 */
export interface UpdateTrailResponse {
  /**
   * @schema UpdateTrailResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateTrailResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema UpdateTrailResponse#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema UpdateTrailResponse#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema UpdateTrailResponse#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema UpdateTrailResponse#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema UpdateTrailResponse#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema UpdateTrailResponse#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema UpdateTrailResponse#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema UpdateTrailResponse#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema UpdateTrailResponse#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema UpdateTrailResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema UpdateTrailResponse#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

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
  readonly value?: string;

}

/**
 * @schema Trail
 */
export interface Trail {
  /**
   * @schema Trail#Name
   */
  readonly name?: string;

  /**
   * @schema Trail#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema Trail#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema Trail#SnsTopicName
   */
  readonly snsTopicName?: string;

  /**
   * @schema Trail#SnsTopicARN
   */
  readonly snsTopicArn?: string;

  /**
   * @schema Trail#IncludeGlobalServiceEvents
   */
  readonly includeGlobalServiceEvents?: boolean;

  /**
   * @schema Trail#IsMultiRegionTrail
   */
  readonly isMultiRegionTrail?: boolean;

  /**
   * @schema Trail#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema Trail#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema Trail#LogFileValidationEnabled
   */
  readonly logFileValidationEnabled?: boolean;

  /**
   * @schema Trail#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

  /**
   * @schema Trail#CloudWatchLogsRoleArn
   */
  readonly cloudWatchLogsRoleArn?: string;

  /**
   * @schema Trail#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Trail#HasCustomEventSelectors
   */
  readonly hasCustomEventSelectors?: boolean;

  /**
   * @schema Trail#HasInsightSelectors
   */
  readonly hasInsightSelectors?: boolean;

  /**
   * @schema Trail#IsOrganizationTrail
   */
  readonly isOrganizationTrail?: boolean;

}

/**
 * @schema EventSelector
 */
export interface EventSelector {
  /**
   * @schema EventSelector#ReadWriteType
   */
  readonly readWriteType?: string;

  /**
   * @schema EventSelector#IncludeManagementEvents
   */
  readonly includeManagementEvents?: boolean;

  /**
   * @schema EventSelector#DataResources
   */
  readonly dataResources?: DataResource[];

  /**
   * @schema EventSelector#ExcludeManagementEventSources
   */
  readonly excludeManagementEventSources?: string[];

}

/**
 * @schema AdvancedEventSelector
 */
export interface AdvancedEventSelector {
  /**
   * @schema AdvancedEventSelector#Name
   */
  readonly name: string;

  /**
   * @schema AdvancedEventSelector#FieldSelectors
   */
  readonly fieldSelectors: AdvancedFieldSelector[];

}

/**
 * @schema InsightSelector
 */
export interface InsightSelector {
  /**
   * @schema InsightSelector#InsightType
   */
  readonly insightType?: string;

}

/**
 * @schema PublicKey
 */
export interface PublicKey {
  /**
   * @schema PublicKey#Value
   */
  readonly value?: any;

  /**
   * @schema PublicKey#ValidityStartTime
   */
  readonly validityStartTime?: string;

  /**
   * @schema PublicKey#ValidityEndTime
   */
  readonly validityEndTime?: string;

  /**
   * @schema PublicKey#Fingerprint
   */
  readonly fingerprint?: string;

}

/**
 * @schema ResourceTag
 */
export interface ResourceTag {
  /**
   * @schema ResourceTag#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ResourceTag#TagsList
   */
  readonly tagsList?: Tag[];

}

/**
 * @schema TrailInfo
 */
export interface TrailInfo {
  /**
   * @schema TrailInfo#TrailARN
   */
  readonly trailArn?: string;

  /**
   * @schema TrailInfo#Name
   */
  readonly name?: string;

  /**
   * @schema TrailInfo#HomeRegion
   */
  readonly homeRegion?: string;

}

/**
 * @schema LookupAttribute
 */
export interface LookupAttribute {
  /**
   * @schema LookupAttribute#AttributeKey
   */
  readonly attributeKey: string;

  /**
   * @schema LookupAttribute#AttributeValue
   */
  readonly attributeValue: string;

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#EventId
   */
  readonly eventId?: string;

  /**
   * @schema Event#EventName
   */
  readonly eventName?: string;

  /**
   * @schema Event#ReadOnly
   */
  readonly readOnly?: string;

  /**
   * @schema Event#AccessKeyId
   */
  readonly accessKeyId?: string;

  /**
   * @schema Event#EventTime
   */
  readonly eventTime?: string;

  /**
   * @schema Event#EventSource
   */
  readonly eventSource?: string;

  /**
   * @schema Event#Username
   */
  readonly username?: string;

  /**
   * @schema Event#Resources
   */
  readonly resources?: Resource[];

  /**
   * @schema Event#CloudTrailEvent
   */
  readonly cloudTrailEvent?: string;

}

/**
 * @schema DataResource
 */
export interface DataResource {
  /**
   * @schema DataResource#Type
   */
  readonly type?: string;

  /**
   * @schema DataResource#Values
   */
  readonly values?: string[];

}

/**
 * @schema AdvancedFieldSelector
 */
export interface AdvancedFieldSelector {
  /**
   * @schema AdvancedFieldSelector#Field
   */
  readonly field: string;

  /**
   * @schema AdvancedFieldSelector#Equals
   */
  readonly equals?: string[];

  /**
   * @schema AdvancedFieldSelector#StartsWith
   */
  readonly startsWith?: string[];

  /**
   * @schema AdvancedFieldSelector#EndsWith
   */
  readonly endsWith?: string[];

  /**
   * @schema AdvancedFieldSelector#NotEquals
   */
  readonly notEquals?: string[];

  /**
   * @schema AdvancedFieldSelector#NotStartsWith
   */
  readonly notStartsWith?: string[];

  /**
   * @schema AdvancedFieldSelector#NotEndsWith
   */
  readonly notEndsWith?: string[];

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Resource#ResourceName
   */
  readonly resourceName?: string;

}
