/**
 * @schema CancelIngestionRequest
 */
export interface CancelIngestionRequest {
  /**
   * @schema CancelIngestionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CancelIngestionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema CancelIngestionRequest#IngestionId
   */
  readonly ingestionId: string;

}

/**
 * @schema CancelIngestionResponse
 */
export interface CancelIngestionResponse {
  /**
   * @schema CancelIngestionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CancelIngestionResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema CancelIngestionResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CancelIngestionResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateAccountCustomizationRequest
 */
export interface CreateAccountCustomizationRequest {
  /**
   * @schema CreateAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema CreateAccountCustomizationRequest#AccountCustomization
   */
  readonly accountCustomization: AccountCustomization;

  /**
   * @schema CreateAccountCustomizationRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAccountCustomizationResponse
 */
export interface CreateAccountCustomizationResponse {
  /**
   * @schema CreateAccountCustomizationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateAccountCustomizationResponse#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema CreateAccountCustomizationResponse#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema CreateAccountCustomizationResponse#AccountCustomization
   */
  readonly accountCustomization?: AccountCustomization;

  /**
   * @schema CreateAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateAnalysisRequest
 */
export interface CreateAnalysisRequest {
  /**
   * @schema CreateAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

  /**
   * @schema CreateAnalysisRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAnalysisRequest#Parameters
   */
  readonly parameters?: Parameters;

  /**
   * @schema CreateAnalysisRequest#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema CreateAnalysisRequest#SourceEntity
   */
  readonly sourceEntity: AnalysisSourceEntity;

  /**
   * @schema CreateAnalysisRequest#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema CreateAnalysisRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAnalysisResponse
 */
export interface CreateAnalysisResponse {
  /**
   * @schema CreateAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema CreateAnalysisResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema CreateAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema CreateAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema CreateDashboardRequest
 */
export interface CreateDashboardRequest {
  /**
   * @schema CreateDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema CreateDashboardRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDashboardRequest#Parameters
   */
  readonly parameters?: Parameters;

  /**
   * @schema CreateDashboardRequest#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema CreateDashboardRequest#SourceEntity
   */
  readonly sourceEntity: DashboardSourceEntity;

  /**
   * @schema CreateDashboardRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDashboardRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema CreateDashboardRequest#DashboardPublishOptions
   */
  readonly dashboardPublishOptions?: DashboardPublishOptions;

  /**
   * @schema CreateDashboardRequest#ThemeArn
   */
  readonly themeArn?: string;

}

/**
 * @schema CreateDashboardResponse
 */
export interface CreateDashboardResponse {
  /**
   * @schema CreateDashboardResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDashboardResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema CreateDashboardResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema CreateDashboardResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema CreateDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema CreateDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema CreateDataSetRequest
 */
export interface CreateDataSetRequest {
  /**
   * @schema CreateDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema CreateDataSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDataSetRequest#PhysicalTableMap
   */
  readonly physicalTableMap: { [key: string]: PhysicalTable };

  /**
   * @schema CreateDataSetRequest#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: LogicalTable };

  /**
   * @schema CreateDataSetRequest#ImportMode
   */
  readonly importMode: string;

  /**
   * @schema CreateDataSetRequest#ColumnGroups
   */
  readonly columnGroups?: ColumnGroup[];

  /**
   * @schema CreateDataSetRequest#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema CreateDataSetRequest#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @schema CreateDataSetRequest#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: ColumnLevelPermissionRule[];

  /**
   * @schema CreateDataSetRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDataSetResponse
 */
export interface CreateDataSetResponse {
  /**
   * @schema CreateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDataSetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema CreateDataSetResponse#IngestionArn
   */
  readonly ingestionArn?: string;

  /**
   * @schema CreateDataSetResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema CreateDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateDataSourceRequest
 */
export interface CreateDataSourceRequest {
  /**
   * @schema CreateDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema CreateDataSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDataSourceRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateDataSourceRequest#DataSourceParameters
   */
  readonly dataSourceParameters?: DataSourceParameters;

  /**
   * @schema CreateDataSourceRequest#Credentials
   */
  readonly credentials?: DataSourceCredentials;

  /**
   * @schema CreateDataSourceRequest#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema CreateDataSourceRequest#VpcConnectionProperties
   */
  readonly vpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @schema CreateDataSourceRequest#SslProperties
   */
  readonly sslProperties?: SslProperties;

  /**
   * @schema CreateDataSourceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDataSourceResponse
 */
export interface CreateDataSourceResponse {
  /**
   * @schema CreateDataSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateDataSourceResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema CreateDataSourceResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema CreateDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * @schema CreateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema CreateGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateGroupRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema CreateGroupResponse
 */
export interface CreateGroupResponse {
  /**
   * @schema CreateGroupResponse#Group
   */
  readonly group?: Group;

  /**
   * @schema CreateGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateGroupMembershipRequest
 */
export interface CreateGroupMembershipRequest {
  /**
   * @schema CreateGroupMembershipRequest#MemberName
   */
  readonly memberName: string;

  /**
   * @schema CreateGroupMembershipRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema CreateGroupMembershipRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateGroupMembershipRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema CreateGroupMembershipResponse
 */
export interface CreateGroupMembershipResponse {
  /**
   * @schema CreateGroupMembershipResponse#GroupMember
   */
  readonly groupMember?: GroupMember;

  /**
   * @schema CreateGroupMembershipResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateGroupMembershipResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateIamPolicyAssignmentRequest
 */
export interface CreateIamPolicyAssignmentRequest {
  /**
   * @schema CreateIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema CreateIamPolicyAssignmentRequest#AssignmentStatus
   */
  readonly assignmentStatus: string;

  /**
   * @schema CreateIamPolicyAssignmentRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema CreateIamPolicyAssignmentRequest#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema CreateIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema CreateIamPolicyAssignmentResponse
 */
export interface CreateIamPolicyAssignmentResponse {
  /**
   * @schema CreateIamPolicyAssignmentResponse#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema CreateIamPolicyAssignmentResponse#AssignmentId
   */
  readonly assignmentId?: string;

  /**
   * @schema CreateIamPolicyAssignmentResponse#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema CreateIamPolicyAssignmentResponse#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema CreateIamPolicyAssignmentResponse#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema CreateIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateIngestionRequest
 */
export interface CreateIngestionRequest {
  /**
   * @schema CreateIngestionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema CreateIngestionRequest#IngestionId
   */
  readonly ingestionId: string;

  /**
   * @schema CreateIngestionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

}

/**
 * @schema CreateIngestionResponse
 */
export interface CreateIngestionResponse {
  /**
   * @schema CreateIngestionResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateIngestionResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema CreateIngestionResponse#IngestionStatus
   */
  readonly ingestionStatus?: string;

  /**
   * @schema CreateIngestionResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateIngestionResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateNamespaceRequest
 */
export interface CreateNamespaceRequest {
  /**
   * @schema CreateNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateNamespaceRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema CreateNamespaceRequest#IdentityStore
   */
  readonly identityStore: string;

  /**
   * @schema CreateNamespaceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateNamespaceResponse
 */
export interface CreateNamespaceResponse {
  /**
   * @schema CreateNamespaceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateNamespaceResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateNamespaceResponse#CapacityRegion
   */
  readonly capacityRegion?: string;

  /**
   * @schema CreateNamespaceResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema CreateNamespaceResponse#IdentityStore
   */
  readonly identityStore?: string;

  /**
   * @schema CreateNamespaceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema CreateNamespaceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema CreateTemplateRequest
 */
export interface CreateTemplateRequest {
  /**
   * @schema CreateTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateTemplateRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema CreateTemplateRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CreateTemplateRequest#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema CreateTemplateRequest#SourceEntity
   */
  readonly sourceEntity: TemplateSourceEntity;

  /**
   * @schema CreateTemplateRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateTemplateRequest#VersionDescription
   */
  readonly versionDescription?: string;

}

/**
 * @schema CreateTemplateResponse
 */
export interface CreateTemplateResponse {
  /**
   * @schema CreateTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateTemplateResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema CreateTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema CreateTemplateResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema CreateTemplateResponse#Status
   */
  readonly status?: number;

  /**
   * @schema CreateTemplateResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema CreateTemplateAliasRequest
 */
export interface CreateTemplateAliasRequest {
  /**
   * @schema CreateTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema CreateTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema CreateTemplateAliasRequest#TemplateVersionNumber
   */
  readonly templateVersionNumber: number;

}

/**
 * @schema CreateTemplateAliasResponse
 */
export interface CreateTemplateAliasResponse {
  /**
   * @schema CreateTemplateAliasResponse#TemplateAlias
   */
  readonly templateAlias?: TemplateAlias;

  /**
   * @schema CreateTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema CreateTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema CreateThemeRequest
 */
export interface CreateThemeRequest {
  /**
   * @schema CreateThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema CreateThemeRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateThemeRequest#BaseThemeId
   */
  readonly baseThemeId: string;

  /**
   * @schema CreateThemeRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema CreateThemeRequest#Configuration
   */
  readonly configuration: ThemeConfiguration;

  /**
   * @schema CreateThemeRequest#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema CreateThemeRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateThemeResponse
 */
export interface CreateThemeResponse {
  /**
   * @schema CreateThemeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema CreateThemeResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema CreateThemeResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema CreateThemeResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema CreateThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema CreateThemeResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema CreateThemeAliasRequest
 */
export interface CreateThemeAliasRequest {
  /**
   * @schema CreateThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema CreateThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema CreateThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema CreateThemeAliasRequest#ThemeVersionNumber
   */
  readonly themeVersionNumber: number;

}

/**
 * @schema CreateThemeAliasResponse
 */
export interface CreateThemeAliasResponse {
  /**
   * @schema CreateThemeAliasResponse#ThemeAlias
   */
  readonly themeAlias?: ThemeAlias;

  /**
   * @schema CreateThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema CreateThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DeleteAccountCustomizationRequest
 */
export interface DeleteAccountCustomizationRequest {
  /**
   * @schema DeleteAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

}

/**
 * @schema DeleteAccountCustomizationResponse
 */
export interface DeleteAccountCustomizationResponse {
  /**
   * @schema DeleteAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteAnalysisRequest
 */
export interface DeleteAnalysisRequest {
  /**
   * @schema DeleteAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

  /**
   * @schema DeleteAnalysisRequest#RecoveryWindowInDays
   */
  readonly recoveryWindowInDays?: number;

  /**
   * @schema DeleteAnalysisRequest#ForceDeleteWithoutRecovery
   */
  readonly forceDeleteWithoutRecovery?: boolean;

}

/**
 * @schema DeleteAnalysisResponse
 */
export interface DeleteAnalysisResponse {
  /**
   * @schema DeleteAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DeleteAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema DeleteAnalysisResponse#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema DeleteAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DeleteDashboardRequest
 */
export interface DeleteDashboardRequest {
  /**
   * @schema DeleteDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema DeleteDashboardRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema DeleteDashboardResponse
 */
export interface DeleteDashboardResponse {
  /**
   * @schema DeleteDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DeleteDashboardResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteDashboardResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema DeleteDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DeleteDataSetRequest
 */
export interface DeleteDataSetRequest {
  /**
   * @schema DeleteDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema DeleteDataSetResponse
 */
export interface DeleteDataSetResponse {
  /**
   * @schema DeleteDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteDataSetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DeleteDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteDataSourceRequest
 */
export interface DeleteDataSourceRequest {
  /**
   * @schema DeleteDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

}

/**
 * @schema DeleteDataSourceResponse
 */
export interface DeleteDataSourceResponse {
  /**
   * @schema DeleteDataSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteDataSourceResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema DeleteDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteGroupRequest
 */
export interface DeleteGroupRequest {
  /**
   * @schema DeleteGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema DeleteGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteGroupRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DeleteGroupResponse
 */
export interface DeleteGroupResponse {
  /**
   * @schema DeleteGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteGroupMembershipRequest
 */
export interface DeleteGroupMembershipRequest {
  /**
   * @schema DeleteGroupMembershipRequest#MemberName
   */
  readonly memberName: string;

