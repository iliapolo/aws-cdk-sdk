/**
 * @schema CodeArtifactAssociateExternalConnectionRequest
 */
export interface CodeArtifactAssociateExternalConnectionRequest {
  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactAssociateExternalConnectionRequest#externalConnection
   */
  readonly externalConnection: string;

}

/**
 * @schema CodeArtifactAssociateExternalConnectionResult
 */
export interface CodeArtifactAssociateExternalConnectionResult {
  /**
   * @schema CodeArtifactAssociateExternalConnectionResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * @schema CodeArtifactCopyPackageVersionsRequest
 */
export interface CodeArtifactCopyPackageVersionsRequest {
  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#sourceRepository
   */
  readonly sourceRepository: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#destinationRepository
   */
  readonly destinationRepository: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#versions
   */
  readonly versions?: string[];

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#allowOverwrite
   */
  readonly allowOverwrite?: boolean;

  /**
   * @schema CodeArtifactCopyPackageVersionsRequest#includeFromUpstream
   */
  readonly includeFromUpstream?: boolean;

}

/**
 * @schema CodeArtifactCopyPackageVersionsResult
 */
export interface CodeArtifactCopyPackageVersionsResult {
  /**
   * @schema CodeArtifactCopyPackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactCopyPackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * @schema CodeArtifactCreateDomainRequest
 */
export interface CodeArtifactCreateDomainRequest {
  /**
   * @schema CodeArtifactCreateDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactCreateDomainRequest#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeArtifactCreateDomainRequest#tags
   */
  readonly tags?: CodeArtifactTag[];

}

/**
 * @schema CodeArtifactCreateDomainResult
 */
export interface CodeArtifactCreateDomainResult {
  /**
   * @schema CodeArtifactCreateDomainResult#domain
   */
  readonly domain?: CodeArtifactDomainDescription;

}

/**
 * @schema CodeArtifactCreateRepositoryRequest
 */
export interface CodeArtifactCreateRepositoryRequest {
  /**
   * @schema CodeArtifactCreateRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#description
   */
  readonly description?: string;

  /**
   * @schema CodeArtifactCreateRepositoryRequest#upstreams
   */
  readonly upstreams?: CodeArtifactUpstreamRepository[];

