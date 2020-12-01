/**
 * @schema BatchGrantPermissionsRequest
 */
export interface BatchGrantPermissionsRequest {
  /**
   * @schema BatchGrantPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchGrantPermissionsRequest#Entries
   */
  readonly entries: BatchPermissionsRequestEntry[];

}

/**
 * @schema BatchGrantPermissionsResponse
 */
export interface BatchGrantPermissionsResponse {
  /**
   * @schema BatchGrantPermissionsResponse#Failures
   */
  readonly failures?: BatchPermissionsFailureEntry[];

}

/**
 * @schema BatchRevokePermissionsRequest
 */
export interface BatchRevokePermissionsRequest {
  /**
   * @schema BatchRevokePermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema BatchRevokePermissionsRequest#Entries
   */
  readonly entries: BatchPermissionsRequestEntry[];

}

/**
 * @schema BatchRevokePermissionsResponse
 */
export interface BatchRevokePermissionsResponse {
  /**
   * @schema BatchRevokePermissionsResponse#Failures
   */
  readonly failures?: BatchPermissionsFailureEntry[];

}

/**
 * @schema DeregisterResourceRequest
 */
export interface DeregisterResourceRequest {
  /**
   * @schema DeregisterResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DeregisterResourceResponse
 */
export interface DeregisterResourceResponse {
}

/**
 * @schema DescribeResourceRequest
 */
export interface DescribeResourceRequest {
  /**
   * @schema DescribeResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DescribeResourceResponse
 */
export interface DescribeResourceResponse {
  /**
   * @schema DescribeResourceResponse#ResourceInfo
   */
  readonly resourceInfo?: ResourceInfo;

}

/**
 * @schema GetDataLakeSettingsRequest
 */
export interface GetDataLakeSettingsRequest {
  /**
   * @schema GetDataLakeSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema GetDataLakeSettingsResponse
 */
export interface GetDataLakeSettingsResponse {
  /**
   * @schema GetDataLakeSettingsResponse#DataLakeSettings
   */
  readonly dataLakeSettings?: DataLakeSettings;

}

/**
 * @schema GetEffectivePermissionsForPathRequest
 */
export interface GetEffectivePermissionsForPathRequest {
  /**
   * @schema GetEffectivePermissionsForPathRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GetEffectivePermissionsForPathRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema GetEffectivePermissionsForPathRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetEffectivePermissionsForPathRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetEffectivePermissionsForPathResponse
 */
export interface GetEffectivePermissionsForPathResponse {
  /**
   * @schema GetEffectivePermissionsForPathResponse#Permissions
   */
  readonly permissions?: PrincipalResourcePermissions[];

  /**
   * @schema GetEffectivePermissionsForPathResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GrantPermissionsRequest
 */
export interface GrantPermissionsRequest {
  /**
   * @schema GrantPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema GrantPermissionsRequest#Principal
   */
  readonly principal: DataLakePrincipal;

  /**
   * @schema GrantPermissionsRequest#Resource
   */
  readonly resource: Resource;

  /**
   * @schema GrantPermissionsRequest#Permissions
   */
  readonly permissions: string[];

  /**
   * @schema GrantPermissionsRequest#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * @schema GrantPermissionsResponse
 */
export interface GrantPermissionsResponse {
}

/**
 * @schema ListPermissionsRequest
 */
export interface ListPermissionsRequest {
  /**
   * @schema ListPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema ListPermissionsRequest#Principal
   */
  readonly principal?: DataLakePrincipal;

  /**
   * @schema ListPermissionsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ListPermissionsRequest#Resource
   */
  readonly resource?: Resource;

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
   * @schema ListPermissionsResponse#PrincipalResourcePermissions
   */
  readonly principalResourcePermissions?: PrincipalResourcePermissions[];

  /**
   * @schema ListPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourcesRequest
 */
export interface ListResourcesRequest {
  /**
   * @schema ListResourcesRequest#FilterConditionList
   */
  readonly filterConditionList?: FilterCondition[];

  /**
   * @schema ListResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListResourcesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourcesResponse
 */
export interface ListResourcesResponse {
  /**
   * @schema ListResourcesResponse#ResourceInfoList
   */
  readonly resourceInfoList?: ResourceInfo[];

  /**
   * @schema ListResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutDataLakeSettingsRequest
 */
export interface PutDataLakeSettingsRequest {
  /**
   * @schema PutDataLakeSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema PutDataLakeSettingsRequest#DataLakeSettings
   */
  readonly dataLakeSettings: DataLakeSettings;

}

/**
 * @schema PutDataLakeSettingsResponse
 */
export interface PutDataLakeSettingsResponse {
}

/**
 * @schema RegisterResourceRequest
 */
export interface RegisterResourceRequest {
  /**
   * @schema RegisterResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema RegisterResourceRequest#UseServiceLinkedRole
   */
  readonly useServiceLinkedRole?: boolean;

  /**
   * @schema RegisterResourceRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema RegisterResourceResponse
 */
export interface RegisterResourceResponse {
}

/**
 * @schema RevokePermissionsRequest
 */
export interface RevokePermissionsRequest {
  /**
   * @schema RevokePermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema RevokePermissionsRequest#Principal
   */
  readonly principal: DataLakePrincipal;

  /**
   * @schema RevokePermissionsRequest#Resource
   */
  readonly resource: Resource;

  /**
   * @schema RevokePermissionsRequest#Permissions
   */
  readonly permissions: string[];