  /**
   * @schema DeleteGroupMembershipRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema DeleteGroupMembershipRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteGroupMembershipRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DeleteGroupMembershipResponse
 */
export interface DeleteGroupMembershipResponse {
  /**
   * @schema DeleteGroupMembershipResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteGroupMembershipResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteIamPolicyAssignmentRequest
 */
export interface DeleteIamPolicyAssignmentRequest {
  /**
   * @schema DeleteIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema DeleteIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DeleteIamPolicyAssignmentResponse
 */
export interface DeleteIamPolicyAssignmentResponse {
  /**
   * @schema DeleteIamPolicyAssignmentResponse#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema DeleteIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteNamespaceRequest
 */
export interface DeleteNamespaceRequest {
  /**
   * @schema DeleteNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteNamespaceRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DeleteNamespaceResponse
 */
export interface DeleteNamespaceResponse {
  /**
   * @schema DeleteNamespaceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteNamespaceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteTemplateRequest
 */
export interface DeleteTemplateRequest {
  /**
   * @schema DeleteTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteTemplateRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema DeleteTemplateRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema DeleteTemplateResponse
 */
export interface DeleteTemplateResponse {
  /**
   * @schema DeleteTemplateResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema DeleteTemplateResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteTemplateAliasRequest
 */
export interface DeleteTemplateAliasRequest {
  /**
   * @schema DeleteTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema DeleteTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

}

/**
 * @schema DeleteTemplateAliasResponse
 */
export interface DeleteTemplateAliasResponse {
  /**
   * @schema DeleteTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DeleteTemplateAliasResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema DeleteTemplateAliasResponse#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema DeleteTemplateAliasResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DeleteThemeRequest
 */
export interface DeleteThemeRequest {
  /**
   * @schema DeleteThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema DeleteThemeRequest#VersionNumber
   */
  readonly versionNumber?: number;

}

/**
 * @schema DeleteThemeResponse
 */
export interface DeleteThemeResponse {
  /**
   * @schema DeleteThemeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteThemeResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DeleteThemeResponse#ThemeId
   */
  readonly themeId?: string;

}

/**
 * @schema DeleteThemeAliasRequest
 */
export interface DeleteThemeAliasRequest {
  /**
   * @schema DeleteThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema DeleteThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

}

/**
 * @schema DeleteThemeAliasResponse
 */
export interface DeleteThemeAliasResponse {
  /**
   * @schema DeleteThemeAliasResponse#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema DeleteThemeAliasResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeleteThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DeleteThemeAliasResponse#ThemeId
   */
  readonly themeId?: string;

}

/**
 * @schema DeleteUserRequest
 */
export interface DeleteUserRequest {
  /**
   * @schema DeleteUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DeleteUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteUserRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DeleteUserResponse
 */
export interface DeleteUserResponse {
  /**
   * @schema DeleteUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteUserResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DeleteUserByPrincipalIdRequest
 */
export interface DeleteUserByPrincipalIdRequest {
  /**
   * @schema DeleteUserByPrincipalIdRequest#PrincipalId
   */
  readonly principalId: string;

  /**
   * @schema DeleteUserByPrincipalIdRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DeleteUserByPrincipalIdRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DeleteUserByPrincipalIdResponse
 */
export interface DeleteUserByPrincipalIdResponse {
  /**
   * @schema DeleteUserByPrincipalIdResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DeleteUserByPrincipalIdResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeAccountCustomizationRequest
 */
export interface DescribeAccountCustomizationRequest {
  /**
   * @schema DescribeAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema DescribeAccountCustomizationRequest#Resolved
   */
  readonly resolved?: boolean;

}

/**
 * @schema DescribeAccountCustomizationResponse
 */
export interface DescribeAccountCustomizationResponse {
  /**
   * @schema DescribeAccountCustomizationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeAccountCustomizationResponse#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema DescribeAccountCustomizationResponse#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema DescribeAccountCustomizationResponse#AccountCustomization
   */
  readonly accountCustomization?: AccountCustomization;

  /**
   * @schema DescribeAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeAccountSettingsRequest
 */
export interface DescribeAccountSettingsRequest {
  /**
   * @schema DescribeAccountSettingsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

}

/**
 * @schema DescribeAccountSettingsResponse
 */
export interface DescribeAccountSettingsResponse {
  /**
   * @schema DescribeAccountSettingsResponse#AccountSettings
   */
  readonly accountSettings?: AccountSettings;

  /**
   * @schema DescribeAccountSettingsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeAccountSettingsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeAnalysisRequest
 */
export interface DescribeAnalysisRequest {
  /**
   * @schema DescribeAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

}

/**
 * @schema DescribeAnalysisResponse
 */
export interface DescribeAnalysisResponse {
  /**
   * @schema DescribeAnalysisResponse#Analysis
   */
  readonly analysis?: Analysis;

  /**
   * @schema DescribeAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeAnalysisPermissionsRequest
 */
export interface DescribeAnalysisPermissionsRequest {
  /**
   * @schema DescribeAnalysisPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeAnalysisPermissionsRequest#AnalysisId
   */
  readonly analysisId: string;

}

/**
 * @schema DescribeAnalysisPermissionsResponse
 */
export interface DescribeAnalysisPermissionsResponse {
  /**
   * @schema DescribeAnalysisPermissionsResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema DescribeAnalysisPermissionsResponse#AnalysisArn
   */
  readonly analysisArn?: string;

  /**
   * @schema DescribeAnalysisPermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema DescribeAnalysisPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeAnalysisPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeDashboardRequest
 */
export interface DescribeDashboardRequest {
  /**
   * @schema DescribeDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema DescribeDashboardRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema DescribeDashboardRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * @schema DescribeDashboardResponse
 */
export interface DescribeDashboardResponse {
  /**
   * @schema DescribeDashboardResponse#Dashboard
   */
  readonly dashboard?: Dashboard;

  /**
   * @schema DescribeDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeDashboardPermissionsRequest
 */
export interface DescribeDashboardPermissionsRequest {
  /**
   * @schema DescribeDashboardPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeDashboardPermissionsRequest#DashboardId
   */
  readonly dashboardId: string;

}

/**
 * @schema DescribeDashboardPermissionsResponse
 */
export interface DescribeDashboardPermissionsResponse {
  /**
   * @schema DescribeDashboardPermissionsResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema DescribeDashboardPermissionsResponse#DashboardArn
   */
  readonly dashboardArn?: string;

  /**
   * @schema DescribeDashboardPermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema DescribeDashboardPermissionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeDashboardPermissionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeDataSetRequest
 */
export interface DescribeDataSetRequest {
  /**
   * @schema DescribeDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema DescribeDataSetResponse
 */
export interface DescribeDataSetResponse {
  /**
   * @schema DescribeDataSetResponse#DataSet
   */
  readonly dataSet?: DataSet;

  /**
   * @schema DescribeDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeDataSetPermissionsRequest
 */
export interface DescribeDataSetPermissionsRequest {
  /**
   * @schema DescribeDataSetPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeDataSetPermissionsRequest#DataSetId
   */
  readonly dataSetId: string;

}

/**
 * @schema DescribeDataSetPermissionsResponse
 */
export interface DescribeDataSetPermissionsResponse {
  /**
   * @schema DescribeDataSetPermissionsResponse#DataSetArn
   */
  readonly dataSetArn?: string;

  /**
   * @schema DescribeDataSetPermissionsResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DescribeDataSetPermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema DescribeDataSetPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeDataSetPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeDataSourceRequest
 */
export interface DescribeDataSourceRequest {
  /**
   * @schema DescribeDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

}

/**
 * @schema DescribeDataSourceResponse
 */
export interface DescribeDataSourceResponse {
  /**
   * @schema DescribeDataSourceResponse#DataSource
   */
  readonly dataSource?: DataSource;

  /**
   * @schema DescribeDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeDataSourcePermissionsRequest
 */
export interface DescribeDataSourcePermissionsRequest {
  /**
   * @schema DescribeDataSourcePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeDataSourcePermissionsRequest#DataSourceId
   */
  readonly dataSourceId: string;

}

/**
 * @schema DescribeDataSourcePermissionsResponse
 */
export interface DescribeDataSourcePermissionsResponse {
  /**
   * @schema DescribeDataSourcePermissionsResponse#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema DescribeDataSourcePermissionsResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema DescribeDataSourcePermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema DescribeDataSourcePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeDataSourcePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeGroupRequest
 */
export interface DescribeGroupRequest {
  /**
   * @schema DescribeGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema DescribeGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeGroupRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DescribeGroupResponse
 */
export interface DescribeGroupResponse {
  /**
   * @schema DescribeGroupResponse#Group
   */
  readonly group?: Group;

  /**
   * @schema DescribeGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeIamPolicyAssignmentRequest
 */
export interface DescribeIamPolicyAssignmentRequest {
  /**
   * @schema DescribeIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema DescribeIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DescribeIamPolicyAssignmentResponse
 */
export interface DescribeIamPolicyAssignmentResponse {
  /**
   * @schema DescribeIamPolicyAssignmentResponse#IAMPolicyAssignment
   */
  readonly iamPolicyAssignment?: IamPolicyAssignment;

  /**
   * @schema DescribeIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeIngestionRequest
 */
export interface DescribeIngestionRequest {
  /**
   * @schema DescribeIngestionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeIngestionRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema DescribeIngestionRequest#IngestionId
   */
  readonly ingestionId: string;

}

/**
 * @schema DescribeIngestionResponse
 */
export interface DescribeIngestionResponse {
  /**
   * @schema DescribeIngestionResponse#Ingestion
   */
  readonly ingestion?: Ingestion;

  /**
   * @schema DescribeIngestionResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeIngestionResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeNamespaceRequest
 */
export interface DescribeNamespaceRequest {
  /**
   * @schema DescribeNamespaceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeNamespaceRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DescribeNamespaceResponse
 */
export interface DescribeNamespaceResponse {
  /**
   * @schema DescribeNamespaceResponse#Namespace
   */
  readonly namespace?: NamespaceInfoV2;

  /**
   * @schema DescribeNamespaceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeNamespaceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeTemplateRequest
 */
export interface DescribeTemplateRequest {
  /**
   * @schema DescribeTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeTemplateRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema DescribeTemplateRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema DescribeTemplateRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * @schema DescribeTemplateResponse
 */
export interface DescribeTemplateResponse {
  /**
   * @schema DescribeTemplateResponse#Template
   */
  readonly template?: Template;

  /**
   * @schema DescribeTemplateResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeTemplateResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeTemplateAliasRequest
 */
export interface DescribeTemplateAliasRequest {
  /**
   * @schema DescribeTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema DescribeTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

}

/**
 * @schema DescribeTemplateAliasResponse
 */
export interface DescribeTemplateAliasResponse {
  /**
   * @schema DescribeTemplateAliasResponse#TemplateAlias
   */
  readonly templateAlias?: TemplateAlias;

  /**
   * @schema DescribeTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeTemplatePermissionsRequest
 */
export interface DescribeTemplatePermissionsRequest {
  /**
   * @schema DescribeTemplatePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeTemplatePermissionsRequest#TemplateId
   */
  readonly templateId: string;

}

/**
 * @schema DescribeTemplatePermissionsResponse
 */
export interface DescribeTemplatePermissionsResponse {
  /**
   * @schema DescribeTemplatePermissionsResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema DescribeTemplatePermissionsResponse#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema DescribeTemplatePermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema DescribeTemplatePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeTemplatePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeThemeRequest
 */
export interface DescribeThemeRequest {
  /**
   * @schema DescribeThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema DescribeThemeRequest#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema DescribeThemeRequest#AliasName
   */
  readonly aliasName?: string;

}

/**
 * @schema DescribeThemeResponse
 */
export interface DescribeThemeResponse {
  /**
   * @schema DescribeThemeResponse#Theme
   */
  readonly theme?: Theme;

  /**
   * @schema DescribeThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeThemeResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeThemeAliasRequest
 */
export interface DescribeThemeAliasRequest {
  /**
   * @schema DescribeThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema DescribeThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

}

/**
 * @schema DescribeThemeAliasResponse
 */
export interface DescribeThemeAliasResponse {
  /**
   * @schema DescribeThemeAliasResponse#ThemeAlias
   */
  readonly themeAlias?: ThemeAlias;

  /**
   * @schema DescribeThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema DescribeThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema DescribeThemePermissionsRequest
 */
export interface DescribeThemePermissionsRequest {
  /**
   * @schema DescribeThemePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeThemePermissionsRequest#ThemeId
   */
  readonly themeId: string;

}

/**
 * @schema DescribeThemePermissionsResponse
 */
export interface DescribeThemePermissionsResponse {
  /**
   * @schema DescribeThemePermissionsResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema DescribeThemePermissionsResponse#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema DescribeThemePermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema DescribeThemePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeThemePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema DescribeUserRequest
 */
export interface DescribeUserRequest {
  /**
   * @schema DescribeUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema DescribeUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema DescribeUserRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema DescribeUserResponse
 */
export interface DescribeUserResponse {
  /**
   * @schema DescribeUserResponse#User
   */
  readonly user?: User;

  /**
   * @schema DescribeUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema DescribeUserResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema GetDashboardEmbedUrlRequest
 */
export interface GetDashboardEmbedUrlRequest {
  /**
   * @schema GetDashboardEmbedUrlRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema GetDashboardEmbedUrlRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema GetDashboardEmbedUrlRequest#IdentityType
   */
  readonly identityType: string;

