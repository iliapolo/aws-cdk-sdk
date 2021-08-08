/**
 * @schema AcmpcaCreateCertificateAuthorityRequest
 */
export interface AcmpcaCreateCertificateAuthorityRequest {
  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#CertificateAuthorityConfiguration
   */
  readonly certificateAuthorityConfiguration?: AcmpcaCertificateAuthorityConfiguration;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#RevocationConfiguration
   */
  readonly revocationConfiguration?: AcmpcaRevocationConfiguration;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#CertificateAuthorityType
   */
  readonly certificateAuthorityType?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#KeyStorageSecurityStandard
   */
  readonly keyStorageSecurityStandard?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#Tags
   */
  readonly tags?: AcmpcaTag[];

}

/**
 * Converts an object of type 'AcmpcaCreateCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCreateCertificateAuthorityRequest(obj: AcmpcaCreateCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityConfiguration': toJson_AcmpcaCertificateAuthorityConfiguration(obj.certificateAuthorityConfiguration),
    'RevocationConfiguration': toJson_AcmpcaRevocationConfiguration(obj.revocationConfiguration),
    'CertificateAuthorityType': obj.certificateAuthorityType,
    'IdempotencyToken': obj.idempotencyToken,
    'KeyStorageSecurityStandard': obj.keyStorageSecurityStandard,
    'Tags': obj.tags?.map(y => toJson_AcmpcaTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCreateCertificateAuthorityResponse
 */
export interface AcmpcaCreateCertificateAuthorityResponse {
  /**
   * @schema AcmpcaCreateCertificateAuthorityResponse#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'AcmpcaCreateCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCreateCertificateAuthorityResponse(obj: AcmpcaCreateCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest
 */
export interface AcmpcaCreateCertificateAuthorityAuditReportRequest {
  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest#AuditReportResponseFormat
   */
  readonly auditReportResponseFormat?: string;

}

/**
 * Converts an object of type 'AcmpcaCreateCertificateAuthorityAuditReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCreateCertificateAuthorityAuditReportRequest(obj: AcmpcaCreateCertificateAuthorityAuditReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'S3BucketName': obj.s3BucketName,
    'AuditReportResponseFormat': obj.auditReportResponseFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCreateCertificateAuthorityAuditReportResponse
 */
export interface AcmpcaCreateCertificateAuthorityAuditReportResponse {
  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportResponse#AuditReportId
   */
  readonly auditReportId?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportResponse#S3Key
   */
  readonly s3Key?: string;

}

/**
 * Converts an object of type 'AcmpcaCreateCertificateAuthorityAuditReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCreateCertificateAuthorityAuditReportResponse(obj: AcmpcaCreateCertificateAuthorityAuditReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuditReportId': obj.auditReportId,
    'S3Key': obj.s3Key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCreatePermissionRequest
 */
export interface AcmpcaCreatePermissionRequest {
  /**
   * @schema AcmpcaCreatePermissionRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaCreatePermissionRequest#Principal
   */
  readonly principal?: string;

  /**
   * @schema AcmpcaCreatePermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema AcmpcaCreatePermissionRequest#Actions
   */
  readonly actions?: string[];

}

/**
 * Converts an object of type 'AcmpcaCreatePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCreatePermissionRequest(obj: AcmpcaCreatePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Principal': obj.principal,
    'SourceAccount': obj.sourceAccount,
    'Actions': obj.actions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDeleteCertificateAuthorityRequest
 */
export interface AcmpcaDeleteCertificateAuthorityRequest {
  /**
   * @schema AcmpcaDeleteCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaDeleteCertificateAuthorityRequest#PermanentDeletionTimeInDays
   */
  readonly permanentDeletionTimeInDays?: number;

}

/**
 * Converts an object of type 'AcmpcaDeleteCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDeleteCertificateAuthorityRequest(obj: AcmpcaDeleteCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'PermanentDeletionTimeInDays': obj.permanentDeletionTimeInDays,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDeletePermissionRequest
 */
export interface AcmpcaDeletePermissionRequest {
  /**
   * @schema AcmpcaDeletePermissionRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaDeletePermissionRequest#Principal
   */
  readonly principal?: string;

