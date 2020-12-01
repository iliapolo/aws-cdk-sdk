/**
 * @schema AssociateDomainRequest
 */
export interface AssociateDomainRequest {
  /**
   * @schema AssociateDomainRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema AssociateDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema AssociateDomainRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema AssociateDomainRequest#AcmCertificateArn
   */
  readonly acmCertificateArn: string;

}

/**
 * @schema AssociateDomainResponse
 */
export interface AssociateDomainResponse {
}

/**
 * @schema AssociateWebsiteAuthorizationProviderRequest
 */
export interface AssociateWebsiteAuthorizationProviderRequest {
  /**
   * @schema AssociateWebsiteAuthorizationProviderRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema AssociateWebsiteAuthorizationProviderRequest#AuthorizationProviderType
   */
  readonly authorizationProviderType: string;

  /**
   * @schema AssociateWebsiteAuthorizationProviderRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema AssociateWebsiteAuthorizationProviderResponse
 */
export interface AssociateWebsiteAuthorizationProviderResponse {
  /**
   * @schema AssociateWebsiteAuthorizationProviderResponse#AuthorizationProviderId
   */
  readonly authorizationProviderId?: string;

}

/**
 * @schema AssociateWebsiteCertificateAuthorityRequest
 */
export interface AssociateWebsiteCertificateAuthorityRequest {
  /**
   * @schema AssociateWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema AssociateWebsiteCertificateAuthorityRequest#Certificate
   */
  readonly certificate: string;

  /**
   * @schema AssociateWebsiteCertificateAuthorityRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema AssociateWebsiteCertificateAuthorityResponse
 */
export interface AssociateWebsiteCertificateAuthorityResponse {
  /**
   * @schema AssociateWebsiteCertificateAuthorityResponse#WebsiteCaId
   */
  readonly websiteCaId?: string;

}

/**
 * @schema CreateFleetRequest
 */
export interface CreateFleetRequest {
  /**
   * @schema CreateFleetRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema CreateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateFleetRequest#OptimizeForEndUserLocation
   */
  readonly optimizeForEndUserLocation?: boolean;

  /**
   * @schema CreateFleetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFleetResponse
 */
export interface CreateFleetResponse {
  /**
   * @schema CreateFleetResponse#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * @schema DeleteFleetRequest
 */
export interface DeleteFleetRequest {
  /**
   * @schema DeleteFleetRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema DeleteFleetResponse
 */
export interface DeleteFleetResponse {
}

/**
 * @schema DescribeAuditStreamConfigurationRequest
 */
export interface DescribeAuditStreamConfigurationRequest {
  /**
   * @schema DescribeAuditStreamConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema DescribeAuditStreamConfigurationResponse
 */
export interface DescribeAuditStreamConfigurationResponse {
  /**
   * @schema DescribeAuditStreamConfigurationResponse#AuditStreamArn
   */
  readonly auditStreamArn?: string;

}

/**
 * @schema DescribeCompanyNetworkConfigurationRequest
 */
export interface DescribeCompanyNetworkConfigurationRequest {
  /**
   * @schema DescribeCompanyNetworkConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema DescribeCompanyNetworkConfigurationResponse
 */
export interface DescribeCompanyNetworkConfigurationResponse {
  /**
   * @schema DescribeCompanyNetworkConfigurationResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DescribeCompanyNetworkConfigurationResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DescribeCompanyNetworkConfigurationResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema DescribeDeviceRequest
 */
export interface DescribeDeviceRequest {
  /**
   * @schema DescribeDeviceRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema DescribeDeviceRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema DescribeDeviceResponse
 */
export interface DescribeDeviceResponse {
  /**
   * @schema DescribeDeviceResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeDeviceResponse#Model
   */
  readonly model?: string;

  /**
   * @schema DescribeDeviceResponse#Manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema DescribeDeviceResponse#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema DescribeDeviceResponse#OperatingSystemVersion
   */
  readonly operatingSystemVersion?: string;

  /**
   * @schema DescribeDeviceResponse#PatchLevel
   */
  readonly patchLevel?: string;

  /**
   * @schema DescribeDeviceResponse#FirstAccessedTime
   */
  readonly firstAccessedTime?: string;