  /**
   * @schema GetDashboardEmbedUrlRequest#SessionLifetimeInMinutes
   */
  readonly sessionLifetimeInMinutes?: number;

  /**
   * @schema GetDashboardEmbedUrlRequest#UndoRedoDisabled
   */
  readonly undoRedoDisabled?: boolean;

  /**
   * @schema GetDashboardEmbedUrlRequest#ResetDisabled
   */
  readonly resetDisabled?: boolean;

  /**
   * @schema GetDashboardEmbedUrlRequest#StatePersistenceEnabled
   */
  readonly statePersistenceEnabled?: boolean;

  /**
   * @schema GetDashboardEmbedUrlRequest#UserArn
   */
  readonly userArn?: string;

  /**
   * @schema GetDashboardEmbedUrlRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema GetDashboardEmbedUrlRequest#AdditionalDashboardIds
   */
  readonly additionalDashboardIds?: string[];

}

/**
 * @schema GetDashboardEmbedUrlResponse
 */
export interface GetDashboardEmbedUrlResponse {
  /**
   * @schema GetDashboardEmbedUrlResponse#EmbedUrl
   */
  readonly embedUrl?: string;

  /**
   * @schema GetDashboardEmbedUrlResponse#Status
   */
  readonly status?: number;

  /**
   * @schema GetDashboardEmbedUrlResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema GetSessionEmbedUrlRequest
 */
export interface GetSessionEmbedUrlRequest {
  /**
   * @schema GetSessionEmbedUrlRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema GetSessionEmbedUrlRequest#EntryPoint
   */
  readonly entryPoint?: string;

  /**
   * @schema GetSessionEmbedUrlRequest#SessionLifetimeInMinutes
   */
  readonly sessionLifetimeInMinutes?: number;

  /**
   * @schema GetSessionEmbedUrlRequest#UserArn
   */
  readonly userArn?: string;

}

/**
 * @schema GetSessionEmbedUrlResponse
 */
export interface GetSessionEmbedUrlResponse {
  /**
   * @schema GetSessionEmbedUrlResponse#EmbedUrl
   */
  readonly embedUrl?: string;

  /**
   * @schema GetSessionEmbedUrlResponse#Status
   */
  readonly status?: number;

  /**
   * @schema GetSessionEmbedUrlResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListAnalysesRequest
 */
export interface ListAnalysesRequest {
  /**
   * @schema ListAnalysesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListAnalysesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAnalysesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAnalysesResponse
 */
export interface ListAnalysesResponse {
  /**
   * @schema ListAnalysesResponse#AnalysisSummaryList
   */
  readonly analysisSummaryList?: AnalysisSummary[];

  /**
   * @schema ListAnalysesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAnalysesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListAnalysesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListDashboardVersionsRequest
 */
export interface ListDashboardVersionsRequest {
  /**
   * @schema ListDashboardVersionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListDashboardVersionsRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema ListDashboardVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDashboardVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDashboardVersionsResponse
 */
export interface ListDashboardVersionsResponse {
  /**
   * @schema ListDashboardVersionsResponse#DashboardVersionSummaryList
   */
  readonly dashboardVersionSummaryList?: DashboardVersionSummary[];

  /**
   * @schema ListDashboardVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDashboardVersionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListDashboardVersionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListDashboardsRequest
 */
export interface ListDashboardsRequest {
  /**
   * @schema ListDashboardsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListDashboardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDashboardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDashboardsResponse
 */
export interface ListDashboardsResponse {
  /**
   * @schema ListDashboardsResponse#DashboardSummaryList
   */
  readonly dashboardSummaryList?: DashboardSummary[];

  /**
   * @schema ListDashboardsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDashboardsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListDashboardsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListDataSetsRequest
 */
export interface ListDataSetsRequest {
  /**
   * @schema ListDataSetsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListDataSetsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSetsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDataSetsResponse
 */
export interface ListDataSetsResponse {
  /**
   * @schema ListDataSetsResponse#DataSetSummaries
   */
  readonly dataSetSummaries?: DataSetSummary[];

  /**
   * @schema ListDataSetsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSetsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListDataSetsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListDataSourcesRequest
 */
export interface ListDataSourcesRequest {
  /**
   * @schema ListDataSourcesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListDataSourcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSourcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDataSourcesResponse
 */
export interface ListDataSourcesResponse {
  /**
   * @schema ListDataSourcesResponse#DataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema ListDataSourcesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDataSourcesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListDataSourcesResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListGroupMembershipsRequest
 */
export interface ListGroupMembershipsRequest {
  /**
   * @schema ListGroupMembershipsRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema ListGroupMembershipsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupMembershipsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListGroupMembershipsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListGroupMembershipsRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema ListGroupMembershipsResponse
 */
export interface ListGroupMembershipsResponse {
  /**
   * @schema ListGroupMembershipsResponse#GroupMemberList
   */
  readonly groupMemberList?: GroupMember[];

  /**
   * @schema ListGroupMembershipsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupMembershipsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListGroupMembershipsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListGroupsRequest
 */
export interface ListGroupsRequest {
  /**
   * @schema ListGroupsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListGroupsRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema ListGroupsResponse
 */
export interface ListGroupsResponse {
  /**
   * @schema ListGroupsResponse#GroupList
   */
  readonly groupList?: Group[];

  /**
   * @schema ListGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListGroupsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListIamPolicyAssignmentsRequest
 */
export interface ListIamPolicyAssignmentsRequest {
  /**
   * @schema ListIamPolicyAssignmentsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListIamPolicyAssignmentsRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema ListIamPolicyAssignmentsRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema ListIamPolicyAssignmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIamPolicyAssignmentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListIamPolicyAssignmentsResponse
 */
export interface ListIamPolicyAssignmentsResponse {
  /**
   * @schema ListIamPolicyAssignmentsResponse#IAMPolicyAssignments
   */
  readonly iamPolicyAssignments?: IamPolicyAssignmentSummary[];

  /**
   * @schema ListIamPolicyAssignmentsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIamPolicyAssignmentsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListIamPolicyAssignmentsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListIamPolicyAssignmentsForUserRequest
 */
export interface ListIamPolicyAssignmentsForUserRequest {
  /**
   * @schema ListIamPolicyAssignmentsForUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListIamPolicyAssignmentsForUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ListIamPolicyAssignmentsForUserRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIamPolicyAssignmentsForUserRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListIamPolicyAssignmentsForUserRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema ListIamPolicyAssignmentsForUserResponse
 */
export interface ListIamPolicyAssignmentsForUserResponse {
  /**
   * @schema ListIamPolicyAssignmentsForUserResponse#ActiveAssignments
   */
  readonly activeAssignments?: ActiveIamPolicyAssignment[];

  /**
   * @schema ListIamPolicyAssignmentsForUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListIamPolicyAssignmentsForUserResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIamPolicyAssignmentsForUserResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListIngestionsRequest
 */
export interface ListIngestionsRequest {
  /**
   * @schema ListIngestionsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema ListIngestionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIngestionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListIngestionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListIngestionsResponse
 */
export interface ListIngestionsResponse {
  /**
   * @schema ListIngestionsResponse#Ingestions
   */
  readonly ingestions?: Ingestion[];

  /**
   * @schema ListIngestionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIngestionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListIngestionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListNamespacesRequest
 */
export interface ListNamespacesRequest {
  /**
   * @schema ListNamespacesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListNamespacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNamespacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListNamespacesResponse
 */
export interface ListNamespacesResponse {
  /**
   * @schema ListNamespacesResponse#Namespaces
   */
  readonly namespaces?: NamespaceInfoV2[];

  /**
   * @schema ListNamespacesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNamespacesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListNamespacesResponse#Status
   */
  readonly status?: number;

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
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListTagsForResourceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListTemplateAliasesRequest
 */
export interface ListTemplateAliasesRequest {
  /**
   * @schema ListTemplateAliasesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListTemplateAliasesRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema ListTemplateAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplateAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTemplateAliasesResponse
 */
export interface ListTemplateAliasesResponse {
  /**
   * @schema ListTemplateAliasesResponse#TemplateAliasList
   */
  readonly templateAliasList?: TemplateAlias[];

  /**
   * @schema ListTemplateAliasesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListTemplateAliasesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListTemplateAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTemplateVersionsRequest
 */
export interface ListTemplateVersionsRequest {
  /**
   * @schema ListTemplateVersionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListTemplateVersionsRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema ListTemplateVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplateVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTemplateVersionsResponse
 */
export interface ListTemplateVersionsResponse {
  /**
   * @schema ListTemplateVersionsResponse#TemplateVersionSummaryList
   */
  readonly templateVersionSummaryList?: TemplateVersionSummary[];

  /**
   * @schema ListTemplateVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplateVersionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListTemplateVersionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListTemplatesRequest
 */
export interface ListTemplatesRequest {
  /**
   * @schema ListTemplatesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListTemplatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTemplatesResponse
 */
export interface ListTemplatesResponse {
  /**
   * @schema ListTemplatesResponse#TemplateSummaryList
   */
  readonly templateSummaryList?: TemplateSummary[];

  /**
   * @schema ListTemplatesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTemplatesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListTemplatesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListThemeAliasesRequest
 */
export interface ListThemeAliasesRequest {
  /**
   * @schema ListThemeAliasesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListThemeAliasesRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema ListThemeAliasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThemeAliasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListThemeAliasesResponse
 */
export interface ListThemeAliasesResponse {
  /**
   * @schema ListThemeAliasesResponse#ThemeAliasList
   */
  readonly themeAliasList?: ThemeAlias[];

  /**
   * @schema ListThemeAliasesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListThemeAliasesResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListThemeAliasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListThemeVersionsRequest
 */
export interface ListThemeVersionsRequest {
  /**
   * @schema ListThemeVersionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListThemeVersionsRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema ListThemeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThemeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListThemeVersionsResponse
 */
export interface ListThemeVersionsResponse {
  /**
   * @schema ListThemeVersionsResponse#ThemeVersionSummaryList
   */
  readonly themeVersionSummaryList?: ThemeVersionSummary[];

  /**
   * @schema ListThemeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThemeVersionsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListThemeVersionsResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListThemesRequest
 */
export interface ListThemesRequest {
  /**
   * @schema ListThemesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListThemesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThemesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListThemesRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema ListThemesResponse
 */
export interface ListThemesResponse {
  /**
   * @schema ListThemesResponse#ThemeSummaryList
   */
  readonly themeSummaryList?: ThemeSummary[];

  /**
   * @schema ListThemesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListThemesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema ListThemesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema ListUserGroupsRequest
 */
export interface ListUserGroupsRequest {
  /**
   * @schema ListUserGroupsRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema ListUserGroupsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListUserGroupsRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema ListUserGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUserGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListUserGroupsResponse
 */
export interface ListUserGroupsResponse {
  /**
   * @schema ListUserGroupsResponse#GroupList
   */
  readonly groupList?: Group[];

  /**
   * @schema ListUserGroupsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUserGroupsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListUserGroupsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema ListUsersRequest
 */
export interface ListUsersRequest {
  /**
   * @schema ListUsersRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema ListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUsersRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema ListUsersResponse
 */
export interface ListUsersResponse {
  /**
   * @schema ListUsersResponse#UserList
   */
  readonly userList?: User[];

  /**
   * @schema ListUsersResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUsersResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema ListUsersResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema RegisterUserRequest
 */
export interface RegisterUserRequest {
  /**
   * @schema RegisterUserRequest#IdentityType
   */
  readonly identityType: string;

  /**
   * @schema RegisterUserRequest#Email
   */
  readonly email: string;

  /**
   * @schema RegisterUserRequest#UserRole
   */
  readonly userRole: string;

  /**
   * @schema RegisterUserRequest#IamArn
   */
  readonly iamArn?: string;

  /**
   * @schema RegisterUserRequest#SessionName
   */
  readonly sessionName?: string;

  /**
   * @schema RegisterUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema RegisterUserRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema RegisterUserRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema RegisterUserRequest#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

}

/**
 * @schema RegisterUserResponse
 */
export interface RegisterUserResponse {
  /**
   * @schema RegisterUserResponse#User
   */
  readonly user?: User;

  /**
   * @schema RegisterUserResponse#UserInvitationUrl
   */
  readonly userInvitationUrl?: string;

  /**
   * @schema RegisterUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema RegisterUserResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema RestoreAnalysisRequest
 */
export interface RestoreAnalysisRequest {
  /**
   * @schema RestoreAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema RestoreAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

}

/**
 * @schema RestoreAnalysisResponse
 */
export interface RestoreAnalysisResponse {
  /**
   * @schema RestoreAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema RestoreAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema RestoreAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema RestoreAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema SearchAnalysesRequest
 */
export interface SearchAnalysesRequest {
  /**
   * @schema SearchAnalysesRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema SearchAnalysesRequest#Filters
   */
  readonly filters: AnalysisSearchFilter[];

