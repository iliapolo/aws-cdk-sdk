/**
 * @schema AdvertiseByoipCidrRequest
 */
export interface AdvertiseByoipCidrRequest {
  /**
   * @schema AdvertiseByoipCidrRequest#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema AdvertiseByoipCidrResponse
 */
export interface AdvertiseByoipCidrResponse {
  /**
   * @schema AdvertiseByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema CreateAcceleratorRequest
 */
export interface CreateAcceleratorRequest {
  /**
   * @schema CreateAcceleratorRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema CreateAcceleratorRequest#IpAddresses
   */
  readonly ipAddresses?: string[];

  /**
   * @schema CreateAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CreateAcceleratorRequest#IdempotencyToken
   */
  readonly idempotencyToken: string;

  /**
   * @schema CreateAcceleratorRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAcceleratorResponse
 */
export interface CreateAcceleratorResponse {
  /**
   * @schema CreateAcceleratorResponse#Accelerator
   */
  readonly accelerator?: Accelerator;

}

/**
 * @schema CreateEndpointGroupRequest
 */
export interface CreateEndpointGroupRequest {
  /**
   * @schema CreateEndpointGroupRequest#ListenerArn
   */
  readonly listenerArn: string;

  /**
   * @schema CreateEndpointGroupRequest#EndpointGroupRegion
   */
  readonly endpointGroupRegion: string;

  /**
   * @schema CreateEndpointGroupRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: EndpointConfiguration[];

  /**
   * @schema CreateEndpointGroupRequest#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema CreateEndpointGroupRequest#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema CreateEndpointGroupRequest#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema CreateEndpointGroupRequest#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema CreateEndpointGroupRequest#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema CreateEndpointGroupRequest#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema CreateEndpointGroupRequest#IdempotencyToken
   */
  readonly idempotencyToken: string;

  /**
   * @schema CreateEndpointGroupRequest#PortOverrides
   */
  readonly portOverrides?: PortOverride[];

}

/**
 * @schema CreateEndpointGroupResponse
 */
export interface CreateEndpointGroupResponse {
  /**
   * @schema CreateEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: EndpointGroup;

}

/**
 * @schema CreateListenerRequest
 */
export interface CreateListenerRequest {
  /**
   * @schema CreateListenerRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema CreateListenerRequest#PortRanges
   */
  readonly portRanges: PortRange[];

  /**
   * @schema CreateListenerRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema CreateListenerRequest#ClientAffinity
   */
  readonly clientAffinity?: string;