  /**
   * @schema DescribeDeviceResponse#LastAccessedTime
   */
  readonly lastAccessedTime?: string;

  /**
   * @schema DescribeDeviceResponse#Username
   */
  readonly username?: string;

}

/**
 * @schema DescribeDevicePolicyConfigurationRequest
 */
export interface DescribeDevicePolicyConfigurationRequest {
  /**
   * @schema DescribeDevicePolicyConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema DescribeDevicePolicyConfigurationResponse
 */
export interface DescribeDevicePolicyConfigurationResponse {
  /**
   * @schema DescribeDevicePolicyConfigurationResponse#DeviceCaCertificate
   */
  readonly deviceCaCertificate?: string;

}

/**
 * @schema DescribeDomainRequest
 */
export interface DescribeDomainRequest {
  /**
   * @schema DescribeDomainRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema DescribeDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DescribeDomainResponse
 */
export interface DescribeDomainResponse {
  /**
   * @schema DescribeDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DescribeDomainResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeDomainResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DescribeDomainResponse#DomainStatus
   */
  readonly domainStatus?: string;

  /**
   * @schema DescribeDomainResponse#AcmCertificateArn
   */
  readonly acmCertificateArn?: string;

}

/**
 * @schema DescribeFleetMetadataRequest
 */
export interface DescribeFleetMetadataRequest {
  /**
   * @schema DescribeFleetMetadataRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema DescribeFleetMetadataResponse
 */
export interface DescribeFleetMetadataResponse {
  /**
   * @schema DescribeFleetMetadataResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DescribeFleetMetadataResponse#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema DescribeFleetMetadataResponse#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema DescribeFleetMetadataResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeFleetMetadataResponse#OptimizeForEndUserLocation
   */
  readonly optimizeForEndUserLocation?: boolean;

  /**
   * @schema DescribeFleetMetadataResponse#CompanyCode
   */
  readonly companyCode?: string;

  /**
   * @schema DescribeFleetMetadataResponse#FleetStatus
   */
  readonly fleetStatus?: string;

  /**
   * @schema DescribeFleetMetadataResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeIdentityProviderConfigurationRequest
 */
export interface DescribeIdentityProviderConfigurationRequest {
  /**
   * @schema DescribeIdentityProviderConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema DescribeIdentityProviderConfigurationResponse
 */
export interface DescribeIdentityProviderConfigurationResponse {
  /**
   * @schema DescribeIdentityProviderConfigurationResponse#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema DescribeIdentityProviderConfigurationResponse#ServiceProviderSamlMetadata
   */
  readonly serviceProviderSamlMetadata?: string;

  /**
   * @schema DescribeIdentityProviderConfigurationResponse#IdentityProviderSamlMetadata
   */
  readonly identityProviderSamlMetadata?: string;

}

/**
 * @schema DescribeWebsiteCertificateAuthorityRequest
 */
export interface DescribeWebsiteCertificateAuthorityRequest {
  /**
   * @schema DescribeWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema DescribeWebsiteCertificateAuthorityRequest#WebsiteCaId
   */
  readonly websiteCaId: string;

}

/**
 * @schema DescribeWebsiteCertificateAuthorityResponse
 */
export interface DescribeWebsiteCertificateAuthorityResponse {
  /**
   * @schema DescribeWebsiteCertificateAuthorityResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema DescribeWebsiteCertificateAuthorityResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DescribeWebsiteCertificateAuthorityResponse#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema DisassociateDomainRequest
 */
export interface DisassociateDomainRequest {
  /**
   * @schema DisassociateDomainRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema DisassociateDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema DisassociateDomainResponse
 */
export interface DisassociateDomainResponse {
}

/**
 * @schema DisassociateWebsiteAuthorizationProviderRequest
 */
export interface DisassociateWebsiteAuthorizationProviderRequest {
  /**
   * @schema DisassociateWebsiteAuthorizationProviderRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema DisassociateWebsiteAuthorizationProviderRequest#AuthorizationProviderId
   */
  readonly authorizationProviderId: string;

}

/**
 * @schema DisassociateWebsiteAuthorizationProviderResponse
 */
export interface DisassociateWebsiteAuthorizationProviderResponse {
}

/**
 * @schema DisassociateWebsiteCertificateAuthorityRequest
 */
export interface DisassociateWebsiteCertificateAuthorityRequest {
  /**
   * @schema DisassociateWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema DisassociateWebsiteCertificateAuthorityRequest#WebsiteCaId
   */
  readonly websiteCaId: string;

}

/**
 * @schema DisassociateWebsiteCertificateAuthorityResponse
 */
export interface DisassociateWebsiteCertificateAuthorityResponse {
}

/**
 * @schema ListDevicesRequest
 */
export interface ListDevicesRequest {
  /**
   * @schema ListDevicesRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema ListDevicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDevicesResponse
 */
export interface ListDevicesResponse {
  /**
   * @schema ListDevicesResponse#Devices
   */
  readonly devices?: DeviceSummary[];