  /**
   * @schema SearchAnalysesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchAnalysesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchAnalysesResponse
 */
export interface SearchAnalysesResponse {
  /**
   * @schema SearchAnalysesResponse#AnalysisSummaryList
   */
  readonly analysisSummaryList?: AnalysisSummary[];

  /**
   * @schema SearchAnalysesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchAnalysesResponse#Status
   */
  readonly status?: number;

  /**
   * @schema SearchAnalysesResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema SearchDashboardsRequest
 */
export interface SearchDashboardsRequest {
  /**
   * @schema SearchDashboardsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema SearchDashboardsRequest#Filters
   */
  readonly filters: DashboardSearchFilter[];

  /**
   * @schema SearchDashboardsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchDashboardsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchDashboardsResponse
 */
export interface SearchDashboardsResponse {
  /**
   * @schema SearchDashboardsResponse#DashboardSummaryList
   */
  readonly dashboardSummaryList?: DashboardSummary[];

  /**
   * @schema SearchDashboardsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchDashboardsResponse#Status
   */
  readonly status?: number;

  /**
   * @schema SearchDashboardsResponse#RequestId
   */
  readonly requestId?: string;

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
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
  /**
   * @schema TagResourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema TagResourceResponse#Status
   */
  readonly status?: number;

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
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
  /**
   * @schema UntagResourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UntagResourceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateAccountCustomizationRequest
 */
export interface UpdateAccountCustomizationRequest {
  /**
   * @schema UpdateAccountCustomizationRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateAccountCustomizationRequest#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema UpdateAccountCustomizationRequest#AccountCustomization
   */
  readonly accountCustomization: AccountCustomization;

}

/**
 * @schema UpdateAccountCustomizationResponse
 */
export interface UpdateAccountCustomizationResponse {
  /**
   * @schema UpdateAccountCustomizationResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateAccountCustomizationResponse#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema UpdateAccountCustomizationResponse#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema UpdateAccountCustomizationResponse#AccountCustomization
   */
  readonly accountCustomization?: AccountCustomization;

  /**
   * @schema UpdateAccountCustomizationResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateAccountCustomizationResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateAccountSettingsRequest
 */
export interface UpdateAccountSettingsRequest {
  /**
   * @schema UpdateAccountSettingsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateAccountSettingsRequest#DefaultNamespace
   */
  readonly defaultNamespace: string;

  /**
   * @schema UpdateAccountSettingsRequest#NotificationEmail
   */
  readonly notificationEmail?: string;

}

/**
 * @schema UpdateAccountSettingsResponse
 */
export interface UpdateAccountSettingsResponse {
  /**
   * @schema UpdateAccountSettingsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateAccountSettingsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateAnalysisRequest
 */
export interface UpdateAnalysisRequest {
  /**
   * @schema UpdateAnalysisRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateAnalysisRequest#AnalysisId
   */
  readonly analysisId: string;

  /**
   * @schema UpdateAnalysisRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateAnalysisRequest#Parameters
   */
  readonly parameters?: Parameters;

  /**
   * @schema UpdateAnalysisRequest#SourceEntity
   */
  readonly sourceEntity: AnalysisSourceEntity;

  /**
   * @schema UpdateAnalysisRequest#ThemeArn
   */
  readonly themeArn?: string;

}

/**
 * @schema UpdateAnalysisResponse
 */
export interface UpdateAnalysisResponse {
  /**
   * @schema UpdateAnalysisResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateAnalysisResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema UpdateAnalysisResponse#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema UpdateAnalysisResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateAnalysisResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateAnalysisPermissionsRequest
 */
export interface UpdateAnalysisPermissionsRequest {
  /**
   * @schema UpdateAnalysisPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateAnalysisPermissionsRequest#AnalysisId
   */
  readonly analysisId: string;

  /**
   * @schema UpdateAnalysisPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: ResourcePermission[];

  /**
   * @schema UpdateAnalysisPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: ResourcePermission[];

}

/**
 * @schema UpdateAnalysisPermissionsResponse
 */
export interface UpdateAnalysisPermissionsResponse {
  /**
   * @schema UpdateAnalysisPermissionsResponse#AnalysisArn
   */
  readonly analysisArn?: string;

  /**
   * @schema UpdateAnalysisPermissionsResponse#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema UpdateAnalysisPermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema UpdateAnalysisPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateAnalysisPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateDashboardRequest
 */
export interface UpdateDashboardRequest {
  /**
   * @schema UpdateDashboardRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDashboardRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema UpdateDashboardRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDashboardRequest#SourceEntity
   */
  readonly sourceEntity: DashboardSourceEntity;

  /**
   * @schema UpdateDashboardRequest#Parameters
   */
  readonly parameters?: Parameters;

  /**
   * @schema UpdateDashboardRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema UpdateDashboardRequest#DashboardPublishOptions
   */
  readonly dashboardPublishOptions?: DashboardPublishOptions;

  /**
   * @schema UpdateDashboardRequest#ThemeArn
   */
  readonly themeArn?: string;

}

/**
 * @schema UpdateDashboardResponse
 */
export interface UpdateDashboardResponse {
  /**
   * @schema UpdateDashboardResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateDashboardResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema UpdateDashboardResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema UpdateDashboardResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema UpdateDashboardResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateDashboardResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateDashboardPermissionsRequest
 */
export interface UpdateDashboardPermissionsRequest {
  /**
   * @schema UpdateDashboardPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDashboardPermissionsRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema UpdateDashboardPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: ResourcePermission[];

  /**
   * @schema UpdateDashboardPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: ResourcePermission[];

}

/**
 * @schema UpdateDashboardPermissionsResponse
 */
export interface UpdateDashboardPermissionsResponse {
  /**
   * @schema UpdateDashboardPermissionsResponse#DashboardArn
   */
  readonly dashboardArn?: string;

  /**
   * @schema UpdateDashboardPermissionsResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema UpdateDashboardPermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema UpdateDashboardPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateDashboardPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateDashboardPublishedVersionRequest
 */
export interface UpdateDashboardPublishedVersionRequest {
  /**
   * @schema UpdateDashboardPublishedVersionRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDashboardPublishedVersionRequest#DashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema UpdateDashboardPublishedVersionRequest#VersionNumber
   */
  readonly versionNumber: number;

}

/**
 * @schema UpdateDashboardPublishedVersionResponse
 */
export interface UpdateDashboardPublishedVersionResponse {
  /**
   * @schema UpdateDashboardPublishedVersionResponse#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema UpdateDashboardPublishedVersionResponse#DashboardArn
   */
  readonly dashboardArn?: string;

  /**
   * @schema UpdateDashboardPublishedVersionResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateDashboardPublishedVersionResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateDataSetRequest
 */
export interface UpdateDataSetRequest {
  /**
   * @schema UpdateDataSetRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDataSetRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema UpdateDataSetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDataSetRequest#PhysicalTableMap
   */
  readonly physicalTableMap: { [key: string]: PhysicalTable };

  /**
   * @schema UpdateDataSetRequest#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: LogicalTable };

  /**
   * @schema UpdateDataSetRequest#ImportMode
   */
  readonly importMode: string;

  /**
   * @schema UpdateDataSetRequest#ColumnGroups
   */
  readonly columnGroups?: ColumnGroup[];

  /**
   * @schema UpdateDataSetRequest#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @schema UpdateDataSetRequest#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: ColumnLevelPermissionRule[];

}

/**
 * @schema UpdateDataSetResponse
 */
export interface UpdateDataSetResponse {
  /**
   * @schema UpdateDataSetResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateDataSetResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema UpdateDataSetResponse#IngestionArn
   */
  readonly ingestionArn?: string;

  /**
   * @schema UpdateDataSetResponse#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema UpdateDataSetResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateDataSetResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateDataSetPermissionsRequest
 */
export interface UpdateDataSetPermissionsRequest {
  /**
   * @schema UpdateDataSetPermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDataSetPermissionsRequest#DataSetId
   */
  readonly dataSetId: string;

  /**
   * @schema UpdateDataSetPermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: ResourcePermission[];

  /**
   * @schema UpdateDataSetPermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: ResourcePermission[];

}

/**
 * @schema UpdateDataSetPermissionsResponse
 */
export interface UpdateDataSetPermissionsResponse {
  /**
   * @schema UpdateDataSetPermissionsResponse#DataSetArn
   */
  readonly dataSetArn?: string;

  /**
   * @schema UpdateDataSetPermissionsResponse#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema UpdateDataSetPermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateDataSetPermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateDataSourceRequest
 */
export interface UpdateDataSourceRequest {
  /**
   * @schema UpdateDataSourceRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDataSourceRequest#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema UpdateDataSourceRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDataSourceRequest#DataSourceParameters
   */
  readonly dataSourceParameters?: DataSourceParameters;

  /**
   * @schema UpdateDataSourceRequest#Credentials
   */
  readonly credentials?: DataSourceCredentials;

  /**
   * @schema UpdateDataSourceRequest#VpcConnectionProperties
   */
  readonly vpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @schema UpdateDataSourceRequest#SslProperties
   */
  readonly sslProperties?: SslProperties;

}

/**
 * @schema UpdateDataSourceResponse
 */
export interface UpdateDataSourceResponse {
  /**
   * @schema UpdateDataSourceResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateDataSourceResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema UpdateDataSourceResponse#UpdateStatus
   */
  readonly updateStatus?: string;

  /**
   * @schema UpdateDataSourceResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateDataSourceResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateDataSourcePermissionsRequest
 */
export interface UpdateDataSourcePermissionsRequest {
  /**
   * @schema UpdateDataSourcePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateDataSourcePermissionsRequest#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema UpdateDataSourcePermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: ResourcePermission[];

  /**
   * @schema UpdateDataSourcePermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: ResourcePermission[];

}

/**
 * @schema UpdateDataSourcePermissionsResponse
 */
export interface UpdateDataSourcePermissionsResponse {
  /**
   * @schema UpdateDataSourcePermissionsResponse#DataSourceArn
   */
  readonly dataSourceArn?: string;

  /**
   * @schema UpdateDataSourcePermissionsResponse#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema UpdateDataSourcePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateDataSourcePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateGroupRequest
 */
export interface UpdateGroupRequest {
  /**
   * @schema UpdateGroupRequest#GroupName
   */
  readonly groupName: string;

  /**
   * @schema UpdateGroupRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateGroupRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateGroupRequest#Namespace
   */
  readonly namespace: string;

}

/**
 * @schema UpdateGroupResponse
 */
export interface UpdateGroupResponse {
  /**
   * @schema UpdateGroupResponse#Group
   */
  readonly group?: Group;

  /**
   * @schema UpdateGroupResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateGroupResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateIamPolicyAssignmentRequest
 */
export interface UpdateIamPolicyAssignmentRequest {
  /**
   * @schema UpdateIamPolicyAssignmentRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateIamPolicyAssignmentRequest#AssignmentName
   */
  readonly assignmentName: string;

  /**
   * @schema UpdateIamPolicyAssignmentRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema UpdateIamPolicyAssignmentRequest#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema UpdateIamPolicyAssignmentRequest#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema UpdateIamPolicyAssignmentRequest#Identities
   */
  readonly identities?: { [key: string]: string[] };

}

/**
 * @schema UpdateIamPolicyAssignmentResponse
 */
export interface UpdateIamPolicyAssignmentResponse {
  /**
   * @schema UpdateIamPolicyAssignmentResponse#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema UpdateIamPolicyAssignmentResponse#AssignmentId
   */
  readonly assignmentId?: string;

  /**
   * @schema UpdateIamPolicyAssignmentResponse#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema UpdateIamPolicyAssignmentResponse#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema UpdateIamPolicyAssignmentResponse#AssignmentStatus
   */
  readonly assignmentStatus?: string;

  /**
   * @schema UpdateIamPolicyAssignmentResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateIamPolicyAssignmentResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateTemplateRequest
 */
export interface UpdateTemplateRequest {
  /**
   * @schema UpdateTemplateRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateTemplateRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema UpdateTemplateRequest#SourceEntity
   */
  readonly sourceEntity: TemplateSourceEntity;

