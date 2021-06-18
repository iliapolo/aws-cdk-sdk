import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class QuickSightClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelIngestion(input: shapes.QuickSightCancelIngestionRequest): QuickSightCancelIngestion {
    return new QuickSightCancelIngestion(this, 'CancelIngestion', this.__resources, input);
  }

  public createAccountCustomization(input: shapes.QuickSightCreateAccountCustomizationRequest): QuickSightCreateAccountCustomization {
    return new QuickSightCreateAccountCustomization(this, 'CreateAccountCustomization', this.__resources, input);
  }

  public createAnalysis(input: shapes.QuickSightCreateAnalysisRequest): QuickSightCreateAnalysis {
    return new QuickSightCreateAnalysis(this, 'CreateAnalysis', this.__resources, input);
  }

  public createDashboard(input: shapes.QuickSightCreateDashboardRequest): QuickSightCreateDashboard {
    return new QuickSightCreateDashboard(this, 'CreateDashboard', this.__resources, input);
  }

  public createDataSet(input: shapes.QuickSightCreateDataSetRequest): QuickSightCreateDataSet {
    return new QuickSightCreateDataSet(this, 'CreateDataSet', this.__resources, input);
  }

  public createDataSource(input: shapes.QuickSightCreateDataSourceRequest): QuickSightCreateDataSource {
    return new QuickSightCreateDataSource(this, 'CreateDataSource', this.__resources, input);
  }

  public createGroup(input: shapes.QuickSightCreateGroupRequest): QuickSightCreateGroup {
    return new QuickSightCreateGroup(this, 'CreateGroup', this.__resources, input);
  }

  public createGroupMembership(input: shapes.QuickSightCreateGroupMembershipRequest): QuickSightCreateGroupMembership {
    return new QuickSightCreateGroupMembership(this, 'CreateGroupMembership', this.__resources, input);
  }

  public createIamPolicyAssignment(input: shapes.QuickSightCreateIamPolicyAssignmentRequest): QuickSightCreateIamPolicyAssignment {
    return new QuickSightCreateIamPolicyAssignment(this, 'CreateIamPolicyAssignment', this.__resources, input);
  }

  public createIngestion(input: shapes.QuickSightCreateIngestionRequest): QuickSightCreateIngestion {
    return new QuickSightCreateIngestion(this, 'CreateIngestion', this.__resources, input);
  }

  public createNamespace(input: shapes.QuickSightCreateNamespaceRequest): QuickSightCreateNamespace {
    return new QuickSightCreateNamespace(this, 'CreateNamespace', this.__resources, input);
  }

  public createTemplate(input: shapes.QuickSightCreateTemplateRequest): QuickSightCreateTemplate {
    return new QuickSightCreateTemplate(this, 'CreateTemplate', this.__resources, input);
  }

  public createTemplateAlias(input: shapes.QuickSightCreateTemplateAliasRequest): QuickSightCreateTemplateAlias {
    return new QuickSightCreateTemplateAlias(this, 'CreateTemplateAlias', this.__resources, input);
  }

  public createTheme(input: shapes.QuickSightCreateThemeRequest): QuickSightCreateTheme {
    return new QuickSightCreateTheme(this, 'CreateTheme', this.__resources, input);
  }

  public createThemeAlias(input: shapes.QuickSightCreateThemeAliasRequest): QuickSightCreateThemeAlias {
    return new QuickSightCreateThemeAlias(this, 'CreateThemeAlias', this.__resources, input);
  }

  public deleteAccountCustomization(input: shapes.QuickSightDeleteAccountCustomizationRequest): QuickSightDeleteAccountCustomization {
    return new QuickSightDeleteAccountCustomization(this, 'DeleteAccountCustomization', this.__resources, input);
  }

  public deleteAnalysis(input: shapes.QuickSightDeleteAnalysisRequest): QuickSightDeleteAnalysis {
    return new QuickSightDeleteAnalysis(this, 'DeleteAnalysis', this.__resources, input);
  }

  public deleteDashboard(input: shapes.QuickSightDeleteDashboardRequest): QuickSightDeleteDashboard {
    return new QuickSightDeleteDashboard(this, 'DeleteDashboard', this.__resources, input);
  }

  public deleteDataSet(input: shapes.QuickSightDeleteDataSetRequest): QuickSightDeleteDataSet {
    return new QuickSightDeleteDataSet(this, 'DeleteDataSet', this.__resources, input);
  }

  public deleteDataSource(input: shapes.QuickSightDeleteDataSourceRequest): QuickSightDeleteDataSource {
    return new QuickSightDeleteDataSource(this, 'DeleteDataSource', this.__resources, input);
  }

  public deleteGroup(input: shapes.QuickSightDeleteGroupRequest): QuickSightDeleteGroup {
    return new QuickSightDeleteGroup(this, 'DeleteGroup', this.__resources, input);
  }

  public deleteGroupMembership(input: shapes.QuickSightDeleteGroupMembershipRequest): QuickSightDeleteGroupMembership {
    return new QuickSightDeleteGroupMembership(this, 'DeleteGroupMembership', this.__resources, input);
  }

  public deleteIamPolicyAssignment(input: shapes.QuickSightDeleteIamPolicyAssignmentRequest): QuickSightDeleteIamPolicyAssignment {
    return new QuickSightDeleteIamPolicyAssignment(this, 'DeleteIamPolicyAssignment', this.__resources, input);
  }

  public deleteNamespace(input: shapes.QuickSightDeleteNamespaceRequest): QuickSightDeleteNamespace {
    return new QuickSightDeleteNamespace(this, 'DeleteNamespace', this.__resources, input);
  }

  public deleteTemplate(input: shapes.QuickSightDeleteTemplateRequest): QuickSightDeleteTemplate {
    return new QuickSightDeleteTemplate(this, 'DeleteTemplate', this.__resources, input);
  }

  public deleteTemplateAlias(input: shapes.QuickSightDeleteTemplateAliasRequest): QuickSightDeleteTemplateAlias {
    return new QuickSightDeleteTemplateAlias(this, 'DeleteTemplateAlias', this.__resources, input);
  }

  public deleteTheme(input: shapes.QuickSightDeleteThemeRequest): QuickSightDeleteTheme {
    return new QuickSightDeleteTheme(this, 'DeleteTheme', this.__resources, input);
  }

  public deleteThemeAlias(input: shapes.QuickSightDeleteThemeAliasRequest): QuickSightDeleteThemeAlias {
    return new QuickSightDeleteThemeAlias(this, 'DeleteThemeAlias', this.__resources, input);
  }

  public deleteUser(input: shapes.QuickSightDeleteUserRequest): QuickSightDeleteUser {
    return new QuickSightDeleteUser(this, 'DeleteUser', this.__resources, input);
  }

  public deleteUserByPrincipalId(input: shapes.QuickSightDeleteUserByPrincipalIdRequest): QuickSightDeleteUserByPrincipalId {
    return new QuickSightDeleteUserByPrincipalId(this, 'DeleteUserByPrincipalId', this.__resources, input);
  }

  public describeAccountCustomization(input: shapes.QuickSightDescribeAccountCustomizationRequest): QuickSightDescribeAccountCustomization {
    return new QuickSightDescribeAccountCustomization(this, 'DescribeAccountCustomization', this.__resources, input);
  }

  public describeAccountSettings(input: shapes.QuickSightDescribeAccountSettingsRequest): QuickSightDescribeAccountSettings {
    return new QuickSightDescribeAccountSettings(this, 'DescribeAccountSettings', this.__resources, input);
  }

  public describeAnalysis(input: shapes.QuickSightDescribeAnalysisRequest): QuickSightDescribeAnalysis {
    return new QuickSightDescribeAnalysis(this, 'DescribeAnalysis', this.__resources, input);
  }

  public describeAnalysisPermissions(input: shapes.QuickSightDescribeAnalysisPermissionsRequest): QuickSightDescribeAnalysisPermissions {
    return new QuickSightDescribeAnalysisPermissions(this, 'DescribeAnalysisPermissions', this.__resources, input);
  }

  public describeDashboard(input: shapes.QuickSightDescribeDashboardRequest): QuickSightDescribeDashboard {
    return new QuickSightDescribeDashboard(this, 'DescribeDashboard', this.__resources, input);
  }

  public describeDashboardPermissions(input: shapes.QuickSightDescribeDashboardPermissionsRequest): QuickSightDescribeDashboardPermissions {
    return new QuickSightDescribeDashboardPermissions(this, 'DescribeDashboardPermissions', this.__resources, input);
  }

  public describeDataSet(input: shapes.QuickSightDescribeDataSetRequest): QuickSightDescribeDataSet {
    return new QuickSightDescribeDataSet(this, 'DescribeDataSet', this.__resources, input);
  }

  public describeDataSetPermissions(input: shapes.QuickSightDescribeDataSetPermissionsRequest): QuickSightDescribeDataSetPermissions {
    return new QuickSightDescribeDataSetPermissions(this, 'DescribeDataSetPermissions', this.__resources, input);
  }

  public describeDataSource(input: shapes.QuickSightDescribeDataSourceRequest): QuickSightDescribeDataSource {
    return new QuickSightDescribeDataSource(this, 'DescribeDataSource', this.__resources, input);
  }

  public describeDataSourcePermissions(input: shapes.QuickSightDescribeDataSourcePermissionsRequest): QuickSightDescribeDataSourcePermissions {
    return new QuickSightDescribeDataSourcePermissions(this, 'DescribeDataSourcePermissions', this.__resources, input);
  }

  public describeGroup(input: shapes.QuickSightDescribeGroupRequest): QuickSightDescribeGroup {
    return new QuickSightDescribeGroup(this, 'DescribeGroup', this.__resources, input);
  }

  public describeIamPolicyAssignment(input: shapes.QuickSightDescribeIamPolicyAssignmentRequest): QuickSightDescribeIamPolicyAssignment {
    return new QuickSightDescribeIamPolicyAssignment(this, 'DescribeIamPolicyAssignment', this.__resources, input);
  }

  public describeIngestion(input: shapes.QuickSightDescribeIngestionRequest): QuickSightDescribeIngestion {
    return new QuickSightDescribeIngestion(this, 'DescribeIngestion', this.__resources, input);
  }

  public describeNamespace(input: shapes.QuickSightDescribeNamespaceRequest): QuickSightDescribeNamespace {
    return new QuickSightDescribeNamespace(this, 'DescribeNamespace', this.__resources, input);
  }

  public describeTemplate(input: shapes.QuickSightDescribeTemplateRequest): QuickSightDescribeTemplate {
    return new QuickSightDescribeTemplate(this, 'DescribeTemplate', this.__resources, input);
  }

  public describeTemplateAlias(input: shapes.QuickSightDescribeTemplateAliasRequest): QuickSightDescribeTemplateAlias {
    return new QuickSightDescribeTemplateAlias(this, 'DescribeTemplateAlias', this.__resources, input);
  }

  public describeTemplatePermissions(input: shapes.QuickSightDescribeTemplatePermissionsRequest): QuickSightDescribeTemplatePermissions {
    return new QuickSightDescribeTemplatePermissions(this, 'DescribeTemplatePermissions', this.__resources, input);
  }

  public describeTheme(input: shapes.QuickSightDescribeThemeRequest): QuickSightDescribeTheme {
    return new QuickSightDescribeTheme(this, 'DescribeTheme', this.__resources, input);
  }

  public describeThemeAlias(input: shapes.QuickSightDescribeThemeAliasRequest): QuickSightDescribeThemeAlias {
    return new QuickSightDescribeThemeAlias(this, 'DescribeThemeAlias', this.__resources, input);
  }

  public describeThemePermissions(input: shapes.QuickSightDescribeThemePermissionsRequest): QuickSightDescribeThemePermissions {
    return new QuickSightDescribeThemePermissions(this, 'DescribeThemePermissions', this.__resources, input);
  }

  public describeUser(input: shapes.QuickSightDescribeUserRequest): QuickSightDescribeUser {
    return new QuickSightDescribeUser(this, 'DescribeUser', this.__resources, input);
  }

  public fetchDashboardEmbedUrl(input: shapes.QuickSightGetDashboardEmbedUrlRequest): QuickSightFetchDashboardEmbedUrl {
    return new QuickSightFetchDashboardEmbedUrl(this, 'FetchDashboardEmbedUrl', this.__resources, input);
  }

  public fetchSessionEmbedUrl(input: shapes.QuickSightGetSessionEmbedUrlRequest): QuickSightFetchSessionEmbedUrl {
    return new QuickSightFetchSessionEmbedUrl(this, 'FetchSessionEmbedUrl', this.__resources, input);
  }

  public listAnalyses(input: shapes.QuickSightListAnalysesRequest): QuickSightListAnalyses {
    return new QuickSightListAnalyses(this, 'ListAnalyses', this.__resources, input);
  }

  public listDashboardVersions(input: shapes.QuickSightListDashboardVersionsRequest): QuickSightListDashboardVersions {
    return new QuickSightListDashboardVersions(this, 'ListDashboardVersions', this.__resources, input);
  }

  public listDashboards(input: shapes.QuickSightListDashboardsRequest): QuickSightListDashboards {
    return new QuickSightListDashboards(this, 'ListDashboards', this.__resources, input);
  }

  public listDataSets(input: shapes.QuickSightListDataSetsRequest): QuickSightListDataSets {
    return new QuickSightListDataSets(this, 'ListDataSets', this.__resources, input);
  }

  public listDataSources(input: shapes.QuickSightListDataSourcesRequest): QuickSightListDataSources {
    return new QuickSightListDataSources(this, 'ListDataSources', this.__resources, input);
  }

  public listGroupMemberships(input: shapes.QuickSightListGroupMembershipsRequest): QuickSightListGroupMemberships {
    return new QuickSightListGroupMemberships(this, 'ListGroupMemberships', this.__resources, input);
  }

  public listGroups(input: shapes.QuickSightListGroupsRequest): QuickSightListGroups {
    return new QuickSightListGroups(this, 'ListGroups', this.__resources, input);
  }

  public listIamPolicyAssignments(input: shapes.QuickSightListIamPolicyAssignmentsRequest): QuickSightListIamPolicyAssignments {
    return new QuickSightListIamPolicyAssignments(this, 'ListIamPolicyAssignments', this.__resources, input);
  }

  public listIamPolicyAssignmentsForUser(input: shapes.QuickSightListIamPolicyAssignmentsForUserRequest): QuickSightListIamPolicyAssignmentsForUser {
    return new QuickSightListIamPolicyAssignmentsForUser(this, 'ListIamPolicyAssignmentsForUser', this.__resources, input);
  }

  public listIngestions(input: shapes.QuickSightListIngestionsRequest): QuickSightListIngestions {
    return new QuickSightListIngestions(this, 'ListIngestions', this.__resources, input);
  }

  public listNamespaces(input: shapes.QuickSightListNamespacesRequest): QuickSightListNamespaces {
    return new QuickSightListNamespaces(this, 'ListNamespaces', this.__resources, input);
  }

  public listTagsForResource(input: shapes.QuickSightListTagsForResourceRequest): QuickSightListTagsForResource {
    return new QuickSightListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTemplateAliases(input: shapes.QuickSightListTemplateAliasesRequest): QuickSightListTemplateAliases {
    return new QuickSightListTemplateAliases(this, 'ListTemplateAliases', this.__resources, input);
  }

  public listTemplateVersions(input: shapes.QuickSightListTemplateVersionsRequest): QuickSightListTemplateVersions {
    return new QuickSightListTemplateVersions(this, 'ListTemplateVersions', this.__resources, input);
  }

  public listTemplates(input: shapes.QuickSightListTemplatesRequest): QuickSightListTemplates {
    return new QuickSightListTemplates(this, 'ListTemplates', this.__resources, input);
  }

  public listThemeAliases(input: shapes.QuickSightListThemeAliasesRequest): QuickSightListThemeAliases {
    return new QuickSightListThemeAliases(this, 'ListThemeAliases', this.__resources, input);
  }

  public listThemeVersions(input: shapes.QuickSightListThemeVersionsRequest): QuickSightListThemeVersions {
    return new QuickSightListThemeVersions(this, 'ListThemeVersions', this.__resources, input);
  }

  public listThemes(input: shapes.QuickSightListThemesRequest): QuickSightListThemes {
    return new QuickSightListThemes(this, 'ListThemes', this.__resources, input);
  }

  public listUserGroups(input: shapes.QuickSightListUserGroupsRequest): QuickSightListUserGroups {
    return new QuickSightListUserGroups(this, 'ListUserGroups', this.__resources, input);
  }

  public listUsers(input: shapes.QuickSightListUsersRequest): QuickSightListUsers {
    return new QuickSightListUsers(this, 'ListUsers', this.__resources, input);
  }

  public registerUser(input: shapes.QuickSightRegisterUserRequest): QuickSightRegisterUser {
    return new QuickSightRegisterUser(this, 'RegisterUser', this.__resources, input);
  }

  public restoreAnalysis(input: shapes.QuickSightRestoreAnalysisRequest): QuickSightRestoreAnalysis {
    return new QuickSightRestoreAnalysis(this, 'RestoreAnalysis', this.__resources, input);
  }

  public searchAnalyses(input: shapes.QuickSightSearchAnalysesRequest): QuickSightSearchAnalyses {
    return new QuickSightSearchAnalyses(this, 'SearchAnalyses', this.__resources, input);
  }

  public searchDashboards(input: shapes.QuickSightSearchDashboardsRequest): QuickSightSearchDashboards {
    return new QuickSightSearchDashboards(this, 'SearchDashboards', this.__resources, input);
  }

  public tagResource(input: shapes.QuickSightTagResourceRequest): QuickSightTagResource {
    return new QuickSightTagResource(this, 'TagResource', this.__resources, input);
  }

  public untagResource(input: shapes.QuickSightUntagResourceRequest): QuickSightUntagResource {
    return new QuickSightUntagResource(this, 'UntagResource', this.__resources, input);
  }

  public updateAccountCustomization(input: shapes.QuickSightUpdateAccountCustomizationRequest): QuickSightUpdateAccountCustomization {
    return new QuickSightUpdateAccountCustomization(this, 'UpdateAccountCustomization', this.__resources, input);
  }

  public updateAccountSettings(input: shapes.QuickSightUpdateAccountSettingsRequest): QuickSightUpdateAccountSettings {
    return new QuickSightUpdateAccountSettings(this, 'UpdateAccountSettings', this.__resources, input);
  }

  public updateAnalysis(input: shapes.QuickSightUpdateAnalysisRequest): QuickSightUpdateAnalysis {
    return new QuickSightUpdateAnalysis(this, 'UpdateAnalysis', this.__resources, input);
  }

  public updateAnalysisPermissions(input: shapes.QuickSightUpdateAnalysisPermissionsRequest): QuickSightUpdateAnalysisPermissions {
    return new QuickSightUpdateAnalysisPermissions(this, 'UpdateAnalysisPermissions', this.__resources, input);
  }

  public updateDashboard(input: shapes.QuickSightUpdateDashboardRequest): QuickSightUpdateDashboard {
    return new QuickSightUpdateDashboard(this, 'UpdateDashboard', this.__resources, input);
  }

  public updateDashboardPermissions(input: shapes.QuickSightUpdateDashboardPermissionsRequest): QuickSightUpdateDashboardPermissions {
    return new QuickSightUpdateDashboardPermissions(this, 'UpdateDashboardPermissions', this.__resources, input);
  }

  public updateDashboardPublishedVersion(input: shapes.QuickSightUpdateDashboardPublishedVersionRequest): QuickSightUpdateDashboardPublishedVersion {
    return new QuickSightUpdateDashboardPublishedVersion(this, 'UpdateDashboardPublishedVersion', this.__resources, input);
  }

  public updateDataSet(input: shapes.QuickSightUpdateDataSetRequest): QuickSightUpdateDataSet {
    return new QuickSightUpdateDataSet(this, 'UpdateDataSet', this.__resources, input);
  }

  public updateDataSetPermissions(input: shapes.QuickSightUpdateDataSetPermissionsRequest): QuickSightUpdateDataSetPermissions {
    return new QuickSightUpdateDataSetPermissions(this, 'UpdateDataSetPermissions', this.__resources, input);
  }

  public updateDataSource(input: shapes.QuickSightUpdateDataSourceRequest): QuickSightUpdateDataSource {
    return new QuickSightUpdateDataSource(this, 'UpdateDataSource', this.__resources, input);
  }

  public updateDataSourcePermissions(input: shapes.QuickSightUpdateDataSourcePermissionsRequest): QuickSightUpdateDataSourcePermissions {
    return new QuickSightUpdateDataSourcePermissions(this, 'UpdateDataSourcePermissions', this.__resources, input);
  }

  public updateGroup(input: shapes.QuickSightUpdateGroupRequest): QuickSightUpdateGroup {
    return new QuickSightUpdateGroup(this, 'UpdateGroup', this.__resources, input);
  }

  public updateIamPolicyAssignment(input: shapes.QuickSightUpdateIamPolicyAssignmentRequest): QuickSightUpdateIamPolicyAssignment {
    return new QuickSightUpdateIamPolicyAssignment(this, 'UpdateIamPolicyAssignment', this.__resources, input);
  }

  public updateTemplate(input: shapes.QuickSightUpdateTemplateRequest): QuickSightUpdateTemplate {
    return new QuickSightUpdateTemplate(this, 'UpdateTemplate', this.__resources, input);
  }

  public updateTemplateAlias(input: shapes.QuickSightUpdateTemplateAliasRequest): QuickSightUpdateTemplateAlias {
    return new QuickSightUpdateTemplateAlias(this, 'UpdateTemplateAlias', this.__resources, input);
  }

  public updateTemplatePermissions(input: shapes.QuickSightUpdateTemplatePermissionsRequest): QuickSightUpdateTemplatePermissions {
    return new QuickSightUpdateTemplatePermissions(this, 'UpdateTemplatePermissions', this.__resources, input);
  }

  public updateTheme(input: shapes.QuickSightUpdateThemeRequest): QuickSightUpdateTheme {
    return new QuickSightUpdateTheme(this, 'UpdateTheme', this.__resources, input);
  }

  public updateThemeAlias(input: shapes.QuickSightUpdateThemeAliasRequest): QuickSightUpdateThemeAlias {
    return new QuickSightUpdateThemeAlias(this, 'UpdateThemeAlias', this.__resources, input);
  }

  public updateThemePermissions(input: shapes.QuickSightUpdateThemePermissionsRequest): QuickSightUpdateThemePermissions {
    return new QuickSightUpdateThemePermissions(this, 'UpdateThemePermissions', this.__resources, input);
  }

  public updateUser(input: shapes.QuickSightUpdateUserRequest): QuickSightUpdateUser {
    return new QuickSightUpdateUser(this, 'UpdateUser', this.__resources, input);
  }

}