  /**
   * @schema AcmpcaDeletePermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

}

/**
 * Converts an object of type 'AcmpcaDeletePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDeletePermissionRequest(obj: AcmpcaDeletePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Principal': obj.principal,
    'SourceAccount': obj.sourceAccount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDeletePolicyRequest
 */
export interface AcmpcaDeletePolicyRequest {
  /**
   * @schema AcmpcaDeletePolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'AcmpcaDeletePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDeletePolicyRequest(obj: AcmpcaDeletePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDescribeCertificateAuthorityRequest
 */
export interface AcmpcaDescribeCertificateAuthorityRequest {
  /**
   * @schema AcmpcaDescribeCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'AcmpcaDescribeCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDescribeCertificateAuthorityRequest(obj: AcmpcaDescribeCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDescribeCertificateAuthorityResponse
 */
export interface AcmpcaDescribeCertificateAuthorityResponse {
  /**
   * @schema AcmpcaDescribeCertificateAuthorityResponse#CertificateAuthority
   */
  readonly certificateAuthority?: AcmpcaCertificateAuthority;

}

/**
 * Converts an object of type 'AcmpcaDescribeCertificateAuthorityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDescribeCertificateAuthorityResponse(obj: AcmpcaDescribeCertificateAuthorityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthority': toJson_AcmpcaCertificateAuthority(obj.certificateAuthority),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDescribeCertificateAuthorityAuditReportRequest
 */
export interface AcmpcaDescribeCertificateAuthorityAuditReportRequest {
  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportRequest#AuditReportId
   */
  readonly auditReportId?: string;

}

/**
 * Converts an object of type 'AcmpcaDescribeCertificateAuthorityAuditReportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDescribeCertificateAuthorityAuditReportRequest(obj: AcmpcaDescribeCertificateAuthorityAuditReportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'AuditReportId': obj.auditReportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaDescribeCertificateAuthorityAuditReportResponse
 */
export interface AcmpcaDescribeCertificateAuthorityAuditReportResponse {
  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportResponse#AuditReportStatus
   */
  readonly auditReportStatus?: string;

  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportResponse#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportResponse#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * Converts an object of type 'AcmpcaDescribeCertificateAuthorityAuditReportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaDescribeCertificateAuthorityAuditReportResponse(obj: AcmpcaDescribeCertificateAuthorityAuditReportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AuditReportStatus': obj.auditReportStatus,
    'S3BucketName': obj.s3BucketName,
    'S3Key': obj.s3Key,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetCertificateRequest
 */
export interface AcmpcaGetCertificateRequest {
  /**
   * @schema AcmpcaGetCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaGetCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmpcaGetCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetCertificateRequest(obj: AcmpcaGetCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetCertificateResponse
 */
export interface AcmpcaGetCertificateResponse {
  /**
   * @schema AcmpcaGetCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema AcmpcaGetCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * Converts an object of type 'AcmpcaGetCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetCertificateResponse(obj: AcmpcaGetCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'CertificateChain': obj.certificateChain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetCertificateAuthorityCertificateRequest
 */
export interface AcmpcaGetCertificateAuthorityCertificateRequest {
  /**
   * @schema AcmpcaGetCertificateAuthorityCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'AcmpcaGetCertificateAuthorityCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetCertificateAuthorityCertificateRequest(obj: AcmpcaGetCertificateAuthorityCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetCertificateAuthorityCertificateResponse
 */
export interface AcmpcaGetCertificateAuthorityCertificateResponse {
  /**
   * @schema AcmpcaGetCertificateAuthorityCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema AcmpcaGetCertificateAuthorityCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * Converts an object of type 'AcmpcaGetCertificateAuthorityCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetCertificateAuthorityCertificateResponse(obj: AcmpcaGetCertificateAuthorityCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'CertificateChain': obj.certificateChain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetCertificateAuthorityCsrRequest
 */
export interface AcmpcaGetCertificateAuthorityCsrRequest {
  /**
   * @schema AcmpcaGetCertificateAuthorityCsrRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'AcmpcaGetCertificateAuthorityCsrRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetCertificateAuthorityCsrRequest(obj: AcmpcaGetCertificateAuthorityCsrRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetCertificateAuthorityCsrResponse
 */
export interface AcmpcaGetCertificateAuthorityCsrResponse {
  /**
   * @schema AcmpcaGetCertificateAuthorityCsrResponse#Csr
   */
  readonly csr?: string;

}

/**
 * Converts an object of type 'AcmpcaGetCertificateAuthorityCsrResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetCertificateAuthorityCsrResponse(obj: AcmpcaGetCertificateAuthorityCsrResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Csr': obj.csr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetPolicyRequest
 */
export interface AcmpcaGetPolicyRequest {
  /**
   * @schema AcmpcaGetPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'AcmpcaGetPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetPolicyRequest(obj: AcmpcaGetPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGetPolicyResponse
 */
export interface AcmpcaGetPolicyResponse {
  /**
   * @schema AcmpcaGetPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'AcmpcaGetPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGetPolicyResponse(obj: AcmpcaGetPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaImportCertificateAuthorityCertificateRequest
 */
export interface AcmpcaImportCertificateAuthorityCertificateRequest {
  /**
   * @schema AcmpcaImportCertificateAuthorityCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaImportCertificateAuthorityCertificateRequest#Certificate
   */
  readonly certificate?: any;