  /**
   * @schema UpdateTemplateRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema UpdateTemplateRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateTemplateResponse
 */
export interface UpdateTemplateResponse {
  /**
   * @schema UpdateTemplateResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema UpdateTemplateResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateTemplateResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema UpdateTemplateResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema UpdateTemplateResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateTemplateResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateTemplateAliasRequest
 */
export interface UpdateTemplateAliasRequest {
  /**
   * @schema UpdateTemplateAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateTemplateAliasRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema UpdateTemplateAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema UpdateTemplateAliasRequest#TemplateVersionNumber
   */
  readonly templateVersionNumber: number;

}

/**
 * @schema UpdateTemplateAliasResponse
 */
export interface UpdateTemplateAliasResponse {
  /**
   * @schema UpdateTemplateAliasResponse#TemplateAlias
   */
  readonly templateAlias?: TemplateAlias;

  /**
   * @schema UpdateTemplateAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateTemplateAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateTemplatePermissionsRequest
 */
export interface UpdateTemplatePermissionsRequest {
  /**
   * @schema UpdateTemplatePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateTemplatePermissionsRequest#TemplateId
   */
  readonly templateId: string;

  /**
   * @schema UpdateTemplatePermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: ResourcePermission[];

  /**
   * @schema UpdateTemplatePermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: ResourcePermission[];

}

/**
 * @schema UpdateTemplatePermissionsResponse
 */
export interface UpdateTemplatePermissionsResponse {
  /**
   * @schema UpdateTemplatePermissionsResponse#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema UpdateTemplatePermissionsResponse#TemplateArn
   */
  readonly templateArn?: string;

  /**
   * @schema UpdateTemplatePermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema UpdateTemplatePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateTemplatePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateThemeRequest
 */
export interface UpdateThemeRequest {
  /**
   * @schema UpdateThemeRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateThemeRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema UpdateThemeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateThemeRequest#BaseThemeId
   */
  readonly baseThemeId: string;

  /**
   * @schema UpdateThemeRequest#VersionDescription
   */
  readonly versionDescription?: string;

  /**
   * @schema UpdateThemeRequest#Configuration
   */
  readonly configuration?: ThemeConfiguration;

}

/**
 * @schema UpdateThemeResponse
 */
export interface UpdateThemeResponse {
  /**
   * @schema UpdateThemeResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema UpdateThemeResponse#Arn
   */
  readonly arn?: string;

  /**
   * @schema UpdateThemeResponse#VersionArn
   */
  readonly versionArn?: string;

  /**
   * @schema UpdateThemeResponse#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema UpdateThemeResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateThemeResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateThemeAliasRequest
 */
export interface UpdateThemeAliasRequest {
  /**
   * @schema UpdateThemeAliasRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateThemeAliasRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema UpdateThemeAliasRequest#AliasName
   */
  readonly aliasName: string;

  /**
   * @schema UpdateThemeAliasRequest#ThemeVersionNumber
   */
  readonly themeVersionNumber: number;

}

/**
 * @schema UpdateThemeAliasResponse
 */
export interface UpdateThemeAliasResponse {
  /**
   * @schema UpdateThemeAliasResponse#ThemeAlias
   */
  readonly themeAlias?: ThemeAlias;

  /**
   * @schema UpdateThemeAliasResponse#Status
   */
  readonly status?: number;

  /**
   * @schema UpdateThemeAliasResponse#RequestId
   */
  readonly requestId?: string;

}

/**
 * @schema UpdateThemePermissionsRequest
 */
export interface UpdateThemePermissionsRequest {
  /**
   * @schema UpdateThemePermissionsRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateThemePermissionsRequest#ThemeId
   */
  readonly themeId: string;

  /**
   * @schema UpdateThemePermissionsRequest#GrantPermissions
   */
  readonly grantPermissions?: ResourcePermission[];

  /**
   * @schema UpdateThemePermissionsRequest#RevokePermissions
   */
  readonly revokePermissions?: ResourcePermission[];

}

/**
 * @schema UpdateThemePermissionsResponse
 */
export interface UpdateThemePermissionsResponse {
  /**
   * @schema UpdateThemePermissionsResponse#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema UpdateThemePermissionsResponse#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema UpdateThemePermissionsResponse#Permissions
   */
  readonly permissions?: ResourcePermission[];

  /**
   * @schema UpdateThemePermissionsResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateThemePermissionsResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   * @schema UpdateUserRequest#UserName
   */
  readonly userName: string;

  /**
   * @schema UpdateUserRequest#AwsAccountId
   */
  readonly awsAccountId: string;

  /**
   * @schema UpdateUserRequest#Namespace
   */
  readonly namespace: string;

  /**
   * @schema UpdateUserRequest#Email
   */
  readonly email: string;

  /**
   * @schema UpdateUserRequest#Role
   */
  readonly role: string;

  /**
   * @schema UpdateUserRequest#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

  /**
   * @schema UpdateUserRequest#UnapplyCustomPermissions
   */
  readonly unapplyCustomPermissions?: boolean;

}

/**
 * @schema UpdateUserResponse
 */
export interface UpdateUserResponse {
  /**
   * @schema UpdateUserResponse#User
   */
  readonly user?: User;

  /**
   * @schema UpdateUserResponse#RequestId
   */
  readonly requestId?: string;

  /**
   * @schema UpdateUserResponse#Status
   */
  readonly status?: number;

}

/**
 * @schema AccountCustomization
 */
export interface AccountCustomization {
  /**
   * @schema AccountCustomization#DefaultTheme
   */
  readonly defaultTheme?: string;

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
  readonly value: string;

}

/**
 * @schema Parameters
 */
export interface Parameters {
  /**
   * @schema Parameters#StringParameters
   */
  readonly stringParameters?: StringParameter[];

  /**
   * @schema Parameters#IntegerParameters
   */
  readonly integerParameters?: IntegerParameter[];

  /**
   * @schema Parameters#DecimalParameters
   */
  readonly decimalParameters?: DecimalParameter[];

  /**
   * @schema Parameters#DateTimeParameters
   */
  readonly dateTimeParameters?: DateTimeParameter[];

}

/**
 * @schema ResourcePermission
 */
export interface ResourcePermission {
  /**
   * @schema ResourcePermission#Principal
   */
  readonly principal: string;

  /**
   * @schema ResourcePermission#Actions
   */
  readonly actions: string[];

}

/**
 * @schema AnalysisSourceEntity
 */
export interface AnalysisSourceEntity {
  /**
   * @schema AnalysisSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: AnalysisSourceTemplate;

}

/**
 * @schema DashboardSourceEntity
 */
export interface DashboardSourceEntity {
  /**
   * @schema DashboardSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: DashboardSourceTemplate;

}

/**
 * @schema DashboardPublishOptions
 */
export interface DashboardPublishOptions {
  /**
   * @schema DashboardPublishOptions#AdHocFilteringOption
   */
  readonly adHocFilteringOption?: AdHocFilteringOption;

  /**
   * @schema DashboardPublishOptions#ExportToCSVOption
   */
  readonly exportToCsvOption?: ExportToCsvOption;

  /**
   * @schema DashboardPublishOptions#SheetControlsOption
   */
  readonly sheetControlsOption?: SheetControlsOption;

}

/**
 * @schema PhysicalTable
 */
export interface PhysicalTable {
  /**
   * @schema PhysicalTable#RelationalTable
   */
  readonly relationalTable?: RelationalTable;

  /**
   * @schema PhysicalTable#CustomSql
   */
  readonly customSql?: CustomSql;

  /**
   * @schema PhysicalTable#S3Source
   */
  readonly s3Source?: S3Source;

}

/**
 * @schema LogicalTable
 */
export interface LogicalTable {
  /**
   * @schema LogicalTable#Alias
   */
  readonly alias: string;

  /**
   * @schema LogicalTable#DataTransforms
   */
  readonly dataTransforms?: TransformOperation[];

  /**
   * @schema LogicalTable#Source
   */
  readonly source: LogicalTableSource;

}

/**
 * @schema ColumnGroup
 */
export interface ColumnGroup {
  /**
   * @schema ColumnGroup#GeoSpatialColumnGroup
   */
  readonly geoSpatialColumnGroup?: GeoSpatialColumnGroup;

}

/**
 * @schema RowLevelPermissionDataSet
 */
export interface RowLevelPermissionDataSet {
  /**
   * @schema RowLevelPermissionDataSet#Namespace
   */
  readonly namespace?: string;

  /**
   * @schema RowLevelPermissionDataSet#Arn
   */
  readonly arn: string;

  /**
   * @schema RowLevelPermissionDataSet#PermissionPolicy
   */
  readonly permissionPolicy: string;

}

/**
 * @schema ColumnLevelPermissionRule
 */
export interface ColumnLevelPermissionRule {
  /**
   * @schema ColumnLevelPermissionRule#Principals
   */
  readonly principals?: string[];

  /**
   * @schema ColumnLevelPermissionRule#ColumnNames
   */
  readonly columnNames?: string[];

}

/**
 * @schema DataSourceParameters
 */
export interface DataSourceParameters {
  /**
   * @schema DataSourceParameters#AmazonElasticsearchParameters
   */
  readonly amazonElasticsearchParameters?: AmazonElasticsearchParameters;

  /**
   * @schema DataSourceParameters#AthenaParameters
   */
  readonly athenaParameters?: AthenaParameters;

  /**
   * @schema DataSourceParameters#AuroraParameters
   */
  readonly auroraParameters?: AuroraParameters;

  /**
   * @schema DataSourceParameters#AuroraPostgreSqlParameters
   */
  readonly auroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

  /**
   * @schema DataSourceParameters#AwsIotAnalyticsParameters
   */
  readonly awsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

  /**
   * @schema DataSourceParameters#JiraParameters
   */
  readonly jiraParameters?: JiraParameters;

  /**
   * @schema DataSourceParameters#MariaDbParameters
   */
  readonly mariaDbParameters?: MariaDbParameters;

  /**
   * @schema DataSourceParameters#MySqlParameters
   */
  readonly mySqlParameters?: MySqlParameters;

  /**
   * @schema DataSourceParameters#OracleParameters
   */
  readonly oracleParameters?: OracleParameters;

  /**
   * @schema DataSourceParameters#PostgreSqlParameters
   */
  readonly postgreSqlParameters?: PostgreSqlParameters;

  /**
   * @schema DataSourceParameters#PrestoParameters
   */
  readonly prestoParameters?: PrestoParameters;

  /**
   * @schema DataSourceParameters#RdsParameters
   */
  readonly rdsParameters?: RdsParameters;

  /**
   * @schema DataSourceParameters#RedshiftParameters
   */
  readonly redshiftParameters?: RedshiftParameters;

  /**
   * @schema DataSourceParameters#S3Parameters
   */
  readonly s3Parameters?: S3Parameters;

  /**
   * @schema DataSourceParameters#ServiceNowParameters
   */
  readonly serviceNowParameters?: ServiceNowParameters;

  /**
   * @schema DataSourceParameters#SnowflakeParameters
   */
  readonly snowflakeParameters?: SnowflakeParameters;

  /**
   * @schema DataSourceParameters#SparkParameters
   */
  readonly sparkParameters?: SparkParameters;

  /**
   * @schema DataSourceParameters#SqlServerParameters
   */
  readonly sqlServerParameters?: SqlServerParameters;

  /**
   * @schema DataSourceParameters#TeradataParameters
   */
  readonly teradataParameters?: TeradataParameters;

  /**
   * @schema DataSourceParameters#TwitterParameters
   */
  readonly twitterParameters?: TwitterParameters;

}

/**
 * @schema DataSourceCredentials
 */
export interface DataSourceCredentials {
  /**
   * @schema DataSourceCredentials#CredentialPair
   */
  readonly credentialPair?: CredentialPair;

  /**
   * @schema DataSourceCredentials#CopySourceArn
   */
  readonly copySourceArn?: string;

}

/**
 * @schema VpcConnectionProperties
 */
export interface VpcConnectionProperties {
  /**
   * @schema VpcConnectionProperties#VpcConnectionArn
   */
  readonly vpcConnectionArn: string;

}

/**
 * @schema SslProperties
 */
export interface SslProperties {
  /**
   * @schema SslProperties#DisableSsl
   */
  readonly disableSsl?: boolean;

}

/**
 * @schema Group
 */
export interface Group {
  /**
   * @schema Group#Arn
   */
  readonly arn?: string;

  /**
   * @schema Group#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema Group#Description
   */
  readonly description?: string;

  /**
   * @schema Group#PrincipalId
   */
  readonly principalId?: string;

}

/**
 * @schema GroupMember
 */
export interface GroupMember {
  /**
   * @schema GroupMember#Arn
   */
  readonly arn?: string;

  /**
   * @schema GroupMember#MemberName
   */
  readonly memberName?: string;

}

/**
 * @schema TemplateSourceEntity
 */
export interface TemplateSourceEntity {
  /**
   * @schema TemplateSourceEntity#SourceAnalysis
   */
  readonly sourceAnalysis?: TemplateSourceAnalysis;

  /**
   * @schema TemplateSourceEntity#SourceTemplate
   */
  readonly sourceTemplate?: TemplateSourceTemplate;

}

/**
 * @schema TemplateAlias
 */
export interface TemplateAlias {
  /**
   * @schema TemplateAlias#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema TemplateAlias#Arn
   */
  readonly arn?: string;