export class QuickSightCancelIngestion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCancelIngestionRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelIngestion.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelIngestion.IngestionId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelIngestion.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelIngestion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountCustomization.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountCustomization.AwsAccountId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountCustomization.Namespace', props);
    return resource.getResponseField('Namespace') as unknown as string;
  }

  public get accountCustomization(): QuickSightCreateAccountCustomizationAccountCustomization {
    return new QuickSightCreateAccountCustomizationAccountCustomization(this, 'AccountCustomization', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountCustomization.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateAccountCustomizationAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAccountCustomization.AccountCustomization.DefaultTheme', props);
    return resource.getResponseField('AccountCustomization.DefaultTheme') as unknown as string;
  }

}

export class QuickSightCreateAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateAnalysisRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAnalysis.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAnalysis.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAnalysis.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAnalysis.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightCreateDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateDashboardRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.VersionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightCreateDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateDataSetRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          Permissions: this.input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          Permissions: this.input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.DataSetId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          Permissions: this.input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.IngestionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          Permissions: this.input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.IngestionId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          Permissions: this.input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          Permissions: this.input.permissions,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          Type: this.input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          Permissions: this.input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          Type: this.input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          Permissions: this.input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.DataSourceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          Type: this.input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          Permissions: this.input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          Type: this.input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          Permissions: this.input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          Type: this.input.type,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          Permissions: this.input.permissions,
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateGroupRequest) {
    super(scope, id);
  }

  public get group(): QuickSightCreateGroupGroup {
    return new QuickSightCreateGroupGroup(this, 'Group', this.__resources, this.input);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.RequestId', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateGroupRequest) {
    super(scope, id);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.Arn', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupName', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.Description', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.PrincipalId', props);
    return resource.getResponseField('Group.PrincipalId') as unknown as string;
  }

}

