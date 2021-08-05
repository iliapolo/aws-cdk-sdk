/**
 * @schema SchemasCreateDiscovererRequest
 */
export interface SchemasCreateDiscovererRequest {
  /**
   * @schema SchemasCreateDiscovererRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateDiscovererRequest#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema SchemasCreateDiscovererRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasCreateDiscovererResponse
 */
export interface SchemasCreateDiscovererResponse {
  /**
   * @schema SchemasCreateDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasCreateRegistryRequest
 */
export interface SchemasCreateRegistryRequest {
  /**
   * @schema SchemasCreateRegistryRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateRegistryRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasCreateRegistryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasCreateRegistryResponse
 */
export interface SchemasCreateRegistryResponse {
  /**
   * @schema SchemasCreateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasCreateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasCreateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasCreateSchemaRequest
 */
export interface SchemasCreateSchemaRequest {
  /**
   * @schema SchemasCreateSchemaRequest#Content
   */
  readonly content: string;

  /**
   * @schema SchemasCreateSchemaRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasCreateSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasCreateSchemaRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasCreateSchemaRequest#Type
   */
  readonly type: string;

}

/**
 * @schema SchemasCreateSchemaResponse
 */
export interface SchemasCreateSchemaResponse {
  /**
   * @schema SchemasCreateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasCreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasCreateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasCreateSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasCreateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasCreateSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema SchemasCreateSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * @schema SchemasDeleteDiscovererRequest
 */
export interface SchemasDeleteDiscovererRequest {
  /**
   * @schema SchemasDeleteDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema SchemasDeleteRegistryRequest
 */
export interface SchemasDeleteRegistryRequest {
  /**
   * @schema SchemasDeleteRegistryRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema SchemasDeleteResourcePolicyRequest
 */
export interface SchemasDeleteResourcePolicyRequest {
  /**
   * @schema SchemasDeleteResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema SchemasDeleteSchemaRequest
 */
export interface SchemasDeleteSchemaRequest {
  /**
   * @schema SchemasDeleteSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasDeleteSchemaRequest#SchemaName
   */
  readonly schemaName: string;

}

/**
 * @schema SchemasDeleteSchemaVersionRequest
 */
export interface SchemasDeleteSchemaVersionRequest {
  /**
   * @schema SchemasDeleteSchemaVersionRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasDeleteSchemaVersionRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasDeleteSchemaVersionRequest#SchemaVersion
   */
  readonly schemaVersion: string;

}

/**
 * @schema SchemasDescribeCodeBindingRequest
 */
export interface SchemasDescribeCodeBindingRequest {
  /**
   * @schema SchemasDescribeCodeBindingRequest#Language
   */
  readonly language: string;

  /**
   * @schema SchemasDescribeCodeBindingRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasDescribeCodeBindingRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasDescribeCodeBindingRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema SchemasDescribeCodeBindingResponse
 */
export interface SchemasDescribeCodeBindingResponse {
  /**
   * @schema SchemasDescribeCodeBindingResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SchemasDescribeCodeBindingResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasDescribeCodeBindingResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasDescribeCodeBindingResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema SchemasDescribeDiscovererRequest
 */
export interface SchemasDescribeDiscovererRequest {
  /**
   * @schema SchemasDescribeDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema SchemasDescribeDiscovererResponse
 */
export interface SchemasDescribeDiscovererResponse {
  /**
   * @schema SchemasDescribeDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasDescribeRegistryRequest
 */
export interface SchemasDescribeRegistryRequest {
  /**
   * @schema SchemasDescribeRegistryRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema SchemasDescribeRegistryResponse
 */
export interface SchemasDescribeRegistryResponse {
  /**
   * @schema SchemasDescribeRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasDescribeRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasDescribeRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasDescribeRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasDescribeSchemaRequest
 */
export interface SchemasDescribeSchemaRequest {
  /**
   * @schema SchemasDescribeSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasDescribeSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasDescribeSchemaRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema SchemasDescribeSchemaResponse
 */
export interface SchemasDescribeSchemaResponse {
  /**
   * @schema SchemasDescribeSchemaResponse#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasDescribeSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * @schema SchemasExportSchemaRequest
 */
export interface SchemasExportSchemaRequest {
  /**
   * @schema SchemasExportSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasExportSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasExportSchemaRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasExportSchemaRequest#Type
   */
  readonly type: string;

}

/**
 * @schema SchemasExportSchemaResponse
 */
export interface SchemasExportSchemaResponse {
  /**
   * @schema SchemasExportSchemaResponse#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasExportSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasExportSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasExportSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasExportSchemaResponse#Type
   */
  readonly type?: string;

}

/**
 * @schema SchemasGetCodeBindingSourceRequest
 */
export interface SchemasGetCodeBindingSourceRequest {
  /**
   * @schema SchemasGetCodeBindingSourceRequest#Language
   */
  readonly language: string;

