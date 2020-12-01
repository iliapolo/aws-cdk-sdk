/**
 * @schema AssociateVpcWithHostedZoneRequest
 */
export interface AssociateVpcWithHostedZoneRequest {
  /**
   * @schema AssociateVpcWithHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema AssociateVpcWithHostedZoneRequest#VPC
   */
  readonly vpc: Vpc;

  /**
   * @schema AssociateVpcWithHostedZoneRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema AssociateVpcWithHostedZoneResponse
 */
export interface AssociateVpcWithHostedZoneResponse {
  /**
   * @schema AssociateVpcWithHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: ChangeInfo;

}

/**
 * @schema ChangeResourceRecordSetsRequest
 */
export interface ChangeResourceRecordSetsRequest {
  /**
   * @schema ChangeResourceRecordSetsRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema ChangeResourceRecordSetsRequest#ChangeBatch
   */
  readonly changeBatch: ChangeBatch;

}

/**
 * @schema ChangeResourceRecordSetsResponse
 */
export interface ChangeResourceRecordSetsResponse {
  /**
   * @schema ChangeResourceRecordSetsResponse#ChangeInfo
   */
  readonly changeInfo: ChangeInfo;

}

/**
 * @schema ChangeTagsForResourceRequest
 */
export interface ChangeTagsForResourceRequest {
  /**
   * @schema ChangeTagsForResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ChangeTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema ChangeTagsForResourceRequest#AddTags
   */
  readonly addTags?: Tag[];

  /**
   * @schema ChangeTagsForResourceRequest#RemoveTagKeys
   */
  readonly removeTagKeys?: string[];

}

/**
 * @schema ChangeTagsForResourceResponse
 */
export interface ChangeTagsForResourceResponse {
}

/**
 * @schema CreateHealthCheckRequest
 */
export interface CreateHealthCheckRequest {
  /**
   * @schema CreateHealthCheckRequest#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CreateHealthCheckRequest#HealthCheckConfig
   */
  readonly healthCheckConfig: HealthCheckConfig;

}

/**
 * @schema CreateHealthCheckResponse
 */
export interface CreateHealthCheckResponse {
  /**
   * @schema CreateHealthCheckResponse#HealthCheck
   */
  readonly healthCheck: HealthCheck;

  /**
   * @schema CreateHealthCheckResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateHostedZoneRequest
 */
export interface CreateHostedZoneRequest {
  /**
   * @schema CreateHostedZoneRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateHostedZoneRequest#VPC
   */
  readonly vpc?: Vpc;

  /**
   * @schema CreateHostedZoneRequest#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CreateHostedZoneRequest#HostedZoneConfig
   */
  readonly hostedZoneConfig?: HostedZoneConfig;

  /**
   * @schema CreateHostedZoneRequest#DelegationSetId
   */
  readonly delegationSetId?: string;

}

/**
 * @schema CreateHostedZoneResponse
 */
export interface CreateHostedZoneResponse {
  /**
   * @schema CreateHostedZoneResponse#HostedZone
   */
  readonly hostedZone: HostedZone;

  /**
   * @schema CreateHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: ChangeInfo;

  /**
   * @schema CreateHostedZoneResponse#DelegationSet
   */
  readonly delegationSet: DelegationSet;

  /**
   * @schema CreateHostedZoneResponse#VPC
   */
  readonly vpc?: Vpc;

  /**
   * @schema CreateHostedZoneResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateQueryLoggingConfigRequest
 */
export interface CreateQueryLoggingConfigRequest {
  /**
   * @schema CreateQueryLoggingConfigRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema CreateQueryLoggingConfigRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn: string;

}

/**
 * @schema CreateQueryLoggingConfigResponse
 */
export interface CreateQueryLoggingConfigResponse {
  /**
   * @schema CreateQueryLoggingConfigResponse#QueryLoggingConfig
   */
  readonly queryLoggingConfig: QueryLoggingConfig;

  /**
   * @schema CreateQueryLoggingConfigResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateReusableDelegationSetRequest
 */
export interface CreateReusableDelegationSetRequest {
  /**
   * @schema CreateReusableDelegationSetRequest#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema CreateReusableDelegationSetRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema CreateReusableDelegationSetResponse
 */
export interface CreateReusableDelegationSetResponse {
  /**
   * @schema CreateReusableDelegationSetResponse#DelegationSet
   */
  readonly delegationSet: DelegationSet;

  /**
   * @schema CreateReusableDelegationSetResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateTrafficPolicyRequest
 */
export interface CreateTrafficPolicyRequest {
  /**
   * @schema CreateTrafficPolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateTrafficPolicyRequest#Document
   */
  readonly document: string;

  /**
   * @schema CreateTrafficPolicyRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema CreateTrafficPolicyResponse
 */
export interface CreateTrafficPolicyResponse {
  /**
   * @schema CreateTrafficPolicyResponse#TrafficPolicy
   */
  readonly trafficPolicy: TrafficPolicy;

  /**
   * @schema CreateTrafficPolicyResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateTrafficPolicyInstanceRequest
 */
export interface CreateTrafficPolicyInstanceRequest {
  /**
   * @schema CreateTrafficPolicyInstanceRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema CreateTrafficPolicyInstanceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateTrafficPolicyInstanceRequest#TTL
   */
  readonly ttl: number;

  /**
   * @schema CreateTrafficPolicyInstanceRequest#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema CreateTrafficPolicyInstanceRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

}

/**
 * @schema CreateTrafficPolicyInstanceResponse
 */
export interface CreateTrafficPolicyInstanceResponse {
  /**
   * @schema CreateTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance: TrafficPolicyInstance;

  /**
   * @schema CreateTrafficPolicyInstanceResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateTrafficPolicyVersionRequest
 */
export interface CreateTrafficPolicyVersionRequest {
  /**
   * @schema CreateTrafficPolicyVersionRequest#Id
   */
  readonly id: string;

  /**
   * @schema CreateTrafficPolicyVersionRequest#Document
   */
  readonly document: string;