export class QuickSightCreateGroupMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateGroupMembershipRequest) {
    super(scope, id);
  }

  public get groupMember(): QuickSightCreateGroupMembershipGroupMember {
    return new QuickSightCreateGroupMembershipGroupMember(this, 'GroupMember', this.__resources, this.input);
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
          MemberName: this.input.memberName,
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupMembership.RequestId', props);
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
          MemberName: this.input.memberName,
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupMembership.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateGroupMembershipGroupMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateGroupMembershipRequest) {
    super(scope, id);
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
          MemberName: this.input.memberName,
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupMembership.GroupMember.Arn', props);
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
          MemberName: this.input.memberName,
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroupMembership.GroupMember.MemberName', props);
    return resource.getResponseField('GroupMember.MemberName') as unknown as string;
  }

}

export class QuickSightCreateIamPolicyAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateIamPolicyAssignmentRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.AssignmentName', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.AssignmentId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.AssignmentStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.PolicyArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.Identities', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateIngestion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateIngestionRequest) {
    super(scope, id);
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
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIngestion.Arn', props);
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
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIngestion.IngestionId', props);
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
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIngestion.IngestionStatus', props);
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
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIngestion.RequestId', props);
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
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIngestion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateNamespaceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.Name', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.CapacityRegion', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.IdentityStore', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          IdentityStore: this.input.identityStore,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNamespace.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightCreateTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateTemplateRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          Name: this.input.name,
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplate.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          Name: this.input.name,
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplate.VersionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          Name: this.input.name,
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplate.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          Name: this.input.name,
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplate.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          Name: this.input.name,
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplate.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          Name: this.input.name,
          Permissions: this.input.permissions,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Tags: this.input.tags,
          VersionDescription: this.input.versionDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightCreateTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateTemplateAliasRequest) {
    super(scope, id);
  }

  public get templateAlias(): QuickSightCreateTemplateAliasTemplateAlias {
    return new QuickSightCreateTemplateAliasTemplateAlias(this, 'TemplateAlias', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplateAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightCreateTemplateAliasTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateTemplateAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplateAlias.TemplateAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplateAlias.TemplateAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTemplateAlias.TemplateAlias.TemplateVersionNumber', props);
    return resource.getResponseField('TemplateAlias.TemplateVersionNumber') as unknown as number;
  }

}

export class QuickSightCreateTheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration.uiColorPalette?.accent,
              AccentForeground: this.input.configuration.uiColorPalette?.accentForeground,
              Danger: this.input.configuration.uiColorPalette?.danger,
              DangerForeground: this.input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration.uiColorPalette?.warning,
              WarningForeground: this.input.configuration.uiColorPalette?.warningForeground,
              Success: this.input.configuration.uiColorPalette?.success,
              SuccessForeground: this.input.configuration.uiColorPalette?.successForeground,
              Dimension: this.input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.input.permissions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTheme.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration.uiColorPalette?.accent,
              AccentForeground: this.input.configuration.uiColorPalette?.accentForeground,
              Danger: this.input.configuration.uiColorPalette?.danger,
              DangerForeground: this.input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration.uiColorPalette?.warning,
              WarningForeground: this.input.configuration.uiColorPalette?.warningForeground,
              Success: this.input.configuration.uiColorPalette?.success,
              SuccessForeground: this.input.configuration.uiColorPalette?.successForeground,
              Dimension: this.input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.input.permissions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTheme.VersionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration.uiColorPalette?.accent,
              AccentForeground: this.input.configuration.uiColorPalette?.accentForeground,
              Danger: this.input.configuration.uiColorPalette?.danger,
              DangerForeground: this.input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration.uiColorPalette?.warning,
              WarningForeground: this.input.configuration.uiColorPalette?.warningForeground,
              Success: this.input.configuration.uiColorPalette?.success,
              SuccessForeground: this.input.configuration.uiColorPalette?.successForeground,
              Dimension: this.input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.input.permissions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTheme.ThemeId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration.uiColorPalette?.accent,
              AccentForeground: this.input.configuration.uiColorPalette?.accentForeground,
              Danger: this.input.configuration.uiColorPalette?.danger,
              DangerForeground: this.input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration.uiColorPalette?.warning,
              WarningForeground: this.input.configuration.uiColorPalette?.warningForeground,
              Success: this.input.configuration.uiColorPalette?.success,
              SuccessForeground: this.input.configuration.uiColorPalette?.successForeground,
              Dimension: this.input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.input.permissions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTheme.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration.uiColorPalette?.accent,
              AccentForeground: this.input.configuration.uiColorPalette?.accentForeground,
              Danger: this.input.configuration.uiColorPalette?.danger,
              DangerForeground: this.input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration.uiColorPalette?.warning,
              WarningForeground: this.input.configuration.uiColorPalette?.warningForeground,
              Success: this.input.configuration.uiColorPalette?.success,
              SuccessForeground: this.input.configuration.uiColorPalette?.successForeground,
              Dimension: this.input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.input.permissions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTheme.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration.uiColorPalette?.accent,
              AccentForeground: this.input.configuration.uiColorPalette?.accentForeground,
              Danger: this.input.configuration.uiColorPalette?.danger,
              DangerForeground: this.input.configuration.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration.uiColorPalette?.warning,
              WarningForeground: this.input.configuration.uiColorPalette?.warningForeground,
              Success: this.input.configuration.uiColorPalette?.success,
              SuccessForeground: this.input.configuration.uiColorPalette?.successForeground,
              Dimension: this.input.configuration.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
          Permissions: this.input.permissions,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightCreateThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateThemeAliasRequest) {
    super(scope, id);
  }

  public get themeAlias(): QuickSightCreateThemeAliasThemeAlias {
    return new QuickSightCreateThemeAliasThemeAlias(this, 'ThemeAlias', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThemeAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightCreateThemeAliasThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightCreateThemeAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThemeAlias.ThemeAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThemeAlias.ThemeAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateThemeAlias.ThemeAlias.ThemeVersionNumber', props);
    return resource.getResponseField('ThemeAlias.ThemeVersionNumber') as unknown as number;
  }

}

