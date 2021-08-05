/**
 * @schema QuickSightCancelIngestionRequest
 */
export interface QuickSightCancelIngestionRequest {
  /**
   * @schema QuickSightCancelIngestionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCancelIngestionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema QuickSightCancelIngestionRequest#IngestionId
   */
  readonly ingestionId: string;

}

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
 * @schema QuickSightCreateAccountCustomizationRequest
 */
export interface QuickSightCreateAccountCustomizationRequest {
  /**
   * @schema QuickSightCreateAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightCreateAccountCustomizationRequest#AccountCustomization
   */
  readonly accountCustomization: QuickSightAccountCustomization;

  /**
   * @schema QuickSightCreateAccountCustomizationRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

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
 * @schema QuickSightCreateAnalysisRequest
 */
export interface QuickSightCreateAnalysisRequest {
  /**
   * @schema QuickSightCreateAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

  /**
   * @schema QuickSightCreateAnalysisRequest#Name
   */
  readonly name: string;

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
  readonly sourceEntity: QuickSightAnalysisSourceEntity;

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
 * @schema QuickSightCreateDashboardRequest
 */
export interface QuickSightCreateDashboardRequest {
  /**
   * @schema QuickSightCreateDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema QuickSightCreateDashboardRequest#Name
   */
  readonly name: string;

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
  readonly sourceEntity: QuickSightDashboardSourceEntity;

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
 * @schema QuickSightCreateDataSetRequest
 */
export interface QuickSightCreateDataSetRequest {
  /**
   * @schema QuickSightCreateDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema QuickSightCreateDataSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightCreateDataSetRequest#PhysicalTableMap
   */
  readonly physicalTableMap: { [key: string]: QuickSightPhysicalTable };

  /**
   * @schema QuickSightCreateDataSetRequest#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: QuickSightLogicalTable };

  /**
   * @schema QuickSightCreateDataSetRequest#ImportMode
   */
  readonly importMode: string;

  /**
   * @schema QuickSightCreateDataSetRequest#ColumnGroups
   */
  readonly columnGroups?: QuickSightColumnGroup[];

  /**
   * @schema QuickSightCreateDataSetRequest#Permissions
   */
  readonly permissions?: QuickSightResourcePermission[];

  /**
   * @schema QuickSightCreateDataSetRequest#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

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
 * @schema QuickSightCreateDataSourceRequest
 */
export interface QuickSightCreateDataSourceRequest {
  /**
   * @schema QuickSightCreateDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightCreateDataSourceRequest#Type
   */
  readonly type: string;

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
 * @schema QuickSightCreateGroupRequest
 */
export interface QuickSightCreateGroupRequest {
  /**
   * @schema QuickSightCreateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema QuickSightCreateGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightCreateGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateGroupRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightCreateGroupMembershipRequest
 */
export interface QuickSightCreateGroupMembershipRequest {
  /**
   * @schema QuickSightCreateGroupMembershipRequest#MemberName
   */
  readonly memberName: string;

  /**
   * @schema QuickSightCreateGroupMembershipRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema QuickSightCreateGroupMembershipRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateGroupMembershipRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightCreateIamPolicyAssignmentRequest
 */
export interface QuickSightCreateIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema QuickSightCreateIamPolicyAssignmentRequest#AssignmentStatus
   */
  readonly assignmentStatus: string;

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
  readonly namespace: string;

}

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
 * @schema QuickSightCreateIngestionRequest
 */
export interface QuickSightCreateIngestionRequest {
  /**
   * @schema QuickSightCreateIngestionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema QuickSightCreateIngestionRequest#IngestionId
   */
  readonly ingestionId: string;

  /**
   * @schema QuickSightCreateIngestionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

}

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
 * @schema QuickSightCreateNamespaceRequest
 */
export interface QuickSightCreateNamespaceRequest {
  /**
   * @schema QuickSightCreateNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateNamespaceRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema QuickSightCreateNamespaceRequest#IdentityStore
   */
  readonly identityStore: string;

  /**
   * @schema QuickSightCreateNamespaceRequest#Tags
   */
  readonly tags?: QuickSightTag[];

}

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
 * @schema QuickSightCreateTemplateRequest
 */
export interface QuickSightCreateTemplateRequest {
  /**
   * @schema QuickSightCreateTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateTemplateRequest#TemplateId
   */
  readonly templateId: string;

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
  readonly sourceEntity: QuickSightTemplateSourceEntity;

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
 * @schema QuickSightCreateTemplateAliasRequest
 */
export interface QuickSightCreateTemplateAliasRequest {
  /**
   * @schema QuickSightCreateTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema QuickSightCreateTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema QuickSightCreateTemplateAliasRequest#TemplateVersionNumber
   */
  readonly templateVersionNumber: number;

}

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
 * @schema QuickSightCreateThemeRequest
 */
export interface QuickSightCreateThemeRequest {
  /**
   * @schema QuickSightCreateThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightCreateThemeRequest#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightCreateThemeRequest#BaseThemeId
   */
  readonly baseThemeId: string;

