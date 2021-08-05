/**
 * @schema AcmAddTagsToCertificateRequest
 */
export interface AcmAddTagsToCertificateRequest {
  /**
   * @schema AcmAddTagsToCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema AcmAddTagsToCertificateRequest#Tags
   */
  readonly tags: AcmTag[];

}

/**
 * @schema AcmDeleteCertificateRequest
 */
export interface AcmDeleteCertificateRequest {
  /**
   * @schema AcmDeleteCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema AcmDescribeCertificateRequest
 */
export interface AcmDescribeCertificateRequest {
  /**
   * @schema AcmDescribeCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

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
 * @schema AcmExportCertificateRequest
 */
export interface AcmExportCertificateRequest {
  /**
   * @schema AcmExportCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema AcmExportCertificateRequest#Passphrase
   */
  readonly passphrase: any;

}

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
 * @schema AcmGetCertificateRequest
 */
export interface AcmGetCertificateRequest {
  /**
   * @schema AcmGetCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

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
  readonly certificate: any;

  /**
   * @schema AcmImportCertificateRequest#PrivateKey
   */
  readonly privateKey: any;

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
 * @schema AcmImportCertificateResponse
 */
export interface AcmImportCertificateResponse {
  /**
   * @schema AcmImportCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

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
 * @schema AcmListTagsForCertificateRequest
 */
export interface AcmListTagsForCertificateRequest {
  /**
   * @schema AcmListTagsForCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

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
 * @schema AcmRemoveTagsFromCertificateRequest
 */
export interface AcmRemoveTagsFromCertificateRequest {
  /**
   * @schema AcmRemoveTagsFromCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema AcmRemoveTagsFromCertificateRequest#Tags
   */
  readonly tags: AcmTag[];

}

/**
 * @schema AcmRenewCertificateRequest
 */
export interface AcmRenewCertificateRequest {
  /**
   * @schema AcmRenewCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema AcmRequestCertificateRequest
 */
export interface AcmRequestCertificateRequest {
  /**
   * @schema AcmRequestCertificateRequest#DomainName
   */
  readonly domainName: string;

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
 * @schema AcmRequestCertificateResponse
 */
export interface AcmRequestCertificateResponse {
  /**
   * @schema AcmRequestCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema AcmResendValidationEmailRequest
 */
export interface AcmResendValidationEmailRequest {
  /**
   * @schema AcmResendValidationEmailRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema AcmResendValidationEmailRequest#Domain
   */
  readonly domain: string;

  /**
   * @schema AcmResendValidationEmailRequest#ValidationDomain
   */
  readonly validationDomain: string;

}

/**
 * @schema AcmUpdateCertificateOptionsRequest
 */
export interface AcmUpdateCertificateOptionsRequest {
  /**
   * @schema AcmUpdateCertificateOptionsRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema AcmUpdateCertificateOptionsRequest#Options
   */
  readonly options: AcmCertificateOptions;

}

/**
 * @schema AcmTag
 */
export interface AcmTag {
  /**
   * @schema AcmTag#Key
   */
  readonly key: string;

  /**
   * @schema AcmTag#Value
   */
  readonly value?: string;

}

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
 * @schema AcmDomainValidationOption
 */
export interface AcmDomainValidationOption {
  /**
   * @schema AcmDomainValidationOption#DomainName
   */
  readonly domainName: string;

  /**
   * @schema AcmDomainValidationOption#ValidationDomain
   */
  readonly validationDomain: string;

}

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
 * @schema AcmDomainValidation
 */
export interface AcmDomainValidation {
  /**
   * @schema AcmDomainValidation#DomainName
   */
  readonly domainName: string;

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
 * @schema AcmRenewalSummary
 */
export interface AcmRenewalSummary {
  /**
   * @schema AcmRenewalSummary#RenewalStatus
   */
  readonly renewalStatus: string;

  /**
   * @schema AcmRenewalSummary#DomainValidationOptions
   */
  readonly domainValidationOptions: AcmDomainValidation[];

  /**
   * @schema AcmRenewalSummary#RenewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema AcmRenewalSummary#UpdatedAt
   */
  readonly updatedAt: string;

}

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
 * @schema AcmResourceRecord
 */
export interface AcmResourceRecord {
  /**
   * @schema AcmResourceRecord#Name
   */
  readonly name: string;

  /**
   * @schema AcmResourceRecord#Type
   */
  readonly type: string;

  /**
   * @schema AcmResourceRecord#Value
   */
  readonly value: string;

}