export class QuickSightDeleteAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountCustomization.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteAnalysisRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysis.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysis.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysis.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysis.DeletionTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          RecoveryWindowInDays: this.input.recoveryWindowInDays,
          ForceDeleteWithoutRecovery: this.input.forceDeleteWithoutRecovery,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDeleteDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteDashboardRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDashboard.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDashboard.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDashboard.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDeleteDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteDataSetRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSet.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSet.DataSetId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSet.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSource.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSource.DataSourceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSource.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteGroupRequest) {
    super(scope, id);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroup.RequestId', props);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteGroupMembership extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteGroupMembershipRequest) {
    super(scope, id);
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
          MemberName: this.input.memberName,
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroupMembership.RequestId', props);
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
          MemberName: this.input.memberName,
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroupMembership.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteIamPolicyAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteIamPolicyAssignmentRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIAMPolicyAssignment.AssignmentName', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIAMPolicyAssignment.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteNamespaceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNamespace.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNamespace.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteTemplateRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplate.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplate.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplate.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplate.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteTemplateAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplateAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplateAlias.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplateAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplateAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDeleteTheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTheme.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTheme.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTheme.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTheme.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

}

export class QuickSightDeleteThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteThemeAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteThemeAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteThemeAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteThemeAlias.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteThemeAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteThemeAlias.ThemeId', props);
    return resource.getResponseField('ThemeId') as unknown as string;
  }

}

export class QuickSightDeleteUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteUserRequest) {
    super(scope, id);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.RequestId', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDeleteUserByPrincipalId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDeleteUserByPrincipalIdRequest) {
    super(scope, id);
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
          PrincipalId: this.input.principalId,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserByPrincipalId.RequestId', props);
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
          PrincipalId: this.input.principalId,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserByPrincipalId.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Resolved: this.input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountCustomization.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Resolved: this.input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountCustomization.AwsAccountId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Resolved: this.input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountCustomization.Namespace', props);
    return resource.getResponseField('Namespace') as unknown as string;
  }

  public get accountCustomization(): QuickSightDescribeAccountCustomizationAccountCustomization {
    return new QuickSightDescribeAccountCustomizationAccountCustomization(this, 'AccountCustomization', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Resolved: this.input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountCustomization.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Resolved: this.input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeAccountCustomizationAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Resolved: this.input.resolved,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountCustomization.AccountCustomization.DefaultTheme', props);
    return resource.getResponseField('AccountCustomization.DefaultTheme') as unknown as string;
  }

}

export class QuickSightDescribeAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAccountSettingsRequest) {
    super(scope, id);
  }

  public get accountSettings(): QuickSightDescribeAccountSettingsAccountSettings {
    return new QuickSightDescribeAccountSettingsAccountSettings(this, 'AccountSettings', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountSettings.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountSettings.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeAccountSettingsAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAccountSettingsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountSettings.AccountSettings.AccountName', props);
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
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountSettings.AccountSettings.Edition', props);
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
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountSettings.AccountSettings.DefaultNamespace', props);
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
          AwsAccountId: this.input.awsAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountSettings.AccountSettings.NotificationEmail', props);
    return resource.getResponseField('AccountSettings.NotificationEmail') as unknown as string;
  }

}

export class QuickSightDescribeAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAnalysisRequest) {
    super(scope, id);
  }

  public get analysis(): QuickSightDescribeAnalysisAnalysis {
    return new QuickSightDescribeAnalysisAnalysis(this, 'Analysis', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeAnalysisAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAnalysisRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.Name', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.Errors', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.DataSetArns', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.ThemeArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.LastUpdatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysis.Analysis.Sheets', props);
    return resource.getResponseField('Analysis.Sheets') as unknown as shapes.QuickSightSheet[];
  }

}

export class QuickSightDescribeAnalysisPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeAnalysisPermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysisPermissions.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysisPermissions.AnalysisArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysisPermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysisPermissions.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAnalysisPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDashboardRequest) {
    super(scope, id);
  }

  public get dashboard(): QuickSightDescribeDashboardDashboard {
    return new QuickSightDescribeDashboardDashboard(this, 'Dashboard', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeDashboardDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDashboardRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Name', props);
    return resource.getResponseField('Dashboard.Name') as unknown as string;
  }

  public get version(): QuickSightDescribeDashboardDashboardVersion {
    return new QuickSightDescribeDashboardDashboardVersion(this, 'Version', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.LastPublishedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.LastUpdatedTime', props);
    return resource.getResponseField('Dashboard.LastUpdatedTime') as unknown as string;
  }

}

export class QuickSightDescribeDashboardDashboardVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDashboardRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.Errors', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.VersionNumber', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.SourceEntityArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.DataSetArns', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.Description', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.ThemeArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboard.Dashboard.Version.Sheets', props);
    return resource.getResponseField('Dashboard.Version.Sheets') as unknown as shapes.QuickSightSheet[];
  }

}

export class QuickSightDescribeDashboardPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDashboardPermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboardPermissions.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboardPermissions.DashboardArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboardPermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboardPermissions.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDashboardPermissions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSetRequest) {
    super(scope, id);
  }

  public get dataSet(): QuickSightDescribeDataSetDataSet {
    return new QuickSightDescribeDataSetDataSet(this, 'DataSet', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeDataSetDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSetRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.DataSetId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.Name', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.LastUpdatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.PhysicalTableMap', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.LogicalTableMap', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.OutputColumns', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.ImportMode', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.ConsumedSpiceCapacityInBytes', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.ColumnGroups', props);
    return resource.getResponseField('DataSet.ColumnGroups') as unknown as shapes.QuickSightColumnGroup[];
  }

  public get rowLevelPermissionDataSet(): QuickSightDescribeDataSetDataSetRowLevelPermissionDataSet {
    return new QuickSightDescribeDataSetDataSetRowLevelPermissionDataSet(this, 'RowLevelPermissionDataSet', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.ColumnLevelPermissionRules', props);
    return resource.getResponseField('DataSet.ColumnLevelPermissionRules') as unknown as shapes.QuickSightColumnLevelPermissionRule[];
  }

}

export class QuickSightDescribeDataSetDataSetRowLevelPermissionDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSetRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.Namespace', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSet.DataSet.RowLevelPermissionDataSet.PermissionPolicy', props);
    return resource.getResponseField('DataSet.RowLevelPermissionDataSet.PermissionPolicy') as unknown as string;
  }

}

export class QuickSightDescribeDataSetPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSetPermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSetPermissions.DataSetArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSetPermissions.DataSetId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSetPermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSetPermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSetPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
  }

  public get dataSource(): QuickSightDescribeDataSourceDataSource {
    return new QuickSightDescribeDataSourceDataSource(this, 'DataSource', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeDataSourceDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.Name', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.Type', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.LastUpdatedTime', props);
    return resource.getResponseField('DataSource.LastUpdatedTime') as unknown as string;
  }

  public get dataSourceParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParameters(this, 'DataSourceParameters', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.AlternateDataSourceParameters', props);
    return resource.getResponseField('DataSource.AlternateDataSourceParameters') as unknown as shapes.QuickSightDataSourceParameters[];
  }

  public get vpcConnectionProperties(): QuickSightDescribeDataSourceDataSourceVpcConnectionProperties {
    return new QuickSightDescribeDataSourceDataSourceVpcConnectionProperties(this, 'VpcConnectionProperties', this.__resources, this.input);
  }

  public get sslProperties(): QuickSightDescribeDataSourceDataSourceSslProperties {
    return new QuickSightDescribeDataSourceDataSourceSslProperties(this, 'SslProperties', this.__resources, this.input);
  }

  public get errorInfo(): QuickSightDescribeDataSourceDataSourceErrorInfo {
    return new QuickSightDescribeDataSourceDataSourceErrorInfo(this, 'ErrorInfo', this.__resources, this.input);
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
  }

  public get amazonElasticsearchParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters(this, 'AmazonElasticsearchParameters', this.__resources, this.input);
  }

  public get athenaParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersAthenaParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersAthenaParameters(this, 'AthenaParameters', this.__resources, this.input);
  }

  public get auroraParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersAuroraParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersAuroraParameters(this, 'AuroraParameters', this.__resources, this.input);
  }

  public get auroraPostgreSqlParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters(this, 'AuroraPostgreSqlParameters', this.__resources, this.input);
  }

  public get awsIotAnalyticsParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters(this, 'AwsIotAnalyticsParameters', this.__resources, this.input);
  }

  public get jiraParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersJiraParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersJiraParameters(this, 'JiraParameters', this.__resources, this.input);
  }

  public get mariaDbParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters(this, 'MariaDbParameters', this.__resources, this.input);
  }

  public get mySqlParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersMySqlParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersMySqlParameters(this, 'MySqlParameters', this.__resources, this.input);
  }

  public get oracleParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersOracleParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersOracleParameters(this, 'OracleParameters', this.__resources, this.input);
  }

  public get postgreSqlParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters(this, 'PostgreSqlParameters', this.__resources, this.input);
  }

  public get prestoParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersPrestoParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersPrestoParameters(this, 'PrestoParameters', this.__resources, this.input);
  }

  public get rdsParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersRdsParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersRdsParameters(this, 'RdsParameters', this.__resources, this.input);
  }

  public get redshiftParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters(this, 'RedshiftParameters', this.__resources, this.input);
  }

  public get s3Parameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersS3Parameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersS3Parameters(this, 'S3Parameters', this.__resources, this.input);
  }

  public get serviceNowParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters(this, 'ServiceNowParameters', this.__resources, this.input);
  }

  public get snowflakeParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters(this, 'SnowflakeParameters', this.__resources, this.input);
  }

  public get sparkParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersSparkParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersSparkParameters(this, 'SparkParameters', this.__resources, this.input);
  }

  public get sqlServerParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters(this, 'SqlServerParameters', this.__resources, this.input);
  }

  public get teradataParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersTeradataParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersTeradataParameters(this, 'TeradataParameters', this.__resources, this.input);
  }

  public get twitterParameters(): QuickSightDescribeDataSourceDataSourceDataSourceParametersTwitterParameters {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersTwitterParameters(this, 'TwitterParameters', this.__resources, this.input);
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AmazonElasticsearchParameters.Domain', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AmazonElasticsearchParameters.Domain') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersAthenaParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AthenaParameters.WorkGroup', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AthenaParameters.WorkGroup') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersAuroraParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AuroraPostgreSqlParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.AwsIotAnalyticsParameters.DataSetName', props);
    return resource.getResponseField('DataSource.DataSourceParameters.AwsIotAnalyticsParameters.DataSetName') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersJiraParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.JiraParameters.SiteBaseUrl', props);
    return resource.getResponseField('DataSource.DataSourceParameters.JiraParameters.SiteBaseUrl') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.MariaDbParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MariaDbParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersMySqlParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.MySqlParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.MySqlParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersOracleParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.OracleParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.OracleParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.PostgreSqlParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PostgreSqlParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersPrestoParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.PrestoParameters.Catalog', props);
    return resource.getResponseField('DataSource.DataSourceParameters.PrestoParameters.Catalog') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersRdsParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.RdsParameters.InstanceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.RdsParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RdsParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.Database', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.RedshiftParameters.ClusterId', props);
    return resource.getResponseField('DataSource.DataSourceParameters.RedshiftParameters.ClusterId') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersS3Parameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
  }

  public get manifestFileLocation(): QuickSightDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation {
    return new QuickSightDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation(this, 'ManifestFileLocation', this.__resources, this.input);
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Bucket', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Key', props);
    return resource.getResponseField('DataSource.DataSourceParameters.S3Parameters.ManifestFileLocation.Key') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.ServiceNowParameters.SiteBaseUrl', props);
    return resource.getResponseField('DataSource.DataSourceParameters.ServiceNowParameters.SiteBaseUrl') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Database', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SnowflakeParameters.Warehouse', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SnowflakeParameters.Warehouse') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersSparkParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SparkParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SparkParameters.Port', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SparkParameters.Port') as unknown as number;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.SqlServerParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.SqlServerParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersTeradataParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Host', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Port', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.TeradataParameters.Database', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TeradataParameters.Database') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceDataSourceParametersTwitterParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.TwitterParameters.Query', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.DataSourceParameters.TwitterParameters.MaxRows', props);
    return resource.getResponseField('DataSource.DataSourceParameters.TwitterParameters.MaxRows') as unknown as number;
  }

}

export class QuickSightDescribeDataSourceDataSourceVpcConnectionProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.VpcConnectionProperties.VpcConnectionArn', props);
    return resource.getResponseField('DataSource.VpcConnectionProperties.VpcConnectionArn') as unknown as string;
  }

}

export class QuickSightDescribeDataSourceDataSourceSslProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.SslProperties.DisableSsl', props);
    return resource.getResponseField('DataSource.SslProperties.DisableSsl') as unknown as boolean;
  }

}

export class QuickSightDescribeDataSourceDataSourceErrorInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.ErrorInfo.Type', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSource.DataSource.ErrorInfo.Message', props);
    return resource.getResponseField('DataSource.ErrorInfo.Message') as unknown as string;
  }

}

export class QuickSightDescribeDataSourcePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeDataSourcePermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSourcePermissions.DataSourceArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSourcePermissions.DataSourceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSourcePermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSourcePermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSourcePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeGroupRequest) {
    super(scope, id);
  }

  public get group(): QuickSightDescribeGroupGroup {
    return new QuickSightDescribeGroupGroup(this, 'Group', this.__resources, this.input);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.RequestId', props);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeGroupRequest) {
    super(scope, id);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Group.Arn', props);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Group.GroupName', props);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Group.Description', props);
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
          GroupName: this.input.groupName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGroup.Group.PrincipalId', props);
    return resource.getResponseField('Group.PrincipalId') as unknown as string;
  }

}

export class QuickSightDescribeIamPolicyAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIamPolicyAssignmentRequest) {
    super(scope, id);
  }

  public get iamPolicyAssignment(): QuickSightDescribeIamPolicyAssignmentIamPolicyAssignment {
    return new QuickSightDescribeIamPolicyAssignmentIamPolicyAssignment(this, 'IamPolicyAssignment', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeIamPolicyAssignmentIamPolicyAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIamPolicyAssignmentRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AwsAccountId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentName', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.PolicyArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.Identities', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIAMPolicyAssignment.IAMPolicyAssignment.AssignmentStatus', props);
    return resource.getResponseField('IAMPolicyAssignment.AssignmentStatus') as unknown as string;
  }

}

export class QuickSightDescribeIngestion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIngestionRequest) {
    super(scope, id);
  }

  public get ingestion(): QuickSightDescribeIngestionIngestion {
    return new QuickSightDescribeIngestionIngestion(this, 'Ingestion', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeIngestionIngestion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIngestionRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.IngestionId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.IngestionStatus', props);
    return resource.getResponseField('Ingestion.IngestionStatus') as unknown as string;
  }

  public get errorInfo(): QuickSightDescribeIngestionIngestionErrorInfo {
    return new QuickSightDescribeIngestionIngestionErrorInfo(this, 'ErrorInfo', this.__resources, this.input);
  }

  public get rowInfo(): QuickSightDescribeIngestionIngestionRowInfo {
    return new QuickSightDescribeIngestionIngestionRowInfo(this, 'RowInfo', this.__resources, this.input);
  }

  public get queueInfo(): QuickSightDescribeIngestionIngestionQueueInfo {
    return new QuickSightDescribeIngestionIngestionQueueInfo(this, 'QueueInfo', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.IngestionTimeInSeconds', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.IngestionSizeInBytes', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.RequestSource', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.RequestType', props);
    return resource.getResponseField('Ingestion.RequestType') as unknown as string;
  }

}

export class QuickSightDescribeIngestionIngestionErrorInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIngestionRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.ErrorInfo.Type', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.ErrorInfo.Message', props);
    return resource.getResponseField('Ingestion.ErrorInfo.Message') as unknown as string;
  }

}

export class QuickSightDescribeIngestionIngestionRowInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIngestionRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.RowInfo.RowsIngested', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.RowInfo.RowsDropped', props);
    return resource.getResponseField('Ingestion.RowInfo.RowsDropped') as unknown as number;
  }

}

export class QuickSightDescribeIngestionIngestionQueueInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeIngestionRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.QueueInfo.WaitingOnIngestion', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          IngestionId: this.input.ingestionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIngestion.Ingestion.QueueInfo.QueuedIngestion', props);
    return resource.getResponseField('Ingestion.QueueInfo.QueuedIngestion') as unknown as string;
  }

}

export class QuickSightDescribeNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeNamespaceRequest) {
    super(scope, id);
  }

  public get namespace(): QuickSightDescribeNamespaceNamespace {
    return new QuickSightDescribeNamespaceNamespace(this, 'Namespace', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeNamespaceNamespace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeNamespaceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.Name', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.CapacityRegion', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.IdentityStore', props);
    return resource.getResponseField('Namespace.IdentityStore') as unknown as string;
  }

  public get namespaceError(): QuickSightDescribeNamespaceNamespaceNamespaceError {
    return new QuickSightDescribeNamespaceNamespaceNamespaceError(this, 'NamespaceError', this.__resources, this.input);
  }

}

export class QuickSightDescribeNamespaceNamespaceNamespaceError extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeNamespaceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.NamespaceError.Type', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNamespace.Namespace.NamespaceError.Message', props);
    return resource.getResponseField('Namespace.NamespaceError.Message') as unknown as string;
  }

}

export class QuickSightDescribeTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeTemplateRequest) {
    super(scope, id);
  }

  public get template(): QuickSightDescribeTemplateTemplate {
    return new QuickSightDescribeTemplateTemplate(this, 'Template', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeTemplateTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeTemplateRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Name', props);
    return resource.getResponseField('Template.Name') as unknown as string;
  }

  public get version(): QuickSightDescribeTemplateTemplateVersion {
    return new QuickSightDescribeTemplateTemplateVersion(this, 'Version', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.LastUpdatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.CreatedTime', props);
    return resource.getResponseField('Template.CreatedTime') as unknown as string;
  }

}

export class QuickSightDescribeTemplateTemplateVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeTemplateRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.Errors', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.VersionNumber', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.DataSetConfigurations', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.Description', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.SourceEntityArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.ThemeArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplate.Template.Version.Sheets', props);
    return resource.getResponseField('Template.Version.Sheets') as unknown as shapes.QuickSightSheet[];
  }

}

