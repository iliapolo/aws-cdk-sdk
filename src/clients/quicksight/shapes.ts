/**
 * @schema QuickSightCancelIngestionRequest
 */
export interface QuickSightCancelIngestionRequest {
  /**
   * @schema QuickSightCancelIngestionRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCancelIngestionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightCancelIngestionRequest#IngestionId
   */
  readonly ingestionId?: string;

}

/**
 * Converts an object of type 'QuickSightCancelIngestionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCancelIngestionRequest(obj: QuickSightCancelIngestionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
    'IngestionId': obj.ingestionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCancelIngestionResponse
 */
export interface QuickSightCancelIngestionResponse {
  /**
   * @schema QuickSightCancelIngestionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCancelIngestionResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightCancelIngestionResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCancelIngestionResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCancelIngestionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCancelIngestionResponse(obj: QuickSightCancelIngestionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'IngestionId': obj.ingestionId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateAccountCustomizationRequest
 */
export interface QuickSightCreateAccountCustomizationRequest {
  /**
   * @schema QuickSightCreateAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationRequest#AccountCustomization
   */
  readonly accountCustomization?: QuickSightAccountCustomization;

  /**
   * @schema QuickSightCreateAccountCustomizationRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateAccountCustomizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateAccountCustomizationRequest(obj: QuickSightCreateAccountCustomizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'AccountCustomization': toJson_QuickSightAccountCustomization(obj.accountCustomization),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateAccountCustomizationResponse
 */
export interface QuickSightCreateAccountCustomizationResponse {
  /**
   * @schema QuickSightCreateAccountCustomizationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationResponse#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationResponse#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationResponse#AccountCustomization
   */
  readonly accountCustomization?: QuickSightAccountCustomization;

  /**
   * @schema QuickSightCreateAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateAccountCustomizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateAccountCustomizationResponse(obj: QuickSightCreateAccountCustomizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'AccountCustomization': toJson_QuickSightAccountCustomization(obj.accountCustomization),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateAnalysisRequest
 */
export interface QuickSightCreateAnalysisRequest {
  /**
   * @schema QuickSightCreateAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateAnalysisRequest#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightCreateAnalysisRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateAnalysisRequest#Parameters
   */
  readonly parameters?: QuickSightParameters;

  /**
   * @schema QuickSightCreateAnalysisRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateAnalysisRequest#SourceEntity
   */
  readonly sourceEntity?: QuickSightAnalysisSourceEntity;

  /**
   * @schema QuickSightCreateAnalysisRequest#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema QuickSightCreateAnalysisRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateAnalysisRequest(obj: QuickSightCreateAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
    'Name': obj.name,
    'Parameters': toJson_QuickSightParameters(obj.parameters),
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'SourceEntity': toJson_QuickSightAnalysisSourceEntity(obj.sourceEntity),
    'ThemeArn': obj.themeArn,
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateAnalysisResponse
 */
export interface QuickSightCreateAnalysisResponse {
  /**
   * @schema QuickSightCreateAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightCreateAnalysisResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightCreateAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateAnalysisResponse(obj: QuickSightCreateAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AnalysisId': obj.analysisId,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateDashboardRequest
 */
export interface QuickSightCreateDashboardRequest {
  /**
   * @schema QuickSightCreateDashboardRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateDashboardRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightCreateDashboardRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateDashboardRequest#Parameters
   */
  readonly parameters?: QuickSightParameters;

  /**
   * @schema QuickSightCreateDashboardRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateDashboardRequest#SourceEntity
   */
  readonly sourceEntity?: QuickSightDashboardSourceEntity;

  /**
   * @schema QuickSightCreateDashboardRequest#Tags
   */
  readonly tags?: QuickSightTag[];

  /**
   * @schema QuickSightCreateDashboardRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema QuickSightCreateDashboardRequest#DashboardPublishOptions
   */
  readonly dashboardPublishOptions?: QuickSightDashboardPublishOptions;

  /**
   * @schema QuickSightCreateDashboardRequest#ThemeArn
   */
  readonly themeArn?: string;

}

/**
 * Converts an object of type 'QuickSightCreateDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateDashboardRequest(obj: QuickSightCreateDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'Name': obj.name,
    'Parameters': toJson_QuickSightParameters(obj.parameters),
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'SourceEntity': toJson_QuickSightDashboardSourceEntity(obj.sourceEntity),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
    'VersionDescription': obj.versionDescription,
    'DashboardPublishOptions': toJson_QuickSightDashboardPublishOptions(obj.dashboardPublishOptions),
    'ThemeArn': obj.themeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateDashboardResponse
 */
export interface QuickSightCreateDashboardResponse {
  /**
   * @schema QuickSightCreateDashboardResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateDashboardResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema QuickSightCreateDashboardResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightCreateDashboardResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightCreateDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateDashboardResponse(obj: QuickSightCreateDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'VersionArn': obj.versionArn,
    'DashboardId': obj.dashboardId,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateDataSetRequest
 */
export interface QuickSightCreateDataSetRequest {
  /**
   * @schema QuickSightCreateDataSetRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightCreateDataSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateDataSetRequest#PhysicalTableMap
   */
  readonly physicalTableMap?: { [key: string]: QuickSightPhysicalTable };

  /**
   * @schema QuickSightCreateDataSetRequest#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: QuickSightLogicalTable };

  /**
   * @schema QuickSightCreateDataSetRequest#ImportMode
   */
  readonly importMode?: string;

  /**
   * @schema QuickSightCreateDataSetRequest#ColumnGroups
   */
  readonly columnGroups?: QuickSightColumnGroup[];

  /**
   * @schema QuickSightCreateDataSetRequest#FieldFolders
   */
  readonly fieldFolders?: { [key: string]: QuickSightFieldFolder };

  /**
   * @schema QuickSightCreateDataSetRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateDataSetRequest#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

  /**
   * @schema QuickSightCreateDataSetRequest#RowLevelPermissionTagConfiguration
   */
  readonly rowLevelPermissionTagConfiguration?: QuickSightRowLevelPermissionTagConfiguration;

  /**
   * @schema QuickSightCreateDataSetRequest#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: QuickSightColumnLevelPermissionRule[];

  /**
   * @schema QuickSightCreateDataSetRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateDataSetRequest(obj: QuickSightCreateDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
    'Name': obj.name,
    'PhysicalTableMap': ((obj.physicalTableMap) === undefined) ? undefined : (Object.entries(obj.physicalTableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightPhysicalTable(i[1]) }), {})),
    'LogicalTableMap': ((obj.logicalTableMap) === undefined) ? undefined : (Object.entries(obj.logicalTableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightLogicalTable(i[1]) }), {})),
    'ImportMode': obj.importMode,
    'ColumnGroups': obj.columnGroups?.map(y => toJson_QuickSightColumnGroup(y)),
    'FieldFolders': ((obj.fieldFolders) === undefined) ? undefined : (Object.entries(obj.fieldFolders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightFieldFolder(i[1]) }), {})),
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RowLevelPermissionDataSet': toJson_QuickSightRowLevelPermissionDataSet(obj.rowLevelPermissionDataSet),
    'RowLevelPermissionTagConfiguration': toJson_QuickSightRowLevelPermissionTagConfiguration(obj.rowLevelPermissionTagConfiguration),
    'ColumnLevelPermissionRules': obj.columnLevelPermissionRules?.map(y => toJson_QuickSightColumnLevelPermissionRule(y)),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateDataSetResponse
 */
export interface QuickSightCreateDataSetResponse {
  /**
   * @schema QuickSightCreateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateDataSetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightCreateDataSetResponse#IngestionArn
   */
  readonly ingestionArn?: string;

  /**
   * @schema QuickSightCreateDataSetResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightCreateDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateDataSetResponse(obj: QuickSightCreateDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSetId': obj.dataSetId,
    'IngestionArn': obj.ingestionArn,
    'IngestionId': obj.ingestionId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateDataSourceRequest
 */
export interface QuickSightCreateDataSourceRequest {
  /**
   * @schema QuickSightCreateDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#DataSourceParameters
   */
  readonly dataSourceParameters?: QuickSightDataSourceParameters;

  /**
   * @schema QuickSightCreateDataSourceRequest#Credentials
   */
  readonly credentials?: QuickSightDataSourceCredentials;

  /**
   * @schema QuickSightCreateDataSourceRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateDataSourceRequest#VpcConnectionProperties
   */
  readonly vpcConnectionProperties?: QuickSightVpcConnectionProperties;

  /**
   * @schema QuickSightCreateDataSourceRequest#SslProperties
   */
  readonly sslProperties?: QuickSightSslProperties;

  /**
   * @schema QuickSightCreateDataSourceRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateDataSourceRequest(obj: QuickSightCreateDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSourceId': obj.dataSourceId,
    'Name': obj.name,
    'Type': obj.type,
    'DataSourceParameters': toJson_QuickSightDataSourceParameters(obj.dataSourceParameters),
    'Credentials': toJson_QuickSightDataSourceCredentials(obj.credentials),
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'VpcConnectionProperties': toJson_QuickSightVpcConnectionProperties(obj.vpcConnectionProperties),
    'SslProperties': toJson_QuickSightSslProperties(obj.sslProperties),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateDataSourceResponse
 */
export interface QuickSightCreateDataSourceResponse {
  /**
   * @schema QuickSightCreateDataSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateDataSourceResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightCreateDataSourceResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightCreateDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateDataSourceResponse(obj: QuickSightCreateDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSourceId': obj.dataSourceId,
    'CreationStatus': obj.creationStatus,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateFolderRequest
 */
export interface QuickSightCreateFolderRequest {
  /**
   * @schema QuickSightCreateFolderRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateFolderRequest#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightCreateFolderRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateFolderRequest#FolderType
   */
  readonly folderType?: string;

  /**
   * @schema QuickSightCreateFolderRequest#ParentFolderArn
   */
  readonly parentFolderArn?: string;

  /**
   * @schema QuickSightCreateFolderRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateFolderRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateFolderRequest(obj: QuickSightCreateFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
    'Name': obj.name,
    'FolderType': obj.folderType,
    'ParentFolderArn': obj.parentFolderArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateFolderResponse
 */
export interface QuickSightCreateFolderResponse {
  /**
   * @schema QuickSightCreateFolderResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateFolderResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateFolderResponse#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightCreateFolderResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateFolderResponse(obj: QuickSightCreateFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'FolderId': obj.folderId,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateFolderMembershipRequest
 */
export interface QuickSightCreateFolderMembershipRequest {
  /**
   * @schema QuickSightCreateFolderMembershipRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateFolderMembershipRequest#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightCreateFolderMembershipRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema QuickSightCreateFolderMembershipRequest#MemberType
   */
  readonly memberType?: string;

}

/**
 * Converts an object of type 'QuickSightCreateFolderMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateFolderMembershipRequest(obj: QuickSightCreateFolderMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
    'MemberId': obj.memberId,
    'MemberType': obj.memberType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateFolderMembershipResponse
 */
export interface QuickSightCreateFolderMembershipResponse {
  /**
   * @schema QuickSightCreateFolderMembershipResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateFolderMembershipResponse#FolderMember
   */
  readonly folderMember?: QuickSightFolderMember;

  /**
   * @schema QuickSightCreateFolderMembershipResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateFolderMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateFolderMembershipResponse(obj: QuickSightCreateFolderMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FolderMember': toJson_QuickSightFolderMember(obj.folderMember),
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateGroupRequest
 */
export interface QuickSightCreateGroupRequest {
  /**
   * @schema QuickSightCreateGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightCreateGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightCreateGroupRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateGroupRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightCreateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateGroupRequest(obj: QuickSightCreateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Description': obj.description,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateGroupResponse
 */
export interface QuickSightCreateGroupResponse {
  /**
   * @schema QuickSightCreateGroupResponse#Group
   */
  readonly group?: QuickSightGroup;

  /**
   * @schema QuickSightCreateGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateGroupResponse(obj: QuickSightCreateGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_QuickSightGroup(obj.group),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateGroupMembershipRequest
 */
export interface QuickSightCreateGroupMembershipRequest {
  /**
   * @schema QuickSightCreateGroupMembershipRequest#MemberName
   */
  readonly memberName?: string;

  /**
   * @schema QuickSightCreateGroupMembershipRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightCreateGroupMembershipRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateGroupMembershipRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightCreateGroupMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateGroupMembershipRequest(obj: QuickSightCreateGroupMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberName': obj.memberName,
    'GroupName': obj.groupName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateGroupMembershipResponse
 */
export interface QuickSightCreateGroupMembershipResponse {
  /**
   * @schema QuickSightCreateGroupMembershipResponse#GroupMember
   */
  readonly groupMember?: QuickSightGroupMember;

