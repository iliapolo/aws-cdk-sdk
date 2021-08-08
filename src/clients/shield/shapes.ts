/**
 * @schema ShieldAssociateDrtLogBucketRequest
 */
export interface ShieldAssociateDrtLogBucketRequest {
  /**
   * @schema ShieldAssociateDrtLogBucketRequest#LogBucket
   */
  readonly logBucket?: string;

}

/**
 * Converts an object of type 'ShieldAssociateDrtLogBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateDrtLogBucketRequest(obj: ShieldAssociateDrtLogBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogBucket': obj.logBucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateDrtLogBucketResponse
 */
export interface ShieldAssociateDrtLogBucketResponse {
}

/**
 * Converts an object of type 'ShieldAssociateDrtLogBucketResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateDrtLogBucketResponse(obj: ShieldAssociateDrtLogBucketResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateDrtRoleRequest
 */
export interface ShieldAssociateDrtRoleRequest {
  /**
   * @schema ShieldAssociateDrtRoleRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'ShieldAssociateDrtRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateDrtRoleRequest(obj: ShieldAssociateDrtRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateDrtRoleResponse
 */
export interface ShieldAssociateDrtRoleResponse {
}

/**
 * Converts an object of type 'ShieldAssociateDrtRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateDrtRoleResponse(obj: ShieldAssociateDrtRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateHealthCheckRequest
 */
export interface ShieldAssociateHealthCheckRequest {
  /**
   * @schema ShieldAssociateHealthCheckRequest#ProtectionId
   */
  readonly protectionId?: string;

  /**
   * @schema ShieldAssociateHealthCheckRequest#HealthCheckArn
   */
  readonly healthCheckArn?: string;

}

/**
 * Converts an object of type 'ShieldAssociateHealthCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateHealthCheckRequest(obj: ShieldAssociateHealthCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionId': obj.protectionId,
    'HealthCheckArn': obj.healthCheckArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateHealthCheckResponse
 */
export interface ShieldAssociateHealthCheckResponse {
}

/**
 * Converts an object of type 'ShieldAssociateHealthCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateHealthCheckResponse(obj: ShieldAssociateHealthCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateProactiveEngagementDetailsRequest
 */
export interface ShieldAssociateProactiveEngagementDetailsRequest {
  /**
   * @schema ShieldAssociateProactiveEngagementDetailsRequest#EmergencyContactList
   */
  readonly emergencyContactList?: ShieldEmergencyContact[];

}

/**
 * Converts an object of type 'ShieldAssociateProactiveEngagementDetailsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateProactiveEngagementDetailsRequest(obj: ShieldAssociateProactiveEngagementDetailsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmergencyContactList': obj.emergencyContactList?.map(y => toJson_ShieldEmergencyContact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAssociateProactiveEngagementDetailsResponse
 */
export interface ShieldAssociateProactiveEngagementDetailsResponse {
}

/**
 * Converts an object of type 'ShieldAssociateProactiveEngagementDetailsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAssociateProactiveEngagementDetailsResponse(obj: ShieldAssociateProactiveEngagementDetailsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldCreateProtectionRequest
 */
export interface ShieldCreateProtectionRequest {
  /**
   * @schema ShieldCreateProtectionRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ShieldCreateProtectionRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ShieldCreateProtectionRequest#Tags
   */
  readonly tags?: ShieldTag[];

}

/**
 * Converts an object of type 'ShieldCreateProtectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldCreateProtectionRequest(obj: ShieldCreateProtectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ShieldTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldCreateProtectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldCreateProtectionResponse(obj: ShieldCreateProtectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionId': obj.protectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldCreateProtectionGroupRequest
 */
export interface ShieldCreateProtectionGroupRequest {
  /**
   * @schema ShieldCreateProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId?: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#Aggregation
   */
  readonly aggregation?: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ShieldCreateProtectionGroupRequest#Members
   */
  readonly members?: string[];