  /**
   * @schema QuickSightCreateThemeRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema QuickSightCreateThemeRequest#Configuration
   */
  readonly configuration: QuickSightThemeConfiguration;

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
 * @schema QuickSightCreateThemeAliasRequest
 */
export interface QuickSightCreateThemeAliasRequest {
  /**
   * @schema QuickSightCreateThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightCreateThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightCreateThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema QuickSightCreateThemeAliasRequest#ThemeVersionNumber
   */
  readonly themeVersionNumber: number;

}

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
 * @schema QuickSightDeleteAccountCustomizationRequest
 */
export interface QuickSightDeleteAccountCustomizationRequest {
  /**
   * @schema QuickSightDeleteAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

}

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
 * @schema QuickSightDeleteAnalysisRequest
 */
export interface QuickSightDeleteAnalysisRequest {
  /**
   * @schema QuickSightDeleteAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

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
 * @schema QuickSightDeleteDashboardRequest
 */
export interface QuickSightDeleteDashboardRequest {
  /**
   * @schema QuickSightDeleteDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema QuickSightDeleteDashboardRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

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
 * @schema QuickSightDeleteDataSetRequest
 */
export interface QuickSightDeleteDataSetRequest {
  /**
   * @schema QuickSightDeleteDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

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
 * @schema QuickSightDeleteDataSourceRequest
 */
export interface QuickSightDeleteDataSourceRequest {
  /**
   * @schema QuickSightDeleteDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

}

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
 * @schema QuickSightDeleteGroupRequest
 */
export interface QuickSightDeleteGroupRequest {
  /**
   * @schema QuickSightDeleteGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema QuickSightDeleteGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteGroupRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDeleteGroupMembershipRequest
 */
export interface QuickSightDeleteGroupMembershipRequest {
  /**
   * @schema QuickSightDeleteGroupMembershipRequest#MemberName
   */
  readonly memberName: string;

  /**
   * @schema QuickSightDeleteGroupMembershipRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema QuickSightDeleteGroupMembershipRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteGroupMembershipRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDeleteIamPolicyAssignmentRequest
 */
export interface QuickSightDeleteIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightDeleteIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema QuickSightDeleteIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDeleteNamespaceRequest
 */
export interface QuickSightDeleteNamespaceRequest {
  /**
   * @schema QuickSightDeleteNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteNamespaceRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDeleteTemplateRequest
 */
export interface QuickSightDeleteTemplateRequest {
  /**
   * @schema QuickSightDeleteTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteTemplateRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema QuickSightDeleteTemplateRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

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
 * @schema QuickSightDeleteTemplateAliasRequest
 */
export interface QuickSightDeleteTemplateAliasRequest {
  /**
   * @schema QuickSightDeleteTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema QuickSightDeleteTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

}

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
 * @schema QuickSightDeleteThemeRequest
 */
export interface QuickSightDeleteThemeRequest {
  /**
   * @schema QuickSightDeleteThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightDeleteThemeRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

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
 * @schema QuickSightDeleteThemeAliasRequest
 */
export interface QuickSightDeleteThemeAliasRequest {
  /**
   * @schema QuickSightDeleteThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightDeleteThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

}

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
 * @schema QuickSightDeleteUserRequest
 */
export interface QuickSightDeleteUserRequest {
  /**
   * @schema QuickSightDeleteUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema QuickSightDeleteUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteUserRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDeleteUserByPrincipalIdRequest
 */
export interface QuickSightDeleteUserByPrincipalIdRequest {
  /**
   * @schema QuickSightDeleteUserByPrincipalIdRequest#PrincipalId
   */
  readonly principalId: string;

