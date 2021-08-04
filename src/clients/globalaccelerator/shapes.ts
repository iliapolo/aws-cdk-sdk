/**
 * @schema GlobalAcceleratorAdvertiseByoipCidrRequest
 */
export interface GlobalAcceleratorAdvertiseByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorAdvertiseByoipCidrRequest#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema GlobalAcceleratorAdvertiseByoipCidrResponse
 */
export interface GlobalAcceleratorAdvertiseByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorAdvertiseByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * @schema GlobalAcceleratorCreateAcceleratorRequest
 */
export interface GlobalAcceleratorCreateAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#Name
   */
  readonly name: string;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#IpAddresses
   */
  readonly ipAddresses?: string[];

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#IdempotencyToken
   */
  readonly idempotencyToken: string;

  /**
   * @schema GlobalAcceleratorCreateAcceleratorRequest#Tags
   */
  readonly tags?: GlobalAcceleratorTag[];

}

/**
 * @schema GlobalAcceleratorCreateAcceleratorResponse
 */
export interface GlobalAcceleratorCreateAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorCreateAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorAccelerator;

}

/**
 * @schema GlobalAcceleratorCreateEndpointGroupRequest
 */
export interface GlobalAcceleratorCreateEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#ListenerArn
   */
  readonly listenerArn: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#EndpointGroupRegion
   */
  readonly endpointGroupRegion: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: GlobalAcceleratorEndpointConfiguration[];

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#IdempotencyToken
   */
  readonly idempotencyToken: string;

  /**
   * @schema GlobalAcceleratorCreateEndpointGroupRequest#PortOverrides
   */
  readonly portOverrides?: GlobalAcceleratorPortOverride[];

}

/**
 * @schema GlobalAcceleratorCreateEndpointGroupResponse
 */
export interface GlobalAcceleratorCreateEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorCreateEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorEndpointGroup;

}

/**
 * @schema GlobalAcceleratorCreateListenerRequest
 */
export interface GlobalAcceleratorCreateListenerRequest {
  /**
   * @schema GlobalAcceleratorCreateListenerRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#PortRanges
   */
  readonly portRanges: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#ClientAffinity
   */
  readonly clientAffinity?: string;

  /**
   * @schema GlobalAcceleratorCreateListenerRequest#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema GlobalAcceleratorCreateListenerResponse
 */
export interface GlobalAcceleratorCreateListenerResponse {
  /**
   * @schema GlobalAcceleratorCreateListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorListener;

}

/**
 * @schema GlobalAcceleratorDeleteAcceleratorRequest
 */
export interface GlobalAcceleratorDeleteAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorDeleteAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

}

/**
 * @schema GlobalAcceleratorDeleteEndpointGroupRequest
 */
export interface GlobalAcceleratorDeleteEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorDeleteEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn: string;

}

/**
 * @schema GlobalAcceleratorDeleteListenerRequest
 */
export interface GlobalAcceleratorDeleteListenerRequest {
  /**
   * @schema GlobalAcceleratorDeleteListenerRequest#ListenerArn
   */
  readonly listenerArn: string;

}

/**
 * @schema GlobalAcceleratorDeprovisionByoipCidrRequest
 */
export interface GlobalAcceleratorDeprovisionByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorDeprovisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema GlobalAcceleratorDeprovisionByoipCidrResponse
 */
export interface GlobalAcceleratorDeprovisionByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorDeprovisionByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * @schema GlobalAcceleratorDescribeAcceleratorRequest
 */
export interface GlobalAcceleratorDescribeAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

}

/**
 * @schema GlobalAcceleratorDescribeAcceleratorResponse
 */
export interface GlobalAcceleratorDescribeAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorAccelerator;

}

/**
 * @schema GlobalAcceleratorDescribeAcceleratorAttributesRequest
 */
export interface GlobalAcceleratorDescribeAcceleratorAttributesRequest {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

}

/**
 * @schema GlobalAcceleratorDescribeAcceleratorAttributesResponse
 */
export interface GlobalAcceleratorDescribeAcceleratorAttributesResponse {
  /**
   * @schema GlobalAcceleratorDescribeAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: GlobalAcceleratorAcceleratorAttributes;

}

/**
 * @schema GlobalAcceleratorDescribeEndpointGroupRequest
 */
export interface GlobalAcceleratorDescribeEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorDescribeEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn: string;

}

