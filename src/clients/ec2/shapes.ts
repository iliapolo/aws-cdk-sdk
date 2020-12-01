/**
 * @schema AcceptReservedInstancesExchangeQuoteRequest
 */
export interface AcceptReservedInstancesExchangeQuoteRequest {
  /**
   * @schema AcceptReservedInstancesExchangeQuoteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AcceptReservedInstancesExchangeQuoteRequest#ReservedInstanceIds
   */
  readonly reservedInstanceIds: string[];

  /**
   * @schema AcceptReservedInstancesExchangeQuoteRequest#TargetConfigurations
   */
  readonly targetConfigurations?: TargetConfigurationRequest[];

}

/**
 * @schema AcceptReservedInstancesExchangeQuoteResult
 */
export interface AcceptReservedInstancesExchangeQuoteResult {
  /**
   * @schema AcceptReservedInstancesExchangeQuoteResult#ExchangeId
   */
  readonly exchangeId?: string;

}

/**
 * @schema AcceptTransitGatewayPeeringAttachmentRequest
 */
export interface AcceptTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema AcceptTransitGatewayPeeringAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema AcceptTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AcceptTransitGatewayPeeringAttachmentResult
 */
export interface AcceptTransitGatewayPeeringAttachmentResult {
  /**
   * @schema AcceptTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;

}

/**
 * @schema AcceptTransitGatewayVpcAttachmentRequest
 */
export interface AcceptTransitGatewayVpcAttachmentRequest {
  /**
   * @schema AcceptTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema AcceptTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AcceptTransitGatewayVpcAttachmentResult
 */
export interface AcceptTransitGatewayVpcAttachmentResult {
  /**
   * @schema AcceptTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: TransitGatewayVpcAttachment;

}

/**
 * @schema AcceptVpcEndpointConnectionsRequest
 */
export interface AcceptVpcEndpointConnectionsRequest {
  /**
   * @schema AcceptVpcEndpointConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AcceptVpcEndpointConnectionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema AcceptVpcEndpointConnectionsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds: string[];

}

/**
 * @schema AcceptVpcEndpointConnectionsResult
 */
export interface AcceptVpcEndpointConnectionsResult {
  /**
   * @schema AcceptVpcEndpointConnectionsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema AcceptVpcPeeringConnectionRequest
 */
export interface AcceptVpcPeeringConnectionRequest {
  /**
   * @schema AcceptVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AcceptVpcPeeringConnectionRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema AcceptVpcPeeringConnectionResult
 */
export interface AcceptVpcPeeringConnectionResult {
  /**
   * @schema AcceptVpcPeeringConnectionResult#VpcPeeringConnection
   */
  readonly vpcPeeringConnection?: VpcPeeringConnection;

}

/**
 * @schema AdvertiseByoipCidrRequest
 */
export interface AdvertiseByoipCidrRequest {
  /**
   * @schema AdvertiseByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema AdvertiseByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AdvertiseByoipCidrResult
 */
export interface AdvertiseByoipCidrResult {
  /**
   * @schema AdvertiseByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema AllocateAddressRequest
 */
export interface AllocateAddressRequest {
  /**
   * @schema AllocateAddressRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema AllocateAddressRequest#Address
   */
  readonly address?: string;

  /**
   * @schema AllocateAddressRequest#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema AllocateAddressRequest#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema AllocateAddressRequest#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema AllocateAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AllocateAddressResult
 */
export interface AllocateAddressResult {
  /**
   * @schema AllocateAddressResult#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema AllocateAddressResult#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema AllocateAddressResult#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema AllocateAddressResult#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema AllocateAddressResult#Domain
   */
  readonly domain?: string;

  /**
   * @schema AllocateAddressResult#CustomerOwnedIp
   */
  readonly customerOwnedIp?: string;

  /**
   * @schema AllocateAddressResult#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema AllocateAddressResult#CarrierIp
   */
  readonly carrierIp?: string;

}

/**
 * @schema AllocateHostsRequest
 */
export interface AllocateHostsRequest {
  /**
   * @schema AllocateHostsRequest#AutoPlacement
   */
  readonly autoPlacement?: string;

  /**
   * @schema AllocateHostsRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema AllocateHostsRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AllocateHostsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema AllocateHostsRequest#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema AllocateHostsRequest#Quantity
   */
  readonly quantity: number;

  /**
   * @schema AllocateHostsRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema AllocateHostsRequest#HostRecovery
   */
  readonly hostRecovery?: string;

}

/**
 * @schema AllocateHostsResult
 */
export interface AllocateHostsResult {
  /**
   * @schema AllocateHostsResult#HostIds
   */
  readonly hostIds?: string[];

}

/**
 * @schema ApplySecurityGroupsToClientVpnTargetNetworkRequest
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkRequest {
  /**
   * @schema ApplySecurityGroupsToClientVpnTargetNetworkRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema ApplySecurityGroupsToClientVpnTargetNetworkRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema ApplySecurityGroupsToClientVpnTargetNetworkRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema ApplySecurityGroupsToClientVpnTargetNetworkRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ApplySecurityGroupsToClientVpnTargetNetworkResult
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkResult {
  /**
   * @schema ApplySecurityGroupsToClientVpnTargetNetworkResult#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema AssignIpv6AddressesRequest
 */
export interface AssignIpv6AddressesRequest {
  /**
   * @schema AssignIpv6AddressesRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema AssignIpv6AddressesRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: string[];

  /**
   * @schema AssignIpv6AddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema AssignIpv6AddressesResult
 */
export interface AssignIpv6AddressesResult {
  /**
   * @schema AssignIpv6AddressesResult#AssignedIpv6Addresses
   */
  readonly assignedIpv6Addresses?: string[];

  /**
   * @schema AssignIpv6AddressesResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

}

/**
 * @schema AssignPrivateIpAddressesRequest
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * @schema AssignPrivateIpAddressesRequest#AllowReassignment
   */
  readonly allowReassignment?: boolean;

  /**
   * @schema AssignPrivateIpAddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema AssignPrivateIpAddressesRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses?: string[];

  /**
   * @schema AssignPrivateIpAddressesRequest#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

}

/**
 * @schema AssignPrivateIpAddressesResult
 */
export interface AssignPrivateIpAddressesResult {
  /**
   * @schema AssignPrivateIpAddressesResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema AssignPrivateIpAddressesResult#AssignedPrivateIpAddresses
   */
  readonly assignedPrivateIpAddresses?: AssignedPrivateIpAddress[];

}

/**
 * @schema AssociateAddressRequest
 */
export interface AssociateAddressRequest {
  /**
   * @schema AssociateAddressRequest#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema AssociateAddressRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AssociateAddressRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema AssociateAddressRequest#AllowReassociation
   */
  readonly allowReassociation?: boolean;

  /**
   * @schema AssociateAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AssociateAddressRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema AssociateAddressRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema AssociateAddressResult
 */
export interface AssociateAddressResult {
  /**
   * @schema AssociateAddressResult#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema AssociateClientVpnTargetNetworkRequest
 */
export interface AssociateClientVpnTargetNetworkRequest {
  /**
   * @schema AssociateClientVpnTargetNetworkRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema AssociateClientVpnTargetNetworkRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema AssociateClientVpnTargetNetworkRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AssociateClientVpnTargetNetworkRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AssociateClientVpnTargetNetworkResult
 */
export interface AssociateClientVpnTargetNetworkResult {
  /**
   * @schema AssociateClientVpnTargetNetworkResult#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AssociateClientVpnTargetNetworkResult#Status
   */
  readonly status?: AssociationStatus;

}

/**
 * @schema AssociateDhcpOptionsRequest
 */
export interface AssociateDhcpOptionsRequest {
  /**
   * @schema AssociateDhcpOptionsRequest#DhcpOptionsId
   */
  readonly dhcpOptionsId: string;

  /**
   * @schema AssociateDhcpOptionsRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema AssociateDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AssociateEnclaveCertificateIamRoleRequest
 */
export interface AssociateEnclaveCertificateIamRoleRequest {
  /**
   * @schema AssociateEnclaveCertificateIamRoleRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AssociateEnclaveCertificateIamRoleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema AssociateEnclaveCertificateIamRoleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AssociateEnclaveCertificateIamRoleResult
 */
export interface AssociateEnclaveCertificateIamRoleResult {
  /**
   * @schema AssociateEnclaveCertificateIamRoleResult#CertificateS3BucketName
   */
  readonly certificateS3BucketName?: string;

  /**
   * @schema AssociateEnclaveCertificateIamRoleResult#CertificateS3ObjectKey
   */
  readonly certificateS3ObjectKey?: string;

  /**
   * @schema AssociateEnclaveCertificateIamRoleResult#EncryptionKmsKeyId
   */
  readonly encryptionKmsKeyId?: string;

}

/**
 * @schema AssociateIamInstanceProfileRequest
 */
export interface AssociateIamInstanceProfileRequest {
  /**
   * @schema AssociateIamInstanceProfileRequest#IamInstanceProfile
   */
  readonly iamInstanceProfile: IamInstanceProfileSpecification;

  /**
   * @schema AssociateIamInstanceProfileRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema AssociateIamInstanceProfileResult
 */
export interface AssociateIamInstanceProfileResult {
  /**
   * @schema AssociateIamInstanceProfileResult#IamInstanceProfileAssociation
   */
  readonly iamInstanceProfileAssociation?: IamInstanceProfileAssociation;

}

/**
 * @schema AssociateRouteTableRequest
 */
export interface AssociateRouteTableRequest {
  /**
   * @schema AssociateRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AssociateRouteTableRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema AssociateRouteTableRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema AssociateRouteTableRequest#GatewayId
   */
  readonly gatewayId?: string;

}

/**
 * @schema AssociateRouteTableResult
 */
export interface AssociateRouteTableResult {
  /**
   * @schema AssociateRouteTableResult#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AssociateRouteTableResult#AssociationState
   */
  readonly associationState?: RouteTableAssociationState;

}

/**
 * @schema AssociateSubnetCidrBlockRequest
 */
export interface AssociateSubnetCidrBlockRequest {
  /**
   * @schema AssociateSubnetCidrBlockRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock: string;

  /**
   * @schema AssociateSubnetCidrBlockRequest#SubnetId
   */
  readonly subnetId: string;

}

/**
 * @schema AssociateSubnetCidrBlockResult
 */
export interface AssociateSubnetCidrBlockResult {
  /**
   * @schema AssociateSubnetCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * @schema AssociateSubnetCidrBlockResult#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema AssociateTransitGatewayMulticastDomainRequest
 */
export interface AssociateTransitGatewayMulticastDomainRequest {
  /**
   * @schema AssociateTransitGatewayMulticastDomainRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema AssociateTransitGatewayMulticastDomainRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema AssociateTransitGatewayMulticastDomainRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema AssociateTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AssociateTransitGatewayMulticastDomainResult
 */
export interface AssociateTransitGatewayMulticastDomainResult {
  /**
   * @schema AssociateTransitGatewayMulticastDomainResult#Associations
   */
  readonly associations?: TransitGatewayMulticastDomainAssociations;

}

/**
 * @schema AssociateTransitGatewayRouteTableRequest
 */
export interface AssociateTransitGatewayRouteTableRequest {
  /**
   * @schema AssociateTransitGatewayRouteTableRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema AssociateTransitGatewayRouteTableRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema AssociateTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AssociateTransitGatewayRouteTableResult
 */
export interface AssociateTransitGatewayRouteTableResult {
  /**
   * @schema AssociateTransitGatewayRouteTableResult#Association
   */
  readonly association?: TransitGatewayAssociation;

}

/**
 * @schema AssociateVpcCidrBlockRequest
 */
export interface AssociateVpcCidrBlockRequest {
  /**
   * @schema AssociateVpcCidrBlockRequest#AmazonProvidedIpv6CidrBlock
   */
  readonly amazonProvidedIpv6CidrBlock?: boolean;

  /**
   * @schema AssociateVpcCidrBlockRequest#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema AssociateVpcCidrBlockRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema AssociateVpcCidrBlockRequest#Ipv6CidrBlockNetworkBorderGroup
   */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * @schema AssociateVpcCidrBlockRequest#Ipv6Pool
   */
  readonly ipv6Pool?: string;

  /**
   * @schema AssociateVpcCidrBlockRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

}

/**
 * @schema AssociateVpcCidrBlockResult
 */
export interface AssociateVpcCidrBlockResult {
  /**
   * @schema AssociateVpcCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * @schema AssociateVpcCidrBlockResult#CidrBlockAssociation
   */
  readonly cidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * @schema AssociateVpcCidrBlockResult#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema AttachClassicLinkVpcRequest
 */
export interface AttachClassicLinkVpcRequest {
  /**
   * @schema AttachClassicLinkVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AttachClassicLinkVpcRequest#Groups
   */
  readonly groups: string[];

  /**
   * @schema AttachClassicLinkVpcRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AttachClassicLinkVpcRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema AttachClassicLinkVpcResult
 */
export interface AttachClassicLinkVpcResult {
  /**
   * @schema AttachClassicLinkVpcResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema AttachInternetGatewayRequest
 */
export interface AttachInternetGatewayRequest {
  /**
   * @schema AttachInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AttachInternetGatewayRequest#InternetGatewayId
   */
  readonly internetGatewayId: string;

  /**
   * @schema AttachInternetGatewayRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema AttachNetworkInterfaceRequest
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * @schema AttachNetworkInterfaceRequest#DeviceIndex
   */
  readonly deviceIndex: number;

  /**
   * @schema AttachNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AttachNetworkInterfaceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AttachNetworkInterfaceRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema AttachNetworkInterfaceRequest#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema AttachNetworkInterfaceResult
 */
export interface AttachNetworkInterfaceResult {
  /**
   * @schema AttachNetworkInterfaceResult#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema AttachNetworkInterfaceResult#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema AttachVolumeRequest
 */
export interface AttachVolumeRequest {
  /**
   * @schema AttachVolumeRequest#Device
   */
  readonly device: string;

  /**
   * @schema AttachVolumeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AttachVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema AttachVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema VolumeAttachment
 */
export interface VolumeAttachment {
  /**
   * @schema VolumeAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema VolumeAttachment#Device
   */
  readonly device?: string;

  /**
   * @schema VolumeAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema VolumeAttachment#State
   */
  readonly state?: string;

  /**
   * @schema VolumeAttachment#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema VolumeAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

}

/**
 * @schema AttachVpnGatewayRequest
 */
export interface AttachVpnGatewayRequest {
  /**
   * @schema AttachVpnGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema AttachVpnGatewayRequest#VpnGatewayId
   */
  readonly vpnGatewayId: string;

  /**
   * @schema AttachVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AttachVpnGatewayResult
 */
export interface AttachVpnGatewayResult {
  /**
   * @schema AttachVpnGatewayResult#VpcAttachment
   */
  readonly vpcAttachment?: VpcAttachment;

}

/**
 * @schema AuthorizeClientVpnIngressRequest
 */
export interface AuthorizeClientVpnIngressRequest {
  /**
   * @schema AuthorizeClientVpnIngressRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema AuthorizeClientVpnIngressRequest#TargetNetworkCidr
   */
  readonly targetNetworkCidr: string;

  /**
   * @schema AuthorizeClientVpnIngressRequest#AccessGroupId
   */
  readonly accessGroupId?: string;

  /**
   * @schema AuthorizeClientVpnIngressRequest#AuthorizeAllGroups
   */
  readonly authorizeAllGroups?: boolean;

  /**
   * @schema AuthorizeClientVpnIngressRequest#Description
   */
  readonly description?: string;

  /**
   * @schema AuthorizeClientVpnIngressRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AuthorizeClientVpnIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema AuthorizeClientVpnIngressResult
 */
export interface AuthorizeClientVpnIngressResult {
  /**
   * @schema AuthorizeClientVpnIngressResult#Status
   */
  readonly status?: ClientVpnAuthorizationRuleStatus;

}

/**
 * @schema AuthorizeSecurityGroupEgressRequest
 */
export interface AuthorizeSecurityGroupEgressRequest {
  /**
   * @schema AuthorizeSecurityGroupEgressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#IpPermissions
   */
  readonly ipPermissions?: IpPermission[];

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema AuthorizeSecurityGroupEgressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

}

/**
 * @schema AuthorizeSecurityGroupIngressRequest
 */
export interface AuthorizeSecurityGroupIngressRequest {
  /**
   * @schema AuthorizeSecurityGroupIngressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#IpPermissions
   */
  readonly ipPermissions?: IpPermission[];

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema AuthorizeSecurityGroupIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema BundleInstanceRequest
 */
export interface BundleInstanceRequest {
  /**
   * @schema BundleInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema BundleInstanceRequest#Storage
   */
  readonly storage: Storage;

  /**
   * @schema BundleInstanceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema BundleInstanceResult
 */
export interface BundleInstanceResult {
  /**
   * @schema BundleInstanceResult#BundleTask
   */
  readonly bundleTask?: BundleTask;

}

/**
 * @schema CancelBundleTaskRequest
 */
export interface CancelBundleTaskRequest {
  /**
   * @schema CancelBundleTaskRequest#BundleId
   */
  readonly bundleId: string;

  /**
   * @schema CancelBundleTaskRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CancelBundleTaskResult
 */
export interface CancelBundleTaskResult {
  /**
   * @schema CancelBundleTaskResult#BundleTask
   */
  readonly bundleTask?: BundleTask;

}

/**
 * @schema CancelCapacityReservationRequest
 */
export interface CancelCapacityReservationRequest {
  /**
   * @schema CancelCapacityReservationRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema CancelCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CancelCapacityReservationResult
 */
export interface CancelCapacityReservationResult {
  /**
   * @schema CancelCapacityReservationResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema CancelConversionRequest
 */
export interface CancelConversionRequest {
  /**
   * @schema CancelConversionRequest#ConversionTaskId
   */
  readonly conversionTaskId: string;

  /**
   * @schema CancelConversionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CancelConversionRequest#ReasonMessage
   */
  readonly reasonMessage?: string;

}

/**
 * @schema CancelExportTaskRequest
 */
export interface CancelExportTaskRequest {
  /**
   * @schema CancelExportTaskRequest#ExportTaskId
   */
  readonly exportTaskId: string;

}

/**
 * @schema CancelImportTaskRequest
 */
export interface CancelImportTaskRequest {
  /**
   * @schema CancelImportTaskRequest#CancelReason
   */
  readonly cancelReason?: string;

  /**
   * @schema CancelImportTaskRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CancelImportTaskRequest#ImportTaskId
   */
  readonly importTaskId?: string;

}

/**
 * @schema CancelImportTaskResult
 */
export interface CancelImportTaskResult {
  /**
   * @schema CancelImportTaskResult#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema CancelImportTaskResult#PreviousState
   */
  readonly previousState?: string;

  /**
   * @schema CancelImportTaskResult#State
   */
  readonly state?: string;

}

/**
 * @schema CancelReservedInstancesListingRequest
 */
export interface CancelReservedInstancesListingRequest {
  /**
   * @schema CancelReservedInstancesListingRequest#ReservedInstancesListingId
   */
  readonly reservedInstancesListingId: string;

}

/**
 * @schema CancelReservedInstancesListingResult
 */
export interface CancelReservedInstancesListingResult {
  /**
   * @schema CancelReservedInstancesListingResult#ReservedInstancesListings
   */
  readonly reservedInstancesListings?: ReservedInstancesListing[];

}

/**
 * @schema CancelSpotFleetRequestsRequest
 */
export interface CancelSpotFleetRequestsRequest {
  /**
   * @schema CancelSpotFleetRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CancelSpotFleetRequestsRequest#SpotFleetRequestIds
   */
  readonly spotFleetRequestIds: string[];

  /**
   * @schema CancelSpotFleetRequestsRequest#TerminateInstances
   */
  readonly terminateInstances: boolean;

}

/**
 * @schema CancelSpotFleetRequestsResponse
 */
export interface CancelSpotFleetRequestsResponse {
  /**
   * @schema CancelSpotFleetRequestsResponse#SuccessfulFleetRequests
   */
  readonly successfulFleetRequests?: CancelSpotFleetRequestsSuccessItem[];

  /**
   * @schema CancelSpotFleetRequestsResponse#UnsuccessfulFleetRequests
   */
  readonly unsuccessfulFleetRequests?: CancelSpotFleetRequestsErrorItem[];

}

/**
 * @schema CancelSpotInstanceRequestsRequest
 */
export interface CancelSpotInstanceRequestsRequest {
  /**
   * @schema CancelSpotInstanceRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CancelSpotInstanceRequestsRequest#SpotInstanceRequestIds
   */
  readonly spotInstanceRequestIds: string[];

}

/**
 * @schema CancelSpotInstanceRequestsResult
 */
export interface CancelSpotInstanceRequestsResult {
  /**
   * @schema CancelSpotInstanceRequestsResult#CancelledSpotInstanceRequests
   */
  readonly cancelledSpotInstanceRequests?: CancelledSpotInstanceRequest[];

}

/**
 * @schema ConfirmProductInstanceRequest
 */
export interface ConfirmProductInstanceRequest {
  /**
   * @schema ConfirmProductInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ConfirmProductInstanceRequest#ProductCode
   */
  readonly productCode: string;

  /**
   * @schema ConfirmProductInstanceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ConfirmProductInstanceResult
 */
export interface ConfirmProductInstanceResult {
  /**
   * @schema ConfirmProductInstanceResult#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema ConfirmProductInstanceResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema CopyFpgaImageRequest
 */
export interface CopyFpgaImageRequest {
  /**
   * @schema CopyFpgaImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CopyFpgaImageRequest#SourceFpgaImageId
   */
  readonly sourceFpgaImageId: string;

  /**
   * @schema CopyFpgaImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CopyFpgaImageRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CopyFpgaImageRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema CopyFpgaImageRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CopyFpgaImageResult
 */
export interface CopyFpgaImageResult {
  /**
   * @schema CopyFpgaImageResult#FpgaImageId
   */
  readonly fpgaImageId?: string;

}

/**
 * @schema CopyImageRequest
 */
export interface CopyImageRequest {
  /**
   * @schema CopyImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CopyImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CopyImageRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema CopyImageRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CopyImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema CopyImageRequest#SourceImageId
   */
  readonly sourceImageId: string;

  /**
   * @schema CopyImageRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema CopyImageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CopyImageResult
 */
export interface CopyImageResult {
  /**
   * @schema CopyImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema CopySnapshotRequest
 */
export interface CopySnapshotRequest {
  /**
   * @schema CopySnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CopySnapshotRequest#DestinationRegion
   */
  readonly destinationRegion?: string;

  /**
   * @schema CopySnapshotRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema CopySnapshotRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CopySnapshotRequest#PresignedUrl
   */
  readonly presignedUrl?: string;

  /**
   * @schema CopySnapshotRequest#SourceRegion
   */
  readonly sourceRegion: string;

  /**
   * @schema CopySnapshotRequest#SourceSnapshotId
   */
  readonly sourceSnapshotId: string;

  /**
   * @schema CopySnapshotRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CopySnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CopySnapshotResult
 */
export interface CopySnapshotResult {
  /**
   * @schema CopySnapshotResult#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema CopySnapshotResult#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCapacityReservationRequest
 */
export interface CreateCapacityReservationRequest {
  /**
   * @schema CreateCapacityReservationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateCapacityReservationRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateCapacityReservationRequest#InstancePlatform
   */
  readonly instancePlatform: string;

  /**
   * @schema CreateCapacityReservationRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateCapacityReservationRequest#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema CreateCapacityReservationRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema CreateCapacityReservationRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema CreateCapacityReservationRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema CreateCapacityReservationRequest#EphemeralStorage
   */
  readonly ephemeralStorage?: boolean;

  /**
   * @schema CreateCapacityReservationRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema CreateCapacityReservationRequest#EndDateType
   */
  readonly endDateType?: string;

  /**
   * @schema CreateCapacityReservationRequest#InstanceMatchCriteria
   */
  readonly instanceMatchCriteria?: string;

  /**
   * @schema CreateCapacityReservationRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateCapacityReservationResult
 */
export interface CreateCapacityReservationResult {
  /**
   * @schema CreateCapacityReservationResult#CapacityReservation
   */
  readonly capacityReservation?: CapacityReservation;

}

/**
 * @schema CreateCarrierGatewayRequest
 */
export interface CreateCarrierGatewayRequest {
  /**
   * @schema CreateCarrierGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateCarrierGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateCarrierGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateCarrierGatewayRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateCarrierGatewayResult
 */
export interface CreateCarrierGatewayResult {
  /**
   * @schema CreateCarrierGatewayResult#CarrierGateway
   */
  readonly carrierGateway?: CarrierGateway;

}

/**
 * @schema CreateClientVpnEndpointRequest
 */
export interface CreateClientVpnEndpointRequest {
  /**
   * @schema CreateClientVpnEndpointRequest#ClientCidrBlock
   */
  readonly clientCidrBlock: string;

  /**
   * @schema CreateClientVpnEndpointRequest#ServerCertificateArn
   */
  readonly serverCertificateArn: string;

  /**
   * @schema CreateClientVpnEndpointRequest#AuthenticationOptions
   */
  readonly authenticationOptions: ClientVpnAuthenticationRequest[];

  /**
   * @schema CreateClientVpnEndpointRequest#ConnectionLogOptions
   */
  readonly connectionLogOptions: ConnectionLogOptions;

  /**
   * @schema CreateClientVpnEndpointRequest#DnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema CreateClientVpnEndpointRequest#TransportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema CreateClientVpnEndpointRequest#VpnPort
   */
  readonly vpnPort?: number;

  /**
   * @schema CreateClientVpnEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateClientVpnEndpointRequest#SplitTunnel
   */
  readonly splitTunnel?: boolean;

  /**
   * @schema CreateClientVpnEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateClientVpnEndpointRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateClientVpnEndpointRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateClientVpnEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateClientVpnEndpointRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CreateClientVpnEndpointRequest#SelfServicePortal
   */
  readonly selfServicePortal?: string;

  /**
   * @schema CreateClientVpnEndpointRequest#ClientConnectOptions
   */
  readonly clientConnectOptions?: ClientConnectOptions;

}

/**
 * @schema CreateClientVpnEndpointResult
 */
export interface CreateClientVpnEndpointResult {
  /**
   * @schema CreateClientVpnEndpointResult#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema CreateClientVpnEndpointResult#Status
   */
  readonly status?: ClientVpnEndpointStatus;

  /**
   * @schema CreateClientVpnEndpointResult#DnsName
   */
  readonly dnsName?: string;

}

/**
 * @schema CreateClientVpnRouteRequest
 */
export interface CreateClientVpnRouteRequest {
  /**
   * @schema CreateClientVpnRouteRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema CreateClientVpnRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema CreateClientVpnRouteRequest#TargetVpcSubnetId
   */
  readonly targetVpcSubnetId: string;

  /**
   * @schema CreateClientVpnRouteRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateClientVpnRouteRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateClientVpnRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateClientVpnRouteResult
 */
export interface CreateClientVpnRouteResult {
  /**
   * @schema CreateClientVpnRouteResult#Status
   */
  readonly status?: ClientVpnRouteStatus;

}

/**
 * @schema CreateCustomerGatewayRequest
 */
export interface CreateCustomerGatewayRequest {
  /**
   * @schema CreateCustomerGatewayRequest#BgpAsn
   */
  readonly bgpAsn: number;

  /**
   * @schema CreateCustomerGatewayRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema CreateCustomerGatewayRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CreateCustomerGatewayRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateCustomerGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateCustomerGatewayRequest#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema CreateCustomerGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateCustomerGatewayResult
 */
export interface CreateCustomerGatewayResult {
  /**
   * @schema CreateCustomerGatewayResult#CustomerGateway
   */
  readonly customerGateway?: CustomerGateway;

}

/**
 * @schema CreateDefaultSubnetRequest
 */
export interface CreateDefaultSubnetRequest {
  /**
   * @schema CreateDefaultSubnetRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateDefaultSubnetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateDefaultSubnetResult
 */
export interface CreateDefaultSubnetResult {
  /**
   * @schema CreateDefaultSubnetResult#Subnet
   */
  readonly subnet?: Subnet;

}

/**
 * @schema CreateDefaultVpcRequest
 */
export interface CreateDefaultVpcRequest {
  /**
   * @schema CreateDefaultVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateDefaultVpcResult
 */
export interface CreateDefaultVpcResult {
  /**
   * @schema CreateDefaultVpcResult#Vpc
   */
  readonly vpc?: Vpc;

}

/**
 * @schema CreateDhcpOptionsRequest
 */
export interface CreateDhcpOptionsRequest {
  /**
   * @schema CreateDhcpOptionsRequest#DhcpConfigurations
   */
  readonly dhcpConfigurations: NewDhcpConfiguration[];

  /**
   * @schema CreateDhcpOptionsRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateDhcpOptionsResult
 */
export interface CreateDhcpOptionsResult {
  /**
   * @schema CreateDhcpOptionsResult#DhcpOptions
   */
  readonly dhcpOptions?: DhcpOptions;

}

/**
 * @schema CreateEgressOnlyInternetGatewayRequest
 */
export interface CreateEgressOnlyInternetGatewayRequest {
  /**
   * @schema CreateEgressOnlyInternetGatewayRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateEgressOnlyInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateEgressOnlyInternetGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateEgressOnlyInternetGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateEgressOnlyInternetGatewayResult
 */
export interface CreateEgressOnlyInternetGatewayResult {
  /**
   * @schema CreateEgressOnlyInternetGatewayResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateEgressOnlyInternetGatewayResult#EgressOnlyInternetGateway
   */
  readonly egressOnlyInternetGateway?: EgressOnlyInternetGateway;

}

/**
 * @schema CreateFleetRequest
 */
export interface CreateFleetRequest {
  /**
   * @schema CreateFleetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateFleetRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateFleetRequest#SpotOptions
   */
  readonly spotOptions?: SpotOptionsRequest;

  /**
   * @schema CreateFleetRequest#OnDemandOptions
   */
  readonly onDemandOptions?: OnDemandOptionsRequest;

  /**
   * @schema CreateFleetRequest#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema CreateFleetRequest#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs: FleetLaunchTemplateConfigRequest[];

  /**
   * @schema CreateFleetRequest#TargetCapacitySpecification
   */
  readonly targetCapacitySpecification: TargetCapacitySpecificationRequest;

  /**
   * @schema CreateFleetRequest#TerminateInstancesWithExpiration
   */
  readonly terminateInstancesWithExpiration?: boolean;

  /**
   * @schema CreateFleetRequest#Type
   */
  readonly type?: string;

  /**
   * @schema CreateFleetRequest#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema CreateFleetRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema CreateFleetRequest#ReplaceUnhealthyInstances
   */
  readonly replaceUnhealthyInstances?: boolean;

  /**
   * @schema CreateFleetRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateFleetResult
 */
export interface CreateFleetResult {
  /**
   * @schema CreateFleetResult#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema CreateFleetResult#Errors
   */
  readonly errors?: CreateFleetError[];

  /**
   * @schema CreateFleetResult#Instances
   */
  readonly instances?: CreateFleetInstance[];

}

/**
 * @schema CreateFlowLogsRequest
 */
export interface CreateFlowLogsRequest {
  /**
   * @schema CreateFlowLogsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateFlowLogsRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateFlowLogsRequest#DeliverLogsPermissionArn
   */
  readonly deliverLogsPermissionArn?: string;

  /**
   * @schema CreateFlowLogsRequest#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema CreateFlowLogsRequest#ResourceIds
   */
  readonly resourceIds: string[];

  /**
   * @schema CreateFlowLogsRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema CreateFlowLogsRequest#TrafficType
   */
  readonly trafficType: string;

  /**
   * @schema CreateFlowLogsRequest#LogDestinationType
   */
  readonly logDestinationType?: string;

  /**
   * @schema CreateFlowLogsRequest#LogDestination
   */
  readonly logDestination?: string;

  /**
   * @schema CreateFlowLogsRequest#LogFormat
   */
  readonly logFormat?: string;

  /**
   * @schema CreateFlowLogsRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateFlowLogsRequest#MaxAggregationInterval
   */
  readonly maxAggregationInterval?: number;

}

/**
 * @schema CreateFlowLogsResult
 */
export interface CreateFlowLogsResult {
  /**
   * @schema CreateFlowLogsResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateFlowLogsResult#FlowLogIds
   */
  readonly flowLogIds?: string[];

  /**
   * @schema CreateFlowLogsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema CreateFpgaImageRequest
 */
export interface CreateFpgaImageRequest {
  /**
   * @schema CreateFpgaImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateFpgaImageRequest#InputStorageLocation
   */
  readonly inputStorageLocation: StorageLocation;

  /**
   * @schema CreateFpgaImageRequest#LogsStorageLocation
   */
  readonly logsStorageLocation?: StorageLocation;

  /**
   * @schema CreateFpgaImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateFpgaImageRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateFpgaImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateFpgaImageRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateFpgaImageResult
 */
export interface CreateFpgaImageResult {
  /**
   * @schema CreateFpgaImageResult#FpgaImageId
   */
  readonly fpgaImageId?: string;

  /**
   * @schema CreateFpgaImageResult#FpgaImageGlobalId
   */
  readonly fpgaImageGlobalId?: string;

}

/**
 * @schema CreateImageRequest
 */
export interface CreateImageRequest {
  /**
   * @schema CreateImageRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema CreateImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateImageRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema CreateImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateImageRequest#NoReboot
   */
  readonly noReboot?: boolean;

}

/**
 * @schema CreateImageResult
 */
export interface CreateImageResult {
  /**
   * @schema CreateImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema CreateInstanceExportTaskRequest
 */
export interface CreateInstanceExportTaskRequest {
  /**
   * @schema CreateInstanceExportTaskRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateInstanceExportTaskRequest#ExportToS3Task
   */
  readonly exportToS3Task: ExportToS3TaskSpecification;

  /**
   * @schema CreateInstanceExportTaskRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema CreateInstanceExportTaskRequest#TargetEnvironment
   */
  readonly targetEnvironment: string;

  /**
   * @schema CreateInstanceExportTaskRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateInstanceExportTaskResult
 */
export interface CreateInstanceExportTaskResult {
  /**
   * @schema CreateInstanceExportTaskResult#ExportTask
   */
  readonly exportTask?: ExportTask;

}

/**
 * @schema CreateInternetGatewayRequest
 */
export interface CreateInternetGatewayRequest {
  /**
   * @schema CreateInternetGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateInternetGatewayResult
 */
export interface CreateInternetGatewayResult {
  /**
   * @schema CreateInternetGatewayResult#InternetGateway
   */
  readonly internetGateway?: InternetGateway;

}

/**
 * @schema CreateKeyPairRequest
 */
export interface CreateKeyPairRequest {
  /**
   * @schema CreateKeyPairRequest#KeyName
   */
  readonly keyName: string;

  /**
   * @schema CreateKeyPairRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateKeyPairRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema KeyPair
 */
export interface KeyPair {
  /**
   * @schema KeyPair#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema KeyPair#KeyMaterial
   */
  readonly keyMaterial?: string;

  /**
   * @schema KeyPair#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema KeyPair#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema KeyPair#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateLaunchTemplateRequest
 */
export interface CreateLaunchTemplateRequest {
  /**
   * @schema CreateLaunchTemplateRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateLaunchTemplateRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateLaunchTemplateRequest#LaunchTemplateName
   */
  readonly launchTemplateName: string;

  /**
   * @schema CreateLaunchTemplateRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema CreateLaunchTemplateRequest#LaunchTemplateData
   */
  readonly launchTemplateData: RequestLaunchTemplateData;

  /**
   * @schema CreateLaunchTemplateRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateLaunchTemplateResult
 */
export interface CreateLaunchTemplateResult {
  /**
   * @schema CreateLaunchTemplateResult#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplate;

  /**
   * @schema CreateLaunchTemplateResult#Warning
   */
  readonly warning?: ValidationWarning;

}

/**
 * @schema CreateLaunchTemplateVersionRequest
 */
export interface CreateLaunchTemplateVersionRequest {
  /**
   * @schema CreateLaunchTemplateVersionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateLaunchTemplateVersionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateLaunchTemplateVersionRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema CreateLaunchTemplateVersionRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema CreateLaunchTemplateVersionRequest#SourceVersion
   */
  readonly sourceVersion?: string;

  /**
   * @schema CreateLaunchTemplateVersionRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema CreateLaunchTemplateVersionRequest#LaunchTemplateData
   */
  readonly launchTemplateData: RequestLaunchTemplateData;

}

/**
 * @schema CreateLaunchTemplateVersionResult
 */
export interface CreateLaunchTemplateVersionResult {
  /**
   * @schema CreateLaunchTemplateVersionResult#LaunchTemplateVersion
   */
  readonly launchTemplateVersion?: LaunchTemplateVersion;

  /**
   * @schema CreateLaunchTemplateVersionResult#Warning
   */
  readonly warning?: ValidationWarning;

}

/**
 * @schema CreateLocalGatewayRouteRequest
 */
export interface CreateLocalGatewayRouteRequest {
  /**
   * @schema CreateLocalGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema CreateLocalGatewayRouteRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema CreateLocalGatewayRouteRequest#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId: string;

  /**
   * @schema CreateLocalGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateLocalGatewayRouteResult
 */
export interface CreateLocalGatewayRouteResult {
  /**
   * @schema CreateLocalGatewayRouteResult#Route
   */
  readonly route?: LocalGatewayRoute;

}

/**
 * @schema CreateLocalGatewayRouteTableVpcAssociationRequest
 */
export interface CreateLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @schema CreateLocalGatewayRouteTableVpcAssociationRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema CreateLocalGatewayRouteTableVpcAssociationRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateLocalGatewayRouteTableVpcAssociationRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateLocalGatewayRouteTableVpcAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateLocalGatewayRouteTableVpcAssociationResult
 */
export interface CreateLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @schema CreateLocalGatewayRouteTableVpcAssociationResult#LocalGatewayRouteTableVpcAssociation
   */
  readonly localGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;

}

/**
 * @schema CreateManagedPrefixListRequest
 */
export interface CreateManagedPrefixListRequest {
  /**
   * @schema CreateManagedPrefixListRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateManagedPrefixListRequest#PrefixListName
   */
  readonly prefixListName: string;

  /**
   * @schema CreateManagedPrefixListRequest#Entries
   */
  readonly entries?: AddPrefixListEntry[];

  /**
   * @schema CreateManagedPrefixListRequest#MaxEntries
   */
  readonly maxEntries: number;

  /**
   * @schema CreateManagedPrefixListRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateManagedPrefixListRequest#AddressFamily
   */
  readonly addressFamily: string;

  /**
   * @schema CreateManagedPrefixListRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateManagedPrefixListResult
 */
export interface CreateManagedPrefixListResult {
  /**
   * @schema CreateManagedPrefixListResult#PrefixList
   */
  readonly prefixList?: ManagedPrefixList;

}

/**
 * @schema CreateNatGatewayRequest
 */
export interface CreateNatGatewayRequest {
  /**
   * @schema CreateNatGatewayRequest#AllocationId
   */
  readonly allocationId: string;

  /**
   * @schema CreateNatGatewayRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateNatGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateNatGatewayRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema CreateNatGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateNatGatewayResult
 */
export interface CreateNatGatewayResult {
  /**
   * @schema CreateNatGatewayResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateNatGatewayResult#NatGateway
   */
  readonly natGateway?: NatGateway;

}

/**
 * @schema CreateNetworkAclRequest
 */
export interface CreateNetworkAclRequest {
  /**
   * @schema CreateNetworkAclRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateNetworkAclRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateNetworkAclRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateNetworkAclResult
 */
export interface CreateNetworkAclResult {
  /**
   * @schema CreateNetworkAclResult#NetworkAcl
   */
  readonly networkAcl?: NetworkAcl;

}

/**
 * @schema CreateNetworkAclEntryRequest
 */
export interface CreateNetworkAclEntryRequest {
  /**
   * @schema CreateNetworkAclEntryRequest#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema CreateNetworkAclEntryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateNetworkAclEntryRequest#Egress
   */
  readonly egress: boolean;

  /**
   * @schema CreateNetworkAclEntryRequest#IcmpTypeCode
   */
  readonly icmpTypeCode?: IcmpTypeCode;

  /**
   * @schema CreateNetworkAclEntryRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema CreateNetworkAclEntryRequest#NetworkAclId
   */
  readonly networkAclId: string;

  /**
   * @schema CreateNetworkAclEntryRequest#PortRange
   */
  readonly portRange?: PortRange;

  /**
   * @schema CreateNetworkAclEntryRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema CreateNetworkAclEntryRequest#RuleAction
   */
  readonly ruleAction: string;

  /**
   * @schema CreateNetworkAclEntryRequest#RuleNumber
   */
  readonly ruleNumber: number;

}

/**
 * @schema CreateNetworkInterfaceRequest
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * @schema CreateNetworkInterfaceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateNetworkInterfaceRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema CreateNetworkInterfaceRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema CreateNetworkInterfaceRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @schema CreateNetworkInterfaceRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema CreateNetworkInterfaceRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @schema CreateNetworkInterfaceRequest#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema CreateNetworkInterfaceRequest#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema CreateNetworkInterfaceRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema CreateNetworkInterfaceRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateNetworkInterfaceResult
 */
export interface CreateNetworkInterfaceResult {
  /**
   * @schema CreateNetworkInterfaceResult#NetworkInterface
   */
  readonly networkInterface?: NetworkInterface;

}

/**
 * @schema CreateNetworkInterfacePermissionRequest
 */
export interface CreateNetworkInterfacePermissionRequest {
  /**
   * @schema CreateNetworkInterfacePermissionRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema CreateNetworkInterfacePermissionRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema CreateNetworkInterfacePermissionRequest#AwsService
   */
  readonly awsService?: string;

  /**
   * @schema CreateNetworkInterfacePermissionRequest#Permission
   */
  readonly permission: string;

  /**
   * @schema CreateNetworkInterfacePermissionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateNetworkInterfacePermissionResult
 */
export interface CreateNetworkInterfacePermissionResult {
  /**
   * @schema CreateNetworkInterfacePermissionResult#InterfacePermission
   */
  readonly interfacePermission?: NetworkInterfacePermission;

}

/**
 * @schema CreatePlacementGroupRequest
 */
export interface CreatePlacementGroupRequest {
  /**
   * @schema CreatePlacementGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreatePlacementGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema CreatePlacementGroupRequest#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema CreatePlacementGroupRequest#PartitionCount
   */
  readonly partitionCount?: number;

  /**
   * @schema CreatePlacementGroupRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreatePlacementGroupResult
 */
export interface CreatePlacementGroupResult {
  /**
   * @schema CreatePlacementGroupResult#PlacementGroup
   */
  readonly placementGroup?: PlacementGroup;

}

/**
 * @schema CreateReservedInstancesListingRequest
 */
export interface CreateReservedInstancesListingRequest {
  /**
   * @schema CreateReservedInstancesListingRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateReservedInstancesListingRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema CreateReservedInstancesListingRequest#PriceSchedules
   */
  readonly priceSchedules: PriceScheduleSpecification[];

  /**
   * @schema CreateReservedInstancesListingRequest#ReservedInstancesId
   */
  readonly reservedInstancesId: string;

}

/**
 * @schema CreateReservedInstancesListingResult
 */
export interface CreateReservedInstancesListingResult {
  /**
   * @schema CreateReservedInstancesListingResult#ReservedInstancesListings
   */
  readonly reservedInstancesListings?: ReservedInstancesListing[];

}

/**
 * @schema CreateRouteRequest
 */
export interface CreateRouteRequest {
  /**
   * @schema CreateRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema CreateRouteRequest#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema CreateRouteRequest#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema CreateRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateRouteRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema CreateRouteRequest#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema CreateRouteRequest#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema CreateRouteRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CreateRouteRequest#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema CreateRouteRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema CreateRouteRequest#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema CreateRouteRequest#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema CreateRouteRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema CreateRouteRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema CreateRouteRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema CreateRouteResult
 */
export interface CreateRouteResult {
  /**
   * @schema CreateRouteResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema CreateRouteTableRequest
 */
export interface CreateRouteTableRequest {
  /**
   * @schema CreateRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateRouteTableRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateRouteTableRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateRouteTableResult
 */
export interface CreateRouteTableResult {
  /**
   * @schema CreateRouteTableResult#RouteTable
   */
  readonly routeTable?: RouteTable;

}

/**
 * @schema CreateSecurityGroupRequest
 */
export interface CreateSecurityGroupRequest {
  /**
   * @schema CreateSecurityGroupRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateSecurityGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema CreateSecurityGroupRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CreateSecurityGroupRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateSecurityGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateSecurityGroupResult
 */
export interface CreateSecurityGroupResult {
  /**
   * @schema CreateSecurityGroupResult#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema CreateSecurityGroupResult#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSnapshotRequest
 */
export interface CreateSnapshotRequest {
  /**
   * @schema CreateSnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSnapshotRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema CreateSnapshotRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateSnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema Snapshot
 */
export interface Snapshot {
  /**
   * @schema Snapshot#DataEncryptionKeyId
   */
  readonly dataEncryptionKeyId?: string;

  /**
   * @schema Snapshot#Description
   */
  readonly description?: string;

  /**
   * @schema Snapshot#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Snapshot#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Snapshot#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Snapshot#Progress
   */
  readonly progress?: string;

  /**
   * @schema Snapshot#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Snapshot#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema Snapshot#State
   */
  readonly state?: string;

  /**
   * @schema Snapshot#StateMessage
   */
  readonly stateMessage?: string;

  /**
   * @schema Snapshot#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Snapshot#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema Snapshot#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema Snapshot#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateSnapshotsRequest
 */
export interface CreateSnapshotsRequest {
  /**
   * @schema CreateSnapshotsRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSnapshotsRequest#InstanceSpecification
   */
  readonly instanceSpecification: InstanceSpecification;

  /**
   * @schema CreateSnapshotsRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateSnapshotsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateSnapshotsRequest#CopyTagsFromSource
   */
  readonly copyTagsFromSource?: string;

}

/**
 * @schema CreateSnapshotsResult
 */
export interface CreateSnapshotsResult {
  /**
   * @schema CreateSnapshotsResult#Snapshots
   */
  readonly snapshots?: SnapshotInfo[];

}

/**
 * @schema CreateSpotDatafeedSubscriptionRequest
 */
export interface CreateSpotDatafeedSubscriptionRequest {
  /**
   * @schema CreateSpotDatafeedSubscriptionRequest#Bucket
   */
  readonly bucket: string;

  /**
   * @schema CreateSpotDatafeedSubscriptionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateSpotDatafeedSubscriptionRequest#Prefix
   */
  readonly prefix?: string;

}

/**
 * @schema CreateSpotDatafeedSubscriptionResult
 */
export interface CreateSpotDatafeedSubscriptionResult {
  /**
   * @schema CreateSpotDatafeedSubscriptionResult#SpotDatafeedSubscription
   */
  readonly spotDatafeedSubscription?: SpotDatafeedSubscription;

}

/**
 * @schema CreateSubnetRequest
 */
export interface CreateSubnetRequest {
  /**
   * @schema CreateSubnetRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateSubnetRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateSubnetRequest#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema CreateSubnetRequest#CidrBlock
   */
  readonly cidrBlock: string;

  /**
   * @schema CreateSubnetRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema CreateSubnetRequest#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema CreateSubnetRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateSubnetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateSubnetResult
 */
export interface CreateSubnetResult {
  /**
   * @schema CreateSubnetResult#Subnet
   */
  readonly subnet?: Subnet;

}

/**
 * @schema CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * @schema CreateTagsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateTagsRequest#Resources
   */
  readonly resources: string[];

  /**
   * @schema CreateTagsRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema CreateTrafficMirrorFilterRequest
 */
export interface CreateTrafficMirrorFilterRequest {
  /**
   * @schema CreateTrafficMirrorFilterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateTrafficMirrorFilterRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTrafficMirrorFilterRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateTrafficMirrorFilterRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorFilterResult
 */
export interface CreateTrafficMirrorFilterResult {
  /**
   * @schema CreateTrafficMirrorFilterResult#TrafficMirrorFilter
   */
  readonly trafficMirrorFilter?: TrafficMirrorFilter;

  /**
   * @schema CreateTrafficMirrorFilterResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorFilterRuleRequest
 */
export interface CreateTrafficMirrorFilterRuleRequest {
  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#TrafficDirection
   */
  readonly trafficDirection: string;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#RuleNumber
   */
  readonly ruleNumber: number;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#RuleAction
   */
  readonly ruleAction: string;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#DestinationPortRange
   */
  readonly destinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#SourcePortRange
   */
  readonly sourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#Protocol
   */
  readonly protocol?: number;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#SourceCidrBlock
   */
  readonly sourceCidrBlock: string;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateTrafficMirrorFilterRuleRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorFilterRuleResult
 */
export interface CreateTrafficMirrorFilterRuleResult {
  /**
   * @schema CreateTrafficMirrorFilterRuleResult#TrafficMirrorFilterRule
   */
  readonly trafficMirrorFilterRule?: TrafficMirrorFilterRule;

  /**
   * @schema CreateTrafficMirrorFilterRuleResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorSessionRequest
 */
export interface CreateTrafficMirrorSessionRequest {
  /**
   * @schema CreateTrafficMirrorSessionRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema CreateTrafficMirrorSessionRequest#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId: string;

  /**
   * @schema CreateTrafficMirrorSessionRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema CreateTrafficMirrorSessionRequest#PacketLength
   */
  readonly packetLength?: number;

  /**
   * @schema CreateTrafficMirrorSessionRequest#SessionNumber
   */
  readonly sessionNumber: number;

  /**
   * @schema CreateTrafficMirrorSessionRequest#VirtualNetworkId
   */
  readonly virtualNetworkId?: number;

  /**
   * @schema CreateTrafficMirrorSessionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateTrafficMirrorSessionRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTrafficMirrorSessionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateTrafficMirrorSessionRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorSessionResult
 */
export interface CreateTrafficMirrorSessionResult {
  /**
   * @schema CreateTrafficMirrorSessionResult#TrafficMirrorSession
   */
  readonly trafficMirrorSession?: TrafficMirrorSession;

  /**
   * @schema CreateTrafficMirrorSessionResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorTargetRequest
 */
export interface CreateTrafficMirrorTargetRequest {
  /**
   * @schema CreateTrafficMirrorTargetRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema CreateTrafficMirrorTargetRequest#NetworkLoadBalancerArn
   */
  readonly networkLoadBalancerArn?: string;

  /**
   * @schema CreateTrafficMirrorTargetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateTrafficMirrorTargetRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTrafficMirrorTargetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateTrafficMirrorTargetRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTrafficMirrorTargetResult
 */
export interface CreateTrafficMirrorTargetResult {
  /**
   * @schema CreateTrafficMirrorTargetResult#TrafficMirrorTarget
   */
  readonly trafficMirrorTarget?: TrafficMirrorTarget;

  /**
   * @schema CreateTrafficMirrorTargetResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateTransitGatewayRequest
 */
export interface CreateTransitGatewayRequest {
  /**
   * @schema CreateTransitGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateTransitGatewayRequest#Options
   */
  readonly options?: TransitGatewayRequestOptions;

  /**
   * @schema CreateTransitGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTransitGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayResult
 */
export interface CreateTransitGatewayResult {
  /**
   * @schema CreateTransitGatewayResult#TransitGateway
   */
  readonly transitGateway?: TransitGateway;

}

/**
 * @schema CreateTransitGatewayMulticastDomainRequest
 */
export interface CreateTransitGatewayMulticastDomainRequest {
  /**
   * @schema CreateTransitGatewayMulticastDomainRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema CreateTransitGatewayMulticastDomainRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayMulticastDomainResult
 */
export interface CreateTransitGatewayMulticastDomainResult {
  /**
   * @schema CreateTransitGatewayMulticastDomainResult#TransitGatewayMulticastDomain
   */
  readonly transitGatewayMulticastDomain?: TransitGatewayMulticastDomain;

}

/**
 * @schema CreateTransitGatewayPeeringAttachmentRequest
 */
export interface CreateTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema CreateTransitGatewayPeeringAttachmentRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema CreateTransitGatewayPeeringAttachmentRequest#PeerTransitGatewayId
   */
  readonly peerTransitGatewayId: string;

  /**
   * @schema CreateTransitGatewayPeeringAttachmentRequest#PeerAccountId
   */
  readonly peerAccountId: string;

  /**
   * @schema CreateTransitGatewayPeeringAttachmentRequest#PeerRegion
   */
  readonly peerRegion: string;

  /**
   * @schema CreateTransitGatewayPeeringAttachmentRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayPeeringAttachmentResult
 */
export interface CreateTransitGatewayPeeringAttachmentResult {
  /**
   * @schema CreateTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;

}

/**
 * @schema CreateTransitGatewayPrefixListReferenceRequest
 */
export interface CreateTransitGatewayPrefixListReferenceRequest {
  /**
   * @schema CreateTransitGatewayPrefixListReferenceRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema CreateTransitGatewayPrefixListReferenceRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema CreateTransitGatewayPrefixListReferenceRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema CreateTransitGatewayPrefixListReferenceRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema CreateTransitGatewayPrefixListReferenceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayPrefixListReferenceResult
 */
export interface CreateTransitGatewayPrefixListReferenceResult {
  /**
   * @schema CreateTransitGatewayPrefixListReferenceResult#TransitGatewayPrefixListReference
   */
  readonly transitGatewayPrefixListReference?: TransitGatewayPrefixListReference;

}

/**
 * @schema CreateTransitGatewayRouteRequest
 */
export interface CreateTransitGatewayRouteRequest {
  /**
   * @schema CreateTransitGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema CreateTransitGatewayRouteRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema CreateTransitGatewayRouteRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema CreateTransitGatewayRouteRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema CreateTransitGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayRouteResult
 */
export interface CreateTransitGatewayRouteResult {
  /**
   * @schema CreateTransitGatewayRouteResult#Route
   */
  readonly route?: TransitGatewayRoute;

}

/**
 * @schema CreateTransitGatewayRouteTableRequest
 */
export interface CreateTransitGatewayRouteTableRequest {
  /**
   * @schema CreateTransitGatewayRouteTableRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema CreateTransitGatewayRouteTableRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayRouteTableResult
 */
export interface CreateTransitGatewayRouteTableResult {
  /**
   * @schema CreateTransitGatewayRouteTableResult#TransitGatewayRouteTable
   */
  readonly transitGatewayRouteTable?: TransitGatewayRouteTable;

}

/**
 * @schema CreateTransitGatewayVpcAttachmentRequest
 */
export interface CreateTransitGatewayVpcAttachmentRequest {
  /**
   * @schema CreateTransitGatewayVpcAttachmentRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequest#Options
   */
  readonly options?: CreateTransitGatewayVpcAttachmentRequestOptions;

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateTransitGatewayVpcAttachmentResult
 */
export interface CreateTransitGatewayVpcAttachmentResult {
  /**
   * @schema CreateTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: TransitGatewayVpcAttachment;

}

/**
 * @schema CreateVolumeRequest
 */
export interface CreateVolumeRequest {
  /**
   * @schema CreateVolumeRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema CreateVolumeRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema CreateVolumeRequest#Iops
   */
  readonly iops?: number;

  /**
   * @schema CreateVolumeRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateVolumeRequest#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema CreateVolumeRequest#Size
   */
  readonly size?: number;

  /**
   * @schema CreateVolumeRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema CreateVolumeRequest#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema CreateVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVolumeRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateVolumeRequest#MultiAttachEnabled
   */
  readonly multiAttachEnabled?: boolean;

}

/**
 * @schema Volume
 */
export interface Volume {
  /**
   * @schema Volume#Attachments
   */
  readonly attachments?: VolumeAttachment[];

  /**
   * @schema Volume#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Volume#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema Volume#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema Volume#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema Volume#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Volume#Size
   */
  readonly size?: number;

  /**
   * @schema Volume#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema Volume#State
   */
  readonly state?: string;

  /**
   * @schema Volume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Volume#Iops
   */
  readonly iops?: number;

  /**
   * @schema Volume#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Volume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Volume#FastRestored
   */
  readonly fastRestored?: boolean;

  /**
   * @schema Volume#MultiAttachEnabled
   */
  readonly multiAttachEnabled?: boolean;

}

/**
 * @schema CreateVpcRequest
 */
export interface CreateVpcRequest {
  /**
   * @schema CreateVpcRequest#CidrBlock
   */
  readonly cidrBlock: string;

  /**
   * @schema CreateVpcRequest#AmazonProvidedIpv6CidrBlock
   */
  readonly amazonProvidedIpv6CidrBlock?: boolean;

  /**
   * @schema CreateVpcRequest#Ipv6Pool
   */
  readonly ipv6Pool?: string;

  /**
   * @schema CreateVpcRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema CreateVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVpcRequest#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema CreateVpcRequest#Ipv6CidrBlockNetworkBorderGroup
   */
  readonly ipv6CidrBlockNetworkBorderGroup?: string;

  /**
   * @schema CreateVpcRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateVpcResult
 */
export interface CreateVpcResult {
  /**
   * @schema CreateVpcResult#Vpc
   */
  readonly vpc?: Vpc;

}

/**
 * @schema CreateVpcEndpointRequest
 */
export interface CreateVpcEndpointRequest {
  /**
   * @schema CreateVpcEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVpcEndpointRequest#VpcEndpointType
   */
  readonly vpcEndpointType?: string;

  /**
   * @schema CreateVpcEndpointRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateVpcEndpointRequest#ServiceName
   */
  readonly serviceName: string;

  /**
   * @schema CreateVpcEndpointRequest#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema CreateVpcEndpointRequest#RouteTableIds
   */
  readonly routeTableIds?: string[];

  /**
   * @schema CreateVpcEndpointRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema CreateVpcEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateVpcEndpointRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateVpcEndpointRequest#PrivateDnsEnabled
   */
  readonly privateDnsEnabled?: boolean;

  /**
   * @schema CreateVpcEndpointRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateVpcEndpointResult
 */
export interface CreateVpcEndpointResult {
  /**
   * @schema CreateVpcEndpointResult#VpcEndpoint
   */
  readonly vpcEndpoint?: VpcEndpoint;

  /**
   * @schema CreateVpcEndpointResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateVpcEndpointConnectionNotificationRequest
 */
export interface CreateVpcEndpointConnectionNotificationRequest {
  /**
   * @schema CreateVpcEndpointConnectionNotificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVpcEndpointConnectionNotificationRequest#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema CreateVpcEndpointConnectionNotificationRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema CreateVpcEndpointConnectionNotificationRequest#ConnectionNotificationArn
   */
  readonly connectionNotificationArn: string;

  /**
   * @schema CreateVpcEndpointConnectionNotificationRequest#ConnectionEvents
   */
  readonly connectionEvents: string[];

  /**
   * @schema CreateVpcEndpointConnectionNotificationRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateVpcEndpointConnectionNotificationResult
 */
export interface CreateVpcEndpointConnectionNotificationResult {
  /**
   * @schema CreateVpcEndpointConnectionNotificationResult#ConnectionNotification
   */
  readonly connectionNotification?: ConnectionNotification;

  /**
   * @schema CreateVpcEndpointConnectionNotificationResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateVpcEndpointServiceConfigurationRequest
 */
export interface CreateVpcEndpointServiceConfigurationRequest {
  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#NetworkLoadBalancerArns
   */
  readonly networkLoadBalancerArns?: string[];

  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#GatewayLoadBalancerArns
   */
  readonly gatewayLoadBalancerArns?: string[];

  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateVpcEndpointServiceConfigurationRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateVpcEndpointServiceConfigurationResult
 */
export interface CreateVpcEndpointServiceConfigurationResult {
  /**
   * @schema CreateVpcEndpointServiceConfigurationResult#ServiceConfiguration
   */
  readonly serviceConfiguration?: ServiceConfiguration;

  /**
   * @schema CreateVpcEndpointServiceConfigurationResult#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema CreateVpcPeeringConnectionRequest
 */
export interface CreateVpcPeeringConnectionRequest {
  /**
   * @schema CreateVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVpcPeeringConnectionRequest#PeerOwnerId
   */
  readonly peerOwnerId?: string;

  /**
   * @schema CreateVpcPeeringConnectionRequest#PeerVpcId
   */
  readonly peerVpcId?: string;

  /**
   * @schema CreateVpcPeeringConnectionRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CreateVpcPeeringConnectionRequest#PeerRegion
   */
  readonly peerRegion?: string;

  /**
   * @schema CreateVpcPeeringConnectionRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateVpcPeeringConnectionResult
 */
export interface CreateVpcPeeringConnectionResult {
  /**
   * @schema CreateVpcPeeringConnectionResult#VpcPeeringConnection
   */
  readonly vpcPeeringConnection?: VpcPeeringConnection;

}

/**
 * @schema CreateVpnConnectionRequest
 */
export interface CreateVpnConnectionRequest {
  /**
   * @schema CreateVpnConnectionRequest#CustomerGatewayId
   */
  readonly customerGatewayId: string;

  /**
   * @schema CreateVpnConnectionRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateVpnConnectionRequest#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema CreateVpnConnectionRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema CreateVpnConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema CreateVpnConnectionRequest#Options
   */
  readonly options?: VpnConnectionOptionsSpecification;

  /**
   * @schema CreateVpnConnectionRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema CreateVpnConnectionResult
 */
export interface CreateVpnConnectionResult {
  /**
   * @schema CreateVpnConnectionResult#VpnConnection
   */
  readonly vpnConnection?: VpnConnection;

}

/**
 * @schema CreateVpnConnectionRouteRequest
 */
export interface CreateVpnConnectionRouteRequest {
  /**
   * @schema CreateVpnConnectionRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema CreateVpnConnectionRouteRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

}

/**
 * @schema CreateVpnGatewayRequest
 */
export interface CreateVpnGatewayRequest {
  /**
   * @schema CreateVpnGatewayRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateVpnGatewayRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateVpnGatewayRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema CreateVpnGatewayRequest#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema CreateVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CreateVpnGatewayResult
 */
export interface CreateVpnGatewayResult {
  /**
   * @schema CreateVpnGatewayResult#VpnGateway
   */
  readonly vpnGateway?: VpnGateway;

}

/**
 * @schema DeleteCarrierGatewayRequest
 */
export interface DeleteCarrierGatewayRequest {
  /**
   * @schema DeleteCarrierGatewayRequest#CarrierGatewayId
   */
  readonly carrierGatewayId: string;

  /**
   * @schema DeleteCarrierGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteCarrierGatewayResult
 */
export interface DeleteCarrierGatewayResult {
  /**
   * @schema DeleteCarrierGatewayResult#CarrierGateway
   */
  readonly carrierGateway?: CarrierGateway;

}

/**
 * @schema DeleteClientVpnEndpointRequest
 */
export interface DeleteClientVpnEndpointRequest {
  /**
   * @schema DeleteClientVpnEndpointRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DeleteClientVpnEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteClientVpnEndpointResult
 */
export interface DeleteClientVpnEndpointResult {
  /**
   * @schema DeleteClientVpnEndpointResult#Status
   */
  readonly status?: ClientVpnEndpointStatus;

}

/**
 * @schema DeleteClientVpnRouteRequest
 */
export interface DeleteClientVpnRouteRequest {
  /**
   * @schema DeleteClientVpnRouteRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DeleteClientVpnRouteRequest#TargetVpcSubnetId
   */
  readonly targetVpcSubnetId?: string;

  /**
   * @schema DeleteClientVpnRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema DeleteClientVpnRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteClientVpnRouteResult
 */
export interface DeleteClientVpnRouteResult {
  /**
   * @schema DeleteClientVpnRouteResult#Status
   */
  readonly status?: ClientVpnRouteStatus;

}

/**
 * @schema DeleteCustomerGatewayRequest
 */
export interface DeleteCustomerGatewayRequest {
  /**
   * @schema DeleteCustomerGatewayRequest#CustomerGatewayId
   */
  readonly customerGatewayId: string;

  /**
   * @schema DeleteCustomerGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteDhcpOptionsRequest
 */
export interface DeleteDhcpOptionsRequest {
  /**
   * @schema DeleteDhcpOptionsRequest#DhcpOptionsId
   */
  readonly dhcpOptionsId: string;

  /**
   * @schema DeleteDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteEgressOnlyInternetGatewayRequest
 */
export interface DeleteEgressOnlyInternetGatewayRequest {
  /**
   * @schema DeleteEgressOnlyInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteEgressOnlyInternetGatewayRequest#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId: string;

}

/**
 * @schema DeleteEgressOnlyInternetGatewayResult
 */
export interface DeleteEgressOnlyInternetGatewayResult {
  /**
   * @schema DeleteEgressOnlyInternetGatewayResult#ReturnCode
   */
  readonly returnCode?: boolean;

}

/**
 * @schema DeleteFleetsRequest
 */
export interface DeleteFleetsRequest {
  /**
   * @schema DeleteFleetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteFleetsRequest#FleetIds
   */
  readonly fleetIds: string[];

  /**
   * @schema DeleteFleetsRequest#TerminateInstances
   */
  readonly terminateInstances: boolean;

}

/**
 * @schema DeleteFleetsResult
 */
export interface DeleteFleetsResult {
  /**
   * @schema DeleteFleetsResult#SuccessfulFleetDeletions
   */
  readonly successfulFleetDeletions?: DeleteFleetSuccessItem[];

  /**
   * @schema DeleteFleetsResult#UnsuccessfulFleetDeletions
   */
  readonly unsuccessfulFleetDeletions?: DeleteFleetErrorItem[];

}

/**
 * @schema DeleteFlowLogsRequest
 */
export interface DeleteFlowLogsRequest {
  /**
   * @schema DeleteFlowLogsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteFlowLogsRequest#FlowLogIds
   */
  readonly flowLogIds: string[];

}

/**
 * @schema DeleteFlowLogsResult
 */
export interface DeleteFlowLogsResult {
  /**
   * @schema DeleteFlowLogsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema DeleteFpgaImageRequest
 */
export interface DeleteFpgaImageRequest {
  /**
   * @schema DeleteFpgaImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteFpgaImageRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

}

/**
 * @schema DeleteFpgaImageResult
 */
export interface DeleteFpgaImageResult {
  /**
   * @schema DeleteFpgaImageResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DeleteInternetGatewayRequest
 */
export interface DeleteInternetGatewayRequest {
  /**
   * @schema DeleteInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteInternetGatewayRequest#InternetGatewayId
   */
  readonly internetGatewayId: string;

}

/**
 * @schema DeleteKeyPairRequest
 */
export interface DeleteKeyPairRequest {
  /**
   * @schema DeleteKeyPairRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema DeleteKeyPairRequest#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema DeleteKeyPairRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteLaunchTemplateRequest
 */
export interface DeleteLaunchTemplateRequest {
  /**
   * @schema DeleteLaunchTemplateRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteLaunchTemplateRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema DeleteLaunchTemplateRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

}

/**
 * @schema DeleteLaunchTemplateResult
 */
export interface DeleteLaunchTemplateResult {
  /**
   * @schema DeleteLaunchTemplateResult#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplate;

}

/**
 * @schema DeleteLaunchTemplateVersionsRequest
 */
export interface DeleteLaunchTemplateVersionsRequest {
  /**
   * @schema DeleteLaunchTemplateVersionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteLaunchTemplateVersionsRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema DeleteLaunchTemplateVersionsRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema DeleteLaunchTemplateVersionsRequest#Versions
   */
  readonly versions: string[];

}

/**
 * @schema DeleteLaunchTemplateVersionsResult
 */
export interface DeleteLaunchTemplateVersionsResult {
  /**
   * @schema DeleteLaunchTemplateVersionsResult#SuccessfullyDeletedLaunchTemplateVersions
   */
  readonly successfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseSuccessItem[];

  /**
   * @schema DeleteLaunchTemplateVersionsResult#UnsuccessfullyDeletedLaunchTemplateVersions
   */
  readonly unsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResponseErrorItem[];

}

/**
 * @schema DeleteLocalGatewayRouteRequest
 */
export interface DeleteLocalGatewayRouteRequest {
  /**
   * @schema DeleteLocalGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema DeleteLocalGatewayRouteRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema DeleteLocalGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteLocalGatewayRouteResult
 */
export interface DeleteLocalGatewayRouteResult {
  /**
   * @schema DeleteLocalGatewayRouteResult#Route
   */
  readonly route?: LocalGatewayRoute;

}

/**
 * @schema DeleteLocalGatewayRouteTableVpcAssociationRequest
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationRequest {
  /**
   * @schema DeleteLocalGatewayRouteTableVpcAssociationRequest#LocalGatewayRouteTableVpcAssociationId
   */
  readonly localGatewayRouteTableVpcAssociationId: string;

  /**
   * @schema DeleteLocalGatewayRouteTableVpcAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteLocalGatewayRouteTableVpcAssociationResult
 */
export interface DeleteLocalGatewayRouteTableVpcAssociationResult {
  /**
   * @schema DeleteLocalGatewayRouteTableVpcAssociationResult#LocalGatewayRouteTableVpcAssociation
   */
  readonly localGatewayRouteTableVpcAssociation?: LocalGatewayRouteTableVpcAssociation;

}

/**
 * @schema DeleteManagedPrefixListRequest
 */
export interface DeleteManagedPrefixListRequest {
  /**
   * @schema DeleteManagedPrefixListRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteManagedPrefixListRequest#PrefixListId
   */
  readonly prefixListId: string;

}

/**
 * @schema DeleteManagedPrefixListResult
 */
export interface DeleteManagedPrefixListResult {
  /**
   * @schema DeleteManagedPrefixListResult#PrefixList
   */
  readonly prefixList?: ManagedPrefixList;

}

/**
 * @schema DeleteNatGatewayRequest
 */
export interface DeleteNatGatewayRequest {
  /**
   * @schema DeleteNatGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteNatGatewayRequest#NatGatewayId
   */
  readonly natGatewayId: string;

}

/**
 * @schema DeleteNatGatewayResult
 */
export interface DeleteNatGatewayResult {
  /**
   * @schema DeleteNatGatewayResult#NatGatewayId
   */
  readonly natGatewayId?: string;

}

/**
 * @schema DeleteNetworkAclRequest
 */
export interface DeleteNetworkAclRequest {
  /**
   * @schema DeleteNetworkAclRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteNetworkAclRequest#NetworkAclId
   */
  readonly networkAclId: string;

}

/**
 * @schema DeleteNetworkAclEntryRequest
 */
export interface DeleteNetworkAclEntryRequest {
  /**
   * @schema DeleteNetworkAclEntryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteNetworkAclEntryRequest#Egress
   */
  readonly egress: boolean;

  /**
   * @schema DeleteNetworkAclEntryRequest#NetworkAclId
   */
  readonly networkAclId: string;

  /**
   * @schema DeleteNetworkAclEntryRequest#RuleNumber
   */
  readonly ruleNumber: number;

}

/**
 * @schema DeleteNetworkInterfaceRequest
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * @schema DeleteNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteNetworkInterfaceRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema DeleteNetworkInterfacePermissionRequest
 */
export interface DeleteNetworkInterfacePermissionRequest {
  /**
   * @schema DeleteNetworkInterfacePermissionRequest#NetworkInterfacePermissionId
   */
  readonly networkInterfacePermissionId: string;

  /**
   * @schema DeleteNetworkInterfacePermissionRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema DeleteNetworkInterfacePermissionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteNetworkInterfacePermissionResult
 */
export interface DeleteNetworkInterfacePermissionResult {
  /**
   * @schema DeleteNetworkInterfacePermissionResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DeletePlacementGroupRequest
 */
export interface DeletePlacementGroupRequest {
  /**
   * @schema DeletePlacementGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeletePlacementGroupRequest#GroupName
   */
  readonly groupName: string;

}

/**
 * @schema DeleteQueuedReservedInstancesRequest
 */
export interface DeleteQueuedReservedInstancesRequest {
  /**
   * @schema DeleteQueuedReservedInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteQueuedReservedInstancesRequest#ReservedInstancesIds
   */
  readonly reservedInstancesIds: string[];

}

/**
 * @schema DeleteQueuedReservedInstancesResult
 */
export interface DeleteQueuedReservedInstancesResult {
  /**
   * @schema DeleteQueuedReservedInstancesResult#SuccessfulQueuedPurchaseDeletions
   */
  readonly successfulQueuedPurchaseDeletions?: SuccessfulQueuedPurchaseDeletion[];

  /**
   * @schema DeleteQueuedReservedInstancesResult#FailedQueuedPurchaseDeletions
   */
  readonly failedQueuedPurchaseDeletions?: FailedQueuedPurchaseDeletion[];

}

/**
 * @schema DeleteRouteRequest
 */
export interface DeleteRouteRequest {
  /**
   * @schema DeleteRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema DeleteRouteRequest#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema DeleteRouteRequest#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema DeleteRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteRouteRequest#RouteTableId
   */
  readonly routeTableId: string;

}

/**
 * @schema DeleteRouteTableRequest
 */
export interface DeleteRouteTableRequest {
  /**
   * @schema DeleteRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteRouteTableRequest#RouteTableId
   */
  readonly routeTableId: string;

}

/**
 * @schema DeleteSecurityGroupRequest
 */
export interface DeleteSecurityGroupRequest {
  /**
   * @schema DeleteSecurityGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema DeleteSecurityGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema DeleteSecurityGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteSnapshotRequest
 */
export interface DeleteSnapshotRequest {
  /**
   * @schema DeleteSnapshotRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema DeleteSnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteSpotDatafeedSubscriptionRequest
 */
export interface DeleteSpotDatafeedSubscriptionRequest {
  /**
   * @schema DeleteSpotDatafeedSubscriptionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteSubnetRequest
 */
export interface DeleteSubnetRequest {
  /**
   * @schema DeleteSubnetRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema DeleteSubnetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * @schema DeleteTagsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteTagsRequest#Resources
   */
  readonly resources: string[];

  /**
   * @schema DeleteTagsRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DeleteTrafficMirrorFilterRequest
 */
export interface DeleteTrafficMirrorFilterRequest {
  /**
   * @schema DeleteTrafficMirrorFilterRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema DeleteTrafficMirrorFilterRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTrafficMirrorFilterResult
 */
export interface DeleteTrafficMirrorFilterResult {
  /**
   * @schema DeleteTrafficMirrorFilterResult#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

}

/**
 * @schema DeleteTrafficMirrorFilterRuleRequest
 */
export interface DeleteTrafficMirrorFilterRuleRequest {
  /**
   * @schema DeleteTrafficMirrorFilterRuleRequest#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId: string;

  /**
   * @schema DeleteTrafficMirrorFilterRuleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTrafficMirrorFilterRuleResult
 */
export interface DeleteTrafficMirrorFilterRuleResult {
  /**
   * @schema DeleteTrafficMirrorFilterRuleResult#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId?: string;

}

/**
 * @schema DeleteTrafficMirrorSessionRequest
 */
export interface DeleteTrafficMirrorSessionRequest {
  /**
   * @schema DeleteTrafficMirrorSessionRequest#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId: string;

  /**
   * @schema DeleteTrafficMirrorSessionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTrafficMirrorSessionResult
 */
export interface DeleteTrafficMirrorSessionResult {
  /**
   * @schema DeleteTrafficMirrorSessionResult#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId?: string;

}

/**
 * @schema DeleteTrafficMirrorTargetRequest
 */
export interface DeleteTrafficMirrorTargetRequest {
  /**
   * @schema DeleteTrafficMirrorTargetRequest#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId: string;

  /**
   * @schema DeleteTrafficMirrorTargetRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTrafficMirrorTargetResult
 */
export interface DeleteTrafficMirrorTargetResult {
  /**
   * @schema DeleteTrafficMirrorTargetResult#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

}

/**
 * @schema DeleteTransitGatewayRequest
 */
export interface DeleteTransitGatewayRequest {
  /**
   * @schema DeleteTransitGatewayRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema DeleteTransitGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayResult
 */
export interface DeleteTransitGatewayResult {
  /**
   * @schema DeleteTransitGatewayResult#TransitGateway
   */
  readonly transitGateway?: TransitGateway;

}

/**
 * @schema DeleteTransitGatewayMulticastDomainRequest
 */
export interface DeleteTransitGatewayMulticastDomainRequest {
  /**
   * @schema DeleteTransitGatewayMulticastDomainRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId: string;

  /**
   * @schema DeleteTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayMulticastDomainResult
 */
export interface DeleteTransitGatewayMulticastDomainResult {
  /**
   * @schema DeleteTransitGatewayMulticastDomainResult#TransitGatewayMulticastDomain
   */
  readonly transitGatewayMulticastDomain?: TransitGatewayMulticastDomain;

}

/**
 * @schema DeleteTransitGatewayPeeringAttachmentRequest
 */
export interface DeleteTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema DeleteTransitGatewayPeeringAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema DeleteTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayPeeringAttachmentResult
 */
export interface DeleteTransitGatewayPeeringAttachmentResult {
  /**
   * @schema DeleteTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;

}

/**
 * @schema DeleteTransitGatewayPrefixListReferenceRequest
 */
export interface DeleteTransitGatewayPrefixListReferenceRequest {
  /**
   * @schema DeleteTransitGatewayPrefixListReferenceRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema DeleteTransitGatewayPrefixListReferenceRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema DeleteTransitGatewayPrefixListReferenceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayPrefixListReferenceResult
 */
export interface DeleteTransitGatewayPrefixListReferenceResult {
  /**
   * @schema DeleteTransitGatewayPrefixListReferenceResult#TransitGatewayPrefixListReference
   */
  readonly transitGatewayPrefixListReference?: TransitGatewayPrefixListReference;

}

/**
 * @schema DeleteTransitGatewayRouteRequest
 */
export interface DeleteTransitGatewayRouteRequest {
  /**
   * @schema DeleteTransitGatewayRouteRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema DeleteTransitGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema DeleteTransitGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayRouteResult
 */
export interface DeleteTransitGatewayRouteResult {
  /**
   * @schema DeleteTransitGatewayRouteResult#Route
   */
  readonly route?: TransitGatewayRoute;

}

/**
 * @schema DeleteTransitGatewayRouteTableRequest
 */
export interface DeleteTransitGatewayRouteTableRequest {
  /**
   * @schema DeleteTransitGatewayRouteTableRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema DeleteTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayRouteTableResult
 */
export interface DeleteTransitGatewayRouteTableResult {
  /**
   * @schema DeleteTransitGatewayRouteTableResult#TransitGatewayRouteTable
   */
  readonly transitGatewayRouteTable?: TransitGatewayRouteTable;

}

/**
 * @schema DeleteTransitGatewayVpcAttachmentRequest
 */
export interface DeleteTransitGatewayVpcAttachmentRequest {
  /**
   * @schema DeleteTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema DeleteTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteTransitGatewayVpcAttachmentResult
 */
export interface DeleteTransitGatewayVpcAttachmentResult {
  /**
   * @schema DeleteTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: TransitGatewayVpcAttachment;

}

/**
 * @schema DeleteVolumeRequest
 */
export interface DeleteVolumeRequest {
  /**
   * @schema DeleteVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema DeleteVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteVpcRequest
 */
export interface DeleteVpcRequest {
  /**
   * @schema DeleteVpcRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema DeleteVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteVpcEndpointConnectionNotificationsRequest
 */
export interface DeleteVpcEndpointConnectionNotificationsRequest {
  /**
   * @schema DeleteVpcEndpointConnectionNotificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteVpcEndpointConnectionNotificationsRequest#ConnectionNotificationIds
   */
  readonly connectionNotificationIds: string[];

}

/**
 * @schema DeleteVpcEndpointConnectionNotificationsResult
 */
export interface DeleteVpcEndpointConnectionNotificationsResult {
  /**
   * @schema DeleteVpcEndpointConnectionNotificationsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema DeleteVpcEndpointServiceConfigurationsRequest
 */
export interface DeleteVpcEndpointServiceConfigurationsRequest {
  /**
   * @schema DeleteVpcEndpointServiceConfigurationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteVpcEndpointServiceConfigurationsRequest#ServiceIds
   */
  readonly serviceIds: string[];

}

/**
 * @schema DeleteVpcEndpointServiceConfigurationsResult
 */
export interface DeleteVpcEndpointServiceConfigurationsResult {
  /**
   * @schema DeleteVpcEndpointServiceConfigurationsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema DeleteVpcEndpointsRequest
 */
export interface DeleteVpcEndpointsRequest {
  /**
   * @schema DeleteVpcEndpointsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteVpcEndpointsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds: string[];

}

/**
 * @schema DeleteVpcEndpointsResult
 */
export interface DeleteVpcEndpointsResult {
  /**
   * @schema DeleteVpcEndpointsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema DeleteVpcPeeringConnectionRequest
 */
export interface DeleteVpcPeeringConnectionRequest {
  /**
   * @schema DeleteVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteVpcPeeringConnectionRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema DeleteVpcPeeringConnectionResult
 */
export interface DeleteVpcPeeringConnectionResult {
  /**
   * @schema DeleteVpcPeeringConnectionResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DeleteVpnConnectionRequest
 */
export interface DeleteVpnConnectionRequest {
  /**
   * @schema DeleteVpnConnectionRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema DeleteVpnConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeleteVpnConnectionRouteRequest
 */
export interface DeleteVpnConnectionRouteRequest {
  /**
   * @schema DeleteVpnConnectionRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema DeleteVpnConnectionRouteRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

}

/**
 * @schema DeleteVpnGatewayRequest
 */
export interface DeleteVpnGatewayRequest {
  /**
   * @schema DeleteVpnGatewayRequest#VpnGatewayId
   */
  readonly vpnGatewayId: string;

  /**
   * @schema DeleteVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeprovisionByoipCidrRequest
 */
export interface DeprovisionByoipCidrRequest {
  /**
   * @schema DeprovisionByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema DeprovisionByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeprovisionByoipCidrResult
 */
export interface DeprovisionByoipCidrResult {
  /**
   * @schema DeprovisionByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema DeregisterImageRequest
 */
export interface DeregisterImageRequest {
  /**
   * @schema DeregisterImageRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema DeregisterImageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeregisterInstanceEventNotificationAttributesRequest
 */
export interface DeregisterInstanceEventNotificationAttributesRequest {
  /**
   * @schema DeregisterInstanceEventNotificationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeregisterInstanceEventNotificationAttributesRequest#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: DeregisterInstanceTagAttributeRequest;

}

/**
 * @schema DeregisterInstanceEventNotificationAttributesResult
 */
export interface DeregisterInstanceEventNotificationAttributesResult {
  /**
   * @schema DeregisterInstanceEventNotificationAttributesResult#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: InstanceTagNotificationAttribute;

}

/**
 * @schema DeregisterTransitGatewayMulticastGroupMembersRequest
 */
export interface DeregisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @schema DeregisterTransitGatewayMulticastGroupMembersRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema DeregisterTransitGatewayMulticastGroupMembersRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema DeregisterTransitGatewayMulticastGroupMembersRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema DeregisterTransitGatewayMulticastGroupMembersRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeregisterTransitGatewayMulticastGroupMembersResult
 */
export interface DeregisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @schema DeregisterTransitGatewayMulticastGroupMembersResult#DeregisteredMulticastGroupMembers
   */
  readonly deregisteredMulticastGroupMembers?: TransitGatewayMulticastDeregisteredGroupMembers;

}

/**
 * @schema DeregisterTransitGatewayMulticastGroupSourcesRequest
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @schema DeregisterTransitGatewayMulticastGroupSourcesRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema DeregisterTransitGatewayMulticastGroupSourcesRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema DeregisterTransitGatewayMulticastGroupSourcesRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema DeregisterTransitGatewayMulticastGroupSourcesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DeregisterTransitGatewayMulticastGroupSourcesResult
 */
export interface DeregisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @schema DeregisterTransitGatewayMulticastGroupSourcesResult#DeregisteredMulticastGroupSources
   */
  readonly deregisteredMulticastGroupSources?: TransitGatewayMulticastDeregisteredGroupSources;

}

/**
 * @schema DescribeAccountAttributesRequest
 */
export interface DescribeAccountAttributesRequest {
  /**
   * @schema DescribeAccountAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema DescribeAccountAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeAccountAttributesResult
 */
export interface DescribeAccountAttributesResult {
  /**
   * @schema DescribeAccountAttributesResult#AccountAttributes
   */
  readonly accountAttributes?: AccountAttribute[];

}

/**
 * @schema DescribeAddressesRequest
 */
export interface DescribeAddressesRequest {
  /**
   * @schema DescribeAddressesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeAddressesRequest#PublicIps
   */
  readonly publicIps?: string[];

  /**
   * @schema DescribeAddressesRequest#AllocationIds
   */
  readonly allocationIds?: string[];

  /**
   * @schema DescribeAddressesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeAddressesResult
 */
export interface DescribeAddressesResult {
  /**
   * @schema DescribeAddressesResult#Addresses
   */
  readonly addresses?: Address[];

}

/**
 * @schema DescribeAggregateIdFormatRequest
 */
export interface DescribeAggregateIdFormatRequest {
  /**
   * @schema DescribeAggregateIdFormatRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeAggregateIdFormatResult
 */
export interface DescribeAggregateIdFormatResult {
  /**
   * @schema DescribeAggregateIdFormatResult#UseLongIdsAggregated
   */
  readonly useLongIdsAggregated?: boolean;

  /**
   * @schema DescribeAggregateIdFormatResult#Statuses
   */
  readonly statuses?: IdFormat[];

}

/**
 * @schema DescribeAvailabilityZonesRequest
 */
export interface DescribeAvailabilityZonesRequest {
  /**
   * @schema DescribeAvailabilityZonesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeAvailabilityZonesRequest#ZoneNames
   */
  readonly zoneNames?: string[];

  /**
   * @schema DescribeAvailabilityZonesRequest#ZoneIds
   */
  readonly zoneIds?: string[];

  /**
   * @schema DescribeAvailabilityZonesRequest#AllAvailabilityZones
   */
  readonly allAvailabilityZones?: boolean;

  /**
   * @schema DescribeAvailabilityZonesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeAvailabilityZonesResult
 */
export interface DescribeAvailabilityZonesResult {
  /**
   * @schema DescribeAvailabilityZonesResult#AvailabilityZones
   */
  readonly availabilityZones?: AvailabilityZone[];

}

/**
 * @schema DescribeBundleTasksRequest
 */
export interface DescribeBundleTasksRequest {
  /**
   * @schema DescribeBundleTasksRequest#BundleIds
   */
  readonly bundleIds?: string[];

  /**
   * @schema DescribeBundleTasksRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeBundleTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeBundleTasksResult
 */
export interface DescribeBundleTasksResult {
  /**
   * @schema DescribeBundleTasksResult#BundleTasks
   */
  readonly bundleTasks?: BundleTask[];

}

/**
 * @schema DescribeByoipCidrsRequest
 */
export interface DescribeByoipCidrsRequest {
  /**
   * @schema DescribeByoipCidrsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeByoipCidrsRequest#MaxResults
   */
  readonly maxResults: number;

  /**
   * @schema DescribeByoipCidrsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeByoipCidrsResult
 */
export interface DescribeByoipCidrsResult {
  /**
   * @schema DescribeByoipCidrsResult#ByoipCidrs
   */
  readonly byoipCidrs?: ByoipCidr[];

  /**
   * @schema DescribeByoipCidrsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeCapacityReservationsRequest
 */
export interface DescribeCapacityReservationsRequest {
  /**
   * @schema DescribeCapacityReservationsRequest#CapacityReservationIds
   */
  readonly capacityReservationIds?: string[];

  /**
   * @schema DescribeCapacityReservationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCapacityReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeCapacityReservationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCapacityReservationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeCapacityReservationsResult
 */
export interface DescribeCapacityReservationsResult {
  /**
   * @schema DescribeCapacityReservationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCapacityReservationsResult#CapacityReservations
   */
  readonly capacityReservations?: CapacityReservation[];

}

/**
 * @schema DescribeCarrierGatewaysRequest
 */
export interface DescribeCarrierGatewaysRequest {
  /**
   * @schema DescribeCarrierGatewaysRequest#CarrierGatewayIds
   */
  readonly carrierGatewayIds?: string[];

  /**
   * @schema DescribeCarrierGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCarrierGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeCarrierGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCarrierGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeCarrierGatewaysResult
 */
export interface DescribeCarrierGatewaysResult {
  /**
   * @schema DescribeCarrierGatewaysResult#CarrierGateways
   */
  readonly carrierGateways?: CarrierGateway[];

  /**
   * @schema DescribeCarrierGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClassicLinkInstancesRequest
 */
export interface DescribeClassicLinkInstancesRequest {
  /**
   * @schema DescribeClassicLinkInstancesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeClassicLinkInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeClassicLinkInstancesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeClassicLinkInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeClassicLinkInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClassicLinkInstancesResult
 */
export interface DescribeClassicLinkInstancesResult {
  /**
   * @schema DescribeClassicLinkInstancesResult#Instances
   */
  readonly instances?: ClassicLinkInstance[];

  /**
   * @schema DescribeClassicLinkInstancesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClientVpnAuthorizationRulesRequest
 */
export interface DescribeClientVpnAuthorizationRulesRequest {
  /**
   * @schema DescribeClientVpnAuthorizationRulesRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DescribeClientVpnAuthorizationRulesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeClientVpnAuthorizationRulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClientVpnAuthorizationRulesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeClientVpnAuthorizationRulesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeClientVpnAuthorizationRulesResult
 */
export interface DescribeClientVpnAuthorizationRulesResult {
  /**
   * @schema DescribeClientVpnAuthorizationRulesResult#AuthorizationRules
   */
  readonly authorizationRules?: AuthorizationRule[];

  /**
   * @schema DescribeClientVpnAuthorizationRulesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClientVpnConnectionsRequest
 */
export interface DescribeClientVpnConnectionsRequest {
  /**
   * @schema DescribeClientVpnConnectionsRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DescribeClientVpnConnectionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeClientVpnConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClientVpnConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeClientVpnConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeClientVpnConnectionsResult
 */
export interface DescribeClientVpnConnectionsResult {
  /**
   * @schema DescribeClientVpnConnectionsResult#Connections
   */
  readonly connections?: ClientVpnConnection[];

  /**
   * @schema DescribeClientVpnConnectionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClientVpnEndpointsRequest
 */
export interface DescribeClientVpnEndpointsRequest {
  /**
   * @schema DescribeClientVpnEndpointsRequest#ClientVpnEndpointIds
   */
  readonly clientVpnEndpointIds?: string[];

  /**
   * @schema DescribeClientVpnEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeClientVpnEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClientVpnEndpointsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeClientVpnEndpointsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeClientVpnEndpointsResult
 */
export interface DescribeClientVpnEndpointsResult {
  /**
   * @schema DescribeClientVpnEndpointsResult#ClientVpnEndpoints
   */
  readonly clientVpnEndpoints?: ClientVpnEndpoint[];

  /**
   * @schema DescribeClientVpnEndpointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClientVpnRoutesRequest
 */
export interface DescribeClientVpnRoutesRequest {
  /**
   * @schema DescribeClientVpnRoutesRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DescribeClientVpnRoutesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeClientVpnRoutesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeClientVpnRoutesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClientVpnRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeClientVpnRoutesResult
 */
export interface DescribeClientVpnRoutesResult {
  /**
   * @schema DescribeClientVpnRoutesResult#Routes
   */
  readonly routes?: ClientVpnRoute[];

  /**
   * @schema DescribeClientVpnRoutesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeClientVpnTargetNetworksRequest
 */
export interface DescribeClientVpnTargetNetworksRequest {
  /**
   * @schema DescribeClientVpnTargetNetworksRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DescribeClientVpnTargetNetworksRequest#AssociationIds
   */
  readonly associationIds?: string[];

  /**
   * @schema DescribeClientVpnTargetNetworksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeClientVpnTargetNetworksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeClientVpnTargetNetworksRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeClientVpnTargetNetworksRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeClientVpnTargetNetworksResult
 */
export interface DescribeClientVpnTargetNetworksResult {
  /**
   * @schema DescribeClientVpnTargetNetworksResult#ClientVpnTargetNetworks
   */
  readonly clientVpnTargetNetworks?: TargetNetwork[];

  /**
   * @schema DescribeClientVpnTargetNetworksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeCoipPoolsRequest
 */
export interface DescribeCoipPoolsRequest {
  /**
   * @schema DescribeCoipPoolsRequest#PoolIds
   */
  readonly poolIds?: string[];

  /**
   * @schema DescribeCoipPoolsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCoipPoolsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeCoipPoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeCoipPoolsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeCoipPoolsResult
 */
export interface DescribeCoipPoolsResult {
  /**
   * @schema DescribeCoipPoolsResult#CoipPools
   */
  readonly coipPools?: CoipPool[];

  /**
   * @schema DescribeCoipPoolsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeConversionTasksRequest
 */
export interface DescribeConversionTasksRequest {
  /**
   * @schema DescribeConversionTasksRequest#ConversionTaskIds
   */
  readonly conversionTaskIds?: string[];

  /**
   * @schema DescribeConversionTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeConversionTasksResult
 */
export interface DescribeConversionTasksResult {
  /**
   * @schema DescribeConversionTasksResult#ConversionTasks
   */
  readonly conversionTasks?: ConversionTask[];

}

/**
 * @schema DescribeCustomerGatewaysRequest
 */
export interface DescribeCustomerGatewaysRequest {
  /**
   * @schema DescribeCustomerGatewaysRequest#CustomerGatewayIds
   */
  readonly customerGatewayIds?: string[];

  /**
   * @schema DescribeCustomerGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeCustomerGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeCustomerGatewaysResult
 */
export interface DescribeCustomerGatewaysResult {
  /**
   * @schema DescribeCustomerGatewaysResult#CustomerGateways
   */
  readonly customerGateways?: CustomerGateway[];

}

/**
 * @schema DescribeDhcpOptionsRequest
 */
export interface DescribeDhcpOptionsRequest {
  /**
   * @schema DescribeDhcpOptionsRequest#DhcpOptionsIds
   */
  readonly dhcpOptionsIds?: string[];

  /**
   * @schema DescribeDhcpOptionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeDhcpOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeDhcpOptionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeDhcpOptionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeDhcpOptionsResult
 */
export interface DescribeDhcpOptionsResult {
  /**
   * @schema DescribeDhcpOptionsResult#DhcpOptions
   */
  readonly dhcpOptions?: DhcpOptions[];

  /**
   * @schema DescribeDhcpOptionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEgressOnlyInternetGatewaysRequest
 */
export interface DescribeEgressOnlyInternetGatewaysRequest {
  /**
   * @schema DescribeEgressOnlyInternetGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeEgressOnlyInternetGatewaysRequest#EgressOnlyInternetGatewayIds
   */
  readonly egressOnlyInternetGatewayIds?: string[];

  /**
   * @schema DescribeEgressOnlyInternetGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEgressOnlyInternetGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEgressOnlyInternetGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeEgressOnlyInternetGatewaysResult
 */
export interface DescribeEgressOnlyInternetGatewaysResult {
  /**
   * @schema DescribeEgressOnlyInternetGatewaysResult#EgressOnlyInternetGateways
   */
  readonly egressOnlyInternetGateways?: EgressOnlyInternetGateway[];

  /**
   * @schema DescribeEgressOnlyInternetGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeElasticGpusRequest
 */
export interface DescribeElasticGpusRequest {
  /**
   * @schema DescribeElasticGpusRequest#ElasticGpuIds
   */
  readonly elasticGpuIds?: string[];

  /**
   * @schema DescribeElasticGpusRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeElasticGpusRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeElasticGpusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeElasticGpusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeElasticGpusResult
 */
export interface DescribeElasticGpusResult {
  /**
   * @schema DescribeElasticGpusResult#ElasticGpuSet
   */
  readonly elasticGpuSet?: ElasticGpus[];

  /**
   * @schema DescribeElasticGpusResult#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeElasticGpusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportImageTasksRequest
 */
export interface DescribeExportImageTasksRequest {
  /**
   * @schema DescribeExportImageTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeExportImageTasksRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeExportImageTasksRequest#ExportImageTaskIds
   */
  readonly exportImageTaskIds?: string[];

  /**
   * @schema DescribeExportImageTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeExportImageTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportImageTasksResult
 */
export interface DescribeExportImageTasksResult {
  /**
   * @schema DescribeExportImageTasksResult#ExportImageTasks
   */
  readonly exportImageTasks?: ExportImageTask[];

  /**
   * @schema DescribeExportImageTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeExportTasksRequest
 */
export interface DescribeExportTasksRequest {
  /**
   * @schema DescribeExportTasksRequest#ExportTaskIds
   */
  readonly exportTaskIds?: string[];

  /**
   * @schema DescribeExportTasksRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeExportTasksResult
 */
export interface DescribeExportTasksResult {
  /**
   * @schema DescribeExportTasksResult#ExportTasks
   */
  readonly exportTasks?: ExportTask[];

}

/**
 * @schema DescribeFastSnapshotRestoresRequest
 */
export interface DescribeFastSnapshotRestoresRequest {
  /**
   * @schema DescribeFastSnapshotRestoresRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeFastSnapshotRestoresRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFastSnapshotRestoresRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFastSnapshotRestoresRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeFastSnapshotRestoresResult
 */
export interface DescribeFastSnapshotRestoresResult {
  /**
   * @schema DescribeFastSnapshotRestoresResult#FastSnapshotRestores
   */
  readonly fastSnapshotRestores?: DescribeFastSnapshotRestoreSuccessItem[];

  /**
   * @schema DescribeFastSnapshotRestoresResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFleetHistoryRequest
 */
export interface DescribeFleetHistoryRequest {
  /**
   * @schema DescribeFleetHistoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeFleetHistoryRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema DescribeFleetHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFleetHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFleetHistoryRequest#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema DescribeFleetHistoryRequest#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema DescribeFleetHistoryResult
 */
export interface DescribeFleetHistoryResult {
  /**
   * @schema DescribeFleetHistoryResult#HistoryRecords
   */
  readonly historyRecords?: HistoryRecordEntry[];

  /**
   * @schema DescribeFleetHistoryResult#LastEvaluatedTime
   */
  readonly lastEvaluatedTime?: string;

  /**
   * @schema DescribeFleetHistoryResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFleetHistoryResult#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema DescribeFleetHistoryResult#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema DescribeFleetInstancesRequest
 */
export interface DescribeFleetInstancesRequest {
  /**
   * @schema DescribeFleetInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeFleetInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFleetInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFleetInstancesRequest#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema DescribeFleetInstancesRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeFleetInstancesResult
 */
export interface DescribeFleetInstancesResult {
  /**
   * @schema DescribeFleetInstancesResult#ActiveInstances
   */
  readonly activeInstances?: ActiveInstance[];

  /**
   * @schema DescribeFleetInstancesResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFleetInstancesResult#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema DescribeFleetsRequest
 */
export interface DescribeFleetsRequest {
  /**
   * @schema DescribeFleetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeFleetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFleetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFleetsRequest#FleetIds
   */
  readonly fleetIds?: string[];

  /**
   * @schema DescribeFleetsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeFleetsResult
 */
export interface DescribeFleetsResult {
  /**
   * @schema DescribeFleetsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFleetsResult#Fleets
   */
  readonly fleets?: FleetData[];

}

/**
 * @schema DescribeFlowLogsRequest
 */
export interface DescribeFlowLogsRequest {
  /**
   * @schema DescribeFlowLogsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeFlowLogsRequest#Filter
   */
  readonly filter?: Filter[];

  /**
   * @schema DescribeFlowLogsRequest#FlowLogIds
   */
  readonly flowLogIds?: string[];

  /**
   * @schema DescribeFlowLogsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeFlowLogsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFlowLogsResult
 */
export interface DescribeFlowLogsResult {
  /**
   * @schema DescribeFlowLogsResult#FlowLogs
   */
  readonly flowLogs?: FlowLog[];

  /**
   * @schema DescribeFlowLogsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeFpgaImageAttributeRequest
 */
export interface DescribeFpgaImageAttributeRequest {
  /**
   * @schema DescribeFpgaImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeFpgaImageAttributeRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

  /**
   * @schema DescribeFpgaImageAttributeRequest#Attribute
   */
  readonly attribute: string;

}

/**
 * @schema DescribeFpgaImageAttributeResult
 */
export interface DescribeFpgaImageAttributeResult {
  /**
   * @schema DescribeFpgaImageAttributeResult#FpgaImageAttribute
   */
  readonly fpgaImageAttribute?: FpgaImageAttribute;

}

/**
 * @schema DescribeFpgaImagesRequest
 */
export interface DescribeFpgaImagesRequest {
  /**
   * @schema DescribeFpgaImagesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeFpgaImagesRequest#FpgaImageIds
   */
  readonly fpgaImageIds?: string[];

  /**
   * @schema DescribeFpgaImagesRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema DescribeFpgaImagesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeFpgaImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeFpgaImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeFpgaImagesResult
 */
export interface DescribeFpgaImagesResult {
  /**
   * @schema DescribeFpgaImagesResult#FpgaImages
   */
  readonly fpgaImages?: FpgaImage[];

  /**
   * @schema DescribeFpgaImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHostReservationOfferingsRequest
 */
export interface DescribeHostReservationOfferingsRequest {
  /**
   * @schema DescribeHostReservationOfferingsRequest#Filter
   */
  readonly filter?: Filter[];

  /**
   * @schema DescribeHostReservationOfferingsRequest#MaxDuration
   */
  readonly maxDuration?: number;

  /**
   * @schema DescribeHostReservationOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeHostReservationOfferingsRequest#MinDuration
   */
  readonly minDuration?: number;

  /**
   * @schema DescribeHostReservationOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeHostReservationOfferingsRequest#OfferingId
   */
  readonly offeringId?: string;

}

/**
 * @schema DescribeHostReservationOfferingsResult
 */
export interface DescribeHostReservationOfferingsResult {
  /**
   * @schema DescribeHostReservationOfferingsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeHostReservationOfferingsResult#OfferingSet
   */
  readonly offeringSet?: HostOffering[];

}

/**
 * @schema DescribeHostReservationsRequest
 */
export interface DescribeHostReservationsRequest {
  /**
   * @schema DescribeHostReservationsRequest#Filter
   */
  readonly filter?: Filter[];

  /**
   * @schema DescribeHostReservationsRequest#HostReservationIdSet
   */
  readonly hostReservationIdSet?: string[];

  /**
   * @schema DescribeHostReservationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeHostReservationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHostReservationsResult
 */
export interface DescribeHostReservationsResult {
  /**
   * @schema DescribeHostReservationsResult#HostReservationSet
   */
  readonly hostReservationSet?: HostReservation[];

  /**
   * @schema DescribeHostReservationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHostsRequest
 */
export interface DescribeHostsRequest {
  /**
   * @schema DescribeHostsRequest#Filter
   */
  readonly filter?: Filter[];

  /**
   * @schema DescribeHostsRequest#HostIds
   */
  readonly hostIds?: string[];

  /**
   * @schema DescribeHostsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeHostsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeHostsResult
 */
export interface DescribeHostsResult {
  /**
   * @schema DescribeHostsResult#Hosts
   */
  readonly hosts?: Host[];

  /**
   * @schema DescribeHostsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeIamInstanceProfileAssociationsRequest
 */
export interface DescribeIamInstanceProfileAssociationsRequest {
  /**
   * @schema DescribeIamInstanceProfileAssociationsRequest#AssociationIds
   */
  readonly associationIds?: string[];

  /**
   * @schema DescribeIamInstanceProfileAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeIamInstanceProfileAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeIamInstanceProfileAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeIamInstanceProfileAssociationsResult
 */
export interface DescribeIamInstanceProfileAssociationsResult {
  /**
   * @schema DescribeIamInstanceProfileAssociationsResult#IamInstanceProfileAssociations
   */
  readonly iamInstanceProfileAssociations?: IamInstanceProfileAssociation[];

  /**
   * @schema DescribeIamInstanceProfileAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeIdFormatRequest
 */
export interface DescribeIdFormatRequest {
  /**
   * @schema DescribeIdFormatRequest#Resource
   */
  readonly resource?: string;

}

/**
 * @schema DescribeIdFormatResult
 */
export interface DescribeIdFormatResult {
  /**
   * @schema DescribeIdFormatResult#Statuses
   */
  readonly statuses?: IdFormat[];

}

/**
 * @schema DescribeIdentityIdFormatRequest
 */
export interface DescribeIdentityIdFormatRequest {
  /**
   * @schema DescribeIdentityIdFormatRequest#PrincipalArn
   */
  readonly principalArn: string;

  /**
   * @schema DescribeIdentityIdFormatRequest#Resource
   */
  readonly resource?: string;

}

/**
 * @schema DescribeIdentityIdFormatResult
 */
export interface DescribeIdentityIdFormatResult {
  /**
   * @schema DescribeIdentityIdFormatResult#Statuses
   */
  readonly statuses?: IdFormat[];

}

/**
 * @schema DescribeImageAttributeRequest
 */
export interface DescribeImageAttributeRequest {
  /**
   * @schema DescribeImageAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema DescribeImageAttributeRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema DescribeImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ImageAttribute
 */
export interface ImageAttribute {
  /**
   * @schema ImageAttribute#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema ImageAttribute#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ImageAttribute#LaunchPermissions
   */
  readonly launchPermissions?: LaunchPermission[];

  /**
   * @schema ImageAttribute#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema ImageAttribute#Description
   */
  readonly description?: AttributeValue;

  /**
   * @schema ImageAttribute#KernelId
   */
  readonly kernelId?: AttributeValue;

  /**
   * @schema ImageAttribute#RamdiskId
   */
  readonly ramdiskId?: AttributeValue;

  /**
   * @schema ImageAttribute#SriovNetSupport
   */
  readonly sriovNetSupport?: AttributeValue;

}

/**
 * @schema DescribeImagesRequest
 */
export interface DescribeImagesRequest {
  /**
   * @schema DescribeImagesRequest#ExecutableUsers
   */
  readonly executableUsers?: string[];

  /**
   * @schema DescribeImagesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeImagesRequest#ImageIds
   */
  readonly imageIds?: string[];

  /**
   * @schema DescribeImagesRequest#Owners
   */
  readonly owners?: string[];

  /**
   * @schema DescribeImagesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeImagesResult
 */
export interface DescribeImagesResult {
  /**
   * @schema DescribeImagesResult#Images
   */
  readonly images?: Image[];

}

/**
 * @schema DescribeImportImageTasksRequest
 */
export interface DescribeImportImageTasksRequest {
  /**
   * @schema DescribeImportImageTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeImportImageTasksRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeImportImageTasksRequest#ImportTaskIds
   */
  readonly importTaskIds?: string[];

  /**
   * @schema DescribeImportImageTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeImportImageTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImportImageTasksResult
 */
export interface DescribeImportImageTasksResult {
  /**
   * @schema DescribeImportImageTasksResult#ImportImageTasks
   */
  readonly importImageTasks?: ImportImageTask[];

  /**
   * @schema DescribeImportImageTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImportSnapshotTasksRequest
 */
export interface DescribeImportSnapshotTasksRequest {
  /**
   * @schema DescribeImportSnapshotTasksRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeImportSnapshotTasksRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeImportSnapshotTasksRequest#ImportTaskIds
   */
  readonly importTaskIds?: string[];

  /**
   * @schema DescribeImportSnapshotTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeImportSnapshotTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeImportSnapshotTasksResult
 */
export interface DescribeImportSnapshotTasksResult {
  /**
   * @schema DescribeImportSnapshotTasksResult#ImportSnapshotTasks
   */
  readonly importSnapshotTasks?: ImportSnapshotTask[];

  /**
   * @schema DescribeImportSnapshotTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceAttributeRequest
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * @schema DescribeInstanceAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema DescribeInstanceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema InstanceAttribute
 */
export interface InstanceAttribute {
  /**
   * @schema InstanceAttribute#Groups
   */
  readonly groups?: GroupIdentifier[];

  /**
   * @schema InstanceAttribute#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @schema InstanceAttribute#DisableApiTermination
   */
  readonly disableApiTermination?: AttributeBooleanValue;

  /**
   * @schema InstanceAttribute#EnaSupport
   */
  readonly enaSupport?: AttributeBooleanValue;

  /**
   * @schema InstanceAttribute#EnclaveOptions
   */
  readonly enclaveOptions?: EnclaveOptions;

  /**
   * @schema InstanceAttribute#EbsOptimized
   */
  readonly ebsOptimized?: AttributeBooleanValue;

  /**
   * @schema InstanceAttribute#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceAttribute#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * @schema InstanceAttribute#InstanceType
   */
  readonly instanceType?: AttributeValue;

  /**
   * @schema InstanceAttribute#KernelId
   */
  readonly kernelId?: AttributeValue;

  /**
   * @schema InstanceAttribute#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema InstanceAttribute#RamdiskId
   */
  readonly ramdiskId?: AttributeValue;

  /**
   * @schema InstanceAttribute#RootDeviceName
   */
  readonly rootDeviceName?: AttributeValue;

  /**
   * @schema InstanceAttribute#SourceDestCheck
   */
  readonly sourceDestCheck?: AttributeBooleanValue;

  /**
   * @schema InstanceAttribute#SriovNetSupport
   */
  readonly sriovNetSupport?: AttributeValue;

  /**
   * @schema InstanceAttribute#UserData
   */
  readonly userData?: AttributeValue;

}

/**
 * @schema DescribeInstanceCreditSpecificationsRequest
 */
export interface DescribeInstanceCreditSpecificationsRequest {
  /**
   * @schema DescribeInstanceCreditSpecificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInstanceCreditSpecificationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInstanceCreditSpecificationsRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeInstanceCreditSpecificationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstanceCreditSpecificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceCreditSpecificationsResult
 */
export interface DescribeInstanceCreditSpecificationsResult {
  /**
   * @schema DescribeInstanceCreditSpecificationsResult#InstanceCreditSpecifications
   */
  readonly instanceCreditSpecifications?: InstanceCreditSpecification[];

  /**
   * @schema DescribeInstanceCreditSpecificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceEventNotificationAttributesRequest
 */
export interface DescribeInstanceEventNotificationAttributesRequest {
  /**
   * @schema DescribeInstanceEventNotificationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeInstanceEventNotificationAttributesResult
 */
export interface DescribeInstanceEventNotificationAttributesResult {
  /**
   * @schema DescribeInstanceEventNotificationAttributesResult#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: InstanceTagNotificationAttribute;

}

/**
 * @schema DescribeInstanceStatusRequest
 */
export interface DescribeInstanceStatusRequest {
  /**
   * @schema DescribeInstanceStatusRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInstanceStatusRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeInstanceStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstanceStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInstanceStatusRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInstanceStatusRequest#IncludeAllInstances
   */
  readonly includeAllInstances?: boolean;

}

/**
 * @schema DescribeInstanceStatusResult
 */
export interface DescribeInstanceStatusResult {
  /**
   * @schema DescribeInstanceStatusResult#InstanceStatuses
   */
  readonly instanceStatuses?: InstanceStatus[];

  /**
   * @schema DescribeInstanceStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceTypeOfferingsRequest
 */
export interface DescribeInstanceTypeOfferingsRequest {
  /**
   * @schema DescribeInstanceTypeOfferingsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInstanceTypeOfferingsRequest#LocationType
   */
  readonly locationType?: string;

  /**
   * @schema DescribeInstanceTypeOfferingsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInstanceTypeOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstanceTypeOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceTypeOfferingsResult
 */
export interface DescribeInstanceTypeOfferingsResult {
  /**
   * @schema DescribeInstanceTypeOfferingsResult#InstanceTypeOfferings
   */
  readonly instanceTypeOfferings?: InstanceTypeOffering[];

  /**
   * @schema DescribeInstanceTypeOfferingsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceTypesRequest
 */
export interface DescribeInstanceTypesRequest {
  /**
   * @schema DescribeInstanceTypesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInstanceTypesRequest#InstanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema DescribeInstanceTypesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInstanceTypesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstanceTypesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceTypesResult
 */
export interface DescribeInstanceTypesResult {
  /**
   * @schema DescribeInstanceTypesResult#InstanceTypes
   */
  readonly instanceTypes?: InstanceTypeInfo[];

  /**
   * @schema DescribeInstanceTypesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancesRequest
 */
export interface DescribeInstancesRequest {
  /**
   * @schema DescribeInstancesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInstancesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstancesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancesResult
 */
export interface DescribeInstancesResult {
  /**
   * @schema DescribeInstancesResult#Reservations
   */
  readonly reservations?: Reservation[];

  /**
   * @schema DescribeInstancesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInternetGatewaysRequest
 */
export interface DescribeInternetGatewaysRequest {
  /**
   * @schema DescribeInternetGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeInternetGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeInternetGatewaysRequest#InternetGatewayIds
   */
  readonly internetGatewayIds?: string[];

  /**
   * @schema DescribeInternetGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInternetGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeInternetGatewaysResult
 */
export interface DescribeInternetGatewaysResult {
  /**
   * @schema DescribeInternetGatewaysResult#InternetGateways
   */
  readonly internetGateways?: InternetGateway[];

  /**
   * @schema DescribeInternetGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeIpv6PoolsRequest
 */
export interface DescribeIpv6PoolsRequest {
  /**
   * @schema DescribeIpv6PoolsRequest#PoolIds
   */
  readonly poolIds?: string[];

  /**
   * @schema DescribeIpv6PoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeIpv6PoolsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeIpv6PoolsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeIpv6PoolsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeIpv6PoolsResult
 */
export interface DescribeIpv6PoolsResult {
  /**
   * @schema DescribeIpv6PoolsResult#Ipv6Pools
   */
  readonly ipv6Pools?: Ipv6Pool[];

  /**
   * @schema DescribeIpv6PoolsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeKeyPairsRequest
 */
export interface DescribeKeyPairsRequest {
  /**
   * @schema DescribeKeyPairsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeKeyPairsRequest#KeyNames
   */
  readonly keyNames?: string[];

  /**
   * @schema DescribeKeyPairsRequest#KeyPairIds
   */
  readonly keyPairIds?: string[];

  /**
   * @schema DescribeKeyPairsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeKeyPairsResult
 */
export interface DescribeKeyPairsResult {
  /**
   * @schema DescribeKeyPairsResult#KeyPairs
   */
  readonly keyPairs?: KeyPairInfo[];

}

/**
 * @schema DescribeLaunchTemplateVersionsRequest
 */
export interface DescribeLaunchTemplateVersionsRequest {
  /**
   * @schema DescribeLaunchTemplateVersionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#Versions
   */
  readonly versions?: string[];

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#MinVersion
   */
  readonly minVersion?: string;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#MaxVersion
   */
  readonly maxVersion?: string;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLaunchTemplateVersionsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribeLaunchTemplateVersionsResult
 */
export interface DescribeLaunchTemplateVersionsResult {
  /**
   * @schema DescribeLaunchTemplateVersionsResult#LaunchTemplateVersions
   */
  readonly launchTemplateVersions?: LaunchTemplateVersion[];

  /**
   * @schema DescribeLaunchTemplateVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLaunchTemplatesRequest
 */
export interface DescribeLaunchTemplatesRequest {
  /**
   * @schema DescribeLaunchTemplatesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeLaunchTemplatesRequest#LaunchTemplateIds
   */
  readonly launchTemplateIds?: string[];

  /**
   * @schema DescribeLaunchTemplatesRequest#LaunchTemplateNames
   */
  readonly launchTemplateNames?: string[];

  /**
   * @schema DescribeLaunchTemplatesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLaunchTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLaunchTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeLaunchTemplatesResult
 */
export interface DescribeLaunchTemplatesResult {
  /**
   * @schema DescribeLaunchTemplatesResult#LaunchTemplates
   */
  readonly launchTemplates?: LaunchTemplate[];

  /**
   * @schema DescribeLaunchTemplatesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#LocalGatewayRouteTableVirtualInterfaceGroupAssociationIds
   */
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociationIds?: string[];

  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
 */
export interface DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult {
  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult#LocalGatewayRouteTableVirtualInterfaceGroupAssociations
   */
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociations?: LocalGatewayRouteTableVirtualInterfaceGroupAssociation[];

  /**
   * @schema DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLocalGatewayRouteTableVpcAssociationsRequest
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsRequest {
  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsRequest#LocalGatewayRouteTableVpcAssociationIds
   */
  readonly localGatewayRouteTableVpcAssociationIds?: string[];

  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeLocalGatewayRouteTableVpcAssociationsResult
 */
export interface DescribeLocalGatewayRouteTableVpcAssociationsResult {
  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsResult#LocalGatewayRouteTableVpcAssociations
   */
  readonly localGatewayRouteTableVpcAssociations?: LocalGatewayRouteTableVpcAssociation[];

  /**
   * @schema DescribeLocalGatewayRouteTableVpcAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLocalGatewayRouteTablesRequest
 */
export interface DescribeLocalGatewayRouteTablesRequest {
  /**
   * @schema DescribeLocalGatewayRouteTablesRequest#LocalGatewayRouteTableIds
   */
  readonly localGatewayRouteTableIds?: string[];

  /**
   * @schema DescribeLocalGatewayRouteTablesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLocalGatewayRouteTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLocalGatewayRouteTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLocalGatewayRouteTablesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeLocalGatewayRouteTablesResult
 */
export interface DescribeLocalGatewayRouteTablesResult {
  /**
   * @schema DescribeLocalGatewayRouteTablesResult#LocalGatewayRouteTables
   */
  readonly localGatewayRouteTables?: LocalGatewayRouteTable[];

  /**
   * @schema DescribeLocalGatewayRouteTablesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLocalGatewayVirtualInterfaceGroupsRequest
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsRequest {
  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsRequest#LocalGatewayVirtualInterfaceGroupIds
   */
  readonly localGatewayVirtualInterfaceGroupIds?: string[];

  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeLocalGatewayVirtualInterfaceGroupsResult
 */
export interface DescribeLocalGatewayVirtualInterfaceGroupsResult {
  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsResult#LocalGatewayVirtualInterfaceGroups
   */
  readonly localGatewayVirtualInterfaceGroups?: LocalGatewayVirtualInterfaceGroup[];

  /**
   * @schema DescribeLocalGatewayVirtualInterfaceGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLocalGatewayVirtualInterfacesRequest
 */
export interface DescribeLocalGatewayVirtualInterfacesRequest {
  /**
   * @schema DescribeLocalGatewayVirtualInterfacesRequest#LocalGatewayVirtualInterfaceIds
   */
  readonly localGatewayVirtualInterfaceIds?: string[];

  /**
   * @schema DescribeLocalGatewayVirtualInterfacesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLocalGatewayVirtualInterfacesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLocalGatewayVirtualInterfacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLocalGatewayVirtualInterfacesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeLocalGatewayVirtualInterfacesResult
 */
export interface DescribeLocalGatewayVirtualInterfacesResult {
  /**
   * @schema DescribeLocalGatewayVirtualInterfacesResult#LocalGatewayVirtualInterfaces
   */
  readonly localGatewayVirtualInterfaces?: LocalGatewayVirtualInterface[];

  /**
   * @schema DescribeLocalGatewayVirtualInterfacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeLocalGatewaysRequest
 */
export interface DescribeLocalGatewaysRequest {
  /**
   * @schema DescribeLocalGatewaysRequest#LocalGatewayIds
   */
  readonly localGatewayIds?: string[];

  /**
   * @schema DescribeLocalGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeLocalGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeLocalGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeLocalGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeLocalGatewaysResult
 */
export interface DescribeLocalGatewaysResult {
  /**
   * @schema DescribeLocalGatewaysResult#LocalGateways
   */
  readonly localGateways?: LocalGateway[];

  /**
   * @schema DescribeLocalGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeManagedPrefixListsRequest
 */
export interface DescribeManagedPrefixListsRequest {
  /**
   * @schema DescribeManagedPrefixListsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeManagedPrefixListsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeManagedPrefixListsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeManagedPrefixListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeManagedPrefixListsRequest#PrefixListIds
   */
  readonly prefixListIds?: string[];

}

/**
 * @schema DescribeManagedPrefixListsResult
 */
export interface DescribeManagedPrefixListsResult {
  /**
   * @schema DescribeManagedPrefixListsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeManagedPrefixListsResult#PrefixLists
   */
  readonly prefixLists?: ManagedPrefixList[];

}

/**
 * @schema DescribeMovingAddressesRequest
 */
export interface DescribeMovingAddressesRequest {
  /**
   * @schema DescribeMovingAddressesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeMovingAddressesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeMovingAddressesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMovingAddressesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeMovingAddressesRequest#PublicIps
   */
  readonly publicIps?: string[];

}

/**
 * @schema DescribeMovingAddressesResult
 */
export interface DescribeMovingAddressesResult {
  /**
   * @schema DescribeMovingAddressesResult#MovingAddressStatuses
   */
  readonly movingAddressStatuses?: MovingAddressStatus[];

  /**
   * @schema DescribeMovingAddressesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNatGatewaysRequest
 */
export interface DescribeNatGatewaysRequest {
  /**
   * @schema DescribeNatGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeNatGatewaysRequest#Filter
   */
  readonly filter?: Filter[];

  /**
   * @schema DescribeNatGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeNatGatewaysRequest#NatGatewayIds
   */
  readonly natGatewayIds?: string[];

  /**
   * @schema DescribeNatGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNatGatewaysResult
 */
export interface DescribeNatGatewaysResult {
  /**
   * @schema DescribeNatGatewaysResult#NatGateways
   */
  readonly natGateways?: NatGateway[];

  /**
   * @schema DescribeNatGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNetworkAclsRequest
 */
export interface DescribeNetworkAclsRequest {
  /**
   * @schema DescribeNetworkAclsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeNetworkAclsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeNetworkAclsRequest#NetworkAclIds
   */
  readonly networkAclIds?: string[];

  /**
   * @schema DescribeNetworkAclsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeNetworkAclsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeNetworkAclsResult
 */
export interface DescribeNetworkAclsResult {
  /**
   * @schema DescribeNetworkAclsResult#NetworkAcls
   */
  readonly networkAcls?: NetworkAcl[];

  /**
   * @schema DescribeNetworkAclsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNetworkInterfaceAttributeRequest
 */
export interface DescribeNetworkInterfaceAttributeRequest {
  /**
   * @schema DescribeNetworkInterfaceAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema DescribeNetworkInterfaceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeNetworkInterfaceAttributeRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema DescribeNetworkInterfaceAttributeResult
 */
export interface DescribeNetworkInterfaceAttributeResult {
  /**
   * @schema DescribeNetworkInterfaceAttributeResult#Attachment
   */
  readonly attachment?: NetworkInterfaceAttachment;

  /**
   * @schema DescribeNetworkInterfaceAttributeResult#Description
   */
  readonly description?: AttributeValue;

  /**
   * @schema DescribeNetworkInterfaceAttributeResult#Groups
   */
  readonly groups?: GroupIdentifier[];

  /**
   * @schema DescribeNetworkInterfaceAttributeResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema DescribeNetworkInterfaceAttributeResult#SourceDestCheck
   */
  readonly sourceDestCheck?: AttributeBooleanValue;

}

/**
 * @schema DescribeNetworkInterfacePermissionsRequest
 */
export interface DescribeNetworkInterfacePermissionsRequest {
  /**
   * @schema DescribeNetworkInterfacePermissionsRequest#NetworkInterfacePermissionIds
   */
  readonly networkInterfacePermissionIds?: string[];

  /**
   * @schema DescribeNetworkInterfacePermissionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeNetworkInterfacePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeNetworkInterfacePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeNetworkInterfacePermissionsResult
 */
export interface DescribeNetworkInterfacePermissionsResult {
  /**
   * @schema DescribeNetworkInterfacePermissionsResult#NetworkInterfacePermissions
   */
  readonly networkInterfacePermissions?: NetworkInterfacePermission[];

  /**
   * @schema DescribeNetworkInterfacePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeNetworkInterfacesRequest
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * @schema DescribeNetworkInterfacesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeNetworkInterfacesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeNetworkInterfacesRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema DescribeNetworkInterfacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeNetworkInterfacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeNetworkInterfacesResult
 */
export interface DescribeNetworkInterfacesResult {
  /**
   * @schema DescribeNetworkInterfacesResult#NetworkInterfaces
   */
  readonly networkInterfaces?: NetworkInterface[];

  /**
   * @schema DescribeNetworkInterfacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePlacementGroupsRequest
 */
export interface DescribePlacementGroupsRequest {
  /**
   * @schema DescribePlacementGroupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribePlacementGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribePlacementGroupsRequest#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema DescribePlacementGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

}

/**
 * @schema DescribePlacementGroupsResult
 */
export interface DescribePlacementGroupsResult {
  /**
   * @schema DescribePlacementGroupsResult#PlacementGroups
   */
  readonly placementGroups?: PlacementGroup[];

}

/**
 * @schema DescribePrefixListsRequest
 */
export interface DescribePrefixListsRequest {
  /**
   * @schema DescribePrefixListsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribePrefixListsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribePrefixListsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePrefixListsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribePrefixListsRequest#PrefixListIds
   */
  readonly prefixListIds?: string[];

}

/**
 * @schema DescribePrefixListsResult
 */
export interface DescribePrefixListsResult {
  /**
   * @schema DescribePrefixListsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribePrefixListsResult#PrefixLists
   */
  readonly prefixLists?: PrefixList[];

}

/**
 * @schema DescribePrincipalIdFormatRequest
 */
export interface DescribePrincipalIdFormatRequest {
  /**
   * @schema DescribePrincipalIdFormatRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribePrincipalIdFormatRequest#Resources
   */
  readonly resources?: string[];

  /**
   * @schema DescribePrincipalIdFormatRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePrincipalIdFormatRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePrincipalIdFormatResult
 */
export interface DescribePrincipalIdFormatResult {
  /**
   * @schema DescribePrincipalIdFormatResult#Principals
   */
  readonly principals?: PrincipalIdFormat[];

  /**
   * @schema DescribePrincipalIdFormatResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePublicIpv4PoolsRequest
 */
export interface DescribePublicIpv4PoolsRequest {
  /**
   * @schema DescribePublicIpv4PoolsRequest#PoolIds
   */
  readonly poolIds?: string[];

  /**
   * @schema DescribePublicIpv4PoolsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribePublicIpv4PoolsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePublicIpv4PoolsRequest#Filters
   */
  readonly filters?: Filter[];

}

/**
 * @schema DescribePublicIpv4PoolsResult
 */
export interface DescribePublicIpv4PoolsResult {
  /**
   * @schema DescribePublicIpv4PoolsResult#PublicIpv4Pools
   */
  readonly publicIpv4Pools?: PublicIpv4Pool[];

  /**
   * @schema DescribePublicIpv4PoolsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeRegionsRequest
 */
export interface DescribeRegionsRequest {
  /**
   * @schema DescribeRegionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeRegionsRequest#RegionNames
   */
  readonly regionNames?: string[];

  /**
   * @schema DescribeRegionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeRegionsRequest#AllRegions
   */
  readonly allRegions?: boolean;

}

/**
 * @schema DescribeRegionsResult
 */
export interface DescribeRegionsResult {
  /**
   * @schema DescribeRegionsResult#Regions
   */
  readonly regions?: Region[];

}

/**
 * @schema DescribeReservedInstancesRequest
 */
export interface DescribeReservedInstancesRequest {
  /**
   * @schema DescribeReservedInstancesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReservedInstancesRequest#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema DescribeReservedInstancesRequest#ReservedInstancesIds
   */
  readonly reservedInstancesIds?: string[];

  /**
   * @schema DescribeReservedInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeReservedInstancesRequest#OfferingType
   */
  readonly offeringType?: string;

}

/**
 * @schema DescribeReservedInstancesResult
 */
export interface DescribeReservedInstancesResult {
  /**
   * @schema DescribeReservedInstancesResult#ReservedInstances
   */
  readonly reservedInstances?: ReservedInstances[];

}

/**
 * @schema DescribeReservedInstancesListingsRequest
 */
export interface DescribeReservedInstancesListingsRequest {
  /**
   * @schema DescribeReservedInstancesListingsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReservedInstancesListingsRequest#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema DescribeReservedInstancesListingsRequest#ReservedInstancesListingId
   */
  readonly reservedInstancesListingId?: string;

}

/**
 * @schema DescribeReservedInstancesListingsResult
 */
export interface DescribeReservedInstancesListingsResult {
  /**
   * @schema DescribeReservedInstancesListingsResult#ReservedInstancesListings
   */
  readonly reservedInstancesListings?: ReservedInstancesListing[];

}

/**
 * @schema DescribeReservedInstancesModificationsRequest
 */
export interface DescribeReservedInstancesModificationsRequest {
  /**
   * @schema DescribeReservedInstancesModificationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReservedInstancesModificationsRequest#ReservedInstancesModificationIds
   */
  readonly reservedInstancesModificationIds?: string[];

  /**
   * @schema DescribeReservedInstancesModificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeReservedInstancesModificationsResult
 */
export interface DescribeReservedInstancesModificationsResult {
  /**
   * @schema DescribeReservedInstancesModificationsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeReservedInstancesModificationsResult#ReservedInstancesModifications
   */
  readonly reservedInstancesModifications?: ReservedInstancesModification[];

}

/**
 * @schema DescribeReservedInstancesOfferingsRequest
 */
export interface DescribeReservedInstancesOfferingsRequest {
  /**
   * @schema DescribeReservedInstancesOfferingsRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#IncludeMarketplace
   */
  readonly includeMarketplace?: boolean;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#MaxDuration
   */
  readonly maxDuration?: number;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#MaxInstanceCount
   */
  readonly maxInstanceCount?: number;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#MinDuration
   */
  readonly minDuration?: number;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#ReservedInstancesOfferingIds
   */
  readonly reservedInstancesOfferingIds?: string[];

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeReservedInstancesOfferingsRequest#OfferingType
   */
  readonly offeringType?: string;

}

/**
 * @schema DescribeReservedInstancesOfferingsResult
 */
export interface DescribeReservedInstancesOfferingsResult {
  /**
   * @schema DescribeReservedInstancesOfferingsResult#ReservedInstancesOfferings
   */
  readonly reservedInstancesOfferings?: ReservedInstancesOffering[];

  /**
   * @schema DescribeReservedInstancesOfferingsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeRouteTablesRequest
 */
export interface DescribeRouteTablesRequest {
  /**
   * @schema DescribeRouteTablesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeRouteTablesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeRouteTablesRequest#RouteTableIds
   */
  readonly routeTableIds?: string[];

  /**
   * @schema DescribeRouteTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeRouteTablesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeRouteTablesResult
 */
export interface DescribeRouteTablesResult {
  /**
   * @schema DescribeRouteTablesResult#RouteTables
   */
  readonly routeTables?: RouteTable[];

  /**
   * @schema DescribeRouteTablesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeScheduledInstanceAvailabilityRequest
 */
export interface DescribeScheduledInstanceAvailabilityRequest {
  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#FirstSlotStartTimeRange
   */
  readonly firstSlotStartTimeRange: SlotDateTimeRangeRequest;

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#MaxSlotDurationInHours
   */
  readonly maxSlotDurationInHours?: number;

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#MinSlotDurationInHours
   */
  readonly minSlotDurationInHours?: number;

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeScheduledInstanceAvailabilityRequest#Recurrence
   */
  readonly recurrence: ScheduledInstanceRecurrenceRequest;

}

/**
 * @schema DescribeScheduledInstanceAvailabilityResult
 */
export interface DescribeScheduledInstanceAvailabilityResult {
  /**
   * @schema DescribeScheduledInstanceAvailabilityResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeScheduledInstanceAvailabilityResult#ScheduledInstanceAvailabilitySet
   */
  readonly scheduledInstanceAvailabilitySet?: ScheduledInstanceAvailability[];

}

/**
 * @schema DescribeScheduledInstancesRequest
 */
export interface DescribeScheduledInstancesRequest {
  /**
   * @schema DescribeScheduledInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeScheduledInstancesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeScheduledInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeScheduledInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeScheduledInstancesRequest#ScheduledInstanceIds
   */
  readonly scheduledInstanceIds?: string[];

  /**
   * @schema DescribeScheduledInstancesRequest#SlotStartTimeRange
   */
  readonly slotStartTimeRange?: SlotStartTimeRangeRequest;

}

/**
 * @schema DescribeScheduledInstancesResult
 */
export interface DescribeScheduledInstancesResult {
  /**
   * @schema DescribeScheduledInstancesResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeScheduledInstancesResult#ScheduledInstanceSet
   */
  readonly scheduledInstanceSet?: ScheduledInstance[];

}

/**
 * @schema DescribeSecurityGroupReferencesRequest
 */
export interface DescribeSecurityGroupReferencesRequest {
  /**
   * @schema DescribeSecurityGroupReferencesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSecurityGroupReferencesRequest#GroupId
   */
  readonly groupId: string[];

}

/**
 * @schema DescribeSecurityGroupReferencesResult
 */
export interface DescribeSecurityGroupReferencesResult {
  /**
   * @schema DescribeSecurityGroupReferencesResult#SecurityGroupReferenceSet
   */
  readonly securityGroupReferenceSet?: SecurityGroupReference[];

}

/**
 * @schema DescribeSecurityGroupsRequest
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * @schema DescribeSecurityGroupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeSecurityGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema DescribeSecurityGroupsRequest#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema DescribeSecurityGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSecurityGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSecurityGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeSecurityGroupsResult
 */
export interface DescribeSecurityGroupsResult {
  /**
   * @schema DescribeSecurityGroupsResult#SecurityGroups
   */
  readonly securityGroups?: SecurityGroup[];

  /**
   * @schema DescribeSecurityGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSnapshotAttributeRequest
 */
export interface DescribeSnapshotAttributeRequest {
  /**
   * @schema DescribeSnapshotAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema DescribeSnapshotAttributeRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema DescribeSnapshotAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeSnapshotAttributeResult
 */
export interface DescribeSnapshotAttributeResult {
  /**
   * @schema DescribeSnapshotAttributeResult#CreateVolumePermissions
   */
  readonly createVolumePermissions?: CreateVolumePermission[];

  /**
   * @schema DescribeSnapshotAttributeResult#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema DescribeSnapshotAttributeResult#SnapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema DescribeSnapshotsRequest
 */
export interface DescribeSnapshotsRequest {
  /**
   * @schema DescribeSnapshotsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeSnapshotsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSnapshotsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSnapshotsRequest#OwnerIds
   */
  readonly ownerIds?: string[];

  /**
   * @schema DescribeSnapshotsRequest#RestorableByUserIds
   */
  readonly restorableByUserIds?: string[];

  /**
   * @schema DescribeSnapshotsRequest#SnapshotIds
   */
  readonly snapshotIds?: string[];

  /**
   * @schema DescribeSnapshotsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeSnapshotsResult
 */
export interface DescribeSnapshotsResult {
  /**
   * @schema DescribeSnapshotsResult#Snapshots
   */
  readonly snapshots?: Snapshot[];

  /**
   * @schema DescribeSnapshotsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSpotDatafeedSubscriptionRequest
 */
export interface DescribeSpotDatafeedSubscriptionRequest {
  /**
   * @schema DescribeSpotDatafeedSubscriptionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeSpotDatafeedSubscriptionResult
 */
export interface DescribeSpotDatafeedSubscriptionResult {
  /**
   * @schema DescribeSpotDatafeedSubscriptionResult#SpotDatafeedSubscription
   */
  readonly spotDatafeedSubscription?: SpotDatafeedSubscription;

}

/**
 * @schema DescribeSpotFleetInstancesRequest
 */
export interface DescribeSpotFleetInstancesRequest {
  /**
   * @schema DescribeSpotFleetInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSpotFleetInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSpotFleetInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotFleetInstancesRequest#SpotFleetRequestId
   */
  readonly spotFleetRequestId: string;

}

/**
 * @schema DescribeSpotFleetInstancesResponse
 */
export interface DescribeSpotFleetInstancesResponse {
  /**
   * @schema DescribeSpotFleetInstancesResponse#ActiveInstances
   */
  readonly activeInstances?: ActiveInstance[];

  /**
   * @schema DescribeSpotFleetInstancesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotFleetInstancesResponse#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema DescribeSpotFleetRequestHistoryRequest
 */
export interface DescribeSpotFleetRequestHistoryRequest {
  /**
   * @schema DescribeSpotFleetRequestHistoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSpotFleetRequestHistoryRequest#EventType
   */
  readonly eventType?: string;

  /**
   * @schema DescribeSpotFleetRequestHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSpotFleetRequestHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotFleetRequestHistoryRequest#SpotFleetRequestId
   */
  readonly spotFleetRequestId: string;

  /**
   * @schema DescribeSpotFleetRequestHistoryRequest#StartTime
   */
  readonly startTime: string;

}

/**
 * @schema DescribeSpotFleetRequestHistoryResponse
 */
export interface DescribeSpotFleetRequestHistoryResponse {
  /**
   * @schema DescribeSpotFleetRequestHistoryResponse#HistoryRecords
   */
  readonly historyRecords?: HistoryRecord[];

  /**
   * @schema DescribeSpotFleetRequestHistoryResponse#LastEvaluatedTime
   */
  readonly lastEvaluatedTime?: string;

  /**
   * @schema DescribeSpotFleetRequestHistoryResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotFleetRequestHistoryResponse#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

  /**
   * @schema DescribeSpotFleetRequestHistoryResponse#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema DescribeSpotFleetRequestsRequest
 */
export interface DescribeSpotFleetRequestsRequest {
  /**
   * @schema DescribeSpotFleetRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSpotFleetRequestsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSpotFleetRequestsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotFleetRequestsRequest#SpotFleetRequestIds
   */
  readonly spotFleetRequestIds?: string[];

}

/**
 * @schema DescribeSpotFleetRequestsResponse
 */
export interface DescribeSpotFleetRequestsResponse {
  /**
   * @schema DescribeSpotFleetRequestsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotFleetRequestsResponse#SpotFleetRequestConfigs
   */
  readonly spotFleetRequestConfigs?: SpotFleetRequestConfig[];

}

/**
 * @schema DescribeSpotInstanceRequestsRequest
 */
export interface DescribeSpotInstanceRequestsRequest {
  /**
   * @schema DescribeSpotInstanceRequestsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeSpotInstanceRequestsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSpotInstanceRequestsRequest#SpotInstanceRequestIds
   */
  readonly spotInstanceRequestIds?: string[];

  /**
   * @schema DescribeSpotInstanceRequestsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotInstanceRequestsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeSpotInstanceRequestsResult
 */
export interface DescribeSpotInstanceRequestsResult {
  /**
   * @schema DescribeSpotInstanceRequestsResult#SpotInstanceRequests
   */
  readonly spotInstanceRequests?: SpotInstanceRequest[];

  /**
   * @schema DescribeSpotInstanceRequestsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSpotPriceHistoryRequest
 */
export interface DescribeSpotPriceHistoryRequest {
  /**
   * @schema DescribeSpotPriceHistoryRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeSpotPriceHistoryRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DescribeSpotPriceHistoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSpotPriceHistoryRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeSpotPriceHistoryRequest#InstanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema DescribeSpotPriceHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSpotPriceHistoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotPriceHistoryRequest#ProductDescriptions
   */
  readonly productDescriptions?: string[];

  /**
   * @schema DescribeSpotPriceHistoryRequest#StartTime
   */
  readonly startTime?: string;

}

/**
 * @schema DescribeSpotPriceHistoryResult
 */
export interface DescribeSpotPriceHistoryResult {
  /**
   * @schema DescribeSpotPriceHistoryResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSpotPriceHistoryResult#SpotPriceHistory
   */
  readonly spotPriceHistory?: SpotPrice[];

}

/**
 * @schema DescribeStaleSecurityGroupsRequest
 */
export interface DescribeStaleSecurityGroupsRequest {
  /**
   * @schema DescribeStaleSecurityGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeStaleSecurityGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeStaleSecurityGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeStaleSecurityGroupsRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema DescribeStaleSecurityGroupsResult
 */
export interface DescribeStaleSecurityGroupsResult {
  /**
   * @schema DescribeStaleSecurityGroupsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeStaleSecurityGroupsResult#StaleSecurityGroupSet
   */
  readonly staleSecurityGroupSet?: StaleSecurityGroup[];

}

/**
 * @schema DescribeSubnetsRequest
 */
export interface DescribeSubnetsRequest {
  /**
   * @schema DescribeSubnetsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeSubnetsRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DescribeSubnetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeSubnetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSubnetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeSubnetsResult
 */
export interface DescribeSubnetsResult {
  /**
   * @schema DescribeSubnetsResult#Subnets
   */
  readonly subnets?: Subnet[];

  /**
   * @schema DescribeSubnetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTagsRequest
 */
export interface DescribeTagsRequest {
  /**
   * @schema DescribeTagsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeTagsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTagsResult
 */
export interface DescribeTagsResult {
  /**
   * @schema DescribeTagsResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTagsResult#Tags
   */
  readonly tags?: TagDescription[];

}

/**
 * @schema DescribeTrafficMirrorFiltersRequest
 */
export interface DescribeTrafficMirrorFiltersRequest {
  /**
   * @schema DescribeTrafficMirrorFiltersRequest#TrafficMirrorFilterIds
   */
  readonly trafficMirrorFilterIds?: string[];

  /**
   * @schema DescribeTrafficMirrorFiltersRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeTrafficMirrorFiltersRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTrafficMirrorFiltersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTrafficMirrorFiltersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTrafficMirrorFiltersResult
 */
export interface DescribeTrafficMirrorFiltersResult {
  /**
   * @schema DescribeTrafficMirrorFiltersResult#TrafficMirrorFilters
   */
  readonly trafficMirrorFilters?: TrafficMirrorFilter[];

  /**
   * @schema DescribeTrafficMirrorFiltersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTrafficMirrorSessionsRequest
 */
export interface DescribeTrafficMirrorSessionsRequest {
  /**
   * @schema DescribeTrafficMirrorSessionsRequest#TrafficMirrorSessionIds
   */
  readonly trafficMirrorSessionIds?: string[];

  /**
   * @schema DescribeTrafficMirrorSessionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeTrafficMirrorSessionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTrafficMirrorSessionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTrafficMirrorSessionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTrafficMirrorSessionsResult
 */
export interface DescribeTrafficMirrorSessionsResult {
  /**
   * @schema DescribeTrafficMirrorSessionsResult#TrafficMirrorSessions
   */
  readonly trafficMirrorSessions?: TrafficMirrorSession[];

  /**
   * @schema DescribeTrafficMirrorSessionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTrafficMirrorTargetsRequest
 */
export interface DescribeTrafficMirrorTargetsRequest {
  /**
   * @schema DescribeTrafficMirrorTargetsRequest#TrafficMirrorTargetIds
   */
  readonly trafficMirrorTargetIds?: string[];

  /**
   * @schema DescribeTrafficMirrorTargetsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeTrafficMirrorTargetsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTrafficMirrorTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTrafficMirrorTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTrafficMirrorTargetsResult
 */
export interface DescribeTrafficMirrorTargetsResult {
  /**
   * @schema DescribeTrafficMirrorTargetsResult#TrafficMirrorTargets
   */
  readonly trafficMirrorTargets?: TrafficMirrorTarget[];

  /**
   * @schema DescribeTrafficMirrorTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTransitGatewayAttachmentsRequest
 */
export interface DescribeTransitGatewayAttachmentsRequest {
  /**
   * @schema DescribeTransitGatewayAttachmentsRequest#TransitGatewayAttachmentIds
   */
  readonly transitGatewayAttachmentIds?: string[];

  /**
   * @schema DescribeTransitGatewayAttachmentsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTransitGatewayAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTransitGatewayAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTransitGatewayAttachmentsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeTransitGatewayAttachmentsResult
 */
export interface DescribeTransitGatewayAttachmentsResult {
  /**
   * @schema DescribeTransitGatewayAttachmentsResult#TransitGatewayAttachments
   */
  readonly transitGatewayAttachments?: TransitGatewayAttachment[];

  /**
   * @schema DescribeTransitGatewayAttachmentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTransitGatewayMulticastDomainsRequest
 */
export interface DescribeTransitGatewayMulticastDomainsRequest {
  /**
   * @schema DescribeTransitGatewayMulticastDomainsRequest#TransitGatewayMulticastDomainIds
   */
  readonly transitGatewayMulticastDomainIds?: string[];

  /**
   * @schema DescribeTransitGatewayMulticastDomainsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTransitGatewayMulticastDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTransitGatewayMulticastDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTransitGatewayMulticastDomainsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeTransitGatewayMulticastDomainsResult
 */
export interface DescribeTransitGatewayMulticastDomainsResult {
  /**
   * @schema DescribeTransitGatewayMulticastDomainsResult#TransitGatewayMulticastDomains
   */
  readonly transitGatewayMulticastDomains?: TransitGatewayMulticastDomain[];

  /**
   * @schema DescribeTransitGatewayMulticastDomainsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTransitGatewayPeeringAttachmentsRequest
 */
export interface DescribeTransitGatewayPeeringAttachmentsRequest {
  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsRequest#TransitGatewayAttachmentIds
   */
  readonly transitGatewayAttachmentIds?: string[];

  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeTransitGatewayPeeringAttachmentsResult
 */
export interface DescribeTransitGatewayPeeringAttachmentsResult {
  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsResult#TransitGatewayPeeringAttachments
   */
  readonly transitGatewayPeeringAttachments?: TransitGatewayPeeringAttachment[];

  /**
   * @schema DescribeTransitGatewayPeeringAttachmentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTransitGatewayRouteTablesRequest
 */
export interface DescribeTransitGatewayRouteTablesRequest {
  /**
   * @schema DescribeTransitGatewayRouteTablesRequest#TransitGatewayRouteTableIds
   */
  readonly transitGatewayRouteTableIds?: string[];

  /**
   * @schema DescribeTransitGatewayRouteTablesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTransitGatewayRouteTablesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTransitGatewayRouteTablesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTransitGatewayRouteTablesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeTransitGatewayRouteTablesResult
 */
export interface DescribeTransitGatewayRouteTablesResult {
  /**
   * @schema DescribeTransitGatewayRouteTablesResult#TransitGatewayRouteTables
   */
  readonly transitGatewayRouteTables?: TransitGatewayRouteTable[];

  /**
   * @schema DescribeTransitGatewayRouteTablesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTransitGatewayVpcAttachmentsRequest
 */
export interface DescribeTransitGatewayVpcAttachmentsRequest {
  /**
   * @schema DescribeTransitGatewayVpcAttachmentsRequest#TransitGatewayAttachmentIds
   */
  readonly transitGatewayAttachmentIds?: string[];

  /**
   * @schema DescribeTransitGatewayVpcAttachmentsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTransitGatewayVpcAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTransitGatewayVpcAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTransitGatewayVpcAttachmentsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeTransitGatewayVpcAttachmentsResult
 */
export interface DescribeTransitGatewayVpcAttachmentsResult {
  /**
   * @schema DescribeTransitGatewayVpcAttachmentsResult#TransitGatewayVpcAttachments
   */
  readonly transitGatewayVpcAttachments?: TransitGatewayVpcAttachment[];

  /**
   * @schema DescribeTransitGatewayVpcAttachmentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTransitGatewaysRequest
 */
export interface DescribeTransitGatewaysRequest {
  /**
   * @schema DescribeTransitGatewaysRequest#TransitGatewayIds
   */
  readonly transitGatewayIds?: string[];

  /**
   * @schema DescribeTransitGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeTransitGatewaysRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeTransitGatewaysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeTransitGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeTransitGatewaysResult
 */
export interface DescribeTransitGatewaysResult {
  /**
   * @schema DescribeTransitGatewaysResult#TransitGateways
   */
  readonly transitGateways?: TransitGateway[];

  /**
   * @schema DescribeTransitGatewaysResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVolumeAttributeRequest
 */
export interface DescribeVolumeAttributeRequest {
  /**
   * @schema DescribeVolumeAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema DescribeVolumeAttributeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema DescribeVolumeAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeVolumeAttributeResult
 */
export interface DescribeVolumeAttributeResult {
  /**
   * @schema DescribeVolumeAttributeResult#AutoEnableIO
   */
  readonly autoEnableIo?: AttributeBooleanValue;

  /**
   * @schema DescribeVolumeAttributeResult#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema DescribeVolumeAttributeResult#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema DescribeVolumeStatusRequest
 */
export interface DescribeVolumeStatusRequest {
  /**
   * @schema DescribeVolumeStatusRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVolumeStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVolumeStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVolumeStatusRequest#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * @schema DescribeVolumeStatusRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeVolumeStatusResult
 */
export interface DescribeVolumeStatusResult {
  /**
   * @schema DescribeVolumeStatusResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVolumeStatusResult#VolumeStatuses
   */
  readonly volumeStatuses?: VolumeStatusItem[];

}

/**
 * @schema DescribeVolumesRequest
 */
export interface DescribeVolumesRequest {
  /**
   * @schema DescribeVolumesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVolumesRequest#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * @schema DescribeVolumesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVolumesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVolumesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVolumesResult
 */
export interface DescribeVolumesResult {
  /**
   * @schema DescribeVolumesResult#Volumes
   */
  readonly volumes?: Volume[];

  /**
   * @schema DescribeVolumesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVolumesModificationsRequest
 */
export interface DescribeVolumesModificationsRequest {
  /**
   * @schema DescribeVolumesModificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVolumesModificationsRequest#VolumeIds
   */
  readonly volumeIds?: string[];

  /**
   * @schema DescribeVolumesModificationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVolumesModificationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVolumesModificationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeVolumesModificationsResult
 */
export interface DescribeVolumesModificationsResult {
  /**
   * @schema DescribeVolumesModificationsResult#VolumesModifications
   */
  readonly volumesModifications?: VolumeModification[];

  /**
   * @schema DescribeVolumesModificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcAttributeRequest
 */
export interface DescribeVpcAttributeRequest {
  /**
   * @schema DescribeVpcAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema DescribeVpcAttributeRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema DescribeVpcAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeVpcAttributeResult
 */
export interface DescribeVpcAttributeResult {
  /**
   * @schema DescribeVpcAttributeResult#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DescribeVpcAttributeResult#EnableDnsHostnames
   */
  readonly enableDnsHostnames?: AttributeBooleanValue;

  /**
   * @schema DescribeVpcAttributeResult#EnableDnsSupport
   */
  readonly enableDnsSupport?: AttributeBooleanValue;

}

/**
 * @schema DescribeVpcClassicLinkRequest
 */
export interface DescribeVpcClassicLinkRequest {
  /**
   * @schema DescribeVpcClassicLinkRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcClassicLinkRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcClassicLinkRequest#VpcIds
   */
  readonly vpcIds?: string[];

}

/**
 * @schema DescribeVpcClassicLinkResult
 */
export interface DescribeVpcClassicLinkResult {
  /**
   * @schema DescribeVpcClassicLinkResult#Vpcs
   */
  readonly vpcs?: VpcClassicLink[];

}

/**
 * @schema DescribeVpcClassicLinkDnsSupportRequest
 */
export interface DescribeVpcClassicLinkDnsSupportRequest {
  /**
   * @schema DescribeVpcClassicLinkDnsSupportRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcClassicLinkDnsSupportRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVpcClassicLinkDnsSupportRequest#VpcIds
   */
  readonly vpcIds?: string[];

}

/**
 * @schema DescribeVpcClassicLinkDnsSupportResult
 */
export interface DescribeVpcClassicLinkDnsSupportResult {
  /**
   * @schema DescribeVpcClassicLinkDnsSupportResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVpcClassicLinkDnsSupportResult#Vpcs
   */
  readonly vpcs?: ClassicLinkDnsSupport[];

}

/**
 * @schema DescribeVpcEndpointConnectionNotificationsRequest
 */
export interface DescribeVpcEndpointConnectionNotificationsRequest {
  /**
   * @schema DescribeVpcEndpointConnectionNotificationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcEndpointConnectionNotificationsRequest#ConnectionNotificationId
   */
  readonly connectionNotificationId?: string;

  /**
   * @schema DescribeVpcEndpointConnectionNotificationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcEndpointConnectionNotificationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcEndpointConnectionNotificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointConnectionNotificationsResult
 */
export interface DescribeVpcEndpointConnectionNotificationsResult {
  /**
   * @schema DescribeVpcEndpointConnectionNotificationsResult#ConnectionNotificationSet
   */
  readonly connectionNotificationSet?: ConnectionNotification[];

  /**
   * @schema DescribeVpcEndpointConnectionNotificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointConnectionsRequest
 */
export interface DescribeVpcEndpointConnectionsRequest {
  /**
   * @schema DescribeVpcEndpointConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcEndpointConnectionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcEndpointConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcEndpointConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointConnectionsResult
 */
export interface DescribeVpcEndpointConnectionsResult {
  /**
   * @schema DescribeVpcEndpointConnectionsResult#VpcEndpointConnections
   */
  readonly vpcEndpointConnections?: VpcEndpointConnection[];

  /**
   * @schema DescribeVpcEndpointConnectionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointServiceConfigurationsRequest
 */
export interface DescribeVpcEndpointServiceConfigurationsRequest {
  /**
   * @schema DescribeVpcEndpointServiceConfigurationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcEndpointServiceConfigurationsRequest#ServiceIds
   */
  readonly serviceIds?: string[];

  /**
   * @schema DescribeVpcEndpointServiceConfigurationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcEndpointServiceConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcEndpointServiceConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointServiceConfigurationsResult
 */
export interface DescribeVpcEndpointServiceConfigurationsResult {
  /**
   * @schema DescribeVpcEndpointServiceConfigurationsResult#ServiceConfigurations
   */
  readonly serviceConfigurations?: ServiceConfiguration[];

  /**
   * @schema DescribeVpcEndpointServiceConfigurationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointServicePermissionsRequest
 */
export interface DescribeVpcEndpointServicePermissionsRequest {
  /**
   * @schema DescribeVpcEndpointServicePermissionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcEndpointServicePermissionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema DescribeVpcEndpointServicePermissionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcEndpointServicePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcEndpointServicePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointServicePermissionsResult
 */
export interface DescribeVpcEndpointServicePermissionsResult {
  /**
   * @schema DescribeVpcEndpointServicePermissionsResult#AllowedPrincipals
   */
  readonly allowedPrincipals?: AllowedPrincipal[];

  /**
   * @schema DescribeVpcEndpointServicePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointServicesRequest
 */
export interface DescribeVpcEndpointServicesRequest {
  /**
   * @schema DescribeVpcEndpointServicesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcEndpointServicesRequest#ServiceNames
   */
  readonly serviceNames?: string[];

  /**
   * @schema DescribeVpcEndpointServicesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcEndpointServicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcEndpointServicesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointServicesResult
 */
export interface DescribeVpcEndpointServicesResult {
  /**
   * @schema DescribeVpcEndpointServicesResult#ServiceNames
   */
  readonly serviceNames?: string[];

  /**
   * @schema DescribeVpcEndpointServicesResult#ServiceDetails
   */
  readonly serviceDetails?: ServiceDetail[];

  /**
   * @schema DescribeVpcEndpointServicesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointsRequest
 */
export interface DescribeVpcEndpointsRequest {
  /**
   * @schema DescribeVpcEndpointsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcEndpointsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds?: string[];

  /**
   * @schema DescribeVpcEndpointsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeVpcEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcEndpointsResult
 */
export interface DescribeVpcEndpointsResult {
  /**
   * @schema DescribeVpcEndpointsResult#VpcEndpoints
   */
  readonly vpcEndpoints?: VpcEndpoint[];

  /**
   * @schema DescribeVpcEndpointsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcPeeringConnectionsRequest
 */
export interface DescribeVpcPeeringConnectionsRequest {
  /**
   * @schema DescribeVpcPeeringConnectionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcPeeringConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcPeeringConnectionsRequest#VpcPeeringConnectionIds
   */
  readonly vpcPeeringConnectionIds?: string[];

  /**
   * @schema DescribeVpcPeeringConnectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVpcPeeringConnectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeVpcPeeringConnectionsResult
 */
export interface DescribeVpcPeeringConnectionsResult {
  /**
   * @schema DescribeVpcPeeringConnectionsResult#VpcPeeringConnections
   */
  readonly vpcPeeringConnections?: VpcPeeringConnection[];

  /**
   * @schema DescribeVpcPeeringConnectionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpcsRequest
 */
export interface DescribeVpcsRequest {
  /**
   * @schema DescribeVpcsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpcsRequest#VpcIds
   */
  readonly vpcIds?: string[];

  /**
   * @schema DescribeVpcsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DescribeVpcsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeVpcsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeVpcsResult
 */
export interface DescribeVpcsResult {
  /**
   * @schema DescribeVpcsResult#Vpcs
   */
  readonly vpcs?: Vpc[];

  /**
   * @schema DescribeVpcsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeVpnConnectionsRequest
 */
export interface DescribeVpnConnectionsRequest {
  /**
   * @schema DescribeVpnConnectionsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpnConnectionsRequest#VpnConnectionIds
   */
  readonly vpnConnectionIds?: string[];

  /**
   * @schema DescribeVpnConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeVpnConnectionsResult
 */
export interface DescribeVpnConnectionsResult {
  /**
   * @schema DescribeVpnConnectionsResult#VpnConnections
   */
  readonly vpnConnections?: VpnConnection[];

}

/**
 * @schema DescribeVpnGatewaysRequest
 */
export interface DescribeVpnGatewaysRequest {
  /**
   * @schema DescribeVpnGatewaysRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema DescribeVpnGatewaysRequest#VpnGatewayIds
   */
  readonly vpnGatewayIds?: string[];

  /**
   * @schema DescribeVpnGatewaysRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DescribeVpnGatewaysResult
 */
export interface DescribeVpnGatewaysResult {
  /**
   * @schema DescribeVpnGatewaysResult#VpnGateways
   */
  readonly vpnGateways?: VpnGateway[];

}

/**
 * @schema DetachClassicLinkVpcRequest
 */
export interface DetachClassicLinkVpcRequest {
  /**
   * @schema DetachClassicLinkVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DetachClassicLinkVpcRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DetachClassicLinkVpcRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema DetachClassicLinkVpcResult
 */
export interface DetachClassicLinkVpcResult {
  /**
   * @schema DetachClassicLinkVpcResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DetachInternetGatewayRequest
 */
export interface DetachInternetGatewayRequest {
  /**
   * @schema DetachInternetGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DetachInternetGatewayRequest#InternetGatewayId
   */
  readonly internetGatewayId: string;

  /**
   * @schema DetachInternetGatewayRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema DetachNetworkInterfaceRequest
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * @schema DetachNetworkInterfaceRequest#AttachmentId
   */
  readonly attachmentId: string;

  /**
   * @schema DetachNetworkInterfaceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DetachNetworkInterfaceRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema DetachVolumeRequest
 */
export interface DetachVolumeRequest {
  /**
   * @schema DetachVolumeRequest#Device
   */
  readonly device?: string;

  /**
   * @schema DetachVolumeRequest#Force
   */
  readonly force?: boolean;

  /**
   * @schema DetachVolumeRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DetachVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema DetachVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DetachVpnGatewayRequest
 */
export interface DetachVpnGatewayRequest {
  /**
   * @schema DetachVpnGatewayRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema DetachVpnGatewayRequest#VpnGatewayId
   */
  readonly vpnGatewayId: string;

  /**
   * @schema DetachVpnGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisableEbsEncryptionByDefaultRequest
 */
export interface DisableEbsEncryptionByDefaultRequest {
  /**
   * @schema DisableEbsEncryptionByDefaultRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisableEbsEncryptionByDefaultResult
 */
export interface DisableEbsEncryptionByDefaultResult {
  /**
   * @schema DisableEbsEncryptionByDefaultResult#EbsEncryptionByDefault
   */
  readonly ebsEncryptionByDefault?: boolean;

}

/**
 * @schema DisableFastSnapshotRestoresRequest
 */
export interface DisableFastSnapshotRestoresRequest {
  /**
   * @schema DisableFastSnapshotRestoresRequest#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema DisableFastSnapshotRestoresRequest#SourceSnapshotIds
   */
  readonly sourceSnapshotIds: string[];

  /**
   * @schema DisableFastSnapshotRestoresRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisableFastSnapshotRestoresResult
 */
export interface DisableFastSnapshotRestoresResult {
  /**
   * @schema DisableFastSnapshotRestoresResult#Successful
   */
  readonly successful?: DisableFastSnapshotRestoreSuccessItem[];

  /**
   * @schema DisableFastSnapshotRestoresResult#Unsuccessful
   */
  readonly unsuccessful?: DisableFastSnapshotRestoreErrorItem[];

}

/**
 * @schema DisableTransitGatewayRouteTablePropagationRequest
 */
export interface DisableTransitGatewayRouteTablePropagationRequest {
  /**
   * @schema DisableTransitGatewayRouteTablePropagationRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema DisableTransitGatewayRouteTablePropagationRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema DisableTransitGatewayRouteTablePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisableTransitGatewayRouteTablePropagationResult
 */
export interface DisableTransitGatewayRouteTablePropagationResult {
  /**
   * @schema DisableTransitGatewayRouteTablePropagationResult#Propagation
   */
  readonly propagation?: TransitGatewayPropagation;

}

/**
 * @schema DisableVgwRoutePropagationRequest
 */
export interface DisableVgwRoutePropagationRequest {
  /**
   * @schema DisableVgwRoutePropagationRequest#GatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema DisableVgwRoutePropagationRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema DisableVgwRoutePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisableVpcClassicLinkRequest
 */
export interface DisableVpcClassicLinkRequest {
  /**
   * @schema DisableVpcClassicLinkRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DisableVpcClassicLinkRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema DisableVpcClassicLinkResult
 */
export interface DisableVpcClassicLinkResult {
  /**
   * @schema DisableVpcClassicLinkResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DisableVpcClassicLinkDnsSupportRequest
 */
export interface DisableVpcClassicLinkDnsSupportRequest {
  /**
   * @schema DisableVpcClassicLinkDnsSupportRequest#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema DisableVpcClassicLinkDnsSupportResult
 */
export interface DisableVpcClassicLinkDnsSupportResult {
  /**
   * @schema DisableVpcClassicLinkDnsSupportResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DisassociateAddressRequest
 */
export interface DisassociateAddressRequest {
  /**
   * @schema DisassociateAddressRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema DisassociateAddressRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema DisassociateAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisassociateClientVpnTargetNetworkRequest
 */
export interface DisassociateClientVpnTargetNetworkRequest {
  /**
   * @schema DisassociateClientVpnTargetNetworkRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema DisassociateClientVpnTargetNetworkRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema DisassociateClientVpnTargetNetworkRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisassociateClientVpnTargetNetworkResult
 */
export interface DisassociateClientVpnTargetNetworkResult {
  /**
   * @schema DisassociateClientVpnTargetNetworkResult#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema DisassociateClientVpnTargetNetworkResult#Status
   */
  readonly status?: AssociationStatus;

}

/**
 * @schema DisassociateEnclaveCertificateIamRoleRequest
 */
export interface DisassociateEnclaveCertificateIamRoleRequest {
  /**
   * @schema DisassociateEnclaveCertificateIamRoleRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema DisassociateEnclaveCertificateIamRoleRequest#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DisassociateEnclaveCertificateIamRoleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisassociateEnclaveCertificateIamRoleResult
 */
export interface DisassociateEnclaveCertificateIamRoleResult {
  /**
   * @schema DisassociateEnclaveCertificateIamRoleResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema DisassociateIamInstanceProfileRequest
 */
export interface DisassociateIamInstanceProfileRequest {
  /**
   * @schema DisassociateIamInstanceProfileRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema DisassociateIamInstanceProfileResult
 */
export interface DisassociateIamInstanceProfileResult {
  /**
   * @schema DisassociateIamInstanceProfileResult#IamInstanceProfileAssociation
   */
  readonly iamInstanceProfileAssociation?: IamInstanceProfileAssociation;

}

/**
 * @schema DisassociateRouteTableRequest
 */
export interface DisassociateRouteTableRequest {
  /**
   * @schema DisassociateRouteTableRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema DisassociateRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisassociateSubnetCidrBlockRequest
 */
export interface DisassociateSubnetCidrBlockRequest {
  /**
   * @schema DisassociateSubnetCidrBlockRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema DisassociateSubnetCidrBlockResult
 */
export interface DisassociateSubnetCidrBlockResult {
  /**
   * @schema DisassociateSubnetCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  /**
   * @schema DisassociateSubnetCidrBlockResult#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema DisassociateTransitGatewayMulticastDomainRequest
 */
export interface DisassociateTransitGatewayMulticastDomainRequest {
  /**
   * @schema DisassociateTransitGatewayMulticastDomainRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema DisassociateTransitGatewayMulticastDomainRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema DisassociateTransitGatewayMulticastDomainRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DisassociateTransitGatewayMulticastDomainRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisassociateTransitGatewayMulticastDomainResult
 */
export interface DisassociateTransitGatewayMulticastDomainResult {
  /**
   * @schema DisassociateTransitGatewayMulticastDomainResult#Associations
   */
  readonly associations?: TransitGatewayMulticastDomainAssociations;

}

/**
 * @schema DisassociateTransitGatewayRouteTableRequest
 */
export interface DisassociateTransitGatewayRouteTableRequest {
  /**
   * @schema DisassociateTransitGatewayRouteTableRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema DisassociateTransitGatewayRouteTableRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema DisassociateTransitGatewayRouteTableRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema DisassociateTransitGatewayRouteTableResult
 */
export interface DisassociateTransitGatewayRouteTableResult {
  /**
   * @schema DisassociateTransitGatewayRouteTableResult#Association
   */
  readonly association?: TransitGatewayAssociation;

}

/**
 * @schema DisassociateVpcCidrBlockRequest
 */
export interface DisassociateVpcCidrBlockRequest {
  /**
   * @schema DisassociateVpcCidrBlockRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema DisassociateVpcCidrBlockResult
 */
export interface DisassociateVpcCidrBlockResult {
  /**
   * @schema DisassociateVpcCidrBlockResult#Ipv6CidrBlockAssociation
   */
  readonly ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  /**
   * @schema DisassociateVpcCidrBlockResult#CidrBlockAssociation
   */
  readonly cidrBlockAssociation?: VpcCidrBlockAssociation;

  /**
   * @schema DisassociateVpcCidrBlockResult#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema EnableEbsEncryptionByDefaultRequest
 */
export interface EnableEbsEncryptionByDefaultRequest {
  /**
   * @schema EnableEbsEncryptionByDefaultRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema EnableEbsEncryptionByDefaultResult
 */
export interface EnableEbsEncryptionByDefaultResult {
  /**
   * @schema EnableEbsEncryptionByDefaultResult#EbsEncryptionByDefault
   */
  readonly ebsEncryptionByDefault?: boolean;

}

/**
 * @schema EnableFastSnapshotRestoresRequest
 */
export interface EnableFastSnapshotRestoresRequest {
  /**
   * @schema EnableFastSnapshotRestoresRequest#AvailabilityZones
   */
  readonly availabilityZones: string[];

  /**
   * @schema EnableFastSnapshotRestoresRequest#SourceSnapshotIds
   */
  readonly sourceSnapshotIds: string[];

  /**
   * @schema EnableFastSnapshotRestoresRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema EnableFastSnapshotRestoresResult
 */
export interface EnableFastSnapshotRestoresResult {
  /**
   * @schema EnableFastSnapshotRestoresResult#Successful
   */
  readonly successful?: EnableFastSnapshotRestoreSuccessItem[];

  /**
   * @schema EnableFastSnapshotRestoresResult#Unsuccessful
   */
  readonly unsuccessful?: EnableFastSnapshotRestoreErrorItem[];

}

/**
 * @schema EnableTransitGatewayRouteTablePropagationRequest
 */
export interface EnableTransitGatewayRouteTablePropagationRequest {
  /**
   * @schema EnableTransitGatewayRouteTablePropagationRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema EnableTransitGatewayRouteTablePropagationRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema EnableTransitGatewayRouteTablePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema EnableTransitGatewayRouteTablePropagationResult
 */
export interface EnableTransitGatewayRouteTablePropagationResult {
  /**
   * @schema EnableTransitGatewayRouteTablePropagationResult#Propagation
   */
  readonly propagation?: TransitGatewayPropagation;

}

/**
 * @schema EnableVgwRoutePropagationRequest
 */
export interface EnableVgwRoutePropagationRequest {
  /**
   * @schema EnableVgwRoutePropagationRequest#GatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema EnableVgwRoutePropagationRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema EnableVgwRoutePropagationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema EnableVolumeIoRequest
 */
export interface EnableVolumeIoRequest {
  /**
   * @schema EnableVolumeIoRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema EnableVolumeIoRequest#VolumeId
   */
  readonly volumeId: string;

}

/**
 * @schema EnableVpcClassicLinkRequest
 */
export interface EnableVpcClassicLinkRequest {
  /**
   * @schema EnableVpcClassicLinkRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema EnableVpcClassicLinkRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema EnableVpcClassicLinkResult
 */
export interface EnableVpcClassicLinkResult {
  /**
   * @schema EnableVpcClassicLinkResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema EnableVpcClassicLinkDnsSupportRequest
 */
export interface EnableVpcClassicLinkDnsSupportRequest {
  /**
   * @schema EnableVpcClassicLinkDnsSupportRequest#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema EnableVpcClassicLinkDnsSupportResult
 */
export interface EnableVpcClassicLinkDnsSupportResult {
  /**
   * @schema EnableVpcClassicLinkDnsSupportResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ExportClientVpnClientCertificateRevocationListRequest
 */
export interface ExportClientVpnClientCertificateRevocationListRequest {
  /**
   * @schema ExportClientVpnClientCertificateRevocationListRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema ExportClientVpnClientCertificateRevocationListRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ExportClientVpnClientCertificateRevocationListResult
 */
export interface ExportClientVpnClientCertificateRevocationListResult {
  /**
   * @schema ExportClientVpnClientCertificateRevocationListResult#CertificateRevocationList
   */
  readonly certificateRevocationList?: string;

  /**
   * @schema ExportClientVpnClientCertificateRevocationListResult#Status
   */
  readonly status?: ClientCertificateRevocationListStatus;

}

/**
 * @schema ExportClientVpnClientConfigurationRequest
 */
export interface ExportClientVpnClientConfigurationRequest {
  /**
   * @schema ExportClientVpnClientConfigurationRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema ExportClientVpnClientConfigurationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ExportClientVpnClientConfigurationResult
 */
export interface ExportClientVpnClientConfigurationResult {
  /**
   * @schema ExportClientVpnClientConfigurationResult#ClientConfiguration
   */
  readonly clientConfiguration?: string;

}

/**
 * @schema ExportImageRequest
 */
export interface ExportImageRequest {
  /**
   * @schema ExportImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ExportImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ExportImageRequest#DiskImageFormat
   */
  readonly diskImageFormat: string;

  /**
   * @schema ExportImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ExportImageRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema ExportImageRequest#S3ExportLocation
   */
  readonly s3ExportLocation: ExportTaskS3LocationRequest;

  /**
   * @schema ExportImageRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema ExportImageRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema ExportImageResult
 */
export interface ExportImageResult {
  /**
   * @schema ExportImageResult#Description
   */
  readonly description?: string;

  /**
   * @schema ExportImageResult#DiskImageFormat
   */
  readonly diskImageFormat?: string;

  /**
   * @schema ExportImageResult#ExportImageTaskId
   */
  readonly exportImageTaskId?: string;

  /**
   * @schema ExportImageResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ExportImageResult#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema ExportImageResult#Progress
   */
  readonly progress?: string;

  /**
   * @schema ExportImageResult#S3ExportLocation
   */
  readonly s3ExportLocation?: ExportTaskS3Location;

  /**
   * @schema ExportImageResult#Status
   */
  readonly status?: string;

  /**
   * @schema ExportImageResult#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ExportImageResult#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ExportTransitGatewayRoutesRequest
 */
export interface ExportTransitGatewayRoutesRequest {
  /**
   * @schema ExportTransitGatewayRoutesRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema ExportTransitGatewayRoutesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema ExportTransitGatewayRoutesRequest#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema ExportTransitGatewayRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ExportTransitGatewayRoutesResult
 */
export interface ExportTransitGatewayRoutesResult {
  /**
   * @schema ExportTransitGatewayRoutesResult#S3Location
   */
  readonly s3Location?: string;

}

/**
 * @schema GetAssociatedEnclaveCertificateIamRolesRequest
 */
export interface GetAssociatedEnclaveCertificateIamRolesRequest {
  /**
   * @schema GetAssociatedEnclaveCertificateIamRolesRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema GetAssociatedEnclaveCertificateIamRolesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetAssociatedEnclaveCertificateIamRolesResult
 */
export interface GetAssociatedEnclaveCertificateIamRolesResult {
  /**
   * @schema GetAssociatedEnclaveCertificateIamRolesResult#AssociatedRoles
   */
  readonly associatedRoles?: AssociatedRole[];

}

/**
 * @schema GetAssociatedIpv6PoolCidrsRequest
 */
export interface GetAssociatedIpv6PoolCidrsRequest {
  /**
   * @schema GetAssociatedIpv6PoolCidrsRequest#PoolId
   */
  readonly poolId: string;

  /**
   * @schema GetAssociatedIpv6PoolCidrsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetAssociatedIpv6PoolCidrsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetAssociatedIpv6PoolCidrsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetAssociatedIpv6PoolCidrsResult
 */
export interface GetAssociatedIpv6PoolCidrsResult {
  /**
   * @schema GetAssociatedIpv6PoolCidrsResult#Ipv6CidrAssociations
   */
  readonly ipv6CidrAssociations?: Ipv6CidrAssociation[];

  /**
   * @schema GetAssociatedIpv6PoolCidrsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetCapacityReservationUsageRequest
 */
export interface GetCapacityReservationUsageRequest {
  /**
   * @schema GetCapacityReservationUsageRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema GetCapacityReservationUsageRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCapacityReservationUsageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetCapacityReservationUsageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetCapacityReservationUsageResult
 */
export interface GetCapacityReservationUsageResult {
  /**
   * @schema GetCapacityReservationUsageResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCapacityReservationUsageResult#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema GetCapacityReservationUsageResult#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema GetCapacityReservationUsageResult#TotalInstanceCount
   */
  readonly totalInstanceCount?: number;

  /**
   * @schema GetCapacityReservationUsageResult#AvailableInstanceCount
   */
  readonly availableInstanceCount?: number;

  /**
   * @schema GetCapacityReservationUsageResult#State
   */
  readonly state?: string;

  /**
   * @schema GetCapacityReservationUsageResult#InstanceUsages
   */
  readonly instanceUsages?: InstanceUsage[];

}

/**
 * @schema GetCoipPoolUsageRequest
 */
export interface GetCoipPoolUsageRequest {
  /**
   * @schema GetCoipPoolUsageRequest#PoolId
   */
  readonly poolId: string;

  /**
   * @schema GetCoipPoolUsageRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetCoipPoolUsageRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetCoipPoolUsageRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCoipPoolUsageRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetCoipPoolUsageResult
 */
export interface GetCoipPoolUsageResult {
  /**
   * @schema GetCoipPoolUsageResult#CoipPoolId
   */
  readonly coipPoolId?: string;

  /**
   * @schema GetCoipPoolUsageResult#CoipAddressUsages
   */
  readonly coipAddressUsages?: CoipAddressUsage[];

  /**
   * @schema GetCoipPoolUsageResult#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

}

/**
 * @schema GetConsoleOutputRequest
 */
export interface GetConsoleOutputRequest {
  /**
   * @schema GetConsoleOutputRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetConsoleOutputRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetConsoleOutputRequest#Latest
   */
  readonly latest?: boolean;

}

/**
 * @schema GetConsoleOutputResult
 */
export interface GetConsoleOutputResult {
  /**
   * @schema GetConsoleOutputResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GetConsoleOutputResult#Output
   */
  readonly output?: string;

  /**
   * @schema GetConsoleOutputResult#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema GetConsoleScreenshotRequest
 */
export interface GetConsoleScreenshotRequest {
  /**
   * @schema GetConsoleScreenshotRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetConsoleScreenshotRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetConsoleScreenshotRequest#WakeUp
   */
  readonly wakeUp?: boolean;

}

/**
 * @schema GetConsoleScreenshotResult
 */
export interface GetConsoleScreenshotResult {
  /**
   * @schema GetConsoleScreenshotResult#ImageData
   */
  readonly imageData?: string;

  /**
   * @schema GetConsoleScreenshotResult#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema GetDefaultCreditSpecificationRequest
 */
export interface GetDefaultCreditSpecificationRequest {
  /**
   * @schema GetDefaultCreditSpecificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetDefaultCreditSpecificationRequest#InstanceFamily
   */
  readonly instanceFamily: string;

}

/**
 * @schema GetDefaultCreditSpecificationResult
 */
export interface GetDefaultCreditSpecificationResult {
  /**
   * @schema GetDefaultCreditSpecificationResult#InstanceFamilyCreditSpecification
   */
  readonly instanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;

}

/**
 * @schema GetEbsDefaultKmsKeyIdRequest
 */
export interface GetEbsDefaultKmsKeyIdRequest {
  /**
   * @schema GetEbsDefaultKmsKeyIdRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetEbsDefaultKmsKeyIdResult
 */
export interface GetEbsDefaultKmsKeyIdResult {
  /**
   * @schema GetEbsDefaultKmsKeyIdResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema GetEbsEncryptionByDefaultRequest
 */
export interface GetEbsEncryptionByDefaultRequest {
  /**
   * @schema GetEbsEncryptionByDefaultRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetEbsEncryptionByDefaultResult
 */
export interface GetEbsEncryptionByDefaultResult {
  /**
   * @schema GetEbsEncryptionByDefaultResult#EbsEncryptionByDefault
   */
  readonly ebsEncryptionByDefault?: boolean;

}

/**
 * @schema GetGroupsForCapacityReservationRequest
 */
export interface GetGroupsForCapacityReservationRequest {
  /**
   * @schema GetGroupsForCapacityReservationRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema GetGroupsForCapacityReservationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetGroupsForCapacityReservationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetGroupsForCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetGroupsForCapacityReservationResult
 */
export interface GetGroupsForCapacityReservationResult {
  /**
   * @schema GetGroupsForCapacityReservationResult#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetGroupsForCapacityReservationResult#CapacityReservationGroups
   */
  readonly capacityReservationGroups?: CapacityReservationGroup[];

}

/**
 * @schema GetHostReservationPurchasePreviewRequest
 */
export interface GetHostReservationPurchasePreviewRequest {
  /**
   * @schema GetHostReservationPurchasePreviewRequest#HostIdSet
   */
  readonly hostIdSet: string[];

  /**
   * @schema GetHostReservationPurchasePreviewRequest#OfferingId
   */
  readonly offeringId: string;

}

/**
 * @schema GetHostReservationPurchasePreviewResult
 */
export interface GetHostReservationPurchasePreviewResult {
  /**
   * @schema GetHostReservationPurchasePreviewResult#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema GetHostReservationPurchasePreviewResult#Purchase
   */
  readonly purchase?: Purchase[];

  /**
   * @schema GetHostReservationPurchasePreviewResult#TotalHourlyPrice
   */
  readonly totalHourlyPrice?: string;

  /**
   * @schema GetHostReservationPurchasePreviewResult#TotalUpfrontPrice
   */
  readonly totalUpfrontPrice?: string;

}

/**
 * @schema GetLaunchTemplateDataRequest
 */
export interface GetLaunchTemplateDataRequest {
  /**
   * @schema GetLaunchTemplateDataRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetLaunchTemplateDataRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema GetLaunchTemplateDataResult
 */
export interface GetLaunchTemplateDataResult {
  /**
   * @schema GetLaunchTemplateDataResult#LaunchTemplateData
   */
  readonly launchTemplateData?: ResponseLaunchTemplateData;

}

/**
 * @schema GetManagedPrefixListAssociationsRequest
 */
export interface GetManagedPrefixListAssociationsRequest {
  /**
   * @schema GetManagedPrefixListAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetManagedPrefixListAssociationsRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema GetManagedPrefixListAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetManagedPrefixListAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetManagedPrefixListAssociationsResult
 */
export interface GetManagedPrefixListAssociationsResult {
  /**
   * @schema GetManagedPrefixListAssociationsResult#PrefixListAssociations
   */
  readonly prefixListAssociations?: PrefixListAssociation[];

  /**
   * @schema GetManagedPrefixListAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetManagedPrefixListEntriesRequest
 */
export interface GetManagedPrefixListEntriesRequest {
  /**
   * @schema GetManagedPrefixListEntriesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetManagedPrefixListEntriesRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema GetManagedPrefixListEntriesRequest#TargetVersion
   */
  readonly targetVersion?: number;

  /**
   * @schema GetManagedPrefixListEntriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetManagedPrefixListEntriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetManagedPrefixListEntriesResult
 */
export interface GetManagedPrefixListEntriesResult {
  /**
   * @schema GetManagedPrefixListEntriesResult#Entries
   */
  readonly entries?: PrefixListEntry[];

  /**
   * @schema GetManagedPrefixListEntriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetPasswordDataRequest
 */
export interface GetPasswordDataRequest {
  /**
   * @schema GetPasswordDataRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetPasswordDataRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetPasswordDataResult
 */
export interface GetPasswordDataResult {
  /**
   * @schema GetPasswordDataResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GetPasswordDataResult#PasswordData
   */
  readonly passwordData?: string;

  /**
   * @schema GetPasswordDataResult#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema GetReservedInstancesExchangeQuoteRequest
 */
export interface GetReservedInstancesExchangeQuoteRequest {
  /**
   * @schema GetReservedInstancesExchangeQuoteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema GetReservedInstancesExchangeQuoteRequest#ReservedInstanceIds
   */
  readonly reservedInstanceIds: string[];

  /**
   * @schema GetReservedInstancesExchangeQuoteRequest#TargetConfigurations
   */
  readonly targetConfigurations?: TargetConfigurationRequest[];

}

/**
 * @schema GetReservedInstancesExchangeQuoteResult
 */
export interface GetReservedInstancesExchangeQuoteResult {
  /**
   * @schema GetReservedInstancesExchangeQuoteResult#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#IsValidExchange
   */
  readonly isValidExchange?: boolean;

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#OutputReservedInstancesWillExpireAt
   */
  readonly outputReservedInstancesWillExpireAt?: string;

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#PaymentDue
   */
  readonly paymentDue?: string;

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#ReservedInstanceValueRollup
   */
  readonly reservedInstanceValueRollup?: ReservationValue;

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#ReservedInstanceValueSet
   */
  readonly reservedInstanceValueSet?: ReservedInstanceReservationValue[];

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#TargetConfigurationValueRollup
   */
  readonly targetConfigurationValueRollup?: ReservationValue;

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#TargetConfigurationValueSet
   */
  readonly targetConfigurationValueSet?: TargetReservationValue[];

  /**
   * @schema GetReservedInstancesExchangeQuoteResult#ValidationFailureReason
   */
  readonly validationFailureReason?: string;

}

/**
 * @schema GetTransitGatewayAttachmentPropagationsRequest
 */
export interface GetTransitGatewayAttachmentPropagationsRequest {
  /**
   * @schema GetTransitGatewayAttachmentPropagationsRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema GetTransitGatewayAttachmentPropagationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetTransitGatewayAttachmentPropagationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTransitGatewayAttachmentPropagationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTransitGatewayAttachmentPropagationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetTransitGatewayAttachmentPropagationsResult
 */
export interface GetTransitGatewayAttachmentPropagationsResult {
  /**
   * @schema GetTransitGatewayAttachmentPropagationsResult#TransitGatewayAttachmentPropagations
   */
  readonly transitGatewayAttachmentPropagations?: TransitGatewayAttachmentPropagation[];

  /**
   * @schema GetTransitGatewayAttachmentPropagationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTransitGatewayMulticastDomainAssociationsRequest
 */
export interface GetTransitGatewayMulticastDomainAssociationsRequest {
  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetTransitGatewayMulticastDomainAssociationsResult
 */
export interface GetTransitGatewayMulticastDomainAssociationsResult {
  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsResult#MulticastDomainAssociations
   */
  readonly multicastDomainAssociations?: TransitGatewayMulticastDomainAssociation[];

  /**
   * @schema GetTransitGatewayMulticastDomainAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTransitGatewayPrefixListReferencesRequest
 */
export interface GetTransitGatewayPrefixListReferencesRequest {
  /**
   * @schema GetTransitGatewayPrefixListReferencesRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema GetTransitGatewayPrefixListReferencesRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetTransitGatewayPrefixListReferencesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTransitGatewayPrefixListReferencesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTransitGatewayPrefixListReferencesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetTransitGatewayPrefixListReferencesResult
 */
export interface GetTransitGatewayPrefixListReferencesResult {
  /**
   * @schema GetTransitGatewayPrefixListReferencesResult#TransitGatewayPrefixListReferences
   */
  readonly transitGatewayPrefixListReferences?: TransitGatewayPrefixListReference[];

  /**
   * @schema GetTransitGatewayPrefixListReferencesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTransitGatewayRouteTableAssociationsRequest
 */
export interface GetTransitGatewayRouteTableAssociationsRequest {
  /**
   * @schema GetTransitGatewayRouteTableAssociationsRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema GetTransitGatewayRouteTableAssociationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetTransitGatewayRouteTableAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTransitGatewayRouteTableAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTransitGatewayRouteTableAssociationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetTransitGatewayRouteTableAssociationsResult
 */
export interface GetTransitGatewayRouteTableAssociationsResult {
  /**
   * @schema GetTransitGatewayRouteTableAssociationsResult#Associations
   */
  readonly associations?: TransitGatewayRouteTableAssociation[];

  /**
   * @schema GetTransitGatewayRouteTableAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTransitGatewayRouteTablePropagationsRequest
 */
export interface GetTransitGatewayRouteTablePropagationsRequest {
  /**
   * @schema GetTransitGatewayRouteTablePropagationsRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema GetTransitGatewayRouteTablePropagationsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema GetTransitGatewayRouteTablePropagationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTransitGatewayRouteTablePropagationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTransitGatewayRouteTablePropagationsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema GetTransitGatewayRouteTablePropagationsResult
 */
export interface GetTransitGatewayRouteTablePropagationsResult {
  /**
   * @schema GetTransitGatewayRouteTablePropagationsResult#TransitGatewayRouteTablePropagations
   */
  readonly transitGatewayRouteTablePropagations?: TransitGatewayRouteTablePropagation[];

  /**
   * @schema GetTransitGatewayRouteTablePropagationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ImportClientVpnClientCertificateRevocationListRequest
 */
export interface ImportClientVpnClientCertificateRevocationListRequest {
  /**
   * @schema ImportClientVpnClientCertificateRevocationListRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema ImportClientVpnClientCertificateRevocationListRequest#CertificateRevocationList
   */
  readonly certificateRevocationList: string;

  /**
   * @schema ImportClientVpnClientCertificateRevocationListRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ImportClientVpnClientCertificateRevocationListResult
 */
export interface ImportClientVpnClientCertificateRevocationListResult {
  /**
   * @schema ImportClientVpnClientCertificateRevocationListResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ImportImageRequest
 */
export interface ImportImageRequest {
  /**
   * @schema ImportImageRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema ImportImageRequest#ClientData
   */
  readonly clientData?: ClientData;

  /**
   * @schema ImportImageRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImportImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ImportImageRequest#DiskContainers
   */
  readonly diskContainers?: ImageDiskContainer[];

  /**
   * @schema ImportImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ImportImageRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImportImageRequest#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema ImportImageRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImportImageRequest#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ImportImageRequest#Platform
   */
  readonly platform?: string;

  /**
   * @schema ImportImageRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema ImportImageRequest#LicenseSpecifications
   */
  readonly licenseSpecifications?: ImportImageLicenseConfigurationRequest[];

  /**
   * @schema ImportImageRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema ImportImageResult
 */
export interface ImportImageResult {
  /**
   * @schema ImportImageResult#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema ImportImageResult#Description
   */
  readonly description?: string;

  /**
   * @schema ImportImageResult#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImportImageResult#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema ImportImageResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ImportImageResult#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema ImportImageResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImportImageResult#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ImportImageResult#Platform
   */
  readonly platform?: string;

  /**
   * @schema ImportImageResult#Progress
   */
  readonly progress?: string;

  /**
   * @schema ImportImageResult#SnapshotDetails
   */
  readonly snapshotDetails?: SnapshotDetail[];

  /**
   * @schema ImportImageResult#Status
   */
  readonly status?: string;

  /**
   * @schema ImportImageResult#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ImportImageResult#LicenseSpecifications
   */
  readonly licenseSpecifications?: ImportImageLicenseConfigurationResponse[];

  /**
   * @schema ImportImageResult#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ImportInstanceRequest
 */
export interface ImportInstanceRequest {
  /**
   * @schema ImportInstanceRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ImportInstanceRequest#DiskImages
   */
  readonly diskImages?: DiskImage[];

  /**
   * @schema ImportInstanceRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ImportInstanceRequest#LaunchSpecification
   */
  readonly launchSpecification?: ImportInstanceLaunchSpecification;

  /**
   * @schema ImportInstanceRequest#Platform
   */
  readonly platform: string;

}

/**
 * @schema ImportInstanceResult
 */
export interface ImportInstanceResult {
  /**
   * @schema ImportInstanceResult#ConversionTask
   */
  readonly conversionTask?: ConversionTask;

}

/**
 * @schema ImportKeyPairRequest
 */
export interface ImportKeyPairRequest {
  /**
   * @schema ImportKeyPairRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ImportKeyPairRequest#KeyName
   */
  readonly keyName: string;

  /**
   * @schema ImportKeyPairRequest#PublicKeyMaterial
   */
  readonly publicKeyMaterial: any;

  /**
   * @schema ImportKeyPairRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema ImportKeyPairResult
 */
export interface ImportKeyPairResult {
  /**
   * @schema ImportKeyPairResult#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema ImportKeyPairResult#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema ImportKeyPairResult#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema ImportKeyPairResult#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ImportSnapshotRequest
 */
export interface ImportSnapshotRequest {
  /**
   * @schema ImportSnapshotRequest#ClientData
   */
  readonly clientData?: ClientData;

  /**
   * @schema ImportSnapshotRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ImportSnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ImportSnapshotRequest#DiskContainer
   */
  readonly diskContainer?: SnapshotDiskContainer;

  /**
   * @schema ImportSnapshotRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ImportSnapshotRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImportSnapshotRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImportSnapshotRequest#RoleName
   */
  readonly roleName?: string;

  /**
   * @schema ImportSnapshotRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema ImportSnapshotResult
 */
export interface ImportSnapshotResult {
  /**
   * @schema ImportSnapshotResult#Description
   */
  readonly description?: string;

  /**
   * @schema ImportSnapshotResult#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema ImportSnapshotResult#SnapshotTaskDetail
   */
  readonly snapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * @schema ImportSnapshotResult#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ImportVolumeRequest
 */
export interface ImportVolumeRequest {
  /**
   * @schema ImportVolumeRequest#AvailabilityZone
   */
  readonly availabilityZone: string;

  /**
   * @schema ImportVolumeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ImportVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ImportVolumeRequest#Image
   */
  readonly image: DiskImageDetail;

  /**
   * @schema ImportVolumeRequest#Volume
   */
  readonly volume: VolumeDetail;

}

/**
 * @schema ImportVolumeResult
 */
export interface ImportVolumeResult {
  /**
   * @schema ImportVolumeResult#ConversionTask
   */
  readonly conversionTask?: ConversionTask;

}

/**
 * @schema ModifyAvailabilityZoneGroupRequest
 */
export interface ModifyAvailabilityZoneGroupRequest {
  /**
   * @schema ModifyAvailabilityZoneGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema ModifyAvailabilityZoneGroupRequest#OptInStatus
   */
  readonly optInStatus: string;

  /**
   * @schema ModifyAvailabilityZoneGroupRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyAvailabilityZoneGroupResult
 */
export interface ModifyAvailabilityZoneGroupResult {
  /**
   * @schema ModifyAvailabilityZoneGroupResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyCapacityReservationRequest
 */
export interface ModifyCapacityReservationRequest {
  /**
   * @schema ModifyCapacityReservationRequest#CapacityReservationId
   */
  readonly capacityReservationId: string;

  /**
   * @schema ModifyCapacityReservationRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ModifyCapacityReservationRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema ModifyCapacityReservationRequest#EndDateType
   */
  readonly endDateType?: string;

  /**
   * @schema ModifyCapacityReservationRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyCapacityReservationResult
 */
export interface ModifyCapacityReservationResult {
  /**
   * @schema ModifyCapacityReservationResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyClientVpnEndpointRequest
 */
export interface ModifyClientVpnEndpointRequest {
  /**
   * @schema ModifyClientVpnEndpointRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema ModifyClientVpnEndpointRequest#ServerCertificateArn
   */
  readonly serverCertificateArn?: string;

  /**
   * @schema ModifyClientVpnEndpointRequest#ConnectionLogOptions
   */
  readonly connectionLogOptions?: ConnectionLogOptions;

  /**
   * @schema ModifyClientVpnEndpointRequest#DnsServers
   */
  readonly dnsServers?: DnsServersOptionsModifyStructure;

  /**
   * @schema ModifyClientVpnEndpointRequest#VpnPort
   */
  readonly vpnPort?: number;

  /**
   * @schema ModifyClientVpnEndpointRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ModifyClientVpnEndpointRequest#SplitTunnel
   */
  readonly splitTunnel?: boolean;

  /**
   * @schema ModifyClientVpnEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyClientVpnEndpointRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ModifyClientVpnEndpointRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ModifyClientVpnEndpointRequest#SelfServicePortal
   */
  readonly selfServicePortal?: string;

  /**
   * @schema ModifyClientVpnEndpointRequest#ClientConnectOptions
   */
  readonly clientConnectOptions?: ClientConnectOptions;

}

/**
 * @schema ModifyClientVpnEndpointResult
 */
export interface ModifyClientVpnEndpointResult {
  /**
   * @schema ModifyClientVpnEndpointResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyDefaultCreditSpecificationRequest
 */
export interface ModifyDefaultCreditSpecificationRequest {
  /**
   * @schema ModifyDefaultCreditSpecificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyDefaultCreditSpecificationRequest#InstanceFamily
   */
  readonly instanceFamily: string;

  /**
   * @schema ModifyDefaultCreditSpecificationRequest#CpuCredits
   */
  readonly cpuCredits: string;

}

/**
 * @schema ModifyDefaultCreditSpecificationResult
 */
export interface ModifyDefaultCreditSpecificationResult {
  /**
   * @schema ModifyDefaultCreditSpecificationResult#InstanceFamilyCreditSpecification
   */
  readonly instanceFamilyCreditSpecification?: InstanceFamilyCreditSpecification;

}

/**
 * @schema ModifyEbsDefaultKmsKeyIdRequest
 */
export interface ModifyEbsDefaultKmsKeyIdRequest {
  /**
   * @schema ModifyEbsDefaultKmsKeyIdRequest#KmsKeyId
   */
  readonly kmsKeyId: string;

  /**
   * @schema ModifyEbsDefaultKmsKeyIdRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyEbsDefaultKmsKeyIdResult
 */
export interface ModifyEbsDefaultKmsKeyIdResult {
  /**
   * @schema ModifyEbsDefaultKmsKeyIdResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ModifyFleetRequest
 */
export interface ModifyFleetRequest {
  /**
   * @schema ModifyFleetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyFleetRequest#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema ModifyFleetRequest#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: FleetLaunchTemplateConfigRequest[];

  /**
   * @schema ModifyFleetRequest#FleetId
   */
  readonly fleetId: string;

  /**
   * @schema ModifyFleetRequest#TargetCapacitySpecification
   */
  readonly targetCapacitySpecification?: TargetCapacitySpecificationRequest;

}

/**
 * @schema ModifyFleetResult
 */
export interface ModifyFleetResult {
  /**
   * @schema ModifyFleetResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyFpgaImageAttributeRequest
 */
export interface ModifyFpgaImageAttributeRequest {
  /**
   * @schema ModifyFpgaImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyFpgaImageAttributeRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

  /**
   * @schema ModifyFpgaImageAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ModifyFpgaImageAttributeRequest#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema ModifyFpgaImageAttributeRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema ModifyFpgaImageAttributeRequest#UserGroups
   */
  readonly userGroups?: string[];

  /**
   * @schema ModifyFpgaImageAttributeRequest#ProductCodes
   */
  readonly productCodes?: string[];

  /**
   * @schema ModifyFpgaImageAttributeRequest#LoadPermission
   */
  readonly loadPermission?: LoadPermissionModifications;

  /**
   * @schema ModifyFpgaImageAttributeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ModifyFpgaImageAttributeRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema ModifyFpgaImageAttributeResult
 */
export interface ModifyFpgaImageAttributeResult {
  /**
   * @schema ModifyFpgaImageAttributeResult#FpgaImageAttribute
   */
  readonly fpgaImageAttribute?: FpgaImageAttribute;

}

/**
 * @schema ModifyHostsRequest
 */
export interface ModifyHostsRequest {
  /**
   * @schema ModifyHostsRequest#AutoPlacement
   */
  readonly autoPlacement?: string;

  /**
   * @schema ModifyHostsRequest#HostIds
   */
  readonly hostIds: string[];

  /**
   * @schema ModifyHostsRequest#HostRecovery
   */
  readonly hostRecovery?: string;

  /**
   * @schema ModifyHostsRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ModifyHostsRequest#InstanceFamily
   */
  readonly instanceFamily?: string;

}

/**
 * @schema ModifyHostsResult
 */
export interface ModifyHostsResult {
  /**
   * @schema ModifyHostsResult#Successful
   */
  readonly successful?: string[];

  /**
   * @schema ModifyHostsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema ModifyIdFormatRequest
 */
export interface ModifyIdFormatRequest {
  /**
   * @schema ModifyIdFormatRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema ModifyIdFormatRequest#UseLongIds
   */
  readonly useLongIds: boolean;

}

/**
 * @schema ModifyIdentityIdFormatRequest
 */
export interface ModifyIdentityIdFormatRequest {
  /**
   * @schema ModifyIdentityIdFormatRequest#PrincipalArn
   */
  readonly principalArn: string;

  /**
   * @schema ModifyIdentityIdFormatRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema ModifyIdentityIdFormatRequest#UseLongIds
   */
  readonly useLongIds: boolean;

}

/**
 * @schema ModifyImageAttributeRequest
 */
export interface ModifyImageAttributeRequest {
  /**
   * @schema ModifyImageAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ModifyImageAttributeRequest#Description
   */
  readonly description?: AttributeValue;

  /**
   * @schema ModifyImageAttributeRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema ModifyImageAttributeRequest#LaunchPermission
   */
  readonly launchPermission?: LaunchPermissionModifications;

  /**
   * @schema ModifyImageAttributeRequest#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema ModifyImageAttributeRequest#ProductCodes
   */
  readonly productCodes?: string[];

  /**
   * @schema ModifyImageAttributeRequest#UserGroups
   */
  readonly userGroups?: string[];

  /**
   * @schema ModifyImageAttributeRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema ModifyImageAttributeRequest#Value
   */
  readonly value?: string;

  /**
   * @schema ModifyImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyInstanceAttributeRequest
 */
export interface ModifyInstanceAttributeRequest {
  /**
   * @schema ModifyInstanceAttributeRequest#SourceDestCheck
   */
  readonly sourceDestCheck?: AttributeBooleanValue;

  /**
   * @schema ModifyInstanceAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ModifyInstanceAttributeRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: InstanceBlockDeviceMappingSpecification[];

  /**
   * @schema ModifyInstanceAttributeRequest#DisableApiTermination
   */
  readonly disableApiTermination?: AttributeBooleanValue;

  /**
   * @schema ModifyInstanceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyInstanceAttributeRequest#EbsOptimized
   */
  readonly ebsOptimized?: AttributeBooleanValue;

  /**
   * @schema ModifyInstanceAttributeRequest#EnaSupport
   */
  readonly enaSupport?: AttributeBooleanValue;

  /**
   * @schema ModifyInstanceAttributeRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema ModifyInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ModifyInstanceAttributeRequest#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: AttributeValue;

  /**
   * @schema ModifyInstanceAttributeRequest#InstanceType
   */
  readonly instanceType?: AttributeValue;

  /**
   * @schema ModifyInstanceAttributeRequest#Kernel
   */
  readonly kernel?: AttributeValue;

  /**
   * @schema ModifyInstanceAttributeRequest#Ramdisk
   */
  readonly ramdisk?: AttributeValue;

  /**
   * @schema ModifyInstanceAttributeRequest#SriovNetSupport
   */
  readonly sriovNetSupport?: AttributeValue;

  /**
   * @schema ModifyInstanceAttributeRequest#UserData
   */
  readonly userData?: BlobAttributeValue;

  /**
   * @schema ModifyInstanceAttributeRequest#Value
   */
  readonly value?: string;

}

/**
 * @schema ModifyInstanceCapacityReservationAttributesRequest
 */
export interface ModifyInstanceCapacityReservationAttributesRequest {
  /**
   * @schema ModifyInstanceCapacityReservationAttributesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ModifyInstanceCapacityReservationAttributesRequest#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification: CapacityReservationSpecification;

  /**
   * @schema ModifyInstanceCapacityReservationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyInstanceCapacityReservationAttributesResult
 */
export interface ModifyInstanceCapacityReservationAttributesResult {
  /**
   * @schema ModifyInstanceCapacityReservationAttributesResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyInstanceCreditSpecificationRequest
 */
export interface ModifyInstanceCreditSpecificationRequest {
  /**
   * @schema ModifyInstanceCreditSpecificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyInstanceCreditSpecificationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ModifyInstanceCreditSpecificationRequest#InstanceCreditSpecifications
   */
  readonly instanceCreditSpecifications: InstanceCreditSpecificationRequest[];

}

/**
 * @schema ModifyInstanceCreditSpecificationResult
 */
export interface ModifyInstanceCreditSpecificationResult {
  /**
   * @schema ModifyInstanceCreditSpecificationResult#SuccessfulInstanceCreditSpecifications
   */
  readonly successfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];

  /**
   * @schema ModifyInstanceCreditSpecificationResult#UnsuccessfulInstanceCreditSpecifications
   */
  readonly unsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];

}

/**
 * @schema ModifyInstanceEventStartTimeRequest
 */
export interface ModifyInstanceEventStartTimeRequest {
  /**
   * @schema ModifyInstanceEventStartTimeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyInstanceEventStartTimeRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ModifyInstanceEventStartTimeRequest#InstanceEventId
   */
  readonly instanceEventId: string;

  /**
   * @schema ModifyInstanceEventStartTimeRequest#NotBefore
   */
  readonly notBefore: string;

}

/**
 * @schema ModifyInstanceEventStartTimeResult
 */
export interface ModifyInstanceEventStartTimeResult {
  /**
   * @schema ModifyInstanceEventStartTimeResult#Event
   */
  readonly event?: InstanceStatusEvent;

}

/**
 * @schema ModifyInstanceMetadataOptionsRequest
 */
export interface ModifyInstanceMetadataOptionsRequest {
  /**
   * @schema ModifyInstanceMetadataOptionsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ModifyInstanceMetadataOptionsRequest#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema ModifyInstanceMetadataOptionsRequest#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema ModifyInstanceMetadataOptionsRequest#HttpEndpoint
   */
  readonly httpEndpoint?: string;

  /**
   * @schema ModifyInstanceMetadataOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyInstanceMetadataOptionsResult
 */
export interface ModifyInstanceMetadataOptionsResult {
  /**
   * @schema ModifyInstanceMetadataOptionsResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ModifyInstanceMetadataOptionsResult#InstanceMetadataOptions
   */
  readonly instanceMetadataOptions?: InstanceMetadataOptionsResponse;

}

/**
 * @schema ModifyInstancePlacementRequest
 */
export interface ModifyInstancePlacementRequest {
  /**
   * @schema ModifyInstancePlacementRequest#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema ModifyInstancePlacementRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ModifyInstancePlacementRequest#HostId
   */
  readonly hostId?: string;

  /**
   * @schema ModifyInstancePlacementRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ModifyInstancePlacementRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema ModifyInstancePlacementRequest#PartitionNumber
   */
  readonly partitionNumber?: number;

  /**
   * @schema ModifyInstancePlacementRequest#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

}

/**
 * @schema ModifyInstancePlacementResult
 */
export interface ModifyInstancePlacementResult {
  /**
   * @schema ModifyInstancePlacementResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyLaunchTemplateRequest
 */
export interface ModifyLaunchTemplateRequest {
  /**
   * @schema ModifyLaunchTemplateRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyLaunchTemplateRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ModifyLaunchTemplateRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema ModifyLaunchTemplateRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema ModifyLaunchTemplateRequest#DefaultVersion
   */
  readonly defaultVersion?: string;

}

/**
 * @schema ModifyLaunchTemplateResult
 */
export interface ModifyLaunchTemplateResult {
  /**
   * @schema ModifyLaunchTemplateResult#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplate;

}

/**
 * @schema ModifyManagedPrefixListRequest
 */
export interface ModifyManagedPrefixListRequest {
  /**
   * @schema ModifyManagedPrefixListRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyManagedPrefixListRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema ModifyManagedPrefixListRequest#CurrentVersion
   */
  readonly currentVersion?: number;

  /**
   * @schema ModifyManagedPrefixListRequest#PrefixListName
   */
  readonly prefixListName?: string;

  /**
   * @schema ModifyManagedPrefixListRequest#AddEntries
   */
  readonly addEntries?: AddPrefixListEntry[];

  /**
   * @schema ModifyManagedPrefixListRequest#RemoveEntries
   */
  readonly removeEntries?: RemovePrefixListEntry[];

}

/**
 * @schema ModifyManagedPrefixListResult
 */
export interface ModifyManagedPrefixListResult {
  /**
   * @schema ModifyManagedPrefixListResult#PrefixList
   */
  readonly prefixList?: ManagedPrefixList;

}

/**
 * @schema ModifyNetworkInterfaceAttributeRequest
 */
export interface ModifyNetworkInterfaceAttributeRequest {
  /**
   * @schema ModifyNetworkInterfaceAttributeRequest#Attachment
   */
  readonly attachment?: NetworkInterfaceAttachmentChanges;

  /**
   * @schema ModifyNetworkInterfaceAttributeRequest#Description
   */
  readonly description?: AttributeValue;

  /**
   * @schema ModifyNetworkInterfaceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyNetworkInterfaceAttributeRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema ModifyNetworkInterfaceAttributeRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema ModifyNetworkInterfaceAttributeRequest#SourceDestCheck
   */
  readonly sourceDestCheck?: AttributeBooleanValue;

}

/**
 * @schema ModifyReservedInstancesRequest
 */
export interface ModifyReservedInstancesRequest {
  /**
   * @schema ModifyReservedInstancesRequest#ReservedInstancesIds
   */
  readonly reservedInstancesIds: string[];

  /**
   * @schema ModifyReservedInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ModifyReservedInstancesRequest#TargetConfigurations
   */
  readonly targetConfigurations: ReservedInstancesConfiguration[];

}

/**
 * @schema ModifyReservedInstancesResult
 */
export interface ModifyReservedInstancesResult {
  /**
   * @schema ModifyReservedInstancesResult#ReservedInstancesModificationId
   */
  readonly reservedInstancesModificationId?: string;

}

/**
 * @schema ModifySnapshotAttributeRequest
 */
export interface ModifySnapshotAttributeRequest {
  /**
   * @schema ModifySnapshotAttributeRequest#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ModifySnapshotAttributeRequest#CreateVolumePermission
   */
  readonly createVolumePermission?: CreateVolumePermissionModifications;

  /**
   * @schema ModifySnapshotAttributeRequest#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema ModifySnapshotAttributeRequest#OperationType
   */
  readonly operationType?: string;

  /**
   * @schema ModifySnapshotAttributeRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema ModifySnapshotAttributeRequest#UserIds
   */
  readonly userIds?: string[];

  /**
   * @schema ModifySnapshotAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifySpotFleetRequestRequest
 */
export interface ModifySpotFleetRequestRequest {
  /**
   * @schema ModifySpotFleetRequestRequest#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema ModifySpotFleetRequestRequest#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * @schema ModifySpotFleetRequestRequest#SpotFleetRequestId
   */
  readonly spotFleetRequestId: string;

  /**
   * @schema ModifySpotFleetRequestRequest#TargetCapacity
   */
  readonly targetCapacity?: number;

  /**
   * @schema ModifySpotFleetRequestRequest#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

}

/**
 * @schema ModifySpotFleetRequestResponse
 */
export interface ModifySpotFleetRequestResponse {
  /**
   * @schema ModifySpotFleetRequestResponse#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifySubnetAttributeRequest
 */
export interface ModifySubnetAttributeRequest {
  /**
   * @schema ModifySubnetAttributeRequest#AssignIpv6AddressOnCreation
   */
  readonly assignIpv6AddressOnCreation?: AttributeBooleanValue;

  /**
   * @schema ModifySubnetAttributeRequest#MapPublicIpOnLaunch
   */
  readonly mapPublicIpOnLaunch?: AttributeBooleanValue;

  /**
   * @schema ModifySubnetAttributeRequest#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema ModifySubnetAttributeRequest#MapCustomerOwnedIpOnLaunch
   */
  readonly mapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;

  /**
   * @schema ModifySubnetAttributeRequest#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

}

/**
 * @schema ModifyTrafficMirrorFilterNetworkServicesRequest
 */
export interface ModifyTrafficMirrorFilterNetworkServicesRequest {
  /**
   * @schema ModifyTrafficMirrorFilterNetworkServicesRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId: string;

  /**
   * @schema ModifyTrafficMirrorFilterNetworkServicesRequest#AddNetworkServices
   */
  readonly addNetworkServices?: string[];

  /**
   * @schema ModifyTrafficMirrorFilterNetworkServicesRequest#RemoveNetworkServices
   */
  readonly removeNetworkServices?: string[];

  /**
   * @schema ModifyTrafficMirrorFilterNetworkServicesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyTrafficMirrorFilterNetworkServicesResult
 */
export interface ModifyTrafficMirrorFilterNetworkServicesResult {
  /**
   * @schema ModifyTrafficMirrorFilterNetworkServicesResult#TrafficMirrorFilter
   */
  readonly trafficMirrorFilter?: TrafficMirrorFilter;

}

/**
 * @schema ModifyTrafficMirrorFilterRuleRequest
 */
export interface ModifyTrafficMirrorFilterRuleRequest {
  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId: string;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#TrafficDirection
   */
  readonly trafficDirection?: string;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#RuleNumber
   */
  readonly ruleNumber?: number;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#DestinationPortRange
   */
  readonly destinationPortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#SourcePortRange
   */
  readonly sourcePortRange?: TrafficMirrorPortRangeRequest;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#Protocol
   */
  readonly protocol?: number;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#SourceCidrBlock
   */
  readonly sourceCidrBlock?: string;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#RemoveFields
   */
  readonly removeFields?: string[];

  /**
   * @schema ModifyTrafficMirrorFilterRuleRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyTrafficMirrorFilterRuleResult
 */
export interface ModifyTrafficMirrorFilterRuleResult {
  /**
   * @schema ModifyTrafficMirrorFilterRuleResult#TrafficMirrorFilterRule
   */
  readonly trafficMirrorFilterRule?: TrafficMirrorFilterRule;

}

/**
 * @schema ModifyTrafficMirrorSessionRequest
 */
export interface ModifyTrafficMirrorSessionRequest {
  /**
   * @schema ModifyTrafficMirrorSessionRequest#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId: string;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#PacketLength
   */
  readonly packetLength?: number;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#SessionNumber
   */
  readonly sessionNumber?: number;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#VirtualNetworkId
   */
  readonly virtualNetworkId?: number;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ModifyTrafficMirrorSessionRequest#RemoveFields
   */
  readonly removeFields?: string[];

  /**
   * @schema ModifyTrafficMirrorSessionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyTrafficMirrorSessionResult
 */
export interface ModifyTrafficMirrorSessionResult {
  /**
   * @schema ModifyTrafficMirrorSessionResult#TrafficMirrorSession
   */
  readonly trafficMirrorSession?: TrafficMirrorSession;

}

/**
 * @schema ModifyTransitGatewayRequest
 */
export interface ModifyTransitGatewayRequest {
  /**
   * @schema ModifyTransitGatewayRequest#TransitGatewayId
   */
  readonly transitGatewayId: string;

  /**
   * @schema ModifyTransitGatewayRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ModifyTransitGatewayRequest#Options
   */
  readonly options?: ModifyTransitGatewayOptions;

  /**
   * @schema ModifyTransitGatewayRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyTransitGatewayResult
 */
export interface ModifyTransitGatewayResult {
  /**
   * @schema ModifyTransitGatewayResult#TransitGateway
   */
  readonly transitGateway?: TransitGateway;

}

/**
 * @schema ModifyTransitGatewayPrefixListReferenceRequest
 */
export interface ModifyTransitGatewayPrefixListReferenceRequest {
  /**
   * @schema ModifyTransitGatewayPrefixListReferenceRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema ModifyTransitGatewayPrefixListReferenceRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema ModifyTransitGatewayPrefixListReferenceRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema ModifyTransitGatewayPrefixListReferenceRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema ModifyTransitGatewayPrefixListReferenceRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyTransitGatewayPrefixListReferenceResult
 */
export interface ModifyTransitGatewayPrefixListReferenceResult {
  /**
   * @schema ModifyTransitGatewayPrefixListReferenceResult#TransitGatewayPrefixListReference
   */
  readonly transitGatewayPrefixListReference?: TransitGatewayPrefixListReference;

}

/**
 * @schema ModifyTransitGatewayVpcAttachmentRequest
 */
export interface ModifyTransitGatewayVpcAttachmentRequest {
  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequest#AddSubnetIds
   */
  readonly addSubnetIds?: string[];

  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequest#RemoveSubnetIds
   */
  readonly removeSubnetIds?: string[];

  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequest#Options
   */
  readonly options?: ModifyTransitGatewayVpcAttachmentRequestOptions;

  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyTransitGatewayVpcAttachmentResult
 */
export interface ModifyTransitGatewayVpcAttachmentResult {
  /**
   * @schema ModifyTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: TransitGatewayVpcAttachment;

}

/**
 * @schema ModifyVolumeRequest
 */
export interface ModifyVolumeRequest {
  /**
   * @schema ModifyVolumeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema ModifyVolumeRequest#Size
   */
  readonly size?: number;

  /**
   * @schema ModifyVolumeRequest#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema ModifyVolumeRequest#Iops
   */
  readonly iops?: number;

}

/**
 * @schema ModifyVolumeResult
 */
export interface ModifyVolumeResult {
  /**
   * @schema ModifyVolumeResult#VolumeModification
   */
  readonly volumeModification?: VolumeModification;

}

/**
 * @schema ModifyVolumeAttributeRequest
 */
export interface ModifyVolumeAttributeRequest {
  /**
   * @schema ModifyVolumeAttributeRequest#AutoEnableIO
   */
  readonly autoEnableIo?: AttributeBooleanValue;

  /**
   * @schema ModifyVolumeAttributeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema ModifyVolumeAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyVpcAttributeRequest
 */
export interface ModifyVpcAttributeRequest {
  /**
   * @schema ModifyVpcAttributeRequest#EnableDnsHostnames
   */
  readonly enableDnsHostnames?: AttributeBooleanValue;

  /**
   * @schema ModifyVpcAttributeRequest#EnableDnsSupport
   */
  readonly enableDnsSupport?: AttributeBooleanValue;

  /**
   * @schema ModifyVpcAttributeRequest#VpcId
   */
  readonly vpcId: string;

}

/**
 * @schema ModifyVpcEndpointRequest
 */
export interface ModifyVpcEndpointRequest {
  /**
   * @schema ModifyVpcEndpointRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyVpcEndpointRequest#VpcEndpointId
   */
  readonly vpcEndpointId: string;

  /**
   * @schema ModifyVpcEndpointRequest#ResetPolicy
   */
  readonly resetPolicy?: boolean;

  /**
   * @schema ModifyVpcEndpointRequest#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema ModifyVpcEndpointRequest#AddRouteTableIds
   */
  readonly addRouteTableIds?: string[];

  /**
   * @schema ModifyVpcEndpointRequest#RemoveRouteTableIds
   */
  readonly removeRouteTableIds?: string[];

  /**
   * @schema ModifyVpcEndpointRequest#AddSubnetIds
   */
  readonly addSubnetIds?: string[];

  /**
   * @schema ModifyVpcEndpointRequest#RemoveSubnetIds
   */
  readonly removeSubnetIds?: string[];

  /**
   * @schema ModifyVpcEndpointRequest#AddSecurityGroupIds
   */
  readonly addSecurityGroupIds?: string[];

  /**
   * @schema ModifyVpcEndpointRequest#RemoveSecurityGroupIds
   */
  readonly removeSecurityGroupIds?: string[];

  /**
   * @schema ModifyVpcEndpointRequest#PrivateDnsEnabled
   */
  readonly privateDnsEnabled?: boolean;

}

/**
 * @schema ModifyVpcEndpointResult
 */
export interface ModifyVpcEndpointResult {
  /**
   * @schema ModifyVpcEndpointResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyVpcEndpointConnectionNotificationRequest
 */
export interface ModifyVpcEndpointConnectionNotificationRequest {
  /**
   * @schema ModifyVpcEndpointConnectionNotificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyVpcEndpointConnectionNotificationRequest#ConnectionNotificationId
   */
  readonly connectionNotificationId: string;

  /**
   * @schema ModifyVpcEndpointConnectionNotificationRequest#ConnectionNotificationArn
   */
  readonly connectionNotificationArn?: string;

  /**
   * @schema ModifyVpcEndpointConnectionNotificationRequest#ConnectionEvents
   */
  readonly connectionEvents?: string[];

}

/**
 * @schema ModifyVpcEndpointConnectionNotificationResult
 */
export interface ModifyVpcEndpointConnectionNotificationResult {
  /**
   * @schema ModifyVpcEndpointConnectionNotificationResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema ModifyVpcEndpointServiceConfigurationRequest
 */
export interface ModifyVpcEndpointServiceConfigurationRequest {
  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#RemovePrivateDnsName
   */
  readonly removePrivateDnsName?: boolean;

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#AddNetworkLoadBalancerArns
   */
  readonly addNetworkLoadBalancerArns?: string[];

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#RemoveNetworkLoadBalancerArns
   */
  readonly removeNetworkLoadBalancerArns?: string[];

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#AddGatewayLoadBalancerArns
   */
  readonly addGatewayLoadBalancerArns?: string[];

  /**
   * @schema ModifyVpcEndpointServiceConfigurationRequest#RemoveGatewayLoadBalancerArns
   */
  readonly removeGatewayLoadBalancerArns?: string[];

}

/**
 * @schema ModifyVpcEndpointServiceConfigurationResult
 */
export interface ModifyVpcEndpointServiceConfigurationResult {
  /**
   * @schema ModifyVpcEndpointServiceConfigurationResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ModifyVpcEndpointServicePermissionsRequest
 */
export interface ModifyVpcEndpointServicePermissionsRequest {
  /**
   * @schema ModifyVpcEndpointServicePermissionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyVpcEndpointServicePermissionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema ModifyVpcEndpointServicePermissionsRequest#AddAllowedPrincipals
   */
  readonly addAllowedPrincipals?: string[];

  /**
   * @schema ModifyVpcEndpointServicePermissionsRequest#RemoveAllowedPrincipals
   */
  readonly removeAllowedPrincipals?: string[];

}

/**
 * @schema ModifyVpcEndpointServicePermissionsResult
 */
export interface ModifyVpcEndpointServicePermissionsResult {
  /**
   * @schema ModifyVpcEndpointServicePermissionsResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema ModifyVpcPeeringConnectionOptionsRequest
 */
export interface ModifyVpcPeeringConnectionOptionsRequest {
  /**
   * @schema ModifyVpcPeeringConnectionOptionsRequest#AccepterPeeringConnectionOptions
   */
  readonly accepterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * @schema ModifyVpcPeeringConnectionOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ModifyVpcPeeringConnectionOptionsRequest#RequesterPeeringConnectionOptions
   */
  readonly requesterPeeringConnectionOptions?: PeeringConnectionOptionsRequest;

  /**
   * @schema ModifyVpcPeeringConnectionOptionsRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema ModifyVpcPeeringConnectionOptionsResult
 */
export interface ModifyVpcPeeringConnectionOptionsResult {
  /**
   * @schema ModifyVpcPeeringConnectionOptionsResult#AccepterPeeringConnectionOptions
   */
  readonly accepterPeeringConnectionOptions?: PeeringConnectionOptions;

  /**
   * @schema ModifyVpcPeeringConnectionOptionsResult#RequesterPeeringConnectionOptions
   */
  readonly requesterPeeringConnectionOptions?: PeeringConnectionOptions;

}

/**
 * @schema ModifyVpcTenancyRequest
 */
export interface ModifyVpcTenancyRequest {
  /**
   * @schema ModifyVpcTenancyRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema ModifyVpcTenancyRequest#InstanceTenancy
   */
  readonly instanceTenancy: string;

  /**
   * @schema ModifyVpcTenancyRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyVpcTenancyResult
 */
export interface ModifyVpcTenancyResult {
  /**
   * @schema ModifyVpcTenancyResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema ModifyVpnConnectionRequest
 */
export interface ModifyVpnConnectionRequest {
  /**
   * @schema ModifyVpnConnectionRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema ModifyVpnConnectionRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema ModifyVpnConnectionRequest#CustomerGatewayId
   */
  readonly customerGatewayId?: string;

  /**
   * @schema ModifyVpnConnectionRequest#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema ModifyVpnConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyVpnConnectionResult
 */
export interface ModifyVpnConnectionResult {
  /**
   * @schema ModifyVpnConnectionResult#VpnConnection
   */
  readonly vpnConnection?: VpnConnection;

}

/**
 * @schema ModifyVpnConnectionOptionsRequest
 */
export interface ModifyVpnConnectionOptionsRequest {
  /**
   * @schema ModifyVpnConnectionOptionsRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema ModifyVpnConnectionOptionsRequest#LocalIpv4NetworkCidr
   */
  readonly localIpv4NetworkCidr?: string;

  /**
   * @schema ModifyVpnConnectionOptionsRequest#RemoteIpv4NetworkCidr
   */
  readonly remoteIpv4NetworkCidr?: string;

  /**
   * @schema ModifyVpnConnectionOptionsRequest#LocalIpv6NetworkCidr
   */
  readonly localIpv6NetworkCidr?: string;

  /**
   * @schema ModifyVpnConnectionOptionsRequest#RemoteIpv6NetworkCidr
   */
  readonly remoteIpv6NetworkCidr?: string;

  /**
   * @schema ModifyVpnConnectionOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyVpnConnectionOptionsResult
 */
export interface ModifyVpnConnectionOptionsResult {
  /**
   * @schema ModifyVpnConnectionOptionsResult#VpnConnection
   */
  readonly vpnConnection?: VpnConnection;

}

/**
 * @schema ModifyVpnTunnelCertificateRequest
 */
export interface ModifyVpnTunnelCertificateRequest {
  /**
   * @schema ModifyVpnTunnelCertificateRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema ModifyVpnTunnelCertificateRequest#VpnTunnelOutsideIpAddress
   */
  readonly vpnTunnelOutsideIpAddress: string;

  /**
   * @schema ModifyVpnTunnelCertificateRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyVpnTunnelCertificateResult
 */
export interface ModifyVpnTunnelCertificateResult {
  /**
   * @schema ModifyVpnTunnelCertificateResult#VpnConnection
   */
  readonly vpnConnection?: VpnConnection;

}

/**
 * @schema ModifyVpnTunnelOptionsRequest
 */
export interface ModifyVpnTunnelOptionsRequest {
  /**
   * @schema ModifyVpnTunnelOptionsRequest#VpnConnectionId
   */
  readonly vpnConnectionId: string;

  /**
   * @schema ModifyVpnTunnelOptionsRequest#VpnTunnelOutsideIpAddress
   */
  readonly vpnTunnelOutsideIpAddress: string;

  /**
   * @schema ModifyVpnTunnelOptionsRequest#TunnelOptions
   */
  readonly tunnelOptions: ModifyVpnTunnelOptionsSpecification;

  /**
   * @schema ModifyVpnTunnelOptionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ModifyVpnTunnelOptionsResult
 */
export interface ModifyVpnTunnelOptionsResult {
  /**
   * @schema ModifyVpnTunnelOptionsResult#VpnConnection
   */
  readonly vpnConnection?: VpnConnection;

}

/**
 * @schema MonitorInstancesRequest
 */
export interface MonitorInstancesRequest {
  /**
   * @schema MonitorInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema MonitorInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema MonitorInstancesResult
 */
export interface MonitorInstancesResult {
  /**
   * @schema MonitorInstancesResult#InstanceMonitorings
   */
  readonly instanceMonitorings?: InstanceMonitoring[];

}

/**
 * @schema MoveAddressToVpcRequest
 */
export interface MoveAddressToVpcRequest {
  /**
   * @schema MoveAddressToVpcRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema MoveAddressToVpcRequest#PublicIp
   */
  readonly publicIp: string;

}

/**
 * @schema MoveAddressToVpcResult
 */
export interface MoveAddressToVpcResult {
  /**
   * @schema MoveAddressToVpcResult#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema MoveAddressToVpcResult#Status
   */
  readonly status?: string;

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
  readonly cidrAuthorizationContext?: CidrAuthorizationContext;

  /**
   * @schema ProvisionByoipCidrRequest#PubliclyAdvertisable
   */
  readonly publiclyAdvertisable?: boolean;

  /**
   * @schema ProvisionByoipCidrRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ProvisionByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ProvisionByoipCidrRequest#PoolTagSpecifications
   */
  readonly poolTagSpecifications?: TagSpecification[];

}

/**
 * @schema ProvisionByoipCidrResult
 */
export interface ProvisionByoipCidrResult {
  /**
   * @schema ProvisionByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema PurchaseHostReservationRequest
 */
export interface PurchaseHostReservationRequest {
  /**
   * @schema PurchaseHostReservationRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema PurchaseHostReservationRequest#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema PurchaseHostReservationRequest#HostIdSet
   */
  readonly hostIdSet: string[];

  /**
   * @schema PurchaseHostReservationRequest#LimitPrice
   */
  readonly limitPrice?: string;

  /**
   * @schema PurchaseHostReservationRequest#OfferingId
   */
  readonly offeringId: string;

  /**
   * @schema PurchaseHostReservationRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema PurchaseHostReservationResult
 */
export interface PurchaseHostReservationResult {
  /**
   * @schema PurchaseHostReservationResult#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema PurchaseHostReservationResult#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema PurchaseHostReservationResult#Purchase
   */
  readonly purchase?: Purchase[];

  /**
   * @schema PurchaseHostReservationResult#TotalHourlyPrice
   */
  readonly totalHourlyPrice?: string;

  /**
   * @schema PurchaseHostReservationResult#TotalUpfrontPrice
   */
  readonly totalUpfrontPrice?: string;

}

/**
 * @schema PurchaseReservedInstancesOfferingRequest
 */
export interface PurchaseReservedInstancesOfferingRequest {
  /**
   * @schema PurchaseReservedInstancesOfferingRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema PurchaseReservedInstancesOfferingRequest#ReservedInstancesOfferingId
   */
  readonly reservedInstancesOfferingId: string;

  /**
   * @schema PurchaseReservedInstancesOfferingRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema PurchaseReservedInstancesOfferingRequest#LimitPrice
   */
  readonly limitPrice?: ReservedInstanceLimitPrice;

  /**
   * @schema PurchaseReservedInstancesOfferingRequest#PurchaseTime
   */
  readonly purchaseTime?: string;

}

/**
 * @schema PurchaseReservedInstancesOfferingResult
 */
export interface PurchaseReservedInstancesOfferingResult {
  /**
   * @schema PurchaseReservedInstancesOfferingResult#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema PurchaseScheduledInstancesRequest
 */
export interface PurchaseScheduledInstancesRequest {
  /**
   * @schema PurchaseScheduledInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema PurchaseScheduledInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema PurchaseScheduledInstancesRequest#PurchaseRequests
   */
  readonly purchaseRequests: PurchaseRequest[];

}

/**
 * @schema PurchaseScheduledInstancesResult
 */
export interface PurchaseScheduledInstancesResult {
  /**
   * @schema PurchaseScheduledInstancesResult#ScheduledInstanceSet
   */
  readonly scheduledInstanceSet?: ScheduledInstance[];

}

/**
 * @schema RebootInstancesRequest
 */
export interface RebootInstancesRequest {
  /**
   * @schema RebootInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema RebootInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RegisterImageRequest
 */
export interface RegisterImageRequest {
  /**
   * @schema RegisterImageRequest#ImageLocation
   */
  readonly imageLocation?: string;

  /**
   * @schema RegisterImageRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema RegisterImageRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema RegisterImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema RegisterImageRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RegisterImageRequest#EnaSupport
   */
  readonly enaSupport?: boolean;

  /**
   * @schema RegisterImageRequest#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema RegisterImageRequest#Name
   */
  readonly name: string;

  /**
   * @schema RegisterImageRequest#BillingProducts
   */
  readonly billingProducts?: string[];

  /**
   * @schema RegisterImageRequest#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema RegisterImageRequest#RootDeviceName
   */
  readonly rootDeviceName?: string;

  /**
   * @schema RegisterImageRequest#SriovNetSupport
   */
  readonly sriovNetSupport?: string;

  /**
   * @schema RegisterImageRequest#VirtualizationType
   */
  readonly virtualizationType?: string;

}

/**
 * @schema RegisterImageResult
 */
export interface RegisterImageResult {
  /**
   * @schema RegisterImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * @schema RegisterInstanceEventNotificationAttributesRequest
 */
export interface RegisterInstanceEventNotificationAttributesRequest {
  /**
   * @schema RegisterInstanceEventNotificationAttributesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RegisterInstanceEventNotificationAttributesRequest#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: RegisterInstanceTagAttributeRequest;

}

/**
 * @schema RegisterInstanceEventNotificationAttributesResult
 */
export interface RegisterInstanceEventNotificationAttributesResult {
  /**
   * @schema RegisterInstanceEventNotificationAttributesResult#InstanceTagAttribute
   */
  readonly instanceTagAttribute?: InstanceTagNotificationAttribute;

}

/**
 * @schema RegisterTransitGatewayMulticastGroupMembersRequest
 */
export interface RegisterTransitGatewayMulticastGroupMembersRequest {
  /**
   * @schema RegisterTransitGatewayMulticastGroupMembersRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema RegisterTransitGatewayMulticastGroupMembersRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema RegisterTransitGatewayMulticastGroupMembersRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema RegisterTransitGatewayMulticastGroupMembersRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RegisterTransitGatewayMulticastGroupMembersResult
 */
export interface RegisterTransitGatewayMulticastGroupMembersResult {
  /**
   * @schema RegisterTransitGatewayMulticastGroupMembersResult#RegisteredMulticastGroupMembers
   */
  readonly registeredMulticastGroupMembers?: TransitGatewayMulticastRegisteredGroupMembers;

}

/**
 * @schema RegisterTransitGatewayMulticastGroupSourcesRequest
 */
export interface RegisterTransitGatewayMulticastGroupSourcesRequest {
  /**
   * @schema RegisterTransitGatewayMulticastGroupSourcesRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema RegisterTransitGatewayMulticastGroupSourcesRequest#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema RegisterTransitGatewayMulticastGroupSourcesRequest#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema RegisterTransitGatewayMulticastGroupSourcesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RegisterTransitGatewayMulticastGroupSourcesResult
 */
export interface RegisterTransitGatewayMulticastGroupSourcesResult {
  /**
   * @schema RegisterTransitGatewayMulticastGroupSourcesResult#RegisteredMulticastGroupSources
   */
  readonly registeredMulticastGroupSources?: TransitGatewayMulticastRegisteredGroupSources;

}

/**
 * @schema RejectTransitGatewayPeeringAttachmentRequest
 */
export interface RejectTransitGatewayPeeringAttachmentRequest {
  /**
   * @schema RejectTransitGatewayPeeringAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema RejectTransitGatewayPeeringAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RejectTransitGatewayPeeringAttachmentResult
 */
export interface RejectTransitGatewayPeeringAttachmentResult {
  /**
   * @schema RejectTransitGatewayPeeringAttachmentResult#TransitGatewayPeeringAttachment
   */
  readonly transitGatewayPeeringAttachment?: TransitGatewayPeeringAttachment;

}

/**
 * @schema RejectTransitGatewayVpcAttachmentRequest
 */
export interface RejectTransitGatewayVpcAttachmentRequest {
  /**
   * @schema RejectTransitGatewayVpcAttachmentRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId: string;

  /**
   * @schema RejectTransitGatewayVpcAttachmentRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RejectTransitGatewayVpcAttachmentResult
 */
export interface RejectTransitGatewayVpcAttachmentResult {
  /**
   * @schema RejectTransitGatewayVpcAttachmentResult#TransitGatewayVpcAttachment
   */
  readonly transitGatewayVpcAttachment?: TransitGatewayVpcAttachment;

}

/**
 * @schema RejectVpcEndpointConnectionsRequest
 */
export interface RejectVpcEndpointConnectionsRequest {
  /**
   * @schema RejectVpcEndpointConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RejectVpcEndpointConnectionsRequest#ServiceId
   */
  readonly serviceId: string;

  /**
   * @schema RejectVpcEndpointConnectionsRequest#VpcEndpointIds
   */
  readonly vpcEndpointIds: string[];

}

/**
 * @schema RejectVpcEndpointConnectionsResult
 */
export interface RejectVpcEndpointConnectionsResult {
  /**
   * @schema RejectVpcEndpointConnectionsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema RejectVpcPeeringConnectionRequest
 */
export interface RejectVpcPeeringConnectionRequest {
  /**
   * @schema RejectVpcPeeringConnectionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RejectVpcPeeringConnectionRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId: string;

}

/**
 * @schema RejectVpcPeeringConnectionResult
 */
export interface RejectVpcPeeringConnectionResult {
  /**
   * @schema RejectVpcPeeringConnectionResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ReleaseAddressRequest
 */
export interface ReleaseAddressRequest {
  /**
   * @schema ReleaseAddressRequest#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema ReleaseAddressRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema ReleaseAddressRequest#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema ReleaseAddressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ReleaseHostsRequest
 */
export interface ReleaseHostsRequest {
  /**
   * @schema ReleaseHostsRequest#HostIds
   */
  readonly hostIds: string[];

}

/**
 * @schema ReleaseHostsResult
 */
export interface ReleaseHostsResult {
  /**
   * @schema ReleaseHostsResult#Successful
   */
  readonly successful?: string[];

  /**
   * @schema ReleaseHostsResult#Unsuccessful
   */
  readonly unsuccessful?: UnsuccessfulItem[];

}

/**
 * @schema ReplaceIamInstanceProfileAssociationRequest
 */
export interface ReplaceIamInstanceProfileAssociationRequest {
  /**
   * @schema ReplaceIamInstanceProfileAssociationRequest#IamInstanceProfile
   */
  readonly iamInstanceProfile: IamInstanceProfileSpecification;

  /**
   * @schema ReplaceIamInstanceProfileAssociationRequest#AssociationId
   */
  readonly associationId: string;

}

/**
 * @schema ReplaceIamInstanceProfileAssociationResult
 */
export interface ReplaceIamInstanceProfileAssociationResult {
  /**
   * @schema ReplaceIamInstanceProfileAssociationResult#IamInstanceProfileAssociation
   */
  readonly iamInstanceProfileAssociation?: IamInstanceProfileAssociation;

}

/**
 * @schema ReplaceNetworkAclAssociationRequest
 */
export interface ReplaceNetworkAclAssociationRequest {
  /**
   * @schema ReplaceNetworkAclAssociationRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema ReplaceNetworkAclAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ReplaceNetworkAclAssociationRequest#NetworkAclId
   */
  readonly networkAclId: string;

}

/**
 * @schema ReplaceNetworkAclAssociationResult
 */
export interface ReplaceNetworkAclAssociationResult {
  /**
   * @schema ReplaceNetworkAclAssociationResult#NewAssociationId
   */
  readonly newAssociationId?: string;

}

/**
 * @schema ReplaceNetworkAclEntryRequest
 */
export interface ReplaceNetworkAclEntryRequest {
  /**
   * @schema ReplaceNetworkAclEntryRequest#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema ReplaceNetworkAclEntryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ReplaceNetworkAclEntryRequest#Egress
   */
  readonly egress: boolean;

  /**
   * @schema ReplaceNetworkAclEntryRequest#IcmpTypeCode
   */
  readonly icmpTypeCode?: IcmpTypeCode;

  /**
   * @schema ReplaceNetworkAclEntryRequest#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema ReplaceNetworkAclEntryRequest#NetworkAclId
   */
  readonly networkAclId: string;

  /**
   * @schema ReplaceNetworkAclEntryRequest#PortRange
   */
  readonly portRange?: PortRange;

  /**
   * @schema ReplaceNetworkAclEntryRequest#Protocol
   */
  readonly protocol: string;

  /**
   * @schema ReplaceNetworkAclEntryRequest#RuleAction
   */
  readonly ruleAction: string;

  /**
   * @schema ReplaceNetworkAclEntryRequest#RuleNumber
   */
  readonly ruleNumber: number;

}

/**
 * @schema ReplaceRouteRequest
 */
export interface ReplaceRouteRequest {
  /**
   * @schema ReplaceRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema ReplaceRouteRequest#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema ReplaceRouteRequest#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema ReplaceRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ReplaceRouteRequest#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema ReplaceRouteRequest#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema ReplaceRouteRequest#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema ReplaceRouteRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ReplaceRouteRequest#LocalTarget
   */
  readonly localTarget?: boolean;

  /**
   * @schema ReplaceRouteRequest#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema ReplaceRouteRequest#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema ReplaceRouteRequest#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema ReplaceRouteRequest#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema ReplaceRouteRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema ReplaceRouteRequest#RouteTableId
   */
  readonly routeTableId: string;

  /**
   * @schema ReplaceRouteRequest#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema ReplaceRouteTableAssociationRequest
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * @schema ReplaceRouteTableAssociationRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema ReplaceRouteTableAssociationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ReplaceRouteTableAssociationRequest#RouteTableId
   */
  readonly routeTableId: string;

}

/**
 * @schema ReplaceRouteTableAssociationResult
 */
export interface ReplaceRouteTableAssociationResult {
  /**
   * @schema ReplaceRouteTableAssociationResult#NewAssociationId
   */
  readonly newAssociationId?: string;

  /**
   * @schema ReplaceRouteTableAssociationResult#AssociationState
   */
  readonly associationState?: RouteTableAssociationState;

}

/**
 * @schema ReplaceTransitGatewayRouteRequest
 */
export interface ReplaceTransitGatewayRouteRequest {
  /**
   * @schema ReplaceTransitGatewayRouteRequest#DestinationCidrBlock
   */
  readonly destinationCidrBlock: string;

  /**
   * @schema ReplaceTransitGatewayRouteRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema ReplaceTransitGatewayRouteRequest#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema ReplaceTransitGatewayRouteRequest#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema ReplaceTransitGatewayRouteRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ReplaceTransitGatewayRouteResult
 */
export interface ReplaceTransitGatewayRouteResult {
  /**
   * @schema ReplaceTransitGatewayRouteResult#Route
   */
  readonly route?: TransitGatewayRoute;

}

/**
 * @schema ReportInstanceStatusRequest
 */
export interface ReportInstanceStatusRequest {
  /**
   * @schema ReportInstanceStatusRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ReportInstanceStatusRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ReportInstanceStatusRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ReportInstanceStatusRequest#Instances
   */
  readonly instances: string[];

  /**
   * @schema ReportInstanceStatusRequest#ReasonCodes
   */
  readonly reasonCodes: string[];

  /**
   * @schema ReportInstanceStatusRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ReportInstanceStatusRequest#Status
   */
  readonly status: string;

}

/**
 * @schema RequestSpotFleetRequest
 */
export interface RequestSpotFleetRequest {
  /**
   * @schema RequestSpotFleetRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RequestSpotFleetRequest#SpotFleetRequestConfig
   */
  readonly spotFleetRequestConfig: SpotFleetRequestConfigData;

}

/**
 * @schema RequestSpotFleetResponse
 */
export interface RequestSpotFleetResponse {
  /**
   * @schema RequestSpotFleetResponse#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema RequestSpotInstancesRequest
 */
export interface RequestSpotInstancesRequest {
  /**
   * @schema RequestSpotInstancesRequest#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema RequestSpotInstancesRequest#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema RequestSpotInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema RequestSpotInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RequestSpotInstancesRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema RequestSpotInstancesRequest#LaunchGroup
   */
  readonly launchGroup?: string;

  /**
   * @schema RequestSpotInstancesRequest#LaunchSpecification
   */
  readonly launchSpecification?: RequestSpotLaunchSpecification;

  /**
   * @schema RequestSpotInstancesRequest#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema RequestSpotInstancesRequest#Type
   */
  readonly type?: string;

  /**
   * @schema RequestSpotInstancesRequest#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema RequestSpotInstancesRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema RequestSpotInstancesRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema RequestSpotInstancesRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema RequestSpotInstancesResult
 */
export interface RequestSpotInstancesResult {
  /**
   * @schema RequestSpotInstancesResult#SpotInstanceRequests
   */
  readonly spotInstanceRequests?: SpotInstanceRequest[];

}

/**
 * @schema ResetEbsDefaultKmsKeyIdRequest
 */
export interface ResetEbsDefaultKmsKeyIdRequest {
  /**
   * @schema ResetEbsDefaultKmsKeyIdRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ResetEbsDefaultKmsKeyIdResult
 */
export interface ResetEbsDefaultKmsKeyIdResult {
  /**
   * @schema ResetEbsDefaultKmsKeyIdResult#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ResetFpgaImageAttributeRequest
 */
export interface ResetFpgaImageAttributeRequest {
  /**
   * @schema ResetFpgaImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ResetFpgaImageAttributeRequest#FpgaImageId
   */
  readonly fpgaImageId: string;

  /**
   * @schema ResetFpgaImageAttributeRequest#Attribute
   */
  readonly attribute?: string;

}

/**
 * @schema ResetFpgaImageAttributeResult
 */
export interface ResetFpgaImageAttributeResult {
  /**
   * @schema ResetFpgaImageAttributeResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema ResetImageAttributeRequest
 */
export interface ResetImageAttributeRequest {
  /**
   * @schema ResetImageAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema ResetImageAttributeRequest#ImageId
   */
  readonly imageId: string;

  /**
   * @schema ResetImageAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema ResetInstanceAttributeRequest
 */
export interface ResetInstanceAttributeRequest {
  /**
   * @schema ResetInstanceAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema ResetInstanceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ResetInstanceAttributeRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema ResetNetworkInterfaceAttributeRequest
 */
export interface ResetNetworkInterfaceAttributeRequest {
  /**
   * @schema ResetNetworkInterfaceAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema ResetNetworkInterfaceAttributeRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema ResetNetworkInterfaceAttributeRequest#SourceDestCheck
   */
  readonly sourceDestCheck?: string;

}

/**
 * @schema ResetSnapshotAttributeRequest
 */
export interface ResetSnapshotAttributeRequest {
  /**
   * @schema ResetSnapshotAttributeRequest#Attribute
   */
  readonly attribute: string;

  /**
   * @schema ResetSnapshotAttributeRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema ResetSnapshotAttributeRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RestoreAddressToClassicRequest
 */
export interface RestoreAddressToClassicRequest {
  /**
   * @schema RestoreAddressToClassicRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RestoreAddressToClassicRequest#PublicIp
   */
  readonly publicIp: string;

}

/**
 * @schema RestoreAddressToClassicResult
 */
export interface RestoreAddressToClassicResult {
  /**
   * @schema RestoreAddressToClassicResult#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema RestoreAddressToClassicResult#Status
   */
  readonly status?: string;

}

/**
 * @schema RestoreManagedPrefixListVersionRequest
 */
export interface RestoreManagedPrefixListVersionRequest {
  /**
   * @schema RestoreManagedPrefixListVersionRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RestoreManagedPrefixListVersionRequest#PrefixListId
   */
  readonly prefixListId: string;

  /**
   * @schema RestoreManagedPrefixListVersionRequest#PreviousVersion
   */
  readonly previousVersion: number;

  /**
   * @schema RestoreManagedPrefixListVersionRequest#CurrentVersion
   */
  readonly currentVersion: number;

}

/**
 * @schema RestoreManagedPrefixListVersionResult
 */
export interface RestoreManagedPrefixListVersionResult {
  /**
   * @schema RestoreManagedPrefixListVersionResult#PrefixList
   */
  readonly prefixList?: ManagedPrefixList;

}

/**
 * @schema RevokeClientVpnIngressRequest
 */
export interface RevokeClientVpnIngressRequest {
  /**
   * @schema RevokeClientVpnIngressRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema RevokeClientVpnIngressRequest#TargetNetworkCidr
   */
  readonly targetNetworkCidr: string;

  /**
   * @schema RevokeClientVpnIngressRequest#AccessGroupId
   */
  readonly accessGroupId?: string;

  /**
   * @schema RevokeClientVpnIngressRequest#RevokeAllGroups
   */
  readonly revokeAllGroups?: boolean;

  /**
   * @schema RevokeClientVpnIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RevokeClientVpnIngressResult
 */
export interface RevokeClientVpnIngressResult {
  /**
   * @schema RevokeClientVpnIngressResult#Status
   */
  readonly status?: ClientVpnAuthorizationRuleStatus;

}

/**
 * @schema RevokeSecurityGroupEgressRequest
 */
export interface RevokeSecurityGroupEgressRequest {
  /**
   * @schema RevokeSecurityGroupEgressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RevokeSecurityGroupEgressRequest#GroupId
   */
  readonly groupId: string;

  /**
   * @schema RevokeSecurityGroupEgressRequest#IpPermissions
   */
  readonly ipPermissions?: IpPermission[];

  /**
   * @schema RevokeSecurityGroupEgressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema RevokeSecurityGroupEgressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema RevokeSecurityGroupEgressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema RevokeSecurityGroupEgressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema RevokeSecurityGroupEgressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema RevokeSecurityGroupEgressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

}

/**
 * @schema RevokeSecurityGroupEgressResult
 */
export interface RevokeSecurityGroupEgressResult {
  /**
   * @schema RevokeSecurityGroupEgressResult#Return
   */
  readonly return?: boolean;

  /**
   * @schema RevokeSecurityGroupEgressResult#UnknownIpPermissions
   */
  readonly unknownIpPermissions?: IpPermission[];

}

/**
 * @schema RevokeSecurityGroupIngressRequest
 */
export interface RevokeSecurityGroupIngressRequest {
  /**
   * @schema RevokeSecurityGroupIngressRequest#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema RevokeSecurityGroupIngressRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema RevokeSecurityGroupIngressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema RevokeSecurityGroupIngressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema RevokeSecurityGroupIngressRequest#IpPermissions
   */
  readonly ipPermissions?: IpPermission[];

  /**
   * @schema RevokeSecurityGroupIngressRequest#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema RevokeSecurityGroupIngressRequest#SourceSecurityGroupName
   */
  readonly sourceSecurityGroupName?: string;

  /**
   * @schema RevokeSecurityGroupIngressRequest#SourceSecurityGroupOwnerId
   */
  readonly sourceSecurityGroupOwnerId?: string;

  /**
   * @schema RevokeSecurityGroupIngressRequest#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema RevokeSecurityGroupIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema RevokeSecurityGroupIngressResult
 */
export interface RevokeSecurityGroupIngressResult {
  /**
   * @schema RevokeSecurityGroupIngressResult#Return
   */
  readonly return?: boolean;

  /**
   * @schema RevokeSecurityGroupIngressResult#UnknownIpPermissions
   */
  readonly unknownIpPermissions?: IpPermission[];

}

/**
 * @schema RunInstancesRequest
 */
export interface RunInstancesRequest {
  /**
   * @schema RunInstancesRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema RunInstancesRequest#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema RunInstancesRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema RunInstancesRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema RunInstancesRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @schema RunInstancesRequest#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema RunInstancesRequest#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema RunInstancesRequest#MaxCount
   */
  readonly maxCount: number;

  /**
   * @schema RunInstancesRequest#MinCount
   */
  readonly minCount: number;

  /**
   * @schema RunInstancesRequest#Monitoring
   */
  readonly monitoring?: RunInstancesMonitoringEnabled;

  /**
   * @schema RunInstancesRequest#Placement
   */
  readonly placement?: Placement;

  /**
   * @schema RunInstancesRequest#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema RunInstancesRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema RunInstancesRequest#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema RunInstancesRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema RunInstancesRequest#UserData
   */
  readonly userData?: string;

  /**
   * @schema RunInstancesRequest#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema RunInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema RunInstancesRequest#DisableApiTermination
   */
  readonly disableApiTermination?: boolean;

  /**
   * @schema RunInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RunInstancesRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema RunInstancesRequest#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * @schema RunInstancesRequest#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema RunInstancesRequest#NetworkInterfaces
   */
  readonly networkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @schema RunInstancesRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema RunInstancesRequest#ElasticGpuSpecification
   */
  readonly elasticGpuSpecification?: ElasticGpuSpecification[];

  /**
   * @schema RunInstancesRequest#ElasticInferenceAccelerators
   */
  readonly elasticInferenceAccelerators?: ElasticInferenceAccelerator[];

  /**
   * @schema RunInstancesRequest#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

  /**
   * @schema RunInstancesRequest#LaunchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema RunInstancesRequest#InstanceMarketOptions
   */
  readonly instanceMarketOptions?: InstanceMarketOptionsRequest;

  /**
   * @schema RunInstancesRequest#CreditSpecification
   */
  readonly creditSpecification?: CreditSpecificationRequest;

  /**
   * @schema RunInstancesRequest#CpuOptions
   */
  readonly cpuOptions?: CpuOptionsRequest;

  /**
   * @schema RunInstancesRequest#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: CapacityReservationSpecification;

  /**
   * @schema RunInstancesRequest#HibernationOptions
   */
  readonly hibernationOptions?: HibernationOptionsRequest;

  /**
   * @schema RunInstancesRequest#LicenseSpecifications
   */
  readonly licenseSpecifications?: LicenseConfigurationRequest[];

  /**
   * @schema RunInstancesRequest#MetadataOptions
   */
  readonly metadataOptions?: InstanceMetadataOptionsRequest;

  /**
   * @schema RunInstancesRequest#EnclaveOptions
   */
  readonly enclaveOptions?: EnclaveOptionsRequest;

}

/**
 * @schema Reservation
 */
export interface Reservation {
  /**
   * @schema Reservation#Groups
   */
  readonly groups?: GroupIdentifier[];

  /**
   * @schema Reservation#Instances
   */
  readonly instances?: Instance[];

  /**
   * @schema Reservation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Reservation#RequesterId
   */
  readonly requesterId?: string;

  /**
   * @schema Reservation#ReservationId
   */
  readonly reservationId?: string;

}

/**
 * @schema RunScheduledInstancesRequest
 */
export interface RunScheduledInstancesRequest {
  /**
   * @schema RunScheduledInstancesRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema RunScheduledInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema RunScheduledInstancesRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema RunScheduledInstancesRequest#LaunchSpecification
   */
  readonly launchSpecification: ScheduledInstancesLaunchSpecification;

  /**
   * @schema RunScheduledInstancesRequest#ScheduledInstanceId
   */
  readonly scheduledInstanceId: string;

}

/**
 * @schema RunScheduledInstancesResult
 */
export interface RunScheduledInstancesResult {
  /**
   * @schema RunScheduledInstancesResult#InstanceIdSet
   */
  readonly instanceIdSet?: string[];

}

/**
 * @schema SearchLocalGatewayRoutesRequest
 */
export interface SearchLocalGatewayRoutesRequest {
  /**
   * @schema SearchLocalGatewayRoutesRequest#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId: string;

  /**
   * @schema SearchLocalGatewayRoutesRequest#Filters
   */
  readonly filters: Filter[];

  /**
   * @schema SearchLocalGatewayRoutesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchLocalGatewayRoutesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchLocalGatewayRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema SearchLocalGatewayRoutesResult
 */
export interface SearchLocalGatewayRoutesResult {
  /**
   * @schema SearchLocalGatewayRoutesResult#Routes
   */
  readonly routes?: LocalGatewayRoute[];

  /**
   * @schema SearchLocalGatewayRoutesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchTransitGatewayMulticastGroupsRequest
 */
export interface SearchTransitGatewayMulticastGroupsRequest {
  /**
   * @schema SearchTransitGatewayMulticastGroupsRequest#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema SearchTransitGatewayMulticastGroupsRequest#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchTransitGatewayMulticastGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchTransitGatewayMulticastGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchTransitGatewayMulticastGroupsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema SearchTransitGatewayMulticastGroupsResult
 */
export interface SearchTransitGatewayMulticastGroupsResult {
  /**
   * @schema SearchTransitGatewayMulticastGroupsResult#MulticastGroups
   */
  readonly multicastGroups?: TransitGatewayMulticastGroup[];

  /**
   * @schema SearchTransitGatewayMulticastGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchTransitGatewayRoutesRequest
 */
export interface SearchTransitGatewayRoutesRequest {
  /**
   * @schema SearchTransitGatewayRoutesRequest#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId: string;

  /**
   * @schema SearchTransitGatewayRoutesRequest#Filters
   */
  readonly filters: Filter[];

  /**
   * @schema SearchTransitGatewayRoutesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchTransitGatewayRoutesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema SearchTransitGatewayRoutesResult
 */
export interface SearchTransitGatewayRoutesResult {
  /**
   * @schema SearchTransitGatewayRoutesResult#Routes
   */
  readonly routes?: TransitGatewayRoute[];

  /**
   * @schema SearchTransitGatewayRoutesResult#AdditionalRoutesAvailable
   */
  readonly additionalRoutesAvailable?: boolean;

}

/**
 * @schema SendDiagnosticInterruptRequest
 */
export interface SendDiagnosticInterruptRequest {
  /**
   * @schema SendDiagnosticInterruptRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SendDiagnosticInterruptRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema StartInstancesRequest
 */
export interface StartInstancesRequest {
  /**
   * @schema StartInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema StartInstancesRequest#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema StartInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema StartInstancesResult
 */
export interface StartInstancesResult {
  /**
   * @schema StartInstancesResult#StartingInstances
   */
  readonly startingInstances?: InstanceStateChange[];

}

/**
 * @schema StartVpcEndpointServicePrivateDnsVerificationRequest
 */
export interface StartVpcEndpointServicePrivateDnsVerificationRequest {
  /**
   * @schema StartVpcEndpointServicePrivateDnsVerificationRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema StartVpcEndpointServicePrivateDnsVerificationRequest#ServiceId
   */
  readonly serviceId: string;

}

/**
 * @schema StartVpcEndpointServicePrivateDnsVerificationResult
 */
export interface StartVpcEndpointServicePrivateDnsVerificationResult {
  /**
   * @schema StartVpcEndpointServicePrivateDnsVerificationResult#ReturnValue
   */
  readonly returnValue?: boolean;

}

/**
 * @schema StopInstancesRequest
 */
export interface StopInstancesRequest {
  /**
   * @schema StopInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema StopInstancesRequest#Hibernate
   */
  readonly hibernate?: boolean;

  /**
   * @schema StopInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema StopInstancesRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema StopInstancesResult
 */
export interface StopInstancesResult {
  /**
   * @schema StopInstancesResult#StoppingInstances
   */
  readonly stoppingInstances?: InstanceStateChange[];

}

/**
 * @schema TerminateClientVpnConnectionsRequest
 */
export interface TerminateClientVpnConnectionsRequest {
  /**
   * @schema TerminateClientVpnConnectionsRequest#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId: string;

  /**
   * @schema TerminateClientVpnConnectionsRequest#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema TerminateClientVpnConnectionsRequest#Username
   */
  readonly username?: string;

  /**
   * @schema TerminateClientVpnConnectionsRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema TerminateClientVpnConnectionsResult
 */
export interface TerminateClientVpnConnectionsResult {
  /**
   * @schema TerminateClientVpnConnectionsResult#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema TerminateClientVpnConnectionsResult#Username
   */
  readonly username?: string;

  /**
   * @schema TerminateClientVpnConnectionsResult#ConnectionStatuses
   */
  readonly connectionStatuses?: TerminateConnectionStatus[];

}

/**
 * @schema TerminateInstancesRequest
 */
export interface TerminateInstancesRequest {
  /**
   * @schema TerminateInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema TerminateInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema TerminateInstancesResult
 */
export interface TerminateInstancesResult {
  /**
   * @schema TerminateInstancesResult#TerminatingInstances
   */
  readonly terminatingInstances?: InstanceStateChange[];

}

/**
 * @schema UnassignIpv6AddressesRequest
 */
export interface UnassignIpv6AddressesRequest {
  /**
   * @schema UnassignIpv6AddressesRequest#Ipv6Addresses
   */
  readonly ipv6Addresses: string[];

  /**
   * @schema UnassignIpv6AddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

}

/**
 * @schema UnassignIpv6AddressesResult
 */
export interface UnassignIpv6AddressesResult {
  /**
   * @schema UnassignIpv6AddressesResult#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema UnassignIpv6AddressesResult#UnassignedIpv6Addresses
   */
  readonly unassignedIpv6Addresses?: string[];

}

/**
 * @schema UnassignPrivateIpAddressesRequest
 */
export interface UnassignPrivateIpAddressesRequest {
  /**
   * @schema UnassignPrivateIpAddressesRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId: string;

  /**
   * @schema UnassignPrivateIpAddressesRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses: string[];

}

/**
 * @schema UnmonitorInstancesRequest
 */
export interface UnmonitorInstancesRequest {
  /**
   * @schema UnmonitorInstancesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema UnmonitorInstancesRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema UnmonitorInstancesResult
 */
export interface UnmonitorInstancesResult {
  /**
   * @schema UnmonitorInstancesResult#InstanceMonitorings
   */
  readonly instanceMonitorings?: InstanceMonitoring[];

}

/**
 * @schema UpdateSecurityGroupRuleDescriptionsEgressRequest
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressRequest {
  /**
   * @schema UpdateSecurityGroupRuleDescriptionsEgressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema UpdateSecurityGroupRuleDescriptionsEgressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema UpdateSecurityGroupRuleDescriptionsEgressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UpdateSecurityGroupRuleDescriptionsEgressRequest#IpPermissions
   */
  readonly ipPermissions: IpPermission[];

}

/**
 * @schema UpdateSecurityGroupRuleDescriptionsEgressResult
 */
export interface UpdateSecurityGroupRuleDescriptionsEgressResult {
  /**
   * @schema UpdateSecurityGroupRuleDescriptionsEgressResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema UpdateSecurityGroupRuleDescriptionsIngressRequest
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressRequest {
  /**
   * @schema UpdateSecurityGroupRuleDescriptionsIngressRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema UpdateSecurityGroupRuleDescriptionsIngressRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema UpdateSecurityGroupRuleDescriptionsIngressRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UpdateSecurityGroupRuleDescriptionsIngressRequest#IpPermissions
   */
  readonly ipPermissions: IpPermission[];

}

/**
 * @schema UpdateSecurityGroupRuleDescriptionsIngressResult
 */
export interface UpdateSecurityGroupRuleDescriptionsIngressResult {
  /**
   * @schema UpdateSecurityGroupRuleDescriptionsIngressResult#Return
   */
  readonly return?: boolean;

}

/**
 * @schema WithdrawByoipCidrRequest
 */
export interface WithdrawByoipCidrRequest {
  /**
   * @schema WithdrawByoipCidrRequest#Cidr
   */
  readonly cidr: string;

  /**
   * @schema WithdrawByoipCidrRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema WithdrawByoipCidrResult
 */
export interface WithdrawByoipCidrResult {
  /**
   * @schema WithdrawByoipCidrResult#ByoipCidr
   */
  readonly byoipCidr?: ByoipCidr;

}

/**
 * @schema TargetConfigurationRequest
 */
export interface TargetConfigurationRequest {
  /**
   * @schema TargetConfigurationRequest#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema TargetConfigurationRequest#OfferingId
   */
  readonly offeringId: string;

}

/**
 * @schema TransitGatewayPeeringAttachment
 */
export interface TransitGatewayPeeringAttachment {
  /**
   * @schema TransitGatewayPeeringAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayPeeringAttachment#RequesterTgwInfo
   */
  readonly requesterTgwInfo?: PeeringTgwInfo;

  /**
   * @schema TransitGatewayPeeringAttachment#AccepterTgwInfo
   */
  readonly accepterTgwInfo?: PeeringTgwInfo;

  /**
   * @schema TransitGatewayPeeringAttachment#Status
   */
  readonly status?: PeeringAttachmentStatus;

  /**
   * @schema TransitGatewayPeeringAttachment#State
   */
  readonly state?: string;

  /**
   * @schema TransitGatewayPeeringAttachment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransitGatewayPeeringAttachment#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TransitGatewayVpcAttachment
 */
export interface TransitGatewayVpcAttachment {
  /**
   * @schema TransitGatewayVpcAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayVpcAttachment#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema TransitGatewayVpcAttachment#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema TransitGatewayVpcAttachment#VpcOwnerId
   */
  readonly vpcOwnerId?: string;

  /**
   * @schema TransitGatewayVpcAttachment#State
   */
  readonly state?: string;

  /**
   * @schema TransitGatewayVpcAttachment#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema TransitGatewayVpcAttachment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransitGatewayVpcAttachment#Options
   */
  readonly options?: TransitGatewayVpcAttachmentOptions;

  /**
   * @schema TransitGatewayVpcAttachment#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema UnsuccessfulItem
 */
export interface UnsuccessfulItem {
  /**
   * @schema UnsuccessfulItem#Error
   */
  readonly error?: UnsuccessfulItemError;

  /**
   * @schema UnsuccessfulItem#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * @schema VpcPeeringConnection
 */
export interface VpcPeeringConnection {
  /**
   * @schema VpcPeeringConnection#AccepterVpcInfo
   */
  readonly accepterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * @schema VpcPeeringConnection#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema VpcPeeringConnection#RequesterVpcInfo
   */
  readonly requesterVpcInfo?: VpcPeeringConnectionVpcInfo;

  /**
   * @schema VpcPeeringConnection#Status
   */
  readonly status?: VpcPeeringConnectionStateReason;

  /**
   * @schema VpcPeeringConnection#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema VpcPeeringConnection#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

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
   * @schema ByoipCidr#Description
   */
  readonly description?: string;

  /**
   * @schema ByoipCidr#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ByoipCidr#State
   */
  readonly state?: string;

}

/**
 * @schema TagSpecification
 */
export interface TagSpecification {
  /**
   * @schema TagSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TagSpecification#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AssignedPrivateIpAddress
 */
export interface AssignedPrivateIpAddress {
  /**
   * @schema AssignedPrivateIpAddress#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema AssociationStatus
 */
export interface AssociationStatus {
  /**
   * @schema AssociationStatus#Code
   */
  readonly code?: string;

  /**
   * @schema AssociationStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema IamInstanceProfileSpecification
 */
export interface IamInstanceProfileSpecification {
  /**
   * @schema IamInstanceProfileSpecification#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamInstanceProfileSpecification#Name
   */
  readonly name?: string;

}

/**
 * @schema IamInstanceProfileAssociation
 */
export interface IamInstanceProfileAssociation {
  /**
   * @schema IamInstanceProfileAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema IamInstanceProfileAssociation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema IamInstanceProfileAssociation#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfile;

  /**
   * @schema IamInstanceProfileAssociation#State
   */
  readonly state?: string;

  /**
   * @schema IamInstanceProfileAssociation#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema RouteTableAssociationState
 */
export interface RouteTableAssociationState {
  /**
   * @schema RouteTableAssociationState#State
   */
  readonly state?: string;

  /**
   * @schema RouteTableAssociationState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema SubnetIpv6CidrBlockAssociation
 */
export interface SubnetIpv6CidrBlockAssociation {
  /**
   * @schema SubnetIpv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema SubnetIpv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema SubnetIpv6CidrBlockAssociation#Ipv6CidrBlockState
   */
  readonly ipv6CidrBlockState?: SubnetCidrBlockState;

}

/**
 * @schema TransitGatewayMulticastDomainAssociations
 */
export interface TransitGatewayMulticastDomainAssociations {
  /**
   * @schema TransitGatewayMulticastDomainAssociations#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociations#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociations#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociations#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociations#Subnets
   */
  readonly subnets?: SubnetAssociation[];

}

/**
 * @schema TransitGatewayAssociation
 */
export interface TransitGatewayAssociation {
  /**
   * @schema TransitGatewayAssociation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema TransitGatewayAssociation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema VpcIpv6CidrBlockAssociation
 */
export interface VpcIpv6CidrBlockAssociation {
  /**
   * @schema VpcIpv6CidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema VpcIpv6CidrBlockAssociation#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema VpcIpv6CidrBlockAssociation#Ipv6CidrBlockState
   */
  readonly ipv6CidrBlockState?: VpcCidrBlockState;

  /**
   * @schema VpcIpv6CidrBlockAssociation#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema VpcIpv6CidrBlockAssociation#Ipv6Pool
   */
  readonly ipv6Pool?: string;

}

/**
 * @schema VpcCidrBlockAssociation
 */
export interface VpcCidrBlockAssociation {
  /**
   * @schema VpcCidrBlockAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema VpcCidrBlockAssociation#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema VpcCidrBlockAssociation#CidrBlockState
   */
  readonly cidrBlockState?: VpcCidrBlockState;

}

/**
 * @schema VpcAttachment
 */
export interface VpcAttachment {
  /**
   * @schema VpcAttachment#State
   */
  readonly state?: string;

  /**
   * @schema VpcAttachment#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema ClientVpnAuthorizationRuleStatus
 */
export interface ClientVpnAuthorizationRuleStatus {
  /**
   * @schema ClientVpnAuthorizationRuleStatus#Code
   */
  readonly code?: string;

  /**
   * @schema ClientVpnAuthorizationRuleStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema IpPermission
 */
export interface IpPermission {
  /**
   * @schema IpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema IpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema IpPermission#IpRanges
   */
  readonly ipRanges?: IpRange[];

  /**
   * @schema IpPermission#Ipv6Ranges
   */
  readonly ipv6Ranges?: Ipv6Range[];

  /**
   * @schema IpPermission#PrefixListIds
   */
  readonly prefixListIds?: PrefixListId[];

  /**
   * @schema IpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema IpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: UserIdGroupPair[];

}

/**
 * @schema Storage
 */
export interface Storage {
  /**
   * @schema Storage#S3
   */
  readonly s3?: S3Storage;

}

/**
 * @schema BundleTask
 */
export interface BundleTask {
  /**
   * @schema BundleTask#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema BundleTask#BundleTaskError
   */
  readonly bundleTaskError?: BundleTaskError;

  /**
   * @schema BundleTask#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema BundleTask#Progress
   */
  readonly progress?: string;

  /**
   * @schema BundleTask#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema BundleTask#State
   */
  readonly state?: string;

  /**
   * @schema BundleTask#Storage
   */
  readonly storage?: Storage;

  /**
   * @schema BundleTask#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema ReservedInstancesListing
 */
export interface ReservedInstancesListing {
  /**
   * @schema ReservedInstancesListing#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ReservedInstancesListing#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ReservedInstancesListing#InstanceCounts
   */
  readonly instanceCounts?: InstanceCount[];

  /**
   * @schema ReservedInstancesListing#PriceSchedules
   */
  readonly priceSchedules?: PriceSchedule[];

  /**
   * @schema ReservedInstancesListing#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema ReservedInstancesListing#ReservedInstancesListingId
   */
  readonly reservedInstancesListingId?: string;

  /**
   * @schema ReservedInstancesListing#Status
   */
  readonly status?: string;

  /**
   * @schema ReservedInstancesListing#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ReservedInstancesListing#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ReservedInstancesListing#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema CancelSpotFleetRequestsSuccessItem
 */
export interface CancelSpotFleetRequestsSuccessItem {
  /**
   * @schema CancelSpotFleetRequestsSuccessItem#CurrentSpotFleetRequestState
   */
  readonly currentSpotFleetRequestState?: string;

  /**
   * @schema CancelSpotFleetRequestsSuccessItem#PreviousSpotFleetRequestState
   */
  readonly previousSpotFleetRequestState?: string;

  /**
   * @schema CancelSpotFleetRequestsSuccessItem#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema CancelSpotFleetRequestsErrorItem
 */
export interface CancelSpotFleetRequestsErrorItem {
  /**
   * @schema CancelSpotFleetRequestsErrorItem#Error
   */
  readonly error?: CancelSpotFleetRequestsError;

  /**
   * @schema CancelSpotFleetRequestsErrorItem#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

}

/**
 * @schema CancelledSpotInstanceRequest
 */
export interface CancelledSpotInstanceRequest {
  /**
   * @schema CancelledSpotInstanceRequest#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema CancelledSpotInstanceRequest#State
   */
  readonly state?: string;

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
 * @schema CapacityReservation
 */
export interface CapacityReservation {
  /**
   * @schema CapacityReservation#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema CapacityReservation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema CapacityReservation#CapacityReservationArn
   */
  readonly capacityReservationArn?: string;

  /**
   * @schema CapacityReservation#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema CapacityReservation#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema CapacityReservation#InstancePlatform
   */
  readonly instancePlatform?: string;

  /**
   * @schema CapacityReservation#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CapacityReservation#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema CapacityReservation#TotalInstanceCount
   */
  readonly totalInstanceCount?: number;

  /**
   * @schema CapacityReservation#AvailableInstanceCount
   */
  readonly availableInstanceCount?: number;

  /**
   * @schema CapacityReservation#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema CapacityReservation#EphemeralStorage
   */
  readonly ephemeralStorage?: boolean;

  /**
   * @schema CapacityReservation#State
   */
  readonly state?: string;

  /**
   * @schema CapacityReservation#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema CapacityReservation#EndDateType
   */
  readonly endDateType?: string;

  /**
   * @schema CapacityReservation#InstanceMatchCriteria
   */
  readonly instanceMatchCriteria?: string;

  /**
   * @schema CapacityReservation#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema CapacityReservation#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CarrierGateway
 */
export interface CarrierGateway {
  /**
   * @schema CarrierGateway#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema CarrierGateway#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CarrierGateway#State
   */
  readonly state?: string;

  /**
   * @schema CarrierGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema CarrierGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ClientVpnAuthenticationRequest
 */
export interface ClientVpnAuthenticationRequest {
  /**
   * @schema ClientVpnAuthenticationRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ClientVpnAuthenticationRequest#ActiveDirectory
   */
  readonly activeDirectory?: DirectoryServiceAuthenticationRequest;

  /**
   * @schema ClientVpnAuthenticationRequest#MutualAuthentication
   */
  readonly mutualAuthentication?: CertificateAuthenticationRequest;

  /**
   * @schema ClientVpnAuthenticationRequest#FederatedAuthentication
   */
  readonly federatedAuthentication?: FederatedAuthenticationRequest;

}

/**
 * @schema ConnectionLogOptions
 */
export interface ConnectionLogOptions {
  /**
   * @schema ConnectionLogOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ConnectionLogOptions#CloudwatchLogGroup
   */
  readonly cloudwatchLogGroup?: string;

  /**
   * @schema ConnectionLogOptions#CloudwatchLogStream
   */
  readonly cloudwatchLogStream?: string;

}

/**
 * @schema ClientConnectOptions
 */
export interface ClientConnectOptions {
  /**
   * @schema ClientConnectOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ClientConnectOptions#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

}

/**
 * @schema ClientVpnEndpointStatus
 */
export interface ClientVpnEndpointStatus {
  /**
   * @schema ClientVpnEndpointStatus#Code
   */
  readonly code?: string;

  /**
   * @schema ClientVpnEndpointStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema ClientVpnRouteStatus
 */
export interface ClientVpnRouteStatus {
  /**
   * @schema ClientVpnRouteStatus#Code
   */
  readonly code?: string;

  /**
   * @schema ClientVpnRouteStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema CustomerGateway
 */
export interface CustomerGateway {
  /**
   * @schema CustomerGateway#BgpAsn
   */
  readonly bgpAsn?: string;

  /**
   * @schema CustomerGateway#CustomerGatewayId
   */
  readonly customerGatewayId?: string;

  /**
   * @schema CustomerGateway#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema CustomerGateway#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CustomerGateway#State
   */
  readonly state?: string;

  /**
   * @schema CustomerGateway#Type
   */
  readonly type?: string;

  /**
   * @schema CustomerGateway#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema CustomerGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Subnet
 */
export interface Subnet {
  /**
   * @schema Subnet#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Subnet#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Subnet#AvailableIpAddressCount
   */
  readonly availableIpAddressCount?: number;

  /**
   * @schema Subnet#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Subnet#DefaultForAz
   */
  readonly defaultForAz?: boolean;

  /**
   * @schema Subnet#MapPublicIpOnLaunch
   */
  readonly mapPublicIpOnLaunch?: boolean;

  /**
   * @schema Subnet#MapCustomerOwnedIpOnLaunch
   */
  readonly mapCustomerOwnedIpOnLaunch?: boolean;

  /**
   * @schema Subnet#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema Subnet#State
   */
  readonly state?: string;

  /**
   * @schema Subnet#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Subnet#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Subnet#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Subnet#AssignIpv6AddressOnCreation
   */
  readonly assignIpv6AddressOnCreation?: boolean;

  /**
   * @schema Subnet#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];

  /**
   * @schema Subnet#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Subnet#SubnetArn
   */
  readonly subnetArn?: string;

  /**
   * @schema Subnet#OutpostArn
   */
  readonly outpostArn?: string;

}

/**
 * @schema Vpc
 */
export interface Vpc {
  /**
   * @schema Vpc#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema Vpc#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema Vpc#State
   */
  readonly state?: string;

  /**
   * @schema Vpc#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Vpc#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Vpc#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema Vpc#Ipv6CidrBlockAssociationSet
   */
  readonly ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];

  /**
   * @schema Vpc#CidrBlockAssociationSet
   */
  readonly cidrBlockAssociationSet?: VpcCidrBlockAssociation[];

  /**
   * @schema Vpc#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema Vpc#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema NewDhcpConfiguration
 */
export interface NewDhcpConfiguration {
  /**
   * @schema NewDhcpConfiguration#Key
   */
  readonly key?: string;

  /**
   * @schema NewDhcpConfiguration#Values
   */
  readonly values?: string[];

}

/**
 * @schema DhcpOptions
 */
export interface DhcpOptions {
  /**
   * @schema DhcpOptions#DhcpConfigurations
   */
  readonly dhcpConfigurations?: DhcpConfiguration[];

  /**
   * @schema DhcpOptions#DhcpOptionsId
   */
  readonly dhcpOptionsId?: string;

  /**
   * @schema DhcpOptions#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema DhcpOptions#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema EgressOnlyInternetGateway
 */
export interface EgressOnlyInternetGateway {
  /**
   * @schema EgressOnlyInternetGateway#Attachments
   */
  readonly attachments?: InternetGatewayAttachment[];

  /**
   * @schema EgressOnlyInternetGateway#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema EgressOnlyInternetGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema SpotOptionsRequest
 */
export interface SpotOptionsRequest {
  /**
   * @schema SpotOptionsRequest#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema SpotOptionsRequest#MaintenanceStrategies
   */
  readonly maintenanceStrategies?: FleetSpotMaintenanceStrategiesRequest;

  /**
   * @schema SpotOptionsRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

  /**
   * @schema SpotOptionsRequest#InstancePoolsToUseCount
   */
  readonly instancePoolsToUseCount?: number;

  /**
   * @schema SpotOptionsRequest#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema SpotOptionsRequest#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema SpotOptionsRequest#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema SpotOptionsRequest#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema OnDemandOptionsRequest
 */
export interface OnDemandOptionsRequest {
  /**
   * @schema OnDemandOptionsRequest#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema OnDemandOptionsRequest#CapacityReservationOptions
   */
  readonly capacityReservationOptions?: CapacityReservationOptionsRequest;

  /**
   * @schema OnDemandOptionsRequest#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema OnDemandOptionsRequest#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema OnDemandOptionsRequest#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema OnDemandOptionsRequest#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema FleetLaunchTemplateConfigRequest
 */
export interface FleetLaunchTemplateConfigRequest {
  /**
   * @schema FleetLaunchTemplateConfigRequest#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest;

  /**
   * @schema FleetLaunchTemplateConfigRequest#Overrides
   */
  readonly overrides?: FleetLaunchTemplateOverridesRequest[];

}

/**
 * @schema TargetCapacitySpecificationRequest
 */
export interface TargetCapacitySpecificationRequest {
  /**
   * @schema TargetCapacitySpecificationRequest#TotalTargetCapacity
   */
  readonly totalTargetCapacity: number;

  /**
   * @schema TargetCapacitySpecificationRequest#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

  /**
   * @schema TargetCapacitySpecificationRequest#SpotTargetCapacity
   */
  readonly spotTargetCapacity?: number;

  /**
   * @schema TargetCapacitySpecificationRequest#DefaultTargetCapacityType
   */
  readonly defaultTargetCapacityType?: string;

}

/**
 * @schema CreateFleetError
 */
export interface CreateFleetError {
  /**
   * @schema CreateFleetError#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @schema CreateFleetError#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema CreateFleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CreateFleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema CreateFleetInstance
 */
export interface CreateFleetInstance {
  /**
   * @schema CreateFleetInstance#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @schema CreateFleetInstance#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema CreateFleetInstance#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema CreateFleetInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema CreateFleetInstance#Platform
   */
  readonly platform?: string;

}

/**
 * @schema StorageLocation
 */
export interface StorageLocation {
  /**
   * @schema StorageLocation#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema StorageLocation#Key
   */
  readonly key?: string;

}

/**
 * @schema BlockDeviceMapping
 */
export interface BlockDeviceMapping {
  /**
   * @schema BlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema BlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema BlockDeviceMapping#Ebs
   */
  readonly ebs?: EbsBlockDevice;

  /**
   * @schema BlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema ExportToS3TaskSpecification
 */
export interface ExportToS3TaskSpecification {
  /**
   * @schema ExportToS3TaskSpecification#ContainerFormat
   */
  readonly containerFormat?: string;

  /**
   * @schema ExportToS3TaskSpecification#DiskImageFormat
   */
  readonly diskImageFormat?: string;

  /**
   * @schema ExportToS3TaskSpecification#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ExportToS3TaskSpecification#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema ExportTask
 */
export interface ExportTask {
  /**
   * @schema ExportTask#Description
   */
  readonly description?: string;

  /**
   * @schema ExportTask#ExportTaskId
   */
  readonly exportTaskId?: string;

  /**
   * @schema ExportTask#ExportToS3Task
   */
  readonly exportToS3Task?: ExportToS3Task;

  /**
   * @schema ExportTask#InstanceExportDetails
   */
  readonly instanceExportDetails?: InstanceExportDetails;

  /**
   * @schema ExportTask#State
   */
  readonly state?: string;

  /**
   * @schema ExportTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ExportTask#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema InternetGateway
 */
export interface InternetGateway {
  /**
   * @schema InternetGateway#Attachments
   */
  readonly attachments?: InternetGatewayAttachment[];

  /**
   * @schema InternetGateway#InternetGatewayId
   */
  readonly internetGatewayId?: string;

  /**
   * @schema InternetGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema InternetGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RequestLaunchTemplateData
 */
export interface RequestLaunchTemplateData {
  /**
   * @schema RequestLaunchTemplateData#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema RequestLaunchTemplateData#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema RequestLaunchTemplateData#IamInstanceProfile
   */
  readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecificationRequest;

  /**
   * @schema RequestLaunchTemplateData#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappingRequest[];

  /**
   * @schema RequestLaunchTemplateData#NetworkInterfaces
   */
  readonly networkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecificationRequest[];

  /**
   * @schema RequestLaunchTemplateData#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema RequestLaunchTemplateData#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema RequestLaunchTemplateData#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema RequestLaunchTemplateData#Monitoring
   */
  readonly monitoring?: LaunchTemplatesMonitoringRequest;

  /**
   * @schema RequestLaunchTemplateData#Placement
   */
  readonly placement?: LaunchTemplatePlacementRequest;

  /**
   * @schema RequestLaunchTemplateData#RamDiskId
   */
  readonly ramDiskId?: string;

  /**
   * @schema RequestLaunchTemplateData#DisableApiTermination
   */
  readonly disableApiTermination?: boolean;

  /**
   * @schema RequestLaunchTemplateData#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema RequestLaunchTemplateData#UserData
   */
  readonly userData?: string;

  /**
   * @schema RequestLaunchTemplateData#TagSpecifications
   */
  readonly tagSpecifications?: LaunchTemplateTagSpecificationRequest[];

  /**
   * @schema RequestLaunchTemplateData#ElasticGpuSpecifications
   */
  readonly elasticGpuSpecifications?: ElasticGpuSpecification[];

  /**
   * @schema RequestLaunchTemplateData#ElasticInferenceAccelerators
   */
  readonly elasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[];

  /**
   * @schema RequestLaunchTemplateData#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema RequestLaunchTemplateData#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema RequestLaunchTemplateData#InstanceMarketOptions
   */
  readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptionsRequest;

  /**
   * @schema RequestLaunchTemplateData#CreditSpecification
   */
  readonly creditSpecification?: CreditSpecificationRequest;

  /**
   * @schema RequestLaunchTemplateData#CpuOptions
   */
  readonly cpuOptions?: LaunchTemplateCpuOptionsRequest;

  /**
   * @schema RequestLaunchTemplateData#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationRequest;

  /**
   * @schema RequestLaunchTemplateData#LicenseSpecifications
   */
  readonly licenseSpecifications?: LaunchTemplateLicenseConfigurationRequest[];

  /**
   * @schema RequestLaunchTemplateData#HibernationOptions
   */
  readonly hibernationOptions?: LaunchTemplateHibernationOptionsRequest;

  /**
   * @schema RequestLaunchTemplateData#MetadataOptions
   */
  readonly metadataOptions?: LaunchTemplateInstanceMetadataOptionsRequest;

  /**
   * @schema RequestLaunchTemplateData#EnclaveOptions
   */
  readonly enclaveOptions?: LaunchTemplateEnclaveOptionsRequest;

}

/**
 * @schema LaunchTemplate
 */
export interface LaunchTemplate {
  /**
   * @schema LaunchTemplate#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema LaunchTemplate#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema LaunchTemplate#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LaunchTemplate#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema LaunchTemplate#DefaultVersionNumber
   */
  readonly defaultVersionNumber?: number;

  /**
   * @schema LaunchTemplate#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

  /**
   * @schema LaunchTemplate#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ValidationWarning
 */
export interface ValidationWarning {
  /**
   * @schema ValidationWarning#Errors
   */
  readonly errors?: ValidationError[];

}

/**
 * @schema LaunchTemplateVersion
 */
export interface LaunchTemplateVersion {
  /**
   * @schema LaunchTemplateVersion#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema LaunchTemplateVersion#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema LaunchTemplateVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema LaunchTemplateVersion#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema LaunchTemplateVersion#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LaunchTemplateVersion#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema LaunchTemplateVersion#DefaultVersion
   */
  readonly defaultVersion?: boolean;

  /**
   * @schema LaunchTemplateVersion#LaunchTemplateData
   */
  readonly launchTemplateData?: ResponseLaunchTemplateData;

}

/**
 * @schema LocalGatewayRoute
 */
export interface LocalGatewayRoute {
  /**
   * @schema LocalGatewayRoute#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema LocalGatewayRoute#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId?: string;

  /**
   * @schema LocalGatewayRoute#Type
   */
  readonly type?: string;

  /**
   * @schema LocalGatewayRoute#State
   */
  readonly state?: string;

  /**
   * @schema LocalGatewayRoute#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema LocalGatewayRoute#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema LocalGatewayRoute#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema LocalGatewayRouteTableVpcAssociation
 */
export interface LocalGatewayRouteTableVpcAssociation {
  /**
   * @schema LocalGatewayRouteTableVpcAssociation#LocalGatewayRouteTableVpcAssociationId
   */
  readonly localGatewayRouteTableVpcAssociationId?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#State
   */
  readonly state?: string;

  /**
   * @schema LocalGatewayRouteTableVpcAssociation#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AddPrefixListEntry
 */
export interface AddPrefixListEntry {
  /**
   * @schema AddPrefixListEntry#Cidr
   */
  readonly cidr: string;

  /**
   * @schema AddPrefixListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema ManagedPrefixList
 */
export interface ManagedPrefixList {
  /**
   * @schema ManagedPrefixList#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema ManagedPrefixList#AddressFamily
   */
  readonly addressFamily?: string;

  /**
   * @schema ManagedPrefixList#State
   */
  readonly state?: string;

  /**
   * @schema ManagedPrefixList#StateMessage
   */
  readonly stateMessage?: string;

  /**
   * @schema ManagedPrefixList#PrefixListArn
   */
  readonly prefixListArn?: string;

  /**
   * @schema ManagedPrefixList#PrefixListName
   */
  readonly prefixListName?: string;

  /**
   * @schema ManagedPrefixList#MaxEntries
   */
  readonly maxEntries?: number;

  /**
   * @schema ManagedPrefixList#Version
   */
  readonly version?: number;

  /**
   * @schema ManagedPrefixList#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ManagedPrefixList#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema NatGateway
 */
export interface NatGateway {
  /**
   * @schema NatGateway#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema NatGateway#DeleteTime
   */
  readonly deleteTime?: string;

  /**
   * @schema NatGateway#FailureCode
   */
  readonly failureCode?: string;

  /**
   * @schema NatGateway#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema NatGateway#NatGatewayAddresses
   */
  readonly natGatewayAddresses?: NatGatewayAddress[];

  /**
   * @schema NatGateway#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema NatGateway#ProvisionedBandwidth
   */
  readonly provisionedBandwidth?: ProvisionedBandwidth;

  /**
   * @schema NatGateway#State
   */
  readonly state?: string;

  /**
   * @schema NatGateway#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema NatGateway#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NatGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema NetworkAcl
 */
export interface NetworkAcl {
  /**
   * @schema NetworkAcl#Associations
   */
  readonly associations?: NetworkAclAssociation[];

  /**
   * @schema NetworkAcl#Entries
   */
  readonly entries?: NetworkAclEntry[];

  /**
   * @schema NetworkAcl#IsDefault
   */
  readonly isDefault?: boolean;

  /**
   * @schema NetworkAcl#NetworkAclId
   */
  readonly networkAclId?: string;

  /**
   * @schema NetworkAcl#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema NetworkAcl#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema NetworkAcl#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema IcmpTypeCode
 */
export interface IcmpTypeCode {
  /**
   * @schema IcmpTypeCode#Code
   */
  readonly code?: number;

  /**
   * @schema IcmpTypeCode#Type
   */
  readonly type?: number;

}

/**
 * @schema PortRange
 */
export interface PortRange {
  /**
   * @schema PortRange#From
   */
  readonly from?: number;

  /**
   * @schema PortRange#To
   */
  readonly to?: number;

}

/**
 * @schema InstanceIpv6Address
 */
export interface InstanceIpv6Address {
  /**
   * @schema InstanceIpv6Address#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema PrivateIpAddressSpecification
 */
export interface PrivateIpAddressSpecification {
  /**
   * @schema PrivateIpAddressSpecification#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema PrivateIpAddressSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema NetworkInterface
 */
export interface NetworkInterface {
  /**
   * @schema NetworkInterface#Association
   */
  readonly association?: NetworkInterfaceAssociation;

  /**
   * @schema NetworkInterface#Attachment
   */
  readonly attachment?: NetworkInterfaceAttachment;

  /**
   * @schema NetworkInterface#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema NetworkInterface#Description
   */
  readonly description?: string;

  /**
   * @schema NetworkInterface#Groups
   */
  readonly groups?: GroupIdentifier[];

  /**
   * @schema NetworkInterface#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema NetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: NetworkInterfaceIpv6Address[];

  /**
   * @schema NetworkInterface#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema NetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema NetworkInterface#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema NetworkInterface#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema NetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema NetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema NetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: NetworkInterfacePrivateIpAddress[];

  /**
   * @schema NetworkInterface#RequesterId
   */
  readonly requesterId?: string;

  /**
   * @schema NetworkInterface#RequesterManaged
   */
  readonly requesterManaged?: boolean;

  /**
   * @schema NetworkInterface#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema NetworkInterface#Status
   */
  readonly status?: string;

  /**
   * @schema NetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema NetworkInterface#TagSet
   */
  readonly tagSet?: Tag[];

  /**
   * @schema NetworkInterface#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema NetworkInterfacePermission
 */
export interface NetworkInterfacePermission {
  /**
   * @schema NetworkInterfacePermission#NetworkInterfacePermissionId
   */
  readonly networkInterfacePermissionId?: string;

  /**
   * @schema NetworkInterfacePermission#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema NetworkInterfacePermission#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema NetworkInterfacePermission#AwsService
   */
  readonly awsService?: string;

  /**
   * @schema NetworkInterfacePermission#Permission
   */
  readonly permission?: string;

  /**
   * @schema NetworkInterfacePermission#PermissionState
   */
  readonly permissionState?: NetworkInterfacePermissionState;

}

/**
 * @schema PlacementGroup
 */
export interface PlacementGroup {
  /**
   * @schema PlacementGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema PlacementGroup#State
   */
  readonly state?: string;

  /**
   * @schema PlacementGroup#Strategy
   */
  readonly strategy?: string;

  /**
   * @schema PlacementGroup#PartitionCount
   */
  readonly partitionCount?: number;

  /**
   * @schema PlacementGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema PlacementGroup#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PriceScheduleSpecification
 */
export interface PriceScheduleSpecification {
  /**
   * @schema PriceScheduleSpecification#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema PriceScheduleSpecification#Price
   */
  readonly price?: number;

  /**
   * @schema PriceScheduleSpecification#Term
   */
  readonly term?: number;

}

/**
 * @schema RouteTable
 */
export interface RouteTable {
  /**
   * @schema RouteTable#Associations
   */
  readonly associations?: RouteTableAssociation[];

  /**
   * @schema RouteTable#PropagatingVgws
   */
  readonly propagatingVgws?: PropagatingVgw[];

  /**
   * @schema RouteTable#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema RouteTable#Routes
   */
  readonly routes?: Route[];

  /**
   * @schema RouteTable#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema RouteTable#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema RouteTable#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema InstanceSpecification
 */
export interface InstanceSpecification {
  /**
   * @schema InstanceSpecification#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceSpecification#ExcludeBootVolume
   */
  readonly excludeBootVolume?: boolean;

}

/**
 * @schema SnapshotInfo
 */
export interface SnapshotInfo {
  /**
   * @schema SnapshotInfo#Description
   */
  readonly description?: string;

  /**
   * @schema SnapshotInfo#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema SnapshotInfo#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SnapshotInfo#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema SnapshotInfo#State
   */
  readonly state?: string;

  /**
   * @schema SnapshotInfo#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema SnapshotInfo#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SnapshotInfo#Progress
   */
  readonly progress?: string;

  /**
   * @schema SnapshotInfo#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SnapshotInfo#SnapshotId
   */
  readonly snapshotId?: string;

}

/**
 * @schema SpotDatafeedSubscription
 */
export interface SpotDatafeedSubscription {
  /**
   * @schema SpotDatafeedSubscription#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema SpotDatafeedSubscription#Fault
   */
  readonly fault?: SpotInstanceStateFault;

  /**
   * @schema SpotDatafeedSubscription#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SpotDatafeedSubscription#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema SpotDatafeedSubscription#State
   */
  readonly state?: string;

}

/**
 * @schema TrafficMirrorFilter
 */
export interface TrafficMirrorFilter {
  /**
   * @schema TrafficMirrorFilter#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema TrafficMirrorFilter#IngressFilterRules
   */
  readonly ingressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * @schema TrafficMirrorFilter#EgressFilterRules
   */
  readonly egressFilterRules?: TrafficMirrorFilterRule[];

  /**
   * @schema TrafficMirrorFilter#NetworkServices
   */
  readonly networkServices?: string[];

  /**
   * @schema TrafficMirrorFilter#Description
   */
  readonly description?: string;

  /**
   * @schema TrafficMirrorFilter#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TrafficMirrorPortRangeRequest
 */
export interface TrafficMirrorPortRangeRequest {
  /**
   * @schema TrafficMirrorPortRangeRequest#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema TrafficMirrorPortRangeRequest#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema TrafficMirrorFilterRule
 */
export interface TrafficMirrorFilterRule {
  /**
   * @schema TrafficMirrorFilterRule#TrafficMirrorFilterRuleId
   */
  readonly trafficMirrorFilterRuleId?: string;

  /**
   * @schema TrafficMirrorFilterRule#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema TrafficMirrorFilterRule#TrafficDirection
   */
  readonly trafficDirection?: string;

  /**
   * @schema TrafficMirrorFilterRule#RuleNumber
   */
  readonly ruleNumber?: number;

  /**
   * @schema TrafficMirrorFilterRule#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema TrafficMirrorFilterRule#Protocol
   */
  readonly protocol?: number;

  /**
   * @schema TrafficMirrorFilterRule#DestinationPortRange
   */
  readonly destinationPortRange?: TrafficMirrorPortRange;

  /**
   * @schema TrafficMirrorFilterRule#SourcePortRange
   */
  readonly sourcePortRange?: TrafficMirrorPortRange;

  /**
   * @schema TrafficMirrorFilterRule#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema TrafficMirrorFilterRule#SourceCidrBlock
   */
  readonly sourceCidrBlock?: string;

  /**
   * @schema TrafficMirrorFilterRule#Description
   */
  readonly description?: string;

}

/**
 * @schema TrafficMirrorSession
 */
export interface TrafficMirrorSession {
  /**
   * @schema TrafficMirrorSession#TrafficMirrorSessionId
   */
  readonly trafficMirrorSessionId?: string;

  /**
   * @schema TrafficMirrorSession#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

  /**
   * @schema TrafficMirrorSession#TrafficMirrorFilterId
   */
  readonly trafficMirrorFilterId?: string;

  /**
   * @schema TrafficMirrorSession#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema TrafficMirrorSession#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema TrafficMirrorSession#PacketLength
   */
  readonly packetLength?: number;

  /**
   * @schema TrafficMirrorSession#SessionNumber
   */
  readonly sessionNumber?: number;

  /**
   * @schema TrafficMirrorSession#VirtualNetworkId
   */
  readonly virtualNetworkId?: number;

  /**
   * @schema TrafficMirrorSession#Description
   */
  readonly description?: string;

  /**
   * @schema TrafficMirrorSession#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TrafficMirrorTarget
 */
export interface TrafficMirrorTarget {
  /**
   * @schema TrafficMirrorTarget#TrafficMirrorTargetId
   */
  readonly trafficMirrorTargetId?: string;

  /**
   * @schema TrafficMirrorTarget#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema TrafficMirrorTarget#NetworkLoadBalancerArn
   */
  readonly networkLoadBalancerArn?: string;

  /**
   * @schema TrafficMirrorTarget#Type
   */
  readonly type?: string;

  /**
   * @schema TrafficMirrorTarget#Description
   */
  readonly description?: string;

  /**
   * @schema TrafficMirrorTarget#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema TrafficMirrorTarget#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TransitGatewayRequestOptions
 */
export interface TransitGatewayRequestOptions {
  /**
   * @schema TransitGatewayRequestOptions#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema TransitGatewayRequestOptions#AutoAcceptSharedAttachments
   */
  readonly autoAcceptSharedAttachments?: string;

  /**
   * @schema TransitGatewayRequestOptions#DefaultRouteTableAssociation
   */
  readonly defaultRouteTableAssociation?: string;

  /**
   * @schema TransitGatewayRequestOptions#DefaultRouteTablePropagation
   */
  readonly defaultRouteTablePropagation?: string;

  /**
   * @schema TransitGatewayRequestOptions#VpnEcmpSupport
   */
  readonly vpnEcmpSupport?: string;

  /**
   * @schema TransitGatewayRequestOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema TransitGatewayRequestOptions#MulticastSupport
   */
  readonly multicastSupport?: string;

}

/**
 * @schema TransitGateway
 */
export interface TransitGateway {
  /**
   * @schema TransitGateway#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema TransitGateway#TransitGatewayArn
   */
  readonly transitGatewayArn?: string;

  /**
   * @schema TransitGateway#State
   */
  readonly state?: string;

  /**
   * @schema TransitGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema TransitGateway#Description
   */
  readonly description?: string;

  /**
   * @schema TransitGateway#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransitGateway#Options
   */
  readonly options?: TransitGatewayOptions;

  /**
   * @schema TransitGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TransitGatewayMulticastDomain
 */
export interface TransitGatewayMulticastDomain {
  /**
   * @schema TransitGatewayMulticastDomain#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema TransitGatewayMulticastDomain#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema TransitGatewayMulticastDomain#State
   */
  readonly state?: string;

  /**
   * @schema TransitGatewayMulticastDomain#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransitGatewayMulticastDomain#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TransitGatewayPrefixListReference
 */
export interface TransitGatewayPrefixListReference {
  /**
   * @schema TransitGatewayPrefixListReference#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema TransitGatewayPrefixListReference#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema TransitGatewayPrefixListReference#PrefixListOwnerId
   */
  readonly prefixListOwnerId?: string;

  /**
   * @schema TransitGatewayPrefixListReference#State
   */
  readonly state?: string;

  /**
   * @schema TransitGatewayPrefixListReference#Blackhole
   */
  readonly blackhole?: boolean;

  /**
   * @schema TransitGatewayPrefixListReference#TransitGatewayAttachment
   */
  readonly transitGatewayAttachment?: TransitGatewayPrefixListAttachment;

}

/**
 * @schema TransitGatewayRoute
 */
export interface TransitGatewayRoute {
  /**
   * @schema TransitGatewayRoute#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema TransitGatewayRoute#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema TransitGatewayRoute#TransitGatewayAttachments
   */
  readonly transitGatewayAttachments?: TransitGatewayRouteAttachment[];

  /**
   * @schema TransitGatewayRoute#Type
   */
  readonly type?: string;

  /**
   * @schema TransitGatewayRoute#State
   */
  readonly state?: string;

}

/**
 * @schema TransitGatewayRouteTable
 */
export interface TransitGatewayRouteTable {
  /**
   * @schema TransitGatewayRouteTable#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema TransitGatewayRouteTable#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema TransitGatewayRouteTable#State
   */
  readonly state?: string;

  /**
   * @schema TransitGatewayRouteTable#DefaultAssociationRouteTable
   */
  readonly defaultAssociationRouteTable?: boolean;

  /**
   * @schema TransitGatewayRouteTable#DefaultPropagationRouteTable
   */
  readonly defaultPropagationRouteTable?: boolean;

  /**
   * @schema TransitGatewayRouteTable#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransitGatewayRouteTable#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTransitGatewayVpcAttachmentRequestOptions
 */
export interface CreateTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @schema CreateTransitGatewayVpcAttachmentRequestOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequestOptions#Ipv6Support
   */
  readonly ipv6Support?: string;

  /**
   * @schema CreateTransitGatewayVpcAttachmentRequestOptions#ApplianceModeSupport
   */
  readonly applianceModeSupport?: string;

}

/**
 * @schema VpcEndpoint
 */
export interface VpcEndpoint {
  /**
   * @schema VpcEndpoint#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema VpcEndpoint#VpcEndpointType
   */
  readonly vpcEndpointType?: string;

  /**
   * @schema VpcEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcEndpoint#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema VpcEndpoint#State
   */
  readonly state?: string;

  /**
   * @schema VpcEndpoint#PolicyDocument
   */
  readonly policyDocument?: string;

  /**
   * @schema VpcEndpoint#RouteTableIds
   */
  readonly routeTableIds?: string[];

  /**
   * @schema VpcEndpoint#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcEndpoint#Groups
   */
  readonly groups?: SecurityGroupIdentifier[];

  /**
   * @schema VpcEndpoint#PrivateDnsEnabled
   */
  readonly privateDnsEnabled?: boolean;

  /**
   * @schema VpcEndpoint#RequesterManaged
   */
  readonly requesterManaged?: boolean;

  /**
   * @schema VpcEndpoint#NetworkInterfaceIds
   */
  readonly networkInterfaceIds?: string[];

  /**
   * @schema VpcEndpoint#DnsEntries
   */
  readonly dnsEntries?: DnsEntry[];

  /**
   * @schema VpcEndpoint#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema VpcEndpoint#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema VpcEndpoint#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema VpcEndpoint#LastError
   */
  readonly lastError?: LastError;

}

/**
 * @schema ConnectionNotification
 */
export interface ConnectionNotification {
  /**
   * @schema ConnectionNotification#ConnectionNotificationId
   */
  readonly connectionNotificationId?: string;

  /**
   * @schema ConnectionNotification#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ConnectionNotification#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema ConnectionNotification#ConnectionNotificationType
   */
  readonly connectionNotificationType?: string;

  /**
   * @schema ConnectionNotification#ConnectionNotificationArn
   */
  readonly connectionNotificationArn?: string;

  /**
   * @schema ConnectionNotification#ConnectionEvents
   */
  readonly connectionEvents?: string[];

  /**
   * @schema ConnectionNotification#ConnectionNotificationState
   */
  readonly connectionNotificationState?: string;

}

/**
 * @schema ServiceConfiguration
 */
export interface ServiceConfiguration {
  /**
   * @schema ServiceConfiguration#ServiceType
   */
  readonly serviceType?: ServiceTypeDetail[];

  /**
   * @schema ServiceConfiguration#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ServiceConfiguration#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceConfiguration#ServiceState
   */
  readonly serviceState?: string;

  /**
   * @schema ServiceConfiguration#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema ServiceConfiguration#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema ServiceConfiguration#ManagesVpcEndpoints
   */
  readonly managesVpcEndpoints?: boolean;

  /**
   * @schema ServiceConfiguration#NetworkLoadBalancerArns
   */
  readonly networkLoadBalancerArns?: string[];

  /**
   * @schema ServiceConfiguration#GatewayLoadBalancerArns
   */
  readonly gatewayLoadBalancerArns?: string[];

  /**
   * @schema ServiceConfiguration#BaseEndpointDnsNames
   */
  readonly baseEndpointDnsNames?: string[];

  /**
   * @schema ServiceConfiguration#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema ServiceConfiguration#PrivateDnsNameConfiguration
   */
  readonly privateDnsNameConfiguration?: PrivateDnsNameConfiguration;

  /**
   * @schema ServiceConfiguration#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema VpnConnectionOptionsSpecification
 */
export interface VpnConnectionOptionsSpecification {
  /**
   * @schema VpnConnectionOptionsSpecification#EnableAcceleration
   */
  readonly enableAcceleration?: boolean;

  /**
   * @schema VpnConnectionOptionsSpecification#StaticRoutesOnly
   */
  readonly staticRoutesOnly?: boolean;

  /**
   * @schema VpnConnectionOptionsSpecification#TunnelInsideIpVersion
   */
  readonly tunnelInsideIpVersion?: string;

  /**
   * @schema VpnConnectionOptionsSpecification#TunnelOptions
   */
  readonly tunnelOptions?: VpnTunnelOptionsSpecification[];

  /**
   * @schema VpnConnectionOptionsSpecification#LocalIpv4NetworkCidr
   */
  readonly localIpv4NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptionsSpecification#RemoteIpv4NetworkCidr
   */
  readonly remoteIpv4NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptionsSpecification#LocalIpv6NetworkCidr
   */
  readonly localIpv6NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptionsSpecification#RemoteIpv6NetworkCidr
   */
  readonly remoteIpv6NetworkCidr?: string;

}

/**
 * @schema VpnConnection
 */
export interface VpnConnection {
  /**
   * @schema VpnConnection#CustomerGatewayConfiguration
   */
  readonly customerGatewayConfiguration?: string;

  /**
   * @schema VpnConnection#CustomerGatewayId
   */
  readonly customerGatewayId?: string;

  /**
   * @schema VpnConnection#Category
   */
  readonly category?: string;

  /**
   * @schema VpnConnection#State
   */
  readonly state?: string;

  /**
   * @schema VpnConnection#Type
   */
  readonly type?: string;

  /**
   * @schema VpnConnection#VpnConnectionId
   */
  readonly vpnConnectionId?: string;

  /**
   * @schema VpnConnection#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema VpnConnection#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema VpnConnection#Options
   */
  readonly options?: VpnConnectionOptions;

  /**
   * @schema VpnConnection#Routes
   */
  readonly routes?: VpnStaticRoute[];

  /**
   * @schema VpnConnection#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema VpnConnection#VgwTelemetry
   */
  readonly vgwTelemetry?: VgwTelemetry[];

}

/**
 * @schema VpnGateway
 */
export interface VpnGateway {
  /**
   * @schema VpnGateway#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema VpnGateway#State
   */
  readonly state?: string;

  /**
   * @schema VpnGateway#Type
   */
  readonly type?: string;

  /**
   * @schema VpnGateway#VpcAttachments
   */
  readonly vpcAttachments?: VpcAttachment[];

  /**
   * @schema VpnGateway#VpnGatewayId
   */
  readonly vpnGatewayId?: string;

  /**
   * @schema VpnGateway#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema VpnGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DeleteFleetSuccessItem
 */
export interface DeleteFleetSuccessItem {
  /**
   * @schema DeleteFleetSuccessItem#CurrentFleetState
   */
  readonly currentFleetState?: string;

  /**
   * @schema DeleteFleetSuccessItem#PreviousFleetState
   */
  readonly previousFleetState?: string;

  /**
   * @schema DeleteFleetSuccessItem#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema DeleteFleetErrorItem
 */
export interface DeleteFleetErrorItem {
  /**
   * @schema DeleteFleetErrorItem#Error
   */
  readonly error?: DeleteFleetError;

  /**
   * @schema DeleteFleetErrorItem#FleetId
   */
  readonly fleetId?: string;

}

/**
 * @schema DeleteLaunchTemplateVersionsResponseSuccessItem
 */
export interface DeleteLaunchTemplateVersionsResponseSuccessItem {
  /**
   * @schema DeleteLaunchTemplateVersionsResponseSuccessItem#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema DeleteLaunchTemplateVersionsResponseSuccessItem#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema DeleteLaunchTemplateVersionsResponseSuccessItem#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema DeleteLaunchTemplateVersionsResponseErrorItem
 */
export interface DeleteLaunchTemplateVersionsResponseErrorItem {
  /**
   * @schema DeleteLaunchTemplateVersionsResponseErrorItem#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema DeleteLaunchTemplateVersionsResponseErrorItem#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema DeleteLaunchTemplateVersionsResponseErrorItem#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema DeleteLaunchTemplateVersionsResponseErrorItem#ResponseError
   */
  readonly responseError?: ResponseError;

}

/**
 * @schema SuccessfulQueuedPurchaseDeletion
 */
export interface SuccessfulQueuedPurchaseDeletion {
  /**
   * @schema SuccessfulQueuedPurchaseDeletion#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema FailedQueuedPurchaseDeletion
 */
export interface FailedQueuedPurchaseDeletion {
  /**
   * @schema FailedQueuedPurchaseDeletion#Error
   */
  readonly error?: DeleteQueuedReservedInstancesError;

  /**
   * @schema FailedQueuedPurchaseDeletion#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema DeregisterInstanceTagAttributeRequest
 */
export interface DeregisterInstanceTagAttributeRequest {
  /**
   * @schema DeregisterInstanceTagAttributeRequest#IncludeAllTagsOfInstance
   */
  readonly includeAllTagsOfInstance?: boolean;

  /**
   * @schema DeregisterInstanceTagAttributeRequest#InstanceTagKeys
   */
  readonly instanceTagKeys?: string[];

}

/**
 * @schema InstanceTagNotificationAttribute
 */
export interface InstanceTagNotificationAttribute {
  /**
   * @schema InstanceTagNotificationAttribute#InstanceTagKeys
   */
  readonly instanceTagKeys?: string[];

  /**
   * @schema InstanceTagNotificationAttribute#IncludeAllTagsOfInstance
   */
  readonly includeAllTagsOfInstance?: boolean;

}

/**
 * @schema TransitGatewayMulticastDeregisteredGroupMembers
 */
export interface TransitGatewayMulticastDeregisteredGroupMembers {
  /**
   * @schema TransitGatewayMulticastDeregisteredGroupMembers#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema TransitGatewayMulticastDeregisteredGroupMembers#DeregisteredNetworkInterfaceIds
   */
  readonly deregisteredNetworkInterfaceIds?: string[];

  /**
   * @schema TransitGatewayMulticastDeregisteredGroupMembers#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema TransitGatewayMulticastDeregisteredGroupSources
 */
export interface TransitGatewayMulticastDeregisteredGroupSources {
  /**
   * @schema TransitGatewayMulticastDeregisteredGroupSources#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema TransitGatewayMulticastDeregisteredGroupSources#DeregisteredNetworkInterfaceIds
   */
  readonly deregisteredNetworkInterfaceIds?: string[];

  /**
   * @schema TransitGatewayMulticastDeregisteredGroupSources#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema AccountAttribute
 */
export interface AccountAttribute {
  /**
   * @schema AccountAttribute#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema AccountAttribute#AttributeValues
   */
  readonly attributeValues?: AccountAttributeValue[];

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name?: string;

  /**
   * @schema Filter#Values
   */
  readonly values?: string[];

}

/**
 * @schema Address
 */
export interface Address {
  /**
   * @schema Address#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Address#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Address#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema Address#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Address#Domain
   */
  readonly domain?: string;

  /**
   * @schema Address#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Address#NetworkInterfaceOwnerId
   */
  readonly networkInterfaceOwnerId?: string;

  /**
   * @schema Address#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Address#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Address#PublicIpv4Pool
   */
  readonly publicIpv4Pool?: string;

  /**
   * @schema Address#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema Address#CustomerOwnedIp
   */
  readonly customerOwnedIp?: string;

  /**
   * @schema Address#CustomerOwnedIpv4Pool
   */
  readonly customerOwnedIpv4Pool?: string;

  /**
   * @schema Address#CarrierIp
   */
  readonly carrierIp?: string;

}

/**
 * @schema IdFormat
 */
export interface IdFormat {
  /**
   * @schema IdFormat#Deadline
   */
  readonly deadline?: string;

  /**
   * @schema IdFormat#Resource
   */
  readonly resource?: string;

  /**
   * @schema IdFormat#UseLongIds
   */
  readonly useLongIds?: boolean;

}

/**
 * @schema AvailabilityZone
 */
export interface AvailabilityZone {
  /**
   * @schema AvailabilityZone#State
   */
  readonly state?: string;

  /**
   * @schema AvailabilityZone#OptInStatus
   */
  readonly optInStatus?: string;

  /**
   * @schema AvailabilityZone#Messages
   */
  readonly messages?: AvailabilityZoneMessage[];

  /**
   * @schema AvailabilityZone#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema AvailabilityZone#ZoneName
   */
  readonly zoneName?: string;

  /**
   * @schema AvailabilityZone#ZoneId
   */
  readonly zoneId?: string;

  /**
   * @schema AvailabilityZone#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema AvailabilityZone#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema AvailabilityZone#ZoneType
   */
  readonly zoneType?: string;

  /**
   * @schema AvailabilityZone#ParentZoneName
   */
  readonly parentZoneName?: string;

  /**
   * @schema AvailabilityZone#ParentZoneId
   */
  readonly parentZoneId?: string;

}

/**
 * @schema ClassicLinkInstance
 */
export interface ClassicLinkInstance {
  /**
   * @schema ClassicLinkInstance#Groups
   */
  readonly groups?: GroupIdentifier[];

  /**
   * @schema ClassicLinkInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ClassicLinkInstance#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ClassicLinkInstance#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema AuthorizationRule
 */
export interface AuthorizationRule {
  /**
   * @schema AuthorizationRule#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema AuthorizationRule#Description
   */
  readonly description?: string;

  /**
   * @schema AuthorizationRule#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema AuthorizationRule#AccessAll
   */
  readonly accessAll?: boolean;

  /**
   * @schema AuthorizationRule#DestinationCidr
   */
  readonly destinationCidr?: string;

  /**
   * @schema AuthorizationRule#Status
   */
  readonly status?: ClientVpnAuthorizationRuleStatus;

}

/**
 * @schema ClientVpnConnection
 */
export interface ClientVpnConnection {
  /**
   * @schema ClientVpnConnection#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema ClientVpnConnection#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema ClientVpnConnection#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema ClientVpnConnection#Username
   */
  readonly username?: string;

  /**
   * @schema ClientVpnConnection#ConnectionEstablishedTime
   */
  readonly connectionEstablishedTime?: string;

  /**
   * @schema ClientVpnConnection#IngressBytes
   */
  readonly ingressBytes?: string;

  /**
   * @schema ClientVpnConnection#EgressBytes
   */
  readonly egressBytes?: string;

  /**
   * @schema ClientVpnConnection#IngressPackets
   */
  readonly ingressPackets?: string;

  /**
   * @schema ClientVpnConnection#EgressPackets
   */
  readonly egressPackets?: string;

  /**
   * @schema ClientVpnConnection#ClientIp
   */
  readonly clientIp?: string;

  /**
   * @schema ClientVpnConnection#CommonName
   */
  readonly commonName?: string;

  /**
   * @schema ClientVpnConnection#Status
   */
  readonly status?: ClientVpnConnectionStatus;

  /**
   * @schema ClientVpnConnection#ConnectionEndTime
   */
  readonly connectionEndTime?: string;

  /**
   * @schema ClientVpnConnection#PostureComplianceStatuses
   */
  readonly postureComplianceStatuses?: string[];

}

/**
 * @schema ClientVpnEndpoint
 */
export interface ClientVpnEndpoint {
  /**
   * @schema ClientVpnEndpoint#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema ClientVpnEndpoint#Description
   */
  readonly description?: string;

  /**
   * @schema ClientVpnEndpoint#Status
   */
  readonly status?: ClientVpnEndpointStatus;

  /**
   * @schema ClientVpnEndpoint#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ClientVpnEndpoint#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema ClientVpnEndpoint#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema ClientVpnEndpoint#ClientCidrBlock
   */
  readonly clientCidrBlock?: string;

  /**
   * @schema ClientVpnEndpoint#DnsServers
   */
  readonly dnsServers?: string[];

  /**
   * @schema ClientVpnEndpoint#SplitTunnel
   */
  readonly splitTunnel?: boolean;

  /**
   * @schema ClientVpnEndpoint#VpnProtocol
   */
  readonly vpnProtocol?: string;

  /**
   * @schema ClientVpnEndpoint#TransportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema ClientVpnEndpoint#VpnPort
   */
  readonly vpnPort?: number;

  /**
   * @schema ClientVpnEndpoint#AssociatedTargetNetworks
   */
  readonly associatedTargetNetworks?: AssociatedTargetNetwork[];

  /**
   * @schema ClientVpnEndpoint#ServerCertificateArn
   */
  readonly serverCertificateArn?: string;

  /**
   * @schema ClientVpnEndpoint#AuthenticationOptions
   */
  readonly authenticationOptions?: ClientVpnAuthentication[];

  /**
   * @schema ClientVpnEndpoint#ConnectionLogOptions
   */
  readonly connectionLogOptions?: ConnectionLogResponseOptions;

  /**
   * @schema ClientVpnEndpoint#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ClientVpnEndpoint#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ClientVpnEndpoint#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ClientVpnEndpoint#SelfServicePortalUrl
   */
  readonly selfServicePortalUrl?: string;

  /**
   * @schema ClientVpnEndpoint#ClientConnectOptions
   */
  readonly clientConnectOptions?: ClientConnectResponseOptions;

}

/**
 * @schema ClientVpnRoute
 */
export interface ClientVpnRoute {
  /**
   * @schema ClientVpnRoute#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema ClientVpnRoute#DestinationCidr
   */
  readonly destinationCidr?: string;

  /**
   * @schema ClientVpnRoute#TargetSubnet
   */
  readonly targetSubnet?: string;

  /**
   * @schema ClientVpnRoute#Type
   */
  readonly type?: string;

  /**
   * @schema ClientVpnRoute#Origin
   */
  readonly origin?: string;

  /**
   * @schema ClientVpnRoute#Status
   */
  readonly status?: ClientVpnRouteStatus;

  /**
   * @schema ClientVpnRoute#Description
   */
  readonly description?: string;

}

/**
 * @schema TargetNetwork
 */
export interface TargetNetwork {
  /**
   * @schema TargetNetwork#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema TargetNetwork#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema TargetNetwork#TargetNetworkId
   */
  readonly targetNetworkId?: string;

  /**
   * @schema TargetNetwork#ClientVpnEndpointId
   */
  readonly clientVpnEndpointId?: string;

  /**
   * @schema TargetNetwork#Status
   */
  readonly status?: AssociationStatus;

  /**
   * @schema TargetNetwork#SecurityGroups
   */
  readonly securityGroups?: string[];

}

/**
 * @schema CoipPool
 */
export interface CoipPool {
  /**
   * @schema CoipPool#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema CoipPool#PoolCidrs
   */
  readonly poolCidrs?: string[];

  /**
   * @schema CoipPool#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema CoipPool#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CoipPool#PoolArn
   */
  readonly poolArn?: string;

}

/**
 * @schema ConversionTask
 */
export interface ConversionTask {
  /**
   * @schema ConversionTask#ConversionTaskId
   */
  readonly conversionTaskId?: string;

  /**
   * @schema ConversionTask#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema ConversionTask#ImportInstance
   */
  readonly importInstance?: ImportInstanceTaskDetails;

  /**
   * @schema ConversionTask#ImportVolume
   */
  readonly importVolume?: ImportVolumeTaskDetails;

  /**
   * @schema ConversionTask#State
   */
  readonly state?: string;

  /**
   * @schema ConversionTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ConversionTask#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ElasticGpus
 */
export interface ElasticGpus {
  /**
   * @schema ElasticGpus#ElasticGpuId
   */
  readonly elasticGpuId?: string;

  /**
   * @schema ElasticGpus#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ElasticGpus#ElasticGpuType
   */
  readonly elasticGpuType?: string;

  /**
   * @schema ElasticGpus#ElasticGpuHealth
   */
  readonly elasticGpuHealth?: ElasticGpuHealth;

  /**
   * @schema ElasticGpus#ElasticGpuState
   */
  readonly elasticGpuState?: string;

  /**
   * @schema ElasticGpus#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ElasticGpus#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ExportImageTask
 */
export interface ExportImageTask {
  /**
   * @schema ExportImageTask#Description
   */
  readonly description?: string;

  /**
   * @schema ExportImageTask#ExportImageTaskId
   */
  readonly exportImageTaskId?: string;

  /**
   * @schema ExportImageTask#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ExportImageTask#Progress
   */
  readonly progress?: string;

  /**
   * @schema ExportImageTask#S3ExportLocation
   */
  readonly s3ExportLocation?: ExportTaskS3Location;

  /**
   * @schema ExportImageTask#Status
   */
  readonly status?: string;

  /**
   * @schema ExportImageTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ExportImageTask#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema DescribeFastSnapshotRestoreSuccessItem
 */
export interface DescribeFastSnapshotRestoreSuccessItem {
  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#State
   */
  readonly state?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#EnablingTime
   */
  readonly enablingTime?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#OptimizingTime
   */
  readonly optimizingTime?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#EnabledTime
   */
  readonly enabledTime?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#DisablingTime
   */
  readonly disablingTime?: string;

  /**
   * @schema DescribeFastSnapshotRestoreSuccessItem#DisabledTime
   */
  readonly disabledTime?: string;

}

/**
 * @schema HistoryRecordEntry
 */
export interface HistoryRecordEntry {
  /**
   * @schema HistoryRecordEntry#EventInformation
   */
  readonly eventInformation?: EventInformation;

  /**
   * @schema HistoryRecordEntry#EventType
   */
  readonly eventType?: string;

  /**
   * @schema HistoryRecordEntry#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema ActiveInstance
 */
export interface ActiveInstance {
  /**
   * @schema ActiveInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ActiveInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ActiveInstance#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema ActiveInstance#InstanceHealth
   */
  readonly instanceHealth?: string;

}

/**
 * @schema FleetData
 */
export interface FleetData {
  /**
   * @schema FleetData#ActivityStatus
   */
  readonly activityStatus?: string;

  /**
   * @schema FleetData#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema FleetData#FleetId
   */
  readonly fleetId?: string;

  /**
   * @schema FleetData#FleetState
   */
  readonly fleetState?: string;

  /**
   * @schema FleetData#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema FleetData#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema FleetData#FulfilledCapacity
   */
  readonly fulfilledCapacity?: number;

  /**
   * @schema FleetData#FulfilledOnDemandCapacity
   */
  readonly fulfilledOnDemandCapacity?: number;

  /**
   * @schema FleetData#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: FleetLaunchTemplateConfig[];

  /**
   * @schema FleetData#TargetCapacitySpecification
   */
  readonly targetCapacitySpecification?: TargetCapacitySpecification;

  /**
   * @schema FleetData#TerminateInstancesWithExpiration
   */
  readonly terminateInstancesWithExpiration?: boolean;

  /**
   * @schema FleetData#Type
   */
  readonly type?: string;

  /**
   * @schema FleetData#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema FleetData#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema FleetData#ReplaceUnhealthyInstances
   */
  readonly replaceUnhealthyInstances?: boolean;

  /**
   * @schema FleetData#SpotOptions
   */
  readonly spotOptions?: SpotOptions;

  /**
   * @schema FleetData#OnDemandOptions
   */
  readonly onDemandOptions?: OnDemandOptions;

  /**
   * @schema FleetData#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema FleetData#Errors
   */
  readonly errors?: DescribeFleetError[];

  /**
   * @schema FleetData#Instances
   */
  readonly instances?: DescribeFleetsInstances[];

}

/**
 * @schema FlowLog
 */
export interface FlowLog {
  /**
   * @schema FlowLog#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema FlowLog#DeliverLogsErrorMessage
   */
  readonly deliverLogsErrorMessage?: string;

  /**
   * @schema FlowLog#DeliverLogsPermissionArn
   */
  readonly deliverLogsPermissionArn?: string;

  /**
   * @schema FlowLog#DeliverLogsStatus
   */
  readonly deliverLogsStatus?: string;

  /**
   * @schema FlowLog#FlowLogId
   */
  readonly flowLogId?: string;

  /**
   * @schema FlowLog#FlowLogStatus
   */
  readonly flowLogStatus?: string;

  /**
   * @schema FlowLog#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema FlowLog#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema FlowLog#TrafficType
   */
  readonly trafficType?: string;

  /**
   * @schema FlowLog#LogDestinationType
   */
  readonly logDestinationType?: string;

  /**
   * @schema FlowLog#LogDestination
   */
  readonly logDestination?: string;

  /**
   * @schema FlowLog#LogFormat
   */
  readonly logFormat?: string;

  /**
   * @schema FlowLog#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema FlowLog#MaxAggregationInterval
   */
  readonly maxAggregationInterval?: number;

}

/**
 * @schema FpgaImageAttribute
 */
export interface FpgaImageAttribute {
  /**
   * @schema FpgaImageAttribute#FpgaImageId
   */
  readonly fpgaImageId?: string;

  /**
   * @schema FpgaImageAttribute#Name
   */
  readonly name?: string;

  /**
   * @schema FpgaImageAttribute#Description
   */
  readonly description?: string;

  /**
   * @schema FpgaImageAttribute#LoadPermissions
   */
  readonly loadPermissions?: LoadPermission[];

  /**
   * @schema FpgaImageAttribute#ProductCodes
   */
  readonly productCodes?: ProductCode[];

}

/**
 * @schema FpgaImage
 */
export interface FpgaImage {
  /**
   * @schema FpgaImage#FpgaImageId
   */
  readonly fpgaImageId?: string;

  /**
   * @schema FpgaImage#FpgaImageGlobalId
   */
  readonly fpgaImageGlobalId?: string;

  /**
   * @schema FpgaImage#Name
   */
  readonly name?: string;

  /**
   * @schema FpgaImage#Description
   */
  readonly description?: string;

  /**
   * @schema FpgaImage#ShellVersion
   */
  readonly shellVersion?: string;

  /**
   * @schema FpgaImage#PciId
   */
  readonly pciId?: PciId;

  /**
   * @schema FpgaImage#State
   */
  readonly state?: FpgaImageState;

  /**
   * @schema FpgaImage#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema FpgaImage#UpdateTime
   */
  readonly updateTime?: string;

  /**
   * @schema FpgaImage#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema FpgaImage#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema FpgaImage#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema FpgaImage#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema FpgaImage#Public
   */
  readonly public?: boolean;

  /**
   * @schema FpgaImage#DataRetentionSupport
   */
  readonly dataRetentionSupport?: boolean;

}

/**
 * @schema HostOffering
 */
export interface HostOffering {
  /**
   * @schema HostOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema HostOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema HostOffering#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema HostOffering#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema HostOffering#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema HostOffering#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema HostOffering#UpfrontPrice
   */
  readonly upfrontPrice?: string;

}

/**
 * @schema HostReservation
 */
export interface HostReservation {
  /**
   * @schema HostReservation#Count
   */
  readonly count?: number;

  /**
   * @schema HostReservation#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema HostReservation#Duration
   */
  readonly duration?: number;

  /**
   * @schema HostReservation#End
   */
  readonly end?: string;

  /**
   * @schema HostReservation#HostIdSet
   */
  readonly hostIdSet?: string[];

  /**
   * @schema HostReservation#HostReservationId
   */
  readonly hostReservationId?: string;

  /**
   * @schema HostReservation#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema HostReservation#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema HostReservation#OfferingId
   */
  readonly offeringId?: string;

  /**
   * @schema HostReservation#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema HostReservation#Start
   */
  readonly start?: string;

  /**
   * @schema HostReservation#State
   */
  readonly state?: string;

  /**
   * @schema HostReservation#UpfrontPrice
   */
  readonly upfrontPrice?: string;

  /**
   * @schema HostReservation#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Host
 */
export interface Host {
  /**
   * @schema Host#AutoPlacement
   */
  readonly autoPlacement?: string;

  /**
   * @schema Host#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Host#AvailableCapacity
   */
  readonly availableCapacity?: AvailableCapacity;

  /**
   * @schema Host#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Host#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Host#HostProperties
   */
  readonly hostProperties?: HostProperties;

  /**
   * @schema Host#HostReservationId
   */
  readonly hostReservationId?: string;

  /**
   * @schema Host#Instances
   */
  readonly instances?: HostInstance[];

  /**
   * @schema Host#State
   */
  readonly state?: string;

  /**
   * @schema Host#AllocationTime
   */
  readonly allocationTime?: string;

  /**
   * @schema Host#ReleaseTime
   */
  readonly releaseTime?: string;

  /**
   * @schema Host#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Host#HostRecovery
   */
  readonly hostRecovery?: string;

  /**
   * @schema Host#AllowsMultipleInstanceTypes
   */
  readonly allowsMultipleInstanceTypes?: string;

  /**
   * @schema Host#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Host#AvailabilityZoneId
   */
  readonly availabilityZoneId?: string;

  /**
   * @schema Host#MemberOfServiceLinkedResourceGroup
   */
  readonly memberOfServiceLinkedResourceGroup?: boolean;

}

/**
 * @schema LaunchPermission
 */
export interface LaunchPermission {
  /**
   * @schema LaunchPermission#Group
   */
  readonly group?: string;

  /**
   * @schema LaunchPermission#UserId
   */
  readonly userId?: string;

}

/**
 * @schema ProductCode
 */
export interface ProductCode {
  /**
   * @schema ProductCode#ProductCodeId
   */
  readonly productCodeId?: string;

  /**
   * @schema ProductCode#ProductCodeType
   */
  readonly productCodeType?: string;

}

/**
 * @schema AttributeValue
 */
export interface AttributeValue {
  /**
   * @schema AttributeValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Image#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema Image#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Image#ImageLocation
   */
  readonly imageLocation?: string;

  /**
   * @schema Image#ImageType
   */
  readonly imageType?: string;

  /**
   * @schema Image#Public
   */
  readonly public?: boolean;

  /**
   * @schema Image#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Image#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema Image#Platform
   */
  readonly platform?: string;

  /**
   * @schema Image#PlatformDetails
   */
  readonly platformDetails?: string;

  /**
   * @schema Image#UsageOperation
   */
  readonly usageOperation?: string;

  /**
   * @schema Image#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema Image#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Image#State
   */
  readonly state?: string;

  /**
   * @schema Image#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema Image#Description
   */
  readonly description?: string;

  /**
   * @schema Image#EnaSupport
   */
  readonly enaSupport?: boolean;

  /**
   * @schema Image#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Image#ImageOwnerAlias
   */
  readonly imageOwnerAlias?: string;

  /**
   * @schema Image#Name
   */
  readonly name?: string;

  /**
   * @schema Image#RootDeviceName
   */
  readonly rootDeviceName?: string;

  /**
   * @schema Image#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema Image#SriovNetSupport
   */
  readonly sriovNetSupport?: string;

  /**
   * @schema Image#StateReason
   */
  readonly stateReason?: StateReason;

  /**
   * @schema Image#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Image#VirtualizationType
   */
  readonly virtualizationType?: string;

}

/**
 * @schema ImportImageTask
 */
export interface ImportImageTask {
  /**
   * @schema ImportImageTask#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema ImportImageTask#Description
   */
  readonly description?: string;

  /**
   * @schema ImportImageTask#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ImportImageTask#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema ImportImageTask#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ImportImageTask#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema ImportImageTask#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema ImportImageTask#LicenseType
   */
  readonly licenseType?: string;

  /**
   * @schema ImportImageTask#Platform
   */
  readonly platform?: string;

  /**
   * @schema ImportImageTask#Progress
   */
  readonly progress?: string;

  /**
   * @schema ImportImageTask#SnapshotDetails
   */
  readonly snapshotDetails?: SnapshotDetail[];

  /**
   * @schema ImportImageTask#Status
   */
  readonly status?: string;

  /**
   * @schema ImportImageTask#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ImportImageTask#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ImportImageTask#LicenseSpecifications
   */
  readonly licenseSpecifications?: ImportImageLicenseConfigurationResponse[];

}

/**
 * @schema ImportSnapshotTask
 */
export interface ImportSnapshotTask {
  /**
   * @schema ImportSnapshotTask#Description
   */
  readonly description?: string;

  /**
   * @schema ImportSnapshotTask#ImportTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema ImportSnapshotTask#SnapshotTaskDetail
   */
  readonly snapshotTaskDetail?: SnapshotTaskDetail;

  /**
   * @schema ImportSnapshotTask#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GroupIdentifier
 */
export interface GroupIdentifier {
  /**
   * @schema GroupIdentifier#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GroupIdentifier#GroupId
   */
  readonly groupId?: string;

}

/**
 * @schema InstanceBlockDeviceMapping
 */
export interface InstanceBlockDeviceMapping {
  /**
   * @schema InstanceBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema InstanceBlockDeviceMapping#Ebs
   */
  readonly ebs?: EbsInstanceBlockDevice;

}

/**
 * @schema AttributeBooleanValue
 */
export interface AttributeBooleanValue {
  /**
   * @schema AttributeBooleanValue#Value
   */
  readonly value?: boolean;

}

/**
 * @schema EnclaveOptions
 */
export interface EnclaveOptions {
  /**
   * @schema EnclaveOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema InstanceCreditSpecification
 */
export interface InstanceCreditSpecification {
  /**
   * @schema InstanceCreditSpecification#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceCreditSpecification#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema InstanceStatus
 */
export interface InstanceStatus {
  /**
   * @schema InstanceStatus#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema InstanceStatus#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema InstanceStatus#Events
   */
  readonly events?: InstanceStatusEvent[];

  /**
   * @schema InstanceStatus#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceStatus#InstanceState
   */
  readonly instanceState?: InstanceState;

  /**
   * @schema InstanceStatus#InstanceStatus
   */
  readonly instanceStatus?: InstanceStatusSummary;

  /**
   * @schema InstanceStatus#SystemStatus
   */
  readonly systemStatus?: InstanceStatusSummary;

}

/**
 * @schema InstanceTypeOffering
 */
export interface InstanceTypeOffering {
  /**
   * @schema InstanceTypeOffering#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema InstanceTypeOffering#LocationType
   */
  readonly locationType?: string;

  /**
   * @schema InstanceTypeOffering#Location
   */
  readonly location?: string;

}

/**
 * @schema InstanceTypeInfo
 */
export interface InstanceTypeInfo {
  /**
   * @schema InstanceTypeInfo#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema InstanceTypeInfo#CurrentGeneration
   */
  readonly currentGeneration?: boolean;

  /**
   * @schema InstanceTypeInfo#FreeTierEligible
   */
  readonly freeTierEligible?: boolean;

  /**
   * @schema InstanceTypeInfo#SupportedUsageClasses
   */
  readonly supportedUsageClasses?: string[];

  /**
   * @schema InstanceTypeInfo#SupportedRootDeviceTypes
   */
  readonly supportedRootDeviceTypes?: string[];

  /**
   * @schema InstanceTypeInfo#SupportedVirtualizationTypes
   */
  readonly supportedVirtualizationTypes?: string[];

  /**
   * @schema InstanceTypeInfo#BareMetal
   */
  readonly bareMetal?: boolean;

  /**
   * @schema InstanceTypeInfo#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema InstanceTypeInfo#ProcessorInfo
   */
  readonly processorInfo?: ProcessorInfo;

  /**
   * @schema InstanceTypeInfo#VCpuInfo
   */
  readonly vCpuInfo?: VCpuInfo;

  /**
   * @schema InstanceTypeInfo#MemoryInfo
   */
  readonly memoryInfo?: MemoryInfo;

  /**
   * @schema InstanceTypeInfo#InstanceStorageSupported
   */
  readonly instanceStorageSupported?: boolean;

  /**
   * @schema InstanceTypeInfo#InstanceStorageInfo
   */
  readonly instanceStorageInfo?: InstanceStorageInfo;

  /**
   * @schema InstanceTypeInfo#EbsInfo
   */
  readonly ebsInfo?: EbsInfo;

  /**
   * @schema InstanceTypeInfo#NetworkInfo
   */
  readonly networkInfo?: NetworkInfo;

  /**
   * @schema InstanceTypeInfo#GpuInfo
   */
  readonly gpuInfo?: GpuInfo;

  /**
   * @schema InstanceTypeInfo#FpgaInfo
   */
  readonly fpgaInfo?: FpgaInfo;

  /**
   * @schema InstanceTypeInfo#PlacementGroupInfo
   */
  readonly placementGroupInfo?: PlacementGroupInfo;

  /**
   * @schema InstanceTypeInfo#InferenceAcceleratorInfo
   */
  readonly inferenceAcceleratorInfo?: InferenceAcceleratorInfo;

  /**
   * @schema InstanceTypeInfo#HibernationSupported
   */
  readonly hibernationSupported?: boolean;

  /**
   * @schema InstanceTypeInfo#BurstablePerformanceSupported
   */
  readonly burstablePerformanceSupported?: boolean;

  /**
   * @schema InstanceTypeInfo#DedicatedHostsSupported
   */
  readonly dedicatedHostsSupported?: boolean;

  /**
   * @schema InstanceTypeInfo#AutoRecoverySupported
   */
  readonly autoRecoverySupported?: boolean;

}

/**
 * @schema Ipv6Pool
 */
export interface Ipv6Pool {
  /**
   * @schema Ipv6Pool#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema Ipv6Pool#Description
   */
  readonly description?: string;

  /**
   * @schema Ipv6Pool#PoolCidrBlocks
   */
  readonly poolCidrBlocks?: PoolCidrBlock[];

  /**
   * @schema Ipv6Pool#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema KeyPairInfo
 */
export interface KeyPairInfo {
  /**
   * @schema KeyPairInfo#KeyPairId
   */
  readonly keyPairId?: string;

  /**
   * @schema KeyPairInfo#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema KeyPairInfo#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema KeyPairInfo#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 */
export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
   */
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#State
   */
  readonly state?: string;

  /**
   * @schema LocalGatewayRouteTableVirtualInterfaceGroupAssociation#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LocalGatewayRouteTable
 */
export interface LocalGatewayRouteTable {
  /**
   * @schema LocalGatewayRouteTable#LocalGatewayRouteTableId
   */
  readonly localGatewayRouteTableId?: string;

  /**
   * @schema LocalGatewayRouteTable#LocalGatewayRouteTableArn
   */
  readonly localGatewayRouteTableArn?: string;

  /**
   * @schema LocalGatewayRouteTable#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema LocalGatewayRouteTable#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema LocalGatewayRouteTable#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema LocalGatewayRouteTable#State
   */
  readonly state?: string;

  /**
   * @schema LocalGatewayRouteTable#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LocalGatewayVirtualInterfaceGroup
 */
export interface LocalGatewayVirtualInterfaceGroup {
  /**
   * @schema LocalGatewayVirtualInterfaceGroup#LocalGatewayVirtualInterfaceGroupId
   */
  readonly localGatewayVirtualInterfaceGroupId?: string;

  /**
   * @schema LocalGatewayVirtualInterfaceGroup#LocalGatewayVirtualInterfaceIds
   */
  readonly localGatewayVirtualInterfaceIds?: string[];

  /**
   * @schema LocalGatewayVirtualInterfaceGroup#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema LocalGatewayVirtualInterfaceGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema LocalGatewayVirtualInterfaceGroup#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LocalGatewayVirtualInterface
 */
export interface LocalGatewayVirtualInterface {
  /**
   * @schema LocalGatewayVirtualInterface#LocalGatewayVirtualInterfaceId
   */
  readonly localGatewayVirtualInterfaceId?: string;

  /**
   * @schema LocalGatewayVirtualInterface#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema LocalGatewayVirtualInterface#Vlan
   */
  readonly vlan?: number;

  /**
   * @schema LocalGatewayVirtualInterface#LocalAddress
   */
  readonly localAddress?: string;

  /**
   * @schema LocalGatewayVirtualInterface#PeerAddress
   */
  readonly peerAddress?: string;

  /**
   * @schema LocalGatewayVirtualInterface#LocalBgpAsn
   */
  readonly localBgpAsn?: number;

  /**
   * @schema LocalGatewayVirtualInterface#PeerBgpAsn
   */
  readonly peerBgpAsn?: number;

  /**
   * @schema LocalGatewayVirtualInterface#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema LocalGatewayVirtualInterface#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LocalGateway
 */
export interface LocalGateway {
  /**
   * @schema LocalGateway#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema LocalGateway#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema LocalGateway#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema LocalGateway#State
   */
  readonly state?: string;

  /**
   * @schema LocalGateway#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema MovingAddressStatus
 */
export interface MovingAddressStatus {
  /**
   * @schema MovingAddressStatus#MoveStatus
   */
  readonly moveStatus?: string;

  /**
   * @schema MovingAddressStatus#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * @schema NetworkInterfaceAttachment
 */
export interface NetworkInterfaceAttachment {
  /**
   * @schema NetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema NetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema NetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema NetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema NetworkInterfaceAttachment#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

  /**
   * @schema NetworkInterfaceAttachment#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema NetworkInterfaceAttachment#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema NetworkInterfaceAttachment#Status
   */
  readonly status?: string;

}

/**
 * @schema PrefixList
 */
export interface PrefixList {
  /**
   * @schema PrefixList#Cidrs
   */
  readonly cidrs?: string[];

  /**
   * @schema PrefixList#PrefixListId
   */
  readonly prefixListId?: string;

  /**
   * @schema PrefixList#PrefixListName
   */
  readonly prefixListName?: string;

}

/**
 * @schema PrincipalIdFormat
 */
export interface PrincipalIdFormat {
  /**
   * @schema PrincipalIdFormat#Arn
   */
  readonly arn?: string;

  /**
   * @schema PrincipalIdFormat#Statuses
   */
  readonly statuses?: IdFormat[];

}

/**
 * @schema PublicIpv4Pool
 */
export interface PublicIpv4Pool {
  /**
   * @schema PublicIpv4Pool#PoolId
   */
  readonly poolId?: string;

  /**
   * @schema PublicIpv4Pool#Description
   */
  readonly description?: string;

  /**
   * @schema PublicIpv4Pool#PoolAddressRanges
   */
  readonly poolAddressRanges?: PublicIpv4PoolRange[];

  /**
   * @schema PublicIpv4Pool#TotalAddressCount
   */
  readonly totalAddressCount?: number;

  /**
   * @schema PublicIpv4Pool#TotalAvailableAddressCount
   */
  readonly totalAvailableAddressCount?: number;

  /**
   * @schema PublicIpv4Pool#NetworkBorderGroup
   */
  readonly networkBorderGroup?: string;

  /**
   * @schema PublicIpv4Pool#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Region
 */
export interface Region {
  /**
   * @schema Region#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Region#RegionName
   */
  readonly regionName?: string;

  /**
   * @schema Region#OptInStatus
   */
  readonly optInStatus?: string;

}

/**
 * @schema ReservedInstances
 */
export interface ReservedInstances {
  /**
   * @schema ReservedInstances#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ReservedInstances#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedInstances#End
   */
  readonly end?: string;

  /**
   * @schema ReservedInstances#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedInstances#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ReservedInstances#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ReservedInstances#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ReservedInstances#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema ReservedInstances#Start
   */
  readonly start?: string;

  /**
   * @schema ReservedInstances#State
   */
  readonly state?: string;

  /**
   * @schema ReservedInstances#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedInstances#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedInstances#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema ReservedInstances#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema ReservedInstances#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedInstances#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

  /**
   * @schema ReservedInstances#Scope
   */
  readonly scope?: string;

  /**
   * @schema ReservedInstances#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ReservedInstancesModification
 */
export interface ReservedInstancesModification {
  /**
   * @schema ReservedInstancesModification#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ReservedInstancesModification#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ReservedInstancesModification#EffectiveDate
   */
  readonly effectiveDate?: string;

  /**
   * @schema ReservedInstancesModification#ModificationResults
   */
  readonly modificationResults?: ReservedInstancesModificationResult[];

  /**
   * @schema ReservedInstancesModification#ReservedInstancesIds
   */
  readonly reservedInstancesIds?: ReservedInstancesId[];

  /**
   * @schema ReservedInstancesModification#ReservedInstancesModificationId
   */
  readonly reservedInstancesModificationId?: string;

  /**
   * @schema ReservedInstancesModification#Status
   */
  readonly status?: string;

  /**
   * @schema ReservedInstancesModification#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ReservedInstancesModification#UpdateDate
   */
  readonly updateDate?: string;

}

/**
 * @schema ReservedInstancesOffering
 */
export interface ReservedInstancesOffering {
  /**
   * @schema ReservedInstancesOffering#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ReservedInstancesOffering#Duration
   */
  readonly duration?: number;

  /**
   * @schema ReservedInstancesOffering#FixedPrice
   */
  readonly fixedPrice?: number;

  /**
   * @schema ReservedInstancesOffering#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ReservedInstancesOffering#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema ReservedInstancesOffering#ReservedInstancesOfferingId
   */
  readonly reservedInstancesOfferingId?: string;

  /**
   * @schema ReservedInstancesOffering#UsagePrice
   */
  readonly usagePrice?: number;

  /**
   * @schema ReservedInstancesOffering#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema ReservedInstancesOffering#InstanceTenancy
   */
  readonly instanceTenancy?: string;

  /**
   * @schema ReservedInstancesOffering#Marketplace
   */
  readonly marketplace?: boolean;

  /**
   * @schema ReservedInstancesOffering#OfferingClass
   */
  readonly offeringClass?: string;

  /**
   * @schema ReservedInstancesOffering#OfferingType
   */
  readonly offeringType?: string;

  /**
   * @schema ReservedInstancesOffering#PricingDetails
   */
  readonly pricingDetails?: PricingDetail[];

  /**
   * @schema ReservedInstancesOffering#RecurringCharges
   */
  readonly recurringCharges?: RecurringCharge[];

  /**
   * @schema ReservedInstancesOffering#Scope
   */
  readonly scope?: string;

}

/**
 * @schema SlotDateTimeRangeRequest
 */
export interface SlotDateTimeRangeRequest {
  /**
   * @schema SlotDateTimeRangeRequest#EarliestTime
   */
  readonly earliestTime: string;

  /**
   * @schema SlotDateTimeRangeRequest#LatestTime
   */
  readonly latestTime: string;

}

/**
 * @schema ScheduledInstanceRecurrenceRequest
 */
export interface ScheduledInstanceRecurrenceRequest {
  /**
   * @schema ScheduledInstanceRecurrenceRequest#Frequency
   */
  readonly frequency?: string;

  /**
   * @schema ScheduledInstanceRecurrenceRequest#Interval
   */
  readonly interval?: number;

  /**
   * @schema ScheduledInstanceRecurrenceRequest#OccurrenceDays
   */
  readonly occurrenceDays?: number[];

  /**
   * @schema ScheduledInstanceRecurrenceRequest#OccurrenceRelativeToEnd
   */
  readonly occurrenceRelativeToEnd?: boolean;

  /**
   * @schema ScheduledInstanceRecurrenceRequest#OccurrenceUnit
   */
  readonly occurrenceUnit?: string;

}

/**
 * @schema ScheduledInstanceAvailability
 */
export interface ScheduledInstanceAvailability {
  /**
   * @schema ScheduledInstanceAvailability#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ScheduledInstanceAvailability#AvailableInstanceCount
   */
  readonly availableInstanceCount?: number;

  /**
   * @schema ScheduledInstanceAvailability#FirstSlotStartTime
   */
  readonly firstSlotStartTime?: string;

  /**
   * @schema ScheduledInstanceAvailability#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema ScheduledInstanceAvailability#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ScheduledInstanceAvailability#MaxTermDurationInDays
   */
  readonly maxTermDurationInDays?: number;

  /**
   * @schema ScheduledInstanceAvailability#MinTermDurationInDays
   */
  readonly minTermDurationInDays?: number;

  /**
   * @schema ScheduledInstanceAvailability#NetworkPlatform
   */
  readonly networkPlatform?: string;

  /**
   * @schema ScheduledInstanceAvailability#Platform
   */
  readonly platform?: string;

  /**
   * @schema ScheduledInstanceAvailability#PurchaseToken
   */
  readonly purchaseToken?: string;

  /**
   * @schema ScheduledInstanceAvailability#Recurrence
   */
  readonly recurrence?: ScheduledInstanceRecurrence;

  /**
   * @schema ScheduledInstanceAvailability#SlotDurationInHours
   */
  readonly slotDurationInHours?: number;

  /**
   * @schema ScheduledInstanceAvailability#TotalScheduledInstanceHours
   */
  readonly totalScheduledInstanceHours?: number;

}

/**
 * @schema SlotStartTimeRangeRequest
 */
export interface SlotStartTimeRangeRequest {
  /**
   * @schema SlotStartTimeRangeRequest#EarliestTime
   */
  readonly earliestTime?: string;

  /**
   * @schema SlotStartTimeRangeRequest#LatestTime
   */
  readonly latestTime?: string;

}

/**
 * @schema ScheduledInstance
 */
export interface ScheduledInstance {
  /**
   * @schema ScheduledInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ScheduledInstance#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema ScheduledInstance#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema ScheduledInstance#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ScheduledInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ScheduledInstance#NetworkPlatform
   */
  readonly networkPlatform?: string;

  /**
   * @schema ScheduledInstance#NextSlotStartTime
   */
  readonly nextSlotStartTime?: string;

  /**
   * @schema ScheduledInstance#Platform
   */
  readonly platform?: string;

  /**
   * @schema ScheduledInstance#PreviousSlotEndTime
   */
  readonly previousSlotEndTime?: string;

  /**
   * @schema ScheduledInstance#Recurrence
   */
  readonly recurrence?: ScheduledInstanceRecurrence;

  /**
   * @schema ScheduledInstance#ScheduledInstanceId
   */
  readonly scheduledInstanceId?: string;

  /**
   * @schema ScheduledInstance#SlotDurationInHours
   */
  readonly slotDurationInHours?: number;

  /**
   * @schema ScheduledInstance#TermEndDate
   */
  readonly termEndDate?: string;

  /**
   * @schema ScheduledInstance#TermStartDate
   */
  readonly termStartDate?: string;

  /**
   * @schema ScheduledInstance#TotalScheduledInstanceHours
   */
  readonly totalScheduledInstanceHours?: number;

}

/**
 * @schema SecurityGroupReference
 */
export interface SecurityGroupReference {
  /**
   * @schema SecurityGroupReference#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityGroupReference#ReferencingVpcId
   */
  readonly referencingVpcId?: string;

  /**
   * @schema SecurityGroupReference#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema SecurityGroup
 */
export interface SecurityGroup {
  /**
   * @schema SecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema SecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SecurityGroup#IpPermissions
   */
  readonly ipPermissions?: IpPermission[];

  /**
   * @schema SecurityGroup#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema SecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityGroup#IpPermissionsEgress
   */
  readonly ipPermissionsEgress?: IpPermission[];

  /**
   * @schema SecurityGroup#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema SecurityGroup#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema CreateVolumePermission
 */
export interface CreateVolumePermission {
  /**
   * @schema CreateVolumePermission#Group
   */
  readonly group?: string;

  /**
   * @schema CreateVolumePermission#UserId
   */
  readonly userId?: string;

}

/**
 * @schema HistoryRecord
 */
export interface HistoryRecord {
  /**
   * @schema HistoryRecord#EventInformation
   */
  readonly eventInformation?: EventInformation;

  /**
   * @schema HistoryRecord#EventType
   */
  readonly eventType?: string;

  /**
   * @schema HistoryRecord#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema SpotFleetRequestConfig
 */
export interface SpotFleetRequestConfig {
  /**
   * @schema SpotFleetRequestConfig#ActivityStatus
   */
  readonly activityStatus?: string;

  /**
   * @schema SpotFleetRequestConfig#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema SpotFleetRequestConfig#SpotFleetRequestConfig
   */
  readonly spotFleetRequestConfig?: SpotFleetRequestConfigData;

  /**
   * @schema SpotFleetRequestConfig#SpotFleetRequestId
   */
  readonly spotFleetRequestId?: string;

  /**
   * @schema SpotFleetRequestConfig#SpotFleetRequestState
   */
  readonly spotFleetRequestState?: string;

  /**
   * @schema SpotFleetRequestConfig#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema SpotInstanceRequest
 */
export interface SpotInstanceRequest {
  /**
   * @schema SpotInstanceRequest#ActualBlockHourlyPrice
   */
  readonly actualBlockHourlyPrice?: string;

  /**
   * @schema SpotInstanceRequest#AvailabilityZoneGroup
   */
  readonly availabilityZoneGroup?: string;

  /**
   * @schema SpotInstanceRequest#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema SpotInstanceRequest#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema SpotInstanceRequest#Fault
   */
  readonly fault?: SpotInstanceStateFault;

  /**
   * @schema SpotInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema SpotInstanceRequest#LaunchGroup
   */
  readonly launchGroup?: string;

  /**
   * @schema SpotInstanceRequest#LaunchSpecification
   */
  readonly launchSpecification?: LaunchSpecification;

  /**
   * @schema SpotInstanceRequest#LaunchedAvailabilityZone
   */
  readonly launchedAvailabilityZone?: string;

  /**
   * @schema SpotInstanceRequest#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema SpotInstanceRequest#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema SpotInstanceRequest#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema SpotInstanceRequest#State
   */
  readonly state?: string;

  /**
   * @schema SpotInstanceRequest#Status
   */
  readonly status?: SpotInstanceStatus;

  /**
   * @schema SpotInstanceRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema SpotInstanceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema SpotInstanceRequest#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema SpotInstanceRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema SpotInstanceRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema SpotPrice
 */
export interface SpotPrice {
  /**
   * @schema SpotPrice#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SpotPrice#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SpotPrice#ProductDescription
   */
  readonly productDescription?: string;

  /**
   * @schema SpotPrice#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema SpotPrice#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema StaleSecurityGroup
 */
export interface StaleSecurityGroup {
  /**
   * @schema StaleSecurityGroup#Description
   */
  readonly description?: string;

  /**
   * @schema StaleSecurityGroup#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema StaleSecurityGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema StaleSecurityGroup#StaleIpPermissions
   */
  readonly staleIpPermissions?: StaleIpPermission[];

  /**
   * @schema StaleSecurityGroup#StaleIpPermissionsEgress
   */
  readonly staleIpPermissionsEgress?: StaleIpPermission[];

  /**
   * @schema StaleSecurityGroup#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema TagDescription
 */
export interface TagDescription {
  /**
   * @schema TagDescription#Key
   */
  readonly key?: string;

  /**
   * @schema TagDescription#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TagDescription#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TagDescription#Value
   */
  readonly value?: string;

}

/**
 * @schema TransitGatewayAttachment
 */
export interface TransitGatewayAttachment {
  /**
   * @schema TransitGatewayAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayAttachment#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema TransitGatewayAttachment#TransitGatewayOwnerId
   */
  readonly transitGatewayOwnerId?: string;

  /**
   * @schema TransitGatewayAttachment#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema TransitGatewayAttachment#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayAttachment#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayAttachment#State
   */
  readonly state?: string;

  /**
   * @schema TransitGatewayAttachment#Association
   */
  readonly association?: TransitGatewayAttachmentAssociation;

  /**
   * @schema TransitGatewayAttachment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransitGatewayAttachment#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema VolumeStatusItem
 */
export interface VolumeStatusItem {
  /**
   * @schema VolumeStatusItem#Actions
   */
  readonly actions?: VolumeStatusAction[];

  /**
   * @schema VolumeStatusItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema VolumeStatusItem#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema VolumeStatusItem#Events
   */
  readonly events?: VolumeStatusEvent[];

  /**
   * @schema VolumeStatusItem#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema VolumeStatusItem#VolumeStatus
   */
  readonly volumeStatus?: VolumeStatusInfo;

  /**
   * @schema VolumeStatusItem#AttachmentStatuses
   */
  readonly attachmentStatuses?: VolumeStatusAttachmentStatus[];

}

/**
 * @schema VolumeModification
 */
export interface VolumeModification {
  /**
   * @schema VolumeModification#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema VolumeModification#ModificationState
   */
  readonly modificationState?: string;

  /**
   * @schema VolumeModification#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema VolumeModification#TargetSize
   */
  readonly targetSize?: number;

  /**
   * @schema VolumeModification#TargetIops
   */
  readonly targetIops?: number;

  /**
   * @schema VolumeModification#TargetVolumeType
   */
  readonly targetVolumeType?: string;

  /**
   * @schema VolumeModification#OriginalSize
   */
  readonly originalSize?: number;

  /**
   * @schema VolumeModification#OriginalIops
   */
  readonly originalIops?: number;

  /**
   * @schema VolumeModification#OriginalVolumeType
   */
  readonly originalVolumeType?: string;

  /**
   * @schema VolumeModification#Progress
   */
  readonly progress?: number;

  /**
   * @schema VolumeModification#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema VolumeModification#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema VpcClassicLink
 */
export interface VpcClassicLink {
  /**
   * @schema VpcClassicLink#ClassicLinkEnabled
   */
  readonly classicLinkEnabled?: boolean;

  /**
   * @schema VpcClassicLink#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema VpcClassicLink#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema ClassicLinkDnsSupport
 */
export interface ClassicLinkDnsSupport {
  /**
   * @schema ClassicLinkDnsSupport#ClassicLinkDnsSupported
   */
  readonly classicLinkDnsSupported?: boolean;

  /**
   * @schema ClassicLinkDnsSupport#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema VpcEndpointConnection
 */
export interface VpcEndpointConnection {
  /**
   * @schema VpcEndpointConnection#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema VpcEndpointConnection#VpcEndpointId
   */
  readonly vpcEndpointId?: string;

  /**
   * @schema VpcEndpointConnection#VpcEndpointOwner
   */
  readonly vpcEndpointOwner?: string;

  /**
   * @schema VpcEndpointConnection#VpcEndpointState
   */
  readonly vpcEndpointState?: string;

  /**
   * @schema VpcEndpointConnection#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema VpcEndpointConnection#DnsEntries
   */
  readonly dnsEntries?: DnsEntry[];

  /**
   * @schema VpcEndpointConnection#NetworkLoadBalancerArns
   */
  readonly networkLoadBalancerArns?: string[];

  /**
   * @schema VpcEndpointConnection#GatewayLoadBalancerArns
   */
  readonly gatewayLoadBalancerArns?: string[];

}

/**
 * @schema AllowedPrincipal
 */
export interface AllowedPrincipal {
  /**
   * @schema AllowedPrincipal#PrincipalType
   */
  readonly principalType?: string;

  /**
   * @schema AllowedPrincipal#Principal
   */
  readonly principal?: string;

}

/**
 * @schema ServiceDetail
 */
export interface ServiceDetail {
  /**
   * @schema ServiceDetail#ServiceName
   */
  readonly serviceName?: string;

  /**
   * @schema ServiceDetail#ServiceId
   */
  readonly serviceId?: string;

  /**
   * @schema ServiceDetail#ServiceType
   */
  readonly serviceType?: ServiceTypeDetail[];

  /**
   * @schema ServiceDetail#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema ServiceDetail#Owner
   */
  readonly owner?: string;

  /**
   * @schema ServiceDetail#BaseEndpointDnsNames
   */
  readonly baseEndpointDnsNames?: string[];

  /**
   * @schema ServiceDetail#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema ServiceDetail#PrivateDnsNames
   */
  readonly privateDnsNames?: PrivateDnsDetails[];

  /**
   * @schema ServiceDetail#VpcEndpointPolicySupported
   */
  readonly vpcEndpointPolicySupported?: boolean;

  /**
   * @schema ServiceDetail#AcceptanceRequired
   */
  readonly acceptanceRequired?: boolean;

  /**
   * @schema ServiceDetail#ManagesVpcEndpoints
   */
  readonly managesVpcEndpoints?: boolean;

  /**
   * @schema ServiceDetail#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ServiceDetail#PrivateDnsNameVerificationState
   */
  readonly privateDnsNameVerificationState?: string;

}

/**
 * @schema DisableFastSnapshotRestoreSuccessItem
 */
export interface DisableFastSnapshotRestoreSuccessItem {
  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#State
   */
  readonly state?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#EnablingTime
   */
  readonly enablingTime?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#OptimizingTime
   */
  readonly optimizingTime?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#EnabledTime
   */
  readonly enabledTime?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#DisablingTime
   */
  readonly disablingTime?: string;

  /**
   * @schema DisableFastSnapshotRestoreSuccessItem#DisabledTime
   */
  readonly disabledTime?: string;

}

/**
 * @schema DisableFastSnapshotRestoreErrorItem
 */
export interface DisableFastSnapshotRestoreErrorItem {
  /**
   * @schema DisableFastSnapshotRestoreErrorItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema DisableFastSnapshotRestoreErrorItem#FastSnapshotRestoreStateErrors
   */
  readonly fastSnapshotRestoreStateErrors?: DisableFastSnapshotRestoreStateErrorItem[];

}

/**
 * @schema TransitGatewayPropagation
 */
export interface TransitGatewayPropagation {
  /**
   * @schema TransitGatewayPropagation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayPropagation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayPropagation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayPropagation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema TransitGatewayPropagation#State
   */
  readonly state?: string;

}

/**
 * @schema EnableFastSnapshotRestoreSuccessItem
 */
export interface EnableFastSnapshotRestoreSuccessItem {
  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#State
   */
  readonly state?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#OwnerAlias
   */
  readonly ownerAlias?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#EnablingTime
   */
  readonly enablingTime?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#OptimizingTime
   */
  readonly optimizingTime?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#EnabledTime
   */
  readonly enabledTime?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#DisablingTime
   */
  readonly disablingTime?: string;

  /**
   * @schema EnableFastSnapshotRestoreSuccessItem#DisabledTime
   */
  readonly disabledTime?: string;

}

/**
 * @schema EnableFastSnapshotRestoreErrorItem
 */
export interface EnableFastSnapshotRestoreErrorItem {
  /**
   * @schema EnableFastSnapshotRestoreErrorItem#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EnableFastSnapshotRestoreErrorItem#FastSnapshotRestoreStateErrors
   */
  readonly fastSnapshotRestoreStateErrors?: EnableFastSnapshotRestoreStateErrorItem[];

}

/**
 * @schema ClientCertificateRevocationListStatus
 */
export interface ClientCertificateRevocationListStatus {
  /**
   * @schema ClientCertificateRevocationListStatus#Code
   */
  readonly code?: string;

  /**
   * @schema ClientCertificateRevocationListStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema ExportTaskS3LocationRequest
 */
export interface ExportTaskS3LocationRequest {
  /**
   * @schema ExportTaskS3LocationRequest#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema ExportTaskS3LocationRequest#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema ExportTaskS3Location
 */
export interface ExportTaskS3Location {
  /**
   * @schema ExportTaskS3Location#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ExportTaskS3Location#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema AssociatedRole
 */
export interface AssociatedRole {
  /**
   * @schema AssociatedRole#AssociatedRoleArn
   */
  readonly associatedRoleArn?: string;

  /**
   * @schema AssociatedRole#CertificateS3BucketName
   */
  readonly certificateS3BucketName?: string;

  /**
   * @schema AssociatedRole#CertificateS3ObjectKey
   */
  readonly certificateS3ObjectKey?: string;

  /**
   * @schema AssociatedRole#EncryptionKmsKeyId
   */
  readonly encryptionKmsKeyId?: string;

}

/**
 * @schema Ipv6CidrAssociation
 */
export interface Ipv6CidrAssociation {
  /**
   * @schema Ipv6CidrAssociation#Ipv6Cidr
   */
  readonly ipv6Cidr?: string;

  /**
   * @schema Ipv6CidrAssociation#AssociatedResource
   */
  readonly associatedResource?: string;

}

/**
 * @schema InstanceUsage
 */
export interface InstanceUsage {
  /**
   * @schema InstanceUsage#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema InstanceUsage#UsedInstanceCount
   */
  readonly usedInstanceCount?: number;

}

/**
 * @schema CoipAddressUsage
 */
export interface CoipAddressUsage {
  /**
   * @schema CoipAddressUsage#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema CoipAddressUsage#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema CoipAddressUsage#AwsService
   */
  readonly awsService?: string;

  /**
   * @schema CoipAddressUsage#CoIp
   */
  readonly coIp?: string;

}

/**
 * @schema InstanceFamilyCreditSpecification
 */
export interface InstanceFamilyCreditSpecification {
  /**
   * @schema InstanceFamilyCreditSpecification#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema InstanceFamilyCreditSpecification#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema CapacityReservationGroup
 */
export interface CapacityReservationGroup {
  /**
   * @schema CapacityReservationGroup#GroupArn
   */
  readonly groupArn?: string;

  /**
   * @schema CapacityReservationGroup#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema Purchase
 */
export interface Purchase {
  /**
   * @schema Purchase#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema Purchase#Duration
   */
  readonly duration?: number;

  /**
   * @schema Purchase#HostIdSet
   */
  readonly hostIdSet?: string[];

  /**
   * @schema Purchase#HostReservationId
   */
  readonly hostReservationId?: string;

  /**
   * @schema Purchase#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema Purchase#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema Purchase#PaymentOption
   */
  readonly paymentOption?: string;

  /**
   * @schema Purchase#UpfrontPrice
   */
  readonly upfrontPrice?: string;

}

/**
 * @schema ResponseLaunchTemplateData
 */
export interface ResponseLaunchTemplateData {
  /**
   * @schema ResponseLaunchTemplateData#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema ResponseLaunchTemplateData#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema ResponseLaunchTemplateData#IamInstanceProfile
   */
  readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfileSpecification;

  /**
   * @schema ResponseLaunchTemplateData#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMapping[];

  /**
   * @schema ResponseLaunchTemplateData#NetworkInterfaces
   */
  readonly networkInterfaces?: LaunchTemplateInstanceNetworkInterfaceSpecification[];

  /**
   * @schema ResponseLaunchTemplateData#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema ResponseLaunchTemplateData#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ResponseLaunchTemplateData#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema ResponseLaunchTemplateData#Monitoring
   */
  readonly monitoring?: LaunchTemplatesMonitoring;

  /**
   * @schema ResponseLaunchTemplateData#Placement
   */
  readonly placement?: LaunchTemplatePlacement;

  /**
   * @schema ResponseLaunchTemplateData#RamDiskId
   */
  readonly ramDiskId?: string;

  /**
   * @schema ResponseLaunchTemplateData#DisableApiTermination
   */
  readonly disableApiTermination?: boolean;

  /**
   * @schema ResponseLaunchTemplateData#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema ResponseLaunchTemplateData#UserData
   */
  readonly userData?: string;

  /**
   * @schema ResponseLaunchTemplateData#TagSpecifications
   */
  readonly tagSpecifications?: LaunchTemplateTagSpecification[];

  /**
   * @schema ResponseLaunchTemplateData#ElasticGpuSpecifications
   */
  readonly elasticGpuSpecifications?: ElasticGpuSpecificationResponse[];

  /**
   * @schema ResponseLaunchTemplateData#ElasticInferenceAccelerators
   */
  readonly elasticInferenceAccelerators?: LaunchTemplateElasticInferenceAcceleratorResponse[];

  /**
   * @schema ResponseLaunchTemplateData#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ResponseLaunchTemplateData#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema ResponseLaunchTemplateData#InstanceMarketOptions
   */
  readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;

  /**
   * @schema ResponseLaunchTemplateData#CreditSpecification
   */
  readonly creditSpecification?: CreditSpecification;

  /**
   * @schema ResponseLaunchTemplateData#CpuOptions
   */
  readonly cpuOptions?: LaunchTemplateCpuOptions;

  /**
   * @schema ResponseLaunchTemplateData#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecificationResponse;

  /**
   * @schema ResponseLaunchTemplateData#LicenseSpecifications
   */
  readonly licenseSpecifications?: LaunchTemplateLicenseConfiguration[];

  /**
   * @schema ResponseLaunchTemplateData#HibernationOptions
   */
  readonly hibernationOptions?: LaunchTemplateHibernationOptions;

  /**
   * @schema ResponseLaunchTemplateData#MetadataOptions
   */
  readonly metadataOptions?: LaunchTemplateInstanceMetadataOptions;

  /**
   * @schema ResponseLaunchTemplateData#EnclaveOptions
   */
  readonly enclaveOptions?: LaunchTemplateEnclaveOptions;

}

/**
 * @schema PrefixListAssociation
 */
export interface PrefixListAssociation {
  /**
   * @schema PrefixListAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema PrefixListAssociation#ResourceOwner
   */
  readonly resourceOwner?: string;

}

/**
 * @schema PrefixListEntry
 */
export interface PrefixListEntry {
  /**
   * @schema PrefixListEntry#Cidr
   */
  readonly cidr?: string;

  /**
   * @schema PrefixListEntry#Description
   */
  readonly description?: string;

}

/**
 * @schema ReservationValue
 */
export interface ReservationValue {
  /**
   * @schema ReservationValue#HourlyPrice
   */
  readonly hourlyPrice?: string;

  /**
   * @schema ReservationValue#RemainingTotalValue
   */
  readonly remainingTotalValue?: string;

  /**
   * @schema ReservationValue#RemainingUpfrontValue
   */
  readonly remainingUpfrontValue?: string;

}

/**
 * @schema ReservedInstanceReservationValue
 */
export interface ReservedInstanceReservationValue {
  /**
   * @schema ReservedInstanceReservationValue#ReservationValue
   */
  readonly reservationValue?: ReservationValue;

  /**
   * @schema ReservedInstanceReservationValue#ReservedInstanceId
   */
  readonly reservedInstanceId?: string;

}

/**
 * @schema TargetReservationValue
 */
export interface TargetReservationValue {
  /**
   * @schema TargetReservationValue#ReservationValue
   */
  readonly reservationValue?: ReservationValue;

  /**
   * @schema TargetReservationValue#TargetConfiguration
   */
  readonly targetConfiguration?: TargetConfiguration;

}

/**
 * @schema TransitGatewayAttachmentPropagation
 */
export interface TransitGatewayAttachmentPropagation {
  /**
   * @schema TransitGatewayAttachmentPropagation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema TransitGatewayAttachmentPropagation#State
   */
  readonly state?: string;

}

/**
 * @schema TransitGatewayMulticastDomainAssociation
 */
export interface TransitGatewayMulticastDomainAssociation {
  /**
   * @schema TransitGatewayMulticastDomainAssociation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayMulticastDomainAssociation#Subnet
   */
  readonly subnet?: SubnetAssociation;

}

/**
 * @schema TransitGatewayRouteTableAssociation
 */
export interface TransitGatewayRouteTableAssociation {
  /**
   * @schema TransitGatewayRouteTableAssociation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayRouteTableAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayRouteTableAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayRouteTableAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema TransitGatewayRouteTablePropagation
 */
export interface TransitGatewayRouteTablePropagation {
  /**
   * @schema TransitGatewayRouteTablePropagation#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayRouteTablePropagation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayRouteTablePropagation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayRouteTablePropagation#State
   */
  readonly state?: string;

}

/**
 * @schema ClientData
 */
export interface ClientData {
  /**
   * @schema ClientData#Comment
   */
  readonly comment?: string;

  /**
   * @schema ClientData#UploadEnd
   */
  readonly uploadEnd?: string;

  /**
   * @schema ClientData#UploadSize
   */
  readonly uploadSize?: number;

  /**
   * @schema ClientData#UploadStart
   */
  readonly uploadStart?: string;

}

/**
 * @schema ImageDiskContainer
 */
export interface ImageDiskContainer {
  /**
   * @schema ImageDiskContainer#Description
   */
  readonly description?: string;

  /**
   * @schema ImageDiskContainer#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema ImageDiskContainer#Format
   */
  readonly format?: string;

  /**
   * @schema ImageDiskContainer#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema ImageDiskContainer#Url
   */
  readonly url?: string;

  /**
   * @schema ImageDiskContainer#UserBucket
   */
  readonly userBucket?: UserBucket;

}

/**
 * @schema ImportImageLicenseConfigurationRequest
 */
export interface ImportImageLicenseConfigurationRequest {
  /**
   * @schema ImportImageLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema SnapshotDetail
 */
export interface SnapshotDetail {
  /**
   * @schema SnapshotDetail#Description
   */
  readonly description?: string;

  /**
   * @schema SnapshotDetail#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema SnapshotDetail#DiskImageSize
   */
  readonly diskImageSize?: number;

  /**
   * @schema SnapshotDetail#Format
   */
  readonly format?: string;

  /**
   * @schema SnapshotDetail#Progress
   */
  readonly progress?: string;

  /**
   * @schema SnapshotDetail#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SnapshotDetail#Status
   */
  readonly status?: string;

  /**
   * @schema SnapshotDetail#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SnapshotDetail#Url
   */
  readonly url?: string;

  /**
   * @schema SnapshotDetail#UserBucket
   */
  readonly userBucket?: UserBucketDetails;

}

/**
 * @schema ImportImageLicenseConfigurationResponse
 */
export interface ImportImageLicenseConfigurationResponse {
  /**
   * @schema ImportImageLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema DiskImage
 */
export interface DiskImage {
  /**
   * @schema DiskImage#Description
   */
  readonly description?: string;

  /**
   * @schema DiskImage#Image
   */
  readonly image?: DiskImageDetail;

  /**
   * @schema DiskImage#Volume
   */
  readonly volume?: VolumeDetail;

}

/**
 * @schema ImportInstanceLaunchSpecification
 */
export interface ImportInstanceLaunchSpecification {
  /**
   * @schema ImportInstanceLaunchSpecification#AdditionalInfo
   */
  readonly additionalInfo?: string;

  /**
   * @schema ImportInstanceLaunchSpecification#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema ImportInstanceLaunchSpecification#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema ImportInstanceLaunchSpecification#GroupNames
   */
  readonly groupNames?: string[];

  /**
   * @schema ImportInstanceLaunchSpecification#InstanceInitiatedShutdownBehavior
   */
  readonly instanceInitiatedShutdownBehavior?: string;

  /**
   * @schema ImportInstanceLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ImportInstanceLaunchSpecification#Monitoring
   */
  readonly monitoring?: boolean;

  /**
   * @schema ImportInstanceLaunchSpecification#Placement
   */
  readonly placement?: Placement;

  /**
   * @schema ImportInstanceLaunchSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema ImportInstanceLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema ImportInstanceLaunchSpecification#UserData
   */
  readonly userData?: UserData;

}

/**
 * @schema SnapshotDiskContainer
 */
export interface SnapshotDiskContainer {
  /**
   * @schema SnapshotDiskContainer#Description
   */
  readonly description?: string;

  /**
   * @schema SnapshotDiskContainer#Format
   */
  readonly format?: string;

  /**
   * @schema SnapshotDiskContainer#Url
   */
  readonly url?: string;

  /**
   * @schema SnapshotDiskContainer#UserBucket
   */
  readonly userBucket?: UserBucket;

}

/**
 * @schema SnapshotTaskDetail
 */
export interface SnapshotTaskDetail {
  /**
   * @schema SnapshotTaskDetail#Description
   */
  readonly description?: string;

  /**
   * @schema SnapshotTaskDetail#DiskImageSize
   */
  readonly diskImageSize?: number;

  /**
   * @schema SnapshotTaskDetail#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema SnapshotTaskDetail#Format
   */
  readonly format?: string;

  /**
   * @schema SnapshotTaskDetail#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SnapshotTaskDetail#Progress
   */
  readonly progress?: string;

  /**
   * @schema SnapshotTaskDetail#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema SnapshotTaskDetail#Status
   */
  readonly status?: string;

  /**
   * @schema SnapshotTaskDetail#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema SnapshotTaskDetail#Url
   */
  readonly url?: string;

  /**
   * @schema SnapshotTaskDetail#UserBucket
   */
  readonly userBucket?: UserBucketDetails;

}

/**
 * @schema DiskImageDetail
 */
export interface DiskImageDetail {
  /**
   * @schema DiskImageDetail#Bytes
   */
  readonly bytes: number;

  /**
   * @schema DiskImageDetail#Format
   */
  readonly format: string;

  /**
   * @schema DiskImageDetail#ImportManifestUrl
   */
  readonly importManifestUrl: string;

}

/**
 * @schema VolumeDetail
 */
export interface VolumeDetail {
  /**
   * @schema VolumeDetail#Size
   */
  readonly size: number;

}

/**
 * @schema DnsServersOptionsModifyStructure
 */
export interface DnsServersOptionsModifyStructure {
  /**
   * @schema DnsServersOptionsModifyStructure#CustomDnsServers
   */
  readonly customDnsServers?: string[];

  /**
   * @schema DnsServersOptionsModifyStructure#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema LoadPermissionModifications
 */
export interface LoadPermissionModifications {
  /**
   * @schema LoadPermissionModifications#Add
   */
  readonly add?: LoadPermissionRequest[];

  /**
   * @schema LoadPermissionModifications#Remove
   */
  readonly remove?: LoadPermissionRequest[];

}

/**
 * @schema LaunchPermissionModifications
 */
export interface LaunchPermissionModifications {
  /**
   * @schema LaunchPermissionModifications#Add
   */
  readonly add?: LaunchPermission[];

  /**
   * @schema LaunchPermissionModifications#Remove
   */
  readonly remove?: LaunchPermission[];

}

/**
 * @schema InstanceBlockDeviceMappingSpecification
 */
export interface InstanceBlockDeviceMappingSpecification {
  /**
   * @schema InstanceBlockDeviceMappingSpecification#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema InstanceBlockDeviceMappingSpecification#Ebs
   */
  readonly ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * @schema InstanceBlockDeviceMappingSpecification#NoDevice
   */
  readonly noDevice?: string;

  /**
   * @schema InstanceBlockDeviceMappingSpecification#VirtualName
   */
  readonly virtualName?: string;

}

/**
 * @schema BlobAttributeValue
 */
export interface BlobAttributeValue {
  /**
   * @schema BlobAttributeValue#Value
   */
  readonly value?: any;

}

/**
 * @schema CapacityReservationSpecification
 */
export interface CapacityReservationSpecification {
  /**
   * @schema CapacityReservationSpecification#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema CapacityReservationSpecification#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: CapacityReservationTarget;

}

/**
 * @schema InstanceCreditSpecificationRequest
 */
export interface InstanceCreditSpecificationRequest {
  /**
   * @schema InstanceCreditSpecificationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceCreditSpecificationRequest#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema SuccessfulInstanceCreditSpecificationItem
 */
export interface SuccessfulInstanceCreditSpecificationItem {
  /**
   * @schema SuccessfulInstanceCreditSpecificationItem#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema UnsuccessfulInstanceCreditSpecificationItem
 */
export interface UnsuccessfulInstanceCreditSpecificationItem {
  /**
   * @schema UnsuccessfulInstanceCreditSpecificationItem#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema UnsuccessfulInstanceCreditSpecificationItem#Error
   */
  readonly error?: UnsuccessfulInstanceCreditSpecificationItemError;

}

/**
 * @schema InstanceStatusEvent
 */
export interface InstanceStatusEvent {
  /**
   * @schema InstanceStatusEvent#InstanceEventId
   */
  readonly instanceEventId?: string;

  /**
   * @schema InstanceStatusEvent#Code
   */
  readonly code?: string;

  /**
   * @schema InstanceStatusEvent#Description
   */
  readonly description?: string;

  /**
   * @schema InstanceStatusEvent#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema InstanceStatusEvent#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema InstanceStatusEvent#NotBeforeDeadline
   */
  readonly notBeforeDeadline?: string;

}

/**
 * @schema InstanceMetadataOptionsResponse
 */
export interface InstanceMetadataOptionsResponse {
  /**
   * @schema InstanceMetadataOptionsResponse#State
   */
  readonly state?: string;

  /**
   * @schema InstanceMetadataOptionsResponse#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema InstanceMetadataOptionsResponse#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema InstanceMetadataOptionsResponse#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema RemovePrefixListEntry
 */
export interface RemovePrefixListEntry {
  /**
   * @schema RemovePrefixListEntry#Cidr
   */
  readonly cidr: string;

}

/**
 * @schema NetworkInterfaceAttachmentChanges
 */
export interface NetworkInterfaceAttachmentChanges {
  /**
   * @schema NetworkInterfaceAttachmentChanges#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema NetworkInterfaceAttachmentChanges#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

}

/**
 * @schema ReservedInstancesConfiguration
 */
export interface ReservedInstancesConfiguration {
  /**
   * @schema ReservedInstancesConfiguration#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ReservedInstancesConfiguration#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema ReservedInstancesConfiguration#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ReservedInstancesConfiguration#Platform
   */
  readonly platform?: string;

  /**
   * @schema ReservedInstancesConfiguration#Scope
   */
  readonly scope?: string;

}

/**
 * @schema CreateVolumePermissionModifications
 */
export interface CreateVolumePermissionModifications {
  /**
   * @schema CreateVolumePermissionModifications#Add
   */
  readonly add?: CreateVolumePermission[];

  /**
   * @schema CreateVolumePermissionModifications#Remove
   */
  readonly remove?: CreateVolumePermission[];

}

/**
 * @schema LaunchTemplateConfig
 */
export interface LaunchTemplateConfig {
  /**
   * @schema LaunchTemplateConfig#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * @schema LaunchTemplateConfig#Overrides
   */
  readonly overrides?: LaunchTemplateOverrides[];

}

/**
 * @schema ModifyTransitGatewayOptions
 */
export interface ModifyTransitGatewayOptions {
  /**
   * @schema ModifyTransitGatewayOptions#VpnEcmpSupport
   */
  readonly vpnEcmpSupport?: string;

  /**
   * @schema ModifyTransitGatewayOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema ModifyTransitGatewayOptions#AutoAcceptSharedAttachments
   */
  readonly autoAcceptSharedAttachments?: string;

  /**
   * @schema ModifyTransitGatewayOptions#DefaultRouteTableAssociation
   */
  readonly defaultRouteTableAssociation?: string;

  /**
   * @schema ModifyTransitGatewayOptions#AssociationDefaultRouteTableId
   */
  readonly associationDefaultRouteTableId?: string;

  /**
   * @schema ModifyTransitGatewayOptions#DefaultRouteTablePropagation
   */
  readonly defaultRouteTablePropagation?: string;

  /**
   * @schema ModifyTransitGatewayOptions#PropagationDefaultRouteTableId
   */
  readonly propagationDefaultRouteTableId?: string;

}

/**
 * @schema ModifyTransitGatewayVpcAttachmentRequestOptions
 */
export interface ModifyTransitGatewayVpcAttachmentRequestOptions {
  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequestOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequestOptions#Ipv6Support
   */
  readonly ipv6Support?: string;

  /**
   * @schema ModifyTransitGatewayVpcAttachmentRequestOptions#ApplianceModeSupport
   */
  readonly applianceModeSupport?: string;

}

/**
 * @schema PeeringConnectionOptionsRequest
 */
export interface PeeringConnectionOptionsRequest {
  /**
   * @schema PeeringConnectionOptionsRequest#AllowDnsResolutionFromRemoteVpc
   */
  readonly allowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @schema PeeringConnectionOptionsRequest#AllowEgressFromLocalClassicLinkToRemoteVpc
   */
  readonly allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @schema PeeringConnectionOptionsRequest#AllowEgressFromLocalVpcToRemoteClassicLink
   */
  readonly allowEgressFromLocalVpcToRemoteClassicLink?: boolean;

}

/**
 * @schema PeeringConnectionOptions
 */
export interface PeeringConnectionOptions {
  /**
   * @schema PeeringConnectionOptions#AllowDnsResolutionFromRemoteVpc
   */
  readonly allowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @schema PeeringConnectionOptions#AllowEgressFromLocalClassicLinkToRemoteVpc
   */
  readonly allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @schema PeeringConnectionOptions#AllowEgressFromLocalVpcToRemoteClassicLink
   */
  readonly allowEgressFromLocalVpcToRemoteClassicLink?: boolean;

}

/**
 * @schema ModifyVpnTunnelOptionsSpecification
 */
export interface ModifyVpnTunnelOptionsSpecification {
  /**
   * @schema ModifyVpnTunnelOptionsSpecification#TunnelInsideCidr
   */
  readonly tunnelInsideCidr?: string;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#TunnelInsideIpv6Cidr
   */
  readonly tunnelInsideIpv6Cidr?: string;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#PreSharedKey
   */
  readonly preSharedKey?: string;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase1LifetimeSeconds
   */
  readonly phase1LifetimeSeconds?: number;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase2LifetimeSeconds
   */
  readonly phase2LifetimeSeconds?: number;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#RekeyMarginTimeSeconds
   */
  readonly rekeyMarginTimeSeconds?: number;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#RekeyFuzzPercentage
   */
  readonly rekeyFuzzPercentage?: number;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#ReplayWindowSize
   */
  readonly replayWindowSize?: number;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#DPDTimeoutSeconds
   */
  readonly dpdTimeoutSeconds?: number;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#DPDTimeoutAction
   */
  readonly dpdTimeoutAction?: string;

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase1EncryptionAlgorithms
   */
  readonly phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase2EncryptionAlgorithms
   */
  readonly phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase1IntegrityAlgorithms
   */
  readonly phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase2IntegrityAlgorithms
   */
  readonly phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase1DHGroupNumbers
   */
  readonly phase1DhGroupNumbers?: Phase1DhGroupNumbersRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#Phase2DHGroupNumbers
   */
  readonly phase2DhGroupNumbers?: Phase2DhGroupNumbersRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#IKEVersions
   */
  readonly ikeVersions?: IkeVersionsRequestListValue[];

  /**
   * @schema ModifyVpnTunnelOptionsSpecification#StartupAction
   */
  readonly startupAction?: string;

}

/**
 * @schema InstanceMonitoring
 */
export interface InstanceMonitoring {
  /**
   * @schema InstanceMonitoring#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceMonitoring#Monitoring
   */
  readonly monitoring?: Monitoring;

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
 * @schema ReservedInstanceLimitPrice
 */
export interface ReservedInstanceLimitPrice {
  /**
   * @schema ReservedInstanceLimitPrice#Amount
   */
  readonly amount?: number;

  /**
   * @schema ReservedInstanceLimitPrice#CurrencyCode
   */
  readonly currencyCode?: string;

}

/**
 * @schema PurchaseRequest
 */
export interface PurchaseRequest {
  /**
   * @schema PurchaseRequest#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema PurchaseRequest#PurchaseToken
   */
  readonly purchaseToken: string;

}

/**
 * @schema RegisterInstanceTagAttributeRequest
 */
export interface RegisterInstanceTagAttributeRequest {
  /**
   * @schema RegisterInstanceTagAttributeRequest#IncludeAllTagsOfInstance
   */
  readonly includeAllTagsOfInstance?: boolean;

  /**
   * @schema RegisterInstanceTagAttributeRequest#InstanceTagKeys
   */
  readonly instanceTagKeys?: string[];

}

/**
 * @schema TransitGatewayMulticastRegisteredGroupMembers
 */
export interface TransitGatewayMulticastRegisteredGroupMembers {
  /**
   * @schema TransitGatewayMulticastRegisteredGroupMembers#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema TransitGatewayMulticastRegisteredGroupMembers#RegisteredNetworkInterfaceIds
   */
  readonly registeredNetworkInterfaceIds?: string[];

  /**
   * @schema TransitGatewayMulticastRegisteredGroupMembers#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema TransitGatewayMulticastRegisteredGroupSources
 */
export interface TransitGatewayMulticastRegisteredGroupSources {
  /**
   * @schema TransitGatewayMulticastRegisteredGroupSources#TransitGatewayMulticastDomainId
   */
  readonly transitGatewayMulticastDomainId?: string;

  /**
   * @schema TransitGatewayMulticastRegisteredGroupSources#RegisteredNetworkInterfaceIds
   */
  readonly registeredNetworkInterfaceIds?: string[];

  /**
   * @schema TransitGatewayMulticastRegisteredGroupSources#GroupIpAddress
   */
  readonly groupIpAddress?: string;

}

/**
 * @schema SpotFleetRequestConfigData
 */
export interface SpotFleetRequestConfigData {
  /**
   * @schema SpotFleetRequestConfigData#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema SpotFleetRequestConfigData#OnDemandAllocationStrategy
   */
  readonly onDemandAllocationStrategy?: string;

  /**
   * @schema SpotFleetRequestConfigData#SpotMaintenanceStrategies
   */
  readonly spotMaintenanceStrategies?: SpotMaintenanceStrategies;

  /**
   * @schema SpotFleetRequestConfigData#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema SpotFleetRequestConfigData#ExcessCapacityTerminationPolicy
   */
  readonly excessCapacityTerminationPolicy?: string;

  /**
   * @schema SpotFleetRequestConfigData#FulfilledCapacity
   */
  readonly fulfilledCapacity?: number;

  /**
   * @schema SpotFleetRequestConfigData#OnDemandFulfilledCapacity
   */
  readonly onDemandFulfilledCapacity?: number;

  /**
   * @schema SpotFleetRequestConfigData#IamFleetRole
   */
  readonly iamFleetRole: string;

  /**
   * @schema SpotFleetRequestConfigData#LaunchSpecifications
   */
  readonly launchSpecifications?: SpotFleetLaunchSpecification[];

  /**
   * @schema SpotFleetRequestConfigData#LaunchTemplateConfigs
   */
  readonly launchTemplateConfigs?: LaunchTemplateConfig[];

  /**
   * @schema SpotFleetRequestConfigData#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema SpotFleetRequestConfigData#TargetCapacity
   */
  readonly targetCapacity: number;

  /**
   * @schema SpotFleetRequestConfigData#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

  /**
   * @schema SpotFleetRequestConfigData#OnDemandMaxTotalPrice
   */
  readonly onDemandMaxTotalPrice?: string;

  /**
   * @schema SpotFleetRequestConfigData#SpotMaxTotalPrice
   */
  readonly spotMaxTotalPrice?: string;

  /**
   * @schema SpotFleetRequestConfigData#TerminateInstancesWithExpiration
   */
  readonly terminateInstancesWithExpiration?: boolean;

  /**
   * @schema SpotFleetRequestConfigData#Type
   */
  readonly type?: string;

  /**
   * @schema SpotFleetRequestConfigData#ValidFrom
   */
  readonly validFrom?: string;

  /**
   * @schema SpotFleetRequestConfigData#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema SpotFleetRequestConfigData#ReplaceUnhealthyInstances
   */
  readonly replaceUnhealthyInstances?: boolean;

  /**
   * @schema SpotFleetRequestConfigData#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

  /**
   * @schema SpotFleetRequestConfigData#LoadBalancersConfig
   */
  readonly loadBalancersConfig?: LoadBalancersConfig;

  /**
   * @schema SpotFleetRequestConfigData#InstancePoolsToUseCount
   */
  readonly instancePoolsToUseCount?: number;

  /**
   * @schema SpotFleetRequestConfigData#TagSpecifications
   */
  readonly tagSpecifications?: TagSpecification[];

}

/**
 * @schema RequestSpotLaunchSpecification
 */
export interface RequestSpotLaunchSpecification {
  /**
   * @schema RequestSpotLaunchSpecification#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema RequestSpotLaunchSpecification#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema RequestSpotLaunchSpecification#AddressingType
   */
  readonly addressingType?: string;

  /**
   * @schema RequestSpotLaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema RequestSpotLaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema RequestSpotLaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * @schema RequestSpotLaunchSpecification#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema RequestSpotLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema RequestSpotLaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema RequestSpotLaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema RequestSpotLaunchSpecification#Monitoring
   */
  readonly monitoring?: RunInstancesMonitoringEnabled;

  /**
   * @schema RequestSpotLaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @schema RequestSpotLaunchSpecification#Placement
   */
  readonly placement?: SpotPlacement;

  /**
   * @schema RequestSpotLaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema RequestSpotLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema RequestSpotLaunchSpecification#UserData
   */
  readonly userData?: string;

}

/**
 * @schema RunInstancesMonitoringEnabled
 */
export interface RunInstancesMonitoringEnabled {
  /**
   * @schema RunInstancesMonitoringEnabled#Enabled
   */
  readonly enabled: boolean;

}

/**
 * @schema Placement
 */
export interface Placement {
  /**
   * @schema Placement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Placement#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema Placement#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Placement#PartitionNumber
   */
  readonly partitionNumber?: number;

  /**
   * @schema Placement#HostId
   */
  readonly hostId?: string;

  /**
   * @schema Placement#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Placement#SpreadDomain
   */
  readonly spreadDomain?: string;

  /**
   * @schema Placement#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

}

/**
 * @schema InstanceNetworkInterfaceSpecification
 */
export interface InstanceNetworkInterfaceSpecification {
  /**
   * @schema InstanceNetworkInterfaceSpecification#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema InstanceNetworkInterfaceSpecification#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema InstanceNetworkInterfaceSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema InstanceNetworkInterfaceSpecification#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema InstanceNetworkInterfaceSpecification#Groups
   */
  readonly groups?: string[];

  /**
   * @schema InstanceNetworkInterfaceSpecification#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema InstanceNetworkInterfaceSpecification#Ipv6Addresses
   */
  readonly ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @schema InstanceNetworkInterfaceSpecification#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema InstanceNetworkInterfaceSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema InstanceNetworkInterfaceSpecification#PrivateIpAddresses
   */
  readonly privateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @schema InstanceNetworkInterfaceSpecification#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema InstanceNetworkInterfaceSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema InstanceNetworkInterfaceSpecification#AssociateCarrierIpAddress
   */
  readonly associateCarrierIpAddress?: boolean;

  /**
   * @schema InstanceNetworkInterfaceSpecification#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema InstanceNetworkInterfaceSpecification#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema ElasticGpuSpecification
 */
export interface ElasticGpuSpecification {
  /**
   * @schema ElasticGpuSpecification#Type
   */
  readonly type: string;

}

/**
 * @schema ElasticInferenceAccelerator
 */
export interface ElasticInferenceAccelerator {
  /**
   * @schema ElasticInferenceAccelerator#Type
   */
  readonly type: string;

  /**
   * @schema ElasticInferenceAccelerator#Count
   */
  readonly count?: number;

}

/**
 * @schema LaunchTemplateSpecification
 */
export interface LaunchTemplateSpecification {
  /**
   * @schema LaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema LaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema LaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema InstanceMarketOptionsRequest
 */
export interface InstanceMarketOptionsRequest {
  /**
   * @schema InstanceMarketOptionsRequest#MarketType
   */
  readonly marketType?: string;

  /**
   * @schema InstanceMarketOptionsRequest#SpotOptions
   */
  readonly spotOptions?: SpotMarketOptions;

}

/**
 * @schema CreditSpecificationRequest
 */
export interface CreditSpecificationRequest {
  /**
   * @schema CreditSpecificationRequest#CpuCredits
   */
  readonly cpuCredits: string;

}

/**
 * @schema CpuOptionsRequest
 */
export interface CpuOptionsRequest {
  /**
   * @schema CpuOptionsRequest#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema CpuOptionsRequest#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema HibernationOptionsRequest
 */
export interface HibernationOptionsRequest {
  /**
   * @schema HibernationOptionsRequest#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema LicenseConfigurationRequest
 */
export interface LicenseConfigurationRequest {
  /**
   * @schema LicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema InstanceMetadataOptionsRequest
 */
export interface InstanceMetadataOptionsRequest {
  /**
   * @schema InstanceMetadataOptionsRequest#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema InstanceMetadataOptionsRequest#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema InstanceMetadataOptionsRequest#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema EnclaveOptionsRequest
 */
export interface EnclaveOptionsRequest {
  /**
   * @schema EnclaveOptionsRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#AmiLaunchIndex
   */
  readonly amiLaunchIndex?: number;

  /**
   * @schema Instance#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Instance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Instance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Instance#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema Instance#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema Instance#LaunchTime
   */
  readonly launchTime?: string;

  /**
   * @schema Instance#Monitoring
   */
  readonly monitoring?: Monitoring;

  /**
   * @schema Instance#Placement
   */
  readonly placement?: Placement;

  /**
   * @schema Instance#Platform
   */
  readonly platform?: string;

  /**
   * @schema Instance#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema Instance#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema Instance#ProductCodes
   */
  readonly productCodes?: ProductCode[];

  /**
   * @schema Instance#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema Instance#PublicIpAddress
   */
  readonly publicIpAddress?: string;

  /**
   * @schema Instance#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema Instance#State
   */
  readonly state?: InstanceState;

  /**
   * @schema Instance#StateTransitionReason
   */
  readonly stateTransitionReason?: string;

  /**
   * @schema Instance#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Instance#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Instance#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Instance#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * @schema Instance#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Instance#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Instance#EnaSupport
   */
  readonly enaSupport?: boolean;

  /**
   * @schema Instance#Hypervisor
   */
  readonly hypervisor?: string;

  /**
   * @schema Instance#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfile;

  /**
   * @schema Instance#InstanceLifecycle
   */
  readonly instanceLifecycle?: string;

  /**
   * @schema Instance#ElasticGpuAssociations
   */
  readonly elasticGpuAssociations?: ElasticGpuAssociation[];

  /**
   * @schema Instance#ElasticInferenceAcceleratorAssociations
   */
  readonly elasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];

  /**
   * @schema Instance#NetworkInterfaces
   */
  readonly networkInterfaces?: InstanceNetworkInterface[];

  /**
   * @schema Instance#OutpostArn
   */
  readonly outpostArn?: string;

  /**
   * @schema Instance#RootDeviceName
   */
  readonly rootDeviceName?: string;

  /**
   * @schema Instance#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema Instance#SecurityGroups
   */
  readonly securityGroups?: GroupIdentifier[];

  /**
   * @schema Instance#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema Instance#SpotInstanceRequestId
   */
  readonly spotInstanceRequestId?: string;

  /**
   * @schema Instance#SriovNetSupport
   */
  readonly sriovNetSupport?: string;

  /**
   * @schema Instance#StateReason
   */
  readonly stateReason?: StateReason;

  /**
   * @schema Instance#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Instance#VirtualizationType
   */
  readonly virtualizationType?: string;

  /**
   * @schema Instance#CpuOptions
   */
  readonly cpuOptions?: CpuOptions;

  /**
   * @schema Instance#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema Instance#CapacityReservationSpecification
   */
  readonly capacityReservationSpecification?: CapacityReservationSpecificationResponse;

  /**
   * @schema Instance#HibernationOptions
   */
  readonly hibernationOptions?: HibernationOptions;

  /**
   * @schema Instance#Licenses
   */
  readonly licenses?: LicenseConfiguration[];

  /**
   * @schema Instance#MetadataOptions
   */
  readonly metadataOptions?: InstanceMetadataOptionsResponse;

  /**
   * @schema Instance#EnclaveOptions
   */
  readonly enclaveOptions?: EnclaveOptions;

}

/**
 * @schema ScheduledInstancesLaunchSpecification
 */
export interface ScheduledInstancesLaunchSpecification {
  /**
   * @schema ScheduledInstancesLaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: ScheduledInstancesBlockDeviceMapping[];

  /**
   * @schema ScheduledInstancesLaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema ScheduledInstancesLaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: ScheduledInstancesIamInstanceProfile;

  /**
   * @schema ScheduledInstancesLaunchSpecification#ImageId
   */
  readonly imageId: string;

  /**
   * @schema ScheduledInstancesLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema ScheduledInstancesLaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema ScheduledInstancesLaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema ScheduledInstancesLaunchSpecification#Monitoring
   */
  readonly monitoring?: ScheduledInstancesMonitoring;

  /**
   * @schema ScheduledInstancesLaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: ScheduledInstancesNetworkInterface[];

  /**
   * @schema ScheduledInstancesLaunchSpecification#Placement
   */
  readonly placement?: ScheduledInstancesPlacement;

  /**
   * @schema ScheduledInstancesLaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema ScheduledInstancesLaunchSpecification#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ScheduledInstancesLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema ScheduledInstancesLaunchSpecification#UserData
   */
  readonly userData?: string;

}

/**
 * @schema TransitGatewayMulticastGroup
 */
export interface TransitGatewayMulticastGroup {
  /**
   * @schema TransitGatewayMulticastGroup#GroupIpAddress
   */
  readonly groupIpAddress?: string;

  /**
   * @schema TransitGatewayMulticastGroup#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayMulticastGroup#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema TransitGatewayMulticastGroup#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayMulticastGroup#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayMulticastGroup#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema TransitGatewayMulticastGroup#GroupMember
   */
  readonly groupMember?: boolean;

  /**
   * @schema TransitGatewayMulticastGroup#GroupSource
   */
  readonly groupSource?: boolean;

  /**
   * @schema TransitGatewayMulticastGroup#MemberType
   */
  readonly memberType?: string;

  /**
   * @schema TransitGatewayMulticastGroup#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema InstanceStateChange
 */
export interface InstanceStateChange {
  /**
   * @schema InstanceStateChange#CurrentState
   */
  readonly currentState?: InstanceState;

  /**
   * @schema InstanceStateChange#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceStateChange#PreviousState
   */
  readonly previousState?: InstanceState;

}

/**
 * @schema TerminateConnectionStatus
 */
export interface TerminateConnectionStatus {
  /**
   * @schema TerminateConnectionStatus#ConnectionId
   */
  readonly connectionId?: string;

  /**
   * @schema TerminateConnectionStatus#PreviousStatus
   */
  readonly previousStatus?: ClientVpnConnectionStatus;

  /**
   * @schema TerminateConnectionStatus#CurrentStatus
   */
  readonly currentStatus?: ClientVpnConnectionStatus;

}

/**
 * @schema PeeringTgwInfo
 */
export interface PeeringTgwInfo {
  /**
   * @schema PeeringTgwInfo#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema PeeringTgwInfo#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema PeeringTgwInfo#Region
   */
  readonly region?: string;

}

/**
 * @schema PeeringAttachmentStatus
 */
export interface PeeringAttachmentStatus {
  /**
   * @schema PeeringAttachmentStatus#Code
   */
  readonly code?: string;

  /**
   * @schema PeeringAttachmentStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema TransitGatewayVpcAttachmentOptions
 */
export interface TransitGatewayVpcAttachmentOptions {
  /**
   * @schema TransitGatewayVpcAttachmentOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema TransitGatewayVpcAttachmentOptions#Ipv6Support
   */
  readonly ipv6Support?: string;

  /**
   * @schema TransitGatewayVpcAttachmentOptions#ApplianceModeSupport
   */
  readonly applianceModeSupport?: string;

}

/**
 * @schema UnsuccessfulItemError
 */
export interface UnsuccessfulItemError {
  /**
   * @schema UnsuccessfulItemError#Code
   */
  readonly code?: string;

  /**
   * @schema UnsuccessfulItemError#Message
   */
  readonly message?: string;

}

/**
 * @schema VpcPeeringConnectionVpcInfo
 */
export interface VpcPeeringConnectionVpcInfo {
  /**
   * @schema VpcPeeringConnectionVpcInfo#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema VpcPeeringConnectionVpcInfo#Ipv6CidrBlockSet
   */
  readonly ipv6CidrBlockSet?: Ipv6CidrBlock[];

  /**
   * @schema VpcPeeringConnectionVpcInfo#CidrBlockSet
   */
  readonly cidrBlockSet?: CidrBlock[];

  /**
   * @schema VpcPeeringConnectionVpcInfo#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema VpcPeeringConnectionVpcInfo#PeeringOptions
   */
  readonly peeringOptions?: VpcPeeringConnectionOptionsDescription;

  /**
   * @schema VpcPeeringConnectionVpcInfo#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcPeeringConnectionVpcInfo#Region
   */
  readonly region?: string;

}

/**
 * @schema VpcPeeringConnectionStateReason
 */
export interface VpcPeeringConnectionStateReason {
  /**
   * @schema VpcPeeringConnectionStateReason#Code
   */
  readonly code?: string;

  /**
   * @schema VpcPeeringConnectionStateReason#Message
   */
  readonly message?: string;

}

/**
 * @schema IamInstanceProfile
 */
export interface IamInstanceProfile {
  /**
   * @schema IamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema IamInstanceProfile#Id
   */
  readonly id?: string;

}

/**
 * @schema SubnetCidrBlockState
 */
export interface SubnetCidrBlockState {
  /**
   * @schema SubnetCidrBlockState#State
   */
  readonly state?: string;

  /**
   * @schema SubnetCidrBlockState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema SubnetAssociation
 */
export interface SubnetAssociation {
  /**
   * @schema SubnetAssociation#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SubnetAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema VpcCidrBlockState
 */
export interface VpcCidrBlockState {
  /**
   * @schema VpcCidrBlockState#State
   */
  readonly state?: string;

  /**
   * @schema VpcCidrBlockState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema IpRange
 */
export interface IpRange {
  /**
   * @schema IpRange#CidrIp
   */
  readonly cidrIp?: string;

  /**
   * @schema IpRange#Description
   */
  readonly description?: string;

}

/**
 * @schema Ipv6Range
 */
export interface Ipv6Range {
  /**
   * @schema Ipv6Range#CidrIpv6
   */
  readonly cidrIpv6?: string;

  /**
   * @schema Ipv6Range#Description
   */
  readonly description?: string;

}

/**
 * @schema PrefixListId
 */
export interface PrefixListId {
  /**
   * @schema PrefixListId#Description
   */
  readonly description?: string;

  /**
   * @schema PrefixListId#PrefixListId
   */
  readonly prefixListId?: string;

}

/**
 * @schema UserIdGroupPair
 */
export interface UserIdGroupPair {
  /**
   * @schema UserIdGroupPair#Description
   */
  readonly description?: string;

  /**
   * @schema UserIdGroupPair#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema UserIdGroupPair#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UserIdGroupPair#PeeringStatus
   */
  readonly peeringStatus?: string;

  /**
   * @schema UserIdGroupPair#UserId
   */
  readonly userId?: string;

  /**
   * @schema UserIdGroupPair#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema UserIdGroupPair#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema S3Storage
 */
export interface S3Storage {
  /**
   * @schema S3Storage#AWSAccessKeyId
   */
  readonly awsAccessKeyId?: string;

  /**
   * @schema S3Storage#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Storage#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema S3Storage#UploadPolicy
   */
  readonly uploadPolicy?: any;

  /**
   * @schema S3Storage#UploadPolicySignature
   */
  readonly uploadPolicySignature?: string;

}

/**
 * @schema BundleTaskError
 */
export interface BundleTaskError {
  /**
   * @schema BundleTaskError#Code
   */
  readonly code?: string;

  /**
   * @schema BundleTaskError#Message
   */
  readonly message?: string;

}

/**
 * @schema InstanceCount
 */
export interface InstanceCount {
  /**
   * @schema InstanceCount#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema InstanceCount#State
   */
  readonly state?: string;

}

/**
 * @schema PriceSchedule
 */
export interface PriceSchedule {
  /**
   * @schema PriceSchedule#Active
   */
  readonly active?: boolean;

  /**
   * @schema PriceSchedule#CurrencyCode
   */
  readonly currencyCode?: string;

  /**
   * @schema PriceSchedule#Price
   */
  readonly price?: number;

  /**
   * @schema PriceSchedule#Term
   */
  readonly term?: number;

}

/**
 * @schema CancelSpotFleetRequestsError
 */
export interface CancelSpotFleetRequestsError {
  /**
   * @schema CancelSpotFleetRequestsError#Code
   */
  readonly code?: string;

  /**
   * @schema CancelSpotFleetRequestsError#Message
   */
  readonly message?: string;

}

/**
 * @schema DirectoryServiceAuthenticationRequest
 */
export interface DirectoryServiceAuthenticationRequest {
  /**
   * @schema DirectoryServiceAuthenticationRequest#DirectoryId
   */
  readonly directoryId?: string;

}

/**
 * @schema CertificateAuthenticationRequest
 */
export interface CertificateAuthenticationRequest {
  /**
   * @schema CertificateAuthenticationRequest#ClientRootCertificateChainArn
   */
  readonly clientRootCertificateChainArn?: string;

}

/**
 * @schema FederatedAuthenticationRequest
 */
export interface FederatedAuthenticationRequest {
  /**
   * @schema FederatedAuthenticationRequest#SAMLProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema FederatedAuthenticationRequest#SelfServiceSAMLProviderArn
   */
  readonly selfServiceSamlProviderArn?: string;

}

/**
 * @schema DhcpConfiguration
 */
export interface DhcpConfiguration {
  /**
   * @schema DhcpConfiguration#Key
   */
  readonly key?: string;

  /**
   * @schema DhcpConfiguration#Values
   */
  readonly values?: AttributeValue[];

}

/**
 * @schema InternetGatewayAttachment
 */
export interface InternetGatewayAttachment {
  /**
   * @schema InternetGatewayAttachment#State
   */
  readonly state?: string;

  /**
   * @schema InternetGatewayAttachment#VpcId
   */
  readonly vpcId?: string;

}

/**
 * @schema FleetSpotMaintenanceStrategiesRequest
 */
export interface FleetSpotMaintenanceStrategiesRequest {
  /**
   * @schema FleetSpotMaintenanceStrategiesRequest#CapacityRebalance
   */
  readonly capacityRebalance?: FleetSpotCapacityRebalanceRequest;

}

/**
 * @schema CapacityReservationOptionsRequest
 */
export interface CapacityReservationOptionsRequest {
  /**
   * @schema CapacityReservationOptionsRequest#UsageStrategy
   */
  readonly usageStrategy?: string;

}

/**
 * @schema FleetLaunchTemplateSpecificationRequest
 */
export interface FleetLaunchTemplateSpecificationRequest {
  /**
   * @schema FleetLaunchTemplateSpecificationRequest#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema FleetLaunchTemplateSpecificationRequest#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema FleetLaunchTemplateSpecificationRequest#Version
   */
  readonly version?: string;

}

/**
 * @schema FleetLaunchTemplateOverridesRequest
 */
export interface FleetLaunchTemplateOverridesRequest {
  /**
   * @schema FleetLaunchTemplateOverridesRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema FleetLaunchTemplateOverridesRequest#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema FleetLaunchTemplateOverridesRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema FleetLaunchTemplateOverridesRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FleetLaunchTemplateOverridesRequest#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema FleetLaunchTemplateOverridesRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema FleetLaunchTemplateOverridesRequest#Placement
   */
  readonly placement?: Placement;

}

/**
 * @schema LaunchTemplateAndOverridesResponse
 */
export interface LaunchTemplateAndOverridesResponse {
  /**
   * @schema LaunchTemplateAndOverridesResponse#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * @schema LaunchTemplateAndOverridesResponse#Overrides
   */
  readonly overrides?: FleetLaunchTemplateOverrides;

}

/**
 * @schema EbsBlockDevice
 */
export interface EbsBlockDevice {
  /**
   * @schema EbsBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema EbsBlockDevice#Iops
   */
  readonly iops?: number;

  /**
   * @schema EbsBlockDevice#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsBlockDevice#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsBlockDevice#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema EbsBlockDevice#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema EbsBlockDevice#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema ExportToS3Task
 */
export interface ExportToS3Task {
  /**
   * @schema ExportToS3Task#ContainerFormat
   */
  readonly containerFormat?: string;

  /**
   * @schema ExportToS3Task#DiskImageFormat
   */
  readonly diskImageFormat?: string;

  /**
   * @schema ExportToS3Task#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema ExportToS3Task#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema InstanceExportDetails
 */
export interface InstanceExportDetails {
  /**
   * @schema InstanceExportDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceExportDetails#TargetEnvironment
   */
  readonly targetEnvironment?: string;

}

/**
 * @schema LaunchTemplateIamInstanceProfileSpecificationRequest
 */
export interface LaunchTemplateIamInstanceProfileSpecificationRequest {
  /**
   * @schema LaunchTemplateIamInstanceProfileSpecificationRequest#Arn
   */
  readonly arn?: string;

  /**
   * @schema LaunchTemplateIamInstanceProfileSpecificationRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema LaunchTemplateBlockDeviceMappingRequest
 */
export interface LaunchTemplateBlockDeviceMappingRequest {
  /**
   * @schema LaunchTemplateBlockDeviceMappingRequest#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema LaunchTemplateBlockDeviceMappingRequest#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema LaunchTemplateBlockDeviceMappingRequest#Ebs
   */
  readonly ebs?: LaunchTemplateEbsBlockDeviceRequest;

  /**
   * @schema LaunchTemplateBlockDeviceMappingRequest#NoDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecificationRequest {
  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#AssociateCarrierIpAddress
   */
  readonly associateCarrierIpAddress?: boolean;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Groups
   */
  readonly groups?: string[];

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#Ipv6Addresses
   */
  readonly ipv6Addresses?: InstanceIpv6AddressRequest[];

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#PrivateIpAddresses
   */
  readonly privateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecificationRequest#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema LaunchTemplatesMonitoringRequest
 */
export interface LaunchTemplatesMonitoringRequest {
  /**
   * @schema LaunchTemplatesMonitoringRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema LaunchTemplatePlacementRequest
 */
export interface LaunchTemplatePlacementRequest {
  /**
   * @schema LaunchTemplatePlacementRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#HostId
   */
  readonly hostId?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#SpreadDomain
   */
  readonly spreadDomain?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

  /**
   * @schema LaunchTemplatePlacementRequest#PartitionNumber
   */
  readonly partitionNumber?: number;

}

/**
 * @schema LaunchTemplateTagSpecificationRequest
 */
export interface LaunchTemplateTagSpecificationRequest {
  /**
   * @schema LaunchTemplateTagSpecificationRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LaunchTemplateTagSpecificationRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema LaunchTemplateElasticInferenceAccelerator
 */
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * @schema LaunchTemplateElasticInferenceAccelerator#Type
   */
  readonly type: string;

  /**
   * @schema LaunchTemplateElasticInferenceAccelerator#Count
   */
  readonly count?: number;

}

/**
 * @schema LaunchTemplateInstanceMarketOptionsRequest
 */
export interface LaunchTemplateInstanceMarketOptionsRequest {
  /**
   * @schema LaunchTemplateInstanceMarketOptionsRequest#MarketType
   */
  readonly marketType?: string;

  /**
   * @schema LaunchTemplateInstanceMarketOptionsRequest#SpotOptions
   */
  readonly spotOptions?: LaunchTemplateSpotMarketOptionsRequest;

}

/**
 * @schema LaunchTemplateCpuOptionsRequest
 */
export interface LaunchTemplateCpuOptionsRequest {
  /**
   * @schema LaunchTemplateCpuOptionsRequest#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema LaunchTemplateCpuOptionsRequest#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema LaunchTemplateCapacityReservationSpecificationRequest
 */
export interface LaunchTemplateCapacityReservationSpecificationRequest {
  /**
   * @schema LaunchTemplateCapacityReservationSpecificationRequest#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema LaunchTemplateCapacityReservationSpecificationRequest#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: CapacityReservationTarget;

}

/**
 * @schema LaunchTemplateLicenseConfigurationRequest
 */
export interface LaunchTemplateLicenseConfigurationRequest {
  /**
   * @schema LaunchTemplateLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema LaunchTemplateHibernationOptionsRequest
 */
export interface LaunchTemplateHibernationOptionsRequest {
  /**
   * @schema LaunchTemplateHibernationOptionsRequest#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema LaunchTemplateInstanceMetadataOptionsRequest
 */
export interface LaunchTemplateInstanceMetadataOptionsRequest {
  /**
   * @schema LaunchTemplateInstanceMetadataOptionsRequest#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema LaunchTemplateInstanceMetadataOptionsRequest#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema LaunchTemplateInstanceMetadataOptionsRequest#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema LaunchTemplateEnclaveOptionsRequest
 */
export interface LaunchTemplateEnclaveOptionsRequest {
  /**
   * @schema LaunchTemplateEnclaveOptionsRequest#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema ValidationError
 */
export interface ValidationError {
  /**
   * @schema ValidationError#Code
   */
  readonly code?: string;

  /**
   * @schema ValidationError#Message
   */
  readonly message?: string;

}

/**
 * @schema NatGatewayAddress
 */
export interface NatGatewayAddress {
  /**
   * @schema NatGatewayAddress#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema NatGatewayAddress#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema NatGatewayAddress#PrivateIp
   */
  readonly privateIp?: string;

  /**
   * @schema NatGatewayAddress#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * @schema ProvisionedBandwidth
 */
export interface ProvisionedBandwidth {
  /**
   * @schema ProvisionedBandwidth#ProvisionTime
   */
  readonly provisionTime?: string;

  /**
   * @schema ProvisionedBandwidth#Provisioned
   */
  readonly provisioned?: string;

  /**
   * @schema ProvisionedBandwidth#RequestTime
   */
  readonly requestTime?: string;

  /**
   * @schema ProvisionedBandwidth#Requested
   */
  readonly requested?: string;

  /**
   * @schema ProvisionedBandwidth#Status
   */
  readonly status?: string;

}

/**
 * @schema NetworkAclAssociation
 */
export interface NetworkAclAssociation {
  /**
   * @schema NetworkAclAssociation#NetworkAclAssociationId
   */
  readonly networkAclAssociationId?: string;

  /**
   * @schema NetworkAclAssociation#NetworkAclId
   */
  readonly networkAclId?: string;

  /**
   * @schema NetworkAclAssociation#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema NetworkAclEntry
 */
export interface NetworkAclEntry {
  /**
   * @schema NetworkAclEntry#CidrBlock
   */
  readonly cidrBlock?: string;

  /**
   * @schema NetworkAclEntry#Egress
   */
  readonly egress?: boolean;

  /**
   * @schema NetworkAclEntry#IcmpTypeCode
   */
  readonly icmpTypeCode?: IcmpTypeCode;

  /**
   * @schema NetworkAclEntry#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

  /**
   * @schema NetworkAclEntry#PortRange
   */
  readonly portRange?: PortRange;

  /**
   * @schema NetworkAclEntry#Protocol
   */
  readonly protocol?: string;

  /**
   * @schema NetworkAclEntry#RuleAction
   */
  readonly ruleAction?: string;

  /**
   * @schema NetworkAclEntry#RuleNumber
   */
  readonly ruleNumber?: number;

}

/**
 * @schema NetworkInterfaceAssociation
 */
export interface NetworkInterfaceAssociation {
  /**
   * @schema NetworkInterfaceAssociation#AllocationId
   */
  readonly allocationId?: string;

  /**
   * @schema NetworkInterfaceAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema NetworkInterfaceAssociation#IpOwnerId
   */
  readonly ipOwnerId?: string;

  /**
   * @schema NetworkInterfaceAssociation#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema NetworkInterfaceAssociation#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema NetworkInterfaceAssociation#CustomerOwnedIp
   */
  readonly customerOwnedIp?: string;

  /**
   * @schema NetworkInterfaceAssociation#CarrierIp
   */
  readonly carrierIp?: string;

}

/**
 * @schema NetworkInterfaceIpv6Address
 */
export interface NetworkInterfaceIpv6Address {
  /**
   * @schema NetworkInterfaceIpv6Address#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema NetworkInterfacePrivateIpAddress
 */
export interface NetworkInterfacePrivateIpAddress {
  /**
   * @schema NetworkInterfacePrivateIpAddress#Association
   */
  readonly association?: NetworkInterfaceAssociation;

  /**
   * @schema NetworkInterfacePrivateIpAddress#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema NetworkInterfacePrivateIpAddress#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema NetworkInterfacePrivateIpAddress#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema NetworkInterfacePermissionState
 */
export interface NetworkInterfacePermissionState {
  /**
   * @schema NetworkInterfacePermissionState#State
   */
  readonly state?: string;

  /**
   * @schema NetworkInterfacePermissionState#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema RouteTableAssociation
 */
export interface RouteTableAssociation {
  /**
   * @schema RouteTableAssociation#Main
   */
  readonly main?: boolean;

  /**
   * @schema RouteTableAssociation#RouteTableAssociationId
   */
  readonly routeTableAssociationId?: string;

  /**
   * @schema RouteTableAssociation#RouteTableId
   */
  readonly routeTableId?: string;

  /**
   * @schema RouteTableAssociation#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema RouteTableAssociation#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema RouteTableAssociation#AssociationState
   */
  readonly associationState?: RouteTableAssociationState;

}

/**
 * @schema PropagatingVgw
 */
export interface PropagatingVgw {
  /**
   * @schema PropagatingVgw#GatewayId
   */
  readonly gatewayId?: string;

}

/**
 * @schema Route
 */
export interface Route {
  /**
   * @schema Route#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema Route#DestinationIpv6CidrBlock
   */
  readonly destinationIpv6CidrBlock?: string;

  /**
   * @schema Route#DestinationPrefixListId
   */
  readonly destinationPrefixListId?: string;

  /**
   * @schema Route#EgressOnlyInternetGatewayId
   */
  readonly egressOnlyInternetGatewayId?: string;

  /**
   * @schema Route#GatewayId
   */
  readonly gatewayId?: string;

  /**
   * @schema Route#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Route#InstanceOwnerId
   */
  readonly instanceOwnerId?: string;

  /**
   * @schema Route#NatGatewayId
   */
  readonly natGatewayId?: string;

  /**
   * @schema Route#TransitGatewayId
   */
  readonly transitGatewayId?: string;

  /**
   * @schema Route#LocalGatewayId
   */
  readonly localGatewayId?: string;

  /**
   * @schema Route#CarrierGatewayId
   */
  readonly carrierGatewayId?: string;

  /**
   * @schema Route#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema Route#Origin
   */
  readonly origin?: string;

  /**
   * @schema Route#State
   */
  readonly state?: string;

  /**
   * @schema Route#VpcPeeringConnectionId
   */
  readonly vpcPeeringConnectionId?: string;

}

/**
 * @schema SpotInstanceStateFault
 */
export interface SpotInstanceStateFault {
  /**
   * @schema SpotInstanceStateFault#Code
   */
  readonly code?: string;

  /**
   * @schema SpotInstanceStateFault#Message
   */
  readonly message?: string;

}

/**
 * @schema TrafficMirrorPortRange
 */
export interface TrafficMirrorPortRange {
  /**
   * @schema TrafficMirrorPortRange#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema TrafficMirrorPortRange#ToPort
   */
  readonly toPort?: number;

}

/**
 * @schema TransitGatewayOptions
 */
export interface TransitGatewayOptions {
  /**
   * @schema TransitGatewayOptions#AmazonSideAsn
   */
  readonly amazonSideAsn?: number;

  /**
   * @schema TransitGatewayOptions#AutoAcceptSharedAttachments
   */
  readonly autoAcceptSharedAttachments?: string;

  /**
   * @schema TransitGatewayOptions#DefaultRouteTableAssociation
   */
  readonly defaultRouteTableAssociation?: string;

  /**
   * @schema TransitGatewayOptions#AssociationDefaultRouteTableId
   */
  readonly associationDefaultRouteTableId?: string;

  /**
   * @schema TransitGatewayOptions#DefaultRouteTablePropagation
   */
  readonly defaultRouteTablePropagation?: string;

  /**
   * @schema TransitGatewayOptions#PropagationDefaultRouteTableId
   */
  readonly propagationDefaultRouteTableId?: string;

  /**
   * @schema TransitGatewayOptions#VpnEcmpSupport
   */
  readonly vpnEcmpSupport?: string;

  /**
   * @schema TransitGatewayOptions#DnsSupport
   */
  readonly dnsSupport?: string;

  /**
   * @schema TransitGatewayOptions#MulticastSupport
   */
  readonly multicastSupport?: string;

}

/**
 * @schema TransitGatewayPrefixListAttachment
 */
export interface TransitGatewayPrefixListAttachment {
  /**
   * @schema TransitGatewayPrefixListAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayPrefixListAttachment#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema TransitGatewayPrefixListAttachment#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * @schema TransitGatewayRouteAttachment
 */
export interface TransitGatewayRouteAttachment {
  /**
   * @schema TransitGatewayRouteAttachment#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema TransitGatewayRouteAttachment#TransitGatewayAttachmentId
   */
  readonly transitGatewayAttachmentId?: string;

  /**
   * @schema TransitGatewayRouteAttachment#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema SecurityGroupIdentifier
 */
export interface SecurityGroupIdentifier {
  /**
   * @schema SecurityGroupIdentifier#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema SecurityGroupIdentifier#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema DnsEntry
 */
export interface DnsEntry {
  /**
   * @schema DnsEntry#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema DnsEntry#HostedZoneId
   */
  readonly hostedZoneId?: string;

}

/**
 * @schema LastError
 */
export interface LastError {
  /**
   * @schema LastError#Message
   */
  readonly message?: string;

  /**
   * @schema LastError#Code
   */
  readonly code?: string;

}

/**
 * @schema ServiceTypeDetail
 */
export interface ServiceTypeDetail {
  /**
   * @schema ServiceTypeDetail#ServiceType
   */
  readonly serviceType?: string;

}

/**
 * @schema PrivateDnsNameConfiguration
 */
export interface PrivateDnsNameConfiguration {
  /**
   * @schema PrivateDnsNameConfiguration#State
   */
  readonly state?: string;

  /**
   * @schema PrivateDnsNameConfiguration#Type
   */
  readonly type?: string;

  /**
   * @schema PrivateDnsNameConfiguration#Value
   */
  readonly value?: string;

  /**
   * @schema PrivateDnsNameConfiguration#Name
   */
  readonly name?: string;

}

/**
 * @schema VpnTunnelOptionsSpecification
 */
export interface VpnTunnelOptionsSpecification {
  /**
   * @schema VpnTunnelOptionsSpecification#TunnelInsideCidr
   */
  readonly tunnelInsideCidr?: string;

  /**
   * @schema VpnTunnelOptionsSpecification#TunnelInsideIpv6Cidr
   */
  readonly tunnelInsideIpv6Cidr?: string;

  /**
   * @schema VpnTunnelOptionsSpecification#PreSharedKey
   */
  readonly preSharedKey?: string;

  /**
   * @schema VpnTunnelOptionsSpecification#Phase1LifetimeSeconds
   */
  readonly phase1LifetimeSeconds?: number;

  /**
   * @schema VpnTunnelOptionsSpecification#Phase2LifetimeSeconds
   */
  readonly phase2LifetimeSeconds?: number;

  /**
   * @schema VpnTunnelOptionsSpecification#RekeyMarginTimeSeconds
   */
  readonly rekeyMarginTimeSeconds?: number;

  /**
   * @schema VpnTunnelOptionsSpecification#RekeyFuzzPercentage
   */
  readonly rekeyFuzzPercentage?: number;

  /**
   * @schema VpnTunnelOptionsSpecification#ReplayWindowSize
   */
  readonly replayWindowSize?: number;

  /**
   * @schema VpnTunnelOptionsSpecification#DPDTimeoutSeconds
   */
  readonly dpdTimeoutSeconds?: number;

  /**
   * @schema VpnTunnelOptionsSpecification#DPDTimeoutAction
   */
  readonly dpdTimeoutAction?: string;

  /**
   * @schema VpnTunnelOptionsSpecification#Phase1EncryptionAlgorithms
   */
  readonly phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#Phase2EncryptionAlgorithms
   */
  readonly phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#Phase1IntegrityAlgorithms
   */
  readonly phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#Phase2IntegrityAlgorithms
   */
  readonly phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#Phase1DHGroupNumbers
   */
  readonly phase1DhGroupNumbers?: Phase1DhGroupNumbersRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#Phase2DHGroupNumbers
   */
  readonly phase2DhGroupNumbers?: Phase2DhGroupNumbersRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#IKEVersions
   */
  readonly ikeVersions?: IkeVersionsRequestListValue[];

  /**
   * @schema VpnTunnelOptionsSpecification#StartupAction
   */
  readonly startupAction?: string;

}

/**
 * @schema VpnConnectionOptions
 */
export interface VpnConnectionOptions {
  /**
   * @schema VpnConnectionOptions#EnableAcceleration
   */
  readonly enableAcceleration?: boolean;

  /**
   * @schema VpnConnectionOptions#StaticRoutesOnly
   */
  readonly staticRoutesOnly?: boolean;

  /**
   * @schema VpnConnectionOptions#LocalIpv4NetworkCidr
   */
  readonly localIpv4NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptions#RemoteIpv4NetworkCidr
   */
  readonly remoteIpv4NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptions#LocalIpv6NetworkCidr
   */
  readonly localIpv6NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptions#RemoteIpv6NetworkCidr
   */
  readonly remoteIpv6NetworkCidr?: string;

  /**
   * @schema VpnConnectionOptions#TunnelInsideIpVersion
   */
  readonly tunnelInsideIpVersion?: string;

  /**
   * @schema VpnConnectionOptions#TunnelOptions
   */
  readonly tunnelOptions?: TunnelOption[];

}

/**
 * @schema VpnStaticRoute
 */
export interface VpnStaticRoute {
  /**
   * @schema VpnStaticRoute#DestinationCidrBlock
   */
  readonly destinationCidrBlock?: string;

  /**
   * @schema VpnStaticRoute#Source
   */
  readonly source?: string;

  /**
   * @schema VpnStaticRoute#State
   */
  readonly state?: string;

}

/**
 * @schema VgwTelemetry
 */
export interface VgwTelemetry {
  /**
   * @schema VgwTelemetry#AcceptedRouteCount
   */
  readonly acceptedRouteCount?: number;

  /**
   * @schema VgwTelemetry#LastStatusChange
   */
  readonly lastStatusChange?: string;

  /**
   * @schema VgwTelemetry#OutsideIpAddress
   */
  readonly outsideIpAddress?: string;

  /**
   * @schema VgwTelemetry#Status
   */
  readonly status?: string;

  /**
   * @schema VgwTelemetry#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema VgwTelemetry#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema DeleteFleetError
 */
export interface DeleteFleetError {
  /**
   * @schema DeleteFleetError#Code
   */
  readonly code?: string;

  /**
   * @schema DeleteFleetError#Message
   */
  readonly message?: string;

}

/**
 * @schema ResponseError
 */
export interface ResponseError {
  /**
   * @schema ResponseError#Code
   */
  readonly code?: string;

  /**
   * @schema ResponseError#Message
   */
  readonly message?: string;

}

/**
 * @schema DeleteQueuedReservedInstancesError
 */
export interface DeleteQueuedReservedInstancesError {
  /**
   * @schema DeleteQueuedReservedInstancesError#Code
   */
  readonly code?: string;

  /**
   * @schema DeleteQueuedReservedInstancesError#Message
   */
  readonly message?: string;

}

/**
 * @schema AccountAttributeValue
 */
export interface AccountAttributeValue {
  /**
   * @schema AccountAttributeValue#AttributeValue
   */
  readonly attributeValue?: string;

}

/**
 * @schema AvailabilityZoneMessage
 */
export interface AvailabilityZoneMessage {
  /**
   * @schema AvailabilityZoneMessage#Message
   */
  readonly message?: string;

}

/**
 * @schema ClientVpnConnectionStatus
 */
export interface ClientVpnConnectionStatus {
  /**
   * @schema ClientVpnConnectionStatus#Code
   */
  readonly code?: string;

  /**
   * @schema ClientVpnConnectionStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema AssociatedTargetNetwork
 */
export interface AssociatedTargetNetwork {
  /**
   * @schema AssociatedTargetNetwork#NetworkId
   */
  readonly networkId?: string;

  /**
   * @schema AssociatedTargetNetwork#NetworkType
   */
  readonly networkType?: string;

}

/**
 * @schema ClientVpnAuthentication
 */
export interface ClientVpnAuthentication {
  /**
   * @schema ClientVpnAuthentication#Type
   */
  readonly type?: string;

  /**
   * @schema ClientVpnAuthentication#ActiveDirectory
   */
  readonly activeDirectory?: DirectoryServiceAuthentication;

  /**
   * @schema ClientVpnAuthentication#MutualAuthentication
   */
  readonly mutualAuthentication?: CertificateAuthentication;

  /**
   * @schema ClientVpnAuthentication#FederatedAuthentication
   */
  readonly federatedAuthentication?: FederatedAuthentication;

}

/**
 * @schema ConnectionLogResponseOptions
 */
export interface ConnectionLogResponseOptions {
  /**
   * @schema ConnectionLogResponseOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ConnectionLogResponseOptions#CloudwatchLogGroup
   */
  readonly cloudwatchLogGroup?: string;

  /**
   * @schema ConnectionLogResponseOptions#CloudwatchLogStream
   */
  readonly cloudwatchLogStream?: string;

}

/**
 * @schema ClientConnectResponseOptions
 */
export interface ClientConnectResponseOptions {
  /**
   * @schema ClientConnectResponseOptions#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema ClientConnectResponseOptions#LambdaFunctionArn
   */
  readonly lambdaFunctionArn?: string;

  /**
   * @schema ClientConnectResponseOptions#Status
   */
  readonly status?: ClientVpnEndpointAttributeStatus;

}

/**
 * @schema ImportInstanceTaskDetails
 */
export interface ImportInstanceTaskDetails {
  /**
   * @schema ImportInstanceTaskDetails#Description
   */
  readonly description?: string;

  /**
   * @schema ImportInstanceTaskDetails#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ImportInstanceTaskDetails#Platform
   */
  readonly platform?: string;

  /**
   * @schema ImportInstanceTaskDetails#Volumes
   */
  readonly volumes?: ImportInstanceVolumeDetailItem[];

}

/**
 * @schema ImportVolumeTaskDetails
 */
export interface ImportVolumeTaskDetails {
  /**
   * @schema ImportVolumeTaskDetails#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ImportVolumeTaskDetails#BytesConverted
   */
  readonly bytesConverted?: number;

  /**
   * @schema ImportVolumeTaskDetails#Description
   */
  readonly description?: string;

  /**
   * @schema ImportVolumeTaskDetails#Image
   */
  readonly image?: DiskImageDescription;

  /**
   * @schema ImportVolumeTaskDetails#Volume
   */
  readonly volume?: DiskImageVolumeDescription;

}

/**
 * @schema ElasticGpuHealth
 */
export interface ElasticGpuHealth {
  /**
   * @schema ElasticGpuHealth#Status
   */
  readonly status?: string;

}

/**
 * @schema EventInformation
 */
export interface EventInformation {
  /**
   * @schema EventInformation#EventDescription
   */
  readonly eventDescription?: string;

  /**
   * @schema EventInformation#EventSubType
   */
  readonly eventSubType?: string;

  /**
   * @schema EventInformation#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema FleetLaunchTemplateConfig
 */
export interface FleetLaunchTemplateConfig {
  /**
   * @schema FleetLaunchTemplateConfig#LaunchTemplateSpecification
   */
  readonly launchTemplateSpecification?: FleetLaunchTemplateSpecification;

  /**
   * @schema FleetLaunchTemplateConfig#Overrides
   */
  readonly overrides?: FleetLaunchTemplateOverrides[];

}

/**
 * @schema TargetCapacitySpecification
 */
export interface TargetCapacitySpecification {
  /**
   * @schema TargetCapacitySpecification#TotalTargetCapacity
   */
  readonly totalTargetCapacity?: number;

  /**
   * @schema TargetCapacitySpecification#OnDemandTargetCapacity
   */
  readonly onDemandTargetCapacity?: number;

  /**
   * @schema TargetCapacitySpecification#SpotTargetCapacity
   */
  readonly spotTargetCapacity?: number;

  /**
   * @schema TargetCapacitySpecification#DefaultTargetCapacityType
   */
  readonly defaultTargetCapacityType?: string;

}

/**
 * @schema SpotOptions
 */
export interface SpotOptions {
  /**
   * @schema SpotOptions#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema SpotOptions#MaintenanceStrategies
   */
  readonly maintenanceStrategies?: FleetSpotMaintenanceStrategies;

  /**
   * @schema SpotOptions#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

  /**
   * @schema SpotOptions#InstancePoolsToUseCount
   */
  readonly instancePoolsToUseCount?: number;

  /**
   * @schema SpotOptions#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema SpotOptions#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema SpotOptions#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema SpotOptions#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema OnDemandOptions
 */
export interface OnDemandOptions {
  /**
   * @schema OnDemandOptions#AllocationStrategy
   */
  readonly allocationStrategy?: string;

  /**
   * @schema OnDemandOptions#CapacityReservationOptions
   */
  readonly capacityReservationOptions?: CapacityReservationOptions;

  /**
   * @schema OnDemandOptions#SingleInstanceType
   */
  readonly singleInstanceType?: boolean;

  /**
   * @schema OnDemandOptions#SingleAvailabilityZone
   */
  readonly singleAvailabilityZone?: boolean;

  /**
   * @schema OnDemandOptions#MinTargetCapacity
   */
  readonly minTargetCapacity?: number;

  /**
   * @schema OnDemandOptions#MaxTotalPrice
   */
  readonly maxTotalPrice?: string;

}

/**
 * @schema DescribeFleetError
 */
export interface DescribeFleetError {
  /**
   * @schema DescribeFleetError#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @schema DescribeFleetError#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema DescribeFleetError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DescribeFleetError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema DescribeFleetsInstances
 */
export interface DescribeFleetsInstances {
  /**
   * @schema DescribeFleetsInstances#LaunchTemplateAndOverrides
   */
  readonly launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  /**
   * @schema DescribeFleetsInstances#Lifecycle
   */
  readonly lifecycle?: string;

  /**
   * @schema DescribeFleetsInstances#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema DescribeFleetsInstances#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema DescribeFleetsInstances#Platform
   */
  readonly platform?: string;

}

/**
 * @schema LoadPermission
 */
export interface LoadPermission {
  /**
   * @schema LoadPermission#UserId
   */
  readonly userId?: string;

  /**
   * @schema LoadPermission#Group
   */
  readonly group?: string;

}

/**
 * @schema PciId
 */
export interface PciId {
  /**
   * @schema PciId#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema PciId#VendorId
   */
  readonly vendorId?: string;

  /**
   * @schema PciId#SubsystemId
   */
  readonly subsystemId?: string;

  /**
   * @schema PciId#SubsystemVendorId
   */
  readonly subsystemVendorId?: string;

}

/**
 * @schema FpgaImageState
 */
export interface FpgaImageState {
  /**
   * @schema FpgaImageState#Code
   */
  readonly code?: string;

  /**
   * @schema FpgaImageState#Message
   */
  readonly message?: string;

}

/**
 * @schema AvailableCapacity
 */
export interface AvailableCapacity {
  /**
   * @schema AvailableCapacity#AvailableInstanceCapacity
   */
  readonly availableInstanceCapacity?: InstanceCapacity[];

  /**
   * @schema AvailableCapacity#AvailableVCpus
   */
  readonly availableVCpus?: number;

}

/**
 * @schema HostProperties
 */
export interface HostProperties {
  /**
   * @schema HostProperties#Cores
   */
  readonly cores?: number;

  /**
   * @schema HostProperties#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema HostProperties#InstanceFamily
   */
  readonly instanceFamily?: string;

  /**
   * @schema HostProperties#Sockets
   */
  readonly sockets?: number;

  /**
   * @schema HostProperties#TotalVCpus
   */
  readonly totalVCpus?: number;

}

/**
 * @schema HostInstance
 */
export interface HostInstance {
  /**
   * @schema HostInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema HostInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema HostInstance#OwnerId
   */
  readonly ownerId?: string;

}

/**
 * @schema StateReason
 */
export interface StateReason {
  /**
   * @schema StateReason#Code
   */
  readonly code?: string;

  /**
   * @schema StateReason#Message
   */
  readonly message?: string;

}

/**
 * @schema EbsInstanceBlockDevice
 */
export interface EbsInstanceBlockDevice {
  /**
   * @schema EbsInstanceBlockDevice#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema EbsInstanceBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema EbsInstanceBlockDevice#Status
   */
  readonly status?: string;

  /**
   * @schema EbsInstanceBlockDevice#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema InstanceState
 */
export interface InstanceState {
  /**
   * @schema InstanceState#Code
   */
  readonly code?: number;

  /**
   * @schema InstanceState#Name
   */
  readonly name?: string;

}

/**
 * @schema InstanceStatusSummary
 */
export interface InstanceStatusSummary {
  /**
   * @schema InstanceStatusSummary#Details
   */
  readonly details?: InstanceStatusDetails[];

  /**
   * @schema InstanceStatusSummary#Status
   */
  readonly status?: string;

}

/**
 * @schema ProcessorInfo
 */
export interface ProcessorInfo {
  /**
   * @schema ProcessorInfo#SupportedArchitectures
   */
  readonly supportedArchitectures?: string[];

  /**
   * @schema ProcessorInfo#SustainedClockSpeedInGhz
   */
  readonly sustainedClockSpeedInGhz?: number;

}

/**
 * @schema VCpuInfo
 */
export interface VCpuInfo {
  /**
   * @schema VCpuInfo#DefaultVCpus
   */
  readonly defaultVCpus?: number;

  /**
   * @schema VCpuInfo#DefaultCores
   */
  readonly defaultCores?: number;

  /**
   * @schema VCpuInfo#DefaultThreadsPerCore
   */
  readonly defaultThreadsPerCore?: number;

  /**
   * @schema VCpuInfo#ValidCores
   */
  readonly validCores?: number[];

  /**
   * @schema VCpuInfo#ValidThreadsPerCore
   */
  readonly validThreadsPerCore?: number[];

}

/**
 * @schema MemoryInfo
 */
export interface MemoryInfo {
  /**
   * @schema MemoryInfo#SizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema InstanceStorageInfo
 */
export interface InstanceStorageInfo {
  /**
   * @schema InstanceStorageInfo#TotalSizeInGB
   */
  readonly totalSizeInGb?: number;

  /**
   * @schema InstanceStorageInfo#Disks
   */
  readonly disks?: DiskInfo[];

  /**
   * @schema InstanceStorageInfo#NvmeSupport
   */
  readonly nvmeSupport?: string;

}

/**
 * @schema EbsInfo
 */
export interface EbsInfo {
  /**
   * @schema EbsInfo#EbsOptimizedSupport
   */
  readonly ebsOptimizedSupport?: string;

  /**
   * @schema EbsInfo#EncryptionSupport
   */
  readonly encryptionSupport?: string;

  /**
   * @schema EbsInfo#EbsOptimizedInfo
   */
  readonly ebsOptimizedInfo?: EbsOptimizedInfo;

  /**
   * @schema EbsInfo#NvmeSupport
   */
  readonly nvmeSupport?: string;

}

/**
 * @schema NetworkInfo
 */
export interface NetworkInfo {
  /**
   * @schema NetworkInfo#NetworkPerformance
   */
  readonly networkPerformance?: string;

  /**
   * @schema NetworkInfo#MaximumNetworkInterfaces
   */
  readonly maximumNetworkInterfaces?: number;

  /**
   * @schema NetworkInfo#MaximumNetworkCards
   */
  readonly maximumNetworkCards?: number;

  /**
   * @schema NetworkInfo#DefaultNetworkCardIndex
   */
  readonly defaultNetworkCardIndex?: number;

  /**
   * @schema NetworkInfo#NetworkCards
   */
  readonly networkCards?: NetworkCardInfo[];

  /**
   * @schema NetworkInfo#Ipv4AddressesPerInterface
   */
  readonly ipv4AddressesPerInterface?: number;

  /**
   * @schema NetworkInfo#Ipv6AddressesPerInterface
   */
  readonly ipv6AddressesPerInterface?: number;

  /**
   * @schema NetworkInfo#Ipv6Supported
   */
  readonly ipv6Supported?: boolean;

  /**
   * @schema NetworkInfo#EnaSupport
   */
  readonly enaSupport?: string;

  /**
   * @schema NetworkInfo#EfaSupported
   */
  readonly efaSupported?: boolean;

}

/**
 * @schema GpuInfo
 */
export interface GpuInfo {
  /**
   * @schema GpuInfo#Gpus
   */
  readonly gpus?: GpuDeviceInfo[];

  /**
   * @schema GpuInfo#TotalGpuMemoryInMiB
   */
  readonly totalGpuMemoryInMiB?: number;

}

/**
 * @schema FpgaInfo
 */
export interface FpgaInfo {
  /**
   * @schema FpgaInfo#Fpgas
   */
  readonly fpgas?: FpgaDeviceInfo[];

  /**
   * @schema FpgaInfo#TotalFpgaMemoryInMiB
   */
  readonly totalFpgaMemoryInMiB?: number;

}

/**
 * @schema PlacementGroupInfo
 */
export interface PlacementGroupInfo {
  /**
   * @schema PlacementGroupInfo#SupportedStrategies
   */
  readonly supportedStrategies?: string[];

}

/**
 * @schema InferenceAcceleratorInfo
 */
export interface InferenceAcceleratorInfo {
  /**
   * @schema InferenceAcceleratorInfo#Accelerators
   */
  readonly accelerators?: InferenceDeviceInfo[];

}

/**
 * @schema PoolCidrBlock
 */
export interface PoolCidrBlock {
  /**
   * @schema PoolCidrBlock#Cidr
   */
  readonly cidr?: string;

}

/**
 * @schema PublicIpv4PoolRange
 */
export interface PublicIpv4PoolRange {
  /**
   * @schema PublicIpv4PoolRange#FirstAddress
   */
  readonly firstAddress?: string;

  /**
   * @schema PublicIpv4PoolRange#LastAddress
   */
  readonly lastAddress?: string;

  /**
   * @schema PublicIpv4PoolRange#AddressCount
   */
  readonly addressCount?: number;

  /**
   * @schema PublicIpv4PoolRange#AvailableAddressCount
   */
  readonly availableAddressCount?: number;

}

/**
 * @schema RecurringCharge
 */
export interface RecurringCharge {
  /**
   * @schema RecurringCharge#Amount
   */
  readonly amount?: number;

  /**
   * @schema RecurringCharge#Frequency
   */
  readonly frequency?: string;

}

/**
 * @schema ReservedInstancesModificationResult
 */
export interface ReservedInstancesModificationResult {
  /**
   * @schema ReservedInstancesModificationResult#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

  /**
   * @schema ReservedInstancesModificationResult#TargetConfiguration
   */
  readonly targetConfiguration?: ReservedInstancesConfiguration;

}

/**
 * @schema ReservedInstancesId
 */
export interface ReservedInstancesId {
  /**
   * @schema ReservedInstancesId#ReservedInstancesId
   */
  readonly reservedInstancesId?: string;

}

/**
 * @schema PricingDetail
 */
export interface PricingDetail {
  /**
   * @schema PricingDetail#Count
   */
  readonly count?: number;

  /**
   * @schema PricingDetail#Price
   */
  readonly price?: number;

}

/**
 * @schema ScheduledInstanceRecurrence
 */
export interface ScheduledInstanceRecurrence {
  /**
   * @schema ScheduledInstanceRecurrence#Frequency
   */
  readonly frequency?: string;

  /**
   * @schema ScheduledInstanceRecurrence#Interval
   */
  readonly interval?: number;

  /**
   * @schema ScheduledInstanceRecurrence#OccurrenceDaySet
   */
  readonly occurrenceDaySet?: number[];

  /**
   * @schema ScheduledInstanceRecurrence#OccurrenceRelativeToEnd
   */
  readonly occurrenceRelativeToEnd?: boolean;

  /**
   * @schema ScheduledInstanceRecurrence#OccurrenceUnit
   */
  readonly occurrenceUnit?: string;

}

/**
 * @schema LaunchSpecification
 */
export interface LaunchSpecification {
  /**
   * @schema LaunchSpecification#UserData
   */
  readonly userData?: string;

  /**
   * @schema LaunchSpecification#SecurityGroups
   */
  readonly securityGroups?: GroupIdentifier[];

  /**
   * @schema LaunchSpecification#AddressingType
   */
  readonly addressingType?: string;

  /**
   * @schema LaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema LaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema LaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * @schema LaunchSpecification#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema LaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema LaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema LaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema LaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @schema LaunchSpecification#Placement
   */
  readonly placement?: SpotPlacement;

  /**
   * @schema LaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema LaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema LaunchSpecification#Monitoring
   */
  readonly monitoring?: RunInstancesMonitoringEnabled;

}

/**
 * @schema SpotInstanceStatus
 */
export interface SpotInstanceStatus {
  /**
   * @schema SpotInstanceStatus#Code
   */
  readonly code?: string;

  /**
   * @schema SpotInstanceStatus#Message
   */
  readonly message?: string;

  /**
   * @schema SpotInstanceStatus#UpdateTime
   */
  readonly updateTime?: string;

}

/**
 * @schema StaleIpPermission
 */
export interface StaleIpPermission {
  /**
   * @schema StaleIpPermission#FromPort
   */
  readonly fromPort?: number;

  /**
   * @schema StaleIpPermission#IpProtocol
   */
  readonly ipProtocol?: string;

  /**
   * @schema StaleIpPermission#IpRanges
   */
  readonly ipRanges?: string[];

  /**
   * @schema StaleIpPermission#PrefixListIds
   */
  readonly prefixListIds?: string[];

  /**
   * @schema StaleIpPermission#ToPort
   */
  readonly toPort?: number;

  /**
   * @schema StaleIpPermission#UserIdGroupPairs
   */
  readonly userIdGroupPairs?: UserIdGroupPair[];

}

/**
 * @schema TransitGatewayAttachmentAssociation
 */
export interface TransitGatewayAttachmentAssociation {
  /**
   * @schema TransitGatewayAttachmentAssociation#TransitGatewayRouteTableId
   */
  readonly transitGatewayRouteTableId?: string;

  /**
   * @schema TransitGatewayAttachmentAssociation#State
   */
  readonly state?: string;

}

/**
 * @schema VolumeStatusAction
 */
export interface VolumeStatusAction {
  /**
   * @schema VolumeStatusAction#Code
   */
  readonly code?: string;

  /**
   * @schema VolumeStatusAction#Description
   */
  readonly description?: string;

  /**
   * @schema VolumeStatusAction#EventId
   */
  readonly eventId?: string;

  /**
   * @schema VolumeStatusAction#EventType
   */
  readonly eventType?: string;

}

/**
 * @schema VolumeStatusEvent
 */
export interface VolumeStatusEvent {
  /**
   * @schema VolumeStatusEvent#Description
   */
  readonly description?: string;

  /**
   * @schema VolumeStatusEvent#EventId
   */
  readonly eventId?: string;

  /**
   * @schema VolumeStatusEvent#EventType
   */
  readonly eventType?: string;

  /**
   * @schema VolumeStatusEvent#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema VolumeStatusEvent#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema VolumeStatusEvent#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema VolumeStatusInfo
 */
export interface VolumeStatusInfo {
  /**
   * @schema VolumeStatusInfo#Details
   */
  readonly details?: VolumeStatusDetails[];

  /**
   * @schema VolumeStatusInfo#Status
   */
  readonly status?: string;

}

/**
 * @schema VolumeStatusAttachmentStatus
 */
export interface VolumeStatusAttachmentStatus {
  /**
   * @schema VolumeStatusAttachmentStatus#IoPerformance
   */
  readonly ioPerformance?: string;

  /**
   * @schema VolumeStatusAttachmentStatus#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema PrivateDnsDetails
 */
export interface PrivateDnsDetails {
  /**
   * @schema PrivateDnsDetails#PrivateDnsName
   */
  readonly privateDnsName?: string;

}

/**
 * @schema DisableFastSnapshotRestoreStateErrorItem
 */
export interface DisableFastSnapshotRestoreStateErrorItem {
  /**
   * @schema DisableFastSnapshotRestoreStateErrorItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema DisableFastSnapshotRestoreStateErrorItem#Error
   */
  readonly error?: DisableFastSnapshotRestoreStateError;

}

/**
 * @schema EnableFastSnapshotRestoreStateErrorItem
 */
export interface EnableFastSnapshotRestoreStateErrorItem {
  /**
   * @schema EnableFastSnapshotRestoreStateErrorItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema EnableFastSnapshotRestoreStateErrorItem#Error
   */
  readonly error?: EnableFastSnapshotRestoreStateError;

}

/**
 * @schema LaunchTemplateIamInstanceProfileSpecification
 */
export interface LaunchTemplateIamInstanceProfileSpecification {
  /**
   * @schema LaunchTemplateIamInstanceProfileSpecification#Arn
   */
  readonly arn?: string;

  /**
   * @schema LaunchTemplateIamInstanceProfileSpecification#Name
   */
  readonly name?: string;

}

/**
 * @schema LaunchTemplateBlockDeviceMapping
 */
export interface LaunchTemplateBlockDeviceMapping {
  /**
   * @schema LaunchTemplateBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema LaunchTemplateBlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema LaunchTemplateBlockDeviceMapping#Ebs
   */
  readonly ebs?: LaunchTemplateEbsBlockDevice;

  /**
   * @schema LaunchTemplateBlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

}

/**
 * @schema LaunchTemplateInstanceNetworkInterfaceSpecification
 */
export interface LaunchTemplateInstanceNetworkInterfaceSpecification {
  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#AssociateCarrierIpAddress
   */
  readonly associateCarrierIpAddress?: boolean;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#Groups
   */
  readonly groups?: string[];

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#InterfaceType
   */
  readonly interfaceType?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#Ipv6Addresses
   */
  readonly ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#PrivateIpAddresses
   */
  readonly privateIpAddresses?: PrivateIpAddressSpecification[];

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema LaunchTemplateInstanceNetworkInterfaceSpecification#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema LaunchTemplatesMonitoring
 */
export interface LaunchTemplatesMonitoring {
  /**
   * @schema LaunchTemplatesMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema LaunchTemplatePlacement
 */
export interface LaunchTemplatePlacement {
  /**
   * @schema LaunchTemplatePlacement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LaunchTemplatePlacement#Affinity
   */
  readonly affinity?: string;

  /**
   * @schema LaunchTemplatePlacement#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema LaunchTemplatePlacement#HostId
   */
  readonly hostId?: string;

  /**
   * @schema LaunchTemplatePlacement#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema LaunchTemplatePlacement#SpreadDomain
   */
  readonly spreadDomain?: string;

  /**
   * @schema LaunchTemplatePlacement#HostResourceGroupArn
   */
  readonly hostResourceGroupArn?: string;

  /**
   * @schema LaunchTemplatePlacement#PartitionNumber
   */
  readonly partitionNumber?: number;

}

/**
 * @schema LaunchTemplateTagSpecification
 */
export interface LaunchTemplateTagSpecification {
  /**
   * @schema LaunchTemplateTagSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LaunchTemplateTagSpecification#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ElasticGpuSpecificationResponse
 */
export interface ElasticGpuSpecificationResponse {
  /**
   * @schema ElasticGpuSpecificationResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema LaunchTemplateElasticInferenceAcceleratorResponse
 */
export interface LaunchTemplateElasticInferenceAcceleratorResponse {
  /**
   * @schema LaunchTemplateElasticInferenceAcceleratorResponse#Type
   */
  readonly type?: string;

  /**
   * @schema LaunchTemplateElasticInferenceAcceleratorResponse#Count
   */
  readonly count?: number;

}

/**
 * @schema LaunchTemplateInstanceMarketOptions
 */
export interface LaunchTemplateInstanceMarketOptions {
  /**
   * @schema LaunchTemplateInstanceMarketOptions#MarketType
   */
  readonly marketType?: string;

  /**
   * @schema LaunchTemplateInstanceMarketOptions#SpotOptions
   */
  readonly spotOptions?: LaunchTemplateSpotMarketOptions;

}

/**
 * @schema CreditSpecification
 */
export interface CreditSpecification {
  /**
   * @schema CreditSpecification#CpuCredits
   */
  readonly cpuCredits?: string;

}

/**
 * @schema LaunchTemplateCpuOptions
 */
export interface LaunchTemplateCpuOptions {
  /**
   * @schema LaunchTemplateCpuOptions#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema LaunchTemplateCpuOptions#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema LaunchTemplateCapacityReservationSpecificationResponse
 */
export interface LaunchTemplateCapacityReservationSpecificationResponse {
  /**
   * @schema LaunchTemplateCapacityReservationSpecificationResponse#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema LaunchTemplateCapacityReservationSpecificationResponse#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: CapacityReservationTargetResponse;

}

/**
 * @schema LaunchTemplateLicenseConfiguration
 */
export interface LaunchTemplateLicenseConfiguration {
  /**
   * @schema LaunchTemplateLicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema LaunchTemplateHibernationOptions
 */
export interface LaunchTemplateHibernationOptions {
  /**
   * @schema LaunchTemplateHibernationOptions#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema LaunchTemplateInstanceMetadataOptions
 */
export interface LaunchTemplateInstanceMetadataOptions {
  /**
   * @schema LaunchTemplateInstanceMetadataOptions#State
   */
  readonly state?: string;

  /**
   * @schema LaunchTemplateInstanceMetadataOptions#HttpTokens
   */
  readonly httpTokens?: string;

  /**
   * @schema LaunchTemplateInstanceMetadataOptions#HttpPutResponseHopLimit
   */
  readonly httpPutResponseHopLimit?: number;

  /**
   * @schema LaunchTemplateInstanceMetadataOptions#HttpEndpoint
   */
  readonly httpEndpoint?: string;

}

/**
 * @schema LaunchTemplateEnclaveOptions
 */
export interface LaunchTemplateEnclaveOptions {
  /**
   * @schema LaunchTemplateEnclaveOptions#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema TargetConfiguration
 */
export interface TargetConfiguration {
  /**
   * @schema TargetConfiguration#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema TargetConfiguration#OfferingId
   */
  readonly offeringId?: string;

}

/**
 * @schema UserBucket
 */
export interface UserBucket {
  /**
   * @schema UserBucket#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema UserBucket#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema UserBucketDetails
 */
export interface UserBucketDetails {
  /**
   * @schema UserBucketDetails#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema UserBucketDetails#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema UserData
 */
export interface UserData {
  /**
   * @schema UserData#Data
   */
  readonly data?: string;

}

/**
 * @schema LoadPermissionRequest
 */
export interface LoadPermissionRequest {
  /**
   * @schema LoadPermissionRequest#Group
   */
  readonly group?: string;

  /**
   * @schema LoadPermissionRequest#UserId
   */
  readonly userId?: string;

}

/**
 * @schema EbsInstanceBlockDeviceSpecification
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * @schema EbsInstanceBlockDeviceSpecification#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema EbsInstanceBlockDeviceSpecification#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema CapacityReservationTarget
 */
export interface CapacityReservationTarget {
  /**
   * @schema CapacityReservationTarget#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema CapacityReservationTarget#CapacityReservationResourceGroupArn
   */
  readonly capacityReservationResourceGroupArn?: string;

}

/**
 * @schema UnsuccessfulInstanceCreditSpecificationItemError
 */
export interface UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * @schema UnsuccessfulInstanceCreditSpecificationItemError#Code
   */
  readonly code?: string;

  /**
   * @schema UnsuccessfulInstanceCreditSpecificationItemError#Message
   */
  readonly message?: string;

}

/**
 * @schema FleetLaunchTemplateSpecification
 */
export interface FleetLaunchTemplateSpecification {
  /**
   * @schema FleetLaunchTemplateSpecification#LaunchTemplateId
   */
  readonly launchTemplateId?: string;

  /**
   * @schema FleetLaunchTemplateSpecification#LaunchTemplateName
   */
  readonly launchTemplateName?: string;

  /**
   * @schema FleetLaunchTemplateSpecification#Version
   */
  readonly version?: string;

}

/**
 * @schema LaunchTemplateOverrides
 */
export interface LaunchTemplateOverrides {
  /**
   * @schema LaunchTemplateOverrides#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema LaunchTemplateOverrides#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema LaunchTemplateOverrides#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema LaunchTemplateOverrides#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema LaunchTemplateOverrides#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema LaunchTemplateOverrides#Priority
   */
  readonly priority?: number;

}

/**
 * @schema Phase1EncryptionAlgorithmsRequestListValue
 */
export interface Phase1EncryptionAlgorithmsRequestListValue {
  /**
   * @schema Phase1EncryptionAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase2EncryptionAlgorithmsRequestListValue
 */
export interface Phase2EncryptionAlgorithmsRequestListValue {
  /**
   * @schema Phase2EncryptionAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase1IntegrityAlgorithmsRequestListValue
 */
export interface Phase1IntegrityAlgorithmsRequestListValue {
  /**
   * @schema Phase1IntegrityAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase2IntegrityAlgorithmsRequestListValue
 */
export interface Phase2IntegrityAlgorithmsRequestListValue {
  /**
   * @schema Phase2IntegrityAlgorithmsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase1DhGroupNumbersRequestListValue
 */
export interface Phase1DhGroupNumbersRequestListValue {
  /**
   * @schema Phase1DhGroupNumbersRequestListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema Phase2DhGroupNumbersRequestListValue
 */
export interface Phase2DhGroupNumbersRequestListValue {
  /**
   * @schema Phase2DhGroupNumbersRequestListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema IkeVersionsRequestListValue
 */
export interface IkeVersionsRequestListValue {
  /**
   * @schema IkeVersionsRequestListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Monitoring
 */
export interface Monitoring {
  /**
   * @schema Monitoring#State
   */
  readonly state?: string;

}

/**
 * @schema SpotMaintenanceStrategies
 */
export interface SpotMaintenanceStrategies {
  /**
   * @schema SpotMaintenanceStrategies#CapacityRebalance
   */
  readonly capacityRebalance?: SpotCapacityRebalance;

}

/**
 * @schema SpotFleetLaunchSpecification
 */
export interface SpotFleetLaunchSpecification {
  /**
   * @schema SpotFleetLaunchSpecification#SecurityGroups
   */
  readonly securityGroups?: GroupIdentifier[];

  /**
   * @schema SpotFleetLaunchSpecification#AddressingType
   */
  readonly addressingType?: string;

  /**
   * @schema SpotFleetLaunchSpecification#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema SpotFleetLaunchSpecification#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema SpotFleetLaunchSpecification#IamInstanceProfile
   */
  readonly iamInstanceProfile?: IamInstanceProfileSpecification;

  /**
   * @schema SpotFleetLaunchSpecification#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema SpotFleetLaunchSpecification#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SpotFleetLaunchSpecification#KernelId
   */
  readonly kernelId?: string;

  /**
   * @schema SpotFleetLaunchSpecification#KeyName
   */
  readonly keyName?: string;

  /**
   * @schema SpotFleetLaunchSpecification#Monitoring
   */
  readonly monitoring?: SpotFleetMonitoring;

  /**
   * @schema SpotFleetLaunchSpecification#NetworkInterfaces
   */
  readonly networkInterfaces?: InstanceNetworkInterfaceSpecification[];

  /**
   * @schema SpotFleetLaunchSpecification#Placement
   */
  readonly placement?: SpotPlacement;

  /**
   * @schema SpotFleetLaunchSpecification#RamdiskId
   */
  readonly ramdiskId?: string;

  /**
   * @schema SpotFleetLaunchSpecification#SpotPrice
   */
  readonly spotPrice?: string;

  /**
   * @schema SpotFleetLaunchSpecification#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SpotFleetLaunchSpecification#UserData
   */
  readonly userData?: string;

  /**
   * @schema SpotFleetLaunchSpecification#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema SpotFleetLaunchSpecification#TagSpecifications
   */
  readonly tagSpecifications?: SpotFleetTagSpecification[];

}

/**
 * @schema LoadBalancersConfig
 */
export interface LoadBalancersConfig {
  /**
   * @schema LoadBalancersConfig#ClassicLoadBalancersConfig
   */
  readonly classicLoadBalancersConfig?: ClassicLoadBalancersConfig;

  /**
   * @schema LoadBalancersConfig#TargetGroupsConfig
   */
  readonly targetGroupsConfig?: TargetGroupsConfig;

}

/**
 * @schema SpotPlacement
 */
export interface SpotPlacement {
  /**
   * @schema SpotPlacement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema SpotPlacement#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema SpotPlacement#Tenancy
   */
  readonly tenancy?: string;

}

/**
 * @schema SpotMarketOptions
 */
export interface SpotMarketOptions {
  /**
   * @schema SpotMarketOptions#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema SpotMarketOptions#SpotInstanceType
   */
  readonly spotInstanceType?: string;

  /**
   * @schema SpotMarketOptions#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema SpotMarketOptions#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema SpotMarketOptions#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema ElasticGpuAssociation
 */
export interface ElasticGpuAssociation {
  /**
   * @schema ElasticGpuAssociation#ElasticGpuId
   */
  readonly elasticGpuId?: string;

  /**
   * @schema ElasticGpuAssociation#ElasticGpuAssociationId
   */
  readonly elasticGpuAssociationId?: string;

  /**
   * @schema ElasticGpuAssociation#ElasticGpuAssociationState
   */
  readonly elasticGpuAssociationState?: string;

  /**
   * @schema ElasticGpuAssociation#ElasticGpuAssociationTime
   */
  readonly elasticGpuAssociationTime?: string;

}

/**
 * @schema ElasticInferenceAcceleratorAssociation
 */
export interface ElasticInferenceAcceleratorAssociation {
  /**
   * @schema ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorArn
   */
  readonly elasticInferenceAcceleratorArn?: string;

  /**
   * @schema ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorAssociationId
   */
  readonly elasticInferenceAcceleratorAssociationId?: string;

  /**
   * @schema ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorAssociationState
   */
  readonly elasticInferenceAcceleratorAssociationState?: string;

  /**
   * @schema ElasticInferenceAcceleratorAssociation#ElasticInferenceAcceleratorAssociationTime
   */
  readonly elasticInferenceAcceleratorAssociationTime?: string;

}

/**
 * @schema InstanceNetworkInterface
 */
export interface InstanceNetworkInterface {
  /**
   * @schema InstanceNetworkInterface#Association
   */
  readonly association?: InstanceNetworkInterfaceAssociation;

  /**
   * @schema InstanceNetworkInterface#Attachment
   */
  readonly attachment?: InstanceNetworkInterfaceAttachment;

  /**
   * @schema InstanceNetworkInterface#Description
   */
  readonly description?: string;

  /**
   * @schema InstanceNetworkInterface#Groups
   */
  readonly groups?: GroupIdentifier[];

  /**
   * @schema InstanceNetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: InstanceIpv6Address[];

  /**
   * @schema InstanceNetworkInterface#MacAddress
   */
  readonly macAddress?: string;

  /**
   * @schema InstanceNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema InstanceNetworkInterface#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema InstanceNetworkInterface#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema InstanceNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema InstanceNetworkInterface#PrivateIpAddresses
   */
  readonly privateIpAddresses?: InstancePrivateIpAddress[];

  /**
   * @schema InstanceNetworkInterface#SourceDestCheck
   */
  readonly sourceDestCheck?: boolean;

  /**
   * @schema InstanceNetworkInterface#Status
   */
  readonly status?: string;

  /**
   * @schema InstanceNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema InstanceNetworkInterface#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema InstanceNetworkInterface#InterfaceType
   */
  readonly interfaceType?: string;

}

/**
 * @schema CpuOptions
 */
export interface CpuOptions {
  /**
   * @schema CpuOptions#CoreCount
   */
  readonly coreCount?: number;

  /**
   * @schema CpuOptions#ThreadsPerCore
   */
  readonly threadsPerCore?: number;

}

/**
 * @schema CapacityReservationSpecificationResponse
 */
export interface CapacityReservationSpecificationResponse {
  /**
   * @schema CapacityReservationSpecificationResponse#CapacityReservationPreference
   */
  readonly capacityReservationPreference?: string;

  /**
   * @schema CapacityReservationSpecificationResponse#CapacityReservationTarget
   */
  readonly capacityReservationTarget?: CapacityReservationTargetResponse;

}

/**
 * @schema HibernationOptions
 */
export interface HibernationOptions {
  /**
   * @schema HibernationOptions#Configured
   */
  readonly configured?: boolean;

}

/**
 * @schema LicenseConfiguration
 */
export interface LicenseConfiguration {
  /**
   * @schema LicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * @schema ScheduledInstancesBlockDeviceMapping
 */
export interface ScheduledInstancesBlockDeviceMapping {
  /**
   * @schema ScheduledInstancesBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema ScheduledInstancesBlockDeviceMapping#Ebs
   */
  readonly ebs?: ScheduledInstancesEbs;

  /**
   * @schema ScheduledInstancesBlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

  /**
   * @schema ScheduledInstancesBlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

}

/**
 * @schema ScheduledInstancesIamInstanceProfile
 */
export interface ScheduledInstancesIamInstanceProfile {
  /**
   * @schema ScheduledInstancesIamInstanceProfile#Arn
   */
  readonly arn?: string;

  /**
   * @schema ScheduledInstancesIamInstanceProfile#Name
   */
  readonly name?: string;

}

/**
 * @schema ScheduledInstancesMonitoring
 */
export interface ScheduledInstancesMonitoring {
  /**
   * @schema ScheduledInstancesMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema ScheduledInstancesNetworkInterface
 */
export interface ScheduledInstancesNetworkInterface {
  /**
   * @schema ScheduledInstancesNetworkInterface#AssociatePublicIpAddress
   */
  readonly associatePublicIpAddress?: boolean;

  /**
   * @schema ScheduledInstancesNetworkInterface#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema ScheduledInstancesNetworkInterface#Description
   */
  readonly description?: string;

  /**
   * @schema ScheduledInstancesNetworkInterface#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema ScheduledInstancesNetworkInterface#Groups
   */
  readonly groups?: string[];

  /**
   * @schema ScheduledInstancesNetworkInterface#Ipv6AddressCount
   */
  readonly ipv6AddressCount?: number;

  /**
   * @schema ScheduledInstancesNetworkInterface#Ipv6Addresses
   */
  readonly ipv6Addresses?: ScheduledInstancesIpv6Address[];

  /**
   * @schema ScheduledInstancesNetworkInterface#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema ScheduledInstancesNetworkInterface#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

  /**
   * @schema ScheduledInstancesNetworkInterface#PrivateIpAddressConfigs
   */
  readonly privateIpAddressConfigs?: ScheduledInstancesPrivateIpAddressConfig[];

  /**
   * @schema ScheduledInstancesNetworkInterface#SecondaryPrivateIpAddressCount
   */
  readonly secondaryPrivateIpAddressCount?: number;

  /**
   * @schema ScheduledInstancesNetworkInterface#SubnetId
   */
  readonly subnetId?: string;

}

/**
 * @schema ScheduledInstancesPlacement
 */
export interface ScheduledInstancesPlacement {
  /**
   * @schema ScheduledInstancesPlacement#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ScheduledInstancesPlacement#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema Ipv6CidrBlock
 */
export interface Ipv6CidrBlock {
  /**
   * @schema Ipv6CidrBlock#Ipv6CidrBlock
   */
  readonly ipv6CidrBlock?: string;

}

/**
 * @schema CidrBlock
 */
export interface CidrBlock {
  /**
   * @schema CidrBlock#CidrBlock
   */
  readonly cidrBlock?: string;

}

/**
 * @schema VpcPeeringConnectionOptionsDescription
 */
export interface VpcPeeringConnectionOptionsDescription {
  /**
   * @schema VpcPeeringConnectionOptionsDescription#AllowDnsResolutionFromRemoteVpc
   */
  readonly allowDnsResolutionFromRemoteVpc?: boolean;

  /**
   * @schema VpcPeeringConnectionOptionsDescription#AllowEgressFromLocalClassicLinkToRemoteVpc
   */
  readonly allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  /**
   * @schema VpcPeeringConnectionOptionsDescription#AllowEgressFromLocalVpcToRemoteClassicLink
   */
  readonly allowEgressFromLocalVpcToRemoteClassicLink?: boolean;

}

/**
 * @schema FleetSpotCapacityRebalanceRequest
 */
export interface FleetSpotCapacityRebalanceRequest {
  /**
   * @schema FleetSpotCapacityRebalanceRequest#ReplacementStrategy
   */
  readonly replacementStrategy?: string;

}

/**
 * @schema FleetLaunchTemplateOverrides
 */
export interface FleetLaunchTemplateOverrides {
  /**
   * @schema FleetLaunchTemplateOverrides#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema FleetLaunchTemplateOverrides#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema FleetLaunchTemplateOverrides#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema FleetLaunchTemplateOverrides#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema FleetLaunchTemplateOverrides#WeightedCapacity
   */
  readonly weightedCapacity?: number;

  /**
   * @schema FleetLaunchTemplateOverrides#Priority
   */
  readonly priority?: number;

  /**
   * @schema FleetLaunchTemplateOverrides#Placement
   */
  readonly placement?: PlacementResponse;

}

/**
 * @schema LaunchTemplateEbsBlockDeviceRequest
 */
export interface LaunchTemplateEbsBlockDeviceRequest {
  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#Iops
   */
  readonly iops?: number;

  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema LaunchTemplateEbsBlockDeviceRequest#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema InstanceIpv6AddressRequest
 */
export interface InstanceIpv6AddressRequest {
  /**
   * @schema InstanceIpv6AddressRequest#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema LaunchTemplateSpotMarketOptionsRequest
 */
export interface LaunchTemplateSpotMarketOptionsRequest {
  /**
   * @schema LaunchTemplateSpotMarketOptionsRequest#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema LaunchTemplateSpotMarketOptionsRequest#SpotInstanceType
   */
  readonly spotInstanceType?: string;

  /**
   * @schema LaunchTemplateSpotMarketOptionsRequest#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema LaunchTemplateSpotMarketOptionsRequest#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema LaunchTemplateSpotMarketOptionsRequest#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema TunnelOption
 */
export interface TunnelOption {
  /**
   * @schema TunnelOption#OutsideIpAddress
   */
  readonly outsideIpAddress?: string;

  /**
   * @schema TunnelOption#TunnelInsideCidr
   */
  readonly tunnelInsideCidr?: string;

  /**
   * @schema TunnelOption#TunnelInsideIpv6Cidr
   */
  readonly tunnelInsideIpv6Cidr?: string;

  /**
   * @schema TunnelOption#PreSharedKey
   */
  readonly preSharedKey?: string;

  /**
   * @schema TunnelOption#Phase1LifetimeSeconds
   */
  readonly phase1LifetimeSeconds?: number;

  /**
   * @schema TunnelOption#Phase2LifetimeSeconds
   */
  readonly phase2LifetimeSeconds?: number;

  /**
   * @schema TunnelOption#RekeyMarginTimeSeconds
   */
  readonly rekeyMarginTimeSeconds?: number;

  /**
   * @schema TunnelOption#RekeyFuzzPercentage
   */
  readonly rekeyFuzzPercentage?: number;

  /**
   * @schema TunnelOption#ReplayWindowSize
   */
  readonly replayWindowSize?: number;

  /**
   * @schema TunnelOption#DpdTimeoutSeconds
   */
  readonly dpdTimeoutSeconds?: number;

  /**
   * @schema TunnelOption#DpdTimeoutAction
   */
  readonly dpdTimeoutAction?: string;

  /**
   * @schema TunnelOption#Phase1EncryptionAlgorithms
   */
  readonly phase1EncryptionAlgorithms?: Phase1EncryptionAlgorithmsListValue[];

  /**
   * @schema TunnelOption#Phase2EncryptionAlgorithms
   */
  readonly phase2EncryptionAlgorithms?: Phase2EncryptionAlgorithmsListValue[];

  /**
   * @schema TunnelOption#Phase1IntegrityAlgorithms
   */
  readonly phase1IntegrityAlgorithms?: Phase1IntegrityAlgorithmsListValue[];

  /**
   * @schema TunnelOption#Phase2IntegrityAlgorithms
   */
  readonly phase2IntegrityAlgorithms?: Phase2IntegrityAlgorithmsListValue[];

  /**
   * @schema TunnelOption#Phase1DHGroupNumbers
   */
  readonly phase1DhGroupNumbers?: Phase1DhGroupNumbersListValue[];

  /**
   * @schema TunnelOption#Phase2DHGroupNumbers
   */
  readonly phase2DhGroupNumbers?: Phase2DhGroupNumbersListValue[];

  /**
   * @schema TunnelOption#IkeVersions
   */
  readonly ikeVersions?: IkeVersionsListValue[];

  /**
   * @schema TunnelOption#StartupAction
   */
  readonly startupAction?: string;

}

/**
 * @schema DirectoryServiceAuthentication
 */
export interface DirectoryServiceAuthentication {
  /**
   * @schema DirectoryServiceAuthentication#DirectoryId
   */
  readonly directoryId?: string;

}

/**
 * @schema CertificateAuthentication
 */
export interface CertificateAuthentication {
  /**
   * @schema CertificateAuthentication#ClientRootCertificateChain
   */
  readonly clientRootCertificateChain?: string;

}

/**
 * @schema FederatedAuthentication
 */
export interface FederatedAuthentication {
  /**
   * @schema FederatedAuthentication#SamlProviderArn
   */
  readonly samlProviderArn?: string;

  /**
   * @schema FederatedAuthentication#SelfServiceSamlProviderArn
   */
  readonly selfServiceSamlProviderArn?: string;

}

/**
 * @schema ClientVpnEndpointAttributeStatus
 */
export interface ClientVpnEndpointAttributeStatus {
  /**
   * @schema ClientVpnEndpointAttributeStatus#Code
   */
  readonly code?: string;

  /**
   * @schema ClientVpnEndpointAttributeStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema ImportInstanceVolumeDetailItem
 */
export interface ImportInstanceVolumeDetailItem {
  /**
   * @schema ImportInstanceVolumeDetailItem#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema ImportInstanceVolumeDetailItem#BytesConverted
   */
  readonly bytesConverted?: number;

  /**
   * @schema ImportInstanceVolumeDetailItem#Description
   */
  readonly description?: string;

  /**
   * @schema ImportInstanceVolumeDetailItem#Image
   */
  readonly image?: DiskImageDescription;

  /**
   * @schema ImportInstanceVolumeDetailItem#Status
   */
  readonly status?: string;

  /**
   * @schema ImportInstanceVolumeDetailItem#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ImportInstanceVolumeDetailItem#Volume
   */
  readonly volume?: DiskImageVolumeDescription;

}

/**
 * @schema DiskImageDescription
 */
export interface DiskImageDescription {
  /**
   * @schema DiskImageDescription#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema DiskImageDescription#Format
   */
  readonly format?: string;

  /**
   * @schema DiskImageDescription#ImportManifestUrl
   */
  readonly importManifestUrl?: string;

  /**
   * @schema DiskImageDescription#Size
   */
  readonly size?: number;

}

/**
 * @schema DiskImageVolumeDescription
 */
export interface DiskImageVolumeDescription {
  /**
   * @schema DiskImageVolumeDescription#Id
   */
  readonly id?: string;

  /**
   * @schema DiskImageVolumeDescription#Size
   */
  readonly size?: number;

}

/**
 * @schema FleetSpotMaintenanceStrategies
 */
export interface FleetSpotMaintenanceStrategies {
  /**
   * @schema FleetSpotMaintenanceStrategies#CapacityRebalance
   */
  readonly capacityRebalance?: FleetSpotCapacityRebalance;

}

/**
 * @schema CapacityReservationOptions
 */
export interface CapacityReservationOptions {
  /**
   * @schema CapacityReservationOptions#UsageStrategy
   */
  readonly usageStrategy?: string;

}

/**
 * @schema InstanceCapacity
 */
export interface InstanceCapacity {
  /**
   * @schema InstanceCapacity#AvailableCapacity
   */
  readonly availableCapacity?: number;

  /**
   * @schema InstanceCapacity#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema InstanceCapacity#TotalCapacity
   */
  readonly totalCapacity?: number;

}

/**
 * @schema InstanceStatusDetails
 */
export interface InstanceStatusDetails {
  /**
   * @schema InstanceStatusDetails#ImpairedSince
   */
  readonly impairedSince?: string;

  /**
   * @schema InstanceStatusDetails#Name
   */
  readonly name?: string;

  /**
   * @schema InstanceStatusDetails#Status
   */
  readonly status?: string;

}

/**
 * @schema DiskInfo
 */
export interface DiskInfo {
  /**
   * @schema DiskInfo#SizeInGB
   */
  readonly sizeInGb?: number;

  /**
   * @schema DiskInfo#Count
   */
  readonly count?: number;

  /**
   * @schema DiskInfo#Type
   */
  readonly type?: string;

}

/**
 * @schema EbsOptimizedInfo
 */
export interface EbsOptimizedInfo {
  /**
   * @schema EbsOptimizedInfo#BaselineBandwidthInMbps
   */
  readonly baselineBandwidthInMbps?: number;

  /**
   * @schema EbsOptimizedInfo#BaselineThroughputInMBps
   */
  readonly baselineThroughputInMBps?: number;

  /**
   * @schema EbsOptimizedInfo#BaselineIops
   */
  readonly baselineIops?: number;

  /**
   * @schema EbsOptimizedInfo#MaximumBandwidthInMbps
   */
  readonly maximumBandwidthInMbps?: number;

  /**
   * @schema EbsOptimizedInfo#MaximumThroughputInMBps
   */
  readonly maximumThroughputInMBps?: number;

  /**
   * @schema EbsOptimizedInfo#MaximumIops
   */
  readonly maximumIops?: number;

}

/**
 * @schema NetworkCardInfo
 */
export interface NetworkCardInfo {
  /**
   * @schema NetworkCardInfo#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

  /**
   * @schema NetworkCardInfo#NetworkPerformance
   */
  readonly networkPerformance?: string;

  /**
   * @schema NetworkCardInfo#MaximumNetworkInterfaces
   */
  readonly maximumNetworkInterfaces?: number;

}

/**
 * @schema GpuDeviceInfo
 */
export interface GpuDeviceInfo {
  /**
   * @schema GpuDeviceInfo#Name
   */
  readonly name?: string;

  /**
   * @schema GpuDeviceInfo#Manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema GpuDeviceInfo#Count
   */
  readonly count?: number;

  /**
   * @schema GpuDeviceInfo#MemoryInfo
   */
  readonly memoryInfo?: GpuDeviceMemoryInfo;

}

/**
 * @schema FpgaDeviceInfo
 */
export interface FpgaDeviceInfo {
  /**
   * @schema FpgaDeviceInfo#Name
   */
  readonly name?: string;

  /**
   * @schema FpgaDeviceInfo#Manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema FpgaDeviceInfo#Count
   */
  readonly count?: number;

  /**
   * @schema FpgaDeviceInfo#MemoryInfo
   */
  readonly memoryInfo?: FpgaDeviceMemoryInfo;

}

/**
 * @schema InferenceDeviceInfo
 */
export interface InferenceDeviceInfo {
  /**
   * @schema InferenceDeviceInfo#Count
   */
  readonly count?: number;

  /**
   * @schema InferenceDeviceInfo#Name
   */
  readonly name?: string;

  /**
   * @schema InferenceDeviceInfo#Manufacturer
   */
  readonly manufacturer?: string;

}

/**
 * @schema VolumeStatusDetails
 */
export interface VolumeStatusDetails {
  /**
   * @schema VolumeStatusDetails#Name
   */
  readonly name?: string;

  /**
   * @schema VolumeStatusDetails#Status
   */
  readonly status?: string;

}

/**
 * @schema DisableFastSnapshotRestoreStateError
 */
export interface DisableFastSnapshotRestoreStateError {
  /**
   * @schema DisableFastSnapshotRestoreStateError#Code
   */
  readonly code?: string;

  /**
   * @schema DisableFastSnapshotRestoreStateError#Message
   */
  readonly message?: string;

}

/**
 * @schema EnableFastSnapshotRestoreStateError
 */
export interface EnableFastSnapshotRestoreStateError {
  /**
   * @schema EnableFastSnapshotRestoreStateError#Code
   */
  readonly code?: string;

  /**
   * @schema EnableFastSnapshotRestoreStateError#Message
   */
  readonly message?: string;

}

/**
 * @schema LaunchTemplateEbsBlockDevice
 */
export interface LaunchTemplateEbsBlockDevice {
  /**
   * @schema LaunchTemplateEbsBlockDevice#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema LaunchTemplateEbsBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema LaunchTemplateEbsBlockDevice#Iops
   */
  readonly iops?: number;

  /**
   * @schema LaunchTemplateEbsBlockDevice#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LaunchTemplateEbsBlockDevice#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema LaunchTemplateEbsBlockDevice#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema LaunchTemplateEbsBlockDevice#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema LaunchTemplateSpotMarketOptions
 */
export interface LaunchTemplateSpotMarketOptions {
  /**
   * @schema LaunchTemplateSpotMarketOptions#MaxPrice
   */
  readonly maxPrice?: string;

  /**
   * @schema LaunchTemplateSpotMarketOptions#SpotInstanceType
   */
  readonly spotInstanceType?: string;

  /**
   * @schema LaunchTemplateSpotMarketOptions#BlockDurationMinutes
   */
  readonly blockDurationMinutes?: number;

  /**
   * @schema LaunchTemplateSpotMarketOptions#ValidUntil
   */
  readonly validUntil?: string;

  /**
   * @schema LaunchTemplateSpotMarketOptions#InstanceInterruptionBehavior
   */
  readonly instanceInterruptionBehavior?: string;

}

/**
 * @schema CapacityReservationTargetResponse
 */
export interface CapacityReservationTargetResponse {
  /**
   * @schema CapacityReservationTargetResponse#CapacityReservationId
   */
  readonly capacityReservationId?: string;

  /**
   * @schema CapacityReservationTargetResponse#CapacityReservationResourceGroupArn
   */
  readonly capacityReservationResourceGroupArn?: string;

}

/**
 * @schema SpotCapacityRebalance
 */
export interface SpotCapacityRebalance {
  /**
   * @schema SpotCapacityRebalance#ReplacementStrategy
   */
  readonly replacementStrategy?: string;

}

/**
 * @schema SpotFleetMonitoring
 */
export interface SpotFleetMonitoring {
  /**
   * @schema SpotFleetMonitoring#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema SpotFleetTagSpecification
 */
export interface SpotFleetTagSpecification {
  /**
   * @schema SpotFleetTagSpecification#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema SpotFleetTagSpecification#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ClassicLoadBalancersConfig
 */
export interface ClassicLoadBalancersConfig {
  /**
   * @schema ClassicLoadBalancersConfig#ClassicLoadBalancers
   */
  readonly classicLoadBalancers?: ClassicLoadBalancer[];

}

/**
 * @schema TargetGroupsConfig
 */
export interface TargetGroupsConfig {
  /**
   * @schema TargetGroupsConfig#TargetGroups
   */
  readonly targetGroups?: TargetGroup[];

}

/**
 * @schema InstanceNetworkInterfaceAssociation
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * @schema InstanceNetworkInterfaceAssociation#CarrierIp
   */
  readonly carrierIp?: string;

  /**
   * @schema InstanceNetworkInterfaceAssociation#IpOwnerId
   */
  readonly ipOwnerId?: string;

  /**
   * @schema InstanceNetworkInterfaceAssociation#PublicDnsName
   */
  readonly publicDnsName?: string;

  /**
   * @schema InstanceNetworkInterfaceAssociation#PublicIp
   */
  readonly publicIp?: string;

}

/**
 * @schema InstanceNetworkInterfaceAttachment
 */
export interface InstanceNetworkInterfaceAttachment {
  /**
   * @schema InstanceNetworkInterfaceAttachment#AttachTime
   */
  readonly attachTime?: string;

  /**
   * @schema InstanceNetworkInterfaceAttachment#AttachmentId
   */
  readonly attachmentId?: string;

  /**
   * @schema InstanceNetworkInterfaceAttachment#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema InstanceNetworkInterfaceAttachment#DeviceIndex
   */
  readonly deviceIndex?: number;

  /**
   * @schema InstanceNetworkInterfaceAttachment#Status
   */
  readonly status?: string;

  /**
   * @schema InstanceNetworkInterfaceAttachment#NetworkCardIndex
   */
  readonly networkCardIndex?: number;

}

/**
 * @schema InstancePrivateIpAddress
 */
export interface InstancePrivateIpAddress {
  /**
   * @schema InstancePrivateIpAddress#Association
   */
  readonly association?: InstanceNetworkInterfaceAssociation;

  /**
   * @schema InstancePrivateIpAddress#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema InstancePrivateIpAddress#PrivateDnsName
   */
  readonly privateDnsName?: string;

  /**
   * @schema InstancePrivateIpAddress#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema ScheduledInstancesEbs
 */
export interface ScheduledInstancesEbs {
  /**
   * @schema ScheduledInstancesEbs#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

  /**
   * @schema ScheduledInstancesEbs#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema ScheduledInstancesEbs#Iops
   */
  readonly iops?: number;

  /**
   * @schema ScheduledInstancesEbs#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema ScheduledInstancesEbs#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema ScheduledInstancesEbs#VolumeType
   */
  readonly volumeType?: string;

}

/**
 * @schema ScheduledInstancesIpv6Address
 */
export interface ScheduledInstancesIpv6Address {
  /**
   * @schema ScheduledInstancesIpv6Address#Ipv6Address
   */
  readonly ipv6Address?: string;

}

/**
 * @schema ScheduledInstancesPrivateIpAddressConfig
 */
export interface ScheduledInstancesPrivateIpAddressConfig {
  /**
   * @schema ScheduledInstancesPrivateIpAddressConfig#Primary
   */
  readonly primary?: boolean;

  /**
   * @schema ScheduledInstancesPrivateIpAddressConfig#PrivateIpAddress
   */
  readonly privateIpAddress?: string;

}

/**
 * @schema PlacementResponse
 */
export interface PlacementResponse {
  /**
   * @schema PlacementResponse#GroupName
   */
  readonly groupName?: string;

}

/**
 * @schema Phase1EncryptionAlgorithmsListValue
 */
export interface Phase1EncryptionAlgorithmsListValue {
  /**
   * @schema Phase1EncryptionAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase2EncryptionAlgorithmsListValue
 */
export interface Phase2EncryptionAlgorithmsListValue {
  /**
   * @schema Phase2EncryptionAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase1IntegrityAlgorithmsListValue
 */
export interface Phase1IntegrityAlgorithmsListValue {
  /**
   * @schema Phase1IntegrityAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase2IntegrityAlgorithmsListValue
 */
export interface Phase2IntegrityAlgorithmsListValue {
  /**
   * @schema Phase2IntegrityAlgorithmsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema Phase1DhGroupNumbersListValue
 */
export interface Phase1DhGroupNumbersListValue {
  /**
   * @schema Phase1DhGroupNumbersListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema Phase2DhGroupNumbersListValue
 */
export interface Phase2DhGroupNumbersListValue {
  /**
   * @schema Phase2DhGroupNumbersListValue#Value
   */
  readonly value?: number;

}

/**
 * @schema IkeVersionsListValue
 */
export interface IkeVersionsListValue {
  /**
   * @schema IkeVersionsListValue#Value
   */
  readonly value?: string;

}

/**
 * @schema FleetSpotCapacityRebalance
 */
export interface FleetSpotCapacityRebalance {
  /**
   * @schema FleetSpotCapacityRebalance#ReplacementStrategy
   */
  readonly replacementStrategy?: string;

}

/**
 * @schema GpuDeviceMemoryInfo
 */
export interface GpuDeviceMemoryInfo {
  /**
   * @schema GpuDeviceMemoryInfo#SizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema FpgaDeviceMemoryInfo
 */
export interface FpgaDeviceMemoryInfo {
  /**
   * @schema FpgaDeviceMemoryInfo#SizeInMiB
   */
  readonly sizeInMiB?: number;

}

/**
 * @schema ClassicLoadBalancer
 */
export interface ClassicLoadBalancer {
  /**
   * @schema ClassicLoadBalancer#Name
   */
  readonly name?: string;

}

/**
 * @schema TargetGroup
 */
export interface TargetGroup {
  /**
   * @schema TargetGroup#Arn
   */
  readonly arn?: string;

}