  /**
   * @schema QuickSightDeleteUserByPrincipalIdRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDeleteUserByPrincipalIdRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDescribeAccountCustomizationRequest
 */
export interface QuickSightDescribeAccountCustomizationRequest {
  /**
   * @schema QuickSightDescribeAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightDescribeAccountSettingsRequest
 */
export interface QuickSightDescribeAccountSettingsRequest {
  /**
   * @schema QuickSightDescribeAccountSettingsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

}

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
 * @schema QuickSightDescribeAnalysisRequest
 */
export interface QuickSightDescribeAnalysisRequest {
  /**
   * @schema QuickSightDescribeAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

}

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
 * @schema QuickSightDescribeAnalysisPermissionsRequest
 */
export interface QuickSightDescribeAnalysisPermissionsRequest {
  /**
   * @schema QuickSightDescribeAnalysisPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeAnalysisPermissionsRequest#AnalysisId
   */
  readonly analysisId: string;

}

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
 * @schema QuickSightDescribeDashboardRequest
 */
export interface QuickSightDescribeDashboardRequest {
  /**
   * @schema QuickSightDescribeDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

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
 * @schema QuickSightDescribeDashboardPermissionsRequest
 */
export interface QuickSightDescribeDashboardPermissionsRequest {
  /**
   * @schema QuickSightDescribeDashboardPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeDashboardPermissionsRequest#DashboardId
   */
  readonly dashboardId: string;

}

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
 * @schema QuickSightDescribeDataSetRequest
 */
export interface QuickSightDescribeDataSetRequest {
  /**
   * @schema QuickSightDescribeDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

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
 * @schema QuickSightDescribeDataSetPermissionsRequest
 */
export interface QuickSightDescribeDataSetPermissionsRequest {
  /**
   * @schema QuickSightDescribeDataSetPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeDataSetPermissionsRequest#DataSetId
   */
  readonly dataSetId: string;

}

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
 * @schema QuickSightDescribeDataSourceRequest
 */
export interface QuickSightDescribeDataSourceRequest {
  /**
   * @schema QuickSightDescribeDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

}

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
 * @schema QuickSightDescribeDataSourcePermissionsRequest
 */
export interface QuickSightDescribeDataSourcePermissionsRequest {
  /**
   * @schema QuickSightDescribeDataSourcePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeDataSourcePermissionsRequest#DataSourceId
   */
  readonly dataSourceId: string;

}

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
 * @schema QuickSightDescribeGroupRequest
 */
export interface QuickSightDescribeGroupRequest {
  /**
   * @schema QuickSightDescribeGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema QuickSightDescribeGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeGroupRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDescribeIamPolicyAssignmentRequest
 */
export interface QuickSightDescribeIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightDescribeIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema QuickSightDescribeIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDescribeIngestionRequest
 */
export interface QuickSightDescribeIngestionRequest {
  /**
   * @schema QuickSightDescribeIngestionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeIngestionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema QuickSightDescribeIngestionRequest#IngestionId
   */
  readonly ingestionId: string;

}

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
 * @schema QuickSightDescribeNamespaceRequest
 */
export interface QuickSightDescribeNamespaceRequest {
  /**
   * @schema QuickSightDescribeNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeNamespaceRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightDescribeTemplateRequest
 */
export interface QuickSightDescribeTemplateRequest {
  /**
   * @schema QuickSightDescribeTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeTemplateRequest#TemplateId
   */
  readonly templateId: string;

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
 * @schema QuickSightDescribeTemplateAliasRequest
 */
export interface QuickSightDescribeTemplateAliasRequest {
  /**
   * @schema QuickSightDescribeTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema QuickSightDescribeTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

}

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
 * @schema QuickSightDescribeTemplatePermissionsRequest
 */
export interface QuickSightDescribeTemplatePermissionsRequest {
  /**
   * @schema QuickSightDescribeTemplatePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeTemplatePermissionsRequest#TemplateId
   */
  readonly templateId: string;

}

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
 * @schema QuickSightDescribeThemeRequest
 */
export interface QuickSightDescribeThemeRequest {
  /**
   * @schema QuickSightDescribeThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeThemeRequest#ThemeId
   */
  readonly themeId: string;

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
 * @schema QuickSightDescribeThemeAliasRequest
 */
export interface QuickSightDescribeThemeAliasRequest {
  /**
   * @schema QuickSightDescribeThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightDescribeThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

}

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
 * @schema QuickSightDescribeThemePermissionsRequest
 */
export interface QuickSightDescribeThemePermissionsRequest {
  /**
   * @schema QuickSightDescribeThemePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeThemePermissionsRequest#ThemeId
   */
  readonly themeId: string;

}

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
 * @schema QuickSightDescribeUserRequest
 */
export interface QuickSightDescribeUserRequest {
  /**
   * @schema QuickSightDescribeUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema QuickSightDescribeUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightDescribeUserRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightGetDashboardEmbedUrlRequest
 */
export interface QuickSightGetDashboardEmbedUrlRequest {
  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema QuickSightGetDashboardEmbedUrlRequest#IdentityType
   */
  readonly identityType: string;

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
 * @schema QuickSightGetSessionEmbedUrlRequest
 */
export interface QuickSightGetSessionEmbedUrlRequest {
  /**
   * @schema QuickSightGetSessionEmbedUrlRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListAnalysesRequest
 */
export interface QuickSightListAnalysesRequest {
  /**
   * @schema QuickSightListAnalysesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListDashboardVersionsRequest
 */
export interface QuickSightListDashboardVersionsRequest {
  /**
   * @schema QuickSightListDashboardVersionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListDashboardVersionsRequest#DashboardId
   */
  readonly dashboardId: string;

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
 * @schema QuickSightListDashboardsRequest
 */
export interface QuickSightListDashboardsRequest {
  /**
   * @schema QuickSightListDashboardsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListDataSetsRequest
 */
export interface QuickSightListDataSetsRequest {
  /**
   * @schema QuickSightListDataSetsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListDataSourcesRequest
 */
export interface QuickSightListDataSourcesRequest {
  /**
   * @schema QuickSightListDataSourcesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListGroupMembershipsRequest
 */
export interface QuickSightListGroupMembershipsRequest {
  /**
   * @schema QuickSightListGroupMembershipsRequest#GroupName
   */
  readonly groupName: string;

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
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListGroupMembershipsRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightListGroupsRequest
 */
export interface QuickSightListGroupsRequest {
  /**
   * @schema QuickSightListGroupsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
  readonly namespace: string;

}

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
 * @schema QuickSightListIamPolicyAssignmentsRequest
 */
export interface QuickSightListIamPolicyAssignmentsRequest {
  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsRequest#Namespace
   */
  readonly namespace: string;

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
 * @schema QuickSightListIamPolicyAssignmentsForUserRequest
 */
export interface QuickSightListIamPolicyAssignmentsForUserRequest {
  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListIamPolicyAssignmentsForUserRequest#UserName
   */
  readonly userName: string;

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
  readonly namespace: string;

}

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
 * @schema QuickSightListIngestionsRequest
 */
export interface QuickSightListIngestionsRequest {
  /**
   * @schema QuickSightListIngestionsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema QuickSightListIngestionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema QuickSightListIngestionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListIngestionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

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
 * @schema QuickSightListNamespacesRequest
 */
export interface QuickSightListNamespacesRequest {
  /**
   * @schema QuickSightListNamespacesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListTagsForResourceRequest
 */
export interface QuickSightListTagsForResourceRequest {
  /**
   * @schema QuickSightListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema QuickSightListTemplateAliasesRequest
 */
export interface QuickSightListTemplateAliasesRequest {
  /**
   * @schema QuickSightListTemplateAliasesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListTemplateAliasesRequest#TemplateId
   */
  readonly templateId: string;

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
 * @schema QuickSightListTemplateVersionsRequest
 */
export interface QuickSightListTemplateVersionsRequest {
  /**
   * @schema QuickSightListTemplateVersionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListTemplateVersionsRequest#TemplateId
   */
  readonly templateId: string;

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
 * @schema QuickSightListTemplatesRequest
 */
export interface QuickSightListTemplatesRequest {
  /**
   * @schema QuickSightListTemplatesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListThemeAliasesRequest
 */
export interface QuickSightListThemeAliasesRequest {
  /**
   * @schema QuickSightListThemeAliasesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListThemeAliasesRequest#ThemeId
   */
  readonly themeId: string;

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
 * @schema QuickSightListThemeVersionsRequest
 */
export interface QuickSightListThemeVersionsRequest {
  /**
   * @schema QuickSightListThemeVersionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListThemeVersionsRequest#ThemeId
   */
  readonly themeId: string;

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
 * @schema QuickSightListThemesRequest
 */
export interface QuickSightListThemesRequest {
  /**
   * @schema QuickSightListThemesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
 * @schema QuickSightListUserGroupsRequest
 */
export interface QuickSightListUserGroupsRequest {
  /**
   * @schema QuickSightListUserGroupsRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema QuickSightListUserGroupsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightListUserGroupsRequest#Namespace
   */
  readonly namespace: string;

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
 * @schema QuickSightListUsersRequest
 */
export interface QuickSightListUsersRequest {
  /**
   * @schema QuickSightListUsersRequest#AwsAccountId
   */
  readonly awsAccountId: string;

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
  readonly namespace: string;

}

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
 * @schema QuickSightRegisterUserRequest
 */
export interface QuickSightRegisterUserRequest {
  /**
   * @schema QuickSightRegisterUserRequest#IdentityType
   */
  readonly identityType: string;

