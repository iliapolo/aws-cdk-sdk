/**
 * @schema AssociateExternalConnectionRequest
 */
export interface AssociateExternalConnectionRequest {
  /**
   * @schema AssociateExternalConnectionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema AssociateExternalConnectionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema AssociateExternalConnectionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema AssociateExternalConnectionRequest#externalConnection
   */
  readonly externalConnection: string;

}

/**
 * @schema AssociateExternalConnectionResult
 */
export interface AssociateExternalConnectionResult {
  /**
   * @schema AssociateExternalConnectionResult#repository
   */
  readonly repository?: RepositoryDescription;

}

/**
 * @schema CopyPackageVersionsRequest
 */
export interface CopyPackageVersionsRequest {
  /**
   * @schema CopyPackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CopyPackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CopyPackageVersionsRequest#sourceRepository
   */
  readonly sourceRepository: string;

  /**
   * @schema CopyPackageVersionsRequest#destinationRepository
   */
  readonly destinationRepository: string;

  /**
   * @schema CopyPackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema CopyPackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema CopyPackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema CopyPackageVersionsRequest#versions
   */
  readonly versions?: string[];

  /**
   * @schema CopyPackageVersionsRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema CopyPackageVersionsRequest#allowOverwrite
   */
  readonly allowOverwrite?: boolean;

  /**
   * @schema CopyPackageVersionsRequest#includeFromUpstream
   */
  readonly includeFromUpstream?: boolean;

}

/**
 * @schema CopyPackageVersionsResult
 */
export interface CopyPackageVersionsResult {
  /**
   * @schema CopyPackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };

  /**
   * @schema CopyPackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: PackageVersionError };

}

/**
 * @schema CreateDomainRequest
 */
export interface CreateDomainRequest {
  /**
   * @schema CreateDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CreateDomainRequest#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema CreateDomainRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDomainResult
 */
export interface CreateDomainResult {
  /**
   * @schema CreateDomainResult#domain
   */
  readonly domain?: DomainDescription;

}

/**
 * @schema CreateRepositoryRequest
 */
export interface CreateRepositoryRequest {
  /**
   * @schema CreateRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema CreateRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema CreateRepositoryRequest#repository
   */
  readonly repository: string;

  /**
   * @schema CreateRepositoryRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateRepositoryRequest#upstreams
   */
  readonly upstreams?: UpstreamRepository[];

  /**
   * @schema CreateRepositoryRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateRepositoryResult
 */
export interface CreateRepositoryResult {
  /**
   * @schema CreateRepositoryResult#repository
   */
  readonly repository?: RepositoryDescription;

}

/**
 * @schema DeleteDomainRequest
 */
export interface DeleteDomainRequest {
  /**
   * @schema DeleteDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DeleteDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * @schema DeleteDomainResult
 */
export interface DeleteDomainResult {
  /**
   * @schema DeleteDomainResult#domain
   */
  readonly domain?: DomainDescription;

}

/**
 * @schema DeleteDomainPermissionsPolicyRequest
 */
export interface DeleteDomainPermissionsPolicyRequest {
  /**
   * @schema DeleteDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DeleteDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DeleteDomainPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

}

/**
 * @schema DeleteDomainPermissionsPolicyResult
 */
export interface DeleteDomainPermissionsPolicyResult {
  /**
   * @schema DeleteDomainPermissionsPolicyResult#policy
   */
  readonly policy?: ResourcePolicy;

}

/**
 * @schema DeletePackageVersionsRequest
 */
export interface DeletePackageVersionsRequest {
  /**
   * @schema DeletePackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DeletePackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DeletePackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema DeletePackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema DeletePackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema DeletePackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema DeletePackageVersionsRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema DeletePackageVersionsRequest#expectedStatus
   */
  readonly expectedStatus?: string;

}

/**
 * @schema DeletePackageVersionsResult
 */
export interface DeletePackageVersionsResult {
  /**
   * @schema DeletePackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };

  /**
   * @schema DeletePackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: PackageVersionError };

}

/**
 * @schema DeleteRepositoryRequest
 */
export interface DeleteRepositoryRequest {
  /**
   * @schema DeleteRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DeleteRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DeleteRepositoryRequest#repository
   */
  readonly repository: string;

}

/**
 * @schema DeleteRepositoryResult
 */
export interface DeleteRepositoryResult {
  /**
   * @schema DeleteRepositoryResult#repository
   */
  readonly repository?: RepositoryDescription;

}

/**
 * @schema DeleteRepositoryPermissionsPolicyRequest
 */
export interface DeleteRepositoryPermissionsPolicyRequest {
  /**
   * @schema DeleteRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DeleteRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DeleteRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

  /**
   * @schema DeleteRepositoryPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

}

/**
 * @schema DeleteRepositoryPermissionsPolicyResult
 */
export interface DeleteRepositoryPermissionsPolicyResult {
  /**
   * @schema DeleteRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: ResourcePolicy;

}

/**
 * @schema DescribeDomainRequest
 */
export interface DescribeDomainRequest {
  /**
   * @schema DescribeDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DescribeDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * @schema DescribeDomainResult
 */
export interface DescribeDomainResult {
  /**
   * @schema DescribeDomainResult#domain
   */
  readonly domain?: DomainDescription;

}

/**
 * @schema DescribePackageVersionRequest
 */
export interface DescribePackageVersionRequest {
  /**
   * @schema DescribePackageVersionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DescribePackageVersionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DescribePackageVersionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema DescribePackageVersionRequest#format
   */
  readonly format: string;

