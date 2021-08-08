/**
 * @schema AcmAddTagsToCertificateRequest
 */
export interface AcmAddTagsToCertificateRequest {
  /**
   * @schema AcmAddTagsToCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmAddTagsToCertificateRequest#Tags
   */
  readonly tags?: AcmTag[];

}

/**
 * Converts an object of type 'AcmAddTagsToCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmAddTagsToCertificateRequest(obj: AcmAddTagsToCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Tags': obj.tags?.map(y => toJson_AcmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmDeleteCertificateRequest
 */
export interface AcmDeleteCertificateRequest {
  /**
   * @schema AcmDeleteCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmDeleteCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmDeleteCertificateRequest(obj: AcmDeleteCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmDescribeCertificateRequest
 */
export interface AcmDescribeCertificateRequest {
  /**
   * @schema AcmDescribeCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmDescribeCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmDescribeCertificateRequest(obj: AcmDescribeCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmDescribeCertificateResponse
 */
export interface AcmDescribeCertificateResponse {
  /**
   * @schema AcmDescribeCertificateResponse#Certificate
   */
  readonly certificate?: AcmCertificateDetail;

}

/**
 * Converts an object of type 'AcmDescribeCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmDescribeCertificateResponse(obj: AcmDescribeCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': toJson_AcmCertificateDetail(obj.certificate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmExportCertificateRequest
 */
export interface AcmExportCertificateRequest {
  /**
   * @schema AcmExportCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmExportCertificateRequest#Passphrase
   */
  readonly passphrase?: any;

}

/**
 * Converts an object of type 'AcmExportCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmExportCertificateRequest(obj: AcmExportCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Passphrase': obj.passphrase,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmExportCertificateResponse
 */
export interface AcmExportCertificateResponse {
  /**
   * @schema AcmExportCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema AcmExportCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

  /**
   * @schema AcmExportCertificateResponse#PrivateKey
   */
  readonly privateKey?: string;

}

/**
 * Converts an object of type 'AcmExportCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmExportCertificateResponse(obj: AcmExportCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'CertificateChain': obj.certificateChain,
    'PrivateKey': obj.privateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmGetAccountConfigurationResponse
 */
export interface AcmGetAccountConfigurationResponse {
  /**
   * @schema AcmGetAccountConfigurationResponse#ExpiryEvents
   */
  readonly expiryEvents?: AcmExpiryEventsConfiguration;

}

/**
 * Converts an object of type 'AcmGetAccountConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmGetAccountConfigurationResponse(obj: AcmGetAccountConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExpiryEvents': toJson_AcmExpiryEventsConfiguration(obj.expiryEvents),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmGetCertificateRequest
 */
export interface AcmGetCertificateRequest {
  /**
   * @schema AcmGetCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmGetCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmGetCertificateRequest(obj: AcmGetCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmGetCertificateResponse
 */
export interface AcmGetCertificateResponse {
  /**
   * @schema AcmGetCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema AcmGetCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * Converts an object of type 'AcmGetCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmGetCertificateResponse(obj: AcmGetCertificateResponse | undefined): Record<string, any> | undefined {
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
 * @schema AcmImportCertificateRequest
 */
export interface AcmImportCertificateRequest {
  /**
   * @schema AcmImportCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmImportCertificateRequest#Certificate
   */
  readonly certificate?: any;

  /**
   * @schema AcmImportCertificateRequest#PrivateKey
   */
  readonly privateKey?: any;

  /**
   * @schema AcmImportCertificateRequest#CertificateChain
   */
  readonly certificateChain?: any;

  /**
   * @schema AcmImportCertificateRequest#Tags
   */
  readonly tags?: AcmTag[];

}

/**
 * Converts an object of type 'AcmImportCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmImportCertificateRequest(obj: AcmImportCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Certificate': obj.certificate,
    'PrivateKey': obj.privateKey,
    'CertificateChain': obj.certificateChain,
    'Tags': obj.tags?.map(y => toJson_AcmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmImportCertificateResponse
 */
export interface AcmImportCertificateResponse {
  /**
   * @schema AcmImportCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmImportCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmImportCertificateResponse(obj: AcmImportCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmListCertificatesRequest
 */
export interface AcmListCertificatesRequest {
  /**
   * @schema AcmListCertificatesRequest#CertificateStatuses
   */
  readonly certificateStatuses?: string[];

  /**
   * @schema AcmListCertificatesRequest#Includes
   */
  readonly includes?: AcmFilters;

