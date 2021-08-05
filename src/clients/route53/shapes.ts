/**
 * @schema Route53AssociateVpcWithHostedZoneRequest
 */
export interface Route53AssociateVpcWithHostedZoneRequest {
  /**
   * @schema Route53AssociateVpcWithHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53AssociateVpcWithHostedZoneRequest#VPC
   */
  readonly vpc: Route53Vpc;

  /**
   * @schema Route53AssociateVpcWithHostedZoneRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema Route53AssociateVpcWithHostedZoneResponse
 */
export interface Route53AssociateVpcWithHostedZoneResponse {
  /**
   * @schema Route53AssociateVpcWithHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: Route53ChangeInfo;

}

/**
 * @schema Route53ChangeResourceRecordSetsRequest
 */
export interface Route53ChangeResourceRecordSetsRequest {
  /**
   * @schema Route53ChangeResourceRecordSetsRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53ChangeResourceRecordSetsRequest#ChangeBatch
   */
  readonly changeBatch: Route53ChangeBatch;

}

/**
 * @schema Route53ChangeResourceRecordSetsResponse
 */
export interface Route53ChangeResourceRecordSetsResponse {
  /**
   * @schema Route53ChangeResourceRecordSetsResponse#ChangeInfo
   */
  readonly changeInfo: Route53ChangeInfo;

}

/**
 * @schema Route53ChangeTagsForResourceRequest
 */
export interface Route53ChangeTagsForResourceRequest {
  /**
   * @schema Route53ChangeTagsForResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema Route53ChangeTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

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
 * @schema Route53ChangeTagsForResourceResponse
 */
export interface Route53ChangeTagsForResourceResponse {
}

/**
 * @schema Route53CreateHealthCheckRequest
 */
export interface Route53CreateHealthCheckRequest {
  /**
   * @schema Route53CreateHealthCheckRequest#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema Route53CreateHealthCheckRequest#HealthCheckConfig
   */
  readonly healthCheckConfig: Route53HealthCheckConfig;

}

/**
 * @schema Route53CreateHealthCheckResponse
 */
export interface Route53CreateHealthCheckResponse {
  /**
   * @schema Route53CreateHealthCheckResponse#HealthCheck
   */
  readonly healthCheck: Route53HealthCheck;

  /**
   * @schema Route53CreateHealthCheckResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateHostedZoneRequest
 */
export interface Route53CreateHostedZoneRequest {
  /**
   * @schema Route53CreateHostedZoneRequest#Name
   */
  readonly name: string;

  /**
   * @schema Route53CreateHostedZoneRequest#VPC
   */
  readonly vpc?: Route53Vpc;

  /**
   * @schema Route53CreateHostedZoneRequest#CallerReference
   */
  readonly callerReference: string;

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
 * @schema Route53CreateHostedZoneResponse
 */
export interface Route53CreateHostedZoneResponse {
  /**
   * @schema Route53CreateHostedZoneResponse#HostedZone
   */
  readonly hostedZone: Route53HostedZone;

  /**
   * @schema Route53CreateHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: Route53ChangeInfo;

  /**
   * @schema Route53CreateHostedZoneResponse#DelegationSet
   */
  readonly delegationSet: Route53DelegationSet;

  /**
   * @schema Route53CreateHostedZoneResponse#VPC
   */
  readonly vpc?: Route53Vpc;

  /**
   * @schema Route53CreateHostedZoneResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateQueryLoggingConfigRequest
 */
export interface Route53CreateQueryLoggingConfigRequest {
  /**
   * @schema Route53CreateQueryLoggingConfigRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53CreateQueryLoggingConfigRequest#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn: string;

}

/**
 * @schema Route53CreateQueryLoggingConfigResponse
 */
export interface Route53CreateQueryLoggingConfigResponse {
  /**
   * @schema Route53CreateQueryLoggingConfigResponse#QueryLoggingConfig
   */
  readonly queryLoggingConfig: Route53QueryLoggingConfig;

  /**
   * @schema Route53CreateQueryLoggingConfigResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateReusableDelegationSetRequest
 */
export interface Route53CreateReusableDelegationSetRequest {
  /**
   * @schema Route53CreateReusableDelegationSetRequest#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema Route53CreateReusableDelegationSetRequest#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema Route53CreateReusableDelegationSetResponse
 */
export interface Route53CreateReusableDelegationSetResponse {
  /**
   * @schema Route53CreateReusableDelegationSetResponse#DelegationSet
   */
  readonly delegationSet: Route53DelegationSet;

  /**
   * @schema Route53CreateReusableDelegationSetResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateTrafficPolicyRequest
 */
export interface Route53CreateTrafficPolicyRequest {
  /**
   * @schema Route53CreateTrafficPolicyRequest#Name
   */
  readonly name: string;

  /**
   * @schema Route53CreateTrafficPolicyRequest#Document
   */
  readonly document: string;

