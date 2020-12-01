/**
 * @schema AddTagsToCertificateRequest
 */
export interface AddTagsToCertificateRequest {
  /**
   * @schema AddTagsToCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema AddTagsToCertificateRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema DeleteCertificateRequest
 */
export interface DeleteCertificateRequest {
  /**
   * @schema DeleteCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema DescribeCertificateRequest
 */
export interface DescribeCertificateRequest {
  /**
   * @schema DescribeCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema DescribeCertificateResponse
 */
export interface DescribeCertificateResponse {
  /**
   * @schema DescribeCertificateResponse#Certificate
   */
  readonly certificate?: CertificateDetail;

}

/**
 * @schema ExportCertificateRequest
 */
export interface ExportCertificateRequest {
  /**
   * @schema ExportCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema ExportCertificateRequest#Passphrase
   */
  readonly passphrase: any;

}

/**
 * @schema ExportCertificateResponse
 */
export interface ExportCertificateResponse {
  /**
   * @schema ExportCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema ExportCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

  /**
   * @schema ExportCertificateResponse#PrivateKey
   */
  readonly privateKey?: string;

}

/**
 * @schema GetCertificateRequest
 */
export interface GetCertificateRequest {
  /**
   * @schema GetCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema GetCertificateResponse
 */
export interface GetCertificateResponse {
  /**
   * @schema GetCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema GetCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * @schema ImportCertificateRequest
 */
export interface ImportCertificateRequest {
  /**
   * @schema ImportCertificateRequest#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema ImportCertificateRequest#Certificate
   */
  readonly certificate: any;

  /**
   * @schema ImportCertificateRequest#PrivateKey
   */
  readonly privateKey: any;

  /**
   * @schema ImportCertificateRequest#CertificateChain
   */
  readonly certificateChain?: any;

  /**
   * @schema ImportCertificateRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema ImportCertificateResponse
 */
export interface ImportCertificateResponse {
  /**
   * @schema ImportCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema ListCertificatesRequest
 */
export interface ListCertificatesRequest {
  /**
   * @schema ListCertificatesRequest#CertificateStatuses
   */
  readonly certificateStatuses?: string[];

  /**
   * @schema ListCertificatesRequest#Includes
   */
  readonly includes?: Filters;

  /**
   * @schema ListCertificatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCertificatesRequest#MaxItems
   */
  readonly maxItems?: number;

}

/**
 * @schema ListCertificatesResponse
 */
export interface ListCertificatesResponse {
  /**
   * @schema ListCertificatesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCertificatesResponse#CertificateSummaryList
   */
  readonly certificateSummaryList?: CertificateSummary[];

}

/**
 * @schema ListTagsForCertificateRequest
 */
export interface ListTagsForCertificateRequest {
  /**
   * @schema ListTagsForCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema ListTagsForCertificateResponse
 */
export interface ListTagsForCertificateResponse {
  /**
   * @schema ListTagsForCertificateResponse#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RemoveTagsFromCertificateRequest
 */
export interface RemoveTagsFromCertificateRequest {
  /**
   * @schema RemoveTagsFromCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema RemoveTagsFromCertificateRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema RenewCertificateRequest
 */
export interface RenewCertificateRequest {
  /**
   * @schema RenewCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema RequestCertificateRequest
 */
export interface RequestCertificateRequest {
  /**
   * @schema RequestCertificateRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema RequestCertificateRequest#ValidationMethod
   */
  readonly validationMethod?: string;

  /**
   * @schema RequestCertificateRequest#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema RequestCertificateRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema RequestCertificateRequest#DomainValidationOptions
   */
  readonly domainValidationOptions?: DomainValidationOption[];

  /**
   * @schema RequestCertificateRequest#Options
   */
  readonly options?: CertificateOptions;

  /**
   * @schema RequestCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema RequestCertificateRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema RequestCertificateResponse
 */
export interface RequestCertificateResponse {
  /**
   * @schema RequestCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema ResendValidationEmailRequest
 */
export interface ResendValidationEmailRequest {
  /**
   * @schema ResendValidationEmailRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema ResendValidationEmailRequest#Domain
   */
  readonly domain: string;

  /**
   * @schema ResendValidationEmailRequest#ValidationDomain
   */
  readonly validationDomain: string;

}

/**
 * @schema UpdateCertificateOptionsRequest
 */
export interface UpdateCertificateOptionsRequest {
  /**
   * @schema UpdateCertificateOptionsRequest#CertificateArn
   */
  readonly certificateArn: string;

  /**
   * @schema UpdateCertificateOptionsRequest#Options
   */
  readonly options: CertificateOptions;

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
  readonly value?: string;

}

/**
 * @schema CertificateDetail
 */
export interface CertificateDetail {
  /**
   * @schema CertificateDetail#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CertificateDetail#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema CertificateDetail#SubjectAlternativeNames
   */
  readonly subjectAlternativeNames?: string[];

  /**
   * @schema CertificateDetail#DomainValidationOptions
   */
  readonly domainValidationOptions?: DomainValidation[];

