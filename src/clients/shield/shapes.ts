/**
 * @schema ShieldAssociateDrtLogBucketRequest
 */
export interface ShieldAssociateDrtLogBucketRequest {
  /**
   * @schema ShieldAssociateDrtLogBucketRequest#LogBucket
   */
  readonly logBucket: string;

}

/**
 * @schema ShieldAssociateDrtLogBucketResponse
 */
export interface ShieldAssociateDrtLogBucketResponse {
}

/**
 * @schema ShieldAssociateDrtRoleRequest
 */
export interface ShieldAssociateDrtRoleRequest {
  /**
   * @schema ShieldAssociateDrtRoleRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema ShieldAssociateDrtRoleResponse
 */
export interface ShieldAssociateDrtRoleResponse {
}

/**
 * @schema ShieldAssociateHealthCheckRequest
 */
export interface ShieldAssociateHealthCheckRequest {
  /**
   * @schema ShieldAssociateHealthCheckRequest#ProtectionId
   */
  readonly protectionId: string;

  /**
   * @schema ShieldAssociateHealthCheckRequest#HealthCheckArn
   */
  readonly healthCheckArn: string;

}

/**
 * @schema ShieldAssociateHealthCheckResponse
 */
export interface ShieldAssociateHealthCheckResponse {
}

/**
 * @schema ShieldAssociateProactiveEngagementDetailsRequest
 */
export interface ShieldAssociateProactiveEngagementDetailsRequest {
  /**
   * @schema ShieldAssociateProactiveEngagementDetailsRequest#EmergencyContactList
   */
  readonly emergencyContactList: ShieldEmergencyContact[];

}

/**
 * @schema ShieldAssociateProactiveEngagementDetailsResponse
 */
export interface ShieldAssociateProactiveEngagementDetailsResponse {
}

/**
 * @schema ShieldCreateProtectionRequest
 */
export interface ShieldCreateProtectionRequest {
  /**
   * @schema ShieldCreateProtectionRequest#Name
   */
  readonly name: string;

  /**
   * @schema ShieldCreateProtectionRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ShieldCreateProtectionResponse
 */
export interface ShieldCreateProtectionResponse {
  /**
   * @schema ShieldCreateProtectionResponse#ProtectionId
   */
  readonly protectionId?: string;

}

/**
 * @schema ShieldCreateProtectionGroupRequest
 */
export interface ShieldCreateProtectionGroupRequest {
  /**
   * @schema ShieldCreateProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#Aggregation
   */
  readonly aggregation: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#Members
   */
  readonly members?: string[];

}

/**
 * @schema ShieldCreateProtectionGroupResponse
 */
export interface ShieldCreateProtectionGroupResponse {
}

/**
 * @schema ShieldCreateSubscriptionRequest
 */
export interface ShieldCreateSubscriptionRequest {
}

/**
 * @schema ShieldCreateSubscriptionResponse
 */
export interface ShieldCreateSubscriptionResponse {
}

/**
 * @schema ShieldDeleteProtectionRequest
 */
export interface ShieldDeleteProtectionRequest {
  /**
   * @schema ShieldDeleteProtectionRequest#ProtectionId
   */
  readonly protectionId: string;

}

/**
 * @schema ShieldDeleteProtectionResponse
 */
export interface ShieldDeleteProtectionResponse {
}

/**
 * @schema ShieldDeleteProtectionGroupRequest
 */
export interface ShieldDeleteProtectionGroupRequest {
  /**
   * @schema ShieldDeleteProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

}

/**
 * @schema ShieldDeleteProtectionGroupResponse
 */
export interface ShieldDeleteProtectionGroupResponse {
}

/**
 * @schema ShieldDeleteSubscriptionRequest
 */
export interface ShieldDeleteSubscriptionRequest {
}

/**
 * @schema ShieldDeleteSubscriptionResponse
 */
export interface ShieldDeleteSubscriptionResponse {
}

/**
 * @schema ShieldDescribeAttackRequest
 */
export interface ShieldDescribeAttackRequest {
  /**
   * @schema ShieldDescribeAttackRequest#AttackId
   */
  readonly attackId: string;

}

/**
 * @schema ShieldDescribeAttackResponse
 */
export interface ShieldDescribeAttackResponse {
  /**
   * @schema ShieldDescribeAttackResponse#Attack
   */
  readonly attack?: ShieldAttackDetail;

}

/**
 * @schema ShieldDescribeAttackStatisticsRequest
 */
export interface ShieldDescribeAttackStatisticsRequest {
}

/**
 * @schema ShieldDescribeAttackStatisticsResponse
 */
export interface ShieldDescribeAttackStatisticsResponse {
  /**
   * @schema ShieldDescribeAttackStatisticsResponse#TimeRange
   */
  readonly timeRange: ShieldTimeRange;