  /**
   * @schema ShieldCreateProtectionGroupRequest#Tags
   */
  readonly tags?: ShieldTag[];

}

/**
 * Converts an object of type 'ShieldCreateProtectionGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldCreateProtectionGroupRequest(obj: ShieldCreateProtectionGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroupId': obj.protectionGroupId,
    'Aggregation': obj.aggregation,
    'Pattern': obj.pattern,
    'ResourceType': obj.resourceType,
    'Members': obj.members?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_ShieldTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldCreateProtectionGroupResponse
 */
export interface ShieldCreateProtectionGroupResponse {
}

/**
 * Converts an object of type 'ShieldCreateProtectionGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldCreateProtectionGroupResponse(obj: ShieldCreateProtectionGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldCreateSubscriptionRequest
 */
export interface ShieldCreateSubscriptionRequest {
}

/**
 * Converts an object of type 'ShieldCreateSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldCreateSubscriptionRequest(obj: ShieldCreateSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldCreateSubscriptionResponse
 */
export interface ShieldCreateSubscriptionResponse {
}

/**
 * Converts an object of type 'ShieldCreateSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldCreateSubscriptionResponse(obj: ShieldCreateSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDeleteProtectionRequest
 */
export interface ShieldDeleteProtectionRequest {
  /**
   * @schema ShieldDeleteProtectionRequest#ProtectionId
   */
  readonly protectionId?: string;

}

/**
 * Converts an object of type 'ShieldDeleteProtectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDeleteProtectionRequest(obj: ShieldDeleteProtectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionId': obj.protectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDeleteProtectionResponse
 */
export interface ShieldDeleteProtectionResponse {
}

/**
 * Converts an object of type 'ShieldDeleteProtectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDeleteProtectionResponse(obj: ShieldDeleteProtectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDeleteProtectionGroupRequest
 */
export interface ShieldDeleteProtectionGroupRequest {
  /**
   * @schema ShieldDeleteProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId?: string;

}

/**
 * Converts an object of type 'ShieldDeleteProtectionGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDeleteProtectionGroupRequest(obj: ShieldDeleteProtectionGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroupId': obj.protectionGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDeleteProtectionGroupResponse
 */
export interface ShieldDeleteProtectionGroupResponse {
}

/**
 * Converts an object of type 'ShieldDeleteProtectionGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDeleteProtectionGroupResponse(obj: ShieldDeleteProtectionGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDeleteSubscriptionRequest
 */
export interface ShieldDeleteSubscriptionRequest {
}

/**
 * Converts an object of type 'ShieldDeleteSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDeleteSubscriptionRequest(obj: ShieldDeleteSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDeleteSubscriptionResponse
 */
export interface ShieldDeleteSubscriptionResponse {
}

/**
 * Converts an object of type 'ShieldDeleteSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDeleteSubscriptionResponse(obj: ShieldDeleteSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeAttackRequest
 */
export interface ShieldDescribeAttackRequest {
  /**
   * @schema ShieldDescribeAttackRequest#AttackId
   */
  readonly attackId?: string;

}

/**
 * Converts an object of type 'ShieldDescribeAttackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeAttackRequest(obj: ShieldDescribeAttackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttackId': obj.attackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldDescribeAttackResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeAttackResponse(obj: ShieldDescribeAttackResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attack': toJson_ShieldAttackDetail(obj.attack),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeAttackStatisticsRequest
 */
export interface ShieldDescribeAttackStatisticsRequest {
}

/**
 * Converts an object of type 'ShieldDescribeAttackStatisticsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeAttackStatisticsRequest(obj: ShieldDescribeAttackStatisticsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeAttackStatisticsResponse
 */
export interface ShieldDescribeAttackStatisticsResponse {
  /**
   * @schema ShieldDescribeAttackStatisticsResponse#TimeRange
   */
  readonly timeRange?: ShieldTimeRange;