  /**
   * @schema QuickSightRegisterUserRequest#Email
   */
  readonly email: string;

  /**
   * @schema QuickSightRegisterUserRequest#UserRole
   */
  readonly userRole: string;

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
  readonly awsAccountId: string;

  /**
   * @schema QuickSightRegisterUserRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema QuickSightRegisterUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema QuickSightRegisterUserRequest#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

}

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
 * @schema QuickSightRestoreAnalysisRequest
 */
export interface QuickSightRestoreAnalysisRequest {
  /**
   * @schema QuickSightRestoreAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightRestoreAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

}

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
 * @schema QuickSightSearchAnalysesRequest
 */
export interface QuickSightSearchAnalysesRequest {
  /**
   * @schema QuickSightSearchAnalysesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightSearchAnalysesRequest#Filters
   */
  readonly filters: QuickSightAnalysisSearchFilter[];

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
 * @schema QuickSightSearchDashboardsRequest
 */
export interface QuickSightSearchDashboardsRequest {
  /**
   * @schema QuickSightSearchDashboardsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightSearchDashboardsRequest#Filters
   */
  readonly filters: QuickSightDashboardSearchFilter[];

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
 * @schema QuickSightTagResourceRequest
 */
export interface QuickSightTagResourceRequest {
  /**
   * @schema QuickSightTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema QuickSightTagResourceRequest#Tags
   */
  readonly tags: QuickSightTag[];

}

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
 * @schema QuickSightUntagResourceRequest
 */
export interface QuickSightUntagResourceRequest {
  /**
   * @schema QuickSightUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema QuickSightUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

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
 * @schema QuickSightUpdateAccountCustomizationRequest
 */
export interface QuickSightUpdateAccountCustomizationRequest {
  /**
   * @schema QuickSightUpdateAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema QuickSightUpdateAccountCustomizationRequest#AccountCustomization
   */
  readonly accountCustomization: QuickSightAccountCustomization;

}

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
 * @schema QuickSightUpdateAccountSettingsRequest
 */
export interface QuickSightUpdateAccountSettingsRequest {
  /**
   * @schema QuickSightUpdateAccountSettingsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateAccountSettingsRequest#DefaultNamespace
   */
  readonly defaultNamespace: string;

  /**
   * @schema QuickSightUpdateAccountSettingsRequest#NotificationEmail
   */
  readonly notificationEmail?: string;

}

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
 * @schema QuickSightUpdateAnalysisRequest
 */
export interface QuickSightUpdateAnalysisRequest {
  /**
   * @schema QuickSightUpdateAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

  /**
   * @schema QuickSightUpdateAnalysisRequest#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightUpdateAnalysisRequest#Parameters
   */
  readonly parameters?: QuickSightParameters;

  /**
   * @schema QuickSightUpdateAnalysisRequest#SourceEntity
   */
  readonly sourceEntity: QuickSightAnalysisSourceEntity;

