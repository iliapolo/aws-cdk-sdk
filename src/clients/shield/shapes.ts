/**
 * @schema AssociateDrtLogBucketRequest
 */
export interface AssociateDrtLogBucketRequest {
  /**
   * @schema AssociateDrtLogBucketRequest#LogBucket
   */
  readonly logBucket: string;

}

/**
 * @schema AssociateDrtLogBucketResponse
 */
export interface AssociateDrtLogBucketResponse {
}

/**
 * @schema AssociateDrtRoleRequest
 */
export interface AssociateDrtRoleRequest {
  /**
   * @schema AssociateDrtRoleRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema AssociateDrtRoleResponse
 */
export interface AssociateDrtRoleResponse {
}

/**
 * @schema AssociateHealthCheckRequest
 */
export interface AssociateHealthCheckRequest {
  /**
   * @schema AssociateHealthCheckRequest#ProtectionId
   */
  readonly protectionId: string;

  /**
   * @schema AssociateHealthCheckRequest#HealthCheckArn
   */
  readonly healthCheckArn: string;

}

/**
 * @schema AssociateHealthCheckResponse
 */
export interface AssociateHealthCheckResponse {
}

/**
 * @schema AssociateProactiveEngagementDetailsRequest
 */
export interface AssociateProactiveEngagementDetailsRequest {
  /**
   * @schema AssociateProactiveEngagementDetailsRequest#EmergencyContactList
   */
  readonly emergencyContactList: EmergencyContact[];

}

/**
 * @schema AssociateProactiveEngagementDetailsResponse
 */
export interface AssociateProactiveEngagementDetailsResponse {
}

/**
 * @schema CreateProtectionRequest
 */
export interface CreateProtectionRequest {
  /**
   * @schema CreateProtectionRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateProtectionRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CreateProtectionResponse
 */
export interface CreateProtectionResponse {
  /**
   * @schema CreateProtectionResponse#ProtectionId
   */
  readonly protectionId?: string;

}

/**
 * @schema CreateProtectionGroupRequest
 */
export interface CreateProtectionGroupRequest {
  /**
   * @schema CreateProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema CreateProtectionGroupRequest#Aggregation
   */
  readonly aggregation: string;

  /**
   * @schema CreateProtectionGroupRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema CreateProtectionGroupRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CreateProtectionGroupRequest#Members
   */
  readonly members?: string[];

}

/**
 * @schema CreateProtectionGroupResponse
 */
export interface CreateProtectionGroupResponse {
}

/**
 * @schema CreateSubscriptionRequest
 */
export interface CreateSubscriptionRequest {
}

/**
 * @schema CreateSubscriptionResponse
 */
export interface CreateSubscriptionResponse {
}

/**
 * @schema DeleteProtectionRequest
 */
export interface DeleteProtectionRequest {
  /**
   * @schema DeleteProtectionRequest#ProtectionId
   */
  readonly protectionId: string;

}

/**
 * @schema DeleteProtectionResponse
 */
export interface DeleteProtectionResponse {
}

/**
 * @schema DeleteProtectionGroupRequest
 */
export interface DeleteProtectionGroupRequest {
  /**
   * @schema DeleteProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

}

/**
 * @schema DeleteProtectionGroupResponse
 */
export interface DeleteProtectionGroupResponse {
}

/**
 * @schema DeleteSubscriptionRequest
 */
export interface DeleteSubscriptionRequest {
}

/**
 * @schema DeleteSubscriptionResponse
 */
export interface DeleteSubscriptionResponse {
}

/**
 * @schema DescribeAttackRequest
 */
export interface DescribeAttackRequest {
  /**
   * @schema DescribeAttackRequest#AttackId
   */
  readonly attackId: string;

}

/**
 * @schema DescribeAttackResponse
 */
export interface DescribeAttackResponse {
  /**
   * @schema DescribeAttackResponse#Attack
   */
  readonly attack?: AttackDetail;

}

/**
 * @schema DescribeAttackStatisticsRequest
 */
export interface DescribeAttackStatisticsRequest {
}

/**
 * @schema DescribeAttackStatisticsResponse
 */
export interface DescribeAttackStatisticsResponse {
  /**
   * @schema DescribeAttackStatisticsResponse#TimeRange
   */
  readonly timeRange: TimeRange;