  /**
   * @schema ShieldDescribeAttackStatisticsResponse#DataItems
   */
  readonly dataItems: ShieldAttackStatisticsDataItem[];

}

/**
 * @schema ShieldDescribeDrtAccessRequest
 */
export interface ShieldDescribeDrtAccessRequest {
}

/**
 * @schema ShieldDescribeDrtAccessResponse
 */
export interface ShieldDescribeDrtAccessResponse {
  /**
   * @schema ShieldDescribeDrtAccessResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ShieldDescribeDrtAccessResponse#LogBucketList
   */
  readonly logBucketList?: string[];

}

/**
 * @schema ShieldDescribeEmergencyContactSettingsRequest
 */
export interface ShieldDescribeEmergencyContactSettingsRequest {
}

/**
 * @schema ShieldDescribeEmergencyContactSettingsResponse
 */
export interface ShieldDescribeEmergencyContactSettingsResponse {
  /**
   * @schema ShieldDescribeEmergencyContactSettingsResponse#EmergencyContactList
   */
  readonly emergencyContactList?: ShieldEmergencyContact[];

}

/**
 * @schema ShieldDescribeProtectionRequest
 */
export interface ShieldDescribeProtectionRequest {
  /**
   * @schema ShieldDescribeProtectionRequest#ProtectionId
   */
  readonly protectionId?: string;

  /**
   * @schema ShieldDescribeProtectionRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema ShieldDescribeProtectionResponse
 */
export interface ShieldDescribeProtectionResponse {
  /**
   * @schema ShieldDescribeProtectionResponse#Protection
   */
  readonly protection?: ShieldProtection;

}

/**
 * @schema ShieldDescribeProtectionGroupRequest
 */
export interface ShieldDescribeProtectionGroupRequest {
  /**
   * @schema ShieldDescribeProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

}

/**
 * @schema ShieldDescribeProtectionGroupResponse
 */
export interface ShieldDescribeProtectionGroupResponse {
  /**
   * @schema ShieldDescribeProtectionGroupResponse#ProtectionGroup
   */
  readonly protectionGroup: ShieldProtectionGroup;

}

/**
 * @schema ShieldDescribeSubscriptionRequest
 */
export interface ShieldDescribeSubscriptionRequest {
}

/**
 * @schema ShieldDescribeSubscriptionResponse
 */
export interface ShieldDescribeSubscriptionResponse {
  /**
   * @schema ShieldDescribeSubscriptionResponse#Subscription
   */
  readonly subscription?: ShieldSubscription;

}

/**
 * @schema ShieldDisableProactiveEngagementRequest
 */
export interface ShieldDisableProactiveEngagementRequest {
}

/**
 * @schema ShieldDisableProactiveEngagementResponse
 */
export interface ShieldDisableProactiveEngagementResponse {
}

/**
 * @schema ShieldDisassociateDrtLogBucketRequest
 */
export interface ShieldDisassociateDrtLogBucketRequest {
  /**
   * @schema ShieldDisassociateDrtLogBucketRequest#LogBucket
   */
  readonly logBucket: string;

}

/**
 * @schema ShieldDisassociateDrtLogBucketResponse
 */
export interface ShieldDisassociateDrtLogBucketResponse {
}

/**
 * @schema ShieldDisassociateDrtRoleRequest
 */
export interface ShieldDisassociateDrtRoleRequest {
}

/**
 * @schema ShieldDisassociateDrtRoleResponse
 */
export interface ShieldDisassociateDrtRoleResponse {
}

/**
 * @schema ShieldDisassociateHealthCheckRequest
 */
export interface ShieldDisassociateHealthCheckRequest {
  /**
   * @schema ShieldDisassociateHealthCheckRequest#ProtectionId
   */
  readonly protectionId: string;

  /**
   * @schema ShieldDisassociateHealthCheckRequest#HealthCheckArn
   */
  readonly healthCheckArn: string;

}

/**
 * @schema ShieldDisassociateHealthCheckResponse
 */
export interface ShieldDisassociateHealthCheckResponse {
}

/**
 * @schema ShieldEnableProactiveEngagementRequest
 */
export interface ShieldEnableProactiveEngagementRequest {
}

/**
 * @schema ShieldEnableProactiveEngagementResponse
 */
export interface ShieldEnableProactiveEngagementResponse {
}

/**
 * @schema ShieldGetSubscriptionStateRequest
 */
export interface ShieldGetSubscriptionStateRequest {
}

/**
 * @schema ShieldGetSubscriptionStateResponse
 */
export interface ShieldGetSubscriptionStateResponse {
  /**
   * @schema ShieldGetSubscriptionStateResponse#SubscriptionState
   */
  readonly subscriptionState: string;

}

/**
 * @schema ShieldListAttacksRequest
 */
export interface ShieldListAttacksRequest {
  /**
   * @schema ShieldListAttacksRequest#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema ShieldListAttacksRequest#StartTime
   */
  readonly startTime?: ShieldTimeRange;

