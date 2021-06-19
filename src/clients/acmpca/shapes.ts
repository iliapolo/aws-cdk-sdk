/**
 * @schema AcmpcaCreateCertificateAuthorityRequest
 */
export interface AcmpcaCreateCertificateAuthorityRequest {
  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#CertificateAuthorityConfiguration
   */
  readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityConfiguration;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#RevocationConfiguration
   */
  readonly revocationConfiguration?: AcmpcaRevocationConfiguration;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#CertificateAuthorityType
   */
  readonly certificateAuthorityType: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityRequest#Tags
   */
  readonly tags?: AcmpcaTag[];

}

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
 * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest
 */
export interface AcmpcaCreateCertificateAuthorityAuditReportRequest {
  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema AcmpcaCreateCertificateAuthorityAuditReportRequest#AuditReportResponseFormat
   */
  readonly auditReportResponseFormat: string;

}

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
 * @schema AcmpcaCreatePermissionRequest
 */
export interface AcmpcaCreatePermissionRequest {
  /**
   * @schema AcmpcaCreatePermissionRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaCreatePermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema AcmpcaCreatePermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

  /**
   * @schema AcmpcaCreatePermissionRequest#Actions
   */
  readonly actions: string[];

}

/**
 * @schema AcmpcaDeleteCertificateAuthorityRequest
 */
export interface AcmpcaDeleteCertificateAuthorityRequest {
  /**
   * @schema AcmpcaDeleteCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaDeleteCertificateAuthorityRequest#PermanentDeletionTimeInDays
   */
  readonly permanentDeletionTimeInDays?: number;

}

/**
 * @schema AcmpcaDeletePermissionRequest
 */
export interface AcmpcaDeletePermissionRequest {
  /**
   * @schema AcmpcaDeletePermissionRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaDeletePermissionRequest#Principal
   */
  readonly principal: string;

  /**
   * @schema AcmpcaDeletePermissionRequest#SourceAccount
   */
  readonly sourceAccount?: string;

}

/**
 * @schema AcmpcaDeletePolicyRequest
 */
export interface AcmpcaDeletePolicyRequest {
  /**
   * @schema AcmpcaDeletePolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema AcmpcaDescribeCertificateAuthorityRequest
 */
export interface AcmpcaDescribeCertificateAuthorityRequest {
  /**
   * @schema AcmpcaDescribeCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

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
 * @schema AcmpcaDescribeCertificateAuthorityAuditReportRequest
 */
export interface AcmpcaDescribeCertificateAuthorityAuditReportRequest {
  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaDescribeCertificateAuthorityAuditReportRequest#AuditReportId
   */
  readonly auditReportId: string;

}

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
 * @schema AcmpcaGetCertificateRequest
 */
export interface AcmpcaGetCertificateRequest {
  /**
   * @schema AcmpcaGetCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaGetCertificateRequest#CertificateArn
   */
  readonly certificateArn: string;

}

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
 * @schema AcmpcaGetCertificateAuthorityCertificateRequest
 */
export interface AcmpcaGetCertificateAuthorityCertificateRequest {
  /**
   * @schema AcmpcaGetCertificateAuthorityCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

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
 * @schema AcmpcaGetCertificateAuthorityCsrRequest
 */
export interface AcmpcaGetCertificateAuthorityCsrRequest {
  /**
   * @schema AcmpcaGetCertificateAuthorityCsrRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

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
 * @schema AcmpcaGetPolicyRequest
 */
export interface AcmpcaGetPolicyRequest {
  /**
   * @schema AcmpcaGetPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema AcmpcaImportCertificateAuthorityCertificateRequest
 */
export interface AcmpcaImportCertificateAuthorityCertificateRequest {
  /**
   * @schema AcmpcaImportCertificateAuthorityCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaImportCertificateAuthorityCertificateRequest#Certificate
   */
  readonly certificate: any;