  /**
   * @schema AcmpcaImportCertificateAuthorityCertificateRequest#CertificateChain
   */
  readonly certificateChain?: any;

}

/**
 * Converts an object of type 'AcmpcaImportCertificateAuthorityCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaImportCertificateAuthorityCertificateRequest(obj: AcmpcaImportCertificateAuthorityCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Certificate': obj.certificate,
    'CertificateChain': obj.certificateChain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaIssueCertificateRequest
 */
export interface AcmpcaIssueCertificateRequest {
  /**
   * @schema AcmpcaIssueCertificateRequest#ApiPassthrough
   */
  readonly apiPassthrough?: AcmpcaApiPassthrough;

  /**
   * @schema AcmpcaIssueCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaIssueCertificateRequest#Csr
   */
  readonly csr?: any;

  /**
   * @schema AcmpcaIssueCertificateRequest#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

  /**
   * @schema AcmpcaIssueCertificateRequest#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema AcmpcaIssueCertificateRequest#Validity
   */
  readonly validity?: AcmpcaValidity;

  /**
   * @schema AcmpcaIssueCertificateRequest#ValidityNotBefore
   */
  readonly validityNotBefore?: AcmpcaValidity;

  /**
   * @schema AcmpcaIssueCertificateRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'AcmpcaIssueCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaIssueCertificateRequest(obj: AcmpcaIssueCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ApiPassthrough': toJson_AcmpcaApiPassthrough(obj.apiPassthrough),
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Csr': obj.csr,
    'SigningAlgorithm': obj.signingAlgorithm,
    'TemplateArn': obj.templateArn,
    'Validity': toJson_AcmpcaValidity(obj.validity),
    'ValidityNotBefore': toJson_AcmpcaValidity(obj.validityNotBefore),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaIssueCertificateResponse
 */
export interface AcmpcaIssueCertificateResponse {
  /**
   * @schema AcmpcaIssueCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmpcaIssueCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaIssueCertificateResponse(obj: AcmpcaIssueCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaListCertificateAuthoritiesRequest
 */
export interface AcmpcaListCertificateAuthoritiesRequest {
  /**
   * @schema AcmpcaListCertificateAuthoritiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AcmpcaListCertificateAuthoritiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AcmpcaListCertificateAuthoritiesRequest#ResourceOwner
   */
  readonly resourceOwner?: string;

}

/**
 * Converts an object of type 'AcmpcaListCertificateAuthoritiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaListCertificateAuthoritiesRequest(obj: AcmpcaListCertificateAuthoritiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ResourceOwner': obj.resourceOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaListCertificateAuthoritiesResponse
 */
export interface AcmpcaListCertificateAuthoritiesResponse {
  /**
   * @schema AcmpcaListCertificateAuthoritiesResponse#CertificateAuthorities
   */
  readonly certificateAuthorities?: AcmpcaCertificateAuthority[];

  /**
   * @schema AcmpcaListCertificateAuthoritiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AcmpcaListCertificateAuthoritiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaListCertificateAuthoritiesResponse(obj: AcmpcaListCertificateAuthoritiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorities': obj.certificateAuthorities?.map(y => toJson_AcmpcaCertificateAuthority(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaListPermissionsRequest
 */
export interface AcmpcaListPermissionsRequest {
  /**
   * @schema AcmpcaListPermissionsRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaListPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AcmpcaListPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AcmpcaListPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaListPermissionsRequest(obj: AcmpcaListPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaListPermissionsResponse
 */
export interface AcmpcaListPermissionsResponse {
  /**
   * @schema AcmpcaListPermissionsResponse#Permissions
   */
  readonly permissions?: AcmpcaPermission[];