  /**
   * @schema QuickSightUpdateAnalysisRequest#ThemeArn
   */
  readonly themeArn?: string;

}

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
 * @schema QuickSightUpdateAnalysisPermissionsRequest
 */
export interface QuickSightUpdateAnalysisPermissionsRequest {
  /**
   * @schema QuickSightUpdateAnalysisPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateAnalysisPermissionsRequest#AnalysisId
   */
  readonly analysisId: string;

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
 * @schema QuickSightUpdateDashboardRequest
 */
export interface QuickSightUpdateDashboardRequest {
  /**
   * @schema QuickSightUpdateDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightUpdateDashboardRequest#SourceEntity
   */
  readonly sourceEntity: QuickSightDashboardSourceEntity;

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
 * @schema QuickSightUpdateDashboardPermissionsRequest
 */
export interface QuickSightUpdateDashboardPermissionsRequest {
  /**
   * @schema QuickSightUpdateDashboardPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDashboardPermissionsRequest#DashboardId
   */
  readonly dashboardId: string;

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
 * @schema QuickSightUpdateDashboardPublishedVersionRequest
 */
export interface QuickSightUpdateDashboardPublishedVersionRequest {
  /**
   * @schema QuickSightUpdateDashboardPublishedVersionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema QuickSightUpdateDashboardPublishedVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

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
 * @schema QuickSightUpdateDataSetRequest
 */
export interface QuickSightUpdateDataSetRequest {
  /**
   * @schema QuickSightUpdateDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#PhysicalTableMap
   */
  readonly physicalTableMap: { [key: string]: QuickSightPhysicalTable };

  /**
   * @schema QuickSightUpdateDataSetRequest#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: QuickSightLogicalTable };

  /**
   * @schema QuickSightUpdateDataSetRequest#ImportMode
   */
  readonly importMode: string;

  /**
   * @schema QuickSightUpdateDataSetRequest#ColumnGroups
   */
  readonly columnGroups?: QuickSightColumnGroup[];

  /**
   * @schema QuickSightUpdateDataSetRequest#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

  /**
   * @schema QuickSightUpdateDataSetRequest#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: QuickSightColumnLevelPermissionRule[];

}

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
 * @schema QuickSightUpdateDataSetPermissionsRequest
 */
export interface QuickSightUpdateDataSetPermissionsRequest {
  /**
   * @schema QuickSightUpdateDataSetPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDataSetPermissionsRequest#DataSetId
   */
  readonly dataSetId: string;

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
 * @schema QuickSightUpdateDataSourceRequest
 */
export interface QuickSightUpdateDataSourceRequest {
  /**
   * @schema QuickSightUpdateDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema QuickSightUpdateDataSourceRequest#Name
   */
  readonly name: string;

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
 * @schema QuickSightUpdateDataSourcePermissionsRequest
 */
export interface QuickSightUpdateDataSourcePermissionsRequest {
  /**
   * @schema QuickSightUpdateDataSourcePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateDataSourcePermissionsRequest#DataSourceId
   */
  readonly dataSourceId: string;

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
 * @schema QuickSightUpdateGroupRequest
 */
export interface QuickSightUpdateGroupRequest {
  /**
   * @schema QuickSightUpdateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema QuickSightUpdateGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema QuickSightUpdateGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateGroupRequest#Namespace
   */
  readonly namespace: string;

}

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
 * @schema QuickSightUpdateIamPolicyAssignmentRequest
 */
export interface QuickSightUpdateIamPolicyAssignmentRequest {
  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema QuickSightUpdateIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

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
 * @schema QuickSightUpdateTemplateRequest
 */
export interface QuickSightUpdateTemplateRequest {
  /**
   * @schema QuickSightUpdateTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateTemplateRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema QuickSightUpdateTemplateRequest#SourceEntity
   */
  readonly sourceEntity: QuickSightTemplateSourceEntity;

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
 * @schema QuickSightUpdateTemplateAliasRequest
 */
export interface QuickSightUpdateTemplateAliasRequest {
  /**
   * @schema QuickSightUpdateTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema QuickSightUpdateTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema QuickSightUpdateTemplateAliasRequest#TemplateVersionNumber
   */
  readonly templateVersionNumber: number;

}

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
 * @schema QuickSightUpdateTemplatePermissionsRequest
 */
export interface QuickSightUpdateTemplatePermissionsRequest {
  /**
   * @schema QuickSightUpdateTemplatePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateTemplatePermissionsRequest#TemplateId
   */
  readonly templateId: string;

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
 * @schema QuickSightUpdateThemeRequest
 */
export interface QuickSightUpdateThemeRequest {
  /**
   * @schema QuickSightUpdateThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightUpdateThemeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema QuickSightUpdateThemeRequest#BaseThemeId
   */
  readonly baseThemeId: string;

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
 * @schema QuickSightUpdateThemeAliasRequest
 */
export interface QuickSightUpdateThemeAliasRequest {
  /**
   * @schema QuickSightUpdateThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema QuickSightUpdateThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema QuickSightUpdateThemeAliasRequest#ThemeVersionNumber
   */
  readonly themeVersionNumber: number;

}

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
 * @schema QuickSightUpdateThemePermissionsRequest
 */
export interface QuickSightUpdateThemePermissionsRequest {
  /**
   * @schema QuickSightUpdateThemePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateThemePermissionsRequest#ThemeId
   */
  readonly themeId: string;

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
 * @schema QuickSightUpdateUserRequest
 */
export interface QuickSightUpdateUserRequest {
  /**
   * @schema QuickSightUpdateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema QuickSightUpdateUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema QuickSightUpdateUserRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema QuickSightUpdateUserRequest#Email
   */
  readonly email: string;

  /**
   * @schema QuickSightUpdateUserRequest#Role
   */
  readonly role: string;

  /**
   * @schema QuickSightUpdateUserRequest#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

  /**
   * @schema QuickSightUpdateUserRequest#UnapplyCustomPermissions
   */
  readonly unapplyCustomPermissions?: boolean;

}

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
 * @schema QuickSightAccountCustomization
 */
export interface QuickSightAccountCustomization {
  /**
   * @schema QuickSightAccountCustomization#DefaultTheme
   */
  readonly defaultTheme?: string;

}

/**
 * @schema QuickSightTag
 */
export interface QuickSightTag {
  /**
   * @schema QuickSightTag#Key
   */
  readonly key: string;