  /**
   * @schema TemplateAlias#TemplateVersionNumber
   */
  readonly templateVersionNumber?: number;

}

/**
 * @schema ThemeConfiguration
 */
export interface ThemeConfiguration {
  /**
   * @schema ThemeConfiguration#DataColorPalette
   */
  readonly dataColorPalette?: DataColorPalette;

  /**
   * @schema ThemeConfiguration#UIColorPalette
   */
  readonly uiColorPalette?: UiColorPalette;

  /**
   * @schema ThemeConfiguration#Sheet
   */
  readonly sheet?: SheetStyle;

}

/**
 * @schema ThemeAlias
 */
export interface ThemeAlias {
  /**
   * @schema ThemeAlias#Arn
   */
  readonly arn?: string;

  /**
   * @schema ThemeAlias#AliasName
   */
  readonly aliasName?: string;

  /**
   * @schema ThemeAlias#ThemeVersionNumber
   */
  readonly themeVersionNumber?: number;

}

/**
 * @schema AccountSettings
 */
export interface AccountSettings {
  /**
   * @schema AccountSettings#AccountName
   */
  readonly accountName?: string;

  /**
   * @schema AccountSettings#Edition
   */
  readonly edition?: string;

  /**
   * @schema AccountSettings#DefaultNamespace
   */
  readonly defaultNamespace?: string;

  /**
   * @schema AccountSettings#NotificationEmail
   */
  readonly notificationEmail?: string;

}

/**
 * @schema Analysis
 */
export interface Analysis {
  /**
   * @schema Analysis#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema Analysis#Arn
   */
  readonly arn?: string;

  /**
   * @schema Analysis#Name
   */
  readonly name?: string;

  /**
   * @schema Analysis#Status
   */
  readonly status?: string;

  /**
   * @schema Analysis#Errors
   */
  readonly errors?: AnalysisError[];

  /**
   * @schema Analysis#DataSetArns
   */
  readonly dataSetArns?: string[];

  /**
   * @schema Analysis#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema Analysis#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Analysis#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Analysis#Sheets
   */
  readonly sheets?: Sheet[];

}

/**
 * @schema Dashboard
 */
export interface Dashboard {
  /**
   * @schema Dashboard#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema Dashboard#Arn
   */
  readonly arn?: string;

  /**
   * @schema Dashboard#Name
   */
  readonly name?: string;

  /**
   * @schema Dashboard#Version
   */
  readonly version?: DashboardVersion;

  /**
   * @schema Dashboard#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Dashboard#LastPublishedTime
   */
  readonly lastPublishedTime?: string;

  /**
   * @schema Dashboard#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema DataSet
 */
export interface DataSet {
  /**
   * @schema DataSet#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataSet#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataSet#Name
   */
  readonly name?: string;

  /**
   * @schema DataSet#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DataSet#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema DataSet#PhysicalTableMap
   */
  readonly physicalTableMap?: { [key: string]: PhysicalTable };

  /**
   * @schema DataSet#LogicalTableMap
   */
  readonly logicalTableMap?: { [key: string]: LogicalTable };

  /**
   * @schema DataSet#OutputColumns
   */
  readonly outputColumns?: OutputColumn[];

  /**
   * @schema DataSet#ImportMode
   */
  readonly importMode?: string;

  /**
   * @schema DataSet#ConsumedSpiceCapacityInBytes
   */
  readonly consumedSpiceCapacityInBytes?: number;

  /**
   * @schema DataSet#ColumnGroups
   */
  readonly columnGroups?: ColumnGroup[];

  /**
   * @schema DataSet#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @schema DataSet#ColumnLevelPermissionRules
   */
  readonly columnLevelPermissionRules?: ColumnLevelPermissionRule[];

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataSource#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema DataSource#Name
   */
  readonly name?: string;

  /**
   * @schema DataSource#Type
   */
  readonly type?: string;

  /**
   * @schema DataSource#Status
   */
  readonly status?: string;

  /**
   * @schema DataSource#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DataSource#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema DataSource#DataSourceParameters
   */
  readonly dataSourceParameters?: DataSourceParameters;

  /**
   * @schema DataSource#AlternateDataSourceParameters
   */
  readonly alternateDataSourceParameters?: DataSourceParameters[];

  /**
   * @schema DataSource#VpcConnectionProperties
   */
  readonly vpcConnectionProperties?: VpcConnectionProperties;

  /**
   * @schema DataSource#SslProperties
   */
  readonly sslProperties?: SslProperties;

  /**
   * @schema DataSource#ErrorInfo
   */
  readonly errorInfo?: DataSourceErrorInfo;

}

/**
 * @schema IamPolicyAssignment
 */
export interface IamPolicyAssignment {
  /**
   * @schema IamPolicyAssignment#AwsAccountId
   */
  readonly awsAccountId?: string;

  /**
   * @schema IamPolicyAssignment#AssignmentId
   */
  readonly assignmentId?: string;

  /**
   * @schema IamPolicyAssignment#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema IamPolicyAssignment#PolicyArn
   */
  readonly policyArn?: string;

  /**
   * @schema IamPolicyAssignment#Identities
   */
  readonly identities?: { [key: string]: string[] };

  /**
   * @schema IamPolicyAssignment#AssignmentStatus
   */
  readonly assignmentStatus?: string;

}

/**
 * @schema Ingestion
 */
export interface Ingestion {
  /**
   * @schema Ingestion#Arn
   */
  readonly arn: string;

  /**
   * @schema Ingestion#IngestionId
   */
  readonly ingestionId?: string;

  /**
   * @schema Ingestion#IngestionStatus
   */
  readonly ingestionStatus: string;

  /**
   * @schema Ingestion#ErrorInfo
   */
  readonly errorInfo?: ErrorInfo;

  /**
   * @schema Ingestion#RowInfo
   */
  readonly rowInfo?: RowInfo;

  /**
   * @schema Ingestion#QueueInfo
   */
  readonly queueInfo?: QueueInfo;

  /**
   * @schema Ingestion#CreatedTime
   */
  readonly createdTime: string;

  /**
   * @schema Ingestion#IngestionTimeInSeconds
   */
  readonly ingestionTimeInSeconds?: number;

  /**
   * @schema Ingestion#IngestionSizeInBytes
   */
  readonly ingestionSizeInBytes?: number;

  /**
   * @schema Ingestion#RequestSource
   */
  readonly requestSource?: string;

  /**
   * @schema Ingestion#RequestType
   */
  readonly requestType?: string;

}

/**
 * @schema NamespaceInfoV2
 */
export interface NamespaceInfoV2 {
  /**
   * @schema NamespaceInfoV2#Name
   */
  readonly name?: string;

  /**
   * @schema NamespaceInfoV2#Arn
   */
  readonly arn?: string;

  /**
   * @schema NamespaceInfoV2#CapacityRegion
   */
  readonly capacityRegion?: string;

  /**
   * @schema NamespaceInfoV2#CreationStatus
   */
  readonly creationStatus?: string;

  /**
   * @schema NamespaceInfoV2#IdentityStore
   */
  readonly identityStore?: string;

  /**
   * @schema NamespaceInfoV2#NamespaceError
   */
  readonly namespaceError?: NamespaceError;

}

/**
 * @schema Template
 */
export interface Template {
  /**
   * @schema Template#Arn
   */
  readonly arn?: string;

  /**
   * @schema Template#Name
   */
  readonly name?: string;

  /**
   * @schema Template#Version
   */
  readonly version?: TemplateVersion;

  /**
   * @schema Template#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema Template#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Template#CreatedTime
   */
  readonly createdTime?: string;

}

/**
 * @schema Theme
 */
export interface Theme {
  /**
   * @schema Theme#Arn
   */
  readonly arn?: string;

  /**
   * @schema Theme#Name
   */
  readonly name?: string;

  /**
   * @schema Theme#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema Theme#Version
   */
  readonly version?: ThemeVersion;

  /**
   * @schema Theme#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema Theme#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Theme#Type
   */
  readonly type?: string;

}

/**
 * @schema User
 */
export interface User {
  /**
   * @schema User#Arn
   */
  readonly arn?: string;

  /**
   * @schema User#UserName
   */
  readonly userName?: string;

  /**
   * @schema User#Email
   */
  readonly email?: string;

  /**
   * @schema User#Role
   */
  readonly role?: string;

  /**
   * @schema User#IdentityType
   */
  readonly identityType?: string;

  /**
   * @schema User#Active
   */
  readonly active?: boolean;

  /**
   * @schema User#PrincipalId
   */
  readonly principalId?: string;

  /**
   * @schema User#CustomPermissionsName
   */
  readonly customPermissionsName?: string;

}

/**
 * @schema AnalysisSummary
 */
export interface AnalysisSummary {
  /**
   * @schema AnalysisSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema AnalysisSummary#AnalysisId
   */
  readonly analysisId?: string;

  /**
   * @schema AnalysisSummary#Name
   */
  readonly name?: string;

  /**
   * @schema AnalysisSummary#Status
   */
  readonly status?: string;

  /**
   * @schema AnalysisSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AnalysisSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema DashboardVersionSummary
 */
export interface DashboardVersionSummary {
  /**
   * @schema DashboardVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema DashboardVersionSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DashboardVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema DashboardVersionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema DashboardVersionSummary#SourceEntityArn
   */
  readonly sourceEntityArn?: string;

  /**
   * @schema DashboardVersionSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema DashboardSummary
 */
export interface DashboardSummary {
  /**
   * @schema DashboardSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema DashboardSummary#DashboardId
   */
  readonly dashboardId?: string;

  /**
   * @schema DashboardSummary#Name
   */
  readonly name?: string;

  /**
   * @schema DashboardSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DashboardSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema DashboardSummary#PublishedVersionNumber
   */
  readonly publishedVersionNumber?: number;

  /**
   * @schema DashboardSummary#LastPublishedTime
   */
  readonly lastPublishedTime?: string;

}

/**
 * @schema DataSetSummary
 */
export interface DataSetSummary {
  /**
   * @schema DataSetSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataSetSummary#DataSetId
   */
  readonly dataSetId?: string;

  /**
   * @schema DataSetSummary#Name
   */
  readonly name?: string;

  /**
   * @schema DataSetSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DataSetSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema DataSetSummary#ImportMode
   */
  readonly importMode?: string;

  /**
   * @schema DataSetSummary#RowLevelPermissionDataSet
   */
  readonly rowLevelPermissionDataSet?: RowLevelPermissionDataSet;

  /**
   * @schema DataSetSummary#ColumnLevelPermissionRulesApplied
   */
  readonly columnLevelPermissionRulesApplied?: boolean;

}

/**
 * @schema IamPolicyAssignmentSummary
 */
export interface IamPolicyAssignmentSummary {
  /**
   * @schema IamPolicyAssignmentSummary#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema IamPolicyAssignmentSummary#AssignmentStatus
   */
  readonly assignmentStatus?: string;

}

/**
 * @schema ActiveIamPolicyAssignment
 */
export interface ActiveIamPolicyAssignment {
  /**
   * @schema ActiveIamPolicyAssignment#AssignmentName
   */
  readonly assignmentName?: string;

  /**
   * @schema ActiveIamPolicyAssignment#PolicyArn
   */
  readonly policyArn?: string;

}

/**
 * @schema TemplateVersionSummary
 */
export interface TemplateVersionSummary {
  /**
   * @schema TemplateVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema TemplateVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema TemplateVersionSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema TemplateVersionSummary#Status
   */
  readonly status?: string;

  /**
   * @schema TemplateVersionSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema TemplateSummary
 */
export interface TemplateSummary {
  /**
   * @schema TemplateSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema TemplateSummary#TemplateId
   */
  readonly templateId?: string;

  /**
   * @schema TemplateSummary#Name
   */
  readonly name?: string;

  /**
   * @schema TemplateSummary#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

  /**
   * @schema TemplateSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema TemplateSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema ThemeVersionSummary
 */
export interface ThemeVersionSummary {
  /**
   * @schema ThemeVersionSummary#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema ThemeVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ThemeVersionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ThemeVersionSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ThemeVersionSummary#Status
   */
  readonly status?: string;

}

/**
 * @schema ThemeSummary
 */
export interface ThemeSummary {
  /**
   * @schema ThemeSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ThemeSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ThemeSummary#ThemeId
   */
  readonly themeId?: string;

  /**
   * @schema ThemeSummary#LatestVersionNumber
   */
  readonly latestVersionNumber?: number;

  /**
   * @schema ThemeSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ThemeSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

}

/**
 * @schema AnalysisSearchFilter
 */
export interface AnalysisSearchFilter {
  /**
   * @schema AnalysisSearchFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema AnalysisSearchFilter#Name
   */
  readonly name?: string;