  /**
   * @schema ShieldDescribeAttackStatisticsResponse#DataItems
   */
  readonly dataItems?: ShieldAttackStatisticsDataItem[];

}

/**
 * Converts an object of type 'ShieldDescribeAttackStatisticsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeAttackStatisticsResponse(obj: ShieldDescribeAttackStatisticsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeRange': toJson_ShieldTimeRange(obj.timeRange),
    'DataItems': obj.dataItems?.map(y => toJson_ShieldAttackStatisticsDataItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeDrtAccessRequest
 */
export interface ShieldDescribeDrtAccessRequest {
}

/**
 * Converts an object of type 'ShieldDescribeDrtAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeDrtAccessRequest(obj: ShieldDescribeDrtAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldDescribeDrtAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeDrtAccessResponse(obj: ShieldDescribeDrtAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoleArn': obj.roleArn,
    'LogBucketList': obj.logBucketList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeEmergencyContactSettingsRequest
 */
export interface ShieldDescribeEmergencyContactSettingsRequest {
}

/**
 * Converts an object of type 'ShieldDescribeEmergencyContactSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeEmergencyContactSettingsRequest(obj: ShieldDescribeEmergencyContactSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldDescribeEmergencyContactSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeEmergencyContactSettingsResponse(obj: ShieldDescribeEmergencyContactSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmergencyContactList': obj.emergencyContactList?.map(y => toJson_ShieldEmergencyContact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldDescribeProtectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeProtectionRequest(obj: ShieldDescribeProtectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionId': obj.protectionId,
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldDescribeProtectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeProtectionResponse(obj: ShieldDescribeProtectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protection': toJson_ShieldProtection(obj.protection),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeProtectionGroupRequest
 */
export interface ShieldDescribeProtectionGroupRequest {
  /**
   * @schema ShieldDescribeProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId?: string;

}

/**
 * Converts an object of type 'ShieldDescribeProtectionGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeProtectionGroupRequest(obj: ShieldDescribeProtectionGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroupId': obj.protectionGroupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeProtectionGroupResponse
 */
export interface ShieldDescribeProtectionGroupResponse {
  /**
   * @schema ShieldDescribeProtectionGroupResponse#ProtectionGroup
   */
  readonly protectionGroup?: ShieldProtectionGroup;

}

/**
 * Converts an object of type 'ShieldDescribeProtectionGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeProtectionGroupResponse(obj: ShieldDescribeProtectionGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroup': toJson_ShieldProtectionGroup(obj.protectionGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDescribeSubscriptionRequest
 */
export interface ShieldDescribeSubscriptionRequest {
}

/**
 * Converts an object of type 'ShieldDescribeSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeSubscriptionRequest(obj: ShieldDescribeSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldDescribeSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDescribeSubscriptionResponse(obj: ShieldDescribeSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Subscription': toJson_ShieldSubscription(obj.subscription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisableProactiveEngagementRequest
 */
export interface ShieldDisableProactiveEngagementRequest {
}

/**
 * Converts an object of type 'ShieldDisableProactiveEngagementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisableProactiveEngagementRequest(obj: ShieldDisableProactiveEngagementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisableProactiveEngagementResponse
 */
export interface ShieldDisableProactiveEngagementResponse {
}

/**
 * Converts an object of type 'ShieldDisableProactiveEngagementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisableProactiveEngagementResponse(obj: ShieldDisableProactiveEngagementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisassociateDrtLogBucketRequest
 */
export interface ShieldDisassociateDrtLogBucketRequest {
  /**
   * @schema ShieldDisassociateDrtLogBucketRequest#LogBucket
   */
  readonly logBucket?: string;

}

/**
 * Converts an object of type 'ShieldDisassociateDrtLogBucketRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisassociateDrtLogBucketRequest(obj: ShieldDisassociateDrtLogBucketRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogBucket': obj.logBucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisassociateDrtLogBucketResponse
 */
export interface ShieldDisassociateDrtLogBucketResponse {
}

/**
 * Converts an object of type 'ShieldDisassociateDrtLogBucketResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisassociateDrtLogBucketResponse(obj: ShieldDisassociateDrtLogBucketResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisassociateDrtRoleRequest
 */
export interface ShieldDisassociateDrtRoleRequest {
}

/**
 * Converts an object of type 'ShieldDisassociateDrtRoleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisassociateDrtRoleRequest(obj: ShieldDisassociateDrtRoleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisassociateDrtRoleResponse
 */
export interface ShieldDisassociateDrtRoleResponse {
}

/**
 * Converts an object of type 'ShieldDisassociateDrtRoleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisassociateDrtRoleResponse(obj: ShieldDisassociateDrtRoleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisassociateHealthCheckRequest
 */
export interface ShieldDisassociateHealthCheckRequest {
  /**
   * @schema ShieldDisassociateHealthCheckRequest#ProtectionId
   */
  readonly protectionId?: string;

