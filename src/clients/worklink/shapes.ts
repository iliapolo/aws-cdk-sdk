/**
 * @schema WorkLinkAssociateDomainRequest
 */
export interface WorkLinkAssociateDomainRequest {
  /**
   * @schema WorkLinkAssociateDomainRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkAssociateDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema WorkLinkAssociateDomainRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkAssociateDomainRequest#AcmCertificateArn
   */
  readonly acmCertificateArn: string;

}

/**
 * @schema WorkLinkAssociateDomainResponse
 */
export interface WorkLinkAssociateDomainResponse {
}

/**
 * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest
 */
export interface WorkLinkAssociateWebsiteAuthorizationProviderRequest {
  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest#AuthorizationProviderType
   */
  readonly authorizationProviderType: string;

  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema WorkLinkAssociateWebsiteAuthorizationProviderResponse
 */
export interface WorkLinkAssociateWebsiteAuthorizationProviderResponse {
  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderResponse#AuthorizationProviderId
   */
  readonly authorizationProviderId?: string;

}

/**
 * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest
 */
export interface WorkLinkAssociateWebsiteCertificateAuthorityRequest {
  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest#Certificate
   */
  readonly certificate: string;

  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema WorkLinkAssociateWebsiteCertificateAuthorityResponse
 */
export interface WorkLinkAssociateWebsiteCertificateAuthorityResponse {
  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityResponse#WebsiteCaId
   */
  readonly websiteCaId?: string;

}

/**
 * @schema WorkLinkCreateFleetRequest
 */
export interface WorkLinkCreateFleetRequest {
  /**
   * @schema WorkLinkCreateFleetRequest#FleetName
   */
  readonly fleetName: string;

  /**
   * @schema WorkLinkCreateFleetRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkCreateFleetRequest#OptimizeForEndUserLocation
   */
  readonly optimizeForEndUserLocation?: boolean;

  /**
   * @schema WorkLinkCreateFleetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema WorkLinkCreateFleetResponse
 */
export interface WorkLinkCreateFleetResponse {
  /**
   * @schema WorkLinkCreateFleetResponse#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * @schema WorkLinkDeleteFleetRequest
 */
export interface WorkLinkDeleteFleetRequest {
  /**
   * @schema WorkLinkDeleteFleetRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema WorkLinkDeleteFleetResponse
 */
export interface WorkLinkDeleteFleetResponse {
}

/**
 * @schema WorkLinkDescribeAuditStreamConfigurationRequest
 */
export interface WorkLinkDescribeAuditStreamConfigurationRequest {
  /**
   * @schema WorkLinkDescribeAuditStreamConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema WorkLinkDescribeAuditStreamConfigurationResponse
 */
export interface WorkLinkDescribeAuditStreamConfigurationResponse {
  /**
   * @schema WorkLinkDescribeAuditStreamConfigurationResponse#AuditStreamArn
   */
  readonly auditStreamArn?: string;

}

/**
 * @schema WorkLinkDescribeCompanyNetworkConfigurationRequest
 */
export interface WorkLinkDescribeCompanyNetworkConfigurationRequest {
  /**
   * @schema WorkLinkDescribeCompanyNetworkConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema WorkLinkDescribeCompanyNetworkConfigurationResponse
 */
export interface WorkLinkDescribeCompanyNetworkConfigurationResponse {
  /**
   * @schema WorkLinkDescribeCompanyNetworkConfigurationResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema WorkLinkDescribeCompanyNetworkConfigurationResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkLinkDescribeCompanyNetworkConfigurationResponse#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * @schema WorkLinkDescribeDeviceRequest
 */
export interface WorkLinkDescribeDeviceRequest {
  /**
   * @schema WorkLinkDescribeDeviceRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkDescribeDeviceRequest#DeviceId
   */
  readonly deviceId: string;

}

/**
 * @schema WorkLinkDescribeDeviceResponse
 */
export interface WorkLinkDescribeDeviceResponse {
  /**
   * @schema WorkLinkDescribeDeviceResponse#Status
   */
  readonly status?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#Model
   */
  readonly model?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#Manufacturer
   */
  readonly manufacturer?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#OperatingSystemVersion
   */
  readonly operatingSystemVersion?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#PatchLevel
   */
  readonly patchLevel?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#FirstAccessedTime
   */
  readonly firstAccessedTime?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#LastAccessedTime
   */
  readonly lastAccessedTime?: string;

