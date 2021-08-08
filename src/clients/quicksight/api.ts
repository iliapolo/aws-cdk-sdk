import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class QuickSightClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelIngestion(input: shapes.QuickSightCancelIngestionRequest): QuickSightResponsesCancelIngestion {
    return new QuickSightResponsesCancelIngestion(this, this.__resources, input);
  }

  public createAccountCustomization(input: shapes.QuickSightCreateAccountCustomizationRequest): QuickSightResponsesCreateAccountCustomization {
    return new QuickSightResponsesCreateAccountCustomization(this, this.__resources, input);
  }

  public createAnalysis(input: shapes.QuickSightCreateAnalysisRequest): QuickSightResponsesCreateAnalysis {
    return new QuickSightResponsesCreateAnalysis(this, this.__resources, input);
  }

  public createDashboard(input: shapes.QuickSightCreateDashboardRequest): QuickSightResponsesCreateDashboard {
    return new QuickSightResponsesCreateDashboard(this, this.__resources, input);
  }

  public createDataSet(input: shapes.QuickSightCreateDataSetRequest): QuickSightResponsesCreateDataSet {
    return new QuickSightResponsesCreateDataSet(this, this.__resources, input);
  }

  public createDataSource(input: shapes.QuickSightCreateDataSourceRequest): QuickSightResponsesCreateDataSource {
    return new QuickSightResponsesCreateDataSource(this, this.__resources, input);
  }

  public createFolder(input: shapes.QuickSightCreateFolderRequest): QuickSightResponsesCreateFolder {
    return new QuickSightResponsesCreateFolder(this, this.__resources, input);
  }

  public createFolderMembership(input: shapes.QuickSightCreateFolderMembershipRequest): QuickSightResponsesCreateFolderMembership {
    return new QuickSightResponsesCreateFolderMembership(this, this.__resources, input);
  }

  public createGroup(input: shapes.QuickSightCreateGroupRequest): QuickSightResponsesCreateGroup {
    return new QuickSightResponsesCreateGroup(this, this.__resources, input);
  }

  public createGroupMembership(input: shapes.QuickSightCreateGroupMembershipRequest): QuickSightResponsesCreateGroupMembership {
    return new QuickSightResponsesCreateGroupMembership(this, this.__resources, input);
  }

  public createIamPolicyAssignment(input: shapes.QuickSightCreateIamPolicyAssignmentRequest): QuickSightResponsesCreateIamPolicyAssignment {
    return new QuickSightResponsesCreateIamPolicyAssignment(this, this.__resources, input);
  }

  public createIngestion(input: shapes.QuickSightCreateIngestionRequest): QuickSightResponsesCreateIngestion {
    return new QuickSightResponsesCreateIngestion(this, this.__resources, input);
  }

  public createNamespace(input: shapes.QuickSightCreateNamespaceRequest): QuickSightResponsesCreateNamespace {
    return new QuickSightResponsesCreateNamespace(this, this.__resources, input);
  }

  public createTemplate(input: shapes.QuickSightCreateTemplateRequest): QuickSightResponsesCreateTemplate {
    return new QuickSightResponsesCreateTemplate(this, this.__resources, input);
  }

  public createTemplateAlias(input: shapes.QuickSightCreateTemplateAliasRequest): QuickSightResponsesCreateTemplateAlias {
    return new QuickSightResponsesCreateTemplateAlias(this, this.__resources, input);
  }

  public createTheme(input: shapes.QuickSightCreateThemeRequest): QuickSightResponsesCreateTheme {
    return new QuickSightResponsesCreateTheme(this, this.__resources, input);
  }

  public createThemeAlias(input: shapes.QuickSightCreateThemeAliasRequest): QuickSightResponsesCreateThemeAlias {
    return new QuickSightResponsesCreateThemeAlias(this, this.__resources, input);
  }

  public deleteAccountCustomization(input: shapes.QuickSightDeleteAccountCustomizationRequest): QuickSightResponsesDeleteAccountCustomization {
    return new QuickSightResponsesDeleteAccountCustomization(this, this.__resources, input);
  }

  public deleteAnalysis(input: shapes.QuickSightDeleteAnalysisRequest): QuickSightResponsesDeleteAnalysis {
    return new QuickSightResponsesDeleteAnalysis(this, this.__resources, input);
  }

  public deleteDashboard(input: shapes.QuickSightDeleteDashboardRequest): QuickSightResponsesDeleteDashboard {
    return new QuickSightResponsesDeleteDashboard(this, this.__resources, input);
  }

  public deleteDataSet(input: shapes.QuickSightDeleteDataSetRequest): QuickSightResponsesDeleteDataSet {
    return new QuickSightResponsesDeleteDataSet(this, this.__resources, input);
  }

  public deleteDataSource(input: shapes.QuickSightDeleteDataSourceRequest): QuickSightResponsesDeleteDataSource {
    return new QuickSightResponsesDeleteDataSource(this, this.__resources, input);
  }

  public deleteFolder(input: shapes.QuickSightDeleteFolderRequest): QuickSightResponsesDeleteFolder {
    return new QuickSightResponsesDeleteFolder(this, this.__resources, input);
  }

  public deleteFolderMembership(input: shapes.QuickSightDeleteFolderMembershipRequest): QuickSightResponsesDeleteFolderMembership {
    return new QuickSightResponsesDeleteFolderMembership(this, this.__resources, input);
  }

  public deleteGroup(input: shapes.QuickSightDeleteGroupRequest): QuickSightResponsesDeleteGroup {
    return new QuickSightResponsesDeleteGroup(this, this.__resources, input);
  }

  public deleteGroupMembership(input: shapes.QuickSightDeleteGroupMembershipRequest): QuickSightResponsesDeleteGroupMembership {
    return new QuickSightResponsesDeleteGroupMembership(this, this.__resources, input);
  }

  public deleteIamPolicyAssignment(input: shapes.QuickSightDeleteIamPolicyAssignmentRequest): QuickSightResponsesDeleteIamPolicyAssignment {
    return new QuickSightResponsesDeleteIamPolicyAssignment(this, this.__resources, input);
  }

  public deleteNamespace(input: shapes.QuickSightDeleteNamespaceRequest): QuickSightResponsesDeleteNamespace {
    return new QuickSightResponsesDeleteNamespace(this, this.__resources, input);
  }

  public deleteTemplate(input: shapes.QuickSightDeleteTemplateRequest): QuickSightResponsesDeleteTemplate {
    return new QuickSightResponsesDeleteTemplate(this, this.__resources, input);
  }

  public deleteTemplateAlias(input: shapes.QuickSightDeleteTemplateAliasRequest): QuickSightResponsesDeleteTemplateAlias {
    return new QuickSightResponsesDeleteTemplateAlias(this, this.__resources, input);
  }

  public deleteTheme(input: shapes.QuickSightDeleteThemeRequest): QuickSightResponsesDeleteTheme {
    return new QuickSightResponsesDeleteTheme(this, this.__resources, input);
  }

  public deleteThemeAlias(input: shapes.QuickSightDeleteThemeAliasRequest): QuickSightResponsesDeleteThemeAlias {
    return new QuickSightResponsesDeleteThemeAlias(this, this.__resources, input);
  }

  public deleteUser(input: shapes.QuickSightDeleteUserRequest): QuickSightResponsesDeleteUser {
    return new QuickSightResponsesDeleteUser(this, this.__resources, input);
  }

  public deleteUserByPrincipalId(input: shapes.QuickSightDeleteUserByPrincipalIdRequest): QuickSightResponsesDeleteUserByPrincipalId {
    return new QuickSightResponsesDeleteUserByPrincipalId(this, this.__resources, input);
  }

  public describeAccountCustomization(input: shapes.QuickSightDescribeAccountCustomizationRequest): QuickSightResponsesDescribeAccountCustomization {
    return new QuickSightResponsesDescribeAccountCustomization(this, this.__resources, input);
  }

  public describeAccountSettings(input: shapes.QuickSightDescribeAccountSettingsRequest): QuickSightResponsesDescribeAccountSettings {
    return new QuickSightResponsesDescribeAccountSettings(this, this.__resources, input);
  }

  public describeAnalysis(input: shapes.QuickSightDescribeAnalysisRequest): QuickSightResponsesDescribeAnalysis {
    return new QuickSightResponsesDescribeAnalysis(this, this.__resources, input);
  }

  public describeAnalysisPermissions(input: shapes.QuickSightDescribeAnalysisPermissionsRequest): QuickSightResponsesDescribeAnalysisPermissions {
    return new QuickSightResponsesDescribeAnalysisPermissions(this, this.__resources, input);
  }

  public describeDashboard(input: shapes.QuickSightDescribeDashboardRequest): QuickSightResponsesDescribeDashboard {
    return new QuickSightResponsesDescribeDashboard(this, this.__resources, input);
  }

  public describeDashboardPermissions(input: shapes.QuickSightDescribeDashboardPermissionsRequest): QuickSightResponsesDescribeDashboardPermissions {
    return new QuickSightResponsesDescribeDashboardPermissions(this, this.__resources, input);
  }

  public describeDataSet(input: shapes.QuickSightDescribeDataSetRequest): QuickSightResponsesDescribeDataSet {
    return new QuickSightResponsesDescribeDataSet(this, this.__resources, input);
  }

  public describeDataSetPermissions(input: shapes.QuickSightDescribeDataSetPermissionsRequest): QuickSightResponsesDescribeDataSetPermissions {
    return new QuickSightResponsesDescribeDataSetPermissions(this, this.__resources, input);
  }

  public describeDataSource(input: shapes.QuickSightDescribeDataSourceRequest): QuickSightResponsesDescribeDataSource {
    return new QuickSightResponsesDescribeDataSource(this, this.__resources, input);
  }

  public describeDataSourcePermissions(input: shapes.QuickSightDescribeDataSourcePermissionsRequest): QuickSightResponsesDescribeDataSourcePermissions {
    return new QuickSightResponsesDescribeDataSourcePermissions(this, this.__resources, input);
  }

  public describeFolder(input: shapes.QuickSightDescribeFolderRequest): QuickSightResponsesDescribeFolder {
    return new QuickSightResponsesDescribeFolder(this, this.__resources, input);
  }

  public describeFolderPermissions(input: shapes.QuickSightDescribeFolderPermissionsRequest): QuickSightResponsesDescribeFolderPermissions {
    return new QuickSightResponsesDescribeFolderPermissions(this, this.__resources, input);
  }

  public describeFolderResolvedPermissions(input: shapes.QuickSightDescribeFolderResolvedPermissionsRequest): QuickSightResponsesDescribeFolderResolvedPermissions {
    return new QuickSightResponsesDescribeFolderResolvedPermissions(this, this.__resources, input);
  }

  public describeGroup(input: shapes.QuickSightDescribeGroupRequest): QuickSightResponsesDescribeGroup {
    return new QuickSightResponsesDescribeGroup(this, this.__resources, input);
  }

  public describeIamPolicyAssignment(input: shapes.QuickSightDescribeIamPolicyAssignmentRequest): QuickSightResponsesDescribeIamPolicyAssignment {
    return new QuickSightResponsesDescribeIamPolicyAssignment(this, this.__resources, input);
  }

  public describeIngestion(input: shapes.QuickSightDescribeIngestionRequest): QuickSightResponsesDescribeIngestion {
    return new QuickSightResponsesDescribeIngestion(this, this.__resources, input);
  }

  public describeNamespace(input: shapes.QuickSightDescribeNamespaceRequest): QuickSightResponsesDescribeNamespace {
    return new QuickSightResponsesDescribeNamespace(this, this.__resources, input);
  }

  public describeTemplate(input: shapes.QuickSightDescribeTemplateRequest): QuickSightResponsesDescribeTemplate {
    return new QuickSightResponsesDescribeTemplate(this, this.__resources, input);
  }

  public describeTemplateAlias(input: shapes.QuickSightDescribeTemplateAliasRequest): QuickSightResponsesDescribeTemplateAlias {
    return new QuickSightResponsesDescribeTemplateAlias(this, this.__resources, input);
  }

  public describeTemplatePermissions(input: shapes.QuickSightDescribeTemplatePermissionsRequest): QuickSightResponsesDescribeTemplatePermissions {
    return new QuickSightResponsesDescribeTemplatePermissions(this, this.__resources, input);
  }

  public describeTheme(input: shapes.QuickSightDescribeThemeRequest): QuickSightResponsesDescribeTheme {
    return new QuickSightResponsesDescribeTheme(this, this.__resources, input);
  }

  public describeThemeAlias(input: shapes.QuickSightDescribeThemeAliasRequest): QuickSightResponsesDescribeThemeAlias {
    return new QuickSightResponsesDescribeThemeAlias(this, this.__resources, input);
  }

  public describeThemePermissions(input: shapes.QuickSightDescribeThemePermissionsRequest): QuickSightResponsesDescribeThemePermissions {
    return new QuickSightResponsesDescribeThemePermissions(this, this.__resources, input);
  }

  public describeUser(input: shapes.QuickSightDescribeUserRequest): QuickSightResponsesDescribeUser {
    return new QuickSightResponsesDescribeUser(this, this.__resources, input);
  }

  public generateEmbedUrlForAnonymousUser(input: shapes.QuickSightGenerateEmbedUrlForAnonymousUserRequest): QuickSightResponsesGenerateEmbedUrlForAnonymousUser {
    return new QuickSightResponsesGenerateEmbedUrlForAnonymousUser(this, this.__resources, input);
  }

  public generateEmbedUrlForRegisteredUser(input: shapes.QuickSightGenerateEmbedUrlForRegisteredUserRequest): QuickSightResponsesGenerateEmbedUrlForRegisteredUser {
    return new QuickSightResponsesGenerateEmbedUrlForRegisteredUser(this, this.__resources, input);
  }

  public fetchDashboardEmbedUrl(input: shapes.QuickSightGetDashboardEmbedUrlRequest): QuickSightResponsesFetchDashboardEmbedUrl {
    return new QuickSightResponsesFetchDashboardEmbedUrl(this, this.__resources, input);
  }

  public fetchSessionEmbedUrl(input: shapes.QuickSightGetSessionEmbedUrlRequest): QuickSightResponsesFetchSessionEmbedUrl {
    return new QuickSightResponsesFetchSessionEmbedUrl(this, this.__resources, input);
  }

  public listAnalyses(input: shapes.QuickSightListAnalysesRequest): QuickSightResponsesListAnalyses {
    return new QuickSightResponsesListAnalyses(this, this.__resources, input);
  }

  public listDashboardVersions(input: shapes.QuickSightListDashboardVersionsRequest): QuickSightResponsesListDashboardVersions {
    return new QuickSightResponsesListDashboardVersions(this, this.__resources, input);
  }

  public listDashboards(input: shapes.QuickSightListDashboardsRequest): QuickSightResponsesListDashboards {
    return new QuickSightResponsesListDashboards(this, this.__resources, input);
  }

  public listDataSets(input: shapes.QuickSightListDataSetsRequest): QuickSightResponsesListDataSets {
    return new QuickSightResponsesListDataSets(this, this.__resources, input);
  }

  public listDataSources(input: shapes.QuickSightListDataSourcesRequest): QuickSightResponsesListDataSources {
    return new QuickSightResponsesListDataSources(this, this.__resources, input);
  }

  public listFolderMembers(input: shapes.QuickSightListFolderMembersRequest): QuickSightResponsesListFolderMembers {
    return new QuickSightResponsesListFolderMembers(this, this.__resources, input);
  }

  public listFolders(input: shapes.QuickSightListFoldersRequest): QuickSightResponsesListFolders {
    return new QuickSightResponsesListFolders(this, this.__resources, input);
  }

  public listGroupMemberships(input: shapes.QuickSightListGroupMembershipsRequest): QuickSightResponsesListGroupMemberships {
    return new QuickSightResponsesListGroupMemberships(this, this.__resources, input);
  }

  public listGroups(input: shapes.QuickSightListGroupsRequest): QuickSightResponsesListGroups {
    return new QuickSightResponsesListGroups(this, this.__resources, input);
  }

  public listIamPolicyAssignments(input: shapes.QuickSightListIamPolicyAssignmentsRequest): QuickSightResponsesListIamPolicyAssignments {
    return new QuickSightResponsesListIamPolicyAssignments(this, this.__resources, input);
  }

  public listIamPolicyAssignmentsForUser(input: shapes.QuickSightListIamPolicyAssignmentsForUserRequest): QuickSightResponsesListIamPolicyAssignmentsForUser {
    return new QuickSightResponsesListIamPolicyAssignmentsForUser(this, this.__resources, input);
  }

  public listIngestions(input: shapes.QuickSightListIngestionsRequest): QuickSightResponsesListIngestions {
    return new QuickSightResponsesListIngestions(this, this.__resources, input);
  }

  public listNamespaces(input: shapes.QuickSightListNamespacesRequest): QuickSightResponsesListNamespaces {
    return new QuickSightResponsesListNamespaces(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.QuickSightListTagsForResourceRequest): QuickSightResponsesListTagsForResource {
    return new QuickSightResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTemplateAliases(input: shapes.QuickSightListTemplateAliasesRequest): QuickSightResponsesListTemplateAliases {
    return new QuickSightResponsesListTemplateAliases(this, this.__resources, input);
  }

  public listTemplateVersions(input: shapes.QuickSightListTemplateVersionsRequest): QuickSightResponsesListTemplateVersions {
    return new QuickSightResponsesListTemplateVersions(this, this.__resources, input);
  }

  public listTemplates(input: shapes.QuickSightListTemplatesRequest): QuickSightResponsesListTemplates {
    return new QuickSightResponsesListTemplates(this, this.__resources, input);
  }

  public listThemeAliases(input: shapes.QuickSightListThemeAliasesRequest): QuickSightResponsesListThemeAliases {
    return new QuickSightResponsesListThemeAliases(this, this.__resources, input);
  }

  public listThemeVersions(input: shapes.QuickSightListThemeVersionsRequest): QuickSightResponsesListThemeVersions {
    return new QuickSightResponsesListThemeVersions(this, this.__resources, input);
  }

  public listThemes(input: shapes.QuickSightListThemesRequest): QuickSightResponsesListThemes {
    return new QuickSightResponsesListThemes(this, this.__resources, input);
  }

  public listUserGroups(input: shapes.QuickSightListUserGroupsRequest): QuickSightResponsesListUserGroups {
    return new QuickSightResponsesListUserGroups(this, this.__resources, input);
  }

  public listUsers(input: shapes.QuickSightListUsersRequest): QuickSightResponsesListUsers {
    return new QuickSightResponsesListUsers(this, this.__resources, input);
  }

  public registerUser(input: shapes.QuickSightRegisterUserRequest): QuickSightResponsesRegisterUser {
    return new QuickSightResponsesRegisterUser(this, this.__resources, input);
  }

  public restoreAnalysis(input: shapes.QuickSightRestoreAnalysisRequest): QuickSightResponsesRestoreAnalysis {
    return new QuickSightResponsesRestoreAnalysis(this, this.__resources, input);
  }

  public searchAnalyses(input: shapes.QuickSightSearchAnalysesRequest): QuickSightResponsesSearchAnalyses {
    return new QuickSightResponsesSearchAnalyses(this, this.__resources, input);
  }

  public searchDashboards(input: shapes.QuickSightSearchDashboardsRequest): QuickSightResponsesSearchDashboards {
    return new QuickSightResponsesSearchDashboards(this, this.__resources, input);
  }

  public searchFolders(input: shapes.QuickSightSearchFoldersRequest): QuickSightResponsesSearchFolders {
    return new QuickSightResponsesSearchFolders(this, this.__resources, input);
  }

  public tagResource(input: shapes.QuickSightTagResourceRequest): QuickSightResponsesTagResource {
    return new QuickSightResponsesTagResource(this, this.__resources, input);
  }

  public untagResource(input: shapes.QuickSightUntagResourceRequest): QuickSightResponsesUntagResource {
    return new QuickSightResponsesUntagResource(this, this.__resources, input);
  }

  public updateAccountCustomization(input: shapes.QuickSightUpdateAccountCustomizationRequest): QuickSightResponsesUpdateAccountCustomization {
    return new QuickSightResponsesUpdateAccountCustomization(this, this.__resources, input);
  }

  public updateAccountSettings(input: shapes.QuickSightUpdateAccountSettingsRequest): QuickSightResponsesUpdateAccountSettings {
    return new QuickSightResponsesUpdateAccountSettings(this, this.__resources, input);
  }

  public updateAnalysis(input: shapes.QuickSightUpdateAnalysisRequest): QuickSightResponsesUpdateAnalysis {
    return new QuickSightResponsesUpdateAnalysis(this, this.__resources, input);
  }

  public updateAnalysisPermissions(input: shapes.QuickSightUpdateAnalysisPermissionsRequest): QuickSightResponsesUpdateAnalysisPermissions {
    return new QuickSightResponsesUpdateAnalysisPermissions(this, this.__resources, input);
  }

  public updateDashboard(input: shapes.QuickSightUpdateDashboardRequest): QuickSightResponsesUpdateDashboard {
    return new QuickSightResponsesUpdateDashboard(this, this.__resources, input);
  }

  public updateDashboardPermissions(input: shapes.QuickSightUpdateDashboardPermissionsRequest): QuickSightResponsesUpdateDashboardPermissions {
    return new QuickSightResponsesUpdateDashboardPermissions(this, this.__resources, input);
  }

  public updateDashboardPublishedVersion(input: shapes.QuickSightUpdateDashboardPublishedVersionRequest): QuickSightResponsesUpdateDashboardPublishedVersion {
    return new QuickSightResponsesUpdateDashboardPublishedVersion(this, this.__resources, input);
  }

  public updateDataSet(input: shapes.QuickSightUpdateDataSetRequest): QuickSightResponsesUpdateDataSet {
    return new QuickSightResponsesUpdateDataSet(this, this.__resources, input);
  }

  public updateDataSetPermissions(input: shapes.QuickSightUpdateDataSetPermissionsRequest): QuickSightResponsesUpdateDataSetPermissions {
    return new QuickSightResponsesUpdateDataSetPermissions(this, this.__resources, input);
  }

  public updateDataSource(input: shapes.QuickSightUpdateDataSourceRequest): QuickSightResponsesUpdateDataSource {
    return new QuickSightResponsesUpdateDataSource(this, this.__resources, input);
  }

  public updateDataSourcePermissions(input: shapes.QuickSightUpdateDataSourcePermissionsRequest): QuickSightResponsesUpdateDataSourcePermissions {
    return new QuickSightResponsesUpdateDataSourcePermissions(this, this.__resources, input);
  }

  public updateFolder(input: shapes.QuickSightUpdateFolderRequest): QuickSightResponsesUpdateFolder {
    return new QuickSightResponsesUpdateFolder(this, this.__resources, input);
  }

  public updateFolderPermissions(input: shapes.QuickSightUpdateFolderPermissionsRequest): QuickSightResponsesUpdateFolderPermissions {
    return new QuickSightResponsesUpdateFolderPermissions(this, this.__resources, input);
  }

  public updateGroup(input: shapes.QuickSightUpdateGroupRequest): QuickSightResponsesUpdateGroup {
    return new QuickSightResponsesUpdateGroup(this, this.__resources, input);
  }

  public updateIamPolicyAssignment(input: shapes.QuickSightUpdateIamPolicyAssignmentRequest): QuickSightResponsesUpdateIamPolicyAssignment {
    return new QuickSightResponsesUpdateIamPolicyAssignment(this, this.__resources, input);
  }

  public updateTemplate(input: shapes.QuickSightUpdateTemplateRequest): QuickSightResponsesUpdateTemplate {
    return new QuickSightResponsesUpdateTemplate(this, this.__resources, input);
  }

  public updateTemplateAlias(input: shapes.QuickSightUpdateTemplateAliasRequest): QuickSightResponsesUpdateTemplateAlias {
    return new QuickSightResponsesUpdateTemplateAlias(this, this.__resources, input);
  }

  public updateTemplatePermissions(input: shapes.QuickSightUpdateTemplatePermissionsRequest): QuickSightResponsesUpdateTemplatePermissions {
    return new QuickSightResponsesUpdateTemplatePermissions(this, this.__resources, input);
  }

  public updateTheme(input: shapes.QuickSightUpdateThemeRequest): QuickSightResponsesUpdateTheme {
    return new QuickSightResponsesUpdateTheme(this, this.__resources, input);
  }

  public updateThemeAlias(input: shapes.QuickSightUpdateThemeAliasRequest): QuickSightResponsesUpdateThemeAlias {
    return new QuickSightResponsesUpdateThemeAlias(this, this.__resources, input);
  }

  public updateThemePermissions(input: shapes.QuickSightUpdateThemePermissionsRequest): QuickSightResponsesUpdateThemePermissions {
    return new QuickSightResponsesUpdateThemePermissions(this, this.__resources, input);
  }

  public updateUser(input: shapes.QuickSightUpdateUserRequest): QuickSightResponsesUpdateUser {
    return new QuickSightResponsesUpdateUser(this, this.__resources, input);
  }

}

export class QuickSightResponsesCancelIngestion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCancelIngestionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CancelIngestion.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelIngestion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get ingestionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CancelIngestion.IngestionId'),
        outputPath: 'IngestionId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelIngestion.IngestionId', props);
    return resource.getResponseField('IngestionId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CancelIngestion.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelIngestion.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CancelIngestion.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelIngestion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateAccountCustomizationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAccountCustomization.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountCustomization.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAccountCustomization.AwsAccountId'),
        outputPath: 'AwsAccountId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountCustomization.AwsAccountId', props);
    return resource.getResponseField('AwsAccountId') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAccountCustomization.Namespace'),
        outputPath: 'Namespace',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountCustomization.Namespace', props);
    return resource.getResponseField('Namespace') as unknown as string;
  }

  public get accountCustomization(): QuickSightResponsesCreateAccountCustomizationAccountCustomization {
    return new QuickSightResponsesCreateAccountCustomizationAccountCustomization(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAccountCustomization.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountCustomization.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAccountCustomization.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateAccountCustomizationAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateAccountCustomizationRequest) {
  }

  public get defaultTheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAccountCustomization.AccountCustomization.DefaultTheme'),
        outputPath: 'AccountCustomization.DefaultTheme',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccountCustomization.AccountCustomization.DefaultTheme', props);
    return resource.getResponseField('AccountCustomization.DefaultTheme') as unknown as string;
  }

}

export class QuickSightResponsesCreateAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateAnalysisRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAnalysis.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnalysis.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAnalysis.AnalysisId'),
        outputPath: 'AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnalysis.AnalysisId', props);
    return resource.getResponseField('AnalysisId') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAnalysis.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnalysis.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAnalysis.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnalysis.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateAnalysis.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateDashboardRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDashboard.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get versionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDashboard.VersionArn'),
        outputPath: 'VersionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.VersionArn', props);
    return resource.getResponseField('VersionArn') as unknown as string;
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDashboard.DashboardId'),
        outputPath: 'DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.DashboardId', props);
    return resource.getResponseField('DashboardId') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDashboard.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDashboard.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDashboard.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateDataSetRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSet.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          Permissions: this.__input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSet.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          Permissions: this.__input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get ingestionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSet.IngestionArn'),
        outputPath: 'IngestionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          Permissions: this.__input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.IngestionArn', props);
    return resource.getResponseField('IngestionArn') as unknown as string;
  }

  public get ingestionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSet.IngestionId'),
        outputPath: 'IngestionId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          Permissions: this.__input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.IngestionId', props);
    return resource.getResponseField('IngestionId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSet.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          Permissions: this.__input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSet.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          Permissions: this.__input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateDataSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          Type: this.__input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          Permissions: this.__input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSource.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          Type: this.__input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          Permissions: this.__input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSource.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          Type: this.__input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          Permissions: this.__input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          Type: this.__input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          Permissions: this.__input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateDataSource.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          Type: this.__input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          Permissions: this.__input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateFolderRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolder.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
          FolderType: this.__input.folderType,
          ParentFolderArn: this.__input.parentFolderArn,
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolder.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
          FolderType: this.__input.folderType,
          ParentFolderArn: this.__input.parentFolderArn,
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolder.FolderId'),
        outputPath: 'FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
          FolderType: this.__input.folderType,
          ParentFolderArn: this.__input.parentFolderArn,
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.FolderId', props);
    return resource.getResponseField('FolderId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolder.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
          FolderType: this.__input.folderType,
          ParentFolderArn: this.__input.parentFolderArn,
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolder.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateFolderMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateFolderMembershipRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolderMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolderMembership.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          MemberId: this.__input.memberId,
          MemberType: this.__input.memberType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolderMembership.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folderMember(): QuickSightResponsesCreateFolderMembershipFolderMember {
    return new QuickSightResponsesCreateFolderMembershipFolderMember(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolderMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolderMembership.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          MemberId: this.__input.memberId,
          MemberType: this.__input.memberType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolderMembership.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateFolderMembershipFolderMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateFolderMembershipRequest) {
  }

  public get memberId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolderMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolderMembership.FolderMember.MemberId'),
        outputPath: 'FolderMember.MemberId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          MemberId: this.__input.memberId,
          MemberType: this.__input.memberType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolderMembership.FolderMember.MemberId', props);
    return resource.getResponseField('FolderMember.MemberId') as unknown as string;
  }

  public get memberType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFolderMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateFolderMembership.FolderMember.MemberType'),
        outputPath: 'FolderMember.MemberType',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          MemberId: this.__input.memberId,
          MemberType: this.__input.memberType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFolderMembership.FolderMember.MemberType', props);
    return resource.getResponseField('FolderMember.MemberType') as unknown as string;
  }

}

export class QuickSightResponsesCreateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateGroupRequest) {
  }

  public get group(): QuickSightResponsesCreateGroupGroup {
    return new QuickSightResponsesCreateGroupGroup(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroup.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroup.Status'),
        outputPath: 'Status',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroup.Group.Arn'),
        outputPath: 'Group.Arn',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.Arn', props);
    return resource.getResponseField('Group.Arn') as unknown as string;
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroup.Group.PrincipalId'),
        outputPath: 'Group.PrincipalId',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.PrincipalId', props);
    return resource.getResponseField('Group.PrincipalId') as unknown as string;
  }

}

export class QuickSightResponsesCreateGroupMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateGroupMembershipRequest) {
  }

  public get groupMember(): QuickSightResponsesCreateGroupMembershipGroupMember {
    return new QuickSightResponsesCreateGroupMembershipGroupMember(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroupMembership.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          MemberName: this.__input.memberName,
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupMembership.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroupMembership.Status'),
        outputPath: 'Status',
        parameters: {
          MemberName: this.__input.memberName,
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupMembership.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateGroupMembershipGroupMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateGroupMembershipRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroupMembership.GroupMember.Arn'),
        outputPath: 'GroupMember.Arn',
        parameters: {
          MemberName: this.__input.memberName,
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupMembership.GroupMember.Arn', props);
    return resource.getResponseField('GroupMember.Arn') as unknown as string;
  }

  public get memberName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroupMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateGroupMembership.GroupMember.MemberName'),
        outputPath: 'GroupMember.MemberName',
        parameters: {
          MemberName: this.__input.memberName,
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroupMembership.GroupMember.MemberName', props);
    return resource.getResponseField('GroupMember.MemberName') as unknown as string;
  }

}

export class QuickSightResponsesCreateIamPolicyAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateIamPolicyAssignmentRequest) {
  }

  public get assignmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.AssignmentName'),
        outputPath: 'AssignmentName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.AssignmentName', props);
    return resource.getResponseField('AssignmentName') as unknown as string;
  }

  public get assignmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.AssignmentId'),
        outputPath: 'AssignmentId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.AssignmentId', props);
    return resource.getResponseField('AssignmentId') as unknown as string;
  }

  public get assignmentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.AssignmentStatus'),
        outputPath: 'AssignmentStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.AssignmentStatus', props);
    return resource.getResponseField('AssignmentStatus') as unknown as string;
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.PolicyArn'),
        outputPath: 'PolicyArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.PolicyArn', props);
    return resource.getResponseField('PolicyArn') as unknown as string;
  }

  public get identities(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.Identities'),
        outputPath: 'Identities',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.Identities', props);
    return resource.getResponseField('Identities') as unknown as Record<string, string[]>;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIAMPolicyAssignment.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateIngestion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateIngestionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIngestion.Arn'),
        outputPath: 'Arn',
        parameters: {
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIngestion.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get ingestionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIngestion.IngestionId'),
        outputPath: 'IngestionId',
        parameters: {
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIngestion.IngestionId', props);
    return resource.getResponseField('IngestionId') as unknown as string;
  }

  public get ingestionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIngestion.IngestionStatus'),
        outputPath: 'IngestionStatus',
        parameters: {
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIngestion.IngestionStatus', props);
    return resource.getResponseField('IngestionStatus') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIngestion.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIngestion.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateIngestion.Status'),
        outputPath: 'Status',
        parameters: {
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIngestion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateNamespaceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.Name'),
        outputPath: 'Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get capacityRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.CapacityRegion'),
        outputPath: 'CapacityRegion',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.CapacityRegion', props);
    return resource.getResponseField('CapacityRegion') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get identityStore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.IdentityStore'),
        outputPath: 'IdentityStore',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.IdentityStore', props);
    return resource.getResponseField('IdentityStore') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateNamespace.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          IdentityStore: this.__input.identityStore,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNamespace.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesCreateTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateTemplateRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplate.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          Name: this.__input.name,
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplate.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get versionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplate.VersionArn'),
        outputPath: 'VersionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          Name: this.__input.name,
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplate.VersionArn', props);
    return resource.getResponseField('VersionArn') as unknown as string;
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplate.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          Name: this.__input.name,
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplate.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplate.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          Name: this.__input.name,
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplate.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplate.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          Name: this.__input.name,
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplate.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplate.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          Name: this.__input.name,
          Permissions: this.__input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.__input.tags,
          VersionDescription: this.__input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateTemplateAliasRequest) {
  }

  public get templateAlias(): QuickSightResponsesCreateTemplateAliasTemplateAlias {
    return new QuickSightResponsesCreateTemplateAliasTemplateAlias(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplateAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplateAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplateAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateTemplateAliasTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateTemplateAliasRequest) {
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplateAlias.TemplateAlias.AliasName'),
        outputPath: 'TemplateAlias.AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplateAlias.TemplateAlias.AliasName', props);
    return resource.getResponseField('TemplateAlias.AliasName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplateAlias.TemplateAlias.Arn'),
        outputPath: 'TemplateAlias.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplateAlias.TemplateAlias.Arn', props);
    return resource.getResponseField('TemplateAlias.Arn') as unknown as string;
  }

  public get templateVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTemplateAlias.TemplateAlias.TemplateVersionNumber'),
        outputPath: 'TemplateAlias.TemplateVersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTemplateAlias.TemplateAlias.TemplateVersionNumber', props);
    return resource.getResponseField('TemplateAlias.TemplateVersionNumber') as unknown as number;
  }

}

export class QuickSightResponsesCreateTheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateThemeRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTheme.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration.uiColorPalette?.warningForeground,
              Success: this.__input.configuration.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTheme.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get versionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTheme.VersionArn'),
        outputPath: 'VersionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration.uiColorPalette?.warningForeground,
              Success: this.__input.configuration.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTheme.VersionArn', props);
    return resource.getResponseField('VersionArn') as unknown as string;
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTheme.ThemeId'),
        outputPath: 'ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration.uiColorPalette?.warningForeground,
              Success: this.__input.configuration.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTheme.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTheme.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration.uiColorPalette?.warningForeground,
              Success: this.__input.configuration.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTheme.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTheme.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration.uiColorPalette?.warningForeground,
              Success: this.__input.configuration.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTheme.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateTheme.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration.uiColorPalette?.warningForeground,
              Success: this.__input.configuration.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.__input.permissions,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateThemeAliasRequest) {
  }

  public get themeAlias(): QuickSightResponsesCreateThemeAliasThemeAlias {
    return new QuickSightResponsesCreateThemeAliasThemeAlias(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateThemeAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThemeAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateThemeAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesCreateThemeAliasThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightCreateThemeAliasRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateThemeAlias.ThemeAlias.Arn'),
        outputPath: 'ThemeAlias.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThemeAlias.ThemeAlias.Arn', props);
    return resource.getResponseField('ThemeAlias.Arn') as unknown as string;
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateThemeAlias.ThemeAlias.AliasName'),
        outputPath: 'ThemeAlias.AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThemeAlias.ThemeAlias.AliasName', props);
    return resource.getResponseField('ThemeAlias.AliasName') as unknown as string;
  }

  public get themeVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.CreateThemeAlias.ThemeAlias.ThemeVersionNumber'),
        outputPath: 'ThemeAlias.ThemeVersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateThemeAlias.ThemeAlias.ThemeVersionNumber', props);
    return resource.getResponseField('ThemeAlias.ThemeVersionNumber') as unknown as number;
  }

}

export class QuickSightResponsesDeleteAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteAccountCustomizationRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAccountCustomization.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountCustomization.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAccountCustomization.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteAnalysisRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAnalysis.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysis.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAnalysis.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysis.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAnalysis.AnalysisId'),
        outputPath: 'AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysis.AnalysisId', props);
    return resource.getResponseField('AnalysisId') as unknown as string;
  }

  public get deletionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAnalysis.DeletionTime'),
        outputPath: 'DeletionTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysis.DeletionTime', props);
    return resource.getResponseField('DeletionTime') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteAnalysis.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          RecoveryWindowInDays: this.__input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.__input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteDashboardRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDashboard.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDashboard.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDashboard.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDashboard.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDashboard.DashboardId'),
        outputPath: 'DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDashboard.DashboardId', props);
    return resource.getResponseField('DashboardId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDashboard.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteDataSetRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSet.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSet.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSet.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSet.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSet.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSet.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSet.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteDataSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSource.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteDataSource.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteFolderRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteFolder.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFolder.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteFolder.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFolder.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteFolder.FolderId'),
        outputPath: 'FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFolder.FolderId', props);
    return resource.getResponseField('FolderId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteFolder.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFolder.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteFolderMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteFolderMembershipRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolderMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteFolderMembership.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          MemberId: this.__input.memberId,
          MemberType: this.__input.memberType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFolderMembership.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFolderMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteFolderMembership.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          MemberId: this.__input.memberId,
          MemberType: this.__input.memberType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFolderMembership.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteGroupRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteGroup.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroup.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteGroup.Status'),
        outputPath: 'Status',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteGroupMembership {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteGroupMembershipRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroupMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteGroupMembership.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          MemberName: this.__input.memberName,
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroupMembership.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroupMembership',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteGroupMembership.Status'),
        outputPath: 'Status',
        parameters: {
          MemberName: this.__input.memberName,
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroupMembership.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteIamPolicyAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteIamPolicyAssignmentRequest) {
  }

  public get assignmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteIAMPolicyAssignment.AssignmentName'),
        outputPath: 'AssignmentName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIAMPolicyAssignment.AssignmentName', props);
    return resource.getResponseField('AssignmentName') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteIAMPolicyAssignment.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIAMPolicyAssignment.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteIAMPolicyAssignment.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteNamespaceRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteNamespace.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNamespace.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteNamespace.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNamespace.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteTemplateRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplate.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplate.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplate.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplate.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplate.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplate.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplate.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteTemplateAliasRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplateAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplateAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplateAlias.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplateAlias.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplateAlias.AliasName'),
        outputPath: 'AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplateAlias.AliasName', props);
    return resource.getResponseField('AliasName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplateAlias.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplateAlias.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTemplateAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteTheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteThemeRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTheme.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTheme.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTheme.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTheme.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTheme.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteTheme.ThemeId'),
        outputPath: 'ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTheme.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteThemeAliasRequest) {
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteThemeAlias.AliasName'),
        outputPath: 'AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteThemeAlias.AliasName', props);
    return resource.getResponseField('AliasName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteThemeAlias.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteThemeAlias.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteThemeAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteThemeAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteThemeAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteThemeAlias.ThemeId'),
        outputPath: 'ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteThemeAlias.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

}

export class QuickSightResponsesDeleteUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteUserRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteUser.Status'),
        outputPath: 'Status',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDeleteUserByPrincipalId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDeleteUserByPrincipalIdRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserByPrincipalId',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteUserByPrincipalId.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          PrincipalId: this.__input.principalId,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserByPrincipalId.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserByPrincipalId',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DeleteUserByPrincipalId.Status'),
        outputPath: 'Status',
        parameters: {
          PrincipalId: this.__input.principalId,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserByPrincipalId.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAccountCustomizationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountCustomization.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Resolved: this.__input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountCustomization.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountCustomization.AwsAccountId'),
        outputPath: 'AwsAccountId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Resolved: this.__input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountCustomization.AwsAccountId', props);
    return resource.getResponseField('AwsAccountId') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountCustomization.Namespace'),
        outputPath: 'Namespace',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Resolved: this.__input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountCustomization.Namespace', props);
    return resource.getResponseField('Namespace') as unknown as string;
  }

  public get accountCustomization(): QuickSightResponsesDescribeAccountCustomizationAccountCustomization {
    return new QuickSightResponsesDescribeAccountCustomizationAccountCustomization(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountCustomization.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Resolved: this.__input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountCustomization.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountCustomization.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Resolved: this.__input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeAccountCustomizationAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAccountCustomizationRequest) {
  }

  public get defaultTheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountCustomization.AccountCustomization.DefaultTheme'),
        outputPath: 'AccountCustomization.DefaultTheme',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Resolved: this.__input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountCustomization.AccountCustomization.DefaultTheme', props);
    return resource.getResponseField('AccountCustomization.DefaultTheme') as unknown as string;
  }

}

export class QuickSightResponsesDescribeAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAccountSettingsRequest) {
  }

  public get accountSettings(): QuickSightResponsesDescribeAccountSettingsAccountSettings {
    return new QuickSightResponsesDescribeAccountSettingsAccountSettings(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountSettings.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountSettings.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountSettings.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountSettings.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeAccountSettingsAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAccountSettingsRequest) {
  }

  public get accountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountSettings.AccountSettings.AccountName'),
        outputPath: 'AccountSettings.AccountName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountSettings.AccountSettings.AccountName', props);
    return resource.getResponseField('AccountSettings.AccountName') as unknown as string;
  }

  public get edition(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountSettings.AccountSettings.Edition'),
        outputPath: 'AccountSettings.Edition',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountSettings.AccountSettings.Edition', props);
    return resource.getResponseField('AccountSettings.Edition') as unknown as string;
  }

  public get defaultNamespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountSettings.AccountSettings.DefaultNamespace'),
        outputPath: 'AccountSettings.DefaultNamespace',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountSettings.AccountSettings.DefaultNamespace', props);
    return resource.getResponseField('AccountSettings.DefaultNamespace') as unknown as string;
  }

  public get notificationEmail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAccountSettings.AccountSettings.NotificationEmail'),
        outputPath: 'AccountSettings.NotificationEmail',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountSettings.AccountSettings.NotificationEmail', props);
    return resource.getResponseField('AccountSettings.NotificationEmail') as unknown as string;
  }

}

export class QuickSightResponsesDescribeAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAnalysisRequest) {
  }

  public get analysis(): QuickSightResponsesDescribeAnalysisAnalysis {
    return new QuickSightResponsesDescribeAnalysisAnalysis(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeAnalysisAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAnalysisRequest) {
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.AnalysisId'),
        outputPath: 'Analysis.AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.AnalysisId', props);
    return resource.getResponseField('Analysis.AnalysisId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.Arn'),
        outputPath: 'Analysis.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.Arn', props);
    return resource.getResponseField('Analysis.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.Name'),
        outputPath: 'Analysis.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.Name', props);
    return resource.getResponseField('Analysis.Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.Status'),
        outputPath: 'Analysis.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.Status', props);
    return resource.getResponseField('Analysis.Status') as unknown as string;
  }

  public get errors(): shapes.QuickSightAnalysisError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.Errors'),
        outputPath: 'Analysis.Errors',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.Errors', props);
    return resource.getResponseField('Analysis.Errors') as unknown as shapes.QuickSightAnalysisError[];
  }

  public get dataSetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.DataSetArns'),
        outputPath: 'Analysis.DataSetArns',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.DataSetArns', props);
    return resource.getResponseField('Analysis.DataSetArns') as unknown as string[];
  }

  public get themeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.ThemeArn'),
        outputPath: 'Analysis.ThemeArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.ThemeArn', props);
    return resource.getResponseField('Analysis.ThemeArn') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.CreatedTime'),
        outputPath: 'Analysis.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.CreatedTime', props);
    return resource.getResponseField('Analysis.CreatedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.LastUpdatedTime'),
        outputPath: 'Analysis.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.LastUpdatedTime', props);
    return resource.getResponseField('Analysis.LastUpdatedTime') as unknown as string;
  }

  public get sheets(): shapes.QuickSightSheet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysis.Analysis.Sheets'),
        outputPath: 'Analysis.Sheets',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysis.Analysis.Sheets', props);
    return resource.getResponseField('Analysis.Sheets') as unknown as shapes.QuickSightSheet[];
  }

}

export class QuickSightResponsesDescribeAnalysisPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeAnalysisPermissionsRequest) {
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysisPermissions.AnalysisId'),
        outputPath: 'AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysisPermissions.AnalysisId', props);
    return resource.getResponseField('AnalysisId') as unknown as string;
  }

  public get analysisArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysisPermissions.AnalysisArn'),
        outputPath: 'AnalysisArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysisPermissions.AnalysisArn', props);
    return resource.getResponseField('AnalysisArn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysisPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysisPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysisPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysisPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeAnalysisPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAnalysisPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDashboardRequest) {
  }

  public get dashboard(): QuickSightResponsesDescribeDashboardDashboard {
    return new QuickSightResponsesDescribeDashboardDashboard(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDashboardDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDashboardRequest) {
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.DashboardId'),
        outputPath: 'Dashboard.DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.DashboardId', props);
    return resource.getResponseField('Dashboard.DashboardId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Arn'),
        outputPath: 'Dashboard.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Arn', props);
    return resource.getResponseField('Dashboard.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Name'),
        outputPath: 'Dashboard.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Name', props);
    return resource.getResponseField('Dashboard.Name') as unknown as string;
  }

  public get version(): QuickSightResponsesDescribeDashboardDashboardVersion {
    return new QuickSightResponsesDescribeDashboardDashboardVersion(this.__scope, this.__resources, this.__input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.CreatedTime'),
        outputPath: 'Dashboard.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.CreatedTime', props);
    return resource.getResponseField('Dashboard.CreatedTime') as unknown as string;
  }

  public get lastPublishedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.LastPublishedTime'),
        outputPath: 'Dashboard.LastPublishedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.LastPublishedTime', props);
    return resource.getResponseField('Dashboard.LastPublishedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.LastUpdatedTime'),
        outputPath: 'Dashboard.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.LastUpdatedTime', props);
    return resource.getResponseField('Dashboard.LastUpdatedTime') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDashboardDashboardVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDashboardRequest) {
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.CreatedTime'),
        outputPath: 'Dashboard.Version.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.CreatedTime', props);
    return resource.getResponseField('Dashboard.Version.CreatedTime') as unknown as string;
  }

  public get errors(): shapes.QuickSightDashboardError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.Errors'),
        outputPath: 'Dashboard.Version.Errors',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.Errors', props);
    return resource.getResponseField('Dashboard.Version.Errors') as unknown as shapes.QuickSightDashboardError[];
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.VersionNumber'),
        outputPath: 'Dashboard.Version.VersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.VersionNumber', props);
    return resource.getResponseField('Dashboard.Version.VersionNumber') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.Status'),
        outputPath: 'Dashboard.Version.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.Status', props);
    return resource.getResponseField('Dashboard.Version.Status') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.Arn'),
        outputPath: 'Dashboard.Version.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.Arn', props);
    return resource.getResponseField('Dashboard.Version.Arn') as unknown as string;
  }

  public get sourceEntityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.SourceEntityArn'),
        outputPath: 'Dashboard.Version.SourceEntityArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.SourceEntityArn', props);
    return resource.getResponseField('Dashboard.Version.SourceEntityArn') as unknown as string;
  }

  public get dataSetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.DataSetArns'),
        outputPath: 'Dashboard.Version.DataSetArns',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.DataSetArns', props);
    return resource.getResponseField('Dashboard.Version.DataSetArns') as unknown as string[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.Description'),
        outputPath: 'Dashboard.Version.Description',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.Description', props);
    return resource.getResponseField('Dashboard.Version.Description') as unknown as string;
  }

  public get themeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.ThemeArn'),
        outputPath: 'Dashboard.Version.ThemeArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.ThemeArn', props);
    return resource.getResponseField('Dashboard.Version.ThemeArn') as unknown as string;
  }

  public get sheets(): shapes.QuickSightSheet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboard.Dashboard.Version.Sheets'),
        outputPath: 'Dashboard.Version.Sheets',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboard.Dashboard.Version.Sheets', props);
    return resource.getResponseField('Dashboard.Version.Sheets') as unknown as shapes.QuickSightSheet[];
  }

}

export class QuickSightResponsesDescribeDashboardPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDashboardPermissionsRequest) {
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboardPermissions.DashboardId'),
        outputPath: 'DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboardPermissions.DashboardId', props);
    return resource.getResponseField('DashboardId') as unknown as string;
  }

  public get dashboardArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboardPermissions.DashboardArn'),
        outputPath: 'DashboardArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboardPermissions.DashboardArn', props);
    return resource.getResponseField('DashboardArn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboardPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboardPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboardPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboardPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDashboardPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDashboardPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSetRequest) {
  }

  public get dataSet(): QuickSightResponsesDescribeDataSetDataSet {
    return new QuickSightResponsesDescribeDataSetDataSet(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeDataSetDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSetRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.Arn'),
        outputPath: 'DataSet.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.Arn', props);
    return resource.getResponseField('DataSet.Arn') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.DataSetId'),
        outputPath: 'DataSet.DataSetId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.DataSetId', props);
    return resource.getResponseField('DataSet.DataSetId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.Name'),
        outputPath: 'DataSet.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.Name', props);
    return resource.getResponseField('DataSet.Name') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.CreatedTime'),
        outputPath: 'DataSet.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.CreatedTime', props);
    return resource.getResponseField('DataSet.CreatedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.LastUpdatedTime'),
        outputPath: 'DataSet.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.LastUpdatedTime', props);
    return resource.getResponseField('DataSet.LastUpdatedTime') as unknown as string;
  }

  public get physicalTableMap(): Record<string, shapes.QuickSightPhysicalTable> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.PhysicalTableMap'),
        outputPath: 'DataSet.PhysicalTableMap',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.PhysicalTableMap', props);
    return resource.getResponseField('DataSet.PhysicalTableMap') as unknown as Record<string, shapes.QuickSightPhysicalTable>;
  }

  public get logicalTableMap(): Record<string, shapes.QuickSightLogicalTable> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.LogicalTableMap'),
        outputPath: 'DataSet.LogicalTableMap',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.LogicalTableMap', props);
    return resource.getResponseField('DataSet.LogicalTableMap') as unknown as Record<string, shapes.QuickSightLogicalTable>;
  }

  public get outputColumns(): shapes.QuickSightOutputColumn[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.OutputColumns'),
        outputPath: 'DataSet.OutputColumns',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.OutputColumns', props);
    return resource.getResponseField('DataSet.OutputColumns') as unknown as shapes.QuickSightOutputColumn[];
  }

  public get importMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.ImportMode'),
        outputPath: 'DataSet.ImportMode',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.ImportMode', props);
    return resource.getResponseField('DataSet.ImportMode') as unknown as string;
  }

  public get consumedSpiceCapacityInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.ConsumedSpiceCapacityInBytes'),
        outputPath: 'DataSet.ConsumedSpiceCapacityInBytes',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.ConsumedSpiceCapacityInBytes', props);
    return resource.getResponseField('DataSet.ConsumedSpiceCapacityInBytes') as unknown as number;
  }

  public get columnGroups(): shapes.QuickSightColumnGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.ColumnGroups'),
        outputPath: 'DataSet.ColumnGroups',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.ColumnGroups', props);
    return resource.getResponseField('DataSet.ColumnGroups') as unknown as shapes.QuickSightColumnGroup[];
  }

  public get fieldFolders(): Record<string, shapes.QuickSightFieldFolder> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.FieldFolders'),
        outputPath: 'DataSet.FieldFolders',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.FieldFolders', props);
    return resource.getResponseField('DataSet.FieldFolders') as unknown as Record<string, shapes.QuickSightFieldFolder>;
  }

  public get rowLevelPermissionDataSet(): QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet {
    return new QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet(this.__scope, this.__resources, this.__input);
  }

  public get rowLevelPermissionTagConfiguration(): QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionTagConfiguration {
    return new QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionTagConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get columnLevelPermissionRules(): shapes.QuickSightColumnLevelPermissionRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.ColumnLevelPermissionRules'),
        outputPath: 'DataSet.ColumnLevelPermissionRules',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.ColumnLevelPermissionRules', props);
    return resource.getResponseField('DataSet.ColumnLevelPermissionRules') as unknown as shapes.QuickSightColumnLevelPermissionRule[];
  }

}

export class QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSetRequest) {
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionDataSet.Namespace'),
        outputPath: 'DataSet.RowLevelPermissionDataSet.Namespace',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.Namespace', props);
    return resource.getResponseField('DataSet.RowLevelPermissionDataSet.Namespace') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionDataSet.Arn'),
        outputPath: 'DataSet.RowLevelPermissionDataSet.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.Arn', props);
    return resource.getResponseField('DataSet.RowLevelPermissionDataSet.Arn') as unknown as string;
  }

  public get permissionPolicy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionDataSet.PermissionPolicy'),
        outputPath: 'DataSet.RowLevelPermissionDataSet.PermissionPolicy',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.PermissionPolicy', props);
    return resource.getResponseField('DataSet.RowLevelPermissionDataSet.PermissionPolicy') as unknown as string;
  }

  public get formatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionDataSet.FormatVersion'),
        outputPath: 'DataSet.RowLevelPermissionDataSet.FormatVersion',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.FormatVersion', props);
    return resource.getResponseField('DataSet.RowLevelPermissionDataSet.FormatVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionDataSet.Status'),
        outputPath: 'DataSet.RowLevelPermissionDataSet.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.Status', props);
    return resource.getResponseField('DataSet.RowLevelPermissionDataSet.Status') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionTagConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSetRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionTagConfiguration.Status'),
        outputPath: 'DataSet.RowLevelPermissionTagConfiguration.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionTagConfiguration.Status', props);
    return resource.getResponseField('DataSet.RowLevelPermissionTagConfiguration.Status') as unknown as string;
  }

  public get tagRules(): shapes.QuickSightRowLevelPermissionTagRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSet.DataSet.RowLevelPermissionTagConfiguration.TagRules'),
        outputPath: 'DataSet.RowLevelPermissionTagConfiguration.TagRules',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSet.DataSet.RowLevelPermissionTagConfiguration.TagRules', props);
    return resource.getResponseField('DataSet.RowLevelPermissionTagConfiguration.TagRules') as unknown as shapes.QuickSightRowLevelPermissionTagRule[];
  }

}

export class QuickSightResponsesDescribeDataSetPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSetPermissionsRequest) {
  }

  public get dataSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSetPermissions.DataSetArn'),
        outputPath: 'DataSetArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSetPermissions.DataSetArn', props);
    return resource.getResponseField('DataSetArn') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSetPermissions.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSetPermissions.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSetPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSetPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSetPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSetPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSetPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSetPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get dataSource(): QuickSightResponsesDescribeDataSourceDataSource {
    return new QuickSightResponsesDescribeDataSourceDataSource(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.Arn'),
        outputPath: 'DataSource.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.Arn', props);
    return resource.getResponseField('DataSource.Arn') as unknown as string;
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceId'),
        outputPath: 'DataSource.DataSourceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceId', props);
    return resource.getResponseField('DataSource.DataSourceId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.Name'),
        outputPath: 'DataSource.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.Name', props);
    return resource.getResponseField('DataSource.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.Type'),
        outputPath: 'DataSource.Type',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.Type', props);
    return resource.getResponseField('DataSource.Type') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.Status'),
        outputPath: 'DataSource.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.Status', props);
    return resource.getResponseField('DataSource.Status') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.CreatedTime'),
        outputPath: 'DataSource.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.CreatedTime', props);
    return resource.getResponseField('DataSource.CreatedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.LastUpdatedTime'),
        outputPath: 'DataSource.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.LastUpdatedTime', props);
    return resource.getResponseField('DataSource.LastUpdatedTime') as unknown as string;
  }

  public get dataSourceParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters(this.__scope, this.__resources, this.__input);
  }

  public get alternateDataSourceParameters(): shapes.QuickSightDataSourceParameters[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.AlternateDataSourceParameters'),
        outputPath: 'DataSource.AlternateDataSourceParameters',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.AlternateDataSourceParameters', props);
    return resource.getResponseField('DataSource.AlternateDataSourceParameters') as unknown as shapes.QuickSightDataSourceParameters[];
  }

  public get vpcConnectionProperties(): QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties {
    return new QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties(this.__scope, this.__resources, this.__input);
  }

  public get sslProperties(): QuickSightResponsesDescribeDataSourceDataSourceSslProperties {
    return new QuickSightResponsesDescribeDataSourceDataSourceSslProperties(this.__scope, this.__resources, this.__input);
  }

  public get errorInfo(): QuickSightResponsesDescribeDataSourceDataSourceErrorInfo {
    return new QuickSightResponsesDescribeDataSourceDataSourceErrorInfo(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get amazonElasticsearchParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters(this.__scope, this.__resources, this.__input);
  }

  public get athenaParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters(this.__scope, this.__resources, this.__input);
  }

  public get auroraParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters(this.__scope, this.__resources, this.__input);
  }

  public get auroraPostgreSqlParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters(this.__scope, this.__resources, this.__input);
  }

  public get awsIotAnalyticsParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters(this.__scope, this.__resources, this.__input);
  }

  public get jiraParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters(this.__scope, this.__resources, this.__input);
  }

  public get mariaDbParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters(this.__scope, this.__resources, this.__input);
  }

  public get mySqlParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters(this.__scope, this.__resources, this.__input);
  }

  public get oracleParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters(this.__scope, this.__resources, this.__input);
  }

  public get postgreSqlParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters(this.__scope, this.__resources, this.__input);
  }

  public get prestoParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters(this.__scope, this.__resources, this.__input);
  }

  public get rdsParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters(this.__scope, this.__resources, this.__input);
  }

  public get redshiftParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters(this.__scope, this.__resources, this.__input);
  }

  public get s3Parameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters(this.__scope, this.__resources, this.__input);
  }

  public get serviceNowParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters(this.__scope, this.__resources, this.__input);
  }

  public get snowflakeParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters(this.__scope, this.__resources, this.__input);
  }

  public get sparkParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters(this.__scope, this.__resources, this.__input);
  }

  public get sqlServerParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters(this.__scope, this.__resources, this.__input);
  }

  public get teradataParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters(this.__scope, this.__resources, this.__input);
  }

  public get twitterParameters(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AmazonElasticsearchParameters.Domain'),
        outputPath: 'DataSource.DataSourceParameters.AmazonElasticsearchParameters.Domain',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AmazonElasticsearchParameters.Domain', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AmazonElasticsearchParameters.Domain') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get workGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AthenaParameters.WorkGroup'),
        outputPath: 'DataSource.DataSourceParameters.AthenaParameters.WorkGroup',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AthenaParameters.WorkGroup', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AthenaParameters.WorkGroup') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.AuroraParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.AuroraParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.AuroraParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get dataSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.AwsIotAnalyticsParameters.DataSetName'),
        outputPath: 'DataSource.DataSourceParameters.AwsIotAnalyticsParameters.DataSetName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.AwsIotAnalyticsParameters.DataSetName', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AwsIotAnalyticsParameters.DataSetName') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get siteBaseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.JiraParameters.SiteBaseUrl'),
        outputPath: 'DataSource.DataSourceParameters.JiraParameters.SiteBaseUrl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.JiraParameters.SiteBaseUrl', props);
    return resource.getResponseField('DataSource.DataSourceParameters.JiraParameters.SiteBaseUrl') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.MariaDbParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MariaDbParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.MariaDbParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MariaDbParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.MariaDbParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MariaDbParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.MySqlParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MySqlParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.MySqlParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MySqlParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.MySqlParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MySqlParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.OracleParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.OracleParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.OracleParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.OracleParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.OracleParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.OracleParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.PostgreSqlParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PostgreSqlParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.PostgreSqlParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PostgreSqlParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.PostgreSqlParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PostgreSqlParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.PrestoParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PrestoParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.PrestoParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PrestoParameters.Port') as unknown as number;
  }

  public get catalog(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Catalog'),
        outputPath: 'DataSource.DataSourceParameters.PrestoParameters.Catalog',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Catalog', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PrestoParameters.Catalog') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.RdsParameters.InstanceId'),
        outputPath: 'DataSource.DataSourceParameters.RdsParameters.InstanceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.RdsParameters.InstanceId', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RdsParameters.InstanceId') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.RdsParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.RdsParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.RdsParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RdsParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.RedshiftParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RedshiftParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.RedshiftParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RedshiftParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.RedshiftParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RedshiftParameters.Database') as unknown as string;
  }

  public get clusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.ClusterId'),
        outputPath: 'DataSource.DataSourceParameters.RedshiftParameters.ClusterId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.ClusterId', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RedshiftParameters.ClusterId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get manifestFileLocation(): QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation {
    return new QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Bucket'),
        outputPath: 'DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Bucket',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Bucket', props);
    return resource.getResponseField('DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Key'),
        outputPath: 'DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Key',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Key', props);
    return resource.getResponseField('DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Key') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get siteBaseUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.ServiceNowParameters.SiteBaseUrl'),
        outputPath: 'DataSource.DataSourceParameters.ServiceNowParameters.SiteBaseUrl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.ServiceNowParameters.SiteBaseUrl', props);
    return resource.getResponseField('DataSource.DataSourceParameters.ServiceNowParameters.SiteBaseUrl') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.SnowflakeParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SnowflakeParameters.Host') as unknown as string;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.SnowflakeParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SnowflakeParameters.Database') as unknown as string;
  }

  public get warehouse(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Warehouse'),
        outputPath: 'DataSource.DataSourceParameters.SnowflakeParameters.Warehouse',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Warehouse', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SnowflakeParameters.Warehouse') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SparkParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.SparkParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SparkParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SparkParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SparkParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.SparkParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SparkParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SparkParameters.Port') as unknown as number;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.SqlServerParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SqlServerParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.SqlServerParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SqlServerParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.SqlServerParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SqlServerParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get host(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Host'),
        outputPath: 'DataSource.DataSourceParameters.TeradataParameters.Host',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Host', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TeradataParameters.Host') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Port'),
        outputPath: 'DataSource.DataSourceParameters.TeradataParameters.Port',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TeradataParameters.Port') as unknown as number;
  }

  public get database(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Database'),
        outputPath: 'DataSource.DataSourceParameters.TeradataParameters.Database',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TeradataParameters.Database') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get query(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.TwitterParameters.Query'),
        outputPath: 'DataSource.DataSourceParameters.TwitterParameters.Query',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.TwitterParameters.Query', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TwitterParameters.Query') as unknown as string;
  }

  public get maxRows(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.DataSourceParameters.TwitterParameters.MaxRows'),
        outputPath: 'DataSource.DataSourceParameters.TwitterParameters.MaxRows',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.DataSourceParameters.TwitterParameters.MaxRows', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TwitterParameters.MaxRows') as unknown as number;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get vpcConnectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.VpcConnectionProperties.VpcConnectionArn'),
        outputPath: 'DataSource.VpcConnectionProperties.VpcConnectionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.VpcConnectionProperties.VpcConnectionArn', props);
    return resource.getResponseField('DataSource.VpcConnectionProperties.VpcConnectionArn') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceSslProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get disableSsl(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.SslProperties.DisableSsl'),
        outputPath: 'DataSource.SslProperties.DisableSsl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.SslProperties.DisableSsl', props);
    return resource.getResponseField('DataSource.SslProperties.DisableSsl') as unknown as boolean;
  }

}

export class QuickSightResponsesDescribeDataSourceDataSourceErrorInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.ErrorInfo.Type'),
        outputPath: 'DataSource.ErrorInfo.Type',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.ErrorInfo.Type', props);
    return resource.getResponseField('DataSource.ErrorInfo.Type') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSource.DataSource.ErrorInfo.Message'),
        outputPath: 'DataSource.ErrorInfo.Message',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSource.DataSource.ErrorInfo.Message', props);
    return resource.getResponseField('DataSource.ErrorInfo.Message') as unknown as string;
  }

}

export class QuickSightResponsesDescribeDataSourcePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeDataSourcePermissionsRequest) {
  }

  public get dataSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSourcePermissions.DataSourceArn'),
        outputPath: 'DataSourceArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSourcePermissions.DataSourceArn', props);
    return resource.getResponseField('DataSourceArn') as unknown as string;
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSourcePermissions.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSourcePermissions.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSourcePermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSourcePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSourcePermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSourcePermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeDataSourcePermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSourcePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeFolderRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folder(): QuickSightResponsesDescribeFolderFolder {
    return new QuickSightResponsesDescribeFolderFolder(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeFolderFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeFolderRequest) {
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.FolderId'),
        outputPath: 'Folder.FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.FolderId', props);
    return resource.getResponseField('Folder.FolderId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.Arn'),
        outputPath: 'Folder.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.Arn', props);
    return resource.getResponseField('Folder.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.Name'),
        outputPath: 'Folder.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.Name', props);
    return resource.getResponseField('Folder.Name') as unknown as string;
  }

  public get folderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.FolderType'),
        outputPath: 'Folder.FolderType',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.FolderType', props);
    return resource.getResponseField('Folder.FolderType') as unknown as string;
  }

  public get folderPath(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.FolderPath'),
        outputPath: 'Folder.FolderPath',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.FolderPath', props);
    return resource.getResponseField('Folder.FolderPath') as unknown as string[];
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.CreatedTime'),
        outputPath: 'Folder.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.CreatedTime', props);
    return resource.getResponseField('Folder.CreatedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolder.Folder.LastUpdatedTime'),
        outputPath: 'Folder.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolder.Folder.LastUpdatedTime', props);
    return resource.getResponseField('Folder.LastUpdatedTime') as unknown as string;
  }

}

export class QuickSightResponsesDescribeFolderPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeFolderPermissionsRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderPermissions.FolderId'),
        outputPath: 'FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderPermissions.FolderId', props);
    return resource.getResponseField('FolderId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderPermissions.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderPermissions.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeFolderResolvedPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeFolderResolvedPermissionsRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderResolvedPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderResolvedPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderResolvedPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderResolvedPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderResolvedPermissions.FolderId'),
        outputPath: 'FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderResolvedPermissions.FolderId', props);
    return resource.getResponseField('FolderId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderResolvedPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderResolvedPermissions.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderResolvedPermissions.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderResolvedPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderResolvedPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderResolvedPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFolderResolvedPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeFolderResolvedPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFolderResolvedPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeGroupRequest) {
  }

  public get group(): QuickSightResponsesDescribeGroupGroup {
    return new QuickSightResponsesDescribeGroupGroup(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeGroup.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeGroup.Status'),
        outputPath: 'Status',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeGroup.Group.Arn'),
        outputPath: 'Group.Arn',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Group.Arn', props);
    return resource.getResponseField('Group.Arn') as unknown as string;
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeGroup.Group.PrincipalId'),
        outputPath: 'Group.PrincipalId',
        parameters: {
          GroupName: this.__input.groupName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGroup.Group.PrincipalId', props);
    return resource.getResponseField('Group.PrincipalId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeIamPolicyAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIamPolicyAssignmentRequest) {
  }

  public get iamPolicyAssignment(): QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment {
    return new QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIamPolicyAssignmentRequest) {
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.IAMPolicyAssignment.AwsAccountId'),
        outputPath: 'IAMPolicyAssignment.AwsAccountId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AwsAccountId', props);
    return resource.getResponseField('IAMPolicyAssignment.AwsAccountId') as unknown as string;
  }

  public get assignmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentId'),
        outputPath: 'IAMPolicyAssignment.AssignmentId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentId', props);
    return resource.getResponseField('IAMPolicyAssignment.AssignmentId') as unknown as string;
  }

  public get assignmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentName'),
        outputPath: 'IAMPolicyAssignment.AssignmentName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentName', props);
    return resource.getResponseField('IAMPolicyAssignment.AssignmentName') as unknown as string;
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.IAMPolicyAssignment.PolicyArn'),
        outputPath: 'IAMPolicyAssignment.PolicyArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.PolicyArn', props);
    return resource.getResponseField('IAMPolicyAssignment.PolicyArn') as unknown as string;
  }

  public get identities(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.IAMPolicyAssignment.Identities'),
        outputPath: 'IAMPolicyAssignment.Identities',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.Identities', props);
    return resource.getResponseField('IAMPolicyAssignment.Identities') as unknown as Record<string, string[]>;
  }

  public get assignmentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentStatus'),
        outputPath: 'IAMPolicyAssignment.AssignmentStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentStatus', props);
    return resource.getResponseField('IAMPolicyAssignment.AssignmentStatus') as unknown as string;
  }

}

export class QuickSightResponsesDescribeIngestion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIngestionRequest) {
  }

  public get ingestion(): QuickSightResponsesDescribeIngestionIngestion {
    return new QuickSightResponsesDescribeIngestionIngestion(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeIngestionIngestion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIngestionRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.Arn'),
        outputPath: 'Ingestion.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.Arn', props);
    return resource.getResponseField('Ingestion.Arn') as unknown as string;
  }

  public get ingestionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.IngestionId'),
        outputPath: 'Ingestion.IngestionId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.IngestionId', props);
    return resource.getResponseField('Ingestion.IngestionId') as unknown as string;
  }

  public get ingestionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.IngestionStatus'),
        outputPath: 'Ingestion.IngestionStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.IngestionStatus', props);
    return resource.getResponseField('Ingestion.IngestionStatus') as unknown as string;
  }

  public get errorInfo(): QuickSightResponsesDescribeIngestionIngestionErrorInfo {
    return new QuickSightResponsesDescribeIngestionIngestionErrorInfo(this.__scope, this.__resources, this.__input);
  }

  public get rowInfo(): QuickSightResponsesDescribeIngestionIngestionRowInfo {
    return new QuickSightResponsesDescribeIngestionIngestionRowInfo(this.__scope, this.__resources, this.__input);
  }

  public get queueInfo(): QuickSightResponsesDescribeIngestionIngestionQueueInfo {
    return new QuickSightResponsesDescribeIngestionIngestionQueueInfo(this.__scope, this.__resources, this.__input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.CreatedTime'),
        outputPath: 'Ingestion.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.CreatedTime', props);
    return resource.getResponseField('Ingestion.CreatedTime') as unknown as string;
  }

  public get ingestionTimeInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.IngestionTimeInSeconds'),
        outputPath: 'Ingestion.IngestionTimeInSeconds',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.IngestionTimeInSeconds', props);
    return resource.getResponseField('Ingestion.IngestionTimeInSeconds') as unknown as number;
  }

  public get ingestionSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.IngestionSizeInBytes'),
        outputPath: 'Ingestion.IngestionSizeInBytes',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.IngestionSizeInBytes', props);
    return resource.getResponseField('Ingestion.IngestionSizeInBytes') as unknown as number;
  }

  public get requestSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.RequestSource'),
        outputPath: 'Ingestion.RequestSource',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.RequestSource', props);
    return resource.getResponseField('Ingestion.RequestSource') as unknown as string;
  }

  public get requestType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.RequestType'),
        outputPath: 'Ingestion.RequestType',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.RequestType', props);
    return resource.getResponseField('Ingestion.RequestType') as unknown as string;
  }

}

export class QuickSightResponsesDescribeIngestionIngestionErrorInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIngestionRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.ErrorInfo.Type'),
        outputPath: 'Ingestion.ErrorInfo.Type',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.ErrorInfo.Type', props);
    return resource.getResponseField('Ingestion.ErrorInfo.Type') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.ErrorInfo.Message'),
        outputPath: 'Ingestion.ErrorInfo.Message',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.ErrorInfo.Message', props);
    return resource.getResponseField('Ingestion.ErrorInfo.Message') as unknown as string;
  }

}

export class QuickSightResponsesDescribeIngestionIngestionRowInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIngestionRequest) {
  }

  public get rowsIngested(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.RowInfo.RowsIngested'),
        outputPath: 'Ingestion.RowInfo.RowsIngested',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.RowInfo.RowsIngested', props);
    return resource.getResponseField('Ingestion.RowInfo.RowsIngested') as unknown as number;
  }

  public get rowsDropped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.RowInfo.RowsDropped'),
        outputPath: 'Ingestion.RowInfo.RowsDropped',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.RowInfo.RowsDropped', props);
    return resource.getResponseField('Ingestion.RowInfo.RowsDropped') as unknown as number;
  }

}

export class QuickSightResponsesDescribeIngestionIngestionQueueInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeIngestionRequest) {
  }

  public get waitingOnIngestion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.QueueInfo.WaitingOnIngestion'),
        outputPath: 'Ingestion.QueueInfo.WaitingOnIngestion',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.QueueInfo.WaitingOnIngestion', props);
    return resource.getResponseField('Ingestion.QueueInfo.WaitingOnIngestion') as unknown as string;
  }

  public get queuedIngestion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIngestion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeIngestion.Ingestion.QueueInfo.QueuedIngestion'),
        outputPath: 'Ingestion.QueueInfo.QueuedIngestion',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          IngestionId: this.__input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIngestion.Ingestion.QueueInfo.QueuedIngestion', props);
    return resource.getResponseField('Ingestion.QueueInfo.QueuedIngestion') as unknown as string;
  }

}

export class QuickSightResponsesDescribeNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeNamespaceRequest) {
  }

  public get namespace(): QuickSightResponsesDescribeNamespaceNamespace {
    return new QuickSightResponsesDescribeNamespaceNamespace(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeNamespaceNamespace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeNamespaceRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.Name'),
        outputPath: 'Namespace.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.Name', props);
    return resource.getResponseField('Namespace.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.Arn'),
        outputPath: 'Namespace.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.Arn', props);
    return resource.getResponseField('Namespace.Arn') as unknown as string;
  }

  public get capacityRegion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.CapacityRegion'),
        outputPath: 'Namespace.CapacityRegion',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.CapacityRegion', props);
    return resource.getResponseField('Namespace.CapacityRegion') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.CreationStatus'),
        outputPath: 'Namespace.CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.CreationStatus', props);
    return resource.getResponseField('Namespace.CreationStatus') as unknown as string;
  }

  public get identityStore(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.IdentityStore'),
        outputPath: 'Namespace.IdentityStore',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.IdentityStore', props);
    return resource.getResponseField('Namespace.IdentityStore') as unknown as string;
  }

  public get namespaceError(): QuickSightResponsesDescribeNamespaceNamespaceNamespaceError {
    return new QuickSightResponsesDescribeNamespaceNamespaceNamespaceError(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeNamespaceNamespaceNamespaceError {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeNamespaceRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.NamespaceError.Type'),
        outputPath: 'Namespace.NamespaceError.Type',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.NamespaceError.Type', props);
    return resource.getResponseField('Namespace.NamespaceError.Type') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNamespace',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeNamespace.Namespace.NamespaceError.Message'),
        outputPath: 'Namespace.NamespaceError.Message',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNamespace.Namespace.NamespaceError.Message', props);
    return resource.getResponseField('Namespace.NamespaceError.Message') as unknown as string;
  }

}

export class QuickSightResponsesDescribeTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeTemplateRequest) {
  }

  public get template(): QuickSightResponsesDescribeTemplateTemplate {
    return new QuickSightResponsesDescribeTemplateTemplate(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeTemplateTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeTemplateRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Arn'),
        outputPath: 'Template.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Arn', props);
    return resource.getResponseField('Template.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Name'),
        outputPath: 'Template.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Name', props);
    return resource.getResponseField('Template.Name') as unknown as string;
  }

  public get version(): QuickSightResponsesDescribeTemplateTemplateVersion {
    return new QuickSightResponsesDescribeTemplateTemplateVersion(this.__scope, this.__resources, this.__input);
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.TemplateId'),
        outputPath: 'Template.TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.TemplateId', props);
    return resource.getResponseField('Template.TemplateId') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.LastUpdatedTime'),
        outputPath: 'Template.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.LastUpdatedTime', props);
    return resource.getResponseField('Template.LastUpdatedTime') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.CreatedTime'),
        outputPath: 'Template.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.CreatedTime', props);
    return resource.getResponseField('Template.CreatedTime') as unknown as string;
  }

}

export class QuickSightResponsesDescribeTemplateTemplateVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeTemplateRequest) {
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.CreatedTime'),
        outputPath: 'Template.Version.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.CreatedTime', props);
    return resource.getResponseField('Template.Version.CreatedTime') as unknown as string;
  }

  public get errors(): shapes.QuickSightTemplateError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.Errors'),
        outputPath: 'Template.Version.Errors',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.Errors', props);
    return resource.getResponseField('Template.Version.Errors') as unknown as shapes.QuickSightTemplateError[];
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.VersionNumber'),
        outputPath: 'Template.Version.VersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.VersionNumber', props);
    return resource.getResponseField('Template.Version.VersionNumber') as unknown as number;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.Status'),
        outputPath: 'Template.Version.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.Status', props);
    return resource.getResponseField('Template.Version.Status') as unknown as string;
  }

  public get dataSetConfigurations(): shapes.QuickSightDataSetConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.DataSetConfigurations'),
        outputPath: 'Template.Version.DataSetConfigurations',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.DataSetConfigurations', props);
    return resource.getResponseField('Template.Version.DataSetConfigurations') as unknown as shapes.QuickSightDataSetConfiguration[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.Description'),
        outputPath: 'Template.Version.Description',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.Description', props);
    return resource.getResponseField('Template.Version.Description') as unknown as string;
  }

  public get sourceEntityArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.SourceEntityArn'),
        outputPath: 'Template.Version.SourceEntityArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.SourceEntityArn', props);
    return resource.getResponseField('Template.Version.SourceEntityArn') as unknown as string;
  }

  public get themeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.ThemeArn'),
        outputPath: 'Template.Version.ThemeArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.ThemeArn', props);
    return resource.getResponseField('Template.Version.ThemeArn') as unknown as string;
  }

  public get sheets(): shapes.QuickSightSheet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplate.Template.Version.Sheets'),
        outputPath: 'Template.Version.Sheets',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplate.Template.Version.Sheets', props);
    return resource.getResponseField('Template.Version.Sheets') as unknown as shapes.QuickSightSheet[];
  }

}

export class QuickSightResponsesDescribeTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeTemplateAliasRequest) {
  }

  public get templateAlias(): QuickSightResponsesDescribeTemplateAliasTemplateAlias {
    return new QuickSightResponsesDescribeTemplateAliasTemplateAlias(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplateAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplateAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplateAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeTemplateAliasTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeTemplateAliasRequest) {
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplateAlias.TemplateAlias.AliasName'),
        outputPath: 'TemplateAlias.AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplateAlias.TemplateAlias.AliasName', props);
    return resource.getResponseField('TemplateAlias.AliasName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplateAlias.TemplateAlias.Arn'),
        outputPath: 'TemplateAlias.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplateAlias.TemplateAlias.Arn', props);
    return resource.getResponseField('TemplateAlias.Arn') as unknown as string;
  }

  public get templateVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplateAlias.TemplateAlias.TemplateVersionNumber'),
        outputPath: 'TemplateAlias.TemplateVersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplateAlias.TemplateAlias.TemplateVersionNumber', props);
    return resource.getResponseField('TemplateAlias.TemplateVersionNumber') as unknown as number;
  }

}

export class QuickSightResponsesDescribeTemplatePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeTemplatePermissionsRequest) {
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplatePermissions.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplatePermissions.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get templateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplatePermissions.TemplateArn'),
        outputPath: 'TemplateArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplatePermissions.TemplateArn', props);
    return resource.getResponseField('TemplateArn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplatePermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplatePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplatePermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplatePermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTemplatePermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTemplatePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeTheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get theme(): QuickSightResponsesDescribeThemeTheme {
    return new QuickSightResponsesDescribeThemeTheme(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeThemeTheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Arn'),
        outputPath: 'Theme.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Arn', props);
    return resource.getResponseField('Theme.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Name'),
        outputPath: 'Theme.Name',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Name', props);
    return resource.getResponseField('Theme.Name') as unknown as string;
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.ThemeId'),
        outputPath: 'Theme.ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.ThemeId', props);
    return resource.getResponseField('Theme.ThemeId') as unknown as string;
  }

  public get version(): QuickSightResponsesDescribeThemeThemeVersion {
    return new QuickSightResponsesDescribeThemeThemeVersion(this.__scope, this.__resources, this.__input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.CreatedTime'),
        outputPath: 'Theme.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.CreatedTime', props);
    return resource.getResponseField('Theme.CreatedTime') as unknown as string;
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.LastUpdatedTime'),
        outputPath: 'Theme.LastUpdatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.LastUpdatedTime', props);
    return resource.getResponseField('Theme.LastUpdatedTime') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Type'),
        outputPath: 'Theme.Type',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Type', props);
    return resource.getResponseField('Theme.Type') as unknown as string;
  }

}

export class QuickSightResponsesDescribeThemeThemeVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get versionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.VersionNumber'),
        outputPath: 'Theme.Version.VersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.VersionNumber', props);
    return resource.getResponseField('Theme.Version.VersionNumber') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Arn'),
        outputPath: 'Theme.Version.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Arn', props);
    return resource.getResponseField('Theme.Version.Arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Description'),
        outputPath: 'Theme.Version.Description',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Description', props);
    return resource.getResponseField('Theme.Version.Description') as unknown as string;
  }

  public get baseThemeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.BaseThemeId'),
        outputPath: 'Theme.Version.BaseThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.BaseThemeId', props);
    return resource.getResponseField('Theme.Version.BaseThemeId') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.CreatedTime'),
        outputPath: 'Theme.Version.CreatedTime',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.CreatedTime', props);
    return resource.getResponseField('Theme.Version.CreatedTime') as unknown as string;
  }

  public get configuration(): QuickSightResponsesDescribeThemeThemeVersionConfiguration {
    return new QuickSightResponsesDescribeThemeThemeVersionConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get errors(): shapes.QuickSightThemeError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Errors'),
        outputPath: 'Theme.Version.Errors',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Errors', props);
    return resource.getResponseField('Theme.Version.Errors') as unknown as shapes.QuickSightThemeError[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Status'),
        outputPath: 'Theme.Version.Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Status', props);
    return resource.getResponseField('Theme.Version.Status') as unknown as string;
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get dataColorPalette(): QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette(this.__scope, this.__resources, this.__input);
  }

  public get uiColorPalette(): QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette(this.__scope, this.__resources, this.__input);
  }

  public get sheet(): QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get colors(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.DataColorPalette.Colors'),
        outputPath: 'Theme.Version.Configuration.DataColorPalette.Colors',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.DataColorPalette.Colors', props);
    return resource.getResponseField('Theme.Version.Configuration.DataColorPalette.Colors') as unknown as string[];
  }

  public get minMaxGradient(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.DataColorPalette.MinMaxGradient'),
        outputPath: 'Theme.Version.Configuration.DataColorPalette.MinMaxGradient',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.DataColorPalette.MinMaxGradient', props);
    return resource.getResponseField('Theme.Version.Configuration.DataColorPalette.MinMaxGradient') as unknown as string[];
  }

  public get emptyFillColor(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.DataColorPalette.EmptyFillColor'),
        outputPath: 'Theme.Version.Configuration.DataColorPalette.EmptyFillColor',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.DataColorPalette.EmptyFillColor', props);
    return resource.getResponseField('Theme.Version.Configuration.DataColorPalette.EmptyFillColor') as unknown as string;
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get primaryForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.PrimaryForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.PrimaryForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.PrimaryForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.PrimaryForeground') as unknown as string;
  }

  public get primaryBackground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.PrimaryBackground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.PrimaryBackground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.PrimaryBackground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.PrimaryBackground') as unknown as string;
  }

  public get secondaryForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.SecondaryForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.SecondaryForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.SecondaryForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.SecondaryForeground') as unknown as string;
  }

  public get secondaryBackground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.SecondaryBackground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.SecondaryBackground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.SecondaryBackground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.SecondaryBackground') as unknown as string;
  }

  public get accent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.Accent'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.Accent',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Accent', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.Accent') as unknown as string;
  }

  public get accentForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.AccentForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.AccentForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.AccentForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.AccentForeground') as unknown as string;
  }

  public get danger(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.Danger'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.Danger',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Danger', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.Danger') as unknown as string;
  }

  public get dangerForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.DangerForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.DangerForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.DangerForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.DangerForeground') as unknown as string;
  }

  public get warning(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.Warning'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.Warning',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Warning', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.Warning') as unknown as string;
  }

  public get warningForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.WarningForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.WarningForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.WarningForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.WarningForeground') as unknown as string;
  }

  public get success(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.Success'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.Success',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Success', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.Success') as unknown as string;
  }

  public get successForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.SuccessForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.SuccessForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.SuccessForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.SuccessForeground') as unknown as string;
  }

  public get dimension(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.Dimension'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.Dimension',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Dimension', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.Dimension') as unknown as string;
  }

  public get dimensionForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.DimensionForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.DimensionForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.DimensionForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.DimensionForeground') as unknown as string;
  }

  public get measure(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.Measure'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.Measure',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Measure', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.Measure') as unknown as string;
  }

  public get measureForeground(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.UIColorPalette.MeasureForeground'),
        outputPath: 'Theme.Version.Configuration.UIColorPalette.MeasureForeground',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.MeasureForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.MeasureForeground') as unknown as string;
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get tile(): QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile(this.__scope, this.__resources, this.__input);
  }

  public get tileLayout(): QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get border(): QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get show(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.Sheet.Tile.Border.Show'),
        outputPath: 'Theme.Version.Configuration.Sheet.Tile.Border.Show',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.Sheet.Tile.Border.Show', props);
    return resource.getResponseField('Theme.Version.Configuration.Sheet.Tile.Border.Show') as unknown as boolean;
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get gutter(): QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter(this.__scope, this.__resources, this.__input);
  }

  public get margin(): QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin {
    return new QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin(this.__scope, this.__resources, this.__input);
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get show(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.Sheet.TileLayout.Gutter.Show'),
        outputPath: 'Theme.Version.Configuration.Sheet.TileLayout.Gutter.Show',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.Sheet.TileLayout.Gutter.Show', props);
    return resource.getResponseField('Theme.Version.Configuration.Sheet.TileLayout.Gutter.Show') as unknown as boolean;
  }

}

export class QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeRequest) {
  }

  public get show(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeTheme.Theme.Version.Configuration.Sheet.TileLayout.Margin.Show'),
        outputPath: 'Theme.Version.Configuration.Sheet.TileLayout.Margin.Show',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          VersionNumber: this.__input.versionNumber,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTheme.Theme.Version.Configuration.Sheet.TileLayout.Margin.Show', props);
    return resource.getResponseField('Theme.Version.Configuration.Sheet.TileLayout.Margin.Show') as unknown as boolean;
  }

}

export class QuickSightResponsesDescribeThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeAliasRequest) {
  }

  public get themeAlias(): QuickSightResponsesDescribeThemeAliasThemeAlias {
    return new QuickSightResponsesDescribeThemeAliasThemeAlias(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemeAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemeAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemeAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesDescribeThemeAliasThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemeAliasRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemeAlias.ThemeAlias.Arn'),
        outputPath: 'ThemeAlias.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemeAlias.ThemeAlias.Arn', props);
    return resource.getResponseField('ThemeAlias.Arn') as unknown as string;
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemeAlias.ThemeAlias.AliasName'),
        outputPath: 'ThemeAlias.AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemeAlias.ThemeAlias.AliasName', props);
    return resource.getResponseField('ThemeAlias.AliasName') as unknown as string;
  }

  public get themeVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemeAlias.ThemeAlias.ThemeVersionNumber'),
        outputPath: 'ThemeAlias.ThemeVersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemeAlias.ThemeAlias.ThemeVersionNumber', props);
    return resource.getResponseField('ThemeAlias.ThemeVersionNumber') as unknown as number;
  }

}

export class QuickSightResponsesDescribeThemePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeThemePermissionsRequest) {
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemePermissions.ThemeId'),
        outputPath: 'ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemePermissions.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

  public get themeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemePermissions.ThemeArn'),
        outputPath: 'ThemeArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemePermissions.ThemeArn', props);
    return resource.getResponseField('ThemeArn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemePermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemePermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemePermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeThemePermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeThemePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeUserRequest) {
  }

  public get user(): QuickSightResponsesDescribeUserUser {
    return new QuickSightResponsesDescribeUserUser(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.Status'),
        outputPath: 'Status',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesDescribeUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightDescribeUserRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.UserName'),
        outputPath: 'User.UserName',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.Email'),
        outputPath: 'User.Email',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Email', props);
    return resource.getResponseField('User.Email') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.Role'),
        outputPath: 'User.Role',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Role', props);
    return resource.getResponseField('User.Role') as unknown as string;
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.IdentityType'),
        outputPath: 'User.IdentityType',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.IdentityType', props);
    return resource.getResponseField('User.IdentityType') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.Active'),
        outputPath: 'User.Active',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Active', props);
    return resource.getResponseField('User.Active') as unknown as boolean;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.PrincipalId'),
        outputPath: 'User.PrincipalId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PrincipalId', props);
    return resource.getResponseField('User.PrincipalId') as unknown as string;
  }

  public get customPermissionsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.CustomPermissionsName'),
        outputPath: 'User.CustomPermissionsName',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.CustomPermissionsName', props);
    return resource.getResponseField('User.CustomPermissionsName') as unknown as string;
  }

  public get externalLoginFederationProviderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.ExternalLoginFederationProviderType'),
        outputPath: 'User.ExternalLoginFederationProviderType',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.ExternalLoginFederationProviderType', props);
    return resource.getResponseField('User.ExternalLoginFederationProviderType') as unknown as string;
  }

  public get externalLoginFederationProviderUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.ExternalLoginFederationProviderUrl'),
        outputPath: 'User.ExternalLoginFederationProviderUrl',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.ExternalLoginFederationProviderUrl', props);
    return resource.getResponseField('User.ExternalLoginFederationProviderUrl') as unknown as string;
  }

  public get externalLoginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.DescribeUser.User.ExternalLoginId'),
        outputPath: 'User.ExternalLoginId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.ExternalLoginId', props);
    return resource.getResponseField('User.ExternalLoginId') as unknown as string;
  }

}