  /**
   * @schema DescribePackageVersionRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema DescribePackageVersionRequest#package
   */
  readonly package: string;

  /**
   * @schema DescribePackageVersionRequest#packageVersion
   */
  readonly packageVersion: string;

}

/**
 * @schema DescribePackageVersionResult
 */
export interface DescribePackageVersionResult {
  /**
   * @schema DescribePackageVersionResult#packageVersion
   */
  readonly packageVersion: PackageVersionDescription;

}

/**
 * @schema DescribeRepositoryRequest
 */
export interface DescribeRepositoryRequest {
  /**
   * @schema DescribeRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DescribeRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DescribeRepositoryRequest#repository
   */
  readonly repository: string;

}

/**
 * @schema DescribeRepositoryResult
 */
export interface DescribeRepositoryResult {
  /**
   * @schema DescribeRepositoryResult#repository
   */
  readonly repository?: RepositoryDescription;

}

/**
 * @schema DisassociateExternalConnectionRequest
 */
export interface DisassociateExternalConnectionRequest {
  /**
   * @schema DisassociateExternalConnectionRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DisassociateExternalConnectionRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DisassociateExternalConnectionRequest#repository
   */
  readonly repository: string;

  /**
   * @schema DisassociateExternalConnectionRequest#externalConnection
   */
  readonly externalConnection: string;

}

/**
 * @schema DisassociateExternalConnectionResult
 */
export interface DisassociateExternalConnectionResult {
  /**
   * @schema DisassociateExternalConnectionResult#repository
   */
  readonly repository?: RepositoryDescription;

}

/**
 * @schema DisposePackageVersionsRequest
 */
export interface DisposePackageVersionsRequest {
  /**
   * @schema DisposePackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema DisposePackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema DisposePackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema DisposePackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema DisposePackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema DisposePackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema DisposePackageVersionsRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema DisposePackageVersionsRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema DisposePackageVersionsRequest#expectedStatus
   */
  readonly expectedStatus?: string;

}

/**
 * @schema DisposePackageVersionsResult
 */
export interface DisposePackageVersionsResult {
  /**
   * @schema DisposePackageVersionsResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };

  /**
   * @schema DisposePackageVersionsResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: PackageVersionError };

}

/**
 * @schema GetAuthorizationTokenRequest
 */
export interface GetAuthorizationTokenRequest {
  /**
   * @schema GetAuthorizationTokenRequest#domain
   */
  readonly domain: string;

  /**
   * @schema GetAuthorizationTokenRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema GetAuthorizationTokenRequest#durationSeconds
   */
  readonly durationSeconds?: number;

}

/**
 * @schema GetAuthorizationTokenResult
 */
export interface GetAuthorizationTokenResult {
  /**
   * @schema GetAuthorizationTokenResult#authorizationToken
   */
  readonly authorizationToken?: string;