  /**
   * @schema WorkLinkDescribeDeviceResponse#Username
   */
  readonly username?: string;

}

/**
 * @schema WorkLinkDescribeDevicePolicyConfigurationRequest
 */
export interface WorkLinkDescribeDevicePolicyConfigurationRequest {
  /**
   * @schema WorkLinkDescribeDevicePolicyConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema WorkLinkDescribeDevicePolicyConfigurationResponse
 */
export interface WorkLinkDescribeDevicePolicyConfigurationResponse {
  /**
   * @schema WorkLinkDescribeDevicePolicyConfigurationResponse#DeviceCaCertificate
   */
  readonly deviceCaCertificate?: string;

}

/**
 * @schema WorkLinkDescribeDomainRequest
 */
export interface WorkLinkDescribeDomainRequest {
  /**
   * @schema WorkLinkDescribeDomainRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkDescribeDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema WorkLinkDescribeDomainResponse
 */
export interface WorkLinkDescribeDomainResponse {
  /**
   * @schema WorkLinkDescribeDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkLinkDescribeDomainResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkDescribeDomainResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WorkLinkDescribeDomainResponse#DomainStatus
   */
  readonly domainStatus?: string;

  /**
   * @schema WorkLinkDescribeDomainResponse#AcmCertificateArn
   */
  readonly acmCertificateArn?: string;

}

/**
 * @schema WorkLinkDescribeFleetMetadataRequest
 */
export interface WorkLinkDescribeFleetMetadataRequest {
  /**
   * @schema WorkLinkDescribeFleetMetadataRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema WorkLinkDescribeFleetMetadataResponse
 */
export interface WorkLinkDescribeFleetMetadataResponse {
  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#OptimizeForEndUserLocation
   */
  readonly optimizeForEndUserLocation?: boolean;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#CompanyCode
   */
  readonly companyCode?: string;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#FleetStatus
   */
  readonly fleetStatus?: string;

  /**
   * @schema WorkLinkDescribeFleetMetadataResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema WorkLinkDescribeIdentityProviderConfigurationRequest
 */
export interface WorkLinkDescribeIdentityProviderConfigurationRequest {
  /**
   * @schema WorkLinkDescribeIdentityProviderConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

}

/**
 * @schema WorkLinkDescribeIdentityProviderConfigurationResponse
 */
export interface WorkLinkDescribeIdentityProviderConfigurationResponse {
  /**
   * @schema WorkLinkDescribeIdentityProviderConfigurationResponse#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema WorkLinkDescribeIdentityProviderConfigurationResponse#ServiceProviderSamlMetadata
   */
  readonly serviceProviderSamlMetadata?: string;