  /**
   * @schema Route53CreateTrafficPolicyRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema Route53CreateTrafficPolicyResponse
 */
export interface Route53CreateTrafficPolicyResponse {
  /**
   * @schema Route53CreateTrafficPolicyResponse#TrafficPolicy
   */
  readonly trafficPolicy: Route53TrafficPolicy;

  /**
   * @schema Route53CreateTrafficPolicyResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateTrafficPolicyInstanceRequest
 */
export interface Route53CreateTrafficPolicyInstanceRequest {
  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#Name
   */
  readonly name: string;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#TTL
   */
  readonly ttl: number;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema Route53CreateTrafficPolicyInstanceRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

}

/**
 * @schema Route53CreateTrafficPolicyInstanceResponse
 */
export interface Route53CreateTrafficPolicyInstanceResponse {
  /**
   * @schema Route53CreateTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance: Route53TrafficPolicyInstance;

  /**
   * @schema Route53CreateTrafficPolicyInstanceResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateTrafficPolicyVersionRequest
 */
export interface Route53CreateTrafficPolicyVersionRequest {
  /**
   * @schema Route53CreateTrafficPolicyVersionRequest#Id
   */
  readonly id: string;

  /**
   * @schema Route53CreateTrafficPolicyVersionRequest#Document
   */
  readonly document: string;

  /**
   * @schema Route53CreateTrafficPolicyVersionRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema Route53CreateTrafficPolicyVersionResponse
 */
export interface Route53CreateTrafficPolicyVersionResponse {
  /**
   * @schema Route53CreateTrafficPolicyVersionResponse#TrafficPolicy
   */
  readonly trafficPolicy: Route53TrafficPolicy;

  /**
   * @schema Route53CreateTrafficPolicyVersionResponse#Location
   */
  readonly location: string;

}

/**
 * @schema Route53CreateVpcAssociationAuthorizationRequest
 */
export interface Route53CreateVpcAssociationAuthorizationRequest {
  /**
   * @schema Route53CreateVpcAssociationAuthorizationRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53CreateVpcAssociationAuthorizationRequest#VPC
   */
  readonly vpc: Route53Vpc;

}

/**
 * @schema Route53CreateVpcAssociationAuthorizationResponse
 */
export interface Route53CreateVpcAssociationAuthorizationResponse {
  /**
   * @schema Route53CreateVpcAssociationAuthorizationResponse#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53CreateVpcAssociationAuthorizationResponse#VPC
   */
  readonly vpc: Route53Vpc;

}

/**
 * @schema Route53DeleteHealthCheckRequest
 */
export interface Route53DeleteHealthCheckRequest {
  /**
   * @schema Route53DeleteHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema Route53DeleteHealthCheckResponse
 */
export interface Route53DeleteHealthCheckResponse {
}

/**
 * @schema Route53DeleteHostedZoneRequest
 */
export interface Route53DeleteHostedZoneRequest {
  /**
   * @schema Route53DeleteHostedZoneRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53DeleteHostedZoneResponse
 */
export interface Route53DeleteHostedZoneResponse {
  /**
   * @schema Route53DeleteHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: Route53ChangeInfo;

}

/**
 * @schema Route53DeleteQueryLoggingConfigRequest
 */
export interface Route53DeleteQueryLoggingConfigRequest {
  /**
   * @schema Route53DeleteQueryLoggingConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53DeleteQueryLoggingConfigResponse
 */
export interface Route53DeleteQueryLoggingConfigResponse {
}

/**
 * @schema Route53DeleteReusableDelegationSetRequest
 */
export interface Route53DeleteReusableDelegationSetRequest {
  /**
   * @schema Route53DeleteReusableDelegationSetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53DeleteReusableDelegationSetResponse
 */
export interface Route53DeleteReusableDelegationSetResponse {
}

/**
 * @schema Route53DeleteTrafficPolicyRequest
 */
export interface Route53DeleteTrafficPolicyRequest {
  /**
   * @schema Route53DeleteTrafficPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema Route53DeleteTrafficPolicyRequest#Version
   */
  readonly version: number;

}

/**
 * @schema Route53DeleteTrafficPolicyResponse
 */
export interface Route53DeleteTrafficPolicyResponse {
}

/**
 * @schema Route53DeleteTrafficPolicyInstanceRequest
 */
export interface Route53DeleteTrafficPolicyInstanceRequest {
  /**
   * @schema Route53DeleteTrafficPolicyInstanceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53DeleteTrafficPolicyInstanceResponse
 */
export interface Route53DeleteTrafficPolicyInstanceResponse {
}

/**
 * @schema Route53DeleteVpcAssociationAuthorizationRequest
 */
export interface Route53DeleteVpcAssociationAuthorizationRequest {
  /**
   * @schema Route53DeleteVpcAssociationAuthorizationRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53DeleteVpcAssociationAuthorizationRequest#VPC
   */
  readonly vpc: Route53Vpc;

}

/**
 * @schema Route53DeleteVpcAssociationAuthorizationResponse
 */
export interface Route53DeleteVpcAssociationAuthorizationResponse {
}

/**
 * @schema Route53DisassociateVpcFromHostedZoneRequest
 */
export interface Route53DisassociateVpcFromHostedZoneRequest {
  /**
   * @schema Route53DisassociateVpcFromHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53DisassociateVpcFromHostedZoneRequest#VPC
   */
  readonly vpc: Route53Vpc;