  /**
   * @schema CodeArtifactCreateRepositoryRequest#tags
   */
  readonly tags?: CodeArtifactTag[];

}

/**
 * @schema CodeArtifactCreateRepositoryResult
 */
export interface CodeArtifactCreateRepositoryResult {
  /**
   * @schema CodeArtifactCreateRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * @schema CodeArtifactDeleteDomainRequest
 */
export interface CodeArtifactDeleteDomainRequest {
  /**
   * @schema CodeArtifactDeleteDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * @schema CodeArtifactDeleteDomainResult
 */
export interface CodeArtifactDeleteDomainResult {
  /**
   * @schema CodeArtifactDeleteDomainResult#domain
   */
  readonly domain?: CodeArtifactDomainDescription;

}

/**
 * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest
 */
export interface CodeArtifactDeleteDomainPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

}

/**
 * @schema CodeArtifactDeleteDomainPermissionsPolicyResult
 */
export interface CodeArtifactDeleteDomainPermissionsPolicyResult {
  /**
   * @schema CodeArtifactDeleteDomainPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * @schema CodeArtifactDeletePackageVersionsRequest
 */
export interface CodeArtifactDeletePackageVersionsRequest {
  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema CodeArtifactDeletePackageVersionsRequest#expectedStatus
   */
  readonly expectedStatus?: string;

}

/**
 * @schema CodeArtifactDeletePackageVersionsResult
 */
export interface CodeArtifactDeletePackageVersionsResult {
  /**
   * @schema CodeArtifactDeletePackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactDeletePackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * @schema CodeArtifactDeleteRepositoryRequest
 */
export interface CodeArtifactDeleteRepositoryRequest {
  /**
   * @schema CodeArtifactDeleteRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeleteRepositoryRequest#repository
   */
  readonly repository: string;

}

/**
 * @schema CodeArtifactDeleteRepositoryResult
 */
export interface CodeArtifactDeleteRepositoryResult {
  /**
   * @schema CodeArtifactDeleteRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest
 */
export interface CodeArtifactDeleteRepositoryPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

}

/**
 * @schema CodeArtifactDeleteRepositoryPermissionsPolicyResult
 */
export interface CodeArtifactDeleteRepositoryPermissionsPolicyResult {
  /**
   * @schema CodeArtifactDeleteRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * @schema CodeArtifactDescribeDomainRequest
 */
export interface CodeArtifactDescribeDomainRequest {
  /**
   * @schema CodeArtifactDescribeDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDescribeDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * @schema CodeArtifactDescribeDomainResult
 */
export interface CodeArtifactDescribeDomainResult {
  /**
   * @schema CodeArtifactDescribeDomainResult#domain
   */
  readonly domain?: CodeArtifactDomainDescription;

}

/**
 * @schema CodeArtifactDescribePackageVersionRequest
 */
export interface CodeArtifactDescribePackageVersionRequest {
  /**
   * @schema CodeArtifactDescribePackageVersionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactDescribePackageVersionRequest#packageVersion
   */
  readonly packageVersion: string;

}

/**
 * @schema CodeArtifactDescribePackageVersionResult
 */
export interface CodeArtifactDescribePackageVersionResult {
  /**
   * @schema CodeArtifactDescribePackageVersionResult#packageVersion
   */
  readonly packageVersion: CodeArtifactPackageVersionDescription;

}

/**
 * @schema CodeArtifactDescribeRepositoryRequest
 */
export interface CodeArtifactDescribeRepositoryRequest {
  /**
   * @schema CodeArtifactDescribeRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDescribeRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDescribeRepositoryRequest#repository
   */
  readonly repository: string;

}

/**
 * @schema CodeArtifactDescribeRepositoryResult
 */
export interface CodeArtifactDescribeRepositoryResult {
  /**
   * @schema CodeArtifactDescribeRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * @schema CodeArtifactDisassociateExternalConnectionRequest
 */
export interface CodeArtifactDisassociateExternalConnectionRequest {
  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDisassociateExternalConnectionRequest#externalConnection
   */
  readonly externalConnection: string;

}

/**
 * @schema CodeArtifactDisassociateExternalConnectionResult
 */
export interface CodeArtifactDisassociateExternalConnectionResult {
  /**
   * @schema CodeArtifactDisassociateExternalConnectionResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * @schema CodeArtifactDisposePackageVersionsRequest
 */
export interface CodeArtifactDisposePackageVersionsRequest {
  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CodeArtifactDisposePackageVersionsRequest#expectedStatus
   */
  readonly expectedStatus?: string;

}

/**
 * @schema CodeArtifactDisposePackageVersionsResult
 */
export interface CodeArtifactDisposePackageVersionsResult {
  /**
   * @schema CodeArtifactDisposePackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactDisposePackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * @schema CodeArtifactGetAuthorizationTokenRequest
 */
export interface CodeArtifactGetAuthorizationTokenRequest {
  /**
   * @schema CodeArtifactGetAuthorizationTokenRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetAuthorizationTokenRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetAuthorizationTokenRequest#durationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * @schema CodeArtifactGetAuthorizationTokenResult
 */
export interface CodeArtifactGetAuthorizationTokenResult {
  /**
   * @schema CodeArtifactGetAuthorizationTokenResult#authorizationToken
   */
  readonly authorizationToken?: string;