  /**
   * @schema QuickSightTag#Value
   */
  readonly value: string;

}

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
 * @schema QuickSightResourcePermission
 */
export interface QuickSightResourcePermission {
  /**
   * @schema QuickSightResourcePermission#Principal
   */
  readonly principal: string;

  /**
   * @schema QuickSightResourcePermission#Actions
   */
  readonly actions: string[];

}

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
 * @schema QuickSightDashboardSourceEntity
 */
export interface QuickSightDashboardSourceEntity {
  /**
   * @schema QuickSightDashboardSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: QuickSightDashboardSourceTemplate;

}

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
 * @schema QuickSightLogicalTable
 */
export interface QuickSightLogicalTable {
  /**
   * @schema QuickSightLogicalTable#Alias
   */
  readonly alias: string;

  /**
   * @schema QuickSightLogicalTable#DataTransforms
   */
  readonly dataTransforms?: QuickSightTransformOperation[];

  /**
   * @schema QuickSightLogicalTable#Source
   */
  readonly source: QuickSightLogicalTableSource;

}

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
  readonly arn: string;

  /**
   * @schema QuickSightRowLevelPermissionDataSet#PermissionPolicy
   */
  readonly permissionPolicy: string;

}

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
 * @schema QuickSightVpcConnectionProperties
 */
export interface QuickSightVpcConnectionProperties {
  /**
   * @schema QuickSightVpcConnectionProperties#VpcConnectionArn
   */
  readonly vpcConnectionArn: string;

}

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
   * @schema QuickSightDataSet#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: QuickSightRowLevelPermissionDataSet;

  /**
   * @schema QuickSightDataSet#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: QuickSightColumnLevelPermissionRule[];

}

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
 * @schema QuickSightIngestion
 */
export interface QuickSightIngestion {
  /**
   * @schema QuickSightIngestion#Arn
   */
  readonly arn: string;

  /**
   * @schema QuickSightIngestion#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema QuickSightIngestion#IngestionStatus
   */
  readonly ingestionStatus: string;

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
  readonly createdTime: string;

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

}

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
   * @schema QuickSightDataSetSummary#ColumnLevelPermissionRulesApplied
   */
  readonly columnLevelPermissionRulesApplied?: boolean;

}

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
 * @schema QuickSightDashboardSearchFilter
 */
export interface QuickSightDashboardSearchFilter {
  /**
   * @schema QuickSightDashboardSearchFilter#Operator
   */
  readonly operator: string;

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
 * @schema QuickSightStringParameter
 */
export interface QuickSightStringParameter {
  /**
   * @schema QuickSightStringParameter#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightStringParameter#Values
   */
  readonly values: string[];

}

/**
 * @schema QuickSightIntegerParameter
 */
export interface QuickSightIntegerParameter {
  /**
   * @schema QuickSightIntegerParameter#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightIntegerParameter#Values
   */
  readonly values: number[];

}

/**
 * @schema QuickSightDecimalParameter
 */
export interface QuickSightDecimalParameter {
  /**
   * @schema QuickSightDecimalParameter#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightDecimalParameter#Values
   */
  readonly values: number[];

}

/**
 * @schema QuickSightDateTimeParameter
 */
export interface QuickSightDateTimeParameter {
  /**
   * @schema QuickSightDateTimeParameter#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightDateTimeParameter#Values
   */
  readonly values: string[];

}

/**
 * @schema QuickSightAnalysisSourceTemplate
 */
export interface QuickSightAnalysisSourceTemplate {
  /**
   * @schema QuickSightAnalysisSourceTemplate#DataSetReferences
   */
  readonly dataSetReferences: QuickSightDataSetReference[];

  /**
   * @schema QuickSightAnalysisSourceTemplate#Arn
   */
  readonly arn: string;

}

/**
 * @schema QuickSightDashboardSourceTemplate
 */
export interface QuickSightDashboardSourceTemplate {
  /**
   * @schema QuickSightDashboardSourceTemplate#DataSetReferences
   */
  readonly dataSetReferences: QuickSightDataSetReference[];

  /**
   * @schema QuickSightDashboardSourceTemplate#Arn
   */
  readonly arn: string;

}

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
 * @schema QuickSightExportToCsvOption
 */
export interface QuickSightExportToCsvOption {
  /**
   * @schema QuickSightExportToCsvOption#AvailabilityStatus
   */
  readonly availabilityStatus?: string;

}

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
 * @schema QuickSightRelationalTable
 */
export interface QuickSightRelationalTable {
  /**
   * @schema QuickSightRelationalTable#DataSourceArn
   */
  readonly dataSourceArn: string;

  /**
   * @schema QuickSightRelationalTable#Schema
   */
  readonly schema?: string;

  /**
   * @schema QuickSightRelationalTable#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightRelationalTable#InputColumns
   */
  readonly inputColumns: QuickSightInputColumn[];

}

/**
 * @schema QuickSightCustomSql
 */
export interface QuickSightCustomSql {
  /**
   * @schema QuickSightCustomSql#DataSourceArn
   */
  readonly dataSourceArn: string;

  /**
   * @schema QuickSightCustomSql#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightCustomSql#SqlQuery
   */
  readonly sqlQuery: string;