  /**
   * @schema AcmpcaListPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AcmpcaListPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaListPermissionsResponse(obj: AcmpcaListPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Permissions': obj.permissions?.map(y => toJson_AcmpcaPermission(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaListTagsRequest
 */
export interface AcmpcaListTagsRequest {
  /**
   * @schema AcmpcaListTagsRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AcmpcaListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'AcmpcaListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaListTagsRequest(obj: AcmpcaListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaListTagsResponse
 */
export interface AcmpcaListTagsResponse {
  /**
   * @schema AcmpcaListTagsResponse#Tags
   */
  readonly tags?: AcmpcaTag[];

  /**
   * @schema AcmpcaListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AcmpcaListTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaListTagsResponse(obj: AcmpcaListTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AcmpcaTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaPutPolicyRequest
 */
export interface AcmpcaPutPolicyRequest {
  /**
   * @schema AcmpcaPutPolicyRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema AcmpcaPutPolicyRequest#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'AcmpcaPutPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaPutPolicyRequest(obj: AcmpcaPutPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaRestoreCertificateAuthorityRequest
 */
export interface AcmpcaRestoreCertificateAuthorityRequest {
  /**
   * @schema AcmpcaRestoreCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * Converts an object of type 'AcmpcaRestoreCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaRestoreCertificateAuthorityRequest(obj: AcmpcaRestoreCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaRevokeCertificateRequest
 */
export interface AcmpcaRevokeCertificateRequest {
  /**
   * @schema AcmpcaRevokeCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaRevokeCertificateRequest#CertificateSerial
   */
  readonly certificateSerial?: string;

  /**
   * @schema AcmpcaRevokeCertificateRequest#RevocationReason
   */
  readonly revocationReason?: string;

}

/**
 * Converts an object of type 'AcmpcaRevokeCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaRevokeCertificateRequest(obj: AcmpcaRevokeCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'CertificateSerial': obj.certificateSerial,
    'RevocationReason': obj.revocationReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaTagCertificateAuthorityRequest
 */
export interface AcmpcaTagCertificateAuthorityRequest {
  /**
   * @schema AcmpcaTagCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaTagCertificateAuthorityRequest#Tags
   */
  readonly tags?: AcmpcaTag[];

}

/**
 * Converts an object of type 'AcmpcaTagCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaTagCertificateAuthorityRequest(obj: AcmpcaTagCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Tags': obj.tags?.map(y => toJson_AcmpcaTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaUntagCertificateAuthorityRequest
 */
export interface AcmpcaUntagCertificateAuthorityRequest {
  /**
   * @schema AcmpcaUntagCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaUntagCertificateAuthorityRequest#Tags
   */
  readonly tags?: AcmpcaTag[];

}

/**
 * Converts an object of type 'AcmpcaUntagCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaUntagCertificateAuthorityRequest(obj: AcmpcaUntagCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Tags': obj.tags?.map(y => toJson_AcmpcaTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaUpdateCertificateAuthorityRequest
 */
export interface AcmpcaUpdateCertificateAuthorityRequest {
  /**
   * @schema AcmpcaUpdateCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaUpdateCertificateAuthorityRequest#RevocationConfiguration
   */
  readonly revocationConfiguration?: AcmpcaRevocationConfiguration;

  /**
   * @schema AcmpcaUpdateCertificateAuthorityRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AcmpcaUpdateCertificateAuthorityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaUpdateCertificateAuthorityRequest(obj: AcmpcaUpdateCertificateAuthorityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'RevocationConfiguration': toJson_AcmpcaRevocationConfiguration(obj.revocationConfiguration),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCertificateAuthorityConfiguration
 */
export interface AcmpcaCertificateAuthorityConfiguration {
  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#KeyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#SigningAlgorithm
   */
  readonly signingAlgorithm?: string;

  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#Subject
   */
  readonly subject?: Acmpcaasn1Subject;

  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#CsrExtensions
   */
  readonly csrExtensions?: AcmpcaCsrExtensions;

}

/**
 * Converts an object of type 'AcmpcaCertificateAuthorityConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCertificateAuthorityConfiguration(obj: AcmpcaCertificateAuthorityConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyAlgorithm': obj.keyAlgorithm,
    'SigningAlgorithm': obj.signingAlgorithm,
    'Subject': toJson_Acmpcaasn1Subject(obj.subject),
    'CsrExtensions': toJson_AcmpcaCsrExtensions(obj.csrExtensions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaRevocationConfiguration
 */
export interface AcmpcaRevocationConfiguration {
  /**
   * @schema AcmpcaRevocationConfiguration#CrlConfiguration
   */
  readonly crlConfiguration?: AcmpcaCrlConfiguration;

}

/**
 * Converts an object of type 'AcmpcaRevocationConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaRevocationConfiguration(obj: AcmpcaRevocationConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CrlConfiguration': toJson_AcmpcaCrlConfiguration(obj.crlConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaTag
 */
export interface AcmpcaTag {
  /**
   * @schema AcmpcaTag#Key
   */
  readonly key?: string;