  /**
   * @schema ShieldDisassociateHealthCheckRequest#HealthCheckArn
   */
  readonly healthCheckArn?: string;

}

/**
 * Converts an object of type 'ShieldDisassociateHealthCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisassociateHealthCheckRequest(obj: ShieldDisassociateHealthCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionId': obj.protectionId,
    'HealthCheckArn': obj.healthCheckArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldDisassociateHealthCheckResponse
 */
export interface ShieldDisassociateHealthCheckResponse {
}

/**
 * Converts an object of type 'ShieldDisassociateHealthCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldDisassociateHealthCheckResponse(obj: ShieldDisassociateHealthCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldEnableProactiveEngagementRequest
 */
export interface ShieldEnableProactiveEngagementRequest {
}

/**
 * Converts an object of type 'ShieldEnableProactiveEngagementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldEnableProactiveEngagementRequest(obj: ShieldEnableProactiveEngagementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldEnableProactiveEngagementResponse
 */
export interface ShieldEnableProactiveEngagementResponse {
}

/**
 * Converts an object of type 'ShieldEnableProactiveEngagementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldEnableProactiveEngagementResponse(obj: ShieldEnableProactiveEngagementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldGetSubscriptionStateRequest
 */
export interface ShieldGetSubscriptionStateRequest {
}

/**
 * Converts an object of type 'ShieldGetSubscriptionStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldGetSubscriptionStateRequest(obj: ShieldGetSubscriptionStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldGetSubscriptionStateResponse
 */
export interface ShieldGetSubscriptionStateResponse {
  /**
   * @schema ShieldGetSubscriptionStateResponse#SubscriptionState
   */
  readonly subscriptionState?: string;

}

/**
 * Converts an object of type 'ShieldGetSubscriptionStateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldGetSubscriptionStateResponse(obj: ShieldGetSubscriptionStateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SubscriptionState': obj.subscriptionState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldListAttacksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListAttacksRequest(obj: ShieldListAttacksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArns': obj.resourceArns?.map(y => y),
    'StartTime': toJson_ShieldTimeRange(obj.startTime),
    'EndTime': toJson_ShieldTimeRange(obj.endTime),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldListAttacksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListAttacksResponse(obj: ShieldListAttacksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttackSummaries': obj.attackSummaries?.map(y => toJson_ShieldAttackSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldListProtectionGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListProtectionGroupsRequest(obj: ShieldListProtectionGroupsRequest | undefined): Record<string, any> | undefined {
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
 * @schema ShieldListProtectionGroupsResponse
 */
export interface ShieldListProtectionGroupsResponse {
  /**
   * @schema ShieldListProtectionGroupsResponse#ProtectionGroups
   */
  readonly protectionGroups?: ShieldProtectionGroup[];

  /**
   * @schema ShieldListProtectionGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ShieldListProtectionGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListProtectionGroupsResponse(obj: ShieldListProtectionGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroups': obj.protectionGroups?.map(y => toJson_ShieldProtectionGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldListProtectionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListProtectionsRequest(obj: ShieldListProtectionsRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'ShieldListProtectionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListProtectionsResponse(obj: ShieldListProtectionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Protections': obj.protections?.map(y => toJson_ShieldProtection(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldListResourcesInProtectionGroupRequest
 */
export interface ShieldListResourcesInProtectionGroupRequest {
  /**
   * @schema ShieldListResourcesInProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId?: string;

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
 * Converts an object of type 'ShieldListResourcesInProtectionGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListResourcesInProtectionGroupRequest(obj: ShieldListResourcesInProtectionGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroupId': obj.protectionGroupId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldListResourcesInProtectionGroupResponse
 */
export interface ShieldListResourcesInProtectionGroupResponse {
  /**
   * @schema ShieldListResourcesInProtectionGroupResponse#ResourceArns
   */
  readonly resourceArns?: string[];

  /**
   * @schema ShieldListResourcesInProtectionGroupResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ShieldListResourcesInProtectionGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListResourcesInProtectionGroupResponse(obj: ShieldListResourcesInProtectionGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArns': obj.resourceArns?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldListTagsForResourceRequest
 */
export interface ShieldListTagsForResourceRequest {
  /**
   * @schema ShieldListTagsForResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ShieldListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListTagsForResourceRequest(obj: ShieldListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldListTagsForResourceResponse
 */
export interface ShieldListTagsForResourceResponse {
  /**
   * @schema ShieldListTagsForResourceResponse#Tags
   */
  readonly tags?: ShieldTag[];

}

/**
 * Converts an object of type 'ShieldListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldListTagsForResourceResponse(obj: ShieldListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_ShieldTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldTagResourceRequest
 */
export interface ShieldTagResourceRequest {
  /**
   * @schema ShieldTagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ShieldTagResourceRequest#Tags
   */
  readonly tags?: ShieldTag[];

}

/**
 * Converts an object of type 'ShieldTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldTagResourceRequest(obj: ShieldTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ShieldTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldTagResourceResponse
 */
export interface ShieldTagResourceResponse {
}

/**
 * Converts an object of type 'ShieldTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldTagResourceResponse(obj: ShieldTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldUntagResourceRequest
 */
export interface ShieldUntagResourceRequest {
  /**
   * @schema ShieldUntagResourceRequest#ResourceARN
   */
  readonly resourceArn?: string;

