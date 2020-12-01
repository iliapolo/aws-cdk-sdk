/**
 * @schema CreateCertificateAuthorityRequest
 */
export interface CreateCertificateAuthorityRequest {
  /**
   * @schema CreateCertificateAuthorityRequest#CertificateAuthorityConfiguration
   */
  readonly certificateAuthorityConfiguration: CertificateAuthorityConfiguration;

  /**
   * @schema CreateCertificateAuthorityRequest#RevocationConfiguration
   */
  readonly revocationConfiguration?: RevocationConfiguration;

  /**
   * @schema CreateCertificateAuthorityRequest#CertificateAuthorityType
   */
  readonly certificateAuthorityType: string;

  /**
   * @schema CreateCertificateAuthorityRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema CreateCertificateAuthorityRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCertificateAuthorityResponse
 */
export interface CreateCertificateAuthorityResponse {
  /**
   * @schema CreateCertificateAuthorityResponse#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

}

/**
 * @schema CreateCertificateAuthorityAuditReportRequest
 */
export interface CreateCertificateAuthorityAuditReportRequest {
  /**
   * @schema CreateCertificateAuthorityAuditReportRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema CreateCertificateAuthorityAuditReportRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema CreateCertificateAuthorityAuditReportRequest#AuditReportResponseFormat
   */
  readonly auditReportResponseFormat: string;

}

/**
 * @schema CreateCertificateAuthorityAuditReportResponse
 */
export interface CreateCertificateAuthorityAuditReportResponse {
  /**
   * @schema CreateCertificateAuthorityAuditReportResponse#AuditReportId
   */
  readonly auditReportId?: string;

  /**
   * @schema CreateCertificateAuthorityAuditReportResponse#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema CreatePermissionRequest
 */
export interface CreatePermissionRequest {
  /**
   * @schema CreatePermissionRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema CreatePermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema CreatePermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema CreatePermissionRequest#Actions
   */
  readonly actions: string[];

}

/**
 * @schema DeleteCertificateAuthorityRequest
 */
export interface DeleteCertificateAuthorityRequest {
  /**
   * @schema DeleteCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema DeleteCertificateAuthorityRequest#PermanentDeletionTimeInDays
   */
  readonly permanentDeletionTimeInDays?: number;

}

/**
 * @schema DeletePermissionRequest
 */
export interface DeletePermissionRequest {
  /**
   * @schema DeletePermissionRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema DeletePermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema DeletePermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

}

/**
 * @schema DeletePolicyRequest
 */
export interface DeletePolicyRequest {
  /**
   * @schema DeletePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DescribeCertificateAuthorityRequest
 */
export interface DescribeCertificateAuthorityRequest {
  /**
   * @schema DescribeCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

/**
 * @schema DescribeCertificateAuthorityResponse
 */
export interface DescribeCertificateAuthorityResponse {
  /**
   * @schema DescribeCertificateAuthorityResponse#CertificateAuthority
   */
  readonly certificateAuthority?: CertificateAuthority;

}

/**
 * @schema DescribeCertificateAuthorityAuditReportRequest
 */
export interface DescribeCertificateAuthorityAuditReportRequest {
  /**
   * @schema DescribeCertificateAuthorityAuditReportRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema DescribeCertificateAuthorityAuditReportRequest#AuditReportId
   */
  readonly auditReportId: string;

}

/**
 * @schema DescribeCertificateAuthorityAuditReportResponse
 */
export interface DescribeCertificateAuthorityAuditReportResponse {
  /**
   * @schema DescribeCertificateAuthorityAuditReportResponse#AuditReportStatus
   */
  readonly auditReportStatus?: string;

  /**
   * @schema DescribeCertificateAuthorityAuditReportResponse#S3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema DescribeCertificateAuthorityAuditReportResponse#S3Key
   */
  readonly s3Key?: string;