  /**
   * @schema AcmpcaTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AcmpcaTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaTag(obj: AcmpcaTag | undefined): Record<string, any> | undefined {
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
 * @schema AcmpcaCertificateAuthority
 */
export interface AcmpcaCertificateAuthority {
  /**
   * @schema AcmpcaCertificateAuthority#Arn
   */
  readonly arn?: string;

  /**
   * @schema AcmpcaCertificateAuthority#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema AcmpcaCertificateAuthority#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AcmpcaCertificateAuthority#LastStateChangeAt
   */
  readonly lastStateChangeAt?: string;

  /**
   * @schema AcmpcaCertificateAuthority#Type
   */
  readonly type?: string;

  /**
   * @schema AcmpcaCertificateAuthority#Serial
   */
  readonly serial?: string;

  /**
   * @schema AcmpcaCertificateAuthority#Status
   */
  readonly status?: string;

  /**
   * @schema AcmpcaCertificateAuthority#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema AcmpcaCertificateAuthority#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema AcmpcaCertificateAuthority#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema AcmpcaCertificateAuthority#CertificateAuthorityConfiguration
   */
  readonly certificateAuthorityConfiguration?: AcmpcaCertificateAuthorityConfiguration;

  /**
   * @schema AcmpcaCertificateAuthority#RevocationConfiguration
   */
  readonly revocationConfiguration?: AcmpcaRevocationConfiguration;

  /**
   * @schema AcmpcaCertificateAuthority#RestorableUntil
   */
  readonly restorableUntil?: string;

  /**
   * @schema AcmpcaCertificateAuthority#KeyStorageSecurityStandard
   */
  readonly keyStorageSecurityStandard?: string;

}

/**
 * Converts an object of type 'AcmpcaCertificateAuthority' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCertificateAuthority(obj: AcmpcaCertificateAuthority | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'OwnerAccount': obj.ownerAccount,
    'CreatedAt': obj.createdAt,
    'LastStateChangeAt': obj.lastStateChangeAt,
    'Type': obj.type,
    'Serial': obj.serial,
    'Status': obj.status,
    'NotBefore': obj.notBefore,
    'NotAfter': obj.notAfter,
    'FailureReason': obj.failureReason,
    'CertificateAuthorityConfiguration': toJson_AcmpcaCertificateAuthorityConfiguration(obj.certificateAuthorityConfiguration),
    'RevocationConfiguration': toJson_AcmpcaRevocationConfiguration(obj.revocationConfiguration),
    'RestorableUntil': obj.restorableUntil,
    'KeyStorageSecurityStandard': obj.keyStorageSecurityStandard,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaApiPassthrough
 */
export interface AcmpcaApiPassthrough {
  /**
   * @schema AcmpcaApiPassthrough#Extensions
   */
  readonly extensions?: AcmpcaExtensions;

  /**
   * @schema AcmpcaApiPassthrough#Subject
   */
  readonly subject?: Acmpcaasn1Subject;

}

/**
 * Converts an object of type 'AcmpcaApiPassthrough' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaApiPassthrough(obj: AcmpcaApiPassthrough | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Extensions': toJson_AcmpcaExtensions(obj.extensions),
    'Subject': toJson_Acmpcaasn1Subject(obj.subject),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaValidity
 */
export interface AcmpcaValidity {
  /**
   * @schema AcmpcaValidity#Value
   */
  readonly value?: number;

  /**
   * @schema AcmpcaValidity#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'AcmpcaValidity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaValidity(obj: AcmpcaValidity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaPermission
 */
export interface AcmpcaPermission {
  /**
   * @schema AcmpcaPermission#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmpcaPermission#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AcmpcaPermission#Principal
   */
  readonly principal?: string;

