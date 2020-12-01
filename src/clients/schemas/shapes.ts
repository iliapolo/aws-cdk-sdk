/**
 * @schema CreateDiscovererRequest
 */
export interface CreateDiscovererRequest {
  /**
   * @schema CreateDiscovererRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDiscovererRequest#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema CreateDiscovererRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDiscovererResponse
 */
export interface CreateDiscovererResponse {
  /**
   * @schema CreateDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema CreateDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema CreateDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema CreateDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema CreateDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRegistryRequest
 */
export interface CreateRegistryRequest {
  /**
   * @schema CreateRegistryRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRegistryRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema CreateRegistryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRegistryResponse
 */
export interface CreateRegistryResponse {
  /**
   * @schema CreateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema CreateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema CreateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateSchemaRequest
 */
export interface CreateSchemaRequest {
  /**
   * @schema CreateSchemaRequest#Content
   */
  readonly content: string;

  /**
   * @schema CreateSchemaRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema CreateSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema CreateSchemaRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateSchemaRequest#Type
   */
  readonly type: string;

}

/**
 * @schema CreateSchemaResponse
 */
export interface CreateSchemaResponse {
  /**
   * @schema CreateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema CreateSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema CreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CreateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema CreateSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema CreateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema CreateSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * @schema DeleteDiscovererRequest
 */
export interface DeleteDiscovererRequest {
  /**
   * @schema DeleteDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema DeleteRegistryRequest
 */
export interface DeleteRegistryRequest {
  /**
   * @schema DeleteRegistryRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema DeleteResourcePolicyRequest
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @schema DeleteResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema DeleteSchemaRequest
 */
export interface DeleteSchemaRequest {
  /**
   * @schema DeleteSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema DeleteSchemaRequest#SchemaName
   */
  readonly schemaName: string;

}

/**
 * @schema DeleteSchemaVersionRequest
 */
export interface DeleteSchemaVersionRequest {
  /**
   * @schema DeleteSchemaVersionRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema DeleteSchemaVersionRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema DeleteSchemaVersionRequest#SchemaVersion
   */
  readonly schemaVersion: string;

}

/**
 * @schema DescribeCodeBindingRequest
 */
export interface DescribeCodeBindingRequest {
  /**
   * @schema DescribeCodeBindingRequest#Language
   */
  readonly language: string;

  /**
   * @schema DescribeCodeBindingRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema DescribeCodeBindingRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema DescribeCodeBindingRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema DescribeCodeBindingResponse
 */
export interface DescribeCodeBindingResponse {
  /**
   * @schema DescribeCodeBindingResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema DescribeCodeBindingResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema DescribeCodeBindingResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema DescribeCodeBindingResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DescribeDiscovererRequest
 */
export interface DescribeDiscovererRequest {
  /**
   * @schema DescribeDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema DescribeDiscovererResponse
 */
export interface DescribeDiscovererResponse {
  /**
   * @schema DescribeDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema DescribeDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema DescribeDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema DescribeDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema DescribeDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeRegistryRequest
 */
export interface DescribeRegistryRequest {
  /**
   * @schema DescribeRegistryRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema DescribeRegistryResponse
 */
export interface DescribeRegistryResponse {
  /**
   * @schema DescribeRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema DescribeRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema DescribeRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DescribeSchemaRequest
 */
export interface DescribeSchemaRequest {
  /**
   * @schema DescribeSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema DescribeSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema DescribeSchemaRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema DescribeSchemaResponse
 */
export interface DescribeSchemaResponse {
  /**
   * @schema DescribeSchemaResponse#Content
   */
  readonly content?: string;

  /**
   * @schema DescribeSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema DescribeSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema DescribeSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema DescribeSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema DescribeSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * @schema ExportSchemaRequest
 */
export interface ExportSchemaRequest {
  /**
   * @schema ExportSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema ExportSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema ExportSchemaRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema ExportSchemaRequest#Type
   */
  readonly type: string;

}

/**
 * @schema ExportSchemaResponse
 */
export interface ExportSchemaResponse {
  /**
   * @schema ExportSchemaResponse#Content
   */
  readonly content?: string;