  /**
   * @schema Route53DisassociateVpcFromHostedZoneRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema Route53DisassociateVpcFromHostedZoneResponse
 */
export interface Route53DisassociateVpcFromHostedZoneResponse {
  /**
   * @schema Route53DisassociateVpcFromHostedZoneResponse#ChangeInfo
   */
  readonly changeInfo: Route53ChangeInfo;

}

/**
 * @schema Route53GetAccountLimitRequest
 */
export interface Route53GetAccountLimitRequest {
  /**
   * @schema Route53GetAccountLimitRequest#Type
   */
  readonly type: string;

}

/**
 * @schema Route53GetAccountLimitResponse
 */
export interface Route53GetAccountLimitResponse {
  /**
   * @schema Route53GetAccountLimitResponse#Limit
   */
  readonly limit: Route53AccountLimit;

  /**
   * @schema Route53GetAccountLimitResponse#Count
   */
  readonly count: number;

}

/**
 * @schema Route53GetChangeRequest
 */
export interface Route53GetChangeRequest {
  /**
   * @schema Route53GetChangeRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53GetChangeResponse
 */
export interface Route53GetChangeResponse {
  /**
   * @schema Route53GetChangeResponse#ChangeInfo
   */
  readonly changeInfo: Route53ChangeInfo;

}

/**
 * @schema Route53GetCheckerIpRangesRequest
 */
export interface Route53GetCheckerIpRangesRequest {
}

/**
 * @schema Route53GetCheckerIpRangesResponse
 */
export interface Route53GetCheckerIpRangesResponse {
  /**
   * @schema Route53GetCheckerIpRangesResponse#CheckerIpRanges
   */
  readonly checkerIpRanges: string[];

}

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
 * @schema Route53GetGeoLocationResponse
 */
export interface Route53GetGeoLocationResponse {
  /**
   * @schema Route53GetGeoLocationResponse#GeoLocationDetails
   */
  readonly geoLocationDetails: Route53GeoLocationDetails;

}

/**
 * @schema Route53GetHealthCheckRequest
 */
export interface Route53GetHealthCheckRequest {
  /**
   * @schema Route53GetHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema Route53GetHealthCheckResponse
 */
export interface Route53GetHealthCheckResponse {
  /**
   * @schema Route53GetHealthCheckResponse#HealthCheck
   */
  readonly healthCheck: Route53HealthCheck;

}

/**
 * @schema Route53GetHealthCheckCountRequest
 */
export interface Route53GetHealthCheckCountRequest {
}

/**
 * @schema Route53GetHealthCheckCountResponse
 */
export interface Route53GetHealthCheckCountResponse {
  /**
   * @schema Route53GetHealthCheckCountResponse#HealthCheckCount
   */
  readonly healthCheckCount: number;

}

/**
 * @schema Route53GetHealthCheckLastFailureReasonRequest
 */
export interface Route53GetHealthCheckLastFailureReasonRequest {
  /**
   * @schema Route53GetHealthCheckLastFailureReasonRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema Route53GetHealthCheckLastFailureReasonResponse
 */
export interface Route53GetHealthCheckLastFailureReasonResponse {
  /**
   * @schema Route53GetHealthCheckLastFailureReasonResponse#HealthCheckObservations
   */
  readonly healthCheckObservations: Route53HealthCheckObservation[];

}

/**
 * @schema Route53GetHealthCheckStatusRequest
 */
export interface Route53GetHealthCheckStatusRequest {
  /**
   * @schema Route53GetHealthCheckStatusRequest#HealthCheckId
   */
  readonly healthCheckId: string;

}

/**
 * @schema Route53GetHealthCheckStatusResponse
 */
export interface Route53GetHealthCheckStatusResponse {
  /**
   * @schema Route53GetHealthCheckStatusResponse#HealthCheckObservations
   */
  readonly healthCheckObservations: Route53HealthCheckObservation[];

}

/**
 * @schema Route53GetHostedZoneRequest
 */
export interface Route53GetHostedZoneRequest {
  /**
   * @schema Route53GetHostedZoneRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53GetHostedZoneResponse
 */
export interface Route53GetHostedZoneResponse {
  /**
   * @schema Route53GetHostedZoneResponse#HostedZone
   */
  readonly hostedZone: Route53HostedZone;

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
 * @schema Route53GetHostedZoneCountRequest
 */
export interface Route53GetHostedZoneCountRequest {
}

/**
 * @schema Route53GetHostedZoneCountResponse
 */
export interface Route53GetHostedZoneCountResponse {
  /**
   * @schema Route53GetHostedZoneCountResponse#HostedZoneCount
   */
  readonly hostedZoneCount: number;

}

/**
 * @schema Route53GetHostedZoneLimitRequest
 */
export interface Route53GetHostedZoneLimitRequest {
  /**
   * @schema Route53GetHostedZoneLimitRequest#Type
   */
  readonly type: string;

