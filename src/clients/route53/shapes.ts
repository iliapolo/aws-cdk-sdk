/**
 * @schema Route53ActivateKeySigningKeyRequest
 */
export interface Route53ActivateKeySigningKeyRequest {
  /**
   * @schema Route53ActivateKeySigningKeyRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ActivateKeySigningKeyRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53ActivateKeySigningKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ActivateKeySigningKeyRequest(obj: Route53ActivateKeySigningKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ActivateKeySigningKeyResponse
 */
export interface Route53ActivateKeySigningKeyResponse {
  /**
   * @schema Route53ActivateKeySigningKeyResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53ActivateKeySigningKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ActivateKeySigningKeyResponse(obj: Route53ActivateKeySigningKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53AssociateVpcWithHostedZoneRequest
 */
export interface Route53AssociateVpcWithHostedZoneRequest {
  /**
   * @schema Route53AssociateVpcWithHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53AssociateVpcWithHostedZoneRequest#VPC
   */
  readonly vpc?: Route53Vpc;

  /**
   * @schema Route53AssociateVpcWithHostedZoneRequest#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53AssociateVpcWithHostedZoneRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53AssociateVpcWithHostedZoneRequest(obj: Route53AssociateVpcWithHostedZoneRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'VPC': toJson_Route53Vpc(obj.vpc),
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53AssociateVpcWithHostedZoneResponse
 */
export interface Route53AssociateVpcWithHostedZoneResponse {
  /**
   * @schema Route53AssociateVpcWithHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53AssociateVpcWithHostedZoneResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53AssociateVpcWithHostedZoneResponse(obj: Route53AssociateVpcWithHostedZoneResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ChangeResourceRecordSetsRequest
 */
export interface Route53ChangeResourceRecordSetsRequest {
  /**
   * @schema Route53ChangeResourceRecordSetsRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ChangeResourceRecordSetsRequest#ChangeBatch
   */
  readonly changeBatch?: Route53ChangeBatch;

}

/**
 * Converts an object of type 'Route53ChangeResourceRecordSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ChangeResourceRecordSetsRequest(obj: Route53ChangeResourceRecordSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'ChangeBatch': toJson_Route53ChangeBatch(obj.changeBatch),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ChangeResourceRecordSetsResponse
 */
export interface Route53ChangeResourceRecordSetsResponse {
  /**
   * @schema Route53ChangeResourceRecordSetsResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53ChangeResourceRecordSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ChangeResourceRecordSetsResponse(obj: Route53ChangeResourceRecordSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ChangeTagsForResourceRequest
 */
export interface Route53ChangeTagsForResourceRequest {
  /**
   * @schema Route53ChangeTagsForResourceRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Route53ChangeTagsForResourceRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ChangeTagsForResourceRequest#AddTags
   */
  readonly addTags?: Route53Tag[];

  /**
   * @schema Route53ChangeTagsForResourceRequest#RemoveTagKeys
   */
  readonly removeTagKeys?: string[];

}

/**
 * Converts an object of type 'Route53ChangeTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ChangeTagsForResourceRequest(obj: Route53ChangeTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
    'AddTags': obj.addTags?.map(y => toJson_Route53Tag(y)),
    'RemoveTagKeys': obj.removeTagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ChangeTagsForResourceResponse
 */
export interface Route53ChangeTagsForResourceResponse {
}

/**
 * Converts an object of type 'Route53ChangeTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ChangeTagsForResourceResponse(obj: Route53ChangeTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateHealthCheckRequest
 */
export interface Route53CreateHealthCheckRequest {
  /**
   * @schema Route53CreateHealthCheckRequest#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53CreateHealthCheckRequest#HealthCheckConfig
   */
  readonly healthCheckConfig?: Route53HealthCheckConfig;

}

/**
 * Converts an object of type 'Route53CreateHealthCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateHealthCheckRequest(obj: Route53CreateHealthCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'HealthCheckConfig': toJson_Route53HealthCheckConfig(obj.healthCheckConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateHealthCheckResponse
 */
export interface Route53CreateHealthCheckResponse {
  /**
   * @schema Route53CreateHealthCheckResponse#HealthCheck
   */
  readonly healthCheck?: Route53HealthCheck;

  /**
   * @schema Route53CreateHealthCheckResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateHealthCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateHealthCheckResponse(obj: Route53CreateHealthCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheck': toJson_Route53HealthCheck(obj.healthCheck),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateHostedZoneRequest
 */
export interface Route53CreateHostedZoneRequest {
  /**
   * @schema Route53CreateHostedZoneRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53CreateHostedZoneRequest#VPC
   */
  readonly vpc?: Route53Vpc;

  /**
   * @schema Route53CreateHostedZoneRequest#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53CreateHostedZoneRequest#HostedZoneConfig
   */
  readonly hostedZoneConfig?: Route53HostedZoneConfig;

  /**
   * @schema Route53CreateHostedZoneRequest#DelegationSetId
   */
  readonly delegationSetId?: string;

}

/**
 * Converts an object of type 'Route53CreateHostedZoneRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateHostedZoneRequest(obj: Route53CreateHostedZoneRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'VPC': toJson_Route53Vpc(obj.vpc),
    'CallerReference': obj.callerReference,
    'HostedZoneConfig': toJson_Route53HostedZoneConfig(obj.hostedZoneConfig),
    'DelegationSetId': obj.delegationSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateHostedZoneResponse
 */
export interface Route53CreateHostedZoneResponse {
  /**
   * @schema Route53CreateHostedZoneResponse#HostedZone
   */
  readonly hostedZone?: Route53HostedZone;

  /**
   * @schema Route53CreateHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

  /**
   * @schema Route53CreateHostedZoneResponse#DelegationSet
   */
  readonly delegationSet?: Route53DelegationSet;

  /**
   * @schema Route53CreateHostedZoneResponse#VPC
   */
  readonly vpc?: Route53Vpc;

  /**
   * @schema Route53CreateHostedZoneResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateHostedZoneResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateHostedZoneResponse(obj: Route53CreateHostedZoneResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZone': toJson_Route53HostedZone(obj.hostedZone),
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
    'DelegationSet': toJson_Route53DelegationSet(obj.delegationSet),
    'VPC': toJson_Route53Vpc(obj.vpc),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateKeySigningKeyRequest
 */
export interface Route53CreateKeySigningKeyRequest {
  /**
   * @schema Route53CreateKeySigningKeyRequest#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53CreateKeySigningKeyRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53CreateKeySigningKeyRequest#KeyManagementServiceArn
   */
  readonly keyManagementServiceArn?: string;

  /**
   * @schema Route53CreateKeySigningKeyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53CreateKeySigningKeyRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Route53CreateKeySigningKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateKeySigningKeyRequest(obj: Route53CreateKeySigningKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'HostedZoneId': obj.hostedZoneId,
    'KeyManagementServiceArn': obj.keyManagementServiceArn,
    'Name': obj.name,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateKeySigningKeyResponse
 */
export interface Route53CreateKeySigningKeyResponse {
  /**
   * @schema Route53CreateKeySigningKeyResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

  /**
   * @schema Route53CreateKeySigningKeyResponse#KeySigningKey
   */
  readonly keySigningKey?: Route53KeySigningKey;

  /**
   * @schema Route53CreateKeySigningKeyResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateKeySigningKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateKeySigningKeyResponse(obj: Route53CreateKeySigningKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
    'KeySigningKey': toJson_Route53KeySigningKey(obj.keySigningKey),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateQueryLoggingConfigRequest
 */
export interface Route53CreateQueryLoggingConfigRequest {
  /**
   * @schema Route53CreateQueryLoggingConfigRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53CreateQueryLoggingConfigRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

}

/**
 * Converts an object of type 'Route53CreateQueryLoggingConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateQueryLoggingConfigRequest(obj: Route53CreateQueryLoggingConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateQueryLoggingConfigResponse
 */
export interface Route53CreateQueryLoggingConfigResponse {
  /**
   * @schema Route53CreateQueryLoggingConfigResponse#QueryLoggingConfig
   */
  readonly queryLoggingConfig?: Route53QueryLoggingConfig;

  /**
   * @schema Route53CreateQueryLoggingConfigResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateQueryLoggingConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateQueryLoggingConfigResponse(obj: Route53CreateQueryLoggingConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryLoggingConfig': toJson_Route53QueryLoggingConfig(obj.queryLoggingConfig),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateReusableDelegationSetRequest
 */
export interface Route53CreateReusableDelegationSetRequest {
  /**
   * @schema Route53CreateReusableDelegationSetRequest#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53CreateReusableDelegationSetRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'Route53CreateReusableDelegationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateReusableDelegationSetRequest(obj: Route53CreateReusableDelegationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CallerReference': obj.callerReference,
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateReusableDelegationSetResponse
 */
export interface Route53CreateReusableDelegationSetResponse {
  /**
   * @schema Route53CreateReusableDelegationSetResponse#DelegationSet
   */
  readonly delegationSet?: Route53DelegationSet;

  /**
   * @schema Route53CreateReusableDelegationSetResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateReusableDelegationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateReusableDelegationSetResponse(obj: Route53CreateReusableDelegationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DelegationSet': toJson_Route53DelegationSet(obj.delegationSet),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateTrafficPolicyRequest
 */
export interface Route53CreateTrafficPolicyRequest {
  /**
   * @schema Route53CreateTrafficPolicyRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53CreateTrafficPolicyRequest#Document
   */
  readonly document?: string;

  /**
   * @schema Route53CreateTrafficPolicyRequest#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53CreateTrafficPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateTrafficPolicyRequest(obj: Route53CreateTrafficPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Document': obj.document,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateTrafficPolicyResponse
 */
export interface Route53CreateTrafficPolicyResponse {
  /**
   * @schema Route53CreateTrafficPolicyResponse#TrafficPolicy
   */
  readonly trafficPolicy?: Route53TrafficPolicy;

  /**
   * @schema Route53CreateTrafficPolicyResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateTrafficPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateTrafficPolicyResponse(obj: Route53CreateTrafficPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicy': toJson_Route53TrafficPolicy(obj.trafficPolicy),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateTrafficPolicyInstanceRequest
 */
export interface Route53CreateTrafficPolicyInstanceRequest {
  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#TTL
   */
  readonly ttl?: number;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#TrafficPolicyId
   */
  readonly trafficPolicyId?: string;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion?: number;

}

/**
 * Converts an object of type 'Route53CreateTrafficPolicyInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateTrafficPolicyInstanceRequest(obj: Route53CreateTrafficPolicyInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'Name': obj.name,
    'TTL': obj.ttl,
    'TrafficPolicyId': obj.trafficPolicyId,
    'TrafficPolicyVersion': obj.trafficPolicyVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateTrafficPolicyInstanceResponse
 */
export interface Route53CreateTrafficPolicyInstanceResponse {
  /**
   * @schema Route53CreateTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance?: Route53TrafficPolicyInstance;

  /**
   * @schema Route53CreateTrafficPolicyInstanceResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateTrafficPolicyInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateTrafficPolicyInstanceResponse(obj: Route53CreateTrafficPolicyInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstance': toJson_Route53TrafficPolicyInstance(obj.trafficPolicyInstance),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateTrafficPolicyVersionRequest
 */
export interface Route53CreateTrafficPolicyVersionRequest {
  /**
   * @schema Route53CreateTrafficPolicyVersionRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53CreateTrafficPolicyVersionRequest#Document
   */
  readonly document?: string;