  /**
   * @schema AcmpcaImportCertificateAuthorityCertificateRequest#CertificateChain
   */
  readonly certificateChain?: any;

}

/**
 * @schema AcmpcaIssueCertificateRequest
 */
export interface AcmpcaIssueCertificateRequest {
  /**
   * @schema AcmpcaIssueCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaIssueCertificateRequest#Csr
   */
  readonly csr: any;

  /**
   * @schema AcmpcaIssueCertificateRequest#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

  /**
   * @schema AcmpcaIssueCertificateRequest#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema AcmpcaIssueCertificateRequest#Validity
   */
  readonly validity: AcmpcaValidity;

  /**
   * @schema AcmpcaIssueCertificateRequest#IdempotencyToken
   */
  readonly idempotencyToken?: string;

}

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
 * @schema AcmpcaListPermissionsRequest
 */
export interface AcmpcaListPermissionsRequest {
  /**
   * @schema AcmpcaListPermissionsRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

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
 * @schema AcmpcaListTagsRequest
 */
export interface AcmpcaListTagsRequest {
  /**
   * @schema AcmpcaListTagsRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

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
 * @schema AcmpcaPutPolicyRequest
 */
export interface AcmpcaPutPolicyRequest {
  /**
   * @schema AcmpcaPutPolicyRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AcmpcaPutPolicyRequest#Policy
   */
  readonly policy: string;

}

/**
 * @schema AcmpcaRestoreCertificateAuthorityRequest
 */
export interface AcmpcaRestoreCertificateAuthorityRequest {
  /**
   * @schema AcmpcaRestoreCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

}

/**
 * @schema AcmpcaRevokeCertificateRequest
 */
export interface AcmpcaRevokeCertificateRequest {
  /**
   * @schema AcmpcaRevokeCertificateRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaRevokeCertificateRequest#CertificateSerial
   */
  readonly certificateSerial: string;

  /**
   * @schema AcmpcaRevokeCertificateRequest#RevocationReason
   */
  readonly revocationReason: string;

}

/**
 * @schema AcmpcaTagCertificateAuthorityRequest
 */
export interface AcmpcaTagCertificateAuthorityRequest {
  /**
   * @schema AcmpcaTagCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaTagCertificateAuthorityRequest#Tags
   */
  readonly tags: AcmpcaTag[];

}

/**
 * @schema AcmpcaUntagCertificateAuthorityRequest
 */
export interface AcmpcaUntagCertificateAuthorityRequest {
  /**
   * @schema AcmpcaUntagCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

  /**
   * @schema AcmpcaUntagCertificateAuthorityRequest#Tags
   */
  readonly tags: AcmpcaTag[];

}

/**
 * @schema AcmpcaUpdateCertificateAuthorityRequest
 */
export interface AcmpcaUpdateCertificateAuthorityRequest {
  /**
   * @schema AcmpcaUpdateCertificateAuthorityRequest#CertificateAuthorityArn
   */
  readonly certificateAuthorityArn: string;

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
 * @schema AcmpcaCertificateAuthorityConfiguration
 */
export interface AcmpcaCertificateAuthorityConfiguration {
  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#KeyAlgorithm
   */
  readonly keyAlgorithm: string;

  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#SigningAlgorithm
   */
  readonly signingAlgorithm: string;

  /**
   * @schema AcmpcaCertificateAuthorityConfiguration#Subject
   */
  readonly subject: Acmpcaasn1Subject;

}

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
 * @schema AcmpcaTag
 */
export interface AcmpcaTag {
  /**
   * @schema AcmpcaTag#Key
   */
  readonly key: string;

  /**
   * @schema AcmpcaTag#Value
   */
  readonly value?: string;

}

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

}

/**
 * @schema AcmpcaValidity
 */
export interface AcmpcaValidity {
  /**
   * @schema AcmpcaValidity#Value
   */
  readonly value: number;

  /**
   * @schema AcmpcaValidity#Type
   */
  readonly type: string;

}

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
 * @schema AcmpcaCrlConfiguration
 */
export interface AcmpcaCrlConfiguration {
  /**
   * @schema AcmpcaCrlConfiguration#Enabled
   */
  readonly enabled: boolean;

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

}