  /**
   * @schema WorkLinkDescribeIdentityProviderConfigurationResponse#IdentityProviderSamlMetadata
   */
  readonly identityProviderSamlMetadata?: string;

}

/**
 * @schema WorkLinkDescribeWebsiteCertificateAuthorityRequest
 */
export interface WorkLinkDescribeWebsiteCertificateAuthorityRequest {
  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityRequest#WebsiteCaId
   */
  readonly websiteCaId: string;

}

/**
 * @schema WorkLinkDescribeWebsiteCertificateAuthorityResponse
 */
export interface WorkLinkDescribeWebsiteCertificateAuthorityResponse {
  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityResponse#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityResponse#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema WorkLinkDisassociateDomainRequest
 */
export interface WorkLinkDisassociateDomainRequest {
  /**
   * @schema WorkLinkDisassociateDomainRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkDisassociateDomainRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema WorkLinkDisassociateDomainResponse
 */
export interface WorkLinkDisassociateDomainResponse {
}

/**
 * @schema WorkLinkDisassociateWebsiteAuthorizationProviderRequest
 */
export interface WorkLinkDisassociateWebsiteAuthorizationProviderRequest {
  /**
   * @schema WorkLinkDisassociateWebsiteAuthorizationProviderRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkDisassociateWebsiteAuthorizationProviderRequest#AuthorizationProviderId
   */
  readonly authorizationProviderId: string;

}

/**
 * @schema WorkLinkDisassociateWebsiteAuthorizationProviderResponse
 */
export interface WorkLinkDisassociateWebsiteAuthorizationProviderResponse {
}

/**
 * @schema WorkLinkDisassociateWebsiteCertificateAuthorityRequest
 */
export interface WorkLinkDisassociateWebsiteCertificateAuthorityRequest {
  /**
   * @schema WorkLinkDisassociateWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkDisassociateWebsiteCertificateAuthorityRequest#WebsiteCaId
   */
  readonly websiteCaId: string;

}

/**
 * @schema WorkLinkDisassociateWebsiteCertificateAuthorityResponse
 */
export interface WorkLinkDisassociateWebsiteCertificateAuthorityResponse {
}

/**
 * @schema WorkLinkListDevicesRequest
 */
export interface WorkLinkListDevicesRequest {
  /**
   * @schema WorkLinkListDevicesRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkListDevicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkLinkListDevicesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkLinkListDevicesResponse
 */
export interface WorkLinkListDevicesResponse {
  /**
   * @schema WorkLinkListDevicesResponse#Devices
   */
  readonly devices?: WorkLinkDeviceSummary[];

  /**
   * @schema WorkLinkListDevicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkLinkListDomainsRequest
 */
export interface WorkLinkListDomainsRequest {
  /**
   * @schema WorkLinkListDomainsRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkListDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkLinkListDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkLinkListDomainsResponse
 */
export interface WorkLinkListDomainsResponse {
  /**
   * @schema WorkLinkListDomainsResponse#Domains
   */
  readonly domains?: WorkLinkDomainSummary[];

  /**
   * @schema WorkLinkListDomainsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkLinkListFleetsRequest
 */
export interface WorkLinkListFleetsRequest {
  /**
   * @schema WorkLinkListFleetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkLinkListFleetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkLinkListFleetsResponse
 */
export interface WorkLinkListFleetsResponse {
  /**
   * @schema WorkLinkListFleetsResponse#FleetSummaryList
   */
  readonly fleetSummaryList?: WorkLinkFleetSummary[];

  /**
   * @schema WorkLinkListFleetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkLinkListTagsForResourceRequest
 */
export interface WorkLinkListTagsForResourceRequest {
  /**
   * @schema WorkLinkListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema WorkLinkListTagsForResourceResponse
 */
export interface WorkLinkListTagsForResourceResponse {
  /**
   * @schema WorkLinkListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema WorkLinkListWebsiteAuthorizationProvidersRequest
 */
export interface WorkLinkListWebsiteAuthorizationProvidersRequest {
  /**
   * @schema WorkLinkListWebsiteAuthorizationProvidersRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkListWebsiteAuthorizationProvidersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkLinkListWebsiteAuthorizationProvidersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema WorkLinkListWebsiteAuthorizationProvidersResponse
 */
export interface WorkLinkListWebsiteAuthorizationProvidersResponse {
  /**
   * @schema WorkLinkListWebsiteAuthorizationProvidersResponse#WebsiteAuthorizationProviders
   */
  readonly websiteAuthorizationProviders?: WorkLinkWebsiteAuthorizationProviderSummary[];