  /**
   * @schema CreateListenerRequest#IdempotencyToken
   */
  readonly idempotencyToken: string;

}

/**
 * @schema CreateListenerResponse
 */
export interface CreateListenerResponse {
  /**
   * @schema CreateListenerResponse#Listener
   */
  readonly listener?: Listener;

}

/**
 * @schema DeleteAcceleratorRequest
 */
export interface DeleteAcceleratorRequest {
  /**
   * @schema DeleteAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

}

/**
 * @schema DeleteEndpointGroupRequest
 */
export interface DeleteEndpointGroupRequest {
  /**
   * @schema DeleteEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn: string;

}

/**
 * @schema DeleteListenerRequest
 */
export interface DeleteListenerRequest {
  /**
   * @schema DeleteListenerRequest#ListenerArn
   */
  readonly listenerArn: string;

}

/**
 * @schema DeprovisionByoipCidrRequest
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * @schema DeprovisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema DeprovisionByoipCidrResponse
 */
export interface DeprovisionByoipCidrResponse {
  /**
   * @schema DeprovisionByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema DescribeAcceleratorRequest
 */
export interface DescribeAcceleratorRequest {
  /**
   * @schema DescribeAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

}

/**
 * @schema DescribeAcceleratorResponse
 */
export interface DescribeAcceleratorResponse {
  /**
   * @schema DescribeAcceleratorResponse#Accelerator
   */
  readonly accelerator?: Accelerator;

}

/**
 * @schema DescribeAcceleratorAttributesRequest
 */
export interface DescribeAcceleratorAttributesRequest {
  /**
   * @schema DescribeAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

}

/**
 * @schema DescribeAcceleratorAttributesResponse
 */
export interface DescribeAcceleratorAttributesResponse {
  /**
   * @schema DescribeAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: AcceleratorAttributes;

}

/**
 * @schema DescribeEndpointGroupRequest
 */
export interface DescribeEndpointGroupRequest {
  /**
   * @schema DescribeEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn: string;

}

/**
 * @schema DescribeEndpointGroupResponse
 */
export interface DescribeEndpointGroupResponse {
  /**
   * @schema DescribeEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: EndpointGroup;

}

/**
 * @schema DescribeListenerRequest
 */
export interface DescribeListenerRequest {
  /**
   * @schema DescribeListenerRequest#ListenerArn
   */
  readonly listenerArn: string;

}

/**
 * @schema DescribeListenerResponse
 */
export interface DescribeListenerResponse {
  /**
   * @schema DescribeListenerResponse#Listener
   */
  readonly listener?: Listener;

}

/**
 * @schema ListAcceleratorsRequest
 */
export interface ListAcceleratorsRequest {
  /**
   * @schema ListAcceleratorsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAcceleratorsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAcceleratorsResponse
 */
export interface ListAcceleratorsResponse {
  /**
   * @schema ListAcceleratorsResponse#Accelerators
   */
  readonly accelerators?: Accelerator[];

  /**
   * @schema ListAcceleratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListByoipCidrsRequest
 */
export interface ListByoipCidrsRequest {
  /**
   * @schema ListByoipCidrsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListByoipCidrsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListByoipCidrsResponse
 */
export interface ListByoipCidrsResponse {
  /**
   * @schema ListByoipCidrsResponse#ByoipCidrs
   */
  readonly byoipCidrs?: ByoipCidr[];

  /**
   * @schema ListByoipCidrsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEndpointGroupsRequest
 */
export interface ListEndpointGroupsRequest {
  /**
   * @schema ListEndpointGroupsRequest#ListenerArn
   */
  readonly listenerArn: string;

  /**
   * @schema ListEndpointGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListEndpointGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEndpointGroupsResponse
 */
export interface ListEndpointGroupsResponse {
  /**
   * @schema ListEndpointGroupsResponse#EndpointGroups
   */
  readonly endpointGroups?: EndpointGroup[];

  /**
   * @schema ListEndpointGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListListenersRequest
 */
export interface ListListenersRequest {
  /**
   * @schema ListListenersRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema ListListenersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListListenersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListListenersResponse
 */
export interface ListListenersResponse {
  /**
   * @schema ListListenersResponse#Listeners
   */
  readonly listeners?: Listener[];

  /**
   * @schema ListListenersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ProvisionByoipCidrRequest
 */
export interface ProvisionByoipCidrRequest {
  /**
   * @schema ProvisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema ProvisionByoipCidrRequest#CidrAuthorizationContext
   */
  readonly cidrAuthorizationContext: CidrAuthorizationContext;

}

/**
 * @schema ProvisionByoipCidrResponse
 */
export interface ProvisionByoipCidrResponse {
  /**
   * @schema ProvisionByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateAcceleratorRequest
 */
export interface UpdateAcceleratorRequest {
  /**
   * @schema UpdateAcceleratorRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema UpdateAcceleratorRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateAcceleratorRequest#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema UpdateAcceleratorRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema UpdateAcceleratorResponse
 */
export interface UpdateAcceleratorResponse {
  /**
   * @schema UpdateAcceleratorResponse#Accelerator
   */
  readonly accelerator?: Accelerator;

}

/**
 * @schema UpdateAcceleratorAttributesRequest
 */
export interface UpdateAcceleratorAttributesRequest {
  /**
   * @schema UpdateAcceleratorAttributesRequest#AcceleratorArn
   */
  readonly acceleratorArn: string;