  /**
   * @schema DescribeAttackStatisticsResponse#DataItems
   */
  readonly dataItems: AttackStatisticsDataItem[];

}

/**
 * @schema DescribeDrtAccessRequest
 */
export interface DescribeDrtAccessRequest {
}

/**
 * @schema DescribeDrtAccessResponse
 */
export interface DescribeDrtAccessResponse {
  /**
   * @schema DescribeDrtAccessResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeDrtAccessResponse#LogBucketList
   */
  readonly logBucketList?: string[];

}

/**
 * @schema DescribeEmergencyContactSettingsRequest
 */
export interface DescribeEmergencyContactSettingsRequest {
}

/**
 * @schema DescribeEmergencyContactSettingsResponse
 */
export interface DescribeEmergencyContactSettingsResponse {
  /**
   * @schema DescribeEmergencyContactSettingsResponse#EmergencyContactList
   */
  readonly emergencyContactList?: EmergencyContact[];

}

/**
 * @schema DescribeProtectionRequest
 */
export interface DescribeProtectionRequest {
  /**
   * @schema DescribeProtectionRequest#ProtectionId
   */
  readonly protectionId?: string;

  /**
   * @schema DescribeProtectionRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema DescribeProtectionResponse
 */
export interface DescribeProtectionResponse {
  /**
   * @schema DescribeProtectionResponse#Protection
   */
  readonly protection?: Protection;

}

/**
 * @schema DescribeProtectionGroupRequest
 */
export interface DescribeProtectionGroupRequest {
  /**
   * @schema DescribeProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

}

/**
 * @schema DescribeProtectionGroupResponse
 */
export interface DescribeProtectionGroupResponse {
  /**
   * @schema DescribeProtectionGroupResponse#ProtectionGroup
   */
  readonly protectionGroup: ProtectionGroup;

}

/**
 * @schema DescribeSubscriptionRequest
 */
export interface DescribeSubscriptionRequest {
}

/**
 * @schema DescribeSubscriptionResponse
 */
export interface DescribeSubscriptionResponse {
  /**
   * @schema DescribeSubscriptionResponse#Subscription
   */
  readonly subscription?: Subscription;

}

/**
 * @schema DisableProactiveEngagementRequest
 */
export interface DisableProactiveEngagementRequest {
}

/**
 * @schema DisableProactiveEngagementResponse
 */
export interface DisableProactiveEngagementResponse {
}

/**
 * @schema DisassociateDrtLogBucketRequest
 */
export interface DisassociateDrtLogBucketRequest {
  /**
   * @schema DisassociateDrtLogBucketRequest#LogBucket
   */
  readonly logBucket: string;

}

/**
 * @schema DisassociateDrtLogBucketResponse
 */
export interface DisassociateDrtLogBucketResponse {
}

/**
 * @schema DisassociateDrtRoleRequest
 */
export interface DisassociateDrtRoleRequest {
}

/**
 * @schema DisassociateDrtRoleResponse
 */
export interface DisassociateDrtRoleResponse {
}

/**
 * @schema DisassociateHealthCheckRequest
 */
export interface DisassociateHealthCheckRequest {
  /**
   * @schema DisassociateHealthCheckRequest#ProtectionId
   */
  readonly protectionId: string;