  /**
   * @schema DescribeCertificateAuthorityAuditReportResponse#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema GetCertificateRequest
 */
export interface GetCertificateRequest {
  /**
   * @schema GetCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

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
 * @schema GetCertificateAuthorityCertificateRequest
 */
export interface GetCertificateAuthorityCertificateRequest {
  /**
   * @schema GetCertificateAuthorityCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

/**
 * @schema GetCertificateAuthorityCertificateResponse
 */
export interface GetCertificateAuthorityCertificateResponse {
  /**
   * @schema GetCertificateAuthorityCertificateResponse#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema GetCertificateAuthorityCertificateResponse#CertificateChain
   */
  readonly certificateChain?: string;

}

/**
 * @schema GetCertificateAuthorityCsrRequest
 */
export interface GetCertificateAuthorityCsrRequest {
  /**
   * @schema GetCertificateAuthorityCsrRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

/**
 * @schema GetCertificateAuthorityCsrResponse
 */
export interface GetCertificateAuthorityCsrResponse {
  /**
   * @schema GetCertificateAuthorityCsrResponse#Csr
   */
  readonly csr?: string;

}

/**
 * @schema GetPolicyRequest
 */
export interface GetPolicyRequest {
  /**
   * @schema GetPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema GetPolicyResponse
 */
export interface GetPolicyResponse {
  /**
   * @schema GetPolicyResponse#Policy
   */
  readonly policy?: string;

}

/**
 * @schema ImportCertificateAuthorityCertificateRequest
 */
export interface ImportCertificateAuthorityCertificateRequest {
  /**
   * @schema ImportCertificateAuthorityCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema ImportCertificateAuthorityCertificateRequest#Certificate
   */
  readonly certificate: any;

  /**
   * @schema ImportCertificateAuthorityCertificateRequest#CertificateChain
   */
  readonly certificateChain?: any;

}

/**
 * @schema IssueCertificateRequest
 */
export interface IssueCertificateRequest {
  /**
   * @schema IssueCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema IssueCertificateRequest#Csr
   */
  readonly csr: any;

  /**
   * @schema IssueCertificateRequest#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

  /**
   * @schema IssueCertificateRequest#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema IssueCertificateRequest#Validity
   */
  readonly validity: Validity;

  /**
   * @schema IssueCertificateRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

/**
 * @schema IssueCertificateResponse
 */
export interface IssueCertificateResponse {
  /**
   * @schema IssueCertificateResponse#CertificateArn
   */
  readonly certificateArn?: string;

}

/**
 * @schema ListCertificateAuthoritiesRequest
 */
export interface ListCertificateAuthoritiesRequest {
  /**
   * @schema ListCertificateAuthoritiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCertificateAuthoritiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCertificateAuthoritiesRequest#ResourceOwner
   */
  readonly resourceOwner?: string;

}

/**
 * @schema ListCertificateAuthoritiesResponse
 */
export interface ListCertificateAuthoritiesResponse {
  /**
   * @schema ListCertificateAuthoritiesResponse#CertificateAuthorities
   */
  readonly certificateAuthorities?: CertificateAuthority[];

  /**
   * @schema ListCertificateAuthoritiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPermissionsRequest
 */
export interface ListPermissionsRequest {
  /**
   * @schema ListPermissionsRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema ListPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPermissionsResponse
 */
export interface ListPermissionsResponse {
  /**
   * @schema ListPermissionsResponse#Permissions
   */
  readonly permissions?: Permission[];

  /**
   * @schema ListPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsResponse
 */
export interface ListTagsResponse {
  /**
   * @schema ListTagsResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutPolicyRequest
 */
export interface PutPolicyRequest {
  /**
   * @schema PutPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema PutPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema RestoreCertificateAuthorityRequest
 */
export interface RestoreCertificateAuthorityRequest {
  /**
   * @schema RestoreCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

/**
 * @schema RevokeCertificateRequest
 */
export interface RevokeCertificateRequest {
  /**
   * @schema RevokeCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema RevokeCertificateRequest#CertificateSerial
   */
  readonly certificateSerial: string;

  /**
   * @schema RevokeCertificateRequest#RevocationReason
   */
  readonly revocationReason: string;

}

/**
 * @schema TagCertificateAuthorityRequest
 */
export interface TagCertificateAuthorityRequest {
  /**
   * @schema TagCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema TagCertificateAuthorityRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema UntagCertificateAuthorityRequest
 */
export interface UntagCertificateAuthorityRequest {
  /**
   * @schema UntagCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema UntagCertificateAuthorityRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema UpdateCertificateAuthorityRequest
 */
export interface UpdateCertificateAuthorityRequest {
  /**
   * @schema UpdateCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema UpdateCertificateAuthorityRequest#RevocationConfiguration
   */
  readonly revocationConfiguration?: RevocationConfiguration;

  /**
   * @schema UpdateCertificateAuthorityRequest#Status
   */
  readonly status?: string;

}

/**
 * @schema CertificateAuthorityConfiguration
 */
export interface CertificateAuthorityConfiguration {
  /**
   * @schema CertificateAuthorityConfiguration#KeyAlgorithm
   */
  readonly keyAlgorithm: string;