/**
 * @schema GlobalAcceleratorDescribeEndpointGroupResponse
 */
export interface GlobalAcceleratorDescribeEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorDescribeEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorEndpointGroup;

}

/**
 * @schema GlobalAcceleratorDescribeListenerRequest
 */
export interface GlobalAcceleratorDescribeListenerRequest {
  /**
   * @schema GlobalAcceleratorDescribeListenerRequest#ListenerArn
   */
  readonly listenerArn: string;

}

/**
 * @schema GlobalAcceleratorDescribeListenerResponse
 */
export interface GlobalAcceleratorDescribeListenerResponse {
  /**
   * @schema GlobalAcceleratorDescribeListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorListener;

}

/**
 * @schema GlobalAcceleratorListAcceleratorsRequest
 */
export interface GlobalAcceleratorListAcceleratorsRequest {
  /**
   * @schema GlobalAcceleratorListAcceleratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListAcceleratorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListAcceleratorsResponse
 */
export interface GlobalAcceleratorListAcceleratorsResponse {
  /**
   * @schema GlobalAcceleratorListAcceleratorsResponse#Accelerators
   */
  readonly accelerators?: GlobalAcceleratorAccelerator[];

  /**
   * @schema GlobalAcceleratorListAcceleratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListByoipCidrsRequest
 */
export interface GlobalAcceleratorListByoipCidrsRequest {
  /**
   * @schema GlobalAcceleratorListByoipCidrsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListByoipCidrsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListByoipCidrsResponse
 */
export interface GlobalAcceleratorListByoipCidrsResponse {
  /**
   * @schema GlobalAcceleratorListByoipCidrsResponse#ByoipCidrs
   */
  readonly byoipCidrs?: GlobalAcceleratorByoipCidr[];

  /**
   * @schema GlobalAcceleratorListByoipCidrsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListEndpointGroupsRequest
 */
export interface GlobalAcceleratorListEndpointGroupsRequest {
  /**
   * @schema GlobalAcceleratorListEndpointGroupsRequest#ListenerArn
   */
  readonly listenerArn: string;

  /**
   * @schema GlobalAcceleratorListEndpointGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListEndpointGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListEndpointGroupsResponse
 */
export interface GlobalAcceleratorListEndpointGroupsResponse {
  /**
   * @schema GlobalAcceleratorListEndpointGroupsResponse#EndpointGroups
   */
  readonly endpointGroups?: GlobalAcceleratorEndpointGroup[];

  /**
   * @schema GlobalAcceleratorListEndpointGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListListenersRequest
 */
export interface GlobalAcceleratorListListenersRequest {
  /**
   * @schema GlobalAcceleratorListListenersRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema GlobalAcceleratorListListenersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GlobalAcceleratorListListenersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListListenersResponse
 */
export interface GlobalAcceleratorListListenersResponse {
  /**
   * @schema GlobalAcceleratorListListenersResponse#Listeners
   */
  readonly listeners?: GlobalAcceleratorListener[];