export class QuickSightDescribeTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeTemplateAliasRequest) {
    super(scope, id);
  }

  public get templateAlias(): QuickSightDescribeTemplateAliasTemplateAlias {
    return new QuickSightDescribeTemplateAliasTemplateAlias(this, 'TemplateAlias', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplateAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeTemplateAliasTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeTemplateAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplateAlias.TemplateAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplateAlias.TemplateAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplateAlias.TemplateAlias.TemplateVersionNumber', props);
    return resource.getResponseField('TemplateAlias.TemplateVersionNumber') as unknown as number;
  }

}

export class QuickSightDescribeTemplatePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeTemplatePermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplatePermissions.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplatePermissions.TemplateArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplatePermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplatePermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTemplatePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeTheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
  }

  public get theme(): QuickSightDescribeThemeTheme {
    return new QuickSightDescribeThemeTheme(this, 'Theme', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeThemeTheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Name', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.ThemeId', props);
    return resource.getResponseField('Theme.ThemeId') as unknown as string;
  }

  public get version(): QuickSightDescribeThemeThemeVersion {
    return new QuickSightDescribeThemeThemeVersion(this, 'Version', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.CreatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.LastUpdatedTime', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Type', props);
    return resource.getResponseField('Theme.Type') as unknown as string;
  }

}

export class QuickSightDescribeThemeThemeVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.VersionNumber', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Description', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.BaseThemeId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.CreatedTime', props);
    return resource.getResponseField('Theme.Version.CreatedTime') as unknown as string;
  }

  public get configuration(): QuickSightDescribeThemeThemeVersionConfiguration {
    return new QuickSightDescribeThemeThemeVersionConfiguration(this, 'Configuration', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Errors', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Status', props);
    return resource.getResponseField('Theme.Version.Status') as unknown as string;
  }

}

export class QuickSightDescribeThemeThemeVersionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
  }

  public get dataColorPalette(): QuickSightDescribeThemeThemeVersionConfigurationDataColorPalette {
    return new QuickSightDescribeThemeThemeVersionConfigurationDataColorPalette(this, 'DataColorPalette', this.__resources, this.input);
  }

  public get uiColorPalette(): QuickSightDescribeThemeThemeVersionConfigurationUiColorPalette {
    return new QuickSightDescribeThemeThemeVersionConfigurationUiColorPalette(this, 'UiColorPalette', this.__resources, this.input);
  }

  public get sheet(): QuickSightDescribeThemeThemeVersionConfigurationSheet {
    return new QuickSightDescribeThemeThemeVersionConfigurationSheet(this, 'Sheet', this.__resources, this.input);
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationDataColorPalette extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.DataColorPalette.Colors', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.DataColorPalette.MinMaxGradient', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.DataColorPalette.EmptyFillColor', props);
    return resource.getResponseField('Theme.Version.Configuration.DataColorPalette.EmptyFillColor') as unknown as string;
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationUiColorPalette extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.PrimaryForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.PrimaryBackground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.SecondaryForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.SecondaryBackground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Accent', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.AccentForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Danger', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.DangerForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Warning', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.WarningForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Success', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.SuccessForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Dimension', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.DimensionForeground', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.Measure', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.UIColorPalette.MeasureForeground', props);
    return resource.getResponseField('Theme.Version.Configuration.UIColorPalette.MeasureForeground') as unknown as string;
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationSheet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
  }

  public get tile(): QuickSightDescribeThemeThemeVersionConfigurationSheetTile {
    return new QuickSightDescribeThemeThemeVersionConfigurationSheetTile(this, 'Tile', this.__resources, this.input);
  }

  public get tileLayout(): QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayout {
    return new QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayout(this, 'TileLayout', this.__resources, this.input);
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationSheetTile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
  }

  public get border(): QuickSightDescribeThemeThemeVersionConfigurationSheetTileBorder {
    return new QuickSightDescribeThemeThemeVersionConfigurationSheetTileBorder(this, 'Border', this.__resources, this.input);
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationSheetTileBorder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.Sheet.Tile.Border.Show', props);
    return resource.getResponseField('Theme.Version.Configuration.Sheet.Tile.Border.Show') as unknown as boolean;
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayout extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
  }

  public get gutter(): QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter {
    return new QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter(this, 'Gutter', this.__resources, this.input);
  }

  public get margin(): QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin {
    return new QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin(this, 'Margin', this.__resources, this.input);
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.Sheet.TileLayout.Gutter.Show', props);
    return resource.getResponseField('Theme.Version.Configuration.Sheet.TileLayout.Gutter.Show') as unknown as boolean;
  }

}

export class QuickSightDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          VersionNumber: this.input.versionNumber,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTheme.Theme.Version.Configuration.Sheet.TileLayout.Margin.Show', props);
    return resource.getResponseField('Theme.Version.Configuration.Sheet.TileLayout.Margin.Show') as unknown as boolean;
  }

}

export class QuickSightDescribeThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeAliasRequest) {
    super(scope, id);
  }

  public get themeAlias(): QuickSightDescribeThemeAliasThemeAlias {
    return new QuickSightDescribeThemeAliasThemeAlias(this, 'ThemeAlias', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemeAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightDescribeThemeAliasThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemeAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemeAlias.ThemeAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemeAlias.ThemeAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemeAlias.ThemeAlias.ThemeVersionNumber', props);
    return resource.getResponseField('ThemeAlias.ThemeVersionNumber') as unknown as number;
  }

}

export class QuickSightDescribeThemePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeThemePermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemePermissions.ThemeId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemePermissions.ThemeArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemePermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemePermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeThemePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeUserRequest) {
    super(scope, id);
  }

  public get user(): QuickSightDescribeUserUser {
    return new QuickSightDescribeUserUser(this, 'User', this.__resources, this.input);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.RequestId', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightDescribeUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightDescribeUserRequest) {
    super(scope, id);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Arn', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.UserName', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Email', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Role', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.IdentityType', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Active', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.PrincipalId', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.CustomPermissionsName', props);
    return resource.getResponseField('User.CustomPermissionsName') as unknown as string;
  }

}

export class QuickSightFetchDashboardEmbedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightGetDashboardEmbedUrlRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          IdentityType: this.input.identityType,
          SessionLifetimeInMinutes: this.input.sessionLifetimeInMinutes,
          UndoRedoDisabled: this.input.undoRedoDisabled,
          ResetDisabled: this.input.resetDisabled,
          StatePersistenceEnabled: this.input.statePersistenceEnabled,
          UserArn: this.input.userArn,
          Namespace: this.input.namespace,
          AdditionalDashboardIds: this.input.additionalDashboardIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDashboardEmbedUrl.EmbedUrl', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          IdentityType: this.input.identityType,
          SessionLifetimeInMinutes: this.input.sessionLifetimeInMinutes,
          UndoRedoDisabled: this.input.undoRedoDisabled,
          ResetDisabled: this.input.resetDisabled,
          StatePersistenceEnabled: this.input.statePersistenceEnabled,
          UserArn: this.input.userArn,
          Namespace: this.input.namespace,
          AdditionalDashboardIds: this.input.additionalDashboardIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDashboardEmbedUrl.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          IdentityType: this.input.identityType,
          SessionLifetimeInMinutes: this.input.sessionLifetimeInMinutes,
          UndoRedoDisabled: this.input.undoRedoDisabled,
          ResetDisabled: this.input.resetDisabled,
          StatePersistenceEnabled: this.input.statePersistenceEnabled,
          UserArn: this.input.userArn,
          Namespace: this.input.namespace,
          AdditionalDashboardIds: this.input.additionalDashboardIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDashboardEmbedUrl.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightFetchSessionEmbedUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightGetSessionEmbedUrlRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          EntryPoint: this.input.entryPoint,
          SessionLifetimeInMinutes: this.input.sessionLifetimeInMinutes,
          UserArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionEmbedUrl.EmbedUrl', props);
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
          AwsAccountId: this.input.awsAccountId,
          EntryPoint: this.input.entryPoint,
          SessionLifetimeInMinutes: this.input.sessionLifetimeInMinutes,
          UserArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionEmbedUrl.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          EntryPoint: this.input.entryPoint,
          SessionLifetimeInMinutes: this.input.sessionLifetimeInMinutes,
          UserArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSessionEmbedUrl.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListAnalyses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListAnalysesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAnalyses.AnalysisSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAnalyses.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAnalyses.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAnalyses.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListDashboardVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListDashboardVersionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboardVersions.DashboardVersionSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboardVersions.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboardVersions.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboardVersions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListDashboards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListDashboardsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboards.DashboardSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboards.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboards.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDashboards.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListDataSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListDataSetsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSets.DataSetSummaries', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSets.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSets.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSets.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListDataSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListDataSourcesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSources.DataSources', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSources.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSources.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDataSources.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListGroupMemberships extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListGroupMembershipsRequest) {
    super(scope, id);
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
          GroupName: this.input.groupName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupMemberships.GroupMemberList', props);
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
          GroupName: this.input.groupName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupMemberships.NextToken', props);
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
          GroupName: this.input.groupName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupMemberships.RequestId', props);
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
          GroupName: this.input.groupName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupMemberships.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListGroupsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.GroupList', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListIamPolicyAssignments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListIamPolicyAssignmentsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentStatus: this.input.assignmentStatus,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignments.IAMPolicyAssignments', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentStatus: this.input.assignmentStatus,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignments.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentStatus: this.input.assignmentStatus,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignments.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentStatus: this.input.assignmentStatus,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignments.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListIamPolicyAssignmentsForUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListIamPolicyAssignmentsForUserRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          UserName: this.input.userName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignmentsForUser.ActiveAssignments', props);
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
          AwsAccountId: this.input.awsAccountId,
          UserName: this.input.userName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignmentsForUser.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          UserName: this.input.userName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignmentsForUser.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          UserName: this.input.userName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIAMPolicyAssignmentsForUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListIngestions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListIngestionsRequest) {
    super(scope, id);
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
          DataSetId: this.input.dataSetId,
          NextToken: this.input.nextToken,
          AwsAccountId: this.input.awsAccountId,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIngestions.Ingestions', props);
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
          DataSetId: this.input.dataSetId,
          NextToken: this.input.nextToken,
          AwsAccountId: this.input.awsAccountId,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIngestions.NextToken', props);
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
          DataSetId: this.input.dataSetId,
          NextToken: this.input.nextToken,
          AwsAccountId: this.input.awsAccountId,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIngestions.RequestId', props);
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
          DataSetId: this.input.dataSetId,
          NextToken: this.input.nextToken,
          AwsAccountId: this.input.awsAccountId,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListIngestions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListNamespaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListNamespacesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamespaces.Namespaces', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamespaces.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamespaces.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNamespaces.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.RequestId', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListTemplateAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListTemplateAliasesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateAliases.TemplateAliasList', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateAliases.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateAliases.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QuickSightListTemplateVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListTemplateVersionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateVersions.TemplateVersionSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateVersions.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateVersions.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplateVersions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListTemplatesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplates.TemplateSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplates.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplates.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTemplates.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListThemeAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListThemeAliasesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeAliases.ThemeAliasList', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeAliases.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeAliases.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class QuickSightListThemeVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListThemeVersionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeVersions.ThemeVersionSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeVersions.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeVersions.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemeVersions.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListThemes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListThemesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemes.ThemeSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemes.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemes.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Type: this.input.type,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListThemes.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightListUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListUserGroupsRequest) {
    super(scope, id);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserGroups.GroupList', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserGroups.NextToken', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserGroups.RequestId', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserGroups.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightListUsersRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.UserList', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightRegisterUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightRegisterUserRequest) {
    super(scope, id);
  }

  public get user(): QuickSightRegisterUserUser {
    return new QuickSightRegisterUserUser(this, 'User', this.__resources, this.input);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.UserInvitationUrl', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.RequestId', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightRegisterUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightRegisterUserRequest) {
    super(scope, id);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.Arn', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.UserName', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.Email', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.Role', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.IdentityType', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.Active', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.PrincipalId', props);
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
          IdentityType: this.input.identityType,
          Email: this.input.email,
          UserRole: this.input.userRole,
          IamArn: this.input.iamArn,
          SessionName: this.input.sessionName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          UserName: this.input.userName,
          CustomPermissionsName: this.input.customPermissionsName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterUser.User.CustomPermissionsName', props);
    return resource.getResponseField('User.CustomPermissionsName') as unknown as string;
  }

}