  /**
   * @schema AnalysisSearchFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema DashboardSearchFilter
 */
export interface DashboardSearchFilter {
  /**
   * @schema DashboardSearchFilter#Operator
   */
  readonly operator: string;

  /**
   * @schema DashboardSearchFilter#Name
   */
  readonly name?: string;

  /**
   * @schema DashboardSearchFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema StringParameter
 */
export interface StringParameter {
  /**
   * @schema StringParameter#Name
   */
  readonly name: string;

  /**
   * @schema StringParameter#Values
   */
  readonly values: string[];

}

/**
 * @schema IntegerParameter
 */
export interface IntegerParameter {
  /**
   * @schema IntegerParameter#Name
   */
  readonly name: string;

  /**
   * @schema IntegerParameter#Values
   */
  readonly values: number[];

}

/**
 * @schema DecimalParameter
 */
export interface DecimalParameter {
  /**
   * @schema DecimalParameter#Name
   */
  readonly name: string;

  /**
   * @schema DecimalParameter#Values
   */
  readonly values: number[];

}

/**
 * @schema DateTimeParameter
 */
export interface DateTimeParameter {
  /**
   * @schema DateTimeParameter#Name
   */
  readonly name: string;

  /**
   * @schema DateTimeParameter#Values
   */
  readonly values: string[];

}

/**
 * @schema AnalysisSourceTemplate
 */
export interface AnalysisSourceTemplate {
  /**
   * @schema AnalysisSourceTemplate#DataSetReferences
   */
  readonly dataSetReferences: DataSetReference[];

  /**
   * @schema AnalysisSourceTemplate#Arn
   */
  readonly arn: string;

}

/**
 * @schema DashboardSourceTemplate
 */
export interface DashboardSourceTemplate {
  /**
   * @schema DashboardSourceTemplate#DataSetReferences
   */
  readonly dataSetReferences: DataSetReference[];

  /**
   * @schema DashboardSourceTemplate#Arn
   */
  readonly arn: string;

}

/**
 * @schema AdHocFilteringOption
 */
export interface AdHocFilteringOption {
  /**
   * @schema AdHocFilteringOption#AvailabilityStatus
   */
  readonly availabilityStatus?: string;

}

/**
 * @schema ExportToCsvOption
 */
export interface ExportToCsvOption {
  /**
   * @schema ExportToCsvOption#AvailabilityStatus
   */
  readonly availabilityStatus?: string;

}

/**
 * @schema SheetControlsOption
 */
export interface SheetControlsOption {
  /**
   * @schema SheetControlsOption#VisibilityState
   */
  readonly visibilityState?: string;

}

/**
 * @schema RelationalTable
 */
export interface RelationalTable {
  /**
   * @schema RelationalTable#DataSourceArn
   */
  readonly dataSourceArn: string;

  /**
   * @schema RelationalTable#Schema
   */
  readonly schema?: string;

  /**
   * @schema RelationalTable#Name
   */
  readonly name: string;

  /**
   * @schema RelationalTable#InputColumns
   */
  readonly inputColumns: InputColumn[];

}

/**
 * @schema CustomSql
 */
export interface CustomSql {
  /**
   * @schema CustomSql#DataSourceArn
   */
  readonly dataSourceArn: string;

  /**
   * @schema CustomSql#Name
   */
  readonly name: string;

  /**
   * @schema CustomSql#SqlQuery
   */
  readonly sqlQuery: string;

  /**
   * @schema CustomSql#Columns
   */
  readonly columns?: InputColumn[];

}

/**
 * @schema S3Source
 */
export interface S3Source {
  /**
   * @schema S3Source#DataSourceArn
   */
  readonly dataSourceArn: string;

  /**
   * @schema S3Source#UploadSettings
   */
  readonly uploadSettings?: UploadSettings;

  /**
   * @schema S3Source#InputColumns
   */
  readonly inputColumns: InputColumn[];

}

/**
 * @schema TransformOperation
 */
export interface TransformOperation {
  /**
   * @schema TransformOperation#ProjectOperation
   */
  readonly projectOperation?: ProjectOperation;

  /**
   * @schema TransformOperation#FilterOperation
   */
  readonly filterOperation?: FilterOperation;

  /**
   * @schema TransformOperation#CreateColumnsOperation
   */
  readonly createColumnsOperation?: CreateColumnsOperation;

  /**
   * @schema TransformOperation#RenameColumnOperation
   */
  readonly renameColumnOperation?: RenameColumnOperation;

  /**
   * @schema TransformOperation#CastColumnTypeOperation
   */
  readonly castColumnTypeOperation?: CastColumnTypeOperation;

  /**
   * @schema TransformOperation#TagColumnOperation
   */
  readonly tagColumnOperation?: TagColumnOperation;

}

/**
 * @schema LogicalTableSource
 */
export interface LogicalTableSource {
  /**
   * @schema LogicalTableSource#JoinInstruction
   */
  readonly joinInstruction?: JoinInstruction;

  /**
   * @schema LogicalTableSource#PhysicalTableId
   */
  readonly physicalTableId?: string;

}

/**
 * @schema GeoSpatialColumnGroup
 */
export interface GeoSpatialColumnGroup {
  /**
   * @schema GeoSpatialColumnGroup#Name
   */
  readonly name: string;

  /**
   * @schema GeoSpatialColumnGroup#CountryCode
   */
  readonly countryCode: string;

  /**
   * @schema GeoSpatialColumnGroup#Columns
   */
  readonly columns: string[];

}

/**
 * @schema AmazonElasticsearchParameters
 */
export interface AmazonElasticsearchParameters {
  /**
   * @schema AmazonElasticsearchParameters#Domain
   */
  readonly domain: string;

}

/**
 * @schema AthenaParameters
 */
export interface AthenaParameters {
  /**
   * @schema AthenaParameters#WorkGroup
   */
  readonly workGroup?: string;

}

/**
 * @schema AuroraParameters
 */
export interface AuroraParameters {
  /**
   * @schema AuroraParameters#Host
   */
  readonly host: string;

  /**
   * @schema AuroraParameters#Port
   */
  readonly port: number;

  /**
   * @schema AuroraParameters#Database
   */
  readonly database: string;

}

/**
 * @schema AuroraPostgreSqlParameters
 */
export interface AuroraPostgreSqlParameters {
  /**
   * @schema AuroraPostgreSqlParameters#Host
   */
  readonly host: string;

  /**
   * @schema AuroraPostgreSqlParameters#Port
   */
  readonly port: number;

  /**
   * @schema AuroraPostgreSqlParameters#Database
   */
  readonly database: string;

}

/**
 * @schema AwsIotAnalyticsParameters
 */
export interface AwsIotAnalyticsParameters {
  /**
   * @schema AwsIotAnalyticsParameters#DataSetName
   */
  readonly dataSetName: string;

}

/**
 * @schema JiraParameters
 */
export interface JiraParameters {
  /**
   * @schema JiraParameters#SiteBaseUrl
   */
  readonly siteBaseUrl: string;

}

/**
 * @schema MariaDbParameters
 */
export interface MariaDbParameters {
  /**
   * @schema MariaDbParameters#Host
   */
  readonly host: string;

  /**
   * @schema MariaDbParameters#Port
   */
  readonly port: number;

  /**
   * @schema MariaDbParameters#Database
   */
  readonly database: string;

}

/**
 * @schema MySqlParameters
 */
export interface MySqlParameters {
  /**
   * @schema MySqlParameters#Host
   */
  readonly host: string;

  /**
   * @schema MySqlParameters#Port
   */
  readonly port: number;

  /**
   * @schema MySqlParameters#Database
   */
  readonly database: string;

}

/**
 * @schema OracleParameters
 */
export interface OracleParameters {
  /**
   * @schema OracleParameters#Host
   */
  readonly host: string;

  /**
   * @schema OracleParameters#Port
   */
  readonly port: number;

  /**
   * @schema OracleParameters#Database
   */
  readonly database: string;

}

/**
 * @schema PostgreSqlParameters
 */
export interface PostgreSqlParameters {
  /**
   * @schema PostgreSqlParameters#Host
   */
  readonly host: string;

  /**
   * @schema PostgreSqlParameters#Port
   */
  readonly port: number;

  /**
   * @schema PostgreSqlParameters#Database
   */
  readonly database: string;

}

/**
 * @schema PrestoParameters
 */
export interface PrestoParameters {
  /**
   * @schema PrestoParameters#Host
   */
  readonly host: string;

  /**
   * @schema PrestoParameters#Port
   */
  readonly port: number;

  /**
   * @schema PrestoParameters#Catalog
   */
  readonly catalog: string;

}

/**
 * @schema RdsParameters
 */
export interface RdsParameters {
  /**
   * @schema RdsParameters#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema RdsParameters#Database
   */
  readonly database: string;

}

/**
 * @schema RedshiftParameters
 */
export interface RedshiftParameters {
  /**
   * @schema RedshiftParameters#Host
   */
  readonly host?: string;

  /**
   * @schema RedshiftParameters#Port
   */
  readonly port?: number;

  /**
   * @schema RedshiftParameters#Database
   */
  readonly database: string;

  /**
   * @schema RedshiftParameters#ClusterId
   */
  readonly clusterId?: string;

}

/**
 * @schema S3Parameters
 */
export interface S3Parameters {
  /**
   * @schema S3Parameters#ManifestFileLocation
   */
  readonly manifestFileLocation: ManifestFileLocation;

}

/**
 * @schema ServiceNowParameters
 */
export interface ServiceNowParameters {
  /**
   * @schema ServiceNowParameters#SiteBaseUrl
   */
  readonly siteBaseUrl: string;

}

/**
 * @schema SnowflakeParameters
 */
export interface SnowflakeParameters {
  /**
   * @schema SnowflakeParameters#Host
   */
  readonly host: string;

  /**
   * @schema SnowflakeParameters#Database
   */
  readonly database: string;

  /**
   * @schema SnowflakeParameters#Warehouse
   */
  readonly warehouse: string;

}

/**
 * @schema SparkParameters
 */
export interface SparkParameters {
  /**
   * @schema SparkParameters#Host
   */
  readonly host: string;

  /**
   * @schema SparkParameters#Port
   */
  readonly port: number;

}

/**
 * @schema SqlServerParameters
 */
export interface SqlServerParameters {
  /**
   * @schema SqlServerParameters#Host
   */
  readonly host: string;

  /**
   * @schema SqlServerParameters#Port
   */
  readonly port: number;

  /**
   * @schema SqlServerParameters#Database
   */
  readonly database: string;

}

/**
 * @schema TeradataParameters
 */
export interface TeradataParameters {
  /**
   * @schema TeradataParameters#Host
   */
  readonly host: string;

  /**
   * @schema TeradataParameters#Port
   */
  readonly port: number;

  /**
   * @schema TeradataParameters#Database
   */
  readonly database: string;

}

/**
 * @schema TwitterParameters
 */
export interface TwitterParameters {
  /**
   * @schema TwitterParameters#Query
   */
  readonly query: string;

  /**
   * @schema TwitterParameters#MaxRows
   */
  readonly maxRows: number;

}

/**
 * @schema CredentialPair
 */
export interface CredentialPair {
  /**
   * @schema CredentialPair#Username
   */
  readonly username: string;

  /**
   * @schema CredentialPair#Password
   */
  readonly password: string;

  /**
   * @schema CredentialPair#AlternateDataSourceParameters
   */
  readonly alternateDataSourceParameters?: DataSourceParameters[];

}

/**
 * @schema TemplateSourceAnalysis
 */
export interface TemplateSourceAnalysis {
  /**
   * @schema TemplateSourceAnalysis#Arn
   */
  readonly arn: string;

  /**
   * @schema TemplateSourceAnalysis#DataSetReferences
   */
  readonly dataSetReferences: DataSetReference[];

}

/**
 * @schema TemplateSourceTemplate
 */
export interface TemplateSourceTemplate {
  /**
   * @schema TemplateSourceTemplate#Arn
   */
  readonly arn: string;

}

/**
 * @schema DataColorPalette
 */
export interface DataColorPalette {
  /**
   * @schema DataColorPalette#Colors
   */
  readonly colors?: string[];

  /**
   * @schema DataColorPalette#MinMaxGradient
   */
  readonly minMaxGradient?: string[];

  /**
   * @schema DataColorPalette#EmptyFillColor
   */
  readonly emptyFillColor?: string;

}

/**
 * @schema UiColorPalette
 */
export interface UiColorPalette {
  /**
   * @schema UiColorPalette#PrimaryForeground
   */
  readonly primaryForeground?: string;

  /**
   * @schema UiColorPalette#PrimaryBackground
   */
  readonly primaryBackground?: string;

  /**
   * @schema UiColorPalette#SecondaryForeground
   */
  readonly secondaryForeground?: string;

  /**
   * @schema UiColorPalette#SecondaryBackground
   */
  readonly secondaryBackground?: string;

  /**
   * @schema UiColorPalette#Accent
   */
  readonly accent?: string;