  /**
   * @schema ListDevicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainsRequest
 */
export interface ListDomainsRequest {
  /**
   * @schema ListDomainsRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema ListDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDomainsResponse
 */
export interface ListDomainsResponse {
  /**
   * @schema ListDomainsResponse#Domains
   */
  readonly domains?: DomainSummary[];

  /**
   * @schema ListDomainsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFleetsRequest
 */
export interface ListFleetsRequest {
  /**
   * @schema ListFleetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFleetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFleetsResponse
 */
export interface ListFleetsResponse {
  /**
   * @schema ListFleetsResponse#FleetSummaryList
   */
  readonly fleetSummaryList?: FleetSummary[];

  /**
   * @schema ListFleetsResponse#NextToken
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
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListWebsiteAuthorizationProvidersRequest
 */
export interface ListWebsiteAuthorizationProvidersRequest {
  /**
   * @schema ListWebsiteAuthorizationProvidersRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema ListWebsiteAuthorizationProvidersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWebsiteAuthorizationProvidersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWebsiteAuthorizationProvidersResponse
 */
export interface ListWebsiteAuthorizationProvidersResponse {
  /**
   * @schema ListWebsiteAuthorizationProvidersResponse#WebsiteAuthorizationProviders
   */
  readonly websiteAuthorizationProviders?: WebsiteAuthorizationProviderSummary[];

  /**
   * @schema ListWebsiteAuthorizationProvidersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWebsiteCertificateAuthoritiesRequest
 */
export interface ListWebsiteCertificateAuthoritiesRequest {
  /**
   * @schema ListWebsiteCertificateAuthoritiesRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema ListWebsiteCertificateAuthoritiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListWebsiteCertificateAuthoritiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWebsiteCertificateAuthoritiesResponse
 */
export interface ListWebsiteCertificateAuthoritiesResponse {
  /**
   * @schema ListWebsiteCertificateAuthoritiesResponse#WebsiteCertificateAuthorities
   */
  readonly websiteCertificateAuthorities?: WebsiteCaSummary[];