  /**
   * @schema QuickSightCustomSql#Columns
   */
  readonly columns?: QuickSightInputColumn[];

}

/**
 * @schema QuickSightS3Source
 */
export interface QuickSightS3Source {
  /**
   * @schema QuickSightS3Source#DataSourceArn
   */
  readonly dataSourceArn: string;

  /**
   * @schema QuickSightS3Source#UploadSettings
   */
  readonly uploadSettings?: QuickSightUploadSettings;

  /**
   * @schema QuickSightS3Source#InputColumns
   */
  readonly inputColumns: QuickSightInputColumn[];

}

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
 * @schema QuickSightGeoSpatialColumnGroup
 */
export interface QuickSightGeoSpatialColumnGroup {
  /**
   * @schema QuickSightGeoSpatialColumnGroup#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightGeoSpatialColumnGroup#CountryCode
   */
  readonly countryCode: string;

  /**
   * @schema QuickSightGeoSpatialColumnGroup#Columns
   */
  readonly columns: string[];

}

/**
 * @schema QuickSightAmazonElasticsearchParameters
 */
export interface QuickSightAmazonElasticsearchParameters {
  /**
   * @schema QuickSightAmazonElasticsearchParameters#Domain
   */
  readonly domain: string;

}

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
 * @schema QuickSightAuroraParameters
 */
export interface QuickSightAuroraParameters {
  /**
   * @schema QuickSightAuroraParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightAuroraParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightAuroraParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightAuroraPostgreSqlParameters
 */
export interface QuickSightAuroraPostgreSqlParameters {
  /**
   * @schema QuickSightAuroraPostgreSqlParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightAuroraPostgreSqlParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightAuroraPostgreSqlParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightAwsIotAnalyticsParameters
 */
export interface QuickSightAwsIotAnalyticsParameters {
  /**
   * @schema QuickSightAwsIotAnalyticsParameters#DataSetName
   */
  readonly dataSetName: string;

}

/**
 * @schema QuickSightJiraParameters
 */
export interface QuickSightJiraParameters {
  /**
   * @schema QuickSightJiraParameters#SiteBaseUrl
   */
  readonly siteBaseUrl: string;

}

/**
 * @schema QuickSightMariaDbParameters
 */
export interface QuickSightMariaDbParameters {
  /**
   * @schema QuickSightMariaDbParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightMariaDbParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightMariaDbParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightMySqlParameters
 */
export interface QuickSightMySqlParameters {
  /**
   * @schema QuickSightMySqlParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightMySqlParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightMySqlParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightOracleParameters
 */
export interface QuickSightOracleParameters {
  /**
   * @schema QuickSightOracleParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightOracleParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightOracleParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightPostgreSqlParameters
 */
export interface QuickSightPostgreSqlParameters {
  /**
   * @schema QuickSightPostgreSqlParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightPostgreSqlParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightPostgreSqlParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightPrestoParameters
 */
export interface QuickSightPrestoParameters {
  /**
   * @schema QuickSightPrestoParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightPrestoParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightPrestoParameters#Catalog
   */
  readonly catalog: string;

}

/**
 * @schema QuickSightRdsParameters
 */
export interface QuickSightRdsParameters {
  /**
   * @schema QuickSightRdsParameters#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema QuickSightRdsParameters#Database
   */
  readonly database: string;

}

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
  readonly database: string;

  /**
   * @schema QuickSightRedshiftParameters#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * @schema QuickSightS3Parameters
 */
export interface QuickSightS3Parameters {
  /**
   * @schema QuickSightS3Parameters#ManifestFileLocation
   */
  readonly manifestFileLocation: QuickSightManifestFileLocation;

}

/**
 * @schema QuickSightServiceNowParameters
 */
export interface QuickSightServiceNowParameters {
  /**
   * @schema QuickSightServiceNowParameters#SiteBaseUrl
   */
  readonly siteBaseUrl: string;

}

/**
 * @schema QuickSightSnowflakeParameters
 */
export interface QuickSightSnowflakeParameters {
  /**
   * @schema QuickSightSnowflakeParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightSnowflakeParameters#Database
   */
  readonly database: string;

  /**
   * @schema QuickSightSnowflakeParameters#Warehouse
   */
  readonly warehouse: string;

}

/**
 * @schema QuickSightSparkParameters
 */
export interface QuickSightSparkParameters {
  /**
   * @schema QuickSightSparkParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightSparkParameters#Port
   */
  readonly port: number;

}

/**
 * @schema QuickSightSqlServerParameters
 */
export interface QuickSightSqlServerParameters {
  /**
   * @schema QuickSightSqlServerParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightSqlServerParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightSqlServerParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightTeradataParameters
 */
export interface QuickSightTeradataParameters {
  /**
   * @schema QuickSightTeradataParameters#Host
   */
  readonly host: string;

  /**
   * @schema QuickSightTeradataParameters#Port
   */
  readonly port: number;

  /**
   * @schema QuickSightTeradataParameters#Database
   */
  readonly database: string;

}

/**
 * @schema QuickSightTwitterParameters
 */
export interface QuickSightTwitterParameters {
  /**
   * @schema QuickSightTwitterParameters#Query
   */
  readonly query: string;

  /**
   * @schema QuickSightTwitterParameters#MaxRows
   */
  readonly maxRows: number;

}

/**
 * @schema QuickSightCredentialPair
 */
export interface QuickSightCredentialPair {
  /**
   * @schema QuickSightCredentialPair#Username
   */
  readonly username: string;

  /**
   * @schema QuickSightCredentialPair#Password
   */
  readonly password: string;