  /**
   * @schema CodeArtifactGetAuthorizationTokenResult#expiration
   */
  readonly expiration?: string;

}

/**
 * @schema CodeArtifactGetDomainPermissionsPolicyRequest
 */
export interface CodeArtifactGetDomainPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactGetDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * @schema CodeArtifactGetDomainPermissionsPolicyResult
 */
export interface CodeArtifactGetDomainPermissionsPolicyResult {
  /**
   * @schema CodeArtifactGetDomainPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * @schema CodeArtifactGetPackageVersionAssetRequest
 */
export interface CodeArtifactGetPackageVersionAssetRequest {
  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#asset
   */
  readonly asset: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetRequest#packageVersionRevision
   */
  readonly packageVersionRevision?: string;

}

/**
 * @schema CodeArtifactGetPackageVersionAssetResult
 */
export interface CodeArtifactGetPackageVersionAssetResult {
  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#asset
   */
  readonly asset?: any;

  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#assetName
   */
  readonly assetName?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#packageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema CodeArtifactGetPackageVersionAssetResult#packageVersionRevision
   */
  readonly packageVersionRevision?: string;

}

/**
 * @schema CodeArtifactGetPackageVersionReadmeRequest
 */
export interface CodeArtifactGetPackageVersionReadmeRequest {
  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeRequest#packageVersion
   */
  readonly packageVersion: string;

}

/**
 * @schema CodeArtifactGetPackageVersionReadmeResult
 */
export interface CodeArtifactGetPackageVersionReadmeResult {
  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema CodeArtifactGetPackageVersionReadmeResult#readme
   */
  readonly readme?: string;

}

/**
 * @schema CodeArtifactGetRepositoryEndpointRequest
 */
export interface CodeArtifactGetRepositoryEndpointRequest {
  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactGetRepositoryEndpointRequest#format
   */
  readonly format: string;

}

/**
 * @schema CodeArtifactGetRepositoryEndpointResult
 */
export interface CodeArtifactGetRepositoryEndpointResult {
  /**
   * @schema CodeArtifactGetRepositoryEndpointResult#repositoryEndpoint
   */
  readonly repositoryEndpoint?: string;

}

/**
 * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest
 */
export interface CodeArtifactGetRepositoryPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

}

/**
 * @schema CodeArtifactGetRepositoryPermissionsPolicyResult
 */
export interface CodeArtifactGetRepositoryPermissionsPolicyResult {
  /**
   * @schema CodeArtifactGetRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * @schema CodeArtifactListDomainsRequest
 */
export interface CodeArtifactListDomainsRequest {
  /**
   * @schema CodeArtifactListDomainsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListDomainsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListDomainsResult
 */
export interface CodeArtifactListDomainsResult {
  /**
   * @schema CodeArtifactListDomainsResult#domains
   */
  readonly domains?: CodeArtifactDomainSummary[];

  /**
   * @schema CodeArtifactListDomainsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListPackageVersionAssetsRequest
 */
export interface CodeArtifactListPackageVersionAssetsRequest {
  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListPackageVersionAssetsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListPackageVersionAssetsResult
 */
export interface CodeArtifactListPackageVersionAssetsResult {
  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeArtifactListPackageVersionAssetsResult#assets
   */
  readonly assets?: CodeArtifactAssetSummary[];

}

/**
 * @schema CodeArtifactListPackageVersionDependenciesRequest
 */
export interface CodeArtifactListPackageVersionDependenciesRequest {
  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListPackageVersionDependenciesResult
 */
export interface CodeArtifactListPackageVersionDependenciesResult {
  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeArtifactListPackageVersionDependenciesResult#dependencies
   */
  readonly dependencies?: CodeArtifactPackageDependency[];

}

/**
 * @schema CodeArtifactListPackageVersionsRequest
 */
export interface CodeArtifactListPackageVersionsRequest {
  /**
   * @schema CodeArtifactListPackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListPackageVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListPackageVersionsResult
 */
export interface CodeArtifactListPackageVersionsResult {
  /**
   * @schema CodeArtifactListPackageVersionsResult#defaultDisplayVersion
   */
  readonly defaultDisplayVersion?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactListPackageVersionsResult#versions
   */
  readonly versions?: CodeArtifactPackageVersionSummary[];

  /**
   * @schema CodeArtifactListPackageVersionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListPackagesRequest
 */
export interface CodeArtifactListPackagesRequest {
  /**
   * @schema CodeArtifactListPackagesRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListPackagesRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactListPackagesRequest#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#packagePrefix
   */
  readonly packagePrefix?: string;