  /**
   * @schema AcmpcaPermission#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema AcmpcaPermission#Actions
   */
  readonly actions?: string[];

  /**
   * @schema AcmpcaPermission#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'AcmpcaPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaPermission(obj: AcmpcaPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'CreatedAt': obj.createdAt,
    'Principal': obj.principal,
    'SourceAccount': obj.sourceAccount,
    'Actions': obj.actions?.map(y => y),
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Acmpcaasn1Subject
 */
export interface Acmpcaasn1Subject {
  /**
   * @schema Acmpcaasn1Subject#Country
   */
  readonly country?: string;

  /**
   * @schema Acmpcaasn1Subject#Organization
   */
  readonly organization?: string;

  /**
   * @schema Acmpcaasn1Subject#OrganizationalUnit
   */
  readonly organizationalUnit?: string;

  /**
   * @schema Acmpcaasn1Subject#DistinguishedNameQualifier
   */
  readonly distinguishedNameQualifier?: string;

  /**
   * @schema Acmpcaasn1Subject#State
   */
  readonly state?: string;

  /**
   * @schema Acmpcaasn1Subject#CommonName
   */
  readonly commonName?: string;

  /**
   * @schema Acmpcaasn1Subject#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema Acmpcaasn1Subject#Locality
   */
  readonly locality?: string;

  /**
   * @schema Acmpcaasn1Subject#Title
   */
  readonly title?: string;

  /**
   * @schema Acmpcaasn1Subject#Surname
   */
  readonly surname?: string;

  /**
   * @schema Acmpcaasn1Subject#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema Acmpcaasn1Subject#Initials
   */
  readonly initials?: string;

  /**
   * @schema Acmpcaasn1Subject#Pseudonym
   */
  readonly pseudonym?: string;

  /**
   * @schema Acmpcaasn1Subject#GenerationQualifier
   */
  readonly generationQualifier?: string;

}

/**
 * Converts an object of type 'Acmpcaasn1Subject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Acmpcaasn1Subject(obj: Acmpcaasn1Subject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Country': obj.country,
    'Organization': obj.organization,
    'OrganizationalUnit': obj.organizationalUnit,
    'DistinguishedNameQualifier': obj.distinguishedNameQualifier,
    'State': obj.state,
    'CommonName': obj.commonName,
    'SerialNumber': obj.serialNumber,
    'Locality': obj.locality,
    'Title': obj.title,
    'Surname': obj.surname,
    'GivenName': obj.givenName,
    'Initials': obj.initials,
    'Pseudonym': obj.pseudonym,
    'GenerationQualifier': obj.generationQualifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCsrExtensions
 */
export interface AcmpcaCsrExtensions {
  /**
   * @schema AcmpcaCsrExtensions#KeyUsage
   */
  readonly keyUsage?: AcmpcaKeyUsage;

  /**
   * @schema AcmpcaCsrExtensions#SubjectInformationAccess
   */
  readonly subjectInformationAccess?: AcmpcaAccessDescription[];

}

/**
 * Converts an object of type 'AcmpcaCsrExtensions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCsrExtensions(obj: AcmpcaCsrExtensions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyUsage': toJson_AcmpcaKeyUsage(obj.keyUsage),
    'SubjectInformationAccess': obj.subjectInformationAccess?.map(y => toJson_AcmpcaAccessDescription(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaCrlConfiguration
 */
export interface AcmpcaCrlConfiguration {
  /**
   * @schema AcmpcaCrlConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AcmpcaCrlConfiguration#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema AcmpcaCrlConfiguration#CustomCname
   */
  readonly customCname?: string;

  /**
   * @schema AcmpcaCrlConfiguration#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema AcmpcaCrlConfiguration#S3ObjectAcl
   */
  readonly s3ObjectAcl?: string;

}

/**
 * Converts an object of type 'AcmpcaCrlConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaCrlConfiguration(obj: AcmpcaCrlConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'ExpirationInDays': obj.expirationInDays,
    'CustomCname': obj.customCname,
    'S3BucketName': obj.s3BucketName,
    'S3ObjectAcl': obj.s3ObjectAcl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaExtensions
 */
export interface AcmpcaExtensions {
  /**
   * @schema AcmpcaExtensions#CertificatePolicies
   */
  readonly certificatePolicies?: AcmpcaPolicyInformation[];

