/**
 * @schema LicenseManagerAcceptGrantRequest
 */
export interface LicenseManagerAcceptGrantRequest {
  /**
   * @schema LicenseManagerAcceptGrantRequest#GrantArn
   */
  readonly grantArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerAcceptGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerAcceptGrantRequest(obj: LicenseManagerAcceptGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerAcceptGrantResponse
 */
export interface LicenseManagerAcceptGrantResponse {
  /**
   * @schema LicenseManagerAcceptGrantResponse#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerAcceptGrantResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerAcceptGrantResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerAcceptGrantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerAcceptGrantResponse(obj: LicenseManagerAcceptGrantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'Status': obj.status,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCheckInLicenseRequest
 */
export interface LicenseManagerCheckInLicenseRequest {
  /**
   * @schema LicenseManagerCheckInLicenseRequest#LicenseConsumptionToken
   */
  readonly licenseConsumptionToken?: string;

  /**
   * @schema LicenseManagerCheckInLicenseRequest#Beneficiary
   */
  readonly beneficiary?: string;

}

/**
 * Converts an object of type 'LicenseManagerCheckInLicenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCheckInLicenseRequest(obj: LicenseManagerCheckInLicenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConsumptionToken': obj.licenseConsumptionToken,
    'Beneficiary': obj.beneficiary,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCheckInLicenseResponse
 */
export interface LicenseManagerCheckInLicenseResponse {
}

/**
 * Converts an object of type 'LicenseManagerCheckInLicenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCheckInLicenseResponse(obj: LicenseManagerCheckInLicenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCheckoutBorrowLicenseRequest
 */
export interface LicenseManagerCheckoutBorrowLicenseRequest {
  /**
   * @schema LicenseManagerCheckoutBorrowLicenseRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseRequest#Entitlements
   */
  readonly entitlements?: LicenseManagerEntitlementData[];

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseRequest#DigitalSignatureMethod
   */
  readonly digitalSignatureMethod?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseRequest#NodeId
   */
  readonly nodeId?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseRequest#CheckoutMetadata
   */
  readonly checkoutMetadata?: LicenseManagerMetadata[];

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerCheckoutBorrowLicenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCheckoutBorrowLicenseRequest(obj: LicenseManagerCheckoutBorrowLicenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'Entitlements': obj.entitlements?.map(y => toJson_LicenseManagerEntitlementData(y)),
    'DigitalSignatureMethod': obj.digitalSignatureMethod,
    'NodeId': obj.nodeId,
    'CheckoutMetadata': obj.checkoutMetadata?.map(y => toJson_LicenseManagerMetadata(y)),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCheckoutBorrowLicenseResponse
 */
export interface LicenseManagerCheckoutBorrowLicenseResponse {
  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#LicenseConsumptionToken
   */
  readonly licenseConsumptionToken?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#EntitlementsAllowed
   */
  readonly entitlementsAllowed?: LicenseManagerEntitlementData[];

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#NodeId
   */
  readonly nodeId?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#SignedToken
   */
  readonly signedToken?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#Expiration
   */
  readonly expiration?: string;

  /**
   * @schema LicenseManagerCheckoutBorrowLicenseResponse#CheckoutMetadata
   */
  readonly checkoutMetadata?: LicenseManagerMetadata[];

}

/**
 * Converts an object of type 'LicenseManagerCheckoutBorrowLicenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCheckoutBorrowLicenseResponse(obj: LicenseManagerCheckoutBorrowLicenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'LicenseConsumptionToken': obj.licenseConsumptionToken,
    'EntitlementsAllowed': obj.entitlementsAllowed?.map(y => toJson_LicenseManagerEntitlementData(y)),
    'NodeId': obj.nodeId,
    'SignedToken': obj.signedToken,
    'IssuedAt': obj.issuedAt,
    'Expiration': obj.expiration,
    'CheckoutMetadata': obj.checkoutMetadata?.map(y => toJson_LicenseManagerMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCheckoutLicenseRequest
 */
export interface LicenseManagerCheckoutLicenseRequest {
  /**
   * @schema LicenseManagerCheckoutLicenseRequest#ProductSKU
   */
  readonly productSku?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseRequest#CheckoutType
   */
  readonly checkoutType?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseRequest#KeyFingerprint
   */
  readonly keyFingerprint?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseRequest#Entitlements
   */
  readonly entitlements?: LicenseManagerEntitlementData[];

  /**
   * @schema LicenseManagerCheckoutLicenseRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseRequest#Beneficiary
   */
  readonly beneficiary?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseRequest#NodeId
   */
  readonly nodeId?: string;

}

/**
 * Converts an object of type 'LicenseManagerCheckoutLicenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCheckoutLicenseRequest(obj: LicenseManagerCheckoutLicenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductSKU': obj.productSku,
    'CheckoutType': obj.checkoutType,
    'KeyFingerprint': obj.keyFingerprint,
    'Entitlements': obj.entitlements?.map(y => toJson_LicenseManagerEntitlementData(y)),
    'ClientToken': obj.clientToken,
    'Beneficiary': obj.beneficiary,
    'NodeId': obj.nodeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCheckoutLicenseResponse
 */
export interface LicenseManagerCheckoutLicenseResponse {
  /**
   * @schema LicenseManagerCheckoutLicenseResponse#CheckoutType
   */
  readonly checkoutType?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseResponse#LicenseConsumptionToken
   */
  readonly licenseConsumptionToken?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseResponse#EntitlementsAllowed
   */
  readonly entitlementsAllowed?: LicenseManagerEntitlementData[];

  /**
   * @schema LicenseManagerCheckoutLicenseResponse#SignedToken
   */
  readonly signedToken?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseResponse#NodeId
   */
  readonly nodeId?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseResponse#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema LicenseManagerCheckoutLicenseResponse#Expiration
   */
  readonly expiration?: string;

}

/**
 * Converts an object of type 'LicenseManagerCheckoutLicenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCheckoutLicenseResponse(obj: LicenseManagerCheckoutLicenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CheckoutType': obj.checkoutType,
    'LicenseConsumptionToken': obj.licenseConsumptionToken,
    'EntitlementsAllowed': obj.entitlementsAllowed?.map(y => toJson_LicenseManagerEntitlementData(y)),
    'SignedToken': obj.signedToken,
    'NodeId': obj.nodeId,
    'IssuedAt': obj.issuedAt,
    'Expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateGrantRequest
 */
export interface LicenseManagerCreateGrantRequest {
  /**
   * @schema LicenseManagerCreateGrantRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LicenseManagerCreateGrantRequest#GrantName
   */
  readonly grantName?: string;

  /**
   * @schema LicenseManagerCreateGrantRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCreateGrantRequest#Principals
   */
  readonly principals?: string[];

  /**
   * @schema LicenseManagerCreateGrantRequest#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema LicenseManagerCreateGrantRequest#AllowedOperations
   */
  readonly allowedOperations?: string[];

}

/**
 * Converts an object of type 'LicenseManagerCreateGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateGrantRequest(obj: LicenseManagerCreateGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'GrantName': obj.grantName,
    'LicenseArn': obj.licenseArn,
    'Principals': obj.principals?.map(y => y),
    'HomeRegion': obj.homeRegion,
    'AllowedOperations': obj.allowedOperations?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateGrantResponse
 */
export interface LicenseManagerCreateGrantResponse {
  /**
   * @schema LicenseManagerCreateGrantResponse#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerCreateGrantResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerCreateGrantResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateGrantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateGrantResponse(obj: LicenseManagerCreateGrantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'Status': obj.status,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateGrantVersionRequest
 */
export interface LicenseManagerCreateGrantVersionRequest {
  /**
   * @schema LicenseManagerCreateGrantVersionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionRequest#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionRequest#GrantName
   */
  readonly grantName?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionRequest#AllowedOperations
   */
  readonly allowedOperations?: string[];

  /**
   * @schema LicenseManagerCreateGrantVersionRequest#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionRequest#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionRequest#SourceVersion
   */
  readonly sourceVersion?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateGrantVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateGrantVersionRequest(obj: LicenseManagerCreateGrantVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'GrantArn': obj.grantArn,
    'GrantName': obj.grantName,
    'AllowedOperations': obj.allowedOperations?.map(y => y),
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'SourceVersion': obj.sourceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateGrantVersionResponse
 */
export interface LicenseManagerCreateGrantVersionResponse {
  /**
   * @schema LicenseManagerCreateGrantVersionResponse#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerCreateGrantVersionResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateGrantVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateGrantVersionResponse(obj: LicenseManagerCreateGrantVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'Status': obj.status,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseRequest
 */
export interface LicenseManagerCreateLicenseRequest {
  /**
   * @schema LicenseManagerCreateLicenseRequest#LicenseName
   */
  readonly licenseName?: string;

  /**
   * @schema LicenseManagerCreateLicenseRequest#ProductName
   */
  readonly productName?: string;

  /**
   * @schema LicenseManagerCreateLicenseRequest#ProductSKU
   */
  readonly productSku?: string;

  /**
   * @schema LicenseManagerCreateLicenseRequest#Issuer
   */
  readonly issuer?: LicenseManagerIssuer;

  /**
   * @schema LicenseManagerCreateLicenseRequest#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema LicenseManagerCreateLicenseRequest#Validity
   */
  readonly validity?: LicenseManagerDatetimeRange;

  /**
   * @schema LicenseManagerCreateLicenseRequest#Entitlements
   */
  readonly entitlements?: LicenseManagerEntitlement[];

  /**
   * @schema LicenseManagerCreateLicenseRequest#Beneficiary
   */
  readonly beneficiary?: string;

  /**
   * @schema LicenseManagerCreateLicenseRequest#ConsumptionConfiguration
   */
  readonly consumptionConfiguration?: LicenseManagerConsumptionConfiguration;

  /**
   * @schema LicenseManagerCreateLicenseRequest#LicenseMetadata
   */
  readonly licenseMetadata?: LicenseManagerMetadata[];

  /**
   * @schema LicenseManagerCreateLicenseRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseRequest(obj: LicenseManagerCreateLicenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseName': obj.licenseName,
    'ProductName': obj.productName,
    'ProductSKU': obj.productSku,
    'Issuer': toJson_LicenseManagerIssuer(obj.issuer),
    'HomeRegion': obj.homeRegion,
    'Validity': toJson_LicenseManagerDatetimeRange(obj.validity),
    'Entitlements': obj.entitlements?.map(y => toJson_LicenseManagerEntitlement(y)),
    'Beneficiary': obj.beneficiary,
    'ConsumptionConfiguration': toJson_LicenseManagerConsumptionConfiguration(obj.consumptionConfiguration),
    'LicenseMetadata': obj.licenseMetadata?.map(y => toJson_LicenseManagerMetadata(y)),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseResponse
 */
export interface LicenseManagerCreateLicenseResponse {
  /**
   * @schema LicenseManagerCreateLicenseResponse#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCreateLicenseResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerCreateLicenseResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseResponse(obj: LicenseManagerCreateLicenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'Status': obj.status,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseConfigurationRequest
 */
export interface LicenseManagerCreateLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#Tags
   */
  readonly tags?: LicenseManagerTag[];

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#DisassociateWhenNotFound
   */
  readonly disassociateWhenNotFound?: boolean;

  /**
   * @schema LicenseManagerCreateLicenseConfigurationRequest#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseConfigurationRequest(obj: LicenseManagerCreateLicenseConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'LicenseCountingType': obj.licenseCountingType,
    'LicenseCount': obj.licenseCount,
    'LicenseCountHardLimit': obj.licenseCountHardLimit,
    'LicenseRules': obj.licenseRules?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_LicenseManagerTag(y)),
    'DisassociateWhenNotFound': obj.disassociateWhenNotFound,
    'ProductInformationList': obj.productInformationList?.map(y => toJson_LicenseManagerProductInformation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseConfigurationResponse
 */
export interface LicenseManagerCreateLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerCreateLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseConfigurationResponse(obj: LicenseManagerCreateLicenseConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest
 */
export interface LicenseManagerCreateLicenseManagerReportGeneratorRequest {
  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#ReportGeneratorName
   */
  readonly reportGeneratorName?: string;

  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#Type
   */
  readonly type?: string[];

  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#ReportContext
   */
  readonly reportContext?: LicenseManagerReportContext;

  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#ReportFrequency
   */
  readonly reportFrequency?: LicenseManagerReportFrequency;

  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorRequest#Tags
   */
  readonly tags?: LicenseManagerTag[];

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseManagerReportGeneratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseManagerReportGeneratorRequest(obj: LicenseManagerCreateLicenseManagerReportGeneratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportGeneratorName': obj.reportGeneratorName,
    'Type': obj.type?.map(y => y),
    'ReportContext': toJson_LicenseManagerReportContext(obj.reportContext),
    'ReportFrequency': toJson_LicenseManagerReportFrequency(obj.reportFrequency),
    'ClientToken': obj.clientToken,
    'Description': obj.description,
    'Tags': obj.tags?.map(y => toJson_LicenseManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseManagerReportGeneratorResponse
 */
export interface LicenseManagerCreateLicenseManagerReportGeneratorResponse {
  /**
   * @schema LicenseManagerCreateLicenseManagerReportGeneratorResponse#LicenseManagerReportGeneratorArn
   */
  readonly licenseManagerReportGeneratorArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseManagerReportGeneratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseManagerReportGeneratorResponse(obj: LicenseManagerCreateLicenseManagerReportGeneratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseManagerReportGeneratorArn': obj.licenseManagerReportGeneratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseVersionRequest
 */
export interface LicenseManagerCreateLicenseVersionRequest {
  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#LicenseName
   */
  readonly licenseName?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#ProductName
   */
  readonly productName?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#Issuer
   */
  readonly issuer?: LicenseManagerIssuer;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#Validity
   */
  readonly validity?: LicenseManagerDatetimeRange;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#LicenseMetadata
   */
  readonly licenseMetadata?: LicenseManagerMetadata[];

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#Entitlements
   */
  readonly entitlements?: LicenseManagerEntitlement[];

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#ConsumptionConfiguration
   */
  readonly consumptionConfiguration?: LicenseManagerConsumptionConfiguration;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionRequest#SourceVersion
   */
  readonly sourceVersion?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseVersionRequest(obj: LicenseManagerCreateLicenseVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'LicenseName': obj.licenseName,
    'ProductName': obj.productName,
    'Issuer': toJson_LicenseManagerIssuer(obj.issuer),
    'HomeRegion': obj.homeRegion,
    'Validity': toJson_LicenseManagerDatetimeRange(obj.validity),
    'LicenseMetadata': obj.licenseMetadata?.map(y => toJson_LicenseManagerMetadata(y)),
    'Entitlements': obj.entitlements?.map(y => toJson_LicenseManagerEntitlement(y)),
    'ConsumptionConfiguration': toJson_LicenseManagerConsumptionConfiguration(obj.consumptionConfiguration),
    'Status': obj.status,
    'ClientToken': obj.clientToken,
    'SourceVersion': obj.sourceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateLicenseVersionResponse
 */
export interface LicenseManagerCreateLicenseVersionResponse {
  /**
   * @schema LicenseManagerCreateLicenseVersionResponse#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionResponse#Version
   */
  readonly version?: string;

  /**
   * @schema LicenseManagerCreateLicenseVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateLicenseVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateLicenseVersionResponse(obj: LicenseManagerCreateLicenseVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'Version': obj.version,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateTokenRequest
 */
export interface LicenseManagerCreateTokenRequest {
  /**
   * @schema LicenseManagerCreateTokenRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerCreateTokenRequest#RoleArns
   */
  readonly roleArns?: string[];

  /**
   * @schema LicenseManagerCreateTokenRequest#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema LicenseManagerCreateTokenRequest#TokenProperties
   */
  readonly tokenProperties?: string[];

  /**
   * @schema LicenseManagerCreateTokenRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateTokenRequest(obj: LicenseManagerCreateTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'RoleArns': obj.roleArns?.map(y => y),
    'ExpirationInDays': obj.expirationInDays,
    'TokenProperties': obj.tokenProperties?.map(y => y),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerCreateTokenResponse
 */
export interface LicenseManagerCreateTokenResponse {
  /**
   * @schema LicenseManagerCreateTokenResponse#TokenId
   */
  readonly tokenId?: string;

  /**
   * @schema LicenseManagerCreateTokenResponse#TokenType
   */
  readonly tokenType?: string;

  /**
   * @schema LicenseManagerCreateTokenResponse#Token
   */
  readonly token?: string;

}

/**
 * Converts an object of type 'LicenseManagerCreateTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerCreateTokenResponse(obj: LicenseManagerCreateTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TokenId': obj.tokenId,
    'TokenType': obj.tokenType,
    'Token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteGrantRequest
 */
export interface LicenseManagerDeleteGrantRequest {
  /**
   * @schema LicenseManagerDeleteGrantRequest#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerDeleteGrantRequest#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema LicenseManagerDeleteGrantRequest#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteGrantRequest(obj: LicenseManagerDeleteGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'StatusReason': obj.statusReason,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteGrantResponse
 */
export interface LicenseManagerDeleteGrantResponse {
  /**
   * @schema LicenseManagerDeleteGrantResponse#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerDeleteGrantResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerDeleteGrantResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteGrantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteGrantResponse(obj: LicenseManagerDeleteGrantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'Status': obj.status,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteLicenseRequest
 */
export interface LicenseManagerDeleteLicenseRequest {
  /**
   * @schema LicenseManagerDeleteLicenseRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerDeleteLicenseRequest#SourceVersion
   */
  readonly sourceVersion?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteLicenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteLicenseRequest(obj: LicenseManagerDeleteLicenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'SourceVersion': obj.sourceVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteLicenseResponse
 */
export interface LicenseManagerDeleteLicenseResponse {
  /**
   * @schema LicenseManagerDeleteLicenseResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerDeleteLicenseResponse#DeletionDate
   */
  readonly deletionDate?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteLicenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteLicenseResponse(obj: LicenseManagerDeleteLicenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'DeletionDate': obj.deletionDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteLicenseConfigurationRequest
 */
export interface LicenseManagerDeleteLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerDeleteLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteLicenseConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteLicenseConfigurationRequest(obj: LicenseManagerDeleteLicenseConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteLicenseConfigurationResponse
 */
export interface LicenseManagerDeleteLicenseConfigurationResponse {
}

/**
 * Converts an object of type 'LicenseManagerDeleteLicenseConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteLicenseConfigurationResponse(obj: LicenseManagerDeleteLicenseConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteLicenseManagerReportGeneratorRequest
 */
export interface LicenseManagerDeleteLicenseManagerReportGeneratorRequest {
  /**
   * @schema LicenseManagerDeleteLicenseManagerReportGeneratorRequest#LicenseManagerReportGeneratorArn
   */
  readonly licenseManagerReportGeneratorArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteLicenseManagerReportGeneratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteLicenseManagerReportGeneratorRequest(obj: LicenseManagerDeleteLicenseManagerReportGeneratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseManagerReportGeneratorArn': obj.licenseManagerReportGeneratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteLicenseManagerReportGeneratorResponse
 */
export interface LicenseManagerDeleteLicenseManagerReportGeneratorResponse {
}

/**
 * Converts an object of type 'LicenseManagerDeleteLicenseManagerReportGeneratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteLicenseManagerReportGeneratorResponse(obj: LicenseManagerDeleteLicenseManagerReportGeneratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteTokenRequest
 */
export interface LicenseManagerDeleteTokenRequest {
  /**
   * @schema LicenseManagerDeleteTokenRequest#TokenId
   */
  readonly tokenId?: string;

}

/**
 * Converts an object of type 'LicenseManagerDeleteTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteTokenRequest(obj: LicenseManagerDeleteTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TokenId': obj.tokenId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDeleteTokenResponse
 */
export interface LicenseManagerDeleteTokenResponse {
}

/**
 * Converts an object of type 'LicenseManagerDeleteTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDeleteTokenResponse(obj: LicenseManagerDeleteTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerExtendLicenseConsumptionRequest
 */
export interface LicenseManagerExtendLicenseConsumptionRequest {
  /**
   * @schema LicenseManagerExtendLicenseConsumptionRequest#LicenseConsumptionToken
   */
  readonly licenseConsumptionToken?: string;

  /**
   * @schema LicenseManagerExtendLicenseConsumptionRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'LicenseManagerExtendLicenseConsumptionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerExtendLicenseConsumptionRequest(obj: LicenseManagerExtendLicenseConsumptionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConsumptionToken': obj.licenseConsumptionToken,
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerExtendLicenseConsumptionResponse
 */
export interface LicenseManagerExtendLicenseConsumptionResponse {
  /**
   * @schema LicenseManagerExtendLicenseConsumptionResponse#LicenseConsumptionToken
   */
  readonly licenseConsumptionToken?: string;

  /**
   * @schema LicenseManagerExtendLicenseConsumptionResponse#Expiration
   */
  readonly expiration?: string;

}

/**
 * Converts an object of type 'LicenseManagerExtendLicenseConsumptionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerExtendLicenseConsumptionResponse(obj: LicenseManagerExtendLicenseConsumptionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConsumptionToken': obj.licenseConsumptionToken,
    'Expiration': obj.expiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetAccessTokenRequest
 */
export interface LicenseManagerGetAccessTokenRequest {
  /**
   * @schema LicenseManagerGetAccessTokenRequest#Token
   */
  readonly token?: string;

  /**
   * @schema LicenseManagerGetAccessTokenRequest#TokenProperties
   */
  readonly tokenProperties?: string[];

}

/**
 * Converts an object of type 'LicenseManagerGetAccessTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetAccessTokenRequest(obj: LicenseManagerGetAccessTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Token': obj.token,
    'TokenProperties': obj.tokenProperties?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetAccessTokenResponse
 */
export interface LicenseManagerGetAccessTokenResponse {
  /**
   * @schema LicenseManagerGetAccessTokenResponse#AccessToken
   */
  readonly accessToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetAccessTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetAccessTokenResponse(obj: LicenseManagerGetAccessTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessToken': obj.accessToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetGrantRequest
 */
export interface LicenseManagerGetGrantRequest {
  /**
   * @schema LicenseManagerGetGrantRequest#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerGetGrantRequest#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetGrantRequest(obj: LicenseManagerGetGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetGrantResponse
 */
export interface LicenseManagerGetGrantResponse {
  /**
   * @schema LicenseManagerGetGrantResponse#Grant
   */
  readonly grant?: LicenseManagerGrant;

}

/**
 * Converts an object of type 'LicenseManagerGetGrantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetGrantResponse(obj: LicenseManagerGetGrantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grant': toJson_LicenseManagerGrant(obj.grant),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseRequest
 */
export interface LicenseManagerGetLicenseRequest {
  /**
   * @schema LicenseManagerGetLicenseRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerGetLicenseRequest#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseRequest(obj: LicenseManagerGetLicenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseResponse
 */
export interface LicenseManagerGetLicenseResponse {
  /**
   * @schema LicenseManagerGetLicenseResponse#License
   */
  readonly license?: LicenseManagerLicense;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseResponse(obj: LicenseManagerGetLicenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'License': toJson_LicenseManagerLicense(obj.license),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseConfigurationRequest
 */
export interface LicenseManagerGetLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerGetLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseConfigurationRequest(obj: LicenseManagerGetLicenseConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseConfigurationResponse
 */
export interface LicenseManagerGetLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseConfigurationId
   */
  readonly licenseConfigurationId?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ConsumedLicenseSummaryList
   */
  readonly consumedLicenseSummaryList?: LicenseManagerConsumedLicenseSummary[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ManagedResourceSummaryList
   */
  readonly managedResourceSummaryList?: LicenseManagerManagedResourceSummary[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#Tags
   */
  readonly tags?: LicenseManagerTag[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#AutomatedDiscoveryInformation
   */
  readonly automatedDiscoveryInformation?: LicenseManagerAutomatedDiscoveryInformation;

  /**
   * @schema LicenseManagerGetLicenseConfigurationResponse#DisassociateWhenNotFound
   */
  readonly disassociateWhenNotFound?: boolean;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseConfigurationResponse(obj: LicenseManagerGetLicenseConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationId': obj.licenseConfigurationId,
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'Name': obj.name,
    'Description': obj.description,
    'LicenseCountingType': obj.licenseCountingType,
    'LicenseRules': obj.licenseRules?.map(y => y),
    'LicenseCount': obj.licenseCount,
    'LicenseCountHardLimit': obj.licenseCountHardLimit,
    'ConsumedLicenses': obj.consumedLicenses,
    'Status': obj.status,
    'OwnerAccountId': obj.ownerAccountId,
    'ConsumedLicenseSummaryList': obj.consumedLicenseSummaryList?.map(y => toJson_LicenseManagerConsumedLicenseSummary(y)),
    'ManagedResourceSummaryList': obj.managedResourceSummaryList?.map(y => toJson_LicenseManagerManagedResourceSummary(y)),
    'Tags': obj.tags?.map(y => toJson_LicenseManagerTag(y)),
    'ProductInformationList': obj.productInformationList?.map(y => toJson_LicenseManagerProductInformation(y)),
    'AutomatedDiscoveryInformation': toJson_LicenseManagerAutomatedDiscoveryInformation(obj.automatedDiscoveryInformation),
    'DisassociateWhenNotFound': obj.disassociateWhenNotFound,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseManagerReportGeneratorRequest
 */
export interface LicenseManagerGetLicenseManagerReportGeneratorRequest {
  /**
   * @schema LicenseManagerGetLicenseManagerReportGeneratorRequest#LicenseManagerReportGeneratorArn
   */
  readonly licenseManagerReportGeneratorArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseManagerReportGeneratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseManagerReportGeneratorRequest(obj: LicenseManagerGetLicenseManagerReportGeneratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseManagerReportGeneratorArn': obj.licenseManagerReportGeneratorArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseManagerReportGeneratorResponse
 */
export interface LicenseManagerGetLicenseManagerReportGeneratorResponse {
  /**
   * @schema LicenseManagerGetLicenseManagerReportGeneratorResponse#ReportGenerator
   */
  readonly reportGenerator?: LicenseManagerReportGenerator;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseManagerReportGeneratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseManagerReportGeneratorResponse(obj: LicenseManagerGetLicenseManagerReportGeneratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportGenerator': toJson_LicenseManagerReportGenerator(obj.reportGenerator),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseUsageRequest
 */
export interface LicenseManagerGetLicenseUsageRequest {
  /**
   * @schema LicenseManagerGetLicenseUsageRequest#LicenseArn
   */
  readonly licenseArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseUsageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseUsageRequest(obj: LicenseManagerGetLicenseUsageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetLicenseUsageResponse
 */
export interface LicenseManagerGetLicenseUsageResponse {
  /**
   * @schema LicenseManagerGetLicenseUsageResponse#LicenseUsage
   */
  readonly licenseUsage?: LicenseManagerLicenseUsage;

}

/**
 * Converts an object of type 'LicenseManagerGetLicenseUsageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetLicenseUsageResponse(obj: LicenseManagerGetLicenseUsageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseUsage': toJson_LicenseManagerLicenseUsage(obj.licenseUsage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetServiceSettingsRequest
 */
export interface LicenseManagerGetServiceSettingsRequest {
}

/**
 * Converts an object of type 'LicenseManagerGetServiceSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetServiceSettingsRequest(obj: LicenseManagerGetServiceSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGetServiceSettingsResponse
 */
export interface LicenseManagerGetServiceSettingsResponse {
  /**
   * @schema LicenseManagerGetServiceSettingsResponse#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#OrganizationConfiguration
   */
  readonly organizationConfiguration?: LicenseManagerOrganizationConfiguration;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#EnableCrossAccountsDiscovery
   */
  readonly enableCrossAccountsDiscovery?: boolean;

  /**
   * @schema LicenseManagerGetServiceSettingsResponse#LicenseManagerResourceShareArn
   */
  readonly licenseManagerResourceShareArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerGetServiceSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGetServiceSettingsResponse(obj: LicenseManagerGetServiceSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketArn': obj.s3BucketArn,
    'SnsTopicArn': obj.snsTopicArn,
    'OrganizationConfiguration': toJson_LicenseManagerOrganizationConfiguration(obj.organizationConfiguration),
    'EnableCrossAccountsDiscovery': obj.enableCrossAccountsDiscovery,
    'LicenseManagerResourceShareArn': obj.licenseManagerResourceShareArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest
 */
export interface LicenseManagerListAssociationsForLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListAssociationsForLicenseConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListAssociationsForLicenseConfigurationRequest(obj: LicenseManagerListAssociationsForLicenseConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListAssociationsForLicenseConfigurationResponse
 */
export interface LicenseManagerListAssociationsForLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationResponse#LicenseConfigurationAssociations
   */
  readonly licenseConfigurationAssociations?: LicenseManagerLicenseConfigurationAssociation[];

  /**
   * @schema LicenseManagerListAssociationsForLicenseConfigurationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListAssociationsForLicenseConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListAssociationsForLicenseConfigurationResponse(obj: LicenseManagerListAssociationsForLicenseConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationAssociations': obj.licenseConfigurationAssociations?.map(y => toJson_LicenseManagerLicenseConfigurationAssociation(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListDistributedGrantsRequest
 */
export interface LicenseManagerListDistributedGrantsRequest {
  /**
   * @schema LicenseManagerListDistributedGrantsRequest#GrantArns
   */
  readonly grantArns?: string[];

  /**
   * @schema LicenseManagerListDistributedGrantsRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

  /**
   * @schema LicenseManagerListDistributedGrantsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListDistributedGrantsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListDistributedGrantsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListDistributedGrantsRequest(obj: LicenseManagerListDistributedGrantsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArns': obj.grantArns?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListDistributedGrantsResponse
 */
export interface LicenseManagerListDistributedGrantsResponse {
  /**
   * @schema LicenseManagerListDistributedGrantsResponse#Grants
   */
  readonly grants?: LicenseManagerGrant[];

  /**
   * @schema LicenseManagerListDistributedGrantsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListDistributedGrantsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListDistributedGrantsResponse(obj: LicenseManagerListDistributedGrantsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grants': obj.grants?.map(y => toJson_LicenseManagerGrant(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest
 */
export interface LicenseManagerListFailuresForLicenseConfigurationOperationsRequest {
  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListFailuresForLicenseConfigurationOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListFailuresForLicenseConfigurationOperationsRequest(obj: LicenseManagerListFailuresForLicenseConfigurationOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsResponse
 */
export interface LicenseManagerListFailuresForLicenseConfigurationOperationsResponse {
  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsResponse#LicenseOperationFailureList
   */
  readonly licenseOperationFailureList?: LicenseManagerLicenseOperationFailure[];

  /**
   * @schema LicenseManagerListFailuresForLicenseConfigurationOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListFailuresForLicenseConfigurationOperationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListFailuresForLicenseConfigurationOperationsResponse(obj: LicenseManagerListFailuresForLicenseConfigurationOperationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseOperationFailureList': obj.licenseOperationFailureList?.map(y => toJson_LicenseManagerLicenseOperationFailure(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseConfigurationsRequest
 */
export interface LicenseManagerListLicenseConfigurationsRequest {
  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#LicenseConfigurationArns
   */
  readonly licenseConfigurationArns?: string[];

  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListLicenseConfigurationsRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

}

/**
 * Converts an object of type 'LicenseManagerListLicenseConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseConfigurationsRequest(obj: LicenseManagerListLicenseConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArns': obj.licenseConfigurationArns?.map(y => y),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseConfigurationsResponse
 */
export interface LicenseManagerListLicenseConfigurationsResponse {
  /**
   * @schema LicenseManagerListLicenseConfigurationsResponse#LicenseConfigurations
   */
  readonly licenseConfigurations?: LicenseManagerLicenseConfiguration[];

  /**
   * @schema LicenseManagerListLicenseConfigurationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseConfigurationsResponse(obj: LicenseManagerListLicenseConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurations': obj.licenseConfigurations?.map(y => toJson_LicenseManagerLicenseConfiguration(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseManagerReportGeneratorsRequest
 */
export interface LicenseManagerListLicenseManagerReportGeneratorsRequest {
  /**
   * @schema LicenseManagerListLicenseManagerReportGeneratorsRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

  /**
   * @schema LicenseManagerListLicenseManagerReportGeneratorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListLicenseManagerReportGeneratorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseManagerReportGeneratorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseManagerReportGeneratorsRequest(obj: LicenseManagerListLicenseManagerReportGeneratorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseManagerReportGeneratorsResponse
 */
export interface LicenseManagerListLicenseManagerReportGeneratorsResponse {
  /**
   * @schema LicenseManagerListLicenseManagerReportGeneratorsResponse#ReportGenerators
   */
  readonly reportGenerators?: LicenseManagerReportGenerator[];

  /**
   * @schema LicenseManagerListLicenseManagerReportGeneratorsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseManagerReportGeneratorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseManagerReportGeneratorsResponse(obj: LicenseManagerListLicenseManagerReportGeneratorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportGenerators': obj.reportGenerators?.map(y => toJson_LicenseManagerReportGenerator(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseSpecificationsForResourceRequest
 */
export interface LicenseManagerListLicenseSpecificationsForResourceRequest {
  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseSpecificationsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseSpecificationsForResourceRequest(obj: LicenseManagerListLicenseSpecificationsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseSpecificationsForResourceResponse
 */
export interface LicenseManagerListLicenseSpecificationsForResourceResponse {
  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceResponse#LicenseSpecifications
   */
  readonly licenseSpecifications?: LicenseManagerLicenseSpecification[];

  /**
   * @schema LicenseManagerListLicenseSpecificationsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseSpecificationsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseSpecificationsForResourceResponse(obj: LicenseManagerListLicenseSpecificationsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseSpecifications': obj.licenseSpecifications?.map(y => toJson_LicenseManagerLicenseSpecification(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseVersionsRequest
 */
export interface LicenseManagerListLicenseVersionsRequest {
  /**
   * @schema LicenseManagerListLicenseVersionsRequest#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerListLicenseVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListLicenseVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseVersionsRequest(obj: LicenseManagerListLicenseVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicenseVersionsResponse
 */
export interface LicenseManagerListLicenseVersionsResponse {
  /**
   * @schema LicenseManagerListLicenseVersionsResponse#Licenses
   */
  readonly licenses?: LicenseManagerLicense[];

  /**
   * @schema LicenseManagerListLicenseVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListLicenseVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicenseVersionsResponse(obj: LicenseManagerListLicenseVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Licenses': obj.licenses?.map(y => toJson_LicenseManagerLicense(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicensesRequest
 */
export interface LicenseManagerListLicensesRequest {
  /**
   * @schema LicenseManagerListLicensesRequest#LicenseArns
   */
  readonly licenseArns?: string[];

  /**
   * @schema LicenseManagerListLicensesRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

  /**
   * @schema LicenseManagerListLicensesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListLicensesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListLicensesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicensesRequest(obj: LicenseManagerListLicensesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArns': obj.licenseArns?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListLicensesResponse
 */
export interface LicenseManagerListLicensesResponse {
  /**
   * @schema LicenseManagerListLicensesResponse#Licenses
   */
  readonly licenses?: LicenseManagerLicense[];

  /**
   * @schema LicenseManagerListLicensesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListLicensesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListLicensesResponse(obj: LicenseManagerListLicensesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Licenses': obj.licenses?.map(y => toJson_LicenseManagerLicense(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListReceivedGrantsRequest
 */
export interface LicenseManagerListReceivedGrantsRequest {
  /**
   * @schema LicenseManagerListReceivedGrantsRequest#GrantArns
   */
  readonly grantArns?: string[];

  /**
   * @schema LicenseManagerListReceivedGrantsRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

  /**
   * @schema LicenseManagerListReceivedGrantsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListReceivedGrantsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListReceivedGrantsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListReceivedGrantsRequest(obj: LicenseManagerListReceivedGrantsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArns': obj.grantArns?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListReceivedGrantsResponse
 */
export interface LicenseManagerListReceivedGrantsResponse {
  /**
   * @schema LicenseManagerListReceivedGrantsResponse#Grants
   */
  readonly grants?: LicenseManagerGrant[];

  /**
   * @schema LicenseManagerListReceivedGrantsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListReceivedGrantsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListReceivedGrantsResponse(obj: LicenseManagerListReceivedGrantsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Grants': obj.grants?.map(y => toJson_LicenseManagerGrant(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListReceivedLicensesRequest
 */
export interface LicenseManagerListReceivedLicensesRequest {
  /**
   * @schema LicenseManagerListReceivedLicensesRequest#LicenseArns
   */
  readonly licenseArns?: string[];

  /**
   * @schema LicenseManagerListReceivedLicensesRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

  /**
   * @schema LicenseManagerListReceivedLicensesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListReceivedLicensesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListReceivedLicensesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListReceivedLicensesRequest(obj: LicenseManagerListReceivedLicensesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArns': obj.licenseArns?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListReceivedLicensesResponse
 */
export interface LicenseManagerListReceivedLicensesResponse {
  /**
   * @schema LicenseManagerListReceivedLicensesResponse#Licenses
   */
  readonly licenses?: LicenseManagerGrantedLicense[];

  /**
   * @schema LicenseManagerListReceivedLicensesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListReceivedLicensesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListReceivedLicensesResponse(obj: LicenseManagerListReceivedLicensesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Licenses': obj.licenses?.map(y => toJson_LicenseManagerGrantedLicense(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListResourceInventoryRequest
 */
export interface LicenseManagerListResourceInventoryRequest {
  /**
   * @schema LicenseManagerListResourceInventoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListResourceInventoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListResourceInventoryRequest#Filters
   */
  readonly filters?: LicenseManagerInventoryFilter[];

}

/**
 * Converts an object of type 'LicenseManagerListResourceInventoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListResourceInventoryRequest(obj: LicenseManagerListResourceInventoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_LicenseManagerInventoryFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListResourceInventoryResponse
 */
export interface LicenseManagerListResourceInventoryResponse {
  /**
   * @schema LicenseManagerListResourceInventoryResponse#ResourceInventoryList
   */
  readonly resourceInventoryList?: LicenseManagerResourceInventory[];

  /**
   * @schema LicenseManagerListResourceInventoryResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListResourceInventoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListResourceInventoryResponse(obj: LicenseManagerListResourceInventoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceInventoryList': obj.resourceInventoryList?.map(y => toJson_LicenseManagerResourceInventory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListTagsForResourceRequest
 */
export interface LicenseManagerListTagsForResourceRequest {
  /**
   * @schema LicenseManagerListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListTagsForResourceRequest(obj: LicenseManagerListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListTagsForResourceResponse
 */
export interface LicenseManagerListTagsForResourceResponse {
  /**
   * @schema LicenseManagerListTagsForResourceResponse#Tags
   */
  readonly tags?: LicenseManagerTag[];

}

/**
 * Converts an object of type 'LicenseManagerListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListTagsForResourceResponse(obj: LicenseManagerListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_LicenseManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListTokensRequest
 */
export interface LicenseManagerListTokensRequest {
  /**
   * @schema LicenseManagerListTokensRequest#TokenIds
   */
  readonly tokenIds?: string[];

  /**
   * @schema LicenseManagerListTokensRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

  /**
   * @schema LicenseManagerListTokensRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListTokensRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'LicenseManagerListTokensRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListTokensRequest(obj: LicenseManagerListTokensRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TokenIds': obj.tokenIds?.map(y => y),
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListTokensResponse
 */
export interface LicenseManagerListTokensResponse {
  /**
   * @schema LicenseManagerListTokensResponse#Tokens
   */
  readonly tokens?: LicenseManagerTokenData[];

  /**
   * @schema LicenseManagerListTokensResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListTokensResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListTokensResponse(obj: LicenseManagerListTokensResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tokens': obj.tokens?.map(y => toJson_LicenseManagerTokenData(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListUsageForLicenseConfigurationRequest
 */
export interface LicenseManagerListUsageForLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationRequest#Filters
   */
  readonly filters?: LicenseManagerFilter[];

}

/**
 * Converts an object of type 'LicenseManagerListUsageForLicenseConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListUsageForLicenseConfigurationRequest(obj: LicenseManagerListUsageForLicenseConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'Filters': obj.filters?.map(y => toJson_LicenseManagerFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerListUsageForLicenseConfigurationResponse
 */
export interface LicenseManagerListUsageForLicenseConfigurationResponse {
  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationResponse#LicenseConfigurationUsageList
   */
  readonly licenseConfigurationUsageList?: LicenseManagerLicenseConfigurationUsage[];

  /**
   * @schema LicenseManagerListUsageForLicenseConfigurationResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'LicenseManagerListUsageForLicenseConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerListUsageForLicenseConfigurationResponse(obj: LicenseManagerListUsageForLicenseConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationUsageList': obj.licenseConfigurationUsageList?.map(y => toJson_LicenseManagerLicenseConfigurationUsage(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerRejectGrantRequest
 */
export interface LicenseManagerRejectGrantRequest {
  /**
   * @schema LicenseManagerRejectGrantRequest#GrantArn
   */
  readonly grantArn?: string;

}

/**
 * Converts an object of type 'LicenseManagerRejectGrantRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerRejectGrantRequest(obj: LicenseManagerRejectGrantRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerRejectGrantResponse
 */
export interface LicenseManagerRejectGrantResponse {
  /**
   * @schema LicenseManagerRejectGrantResponse#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerRejectGrantResponse#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerRejectGrantResponse#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerRejectGrantResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerRejectGrantResponse(obj: LicenseManagerRejectGrantResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'Status': obj.status,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerTagResourceRequest
 */
export interface LicenseManagerTagResourceRequest {
  /**
   * @schema LicenseManagerTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerTagResourceRequest#Tags
   */
  readonly tags?: LicenseManagerTag[];

}

/**
 * Converts an object of type 'LicenseManagerTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerTagResourceRequest(obj: LicenseManagerTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_LicenseManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerTagResourceResponse
 */
export interface LicenseManagerTagResourceResponse {
}

/**
 * Converts an object of type 'LicenseManagerTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerTagResourceResponse(obj: LicenseManagerTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUntagResourceRequest
 */
export interface LicenseManagerUntagResourceRequest {
  /**
   * @schema LicenseManagerUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'LicenseManagerUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUntagResourceRequest(obj: LicenseManagerUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema LicenseManagerUntagResourceResponse
 */
export interface LicenseManagerUntagResourceResponse {
}

/**
 * Converts an object of type 'LicenseManagerUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUntagResourceResponse(obj: LicenseManagerUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateLicenseConfigurationRequest
 */
export interface LicenseManagerUpdateLicenseConfigurationRequest {
  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseConfigurationStatus
   */
  readonly licenseConfigurationStatus?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

  /**
   * @schema LicenseManagerUpdateLicenseConfigurationRequest#DisassociateWhenNotFound
   */
  readonly disassociateWhenNotFound?: boolean;

}

/**
 * Converts an object of type 'LicenseManagerUpdateLicenseConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateLicenseConfigurationRequest(obj: LicenseManagerUpdateLicenseConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'LicenseConfigurationStatus': obj.licenseConfigurationStatus,
    'LicenseRules': obj.licenseRules?.map(y => y),
    'LicenseCount': obj.licenseCount,
    'LicenseCountHardLimit': obj.licenseCountHardLimit,
    'Name': obj.name,
    'Description': obj.description,
    'ProductInformationList': obj.productInformationList?.map(y => toJson_LicenseManagerProductInformation(y)),
    'DisassociateWhenNotFound': obj.disassociateWhenNotFound,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateLicenseConfigurationResponse
 */
export interface LicenseManagerUpdateLicenseConfigurationResponse {
}

/**
 * Converts an object of type 'LicenseManagerUpdateLicenseConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateLicenseConfigurationResponse(obj: LicenseManagerUpdateLicenseConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest
 */
export interface LicenseManagerUpdateLicenseManagerReportGeneratorRequest {
  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#LicenseManagerReportGeneratorArn
   */
  readonly licenseManagerReportGeneratorArn?: string;

  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#ReportGeneratorName
   */
  readonly reportGeneratorName?: string;

  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#Type
   */
  readonly type?: string[];

  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#ReportContext
   */
  readonly reportContext?: LicenseManagerReportContext;

  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#ReportFrequency
   */
  readonly reportFrequency?: LicenseManagerReportFrequency;

  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema LicenseManagerUpdateLicenseManagerReportGeneratorRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'LicenseManagerUpdateLicenseManagerReportGeneratorRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateLicenseManagerReportGeneratorRequest(obj: LicenseManagerUpdateLicenseManagerReportGeneratorRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseManagerReportGeneratorArn': obj.licenseManagerReportGeneratorArn,
    'ReportGeneratorName': obj.reportGeneratorName,
    'Type': obj.type?.map(y => y),
    'ReportContext': toJson_LicenseManagerReportContext(obj.reportContext),
    'ReportFrequency': toJson_LicenseManagerReportFrequency(obj.reportFrequency),
    'ClientToken': obj.clientToken,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateLicenseManagerReportGeneratorResponse
 */
export interface LicenseManagerUpdateLicenseManagerReportGeneratorResponse {
}

/**
 * Converts an object of type 'LicenseManagerUpdateLicenseManagerReportGeneratorResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateLicenseManagerReportGeneratorResponse(obj: LicenseManagerUpdateLicenseManagerReportGeneratorResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest
 */
export interface LicenseManagerUpdateLicenseSpecificationsForResourceRequest {
  /**
   * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest#AddLicenseSpecifications
   */
  readonly addLicenseSpecifications?: LicenseManagerLicenseSpecification[];

  /**
   * @schema LicenseManagerUpdateLicenseSpecificationsForResourceRequest#RemoveLicenseSpecifications
   */
  readonly removeLicenseSpecifications?: LicenseManagerLicenseSpecification[];

}

/**
 * Converts an object of type 'LicenseManagerUpdateLicenseSpecificationsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateLicenseSpecificationsForResourceRequest(obj: LicenseManagerUpdateLicenseSpecificationsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'AddLicenseSpecifications': obj.addLicenseSpecifications?.map(y => toJson_LicenseManagerLicenseSpecification(y)),
    'RemoveLicenseSpecifications': obj.removeLicenseSpecifications?.map(y => toJson_LicenseManagerLicenseSpecification(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateLicenseSpecificationsForResourceResponse
 */
export interface LicenseManagerUpdateLicenseSpecificationsForResourceResponse {
}

/**
 * Converts an object of type 'LicenseManagerUpdateLicenseSpecificationsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateLicenseSpecificationsForResourceResponse(obj: LicenseManagerUpdateLicenseSpecificationsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateServiceSettingsRequest
 */
export interface LicenseManagerUpdateServiceSettingsRequest {
  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#S3BucketArn
   */
  readonly s3BucketArn?: string;

  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#SnsTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#OrganizationConfiguration
   */
  readonly organizationConfiguration?: LicenseManagerOrganizationConfiguration;

  /**
   * @schema LicenseManagerUpdateServiceSettingsRequest#EnableCrossAccountsDiscovery
   */
  readonly enableCrossAccountsDiscovery?: boolean;

}

/**
 * Converts an object of type 'LicenseManagerUpdateServiceSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateServiceSettingsRequest(obj: LicenseManagerUpdateServiceSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3BucketArn': obj.s3BucketArn,
    'SnsTopicArn': obj.snsTopicArn,
    'OrganizationConfiguration': toJson_LicenseManagerOrganizationConfiguration(obj.organizationConfiguration),
    'EnableCrossAccountsDiscovery': obj.enableCrossAccountsDiscovery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerUpdateServiceSettingsResponse
 */
export interface LicenseManagerUpdateServiceSettingsResponse {
}

/**
 * Converts an object of type 'LicenseManagerUpdateServiceSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerUpdateServiceSettingsResponse(obj: LicenseManagerUpdateServiceSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerEntitlementData
 */
export interface LicenseManagerEntitlementData {
  /**
   * @schema LicenseManagerEntitlementData#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerEntitlementData#Value
   */
  readonly value?: string;

  /**
   * @schema LicenseManagerEntitlementData#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'LicenseManagerEntitlementData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerEntitlementData(obj: LicenseManagerEntitlementData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerMetadata
 */
export interface LicenseManagerMetadata {
  /**
   * @schema LicenseManagerMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerMetadata#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LicenseManagerMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerMetadata(obj: LicenseManagerMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerIssuer
 */
export interface LicenseManagerIssuer {
  /**
   * @schema LicenseManagerIssuer#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerIssuer#SignKey
   */
  readonly signKey?: string;

}

/**
 * Converts an object of type 'LicenseManagerIssuer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerIssuer(obj: LicenseManagerIssuer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SignKey': obj.signKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerDatetimeRange
 */
export interface LicenseManagerDatetimeRange {
  /**
   * @schema LicenseManagerDatetimeRange#Begin
   */
  readonly begin?: string;

  /**
   * @schema LicenseManagerDatetimeRange#End
   */
  readonly end?: string;

}

/**
 * Converts an object of type 'LicenseManagerDatetimeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerDatetimeRange(obj: LicenseManagerDatetimeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Begin': obj.begin,
    'End': obj.end,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerEntitlement
 */
export interface LicenseManagerEntitlement {
  /**
   * @schema LicenseManagerEntitlement#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerEntitlement#Value
   */
  readonly value?: string;

  /**
   * @schema LicenseManagerEntitlement#MaxCount
   */
  readonly maxCount?: number;

  /**
   * @schema LicenseManagerEntitlement#Overage
   */
  readonly overage?: boolean;

  /**
   * @schema LicenseManagerEntitlement#Unit
   */
  readonly unit?: string;

  /**
   * @schema LicenseManagerEntitlement#AllowCheckIn
   */
  readonly allowCheckIn?: boolean;

}

/**
 * Converts an object of type 'LicenseManagerEntitlement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerEntitlement(obj: LicenseManagerEntitlement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
    'MaxCount': obj.maxCount,
    'Overage': obj.overage,
    'Unit': obj.unit,
    'AllowCheckIn': obj.allowCheckIn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerConsumptionConfiguration
 */
export interface LicenseManagerConsumptionConfiguration {
  /**
   * @schema LicenseManagerConsumptionConfiguration#RenewType
   */
  readonly renewType?: string;

  /**
   * @schema LicenseManagerConsumptionConfiguration#ProvisionalConfiguration
   */
  readonly provisionalConfiguration?: LicenseManagerProvisionalConfiguration;

  /**
   * @schema LicenseManagerConsumptionConfiguration#BorrowConfiguration
   */
  readonly borrowConfiguration?: LicenseManagerBorrowConfiguration;

}

/**
 * Converts an object of type 'LicenseManagerConsumptionConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerConsumptionConfiguration(obj: LicenseManagerConsumptionConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RenewType': obj.renewType,
    'ProvisionalConfiguration': toJson_LicenseManagerProvisionalConfiguration(obj.provisionalConfiguration),
    'BorrowConfiguration': toJson_LicenseManagerBorrowConfiguration(obj.borrowConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerTag
 */
export interface LicenseManagerTag {
  /**
   * @schema LicenseManagerTag#Key
   */
  readonly key?: string;

  /**
   * @schema LicenseManagerTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LicenseManagerTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerTag(obj: LicenseManagerTag | undefined): Record<string, any> | undefined {
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
 * @schema LicenseManagerProductInformation
 */
export interface LicenseManagerProductInformation {
  /**
   * @schema LicenseManagerProductInformation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerProductInformation#ProductInformationFilterList
   */
  readonly productInformationFilterList?: LicenseManagerProductInformationFilter[];

}

/**
 * Converts an object of type 'LicenseManagerProductInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerProductInformation(obj: LicenseManagerProductInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ProductInformationFilterList': obj.productInformationFilterList?.map(y => toJson_LicenseManagerProductInformationFilter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerReportContext
 */
export interface LicenseManagerReportContext {
  /**
   * @schema LicenseManagerReportContext#licenseConfigurationArns
   */
  readonly licenseConfigurationArns: string[];

}

/**
 * Converts an object of type 'LicenseManagerReportContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerReportContext(obj: LicenseManagerReportContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'licenseConfigurationArns': obj.licenseConfigurationArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerReportFrequency
 */
export interface LicenseManagerReportFrequency {
  /**
   * @schema LicenseManagerReportFrequency#value
   */
  readonly value?: number;

  /**
   * @schema LicenseManagerReportFrequency#period
   */
  readonly period?: string;

}

/**
 * Converts an object of type 'LicenseManagerReportFrequency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerReportFrequency(obj: LicenseManagerReportFrequency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': obj.value,
    'period': obj.period,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGrant
 */
export interface LicenseManagerGrant {
  /**
   * @schema LicenseManagerGrant#GrantArn
   */
  readonly grantArn?: string;

  /**
   * @schema LicenseManagerGrant#GrantName
   */
  readonly grantName?: string;

  /**
   * @schema LicenseManagerGrant#ParentArn
   */
  readonly parentArn?: string;

  /**
   * @schema LicenseManagerGrant#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerGrant#GranteePrincipalArn
   */
  readonly granteePrincipalArn?: string;

  /**
   * @schema LicenseManagerGrant#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema LicenseManagerGrant#GrantStatus
   */
  readonly grantStatus?: string;

  /**
   * @schema LicenseManagerGrant#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema LicenseManagerGrant#Version
   */
  readonly version?: string;

  /**
   * @schema LicenseManagerGrant#GrantedOperations
   */
  readonly grantedOperations?: string[];

}

/**
 * Converts an object of type 'LicenseManagerGrant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGrant(obj: LicenseManagerGrant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GrantArn': obj.grantArn,
    'GrantName': obj.grantName,
    'ParentArn': obj.parentArn,
    'LicenseArn': obj.licenseArn,
    'GranteePrincipalArn': obj.granteePrincipalArn,
    'HomeRegion': obj.homeRegion,
    'GrantStatus': obj.grantStatus,
    'StatusReason': obj.statusReason,
    'Version': obj.version,
    'GrantedOperations': obj.grantedOperations?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicense
 */
export interface LicenseManagerLicense {
  /**
   * @schema LicenseManagerLicense#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerLicense#LicenseName
   */
  readonly licenseName?: string;

  /**
   * @schema LicenseManagerLicense#ProductName
   */
  readonly productName?: string;

  /**
   * @schema LicenseManagerLicense#ProductSKU
   */
  readonly productSku?: string;

  /**
   * @schema LicenseManagerLicense#Issuer
   */
  readonly issuer?: LicenseManagerIssuerDetails;

  /**
   * @schema LicenseManagerLicense#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema LicenseManagerLicense#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerLicense#Validity
   */
  readonly validity?: LicenseManagerDatetimeRange;

  /**
   * @schema LicenseManagerLicense#Beneficiary
   */
  readonly beneficiary?: string;

  /**
   * @schema LicenseManagerLicense#Entitlements
   */
  readonly entitlements?: LicenseManagerEntitlement[];

  /**
   * @schema LicenseManagerLicense#ConsumptionConfiguration
   */
  readonly consumptionConfiguration?: LicenseManagerConsumptionConfiguration;

  /**
   * @schema LicenseManagerLicense#LicenseMetadata
   */
  readonly licenseMetadata?: LicenseManagerMetadata[];

  /**
   * @schema LicenseManagerLicense#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LicenseManagerLicense#Version
   */
  readonly version?: string;

}

/**
 * Converts an object of type 'LicenseManagerLicense' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicense(obj: LicenseManagerLicense | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'LicenseName': obj.licenseName,
    'ProductName': obj.productName,
    'ProductSKU': obj.productSku,
    'Issuer': toJson_LicenseManagerIssuerDetails(obj.issuer),
    'HomeRegion': obj.homeRegion,
    'Status': obj.status,
    'Validity': toJson_LicenseManagerDatetimeRange(obj.validity),
    'Beneficiary': obj.beneficiary,
    'Entitlements': obj.entitlements?.map(y => toJson_LicenseManagerEntitlement(y)),
    'ConsumptionConfiguration': toJson_LicenseManagerConsumptionConfiguration(obj.consumptionConfiguration),
    'LicenseMetadata': obj.licenseMetadata?.map(y => toJson_LicenseManagerMetadata(y)),
    'CreateTime': obj.createTime,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerConsumedLicenseSummary
 */
export interface LicenseManagerConsumedLicenseSummary {
  /**
   * @schema LicenseManagerConsumedLicenseSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerConsumedLicenseSummary#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

}

/**
 * Converts an object of type 'LicenseManagerConsumedLicenseSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerConsumedLicenseSummary(obj: LicenseManagerConsumedLicenseSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'ConsumedLicenses': obj.consumedLicenses,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerManagedResourceSummary
 */
export interface LicenseManagerManagedResourceSummary {
  /**
   * @schema LicenseManagerManagedResourceSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerManagedResourceSummary#AssociationCount
   */
  readonly associationCount?: number;

}

/**
 * Converts an object of type 'LicenseManagerManagedResourceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerManagedResourceSummary(obj: LicenseManagerManagedResourceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'AssociationCount': obj.associationCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerAutomatedDiscoveryInformation
 */
export interface LicenseManagerAutomatedDiscoveryInformation {
  /**
   * @schema LicenseManagerAutomatedDiscoveryInformation#LastRunTime
   */
  readonly lastRunTime?: string;

}

/**
 * Converts an object of type 'LicenseManagerAutomatedDiscoveryInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerAutomatedDiscoveryInformation(obj: LicenseManagerAutomatedDiscoveryInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastRunTime': obj.lastRunTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerReportGenerator
 */
export interface LicenseManagerReportGenerator {
  /**
   * @schema LicenseManagerReportGenerator#ReportGeneratorName
   */
  readonly reportGeneratorName?: string;

  /**
   * @schema LicenseManagerReportGenerator#ReportType
   */
  readonly reportType?: string[];

  /**
   * @schema LicenseManagerReportGenerator#ReportContext
   */
  readonly reportContext?: LicenseManagerReportContext;

  /**
   * @schema LicenseManagerReportGenerator#ReportFrequency
   */
  readonly reportFrequency?: LicenseManagerReportFrequency;

  /**
   * @schema LicenseManagerReportGenerator#LicenseManagerReportGeneratorArn
   */
  readonly licenseManagerReportGeneratorArn?: string;

  /**
   * @schema LicenseManagerReportGenerator#LastRunStatus
   */
  readonly lastRunStatus?: string;

  /**
   * @schema LicenseManagerReportGenerator#LastRunFailureReason
   */
  readonly lastRunFailureReason?: string;

  /**
   * @schema LicenseManagerReportGenerator#LastReportGenerationTime
   */
  readonly lastReportGenerationTime?: string;

  /**
   * @schema LicenseManagerReportGenerator#ReportCreatorAccount
   */
  readonly reportCreatorAccount?: string;

  /**
   * @schema LicenseManagerReportGenerator#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerReportGenerator#S3Location
   */
  readonly s3Location?: LicenseManagerS3Location;

  /**
   * @schema LicenseManagerReportGenerator#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LicenseManagerReportGenerator#Tags
   */
  readonly tags?: LicenseManagerTag[];

}

/**
 * Converts an object of type 'LicenseManagerReportGenerator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerReportGenerator(obj: LicenseManagerReportGenerator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReportGeneratorName': obj.reportGeneratorName,
    'ReportType': obj.reportType?.map(y => y),
    'ReportContext': toJson_LicenseManagerReportContext(obj.reportContext),
    'ReportFrequency': toJson_LicenseManagerReportFrequency(obj.reportFrequency),
    'LicenseManagerReportGeneratorArn': obj.licenseManagerReportGeneratorArn,
    'LastRunStatus': obj.lastRunStatus,
    'LastRunFailureReason': obj.lastRunFailureReason,
    'LastReportGenerationTime': obj.lastReportGenerationTime,
    'ReportCreatorAccount': obj.reportCreatorAccount,
    'Description': obj.description,
    'S3Location': toJson_LicenseManagerS3Location(obj.s3Location),
    'CreateTime': obj.createTime,
    'Tags': obj.tags?.map(y => toJson_LicenseManagerTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicenseUsage
 */
export interface LicenseManagerLicenseUsage {
  /**
   * @schema LicenseManagerLicenseUsage#EntitlementUsages
   */
  readonly entitlementUsages?: LicenseManagerEntitlementUsage[];

}

/**
 * Converts an object of type 'LicenseManagerLicenseUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicenseUsage(obj: LicenseManagerLicenseUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitlementUsages': obj.entitlementUsages?.map(y => toJson_LicenseManagerEntitlementUsage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerOrganizationConfiguration
 */
export interface LicenseManagerOrganizationConfiguration {
  /**
   * @schema LicenseManagerOrganizationConfiguration#EnableIntegration
   */
  readonly enableIntegration?: boolean;

}

/**
 * Converts an object of type 'LicenseManagerOrganizationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerOrganizationConfiguration(obj: LicenseManagerOrganizationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableIntegration': obj.enableIntegration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicenseConfigurationAssociation
 */
export interface LicenseManagerLicenseConfigurationAssociation {
  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#AssociationTime
   */
  readonly associationTime?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationAssociation#AmiAssociationScope
   */
  readonly amiAssociationScope?: string;

}

/**
 * Converts an object of type 'LicenseManagerLicenseConfigurationAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicenseConfigurationAssociation(obj: LicenseManagerLicenseConfigurationAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'ResourceOwnerId': obj.resourceOwnerId,
    'AssociationTime': obj.associationTime,
    'AmiAssociationScope': obj.amiAssociationScope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerFilter
 */
export interface LicenseManagerFilter {
  /**
   * @schema LicenseManagerFilter#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'LicenseManagerFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerFilter(obj: LicenseManagerFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicenseOperationFailure
 */
export interface LicenseManagerLicenseOperationFailure {
  /**
   * @schema LicenseManagerLicenseOperationFailure#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#FailureTime
   */
  readonly failureTime?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#OperationName
   */
  readonly operationName?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#OperationRequestedBy
   */
  readonly operationRequestedBy?: string;

  /**
   * @schema LicenseManagerLicenseOperationFailure#MetadataList
   */
  readonly metadataList?: LicenseManagerMetadata[];

}

/**
 * Converts an object of type 'LicenseManagerLicenseOperationFailure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicenseOperationFailure(obj: LicenseManagerLicenseOperationFailure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'ErrorMessage': obj.errorMessage,
    'FailureTime': obj.failureTime,
    'OperationName': obj.operationName,
    'ResourceOwnerId': obj.resourceOwnerId,
    'OperationRequestedBy': obj.operationRequestedBy,
    'MetadataList': obj.metadataList?.map(y => toJson_LicenseManagerMetadata(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicenseConfiguration
 */
export interface LicenseManagerLicenseConfiguration {
  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseConfigurationId
   */
  readonly licenseConfigurationId?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#Description
   */
  readonly description?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseCountingType
   */
  readonly licenseCountingType?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseRules
   */
  readonly licenseRules?: string[];

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseCount
   */
  readonly licenseCount?: number;

  /**
   * @schema LicenseManagerLicenseConfiguration#LicenseCountHardLimit
   */
  readonly licenseCountHardLimit?: boolean;

  /**
   * @schema LicenseManagerLicenseConfiguration#DisassociateWhenNotFound
   */
  readonly disassociateWhenNotFound?: boolean;

  /**
   * @schema LicenseManagerLicenseConfiguration#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

  /**
   * @schema LicenseManagerLicenseConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema LicenseManagerLicenseConfiguration#ConsumedLicenseSummaryList
   */
  readonly consumedLicenseSummaryList?: LicenseManagerConsumedLicenseSummary[];

  /**
   * @schema LicenseManagerLicenseConfiguration#ManagedResourceSummaryList
   */
  readonly managedResourceSummaryList?: LicenseManagerManagedResourceSummary[];

  /**
   * @schema LicenseManagerLicenseConfiguration#ProductInformationList
   */
  readonly productInformationList?: LicenseManagerProductInformation[];

  /**
   * @schema LicenseManagerLicenseConfiguration#AutomatedDiscoveryInformation
   */
  readonly automatedDiscoveryInformation?: LicenseManagerAutomatedDiscoveryInformation;

}

/**
 * Converts an object of type 'LicenseManagerLicenseConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicenseConfiguration(obj: LicenseManagerLicenseConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationId': obj.licenseConfigurationId,
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'Name': obj.name,
    'Description': obj.description,
    'LicenseCountingType': obj.licenseCountingType,
    'LicenseRules': obj.licenseRules?.map(y => y),
    'LicenseCount': obj.licenseCount,
    'LicenseCountHardLimit': obj.licenseCountHardLimit,
    'DisassociateWhenNotFound': obj.disassociateWhenNotFound,
    'ConsumedLicenses': obj.consumedLicenses,
    'Status': obj.status,
    'OwnerAccountId': obj.ownerAccountId,
    'ConsumedLicenseSummaryList': obj.consumedLicenseSummaryList?.map(y => toJson_LicenseManagerConsumedLicenseSummary(y)),
    'ManagedResourceSummaryList': obj.managedResourceSummaryList?.map(y => toJson_LicenseManagerManagedResourceSummary(y)),
    'ProductInformationList': obj.productInformationList?.map(y => toJson_LicenseManagerProductInformation(y)),
    'AutomatedDiscoveryInformation': toJson_LicenseManagerAutomatedDiscoveryInformation(obj.automatedDiscoveryInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicenseSpecification
 */
export interface LicenseManagerLicenseSpecification {
  /**
   * @schema LicenseManagerLicenseSpecification#LicenseConfigurationArn
   */
  readonly licenseConfigurationArn?: string;

  /**
   * @schema LicenseManagerLicenseSpecification#AmiAssociationScope
   */
  readonly amiAssociationScope?: string;

}

/**
 * Converts an object of type 'LicenseManagerLicenseSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicenseSpecification(obj: LicenseManagerLicenseSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseConfigurationArn': obj.licenseConfigurationArn,
    'AmiAssociationScope': obj.amiAssociationScope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerGrantedLicense
 */
export interface LicenseManagerGrantedLicense {
  /**
   * @schema LicenseManagerGrantedLicense#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerGrantedLicense#LicenseName
   */
  readonly licenseName?: string;

  /**
   * @schema LicenseManagerGrantedLicense#ProductName
   */
  readonly productName?: string;

  /**
   * @schema LicenseManagerGrantedLicense#ProductSKU
   */
  readonly productSku?: string;

  /**
   * @schema LicenseManagerGrantedLicense#Issuer
   */
  readonly issuer?: LicenseManagerIssuerDetails;

  /**
   * @schema LicenseManagerGrantedLicense#HomeRegion
   */
  readonly homeRegion?: string;

  /**
   * @schema LicenseManagerGrantedLicense#Status
   */
  readonly status?: string;

  /**
   * @schema LicenseManagerGrantedLicense#Validity
   */
  readonly validity?: LicenseManagerDatetimeRange;

  /**
   * @schema LicenseManagerGrantedLicense#Beneficiary
   */
  readonly beneficiary?: string;

  /**
   * @schema LicenseManagerGrantedLicense#Entitlements
   */
  readonly entitlements?: LicenseManagerEntitlement[];

  /**
   * @schema LicenseManagerGrantedLicense#ConsumptionConfiguration
   */
  readonly consumptionConfiguration?: LicenseManagerConsumptionConfiguration;

  /**
   * @schema LicenseManagerGrantedLicense#LicenseMetadata
   */
  readonly licenseMetadata?: LicenseManagerMetadata[];

  /**
   * @schema LicenseManagerGrantedLicense#CreateTime
   */
  readonly createTime?: string;

  /**
   * @schema LicenseManagerGrantedLicense#Version
   */
  readonly version?: string;

  /**
   * @schema LicenseManagerGrantedLicense#ReceivedMetadata
   */
  readonly receivedMetadata?: LicenseManagerReceivedMetadata;

}

/**
 * Converts an object of type 'LicenseManagerGrantedLicense' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerGrantedLicense(obj: LicenseManagerGrantedLicense | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LicenseArn': obj.licenseArn,
    'LicenseName': obj.licenseName,
    'ProductName': obj.productName,
    'ProductSKU': obj.productSku,
    'Issuer': toJson_LicenseManagerIssuerDetails(obj.issuer),
    'HomeRegion': obj.homeRegion,
    'Status': obj.status,
    'Validity': toJson_LicenseManagerDatetimeRange(obj.validity),
    'Beneficiary': obj.beneficiary,
    'Entitlements': obj.entitlements?.map(y => toJson_LicenseManagerEntitlement(y)),
    'ConsumptionConfiguration': toJson_LicenseManagerConsumptionConfiguration(obj.consumptionConfiguration),
    'LicenseMetadata': obj.licenseMetadata?.map(y => toJson_LicenseManagerMetadata(y)),
    'CreateTime': obj.createTime,
    'Version': obj.version,
    'ReceivedMetadata': toJson_LicenseManagerReceivedMetadata(obj.receivedMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerInventoryFilter
 */
export interface LicenseManagerInventoryFilter {
  /**
   * @schema LicenseManagerInventoryFilter#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerInventoryFilter#Condition
   */
  readonly condition?: string;

  /**
   * @schema LicenseManagerInventoryFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'LicenseManagerInventoryFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerInventoryFilter(obj: LicenseManagerInventoryFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Condition': obj.condition,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerResourceInventory
 */
export interface LicenseManagerResourceInventory {
  /**
   * @schema LicenseManagerResourceInventory#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema LicenseManagerResourceInventory#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerResourceInventory#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerResourceInventory#Platform
   */
  readonly platform?: string;

  /**
   * @schema LicenseManagerResourceInventory#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema LicenseManagerResourceInventory#ResourceOwningAccountId
   */
  readonly resourceOwningAccountId?: string;

}

/**
 * Converts an object of type 'LicenseManagerResourceInventory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerResourceInventory(obj: LicenseManagerResourceInventory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ResourceType': obj.resourceType,
    'ResourceArn': obj.resourceArn,
    'Platform': obj.platform,
    'PlatformVersion': obj.platformVersion,
    'ResourceOwningAccountId': obj.resourceOwningAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerTokenData
 */
export interface LicenseManagerTokenData {
  /**
   * @schema LicenseManagerTokenData#TokenId
   */
  readonly tokenId?: string;

  /**
   * @schema LicenseManagerTokenData#TokenType
   */
  readonly tokenType?: string;

  /**
   * @schema LicenseManagerTokenData#LicenseArn
   */
  readonly licenseArn?: string;

  /**
   * @schema LicenseManagerTokenData#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema LicenseManagerTokenData#TokenProperties
   */
  readonly tokenProperties?: string[];

  /**
   * @schema LicenseManagerTokenData#RoleArns
   */
  readonly roleArns?: string[];

  /**
   * @schema LicenseManagerTokenData#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'LicenseManagerTokenData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerTokenData(obj: LicenseManagerTokenData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TokenId': obj.tokenId,
    'TokenType': obj.tokenType,
    'LicenseArn': obj.licenseArn,
    'ExpirationTime': obj.expirationTime,
    'TokenProperties': obj.tokenProperties?.map(y => y),
    'RoleArns': obj.roleArns?.map(y => y),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerLicenseConfigurationUsage
 */
export interface LicenseManagerLicenseConfigurationUsage {
  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ResourceOwnerId
   */
  readonly resourceOwnerId?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#AssociationTime
   */
  readonly associationTime?: string;

  /**
   * @schema LicenseManagerLicenseConfigurationUsage#ConsumedLicenses
   */
  readonly consumedLicenses?: number;

}

/**
 * Converts an object of type 'LicenseManagerLicenseConfigurationUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerLicenseConfigurationUsage(obj: LicenseManagerLicenseConfigurationUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
    'ResourceStatus': obj.resourceStatus,
    'ResourceOwnerId': obj.resourceOwnerId,
    'AssociationTime': obj.associationTime,
    'ConsumedLicenses': obj.consumedLicenses,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerProvisionalConfiguration
 */
export interface LicenseManagerProvisionalConfiguration {
  /**
   * @schema LicenseManagerProvisionalConfiguration#MaxTimeToLiveInMinutes
   */
  readonly maxTimeToLiveInMinutes?: number;

}

/**
 * Converts an object of type 'LicenseManagerProvisionalConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerProvisionalConfiguration(obj: LicenseManagerProvisionalConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxTimeToLiveInMinutes': obj.maxTimeToLiveInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerBorrowConfiguration
 */
export interface LicenseManagerBorrowConfiguration {
  /**
   * @schema LicenseManagerBorrowConfiguration#AllowEarlyCheckIn
   */
  readonly allowEarlyCheckIn?: boolean;

  /**
   * @schema LicenseManagerBorrowConfiguration#MaxTimeToLiveInMinutes
   */
  readonly maxTimeToLiveInMinutes?: number;

}

/**
 * Converts an object of type 'LicenseManagerBorrowConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerBorrowConfiguration(obj: LicenseManagerBorrowConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowEarlyCheckIn': obj.allowEarlyCheckIn,
    'MaxTimeToLiveInMinutes': obj.maxTimeToLiveInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerProductInformationFilter
 */
export interface LicenseManagerProductInformationFilter {
  /**
   * @schema LicenseManagerProductInformationFilter#ProductInformationFilterName
   */
  readonly productInformationFilterName?: string;

  /**
   * @schema LicenseManagerProductInformationFilter#ProductInformationFilterValue
   */
  readonly productInformationFilterValue?: string[];

  /**
   * @schema LicenseManagerProductInformationFilter#ProductInformationFilterComparator
   */
  readonly productInformationFilterComparator?: string;

}

/**
 * Converts an object of type 'LicenseManagerProductInformationFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerProductInformationFilter(obj: LicenseManagerProductInformationFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProductInformationFilterName': obj.productInformationFilterName,
    'ProductInformationFilterValue': obj.productInformationFilterValue?.map(y => y),
    'ProductInformationFilterComparator': obj.productInformationFilterComparator,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerIssuerDetails
 */
export interface LicenseManagerIssuerDetails {
  /**
   * @schema LicenseManagerIssuerDetails#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerIssuerDetails#SignKey
   */
  readonly signKey?: string;

  /**
   * @schema LicenseManagerIssuerDetails#KeyFingerprint
   */
  readonly keyFingerprint?: string;

}

/**
 * Converts an object of type 'LicenseManagerIssuerDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerIssuerDetails(obj: LicenseManagerIssuerDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SignKey': obj.signKey,
    'KeyFingerprint': obj.keyFingerprint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerS3Location
 */
export interface LicenseManagerS3Location {
  /**
   * @schema LicenseManagerS3Location#bucket
   */
  readonly bucket?: string;

  /**
   * @schema LicenseManagerS3Location#keyPrefix
   */
  readonly keyPrefix?: string;

}

/**
 * Converts an object of type 'LicenseManagerS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerS3Location(obj: LicenseManagerS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucket': obj.bucket,
    'keyPrefix': obj.keyPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerEntitlementUsage
 */
export interface LicenseManagerEntitlementUsage {
  /**
   * @schema LicenseManagerEntitlementUsage#Name
   */
  readonly name?: string;

  /**
   * @schema LicenseManagerEntitlementUsage#ConsumedValue
   */
  readonly consumedValue?: string;

  /**
   * @schema LicenseManagerEntitlementUsage#MaxCount
   */
  readonly maxCount?: string;

  /**
   * @schema LicenseManagerEntitlementUsage#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'LicenseManagerEntitlementUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerEntitlementUsage(obj: LicenseManagerEntitlementUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ConsumedValue': obj.consumedValue,
    'MaxCount': obj.maxCount,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema LicenseManagerReceivedMetadata
 */
export interface LicenseManagerReceivedMetadata {
  /**
   * @schema LicenseManagerReceivedMetadata#ReceivedStatus
   */
  readonly receivedStatus?: string;

  /**
   * @schema LicenseManagerReceivedMetadata#ReceivedStatusReason
   */
  readonly receivedStatusReason?: string;

  /**
   * @schema LicenseManagerReceivedMetadata#AllowedOperations
   */
  readonly allowedOperations?: string[];

}

/**
 * Converts an object of type 'LicenseManagerReceivedMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_LicenseManagerReceivedMetadata(obj: LicenseManagerReceivedMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReceivedStatus': obj.receivedStatus,
    'ReceivedStatusReason': obj.receivedStatusReason,
    'AllowedOperations': obj.allowedOperations?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