export class QuickSightResponsesGenerateEmbedUrlForAnonymousUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightGenerateEmbedUrlForAnonymousUserRequest) {
  }

  public get embedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateEmbedUrlForAnonymousUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GenerateEmbedUrlForAnonymousUser.EmbedUrl'),
        outputPath: 'EmbedUrl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          Namespace: this.__input.namespace,
          SessionTags: this.__input.sessionTags,
          AuthorizedResourceArns: this.__input.authorizedResourceArns,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: this.__input.experienceConfiguration.dashboard?.initialDashboardId,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateEmbedUrlForAnonymousUser.EmbedUrl', props);
    return resource.getResponseField('EmbedUrl') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateEmbedUrlForAnonymousUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GenerateEmbedUrlForAnonymousUser.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          Namespace: this.__input.namespace,
          SessionTags: this.__input.sessionTags,
          AuthorizedResourceArns: this.__input.authorizedResourceArns,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: this.__input.experienceConfiguration.dashboard?.initialDashboardId,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateEmbedUrlForAnonymousUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateEmbedUrlForAnonymousUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GenerateEmbedUrlForAnonymousUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          Namespace: this.__input.namespace,
          SessionTags: this.__input.sessionTags,
          AuthorizedResourceArns: this.__input.authorizedResourceArns,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: this.__input.experienceConfiguration.dashboard?.initialDashboardId,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateEmbedUrlForAnonymousUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesGenerateEmbedUrlForRegisteredUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightGenerateEmbedUrlForRegisteredUserRequest) {
  }

  public get embedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateEmbedUrlForRegisteredUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GenerateEmbedUrlForRegisteredUser.EmbedUrl'),
        outputPath: 'EmbedUrl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UserArn: this.__input.userArn,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: this.__input.experienceConfiguration.dashboard?.initialDashboardId,
            },
            QuickSightConsole: {
              InitialPath: this.__input.experienceConfiguration.quickSightConsole?.initialPath,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateEmbedUrlForRegisteredUser.EmbedUrl', props);
    return resource.getResponseField('EmbedUrl') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateEmbedUrlForRegisteredUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GenerateEmbedUrlForRegisteredUser.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UserArn: this.__input.userArn,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: this.__input.experienceConfiguration.dashboard?.initialDashboardId,
            },
            QuickSightConsole: {
              InitialPath: this.__input.experienceConfiguration.quickSightConsole?.initialPath,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateEmbedUrlForRegisteredUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateEmbedUrlForRegisteredUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GenerateEmbedUrlForRegisteredUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UserArn: this.__input.userArn,
          ExperienceConfiguration: {
            Dashboard: {
              InitialDashboardId: this.__input.experienceConfiguration.dashboard?.initialDashboardId,
            },
            QuickSightConsole: {
              InitialPath: this.__input.experienceConfiguration.quickSightConsole?.initialPath,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateEmbedUrlForRegisteredUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesFetchDashboardEmbedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightGetDashboardEmbedUrlRequest) {
  }

  public get embedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDashboardEmbedUrl',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GetDashboardEmbedUrl.EmbedUrl'),
        outputPath: 'EmbedUrl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          IdentityType: this.__input.identityType,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UndoRedoDisabled: this.__input.undoRedoDisabled,
          ResetDisabled: this.__input.resetDisabled,
          StatePersistenceEnabled: this.__input.statePersistenceEnabled,
          UserArn: this.__input.userArn,
          Namespace: this.__input.namespace,
          AdditionalDashboardIds: this.__input.additionalDashboardIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDashboardEmbedUrl.EmbedUrl', props);
    return resource.getResponseField('EmbedUrl') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDashboardEmbedUrl',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GetDashboardEmbedUrl.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          IdentityType: this.__input.identityType,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UndoRedoDisabled: this.__input.undoRedoDisabled,
          ResetDisabled: this.__input.resetDisabled,
          StatePersistenceEnabled: this.__input.statePersistenceEnabled,
          UserArn: this.__input.userArn,
          Namespace: this.__input.namespace,
          AdditionalDashboardIds: this.__input.additionalDashboardIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDashboardEmbedUrl.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDashboardEmbedUrl',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GetDashboardEmbedUrl.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          IdentityType: this.__input.identityType,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UndoRedoDisabled: this.__input.undoRedoDisabled,
          ResetDisabled: this.__input.resetDisabled,
          StatePersistenceEnabled: this.__input.statePersistenceEnabled,
          UserArn: this.__input.userArn,
          Namespace: this.__input.namespace,
          AdditionalDashboardIds: this.__input.additionalDashboardIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDashboardEmbedUrl.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesFetchSessionEmbedUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightGetSessionEmbedUrlRequest) {
  }

  public get embedUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionEmbedUrl',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GetSessionEmbedUrl.EmbedUrl'),
        outputPath: 'EmbedUrl',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          EntryPoint: this.__input.entryPoint,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UserArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionEmbedUrl.EmbedUrl', props);
    return resource.getResponseField('EmbedUrl') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionEmbedUrl',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GetSessionEmbedUrl.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          EntryPoint: this.__input.entryPoint,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UserArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionEmbedUrl.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSessionEmbedUrl',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.GetSessionEmbedUrl.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          EntryPoint: this.__input.entryPoint,
          SessionLifetimeInMinutes: this.__input.sessionLifetimeInMinutes,
          UserArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSessionEmbedUrl.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListAnalyses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListAnalysesRequest) {
  }

  public get analysisSummaryList(): shapes.QuickSightAnalysisSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListAnalyses.AnalysisSummaryList'),
        outputPath: 'AnalysisSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyses.AnalysisSummaryList', props);
    return resource.getResponseField('AnalysisSummaryList') as unknown as shapes.QuickSightAnalysisSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListAnalyses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListAnalyses.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyses.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListAnalyses.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAnalyses.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListDashboardVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListDashboardVersionsRequest) {
  }

  public get dashboardVersionSummaryList(): shapes.QuickSightDashboardVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboardVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboardVersions.DashboardVersionSummaryList'),
        outputPath: 'DashboardVersionSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboardVersions.DashboardVersionSummaryList', props);
    return resource.getResponseField('DashboardVersionSummaryList') as unknown as shapes.QuickSightDashboardVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboardVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboardVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboardVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboardVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboardVersions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboardVersions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboardVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboardVersions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboardVersions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListDashboards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListDashboardsRequest) {
  }

  public get dashboardSummaryList(): shapes.QuickSightDashboardSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboards.DashboardSummaryList'),
        outputPath: 'DashboardSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboards.DashboardSummaryList', props);
    return resource.getResponseField('DashboardSummaryList') as unknown as shapes.QuickSightDashboardSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboards.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboards.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboards.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDashboards.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDashboards.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListDataSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListDataSetsRequest) {
  }

  public get dataSetSummaries(): shapes.QuickSightDataSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSets',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSets.DataSetSummaries'),
        outputPath: 'DataSetSummaries',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSets.DataSetSummaries', props);
    return resource.getResponseField('DataSetSummaries') as unknown as shapes.QuickSightDataSetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSets',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSets',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSets.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSets.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSets',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSets.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSets.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListDataSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListDataSourcesRequest) {
  }

  public get dataSources(): shapes.QuickSightDataSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSources',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSources.DataSources'),
        outputPath: 'DataSources',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSources.DataSources', props);
    return resource.getResponseField('DataSources') as unknown as shapes.QuickSightDataSource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSources',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSources',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSources.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSources.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDataSources',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListDataSources.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDataSources.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListFolderMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListFolderMembersRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolderMembers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolderMembers.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolderMembers.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folderMemberList(): shapes.QuickSightMemberIdArnPair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolderMembers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolderMembers.FolderMemberList'),
        outputPath: 'FolderMemberList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolderMembers.FolderMemberList', props);
    return resource.getResponseField('FolderMemberList') as unknown as shapes.QuickSightMemberIdArnPair[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolderMembers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolderMembers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolderMembers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolderMembers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolderMembers.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolderMembers.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListFolders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListFoldersRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolders.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolders.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folderSummaryList(): shapes.QuickSightFolderSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolders.FolderSummaryList'),
        outputPath: 'FolderSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolders.FolderSummaryList', props);
    return resource.getResponseField('FolderSummaryList') as unknown as shapes.QuickSightFolderSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolders.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListFolders.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFolders.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListGroupMemberships {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListGroupMembershipsRequest) {
  }

  public get groupMemberList(): shapes.QuickSightGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupMemberships',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroupMemberships.GroupMemberList'),
        outputPath: 'GroupMemberList',
        parameters: {
          GroupName: this.__input.groupName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupMemberships.GroupMemberList', props);
    return resource.getResponseField('GroupMemberList') as unknown as shapes.QuickSightGroupMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupMemberships',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroupMemberships.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GroupName: this.__input.groupName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupMemberships.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupMemberships',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroupMemberships.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          GroupName: this.__input.groupName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupMemberships.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupMemberships',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroupMemberships.Status'),
        outputPath: 'Status',
        parameters: {
          GroupName: this.__input.groupName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupMemberships.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListGroupsRequest) {
  }

  public get groupList(): shapes.QuickSightGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroups.GroupList'),
        outputPath: 'GroupList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.GroupList', props);
    return resource.getResponseField('GroupList') as unknown as shapes.QuickSightGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroups.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListGroups.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListIamPolicyAssignments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListIamPolicyAssignmentsRequest) {
  }

  public get iamPolicyAssignments(): shapes.QuickSightIamPolicyAssignmentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignments',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignments.IAMPolicyAssignments'),
        outputPath: 'IAMPolicyAssignments',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentStatus: this.__input.assignmentStatus,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignments.IAMPolicyAssignments', props);
    return resource.getResponseField('IAMPolicyAssignments') as unknown as shapes.QuickSightIamPolicyAssignmentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignments',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentStatus: this.__input.assignmentStatus,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignments',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignments.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentStatus: this.__input.assignmentStatus,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignments.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignments',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignments.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentStatus: this.__input.assignmentStatus,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignments.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListIamPolicyAssignmentsForUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListIamPolicyAssignmentsForUserRequest) {
  }

  public get activeAssignments(): shapes.QuickSightActiveIamPolicyAssignment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignmentsForUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignmentsForUser.ActiveAssignments'),
        outputPath: 'ActiveAssignments',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          UserName: this.__input.userName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignmentsForUser.ActiveAssignments', props);
    return resource.getResponseField('ActiveAssignments') as unknown as shapes.QuickSightActiveIamPolicyAssignment[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignmentsForUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignmentsForUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          UserName: this.__input.userName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignmentsForUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignmentsForUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignmentsForUser.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          UserName: this.__input.userName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignmentsForUser.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIamPolicyAssignmentsForUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIAMPolicyAssignmentsForUser.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          UserName: this.__input.userName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIAMPolicyAssignmentsForUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListIngestions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListIngestionsRequest) {
  }

  public get ingestions(): shapes.QuickSightIngestion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIngestions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIngestions.Ingestions'),
        outputPath: 'Ingestions',
        parameters: {
          DataSetId: this.__input.dataSetId,
          NextToken: this.__input.nextToken,
          AwsAccountId: this.__input.awsAccountId,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIngestions.Ingestions', props);
    return resource.getResponseField('Ingestions') as unknown as shapes.QuickSightIngestion[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIngestions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIngestions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DataSetId: this.__input.dataSetId,
          NextToken: this.__input.nextToken,
          AwsAccountId: this.__input.awsAccountId,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIngestions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIngestions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIngestions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          DataSetId: this.__input.dataSetId,
          NextToken: this.__input.nextToken,
          AwsAccountId: this.__input.awsAccountId,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIngestions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listIngestions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListIngestions.Status'),
        outputPath: 'Status',
        parameters: {
          DataSetId: this.__input.dataSetId,
          NextToken: this.__input.nextToken,
          AwsAccountId: this.__input.awsAccountId,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListIngestions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListNamespaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListNamespacesRequest) {
  }

  public get namespaces(): shapes.QuickSightNamespaceInfoV2[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamespaces',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListNamespaces.Namespaces'),
        outputPath: 'Namespaces',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamespaces.Namespaces', props);
    return resource.getResponseField('Namespaces') as unknown as shapes.QuickSightNamespaceInfoV2[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamespaces',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListNamespaces.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamespaces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamespaces',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListNamespaces.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamespaces.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNamespaces',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListNamespaces.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNamespaces.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListTagsForResourceRequest) {
  }

  public get tags(): shapes.QuickSightTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.QuickSightTag[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTagsForResource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTagsForResource.Status'),
        outputPath: 'Status',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListTemplateAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListTemplateAliasesRequest) {
  }

  public get templateAliasList(): shapes.QuickSightTemplateAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateAliases.TemplateAliasList'),
        outputPath: 'TemplateAliasList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateAliases.TemplateAliasList', props);
    return resource.getResponseField('TemplateAliasList') as unknown as shapes.QuickSightTemplateAlias[];
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateAliases.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateAliases.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateAliases.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateAliases.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateAliases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QuickSightResponsesListTemplateVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListTemplateVersionsRequest) {
  }

  public get templateVersionSummaryList(): shapes.QuickSightTemplateVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateVersions.TemplateVersionSummaryList'),
        outputPath: 'TemplateVersionSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateVersions.TemplateVersionSummaryList', props);
    return resource.getResponseField('TemplateVersionSummaryList') as unknown as shapes.QuickSightTemplateVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateVersions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateVersions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplateVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplateVersions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplateVersions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListTemplatesRequest) {
  }

  public get templateSummaryList(): shapes.QuickSightTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplates',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplates.TemplateSummaryList'),
        outputPath: 'TemplateSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplates.TemplateSummaryList', props);
    return resource.getResponseField('TemplateSummaryList') as unknown as shapes.QuickSightTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplates',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplates',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplates.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplates.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTemplates',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListTemplates.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTemplates.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListThemeAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListThemeAliasesRequest) {
  }

  public get themeAliasList(): shapes.QuickSightThemeAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeAliases.ThemeAliasList'),
        outputPath: 'ThemeAliasList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeAliases.ThemeAliasList', props);
    return resource.getResponseField('ThemeAliasList') as unknown as shapes.QuickSightThemeAlias[];
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeAliases.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeAliases.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeAliases.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeAliases.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeAliases',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeAliases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QuickSightResponsesListThemeVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListThemeVersionsRequest) {
  }

  public get themeVersionSummaryList(): shapes.QuickSightThemeVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeVersions.ThemeVersionSummaryList'),
        outputPath: 'ThemeVersionSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeVersions.ThemeVersionSummaryList', props);
    return resource.getResponseField('ThemeVersionSummaryList') as unknown as shapes.QuickSightThemeVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeVersions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeVersions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemeVersions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemeVersions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemeVersions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListThemes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListThemesRequest) {
  }

  public get themeSummaryList(): shapes.QuickSightThemeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemes',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemes.ThemeSummaryList'),
        outputPath: 'ThemeSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemes.ThemeSummaryList', props);
    return resource.getResponseField('ThemeSummaryList') as unknown as shapes.QuickSightThemeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemes',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemes',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemes.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemes.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listThemes',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListThemes.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Type: this.__input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListThemes.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesListUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListUserGroupsRequest) {
  }

  public get groupList(): shapes.QuickSightGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUserGroups.GroupList'),
        outputPath: 'GroupList',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserGroups.GroupList', props);
    return resource.getResponseField('GroupList') as unknown as shapes.QuickSightGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUserGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUserGroups.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserGroups.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserGroups',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUserGroups.Status'),
        outputPath: 'Status',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserGroups.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightListUsersRequest) {
  }

  public get userList(): shapes.QuickSightUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUsers.UserList'),
        outputPath: 'UserList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.UserList', props);
    return resource.getResponseField('UserList') as unknown as shapes.QuickSightUser[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUsers.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.ListUsers.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesRegisterUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightRegisterUserRequest) {
  }

  public get user(): QuickSightResponsesRegisterUserUser {
    return new QuickSightResponsesRegisterUserUser(this.__scope, this.__resources, this.__input);
  }

  public get userInvitationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.UserInvitationUrl'),
        outputPath: 'UserInvitationUrl',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.UserInvitationUrl', props);
    return resource.getResponseField('UserInvitationUrl') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.Status'),
        outputPath: 'Status',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesRegisterUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightRegisterUserRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.UserName'),
        outputPath: 'User.UserName',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.Email'),
        outputPath: 'User.Email',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.Email', props);
    return resource.getResponseField('User.Email') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.Role'),
        outputPath: 'User.Role',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.Role', props);
    return resource.getResponseField('User.Role') as unknown as string;
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.IdentityType'),
        outputPath: 'User.IdentityType',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.IdentityType', props);
    return resource.getResponseField('User.IdentityType') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.Active'),
        outputPath: 'User.Active',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.Active', props);
    return resource.getResponseField('User.Active') as unknown as boolean;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.PrincipalId'),
        outputPath: 'User.PrincipalId',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.PrincipalId', props);
    return resource.getResponseField('User.PrincipalId') as unknown as string;
  }

  public get customPermissionsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.CustomPermissionsName'),
        outputPath: 'User.CustomPermissionsName',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.CustomPermissionsName', props);
    return resource.getResponseField('User.CustomPermissionsName') as unknown as string;
  }

  public get externalLoginFederationProviderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.ExternalLoginFederationProviderType'),
        outputPath: 'User.ExternalLoginFederationProviderType',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.ExternalLoginFederationProviderType', props);
    return resource.getResponseField('User.ExternalLoginFederationProviderType') as unknown as string;
  }

  public get externalLoginFederationProviderUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.ExternalLoginFederationProviderUrl'),
        outputPath: 'User.ExternalLoginFederationProviderUrl',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.ExternalLoginFederationProviderUrl', props);
    return resource.getResponseField('User.ExternalLoginFederationProviderUrl') as unknown as string;
  }

  public get externalLoginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RegisterUser.User.ExternalLoginId'),
        outputPath: 'User.ExternalLoginId',
        parameters: {
          IdentityType: this.__input.identityType,
          Email: this.__input.email,
          UserRole: this.__input.userRole,
          IamArn: this.__input.iamArn,
          SessionName: this.__input.sessionName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          UserName: this.__input.userName,
          CustomPermissionsName: this.__input.customPermissionsName,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterUser.User.ExternalLoginId', props);
    return resource.getResponseField('User.ExternalLoginId') as unknown as string;
  }

}

export class QuickSightResponsesRestoreAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightRestoreAnalysisRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RestoreAnalysis.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreAnalysis.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RestoreAnalysis.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreAnalysis.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RestoreAnalysis.AnalysisId'),
        outputPath: 'AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreAnalysis.AnalysisId', props);
    return resource.getResponseField('AnalysisId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.RestoreAnalysis.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesSearchAnalyses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightSearchAnalysesRequest) {
  }

  public get analysisSummaryList(): shapes.QuickSightAnalysisSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchAnalyses.AnalysisSummaryList'),
        outputPath: 'AnalysisSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAnalyses.AnalysisSummaryList', props);
    return resource.getResponseField('AnalysisSummaryList') as unknown as shapes.QuickSightAnalysisSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchAnalyses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAnalyses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchAnalyses.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAnalyses.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchAnalyses',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchAnalyses.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchAnalyses.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesSearchDashboards {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightSearchDashboardsRequest) {
  }

  public get dashboardSummaryList(): shapes.QuickSightDashboardSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchDashboards.DashboardSummaryList'),
        outputPath: 'DashboardSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDashboards.DashboardSummaryList', props);
    return resource.getResponseField('DashboardSummaryList') as unknown as shapes.QuickSightDashboardSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchDashboards.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDashboards.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchDashboards.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDashboards.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchDashboards',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchDashboards.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchDashboards.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesSearchFolders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightSearchFoldersRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchFolders.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFolders.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get folderSummaryList(): shapes.QuickSightFolderSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchFolders.FolderSummaryList'),
        outputPath: 'FolderSummaryList',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFolders.FolderSummaryList', props);
    return resource.getResponseField('FolderSummaryList') as unknown as shapes.QuickSightFolderSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchFolders.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFolders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchFolders',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.SearchFolders.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchFolders.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesTagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightTagResourceRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.TagResource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagResource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.TagResource.Status'),
        outputPath: 'Status',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagResource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUntagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUntagResourceRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UntagResource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          TagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UntagResource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UntagResource.Status'),
        outputPath: 'Status',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          TagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UntagResource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateAccountCustomizationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountCustomization.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountCustomization.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get awsAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountCustomization.AwsAccountId'),
        outputPath: 'AwsAccountId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountCustomization.AwsAccountId', props);
    return resource.getResponseField('AwsAccountId') as unknown as string;
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountCustomization.Namespace'),
        outputPath: 'Namespace',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountCustomization.Namespace', props);
    return resource.getResponseField('Namespace') as unknown as string;
  }

  public get accountCustomization(): QuickSightResponsesUpdateAccountCustomizationAccountCustomization {
    return new QuickSightResponsesUpdateAccountCustomizationAccountCustomization(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountCustomization.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountCustomization.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountCustomization.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateAccountCustomizationAccountCustomization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateAccountCustomizationRequest) {
  }

  public get defaultTheme(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountCustomization',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountCustomization.AccountCustomization.DefaultTheme'),
        outputPath: 'AccountCustomization.DefaultTheme',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          AccountCustomization: {
            DefaultTheme: this.__input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountCustomization.AccountCustomization.DefaultTheme', props);
    return resource.getResponseField('AccountCustomization.DefaultTheme') as unknown as string;
  }

}

export class QuickSightResponsesUpdateAccountSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateAccountSettingsRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountSettings.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DefaultNamespace: this.__input.defaultNamespace,
          NotificationEmail: this.__input.notificationEmail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountSettings.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccountSettings',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAccountSettings.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DefaultNamespace: this.__input.defaultNamespace,
          NotificationEmail: this.__input.notificationEmail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccountSettings.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateAnalysis {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateAnalysisRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysis.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysis.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysis.AnalysisId'),
        outputPath: 'AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysis.AnalysisId', props);
    return resource.getResponseField('AnalysisId') as unknown as string;
  }

  public get updateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysis.UpdateStatus'),
        outputPath: 'UpdateStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysis.UpdateStatus', props);
    return resource.getResponseField('UpdateStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysis.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysis.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysis',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysis.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          Name: this.__input.name,
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateAnalysisPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateAnalysisPermissionsRequest) {
  }

  public get analysisArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysisPermissions.AnalysisArn'),
        outputPath: 'AnalysisArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysisPermissions.AnalysisArn', props);
    return resource.getResponseField('AnalysisArn') as unknown as string;
  }

  public get analysisId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysisPermissions.AnalysisId'),
        outputPath: 'AnalysisId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysisPermissions.AnalysisId', props);
    return resource.getResponseField('AnalysisId') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysisPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysisPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysisPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysisPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAnalysisPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateAnalysisPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AnalysisId: this.__input.analysisId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAnalysisPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateDashboard {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDashboardRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboard.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboard.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get versionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboard.VersionArn'),
        outputPath: 'VersionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboard.VersionArn', props);
    return resource.getResponseField('VersionArn') as unknown as string;
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboard.DashboardId'),
        outputPath: 'DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboard.DashboardId', props);
    return resource.getResponseField('DashboardId') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboard.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboard.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboard.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboard.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboard',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboard.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          Name: this.__input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.__input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.__input.parameters?.stringParameters,
            IntegerParameters: this.__input.parameters?.integerParameters,
            DecimalParameters: this.__input.parameters?.decimalParameters,
            DateTimeParameters: this.__input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.__input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.__input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.__input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.__input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateDashboardPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDashboardPermissionsRequest) {
  }

  public get dashboardArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPermissions.DashboardArn'),
        outputPath: 'DashboardArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPermissions.DashboardArn', props);
    return resource.getResponseField('DashboardArn') as unknown as string;
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPermissions.DashboardId'),
        outputPath: 'DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPermissions.DashboardId', props);
    return resource.getResponseField('DashboardId') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateDashboardPublishedVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDashboardPublishedVersionRequest) {
  }

  public get dashboardId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPublishedVersion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPublishedVersion.DashboardId'),
        outputPath: 'DashboardId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPublishedVersion.DashboardId', props);
    return resource.getResponseField('DashboardId') as unknown as string;
  }

  public get dashboardArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPublishedVersion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPublishedVersion.DashboardArn'),
        outputPath: 'DashboardArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPublishedVersion.DashboardArn', props);
    return resource.getResponseField('DashboardArn') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPublishedVersion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPublishedVersion.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPublishedVersion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDashboardPublishedVersion',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDashboardPublishedVersion.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DashboardId: this.__input.dashboardId,
          VersionNumber: this.__input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDashboardPublishedVersion.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDataSetRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSet.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSet.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get ingestionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSet.IngestionArn'),
        outputPath: 'IngestionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.IngestionArn', props);
    return resource.getResponseField('IngestionArn') as unknown as string;
  }

  public get ingestionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSet.IngestionId'),
        outputPath: 'IngestionId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.IngestionId', props);
    return resource.getResponseField('IngestionId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSet.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSet',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSet.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          Name: this.__input.name,
          PhysicalTableMap: this.__input.physicalTableMap,
          LogicalTableMap: this.__input.logicalTableMap,
          ImportMode: this.__input.importMode,
          ColumnGroups: this.__input.columnGroups,
          FieldFolders: this.__input.fieldFolders,
          RowLevelPermissionDataSet: {
            Namespace: this.__input.rowLevelPermissionDataSet?.namespace,
            Arn: this.__input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.__input.rowLevelPermissionDataSet?.permissionPolicy,
            FormatVersion: this.__input.rowLevelPermissionDataSet?.formatVersion,
            Status: this.__input.rowLevelPermissionDataSet?.status,
          },
          RowLevelPermissionTagConfiguration: {
            Status: this.__input.rowLevelPermissionTagConfiguration?.status,
            TagRules: this.__input.rowLevelPermissionTagConfiguration?.tagRules,
          },
          ColumnLevelPermissionRules: this.__input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateDataSetPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDataSetPermissionsRequest) {
  }

  public get dataSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSetPermissions.DataSetArn'),
        outputPath: 'DataSetArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSetPermissions.DataSetArn', props);
    return resource.getResponseField('DataSetArn') as unknown as string;
  }

  public get dataSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSetPermissions.DataSetId'),
        outputPath: 'DataSetId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSetPermissions.DataSetId', props);
    return resource.getResponseField('DataSetId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSetPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSetPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSetPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSetPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSetId: this.__input.dataSetId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSetPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDataSourceRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSource.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSource.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

  public get updateStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSource.UpdateStatus'),
        outputPath: 'UpdateStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.UpdateStatus', props);
    return resource.getResponseField('UpdateStatus') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSource.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSource.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          Name: this.__input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.__input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.__input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.__input.dataSourceParameters?.auroraParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.__input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.__input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.__input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.__input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.__input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.__input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.__input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.__input.dataSourceParameters?.oracleParameters?.host,
              Port: this.__input.dataSourceParameters?.oracleParameters?.port,
              Database: this.__input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.__input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.__input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.__input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.__input.dataSourceParameters?.prestoParameters?.host,
              Port: this.__input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.__input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.__input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.__input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.__input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.__input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.__input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.__input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.__input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.__input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.__input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.__input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.__input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.__input.dataSourceParameters?.sparkParameters?.host,
              Port: this.__input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.__input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.__input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.__input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.__input.dataSourceParameters?.teradataParameters?.host,
              Port: this.__input.dataSourceParameters?.teradataParameters?.port,
              Database: this.__input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.__input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.__input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.__input.credentials?.credentialPair?.username,
              Password: this.__input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.__input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.__input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.__input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.__input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateDataSourcePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateDataSourcePermissionsRequest) {
  }

  public get dataSourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSourcePermissions.DataSourceArn'),
        outputPath: 'DataSourceArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSourcePermissions.DataSourceArn', props);
    return resource.getResponseField('DataSourceArn') as unknown as string;
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSourcePermissions.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSourcePermissions.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSourcePermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSourcePermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSourcePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateDataSourcePermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          DataSourceId: this.__input.dataSourceId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSourcePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateFolder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateFolderRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolder.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolder.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolder.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolder.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolder.FolderId'),
        outputPath: 'FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolder.FolderId', props);
    return resource.getResponseField('FolderId') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolder',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolder.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolder.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateFolderPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateFolderPermissionsRequest) {
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolderPermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolderPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolderPermissions.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolderPermissions.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get folderId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolderPermissions.FolderId'),
        outputPath: 'FolderId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolderPermissions.FolderId', props);
    return resource.getResponseField('FolderId') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolderPermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolderPermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFolderPermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateFolderPermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          FolderId: this.__input.folderId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFolderPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateGroupRequest) {
  }

  public get group(): QuickSightResponsesUpdateGroupGroup {
    return new QuickSightResponsesUpdateGroupGroup(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateGroup.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateGroup.Status'),
        outputPath: 'Status',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateGroupRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateGroup.Group.Arn'),
        outputPath: 'Group.Arn',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.Arn', props);
    return resource.getResponseField('Group.Arn') as unknown as string;
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateGroup.Group.GroupName'),
        outputPath: 'Group.GroupName',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.GroupName', props);
    return resource.getResponseField('Group.GroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateGroup.Group.PrincipalId'),
        outputPath: 'Group.PrincipalId',
        parameters: {
          GroupName: this.__input.groupName,
          Description: this.__input.description,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.PrincipalId', props);
    return resource.getResponseField('Group.PrincipalId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateIamPolicyAssignment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateIamPolicyAssignmentRequest) {
  }

  public get assignmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.AssignmentName'),
        outputPath: 'AssignmentName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.AssignmentName', props);
    return resource.getResponseField('AssignmentName') as unknown as string;
  }

  public get assignmentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.AssignmentId'),
        outputPath: 'AssignmentId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.AssignmentId', props);
    return resource.getResponseField('AssignmentId') as unknown as string;
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.PolicyArn'),
        outputPath: 'PolicyArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.PolicyArn', props);
    return resource.getResponseField('PolicyArn') as unknown as string;
  }

  public get identities(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.Identities'),
        outputPath: 'Identities',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.Identities', props);
    return resource.getResponseField('Identities') as unknown as Record<string, string[]>;
  }

  public get assignmentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.AssignmentStatus'),
        outputPath: 'AssignmentStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.AssignmentStatus', props);
    return resource.getResponseField('AssignmentStatus') as unknown as string;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateIamPolicyAssignment',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateIAMPolicyAssignment.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          AssignmentName: this.__input.assignmentName,
          Namespace: this.__input.namespace,
          AssignmentStatus: this.__input.assignmentStatus,
          PolicyArn: this.__input.policyArn,
          Identities: this.__input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateTemplateRequest) {
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplate.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.__input.versionDescription,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplate.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplate.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.__input.versionDescription,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplate.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get versionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplate.VersionArn'),
        outputPath: 'VersionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.__input.versionDescription,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplate.VersionArn', props);
    return resource.getResponseField('VersionArn') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplate.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.__input.versionDescription,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplate.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplate.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.__input.versionDescription,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplate.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplate',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplate.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.__input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.__input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.__input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.__input.versionDescription,
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateTemplateAliasRequest) {
  }

  public get templateAlias(): QuickSightResponsesUpdateTemplateAliasTemplateAlias {
    return new QuickSightResponsesUpdateTemplateAliasTemplateAlias(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplateAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplateAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplateAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateTemplateAliasTemplateAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateTemplateAliasRequest) {
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplateAlias.TemplateAlias.AliasName'),
        outputPath: 'TemplateAlias.AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplateAlias.TemplateAlias.AliasName', props);
    return resource.getResponseField('TemplateAlias.AliasName') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplateAlias.TemplateAlias.Arn'),
        outputPath: 'TemplateAlias.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplateAlias.TemplateAlias.Arn', props);
    return resource.getResponseField('TemplateAlias.Arn') as unknown as string;
  }

  public get templateVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplateAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplateAlias.TemplateAlias.TemplateVersionNumber'),
        outputPath: 'TemplateAlias.TemplateVersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          AliasName: this.__input.aliasName,
          TemplateVersionNumber: this.__input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplateAlias.TemplateAlias.TemplateVersionNumber', props);
    return resource.getResponseField('TemplateAlias.TemplateVersionNumber') as unknown as number;
  }

}

export class QuickSightResponsesUpdateTemplatePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateTemplatePermissionsRequest) {
  }

  public get templateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplatePermissions.TemplateId'),
        outputPath: 'TemplateId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplatePermissions.TemplateId', props);
    return resource.getResponseField('TemplateId') as unknown as string;
  }

  public get templateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplatePermissions.TemplateArn'),
        outputPath: 'TemplateArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplatePermissions.TemplateArn', props);
    return resource.getResponseField('TemplateArn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplatePermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplatePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplatePermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplatePermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTemplatePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTemplatePermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          TemplateId: this.__input.templateId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTemplatePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateTheme {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateThemeRequest) {
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTheme.ThemeId'),
        outputPath: 'ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration?.uiColorPalette?.warningForeground,
              Success: this.__input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTheme.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTheme.Arn'),
        outputPath: 'Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration?.uiColorPalette?.warningForeground,
              Success: this.__input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTheme.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get versionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTheme.VersionArn'),
        outputPath: 'VersionArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration?.uiColorPalette?.warningForeground,
              Success: this.__input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTheme.VersionArn', props);
    return resource.getResponseField('VersionArn') as unknown as string;
  }

  public get creationStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTheme.CreationStatus'),
        outputPath: 'CreationStatus',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration?.uiColorPalette?.warningForeground,
              Success: this.__input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTheme.CreationStatus', props);
    return resource.getResponseField('CreationStatus') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTheme.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration?.uiColorPalette?.warningForeground,
              Success: this.__input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTheme.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTheme',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateTheme.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          Name: this.__input.name,
          BaseThemeId: this.__input.baseThemeId,
          VersionDescription: this.__input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.__input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.__input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.__input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.__input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.__input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.__input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.__input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.__input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.__input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.__input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.__input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.__input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.__input.configuration?.uiColorPalette?.warningForeground,
              Success: this.__input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.__input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.__input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.__input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.__input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.__input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.__input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.__input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateThemeAliasRequest) {
  }

  public get themeAlias(): QuickSightResponsesUpdateThemeAliasThemeAlias {
    return new QuickSightResponsesUpdateThemeAliasThemeAlias(this.__scope, this.__resources, this.__input);
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemeAlias.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemeAlias.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemeAlias.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightResponsesUpdateThemeAliasThemeAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateThemeAliasRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemeAlias.ThemeAlias.Arn'),
        outputPath: 'ThemeAlias.Arn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemeAlias.ThemeAlias.Arn', props);
    return resource.getResponseField('ThemeAlias.Arn') as unknown as string;
  }

  public get aliasName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemeAlias.ThemeAlias.AliasName'),
        outputPath: 'ThemeAlias.AliasName',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemeAlias.ThemeAlias.AliasName', props);
    return resource.getResponseField('ThemeAlias.AliasName') as unknown as string;
  }

  public get themeVersionNumber(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemeAlias',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemeAlias.ThemeAlias.ThemeVersionNumber'),
        outputPath: 'ThemeAlias.ThemeVersionNumber',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          AliasName: this.__input.aliasName,
          ThemeVersionNumber: this.__input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemeAlias.ThemeAlias.ThemeVersionNumber', props);
    return resource.getResponseField('ThemeAlias.ThemeVersionNumber') as unknown as number;
  }

}

export class QuickSightResponsesUpdateThemePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateThemePermissionsRequest) {
  }

  public get themeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemePermissions.ThemeId'),
        outputPath: 'ThemeId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemePermissions.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

  public get themeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemePermissions.ThemeArn'),
        outputPath: 'ThemeArn',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemePermissions.ThemeArn', props);
    return resource.getResponseField('ThemeArn') as unknown as string;
  }

  public get permissions(): shapes.QuickSightResourcePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemePermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.QuickSightResourcePermission[];
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemePermissions.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemePermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateThemePermissions',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateThemePermissions.Status'),
        outputPath: 'Status',
        parameters: {
          AwsAccountId: this.__input.awsAccountId,
          ThemeId: this.__input.themeId,
          GrantPermissions: this.__input.grantPermissions,
          RevokePermissions: this.__input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateThemePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateUserRequest) {
  }

  public get user(): QuickSightResponsesUpdateUserUser {
    return new QuickSightResponsesUpdateUserUser(this.__scope, this.__resources, this.__input);
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.RequestId'),
        outputPath: 'RequestId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.Status'),
        outputPath: 'Status',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightResponsesUpdateUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.QuickSightUpdateUserRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.UserName'),
        outputPath: 'User.UserName',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

  public get email(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.Email'),
        outputPath: 'User.Email',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Email', props);
    return resource.getResponseField('User.Email') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.Role'),
        outputPath: 'User.Role',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Role', props);
    return resource.getResponseField('User.Role') as unknown as string;
  }

  public get identityType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.IdentityType'),
        outputPath: 'User.IdentityType',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.IdentityType', props);
    return resource.getResponseField('User.IdentityType') as unknown as string;
  }

  public get active(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.Active'),
        outputPath: 'User.Active',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.Active', props);
    return resource.getResponseField('User.Active') as unknown as boolean;
  }

  public get principalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.PrincipalId'),
        outputPath: 'User.PrincipalId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.PrincipalId', props);
    return resource.getResponseField('User.PrincipalId') as unknown as string;
  }

  public get customPermissionsName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.CustomPermissionsName'),
        outputPath: 'User.CustomPermissionsName',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.CustomPermissionsName', props);
    return resource.getResponseField('User.CustomPermissionsName') as unknown as string;
  }

  public get externalLoginFederationProviderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.ExternalLoginFederationProviderType'),
        outputPath: 'User.ExternalLoginFederationProviderType',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.ExternalLoginFederationProviderType', props);
    return resource.getResponseField('User.ExternalLoginFederationProviderType') as unknown as string;
  }

  public get externalLoginFederationProviderUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.ExternalLoginFederationProviderUrl'),
        outputPath: 'User.ExternalLoginFederationProviderUrl',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.ExternalLoginFederationProviderUrl', props);
    return resource.getResponseField('User.ExternalLoginFederationProviderUrl') as unknown as string;
  }

  public get externalLoginId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'QuickSight',
        physicalResourceId: cr.PhysicalResourceId.of('QuickSight.UpdateUser.User.ExternalLoginId'),
        outputPath: 'User.ExternalLoginId',
        parameters: {
          UserName: this.__input.userName,
          AwsAccountId: this.__input.awsAccountId,
          Namespace: this.__input.namespace,
          Email: this.__input.email,
          Role: this.__input.role,
          CustomPermissionsName: this.__input.customPermissionsName,
          UnapplyCustomPermissions: this.__input.unapplyCustomPermissions,
          ExternalLoginFederationProviderType: this.__input.externalLoginFederationProviderType,
          CustomFederationProviderUrl: this.__input.customFederationProviderUrl,
          ExternalLoginId: this.__input.externalLoginId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.User.ExternalLoginId', props);
    return resource.getResponseField('User.ExternalLoginId') as unknown as string;
  }

}