  /**
   * @schema RevokePermissionsRequest#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * @schema RevokePermissionsResponse
 */
export interface RevokePermissionsResponse {
}

/**
 * @schema UpdateResourceRequest
 */
export interface UpdateResourceRequest {
  /**
   * @schema UpdateResourceRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema UpdateResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema UpdateResourceResponse
 */
export interface UpdateResourceResponse {
}

/**
 * @schema BatchPermissionsRequestEntry
 */
export interface BatchPermissionsRequestEntry {
  /**
   * @schema BatchPermissionsRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema BatchPermissionsRequestEntry#Principal
   */
  readonly principal?: DataLakePrincipal;

  /**
   * @schema BatchPermissionsRequestEntry#Resource
   */
  readonly resource?: Resource;

  /**
   * @schema BatchPermissionsRequestEntry#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema BatchPermissionsRequestEntry#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * @schema BatchPermissionsFailureEntry
 */
export interface BatchPermissionsFailureEntry {
  /**
   * @schema BatchPermissionsFailureEntry#RequestEntry
   */
  readonly requestEntry?: BatchPermissionsRequestEntry;

  /**
   * @schema BatchPermissionsFailureEntry#Error
   */
  readonly error?: ErrorDetail;

}

/**
 * @schema ResourceInfo
 */
export interface ResourceInfo {
  /**
   * @schema ResourceInfo#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceInfo#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ResourceInfo#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema DataLakeSettings
 */
export interface DataLakeSettings {
  /**
   * @schema DataLakeSettings#DataLakeAdmins
   */
  readonly dataLakeAdmins?: DataLakePrincipal[];

  /**
   * @schema DataLakeSettings#CreateDatabaseDefaultPermissions
   */
  readonly createDatabaseDefaultPermissions?: PrincipalPermissions[];

  /**
   * @schema DataLakeSettings#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * @schema DataLakeSettings#TrustedResourceOwners
   */
  readonly trustedResourceOwners?: string[];

}

/**
 * @schema PrincipalResourcePermissions
 */
export interface PrincipalResourcePermissions {
  /**
   * @schema PrincipalResourcePermissions#Principal
   */
  readonly principal?: DataLakePrincipal;

  /**
   * @schema PrincipalResourcePermissions#Resource
   */
  readonly resource?: Resource;

  /**
   * @schema PrincipalResourcePermissions#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema PrincipalResourcePermissions#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

  /**
   * @schema PrincipalResourcePermissions#AdditionalDetails
   */
  readonly additionalDetails?: DetailsMap;

}

/**
 * @schema DataLakePrincipal
 */
export interface DataLakePrincipal {
  /**
   * @schema DataLakePrincipal#DataLakePrincipalIdentifier
   */
  readonly dataLakePrincipalIdentifier?: string;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#Catalog
   */
  readonly catalog?: CatalogResource;

  /**
   * @schema Resource#Database
   */
  readonly database?: DatabaseResource;

  /**
   * @schema Resource#Table
   */
  readonly table?: TableResource;

  /**
   * @schema Resource#TableWithColumns
   */
  readonly tableWithColumns?: TableWithColumnsResource;

  /**
   * @schema Resource#DataLocation
   */
  readonly dataLocation?: DataLocationResource;

}

/**
 * @schema FilterCondition
 */
export interface FilterCondition {
  /**
   * @schema FilterCondition#Field
   */
  readonly field?: string;

  /**
   * @schema FilterCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema FilterCondition#StringValueList
   */
  readonly stringValueList?: string[];

}

/**
 * @schema ErrorDetail
 */
export interface ErrorDetail {
  /**
   * @schema ErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema PrincipalPermissions
 */
export interface PrincipalPermissions {
  /**
   * @schema PrincipalPermissions#Principal
   */
  readonly principal?: DataLakePrincipal;

  /**
   * @schema PrincipalPermissions#Permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema DetailsMap
 */
export interface DetailsMap {
  /**
   * @schema DetailsMap#ResourceShare
   */
  readonly resourceShare?: string[];

}

/**
 * @schema CatalogResource
 */
export interface CatalogResource {
}

/**
 * @schema DatabaseResource
 */
export interface DatabaseResource {
  /**
   * @schema DatabaseResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DatabaseResource#Name
   */
  readonly name: string;

}

/**
 * @schema TableResource
 */
export interface TableResource {
  /**
   * @schema TableResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema TableResource#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TableResource#Name
   */
  readonly name?: string;

  /**
   * @schema TableResource#TableWildcard
   */
  readonly tableWildcard?: TableWildcard;

}

/**
 * @schema TableWithColumnsResource
 */
export interface TableWithColumnsResource {
  /**
   * @schema TableWithColumnsResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema TableWithColumnsResource#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema TableWithColumnsResource#Name
   */
  readonly name: string;

  /**
   * @schema TableWithColumnsResource#ColumnNames
   */
  readonly columnNames?: string[];

  /**
   * @schema TableWithColumnsResource#ColumnWildcard
   */
  readonly columnWildcard?: ColumnWildcard;

}

/**
 * @schema DataLocationResource
 */
export interface DataLocationResource {
  /**
   * @schema DataLocationResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DataLocationResource#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema TableWildcard
 */
export interface TableWildcard {
}

/**
 * @schema ColumnWildcard
 */
export interface ColumnWildcard {
  /**
   * @schema ColumnWildcard#ExcludedColumnNames
   */
  readonly excludedColumnNames?: string[];

}