  /**
   * @schema GetAuthorizationTokenResult#expiration
   */
  readonly expiration?: string;

}

/**
 * @schema GetDomainPermissionsPolicyRequest
 */
export interface GetDomainPermissionsPolicyRequest {
  /**
   * @schema GetDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema GetDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

}

/**
 * @schema GetDomainPermissionsPolicyResult
 */
export interface GetDomainPermissionsPolicyResult {
  /**
   * @schema GetDomainPermissionsPolicyResult#policy
   */
  readonly policy?: ResourcePolicy;

}

/**
 * @schema GetPackageVersionAssetRequest
 */
export interface GetPackageVersionAssetRequest {
  /**
   * @schema GetPackageVersionAssetRequest#domain
   */
  readonly domain: string;

  /**
   * @schema GetPackageVersionAssetRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema GetPackageVersionAssetRequest#repository
   */
  readonly repository: string;

  /**
   * @schema GetPackageVersionAssetRequest#format
   */
  readonly format: string;

  /**
   * @schema GetPackageVersionAssetRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema GetPackageVersionAssetRequest#package
   */
  readonly package: string;

  /**
   * @schema GetPackageVersionAssetRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema GetPackageVersionAssetRequest#asset
   */
  readonly asset: string;

  /**
   * @schema GetPackageVersionAssetRequest#packageVersionRevision
   */
  readonly packageVersionRevision?: string;

}

/**
 * @schema GetPackageVersionAssetResult
 */
export interface GetPackageVersionAssetResult {
  /**
   * @schema GetPackageVersionAssetResult#asset
   */
  readonly asset?: any;

  /**
   * @schema GetPackageVersionAssetResult#assetName
   */
  readonly assetName?: string;

  /**
   * @schema GetPackageVersionAssetResult#packageVersion
   */
  readonly packageVersion?: string;

  /**
   * @schema GetPackageVersionAssetResult#packageVersionRevision
   */
  readonly packageVersionRevision?: string;

}

/**
 * @schema GetPackageVersionReadmeRequest
 */
export interface GetPackageVersionReadmeRequest {
  /**
   * @schema GetPackageVersionReadmeRequest#domain
   */
  readonly domain: string;

  /**
   * @schema GetPackageVersionReadmeRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema GetPackageVersionReadmeRequest#repository
   */
  readonly repository: string;

  /**
   * @schema GetPackageVersionReadmeRequest#format
   */
  readonly format: string;

  /**
   * @schema GetPackageVersionReadmeRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema GetPackageVersionReadmeRequest#package
   */
  readonly package: string;

  /**
   * @schema GetPackageVersionReadmeRequest#packageVersion
   */
  readonly packageVersion: string;

}

/**
 * @schema GetPackageVersionReadmeResult
 */
export interface GetPackageVersionReadmeResult {
  /**
   * @schema GetPackageVersionReadmeResult#format
   */
  readonly format?: string;

  /**
   * @schema GetPackageVersionReadmeResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema GetPackageVersionReadmeResult#package
   */
  readonly package?: string;

  /**
   * @schema GetPackageVersionReadmeResult#version
   */
  readonly version?: string;

  /**
   * @schema GetPackageVersionReadmeResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema GetPackageVersionReadmeResult#readme
   */
  readonly readme?: string;

}

/**
 * @schema GetRepositoryEndpointRequest
 */
export interface GetRepositoryEndpointRequest {
  /**
   * @schema GetRepositoryEndpointRequest#domain
   */
  readonly domain: string;

  /**
   * @schema GetRepositoryEndpointRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema GetRepositoryEndpointRequest#repository
   */
  readonly repository: string;

  /**
   * @schema GetRepositoryEndpointRequest#format
   */
  readonly format: string;

}

/**
 * @schema GetRepositoryEndpointResult
 */
export interface GetRepositoryEndpointResult {
  /**
   * @schema GetRepositoryEndpointResult#repositoryEndpoint
   */
  readonly repositoryEndpoint?: string;

}

/**
 * @schema GetRepositoryPermissionsPolicyRequest
 */
export interface GetRepositoryPermissionsPolicyRequest {
  /**
   * @schema GetRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema GetRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema GetRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

}

/**
 * @schema GetRepositoryPermissionsPolicyResult
 */
export interface GetRepositoryPermissionsPolicyResult {
  /**
   * @schema GetRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: ResourcePolicy;

}

/**
 * @schema ListDomainsRequest
 */
export interface ListDomainsRequest {
  /**
   * @schema ListDomainsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDomainsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainsResult
 */
export interface ListDomainsResult {
  /**
   * @schema ListDomainsResult#domains
   */
  readonly domains?: DomainSummary[];