  /**
   * @schema WorkLinkListWebsiteAuthorizationProvidersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkLinkListWebsiteCertificateAuthoritiesRequest
 */
export interface WorkLinkListWebsiteCertificateAuthoritiesRequest {
  /**
   * @schema WorkLinkListWebsiteCertificateAuthoritiesRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkListWebsiteCertificateAuthoritiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema WorkLinkListWebsiteCertificateAuthoritiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkLinkListWebsiteCertificateAuthoritiesResponse
 */
export interface WorkLinkListWebsiteCertificateAuthoritiesResponse {
  /**
   * @schema WorkLinkListWebsiteCertificateAuthoritiesResponse#WebsiteCertificateAuthorities
   */
  readonly websiteCertificateAuthorities?: WorkLinkWebsiteCaSummary[];

  /**
   * @schema WorkLinkListWebsiteCertificateAuthoritiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema WorkLinkRestoreDomainAccessRequest
 */
export interface WorkLinkRestoreDomainAccessRequest {
  /**
   * @schema WorkLinkRestoreDomainAccessRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkRestoreDomainAccessRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema WorkLinkRestoreDomainAccessResponse
 */
export interface WorkLinkRestoreDomainAccessResponse {
}

/**
 * @schema WorkLinkRevokeDomainAccessRequest
 */
export interface WorkLinkRevokeDomainAccessRequest {
  /**
   * @schema WorkLinkRevokeDomainAccessRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkRevokeDomainAccessRequest#DomainName
   */
  readonly domainName: string;

}

/**
 * @schema WorkLinkRevokeDomainAccessResponse
 */
export interface WorkLinkRevokeDomainAccessResponse {
}

/**
 * @schema WorkLinkSignOutUserRequest
 */
export interface WorkLinkSignOutUserRequest {
  /**
   * @schema WorkLinkSignOutUserRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkSignOutUserRequest#Username
   */
  readonly username: string;

}

/**
 * @schema WorkLinkSignOutUserResponse
 */
export interface WorkLinkSignOutUserResponse {
}

/**
 * @schema WorkLinkTagResourceRequest
 */
export interface WorkLinkTagResourceRequest {
  /**
   * @schema WorkLinkTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema WorkLinkTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema WorkLinkTagResourceResponse
 */
export interface WorkLinkTagResourceResponse {
}

/**
 * @schema WorkLinkUntagResourceRequest
 */
export interface WorkLinkUntagResourceRequest {
  /**
   * @schema WorkLinkUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema WorkLinkUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema WorkLinkUntagResourceResponse
 */
export interface WorkLinkUntagResourceResponse {
}

/**
 * @schema WorkLinkUpdateAuditStreamConfigurationRequest
 */
export interface WorkLinkUpdateAuditStreamConfigurationRequest {
  /**
   * @schema WorkLinkUpdateAuditStreamConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkUpdateAuditStreamConfigurationRequest#AuditStreamArn
   */
  readonly auditStreamArn?: string;

}

/**
 * @schema WorkLinkUpdateAuditStreamConfigurationResponse
 */
export interface WorkLinkUpdateAuditStreamConfigurationResponse {
}

/**
 * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest
 */
export interface WorkLinkUpdateCompanyNetworkConfigurationRequest {
  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema WorkLinkUpdateCompanyNetworkConfigurationResponse
 */
export interface WorkLinkUpdateCompanyNetworkConfigurationResponse {
}

/**
 * @schema WorkLinkUpdateDevicePolicyConfigurationRequest
 */
export interface WorkLinkUpdateDevicePolicyConfigurationRequest {
  /**
   * @schema WorkLinkUpdateDevicePolicyConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkUpdateDevicePolicyConfigurationRequest#DeviceCaCertificate
   */
  readonly deviceCaCertificate?: string;

}

/**
 * @schema WorkLinkUpdateDevicePolicyConfigurationResponse
 */
export interface WorkLinkUpdateDevicePolicyConfigurationResponse {
}

/**
 * @schema WorkLinkUpdateDomainMetadataRequest
 */
export interface WorkLinkUpdateDomainMetadataRequest {
  /**
   * @schema WorkLinkUpdateDomainMetadataRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkUpdateDomainMetadataRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema WorkLinkUpdateDomainMetadataRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema WorkLinkUpdateDomainMetadataResponse
 */
export interface WorkLinkUpdateDomainMetadataResponse {
}

/**
 * @schema WorkLinkUpdateFleetMetadataRequest
 */
export interface WorkLinkUpdateFleetMetadataRequest {
  /**
   * @schema WorkLinkUpdateFleetMetadataRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkUpdateFleetMetadataRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkUpdateFleetMetadataRequest#OptimizeForEndUserLocation
   */
  readonly optimizeForEndUserLocation?: boolean;

}

/**
 * @schema WorkLinkUpdateFleetMetadataResponse
 */
export interface WorkLinkUpdateFleetMetadataResponse {
}

/**
 * @schema WorkLinkUpdateIdentityProviderConfigurationRequest
 */
export interface WorkLinkUpdateIdentityProviderConfigurationRequest {
  /**
   * @schema WorkLinkUpdateIdentityProviderConfigurationRequest#FleetArn
   */
  readonly fleetArn: string;