  /**
   * @schema CreateTrafficPolicyVersionRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema CreateTrafficPolicyVersionResponse
 */
export interface CreateTrafficPolicyVersionResponse {
  /**
   * @schema CreateTrafficPolicyVersionResponse#TrafficPolicy
   */
  readonly trafficPolicy: TrafficPolicy;

  /**
   * @schema CreateTrafficPolicyVersionResponse#Location
   */
  readonly location: string;

}

/**
 * @schema CreateVpcAssociationAuthorizationRequest
 */
export interface CreateVpcAssociationAuthorizationRequest {
  /**
   * @schema CreateVpcAssociationAuthorizationRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema CreateVpcAssociationAuthorizationRequest#VPC
   */
  readonly vpc: Vpc;

}

/**
 * @schema CreateVpcAssociationAuthorizationResponse
 */
export interface CreateVpcAssociationAuthorizationResponse {
  /**
   * @schema CreateVpcAssociationAuthorizationResponse#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema CreateVpcAssociationAuthorizationResponse#VPC
   */
  readonly vpc: Vpc;

}

/**
 * @schema DeleteHealthCheckRequest
 */
export interface DeleteHealthCheckRequest {
  /**
   * @schema DeleteHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema DeleteHealthCheckResponse
 */
export interface DeleteHealthCheckResponse {
}

/**
 * @schema DeleteHostedZoneRequest
 */
export interface DeleteHostedZoneRequest {
  /**
   * @schema DeleteHostedZoneRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteHostedZoneResponse
 */
export interface DeleteHostedZoneResponse {
  /**
   * @schema DeleteHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: ChangeInfo;

}

/**
 * @schema DeleteQueryLoggingConfigRequest
 */
export interface DeleteQueryLoggingConfigRequest {
  /**
   * @schema DeleteQueryLoggingConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteQueryLoggingConfigResponse
 */
export interface DeleteQueryLoggingConfigResponse {
}

/**
 * @schema DeleteReusableDelegationSetRequest
 */
export interface DeleteReusableDelegationSetRequest {
  /**
   * @schema DeleteReusableDelegationSetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteReusableDelegationSetResponse
 */
export interface DeleteReusableDelegationSetResponse {
}

/**
 * @schema DeleteTrafficPolicyRequest
 */
export interface DeleteTrafficPolicyRequest {
  /**
   * @schema DeleteTrafficPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema DeleteTrafficPolicyRequest#Version
   */
  readonly version: number;

}

/**
 * @schema DeleteTrafficPolicyResponse
 */
export interface DeleteTrafficPolicyResponse {
}

/**
 * @schema DeleteTrafficPolicyInstanceRequest
 */
export interface DeleteTrafficPolicyInstanceRequest {
  /**
   * @schema DeleteTrafficPolicyInstanceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema DeleteTrafficPolicyInstanceResponse
 */
export interface DeleteTrafficPolicyInstanceResponse {
}

/**
 * @schema DeleteVpcAssociationAuthorizationRequest
 */
export interface DeleteVpcAssociationAuthorizationRequest {
  /**
   * @schema DeleteVpcAssociationAuthorizationRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema DeleteVpcAssociationAuthorizationRequest#VPC
   */
  readonly vpc: Vpc;

}

/**
 * @schema DeleteVpcAssociationAuthorizationResponse
 */
export interface DeleteVpcAssociationAuthorizationResponse {
}

/**
 * @schema DisassociateVpcFromHostedZoneRequest
 */
export interface DisassociateVpcFromHostedZoneRequest {
  /**
   * @schema DisassociateVpcFromHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema DisassociateVpcFromHostedZoneRequest#VPC
   */
  readonly vpc: Vpc;

  /**
   * @schema DisassociateVpcFromHostedZoneRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema DisassociateVpcFromHostedZoneResponse
 */
export interface DisassociateVpcFromHostedZoneResponse {
  /**
   * @schema DisassociateVpcFromHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: ChangeInfo;

}

/**
 * @schema GetAccountLimitRequest
 */
export interface GetAccountLimitRequest {
  /**
   * @schema GetAccountLimitRequest#Type
   */
  readonly type: string;

}

/**
 * @schema GetAccountLimitResponse
 */
export interface GetAccountLimitResponse {
  /**
   * @schema GetAccountLimitResponse#Limit
   */
  readonly limit: AccountLimit;

  /**
   * @schema GetAccountLimitResponse#Count
   */
  readonly count: number;

}

/**
 * @schema GetChangeRequest
 */
export interface GetChangeRequest {
  /**
   * @schema GetChangeRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetChangeResponse
 */
export interface GetChangeResponse {
  /**
   * @schema GetChangeResponse#ChangeInfo
   */
  readonly changeInfo: ChangeInfo;

}

/**
 * @schema GetCheckerIpRangesRequest
 */
export interface GetCheckerIpRangesRequest {
}

/**
 * @schema GetCheckerIpRangesResponse
 */
export interface GetCheckerIpRangesResponse {
  /**
   * @schema GetCheckerIpRangesResponse#CheckerIpRanges
   */
  readonly checkerIpRanges: string[];

}

/**
 * @schema GetGeoLocationRequest
 */
export interface GetGeoLocationRequest {
  /**
   * @schema GetGeoLocationRequest#ContinentCode
   */
  readonly continentCode?: string;