  /**
   * @schema ShieldUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ShieldUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUntagResourceRequest(obj: ShieldUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceARN': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldUntagResourceResponse
 */
export interface ShieldUntagResourceResponse {
}

/**
 * Converts an object of type 'ShieldUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUntagResourceResponse(obj: ShieldUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldUpdateEmergencyContactSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUpdateEmergencyContactSettingsRequest(obj: ShieldUpdateEmergencyContactSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmergencyContactList': obj.emergencyContactList?.map(y => toJson_ShieldEmergencyContact(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldUpdateEmergencyContactSettingsResponse
 */
export interface ShieldUpdateEmergencyContactSettingsResponse {
}

/**
 * Converts an object of type 'ShieldUpdateEmergencyContactSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUpdateEmergencyContactSettingsResponse(obj: ShieldUpdateEmergencyContactSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldUpdateProtectionGroupRequest
 */
export interface ShieldUpdateProtectionGroupRequest {
  /**
   * @schema ShieldUpdateProtectionGroupRequest#ProtectionGroupId
   */
  readonly protectionGroupId?: string;

  /**
   * @schema ShieldUpdateProtectionGroupRequest#Aggregation
   */
  readonly aggregation?: string;

  /**
   * @schema ShieldUpdateProtectionGroupRequest#Pattern
   */
  readonly pattern?: string;

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
 * Converts an object of type 'ShieldUpdateProtectionGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUpdateProtectionGroupRequest(obj: ShieldUpdateProtectionGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroupId': obj.protectionGroupId,
    'Aggregation': obj.aggregation,
    'Pattern': obj.pattern,
    'ResourceType': obj.resourceType,
    'Members': obj.members?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldUpdateProtectionGroupResponse
 */
export interface ShieldUpdateProtectionGroupResponse {
}

/**
 * Converts an object of type 'ShieldUpdateProtectionGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUpdateProtectionGroupResponse(obj: ShieldUpdateProtectionGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldUpdateSubscriptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUpdateSubscriptionRequest(obj: ShieldUpdateSubscriptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AutoRenew': obj.autoRenew,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldUpdateSubscriptionResponse
 */
export interface ShieldUpdateSubscriptionResponse {
}

/**
 * Converts an object of type 'ShieldUpdateSubscriptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldUpdateSubscriptionResponse(obj: ShieldUpdateSubscriptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldEmergencyContact
 */
export interface ShieldEmergencyContact {
  /**
   * @schema ShieldEmergencyContact#EmailAddress
   */
  readonly emailAddress?: string;

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
 * Converts an object of type 'ShieldEmergencyContact' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldEmergencyContact(obj: ShieldEmergencyContact | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmailAddress': obj.emailAddress,
    'PhoneNumber': obj.phoneNumber,
    'ContactNotes': obj.contactNotes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldTag
 */
export interface ShieldTag {
  /**
   * @schema ShieldTag#Key
   */
  readonly key?: string;

  /**
   * @schema ShieldTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ShieldTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldTag(obj: ShieldTag | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'ShieldAttackDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackDetail(obj: ShieldAttackDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttackId': obj.attackId,
    'ResourceArn': obj.resourceArn,
    'SubResources': obj.subResources?.map(y => toJson_ShieldSubResourceSummary(y)),
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'AttackCounters': obj.attackCounters?.map(y => toJson_ShieldSummarizedCounter(y)),
    'AttackProperties': obj.attackProperties?.map(y => toJson_ShieldAttackProperty(y)),
    'Mitigations': obj.mitigations?.map(y => toJson_ShieldMitigation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldTimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldTimeRange(obj: ShieldTimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FromInclusive': obj.fromInclusive,
    'ToExclusive': obj.toExclusive,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly attackCount?: number;

}

/**
 * Converts an object of type 'ShieldAttackStatisticsDataItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackStatisticsDataItem(obj: ShieldAttackStatisticsDataItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttackVolume': toJson_ShieldAttackVolume(obj.attackVolume),
    'AttackCount': obj.attackCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ShieldProtection#ProtectionArn
   */
  readonly protectionArn?: string;

}

/**
 * Converts an object of type 'ShieldProtection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldProtection(obj: ShieldProtection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'ResourceArn': obj.resourceArn,
    'HealthCheckIds': obj.healthCheckIds?.map(y => y),
    'ProtectionArn': obj.protectionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldProtectionGroup
 */
export interface ShieldProtectionGroup {
  /**
   * @schema ShieldProtectionGroup#ProtectionGroupId
   */
  readonly protectionGroupId?: string;

  /**
   * @schema ShieldProtectionGroup#Aggregation
   */
  readonly aggregation?: string;

  /**
   * @schema ShieldProtectionGroup#Pattern
   */
  readonly pattern?: string;

  /**
   * @schema ShieldProtectionGroup#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ShieldProtectionGroup#Members
   */
  readonly members?: string[];

  /**
   * @schema ShieldProtectionGroup#ProtectionGroupArn
   */
  readonly protectionGroupArn?: string;

}

/**
 * Converts an object of type 'ShieldProtectionGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldProtectionGroup(obj: ShieldProtectionGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionGroupId': obj.protectionGroupId,
    'Aggregation': obj.aggregation,
    'Pattern': obj.pattern,
    'ResourceType': obj.resourceType,
    'Members': obj.members?.map(y => y),
    'ProtectionGroupArn': obj.protectionGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly subscriptionLimits?: ShieldSubscriptionLimits;

  /**
   * @schema ShieldSubscription#SubscriptionArn
   */
  readonly subscriptionArn?: string;

}

/**
 * Converts an object of type 'ShieldSubscription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldSubscription(obj: ShieldSubscription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'TimeCommitmentInSeconds': obj.timeCommitmentInSeconds,
    'AutoRenew': obj.autoRenew,
    'Limits': obj.limits?.map(y => toJson_ShieldLimit(y)),
    'ProactiveEngagementStatus': obj.proactiveEngagementStatus,
    'SubscriptionLimits': toJson_ShieldSubscriptionLimits(obj.subscriptionLimits),
    'SubscriptionArn': obj.subscriptionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldAttackSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackSummary(obj: ShieldAttackSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttackId': obj.attackId,
    'ResourceArn': obj.resourceArn,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'AttackVectors': obj.attackVectors?.map(y => toJson_ShieldAttackVectorDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldSubResourceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldSubResourceSummary(obj: ShieldSubResourceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Id': obj.id,
    'AttackVectors': obj.attackVectors?.map(y => toJson_ShieldSummarizedAttackVector(y)),
    'Counters': obj.counters?.map(y => toJson_ShieldSummarizedCounter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldSummarizedCounter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldSummarizedCounter(obj: ShieldSummarizedCounter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Max': obj.max,
    'Average': obj.average,
    'Sum': obj.sum,
    'N': obj.n,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldAttackProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackProperty(obj: ShieldAttackProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttackLayer': obj.attackLayer,
    'AttackPropertyIdentifier': obj.attackPropertyIdentifier,
    'TopContributors': obj.topContributors?.map(y => toJson_ShieldContributor(y)),
    'Unit': obj.unit,
    'Total': obj.total,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldMitigation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldMitigation(obj: ShieldMitigation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MitigationName': obj.mitigationName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldAttackVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackVolume(obj: ShieldAttackVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BitsPerSecond': toJson_ShieldAttackVolumeStatistics(obj.bitsPerSecond),
    'PacketsPerSecond': toJson_ShieldAttackVolumeStatistics(obj.packetsPerSecond),
    'RequestsPerSecond': toJson_ShieldAttackVolumeStatistics(obj.requestsPerSecond),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldLimit(obj: ShieldLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Max': obj.max,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldSubscriptionLimits
 */
export interface ShieldSubscriptionLimits {
  /**
   * @schema ShieldSubscriptionLimits#ProtectionLimits
   */
  readonly protectionLimits?: ShieldProtectionLimits;