  /**
   * @schema DisassociateHealthCheckRequest#HealthCheckArn
   */
  readonly healthCheckArn: string;

}

/**
 * @schema DisassociateHealthCheckResponse
 */
export interface DisassociateHealthCheckResponse {
}

/**
 * @schema EnableProactiveEngagementRequest
 */
export interface EnableProactiveEngagementRequest {
}

/**
 * @schema EnableProactiveEngagementResponse
 */
export interface EnableProactiveEngagementResponse {
}

/**
 * @schema GetSubscriptionStateRequest
 */
export interface GetSubscriptionStateRequest {
}

/**
 * @schema GetSubscriptionStateResponse
 */
export interface GetSubscriptionStateResponse {
  /**
   * @schema GetSubscriptionStateResponse#SubscriptionState
   */
  readonly subscriptionState: string;

}

/**
 * @schema ListAttacksRequest
 */
export interface ListAttacksRequest {
  /**
   * @schema ListAttacksRequest#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema ListAttacksRequest#StartTime
   */
  readonly startTime?: TimeRange;

  /**
   * @schema ListAttacksRequest#EndTime
   */
  readonly endTime?: TimeRange;

  /**
   * @schema ListAttacksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAttacksRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAttacksResponse
 */
export interface ListAttacksResponse {
  /**
   * @schema ListAttacksResponse#AttackSummaries
   */
  readonly attackSummaries?: AttackSummary[];

  /**
   * @schema ListAttacksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProtectionGroupsRequest
 */
export interface ListProtectionGroupsRequest {
  /**
   * @schema ListProtectionGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProtectionGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProtectionGroupsResponse
 */
export interface ListProtectionGroupsResponse {
  /**
   * @schema ListProtectionGroupsResponse#ProtectionGroups
   */
  readonly protectionGroups: ProtectionGroup[];

  /**
   * @schema ListProtectionGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProtectionsRequest
 */
export interface ListProtectionsRequest {
  /**
   * @schema ListProtectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProtectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProtectionsResponse
 */
export interface ListProtectionsResponse {
  /**
   * @schema ListProtectionsResponse#Protections
   */
  readonly protections?: Protection[];

  /**
   * @schema ListProtectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourcesInProtectionGroupRequest
 */
export interface ListResourcesInProtectionGroupRequest {
  /**
   * @schema ListResourcesInProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema ListResourcesInProtectionGroupRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourcesInProtectionGroupRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourcesInProtectionGroupResponse
 */
export interface ListResourcesInProtectionGroupResponse {
  /**
   * @schema ListResourcesInProtectionGroupResponse#ResourceArns
   */
  readonly resourceArns: string[];

  /**
   * @schema ListResourcesInProtectionGroupResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema UpdateEmergencyContactSettingsRequest
 */
export interface UpdateEmergencyContactSettingsRequest {
  /**
   * @schema UpdateEmergencyContactSettingsRequest#EmergencyContactList
   */
  readonly emergencyContactList?: EmergencyContact[];

}

/**
 * @schema UpdateEmergencyContactSettingsResponse
 */
export interface UpdateEmergencyContactSettingsResponse {
}

/**
 * @schema UpdateProtectionGroupRequest
 */
export interface UpdateProtectionGroupRequest {
  /**
   * @schema UpdateProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema UpdateProtectionGroupRequest#Aggregation
   */
  readonly aggregation: string;

  /**
   * @schema UpdateProtectionGroupRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema UpdateProtectionGroupRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema UpdateProtectionGroupRequest#Members
   */
  readonly members?: string[];

}

/**
 * @schema UpdateProtectionGroupResponse
 */
export interface UpdateProtectionGroupResponse {
}

/**
 * @schema UpdateSubscriptionRequest
 */
export interface UpdateSubscriptionRequest {
  /**
   * @schema UpdateSubscriptionRequest#AutoRenew
   */
  readonly autoRenew?: string;

}

/**
 * @schema UpdateSubscriptionResponse
 */
export interface UpdateSubscriptionResponse {
}

/**
 * @schema EmergencyContact
 */
export interface EmergencyContact {
  /**
   * @schema EmergencyContact#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema EmergencyContact#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema EmergencyContact#ContactNotes
   */
  readonly contactNotes?: string;

}

/**
 * @schema AttackDetail
 */
export interface AttackDetail {
  /**
   * @schema AttackDetail#AttackId
   */
  readonly attackId?: string;