  /**
   * @schema Route53CreateTrafficPolicyVersionRequest#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53CreateTrafficPolicyVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateTrafficPolicyVersionRequest(obj: Route53CreateTrafficPolicyVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Document': obj.document,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateTrafficPolicyVersionResponse
 */
export interface Route53CreateTrafficPolicyVersionResponse {
  /**
   * @schema Route53CreateTrafficPolicyVersionResponse#TrafficPolicy
   */
  readonly trafficPolicy?: Route53TrafficPolicy;

  /**
   * @schema Route53CreateTrafficPolicyVersionResponse#Location
   */
  readonly location?: string;

}

/**
 * Converts an object of type 'Route53CreateTrafficPolicyVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateTrafficPolicyVersionResponse(obj: Route53CreateTrafficPolicyVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicy': toJson_Route53TrafficPolicy(obj.trafficPolicy),
    'Location': obj.location,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateVpcAssociationAuthorizationRequest
 */
export interface Route53CreateVpcAssociationAuthorizationRequest {
  /**
   * @schema Route53CreateVpcAssociationAuthorizationRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53CreateVpcAssociationAuthorizationRequest#VPC
   */
  readonly vpc?: Route53Vpc;

}

/**
 * Converts an object of type 'Route53CreateVpcAssociationAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateVpcAssociationAuthorizationRequest(obj: Route53CreateVpcAssociationAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'VPC': toJson_Route53Vpc(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CreateVpcAssociationAuthorizationResponse
 */
export interface Route53CreateVpcAssociationAuthorizationResponse {
  /**
   * @schema Route53CreateVpcAssociationAuthorizationResponse#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53CreateVpcAssociationAuthorizationResponse#VPC
   */
  readonly vpc?: Route53Vpc;

}

/**
 * Converts an object of type 'Route53CreateVpcAssociationAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CreateVpcAssociationAuthorizationResponse(obj: Route53CreateVpcAssociationAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'VPC': toJson_Route53Vpc(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeactivateKeySigningKeyRequest
 */
export interface Route53DeactivateKeySigningKeyRequest {
  /**
   * @schema Route53DeactivateKeySigningKeyRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53DeactivateKeySigningKeyRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53DeactivateKeySigningKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeactivateKeySigningKeyRequest(obj: Route53DeactivateKeySigningKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeactivateKeySigningKeyResponse
 */
export interface Route53DeactivateKeySigningKeyResponse {
  /**
   * @schema Route53DeactivateKeySigningKeyResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53DeactivateKeySigningKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeactivateKeySigningKeyResponse(obj: Route53DeactivateKeySigningKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteHealthCheckRequest
 */
export interface Route53DeleteHealthCheckRequest {
  /**
   * @schema Route53DeleteHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId?: string;

}

/**
 * Converts an object of type 'Route53DeleteHealthCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteHealthCheckRequest(obj: Route53DeleteHealthCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckId': obj.healthCheckId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteHealthCheckResponse
 */
export interface Route53DeleteHealthCheckResponse {
}

/**
 * Converts an object of type 'Route53DeleteHealthCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteHealthCheckResponse(obj: Route53DeleteHealthCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteHostedZoneRequest
 */
export interface Route53DeleteHostedZoneRequest {
  /**
   * @schema Route53DeleteHostedZoneRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53DeleteHostedZoneRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteHostedZoneRequest(obj: Route53DeleteHostedZoneRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteHostedZoneResponse
 */
export interface Route53DeleteHostedZoneResponse {
  /**
   * @schema Route53DeleteHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53DeleteHostedZoneResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteHostedZoneResponse(obj: Route53DeleteHostedZoneResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteKeySigningKeyRequest
 */
export interface Route53DeleteKeySigningKeyRequest {
  /**
   * @schema Route53DeleteKeySigningKeyRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53DeleteKeySigningKeyRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53DeleteKeySigningKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteKeySigningKeyRequest(obj: Route53DeleteKeySigningKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteKeySigningKeyResponse
 */
export interface Route53DeleteKeySigningKeyResponse {
  /**
   * @schema Route53DeleteKeySigningKeyResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53DeleteKeySigningKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteKeySigningKeyResponse(obj: Route53DeleteKeySigningKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteQueryLoggingConfigRequest
 */
export interface Route53DeleteQueryLoggingConfigRequest {
  /**
   * @schema Route53DeleteQueryLoggingConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53DeleteQueryLoggingConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteQueryLoggingConfigRequest(obj: Route53DeleteQueryLoggingConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteQueryLoggingConfigResponse
 */
export interface Route53DeleteQueryLoggingConfigResponse {
}

/**
 * Converts an object of type 'Route53DeleteQueryLoggingConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteQueryLoggingConfigResponse(obj: Route53DeleteQueryLoggingConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteReusableDelegationSetRequest
 */
export interface Route53DeleteReusableDelegationSetRequest {
  /**
   * @schema Route53DeleteReusableDelegationSetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53DeleteReusableDelegationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteReusableDelegationSetRequest(obj: Route53DeleteReusableDelegationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteReusableDelegationSetResponse
 */
export interface Route53DeleteReusableDelegationSetResponse {
}

/**
 * Converts an object of type 'Route53DeleteReusableDelegationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteReusableDelegationSetResponse(obj: Route53DeleteReusableDelegationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteTrafficPolicyRequest
 */
export interface Route53DeleteTrafficPolicyRequest {
  /**
   * @schema Route53DeleteTrafficPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53DeleteTrafficPolicyRequest#Version
   */
  readonly version?: number;

}

/**
 * Converts an object of type 'Route53DeleteTrafficPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteTrafficPolicyRequest(obj: Route53DeleteTrafficPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteTrafficPolicyResponse
 */
export interface Route53DeleteTrafficPolicyResponse {
}

/**
 * Converts an object of type 'Route53DeleteTrafficPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteTrafficPolicyResponse(obj: Route53DeleteTrafficPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteTrafficPolicyInstanceRequest
 */
export interface Route53DeleteTrafficPolicyInstanceRequest {
  /**
   * @schema Route53DeleteTrafficPolicyInstanceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53DeleteTrafficPolicyInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteTrafficPolicyInstanceRequest(obj: Route53DeleteTrafficPolicyInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteTrafficPolicyInstanceResponse
 */
export interface Route53DeleteTrafficPolicyInstanceResponse {
}

/**
 * Converts an object of type 'Route53DeleteTrafficPolicyInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteTrafficPolicyInstanceResponse(obj: Route53DeleteTrafficPolicyInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteVpcAssociationAuthorizationRequest
 */
export interface Route53DeleteVpcAssociationAuthorizationRequest {
  /**
   * @schema Route53DeleteVpcAssociationAuthorizationRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53DeleteVpcAssociationAuthorizationRequest#VPC
   */
  readonly vpc?: Route53Vpc;

}

/**
 * Converts an object of type 'Route53DeleteVpcAssociationAuthorizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteVpcAssociationAuthorizationRequest(obj: Route53DeleteVpcAssociationAuthorizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'VPC': toJson_Route53Vpc(obj.vpc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DeleteVpcAssociationAuthorizationResponse
 */
export interface Route53DeleteVpcAssociationAuthorizationResponse {
}

/**
 * Converts an object of type 'Route53DeleteVpcAssociationAuthorizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DeleteVpcAssociationAuthorizationResponse(obj: Route53DeleteVpcAssociationAuthorizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DisableHostedZoneDnssecRequest
 */
export interface Route53DisableHostedZoneDnssecRequest {
  /**
   * @schema Route53DisableHostedZoneDnssecRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'Route53DisableHostedZoneDnssecRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DisableHostedZoneDnssecRequest(obj: Route53DisableHostedZoneDnssecRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DisableHostedZoneDnssecResponse
 */
export interface Route53DisableHostedZoneDnssecResponse {
  /**
   * @schema Route53DisableHostedZoneDnssecResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53DisableHostedZoneDnssecResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DisableHostedZoneDnssecResponse(obj: Route53DisableHostedZoneDnssecResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DisassociateVpcFromHostedZoneRequest
 */
export interface Route53DisassociateVpcFromHostedZoneRequest {
  /**
   * @schema Route53DisassociateVpcFromHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53DisassociateVpcFromHostedZoneRequest#VPC
   */
  readonly vpc?: Route53Vpc;

  /**
   * @schema Route53DisassociateVpcFromHostedZoneRequest#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53DisassociateVpcFromHostedZoneRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DisassociateVpcFromHostedZoneRequest(obj: Route53DisassociateVpcFromHostedZoneRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'VPC': toJson_Route53Vpc(obj.vpc),
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DisassociateVpcFromHostedZoneResponse
 */
export interface Route53DisassociateVpcFromHostedZoneResponse {
  /**
   * @schema Route53DisassociateVpcFromHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53DisassociateVpcFromHostedZoneResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DisassociateVpcFromHostedZoneResponse(obj: Route53DisassociateVpcFromHostedZoneResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53EnableHostedZoneDnssecRequest
 */
export interface Route53EnableHostedZoneDnssecRequest {
  /**
   * @schema Route53EnableHostedZoneDnssecRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'Route53EnableHostedZoneDnssecRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53EnableHostedZoneDnssecRequest(obj: Route53EnableHostedZoneDnssecRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53EnableHostedZoneDnssecResponse
 */
export interface Route53EnableHostedZoneDnssecResponse {
  /**
   * @schema Route53EnableHostedZoneDnssecResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53EnableHostedZoneDnssecResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53EnableHostedZoneDnssecResponse(obj: Route53EnableHostedZoneDnssecResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetAccountLimitRequest
 */
export interface Route53GetAccountLimitRequest {
  /**
   * @schema Route53GetAccountLimitRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Route53GetAccountLimitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetAccountLimitRequest(obj: Route53GetAccountLimitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetAccountLimitResponse
 */
export interface Route53GetAccountLimitResponse {
  /**
   * @schema Route53GetAccountLimitResponse#Limit
   */
  readonly limit?: Route53AccountLimit;