  /**
   * @schema ListDomainsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackageVersionAssetsRequest
 */
export interface ListPackageVersionAssetsRequest {
  /**
   * @schema ListPackageVersionAssetsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema ListPackageVersionAssetsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema ListPackageVersionAssetsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema ListPackageVersionAssetsRequest#format
   */
  readonly format: string;

  /**
   * @schema ListPackageVersionAssetsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackageVersionAssetsRequest#package
   */
  readonly package: string;

  /**
   * @schema ListPackageVersionAssetsRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema ListPackageVersionAssetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPackageVersionAssetsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackageVersionAssetsResult
 */
export interface ListPackageVersionAssetsResult {
  /**
   * @schema ListPackageVersionAssetsResult#format
   */
  readonly format?: string;

  /**
   * @schema ListPackageVersionAssetsResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackageVersionAssetsResult#package
   */
  readonly package?: string;

  /**
   * @schema ListPackageVersionAssetsResult#version
   */
  readonly version?: string;

  /**
   * @schema ListPackageVersionAssetsResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema ListPackageVersionAssetsResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPackageVersionAssetsResult#assets
   */
  readonly assets?: AssetSummary[];

}

/**
 * @schema ListPackageVersionDependenciesRequest
 */
export interface ListPackageVersionDependenciesRequest {
  /**
   * @schema ListPackageVersionDependenciesRequest#domain
   */
  readonly domain: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#repository
   */
  readonly repository: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#format
   */
  readonly format: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#package
   */
  readonly package: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#packageVersion
   */
  readonly packageVersion: string;

  /**
   * @schema ListPackageVersionDependenciesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackageVersionDependenciesResult
 */
export interface ListPackageVersionDependenciesResult {
  /**
   * @schema ListPackageVersionDependenciesResult#format
   */
  readonly format?: string;

  /**
   * @schema ListPackageVersionDependenciesResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackageVersionDependenciesResult#package
   */
  readonly package?: string;

  /**
   * @schema ListPackageVersionDependenciesResult#version
   */
  readonly version?: string;

  /**
   * @schema ListPackageVersionDependenciesResult#versionRevision
   */
  readonly versionRevision?: string;

  /**
   * @schema ListPackageVersionDependenciesResult#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPackageVersionDependenciesResult#dependencies
   */
  readonly dependencies?: PackageDependency[];

}

/**
 * @schema ListPackageVersionsRequest
 */
export interface ListPackageVersionsRequest {
  /**
   * @schema ListPackageVersionsRequest#domain
   */
  readonly domain: string;

  /**
   * @schema ListPackageVersionsRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema ListPackageVersionsRequest#repository
   */
  readonly repository: string;

  /**
   * @schema ListPackageVersionsRequest#format
   */
  readonly format: string;

  /**
   * @schema ListPackageVersionsRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackageVersionsRequest#package
   */
  readonly package: string;

  /**
   * @schema ListPackageVersionsRequest#status
   */
  readonly status?: string;

  /**
   * @schema ListPackageVersionsRequest#sortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListPackageVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPackageVersionsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackageVersionsResult
 */
export interface ListPackageVersionsResult {
  /**
   * @schema ListPackageVersionsResult#defaultDisplayVersion
   */
  readonly defaultDisplayVersion?: string;

  /**
   * @schema ListPackageVersionsResult#format
   */
  readonly format?: string;

  /**
   * @schema ListPackageVersionsResult#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackageVersionsResult#package
   */
  readonly package?: string;

  /**
   * @schema ListPackageVersionsResult#versions
   */
  readonly versions?: PackageVersionSummary[];

  /**
   * @schema ListPackageVersionsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackagesRequest
 */
export interface ListPackagesRequest {
  /**
   * @schema ListPackagesRequest#domain
   */
  readonly domain: string;