  /**
   * @schema ExportSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema ExportSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema ExportSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema ExportSchemaResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema GetCodeBindingSourceRequest
 */
export interface GetCodeBindingSourceRequest {
  /**
   * @schema GetCodeBindingSourceRequest#Language
   */
  readonly language: string;

  /**
   * @schema GetCodeBindingSourceRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema GetCodeBindingSourceRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema GetCodeBindingSourceRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema GetCodeBindingSourceResponse
 */
export interface GetCodeBindingSourceResponse {
  /**
   * @schema GetCodeBindingSourceResponse#Body
   */
  readonly body?: any;

}

/**
 * @schema GetDiscoveredSchemaRequest
 */
export interface GetDiscoveredSchemaRequest {
  /**
   * @schema GetDiscoveredSchemaRequest#Events
   */
  readonly events: string[];

  /**
   * @schema GetDiscoveredSchemaRequest#Type
   */
  readonly type: string;

}

/**
 * @schema GetDiscoveredSchemaResponse
 */
export interface GetDiscoveredSchemaResponse {
  /**
   * @schema GetDiscoveredSchemaResponse#Content
   */
  readonly content?: string;

}

/**
 * @schema GetResourcePolicyRequest
 */
export interface GetResourcePolicyRequest {
  /**
   * @schema GetResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema GetResourcePolicyResponse
 */
export interface GetResourcePolicyResponse {
  /**
   * @schema GetResourcePolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema GetResourcePolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema ListDiscoverersRequest
 */
export interface ListDiscoverersRequest {
  /**
   * @schema ListDiscoverersRequest#DiscovererIdPrefix
   */
  readonly discovererIdPrefix?: string;

  /**
   * @schema ListDiscoverersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListDiscoverersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDiscoverersRequest#SourceArnPrefix
   */
  readonly sourceArnPrefix?: string;

}

/**
 * @schema ListDiscoverersResponse
 */
export interface ListDiscoverersResponse {
  /**
   * @schema ListDiscoverersResponse#Discoverers
   */
  readonly discoverers?: DiscovererSummary[];

  /**
   * @schema ListDiscoverersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRegistriesRequest
 */
export interface ListRegistriesRequest {
  /**
   * @schema ListRegistriesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListRegistriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRegistriesRequest#RegistryNamePrefix
   */
  readonly registryNamePrefix?: string;

  /**
   * @schema ListRegistriesRequest#Scope
   */
  readonly scope?: string;

}

/**
 * @schema ListRegistriesResponse
 */
export interface ListRegistriesResponse {
  /**
   * @schema ListRegistriesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRegistriesResponse#Registries
   */
  readonly registries?: RegistrySummary[];

}

/**
 * @schema ListSchemaVersionsRequest
 */
export interface ListSchemaVersionsRequest {
  /**
   * @schema ListSchemaVersionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListSchemaVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemaVersionsRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema ListSchemaVersionsRequest#SchemaName
   */
  readonly schemaName: string;

}

/**
 * @schema ListSchemaVersionsResponse
 */
export interface ListSchemaVersionsResponse {
  /**
   * @schema ListSchemaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemaVersionsResponse#SchemaVersions
   */
  readonly schemaVersions?: SchemaVersionSummary[];

}

/**
 * @schema ListSchemasRequest
 */
export interface ListSchemasRequest {
  /**
   * @schema ListSchemasRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema ListSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemasRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema ListSchemasRequest#SchemaNamePrefix
   */
  readonly schemaNamePrefix?: string;

}

/**
 * @schema ListSchemasResponse
 */
export interface ListSchemasResponse {
  /**
   * @schema ListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemasResponse#Schemas
   */
  readonly schemas?: SchemaSummary[];

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PutCodeBindingRequest
 */
export interface PutCodeBindingRequest {
  /**
   * @schema PutCodeBindingRequest#Language
   */
  readonly language: string;

  /**
   * @schema PutCodeBindingRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema PutCodeBindingRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema PutCodeBindingRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema PutCodeBindingResponse
 */
export interface PutCodeBindingResponse {
  /**
   * @schema PutCodeBindingResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema PutCodeBindingResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema PutCodeBindingResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema PutCodeBindingResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema PutResourcePolicyRequest
 */
export interface PutResourcePolicyRequest {
  /**
   * @schema PutResourcePolicyRequest#Policy
   */
  readonly policy: string;