  /**
   * @schema AcmpcaExtensions#ExtendedKeyUsage
   */
  readonly extendedKeyUsage?: AcmpcaExtendedKeyUsage[];

  /**
   * @schema AcmpcaExtensions#KeyUsage
   */
  readonly keyUsage?: AcmpcaKeyUsage;

  /**
   * @schema AcmpcaExtensions#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: AcmpcaGeneralName[];

}

/**
 * Converts an object of type 'AcmpcaExtensions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaExtensions(obj: AcmpcaExtensions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificatePolicies': obj.certificatePolicies?.map(y => toJson_AcmpcaPolicyInformation(y)),
    'ExtendedKeyUsage': obj.extendedKeyUsage?.map(y => toJson_AcmpcaExtendedKeyUsage(y)),
    'KeyUsage': toJson_AcmpcaKeyUsage(obj.keyUsage),
    'SubjectAlternativeNames': obj.subjectAlternativeNames?.map(y => toJson_AcmpcaGeneralName(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaKeyUsage
 */
export interface AcmpcaKeyUsage {
  /**
   * @schema AcmpcaKeyUsage#DigitalSignature
   */
  readonly digitalSignature?: boolean;

  /**
   * @schema AcmpcaKeyUsage#NonRepudiation
   */
  readonly nonRepudiation?: boolean;

  /**
   * @schema AcmpcaKeyUsage#KeyEncipherment
   */
  readonly keyEncipherment?: boolean;

  /**
   * @schema AcmpcaKeyUsage#DataEncipherment
   */
  readonly dataEncipherment?: boolean;

  /**
   * @schema AcmpcaKeyUsage#KeyAgreement
   */
  readonly keyAgreement?: boolean;

  /**
   * @schema AcmpcaKeyUsage#KeyCertSign
   */
  readonly keyCertSign?: boolean;

  /**
   * @schema AcmpcaKeyUsage#CRLSign
   */
  readonly crlSign?: boolean;

  /**
   * @schema AcmpcaKeyUsage#EncipherOnly
   */
  readonly encipherOnly?: boolean;

  /**
   * @schema AcmpcaKeyUsage#DecipherOnly
   */
  readonly decipherOnly?: boolean;

}

/**
 * Converts an object of type 'AcmpcaKeyUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaKeyUsage(obj: AcmpcaKeyUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DigitalSignature': obj.digitalSignature,
    'NonRepudiation': obj.nonRepudiation,
    'KeyEncipherment': obj.keyEncipherment,
    'DataEncipherment': obj.dataEncipherment,
    'KeyAgreement': obj.keyAgreement,
    'KeyCertSign': obj.keyCertSign,
    'CRLSign': obj.crlSign,
    'EncipherOnly': obj.encipherOnly,
    'DecipherOnly': obj.decipherOnly,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaAccessDescription
 */
export interface AcmpcaAccessDescription {
  /**
   * @schema AcmpcaAccessDescription#AccessMethod
   */
  readonly accessMethod?: AcmpcaAccessMethod;

  /**
   * @schema AcmpcaAccessDescription#AccessLocation
   */
  readonly accessLocation?: AcmpcaGeneralName;

}

/**
 * Converts an object of type 'AcmpcaAccessDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaAccessDescription(obj: AcmpcaAccessDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessMethod': toJson_AcmpcaAccessMethod(obj.accessMethod),
    'AccessLocation': toJson_AcmpcaGeneralName(obj.accessLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaPolicyInformation
 */
export interface AcmpcaPolicyInformation {
  /**
   * @schema AcmpcaPolicyInformation#CertPolicyId
   */
  readonly certPolicyId?: string;

  /**
   * @schema AcmpcaPolicyInformation#PolicyQualifiers
   */
  readonly policyQualifiers?: AcmpcaPolicyQualifierInfo[];

}

/**
 * Converts an object of type 'AcmpcaPolicyInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaPolicyInformation(obj: AcmpcaPolicyInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertPolicyId': obj.certPolicyId,
    'PolicyQualifiers': obj.policyQualifiers?.map(y => toJson_AcmpcaPolicyQualifierInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaExtendedKeyUsage
 */
export interface AcmpcaExtendedKeyUsage {
  /**
   * @schema AcmpcaExtendedKeyUsage#ExtendedKeyUsageType
   */
  readonly extendedKeyUsageType?: string;