  /**
   * @schema Route53GetHostedZoneLimitRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

}

/**
 * @schema Route53GetHostedZoneLimitResponse
 */
export interface Route53GetHostedZoneLimitResponse {
  /**
   * @schema Route53GetHostedZoneLimitResponse#Limit
   */
  readonly limit: Route53HostedZoneLimit;

  /**
   * @schema Route53GetHostedZoneLimitResponse#Count
   */
  readonly count: number;

}

/**
 * @schema Route53GetQueryLoggingConfigRequest
 */
export interface Route53GetQueryLoggingConfigRequest {
  /**
   * @schema Route53GetQueryLoggingConfigRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53GetQueryLoggingConfigResponse
 */
export interface Route53GetQueryLoggingConfigResponse {
  /**
   * @schema Route53GetQueryLoggingConfigResponse#QueryLoggingConfig
   */
  readonly queryLoggingConfig: Route53QueryLoggingConfig;

}

/**
 * @schema Route53GetReusableDelegationSetRequest
 */
export interface Route53GetReusableDelegationSetRequest {
  /**
   * @schema Route53GetReusableDelegationSetRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53GetReusableDelegationSetResponse
 */
export interface Route53GetReusableDelegationSetResponse {
  /**
   * @schema Route53GetReusableDelegationSetResponse#DelegationSet
   */
  readonly delegationSet: Route53DelegationSet;

}

/**
 * @schema Route53GetReusableDelegationSetLimitRequest
 */
export interface Route53GetReusableDelegationSetLimitRequest {
  /**
   * @schema Route53GetReusableDelegationSetLimitRequest#Type
   */
  readonly type: string;

  /**
   * @schema Route53GetReusableDelegationSetLimitRequest#DelegationSetId
   */
  readonly delegationSetId: string;

}

/**
 * @schema Route53GetReusableDelegationSetLimitResponse
 */
export interface Route53GetReusableDelegationSetLimitResponse {
  /**
   * @schema Route53GetReusableDelegationSetLimitResponse#Limit
   */
  readonly limit: Route53ReusableDelegationSetLimit;

  /**
   * @schema Route53GetReusableDelegationSetLimitResponse#Count
   */
  readonly count: number;

}

/**
 * @schema Route53GetTrafficPolicyRequest
 */
export interface Route53GetTrafficPolicyRequest {
  /**
   * @schema Route53GetTrafficPolicyRequest#Id
   */
  readonly id: string;

  /**
   * @schema Route53GetTrafficPolicyRequest#Version
   */
  readonly version: number;

}

/**
 * @schema Route53GetTrafficPolicyResponse
 */
export interface Route53GetTrafficPolicyResponse {
  /**
   * @schema Route53GetTrafficPolicyResponse#TrafficPolicy
   */
  readonly trafficPolicy: Route53TrafficPolicy;

}

/**
 * @schema Route53GetTrafficPolicyInstanceRequest
 */
export interface Route53GetTrafficPolicyInstanceRequest {
  /**
   * @schema Route53GetTrafficPolicyInstanceRequest#Id
   */
  readonly id: string;

}

/**
 * @schema Route53GetTrafficPolicyInstanceResponse
 */
export interface Route53GetTrafficPolicyInstanceResponse {
  /**
   * @schema Route53GetTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance: Route53TrafficPolicyInstance;

}

/**
 * @schema Route53GetTrafficPolicyInstanceCountRequest
 */
export interface Route53GetTrafficPolicyInstanceCountRequest {
}

/**
 * @schema Route53GetTrafficPolicyInstanceCountResponse
 */
export interface Route53GetTrafficPolicyInstanceCountResponse {
  /**
   * @schema Route53GetTrafficPolicyInstanceCountResponse#TrafficPolicyInstanceCount
   */
  readonly trafficPolicyInstanceCount: number;

}

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
 * @schema Route53ListGeoLocationsResponse
 */
export interface Route53ListGeoLocationsResponse {
  /**
   * @schema Route53ListGeoLocationsResponse#GeoLocationDetailsList
   */
  readonly geoLocationDetailsList: Route53GeoLocationDetails[];

  /**
   * @schema Route53ListGeoLocationsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

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
  readonly maxItems: string;

}

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
 * @schema Route53ListHealthChecksResponse
 */
export interface Route53ListHealthChecksResponse {
  /**
   * @schema Route53ListHealthChecksResponse#HealthChecks
   */
  readonly healthChecks: Route53HealthCheck[];

  /**
   * @schema Route53ListHealthChecksResponse#Marker
   */
  readonly marker: string;