  /**
   * @schema ListPackagesRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema ListPackagesRequest#repository
   */
  readonly repository: string;

  /**
   * @schema ListPackagesRequest#format
   */
  readonly format?: string;

  /**
   * @schema ListPackagesRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema ListPackagesRequest#packagePrefix
   */
  readonly packagePrefix?: string;

  /**
   * @schema ListPackagesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPackagesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPackagesResult
 */
export interface ListPackagesResult {
  /**
   * @schema ListPackagesResult#packages
   */
  readonly packages?: PackageSummary[];

  /**
   * @schema ListPackagesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoriesRequest
 */
export interface ListRepositoriesRequest {
  /**
   * @schema ListRepositoriesRequest#repositoryPrefix
   */
  readonly repositoryPrefix?: string;

  /**
   * @schema ListRepositoriesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRepositoriesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoriesResult
 */
export interface ListRepositoriesResult {
  /**
   * @schema ListRepositoriesResult#repositories
   */
  readonly repositories?: RepositorySummary[];

  /**
   * @schema ListRepositoriesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoriesInDomainRequest
 */
export interface ListRepositoriesInDomainRequest {
  /**
   * @schema ListRepositoriesInDomainRequest#domain
   */
  readonly domain: string;

  /**
   * @schema ListRepositoriesInDomainRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema ListRepositoriesInDomainRequest#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema ListRepositoriesInDomainRequest#repositoryPrefix
   */
  readonly repositoryPrefix?: string;

  /**
   * @schema ListRepositoriesInDomainRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRepositoriesInDomainRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRepositoriesInDomainResult
 */
export interface ListRepositoriesInDomainResult {
  /**
   * @schema ListRepositoriesInDomainResult#repositories
   */
  readonly repositories?: RepositorySummary[];

  /**
   * @schema ListRepositoriesInDomainResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResult
 */
export interface ListTagsForResourceResult {
  /**
   * @schema ListTagsForResourceResult#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutDomainPermissionsPolicyRequest
 */
export interface PutDomainPermissionsPolicyRequest {
  /**
   * @schema PutDomainPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema PutDomainPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema PutDomainPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

  /**
   * @schema PutDomainPermissionsPolicyRequest#policyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema PutDomainPermissionsPolicyResult
 */
export interface PutDomainPermissionsPolicyResult {
  /**
   * @schema PutDomainPermissionsPolicyResult#policy
   */
  readonly policy?: ResourcePolicy;

}

/**
 * @schema PutRepositoryPermissionsPolicyRequest
 */
export interface PutRepositoryPermissionsPolicyRequest {
  /**
   * @schema PutRepositoryPermissionsPolicyRequest#domain
   */
  readonly domain: string;

  /**
   * @schema PutRepositoryPermissionsPolicyRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema PutRepositoryPermissionsPolicyRequest#repository
   */
  readonly repository: string;

  /**
   * @schema PutRepositoryPermissionsPolicyRequest#policyRevision
   */
  readonly policyRevision?: string;

  /**
   * @schema PutRepositoryPermissionsPolicyRequest#policyDocument
   */
  readonly policyDocument: string;

}

/**
 * @schema PutRepositoryPermissionsPolicyResult
 */
export interface PutRepositoryPermissionsPolicyResult {
  /**
   * @schema PutRepositoryPermissionsPolicyResult#policy
   */
  readonly policy?: ResourcePolicy;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResult
 */
export interface TagResourceResult {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResult
 */
export interface UntagResourceResult {
}

/**
 * @schema UpdatePackageVersionsStatusRequest
 */
export interface UpdatePackageVersionsStatusRequest {
  /**
   * @schema UpdatePackageVersionsStatusRequest#domain
   */
  readonly domain: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#repository
   */
  readonly repository: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#format
   */
  readonly format: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#namespace
   */
  readonly namespace?: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#package
   */
  readonly package: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#versions
   */
  readonly versions: string[];

  /**
   * @schema UpdatePackageVersionsStatusRequest#versionRevisions
   */
  readonly versionRevisions?: { [key: string]: string };

  /**
   * @schema UpdatePackageVersionsStatusRequest#expectedStatus
   */
  readonly expectedStatus?: string;