  /**
   * @schema WorkLinkUpdateIdentityProviderConfigurationRequest#IdentityProviderType
   */
  readonly identityProviderType: string;

  /**
   * @schema WorkLinkUpdateIdentityProviderConfigurationRequest#IdentityProviderSamlMetadata
   */
  readonly identityProviderSamlMetadata?: string;

}

/**
 * @schema WorkLinkUpdateIdentityProviderConfigurationResponse
 */
export interface WorkLinkUpdateIdentityProviderConfigurationResponse {
}

/**
 * @schema WorkLinkDeviceSummary
 */
export interface WorkLinkDeviceSummary {
  /**
   * @schema WorkLinkDeviceSummary#DeviceId
   */
  readonly deviceId?: string;

  /**
   * @schema WorkLinkDeviceSummary#DeviceStatus
   */
  readonly deviceStatus?: string;

}

/**
 * @schema WorkLinkDomainSummary
 */
export interface WorkLinkDomainSummary {
  /**
   * @schema WorkLinkDomainSummary#DomainName
   */
  readonly domainName: string;

  /**
   * @schema WorkLinkDomainSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkDomainSummary#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema WorkLinkDomainSummary#DomainStatus
   */
  readonly domainStatus: string;

}

/**
 * @schema WorkLinkFleetSummary
 */
export interface WorkLinkFleetSummary {
  /**
   * @schema WorkLinkFleetSummary#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkFleetSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WorkLinkFleetSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema WorkLinkFleetSummary#FleetName
   */
  readonly fleetName?: string;

  /**
   * @schema WorkLinkFleetSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkFleetSummary#CompanyCode
   */
  readonly companyCode?: string;

  /**
   * @schema WorkLinkFleetSummary#FleetStatus
   */
  readonly fleetStatus?: string;

  /**
   * @schema WorkLinkFleetSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema WorkLinkWebsiteAuthorizationProviderSummary
 */
export interface WorkLinkWebsiteAuthorizationProviderSummary {
  /**
   * @schema WorkLinkWebsiteAuthorizationProviderSummary#AuthorizationProviderId
   */
  readonly authorizationProviderId?: string;

  /**
   * @schema WorkLinkWebsiteAuthorizationProviderSummary#AuthorizationProviderType
   */
  readonly authorizationProviderType: string;

  /**
   * @schema WorkLinkWebsiteAuthorizationProviderSummary#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkLinkWebsiteAuthorizationProviderSummary#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema WorkLinkWebsiteCaSummary
 */
export interface WorkLinkWebsiteCaSummary {
  /**
   * @schema WorkLinkWebsiteCaSummary#WebsiteCaId
   */
  readonly websiteCaId?: string;

  /**
   * @schema WorkLinkWebsiteCaSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WorkLinkWebsiteCaSummary#DisplayName
   */
  readonly displayName?: string;

}