  /**
   * @schema ShieldSubscriptionLimits#ProtectionGroupLimits
   */
  readonly protectionGroupLimits?: ShieldProtectionGroupLimits;

}

/**
 * Converts an object of type 'ShieldSubscriptionLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldSubscriptionLimits(obj: ShieldSubscriptionLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectionLimits': toJson_ShieldProtectionLimits(obj.protectionLimits),
    'ProtectionGroupLimits': toJson_ShieldProtectionGroupLimits(obj.protectionGroupLimits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAttackVectorDescription
 */
export interface ShieldAttackVectorDescription {
  /**
   * @schema ShieldAttackVectorDescription#VectorType
   */
  readonly vectorType?: string;

}

/**
 * Converts an object of type 'ShieldAttackVectorDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackVectorDescription(obj: ShieldAttackVectorDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VectorType': obj.vectorType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldSummarizedAttackVector
 */
export interface ShieldSummarizedAttackVector {
  /**
   * @schema ShieldSummarizedAttackVector#VectorType
   */
  readonly vectorType?: string;

  /**
   * @schema ShieldSummarizedAttackVector#VectorCounters
   */
  readonly vectorCounters?: ShieldSummarizedCounter[];

}

/**
 * Converts an object of type 'ShieldSummarizedAttackVector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldSummarizedAttackVector(obj: ShieldSummarizedAttackVector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VectorType': obj.vectorType,
    'VectorCounters': obj.vectorCounters?.map(y => toJson_ShieldSummarizedCounter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ShieldContributor' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldContributor(obj: ShieldContributor | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldAttackVolumeStatistics
 */
export interface ShieldAttackVolumeStatistics {
  /**
   * @schema ShieldAttackVolumeStatistics#Max
   */
  readonly max?: number;

}

/**
 * Converts an object of type 'ShieldAttackVolumeStatistics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldAttackVolumeStatistics(obj: ShieldAttackVolumeStatistics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Max': obj.max,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldProtectionLimits
 */
export interface ShieldProtectionLimits {
  /**
   * @schema ShieldProtectionLimits#ProtectedResourceTypeLimits
   */
  readonly protectedResourceTypeLimits?: ShieldLimit[];

}

/**
 * Converts an object of type 'ShieldProtectionLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldProtectionLimits(obj: ShieldProtectionLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProtectedResourceTypeLimits': obj.protectedResourceTypeLimits?.map(y => toJson_ShieldLimit(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldProtectionGroupLimits
 */
export interface ShieldProtectionGroupLimits {
  /**
   * @schema ShieldProtectionGroupLimits#MaxProtectionGroups
   */
  readonly maxProtectionGroups?: number;