  /**
   * @schema UpdatePackageVersionsStatusRequest#targetStatus
   */
  readonly targetStatus: string;

}

/**
 * @schema UpdatePackageVersionsStatusResult
 */
export interface UpdatePackageVersionsStatusResult {
  /**
   * @schema UpdatePackageVersionsStatusResult#successfulVersions
   */
  readonly successfulVersions?: { [key: string]: SuccessfulPackageVersionInfo };

  /**
   * @schema UpdatePackageVersionsStatusResult#failedVersions
   */
  readonly failedVersions?: { [key: string]: PackageVersionError };

}

/**
 * @schema UpdateRepositoryRequest
 */
export interface UpdateRepositoryRequest {
  /**
   * @schema UpdateRepositoryRequest#domain
   */
  readonly domain: string;

  /**
   * @schema UpdateRepositoryRequest#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema UpdateRepositoryRequest#repository
   */
  readonly repository: string;

  /**
   * @schema UpdateRepositoryRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateRepositoryRequest#upstreams
   */
  readonly upstreams?: UpstreamRepository[];

}

/**
 * @schema UpdateRepositoryResult
 */
export interface UpdateRepositoryResult {
  /**
   * @schema UpdateRepositoryResult#repository
   */
  readonly repository?: RepositoryDescription;

}

/**
 * @schema RepositoryDescription
 */
export interface RepositoryDescription {
  /**
   * @schema RepositoryDescription#name
   */
  readonly name?: string;

  /**
   * @schema RepositoryDescription#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema RepositoryDescription#domainName
   */
  readonly domainName?: string;

  /**
   * @schema RepositoryDescription#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema RepositoryDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema RepositoryDescription#description
   */
  readonly description?: string;

  /**
   * @schema RepositoryDescription#upstreams
   */
  readonly upstreams?: UpstreamRepositoryInfo[];

  /**
   * @schema RepositoryDescription#externalConnections
   */
  readonly externalConnections?: RepositoryExternalConnectionInfo[];

}

/**
 * @schema SuccessfulPackageVersionInfo
 */
export interface SuccessfulPackageVersionInfo {
  /**
   * @schema SuccessfulPackageVersionInfo#revision
   */
  readonly revision?: string;

  /**
   * @schema SuccessfulPackageVersionInfo#status
   */
  readonly status?: string;

}

/**
 * @schema PackageVersionError
 */
export interface PackageVersionError {
  /**
   * @schema PackageVersionError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema PackageVersionError#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value: string;

}

/**
 * @schema DomainDescription
 */
export interface DomainDescription {
  /**
   * @schema DomainDescription#name
   */
  readonly name?: string;

  /**
   * @schema DomainDescription#owner
   */
  readonly owner?: string;

  /**
   * @schema DomainDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema DomainDescription#status
   */
  readonly status?: string;

  /**
   * @schema DomainDescription#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema DomainDescription#encryptionKey
   */
  readonly encryptionKey?: string;

  /**
   * @schema DomainDescription#repositoryCount
   */
  readonly repositoryCount?: number;

  /**
   * @schema DomainDescription#assetSizeBytes
   */
  readonly assetSizeBytes?: number;

  /**
   * @schema DomainDescription#s3BucketArn
   */
  readonly s3BucketArn?: string;

}

/**
 * @schema UpstreamRepository
 */
export interface UpstreamRepository {
  /**
   * @schema UpstreamRepository#repositoryName
   */
  readonly repositoryName: string;

}

/**
 * @schema ResourcePolicy
 */
export interface ResourcePolicy {
  /**
   * @schema ResourcePolicy#resourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourcePolicy#revision
   */
  readonly revision?: string;

  /**
   * @schema ResourcePolicy#document
   */
  readonly document?: string;

}

/**
 * @schema PackageVersionDescription
 */
export interface PackageVersionDescription {
  /**
   * @schema PackageVersionDescription#format
   */
  readonly format?: string;

  /**
   * @schema PackageVersionDescription#namespace
   */
  readonly namespace?: string;

  /**
   * @schema PackageVersionDescription#packageName
   */
  readonly packageName?: string;

  /**
   * @schema PackageVersionDescription#displayName
   */
  readonly displayName?: string;

  /**
   * @schema PackageVersionDescription#version
   */
  readonly version?: string;

