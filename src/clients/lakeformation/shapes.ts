/**
 * @schema LakeFormationBatchGrantPermissionsRequest
 */
export interface LakeFormationBatchGrantPermissionsRequest {
  /**
   * @schema LakeFormationBatchGrantPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationBatchGrantPermissionsRequest#Entries
   */
  readonly entries: LakeFormationBatchPermissionsRequestEntry[];

}

/**
 * @schema LakeFormationBatchGrantPermissionsResponse
 */
export interface LakeFormationBatchGrantPermissionsResponse {
  /**
   * @schema LakeFormationBatchGrantPermissionsResponse#Failures
   */
  readonly failures?: LakeFormationBatchPermissionsFailureEntry[];

}

/**
 * @schema LakeFormationBatchRevokePermissionsRequest
 */
export interface LakeFormationBatchRevokePermissionsRequest {
  /**
   * @schema LakeFormationBatchRevokePermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationBatchRevokePermissionsRequest#Entries
   */
  readonly entries: LakeFormationBatchPermissionsRequestEntry[];

}

/**
 * @schema LakeFormationBatchRevokePermissionsResponse
 */
export interface LakeFormationBatchRevokePermissionsResponse {
  /**
   * @schema LakeFormationBatchRevokePermissionsResponse#Failures
   */
  readonly failures?: LakeFormationBatchPermissionsFailureEntry[];

}

/**
 * @schema LakeFormationDeregisterResourceRequest
 */
export interface LakeFormationDeregisterResourceRequest {
  /**
   * @schema LakeFormationDeregisterResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema LakeFormationDeregisterResourceResponse
 */
export interface LakeFormationDeregisterResourceResponse {
}

/**
 * @schema LakeFormationDescribeResourceRequest
 */
export interface LakeFormationDescribeResourceRequest {
  /**
   * @schema LakeFormationDescribeResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema LakeFormationDescribeResourceResponse
 */
export interface LakeFormationDescribeResourceResponse {
  /**
   * @schema LakeFormationDescribeResourceResponse#ResourceInfo
   */
  readonly resourceInfo?: LakeFormationResourceInfo;

}

/**
 * @schema LakeFormationGetDataLakeSettingsRequest
 */
export interface LakeFormationGetDataLakeSettingsRequest {
  /**
   * @schema LakeFormationGetDataLakeSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

}

/**
 * @schema LakeFormationGetDataLakeSettingsResponse
 */
export interface LakeFormationGetDataLakeSettingsResponse {
  /**
   * @schema LakeFormationGetDataLakeSettingsResponse#DataLakeSettings
   */
  readonly dataLakeSettings?: LakeFormationDataLakeSettings;

}

/**
 * @schema LakeFormationGetEffectivePermissionsForPathRequest
 */
export interface LakeFormationGetEffectivePermissionsForPathRequest {
  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema LakeFormationGetEffectivePermissionsForPathResponse
 */
export interface LakeFormationGetEffectivePermissionsForPathResponse {
  /**
   * @schema LakeFormationGetEffectivePermissionsForPathResponse#Permissions
   */
  readonly permissions?: LakeFormationPrincipalResourcePermissions[];

  /**
   * @schema LakeFormationGetEffectivePermissionsForPathResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LakeFormationGrantPermissionsRequest
 */
export interface LakeFormationGrantPermissionsRequest {
  /**
   * @schema LakeFormationGrantPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationGrantPermissionsRequest#Principal
   */
  readonly principal: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationGrantPermissionsRequest#Resource
   */
  readonly resource: LakeFormationResource;

  /**
   * @schema LakeFormationGrantPermissionsRequest#Permissions
   */
  readonly permissions: string[];

  /**
   * @schema LakeFormationGrantPermissionsRequest#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * @schema LakeFormationGrantPermissionsResponse
 */
export interface LakeFormationGrantPermissionsResponse {
}

/**
 * @schema LakeFormationListPermissionsRequest
 */
export interface LakeFormationListPermissionsRequest {
  /**
   * @schema LakeFormationListPermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationListPermissionsRequest#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationListPermissionsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema LakeFormationListPermissionsRequest#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationListPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LakeFormationListPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema LakeFormationListPermissionsResponse
 */
export interface LakeFormationListPermissionsResponse {
  /**
   * @schema LakeFormationListPermissionsResponse#PrincipalResourcePermissions
   */
  readonly principalResourcePermissions?: LakeFormationPrincipalResourcePermissions[];