  /**
   * @schema QuickSightCredentialPair#AlternateDataSourceParameters
   */
  readonly alternateDataSourceParameters?: QuickSightDataSourceParameters[];

}

/**
 * @schema QuickSightTemplateSourceAnalysis
 */
export interface QuickSightTemplateSourceAnalysis {
  /**
   * @schema QuickSightTemplateSourceAnalysis#Arn
   */
  readonly arn: string;

  /**
   * @schema QuickSightTemplateSourceAnalysis#DataSetReferences
   */
  readonly dataSetReferences: QuickSightDataSetReference[];

}

/**
 * @schema QuickSightTemplateSourceTemplate
 */
export interface QuickSightTemplateSourceTemplate {
  /**
   * @schema QuickSightTemplateSourceTemplate#Arn
   */
  readonly arn: string;

}

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
 * @schema QuickSightQueueInfo
 */
export interface QuickSightQueueInfo {
  /**
   * @schema QuickSightQueueInfo#WaitingOnIngestion
   */
  readonly waitingOnIngestion: string;

  /**
   * @schema QuickSightQueueInfo#QueuedIngestion
   */
  readonly queuedIngestion: string;

}

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
 * @schema QuickSightDataSetReference
 */
export interface QuickSightDataSetReference {
  /**
   * @schema QuickSightDataSetReference#DataSetPlaceholder
   */
  readonly dataSetPlaceholder: string;

  /**
   * @schema QuickSightDataSetReference#DataSetArn
   */
  readonly dataSetArn: string;

}

/**
 * @schema QuickSightInputColumn
 */
export interface QuickSightInputColumn {
  /**
   * @schema QuickSightInputColumn#Name
   */
  readonly name: string;

  /**
   * @schema QuickSightInputColumn#Type
   */
  readonly type: string;

}

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
 * @schema QuickSightProjectOperation
 */
export interface QuickSightProjectOperation {
  /**
   * @schema QuickSightProjectOperation#ProjectedColumns
   */
  readonly projectedColumns: string[];

}

/**
 * @schema QuickSightFilterOperation
 */
export interface QuickSightFilterOperation {
  /**
   * @schema QuickSightFilterOperation#ConditionExpression
   */
  readonly conditionExpression: string;

}

/**
 * @schema QuickSightCreateColumnsOperation
 */
export interface QuickSightCreateColumnsOperation {
  /**
   * @schema QuickSightCreateColumnsOperation#Columns
   */
  readonly columns: QuickSightCalculatedColumn[];

}

/**
 * @schema QuickSightRenameColumnOperation
 */
export interface QuickSightRenameColumnOperation {
  /**
   * @schema QuickSightRenameColumnOperation#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema QuickSightRenameColumnOperation#NewColumnName
   */
  readonly newColumnName: string;

}

/**
 * @schema QuickSightCastColumnTypeOperation
 */
export interface QuickSightCastColumnTypeOperation {
  /**
   * @schema QuickSightCastColumnTypeOperation#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema QuickSightCastColumnTypeOperation#NewColumnType
   */
  readonly newColumnType: string;

  /**
   * @schema QuickSightCastColumnTypeOperation#Format
   */
  readonly format?: string;

}

/**
 * @schema QuickSightTagColumnOperation
 */
export interface QuickSightTagColumnOperation {
  /**
   * @schema QuickSightTagColumnOperation#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema QuickSightTagColumnOperation#Tags
   */
  readonly tags: QuickSightColumnTag[];

}

/**
 * @schema QuickSightJoinInstruction
 */
export interface QuickSightJoinInstruction {
  /**
   * @schema QuickSightJoinInstruction#LeftOperand
   */
  readonly leftOperand: string;

  /**
   * @schema QuickSightJoinInstruction#RightOperand
   */
  readonly rightOperand: string;

  /**
   * @schema QuickSightJoinInstruction#Type
   */
  readonly type: string;

  /**
   * @schema QuickSightJoinInstruction#OnClause
   */
  readonly onClause: string;

}

/**
 * @schema QuickSightManifestFileLocation
 */
export interface QuickSightManifestFileLocation {
  /**
   * @schema QuickSightManifestFileLocation#Bucket
   */
  readonly bucket: string;

  /**
   * @schema QuickSightManifestFileLocation#Key
   */
  readonly key: string;

}

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
 * @schema QuickSightCalculatedColumn
 */
export interface QuickSightCalculatedColumn {
  /**
   * @schema QuickSightCalculatedColumn#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema QuickSightCalculatedColumn#ColumnId
   */
  readonly columnId: string;

  /**
   * @schema QuickSightCalculatedColumn#Expression
   */
  readonly expression: string;

}

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
 * @schema QuickSightBorderStyle
 */
export interface QuickSightBorderStyle {
  /**
   * @schema QuickSightBorderStyle#Show
   */
  readonly show?: boolean;

}

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
 * @schema QuickSightMarginStyle
 */
export interface QuickSightMarginStyle {
  /**
   * @schema QuickSightMarginStyle#Show
   */
  readonly show?: boolean;

}

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
 * @schema QuickSightColumnDescription
 */
export interface QuickSightColumnDescription {
  /**
   * @schema QuickSightColumnDescription#Text
   */
  readonly text?: string;

}

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
 * @schema QuickSightColumnGroupColumnSchema
 */
export interface QuickSightColumnGroupColumnSchema {
  /**
   * @schema QuickSightColumnGroupColumnSchema#Name
   */
  readonly name?: string;

}