  /**
   * @schema Route53GetAccountLimitResponse#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'Route53GetAccountLimitResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetAccountLimitResponse(obj: Route53GetAccountLimitResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': toJson_Route53AccountLimit(obj.limit),
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetChangeRequest
 */
export interface Route53GetChangeRequest {
  /**
   * @schema Route53GetChangeRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53GetChangeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetChangeRequest(obj: Route53GetChangeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetChangeResponse
 */
export interface Route53GetChangeResponse {
  /**
   * @schema Route53GetChangeResponse#ChangeInfo
   */
  readonly changeInfo?: Route53ChangeInfo;

}

/**
 * Converts an object of type 'Route53GetChangeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetChangeResponse(obj: Route53GetChangeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeInfo': toJson_Route53ChangeInfo(obj.changeInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetCheckerIpRangesRequest
 */
export interface Route53GetCheckerIpRangesRequest {
}

/**
 * Converts an object of type 'Route53GetCheckerIpRangesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetCheckerIpRangesRequest(obj: Route53GetCheckerIpRangesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetCheckerIpRangesResponse
 */
export interface Route53GetCheckerIpRangesResponse {
  /**
   * @schema Route53GetCheckerIpRangesResponse#CheckerIpRanges
   */
  readonly checkerIpRanges?: string[];

}

/**
 * Converts an object of type 'Route53GetCheckerIpRangesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetCheckerIpRangesResponse(obj: Route53GetCheckerIpRangesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CheckerIpRanges': obj.checkerIpRanges?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetDnssecRequest
 */
export interface Route53GetDnssecRequest {
  /**
   * @schema Route53GetDnssecRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'Route53GetDnssecRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetDnssecRequest(obj: Route53GetDnssecRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetDnssecResponse
 */
export interface Route53GetDnssecResponse {
  /**
   * @schema Route53GetDnssecResponse#Status
   */
  readonly status?: Route53DnssecStatus;

  /**
   * @schema Route53GetDnssecResponse#KeySigningKeys
   */
  readonly keySigningKeys?: Route53KeySigningKey[];

}

/**
 * Converts an object of type 'Route53GetDnssecResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetDnssecResponse(obj: Route53GetDnssecResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': toJson_Route53DnssecStatus(obj.status),
    'KeySigningKeys': obj.keySigningKeys?.map(y => toJson_Route53KeySigningKey(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetGeoLocationRequest
 */
export interface Route53GetGeoLocationRequest {
  /**
   * @schema Route53GetGeoLocationRequest#ContinentCode
   */
  readonly continentCode?: string;

  /**
   * @schema Route53GetGeoLocationRequest#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema Route53GetGeoLocationRequest#SubdivisionCode
   */
  readonly subdivisionCode?: string;

}

/**
 * Converts an object of type 'Route53GetGeoLocationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetGeoLocationRequest(obj: Route53GetGeoLocationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinentCode': obj.continentCode,
    'CountryCode': obj.countryCode,
    'SubdivisionCode': obj.subdivisionCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetGeoLocationResponse
 */
export interface Route53GetGeoLocationResponse {
  /**
   * @schema Route53GetGeoLocationResponse#GeoLocationDetails
   */
  readonly geoLocationDetails?: Route53GeoLocationDetails;

}

/**
 * Converts an object of type 'Route53GetGeoLocationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetGeoLocationResponse(obj: Route53GetGeoLocationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoLocationDetails': toJson_Route53GeoLocationDetails(obj.geoLocationDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckRequest
 */
export interface Route53GetHealthCheckRequest {
  /**
   * @schema Route53GetHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId?: string;

}

/**
 * Converts an object of type 'Route53GetHealthCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckRequest(obj: Route53GetHealthCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckId': obj.healthCheckId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckResponse
 */
export interface Route53GetHealthCheckResponse {
  /**
   * @schema Route53GetHealthCheckResponse#HealthCheck
   */
  readonly healthCheck?: Route53HealthCheck;

}

/**
 * Converts an object of type 'Route53GetHealthCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckResponse(obj: Route53GetHealthCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheck': toJson_Route53HealthCheck(obj.healthCheck),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckCountRequest
 */
export interface Route53GetHealthCheckCountRequest {
}

/**
 * Converts an object of type 'Route53GetHealthCheckCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckCountRequest(obj: Route53GetHealthCheckCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckCountResponse
 */
export interface Route53GetHealthCheckCountResponse {
  /**
   * @schema Route53GetHealthCheckCountResponse#HealthCheckCount
   */
  readonly healthCheckCount?: number;

}

/**
 * Converts an object of type 'Route53GetHealthCheckCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckCountResponse(obj: Route53GetHealthCheckCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckCount': obj.healthCheckCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckLastFailureReasonRequest
 */
export interface Route53GetHealthCheckLastFailureReasonRequest {
  /**
   * @schema Route53GetHealthCheckLastFailureReasonRequest#HealthCheckId
   */
  readonly healthCheckId?: string;

}

/**
 * Converts an object of type 'Route53GetHealthCheckLastFailureReasonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckLastFailureReasonRequest(obj: Route53GetHealthCheckLastFailureReasonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckId': obj.healthCheckId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckLastFailureReasonResponse
 */
export interface Route53GetHealthCheckLastFailureReasonResponse {
  /**
   * @schema Route53GetHealthCheckLastFailureReasonResponse#HealthCheckObservations
   */
  readonly healthCheckObservations?: Route53HealthCheckObservation[];

}

/**
 * Converts an object of type 'Route53GetHealthCheckLastFailureReasonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckLastFailureReasonResponse(obj: Route53GetHealthCheckLastFailureReasonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckObservations': obj.healthCheckObservations?.map(y => toJson_Route53HealthCheckObservation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckStatusRequest
 */
export interface Route53GetHealthCheckStatusRequest {
  /**
   * @schema Route53GetHealthCheckStatusRequest#HealthCheckId
   */
  readonly healthCheckId?: string;

}

/**
 * Converts an object of type 'Route53GetHealthCheckStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckStatusRequest(obj: Route53GetHealthCheckStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckId': obj.healthCheckId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHealthCheckStatusResponse
 */
export interface Route53GetHealthCheckStatusResponse {
  /**
   * @schema Route53GetHealthCheckStatusResponse#HealthCheckObservations
   */
  readonly healthCheckObservations?: Route53HealthCheckObservation[];

}

/**
 * Converts an object of type 'Route53GetHealthCheckStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHealthCheckStatusResponse(obj: Route53GetHealthCheckStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckObservations': obj.healthCheckObservations?.map(y => toJson_Route53HealthCheckObservation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHostedZoneRequest
 */
export interface Route53GetHostedZoneRequest {
  /**
   * @schema Route53GetHostedZoneRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53GetHostedZoneRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHostedZoneRequest(obj: Route53GetHostedZoneRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHostedZoneResponse
 */
export interface Route53GetHostedZoneResponse {
  /**
   * @schema Route53GetHostedZoneResponse#HostedZone
   */
  readonly hostedZone?: Route53HostedZone;

  /**
   * @schema Route53GetHostedZoneResponse#DelegationSet
   */
  readonly delegationSet?: Route53DelegationSet;

  /**
   * @schema Route53GetHostedZoneResponse#VPCs
   */
  readonly vpCs?: Route53Vpc[];

}

/**
 * Converts an object of type 'Route53GetHostedZoneResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHostedZoneResponse(obj: Route53GetHostedZoneResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZone': toJson_Route53HostedZone(obj.hostedZone),
    'DelegationSet': toJson_Route53DelegationSet(obj.delegationSet),
    'VPCs': obj.vpCs?.map(y => toJson_Route53Vpc(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHostedZoneCountRequest
 */
export interface Route53GetHostedZoneCountRequest {
}

/**
 * Converts an object of type 'Route53GetHostedZoneCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHostedZoneCountRequest(obj: Route53GetHostedZoneCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHostedZoneCountResponse
 */
export interface Route53GetHostedZoneCountResponse {
  /**
   * @schema Route53GetHostedZoneCountResponse#HostedZoneCount
   */
  readonly hostedZoneCount?: number;

}

/**
 * Converts an object of type 'Route53GetHostedZoneCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHostedZoneCountResponse(obj: Route53GetHostedZoneCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneCount': obj.hostedZoneCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHostedZoneLimitRequest
 */
export interface Route53GetHostedZoneLimitRequest {
  /**
   * @schema Route53GetHostedZoneLimitRequest#Type
   */
  readonly type?: string;

  /**
   * @schema Route53GetHostedZoneLimitRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * Converts an object of type 'Route53GetHostedZoneLimitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHostedZoneLimitRequest(obj: Route53GetHostedZoneLimitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'HostedZoneId': obj.hostedZoneId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetHostedZoneLimitResponse
 */
export interface Route53GetHostedZoneLimitResponse {
  /**
   * @schema Route53GetHostedZoneLimitResponse#Limit
   */
  readonly limit?: Route53HostedZoneLimit;

  /**
   * @schema Route53GetHostedZoneLimitResponse#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'Route53GetHostedZoneLimitResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetHostedZoneLimitResponse(obj: Route53GetHostedZoneLimitResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': toJson_Route53HostedZoneLimit(obj.limit),
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetQueryLoggingConfigRequest
 */
export interface Route53GetQueryLoggingConfigRequest {
  /**
   * @schema Route53GetQueryLoggingConfigRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53GetQueryLoggingConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetQueryLoggingConfigRequest(obj: Route53GetQueryLoggingConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetQueryLoggingConfigResponse
 */
export interface Route53GetQueryLoggingConfigResponse {
  /**
   * @schema Route53GetQueryLoggingConfigResponse#QueryLoggingConfig
   */
  readonly queryLoggingConfig?: Route53QueryLoggingConfig;

}

/**
 * Converts an object of type 'Route53GetQueryLoggingConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetQueryLoggingConfigResponse(obj: Route53GetQueryLoggingConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryLoggingConfig': toJson_Route53QueryLoggingConfig(obj.queryLoggingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetReusableDelegationSetRequest
 */
export interface Route53GetReusableDelegationSetRequest {
  /**
   * @schema Route53GetReusableDelegationSetRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53GetReusableDelegationSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetReusableDelegationSetRequest(obj: Route53GetReusableDelegationSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetReusableDelegationSetResponse
 */
export interface Route53GetReusableDelegationSetResponse {
  /**
   * @schema Route53GetReusableDelegationSetResponse#DelegationSet
   */
  readonly delegationSet?: Route53DelegationSet;

}

/**
 * Converts an object of type 'Route53GetReusableDelegationSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetReusableDelegationSetResponse(obj: Route53GetReusableDelegationSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DelegationSet': toJson_Route53DelegationSet(obj.delegationSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetReusableDelegationSetLimitRequest
 */
export interface Route53GetReusableDelegationSetLimitRequest {
  /**
   * @schema Route53GetReusableDelegationSetLimitRequest#Type
   */
  readonly type?: string;

  /**
   * @schema Route53GetReusableDelegationSetLimitRequest#DelegationSetId
   */
  readonly delegationSetId?: string;

}

/**
 * Converts an object of type 'Route53GetReusableDelegationSetLimitRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetReusableDelegationSetLimitRequest(obj: Route53GetReusableDelegationSetLimitRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'DelegationSetId': obj.delegationSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetReusableDelegationSetLimitResponse
 */
export interface Route53GetReusableDelegationSetLimitResponse {
  /**
   * @schema Route53GetReusableDelegationSetLimitResponse#Limit
   */
  readonly limit?: Route53ReusableDelegationSetLimit;