  /**
   * @schema CertificateAuthorityConfiguration#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

  /**
   * @schema CertificateAuthorityConfiguration#Subject
   */
  readonly subject: Asn1Subject;

}

/**
 * @schema RevocationConfiguration
 */
export interface RevocationConfiguration {
  /**
   * @schema RevocationConfiguration#CrlConfiguration
   */
  readonly crlConfiguration?: CrlConfiguration;

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
 * @schema CertificateAuthority
 */
export interface CertificateAuthority {
  /**
   * @schema CertificateAuthority#Arn
   */
  readonly arn?: string;

  /**
   * @schema CertificateAuthority#OwnerAccount
   */
  readonly ownerAccount?: string;

  /**
   * @schema CertificateAuthority#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema CertificateAuthority#LastStateChangeAt
   */
  readonly lastStateChangeAt?: string;

  /**
   * @schema CertificateAuthority#Type
   */
  readonly type?: string;

  /**
   * @schema CertificateAuthority#Serial
   */
  readonly serial?: string;

  /**
   * @schema CertificateAuthority#Status
   */
  readonly status?: string;

  /**
   * @schema CertificateAuthority#NotBefore
   */
  readonly notBefore?: string;

  /**
   * @schema CertificateAuthority#NotAfter
   */
  readonly notAfter?: string;

  /**
   * @schema CertificateAuthority#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema CertificateAuthority#CertificateAuthorityConfiguration
   */
  readonly certificateAuthorityConfiguration?: CertificateAuthorityConfiguration;

  /**
   * @schema CertificateAuthority#RevocationConfiguration
   */
  readonly revocationConfiguration?: RevocationConfiguration;

  /**
   * @schema CertificateAuthority#RestorableUntil
   */
  readonly restorableUntil?: string;

}

/**
 * @schema Validity
 */
export interface Validity {
  /**
   * @schema Validity#Value
   */
  readonly value: number;

  /**
   * @schema Validity#Type
   */
  readonly type: string;

}

/**
 * @schema Permission
 */
export interface Permission {
  /**
   * @schema Permission#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn?: string;

  /**
   * @schema Permission#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Permission#Principal
   */
  readonly principal?: string;

  /**
   * @schema Permission#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema Permission#Actions
   */
  readonly actions?: string[];

  /**
   * @schema Permission#Policy
   */
  readonly policy?: string;

}

/**
 * @schema Asn1Subject
 */
export interface Asn1Subject {
  /**
   * @schema Asn1Subject#Country
   */
  readonly country?: string;

  /**
   * @schema Asn1Subject#Organization
   */
  readonly organization?: string;

  /**
   * @schema Asn1Subject#OrganizationalUnit
   */
  readonly organizationalUnit?: string;

  /**
   * @schema Asn1Subject#DistinguishedNameQualifier
   */
  readonly distinguishedNameQualifier?: string;

  /**
   * @schema Asn1Subject#State
   */
  readonly state?: string;

  /**
   * @schema Asn1Subject#CommonName
   */
  readonly commonName?: string;

  /**
   * @schema Asn1Subject#SerialNumber
   */
  readonly serialNumber?: string;

  /**
   * @schema Asn1Subject#Locality
   */
  readonly locality?: string;

  /**
   * @schema Asn1Subject#Title
   */
  readonly title?: string;

  /**
   * @schema Asn1Subject#Surname
   */
  readonly surname?: string;

  /**
   * @schema Asn1Subject#GivenName
   */
  readonly givenName?: string;

  /**
   * @schema Asn1Subject#Initials
   */
  readonly initials?: string;

  /**
   * @schema Asn1Subject#Pseudonym
   */
  readonly pseudonym?: string;

  /**
   * @schema Asn1Subject#GenerationQualifier
   */
  readonly generationQualifier?: string;

}

/**
 * @schema CrlConfiguration
 */
export interface CrlConfiguration {
  /**
   * @schema CrlConfiguration#Enabled
   */
  readonly enabled: boolean;

  /**
   * @schema CrlConfiguration#ExpirationInDays
   */
  readonly expirationInDays?: number;

  /**
   * @schema CrlConfiguration#CustomCname
   */
  readonly customCname?: string;

  /**
   * @schema CrlConfiguration#S3BucketName
   */
  readonly s3BucketName?: string;

}