  /**
   * @schema PackageVersionDescription#summary
   */
  readonly summary?: string;

  /**
   * @schema PackageVersionDescription#homePage
   */
  readonly homePage?: string;

  /**
   * @schema PackageVersionDescription#sourceCodeRepository
   */
  readonly sourceCodeRepository?: string;

  /**
   * @schema PackageVersionDescription#publishedTime
   */
  readonly publishedTime?: string;

  /**
   * @schema PackageVersionDescription#licenses
   */
  readonly licenses?: LicenseInfo[];

  /**
   * @schema PackageVersionDescription#revision
   */
  readonly revision?: string;

  /**
   * @schema PackageVersionDescription#status
   */
  readonly status?: string;

}

/**
 * @schema DomainSummary
 */
export interface DomainSummary {
  /**
   * @schema DomainSummary#name
   */
  readonly name?: string;

  /**
   * @schema DomainSummary#owner
   */
  readonly owner?: string;

  /**
   * @schema DomainSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema DomainSummary#status
   */
  readonly status?: string;

  /**
   * @schema DomainSummary#createdTime
   */
  readonly createdTime?: string;

  /**
   * @schema DomainSummary#encryptionKey
   */
  readonly encryptionKey?: string;

}

/**
 * @schema AssetSummary
 */
export interface AssetSummary {
  /**
   * @schema AssetSummary#name
   */
  readonly name: string;

  /**
   * @schema AssetSummary#size
   */
  readonly size?: number;

  /**
   * @schema AssetSummary#hashes
   */
  readonly hashes?: { [key: string]: string };

}

/**
 * @schema PackageDependency
 */
export interface PackageDependency {
  /**
   * @schema PackageDependency#namespace
   */
  readonly namespace?: string;

  /**
   * @schema PackageDependency#package
   */
  readonly package?: string;

  /**
   * @schema PackageDependency#dependencyType
   */
  readonly dependencyType?: string;

  /**
   * @schema PackageDependency#versionRequirement
   */
  readonly versionRequirement?: string;

}

/**
 * @schema PackageVersionSummary
 */
export interface PackageVersionSummary {
  /**
   * @schema PackageVersionSummary#version
   */
  readonly version: string;

  /**
   * @schema PackageVersionSummary#revision
   */
  readonly revision?: string;

  /**
   * @schema PackageVersionSummary#status
   */
  readonly status: string;

}

/**
 * @schema PackageSummary
 */
export interface PackageSummary {
  /**
   * @schema PackageSummary#format
   */
  readonly format?: string;

  /**
   * @schema PackageSummary#namespace
   */
  readonly namespace?: string;

  /**
   * @schema PackageSummary#package
   */
  readonly package?: string;

}

/**
 * @schema RepositorySummary
 */
export interface RepositorySummary {
  /**
   * @schema RepositorySummary#name
   */
  readonly name?: string;

  /**
   * @schema RepositorySummary#administratorAccount
   */
  readonly administratorAccount?: string;

  /**
   * @schema RepositorySummary#domainName
   */
  readonly domainName?: string;

  /**
   * @schema RepositorySummary#domainOwner
   */
  readonly domainOwner?: string;

  /**
   * @schema RepositorySummary#arn
   */
  readonly arn?: string;

  /**
   * @schema RepositorySummary#description
   */
  readonly description?: string;

}

/**
 * @schema UpstreamRepositoryInfo
 */
export interface UpstreamRepositoryInfo {
  /**
   * @schema UpstreamRepositoryInfo#repositoryName
   */
  readonly repositoryName?: string;

}

/**
 * @schema RepositoryExternalConnectionInfo
 */
export interface RepositoryExternalConnectionInfo {
  /**
   * @schema RepositoryExternalConnectionInfo#externalConnectionName
   */
  readonly externalConnectionName?: string;

  /**
   * @schema RepositoryExternalConnectionInfo#packageFormat
   */
  readonly packageFormat?: string;

  /**
   * @schema RepositoryExternalConnectionInfo#status
   */
  readonly status?: string;

}

/**
 * @schema LicenseInfo
 */
export interface LicenseInfo {
  /**
   * @schema LicenseInfo#name
   */
  readonly name?: string;

  /**
   * @schema LicenseInfo#url
   */
  readonly url?: string;

}