  /**
   * @schema Route53GetReusableDelegationSetLimitResponse#Count
   */
  readonly count?: number;

}

/**
 * Converts an object of type 'Route53GetReusableDelegationSetLimitResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetReusableDelegationSetLimitResponse(obj: Route53GetReusableDelegationSetLimitResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': toJson_Route53ReusableDelegationSetLimit(obj.limit),
    'Count': obj.count,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetTrafficPolicyRequest
 */
export interface Route53GetTrafficPolicyRequest {
  /**
   * @schema Route53GetTrafficPolicyRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53GetTrafficPolicyRequest#Version
   */
  readonly version?: number;

}

/**
 * Converts an object of type 'Route53GetTrafficPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetTrafficPolicyRequest(obj: Route53GetTrafficPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetTrafficPolicyResponse
 */
export interface Route53GetTrafficPolicyResponse {
  /**
   * @schema Route53GetTrafficPolicyResponse#TrafficPolicy
   */
  readonly trafficPolicy?: Route53TrafficPolicy;

}

/**
 * Converts an object of type 'Route53GetTrafficPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetTrafficPolicyResponse(obj: Route53GetTrafficPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicy': toJson_Route53TrafficPolicy(obj.trafficPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetTrafficPolicyInstanceRequest
 */
export interface Route53GetTrafficPolicyInstanceRequest {
  /**
   * @schema Route53GetTrafficPolicyInstanceRequest#Id
   */
  readonly id?: string;

}

/**
 * Converts an object of type 'Route53GetTrafficPolicyInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetTrafficPolicyInstanceRequest(obj: Route53GetTrafficPolicyInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetTrafficPolicyInstanceResponse
 */
export interface Route53GetTrafficPolicyInstanceResponse {
  /**
   * @schema Route53GetTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance?: Route53TrafficPolicyInstance;

}

/**
 * Converts an object of type 'Route53GetTrafficPolicyInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetTrafficPolicyInstanceResponse(obj: Route53GetTrafficPolicyInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstance': toJson_Route53TrafficPolicyInstance(obj.trafficPolicyInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetTrafficPolicyInstanceCountRequest
 */
export interface Route53GetTrafficPolicyInstanceCountRequest {
}

/**
 * Converts an object of type 'Route53GetTrafficPolicyInstanceCountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetTrafficPolicyInstanceCountRequest(obj: Route53GetTrafficPolicyInstanceCountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GetTrafficPolicyInstanceCountResponse
 */
export interface Route53GetTrafficPolicyInstanceCountResponse {
  /**
   * @schema Route53GetTrafficPolicyInstanceCountResponse#TrafficPolicyInstanceCount
   */
  readonly trafficPolicyInstanceCount?: number;

}

/**
 * Converts an object of type 'Route53GetTrafficPolicyInstanceCountResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GetTrafficPolicyInstanceCountResponse(obj: Route53GetTrafficPolicyInstanceCountResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstanceCount': obj.trafficPolicyInstanceCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListGeoLocationsRequest
 */
export interface Route53ListGeoLocationsRequest {
  /**
   * @schema Route53ListGeoLocationsRequest#StartContinentCode
   */
  readonly startContinentCode?: string;

  /**
   * @schema Route53ListGeoLocationsRequest#StartCountryCode
   */
  readonly startCountryCode?: string;

  /**
   * @schema Route53ListGeoLocationsRequest#StartSubdivisionCode
   */
  readonly startSubdivisionCode?: string;

  /**
   * @schema Route53ListGeoLocationsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListGeoLocationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListGeoLocationsRequest(obj: Route53ListGeoLocationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartContinentCode': obj.startContinentCode,
    'StartCountryCode': obj.startCountryCode,
    'StartSubdivisionCode': obj.startSubdivisionCode,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListGeoLocationsResponse
 */
export interface Route53ListGeoLocationsResponse {
  /**
   * @schema Route53ListGeoLocationsResponse#GeoLocationDetailsList
   */
  readonly geoLocationDetailsList?: Route53GeoLocationDetails[];

  /**
   * @schema Route53ListGeoLocationsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListGeoLocationsResponse#NextContinentCode
   */
  readonly nextContinentCode?: string;

  /**
   * @schema Route53ListGeoLocationsResponse#NextCountryCode
   */
  readonly nextCountryCode?: string;

  /**
   * @schema Route53ListGeoLocationsResponse#NextSubdivisionCode
   */
  readonly nextSubdivisionCode?: string;

  /**
   * @schema Route53ListGeoLocationsResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListGeoLocationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListGeoLocationsResponse(obj: Route53ListGeoLocationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoLocationDetailsList': obj.geoLocationDetailsList?.map(y => toJson_Route53GeoLocationDetails(y)),
    'IsTruncated': obj.isTruncated,
    'NextContinentCode': obj.nextContinentCode,
    'NextCountryCode': obj.nextCountryCode,
    'NextSubdivisionCode': obj.nextSubdivisionCode,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHealthChecksRequest
 */
export interface Route53ListHealthChecksRequest {
  /**
   * @schema Route53ListHealthChecksRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53ListHealthChecksRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListHealthChecksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHealthChecksRequest(obj: Route53ListHealthChecksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHealthChecksResponse
 */
export interface Route53ListHealthChecksResponse {
  /**
   * @schema Route53ListHealthChecksResponse#HealthChecks
   */
  readonly healthChecks?: Route53HealthCheck[];

  /**
   * @schema Route53ListHealthChecksResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53ListHealthChecksResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListHealthChecksResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Route53ListHealthChecksResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListHealthChecksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHealthChecksResponse(obj: Route53ListHealthChecksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthChecks': obj.healthChecks?.map(y => toJson_Route53HealthCheck(y)),
    'Marker': obj.marker,
    'IsTruncated': obj.isTruncated,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHostedZonesRequest
 */
export interface Route53ListHostedZonesRequest {
  /**
   * @schema Route53ListHostedZonesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53ListHostedZonesRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema Route53ListHostedZonesRequest#DelegationSetId
   */
  readonly delegationSetId?: string;

}

/**
 * Converts an object of type 'Route53ListHostedZonesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHostedZonesRequest(obj: Route53ListHostedZonesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
    'DelegationSetId': obj.delegationSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHostedZonesResponse
 */
export interface Route53ListHostedZonesResponse {
  /**
   * @schema Route53ListHostedZonesResponse#HostedZones
   */
  readonly hostedZones?: Route53HostedZone[];

  /**
   * @schema Route53ListHostedZonesResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53ListHostedZonesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListHostedZonesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Route53ListHostedZonesResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListHostedZonesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHostedZonesResponse(obj: Route53ListHostedZonesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZones': obj.hostedZones?.map(y => toJson_Route53HostedZone(y)),
    'Marker': obj.marker,
    'IsTruncated': obj.isTruncated,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHostedZonesByNameRequest
 */
export interface Route53ListHostedZonesByNameRequest {
  /**
   * @schema Route53ListHostedZonesByNameRequest#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema Route53ListHostedZonesByNameRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListHostedZonesByNameRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListHostedZonesByNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHostedZonesByNameRequest(obj: Route53ListHostedZonesByNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DNSName': obj.dnsName,
    'HostedZoneId': obj.hostedZoneId,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHostedZonesByNameResponse
 */
export interface Route53ListHostedZonesByNameResponse {
  /**
   * @schema Route53ListHostedZonesByNameResponse#HostedZones
   */
  readonly hostedZones?: Route53HostedZone[];

  /**
   * @schema Route53ListHostedZonesByNameResponse#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema Route53ListHostedZonesByNameResponse#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListHostedZonesByNameResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListHostedZonesByNameResponse#NextDNSName
   */
  readonly nextDnsName?: string;

  /**
   * @schema Route53ListHostedZonesByNameResponse#NextHostedZoneId
   */
  readonly nextHostedZoneId?: string;

  /**
   * @schema Route53ListHostedZonesByNameResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListHostedZonesByNameResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHostedZonesByNameResponse(obj: Route53ListHostedZonesByNameResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZones': obj.hostedZones?.map(y => toJson_Route53HostedZone(y)),
    'DNSName': obj.dnsName,
    'HostedZoneId': obj.hostedZoneId,
    'IsTruncated': obj.isTruncated,
    'NextDNSName': obj.nextDnsName,
    'NextHostedZoneId': obj.nextHostedZoneId,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHostedZonesByVpcRequest
 */
export interface Route53ListHostedZonesByVpcRequest {
  /**
   * @schema Route53ListHostedZonesByVpcRequest#VPCId
   */
  readonly vpcId?: string;

  /**
   * @schema Route53ListHostedZonesByVpcRequest#VPCRegion
   */
  readonly vpcRegion?: string;

  /**
   * @schema Route53ListHostedZonesByVpcRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema Route53ListHostedZonesByVpcRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ListHostedZonesByVpcRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHostedZonesByVpcRequest(obj: Route53ListHostedZonesByVpcRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VPCId': obj.vpcId,
    'VPCRegion': obj.vpcRegion,
    'MaxItems': obj.maxItems,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListHostedZonesByVpcResponse
 */
export interface Route53ListHostedZonesByVpcResponse {
  /**
   * @schema Route53ListHostedZonesByVpcResponse#HostedZoneSummaries
   */
  readonly hostedZoneSummaries?: Route53HostedZoneSummary[];

  /**
   * @schema Route53ListHostedZonesByVpcResponse#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema Route53ListHostedZonesByVpcResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ListHostedZonesByVpcResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListHostedZonesByVpcResponse(obj: Route53ListHostedZonesByVpcResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneSummaries': obj.hostedZoneSummaries?.map(y => toJson_Route53HostedZoneSummary(y)),
    'MaxItems': obj.maxItems,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListQueryLoggingConfigsRequest
 */
export interface Route53ListQueryLoggingConfigsRequest {
  /**
   * @schema Route53ListQueryLoggingConfigsRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListQueryLoggingConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ListQueryLoggingConfigsRequest#MaxResults
   */
  readonly maxResults?: string;

}

/**
 * Converts an object of type 'Route53ListQueryLoggingConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListQueryLoggingConfigsRequest(obj: Route53ListQueryLoggingConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListQueryLoggingConfigsResponse
 */
export interface Route53ListQueryLoggingConfigsResponse {
  /**
   * @schema Route53ListQueryLoggingConfigsResponse#QueryLoggingConfigs
   */
  readonly queryLoggingConfigs?: Route53QueryLoggingConfig[];

  /**
   * @schema Route53ListQueryLoggingConfigsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53ListQueryLoggingConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListQueryLoggingConfigsResponse(obj: Route53ListQueryLoggingConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueryLoggingConfigs': obj.queryLoggingConfigs?.map(y => toJson_Route53QueryLoggingConfig(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListResourceRecordSetsRequest
 */
export interface Route53ListResourceRecordSetsRequest {
  /**
   * @schema Route53ListResourceRecordSetsRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListResourceRecordSetsRequest#StartRecordName
   */
  readonly startRecordName?: string;

  /**
   * @schema Route53ListResourceRecordSetsRequest#StartRecordType
   */
  readonly startRecordType?: string;

  /**
   * @schema Route53ListResourceRecordSetsRequest#StartRecordIdentifier
   */
  readonly startRecordIdentifier?: string;

  /**
   * @schema Route53ListResourceRecordSetsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListResourceRecordSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListResourceRecordSetsRequest(obj: Route53ListResourceRecordSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'StartRecordName': obj.startRecordName,
    'StartRecordType': obj.startRecordType,
    'StartRecordIdentifier': obj.startRecordIdentifier,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListResourceRecordSetsResponse
 */
export interface Route53ListResourceRecordSetsResponse {
  /**
   * @schema Route53ListResourceRecordSetsResponse#ResourceRecordSets
   */
  readonly resourceRecordSets?: Route53ResourceRecordSet[];