export class QuickSightRestoreAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightRestoreAnalysisRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreAnalysis.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreAnalysis.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreAnalysis.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightSearchAnalyses extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightSearchAnalysesRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchAnalyses.AnalysisSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchAnalyses.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchAnalyses.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchAnalyses.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightSearchDashboards extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightSearchDashboardsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchDashboards.DashboardSummaryList', props);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchDashboards.NextToken', props);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchDashboards.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchDashboards.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightTagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightTagResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagResource.RequestId', props);
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
          ResourceArn: this.input.resourceArn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagResource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUntagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUntagResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          TagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UntagResource.RequestId', props);
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
          ResourceArn: this.input.resourceArn,
          TagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UntagResource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountCustomization.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountCustomization.AwsAccountId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountCustomization.Namespace', props);
    return resource.getResponseField('Namespace') as unknown as string;
  }

  public get accountCustomization(): QuickSightUpdateAccountCustomizationAccountCustomization {
    return new QuickSightUpdateAccountCustomizationAccountCustomization(this, 'AccountCustomization', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountCustomization.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountCustomization.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateAccountCustomizationAccountCustomization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateAccountCustomizationRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          AccountCustomization: {
            DefaultTheme: this.input.accountCustomization.defaultTheme,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountCustomization.AccountCustomization.DefaultTheme', props);
    return resource.getResponseField('AccountCustomization.DefaultTheme') as unknown as string;
  }

}

export class QuickSightUpdateAccountSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateAccountSettingsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DefaultNamespace: this.input.defaultNamespace,
          NotificationEmail: this.input.notificationEmail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountSettings.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DefaultNamespace: this.input.defaultNamespace,
          NotificationEmail: this.input.notificationEmail,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAccountSettings.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateAnalysis extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateAnalysisRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysis.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysis.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysis.UpdateStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysis.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          Name: this.input.name,
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysis.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateAnalysisPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateAnalysisPermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysisPermissions.AnalysisArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysisPermissions.AnalysisId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysisPermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysisPermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AnalysisId: this.input.analysisId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAnalysisPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateDashboard extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDashboardRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboard.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboard.VersionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboard.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboard.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboard.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          Name: this.input.name,
          SourceEntity: {
            SourceTemplate: {
              DataSetReferences: this.input.sourceEntity.sourceTemplate?.dataSetReferences,
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          Parameters: {
            StringParameters: this.input.parameters?.stringParameters,
            IntegerParameters: this.input.parameters?.integerParameters,
            DecimalParameters: this.input.parameters?.decimalParameters,
            DateTimeParameters: this.input.parameters?.dateTimeParameters,
          },
          VersionDescription: this.input.versionDescription,
          DashboardPublishOptions: {
            AdHocFilteringOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.adHocFilteringOption?.availabilityStatus,
            },
            ExportToCSVOption: {
              AvailabilityStatus: this.input.dashboardPublishOptions?.exportToCsvOption?.availabilityStatus,
            },
            SheetControlsOption: {
              VisibilityState: this.input.dashboardPublishOptions?.sheetControlsOption?.visibilityState,
            },
          },
          ThemeArn: this.input.themeArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboard.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateDashboardPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDashboardPermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPermissions.DashboardArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPermissions.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateDashboardPublishedVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDashboardPublishedVersionRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPublishedVersion.DashboardId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPublishedVersion.DashboardArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPublishedVersion.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          DashboardId: this.input.dashboardId,
          VersionNumber: this.input.versionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDashboardPublishedVersion.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDataSetRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.DataSetId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.IngestionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.IngestionId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          Name: this.input.name,
          PhysicalTableMap: this.input.physicalTableMap,
          LogicalTableMap: this.input.logicalTableMap,
          ImportMode: this.input.importMode,
          ColumnGroups: this.input.columnGroups,
          RowLevelPermissionDataSet: {
            Namespace: this.input.rowLevelPermissionDataSet?.namespace,
            Arn: this.input.rowLevelPermissionDataSet?.arn,
            PermissionPolicy: this.input.rowLevelPermissionDataSet?.permissionPolicy,
          },
          ColumnLevelPermissionRules: this.input.columnLevelPermissionRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSet.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateDataSetPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDataSetPermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSetPermissions.DataSetArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSetPermissions.DataSetId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSetPermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSetId: this.input.dataSetId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSetPermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDataSourceRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.DataSourceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.UpdateStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          Name: this.input.name,
          DataSourceParameters: {
            AmazonElasticsearchParameters: {
              Domain: this.input.dataSourceParameters?.amazonElasticsearchParameters?.domain,
            },
            AthenaParameters: {
              WorkGroup: this.input.dataSourceParameters?.athenaParameters?.workGroup,
            },
            AuroraParameters: {
              Host: this.input.dataSourceParameters?.auroraParameters?.host,
              Port: this.input.dataSourceParameters?.auroraParameters?.port,
              Database: this.input.dataSourceParameters?.auroraParameters?.database,
            },
            AuroraPostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.auroraPostgreSqlParameters?.database,
            },
            AwsIotAnalyticsParameters: {
              DataSetName: this.input.dataSourceParameters?.awsIotAnalyticsParameters?.dataSetName,
            },
            JiraParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.jiraParameters?.siteBaseUrl,
            },
            MariaDbParameters: {
              Host: this.input.dataSourceParameters?.mariaDbParameters?.host,
              Port: this.input.dataSourceParameters?.mariaDbParameters?.port,
              Database: this.input.dataSourceParameters?.mariaDbParameters?.database,
            },
            MySqlParameters: {
              Host: this.input.dataSourceParameters?.mySqlParameters?.host,
              Port: this.input.dataSourceParameters?.mySqlParameters?.port,
              Database: this.input.dataSourceParameters?.mySqlParameters?.database,
            },
            OracleParameters: {
              Host: this.input.dataSourceParameters?.oracleParameters?.host,
              Port: this.input.dataSourceParameters?.oracleParameters?.port,
              Database: this.input.dataSourceParameters?.oracleParameters?.database,
            },
            PostgreSqlParameters: {
              Host: this.input.dataSourceParameters?.postgreSqlParameters?.host,
              Port: this.input.dataSourceParameters?.postgreSqlParameters?.port,
              Database: this.input.dataSourceParameters?.postgreSqlParameters?.database,
            },
            PrestoParameters: {
              Host: this.input.dataSourceParameters?.prestoParameters?.host,
              Port: this.input.dataSourceParameters?.prestoParameters?.port,
              Catalog: this.input.dataSourceParameters?.prestoParameters?.catalog,
            },
            RdsParameters: {
              InstanceId: this.input.dataSourceParameters?.rdsParameters?.instanceId,
              Database: this.input.dataSourceParameters?.rdsParameters?.database,
            },
            RedshiftParameters: {
              Host: this.input.dataSourceParameters?.redshiftParameters?.host,
              Port: this.input.dataSourceParameters?.redshiftParameters?.port,
              Database: this.input.dataSourceParameters?.redshiftParameters?.database,
              ClusterId: this.input.dataSourceParameters?.redshiftParameters?.clusterId,
            },
            S3Parameters: {
              ManifestFileLocation: {
                Bucket: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.bucket,
                Key: this.input.dataSourceParameters?.s3Parameters?.manifestFileLocation.key,
              },
            },
            ServiceNowParameters: {
              SiteBaseUrl: this.input.dataSourceParameters?.serviceNowParameters?.siteBaseUrl,
            },
            SnowflakeParameters: {
              Host: this.input.dataSourceParameters?.snowflakeParameters?.host,
              Database: this.input.dataSourceParameters?.snowflakeParameters?.database,
              Warehouse: this.input.dataSourceParameters?.snowflakeParameters?.warehouse,
            },
            SparkParameters: {
              Host: this.input.dataSourceParameters?.sparkParameters?.host,
              Port: this.input.dataSourceParameters?.sparkParameters?.port,
            },
            SqlServerParameters: {
              Host: this.input.dataSourceParameters?.sqlServerParameters?.host,
              Port: this.input.dataSourceParameters?.sqlServerParameters?.port,
              Database: this.input.dataSourceParameters?.sqlServerParameters?.database,
            },
            TeradataParameters: {
              Host: this.input.dataSourceParameters?.teradataParameters?.host,
              Port: this.input.dataSourceParameters?.teradataParameters?.port,
              Database: this.input.dataSourceParameters?.teradataParameters?.database,
            },
            TwitterParameters: {
              Query: this.input.dataSourceParameters?.twitterParameters?.query,
              MaxRows: this.input.dataSourceParameters?.twitterParameters?.maxRows,
            },
          },
          Credentials: {
            CredentialPair: {
              Username: this.input.credentials?.credentialPair?.username,
              Password: this.input.credentials?.credentialPair?.password,
              AlternateDataSourceParameters: this.input.credentials?.credentialPair?.alternateDataSourceParameters,
            },
            CopySourceArn: this.input.credentials?.copySourceArn,
          },
          VpcConnectionProperties: {
            VpcConnectionArn: this.input.vpcConnectionProperties?.vpcConnectionArn,
          },
          SslProperties: {
            DisableSsl: this.input.sslProperties?.disableSsl,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateDataSourcePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateDataSourcePermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSourcePermissions.DataSourceArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSourcePermissions.DataSourceId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSourcePermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          DataSourceId: this.input.dataSourceId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSourcePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateGroupRequest) {
    super(scope, id);
  }

  public get group(): QuickSightUpdateGroupGroup {
    return new QuickSightUpdateGroupGroup(this, 'Group', this.__resources, this.input);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.RequestId', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateGroupRequest) {
    super(scope, id);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.Arn', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.GroupName', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.Description', props);
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
          GroupName: this.input.groupName,
          Description: this.input.description,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.PrincipalId', props);
    return resource.getResponseField('Group.PrincipalId') as unknown as string;
  }

}