  /**
   * @schema GetGeoLocationRequest#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema GetGeoLocationRequest#SubdivisionCode
   */
  readonly subdivisionCode?: string;

}

/**
 * @schema GetGeoLocationResponse
 */
export interface GetGeoLocationResponse {
  /**
   * @schema GetGeoLocationResponse#GeoLocationDetails
   */
  readonly geoLocationDetails: GeoLocationDetails;

}

/**
 * @schema GetHealthCheckRequest
 */
export interface GetHealthCheckRequest {
  /**
   * @schema GetHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema GetHealthCheckResponse
 */
export interface GetHealthCheckResponse {
  /**
   * @schema GetHealthCheckResponse#HealthCheck
   */
  readonly healthCheck: HealthCheck;

}

/**
 * @schema GetHealthCheckCountRequest
 */
export interface GetHealthCheckCountRequest {
}

/**
 * @schema GetHealthCheckCountResponse
 */
export interface GetHealthCheckCountResponse {
  /**
   * @schema GetHealthCheckCountResponse#HealthCheckCount
   */
  readonly healthCheckCount: number;

}

/**
 * @schema GetHealthCheckLastFailureReasonRequest
 */
export interface GetHealthCheckLastFailureReasonRequest {
  /**
   * @schema GetHealthCheckLastFailureReasonRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema GetHealthCheckLastFailureReasonResponse
 */
export interface GetHealthCheckLastFailureReasonResponse {
  /**
   * @schema GetHealthCheckLastFailureReasonResponse#HealthCheckObservations
   */
  readonly healthCheckObservations: HealthCheckObservation[];

}

/**
 * @schema GetHealthCheckStatusRequest
 */
export interface GetHealthCheckStatusRequest {
  /**
   * @schema GetHealthCheckStatusRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema GetHealthCheckStatusResponse
 */
export interface GetHealthCheckStatusResponse {
  /**
   * @schema GetHealthCheckStatusResponse#HealthCheckObservations
   */
  readonly healthCheckObservations: HealthCheckObservation[];

}

/**
 * @schema GetHostedZoneRequest
 */
export interface GetHostedZoneRequest {
  /**
   * @schema GetHostedZoneRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetHostedZoneResponse
 */
export interface GetHostedZoneResponse {
  /**
   * @schema GetHostedZoneResponse#HostedZone
   */
  readonly hostedZone: HostedZone;

  /**
   * @schema GetHostedZoneResponse#DelegationSet
   */
  readonly delegationSet?: DelegationSet;

  /**
   * @schema GetHostedZoneResponse#VPCs
   */
  readonly vpCs?: Vpc[];

}

/**
 * @schema GetHostedZoneCountRequest
 */
export interface GetHostedZoneCountRequest {
}

/**
 * @schema GetHostedZoneCountResponse
 */
export interface GetHostedZoneCountResponse {
  /**
   * @schema GetHostedZoneCountResponse#HostedZoneCount
   */
  readonly hostedZoneCount: number;

}

/**
 * @schema GetHostedZoneLimitRequest
 */
export interface GetHostedZoneLimitRequest {
  /**
   * @schema GetHostedZoneLimitRequest#Type
   */
  readonly type: string;

  /**
   * @schema GetHostedZoneLimitRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

}

/**
 * @schema GetHostedZoneLimitResponse
 */
export interface GetHostedZoneLimitResponse {
  /**
   * @schema GetHostedZoneLimitResponse#Limit
   */
  readonly limit: HostedZoneLimit;

  /**
   * @schema GetHostedZoneLimitResponse#Count
   */
  readonly count: number;

}

/**
 * @schema GetQueryLoggingConfigRequest
 */
export interface GetQueryLoggingConfigRequest {
  /**
   * @schema GetQueryLoggingConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetQueryLoggingConfigResponse
 */
export interface GetQueryLoggingConfigResponse {
  /**
   * @schema GetQueryLoggingConfigResponse#QueryLoggingConfig
   */
  readonly queryLoggingConfig: QueryLoggingConfig;

}

/**
 * @schema GetReusableDelegationSetRequest
 */
export interface GetReusableDelegationSetRequest {
  /**
   * @schema GetReusableDelegationSetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetReusableDelegationSetResponse
 */
export interface GetReusableDelegationSetResponse {
  /**
   * @schema GetReusableDelegationSetResponse#DelegationSet
   */
  readonly delegationSet: DelegationSet;

}

/**
 * @schema GetReusableDelegationSetLimitRequest
 */
export interface GetReusableDelegationSetLimitRequest {
  /**
   * @schema GetReusableDelegationSetLimitRequest#Type
   */
  readonly type: string;

  /**
   * @schema GetReusableDelegationSetLimitRequest#DelegationSetId
   */
  readonly delegationSetId: string;

}

/**
 * @schema GetReusableDelegationSetLimitResponse
 */
export interface GetReusableDelegationSetLimitResponse {
  /**
   * @schema GetReusableDelegationSetLimitResponse#Limit
   */
  readonly limit: ReusableDelegationSetLimit;

  /**
   * @schema GetReusableDelegationSetLimitResponse#Count
   */
  readonly count: number;

}

/**
 * @schema GetTrafficPolicyRequest
 */
export interface GetTrafficPolicyRequest {
  /**
   * @schema GetTrafficPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema GetTrafficPolicyRequest#Version
   */
  readonly version: number;

}

/**
 * @schema GetTrafficPolicyResponse
 */
export interface GetTrafficPolicyResponse {
  /**
   * @schema GetTrafficPolicyResponse#TrafficPolicy
   */
  readonly trafficPolicy: TrafficPolicy;

}

/**
 * @schema GetTrafficPolicyInstanceRequest
 */
export interface GetTrafficPolicyInstanceRequest {
  /**
   * @schema GetTrafficPolicyInstanceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetTrafficPolicyInstanceResponse
 */
export interface GetTrafficPolicyInstanceResponse {
  /**
   * @schema GetTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance: TrafficPolicyInstance;

}

/**
 * @schema GetTrafficPolicyInstanceCountRequest
 */
export interface GetTrafficPolicyInstanceCountRequest {
}

/**
 * @schema GetTrafficPolicyInstanceCountResponse
 */
export interface GetTrafficPolicyInstanceCountResponse {
  /**
   * @schema GetTrafficPolicyInstanceCountResponse#TrafficPolicyInstanceCount
   */
  readonly trafficPolicyInstanceCount: number;

}

/**
 * @schema ListGeoLocationsRequest
 */
export interface ListGeoLocationsRequest {
  /**
   * @schema ListGeoLocationsRequest#StartContinentCode
   */
  readonly startContinentCode?: string;

  /**
   * @schema ListGeoLocationsRequest#StartCountryCode
   */
  readonly startCountryCode?: string;

  /**
   * @schema ListGeoLocationsRequest#StartSubdivisionCode
   */
  readonly startSubdivisionCode?: string;

  /**
   * @schema ListGeoLocationsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListGeoLocationsResponse
 */
export interface ListGeoLocationsResponse {
  /**
   * @schema ListGeoLocationsResponse#GeoLocationDetailsList
   */
  readonly geoLocationDetailsList: GeoLocationDetails[];