  /**
   * @schema AcmpcaExtendedKeyUsage#ExtendedKeyUsageObjectIdentifier
   */
  readonly extendedKeyUsageObjectIdentifier?: string;

}

/**
 * Converts an object of type 'AcmpcaExtendedKeyUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaExtendedKeyUsage(obj: AcmpcaExtendedKeyUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExtendedKeyUsageType': obj.extendedKeyUsageType,
    'ExtendedKeyUsageObjectIdentifier': obj.extendedKeyUsageObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaGeneralName
 */
export interface AcmpcaGeneralName {
  /**
   * @schema AcmpcaGeneralName#OtherName
   */
  readonly otherName?: AcmpcaOtherName;

  /**
   * @schema AcmpcaGeneralName#Rfc822Name
   */
  readonly rfc822Name?: string;

  /**
   * @schema AcmpcaGeneralName#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema AcmpcaGeneralName#DirectoryName
   */
  readonly directoryName?: Acmpcaasn1Subject;

  /**
   * @schema AcmpcaGeneralName#EdiPartyName
   */
  readonly ediPartyName?: AcmpcaEdiPartyName;

  /**
   * @schema AcmpcaGeneralName#UniformResourceIdentifier
   */
  readonly uniformResourceIdentifier?: string;

  /**
   * @schema AcmpcaGeneralName#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema AcmpcaGeneralName#RegisteredId
   */
  readonly registeredId?: string;

}

/**
 * Converts an object of type 'AcmpcaGeneralName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaGeneralName(obj: AcmpcaGeneralName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OtherName': toJson_AcmpcaOtherName(obj.otherName),
    'Rfc822Name': obj.rfc822Name,
    'DnsName': obj.dnsName,
    'DirectoryName': toJson_Acmpcaasn1Subject(obj.directoryName),
    'EdiPartyName': toJson_AcmpcaEdiPartyName(obj.ediPartyName),
    'UniformResourceIdentifier': obj.uniformResourceIdentifier,
    'IpAddress': obj.ipAddress,
    'RegisteredId': obj.registeredId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaAccessMethod
 */
export interface AcmpcaAccessMethod {
  /**
   * @schema AcmpcaAccessMethod#CustomObjectIdentifier
   */
  readonly customObjectIdentifier?: string;

  /**
   * @schema AcmpcaAccessMethod#AccessMethodType
   */
  readonly accessMethodType?: string;

}

/**
 * Converts an object of type 'AcmpcaAccessMethod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaAccessMethod(obj: AcmpcaAccessMethod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CustomObjectIdentifier': obj.customObjectIdentifier,
    'AccessMethodType': obj.accessMethodType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaPolicyQualifierInfo
 */
export interface AcmpcaPolicyQualifierInfo {
  /**
   * @schema AcmpcaPolicyQualifierInfo#PolicyQualifierId
   */
  readonly policyQualifierId?: string;

  /**
   * @schema AcmpcaPolicyQualifierInfo#Qualifier
   */
  readonly qualifier?: AcmpcaQualifier;

}

/**
 * Converts an object of type 'AcmpcaPolicyQualifierInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaPolicyQualifierInfo(obj: AcmpcaPolicyQualifierInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyQualifierId': obj.policyQualifierId,
    'Qualifier': toJson_AcmpcaQualifier(obj.qualifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaOtherName
 */
export interface AcmpcaOtherName {
  /**
   * @schema AcmpcaOtherName#TypeId
   */
  readonly typeId?: string;

  /**
   * @schema AcmpcaOtherName#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AcmpcaOtherName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaOtherName(obj: AcmpcaOtherName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeId': obj.typeId,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaEdiPartyName
 */
export interface AcmpcaEdiPartyName {
  /**
   * @schema AcmpcaEdiPartyName#PartyName
   */
  readonly partyName?: string;

  /**
   * @schema AcmpcaEdiPartyName#NameAssigner
   */
  readonly nameAssigner?: string;

}

/**
 * Converts an object of type 'AcmpcaEdiPartyName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaEdiPartyName(obj: AcmpcaEdiPartyName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PartyName': obj.partyName,
    'NameAssigner': obj.nameAssigner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmpcaQualifier
 */
export interface AcmpcaQualifier {
  /**
   * @schema AcmpcaQualifier#CpsUri
   */
  readonly cpsUri?: string;

}

/**
 * Converts an object of type 'AcmpcaQualifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmpcaQualifier(obj: AcmpcaQualifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CpsUri': obj.cpsUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
