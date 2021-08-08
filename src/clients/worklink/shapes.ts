/**
 * @schema WorkLinkAssociateDomainRequest
 */
export interface WorkLinkAssociateDomainRequest {
  /**
   * @schema WorkLinkAssociateDomainRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkAssociateDomainRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkLinkAssociateDomainRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkAssociateDomainRequest#AcmCertificateArn
   */
  readonly acmCertificateArn?: string;

}

/**
 * Converts an object of type 'WorkLinkAssociateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkAssociateDomainRequest(obj: WorkLinkAssociateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DomainName': obj.domainName,
    'DisplayName': obj.displayName,
    'AcmCertificateArn': obj.acmCertificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkAssociateDomainResponse
 */
export interface WorkLinkAssociateDomainResponse {
}

/**
 * Converts an object of type 'WorkLinkAssociateDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkAssociateDomainResponse(obj: WorkLinkAssociateDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest
 */
export interface WorkLinkAssociateWebsiteAuthorizationProviderRequest {
  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest#AuthorizationProviderType
   */
  readonly authorizationProviderType?: string;

  /**
   * @schema WorkLinkAssociateWebsiteAuthorizationProviderRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'WorkLinkAssociateWebsiteAuthorizationProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkAssociateWebsiteAuthorizationProviderRequest(obj: WorkLinkAssociateWebsiteAuthorizationProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'AuthorizationProviderType': obj.authorizationProviderType,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkAssociateWebsiteAuthorizationProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkAssociateWebsiteAuthorizationProviderResponse(obj: WorkLinkAssociateWebsiteAuthorizationProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizationProviderId': obj.authorizationProviderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest
 */
export interface WorkLinkAssociateWebsiteCertificateAuthorityRequest {
  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema WorkLinkAssociateWebsiteCertificateAuthorityRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'WorkLinkAssociateWebsiteCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkAssociateWebsiteCertificateAuthorityRequest(obj: WorkLinkAssociateWebsiteCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'Certificate': obj.certificate,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkAssociateWebsiteCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkAssociateWebsiteCertificateAuthorityResponse(obj: WorkLinkAssociateWebsiteCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebsiteCaId': obj.websiteCaId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkCreateFleetRequest
 */
export interface WorkLinkCreateFleetRequest {
  /**
   * @schema WorkLinkCreateFleetRequest#FleetName
   */
  readonly fleetName?: string;

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
 * Converts an object of type 'WorkLinkCreateFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkCreateFleetRequest(obj: WorkLinkCreateFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetName': obj.fleetName,
    'DisplayName': obj.displayName,
    'OptimizeForEndUserLocation': obj.optimizeForEndUserLocation,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkCreateFleetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkCreateFleetResponse(obj: WorkLinkCreateFleetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDeleteFleetRequest
 */
export interface WorkLinkDeleteFleetRequest {
  /**
   * @schema WorkLinkDeleteFleetRequest#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'WorkLinkDeleteFleetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDeleteFleetRequest(obj: WorkLinkDeleteFleetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDeleteFleetResponse
 */
export interface WorkLinkDeleteFleetResponse {
}

/**
 * Converts an object of type 'WorkLinkDeleteFleetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDeleteFleetResponse(obj: WorkLinkDeleteFleetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeAuditStreamConfigurationRequest
 */
export interface WorkLinkDescribeAuditStreamConfigurationRequest {
  /**
   * @schema WorkLinkDescribeAuditStreamConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeAuditStreamConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeAuditStreamConfigurationRequest(obj: WorkLinkDescribeAuditStreamConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeAuditStreamConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeAuditStreamConfigurationResponse(obj: WorkLinkDescribeAuditStreamConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuditStreamArn': obj.auditStreamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeCompanyNetworkConfigurationRequest
 */
export interface WorkLinkDescribeCompanyNetworkConfigurationRequest {
  /**
   * @schema WorkLinkDescribeCompanyNetworkConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeCompanyNetworkConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeCompanyNetworkConfigurationRequest(obj: WorkLinkDescribeCompanyNetworkConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeCompanyNetworkConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeCompanyNetworkConfigurationResponse(obj: WorkLinkDescribeCompanyNetworkConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeDeviceRequest
 */
export interface WorkLinkDescribeDeviceRequest {
  /**
   * @schema WorkLinkDescribeDeviceRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkDescribeDeviceRequest#DeviceId
   */
  readonly deviceId?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeDeviceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeDeviceRequest(obj: WorkLinkDescribeDeviceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DeviceId': obj.deviceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeDeviceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeDeviceResponse(obj: WorkLinkDescribeDeviceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Model': obj.model,
    'Manufacturer': obj.manufacturer,
    'OperatingSystem': obj.operatingSystem,
    'OperatingSystemVersion': obj.operatingSystemVersion,
    'PatchLevel': obj.patchLevel,
    'FirstAccessedTime': obj.firstAccessedTime,
    'LastAccessedTime': obj.lastAccessedTime,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeDevicePolicyConfigurationRequest
 */
export interface WorkLinkDescribeDevicePolicyConfigurationRequest {
  /**
   * @schema WorkLinkDescribeDevicePolicyConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeDevicePolicyConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeDevicePolicyConfigurationRequest(obj: WorkLinkDescribeDevicePolicyConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeDevicePolicyConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeDevicePolicyConfigurationResponse(obj: WorkLinkDescribeDevicePolicyConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceCaCertificate': obj.deviceCaCertificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeDomainRequest
 */
export interface WorkLinkDescribeDomainRequest {
  /**
   * @schema WorkLinkDescribeDomainRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkDescribeDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeDomainRequest(obj: WorkLinkDescribeDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeDomainResponse(obj: WorkLinkDescribeDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DisplayName': obj.displayName,
    'CreatedTime': obj.createdTime,
    'DomainStatus': obj.domainStatus,
    'AcmCertificateArn': obj.acmCertificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeFleetMetadataRequest
 */
export interface WorkLinkDescribeFleetMetadataRequest {
  /**
   * @schema WorkLinkDescribeFleetMetadataRequest#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeFleetMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeFleetMetadataRequest(obj: WorkLinkDescribeFleetMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeFleetMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeFleetMetadataResponse(obj: WorkLinkDescribeFleetMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'FleetName': obj.fleetName,
    'DisplayName': obj.displayName,
    'OptimizeForEndUserLocation': obj.optimizeForEndUserLocation,
    'CompanyCode': obj.companyCode,
    'FleetStatus': obj.fleetStatus,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeIdentityProviderConfigurationRequest
 */
export interface WorkLinkDescribeIdentityProviderConfigurationRequest {
  /**
   * @schema WorkLinkDescribeIdentityProviderConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeIdentityProviderConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeIdentityProviderConfigurationRequest(obj: WorkLinkDescribeIdentityProviderConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeIdentityProviderConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeIdentityProviderConfigurationResponse(obj: WorkLinkDescribeIdentityProviderConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityProviderType': obj.identityProviderType,
    'ServiceProviderSamlMetadata': obj.serviceProviderSamlMetadata,
    'IdentityProviderSamlMetadata': obj.identityProviderSamlMetadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDescribeWebsiteCertificateAuthorityRequest
 */
export interface WorkLinkDescribeWebsiteCertificateAuthorityRequest {
  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkDescribeWebsiteCertificateAuthorityRequest#WebsiteCaId
   */
  readonly websiteCaId?: string;

}

/**
 * Converts an object of type 'WorkLinkDescribeWebsiteCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeWebsiteCertificateAuthorityRequest(obj: WorkLinkDescribeWebsiteCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'WebsiteCaId': obj.websiteCaId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDescribeWebsiteCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDescribeWebsiteCertificateAuthorityResponse(obj: WorkLinkDescribeWebsiteCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'CreatedTime': obj.createdTime,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDisassociateDomainRequest
 */
export interface WorkLinkDisassociateDomainRequest {
  /**
   * @schema WorkLinkDisassociateDomainRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkDisassociateDomainRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'WorkLinkDisassociateDomainRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDisassociateDomainRequest(obj: WorkLinkDisassociateDomainRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDisassociateDomainResponse
 */
export interface WorkLinkDisassociateDomainResponse {
}

/**
 * Converts an object of type 'WorkLinkDisassociateDomainResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDisassociateDomainResponse(obj: WorkLinkDisassociateDomainResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDisassociateWebsiteAuthorizationProviderRequest
 */
export interface WorkLinkDisassociateWebsiteAuthorizationProviderRequest {
  /**
   * @schema WorkLinkDisassociateWebsiteAuthorizationProviderRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkDisassociateWebsiteAuthorizationProviderRequest#AuthorizationProviderId
   */
  readonly authorizationProviderId?: string;

}

/**
 * Converts an object of type 'WorkLinkDisassociateWebsiteAuthorizationProviderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDisassociateWebsiteAuthorizationProviderRequest(obj: WorkLinkDisassociateWebsiteAuthorizationProviderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'AuthorizationProviderId': obj.authorizationProviderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDisassociateWebsiteAuthorizationProviderResponse
 */
export interface WorkLinkDisassociateWebsiteAuthorizationProviderResponse {
}

/**
 * Converts an object of type 'WorkLinkDisassociateWebsiteAuthorizationProviderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDisassociateWebsiteAuthorizationProviderResponse(obj: WorkLinkDisassociateWebsiteAuthorizationProviderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDisassociateWebsiteCertificateAuthorityRequest
 */
export interface WorkLinkDisassociateWebsiteCertificateAuthorityRequest {
  /**
   * @schema WorkLinkDisassociateWebsiteCertificateAuthorityRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkDisassociateWebsiteCertificateAuthorityRequest#WebsiteCaId
   */
  readonly websiteCaId?: string;

}

/**
 * Converts an object of type 'WorkLinkDisassociateWebsiteCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDisassociateWebsiteCertificateAuthorityRequest(obj: WorkLinkDisassociateWebsiteCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'WebsiteCaId': obj.websiteCaId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDisassociateWebsiteCertificateAuthorityResponse
 */
export interface WorkLinkDisassociateWebsiteCertificateAuthorityResponse {
}

/**
 * Converts an object of type 'WorkLinkDisassociateWebsiteCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDisassociateWebsiteCertificateAuthorityResponse(obj: WorkLinkDisassociateWebsiteCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkListDevicesRequest
 */
export interface WorkLinkListDevicesRequest {
  /**
   * @schema WorkLinkListDevicesRequest#FleetArn
   */
  readonly fleetArn?: string;

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
 * Converts an object of type 'WorkLinkListDevicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListDevicesRequest(obj: WorkLinkListDevicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkListDevicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListDevicesResponse(obj: WorkLinkListDevicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Devices': obj.devices?.map(y => toJson_WorkLinkDeviceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkListDomainsRequest
 */
export interface WorkLinkListDomainsRequest {
  /**
   * @schema WorkLinkListDomainsRequest#FleetArn
   */
  readonly fleetArn?: string;

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
 * Converts an object of type 'WorkLinkListDomainsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListDomainsRequest(obj: WorkLinkListDomainsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkListDomainsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListDomainsResponse(obj: WorkLinkListDomainsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domains': obj.domains?.map(y => toJson_WorkLinkDomainSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkListFleetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListFleetsRequest(obj: WorkLinkListFleetsRequest | undefined): Record<string, any> | undefined {
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
 * Converts an object of type 'WorkLinkListFleetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListFleetsResponse(obj: WorkLinkListFleetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetSummaryList': obj.fleetSummaryList?.map(y => toJson_WorkLinkFleetSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkListTagsForResourceRequest
 */
export interface WorkLinkListTagsForResourceRequest {
  /**
   * @schema WorkLinkListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'WorkLinkListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListTagsForResourceRequest(obj: WorkLinkListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListTagsForResourceResponse(obj: WorkLinkListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkListWebsiteAuthorizationProvidersRequest
 */
export interface WorkLinkListWebsiteAuthorizationProvidersRequest {
  /**
   * @schema WorkLinkListWebsiteAuthorizationProvidersRequest#FleetArn
   */
  readonly fleetArn?: string;

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
 * Converts an object of type 'WorkLinkListWebsiteAuthorizationProvidersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListWebsiteAuthorizationProvidersRequest(obj: WorkLinkListWebsiteAuthorizationProvidersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkListWebsiteAuthorizationProvidersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListWebsiteAuthorizationProvidersResponse(obj: WorkLinkListWebsiteAuthorizationProvidersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebsiteAuthorizationProviders': obj.websiteAuthorizationProviders?.map(y => toJson_WorkLinkWebsiteAuthorizationProviderSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkListWebsiteCertificateAuthoritiesRequest
 */
export interface WorkLinkListWebsiteCertificateAuthoritiesRequest {
  /**
   * @schema WorkLinkListWebsiteCertificateAuthoritiesRequest#FleetArn
   */
  readonly fleetArn?: string;

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
 * Converts an object of type 'WorkLinkListWebsiteCertificateAuthoritiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListWebsiteCertificateAuthoritiesRequest(obj: WorkLinkListWebsiteCertificateAuthoritiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkListWebsiteCertificateAuthoritiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkListWebsiteCertificateAuthoritiesResponse(obj: WorkLinkListWebsiteCertificateAuthoritiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebsiteCertificateAuthorities': obj.websiteCertificateAuthorities?.map(y => toJson_WorkLinkWebsiteCaSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkRestoreDomainAccessRequest
 */
export interface WorkLinkRestoreDomainAccessRequest {
  /**
   * @schema WorkLinkRestoreDomainAccessRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkRestoreDomainAccessRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'WorkLinkRestoreDomainAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkRestoreDomainAccessRequest(obj: WorkLinkRestoreDomainAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkRestoreDomainAccessResponse
 */
export interface WorkLinkRestoreDomainAccessResponse {
}

/**
 * Converts an object of type 'WorkLinkRestoreDomainAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkRestoreDomainAccessResponse(obj: WorkLinkRestoreDomainAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkRevokeDomainAccessRequest
 */
export interface WorkLinkRevokeDomainAccessRequest {
  /**
   * @schema WorkLinkRevokeDomainAccessRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkRevokeDomainAccessRequest#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'WorkLinkRevokeDomainAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkRevokeDomainAccessRequest(obj: WorkLinkRevokeDomainAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkRevokeDomainAccessResponse
 */
export interface WorkLinkRevokeDomainAccessResponse {
}

/**
 * Converts an object of type 'WorkLinkRevokeDomainAccessResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkRevokeDomainAccessResponse(obj: WorkLinkRevokeDomainAccessResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkSignOutUserRequest
 */
export interface WorkLinkSignOutUserRequest {
  /**
   * @schema WorkLinkSignOutUserRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkSignOutUserRequest#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'WorkLinkSignOutUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkSignOutUserRequest(obj: WorkLinkSignOutUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkSignOutUserResponse
 */
export interface WorkLinkSignOutUserResponse {
}

/**
 * Converts an object of type 'WorkLinkSignOutUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkSignOutUserResponse(obj: WorkLinkSignOutUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkTagResourceRequest
 */
export interface WorkLinkTagResourceRequest {
  /**
   * @schema WorkLinkTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema WorkLinkTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'WorkLinkTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkTagResourceRequest(obj: WorkLinkTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkTagResourceResponse
 */
export interface WorkLinkTagResourceResponse {
}

/**
 * Converts an object of type 'WorkLinkTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkTagResourceResponse(obj: WorkLinkTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUntagResourceRequest
 */
export interface WorkLinkUntagResourceRequest {
  /**
   * @schema WorkLinkUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema WorkLinkUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'WorkLinkUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUntagResourceRequest(obj: WorkLinkUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUntagResourceResponse
 */
export interface WorkLinkUntagResourceResponse {
}

/**
 * Converts an object of type 'WorkLinkUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUntagResourceResponse(obj: WorkLinkUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateAuditStreamConfigurationRequest
 */
export interface WorkLinkUpdateAuditStreamConfigurationRequest {
  /**
   * @schema WorkLinkUpdateAuditStreamConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkUpdateAuditStreamConfigurationRequest#AuditStreamArn
   */
  readonly auditStreamArn?: string;

}

/**
 * Converts an object of type 'WorkLinkUpdateAuditStreamConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateAuditStreamConfigurationRequest(obj: WorkLinkUpdateAuditStreamConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'AuditStreamArn': obj.auditStreamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateAuditStreamConfigurationResponse
 */
export interface WorkLinkUpdateAuditStreamConfigurationResponse {
}

/**
 * Converts an object of type 'WorkLinkUpdateAuditStreamConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateAuditStreamConfigurationResponse(obj: WorkLinkUpdateAuditStreamConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest
 */
export interface WorkLinkUpdateCompanyNetworkConfigurationRequest {
  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkLinkUpdateCompanyNetworkConfigurationRequest#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

}

/**
 * Converts an object of type 'WorkLinkUpdateCompanyNetworkConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateCompanyNetworkConfigurationRequest(obj: WorkLinkUpdateCompanyNetworkConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'VpcId': obj.vpcId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateCompanyNetworkConfigurationResponse
 */
export interface WorkLinkUpdateCompanyNetworkConfigurationResponse {
}

/**
 * Converts an object of type 'WorkLinkUpdateCompanyNetworkConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateCompanyNetworkConfigurationResponse(obj: WorkLinkUpdateCompanyNetworkConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateDevicePolicyConfigurationRequest
 */
export interface WorkLinkUpdateDevicePolicyConfigurationRequest {
  /**
   * @schema WorkLinkUpdateDevicePolicyConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkUpdateDevicePolicyConfigurationRequest#DeviceCaCertificate
   */
  readonly deviceCaCertificate?: string;

}

/**
 * Converts an object of type 'WorkLinkUpdateDevicePolicyConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateDevicePolicyConfigurationRequest(obj: WorkLinkUpdateDevicePolicyConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DeviceCaCertificate': obj.deviceCaCertificate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateDevicePolicyConfigurationResponse
 */
export interface WorkLinkUpdateDevicePolicyConfigurationResponse {
}

/**
 * Converts an object of type 'WorkLinkUpdateDevicePolicyConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateDevicePolicyConfigurationResponse(obj: WorkLinkUpdateDevicePolicyConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateDomainMetadataRequest
 */
export interface WorkLinkUpdateDomainMetadataRequest {
  /**
   * @schema WorkLinkUpdateDomainMetadataRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkUpdateDomainMetadataRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkLinkUpdateDomainMetadataRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'WorkLinkUpdateDomainMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateDomainMetadataRequest(obj: WorkLinkUpdateDomainMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DomainName': obj.domainName,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateDomainMetadataResponse
 */
export interface WorkLinkUpdateDomainMetadataResponse {
}

/**
 * Converts an object of type 'WorkLinkUpdateDomainMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateDomainMetadataResponse(obj: WorkLinkUpdateDomainMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateFleetMetadataRequest
 */
export interface WorkLinkUpdateFleetMetadataRequest {
  /**
   * @schema WorkLinkUpdateFleetMetadataRequest#FleetArn
   */
  readonly fleetArn?: string;

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
 * Converts an object of type 'WorkLinkUpdateFleetMetadataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateFleetMetadataRequest(obj: WorkLinkUpdateFleetMetadataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'DisplayName': obj.displayName,
    'OptimizeForEndUserLocation': obj.optimizeForEndUserLocation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateFleetMetadataResponse
 */
export interface WorkLinkUpdateFleetMetadataResponse {
}

/**
 * Converts an object of type 'WorkLinkUpdateFleetMetadataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateFleetMetadataResponse(obj: WorkLinkUpdateFleetMetadataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateIdentityProviderConfigurationRequest
 */
export interface WorkLinkUpdateIdentityProviderConfigurationRequest {
  /**
   * @schema WorkLinkUpdateIdentityProviderConfigurationRequest#FleetArn
   */
  readonly fleetArn?: string;

  /**
   * @schema WorkLinkUpdateIdentityProviderConfigurationRequest#IdentityProviderType
   */
  readonly identityProviderType?: string;

  /**
   * @schema WorkLinkUpdateIdentityProviderConfigurationRequest#IdentityProviderSamlMetadata
   */
  readonly identityProviderSamlMetadata?: string;

}

/**
 * Converts an object of type 'WorkLinkUpdateIdentityProviderConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateIdentityProviderConfigurationRequest(obj: WorkLinkUpdateIdentityProviderConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'IdentityProviderType': obj.identityProviderType,
    'IdentityProviderSamlMetadata': obj.identityProviderSamlMetadata,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkUpdateIdentityProviderConfigurationResponse
 */
export interface WorkLinkUpdateIdentityProviderConfigurationResponse {
}

/**
 * Converts an object of type 'WorkLinkUpdateIdentityProviderConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkUpdateIdentityProviderConfigurationResponse(obj: WorkLinkUpdateIdentityProviderConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkDeviceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDeviceSummary(obj: WorkLinkDeviceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceId': obj.deviceId,
    'DeviceStatus': obj.deviceStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkLinkDomainSummary
 */
export interface WorkLinkDomainSummary {
  /**
   * @schema WorkLinkDomainSummary#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema WorkLinkDomainSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema WorkLinkDomainSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema WorkLinkDomainSummary#DomainStatus
   */
  readonly domainStatus?: string;

}

/**
 * Converts an object of type 'WorkLinkDomainSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkDomainSummary(obj: WorkLinkDomainSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'DisplayName': obj.displayName,
    'CreatedTime': obj.createdTime,
    'DomainStatus': obj.domainStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'WorkLinkFleetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkFleetSummary(obj: WorkLinkFleetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FleetArn': obj.fleetArn,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'FleetName': obj.fleetName,
    'DisplayName': obj.displayName,
    'CompanyCode': obj.companyCode,
    'FleetStatus': obj.fleetStatus,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly authorizationProviderType?: string;

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
 * Converts an object of type 'WorkLinkWebsiteAuthorizationProviderSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkWebsiteAuthorizationProviderSummary(obj: WorkLinkWebsiteAuthorizationProviderSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuthorizationProviderId': obj.authorizationProviderId,
    'AuthorizationProviderType': obj.authorizationProviderType,
    'DomainName': obj.domainName,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'WorkLinkWebsiteCaSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkLinkWebsiteCaSummary(obj: WorkLinkWebsiteCaSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WebsiteCaId': obj.websiteCaId,
    'CreatedTime': obj.createdTime,
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