  /**
   * @schema ListGeoLocationsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListGeoLocationsResponse#NextContinentCode
   */
  readonly nextContinentCode?: string;

  /**
   * @schema ListGeoLocationsResponse#NextCountryCode
   */
  readonly nextCountryCode?: string;

  /**
   * @schema ListGeoLocationsResponse#NextSubdivisionCode
   */
  readonly nextSubdivisionCode?: string;

  /**
   * @schema ListGeoLocationsResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListHealthChecksRequest
 */
export interface ListHealthChecksRequest {
  /**
   * @schema ListHealthChecksRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListHealthChecksRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListHealthChecksResponse
 */
export interface ListHealthChecksResponse {
  /**
   * @schema ListHealthChecksResponse#HealthChecks
   */
  readonly healthChecks: HealthCheck[];

  /**
   * @schema ListHealthChecksResponse#Marker
   */
  readonly marker: string;

  /**
   * @schema ListHealthChecksResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListHealthChecksResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListHealthChecksResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListHostedZonesRequest
 */
export interface ListHostedZonesRequest {
  /**
   * @schema ListHostedZonesRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListHostedZonesRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListHostedZonesRequest#DelegationSetId
   */
  readonly delegationSetId?: string;

}

/**
 * @schema ListHostedZonesResponse
 */
export interface ListHostedZonesResponse {
  /**
   * @schema ListHostedZonesResponse#HostedZones
   */
  readonly hostedZones: HostedZone[];

  /**
   * @schema ListHostedZonesResponse#Marker
   */
  readonly marker: string;

  /**
   * @schema ListHostedZonesResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListHostedZonesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListHostedZonesResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListHostedZonesByNameRequest
 */
export interface ListHostedZonesByNameRequest {
  /**
   * @schema ListHostedZonesByNameRequest#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema ListHostedZonesByNameRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema ListHostedZonesByNameRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListHostedZonesByNameResponse
 */
export interface ListHostedZonesByNameResponse {
  /**
   * @schema ListHostedZonesByNameResponse#HostedZones
   */
  readonly hostedZones: HostedZone[];

  /**
   * @schema ListHostedZonesByNameResponse#DNSName
   */
  readonly dnsName?: string;

  /**
   * @schema ListHostedZonesByNameResponse#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema ListHostedZonesByNameResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListHostedZonesByNameResponse#NextDNSName
   */
  readonly nextDnsName?: string;

  /**
   * @schema ListHostedZonesByNameResponse#NextHostedZoneId
   */
  readonly nextHostedZoneId?: string;

  /**
   * @schema ListHostedZonesByNameResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListHostedZonesByVpcRequest
 */
export interface ListHostedZonesByVpcRequest {
  /**
   * @schema ListHostedZonesByVpcRequest#VPCId
   */
  readonly vpcId: string;

  /**
   * @schema ListHostedZonesByVpcRequest#VPCRegion
   */
  readonly vpcRegion: string;

  /**
   * @schema ListHostedZonesByVpcRequest#MaxItems
   */
  readonly maxItems?: string;

  /**
   * @schema ListHostedZonesByVpcRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHostedZonesByVpcResponse
 */
export interface ListHostedZonesByVpcResponse {
  /**
   * @schema ListHostedZonesByVpcResponse#HostedZoneSummaries
   */
  readonly hostedZoneSummaries: HostedZoneSummary[];

  /**
   * @schema ListHostedZonesByVpcResponse#MaxItems
   */
  readonly maxItems: string;

  /**
   * @schema ListHostedZonesByVpcResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListQueryLoggingConfigsRequest
 */
export interface ListQueryLoggingConfigsRequest {
  /**
   * @schema ListQueryLoggingConfigsRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

  /**
   * @schema ListQueryLoggingConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListQueryLoggingConfigsRequest#MaxResults
   */
  readonly maxResults?: string;

}

/**
 * @schema ListQueryLoggingConfigsResponse
 */
export interface ListQueryLoggingConfigsResponse {
  /**
   * @schema ListQueryLoggingConfigsResponse#QueryLoggingConfigs
   */
  readonly queryLoggingConfigs: QueryLoggingConfig[];

  /**
   * @schema ListQueryLoggingConfigsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceRecordSetsRequest
 */
export interface ListResourceRecordSetsRequest {
  /**
   * @schema ListResourceRecordSetsRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema ListResourceRecordSetsRequest#StartRecordName
   */
  readonly startRecordName?: string;

  /**
   * @schema ListResourceRecordSetsRequest#StartRecordType
   */
  readonly startRecordType?: string;

  /**
   * @schema ListResourceRecordSetsRequest#StartRecordIdentifier
   */
  readonly startRecordIdentifier?: string;

  /**
   * @schema ListResourceRecordSetsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListResourceRecordSetsResponse
 */
export interface ListResourceRecordSetsResponse {
  /**
   * @schema ListResourceRecordSetsResponse#ResourceRecordSets
   */
  readonly resourceRecordSets: ResourceRecordSet[];

  /**
   * @schema ListResourceRecordSetsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListResourceRecordSetsResponse#NextRecordName
   */
  readonly nextRecordName?: string;

  /**
   * @schema ListResourceRecordSetsResponse#NextRecordType
   */
  readonly nextRecordType?: string;

  /**
   * @schema ListResourceRecordSetsResponse#NextRecordIdentifier
   */
  readonly nextRecordIdentifier?: string;

  /**
   * @schema ListResourceRecordSetsResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListReusableDelegationSetsRequest
 */
export interface ListReusableDelegationSetsRequest {
  /**
   * @schema ListReusableDelegationSetsRequest#Marker
   */
  readonly marker?: string;

  /**
   * @schema ListReusableDelegationSetsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListReusableDelegationSetsResponse
 */
export interface ListReusableDelegationSetsResponse {
  /**
   * @schema ListReusableDelegationSetsResponse#DelegationSets
   */
  readonly delegationSets: DelegationSet[];

  /**
   * @schema ListReusableDelegationSetsResponse#Marker
   */
  readonly marker: string;