  /**
   * @schema AttackDetail#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AttackDetail#SubResources
   */
  readonly subResources?: SubResourceSummary[];

  /**
   * @schema AttackDetail#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AttackDetail#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AttackDetail#AttackCounters
   */
  readonly attackCounters?: SummarizedCounter[];

  /**
   * @schema AttackDetail#AttackProperties
   */
  readonly attackProperties?: AttackProperty[];

  /**
   * @schema AttackDetail#Mitigations
   */
  readonly mitigations?: Mitigation[];

}

/**
 * @schema TimeRange
 */
export interface TimeRange {
  /**
   * @schema TimeRange#FromInclusive
   */
  readonly fromInclusive?: string;

  /**
   * @schema TimeRange#ToExclusive
   */
  readonly toExclusive?: string;

}

/**
 * @schema AttackStatisticsDataItem
 */
export interface AttackStatisticsDataItem {
  /**
   * @schema AttackStatisticsDataItem#AttackVolume
   */
  readonly attackVolume?: AttackVolume;

  /**
   * @schema AttackStatisticsDataItem#AttackCount
   */
  readonly attackCount: number;

}

/**
 * @schema Protection
 */
export interface Protection {
  /**
   * @schema Protection#Id
   */
  readonly id?: string;

  /**
   * @schema Protection#Name
   */
  readonly name?: string;

  /**
   * @schema Protection#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Protection#HealthCheckIds
   */
  readonly healthCheckIds?: string[];

}

/**
 * @schema ProtectionGroup
 */
export interface ProtectionGroup {
  /**
   * @schema ProtectionGroup#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema ProtectionGroup#Aggregation
   */
  readonly aggregation: string;

  /**
   * @schema ProtectionGroup#Pattern
   */
  readonly pattern: string;

  /**
   * @schema ProtectionGroup#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ProtectionGroup#Members
   */
  readonly members: string[];

}

/**
 * @schema Subscription
 */
export interface Subscription {
  /**
   * @schema Subscription#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Subscription#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Subscription#TimeCommitmentInSeconds
   */
  readonly timeCommitmentInSeconds?: number;

  /**
   * @schema Subscription#AutoRenew
   */
  readonly autoRenew?: string;

  /**
   * @schema Subscription#Limits
   */
  readonly limits?: Limit[];

  /**
   * @schema Subscription#ProactiveEngagementStatus
   */
  readonly proactiveEngagementStatus?: string;

  /**
   * @schema Subscription#SubscriptionLimits
   */
  readonly subscriptionLimits: SubscriptionLimits;

}

/**
 * @schema AttackSummary
 */
export interface AttackSummary {
  /**
   * @schema AttackSummary#AttackId
   */
  readonly attackId?: string;

  /**
   * @schema AttackSummary#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AttackSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema AttackSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AttackSummary#AttackVectors
   */
  readonly attackVectors?: AttackVectorDescription[];

}

/**
 * @schema SubResourceSummary
 */
export interface SubResourceSummary {
  /**
   * @schema SubResourceSummary#Type
   */
  readonly type?: string;

  /**
   * @schema SubResourceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema SubResourceSummary#AttackVectors
   */
  readonly attackVectors?: SummarizedAttackVector[];

  /**
   * @schema SubResourceSummary#Counters
   */
  readonly counters?: SummarizedCounter[];

}

/**
 * @schema SummarizedCounter
 */
export interface SummarizedCounter {
  /**
   * @schema SummarizedCounter#Name
   */
  readonly name?: string;

  /**
   * @schema SummarizedCounter#Max
   */
  readonly max?: number;

  /**
   * @schema SummarizedCounter#Average
   */
  readonly average?: number;

  /**
   * @schema SummarizedCounter#Sum
   */
  readonly sum?: number;

  /**
   * @schema SummarizedCounter#N
   */
  readonly n?: number;