  /**
   * @schema GlobalAcceleratorListListenersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GlobalAcceleratorListTagsForResourceRequest
 */
export interface GlobalAcceleratorListTagsForResourceRequest {
  /**
   * @schema GlobalAcceleratorListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GlobalAcceleratorListTagsForResourceResponse
 */
export interface GlobalAcceleratorListTagsForResourceResponse {
  /**
   * @schema GlobalAcceleratorListTagsForResourceResponse#Tags
   */
  readonly tags?: GlobalAcceleratorTag[];

}

/**
 * @schema GlobalAcceleratorProvisionByoipCidrRequest
 */
export interface GlobalAcceleratorProvisionByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorProvisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema GlobalAcceleratorProvisionByoipCidrRequest#CidrAuthorizationContext
   */
  readonly cidrAuthorizationContext: GlobalAcceleratorCidrAuthorizationContext;

}

/**
 * @schema GlobalAcceleratorProvisionByoipCidrResponse
 */
export interface GlobalAcceleratorProvisionByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorProvisionByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * @schema GlobalAcceleratorTagResourceRequest
 */
export interface GlobalAcceleratorTagResourceRequest {
  /**
   * @schema GlobalAcceleratorTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GlobalAcceleratorTagResourceRequest#Tags
   */
  readonly tags: GlobalAcceleratorTag[];

}

/**
 * @schema GlobalAcceleratorTagResourceResponse
 */
export interface GlobalAcceleratorTagResourceResponse {
}

/**
 * @schema GlobalAcceleratorUntagResourceRequest
 */
export interface GlobalAcceleratorUntagResourceRequest {
  /**
   * @schema GlobalAcceleratorUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GlobalAcceleratorUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema GlobalAcceleratorUntagResourceResponse
 */
export interface GlobalAcceleratorUntagResourceResponse {
}

/**
 * @schema GlobalAcceleratorUpdateAcceleratorRequest
 */
export interface GlobalAcceleratorUpdateAcceleratorRequest {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema GlobalAcceleratorUpdateAcceleratorResponse
 */
export interface GlobalAcceleratorUpdateAcceleratorResponse {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorResponse#Accelerator
   */
  readonly accelerator?: GlobalAcceleratorAccelerator;

}

/**
 * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest
 */
export interface GlobalAcceleratorUpdateAcceleratorAttributesRequest {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesRequest#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * @schema GlobalAcceleratorUpdateAcceleratorAttributesResponse
 */
export interface GlobalAcceleratorUpdateAcceleratorAttributesResponse {
  /**
   * @schema GlobalAcceleratorUpdateAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: GlobalAcceleratorAcceleratorAttributes;

}

/**
 * @schema GlobalAcceleratorUpdateEndpointGroupRequest
 */
export interface GlobalAcceleratorUpdateEndpointGroupRequest {
  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn: string;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: GlobalAcceleratorEndpointConfiguration[];

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupRequest#PortOverrides
   */
  readonly portOverrides?: GlobalAcceleratorPortOverride[];

}

/**
 * @schema GlobalAcceleratorUpdateEndpointGroupResponse
 */
export interface GlobalAcceleratorUpdateEndpointGroupResponse {
  /**
   * @schema GlobalAcceleratorUpdateEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: GlobalAcceleratorEndpointGroup;

}

/**
 * @schema GlobalAcceleratorUpdateListenerRequest
 */
export interface GlobalAcceleratorUpdateListenerRequest {
  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#ListenerArn
   */
  readonly listenerArn: string;

  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GlobalAcceleratorUpdateListenerRequest#ClientAffinity
   */
  readonly clientAffinity?: string;

}

/**
 * @schema GlobalAcceleratorUpdateListenerResponse
 */
export interface GlobalAcceleratorUpdateListenerResponse {
  /**
   * @schema GlobalAcceleratorUpdateListenerResponse#Listener
   */
  readonly listener?: GlobalAcceleratorListener;

}

/**
 * @schema GlobalAcceleratorWithdrawByoipCidrRequest
 */
export interface GlobalAcceleratorWithdrawByoipCidrRequest {
  /**
   * @schema GlobalAcceleratorWithdrawByoipCidrRequest#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema GlobalAcceleratorWithdrawByoipCidrResponse
 */
export interface GlobalAcceleratorWithdrawByoipCidrResponse {
  /**
   * @schema GlobalAcceleratorWithdrawByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: GlobalAcceleratorByoipCidr;

}

/**
 * @schema GlobalAcceleratorByoipCidr
 */
export interface GlobalAcceleratorByoipCidr {
  /**
   * @schema GlobalAcceleratorByoipCidr#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema GlobalAcceleratorByoipCidr#State
   */
  readonly state?: string;

  /**
   * @schema GlobalAcceleratorByoipCidr#Events
   */
  readonly events?: GlobalAcceleratorByoipCidrEvent[];

}

/**
 * @schema GlobalAcceleratorTag
 */
export interface GlobalAcceleratorTag {
  /**
   * @schema GlobalAcceleratorTag#Key
   */
  readonly key: string;

  /**
   * @schema GlobalAcceleratorTag#Value
   */
  readonly value: string;

}

/**
 * @schema GlobalAcceleratorAccelerator
 */
export interface GlobalAcceleratorAccelerator {
  /**
   * @schema GlobalAcceleratorAccelerator#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#Name
   */
  readonly name?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GlobalAcceleratorAccelerator#IpSets
   */
  readonly ipSets?: GlobalAcceleratorIpSet[];