  /**
   * @schema Route53ListHealthChecksResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListHealthChecksResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Route53ListHealthChecksResponse#MaxItems
   */
  readonly maxItems: string;

}

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
 * @schema Route53ListHostedZonesResponse
 */
export interface Route53ListHostedZonesResponse {
  /**
   * @schema Route53ListHostedZonesResponse#HostedZones
   */
  readonly hostedZones: Route53HostedZone[];

  /**
   * @schema Route53ListHostedZonesResponse#Marker
   */
  readonly marker: string;

  /**
   * @schema Route53ListHostedZonesResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListHostedZonesResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Route53ListHostedZonesResponse#MaxItems
   */
  readonly maxItems: string;

}

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
 * @schema Route53ListHostedZonesByNameResponse
 */
export interface Route53ListHostedZonesByNameResponse {
  /**
   * @schema Route53ListHostedZonesByNameResponse#HostedZones
   */
  readonly hostedZones: Route53HostedZone[];

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
  readonly isTruncated: boolean;

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
  readonly maxItems: string;

}

/**
 * @schema Route53ListHostedZonesByVpcRequest
 */
export interface Route53ListHostedZonesByVpcRequest {
  /**
   * @schema Route53ListHostedZonesByVpcRequest#VPCId
   */
  readonly vpcId: string;

  /**
   * @schema Route53ListHostedZonesByVpcRequest#VPCRegion
   */
  readonly vpcRegion: string;

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
 * @schema Route53ListHostedZonesByVpcResponse
 */
export interface Route53ListHostedZonesByVpcResponse {
  /**
   * @schema Route53ListHostedZonesByVpcResponse#HostedZoneSummaries
   */
  readonly hostedZoneSummaries: Route53HostedZoneSummary[];

  /**
   * @schema Route53ListHostedZonesByVpcResponse#MaxItems
   */
  readonly maxItems: string;

  /**
   * @schema Route53ListHostedZonesByVpcResponse#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema Route53ListQueryLoggingConfigsResponse
 */
export interface Route53ListQueryLoggingConfigsResponse {
  /**
   * @schema Route53ListQueryLoggingConfigsResponse#QueryLoggingConfigs
   */
  readonly queryLoggingConfigs: Route53QueryLoggingConfig[];

  /**
   * @schema Route53ListQueryLoggingConfigsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Route53ListResourceRecordSetsRequest
 */
export interface Route53ListResourceRecordSetsRequest {
  /**
   * @schema Route53ListResourceRecordSetsRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

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
 * @schema Route53ListResourceRecordSetsResponse
 */
export interface Route53ListResourceRecordSetsResponse {
  /**
   * @schema Route53ListResourceRecordSetsResponse#ResourceRecordSets
   */
  readonly resourceRecordSets: Route53ResourceRecordSet[];

  /**
   * @schema Route53ListResourceRecordSetsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

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
  readonly maxItems: string;

}

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
 * @schema Route53ListReusableDelegationSetsResponse
 */
export interface Route53ListReusableDelegationSetsResponse {
  /**
   * @schema Route53ListReusableDelegationSetsResponse#DelegationSets
   */
  readonly delegationSets: Route53DelegationSet[];

  /**
   * @schema Route53ListReusableDelegationSetsResponse#Marker
   */
  readonly marker: string;

  /**
   * @schema Route53ListReusableDelegationSetsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListReusableDelegationSetsResponse#NextMarker
   */
  readonly nextMarker?: string;

  /**
   * @schema Route53ListReusableDelegationSetsResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema Route53ListTagsForResourceRequest
 */
export interface Route53ListTagsForResourceRequest {
  /**
   * @schema Route53ListTagsForResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema Route53ListTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema Route53ListTagsForResourceResponse
 */
export interface Route53ListTagsForResourceResponse {
  /**
   * @schema Route53ListTagsForResourceResponse#ResourceTagSet
   */
  readonly resourceTagSet: Route53ResourceTagSet;

}

/**
 * @schema Route53ListTagsForResourcesRequest
 */
export interface Route53ListTagsForResourcesRequest {
  /**
   * @schema Route53ListTagsForResourcesRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema Route53ListTagsForResourcesRequest#ResourceIds
   */
  readonly resourceIds: string[];

}

/**
 * @schema Route53ListTagsForResourcesResponse
 */
export interface Route53ListTagsForResourcesResponse {
  /**
   * @schema Route53ListTagsForResourcesResponse#ResourceTagSets
   */
  readonly resourceTagSets: Route53ResourceTagSet[];

}

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
 * @schema Route53ListTrafficPoliciesResponse
 */
export interface Route53ListTrafficPoliciesResponse {
  /**
   * @schema Route53ListTrafficPoliciesResponse#TrafficPolicySummaries
   */
  readonly trafficPolicySummaries: Route53TrafficPolicySummary[];

  /**
   * @schema Route53ListTrafficPoliciesResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListTrafficPoliciesResponse#TrafficPolicyIdMarker
   */
  readonly trafficPolicyIdMarker: string;