  /**
   * @schema CodeArtifactListPackagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListPackagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListPackagesResult
 */
export interface CodeArtifactListPackagesResult {
  /**
   * @schema CodeArtifactListPackagesResult#packages
   */
  readonly packages?: CodeArtifactPackageSummary[];

  /**
   * @schema CodeArtifactListPackagesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListRepositoriesRequest
 */
export interface CodeArtifactListRepositoriesRequest {
  /**
   * @schema CodeArtifactListRepositoriesRequest#repositoryPrefix
   */
  readonly repositoryPrefix?: string;

  /**
   * @schema CodeArtifactListRepositoriesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListRepositoriesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListRepositoriesResult
 */
export interface CodeArtifactListRepositoriesResult {
  /**
   * @schema CodeArtifactListRepositoriesResult#repositories
   */
  readonly repositories?: CodeArtifactRepositorySummary[];

  /**
   * @schema CodeArtifactListRepositoriesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListRepositoriesInDomainRequest
 */
export interface CodeArtifactListRepositoriesInDomainRequest {
  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#repositoryPrefix
   */
  readonly repositoryPrefix?: string;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CodeArtifactListRepositoriesInDomainRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListRepositoriesInDomainResult
 */
export interface CodeArtifactListRepositoriesInDomainResult {
  /**
   * @schema CodeArtifactListRepositoriesInDomainResult#repositories
   */
  readonly repositories?: CodeArtifactRepositorySummary[];

  /**
   * @schema CodeArtifactListRepositoriesInDomainResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CodeArtifactListTagsForResourceRequest
 */
export interface CodeArtifactListTagsForResourceRequest {
  /**
   * @schema CodeArtifactListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema CodeArtifactListTagsForResourceResult
 */
export interface CodeArtifactListTagsForResourceResult {
  /**
   * @schema CodeArtifactListTagsForResourceResult#tags
   */
  readonly tags?: CodeArtifactTag[];

}

/**
 * @schema CodeArtifactPutDomainPermissionsPolicyRequest
 */
export interface CodeArtifactPutDomainPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyRequest#policyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema CodeArtifactPutDomainPermissionsPolicyResult
 */
export interface CodeArtifactPutDomainPermissionsPolicyResult {
  /**
   * @schema CodeArtifactPutDomainPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest
 */
export interface CodeArtifactPutRepositoryPermissionsPolicyRequest {
  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyRequest#policyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema CodeArtifactPutRepositoryPermissionsPolicyResult
 */
export interface CodeArtifactPutRepositoryPermissionsPolicyResult {
  /**
   * @schema CodeArtifactPutRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: CodeArtifactResourcePolicy;

}

/**
 * @schema CodeArtifactTagResourceRequest
 */
export interface CodeArtifactTagResourceRequest {
  /**
   * @schema CodeArtifactTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeArtifactTagResourceRequest#tags
   */
  readonly tags: CodeArtifactTag[];

}

/**
 * @schema CodeArtifactTagResourceResult
 */
export interface CodeArtifactTagResourceResult {
}

/**
 * @schema CodeArtifactUntagResourceRequest
 */
export interface CodeArtifactUntagResourceRequest {
  /**
   * @schema CodeArtifactUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CodeArtifactUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CodeArtifactUntagResourceResult
 */
export interface CodeArtifactUntagResourceResult {
}

/**
 * @schema CodeArtifactUpdatePackageVersionsStatusRequest
 */
export interface CodeArtifactUpdatePackageVersionsStatusRequest {
  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#format
   */
  readonly format: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#package
   */
  readonly package: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#expectedStatus
   */
  readonly expectedStatus?: string;

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusRequest#targetStatus
   */
  readonly targetStatus: string;

}

/**
 * @schema CodeArtifactUpdatePackageVersionsStatusResult
 */
export interface CodeArtifactUpdatePackageVersionsStatusResult {
  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: CodeArtifactSuccessfulPackageVersionInfo };