  /**
   * @schema SchemasGetCodeBindingSourceRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasGetCodeBindingSourceRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasGetCodeBindingSourceRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema SchemasGetCodeBindingSourceResponse
 */
export interface SchemasGetCodeBindingSourceResponse {
  /**
   * @schema SchemasGetCodeBindingSourceResponse#Body
   */
  readonly body?: any;

}

/**
 * @schema SchemasGetDiscoveredSchemaRequest
 */
export interface SchemasGetDiscoveredSchemaRequest {
  /**
   * @schema SchemasGetDiscoveredSchemaRequest#Events
   */
  readonly events: string[];

  /**
   * @schema SchemasGetDiscoveredSchemaRequest#Type
   */
  readonly type: string;

}

/**
 * @schema SchemasGetDiscoveredSchemaResponse
 */
export interface SchemasGetDiscoveredSchemaResponse {
  /**
   * @schema SchemasGetDiscoveredSchemaResponse#Content
   */
  readonly content?: string;

}

/**
 * @schema SchemasGetResourcePolicyRequest
 */
export interface SchemasGetResourcePolicyRequest {
  /**
   * @schema SchemasGetResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * @schema SchemasGetResourcePolicyResponse
 */
export interface SchemasGetResourcePolicyResponse {
  /**
   * @schema SchemasGetResourcePolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema SchemasGetResourcePolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema SchemasListDiscoverersRequest
 */
export interface SchemasListDiscoverersRequest {
  /**
   * @schema SchemasListDiscoverersRequest#DiscovererIdPrefix
   */
  readonly discovererIdPrefix?: string;

  /**
   * @schema SchemasListDiscoverersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListDiscoverersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListDiscoverersRequest#SourceArnPrefix
   */
  readonly sourceArnPrefix?: string;

}

/**
 * @schema SchemasListDiscoverersResponse
 */
export interface SchemasListDiscoverersResponse {
  /**
   * @schema SchemasListDiscoverersResponse#Discoverers
   */
  readonly discoverers?: SchemasDiscovererSummary[];

  /**
   * @schema SchemasListDiscoverersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SchemasListRegistriesRequest
 */
export interface SchemasListRegistriesRequest {
  /**
   * @schema SchemasListRegistriesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListRegistriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListRegistriesRequest#RegistryNamePrefix
   */
  readonly registryNamePrefix?: string;

  /**
   * @schema SchemasListRegistriesRequest#Scope
   */
  readonly scope?: string;

}

/**
 * @schema SchemasListRegistriesResponse
 */
export interface SchemasListRegistriesResponse {
  /**
   * @schema SchemasListRegistriesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListRegistriesResponse#Registries
   */
  readonly registries?: SchemasRegistrySummary[];

}

/**
 * @schema SchemasListSchemaVersionsRequest
 */
export interface SchemasListSchemaVersionsRequest {
  /**
   * @schema SchemasListSchemaVersionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListSchemaVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemaVersionsRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasListSchemaVersionsRequest#SchemaName
   */
  readonly schemaName: string;

}

/**
 * @schema SchemasListSchemaVersionsResponse
 */
export interface SchemasListSchemaVersionsResponse {
  /**
   * @schema SchemasListSchemaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemaVersionsResponse#SchemaVersions
   */
  readonly schemaVersions?: SchemasSchemaVersionSummary[];

}

/**
 * @schema SchemasListSchemasRequest
 */
export interface SchemasListSchemasRequest {
  /**
   * @schema SchemasListSchemasRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemasRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasListSchemasRequest#SchemaNamePrefix
   */
  readonly schemaNamePrefix?: string;

}

/**
 * @schema SchemasListSchemasResponse
 */
export interface SchemasListSchemasResponse {
  /**
   * @schema SchemasListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemasResponse#Schemas
   */
  readonly schemas?: SchemasSchemaSummary[];

}

/**
 * @schema SchemasListTagsForResourceRequest
 */
export interface SchemasListTagsForResourceRequest {
  /**
   * @schema SchemasListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema SchemasListTagsForResourceResponse
 */
export interface SchemasListTagsForResourceResponse {
  /**
   * @schema SchemasListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasPutCodeBindingRequest
 */
export interface SchemasPutCodeBindingRequest {
  /**
   * @schema SchemasPutCodeBindingRequest#Language
   */
  readonly language: string;

  /**
   * @schema SchemasPutCodeBindingRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasPutCodeBindingRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasPutCodeBindingRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * @schema SchemasPutCodeBindingResponse
 */
export interface SchemasPutCodeBindingResponse {
  /**
   * @schema SchemasPutCodeBindingResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SchemasPutCodeBindingResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasPutCodeBindingResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasPutCodeBindingResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema SchemasPutResourcePolicyRequest
 */
export interface SchemasPutResourcePolicyRequest {
  /**
   * @schema SchemasPutResourcePolicyRequest#Policy
   */
  readonly policy: string;