  /**
   * @schema ShieldProtectionGroupLimits#PatternTypeLimits
   */
  readonly patternTypeLimits?: ShieldProtectionGroupPatternTypeLimits;

}

/**
 * Converts an object of type 'ShieldProtectionGroupLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldProtectionGroupLimits(obj: ShieldProtectionGroupLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxProtectionGroups': obj.maxProtectionGroups,
    'PatternTypeLimits': toJson_ShieldProtectionGroupPatternTypeLimits(obj.patternTypeLimits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldProtectionGroupPatternTypeLimits
 */
export interface ShieldProtectionGroupPatternTypeLimits {
  /**
   * @schema ShieldProtectionGroupPatternTypeLimits#ArbitraryPatternLimits
   */
  readonly arbitraryPatternLimits?: ShieldProtectionGroupArbitraryPatternLimits;

}

/**
 * Converts an object of type 'ShieldProtectionGroupPatternTypeLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldProtectionGroupPatternTypeLimits(obj: ShieldProtectionGroupPatternTypeLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ArbitraryPatternLimits': toJson_ShieldProtectionGroupArbitraryPatternLimits(obj.arbitraryPatternLimits),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ShieldProtectionGroupArbitraryPatternLimits
 */
export interface ShieldProtectionGroupArbitraryPatternLimits {
  /**
   * @schema ShieldProtectionGroupArbitraryPatternLimits#MaxMembers
   */
  readonly maxMembers?: number;

}

/**
 * Converts an object of type 'ShieldProtectionGroupArbitraryPatternLimits' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ShieldProtectionGroupArbitraryPatternLimits(obj: ShieldProtectionGroupArbitraryPatternLimits | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxMembers': obj.maxMembers,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