  /**
   * @schema CodeArtifactUpdatePackageVersionsStatusResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: CodeArtifactPackageVersionError };

}

/**
 * @schema CodeArtifactUpdateRepositoryRequest
 */
export interface CodeArtifactUpdateRepositoryRequest {
  /**
   * @schema CodeArtifactUpdateRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#description
   */
  readonly description?: string;

  /**
   * @schema CodeArtifactUpdateRepositoryRequest#upstreams
   */
  readonly upstreams?: CodeArtifactUpstreamRepository[];

}

/**
 * @schema CodeArtifactUpdateRepositoryResult
 */
export interface CodeArtifactUpdateRepositoryResult {
  /**
   * @schema CodeArtifactUpdateRepositoryResult#repository
   */
  readonly repository?: CodeArtifactRepositoryDescription;

}

/**
 * @schema CodeArtifactRepositoryDescription
 */
export interface CodeArtifactRepositoryDescription {
  /**
   * @schema CodeArtifactRepositoryDescription#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#domainName
   */
  readonly domainName?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#description
   */
  readonly description?: string;

  /**
   * @schema CodeArtifactRepositoryDescription#upstreams
   */
  readonly upstreams?: CodeArtifactUpstreamRepositoryInfo[];

  /**
   * @schema CodeArtifactRepositoryDescription#externalConnections
   */
  readonly externalConnections?: CodeArtifactRepositoryExternalConnectionInfo[];

}

/**
 * @schema CodeArtifactSuccessfulPackageVersionInfo
 */
export interface CodeArtifactSuccessfulPackageVersionInfo {
  /**
   * @schema CodeArtifactSuccessfulPackageVersionInfo#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactSuccessfulPackageVersionInfo#status
   */
  readonly status?: string;

}

/**
 * @schema CodeArtifactPackageVersionError
 */
export interface CodeArtifactPackageVersionError {
  /**
   * @schema CodeArtifactPackageVersionError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CodeArtifactPackageVersionError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema CodeArtifactTag
 */
export interface CodeArtifactTag {
  /**
   * @schema CodeArtifactTag#key
   */
  readonly key: string;

  /**
   * @schema CodeArtifactTag#value
   */
  readonly value: string;

}

/**
 * @schema CodeArtifactDomainDescription
 */
export interface CodeArtifactDomainDescription {
  /**
   * @schema CodeArtifactDomainDescription#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactDomainDescription#owner
   */
  readonly owner?: string;

  /**
   * @schema CodeArtifactDomainDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactDomainDescription#status
   */
  readonly status?: string;

  /**
   * @schema CodeArtifactDomainDescription#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema CodeArtifactDomainDescription#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CodeArtifactDomainDescription#repositoryCount
   */
  readonly repositoryCount?: number;

  /**
   * @schema CodeArtifactDomainDescription#assetSizeBytes
   */
  readonly assetSizeBytes?: number;

  /**
   * @schema CodeArtifactDomainDescription#s3BucketArn
   */
  readonly s3BucketArn?: string;

}

/**
 * @schema CodeArtifactUpstreamRepository
 */
export interface CodeArtifactUpstreamRepository {
  /**
   * @schema CodeArtifactUpstreamRepository#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema CodeArtifactResourcePolicy
 */
export interface CodeArtifactResourcePolicy {
  /**
   * @schema CodeArtifactResourcePolicy#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CodeArtifactResourcePolicy#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactResourcePolicy#document
   */
  readonly document?: string;

}

/**
 * @schema CodeArtifactPackageVersionDescription
 */
export interface CodeArtifactPackageVersionDescription {
  /**
   * @schema CodeArtifactPackageVersionDescription#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#packageName
   */
  readonly packageName?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#version
   */
  readonly version?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#summary
   */
  readonly summary?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#homePage
   */
  readonly homePage?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#sourceCodeRepository
   */
  readonly sourceCodeRepository?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#publishedTime
   */
  readonly publishedTime?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#licenses
   */
  readonly licenses?: CodeArtifactLicenseInfo[];