  /**
   * @schema AcmListCertificatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AcmListCertificatesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * Converts an object of type 'AcmListCertificatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmListCertificatesRequest(obj: AcmListCertificatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateStatuses': obj.certificateStatuses?.map(y => y),
    'Includes': toJson_AcmFilters(obj.includes),
    'NextToken': obj.nextToken,
    'MaxItems': obj.maxItems,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmListCertificatesResponse
 */
export interface AcmListCertificatesResponse {
  /**
   * @schema AcmListCertificatesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AcmListCertificatesResponse#CertificateSummaryList
   */
  readonly certificateSummaryList?: AcmCertificateSummary[];

}

/**
 * Converts an object of type 'AcmListCertificatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmListCertificatesResponse(obj: AcmListCertificatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'CertificateSummaryList': obj.certificateSummaryList?.map(y => toJson_AcmCertificateSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmListTagsForCertificateRequest
 */
export interface AcmListTagsForCertificateRequest {
  /**
   * @schema AcmListTagsForCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmListTagsForCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmListTagsForCertificateRequest(obj: AcmListTagsForCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmListTagsForCertificateResponse
 */
export interface AcmListTagsForCertificateResponse {
  /**
   * @schema AcmListTagsForCertificateResponse#Tags
   */
  readonly tags?: AcmTag[];

}

/**
 * Converts an object of type 'AcmListTagsForCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmListTagsForCertificateResponse(obj: AcmListTagsForCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_AcmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmPutAccountConfigurationRequest
 */
export interface AcmPutAccountConfigurationRequest {
  /**
   * @schema AcmPutAccountConfigurationRequest#ExpiryEvents
   */
  readonly expiryEvents?: AcmExpiryEventsConfiguration;

  /**
   * @schema AcmPutAccountConfigurationRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * Converts an object of type 'AcmPutAccountConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmPutAccountConfigurationRequest(obj: AcmPutAccountConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExpiryEvents': toJson_AcmExpiryEventsConfiguration(obj.expiryEvents),
    'IdempotencyToken': obj.idempotencyToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmRemoveTagsFromCertificateRequest
 */
export interface AcmRemoveTagsFromCertificateRequest {
  /**
   * @schema AcmRemoveTagsFromCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmRemoveTagsFromCertificateRequest#Tags
   */
  readonly tags?: AcmTag[];

}

/**
 * Converts an object of type 'AcmRemoveTagsFromCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmRemoveTagsFromCertificateRequest(obj: AcmRemoveTagsFromCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Tags': obj.tags?.map(y => toJson_AcmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmRenewCertificateRequest
 */
export interface AcmRenewCertificateRequest {
  /**
   * @schema AcmRenewCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmRenewCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmRenewCertificateRequest(obj: AcmRenewCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmRequestCertificateRequest
 */
export interface AcmRequestCertificateRequest {
  /**
   * @schema AcmRequestCertificateRequest#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AcmRequestCertificateRequest#ValidationMethod
   */
  readonly validationMethod?: string;

  /**
   * @schema AcmRequestCertificateRequest#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema AcmRequestCertificateRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema AcmRequestCertificateRequest#DomainValidationOptions
   */
  readonly domainValidationOptions?: AcmDomainValidationOption[];

  /**
   * @schema AcmRequestCertificateRequest#Options
   */
  readonly options?: AcmCertificateOptions;

  /**
   * @schema AcmRequestCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmRequestCertificateRequest#Tags
   */
  readonly tags?: AcmTag[];

}

/**
 * Converts an object of type 'AcmRequestCertificateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmRequestCertificateRequest(obj: AcmRequestCertificateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ValidationMethod': obj.validationMethod,
    'SubjectAlternativeNames': obj.subjectAlternativeNames?.map(y => y),
    'IdempotencyToken': obj.idempotencyToken,
    'DomainValidationOptions': obj.domainValidationOptions?.map(y => toJson_AcmDomainValidationOption(y)),
    'Options': toJson_AcmCertificateOptions(obj.options),
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'Tags': obj.tags?.map(y => toJson_AcmTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmRequestCertificateResponse
 */
export interface AcmRequestCertificateResponse {
  /**
   * @schema AcmRequestCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * Converts an object of type 'AcmRequestCertificateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmRequestCertificateResponse(obj: AcmRequestCertificateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmResendValidationEmailRequest
 */
export interface AcmResendValidationEmailRequest {
  /**
   * @schema AcmResendValidationEmailRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmResendValidationEmailRequest#Domain
   */
  readonly domain?: string;

  /**
   * @schema AcmResendValidationEmailRequest#ValidationDomain
   */
  readonly validationDomain?: string;

}

/**
 * Converts an object of type 'AcmResendValidationEmailRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmResendValidationEmailRequest(obj: AcmResendValidationEmailRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Domain': obj.domain,
    'ValidationDomain': obj.validationDomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmUpdateCertificateOptionsRequest
 */
export interface AcmUpdateCertificateOptionsRequest {
  /**
   * @schema AcmUpdateCertificateOptionsRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmUpdateCertificateOptionsRequest#Options
   */
  readonly options?: AcmCertificateOptions;

}

/**
 * Converts an object of type 'AcmUpdateCertificateOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmUpdateCertificateOptionsRequest(obj: AcmUpdateCertificateOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'Options': toJson_AcmCertificateOptions(obj.options),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmTag
 */
export interface AcmTag {
  /**
   * @schema AcmTag#Key
   */
  readonly key?: string;

