/**
 * @schema Ec2AcceptReservedInstancesExchangeQuoteRequest
 */
export interface Ec2AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * @schema Ec2AcceptReservedInstancesExchangeQuoteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AcceptReservedInstancesExchangeQuoteRequest#ReservedInstanceIds
   */
  readonly reservedInstanceIds: string[];

  /**
   * @schema Ec2AcceptReservedInstancesExchangeQuoteRequest#TargetConfigurations
   */
  readonly targetConfigurations?: Ec2TargetConfigurationRequest[];

}

/**
 * @schema Ec2AcceptReservedInstancesExchangeQuoteResult
 */
export interface Ec2AcceptReservedInstancesExchangeQuoteResult {
  /**
   * @schema Ec2AcceptReservedInstancesExchangeQuoteResult#ExchangeId
   */
  readonly exchangeId?: string;

}

/**
 * @schema Ec2AcceptTransitGatewayPeeringAttachmentRequest
 */
export interface Ec2AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema Ec2AcceptTransitGatewayPeeringAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2AcceptTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AcceptTransitGatewayPeeringAttachmentResult
 */
export interface Ec2AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * @schema Ec2AcceptTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: Ec2TransitGatewayPeeringAttachment;

}

/**
 * @schema Ec2AcceptTransitGatewayVpcAttachmentRequest
 */
export interface Ec2AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * @schema Ec2AcceptTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2AcceptTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AcceptTransitGatewayVpcAttachmentResult
 */
export interface Ec2AcceptTransitGatewayVpcAttachmentResult {
  /**
   * @schema Ec2AcceptTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: Ec2TransitGatewayVpcAttachment;

}

/**
 * @schema Ec2AcceptVpcEndpointConnectionsRequest
 */
export interface Ec2AcceptVpcEndpointConnectionsRequest {
  /**
   * @schema Ec2AcceptVpcEndpointConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AcceptVpcEndpointConnectionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema Ec2AcceptVpcEndpointConnectionsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds: string[];

}

/**
 * @schema Ec2AcceptVpcEndpointConnectionsResult
 */
export interface Ec2AcceptVpcEndpointConnectionsResult {
  /**
   * @schema Ec2AcceptVpcEndpointConnectionsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2AcceptVpcPeeringConnectionRequest
 */
export interface Ec2AcceptVpcPeeringConnectionRequest {
  /**
   * @schema Ec2AcceptVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AcceptVpcPeeringConnectionRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2AcceptVpcPeeringConnectionResult
 */
export interface Ec2AcceptVpcPeeringConnectionResult {
  /**
   * @schema Ec2AcceptVpcPeeringConnectionResult#VpcPeeringConnection
   */
  readonly vpcPeeringConnection?: Ec2VpcPeeringConnection;

}

/**
 * @schema Ec2AdvertiseByoipCidrRequest
 */
export interface Ec2AdvertiseByoipCidrRequest {
  /**
   * @schema Ec2AdvertiseByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema Ec2AdvertiseByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AdvertiseByoipCidrResult
 */
export interface Ec2AdvertiseByoipCidrResult {
  /**
   * @schema Ec2AdvertiseByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: Ec2ByoipCidr;

}

/**
 * @schema Ec2AllocateAddressRequest
 */
export interface Ec2AllocateAddressRequest {
  /**
   * @schema Ec2AllocateAddressRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema Ec2AllocateAddressRequest#Address
   */
  readonly address?: string;

  /**
   * @schema Ec2AllocateAddressRequest#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema Ec2AllocateAddressRequest#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2AllocateAddressRequest#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema Ec2AllocateAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AllocateAddressResult
 */
export interface Ec2AllocateAddressResult {
  /**
   * @schema Ec2AllocateAddressResult#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2AllocateAddressResult#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2AllocateAddressResult#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema Ec2AllocateAddressResult#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2AllocateAddressResult#Domain
   */
  readonly domain?: string;

  /**
   * @schema Ec2AllocateAddressResult#CustomerOwnedIp
   */
  readonly customerOwnedIp?: string;

  /**
   * @schema Ec2AllocateAddressResult#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema Ec2AllocateAddressResult#CarrierIp
   */
  readonly carrierIp?: string;

}

/**
 * @schema Ec2AllocateHostsRequest
 */
export interface Ec2AllocateHostsRequest {
  /**
   * @schema Ec2AllocateHostsRequest#AutoPlacement
   */
  readonly autoPlacement?: string;

  /**
   * @schema Ec2AllocateHostsRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema Ec2AllocateHostsRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2AllocateHostsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2AllocateHostsRequest#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Ec2AllocateHostsRequest#Quantity
   */
  readonly quantity: number;

  /**
   * @schema Ec2AllocateHostsRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2AllocateHostsRequest#HostRecovery
   */
  readonly hostRecovery?: string;

}

/**
 * @schema Ec2AllocateHostsResult
 */
export interface Ec2AllocateHostsResult {
  /**
   * @schema Ec2AllocateHostsResult#HostIds
   */
  readonly hostIds?: string[];

}

/**
 * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkRequest
 */
export interface Ec2ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkResult
 */
export interface Ec2ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * @schema Ec2ApplySecurityGroupsToClientVpnTargetNetworkResult#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema Ec2AssignIpv6AddressesRequest
 */
export interface Ec2AssignIpv6AddressesRequest {
  /**
   * @schema Ec2AssignIpv6AddressesRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2AssignIpv6AddressesRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema Ec2AssignIpv6AddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema Ec2AssignIpv6AddressesResult
 */
export interface Ec2AssignIpv6AddressesResult {
  /**
   * @schema Ec2AssignIpv6AddressesResult#AssignedIpv6Addresses
   */
  readonly assignedIpv6Addresses?: string[];

  /**
   * @schema Ec2AssignIpv6AddressesResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * @schema Ec2AssignPrivateIpAddressesRequest
 */
export interface Ec2AssignPrivateIpAddressesRequest {
  /**
   * @schema Ec2AssignPrivateIpAddressesRequest#AllowReassignment
   */
  readonly allowReassignment?: boolean;

  /**
   * @schema Ec2AssignPrivateIpAddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2AssignPrivateIpAddressesRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses?: string[];

  /**
   * @schema Ec2AssignPrivateIpAddressesRequest#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

}

/**
 * @schema Ec2AssignPrivateIpAddressesResult
 */
export interface Ec2AssignPrivateIpAddressesResult {
  /**
   * @schema Ec2AssignPrivateIpAddressesResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2AssignPrivateIpAddressesResult#AssignedPrivateIpAddresses
   */
  readonly assignedPrivateIpAddresses?: Ec2AssignedPrivateIpAddress[];

}

/**
 * @schema Ec2AssociateAddressRequest
 */
export interface Ec2AssociateAddressRequest {
  /**
   * @schema Ec2AssociateAddressRequest#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2AssociateAddressRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2AssociateAddressRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2AssociateAddressRequest#AllowReassociation
   */
  readonly allowReassociation?: boolean;

  /**
   * @schema Ec2AssociateAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AssociateAddressRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2AssociateAddressRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema Ec2AssociateAddressResult
 */
export interface Ec2AssociateAddressResult {
  /**
   * @schema Ec2AssociateAddressResult#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema Ec2AssociateClientVpnTargetNetworkRequest
 */
export interface Ec2AssociateClientVpnTargetNetworkRequest {
  /**
   * @schema Ec2AssociateClientVpnTargetNetworkRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2AssociateClientVpnTargetNetworkRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema Ec2AssociateClientVpnTargetNetworkRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2AssociateClientVpnTargetNetworkRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AssociateClientVpnTargetNetworkResult
 */
export interface Ec2AssociateClientVpnTargetNetworkResult {
  /**
   * @schema Ec2AssociateClientVpnTargetNetworkResult#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2AssociateClientVpnTargetNetworkResult#Status
   */
  readonly status?: Ec2AssociationStatus;

}

/**
 * @schema Ec2AssociateDhcpOptionsRequest
 */
export interface Ec2AssociateDhcpOptionsRequest {
  /**
   * @schema Ec2AssociateDhcpOptionsRequest#DhcpOptionsId
   */
  readonly dhcpOptionsId: string;

  /**
   * @schema Ec2AssociateDhcpOptionsRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2AssociateDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AssociateEnclaveCertificateIamRoleRequest
 */
export interface Ec2AssociateEnclaveCertificateIamRoleRequest {
  /**
   * @schema Ec2AssociateEnclaveCertificateIamRoleRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Ec2AssociateEnclaveCertificateIamRoleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Ec2AssociateEnclaveCertificateIamRoleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AssociateEnclaveCertificateIamRoleResult
 */
export interface Ec2AssociateEnclaveCertificateIamRoleResult {
  /**
   * @schema Ec2AssociateEnclaveCertificateIamRoleResult#CertificateS3BucketName
   */
  readonly certificateS3BucketName?: string;

  /**
   * @schema Ec2AssociateEnclaveCertificateIamRoleResult#CertificateS3ObjectKey
   */
  readonly certificateS3ObjectKey?: string;

  /**
   * @schema Ec2AssociateEnclaveCertificateIamRoleResult#EncryptionKmsKeyId
   */
  readonly encryptionKmsKeyId?: string;

}

/**
 * @schema Ec2AssociateIamInstanceProfileRequest
 */
export interface Ec2AssociateIamInstanceProfileRequest {
  /**
   * @schema Ec2AssociateIamInstanceProfileRequest#IamInstanceProfile
   */
  readonly iamInstanceProfile: Ec2IamInstanceProfileSpecification;

  /**
   * @schema Ec2AssociateIamInstanceProfileRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema Ec2AssociateIamInstanceProfileResult
 */
export interface Ec2AssociateIamInstanceProfileResult {
  /**
   * @schema Ec2AssociateIamInstanceProfileResult#IamInstanceProfileAssociation
   */
  readonly iamInstanceProfileAssociation?: Ec2IamInstanceProfileAssociation;

}

/**
 * @schema Ec2AssociateRouteTableRequest
 */
export interface Ec2AssociateRouteTableRequest {
  /**
   * @schema Ec2AssociateRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AssociateRouteTableRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema Ec2AssociateRouteTableRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2AssociateRouteTableRequest#GatewayId
   */
  readonly gatewayId?: string;

}

/**
 * @schema Ec2AssociateRouteTableResult
 */
export interface Ec2AssociateRouteTableResult {
  /**
   * @schema Ec2AssociateRouteTableResult#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2AssociateRouteTableResult#AssociationState
   */
  readonly associationState?: Ec2RouteTableAssociationState;

}

/**
 * @schema Ec2AssociateSubnetCidrBlockRequest
 */
export interface Ec2AssociateSubnetCidrBlockRequest {
  /**
   * @schema Ec2AssociateSubnetCidrBlockRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock: string;

  /**
   * @schema Ec2AssociateSubnetCidrBlockRequest#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema Ec2AssociateSubnetCidrBlockResult
 */
export interface Ec2AssociateSubnetCidrBlockResult {
  /**
   * @schema Ec2AssociateSubnetCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: Ec2SubnetIpv6CidrBlockAssociation;

  /**
   * @schema Ec2AssociateSubnetCidrBlockResult#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema Ec2AssociateTransitGatewayMulticastDomainRequest
 */
export interface Ec2AssociateTransitGatewayMulticastDomainRequest {
  /**
   * @schema Ec2AssociateTransitGatewayMulticastDomainRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2AssociateTransitGatewayMulticastDomainRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2AssociateTransitGatewayMulticastDomainRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Ec2AssociateTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AssociateTransitGatewayMulticastDomainResult
 */
export interface Ec2AssociateTransitGatewayMulticastDomainResult {
  /**
   * @schema Ec2AssociateTransitGatewayMulticastDomainResult#Associations
   */
  readonly associations?: Ec2TransitGatewayMulticastDomainAssociations;

}

/**
 * @schema Ec2AssociateTransitGatewayRouteTableRequest
 */
export interface Ec2AssociateTransitGatewayRouteTableRequest {
  /**
   * @schema Ec2AssociateTransitGatewayRouteTableRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2AssociateTransitGatewayRouteTableRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2AssociateTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AssociateTransitGatewayRouteTableResult
 */
export interface Ec2AssociateTransitGatewayRouteTableResult {
  /**
   * @schema Ec2AssociateTransitGatewayRouteTableResult#Association
   */
  readonly association?: Ec2TransitGatewayAssociation;

}

/**
 * @schema Ec2AssociateVpcCidrBlockRequest
 */
export interface Ec2AssociateVpcCidrBlockRequest {
  /**
   * @schema Ec2AssociateVpcCidrBlockRequest#AmazonProvidedIpv6CidrBlock
   */
  readonly amazonProvidedIpv6CidrBlock?: boolean;

  /**
   * @schema Ec2AssociateVpcCidrBlockRequest#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2AssociateVpcCidrBlockRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2AssociateVpcCidrBlockRequest#Ipv6CidrBlockNetworkBorderGroup
   */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * @schema Ec2AssociateVpcCidrBlockRequest#Ipv6Pool
   */
  readonly ipv6Pool?: string;

  /**
   * @schema Ec2AssociateVpcCidrBlockRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

}

/**
 * @schema Ec2AssociateVpcCidrBlockResult
 */
export interface Ec2AssociateVpcCidrBlockResult {
  /**
   * @schema Ec2AssociateVpcCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: Ec2VpcIpv6CidrBlockAssociation;

  /**
   * @schema Ec2AssociateVpcCidrBlockResult#CidrBlockAssociation
   */
  readonly cidrBlockAssociation?: Ec2VpcCidrBlockAssociation;

  /**
   * @schema Ec2AssociateVpcCidrBlockResult#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2AttachClassicLinkVpcRequest
 */
export interface Ec2AttachClassicLinkVpcRequest {
  /**
   * @schema Ec2AttachClassicLinkVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AttachClassicLinkVpcRequest#Groups
   */
  readonly groups: string[];

  /**
   * @schema Ec2AttachClassicLinkVpcRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2AttachClassicLinkVpcRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2AttachClassicLinkVpcResult
 */
export interface Ec2AttachClassicLinkVpcResult {
  /**
   * @schema Ec2AttachClassicLinkVpcResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2AttachInternetGatewayRequest
 */
export interface Ec2AttachInternetGatewayRequest {
  /**
   * @schema Ec2AttachInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AttachInternetGatewayRequest#InternetGatewayId
   */
  readonly internetGatewayId: string;

  /**
   * @schema Ec2AttachInternetGatewayRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2AttachNetworkInterfaceRequest
 */
export interface Ec2AttachNetworkInterfaceRequest {
  /**
   * @schema Ec2AttachNetworkInterfaceRequest#DeviceIndex
   */
  readonly deviceIndex: number;

  /**
   * @schema Ec2AttachNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AttachNetworkInterfaceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2AttachNetworkInterfaceRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2AttachNetworkInterfaceRequest#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema Ec2AttachNetworkInterfaceResult
 */
export interface Ec2AttachNetworkInterfaceResult {
  /**
   * @schema Ec2AttachNetworkInterfaceResult#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema Ec2AttachNetworkInterfaceResult#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema Ec2AttachVolumeRequest
 */
export interface Ec2AttachVolumeRequest {
  /**
   * @schema Ec2AttachVolumeRequest#Device
   */
  readonly device: string;

  /**
   * @schema Ec2AttachVolumeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2AttachVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2AttachVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2VolumeAttachment
 */
export interface Ec2VolumeAttachment {
  /**
   * @schema Ec2VolumeAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema Ec2VolumeAttachment#Device
   */
  readonly device?: string;

  /**
   * @schema Ec2VolumeAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2VolumeAttachment#State
   */
  readonly state?: string;

  /**
   * @schema Ec2VolumeAttachment#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Ec2VolumeAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

}

/**
 * @schema Ec2AttachVpnGatewayRequest
 */
export interface Ec2AttachVpnGatewayRequest {
  /**
   * @schema Ec2AttachVpnGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2AttachVpnGatewayRequest#VpnGatewayId
   */
  readonly vpnGatewayId: string;

  /**
   * @schema Ec2AttachVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AttachVpnGatewayResult
 */
export interface Ec2AttachVpnGatewayResult {
  /**
   * @schema Ec2AttachVpnGatewayResult#VpcAttachment
   */
  readonly vpcAttachment?: Ec2VpcAttachment;

}

/**
 * @schema Ec2AuthorizeClientVpnIngressRequest
 */
export interface Ec2AuthorizeClientVpnIngressRequest {
  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#TargetNetworkCidr
   */
  readonly targetNetworkCidr: string;

  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#AccessGroupId
   */
  readonly accessGroupId?: string;

  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#AuthorizeAllGroups
   */
  readonly authorizeAllGroups?: boolean;

  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2AuthorizeClientVpnIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2AuthorizeClientVpnIngressResult
 */
export interface Ec2AuthorizeClientVpnIngressResult {
  /**
   * @schema Ec2AuthorizeClientVpnIngressResult#Status
   */
  readonly status?: Ec2ClientVpnAuthorizationRuleStatus;

}

/**
 * @schema Ec2AuthorizeSecurityGroupEgressRequest
 */
export interface Ec2AuthorizeSecurityGroupEgressRequest {
  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#IpPermissions
   */
  readonly ipPermissions?: Ec2IpPermission[];

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupEgressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

}

/**
 * @schema Ec2AuthorizeSecurityGroupIngressRequest
 */
export interface Ec2AuthorizeSecurityGroupIngressRequest {
  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#IpPermissions
   */
  readonly ipPermissions?: Ec2IpPermission[];

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema Ec2AuthorizeSecurityGroupIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2BundleInstanceRequest
 */
export interface Ec2BundleInstanceRequest {
  /**
   * @schema Ec2BundleInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2BundleInstanceRequest#Storage
   */
  readonly storage: Ec2Storage;

  /**
   * @schema Ec2BundleInstanceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2BundleInstanceResult
 */
export interface Ec2BundleInstanceResult {
  /**
   * @schema Ec2BundleInstanceResult#BundleTask
   */
  readonly bundleTask?: Ec2BundleTask;

}

/**
 * @schema Ec2CancelBundleTaskRequest
 */
export interface Ec2CancelBundleTaskRequest {
  /**
   * @schema Ec2CancelBundleTaskRequest#BundleId
   */
  readonly bundleId: string;

  /**
   * @schema Ec2CancelBundleTaskRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CancelBundleTaskResult
 */
export interface Ec2CancelBundleTaskResult {
  /**
   * @schema Ec2CancelBundleTaskResult#BundleTask
   */
  readonly bundleTask?: Ec2BundleTask;

}

/**
 * @schema Ec2CancelCapacityReservationRequest
 */
export interface Ec2CancelCapacityReservationRequest {
  /**
   * @schema Ec2CancelCapacityReservationRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema Ec2CancelCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CancelCapacityReservationResult
 */
export interface Ec2CancelCapacityReservationResult {
  /**
   * @schema Ec2CancelCapacityReservationResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2CancelConversionRequest
 */
export interface Ec2CancelConversionRequest {
  /**
   * @schema Ec2CancelConversionRequest#ConversionTaskId
   */
  readonly conversionTaskId: string;

  /**
   * @schema Ec2CancelConversionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CancelConversionRequest#ReasonMessage
   */
  readonly reasonMessage?: string;

}

/**
 * @schema Ec2CancelExportTaskRequest
 */
export interface Ec2CancelExportTaskRequest {
  /**
   * @schema Ec2CancelExportTaskRequest#ExportTaskId
   */
  readonly exportTaskId: string;

}

/**
 * @schema Ec2CancelImportTaskRequest
 */
export interface Ec2CancelImportTaskRequest {
  /**
   * @schema Ec2CancelImportTaskRequest#CancelReason
   */
  readonly cancelReason?: string;

  /**
   * @schema Ec2CancelImportTaskRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CancelImportTaskRequest#ImportTaskId
   */
  readonly importTaskId?: string;

}

/**
 * @schema Ec2CancelImportTaskResult
 */
export interface Ec2CancelImportTaskResult {
  /**
   * @schema Ec2CancelImportTaskResult#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema Ec2CancelImportTaskResult#PreviousState
   */
  readonly previousState?: string;

  /**
   * @schema Ec2CancelImportTaskResult#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2CancelReservedInstancesListingRequest
 */
export interface Ec2CancelReservedInstancesListingRequest {
  /**
   * @schema Ec2CancelReservedInstancesListingRequest#ReservedInstancesListingId
   */
  readonly reservedInstancesListingId: string;

}

/**
 * @schema Ec2CancelReservedInstancesListingResult
 */
export interface Ec2CancelReservedInstancesListingResult {
  /**
   * @schema Ec2CancelReservedInstancesListingResult#ReservedInstancesListings
   */
  readonly reservedInstancesListings?: Ec2ReservedInstancesListing[];

}

/**
 * @schema Ec2CancelSpotFleetRequestsRequest
 */
export interface Ec2CancelSpotFleetRequestsRequest {
  /**
   * @schema Ec2CancelSpotFleetRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CancelSpotFleetRequestsRequest#SpotFleetRequestIds
   */
  readonly spotFleetRequestIds: string[];

  /**
   * @schema Ec2CancelSpotFleetRequestsRequest#TerminateInstances
   */
  readonly terminateInstances: boolean;

}

/**
 * @schema Ec2CancelSpotFleetRequestsResponse
 */
export interface Ec2CancelSpotFleetRequestsResponse {
  /**
   * @schema Ec2CancelSpotFleetRequestsResponse#SuccessfulFleetRequests
   */
  readonly successfulFleetRequests?: Ec2CancelSpotFleetRequestsSuccessItem[];

  /**
   * @schema Ec2CancelSpotFleetRequestsResponse#UnsuccessfulFleetRequests
   */
  readonly unsuccessfulFleetRequests?: Ec2CancelSpotFleetRequestsErrorItem[];

}

/**
 * @schema Ec2CancelSpotInstanceRequestsRequest
 */
export interface Ec2CancelSpotInstanceRequestsRequest {
  /**
   * @schema Ec2CancelSpotInstanceRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CancelSpotInstanceRequestsRequest#SpotInstanceRequestIds
   */
  readonly spotInstanceRequestIds: string[];

}

/**
 * @schema Ec2CancelSpotInstanceRequestsResult
 */
export interface Ec2CancelSpotInstanceRequestsResult {
  /**
   * @schema Ec2CancelSpotInstanceRequestsResult#CancelledSpotInstanceRequests
   */
  readonly cancelledSpotInstanceRequests?: Ec2CancelledSpotInstanceRequest[];

}

/**
 * @schema Ec2ConfirmProductInstanceRequest
 */
export interface Ec2ConfirmProductInstanceRequest {
  /**
   * @schema Ec2ConfirmProductInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2ConfirmProductInstanceRequest#ProductCode
   */
  readonly productCode: string;

  /**
   * @schema Ec2ConfirmProductInstanceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ConfirmProductInstanceResult
 */
export interface Ec2ConfirmProductInstanceResult {
  /**
   * @schema Ec2ConfirmProductInstanceResult#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2ConfirmProductInstanceResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2CopyFpgaImageRequest
 */
export interface Ec2CopyFpgaImageRequest {
  /**
   * @schema Ec2CopyFpgaImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CopyFpgaImageRequest#SourceFpgaImageId
   */
  readonly sourceFpgaImageId: string;

  /**
   * @schema Ec2CopyFpgaImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CopyFpgaImageRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2CopyFpgaImageRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema Ec2CopyFpgaImageRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CopyFpgaImageResult
 */
export interface Ec2CopyFpgaImageResult {
  /**
   * @schema Ec2CopyFpgaImageResult#FpgaImageId
   */
  readonly fpgaImageId?: string;

}

/**
 * @schema Ec2CopyImageRequest
 */
export interface Ec2CopyImageRequest {
  /**
   * @schema Ec2CopyImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CopyImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CopyImageRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2CopyImageRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2CopyImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema Ec2CopyImageRequest#SourceImageId
   */
  readonly sourceImageId: string;

  /**
   * @schema Ec2CopyImageRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema Ec2CopyImageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CopyImageResult
 */
export interface Ec2CopyImageResult {
  /**
   * @schema Ec2CopyImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema Ec2CopySnapshotRequest
 */
export interface Ec2CopySnapshotRequest {
  /**
   * @schema Ec2CopySnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CopySnapshotRequest#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema Ec2CopySnapshotRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2CopySnapshotRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2CopySnapshotRequest#PresignedUrl
   */
  readonly presignedUrl?: string;

  /**
   * @schema Ec2CopySnapshotRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema Ec2CopySnapshotRequest#SourceSnapshotId
   */
  readonly sourceSnapshotId: string;

  /**
   * @schema Ec2CopySnapshotRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CopySnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CopySnapshotResult
 */
export interface Ec2CopySnapshotResult {
  /**
   * @schema Ec2CopySnapshotResult#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2CopySnapshotResult#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2CreateCapacityReservationRequest
 */
export interface Ec2CreateCapacityReservationRequest {
  /**
   * @schema Ec2CreateCapacityReservationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#InstancePlatform
   */
  readonly instancePlatform: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema Ec2CreateCapacityReservationRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2CreateCapacityReservationRequest#EphemeralStorage
   */
  readonly ephemeralStorage?: boolean;

  /**
   * @schema Ec2CreateCapacityReservationRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#EndDateType
   */
  readonly endDateType?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#InstanceMatchCriteria
   */
  readonly instanceMatchCriteria?: string;

  /**
   * @schema Ec2CreateCapacityReservationRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateCapacityReservationResult
 */
export interface Ec2CreateCapacityReservationResult {
  /**
   * @schema Ec2CreateCapacityReservationResult#CapacityReservation
   */
  readonly capacityReservation?: Ec2CapacityReservation;

}

/**
 * @schema Ec2CreateCarrierGatewayRequest
 */
export interface Ec2CreateCarrierGatewayRequest {
  /**
   * @schema Ec2CreateCarrierGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateCarrierGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateCarrierGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateCarrierGatewayRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateCarrierGatewayResult
 */
export interface Ec2CreateCarrierGatewayResult {
  /**
   * @schema Ec2CreateCarrierGatewayResult#CarrierGateway
   */
  readonly carrierGateway?: Ec2CarrierGateway;

}

/**
 * @schema Ec2CreateClientVpnEndpointRequest
 */
export interface Ec2CreateClientVpnEndpointRequest {
  /**
   * @schema Ec2CreateClientVpnEndpointRequest#ClientCidrBlock
   */
  readonly clientCidrBlock: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#ServerCertificateArn
   */
  readonly serverCertificateArn: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#AuthenticationOptions
   */
  readonly authenticationOptions: Ec2ClientVpnAuthenticationRequest[];

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#ConnectionLogOptions
   */
  readonly connectionLogOptions: Ec2ConnectionLogOptions;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#DnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#TransportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#VpnPort
   */
  readonly vpnPort?: number;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#SplitTunnel
   */
  readonly splitTunnel?: boolean;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#SelfServicePortal
   */
  readonly selfServicePortal?: string;

  /**
   * @schema Ec2CreateClientVpnEndpointRequest#ClientConnectOptions
   */
  readonly clientConnectOptions?: Ec2ClientConnectOptions;

}

/**
 * @schema Ec2CreateClientVpnEndpointResult
 */
export interface Ec2CreateClientVpnEndpointResult {
  /**
   * @schema Ec2CreateClientVpnEndpointResult#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2CreateClientVpnEndpointResult#Status
   */
  readonly status?: Ec2ClientVpnEndpointStatus;

  /**
   * @schema Ec2CreateClientVpnEndpointResult#DnsName
   */
  readonly dnsName?: string;

}

/**
 * @schema Ec2CreateClientVpnRouteRequest
 */
export interface Ec2CreateClientVpnRouteRequest {
  /**
   * @schema Ec2CreateClientVpnRouteRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2CreateClientVpnRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2CreateClientVpnRouteRequest#TargetVpcSubnetId
   */
  readonly targetVpcSubnetId: string;

  /**
   * @schema Ec2CreateClientVpnRouteRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateClientVpnRouteRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateClientVpnRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateClientVpnRouteResult
 */
export interface Ec2CreateClientVpnRouteResult {
  /**
   * @schema Ec2CreateClientVpnRouteResult#Status
   */
  readonly status?: Ec2ClientVpnRouteStatus;

}

/**
 * @schema Ec2CreateCustomerGatewayRequest
 */
export interface Ec2CreateCustomerGatewayRequest {
  /**
   * @schema Ec2CreateCustomerGatewayRequest#BgpAsn
   */
  readonly bgpAsn: number;

  /**
   * @schema Ec2CreateCustomerGatewayRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2CreateCustomerGatewayRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Ec2CreateCustomerGatewayRequest#Type
   */
  readonly type: string;

  /**
   * @schema Ec2CreateCustomerGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateCustomerGatewayRequest#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2CreateCustomerGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateCustomerGatewayResult
 */
export interface Ec2CreateCustomerGatewayResult {
  /**
   * @schema Ec2CreateCustomerGatewayResult#CustomerGateway
   */
  readonly customerGateway?: Ec2CustomerGateway;

}

/**
 * @schema Ec2CreateDefaultSubnetRequest
 */
export interface Ec2CreateDefaultSubnetRequest {
  /**
   * @schema Ec2CreateDefaultSubnetRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema Ec2CreateDefaultSubnetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateDefaultSubnetResult
 */
export interface Ec2CreateDefaultSubnetResult {
  /**
   * @schema Ec2CreateDefaultSubnetResult#Subnet
   */
  readonly subnet?: Ec2Subnet;

}

/**
 * @schema Ec2CreateDefaultVpcRequest
 */
export interface Ec2CreateDefaultVpcRequest {
  /**
   * @schema Ec2CreateDefaultVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateDefaultVpcResult
 */
export interface Ec2CreateDefaultVpcResult {
  /**
   * @schema Ec2CreateDefaultVpcResult#Vpc
   */
  readonly vpc?: Ec2Vpc;

}

/**
 * @schema Ec2CreateDhcpOptionsRequest
 */
export interface Ec2CreateDhcpOptionsRequest {
  /**
   * @schema Ec2CreateDhcpOptionsRequest#DhcpConfigurations
   */
  readonly dhcpConfigurations: Ec2NewDhcpConfiguration[];

  /**
   * @schema Ec2CreateDhcpOptionsRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateDhcpOptionsResult
 */
export interface Ec2CreateDhcpOptionsResult {
  /**
   * @schema Ec2CreateDhcpOptionsResult#DhcpOptions
   */
  readonly dhcpOptions?: Ec2DhcpOptions;

}

/**
 * @schema Ec2CreateEgressOnlyInternetGatewayRequest
 */
export interface Ec2CreateEgressOnlyInternetGatewayRequest {
  /**
   * @schema Ec2CreateEgressOnlyInternetGatewayRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateEgressOnlyInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateEgressOnlyInternetGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateEgressOnlyInternetGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateEgressOnlyInternetGatewayResult
 */
export interface Ec2CreateEgressOnlyInternetGatewayResult {
  /**
   * @schema Ec2CreateEgressOnlyInternetGatewayResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateEgressOnlyInternetGatewayResult#EgressOnlyInternetGateway
   */
  readonly egressOnlyInternetGateway?: Ec2EgressOnlyInternetGateway;

}

/**
 * @schema Ec2CreateFleetRequest
 */
export interface Ec2CreateFleetRequest {
  /**
   * @schema Ec2CreateFleetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateFleetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateFleetRequest#SpotOptions
   */
  readonly spotOptions?: Ec2SpotOptionsRequest;

  /**
   * @schema Ec2CreateFleetRequest#OnDemandOptions
   */
  readonly onDemandOptions?: Ec2OnDemandOptionsRequest;

  /**
   * @schema Ec2CreateFleetRequest#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema Ec2CreateFleetRequest#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs: Ec2FleetLaunchTemplateConfigRequest[];

  /**
   * @schema Ec2CreateFleetRequest#TargetCapacitySpecification
   */
  readonly targetCapacitySpecification: Ec2TargetCapacitySpecificationRequest;

  /**
   * @schema Ec2CreateFleetRequest#TerminateInstancesWithExpiration
   */
  readonly terminateInstancesWithExpiration?: boolean;

  /**
   * @schema Ec2CreateFleetRequest#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2CreateFleetRequest#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Ec2CreateFleetRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2CreateFleetRequest#ReplaceUnhealthyInstances
   */
  readonly replaceUnhealthyInstances?: boolean;

  /**
   * @schema Ec2CreateFleetRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateFleetResult
 */
export interface Ec2CreateFleetResult {
  /**
   * @schema Ec2CreateFleetResult#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema Ec2CreateFleetResult#Errors
   */
  readonly errors?: Ec2CreateFleetError[];

  /**
   * @schema Ec2CreateFleetResult#Instances
   */
  readonly instances?: Ec2CreateFleetInstance[];

}

/**
 * @schema Ec2CreateFlowLogsRequest
 */
export interface Ec2CreateFlowLogsRequest {
  /**
   * @schema Ec2CreateFlowLogsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateFlowLogsRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#DeliverLogsPermissionArn
   */
  readonly deliverLogsPermissionArn?: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#ResourceIds
   */
  readonly resourceIds: string[];

  /**
   * @schema Ec2CreateFlowLogsRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#TrafficType
   */
  readonly trafficType: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#LogDestinationType
   */
  readonly logDestinationType?: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#LogDestination
   */
  readonly logDestination?: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#LogFormat
   */
  readonly logFormat?: string;

  /**
   * @schema Ec2CreateFlowLogsRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateFlowLogsRequest#MaxAggregationInterval
   */
  readonly maxAggregationInterval?: number;

}

/**
 * @schema Ec2CreateFlowLogsResult
 */
export interface Ec2CreateFlowLogsResult {
  /**
   * @schema Ec2CreateFlowLogsResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateFlowLogsResult#FlowLogIds
   */
  readonly flowLogIds?: string[];

  /**
   * @schema Ec2CreateFlowLogsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2CreateFpgaImageRequest
 */
export interface Ec2CreateFpgaImageRequest {
  /**
   * @schema Ec2CreateFpgaImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateFpgaImageRequest#InputStorageLocation
   */
  readonly inputStorageLocation: Ec2StorageLocation;

  /**
   * @schema Ec2CreateFpgaImageRequest#LogsStorageLocation
   */
  readonly logsStorageLocation?: Ec2StorageLocation;

  /**
   * @schema Ec2CreateFpgaImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateFpgaImageRequest#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2CreateFpgaImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateFpgaImageRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateFpgaImageResult
 */
export interface Ec2CreateFpgaImageResult {
  /**
   * @schema Ec2CreateFpgaImageResult#FpgaImageId
   */
  readonly fpgaImageId?: string;

  /**
   * @schema Ec2CreateFpgaImageResult#FpgaImageGlobalId
   */
  readonly fpgaImageGlobalId?: string;

}

/**
 * @schema Ec2CreateImageRequest
 */
export interface Ec2CreateImageRequest {
  /**
   * @schema Ec2CreateImageRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2CreateImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateImageRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2CreateImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema Ec2CreateImageRequest#NoReboot
   */
  readonly noReboot?: boolean;

}

/**
 * @schema Ec2CreateImageResult
 */
export interface Ec2CreateImageResult {
  /**
   * @schema Ec2CreateImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema Ec2CreateInstanceExportTaskRequest
 */
export interface Ec2CreateInstanceExportTaskRequest {
  /**
   * @schema Ec2CreateInstanceExportTaskRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateInstanceExportTaskRequest#ExportToS3Task
   */
  readonly exportToS3Task: Ec2ExportToS3TaskSpecification;

  /**
   * @schema Ec2CreateInstanceExportTaskRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2CreateInstanceExportTaskRequest#TargetEnvironment
   */
  readonly targetEnvironment: string;

  /**
   * @schema Ec2CreateInstanceExportTaskRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateInstanceExportTaskResult
 */
export interface Ec2CreateInstanceExportTaskResult {
  /**
   * @schema Ec2CreateInstanceExportTaskResult#ExportTask
   */
  readonly exportTask?: Ec2ExportTask;

}

/**
 * @schema Ec2CreateInternetGatewayRequest
 */
export interface Ec2CreateInternetGatewayRequest {
  /**
   * @schema Ec2CreateInternetGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateInternetGatewayResult
 */
export interface Ec2CreateInternetGatewayResult {
  /**
   * @schema Ec2CreateInternetGatewayResult#InternetGateway
   */
  readonly internetGateway?: Ec2InternetGateway;

}

/**
 * @schema Ec2CreateKeyPairRequest
 */
export interface Ec2CreateKeyPairRequest {
  /**
   * @schema Ec2CreateKeyPairRequest#KeyName
   */
  readonly keyName: string;

  /**
   * @schema Ec2CreateKeyPairRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateKeyPairRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2KeyPair
 */
export interface Ec2KeyPair {
  /**
   * @schema Ec2KeyPair#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema Ec2KeyPair#KeyMaterial
   */
  readonly keyMaterial?: string;

  /**
   * @schema Ec2KeyPair#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2KeyPair#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema Ec2KeyPair#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2CreateLaunchTemplateRequest
 */
export interface Ec2CreateLaunchTemplateRequest {
  /**
   * @schema Ec2CreateLaunchTemplateRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateLaunchTemplateRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateLaunchTemplateRequest#LaunchTemplateName
   */
  readonly launchTemplateName: string;

  /**
   * @schema Ec2CreateLaunchTemplateRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema Ec2CreateLaunchTemplateRequest#LaunchTemplateData
   */
  readonly launchTemplateData: Ec2RequestLaunchTemplateData;

  /**
   * @schema Ec2CreateLaunchTemplateRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateLaunchTemplateResult
 */
export interface Ec2CreateLaunchTemplateResult {
  /**
   * @schema Ec2CreateLaunchTemplateResult#LaunchTemplate
   */
  readonly launchTemplate?: Ec2LaunchTemplate;

  /**
   * @schema Ec2CreateLaunchTemplateResult#Warning
   */
  readonly warning?: Ec2ValidationWarning;

}

/**
 * @schema Ec2CreateLaunchTemplateVersionRequest
 */
export interface Ec2CreateLaunchTemplateVersionRequest {
  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema Ec2CreateLaunchTemplateVersionRequest#LaunchTemplateData
   */
  readonly launchTemplateData: Ec2RequestLaunchTemplateData;

}

/**
 * @schema Ec2CreateLaunchTemplateVersionResult
 */
export interface Ec2CreateLaunchTemplateVersionResult {
  /**
   * @schema Ec2CreateLaunchTemplateVersionResult#LaunchTemplateVersion
   */
  readonly launchTemplateVersion?: Ec2LaunchTemplateVersion;

  /**
   * @schema Ec2CreateLaunchTemplateVersionResult#Warning
   */
  readonly warning?: Ec2ValidationWarning;

}

/**
 * @schema Ec2CreateLocalGatewayRouteRequest
 */
export interface Ec2CreateLocalGatewayRouteRequest {
  /**
   * @schema Ec2CreateLocalGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2CreateLocalGatewayRouteRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema Ec2CreateLocalGatewayRouteRequest#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId: string;

  /**
   * @schema Ec2CreateLocalGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateLocalGatewayRouteResult
 */
export interface Ec2CreateLocalGatewayRouteResult {
  /**
   * @schema Ec2CreateLocalGatewayRouteResult#Route
   */
  readonly route?: Ec2LocalGatewayRoute;

}

/**
 * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationRequest
 */
export interface Ec2CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationResult
 */
export interface Ec2CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @schema Ec2CreateLocalGatewayRouteTableVpcAssociationResult#LocalGatewayRouteTableVpcAssociation
   */
  readonly localGatewayRouteTableVpcAssociation?: Ec2LocalGatewayRouteTableVpcAssociation;

}

/**
 * @schema Ec2CreateManagedPrefixListRequest
 */
export interface Ec2CreateManagedPrefixListRequest {
  /**
   * @schema Ec2CreateManagedPrefixListRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateManagedPrefixListRequest#PrefixListName
   */
  readonly prefixListName: string;

  /**
   * @schema Ec2CreateManagedPrefixListRequest#Entries
   */
  readonly entries?: Ec2AddPrefixListEntry[];

  /**
   * @schema Ec2CreateManagedPrefixListRequest#MaxEntries
   */
  readonly maxEntries: number;

  /**
   * @schema Ec2CreateManagedPrefixListRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateManagedPrefixListRequest#AddressFamily
   */
  readonly addressFamily: string;

  /**
   * @schema Ec2CreateManagedPrefixListRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateManagedPrefixListResult
 */
export interface Ec2CreateManagedPrefixListResult {
  /**
   * @schema Ec2CreateManagedPrefixListResult#PrefixList
   */
  readonly prefixList?: Ec2ManagedPrefixList;

}

/**
 * @schema Ec2CreateNatGatewayRequest
 */
export interface Ec2CreateNatGatewayRequest {
  /**
   * @schema Ec2CreateNatGatewayRequest#AllocationId
   */
  readonly allocationId: string;

  /**
   * @schema Ec2CreateNatGatewayRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateNatGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateNatGatewayRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema Ec2CreateNatGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateNatGatewayResult
 */
export interface Ec2CreateNatGatewayResult {
  /**
   * @schema Ec2CreateNatGatewayResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateNatGatewayResult#NatGateway
   */
  readonly natGateway?: Ec2NatGateway;

}

/**
 * @schema Ec2CreateNetworkAclRequest
 */
export interface Ec2CreateNetworkAclRequest {
  /**
   * @schema Ec2CreateNetworkAclRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateNetworkAclRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateNetworkAclRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateNetworkAclResult
 */
export interface Ec2CreateNetworkAclResult {
  /**
   * @schema Ec2CreateNetworkAclResult#NetworkAcl
   */
  readonly networkAcl?: Ec2NetworkAcl;

}

/**
 * @schema Ec2CreateNetworkAclEntryRequest
 */
export interface Ec2CreateNetworkAclEntryRequest {
  /**
   * @schema Ec2CreateNetworkAclEntryRequest#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#Egress
   */
  readonly egress: boolean;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#IcmpTypeCode
   */
  readonly icmpTypeCode?: Ec2IcmpTypeCode;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#NetworkAclId
   */
  readonly networkAclId: string;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#PortRange
   */
  readonly portRange?: Ec2PortRange;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#RuleAction
   */
  readonly ruleAction: string;

  /**
   * @schema Ec2CreateNetworkAclEntryRequest#RuleNumber
   */
  readonly ruleNumber: number;

}

/**
 * @schema Ec2CreateNetworkInterfaceRequest
 */
export interface Ec2CreateNetworkInterfaceRequest {
  /**
   * @schema Ec2CreateNetworkInterfaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2InstanceIpv6Address[];

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses?: Ec2PrivateIpAddressSpecification[];

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema Ec2CreateNetworkInterfaceRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateNetworkInterfaceResult
 */
export interface Ec2CreateNetworkInterfaceResult {
  /**
   * @schema Ec2CreateNetworkInterfaceResult#NetworkInterface
   */
  readonly networkInterface?: Ec2NetworkInterface;

}

/**
 * @schema Ec2CreateNetworkInterfacePermissionRequest
 */
export interface Ec2CreateNetworkInterfacePermissionRequest {
  /**
   * @schema Ec2CreateNetworkInterfacePermissionRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2CreateNetworkInterfacePermissionRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema Ec2CreateNetworkInterfacePermissionRequest#AwsService
   */
  readonly awsService?: string;

  /**
   * @schema Ec2CreateNetworkInterfacePermissionRequest#Permission
   */
  readonly permission: string;

  /**
   * @schema Ec2CreateNetworkInterfacePermissionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateNetworkInterfacePermissionResult
 */
export interface Ec2CreateNetworkInterfacePermissionResult {
  /**
   * @schema Ec2CreateNetworkInterfacePermissionResult#InterfacePermission
   */
  readonly interfacePermission?: Ec2NetworkInterfacePermission;

}

/**
 * @schema Ec2CreatePlacementGroupRequest
 */
export interface Ec2CreatePlacementGroupRequest {
  /**
   * @schema Ec2CreatePlacementGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreatePlacementGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2CreatePlacementGroupRequest#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema Ec2CreatePlacementGroupRequest#PartitionCount
   */
  readonly partitionCount?: number;

  /**
   * @schema Ec2CreatePlacementGroupRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreatePlacementGroupResult
 */
export interface Ec2CreatePlacementGroupResult {
  /**
   * @schema Ec2CreatePlacementGroupResult#PlacementGroup
   */
  readonly placementGroup?: Ec2PlacementGroup;

}

/**
 * @schema Ec2CreateReservedInstancesListingRequest
 */
export interface Ec2CreateReservedInstancesListingRequest {
  /**
   * @schema Ec2CreateReservedInstancesListingRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema Ec2CreateReservedInstancesListingRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema Ec2CreateReservedInstancesListingRequest#PriceSchedules
   */
  readonly priceSchedules: Ec2PriceScheduleSpecification[];

  /**
   * @schema Ec2CreateReservedInstancesListingRequest#ReservedInstancesId
   */
  readonly reservedInstancesId: string;

}

/**
 * @schema Ec2CreateReservedInstancesListingResult
 */
export interface Ec2CreateReservedInstancesListingResult {
  /**
   * @schema Ec2CreateReservedInstancesListingResult#ReservedInstancesListings
   */
  readonly reservedInstancesListings?: Ec2ReservedInstancesListing[];

}

/**
 * @schema Ec2CreateRouteRequest
 */
export interface Ec2CreateRouteRequest {
  /**
   * @schema Ec2CreateRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2CreateRouteRequest#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Ec2CreateRouteRequest#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Ec2CreateRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateRouteRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema Ec2CreateRouteRequest#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema Ec2CreateRouteRequest#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema Ec2CreateRouteRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2CreateRouteRequest#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema Ec2CreateRouteRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2CreateRouteRequest#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2CreateRouteRequest#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema Ec2CreateRouteRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2CreateRouteRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema Ec2CreateRouteRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2CreateRouteResult
 */
export interface Ec2CreateRouteResult {
  /**
   * @schema Ec2CreateRouteResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2CreateRouteTableRequest
 */
export interface Ec2CreateRouteTableRequest {
  /**
   * @schema Ec2CreateRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateRouteTableRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateRouteTableRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateRouteTableResult
 */
export interface Ec2CreateRouteTableResult {
  /**
   * @schema Ec2CreateRouteTableResult#RouteTable
   */
  readonly routeTable?: Ec2RouteTable;

}

/**
 * @schema Ec2CreateSecurityGroupRequest
 */
export interface Ec2CreateSecurityGroupRequest {
  /**
   * @schema Ec2CreateSecurityGroupRequest#Description
   */
  readonly description: string;

  /**
   * @schema Ec2CreateSecurityGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema Ec2CreateSecurityGroupRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2CreateSecurityGroupRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateSecurityGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateSecurityGroupResult
 */
export interface Ec2CreateSecurityGroupResult {
  /**
   * @schema Ec2CreateSecurityGroupResult#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2CreateSecurityGroupResult#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2CreateSnapshotRequest
 */
export interface Ec2CreateSnapshotRequest {
  /**
   * @schema Ec2CreateSnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateSnapshotRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2CreateSnapshotRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateSnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2Snapshot
 */
export interface Ec2Snapshot {
  /**
   * @schema Ec2Snapshot#DataEncryptionKeyId
   */
  readonly dataEncryptionKeyId?: string;

  /**
   * @schema Ec2Snapshot#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2Snapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2Snapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2Snapshot#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2Snapshot#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2Snapshot#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2Snapshot#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Ec2Snapshot#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Snapshot#StateMessage
   */
  readonly stateMessage?: string;

  /**
   * @schema Ec2Snapshot#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Ec2Snapshot#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ec2Snapshot#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema Ec2Snapshot#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2CreateSnapshotsRequest
 */
export interface Ec2CreateSnapshotsRequest {
  /**
   * @schema Ec2CreateSnapshotsRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateSnapshotsRequest#InstanceSpecification
   */
  readonly instanceSpecification: Ec2InstanceSpecification;

  /**
   * @schema Ec2CreateSnapshotsRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateSnapshotsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateSnapshotsRequest#CopyTagsFromSource
   */
  readonly copyTagsFromSource?: string;

}

/**
 * @schema Ec2CreateSnapshotsResult
 */
export interface Ec2CreateSnapshotsResult {
  /**
   * @schema Ec2CreateSnapshotsResult#Snapshots
   */
  readonly snapshots?: Ec2SnapshotInfo[];

}

/**
 * @schema Ec2CreateSpotDatafeedSubscriptionRequest
 */
export interface Ec2CreateSpotDatafeedSubscriptionRequest {
  /**
   * @schema Ec2CreateSpotDatafeedSubscriptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema Ec2CreateSpotDatafeedSubscriptionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateSpotDatafeedSubscriptionRequest#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema Ec2CreateSpotDatafeedSubscriptionResult
 */
export interface Ec2CreateSpotDatafeedSubscriptionResult {
  /**
   * @schema Ec2CreateSpotDatafeedSubscriptionResult#SpotDatafeedSubscription
   */
  readonly spotDatafeedSubscription?: Ec2SpotDatafeedSubscription;

}

/**
 * @schema Ec2CreateSubnetRequest
 */
export interface Ec2CreateSubnetRequest {
  /**
   * @schema Ec2CreateSubnetRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateSubnetRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2CreateSubnetRequest#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Ec2CreateSubnetRequest#CidrBlock
   */
  readonly cidrBlock: string;

  /**
   * @schema Ec2CreateSubnetRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2CreateSubnetRequest#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2CreateSubnetRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateSubnetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateSubnetResult
 */
export interface Ec2CreateSubnetResult {
  /**
   * @schema Ec2CreateSubnetResult#Subnet
   */
  readonly subnet?: Ec2Subnet;

}

/**
 * @schema Ec2CreateTagsRequest
 */
export interface Ec2CreateTagsRequest {
  /**
   * @schema Ec2CreateTagsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateTagsRequest#Resources
   */
  readonly resources: string[];

  /**
   * @schema Ec2CreateTagsRequest#Tags
   */
  readonly tags: Ec2Tag[];

}

/**
 * @schema Ec2CreateTrafficMirrorFilterRequest
 */
export interface Ec2CreateTrafficMirrorFilterRequest {
  /**
   * @schema Ec2CreateTrafficMirrorFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTrafficMirrorFilterRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorFilterResult
 */
export interface Ec2CreateTrafficMirrorFilterResult {
  /**
   * @schema Ec2CreateTrafficMirrorFilterResult#TrafficMirrorFilter
   */
  readonly trafficMirrorFilter?: Ec2TrafficMirrorFilter;

  /**
   * @schema Ec2CreateTrafficMirrorFilterResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorFilterRuleRequest
 */
export interface Ec2CreateTrafficMirrorFilterRuleRequest {
  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#TrafficDirection
   */
  readonly trafficDirection: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#RuleNumber
   */
  readonly ruleNumber: number;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#RuleAction
   */
  readonly ruleAction: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#DestinationPortRange
   */
  readonly destinationPortRange?: Ec2TrafficMirrorPortRangeRequest;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#SourcePortRange
   */
  readonly sourcePortRange?: Ec2TrafficMirrorPortRangeRequest;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#Protocol
   */
  readonly protocol?: number;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#SourceCidrBlock
   */
  readonly sourceCidrBlock: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorFilterRuleResult
 */
export interface Ec2CreateTrafficMirrorFilterRuleResult {
  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleResult#TrafficMirrorFilterRule
   */
  readonly trafficMirrorFilterRule?: Ec2TrafficMirrorFilterRule;

  /**
   * @schema Ec2CreateTrafficMirrorFilterRuleResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorSessionRequest
 */
export interface Ec2CreateTrafficMirrorSessionRequest {
  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId: string;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#PacketLength
   */
  readonly packetLength?: number;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#SessionNumber
   */
  readonly sessionNumber: number;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#VirtualNetworkId
   */
  readonly virtualNetworkId?: number;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateTrafficMirrorSessionRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorSessionResult
 */
export interface Ec2CreateTrafficMirrorSessionResult {
  /**
   * @schema Ec2CreateTrafficMirrorSessionResult#TrafficMirrorSession
   */
  readonly trafficMirrorSession?: Ec2TrafficMirrorSession;

  /**
   * @schema Ec2CreateTrafficMirrorSessionResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorTargetRequest
 */
export interface Ec2CreateTrafficMirrorTargetRequest {
  /**
   * @schema Ec2CreateTrafficMirrorTargetRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2CreateTrafficMirrorTargetRequest#NetworkLoadBalancerArn
   */
  readonly networkLoadBalancerArn?: string;

  /**
   * @schema Ec2CreateTrafficMirrorTargetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateTrafficMirrorTargetRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTrafficMirrorTargetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateTrafficMirrorTargetRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTrafficMirrorTargetResult
 */
export interface Ec2CreateTrafficMirrorTargetResult {
  /**
   * @schema Ec2CreateTrafficMirrorTargetResult#TrafficMirrorTarget
   */
  readonly trafficMirrorTarget?: Ec2TrafficMirrorTarget;

  /**
   * @schema Ec2CreateTrafficMirrorTargetResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateTransitGatewayRequest
 */
export interface Ec2CreateTransitGatewayRequest {
  /**
   * @schema Ec2CreateTransitGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2CreateTransitGatewayRequest#Options
   */
  readonly options?: Ec2TransitGatewayRequestOptions;

  /**
   * @schema Ec2CreateTransitGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTransitGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayResult
 */
export interface Ec2CreateTransitGatewayResult {
  /**
   * @schema Ec2CreateTransitGatewayResult#TransitGateway
   */
  readonly transitGateway?: Ec2TransitGateway;

}

/**
 * @schema Ec2CreateTransitGatewayMulticastDomainRequest
 */
export interface Ec2CreateTransitGatewayMulticastDomainRequest {
  /**
   * @schema Ec2CreateTransitGatewayMulticastDomainRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema Ec2CreateTransitGatewayMulticastDomainRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayMulticastDomainResult
 */
export interface Ec2CreateTransitGatewayMulticastDomainResult {
  /**
   * @schema Ec2CreateTransitGatewayMulticastDomainResult#TransitGatewayMulticastDomain
   */
  readonly transitGatewayMulticastDomain?: Ec2TransitGatewayMulticastDomain;

}

/**
 * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest
 */
export interface Ec2CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest#PeerTransitGatewayId
   */
  readonly peerTransitGatewayId: string;

  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest#PeerAccountId
   */
  readonly peerAccountId: string;

  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest#PeerRegion
   */
  readonly peerRegion: string;

  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayPeeringAttachmentResult
 */
export interface Ec2CreateTransitGatewayPeeringAttachmentResult {
  /**
   * @schema Ec2CreateTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: Ec2TransitGatewayPeeringAttachment;

}

/**
 * @schema Ec2CreateTransitGatewayPrefixListReferenceRequest
 */
export interface Ec2CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * @schema Ec2CreateTransitGatewayPrefixListReferenceRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2CreateTransitGatewayPrefixListReferenceRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2CreateTransitGatewayPrefixListReferenceRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2CreateTransitGatewayPrefixListReferenceRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema Ec2CreateTransitGatewayPrefixListReferenceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayPrefixListReferenceResult
 */
export interface Ec2CreateTransitGatewayPrefixListReferenceResult {
  /**
   * @schema Ec2CreateTransitGatewayPrefixListReferenceResult#TransitGatewayPrefixListReference
   */
  readonly transitGatewayPrefixListReference?: Ec2TransitGatewayPrefixListReference;

}

/**
 * @schema Ec2CreateTransitGatewayRouteRequest
 */
export interface Ec2CreateTransitGatewayRouteRequest {
  /**
   * @schema Ec2CreateTransitGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2CreateTransitGatewayRouteRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2CreateTransitGatewayRouteRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2CreateTransitGatewayRouteRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema Ec2CreateTransitGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayRouteResult
 */
export interface Ec2CreateTransitGatewayRouteResult {
  /**
   * @schema Ec2CreateTransitGatewayRouteResult#Route
   */
  readonly route?: Ec2TransitGatewayRoute;

}

/**
 * @schema Ec2CreateTransitGatewayRouteTableRequest
 */
export interface Ec2CreateTransitGatewayRouteTableRequest {
  /**
   * @schema Ec2CreateTransitGatewayRouteTableRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema Ec2CreateTransitGatewayRouteTableRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayRouteTableResult
 */
export interface Ec2CreateTransitGatewayRouteTableResult {
  /**
   * @schema Ec2CreateTransitGatewayRouteTableResult#TransitGatewayRouteTable
   */
  readonly transitGatewayRouteTable?: Ec2TransitGatewayRouteTable;

}

/**
 * @schema Ec2CreateTransitGatewayVpcAttachmentRequest
 */
export interface Ec2CreateTransitGatewayVpcAttachmentRequest {
  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequest#Options
   */
  readonly options?: Ec2CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateTransitGatewayVpcAttachmentResult
 */
export interface Ec2CreateTransitGatewayVpcAttachmentResult {
  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: Ec2TransitGatewayVpcAttachment;

}

/**
 * @schema Ec2CreateVolumeRequest
 */
export interface Ec2CreateVolumeRequest {
  /**
   * @schema Ec2CreateVolumeRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema Ec2CreateVolumeRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2CreateVolumeRequest#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ec2CreateVolumeRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2CreateVolumeRequest#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2CreateVolumeRequest#Size
   */
  readonly size?: number;

  /**
   * @schema Ec2CreateVolumeRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2CreateVolumeRequest#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Ec2CreateVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVolumeRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateVolumeRequest#MultiAttachEnabled
   */
  readonly multiAttachEnabled?: boolean;

}

/**
 * @schema Ec2Volume
 */
export interface Ec2Volume {
  /**
   * @schema Ec2Volume#Attachments
   */
  readonly attachments?: Ec2VolumeAttachment[];

  /**
   * @schema Ec2Volume#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2Volume#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2Volume#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2Volume#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2Volume#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2Volume#Size
   */
  readonly size?: number;

  /**
   * @schema Ec2Volume#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2Volume#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Volume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Ec2Volume#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ec2Volume#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2Volume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Ec2Volume#FastRestored
   */
  readonly fastRestored?: boolean;

  /**
   * @schema Ec2Volume#MultiAttachEnabled
   */
  readonly multiAttachEnabled?: boolean;

}

/**
 * @schema Ec2CreateVpcRequest
 */
export interface Ec2CreateVpcRequest {
  /**
   * @schema Ec2CreateVpcRequest#CidrBlock
   */
  readonly cidrBlock: string;

  /**
   * @schema Ec2CreateVpcRequest#AmazonProvidedIpv6CidrBlock
   */
  readonly amazonProvidedIpv6CidrBlock?: boolean;

  /**
   * @schema Ec2CreateVpcRequest#Ipv6Pool
   */
  readonly ipv6Pool?: string;

  /**
   * @schema Ec2CreateVpcRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2CreateVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVpcRequest#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema Ec2CreateVpcRequest#Ipv6CidrBlockNetworkBorderGroup
   */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * @schema Ec2CreateVpcRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateVpcResult
 */
export interface Ec2CreateVpcResult {
  /**
   * @schema Ec2CreateVpcResult#Vpc
   */
  readonly vpc?: Ec2Vpc;

}

/**
 * @schema Ec2CreateVpcEndpointRequest
 */
export interface Ec2CreateVpcEndpointRequest {
  /**
   * @schema Ec2CreateVpcEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVpcEndpointRequest#VpcEndpointType
   */
  readonly vpcEndpointType?: string;

  /**
   * @schema Ec2CreateVpcEndpointRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2CreateVpcEndpointRequest#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema Ec2CreateVpcEndpointRequest#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema Ec2CreateVpcEndpointRequest#RouteTableIds
   */
  readonly routeTableIds?: string[];

  /**
   * @schema Ec2CreateVpcEndpointRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Ec2CreateVpcEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2CreateVpcEndpointRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateVpcEndpointRequest#PrivateDnsEnabled
   */
  readonly privateDnsEnabled?: boolean;

  /**
   * @schema Ec2CreateVpcEndpointRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateVpcEndpointResult
 */
export interface Ec2CreateVpcEndpointResult {
  /**
   * @schema Ec2CreateVpcEndpointResult#VpcEndpoint
   */
  readonly vpcEndpoint?: Ec2VpcEndpoint;

  /**
   * @schema Ec2CreateVpcEndpointResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateVpcEndpointConnectionNotificationRequest
 */
export interface Ec2CreateVpcEndpointConnectionNotificationRequest {
  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationRequest#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationRequest#ConnectionNotificationArn
   */
  readonly connectionNotificationArn: string;

  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationRequest#ConnectionEvents
   */
  readonly connectionEvents: string[];

  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateVpcEndpointConnectionNotificationResult
 */
export interface Ec2CreateVpcEndpointConnectionNotificationResult {
  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationResult#ConnectionNotification
   */
  readonly connectionNotification?: Ec2ConnectionNotification;

  /**
   * @schema Ec2CreateVpcEndpointConnectionNotificationResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateVpcEndpointServiceConfigurationRequest
 */
export interface Ec2CreateVpcEndpointServiceConfigurationRequest {
  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#NetworkLoadBalancerArns
   */
  readonly networkLoadBalancerArns?: string[];

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#GatewayLoadBalancerArns
   */
  readonly gatewayLoadBalancerArns?: string[];

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateVpcEndpointServiceConfigurationResult
 */
export interface Ec2CreateVpcEndpointServiceConfigurationResult {
  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationResult#ServiceConfiguration
   */
  readonly serviceConfiguration?: Ec2ServiceConfiguration;

  /**
   * @schema Ec2CreateVpcEndpointServiceConfigurationResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema Ec2CreateVpcPeeringConnectionRequest
 */
export interface Ec2CreateVpcPeeringConnectionRequest {
  /**
   * @schema Ec2CreateVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVpcPeeringConnectionRequest#PeerOwnerId
   */
  readonly peerOwnerId?: string;

  /**
   * @schema Ec2CreateVpcPeeringConnectionRequest#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema Ec2CreateVpcPeeringConnectionRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2CreateVpcPeeringConnectionRequest#PeerRegion
   */
  readonly peerRegion?: string;

  /**
   * @schema Ec2CreateVpcPeeringConnectionRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateVpcPeeringConnectionResult
 */
export interface Ec2CreateVpcPeeringConnectionResult {
  /**
   * @schema Ec2CreateVpcPeeringConnectionResult#VpcPeeringConnection
   */
  readonly vpcPeeringConnection?: Ec2VpcPeeringConnection;

}

/**
 * @schema Ec2CreateVpnConnectionRequest
 */
export interface Ec2CreateVpnConnectionRequest {
  /**
   * @schema Ec2CreateVpnConnectionRequest#CustomerGatewayId
   */
  readonly customerGatewayId: string;

  /**
   * @schema Ec2CreateVpnConnectionRequest#Type
   */
  readonly type: string;

  /**
   * @schema Ec2CreateVpnConnectionRequest#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema Ec2CreateVpnConnectionRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2CreateVpnConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2CreateVpnConnectionRequest#Options
   */
  readonly options?: Ec2VpnConnectionOptionsSpecification;

  /**
   * @schema Ec2CreateVpnConnectionRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2CreateVpnConnectionResult
 */
export interface Ec2CreateVpnConnectionResult {
  /**
   * @schema Ec2CreateVpnConnectionResult#VpnConnection
   */
  readonly vpnConnection?: Ec2VpnConnection;

}

/**
 * @schema Ec2CreateVpnConnectionRouteRequest
 */
export interface Ec2CreateVpnConnectionRouteRequest {
  /**
   * @schema Ec2CreateVpnConnectionRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2CreateVpnConnectionRouteRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

}

/**
 * @schema Ec2CreateVpnGatewayRequest
 */
export interface Ec2CreateVpnGatewayRequest {
  /**
   * @schema Ec2CreateVpnGatewayRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2CreateVpnGatewayRequest#Type
   */
  readonly type: string;

  /**
   * @schema Ec2CreateVpnGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2CreateVpnGatewayRequest#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema Ec2CreateVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2CreateVpnGatewayResult
 */
export interface Ec2CreateVpnGatewayResult {
  /**
   * @schema Ec2CreateVpnGatewayResult#VpnGateway
   */
  readonly vpnGateway?: Ec2VpnGateway;

}

/**
 * @schema Ec2DeleteCarrierGatewayRequest
 */
export interface Ec2DeleteCarrierGatewayRequest {
  /**
   * @schema Ec2DeleteCarrierGatewayRequest#CarrierGatewayId
   */
  readonly carrierGatewayId: string;

  /**
   * @schema Ec2DeleteCarrierGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteCarrierGatewayResult
 */
export interface Ec2DeleteCarrierGatewayResult {
  /**
   * @schema Ec2DeleteCarrierGatewayResult#CarrierGateway
   */
  readonly carrierGateway?: Ec2CarrierGateway;

}

/**
 * @schema Ec2DeleteClientVpnEndpointRequest
 */
export interface Ec2DeleteClientVpnEndpointRequest {
  /**
   * @schema Ec2DeleteClientVpnEndpointRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DeleteClientVpnEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteClientVpnEndpointResult
 */
export interface Ec2DeleteClientVpnEndpointResult {
  /**
   * @schema Ec2DeleteClientVpnEndpointResult#Status
   */
  readonly status?: Ec2ClientVpnEndpointStatus;

}

/**
 * @schema Ec2DeleteClientVpnRouteRequest
 */
export interface Ec2DeleteClientVpnRouteRequest {
  /**
   * @schema Ec2DeleteClientVpnRouteRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DeleteClientVpnRouteRequest#TargetVpcSubnetId
   */
  readonly targetVpcSubnetId?: string;

  /**
   * @schema Ec2DeleteClientVpnRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2DeleteClientVpnRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteClientVpnRouteResult
 */
export interface Ec2DeleteClientVpnRouteResult {
  /**
   * @schema Ec2DeleteClientVpnRouteResult#Status
   */
  readonly status?: Ec2ClientVpnRouteStatus;

}

/**
 * @schema Ec2DeleteCustomerGatewayRequest
 */
export interface Ec2DeleteCustomerGatewayRequest {
  /**
   * @schema Ec2DeleteCustomerGatewayRequest#CustomerGatewayId
   */
  readonly customerGatewayId: string;

  /**
   * @schema Ec2DeleteCustomerGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteDhcpOptionsRequest
 */
export interface Ec2DeleteDhcpOptionsRequest {
  /**
   * @schema Ec2DeleteDhcpOptionsRequest#DhcpOptionsId
   */
  readonly dhcpOptionsId: string;

  /**
   * @schema Ec2DeleteDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteEgressOnlyInternetGatewayRequest
 */
export interface Ec2DeleteEgressOnlyInternetGatewayRequest {
  /**
   * @schema Ec2DeleteEgressOnlyInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteEgressOnlyInternetGatewayRequest#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId: string;

}

/**
 * @schema Ec2DeleteEgressOnlyInternetGatewayResult
 */
export interface Ec2DeleteEgressOnlyInternetGatewayResult {
  /**
   * @schema Ec2DeleteEgressOnlyInternetGatewayResult#ReturnCode
   */
  readonly returnCode?: boolean;

}

/**
 * @schema Ec2DeleteFleetsRequest
 */
export interface Ec2DeleteFleetsRequest {
  /**
   * @schema Ec2DeleteFleetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteFleetsRequest#FleetIds
   */
  readonly fleetIds: string[];

  /**
   * @schema Ec2DeleteFleetsRequest#TerminateInstances
   */
  readonly terminateInstances: boolean;

}

/**
 * @schema Ec2DeleteFleetsResult
 */
export interface Ec2DeleteFleetsResult {
  /**
   * @schema Ec2DeleteFleetsResult#SuccessfulFleetDeletions
   */
  readonly successfulFleetDeletions?: Ec2DeleteFleetSuccessItem[];

  /**
   * @schema Ec2DeleteFleetsResult#UnsuccessfulFleetDeletions
   */
  readonly unsuccessfulFleetDeletions?: Ec2DeleteFleetErrorItem[];

}

/**
 * @schema Ec2DeleteFlowLogsRequest
 */
export interface Ec2DeleteFlowLogsRequest {
  /**
   * @schema Ec2DeleteFlowLogsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteFlowLogsRequest#FlowLogIds
   */
  readonly flowLogIds: string[];

}

/**
 * @schema Ec2DeleteFlowLogsResult
 */
export interface Ec2DeleteFlowLogsResult {
  /**
   * @schema Ec2DeleteFlowLogsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2DeleteFpgaImageRequest
 */
export interface Ec2DeleteFpgaImageRequest {
  /**
   * @schema Ec2DeleteFpgaImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteFpgaImageRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

}

/**
 * @schema Ec2DeleteFpgaImageResult
 */
export interface Ec2DeleteFpgaImageResult {
  /**
   * @schema Ec2DeleteFpgaImageResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DeleteInternetGatewayRequest
 */
export interface Ec2DeleteInternetGatewayRequest {
  /**
   * @schema Ec2DeleteInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteInternetGatewayRequest#InternetGatewayId
   */
  readonly internetGatewayId: string;

}

/**
 * @schema Ec2DeleteKeyPairRequest
 */
export interface Ec2DeleteKeyPairRequest {
  /**
   * @schema Ec2DeleteKeyPairRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2DeleteKeyPairRequest#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema Ec2DeleteKeyPairRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteLaunchTemplateRequest
 */
export interface Ec2DeleteLaunchTemplateRequest {
  /**
   * @schema Ec2DeleteLaunchTemplateRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteLaunchTemplateRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

}

/**
 * @schema Ec2DeleteLaunchTemplateResult
 */
export interface Ec2DeleteLaunchTemplateResult {
  /**
   * @schema Ec2DeleteLaunchTemplateResult#LaunchTemplate
   */
  readonly launchTemplate?: Ec2LaunchTemplate;

}

/**
 * @schema Ec2DeleteLaunchTemplateVersionsRequest
 */
export interface Ec2DeleteLaunchTemplateVersionsRequest {
  /**
   * @schema Ec2DeleteLaunchTemplateVersionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsRequest#Versions
   */
  readonly versions: string[];

}

/**
 * @schema Ec2DeleteLaunchTemplateVersionsResult
 */
export interface Ec2DeleteLaunchTemplateVersionsResult {
  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResult#SuccessfullyDeletedLaunchTemplateVersions
   */
  readonly successfullyDeletedLaunchTemplateVersions?: Ec2DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResult#UnsuccessfullyDeletedLaunchTemplateVersions
   */
  readonly unsuccessfullyDeletedLaunchTemplateVersions?: Ec2DeleteLaunchTemplateVersionsResponseErrorItem[];

}

/**
 * @schema Ec2DeleteLocalGatewayRouteRequest
 */
export interface Ec2DeleteLocalGatewayRouteRequest {
  /**
   * @schema Ec2DeleteLocalGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2DeleteLocalGatewayRouteRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema Ec2DeleteLocalGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteLocalGatewayRouteResult
 */
export interface Ec2DeleteLocalGatewayRouteResult {
  /**
   * @schema Ec2DeleteLocalGatewayRouteResult#Route
   */
  readonly route?: Ec2LocalGatewayRoute;

}

/**
 * @schema Ec2DeleteLocalGatewayRouteTableVpcAssociationRequest
 */
export interface Ec2DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @schema Ec2DeleteLocalGatewayRouteTableVpcAssociationRequest#LocalGatewayRouteTableVpcAssociationId
   */
  readonly localGatewayRouteTableVpcAssociationId: string;

  /**
   * @schema Ec2DeleteLocalGatewayRouteTableVpcAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteLocalGatewayRouteTableVpcAssociationResult
 */
export interface Ec2DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @schema Ec2DeleteLocalGatewayRouteTableVpcAssociationResult#LocalGatewayRouteTableVpcAssociation
   */
  readonly localGatewayRouteTableVpcAssociation?: Ec2LocalGatewayRouteTableVpcAssociation;

}

/**
 * @schema Ec2DeleteManagedPrefixListRequest
 */
export interface Ec2DeleteManagedPrefixListRequest {
  /**
   * @schema Ec2DeleteManagedPrefixListRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteManagedPrefixListRequest#PrefixListId
   */
  readonly prefixListId: string;

}

/**
 * @schema Ec2DeleteManagedPrefixListResult
 */
export interface Ec2DeleteManagedPrefixListResult {
  /**
   * @schema Ec2DeleteManagedPrefixListResult#PrefixList
   */
  readonly prefixList?: Ec2ManagedPrefixList;

}

/**
 * @schema Ec2DeleteNatGatewayRequest
 */
export interface Ec2DeleteNatGatewayRequest {
  /**
   * @schema Ec2DeleteNatGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteNatGatewayRequest#NatGatewayId
   */
  readonly natGatewayId: string;

}

/**
 * @schema Ec2DeleteNatGatewayResult
 */
export interface Ec2DeleteNatGatewayResult {
  /**
   * @schema Ec2DeleteNatGatewayResult#NatGatewayId
   */
  readonly natGatewayId?: string;

}

/**
 * @schema Ec2DeleteNetworkAclRequest
 */
export interface Ec2DeleteNetworkAclRequest {
  /**
   * @schema Ec2DeleteNetworkAclRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteNetworkAclRequest#NetworkAclId
   */
  readonly networkAclId: string;

}

/**
 * @schema Ec2DeleteNetworkAclEntryRequest
 */
export interface Ec2DeleteNetworkAclEntryRequest {
  /**
   * @schema Ec2DeleteNetworkAclEntryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteNetworkAclEntryRequest#Egress
   */
  readonly egress: boolean;

  /**
   * @schema Ec2DeleteNetworkAclEntryRequest#NetworkAclId
   */
  readonly networkAclId: string;

  /**
   * @schema Ec2DeleteNetworkAclEntryRequest#RuleNumber
   */
  readonly ruleNumber: number;

}

/**
 * @schema Ec2DeleteNetworkInterfaceRequest
 */
export interface Ec2DeleteNetworkInterfaceRequest {
  /**
   * @schema Ec2DeleteNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteNetworkInterfaceRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema Ec2DeleteNetworkInterfacePermissionRequest
 */
export interface Ec2DeleteNetworkInterfacePermissionRequest {
  /**
   * @schema Ec2DeleteNetworkInterfacePermissionRequest#NetworkInterfacePermissionId
   */
  readonly networkInterfacePermissionId: string;

  /**
   * @schema Ec2DeleteNetworkInterfacePermissionRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema Ec2DeleteNetworkInterfacePermissionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteNetworkInterfacePermissionResult
 */
export interface Ec2DeleteNetworkInterfacePermissionResult {
  /**
   * @schema Ec2DeleteNetworkInterfacePermissionResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DeletePlacementGroupRequest
 */
export interface Ec2DeletePlacementGroupRequest {
  /**
   * @schema Ec2DeletePlacementGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeletePlacementGroupRequest#GroupName
   */
  readonly groupName: string;

}

/**
 * @schema Ec2DeleteQueuedReservedInstancesRequest
 */
export interface Ec2DeleteQueuedReservedInstancesRequest {
  /**
   * @schema Ec2DeleteQueuedReservedInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteQueuedReservedInstancesRequest#ReservedInstancesIds
   */
  readonly reservedInstancesIds: string[];

}

/**
 * @schema Ec2DeleteQueuedReservedInstancesResult
 */
export interface Ec2DeleteQueuedReservedInstancesResult {
  /**
   * @schema Ec2DeleteQueuedReservedInstancesResult#SuccessfulQueuedPurchaseDeletions
   */
  readonly successfulQueuedPurchaseDeletions?: Ec2SuccessfulQueuedPurchaseDeletion[];

  /**
   * @schema Ec2DeleteQueuedReservedInstancesResult#FailedQueuedPurchaseDeletions
   */
  readonly failedQueuedPurchaseDeletions?: Ec2FailedQueuedPurchaseDeletion[];

}

/**
 * @schema Ec2DeleteRouteRequest
 */
export interface Ec2DeleteRouteRequest {
  /**
   * @schema Ec2DeleteRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2DeleteRouteRequest#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Ec2DeleteRouteRequest#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Ec2DeleteRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteRouteRequest#RouteTableId
   */
  readonly routeTableId: string;

}

/**
 * @schema Ec2DeleteRouteTableRequest
 */
export interface Ec2DeleteRouteTableRequest {
  /**
   * @schema Ec2DeleteRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteRouteTableRequest#RouteTableId
   */
  readonly routeTableId: string;

}

/**
 * @schema Ec2DeleteSecurityGroupRequest
 */
export interface Ec2DeleteSecurityGroupRequest {
  /**
   * @schema Ec2DeleteSecurityGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2DeleteSecurityGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2DeleteSecurityGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteSnapshotRequest
 */
export interface Ec2DeleteSnapshotRequest {
  /**
   * @schema Ec2DeleteSnapshotRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema Ec2DeleteSnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteSpotDatafeedSubscriptionRequest
 */
export interface Ec2DeleteSpotDatafeedSubscriptionRequest {
  /**
   * @schema Ec2DeleteSpotDatafeedSubscriptionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteSubnetRequest
 */
export interface Ec2DeleteSubnetRequest {
  /**
   * @schema Ec2DeleteSubnetRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema Ec2DeleteSubnetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTagsRequest
 */
export interface Ec2DeleteTagsRequest {
  /**
   * @schema Ec2DeleteTagsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteTagsRequest#Resources
   */
  readonly resources: string[];

  /**
   * @schema Ec2DeleteTagsRequest#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2DeleteTrafficMirrorFilterRequest
 */
export interface Ec2DeleteTrafficMirrorFilterRequest {
  /**
   * @schema Ec2DeleteTrafficMirrorFilterRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema Ec2DeleteTrafficMirrorFilterRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTrafficMirrorFilterResult
 */
export interface Ec2DeleteTrafficMirrorFilterResult {
  /**
   * @schema Ec2DeleteTrafficMirrorFilterResult#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

}

/**
 * @schema Ec2DeleteTrafficMirrorFilterRuleRequest
 */
export interface Ec2DeleteTrafficMirrorFilterRuleRequest {
  /**
   * @schema Ec2DeleteTrafficMirrorFilterRuleRequest#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId: string;

  /**
   * @schema Ec2DeleteTrafficMirrorFilterRuleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTrafficMirrorFilterRuleResult
 */
export interface Ec2DeleteTrafficMirrorFilterRuleResult {
  /**
   * @schema Ec2DeleteTrafficMirrorFilterRuleResult#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId?: string;

}

/**
 * @schema Ec2DeleteTrafficMirrorSessionRequest
 */
export interface Ec2DeleteTrafficMirrorSessionRequest {
  /**
   * @schema Ec2DeleteTrafficMirrorSessionRequest#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId: string;

  /**
   * @schema Ec2DeleteTrafficMirrorSessionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTrafficMirrorSessionResult
 */
export interface Ec2DeleteTrafficMirrorSessionResult {
  /**
   * @schema Ec2DeleteTrafficMirrorSessionResult#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId?: string;

}

/**
 * @schema Ec2DeleteTrafficMirrorTargetRequest
 */
export interface Ec2DeleteTrafficMirrorTargetRequest {
  /**
   * @schema Ec2DeleteTrafficMirrorTargetRequest#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId: string;

  /**
   * @schema Ec2DeleteTrafficMirrorTargetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTrafficMirrorTargetResult
 */
export interface Ec2DeleteTrafficMirrorTargetResult {
  /**
   * @schema Ec2DeleteTrafficMirrorTargetResult#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

}

/**
 * @schema Ec2DeleteTransitGatewayRequest
 */
export interface Ec2DeleteTransitGatewayRequest {
  /**
   * @schema Ec2DeleteTransitGatewayRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema Ec2DeleteTransitGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayResult
 */
export interface Ec2DeleteTransitGatewayResult {
  /**
   * @schema Ec2DeleteTransitGatewayResult#TransitGateway
   */
  readonly transitGateway?: Ec2TransitGateway;

}

/**
 * @schema Ec2DeleteTransitGatewayMulticastDomainRequest
 */
export interface Ec2DeleteTransitGatewayMulticastDomainRequest {
  /**
   * @schema Ec2DeleteTransitGatewayMulticastDomainRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId: string;

  /**
   * @schema Ec2DeleteTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayMulticastDomainResult
 */
export interface Ec2DeleteTransitGatewayMulticastDomainResult {
  /**
   * @schema Ec2DeleteTransitGatewayMulticastDomainResult#TransitGatewayMulticastDomain
   */
  readonly transitGatewayMulticastDomain?: Ec2TransitGatewayMulticastDomain;

}

/**
 * @schema Ec2DeleteTransitGatewayPeeringAttachmentRequest
 */
export interface Ec2DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema Ec2DeleteTransitGatewayPeeringAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2DeleteTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayPeeringAttachmentResult
 */
export interface Ec2DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * @schema Ec2DeleteTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: Ec2TransitGatewayPeeringAttachment;

}

/**
 * @schema Ec2DeleteTransitGatewayPrefixListReferenceRequest
 */
export interface Ec2DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * @schema Ec2DeleteTransitGatewayPrefixListReferenceRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2DeleteTransitGatewayPrefixListReferenceRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2DeleteTransitGatewayPrefixListReferenceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayPrefixListReferenceResult
 */
export interface Ec2DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * @schema Ec2DeleteTransitGatewayPrefixListReferenceResult#TransitGatewayPrefixListReference
   */
  readonly transitGatewayPrefixListReference?: Ec2TransitGatewayPrefixListReference;

}

/**
 * @schema Ec2DeleteTransitGatewayRouteRequest
 */
export interface Ec2DeleteTransitGatewayRouteRequest {
  /**
   * @schema Ec2DeleteTransitGatewayRouteRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2DeleteTransitGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2DeleteTransitGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayRouteResult
 */
export interface Ec2DeleteTransitGatewayRouteResult {
  /**
   * @schema Ec2DeleteTransitGatewayRouteResult#Route
   */
  readonly route?: Ec2TransitGatewayRoute;

}

/**
 * @schema Ec2DeleteTransitGatewayRouteTableRequest
 */
export interface Ec2DeleteTransitGatewayRouteTableRequest {
  /**
   * @schema Ec2DeleteTransitGatewayRouteTableRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2DeleteTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayRouteTableResult
 */
export interface Ec2DeleteTransitGatewayRouteTableResult {
  /**
   * @schema Ec2DeleteTransitGatewayRouteTableResult#TransitGatewayRouteTable
   */
  readonly transitGatewayRouteTable?: Ec2TransitGatewayRouteTable;

}

/**
 * @schema Ec2DeleteTransitGatewayVpcAttachmentRequest
 */
export interface Ec2DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * @schema Ec2DeleteTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2DeleteTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteTransitGatewayVpcAttachmentResult
 */
export interface Ec2DeleteTransitGatewayVpcAttachmentResult {
  /**
   * @schema Ec2DeleteTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: Ec2TransitGatewayVpcAttachment;

}

/**
 * @schema Ec2DeleteVolumeRequest
 */
export interface Ec2DeleteVolumeRequest {
  /**
   * @schema Ec2DeleteVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2DeleteVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteVpcRequest
 */
export interface Ec2DeleteVpcRequest {
  /**
   * @schema Ec2DeleteVpcRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2DeleteVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteVpcEndpointConnectionNotificationsRequest
 */
export interface Ec2DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * @schema Ec2DeleteVpcEndpointConnectionNotificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteVpcEndpointConnectionNotificationsRequest#ConnectionNotificationIds
   */
  readonly connectionNotificationIds: string[];

}

/**
 * @schema Ec2DeleteVpcEndpointConnectionNotificationsResult
 */
export interface Ec2DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * @schema Ec2DeleteVpcEndpointConnectionNotificationsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2DeleteVpcEndpointServiceConfigurationsRequest
 */
export interface Ec2DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * @schema Ec2DeleteVpcEndpointServiceConfigurationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteVpcEndpointServiceConfigurationsRequest#ServiceIds
   */
  readonly serviceIds: string[];

}

/**
 * @schema Ec2DeleteVpcEndpointServiceConfigurationsResult
 */
export interface Ec2DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * @schema Ec2DeleteVpcEndpointServiceConfigurationsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2DeleteVpcEndpointsRequest
 */
export interface Ec2DeleteVpcEndpointsRequest {
  /**
   * @schema Ec2DeleteVpcEndpointsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteVpcEndpointsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds: string[];

}

/**
 * @schema Ec2DeleteVpcEndpointsResult
 */
export interface Ec2DeleteVpcEndpointsResult {
  /**
   * @schema Ec2DeleteVpcEndpointsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2DeleteVpcPeeringConnectionRequest
 */
export interface Ec2DeleteVpcPeeringConnectionRequest {
  /**
   * @schema Ec2DeleteVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeleteVpcPeeringConnectionRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema Ec2DeleteVpcPeeringConnectionResult
 */
export interface Ec2DeleteVpcPeeringConnectionResult {
  /**
   * @schema Ec2DeleteVpcPeeringConnectionResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DeleteVpnConnectionRequest
 */
export interface Ec2DeleteVpnConnectionRequest {
  /**
   * @schema Ec2DeleteVpnConnectionRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema Ec2DeleteVpnConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeleteVpnConnectionRouteRequest
 */
export interface Ec2DeleteVpnConnectionRouteRequest {
  /**
   * @schema Ec2DeleteVpnConnectionRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2DeleteVpnConnectionRouteRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

}

/**
 * @schema Ec2DeleteVpnGatewayRequest
 */
export interface Ec2DeleteVpnGatewayRequest {
  /**
   * @schema Ec2DeleteVpnGatewayRequest#VpnGatewayId
   */
  readonly vpnGatewayId: string;

  /**
   * @schema Ec2DeleteVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeprovisionByoipCidrRequest
 */
export interface Ec2DeprovisionByoipCidrRequest {
  /**
   * @schema Ec2DeprovisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema Ec2DeprovisionByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeprovisionByoipCidrResult
 */
export interface Ec2DeprovisionByoipCidrResult {
  /**
   * @schema Ec2DeprovisionByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: Ec2ByoipCidr;

}

/**
 * @schema Ec2DeregisterImageRequest
 */
export interface Ec2DeregisterImageRequest {
  /**
   * @schema Ec2DeregisterImageRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema Ec2DeregisterImageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeregisterInstanceEventNotificationAttributesRequest
 */
export interface Ec2DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * @schema Ec2DeregisterInstanceEventNotificationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DeregisterInstanceEventNotificationAttributesRequest#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: Ec2DeregisterInstanceTagAttributeRequest;

}

/**
 * @schema Ec2DeregisterInstanceEventNotificationAttributesResult
 */
export interface Ec2DeregisterInstanceEventNotificationAttributesResult {
  /**
   * @schema Ec2DeregisterInstanceEventNotificationAttributesResult#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: Ec2InstanceTagNotificationAttribute;

}

/**
 * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersRequest
 */
export interface Ec2DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersResult
 */
export interface Ec2DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupMembersResult#DeregisteredMulticastGroupMembers
   */
  readonly deregisteredMulticastGroupMembers?: Ec2TransitGatewayMulticastDeregisteredGroupMembers;

}

/**
 * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesRequest
 */
export interface Ec2DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesResult
 */
export interface Ec2DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @schema Ec2DeregisterTransitGatewayMulticastGroupSourcesResult#DeregisteredMulticastGroupSources
   */
  readonly deregisteredMulticastGroupSources?: Ec2TransitGatewayMulticastDeregisteredGroupSources;

}

/**
 * @schema Ec2DescribeAccountAttributesRequest
 */
export interface Ec2DescribeAccountAttributesRequest {
  /**
   * @schema Ec2DescribeAccountAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema Ec2DescribeAccountAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeAccountAttributesResult
 */
export interface Ec2DescribeAccountAttributesResult {
  /**
   * @schema Ec2DescribeAccountAttributesResult#AccountAttributes
   */
  readonly accountAttributes?: Ec2AccountAttribute[];

}

/**
 * @schema Ec2DescribeAddressesRequest
 */
export interface Ec2DescribeAddressesRequest {
  /**
   * @schema Ec2DescribeAddressesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeAddressesRequest#PublicIps
   */
  readonly publicIps?: string[];

  /**
   * @schema Ec2DescribeAddressesRequest#AllocationIds
   */
  readonly allocationIds?: string[];

  /**
   * @schema Ec2DescribeAddressesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeAddressesResult
 */
export interface Ec2DescribeAddressesResult {
  /**
   * @schema Ec2DescribeAddressesResult#Addresses
   */
  readonly addresses?: Ec2Address[];

}

/**
 * @schema Ec2DescribeAggregateIdFormatRequest
 */
export interface Ec2DescribeAggregateIdFormatRequest {
  /**
   * @schema Ec2DescribeAggregateIdFormatRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeAggregateIdFormatResult
 */
export interface Ec2DescribeAggregateIdFormatResult {
  /**
   * @schema Ec2DescribeAggregateIdFormatResult#UseLongIdsAggregated
   */
  readonly useLongIdsAggregated?: boolean;

  /**
   * @schema Ec2DescribeAggregateIdFormatResult#Statuses
   */
  readonly statuses?: Ec2IdFormat[];

}

/**
 * @schema Ec2DescribeAvailabilityZonesRequest
 */
export interface Ec2DescribeAvailabilityZonesRequest {
  /**
   * @schema Ec2DescribeAvailabilityZonesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeAvailabilityZonesRequest#ZoneNames
   */
  readonly zoneNames?: string[];

  /**
   * @schema Ec2DescribeAvailabilityZonesRequest#ZoneIds
   */
  readonly zoneIds?: string[];

  /**
   * @schema Ec2DescribeAvailabilityZonesRequest#AllAvailabilityZones
   */
  readonly allAvailabilityZones?: boolean;

  /**
   * @schema Ec2DescribeAvailabilityZonesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeAvailabilityZonesResult
 */
export interface Ec2DescribeAvailabilityZonesResult {
  /**
   * @schema Ec2DescribeAvailabilityZonesResult#AvailabilityZones
   */
  readonly availabilityZones?: Ec2AvailabilityZone[];

}

/**
 * @schema Ec2DescribeBundleTasksRequest
 */
export interface Ec2DescribeBundleTasksRequest {
  /**
   * @schema Ec2DescribeBundleTasksRequest#BundleIds
   */
  readonly bundleIds?: string[];

  /**
   * @schema Ec2DescribeBundleTasksRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeBundleTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeBundleTasksResult
 */
export interface Ec2DescribeBundleTasksResult {
  /**
   * @schema Ec2DescribeBundleTasksResult#BundleTasks
   */
  readonly bundleTasks?: Ec2BundleTask[];

}

/**
 * @schema Ec2DescribeByoipCidrsRequest
 */
export interface Ec2DescribeByoipCidrsRequest {
  /**
   * @schema Ec2DescribeByoipCidrsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeByoipCidrsRequest#MaxResults
   */
  readonly maxResults: number;

  /**
   * @schema Ec2DescribeByoipCidrsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeByoipCidrsResult
 */
export interface Ec2DescribeByoipCidrsResult {
  /**
   * @schema Ec2DescribeByoipCidrsResult#ByoipCidrs
   */
  readonly byoipCidrs?: Ec2ByoipCidr[];

  /**
   * @schema Ec2DescribeByoipCidrsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeCapacityReservationsRequest
 */
export interface Ec2DescribeCapacityReservationsRequest {
  /**
   * @schema Ec2DescribeCapacityReservationsRequest#CapacityReservationIds
   */
  readonly capacityReservationIds?: string[];

  /**
   * @schema Ec2DescribeCapacityReservationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeCapacityReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeCapacityReservationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeCapacityReservationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeCapacityReservationsResult
 */
export interface Ec2DescribeCapacityReservationsResult {
  /**
   * @schema Ec2DescribeCapacityReservationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeCapacityReservationsResult#CapacityReservations
   */
  readonly capacityReservations?: Ec2CapacityReservation[];

}

/**
 * @schema Ec2DescribeCarrierGatewaysRequest
 */
export interface Ec2DescribeCarrierGatewaysRequest {
  /**
   * @schema Ec2DescribeCarrierGatewaysRequest#CarrierGatewayIds
   */
  readonly carrierGatewayIds?: string[];

  /**
   * @schema Ec2DescribeCarrierGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeCarrierGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeCarrierGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeCarrierGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeCarrierGatewaysResult
 */
export interface Ec2DescribeCarrierGatewaysResult {
  /**
   * @schema Ec2DescribeCarrierGatewaysResult#CarrierGateways
   */
  readonly carrierGateways?: Ec2CarrierGateway[];

  /**
   * @schema Ec2DescribeCarrierGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClassicLinkInstancesRequest
 */
export interface Ec2DescribeClassicLinkInstancesRequest {
  /**
   * @schema Ec2DescribeClassicLinkInstancesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeClassicLinkInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeClassicLinkInstancesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Ec2DescribeClassicLinkInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeClassicLinkInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClassicLinkInstancesResult
 */
export interface Ec2DescribeClassicLinkInstancesResult {
  /**
   * @schema Ec2DescribeClassicLinkInstancesResult#Instances
   */
  readonly instances?: Ec2ClassicLinkInstance[];

  /**
   * @schema Ec2DescribeClassicLinkInstancesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClientVpnAuthorizationRulesRequest
 */
export interface Ec2DescribeClientVpnAuthorizationRulesRequest {
  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeClientVpnAuthorizationRulesResult
 */
export interface Ec2DescribeClientVpnAuthorizationRulesResult {
  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesResult#AuthorizationRules
   */
  readonly authorizationRules?: Ec2AuthorizationRule[];

  /**
   * @schema Ec2DescribeClientVpnAuthorizationRulesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClientVpnConnectionsRequest
 */
export interface Ec2DescribeClientVpnConnectionsRequest {
  /**
   * @schema Ec2DescribeClientVpnConnectionsRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DescribeClientVpnConnectionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeClientVpnConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeClientVpnConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeClientVpnConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeClientVpnConnectionsResult
 */
export interface Ec2DescribeClientVpnConnectionsResult {
  /**
   * @schema Ec2DescribeClientVpnConnectionsResult#Connections
   */
  readonly connections?: Ec2ClientVpnConnection[];

  /**
   * @schema Ec2DescribeClientVpnConnectionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClientVpnEndpointsRequest
 */
export interface Ec2DescribeClientVpnEndpointsRequest {
  /**
   * @schema Ec2DescribeClientVpnEndpointsRequest#ClientVpnEndpointIds
   */
  readonly clientVpnEndpointIds?: string[];

  /**
   * @schema Ec2DescribeClientVpnEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeClientVpnEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeClientVpnEndpointsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeClientVpnEndpointsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeClientVpnEndpointsResult
 */
export interface Ec2DescribeClientVpnEndpointsResult {
  /**
   * @schema Ec2DescribeClientVpnEndpointsResult#ClientVpnEndpoints
   */
  readonly clientVpnEndpoints?: Ec2ClientVpnEndpoint[];

  /**
   * @schema Ec2DescribeClientVpnEndpointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClientVpnRoutesRequest
 */
export interface Ec2DescribeClientVpnRoutesRequest {
  /**
   * @schema Ec2DescribeClientVpnRoutesRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DescribeClientVpnRoutesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeClientVpnRoutesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeClientVpnRoutesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeClientVpnRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeClientVpnRoutesResult
 */
export interface Ec2DescribeClientVpnRoutesResult {
  /**
   * @schema Ec2DescribeClientVpnRoutesResult#Routes
   */
  readonly routes?: Ec2ClientVpnRoute[];

  /**
   * @schema Ec2DescribeClientVpnRoutesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeClientVpnTargetNetworksRequest
 */
export interface Ec2DescribeClientVpnTargetNetworksRequest {
  /**
   * @schema Ec2DescribeClientVpnTargetNetworksRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DescribeClientVpnTargetNetworksRequest#AssociationIds
   */
  readonly associationIds?: string[];

  /**
   * @schema Ec2DescribeClientVpnTargetNetworksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeClientVpnTargetNetworksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeClientVpnTargetNetworksRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeClientVpnTargetNetworksRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeClientVpnTargetNetworksResult
 */
export interface Ec2DescribeClientVpnTargetNetworksResult {
  /**
   * @schema Ec2DescribeClientVpnTargetNetworksResult#ClientVpnTargetNetworks
   */
  readonly clientVpnTargetNetworks?: Ec2TargetNetwork[];

  /**
   * @schema Ec2DescribeClientVpnTargetNetworksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeCoipPoolsRequest
 */
export interface Ec2DescribeCoipPoolsRequest {
  /**
   * @schema Ec2DescribeCoipPoolsRequest#PoolIds
   */
  readonly poolIds?: string[];

  /**
   * @schema Ec2DescribeCoipPoolsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeCoipPoolsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeCoipPoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeCoipPoolsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeCoipPoolsResult
 */
export interface Ec2DescribeCoipPoolsResult {
  /**
   * @schema Ec2DescribeCoipPoolsResult#CoipPools
   */
  readonly coipPools?: Ec2CoipPool[];

  /**
   * @schema Ec2DescribeCoipPoolsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeConversionTasksRequest
 */
export interface Ec2DescribeConversionTasksRequest {
  /**
   * @schema Ec2DescribeConversionTasksRequest#ConversionTaskIds
   */
  readonly conversionTaskIds?: string[];

  /**
   * @schema Ec2DescribeConversionTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeConversionTasksResult
 */
export interface Ec2DescribeConversionTasksResult {
  /**
   * @schema Ec2DescribeConversionTasksResult#ConversionTasks
   */
  readonly conversionTasks?: Ec2ConversionTask[];

}

/**
 * @schema Ec2DescribeCustomerGatewaysRequest
 */
export interface Ec2DescribeCustomerGatewaysRequest {
  /**
   * @schema Ec2DescribeCustomerGatewaysRequest#CustomerGatewayIds
   */
  readonly customerGatewayIds?: string[];

  /**
   * @schema Ec2DescribeCustomerGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeCustomerGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeCustomerGatewaysResult
 */
export interface Ec2DescribeCustomerGatewaysResult {
  /**
   * @schema Ec2DescribeCustomerGatewaysResult#CustomerGateways
   */
  readonly customerGateways?: Ec2CustomerGateway[];

}

/**
 * @schema Ec2DescribeDhcpOptionsRequest
 */
export interface Ec2DescribeDhcpOptionsRequest {
  /**
   * @schema Ec2DescribeDhcpOptionsRequest#DhcpOptionsIds
   */
  readonly dhcpOptionsIds?: string[];

  /**
   * @schema Ec2DescribeDhcpOptionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeDhcpOptionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeDhcpOptionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeDhcpOptionsResult
 */
export interface Ec2DescribeDhcpOptionsResult {
  /**
   * @schema Ec2DescribeDhcpOptionsResult#DhcpOptions
   */
  readonly dhcpOptions?: Ec2DhcpOptions[];

  /**
   * @schema Ec2DescribeDhcpOptionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeEgressOnlyInternetGatewaysRequest
 */
export interface Ec2DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysRequest#EgressOnlyInternetGatewayIds
   */
  readonly egressOnlyInternetGatewayIds?: string[];

  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribeEgressOnlyInternetGatewaysResult
 */
export interface Ec2DescribeEgressOnlyInternetGatewaysResult {
  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysResult#EgressOnlyInternetGateways
   */
  readonly egressOnlyInternetGateways?: Ec2EgressOnlyInternetGateway[];

  /**
   * @schema Ec2DescribeEgressOnlyInternetGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeElasticGpusRequest
 */
export interface Ec2DescribeElasticGpusRequest {
  /**
   * @schema Ec2DescribeElasticGpusRequest#ElasticGpuIds
   */
  readonly elasticGpuIds?: string[];

  /**
   * @schema Ec2DescribeElasticGpusRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeElasticGpusRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeElasticGpusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeElasticGpusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeElasticGpusResult
 */
export interface Ec2DescribeElasticGpusResult {
  /**
   * @schema Ec2DescribeElasticGpusResult#ElasticGpuSet
   */
  readonly elasticGpuSet?: Ec2ElasticGpus[];

  /**
   * @schema Ec2DescribeElasticGpusResult#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeElasticGpusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeExportImageTasksRequest
 */
export interface Ec2DescribeExportImageTasksRequest {
  /**
   * @schema Ec2DescribeExportImageTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeExportImageTasksRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeExportImageTasksRequest#ExportImageTaskIds
   */
  readonly exportImageTaskIds?: string[];

  /**
   * @schema Ec2DescribeExportImageTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeExportImageTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeExportImageTasksResult
 */
export interface Ec2DescribeExportImageTasksResult {
  /**
   * @schema Ec2DescribeExportImageTasksResult#ExportImageTasks
   */
  readonly exportImageTasks?: Ec2ExportImageTask[];

  /**
   * @schema Ec2DescribeExportImageTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeExportTasksRequest
 */
export interface Ec2DescribeExportTasksRequest {
  /**
   * @schema Ec2DescribeExportTasksRequest#ExportTaskIds
   */
  readonly exportTaskIds?: string[];

  /**
   * @schema Ec2DescribeExportTasksRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribeExportTasksResult
 */
export interface Ec2DescribeExportTasksResult {
  /**
   * @schema Ec2DescribeExportTasksResult#ExportTasks
   */
  readonly exportTasks?: Ec2ExportTask[];

}

/**
 * @schema Ec2DescribeFastSnapshotRestoresRequest
 */
export interface Ec2DescribeFastSnapshotRestoresRequest {
  /**
   * @schema Ec2DescribeFastSnapshotRestoresRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeFastSnapshotRestoresRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeFastSnapshotRestoresRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoresRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeFastSnapshotRestoresResult
 */
export interface Ec2DescribeFastSnapshotRestoresResult {
  /**
   * @schema Ec2DescribeFastSnapshotRestoresResult#FastSnapshotRestores
   */
  readonly fastSnapshotRestores?: Ec2DescribeFastSnapshotRestoreSuccessItem[];

  /**
   * @schema Ec2DescribeFastSnapshotRestoresResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeFleetHistoryRequest
 */
export interface Ec2DescribeFleetHistoryRequest {
  /**
   * @schema Ec2DescribeFleetHistoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeFleetHistoryRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema Ec2DescribeFleetHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeFleetHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFleetHistoryRequest#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema Ec2DescribeFleetHistoryRequest#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema Ec2DescribeFleetHistoryResult
 */
export interface Ec2DescribeFleetHistoryResult {
  /**
   * @schema Ec2DescribeFleetHistoryResult#HistoryRecords
   */
  readonly historyRecords?: Ec2HistoryRecordEntry[];

  /**
   * @schema Ec2DescribeFleetHistoryResult#LastEvaluatedTime
   */
  readonly lastEvaluatedTime?: string;

  /**
   * @schema Ec2DescribeFleetHistoryResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFleetHistoryResult#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema Ec2DescribeFleetHistoryResult#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema Ec2DescribeFleetInstancesRequest
 */
export interface Ec2DescribeFleetInstancesRequest {
  /**
   * @schema Ec2DescribeFleetInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeFleetInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeFleetInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFleetInstancesRequest#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema Ec2DescribeFleetInstancesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribeFleetInstancesResult
 */
export interface Ec2DescribeFleetInstancesResult {
  /**
   * @schema Ec2DescribeFleetInstancesResult#ActiveInstances
   */
  readonly activeInstances?: Ec2ActiveInstance[];

  /**
   * @schema Ec2DescribeFleetInstancesResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFleetInstancesResult#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema Ec2DescribeFleetsRequest
 */
export interface Ec2DescribeFleetsRequest {
  /**
   * @schema Ec2DescribeFleetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeFleetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeFleetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFleetsRequest#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema Ec2DescribeFleetsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribeFleetsResult
 */
export interface Ec2DescribeFleetsResult {
  /**
   * @schema Ec2DescribeFleetsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFleetsResult#Fleets
   */
  readonly fleets?: Ec2FleetData[];

}

/**
 * @schema Ec2DescribeFlowLogsRequest
 */
export interface Ec2DescribeFlowLogsRequest {
  /**
   * @schema Ec2DescribeFlowLogsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeFlowLogsRequest#Filter
   */
  readonly filter?: Ec2Filter[];

  /**
   * @schema Ec2DescribeFlowLogsRequest#FlowLogIds
   */
  readonly flowLogIds?: string[];

  /**
   * @schema Ec2DescribeFlowLogsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeFlowLogsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeFlowLogsResult
 */
export interface Ec2DescribeFlowLogsResult {
  /**
   * @schema Ec2DescribeFlowLogsResult#FlowLogs
   */
  readonly flowLogs?: Ec2FlowLog[];

  /**
   * @schema Ec2DescribeFlowLogsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeFpgaImageAttributeRequest
 */
export interface Ec2DescribeFpgaImageAttributeRequest {
  /**
   * @schema Ec2DescribeFpgaImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeFpgaImageAttributeRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

  /**
   * @schema Ec2DescribeFpgaImageAttributeRequest#Attribute
   */
  readonly attribute: string;

}

/**
 * @schema Ec2DescribeFpgaImageAttributeResult
 */
export interface Ec2DescribeFpgaImageAttributeResult {
  /**
   * @schema Ec2DescribeFpgaImageAttributeResult#FpgaImageAttribute
   */
  readonly fpgaImageAttribute?: Ec2FpgaImageAttribute;

}

/**
 * @schema Ec2DescribeFpgaImagesRequest
 */
export interface Ec2DescribeFpgaImagesRequest {
  /**
   * @schema Ec2DescribeFpgaImagesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeFpgaImagesRequest#FpgaImageIds
   */
  readonly fpgaImageIds?: string[];

  /**
   * @schema Ec2DescribeFpgaImagesRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema Ec2DescribeFpgaImagesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeFpgaImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeFpgaImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeFpgaImagesResult
 */
export interface Ec2DescribeFpgaImagesResult {
  /**
   * @schema Ec2DescribeFpgaImagesResult#FpgaImages
   */
  readonly fpgaImages?: Ec2FpgaImage[];

  /**
   * @schema Ec2DescribeFpgaImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeHostReservationOfferingsRequest
 */
export interface Ec2DescribeHostReservationOfferingsRequest {
  /**
   * @schema Ec2DescribeHostReservationOfferingsRequest#Filter
   */
  readonly filter?: Ec2Filter[];

  /**
   * @schema Ec2DescribeHostReservationOfferingsRequest#MaxDuration
   */
  readonly maxDuration?: number;

  /**
   * @schema Ec2DescribeHostReservationOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeHostReservationOfferingsRequest#MinDuration
   */
  readonly minDuration?: number;

  /**
   * @schema Ec2DescribeHostReservationOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeHostReservationOfferingsRequest#OfferingId
   */
  readonly offeringId?: string;

}

/**
 * @schema Ec2DescribeHostReservationOfferingsResult
 */
export interface Ec2DescribeHostReservationOfferingsResult {
  /**
   * @schema Ec2DescribeHostReservationOfferingsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeHostReservationOfferingsResult#OfferingSet
   */
  readonly offeringSet?: Ec2HostOffering[];

}

/**
 * @schema Ec2DescribeHostReservationsRequest
 */
export interface Ec2DescribeHostReservationsRequest {
  /**
   * @schema Ec2DescribeHostReservationsRequest#Filter
   */
  readonly filter?: Ec2Filter[];

  /**
   * @schema Ec2DescribeHostReservationsRequest#HostReservationIdSet
   */
  readonly hostReservationIdSet?: string[];

  /**
   * @schema Ec2DescribeHostReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeHostReservationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeHostReservationsResult
 */
export interface Ec2DescribeHostReservationsResult {
  /**
   * @schema Ec2DescribeHostReservationsResult#HostReservationSet
   */
  readonly hostReservationSet?: Ec2HostReservation[];

  /**
   * @schema Ec2DescribeHostReservationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeHostsRequest
 */
export interface Ec2DescribeHostsRequest {
  /**
   * @schema Ec2DescribeHostsRequest#Filter
   */
  readonly filter?: Ec2Filter[];

  /**
   * @schema Ec2DescribeHostsRequest#HostIds
   */
  readonly hostIds?: string[];

  /**
   * @schema Ec2DescribeHostsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeHostsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeHostsResult
 */
export interface Ec2DescribeHostsResult {
  /**
   * @schema Ec2DescribeHostsResult#Hosts
   */
  readonly hosts?: Ec2Host[];

  /**
   * @schema Ec2DescribeHostsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeIamInstanceProfileAssociationsRequest
 */
export interface Ec2DescribeIamInstanceProfileAssociationsRequest {
  /**
   * @schema Ec2DescribeIamInstanceProfileAssociationsRequest#AssociationIds
   */
  readonly associationIds?: string[];

  /**
   * @schema Ec2DescribeIamInstanceProfileAssociationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeIamInstanceProfileAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeIamInstanceProfileAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeIamInstanceProfileAssociationsResult
 */
export interface Ec2DescribeIamInstanceProfileAssociationsResult {
  /**
   * @schema Ec2DescribeIamInstanceProfileAssociationsResult#IamInstanceProfileAssociations
   */
  readonly iamInstanceProfileAssociations?: Ec2IamInstanceProfileAssociation[];

  /**
   * @schema Ec2DescribeIamInstanceProfileAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeIdFormatRequest
 */
export interface Ec2DescribeIdFormatRequest {
  /**
   * @schema Ec2DescribeIdFormatRequest#Resource
   */
  readonly resource?: string;

}

/**
 * @schema Ec2DescribeIdFormatResult
 */
export interface Ec2DescribeIdFormatResult {
  /**
   * @schema Ec2DescribeIdFormatResult#Statuses
   */
  readonly statuses?: Ec2IdFormat[];

}

/**
 * @schema Ec2DescribeIdentityIdFormatRequest
 */
export interface Ec2DescribeIdentityIdFormatRequest {
  /**
   * @schema Ec2DescribeIdentityIdFormatRequest#PrincipalArn
   */
  readonly principalArn: string;

  /**
   * @schema Ec2DescribeIdentityIdFormatRequest#Resource
   */
  readonly resource?: string;

}

/**
 * @schema Ec2DescribeIdentityIdFormatResult
 */
export interface Ec2DescribeIdentityIdFormatResult {
  /**
   * @schema Ec2DescribeIdentityIdFormatResult#Statuses
   */
  readonly statuses?: Ec2IdFormat[];

}

/**
 * @schema Ec2DescribeImageAttributeRequest
 */
export interface Ec2DescribeImageAttributeRequest {
  /**
   * @schema Ec2DescribeImageAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2DescribeImageAttributeRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema Ec2DescribeImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ImageAttribute
 */
export interface Ec2ImageAttribute {
  /**
   * @schema Ec2ImageAttribute#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2ImageAttribute#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2ImageAttribute#LaunchPermissions
   */
  readonly launchPermissions?: Ec2LaunchPermission[];

  /**
   * @schema Ec2ImageAttribute#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2ImageAttribute#Description
   */
  readonly description?: Ec2AttributeValue;

  /**
   * @schema Ec2ImageAttribute#KernelId
   */
  readonly kernelId?: Ec2AttributeValue;

  /**
   * @schema Ec2ImageAttribute#RamdiskId
   */
  readonly ramdiskId?: Ec2AttributeValue;

  /**
   * @schema Ec2ImageAttribute#SriovNetSupport
   */
  readonly sriovNetSupport?: Ec2AttributeValue;

}

/**
 * @schema Ec2DescribeImagesRequest
 */
export interface Ec2DescribeImagesRequest {
  /**
   * @schema Ec2DescribeImagesRequest#ExecutableUsers
   */
  readonly executableUsers?: string[];

  /**
   * @schema Ec2DescribeImagesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeImagesRequest#ImageIds
   */
  readonly imageIds?: string[];

  /**
   * @schema Ec2DescribeImagesRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema Ec2DescribeImagesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeImagesResult
 */
export interface Ec2DescribeImagesResult {
  /**
   * @schema Ec2DescribeImagesResult#Images
   */
  readonly images?: Ec2Image[];

}

/**
 * @schema Ec2DescribeImportImageTasksRequest
 */
export interface Ec2DescribeImportImageTasksRequest {
  /**
   * @schema Ec2DescribeImportImageTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeImportImageTasksRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeImportImageTasksRequest#ImportTaskIds
   */
  readonly importTaskIds?: string[];

  /**
   * @schema Ec2DescribeImportImageTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeImportImageTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeImportImageTasksResult
 */
export interface Ec2DescribeImportImageTasksResult {
  /**
   * @schema Ec2DescribeImportImageTasksResult#ImportImageTasks
   */
  readonly importImageTasks?: Ec2ImportImageTask[];

  /**
   * @schema Ec2DescribeImportImageTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeImportSnapshotTasksRequest
 */
export interface Ec2DescribeImportSnapshotTasksRequest {
  /**
   * @schema Ec2DescribeImportSnapshotTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeImportSnapshotTasksRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeImportSnapshotTasksRequest#ImportTaskIds
   */
  readonly importTaskIds?: string[];

  /**
   * @schema Ec2DescribeImportSnapshotTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeImportSnapshotTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeImportSnapshotTasksResult
 */
export interface Ec2DescribeImportSnapshotTasksResult {
  /**
   * @schema Ec2DescribeImportSnapshotTasksResult#ImportSnapshotTasks
   */
  readonly importSnapshotTasks?: Ec2ImportSnapshotTask[];

  /**
   * @schema Ec2DescribeImportSnapshotTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceAttributeRequest
 */
export interface Ec2DescribeInstanceAttributeRequest {
  /**
   * @schema Ec2DescribeInstanceAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2DescribeInstanceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema Ec2InstanceAttribute
 */
export interface Ec2InstanceAttribute {
  /**
   * @schema Ec2InstanceAttribute#Groups
   */
  readonly groups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2InstanceAttribute#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2InstanceBlockDeviceMapping[];

  /**
   * @schema Ec2InstanceAttribute#DisableApiTermination
   */
  readonly disableApiTermination?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2InstanceAttribute#EnaSupport
   */
  readonly enaSupport?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2InstanceAttribute#EnclaveOptions
   */
  readonly enclaveOptions?: Ec2EnclaveOptions;

  /**
   * @schema Ec2InstanceAttribute#EbsOptimized
   */
  readonly ebsOptimized?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2InstanceAttribute#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceAttribute#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: Ec2AttributeValue;

  /**
   * @schema Ec2InstanceAttribute#InstanceType
   */
  readonly instanceType?: Ec2AttributeValue;

  /**
   * @schema Ec2InstanceAttribute#KernelId
   */
  readonly kernelId?: Ec2AttributeValue;

  /**
   * @schema Ec2InstanceAttribute#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2InstanceAttribute#RamdiskId
   */
  readonly ramdiskId?: Ec2AttributeValue;

  /**
   * @schema Ec2InstanceAttribute#RootDeviceName
   */
  readonly rootDeviceName?: Ec2AttributeValue;

  /**
   * @schema Ec2InstanceAttribute#SourceDestCheck
   */
  readonly sourceDestCheck?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2InstanceAttribute#SriovNetSupport
   */
  readonly sriovNetSupport?: Ec2AttributeValue;

  /**
   * @schema Ec2InstanceAttribute#UserData
   */
  readonly userData?: Ec2AttributeValue;

}

/**
 * @schema Ec2DescribeInstanceCreditSpecificationsRequest
 */
export interface Ec2DescribeInstanceCreditSpecificationsRequest {
  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceCreditSpecificationsResult
 */
export interface Ec2DescribeInstanceCreditSpecificationsResult {
  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsResult#InstanceCreditSpecifications
   */
  readonly instanceCreditSpecifications?: Ec2InstanceCreditSpecification[];

  /**
   * @schema Ec2DescribeInstanceCreditSpecificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceEventNotificationAttributesRequest
 */
export interface Ec2DescribeInstanceEventNotificationAttributesRequest {
  /**
   * @schema Ec2DescribeInstanceEventNotificationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeInstanceEventNotificationAttributesResult
 */
export interface Ec2DescribeInstanceEventNotificationAttributesResult {
  /**
   * @schema Ec2DescribeInstanceEventNotificationAttributesResult#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: Ec2InstanceTagNotificationAttribute;

}

/**
 * @schema Ec2DescribeInstanceStatusRequest
 */
export interface Ec2DescribeInstanceStatusRequest {
  /**
   * @schema Ec2DescribeInstanceStatusRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeInstanceStatusRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Ec2DescribeInstanceStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeInstanceStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeInstanceStatusRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInstanceStatusRequest#IncludeAllInstances
   */
  readonly includeAllInstances?: boolean;

}

/**
 * @schema Ec2DescribeInstanceStatusResult
 */
export interface Ec2DescribeInstanceStatusResult {
  /**
   * @schema Ec2DescribeInstanceStatusResult#InstanceStatuses
   */
  readonly instanceStatuses?: Ec2InstanceStatus[];

  /**
   * @schema Ec2DescribeInstanceStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceTypeOfferingsRequest
 */
export interface Ec2DescribeInstanceTypeOfferingsRequest {
  /**
   * @schema Ec2DescribeInstanceTypeOfferingsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInstanceTypeOfferingsRequest#LocationType
   */
  readonly locationType?: string;

  /**
   * @schema Ec2DescribeInstanceTypeOfferingsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeInstanceTypeOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeInstanceTypeOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceTypeOfferingsResult
 */
export interface Ec2DescribeInstanceTypeOfferingsResult {
  /**
   * @schema Ec2DescribeInstanceTypeOfferingsResult#InstanceTypeOfferings
   */
  readonly instanceTypeOfferings?: Ec2InstanceTypeOffering[];

  /**
   * @schema Ec2DescribeInstanceTypeOfferingsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceTypesRequest
 */
export interface Ec2DescribeInstanceTypesRequest {
  /**
   * @schema Ec2DescribeInstanceTypesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInstanceTypesRequest#InstanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema Ec2DescribeInstanceTypesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeInstanceTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeInstanceTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstanceTypesResult
 */
export interface Ec2DescribeInstanceTypesResult {
  /**
   * @schema Ec2DescribeInstanceTypesResult#InstanceTypes
   */
  readonly instanceTypes?: Ec2InstanceTypeInfo[];

  /**
   * @schema Ec2DescribeInstanceTypesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstancesRequest
 */
export interface Ec2DescribeInstancesRequest {
  /**
   * @schema Ec2DescribeInstancesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeInstancesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Ec2DescribeInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInstancesResult
 */
export interface Ec2DescribeInstancesResult {
  /**
   * @schema Ec2DescribeInstancesResult#Reservations
   */
  readonly reservations?: Ec2Reservation[];

  /**
   * @schema Ec2DescribeInstancesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeInternetGatewaysRequest
 */
export interface Ec2DescribeInternetGatewaysRequest {
  /**
   * @schema Ec2DescribeInternetGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeInternetGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeInternetGatewaysRequest#InternetGatewayIds
   */
  readonly internetGatewayIds?: string[];

  /**
   * @schema Ec2DescribeInternetGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeInternetGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeInternetGatewaysResult
 */
export interface Ec2DescribeInternetGatewaysResult {
  /**
   * @schema Ec2DescribeInternetGatewaysResult#InternetGateways
   */
  readonly internetGateways?: Ec2InternetGateway[];

  /**
   * @schema Ec2DescribeInternetGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeIpv6PoolsRequest
 */
export interface Ec2DescribeIpv6PoolsRequest {
  /**
   * @schema Ec2DescribeIpv6PoolsRequest#PoolIds
   */
  readonly poolIds?: string[];

  /**
   * @schema Ec2DescribeIpv6PoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeIpv6PoolsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeIpv6PoolsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeIpv6PoolsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribeIpv6PoolsResult
 */
export interface Ec2DescribeIpv6PoolsResult {
  /**
   * @schema Ec2DescribeIpv6PoolsResult#Ipv6Pools
   */
  readonly ipv6Pools?: Ec2Ipv6Pool[];

  /**
   * @schema Ec2DescribeIpv6PoolsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeKeyPairsRequest
 */
export interface Ec2DescribeKeyPairsRequest {
  /**
   * @schema Ec2DescribeKeyPairsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeKeyPairsRequest#KeyNames
   */
  readonly keyNames?: string[];

  /**
   * @schema Ec2DescribeKeyPairsRequest#KeyPairIds
   */
  readonly keyPairIds?: string[];

  /**
   * @schema Ec2DescribeKeyPairsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeKeyPairsResult
 */
export interface Ec2DescribeKeyPairsResult {
  /**
   * @schema Ec2DescribeKeyPairsResult#KeyPairs
   */
  readonly keyPairs?: Ec2KeyPairInfo[];

}

/**
 * @schema Ec2DescribeLaunchTemplateVersionsRequest
 */
export interface Ec2DescribeLaunchTemplateVersionsRequest {
  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#Versions
   */
  readonly versions?: string[];

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#MinVersion
   */
  readonly minVersion?: string;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#MaxVersion
   */
  readonly maxVersion?: string;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribeLaunchTemplateVersionsResult
 */
export interface Ec2DescribeLaunchTemplateVersionsResult {
  /**
   * @schema Ec2DescribeLaunchTemplateVersionsResult#LaunchTemplateVersions
   */
  readonly launchTemplateVersions?: Ec2LaunchTemplateVersion[];

  /**
   * @schema Ec2DescribeLaunchTemplateVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLaunchTemplatesRequest
 */
export interface Ec2DescribeLaunchTemplatesRequest {
  /**
   * @schema Ec2DescribeLaunchTemplatesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeLaunchTemplatesRequest#LaunchTemplateIds
   */
  readonly launchTemplateIds?: string[];

  /**
   * @schema Ec2DescribeLaunchTemplatesRequest#LaunchTemplateNames
   */
  readonly launchTemplateNames?: string[];

  /**
   * @schema Ec2DescribeLaunchTemplatesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLaunchTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLaunchTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeLaunchTemplatesResult
 */
export interface Ec2DescribeLaunchTemplatesResult {
  /**
   * @schema Ec2DescribeLaunchTemplatesResult#LaunchTemplates
   */
  readonly launchTemplates?: Ec2LaunchTemplate[];

  /**
   * @schema Ec2DescribeLaunchTemplatesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
 */
export interface Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds
   */
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
 */
export interface Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult#LocalGatewayRouteTableVirtualInterfaceGroupAssociations
   */
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociations?: Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest
 */
export interface Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest#LocalGatewayRouteTableVpcAssociationIds
   */
  readonly localGatewayRouteTableVpcAssociationIds?: string[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsResult
 */
export interface Ec2DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsResult#LocalGatewayRouteTableVpcAssociations
   */
  readonly localGatewayRouteTableVpcAssociations?: Ec2LocalGatewayRouteTableVpcAssociation[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTableVpcAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLocalGatewayRouteTablesRequest
 */
export interface Ec2DescribeLocalGatewayRouteTablesRequest {
  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesRequest#LocalGatewayRouteTableIds
   */
  readonly localGatewayRouteTableIds?: string[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeLocalGatewayRouteTablesResult
 */
export interface Ec2DescribeLocalGatewayRouteTablesResult {
  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesResult#LocalGatewayRouteTables
   */
  readonly localGatewayRouteTables?: Ec2LocalGatewayRouteTable[];

  /**
   * @schema Ec2DescribeLocalGatewayRouteTablesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest
 */
export interface Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest#LocalGatewayVirtualInterfaceGroupIds
   */
  readonly localGatewayVirtualInterfaceGroupIds?: string[];

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsResult
 */
export interface Ec2DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsResult#LocalGatewayVirtualInterfaceGroups
   */
  readonly localGatewayVirtualInterfaceGroups?: Ec2LocalGatewayVirtualInterfaceGroup[];

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfaceGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLocalGatewayVirtualInterfacesRequest
 */
export interface Ec2DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesRequest#LocalGatewayVirtualInterfaceIds
   */
  readonly localGatewayVirtualInterfaceIds?: string[];

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeLocalGatewayVirtualInterfacesResult
 */
export interface Ec2DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesResult#LocalGatewayVirtualInterfaces
   */
  readonly localGatewayVirtualInterfaces?: Ec2LocalGatewayVirtualInterface[];

  /**
   * @schema Ec2DescribeLocalGatewayVirtualInterfacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeLocalGatewaysRequest
 */
export interface Ec2DescribeLocalGatewaysRequest {
  /**
   * @schema Ec2DescribeLocalGatewaysRequest#LocalGatewayIds
   */
  readonly localGatewayIds?: string[];

  /**
   * @schema Ec2DescribeLocalGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeLocalGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeLocalGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeLocalGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeLocalGatewaysResult
 */
export interface Ec2DescribeLocalGatewaysResult {
  /**
   * @schema Ec2DescribeLocalGatewaysResult#LocalGateways
   */
  readonly localGateways?: Ec2LocalGateway[];

  /**
   * @schema Ec2DescribeLocalGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeManagedPrefixListsRequest
 */
export interface Ec2DescribeManagedPrefixListsRequest {
  /**
   * @schema Ec2DescribeManagedPrefixListsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeManagedPrefixListsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeManagedPrefixListsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeManagedPrefixListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeManagedPrefixListsRequest#PrefixListIds
   */
  readonly prefixListIds?: string[];

}

/**
 * @schema Ec2DescribeManagedPrefixListsResult
 */
export interface Ec2DescribeManagedPrefixListsResult {
  /**
   * @schema Ec2DescribeManagedPrefixListsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeManagedPrefixListsResult#PrefixLists
   */
  readonly prefixLists?: Ec2ManagedPrefixList[];

}

/**
 * @schema Ec2DescribeMovingAddressesRequest
 */
export interface Ec2DescribeMovingAddressesRequest {
  /**
   * @schema Ec2DescribeMovingAddressesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeMovingAddressesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeMovingAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeMovingAddressesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeMovingAddressesRequest#PublicIps
   */
  readonly publicIps?: string[];

}

/**
 * @schema Ec2DescribeMovingAddressesResult
 */
export interface Ec2DescribeMovingAddressesResult {
  /**
   * @schema Ec2DescribeMovingAddressesResult#MovingAddressStatuses
   */
  readonly movingAddressStatuses?: Ec2MovingAddressStatus[];

  /**
   * @schema Ec2DescribeMovingAddressesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeNatGatewaysRequest
 */
export interface Ec2DescribeNatGatewaysRequest {
  /**
   * @schema Ec2DescribeNatGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeNatGatewaysRequest#Filter
   */
  readonly filter?: Ec2Filter[];

  /**
   * @schema Ec2DescribeNatGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeNatGatewaysRequest#NatGatewayIds
   */
  readonly natGatewayIds?: string[];

  /**
   * @schema Ec2DescribeNatGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeNatGatewaysResult
 */
export interface Ec2DescribeNatGatewaysResult {
  /**
   * @schema Ec2DescribeNatGatewaysResult#NatGateways
   */
  readonly natGateways?: Ec2NatGateway[];

  /**
   * @schema Ec2DescribeNatGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeNetworkAclsRequest
 */
export interface Ec2DescribeNetworkAclsRequest {
  /**
   * @schema Ec2DescribeNetworkAclsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeNetworkAclsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeNetworkAclsRequest#NetworkAclIds
   */
  readonly networkAclIds?: string[];

  /**
   * @schema Ec2DescribeNetworkAclsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeNetworkAclsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeNetworkAclsResult
 */
export interface Ec2DescribeNetworkAclsResult {
  /**
   * @schema Ec2DescribeNetworkAclsResult#NetworkAcls
   */
  readonly networkAcls?: Ec2NetworkAcl[];

  /**
   * @schema Ec2DescribeNetworkAclsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeNetworkInterfaceAttributeRequest
 */
export interface Ec2DescribeNetworkInterfaceAttributeRequest {
  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema Ec2DescribeNetworkInterfaceAttributeResult
 */
export interface Ec2DescribeNetworkInterfaceAttributeResult {
  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeResult#Attachment
   */
  readonly attachment?: Ec2NetworkInterfaceAttachment;

  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeResult#Description
   */
  readonly description?: Ec2AttributeValue;

  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeResult#Groups
   */
  readonly groups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2DescribeNetworkInterfaceAttributeResult#SourceDestCheck
   */
  readonly sourceDestCheck?: Ec2AttributeBooleanValue;

}

/**
 * @schema Ec2DescribeNetworkInterfacePermissionsRequest
 */
export interface Ec2DescribeNetworkInterfacePermissionsRequest {
  /**
   * @schema Ec2DescribeNetworkInterfacePermissionsRequest#NetworkInterfacePermissionIds
   */
  readonly networkInterfacePermissionIds?: string[];

  /**
   * @schema Ec2DescribeNetworkInterfacePermissionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeNetworkInterfacePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeNetworkInterfacePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeNetworkInterfacePermissionsResult
 */
export interface Ec2DescribeNetworkInterfacePermissionsResult {
  /**
   * @schema Ec2DescribeNetworkInterfacePermissionsResult#NetworkInterfacePermissions
   */
  readonly networkInterfacePermissions?: Ec2NetworkInterfacePermission[];

  /**
   * @schema Ec2DescribeNetworkInterfacePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeNetworkInterfacesRequest
 */
export interface Ec2DescribeNetworkInterfacesRequest {
  /**
   * @schema Ec2DescribeNetworkInterfacesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeNetworkInterfacesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeNetworkInterfacesRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema Ec2DescribeNetworkInterfacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeNetworkInterfacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeNetworkInterfacesResult
 */
export interface Ec2DescribeNetworkInterfacesResult {
  /**
   * @schema Ec2DescribeNetworkInterfacesResult#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2NetworkInterface[];

  /**
   * @schema Ec2DescribeNetworkInterfacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribePlacementGroupsRequest
 */
export interface Ec2DescribePlacementGroupsRequest {
  /**
   * @schema Ec2DescribePlacementGroupsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribePlacementGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribePlacementGroupsRequest#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema Ec2DescribePlacementGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

}

/**
 * @schema Ec2DescribePlacementGroupsResult
 */
export interface Ec2DescribePlacementGroupsResult {
  /**
   * @schema Ec2DescribePlacementGroupsResult#PlacementGroups
   */
  readonly placementGroups?: Ec2PlacementGroup[];

}

/**
 * @schema Ec2DescribePrefixListsRequest
 */
export interface Ec2DescribePrefixListsRequest {
  /**
   * @schema Ec2DescribePrefixListsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribePrefixListsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribePrefixListsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribePrefixListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribePrefixListsRequest#PrefixListIds
   */
  readonly prefixListIds?: string[];

}

/**
 * @schema Ec2DescribePrefixListsResult
 */
export interface Ec2DescribePrefixListsResult {
  /**
   * @schema Ec2DescribePrefixListsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribePrefixListsResult#PrefixLists
   */
  readonly prefixLists?: Ec2PrefixList[];

}

/**
 * @schema Ec2DescribePrincipalIdFormatRequest
 */
export interface Ec2DescribePrincipalIdFormatRequest {
  /**
   * @schema Ec2DescribePrincipalIdFormatRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribePrincipalIdFormatRequest#Resources
   */
  readonly resources?: string[];

  /**
   * @schema Ec2DescribePrincipalIdFormatRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribePrincipalIdFormatRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribePrincipalIdFormatResult
 */
export interface Ec2DescribePrincipalIdFormatResult {
  /**
   * @schema Ec2DescribePrincipalIdFormatResult#Principals
   */
  readonly principals?: Ec2PrincipalIdFormat[];

  /**
   * @schema Ec2DescribePrincipalIdFormatResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribePublicIpv4PoolsRequest
 */
export interface Ec2DescribePublicIpv4PoolsRequest {
  /**
   * @schema Ec2DescribePublicIpv4PoolsRequest#PoolIds
   */
  readonly poolIds?: string[];

  /**
   * @schema Ec2DescribePublicIpv4PoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribePublicIpv4PoolsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribePublicIpv4PoolsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

}

/**
 * @schema Ec2DescribePublicIpv4PoolsResult
 */
export interface Ec2DescribePublicIpv4PoolsResult {
  /**
   * @schema Ec2DescribePublicIpv4PoolsResult#PublicIpv4Pools
   */
  readonly publicIpv4Pools?: Ec2PublicIpv4Pool[];

  /**
   * @schema Ec2DescribePublicIpv4PoolsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeRegionsRequest
 */
export interface Ec2DescribeRegionsRequest {
  /**
   * @schema Ec2DescribeRegionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeRegionsRequest#RegionNames
   */
  readonly regionNames?: string[];

  /**
   * @schema Ec2DescribeRegionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeRegionsRequest#AllRegions
   */
  readonly allRegions?: boolean;

}

/**
 * @schema Ec2DescribeRegionsResult
 */
export interface Ec2DescribeRegionsResult {
  /**
   * @schema Ec2DescribeRegionsResult#Regions
   */
  readonly regions?: Ec2Region[];

}

/**
 * @schema Ec2DescribeReservedInstancesRequest
 */
export interface Ec2DescribeReservedInstancesRequest {
  /**
   * @schema Ec2DescribeReservedInstancesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeReservedInstancesRequest#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema Ec2DescribeReservedInstancesRequest#ReservedInstancesIds
   */
  readonly reservedInstancesIds?: string[];

  /**
   * @schema Ec2DescribeReservedInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeReservedInstancesRequest#OfferingType
   */
  readonly offeringType?: string;

}

/**
 * @schema Ec2DescribeReservedInstancesResult
 */
export interface Ec2DescribeReservedInstancesResult {
  /**
   * @schema Ec2DescribeReservedInstancesResult#ReservedInstances
   */
  readonly reservedInstances?: Ec2ReservedInstances[];

}

/**
 * @schema Ec2DescribeReservedInstancesListingsRequest
 */
export interface Ec2DescribeReservedInstancesListingsRequest {
  /**
   * @schema Ec2DescribeReservedInstancesListingsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeReservedInstancesListingsRequest#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema Ec2DescribeReservedInstancesListingsRequest#ReservedInstancesListingId
   */
  readonly reservedInstancesListingId?: string;

}

/**
 * @schema Ec2DescribeReservedInstancesListingsResult
 */
export interface Ec2DescribeReservedInstancesListingsResult {
  /**
   * @schema Ec2DescribeReservedInstancesListingsResult#ReservedInstancesListings
   */
  readonly reservedInstancesListings?: Ec2ReservedInstancesListing[];

}

/**
 * @schema Ec2DescribeReservedInstancesModificationsRequest
 */
export interface Ec2DescribeReservedInstancesModificationsRequest {
  /**
   * @schema Ec2DescribeReservedInstancesModificationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeReservedInstancesModificationsRequest#ReservedInstancesModificationIds
   */
  readonly reservedInstancesModificationIds?: string[];

  /**
   * @schema Ec2DescribeReservedInstancesModificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeReservedInstancesModificationsResult
 */
export interface Ec2DescribeReservedInstancesModificationsResult {
  /**
   * @schema Ec2DescribeReservedInstancesModificationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeReservedInstancesModificationsResult#ReservedInstancesModifications
   */
  readonly reservedInstancesModifications?: Ec2ReservedInstancesModification[];

}

/**
 * @schema Ec2DescribeReservedInstancesOfferingsRequest
 */
export interface Ec2DescribeReservedInstancesOfferingsRequest {
  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#IncludeMarketplace
   */
  readonly includeMarketplace?: boolean;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#MaxDuration
   */
  readonly maxDuration?: number;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#MaxInstanceCount
   */
  readonly maxInstanceCount?: number;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#MinDuration
   */
  readonly minDuration?: number;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#ReservedInstancesOfferingIds
   */
  readonly reservedInstancesOfferingIds?: string[];

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsRequest#OfferingType
   */
  readonly offeringType?: string;

}

/**
 * @schema Ec2DescribeReservedInstancesOfferingsResult
 */
export interface Ec2DescribeReservedInstancesOfferingsResult {
  /**
   * @schema Ec2DescribeReservedInstancesOfferingsResult#ReservedInstancesOfferings
   */
  readonly reservedInstancesOfferings?: Ec2ReservedInstancesOffering[];

  /**
   * @schema Ec2DescribeReservedInstancesOfferingsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeRouteTablesRequest
 */
export interface Ec2DescribeRouteTablesRequest {
  /**
   * @schema Ec2DescribeRouteTablesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeRouteTablesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeRouteTablesRequest#RouteTableIds
   */
  readonly routeTableIds?: string[];

  /**
   * @schema Ec2DescribeRouteTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeRouteTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeRouteTablesResult
 */
export interface Ec2DescribeRouteTablesResult {
  /**
   * @schema Ec2DescribeRouteTablesResult#RouteTables
   */
  readonly routeTables?: Ec2RouteTable[];

  /**
   * @schema Ec2DescribeRouteTablesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeScheduledInstanceAvailabilityRequest
 */
export interface Ec2DescribeScheduledInstanceAvailabilityRequest {
  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#FirstSlotStartTimeRange
   */
  readonly firstSlotStartTimeRange: Ec2SlotDateTimeRangeRequest;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#MaxSlotDurationInHours
   */
  readonly maxSlotDurationInHours?: number;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#MinSlotDurationInHours
   */
  readonly minSlotDurationInHours?: number;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityRequest#Recurrence
   */
  readonly recurrence: Ec2ScheduledInstanceRecurrenceRequest;

}

/**
 * @schema Ec2DescribeScheduledInstanceAvailabilityResult
 */
export interface Ec2DescribeScheduledInstanceAvailabilityResult {
  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeScheduledInstanceAvailabilityResult#ScheduledInstanceAvailabilitySet
   */
  readonly scheduledInstanceAvailabilitySet?: Ec2ScheduledInstanceAvailability[];

}

/**
 * @schema Ec2DescribeScheduledInstancesRequest
 */
export interface Ec2DescribeScheduledInstancesRequest {
  /**
   * @schema Ec2DescribeScheduledInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeScheduledInstancesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeScheduledInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeScheduledInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeScheduledInstancesRequest#ScheduledInstanceIds
   */
  readonly scheduledInstanceIds?: string[];

  /**
   * @schema Ec2DescribeScheduledInstancesRequest#SlotStartTimeRange
   */
  readonly slotStartTimeRange?: Ec2SlotStartTimeRangeRequest;

}

/**
 * @schema Ec2DescribeScheduledInstancesResult
 */
export interface Ec2DescribeScheduledInstancesResult {
  /**
   * @schema Ec2DescribeScheduledInstancesResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeScheduledInstancesResult#ScheduledInstanceSet
   */
  readonly scheduledInstanceSet?: Ec2ScheduledInstance[];

}

/**
 * @schema Ec2DescribeSecurityGroupReferencesRequest
 */
export interface Ec2DescribeSecurityGroupReferencesRequest {
  /**
   * @schema Ec2DescribeSecurityGroupReferencesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSecurityGroupReferencesRequest#GroupId
   */
  readonly groupId: string[];

}

/**
 * @schema Ec2DescribeSecurityGroupReferencesResult
 */
export interface Ec2DescribeSecurityGroupReferencesResult {
  /**
   * @schema Ec2DescribeSecurityGroupReferencesResult#SecurityGroupReferenceSet
   */
  readonly securityGroupReferenceSet?: Ec2SecurityGroupReference[];

}

/**
 * @schema Ec2DescribeSecurityGroupsRequest
 */
export interface Ec2DescribeSecurityGroupsRequest {
  /**
   * @schema Ec2DescribeSecurityGroupsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeSecurityGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema Ec2DescribeSecurityGroupsRequest#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema Ec2DescribeSecurityGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSecurityGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSecurityGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeSecurityGroupsResult
 */
export interface Ec2DescribeSecurityGroupsResult {
  /**
   * @schema Ec2DescribeSecurityGroupsResult#SecurityGroups
   */
  readonly securityGroups?: Ec2SecurityGroup[];

  /**
   * @schema Ec2DescribeSecurityGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeSnapshotAttributeRequest
 */
export interface Ec2DescribeSnapshotAttributeRequest {
  /**
   * @schema Ec2DescribeSnapshotAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2DescribeSnapshotAttributeRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema Ec2DescribeSnapshotAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeSnapshotAttributeResult
 */
export interface Ec2DescribeSnapshotAttributeResult {
  /**
   * @schema Ec2DescribeSnapshotAttributeResult#CreateVolumePermissions
   */
  readonly createVolumePermissions?: Ec2CreateVolumePermission[];

  /**
   * @schema Ec2DescribeSnapshotAttributeResult#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2DescribeSnapshotAttributeResult#SnapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema Ec2DescribeSnapshotsRequest
 */
export interface Ec2DescribeSnapshotsRequest {
  /**
   * @schema Ec2DescribeSnapshotsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeSnapshotsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeSnapshotsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSnapshotsRequest#OwnerIds
   */
  readonly ownerIds?: string[];

  /**
   * @schema Ec2DescribeSnapshotsRequest#RestorableByUserIds
   */
  readonly restorableByUserIds?: string[];

  /**
   * @schema Ec2DescribeSnapshotsRequest#SnapshotIds
   */
  readonly snapshotIds?: string[];

  /**
   * @schema Ec2DescribeSnapshotsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeSnapshotsResult
 */
export interface Ec2DescribeSnapshotsResult {
  /**
   * @schema Ec2DescribeSnapshotsResult#Snapshots
   */
  readonly snapshots?: Ec2Snapshot[];

  /**
   * @schema Ec2DescribeSnapshotsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeSpotDatafeedSubscriptionRequest
 */
export interface Ec2DescribeSpotDatafeedSubscriptionRequest {
  /**
   * @schema Ec2DescribeSpotDatafeedSubscriptionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeSpotDatafeedSubscriptionResult
 */
export interface Ec2DescribeSpotDatafeedSubscriptionResult {
  /**
   * @schema Ec2DescribeSpotDatafeedSubscriptionResult#SpotDatafeedSubscription
   */
  readonly spotDatafeedSubscription?: Ec2SpotDatafeedSubscription;

}

/**
 * @schema Ec2DescribeSpotFleetInstancesRequest
 */
export interface Ec2DescribeSpotFleetInstancesRequest {
  /**
   * @schema Ec2DescribeSpotFleetInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSpotFleetInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeSpotFleetInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotFleetInstancesRequest#SpotFleetRequestId
   */
  readonly spotFleetRequestId: string;

}

/**
 * @schema Ec2DescribeSpotFleetInstancesResponse
 */
export interface Ec2DescribeSpotFleetInstancesResponse {
  /**
   * @schema Ec2DescribeSpotFleetInstancesResponse#ActiveInstances
   */
  readonly activeInstances?: Ec2ActiveInstance[];

  /**
   * @schema Ec2DescribeSpotFleetInstancesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotFleetInstancesResponse#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema Ec2DescribeSpotFleetRequestHistoryRequest
 */
export interface Ec2DescribeSpotFleetRequestHistoryRequest {
  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryRequest#SpotFleetRequestId
   */
  readonly spotFleetRequestId: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryRequest#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema Ec2DescribeSpotFleetRequestHistoryResponse
 */
export interface Ec2DescribeSpotFleetRequestHistoryResponse {
  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryResponse#HistoryRecords
   */
  readonly historyRecords?: Ec2HistoryRecord[];

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryResponse#LastEvaluatedTime
   */
  readonly lastEvaluatedTime?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryResponse#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestHistoryResponse#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema Ec2DescribeSpotFleetRequestsRequest
 */
export interface Ec2DescribeSpotFleetRequestsRequest {
  /**
   * @schema Ec2DescribeSpotFleetRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSpotFleetRequestsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeSpotFleetRequestsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestsRequest#SpotFleetRequestIds
   */
  readonly spotFleetRequestIds?: string[];

}

/**
 * @schema Ec2DescribeSpotFleetRequestsResponse
 */
export interface Ec2DescribeSpotFleetRequestsResponse {
  /**
   * @schema Ec2DescribeSpotFleetRequestsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotFleetRequestsResponse#SpotFleetRequestConfigs
   */
  readonly spotFleetRequestConfigs?: Ec2SpotFleetRequestConfig[];

}

/**
 * @schema Ec2DescribeSpotInstanceRequestsRequest
 */
export interface Ec2DescribeSpotInstanceRequestsRequest {
  /**
   * @schema Ec2DescribeSpotInstanceRequestsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeSpotInstanceRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSpotInstanceRequestsRequest#SpotInstanceRequestIds
   */
  readonly spotInstanceRequestIds?: string[];

  /**
   * @schema Ec2DescribeSpotInstanceRequestsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotInstanceRequestsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeSpotInstanceRequestsResult
 */
export interface Ec2DescribeSpotInstanceRequestsResult {
  /**
   * @schema Ec2DescribeSpotInstanceRequestsResult#SpotInstanceRequests
   */
  readonly spotInstanceRequests?: Ec2SpotInstanceRequest[];

  /**
   * @schema Ec2DescribeSpotInstanceRequestsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeSpotPriceHistoryRequest
 */
export interface Ec2DescribeSpotPriceHistoryRequest {
  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#InstanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#ProductDescriptions
   */
  readonly productDescriptions?: string[];

  /**
   * @schema Ec2DescribeSpotPriceHistoryRequest#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema Ec2DescribeSpotPriceHistoryResult
 */
export interface Ec2DescribeSpotPriceHistoryResult {
  /**
   * @schema Ec2DescribeSpotPriceHistoryResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSpotPriceHistoryResult#SpotPriceHistory
   */
  readonly spotPriceHistory?: Ec2SpotPrice[];

}

/**
 * @schema Ec2DescribeStaleSecurityGroupsRequest
 */
export interface Ec2DescribeStaleSecurityGroupsRequest {
  /**
   * @schema Ec2DescribeStaleSecurityGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeStaleSecurityGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeStaleSecurityGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeStaleSecurityGroupsRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2DescribeStaleSecurityGroupsResult
 */
export interface Ec2DescribeStaleSecurityGroupsResult {
  /**
   * @schema Ec2DescribeStaleSecurityGroupsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeStaleSecurityGroupsResult#StaleSecurityGroupSet
   */
  readonly staleSecurityGroupSet?: Ec2StaleSecurityGroup[];

}

/**
 * @schema Ec2DescribeSubnetsRequest
 */
export interface Ec2DescribeSubnetsRequest {
  /**
   * @schema Ec2DescribeSubnetsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeSubnetsRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Ec2DescribeSubnetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeSubnetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeSubnetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeSubnetsResult
 */
export interface Ec2DescribeSubnetsResult {
  /**
   * @schema Ec2DescribeSubnetsResult#Subnets
   */
  readonly subnets?: Ec2Subnet[];

  /**
   * @schema Ec2DescribeSubnetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTagsRequest
 */
export interface Ec2DescribeTagsRequest {
  /**
   * @schema Ec2DescribeTagsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeTagsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTagsResult
 */
export interface Ec2DescribeTagsResult {
  /**
   * @schema Ec2DescribeTagsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTagsResult#Tags
   */
  readonly tags?: Ec2TagDescription[];

}

/**
 * @schema Ec2DescribeTrafficMirrorFiltersRequest
 */
export interface Ec2DescribeTrafficMirrorFiltersRequest {
  /**
   * @schema Ec2DescribeTrafficMirrorFiltersRequest#TrafficMirrorFilterIds
   */
  readonly trafficMirrorFilterIds?: string[];

  /**
   * @schema Ec2DescribeTrafficMirrorFiltersRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeTrafficMirrorFiltersRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTrafficMirrorFiltersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTrafficMirrorFiltersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTrafficMirrorFiltersResult
 */
export interface Ec2DescribeTrafficMirrorFiltersResult {
  /**
   * @schema Ec2DescribeTrafficMirrorFiltersResult#TrafficMirrorFilters
   */
  readonly trafficMirrorFilters?: Ec2TrafficMirrorFilter[];

  /**
   * @schema Ec2DescribeTrafficMirrorFiltersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTrafficMirrorSessionsRequest
 */
export interface Ec2DescribeTrafficMirrorSessionsRequest {
  /**
   * @schema Ec2DescribeTrafficMirrorSessionsRequest#TrafficMirrorSessionIds
   */
  readonly trafficMirrorSessionIds?: string[];

  /**
   * @schema Ec2DescribeTrafficMirrorSessionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeTrafficMirrorSessionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTrafficMirrorSessionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTrafficMirrorSessionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTrafficMirrorSessionsResult
 */
export interface Ec2DescribeTrafficMirrorSessionsResult {
  /**
   * @schema Ec2DescribeTrafficMirrorSessionsResult#TrafficMirrorSessions
   */
  readonly trafficMirrorSessions?: Ec2TrafficMirrorSession[];

  /**
   * @schema Ec2DescribeTrafficMirrorSessionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTrafficMirrorTargetsRequest
 */
export interface Ec2DescribeTrafficMirrorTargetsRequest {
  /**
   * @schema Ec2DescribeTrafficMirrorTargetsRequest#TrafficMirrorTargetIds
   */
  readonly trafficMirrorTargetIds?: string[];

  /**
   * @schema Ec2DescribeTrafficMirrorTargetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeTrafficMirrorTargetsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTrafficMirrorTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTrafficMirrorTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTrafficMirrorTargetsResult
 */
export interface Ec2DescribeTrafficMirrorTargetsResult {
  /**
   * @schema Ec2DescribeTrafficMirrorTargetsResult#TrafficMirrorTargets
   */
  readonly trafficMirrorTargets?: Ec2TrafficMirrorTarget[];

  /**
   * @schema Ec2DescribeTrafficMirrorTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTransitGatewayAttachmentsRequest
 */
export interface Ec2DescribeTransitGatewayAttachmentsRequest {
  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsRequest#TransitGatewayAttachmentIds
   */
  readonly transitGatewayAttachmentIds?: string[];

  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeTransitGatewayAttachmentsResult
 */
export interface Ec2DescribeTransitGatewayAttachmentsResult {
  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsResult#TransitGatewayAttachments
   */
  readonly transitGatewayAttachments?: Ec2TransitGatewayAttachment[];

  /**
   * @schema Ec2DescribeTransitGatewayAttachmentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTransitGatewayMulticastDomainsRequest
 */
export interface Ec2DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsRequest#TransitGatewayMulticastDomainIds
   */
  readonly transitGatewayMulticastDomainIds?: string[];

  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeTransitGatewayMulticastDomainsResult
 */
export interface Ec2DescribeTransitGatewayMulticastDomainsResult {
  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsResult#TransitGatewayMulticastDomains
   */
  readonly transitGatewayMulticastDomains?: Ec2TransitGatewayMulticastDomain[];

  /**
   * @schema Ec2DescribeTransitGatewayMulticastDomainsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTransitGatewayPeeringAttachmentsRequest
 */
export interface Ec2DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsRequest#TransitGatewayAttachmentIds
   */
  readonly transitGatewayAttachmentIds?: string[];

  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeTransitGatewayPeeringAttachmentsResult
 */
export interface Ec2DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsResult#TransitGatewayPeeringAttachments
   */
  readonly transitGatewayPeeringAttachments?: Ec2TransitGatewayPeeringAttachment[];

  /**
   * @schema Ec2DescribeTransitGatewayPeeringAttachmentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTransitGatewayRouteTablesRequest
 */
export interface Ec2DescribeTransitGatewayRouteTablesRequest {
  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesRequest#TransitGatewayRouteTableIds
   */
  readonly transitGatewayRouteTableIds?: string[];

  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeTransitGatewayRouteTablesResult
 */
export interface Ec2DescribeTransitGatewayRouteTablesResult {
  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesResult#TransitGatewayRouteTables
   */
  readonly transitGatewayRouteTables?: Ec2TransitGatewayRouteTable[];

  /**
   * @schema Ec2DescribeTransitGatewayRouteTablesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTransitGatewayVpcAttachmentsRequest
 */
export interface Ec2DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsRequest#TransitGatewayAttachmentIds
   */
  readonly transitGatewayAttachmentIds?: string[];

  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeTransitGatewayVpcAttachmentsResult
 */
export interface Ec2DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsResult#TransitGatewayVpcAttachments
   */
  readonly transitGatewayVpcAttachments?: Ec2TransitGatewayVpcAttachment[];

  /**
   * @schema Ec2DescribeTransitGatewayVpcAttachmentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeTransitGatewaysRequest
 */
export interface Ec2DescribeTransitGatewaysRequest {
  /**
   * @schema Ec2DescribeTransitGatewaysRequest#TransitGatewayIds
   */
  readonly transitGatewayIds?: string[];

  /**
   * @schema Ec2DescribeTransitGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeTransitGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeTransitGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeTransitGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeTransitGatewaysResult
 */
export interface Ec2DescribeTransitGatewaysResult {
  /**
   * @schema Ec2DescribeTransitGatewaysResult#TransitGateways
   */
  readonly transitGateways?: Ec2TransitGateway[];

  /**
   * @schema Ec2DescribeTransitGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVolumeAttributeRequest
 */
export interface Ec2DescribeVolumeAttributeRequest {
  /**
   * @schema Ec2DescribeVolumeAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2DescribeVolumeAttributeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2DescribeVolumeAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeVolumeAttributeResult
 */
export interface Ec2DescribeVolumeAttributeResult {
  /**
   * @schema Ec2DescribeVolumeAttributeResult#AutoEnableIO
   */
  readonly autoEnableIo?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2DescribeVolumeAttributeResult#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2DescribeVolumeAttributeResult#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema Ec2DescribeVolumeStatusRequest
 */
export interface Ec2DescribeVolumeStatusRequest {
  /**
   * @schema Ec2DescribeVolumeStatusRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVolumeStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVolumeStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVolumeStatusRequest#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * @schema Ec2DescribeVolumeStatusRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeVolumeStatusResult
 */
export interface Ec2DescribeVolumeStatusResult {
  /**
   * @schema Ec2DescribeVolumeStatusResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVolumeStatusResult#VolumeStatuses
   */
  readonly volumeStatuses?: Ec2VolumeStatusItem[];

}

/**
 * @schema Ec2DescribeVolumesRequest
 */
export interface Ec2DescribeVolumesRequest {
  /**
   * @schema Ec2DescribeVolumesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVolumesRequest#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * @schema Ec2DescribeVolumesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVolumesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVolumesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVolumesResult
 */
export interface Ec2DescribeVolumesResult {
  /**
   * @schema Ec2DescribeVolumesResult#Volumes
   */
  readonly volumes?: Ec2Volume[];

  /**
   * @schema Ec2DescribeVolumesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVolumesModificationsRequest
 */
export interface Ec2DescribeVolumesModificationsRequest {
  /**
   * @schema Ec2DescribeVolumesModificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVolumesModificationsRequest#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * @schema Ec2DescribeVolumesModificationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVolumesModificationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVolumesModificationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeVolumesModificationsResult
 */
export interface Ec2DescribeVolumesModificationsResult {
  /**
   * @schema Ec2DescribeVolumesModificationsResult#VolumesModifications
   */
  readonly volumesModifications?: Ec2VolumeModification[];

  /**
   * @schema Ec2DescribeVolumesModificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcAttributeRequest
 */
export interface Ec2DescribeVpcAttributeRequest {
  /**
   * @schema Ec2DescribeVpcAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2DescribeVpcAttributeRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2DescribeVpcAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeVpcAttributeResult
 */
export interface Ec2DescribeVpcAttributeResult {
  /**
   * @schema Ec2DescribeVpcAttributeResult#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2DescribeVpcAttributeResult#EnableDnsHostnames
   */
  readonly enableDnsHostnames?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2DescribeVpcAttributeResult#EnableDnsSupport
   */
  readonly enableDnsSupport?: Ec2AttributeBooleanValue;

}

/**
 * @schema Ec2DescribeVpcClassicLinkRequest
 */
export interface Ec2DescribeVpcClassicLinkRequest {
  /**
   * @schema Ec2DescribeVpcClassicLinkRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcClassicLinkRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcClassicLinkRequest#VpcIds
   */
  readonly vpcIds?: string[];

}

/**
 * @schema Ec2DescribeVpcClassicLinkResult
 */
export interface Ec2DescribeVpcClassicLinkResult {
  /**
   * @schema Ec2DescribeVpcClassicLinkResult#Vpcs
   */
  readonly vpcs?: Ec2VpcClassicLink[];

}

/**
 * @schema Ec2DescribeVpcClassicLinkDnsSupportRequest
 */
export interface Ec2DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * @schema Ec2DescribeVpcClassicLinkDnsSupportRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcClassicLinkDnsSupportRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVpcClassicLinkDnsSupportRequest#VpcIds
   */
  readonly vpcIds?: string[];

}

/**
 * @schema Ec2DescribeVpcClassicLinkDnsSupportResult
 */
export interface Ec2DescribeVpcClassicLinkDnsSupportResult {
  /**
   * @schema Ec2DescribeVpcClassicLinkDnsSupportResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVpcClassicLinkDnsSupportResult#Vpcs
   */
  readonly vpcs?: Ec2ClassicLinkDnsSupport[];

}

/**
 * @schema Ec2DescribeVpcEndpointConnectionNotificationsRequest
 */
export interface Ec2DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsRequest#ConnectionNotificationId
   */
  readonly connectionNotificationId?: string;

  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointConnectionNotificationsResult
 */
export interface Ec2DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsResult#ConnectionNotificationSet
   */
  readonly connectionNotificationSet?: Ec2ConnectionNotification[];

  /**
   * @schema Ec2DescribeVpcEndpointConnectionNotificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointConnectionsRequest
 */
export interface Ec2DescribeVpcEndpointConnectionsRequest {
  /**
   * @schema Ec2DescribeVpcEndpointConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcEndpointConnectionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcEndpointConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcEndpointConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointConnectionsResult
 */
export interface Ec2DescribeVpcEndpointConnectionsResult {
  /**
   * @schema Ec2DescribeVpcEndpointConnectionsResult#VpcEndpointConnections
   */
  readonly vpcEndpointConnections?: Ec2VpcEndpointConnection[];

  /**
   * @schema Ec2DescribeVpcEndpointConnectionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointServiceConfigurationsRequest
 */
export interface Ec2DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsRequest#ServiceIds
   */
  readonly serviceIds?: string[];

  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointServiceConfigurationsResult
 */
export interface Ec2DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsResult#ServiceConfigurations
   */
  readonly serviceConfigurations?: Ec2ServiceConfiguration[];

  /**
   * @schema Ec2DescribeVpcEndpointServiceConfigurationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointServicePermissionsRequest
 */
export interface Ec2DescribeVpcEndpointServicePermissionsRequest {
  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointServicePermissionsResult
 */
export interface Ec2DescribeVpcEndpointServicePermissionsResult {
  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsResult#AllowedPrincipals
   */
  readonly allowedPrincipals?: Ec2AllowedPrincipal[];

  /**
   * @schema Ec2DescribeVpcEndpointServicePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointServicesRequest
 */
export interface Ec2DescribeVpcEndpointServicesRequest {
  /**
   * @schema Ec2DescribeVpcEndpointServicesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcEndpointServicesRequest#ServiceNames
   */
  readonly serviceNames?: string[];

  /**
   * @schema Ec2DescribeVpcEndpointServicesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcEndpointServicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcEndpointServicesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointServicesResult
 */
export interface Ec2DescribeVpcEndpointServicesResult {
  /**
   * @schema Ec2DescribeVpcEndpointServicesResult#ServiceNames
   */
  readonly serviceNames?: string[];

  /**
   * @schema Ec2DescribeVpcEndpointServicesResult#ServiceDetails
   */
  readonly serviceDetails?: Ec2ServiceDetail[];

  /**
   * @schema Ec2DescribeVpcEndpointServicesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointsRequest
 */
export interface Ec2DescribeVpcEndpointsRequest {
  /**
   * @schema Ec2DescribeVpcEndpointsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcEndpointsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds?: string[];

  /**
   * @schema Ec2DescribeVpcEndpointsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2DescribeVpcEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcEndpointsResult
 */
export interface Ec2DescribeVpcEndpointsResult {
  /**
   * @schema Ec2DescribeVpcEndpointsResult#VpcEndpoints
   */
  readonly vpcEndpoints?: Ec2VpcEndpoint[];

  /**
   * @schema Ec2DescribeVpcEndpointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcPeeringConnectionsRequest
 */
export interface Ec2DescribeVpcPeeringConnectionsRequest {
  /**
   * @schema Ec2DescribeVpcPeeringConnectionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcPeeringConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcPeeringConnectionsRequest#VpcPeeringConnectionIds
   */
  readonly vpcPeeringConnectionIds?: string[];

  /**
   * @schema Ec2DescribeVpcPeeringConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVpcPeeringConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeVpcPeeringConnectionsResult
 */
export interface Ec2DescribeVpcPeeringConnectionsResult {
  /**
   * @schema Ec2DescribeVpcPeeringConnectionsResult#VpcPeeringConnections
   */
  readonly vpcPeeringConnections?: Ec2VpcPeeringConnection[];

  /**
   * @schema Ec2DescribeVpcPeeringConnectionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpcsRequest
 */
export interface Ec2DescribeVpcsRequest {
  /**
   * @schema Ec2DescribeVpcsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpcsRequest#VpcIds
   */
  readonly vpcIds?: string[];

  /**
   * @schema Ec2DescribeVpcsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DescribeVpcsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2DescribeVpcsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema Ec2DescribeVpcsResult
 */
export interface Ec2DescribeVpcsResult {
  /**
   * @schema Ec2DescribeVpcsResult#Vpcs
   */
  readonly vpcs?: Ec2Vpc[];

  /**
   * @schema Ec2DescribeVpcsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2DescribeVpnConnectionsRequest
 */
export interface Ec2DescribeVpnConnectionsRequest {
  /**
   * @schema Ec2DescribeVpnConnectionsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpnConnectionsRequest#VpnConnectionIds
   */
  readonly vpnConnectionIds?: string[];

  /**
   * @schema Ec2DescribeVpnConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeVpnConnectionsResult
 */
export interface Ec2DescribeVpnConnectionsResult {
  /**
   * @schema Ec2DescribeVpnConnectionsResult#VpnConnections
   */
  readonly vpnConnections?: Ec2VpnConnection[];

}

/**
 * @schema Ec2DescribeVpnGatewaysRequest
 */
export interface Ec2DescribeVpnGatewaysRequest {
  /**
   * @schema Ec2DescribeVpnGatewaysRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2DescribeVpnGatewaysRequest#VpnGatewayIds
   */
  readonly vpnGatewayIds?: string[];

  /**
   * @schema Ec2DescribeVpnGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DescribeVpnGatewaysResult
 */
export interface Ec2DescribeVpnGatewaysResult {
  /**
   * @schema Ec2DescribeVpnGatewaysResult#VpnGateways
   */
  readonly vpnGateways?: Ec2VpnGateway[];

}

/**
 * @schema Ec2DetachClassicLinkVpcRequest
 */
export interface Ec2DetachClassicLinkVpcRequest {
  /**
   * @schema Ec2DetachClassicLinkVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DetachClassicLinkVpcRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2DetachClassicLinkVpcRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2DetachClassicLinkVpcResult
 */
export interface Ec2DetachClassicLinkVpcResult {
  /**
   * @schema Ec2DetachClassicLinkVpcResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DetachInternetGatewayRequest
 */
export interface Ec2DetachInternetGatewayRequest {
  /**
   * @schema Ec2DetachInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DetachInternetGatewayRequest#InternetGatewayId
   */
  readonly internetGatewayId: string;

  /**
   * @schema Ec2DetachInternetGatewayRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2DetachNetworkInterfaceRequest
 */
export interface Ec2DetachNetworkInterfaceRequest {
  /**
   * @schema Ec2DetachNetworkInterfaceRequest#AttachmentId
   */
  readonly attachmentId: string;

  /**
   * @schema Ec2DetachNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DetachNetworkInterfaceRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema Ec2DetachVolumeRequest
 */
export interface Ec2DetachVolumeRequest {
  /**
   * @schema Ec2DetachVolumeRequest#Device
   */
  readonly device?: string;

  /**
   * @schema Ec2DetachVolumeRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema Ec2DetachVolumeRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2DetachVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2DetachVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DetachVpnGatewayRequest
 */
export interface Ec2DetachVpnGatewayRequest {
  /**
   * @schema Ec2DetachVpnGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2DetachVpnGatewayRequest#VpnGatewayId
   */
  readonly vpnGatewayId: string;

  /**
   * @schema Ec2DetachVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisableEbsEncryptionByDefaultRequest
 */
export interface Ec2DisableEbsEncryptionByDefaultRequest {
  /**
   * @schema Ec2DisableEbsEncryptionByDefaultRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisableEbsEncryptionByDefaultResult
 */
export interface Ec2DisableEbsEncryptionByDefaultResult {
  /**
   * @schema Ec2DisableEbsEncryptionByDefaultResult#EbsEncryptionByDefault
   */
  readonly ebsEncryptionByDefault?: boolean;

}

/**
 * @schema Ec2DisableFastSnapshotRestoresRequest
 */
export interface Ec2DisableFastSnapshotRestoresRequest {
  /**
   * @schema Ec2DisableFastSnapshotRestoresRequest#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema Ec2DisableFastSnapshotRestoresRequest#SourceSnapshotIds
   */
  readonly sourceSnapshotIds: string[];

  /**
   * @schema Ec2DisableFastSnapshotRestoresRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisableFastSnapshotRestoresResult
 */
export interface Ec2DisableFastSnapshotRestoresResult {
  /**
   * @schema Ec2DisableFastSnapshotRestoresResult#Successful
   */
  readonly successful?: Ec2DisableFastSnapshotRestoreSuccessItem[];

  /**
   * @schema Ec2DisableFastSnapshotRestoresResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2DisableFastSnapshotRestoreErrorItem[];

}

/**
 * @schema Ec2DisableTransitGatewayRouteTablePropagationRequest
 */
export interface Ec2DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * @schema Ec2DisableTransitGatewayRouteTablePropagationRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2DisableTransitGatewayRouteTablePropagationRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2DisableTransitGatewayRouteTablePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisableTransitGatewayRouteTablePropagationResult
 */
export interface Ec2DisableTransitGatewayRouteTablePropagationResult {
  /**
   * @schema Ec2DisableTransitGatewayRouteTablePropagationResult#Propagation
   */
  readonly propagation?: Ec2TransitGatewayPropagation;

}

/**
 * @schema Ec2DisableVgwRoutePropagationRequest
 */
export interface Ec2DisableVgwRoutePropagationRequest {
  /**
   * @schema Ec2DisableVgwRoutePropagationRequest#GatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema Ec2DisableVgwRoutePropagationRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema Ec2DisableVgwRoutePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisableVpcClassicLinkRequest
 */
export interface Ec2DisableVpcClassicLinkRequest {
  /**
   * @schema Ec2DisableVpcClassicLinkRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2DisableVpcClassicLinkRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2DisableVpcClassicLinkResult
 */
export interface Ec2DisableVpcClassicLinkResult {
  /**
   * @schema Ec2DisableVpcClassicLinkResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DisableVpcClassicLinkDnsSupportRequest
 */
export interface Ec2DisableVpcClassicLinkDnsSupportRequest {
  /**
   * @schema Ec2DisableVpcClassicLinkDnsSupportRequest#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2DisableVpcClassicLinkDnsSupportResult
 */
export interface Ec2DisableVpcClassicLinkDnsSupportResult {
  /**
   * @schema Ec2DisableVpcClassicLinkDnsSupportResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DisassociateAddressRequest
 */
export interface Ec2DisassociateAddressRequest {
  /**
   * @schema Ec2DisassociateAddressRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2DisassociateAddressRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2DisassociateAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisassociateClientVpnTargetNetworkRequest
 */
export interface Ec2DisassociateClientVpnTargetNetworkRequest {
  /**
   * @schema Ec2DisassociateClientVpnTargetNetworkRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2DisassociateClientVpnTargetNetworkRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema Ec2DisassociateClientVpnTargetNetworkRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisassociateClientVpnTargetNetworkResult
 */
export interface Ec2DisassociateClientVpnTargetNetworkResult {
  /**
   * @schema Ec2DisassociateClientVpnTargetNetworkResult#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2DisassociateClientVpnTargetNetworkResult#Status
   */
  readonly status?: Ec2AssociationStatus;

}

/**
 * @schema Ec2DisassociateEnclaveCertificateIamRoleRequest
 */
export interface Ec2DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * @schema Ec2DisassociateEnclaveCertificateIamRoleRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Ec2DisassociateEnclaveCertificateIamRoleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Ec2DisassociateEnclaveCertificateIamRoleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisassociateEnclaveCertificateIamRoleResult
 */
export interface Ec2DisassociateEnclaveCertificateIamRoleResult {
  /**
   * @schema Ec2DisassociateEnclaveCertificateIamRoleResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2DisassociateIamInstanceProfileRequest
 */
export interface Ec2DisassociateIamInstanceProfileRequest {
  /**
   * @schema Ec2DisassociateIamInstanceProfileRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema Ec2DisassociateIamInstanceProfileResult
 */
export interface Ec2DisassociateIamInstanceProfileResult {
  /**
   * @schema Ec2DisassociateIamInstanceProfileResult#IamInstanceProfileAssociation
   */
  readonly iamInstanceProfileAssociation?: Ec2IamInstanceProfileAssociation;

}

/**
 * @schema Ec2DisassociateRouteTableRequest
 */
export interface Ec2DisassociateRouteTableRequest {
  /**
   * @schema Ec2DisassociateRouteTableRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema Ec2DisassociateRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisassociateSubnetCidrBlockRequest
 */
export interface Ec2DisassociateSubnetCidrBlockRequest {
  /**
   * @schema Ec2DisassociateSubnetCidrBlockRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema Ec2DisassociateSubnetCidrBlockResult
 */
export interface Ec2DisassociateSubnetCidrBlockResult {
  /**
   * @schema Ec2DisassociateSubnetCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: Ec2SubnetIpv6CidrBlockAssociation;

  /**
   * @schema Ec2DisassociateSubnetCidrBlockResult#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema Ec2DisassociateTransitGatewayMulticastDomainRequest
 */
export interface Ec2DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * @schema Ec2DisassociateTransitGatewayMulticastDomainRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2DisassociateTransitGatewayMulticastDomainRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2DisassociateTransitGatewayMulticastDomainRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Ec2DisassociateTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisassociateTransitGatewayMulticastDomainResult
 */
export interface Ec2DisassociateTransitGatewayMulticastDomainResult {
  /**
   * @schema Ec2DisassociateTransitGatewayMulticastDomainResult#Associations
   */
  readonly associations?: Ec2TransitGatewayMulticastDomainAssociations;

}

/**
 * @schema Ec2DisassociateTransitGatewayRouteTableRequest
 */
export interface Ec2DisassociateTransitGatewayRouteTableRequest {
  /**
   * @schema Ec2DisassociateTransitGatewayRouteTableRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2DisassociateTransitGatewayRouteTableRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2DisassociateTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2DisassociateTransitGatewayRouteTableResult
 */
export interface Ec2DisassociateTransitGatewayRouteTableResult {
  /**
   * @schema Ec2DisassociateTransitGatewayRouteTableResult#Association
   */
  readonly association?: Ec2TransitGatewayAssociation;

}

/**
 * @schema Ec2DisassociateVpcCidrBlockRequest
 */
export interface Ec2DisassociateVpcCidrBlockRequest {
  /**
   * @schema Ec2DisassociateVpcCidrBlockRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema Ec2DisassociateVpcCidrBlockResult
 */
export interface Ec2DisassociateVpcCidrBlockResult {
  /**
   * @schema Ec2DisassociateVpcCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: Ec2VpcIpv6CidrBlockAssociation;

  /**
   * @schema Ec2DisassociateVpcCidrBlockResult#CidrBlockAssociation
   */
  readonly cidrBlockAssociation?: Ec2VpcCidrBlockAssociation;

  /**
   * @schema Ec2DisassociateVpcCidrBlockResult#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2EnableEbsEncryptionByDefaultRequest
 */
export interface Ec2EnableEbsEncryptionByDefaultRequest {
  /**
   * @schema Ec2EnableEbsEncryptionByDefaultRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2EnableEbsEncryptionByDefaultResult
 */
export interface Ec2EnableEbsEncryptionByDefaultResult {
  /**
   * @schema Ec2EnableEbsEncryptionByDefaultResult#EbsEncryptionByDefault
   */
  readonly ebsEncryptionByDefault?: boolean;

}

/**
 * @schema Ec2EnableFastSnapshotRestoresRequest
 */
export interface Ec2EnableFastSnapshotRestoresRequest {
  /**
   * @schema Ec2EnableFastSnapshotRestoresRequest#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema Ec2EnableFastSnapshotRestoresRequest#SourceSnapshotIds
   */
  readonly sourceSnapshotIds: string[];

  /**
   * @schema Ec2EnableFastSnapshotRestoresRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2EnableFastSnapshotRestoresResult
 */
export interface Ec2EnableFastSnapshotRestoresResult {
  /**
   * @schema Ec2EnableFastSnapshotRestoresResult#Successful
   */
  readonly successful?: Ec2EnableFastSnapshotRestoreSuccessItem[];

  /**
   * @schema Ec2EnableFastSnapshotRestoresResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2EnableFastSnapshotRestoreErrorItem[];

}

/**
 * @schema Ec2EnableTransitGatewayRouteTablePropagationRequest
 */
export interface Ec2EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * @schema Ec2EnableTransitGatewayRouteTablePropagationRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2EnableTransitGatewayRouteTablePropagationRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2EnableTransitGatewayRouteTablePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2EnableTransitGatewayRouteTablePropagationResult
 */
export interface Ec2EnableTransitGatewayRouteTablePropagationResult {
  /**
   * @schema Ec2EnableTransitGatewayRouteTablePropagationResult#Propagation
   */
  readonly propagation?: Ec2TransitGatewayPropagation;

}

/**
 * @schema Ec2EnableVgwRoutePropagationRequest
 */
export interface Ec2EnableVgwRoutePropagationRequest {
  /**
   * @schema Ec2EnableVgwRoutePropagationRequest#GatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema Ec2EnableVgwRoutePropagationRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema Ec2EnableVgwRoutePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2EnableVolumeIoRequest
 */
export interface Ec2EnableVolumeIoRequest {
  /**
   * @schema Ec2EnableVolumeIoRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2EnableVolumeIoRequest#VolumeId
   */
  readonly volumeId: string;

}

/**
 * @schema Ec2EnableVpcClassicLinkRequest
 */
export interface Ec2EnableVpcClassicLinkRequest {
  /**
   * @schema Ec2EnableVpcClassicLinkRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2EnableVpcClassicLinkRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2EnableVpcClassicLinkResult
 */
export interface Ec2EnableVpcClassicLinkResult {
  /**
   * @schema Ec2EnableVpcClassicLinkResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2EnableVpcClassicLinkDnsSupportRequest
 */
export interface Ec2EnableVpcClassicLinkDnsSupportRequest {
  /**
   * @schema Ec2EnableVpcClassicLinkDnsSupportRequest#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2EnableVpcClassicLinkDnsSupportResult
 */
export interface Ec2EnableVpcClassicLinkDnsSupportResult {
  /**
   * @schema Ec2EnableVpcClassicLinkDnsSupportResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ExportClientVpnClientCertificateRevocationListRequest
 */
export interface Ec2ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * @schema Ec2ExportClientVpnClientCertificateRevocationListRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2ExportClientVpnClientCertificateRevocationListRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ExportClientVpnClientCertificateRevocationListResult
 */
export interface Ec2ExportClientVpnClientCertificateRevocationListResult {
  /**
   * @schema Ec2ExportClientVpnClientCertificateRevocationListResult#CertificateRevocationList
   */
  readonly certificateRevocationList?: string;

  /**
   * @schema Ec2ExportClientVpnClientCertificateRevocationListResult#Status
   */
  readonly status?: Ec2ClientCertificateRevocationListStatus;

}

/**
 * @schema Ec2ExportClientVpnClientConfigurationRequest
 */
export interface Ec2ExportClientVpnClientConfigurationRequest {
  /**
   * @schema Ec2ExportClientVpnClientConfigurationRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2ExportClientVpnClientConfigurationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ExportClientVpnClientConfigurationResult
 */
export interface Ec2ExportClientVpnClientConfigurationResult {
  /**
   * @schema Ec2ExportClientVpnClientConfigurationResult#ClientConfiguration
   */
  readonly clientConfiguration?: string;

}

/**
 * @schema Ec2ExportImageRequest
 */
export interface Ec2ExportImageRequest {
  /**
   * @schema Ec2ExportImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ExportImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ExportImageRequest#DiskImageFormat
   */
  readonly diskImageFormat: string;

  /**
   * @schema Ec2ExportImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ExportImageRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema Ec2ExportImageRequest#S3ExportLocation
   */
  readonly s3ExportLocation: Ec2ExportTaskS3LocationRequest;

  /**
   * @schema Ec2ExportImageRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema Ec2ExportImageRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2ExportImageResult
 */
export interface Ec2ExportImageResult {
  /**
   * @schema Ec2ExportImageResult#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ExportImageResult#DiskImageFormat
   */
  readonly diskImageFormat?: string;

  /**
   * @schema Ec2ExportImageResult#ExportImageTaskId
   */
  readonly exportImageTaskId?: string;

  /**
   * @schema Ec2ExportImageResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2ExportImageResult#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema Ec2ExportImageResult#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2ExportImageResult#S3ExportLocation
   */
  readonly s3ExportLocation?: Ec2ExportTaskS3Location;

  /**
   * @schema Ec2ExportImageResult#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ExportImageResult#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ExportImageResult#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ExportTransitGatewayRoutesRequest
 */
export interface Ec2ExportTransitGatewayRoutesRequest {
  /**
   * @schema Ec2ExportTransitGatewayRoutesRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2ExportTransitGatewayRoutesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2ExportTransitGatewayRoutesRequest#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema Ec2ExportTransitGatewayRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ExportTransitGatewayRoutesResult
 */
export interface Ec2ExportTransitGatewayRoutesResult {
  /**
   * @schema Ec2ExportTransitGatewayRoutesResult#S3Location
   */
  readonly s3Location?: string;

}

/**
 * @schema Ec2GetAssociatedEnclaveCertificateIamRolesRequest
 */
export interface Ec2GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * @schema Ec2GetAssociatedEnclaveCertificateIamRolesRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Ec2GetAssociatedEnclaveCertificateIamRolesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetAssociatedEnclaveCertificateIamRolesResult
 */
export interface Ec2GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * @schema Ec2GetAssociatedEnclaveCertificateIamRolesResult#AssociatedRoles
   */
  readonly associatedRoles?: Ec2AssociatedRole[];

}

/**
 * @schema Ec2GetAssociatedIpv6PoolCidrsRequest
 */
export interface Ec2GetAssociatedIpv6PoolCidrsRequest {
  /**
   * @schema Ec2GetAssociatedIpv6PoolCidrsRequest#PoolId
   */
  readonly poolId: string;

  /**
   * @schema Ec2GetAssociatedIpv6PoolCidrsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetAssociatedIpv6PoolCidrsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetAssociatedIpv6PoolCidrsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetAssociatedIpv6PoolCidrsResult
 */
export interface Ec2GetAssociatedIpv6PoolCidrsResult {
  /**
   * @schema Ec2GetAssociatedIpv6PoolCidrsResult#Ipv6CidrAssociations
   */
  readonly ipv6CidrAssociations?: Ec2Ipv6CidrAssociation[];

  /**
   * @schema Ec2GetAssociatedIpv6PoolCidrsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetCapacityReservationUsageRequest
 */
export interface Ec2GetCapacityReservationUsageRequest {
  /**
   * @schema Ec2GetCapacityReservationUsageRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema Ec2GetCapacityReservationUsageRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetCapacityReservationUsageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetCapacityReservationUsageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetCapacityReservationUsageResult
 */
export interface Ec2GetCapacityReservationUsageResult {
  /**
   * @schema Ec2GetCapacityReservationUsageResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetCapacityReservationUsageResult#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema Ec2GetCapacityReservationUsageResult#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2GetCapacityReservationUsageResult#TotalInstanceCount
   */
  readonly totalInstanceCount?: number;

  /**
   * @schema Ec2GetCapacityReservationUsageResult#AvailableInstanceCount
   */
  readonly availableInstanceCount?: number;

  /**
   * @schema Ec2GetCapacityReservationUsageResult#State
   */
  readonly state?: string;

  /**
   * @schema Ec2GetCapacityReservationUsageResult#InstanceUsages
   */
  readonly instanceUsages?: Ec2InstanceUsage[];

}

/**
 * @schema Ec2GetCoipPoolUsageRequest
 */
export interface Ec2GetCoipPoolUsageRequest {
  /**
   * @schema Ec2GetCoipPoolUsageRequest#PoolId
   */
  readonly poolId: string;

  /**
   * @schema Ec2GetCoipPoolUsageRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2GetCoipPoolUsageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetCoipPoolUsageRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetCoipPoolUsageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetCoipPoolUsageResult
 */
export interface Ec2GetCoipPoolUsageResult {
  /**
   * @schema Ec2GetCoipPoolUsageResult#CoipPoolId
   */
  readonly coipPoolId?: string;

  /**
   * @schema Ec2GetCoipPoolUsageResult#CoipAddressUsages
   */
  readonly coipAddressUsages?: Ec2CoipAddressUsage[];

  /**
   * @schema Ec2GetCoipPoolUsageResult#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

}

/**
 * @schema Ec2GetConsoleOutputRequest
 */
export interface Ec2GetConsoleOutputRequest {
  /**
   * @schema Ec2GetConsoleOutputRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2GetConsoleOutputRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetConsoleOutputRequest#Latest
   */
  readonly latest?: boolean;

}

/**
 * @schema Ec2GetConsoleOutputResult
 */
export interface Ec2GetConsoleOutputResult {
  /**
   * @schema Ec2GetConsoleOutputResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2GetConsoleOutputResult#Output
   */
  readonly output?: string;

  /**
   * @schema Ec2GetConsoleOutputResult#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Ec2GetConsoleScreenshotRequest
 */
export interface Ec2GetConsoleScreenshotRequest {
  /**
   * @schema Ec2GetConsoleScreenshotRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetConsoleScreenshotRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2GetConsoleScreenshotRequest#WakeUp
   */
  readonly wakeUp?: boolean;

}

/**
 * @schema Ec2GetConsoleScreenshotResult
 */
export interface Ec2GetConsoleScreenshotResult {
  /**
   * @schema Ec2GetConsoleScreenshotResult#ImageData
   */
  readonly imageData?: string;

  /**
   * @schema Ec2GetConsoleScreenshotResult#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema Ec2GetDefaultCreditSpecificationRequest
 */
export interface Ec2GetDefaultCreditSpecificationRequest {
  /**
   * @schema Ec2GetDefaultCreditSpecificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetDefaultCreditSpecificationRequest#InstanceFamily
   */
  readonly instanceFamily: string;

}

/**
 * @schema Ec2GetDefaultCreditSpecificationResult
 */
export interface Ec2GetDefaultCreditSpecificationResult {
  /**
   * @schema Ec2GetDefaultCreditSpecificationResult#InstanceFamilyCreditSpecification
   */
  readonly instanceFamilyCreditSpecification?: Ec2InstanceFamilyCreditSpecification;

}

/**
 * @schema Ec2GetEbsDefaultKmsKeyIdRequest
 */
export interface Ec2GetEbsDefaultKmsKeyIdRequest {
  /**
   * @schema Ec2GetEbsDefaultKmsKeyIdRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetEbsDefaultKmsKeyIdResult
 */
export interface Ec2GetEbsDefaultKmsKeyIdResult {
  /**
   * @schema Ec2GetEbsDefaultKmsKeyIdResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema Ec2GetEbsEncryptionByDefaultRequest
 */
export interface Ec2GetEbsEncryptionByDefaultRequest {
  /**
   * @schema Ec2GetEbsEncryptionByDefaultRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetEbsEncryptionByDefaultResult
 */
export interface Ec2GetEbsEncryptionByDefaultResult {
  /**
   * @schema Ec2GetEbsEncryptionByDefaultResult#EbsEncryptionByDefault
   */
  readonly ebsEncryptionByDefault?: boolean;

}

/**
 * @schema Ec2GetGroupsForCapacityReservationRequest
 */
export interface Ec2GetGroupsForCapacityReservationRequest {
  /**
   * @schema Ec2GetGroupsForCapacityReservationRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema Ec2GetGroupsForCapacityReservationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetGroupsForCapacityReservationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetGroupsForCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetGroupsForCapacityReservationResult
 */
export interface Ec2GetGroupsForCapacityReservationResult {
  /**
   * @schema Ec2GetGroupsForCapacityReservationResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetGroupsForCapacityReservationResult#CapacityReservationGroups
   */
  readonly capacityReservationGroups?: Ec2CapacityReservationGroup[];

}

/**
 * @schema Ec2GetHostReservationPurchasePreviewRequest
 */
export interface Ec2GetHostReservationPurchasePreviewRequest {
  /**
   * @schema Ec2GetHostReservationPurchasePreviewRequest#HostIdSet
   */
  readonly hostIdSet: string[];

  /**
   * @schema Ec2GetHostReservationPurchasePreviewRequest#OfferingId
   */
  readonly offeringId: string;

}

/**
 * @schema Ec2GetHostReservationPurchasePreviewResult
 */
export interface Ec2GetHostReservationPurchasePreviewResult {
  /**
   * @schema Ec2GetHostReservationPurchasePreviewResult#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2GetHostReservationPurchasePreviewResult#Purchase
   */
  readonly purchase?: Ec2Purchase[];

  /**
   * @schema Ec2GetHostReservationPurchasePreviewResult#TotalHourlyPrice
   */
  readonly totalHourlyPrice?: string;

  /**
   * @schema Ec2GetHostReservationPurchasePreviewResult#TotalUpfrontPrice
   */
  readonly totalUpfrontPrice?: string;

}

/**
 * @schema Ec2GetLaunchTemplateDataRequest
 */
export interface Ec2GetLaunchTemplateDataRequest {
  /**
   * @schema Ec2GetLaunchTemplateDataRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetLaunchTemplateDataRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema Ec2GetLaunchTemplateDataResult
 */
export interface Ec2GetLaunchTemplateDataResult {
  /**
   * @schema Ec2GetLaunchTemplateDataResult#LaunchTemplateData
   */
  readonly launchTemplateData?: Ec2ResponseLaunchTemplateData;

}

/**
 * @schema Ec2GetManagedPrefixListAssociationsRequest
 */
export interface Ec2GetManagedPrefixListAssociationsRequest {
  /**
   * @schema Ec2GetManagedPrefixListAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetManagedPrefixListAssociationsRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2GetManagedPrefixListAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetManagedPrefixListAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetManagedPrefixListAssociationsResult
 */
export interface Ec2GetManagedPrefixListAssociationsResult {
  /**
   * @schema Ec2GetManagedPrefixListAssociationsResult#PrefixListAssociations
   */
  readonly prefixListAssociations?: Ec2PrefixListAssociation[];

  /**
   * @schema Ec2GetManagedPrefixListAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetManagedPrefixListEntriesRequest
 */
export interface Ec2GetManagedPrefixListEntriesRequest {
  /**
   * @schema Ec2GetManagedPrefixListEntriesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetManagedPrefixListEntriesRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2GetManagedPrefixListEntriesRequest#TargetVersion
   */
  readonly targetVersion?: number;

  /**
   * @schema Ec2GetManagedPrefixListEntriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetManagedPrefixListEntriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetManagedPrefixListEntriesResult
 */
export interface Ec2GetManagedPrefixListEntriesResult {
  /**
   * @schema Ec2GetManagedPrefixListEntriesResult#Entries
   */
  readonly entries?: Ec2PrefixListEntry[];

  /**
   * @schema Ec2GetManagedPrefixListEntriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetPasswordDataRequest
 */
export interface Ec2GetPasswordDataRequest {
  /**
   * @schema Ec2GetPasswordDataRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2GetPasswordDataRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetPasswordDataResult
 */
export interface Ec2GetPasswordDataResult {
  /**
   * @schema Ec2GetPasswordDataResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2GetPasswordDataResult#PasswordData
   */
  readonly passwordData?: string;

  /**
   * @schema Ec2GetPasswordDataResult#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Ec2GetReservedInstancesExchangeQuoteRequest
 */
export interface Ec2GetReservedInstancesExchangeQuoteRequest {
  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteRequest#ReservedInstanceIds
   */
  readonly reservedInstanceIds: string[];

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteRequest#TargetConfigurations
   */
  readonly targetConfigurations?: Ec2TargetConfigurationRequest[];

}

/**
 * @schema Ec2GetReservedInstancesExchangeQuoteResult
 */
export interface Ec2GetReservedInstancesExchangeQuoteResult {
  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#IsValidExchange
   */
  readonly isValidExchange?: boolean;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#OutputReservedInstancesWillExpireAt
   */
  readonly outputReservedInstancesWillExpireAt?: string;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#PaymentDue
   */
  readonly paymentDue?: string;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#ReservedInstanceValueRollup
   */
  readonly reservedInstanceValueRollup?: Ec2ReservationValue;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#ReservedInstanceValueSet
   */
  readonly reservedInstanceValueSet?: Ec2ReservedInstanceReservationValue[];

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#TargetConfigurationValueRollup
   */
  readonly targetConfigurationValueRollup?: Ec2ReservationValue;

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#TargetConfigurationValueSet
   */
  readonly targetConfigurationValueSet?: Ec2TargetReservationValue[];

  /**
   * @schema Ec2GetReservedInstancesExchangeQuoteResult#ValidationFailureReason
   */
  readonly validationFailureReason?: string;

}

/**
 * @schema Ec2GetTransitGatewayAttachmentPropagationsRequest
 */
export interface Ec2GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetTransitGatewayAttachmentPropagationsResult
 */
export interface Ec2GetTransitGatewayAttachmentPropagationsResult {
  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsResult#TransitGatewayAttachmentPropagations
   */
  readonly transitGatewayAttachmentPropagations?: Ec2TransitGatewayAttachmentPropagation[];

  /**
   * @schema Ec2GetTransitGatewayAttachmentPropagationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetTransitGatewayMulticastDomainAssociationsRequest
 */
export interface Ec2GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetTransitGatewayMulticastDomainAssociationsResult
 */
export interface Ec2GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsResult#MulticastDomainAssociations
   */
  readonly multicastDomainAssociations?: Ec2TransitGatewayMulticastDomainAssociation[];

  /**
   * @schema Ec2GetTransitGatewayMulticastDomainAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetTransitGatewayPrefixListReferencesRequest
 */
export interface Ec2GetTransitGatewayPrefixListReferencesRequest {
  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetTransitGatewayPrefixListReferencesResult
 */
export interface Ec2GetTransitGatewayPrefixListReferencesResult {
  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesResult#TransitGatewayPrefixListReferences
   */
  readonly transitGatewayPrefixListReferences?: Ec2TransitGatewayPrefixListReference[];

  /**
   * @schema Ec2GetTransitGatewayPrefixListReferencesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetTransitGatewayRouteTableAssociationsRequest
 */
export interface Ec2GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetTransitGatewayRouteTableAssociationsResult
 */
export interface Ec2GetTransitGatewayRouteTableAssociationsResult {
  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsResult#Associations
   */
  readonly associations?: Ec2TransitGatewayRouteTableAssociation[];

  /**
   * @schema Ec2GetTransitGatewayRouteTableAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2GetTransitGatewayRouteTablePropagationsRequest
 */
export interface Ec2GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2GetTransitGatewayRouteTablePropagationsResult
 */
export interface Ec2GetTransitGatewayRouteTablePropagationsResult {
  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsResult#TransitGatewayRouteTablePropagations
   */
  readonly transitGatewayRouteTablePropagations?: Ec2TransitGatewayRouteTablePropagation[];

  /**
   * @schema Ec2GetTransitGatewayRouteTablePropagationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2ImportClientVpnClientCertificateRevocationListRequest
 */
export interface Ec2ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * @schema Ec2ImportClientVpnClientCertificateRevocationListRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2ImportClientVpnClientCertificateRevocationListRequest#CertificateRevocationList
   */
  readonly certificateRevocationList: string;

  /**
   * @schema Ec2ImportClientVpnClientCertificateRevocationListRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ImportClientVpnClientCertificateRevocationListResult
 */
export interface Ec2ImportClientVpnClientCertificateRevocationListResult {
  /**
   * @schema Ec2ImportClientVpnClientCertificateRevocationListResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ImportImageRequest
 */
export interface Ec2ImportImageRequest {
  /**
   * @schema Ec2ImportImageRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2ImportImageRequest#ClientData
   */
  readonly clientData?: Ec2ClientData;

  /**
   * @schema Ec2ImportImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ImportImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportImageRequest#DiskContainers
   */
  readonly diskContainers?: Ec2ImageDiskContainer[];

  /**
   * @schema Ec2ImportImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ImportImageRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2ImportImageRequest#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Ec2ImportImageRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2ImportImageRequest#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema Ec2ImportImageRequest#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ImportImageRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema Ec2ImportImageRequest#LicenseSpecifications
   */
  readonly licenseSpecifications?: Ec2ImportImageLicenseConfigurationRequest[];

  /**
   * @schema Ec2ImportImageRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2ImportImageResult
 */
export interface Ec2ImportImageResult {
  /**
   * @schema Ec2ImportImageResult#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2ImportImageResult#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportImageResult#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2ImportImageResult#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Ec2ImportImageResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2ImportImageResult#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema Ec2ImportImageResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2ImportImageResult#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema Ec2ImportImageResult#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ImportImageResult#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2ImportImageResult#SnapshotDetails
   */
  readonly snapshotDetails?: Ec2SnapshotDetail[];

  /**
   * @schema Ec2ImportImageResult#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ImportImageResult#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ImportImageResult#LicenseSpecifications
   */
  readonly licenseSpecifications?: Ec2ImportImageLicenseConfigurationResponse[];

  /**
   * @schema Ec2ImportImageResult#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ImportInstanceRequest
 */
export interface Ec2ImportInstanceRequest {
  /**
   * @schema Ec2ImportInstanceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportInstanceRequest#DiskImages
   */
  readonly diskImages?: Ec2DiskImage[];

  /**
   * @schema Ec2ImportInstanceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ImportInstanceRequest#LaunchSpecification
   */
  readonly launchSpecification?: Ec2ImportInstanceLaunchSpecification;

  /**
   * @schema Ec2ImportInstanceRequest#Platform
   */
  readonly platform: string;

}

/**
 * @schema Ec2ImportInstanceResult
 */
export interface Ec2ImportInstanceResult {
  /**
   * @schema Ec2ImportInstanceResult#ConversionTask
   */
  readonly conversionTask?: Ec2ConversionTask;

}

/**
 * @schema Ec2ImportKeyPairRequest
 */
export interface Ec2ImportKeyPairRequest {
  /**
   * @schema Ec2ImportKeyPairRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ImportKeyPairRequest#KeyName
   */
  readonly keyName: string;

  /**
   * @schema Ec2ImportKeyPairRequest#PublicKeyMaterial
   */
  readonly publicKeyMaterial: any;

  /**
   * @schema Ec2ImportKeyPairRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2ImportKeyPairResult
 */
export interface Ec2ImportKeyPairResult {
  /**
   * @schema Ec2ImportKeyPairResult#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema Ec2ImportKeyPairResult#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2ImportKeyPairResult#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema Ec2ImportKeyPairResult#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ImportSnapshotRequest
 */
export interface Ec2ImportSnapshotRequest {
  /**
   * @schema Ec2ImportSnapshotRequest#ClientData
   */
  readonly clientData?: Ec2ClientData;

  /**
   * @schema Ec2ImportSnapshotRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ImportSnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportSnapshotRequest#DiskContainer
   */
  readonly diskContainer?: Ec2SnapshotDiskContainer;

  /**
   * @schema Ec2ImportSnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ImportSnapshotRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2ImportSnapshotRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2ImportSnapshotRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema Ec2ImportSnapshotRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2ImportSnapshotResult
 */
export interface Ec2ImportSnapshotResult {
  /**
   * @schema Ec2ImportSnapshotResult#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportSnapshotResult#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema Ec2ImportSnapshotResult#SnapshotTaskDetail
   */
  readonly snapshotTaskDetail?: Ec2SnapshotTaskDetail;

  /**
   * @schema Ec2ImportSnapshotResult#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ImportVolumeRequest
 */
export interface Ec2ImportVolumeRequest {
  /**
   * @schema Ec2ImportVolumeRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema Ec2ImportVolumeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ImportVolumeRequest#Image
   */
  readonly image: Ec2DiskImageDetail;

  /**
   * @schema Ec2ImportVolumeRequest#Volume
   */
  readonly volume: Ec2VolumeDetail;

}

/**
 * @schema Ec2ImportVolumeResult
 */
export interface Ec2ImportVolumeResult {
  /**
   * @schema Ec2ImportVolumeResult#ConversionTask
   */
  readonly conversionTask?: Ec2ConversionTask;

}

/**
 * @schema Ec2ModifyAvailabilityZoneGroupRequest
 */
export interface Ec2ModifyAvailabilityZoneGroupRequest {
  /**
   * @schema Ec2ModifyAvailabilityZoneGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema Ec2ModifyAvailabilityZoneGroupRequest#OptInStatus
   */
  readonly optInStatus: string;

  /**
   * @schema Ec2ModifyAvailabilityZoneGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyAvailabilityZoneGroupResult
 */
export interface Ec2ModifyAvailabilityZoneGroupResult {
  /**
   * @schema Ec2ModifyAvailabilityZoneGroupResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyCapacityReservationRequest
 */
export interface Ec2ModifyCapacityReservationRequest {
  /**
   * @schema Ec2ModifyCapacityReservationRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema Ec2ModifyCapacityReservationRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2ModifyCapacityReservationRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema Ec2ModifyCapacityReservationRequest#EndDateType
   */
  readonly endDateType?: string;

  /**
   * @schema Ec2ModifyCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyCapacityReservationResult
 */
export interface Ec2ModifyCapacityReservationResult {
  /**
   * @schema Ec2ModifyCapacityReservationResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyClientVpnEndpointRequest
 */
export interface Ec2ModifyClientVpnEndpointRequest {
  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#ServerCertificateArn
   */
  readonly serverCertificateArn?: string;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#ConnectionLogOptions
   */
  readonly connectionLogOptions?: Ec2ConnectionLogOptions;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#DnsServers
   */
  readonly dnsServers?: Ec2DnsServersOptionsModifyStructure;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#VpnPort
   */
  readonly vpnPort?: number;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#SplitTunnel
   */
  readonly splitTunnel?: boolean;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#SelfServicePortal
   */
  readonly selfServicePortal?: string;

  /**
   * @schema Ec2ModifyClientVpnEndpointRequest#ClientConnectOptions
   */
  readonly clientConnectOptions?: Ec2ClientConnectOptions;

}

/**
 * @schema Ec2ModifyClientVpnEndpointResult
 */
export interface Ec2ModifyClientVpnEndpointResult {
  /**
   * @schema Ec2ModifyClientVpnEndpointResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyDefaultCreditSpecificationRequest
 */
export interface Ec2ModifyDefaultCreditSpecificationRequest {
  /**
   * @schema Ec2ModifyDefaultCreditSpecificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyDefaultCreditSpecificationRequest#InstanceFamily
   */
  readonly instanceFamily: string;

  /**
   * @schema Ec2ModifyDefaultCreditSpecificationRequest#CpuCredits
   */
  readonly cpuCredits: string;

}

/**
 * @schema Ec2ModifyDefaultCreditSpecificationResult
 */
export interface Ec2ModifyDefaultCreditSpecificationResult {
  /**
   * @schema Ec2ModifyDefaultCreditSpecificationResult#InstanceFamilyCreditSpecification
   */
  readonly instanceFamilyCreditSpecification?: Ec2InstanceFamilyCreditSpecification;

}

/**
 * @schema Ec2ModifyEbsDefaultKmsKeyIdRequest
 */
export interface Ec2ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * @schema Ec2ModifyEbsDefaultKmsKeyIdRequest#KmsKeyId
   */
  readonly kmsKeyId: string;

  /**
   * @schema Ec2ModifyEbsDefaultKmsKeyIdRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyEbsDefaultKmsKeyIdResult
 */
export interface Ec2ModifyEbsDefaultKmsKeyIdResult {
  /**
   * @schema Ec2ModifyEbsDefaultKmsKeyIdResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema Ec2ModifyFleetRequest
 */
export interface Ec2ModifyFleetRequest {
  /**
   * @schema Ec2ModifyFleetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyFleetRequest#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema Ec2ModifyFleetRequest#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: Ec2FleetLaunchTemplateConfigRequest[];

  /**
   * @schema Ec2ModifyFleetRequest#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema Ec2ModifyFleetRequest#TargetCapacitySpecification
   */
  readonly targetCapacitySpecification?: Ec2TargetCapacitySpecificationRequest;

}

/**
 * @schema Ec2ModifyFleetResult
 */
export interface Ec2ModifyFleetResult {
  /**
   * @schema Ec2ModifyFleetResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyFpgaImageAttributeRequest
 */
export interface Ec2ModifyFpgaImageAttributeRequest {
  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#UserGroups
   */
  readonly userGroups?: string[];

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#ProductCodes
   */
  readonly productCodes?: string[];

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#LoadPermission
   */
  readonly loadPermission?: Ec2LoadPermissionModifications;

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ModifyFpgaImageAttributeRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2ModifyFpgaImageAttributeResult
 */
export interface Ec2ModifyFpgaImageAttributeResult {
  /**
   * @schema Ec2ModifyFpgaImageAttributeResult#FpgaImageAttribute
   */
  readonly fpgaImageAttribute?: Ec2FpgaImageAttribute;

}

/**
 * @schema Ec2ModifyHostsRequest
 */
export interface Ec2ModifyHostsRequest {
  /**
   * @schema Ec2ModifyHostsRequest#AutoPlacement
   */
  readonly autoPlacement?: string;

  /**
   * @schema Ec2ModifyHostsRequest#HostIds
   */
  readonly hostIds: string[];

  /**
   * @schema Ec2ModifyHostsRequest#HostRecovery
   */
  readonly hostRecovery?: string;

  /**
   * @schema Ec2ModifyHostsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ModifyHostsRequest#InstanceFamily
   */
  readonly instanceFamily?: string;

}

/**
 * @schema Ec2ModifyHostsResult
 */
export interface Ec2ModifyHostsResult {
  /**
   * @schema Ec2ModifyHostsResult#Successful
   */
  readonly successful?: string[];

  /**
   * @schema Ec2ModifyHostsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2ModifyIdFormatRequest
 */
export interface Ec2ModifyIdFormatRequest {
  /**
   * @schema Ec2ModifyIdFormatRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema Ec2ModifyIdFormatRequest#UseLongIds
   */
  readonly useLongIds: boolean;

}

/**
 * @schema Ec2ModifyIdentityIdFormatRequest
 */
export interface Ec2ModifyIdentityIdFormatRequest {
  /**
   * @schema Ec2ModifyIdentityIdFormatRequest#PrincipalArn
   */
  readonly principalArn: string;

  /**
   * @schema Ec2ModifyIdentityIdFormatRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema Ec2ModifyIdentityIdFormatRequest#UseLongIds
   */
  readonly useLongIds: boolean;

}

/**
 * @schema Ec2ModifyImageAttributeRequest
 */
export interface Ec2ModifyImageAttributeRequest {
  /**
   * @schema Ec2ModifyImageAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema Ec2ModifyImageAttributeRequest#Description
   */
  readonly description?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyImageAttributeRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema Ec2ModifyImageAttributeRequest#LaunchPermission
   */
  readonly launchPermission?: Ec2LaunchPermissionModifications;

  /**
   * @schema Ec2ModifyImageAttributeRequest#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema Ec2ModifyImageAttributeRequest#ProductCodes
   */
  readonly productCodes?: string[];

  /**
   * @schema Ec2ModifyImageAttributeRequest#UserGroups
   */
  readonly userGroups?: string[];

  /**
   * @schema Ec2ModifyImageAttributeRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema Ec2ModifyImageAttributeRequest#Value
   */
  readonly value?: string;

  /**
   * @schema Ec2ModifyImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyInstanceAttributeRequest
 */
export interface Ec2ModifyInstanceAttributeRequest {
  /**
   * @schema Ec2ModifyInstanceAttributeRequest#SourceDestCheck
   */
  readonly sourceDestCheck?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2InstanceBlockDeviceMappingSpecification[];

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#DisableApiTermination
   */
  readonly disableApiTermination?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#EbsOptimized
   */
  readonly ebsOptimized?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#EnaSupport
   */
  readonly enaSupport?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#InstanceType
   */
  readonly instanceType?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#Kernel
   */
  readonly kernel?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#Ramdisk
   */
  readonly ramdisk?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#SriovNetSupport
   */
  readonly sriovNetSupport?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#UserData
   */
  readonly userData?: Ec2BlobAttributeValue;

  /**
   * @schema Ec2ModifyInstanceAttributeRequest#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2ModifyInstanceCapacityReservationAttributesRequest
 */
export interface Ec2ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * @schema Ec2ModifyInstanceCapacityReservationAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2ModifyInstanceCapacityReservationAttributesRequest#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification: Ec2CapacityReservationSpecification;

  /**
   * @schema Ec2ModifyInstanceCapacityReservationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyInstanceCapacityReservationAttributesResult
 */
export interface Ec2ModifyInstanceCapacityReservationAttributesResult {
  /**
   * @schema Ec2ModifyInstanceCapacityReservationAttributesResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyInstanceCreditSpecificationRequest
 */
export interface Ec2ModifyInstanceCreditSpecificationRequest {
  /**
   * @schema Ec2ModifyInstanceCreditSpecificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyInstanceCreditSpecificationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ModifyInstanceCreditSpecificationRequest#InstanceCreditSpecifications
   */
  readonly instanceCreditSpecifications: Ec2InstanceCreditSpecificationRequest[];

}

/**
 * @schema Ec2ModifyInstanceCreditSpecificationResult
 */
export interface Ec2ModifyInstanceCreditSpecificationResult {
  /**
   * @schema Ec2ModifyInstanceCreditSpecificationResult#SuccessfulInstanceCreditSpecifications
   */
  readonly successfulInstanceCreditSpecifications?: Ec2SuccessfulInstanceCreditSpecificationItem[];

  /**
   * @schema Ec2ModifyInstanceCreditSpecificationResult#UnsuccessfulInstanceCreditSpecifications
   */
  readonly unsuccessfulInstanceCreditSpecifications?: Ec2UnsuccessfulInstanceCreditSpecificationItem[];

}

/**
 * @schema Ec2ModifyInstanceEventStartTimeRequest
 */
export interface Ec2ModifyInstanceEventStartTimeRequest {
  /**
   * @schema Ec2ModifyInstanceEventStartTimeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyInstanceEventStartTimeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2ModifyInstanceEventStartTimeRequest#InstanceEventId
   */
  readonly instanceEventId: string;

  /**
   * @schema Ec2ModifyInstanceEventStartTimeRequest#NotBefore
   */
  readonly notBefore: string;

}

/**
 * @schema Ec2ModifyInstanceEventStartTimeResult
 */
export interface Ec2ModifyInstanceEventStartTimeResult {
  /**
   * @schema Ec2ModifyInstanceEventStartTimeResult#Event
   */
  readonly event?: Ec2InstanceStatusEvent;

}

/**
 * @schema Ec2ModifyInstanceMetadataOptionsRequest
 */
export interface Ec2ModifyInstanceMetadataOptionsRequest {
  /**
   * @schema Ec2ModifyInstanceMetadataOptionsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2ModifyInstanceMetadataOptionsRequest#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema Ec2ModifyInstanceMetadataOptionsRequest#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema Ec2ModifyInstanceMetadataOptionsRequest#HttpEndpoint
   */
  readonly httpEndpoint?: string;

  /**
   * @schema Ec2ModifyInstanceMetadataOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyInstanceMetadataOptionsResult
 */
export interface Ec2ModifyInstanceMetadataOptionsResult {
  /**
   * @schema Ec2ModifyInstanceMetadataOptionsResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2ModifyInstanceMetadataOptionsResult#InstanceMetadataOptions
   */
  readonly instanceMetadataOptions?: Ec2InstanceMetadataOptionsResponse;

}

/**
 * @schema Ec2ModifyInstancePlacementRequest
 */
export interface Ec2ModifyInstancePlacementRequest {
  /**
   * @schema Ec2ModifyInstancePlacementRequest#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema Ec2ModifyInstancePlacementRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2ModifyInstancePlacementRequest#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Ec2ModifyInstancePlacementRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2ModifyInstancePlacementRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Ec2ModifyInstancePlacementRequest#PartitionNumber
   */
  readonly partitionNumber?: number;

  /**
   * @schema Ec2ModifyInstancePlacementRequest#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

}

/**
 * @schema Ec2ModifyInstancePlacementResult
 */
export interface Ec2ModifyInstancePlacementResult {
  /**
   * @schema Ec2ModifyInstancePlacementResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyLaunchTemplateRequest
 */
export interface Ec2ModifyLaunchTemplateRequest {
  /**
   * @schema Ec2ModifyLaunchTemplateRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyLaunchTemplateRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ModifyLaunchTemplateRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2ModifyLaunchTemplateRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2ModifyLaunchTemplateRequest#DefaultVersion
   */
  readonly defaultVersion?: string;

}

/**
 * @schema Ec2ModifyLaunchTemplateResult
 */
export interface Ec2ModifyLaunchTemplateResult {
  /**
   * @schema Ec2ModifyLaunchTemplateResult#LaunchTemplate
   */
  readonly launchTemplate?: Ec2LaunchTemplate;

}

/**
 * @schema Ec2ModifyManagedPrefixListRequest
 */
export interface Ec2ModifyManagedPrefixListRequest {
  /**
   * @schema Ec2ModifyManagedPrefixListRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyManagedPrefixListRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2ModifyManagedPrefixListRequest#CurrentVersion
   */
  readonly currentVersion?: number;

  /**
   * @schema Ec2ModifyManagedPrefixListRequest#PrefixListName
   */
  readonly prefixListName?: string;

  /**
   * @schema Ec2ModifyManagedPrefixListRequest#AddEntries
   */
  readonly addEntries?: Ec2AddPrefixListEntry[];

  /**
   * @schema Ec2ModifyManagedPrefixListRequest#RemoveEntries
   */
  readonly removeEntries?: Ec2RemovePrefixListEntry[];

}

/**
 * @schema Ec2ModifyManagedPrefixListResult
 */
export interface Ec2ModifyManagedPrefixListResult {
  /**
   * @schema Ec2ModifyManagedPrefixListResult#PrefixList
   */
  readonly prefixList?: Ec2ManagedPrefixList;

}

/**
 * @schema Ec2ModifyNetworkInterfaceAttributeRequest
 */
export interface Ec2ModifyNetworkInterfaceAttributeRequest {
  /**
   * @schema Ec2ModifyNetworkInterfaceAttributeRequest#Attachment
   */
  readonly attachment?: Ec2NetworkInterfaceAttachmentChanges;

  /**
   * @schema Ec2ModifyNetworkInterfaceAttributeRequest#Description
   */
  readonly description?: Ec2AttributeValue;

  /**
   * @schema Ec2ModifyNetworkInterfaceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyNetworkInterfaceAttributeRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2ModifyNetworkInterfaceAttributeRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2ModifyNetworkInterfaceAttributeRequest#SourceDestCheck
   */
  readonly sourceDestCheck?: Ec2AttributeBooleanValue;

}

/**
 * @schema Ec2ModifyReservedInstancesRequest
 */
export interface Ec2ModifyReservedInstancesRequest {
  /**
   * @schema Ec2ModifyReservedInstancesRequest#ReservedInstancesIds
   */
  readonly reservedInstancesIds: string[];

  /**
   * @schema Ec2ModifyReservedInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ModifyReservedInstancesRequest#TargetConfigurations
   */
  readonly targetConfigurations: Ec2ReservedInstancesConfiguration[];

}

/**
 * @schema Ec2ModifyReservedInstancesResult
 */
export interface Ec2ModifyReservedInstancesResult {
  /**
   * @schema Ec2ModifyReservedInstancesResult#ReservedInstancesModificationId
   */
  readonly reservedInstancesModificationId?: string;

}

/**
 * @schema Ec2ModifySnapshotAttributeRequest
 */
export interface Ec2ModifySnapshotAttributeRequest {
  /**
   * @schema Ec2ModifySnapshotAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema Ec2ModifySnapshotAttributeRequest#CreateVolumePermission
   */
  readonly createVolumePermission?: Ec2CreateVolumePermissionModifications;

  /**
   * @schema Ec2ModifySnapshotAttributeRequest#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema Ec2ModifySnapshotAttributeRequest#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema Ec2ModifySnapshotAttributeRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema Ec2ModifySnapshotAttributeRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema Ec2ModifySnapshotAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifySpotFleetRequestRequest
 */
export interface Ec2ModifySpotFleetRequestRequest {
  /**
   * @schema Ec2ModifySpotFleetRequestRequest#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema Ec2ModifySpotFleetRequestRequest#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: Ec2LaunchTemplateConfig[];

  /**
   * @schema Ec2ModifySpotFleetRequestRequest#SpotFleetRequestId
   */
  readonly spotFleetRequestId: string;

  /**
   * @schema Ec2ModifySpotFleetRequestRequest#TargetCapacity
   */
  readonly targetCapacity?: number;

  /**
   * @schema Ec2ModifySpotFleetRequestRequest#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

}

/**
 * @schema Ec2ModifySpotFleetRequestResponse
 */
export interface Ec2ModifySpotFleetRequestResponse {
  /**
   * @schema Ec2ModifySpotFleetRequestResponse#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifySubnetAttributeRequest
 */
export interface Ec2ModifySubnetAttributeRequest {
  /**
   * @schema Ec2ModifySubnetAttributeRequest#AssignIpv6AddressOnCreation
   */
  readonly assignIpv6AddressOnCreation?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifySubnetAttributeRequest#MapPublicIpOnLaunch
   */
  readonly mapPublicIpOnLaunch?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifySubnetAttributeRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema Ec2ModifySubnetAttributeRequest#MapCustomerOwnedIpOnLaunch
   */
  readonly mapCustomerOwnedIpOnLaunch?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifySubnetAttributeRequest#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

}

/**
 * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesRequest
 */
export interface Ec2ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesRequest#AddNetworkServices
   */
  readonly addNetworkServices?: string[];

  /**
   * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesRequest#RemoveNetworkServices
   */
  readonly removeNetworkServices?: string[];

  /**
   * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesResult
 */
export interface Ec2ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * @schema Ec2ModifyTrafficMirrorFilterNetworkServicesResult#TrafficMirrorFilter
   */
  readonly trafficMirrorFilter?: Ec2TrafficMirrorFilter;

}

/**
 * @schema Ec2ModifyTrafficMirrorFilterRuleRequest
 */
export interface Ec2ModifyTrafficMirrorFilterRuleRequest {
  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#TrafficDirection
   */
  readonly trafficDirection?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#RuleNumber
   */
  readonly ruleNumber?: number;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#DestinationPortRange
   */
  readonly destinationPortRange?: Ec2TrafficMirrorPortRangeRequest;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#SourcePortRange
   */
  readonly sourcePortRange?: Ec2TrafficMirrorPortRangeRequest;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#Protocol
   */
  readonly protocol?: number;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#SourceCidrBlock
   */
  readonly sourceCidrBlock?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#RemoveFields
   */
  readonly removeFields?: string[];

  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyTrafficMirrorFilterRuleResult
 */
export interface Ec2ModifyTrafficMirrorFilterRuleResult {
  /**
   * @schema Ec2ModifyTrafficMirrorFilterRuleResult#TrafficMirrorFilterRule
   */
  readonly trafficMirrorFilterRule?: Ec2TrafficMirrorFilterRule;

}

/**
 * @schema Ec2ModifyTrafficMirrorSessionRequest
 */
export interface Ec2ModifyTrafficMirrorSessionRequest {
  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId: string;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#PacketLength
   */
  readonly packetLength?: number;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#SessionNumber
   */
  readonly sessionNumber?: number;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#VirtualNetworkId
   */
  readonly virtualNetworkId?: number;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#RemoveFields
   */
  readonly removeFields?: string[];

  /**
   * @schema Ec2ModifyTrafficMirrorSessionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyTrafficMirrorSessionResult
 */
export interface Ec2ModifyTrafficMirrorSessionResult {
  /**
   * @schema Ec2ModifyTrafficMirrorSessionResult#TrafficMirrorSession
   */
  readonly trafficMirrorSession?: Ec2TrafficMirrorSession;

}

/**
 * @schema Ec2ModifyTransitGatewayRequest
 */
export interface Ec2ModifyTransitGatewayRequest {
  /**
   * @schema Ec2ModifyTransitGatewayRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema Ec2ModifyTransitGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ModifyTransitGatewayRequest#Options
   */
  readonly options?: Ec2ModifyTransitGatewayOptions;

  /**
   * @schema Ec2ModifyTransitGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyTransitGatewayResult
 */
export interface Ec2ModifyTransitGatewayResult {
  /**
   * @schema Ec2ModifyTransitGatewayResult#TransitGateway
   */
  readonly transitGateway?: Ec2TransitGateway;

}

/**
 * @schema Ec2ModifyTransitGatewayPrefixListReferenceRequest
 */
export interface Ec2ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * @schema Ec2ModifyTransitGatewayPrefixListReferenceRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2ModifyTransitGatewayPrefixListReferenceRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2ModifyTransitGatewayPrefixListReferenceRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2ModifyTransitGatewayPrefixListReferenceRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema Ec2ModifyTransitGatewayPrefixListReferenceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyTransitGatewayPrefixListReferenceResult
 */
export interface Ec2ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * @schema Ec2ModifyTransitGatewayPrefixListReferenceResult#TransitGatewayPrefixListReference
   */
  readonly transitGatewayPrefixListReference?: Ec2TransitGatewayPrefixListReference;

}

/**
 * @schema Ec2ModifyTransitGatewayVpcAttachmentRequest
 */
export interface Ec2ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequest#AddSubnetIds
   */
  readonly addSubnetIds?: string[];

  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequest#RemoveSubnetIds
   */
  readonly removeSubnetIds?: string[];

  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequest#Options
   */
  readonly options?: Ec2ModifyTransitGatewayVpcAttachmentRequestOptions;

  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyTransitGatewayVpcAttachmentResult
 */
export interface Ec2ModifyTransitGatewayVpcAttachmentResult {
  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: Ec2TransitGatewayVpcAttachment;

}

/**
 * @schema Ec2ModifyVolumeRequest
 */
export interface Ec2ModifyVolumeRequest {
  /**
   * @schema Ec2ModifyVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2ModifyVolumeRequest#Size
   */
  readonly size?: number;

  /**
   * @schema Ec2ModifyVolumeRequest#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Ec2ModifyVolumeRequest#Iops
   */
  readonly iops?: number;

}

/**
 * @schema Ec2ModifyVolumeResult
 */
export interface Ec2ModifyVolumeResult {
  /**
   * @schema Ec2ModifyVolumeResult#VolumeModification
   */
  readonly volumeModification?: Ec2VolumeModification;

}

/**
 * @schema Ec2ModifyVolumeAttributeRequest
 */
export interface Ec2ModifyVolumeAttributeRequest {
  /**
   * @schema Ec2ModifyVolumeAttributeRequest#AutoEnableIO
   */
  readonly autoEnableIo?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyVolumeAttributeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema Ec2ModifyVolumeAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyVpcAttributeRequest
 */
export interface Ec2ModifyVpcAttributeRequest {
  /**
   * @schema Ec2ModifyVpcAttributeRequest#EnableDnsHostnames
   */
  readonly enableDnsHostnames?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyVpcAttributeRequest#EnableDnsSupport
   */
  readonly enableDnsSupport?: Ec2AttributeBooleanValue;

  /**
   * @schema Ec2ModifyVpcAttributeRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema Ec2ModifyVpcEndpointRequest
 */
export interface Ec2ModifyVpcEndpointRequest {
  /**
   * @schema Ec2ModifyVpcEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointRequest#VpcEndpointId
   */
  readonly vpcEndpointId: string;

  /**
   * @schema Ec2ModifyVpcEndpointRequest#ResetPolicy
   */
  readonly resetPolicy?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointRequest#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema Ec2ModifyVpcEndpointRequest#AddRouteTableIds
   */
  readonly addRouteTableIds?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointRequest#RemoveRouteTableIds
   */
  readonly removeRouteTableIds?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointRequest#AddSubnetIds
   */
  readonly addSubnetIds?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointRequest#RemoveSubnetIds
   */
  readonly removeSubnetIds?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointRequest#AddSecurityGroupIds
   */
  readonly addSecurityGroupIds?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointRequest#RemoveSecurityGroupIds
   */
  readonly removeSecurityGroupIds?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointRequest#PrivateDnsEnabled
   */
  readonly privateDnsEnabled?: boolean;

}

/**
 * @schema Ec2ModifyVpcEndpointResult
 */
export interface Ec2ModifyVpcEndpointResult {
  /**
   * @schema Ec2ModifyVpcEndpointResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyVpcEndpointConnectionNotificationRequest
 */
export interface Ec2ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * @schema Ec2ModifyVpcEndpointConnectionNotificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointConnectionNotificationRequest#ConnectionNotificationId
   */
  readonly connectionNotificationId: string;

  /**
   * @schema Ec2ModifyVpcEndpointConnectionNotificationRequest#ConnectionNotificationArn
   */
  readonly connectionNotificationArn?: string;

  /**
   * @schema Ec2ModifyVpcEndpointConnectionNotificationRequest#ConnectionEvents
   */
  readonly connectionEvents?: string[];

}

/**
 * @schema Ec2ModifyVpcEndpointConnectionNotificationResult
 */
export interface Ec2ModifyVpcEndpointConnectionNotificationResult {
  /**
   * @schema Ec2ModifyVpcEndpointConnectionNotificationResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest
 */
export interface Ec2ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#RemovePrivateDnsName
   */
  readonly removePrivateDnsName?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#AddNetworkLoadBalancerArns
   */
  readonly addNetworkLoadBalancerArns?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#RemoveNetworkLoadBalancerArns
   */
  readonly removeNetworkLoadBalancerArns?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#AddGatewayLoadBalancerArns
   */
  readonly addGatewayLoadBalancerArns?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationRequest#RemoveGatewayLoadBalancerArns
   */
  readonly removeGatewayLoadBalancerArns?: string[];

}

/**
 * @schema Ec2ModifyVpcEndpointServiceConfigurationResult
 */
export interface Ec2ModifyVpcEndpointServiceConfigurationResult {
  /**
   * @schema Ec2ModifyVpcEndpointServiceConfigurationResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ModifyVpcEndpointServicePermissionsRequest
 */
export interface Ec2ModifyVpcEndpointServicePermissionsRequest {
  /**
   * @schema Ec2ModifyVpcEndpointServicePermissionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyVpcEndpointServicePermissionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema Ec2ModifyVpcEndpointServicePermissionsRequest#AddAllowedPrincipals
   */
  readonly addAllowedPrincipals?: string[];

  /**
   * @schema Ec2ModifyVpcEndpointServicePermissionsRequest#RemoveAllowedPrincipals
   */
  readonly removeAllowedPrincipals?: string[];

}

/**
 * @schema Ec2ModifyVpcEndpointServicePermissionsResult
 */
export interface Ec2ModifyVpcEndpointServicePermissionsResult {
  /**
   * @schema Ec2ModifyVpcEndpointServicePermissionsResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema Ec2ModifyVpcPeeringConnectionOptionsRequest
 */
export interface Ec2ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * @schema Ec2ModifyVpcPeeringConnectionOptionsRequest#AccepterPeeringConnectionOptions
   */
  readonly accepterPeeringConnectionOptions?: Ec2PeeringConnectionOptionsRequest;

  /**
   * @schema Ec2ModifyVpcPeeringConnectionOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ModifyVpcPeeringConnectionOptionsRequest#RequesterPeeringConnectionOptions
   */
  readonly requesterPeeringConnectionOptions?: Ec2PeeringConnectionOptionsRequest;

  /**
   * @schema Ec2ModifyVpcPeeringConnectionOptionsRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema Ec2ModifyVpcPeeringConnectionOptionsResult
 */
export interface Ec2ModifyVpcPeeringConnectionOptionsResult {
  /**
   * @schema Ec2ModifyVpcPeeringConnectionOptionsResult#AccepterPeeringConnectionOptions
   */
  readonly accepterPeeringConnectionOptions?: Ec2PeeringConnectionOptions;

  /**
   * @schema Ec2ModifyVpcPeeringConnectionOptionsResult#RequesterPeeringConnectionOptions
   */
  readonly requesterPeeringConnectionOptions?: Ec2PeeringConnectionOptions;

}

/**
 * @schema Ec2ModifyVpcTenancyRequest
 */
export interface Ec2ModifyVpcTenancyRequest {
  /**
   * @schema Ec2ModifyVpcTenancyRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema Ec2ModifyVpcTenancyRequest#InstanceTenancy
   */
  readonly instanceTenancy: string;

  /**
   * @schema Ec2ModifyVpcTenancyRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyVpcTenancyResult
 */
export interface Ec2ModifyVpcTenancyResult {
  /**
   * @schema Ec2ModifyVpcTenancyResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema Ec2ModifyVpnConnectionRequest
 */
export interface Ec2ModifyVpnConnectionRequest {
  /**
   * @schema Ec2ModifyVpnConnectionRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema Ec2ModifyVpnConnectionRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2ModifyVpnConnectionRequest#CustomerGatewayId
   */
  readonly customerGatewayId?: string;

  /**
   * @schema Ec2ModifyVpnConnectionRequest#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema Ec2ModifyVpnConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyVpnConnectionResult
 */
export interface Ec2ModifyVpnConnectionResult {
  /**
   * @schema Ec2ModifyVpnConnectionResult#VpnConnection
   */
  readonly vpnConnection?: Ec2VpnConnection;

}

/**
 * @schema Ec2ModifyVpnConnectionOptionsRequest
 */
export interface Ec2ModifyVpnConnectionOptionsRequest {
  /**
   * @schema Ec2ModifyVpnConnectionOptionsRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema Ec2ModifyVpnConnectionOptionsRequest#LocalIpv4NetworkCidr
   */
  readonly localIpv4NetworkCidr?: string;

  /**
   * @schema Ec2ModifyVpnConnectionOptionsRequest#RemoteIpv4NetworkCidr
   */
  readonly remoteIpv4NetworkCidr?: string;

  /**
   * @schema Ec2ModifyVpnConnectionOptionsRequest#LocalIpv6NetworkCidr
   */
  readonly localIpv6NetworkCidr?: string;

  /**
   * @schema Ec2ModifyVpnConnectionOptionsRequest#RemoteIpv6NetworkCidr
   */
  readonly remoteIpv6NetworkCidr?: string;

  /**
   * @schema Ec2ModifyVpnConnectionOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyVpnConnectionOptionsResult
 */
export interface Ec2ModifyVpnConnectionOptionsResult {
  /**
   * @schema Ec2ModifyVpnConnectionOptionsResult#VpnConnection
   */
  readonly vpnConnection?: Ec2VpnConnection;

}

/**
 * @schema Ec2ModifyVpnTunnelCertificateRequest
 */
export interface Ec2ModifyVpnTunnelCertificateRequest {
  /**
   * @schema Ec2ModifyVpnTunnelCertificateRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema Ec2ModifyVpnTunnelCertificateRequest#VpnTunnelOutsideIpAddress
   */
  readonly vpnTunnelOutsideIpAddress: string;

  /**
   * @schema Ec2ModifyVpnTunnelCertificateRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyVpnTunnelCertificateResult
 */
export interface Ec2ModifyVpnTunnelCertificateResult {
  /**
   * @schema Ec2ModifyVpnTunnelCertificateResult#VpnConnection
   */
  readonly vpnConnection?: Ec2VpnConnection;

}

/**
 * @schema Ec2ModifyVpnTunnelOptionsRequest
 */
export interface Ec2ModifyVpnTunnelOptionsRequest {
  /**
   * @schema Ec2ModifyVpnTunnelOptionsRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsRequest#VpnTunnelOutsideIpAddress
   */
  readonly vpnTunnelOutsideIpAddress: string;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsRequest#TunnelOptions
   */
  readonly tunnelOptions: Ec2ModifyVpnTunnelOptionsSpecification;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ModifyVpnTunnelOptionsResult
 */
export interface Ec2ModifyVpnTunnelOptionsResult {
  /**
   * @schema Ec2ModifyVpnTunnelOptionsResult#VpnConnection
   */
  readonly vpnConnection?: Ec2VpnConnection;

}

/**
 * @schema Ec2MonitorInstancesRequest
 */
export interface Ec2MonitorInstancesRequest {
  /**
   * @schema Ec2MonitorInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema Ec2MonitorInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2MonitorInstancesResult
 */
export interface Ec2MonitorInstancesResult {
  /**
   * @schema Ec2MonitorInstancesResult#InstanceMonitorings
   */
  readonly instanceMonitorings?: Ec2InstanceMonitoring[];

}

/**
 * @schema Ec2MoveAddressToVpcRequest
 */
export interface Ec2MoveAddressToVpcRequest {
  /**
   * @schema Ec2MoveAddressToVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2MoveAddressToVpcRequest#PublicIp
   */
  readonly publicIp: string;

}

/**
 * @schema Ec2MoveAddressToVpcResult
 */
export interface Ec2MoveAddressToVpcResult {
  /**
   * @schema Ec2MoveAddressToVpcResult#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2MoveAddressToVpcResult#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2ProvisionByoipCidrRequest
 */
export interface Ec2ProvisionByoipCidrRequest {
  /**
   * @schema Ec2ProvisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema Ec2ProvisionByoipCidrRequest#CidrAuthorizationContext
   */
  readonly cidrAuthorizationContext?: Ec2CidrAuthorizationContext;

  /**
   * @schema Ec2ProvisionByoipCidrRequest#PubliclyAdvertisable
   */
  readonly publiclyAdvertisable?: boolean;

  /**
   * @schema Ec2ProvisionByoipCidrRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ProvisionByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ProvisionByoipCidrRequest#PoolTagSpecifications
   */
  readonly poolTagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2ProvisionByoipCidrResult
 */
export interface Ec2ProvisionByoipCidrResult {
  /**
   * @schema Ec2ProvisionByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: Ec2ByoipCidr;

}

/**
 * @schema Ec2PurchaseHostReservationRequest
 */
export interface Ec2PurchaseHostReservationRequest {
  /**
   * @schema Ec2PurchaseHostReservationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2PurchaseHostReservationRequest#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2PurchaseHostReservationRequest#HostIdSet
   */
  readonly hostIdSet: string[];

  /**
   * @schema Ec2PurchaseHostReservationRequest#LimitPrice
   */
  readonly limitPrice?: string;

  /**
   * @schema Ec2PurchaseHostReservationRequest#OfferingId
   */
  readonly offeringId: string;

  /**
   * @schema Ec2PurchaseHostReservationRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2PurchaseHostReservationResult
 */
export interface Ec2PurchaseHostReservationResult {
  /**
   * @schema Ec2PurchaseHostReservationResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2PurchaseHostReservationResult#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2PurchaseHostReservationResult#Purchase
   */
  readonly purchase?: Ec2Purchase[];

  /**
   * @schema Ec2PurchaseHostReservationResult#TotalHourlyPrice
   */
  readonly totalHourlyPrice?: string;

  /**
   * @schema Ec2PurchaseHostReservationResult#TotalUpfrontPrice
   */
  readonly totalUpfrontPrice?: string;

}

/**
 * @schema Ec2PurchaseReservedInstancesOfferingRequest
 */
export interface Ec2PurchaseReservedInstancesOfferingRequest {
  /**
   * @schema Ec2PurchaseReservedInstancesOfferingRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema Ec2PurchaseReservedInstancesOfferingRequest#ReservedInstancesOfferingId
   */
  readonly reservedInstancesOfferingId: string;

  /**
   * @schema Ec2PurchaseReservedInstancesOfferingRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2PurchaseReservedInstancesOfferingRequest#LimitPrice
   */
  readonly limitPrice?: Ec2ReservedInstanceLimitPrice;

  /**
   * @schema Ec2PurchaseReservedInstancesOfferingRequest#PurchaseTime
   */
  readonly purchaseTime?: string;

}

/**
 * @schema Ec2PurchaseReservedInstancesOfferingResult
 */
export interface Ec2PurchaseReservedInstancesOfferingResult {
  /**
   * @schema Ec2PurchaseReservedInstancesOfferingResult#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema Ec2PurchaseScheduledInstancesRequest
 */
export interface Ec2PurchaseScheduledInstancesRequest {
  /**
   * @schema Ec2PurchaseScheduledInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2PurchaseScheduledInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2PurchaseScheduledInstancesRequest#PurchaseRequests
   */
  readonly purchaseRequests: Ec2PurchaseRequest[];

}

/**
 * @schema Ec2PurchaseScheduledInstancesResult
 */
export interface Ec2PurchaseScheduledInstancesResult {
  /**
   * @schema Ec2PurchaseScheduledInstancesResult#ScheduledInstanceSet
   */
  readonly scheduledInstanceSet?: Ec2ScheduledInstance[];

}

/**
 * @schema Ec2RebootInstancesRequest
 */
export interface Ec2RebootInstancesRequest {
  /**
   * @schema Ec2RebootInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema Ec2RebootInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RegisterImageRequest
 */
export interface Ec2RegisterImageRequest {
  /**
   * @schema Ec2RegisterImageRequest#ImageLocation
   */
  readonly imageLocation?: string;

  /**
   * @schema Ec2RegisterImageRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2RegisterImageRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2RegisterImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2RegisterImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RegisterImageRequest#EnaSupport
   */
  readonly enaSupport?: boolean;

  /**
   * @schema Ec2RegisterImageRequest#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2RegisterImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema Ec2RegisterImageRequest#BillingProducts
   */
  readonly billingProducts?: string[];

  /**
   * @schema Ec2RegisterImageRequest#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2RegisterImageRequest#RootDeviceName
   */
  readonly rootDeviceName?: string;

  /**
   * @schema Ec2RegisterImageRequest#SriovNetSupport
   */
  readonly sriovNetSupport?: string;

  /**
   * @schema Ec2RegisterImageRequest#VirtualizationType
   */
  readonly virtualizationType?: string;

}

/**
 * @schema Ec2RegisterImageResult
 */
export interface Ec2RegisterImageResult {
  /**
   * @schema Ec2RegisterImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema Ec2RegisterInstanceEventNotificationAttributesRequest
 */
export interface Ec2RegisterInstanceEventNotificationAttributesRequest {
  /**
   * @schema Ec2RegisterInstanceEventNotificationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RegisterInstanceEventNotificationAttributesRequest#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: Ec2RegisterInstanceTagAttributeRequest;

}

/**
 * @schema Ec2RegisterInstanceEventNotificationAttributesResult
 */
export interface Ec2RegisterInstanceEventNotificationAttributesResult {
  /**
   * @schema Ec2RegisterInstanceEventNotificationAttributesResult#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: Ec2InstanceTagNotificationAttribute;

}

/**
 * @schema Ec2RegisterTransitGatewayMulticastGroupMembersRequest
 */
export interface Ec2RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupMembersRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupMembersRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupMembersRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupMembersRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RegisterTransitGatewayMulticastGroupMembersResult
 */
export interface Ec2RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupMembersResult#RegisteredMulticastGroupMembers
   */
  readonly registeredMulticastGroupMembers?: Ec2TransitGatewayMulticastRegisteredGroupMembers;

}

/**
 * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesRequest
 */
export interface Ec2RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesResult
 */
export interface Ec2RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @schema Ec2RegisterTransitGatewayMulticastGroupSourcesResult#RegisteredMulticastGroupSources
   */
  readonly registeredMulticastGroupSources?: Ec2TransitGatewayMulticastRegisteredGroupSources;

}

/**
 * @schema Ec2RejectTransitGatewayPeeringAttachmentRequest
 */
export interface Ec2RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema Ec2RejectTransitGatewayPeeringAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2RejectTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RejectTransitGatewayPeeringAttachmentResult
 */
export interface Ec2RejectTransitGatewayPeeringAttachmentResult {
  /**
   * @schema Ec2RejectTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: Ec2TransitGatewayPeeringAttachment;

}

/**
 * @schema Ec2RejectTransitGatewayVpcAttachmentRequest
 */
export interface Ec2RejectTransitGatewayVpcAttachmentRequest {
  /**
   * @schema Ec2RejectTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema Ec2RejectTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RejectTransitGatewayVpcAttachmentResult
 */
export interface Ec2RejectTransitGatewayVpcAttachmentResult {
  /**
   * @schema Ec2RejectTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: Ec2TransitGatewayVpcAttachment;

}

/**
 * @schema Ec2RejectVpcEndpointConnectionsRequest
 */
export interface Ec2RejectVpcEndpointConnectionsRequest {
  /**
   * @schema Ec2RejectVpcEndpointConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RejectVpcEndpointConnectionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema Ec2RejectVpcEndpointConnectionsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds: string[];

}

/**
 * @schema Ec2RejectVpcEndpointConnectionsResult
 */
export interface Ec2RejectVpcEndpointConnectionsResult {
  /**
   * @schema Ec2RejectVpcEndpointConnectionsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2RejectVpcPeeringConnectionRequest
 */
export interface Ec2RejectVpcPeeringConnectionRequest {
  /**
   * @schema Ec2RejectVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RejectVpcPeeringConnectionRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema Ec2RejectVpcPeeringConnectionResult
 */
export interface Ec2RejectVpcPeeringConnectionResult {
  /**
   * @schema Ec2RejectVpcPeeringConnectionResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ReleaseAddressRequest
 */
export interface Ec2ReleaseAddressRequest {
  /**
   * @schema Ec2ReleaseAddressRequest#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2ReleaseAddressRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2ReleaseAddressRequest#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2ReleaseAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ReleaseHostsRequest
 */
export interface Ec2ReleaseHostsRequest {
  /**
   * @schema Ec2ReleaseHostsRequest#HostIds
   */
  readonly hostIds: string[];

}

/**
 * @schema Ec2ReleaseHostsResult
 */
export interface Ec2ReleaseHostsResult {
  /**
   * @schema Ec2ReleaseHostsResult#Successful
   */
  readonly successful?: string[];

  /**
   * @schema Ec2ReleaseHostsResult#Unsuccessful
   */
  readonly unsuccessful?: Ec2UnsuccessfulItem[];

}

/**
 * @schema Ec2ReplaceIamInstanceProfileAssociationRequest
 */
export interface Ec2ReplaceIamInstanceProfileAssociationRequest {
  /**
   * @schema Ec2ReplaceIamInstanceProfileAssociationRequest#IamInstanceProfile
   */
  readonly iamInstanceProfile: Ec2IamInstanceProfileSpecification;

  /**
   * @schema Ec2ReplaceIamInstanceProfileAssociationRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema Ec2ReplaceIamInstanceProfileAssociationResult
 */
export interface Ec2ReplaceIamInstanceProfileAssociationResult {
  /**
   * @schema Ec2ReplaceIamInstanceProfileAssociationResult#IamInstanceProfileAssociation
   */
  readonly iamInstanceProfileAssociation?: Ec2IamInstanceProfileAssociation;

}

/**
 * @schema Ec2ReplaceNetworkAclAssociationRequest
 */
export interface Ec2ReplaceNetworkAclAssociationRequest {
  /**
   * @schema Ec2ReplaceNetworkAclAssociationRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema Ec2ReplaceNetworkAclAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ReplaceNetworkAclAssociationRequest#NetworkAclId
   */
  readonly networkAclId: string;

}

/**
 * @schema Ec2ReplaceNetworkAclAssociationResult
 */
export interface Ec2ReplaceNetworkAclAssociationResult {
  /**
   * @schema Ec2ReplaceNetworkAclAssociationResult#NewAssociationId
   */
  readonly newAssociationId?: string;

}

/**
 * @schema Ec2ReplaceNetworkAclEntryRequest
 */
export interface Ec2ReplaceNetworkAclEntryRequest {
  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#Egress
   */
  readonly egress: boolean;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#IcmpTypeCode
   */
  readonly icmpTypeCode?: Ec2IcmpTypeCode;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#NetworkAclId
   */
  readonly networkAclId: string;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#PortRange
   */
  readonly portRange?: Ec2PortRange;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#RuleAction
   */
  readonly ruleAction: string;

  /**
   * @schema Ec2ReplaceNetworkAclEntryRequest#RuleNumber
   */
  readonly ruleNumber: number;

}

/**
 * @schema Ec2ReplaceRouteRequest
 */
export interface Ec2ReplaceRouteRequest {
  /**
   * @schema Ec2ReplaceRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ReplaceRouteRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#LocalTarget
   */
  readonly localTarget?: boolean;

  /**
   * @schema Ec2ReplaceRouteRequest#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2ReplaceRouteRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema Ec2ReplaceRouteRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2ReplaceRouteTableAssociationRequest
 */
export interface Ec2ReplaceRouteTableAssociationRequest {
  /**
   * @schema Ec2ReplaceRouteTableAssociationRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema Ec2ReplaceRouteTableAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ReplaceRouteTableAssociationRequest#RouteTableId
   */
  readonly routeTableId: string;

}

/**
 * @schema Ec2ReplaceRouteTableAssociationResult
 */
export interface Ec2ReplaceRouteTableAssociationResult {
  /**
   * @schema Ec2ReplaceRouteTableAssociationResult#NewAssociationId
   */
  readonly newAssociationId?: string;

  /**
   * @schema Ec2ReplaceRouteTableAssociationResult#AssociationState
   */
  readonly associationState?: Ec2RouteTableAssociationState;

}

/**
 * @schema Ec2ReplaceTransitGatewayRouteRequest
 */
export interface Ec2ReplaceTransitGatewayRouteRequest {
  /**
   * @schema Ec2ReplaceTransitGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema Ec2ReplaceTransitGatewayRouteRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2ReplaceTransitGatewayRouteRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2ReplaceTransitGatewayRouteRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema Ec2ReplaceTransitGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ReplaceTransitGatewayRouteResult
 */
export interface Ec2ReplaceTransitGatewayRouteResult {
  /**
   * @schema Ec2ReplaceTransitGatewayRouteResult#Route
   */
  readonly route?: Ec2TransitGatewayRoute;

}

/**
 * @schema Ec2ReportInstanceStatusRequest
 */
export interface Ec2ReportInstanceStatusRequest {
  /**
   * @schema Ec2ReportInstanceStatusRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ReportInstanceStatusRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ReportInstanceStatusRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema Ec2ReportInstanceStatusRequest#Instances
   */
  readonly instances: string[];

  /**
   * @schema Ec2ReportInstanceStatusRequest#ReasonCodes
   */
  readonly reasonCodes: string[];

  /**
   * @schema Ec2ReportInstanceStatusRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Ec2ReportInstanceStatusRequest#Status
   */
  readonly status: string;

}

/**
 * @schema Ec2RequestSpotFleetRequest
 */
export interface Ec2RequestSpotFleetRequest {
  /**
   * @schema Ec2RequestSpotFleetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RequestSpotFleetRequest#SpotFleetRequestConfig
   */
  readonly spotFleetRequestConfig: Ec2SpotFleetRequestConfigData;

}

/**
 * @schema Ec2RequestSpotFleetResponse
 */
export interface Ec2RequestSpotFleetResponse {
  /**
   * @schema Ec2RequestSpotFleetResponse#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema Ec2RequestSpotInstancesRequest
 */
export interface Ec2RequestSpotInstancesRequest {
  /**
   * @schema Ec2RequestSpotInstancesRequest#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema Ec2RequestSpotInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RequestSpotInstancesRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2RequestSpotInstancesRequest#LaunchGroup
   */
  readonly launchGroup?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#LaunchSpecification
   */
  readonly launchSpecification?: Ec2RequestSpotLaunchSpecification;

  /**
   * @schema Ec2RequestSpotInstancesRequest#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2RequestSpotInstancesRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2RequestSpotInstancesRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema Ec2RequestSpotInstancesResult
 */
export interface Ec2RequestSpotInstancesResult {
  /**
   * @schema Ec2RequestSpotInstancesResult#SpotInstanceRequests
   */
  readonly spotInstanceRequests?: Ec2SpotInstanceRequest[];

}

/**
 * @schema Ec2ResetEbsDefaultKmsKeyIdRequest
 */
export interface Ec2ResetEbsDefaultKmsKeyIdRequest {
  /**
   * @schema Ec2ResetEbsDefaultKmsKeyIdRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ResetEbsDefaultKmsKeyIdResult
 */
export interface Ec2ResetEbsDefaultKmsKeyIdResult {
  /**
   * @schema Ec2ResetEbsDefaultKmsKeyIdResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema Ec2ResetFpgaImageAttributeRequest
 */
export interface Ec2ResetFpgaImageAttributeRequest {
  /**
   * @schema Ec2ResetFpgaImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ResetFpgaImageAttributeRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

  /**
   * @schema Ec2ResetFpgaImageAttributeRequest#Attribute
   */
  readonly attribute?: string;

}

/**
 * @schema Ec2ResetFpgaImageAttributeResult
 */
export interface Ec2ResetFpgaImageAttributeResult {
  /**
   * @schema Ec2ResetFpgaImageAttributeResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2ResetImageAttributeRequest
 */
export interface Ec2ResetImageAttributeRequest {
  /**
   * @schema Ec2ResetImageAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2ResetImageAttributeRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema Ec2ResetImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2ResetInstanceAttributeRequest
 */
export interface Ec2ResetInstanceAttributeRequest {
  /**
   * @schema Ec2ResetInstanceAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2ResetInstanceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ResetInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema Ec2ResetNetworkInterfaceAttributeRequest
 */
export interface Ec2ResetNetworkInterfaceAttributeRequest {
  /**
   * @schema Ec2ResetNetworkInterfaceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2ResetNetworkInterfaceAttributeRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2ResetNetworkInterfaceAttributeRequest#SourceDestCheck
   */
  readonly sourceDestCheck?: string;

}

/**
 * @schema Ec2ResetSnapshotAttributeRequest
 */
export interface Ec2ResetSnapshotAttributeRequest {
  /**
   * @schema Ec2ResetSnapshotAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema Ec2ResetSnapshotAttributeRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema Ec2ResetSnapshotAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RestoreAddressToClassicRequest
 */
export interface Ec2RestoreAddressToClassicRequest {
  /**
   * @schema Ec2RestoreAddressToClassicRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RestoreAddressToClassicRequest#PublicIp
   */
  readonly publicIp: string;

}

/**
 * @schema Ec2RestoreAddressToClassicResult
 */
export interface Ec2RestoreAddressToClassicResult {
  /**
   * @schema Ec2RestoreAddressToClassicResult#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2RestoreAddressToClassicResult#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2RestoreManagedPrefixListVersionRequest
 */
export interface Ec2RestoreManagedPrefixListVersionRequest {
  /**
   * @schema Ec2RestoreManagedPrefixListVersionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RestoreManagedPrefixListVersionRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema Ec2RestoreManagedPrefixListVersionRequest#PreviousVersion
   */
  readonly previousVersion: number;

  /**
   * @schema Ec2RestoreManagedPrefixListVersionRequest#CurrentVersion
   */
  readonly currentVersion: number;

}

/**
 * @schema Ec2RestoreManagedPrefixListVersionResult
 */
export interface Ec2RestoreManagedPrefixListVersionResult {
  /**
   * @schema Ec2RestoreManagedPrefixListVersionResult#PrefixList
   */
  readonly prefixList?: Ec2ManagedPrefixList;

}

/**
 * @schema Ec2RevokeClientVpnIngressRequest
 */
export interface Ec2RevokeClientVpnIngressRequest {
  /**
   * @schema Ec2RevokeClientVpnIngressRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2RevokeClientVpnIngressRequest#TargetNetworkCidr
   */
  readonly targetNetworkCidr: string;

  /**
   * @schema Ec2RevokeClientVpnIngressRequest#AccessGroupId
   */
  readonly accessGroupId?: string;

  /**
   * @schema Ec2RevokeClientVpnIngressRequest#RevokeAllGroups
   */
  readonly revokeAllGroups?: boolean;

  /**
   * @schema Ec2RevokeClientVpnIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RevokeClientVpnIngressResult
 */
export interface Ec2RevokeClientVpnIngressResult {
  /**
   * @schema Ec2RevokeClientVpnIngressResult#Status
   */
  readonly status?: Ec2ClientVpnAuthorizationRuleStatus;

}

/**
 * @schema Ec2RevokeSecurityGroupEgressRequest
 */
export interface Ec2RevokeSecurityGroupEgressRequest {
  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#IpPermissions
   */
  readonly ipPermissions?: Ec2IpPermission[];

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema Ec2RevokeSecurityGroupEgressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

}

/**
 * @schema Ec2RevokeSecurityGroupEgressResult
 */
export interface Ec2RevokeSecurityGroupEgressResult {
  /**
   * @schema Ec2RevokeSecurityGroupEgressResult#Return
   */
  readonly return?: boolean;

  /**
   * @schema Ec2RevokeSecurityGroupEgressResult#UnknownIpPermissions
   */
  readonly unknownIpPermissions?: Ec2IpPermission[];

}

/**
 * @schema Ec2RevokeSecurityGroupIngressRequest
 */
export interface Ec2RevokeSecurityGroupIngressRequest {
  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#IpPermissions
   */
  readonly ipPermissions?: Ec2IpPermission[];

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema Ec2RevokeSecurityGroupIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2RevokeSecurityGroupIngressResult
 */
export interface Ec2RevokeSecurityGroupIngressResult {
  /**
   * @schema Ec2RevokeSecurityGroupIngressResult#Return
   */
  readonly return?: boolean;

  /**
   * @schema Ec2RevokeSecurityGroupIngressResult#UnknownIpPermissions
   */
  readonly unknownIpPermissions?: Ec2IpPermission[];

}

/**
 * @schema Ec2RunInstancesRequest
 */
export interface Ec2RunInstancesRequest {
  /**
   * @schema Ec2RunInstancesRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2RunInstancesRequest#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2RunInstancesRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2RunInstancesRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2RunInstancesRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2InstanceIpv6Address[];

  /**
   * @schema Ec2RunInstancesRequest#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2RunInstancesRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2RunInstancesRequest#MaxCount
   */
  readonly maxCount: number;

  /**
   * @schema Ec2RunInstancesRequest#MinCount
   */
  readonly minCount: number;

  /**
   * @schema Ec2RunInstancesRequest#Monitoring
   */
  readonly monitoring?: Ec2RunInstancesMonitoringEnabled;

  /**
   * @schema Ec2RunInstancesRequest#Placement
   */
  readonly placement?: Ec2Placement;

  /**
   * @schema Ec2RunInstancesRequest#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2RunInstancesRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2RunInstancesRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema Ec2RunInstancesRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2RunInstancesRequest#UserData
   */
  readonly userData?: string;

  /**
   * @schema Ec2RunInstancesRequest#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema Ec2RunInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2RunInstancesRequest#DisableApiTermination
   */
  readonly disableApiTermination?: boolean;

  /**
   * @schema Ec2RunInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RunInstancesRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2RunInstancesRequest#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2IamInstanceProfileSpecification;

  /**
   * @schema Ec2RunInstancesRequest#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema Ec2RunInstancesRequest#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2InstanceNetworkInterfaceSpecification[];

  /**
   * @schema Ec2RunInstancesRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2RunInstancesRequest#ElasticGpuSpecification
   */
  readonly elasticGpuSpecification?: Ec2ElasticGpuSpecification[];

  /**
   * @schema Ec2RunInstancesRequest#ElasticInferenceAccelerators
   */
  readonly elasticInferenceAccelerators?: Ec2ElasticInferenceAccelerator[];

  /**
   * @schema Ec2RunInstancesRequest#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

  /**
   * @schema Ec2RunInstancesRequest#LaunchTemplate
   */
  readonly launchTemplate?: Ec2LaunchTemplateSpecification;

  /**
   * @schema Ec2RunInstancesRequest#InstanceMarketOptions
   */
  readonly instanceMarketOptions?: Ec2InstanceMarketOptionsRequest;

  /**
   * @schema Ec2RunInstancesRequest#CreditSpecification
   */
  readonly creditSpecification?: Ec2CreditSpecificationRequest;

  /**
   * @schema Ec2RunInstancesRequest#CpuOptions
   */
  readonly cpuOptions?: Ec2CpuOptionsRequest;

  /**
   * @schema Ec2RunInstancesRequest#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: Ec2CapacityReservationSpecification;

  /**
   * @schema Ec2RunInstancesRequest#HibernationOptions
   */
  readonly hibernationOptions?: Ec2HibernationOptionsRequest;

  /**
   * @schema Ec2RunInstancesRequest#LicenseSpecifications
   */
  readonly licenseSpecifications?: Ec2LicenseConfigurationRequest[];

  /**
   * @schema Ec2RunInstancesRequest#MetadataOptions
   */
  readonly metadataOptions?: Ec2InstanceMetadataOptionsRequest;

  /**
   * @schema Ec2RunInstancesRequest#EnclaveOptions
   */
  readonly enclaveOptions?: Ec2EnclaveOptionsRequest;

}

/**
 * @schema Ec2Reservation
 */
export interface Ec2Reservation {
  /**
   * @schema Ec2Reservation#Groups
   */
  readonly groups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2Reservation#Instances
   */
  readonly instances?: Ec2Instance[];

  /**
   * @schema Ec2Reservation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2Reservation#RequesterId
   */
  readonly requesterId?: string;

  /**
   * @schema Ec2Reservation#ReservationId
   */
  readonly reservationId?: string;

}

/**
 * @schema Ec2RunScheduledInstancesRequest
 */
export interface Ec2RunScheduledInstancesRequest {
  /**
   * @schema Ec2RunScheduledInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2RunScheduledInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2RunScheduledInstancesRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2RunScheduledInstancesRequest#LaunchSpecification
   */
  readonly launchSpecification: Ec2ScheduledInstancesLaunchSpecification;

  /**
   * @schema Ec2RunScheduledInstancesRequest#ScheduledInstanceId
   */
  readonly scheduledInstanceId: string;

}

/**
 * @schema Ec2RunScheduledInstancesResult
 */
export interface Ec2RunScheduledInstancesResult {
  /**
   * @schema Ec2RunScheduledInstancesResult#InstanceIdSet
   */
  readonly instanceIdSet?: string[];

}

/**
 * @schema Ec2SearchLocalGatewayRoutesRequest
 */
export interface Ec2SearchLocalGatewayRoutesRequest {
  /**
   * @schema Ec2SearchLocalGatewayRoutesRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema Ec2SearchLocalGatewayRoutesRequest#Filters
   */
  readonly filters: Ec2Filter[];

  /**
   * @schema Ec2SearchLocalGatewayRoutesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2SearchLocalGatewayRoutesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2SearchLocalGatewayRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2SearchLocalGatewayRoutesResult
 */
export interface Ec2SearchLocalGatewayRoutesResult {
  /**
   * @schema Ec2SearchLocalGatewayRoutesResult#Routes
   */
  readonly routes?: Ec2LocalGatewayRoute[];

  /**
   * @schema Ec2SearchLocalGatewayRoutesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2SearchTransitGatewayMulticastGroupsRequest
 */
export interface Ec2SearchTransitGatewayMulticastGroupsRequest {
  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsRequest#Filters
   */
  readonly filters?: Ec2Filter[];

  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2SearchTransitGatewayMulticastGroupsResult
 */
export interface Ec2SearchTransitGatewayMulticastGroupsResult {
  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsResult#MulticastGroups
   */
  readonly multicastGroups?: Ec2TransitGatewayMulticastGroup[];

  /**
   * @schema Ec2SearchTransitGatewayMulticastGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Ec2SearchTransitGatewayRoutesRequest
 */
export interface Ec2SearchTransitGatewayRoutesRequest {
  /**
   * @schema Ec2SearchTransitGatewayRoutesRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema Ec2SearchTransitGatewayRoutesRequest#Filters
   */
  readonly filters: Ec2Filter[];

  /**
   * @schema Ec2SearchTransitGatewayRoutesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Ec2SearchTransitGatewayRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2SearchTransitGatewayRoutesResult
 */
export interface Ec2SearchTransitGatewayRoutesResult {
  /**
   * @schema Ec2SearchTransitGatewayRoutesResult#Routes
   */
  readonly routes?: Ec2TransitGatewayRoute[];

  /**
   * @schema Ec2SearchTransitGatewayRoutesResult#AdditionalRoutesAvailable
   */
  readonly additionalRoutesAvailable?: boolean;

}

/**
 * @schema Ec2SendDiagnosticInterruptRequest
 */
export interface Ec2SendDiagnosticInterruptRequest {
  /**
   * @schema Ec2SendDiagnosticInterruptRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema Ec2SendDiagnosticInterruptRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2StartInstancesRequest
 */
export interface Ec2StartInstancesRequest {
  /**
   * @schema Ec2StartInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema Ec2StartInstancesRequest#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema Ec2StartInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2StartInstancesResult
 */
export interface Ec2StartInstancesResult {
  /**
   * @schema Ec2StartInstancesResult#StartingInstances
   */
  readonly startingInstances?: Ec2InstanceStateChange[];

}

/**
 * @schema Ec2StartVpcEndpointServicePrivateDnsVerificationRequest
 */
export interface Ec2StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * @schema Ec2StartVpcEndpointServicePrivateDnsVerificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2StartVpcEndpointServicePrivateDnsVerificationRequest#ServiceId
   */
  readonly serviceId: string;

}

/**
 * @schema Ec2StartVpcEndpointServicePrivateDnsVerificationResult
 */
export interface Ec2StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * @schema Ec2StartVpcEndpointServicePrivateDnsVerificationResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema Ec2StopInstancesRequest
 */
export interface Ec2StopInstancesRequest {
  /**
   * @schema Ec2StopInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema Ec2StopInstancesRequest#Hibernate
   */
  readonly hibernate?: boolean;

  /**
   * @schema Ec2StopInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2StopInstancesRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema Ec2StopInstancesResult
 */
export interface Ec2StopInstancesResult {
  /**
   * @schema Ec2StopInstancesResult#StoppingInstances
   */
  readonly stoppingInstances?: Ec2InstanceStateChange[];

}

/**
 * @schema Ec2TerminateClientVpnConnectionsRequest
 */
export interface Ec2TerminateClientVpnConnectionsRequest {
  /**
   * @schema Ec2TerminateClientVpnConnectionsRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema Ec2TerminateClientVpnConnectionsRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema Ec2TerminateClientVpnConnectionsRequest#Username
   */
  readonly username?: string;

  /**
   * @schema Ec2TerminateClientVpnConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2TerminateClientVpnConnectionsResult
 */
export interface Ec2TerminateClientVpnConnectionsResult {
  /**
   * @schema Ec2TerminateClientVpnConnectionsResult#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2TerminateClientVpnConnectionsResult#Username
   */
  readonly username?: string;

  /**
   * @schema Ec2TerminateClientVpnConnectionsResult#ConnectionStatuses
   */
  readonly connectionStatuses?: Ec2TerminateConnectionStatus[];

}

/**
 * @schema Ec2TerminateInstancesRequest
 */
export interface Ec2TerminateInstancesRequest {
  /**
   * @schema Ec2TerminateInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema Ec2TerminateInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2TerminateInstancesResult
 */
export interface Ec2TerminateInstancesResult {
  /**
   * @schema Ec2TerminateInstancesResult#TerminatingInstances
   */
  readonly terminatingInstances?: Ec2InstanceStateChange[];

}

/**
 * @schema Ec2UnassignIpv6AddressesRequest
 */
export interface Ec2UnassignIpv6AddressesRequest {
  /**
   * @schema Ec2UnassignIpv6AddressesRequest#Ipv6Addresses
   */
  readonly ipv6Addresses: string[];

  /**
   * @schema Ec2UnassignIpv6AddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema Ec2UnassignIpv6AddressesResult
 */
export interface Ec2UnassignIpv6AddressesResult {
  /**
   * @schema Ec2UnassignIpv6AddressesResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2UnassignIpv6AddressesResult#UnassignedIpv6Addresses
   */
  readonly unassignedIpv6Addresses?: string[];

}

/**
 * @schema Ec2UnassignPrivateIpAddressesRequest
 */
export interface Ec2UnassignPrivateIpAddressesRequest {
  /**
   * @schema Ec2UnassignPrivateIpAddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema Ec2UnassignPrivateIpAddressesRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses: string[];

}

/**
 * @schema Ec2UnmonitorInstancesRequest
 */
export interface Ec2UnmonitorInstancesRequest {
  /**
   * @schema Ec2UnmonitorInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema Ec2UnmonitorInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2UnmonitorInstancesResult
 */
export interface Ec2UnmonitorInstancesResult {
  /**
   * @schema Ec2UnmonitorInstancesResult#InstanceMonitorings
   */
  readonly instanceMonitorings?: Ec2InstanceMonitoring[];

}

/**
 * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressRequest
 */
export interface Ec2UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressRequest#IpPermissions
   */
  readonly ipPermissions: Ec2IpPermission[];

}

/**
 * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressResult
 */
export interface Ec2UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsEgressResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressRequest
 */
export interface Ec2UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressRequest#IpPermissions
   */
  readonly ipPermissions: Ec2IpPermission[];

}

/**
 * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressResult
 */
export interface Ec2UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * @schema Ec2UpdateSecurityGroupRuleDescriptionsIngressResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema Ec2WithdrawByoipCidrRequest
 */
export interface Ec2WithdrawByoipCidrRequest {
  /**
   * @schema Ec2WithdrawByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema Ec2WithdrawByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Ec2WithdrawByoipCidrResult
 */
export interface Ec2WithdrawByoipCidrResult {
  /**
   * @schema Ec2WithdrawByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: Ec2ByoipCidr;

}

/**
 * @schema Ec2TargetConfigurationRequest
 */
export interface Ec2TargetConfigurationRequest {
  /**
   * @schema Ec2TargetConfigurationRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2TargetConfigurationRequest#OfferingId
   */
  readonly offeringId: string;

}

/**
 * @schema Ec2TransitGatewayPeeringAttachment
 */
export interface Ec2TransitGatewayPeeringAttachment {
  /**
   * @schema Ec2TransitGatewayPeeringAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayPeeringAttachment#RequesterTgwInfo
   */
  readonly requesterTgwInfo?: Ec2PeeringTgwInfo;

  /**
   * @schema Ec2TransitGatewayPeeringAttachment#AccepterTgwInfo
   */
  readonly accepterTgwInfo?: Ec2PeeringTgwInfo;

  /**
   * @schema Ec2TransitGatewayPeeringAttachment#Status
   */
  readonly status?: Ec2PeeringAttachmentStatus;

  /**
   * @schema Ec2TransitGatewayPeeringAttachment#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGatewayPeeringAttachment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2TransitGatewayPeeringAttachment#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2TransitGatewayVpcAttachment
 */
export interface Ec2TransitGatewayVpcAttachment {
  /**
   * @schema Ec2TransitGatewayVpcAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#VpcOwnerId
   */
  readonly vpcOwnerId?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Ec2TransitGatewayVpcAttachment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#Options
   */
  readonly options?: Ec2TransitGatewayVpcAttachmentOptions;

  /**
   * @schema Ec2TransitGatewayVpcAttachment#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2UnsuccessfulItem
 */
export interface Ec2UnsuccessfulItem {
  /**
   * @schema Ec2UnsuccessfulItem#Error
   */
  readonly error?: Ec2UnsuccessfulItemError;

  /**
   * @schema Ec2UnsuccessfulItem#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * @schema Ec2VpcPeeringConnection
 */
export interface Ec2VpcPeeringConnection {
  /**
   * @schema Ec2VpcPeeringConnection#AccepterVpcInfo
   */
  readonly accepterVpcInfo?: Ec2VpcPeeringConnectionVpcInfo;

  /**
   * @schema Ec2VpcPeeringConnection#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema Ec2VpcPeeringConnection#RequesterVpcInfo
   */
  readonly requesterVpcInfo?: Ec2VpcPeeringConnectionVpcInfo;

  /**
   * @schema Ec2VpcPeeringConnection#Status
   */
  readonly status?: Ec2VpcPeeringConnectionStateReason;

  /**
   * @schema Ec2VpcPeeringConnection#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2VpcPeeringConnection#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2ByoipCidr
 */
export interface Ec2ByoipCidr {
  /**
   * @schema Ec2ByoipCidr#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema Ec2ByoipCidr#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ByoipCidr#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ByoipCidr#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2TagSpecification
 */
export interface Ec2TagSpecification {
  /**
   * @schema Ec2TagSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TagSpecification#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2AssignedPrivateIpAddress
 */
export interface Ec2AssignedPrivateIpAddress {
  /**
   * @schema Ec2AssignedPrivateIpAddress#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema Ec2AssociationStatus
 */
export interface Ec2AssociationStatus {
  /**
   * @schema Ec2AssociationStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2AssociationStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2IamInstanceProfileSpecification
 */
export interface Ec2IamInstanceProfileSpecification {
  /**
   * @schema Ec2IamInstanceProfileSpecification#Arn
   */
  readonly arn?: string;

  /**
   * @schema Ec2IamInstanceProfileSpecification#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2IamInstanceProfileAssociation
 */
export interface Ec2IamInstanceProfileAssociation {
  /**
   * @schema Ec2IamInstanceProfileAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2IamInstanceProfileAssociation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2IamInstanceProfileAssociation#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2IamInstanceProfile;

  /**
   * @schema Ec2IamInstanceProfileAssociation#State
   */
  readonly state?: string;

  /**
   * @schema Ec2IamInstanceProfileAssociation#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Ec2RouteTableAssociationState
 */
export interface Ec2RouteTableAssociationState {
  /**
   * @schema Ec2RouteTableAssociationState#State
   */
  readonly state?: string;

  /**
   * @schema Ec2RouteTableAssociationState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema Ec2SubnetIpv6CidrBlockAssociation
 */
export interface Ec2SubnetIpv6CidrBlockAssociation {
  /**
   * @schema Ec2SubnetIpv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2SubnetIpv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2SubnetIpv6CidrBlockAssociation#Ipv6CidrBlockState
   */
  readonly ipv6CidrBlockState?: Ec2SubnetCidrBlockState;

}

/**
 * @schema Ec2TransitGatewayMulticastDomainAssociations
 */
export interface Ec2TransitGatewayMulticastDomainAssociations {
  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociations#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociations#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociations#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociations#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociations#Subnets
   */
  readonly subnets?: Ec2SubnetAssociation[];

}

/**
 * @schema Ec2TransitGatewayAssociation
 */
export interface Ec2TransitGatewayAssociation {
  /**
   * @schema Ec2TransitGatewayAssociation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayAssociation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2VpcIpv6CidrBlockAssociation
 */
export interface Ec2VpcIpv6CidrBlockAssociation {
  /**
   * @schema Ec2VpcIpv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2VpcIpv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2VpcIpv6CidrBlockAssociation#Ipv6CidrBlockState
   */
  readonly ipv6CidrBlockState?: Ec2VpcCidrBlockState;

  /**
   * @schema Ec2VpcIpv6CidrBlockAssociation#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2VpcIpv6CidrBlockAssociation#Ipv6Pool
   */
  readonly ipv6Pool?: string;

}

/**
 * @schema Ec2VpcCidrBlockAssociation
 */
export interface Ec2VpcCidrBlockAssociation {
  /**
   * @schema Ec2VpcCidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2VpcCidrBlockAssociation#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2VpcCidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: Ec2VpcCidrBlockState;

}

/**
 * @schema Ec2VpcAttachment
 */
export interface Ec2VpcAttachment {
  /**
   * @schema Ec2VpcAttachment#State
   */
  readonly state?: string;

  /**
   * @schema Ec2VpcAttachment#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2ClientVpnAuthorizationRuleStatus
 */
export interface Ec2ClientVpnAuthorizationRuleStatus {
  /**
   * @schema Ec2ClientVpnAuthorizationRuleStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ClientVpnAuthorizationRuleStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2IpPermission
 */
export interface Ec2IpPermission {
  /**
   * @schema Ec2IpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2IpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema Ec2IpPermission#IpRanges
   */
  readonly ipRanges?: Ec2IpRange[];

  /**
   * @schema Ec2IpPermission#Ipv6Ranges
   */
  readonly ipv6Ranges?: Ec2Ipv6Range[];

  /**
   * @schema Ec2IpPermission#PrefixListIds
   */
  readonly prefixListIds?: Ec2PrefixListId[];

  /**
   * @schema Ec2IpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema Ec2IpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: Ec2UserIdGroupPair[];

}

/**
 * @schema Ec2Storage
 */
export interface Ec2Storage {
  /**
   * @schema Ec2Storage#S3
   */
  readonly s3?: Ec2S3Storage;

}

/**
 * @schema Ec2BundleTask
 */
export interface Ec2BundleTask {
  /**
   * @schema Ec2BundleTask#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema Ec2BundleTask#BundleTaskError
   */
  readonly bundleTaskError?: Ec2BundleTaskError;

  /**
   * @schema Ec2BundleTask#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2BundleTask#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2BundleTask#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Ec2BundleTask#State
   */
  readonly state?: string;

  /**
   * @schema Ec2BundleTask#Storage
   */
  readonly storage?: Ec2Storage;

  /**
   * @schema Ec2BundleTask#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema Ec2ReservedInstancesListing
 */
export interface Ec2ReservedInstancesListing {
  /**
   * @schema Ec2ReservedInstancesListing#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ReservedInstancesListing#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Ec2ReservedInstancesListing#InstanceCounts
   */
  readonly instanceCounts?: Ec2InstanceCount[];

  /**
   * @schema Ec2ReservedInstancesListing#PriceSchedules
   */
  readonly priceSchedules?: Ec2PriceSchedule[];

  /**
   * @schema Ec2ReservedInstancesListing#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema Ec2ReservedInstancesListing#ReservedInstancesListingId
   */
  readonly reservedInstancesListingId?: string;

  /**
   * @schema Ec2ReservedInstancesListing#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ReservedInstancesListing#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ReservedInstancesListing#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2ReservedInstancesListing#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema Ec2CancelSpotFleetRequestsSuccessItem
 */
export interface Ec2CancelSpotFleetRequestsSuccessItem {
  /**
   * @schema Ec2CancelSpotFleetRequestsSuccessItem#CurrentSpotFleetRequestState
   */
  readonly currentSpotFleetRequestState?: string;

  /**
   * @schema Ec2CancelSpotFleetRequestsSuccessItem#PreviousSpotFleetRequestState
   */
  readonly previousSpotFleetRequestState?: string;

  /**
   * @schema Ec2CancelSpotFleetRequestsSuccessItem#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema Ec2CancelSpotFleetRequestsErrorItem
 */
export interface Ec2CancelSpotFleetRequestsErrorItem {
  /**
   * @schema Ec2CancelSpotFleetRequestsErrorItem#Error
   */
  readonly error?: Ec2CancelSpotFleetRequestsError;

  /**
   * @schema Ec2CancelSpotFleetRequestsErrorItem#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema Ec2CancelledSpotInstanceRequest
 */
export interface Ec2CancelledSpotInstanceRequest {
  /**
   * @schema Ec2CancelledSpotInstanceRequest#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema Ec2CancelledSpotInstanceRequest#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2Tag
 */
export interface Ec2Tag {
  /**
   * @schema Ec2Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Ec2Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2CapacityReservation
 */
export interface Ec2CapacityReservation {
  /**
   * @schema Ec2CapacityReservation#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema Ec2CapacityReservation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2CapacityReservation#CapacityReservationArn
   */
  readonly capacityReservationArn?: string;

  /**
   * @schema Ec2CapacityReservation#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Ec2CapacityReservation#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2CapacityReservation#InstancePlatform
   */
  readonly instancePlatform?: string;

  /**
   * @schema Ec2CapacityReservation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2CapacityReservation#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Ec2CapacityReservation#TotalInstanceCount
   */
  readonly totalInstanceCount?: number;

  /**
   * @schema Ec2CapacityReservation#AvailableInstanceCount
   */
  readonly availableInstanceCount?: number;

  /**
   * @schema Ec2CapacityReservation#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2CapacityReservation#EphemeralStorage
   */
  readonly ephemeralStorage?: boolean;

  /**
   * @schema Ec2CapacityReservation#State
   */
  readonly state?: string;

  /**
   * @schema Ec2CapacityReservation#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema Ec2CapacityReservation#EndDateType
   */
  readonly endDateType?: string;

  /**
   * @schema Ec2CapacityReservation#InstanceMatchCriteria
   */
  readonly instanceMatchCriteria?: string;

  /**
   * @schema Ec2CapacityReservation#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Ec2CapacityReservation#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2CarrierGateway
 */
export interface Ec2CarrierGateway {
  /**
   * @schema Ec2CarrierGateway#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema Ec2CarrierGateway#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2CarrierGateway#State
   */
  readonly state?: string;

  /**
   * @schema Ec2CarrierGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2CarrierGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ClientVpnAuthenticationRequest
 */
export interface Ec2ClientVpnAuthenticationRequest {
  /**
   * @schema Ec2ClientVpnAuthenticationRequest#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2ClientVpnAuthenticationRequest#ActiveDirectory
   */
  readonly activeDirectory?: Ec2DirectoryServiceAuthenticationRequest;

  /**
   * @schema Ec2ClientVpnAuthenticationRequest#MutualAuthentication
   */
  readonly mutualAuthentication?: Ec2CertificateAuthenticationRequest;

  /**
   * @schema Ec2ClientVpnAuthenticationRequest#FederatedAuthentication
   */
  readonly federatedAuthentication?: Ec2FederatedAuthenticationRequest;

}

/**
 * @schema Ec2ConnectionLogOptions
 */
export interface Ec2ConnectionLogOptions {
  /**
   * @schema Ec2ConnectionLogOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Ec2ConnectionLogOptions#CloudwatchLogGroup
   */
  readonly cloudwatchLogGroup?: string;

  /**
   * @schema Ec2ConnectionLogOptions#CloudwatchLogStream
   */
  readonly cloudwatchLogStream?: string;

}

/**
 * @schema Ec2ClientConnectOptions
 */
export interface Ec2ClientConnectOptions {
  /**
   * @schema Ec2ClientConnectOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Ec2ClientConnectOptions#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * @schema Ec2ClientVpnEndpointStatus
 */
export interface Ec2ClientVpnEndpointStatus {
  /**
   * @schema Ec2ClientVpnEndpointStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ClientVpnEndpointStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2ClientVpnRouteStatus
 */
export interface Ec2ClientVpnRouteStatus {
  /**
   * @schema Ec2ClientVpnRouteStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ClientVpnRouteStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2CustomerGateway
 */
export interface Ec2CustomerGateway {
  /**
   * @schema Ec2CustomerGateway#BgpAsn
   */
  readonly bgpAsn?: string;

  /**
   * @schema Ec2CustomerGateway#CustomerGatewayId
   */
  readonly customerGatewayId?: string;

  /**
   * @schema Ec2CustomerGateway#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema Ec2CustomerGateway#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema Ec2CustomerGateway#State
   */
  readonly state?: string;

  /**
   * @schema Ec2CustomerGateway#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2CustomerGateway#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2CustomerGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2Subnet
 */
export interface Ec2Subnet {
  /**
   * @schema Ec2Subnet#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2Subnet#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Ec2Subnet#AvailableIpAddressCount
   */
  readonly availableIpAddressCount?: number;

  /**
   * @schema Ec2Subnet#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2Subnet#DefaultForAz
   */
  readonly defaultForAz?: boolean;

  /**
   * @schema Ec2Subnet#MapPublicIpOnLaunch
   */
  readonly mapPublicIpOnLaunch?: boolean;

  /**
   * @schema Ec2Subnet#MapCustomerOwnedIpOnLaunch
   */
  readonly mapCustomerOwnedIpOnLaunch?: boolean;

  /**
   * @schema Ec2Subnet#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema Ec2Subnet#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Subnet#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2Subnet#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2Subnet#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2Subnet#AssignIpv6AddressOnCreation
   */
  readonly assignIpv6AddressOnCreation?: boolean;

  /**
   * @schema Ec2Subnet#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: Ec2SubnetIpv6CidrBlockAssociation[];

  /**
   * @schema Ec2Subnet#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2Subnet#SubnetArn
   */
  readonly subnetArn?: string;

  /**
   * @schema Ec2Subnet#OutpostArn
   */
  readonly outpostArn?: string;

}

/**
 * @schema Ec2Vpc
 */
export interface Ec2Vpc {
  /**
   * @schema Ec2Vpc#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2Vpc#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema Ec2Vpc#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Vpc#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2Vpc#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2Vpc#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema Ec2Vpc#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: Ec2VpcIpv6CidrBlockAssociation[];

  /**
   * @schema Ec2Vpc#CidrBlockAssociationSet
   */
  readonly cidrBlockAssociationSet?: Ec2VpcCidrBlockAssociation[];

  /**
   * @schema Ec2Vpc#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema Ec2Vpc#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2NewDhcpConfiguration
 */
export interface Ec2NewDhcpConfiguration {
  /**
   * @schema Ec2NewDhcpConfiguration#Key
   */
  readonly key?: string;

  /**
   * @schema Ec2NewDhcpConfiguration#Values
   */
  readonly values?: string[];

}

/**
 * @schema Ec2DhcpOptions
 */
export interface Ec2DhcpOptions {
  /**
   * @schema Ec2DhcpOptions#DhcpConfigurations
   */
  readonly dhcpConfigurations?: Ec2DhcpConfiguration[];

  /**
   * @schema Ec2DhcpOptions#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema Ec2DhcpOptions#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2DhcpOptions#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2EgressOnlyInternetGateway
 */
export interface Ec2EgressOnlyInternetGateway {
  /**
   * @schema Ec2EgressOnlyInternetGateway#Attachments
   */
  readonly attachments?: Ec2InternetGatewayAttachment[];

  /**
   * @schema Ec2EgressOnlyInternetGateway#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema Ec2EgressOnlyInternetGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2SpotOptionsRequest
 */
export interface Ec2SpotOptionsRequest {
  /**
   * @schema Ec2SpotOptionsRequest#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema Ec2SpotOptionsRequest#MaintenanceStrategies
   */
  readonly maintenanceStrategies?: Ec2FleetSpotMaintenanceStrategiesRequest;

  /**
   * @schema Ec2SpotOptionsRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

  /**
   * @schema Ec2SpotOptionsRequest#InstancePoolsToUseCount
   */
  readonly instancePoolsToUseCount?: number;

  /**
   * @schema Ec2SpotOptionsRequest#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema Ec2SpotOptionsRequest#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema Ec2SpotOptionsRequest#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema Ec2SpotOptionsRequest#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema Ec2OnDemandOptionsRequest
 */
export interface Ec2OnDemandOptionsRequest {
  /**
   * @schema Ec2OnDemandOptionsRequest#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema Ec2OnDemandOptionsRequest#CapacityReservationOptions
   */
  readonly capacityReservationOptions?: Ec2CapacityReservationOptionsRequest;

  /**
   * @schema Ec2OnDemandOptionsRequest#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema Ec2OnDemandOptionsRequest#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema Ec2OnDemandOptionsRequest#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema Ec2OnDemandOptionsRequest#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema Ec2FleetLaunchTemplateConfigRequest
 */
export interface Ec2FleetLaunchTemplateConfigRequest {
  /**
   * @schema Ec2FleetLaunchTemplateConfigRequest#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: Ec2FleetLaunchTemplateSpecificationRequest;

  /**
   * @schema Ec2FleetLaunchTemplateConfigRequest#Overrides
   */
  readonly overrides?: Ec2FleetLaunchTemplateOverridesRequest[];

}

/**
 * @schema Ec2TargetCapacitySpecificationRequest
 */
export interface Ec2TargetCapacitySpecificationRequest {
  /**
   * @schema Ec2TargetCapacitySpecificationRequest#TotalTargetCapacity
   */
  readonly totalTargetCapacity: number;

  /**
   * @schema Ec2TargetCapacitySpecificationRequest#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

  /**
   * @schema Ec2TargetCapacitySpecificationRequest#SpotTargetCapacity
   */
  readonly spotTargetCapacity?: number;

  /**
   * @schema Ec2TargetCapacitySpecificationRequest#DefaultTargetCapacityType
   */
  readonly defaultTargetCapacityType?: string;

}

/**
 * @schema Ec2CreateFleetError
 */
export interface Ec2CreateFleetError {
  /**
   * @schema Ec2CreateFleetError#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: Ec2LaunchTemplateAndOverridesResponse;

  /**
   * @schema Ec2CreateFleetError#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema Ec2CreateFleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Ec2CreateFleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Ec2CreateFleetInstance
 */
export interface Ec2CreateFleetInstance {
  /**
   * @schema Ec2CreateFleetInstance#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: Ec2LaunchTemplateAndOverridesResponse;

  /**
   * @schema Ec2CreateFleetInstance#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema Ec2CreateFleetInstance#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Ec2CreateFleetInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2CreateFleetInstance#Platform
   */
  readonly platform?: string;

}

/**
 * @schema Ec2StorageLocation
 */
export interface Ec2StorageLocation {
  /**
   * @schema Ec2StorageLocation#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema Ec2StorageLocation#Key
   */
  readonly key?: string;

}

/**
 * @schema Ec2BlockDeviceMapping
 */
export interface Ec2BlockDeviceMapping {
  /**
   * @schema Ec2BlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2BlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema Ec2BlockDeviceMapping#Ebs
   */
  readonly ebs?: Ec2EbsBlockDevice;

  /**
   * @schema Ec2BlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema Ec2ExportToS3TaskSpecification
 */
export interface Ec2ExportToS3TaskSpecification {
  /**
   * @schema Ec2ExportToS3TaskSpecification#ContainerFormat
   */
  readonly containerFormat?: string;

  /**
   * @schema Ec2ExportToS3TaskSpecification#DiskImageFormat
   */
  readonly diskImageFormat?: string;

  /**
   * @schema Ec2ExportToS3TaskSpecification#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema Ec2ExportToS3TaskSpecification#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema Ec2ExportTask
 */
export interface Ec2ExportTask {
  /**
   * @schema Ec2ExportTask#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ExportTask#ExportTaskId
   */
  readonly exportTaskId?: string;

  /**
   * @schema Ec2ExportTask#ExportToS3Task
   */
  readonly exportToS3Task?: Ec2ExportToS3Task;

  /**
   * @schema Ec2ExportTask#InstanceExportDetails
   */
  readonly instanceExportDetails?: Ec2InstanceExportDetails;

  /**
   * @schema Ec2ExportTask#State
   */
  readonly state?: string;

  /**
   * @schema Ec2ExportTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ExportTask#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2InternetGateway
 */
export interface Ec2InternetGateway {
  /**
   * @schema Ec2InternetGateway#Attachments
   */
  readonly attachments?: Ec2InternetGatewayAttachment[];

  /**
   * @schema Ec2InternetGateway#InternetGatewayId
   */
  readonly internetGatewayId?: string;

  /**
   * @schema Ec2InternetGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2InternetGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2RequestLaunchTemplateData
 */
export interface Ec2RequestLaunchTemplateData {
  /**
   * @schema Ec2RequestLaunchTemplateData#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2RequestLaunchTemplateData#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * @schema Ec2RequestLaunchTemplateData#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * @schema Ec2RequestLaunchTemplateData#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#Monitoring
   */
  readonly monitoring?: Ec2LaunchTemplatesMonitoringRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#Placement
   */
  readonly placement?: Ec2LaunchTemplatePlacementRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#RamDiskId
   */
  readonly ramDiskId?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#DisableApiTermination
   */
  readonly disableApiTermination?: boolean;

  /**
   * @schema Ec2RequestLaunchTemplateData#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#UserData
   */
  readonly userData?: string;

  /**
   * @schema Ec2RequestLaunchTemplateData#TagSpecifications
   */
  readonly tagSpecifications?: Ec2LaunchTemplateTagSpecificationRequest[];

  /**
   * @schema Ec2RequestLaunchTemplateData#ElasticGpuSpecifications
   */
  readonly elasticGpuSpecifications?: Ec2ElasticGpuSpecification[];

  /**
   * @schema Ec2RequestLaunchTemplateData#ElasticInferenceAccelerators
   */
  readonly elasticInferenceAccelerators?: Ec2LaunchTemplateElasticInferenceAccelerator[];

  /**
   * @schema Ec2RequestLaunchTemplateData#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2RequestLaunchTemplateData#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema Ec2RequestLaunchTemplateData#InstanceMarketOptions
   */
  readonly instanceMarketOptions?: Ec2LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#CreditSpecification
   */
  readonly creditSpecification?: Ec2CreditSpecificationRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#CpuOptions
   */
  readonly cpuOptions?: Ec2LaunchTemplateCpuOptionsRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: Ec2LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#LicenseSpecifications
   */
  readonly licenseSpecifications?: Ec2LaunchTemplateLicenseConfigurationRequest[];

  /**
   * @schema Ec2RequestLaunchTemplateData#HibernationOptions
   */
  readonly hibernationOptions?: Ec2LaunchTemplateHibernationOptionsRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#MetadataOptions
   */
  readonly metadataOptions?: Ec2LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * @schema Ec2RequestLaunchTemplateData#EnclaveOptions
   */
  readonly enclaveOptions?: Ec2LaunchTemplateEnclaveOptionsRequest;

}

/**
 * @schema Ec2LaunchTemplate
 */
export interface Ec2LaunchTemplate {
  /**
   * @schema Ec2LaunchTemplate#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2LaunchTemplate#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2LaunchTemplate#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2LaunchTemplate#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Ec2LaunchTemplate#DefaultVersionNumber
   */
  readonly defaultVersionNumber?: number;

  /**
   * @schema Ec2LaunchTemplate#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

  /**
   * @schema Ec2LaunchTemplate#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ValidationWarning
 */
export interface Ec2ValidationWarning {
  /**
   * @schema Ec2ValidationWarning#Errors
   */
  readonly errors?: Ec2ValidationError[];

}

/**
 * @schema Ec2LaunchTemplateVersion
 */
export interface Ec2LaunchTemplateVersion {
  /**
   * @schema Ec2LaunchTemplateVersion#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2LaunchTemplateVersion#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2LaunchTemplateVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema Ec2LaunchTemplateVersion#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema Ec2LaunchTemplateVersion#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2LaunchTemplateVersion#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Ec2LaunchTemplateVersion#DefaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema Ec2LaunchTemplateVersion#LaunchTemplateData
   */
  readonly launchTemplateData?: Ec2ResponseLaunchTemplateData;

}

/**
 * @schema Ec2LocalGatewayRoute
 */
export interface Ec2LocalGatewayRoute {
  /**
   * @schema Ec2LocalGatewayRoute#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2LocalGatewayRoute#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId?: string;

  /**
   * @schema Ec2LocalGatewayRoute#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2LocalGatewayRoute#State
   */
  readonly state?: string;

  /**
   * @schema Ec2LocalGatewayRoute#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema Ec2LocalGatewayRoute#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema Ec2LocalGatewayRoute#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Ec2LocalGatewayRouteTableVpcAssociation
 */
export interface Ec2LocalGatewayRouteTableVpcAssociation {
  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#LocalGatewayRouteTableVpcAssociationId
   */
  readonly localGatewayRouteTableVpcAssociationId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#State
   */
  readonly state?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVpcAssociation#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2AddPrefixListEntry
 */
export interface Ec2AddPrefixListEntry {
  /**
   * @schema Ec2AddPrefixListEntry#Cidr
   */
  readonly cidr: string;

  /**
   * @schema Ec2AddPrefixListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2ManagedPrefixList
 */
export interface Ec2ManagedPrefixList {
  /**
   * @schema Ec2ManagedPrefixList#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema Ec2ManagedPrefixList#AddressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema Ec2ManagedPrefixList#State
   */
  readonly state?: string;

  /**
   * @schema Ec2ManagedPrefixList#StateMessage
   */
  readonly stateMessage?: string;

  /**
   * @schema Ec2ManagedPrefixList#PrefixListArn
   */
  readonly prefixListArn?: string;

  /**
   * @schema Ec2ManagedPrefixList#PrefixListName
   */
  readonly prefixListName?: string;

  /**
   * @schema Ec2ManagedPrefixList#MaxEntries
   */
  readonly maxEntries?: number;

  /**
   * @schema Ec2ManagedPrefixList#Version
   */
  readonly version?: number;

  /**
   * @schema Ec2ManagedPrefixList#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2ManagedPrefixList#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Ec2NatGateway
 */
export interface Ec2NatGateway {
  /**
   * @schema Ec2NatGateway#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2NatGateway#DeleteTime
   */
  readonly deleteTime?: string;

  /**
   * @schema Ec2NatGateway#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema Ec2NatGateway#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema Ec2NatGateway#NatGatewayAddresses
   */
  readonly natGatewayAddresses?: Ec2NatGatewayAddress[];

  /**
   * @schema Ec2NatGateway#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema Ec2NatGateway#ProvisionedBandwidth
   */
  readonly provisionedBandwidth?: Ec2ProvisionedBandwidth;

  /**
   * @schema Ec2NatGateway#State
   */
  readonly state?: string;

  /**
   * @schema Ec2NatGateway#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2NatGateway#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2NatGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2NetworkAcl
 */
export interface Ec2NetworkAcl {
  /**
   * @schema Ec2NetworkAcl#Associations
   */
  readonly associations?: Ec2NetworkAclAssociation[];

  /**
   * @schema Ec2NetworkAcl#Entries
   */
  readonly entries?: Ec2NetworkAclEntry[];

  /**
   * @schema Ec2NetworkAcl#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema Ec2NetworkAcl#NetworkAclId
   */
  readonly networkAclId?: string;

  /**
   * @schema Ec2NetworkAcl#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2NetworkAcl#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2NetworkAcl#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Ec2IcmpTypeCode
 */
export interface Ec2IcmpTypeCode {
  /**
   * @schema Ec2IcmpTypeCode#Code
   */
  readonly code?: number;

  /**
   * @schema Ec2IcmpTypeCode#Type
   */
  readonly type?: number;

}

/**
 * @schema Ec2PortRange
 */
export interface Ec2PortRange {
  /**
   * @schema Ec2PortRange#From
   */
  readonly from?: number;

  /**
   * @schema Ec2PortRange#To
   */
  readonly to?: number;

}

/**
 * @schema Ec2InstanceIpv6Address
 */
export interface Ec2InstanceIpv6Address {
  /**
   * @schema Ec2InstanceIpv6Address#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema Ec2PrivateIpAddressSpecification
 */
export interface Ec2PrivateIpAddressSpecification {
  /**
   * @schema Ec2PrivateIpAddressSpecification#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema Ec2PrivateIpAddressSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema Ec2NetworkInterface
 */
export interface Ec2NetworkInterface {
  /**
   * @schema Ec2NetworkInterface#Association
   */
  readonly association?: Ec2NetworkInterfaceAssociation;

  /**
   * @schema Ec2NetworkInterface#Attachment
   */
  readonly attachment?: Ec2NetworkInterfaceAttachment;

  /**
   * @schema Ec2NetworkInterface#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2NetworkInterface#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2NetworkInterface#Groups
   */
  readonly groups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2NetworkInterface#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema Ec2NetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2NetworkInterfaceIpv6Address[];

  /**
   * @schema Ec2NetworkInterface#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema Ec2NetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2NetworkInterface#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2NetworkInterface#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2NetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2NetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2NetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: Ec2NetworkInterfacePrivateIpAddress[];

  /**
   * @schema Ec2NetworkInterface#RequesterId
   */
  readonly requesterId?: string;

  /**
   * @schema Ec2NetworkInterface#RequesterManaged
   */
  readonly requesterManaged?: boolean;

  /**
   * @schema Ec2NetworkInterface#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema Ec2NetworkInterface#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2NetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2NetworkInterface#TagSet
   */
  readonly tagSet?: Ec2Tag[];

  /**
   * @schema Ec2NetworkInterface#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2NetworkInterfacePermission
 */
export interface Ec2NetworkInterfacePermission {
  /**
   * @schema Ec2NetworkInterfacePermission#NetworkInterfacePermissionId
   */
  readonly networkInterfacePermissionId?: string;

  /**
   * @schema Ec2NetworkInterfacePermission#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2NetworkInterfacePermission#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema Ec2NetworkInterfacePermission#AwsService
   */
  readonly awsService?: string;

  /**
   * @schema Ec2NetworkInterfacePermission#Permission
   */
  readonly permission?: string;

  /**
   * @schema Ec2NetworkInterfacePermission#PermissionState
   */
  readonly permissionState?: Ec2NetworkInterfacePermissionState;

}

/**
 * @schema Ec2PlacementGroup
 */
export interface Ec2PlacementGroup {
  /**
   * @schema Ec2PlacementGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2PlacementGroup#State
   */
  readonly state?: string;

  /**
   * @schema Ec2PlacementGroup#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema Ec2PlacementGroup#PartitionCount
   */
  readonly partitionCount?: number;

  /**
   * @schema Ec2PlacementGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2PlacementGroup#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2PriceScheduleSpecification
 */
export interface Ec2PriceScheduleSpecification {
  /**
   * @schema Ec2PriceScheduleSpecification#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2PriceScheduleSpecification#Price
   */
  readonly price?: number;

  /**
   * @schema Ec2PriceScheduleSpecification#Term
   */
  readonly term?: number;

}

/**
 * @schema Ec2RouteTable
 */
export interface Ec2RouteTable {
  /**
   * @schema Ec2RouteTable#Associations
   */
  readonly associations?: Ec2RouteTableAssociation[];

  /**
   * @schema Ec2RouteTable#PropagatingVgws
   */
  readonly propagatingVgws?: Ec2PropagatingVgw[];

  /**
   * @schema Ec2RouteTable#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema Ec2RouteTable#Routes
   */
  readonly routes?: Ec2Route[];

  /**
   * @schema Ec2RouteTable#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2RouteTable#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2RouteTable#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Ec2InstanceSpecification
 */
export interface Ec2InstanceSpecification {
  /**
   * @schema Ec2InstanceSpecification#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceSpecification#ExcludeBootVolume
   */
  readonly excludeBootVolume?: boolean;

}

/**
 * @schema Ec2SnapshotInfo
 */
export interface Ec2SnapshotInfo {
  /**
   * @schema Ec2SnapshotInfo#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2SnapshotInfo#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2SnapshotInfo#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2SnapshotInfo#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Ec2SnapshotInfo#State
   */
  readonly state?: string;

  /**
   * @schema Ec2SnapshotInfo#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ec2SnapshotInfo#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Ec2SnapshotInfo#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2SnapshotInfo#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2SnapshotInfo#SnapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema Ec2SpotDatafeedSubscription
 */
export interface Ec2SpotDatafeedSubscription {
  /**
   * @schema Ec2SpotDatafeedSubscription#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema Ec2SpotDatafeedSubscription#Fault
   */
  readonly fault?: Ec2SpotInstanceStateFault;

  /**
   * @schema Ec2SpotDatafeedSubscription#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2SpotDatafeedSubscription#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema Ec2SpotDatafeedSubscription#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2TrafficMirrorFilter
 */
export interface Ec2TrafficMirrorFilter {
  /**
   * @schema Ec2TrafficMirrorFilter#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema Ec2TrafficMirrorFilter#IngressFilterRules
   */
  readonly ingressFilterRules?: Ec2TrafficMirrorFilterRule[];

  /**
   * @schema Ec2TrafficMirrorFilter#EgressFilterRules
   */
  readonly egressFilterRules?: Ec2TrafficMirrorFilterRule[];

  /**
   * @schema Ec2TrafficMirrorFilter#NetworkServices
   */
  readonly networkServices?: string[];

  /**
   * @schema Ec2TrafficMirrorFilter#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2TrafficMirrorFilter#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2TrafficMirrorPortRangeRequest
 */
export interface Ec2TrafficMirrorPortRangeRequest {
  /**
   * @schema Ec2TrafficMirrorPortRangeRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2TrafficMirrorPortRangeRequest#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema Ec2TrafficMirrorFilterRule
 */
export interface Ec2TrafficMirrorFilterRule {
  /**
   * @schema Ec2TrafficMirrorFilterRule#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId?: string;

  /**
   * @schema Ec2TrafficMirrorFilterRule#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema Ec2TrafficMirrorFilterRule#TrafficDirection
   */
  readonly trafficDirection?: string;

  /**
   * @schema Ec2TrafficMirrorFilterRule#RuleNumber
   */
  readonly ruleNumber?: number;

  /**
   * @schema Ec2TrafficMirrorFilterRule#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema Ec2TrafficMirrorFilterRule#Protocol
   */
  readonly protocol?: number;

  /**
   * @schema Ec2TrafficMirrorFilterRule#DestinationPortRange
   */
  readonly destinationPortRange?: Ec2TrafficMirrorPortRange;

  /**
   * @schema Ec2TrafficMirrorFilterRule#SourcePortRange
   */
  readonly sourcePortRange?: Ec2TrafficMirrorPortRange;

  /**
   * @schema Ec2TrafficMirrorFilterRule#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2TrafficMirrorFilterRule#SourceCidrBlock
   */
  readonly sourceCidrBlock?: string;

  /**
   * @schema Ec2TrafficMirrorFilterRule#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2TrafficMirrorSession
 */
export interface Ec2TrafficMirrorSession {
  /**
   * @schema Ec2TrafficMirrorSession#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId?: string;

  /**
   * @schema Ec2TrafficMirrorSession#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

  /**
   * @schema Ec2TrafficMirrorSession#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema Ec2TrafficMirrorSession#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2TrafficMirrorSession#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2TrafficMirrorSession#PacketLength
   */
  readonly packetLength?: number;

  /**
   * @schema Ec2TrafficMirrorSession#SessionNumber
   */
  readonly sessionNumber?: number;

  /**
   * @schema Ec2TrafficMirrorSession#VirtualNetworkId
   */
  readonly virtualNetworkId?: number;

  /**
   * @schema Ec2TrafficMirrorSession#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2TrafficMirrorSession#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2TrafficMirrorTarget
 */
export interface Ec2TrafficMirrorTarget {
  /**
   * @schema Ec2TrafficMirrorTarget#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

  /**
   * @schema Ec2TrafficMirrorTarget#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2TrafficMirrorTarget#NetworkLoadBalancerArn
   */
  readonly networkLoadBalancerArn?: string;

  /**
   * @schema Ec2TrafficMirrorTarget#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2TrafficMirrorTarget#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2TrafficMirrorTarget#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2TrafficMirrorTarget#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2TransitGatewayRequestOptions
 */
export interface Ec2TransitGatewayRequestOptions {
  /**
   * @schema Ec2TransitGatewayRequestOptions#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema Ec2TransitGatewayRequestOptions#AutoAcceptSharedAttachments
   */
  readonly autoAcceptSharedAttachments?: string;

  /**
   * @schema Ec2TransitGatewayRequestOptions#DefaultRouteTableAssociation
   */
  readonly defaultRouteTableAssociation?: string;

  /**
   * @schema Ec2TransitGatewayRequestOptions#DefaultRouteTablePropagation
   */
  readonly defaultRouteTablePropagation?: string;

  /**
   * @schema Ec2TransitGatewayRequestOptions#VpnEcmpSupport
   */
  readonly vpnEcmpSupport?: string;

  /**
   * @schema Ec2TransitGatewayRequestOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema Ec2TransitGatewayRequestOptions#MulticastSupport
   */
  readonly multicastSupport?: string;

}

/**
 * @schema Ec2TransitGateway
 */
export interface Ec2TransitGateway {
  /**
   * @schema Ec2TransitGateway#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2TransitGateway#TransitGatewayArn
   */
  readonly transitGatewayArn?: string;

  /**
   * @schema Ec2TransitGateway#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2TransitGateway#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2TransitGateway#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2TransitGateway#Options
   */
  readonly options?: Ec2TransitGatewayOptions;

  /**
   * @schema Ec2TransitGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2TransitGatewayMulticastDomain
 */
export interface Ec2TransitGatewayMulticastDomain {
  /**
   * @schema Ec2TransitGatewayMulticastDomain#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomain#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomain#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomain#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomain#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2TransitGatewayPrefixListReference
 */
export interface Ec2TransitGatewayPrefixListReference {
  /**
   * @schema Ec2TransitGatewayPrefixListReference#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayPrefixListReference#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema Ec2TransitGatewayPrefixListReference#PrefixListOwnerId
   */
  readonly prefixListOwnerId?: string;

  /**
   * @schema Ec2TransitGatewayPrefixListReference#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGatewayPrefixListReference#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema Ec2TransitGatewayPrefixListReference#TransitGatewayAttachment
   */
  readonly transitGatewayAttachment?: Ec2TransitGatewayPrefixListAttachment;

}

/**
 * @schema Ec2TransitGatewayRoute
 */
export interface Ec2TransitGatewayRoute {
  /**
   * @schema Ec2TransitGatewayRoute#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2TransitGatewayRoute#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema Ec2TransitGatewayRoute#TransitGatewayAttachments
   */
  readonly transitGatewayAttachments?: Ec2TransitGatewayRouteAttachment[];

  /**
   * @schema Ec2TransitGatewayRoute#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2TransitGatewayRoute#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2TransitGatewayRouteTable
 */
export interface Ec2TransitGatewayRouteTable {
  /**
   * @schema Ec2TransitGatewayRouteTable#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayRouteTable#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2TransitGatewayRouteTable#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGatewayRouteTable#DefaultAssociationRouteTable
   */
  readonly defaultAssociationRouteTable?: boolean;

  /**
   * @schema Ec2TransitGatewayRouteTable#DefaultPropagationRouteTable
   */
  readonly defaultPropagationRouteTable?: boolean;

  /**
   * @schema Ec2TransitGatewayRouteTable#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2TransitGatewayRouteTable#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2CreateTransitGatewayVpcAttachmentRequestOptions
 */
export interface Ec2CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequestOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequestOptions#Ipv6Support
   */
  readonly ipv6Support?: string;

  /**
   * @schema Ec2CreateTransitGatewayVpcAttachmentRequestOptions#ApplianceModeSupport
   */
  readonly applianceModeSupport?: string;

}

/**
 * @schema Ec2VpcEndpoint
 */
export interface Ec2VpcEndpoint {
  /**
   * @schema Ec2VpcEndpoint#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema Ec2VpcEndpoint#VpcEndpointType
   */
  readonly vpcEndpointType?: string;

  /**
   * @schema Ec2VpcEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2VpcEndpoint#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema Ec2VpcEndpoint#State
   */
  readonly state?: string;

  /**
   * @schema Ec2VpcEndpoint#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema Ec2VpcEndpoint#RouteTableIds
   */
  readonly routeTableIds?: string[];

  /**
   * @schema Ec2VpcEndpoint#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema Ec2VpcEndpoint#Groups
   */
  readonly groups?: Ec2SecurityGroupIdentifier[];

  /**
   * @schema Ec2VpcEndpoint#PrivateDnsEnabled
   */
  readonly privateDnsEnabled?: boolean;

  /**
   * @schema Ec2VpcEndpoint#RequesterManaged
   */
  readonly requesterManaged?: boolean;

  /**
   * @schema Ec2VpcEndpoint#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema Ec2VpcEndpoint#DnsEntries
   */
  readonly dnsEntries?: Ec2DnsEntry[];

  /**
   * @schema Ec2VpcEndpoint#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema Ec2VpcEndpoint#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2VpcEndpoint#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2VpcEndpoint#LastError
   */
  readonly lastError?: Ec2LastError;

}

/**
 * @schema Ec2ConnectionNotification
 */
export interface Ec2ConnectionNotification {
  /**
   * @schema Ec2ConnectionNotification#ConnectionNotificationId
   */
  readonly connectionNotificationId?: string;

  /**
   * @schema Ec2ConnectionNotification#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema Ec2ConnectionNotification#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema Ec2ConnectionNotification#ConnectionNotificationType
   */
  readonly connectionNotificationType?: string;

  /**
   * @schema Ec2ConnectionNotification#ConnectionNotificationArn
   */
  readonly connectionNotificationArn?: string;

  /**
   * @schema Ec2ConnectionNotification#ConnectionEvents
   */
  readonly connectionEvents?: string[];

  /**
   * @schema Ec2ConnectionNotification#ConnectionNotificationState
   */
  readonly connectionNotificationState?: string;

}

/**
 * @schema Ec2ServiceConfiguration
 */
export interface Ec2ServiceConfiguration {
  /**
   * @schema Ec2ServiceConfiguration#ServiceType
   */
  readonly serviceType?: Ec2ServiceTypeDetail[];

  /**
   * @schema Ec2ServiceConfiguration#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema Ec2ServiceConfiguration#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema Ec2ServiceConfiguration#ServiceState
   */
  readonly serviceState?: string;

  /**
   * @schema Ec2ServiceConfiguration#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema Ec2ServiceConfiguration#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema Ec2ServiceConfiguration#ManagesVpcEndpoints
   */
  readonly managesVpcEndpoints?: boolean;

  /**
   * @schema Ec2ServiceConfiguration#NetworkLoadBalancerArns
   */
  readonly networkLoadBalancerArns?: string[];

  /**
   * @schema Ec2ServiceConfiguration#GatewayLoadBalancerArns
   */
  readonly gatewayLoadBalancerArns?: string[];

  /**
   * @schema Ec2ServiceConfiguration#BaseEndpointDnsNames
   */
  readonly baseEndpointDnsNames?: string[];

  /**
   * @schema Ec2ServiceConfiguration#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2ServiceConfiguration#PrivateDnsNameConfiguration
   */
  readonly privateDnsNameConfiguration?: Ec2PrivateDnsNameConfiguration;

  /**
   * @schema Ec2ServiceConfiguration#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2VpnConnectionOptionsSpecification
 */
export interface Ec2VpnConnectionOptionsSpecification {
  /**
   * @schema Ec2VpnConnectionOptionsSpecification#EnableAcceleration
   */
  readonly enableAcceleration?: boolean;

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#StaticRoutesOnly
   */
  readonly staticRoutesOnly?: boolean;

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#TunnelInsideIpVersion
   */
  readonly tunnelInsideIpVersion?: string;

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#TunnelOptions
   */
  readonly tunnelOptions?: Ec2VpnTunnelOptionsSpecification[];

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#LocalIpv4NetworkCidr
   */
  readonly localIpv4NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#RemoteIpv4NetworkCidr
   */
  readonly remoteIpv4NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#LocalIpv6NetworkCidr
   */
  readonly localIpv6NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptionsSpecification#RemoteIpv6NetworkCidr
   */
  readonly remoteIpv6NetworkCidr?: string;

}

/**
 * @schema Ec2VpnConnection
 */
export interface Ec2VpnConnection {
  /**
   * @schema Ec2VpnConnection#CustomerGatewayConfiguration
   */
  readonly customerGatewayConfiguration?: string;

  /**
   * @schema Ec2VpnConnection#CustomerGatewayId
   */
  readonly customerGatewayId?: string;

  /**
   * @schema Ec2VpnConnection#Category
   */
  readonly category?: string;

  /**
   * @schema Ec2VpnConnection#State
   */
  readonly state?: string;

  /**
   * @schema Ec2VpnConnection#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2VpnConnection#VpnConnectionId
   */
  readonly vpnConnectionId?: string;

  /**
   * @schema Ec2VpnConnection#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema Ec2VpnConnection#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2VpnConnection#Options
   */
  readonly options?: Ec2VpnConnectionOptions;

  /**
   * @schema Ec2VpnConnection#Routes
   */
  readonly routes?: Ec2VpnStaticRoute[];

  /**
   * @schema Ec2VpnConnection#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2VpnConnection#VgwTelemetry
   */
  readonly vgwTelemetry?: Ec2VgwTelemetry[];

}

/**
 * @schema Ec2VpnGateway
 */
export interface Ec2VpnGateway {
  /**
   * @schema Ec2VpnGateway#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2VpnGateway#State
   */
  readonly state?: string;

  /**
   * @schema Ec2VpnGateway#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2VpnGateway#VpcAttachments
   */
  readonly vpcAttachments?: Ec2VpcAttachment[];

  /**
   * @schema Ec2VpnGateway#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema Ec2VpnGateway#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema Ec2VpnGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2DeleteFleetSuccessItem
 */
export interface Ec2DeleteFleetSuccessItem {
  /**
   * @schema Ec2DeleteFleetSuccessItem#CurrentFleetState
   */
  readonly currentFleetState?: string;

  /**
   * @schema Ec2DeleteFleetSuccessItem#PreviousFleetState
   */
  readonly previousFleetState?: string;

  /**
   * @schema Ec2DeleteFleetSuccessItem#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema Ec2DeleteFleetErrorItem
 */
export interface Ec2DeleteFleetErrorItem {
  /**
   * @schema Ec2DeleteFleetErrorItem#Error
   */
  readonly error?: Ec2DeleteFleetError;

  /**
   * @schema Ec2DeleteFleetErrorItem#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema Ec2DeleteLaunchTemplateVersionsResponseSuccessItem
 */
export interface Ec2DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseSuccessItem#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseSuccessItem#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseSuccessItem#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema Ec2DeleteLaunchTemplateVersionsResponseErrorItem
 */
export interface Ec2DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseErrorItem#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseErrorItem#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseErrorItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema Ec2DeleteLaunchTemplateVersionsResponseErrorItem#ResponseError
   */
  readonly responseError?: Ec2ResponseError;

}

/**
 * @schema Ec2SuccessfulQueuedPurchaseDeletion
 */
export interface Ec2SuccessfulQueuedPurchaseDeletion {
  /**
   * @schema Ec2SuccessfulQueuedPurchaseDeletion#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema Ec2FailedQueuedPurchaseDeletion
 */
export interface Ec2FailedQueuedPurchaseDeletion {
  /**
   * @schema Ec2FailedQueuedPurchaseDeletion#Error
   */
  readonly error?: Ec2DeleteQueuedReservedInstancesError;

  /**
   * @schema Ec2FailedQueuedPurchaseDeletion#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema Ec2DeregisterInstanceTagAttributeRequest
 */
export interface Ec2DeregisterInstanceTagAttributeRequest {
  /**
   * @schema Ec2DeregisterInstanceTagAttributeRequest#IncludeAllTagsOfInstance
   */
  readonly includeAllTagsOfInstance?: boolean;

  /**
   * @schema Ec2DeregisterInstanceTagAttributeRequest#InstanceTagKeys
   */
  readonly instanceTagKeys?: string[];

}

/**
 * @schema Ec2InstanceTagNotificationAttribute
 */
export interface Ec2InstanceTagNotificationAttribute {
  /**
   * @schema Ec2InstanceTagNotificationAttribute#InstanceTagKeys
   */
  readonly instanceTagKeys?: string[];

  /**
   * @schema Ec2InstanceTagNotificationAttribute#IncludeAllTagsOfInstance
   */
  readonly includeAllTagsOfInstance?: boolean;

}

/**
 * @schema Ec2TransitGatewayMulticastDeregisteredGroupMembers
 */
export interface Ec2TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * @schema Ec2TransitGatewayMulticastDeregisteredGroupMembers#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDeregisteredGroupMembers#DeregisteredNetworkInterfaceIds
   */
  readonly deregisteredNetworkInterfaceIds?: string[];

  /**
   * @schema Ec2TransitGatewayMulticastDeregisteredGroupMembers#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema Ec2TransitGatewayMulticastDeregisteredGroupSources
 */
export interface Ec2TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * @schema Ec2TransitGatewayMulticastDeregisteredGroupSources#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDeregisteredGroupSources#DeregisteredNetworkInterfaceIds
   */
  readonly deregisteredNetworkInterfaceIds?: string[];

  /**
   * @schema Ec2TransitGatewayMulticastDeregisteredGroupSources#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema Ec2AccountAttribute
 */
export interface Ec2AccountAttribute {
  /**
   * @schema Ec2AccountAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema Ec2AccountAttribute#AttributeValues
   */
  readonly attributeValues?: Ec2AccountAttributeValue[];

}

/**
 * @schema Ec2Filter
 */
export interface Ec2Filter {
  /**
   * @schema Ec2Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema Ec2Address
 */
export interface Ec2Address {
  /**
   * @schema Ec2Address#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2Address#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2Address#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2Address#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2Address#Domain
   */
  readonly domain?: string;

  /**
   * @schema Ec2Address#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2Address#NetworkInterfaceOwnerId
   */
  readonly networkInterfaceOwnerId?: string;

  /**
   * @schema Ec2Address#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2Address#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2Address#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema Ec2Address#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2Address#CustomerOwnedIp
   */
  readonly customerOwnedIp?: string;

  /**
   * @schema Ec2Address#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema Ec2Address#CarrierIp
   */
  readonly carrierIp?: string;

}

/**
 * @schema Ec2IdFormat
 */
export interface Ec2IdFormat {
  /**
   * @schema Ec2IdFormat#Deadline
   */
  readonly deadline?: string;

  /**
   * @schema Ec2IdFormat#Resource
   */
  readonly resource?: string;

  /**
   * @schema Ec2IdFormat#UseLongIds
   */
  readonly useLongIds?: boolean;

}

/**
 * @schema Ec2AvailabilityZone
 */
export interface Ec2AvailabilityZone {
  /**
   * @schema Ec2AvailabilityZone#State
   */
  readonly state?: string;

  /**
   * @schema Ec2AvailabilityZone#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema Ec2AvailabilityZone#Messages
   */
  readonly messages?: Ec2AvailabilityZoneMessage[];

  /**
   * @schema Ec2AvailabilityZone#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema Ec2AvailabilityZone#ZoneName
   */
  readonly zoneName?: string;

  /**
   * @schema Ec2AvailabilityZone#ZoneId
   */
  readonly zoneId?: string;

  /**
   * @schema Ec2AvailabilityZone#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2AvailabilityZone#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2AvailabilityZone#ZoneType
   */
  readonly zoneType?: string;

  /**
   * @schema Ec2AvailabilityZone#ParentZoneName
   */
  readonly parentZoneName?: string;

  /**
   * @schema Ec2AvailabilityZone#ParentZoneId
   */
  readonly parentZoneId?: string;

}

/**
 * @schema Ec2ClassicLinkInstance
 */
export interface Ec2ClassicLinkInstance {
  /**
   * @schema Ec2ClassicLinkInstance#Groups
   */
  readonly groups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2ClassicLinkInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2ClassicLinkInstance#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2ClassicLinkInstance#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2AuthorizationRule
 */
export interface Ec2AuthorizationRule {
  /**
   * @schema Ec2AuthorizationRule#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2AuthorizationRule#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2AuthorizationRule#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2AuthorizationRule#AccessAll
   */
  readonly accessAll?: boolean;

  /**
   * @schema Ec2AuthorizationRule#DestinationCidr
   */
  readonly destinationCidr?: string;

  /**
   * @schema Ec2AuthorizationRule#Status
   */
  readonly status?: Ec2ClientVpnAuthorizationRuleStatus;

}

/**
 * @schema Ec2ClientVpnConnection
 */
export interface Ec2ClientVpnConnection {
  /**
   * @schema Ec2ClientVpnConnection#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2ClientVpnConnection#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema Ec2ClientVpnConnection#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema Ec2ClientVpnConnection#Username
   */
  readonly username?: string;

  /**
   * @schema Ec2ClientVpnConnection#ConnectionEstablishedTime
   */
  readonly connectionEstablishedTime?: string;

  /**
   * @schema Ec2ClientVpnConnection#IngressBytes
   */
  readonly ingressBytes?: string;

  /**
   * @schema Ec2ClientVpnConnection#EgressBytes
   */
  readonly egressBytes?: string;

  /**
   * @schema Ec2ClientVpnConnection#IngressPackets
   */
  readonly ingressPackets?: string;

  /**
   * @schema Ec2ClientVpnConnection#EgressPackets
   */
  readonly egressPackets?: string;

  /**
   * @schema Ec2ClientVpnConnection#ClientIp
   */
  readonly clientIp?: string;

  /**
   * @schema Ec2ClientVpnConnection#CommonName
   */
  readonly commonName?: string;

  /**
   * @schema Ec2ClientVpnConnection#Status
   */
  readonly status?: Ec2ClientVpnConnectionStatus;

  /**
   * @schema Ec2ClientVpnConnection#ConnectionEndTime
   */
  readonly connectionEndTime?: string;

  /**
   * @schema Ec2ClientVpnConnection#PostureComplianceStatuses
   */
  readonly postureComplianceStatuses?: string[];

}

/**
 * @schema Ec2ClientVpnEndpoint
 */
export interface Ec2ClientVpnEndpoint {
  /**
   * @schema Ec2ClientVpnEndpoint#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#Status
   */
  readonly status?: Ec2ClientVpnEndpointStatus;

  /**
   * @schema Ec2ClientVpnEndpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#ClientCidrBlock
   */
  readonly clientCidrBlock?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#DnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema Ec2ClientVpnEndpoint#SplitTunnel
   */
  readonly splitTunnel?: boolean;

  /**
   * @schema Ec2ClientVpnEndpoint#VpnProtocol
   */
  readonly vpnProtocol?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#TransportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#VpnPort
   */
  readonly vpnPort?: number;

  /**
   * @schema Ec2ClientVpnEndpoint#AssociatedTargetNetworks
   */
  readonly associatedTargetNetworks?: Ec2AssociatedTargetNetwork[];

  /**
   * @schema Ec2ClientVpnEndpoint#ServerCertificateArn
   */
  readonly serverCertificateArn?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#AuthenticationOptions
   */
  readonly authenticationOptions?: Ec2ClientVpnAuthentication[];

  /**
   * @schema Ec2ClientVpnEndpoint#ConnectionLogOptions
   */
  readonly connectionLogOptions?: Ec2ConnectionLogResponseOptions;

  /**
   * @schema Ec2ClientVpnEndpoint#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2ClientVpnEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2ClientVpnEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#SelfServicePortalUrl
   */
  readonly selfServicePortalUrl?: string;

  /**
   * @schema Ec2ClientVpnEndpoint#ClientConnectOptions
   */
  readonly clientConnectOptions?: Ec2ClientConnectResponseOptions;

}

/**
 * @schema Ec2ClientVpnRoute
 */
export interface Ec2ClientVpnRoute {
  /**
   * @schema Ec2ClientVpnRoute#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2ClientVpnRoute#DestinationCidr
   */
  readonly destinationCidr?: string;

  /**
   * @schema Ec2ClientVpnRoute#TargetSubnet
   */
  readonly targetSubnet?: string;

  /**
   * @schema Ec2ClientVpnRoute#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2ClientVpnRoute#Origin
   */
  readonly origin?: string;

  /**
   * @schema Ec2ClientVpnRoute#Status
   */
  readonly status?: Ec2ClientVpnRouteStatus;

  /**
   * @schema Ec2ClientVpnRoute#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2TargetNetwork
 */
export interface Ec2TargetNetwork {
  /**
   * @schema Ec2TargetNetwork#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2TargetNetwork#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2TargetNetwork#TargetNetworkId
   */
  readonly targetNetworkId?: string;

  /**
   * @schema Ec2TargetNetwork#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema Ec2TargetNetwork#Status
   */
  readonly status?: Ec2AssociationStatus;

  /**
   * @schema Ec2TargetNetwork#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema Ec2CoipPool
 */
export interface Ec2CoipPool {
  /**
   * @schema Ec2CoipPool#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema Ec2CoipPool#PoolCidrs
   */
  readonly poolCidrs?: string[];

  /**
   * @schema Ec2CoipPool#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema Ec2CoipPool#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2CoipPool#PoolArn
   */
  readonly poolArn?: string;

}

/**
 * @schema Ec2ConversionTask
 */
export interface Ec2ConversionTask {
  /**
   * @schema Ec2ConversionTask#ConversionTaskId
   */
  readonly conversionTaskId?: string;

  /**
   * @schema Ec2ConversionTask#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema Ec2ConversionTask#ImportInstance
   */
  readonly importInstance?: Ec2ImportInstanceTaskDetails;

  /**
   * @schema Ec2ConversionTask#ImportVolume
   */
  readonly importVolume?: Ec2ImportVolumeTaskDetails;

  /**
   * @schema Ec2ConversionTask#State
   */
  readonly state?: string;

  /**
   * @schema Ec2ConversionTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ConversionTask#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ElasticGpus
 */
export interface Ec2ElasticGpus {
  /**
   * @schema Ec2ElasticGpus#ElasticGpuId
   */
  readonly elasticGpuId?: string;

  /**
   * @schema Ec2ElasticGpus#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ElasticGpus#ElasticGpuType
   */
  readonly elasticGpuType?: string;

  /**
   * @schema Ec2ElasticGpus#ElasticGpuHealth
   */
  readonly elasticGpuHealth?: Ec2ElasticGpuHealth;

  /**
   * @schema Ec2ElasticGpus#ElasticGpuState
   */
  readonly elasticGpuState?: string;

  /**
   * @schema Ec2ElasticGpus#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2ElasticGpus#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ExportImageTask
 */
export interface Ec2ExportImageTask {
  /**
   * @schema Ec2ExportImageTask#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ExportImageTask#ExportImageTaskId
   */
  readonly exportImageTaskId?: string;

  /**
   * @schema Ec2ExportImageTask#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2ExportImageTask#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2ExportImageTask#S3ExportLocation
   */
  readonly s3ExportLocation?: Ec2ExportTaskS3Location;

  /**
   * @schema Ec2ExportImageTask#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ExportImageTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ExportImageTask#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2DescribeFastSnapshotRestoreSuccessItem
 */
export interface Ec2DescribeFastSnapshotRestoreSuccessItem {
  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#State
   */
  readonly state?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#EnablingTime
   */
  readonly enablingTime?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#OptimizingTime
   */
  readonly optimizingTime?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#EnabledTime
   */
  readonly enabledTime?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#DisablingTime
   */
  readonly disablingTime?: string;

  /**
   * @schema Ec2DescribeFastSnapshotRestoreSuccessItem#DisabledTime
   */
  readonly disabledTime?: string;

}

/**
 * @schema Ec2HistoryRecordEntry
 */
export interface Ec2HistoryRecordEntry {
  /**
   * @schema Ec2HistoryRecordEntry#EventInformation
   */
  readonly eventInformation?: Ec2EventInformation;

  /**
   * @schema Ec2HistoryRecordEntry#EventType
   */
  readonly eventType?: string;

  /**
   * @schema Ec2HistoryRecordEntry#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Ec2ActiveInstance
 */
export interface Ec2ActiveInstance {
  /**
   * @schema Ec2ActiveInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2ActiveInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ActiveInstance#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema Ec2ActiveInstance#InstanceHealth
   */
  readonly instanceHealth?: string;

}

/**
 * @schema Ec2FleetData
 */
export interface Ec2FleetData {
  /**
   * @schema Ec2FleetData#ActivityStatus
   */
  readonly activityStatus?: string;

  /**
   * @schema Ec2FleetData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2FleetData#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema Ec2FleetData#FleetState
   */
  readonly fleetState?: string;

  /**
   * @schema Ec2FleetData#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2FleetData#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema Ec2FleetData#FulfilledCapacity
   */
  readonly fulfilledCapacity?: number;

  /**
   * @schema Ec2FleetData#FulfilledOnDemandCapacity
   */
  readonly fulfilledOnDemandCapacity?: number;

  /**
   * @schema Ec2FleetData#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: Ec2FleetLaunchTemplateConfig[];

  /**
   * @schema Ec2FleetData#TargetCapacitySpecification
   */
  readonly targetCapacitySpecification?: Ec2TargetCapacitySpecification;

  /**
   * @schema Ec2FleetData#TerminateInstancesWithExpiration
   */
  readonly terminateInstancesWithExpiration?: boolean;

  /**
   * @schema Ec2FleetData#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2FleetData#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Ec2FleetData#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2FleetData#ReplaceUnhealthyInstances
   */
  readonly replaceUnhealthyInstances?: boolean;

  /**
   * @schema Ec2FleetData#SpotOptions
   */
  readonly spotOptions?: Ec2SpotOptions;

  /**
   * @schema Ec2FleetData#OnDemandOptions
   */
  readonly onDemandOptions?: Ec2OnDemandOptions;

  /**
   * @schema Ec2FleetData#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2FleetData#Errors
   */
  readonly errors?: Ec2DescribeFleetError[];

  /**
   * @schema Ec2FleetData#Instances
   */
  readonly instances?: Ec2DescribeFleetsInstances[];

}

/**
 * @schema Ec2FlowLog
 */
export interface Ec2FlowLog {
  /**
   * @schema Ec2FlowLog#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2FlowLog#DeliverLogsErrorMessage
   */
  readonly deliverLogsErrorMessage?: string;

  /**
   * @schema Ec2FlowLog#DeliverLogsPermissionArn
   */
  readonly deliverLogsPermissionArn?: string;

  /**
   * @schema Ec2FlowLog#DeliverLogsStatus
   */
  readonly deliverLogsStatus?: string;

  /**
   * @schema Ec2FlowLog#FlowLogId
   */
  readonly flowLogId?: string;

  /**
   * @schema Ec2FlowLog#FlowLogStatus
   */
  readonly flowLogStatus?: string;

  /**
   * @schema Ec2FlowLog#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema Ec2FlowLog#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2FlowLog#TrafficType
   */
  readonly trafficType?: string;

  /**
   * @schema Ec2FlowLog#LogDestinationType
   */
  readonly logDestinationType?: string;

  /**
   * @schema Ec2FlowLog#LogDestination
   */
  readonly logDestination?: string;

  /**
   * @schema Ec2FlowLog#LogFormat
   */
  readonly logFormat?: string;

  /**
   * @schema Ec2FlowLog#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2FlowLog#MaxAggregationInterval
   */
  readonly maxAggregationInterval?: number;

}

/**
 * @schema Ec2FpgaImageAttribute
 */
export interface Ec2FpgaImageAttribute {
  /**
   * @schema Ec2FpgaImageAttribute#FpgaImageId
   */
  readonly fpgaImageId?: string;

  /**
   * @schema Ec2FpgaImageAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2FpgaImageAttribute#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2FpgaImageAttribute#LoadPermissions
   */
  readonly loadPermissions?: Ec2LoadPermission[];

  /**
   * @schema Ec2FpgaImageAttribute#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

}

/**
 * @schema Ec2FpgaImage
 */
export interface Ec2FpgaImage {
  /**
   * @schema Ec2FpgaImage#FpgaImageId
   */
  readonly fpgaImageId?: string;

  /**
   * @schema Ec2FpgaImage#FpgaImageGlobalId
   */
  readonly fpgaImageGlobalId?: string;

  /**
   * @schema Ec2FpgaImage#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2FpgaImage#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2FpgaImage#ShellVersion
   */
  readonly shellVersion?: string;

  /**
   * @schema Ec2FpgaImage#PciId
   */
  readonly pciId?: Ec2PciId;

  /**
   * @schema Ec2FpgaImage#State
   */
  readonly state?: Ec2FpgaImageState;

  /**
   * @schema Ec2FpgaImage#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2FpgaImage#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema Ec2FpgaImage#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2FpgaImage#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema Ec2FpgaImage#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2FpgaImage#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2FpgaImage#Public
   */
  readonly public?: boolean;

  /**
   * @schema Ec2FpgaImage#DataRetentionSupport
   */
  readonly dataRetentionSupport?: boolean;

}

/**
 * @schema Ec2HostOffering
 */
export interface Ec2HostOffering {
  /**
   * @schema Ec2HostOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2HostOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema Ec2HostOffering#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Ec2HostOffering#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Ec2HostOffering#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema Ec2HostOffering#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema Ec2HostOffering#UpfrontPrice
   */
  readonly upfrontPrice?: string;

}

/**
 * @schema Ec2HostReservation
 */
export interface Ec2HostReservation {
  /**
   * @schema Ec2HostReservation#Count
   */
  readonly count?: number;

  /**
   * @schema Ec2HostReservation#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2HostReservation#Duration
   */
  readonly duration?: number;

  /**
   * @schema Ec2HostReservation#End
   */
  readonly end?: string;

  /**
   * @schema Ec2HostReservation#HostIdSet
   */
  readonly hostIdSet?: string[];

  /**
   * @schema Ec2HostReservation#HostReservationId
   */
  readonly hostReservationId?: string;

  /**
   * @schema Ec2HostReservation#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Ec2HostReservation#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Ec2HostReservation#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema Ec2HostReservation#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema Ec2HostReservation#Start
   */
  readonly start?: string;

  /**
   * @schema Ec2HostReservation#State
   */
  readonly state?: string;

  /**
   * @schema Ec2HostReservation#UpfrontPrice
   */
  readonly upfrontPrice?: string;

  /**
   * @schema Ec2HostReservation#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2Host
 */
export interface Ec2Host {
  /**
   * @schema Ec2Host#AutoPlacement
   */
  readonly autoPlacement?: string;

  /**
   * @schema Ec2Host#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2Host#AvailableCapacity
   */
  readonly availableCapacity?: Ec2AvailableCapacity;

  /**
   * @schema Ec2Host#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2Host#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Ec2Host#HostProperties
   */
  readonly hostProperties?: Ec2HostProperties;

  /**
   * @schema Ec2Host#HostReservationId
   */
  readonly hostReservationId?: string;

  /**
   * @schema Ec2Host#Instances
   */
  readonly instances?: Ec2HostInstance[];

  /**
   * @schema Ec2Host#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Host#AllocationTime
   */
  readonly allocationTime?: string;

  /**
   * @schema Ec2Host#ReleaseTime
   */
  readonly releaseTime?: string;

  /**
   * @schema Ec2Host#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2Host#HostRecovery
   */
  readonly hostRecovery?: string;

  /**
   * @schema Ec2Host#AllowsMultipleInstanceTypes
   */
  readonly allowsMultipleInstanceTypes?: string;

  /**
   * @schema Ec2Host#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2Host#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Ec2Host#MemberOfServiceLinkedResourceGroup
   */
  readonly memberOfServiceLinkedResourceGroup?: boolean;

}

/**
 * @schema Ec2LaunchPermission
 */
export interface Ec2LaunchPermission {
  /**
   * @schema Ec2LaunchPermission#Group
   */
  readonly group?: string;

  /**
   * @schema Ec2LaunchPermission#UserId
   */
  readonly userId?: string;

}

/**
 * @schema Ec2ProductCode
 */
export interface Ec2ProductCode {
  /**
   * @schema Ec2ProductCode#ProductCodeId
   */
  readonly productCodeId?: string;

  /**
   * @schema Ec2ProductCode#ProductCodeType
   */
  readonly productCodeType?: string;

}

/**
 * @schema Ec2AttributeValue
 */
export interface Ec2AttributeValue {
  /**
   * @schema Ec2AttributeValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Image
 */
export interface Ec2Image {
  /**
   * @schema Ec2Image#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2Image#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Ec2Image#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2Image#ImageLocation
   */
  readonly imageLocation?: string;

  /**
   * @schema Ec2Image#ImageType
   */
  readonly imageType?: string;

  /**
   * @schema Ec2Image#Public
   */
  readonly public?: boolean;

  /**
   * @schema Ec2Image#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2Image#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2Image#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2Image#PlatformDetails
   */
  readonly platformDetails?: string;

  /**
   * @schema Ec2Image#UsageOperation
   */
  readonly usageOperation?: string;

  /**
   * @schema Ec2Image#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2Image#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2Image#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Image#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2Image#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2Image#EnaSupport
   */
  readonly enaSupport?: boolean;

  /**
   * @schema Ec2Image#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Ec2Image#ImageOwnerAlias
   */
  readonly imageOwnerAlias?: string;

  /**
   * @schema Ec2Image#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2Image#RootDeviceName
   */
  readonly rootDeviceName?: string;

  /**
   * @schema Ec2Image#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema Ec2Image#SriovNetSupport
   */
  readonly sriovNetSupport?: string;

  /**
   * @schema Ec2Image#StateReason
   */
  readonly stateReason?: Ec2StateReason;

  /**
   * @schema Ec2Image#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2Image#VirtualizationType
   */
  readonly virtualizationType?: string;

}

/**
 * @schema Ec2ImportImageTask
 */
export interface Ec2ImportImageTask {
  /**
   * @schema Ec2ImportImageTask#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2ImportImageTask#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportImageTask#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2ImportImageTask#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Ec2ImportImageTask#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2ImportImageTask#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema Ec2ImportImageTask#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2ImportImageTask#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema Ec2ImportImageTask#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ImportImageTask#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2ImportImageTask#SnapshotDetails
   */
  readonly snapshotDetails?: Ec2SnapshotDetail[];

  /**
   * @schema Ec2ImportImageTask#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ImportImageTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ImportImageTask#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2ImportImageTask#LicenseSpecifications
   */
  readonly licenseSpecifications?: Ec2ImportImageLicenseConfigurationResponse[];

}

/**
 * @schema Ec2ImportSnapshotTask
 */
export interface Ec2ImportSnapshotTask {
  /**
   * @schema Ec2ImportSnapshotTask#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportSnapshotTask#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema Ec2ImportSnapshotTask#SnapshotTaskDetail
   */
  readonly snapshotTaskDetail?: Ec2SnapshotTaskDetail;

  /**
   * @schema Ec2ImportSnapshotTask#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2GroupIdentifier
 */
export interface Ec2GroupIdentifier {
  /**
   * @schema Ec2GroupIdentifier#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2GroupIdentifier#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema Ec2InstanceBlockDeviceMapping
 */
export interface Ec2InstanceBlockDeviceMapping {
  /**
   * @schema Ec2InstanceBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2InstanceBlockDeviceMapping#Ebs
   */
  readonly ebs?: Ec2EbsInstanceBlockDevice;

}

/**
 * @schema Ec2AttributeBooleanValue
 */
export interface Ec2AttributeBooleanValue {
  /**
   * @schema Ec2AttributeBooleanValue#Value
   */
  readonly value?: boolean;

}

/**
 * @schema Ec2EnclaveOptions
 */
export interface Ec2EnclaveOptions {
  /**
   * @schema Ec2EnclaveOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2InstanceCreditSpecification
 */
export interface Ec2InstanceCreditSpecification {
  /**
   * @schema Ec2InstanceCreditSpecification#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceCreditSpecification#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema Ec2InstanceStatus
 */
export interface Ec2InstanceStatus {
  /**
   * @schema Ec2InstanceStatus#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2InstanceStatus#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2InstanceStatus#Events
   */
  readonly events?: Ec2InstanceStatusEvent[];

  /**
   * @schema Ec2InstanceStatus#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceStatus#InstanceState
   */
  readonly instanceState?: Ec2InstanceState;

  /**
   * @schema Ec2InstanceStatus#InstanceStatus
   */
  readonly instanceStatus?: Ec2InstanceStatusSummary;

  /**
   * @schema Ec2InstanceStatus#SystemStatus
   */
  readonly systemStatus?: Ec2InstanceStatusSummary;

}

/**
 * @schema Ec2InstanceTypeOffering
 */
export interface Ec2InstanceTypeOffering {
  /**
   * @schema Ec2InstanceTypeOffering#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2InstanceTypeOffering#LocationType
   */
  readonly locationType?: string;

  /**
   * @schema Ec2InstanceTypeOffering#Location
   */
  readonly location?: string;

}

/**
 * @schema Ec2InstanceTypeInfo
 */
export interface Ec2InstanceTypeInfo {
  /**
   * @schema Ec2InstanceTypeInfo#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2InstanceTypeInfo#CurrentGeneration
   */
  readonly currentGeneration?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#FreeTierEligible
   */
  readonly freeTierEligible?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#SupportedUsageClasses
   */
  readonly supportedUsageClasses?: string[];

  /**
   * @schema Ec2InstanceTypeInfo#SupportedRootDeviceTypes
   */
  readonly supportedRootDeviceTypes?: string[];

  /**
   * @schema Ec2InstanceTypeInfo#SupportedVirtualizationTypes
   */
  readonly supportedVirtualizationTypes?: string[];

  /**
   * @schema Ec2InstanceTypeInfo#BareMetal
   */
  readonly bareMetal?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Ec2InstanceTypeInfo#ProcessorInfo
   */
  readonly processorInfo?: Ec2ProcessorInfo;

  /**
   * @schema Ec2InstanceTypeInfo#VCpuInfo
   */
  readonly vCpuInfo?: Ec2VCpuInfo;

  /**
   * @schema Ec2InstanceTypeInfo#MemoryInfo
   */
  readonly memoryInfo?: Ec2MemoryInfo;

  /**
   * @schema Ec2InstanceTypeInfo#InstanceStorageSupported
   */
  readonly instanceStorageSupported?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#InstanceStorageInfo
   */
  readonly instanceStorageInfo?: Ec2InstanceStorageInfo;

  /**
   * @schema Ec2InstanceTypeInfo#EbsInfo
   */
  readonly ebsInfo?: Ec2EbsInfo;

  /**
   * @schema Ec2InstanceTypeInfo#NetworkInfo
   */
  readonly networkInfo?: Ec2NetworkInfo;

  /**
   * @schema Ec2InstanceTypeInfo#GpuInfo
   */
  readonly gpuInfo?: Ec2GpuInfo;

  /**
   * @schema Ec2InstanceTypeInfo#FpgaInfo
   */
  readonly fpgaInfo?: Ec2FpgaInfo;

  /**
   * @schema Ec2InstanceTypeInfo#PlacementGroupInfo
   */
  readonly placementGroupInfo?: Ec2PlacementGroupInfo;

  /**
   * @schema Ec2InstanceTypeInfo#InferenceAcceleratorInfo
   */
  readonly inferenceAcceleratorInfo?: Ec2InferenceAcceleratorInfo;

  /**
   * @schema Ec2InstanceTypeInfo#HibernationSupported
   */
  readonly hibernationSupported?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#BurstablePerformanceSupported
   */
  readonly burstablePerformanceSupported?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#DedicatedHostsSupported
   */
  readonly dedicatedHostsSupported?: boolean;

  /**
   * @schema Ec2InstanceTypeInfo#AutoRecoverySupported
   */
  readonly autoRecoverySupported?: boolean;

}

/**
 * @schema Ec2Ipv6Pool
 */
export interface Ec2Ipv6Pool {
  /**
   * @schema Ec2Ipv6Pool#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema Ec2Ipv6Pool#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2Ipv6Pool#PoolCidrBlocks
   */
  readonly poolCidrBlocks?: Ec2PoolCidrBlock[];

  /**
   * @schema Ec2Ipv6Pool#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2KeyPairInfo
 */
export interface Ec2KeyPairInfo {
  /**
   * @schema Ec2KeyPairInfo#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema Ec2KeyPairInfo#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema Ec2KeyPairInfo#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2KeyPairInfo#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 */
export interface Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
   */
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#State
   */
  readonly state?: string;

  /**
   * @schema Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2LocalGatewayRouteTable
 */
export interface Ec2LocalGatewayRouteTable {
  /**
   * @schema Ec2LocalGatewayRouteTable#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTable#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema Ec2LocalGatewayRouteTable#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTable#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2LocalGatewayRouteTable#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2LocalGatewayRouteTable#State
   */
  readonly state?: string;

  /**
   * @schema Ec2LocalGatewayRouteTable#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2LocalGatewayVirtualInterfaceGroup
 */
export interface Ec2LocalGatewayVirtualInterfaceGroup {
  /**
   * @schema Ec2LocalGatewayVirtualInterfaceGroup#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterfaceGroup#LocalGatewayVirtualInterfaceIds
   */
  readonly localGatewayVirtualInterfaceIds?: string[];

  /**
   * @schema Ec2LocalGatewayVirtualInterfaceGroup#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterfaceGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterfaceGroup#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2LocalGatewayVirtualInterface
 */
export interface Ec2LocalGatewayVirtualInterface {
  /**
   * @schema Ec2LocalGatewayVirtualInterface#LocalGatewayVirtualInterfaceId
   */
  readonly localGatewayVirtualInterfaceId?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#Vlan
   */
  readonly vlan?: number;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#LocalAddress
   */
  readonly localAddress?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#PeerAddress
   */
  readonly peerAddress?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#LocalBgpAsn
   */
  readonly localBgpAsn?: number;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#PeerBgpAsn
   */
  readonly peerBgpAsn?: number;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2LocalGatewayVirtualInterface#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2LocalGateway
 */
export interface Ec2LocalGateway {
  /**
   * @schema Ec2LocalGateway#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2LocalGateway#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2LocalGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2LocalGateway#State
   */
  readonly state?: string;

  /**
   * @schema Ec2LocalGateway#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2MovingAddressStatus
 */
export interface Ec2MovingAddressStatus {
  /**
   * @schema Ec2MovingAddressStatus#MoveStatus
   */
  readonly moveStatus?: string;

  /**
   * @schema Ec2MovingAddressStatus#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * @schema Ec2NetworkInterfaceAttachment
 */
export interface Ec2NetworkInterfaceAttachment {
  /**
   * @schema Ec2NetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema Ec2NetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema Ec2NetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2NetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema Ec2NetworkInterfaceAttachment#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

  /**
   * @schema Ec2NetworkInterfaceAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2NetworkInterfaceAttachment#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema Ec2NetworkInterfaceAttachment#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2PrefixList
 */
export interface Ec2PrefixList {
  /**
   * @schema Ec2PrefixList#Cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema Ec2PrefixList#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema Ec2PrefixList#PrefixListName
   */
  readonly prefixListName?: string;

}

/**
 * @schema Ec2PrincipalIdFormat
 */
export interface Ec2PrincipalIdFormat {
  /**
   * @schema Ec2PrincipalIdFormat#Arn
   */
  readonly arn?: string;

  /**
   * @schema Ec2PrincipalIdFormat#Statuses
   */
  readonly statuses?: Ec2IdFormat[];

}

/**
 * @schema Ec2PublicIpv4Pool
 */
export interface Ec2PublicIpv4Pool {
  /**
   * @schema Ec2PublicIpv4Pool#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema Ec2PublicIpv4Pool#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2PublicIpv4Pool#PoolAddressRanges
   */
  readonly poolAddressRanges?: Ec2PublicIpv4PoolRange[];

  /**
   * @schema Ec2PublicIpv4Pool#TotalAddressCount
   */
  readonly totalAddressCount?: number;

  /**
   * @schema Ec2PublicIpv4Pool#TotalAvailableAddressCount
   */
  readonly totalAvailableAddressCount?: number;

  /**
   * @schema Ec2PublicIpv4Pool#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Ec2PublicIpv4Pool#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2Region
 */
export interface Ec2Region {
  /**
   * @schema Ec2Region#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Ec2Region#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema Ec2Region#OptInStatus
   */
  readonly optInStatus?: string;

}

/**
 * @schema Ec2ReservedInstances
 */
export interface Ec2ReservedInstances {
  /**
   * @schema Ec2ReservedInstances#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ReservedInstances#Duration
   */
  readonly duration?: number;

  /**
   * @schema Ec2ReservedInstances#End
   */
  readonly end?: string;

  /**
   * @schema Ec2ReservedInstances#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema Ec2ReservedInstances#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2ReservedInstances#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ReservedInstances#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema Ec2ReservedInstances#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema Ec2ReservedInstances#Start
   */
  readonly start?: string;

  /**
   * @schema Ec2ReservedInstances#State
   */
  readonly state?: string;

  /**
   * @schema Ec2ReservedInstances#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema Ec2ReservedInstances#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2ReservedInstances#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema Ec2ReservedInstances#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema Ec2ReservedInstances#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema Ec2ReservedInstances#RecurringCharges
   */
  readonly recurringCharges?: Ec2RecurringCharge[];

  /**
   * @schema Ec2ReservedInstances#Scope
   */
  readonly scope?: string;

  /**
   * @schema Ec2ReservedInstances#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ReservedInstancesModification
 */
export interface Ec2ReservedInstancesModification {
  /**
   * @schema Ec2ReservedInstancesModification#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2ReservedInstancesModification#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Ec2ReservedInstancesModification#EffectiveDate
   */
  readonly effectiveDate?: string;

  /**
   * @schema Ec2ReservedInstancesModification#ModificationResults
   */
  readonly modificationResults?: Ec2ReservedInstancesModificationResult[];

  /**
   * @schema Ec2ReservedInstancesModification#ReservedInstancesIds
   */
  readonly reservedInstancesIds?: Ec2ReservedInstancesId[];

  /**
   * @schema Ec2ReservedInstancesModification#ReservedInstancesModificationId
   */
  readonly reservedInstancesModificationId?: string;

  /**
   * @schema Ec2ReservedInstancesModification#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ReservedInstancesModification#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ReservedInstancesModification#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema Ec2ReservedInstancesOffering
 */
export interface Ec2ReservedInstancesOffering {
  /**
   * @schema Ec2ReservedInstancesOffering#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema Ec2ReservedInstancesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema Ec2ReservedInstancesOffering#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#ReservedInstancesOfferingId
   */
  readonly reservedInstancesOfferingId?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema Ec2ReservedInstancesOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#Marketplace
   */
  readonly marketplace?: boolean;

  /**
   * @schema Ec2ReservedInstancesOffering#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema Ec2ReservedInstancesOffering#PricingDetails
   */
  readonly pricingDetails?: Ec2PricingDetail[];

  /**
   * @schema Ec2ReservedInstancesOffering#RecurringCharges
   */
  readonly recurringCharges?: Ec2RecurringCharge[];

  /**
   * @schema Ec2ReservedInstancesOffering#Scope
   */
  readonly scope?: string;

}

/**
 * @schema Ec2SlotDateTimeRangeRequest
 */
export interface Ec2SlotDateTimeRangeRequest {
  /**
   * @schema Ec2SlotDateTimeRangeRequest#EarliestTime
   */
  readonly earliestTime: string;

  /**
   * @schema Ec2SlotDateTimeRangeRequest#LatestTime
   */
  readonly latestTime: string;

}

/**
 * @schema Ec2ScheduledInstanceRecurrenceRequest
 */
export interface Ec2ScheduledInstanceRecurrenceRequest {
  /**
   * @schema Ec2ScheduledInstanceRecurrenceRequest#Frequency
   */
  readonly frequency?: string;

  /**
   * @schema Ec2ScheduledInstanceRecurrenceRequest#Interval
   */
  readonly interval?: number;

  /**
   * @schema Ec2ScheduledInstanceRecurrenceRequest#OccurrenceDays
   */
  readonly occurrenceDays?: number[];

  /**
   * @schema Ec2ScheduledInstanceRecurrenceRequest#OccurrenceRelativeToEnd
   */
  readonly occurrenceRelativeToEnd?: boolean;

  /**
   * @schema Ec2ScheduledInstanceRecurrenceRequest#OccurrenceUnit
   */
  readonly occurrenceUnit?: string;

}

/**
 * @schema Ec2ScheduledInstanceAvailability
 */
export interface Ec2ScheduledInstanceAvailability {
  /**
   * @schema Ec2ScheduledInstanceAvailability#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#AvailableInstanceCount
   */
  readonly availableInstanceCount?: number;

  /**
   * @schema Ec2ScheduledInstanceAvailability#FirstSlotStartTime
   */
  readonly firstSlotStartTime?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#MaxTermDurationInDays
   */
  readonly maxTermDurationInDays?: number;

  /**
   * @schema Ec2ScheduledInstanceAvailability#MinTermDurationInDays
   */
  readonly minTermDurationInDays?: number;

  /**
   * @schema Ec2ScheduledInstanceAvailability#NetworkPlatform
   */
  readonly networkPlatform?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#PurchaseToken
   */
  readonly purchaseToken?: string;

  /**
   * @schema Ec2ScheduledInstanceAvailability#Recurrence
   */
  readonly recurrence?: Ec2ScheduledInstanceRecurrence;

  /**
   * @schema Ec2ScheduledInstanceAvailability#SlotDurationInHours
   */
  readonly slotDurationInHours?: number;

  /**
   * @schema Ec2ScheduledInstanceAvailability#TotalScheduledInstanceHours
   */
  readonly totalScheduledInstanceHours?: number;

}

/**
 * @schema Ec2SlotStartTimeRangeRequest
 */
export interface Ec2SlotStartTimeRangeRequest {
  /**
   * @schema Ec2SlotStartTimeRangeRequest#EarliestTime
   */
  readonly earliestTime?: string;

  /**
   * @schema Ec2SlotStartTimeRangeRequest#LatestTime
   */
  readonly latestTime?: string;

}

/**
 * @schema Ec2ScheduledInstance
 */
export interface Ec2ScheduledInstance {
  /**
   * @schema Ec2ScheduledInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ScheduledInstance#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Ec2ScheduledInstance#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Ec2ScheduledInstance#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2ScheduledInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ScheduledInstance#NetworkPlatform
   */
  readonly networkPlatform?: string;

  /**
   * @schema Ec2ScheduledInstance#NextSlotStartTime
   */
  readonly nextSlotStartTime?: string;

  /**
   * @schema Ec2ScheduledInstance#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ScheduledInstance#PreviousSlotEndTime
   */
  readonly previousSlotEndTime?: string;

  /**
   * @schema Ec2ScheduledInstance#Recurrence
   */
  readonly recurrence?: Ec2ScheduledInstanceRecurrence;

  /**
   * @schema Ec2ScheduledInstance#ScheduledInstanceId
   */
  readonly scheduledInstanceId?: string;

  /**
   * @schema Ec2ScheduledInstance#SlotDurationInHours
   */
  readonly slotDurationInHours?: number;

  /**
   * @schema Ec2ScheduledInstance#TermEndDate
   */
  readonly termEndDate?: string;

  /**
   * @schema Ec2ScheduledInstance#TermStartDate
   */
  readonly termStartDate?: string;

  /**
   * @schema Ec2ScheduledInstance#TotalScheduledInstanceHours
   */
  readonly totalScheduledInstanceHours?: number;

}

/**
 * @schema Ec2SecurityGroupReference
 */
export interface Ec2SecurityGroupReference {
  /**
   * @schema Ec2SecurityGroupReference#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2SecurityGroupReference#ReferencingVpcId
   */
  readonly referencingVpcId?: string;

  /**
   * @schema Ec2SecurityGroupReference#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2SecurityGroup
 */
export interface Ec2SecurityGroup {
  /**
   * @schema Ec2SecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2SecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2SecurityGroup#IpPermissions
   */
  readonly ipPermissions?: Ec2IpPermission[];

  /**
   * @schema Ec2SecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2SecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2SecurityGroup#IpPermissionsEgress
   */
  readonly ipPermissionsEgress?: Ec2IpPermission[];

  /**
   * @schema Ec2SecurityGroup#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2SecurityGroup#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2CreateVolumePermission
 */
export interface Ec2CreateVolumePermission {
  /**
   * @schema Ec2CreateVolumePermission#Group
   */
  readonly group?: string;

  /**
   * @schema Ec2CreateVolumePermission#UserId
   */
  readonly userId?: string;

}

/**
 * @schema Ec2HistoryRecord
 */
export interface Ec2HistoryRecord {
  /**
   * @schema Ec2HistoryRecord#EventInformation
   */
  readonly eventInformation?: Ec2EventInformation;

  /**
   * @schema Ec2HistoryRecord#EventType
   */
  readonly eventType?: string;

  /**
   * @schema Ec2HistoryRecord#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Ec2SpotFleetRequestConfig
 */
export interface Ec2SpotFleetRequestConfig {
  /**
   * @schema Ec2SpotFleetRequestConfig#ActivityStatus
   */
  readonly activityStatus?: string;

  /**
   * @schema Ec2SpotFleetRequestConfig#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2SpotFleetRequestConfig#SpotFleetRequestConfig
   */
  readonly spotFleetRequestConfig?: Ec2SpotFleetRequestConfigData;

  /**
   * @schema Ec2SpotFleetRequestConfig#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

  /**
   * @schema Ec2SpotFleetRequestConfig#SpotFleetRequestState
   */
  readonly spotFleetRequestState?: string;

  /**
   * @schema Ec2SpotFleetRequestConfig#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2SpotInstanceRequest
 */
export interface Ec2SpotInstanceRequest {
  /**
   * @schema Ec2SpotInstanceRequest#ActualBlockHourlyPrice
   */
  readonly actualBlockHourlyPrice?: string;

  /**
   * @schema Ec2SpotInstanceRequest#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema Ec2SpotInstanceRequest#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema Ec2SpotInstanceRequest#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Ec2SpotInstanceRequest#Fault
   */
  readonly fault?: Ec2SpotInstanceStateFault;

  /**
   * @schema Ec2SpotInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2SpotInstanceRequest#LaunchGroup
   */
  readonly launchGroup?: string;

  /**
   * @schema Ec2SpotInstanceRequest#LaunchSpecification
   */
  readonly launchSpecification?: Ec2LaunchSpecification;

  /**
   * @schema Ec2SpotInstanceRequest#LaunchedAvailabilityZone
   */
  readonly launchedAvailabilityZone?: string;

  /**
   * @schema Ec2SpotInstanceRequest#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema Ec2SpotInstanceRequest#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema Ec2SpotInstanceRequest#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema Ec2SpotInstanceRequest#State
   */
  readonly state?: string;

  /**
   * @schema Ec2SpotInstanceRequest#Status
   */
  readonly status?: Ec2SpotInstanceStatus;

  /**
   * @schema Ec2SpotInstanceRequest#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2SpotInstanceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2SpotInstanceRequest#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Ec2SpotInstanceRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2SpotInstanceRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema Ec2SpotPrice
 */
export interface Ec2SpotPrice {
  /**
   * @schema Ec2SpotPrice#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2SpotPrice#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2SpotPrice#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema Ec2SpotPrice#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema Ec2SpotPrice#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema Ec2StaleSecurityGroup
 */
export interface Ec2StaleSecurityGroup {
  /**
   * @schema Ec2StaleSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2StaleSecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2StaleSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2StaleSecurityGroup#StaleIpPermissions
   */
  readonly staleIpPermissions?: Ec2StaleIpPermission[];

  /**
   * @schema Ec2StaleSecurityGroup#StaleIpPermissionsEgress
   */
  readonly staleIpPermissionsEgress?: Ec2StaleIpPermission[];

  /**
   * @schema Ec2StaleSecurityGroup#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2TagDescription
 */
export interface Ec2TagDescription {
  /**
   * @schema Ec2TagDescription#Key
   */
  readonly key?: string;

  /**
   * @schema Ec2TagDescription#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TagDescription#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TagDescription#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2TransitGatewayAttachment
 */
export interface Ec2TransitGatewayAttachment {
  /**
   * @schema Ec2TransitGatewayAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#TransitGatewayOwnerId
   */
  readonly transitGatewayOwnerId?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#State
   */
  readonly state?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#Association
   */
  readonly association?: Ec2TransitGatewayAttachmentAssociation;

  /**
   * @schema Ec2TransitGatewayAttachment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Ec2TransitGatewayAttachment#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2VolumeStatusItem
 */
export interface Ec2VolumeStatusItem {
  /**
   * @schema Ec2VolumeStatusItem#Actions
   */
  readonly actions?: Ec2VolumeStatusAction[];

  /**
   * @schema Ec2VolumeStatusItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2VolumeStatusItem#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2VolumeStatusItem#Events
   */
  readonly events?: Ec2VolumeStatusEvent[];

  /**
   * @schema Ec2VolumeStatusItem#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Ec2VolumeStatusItem#VolumeStatus
   */
  readonly volumeStatus?: Ec2VolumeStatusInfo;

  /**
   * @schema Ec2VolumeStatusItem#AttachmentStatuses
   */
  readonly attachmentStatuses?: Ec2VolumeStatusAttachmentStatus[];

}

/**
 * @schema Ec2VolumeModification
 */
export interface Ec2VolumeModification {
  /**
   * @schema Ec2VolumeModification#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Ec2VolumeModification#ModificationState
   */
  readonly modificationState?: string;

  /**
   * @schema Ec2VolumeModification#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2VolumeModification#TargetSize
   */
  readonly targetSize?: number;

  /**
   * @schema Ec2VolumeModification#TargetIops
   */
  readonly targetIops?: number;

  /**
   * @schema Ec2VolumeModification#TargetVolumeType
   */
  readonly targetVolumeType?: string;

  /**
   * @schema Ec2VolumeModification#OriginalSize
   */
  readonly originalSize?: number;

  /**
   * @schema Ec2VolumeModification#OriginalIops
   */
  readonly originalIops?: number;

  /**
   * @schema Ec2VolumeModification#OriginalVolumeType
   */
  readonly originalVolumeType?: string;

  /**
   * @schema Ec2VolumeModification#Progress
   */
  readonly progress?: number;

  /**
   * @schema Ec2VolumeModification#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Ec2VolumeModification#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema Ec2VpcClassicLink
 */
export interface Ec2VpcClassicLink {
  /**
   * @schema Ec2VpcClassicLink#ClassicLinkEnabled
   */
  readonly classicLinkEnabled?: boolean;

  /**
   * @schema Ec2VpcClassicLink#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2VpcClassicLink#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2ClassicLinkDnsSupport
 */
export interface Ec2ClassicLinkDnsSupport {
  /**
   * @schema Ec2ClassicLinkDnsSupport#ClassicLinkDnsSupported
   */
  readonly classicLinkDnsSupported?: boolean;

  /**
   * @schema Ec2ClassicLinkDnsSupport#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2VpcEndpointConnection
 */
export interface Ec2VpcEndpointConnection {
  /**
   * @schema Ec2VpcEndpointConnection#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema Ec2VpcEndpointConnection#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema Ec2VpcEndpointConnection#VpcEndpointOwner
   */
  readonly vpcEndpointOwner?: string;

  /**
   * @schema Ec2VpcEndpointConnection#VpcEndpointState
   */
  readonly vpcEndpointState?: string;

  /**
   * @schema Ec2VpcEndpointConnection#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema Ec2VpcEndpointConnection#DnsEntries
   */
  readonly dnsEntries?: Ec2DnsEntry[];

  /**
   * @schema Ec2VpcEndpointConnection#NetworkLoadBalancerArns
   */
  readonly networkLoadBalancerArns?: string[];

  /**
   * @schema Ec2VpcEndpointConnection#GatewayLoadBalancerArns
   */
  readonly gatewayLoadBalancerArns?: string[];

}

/**
 * @schema Ec2AllowedPrincipal
 */
export interface Ec2AllowedPrincipal {
  /**
   * @schema Ec2AllowedPrincipal#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema Ec2AllowedPrincipal#Principal
   */
  readonly principal?: string;

}

/**
 * @schema Ec2ServiceDetail
 */
export interface Ec2ServiceDetail {
  /**
   * @schema Ec2ServiceDetail#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema Ec2ServiceDetail#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema Ec2ServiceDetail#ServiceType
   */
  readonly serviceType?: Ec2ServiceTypeDetail[];

  /**
   * @schema Ec2ServiceDetail#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema Ec2ServiceDetail#Owner
   */
  readonly owner?: string;

  /**
   * @schema Ec2ServiceDetail#BaseEndpointDnsNames
   */
  readonly baseEndpointDnsNames?: string[];

  /**
   * @schema Ec2ServiceDetail#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2ServiceDetail#PrivateDnsNames
   */
  readonly privateDnsNames?: Ec2PrivateDnsDetails[];

  /**
   * @schema Ec2ServiceDetail#VpcEndpointPolicySupported
   */
  readonly vpcEndpointPolicySupported?: boolean;

  /**
   * @schema Ec2ServiceDetail#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema Ec2ServiceDetail#ManagesVpcEndpoints
   */
  readonly managesVpcEndpoints?: boolean;

  /**
   * @schema Ec2ServiceDetail#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2ServiceDetail#PrivateDnsNameVerificationState
   */
  readonly privateDnsNameVerificationState?: string;

}

/**
 * @schema Ec2DisableFastSnapshotRestoreSuccessItem
 */
export interface Ec2DisableFastSnapshotRestoreSuccessItem {
  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#State
   */
  readonly state?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#EnablingTime
   */
  readonly enablingTime?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#OptimizingTime
   */
  readonly optimizingTime?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#EnabledTime
   */
  readonly enabledTime?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#DisablingTime
   */
  readonly disablingTime?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreSuccessItem#DisabledTime
   */
  readonly disabledTime?: string;

}

/**
 * @schema Ec2DisableFastSnapshotRestoreErrorItem
 */
export interface Ec2DisableFastSnapshotRestoreErrorItem {
  /**
   * @schema Ec2DisableFastSnapshotRestoreErrorItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreErrorItem#FastSnapshotRestoreStateErrors
   */
  readonly fastSnapshotRestoreStateErrors?: Ec2DisableFastSnapshotRestoreStateErrorItem[];

}

/**
 * @schema Ec2TransitGatewayPropagation
 */
export interface Ec2TransitGatewayPropagation {
  /**
   * @schema Ec2TransitGatewayPropagation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayPropagation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayPropagation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayPropagation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayPropagation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2EnableFastSnapshotRestoreSuccessItem
 */
export interface Ec2EnableFastSnapshotRestoreSuccessItem {
  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#State
   */
  readonly state?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#EnablingTime
   */
  readonly enablingTime?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#OptimizingTime
   */
  readonly optimizingTime?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#EnabledTime
   */
  readonly enabledTime?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#DisablingTime
   */
  readonly disablingTime?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreSuccessItem#DisabledTime
   */
  readonly disabledTime?: string;

}

/**
 * @schema Ec2EnableFastSnapshotRestoreErrorItem
 */
export interface Ec2EnableFastSnapshotRestoreErrorItem {
  /**
   * @schema Ec2EnableFastSnapshotRestoreErrorItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreErrorItem#FastSnapshotRestoreStateErrors
   */
  readonly fastSnapshotRestoreStateErrors?: Ec2EnableFastSnapshotRestoreStateErrorItem[];

}

/**
 * @schema Ec2ClientCertificateRevocationListStatus
 */
export interface Ec2ClientCertificateRevocationListStatus {
  /**
   * @schema Ec2ClientCertificateRevocationListStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ClientCertificateRevocationListStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2ExportTaskS3LocationRequest
 */
export interface Ec2ExportTaskS3LocationRequest {
  /**
   * @schema Ec2ExportTaskS3LocationRequest#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema Ec2ExportTaskS3LocationRequest#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema Ec2ExportTaskS3Location
 */
export interface Ec2ExportTaskS3Location {
  /**
   * @schema Ec2ExportTaskS3Location#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema Ec2ExportTaskS3Location#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema Ec2AssociatedRole
 */
export interface Ec2AssociatedRole {
  /**
   * @schema Ec2AssociatedRole#AssociatedRoleArn
   */
  readonly associatedRoleArn?: string;

  /**
   * @schema Ec2AssociatedRole#CertificateS3BucketName
   */
  readonly certificateS3BucketName?: string;

  /**
   * @schema Ec2AssociatedRole#CertificateS3ObjectKey
   */
  readonly certificateS3ObjectKey?: string;

  /**
   * @schema Ec2AssociatedRole#EncryptionKmsKeyId
   */
  readonly encryptionKmsKeyId?: string;

}

/**
 * @schema Ec2Ipv6CidrAssociation
 */
export interface Ec2Ipv6CidrAssociation {
  /**
   * @schema Ec2Ipv6CidrAssociation#Ipv6Cidr
   */
  readonly ipv6Cidr?: string;

  /**
   * @schema Ec2Ipv6CidrAssociation#AssociatedResource
   */
  readonly associatedResource?: string;

}

/**
 * @schema Ec2InstanceUsage
 */
export interface Ec2InstanceUsage {
  /**
   * @schema Ec2InstanceUsage#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Ec2InstanceUsage#UsedInstanceCount
   */
  readonly usedInstanceCount?: number;

}

/**
 * @schema Ec2CoipAddressUsage
 */
export interface Ec2CoipAddressUsage {
  /**
   * @schema Ec2CoipAddressUsage#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2CoipAddressUsage#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema Ec2CoipAddressUsage#AwsService
   */
  readonly awsService?: string;

  /**
   * @schema Ec2CoipAddressUsage#CoIp
   */
  readonly coIp?: string;

}

/**
 * @schema Ec2InstanceFamilyCreditSpecification
 */
export interface Ec2InstanceFamilyCreditSpecification {
  /**
   * @schema Ec2InstanceFamilyCreditSpecification#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Ec2InstanceFamilyCreditSpecification#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema Ec2CapacityReservationGroup
 */
export interface Ec2CapacityReservationGroup {
  /**
   * @schema Ec2CapacityReservationGroup#GroupArn
   */
  readonly groupArn?: string;

  /**
   * @schema Ec2CapacityReservationGroup#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Ec2Purchase
 */
export interface Ec2Purchase {
  /**
   * @schema Ec2Purchase#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2Purchase#Duration
   */
  readonly duration?: number;

  /**
   * @schema Ec2Purchase#HostIdSet
   */
  readonly hostIdSet?: string[];

  /**
   * @schema Ec2Purchase#HostReservationId
   */
  readonly hostReservationId?: string;

  /**
   * @schema Ec2Purchase#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Ec2Purchase#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Ec2Purchase#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema Ec2Purchase#UpfrontPrice
   */
  readonly upfrontPrice?: string;

}

/**
 * @schema Ec2ResponseLaunchTemplateData
 */
export interface Ec2ResponseLaunchTemplateData {
  /**
   * @schema Ec2ResponseLaunchTemplateData#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2ResponseLaunchTemplateData#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2LaunchTemplateIamInstanceProfileSpecification;

  /**
   * @schema Ec2ResponseLaunchTemplateData#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2LaunchTemplateBlockDeviceMapping[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#Monitoring
   */
  readonly monitoring?: Ec2LaunchTemplatesMonitoring;

  /**
   * @schema Ec2ResponseLaunchTemplateData#Placement
   */
  readonly placement?: Ec2LaunchTemplatePlacement;

  /**
   * @schema Ec2ResponseLaunchTemplateData#RamDiskId
   */
  readonly ramDiskId?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#DisableApiTermination
   */
  readonly disableApiTermination?: boolean;

  /**
   * @schema Ec2ResponseLaunchTemplateData#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#UserData
   */
  readonly userData?: string;

  /**
   * @schema Ec2ResponseLaunchTemplateData#TagSpecifications
   */
  readonly tagSpecifications?: Ec2LaunchTemplateTagSpecification[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#ElasticGpuSpecifications
   */
  readonly elasticGpuSpecifications?: Ec2ElasticGpuSpecificationResponse[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#ElasticInferenceAccelerators
   */
  readonly elasticInferenceAccelerators?: Ec2LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#InstanceMarketOptions
   */
  readonly instanceMarketOptions?: Ec2LaunchTemplateInstanceMarketOptions;

  /**
   * @schema Ec2ResponseLaunchTemplateData#CreditSpecification
   */
  readonly creditSpecification?: Ec2CreditSpecification;

  /**
   * @schema Ec2ResponseLaunchTemplateData#CpuOptions
   */
  readonly cpuOptions?: Ec2LaunchTemplateCpuOptions;

  /**
   * @schema Ec2ResponseLaunchTemplateData#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: Ec2LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * @schema Ec2ResponseLaunchTemplateData#LicenseSpecifications
   */
  readonly licenseSpecifications?: Ec2LaunchTemplateLicenseConfiguration[];

  /**
   * @schema Ec2ResponseLaunchTemplateData#HibernationOptions
   */
  readonly hibernationOptions?: Ec2LaunchTemplateHibernationOptions;

  /**
   * @schema Ec2ResponseLaunchTemplateData#MetadataOptions
   */
  readonly metadataOptions?: Ec2LaunchTemplateInstanceMetadataOptions;

  /**
   * @schema Ec2ResponseLaunchTemplateData#EnclaveOptions
   */
  readonly enclaveOptions?: Ec2LaunchTemplateEnclaveOptions;

}

/**
 * @schema Ec2PrefixListAssociation
 */
export interface Ec2PrefixListAssociation {
  /**
   * @schema Ec2PrefixListAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2PrefixListAssociation#ResourceOwner
   */
  readonly resourceOwner?: string;

}

/**
 * @schema Ec2PrefixListEntry
 */
export interface Ec2PrefixListEntry {
  /**
   * @schema Ec2PrefixListEntry#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema Ec2PrefixListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2ReservationValue
 */
export interface Ec2ReservationValue {
  /**
   * @schema Ec2ReservationValue#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Ec2ReservationValue#RemainingTotalValue
   */
  readonly remainingTotalValue?: string;

  /**
   * @schema Ec2ReservationValue#RemainingUpfrontValue
   */
  readonly remainingUpfrontValue?: string;

}

/**
 * @schema Ec2ReservedInstanceReservationValue
 */
export interface Ec2ReservedInstanceReservationValue {
  /**
   * @schema Ec2ReservedInstanceReservationValue#ReservationValue
   */
  readonly reservationValue?: Ec2ReservationValue;

  /**
   * @schema Ec2ReservedInstanceReservationValue#ReservedInstanceId
   */
  readonly reservedInstanceId?: string;

}

/**
 * @schema Ec2TargetReservationValue
 */
export interface Ec2TargetReservationValue {
  /**
   * @schema Ec2TargetReservationValue#ReservationValue
   */
  readonly reservationValue?: Ec2ReservationValue;

  /**
   * @schema Ec2TargetReservationValue#TargetConfiguration
   */
  readonly targetConfiguration?: Ec2TargetConfiguration;

}

/**
 * @schema Ec2TransitGatewayAttachmentPropagation
 */
export interface Ec2TransitGatewayAttachmentPropagation {
  /**
   * @schema Ec2TransitGatewayAttachmentPropagation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayAttachmentPropagation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2TransitGatewayMulticastDomainAssociation
 */
export interface Ec2TransitGatewayMulticastDomainAssociation {
  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayMulticastDomainAssociation#Subnet
   */
  readonly subnet?: Ec2SubnetAssociation;

}

/**
 * @schema Ec2TransitGatewayRouteTableAssociation
 */
export interface Ec2TransitGatewayRouteTableAssociation {
  /**
   * @schema Ec2TransitGatewayRouteTableAssociation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayRouteTableAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayRouteTableAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayRouteTableAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2TransitGatewayRouteTablePropagation
 */
export interface Ec2TransitGatewayRouteTablePropagation {
  /**
   * @schema Ec2TransitGatewayRouteTablePropagation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayRouteTablePropagation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayRouteTablePropagation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayRouteTablePropagation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2ClientData
 */
export interface Ec2ClientData {
  /**
   * @schema Ec2ClientData#Comment
   */
  readonly comment?: string;

  /**
   * @schema Ec2ClientData#UploadEnd
   */
  readonly uploadEnd?: string;

  /**
   * @schema Ec2ClientData#UploadSize
   */
  readonly uploadSize?: number;

  /**
   * @schema Ec2ClientData#UploadStart
   */
  readonly uploadStart?: string;

}

/**
 * @schema Ec2ImageDiskContainer
 */
export interface Ec2ImageDiskContainer {
  /**
   * @schema Ec2ImageDiskContainer#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImageDiskContainer#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2ImageDiskContainer#Format
   */
  readonly format?: string;

  /**
   * @schema Ec2ImageDiskContainer#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2ImageDiskContainer#Url
   */
  readonly url?: string;

  /**
   * @schema Ec2ImageDiskContainer#UserBucket
   */
  readonly userBucket?: Ec2UserBucket;

}

/**
 * @schema Ec2ImportImageLicenseConfigurationRequest
 */
export interface Ec2ImportImageLicenseConfigurationRequest {
  /**
   * @schema Ec2ImportImageLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema Ec2SnapshotDetail
 */
export interface Ec2SnapshotDetail {
  /**
   * @schema Ec2SnapshotDetail#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2SnapshotDetail#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2SnapshotDetail#DiskImageSize
   */
  readonly diskImageSize?: number;

  /**
   * @schema Ec2SnapshotDetail#Format
   */
  readonly format?: string;

  /**
   * @schema Ec2SnapshotDetail#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2SnapshotDetail#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2SnapshotDetail#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2SnapshotDetail#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2SnapshotDetail#Url
   */
  readonly url?: string;

  /**
   * @schema Ec2SnapshotDetail#UserBucket
   */
  readonly userBucket?: Ec2UserBucketDetails;

}

/**
 * @schema Ec2ImportImageLicenseConfigurationResponse
 */
export interface Ec2ImportImageLicenseConfigurationResponse {
  /**
   * @schema Ec2ImportImageLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema Ec2DiskImage
 */
export interface Ec2DiskImage {
  /**
   * @schema Ec2DiskImage#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2DiskImage#Image
   */
  readonly image?: Ec2DiskImageDetail;

  /**
   * @schema Ec2DiskImage#Volume
   */
  readonly volume?: Ec2VolumeDetail;

}

/**
 * @schema Ec2ImportInstanceLaunchSpecification
 */
export interface Ec2ImportInstanceLaunchSpecification {
  /**
   * @schema Ec2ImportInstanceLaunchSpecification#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#Monitoring
   */
  readonly monitoring?: boolean;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#Placement
   */
  readonly placement?: Ec2Placement;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2ImportInstanceLaunchSpecification#UserData
   */
  readonly userData?: Ec2UserData;

}

/**
 * @schema Ec2SnapshotDiskContainer
 */
export interface Ec2SnapshotDiskContainer {
  /**
   * @schema Ec2SnapshotDiskContainer#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2SnapshotDiskContainer#Format
   */
  readonly format?: string;

  /**
   * @schema Ec2SnapshotDiskContainer#Url
   */
  readonly url?: string;

  /**
   * @schema Ec2SnapshotDiskContainer#UserBucket
   */
  readonly userBucket?: Ec2UserBucket;

}

/**
 * @schema Ec2SnapshotTaskDetail
 */
export interface Ec2SnapshotTaskDetail {
  /**
   * @schema Ec2SnapshotTaskDetail#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#DiskImageSize
   */
  readonly diskImageSize?: number;

  /**
   * @schema Ec2SnapshotTaskDetail#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2SnapshotTaskDetail#Format
   */
  readonly format?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#Progress
   */
  readonly progress?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#Url
   */
  readonly url?: string;

  /**
   * @schema Ec2SnapshotTaskDetail#UserBucket
   */
  readonly userBucket?: Ec2UserBucketDetails;

}

/**
 * @schema Ec2DiskImageDetail
 */
export interface Ec2DiskImageDetail {
  /**
   * @schema Ec2DiskImageDetail#Bytes
   */
  readonly bytes: number;

  /**
   * @schema Ec2DiskImageDetail#Format
   */
  readonly format: string;

  /**
   * @schema Ec2DiskImageDetail#ImportManifestUrl
   */
  readonly importManifestUrl: string;

}

/**
 * @schema Ec2VolumeDetail
 */
export interface Ec2VolumeDetail {
  /**
   * @schema Ec2VolumeDetail#Size
   */
  readonly size: number;

}

/**
 * @schema Ec2DnsServersOptionsModifyStructure
 */
export interface Ec2DnsServersOptionsModifyStructure {
  /**
   * @schema Ec2DnsServersOptionsModifyStructure#CustomDnsServers
   */
  readonly customDnsServers?: string[];

  /**
   * @schema Ec2DnsServersOptionsModifyStructure#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2LoadPermissionModifications
 */
export interface Ec2LoadPermissionModifications {
  /**
   * @schema Ec2LoadPermissionModifications#Add
   */
  readonly add?: Ec2LoadPermissionRequest[];

  /**
   * @schema Ec2LoadPermissionModifications#Remove
   */
  readonly remove?: Ec2LoadPermissionRequest[];

}

/**
 * @schema Ec2LaunchPermissionModifications
 */
export interface Ec2LaunchPermissionModifications {
  /**
   * @schema Ec2LaunchPermissionModifications#Add
   */
  readonly add?: Ec2LaunchPermission[];

  /**
   * @schema Ec2LaunchPermissionModifications#Remove
   */
  readonly remove?: Ec2LaunchPermission[];

}

/**
 * @schema Ec2InstanceBlockDeviceMappingSpecification
 */
export interface Ec2InstanceBlockDeviceMappingSpecification {
  /**
   * @schema Ec2InstanceBlockDeviceMappingSpecification#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2InstanceBlockDeviceMappingSpecification#Ebs
   */
  readonly ebs?: Ec2EbsInstanceBlockDeviceSpecification;

  /**
   * @schema Ec2InstanceBlockDeviceMappingSpecification#NoDevice
   */
  readonly noDevice?: string;

  /**
   * @schema Ec2InstanceBlockDeviceMappingSpecification#VirtualName
   */
  readonly virtualName?: string;

}

/**
 * @schema Ec2BlobAttributeValue
 */
export interface Ec2BlobAttributeValue {
  /**
   * @schema Ec2BlobAttributeValue#Value
   */
  readonly value?: any;

}

/**
 * @schema Ec2CapacityReservationSpecification
 */
export interface Ec2CapacityReservationSpecification {
  /**
   * @schema Ec2CapacityReservationSpecification#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema Ec2CapacityReservationSpecification#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: Ec2CapacityReservationTarget;

}

/**
 * @schema Ec2InstanceCreditSpecificationRequest
 */
export interface Ec2InstanceCreditSpecificationRequest {
  /**
   * @schema Ec2InstanceCreditSpecificationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceCreditSpecificationRequest#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema Ec2SuccessfulInstanceCreditSpecificationItem
 */
export interface Ec2SuccessfulInstanceCreditSpecificationItem {
  /**
   * @schema Ec2SuccessfulInstanceCreditSpecificationItem#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema Ec2UnsuccessfulInstanceCreditSpecificationItem
 */
export interface Ec2UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * @schema Ec2UnsuccessfulInstanceCreditSpecificationItem#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2UnsuccessfulInstanceCreditSpecificationItem#Error
   */
  readonly error?: Ec2UnsuccessfulInstanceCreditSpecificationItemError;

}

/**
 * @schema Ec2InstanceStatusEvent
 */
export interface Ec2InstanceStatusEvent {
  /**
   * @schema Ec2InstanceStatusEvent#InstanceEventId
   */
  readonly instanceEventId?: string;

  /**
   * @schema Ec2InstanceStatusEvent#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2InstanceStatusEvent#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2InstanceStatusEvent#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema Ec2InstanceStatusEvent#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema Ec2InstanceStatusEvent#NotBeforeDeadline
   */
  readonly notBeforeDeadline?: string;

}

/**
 * @schema Ec2InstanceMetadataOptionsResponse
 */
export interface Ec2InstanceMetadataOptionsResponse {
  /**
   * @schema Ec2InstanceMetadataOptionsResponse#State
   */
  readonly state?: string;

  /**
   * @schema Ec2InstanceMetadataOptionsResponse#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema Ec2InstanceMetadataOptionsResponse#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema Ec2InstanceMetadataOptionsResponse#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema Ec2RemovePrefixListEntry
 */
export interface Ec2RemovePrefixListEntry {
  /**
   * @schema Ec2RemovePrefixListEntry#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema Ec2NetworkInterfaceAttachmentChanges
 */
export interface Ec2NetworkInterfaceAttachmentChanges {
  /**
   * @schema Ec2NetworkInterfaceAttachmentChanges#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema Ec2NetworkInterfaceAttachmentChanges#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

}

/**
 * @schema Ec2ReservedInstancesConfiguration
 */
export interface Ec2ReservedInstancesConfiguration {
  /**
   * @schema Ec2ReservedInstancesConfiguration#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ReservedInstancesConfiguration#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2ReservedInstancesConfiguration#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ReservedInstancesConfiguration#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ReservedInstancesConfiguration#Scope
   */
  readonly scope?: string;

}

/**
 * @schema Ec2CreateVolumePermissionModifications
 */
export interface Ec2CreateVolumePermissionModifications {
  /**
   * @schema Ec2CreateVolumePermissionModifications#Add
   */
  readonly add?: Ec2CreateVolumePermission[];

  /**
   * @schema Ec2CreateVolumePermissionModifications#Remove
   */
  readonly remove?: Ec2CreateVolumePermission[];

}

/**
 * @schema Ec2LaunchTemplateConfig
 */
export interface Ec2LaunchTemplateConfig {
  /**
   * @schema Ec2LaunchTemplateConfig#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: Ec2FleetLaunchTemplateSpecification;

  /**
   * @schema Ec2LaunchTemplateConfig#Overrides
   */
  readonly overrides?: Ec2LaunchTemplateOverrides[];

}

/**
 * @schema Ec2ModifyTransitGatewayOptions
 */
export interface Ec2ModifyTransitGatewayOptions {
  /**
   * @schema Ec2ModifyTransitGatewayOptions#VpnEcmpSupport
   */
  readonly vpnEcmpSupport?: string;

  /**
   * @schema Ec2ModifyTransitGatewayOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema Ec2ModifyTransitGatewayOptions#AutoAcceptSharedAttachments
   */
  readonly autoAcceptSharedAttachments?: string;

  /**
   * @schema Ec2ModifyTransitGatewayOptions#DefaultRouteTableAssociation
   */
  readonly defaultRouteTableAssociation?: string;

  /**
   * @schema Ec2ModifyTransitGatewayOptions#AssociationDefaultRouteTableId
   */
  readonly associationDefaultRouteTableId?: string;

  /**
   * @schema Ec2ModifyTransitGatewayOptions#DefaultRouteTablePropagation
   */
  readonly defaultRouteTablePropagation?: string;

  /**
   * @schema Ec2ModifyTransitGatewayOptions#PropagationDefaultRouteTableId
   */
  readonly propagationDefaultRouteTableId?: string;

}

/**
 * @schema Ec2ModifyTransitGatewayVpcAttachmentRequestOptions
 */
export interface Ec2ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequestOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequestOptions#Ipv6Support
   */
  readonly ipv6Support?: string;

  /**
   * @schema Ec2ModifyTransitGatewayVpcAttachmentRequestOptions#ApplianceModeSupport
   */
  readonly applianceModeSupport?: string;

}

/**
 * @schema Ec2PeeringConnectionOptionsRequest
 */
export interface Ec2PeeringConnectionOptionsRequest {
  /**
   * @schema Ec2PeeringConnectionOptionsRequest#AllowDnsResolutionFromRemoteVpc
   */
  readonly allowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @schema Ec2PeeringConnectionOptionsRequest#AllowEgressFromLocalClassicLinkToRemoteVpc
   */
  readonly allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @schema Ec2PeeringConnectionOptionsRequest#AllowEgressFromLocalVpcToRemoteClassicLink
   */
  readonly allowEgressFromLocalVpcToRemoteClassicLink?: boolean;

}

/**
 * @schema Ec2PeeringConnectionOptions
 */
export interface Ec2PeeringConnectionOptions {
  /**
   * @schema Ec2PeeringConnectionOptions#AllowDnsResolutionFromRemoteVpc
   */
  readonly allowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @schema Ec2PeeringConnectionOptions#AllowEgressFromLocalClassicLinkToRemoteVpc
   */
  readonly allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @schema Ec2PeeringConnectionOptions#AllowEgressFromLocalVpcToRemoteClassicLink
   */
  readonly allowEgressFromLocalVpcToRemoteClassicLink?: boolean;

}

/**
 * @schema Ec2ModifyVpnTunnelOptionsSpecification
 */
export interface Ec2ModifyVpnTunnelOptionsSpecification {
  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#TunnelInsideCidr
   */
  readonly tunnelInsideCidr?: string;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#TunnelInsideIpv6Cidr
   */
  readonly tunnelInsideIpv6Cidr?: string;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#PreSharedKey
   */
  readonly preSharedKey?: string;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase1LifetimeSeconds
   */
  readonly phase1LifetimeSeconds?: number;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase2LifetimeSeconds
   */
  readonly phase2LifetimeSeconds?: number;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#RekeyMarginTimeSeconds
   */
  readonly rekeyMarginTimeSeconds?: number;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#RekeyFuzzPercentage
   */
  readonly rekeyFuzzPercentage?: number;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#ReplayWindowSize
   */
  readonly replayWindowSize?: number;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#DPDTimeoutSeconds
   */
  readonly dpdTimeoutSeconds?: number;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#DPDTimeoutAction
   */
  readonly dpdTimeoutAction?: string;

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase1EncryptionAlgorithms
   */
  readonly phase1EncryptionAlgorithms?: Ec2Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase2EncryptionAlgorithms
   */
  readonly phase2EncryptionAlgorithms?: Ec2Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase1IntegrityAlgorithms
   */
  readonly phase1IntegrityAlgorithms?: Ec2Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase2IntegrityAlgorithms
   */
  readonly phase2IntegrityAlgorithms?: Ec2Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase1DHGroupNumbers
   */
  readonly phase1DhGroupNumbers?: Ec2Phase1DhGroupNumbersRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#Phase2DHGroupNumbers
   */
  readonly phase2DhGroupNumbers?: Ec2Phase2DhGroupNumbersRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#IKEVersions
   */
  readonly ikeVersions?: Ec2IkeVersionsRequestListValue[];

  /**
   * @schema Ec2ModifyVpnTunnelOptionsSpecification#StartupAction
   */
  readonly startupAction?: string;

}

/**
 * @schema Ec2InstanceMonitoring
 */
export interface Ec2InstanceMonitoring {
  /**
   * @schema Ec2InstanceMonitoring#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceMonitoring#Monitoring
   */
  readonly monitoring?: Ec2Monitoring;

}

/**
 * @schema Ec2CidrAuthorizationContext
 */
export interface Ec2CidrAuthorizationContext {
  /**
   * @schema Ec2CidrAuthorizationContext#Message
   */
  readonly message: string;

  /**
   * @schema Ec2CidrAuthorizationContext#Signature
   */
  readonly signature: string;

}

/**
 * @schema Ec2ReservedInstanceLimitPrice
 */
export interface Ec2ReservedInstanceLimitPrice {
  /**
   * @schema Ec2ReservedInstanceLimitPrice#Amount
   */
  readonly amount?: number;

  /**
   * @schema Ec2ReservedInstanceLimitPrice#CurrencyCode
   */
  readonly currencyCode?: string;

}

/**
 * @schema Ec2PurchaseRequest
 */
export interface Ec2PurchaseRequest {
  /**
   * @schema Ec2PurchaseRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema Ec2PurchaseRequest#PurchaseToken
   */
  readonly purchaseToken: string;

}

/**
 * @schema Ec2RegisterInstanceTagAttributeRequest
 */
export interface Ec2RegisterInstanceTagAttributeRequest {
  /**
   * @schema Ec2RegisterInstanceTagAttributeRequest#IncludeAllTagsOfInstance
   */
  readonly includeAllTagsOfInstance?: boolean;

  /**
   * @schema Ec2RegisterInstanceTagAttributeRequest#InstanceTagKeys
   */
  readonly instanceTagKeys?: string[];

}

/**
 * @schema Ec2TransitGatewayMulticastRegisteredGroupMembers
 */
export interface Ec2TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * @schema Ec2TransitGatewayMulticastRegisteredGroupMembers#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastRegisteredGroupMembers#RegisteredNetworkInterfaceIds
   */
  readonly registeredNetworkInterfaceIds?: string[];

  /**
   * @schema Ec2TransitGatewayMulticastRegisteredGroupMembers#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema Ec2TransitGatewayMulticastRegisteredGroupSources
 */
export interface Ec2TransitGatewayMulticastRegisteredGroupSources {
  /**
   * @schema Ec2TransitGatewayMulticastRegisteredGroupSources#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastRegisteredGroupSources#RegisteredNetworkInterfaceIds
   */
  readonly registeredNetworkInterfaceIds?: string[];

  /**
   * @schema Ec2TransitGatewayMulticastRegisteredGroupSources#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema Ec2SpotFleetRequestConfigData
 */
export interface Ec2SpotFleetRequestConfigData {
  /**
   * @schema Ec2SpotFleetRequestConfigData#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#OnDemandAllocationStrategy
   */
  readonly onDemandAllocationStrategy?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#SpotMaintenanceStrategies
   */
  readonly spotMaintenanceStrategies?: Ec2SpotMaintenanceStrategies;

  /**
   * @schema Ec2SpotFleetRequestConfigData#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#FulfilledCapacity
   */
  readonly fulfilledCapacity?: number;

  /**
   * @schema Ec2SpotFleetRequestConfigData#OnDemandFulfilledCapacity
   */
  readonly onDemandFulfilledCapacity?: number;

  /**
   * @schema Ec2SpotFleetRequestConfigData#IamFleetRole
   */
  readonly iamFleetRole: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#LaunchSpecifications
   */
  readonly launchSpecifications?: Ec2SpotFleetLaunchSpecification[];

  /**
   * @schema Ec2SpotFleetRequestConfigData#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: Ec2LaunchTemplateConfig[];

  /**
   * @schema Ec2SpotFleetRequestConfigData#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#TargetCapacity
   */
  readonly targetCapacity: number;

  /**
   * @schema Ec2SpotFleetRequestConfigData#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

  /**
   * @schema Ec2SpotFleetRequestConfigData#OnDemandMaxTotalPrice
   */
  readonly onDemandMaxTotalPrice?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#SpotMaxTotalPrice
   */
  readonly spotMaxTotalPrice?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#TerminateInstancesWithExpiration
   */
  readonly terminateInstancesWithExpiration?: boolean;

  /**
   * @schema Ec2SpotFleetRequestConfigData#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#ReplaceUnhealthyInstances
   */
  readonly replaceUnhealthyInstances?: boolean;

  /**
   * @schema Ec2SpotFleetRequestConfigData#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

  /**
   * @schema Ec2SpotFleetRequestConfigData#LoadBalancersConfig
   */
  readonly loadBalancersConfig?: Ec2LoadBalancersConfig;

  /**
   * @schema Ec2SpotFleetRequestConfigData#InstancePoolsToUseCount
   */
  readonly instancePoolsToUseCount?: number;

  /**
   * @schema Ec2SpotFleetRequestConfigData#TagSpecifications
   */
  readonly tagSpecifications?: Ec2TagSpecification[];

}

/**
 * @schema Ec2RequestSpotLaunchSpecification
 */
export interface Ec2RequestSpotLaunchSpecification {
  /**
   * @schema Ec2RequestSpotLaunchSpecification#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2RequestSpotLaunchSpecification#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema Ec2RequestSpotLaunchSpecification#AddressingType
   */
  readonly addressingType?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2RequestSpotLaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2IamInstanceProfileSpecification;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#Monitoring
   */
  readonly monitoring?: Ec2RunInstancesMonitoringEnabled;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2InstanceNetworkInterfaceSpecification[];

  /**
   * @schema Ec2RequestSpotLaunchSpecification#Placement
   */
  readonly placement?: Ec2SpotPlacement;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2RequestSpotLaunchSpecification#UserData
   */
  readonly userData?: string;

}

/**
 * @schema Ec2RunInstancesMonitoringEnabled
 */
export interface Ec2RunInstancesMonitoringEnabled {
  /**
   * @schema Ec2RunInstancesMonitoringEnabled#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema Ec2Placement
 */
export interface Ec2Placement {
  /**
   * @schema Ec2Placement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2Placement#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema Ec2Placement#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2Placement#PartitionNumber
   */
  readonly partitionNumber?: number;

  /**
   * @schema Ec2Placement#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Ec2Placement#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Ec2Placement#SpreadDomain
   */
  readonly spreadDomain?: string;

  /**
   * @schema Ec2Placement#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

}

/**
 * @schema Ec2InstanceNetworkInterfaceSpecification
 */
export interface Ec2InstanceNetworkInterfaceSpecification {
  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2InstanceIpv6Address[];

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#PrivateIpAddresses
   */
  readonly privateIpAddresses?: Ec2PrivateIpAddressSpecification[];

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#AssociateCarrierIpAddress
   */
  readonly associateCarrierIpAddress?: boolean;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceSpecification#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema Ec2ElasticGpuSpecification
 */
export interface Ec2ElasticGpuSpecification {
  /**
   * @schema Ec2ElasticGpuSpecification#Type
   */
  readonly type: string;

}

/**
 * @schema Ec2ElasticInferenceAccelerator
 */
export interface Ec2ElasticInferenceAccelerator {
  /**
   * @schema Ec2ElasticInferenceAccelerator#Type
   */
  readonly type: string;

  /**
   * @schema Ec2ElasticInferenceAccelerator#Count
   */
  readonly count?: number;

}

/**
 * @schema Ec2LaunchTemplateSpecification
 */
export interface Ec2LaunchTemplateSpecification {
  /**
   * @schema Ec2LaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2LaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2LaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema Ec2InstanceMarketOptionsRequest
 */
export interface Ec2InstanceMarketOptionsRequest {
  /**
   * @schema Ec2InstanceMarketOptionsRequest#MarketType
   */
  readonly marketType?: string;

  /**
   * @schema Ec2InstanceMarketOptionsRequest#SpotOptions
   */
  readonly spotOptions?: Ec2SpotMarketOptions;

}

/**
 * @schema Ec2CreditSpecificationRequest
 */
export interface Ec2CreditSpecificationRequest {
  /**
   * @schema Ec2CreditSpecificationRequest#CpuCredits
   */
  readonly cpuCredits: string;

}

/**
 * @schema Ec2CpuOptionsRequest
 */
export interface Ec2CpuOptionsRequest {
  /**
   * @schema Ec2CpuOptionsRequest#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema Ec2CpuOptionsRequest#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema Ec2HibernationOptionsRequest
 */
export interface Ec2HibernationOptionsRequest {
  /**
   * @schema Ec2HibernationOptionsRequest#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema Ec2LicenseConfigurationRequest
 */
export interface Ec2LicenseConfigurationRequest {
  /**
   * @schema Ec2LicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema Ec2InstanceMetadataOptionsRequest
 */
export interface Ec2InstanceMetadataOptionsRequest {
  /**
   * @schema Ec2InstanceMetadataOptionsRequest#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema Ec2InstanceMetadataOptionsRequest#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema Ec2InstanceMetadataOptionsRequest#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema Ec2EnclaveOptionsRequest
 */
export interface Ec2EnclaveOptionsRequest {
  /**
   * @schema Ec2EnclaveOptionsRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2Instance
 */
export interface Ec2Instance {
  /**
   * @schema Ec2Instance#AmiLaunchIndex
   */
  readonly amiLaunchIndex?: number;

  /**
   * @schema Ec2Instance#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2Instance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2Instance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2Instance#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2Instance#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2Instance#LaunchTime
   */
  readonly launchTime?: string;

  /**
   * @schema Ec2Instance#Monitoring
   */
  readonly monitoring?: Ec2Monitoring;

  /**
   * @schema Ec2Instance#Placement
   */
  readonly placement?: Ec2Placement;

  /**
   * @schema Ec2Instance#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2Instance#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2Instance#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2Instance#ProductCodes
   */
  readonly productCodes?: Ec2ProductCode[];

  /**
   * @schema Ec2Instance#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema Ec2Instance#PublicIpAddress
   */
  readonly publicIpAddress?: string;

  /**
   * @schema Ec2Instance#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2Instance#State
   */
  readonly state?: Ec2InstanceState;

  /**
   * @schema Ec2Instance#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema Ec2Instance#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2Instance#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2Instance#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Ec2Instance#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2InstanceBlockDeviceMapping[];

  /**
   * @schema Ec2Instance#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Ec2Instance#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2Instance#EnaSupport
   */
  readonly enaSupport?: boolean;

  /**
   * @schema Ec2Instance#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Ec2Instance#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2IamInstanceProfile;

  /**
   * @schema Ec2Instance#InstanceLifecycle
   */
  readonly instanceLifecycle?: string;

  /**
   * @schema Ec2Instance#ElasticGpuAssociations
   */
  readonly elasticGpuAssociations?: Ec2ElasticGpuAssociation[];

  /**
   * @schema Ec2Instance#ElasticInferenceAcceleratorAssociations
   */
  readonly elasticInferenceAcceleratorAssociations?: Ec2ElasticInferenceAcceleratorAssociation[];

  /**
   * @schema Ec2Instance#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2InstanceNetworkInterface[];

  /**
   * @schema Ec2Instance#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Ec2Instance#RootDeviceName
   */
  readonly rootDeviceName?: string;

  /**
   * @schema Ec2Instance#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema Ec2Instance#SecurityGroups
   */
  readonly securityGroups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2Instance#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema Ec2Instance#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema Ec2Instance#SriovNetSupport
   */
  readonly sriovNetSupport?: string;

  /**
   * @schema Ec2Instance#StateReason
   */
  readonly stateReason?: Ec2StateReason;

  /**
   * @schema Ec2Instance#Tags
   */
  readonly tags?: Ec2Tag[];

  /**
   * @schema Ec2Instance#VirtualizationType
   */
  readonly virtualizationType?: string;

  /**
   * @schema Ec2Instance#CpuOptions
   */
  readonly cpuOptions?: Ec2CpuOptions;

  /**
   * @schema Ec2Instance#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema Ec2Instance#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: Ec2CapacityReservationSpecificationResponse;

  /**
   * @schema Ec2Instance#HibernationOptions
   */
  readonly hibernationOptions?: Ec2HibernationOptions;

  /**
   * @schema Ec2Instance#Licenses
   */
  readonly licenses?: Ec2LicenseConfiguration[];

  /**
   * @schema Ec2Instance#MetadataOptions
   */
  readonly metadataOptions?: Ec2InstanceMetadataOptionsResponse;

  /**
   * @schema Ec2Instance#EnclaveOptions
   */
  readonly enclaveOptions?: Ec2EnclaveOptions;

}

/**
 * @schema Ec2ScheduledInstancesLaunchSpecification
 */
export interface Ec2ScheduledInstancesLaunchSpecification {
  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2ScheduledInstancesBlockDeviceMapping[];

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2ScheduledInstancesIamInstanceProfile;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#ImageId
   */
  readonly imageId: string;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#Monitoring
   */
  readonly monitoring?: Ec2ScheduledInstancesMonitoring;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2ScheduledInstancesNetworkInterface[];

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#Placement
   */
  readonly placement?: Ec2ScheduledInstancesPlacement;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2ScheduledInstancesLaunchSpecification#UserData
   */
  readonly userData?: string;

}

/**
 * @schema Ec2TransitGatewayMulticastGroup
 */
export interface Ec2TransitGatewayMulticastGroup {
  /**
   * @schema Ec2TransitGatewayMulticastGroup#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#GroupMember
   */
  readonly groupMember?: boolean;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#GroupSource
   */
  readonly groupSource?: boolean;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#MemberType
   */
  readonly memberType?: string;

  /**
   * @schema Ec2TransitGatewayMulticastGroup#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema Ec2InstanceStateChange
 */
export interface Ec2InstanceStateChange {
  /**
   * @schema Ec2InstanceStateChange#CurrentState
   */
  readonly currentState?: Ec2InstanceState;

  /**
   * @schema Ec2InstanceStateChange#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceStateChange#PreviousState
   */
  readonly previousState?: Ec2InstanceState;

}

/**
 * @schema Ec2TerminateConnectionStatus
 */
export interface Ec2TerminateConnectionStatus {
  /**
   * @schema Ec2TerminateConnectionStatus#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema Ec2TerminateConnectionStatus#PreviousStatus
   */
  readonly previousStatus?: Ec2ClientVpnConnectionStatus;

  /**
   * @schema Ec2TerminateConnectionStatus#CurrentStatus
   */
  readonly currentStatus?: Ec2ClientVpnConnectionStatus;

}

/**
 * @schema Ec2PeeringTgwInfo
 */
export interface Ec2PeeringTgwInfo {
  /**
   * @schema Ec2PeeringTgwInfo#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2PeeringTgwInfo#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2PeeringTgwInfo#Region
   */
  readonly region?: string;

}

/**
 * @schema Ec2PeeringAttachmentStatus
 */
export interface Ec2PeeringAttachmentStatus {
  /**
   * @schema Ec2PeeringAttachmentStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2PeeringAttachmentStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2TransitGatewayVpcAttachmentOptions
 */
export interface Ec2TransitGatewayVpcAttachmentOptions {
  /**
   * @schema Ec2TransitGatewayVpcAttachmentOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachmentOptions#Ipv6Support
   */
  readonly ipv6Support?: string;

  /**
   * @schema Ec2TransitGatewayVpcAttachmentOptions#ApplianceModeSupport
   */
  readonly applianceModeSupport?: string;

}

/**
 * @schema Ec2UnsuccessfulItemError
 */
export interface Ec2UnsuccessfulItemError {
  /**
   * @schema Ec2UnsuccessfulItemError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2UnsuccessfulItemError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2VpcPeeringConnectionVpcInfo
 */
export interface Ec2VpcPeeringConnectionVpcInfo {
  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#Ipv6CidrBlockSet
   */
  readonly ipv6CidrBlockSet?: Ec2Ipv6CidrBlock[];

  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#CidrBlockSet
   */
  readonly cidrBlockSet?: Ec2CidrBlock[];

  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#PeeringOptions
   */
  readonly peeringOptions?: Ec2VpcPeeringConnectionOptionsDescription;

  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2VpcPeeringConnectionVpcInfo#Region
   */
  readonly region?: string;

}

/**
 * @schema Ec2VpcPeeringConnectionStateReason
 */
export interface Ec2VpcPeeringConnectionStateReason {
  /**
   * @schema Ec2VpcPeeringConnectionStateReason#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2VpcPeeringConnectionStateReason#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2IamInstanceProfile
 */
export interface Ec2IamInstanceProfile {
  /**
   * @schema Ec2IamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema Ec2IamInstanceProfile#Id
   */
  readonly id?: string;

}

/**
 * @schema Ec2SubnetCidrBlockState
 */
export interface Ec2SubnetCidrBlockState {
  /**
   * @schema Ec2SubnetCidrBlockState#State
   */
  readonly state?: string;

  /**
   * @schema Ec2SubnetCidrBlockState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema Ec2SubnetAssociation
 */
export interface Ec2SubnetAssociation {
  /**
   * @schema Ec2SubnetAssociation#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2SubnetAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2VpcCidrBlockState
 */
export interface Ec2VpcCidrBlockState {
  /**
   * @schema Ec2VpcCidrBlockState#State
   */
  readonly state?: string;

  /**
   * @schema Ec2VpcCidrBlockState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema Ec2IpRange
 */
export interface Ec2IpRange {
  /**
   * @schema Ec2IpRange#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema Ec2IpRange#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2Ipv6Range
 */
export interface Ec2Ipv6Range {
  /**
   * @schema Ec2Ipv6Range#CidrIpv6
   */
  readonly cidrIpv6?: string;

  /**
   * @schema Ec2Ipv6Range#Description
   */
  readonly description?: string;

}

/**
 * @schema Ec2PrefixListId
 */
export interface Ec2PrefixListId {
  /**
   * @schema Ec2PrefixListId#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2PrefixListId#PrefixListId
   */
  readonly prefixListId?: string;

}

/**
 * @schema Ec2UserIdGroupPair
 */
export interface Ec2UserIdGroupPair {
  /**
   * @schema Ec2UserIdGroupPair#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2UserIdGroupPair#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2UserIdGroupPair#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2UserIdGroupPair#PeeringStatus
   */
  readonly peeringStatus?: string;

  /**
   * @schema Ec2UserIdGroupPair#UserId
   */
  readonly userId?: string;

  /**
   * @schema Ec2UserIdGroupPair#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2UserIdGroupPair#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2S3Storage
 */
export interface Ec2S3Storage {
  /**
   * @schema Ec2S3Storage#AWSAccessKeyId
   */
  readonly awsAccessKeyId?: string;

  /**
   * @schema Ec2S3Storage#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema Ec2S3Storage#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema Ec2S3Storage#UploadPolicy
   */
  readonly uploadPolicy?: any;

  /**
   * @schema Ec2S3Storage#UploadPolicySignature
   */
  readonly uploadPolicySignature?: string;

}

/**
 * @schema Ec2BundleTaskError
 */
export interface Ec2BundleTaskError {
  /**
   * @schema Ec2BundleTaskError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2BundleTaskError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2InstanceCount
 */
export interface Ec2InstanceCount {
  /**
   * @schema Ec2InstanceCount#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2InstanceCount#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2PriceSchedule
 */
export interface Ec2PriceSchedule {
  /**
   * @schema Ec2PriceSchedule#Active
   */
  readonly active?: boolean;

  /**
   * @schema Ec2PriceSchedule#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Ec2PriceSchedule#Price
   */
  readonly price?: number;

  /**
   * @schema Ec2PriceSchedule#Term
   */
  readonly term?: number;

}

/**
 * @schema Ec2CancelSpotFleetRequestsError
 */
export interface Ec2CancelSpotFleetRequestsError {
  /**
   * @schema Ec2CancelSpotFleetRequestsError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2CancelSpotFleetRequestsError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2DirectoryServiceAuthenticationRequest
 */
export interface Ec2DirectoryServiceAuthenticationRequest {
  /**
   * @schema Ec2DirectoryServiceAuthenticationRequest#DirectoryId
   */
  readonly directoryId?: string;

}

/**
 * @schema Ec2CertificateAuthenticationRequest
 */
export interface Ec2CertificateAuthenticationRequest {
  /**
   * @schema Ec2CertificateAuthenticationRequest#ClientRootCertificateChainArn
   */
  readonly clientRootCertificateChainArn?: string;

}

/**
 * @schema Ec2FederatedAuthenticationRequest
 */
export interface Ec2FederatedAuthenticationRequest {
  /**
   * @schema Ec2FederatedAuthenticationRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema Ec2FederatedAuthenticationRequest#SelfServiceSAMLProviderArn
   */
  readonly selfServiceSamlProviderArn?: string;

}

/**
 * @schema Ec2DhcpConfiguration
 */
export interface Ec2DhcpConfiguration {
  /**
   * @schema Ec2DhcpConfiguration#Key
   */
  readonly key?: string;

  /**
   * @schema Ec2DhcpConfiguration#Values
   */
  readonly values?: Ec2AttributeValue[];

}

/**
 * @schema Ec2InternetGatewayAttachment
 */
export interface Ec2InternetGatewayAttachment {
  /**
   * @schema Ec2InternetGatewayAttachment#State
   */
  readonly state?: string;

  /**
   * @schema Ec2InternetGatewayAttachment#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema Ec2FleetSpotMaintenanceStrategiesRequest
 */
export interface Ec2FleetSpotMaintenanceStrategiesRequest {
  /**
   * @schema Ec2FleetSpotMaintenanceStrategiesRequest#CapacityRebalance
   */
  readonly capacityRebalance?: Ec2FleetSpotCapacityRebalanceRequest;

}

/**
 * @schema Ec2CapacityReservationOptionsRequest
 */
export interface Ec2CapacityReservationOptionsRequest {
  /**
   * @schema Ec2CapacityReservationOptionsRequest#UsageStrategy
   */
  readonly usageStrategy?: string;

}

/**
 * @schema Ec2FleetLaunchTemplateSpecificationRequest
 */
export interface Ec2FleetLaunchTemplateSpecificationRequest {
  /**
   * @schema Ec2FleetLaunchTemplateSpecificationRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2FleetLaunchTemplateSpecificationRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2FleetLaunchTemplateSpecificationRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema Ec2FleetLaunchTemplateOverridesRequest
 */
export interface Ec2FleetLaunchTemplateOverridesRequest {
  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema Ec2FleetLaunchTemplateOverridesRequest#Placement
   */
  readonly placement?: Ec2Placement;

}

/**
 * @schema Ec2LaunchTemplateAndOverridesResponse
 */
export interface Ec2LaunchTemplateAndOverridesResponse {
  /**
   * @schema Ec2LaunchTemplateAndOverridesResponse#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: Ec2FleetLaunchTemplateSpecification;

  /**
   * @schema Ec2LaunchTemplateAndOverridesResponse#Overrides
   */
  readonly overrides?: Ec2FleetLaunchTemplateOverrides;

}

/**
 * @schema Ec2EbsBlockDevice
 */
export interface Ec2EbsBlockDevice {
  /**
   * @schema Ec2EbsBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2EbsBlockDevice#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ec2EbsBlockDevice#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2EbsBlockDevice#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ec2EbsBlockDevice#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Ec2EbsBlockDevice#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2EbsBlockDevice#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema Ec2ExportToS3Task
 */
export interface Ec2ExportToS3Task {
  /**
   * @schema Ec2ExportToS3Task#ContainerFormat
   */
  readonly containerFormat?: string;

  /**
   * @schema Ec2ExportToS3Task#DiskImageFormat
   */
  readonly diskImageFormat?: string;

  /**
   * @schema Ec2ExportToS3Task#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema Ec2ExportToS3Task#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema Ec2InstanceExportDetails
 */
export interface Ec2InstanceExportDetails {
  /**
   * @schema Ec2InstanceExportDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2InstanceExportDetails#TargetEnvironment
   */
  readonly targetEnvironment?: string;

}

/**
 * @schema Ec2LaunchTemplateIamInstanceProfileSpecificationRequest
 */
export interface Ec2LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * @schema Ec2LaunchTemplateIamInstanceProfileSpecificationRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema Ec2LaunchTemplateIamInstanceProfileSpecificationRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2LaunchTemplateBlockDeviceMappingRequest
 */
export interface Ec2LaunchTemplateBlockDeviceMappingRequest {
  /**
   * @schema Ec2LaunchTemplateBlockDeviceMappingRequest#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2LaunchTemplateBlockDeviceMappingRequest#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema Ec2LaunchTemplateBlockDeviceMappingRequest#Ebs
   */
  readonly ebs?: Ec2LaunchTemplateEbsBlockDeviceRequest;

  /**
   * @schema Ec2LaunchTemplateBlockDeviceMappingRequest#NoDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
 */
export interface Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#AssociateCarrierIpAddress
   */
  readonly associateCarrierIpAddress?: boolean;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2InstanceIpv6AddressRequest[];

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses?: Ec2PrivateIpAddressSpecification[];

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema Ec2LaunchTemplatesMonitoringRequest
 */
export interface Ec2LaunchTemplatesMonitoringRequest {
  /**
   * @schema Ec2LaunchTemplatesMonitoringRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2LaunchTemplatePlacementRequest
 */
export interface Ec2LaunchTemplatePlacementRequest {
  /**
   * @schema Ec2LaunchTemplatePlacementRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#SpreadDomain
   */
  readonly spreadDomain?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

  /**
   * @schema Ec2LaunchTemplatePlacementRequest#PartitionNumber
   */
  readonly partitionNumber?: number;

}

/**
 * @schema Ec2LaunchTemplateTagSpecificationRequest
 */
export interface Ec2LaunchTemplateTagSpecificationRequest {
  /**
   * @schema Ec2LaunchTemplateTagSpecificationRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2LaunchTemplateTagSpecificationRequest#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2LaunchTemplateElasticInferenceAccelerator
 */
export interface Ec2LaunchTemplateElasticInferenceAccelerator {
  /**
   * @schema Ec2LaunchTemplateElasticInferenceAccelerator#Type
   */
  readonly type: string;

  /**
   * @schema Ec2LaunchTemplateElasticInferenceAccelerator#Count
   */
  readonly count?: number;

}

/**
 * @schema Ec2LaunchTemplateInstanceMarketOptionsRequest
 */
export interface Ec2LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * @schema Ec2LaunchTemplateInstanceMarketOptionsRequest#MarketType
   */
  readonly marketType?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceMarketOptionsRequest#SpotOptions
   */
  readonly spotOptions?: Ec2LaunchTemplateSpotMarketOptionsRequest;

}

/**
 * @schema Ec2LaunchTemplateCpuOptionsRequest
 */
export interface Ec2LaunchTemplateCpuOptionsRequest {
  /**
   * @schema Ec2LaunchTemplateCpuOptionsRequest#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema Ec2LaunchTemplateCpuOptionsRequest#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema Ec2LaunchTemplateCapacityReservationSpecificationRequest
 */
export interface Ec2LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * @schema Ec2LaunchTemplateCapacityReservationSpecificationRequest#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema Ec2LaunchTemplateCapacityReservationSpecificationRequest#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: Ec2CapacityReservationTarget;

}

/**
 * @schema Ec2LaunchTemplateLicenseConfigurationRequest
 */
export interface Ec2LaunchTemplateLicenseConfigurationRequest {
  /**
   * @schema Ec2LaunchTemplateLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema Ec2LaunchTemplateHibernationOptionsRequest
 */
export interface Ec2LaunchTemplateHibernationOptionsRequest {
  /**
   * @schema Ec2LaunchTemplateHibernationOptionsRequest#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema Ec2LaunchTemplateInstanceMetadataOptionsRequest
 */
export interface Ec2LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptionsRequest#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptionsRequest#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptionsRequest#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema Ec2LaunchTemplateEnclaveOptionsRequest
 */
export interface Ec2LaunchTemplateEnclaveOptionsRequest {
  /**
   * @schema Ec2LaunchTemplateEnclaveOptionsRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2ValidationError
 */
export interface Ec2ValidationError {
  /**
   * @schema Ec2ValidationError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ValidationError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2NatGatewayAddress
 */
export interface Ec2NatGatewayAddress {
  /**
   * @schema Ec2NatGatewayAddress#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2NatGatewayAddress#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2NatGatewayAddress#PrivateIp
   */
  readonly privateIp?: string;

  /**
   * @schema Ec2NatGatewayAddress#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * @schema Ec2ProvisionedBandwidth
 */
export interface Ec2ProvisionedBandwidth {
  /**
   * @schema Ec2ProvisionedBandwidth#ProvisionTime
   */
  readonly provisionTime?: string;

  /**
   * @schema Ec2ProvisionedBandwidth#Provisioned
   */
  readonly provisioned?: string;

  /**
   * @schema Ec2ProvisionedBandwidth#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema Ec2ProvisionedBandwidth#Requested
   */
  readonly requested?: string;

  /**
   * @schema Ec2ProvisionedBandwidth#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2NetworkAclAssociation
 */
export interface Ec2NetworkAclAssociation {
  /**
   * @schema Ec2NetworkAclAssociation#NetworkAclAssociationId
   */
  readonly networkAclAssociationId?: string;

  /**
   * @schema Ec2NetworkAclAssociation#NetworkAclId
   */
  readonly networkAclId?: string;

  /**
   * @schema Ec2NetworkAclAssociation#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema Ec2NetworkAclEntry
 */
export interface Ec2NetworkAclEntry {
  /**
   * @schema Ec2NetworkAclEntry#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Ec2NetworkAclEntry#Egress
   */
  readonly egress?: boolean;

  /**
   * @schema Ec2NetworkAclEntry#IcmpTypeCode
   */
  readonly icmpTypeCode?: Ec2IcmpTypeCode;

  /**
   * @schema Ec2NetworkAclEntry#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema Ec2NetworkAclEntry#PortRange
   */
  readonly portRange?: Ec2PortRange;

  /**
   * @schema Ec2NetworkAclEntry#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema Ec2NetworkAclEntry#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema Ec2NetworkAclEntry#RuleNumber
   */
  readonly ruleNumber?: number;

}

/**
 * @schema Ec2NetworkInterfaceAssociation
 */
export interface Ec2NetworkInterfaceAssociation {
  /**
   * @schema Ec2NetworkInterfaceAssociation#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Ec2NetworkInterfaceAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Ec2NetworkInterfaceAssociation#IpOwnerId
   */
  readonly ipOwnerId?: string;

  /**
   * @schema Ec2NetworkInterfaceAssociation#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema Ec2NetworkInterfaceAssociation#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Ec2NetworkInterfaceAssociation#CustomerOwnedIp
   */
  readonly customerOwnedIp?: string;

  /**
   * @schema Ec2NetworkInterfaceAssociation#CarrierIp
   */
  readonly carrierIp?: string;

}

/**
 * @schema Ec2NetworkInterfaceIpv6Address
 */
export interface Ec2NetworkInterfaceIpv6Address {
  /**
   * @schema Ec2NetworkInterfaceIpv6Address#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema Ec2NetworkInterfacePrivateIpAddress
 */
export interface Ec2NetworkInterfacePrivateIpAddress {
  /**
   * @schema Ec2NetworkInterfacePrivateIpAddress#Association
   */
  readonly association?: Ec2NetworkInterfaceAssociation;

  /**
   * @schema Ec2NetworkInterfacePrivateIpAddress#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema Ec2NetworkInterfacePrivateIpAddress#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2NetworkInterfacePrivateIpAddress#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema Ec2NetworkInterfacePermissionState
 */
export interface Ec2NetworkInterfacePermissionState {
  /**
   * @schema Ec2NetworkInterfacePermissionState#State
   */
  readonly state?: string;

  /**
   * @schema Ec2NetworkInterfacePermissionState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema Ec2RouteTableAssociation
 */
export interface Ec2RouteTableAssociation {
  /**
   * @schema Ec2RouteTableAssociation#Main
   */
  readonly main?: boolean;

  /**
   * @schema Ec2RouteTableAssociation#RouteTableAssociationId
   */
  readonly routeTableAssociationId?: string;

  /**
   * @schema Ec2RouteTableAssociation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema Ec2RouteTableAssociation#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2RouteTableAssociation#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema Ec2RouteTableAssociation#AssociationState
   */
  readonly associationState?: Ec2RouteTableAssociationState;

}

/**
 * @schema Ec2PropagatingVgw
 */
export interface Ec2PropagatingVgw {
  /**
   * @schema Ec2PropagatingVgw#GatewayId
   */
  readonly gatewayId?: string;

}

/**
 * @schema Ec2Route
 */
export interface Ec2Route {
  /**
   * @schema Ec2Route#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2Route#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Ec2Route#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Ec2Route#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema Ec2Route#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema Ec2Route#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2Route#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema Ec2Route#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema Ec2Route#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Ec2Route#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Ec2Route#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema Ec2Route#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2Route#Origin
   */
  readonly origin?: string;

  /**
   * @schema Ec2Route#State
   */
  readonly state?: string;

  /**
   * @schema Ec2Route#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema Ec2SpotInstanceStateFault
 */
export interface Ec2SpotInstanceStateFault {
  /**
   * @schema Ec2SpotInstanceStateFault#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2SpotInstanceStateFault#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2TrafficMirrorPortRange
 */
export interface Ec2TrafficMirrorPortRange {
  /**
   * @schema Ec2TrafficMirrorPortRange#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2TrafficMirrorPortRange#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema Ec2TransitGatewayOptions
 */
export interface Ec2TransitGatewayOptions {
  /**
   * @schema Ec2TransitGatewayOptions#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema Ec2TransitGatewayOptions#AutoAcceptSharedAttachments
   */
  readonly autoAcceptSharedAttachments?: string;

  /**
   * @schema Ec2TransitGatewayOptions#DefaultRouteTableAssociation
   */
  readonly defaultRouteTableAssociation?: string;

  /**
   * @schema Ec2TransitGatewayOptions#AssociationDefaultRouteTableId
   */
  readonly associationDefaultRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayOptions#DefaultRouteTablePropagation
   */
  readonly defaultRouteTablePropagation?: string;

  /**
   * @schema Ec2TransitGatewayOptions#PropagationDefaultRouteTableId
   */
  readonly propagationDefaultRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayOptions#VpnEcmpSupport
   */
  readonly vpnEcmpSupport?: string;

  /**
   * @schema Ec2TransitGatewayOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema Ec2TransitGatewayOptions#MulticastSupport
   */
  readonly multicastSupport?: string;

}

/**
 * @schema Ec2TransitGatewayPrefixListAttachment
 */
export interface Ec2TransitGatewayPrefixListAttachment {
  /**
   * @schema Ec2TransitGatewayPrefixListAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayPrefixListAttachment#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2TransitGatewayPrefixListAttachment#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * @schema Ec2TransitGatewayRouteAttachment
 */
export interface Ec2TransitGatewayRouteAttachment {
  /**
   * @schema Ec2TransitGatewayRouteAttachment#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema Ec2TransitGatewayRouteAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema Ec2TransitGatewayRouteAttachment#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema Ec2SecurityGroupIdentifier
 */
export interface Ec2SecurityGroupIdentifier {
  /**
   * @schema Ec2SecurityGroupIdentifier#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema Ec2SecurityGroupIdentifier#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema Ec2DnsEntry
 */
export interface Ec2DnsEntry {
  /**
   * @schema Ec2DnsEntry#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema Ec2DnsEntry#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema Ec2LastError
 */
export interface Ec2LastError {
  /**
   * @schema Ec2LastError#Message
   */
  readonly message?: string;

  /**
   * @schema Ec2LastError#Code
   */
  readonly code?: string;

}

/**
 * @schema Ec2ServiceTypeDetail
 */
export interface Ec2ServiceTypeDetail {
  /**
   * @schema Ec2ServiceTypeDetail#ServiceType
   */
  readonly serviceType?: string;

}

/**
 * @schema Ec2PrivateDnsNameConfiguration
 */
export interface Ec2PrivateDnsNameConfiguration {
  /**
   * @schema Ec2PrivateDnsNameConfiguration#State
   */
  readonly state?: string;

  /**
   * @schema Ec2PrivateDnsNameConfiguration#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2PrivateDnsNameConfiguration#Value
   */
  readonly value?: string;

  /**
   * @schema Ec2PrivateDnsNameConfiguration#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2VpnTunnelOptionsSpecification
 */
export interface Ec2VpnTunnelOptionsSpecification {
  /**
   * @schema Ec2VpnTunnelOptionsSpecification#TunnelInsideCidr
   */
  readonly tunnelInsideCidr?: string;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#TunnelInsideIpv6Cidr
   */
  readonly tunnelInsideIpv6Cidr?: string;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#PreSharedKey
   */
  readonly preSharedKey?: string;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase1LifetimeSeconds
   */
  readonly phase1LifetimeSeconds?: number;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase2LifetimeSeconds
   */
  readonly phase2LifetimeSeconds?: number;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#RekeyMarginTimeSeconds
   */
  readonly rekeyMarginTimeSeconds?: number;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#RekeyFuzzPercentage
   */
  readonly rekeyFuzzPercentage?: number;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#ReplayWindowSize
   */
  readonly replayWindowSize?: number;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#DPDTimeoutSeconds
   */
  readonly dpdTimeoutSeconds?: number;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#DPDTimeoutAction
   */
  readonly dpdTimeoutAction?: string;

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase1EncryptionAlgorithms
   */
  readonly phase1EncryptionAlgorithms?: Ec2Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase2EncryptionAlgorithms
   */
  readonly phase2EncryptionAlgorithms?: Ec2Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase1IntegrityAlgorithms
   */
  readonly phase1IntegrityAlgorithms?: Ec2Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase2IntegrityAlgorithms
   */
  readonly phase2IntegrityAlgorithms?: Ec2Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase1DHGroupNumbers
   */
  readonly phase1DhGroupNumbers?: Ec2Phase1DhGroupNumbersRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#Phase2DHGroupNumbers
   */
  readonly phase2DhGroupNumbers?: Ec2Phase2DhGroupNumbersRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#IKEVersions
   */
  readonly ikeVersions?: Ec2IkeVersionsRequestListValue[];

  /**
   * @schema Ec2VpnTunnelOptionsSpecification#StartupAction
   */
  readonly startupAction?: string;

}

/**
 * @schema Ec2VpnConnectionOptions
 */
export interface Ec2VpnConnectionOptions {
  /**
   * @schema Ec2VpnConnectionOptions#EnableAcceleration
   */
  readonly enableAcceleration?: boolean;

  /**
   * @schema Ec2VpnConnectionOptions#StaticRoutesOnly
   */
  readonly staticRoutesOnly?: boolean;

  /**
   * @schema Ec2VpnConnectionOptions#LocalIpv4NetworkCidr
   */
  readonly localIpv4NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptions#RemoteIpv4NetworkCidr
   */
  readonly remoteIpv4NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptions#LocalIpv6NetworkCidr
   */
  readonly localIpv6NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptions#RemoteIpv6NetworkCidr
   */
  readonly remoteIpv6NetworkCidr?: string;

  /**
   * @schema Ec2VpnConnectionOptions#TunnelInsideIpVersion
   */
  readonly tunnelInsideIpVersion?: string;

  /**
   * @schema Ec2VpnConnectionOptions#TunnelOptions
   */
  readonly tunnelOptions?: Ec2TunnelOption[];

}

/**
 * @schema Ec2VpnStaticRoute
 */
export interface Ec2VpnStaticRoute {
  /**
   * @schema Ec2VpnStaticRoute#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Ec2VpnStaticRoute#Source
   */
  readonly source?: string;

  /**
   * @schema Ec2VpnStaticRoute#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2VgwTelemetry
 */
export interface Ec2VgwTelemetry {
  /**
   * @schema Ec2VgwTelemetry#AcceptedRouteCount
   */
  readonly acceptedRouteCount?: number;

  /**
   * @schema Ec2VgwTelemetry#LastStatusChange
   */
  readonly lastStatusChange?: string;

  /**
   * @schema Ec2VgwTelemetry#OutsideIpAddress
   */
  readonly outsideIpAddress?: string;

  /**
   * @schema Ec2VgwTelemetry#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2VgwTelemetry#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2VgwTelemetry#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema Ec2DeleteFleetError
 */
export interface Ec2DeleteFleetError {
  /**
   * @schema Ec2DeleteFleetError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2DeleteFleetError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2ResponseError
 */
export interface Ec2ResponseError {
  /**
   * @schema Ec2ResponseError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ResponseError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2DeleteQueuedReservedInstancesError
 */
export interface Ec2DeleteQueuedReservedInstancesError {
  /**
   * @schema Ec2DeleteQueuedReservedInstancesError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2DeleteQueuedReservedInstancesError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2AccountAttributeValue
 */
export interface Ec2AccountAttributeValue {
  /**
   * @schema Ec2AccountAttributeValue#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema Ec2AvailabilityZoneMessage
 */
export interface Ec2AvailabilityZoneMessage {
  /**
   * @schema Ec2AvailabilityZoneMessage#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2ClientVpnConnectionStatus
 */
export interface Ec2ClientVpnConnectionStatus {
  /**
   * @schema Ec2ClientVpnConnectionStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ClientVpnConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2AssociatedTargetNetwork
 */
export interface Ec2AssociatedTargetNetwork {
  /**
   * @schema Ec2AssociatedTargetNetwork#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema Ec2AssociatedTargetNetwork#NetworkType
   */
  readonly networkType?: string;

}

/**
 * @schema Ec2ClientVpnAuthentication
 */
export interface Ec2ClientVpnAuthentication {
  /**
   * @schema Ec2ClientVpnAuthentication#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2ClientVpnAuthentication#ActiveDirectory
   */
  readonly activeDirectory?: Ec2DirectoryServiceAuthentication;

  /**
   * @schema Ec2ClientVpnAuthentication#MutualAuthentication
   */
  readonly mutualAuthentication?: Ec2CertificateAuthentication;

  /**
   * @schema Ec2ClientVpnAuthentication#FederatedAuthentication
   */
  readonly federatedAuthentication?: Ec2FederatedAuthentication;

}

/**
 * @schema Ec2ConnectionLogResponseOptions
 */
export interface Ec2ConnectionLogResponseOptions {
  /**
   * @schema Ec2ConnectionLogResponseOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Ec2ConnectionLogResponseOptions#CloudwatchLogGroup
   */
  readonly cloudwatchLogGroup?: string;

  /**
   * @schema Ec2ConnectionLogResponseOptions#CloudwatchLogStream
   */
  readonly cloudwatchLogStream?: string;

}

/**
 * @schema Ec2ClientConnectResponseOptions
 */
export interface Ec2ClientConnectResponseOptions {
  /**
   * @schema Ec2ClientConnectResponseOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema Ec2ClientConnectResponseOptions#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

  /**
   * @schema Ec2ClientConnectResponseOptions#Status
   */
  readonly status?: Ec2ClientVpnEndpointAttributeStatus;

}

/**
 * @schema Ec2ImportInstanceTaskDetails
 */
export interface Ec2ImportInstanceTaskDetails {
  /**
   * @schema Ec2ImportInstanceTaskDetails#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportInstanceTaskDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2ImportInstanceTaskDetails#Platform
   */
  readonly platform?: string;

  /**
   * @schema Ec2ImportInstanceTaskDetails#Volumes
   */
  readonly volumes?: Ec2ImportInstanceVolumeDetailItem[];

}

/**
 * @schema Ec2ImportVolumeTaskDetails
 */
export interface Ec2ImportVolumeTaskDetails {
  /**
   * @schema Ec2ImportVolumeTaskDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ImportVolumeTaskDetails#BytesConverted
   */
  readonly bytesConverted?: number;

  /**
   * @schema Ec2ImportVolumeTaskDetails#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportVolumeTaskDetails#Image
   */
  readonly image?: Ec2DiskImageDescription;

  /**
   * @schema Ec2ImportVolumeTaskDetails#Volume
   */
  readonly volume?: Ec2DiskImageVolumeDescription;

}

/**
 * @schema Ec2ElasticGpuHealth
 */
export interface Ec2ElasticGpuHealth {
  /**
   * @schema Ec2ElasticGpuHealth#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2EventInformation
 */
export interface Ec2EventInformation {
  /**
   * @schema Ec2EventInformation#EventDescription
   */
  readonly eventDescription?: string;

  /**
   * @schema Ec2EventInformation#EventSubType
   */
  readonly eventSubType?: string;

  /**
   * @schema Ec2EventInformation#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema Ec2FleetLaunchTemplateConfig
 */
export interface Ec2FleetLaunchTemplateConfig {
  /**
   * @schema Ec2FleetLaunchTemplateConfig#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: Ec2FleetLaunchTemplateSpecification;

  /**
   * @schema Ec2FleetLaunchTemplateConfig#Overrides
   */
  readonly overrides?: Ec2FleetLaunchTemplateOverrides[];

}

/**
 * @schema Ec2TargetCapacitySpecification
 */
export interface Ec2TargetCapacitySpecification {
  /**
   * @schema Ec2TargetCapacitySpecification#TotalTargetCapacity
   */
  readonly totalTargetCapacity?: number;

  /**
   * @schema Ec2TargetCapacitySpecification#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

  /**
   * @schema Ec2TargetCapacitySpecification#SpotTargetCapacity
   */
  readonly spotTargetCapacity?: number;

  /**
   * @schema Ec2TargetCapacitySpecification#DefaultTargetCapacityType
   */
  readonly defaultTargetCapacityType?: string;

}

/**
 * @schema Ec2SpotOptions
 */
export interface Ec2SpotOptions {
  /**
   * @schema Ec2SpotOptions#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema Ec2SpotOptions#MaintenanceStrategies
   */
  readonly maintenanceStrategies?: Ec2FleetSpotMaintenanceStrategies;

  /**
   * @schema Ec2SpotOptions#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

  /**
   * @schema Ec2SpotOptions#InstancePoolsToUseCount
   */
  readonly instancePoolsToUseCount?: number;

  /**
   * @schema Ec2SpotOptions#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema Ec2SpotOptions#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema Ec2SpotOptions#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema Ec2SpotOptions#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema Ec2OnDemandOptions
 */
export interface Ec2OnDemandOptions {
  /**
   * @schema Ec2OnDemandOptions#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema Ec2OnDemandOptions#CapacityReservationOptions
   */
  readonly capacityReservationOptions?: Ec2CapacityReservationOptions;

  /**
   * @schema Ec2OnDemandOptions#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema Ec2OnDemandOptions#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema Ec2OnDemandOptions#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema Ec2OnDemandOptions#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema Ec2DescribeFleetError
 */
export interface Ec2DescribeFleetError {
  /**
   * @schema Ec2DescribeFleetError#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: Ec2LaunchTemplateAndOverridesResponse;

  /**
   * @schema Ec2DescribeFleetError#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema Ec2DescribeFleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Ec2DescribeFleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Ec2DescribeFleetsInstances
 */
export interface Ec2DescribeFleetsInstances {
  /**
   * @schema Ec2DescribeFleetsInstances#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: Ec2LaunchTemplateAndOverridesResponse;

  /**
   * @schema Ec2DescribeFleetsInstances#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema Ec2DescribeFleetsInstances#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Ec2DescribeFleetsInstances#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2DescribeFleetsInstances#Platform
   */
  readonly platform?: string;

}

/**
 * @schema Ec2LoadPermission
 */
export interface Ec2LoadPermission {
  /**
   * @schema Ec2LoadPermission#UserId
   */
  readonly userId?: string;

  /**
   * @schema Ec2LoadPermission#Group
   */
  readonly group?: string;

}

/**
 * @schema Ec2PciId
 */
export interface Ec2PciId {
  /**
   * @schema Ec2PciId#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema Ec2PciId#VendorId
   */
  readonly vendorId?: string;

  /**
   * @schema Ec2PciId#SubsystemId
   */
  readonly subsystemId?: string;

  /**
   * @schema Ec2PciId#SubsystemVendorId
   */
  readonly subsystemVendorId?: string;

}

/**
 * @schema Ec2FpgaImageState
 */
export interface Ec2FpgaImageState {
  /**
   * @schema Ec2FpgaImageState#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2FpgaImageState#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2AvailableCapacity
 */
export interface Ec2AvailableCapacity {
  /**
   * @schema Ec2AvailableCapacity#AvailableInstanceCapacity
   */
  readonly availableInstanceCapacity?: Ec2InstanceCapacity[];

  /**
   * @schema Ec2AvailableCapacity#AvailableVCpus
   */
  readonly availableVCpus?: number;

}

/**
 * @schema Ec2HostProperties
 */
export interface Ec2HostProperties {
  /**
   * @schema Ec2HostProperties#Cores
   */
  readonly cores?: number;

  /**
   * @schema Ec2HostProperties#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2HostProperties#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Ec2HostProperties#Sockets
   */
  readonly sockets?: number;

  /**
   * @schema Ec2HostProperties#TotalVCpus
   */
  readonly totalVCpus?: number;

}

/**
 * @schema Ec2HostInstance
 */
export interface Ec2HostInstance {
  /**
   * @schema Ec2HostInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Ec2HostInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2HostInstance#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Ec2StateReason
 */
export interface Ec2StateReason {
  /**
   * @schema Ec2StateReason#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2StateReason#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2EbsInstanceBlockDevice
 */
export interface Ec2EbsInstanceBlockDevice {
  /**
   * @schema Ec2EbsInstanceBlockDevice#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema Ec2EbsInstanceBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2EbsInstanceBlockDevice#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2EbsInstanceBlockDevice#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema Ec2InstanceState
 */
export interface Ec2InstanceState {
  /**
   * @schema Ec2InstanceState#Code
   */
  readonly code?: number;

  /**
   * @schema Ec2InstanceState#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2InstanceStatusSummary
 */
export interface Ec2InstanceStatusSummary {
  /**
   * @schema Ec2InstanceStatusSummary#Details
   */
  readonly details?: Ec2InstanceStatusDetails[];

  /**
   * @schema Ec2InstanceStatusSummary#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2ProcessorInfo
 */
export interface Ec2ProcessorInfo {
  /**
   * @schema Ec2ProcessorInfo#SupportedArchitectures
   */
  readonly supportedArchitectures?: string[];

  /**
   * @schema Ec2ProcessorInfo#SustainedClockSpeedInGhz
   */
  readonly sustainedClockSpeedInGhz?: number;

}

/**
 * @schema Ec2VCpuInfo
 */
export interface Ec2VCpuInfo {
  /**
   * @schema Ec2VCpuInfo#DefaultVCpus
   */
  readonly defaultVCpus?: number;

  /**
   * @schema Ec2VCpuInfo#DefaultCores
   */
  readonly defaultCores?: number;

  /**
   * @schema Ec2VCpuInfo#DefaultThreadsPerCore
   */
  readonly defaultThreadsPerCore?: number;

  /**
   * @schema Ec2VCpuInfo#ValidCores
   */
  readonly validCores?: number[];

  /**
   * @schema Ec2VCpuInfo#ValidThreadsPerCore
   */
  readonly validThreadsPerCore?: number[];

}

/**
 * @schema Ec2MemoryInfo
 */
export interface Ec2MemoryInfo {
  /**
   * @schema Ec2MemoryInfo#SizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema Ec2InstanceStorageInfo
 */
export interface Ec2InstanceStorageInfo {
  /**
   * @schema Ec2InstanceStorageInfo#TotalSizeInGB
   */
  readonly totalSizeInGb?: number;

  /**
   * @schema Ec2InstanceStorageInfo#Disks
   */
  readonly disks?: Ec2DiskInfo[];

  /**
   * @schema Ec2InstanceStorageInfo#NvmeSupport
   */
  readonly nvmeSupport?: string;

}

/**
 * @schema Ec2EbsInfo
 */
export interface Ec2EbsInfo {
  /**
   * @schema Ec2EbsInfo#EbsOptimizedSupport
   */
  readonly ebsOptimizedSupport?: string;

  /**
   * @schema Ec2EbsInfo#EncryptionSupport
   */
  readonly encryptionSupport?: string;

  /**
   * @schema Ec2EbsInfo#EbsOptimizedInfo
   */
  readonly ebsOptimizedInfo?: Ec2EbsOptimizedInfo;

  /**
   * @schema Ec2EbsInfo#NvmeSupport
   */
  readonly nvmeSupport?: string;

}

/**
 * @schema Ec2NetworkInfo
 */
export interface Ec2NetworkInfo {
  /**
   * @schema Ec2NetworkInfo#NetworkPerformance
   */
  readonly networkPerformance?: string;

  /**
   * @schema Ec2NetworkInfo#MaximumNetworkInterfaces
   */
  readonly maximumNetworkInterfaces?: number;

  /**
   * @schema Ec2NetworkInfo#MaximumNetworkCards
   */
  readonly maximumNetworkCards?: number;

  /**
   * @schema Ec2NetworkInfo#DefaultNetworkCardIndex
   */
  readonly defaultNetworkCardIndex?: number;

  /**
   * @schema Ec2NetworkInfo#NetworkCards
   */
  readonly networkCards?: Ec2NetworkCardInfo[];

  /**
   * @schema Ec2NetworkInfo#Ipv4AddressesPerInterface
   */
  readonly ipv4AddressesPerInterface?: number;

  /**
   * @schema Ec2NetworkInfo#Ipv6AddressesPerInterface
   */
  readonly ipv6AddressesPerInterface?: number;

  /**
   * @schema Ec2NetworkInfo#Ipv6Supported
   */
  readonly ipv6Supported?: boolean;

  /**
   * @schema Ec2NetworkInfo#EnaSupport
   */
  readonly enaSupport?: string;

  /**
   * @schema Ec2NetworkInfo#EfaSupported
   */
  readonly efaSupported?: boolean;

}

/**
 * @schema Ec2GpuInfo
 */
export interface Ec2GpuInfo {
  /**
   * @schema Ec2GpuInfo#Gpus
   */
  readonly gpus?: Ec2GpuDeviceInfo[];

  /**
   * @schema Ec2GpuInfo#TotalGpuMemoryInMiB
   */
  readonly totalGpuMemoryInMiB?: number;

}

/**
 * @schema Ec2FpgaInfo
 */
export interface Ec2FpgaInfo {
  /**
   * @schema Ec2FpgaInfo#Fpgas
   */
  readonly fpgas?: Ec2FpgaDeviceInfo[];

  /**
   * @schema Ec2FpgaInfo#TotalFpgaMemoryInMiB
   */
  readonly totalFpgaMemoryInMiB?: number;

}

/**
 * @schema Ec2PlacementGroupInfo
 */
export interface Ec2PlacementGroupInfo {
  /**
   * @schema Ec2PlacementGroupInfo#SupportedStrategies
   */
  readonly supportedStrategies?: string[];

}

/**
 * @schema Ec2InferenceAcceleratorInfo
 */
export interface Ec2InferenceAcceleratorInfo {
  /**
   * @schema Ec2InferenceAcceleratorInfo#Accelerators
   */
  readonly accelerators?: Ec2InferenceDeviceInfo[];

}

/**
 * @schema Ec2PoolCidrBlock
 */
export interface Ec2PoolCidrBlock {
  /**
   * @schema Ec2PoolCidrBlock#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema Ec2PublicIpv4PoolRange
 */
export interface Ec2PublicIpv4PoolRange {
  /**
   * @schema Ec2PublicIpv4PoolRange#FirstAddress
   */
  readonly firstAddress?: string;

  /**
   * @schema Ec2PublicIpv4PoolRange#LastAddress
   */
  readonly lastAddress?: string;

  /**
   * @schema Ec2PublicIpv4PoolRange#AddressCount
   */
  readonly addressCount?: number;

  /**
   * @schema Ec2PublicIpv4PoolRange#AvailableAddressCount
   */
  readonly availableAddressCount?: number;

}

/**
 * @schema Ec2RecurringCharge
 */
export interface Ec2RecurringCharge {
  /**
   * @schema Ec2RecurringCharge#Amount
   */
  readonly amount?: number;

  /**
   * @schema Ec2RecurringCharge#Frequency
   */
  readonly frequency?: string;

}

/**
 * @schema Ec2ReservedInstancesModificationResult
 */
export interface Ec2ReservedInstancesModificationResult {
  /**
   * @schema Ec2ReservedInstancesModificationResult#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema Ec2ReservedInstancesModificationResult#TargetConfiguration
   */
  readonly targetConfiguration?: Ec2ReservedInstancesConfiguration;

}

/**
 * @schema Ec2ReservedInstancesId
 */
export interface Ec2ReservedInstancesId {
  /**
   * @schema Ec2ReservedInstancesId#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema Ec2PricingDetail
 */
export interface Ec2PricingDetail {
  /**
   * @schema Ec2PricingDetail#Count
   */
  readonly count?: number;

  /**
   * @schema Ec2PricingDetail#Price
   */
  readonly price?: number;

}

/**
 * @schema Ec2ScheduledInstanceRecurrence
 */
export interface Ec2ScheduledInstanceRecurrence {
  /**
   * @schema Ec2ScheduledInstanceRecurrence#Frequency
   */
  readonly frequency?: string;

  /**
   * @schema Ec2ScheduledInstanceRecurrence#Interval
   */
  readonly interval?: number;

  /**
   * @schema Ec2ScheduledInstanceRecurrence#OccurrenceDaySet
   */
  readonly occurrenceDaySet?: number[];

  /**
   * @schema Ec2ScheduledInstanceRecurrence#OccurrenceRelativeToEnd
   */
  readonly occurrenceRelativeToEnd?: boolean;

  /**
   * @schema Ec2ScheduledInstanceRecurrence#OccurrenceUnit
   */
  readonly occurrenceUnit?: string;

}

/**
 * @schema Ec2LaunchSpecification
 */
export interface Ec2LaunchSpecification {
  /**
   * @schema Ec2LaunchSpecification#UserData
   */
  readonly userData?: string;

  /**
   * @schema Ec2LaunchSpecification#SecurityGroups
   */
  readonly securityGroups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2LaunchSpecification#AddressingType
   */
  readonly addressingType?: string;

  /**
   * @schema Ec2LaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2LaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2LaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2IamInstanceProfileSpecification;

  /**
   * @schema Ec2LaunchSpecification#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2LaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2LaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2LaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2LaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2InstanceNetworkInterfaceSpecification[];

  /**
   * @schema Ec2LaunchSpecification#Placement
   */
  readonly placement?: Ec2SpotPlacement;

  /**
   * @schema Ec2LaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2LaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2LaunchSpecification#Monitoring
   */
  readonly monitoring?: Ec2RunInstancesMonitoringEnabled;

}

/**
 * @schema Ec2SpotInstanceStatus
 */
export interface Ec2SpotInstanceStatus {
  /**
   * @schema Ec2SpotInstanceStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2SpotInstanceStatus#Message
   */
  readonly message?: string;

  /**
   * @schema Ec2SpotInstanceStatus#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema Ec2StaleIpPermission
 */
export interface Ec2StaleIpPermission {
  /**
   * @schema Ec2StaleIpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema Ec2StaleIpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema Ec2StaleIpPermission#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema Ec2StaleIpPermission#PrefixListIds
   */
  readonly prefixListIds?: string[];

  /**
   * @schema Ec2StaleIpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema Ec2StaleIpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: Ec2UserIdGroupPair[];

}

/**
 * @schema Ec2TransitGatewayAttachmentAssociation
 */
export interface Ec2TransitGatewayAttachmentAssociation {
  /**
   * @schema Ec2TransitGatewayAttachmentAssociation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema Ec2TransitGatewayAttachmentAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2VolumeStatusAction
 */
export interface Ec2VolumeStatusAction {
  /**
   * @schema Ec2VolumeStatusAction#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2VolumeStatusAction#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2VolumeStatusAction#EventId
   */
  readonly eventId?: string;

  /**
   * @schema Ec2VolumeStatusAction#EventType
   */
  readonly eventType?: string;

}

/**
 * @schema Ec2VolumeStatusEvent
 */
export interface Ec2VolumeStatusEvent {
  /**
   * @schema Ec2VolumeStatusEvent#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2VolumeStatusEvent#EventId
   */
  readonly eventId?: string;

  /**
   * @schema Ec2VolumeStatusEvent#EventType
   */
  readonly eventType?: string;

  /**
   * @schema Ec2VolumeStatusEvent#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema Ec2VolumeStatusEvent#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema Ec2VolumeStatusEvent#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema Ec2VolumeStatusInfo
 */
export interface Ec2VolumeStatusInfo {
  /**
   * @schema Ec2VolumeStatusInfo#Details
   */
  readonly details?: Ec2VolumeStatusDetails[];

  /**
   * @schema Ec2VolumeStatusInfo#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2VolumeStatusAttachmentStatus
 */
export interface Ec2VolumeStatusAttachmentStatus {
  /**
   * @schema Ec2VolumeStatusAttachmentStatus#IoPerformance
   */
  readonly ioPerformance?: string;

  /**
   * @schema Ec2VolumeStatusAttachmentStatus#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema Ec2PrivateDnsDetails
 */
export interface Ec2PrivateDnsDetails {
  /**
   * @schema Ec2PrivateDnsDetails#PrivateDnsName
   */
  readonly privateDnsName?: string;

}

/**
 * @schema Ec2DisableFastSnapshotRestoreStateErrorItem
 */
export interface Ec2DisableFastSnapshotRestoreStateErrorItem {
  /**
   * @schema Ec2DisableFastSnapshotRestoreStateErrorItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreStateErrorItem#Error
   */
  readonly error?: Ec2DisableFastSnapshotRestoreStateError;

}

/**
 * @schema Ec2EnableFastSnapshotRestoreStateErrorItem
 */
export interface Ec2EnableFastSnapshotRestoreStateErrorItem {
  /**
   * @schema Ec2EnableFastSnapshotRestoreStateErrorItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreStateErrorItem#Error
   */
  readonly error?: Ec2EnableFastSnapshotRestoreStateError;

}

/**
 * @schema Ec2LaunchTemplateIamInstanceProfileSpecification
 */
export interface Ec2LaunchTemplateIamInstanceProfileSpecification {
  /**
   * @schema Ec2LaunchTemplateIamInstanceProfileSpecification#Arn
   */
  readonly arn?: string;

  /**
   * @schema Ec2LaunchTemplateIamInstanceProfileSpecification#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2LaunchTemplateBlockDeviceMapping
 */
export interface Ec2LaunchTemplateBlockDeviceMapping {
  /**
   * @schema Ec2LaunchTemplateBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2LaunchTemplateBlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema Ec2LaunchTemplateBlockDeviceMapping#Ebs
   */
  readonly ebs?: Ec2LaunchTemplateEbsBlockDevice;

  /**
   * @schema Ec2LaunchTemplateBlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification
 */
export interface Ec2LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#AssociateCarrierIpAddress
   */
  readonly associateCarrierIpAddress?: boolean;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2InstanceIpv6Address[];

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#PrivateIpAddresses
   */
  readonly privateIpAddresses?: Ec2PrivateIpAddressSpecification[];

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceNetworkInterfaceSpecification#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema Ec2LaunchTemplatesMonitoring
 */
export interface Ec2LaunchTemplatesMonitoring {
  /**
   * @schema Ec2LaunchTemplatesMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2LaunchTemplatePlacement
 */
export interface Ec2LaunchTemplatePlacement {
  /**
   * @schema Ec2LaunchTemplatePlacement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#SpreadDomain
   */
  readonly spreadDomain?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

  /**
   * @schema Ec2LaunchTemplatePlacement#PartitionNumber
   */
  readonly partitionNumber?: number;

}

/**
 * @schema Ec2LaunchTemplateTagSpecification
 */
export interface Ec2LaunchTemplateTagSpecification {
  /**
   * @schema Ec2LaunchTemplateTagSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2LaunchTemplateTagSpecification#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ElasticGpuSpecificationResponse
 */
export interface Ec2ElasticGpuSpecificationResponse {
  /**
   * @schema Ec2ElasticGpuSpecificationResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema Ec2LaunchTemplateElasticInferenceAcceleratorResponse
 */
export interface Ec2LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * @schema Ec2LaunchTemplateElasticInferenceAcceleratorResponse#Type
   */
  readonly type?: string;

  /**
   * @schema Ec2LaunchTemplateElasticInferenceAcceleratorResponse#Count
   */
  readonly count?: number;

}

/**
 * @schema Ec2LaunchTemplateInstanceMarketOptions
 */
export interface Ec2LaunchTemplateInstanceMarketOptions {
  /**
   * @schema Ec2LaunchTemplateInstanceMarketOptions#MarketType
   */
  readonly marketType?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceMarketOptions#SpotOptions
   */
  readonly spotOptions?: Ec2LaunchTemplateSpotMarketOptions;

}

/**
 * @schema Ec2CreditSpecification
 */
export interface Ec2CreditSpecification {
  /**
   * @schema Ec2CreditSpecification#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema Ec2LaunchTemplateCpuOptions
 */
export interface Ec2LaunchTemplateCpuOptions {
  /**
   * @schema Ec2LaunchTemplateCpuOptions#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema Ec2LaunchTemplateCpuOptions#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema Ec2LaunchTemplateCapacityReservationSpecificationResponse
 */
export interface Ec2LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * @schema Ec2LaunchTemplateCapacityReservationSpecificationResponse#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema Ec2LaunchTemplateCapacityReservationSpecificationResponse#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: Ec2CapacityReservationTargetResponse;

}

/**
 * @schema Ec2LaunchTemplateLicenseConfiguration
 */
export interface Ec2LaunchTemplateLicenseConfiguration {
  /**
   * @schema Ec2LaunchTemplateLicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema Ec2LaunchTemplateHibernationOptions
 */
export interface Ec2LaunchTemplateHibernationOptions {
  /**
   * @schema Ec2LaunchTemplateHibernationOptions#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema Ec2LaunchTemplateInstanceMetadataOptions
 */
export interface Ec2LaunchTemplateInstanceMetadataOptions {
  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptions#State
   */
  readonly state?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptions#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptions#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema Ec2LaunchTemplateInstanceMetadataOptions#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema Ec2LaunchTemplateEnclaveOptions
 */
export interface Ec2LaunchTemplateEnclaveOptions {
  /**
   * @schema Ec2LaunchTemplateEnclaveOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2TargetConfiguration
 */
export interface Ec2TargetConfiguration {
  /**
   * @schema Ec2TargetConfiguration#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema Ec2TargetConfiguration#OfferingId
   */
  readonly offeringId?: string;

}

/**
 * @schema Ec2UserBucket
 */
export interface Ec2UserBucket {
  /**
   * @schema Ec2UserBucket#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema Ec2UserBucket#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema Ec2UserBucketDetails
 */
export interface Ec2UserBucketDetails {
  /**
   * @schema Ec2UserBucketDetails#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema Ec2UserBucketDetails#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema Ec2UserData
 */
export interface Ec2UserData {
  /**
   * @schema Ec2UserData#Data
   */
  readonly data?: string;

}

/**
 * @schema Ec2LoadPermissionRequest
 */
export interface Ec2LoadPermissionRequest {
  /**
   * @schema Ec2LoadPermissionRequest#Group
   */
  readonly group?: string;

  /**
   * @schema Ec2LoadPermissionRequest#UserId
   */
  readonly userId?: string;

}

/**
 * @schema Ec2EbsInstanceBlockDeviceSpecification
 */
export interface Ec2EbsInstanceBlockDeviceSpecification {
  /**
   * @schema Ec2EbsInstanceBlockDeviceSpecification#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2EbsInstanceBlockDeviceSpecification#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema Ec2CapacityReservationTarget
 */
export interface Ec2CapacityReservationTarget {
  /**
   * @schema Ec2CapacityReservationTarget#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema Ec2CapacityReservationTarget#CapacityReservationResourceGroupArn
   */
  readonly capacityReservationResourceGroupArn?: string;

}

/**
 * @schema Ec2UnsuccessfulInstanceCreditSpecificationItemError
 */
export interface Ec2UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * @schema Ec2UnsuccessfulInstanceCreditSpecificationItemError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2UnsuccessfulInstanceCreditSpecificationItemError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2FleetLaunchTemplateSpecification
 */
export interface Ec2FleetLaunchTemplateSpecification {
  /**
   * @schema Ec2FleetLaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema Ec2FleetLaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema Ec2FleetLaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema Ec2LaunchTemplateOverrides
 */
export interface Ec2LaunchTemplateOverrides {
  /**
   * @schema Ec2LaunchTemplateOverrides#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2LaunchTemplateOverrides#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema Ec2LaunchTemplateOverrides#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2LaunchTemplateOverrides#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2LaunchTemplateOverrides#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema Ec2LaunchTemplateOverrides#Priority
   */
  readonly priority?: number;

}

/**
 * @schema Ec2Phase1EncryptionAlgorithmsRequestListValue
 */
export interface Ec2Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * @schema Ec2Phase1EncryptionAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase2EncryptionAlgorithmsRequestListValue
 */
export interface Ec2Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * @schema Ec2Phase2EncryptionAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase1IntegrityAlgorithmsRequestListValue
 */
export interface Ec2Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * @schema Ec2Phase1IntegrityAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase2IntegrityAlgorithmsRequestListValue
 */
export interface Ec2Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * @schema Ec2Phase2IntegrityAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase1DhGroupNumbersRequestListValue
 */
export interface Ec2Phase1DhGroupNumbersRequestListValue {
  /**
   * @schema Ec2Phase1DhGroupNumbersRequestListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema Ec2Phase2DhGroupNumbersRequestListValue
 */
export interface Ec2Phase2DhGroupNumbersRequestListValue {
  /**
   * @schema Ec2Phase2DhGroupNumbersRequestListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema Ec2IkeVersionsRequestListValue
 */
export interface Ec2IkeVersionsRequestListValue {
  /**
   * @schema Ec2IkeVersionsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Monitoring
 */
export interface Ec2Monitoring {
  /**
   * @schema Ec2Monitoring#State
   */
  readonly state?: string;

}

/**
 * @schema Ec2SpotMaintenanceStrategies
 */
export interface Ec2SpotMaintenanceStrategies {
  /**
   * @schema Ec2SpotMaintenanceStrategies#CapacityRebalance
   */
  readonly capacityRebalance?: Ec2SpotCapacityRebalance;

}

/**
 * @schema Ec2SpotFleetLaunchSpecification
 */
export interface Ec2SpotFleetLaunchSpecification {
  /**
   * @schema Ec2SpotFleetLaunchSpecification#SecurityGroups
   */
  readonly securityGroups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2SpotFleetLaunchSpecification#AddressingType
   */
  readonly addressingType?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: Ec2BlockDeviceMapping[];

  /**
   * @schema Ec2SpotFleetLaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: Ec2IamInstanceProfileSpecification;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#Monitoring
   */
  readonly monitoring?: Ec2SpotFleetMonitoring;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: Ec2InstanceNetworkInterfaceSpecification[];

  /**
   * @schema Ec2SpotFleetLaunchSpecification#Placement
   */
  readonly placement?: Ec2SpotPlacement;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#UserData
   */
  readonly userData?: string;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema Ec2SpotFleetLaunchSpecification#TagSpecifications
   */
  readonly tagSpecifications?: Ec2SpotFleetTagSpecification[];

}

/**
 * @schema Ec2LoadBalancersConfig
 */
export interface Ec2LoadBalancersConfig {
  /**
   * @schema Ec2LoadBalancersConfig#ClassicLoadBalancersConfig
   */
  readonly classicLoadBalancersConfig?: Ec2ClassicLoadBalancersConfig;

  /**
   * @schema Ec2LoadBalancersConfig#TargetGroupsConfig
   */
  readonly targetGroupsConfig?: Ec2TargetGroupsConfig;

}

/**
 * @schema Ec2SpotPlacement
 */
export interface Ec2SpotPlacement {
  /**
   * @schema Ec2SpotPlacement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2SpotPlacement#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Ec2SpotPlacement#Tenancy
   */
  readonly tenancy?: string;

}

/**
 * @schema Ec2SpotMarketOptions
 */
export interface Ec2SpotMarketOptions {
  /**
   * @schema Ec2SpotMarketOptions#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema Ec2SpotMarketOptions#SpotInstanceType
   */
  readonly spotInstanceType?: string;

  /**
   * @schema Ec2SpotMarketOptions#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema Ec2SpotMarketOptions#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2SpotMarketOptions#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema Ec2ElasticGpuAssociation
 */
export interface Ec2ElasticGpuAssociation {
  /**
   * @schema Ec2ElasticGpuAssociation#ElasticGpuId
   */
  readonly elasticGpuId?: string;

  /**
   * @schema Ec2ElasticGpuAssociation#ElasticGpuAssociationId
   */
  readonly elasticGpuAssociationId?: string;

  /**
   * @schema Ec2ElasticGpuAssociation#ElasticGpuAssociationState
   */
  readonly elasticGpuAssociationState?: string;

  /**
   * @schema Ec2ElasticGpuAssociation#ElasticGpuAssociationTime
   */
  readonly elasticGpuAssociationTime?: string;

}

/**
 * @schema Ec2ElasticInferenceAcceleratorAssociation
 */
export interface Ec2ElasticInferenceAcceleratorAssociation {
  /**
   * @schema Ec2ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorArn
   */
  readonly elasticInferenceAcceleratorArn?: string;

  /**
   * @schema Ec2ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorAssociationId
   */
  readonly elasticInferenceAcceleratorAssociationId?: string;

  /**
   * @schema Ec2ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorAssociationState
   */
  readonly elasticInferenceAcceleratorAssociationState?: string;

  /**
   * @schema Ec2ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorAssociationTime
   */
  readonly elasticInferenceAcceleratorAssociationTime?: string;

}

/**
 * @schema Ec2InstanceNetworkInterface
 */
export interface Ec2InstanceNetworkInterface {
  /**
   * @schema Ec2InstanceNetworkInterface#Association
   */
  readonly association?: Ec2InstanceNetworkInterfaceAssociation;

  /**
   * @schema Ec2InstanceNetworkInterface#Attachment
   */
  readonly attachment?: Ec2InstanceNetworkInterfaceAttachment;

  /**
   * @schema Ec2InstanceNetworkInterface#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#Groups
   */
  readonly groups?: Ec2GroupIdentifier[];

  /**
   * @schema Ec2InstanceNetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2InstanceIpv6Address[];

  /**
   * @schema Ec2InstanceNetworkInterface#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: Ec2InstancePrivateIpAddress[];

  /**
   * @schema Ec2InstanceNetworkInterface#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema Ec2InstanceNetworkInterface#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Ec2InstanceNetworkInterface#InterfaceType
   */
  readonly interfaceType?: string;

}

/**
 * @schema Ec2CpuOptions
 */
export interface Ec2CpuOptions {
  /**
   * @schema Ec2CpuOptions#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema Ec2CpuOptions#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema Ec2CapacityReservationSpecificationResponse
 */
export interface Ec2CapacityReservationSpecificationResponse {
  /**
   * @schema Ec2CapacityReservationSpecificationResponse#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema Ec2CapacityReservationSpecificationResponse#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: Ec2CapacityReservationTargetResponse;

}

/**
 * @schema Ec2HibernationOptions
 */
export interface Ec2HibernationOptions {
  /**
   * @schema Ec2HibernationOptions#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema Ec2LicenseConfiguration
 */
export interface Ec2LicenseConfiguration {
  /**
   * @schema Ec2LicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema Ec2ScheduledInstancesBlockDeviceMapping
 */
export interface Ec2ScheduledInstancesBlockDeviceMapping {
  /**
   * @schema Ec2ScheduledInstancesBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema Ec2ScheduledInstancesBlockDeviceMapping#Ebs
   */
  readonly ebs?: Ec2ScheduledInstancesEbs;

  /**
   * @schema Ec2ScheduledInstancesBlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

  /**
   * @schema Ec2ScheduledInstancesBlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

}

/**
 * @schema Ec2ScheduledInstancesIamInstanceProfile
 */
export interface Ec2ScheduledInstancesIamInstanceProfile {
  /**
   * @schema Ec2ScheduledInstancesIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema Ec2ScheduledInstancesIamInstanceProfile#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2ScheduledInstancesMonitoring
 */
export interface Ec2ScheduledInstancesMonitoring {
  /**
   * @schema Ec2ScheduledInstancesMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2ScheduledInstancesNetworkInterface
 */
export interface Ec2ScheduledInstancesNetworkInterface {
  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#Groups
   */
  readonly groups?: string[];

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: Ec2ScheduledInstancesIpv6Address[];

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#PrivateIpAddressConfigs
   */
  readonly privateIpAddressConfigs?: Ec2ScheduledInstancesPrivateIpAddressConfig[];

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema Ec2ScheduledInstancesNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema Ec2ScheduledInstancesPlacement
 */
export interface Ec2ScheduledInstancesPlacement {
  /**
   * @schema Ec2ScheduledInstancesPlacement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ScheduledInstancesPlacement#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema Ec2Ipv6CidrBlock
 */
export interface Ec2Ipv6CidrBlock {
  /**
   * @schema Ec2Ipv6CidrBlock#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

}

/**
 * @schema Ec2CidrBlock
 */
export interface Ec2CidrBlock {
  /**
   * @schema Ec2CidrBlock#CidrBlock
   */
  readonly cidrBlock?: string;

}

/**
 * @schema Ec2VpcPeeringConnectionOptionsDescription
 */
export interface Ec2VpcPeeringConnectionOptionsDescription {
  /**
   * @schema Ec2VpcPeeringConnectionOptionsDescription#AllowDnsResolutionFromRemoteVpc
   */
  readonly allowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @schema Ec2VpcPeeringConnectionOptionsDescription#AllowEgressFromLocalClassicLinkToRemoteVpc
   */
  readonly allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @schema Ec2VpcPeeringConnectionOptionsDescription#AllowEgressFromLocalVpcToRemoteClassicLink
   */
  readonly allowEgressFromLocalVpcToRemoteClassicLink?: boolean;

}

/**
 * @schema Ec2FleetSpotCapacityRebalanceRequest
 */
export interface Ec2FleetSpotCapacityRebalanceRequest {
  /**
   * @schema Ec2FleetSpotCapacityRebalanceRequest#ReplacementStrategy
   */
  readonly replacementStrategy?: string;

}

/**
 * @schema Ec2FleetLaunchTemplateOverrides
 */
export interface Ec2FleetLaunchTemplateOverrides {
  /**
   * @schema Ec2FleetLaunchTemplateOverrides#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverrides#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverrides#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverrides#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2FleetLaunchTemplateOverrides#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema Ec2FleetLaunchTemplateOverrides#Priority
   */
  readonly priority?: number;

  /**
   * @schema Ec2FleetLaunchTemplateOverrides#Placement
   */
  readonly placement?: Ec2PlacementResponse;

}

/**
 * @schema Ec2LaunchTemplateEbsBlockDeviceRequest
 */
export interface Ec2LaunchTemplateEbsBlockDeviceRequest {
  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDeviceRequest#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema Ec2InstanceIpv6AddressRequest
 */
export interface Ec2InstanceIpv6AddressRequest {
  /**
   * @schema Ec2InstanceIpv6AddressRequest#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema Ec2LaunchTemplateSpotMarketOptionsRequest
 */
export interface Ec2LaunchTemplateSpotMarketOptionsRequest {
  /**
   * @schema Ec2LaunchTemplateSpotMarketOptionsRequest#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptionsRequest#SpotInstanceType
   */
  readonly spotInstanceType?: string;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptionsRequest#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptionsRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptionsRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema Ec2TunnelOption
 */
export interface Ec2TunnelOption {
  /**
   * @schema Ec2TunnelOption#OutsideIpAddress
   */
  readonly outsideIpAddress?: string;

  /**
   * @schema Ec2TunnelOption#TunnelInsideCidr
   */
  readonly tunnelInsideCidr?: string;

  /**
   * @schema Ec2TunnelOption#TunnelInsideIpv6Cidr
   */
  readonly tunnelInsideIpv6Cidr?: string;

  /**
   * @schema Ec2TunnelOption#PreSharedKey
   */
  readonly preSharedKey?: string;

  /**
   * @schema Ec2TunnelOption#Phase1LifetimeSeconds
   */
  readonly phase1LifetimeSeconds?: number;

  /**
   * @schema Ec2TunnelOption#Phase2LifetimeSeconds
   */
  readonly phase2LifetimeSeconds?: number;

  /**
   * @schema Ec2TunnelOption#RekeyMarginTimeSeconds
   */
  readonly rekeyMarginTimeSeconds?: number;

  /**
   * @schema Ec2TunnelOption#RekeyFuzzPercentage
   */
  readonly rekeyFuzzPercentage?: number;

  /**
   * @schema Ec2TunnelOption#ReplayWindowSize
   */
  readonly replayWindowSize?: number;

  /**
   * @schema Ec2TunnelOption#DpdTimeoutSeconds
   */
  readonly dpdTimeoutSeconds?: number;

  /**
   * @schema Ec2TunnelOption#DpdTimeoutAction
   */
  readonly dpdTimeoutAction?: string;

  /**
   * @schema Ec2TunnelOption#Phase1EncryptionAlgorithms
   */
  readonly phase1EncryptionAlgorithms?: Ec2Phase1EncryptionAlgorithmsListValue[];

  /**
   * @schema Ec2TunnelOption#Phase2EncryptionAlgorithms
   */
  readonly phase2EncryptionAlgorithms?: Ec2Phase2EncryptionAlgorithmsListValue[];

  /**
   * @schema Ec2TunnelOption#Phase1IntegrityAlgorithms
   */
  readonly phase1IntegrityAlgorithms?: Ec2Phase1IntegrityAlgorithmsListValue[];

  /**
   * @schema Ec2TunnelOption#Phase2IntegrityAlgorithms
   */
  readonly phase2IntegrityAlgorithms?: Ec2Phase2IntegrityAlgorithmsListValue[];

  /**
   * @schema Ec2TunnelOption#Phase1DHGroupNumbers
   */
  readonly phase1DhGroupNumbers?: Ec2Phase1DhGroupNumbersListValue[];

  /**
   * @schema Ec2TunnelOption#Phase2DHGroupNumbers
   */
  readonly phase2DhGroupNumbers?: Ec2Phase2DhGroupNumbersListValue[];

  /**
   * @schema Ec2TunnelOption#IkeVersions
   */
  readonly ikeVersions?: Ec2IkeVersionsListValue[];

  /**
   * @schema Ec2TunnelOption#StartupAction
   */
  readonly startupAction?: string;

}

/**
 * @schema Ec2DirectoryServiceAuthentication
 */
export interface Ec2DirectoryServiceAuthentication {
  /**
   * @schema Ec2DirectoryServiceAuthentication#DirectoryId
   */
  readonly directoryId?: string;

}

/**
 * @schema Ec2CertificateAuthentication
 */
export interface Ec2CertificateAuthentication {
  /**
   * @schema Ec2CertificateAuthentication#ClientRootCertificateChain
   */
  readonly clientRootCertificateChain?: string;

}

/**
 * @schema Ec2FederatedAuthentication
 */
export interface Ec2FederatedAuthentication {
  /**
   * @schema Ec2FederatedAuthentication#SamlProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema Ec2FederatedAuthentication#SelfServiceSamlProviderArn
   */
  readonly selfServiceSamlProviderArn?: string;

}

/**
 * @schema Ec2ClientVpnEndpointAttributeStatus
 */
export interface Ec2ClientVpnEndpointAttributeStatus {
  /**
   * @schema Ec2ClientVpnEndpointAttributeStatus#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2ClientVpnEndpointAttributeStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2ImportInstanceVolumeDetailItem
 */
export interface Ec2ImportInstanceVolumeDetailItem {
  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#BytesConverted
   */
  readonly bytesConverted?: number;

  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#Description
   */
  readonly description?: string;

  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#Image
   */
  readonly image?: Ec2DiskImageDescription;

  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema Ec2ImportInstanceVolumeDetailItem#Volume
   */
  readonly volume?: Ec2DiskImageVolumeDescription;

}

/**
 * @schema Ec2DiskImageDescription
 */
export interface Ec2DiskImageDescription {
  /**
   * @schema Ec2DiskImageDescription#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema Ec2DiskImageDescription#Format
   */
  readonly format?: string;

  /**
   * @schema Ec2DiskImageDescription#ImportManifestUrl
   */
  readonly importManifestUrl?: string;

  /**
   * @schema Ec2DiskImageDescription#Size
   */
  readonly size?: number;

}

/**
 * @schema Ec2DiskImageVolumeDescription
 */
export interface Ec2DiskImageVolumeDescription {
  /**
   * @schema Ec2DiskImageVolumeDescription#Id
   */
  readonly id?: string;

  /**
   * @schema Ec2DiskImageVolumeDescription#Size
   */
  readonly size?: number;

}

/**
 * @schema Ec2FleetSpotMaintenanceStrategies
 */
export interface Ec2FleetSpotMaintenanceStrategies {
  /**
   * @schema Ec2FleetSpotMaintenanceStrategies#CapacityRebalance
   */
  readonly capacityRebalance?: Ec2FleetSpotCapacityRebalance;

}

/**
 * @schema Ec2CapacityReservationOptions
 */
export interface Ec2CapacityReservationOptions {
  /**
   * @schema Ec2CapacityReservationOptions#UsageStrategy
   */
  readonly usageStrategy?: string;

}

/**
 * @schema Ec2InstanceCapacity
 */
export interface Ec2InstanceCapacity {
  /**
   * @schema Ec2InstanceCapacity#AvailableCapacity
   */
  readonly availableCapacity?: number;

  /**
   * @schema Ec2InstanceCapacity#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Ec2InstanceCapacity#TotalCapacity
   */
  readonly totalCapacity?: number;

}

/**
 * @schema Ec2InstanceStatusDetails
 */
export interface Ec2InstanceStatusDetails {
  /**
   * @schema Ec2InstanceStatusDetails#ImpairedSince
   */
  readonly impairedSince?: string;

  /**
   * @schema Ec2InstanceStatusDetails#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2InstanceStatusDetails#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2DiskInfo
 */
export interface Ec2DiskInfo {
  /**
   * @schema Ec2DiskInfo#SizeInGB
   */
  readonly sizeInGb?: number;

  /**
   * @schema Ec2DiskInfo#Count
   */
  readonly count?: number;

  /**
   * @schema Ec2DiskInfo#Type
   */
  readonly type?: string;

}

/**
 * @schema Ec2EbsOptimizedInfo
 */
export interface Ec2EbsOptimizedInfo {
  /**
   * @schema Ec2EbsOptimizedInfo#BaselineBandwidthInMbps
   */
  readonly baselineBandwidthInMbps?: number;

  /**
   * @schema Ec2EbsOptimizedInfo#BaselineThroughputInMBps
   */
  readonly baselineThroughputInMBps?: number;

  /**
   * @schema Ec2EbsOptimizedInfo#BaselineIops
   */
  readonly baselineIops?: number;

  /**
   * @schema Ec2EbsOptimizedInfo#MaximumBandwidthInMbps
   */
  readonly maximumBandwidthInMbps?: number;

  /**
   * @schema Ec2EbsOptimizedInfo#MaximumThroughputInMBps
   */
  readonly maximumThroughputInMBps?: number;

  /**
   * @schema Ec2EbsOptimizedInfo#MaximumIops
   */
  readonly maximumIops?: number;

}

/**
 * @schema Ec2NetworkCardInfo
 */
export interface Ec2NetworkCardInfo {
  /**
   * @schema Ec2NetworkCardInfo#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

  /**
   * @schema Ec2NetworkCardInfo#NetworkPerformance
   */
  readonly networkPerformance?: string;

  /**
   * @schema Ec2NetworkCardInfo#MaximumNetworkInterfaces
   */
  readonly maximumNetworkInterfaces?: number;

}

/**
 * @schema Ec2GpuDeviceInfo
 */
export interface Ec2GpuDeviceInfo {
  /**
   * @schema Ec2GpuDeviceInfo#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2GpuDeviceInfo#Manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema Ec2GpuDeviceInfo#Count
   */
  readonly count?: number;

  /**
   * @schema Ec2GpuDeviceInfo#MemoryInfo
   */
  readonly memoryInfo?: Ec2GpuDeviceMemoryInfo;

}

/**
 * @schema Ec2FpgaDeviceInfo
 */
export interface Ec2FpgaDeviceInfo {
  /**
   * @schema Ec2FpgaDeviceInfo#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2FpgaDeviceInfo#Manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema Ec2FpgaDeviceInfo#Count
   */
  readonly count?: number;

  /**
   * @schema Ec2FpgaDeviceInfo#MemoryInfo
   */
  readonly memoryInfo?: Ec2FpgaDeviceMemoryInfo;

}

/**
 * @schema Ec2InferenceDeviceInfo
 */
export interface Ec2InferenceDeviceInfo {
  /**
   * @schema Ec2InferenceDeviceInfo#Count
   */
  readonly count?: number;

  /**
   * @schema Ec2InferenceDeviceInfo#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2InferenceDeviceInfo#Manufacturer
   */
  readonly manufacturer?: string;

}

/**
 * @schema Ec2VolumeStatusDetails
 */
export interface Ec2VolumeStatusDetails {
  /**
   * @schema Ec2VolumeStatusDetails#Name
   */
  readonly name?: string;

  /**
   * @schema Ec2VolumeStatusDetails#Status
   */
  readonly status?: string;

}

/**
 * @schema Ec2DisableFastSnapshotRestoreStateError
 */
export interface Ec2DisableFastSnapshotRestoreStateError {
  /**
   * @schema Ec2DisableFastSnapshotRestoreStateError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2DisableFastSnapshotRestoreStateError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2EnableFastSnapshotRestoreStateError
 */
export interface Ec2EnableFastSnapshotRestoreStateError {
  /**
   * @schema Ec2EnableFastSnapshotRestoreStateError#Code
   */
  readonly code?: string;

  /**
   * @schema Ec2EnableFastSnapshotRestoreStateError#Message
   */
  readonly message?: string;

}

/**
 * @schema Ec2LaunchTemplateEbsBlockDevice
 */
export interface Ec2LaunchTemplateEbsBlockDevice {
  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ec2LaunchTemplateEbsBlockDevice#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema Ec2LaunchTemplateSpotMarketOptions
 */
export interface Ec2LaunchTemplateSpotMarketOptions {
  /**
   * @schema Ec2LaunchTemplateSpotMarketOptions#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptions#SpotInstanceType
   */
  readonly spotInstanceType?: string;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptions#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptions#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema Ec2LaunchTemplateSpotMarketOptions#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema Ec2CapacityReservationTargetResponse
 */
export interface Ec2CapacityReservationTargetResponse {
  /**
   * @schema Ec2CapacityReservationTargetResponse#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema Ec2CapacityReservationTargetResponse#CapacityReservationResourceGroupArn
   */
  readonly capacityReservationResourceGroupArn?: string;

}

/**
 * @schema Ec2SpotCapacityRebalance
 */
export interface Ec2SpotCapacityRebalance {
  /**
   * @schema Ec2SpotCapacityRebalance#ReplacementStrategy
   */
  readonly replacementStrategy?: string;

}

/**
 * @schema Ec2SpotFleetMonitoring
 */
export interface Ec2SpotFleetMonitoring {
  /**
   * @schema Ec2SpotFleetMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Ec2SpotFleetTagSpecification
 */
export interface Ec2SpotFleetTagSpecification {
  /**
   * @schema Ec2SpotFleetTagSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema Ec2SpotFleetTagSpecification#Tags
   */
  readonly tags?: Ec2Tag[];

}

/**
 * @schema Ec2ClassicLoadBalancersConfig
 */
export interface Ec2ClassicLoadBalancersConfig {
  /**
   * @schema Ec2ClassicLoadBalancersConfig#ClassicLoadBalancers
   */
  readonly classicLoadBalancers?: Ec2ClassicLoadBalancer[];

}

/**
 * @schema Ec2TargetGroupsConfig
 */
export interface Ec2TargetGroupsConfig {
  /**
   * @schema Ec2TargetGroupsConfig#TargetGroups
   */
  readonly targetGroups?: Ec2TargetGroup[];

}

/**
 * @schema Ec2InstanceNetworkInterfaceAssociation
 */
export interface Ec2InstanceNetworkInterfaceAssociation {
  /**
   * @schema Ec2InstanceNetworkInterfaceAssociation#CarrierIp
   */
  readonly carrierIp?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceAssociation#IpOwnerId
   */
  readonly ipOwnerId?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceAssociation#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceAssociation#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * @schema Ec2InstanceNetworkInterfaceAttachment
 */
export interface Ec2InstanceNetworkInterfaceAttachment {
  /**
   * @schema Ec2InstanceNetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2InstanceNetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema Ec2InstanceNetworkInterfaceAttachment#Status
   */
  readonly status?: string;

  /**
   * @schema Ec2InstanceNetworkInterfaceAttachment#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema Ec2InstancePrivateIpAddress
 */
export interface Ec2InstancePrivateIpAddress {
  /**
   * @schema Ec2InstancePrivateIpAddress#Association
   */
  readonly association?: Ec2InstanceNetworkInterfaceAssociation;

  /**
   * @schema Ec2InstancePrivateIpAddress#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema Ec2InstancePrivateIpAddress#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Ec2InstancePrivateIpAddress#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema Ec2ScheduledInstancesEbs
 */
export interface Ec2ScheduledInstancesEbs {
  /**
   * @schema Ec2ScheduledInstancesEbs#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema Ec2ScheduledInstancesEbs#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Ec2ScheduledInstancesEbs#Iops
   */
  readonly iops?: number;

  /**
   * @schema Ec2ScheduledInstancesEbs#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Ec2ScheduledInstancesEbs#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Ec2ScheduledInstancesEbs#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema Ec2ScheduledInstancesIpv6Address
 */
export interface Ec2ScheduledInstancesIpv6Address {
  /**
   * @schema Ec2ScheduledInstancesIpv6Address#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema Ec2ScheduledInstancesPrivateIpAddressConfig
 */
export interface Ec2ScheduledInstancesPrivateIpAddressConfig {
  /**
   * @schema Ec2ScheduledInstancesPrivateIpAddressConfig#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema Ec2ScheduledInstancesPrivateIpAddressConfig#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema Ec2PlacementResponse
 */
export interface Ec2PlacementResponse {
  /**
   * @schema Ec2PlacementResponse#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema Ec2Phase1EncryptionAlgorithmsListValue
 */
export interface Ec2Phase1EncryptionAlgorithmsListValue {
  /**
   * @schema Ec2Phase1EncryptionAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase2EncryptionAlgorithmsListValue
 */
export interface Ec2Phase2EncryptionAlgorithmsListValue {
  /**
   * @schema Ec2Phase2EncryptionAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase1IntegrityAlgorithmsListValue
 */
export interface Ec2Phase1IntegrityAlgorithmsListValue {
  /**
   * @schema Ec2Phase1IntegrityAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase2IntegrityAlgorithmsListValue
 */
export interface Ec2Phase2IntegrityAlgorithmsListValue {
  /**
   * @schema Ec2Phase2IntegrityAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2Phase1DhGroupNumbersListValue
 */
export interface Ec2Phase1DhGroupNumbersListValue {
  /**
   * @schema Ec2Phase1DhGroupNumbersListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema Ec2Phase2DhGroupNumbersListValue
 */
export interface Ec2Phase2DhGroupNumbersListValue {
  /**
   * @schema Ec2Phase2DhGroupNumbersListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema Ec2IkeVersionsListValue
 */
export interface Ec2IkeVersionsListValue {
  /**
   * @schema Ec2IkeVersionsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Ec2FleetSpotCapacityRebalance
 */
export interface Ec2FleetSpotCapacityRebalance {
  /**
   * @schema Ec2FleetSpotCapacityRebalance#ReplacementStrategy
   */
  readonly replacementStrategy?: string;

}

/**
 * @schema Ec2GpuDeviceMemoryInfo
 */
export interface Ec2GpuDeviceMemoryInfo {
  /**
   * @schema Ec2GpuDeviceMemoryInfo#SizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema Ec2FpgaDeviceMemoryInfo
 */
export interface Ec2FpgaDeviceMemoryInfo {
  /**
   * @schema Ec2FpgaDeviceMemoryInfo#SizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema Ec2ClassicLoadBalancer
 */
export interface Ec2ClassicLoadBalancer {
  /**
   * @schema Ec2ClassicLoadBalancer#Name
   */
  readonly name?: string;

}

/**
 * @schema Ec2TargetGroup
 */
export interface Ec2TargetGroup {
  /**
   * @schema Ec2TargetGroup#Arn
   */
  readonly arn?: string;

}