  /**
   * @schema ListReusableDelegationSetsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListReusableDelegationSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema ListReusableDelegationSetsResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ListTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#ResourceTagSet
   */
  readonly resourceTagSet: ResourceTagSet;

}

/**
 * @schema ListTagsForResourcesRequest
 */
export interface ListTagsForResourcesRequest {
  /**
   * @schema ListTagsForResourcesRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ListTagsForResourcesRequest#ResourceIds
   */
  readonly resourceIds: string[];

}

/**
 * @schema ListTagsForResourcesResponse
 */
export interface ListTagsForResourcesResponse {
  /**
   * @schema ListTagsForResourcesResponse#ResourceTagSets
   */
  readonly resourceTagSets: ResourceTagSet[];

}

/**
 * @schema ListTrafficPoliciesRequest
 */
export interface ListTrafficPoliciesRequest {
  /**
   * @schema ListTrafficPoliciesRequest#TrafficPolicyIdMarker
   */
  readonly trafficPolicyIdMarker?: string;

  /**
   * @schema ListTrafficPoliciesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListTrafficPoliciesResponse
 */
export interface ListTrafficPoliciesResponse {
  /**
   * @schema ListTrafficPoliciesResponse#TrafficPolicySummaries
   */
  readonly trafficPolicySummaries: TrafficPolicySummary[];

  /**
   * @schema ListTrafficPoliciesResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListTrafficPoliciesResponse#TrafficPolicyIdMarker
   */
  readonly trafficPolicyIdMarker: string;

  /**
   * @schema ListTrafficPoliciesResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListTrafficPolicyInstancesRequest
 */
export interface ListTrafficPolicyInstancesRequest {
  /**
   * @schema ListTrafficPolicyInstancesRequest#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesRequest#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesRequest#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListTrafficPolicyInstancesResponse
 */
export interface ListTrafficPolicyInstancesResponse {
  /**
   * @schema ListTrafficPolicyInstancesResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances: TrafficPolicyInstance[];

  /**
   * @schema ListTrafficPolicyInstancesResponse#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesResponse#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesResponse#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListTrafficPolicyInstancesResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListTrafficPolicyInstancesByHostedZoneRequest
 */
export interface ListTrafficPolicyInstancesByHostedZoneRequest {
  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneRequest#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneRequest#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListTrafficPolicyInstancesByHostedZoneResponse
 */
export interface ListTrafficPolicyInstancesByHostedZoneResponse {
  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances: TrafficPolicyInstance[];

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListTrafficPolicyInstancesByHostedZoneResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListTrafficPolicyInstancesByPolicyRequest
 */
export interface ListTrafficPolicyInstancesByPolicyRequest {
  /**
   * @schema ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyRequest#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListTrafficPolicyInstancesByPolicyResponse
 */
export interface ListTrafficPolicyInstancesByPolicyResponse {
  /**
   * @schema ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances: TrafficPolicyInstance[];

  /**
   * @schema ListTrafficPolicyInstancesByPolicyResponse#HostedZoneIdMarker
   */
  readonly hostedZoneIdMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstanceNameMarker
   */
  readonly trafficPolicyInstanceNameMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstanceTypeMarker
   */
  readonly trafficPolicyInstanceTypeMarker?: string;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListTrafficPolicyInstancesByPolicyResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListTrafficPolicyVersionsRequest
 */
export interface ListTrafficPolicyVersionsRequest {
  /**
   * @schema ListTrafficPolicyVersionsRequest#Id
   */
  readonly id: string;

  /**
   * @schema ListTrafficPolicyVersionsRequest#TrafficPolicyVersionMarker
   */
  readonly trafficPolicyVersionMarker?: string;

  /**
   * @schema ListTrafficPolicyVersionsRequest#MaxItems
   */
  readonly maxItems?: string;

}

/**
 * @schema ListTrafficPolicyVersionsResponse
 */
export interface ListTrafficPolicyVersionsResponse {
  /**
   * @schema ListTrafficPolicyVersionsResponse#TrafficPolicies
   */
  readonly trafficPolicies: TrafficPolicy[];

  /**
   * @schema ListTrafficPolicyVersionsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema ListTrafficPolicyVersionsResponse#TrafficPolicyVersionMarker
   */
  readonly trafficPolicyVersionMarker: string;

  /**
   * @schema ListTrafficPolicyVersionsResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema ListVpcAssociationAuthorizationsRequest
 */
export interface ListVpcAssociationAuthorizationsRequest {
  /**
   * @schema ListVpcAssociationAuthorizationsRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema ListVpcAssociationAuthorizationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVpcAssociationAuthorizationsRequest#MaxResults
   */
  readonly maxResults?: string;

}

/**
 * @schema ListVpcAssociationAuthorizationsResponse
 */
export interface ListVpcAssociationAuthorizationsResponse {
  /**
   * @schema ListVpcAssociationAuthorizationsResponse#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema ListVpcAssociationAuthorizationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVpcAssociationAuthorizationsResponse#VPCs
   */
  readonly vpCs: Vpc[];

}

/**
 * @schema TestDnsAnswerRequest
 */
export interface TestDnsAnswerRequest {
  /**
   * @schema TestDnsAnswerRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema TestDnsAnswerRequest#RecordName
   */
  readonly recordName: string;

  /**
   * @schema TestDnsAnswerRequest#RecordType
   */
  readonly recordType: string;

  /**
   * @schema TestDnsAnswerRequest#ResolverIP
   */
  readonly resolverIp?: string;

  /**
   * @schema TestDnsAnswerRequest#EDNS0ClientSubnetIP
   */
  readonly edns0ClientSubnetIp?: string;

  /**
   * @schema TestDnsAnswerRequest#EDNS0ClientSubnetMask
   */
  readonly edns0ClientSubnetMask?: string;

}

/**
 * @schema TestDnsAnswerResponse
 */
export interface TestDnsAnswerResponse {
  /**
   * @schema TestDnsAnswerResponse#Nameserver
   */
  readonly nameserver: string;

  /**
   * @schema TestDnsAnswerResponse#RecordName
   */
  readonly recordName: string;