  /**
   * @schema ShieldListAttacksRequest#EndTime
   */
  readonly endTime?: ShieldTimeRange;

  /**
   * @schema ShieldListAttacksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ShieldListAttacksRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ShieldListAttacksResponse
 */
export interface ShieldListAttacksResponse {
  /**
   * @schema ShieldListAttacksResponse#AttackSummaries
   */
  readonly attackSummaries?: ShieldAttackSummary[];

  /**
   * @schema ShieldListAttacksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ShieldListProtectionGroupsRequest
 */
export interface ShieldListProtectionGroupsRequest {
  /**
   * @schema ShieldListProtectionGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ShieldListProtectionGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ShieldListProtectionGroupsResponse
 */
export interface ShieldListProtectionGroupsResponse {
  /**
   * @schema ShieldListProtectionGroupsResponse#ProtectionGroups
   */
  readonly protectionGroups: ShieldProtectionGroup[];

  /**
   * @schema ShieldListProtectionGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ShieldListProtectionsRequest
 */
export interface ShieldListProtectionsRequest {
  /**
   * @schema ShieldListProtectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ShieldListProtectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ShieldListProtectionsResponse
 */
export interface ShieldListProtectionsResponse {
  /**
   * @schema ShieldListProtectionsResponse#Protections
   */
  readonly protections?: ShieldProtection[];

  /**
   * @schema ShieldListProtectionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ShieldListResourcesInProtectionGroupRequest
 */
export interface ShieldListResourcesInProtectionGroupRequest {
  /**
   * @schema ShieldListResourcesInProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema ShieldListResourcesInProtectionGroupRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ShieldListResourcesInProtectionGroupRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ShieldListResourcesInProtectionGroupResponse
 */
export interface ShieldListResourcesInProtectionGroupResponse {
  /**
   * @schema ShieldListResourcesInProtectionGroupResponse#ResourceArns
   */
  readonly resourceArns: string[];

  /**
   * @schema ShieldListResourcesInProtectionGroupResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ShieldUpdateEmergencyContactSettingsRequest
 */
export interface ShieldUpdateEmergencyContactSettingsRequest {
  /**
   * @schema ShieldUpdateEmergencyContactSettingsRequest#EmergencyContactList
   */
  readonly emergencyContactList?: ShieldEmergencyContact[];

}

/**
 * @schema ShieldUpdateEmergencyContactSettingsResponse
 */
export interface ShieldUpdateEmergencyContactSettingsResponse {
}

/**
 * @schema ShieldUpdateProtectionGroupRequest
 */
export interface ShieldUpdateProtectionGroupRequest {
  /**
   * @schema ShieldUpdateProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema ShieldUpdateProtectionGroupRequest#Aggregation
   */
  readonly aggregation: string;

  /**
   * @schema ShieldUpdateProtectionGroupRequest#Pattern
   */
  readonly pattern: string;

  /**
   * @schema ShieldUpdateProtectionGroupRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ShieldUpdateProtectionGroupRequest#Members
   */
  readonly members?: string[];

}

/**
 * @schema ShieldUpdateProtectionGroupResponse
 */
export interface ShieldUpdateProtectionGroupResponse {
}

/**
 * @schema ShieldUpdateSubscriptionRequest
 */
export interface ShieldUpdateSubscriptionRequest {
  /**
   * @schema ShieldUpdateSubscriptionRequest#AutoRenew
   */
  readonly autoRenew?: string;

}

/**
 * @schema ShieldUpdateSubscriptionResponse
 */
export interface ShieldUpdateSubscriptionResponse {
}

/**
 * @schema ShieldEmergencyContact
 */
export interface ShieldEmergencyContact {
  /**
   * @schema ShieldEmergencyContact#EmailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema ShieldEmergencyContact#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ShieldEmergencyContact#ContactNotes
   */
  readonly contactNotes?: string;

}

/**
 * @schema ShieldAttackDetail
 */
export interface ShieldAttackDetail {
  /**
   * @schema ShieldAttackDetail#AttackId
   */
  readonly attackId?: string;