  /**
   * @schema LakeFormationListPermissionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LakeFormationListResourcesRequest
 */
export interface LakeFormationListResourcesRequest {
  /**
   * @schema LakeFormationListResourcesRequest#FilterConditionList
   */
  readonly filterConditionList?: LakeFormationFilterCondition[];

  /**
   * @schema LakeFormationListResourcesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema LakeFormationListResourcesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LakeFormationListResourcesResponse
 */
export interface LakeFormationListResourcesResponse {
  /**
   * @schema LakeFormationListResourcesResponse#ResourceInfoList
   */
  readonly resourceInfoList?: LakeFormationResourceInfo[];

  /**
   * @schema LakeFormationListResourcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LakeFormationPutDataLakeSettingsRequest
 */
export interface LakeFormationPutDataLakeSettingsRequest {
  /**
   * @schema LakeFormationPutDataLakeSettingsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationPutDataLakeSettingsRequest#DataLakeSettings
   */
  readonly dataLakeSettings: LakeFormationDataLakeSettings;

}

/**
 * @schema LakeFormationPutDataLakeSettingsResponse
 */
export interface LakeFormationPutDataLakeSettingsResponse {
}

/**
 * @schema LakeFormationRegisterResourceRequest
 */
export interface LakeFormationRegisterResourceRequest {
  /**
   * @schema LakeFormationRegisterResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema LakeFormationRegisterResourceRequest#UseServiceLinkedRole
   */
  readonly useServiceLinkedRole?: boolean;

  /**
   * @schema LakeFormationRegisterResourceRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema LakeFormationRegisterResourceResponse
 */
export interface LakeFormationRegisterResourceResponse {
}

/**
 * @schema LakeFormationRevokePermissionsRequest
 */
export interface LakeFormationRevokePermissionsRequest {
  /**
   * @schema LakeFormationRevokePermissionsRequest#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationRevokePermissionsRequest#Principal
   */
  readonly principal: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationRevokePermissionsRequest#Resource
   */
  readonly resource: LakeFormationResource;

  /**
   * @schema LakeFormationRevokePermissionsRequest#Permissions
   */
  readonly permissions: string[];

  /**
   * @schema LakeFormationRevokePermissionsRequest#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * @schema LakeFormationRevokePermissionsResponse
 */
export interface LakeFormationRevokePermissionsResponse {
}

/**
 * @schema LakeFormationUpdateResourceRequest
 */
export interface LakeFormationUpdateResourceRequest {
  /**
   * @schema LakeFormationUpdateResourceRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema LakeFormationUpdateResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema LakeFormationUpdateResourceResponse
 */
export interface LakeFormationUpdateResourceResponse {
}

/**
 * @schema LakeFormationBatchPermissionsRequestEntry
 */
export interface LakeFormationBatchPermissionsRequestEntry {
  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Id
   */
  readonly id: string;

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema LakeFormationBatchPermissionsRequestEntry#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

}

/**
 * @schema LakeFormationBatchPermissionsFailureEntry
 */
export interface LakeFormationBatchPermissionsFailureEntry {
  /**
   * @schema LakeFormationBatchPermissionsFailureEntry#RequestEntry
   */
  readonly requestEntry?: LakeFormationBatchPermissionsRequestEntry;

  /**
   * @schema LakeFormationBatchPermissionsFailureEntry#Error
   */
  readonly error?: LakeFormationErrorDetail;

}

/**
 * @schema LakeFormationResourceInfo
 */
export interface LakeFormationResourceInfo {
  /**
   * @schema LakeFormationResourceInfo#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema LakeFormationResourceInfo#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema LakeFormationResourceInfo#LastModified
   */
  readonly lastModified?: string;

}

/**
 * @schema LakeFormationDataLakeSettings
 */
export interface LakeFormationDataLakeSettings {
  /**
   * @schema LakeFormationDataLakeSettings#DataLakeAdmins
   */
  readonly dataLakeAdmins?: LakeFormationDataLakePrincipal[];

  /**
   * @schema LakeFormationDataLakeSettings#CreateDatabaseDefaultPermissions
   */
  readonly createDatabaseDefaultPermissions?: LakeFormationPrincipalPermissions[];

  /**
   * @schema LakeFormationDataLakeSettings#CreateTableDefaultPermissions
   */
  readonly createTableDefaultPermissions?: LakeFormationPrincipalPermissions[];

  /**
   * @schema LakeFormationDataLakeSettings#TrustedResourceOwners
   */
  readonly trustedResourceOwners?: string[];

}

/**
 * @schema LakeFormationPrincipalResourcePermissions
 */
export interface LakeFormationPrincipalResourcePermissions {
  /**
   * @schema LakeFormationPrincipalResourcePermissions#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationPrincipalResourcePermissions#Resource
   */
  readonly resource?: LakeFormationResource;