  /**
   * @schema CodeArtifactPackageVersionDescription#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactPackageVersionDescription#status
   */
  readonly status?: string;

}

/**
 * @schema CodeArtifactDomainSummary
 */
export interface CodeArtifactDomainSummary {
  /**
   * @schema CodeArtifactDomainSummary#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactDomainSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema CodeArtifactDomainSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactDomainSummary#status
   */
  readonly status?: string;

  /**
   * @schema CodeArtifactDomainSummary#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema CodeArtifactDomainSummary#encryptionKey
   */
  readonly encryptionKey?: string;

}

/**
 * @schema CodeArtifactAssetSummary
 */
export interface CodeArtifactAssetSummary {
  /**
   * @schema CodeArtifactAssetSummary#name
   */
  readonly name: string;

  /**
   * @schema CodeArtifactAssetSummary#size
   */
  readonly size?: number;

  /**
   * @schema CodeArtifactAssetSummary#hashes
   */
  readonly hashes?: { [key: string]: string };

}

/**
 * @schema CodeArtifactPackageDependency
 */
export interface CodeArtifactPackageDependency {
  /**
   * @schema CodeArtifactPackageDependency#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactPackageDependency#package
   */
  readonly package?: string;

  /**
   * @schema CodeArtifactPackageDependency#dependencyType
   */
  readonly dependencyType?: string;

  /**
   * @schema CodeArtifactPackageDependency#versionRequirement
   */
  readonly versionRequirement?: string;

}

/**
 * @schema CodeArtifactPackageVersionSummary
 */
export interface CodeArtifactPackageVersionSummary {
  /**
   * @schema CodeArtifactPackageVersionSummary#version
   */
  readonly version: string;

  /**
   * @schema CodeArtifactPackageVersionSummary#revision
   */
  readonly revision?: string;

  /**
   * @schema CodeArtifactPackageVersionSummary#status
   */
  readonly status: string;

}

/**
 * @schema CodeArtifactPackageSummary
 */
export interface CodeArtifactPackageSummary {
  /**
   * @schema CodeArtifactPackageSummary#format
   */
  readonly format?: string;

  /**
   * @schema CodeArtifactPackageSummary#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CodeArtifactPackageSummary#package
   */
  readonly package?: string;

}

/**
 * @schema CodeArtifactRepositorySummary
 */
export interface CodeArtifactRepositorySummary {
  /**
   * @schema CodeArtifactRepositorySummary#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactRepositorySummary#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema CodeArtifactRepositorySummary#domainName
   */
  readonly domainName?: string;

  /**
   * @schema CodeArtifactRepositorySummary#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CodeArtifactRepositorySummary#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeArtifactRepositorySummary#description
   */
  readonly description?: string;

}

/**
 * @schema CodeArtifactUpstreamRepositoryInfo
 */
export interface CodeArtifactUpstreamRepositoryInfo {
  /**
   * @schema CodeArtifactUpstreamRepositoryInfo#repositoryName
   */
  readonly repositoryName?: string;

}

/**
 * @schema CodeArtifactRepositoryExternalConnectionInfo
 */
export interface CodeArtifactRepositoryExternalConnectionInfo {
  /**
   * @schema CodeArtifactRepositoryExternalConnectionInfo#externalConnectionName
   */
  readonly externalConnectionName?: string;

  /**
   * @schema CodeArtifactRepositoryExternalConnectionInfo#packageFormat
   */
  readonly packageFormat?: string;

  /**
   * @schema CodeArtifactRepositoryExternalConnectionInfo#status
   */
  readonly status?: string;

}

/**
 * @schema CodeArtifactLicenseInfo
 */
export interface CodeArtifactLicenseInfo {
  /**
   * @schema CodeArtifactLicenseInfo#name
   */
  readonly name?: string;

  /**
   * @schema CodeArtifactLicenseInfo#url
   */
  readonly url?: string;

}