  /**
   * @schema ShieldAttackDetail#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ShieldAttackDetail#SubResources
   */
  readonly subResources?: ShieldSubResourceSummary[];

  /**
   * @schema ShieldAttackDetail#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ShieldAttackDetail#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ShieldAttackDetail#AttackCounters
   */
  readonly attackCounters?: ShieldSummarizedCounter[];

  /**
   * @schema ShieldAttackDetail#AttackProperties
   */
  readonly attackProperties?: ShieldAttackProperty[];

  /**
   * @schema ShieldAttackDetail#Mitigations
   */
  readonly mitigations?: ShieldMitigation[];

}

/**
 * @schema ShieldTimeRange
 */
export interface ShieldTimeRange {
  /**
   * @schema ShieldTimeRange#FromInclusive
   */
  readonly fromInclusive?: string;

  /**
   * @schema ShieldTimeRange#ToExclusive
   */
  readonly toExclusive?: string;

}

/**
 * @schema ShieldAttackStatisticsDataItem
 */
export interface ShieldAttackStatisticsDataItem {
  /**
   * @schema ShieldAttackStatisticsDataItem#AttackVolume
   */
  readonly attackVolume?: ShieldAttackVolume;

  /**
   * @schema ShieldAttackStatisticsDataItem#AttackCount
   */
  readonly attackCount: number;

}

/**
 * @schema ShieldProtection
 */
export interface ShieldProtection {
  /**
   * @schema ShieldProtection#Id
   */
  readonly id?: string;

  /**
   * @schema ShieldProtection#Name
   */
  readonly name?: string;

  /**
   * @schema ShieldProtection#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ShieldProtection#HealthCheckIds
   */
  readonly healthCheckIds?: string[];

}

/**
 * @schema ShieldProtectionGroup
 */
export interface ShieldProtectionGroup {
  /**
   * @schema ShieldProtectionGroup#ProtectionGroupId
   */
  readonly protectionGroupId: string;

  /**
   * @schema ShieldProtectionGroup#Aggregation
   */
  readonly aggregation: string;

  /**
   * @schema ShieldProtectionGroup#Pattern
   */
  readonly pattern: string;

  /**
   * @schema ShieldProtectionGroup#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ShieldProtectionGroup#Members
   */
  readonly members: string[];

}

/**
 * @schema ShieldSubscription
 */
export interface ShieldSubscription {
  /**
   * @schema ShieldSubscription#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ShieldSubscription#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ShieldSubscription#TimeCommitmentInSeconds
   */
  readonly timeCommitmentInSeconds?: number;

  /**
   * @schema ShieldSubscription#AutoRenew
   */
  readonly autoRenew?: string;

  /**
   * @schema ShieldSubscription#Limits
   */
  readonly limits?: ShieldLimit[];

  /**
   * @schema ShieldSubscription#ProactiveEngagementStatus
   */
  readonly proactiveEngagementStatus?: string;

  /**
   * @schema ShieldSubscription#SubscriptionLimits
   */
  readonly subscriptionLimits: ShieldSubscriptionLimits;

}

/**
 * @schema ShieldAttackSummary
 */
export interface ShieldAttackSummary {
  /**
   * @schema ShieldAttackSummary#AttackId
   */
  readonly attackId?: string;

  /**
   * @schema ShieldAttackSummary#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ShieldAttackSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ShieldAttackSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ShieldAttackSummary#AttackVectors
   */
  readonly attackVectors?: ShieldAttackVectorDescription[];

}

/**
 * @schema ShieldSubResourceSummary
 */
export interface ShieldSubResourceSummary {
  /**
   * @schema ShieldSubResourceSummary#Type
   */
  readonly type?: string;

  /**
   * @schema ShieldSubResourceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ShieldSubResourceSummary#AttackVectors
   */
  readonly attackVectors?: ShieldSummarizedAttackVector[];

  /**
   * @schema ShieldSubResourceSummary#Counters
   */
  readonly counters?: ShieldSummarizedCounter[];

}

/**
 * @schema ShieldSummarizedCounter
 */
export interface ShieldSummarizedCounter {
  /**
   * @schema ShieldSummarizedCounter#Name
   */
  readonly name?: string;

  /**
   * @schema ShieldSummarizedCounter#Max
   */
  readonly max?: number;

  /**
   * @schema ShieldSummarizedCounter#Average
   */
  readonly average?: number;

  /**
   * @schema ShieldSummarizedCounter#Sum
   */
  readonly sum?: number;

  /**
   * @schema ShieldSummarizedCounter#N
   */
  readonly n?: number;