  /**
   * @schema CertificateDetail#Serial
   */
  readonly serial?: string;

  /**
   * @schema CertificateDetail#Subject
   */
  readonly subject?: string;

  /**
   * @schema CertificateDetail#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema CertificateDetail#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CertificateDetail#IssuedAt
   */
  readonly issuedAt?: string;

  /**
   * @schema CertificateDetail#ImportedAt
   */
  readonly importedAt?: string;

  /**
   * @schema CertificateDetail#Status
   */
  readonly status?: string;

  /**
   * @schema CertificateDetail#RevokedAt
   */
  readonly revokedAt?: string;

  /**
   * @schema CertificateDetail#RevocationReason
   */
  readonly revocationReason?: string;

  /**
   * @schema CertificateDetail#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema CertificateDetail#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema CertificateDetail#KeyAlgorithm
   */
  readonly keyAlgorithm?: string;

  /**
   * @schema CertificateDetail#SignatureAlgorithm
   */
  readonly signatureAlgorithm?: string;

  /**
   * @schema CertificateDetail#InUseBy
   */
  readonly inUseBy?: string[];

  /**
   * @schema CertificateDetail#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema CertificateDetail#Type
   */
  readonly type?: string;

  /**
   * @schema CertificateDetail#RenewalSummary
   */
  readonly renewalSummary?: RenewalSummary;

  /**
   * @schema CertificateDetail#KeyUsages
   */
  readonly keyUsages?: KeyUsage[];

  /**
   * @schema CertificateDetail#ExtendedKeyUsages
   */
  readonly extendedKeyUsages?: ExtendedKeyUsage[];

  /**
   * @schema CertificateDetail#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema CertificateDetail#RenewalEligibility
   */
  readonly renewalEligibility?: string;

  /**
   * @schema CertificateDetail#Options
   */
  readonly options?: CertificateOptions;

}

/**
 * @schema Filters
 */
export interface Filters {
  /**
   * @schema Filters#extendedKeyUsage
   */
  readonly extendedKeyUsage?: string[];

  /**
   * @schema Filters#keyUsage
   */
  readonly keyUsage?: string[];

  /**
   * @schema Filters#keyTypes
   */
  readonly keyTypes?: string[];

}

/**
 * @schema CertificateSummary
 */
export interface CertificateSummary {
  /**
   * @schema CertificateSummary#CertificateArn
   */
  readonly certificateArn?: string;

  /**
   * @schema CertificateSummary#DomainName
   */
  readonly domainName?: string;

}

/**
 * @schema DomainValidationOption
 */
export interface DomainValidationOption {
  /**
   * @schema DomainValidationOption#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainValidationOption#ValidationDomain
   */
  readonly validationDomain: string;

}

/**
 * @schema CertificateOptions
 */
export interface CertificateOptions {
  /**
   * @schema CertificateOptions#CertificateTransparencyLoggingPreference
   */
  readonly certificateTransparencyLoggingPreference?: string;

}

/**
 * @schema DomainValidation
 */
export interface DomainValidation {
  /**
   * @schema DomainValidation#DomainName
   */
  readonly domainName: string;

  /**
   * @schema DomainValidation#ValidationEmails
   */
  readonly validationEmails?: string[];

  /**
   * @schema DomainValidation#ValidationDomain
   */
  readonly validationDomain?: string;

  /**
   * @schema DomainValidation#ValidationStatus
   */
  readonly validationStatus?: string;

  /**
   * @schema DomainValidation#ResourceRecord
   */
  readonly resourceRecord?: ResourceRecord;

  /**
   * @schema DomainValidation#ValidationMethod
   */
  readonly validationMethod?: string;

}

/**
 * @schema RenewalSummary
 */
export interface RenewalSummary {
  /**
   * @schema RenewalSummary#RenewalStatus
   */
  readonly renewalStatus: string;

  /**
   * @schema RenewalSummary#DomainValidationOptions
   */
  readonly domainValidationOptions: DomainValidation[];

  /**
   * @schema RenewalSummary#RenewalStatusReason
   */
  readonly renewalStatusReason?: string;

  /**
   * @schema RenewalSummary#UpdatedAt
   */
  readonly updatedAt: string;

}

/**
 * @schema KeyUsage
 */
export interface KeyUsage {
  /**
   * @schema KeyUsage#Name
   */
  readonly name?: string;

}

/**
 * @schema ExtendedKeyUsage
 */
export interface ExtendedKeyUsage {
  /**
   * @schema ExtendedKeyUsage#Name
   */
  readonly name?: string;

  /**
   * @schema ExtendedKeyUsage#OID
   */
  readonly oid?: string;

}

/**
 * @schema ResourceRecord
 */
export interface ResourceRecord {
  /**
   * @schema ResourceRecord#Name
   */
  readonly name: string;

  /**
   * @schema ResourceRecord#Type
   */
  readonly type: string;

  /**
   * @schema ResourceRecord#Value
   */
  readonly value: string;

}