  /**
   * @schema QuickSightCreateGroupMembershipResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateGroupMembershipResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateGroupMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateGroupMembershipResponse(obj: QuickSightCreateGroupMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupMember': toJson_QuickSightGroupMember(obj.groupMember),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateIamPolicyAssignmentRequest
 */
export interface QuickSightCreateIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightCreateIamPolicyAssignmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateIamPolicyAssignmentRequest(obj: QuickSightCreateIamPolicyAssignmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AssignmentName': obj.assignmentName,
    'AssignmentStatus': obj.assignmentStatus,
    'PolicyArn': obj.policyArn,
    'Identities': ((obj.identities) === undefined) ? undefined : (Object.entries(obj.identities).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateIamPolicyAssignmentResponse
 */
export interface QuickSightCreateIamPolicyAssignmentResponse {
  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#AssignmentId
   */
  readonly assignmentId?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateIamPolicyAssignmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateIamPolicyAssignmentResponse(obj: QuickSightCreateIamPolicyAssignmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignmentName': obj.assignmentName,
    'AssignmentId': obj.assignmentId,
    'AssignmentStatus': obj.assignmentStatus,
    'PolicyArn': obj.policyArn,
    'Identities': ((obj.identities) === undefined) ? undefined : (Object.entries(obj.identities).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateIngestionRequest
 */
export interface QuickSightCreateIngestionRequest {
  /**
   * @schema QuickSightCreateIngestionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightCreateIngestionRequest#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightCreateIngestionRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateIngestionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateIngestionRequest(obj: QuickSightCreateIngestionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'IngestionId': obj.ingestionId,
    'AwsAccountId': obj.awsAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateIngestionResponse
 */
export interface QuickSightCreateIngestionResponse {
  /**
   * @schema QuickSightCreateIngestionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateIngestionResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightCreateIngestionResponse#IngestionStatus
   */
  readonly ingestionStatus?: string;

  /**
   * @schema QuickSightCreateIngestionResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateIngestionResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateIngestionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateIngestionResponse(obj: QuickSightCreateIngestionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'IngestionId': obj.ingestionId,
    'IngestionStatus': obj.ingestionStatus,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateNamespaceRequest
 */
export interface QuickSightCreateNamespaceRequest {
  /**
   * @schema QuickSightCreateNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateNamespaceRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightCreateNamespaceRequest#IdentityStore
   */
  readonly identityStore?: string;

  /**
   * @schema QuickSightCreateNamespaceRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateNamespaceRequest(obj: QuickSightCreateNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'IdentityStore': obj.identityStore,
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateNamespaceResponse
 */
export interface QuickSightCreateNamespaceResponse {
  /**
   * @schema QuickSightCreateNamespaceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateNamespaceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateNamespaceResponse#CapacityRegion
   */
  readonly capacityRegion?: string;

  /**
   * @schema QuickSightCreateNamespaceResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightCreateNamespaceResponse#IdentityStore
   */
  readonly identityStore?: string;

  /**
   * @schema QuickSightCreateNamespaceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightCreateNamespaceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightCreateNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateNamespaceResponse(obj: QuickSightCreateNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'CapacityRegion': obj.capacityRegion,
    'CreationStatus': obj.creationStatus,
    'IdentityStore': obj.identityStore,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateTemplateRequest
 */
export interface QuickSightCreateTemplateRequest {
  /**
   * @schema QuickSightCreateTemplateRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateTemplateRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightCreateTemplateRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateTemplateRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateTemplateRequest#SourceEntity
   */
  readonly sourceEntity?: QuickSightTemplateSourceEntity;

  /**
   * @schema QuickSightCreateTemplateRequest#Tags
   */
  readonly tags?: QuickSightTag[];

  /**
   * @schema QuickSightCreateTemplateRequest#VersionDescription
   */
  readonly versionDescription?: string;

}

/**
 * Converts an object of type 'QuickSightCreateTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateTemplateRequest(obj: QuickSightCreateTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'Name': obj.name,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'SourceEntity': toJson_QuickSightTemplateSourceEntity(obj.sourceEntity),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
    'VersionDescription': obj.versionDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateTemplateResponse
 */
export interface QuickSightCreateTemplateResponse {
  /**
   * @schema QuickSightCreateTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateTemplateResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema QuickSightCreateTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightCreateTemplateResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightCreateTemplateResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateTemplateResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateTemplateResponse(obj: QuickSightCreateTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'VersionArn': obj.versionArn,
    'TemplateId': obj.templateId,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateTemplateAliasRequest
 */
export interface QuickSightCreateTemplateAliasRequest {
  /**
   * @schema QuickSightCreateTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateTemplateAliasRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightCreateTemplateAliasRequest#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightCreateTemplateAliasRequest#TemplateVersionNumber
   */
  readonly templateVersionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightCreateTemplateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateTemplateAliasRequest(obj: QuickSightCreateTemplateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'AliasName': obj.aliasName,
    'TemplateVersionNumber': obj.templateVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateTemplateAliasResponse
 */
export interface QuickSightCreateTemplateAliasResponse {
  /**
   * @schema QuickSightCreateTemplateAliasResponse#TemplateAlias
   */
  readonly templateAlias?: QuickSightTemplateAlias;

  /**
   * @schema QuickSightCreateTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateTemplateAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateTemplateAliasResponse(obj: QuickSightCreateTemplateAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateAlias': toJson_QuickSightTemplateAlias(obj.templateAlias),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateThemeRequest
 */
export interface QuickSightCreateThemeRequest {
  /**
   * @schema QuickSightCreateThemeRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateThemeRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightCreateThemeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCreateThemeRequest#BaseThemeId
   */
  readonly baseThemeId?: string;

  /**
   * @schema QuickSightCreateThemeRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema QuickSightCreateThemeRequest#Configuration
   */
  readonly configuration?: QuickSightThemeConfiguration;

  /**
   * @schema QuickSightCreateThemeRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateThemeRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightCreateThemeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateThemeRequest(obj: QuickSightCreateThemeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'Name': obj.name,
    'BaseThemeId': obj.baseThemeId,
    'VersionDescription': obj.versionDescription,
    'Configuration': toJson_QuickSightThemeConfiguration(obj.configuration),
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateThemeResponse
 */
export interface QuickSightCreateThemeResponse {
  /**
   * @schema QuickSightCreateThemeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightCreateThemeResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema QuickSightCreateThemeResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightCreateThemeResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightCreateThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateThemeResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateThemeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateThemeResponse(obj: QuickSightCreateThemeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'VersionArn': obj.versionArn,
    'ThemeId': obj.themeId,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateThemeAliasRequest
 */
export interface QuickSightCreateThemeAliasRequest {
  /**
   * @schema QuickSightCreateThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightCreateThemeAliasRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightCreateThemeAliasRequest#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightCreateThemeAliasRequest#ThemeVersionNumber
   */
  readonly themeVersionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightCreateThemeAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateThemeAliasRequest(obj: QuickSightCreateThemeAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'AliasName': obj.aliasName,
    'ThemeVersionNumber': obj.themeVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateThemeAliasResponse
 */
export interface QuickSightCreateThemeAliasResponse {
  /**
   * @schema QuickSightCreateThemeAliasResponse#ThemeAlias
   */
  readonly themeAlias?: QuickSightThemeAlias;

  /**
   * @schema QuickSightCreateThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightCreateThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightCreateThemeAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateThemeAliasResponse(obj: QuickSightCreateThemeAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeAlias': toJson_QuickSightThemeAlias(obj.themeAlias),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteAccountCustomizationRequest
 */
export interface QuickSightDeleteAccountCustomizationRequest {
  /**
   * @schema QuickSightDeleteAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteAccountCustomizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteAccountCustomizationRequest(obj: QuickSightDeleteAccountCustomizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteAccountCustomizationResponse
 */
export interface QuickSightDeleteAccountCustomizationResponse {
  /**
   * @schema QuickSightDeleteAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteAccountCustomizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteAccountCustomizationResponse(obj: QuickSightDeleteAccountCustomizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteAnalysisRequest
 */
export interface QuickSightDeleteAnalysisRequest {
  /**
   * @schema QuickSightDeleteAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteAnalysisRequest#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightDeleteAnalysisRequest#RecoveryWindowInDays
   */
  readonly recoveryWindowInDays?: number;

  /**
   * @schema QuickSightDeleteAnalysisRequest#ForceDeleteWithoutRecovery
   */
  readonly forceDeleteWithoutRecovery?: boolean;

}

/**
 * Converts an object of type 'QuickSightDeleteAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteAnalysisRequest(obj: QuickSightDeleteAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
    'RecoveryWindowInDays': obj.recoveryWindowInDays,
    'ForceDeleteWithoutRecovery': obj.forceDeleteWithoutRecovery,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteAnalysisResponse
 */
export interface QuickSightDeleteAnalysisResponse {
  /**
   * @schema QuickSightDeleteAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightDeleteAnalysisResponse#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema QuickSightDeleteAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteAnalysisResponse(obj: QuickSightDeleteAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'AnalysisId': obj.analysisId,
    'DeletionTime': obj.deletionTime,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteDashboardRequest
 */
export interface QuickSightDeleteDashboardRequest {
  /**
   * @schema QuickSightDeleteDashboardRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteDashboardRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightDeleteDashboardRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteDashboardRequest(obj: QuickSightDeleteDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteDashboardResponse
 */
export interface QuickSightDeleteDashboardResponse {
  /**
   * @schema QuickSightDeleteDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteDashboardResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteDashboardResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightDeleteDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteDashboardResponse(obj: QuickSightDeleteDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'DashboardId': obj.dashboardId,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteDataSetRequest
 */
export interface QuickSightDeleteDataSetRequest {
  /**
   * @schema QuickSightDeleteDataSetRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteDataSetRequest(obj: QuickSightDeleteDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteDataSetResponse
 */
export interface QuickSightDeleteDataSetResponse {
  /**
   * @schema QuickSightDeleteDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteDataSetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightDeleteDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteDataSetResponse(obj: QuickSightDeleteDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSetId': obj.dataSetId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteDataSourceRequest
 */
export interface QuickSightDeleteDataSourceRequest {
  /**
   * @schema QuickSightDeleteDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteDataSourceRequest#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteDataSourceRequest(obj: QuickSightDeleteDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteDataSourceResponse
 */
export interface QuickSightDeleteDataSourceResponse {
  /**
   * @schema QuickSightDeleteDataSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteDataSourceResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightDeleteDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteDataSourceResponse(obj: QuickSightDeleteDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSourceId': obj.dataSourceId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteFolderRequest
 */
export interface QuickSightDeleteFolderRequest {
  /**
   * @schema QuickSightDeleteFolderRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteFolderRequest#FolderId
   */
  readonly folderId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteFolderRequest(obj: QuickSightDeleteFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteFolderResponse
 */
export interface QuickSightDeleteFolderResponse {
  /**
   * @schema QuickSightDeleteFolderResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteFolderResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteFolderResponse#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightDeleteFolderResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteFolderResponse(obj: QuickSightDeleteFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'FolderId': obj.folderId,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteFolderMembershipRequest
 */
export interface QuickSightDeleteFolderMembershipRequest {
  /**
   * @schema QuickSightDeleteFolderMembershipRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteFolderMembershipRequest#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightDeleteFolderMembershipRequest#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema QuickSightDeleteFolderMembershipRequest#MemberType
   */
  readonly memberType?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteFolderMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteFolderMembershipRequest(obj: QuickSightDeleteFolderMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
    'MemberId': obj.memberId,
    'MemberType': obj.memberType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteFolderMembershipResponse
 */
export interface QuickSightDeleteFolderMembershipResponse {
  /**
   * @schema QuickSightDeleteFolderMembershipResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteFolderMembershipResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteFolderMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteFolderMembershipResponse(obj: QuickSightDeleteFolderMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteGroupRequest
 */
export interface QuickSightDeleteGroupRequest {
  /**
   * @schema QuickSightDeleteGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightDeleteGroupRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteGroupRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteGroupRequest(obj: QuickSightDeleteGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteGroupResponse
 */
export interface QuickSightDeleteGroupResponse {
  /**
   * @schema QuickSightDeleteGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteGroupResponse(obj: QuickSightDeleteGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteGroupMembershipRequest
 */
export interface QuickSightDeleteGroupMembershipRequest {
  /**
   * @schema QuickSightDeleteGroupMembershipRequest#MemberName
   */
  readonly memberName?: string;

  /**
   * @schema QuickSightDeleteGroupMembershipRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightDeleteGroupMembershipRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteGroupMembershipRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteGroupMembershipRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteGroupMembershipRequest(obj: QuickSightDeleteGroupMembershipRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberName': obj.memberName,
    'GroupName': obj.groupName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteGroupMembershipResponse
 */
export interface QuickSightDeleteGroupMembershipResponse {
  /**
   * @schema QuickSightDeleteGroupMembershipResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteGroupMembershipResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteGroupMembershipResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteGroupMembershipResponse(obj: QuickSightDeleteGroupMembershipResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteIamPolicyAssignmentRequest
 */
export interface QuickSightDeleteIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightDeleteIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightDeleteIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteIamPolicyAssignmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteIamPolicyAssignmentRequest(obj: QuickSightDeleteIamPolicyAssignmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AssignmentName': obj.assignmentName,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteIamPolicyAssignmentResponse
 */
export interface QuickSightDeleteIamPolicyAssignmentResponse {
  /**
   * @schema QuickSightDeleteIamPolicyAssignmentResponse#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightDeleteIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteIamPolicyAssignmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteIamPolicyAssignmentResponse(obj: QuickSightDeleteIamPolicyAssignmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignmentName': obj.assignmentName,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteNamespaceRequest
 */
export interface QuickSightDeleteNamespaceRequest {
  /**
   * @schema QuickSightDeleteNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteNamespaceRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteNamespaceRequest(obj: QuickSightDeleteNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteNamespaceResponse
 */
export interface QuickSightDeleteNamespaceResponse {
  /**
   * @schema QuickSightDeleteNamespaceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteNamespaceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteNamespaceResponse(obj: QuickSightDeleteNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteTemplateRequest
 */
export interface QuickSightDeleteTemplateRequest {
  /**
   * @schema QuickSightDeleteTemplateRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteTemplateRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDeleteTemplateRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteTemplateRequest(obj: QuickSightDeleteTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteTemplateResponse
 */
export interface QuickSightDeleteTemplateResponse {
  /**
   * @schema QuickSightDeleteTemplateResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDeleteTemplateResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteTemplateResponse(obj: QuickSightDeleteTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Arn': obj.arn,
    'TemplateId': obj.templateId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteTemplateAliasRequest
 */
export interface QuickSightDeleteTemplateAliasRequest {
  /**
   * @schema QuickSightDeleteTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteTemplateAliasRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDeleteTemplateAliasRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteTemplateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteTemplateAliasRequest(obj: QuickSightDeleteTemplateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteTemplateAliasResponse
 */
export interface QuickSightDeleteTemplateAliasResponse {
  /**
   * @schema QuickSightDeleteTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteTemplateAliasResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDeleteTemplateAliasResponse#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightDeleteTemplateAliasResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteTemplateAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteTemplateAliasResponse(obj: QuickSightDeleteTemplateAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'TemplateId': obj.templateId,
    'AliasName': obj.aliasName,
    'Arn': obj.arn,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteThemeRequest
 */
export interface QuickSightDeleteThemeRequest {
  /**
   * @schema QuickSightDeleteThemeRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteThemeRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightDeleteThemeRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteThemeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteThemeRequest(obj: QuickSightDeleteThemeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteThemeResponse
 */
export interface QuickSightDeleteThemeResponse {
  /**
   * @schema QuickSightDeleteThemeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteThemeResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteThemeResponse#ThemeId
   */
  readonly themeId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteThemeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteThemeResponse(obj: QuickSightDeleteThemeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'RequestId': obj.requestId,
    'Status': obj.status,
    'ThemeId': obj.themeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteThemeAliasRequest
 */
export interface QuickSightDeleteThemeAliasRequest {
  /**
   * @schema QuickSightDeleteThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteThemeAliasRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightDeleteThemeAliasRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteThemeAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteThemeAliasRequest(obj: QuickSightDeleteThemeAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteThemeAliasResponse
 */
export interface QuickSightDeleteThemeAliasResponse {
  /**
   * @schema QuickSightDeleteThemeAliasResponse#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightDeleteThemeAliasResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDeleteThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDeleteThemeAliasResponse#ThemeId
   */
  readonly themeId?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteThemeAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteThemeAliasResponse(obj: QuickSightDeleteThemeAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasName': obj.aliasName,
    'Arn': obj.arn,
    'RequestId': obj.requestId,
    'Status': obj.status,
    'ThemeId': obj.themeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteUserRequest
 */
export interface QuickSightDeleteUserRequest {
  /**
   * @schema QuickSightDeleteUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightDeleteUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteUserRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteUserRequest(obj: QuickSightDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteUserResponse
 */
export interface QuickSightDeleteUserResponse {
  /**
   * @schema QuickSightDeleteUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteUserResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteUserResponse(obj: QuickSightDeleteUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteUserByPrincipalIdRequest
 */
export interface QuickSightDeleteUserByPrincipalIdRequest {
  /**
   * @schema QuickSightDeleteUserByPrincipalIdRequest#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema QuickSightDeleteUserByPrincipalIdRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDeleteUserByPrincipalIdRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDeleteUserByPrincipalIdRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteUserByPrincipalIdRequest(obj: QuickSightDeleteUserByPrincipalIdRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrincipalId': obj.principalId,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDeleteUserByPrincipalIdResponse
 */
export interface QuickSightDeleteUserByPrincipalIdResponse {
  /**
   * @schema QuickSightDeleteUserByPrincipalIdResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDeleteUserByPrincipalIdResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDeleteUserByPrincipalIdResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDeleteUserByPrincipalIdResponse(obj: QuickSightDeleteUserByPrincipalIdResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAccountCustomizationRequest
 */
export interface QuickSightDescribeAccountCustomizationRequest {
  /**
   * @schema QuickSightDescribeAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightDescribeAccountCustomizationRequest#Resolved
   */
  readonly resolved?: boolean;

}

/**
 * Converts an object of type 'QuickSightDescribeAccountCustomizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAccountCustomizationRequest(obj: QuickSightDescribeAccountCustomizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'Resolved': obj.resolved,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAccountCustomizationResponse
 */
export interface QuickSightDescribeAccountCustomizationResponse {
  /**
   * @schema QuickSightDescribeAccountCustomizationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDescribeAccountCustomizationResponse#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeAccountCustomizationResponse#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightDescribeAccountCustomizationResponse#AccountCustomization
   */
  readonly accountCustomization?: QuickSightAccountCustomization;

  /**
   * @schema QuickSightDescribeAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeAccountCustomizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAccountCustomizationResponse(obj: QuickSightDescribeAccountCustomizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'AccountCustomization': toJson_QuickSightAccountCustomization(obj.accountCustomization),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAccountSettingsRequest
 */
export interface QuickSightDescribeAccountSettingsRequest {
  /**
   * @schema QuickSightDescribeAccountSettingsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAccountSettingsRequest(obj: QuickSightDescribeAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAccountSettingsResponse
 */
export interface QuickSightDescribeAccountSettingsResponse {
  /**
   * @schema QuickSightDescribeAccountSettingsResponse#AccountSettings
   */
  readonly accountSettings?: QuickSightAccountSettings;

  /**
   * @schema QuickSightDescribeAccountSettingsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeAccountSettingsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeAccountSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAccountSettingsResponse(obj: QuickSightDescribeAccountSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountSettings': toJson_QuickSightAccountSettings(obj.accountSettings),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAnalysisRequest
 */
export interface QuickSightDescribeAnalysisRequest {
  /**
   * @schema QuickSightDescribeAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeAnalysisRequest#AnalysisId
   */
  readonly analysisId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAnalysisRequest(obj: QuickSightDescribeAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAnalysisResponse
 */
export interface QuickSightDescribeAnalysisResponse {
  /**
   * @schema QuickSightDescribeAnalysisResponse#Analysis
   */
  readonly analysis?: QuickSightAnalysis;

  /**
   * @schema QuickSightDescribeAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAnalysisResponse(obj: QuickSightDescribeAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Analysis': toJson_QuickSightAnalysis(obj.analysis),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAnalysisPermissionsRequest
 */
export interface QuickSightDescribeAnalysisPermissionsRequest {
  /**
   * @schema QuickSightDescribeAnalysisPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeAnalysisPermissionsRequest#AnalysisId
   */
  readonly analysisId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeAnalysisPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAnalysisPermissionsRequest(obj: QuickSightDescribeAnalysisPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeAnalysisPermissionsResponse
 */
export interface QuickSightDescribeAnalysisPermissionsResponse {
  /**
   * @schema QuickSightDescribeAnalysisPermissionsResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightDescribeAnalysisPermissionsResponse#AnalysisArn
   */
  readonly analysisArn?: string;

  /**
   * @schema QuickSightDescribeAnalysisPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeAnalysisPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeAnalysisPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeAnalysisPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeAnalysisPermissionsResponse(obj: QuickSightDescribeAnalysisPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisId': obj.analysisId,
    'AnalysisArn': obj.analysisArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDashboardRequest
 */
export interface QuickSightDescribeDashboardRequest {
  /**
   * @schema QuickSightDescribeDashboardRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeDashboardRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightDescribeDashboardRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightDescribeDashboardRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDashboardRequest(obj: QuickSightDescribeDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'VersionNumber': obj.versionNumber,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDashboardResponse
 */
export interface QuickSightDescribeDashboardResponse {
  /**
   * @schema QuickSightDescribeDashboardResponse#Dashboard
   */
  readonly dashboard?: QuickSightDashboard;

  /**
   * @schema QuickSightDescribeDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDashboardResponse(obj: QuickSightDescribeDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dashboard': toJson_QuickSightDashboard(obj.dashboard),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDashboardPermissionsRequest
 */
export interface QuickSightDescribeDashboardPermissionsRequest {
  /**
   * @schema QuickSightDescribeDashboardPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeDashboardPermissionsRequest#DashboardId
   */
  readonly dashboardId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDashboardPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDashboardPermissionsRequest(obj: QuickSightDescribeDashboardPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDashboardPermissionsResponse
 */
export interface QuickSightDescribeDashboardPermissionsResponse {
  /**
   * @schema QuickSightDescribeDashboardPermissionsResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightDescribeDashboardPermissionsResponse#DashboardArn
   */
  readonly dashboardArn?: string;

  /**
   * @schema QuickSightDescribeDashboardPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeDashboardPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeDashboardPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDashboardPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDashboardPermissionsResponse(obj: QuickSightDescribeDashboardPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardId': obj.dashboardId,
    'DashboardArn': obj.dashboardArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSetRequest
 */
export interface QuickSightDescribeDataSetRequest {
  /**
   * @schema QuickSightDescribeDataSetRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSetRequest(obj: QuickSightDescribeDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSetResponse
 */
export interface QuickSightDescribeDataSetResponse {
  /**
   * @schema QuickSightDescribeDataSetResponse#DataSet
   */
  readonly dataSet?: QuickSightDataSet;

  /**
   * @schema QuickSightDescribeDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSetResponse(obj: QuickSightDescribeDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSet': toJson_QuickSightDataSet(obj.dataSet),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSetPermissionsRequest
 */
export interface QuickSightDescribeDataSetPermissionsRequest {
  /**
   * @schema QuickSightDescribeDataSetPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeDataSetPermissionsRequest#DataSetId
   */
  readonly dataSetId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSetPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSetPermissionsRequest(obj: QuickSightDescribeDataSetPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSetPermissionsResponse
 */
export interface QuickSightDescribeDataSetPermissionsResponse {
  /**
   * @schema QuickSightDescribeDataSetPermissionsResponse#DataSetArn
   */
  readonly dataSetArn?: string;

  /**
   * @schema QuickSightDescribeDataSetPermissionsResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightDescribeDataSetPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeDataSetPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeDataSetPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSetPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSetPermissionsResponse(obj: QuickSightDescribeDataSetPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetArn': obj.dataSetArn,
    'DataSetId': obj.dataSetId,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSourceRequest
 */
export interface QuickSightDescribeDataSourceRequest {
  /**
   * @schema QuickSightDescribeDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeDataSourceRequest#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSourceRequest(obj: QuickSightDescribeDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSourceResponse
 */
export interface QuickSightDescribeDataSourceResponse {
  /**
   * @schema QuickSightDescribeDataSourceResponse#DataSource
   */
  readonly dataSource?: QuickSightDataSource;

  /**
   * @schema QuickSightDescribeDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSourceResponse(obj: QuickSightDescribeDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSource': toJson_QuickSightDataSource(obj.dataSource),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSourcePermissionsRequest
 */
export interface QuickSightDescribeDataSourcePermissionsRequest {
  /**
   * @schema QuickSightDescribeDataSourcePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeDataSourcePermissionsRequest#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSourcePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSourcePermissionsRequest(obj: QuickSightDescribeDataSourcePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSourceId': obj.dataSourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeDataSourcePermissionsResponse
 */
export interface QuickSightDescribeDataSourcePermissionsResponse {
  /**
   * @schema QuickSightDescribeDataSourcePermissionsResponse#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema QuickSightDescribeDataSourcePermissionsResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightDescribeDataSourcePermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeDataSourcePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeDataSourcePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeDataSourcePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeDataSourcePermissionsResponse(obj: QuickSightDescribeDataSourcePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceArn': obj.dataSourceArn,
    'DataSourceId': obj.dataSourceId,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeFolderRequest
 */
export interface QuickSightDescribeFolderRequest {
  /**
   * @schema QuickSightDescribeFolderRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeFolderRequest#FolderId
   */
  readonly folderId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeFolderRequest(obj: QuickSightDescribeFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeFolderResponse
 */
export interface QuickSightDescribeFolderResponse {
  /**
   * @schema QuickSightDescribeFolderResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeFolderResponse#Folder
   */
  readonly folder?: QuickSightFolder;

  /**
   * @schema QuickSightDescribeFolderResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeFolderResponse(obj: QuickSightDescribeFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Folder': toJson_QuickSightFolder(obj.folder),
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeFolderPermissionsRequest
 */
export interface QuickSightDescribeFolderPermissionsRequest {
  /**
   * @schema QuickSightDescribeFolderPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeFolderPermissionsRequest#FolderId
   */
  readonly folderId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeFolderPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeFolderPermissionsRequest(obj: QuickSightDescribeFolderPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeFolderPermissionsResponse
 */
export interface QuickSightDescribeFolderPermissionsResponse {
  /**
   * @schema QuickSightDescribeFolderPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeFolderPermissionsResponse#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightDescribeFolderPermissionsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDescribeFolderPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeFolderPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeFolderPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeFolderPermissionsResponse(obj: QuickSightDescribeFolderPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FolderId': obj.folderId,
    'Arn': obj.arn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeFolderResolvedPermissionsRequest
 */
export interface QuickSightDescribeFolderResolvedPermissionsRequest {
  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsRequest#FolderId
   */
  readonly folderId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeFolderResolvedPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeFolderResolvedPermissionsRequest(obj: QuickSightDescribeFolderResolvedPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeFolderResolvedPermissionsResponse
 */
export interface QuickSightDescribeFolderResolvedPermissionsResponse {
  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsResponse#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeFolderResolvedPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeFolderResolvedPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeFolderResolvedPermissionsResponse(obj: QuickSightDescribeFolderResolvedPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FolderId': obj.folderId,
    'Arn': obj.arn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeGroupRequest
 */
export interface QuickSightDescribeGroupRequest {
  /**
   * @schema QuickSightDescribeGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightDescribeGroupRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeGroupRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeGroupRequest(obj: QuickSightDescribeGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeGroupResponse
 */
export interface QuickSightDescribeGroupResponse {
  /**
   * @schema QuickSightDescribeGroupResponse#Group
   */
  readonly group?: QuickSightGroup;

  /**
   * @schema QuickSightDescribeGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeGroupResponse(obj: QuickSightDescribeGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_QuickSightGroup(obj.group),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeIamPolicyAssignmentRequest
 */
export interface QuickSightDescribeIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightDescribeIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightDescribeIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeIamPolicyAssignmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeIamPolicyAssignmentRequest(obj: QuickSightDescribeIamPolicyAssignmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AssignmentName': obj.assignmentName,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeIamPolicyAssignmentResponse
 */
export interface QuickSightDescribeIamPolicyAssignmentResponse {
  /**
   * @schema QuickSightDescribeIamPolicyAssignmentResponse#IAMPolicyAssignment
   */
  readonly iamPolicyAssignment?: QuickSightIamPolicyAssignment;

  /**
   * @schema QuickSightDescribeIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeIamPolicyAssignmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeIamPolicyAssignmentResponse(obj: QuickSightDescribeIamPolicyAssignmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IAMPolicyAssignment': toJson_QuickSightIamPolicyAssignment(obj.iamPolicyAssignment),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeIngestionRequest
 */
export interface QuickSightDescribeIngestionRequest {
  /**
   * @schema QuickSightDescribeIngestionRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeIngestionRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightDescribeIngestionRequest#IngestionId
   */
  readonly ingestionId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeIngestionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeIngestionRequest(obj: QuickSightDescribeIngestionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
    'IngestionId': obj.ingestionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeIngestionResponse
 */
export interface QuickSightDescribeIngestionResponse {
  /**
   * @schema QuickSightDescribeIngestionResponse#Ingestion
   */
  readonly ingestion?: QuickSightIngestion;

  /**
   * @schema QuickSightDescribeIngestionResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeIngestionResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeIngestionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeIngestionResponse(obj: QuickSightDescribeIngestionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ingestion': toJson_QuickSightIngestion(obj.ingestion),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeNamespaceRequest
 */
export interface QuickSightDescribeNamespaceRequest {
  /**
   * @schema QuickSightDescribeNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeNamespaceRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeNamespaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeNamespaceRequest(obj: QuickSightDescribeNamespaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeNamespaceResponse
 */
export interface QuickSightDescribeNamespaceResponse {
  /**
   * @schema QuickSightDescribeNamespaceResponse#Namespace
   */
  readonly namespace?: QuickSightNamespaceInfoV2;

  /**
   * @schema QuickSightDescribeNamespaceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeNamespaceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeNamespaceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeNamespaceResponse(obj: QuickSightDescribeNamespaceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespace': toJson_QuickSightNamespaceInfoV2(obj.namespace),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeTemplateRequest
 */
export interface QuickSightDescribeTemplateRequest {
  /**
   * @schema QuickSightDescribeTemplateRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeTemplateRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDescribeTemplateRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightDescribeTemplateRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeTemplateRequest(obj: QuickSightDescribeTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'VersionNumber': obj.versionNumber,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeTemplateResponse
 */
export interface QuickSightDescribeTemplateResponse {
  /**
   * @schema QuickSightDescribeTemplateResponse#Template
   */
  readonly template?: QuickSightTemplate;

  /**
   * @schema QuickSightDescribeTemplateResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeTemplateResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeTemplateResponse(obj: QuickSightDescribeTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Template': toJson_QuickSightTemplate(obj.template),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeTemplateAliasRequest
 */
export interface QuickSightDescribeTemplateAliasRequest {
  /**
   * @schema QuickSightDescribeTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeTemplateAliasRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDescribeTemplateAliasRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeTemplateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeTemplateAliasRequest(obj: QuickSightDescribeTemplateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeTemplateAliasResponse
 */
export interface QuickSightDescribeTemplateAliasResponse {
  /**
   * @schema QuickSightDescribeTemplateAliasResponse#TemplateAlias
   */
  readonly templateAlias?: QuickSightTemplateAlias;

  /**
   * @schema QuickSightDescribeTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeTemplateAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeTemplateAliasResponse(obj: QuickSightDescribeTemplateAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateAlias': toJson_QuickSightTemplateAlias(obj.templateAlias),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeTemplatePermissionsRequest
 */
export interface QuickSightDescribeTemplatePermissionsRequest {
  /**
   * @schema QuickSightDescribeTemplatePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeTemplatePermissionsRequest#TemplateId
   */
  readonly templateId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeTemplatePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeTemplatePermissionsRequest(obj: QuickSightDescribeTemplatePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeTemplatePermissionsResponse
 */
export interface QuickSightDescribeTemplatePermissionsResponse {
  /**
   * @schema QuickSightDescribeTemplatePermissionsResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightDescribeTemplatePermissionsResponse#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema QuickSightDescribeTemplatePermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeTemplatePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeTemplatePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeTemplatePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeTemplatePermissionsResponse(obj: QuickSightDescribeTemplatePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateId': obj.templateId,
    'TemplateArn': obj.templateArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeThemeRequest
 */
export interface QuickSightDescribeThemeRequest {
  /**
   * @schema QuickSightDescribeThemeRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeThemeRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightDescribeThemeRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightDescribeThemeRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeThemeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeThemeRequest(obj: QuickSightDescribeThemeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'VersionNumber': obj.versionNumber,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeThemeResponse
 */
export interface QuickSightDescribeThemeResponse {
  /**
   * @schema QuickSightDescribeThemeResponse#Theme
   */
  readonly theme?: QuickSightTheme;

  /**
   * @schema QuickSightDescribeThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeThemeResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeThemeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeThemeResponse(obj: QuickSightDescribeThemeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Theme': toJson_QuickSightTheme(obj.theme),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeThemeAliasRequest
 */
export interface QuickSightDescribeThemeAliasRequest {
  /**
   * @schema QuickSightDescribeThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeThemeAliasRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightDescribeThemeAliasRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeThemeAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeThemeAliasRequest(obj: QuickSightDescribeThemeAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'AliasName': obj.aliasName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeThemeAliasResponse
 */
export interface QuickSightDescribeThemeAliasResponse {
  /**
   * @schema QuickSightDescribeThemeAliasResponse#ThemeAlias
   */
  readonly themeAlias?: QuickSightThemeAlias;

  /**
   * @schema QuickSightDescribeThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightDescribeThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeThemeAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeThemeAliasResponse(obj: QuickSightDescribeThemeAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeAlias': toJson_QuickSightThemeAlias(obj.themeAlias),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeThemePermissionsRequest
 */
export interface QuickSightDescribeThemePermissionsRequest {
  /**
   * @schema QuickSightDescribeThemePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeThemePermissionsRequest#ThemeId
   */
  readonly themeId?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeThemePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeThemePermissionsRequest(obj: QuickSightDescribeThemePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeThemePermissionsResponse
 */
export interface QuickSightDescribeThemePermissionsResponse {
  /**
   * @schema QuickSightDescribeThemePermissionsResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightDescribeThemePermissionsResponse#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema QuickSightDescribeThemePermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightDescribeThemePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeThemePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeThemePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeThemePermissionsResponse(obj: QuickSightDescribeThemePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeId': obj.themeId,
    'ThemeArn': obj.themeArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeUserRequest
 */
export interface QuickSightDescribeUserRequest {
  /**
   * @schema QuickSightDescribeUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightDescribeUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightDescribeUserRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightDescribeUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeUserRequest(obj: QuickSightDescribeUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDescribeUserResponse
 */
export interface QuickSightDescribeUserResponse {
  /**
   * @schema QuickSightDescribeUserResponse#User
   */
  readonly user?: QuickSightUser;

  /**
   * @schema QuickSightDescribeUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightDescribeUserResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightDescribeUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDescribeUserResponse(obj: QuickSightDescribeUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_QuickSightUser(obj.user),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest
 */
export interface QuickSightGenerateEmbedUrlForAnonymousUserRequest {
  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest#SessionLifetimeInMinutes
   */
  readonly sessionLifetimeInMinutes?: number;

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest#SessionTags
   */
  readonly sessionTags?: QuickSightSessionTag[];

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest#AuthorizedResourceArns
   */
  readonly authorizedResourceArns?: string[];

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserRequest#ExperienceConfiguration
   */
  readonly experienceConfiguration?: QuickSightAnonymousUserEmbeddingExperienceConfiguration;

}

/**
 * Converts an object of type 'QuickSightGenerateEmbedUrlForAnonymousUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGenerateEmbedUrlForAnonymousUserRequest(obj: QuickSightGenerateEmbedUrlForAnonymousUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'SessionLifetimeInMinutes': obj.sessionLifetimeInMinutes,
    'Namespace': obj.namespace,
    'SessionTags': obj.sessionTags?.map(y => toJson_QuickSightSessionTag(y)),
    'AuthorizedResourceArns': obj.authorizedResourceArns?.map(y => y),
    'ExperienceConfiguration': toJson_QuickSightAnonymousUserEmbeddingExperienceConfiguration(obj.experienceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGenerateEmbedUrlForAnonymousUserResponse
 */
export interface QuickSightGenerateEmbedUrlForAnonymousUserResponse {
  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserResponse#EmbedUrl
   */
  readonly embedUrl?: string;

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightGenerateEmbedUrlForAnonymousUserResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightGenerateEmbedUrlForAnonymousUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGenerateEmbedUrlForAnonymousUserResponse(obj: QuickSightGenerateEmbedUrlForAnonymousUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmbedUrl': obj.embedUrl,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGenerateEmbedUrlForRegisteredUserRequest
 */
export interface QuickSightGenerateEmbedUrlForRegisteredUserRequest {
  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserRequest#SessionLifetimeInMinutes
   */
  readonly sessionLifetimeInMinutes?: number;

  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserRequest#ExperienceConfiguration
   */
  readonly experienceConfiguration?: QuickSightRegisteredUserEmbeddingExperienceConfiguration;

}

/**
 * Converts an object of type 'QuickSightGenerateEmbedUrlForRegisteredUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGenerateEmbedUrlForRegisteredUserRequest(obj: QuickSightGenerateEmbedUrlForRegisteredUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'SessionLifetimeInMinutes': obj.sessionLifetimeInMinutes,
    'UserArn': obj.userArn,
    'ExperienceConfiguration': toJson_QuickSightRegisteredUserEmbeddingExperienceConfiguration(obj.experienceConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGenerateEmbedUrlForRegisteredUserResponse
 */
export interface QuickSightGenerateEmbedUrlForRegisteredUserResponse {
  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserResponse#EmbedUrl
   */
  readonly embedUrl?: string;

  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightGenerateEmbedUrlForRegisteredUserResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightGenerateEmbedUrlForRegisteredUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGenerateEmbedUrlForRegisteredUserResponse(obj: QuickSightGenerateEmbedUrlForRegisteredUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmbedUrl': obj.embedUrl,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGetDashboardEmbedUrlRequest
 */
export interface QuickSightGetDashboardEmbedUrlRequest {
  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#SessionLifetimeInMinutes
   */
  readonly sessionLifetimeInMinutes?: number;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#UndoRedoDisabled
   */
  readonly undoRedoDisabled?: boolean;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#ResetDisabled
   */
  readonly resetDisabled?: boolean;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#StatePersistenceEnabled
   */
  readonly statePersistenceEnabled?: boolean;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#AdditionalDashboardIds
   */
  readonly additionalDashboardIds?: string[];

}

/**
 * Converts an object of type 'QuickSightGetDashboardEmbedUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGetDashboardEmbedUrlRequest(obj: QuickSightGetDashboardEmbedUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'IdentityType': obj.identityType,
    'SessionLifetimeInMinutes': obj.sessionLifetimeInMinutes,
    'UndoRedoDisabled': obj.undoRedoDisabled,
    'ResetDisabled': obj.resetDisabled,
    'StatePersistenceEnabled': obj.statePersistenceEnabled,
    'UserArn': obj.userArn,
    'Namespace': obj.namespace,
    'AdditionalDashboardIds': obj.additionalDashboardIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGetDashboardEmbedUrlResponse
 */
export interface QuickSightGetDashboardEmbedUrlResponse {
  /**
   * @schema QuickSightGetDashboardEmbedUrlResponse#EmbedUrl
   */
  readonly embedUrl?: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightGetDashboardEmbedUrlResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightGetDashboardEmbedUrlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGetDashboardEmbedUrlResponse(obj: QuickSightGetDashboardEmbedUrlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmbedUrl': obj.embedUrl,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGetSessionEmbedUrlRequest
 */
export interface QuickSightGetSessionEmbedUrlRequest {
  /**
   * @schema QuickSightGetSessionEmbedUrlRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightGetSessionEmbedUrlRequest#EntryPoint
   */
  readonly entryPoint?: string;

  /**
   * @schema QuickSightGetSessionEmbedUrlRequest#SessionLifetimeInMinutes
   */
  readonly sessionLifetimeInMinutes?: number;

  /**
   * @schema QuickSightGetSessionEmbedUrlRequest#UserArn
   */
  readonly userArn?: string;

}

/**
 * Converts an object of type 'QuickSightGetSessionEmbedUrlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGetSessionEmbedUrlRequest(obj: QuickSightGetSessionEmbedUrlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'EntryPoint': obj.entryPoint,
    'SessionLifetimeInMinutes': obj.sessionLifetimeInMinutes,
    'UserArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGetSessionEmbedUrlResponse
 */
export interface QuickSightGetSessionEmbedUrlResponse {
  /**
   * @schema QuickSightGetSessionEmbedUrlResponse#EmbedUrl
   */
  readonly embedUrl?: string;

  /**
   * @schema QuickSightGetSessionEmbedUrlResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightGetSessionEmbedUrlResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightGetSessionEmbedUrlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGetSessionEmbedUrlResponse(obj: QuickSightGetSessionEmbedUrlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EmbedUrl': obj.embedUrl,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListAnalysesRequest
 */
export interface QuickSightListAnalysesRequest {
  /**
   * @schema QuickSightListAnalysesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListAnalysesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListAnalysesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListAnalysesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListAnalysesRequest(obj: QuickSightListAnalysesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListAnalysesResponse
 */
export interface QuickSightListAnalysesResponse {
  /**
   * @schema QuickSightListAnalysesResponse#AnalysisSummaryList
   */
  readonly analysisSummaryList?: QuickSightAnalysisSummary[];

  /**
   * @schema QuickSightListAnalysesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListAnalysesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListAnalysesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListAnalysesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListAnalysesResponse(obj: QuickSightListAnalysesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisSummaryList': obj.analysisSummaryList?.map(y => toJson_QuickSightAnalysisSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDashboardVersionsRequest
 */
export interface QuickSightListDashboardVersionsRequest {
  /**
   * @schema QuickSightListDashboardVersionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListDashboardVersionsRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightListDashboardVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDashboardVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListDashboardVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDashboardVersionsRequest(obj: QuickSightListDashboardVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDashboardVersionsResponse
 */
export interface QuickSightListDashboardVersionsResponse {
  /**
   * @schema QuickSightListDashboardVersionsResponse#DashboardVersionSummaryList
   */
  readonly dashboardVersionSummaryList?: QuickSightDashboardVersionSummary[];

  /**
   * @schema QuickSightListDashboardVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDashboardVersionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListDashboardVersionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListDashboardVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDashboardVersionsResponse(obj: QuickSightListDashboardVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardVersionSummaryList': obj.dashboardVersionSummaryList?.map(y => toJson_QuickSightDashboardVersionSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDashboardsRequest
 */
export interface QuickSightListDashboardsRequest {
  /**
   * @schema QuickSightListDashboardsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListDashboardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDashboardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListDashboardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDashboardsRequest(obj: QuickSightListDashboardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDashboardsResponse
 */
export interface QuickSightListDashboardsResponse {
  /**
   * @schema QuickSightListDashboardsResponse#DashboardSummaryList
   */
  readonly dashboardSummaryList?: QuickSightDashboardSummary[];

  /**
   * @schema QuickSightListDashboardsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDashboardsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListDashboardsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListDashboardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDashboardsResponse(obj: QuickSightListDashboardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardSummaryList': obj.dashboardSummaryList?.map(y => toJson_QuickSightDashboardSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDataSetsRequest
 */
export interface QuickSightListDataSetsRequest {
  /**
   * @schema QuickSightListDataSetsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListDataSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDataSetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListDataSetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDataSetsRequest(obj: QuickSightListDataSetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDataSetsResponse
 */
export interface QuickSightListDataSetsResponse {
  /**
   * @schema QuickSightListDataSetsResponse#DataSetSummaries
   */
  readonly dataSetSummaries?: QuickSightDataSetSummary[];

  /**
   * @schema QuickSightListDataSetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDataSetsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListDataSetsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListDataSetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDataSetsResponse(obj: QuickSightListDataSetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetSummaries': obj.dataSetSummaries?.map(y => toJson_QuickSightDataSetSummary(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDataSourcesRequest
 */
export interface QuickSightListDataSourcesRequest {
  /**
   * @schema QuickSightListDataSourcesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListDataSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDataSourcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListDataSourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDataSourcesRequest(obj: QuickSightListDataSourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListDataSourcesResponse
 */
export interface QuickSightListDataSourcesResponse {
  /**
   * @schema QuickSightListDataSourcesResponse#DataSources
   */
  readonly dataSources?: QuickSightDataSource[];

  /**
   * @schema QuickSightListDataSourcesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListDataSourcesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListDataSourcesResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListDataSourcesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListDataSourcesResponse(obj: QuickSightListDataSourcesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSources': obj.dataSources?.map(y => toJson_QuickSightDataSource(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListFolderMembersRequest
 */
export interface QuickSightListFolderMembersRequest {
  /**
   * @schema QuickSightListFolderMembersRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListFolderMembersRequest#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightListFolderMembersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListFolderMembersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListFolderMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListFolderMembersRequest(obj: QuickSightListFolderMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListFolderMembersResponse
 */
export interface QuickSightListFolderMembersResponse {
  /**
   * @schema QuickSightListFolderMembersResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListFolderMembersResponse#FolderMemberList
   */
  readonly folderMemberList?: QuickSightMemberIdArnPair[];

  /**
   * @schema QuickSightListFolderMembersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListFolderMembersResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListFolderMembersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListFolderMembersResponse(obj: QuickSightListFolderMembersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FolderMemberList': obj.folderMemberList?.map(y => toJson_QuickSightMemberIdArnPair(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListFoldersRequest
 */
export interface QuickSightListFoldersRequest {
  /**
   * @schema QuickSightListFoldersRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListFoldersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListFoldersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListFoldersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListFoldersRequest(obj: QuickSightListFoldersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListFoldersResponse
 */
export interface QuickSightListFoldersResponse {
  /**
   * @schema QuickSightListFoldersResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListFoldersResponse#FolderSummaryList
   */
  readonly folderSummaryList?: QuickSightFolderSummary[];

  /**
   * @schema QuickSightListFoldersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListFoldersResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListFoldersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListFoldersResponse(obj: QuickSightListFoldersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FolderSummaryList': obj.folderSummaryList?.map(y => toJson_QuickSightFolderSummary(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListGroupMembershipsRequest
 */
export interface QuickSightListGroupMembershipsRequest {
  /**
   * @schema QuickSightListGroupMembershipsRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightListGroupMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListGroupMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QuickSightListGroupMembershipsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListGroupMembershipsRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightListGroupMembershipsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListGroupMembershipsRequest(obj: QuickSightListGroupMembershipsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListGroupMembershipsResponse
 */
export interface QuickSightListGroupMembershipsResponse {
  /**
   * @schema QuickSightListGroupMembershipsResponse#GroupMemberList
   */
  readonly groupMemberList?: QuickSightGroupMember[];

  /**
   * @schema QuickSightListGroupMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListGroupMembershipsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListGroupMembershipsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListGroupMembershipsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListGroupMembershipsResponse(obj: QuickSightListGroupMembershipsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupMemberList': obj.groupMemberList?.map(y => toJson_QuickSightGroupMember(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListGroupsRequest
 */
export interface QuickSightListGroupsRequest {
  /**
   * @schema QuickSightListGroupsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QuickSightListGroupsRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightListGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListGroupsRequest(obj: QuickSightListGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListGroupsResponse
 */
export interface QuickSightListGroupsResponse {
  /**
   * @schema QuickSightListGroupsResponse#GroupList
   */
  readonly groupList?: QuickSightGroup[];

  /**
   * @schema QuickSightListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListGroupsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListGroupsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListGroupsResponse(obj: QuickSightListGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupList': obj.groupList?.map(y => toJson_QuickSightGroup(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListIamPolicyAssignmentsRequest
 */
export interface QuickSightListIamPolicyAssignmentsRequest {
  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListIamPolicyAssignmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListIamPolicyAssignmentsRequest(obj: QuickSightListIamPolicyAssignmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AssignmentStatus': obj.assignmentStatus,
    'Namespace': obj.namespace,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListIamPolicyAssignmentsResponse
 */
export interface QuickSightListIamPolicyAssignmentsResponse {
  /**
   * @schema QuickSightListIamPolicyAssignmentsResponse#IAMPolicyAssignments
   */
  readonly iamPolicyAssignments?: QuickSightIamPolicyAssignmentSummary[];

  /**
   * @schema QuickSightListIamPolicyAssignmentsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListIamPolicyAssignmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListIamPolicyAssignmentsResponse(obj: QuickSightListIamPolicyAssignmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IAMPolicyAssignments': obj.iamPolicyAssignments?.map(y => toJson_QuickSightIamPolicyAssignmentSummary(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListIamPolicyAssignmentsForUserRequest
 */
export interface QuickSightListIamPolicyAssignmentsForUserRequest {
  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightListIamPolicyAssignmentsForUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListIamPolicyAssignmentsForUserRequest(obj: QuickSightListIamPolicyAssignmentsForUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'UserName': obj.userName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListIamPolicyAssignmentsForUserResponse
 */
export interface QuickSightListIamPolicyAssignmentsForUserResponse {
  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserResponse#ActiveAssignments
   */
  readonly activeAssignments?: QuickSightActiveIamPolicyAssignment[];

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListIamPolicyAssignmentsForUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListIamPolicyAssignmentsForUserResponse(obj: QuickSightListIamPolicyAssignmentsForUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ActiveAssignments': obj.activeAssignments?.map(y => toJson_QuickSightActiveIamPolicyAssignment(y)),
    'RequestId': obj.requestId,
    'NextToken': obj.nextToken,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListIngestionsRequest
 */
export interface QuickSightListIngestionsRequest {
  /**
   * @schema QuickSightListIngestionsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightListIngestionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIngestionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListIngestionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListIngestionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListIngestionsRequest(obj: QuickSightListIngestionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetId': obj.dataSetId,
    'NextToken': obj.nextToken,
    'AwsAccountId': obj.awsAccountId,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListIngestionsResponse
 */
export interface QuickSightListIngestionsResponse {
  /**
   * @schema QuickSightListIngestionsResponse#Ingestions
   */
  readonly ingestions?: QuickSightIngestion[];

  /**
   * @schema QuickSightListIngestionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIngestionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListIngestionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListIngestionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListIngestionsResponse(obj: QuickSightListIngestionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ingestions': obj.ingestions?.map(y => toJson_QuickSightIngestion(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListNamespacesRequest
 */
export interface QuickSightListNamespacesRequest {
  /**
   * @schema QuickSightListNamespacesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListNamespacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListNamespacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListNamespacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListNamespacesRequest(obj: QuickSightListNamespacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListNamespacesResponse
 */
export interface QuickSightListNamespacesResponse {
  /**
   * @schema QuickSightListNamespacesResponse#Namespaces
   */
  readonly namespaces?: QuickSightNamespaceInfoV2[];

  /**
   * @schema QuickSightListNamespacesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListNamespacesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListNamespacesResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListNamespacesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListNamespacesResponse(obj: QuickSightListNamespacesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespaces': obj.namespaces?.map(y => toJson_QuickSightNamespaceInfoV2(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTagsForResourceRequest
 */
export interface QuickSightListTagsForResourceRequest {
  /**
   * @schema QuickSightListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'QuickSightListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTagsForResourceRequest(obj: QuickSightListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTagsForResourceResponse
 */
export interface QuickSightListTagsForResourceResponse {
  /**
   * @schema QuickSightListTagsForResourceResponse#Tags
   */
  readonly tags?: QuickSightTag[];

  /**
   * @schema QuickSightListTagsForResourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListTagsForResourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTagsForResourceResponse(obj: QuickSightListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTemplateAliasesRequest
 */
export interface QuickSightListTemplateAliasesRequest {
  /**
   * @schema QuickSightListTemplateAliasesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListTemplateAliasesRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightListTemplateAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListTemplateAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListTemplateAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTemplateAliasesRequest(obj: QuickSightListTemplateAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTemplateAliasesResponse
 */
export interface QuickSightListTemplateAliasesResponse {
  /**
   * @schema QuickSightListTemplateAliasesResponse#TemplateAliasList
   */
  readonly templateAliasList?: QuickSightTemplateAlias[];

  /**
   * @schema QuickSightListTemplateAliasesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListTemplateAliasesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListTemplateAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QuickSightListTemplateAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTemplateAliasesResponse(obj: QuickSightListTemplateAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateAliasList': obj.templateAliasList?.map(y => toJson_QuickSightTemplateAlias(y)),
    'Status': obj.status,
    'RequestId': obj.requestId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTemplateVersionsRequest
 */
export interface QuickSightListTemplateVersionsRequest {
  /**
   * @schema QuickSightListTemplateVersionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListTemplateVersionsRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightListTemplateVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListTemplateVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListTemplateVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTemplateVersionsRequest(obj: QuickSightListTemplateVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTemplateVersionsResponse
 */
export interface QuickSightListTemplateVersionsResponse {
  /**
   * @schema QuickSightListTemplateVersionsResponse#TemplateVersionSummaryList
   */
  readonly templateVersionSummaryList?: QuickSightTemplateVersionSummary[];

  /**
   * @schema QuickSightListTemplateVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListTemplateVersionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListTemplateVersionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListTemplateVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTemplateVersionsResponse(obj: QuickSightListTemplateVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateVersionSummaryList': obj.templateVersionSummaryList?.map(y => toJson_QuickSightTemplateVersionSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTemplatesRequest
 */
export interface QuickSightListTemplatesRequest {
  /**
   * @schema QuickSightListTemplatesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListTemplatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTemplatesRequest(obj: QuickSightListTemplatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListTemplatesResponse
 */
export interface QuickSightListTemplatesResponse {
  /**
   * @schema QuickSightListTemplatesResponse#TemplateSummaryList
   */
  readonly templateSummaryList?: QuickSightTemplateSummary[];

  /**
   * @schema QuickSightListTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListTemplatesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListTemplatesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListTemplatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListTemplatesResponse(obj: QuickSightListTemplatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateSummaryList': obj.templateSummaryList?.map(y => toJson_QuickSightTemplateSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListThemeAliasesRequest
 */
export interface QuickSightListThemeAliasesRequest {
  /**
   * @schema QuickSightListThemeAliasesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListThemeAliasesRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightListThemeAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListThemeAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListThemeAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListThemeAliasesRequest(obj: QuickSightListThemeAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListThemeAliasesResponse
 */
export interface QuickSightListThemeAliasesResponse {
  /**
   * @schema QuickSightListThemeAliasesResponse#ThemeAliasList
   */
  readonly themeAliasList?: QuickSightThemeAlias[];

  /**
   * @schema QuickSightListThemeAliasesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListThemeAliasesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListThemeAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'QuickSightListThemeAliasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListThemeAliasesResponse(obj: QuickSightListThemeAliasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeAliasList': obj.themeAliasList?.map(y => toJson_QuickSightThemeAlias(y)),
    'Status': obj.status,
    'RequestId': obj.requestId,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListThemeVersionsRequest
 */
export interface QuickSightListThemeVersionsRequest {
  /**
   * @schema QuickSightListThemeVersionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListThemeVersionsRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightListThemeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListThemeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListThemeVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListThemeVersionsRequest(obj: QuickSightListThemeVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListThemeVersionsResponse
 */
export interface QuickSightListThemeVersionsResponse {
  /**
   * @schema QuickSightListThemeVersionsResponse#ThemeVersionSummaryList
   */
  readonly themeVersionSummaryList?: QuickSightThemeVersionSummary[];

  /**
   * @schema QuickSightListThemeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListThemeVersionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListThemeVersionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListThemeVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListThemeVersionsResponse(obj: QuickSightListThemeVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeVersionSummaryList': obj.themeVersionSummaryList?.map(y => toJson_QuickSightThemeVersionSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListThemesRequest
 */
export interface QuickSightListThemesRequest {
  /**
   * @schema QuickSightListThemesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListThemesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListThemesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QuickSightListThemesRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'QuickSightListThemesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListThemesRequest(obj: QuickSightListThemesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListThemesResponse
 */
export interface QuickSightListThemesResponse {
  /**
   * @schema QuickSightListThemesResponse#ThemeSummaryList
   */
  readonly themeSummaryList?: QuickSightThemeSummary[];

  /**
   * @schema QuickSightListThemesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListThemesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightListThemesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightListThemesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListThemesResponse(obj: QuickSightListThemesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeSummaryList': obj.themeSummaryList?.map(y => toJson_QuickSightThemeSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListUserGroupsRequest
 */
export interface QuickSightListUserGroupsRequest {
  /**
   * @schema QuickSightListUserGroupsRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightListUserGroupsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListUserGroupsRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightListUserGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListUserGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightListUserGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListUserGroupsRequest(obj: QuickSightListUserGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListUserGroupsResponse
 */
export interface QuickSightListUserGroupsResponse {
  /**
   * @schema QuickSightListUserGroupsResponse#GroupList
   */
  readonly groupList?: QuickSightGroup[];

  /**
   * @schema QuickSightListUserGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListUserGroupsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListUserGroupsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListUserGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListUserGroupsResponse(obj: QuickSightListUserGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupList': obj.groupList?.map(y => toJson_QuickSightGroup(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListUsersRequest
 */
export interface QuickSightListUsersRequest {
  /**
   * @schema QuickSightListUsersRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema QuickSightListUsersRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListUsersRequest(obj: QuickSightListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightListUsersResponse
 */
export interface QuickSightListUsersResponse {
  /**
   * @schema QuickSightListUsersResponse#UserList
   */
  readonly userList?: QuickSightUser[];

  /**
   * @schema QuickSightListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListUsersResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightListUsersResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightListUsersResponse(obj: QuickSightListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserList': obj.userList?.map(y => toJson_QuickSightUser(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRegisterUserRequest
 */
export interface QuickSightRegisterUserRequest {
  /**
   * @schema QuickSightRegisterUserRequest#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema QuickSightRegisterUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema QuickSightRegisterUserRequest#UserRole
   */
  readonly userRole?: string;

  /**
   * @schema QuickSightRegisterUserRequest#IamArn
   */
  readonly iamArn?: string;

  /**
   * @schema QuickSightRegisterUserRequest#SessionName
   */
  readonly sessionName?: string;

  /**
   * @schema QuickSightRegisterUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightRegisterUserRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightRegisterUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightRegisterUserRequest#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

  /**
   * @schema QuickSightRegisterUserRequest#ExternalLoginFederationProviderType
   */
  readonly externalLoginFederationProviderType?: string;

  /**
   * @schema QuickSightRegisterUserRequest#CustomFederationProviderUrl
   */
  readonly customFederationProviderUrl?: string;

  /**
   * @schema QuickSightRegisterUserRequest#ExternalLoginId
   */
  readonly externalLoginId?: string;

}

/**
 * Converts an object of type 'QuickSightRegisterUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRegisterUserRequest(obj: QuickSightRegisterUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityType': obj.identityType,
    'Email': obj.email,
    'UserRole': obj.userRole,
    'IamArn': obj.iamArn,
    'SessionName': obj.sessionName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'UserName': obj.userName,
    'CustomPermissionsName': obj.customPermissionsName,
    'ExternalLoginFederationProviderType': obj.externalLoginFederationProviderType,
    'CustomFederationProviderUrl': obj.customFederationProviderUrl,
    'ExternalLoginId': obj.externalLoginId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRegisterUserResponse
 */
export interface QuickSightRegisterUserResponse {
  /**
   * @schema QuickSightRegisterUserResponse#User
   */
  readonly user?: QuickSightUser;

  /**
   * @schema QuickSightRegisterUserResponse#UserInvitationUrl
   */
  readonly userInvitationUrl?: string;

  /**
   * @schema QuickSightRegisterUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightRegisterUserResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightRegisterUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRegisterUserResponse(obj: QuickSightRegisterUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_QuickSightUser(obj.user),
    'UserInvitationUrl': obj.userInvitationUrl,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRestoreAnalysisRequest
 */
export interface QuickSightRestoreAnalysisRequest {
  /**
   * @schema QuickSightRestoreAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightRestoreAnalysisRequest#AnalysisId
   */
  readonly analysisId?: string;

}

/**
 * Converts an object of type 'QuickSightRestoreAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRestoreAnalysisRequest(obj: QuickSightRestoreAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRestoreAnalysisResponse
 */
export interface QuickSightRestoreAnalysisResponse {
  /**
   * @schema QuickSightRestoreAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightRestoreAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightRestoreAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightRestoreAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightRestoreAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRestoreAnalysisResponse(obj: QuickSightRestoreAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'AnalysisId': obj.analysisId,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSearchAnalysesRequest
 */
export interface QuickSightSearchAnalysesRequest {
  /**
   * @schema QuickSightSearchAnalysesRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightSearchAnalysesRequest#Filters
   */
  readonly filters?: QuickSightAnalysisSearchFilter[];

  /**
   * @schema QuickSightSearchAnalysesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightSearchAnalysesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightSearchAnalysesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSearchAnalysesRequest(obj: QuickSightSearchAnalysesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Filters': obj.filters?.map(y => toJson_QuickSightAnalysisSearchFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSearchAnalysesResponse
 */
export interface QuickSightSearchAnalysesResponse {
  /**
   * @schema QuickSightSearchAnalysesResponse#AnalysisSummaryList
   */
  readonly analysisSummaryList?: QuickSightAnalysisSummary[];

  /**
   * @schema QuickSightSearchAnalysesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightSearchAnalysesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightSearchAnalysesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightSearchAnalysesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSearchAnalysesResponse(obj: QuickSightSearchAnalysesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisSummaryList': obj.analysisSummaryList?.map(y => toJson_QuickSightAnalysisSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSearchDashboardsRequest
 */
export interface QuickSightSearchDashboardsRequest {
  /**
   * @schema QuickSightSearchDashboardsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightSearchDashboardsRequest#Filters
   */
  readonly filters?: QuickSightDashboardSearchFilter[];

  /**
   * @schema QuickSightSearchDashboardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightSearchDashboardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightSearchDashboardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSearchDashboardsRequest(obj: QuickSightSearchDashboardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Filters': obj.filters?.map(y => toJson_QuickSightDashboardSearchFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSearchDashboardsResponse
 */
export interface QuickSightSearchDashboardsResponse {
  /**
   * @schema QuickSightSearchDashboardsResponse#DashboardSummaryList
   */
  readonly dashboardSummaryList?: QuickSightDashboardSummary[];

  /**
   * @schema QuickSightSearchDashboardsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightSearchDashboardsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightSearchDashboardsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightSearchDashboardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSearchDashboardsResponse(obj: QuickSightSearchDashboardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardSummaryList': obj.dashboardSummaryList?.map(y => toJson_QuickSightDashboardSummary(y)),
    'NextToken': obj.nextToken,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSearchFoldersRequest
 */
export interface QuickSightSearchFoldersRequest {
  /**
   * @schema QuickSightSearchFoldersRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightSearchFoldersRequest#Filters
   */
  readonly filters?: QuickSightFolderSearchFilter[];

  /**
   * @schema QuickSightSearchFoldersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightSearchFoldersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'QuickSightSearchFoldersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSearchFoldersRequest(obj: QuickSightSearchFoldersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Filters': obj.filters?.map(y => toJson_QuickSightFolderSearchFilter(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSearchFoldersResponse
 */
export interface QuickSightSearchFoldersResponse {
  /**
   * @schema QuickSightSearchFoldersResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightSearchFoldersResponse#FolderSummaryList
   */
  readonly folderSummaryList?: QuickSightFolderSummary[];

  /**
   * @schema QuickSightSearchFoldersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightSearchFoldersResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightSearchFoldersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSearchFoldersResponse(obj: QuickSightSearchFoldersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'FolderSummaryList': obj.folderSummaryList?.map(y => toJson_QuickSightFolderSummary(y)),
    'NextToken': obj.nextToken,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTagResourceRequest
 */
export interface QuickSightTagResourceRequest {
  /**
   * @schema QuickSightTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema QuickSightTagResourceRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

/**
 * Converts an object of type 'QuickSightTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTagResourceRequest(obj: QuickSightTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_QuickSightTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTagResourceResponse
 */
export interface QuickSightTagResourceResponse {
  /**
   * @schema QuickSightTagResourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightTagResourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTagResourceResponse(obj: QuickSightTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUntagResourceRequest
 */
export interface QuickSightUntagResourceRequest {
  /**
   * @schema QuickSightUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema QuickSightUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'QuickSightUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUntagResourceRequest(obj: QuickSightUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUntagResourceResponse
 */
export interface QuickSightUntagResourceResponse {
  /**
   * @schema QuickSightUntagResourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUntagResourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUntagResourceResponse(obj: QuickSightUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAccountCustomizationRequest
 */
export interface QuickSightUpdateAccountCustomizationRequest {
  /**
   * @schema QuickSightUpdateAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationRequest#AccountCustomization
   */
  readonly accountCustomization?: QuickSightAccountCustomization;

}

/**
 * Converts an object of type 'QuickSightUpdateAccountCustomizationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAccountCustomizationRequest(obj: QuickSightUpdateAccountCustomizationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'AccountCustomization': toJson_QuickSightAccountCustomization(obj.accountCustomization),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAccountCustomizationResponse
 */
export interface QuickSightUpdateAccountCustomizationResponse {
  /**
   * @schema QuickSightUpdateAccountCustomizationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationResponse#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationResponse#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationResponse#AccountCustomization
   */
  readonly accountCustomization?: QuickSightAccountCustomization;

  /**
   * @schema QuickSightUpdateAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateAccountCustomizationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAccountCustomizationResponse(obj: QuickSightUpdateAccountCustomizationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'AccountCustomization': toJson_QuickSightAccountCustomization(obj.accountCustomization),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAccountSettingsRequest
 */
export interface QuickSightUpdateAccountSettingsRequest {
  /**
   * @schema QuickSightUpdateAccountSettingsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateAccountSettingsRequest#DefaultNamespace
   */
  readonly defaultNamespace?: string;

  /**
   * @schema QuickSightUpdateAccountSettingsRequest#NotificationEmail
   */
  readonly notificationEmail?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateAccountSettingsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAccountSettingsRequest(obj: QuickSightUpdateAccountSettingsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DefaultNamespace': obj.defaultNamespace,
    'NotificationEmail': obj.notificationEmail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAccountSettingsResponse
 */
export interface QuickSightUpdateAccountSettingsResponse {
  /**
   * @schema QuickSightUpdateAccountSettingsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateAccountSettingsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateAccountSettingsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAccountSettingsResponse(obj: QuickSightUpdateAccountSettingsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAnalysisRequest
 */
export interface QuickSightUpdateAnalysisRequest {
  /**
   * @schema QuickSightUpdateAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateAnalysisRequest#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightUpdateAnalysisRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightUpdateAnalysisRequest#Parameters
   */
  readonly parameters?: QuickSightParameters;

  /**
   * @schema QuickSightUpdateAnalysisRequest#SourceEntity
   */
  readonly sourceEntity?: QuickSightAnalysisSourceEntity;

  /**
   * @schema QuickSightUpdateAnalysisRequest#ThemeArn
   */
  readonly themeArn?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAnalysisRequest(obj: QuickSightUpdateAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
    'Name': obj.name,
    'Parameters': toJson_QuickSightParameters(obj.parameters),
    'SourceEntity': toJson_QuickSightAnalysisSourceEntity(obj.sourceEntity),
    'ThemeArn': obj.themeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAnalysisResponse
 */
export interface QuickSightUpdateAnalysisResponse {
  /**
   * @schema QuickSightUpdateAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightUpdateAnalysisResponse#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema QuickSightUpdateAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAnalysisResponse(obj: QuickSightUpdateAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AnalysisId': obj.analysisId,
    'UpdateStatus': obj.updateStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAnalysisPermissionsRequest
 */
export interface QuickSightUpdateAnalysisPermissionsRequest {
  /**
   * @schema QuickSightUpdateAnalysisPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateAnalysisPermissionsRequest#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightUpdateAnalysisPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateAnalysisPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateAnalysisPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAnalysisPermissionsRequest(obj: QuickSightUpdateAnalysisPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AnalysisId': obj.analysisId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateAnalysisPermissionsResponse
 */
export interface QuickSightUpdateAnalysisPermissionsResponse {
  /**
   * @schema QuickSightUpdateAnalysisPermissionsResponse#AnalysisArn
   */
  readonly analysisArn?: string;

  /**
   * @schema QuickSightUpdateAnalysisPermissionsResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightUpdateAnalysisPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateAnalysisPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateAnalysisPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateAnalysisPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateAnalysisPermissionsResponse(obj: QuickSightUpdateAnalysisPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisArn': obj.analysisArn,
    'AnalysisId': obj.analysisId,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDashboardRequest
 */
export interface QuickSightUpdateDashboardRequest {
  /**
   * @schema QuickSightUpdateDashboardRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#SourceEntity
   */
  readonly sourceEntity?: QuickSightDashboardSourceEntity;

  /**
   * @schema QuickSightUpdateDashboardRequest#Parameters
   */
  readonly parameters?: QuickSightParameters;

  /**
   * @schema QuickSightUpdateDashboardRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#DashboardPublishOptions
   */
  readonly dashboardPublishOptions?: QuickSightDashboardPublishOptions;

  /**
   * @schema QuickSightUpdateDashboardRequest#ThemeArn
   */
  readonly themeArn?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDashboardRequest(obj: QuickSightUpdateDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'Name': obj.name,
    'SourceEntity': toJson_QuickSightDashboardSourceEntity(obj.sourceEntity),
    'Parameters': toJson_QuickSightParameters(obj.parameters),
    'VersionDescription': obj.versionDescription,
    'DashboardPublishOptions': toJson_QuickSightDashboardPublishOptions(obj.dashboardPublishOptions),
    'ThemeArn': obj.themeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDashboardResponse
 */
export interface QuickSightUpdateDashboardResponse {
  /**
   * @schema QuickSightUpdateDashboardResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateDashboardResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema QuickSightUpdateDashboardResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightUpdateDashboardResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightUpdateDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDashboardResponse(obj: QuickSightUpdateDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'VersionArn': obj.versionArn,
    'DashboardId': obj.dashboardId,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDashboardPermissionsRequest
 */
export interface QuickSightUpdateDashboardPermissionsRequest {
  /**
   * @schema QuickSightUpdateDashboardPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDashboardPermissionsRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightUpdateDashboardPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateDashboardPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateDashboardPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDashboardPermissionsRequest(obj: QuickSightUpdateDashboardPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDashboardPermissionsResponse
 */
export interface QuickSightUpdateDashboardPermissionsResponse {
  /**
   * @schema QuickSightUpdateDashboardPermissionsResponse#DashboardArn
   */
  readonly dashboardArn?: string;

  /**
   * @schema QuickSightUpdateDashboardPermissionsResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightUpdateDashboardPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateDashboardPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateDashboardPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateDashboardPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDashboardPermissionsResponse(obj: QuickSightUpdateDashboardPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardArn': obj.dashboardArn,
    'DashboardId': obj.dashboardId,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDashboardPublishedVersionRequest
 */
export interface QuickSightUpdateDashboardPublishedVersionRequest {
  /**
   * @schema QuickSightUpdateDashboardPublishedVersionRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionRequest#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateDashboardPublishedVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDashboardPublishedVersionRequest(obj: QuickSightUpdateDashboardPublishedVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DashboardId': obj.dashboardId,
    'VersionNumber': obj.versionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDashboardPublishedVersionResponse
 */
export interface QuickSightUpdateDashboardPublishedVersionResponse {
  /**
   * @schema QuickSightUpdateDashboardPublishedVersionResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionResponse#DashboardArn
   */
  readonly dashboardArn?: string;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateDashboardPublishedVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDashboardPublishedVersionResponse(obj: QuickSightUpdateDashboardPublishedVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardId': obj.dashboardId,
    'DashboardArn': obj.dashboardArn,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSetRequest
 */
export interface QuickSightUpdateDataSetRequest {
  /**
   * @schema QuickSightUpdateDataSetRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#PhysicalTableMap
   */
  readonly physicalTableMap?: { [key: string]: QuickSightPhysicalTable };

  /**
   * @schema QuickSightUpdateDataSetRequest#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: QuickSightLogicalTable };

  /**
   * @schema QuickSightUpdateDataSetRequest#ImportMode
   */
  readonly importMode?: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#ColumnGroups
   */
  readonly columnGroups?: QuickSightColumnGroup[];

  /**
   * @schema QuickSightUpdateDataSetRequest#FieldFolders
   */
  readonly fieldFolders?: { [key: string]: QuickSightFieldFolder };

  /**
   * @schema QuickSightUpdateDataSetRequest#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

  /**
   * @schema QuickSightUpdateDataSetRequest#RowLevelPermissionTagConfiguration
   */
  readonly rowLevelPermissionTagConfiguration?: QuickSightRowLevelPermissionTagConfiguration;

  /**
   * @schema QuickSightUpdateDataSetRequest#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: QuickSightColumnLevelPermissionRule[];

}

/**
 * Converts an object of type 'QuickSightUpdateDataSetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSetRequest(obj: QuickSightUpdateDataSetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
    'Name': obj.name,
    'PhysicalTableMap': ((obj.physicalTableMap) === undefined) ? undefined : (Object.entries(obj.physicalTableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightPhysicalTable(i[1]) }), {})),
    'LogicalTableMap': ((obj.logicalTableMap) === undefined) ? undefined : (Object.entries(obj.logicalTableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightLogicalTable(i[1]) }), {})),
    'ImportMode': obj.importMode,
    'ColumnGroups': obj.columnGroups?.map(y => toJson_QuickSightColumnGroup(y)),
    'FieldFolders': ((obj.fieldFolders) === undefined) ? undefined : (Object.entries(obj.fieldFolders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightFieldFolder(i[1]) }), {})),
    'RowLevelPermissionDataSet': toJson_QuickSightRowLevelPermissionDataSet(obj.rowLevelPermissionDataSet),
    'RowLevelPermissionTagConfiguration': toJson_QuickSightRowLevelPermissionTagConfiguration(obj.rowLevelPermissionTagConfiguration),
    'ColumnLevelPermissionRules': obj.columnLevelPermissionRules?.map(y => toJson_QuickSightColumnLevelPermissionRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSetResponse
 */
export interface QuickSightUpdateDataSetResponse {
  /**
   * @schema QuickSightUpdateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateDataSetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightUpdateDataSetResponse#IngestionArn
   */
  readonly ingestionArn?: string;

  /**
   * @schema QuickSightUpdateDataSetResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightUpdateDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateDataSetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSetResponse(obj: QuickSightUpdateDataSetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSetId': obj.dataSetId,
    'IngestionArn': obj.ingestionArn,
    'IngestionId': obj.ingestionId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSetPermissionsRequest
 */
export interface QuickSightUpdateDataSetPermissionsRequest {
  /**
   * @schema QuickSightUpdateDataSetPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDataSetPermissionsRequest#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightUpdateDataSetPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateDataSetPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateDataSetPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSetPermissionsRequest(obj: QuickSightUpdateDataSetPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSetId': obj.dataSetId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSetPermissionsResponse
 */
export interface QuickSightUpdateDataSetPermissionsResponse {
  /**
   * @schema QuickSightUpdateDataSetPermissionsResponse#DataSetArn
   */
  readonly dataSetArn?: string;

  /**
   * @schema QuickSightUpdateDataSetPermissionsResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightUpdateDataSetPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateDataSetPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateDataSetPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSetPermissionsResponse(obj: QuickSightUpdateDataSetPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetArn': obj.dataSetArn,
    'DataSetId': obj.dataSetId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSourceRequest
 */
export interface QuickSightUpdateDataSourceRequest {
  /**
   * @schema QuickSightUpdateDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDataSourceRequest#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightUpdateDataSourceRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightUpdateDataSourceRequest#DataSourceParameters
   */
  readonly dataSourceParameters?: QuickSightDataSourceParameters;

  /**
   * @schema QuickSightUpdateDataSourceRequest#Credentials
   */
  readonly credentials?: QuickSightDataSourceCredentials;

  /**
   * @schema QuickSightUpdateDataSourceRequest#VpcConnectionProperties
   */
  readonly vpcConnectionProperties?: QuickSightVpcConnectionProperties;

  /**
   * @schema QuickSightUpdateDataSourceRequest#SslProperties
   */
  readonly sslProperties?: QuickSightSslProperties;

}

/**
 * Converts an object of type 'QuickSightUpdateDataSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSourceRequest(obj: QuickSightUpdateDataSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSourceId': obj.dataSourceId,
    'Name': obj.name,
    'DataSourceParameters': toJson_QuickSightDataSourceParameters(obj.dataSourceParameters),
    'Credentials': toJson_QuickSightDataSourceCredentials(obj.credentials),
    'VpcConnectionProperties': toJson_QuickSightVpcConnectionProperties(obj.vpcConnectionProperties),
    'SslProperties': toJson_QuickSightSslProperties(obj.sslProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSourceResponse
 */
export interface QuickSightUpdateDataSourceResponse {
  /**
   * @schema QuickSightUpdateDataSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateDataSourceResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightUpdateDataSourceResponse#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema QuickSightUpdateDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateDataSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSourceResponse(obj: QuickSightUpdateDataSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSourceId': obj.dataSourceId,
    'UpdateStatus': obj.updateStatus,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSourcePermissionsRequest
 */
export interface QuickSightUpdateDataSourcePermissionsRequest {
  /**
   * @schema QuickSightUpdateDataSourcePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateDataSourcePermissionsRequest#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightUpdateDataSourcePermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateDataSourcePermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateDataSourcePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSourcePermissionsRequest(obj: QuickSightUpdateDataSourcePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'DataSourceId': obj.dataSourceId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateDataSourcePermissionsResponse
 */
export interface QuickSightUpdateDataSourcePermissionsResponse {
  /**
   * @schema QuickSightUpdateDataSourcePermissionsResponse#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema QuickSightUpdateDataSourcePermissionsResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightUpdateDataSourcePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateDataSourcePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateDataSourcePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateDataSourcePermissionsResponse(obj: QuickSightUpdateDataSourcePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceArn': obj.dataSourceArn,
    'DataSourceId': obj.dataSourceId,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateFolderRequest
 */
export interface QuickSightUpdateFolderRequest {
  /**
   * @schema QuickSightUpdateFolderRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateFolderRequest#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightUpdateFolderRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateFolderRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateFolderRequest(obj: QuickSightUpdateFolderRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateFolderResponse
 */
export interface QuickSightUpdateFolderResponse {
  /**
   * @schema QuickSightUpdateFolderResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateFolderResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateFolderResponse#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightUpdateFolderResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateFolderResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateFolderResponse(obj: QuickSightUpdateFolderResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'FolderId': obj.folderId,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateFolderPermissionsRequest
 */
export interface QuickSightUpdateFolderPermissionsRequest {
  /**
   * @schema QuickSightUpdateFolderPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateFolderPermissionsRequest#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightUpdateFolderPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateFolderPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateFolderPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateFolderPermissionsRequest(obj: QuickSightUpdateFolderPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'FolderId': obj.folderId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateFolderPermissionsResponse
 */
export interface QuickSightUpdateFolderPermissionsResponse {
  /**
   * @schema QuickSightUpdateFolderPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateFolderPermissionsResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateFolderPermissionsResponse#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightUpdateFolderPermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateFolderPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateFolderPermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateFolderPermissionsResponse(obj: QuickSightUpdateFolderPermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'Arn': obj.arn,
    'FolderId': obj.folderId,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateGroupRequest
 */
export interface QuickSightUpdateGroupRequest {
  /**
   * @schema QuickSightUpdateGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightUpdateGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightUpdateGroupRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateGroupRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateGroupRequest(obj: QuickSightUpdateGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Description': obj.description,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateGroupResponse
 */
export interface QuickSightUpdateGroupResponse {
  /**
   * @schema QuickSightUpdateGroupResponse#Group
   */
  readonly group?: QuickSightGroup;

  /**
   * @schema QuickSightUpdateGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateGroupResponse(obj: QuickSightUpdateGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_QuickSightGroup(obj.group),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateIamPolicyAssignmentRequest
 */
export interface QuickSightUpdateIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#Identities
   */
  readonly identities?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'QuickSightUpdateIamPolicyAssignmentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateIamPolicyAssignmentRequest(obj: QuickSightUpdateIamPolicyAssignmentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AssignmentName': obj.assignmentName,
    'Namespace': obj.namespace,
    'AssignmentStatus': obj.assignmentStatus,
    'PolicyArn': obj.policyArn,
    'Identities': ((obj.identities) === undefined) ? undefined : (Object.entries(obj.identities).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateIamPolicyAssignmentResponse
 */
export interface QuickSightUpdateIamPolicyAssignmentResponse {
  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#AssignmentId
   */
  readonly assignmentId?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateIamPolicyAssignmentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateIamPolicyAssignmentResponse(obj: QuickSightUpdateIamPolicyAssignmentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignmentName': obj.assignmentName,
    'AssignmentId': obj.assignmentId,
    'PolicyArn': obj.policyArn,
    'Identities': ((obj.identities) === undefined) ? undefined : (Object.entries(obj.identities).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'AssignmentStatus': obj.assignmentStatus,
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateTemplateRequest
 */
export interface QuickSightUpdateTemplateRequest {
  /**
   * @schema QuickSightUpdateTemplateRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateTemplateRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightUpdateTemplateRequest#SourceEntity
   */
  readonly sourceEntity?: QuickSightTemplateSourceEntity;

  /**
   * @schema QuickSightUpdateTemplateRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema QuickSightUpdateTemplateRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateTemplateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateTemplateRequest(obj: QuickSightUpdateTemplateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'SourceEntity': toJson_QuickSightTemplateSourceEntity(obj.sourceEntity),
    'VersionDescription': obj.versionDescription,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateTemplateResponse
 */
export interface QuickSightUpdateTemplateResponse {
  /**
   * @schema QuickSightUpdateTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightUpdateTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateTemplateResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema QuickSightUpdateTemplateResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightUpdateTemplateResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateTemplateResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateTemplateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateTemplateResponse(obj: QuickSightUpdateTemplateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateId': obj.templateId,
    'Arn': obj.arn,
    'VersionArn': obj.versionArn,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateTemplateAliasRequest
 */
export interface QuickSightUpdateTemplateAliasRequest {
  /**
   * @schema QuickSightUpdateTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateTemplateAliasRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightUpdateTemplateAliasRequest#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightUpdateTemplateAliasRequest#TemplateVersionNumber
   */
  readonly templateVersionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateTemplateAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateTemplateAliasRequest(obj: QuickSightUpdateTemplateAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'AliasName': obj.aliasName,
    'TemplateVersionNumber': obj.templateVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateTemplateAliasResponse
 */
export interface QuickSightUpdateTemplateAliasResponse {
  /**
   * @schema QuickSightUpdateTemplateAliasResponse#TemplateAlias
   */
  readonly templateAlias?: QuickSightTemplateAlias;

  /**
   * @schema QuickSightUpdateTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateTemplateAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateTemplateAliasResponse(obj: QuickSightUpdateTemplateAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateAlias': toJson_QuickSightTemplateAlias(obj.templateAlias),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateTemplatePermissionsRequest
 */
export interface QuickSightUpdateTemplatePermissionsRequest {
  /**
   * @schema QuickSightUpdateTemplatePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateTemplatePermissionsRequest#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightUpdateTemplatePermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateTemplatePermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateTemplatePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateTemplatePermissionsRequest(obj: QuickSightUpdateTemplatePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'TemplateId': obj.templateId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateTemplatePermissionsResponse
 */
export interface QuickSightUpdateTemplatePermissionsResponse {
  /**
   * @schema QuickSightUpdateTemplatePermissionsResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightUpdateTemplatePermissionsResponse#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema QuickSightUpdateTemplatePermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateTemplatePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateTemplatePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateTemplatePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateTemplatePermissionsResponse(obj: QuickSightUpdateTemplatePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateId': obj.templateId,
    'TemplateArn': obj.templateArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateThemeRequest
 */
export interface QuickSightUpdateThemeRequest {
  /**
   * @schema QuickSightUpdateThemeRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateThemeRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightUpdateThemeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightUpdateThemeRequest#BaseThemeId
   */
  readonly baseThemeId?: string;

  /**
   * @schema QuickSightUpdateThemeRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema QuickSightUpdateThemeRequest#Configuration
   */
  readonly configuration?: QuickSightThemeConfiguration;

}

/**
 * Converts an object of type 'QuickSightUpdateThemeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateThemeRequest(obj: QuickSightUpdateThemeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'Name': obj.name,
    'BaseThemeId': obj.baseThemeId,
    'VersionDescription': obj.versionDescription,
    'Configuration': toJson_QuickSightThemeConfiguration(obj.configuration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateThemeResponse
 */
export interface QuickSightUpdateThemeResponse {
  /**
   * @schema QuickSightUpdateThemeResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightUpdateThemeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUpdateThemeResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema QuickSightUpdateThemeResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightUpdateThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateThemeResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateThemeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateThemeResponse(obj: QuickSightUpdateThemeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeId': obj.themeId,
    'Arn': obj.arn,
    'VersionArn': obj.versionArn,
    'CreationStatus': obj.creationStatus,
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateThemeAliasRequest
 */
export interface QuickSightUpdateThemeAliasRequest {
  /**
   * @schema QuickSightUpdateThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateThemeAliasRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightUpdateThemeAliasRequest#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightUpdateThemeAliasRequest#ThemeVersionNumber
   */
  readonly themeVersionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateThemeAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateThemeAliasRequest(obj: QuickSightUpdateThemeAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'AliasName': obj.aliasName,
    'ThemeVersionNumber': obj.themeVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateThemeAliasResponse
 */
export interface QuickSightUpdateThemeAliasResponse {
  /**
   * @schema QuickSightUpdateThemeAliasResponse#ThemeAlias
   */
  readonly themeAlias?: QuickSightThemeAlias;

  /**
   * @schema QuickSightUpdateThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema QuickSightUpdateThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateThemeAliasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateThemeAliasResponse(obj: QuickSightUpdateThemeAliasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeAlias': toJson_QuickSightThemeAlias(obj.themeAlias),
    'Status': obj.status,
    'RequestId': obj.requestId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateThemePermissionsRequest
 */
export interface QuickSightUpdateThemePermissionsRequest {
  /**
   * @schema QuickSightUpdateThemePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateThemePermissionsRequest#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightUpdateThemePermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateThemePermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: QuickSightResourcePermission[];

}

/**
 * Converts an object of type 'QuickSightUpdateThemePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateThemePermissionsRequest(obj: QuickSightUpdateThemePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'ThemeId': obj.themeId,
    'GrantPermissions': obj.grantPermissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RevokePermissions': obj.revokePermissions?.map(y => toJson_QuickSightResourcePermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateThemePermissionsResponse
 */
export interface QuickSightUpdateThemePermissionsResponse {
  /**
   * @schema QuickSightUpdateThemePermissionsResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightUpdateThemePermissionsResponse#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema QuickSightUpdateThemePermissionsResponse#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightUpdateThemePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateThemePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateThemePermissionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateThemePermissionsResponse(obj: QuickSightUpdateThemePermissionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ThemeId': obj.themeId,
    'ThemeArn': obj.themeArn,
    'Permissions': obj.permissions?.map(y => toJson_QuickSightResourcePermission(y)),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateUserRequest
 */
export interface QuickSightUpdateUserRequest {
  /**
   * @schema QuickSightUpdateUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightUpdateUserRequest#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightUpdateUserRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightUpdateUserRequest#Email
   */
  readonly email?: string;

  /**
   * @schema QuickSightUpdateUserRequest#Role
   */
  readonly role?: string;

  /**
   * @schema QuickSightUpdateUserRequest#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

  /**
   * @schema QuickSightUpdateUserRequest#UnapplyCustomPermissions
   */
  readonly unapplyCustomPermissions?: boolean;

  /**
   * @schema QuickSightUpdateUserRequest#ExternalLoginFederationProviderType
   */
  readonly externalLoginFederationProviderType?: string;

  /**
   * @schema QuickSightUpdateUserRequest#CustomFederationProviderUrl
   */
  readonly customFederationProviderUrl?: string;

  /**
   * @schema QuickSightUpdateUserRequest#ExternalLoginId
   */
  readonly externalLoginId?: string;

}

/**
 * Converts an object of type 'QuickSightUpdateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateUserRequest(obj: QuickSightUpdateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserName': obj.userName,
    'AwsAccountId': obj.awsAccountId,
    'Namespace': obj.namespace,
    'Email': obj.email,
    'Role': obj.role,
    'CustomPermissionsName': obj.customPermissionsName,
    'UnapplyCustomPermissions': obj.unapplyCustomPermissions,
    'ExternalLoginFederationProviderType': obj.externalLoginFederationProviderType,
    'CustomFederationProviderUrl': obj.customFederationProviderUrl,
    'ExternalLoginId': obj.externalLoginId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUpdateUserResponse
 */
export interface QuickSightUpdateUserResponse {
  /**
   * @schema QuickSightUpdateUserResponse#User
   */
  readonly user?: QuickSightUser;

  /**
   * @schema QuickSightUpdateUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema QuickSightUpdateUserResponse#Status
   */
  readonly status?: number;

}

/**
 * Converts an object of type 'QuickSightUpdateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUpdateUserResponse(obj: QuickSightUpdateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_QuickSightUser(obj.user),
    'RequestId': obj.requestId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAccountCustomization
 */
export interface QuickSightAccountCustomization {
  /**
   * @schema QuickSightAccountCustomization#DefaultTheme
   */
  readonly defaultTheme?: string;

}

/**
 * Converts an object of type 'QuickSightAccountCustomization' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAccountCustomization(obj: QuickSightAccountCustomization | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DefaultTheme': obj.defaultTheme,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTag
 */
export interface QuickSightTag {
  /**
   * @schema QuickSightTag#Key
   */
  readonly key?: string;

  /**
   * @schema QuickSightTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'QuickSightTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTag(obj: QuickSightTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightParameters
 */
export interface QuickSightParameters {
  /**
   * @schema QuickSightParameters#StringParameters
   */
  readonly stringParameters?: QuickSightStringParameter[];

  /**
   * @schema QuickSightParameters#IntegerParameters
   */
  readonly integerParameters?: QuickSightIntegerParameter[];

  /**
   * @schema QuickSightParameters#DecimalParameters
   */
  readonly decimalParameters?: QuickSightDecimalParameter[];

  /**
   * @schema QuickSightParameters#DateTimeParameters
   */
  readonly dateTimeParameters?: QuickSightDateTimeParameter[];

}

/**
 * Converts an object of type 'QuickSightParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightParameters(obj: QuickSightParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StringParameters': obj.stringParameters?.map(y => toJson_QuickSightStringParameter(y)),
    'IntegerParameters': obj.integerParameters?.map(y => toJson_QuickSightIntegerParameter(y)),
    'DecimalParameters': obj.decimalParameters?.map(y => toJson_QuickSightDecimalParameter(y)),
    'DateTimeParameters': obj.dateTimeParameters?.map(y => toJson_QuickSightDateTimeParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightResourcePermission
 */
export interface QuickSightResourcePermission {
  /**
   * @schema QuickSightResourcePermission#Principal
   */
  readonly principal?: string;

  /**
   * @schema QuickSightResourcePermission#Actions
   */
  readonly actions?: string[];

}

/**
 * Converts an object of type 'QuickSightResourcePermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightResourcePermission(obj: QuickSightResourcePermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principal': obj.principal,
    'Actions': obj.actions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnalysisSourceEntity
 */
export interface QuickSightAnalysisSourceEntity {
  /**
   * @schema QuickSightAnalysisSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: QuickSightAnalysisSourceTemplate;

}

/**
 * Converts an object of type 'QuickSightAnalysisSourceEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnalysisSourceEntity(obj: QuickSightAnalysisSourceEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceTemplate': toJson_QuickSightAnalysisSourceTemplate(obj.sourceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardSourceEntity
 */
export interface QuickSightDashboardSourceEntity {
  /**
   * @schema QuickSightDashboardSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: QuickSightDashboardSourceTemplate;

}

/**
 * Converts an object of type 'QuickSightDashboardSourceEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardSourceEntity(obj: QuickSightDashboardSourceEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceTemplate': toJson_QuickSightDashboardSourceTemplate(obj.sourceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardPublishOptions
 */
export interface QuickSightDashboardPublishOptions {
  /**
   * @schema QuickSightDashboardPublishOptions#AdHocFilteringOption
   */
  readonly adHocFilteringOption?: QuickSightAdHocFilteringOption;

  /**
   * @schema QuickSightDashboardPublishOptions#ExportToCSVOption
   */
  readonly exportToCsvOption?: QuickSightExportToCsvOption;

  /**
   * @schema QuickSightDashboardPublishOptions#SheetControlsOption
   */
  readonly sheetControlsOption?: QuickSightSheetControlsOption;

}

/**
 * Converts an object of type 'QuickSightDashboardPublishOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardPublishOptions(obj: QuickSightDashboardPublishOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AdHocFilteringOption': toJson_QuickSightAdHocFilteringOption(obj.adHocFilteringOption),
    'ExportToCSVOption': toJson_QuickSightExportToCsvOption(obj.exportToCsvOption),
    'SheetControlsOption': toJson_QuickSightSheetControlsOption(obj.sheetControlsOption),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightPhysicalTable
 */
export interface QuickSightPhysicalTable {
  /**
   * @schema QuickSightPhysicalTable#RelationalTable
   */
  readonly relationalTable?: QuickSightRelationalTable;

  /**
   * @schema QuickSightPhysicalTable#CustomSql
   */
  readonly customSql?: QuickSightCustomSql;

  /**
   * @schema QuickSightPhysicalTable#S3Source
   */
  readonly s3Source?: QuickSightS3Source;

}

/**
 * Converts an object of type 'QuickSightPhysicalTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightPhysicalTable(obj: QuickSightPhysicalTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RelationalTable': toJson_QuickSightRelationalTable(obj.relationalTable),
    'CustomSql': toJson_QuickSightCustomSql(obj.customSql),
    'S3Source': toJson_QuickSightS3Source(obj.s3Source),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightLogicalTable
 */
export interface QuickSightLogicalTable {
  /**
   * @schema QuickSightLogicalTable#Alias
   */
  readonly alias?: string;

  /**
   * @schema QuickSightLogicalTable#DataTransforms
   */
  readonly dataTransforms?: QuickSightTransformOperation[];

  /**
   * @schema QuickSightLogicalTable#Source
   */
  readonly source?: QuickSightLogicalTableSource;

}

/**
 * Converts an object of type 'QuickSightLogicalTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightLogicalTable(obj: QuickSightLogicalTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Alias': obj.alias,
    'DataTransforms': obj.dataTransforms?.map(y => toJson_QuickSightTransformOperation(y)),
    'Source': toJson_QuickSightLogicalTableSource(obj.source),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnGroup
 */
export interface QuickSightColumnGroup {
  /**
   * @schema QuickSightColumnGroup#GeoSpatialColumnGroup
   */
  readonly geoSpatialColumnGroup?: QuickSightGeoSpatialColumnGroup;

}

/**
 * Converts an object of type 'QuickSightColumnGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnGroup(obj: QuickSightColumnGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GeoSpatialColumnGroup': toJson_QuickSightGeoSpatialColumnGroup(obj.geoSpatialColumnGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightFieldFolder
 */
export interface QuickSightFieldFolder {
  /**
   * @schema QuickSightFieldFolder#description
   */
  readonly description?: string;

  /**
   * @schema QuickSightFieldFolder#columns
   */
  readonly columns?: string[];

}

/**
 * Converts an object of type 'QuickSightFieldFolder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightFieldFolder(obj: QuickSightFieldFolder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'columns': obj.columns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRowLevelPermissionDataSet
 */
export interface QuickSightRowLevelPermissionDataSet {
  /**
   * @schema QuickSightRowLevelPermissionDataSet#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightRowLevelPermissionDataSet#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightRowLevelPermissionDataSet#PermissionPolicy
   */
  readonly permissionPolicy?: string;

  /**
   * @schema QuickSightRowLevelPermissionDataSet#FormatVersion
   */
  readonly formatVersion?: string;

  /**
   * @schema QuickSightRowLevelPermissionDataSet#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'QuickSightRowLevelPermissionDataSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRowLevelPermissionDataSet(obj: QuickSightRowLevelPermissionDataSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Namespace': obj.namespace,
    'Arn': obj.arn,
    'PermissionPolicy': obj.permissionPolicy,
    'FormatVersion': obj.formatVersion,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRowLevelPermissionTagConfiguration
 */
export interface QuickSightRowLevelPermissionTagConfiguration {
  /**
   * @schema QuickSightRowLevelPermissionTagConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightRowLevelPermissionTagConfiguration#TagRules
   */
  readonly tagRules?: QuickSightRowLevelPermissionTagRule[];

}

/**
 * Converts an object of type 'QuickSightRowLevelPermissionTagConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRowLevelPermissionTagConfiguration(obj: QuickSightRowLevelPermissionTagConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'TagRules': obj.tagRules?.map(y => toJson_QuickSightRowLevelPermissionTagRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnLevelPermissionRule
 */
export interface QuickSightColumnLevelPermissionRule {
  /**
   * @schema QuickSightColumnLevelPermissionRule#Principals
   */
  readonly principals?: string[];

  /**
   * @schema QuickSightColumnLevelPermissionRule#ColumnNames
   */
  readonly columnNames?: string[];

}

/**
 * Converts an object of type 'QuickSightColumnLevelPermissionRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnLevelPermissionRule(obj: QuickSightColumnLevelPermissionRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Principals': obj.principals?.map(y => y),
    'ColumnNames': obj.columnNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSourceParameters
 */
export interface QuickSightDataSourceParameters {
  /**
   * @schema QuickSightDataSourceParameters#AmazonElasticsearchParameters
   */
  readonly amazonElasticsearchParameters?: QuickSightAmazonElasticsearchParameters;

  /**
   * @schema QuickSightDataSourceParameters#AthenaParameters
   */
  readonly athenaParameters?: QuickSightAthenaParameters;

  /**
   * @schema QuickSightDataSourceParameters#AuroraParameters
   */
  readonly auroraParameters?: QuickSightAuroraParameters;

  /**
   * @schema QuickSightDataSourceParameters#AuroraPostgreSqlParameters
   */
  readonly auroraPostgreSqlParameters?: QuickSightAuroraPostgreSqlParameters;

  /**
   * @schema QuickSightDataSourceParameters#AwsIotAnalyticsParameters
   */
  readonly awsIotAnalyticsParameters?: QuickSightAwsIotAnalyticsParameters;

  /**
   * @schema QuickSightDataSourceParameters#JiraParameters
   */
  readonly jiraParameters?: QuickSightJiraParameters;

  /**
   * @schema QuickSightDataSourceParameters#MariaDbParameters
   */
  readonly mariaDbParameters?: QuickSightMariaDbParameters;

  /**
   * @schema QuickSightDataSourceParameters#MySqlParameters
   */
  readonly mySqlParameters?: QuickSightMySqlParameters;

  /**
   * @schema QuickSightDataSourceParameters#OracleParameters
   */
  readonly oracleParameters?: QuickSightOracleParameters;

  /**
   * @schema QuickSightDataSourceParameters#PostgreSqlParameters
   */
  readonly postgreSqlParameters?: QuickSightPostgreSqlParameters;

  /**
   * @schema QuickSightDataSourceParameters#PrestoParameters
   */
  readonly prestoParameters?: QuickSightPrestoParameters;

  /**
   * @schema QuickSightDataSourceParameters#RdsParameters
   */
  readonly rdsParameters?: QuickSightRdsParameters;

  /**
   * @schema QuickSightDataSourceParameters#RedshiftParameters
   */
  readonly redshiftParameters?: QuickSightRedshiftParameters;

  /**
   * @schema QuickSightDataSourceParameters#S3Parameters
   */
  readonly s3Parameters?: QuickSightS3Parameters;

  /**
   * @schema QuickSightDataSourceParameters#ServiceNowParameters
   */
  readonly serviceNowParameters?: QuickSightServiceNowParameters;

  /**
   * @schema QuickSightDataSourceParameters#SnowflakeParameters
   */
  readonly snowflakeParameters?: QuickSightSnowflakeParameters;

  /**
   * @schema QuickSightDataSourceParameters#SparkParameters
   */
  readonly sparkParameters?: QuickSightSparkParameters;

  /**
   * @schema QuickSightDataSourceParameters#SqlServerParameters
   */
  readonly sqlServerParameters?: QuickSightSqlServerParameters;

  /**
   * @schema QuickSightDataSourceParameters#TeradataParameters
   */
  readonly teradataParameters?: QuickSightTeradataParameters;

  /**
   * @schema QuickSightDataSourceParameters#TwitterParameters
   */
  readonly twitterParameters?: QuickSightTwitterParameters;

}

/**
 * Converts an object of type 'QuickSightDataSourceParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSourceParameters(obj: QuickSightDataSourceParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AmazonElasticsearchParameters': toJson_QuickSightAmazonElasticsearchParameters(obj.amazonElasticsearchParameters),
    'AthenaParameters': toJson_QuickSightAthenaParameters(obj.athenaParameters),
    'AuroraParameters': toJson_QuickSightAuroraParameters(obj.auroraParameters),
    'AuroraPostgreSqlParameters': toJson_QuickSightAuroraPostgreSqlParameters(obj.auroraPostgreSqlParameters),
    'AwsIotAnalyticsParameters': toJson_QuickSightAwsIotAnalyticsParameters(obj.awsIotAnalyticsParameters),
    'JiraParameters': toJson_QuickSightJiraParameters(obj.jiraParameters),
    'MariaDbParameters': toJson_QuickSightMariaDbParameters(obj.mariaDbParameters),
    'MySqlParameters': toJson_QuickSightMySqlParameters(obj.mySqlParameters),
    'OracleParameters': toJson_QuickSightOracleParameters(obj.oracleParameters),
    'PostgreSqlParameters': toJson_QuickSightPostgreSqlParameters(obj.postgreSqlParameters),
    'PrestoParameters': toJson_QuickSightPrestoParameters(obj.prestoParameters),
    'RdsParameters': toJson_QuickSightRdsParameters(obj.rdsParameters),
    'RedshiftParameters': toJson_QuickSightRedshiftParameters(obj.redshiftParameters),
    'S3Parameters': toJson_QuickSightS3Parameters(obj.s3Parameters),
    'ServiceNowParameters': toJson_QuickSightServiceNowParameters(obj.serviceNowParameters),
    'SnowflakeParameters': toJson_QuickSightSnowflakeParameters(obj.snowflakeParameters),
    'SparkParameters': toJson_QuickSightSparkParameters(obj.sparkParameters),
    'SqlServerParameters': toJson_QuickSightSqlServerParameters(obj.sqlServerParameters),
    'TeradataParameters': toJson_QuickSightTeradataParameters(obj.teradataParameters),
    'TwitterParameters': toJson_QuickSightTwitterParameters(obj.twitterParameters),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSourceCredentials
 */
export interface QuickSightDataSourceCredentials {
  /**
   * @schema QuickSightDataSourceCredentials#CredentialPair
   */
  readonly credentialPair?: QuickSightCredentialPair;

  /**
   * @schema QuickSightDataSourceCredentials#CopySourceArn
   */
  readonly copySourceArn?: string;

}

/**
 * Converts an object of type 'QuickSightDataSourceCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSourceCredentials(obj: QuickSightDataSourceCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CredentialPair': toJson_QuickSightCredentialPair(obj.credentialPair),
    'CopySourceArn': obj.copySourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightVpcConnectionProperties
 */
export interface QuickSightVpcConnectionProperties {
  /**
   * @schema QuickSightVpcConnectionProperties#VpcConnectionArn
   */
  readonly vpcConnectionArn?: string;

}

/**
 * Converts an object of type 'QuickSightVpcConnectionProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightVpcConnectionProperties(obj: QuickSightVpcConnectionProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VpcConnectionArn': obj.vpcConnectionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSslProperties
 */
export interface QuickSightSslProperties {
  /**
   * @schema QuickSightSslProperties#DisableSsl
   */
  readonly disableSsl?: boolean;

}

/**
 * Converts an object of type 'QuickSightSslProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSslProperties(obj: QuickSightSslProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisableSsl': obj.disableSsl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightFolderMember
 */
export interface QuickSightFolderMember {
  /**
   * @schema QuickSightFolderMember#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema QuickSightFolderMember#MemberType
   */
  readonly memberType?: string;

}

/**
 * Converts an object of type 'QuickSightFolderMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightFolderMember(obj: QuickSightFolderMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
    'MemberType': obj.memberType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGroup
 */
export interface QuickSightGroup {
  /**
   * @schema QuickSightGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightGroup#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema QuickSightGroup#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightGroup#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * Converts an object of type 'QuickSightGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGroup(obj: QuickSightGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'GroupName': obj.groupName,
    'Description': obj.description,
    'PrincipalId': obj.principalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGroupMember
 */
export interface QuickSightGroupMember {
  /**
   * @schema QuickSightGroupMember#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightGroupMember#MemberName
   */
  readonly memberName?: string;

}

/**
 * Converts an object of type 'QuickSightGroupMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGroupMember(obj: QuickSightGroupMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'MemberName': obj.memberName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateSourceEntity
 */
export interface QuickSightTemplateSourceEntity {
  /**
   * @schema QuickSightTemplateSourceEntity#SourceAnalysis
   */
  readonly sourceAnalysis?: QuickSightTemplateSourceAnalysis;

  /**
   * @schema QuickSightTemplateSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: QuickSightTemplateSourceTemplate;

}

/**
 * Converts an object of type 'QuickSightTemplateSourceEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateSourceEntity(obj: QuickSightTemplateSourceEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceAnalysis': toJson_QuickSightTemplateSourceAnalysis(obj.sourceAnalysis),
    'SourceTemplate': toJson_QuickSightTemplateSourceTemplate(obj.sourceTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateAlias
 */
export interface QuickSightTemplateAlias {
  /**
   * @schema QuickSightTemplateAlias#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightTemplateAlias#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightTemplateAlias#TemplateVersionNumber
   */
  readonly templateVersionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightTemplateAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateAlias(obj: QuickSightTemplateAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasName': obj.aliasName,
    'Arn': obj.arn,
    'TemplateVersionNumber': obj.templateVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightThemeConfiguration
 */
export interface QuickSightThemeConfiguration {
  /**
   * @schema QuickSightThemeConfiguration#DataColorPalette
   */
  readonly dataColorPalette?: QuickSightDataColorPalette;

  /**
   * @schema QuickSightThemeConfiguration#UIColorPalette
   */
  readonly uiColorPalette?: QuickSightUiColorPalette;

  /**
   * @schema QuickSightThemeConfiguration#Sheet
   */
  readonly sheet?: QuickSightSheetStyle;

}

/**
 * Converts an object of type 'QuickSightThemeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightThemeConfiguration(obj: QuickSightThemeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataColorPalette': toJson_QuickSightDataColorPalette(obj.dataColorPalette),
    'UIColorPalette': toJson_QuickSightUiColorPalette(obj.uiColorPalette),
    'Sheet': toJson_QuickSightSheetStyle(obj.sheet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightThemeAlias
 */
export interface QuickSightThemeAlias {
  /**
   * @schema QuickSightThemeAlias#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightThemeAlias#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema QuickSightThemeAlias#ThemeVersionNumber
   */
  readonly themeVersionNumber?: number;

}

/**
 * Converts an object of type 'QuickSightThemeAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightThemeAlias(obj: QuickSightThemeAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AliasName': obj.aliasName,
    'ThemeVersionNumber': obj.themeVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAccountSettings
 */
export interface QuickSightAccountSettings {
  /**
   * @schema QuickSightAccountSettings#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema QuickSightAccountSettings#Edition
   */
  readonly edition?: string;

  /**
   * @schema QuickSightAccountSettings#DefaultNamespace
   */
  readonly defaultNamespace?: string;

  /**
   * @schema QuickSightAccountSettings#NotificationEmail
   */
  readonly notificationEmail?: string;

}

/**
 * Converts an object of type 'QuickSightAccountSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAccountSettings(obj: QuickSightAccountSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountName': obj.accountName,
    'Edition': obj.edition,
    'DefaultNamespace': obj.defaultNamespace,
    'NotificationEmail': obj.notificationEmail,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnalysis
 */
export interface QuickSightAnalysis {
  /**
   * @schema QuickSightAnalysis#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightAnalysis#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightAnalysis#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightAnalysis#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightAnalysis#Errors
   */
  readonly errors?: QuickSightAnalysisError[];

  /**
   * @schema QuickSightAnalysis#DataSetArns
   */
  readonly dataSetArns?: string[];

  /**
   * @schema QuickSightAnalysis#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema QuickSightAnalysis#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightAnalysis#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightAnalysis#Sheets
   */
  readonly sheets?: QuickSightSheet[];

}

/**
 * Converts an object of type 'QuickSightAnalysis' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnalysis(obj: QuickSightAnalysis | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AnalysisId': obj.analysisId,
    'Arn': obj.arn,
    'Name': obj.name,
    'Status': obj.status,
    'Errors': obj.errors?.map(y => toJson_QuickSightAnalysisError(y)),
    'DataSetArns': obj.dataSetArns?.map(y => y),
    'ThemeArn': obj.themeArn,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'Sheets': obj.sheets?.map(y => toJson_QuickSightSheet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboard
 */
export interface QuickSightDashboard {
  /**
   * @schema QuickSightDashboard#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightDashboard#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDashboard#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDashboard#Version
   */
  readonly version?: QuickSightDashboardVersion;

  /**
   * @schema QuickSightDashboard#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDashboard#LastPublishedTime
   */
  readonly lastPublishedTime?: string;

  /**
   * @schema QuickSightDashboard#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'QuickSightDashboard' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboard(obj: QuickSightDashboard | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DashboardId': obj.dashboardId,
    'Arn': obj.arn,
    'Name': obj.name,
    'Version': toJson_QuickSightDashboardVersion(obj.version),
    'CreatedTime': obj.createdTime,
    'LastPublishedTime': obj.lastPublishedTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSet
 */
export interface QuickSightDataSet {
  /**
   * @schema QuickSightDataSet#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDataSet#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightDataSet#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDataSet#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDataSet#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightDataSet#PhysicalTableMap
   */
  readonly physicalTableMap?: { [key: string]: QuickSightPhysicalTable };

  /**
   * @schema QuickSightDataSet#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: QuickSightLogicalTable };

  /**
   * @schema QuickSightDataSet#OutputColumns
   */
  readonly outputColumns?: QuickSightOutputColumn[];

  /**
   * @schema QuickSightDataSet#ImportMode
   */
  readonly importMode?: string;

  /**
   * @schema QuickSightDataSet#ConsumedSpiceCapacityInBytes
   */
  readonly consumedSpiceCapacityInBytes?: number;

  /**
   * @schema QuickSightDataSet#ColumnGroups
   */
  readonly columnGroups?: QuickSightColumnGroup[];

  /**
   * @schema QuickSightDataSet#FieldFolders
   */
  readonly fieldFolders?: { [key: string]: QuickSightFieldFolder };

  /**
   * @schema QuickSightDataSet#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

  /**
   * @schema QuickSightDataSet#RowLevelPermissionTagConfiguration
   */
  readonly rowLevelPermissionTagConfiguration?: QuickSightRowLevelPermissionTagConfiguration;

  /**
   * @schema QuickSightDataSet#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: QuickSightColumnLevelPermissionRule[];

}

/**
 * Converts an object of type 'QuickSightDataSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSet(obj: QuickSightDataSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSetId': obj.dataSetId,
    'Name': obj.name,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'PhysicalTableMap': ((obj.physicalTableMap) === undefined) ? undefined : (Object.entries(obj.physicalTableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightPhysicalTable(i[1]) }), {})),
    'LogicalTableMap': ((obj.logicalTableMap) === undefined) ? undefined : (Object.entries(obj.logicalTableMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightLogicalTable(i[1]) }), {})),
    'OutputColumns': obj.outputColumns?.map(y => toJson_QuickSightOutputColumn(y)),
    'ImportMode': obj.importMode,
    'ConsumedSpiceCapacityInBytes': obj.consumedSpiceCapacityInBytes,
    'ColumnGroups': obj.columnGroups?.map(y => toJson_QuickSightColumnGroup(y)),
    'FieldFolders': ((obj.fieldFolders) === undefined) ? undefined : (Object.entries(obj.fieldFolders).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_QuickSightFieldFolder(i[1]) }), {})),
    'RowLevelPermissionDataSet': toJson_QuickSightRowLevelPermissionDataSet(obj.rowLevelPermissionDataSet),
    'RowLevelPermissionTagConfiguration': toJson_QuickSightRowLevelPermissionTagConfiguration(obj.rowLevelPermissionTagConfiguration),
    'ColumnLevelPermissionRules': obj.columnLevelPermissionRules?.map(y => toJson_QuickSightColumnLevelPermissionRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSource
 */
export interface QuickSightDataSource {
  /**
   * @schema QuickSightDataSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDataSource#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema QuickSightDataSource#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDataSource#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightDataSource#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightDataSource#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDataSource#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightDataSource#DataSourceParameters
   */
  readonly dataSourceParameters?: QuickSightDataSourceParameters;

  /**
   * @schema QuickSightDataSource#AlternateDataSourceParameters
   */
  readonly alternateDataSourceParameters?: QuickSightDataSourceParameters[];

  /**
   * @schema QuickSightDataSource#VpcConnectionProperties
   */
  readonly vpcConnectionProperties?: QuickSightVpcConnectionProperties;

  /**
   * @schema QuickSightDataSource#SslProperties
   */
  readonly sslProperties?: QuickSightSslProperties;

  /**
   * @schema QuickSightDataSource#ErrorInfo
   */
  readonly errorInfo?: QuickSightDataSourceErrorInfo;

}

/**
 * Converts an object of type 'QuickSightDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSource(obj: QuickSightDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSourceId': obj.dataSourceId,
    'Name': obj.name,
    'Type': obj.type,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'DataSourceParameters': toJson_QuickSightDataSourceParameters(obj.dataSourceParameters),
    'AlternateDataSourceParameters': obj.alternateDataSourceParameters?.map(y => toJson_QuickSightDataSourceParameters(y)),
    'VpcConnectionProperties': toJson_QuickSightVpcConnectionProperties(obj.vpcConnectionProperties),
    'SslProperties': toJson_QuickSightSslProperties(obj.sslProperties),
    'ErrorInfo': toJson_QuickSightDataSourceErrorInfo(obj.errorInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightFolder
 */
export interface QuickSightFolder {
  /**
   * @schema QuickSightFolder#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightFolder#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightFolder#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightFolder#FolderType
   */
  readonly folderType?: string;

  /**
   * @schema QuickSightFolder#FolderPath
   */
  readonly folderPath?: string[];

  /**
   * @schema QuickSightFolder#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightFolder#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'QuickSightFolder' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightFolder(obj: QuickSightFolder | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FolderId': obj.folderId,
    'Arn': obj.arn,
    'Name': obj.name,
    'FolderType': obj.folderType,
    'FolderPath': obj.folderPath?.map(y => y),
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightIamPolicyAssignment
 */
export interface QuickSightIamPolicyAssignment {
  /**
   * @schema QuickSightIamPolicyAssignment#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema QuickSightIamPolicyAssignment#AssignmentId
   */
  readonly assignmentId?: string;

  /**
   * @schema QuickSightIamPolicyAssignment#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightIamPolicyAssignment#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema QuickSightIamPolicyAssignment#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema QuickSightIamPolicyAssignment#AssignmentStatus
   */
  readonly assignmentStatus?: string;

}

/**
 * Converts an object of type 'QuickSightIamPolicyAssignment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightIamPolicyAssignment(obj: QuickSightIamPolicyAssignment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AwsAccountId': obj.awsAccountId,
    'AssignmentId': obj.assignmentId,
    'AssignmentName': obj.assignmentName,
    'PolicyArn': obj.policyArn,
    'Identities': ((obj.identities) === undefined) ? undefined : (Object.entries(obj.identities).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
    'AssignmentStatus': obj.assignmentStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightIngestion
 */
export interface QuickSightIngestion {
  /**
   * @schema QuickSightIngestion#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightIngestion#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightIngestion#IngestionStatus
   */
  readonly ingestionStatus?: string;

  /**
   * @schema QuickSightIngestion#ErrorInfo
   */
  readonly errorInfo?: QuickSightErrorInfo;

  /**
   * @schema QuickSightIngestion#RowInfo
   */
  readonly rowInfo?: QuickSightRowInfo;

  /**
   * @schema QuickSightIngestion#QueueInfo
   */
  readonly queueInfo?: QuickSightQueueInfo;

  /**
   * @schema QuickSightIngestion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightIngestion#IngestionTimeInSeconds
   */
  readonly ingestionTimeInSeconds?: number;

  /**
   * @schema QuickSightIngestion#IngestionSizeInBytes
   */
  readonly ingestionSizeInBytes?: number;

  /**
   * @schema QuickSightIngestion#RequestSource
   */
  readonly requestSource?: string;

  /**
   * @schema QuickSightIngestion#RequestType
   */
  readonly requestType?: string;

}

/**
 * Converts an object of type 'QuickSightIngestion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightIngestion(obj: QuickSightIngestion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'IngestionId': obj.ingestionId,
    'IngestionStatus': obj.ingestionStatus,
    'ErrorInfo': toJson_QuickSightErrorInfo(obj.errorInfo),
    'RowInfo': toJson_QuickSightRowInfo(obj.rowInfo),
    'QueueInfo': toJson_QuickSightQueueInfo(obj.queueInfo),
    'CreatedTime': obj.createdTime,
    'IngestionTimeInSeconds': obj.ingestionTimeInSeconds,
    'IngestionSizeInBytes': obj.ingestionSizeInBytes,
    'RequestSource': obj.requestSource,
    'RequestType': obj.requestType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightNamespaceInfoV2
 */
export interface QuickSightNamespaceInfoV2 {
  /**
   * @schema QuickSightNamespaceInfoV2#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightNamespaceInfoV2#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightNamespaceInfoV2#CapacityRegion
   */
  readonly capacityRegion?: string;

  /**
   * @schema QuickSightNamespaceInfoV2#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema QuickSightNamespaceInfoV2#IdentityStore
   */
  readonly identityStore?: string;

  /**
   * @schema QuickSightNamespaceInfoV2#NamespaceError
   */
  readonly namespaceError?: QuickSightNamespaceError;

}

/**
 * Converts an object of type 'QuickSightNamespaceInfoV2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightNamespaceInfoV2(obj: QuickSightNamespaceInfoV2 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Arn': obj.arn,
    'CapacityRegion': obj.capacityRegion,
    'CreationStatus': obj.creationStatus,
    'IdentityStore': obj.identityStore,
    'NamespaceError': toJson_QuickSightNamespaceError(obj.namespaceError),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplate
 */
export interface QuickSightTemplate {
  /**
   * @schema QuickSightTemplate#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightTemplate#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightTemplate#Version
   */
  readonly version?: QuickSightTemplateVersion;

  /**
   * @schema QuickSightTemplate#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightTemplate#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightTemplate#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * Converts an object of type 'QuickSightTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplate(obj: QuickSightTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'Version': toJson_QuickSightTemplateVersion(obj.version),
    'TemplateId': obj.templateId,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'CreatedTime': obj.createdTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTheme
 */
export interface QuickSightTheme {
  /**
   * @schema QuickSightTheme#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightTheme#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightTheme#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightTheme#Version
   */
  readonly version?: QuickSightThemeVersion;

  /**
   * @schema QuickSightTheme#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightTheme#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightTheme#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'QuickSightTheme' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTheme(obj: QuickSightTheme | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'ThemeId': obj.themeId,
    'Version': toJson_QuickSightThemeVersion(obj.version),
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUser
 */
export interface QuickSightUser {
  /**
   * @schema QuickSightUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightUser#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightUser#Email
   */
  readonly email?: string;

  /**
   * @schema QuickSightUser#Role
   */
  readonly role?: string;

  /**
   * @schema QuickSightUser#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema QuickSightUser#Active
   */
  readonly active?: boolean;

  /**
   * @schema QuickSightUser#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema QuickSightUser#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

  /**
   * @schema QuickSightUser#ExternalLoginFederationProviderType
   */
  readonly externalLoginFederationProviderType?: string;

  /**
   * @schema QuickSightUser#ExternalLoginFederationProviderUrl
   */
  readonly externalLoginFederationProviderUrl?: string;

  /**
   * @schema QuickSightUser#ExternalLoginId
   */
  readonly externalLoginId?: string;

}

/**
 * Converts an object of type 'QuickSightUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUser(obj: QuickSightUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'UserName': obj.userName,
    'Email': obj.email,
    'Role': obj.role,
    'IdentityType': obj.identityType,
    'Active': obj.active,
    'PrincipalId': obj.principalId,
    'CustomPermissionsName': obj.customPermissionsName,
    'ExternalLoginFederationProviderType': obj.externalLoginFederationProviderType,
    'ExternalLoginFederationProviderUrl': obj.externalLoginFederationProviderUrl,
    'ExternalLoginId': obj.externalLoginId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSessionTag
 */
export interface QuickSightSessionTag {
  /**
   * @schema QuickSightSessionTag#Key
   */
  readonly key?: string;

  /**
   * @schema QuickSightSessionTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'QuickSightSessionTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSessionTag(obj: QuickSightSessionTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnonymousUserEmbeddingExperienceConfiguration
 */
export interface QuickSightAnonymousUserEmbeddingExperienceConfiguration {
  /**
   * @schema QuickSightAnonymousUserEmbeddingExperienceConfiguration#Dashboard
   */
  readonly dashboard?: QuickSightAnonymousUserDashboardEmbeddingConfiguration;

}

/**
 * Converts an object of type 'QuickSightAnonymousUserEmbeddingExperienceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnonymousUserEmbeddingExperienceConfiguration(obj: QuickSightAnonymousUserEmbeddingExperienceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dashboard': toJson_QuickSightAnonymousUserDashboardEmbeddingConfiguration(obj.dashboard),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRegisteredUserEmbeddingExperienceConfiguration
 */
export interface QuickSightRegisteredUserEmbeddingExperienceConfiguration {
  /**
   * @schema QuickSightRegisteredUserEmbeddingExperienceConfiguration#Dashboard
   */
  readonly dashboard?: QuickSightRegisteredUserDashboardEmbeddingConfiguration;

  /**
   * @schema QuickSightRegisteredUserEmbeddingExperienceConfiguration#QuickSightConsole
   */
  readonly quickSightConsole?: QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration;

}

/**
 * Converts an object of type 'QuickSightRegisteredUserEmbeddingExperienceConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRegisteredUserEmbeddingExperienceConfiguration(obj: QuickSightRegisteredUserEmbeddingExperienceConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dashboard': toJson_QuickSightRegisteredUserDashboardEmbeddingConfiguration(obj.dashboard),
    'QuickSightConsole': toJson_QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration(obj.quickSightConsole),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnalysisSummary
 */
export interface QuickSightAnalysisSummary {
  /**
   * @schema QuickSightAnalysisSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightAnalysisSummary#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema QuickSightAnalysisSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightAnalysisSummary#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightAnalysisSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightAnalysisSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'QuickSightAnalysisSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnalysisSummary(obj: QuickSightAnalysisSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'AnalysisId': obj.analysisId,
    'Name': obj.name,
    'Status': obj.status,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardVersionSummary
 */
export interface QuickSightDashboardVersionSummary {
  /**
   * @schema QuickSightDashboardVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDashboardVersionSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDashboardVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightDashboardVersionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightDashboardVersionSummary#SourceEntityArn
   */
  readonly sourceEntityArn?: string;

  /**
   * @schema QuickSightDashboardVersionSummary#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'QuickSightDashboardVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardVersionSummary(obj: QuickSightDashboardVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'CreatedTime': obj.createdTime,
    'VersionNumber': obj.versionNumber,
    'Status': obj.status,
    'SourceEntityArn': obj.sourceEntityArn,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardSummary
 */
export interface QuickSightDashboardSummary {
  /**
   * @schema QuickSightDashboardSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDashboardSummary#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema QuickSightDashboardSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDashboardSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDashboardSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightDashboardSummary#PublishedVersionNumber
   */
  readonly publishedVersionNumber?: number;

  /**
   * @schema QuickSightDashboardSummary#LastPublishedTime
   */
  readonly lastPublishedTime?: string;

}

/**
 * Converts an object of type 'QuickSightDashboardSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardSummary(obj: QuickSightDashboardSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DashboardId': obj.dashboardId,
    'Name': obj.name,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'PublishedVersionNumber': obj.publishedVersionNumber,
    'LastPublishedTime': obj.lastPublishedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSetSummary
 */
export interface QuickSightDataSetSummary {
  /**
   * @schema QuickSightDataSetSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDataSetSummary#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema QuickSightDataSetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDataSetSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDataSetSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema QuickSightDataSetSummary#ImportMode
   */
  readonly importMode?: string;

  /**
   * @schema QuickSightDataSetSummary#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

  /**
   * @schema QuickSightDataSetSummary#RowLevelPermissionTagConfigurationApplied
   */
  readonly rowLevelPermissionTagConfigurationApplied?: boolean;

  /**
   * @schema QuickSightDataSetSummary#ColumnLevelPermissionRulesApplied
   */
  readonly columnLevelPermissionRulesApplied?: boolean;

}

/**
 * Converts an object of type 'QuickSightDataSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSetSummary(obj: QuickSightDataSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSetId': obj.dataSetId,
    'Name': obj.name,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'ImportMode': obj.importMode,
    'RowLevelPermissionDataSet': toJson_QuickSightRowLevelPermissionDataSet(obj.rowLevelPermissionDataSet),
    'RowLevelPermissionTagConfigurationApplied': obj.rowLevelPermissionTagConfigurationApplied,
    'ColumnLevelPermissionRulesApplied': obj.columnLevelPermissionRulesApplied,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightMemberIdArnPair
 */
export interface QuickSightMemberIdArnPair {
  /**
   * @schema QuickSightMemberIdArnPair#MemberId
   */
  readonly memberId?: string;

  /**
   * @schema QuickSightMemberIdArnPair#MemberArn
   */
  readonly memberArn?: string;

}

/**
 * Converts an object of type 'QuickSightMemberIdArnPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightMemberIdArnPair(obj: QuickSightMemberIdArnPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MemberId': obj.memberId,
    'MemberArn': obj.memberArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightFolderSummary
 */
export interface QuickSightFolderSummary {
  /**
   * @schema QuickSightFolderSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightFolderSummary#FolderId
   */
  readonly folderId?: string;

  /**
   * @schema QuickSightFolderSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightFolderSummary#FolderType
   */
  readonly folderType?: string;

  /**
   * @schema QuickSightFolderSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightFolderSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'QuickSightFolderSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightFolderSummary(obj: QuickSightFolderSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'FolderId': obj.folderId,
    'Name': obj.name,
    'FolderType': obj.folderType,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightIamPolicyAssignmentSummary
 */
export interface QuickSightIamPolicyAssignmentSummary {
  /**
   * @schema QuickSightIamPolicyAssignmentSummary#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightIamPolicyAssignmentSummary#AssignmentStatus
   */
  readonly assignmentStatus?: string;

}

/**
 * Converts an object of type 'QuickSightIamPolicyAssignmentSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightIamPolicyAssignmentSummary(obj: QuickSightIamPolicyAssignmentSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignmentName': obj.assignmentName,
    'AssignmentStatus': obj.assignmentStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightActiveIamPolicyAssignment
 */
export interface QuickSightActiveIamPolicyAssignment {
  /**
   * @schema QuickSightActiveIamPolicyAssignment#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema QuickSightActiveIamPolicyAssignment#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * Converts an object of type 'QuickSightActiveIamPolicyAssignment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightActiveIamPolicyAssignment(obj: QuickSightActiveIamPolicyAssignment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssignmentName': obj.assignmentName,
    'PolicyArn': obj.policyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateVersionSummary
 */
export interface QuickSightTemplateVersionSummary {
  /**
   * @schema QuickSightTemplateVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightTemplateVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightTemplateVersionSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightTemplateVersionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightTemplateVersionSummary#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'QuickSightTemplateVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateVersionSummary(obj: QuickSightTemplateVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'VersionNumber': obj.versionNumber,
    'CreatedTime': obj.createdTime,
    'Status': obj.status,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateSummary
 */
export interface QuickSightTemplateSummary {
  /**
   * @schema QuickSightTemplateSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightTemplateSummary#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema QuickSightTemplateSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightTemplateSummary#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

  /**
   * @schema QuickSightTemplateSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightTemplateSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'QuickSightTemplateSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateSummary(obj: QuickSightTemplateSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'TemplateId': obj.templateId,
    'Name': obj.name,
    'LatestVersionNumber': obj.latestVersionNumber,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightThemeVersionSummary
 */
export interface QuickSightThemeVersionSummary {
  /**
   * @schema QuickSightThemeVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightThemeVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightThemeVersionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightThemeVersionSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightThemeVersionSummary#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'QuickSightThemeVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightThemeVersionSummary(obj: QuickSightThemeVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionNumber': obj.versionNumber,
    'Arn': obj.arn,
    'Description': obj.description,
    'CreatedTime': obj.createdTime,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightThemeSummary
 */
export interface QuickSightThemeSummary {
  /**
   * @schema QuickSightThemeSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightThemeSummary#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightThemeSummary#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema QuickSightThemeSummary#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

  /**
   * @schema QuickSightThemeSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightThemeSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * Converts an object of type 'QuickSightThemeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightThemeSummary(obj: QuickSightThemeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Name': obj.name,
    'ThemeId': obj.themeId,
    'LatestVersionNumber': obj.latestVersionNumber,
    'CreatedTime': obj.createdTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnalysisSearchFilter
 */
export interface QuickSightAnalysisSearchFilter {
  /**
   * @schema QuickSightAnalysisSearchFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema QuickSightAnalysisSearchFilter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightAnalysisSearchFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'QuickSightAnalysisSearchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnalysisSearchFilter(obj: QuickSightAnalysisSearchFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operator': obj.operator,
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardSearchFilter
 */
export interface QuickSightDashboardSearchFilter {
  /**
   * @schema QuickSightDashboardSearchFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema QuickSightDashboardSearchFilter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDashboardSearchFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'QuickSightDashboardSearchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardSearchFilter(obj: QuickSightDashboardSearchFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operator': obj.operator,
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightFolderSearchFilter
 */
export interface QuickSightFolderSearchFilter {
  /**
   * @schema QuickSightFolderSearchFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema QuickSightFolderSearchFilter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightFolderSearchFilter#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'QuickSightFolderSearchFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightFolderSearchFilter(obj: QuickSightFolderSearchFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Operator': obj.operator,
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightStringParameter
 */
export interface QuickSightStringParameter {
  /**
   * @schema QuickSightStringParameter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightStringParameter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'QuickSightStringParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightStringParameter(obj: QuickSightStringParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightIntegerParameter
 */
export interface QuickSightIntegerParameter {
  /**
   * @schema QuickSightIntegerParameter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightIntegerParameter#Values
   */
  readonly values?: number[];

}

/**
 * Converts an object of type 'QuickSightIntegerParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightIntegerParameter(obj: QuickSightIntegerParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDecimalParameter
 */
export interface QuickSightDecimalParameter {
  /**
   * @schema QuickSightDecimalParameter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDecimalParameter#Values
   */
  readonly values?: number[];

}

/**
 * Converts an object of type 'QuickSightDecimalParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDecimalParameter(obj: QuickSightDecimalParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDateTimeParameter
 */
export interface QuickSightDateTimeParameter {
  /**
   * @schema QuickSightDateTimeParameter#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightDateTimeParameter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'QuickSightDateTimeParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDateTimeParameter(obj: QuickSightDateTimeParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnalysisSourceTemplate
 */
export interface QuickSightAnalysisSourceTemplate {
  /**
   * @schema QuickSightAnalysisSourceTemplate#DataSetReferences
   */
  readonly dataSetReferences?: QuickSightDataSetReference[];

  /**
   * @schema QuickSightAnalysisSourceTemplate#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'QuickSightAnalysisSourceTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnalysisSourceTemplate(obj: QuickSightAnalysisSourceTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetReferences': obj.dataSetReferences?.map(y => toJson_QuickSightDataSetReference(y)),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardSourceTemplate
 */
export interface QuickSightDashboardSourceTemplate {
  /**
   * @schema QuickSightDashboardSourceTemplate#DataSetReferences
   */
  readonly dataSetReferences?: QuickSightDataSetReference[];

  /**
   * @schema QuickSightDashboardSourceTemplate#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'QuickSightDashboardSourceTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardSourceTemplate(obj: QuickSightDashboardSourceTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetReferences': obj.dataSetReferences?.map(y => toJson_QuickSightDataSetReference(y)),
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAdHocFilteringOption
 */
export interface QuickSightAdHocFilteringOption {
  /**
   * @schema QuickSightAdHocFilteringOption#AvailabilityStatus
   */
  readonly availabilityStatus?: string;

}

/**
 * Converts an object of type 'QuickSightAdHocFilteringOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAdHocFilteringOption(obj: QuickSightAdHocFilteringOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityStatus': obj.availabilityStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightExportToCsvOption
 */
export interface QuickSightExportToCsvOption {
  /**
   * @schema QuickSightExportToCsvOption#AvailabilityStatus
   */
  readonly availabilityStatus?: string;

}

/**
 * Converts an object of type 'QuickSightExportToCsvOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightExportToCsvOption(obj: QuickSightExportToCsvOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AvailabilityStatus': obj.availabilityStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSheetControlsOption
 */
export interface QuickSightSheetControlsOption {
  /**
   * @schema QuickSightSheetControlsOption#VisibilityState
   */
  readonly visibilityState?: string;

}

/**
 * Converts an object of type 'QuickSightSheetControlsOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSheetControlsOption(obj: QuickSightSheetControlsOption | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VisibilityState': obj.visibilityState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRelationalTable
 */
export interface QuickSightRelationalTable {
  /**
   * @schema QuickSightRelationalTable#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema QuickSightRelationalTable#Catalog
   */
  readonly catalog?: string;

  /**
   * @schema QuickSightRelationalTable#Schema
   */
  readonly schema?: string;

  /**
   * @schema QuickSightRelationalTable#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightRelationalTable#InputColumns
   */
  readonly inputColumns?: QuickSightInputColumn[];

}

/**
 * Converts an object of type 'QuickSightRelationalTable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRelationalTable(obj: QuickSightRelationalTable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceArn': obj.dataSourceArn,
    'Catalog': obj.catalog,
    'Schema': obj.schema,
    'Name': obj.name,
    'InputColumns': obj.inputColumns?.map(y => toJson_QuickSightInputColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCustomSql
 */
export interface QuickSightCustomSql {
  /**
   * @schema QuickSightCustomSql#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema QuickSightCustomSql#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightCustomSql#SqlQuery
   */
  readonly sqlQuery?: string;

  /**
   * @schema QuickSightCustomSql#Columns
   */
  readonly columns?: QuickSightInputColumn[];

}

/**
 * Converts an object of type 'QuickSightCustomSql' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCustomSql(obj: QuickSightCustomSql | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceArn': obj.dataSourceArn,
    'Name': obj.name,
    'SqlQuery': obj.sqlQuery,
    'Columns': obj.columns?.map(y => toJson_QuickSightInputColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightS3Source
 */
export interface QuickSightS3Source {
  /**
   * @schema QuickSightS3Source#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema QuickSightS3Source#UploadSettings
   */
  readonly uploadSettings?: QuickSightUploadSettings;

  /**
   * @schema QuickSightS3Source#InputColumns
   */
  readonly inputColumns?: QuickSightInputColumn[];

}

/**
 * Converts an object of type 'QuickSightS3Source' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightS3Source(obj: QuickSightS3Source | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSourceArn': obj.dataSourceArn,
    'UploadSettings': toJson_QuickSightUploadSettings(obj.uploadSettings),
    'InputColumns': obj.inputColumns?.map(y => toJson_QuickSightInputColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTransformOperation
 */
export interface QuickSightTransformOperation {
  /**
   * @schema QuickSightTransformOperation#ProjectOperation
   */
  readonly projectOperation?: QuickSightProjectOperation;

  /**
   * @schema QuickSightTransformOperation#FilterOperation
   */
  readonly filterOperation?: QuickSightFilterOperation;

  /**
   * @schema QuickSightTransformOperation#CreateColumnsOperation
   */
  readonly createColumnsOperation?: QuickSightCreateColumnsOperation;

  /**
   * @schema QuickSightTransformOperation#RenameColumnOperation
   */
  readonly renameColumnOperation?: QuickSightRenameColumnOperation;

  /**
   * @schema QuickSightTransformOperation#CastColumnTypeOperation
   */
  readonly castColumnTypeOperation?: QuickSightCastColumnTypeOperation;

  /**
   * @schema QuickSightTransformOperation#TagColumnOperation
   */
  readonly tagColumnOperation?: QuickSightTagColumnOperation;

}

/**
 * Converts an object of type 'QuickSightTransformOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTransformOperation(obj: QuickSightTransformOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectOperation': toJson_QuickSightProjectOperation(obj.projectOperation),
    'FilterOperation': toJson_QuickSightFilterOperation(obj.filterOperation),
    'CreateColumnsOperation': toJson_QuickSightCreateColumnsOperation(obj.createColumnsOperation),
    'RenameColumnOperation': toJson_QuickSightRenameColumnOperation(obj.renameColumnOperation),
    'CastColumnTypeOperation': toJson_QuickSightCastColumnTypeOperation(obj.castColumnTypeOperation),
    'TagColumnOperation': toJson_QuickSightTagColumnOperation(obj.tagColumnOperation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightLogicalTableSource
 */
export interface QuickSightLogicalTableSource {
  /**
   * @schema QuickSightLogicalTableSource#JoinInstruction
   */
  readonly joinInstruction?: QuickSightJoinInstruction;

  /**
   * @schema QuickSightLogicalTableSource#PhysicalTableId
   */
  readonly physicalTableId?: string;

}

/**
 * Converts an object of type 'QuickSightLogicalTableSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightLogicalTableSource(obj: QuickSightLogicalTableSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JoinInstruction': toJson_QuickSightJoinInstruction(obj.joinInstruction),
    'PhysicalTableId': obj.physicalTableId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGeoSpatialColumnGroup
 */
export interface QuickSightGeoSpatialColumnGroup {
  /**
   * @schema QuickSightGeoSpatialColumnGroup#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightGeoSpatialColumnGroup#CountryCode
   */
  readonly countryCode?: string;

  /**
   * @schema QuickSightGeoSpatialColumnGroup#Columns
   */
  readonly columns?: string[];

}

/**
 * Converts an object of type 'QuickSightGeoSpatialColumnGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGeoSpatialColumnGroup(obj: QuickSightGeoSpatialColumnGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'CountryCode': obj.countryCode,
    'Columns': obj.columns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRowLevelPermissionTagRule
 */
export interface QuickSightRowLevelPermissionTagRule {
  /**
   * @schema QuickSightRowLevelPermissionTagRule#TagKey
   */
  readonly tagKey?: string;

  /**
   * @schema QuickSightRowLevelPermissionTagRule#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema QuickSightRowLevelPermissionTagRule#TagMultiValueDelimiter
   */
  readonly tagMultiValueDelimiter?: string;

  /**
   * @schema QuickSightRowLevelPermissionTagRule#MatchAllValue
   */
  readonly matchAllValue?: string;

}

/**
 * Converts an object of type 'QuickSightRowLevelPermissionTagRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRowLevelPermissionTagRule(obj: QuickSightRowLevelPermissionTagRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagKey': obj.tagKey,
    'ColumnName': obj.columnName,
    'TagMultiValueDelimiter': obj.tagMultiValueDelimiter,
    'MatchAllValue': obj.matchAllValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAmazonElasticsearchParameters
 */
export interface QuickSightAmazonElasticsearchParameters {
  /**
   * @schema QuickSightAmazonElasticsearchParameters#Domain
   */
  readonly domain?: string;

}

/**
 * Converts an object of type 'QuickSightAmazonElasticsearchParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAmazonElasticsearchParameters(obj: QuickSightAmazonElasticsearchParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Domain': obj.domain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAthenaParameters
 */
export interface QuickSightAthenaParameters {
  /**
   * @schema QuickSightAthenaParameters#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * Converts an object of type 'QuickSightAthenaParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAthenaParameters(obj: QuickSightAthenaParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkGroup': obj.workGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAuroraParameters
 */
export interface QuickSightAuroraParameters {
  /**
   * @schema QuickSightAuroraParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightAuroraParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightAuroraParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightAuroraParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAuroraParameters(obj: QuickSightAuroraParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAuroraPostgreSqlParameters
 */
export interface QuickSightAuroraPostgreSqlParameters {
  /**
   * @schema QuickSightAuroraPostgreSqlParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightAuroraPostgreSqlParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightAuroraPostgreSqlParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightAuroraPostgreSqlParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAuroraPostgreSqlParameters(obj: QuickSightAuroraPostgreSqlParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAwsIotAnalyticsParameters
 */
export interface QuickSightAwsIotAnalyticsParameters {
  /**
   * @schema QuickSightAwsIotAnalyticsParameters#DataSetName
   */
  readonly dataSetName?: string;

}

/**
 * Converts an object of type 'QuickSightAwsIotAnalyticsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAwsIotAnalyticsParameters(obj: QuickSightAwsIotAnalyticsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetName': obj.dataSetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightJiraParameters
 */
export interface QuickSightJiraParameters {
  /**
   * @schema QuickSightJiraParameters#SiteBaseUrl
   */
  readonly siteBaseUrl?: string;

}

/**
 * Converts an object of type 'QuickSightJiraParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightJiraParameters(obj: QuickSightJiraParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SiteBaseUrl': obj.siteBaseUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightMariaDbParameters
 */
export interface QuickSightMariaDbParameters {
  /**
   * @schema QuickSightMariaDbParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightMariaDbParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightMariaDbParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightMariaDbParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightMariaDbParameters(obj: QuickSightMariaDbParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightMySqlParameters
 */
export interface QuickSightMySqlParameters {
  /**
   * @schema QuickSightMySqlParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightMySqlParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightMySqlParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightMySqlParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightMySqlParameters(obj: QuickSightMySqlParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightOracleParameters
 */
export interface QuickSightOracleParameters {
  /**
   * @schema QuickSightOracleParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightOracleParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightOracleParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightOracleParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightOracleParameters(obj: QuickSightOracleParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightPostgreSqlParameters
 */
export interface QuickSightPostgreSqlParameters {
  /**
   * @schema QuickSightPostgreSqlParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightPostgreSqlParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightPostgreSqlParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightPostgreSqlParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightPostgreSqlParameters(obj: QuickSightPostgreSqlParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightPrestoParameters
 */
export interface QuickSightPrestoParameters {
  /**
   * @schema QuickSightPrestoParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightPrestoParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightPrestoParameters#Catalog
   */
  readonly catalog?: string;

}

/**
 * Converts an object of type 'QuickSightPrestoParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightPrestoParameters(obj: QuickSightPrestoParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Catalog': obj.catalog,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRdsParameters
 */
export interface QuickSightRdsParameters {
  /**
   * @schema QuickSightRdsParameters#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema QuickSightRdsParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightRdsParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRdsParameters(obj: QuickSightRdsParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRedshiftParameters
 */
export interface QuickSightRedshiftParameters {
  /**
   * @schema QuickSightRedshiftParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightRedshiftParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightRedshiftParameters#Database
   */
  readonly database?: string;

  /**
   * @schema QuickSightRedshiftParameters#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * Converts an object of type 'QuickSightRedshiftParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRedshiftParameters(obj: QuickSightRedshiftParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
    'ClusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightS3Parameters
 */
export interface QuickSightS3Parameters {
  /**
   * @schema QuickSightS3Parameters#ManifestFileLocation
   */
  readonly manifestFileLocation?: QuickSightManifestFileLocation;

}

/**
 * Converts an object of type 'QuickSightS3Parameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightS3Parameters(obj: QuickSightS3Parameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManifestFileLocation': toJson_QuickSightManifestFileLocation(obj.manifestFileLocation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightServiceNowParameters
 */
export interface QuickSightServiceNowParameters {
  /**
   * @schema QuickSightServiceNowParameters#SiteBaseUrl
   */
  readonly siteBaseUrl?: string;

}

/**
 * Converts an object of type 'QuickSightServiceNowParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightServiceNowParameters(obj: QuickSightServiceNowParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SiteBaseUrl': obj.siteBaseUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSnowflakeParameters
 */
export interface QuickSightSnowflakeParameters {
  /**
   * @schema QuickSightSnowflakeParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightSnowflakeParameters#Database
   */
  readonly database?: string;

  /**
   * @schema QuickSightSnowflakeParameters#Warehouse
   */
  readonly warehouse?: string;

}

/**
 * Converts an object of type 'QuickSightSnowflakeParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSnowflakeParameters(obj: QuickSightSnowflakeParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Database': obj.database,
    'Warehouse': obj.warehouse,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSparkParameters
 */
export interface QuickSightSparkParameters {
  /**
   * @schema QuickSightSparkParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightSparkParameters#Port
   */
  readonly port?: number;

}

/**
 * Converts an object of type 'QuickSightSparkParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSparkParameters(obj: QuickSightSparkParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSqlServerParameters
 */
export interface QuickSightSqlServerParameters {
  /**
   * @schema QuickSightSqlServerParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightSqlServerParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightSqlServerParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightSqlServerParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSqlServerParameters(obj: QuickSightSqlServerParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTeradataParameters
 */
export interface QuickSightTeradataParameters {
  /**
   * @schema QuickSightTeradataParameters#Host
   */
  readonly host?: string;

  /**
   * @schema QuickSightTeradataParameters#Port
   */
  readonly port?: number;

  /**
   * @schema QuickSightTeradataParameters#Database
   */
  readonly database?: string;

}

/**
 * Converts an object of type 'QuickSightTeradataParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTeradataParameters(obj: QuickSightTeradataParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Host': obj.host,
    'Port': obj.port,
    'Database': obj.database,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTwitterParameters
 */
export interface QuickSightTwitterParameters {
  /**
   * @schema QuickSightTwitterParameters#Query
   */
  readonly query?: string;

  /**
   * @schema QuickSightTwitterParameters#MaxRows
   */
  readonly maxRows?: number;

}

/**
 * Converts an object of type 'QuickSightTwitterParameters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTwitterParameters(obj: QuickSightTwitterParameters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Query': obj.query,
    'MaxRows': obj.maxRows,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCredentialPair
 */
export interface QuickSightCredentialPair {
  /**
   * @schema QuickSightCredentialPair#Username
   */
  readonly username?: string;

  /**
   * @schema QuickSightCredentialPair#Password
   */
  readonly password?: string;

  /**
   * @schema QuickSightCredentialPair#AlternateDataSourceParameters
   */
  readonly alternateDataSourceParameters?: QuickSightDataSourceParameters[];

}

/**
 * Converts an object of type 'QuickSightCredentialPair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCredentialPair(obj: QuickSightCredentialPair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
    'AlternateDataSourceParameters': obj.alternateDataSourceParameters?.map(y => toJson_QuickSightDataSourceParameters(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateSourceAnalysis
 */
export interface QuickSightTemplateSourceAnalysis {
  /**
   * @schema QuickSightTemplateSourceAnalysis#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightTemplateSourceAnalysis#DataSetReferences
   */
  readonly dataSetReferences?: QuickSightDataSetReference[];

}

/**
 * Converts an object of type 'QuickSightTemplateSourceAnalysis' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateSourceAnalysis(obj: QuickSightTemplateSourceAnalysis | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'DataSetReferences': obj.dataSetReferences?.map(y => toJson_QuickSightDataSetReference(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateSourceTemplate
 */
export interface QuickSightTemplateSourceTemplate {
  /**
   * @schema QuickSightTemplateSourceTemplate#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'QuickSightTemplateSourceTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateSourceTemplate(obj: QuickSightTemplateSourceTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataColorPalette
 */
export interface QuickSightDataColorPalette {
  /**
   * @schema QuickSightDataColorPalette#Colors
   */
  readonly colors?: string[];

  /**
   * @schema QuickSightDataColorPalette#MinMaxGradient
   */
  readonly minMaxGradient?: string[];

  /**
   * @schema QuickSightDataColorPalette#EmptyFillColor
   */
  readonly emptyFillColor?: string;

}

/**
 * Converts an object of type 'QuickSightDataColorPalette' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataColorPalette(obj: QuickSightDataColorPalette | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Colors': obj.colors?.map(y => y),
    'MinMaxGradient': obj.minMaxGradient?.map(y => y),
    'EmptyFillColor': obj.emptyFillColor,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUiColorPalette
 */
export interface QuickSightUiColorPalette {
  /**
   * @schema QuickSightUiColorPalette#PrimaryForeground
   */
  readonly primaryForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#PrimaryBackground
   */
  readonly primaryBackground?: string;

  /**
   * @schema QuickSightUiColorPalette#SecondaryForeground
   */
  readonly secondaryForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#SecondaryBackground
   */
  readonly secondaryBackground?: string;

  /**
   * @schema QuickSightUiColorPalette#Accent
   */
  readonly accent?: string;

  /**
   * @schema QuickSightUiColorPalette#AccentForeground
   */
  readonly accentForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#Danger
   */
  readonly danger?: string;

  /**
   * @schema QuickSightUiColorPalette#DangerForeground
   */
  readonly dangerForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#Warning
   */
  readonly warning?: string;

  /**
   * @schema QuickSightUiColorPalette#WarningForeground
   */
  readonly warningForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#Success
   */
  readonly success?: string;

  /**
   * @schema QuickSightUiColorPalette#SuccessForeground
   */
  readonly successForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#Dimension
   */
  readonly dimension?: string;

  /**
   * @schema QuickSightUiColorPalette#DimensionForeground
   */
  readonly dimensionForeground?: string;

  /**
   * @schema QuickSightUiColorPalette#Measure
   */
  readonly measure?: string;

  /**
   * @schema QuickSightUiColorPalette#MeasureForeground
   */
  readonly measureForeground?: string;

}

/**
 * Converts an object of type 'QuickSightUiColorPalette' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUiColorPalette(obj: QuickSightUiColorPalette | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PrimaryForeground': obj.primaryForeground,
    'PrimaryBackground': obj.primaryBackground,
    'SecondaryForeground': obj.secondaryForeground,
    'SecondaryBackground': obj.secondaryBackground,
    'Accent': obj.accent,
    'AccentForeground': obj.accentForeground,
    'Danger': obj.danger,
    'DangerForeground': obj.dangerForeground,
    'Warning': obj.warning,
    'WarningForeground': obj.warningForeground,
    'Success': obj.success,
    'SuccessForeground': obj.successForeground,
    'Dimension': obj.dimension,
    'DimensionForeground': obj.dimensionForeground,
    'Measure': obj.measure,
    'MeasureForeground': obj.measureForeground,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSheetStyle
 */
export interface QuickSightSheetStyle {
  /**
   * @schema QuickSightSheetStyle#Tile
   */
  readonly tile?: QuickSightTileStyle;

  /**
   * @schema QuickSightSheetStyle#TileLayout
   */
  readonly tileLayout?: QuickSightTileLayoutStyle;

}

/**
 * Converts an object of type 'QuickSightSheetStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSheetStyle(obj: QuickSightSheetStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tile': toJson_QuickSightTileStyle(obj.tile),
    'TileLayout': toJson_QuickSightTileLayoutStyle(obj.tileLayout),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnalysisError
 */
export interface QuickSightAnalysisError {
  /**
   * @schema QuickSightAnalysisError#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightAnalysisError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightAnalysisError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnalysisError(obj: QuickSightAnalysisError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightSheet
 */
export interface QuickSightSheet {
  /**
   * @schema QuickSightSheet#SheetId
   */
  readonly sheetId?: string;

  /**
   * @schema QuickSightSheet#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QuickSightSheet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightSheet(obj: QuickSightSheet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SheetId': obj.sheetId,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardVersion
 */
export interface QuickSightDashboardVersion {
  /**
   * @schema QuickSightDashboardVersion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightDashboardVersion#Errors
   */
  readonly errors?: QuickSightDashboardError[];

  /**
   * @schema QuickSightDashboardVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightDashboardVersion#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightDashboardVersion#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightDashboardVersion#SourceEntityArn
   */
  readonly sourceEntityArn?: string;

  /**
   * @schema QuickSightDashboardVersion#DataSetArns
   */
  readonly dataSetArns?: string[];

  /**
   * @schema QuickSightDashboardVersion#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightDashboardVersion#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema QuickSightDashboardVersion#Sheets
   */
  readonly sheets?: QuickSightSheet[];

}

/**
 * Converts an object of type 'QuickSightDashboardVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardVersion(obj: QuickSightDashboardVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedTime': obj.createdTime,
    'Errors': obj.errors?.map(y => toJson_QuickSightDashboardError(y)),
    'VersionNumber': obj.versionNumber,
    'Status': obj.status,
    'Arn': obj.arn,
    'SourceEntityArn': obj.sourceEntityArn,
    'DataSetArns': obj.dataSetArns?.map(y => y),
    'Description': obj.description,
    'ThemeArn': obj.themeArn,
    'Sheets': obj.sheets?.map(y => toJson_QuickSightSheet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightOutputColumn
 */
export interface QuickSightOutputColumn {
  /**
   * @schema QuickSightOutputColumn#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightOutputColumn#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightOutputColumn#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'QuickSightOutputColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightOutputColumn(obj: QuickSightOutputColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSourceErrorInfo
 */
export interface QuickSightDataSourceErrorInfo {
  /**
   * @schema QuickSightDataSourceErrorInfo#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightDataSourceErrorInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightDataSourceErrorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSourceErrorInfo(obj: QuickSightDataSourceErrorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightErrorInfo
 */
export interface QuickSightErrorInfo {
  /**
   * @schema QuickSightErrorInfo#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightErrorInfo#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightErrorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightErrorInfo(obj: QuickSightErrorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRowInfo
 */
export interface QuickSightRowInfo {
  /**
   * @schema QuickSightRowInfo#RowsIngested
   */
  readonly rowsIngested?: number;

  /**
   * @schema QuickSightRowInfo#RowsDropped
   */
  readonly rowsDropped?: number;

}

/**
 * Converts an object of type 'QuickSightRowInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRowInfo(obj: QuickSightRowInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RowsIngested': obj.rowsIngested,
    'RowsDropped': obj.rowsDropped,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightQueueInfo
 */
export interface QuickSightQueueInfo {
  /**
   * @schema QuickSightQueueInfo#WaitingOnIngestion
   */
  readonly waitingOnIngestion?: string;

  /**
   * @schema QuickSightQueueInfo#QueuedIngestion
   */
  readonly queuedIngestion?: string;

}

/**
 * Converts an object of type 'QuickSightQueueInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightQueueInfo(obj: QuickSightQueueInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WaitingOnIngestion': obj.waitingOnIngestion,
    'QueuedIngestion': obj.queuedIngestion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightNamespaceError
 */
export interface QuickSightNamespaceError {
  /**
   * @schema QuickSightNamespaceError#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightNamespaceError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightNamespaceError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightNamespaceError(obj: QuickSightNamespaceError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateVersion
 */
export interface QuickSightTemplateVersion {
  /**
   * @schema QuickSightTemplateVersion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightTemplateVersion#Errors
   */
  readonly errors?: QuickSightTemplateError[];

  /**
   * @schema QuickSightTemplateVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightTemplateVersion#Status
   */
  readonly status?: string;

  /**
   * @schema QuickSightTemplateVersion#DataSetConfigurations
   */
  readonly dataSetConfigurations?: QuickSightDataSetConfiguration[];

  /**
   * @schema QuickSightTemplateVersion#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightTemplateVersion#SourceEntityArn
   */
  readonly sourceEntityArn?: string;

  /**
   * @schema QuickSightTemplateVersion#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema QuickSightTemplateVersion#Sheets
   */
  readonly sheets?: QuickSightSheet[];

}

/**
 * Converts an object of type 'QuickSightTemplateVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateVersion(obj: QuickSightTemplateVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedTime': obj.createdTime,
    'Errors': obj.errors?.map(y => toJson_QuickSightTemplateError(y)),
    'VersionNumber': obj.versionNumber,
    'Status': obj.status,
    'DataSetConfigurations': obj.dataSetConfigurations?.map(y => toJson_QuickSightDataSetConfiguration(y)),
    'Description': obj.description,
    'SourceEntityArn': obj.sourceEntityArn,
    'ThemeArn': obj.themeArn,
    'Sheets': obj.sheets?.map(y => toJson_QuickSightSheet(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightThemeVersion
 */
export interface QuickSightThemeVersion {
  /**
   * @schema QuickSightThemeVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema QuickSightThemeVersion#Arn
   */
  readonly arn?: string;

  /**
   * @schema QuickSightThemeVersion#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightThemeVersion#BaseThemeId
   */
  readonly baseThemeId?: string;

  /**
   * @schema QuickSightThemeVersion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema QuickSightThemeVersion#Configuration
   */
  readonly configuration?: QuickSightThemeConfiguration;

  /**
   * @schema QuickSightThemeVersion#Errors
   */
  readonly errors?: QuickSightThemeError[];

  /**
   * @schema QuickSightThemeVersion#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'QuickSightThemeVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightThemeVersion(obj: QuickSightThemeVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VersionNumber': obj.versionNumber,
    'Arn': obj.arn,
    'Description': obj.description,
    'BaseThemeId': obj.baseThemeId,
    'CreatedTime': obj.createdTime,
    'Configuration': toJson_QuickSightThemeConfiguration(obj.configuration),
    'Errors': obj.errors?.map(y => toJson_QuickSightThemeError(y)),
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightAnonymousUserDashboardEmbeddingConfiguration
 */
export interface QuickSightAnonymousUserDashboardEmbeddingConfiguration {
  /**
   * @schema QuickSightAnonymousUserDashboardEmbeddingConfiguration#InitialDashboardId
   */
  readonly initialDashboardId?: string;

}

/**
 * Converts an object of type 'QuickSightAnonymousUserDashboardEmbeddingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightAnonymousUserDashboardEmbeddingConfiguration(obj: QuickSightAnonymousUserDashboardEmbeddingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InitialDashboardId': obj.initialDashboardId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRegisteredUserDashboardEmbeddingConfiguration
 */
export interface QuickSightRegisteredUserDashboardEmbeddingConfiguration {
  /**
   * @schema QuickSightRegisteredUserDashboardEmbeddingConfiguration#InitialDashboardId
   */
  readonly initialDashboardId?: string;

}

/**
 * Converts an object of type 'QuickSightRegisteredUserDashboardEmbeddingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRegisteredUserDashboardEmbeddingConfiguration(obj: QuickSightRegisteredUserDashboardEmbeddingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InitialDashboardId': obj.initialDashboardId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration
 */
export interface QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration {
  /**
   * @schema QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration#InitialPath
   */
  readonly initialPath?: string;

}

/**
 * Converts an object of type 'QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration(obj: QuickSightRegisteredUserQuickSightConsoleEmbeddingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InitialPath': obj.initialPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSetReference
 */
export interface QuickSightDataSetReference {
  /**
   * @schema QuickSightDataSetReference#DataSetPlaceholder
   */
  readonly dataSetPlaceholder?: string;

  /**
   * @schema QuickSightDataSetReference#DataSetArn
   */
  readonly dataSetArn?: string;

}

/**
 * Converts an object of type 'QuickSightDataSetReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSetReference(obj: QuickSightDataSetReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataSetPlaceholder': obj.dataSetPlaceholder,
    'DataSetArn': obj.dataSetArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightInputColumn
 */
export interface QuickSightInputColumn {
  /**
   * @schema QuickSightInputColumn#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightInputColumn#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'QuickSightInputColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightInputColumn(obj: QuickSightInputColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightUploadSettings
 */
export interface QuickSightUploadSettings {
  /**
   * @schema QuickSightUploadSettings#Format
   */
  readonly format?: string;

  /**
   * @schema QuickSightUploadSettings#StartFromRow
   */
  readonly startFromRow?: number;

  /**
   * @schema QuickSightUploadSettings#ContainsHeader
   */
  readonly containsHeader?: boolean;

  /**
   * @schema QuickSightUploadSettings#TextQualifier
   */
  readonly textQualifier?: string;

  /**
   * @schema QuickSightUploadSettings#Delimiter
   */
  readonly delimiter?: string;

}

/**
 * Converts an object of type 'QuickSightUploadSettings' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightUploadSettings(obj: QuickSightUploadSettings | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Format': obj.format,
    'StartFromRow': obj.startFromRow,
    'ContainsHeader': obj.containsHeader,
    'TextQualifier': obj.textQualifier,
    'Delimiter': obj.delimiter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightProjectOperation
 */
export interface QuickSightProjectOperation {
  /**
   * @schema QuickSightProjectOperation#ProjectedColumns
   */
  readonly projectedColumns?: string[];

}

/**
 * Converts an object of type 'QuickSightProjectOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightProjectOperation(obj: QuickSightProjectOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProjectedColumns': obj.projectedColumns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightFilterOperation
 */
export interface QuickSightFilterOperation {
  /**
   * @schema QuickSightFilterOperation#ConditionExpression
   */
  readonly conditionExpression?: string;

}

/**
 * Converts an object of type 'QuickSightFilterOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightFilterOperation(obj: QuickSightFilterOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConditionExpression': obj.conditionExpression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCreateColumnsOperation
 */
export interface QuickSightCreateColumnsOperation {
  /**
   * @schema QuickSightCreateColumnsOperation#Columns
   */
  readonly columns?: QuickSightCalculatedColumn[];

}

/**
 * Converts an object of type 'QuickSightCreateColumnsOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCreateColumnsOperation(obj: QuickSightCreateColumnsOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Columns': obj.columns?.map(y => toJson_QuickSightCalculatedColumn(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightRenameColumnOperation
 */
export interface QuickSightRenameColumnOperation {
  /**
   * @schema QuickSightRenameColumnOperation#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema QuickSightRenameColumnOperation#NewColumnName
   */
  readonly newColumnName?: string;

}

/**
 * Converts an object of type 'QuickSightRenameColumnOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightRenameColumnOperation(obj: QuickSightRenameColumnOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'NewColumnName': obj.newColumnName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCastColumnTypeOperation
 */
export interface QuickSightCastColumnTypeOperation {
  /**
   * @schema QuickSightCastColumnTypeOperation#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema QuickSightCastColumnTypeOperation#NewColumnType
   */
  readonly newColumnType?: string;

  /**
   * @schema QuickSightCastColumnTypeOperation#Format
   */
  readonly format?: string;

}

/**
 * Converts an object of type 'QuickSightCastColumnTypeOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCastColumnTypeOperation(obj: QuickSightCastColumnTypeOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'NewColumnType': obj.newColumnType,
    'Format': obj.format,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTagColumnOperation
 */
export interface QuickSightTagColumnOperation {
  /**
   * @schema QuickSightTagColumnOperation#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema QuickSightTagColumnOperation#Tags
   */
  readonly tags?: QuickSightColumnTag[];

}

/**
 * Converts an object of type 'QuickSightTagColumnOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTagColumnOperation(obj: QuickSightTagColumnOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'Tags': obj.tags?.map(y => toJson_QuickSightColumnTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightJoinInstruction
 */
export interface QuickSightJoinInstruction {
  /**
   * @schema QuickSightJoinInstruction#LeftOperand
   */
  readonly leftOperand?: string;

  /**
   * @schema QuickSightJoinInstruction#RightOperand
   */
  readonly rightOperand?: string;

  /**
   * @schema QuickSightJoinInstruction#LeftJoinKeyProperties
   */
  readonly leftJoinKeyProperties?: QuickSightJoinKeyProperties;

  /**
   * @schema QuickSightJoinInstruction#RightJoinKeyProperties
   */
  readonly rightJoinKeyProperties?: QuickSightJoinKeyProperties;

  /**
   * @schema QuickSightJoinInstruction#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightJoinInstruction#OnClause
   */
  readonly onClause?: string;

}

/**
 * Converts an object of type 'QuickSightJoinInstruction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightJoinInstruction(obj: QuickSightJoinInstruction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LeftOperand': obj.leftOperand,
    'RightOperand': obj.rightOperand,
    'LeftJoinKeyProperties': toJson_QuickSightJoinKeyProperties(obj.leftJoinKeyProperties),
    'RightJoinKeyProperties': toJson_QuickSightJoinKeyProperties(obj.rightJoinKeyProperties),
    'Type': obj.type,
    'OnClause': obj.onClause,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightManifestFileLocation
 */
export interface QuickSightManifestFileLocation {
  /**
   * @schema QuickSightManifestFileLocation#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema QuickSightManifestFileLocation#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'QuickSightManifestFileLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightManifestFileLocation(obj: QuickSightManifestFileLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTileStyle
 */
export interface QuickSightTileStyle {
  /**
   * @schema QuickSightTileStyle#Border
   */
  readonly border?: QuickSightBorderStyle;

}

/**
 * Converts an object of type 'QuickSightTileStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTileStyle(obj: QuickSightTileStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Border': toJson_QuickSightBorderStyle(obj.border),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTileLayoutStyle
 */
export interface QuickSightTileLayoutStyle {
  /**
   * @schema QuickSightTileLayoutStyle#Gutter
   */
  readonly gutter?: QuickSightGutterStyle;

  /**
   * @schema QuickSightTileLayoutStyle#Margin
   */
  readonly margin?: QuickSightMarginStyle;

}

/**
 * Converts an object of type 'QuickSightTileLayoutStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTileLayoutStyle(obj: QuickSightTileLayoutStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Gutter': toJson_QuickSightGutterStyle(obj.gutter),
    'Margin': toJson_QuickSightMarginStyle(obj.margin),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDashboardError
 */
export interface QuickSightDashboardError {
  /**
   * @schema QuickSightDashboardError#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightDashboardError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightDashboardError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDashboardError(obj: QuickSightDashboardError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightTemplateError
 */
export interface QuickSightTemplateError {
  /**
   * @schema QuickSightTemplateError#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightTemplateError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightTemplateError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightTemplateError(obj: QuickSightTemplateError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSetConfiguration
 */
export interface QuickSightDataSetConfiguration {
  /**
   * @schema QuickSightDataSetConfiguration#Placeholder
   */
  readonly placeholder?: string;

  /**
   * @schema QuickSightDataSetConfiguration#DataSetSchema
   */
  readonly dataSetSchema?: QuickSightDataSetSchema;

  /**
   * @schema QuickSightDataSetConfiguration#ColumnGroupSchemaList
   */
  readonly columnGroupSchemaList?: QuickSightColumnGroupSchema[];

}

/**
 * Converts an object of type 'QuickSightDataSetConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSetConfiguration(obj: QuickSightDataSetConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Placeholder': obj.placeholder,
    'DataSetSchema': toJson_QuickSightDataSetSchema(obj.dataSetSchema),
    'ColumnGroupSchemaList': obj.columnGroupSchemaList?.map(y => toJson_QuickSightColumnGroupSchema(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightThemeError
 */
export interface QuickSightThemeError {
  /**
   * @schema QuickSightThemeError#Type
   */
  readonly type?: string;

  /**
   * @schema QuickSightThemeError#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'QuickSightThemeError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightThemeError(obj: QuickSightThemeError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightCalculatedColumn
 */
export interface QuickSightCalculatedColumn {
  /**
   * @schema QuickSightCalculatedColumn#ColumnName
   */
  readonly columnName?: string;

  /**
   * @schema QuickSightCalculatedColumn#ColumnId
   */
  readonly columnId?: string;

  /**
   * @schema QuickSightCalculatedColumn#Expression
   */
  readonly expression?: string;

}

/**
 * Converts an object of type 'QuickSightCalculatedColumn' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightCalculatedColumn(obj: QuickSightCalculatedColumn | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnName': obj.columnName,
    'ColumnId': obj.columnId,
    'Expression': obj.expression,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnTag
 */
export interface QuickSightColumnTag {
  /**
   * @schema QuickSightColumnTag#ColumnGeographicRole
   */
  readonly columnGeographicRole?: string;

  /**
   * @schema QuickSightColumnTag#ColumnDescription
   */
  readonly columnDescription?: QuickSightColumnDescription;

}

/**
 * Converts an object of type 'QuickSightColumnTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnTag(obj: QuickSightColumnTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnGeographicRole': obj.columnGeographicRole,
    'ColumnDescription': toJson_QuickSightColumnDescription(obj.columnDescription),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightJoinKeyProperties
 */
export interface QuickSightJoinKeyProperties {
  /**
   * @schema QuickSightJoinKeyProperties#UniqueKey
   */
  readonly uniqueKey?: boolean;

}

/**
 * Converts an object of type 'QuickSightJoinKeyProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightJoinKeyProperties(obj: QuickSightJoinKeyProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UniqueKey': obj.uniqueKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightBorderStyle
 */
export interface QuickSightBorderStyle {
  /**
   * @schema QuickSightBorderStyle#Show
   */
  readonly show?: boolean;

}

/**
 * Converts an object of type 'QuickSightBorderStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightBorderStyle(obj: QuickSightBorderStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Show': obj.show,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightGutterStyle
 */
export interface QuickSightGutterStyle {
  /**
   * @schema QuickSightGutterStyle#Show
   */
  readonly show?: boolean;

}

/**
 * Converts an object of type 'QuickSightGutterStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightGutterStyle(obj: QuickSightGutterStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Show': obj.show,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightMarginStyle
 */
export interface QuickSightMarginStyle {
  /**
   * @schema QuickSightMarginStyle#Show
   */
  readonly show?: boolean;

}

/**
 * Converts an object of type 'QuickSightMarginStyle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightMarginStyle(obj: QuickSightMarginStyle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Show': obj.show,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightDataSetSchema
 */
export interface QuickSightDataSetSchema {
  /**
   * @schema QuickSightDataSetSchema#ColumnSchemaList
   */
  readonly columnSchemaList?: QuickSightColumnSchema[];

}

/**
 * Converts an object of type 'QuickSightDataSetSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightDataSetSchema(obj: QuickSightDataSetSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ColumnSchemaList': obj.columnSchemaList?.map(y => toJson_QuickSightColumnSchema(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnGroupSchema
 */
export interface QuickSightColumnGroupSchema {
  /**
   * @schema QuickSightColumnGroupSchema#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightColumnGroupSchema#ColumnGroupColumnSchemaList
   */
  readonly columnGroupColumnSchemaList?: QuickSightColumnGroupColumnSchema[];

}

/**
 * Converts an object of type 'QuickSightColumnGroupSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnGroupSchema(obj: QuickSightColumnGroupSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ColumnGroupColumnSchemaList': obj.columnGroupColumnSchemaList?.map(y => toJson_QuickSightColumnGroupColumnSchema(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnDescription
 */
export interface QuickSightColumnDescription {
  /**
   * @schema QuickSightColumnDescription#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'QuickSightColumnDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnDescription(obj: QuickSightColumnDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnSchema
 */
export interface QuickSightColumnSchema {
  /**
   * @schema QuickSightColumnSchema#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightColumnSchema#DataType
   */
  readonly dataType?: string;

  /**
   * @schema QuickSightColumnSchema#GeographicRole
   */
  readonly geographicRole?: string;

}

/**
 * Converts an object of type 'QuickSightColumnSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnSchema(obj: QuickSightColumnSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DataType': obj.dataType,
    'GeographicRole': obj.geographicRole,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema QuickSightColumnGroupColumnSchema
 */
export interface QuickSightColumnGroupColumnSchema {
  /**
   * @schema QuickSightColumnGroupColumnSchema#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'QuickSightColumnGroupColumnSchema' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_QuickSightColumnGroupColumnSchema(obj: QuickSightColumnGroupColumnSchema | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