  /**
   * @schema ShieldSummarizedCounter#Unit
   */
  readonly unit?: string;

}

/**
 * @schema ShieldAttackProperty
 */
export interface ShieldAttackProperty {
  /**
   * @schema ShieldAttackProperty#AttackLayer
   */
  readonly attackLayer?: string;

  /**
   * @schema ShieldAttackProperty#AttackPropertyIdentifier
   */
  readonly attackPropertyIdentifier?: string;

  /**
   * @schema ShieldAttackProperty#TopContributors
   */
  readonly topContributors?: ShieldContributor[];

  /**
   * @schema ShieldAttackProperty#Unit
   */
  readonly unit?: string;

  /**
   * @schema ShieldAttackProperty#Total
   */
  readonly total?: number;

}

/**
 * @schema ShieldMitigation
 */
export interface ShieldMitigation {
  /**
   * @schema ShieldMitigation#MitigationName
   */
  readonly mitigationName?: string;

}

/**
 * @schema ShieldAttackVolume
 */
export interface ShieldAttackVolume {
  /**
   * @schema ShieldAttackVolume#BitsPerSecond
   */
  readonly bitsPerSecond?: ShieldAttackVolumeStatistics;

  /**
   * @schema ShieldAttackVolume#PacketsPerSecond
   */
  readonly packetsPerSecond?: ShieldAttackVolumeStatistics;

  /**
   * @schema ShieldAttackVolume#RequestsPerSecond
   */
  readonly requestsPerSecond?: ShieldAttackVolumeStatistics;

}

/**
 * @schema ShieldLimit
 */
export interface ShieldLimit {
  /**
   * @schema ShieldLimit#Type
   */
  readonly type?: string;

  /**
   * @schema ShieldLimit#Max
   */
  readonly max?: number;

}

/**
 * @schema ShieldSubscriptionLimits
 */
export interface ShieldSubscriptionLimits {
  /**
   * @schema ShieldSubscriptionLimits#ProtectionLimits
   */
  readonly protectionLimits: ShieldProtectionLimits;

  /**
   * @schema ShieldSubscriptionLimits#ProtectionGroupLimits
   */
  readonly protectionGroupLimits: ShieldProtectionGroupLimits;

}

/**
 * @schema ShieldAttackVectorDescription
 */
export interface ShieldAttackVectorDescription {
  /**
   * @schema ShieldAttackVectorDescription#VectorType
   */
  readonly vectorType: string;

}

/**
 * @schema ShieldSummarizedAttackVector
 */
export interface ShieldSummarizedAttackVector {
  /**
   * @schema ShieldSummarizedAttackVector#VectorType
   */
  readonly vectorType: string;

  /**
   * @schema ShieldSummarizedAttackVector#VectorCounters
   */
  readonly vectorCounters?: ShieldSummarizedCounter[];

}

/**
 * @schema ShieldContributor
 */
export interface ShieldContributor {
  /**
   * @schema ShieldContributor#Name
   */
  readonly name?: string;

  /**
   * @schema ShieldContributor#Value
   */
  readonly value?: number;

}

/**
 * @schema ShieldAttackVolumeStatistics
 */
export interface ShieldAttackVolumeStatistics {
  /**
   * @schema ShieldAttackVolumeStatistics#Max
   */
  readonly max: number;

}

/**
 * @schema ShieldProtectionLimits
 */
export interface ShieldProtectionLimits {
  /**
   * @schema ShieldProtectionLimits#ProtectedResourceTypeLimits
   */
  readonly protectedResourceTypeLimits: ShieldLimit[];

}

/**
 * @schema ShieldProtectionGroupLimits
 */
export interface ShieldProtectionGroupLimits {
  /**
   * @schema ShieldProtectionGroupLimits#MaxProtectionGroups
   */
  readonly maxProtectionGroups: number;

  /**
   * @schema ShieldProtectionGroupLimits#PatternTypeLimits
   */
  readonly patternTypeLimits: ShieldProtectionGroupPatternTypeLimits;

}

/**
 * @schema ShieldProtectionGroupPatternTypeLimits
 */
export interface ShieldProtectionGroupPatternTypeLimits {
  /**
   * @schema ShieldProtectionGroupPatternTypeLimits#ArbitraryPatternLimits
   */
  readonly arbitraryPatternLimits: ShieldProtectionGroupArbitraryPatternLimits;

}

/**
 * @schema ShieldProtectionGroupArbitraryPatternLimits
 */
export interface ShieldProtectionGroupArbitraryPatternLimits {
  /**
   * @schema ShieldProtectionGroupArbitraryPatternLimits#MaxMembers
   */
  readonly maxMembers: number;

}