  /**
   * @schema TestDnsAnswerResponse#RecordType
   */
  readonly recordType: string;

  /**
   * @schema TestDnsAnswerResponse#RecordData
   */
  readonly recordData: string[];

  /**
   * @schema TestDnsAnswerResponse#ResponseCode
   */
  readonly responseCode: string;

  /**
   * @schema TestDnsAnswerResponse#Protocol
   */
  readonly protocol: string;

}

/**
 * @schema UpdateHealthCheckRequest
 */
export interface UpdateHealthCheckRequest {
  /**
   * @schema UpdateHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId: string;

  /**
   * @schema UpdateHealthCheckRequest#HealthCheckVersion
   */
  readonly healthCheckVersion?: number;

  /**
   * @schema UpdateHealthCheckRequest#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema UpdateHealthCheckRequest#Port
   */
  readonly port?: number;

  /**
   * @schema UpdateHealthCheckRequest#ResourcePath
   */
  readonly resourcePath?: string;

  /**
   * @schema UpdateHealthCheckRequest#FullyQualifiedDomainName
   */
  readonly fullyQualifiedDomainName?: string;

  /**
   * @schema UpdateHealthCheckRequest#SearchString
   */
  readonly searchString?: string;

  /**
   * @schema UpdateHealthCheckRequest#FailureThreshold
   */
  readonly failureThreshold?: number;

  /**
   * @schema UpdateHealthCheckRequest#Inverted
   */
  readonly inverted?: boolean;

  /**
   * @schema UpdateHealthCheckRequest#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema UpdateHealthCheckRequest#HealthThreshold
   */
  readonly healthThreshold?: number;

  /**
   * @schema UpdateHealthCheckRequest#ChildHealthChecks
   */
  readonly childHealthChecks?: string[];

  /**
   * @schema UpdateHealthCheckRequest#EnableSNI
   */
  readonly enableSni?: boolean;

  /**
   * @schema UpdateHealthCheckRequest#Regions
   */
  readonly regions?: string[];

  /**
   * @schema UpdateHealthCheckRequest#AlarmIdentifier
   */
  readonly alarmIdentifier?: AlarmIdentifier;

  /**
   * @schema UpdateHealthCheckRequest#InsufficientDataHealthStatus
   */
  readonly insufficientDataHealthStatus?: string;

  /**
   * @schema UpdateHealthCheckRequest#ResetElements
   */
  readonly resetElements?: string[];

}

/**
 * @schema UpdateHealthCheckResponse
 */
export interface UpdateHealthCheckResponse {
  /**
   * @schema UpdateHealthCheckResponse#HealthCheck
   */
  readonly healthCheck: HealthCheck;

}

/**
 * @schema UpdateHostedZoneCommentRequest
 */
export interface UpdateHostedZoneCommentRequest {
  /**
   * @schema UpdateHostedZoneCommentRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateHostedZoneCommentRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema UpdateHostedZoneCommentResponse
 */
export interface UpdateHostedZoneCommentResponse {
  /**
   * @schema UpdateHostedZoneCommentResponse#HostedZone
   */
  readonly hostedZone: HostedZone;

}

/**
 * @schema UpdateTrafficPolicyCommentRequest
 */
export interface UpdateTrafficPolicyCommentRequest {
  /**
   * @schema UpdateTrafficPolicyCommentRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateTrafficPolicyCommentRequest#Version
   */
  readonly version: number;

  /**
   * @schema UpdateTrafficPolicyCommentRequest#Comment
   */
  readonly comment: string;

}

/**
 * @schema UpdateTrafficPolicyCommentResponse
 */
export interface UpdateTrafficPolicyCommentResponse {
  /**
   * @schema UpdateTrafficPolicyCommentResponse#TrafficPolicy
   */
  readonly trafficPolicy: TrafficPolicy;

}

/**
 * @schema UpdateTrafficPolicyInstanceRequest
 */
export interface UpdateTrafficPolicyInstanceRequest {
  /**
   * @schema UpdateTrafficPolicyInstanceRequest#Id
   */
  readonly id: string;

  /**
   * @schema UpdateTrafficPolicyInstanceRequest#TTL
   */
  readonly ttl: number;

  /**
   * @schema UpdateTrafficPolicyInstanceRequest#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema UpdateTrafficPolicyInstanceRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

}

/**
 * @schema UpdateTrafficPolicyInstanceResponse
 */
export interface UpdateTrafficPolicyInstanceResponse {
  /**
   * @schema UpdateTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance: TrafficPolicyInstance;

}

/**
 * @schema Vpc
 */
export interface Vpc {
  /**
   * @schema Vpc#VPCRegion
   */
  readonly vpcRegion?: string;

  /**
   * @schema Vpc#VPCId
   */
  readonly vpcId?: string;

}

/**
 * @schema ChangeInfo
 */
export interface ChangeInfo {
  /**
   * @schema ChangeInfo#Id
   */
  readonly id: string;

  /**
   * @schema ChangeInfo#Status
   */
  readonly status: string;

  /**
   * @schema ChangeInfo#SubmittedAt
   */
  readonly submittedAt: string;

  /**
   * @schema ChangeInfo#Comment
   */
  readonly comment?: string;

}

/**
 * @schema ChangeBatch
 */
export interface ChangeBatch {
  /**
   * @schema ChangeBatch#Comment
   */
  readonly comment?: string;

  /**
   * @schema ChangeBatch#Changes
   */
  readonly changes: Change[];

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema HealthCheckConfig
 */
export interface HealthCheckConfig {
  /**
   * @schema HealthCheckConfig#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema HealthCheckConfig#Port
   */
  readonly port?: number;

  /**
   * @schema HealthCheckConfig#Type
   */
  readonly type: string;

  /**
   * @schema HealthCheckConfig#ResourcePath
   */
  readonly resourcePath?: string;

  /**
   * @schema HealthCheckConfig#FullyQualifiedDomainName
   */
  readonly fullyQualifiedDomainName?: string;

  /**
   * @schema HealthCheckConfig#SearchString
   */
  readonly searchString?: string;

  /**
   * @schema HealthCheckConfig#RequestInterval
   */
  readonly requestInterval?: number;