  /**
   * @schema SummarizedCounter#Unit
   */
  readonly unit?: string;

}

/**
 * @schema AttackProperty
 */
export interface AttackProperty {
  /**
   * @schema AttackProperty#AttackLayer
   */
  readonly attackLayer?: string;

  /**
   * @schema AttackProperty#AttackPropertyIdentifier
   */
  readonly attackPropertyIdentifier?: string;

  /**
   * @schema AttackProperty#TopContributors
   */
  readonly topContributors?: Contributor[];

  /**
   * @schema AttackProperty#Unit
   */
  readonly unit?: string;

  /**
   * @schema AttackProperty#Total
   */
  readonly total?: number;

}

/**
 * @schema Mitigation
 */
export interface Mitigation {
  /**
   * @schema Mitigation#MitigationName
   */
  readonly mitigationName?: string;

}

/**
 * @schema AttackVolume
 */
export interface AttackVolume {
  /**
   * @schema AttackVolume#BitsPerSecond
   */
  readonly bitsPerSecond?: AttackVolumeStatistics;

  /**
   * @schema AttackVolume#PacketsPerSecond
   */
  readonly packetsPerSecond?: AttackVolumeStatistics;

  /**
   * @schema AttackVolume#RequestsPerSecond
   */
  readonly requestsPerSecond?: AttackVolumeStatistics;

}

/**
 * @schema Limit
 */
export interface Limit {
  /**
   * @schema Limit#Type
   */
  readonly type?: string;

  /**
   * @schema Limit#Max
   */
  readonly max?: number;

}

/**
 * @schema SubscriptionLimits
 */
export interface SubscriptionLimits {
  /**
   * @schema SubscriptionLimits#ProtectionLimits
   */
  readonly protectionLimits: ProtectionLimits;

  /**
   * @schema SubscriptionLimits#ProtectionGroupLimits
   */
  readonly protectionGroupLimits: ProtectionGroupLimits;

}

/**
 * @schema AttackVectorDescription
 */
export interface AttackVectorDescription {
  /**
   * @schema AttackVectorDescription#VectorType
   */
  readonly vectorType: string;

}

/**
 * @schema SummarizedAttackVector
 */
export interface SummarizedAttackVector {
  /**
   * @schema SummarizedAttackVector#VectorType
   */
  readonly vectorType: string;

  /**
   * @schema SummarizedAttackVector#VectorCounters
   */
  readonly vectorCounters?: SummarizedCounter[];

}

/**
 * @schema Contributor
 */
export interface Contributor {
  /**
   * @schema Contributor#Name
   */
  readonly name?: string;

  /**
   * @schema Contributor#Value
   */
  readonly value?: number;

}

/**
 * @schema AttackVolumeStatistics
 */
export interface AttackVolumeStatistics {
  /**
   * @schema AttackVolumeStatistics#Max
   */
  readonly max: number;

}

/**
 * @schema ProtectionLimits
 */
export interface ProtectionLimits {
  /**
   * @schema ProtectionLimits#ProtectedResourceTypeLimits
   */
  readonly protectedResourceTypeLimits: Limit[];

}

/**
 * @schema ProtectionGroupLimits
 */
export interface ProtectionGroupLimits {
  /**
   * @schema ProtectionGroupLimits#MaxProtectionGroups
   */
  readonly maxProtectionGroups: number;

  /**
   * @schema ProtectionGroupLimits#PatternTypeLimits
   */
  readonly patternTypeLimits: ProtectionGroupPatternTypeLimits;

}

/**
 * @schema ProtectionGroupPatternTypeLimits
 */
export interface ProtectionGroupPatternTypeLimits {
  /**
   * @schema ProtectionGroupPatternTypeLimits#ArbitraryPatternLimits
   */
  readonly arbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits;

}

/**
 * @schema ProtectionGroupArbitraryPatternLimits
 */
export interface ProtectionGroupArbitraryPatternLimits {
  /**
   * @schema ProtectionGroupArbitraryPatternLimits#MaxMembers
   */
  readonly maxMembers: number;

}