  /**
   * @schema Route53ListResourceRecordSetsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListResourceRecordSetsResponse#NextRecordName
   */
  readonly nextRecordName?: string;

  /**
   * @schema Route53ListResourceRecordSetsResponse#NextRecordType
   */
  readonly nextRecordType?: string;

  /**
   * @schema Route53ListResourceRecordSetsResponse#NextRecordIdentifier
   */
  readonly nextRecordIdentifier?: string;

  /**
   * @schema Route53ListResourceRecordSetsResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListResourceRecordSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListResourceRecordSetsResponse(obj: Route53ListResourceRecordSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceRecordSets': obj.resourceRecordSets?.map(y => toJson_Route53ResourceRecordSet(y)),
    'IsTruncated': obj.isTruncated,
    'NextRecordName': obj.nextRecordName,
    'NextRecordType': obj.nextRecordType,
    'NextRecordIdentifier': obj.nextRecordIdentifier,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListReusableDelegationSetsRequest
 */
export interface Route53ListReusableDelegationSetsRequest {
  /**
   * @schema Route53ListReusableDelegationSetsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53ListReusableDelegationSetsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListReusableDelegationSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListReusableDelegationSetsRequest(obj: Route53ListReusableDelegationSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Marker': obj.marker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListReusableDelegationSetsResponse
 */
export interface Route53ListReusableDelegationSetsResponse {
  /**
   * @schema Route53ListReusableDelegationSetsResponse#DelegationSets
   */
  readonly delegationSets?: Route53DelegationSet[];

  /**
   * @schema Route53ListReusableDelegationSetsResponse#Marker
   */
  readonly marker?: string;

  /**
   * @schema Route53ListReusableDelegationSetsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListReusableDelegationSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Route53ListReusableDelegationSetsResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListReusableDelegationSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListReusableDelegationSetsResponse(obj: Route53ListReusableDelegationSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DelegationSets': obj.delegationSets?.map(y => toJson_Route53DelegationSet(y)),
    'Marker': obj.marker,
    'IsTruncated': obj.isTruncated,
    'NextMarker': obj.nextMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTagsForResourceRequest
 */
export interface Route53ListTagsForResourceRequest {
  /**
   * @schema Route53ListTagsForResourceRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Route53ListTagsForResourceRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'Route53ListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTagsForResourceRequest(obj: Route53ListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTagsForResourceResponse
 */
export interface Route53ListTagsForResourceResponse {
  /**
   * @schema Route53ListTagsForResourceResponse#ResourceTagSet
   */
  readonly resourceTagSet?: Route53ResourceTagSet;

}

/**
 * Converts an object of type 'Route53ListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTagsForResourceResponse(obj: Route53ListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTagSet': toJson_Route53ResourceTagSet(obj.resourceTagSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTagsForResourcesRequest
 */
export interface Route53ListTagsForResourcesRequest {
  /**
   * @schema Route53ListTagsForResourcesRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Route53ListTagsForResourcesRequest#ResourceIds
   */
  readonly resourceIds?: string[];

}

/**
 * Converts an object of type 'Route53ListTagsForResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTagsForResourcesRequest(obj: Route53ListTagsForResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceIds': obj.resourceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTagsForResourcesResponse
 */
export interface Route53ListTagsForResourcesResponse {
  /**
   * @schema Route53ListTagsForResourcesResponse#ResourceTagSets
   */
  readonly resourceTagSets?: Route53ResourceTagSet[];

}

/**
 * Converts an object of type 'Route53ListTagsForResourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTagsForResourcesResponse(obj: Route53ListTagsForResourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceTagSets': obj.resourceTagSets?.map(y => toJson_Route53ResourceTagSet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPoliciesRequest
 */
export interface Route53ListTrafficPoliciesRequest {
  /**
   * @schema Route53ListTrafficPoliciesRequest#TrafficPolicyIdMarker
   */
  readonly trafficPolicyIdMarker?: string;

  /**
   * @schema Route53ListTrafficPoliciesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPoliciesRequest(obj: Route53ListTrafficPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyIdMarker': obj.trafficPolicyIdMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPoliciesResponse
 */
export interface Route53ListTrafficPoliciesResponse {
  /**
   * @schema Route53ListTrafficPoliciesResponse#TrafficPolicySummaries
   */
  readonly trafficPolicySummaries?: Route53TrafficPolicySummary[];

  /**
   * @schema Route53ListTrafficPoliciesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListTrafficPoliciesResponse#TrafficPolicyIdMarker
   */
  readonly trafficPolicyIdMarker?: string;