  /**
   * @schema UpdateAcceleratorAttributesRequest#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema UpdateAcceleratorAttributesRequest#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema UpdateAcceleratorAttributesRequest#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * @schema UpdateAcceleratorAttributesResponse
 */
export interface UpdateAcceleratorAttributesResponse {
  /**
   * @schema UpdateAcceleratorAttributesResponse#AcceleratorAttributes
   */
  readonly acceleratorAttributes?: AcceleratorAttributes;

}

/**
 * @schema UpdateEndpointGroupRequest
 */
export interface UpdateEndpointGroupRequest {
  /**
   * @schema UpdateEndpointGroupRequest#EndpointGroupArn
   */
  readonly endpointGroupArn: string;

  /**
   * @schema UpdateEndpointGroupRequest#EndpointConfigurations
   */
  readonly endpointConfigurations?: EndpointConfiguration[];

  /**
   * @schema UpdateEndpointGroupRequest#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema UpdateEndpointGroupRequest#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema UpdateEndpointGroupRequest#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema UpdateEndpointGroupRequest#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema UpdateEndpointGroupRequest#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema UpdateEndpointGroupRequest#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema UpdateEndpointGroupRequest#PortOverrides
   */
  readonly portOverrides?: PortOverride[];

}

/**
 * @schema UpdateEndpointGroupResponse
 */
export interface UpdateEndpointGroupResponse {
  /**
   * @schema UpdateEndpointGroupResponse#EndpointGroup
   */
  readonly endpointGroup?: EndpointGroup;

}

/**
 * @schema UpdateListenerRequest
 */
export interface UpdateListenerRequest {
  /**
   * @schema UpdateListenerRequest#ListenerArn
   */
  readonly listenerArn: string;

  /**
   * @schema UpdateListenerRequest#PortRanges
   */
  readonly portRanges?: PortRange[];

  /**
   * @schema UpdateListenerRequest#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema UpdateListenerRequest#ClientAffinity
   */
  readonly clientAffinity?: string;

}

/**
 * @schema UpdateListenerResponse
 */
export interface UpdateListenerResponse {
  /**
   * @schema UpdateListenerResponse#Listener
   */
  readonly listener?: Listener;

}

/**
 * @schema WithdrawByoipCidrRequest
 */
export interface WithdrawByoipCidrRequest {
  /**
   * @schema WithdrawByoipCidrRequest#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema WithdrawByoipCidrResponse
 */
export interface WithdrawByoipCidrResponse {
  /**
   * @schema WithdrawByoipCidrResponse#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema ByoipCidr
 */
export interface ByoipCidr {
  /**
   * @schema ByoipCidr#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema ByoipCidr#State
   */
  readonly state?: string;

  /**
   * @schema ByoipCidr#Events
   */
  readonly events?: ByoipCidrEvent[];

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
  readonly value: string;

}

/**
 * @schema Accelerator
 */
export interface Accelerator {
  /**
   * @schema Accelerator#AcceleratorArn
   */
  readonly acceleratorArn?: string;

  /**
   * @schema Accelerator#Name
   */
  readonly name?: string;

  /**
   * @schema Accelerator#IpAddressType
   */
  readonly ipAddressType?: string;

  /**
   * @schema Accelerator#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Accelerator#IpSets
   */
  readonly ipSets?: IpSet[];

  /**
   * @schema Accelerator#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema Accelerator#Status
   */
  readonly status?: string;

  /**
   * @schema Accelerator#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Accelerator#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema EndpointConfiguration
 */
export interface EndpointConfiguration {
  /**
   * @schema EndpointConfiguration#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema EndpointConfiguration#Weight
   */
  readonly weight?: number;