  /**
   * @schema AcmTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AcmTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmTag(obj: AcmTag | undefined): Record<string, any> | undefined {
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
 * @schema AcmCertificateDetail
 */
export interface AcmCertificateDetail {
  /**
   * @schema AcmCertificateDetail#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmCertificateDetail#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AcmCertificateDetail#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema AcmCertificateDetail#DomainValidationOptions
   */
  readonly domainValidationOptions?: AcmDomainValidation[];

  /**
   * @schema AcmCertificateDetail#Serial
   */
  readonly serial?: string;

  /**
   * @schema AcmCertificateDetail#Subject
   */
  readonly subject?: string;

  /**
   * @schema AcmCertificateDetail#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema AcmCertificateDetail#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema AcmCertificateDetail#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema AcmCertificateDetail#ImportedAt
   */
  readonly importedAt?: string;

  /**
   * @schema AcmCertificateDetail#Status
   */
  readonly status?: string;

  /**
   * @schema AcmCertificateDetail#RevokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema AcmCertificateDetail#RevocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema AcmCertificateDetail#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema AcmCertificateDetail#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema AcmCertificateDetail#KeyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema AcmCertificateDetail#SignatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema AcmCertificateDetail#InUseBy
   */
  readonly inUseBy?: string[];

  /**
   * @schema AcmCertificateDetail#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema AcmCertificateDetail#Type
   */
  readonly type?: string;

  /**
   * @schema AcmCertificateDetail#RenewalSummary
   */
  readonly renewalSummary?: AcmRenewalSummary;

  /**
   * @schema AcmCertificateDetail#KeyUsages
   */
  readonly keyUsages?: AcmKeyUsage[];

  /**
   * @schema AcmCertificateDetail#ExtendedKeyUsages
   */
  readonly extendedKeyUsages?: AcmExtendedKeyUsage[];

  /**
   * @schema AcmCertificateDetail#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema AcmCertificateDetail#RenewalEligibility
   */
  readonly renewalEligibility?: string;

  /**
   * @schema AcmCertificateDetail#Options
   */
  readonly options?: AcmCertificateOptions;

}

/**
 * Converts an object of type 'AcmCertificateDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmCertificateDetail(obj: AcmCertificateDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'DomainName': obj.domainName,
    'SubjectAlternativeNames': obj.subjectAlternativeNames?.map(y => y),
    'DomainValidationOptions': obj.domainValidationOptions?.map(y => toJson_AcmDomainValidation(y)),
    'Serial': obj.serial,
    'Subject': obj.subject,
    'Issuer': obj.issuer,
    'CreatedAt': obj.createdAt,
    'IssuedAt': obj.issuedAt,
    'ImportedAt': obj.importedAt,
    'Status': obj.status,
    'RevokedAt': obj.revokedAt,
    'RevocationReason': obj.revocationReason,
    'NotBefore': obj.notBefore,
    'NotAfter': obj.notAfter,
    'KeyAlgorithm': obj.keyAlgorithm,
    'SignatureAlgorithm': obj.signatureAlgorithm,
    'InUseBy': obj.inUseBy?.map(y => y),
    'FailureReason': obj.failureReason,
    'Type': obj.type,
    'RenewalSummary': toJson_AcmRenewalSummary(obj.renewalSummary),
    'KeyUsages': obj.keyUsages?.map(y => toJson_AcmKeyUsage(y)),
    'ExtendedKeyUsages': obj.extendedKeyUsages?.map(y => toJson_AcmExtendedKeyUsage(y)),
    'CertificateAuthorityArn': obj.certificateAuthorityArn,
    'RenewalEligibility': obj.renewalEligibility,
    'Options': toJson_AcmCertificateOptions(obj.options),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmExpiryEventsConfiguration
 */
export interface AcmExpiryEventsConfiguration {
  /**
   * @schema AcmExpiryEventsConfiguration#DaysBeforeExpiry
   */
  readonly daysBeforeExpiry?: number;

}

/**
 * Converts an object of type 'AcmExpiryEventsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmExpiryEventsConfiguration(obj: AcmExpiryEventsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DaysBeforeExpiry': obj.daysBeforeExpiry,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmFilters
 */
export interface AcmFilters {
  /**
   * @schema AcmFilters#extendedKeyUsage
   */
  readonly extendedKeyUsage?: string[];