  /**
   * @schema Route53ListTrafficPoliciesResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPoliciesResponse(obj: Route53ListTrafficPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicySummaries': obj.trafficPolicySummaries?.map(y => toJson_Route53TrafficPolicySummary(y)),
    'IsTruncated': obj.isTruncated,
    'TrafficPolicyIdMarker': obj.trafficPolicyIdMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyInstancesRequest
 */
export interface Route53ListTrafficPolicyInstancesRequest {
  /**
   * @schema Route53ListTrafficPolicyInstancesRequest#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesRequest#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesRequest#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyInstancesRequest(obj: Route53ListTrafficPolicyInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneIdMarker': obj.hostedZoneIdMarker,
    'TrafficPolicyInstanceNameMarker': obj.trafficPolicyInstanceNameMarker,
    'TrafficPolicyInstanceTypeMarker': obj.trafficPolicyInstanceTypeMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyInstancesResponse
 */
export interface Route53ListTrafficPolicyInstancesResponse {
  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances?: Route53TrafficPolicyInstance[];

  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyInstancesResponse(obj: Route53ListTrafficPolicyInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstances': obj.trafficPolicyInstances?.map(y => toJson_Route53TrafficPolicyInstance(y)),
    'HostedZoneIdMarker': obj.hostedZoneIdMarker,
    'TrafficPolicyInstanceNameMarker': obj.trafficPolicyInstanceNameMarker,
    'TrafficPolicyInstanceTypeMarker': obj.trafficPolicyInstanceTypeMarker,
    'IsTruncated': obj.isTruncated,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest
 */
export interface Route53ListTrafficPolicyInstancesByHostedZoneRequest {
  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyInstancesByHostedZoneRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyInstancesByHostedZoneRequest(obj: Route53ListTrafficPolicyInstancesByHostedZoneRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'TrafficPolicyInstanceNameMarker': obj.trafficPolicyInstanceNameMarker,
    'TrafficPolicyInstanceTypeMarker': obj.trafficPolicyInstanceTypeMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse
 */
export interface Route53ListTrafficPolicyInstancesByHostedZoneResponse {
  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances?: Route53TrafficPolicyInstance[];

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyInstancesByHostedZoneResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyInstancesByHostedZoneResponse(obj: Route53ListTrafficPolicyInstancesByHostedZoneResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstances': obj.trafficPolicyInstances?.map(y => toJson_Route53TrafficPolicyInstance(y)),
    'TrafficPolicyInstanceNameMarker': obj.trafficPolicyInstanceNameMarker,
    'TrafficPolicyInstanceTypeMarker': obj.trafficPolicyInstanceTypeMarker,
    'IsTruncated': obj.isTruncated,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyInstancesByPolicyRequest
 */
export interface Route53ListTrafficPolicyInstancesByPolicyRequest {
  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyId
   */
  readonly trafficPolicyId?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion?: number;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyInstancesByPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyInstancesByPolicyRequest(obj: Route53ListTrafficPolicyInstancesByPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyId': obj.trafficPolicyId,
    'TrafficPolicyVersion': obj.trafficPolicyVersion,
    'HostedZoneIdMarker': obj.hostedZoneIdMarker,
    'TrafficPolicyInstanceNameMarker': obj.trafficPolicyInstanceNameMarker,
    'TrafficPolicyInstanceTypeMarker': obj.trafficPolicyInstanceTypeMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyInstancesByPolicyResponse
 */
export interface Route53ListTrafficPolicyInstancesByPolicyResponse {
  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances?: Route53TrafficPolicyInstance[];

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyInstancesByPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyInstancesByPolicyResponse(obj: Route53ListTrafficPolicyInstancesByPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstances': obj.trafficPolicyInstances?.map(y => toJson_Route53TrafficPolicyInstance(y)),
    'HostedZoneIdMarker': obj.hostedZoneIdMarker,
    'TrafficPolicyInstanceNameMarker': obj.trafficPolicyInstanceNameMarker,
    'TrafficPolicyInstanceTypeMarker': obj.trafficPolicyInstanceTypeMarker,
    'IsTruncated': obj.isTruncated,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyVersionsRequest
 */
export interface Route53ListTrafficPolicyVersionsRequest {
  /**
   * @schema Route53ListTrafficPolicyVersionsRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ListTrafficPolicyVersionsRequest#TrafficPolicyVersionMarker
   */
  readonly trafficPolicyVersionMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyVersionsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyVersionsRequest(obj: Route53ListTrafficPolicyVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'TrafficPolicyVersionMarker': obj.trafficPolicyVersionMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListTrafficPolicyVersionsResponse
 */
export interface Route53ListTrafficPolicyVersionsResponse {
  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#TrafficPolicies
   */
  readonly trafficPolicies?: Route53TrafficPolicy[];

  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#IsTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#TrafficPolicyVersionMarker
   */
  readonly trafficPolicyVersionMarker?: string;

  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * Converts an object of type 'Route53ListTrafficPolicyVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListTrafficPolicyVersionsResponse(obj: Route53ListTrafficPolicyVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicies': obj.trafficPolicies?.map(y => toJson_Route53TrafficPolicy(y)),
    'IsTruncated': obj.isTruncated,
    'TrafficPolicyVersionMarker': obj.trafficPolicyVersionMarker,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListVpcAssociationAuthorizationsRequest
 */
export interface Route53ListVpcAssociationAuthorizationsRequest {
  /**
   * @schema Route53ListVpcAssociationAuthorizationsRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListVpcAssociationAuthorizationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ListVpcAssociationAuthorizationsRequest#MaxResults
   */
  readonly maxResults?: string;

}

/**
 * Converts an object of type 'Route53ListVpcAssociationAuthorizationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListVpcAssociationAuthorizationsRequest(obj: Route53ListVpcAssociationAuthorizationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ListVpcAssociationAuthorizationsResponse
 */
export interface Route53ListVpcAssociationAuthorizationsResponse {
  /**
   * @schema Route53ListVpcAssociationAuthorizationsResponse#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53ListVpcAssociationAuthorizationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ListVpcAssociationAuthorizationsResponse#VPCs
   */
  readonly vpCs?: Route53Vpc[];

}

/**
 * Converts an object of type 'Route53ListVpcAssociationAuthorizationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ListVpcAssociationAuthorizationsResponse(obj: Route53ListVpcAssociationAuthorizationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'NextToken': obj.nextToken,
    'VPCs': obj.vpCs?.map(y => toJson_Route53Vpc(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53TestDnsAnswerRequest
 */
export interface Route53TestDnsAnswerRequest {
  /**
   * @schema Route53TestDnsAnswerRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53TestDnsAnswerRequest#RecordName
   */
  readonly recordName?: string;

  /**
   * @schema Route53TestDnsAnswerRequest#RecordType
   */
  readonly recordType?: string;

  /**
   * @schema Route53TestDnsAnswerRequest#ResolverIP
   */
  readonly resolverIp?: string;

  /**
   * @schema Route53TestDnsAnswerRequest#EDNS0ClientSubnetIP
   */
  readonly edns0ClientSubnetIp?: string;

  /**
   * @schema Route53TestDnsAnswerRequest#EDNS0ClientSubnetMask
   */
  readonly edns0ClientSubnetMask?: string;

}

/**
 * Converts an object of type 'Route53TestDnsAnswerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53TestDnsAnswerRequest(obj: Route53TestDnsAnswerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'RecordName': obj.recordName,
    'RecordType': obj.recordType,
    'ResolverIP': obj.resolverIp,
    'EDNS0ClientSubnetIP': obj.edns0ClientSubnetIp,
    'EDNS0ClientSubnetMask': obj.edns0ClientSubnetMask,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53TestDnsAnswerResponse
 */
export interface Route53TestDnsAnswerResponse {
  /**
   * @schema Route53TestDnsAnswerResponse#Nameserver
   */
  readonly nameserver?: string;

  /**
   * @schema Route53TestDnsAnswerResponse#RecordName
   */
  readonly recordName?: string;

  /**
   * @schema Route53TestDnsAnswerResponse#RecordType
   */
  readonly recordType?: string;

  /**
   * @schema Route53TestDnsAnswerResponse#RecordData
   */
  readonly recordData?: string[];

  /**
   * @schema Route53TestDnsAnswerResponse#ResponseCode
   */
  readonly responseCode?: string;

  /**
   * @schema Route53TestDnsAnswerResponse#Protocol
   */
  readonly protocol?: string;

}

/**
 * Converts an object of type 'Route53TestDnsAnswerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53TestDnsAnswerResponse(obj: Route53TestDnsAnswerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Nameserver': obj.nameserver,
    'RecordName': obj.recordName,
    'RecordType': obj.recordType,
    'RecordData': obj.recordData?.map(y => y),
    'ResponseCode': obj.responseCode,
    'Protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateHealthCheckRequest
 */
export interface Route53UpdateHealthCheckRequest {
  /**
   * @schema Route53UpdateHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId?: string;

  /**
   * @schema Route53UpdateHealthCheckRequest#HealthCheckVersion
   */
  readonly healthCheckVersion?: number;

  /**
   * @schema Route53UpdateHealthCheckRequest#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Route53UpdateHealthCheckRequest#Port
   */
  readonly port?: number;

  /**
   * @schema Route53UpdateHealthCheckRequest#ResourcePath
   */
  readonly resourcePath?: string;

  /**
   * @schema Route53UpdateHealthCheckRequest#FullyQualifiedDomainName
   */
  readonly fullyQualifiedDomainName?: string;

  /**
   * @schema Route53UpdateHealthCheckRequest#SearchString
   */
  readonly searchString?: string;

  /**
   * @schema Route53UpdateHealthCheckRequest#FailureThreshold
   */
  readonly failureThreshold?: number;

  /**
   * @schema Route53UpdateHealthCheckRequest#Inverted
   */
  readonly inverted?: boolean;

  /**
   * @schema Route53UpdateHealthCheckRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema Route53UpdateHealthCheckRequest#HealthThreshold
   */
  readonly healthThreshold?: number;

  /**
   * @schema Route53UpdateHealthCheckRequest#ChildHealthChecks
   */
  readonly childHealthChecks?: string[];

  /**
   * @schema Route53UpdateHealthCheckRequest#EnableSNI
   */
  readonly enableSni?: boolean;

  /**
   * @schema Route53UpdateHealthCheckRequest#Regions
   */
  readonly regions?: string[];

  /**
   * @schema Route53UpdateHealthCheckRequest#AlarmIdentifier
   */
  readonly alarmIdentifier?: Route53AlarmIdentifier;

  /**
   * @schema Route53UpdateHealthCheckRequest#InsufficientDataHealthStatus
   */
  readonly insufficientDataHealthStatus?: string;

  /**
   * @schema Route53UpdateHealthCheckRequest#ResetElements
   */
  readonly resetElements?: string[];

}

/**
 * Converts an object of type 'Route53UpdateHealthCheckRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateHealthCheckRequest(obj: Route53UpdateHealthCheckRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckId': obj.healthCheckId,
    'HealthCheckVersion': obj.healthCheckVersion,
    'IPAddress': obj.ipAddress,
    'Port': obj.port,
    'ResourcePath': obj.resourcePath,
    'FullyQualifiedDomainName': obj.fullyQualifiedDomainName,
    'SearchString': obj.searchString,
    'FailureThreshold': obj.failureThreshold,
    'Inverted': obj.inverted,
    'Disabled': obj.disabled,
    'HealthThreshold': obj.healthThreshold,
    'ChildHealthChecks': obj.childHealthChecks?.map(y => y),
    'EnableSNI': obj.enableSni,
    'Regions': obj.regions?.map(y => y),
    'AlarmIdentifier': toJson_Route53AlarmIdentifier(obj.alarmIdentifier),
    'InsufficientDataHealthStatus': obj.insufficientDataHealthStatus,
    'ResetElements': obj.resetElements?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateHealthCheckResponse
 */
export interface Route53UpdateHealthCheckResponse {
  /**
   * @schema Route53UpdateHealthCheckResponse#HealthCheck
   */
  readonly healthCheck?: Route53HealthCheck;

}

/**
 * Converts an object of type 'Route53UpdateHealthCheckResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateHealthCheckResponse(obj: Route53UpdateHealthCheckResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheck': toJson_Route53HealthCheck(obj.healthCheck),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateHostedZoneCommentRequest
 */
export interface Route53UpdateHostedZoneCommentRequest {
  /**
   * @schema Route53UpdateHostedZoneCommentRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53UpdateHostedZoneCommentRequest#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53UpdateHostedZoneCommentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateHostedZoneCommentRequest(obj: Route53UpdateHostedZoneCommentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateHostedZoneCommentResponse
 */
export interface Route53UpdateHostedZoneCommentResponse {
  /**
   * @schema Route53UpdateHostedZoneCommentResponse#HostedZone
   */
  readonly hostedZone?: Route53HostedZone;

}

/**
 * Converts an object of type 'Route53UpdateHostedZoneCommentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateHostedZoneCommentResponse(obj: Route53UpdateHostedZoneCommentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZone': toJson_Route53HostedZone(obj.hostedZone),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateTrafficPolicyCommentRequest
 */
export interface Route53UpdateTrafficPolicyCommentRequest {
  /**
   * @schema Route53UpdateTrafficPolicyCommentRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53UpdateTrafficPolicyCommentRequest#Version
   */
  readonly version?: number;

  /**
   * @schema Route53UpdateTrafficPolicyCommentRequest#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53UpdateTrafficPolicyCommentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateTrafficPolicyCommentRequest(obj: Route53UpdateTrafficPolicyCommentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Version': obj.version,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateTrafficPolicyCommentResponse
 */
export interface Route53UpdateTrafficPolicyCommentResponse {
  /**
   * @schema Route53UpdateTrafficPolicyCommentResponse#TrafficPolicy
   */
  readonly trafficPolicy?: Route53TrafficPolicy;

}

/**
 * Converts an object of type 'Route53UpdateTrafficPolicyCommentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateTrafficPolicyCommentResponse(obj: Route53UpdateTrafficPolicyCommentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicy': toJson_Route53TrafficPolicy(obj.trafficPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateTrafficPolicyInstanceRequest
 */
export interface Route53UpdateTrafficPolicyInstanceRequest {
  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#Id
   */
  readonly id?: string;

  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#TTL
   */
  readonly ttl?: number;

  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#TrafficPolicyId
   */
  readonly trafficPolicyId?: string;

  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion?: number;

}

/**
 * Converts an object of type 'Route53UpdateTrafficPolicyInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateTrafficPolicyInstanceRequest(obj: Route53UpdateTrafficPolicyInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'TTL': obj.ttl,
    'TrafficPolicyId': obj.trafficPolicyId,
    'TrafficPolicyVersion': obj.trafficPolicyVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53UpdateTrafficPolicyInstanceResponse
 */
export interface Route53UpdateTrafficPolicyInstanceResponse {
  /**
   * @schema Route53UpdateTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance?: Route53TrafficPolicyInstance;

}

/**
 * Converts an object of type 'Route53UpdateTrafficPolicyInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53UpdateTrafficPolicyInstanceResponse(obj: Route53UpdateTrafficPolicyInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TrafficPolicyInstance': toJson_Route53TrafficPolicyInstance(obj.trafficPolicyInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ChangeInfo
 */
export interface Route53ChangeInfo {
  /**
   * @schema Route53ChangeInfo#Id
   */
  readonly id?: string;

  /**
   * @schema Route53ChangeInfo#Status
   */
  readonly status?: string;

  /**
   * @schema Route53ChangeInfo#SubmittedAt
   */
  readonly submittedAt?: string;

  /**
   * @schema Route53ChangeInfo#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53ChangeInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ChangeInfo(obj: Route53ChangeInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Status': obj.status,
    'SubmittedAt': obj.submittedAt,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53Vpc
 */
export interface Route53Vpc {
  /**
   * @schema Route53Vpc#VPCRegion
   */
  readonly vpcRegion?: string;

  /**
   * @schema Route53Vpc#VPCId
   */
  readonly vpcId?: string;

}

/**
 * Converts an object of type 'Route53Vpc' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53Vpc(obj: Route53Vpc | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VPCRegion': obj.vpcRegion,
    'VPCId': obj.vpcId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ChangeBatch
 */
export interface Route53ChangeBatch {
  /**
   * @schema Route53ChangeBatch#Comment
   */
  readonly comment?: string;

  /**
   * @schema Route53ChangeBatch#Changes
   */
  readonly changes?: Route53Change[];

}

/**
 * Converts an object of type 'Route53ChangeBatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ChangeBatch(obj: Route53ChangeBatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'Changes': obj.changes?.map(y => toJson_Route53Change(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53Tag
 */
export interface Route53Tag {
  /**
   * @schema Route53Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Route53Tag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Route53Tag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53Tag(obj: Route53Tag | undefined): Record<string, any> | undefined {
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
 * @schema Route53HealthCheckConfig
 */
export interface Route53HealthCheckConfig {
  /**
   * @schema Route53HealthCheckConfig#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Route53HealthCheckConfig#Port
   */
  readonly port?: number;

  /**
   * @schema Route53HealthCheckConfig#Type
   */
  readonly type?: string;

  /**
   * @schema Route53HealthCheckConfig#ResourcePath
   */
  readonly resourcePath?: string;

  /**
   * @schema Route53HealthCheckConfig#FullyQualifiedDomainName
   */
  readonly fullyQualifiedDomainName?: string;

  /**
   * @schema Route53HealthCheckConfig#SearchString
   */
  readonly searchString?: string;

  /**
   * @schema Route53HealthCheckConfig#RequestInterval
   */
  readonly requestInterval?: number;

  /**
   * @schema Route53HealthCheckConfig#FailureThreshold
   */
  readonly failureThreshold?: number;

  /**
   * @schema Route53HealthCheckConfig#MeasureLatency
   */
  readonly measureLatency?: boolean;

  /**
   * @schema Route53HealthCheckConfig#Inverted
   */
  readonly inverted?: boolean;

  /**
   * @schema Route53HealthCheckConfig#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema Route53HealthCheckConfig#HealthThreshold
   */
  readonly healthThreshold?: number;

  /**
   * @schema Route53HealthCheckConfig#ChildHealthChecks
   */
  readonly childHealthChecks?: string[];

  /**
   * @schema Route53HealthCheckConfig#EnableSNI
   */
  readonly enableSni?: boolean;

  /**
   * @schema Route53HealthCheckConfig#Regions
   */
  readonly regions?: string[];

  /**
   * @schema Route53HealthCheckConfig#AlarmIdentifier
   */
  readonly alarmIdentifier?: Route53AlarmIdentifier;

  /**
   * @schema Route53HealthCheckConfig#InsufficientDataHealthStatus
   */
  readonly insufficientDataHealthStatus?: string;

  /**
   * @schema Route53HealthCheckConfig#RoutingControlArn
   */
  readonly routingControlArn?: string;

}

/**
 * Converts an object of type 'Route53HealthCheckConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HealthCheckConfig(obj: Route53HealthCheckConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IPAddress': obj.ipAddress,
    'Port': obj.port,
    'Type': obj.type,
    'ResourcePath': obj.resourcePath,
    'FullyQualifiedDomainName': obj.fullyQualifiedDomainName,
    'SearchString': obj.searchString,
    'RequestInterval': obj.requestInterval,
    'FailureThreshold': obj.failureThreshold,
    'MeasureLatency': obj.measureLatency,
    'Inverted': obj.inverted,
    'Disabled': obj.disabled,
    'HealthThreshold': obj.healthThreshold,
    'ChildHealthChecks': obj.childHealthChecks?.map(y => y),
    'EnableSNI': obj.enableSni,
    'Regions': obj.regions?.map(y => y),
    'AlarmIdentifier': toJson_Route53AlarmIdentifier(obj.alarmIdentifier),
    'InsufficientDataHealthStatus': obj.insufficientDataHealthStatus,
    'RoutingControlArn': obj.routingControlArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HealthCheck
 */
export interface Route53HealthCheck {
  /**
   * @schema Route53HealthCheck#Id
   */
  readonly id?: string;

  /**
   * @schema Route53HealthCheck#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53HealthCheck#LinkedService
   */
  readonly linkedService?: Route53LinkedService;

  /**
   * @schema Route53HealthCheck#HealthCheckConfig
   */
  readonly healthCheckConfig?: Route53HealthCheckConfig;

  /**
   * @schema Route53HealthCheck#HealthCheckVersion
   */
  readonly healthCheckVersion?: number;

  /**
   * @schema Route53HealthCheck#CloudWatchAlarmConfiguration
   */
  readonly cloudWatchAlarmConfiguration?: Route53CloudWatchAlarmConfiguration;

}

/**
 * Converts an object of type 'Route53HealthCheck' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HealthCheck(obj: Route53HealthCheck | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CallerReference': obj.callerReference,
    'LinkedService': toJson_Route53LinkedService(obj.linkedService),
    'HealthCheckConfig': toJson_Route53HealthCheckConfig(obj.healthCheckConfig),
    'HealthCheckVersion': obj.healthCheckVersion,
    'CloudWatchAlarmConfiguration': toJson_Route53CloudWatchAlarmConfiguration(obj.cloudWatchAlarmConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HostedZoneConfig
 */
export interface Route53HostedZoneConfig {
  /**
   * @schema Route53HostedZoneConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema Route53HostedZoneConfig#PrivateZone
   */
  readonly privateZone?: boolean;

}

/**
 * Converts an object of type 'Route53HostedZoneConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HostedZoneConfig(obj: Route53HostedZoneConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comment': obj.comment,
    'PrivateZone': obj.privateZone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HostedZone
 */
export interface Route53HostedZone {
  /**
   * @schema Route53HostedZone#Id
   */
  readonly id?: string;

  /**
   * @schema Route53HostedZone#Name
   */
  readonly name?: string;

  /**
   * @schema Route53HostedZone#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53HostedZone#Config
   */
  readonly config?: Route53HostedZoneConfig;

  /**
   * @schema Route53HostedZone#ResourceRecordSetCount
   */
  readonly resourceRecordSetCount?: number;

  /**
   * @schema Route53HostedZone#LinkedService
   */
  readonly linkedService?: Route53LinkedService;

}

/**
 * Converts an object of type 'Route53HostedZone' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HostedZone(obj: Route53HostedZone | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'CallerReference': obj.callerReference,
    'Config': toJson_Route53HostedZoneConfig(obj.config),
    'ResourceRecordSetCount': obj.resourceRecordSetCount,
    'LinkedService': toJson_Route53LinkedService(obj.linkedService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DelegationSet
 */
export interface Route53DelegationSet {
  /**
   * @schema Route53DelegationSet#Id
   */
  readonly id?: string;

  /**
   * @schema Route53DelegationSet#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema Route53DelegationSet#NameServers
   */
  readonly nameServers?: string[];

}

/**
 * Converts an object of type 'Route53DelegationSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DelegationSet(obj: Route53DelegationSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'CallerReference': obj.callerReference,
    'NameServers': obj.nameServers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53KeySigningKey
 */
export interface Route53KeySigningKey {
  /**
   * @schema Route53KeySigningKey#Name
   */
  readonly name?: string;

  /**
   * @schema Route53KeySigningKey#KmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema Route53KeySigningKey#Flag
   */
  readonly flag?: number;

  /**
   * @schema Route53KeySigningKey#SigningAlgorithmMnemonic
   */
  readonly signingAlgorithmMnemonic?: string;

  /**
   * @schema Route53KeySigningKey#SigningAlgorithmType
   */
  readonly signingAlgorithmType?: number;

  /**
   * @schema Route53KeySigningKey#DigestAlgorithmMnemonic
   */
  readonly digestAlgorithmMnemonic?: string;

  /**
   * @schema Route53KeySigningKey#DigestAlgorithmType
   */
  readonly digestAlgorithmType?: number;

  /**
   * @schema Route53KeySigningKey#KeyTag
   */
  readonly keyTag?: number;

  /**
   * @schema Route53KeySigningKey#DigestValue
   */
  readonly digestValue?: string;

  /**
   * @schema Route53KeySigningKey#PublicKey
   */
  readonly publicKey?: string;

  /**
   * @schema Route53KeySigningKey#DSRecord
   */
  readonly dsRecord?: string;

  /**
   * @schema Route53KeySigningKey#DNSKEYRecord
   */
  readonly dnskeyRecord?: string;

  /**
   * @schema Route53KeySigningKey#Status
   */
  readonly status?: string;

  /**
   * @schema Route53KeySigningKey#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Route53KeySigningKey#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema Route53KeySigningKey#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

}

/**
 * Converts an object of type 'Route53KeySigningKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53KeySigningKey(obj: Route53KeySigningKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'KmsArn': obj.kmsArn,
    'Flag': obj.flag,
    'SigningAlgorithmMnemonic': obj.signingAlgorithmMnemonic,
    'SigningAlgorithmType': obj.signingAlgorithmType,
    'DigestAlgorithmMnemonic': obj.digestAlgorithmMnemonic,
    'DigestAlgorithmType': obj.digestAlgorithmType,
    'KeyTag': obj.keyTag,
    'DigestValue': obj.digestValue,
    'PublicKey': obj.publicKey,
    'DSRecord': obj.dsRecord,
    'DNSKEYRecord': obj.dnskeyRecord,
    'Status': obj.status,
    'StatusMessage': obj.statusMessage,
    'CreatedDate': obj.createdDate,
    'LastModifiedDate': obj.lastModifiedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53QueryLoggingConfig
 */
export interface Route53QueryLoggingConfig {
  /**
   * @schema Route53QueryLoggingConfig#Id
   */
  readonly id?: string;

  /**
   * @schema Route53QueryLoggingConfig#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53QueryLoggingConfig#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn?: string;

}

/**
 * Converts an object of type 'Route53QueryLoggingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53QueryLoggingConfig(obj: Route53QueryLoggingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'HostedZoneId': obj.hostedZoneId,
    'CloudWatchLogsLogGroupArn': obj.cloudWatchLogsLogGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53TrafficPolicy
 */
export interface Route53TrafficPolicy {
  /**
   * @schema Route53TrafficPolicy#Id
   */
  readonly id?: string;

  /**
   * @schema Route53TrafficPolicy#Version
   */
  readonly version?: number;

  /**
   * @schema Route53TrafficPolicy#Name
   */
  readonly name?: string;

  /**
   * @schema Route53TrafficPolicy#Type
   */
  readonly type?: string;

  /**
   * @schema Route53TrafficPolicy#Document
   */
  readonly document?: string;

  /**
   * @schema Route53TrafficPolicy#Comment
   */
  readonly comment?: string;

}

/**
 * Converts an object of type 'Route53TrafficPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53TrafficPolicy(obj: Route53TrafficPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Version': obj.version,
    'Name': obj.name,
    'Type': obj.type,
    'Document': obj.document,
    'Comment': obj.comment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53TrafficPolicyInstance
 */
export interface Route53TrafficPolicyInstance {
  /**
   * @schema Route53TrafficPolicyInstance#Id
   */
  readonly id?: string;

  /**
   * @schema Route53TrafficPolicyInstance#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53TrafficPolicyInstance#Name
   */
  readonly name?: string;

  /**
   * @schema Route53TrafficPolicyInstance#TTL
   */
  readonly ttl?: number;

  /**
   * @schema Route53TrafficPolicyInstance#State
   */
  readonly state?: string;

  /**
   * @schema Route53TrafficPolicyInstance#Message
   */
  readonly message?: string;

  /**
   * @schema Route53TrafficPolicyInstance#TrafficPolicyId
   */
  readonly trafficPolicyId?: string;

  /**
   * @schema Route53TrafficPolicyInstance#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion?: number;

  /**
   * @schema Route53TrafficPolicyInstance#TrafficPolicyType
   */
  readonly trafficPolicyType?: string;

}

/**
 * Converts an object of type 'Route53TrafficPolicyInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53TrafficPolicyInstance(obj: Route53TrafficPolicyInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'HostedZoneId': obj.hostedZoneId,
    'Name': obj.name,
    'TTL': obj.ttl,
    'State': obj.state,
    'Message': obj.message,
    'TrafficPolicyId': obj.trafficPolicyId,
    'TrafficPolicyVersion': obj.trafficPolicyVersion,
    'TrafficPolicyType': obj.trafficPolicyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53AccountLimit
 */
export interface Route53AccountLimit {
  /**
   * @schema Route53AccountLimit#Type
   */
  readonly type?: string;

  /**
   * @schema Route53AccountLimit#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'Route53AccountLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53AccountLimit(obj: Route53AccountLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53DnssecStatus
 */
export interface Route53DnssecStatus {
  /**
   * @schema Route53DnssecStatus#ServeSignature
   */
  readonly serveSignature?: string;

  /**
   * @schema Route53DnssecStatus#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * Converts an object of type 'Route53DnssecStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53DnssecStatus(obj: Route53DnssecStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServeSignature': obj.serveSignature,
    'StatusMessage': obj.statusMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GeoLocationDetails
 */
export interface Route53GeoLocationDetails {
  /**
   * @schema Route53GeoLocationDetails#ContinentCode
   */
  readonly continentCode?: string;

  /**
   * @schema Route53GeoLocationDetails#ContinentName
   */
  readonly continentName?: string;

  /**
   * @schema Route53GeoLocationDetails#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema Route53GeoLocationDetails#CountryName
   */
  readonly countryName?: string;

  /**
   * @schema Route53GeoLocationDetails#SubdivisionCode
   */
  readonly subdivisionCode?: string;

  /**
   * @schema Route53GeoLocationDetails#SubdivisionName
   */
  readonly subdivisionName?: string;

}

/**
 * Converts an object of type 'Route53GeoLocationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GeoLocationDetails(obj: Route53GeoLocationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinentCode': obj.continentCode,
    'ContinentName': obj.continentName,
    'CountryCode': obj.countryCode,
    'CountryName': obj.countryName,
    'SubdivisionCode': obj.subdivisionCode,
    'SubdivisionName': obj.subdivisionName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HealthCheckObservation
 */
export interface Route53HealthCheckObservation {
  /**
   * @schema Route53HealthCheckObservation#Region
   */
  readonly region?: string;

  /**
   * @schema Route53HealthCheckObservation#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Route53HealthCheckObservation#StatusReport
   */
  readonly statusReport?: Route53StatusReport;

}

/**
 * Converts an object of type 'Route53HealthCheckObservation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HealthCheckObservation(obj: Route53HealthCheckObservation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Region': obj.region,
    'IPAddress': obj.ipAddress,
    'StatusReport': toJson_Route53StatusReport(obj.statusReport),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HostedZoneLimit
 */
export interface Route53HostedZoneLimit {
  /**
   * @schema Route53HostedZoneLimit#Type
   */
  readonly type?: string;

  /**
   * @schema Route53HostedZoneLimit#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'Route53HostedZoneLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HostedZoneLimit(obj: Route53HostedZoneLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ReusableDelegationSetLimit
 */
export interface Route53ReusableDelegationSetLimit {
  /**
   * @schema Route53ReusableDelegationSetLimit#Type
   */
  readonly type?: string;

  /**
   * @schema Route53ReusableDelegationSetLimit#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'Route53ReusableDelegationSetLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ReusableDelegationSetLimit(obj: Route53ReusableDelegationSetLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HostedZoneSummary
 */
export interface Route53HostedZoneSummary {
  /**
   * @schema Route53HostedZoneSummary#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53HostedZoneSummary#Name
   */
  readonly name?: string;

  /**
   * @schema Route53HostedZoneSummary#Owner
   */
  readonly owner?: Route53HostedZoneOwner;

}

/**
 * Converts an object of type 'Route53HostedZoneSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HostedZoneSummary(obj: Route53HostedZoneSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'Name': obj.name,
    'Owner': toJson_Route53HostedZoneOwner(obj.owner),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResourceRecordSet
 */
export interface Route53ResourceRecordSet {
  /**
   * @schema Route53ResourceRecordSet#Name
   */
  readonly name?: string;

  /**
   * @schema Route53ResourceRecordSet#Type
   */
  readonly type?: string;

  /**
   * @schema Route53ResourceRecordSet#SetIdentifier
   */
  readonly setIdentifier?: string;

  /**
   * @schema Route53ResourceRecordSet#Weight
   */
  readonly weight?: number;

  /**
   * @schema Route53ResourceRecordSet#Region
   */
  readonly region?: string;

  /**
   * @schema Route53ResourceRecordSet#GeoLocation
   */
  readonly geoLocation?: Route53GeoLocation;

  /**
   * @schema Route53ResourceRecordSet#Failover
   */
  readonly failover?: string;

  /**
   * @schema Route53ResourceRecordSet#MultiValueAnswer
   */
  readonly multiValueAnswer?: boolean;

  /**
   * @schema Route53ResourceRecordSet#TTL
   */
  readonly ttl?: number;

  /**
   * @schema Route53ResourceRecordSet#ResourceRecords
   */
  readonly resourceRecords?: Route53ResourceRecord[];

  /**
   * @schema Route53ResourceRecordSet#AliasTarget
   */
  readonly aliasTarget?: Route53AliasTarget;

  /**
   * @schema Route53ResourceRecordSet#HealthCheckId
   */
  readonly healthCheckId?: string;

  /**
   * @schema Route53ResourceRecordSet#TrafficPolicyInstanceId
   */
  readonly trafficPolicyInstanceId?: string;

}

/**
 * Converts an object of type 'Route53ResourceRecordSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResourceRecordSet(obj: Route53ResourceRecordSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'SetIdentifier': obj.setIdentifier,
    'Weight': obj.weight,
    'Region': obj.region,
    'GeoLocation': toJson_Route53GeoLocation(obj.geoLocation),
    'Failover': obj.failover,
    'MultiValueAnswer': obj.multiValueAnswer,
    'TTL': obj.ttl,
    'ResourceRecords': obj.resourceRecords?.map(y => toJson_Route53ResourceRecord(y)),
    'AliasTarget': toJson_Route53AliasTarget(obj.aliasTarget),
    'HealthCheckId': obj.healthCheckId,
    'TrafficPolicyInstanceId': obj.trafficPolicyInstanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResourceTagSet
 */
export interface Route53ResourceTagSet {
  /**
   * @schema Route53ResourceTagSet#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Route53ResourceTagSet#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Route53ResourceTagSet#Tags
   */
  readonly tags?: Route53Tag[];

}

/**
 * Converts an object of type 'Route53ResourceTagSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResourceTagSet(obj: Route53ResourceTagSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ResourceId': obj.resourceId,
    'Tags': obj.tags?.map(y => toJson_Route53Tag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53TrafficPolicySummary
 */
export interface Route53TrafficPolicySummary {
  /**
   * @schema Route53TrafficPolicySummary#Id
   */
  readonly id?: string;

  /**
   * @schema Route53TrafficPolicySummary#Name
   */
  readonly name?: string;

  /**
   * @schema Route53TrafficPolicySummary#Type
   */
  readonly type?: string;

  /**
   * @schema Route53TrafficPolicySummary#LatestVersion
   */
  readonly latestVersion?: number;

  /**
   * @schema Route53TrafficPolicySummary#TrafficPolicyCount
   */
  readonly trafficPolicyCount?: number;

}

/**
 * Converts an object of type 'Route53TrafficPolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53TrafficPolicySummary(obj: Route53TrafficPolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Name': obj.name,
    'Type': obj.type,
    'LatestVersion': obj.latestVersion,
    'TrafficPolicyCount': obj.trafficPolicyCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53AlarmIdentifier
 */
export interface Route53AlarmIdentifier {
  /**
   * @schema Route53AlarmIdentifier#Region
   */
  readonly region?: string;

  /**
   * @schema Route53AlarmIdentifier#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'Route53AlarmIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53AlarmIdentifier(obj: Route53AlarmIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Region': obj.region,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53Change
 */
export interface Route53Change {
  /**
   * @schema Route53Change#Action
   */
  readonly action?: string;

  /**
   * @schema Route53Change#ResourceRecordSet
   */
  readonly resourceRecordSet?: Route53ResourceRecordSet;

}

/**
 * Converts an object of type 'Route53Change' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53Change(obj: Route53Change | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'ResourceRecordSet': toJson_Route53ResourceRecordSet(obj.resourceRecordSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53LinkedService
 */
export interface Route53LinkedService {
  /**
   * @schema Route53LinkedService#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema Route53LinkedService#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'Route53LinkedService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53LinkedService(obj: Route53LinkedService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServicePrincipal': obj.servicePrincipal,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53CloudWatchAlarmConfiguration
 */
export interface Route53CloudWatchAlarmConfiguration {
  /**
   * @schema Route53CloudWatchAlarmConfiguration#EvaluationPeriods
   */
  readonly evaluationPeriods?: number;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Threshold
   */
  readonly threshold?: number;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Period
   */
  readonly period?: number;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Dimensions
   */
  readonly dimensions?: Route53Dimension[];

}

/**
 * Converts an object of type 'Route53CloudWatchAlarmConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53CloudWatchAlarmConfiguration(obj: Route53CloudWatchAlarmConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EvaluationPeriods': obj.evaluationPeriods,
    'Threshold': obj.threshold,
    'ComparisonOperator': obj.comparisonOperator,
    'Period': obj.period,
    'MetricName': obj.metricName,
    'Namespace': obj.namespace,
    'Statistic': obj.statistic,
    'Dimensions': obj.dimensions?.map(y => toJson_Route53Dimension(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53StatusReport
 */
export interface Route53StatusReport {
  /**
   * @schema Route53StatusReport#Status
   */
  readonly status?: string;

  /**
   * @schema Route53StatusReport#CheckedTime
   */
  readonly checkedTime?: string;

}

/**
 * Converts an object of type 'Route53StatusReport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53StatusReport(obj: Route53StatusReport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'CheckedTime': obj.checkedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53HostedZoneOwner
 */
export interface Route53HostedZoneOwner {
  /**
   * @schema Route53HostedZoneOwner#OwningAccount
   */
  readonly owningAccount?: string;

  /**
   * @schema Route53HostedZoneOwner#OwningService
   */
  readonly owningService?: string;

}

/**
 * Converts an object of type 'Route53HostedZoneOwner' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53HostedZoneOwner(obj: Route53HostedZoneOwner | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OwningAccount': obj.owningAccount,
    'OwningService': obj.owningService,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53GeoLocation
 */
export interface Route53GeoLocation {
  /**
   * @schema Route53GeoLocation#ContinentCode
   */
  readonly continentCode?: string;

  /**
   * @schema Route53GeoLocation#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema Route53GeoLocation#SubdivisionCode
   */
  readonly subdivisionCode?: string;

}

/**
 * Converts an object of type 'Route53GeoLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53GeoLocation(obj: Route53GeoLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContinentCode': obj.continentCode,
    'CountryCode': obj.countryCode,
    'SubdivisionCode': obj.subdivisionCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53ResourceRecord
 */
export interface Route53ResourceRecord {
  /**
   * @schema Route53ResourceRecord#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Route53ResourceRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53ResourceRecord(obj: Route53ResourceRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53AliasTarget
 */
export interface Route53AliasTarget {
  /**
   * @schema Route53AliasTarget#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema Route53AliasTarget#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema Route53AliasTarget#EvaluateTargetHealth
   */
  readonly evaluateTargetHealth?: boolean;

}

/**
 * Converts an object of type 'Route53AliasTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53AliasTarget(obj: Route53AliasTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HostedZoneId': obj.hostedZoneId,
    'DNSName': obj.dnsName,
    'EvaluateTargetHealth': obj.evaluateTargetHealth,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53Dimension
 */
export interface Route53Dimension {
  /**
   * @schema Route53Dimension#Name
   */
  readonly name?: string;

  /**
   * @schema Route53Dimension#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'Route53Dimension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53Dimension(obj: Route53Dimension | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