  /**
   * @schema Route53ListTrafficPoliciesResponse#MaxItems
   */
  readonly maxItems: string;

}

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
 * @schema Route53ListTrafficPolicyInstancesResponse
 */
export interface Route53ListTrafficPolicyInstancesResponse {
  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances: Route53TrafficPolicyInstance[];

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
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListTrafficPolicyInstancesResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest
 */
export interface Route53ListTrafficPolicyInstancesByHostedZoneRequest {
  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

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
 * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse
 */
export interface Route53ListTrafficPolicyInstancesByHostedZoneResponse {
  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances: Route53TrafficPolicyInstance[];

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
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListTrafficPolicyInstancesByHostedZoneResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema Route53ListTrafficPolicyInstancesByPolicyRequest
 */
export interface Route53ListTrafficPolicyInstancesByPolicyRequest {
  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

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
 * @schema Route53ListTrafficPolicyInstancesByPolicyResponse
 */
export interface Route53ListTrafficPolicyInstancesByPolicyResponse {
  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#TrafficPolicyInstances
   */
  readonly trafficPolicyInstances: Route53TrafficPolicyInstance[];

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
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListTrafficPolicyInstancesByPolicyResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema Route53ListTrafficPolicyVersionsRequest
 */
export interface Route53ListTrafficPolicyVersionsRequest {
  /**
   * @schema Route53ListTrafficPolicyVersionsRequest#Id
   */
  readonly id: string;

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
 * @schema Route53ListTrafficPolicyVersionsResponse
 */
export interface Route53ListTrafficPolicyVersionsResponse {
  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#TrafficPolicies
   */
  readonly trafficPolicies: Route53TrafficPolicy[];

  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#IsTruncated
   */
  readonly isTruncated: boolean;

  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#TrafficPolicyVersionMarker
   */
  readonly trafficPolicyVersionMarker: string;

  /**
   * @schema Route53ListTrafficPolicyVersionsResponse#MaxItems
   */
  readonly maxItems: string;

}

/**
 * @schema Route53ListVpcAssociationAuthorizationsRequest
 */
export interface Route53ListVpcAssociationAuthorizationsRequest {
  /**
   * @schema Route53ListVpcAssociationAuthorizationsRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

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
 * @schema Route53ListVpcAssociationAuthorizationsResponse
 */
export interface Route53ListVpcAssociationAuthorizationsResponse {
  /**
   * @schema Route53ListVpcAssociationAuthorizationsResponse#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53ListVpcAssociationAuthorizationsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53ListVpcAssociationAuthorizationsResponse#VPCs
   */
  readonly vpCs: Route53Vpc[];

}

/**
 * @schema Route53TestDnsAnswerRequest
 */
export interface Route53TestDnsAnswerRequest {
  /**
   * @schema Route53TestDnsAnswerRequest#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53TestDnsAnswerRequest#RecordName
   */
  readonly recordName: string;

  /**
   * @schema Route53TestDnsAnswerRequest#RecordType
   */
  readonly recordType: string;

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
 * @schema Route53TestDnsAnswerResponse
 */
export interface Route53TestDnsAnswerResponse {
  /**
   * @schema Route53TestDnsAnswerResponse#Nameserver
   */
  readonly nameserver: string;

  /**
   * @schema Route53TestDnsAnswerResponse#RecordName
   */
  readonly recordName: string;

  /**
   * @schema Route53TestDnsAnswerResponse#RecordType
   */
  readonly recordType: string;

  /**
   * @schema Route53TestDnsAnswerResponse#RecordData
   */
  readonly recordData: string[];

  /**
   * @schema Route53TestDnsAnswerResponse#ResponseCode
   */
  readonly responseCode: string;

  /**
   * @schema Route53TestDnsAnswerResponse#Protocol
   */
  readonly protocol: string;

}

/**
 * @schema Route53UpdateHealthCheckRequest
 */
export interface Route53UpdateHealthCheckRequest {
  /**
   * @schema Route53UpdateHealthCheckRequest#HealthCheckId
   */
  readonly healthCheckId: string;

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
 * @schema Route53UpdateHealthCheckResponse
 */
export interface Route53UpdateHealthCheckResponse {
  /**
   * @schema Route53UpdateHealthCheckResponse#HealthCheck
   */
  readonly healthCheck: Route53HealthCheck;

}

/**
 * @schema Route53UpdateHostedZoneCommentRequest
 */
export interface Route53UpdateHostedZoneCommentRequest {
  /**
   * @schema Route53UpdateHostedZoneCommentRequest#Id
   */
  readonly id: string;