  /**
   * @schema LakeFormationPrincipalResourcePermissions#Permissions
   */
  readonly permissions?: string[];

  /**
   * @schema LakeFormationPrincipalResourcePermissions#PermissionsWithGrantOption
   */
  readonly permissionsWithGrantOption?: string[];

  /**
   * @schema LakeFormationPrincipalResourcePermissions#AdditionalDetails
   */
  readonly additionalDetails?: LakeFormationDetailsMap;

}

/**
 * @schema LakeFormationDataLakePrincipal
 */
export interface LakeFormationDataLakePrincipal {
  /**
   * @schema LakeFormationDataLakePrincipal#DataLakePrincipalIdentifier
   */
  readonly dataLakePrincipalIdentifier?: string;

}

/**
 * @schema LakeFormationResource
 */
export interface LakeFormationResource {
  /**
   * @schema LakeFormationResource#Catalog
   */
  readonly catalog?: LakeFormationCatalogResource;

  /**
   * @schema LakeFormationResource#Database
   */
  readonly database?: LakeFormationDatabaseResource;

  /**
   * @schema LakeFormationResource#Table
   */
  readonly table?: LakeFormationTableResource;

  /**
   * @schema LakeFormationResource#TableWithColumns
   */
  readonly tableWithColumns?: LakeFormationTableWithColumnsResource;

  /**
   * @schema LakeFormationResource#DataLocation
   */
  readonly dataLocation?: LakeFormationDataLocationResource;

}

/**
 * @schema LakeFormationFilterCondition
 */
export interface LakeFormationFilterCondition {
  /**
   * @schema LakeFormationFilterCondition#Field
   */
  readonly field?: string;

  /**
   * @schema LakeFormationFilterCondition#ComparisonOperator
   */
  readonly comparisonOperator?: string;

  /**
   * @schema LakeFormationFilterCondition#StringValueList
   */
  readonly stringValueList?: string[];

}

/**
 * @schema LakeFormationErrorDetail
 */
export interface LakeFormationErrorDetail {
  /**
   * @schema LakeFormationErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema LakeFormationErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema LakeFormationPrincipalPermissions
 */
export interface LakeFormationPrincipalPermissions {
  /**
   * @schema LakeFormationPrincipalPermissions#Principal
   */
  readonly principal?: LakeFormationDataLakePrincipal;

  /**
   * @schema LakeFormationPrincipalPermissions#Permissions
   */
  readonly permissions?: string[];

}

/**
 * @schema LakeFormationDetailsMap
 */
export interface LakeFormationDetailsMap {
  /**
   * @schema LakeFormationDetailsMap#ResourceShare
   */
  readonly resourceShare?: string[];

}

/**
 * @schema LakeFormationCatalogResource
 */
export interface LakeFormationCatalogResource {
}

/**
 * @schema LakeFormationDatabaseResource
 */
export interface LakeFormationDatabaseResource {
  /**
   * @schema LakeFormationDatabaseResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationDatabaseResource#Name
   */
  readonly name: string;

}

/**
 * @schema LakeFormationTableResource
 */
export interface LakeFormationTableResource {
  /**
   * @schema LakeFormationTableResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationTableResource#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema LakeFormationTableResource#Name
   */
  readonly name?: string;

  /**
   * @schema LakeFormationTableResource#TableWildcard
   */
  readonly tableWildcard?: LakeFormationTableWildcard;

}

/**
 * @schema LakeFormationTableWithColumnsResource
 */
export interface LakeFormationTableWithColumnsResource {
  /**
   * @schema LakeFormationTableWithColumnsResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationTableWithColumnsResource#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema LakeFormationTableWithColumnsResource#Name
   */
  readonly name: string;

  /**
   * @schema LakeFormationTableWithColumnsResource#ColumnNames
   */
  readonly columnNames?: string[];

  /**
   * @schema LakeFormationTableWithColumnsResource#ColumnWildcard
   */
  readonly columnWildcard?: LakeFormationColumnWildcard;

}

/**
 * @schema LakeFormationDataLocationResource
 */
export interface LakeFormationDataLocationResource {
  /**
   * @schema LakeFormationDataLocationResource#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema LakeFormationDataLocationResource#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema LakeFormationTableWildcard
 */
export interface LakeFormationTableWildcard {
}

/**
 * @schema LakeFormationColumnWildcard
 */
export interface LakeFormationColumnWildcard {
  /**
   * @schema LakeFormationColumnWildcard#ExcludedColumnNames
   */
  readonly excludedColumnNames?: string[];

}