  /**
   * @schema PutResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema PutResourcePolicyRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema PutResourcePolicyResponse
 */
export interface PutResourcePolicyResponse {
  /**
   * @schema PutResourcePolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema PutResourcePolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema SearchSchemasRequest
 */
export interface SearchSchemasRequest {
  /**
   * @schema SearchSchemasRequest#Keywords
   */
  readonly keywords: string;

  /**
   * @schema SearchSchemasRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SearchSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchSchemasRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema SearchSchemasResponse
 */
export interface SearchSchemasResponse {
  /**
   * @schema SearchSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchSchemasResponse#Schemas
   */
  readonly schemas?: SearchSchemaSummary[];

}

/**
 * @schema StartDiscovererRequest
 */
export interface StartDiscovererRequest {
  /**
   * @schema StartDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema StartDiscovererResponse
 */
export interface StartDiscovererResponse {
  /**
   * @schema StartDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema StartDiscovererResponse#State
   */
  readonly state?: string;

}

/**
 * @schema StopDiscovererRequest
 */
export interface StopDiscovererRequest {
  /**
   * @schema StopDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema StopDiscovererResponse
 */
export interface StopDiscovererResponse {
  /**
   * @schema StopDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema StopDiscovererResponse#State
   */
  readonly state?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateDiscovererRequest
 */
export interface UpdateDiscovererRequest {
  /**
   * @schema UpdateDiscovererRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema UpdateDiscovererResponse
 */
export interface UpdateDiscovererResponse {
  /**
   * @schema UpdateDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema UpdateDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema UpdateDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema UpdateDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema UpdateDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UpdateRegistryRequest
 */
export interface UpdateRegistryRequest {
  /**
   * @schema UpdateRegistryRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRegistryRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema UpdateRegistryResponse
 */
export interface UpdateRegistryResponse {
  /**
   * @schema UpdateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema UpdateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema UpdateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UpdateSchemaRequest
 */
export interface UpdateSchemaRequest {
  /**
   * @schema UpdateSchemaRequest#ClientTokenId
   */
  readonly clientTokenId?: string;

  /**
   * @schema UpdateSchemaRequest#Content
   */
  readonly content?: string;

  /**
   * @schema UpdateSchemaRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema UpdateSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema UpdateSchemaRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema UpdateSchemaResponse
 */
export interface UpdateSchemaResponse {
  /**
   * @schema UpdateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema UpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema UpdateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema UpdateSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema UpdateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema UpdateSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema UpdateSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * @schema DiscovererSummary
 */
export interface DiscovererSummary {
  /**
   * @schema DiscovererSummary#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema DiscovererSummary#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema DiscovererSummary#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema DiscovererSummary#State
   */
  readonly state?: string;

  /**
   * @schema DiscovererSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema RegistrySummary
 */
export interface RegistrySummary {
  /**
   * @schema RegistrySummary#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema RegistrySummary#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema RegistrySummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemaVersionSummary
 */
export interface SchemaVersionSummary {
  /**
   * @schema SchemaVersionSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemaVersionSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemaVersionSummary#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemaVersionSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema SchemaSummary
 */
export interface SchemaSummary {
  /**
   * @schema SchemaSummary#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemaSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemaSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemaSummary#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemaSummary#VersionCount
   */
  readonly versionCount?: number;

}

/**
 * @schema SearchSchemaSummary
 */
export interface SearchSchemaSummary {
  /**
   * @schema SearchSchemaSummary#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SearchSchemaSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SearchSchemaSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SearchSchemaSummary#SchemaVersions
   */
  readonly schemaVersions?: SearchSchemaVersionSummary[];

}

/**
 * @schema SearchSchemaVersionSummary
 */
export interface SearchSchemaVersionSummary {
  /**
   * @schema SearchSchemaVersionSummary#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SearchSchemaVersionSummary#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SearchSchemaVersionSummary#Type
   */
  readonly type?: string;

}