  /**
   * @schema Route53UpdateHostedZoneCommentRequest#Comment
   */
  readonly comment?: string;

}

/**
 * @schema Route53UpdateHostedZoneCommentResponse
 */
export interface Route53UpdateHostedZoneCommentResponse {
  /**
   * @schema Route53UpdateHostedZoneCommentResponse#HostedZone
   */
  readonly hostedZone: Route53HostedZone;

}

/**
 * @schema Route53UpdateTrafficPolicyCommentRequest
 */
export interface Route53UpdateTrafficPolicyCommentRequest {
  /**
   * @schema Route53UpdateTrafficPolicyCommentRequest#Id
   */
  readonly id: string;

  /**
   * @schema Route53UpdateTrafficPolicyCommentRequest#Version
   */
  readonly version: number;

  /**
   * @schema Route53UpdateTrafficPolicyCommentRequest#Comment
   */
  readonly comment: string;

}

/**
 * @schema Route53UpdateTrafficPolicyCommentResponse
 */
export interface Route53UpdateTrafficPolicyCommentResponse {
  /**
   * @schema Route53UpdateTrafficPolicyCommentResponse#TrafficPolicy
   */
  readonly trafficPolicy: Route53TrafficPolicy;

}

/**
 * @schema Route53UpdateTrafficPolicyInstanceRequest
 */
export interface Route53UpdateTrafficPolicyInstanceRequest {
  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#Id
   */
  readonly id: string;

  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#TTL
   */
  readonly ttl: number;

  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema Route53UpdateTrafficPolicyInstanceRequest#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

}

/**
 * @schema Route53UpdateTrafficPolicyInstanceResponse
 */
export interface Route53UpdateTrafficPolicyInstanceResponse {
  /**
   * @schema Route53UpdateTrafficPolicyInstanceResponse#TrafficPolicyInstance
   */
  readonly trafficPolicyInstance: Route53TrafficPolicyInstance;

}

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
 * @schema Route53ChangeInfo
 */
export interface Route53ChangeInfo {
  /**
   * @schema Route53ChangeInfo#Id
   */
  readonly id: string;

  /**
   * @schema Route53ChangeInfo#Status
   */
  readonly status: string;

  /**
   * @schema Route53ChangeInfo#SubmittedAt
   */
  readonly submittedAt: string;

  /**
   * @schema Route53ChangeInfo#Comment
   */
  readonly comment?: string;

}

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
  readonly changes: Route53Change[];

}

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
  readonly type: string;

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

}

/**
 * @schema Route53HealthCheck
 */
export interface Route53HealthCheck {
  /**
   * @schema Route53HealthCheck#Id
   */
  readonly id: string;

  /**
   * @schema Route53HealthCheck#CallerReference
   */
  readonly callerReference: string;

  /**
   * @schema Route53HealthCheck#LinkedService
   */
  readonly linkedService?: Route53LinkedService;

  /**
   * @schema Route53HealthCheck#HealthCheckConfig
   */
  readonly healthCheckConfig: Route53HealthCheckConfig;

  /**
   * @schema Route53HealthCheck#HealthCheckVersion
   */
  readonly healthCheckVersion: number;

  /**
   * @schema Route53HealthCheck#CloudWatchAlarmConfiguration
   */
  readonly cloudWatchAlarmConfiguration?: Route53CloudWatchAlarmConfiguration;

}

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
 * @schema Route53HostedZone
 */
export interface Route53HostedZone {
  /**
   * @schema Route53HostedZone#Id
   */
  readonly id: string;

  /**
   * @schema Route53HostedZone#Name
   */
  readonly name: string;

  /**
   * @schema Route53HostedZone#CallerReference
   */
  readonly callerReference: string;

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
  readonly nameServers: string[];

}

/**
 * @schema Route53QueryLoggingConfig
 */
export interface Route53QueryLoggingConfig {
  /**
   * @schema Route53QueryLoggingConfig#Id
   */
  readonly id: string;

  /**
   * @schema Route53QueryLoggingConfig#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53QueryLoggingConfig#CloudWatchLogsLogGroupArn
   */
  readonly cloudWatchLogsLogGroupArn: string;

}

/**
 * @schema Route53TrafficPolicy
 */
export interface Route53TrafficPolicy {
  /**
   * @schema Route53TrafficPolicy#Id
   */
  readonly id: string;

  /**
   * @schema Route53TrafficPolicy#Version
   */
  readonly version: number;

  /**
   * @schema Route53TrafficPolicy#Name
   */
  readonly name: string;

  /**
   * @schema Route53TrafficPolicy#Type
   */
  readonly type: string;

  /**
   * @schema Route53TrafficPolicy#Document
   */
  readonly document: string;

  /**
   * @schema Route53TrafficPolicy#Comment
   */
  readonly comment?: string;

}

/**
 * @schema Route53TrafficPolicyInstance
 */
export interface Route53TrafficPolicyInstance {
  /**
   * @schema Route53TrafficPolicyInstance#Id
   */
  readonly id: string;

  /**
   * @schema Route53TrafficPolicyInstance#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53TrafficPolicyInstance#Name
   */
  readonly name: string;

  /**
   * @schema Route53TrafficPolicyInstance#TTL
   */
  readonly ttl: number;