  /**
   * @schema EndpointConfiguration#ClientIPPreservationEnabled
   */
  readonly clientIpPreservationEnabled?: boolean;

}

/**
 * @schema PortOverride
 */
export interface PortOverride {
  /**
   * @schema PortOverride#ListenerPort
   */
  readonly listenerPort?: number;

  /**
   * @schema PortOverride#EndpointPort
   */
  readonly endpointPort?: number;

}

/**
 * @schema EndpointGroup
 */
export interface EndpointGroup {
  /**
   * @schema EndpointGroup#EndpointGroupArn
   */
  readonly endpointGroupArn?: string;

  /**
   * @schema EndpointGroup#EndpointGroupRegion
   */
  readonly endpointGroupRegion?: string;

  /**
   * @schema EndpointGroup#EndpointDescriptions
   */
  readonly endpointDescriptions?: EndpointDescription[];

  /**
   * @schema EndpointGroup#TrafficDialPercentage
   */
  readonly trafficDialPercentage?: number;

  /**
   * @schema EndpointGroup#HealthCheckPort
   */
  readonly healthCheckPort?: number;

  /**
   * @schema EndpointGroup#HealthCheckProtocol
   */
  readonly healthCheckProtocol?: string;

  /**
   * @schema EndpointGroup#HealthCheckPath
   */
  readonly healthCheckPath?: string;

  /**
   * @schema EndpointGroup#HealthCheckIntervalSeconds
   */
  readonly healthCheckIntervalSeconds?: number;

  /**
   * @schema EndpointGroup#ThresholdCount
   */
  readonly thresholdCount?: number;

  /**
   * @schema EndpointGroup#PortOverrides
   */
  readonly portOverrides?: PortOverride[];

}

/**
 * @schema PortRange
 */
export interface PortRange {
  /**
   * @schema PortRange#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema PortRange#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema Listener
 */
export interface Listener {
  /**
   * @schema Listener#ListenerArn
   */
  readonly listenerArn?: string;

  /**
   * @schema Listener#PortRanges
   */
  readonly portRanges?: PortRange[];

  /**
   * @schema Listener#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Listener#ClientAffinity
   */
  readonly clientAffinity?: string;

}

/**
 * @schema AcceleratorAttributes
 */
export interface AcceleratorAttributes {
  /**
   * @schema AcceleratorAttributes#FlowLogsEnabled
   */
  readonly flowLogsEnabled?: boolean;

  /**
   * @schema AcceleratorAttributes#FlowLogsS3Bucket
   */
  readonly flowLogsS3Bucket?: string;

  /**
   * @schema AcceleratorAttributes#FlowLogsS3Prefix
   */
  readonly flowLogsS3Prefix?: string;

}

/**
 * @schema CidrAuthorizationContext
 */
export interface CidrAuthorizationContext {
  /**
   * @schema CidrAuthorizationContext#Message
   */
  readonly message: string;

  /**
   * @schema CidrAuthorizationContext#Signature
   */
  readonly signature: string;

}

/**
 * @schema ByoipCidrEvent
 */
export interface ByoipCidrEvent {
  /**
   * @schema ByoipCidrEvent#Message
   */
  readonly message?: string;

  /**
   * @schema ByoipCidrEvent#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema IpSet
 */
export interface IpSet {
  /**
   * @schema IpSet#IpFamily
   */
  readonly ipFamily?: string;

  /**
   * @schema IpSet#IpAddresses
   */
  readonly ipAddresses?: string[];

}

/**
 * @schema EndpointDescription
 */
export interface EndpointDescription {
  /**
   * @schema EndpointDescription#EndpointId
   */
  readonly endpointId?: string;

  /**
   * @schema EndpointDescription#Weight
   */
  readonly weight?: number;

  /**
   * @schema EndpointDescription#HealthState
   */
  readonly healthState?: string;

  /**
   * @schema EndpointDescription#HealthReason
   */
  readonly healthReason?: string;

  /**
   * @schema EndpointDescription#ClientIPPreservationEnabled
   */
  readonly clientIpPreservationEnabled?: boolean;

}