  /**
   * @schema UiColorPalette#AccentForeground
   */
  readonly accentForeground?: string;

  /**
   * @schema UiColorPalette#Danger
   */
  readonly danger?: string;

  /**
   * @schema UiColorPalette#DangerForeground
   */
  readonly dangerForeground?: string;

  /**
   * @schema UiColorPalette#Warning
   */
  readonly warning?: string;

  /**
   * @schema UiColorPalette#WarningForeground
   */
  readonly warningForeground?: string;

  /**
   * @schema UiColorPalette#Success
   */
  readonly success?: string;

  /**
   * @schema UiColorPalette#SuccessForeground
   */
  readonly successForeground?: string;

  /**
   * @schema UiColorPalette#Dimension
   */
  readonly dimension?: string;

  /**
   * @schema UiColorPalette#DimensionForeground
   */
  readonly dimensionForeground?: string;

  /**
   * @schema UiColorPalette#Measure
   */
  readonly measure?: string;

  /**
   * @schema UiColorPalette#MeasureForeground
   */
  readonly measureForeground?: string;

}

/**
 * @schema SheetStyle
 */
export interface SheetStyle {
  /**
   * @schema SheetStyle#Tile
   */
  readonly tile?: TileStyle;

  /**
   * @schema SheetStyle#TileLayout
   */
  readonly tileLayout?: TileLayoutStyle;

}

/**
 * @schema AnalysisError
 */
export interface AnalysisError {
  /**
   * @schema AnalysisError#Type
   */
  readonly type?: string;

  /**
   * @schema AnalysisError#Message
   */
  readonly message?: string;

}

/**
 * @schema Sheet
 */
export interface Sheet {
  /**
   * @schema Sheet#SheetId
   */
  readonly sheetId?: string;

  /**
   * @schema Sheet#Name
   */
  readonly name?: string;

}

/**
 * @schema DashboardVersion
 */
export interface DashboardVersion {
  /**
   * @schema DashboardVersion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema DashboardVersion#Errors
   */
  readonly errors?: DashboardError[];

  /**
   * @schema DashboardVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema DashboardVersion#Status
   */
  readonly status?: string;

  /**
   * @schema DashboardVersion#Arn
   */
  readonly arn?: string;

  /**
   * @schema DashboardVersion#SourceEntityArn
   */
  readonly sourceEntityArn?: string;

  /**
   * @schema DashboardVersion#DataSetArns
   */
  readonly dataSetArns?: string[];

  /**
   * @schema DashboardVersion#Description
   */
  readonly description?: string;

  /**
   * @schema DashboardVersion#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema DashboardVersion#Sheets
   */
  readonly sheets?: Sheet[];

}

/**
 * @schema OutputColumn
 */
export interface OutputColumn {
  /**
   * @schema OutputColumn#Name
   */
  readonly name?: string;

  /**
   * @schema OutputColumn#Description
   */
  readonly description?: string;

  /**
   * @schema OutputColumn#Type
   */
  readonly type?: string;

}

/**
 * @schema DataSourceErrorInfo
 */
export interface DataSourceErrorInfo {
  /**
   * @schema DataSourceErrorInfo#Type
   */
  readonly type?: string;

  /**
   * @schema DataSourceErrorInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema ErrorInfo
 */
export interface ErrorInfo {
  /**
   * @schema ErrorInfo#Type
   */
  readonly type?: string;

  /**
   * @schema ErrorInfo#Message
   */
  readonly message?: string;

}

/**
 * @schema RowInfo
 */
export interface RowInfo {
  /**
   * @schema RowInfo#RowsIngested
   */
  readonly rowsIngested?: number;

  /**
   * @schema RowInfo#RowsDropped
   */
  readonly rowsDropped?: number;

}

/**
 * @schema QueueInfo
 */
export interface QueueInfo {
  /**
   * @schema QueueInfo#WaitingOnIngestion
   */
  readonly waitingOnIngestion: string;

  /**
   * @schema QueueInfo#QueuedIngestion
   */
  readonly queuedIngestion: string;

}

/**
 * @schema NamespaceError
 */
export interface NamespaceError {
  /**
   * @schema NamespaceError#Type
   */
  readonly type?: string;

  /**
   * @schema NamespaceError#Message
   */
  readonly message?: string;

}

/**
 * @schema TemplateVersion
 */
export interface TemplateVersion {
  /**
   * @schema TemplateVersion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema TemplateVersion#Errors
   */
  readonly errors?: TemplateError[];

  /**
   * @schema TemplateVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema TemplateVersion#Status
   */
  readonly status?: string;

  /**
   * @schema TemplateVersion#DataSetConfigurations
   */
  readonly dataSetConfigurations?: DataSetConfiguration[];

  /**
   * @schema TemplateVersion#Description
   */
  readonly description?: string;

  /**
   * @schema TemplateVersion#SourceEntityArn
   */
  readonly sourceEntityArn?: string;

  /**
   * @schema TemplateVersion#ThemeArn
   */
  readonly themeArn?: string;

  /**
   * @schema TemplateVersion#Sheets
   */
  readonly sheets?: Sheet[];

}

/**
 * @schema ThemeVersion
 */
export interface ThemeVersion {
  /**
   * @schema ThemeVersion#VersionNumber
   */
  readonly versionNumber?: number;

  /**
   * @schema ThemeVersion#Arn
   */
  readonly arn?: string;

  /**
   * @schema ThemeVersion#Description
   */
  readonly description?: string;

  /**
   * @schema ThemeVersion#BaseThemeId
   */
  readonly baseThemeId?: string;

  /**
   * @schema ThemeVersion#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ThemeVersion#Configuration
   */
  readonly configuration?: ThemeConfiguration;

  /**
   * @schema ThemeVersion#Errors
   */
  readonly errors?: ThemeError[];

  /**
   * @schema ThemeVersion#Status
   */
  readonly status?: string;

}

/**
 * @schema DataSetReference
 */
export interface DataSetReference {
  /**
   * @schema DataSetReference#DataSetPlaceholder
   */
  readonly dataSetPlaceholder: string;

  /**
   * @schema DataSetReference#DataSetArn
   */
  readonly dataSetArn: string;

}

/**
 * @schema InputColumn
 */
export interface InputColumn {
  /**
   * @schema InputColumn#Name
   */
  readonly name: string;

  /**
   * @schema InputColumn#Type
   */
  readonly type: string;

}

/**
 * @schema UploadSettings
 */
export interface UploadSettings {
  /**
   * @schema UploadSettings#Format
   */
  readonly format?: string;

  /**
   * @schema UploadSettings#StartFromRow
   */
  readonly startFromRow?: number;

  /**
   * @schema UploadSettings#ContainsHeader
   */
  readonly containsHeader?: boolean;

  /**
   * @schema UploadSettings#TextQualifier
   */
  readonly textQualifier?: string;

  /**
   * @schema UploadSettings#Delimiter
   */
  readonly delimiter?: string;

}

/**
 * @schema ProjectOperation
 */
export interface ProjectOperation {
  /**
   * @schema ProjectOperation#ProjectedColumns
   */
  readonly projectedColumns: string[];

}

/**
 * @schema FilterOperation
 */
export interface FilterOperation {
  /**
   * @schema FilterOperation#ConditionExpression
   */
  readonly conditionExpression: string;

}

/**
 * @schema CreateColumnsOperation
 */
export interface CreateColumnsOperation {
  /**
   * @schema CreateColumnsOperation#Columns
   */
  readonly columns: CalculatedColumn[];

}

/**
 * @schema RenameColumnOperation
 */
export interface RenameColumnOperation {
  /**
   * @schema RenameColumnOperation#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema RenameColumnOperation#NewColumnName
   */
  readonly newColumnName: string;

}

/**
 * @schema CastColumnTypeOperation
 */
export interface CastColumnTypeOperation {
  /**
   * @schema CastColumnTypeOperation#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema CastColumnTypeOperation#NewColumnType
   */
  readonly newColumnType: string;

  /**
   * @schema CastColumnTypeOperation#Format
   */
  readonly format?: string;

}

/**
 * @schema TagColumnOperation
 */
export interface TagColumnOperation {
  /**
   * @schema TagColumnOperation#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema TagColumnOperation#Tags
   */
  readonly tags: ColumnTag[];

}

/**
 * @schema JoinInstruction
 */
export interface JoinInstruction {
  /**
   * @schema JoinInstruction#LeftOperand
   */
  readonly leftOperand: string;

  /**
   * @schema JoinInstruction#RightOperand
   */
  readonly rightOperand: string;

  /**
   * @schema JoinInstruction#Type
   */
  readonly type: string;

  /**
   * @schema JoinInstruction#OnClause
   */
  readonly onClause: string;

}

/**
 * @schema ManifestFileLocation
 */
export interface ManifestFileLocation {
  /**
   * @schema ManifestFileLocation#Bucket
   */
  readonly bucket: string;

  /**
   * @schema ManifestFileLocation#Key
   */
  readonly key: string;

}

/**
 * @schema TileStyle
 */
export interface TileStyle {
  /**
   * @schema TileStyle#Border
   */
  readonly border?: BorderStyle;

}

/**
 * @schema TileLayoutStyle
 */
export interface TileLayoutStyle {
  /**
   * @schema TileLayoutStyle#Gutter
   */
  readonly gutter?: GutterStyle;

  /**
   * @schema TileLayoutStyle#Margin
   */
  readonly margin?: MarginStyle;

}

/**
 * @schema DashboardError
 */
export interface DashboardError {
  /**
   * @schema DashboardError#Type
   */
  readonly type?: string;

  /**
   * @schema DashboardError#Message
   */
  readonly message?: string;

}

/**
 * @schema TemplateError
 */
export interface TemplateError {
  /**
   * @schema TemplateError#Type
   */
  readonly type?: string;

  /**
   * @schema TemplateError#Message
   */
  readonly message?: string;

}

/**
 * @schema DataSetConfiguration
 */
export interface DataSetConfiguration {
  /**
   * @schema DataSetConfiguration#Placeholder
   */
  readonly placeholder?: string;

  /**
   * @schema DataSetConfiguration#DataSetSchema
   */
  readonly dataSetSchema?: DataSetSchema;

  /**
   * @schema DataSetConfiguration#ColumnGroupSchemaList
   */
  readonly columnGroupSchemaList?: ColumnGroupSchema[];

}

/**
 * @schema ThemeError
 */
export interface ThemeError {
  /**
   * @schema ThemeError#Type
   */
  readonly type?: string;

  /**
   * @schema ThemeError#Message
   */
  readonly message?: string;

}

/**
 * @schema CalculatedColumn
 */
export interface CalculatedColumn {
  /**
   * @schema CalculatedColumn#ColumnName
   */
  readonly columnName: string;

  /**
   * @schema CalculatedColumn#ColumnId
   */
  readonly columnId: string;

  /**
   * @schema CalculatedColumn#Expression
   */
  readonly expression: string;

}

/**
 * @schema ColumnTag
 */
export interface ColumnTag {
  /**
   * @schema ColumnTag#ColumnGeographicRole
   */
  readonly columnGeographicRole?: string;

  /**
   * @schema ColumnTag#ColumnDescription
   */
  readonly columnDescription?: ColumnDescription;

}

/**
 * @schema BorderStyle
 */
export interface BorderStyle {
  /**
   * @schema BorderStyle#Show
   */
  readonly show?: boolean;

}

/**
 * @schema GutterStyle
 */
export interface GutterStyle {
  /**
   * @schema GutterStyle#Show
   */
  readonly show?: boolean;

}

/**
 * @schema MarginStyle
 */
export interface MarginStyle {
  /**
   * @schema MarginStyle#Show
   */
  readonly show?: boolean;

}

/**
 * @schema DataSetSchema
 */
export interface DataSetSchema {
  /**
   * @schema DataSetSchema#ColumnSchemaList
   */
  readonly columnSchemaList?: ColumnSchema[];

}

/**
 * @schema ColumnGroupSchema
 */
export interface ColumnGroupSchema {
  /**
   * @schema ColumnGroupSchema#Name
   */
  readonly name?: string;

  /**
   * @schema ColumnGroupSchema#ColumnGroupColumnSchemaList
   */
  readonly columnGroupColumnSchemaList?: ColumnGroupColumnSchema[];

}

/**
 * @schema ColumnDescription
 */
export interface ColumnDescription {
  /**
   * @schema ColumnDescription#Text
   */
  readonly text?: string;

}

/**
 * @schema ColumnSchema
 */
export interface ColumnSchema {
  /**
   * @schema ColumnSchema#Name
   */
  readonly name?: string;

  /**
   * @schema ColumnSchema#DataType
   */
  readonly dataType?: string;

  /**
   * @schema ColumnSchema#GeographicRole
   */
  readonly geographicRole?: string;

}

/**
 * @schema ColumnGroupColumnSchema
 */
export interface ColumnGroupColumnSchema {
  /**
   * @schema ColumnGroupColumnSchema#Name
   */
  readonly name?: string;

}