export class QuickSightUpdateIamPolicyAssignment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateIamPolicyAssignmentRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.AssignmentName', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.AssignmentId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.PolicyArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.Identities', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.AssignmentStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          AssignmentName: this.input.assignmentName,
          Namespace: this.input.namespace,
          AssignmentStatus: this.input.assignmentStatus,
          PolicyArn: this.input.policyArn,
          Identities: this.input.identities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateIAMPolicyAssignment.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateTemplateRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.input.versionDescription,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplate.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.input.versionDescription,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplate.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.input.versionDescription,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplate.VersionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.input.versionDescription,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplate.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.input.versionDescription,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplate.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          SourceEntity: {
            SourceAnalysis: {
              Arn: this.input.sourceEntity.sourceAnalysis?.arn,
              DataSetReferences: this.input.sourceEntity.sourceAnalysis?.dataSetReferences,
            },
            SourceTemplate: {
              Arn: this.input.sourceEntity.sourceTemplate?.arn,
            },
          },
          VersionDescription: this.input.versionDescription,
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplate.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateTemplateAliasRequest) {
    super(scope, id);
  }

  public get templateAlias(): QuickSightUpdateTemplateAliasTemplateAlias {
    return new QuickSightUpdateTemplateAliasTemplateAlias(this, 'TemplateAlias', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplateAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplateAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateTemplateAliasTemplateAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateTemplateAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplateAlias.TemplateAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplateAlias.TemplateAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          AliasName: this.input.aliasName,
          TemplateVersionNumber: this.input.templateVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplateAlias.TemplateAlias.TemplateVersionNumber', props);
    return resource.getResponseField('TemplateAlias.TemplateVersionNumber') as unknown as number;
  }

}

export class QuickSightUpdateTemplatePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateTemplatePermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplatePermissions.TemplateId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplatePermissions.TemplateArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplatePermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplatePermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          TemplateId: this.input.templateId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTemplatePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateTheme extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateThemeRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.input.configuration?.uiColorPalette?.warningForeground,
              Success: this.input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTheme.ThemeId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.input.configuration?.uiColorPalette?.warningForeground,
              Success: this.input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTheme.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.input.configuration?.uiColorPalette?.warningForeground,
              Success: this.input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTheme.VersionArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.input.configuration?.uiColorPalette?.warningForeground,
              Success: this.input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTheme.CreationStatus', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.input.configuration?.uiColorPalette?.warningForeground,
              Success: this.input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTheme.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          Name: this.input.name,
          BaseThemeId: this.input.baseThemeId,
          VersionDescription: this.input.versionDescription,
          Configuration: {
            DataColorPalette: {
              Colors: this.input.configuration?.dataColorPalette?.colors,
              MinMaxGradient: this.input.configuration?.dataColorPalette?.minMaxGradient,
              EmptyFillColor: this.input.configuration?.dataColorPalette?.emptyFillColor,
            },
            UIColorPalette: {
              PrimaryForeground: this.input.configuration?.uiColorPalette?.primaryForeground,
              PrimaryBackground: this.input.configuration?.uiColorPalette?.primaryBackground,
              SecondaryForeground: this.input.configuration?.uiColorPalette?.secondaryForeground,
              SecondaryBackground: this.input.configuration?.uiColorPalette?.secondaryBackground,
              Accent: this.input.configuration?.uiColorPalette?.accent,
              AccentForeground: this.input.configuration?.uiColorPalette?.accentForeground,
              Danger: this.input.configuration?.uiColorPalette?.danger,
              DangerForeground: this.input.configuration?.uiColorPalette?.dangerForeground,
              Warning: this.input.configuration?.uiColorPalette?.warning,
              WarningForeground: this.input.configuration?.uiColorPalette?.warningForeground,
              Success: this.input.configuration?.uiColorPalette?.success,
              SuccessForeground: this.input.configuration?.uiColorPalette?.successForeground,
              Dimension: this.input.configuration?.uiColorPalette?.dimension,
              DimensionForeground: this.input.configuration?.uiColorPalette?.dimensionForeground,
              Measure: this.input.configuration?.uiColorPalette?.measure,
              MeasureForeground: this.input.configuration?.uiColorPalette?.measureForeground,
            },
            Sheet: {
              Tile: {
                Border: {
                  Show: this.input.configuration?.sheet?.tile?.border?.show,
                },
              },
              TileLayout: {
                Gutter: {
                  Show: this.input.configuration?.sheet?.tileLayout?.gutter?.show,
                },
                Margin: {
                  Show: this.input.configuration?.sheet?.tileLayout?.margin?.show,
                },
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTheme.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateThemeAliasRequest) {
    super(scope, id);
  }

  public get themeAlias(): QuickSightUpdateThemeAliasThemeAlias {
    return new QuickSightUpdateThemeAliasThemeAlias(this, 'ThemeAlias', this.__resources, this.input);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemeAlias.Status', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemeAlias.RequestId', props);
    return resource.getResponseField('RequestId') as unknown as string;
  }

}

export class QuickSightUpdateThemeAliasThemeAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateThemeAliasRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemeAlias.ThemeAlias.Arn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemeAlias.ThemeAlias.AliasName', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          AliasName: this.input.aliasName,
          ThemeVersionNumber: this.input.themeVersionNumber,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemeAlias.ThemeAlias.ThemeVersionNumber', props);
    return resource.getResponseField('ThemeAlias.ThemeVersionNumber') as unknown as number;
  }

}

export class QuickSightUpdateThemePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateThemePermissionsRequest) {
    super(scope, id);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemePermissions.ThemeId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemePermissions.ThemeArn', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemePermissions.Permissions', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemePermissions.RequestId', props);
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
          AwsAccountId: this.input.awsAccountId,
          ThemeId: this.input.themeId,
          GrantPermissions: this.input.grantPermissions,
          RevokePermissions: this.input.revokePermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateThemePermissions.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateUserRequest) {
    super(scope, id);
  }

  public get user(): QuickSightUpdateUserUser {
    return new QuickSightUpdateUserUser(this, 'User', this.__resources, this.input);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.RequestId', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.Status', props);
    return resource.getResponseField('Status') as unknown as number;
  }

}

export class QuickSightUpdateUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.QuickSightUpdateUserRequest) {
    super(scope, id);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Arn', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.UserName', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Email', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Role', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.IdentityType', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.Active', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.PrincipalId', props);
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
          UserName: this.input.userName,
          AwsAccountId: this.input.awsAccountId,
          Namespace: this.input.namespace,
          Email: this.input.email,
          Role: this.input.role,
          CustomPermissionsName: this.input.customPermissionsName,
          UnapplyCustomPermissions: this.input.unapplyCustomPermissions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.User.CustomPermissionsName', props);
    return resource.getResponseField('User.CustomPermissionsName') as unknown as string;
  }

}