  /**
   * @schema Route53TrafficPolicyInstance#State
   */
  readonly state: string;

  /**
   * @schema Route53TrafficPolicyInstance#Message
   */
  readonly message: string;

  /**
   * @schema Route53TrafficPolicyInstance#TrafficPolicyId
   */
  readonly trafficPolicyId: string;

  /**
   * @schema Route53TrafficPolicyInstance#TrafficPolicyVersion
   */
  readonly trafficPolicyVersion: number;

  /**
   * @schema Route53TrafficPolicyInstance#TrafficPolicyType
   */
  readonly trafficPolicyType: string;

}

/**
 * @schema Route53AccountLimit
 */
export interface Route53AccountLimit {
  /**
   * @schema Route53AccountLimit#Type
   */
  readonly type: string;

  /**
   * @schema Route53AccountLimit#Value
   */
  readonly value: number;

}

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
 * @schema Route53HostedZoneLimit
 */
export interface Route53HostedZoneLimit {
  /**
   * @schema Route53HostedZoneLimit#Type
   */
  readonly type: string;

  /**
   * @schema Route53HostedZoneLimit#Value
   */
  readonly value: number;

}

/**
 * @schema Route53ReusableDelegationSetLimit
 */
export interface Route53ReusableDelegationSetLimit {
  /**
   * @schema Route53ReusableDelegationSetLimit#Type
   */
  readonly type: string;

  /**
   * @schema Route53ReusableDelegationSetLimit#Value
   */
  readonly value: number;

}

/**
 * @schema Route53HostedZoneSummary
 */
export interface Route53HostedZoneSummary {
  /**
   * @schema Route53HostedZoneSummary#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53HostedZoneSummary#Name
   */
  readonly name: string;

  /**
   * @schema Route53HostedZoneSummary#Owner
   */
  readonly owner: Route53HostedZoneOwner;

}

/**
 * @schema Route53ResourceRecordSet
 */
export interface Route53ResourceRecordSet {
  /**
   * @schema Route53ResourceRecordSet#Name
   */
  readonly name: string;

  /**
   * @schema Route53ResourceRecordSet#Type
   */
  readonly type: string;

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
 * @schema Route53TrafficPolicySummary
 */
export interface Route53TrafficPolicySummary {
  /**
   * @schema Route53TrafficPolicySummary#Id
   */
  readonly id: string;

  /**
   * @schema Route53TrafficPolicySummary#Name
   */
  readonly name: string;

  /**
   * @schema Route53TrafficPolicySummary#Type
   */
  readonly type: string;

  /**
   * @schema Route53TrafficPolicySummary#LatestVersion
   */
  readonly latestVersion: number;

  /**
   * @schema Route53TrafficPolicySummary#TrafficPolicyCount
   */
  readonly trafficPolicyCount: number;

}

/**
 * @schema Route53AlarmIdentifier
 */
export interface Route53AlarmIdentifier {
  /**
   * @schema Route53AlarmIdentifier#Region
   */
  readonly region: string;

  /**
   * @schema Route53AlarmIdentifier#Name
   */
  readonly name: string;

}

/**
 * @schema Route53Change
 */
export interface Route53Change {
  /**
   * @schema Route53Change#Action
   */
  readonly action: string;

  /**
   * @schema Route53Change#ResourceRecordSet
   */
  readonly resourceRecordSet: Route53ResourceRecordSet;

}

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
 * @schema Route53CloudWatchAlarmConfiguration
 */
export interface Route53CloudWatchAlarmConfiguration {
  /**
   * @schema Route53CloudWatchAlarmConfiguration#EvaluationPeriods
   */
  readonly evaluationPeriods: number;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Threshold
   */
  readonly threshold: number;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#ComparisonOperator
   */
  readonly comparisonOperator: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Period
   */
  readonly period: number;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#MetricName
   */
  readonly metricName: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Namespace
   */
  readonly namespace: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Statistic
   */
  readonly statistic: string;

  /**
   * @schema Route53CloudWatchAlarmConfiguration#Dimensions
   */
  readonly dimensions?: Route53Dimension[];

}

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
 * @schema Route53ResourceRecord
 */
export interface Route53ResourceRecord {
  /**
   * @schema Route53ResourceRecord#Value
   */
  readonly value: string;

}

/**
 * @schema Route53AliasTarget
 */
export interface Route53AliasTarget {
  /**
   * @schema Route53AliasTarget#HostedZoneId
   */
  readonly hostedZoneId: string;

  /**
   * @schema Route53AliasTarget#DNSName
   */
  readonly dnsName: string;

  /**
   * @schema Route53AliasTarget#EvaluateTargetHealth
   */
  readonly evaluateTargetHealth: boolean;

}

/**
 * @schema Route53Dimension
 */
export interface Route53Dimension {
  /**
   * @schema Route53Dimension#Name
   */
  readonly name: string;

  /**
   * @schema Route53Dimension#Value
   */
  readonly value: string;

}