  /**
   * @schema HealthCheckConfig#FailureThreshold
   */
  readonly failureThreshold?: number;

  /**
   * @schema HealthCheckConfig#MeasureLatency
   */
  readonly measureLatency?: boolean;

  /**
   * @schema HealthCheckConfig#Inverted
   */
  readonly inverted?: boolean;

  /**
   * @schema HealthCheckConfig#Disabled
   */
  readonly disabled?: boolean;

  /**
   * @schema HealthCheckConfig#HealthThreshold
   */
  readonly healthThreshold?: number;

  /**
   * @schema HealthCheckConfig#ChildHealthChecks
   */
  readonly childHealthChecks?: string[];

  /**
   * @schema HealthCheckConfig#EnableSNI
   */
  readonly enableSni?: boolean;

  /**
   * @schema HealthCheckConfig#Regions
   */
  readonly regions?: string[];

  /**
   * @schema HealthCheckConfig#AlarmIdentifier
   */
  readonly alarmIdentifier?: AlarmIdentifier;

  /**
   * @schema HealthCheckConfig#InsufficientDataHealthStatus
   */
  readonly insufficientDataHealthStatus?: string;

}

/**
 * @schema HealthCheck
 */
export interface HealthCheck {
  /**
   * @schema HealthCheck#Id
   */
  readonly id: string;

  /**
   * @schema HealthCheck#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema HealthCheck#LinkedService
   */
  readonly linkedService?: LinkedService;

  /**
   * @schema HealthCheck#HealthCheckConfig
   */
  readonly healthCheckConfig: HealthCheckConfig;

  /**
   * @schema HealthCheck#HealthCheckVersion
   */
  readonly healthCheckVersion: number;

  /**
   * @schema HealthCheck#CloudWatchAlarmConfiguration
   */
  readonly cloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;

}

/**
 * @schema HostedZoneConfig
 */
export interface HostedZoneConfig {
  /**
   * @schema HostedZoneConfig#Comment
   */
  readonly comment?: string;

  /**
   * @schema HostedZoneConfig#PrivateZone
   */
  readonly privateZone?: boolean;

}

/**
 * @schema HostedZone
 */
export interface HostedZone {
  /**
   * @schema HostedZone#Id
   */
  readonly id: string;

  /**
   * @schema HostedZone#Name
   */
  readonly name: string;

  /**
   * @schema HostedZone#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema HostedZone#Config
   */
  readonly config?: HostedZoneConfig;

  /**
   * @schema HostedZone#ResourceRecordSetCount
   */
  readonly resourceRecordSetCount?: number;

  /**
   * @schema HostedZone#LinkedService
   */
  readonly linkedService?: LinkedService;

}

/**
 * @schema DelegationSet
 */
export interface DelegationSet {
  /**
   * @schema DelegationSet#Id
   */
  readonly id?: string;

  /**
   * @schema DelegationSet#CallerReference
   */
  readonly callerReference?: string;

  /**
   * @schema DelegationSet#NameServers
   */
  readonly nameServers: string[];

}

/**
 * @schema QueryLoggingConfig
 */
export interface QueryLoggingConfig {
  /**
   * @schema QueryLoggingConfig#Id
   */
  readonly id: string;

  /**
   * @schema QueryLoggingConfig#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema QueryLoggingConfig#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn: string;

}

/**
 * @schema TrafficPolicy
 */
export interface TrafficPolicy {
  /**
   * @schema TrafficPolicy#Id
   */
  readonly id: string;

  /**
   * @schema TrafficPolicy#Version
   */
  readonly version: number;

  /**
   * @schema TrafficPolicy#Name
   */
  readonly name: string;

  /**
   * @schema TrafficPolicy#Type
   */
  readonly type: string;

  /**
   * @schema TrafficPolicy#Document
   */
  readonly document: string;

  /**
   * @schema TrafficPolicy#Comment
   */
  readonly comment?: string;

}

/**
 * @schema TrafficPolicyInstance
 */
export interface TrafficPolicyInstance {
  /**
   * @schema TrafficPolicyInstance#Id
   */
  readonly id: string;

  /**
   * @schema TrafficPolicyInstance#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema TrafficPolicyInstance#Name
   */
  readonly name: string;

  /**
   * @schema TrafficPolicyInstance#TTL
   */
  readonly ttl: number;

  /**
   * @schema TrafficPolicyInstance#State
   */
  readonly state: string;

  /**
   * @schema TrafficPolicyInstance#Message
   */
  readonly message: string;

  /**
   * @schema TrafficPolicyInstance#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema TrafficPolicyInstance#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

  /**
   * @schema TrafficPolicyInstance#TrafficPolicyType
   */
  readonly trafficPolicyType: string;

}

/**
 * @schema AccountLimit
 */
export interface AccountLimit {
  /**
   * @schema AccountLimit#Type
   */
  readonly type: string;

  /**
   * @schema AccountLimit#Value
   */
  readonly value: number;

}

/**
 * @schema GeoLocationDetails
 */
export interface GeoLocationDetails {
  /**
   * @schema GeoLocationDetails#ContinentCode
   */
  readonly continentCode?: string;

  /**
   * @schema GeoLocationDetails#ContinentName
   */
  readonly continentName?: string;

  /**
   * @schema GeoLocationDetails#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema GeoLocationDetails#CountryName
   */
  readonly countryName?: string;

  /**
   * @schema GeoLocationDetails#SubdivisionCode
   */
  readonly subdivisionCode?: string;

  /**
   * @schema GeoLocationDetails#SubdivisionName
   */
  readonly subdivisionName?: string;

}

/**
 * @schema HealthCheckObservation
 */
export interface HealthCheckObservation {
  /**
   * @schema HealthCheckObservation#Region
   */
  readonly region?: string;

  /**
   * @schema HealthCheckObservation#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema HealthCheckObservation#StatusReport
   */
  readonly statusReport?: StatusReport;

}

/**
 * @schema HostedZoneLimit
 */
export interface HostedZoneLimit {
  /**
   * @schema HostedZoneLimit#Type
   */
  readonly type: string;