  /**
   * @schema AcmFilters#keyUsage
   */
  readonly keyUsage?: string[];

  /**
   * @schema AcmFilters#keyTypes
   */
  readonly keyTypes?: string[];

}

/**
 * Converts an object of type 'AcmFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmFilters(obj: AcmFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'extendedKeyUsage': obj.extendedKeyUsage?.map(y => y),
    'keyUsage': obj.keyUsage?.map(y => y),
    'keyTypes': obj.keyTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmCertificateSummary
 */
export interface AcmCertificateSummary {
  /**
   * @schema AcmCertificateSummary#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema AcmCertificateSummary#DomainName
   */
  readonly domainName?: string;

}

/**
 * Converts an object of type 'AcmCertificateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmCertificateSummary(obj: AcmCertificateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateArn': obj.certificateArn,
    'DomainName': obj.domainName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmDomainValidationOption
 */
export interface AcmDomainValidationOption {
  /**
   * @schema AcmDomainValidationOption#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AcmDomainValidationOption#ValidationDomain
   */
  readonly validationDomain?: string;

}

/**
 * Converts an object of type 'AcmDomainValidationOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmDomainValidationOption(obj: AcmDomainValidationOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ValidationDomain': obj.validationDomain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmCertificateOptions
 */
export interface AcmCertificateOptions {
  /**
   * @schema AcmCertificateOptions#CertificateTransparencyLoggingPreference
   */
  readonly certificateTransparencyLoggingPreference?: string;

}

/**
 * Converts an object of type 'AcmCertificateOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmCertificateOptions(obj: AcmCertificateOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CertificateTransparencyLoggingPreference': obj.certificateTransparencyLoggingPreference,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmDomainValidation
 */
export interface AcmDomainValidation {
  /**
   * @schema AcmDomainValidation#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema AcmDomainValidation#ValidationEmails
   */
  readonly validationEmails?: string[];

  /**
   * @schema AcmDomainValidation#ValidationDomain
   */
  readonly validationDomain?: string;

  /**
   * @schema AcmDomainValidation#ValidationStatus
   */
  readonly validationStatus?: string;

  /**
   * @schema AcmDomainValidation#ResourceRecord
   */
  readonly resourceRecord?: AcmResourceRecord;

  /**
   * @schema AcmDomainValidation#ValidationMethod
   */
  readonly validationMethod?: string;

}

/**
 * Converts an object of type 'AcmDomainValidation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmDomainValidation(obj: AcmDomainValidation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DomainName': obj.domainName,
    'ValidationEmails': obj.validationEmails?.map(y => y),
    'ValidationDomain': obj.validationDomain,
    'ValidationStatus': obj.validationStatus,
    'ResourceRecord': toJson_AcmResourceRecord(obj.resourceRecord),
    'ValidationMethod': obj.validationMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmRenewalSummary
 */
export interface AcmRenewalSummary {
  /**
   * @schema AcmRenewalSummary#RenewalStatus
   */
  readonly renewalStatus?: string;

  /**
   * @schema AcmRenewalSummary#DomainValidationOptions
   */
  readonly domainValidationOptions?: AcmDomainValidation[];

  /**
   * @schema AcmRenewalSummary#RenewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema AcmRenewalSummary#UpdatedAt
   */
  readonly updatedAt?: string;

}

/**
 * Converts an object of type 'AcmRenewalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmRenewalSummary(obj: AcmRenewalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RenewalStatus': obj.renewalStatus,
    'DomainValidationOptions': obj.domainValidationOptions?.map(y => toJson_AcmDomainValidation(y)),
    'RenewalStatusReason': obj.renewalStatusReason,
    'UpdatedAt': obj.updatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmKeyUsage
 */
export interface AcmKeyUsage {
  /**
   * @schema AcmKeyUsage#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'AcmKeyUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmKeyUsage(obj: AcmKeyUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmExtendedKeyUsage
 */
export interface AcmExtendedKeyUsage {
  /**
   * @schema AcmExtendedKeyUsage#Name
   */
  readonly name?: string;

  /**
   * @schema AcmExtendedKeyUsage#OID
   */
  readonly oid?: string;

}

/**
 * Converts an object of type 'AcmExtendedKeyUsage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmExtendedKeyUsage(obj: AcmExtendedKeyUsage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'OID': obj.oid,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AcmResourceRecord
 */
export interface AcmResourceRecord {
  /**
   * @schema AcmResourceRecord#Name
   */
  readonly name?: string;

  /**
   * @schema AcmResourceRecord#Type
   */
  readonly type?: string;

  /**
   * @schema AcmResourceRecord#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AcmResourceRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AcmResourceRecord(obj: AcmResourceRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