  /**
   * @schema SchemasPutResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasPutResourcePolicyRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema SchemasPutResourcePolicyResponse
 */
export interface SchemasPutResourcePolicyResponse {
  /**
   * @schema SchemasPutResourcePolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema SchemasPutResourcePolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * @schema SchemasSearchSchemasRequest
 */
export interface SchemasSearchSchemasRequest {
  /**
   * @schema SchemasSearchSchemasRequest#Keywords
   */
  readonly keywords: string;

  /**
   * @schema SchemasSearchSchemasRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasSearchSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasSearchSchemasRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema SchemasSearchSchemasResponse
 */
export interface SchemasSearchSchemasResponse {
  /**
   * @schema SchemasSearchSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasSearchSchemasResponse#Schemas
   */
  readonly schemas?: SchemasSearchSchemaSummary[];

}

/**
 * @schema SchemasStartDiscovererRequest
 */
export interface SchemasStartDiscovererRequest {
  /**
   * @schema SchemasStartDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema SchemasStartDiscovererResponse
 */
export interface SchemasStartDiscovererResponse {
  /**
   * @schema SchemasStartDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasStartDiscovererResponse#State
   */
  readonly state?: string;

}

/**
 * @schema SchemasStopDiscovererRequest
 */
export interface SchemasStopDiscovererRequest {
  /**
   * @schema SchemasStopDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema SchemasStopDiscovererResponse
 */
export interface SchemasStopDiscovererResponse {
  /**
   * @schema SchemasStopDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasStopDiscovererResponse#State
   */
  readonly state?: string;

}

/**
 * @schema SchemasTagResourceRequest
 */
export interface SchemasTagResourceRequest {
  /**
   * @schema SchemasTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SchemasTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema SchemasUntagResourceRequest
 */
export interface SchemasUntagResourceRequest {
  /**
   * @schema SchemasUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SchemasUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SchemasUpdateDiscovererRequest
 */
export interface SchemasUpdateDiscovererRequest {
  /**
   * @schema SchemasUpdateDiscovererRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateDiscovererRequest#DiscovererId
   */
  readonly discovererId: string;

}

/**
 * @schema SchemasUpdateDiscovererResponse
 */
export interface SchemasUpdateDiscovererResponse {
  /**
   * @schema SchemasUpdateDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasUpdateRegistryRequest
 */
export interface SchemasUpdateRegistryRequest {
  /**
   * @schema SchemasUpdateRegistryRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateRegistryRequest#RegistryName
   */
  readonly registryName: string;

}

/**
 * @schema SchemasUpdateRegistryResponse
 */
export interface SchemasUpdateRegistryResponse {
  /**
   * @schema SchemasUpdateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasUpdateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasUpdateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasUpdateSchemaRequest
 */
export interface SchemasUpdateSchemaRequest {
  /**
   * @schema SchemasUpdateSchemaRequest#ClientTokenId
   */
  readonly clientTokenId?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#RegistryName
   */
  readonly registryName: string;

  /**
   * @schema SchemasUpdateSchemaRequest#SchemaName
   */
  readonly schemaName: string;

  /**
   * @schema SchemasUpdateSchemaRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema SchemasUpdateSchemaResponse
 */
export interface SchemasUpdateSchemaResponse {
  /**
   * @schema SchemasUpdateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasUpdateSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * @schema SchemasDiscovererSummary
 */
export interface SchemasDiscovererSummary {
  /**
   * @schema SchemasDiscovererSummary#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasDiscovererSummary#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasDiscovererSummary#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasDiscovererSummary#State
   */
  readonly state?: string;

  /**
   * @schema SchemasDiscovererSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasRegistrySummary
 */
export interface SchemasRegistrySummary {
  /**
   * @schema SchemasRegistrySummary#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasRegistrySummary#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasRegistrySummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema SchemasSchemaVersionSummary
 */
export interface SchemasSchemaVersionSummary {
  /**
   * @schema SchemasSchemaVersionSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasSchemaVersionSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasSchemaVersionSummary#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasSchemaVersionSummary#Type
   */
  readonly type?: string;

}

/**
 * @schema SchemasSchemaSummary
 */
export interface SchemasSchemaSummary {
  /**
   * @schema SchemasSchemaSummary#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasSchemaSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasSchemaSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasSchemaSummary#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasSchemaSummary#VersionCount
   */
  readonly versionCount?: number;

}

/**
 * @schema SchemasSearchSchemaSummary
 */
export interface SchemasSearchSchemaSummary {
  /**
   * @schema SchemasSearchSchemaSummary#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasSearchSchemaSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasSearchSchemaSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasSearchSchemaSummary#SchemaVersions
   */
  readonly schemaVersions?: SchemasSearchSchemaVersionSummary[];

}

/**
 * @schema SchemasSearchSchemaVersionSummary
 */
export interface SchemasSearchSchemaVersionSummary {
  /**
   * @schema SchemasSearchSchemaVersionSummary#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SchemasSearchSchemaVersionSummary#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasSearchSchemaVersionSummary#Type
   */
  readonly type?: string;

}