  /**
   * @schema HostedZoneLimit#Value
   */
  readonly value: number;

}

/**
 * @schema ReusableDelegationSetLimit
 */
export interface ReusableDelegationSetLimit {
  /**
   * @schema ReusableDelegationSetLimit#Type
   */
  readonly type: string;

  /**
   * @schema ReusableDelegationSetLimit#Value
   */
  readonly value: number;

}

/**
 * @schema HostedZoneSummary
 */
export interface HostedZoneSummary {
  /**
   * @schema HostedZoneSummary#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema HostedZoneSummary#Name
   */
  readonly name: string;

  /**
   * @schema HostedZoneSummary#Owner
   */
  readonly owner: HostedZoneOwner;

}

/**
 * @schema ResourceRecordSet
 */
export interface ResourceRecordSet {
  /**
   * @schema ResourceRecordSet#Name
   */
  readonly name: string;

  /**
   * @schema ResourceRecordSet#Type
   */
  readonly type: string;

  /**
   * @schema ResourceRecordSet#SetIdentifier
   */
  readonly setIdentifier?: string;

  /**
   * @schema ResourceRecordSet#Weight
   */
  readonly weight?: number;

  /**
   * @schema ResourceRecordSet#Region
   */
  readonly region?: string;

  /**
   * @schema ResourceRecordSet#GeoLocation
   */
  readonly geoLocation?: GeoLocation;

  /**
   * @schema ResourceRecordSet#Failover
   */
  readonly failover?: string;

  /**
   * @schema ResourceRecordSet#MultiValueAnswer
   */
  readonly multiValueAnswer?: boolean;

  /**
   * @schema ResourceRecordSet#TTL
   */
  readonly ttl?: number;

  /**
   * @schema ResourceRecordSet#ResourceRecords
   */
  readonly resourceRecords?: ResourceRecord[];

  /**
   * @schema ResourceRecordSet#AliasTarget
   */
  readonly aliasTarget?: AliasTarget;

  /**
   * @schema ResourceRecordSet#HealthCheckId
   */
  readonly healthCheckId?: string;

  /**
   * @schema ResourceRecordSet#TrafficPolicyInstanceId
   */
  readonly trafficPolicyInstanceId?: string;

}

/**
 * @schema ResourceTagSet
 */
export interface ResourceTagSet {
  /**
   * @schema ResourceTagSet#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceTagSet#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ResourceTagSet#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TrafficPolicySummary
 */
export interface TrafficPolicySummary {
  /**
   * @schema TrafficPolicySummary#Id
   */
  readonly id: string;

  /**
   * @schema TrafficPolicySummary#Name
   */
  readonly name: string;

  /**
   * @schema TrafficPolicySummary#Type
   */
  readonly type: string;

  /**
   * @schema TrafficPolicySummary#LatestVersion
   */
  readonly latestVersion: number;

  /**
   * @schema TrafficPolicySummary#TrafficPolicyCount
   */
  readonly trafficPolicyCount: number;

}

/**
 * @schema AlarmIdentifier
 */
export interface AlarmIdentifier {
  /**
   * @schema AlarmIdentifier#Region
   */
  readonly region: string;

  /**
   * @schema AlarmIdentifier#Name
   */
  readonly name: string;

}

/**
 * @schema Change
 */
export interface Change {
  /**
   * @schema Change#Action
   */
  readonly action: string;

  /**
   * @schema Change#ResourceRecordSet
   */
  readonly resourceRecordSet: ResourceRecordSet;

}

/**
 * @schema LinkedService
 */
export interface LinkedService {
  /**
   * @schema LinkedService#ServicePrincipal
   */
  readonly servicePrincipal?: string;

  /**
   * @schema LinkedService#Description
   */
  readonly description?: string;

}

/**
 * @schema CloudWatchAlarmConfiguration
 */
export interface CloudWatchAlarmConfiguration {
  /**
   * @schema CloudWatchAlarmConfiguration#EvaluationPeriods
   */
  readonly evaluationPeriods: number;

  /**
   * @schema CloudWatchAlarmConfiguration#Threshold
   */
  readonly threshold: number;

  /**
   * @schema CloudWatchAlarmConfiguration#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema CloudWatchAlarmConfiguration#Period
   */
  readonly period: number;

  /**
   * @schema CloudWatchAlarmConfiguration#MetricName
   */
  readonly metricName: string;

  /**
   * @schema CloudWatchAlarmConfiguration#Namespace
   */
  readonly namespace: string;

  /**
   * @schema CloudWatchAlarmConfiguration#Statistic
   */
  readonly statistic: string;

  /**
   * @schema CloudWatchAlarmConfiguration#Dimensions
   */
  readonly dimensions?: Dimension[];

}

/**
 * @schema StatusReport
 */
export interface StatusReport {
  /**
   * @schema StatusReport#Status
   */
  readonly status?: string;

  /**
   * @schema StatusReport#CheckedTime
   */
  readonly checkedTime?: string;

}

/**
 * @schema HostedZoneOwner
 */
export interface HostedZoneOwner {
  /**
   * @schema HostedZoneOwner#OwningAccount
   */
  readonly owningAccount?: string;

  /**
   * @schema HostedZoneOwner#OwningService
   */
  readonly owningService?: string;

}

/**
 * @schema GeoLocation
 */
export interface GeoLocation {
  /**
   * @schema GeoLocation#ContinentCode
   */
  readonly continentCode?: string;

  /**
   * @schema GeoLocation#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema GeoLocation#SubdivisionCode
   */
  readonly subdivisionCode?: string;

}

/**
 * @schema ResourceRecord
 */
export interface ResourceRecord {
  /**
   * @schema ResourceRecord#Value
   */
  readonly value: string;

}

/**
 * @schema AliasTarget
 */
export interface AliasTarget {
  /**
   * @schema AliasTarget#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema AliasTarget#DNSName
   */
  readonly dnsName: string;

  /**
   * @schema AliasTarget#EvaluateTargetHealth
   */
  readonly evaluateTargetHealth: boolean;

}

/**
 * @schema Dimension
 */
export interface Dimension {
  /**
   * @schema Dimension#Name
   */
  readonly name: string;

  /**
   * @schema Dimension#Value
   */
  readonly value: string;

}