  /**
   * @schema GlobalAcceleratorAccelerator#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#Status
   */
  readonly status?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema GlobalAcceleratorAccelerator#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema GlobalAcceleratorEndpointConfiguration
 */
export interface GlobalAcceleratorEndpointConfiguration {
  /**
   * @schema GlobalAcceleratorEndpointConfiguration#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorEndpointConfiguration#Weight
   */
  readonly weight?: number;

  /**
   * @schema GlobalAcceleratorEndpointConfiguration#ClientIPPreservationEnabled
   */
  readonly clientIpPreservationEnabled?: boolean;

}

/**
 * @schema GlobalAcceleratorPortOverride
 */
export interface GlobalAcceleratorPortOverride {
  /**
   * @schema GlobalAcceleratorPortOverride#ListenerPort
   */
  readonly listenerPort?: number;

  /**
   * @schema GlobalAcceleratorPortOverride#EndpointPort
   */
  readonly endpointPort?: number;

}

/**
 * @schema GlobalAcceleratorEndpointGroup
 */
export interface GlobalAcceleratorEndpointGroup {
  /**
   * @schema GlobalAcceleratorEndpointGroup#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#EndpointDescriptions
   */
  readonly endpointDescriptions?: GlobalAcceleratorEndpointDescription[];

  /**
   * @schema GlobalAcceleratorEndpointGroup#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema GlobalAcceleratorEndpointGroup#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema GlobalAcceleratorEndpointGroup#PortOverrides
   */
  readonly portOverrides?: GlobalAcceleratorPortOverride[];

}

/**
 * @schema GlobalAcceleratorPortRange
 */
export interface GlobalAcceleratorPortRange {
  /**
   * @schema GlobalAcceleratorPortRange#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema GlobalAcceleratorPortRange#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema GlobalAcceleratorListener
 */
export interface GlobalAcceleratorListener {
  /**
   * @schema GlobalAcceleratorListener#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema GlobalAcceleratorListener#PortRanges
   */
  readonly portRanges?: GlobalAcceleratorPortRange[];

  /**
   * @schema GlobalAcceleratorListener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema GlobalAcceleratorListener#ClientAffinity
   */
  readonly clientAffinity?: string;

}

/**
 * @schema GlobalAcceleratorAcceleratorAttributes
 */
export interface GlobalAcceleratorAcceleratorAttributes {
  /**
   * @schema GlobalAcceleratorAcceleratorAttributes#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema GlobalAcceleratorAcceleratorAttributes#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema GlobalAcceleratorAcceleratorAttributes#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * @schema GlobalAcceleratorCidrAuthorizationContext
 */
export interface GlobalAcceleratorCidrAuthorizationContext {
  /**
   * @schema GlobalAcceleratorCidrAuthorizationContext#Message
   */
  readonly message: string;

  /**
   * @schema GlobalAcceleratorCidrAuthorizationContext#Signature
   */
  readonly signature: string;

}

/**
 * @schema GlobalAcceleratorByoipCidrEvent
 */
export interface GlobalAcceleratorByoipCidrEvent {
  /**
   * @schema GlobalAcceleratorByoipCidrEvent#Message
   */
  readonly message?: string;

  /**
   * @schema GlobalAcceleratorByoipCidrEvent#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema GlobalAcceleratorIpSet
 */
export interface GlobalAcceleratorIpSet {
  /**
   * @schema GlobalAcceleratorIpSet#IpFamily
   */
  readonly ipFamily?: string;

  /**
   * @schema GlobalAcceleratorIpSet#IpAddresses
   */
  readonly ipAddresses?: string[];

}

/**
 * @schema GlobalAcceleratorEndpointDescription
 */
export interface GlobalAcceleratorEndpointDescription {
  /**
   * @schema GlobalAcceleratorEndpointDescription#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema GlobalAcceleratorEndpointDescription#Weight
   */
  readonly weight?: number;

  /**
   * @schema GlobalAcceleratorEndpointDescription#HealthState
   */
  readonly healthState?: string;

  /**
   * @schema GlobalAcceleratorEndpointDescription#HealthReason
   */
  readonly healthReason?: string;

  /**
   * @schema GlobalAcceleratorEndpointDescription#ClientIPPreservationEnabled
   */
  readonly clientIpPreservationEnabled?: boolean;

}