  /**
   * @schema ListWebsiteCertificateAuthoritiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RestoreDomainAccessRequest
 */
export interface RestoreDomainAccessRequest {
  /**
   * @schema RestoreDomainAccessRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema RestoreDomainAccessRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema RestoreDomainAccessResponse
 */
export interface RestoreDomainAccessResponse {
}

/**
 * @schema RevokeDomainAccessRequest
 */
export interface RevokeDomainAccessRequest {
  /**
   * @schema RevokeDomainAccessRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema RevokeDomainAccessRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema RevokeDomainAccessResponse
 */
export interface RevokeDomainAccessResponse {
}

/**
 * @schema SignOutUserRequest
 */
export interface SignOutUserRequest {
  /**
   * @schema SignOutUserRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema SignOutUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema SignOutUserResponse
 */
export interface SignOutUserResponse {
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
  readonly tags: { [key: string]: string };

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
 * @schema UpdateAuditStreamConfigurationRequest
 */
export interface UpdateAuditStreamConfigurationRequest {
  /**
   * @schema UpdateAuditStreamConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema UpdateAuditStreamConfigurationRequest#AuditStreamArn
   */
  readonly auditStreamArn?: string;

}

/**
 * @schema UpdateAuditStreamConfigurationResponse
 */
export interface UpdateAuditStreamConfigurationResponse {
}

/**
 * @schema UpdateCompanyNetworkConfigurationRequest
 */
export interface UpdateCompanyNetworkConfigurationRequest {
  /**
   * @schema UpdateCompanyNetworkConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema UpdateCompanyNetworkConfigurationRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema UpdateCompanyNetworkConfigurationRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema UpdateCompanyNetworkConfigurationRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema UpdateCompanyNetworkConfigurationResponse
 */
export interface UpdateCompanyNetworkConfigurationResponse {
}

/**
 * @schema UpdateDevicePolicyConfigurationRequest
 */
export interface UpdateDevicePolicyConfigurationRequest {
  /**
   * @schema UpdateDevicePolicyConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema UpdateDevicePolicyConfigurationRequest#DeviceCaCertificate
   */
  readonly deviceCaCertificate?: string;

}

/**
 * @schema UpdateDevicePolicyConfigurationResponse
 */
export interface UpdateDevicePolicyConfigurationResponse {
}

/**
 * @schema UpdateDomainMetadataRequest
 */
export interface UpdateDomainMetadataRequest {
  /**
   * @schema UpdateDomainMetadataRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema UpdateDomainMetadataRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema UpdateDomainMetadataRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema UpdateDomainMetadataResponse
 */
export interface UpdateDomainMetadataResponse {
}

/**
 * @schema UpdateFleetMetadataRequest
 */
export interface UpdateFleetMetadataRequest {
  /**
   * @schema UpdateFleetMetadataRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema UpdateFleetMetadataRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateFleetMetadataRequest#OptimizeForEndUserLocation
   */
  readonly optimizeForEndUserLocation?: boolean;

}

/**
 * @schema UpdateFleetMetadataResponse
 */
export interface UpdateFleetMetadataResponse {
}

/**
 * @schema UpdateIdentityProviderConfigurationRequest
 */
export interface UpdateIdentityProviderConfigurationRequest {
  /**
   * @schema UpdateIdentityProviderConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema UpdateIdentityProviderConfigurationRequest#IdentityProviderType
   */
  readonly identityProviderType: string;

  /**
   * @schema UpdateIdentityProviderConfigurationRequest#IdentityProviderSamlMetadata
   */
  readonly identityProviderSamlMetadata?: string;

}

/**
 * @schema UpdateIdentityProviderConfigurationResponse
 */
export interface UpdateIdentityProviderConfigurationResponse {
}

/**
 * @schema DeviceSummary
 */
export interface DeviceSummary {
  /**
   * @schema DeviceSummary#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema DeviceSummary#DeviceStatus
   */
  readonly deviceStatus?: string;

}

/**
 * @schema DomainSummary
 */
export interface DomainSummary {
  /**
   * @schema DomainSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DomainSummary#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema DomainSummary#DomainStatus
   */
  readonly domainStatus: string;

}

/**
 * @schema FleetSummary
 */
export interface FleetSummary {
  /**
   * @schema FleetSummary#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema FleetSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema FleetSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema FleetSummary#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema FleetSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema FleetSummary#CompanyCode
   */
  readonly companyCode?: string;

  /**
   * @schema FleetSummary#FleetStatus
   */
  readonly fleetStatus?: string;

  /**
   * @schema FleetSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema WebsiteAuthorizationProviderSummary
 */
export interface WebsiteAuthorizationProviderSummary {
  /**
   * @schema WebsiteAuthorizationProviderSummary#AuthorizationProviderId
   */
  readonly authorizationProviderId?: string;

  /**
   * @schema WebsiteAuthorizationProviderSummary#AuthorizationProviderType
   */
  readonly authorizationProviderType: string;

  /**
   * @schema WebsiteAuthorizationProviderSummary#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WebsiteAuthorizationProviderSummary#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema WebsiteCaSummary
 */
export interface WebsiteCaSummary {
  /**
   * @schema WebsiteCaSummary#WebsiteCaId
   */
  readonly websiteCaId?: string;

  /**
   * @schema WebsiteCaSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WebsiteCaSummary#DisplayName
   */
  readonly displayName?: string;

}
