# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### QuickSightClient <a name="aws-cdk-sdk.quicksight.QuickSightClient"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightClient.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `cancelIngestion` <a name="aws-cdk-sdk.quicksight.QuickSightClient.cancelIngestion"></a>

```typescript
public cancelIngestion(input: QuickSightCancelIngestionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest)

---

##### `createAccountCustomization` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createAccountCustomization"></a>

```typescript
public createAccountCustomization(input: QuickSightCreateAccountCustomizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest)

---

##### `createAnalysis` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createAnalysis"></a>

```typescript
public createAnalysis(input: QuickSightCreateAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest)

---

##### `createDashboard` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createDashboard"></a>

```typescript
public createDashboard(input: QuickSightCreateDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest)

---

##### `createDataSet` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createDataSet"></a>

```typescript
public createDataSet(input: QuickSightCreateDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest)

---

##### `createDataSource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createDataSource"></a>

```typescript
public createDataSource(input: QuickSightCreateDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest)

---

##### `createGroup` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createGroup"></a>

```typescript
public createGroup(input: QuickSightCreateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest)

---

##### `createGroupMembership` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createGroupMembership"></a>

```typescript
public createGroupMembership(input: QuickSightCreateGroupMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest)

---

##### `createIamPolicyAssignment` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createIamPolicyAssignment"></a>

```typescript
public createIamPolicyAssignment(input: QuickSightCreateIamPolicyAssignmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest)

---

##### `createIngestion` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createIngestion"></a>

```typescript
public createIngestion(input: QuickSightCreateIngestionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest)

---

##### `createNamespace` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createNamespace"></a>

```typescript
public createNamespace(input: QuickSightCreateNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest)

---

##### `createTemplate` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createTemplate"></a>

```typescript
public createTemplate(input: QuickSightCreateTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest)

---

##### `createTemplateAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createTemplateAlias"></a>

```typescript
public createTemplateAlias(input: QuickSightCreateTemplateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest)

---

##### `createTheme` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createTheme"></a>

```typescript
public createTheme(input: QuickSightCreateThemeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest)

---

##### `createThemeAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.createThemeAlias"></a>

```typescript
public createThemeAlias(input: QuickSightCreateThemeAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest)

---

##### `deleteAccountCustomization` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteAccountCustomization"></a>

```typescript
public deleteAccountCustomization(input: QuickSightDeleteAccountCustomizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest)

---

##### `deleteAnalysis` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteAnalysis"></a>

```typescript
public deleteAnalysis(input: QuickSightDeleteAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest)

---

##### `deleteDashboard` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteDashboard"></a>

```typescript
public deleteDashboard(input: QuickSightDeleteDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest)

---

##### `deleteDataSet` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteDataSet"></a>

```typescript
public deleteDataSet(input: QuickSightDeleteDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest)

---

##### `deleteDataSource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteDataSource"></a>

```typescript
public deleteDataSource(input: QuickSightDeleteDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest)

---

##### `deleteGroup` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteGroup"></a>

```typescript
public deleteGroup(input: QuickSightDeleteGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest)

---

##### `deleteGroupMembership` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteGroupMembership"></a>

```typescript
public deleteGroupMembership(input: QuickSightDeleteGroupMembershipRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest)

---

##### `deleteIamPolicyAssignment` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteIamPolicyAssignment"></a>

```typescript
public deleteIamPolicyAssignment(input: QuickSightDeleteIamPolicyAssignmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest)

---

##### `deleteNamespace` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteNamespace"></a>

```typescript
public deleteNamespace(input: QuickSightDeleteNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest)

---

##### `deleteTemplate` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteTemplate"></a>

```typescript
public deleteTemplate(input: QuickSightDeleteTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest)

---

##### `deleteTemplateAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteTemplateAlias"></a>

```typescript
public deleteTemplateAlias(input: QuickSightDeleteTemplateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest)

---

##### `deleteTheme` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteTheme"></a>

```typescript
public deleteTheme(input: QuickSightDeleteThemeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest)

---

##### `deleteThemeAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteThemeAlias"></a>

```typescript
public deleteThemeAlias(input: QuickSightDeleteThemeAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest)

---

##### `deleteUser` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteUser"></a>

```typescript
public deleteUser(input: QuickSightDeleteUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest)

---

##### `deleteUserByPrincipalId` <a name="aws-cdk-sdk.quicksight.QuickSightClient.deleteUserByPrincipalId"></a>

```typescript
public deleteUserByPrincipalId(input: QuickSightDeleteUserByPrincipalIdRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest)

---

##### `describeAccountCustomization` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeAccountCustomization"></a>

```typescript
public describeAccountCustomization(input: QuickSightDescribeAccountCustomizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest)

---

##### `describeAccountSettings` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeAccountSettings"></a>

```typescript
public describeAccountSettings(input: QuickSightDescribeAccountSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest)

---

##### `describeAnalysis` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeAnalysis"></a>

```typescript
public describeAnalysis(input: QuickSightDescribeAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest)

---

##### `describeAnalysisPermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeAnalysisPermissions"></a>

```typescript
public describeAnalysisPermissions(input: QuickSightDescribeAnalysisPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest)

---

##### `describeDashboard` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeDashboard"></a>

```typescript
public describeDashboard(input: QuickSightDescribeDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest)

---

##### `describeDashboardPermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeDashboardPermissions"></a>

```typescript
public describeDashboardPermissions(input: QuickSightDescribeDashboardPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest)

---

##### `describeDataSet` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeDataSet"></a>

```typescript
public describeDataSet(input: QuickSightDescribeDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest)

---

##### `describeDataSetPermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeDataSetPermissions"></a>

```typescript
public describeDataSetPermissions(input: QuickSightDescribeDataSetPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest)

---

##### `describeDataSource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeDataSource"></a>

```typescript
public describeDataSource(input: QuickSightDescribeDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---

##### `describeDataSourcePermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeDataSourcePermissions"></a>

```typescript
public describeDataSourcePermissions(input: QuickSightDescribeDataSourcePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest)

---

##### `describeGroup` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeGroup"></a>

```typescript
public describeGroup(input: QuickSightDescribeGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest)

---

##### `describeIamPolicyAssignment` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeIamPolicyAssignment"></a>

```typescript
public describeIamPolicyAssignment(input: QuickSightDescribeIamPolicyAssignmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest)

---

##### `describeIngestion` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeIngestion"></a>

```typescript
public describeIngestion(input: QuickSightDescribeIngestionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest)

---

##### `describeNamespace` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeNamespace"></a>

```typescript
public describeNamespace(input: QuickSightDescribeNamespaceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest)

---

##### `describeTemplate` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeTemplate"></a>

```typescript
public describeTemplate(input: QuickSightDescribeTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest)

---

##### `describeTemplateAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeTemplateAlias"></a>

```typescript
public describeTemplateAlias(input: QuickSightDescribeTemplateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest)

---

##### `describeTemplatePermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeTemplatePermissions"></a>

```typescript
public describeTemplatePermissions(input: QuickSightDescribeTemplatePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest)

---

##### `describeTheme` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeTheme"></a>

```typescript
public describeTheme(input: QuickSightDescribeThemeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---

##### `describeThemeAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeThemeAlias"></a>

```typescript
public describeThemeAlias(input: QuickSightDescribeThemeAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest)

---

##### `describeThemePermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeThemePermissions"></a>

```typescript
public describeThemePermissions(input: QuickSightDescribeThemePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest)

---

##### `describeUser` <a name="aws-cdk-sdk.quicksight.QuickSightClient.describeUser"></a>

```typescript
public describeUser(input: QuickSightDescribeUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest)

---

##### `fetchDashboardEmbedUrl` <a name="aws-cdk-sdk.quicksight.QuickSightClient.fetchDashboardEmbedUrl"></a>

```typescript
public fetchDashboardEmbedUrl(input: QuickSightGetDashboardEmbedUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest`](#aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest)

---

##### `fetchSessionEmbedUrl` <a name="aws-cdk-sdk.quicksight.QuickSightClient.fetchSessionEmbedUrl"></a>

```typescript
public fetchSessionEmbedUrl(input: QuickSightGetSessionEmbedUrlRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest`](#aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest)

---

##### `listAnalyses` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listAnalyses"></a>

```typescript
public listAnalyses(input: QuickSightListAnalysesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest`](#aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest)

---

##### `listDashboards` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listDashboards"></a>

```typescript
public listDashboards(input: QuickSightListDashboardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest`](#aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest)

---

##### `listDashboardVersions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listDashboardVersions"></a>

```typescript
public listDashboardVersions(input: QuickSightListDashboardVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest)

---

##### `listDataSets` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listDataSets"></a>

```typescript
public listDataSets(input: QuickSightListDataSetsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest`](#aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest)

---

##### `listDataSources` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listDataSources"></a>

```typescript
public listDataSources(input: QuickSightListDataSourcesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest`](#aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest)

---

##### `listGroupMemberships` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listGroupMemberships"></a>

```typescript
public listGroupMemberships(input: QuickSightListGroupMembershipsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest`](#aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest)

---

##### `listGroups` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listGroups"></a>

```typescript
public listGroups(input: QuickSightListGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListGroupsRequest`](#aws-cdk-sdk.quicksight.QuickSightListGroupsRequest)

---

##### `listIamPolicyAssignments` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listIamPolicyAssignments"></a>

```typescript
public listIamPolicyAssignments(input: QuickSightListIamPolicyAssignmentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest`](#aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest)

---

##### `listIamPolicyAssignmentsForUser` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listIamPolicyAssignmentsForUser"></a>

```typescript
public listIamPolicyAssignmentsForUser(input: QuickSightListIamPolicyAssignmentsForUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest`](#aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest)

---

##### `listIngestions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listIngestions"></a>

```typescript
public listIngestions(input: QuickSightListIngestionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest)

---

##### `listNamespaces` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listNamespaces"></a>

```typescript
public listNamespaces(input: QuickSightListNamespacesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest`](#aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: QuickSightListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTagsForResourceRequest`](#aws-cdk-sdk.quicksight.QuickSightListTagsForResourceRequest)

---

##### `listTemplateAliases` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listTemplateAliases"></a>

```typescript
public listTemplateAliases(input: QuickSightListTemplateAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest`](#aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest)

---

##### `listTemplates` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listTemplates"></a>

```typescript
public listTemplates(input: QuickSightListTemplatesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest`](#aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest)

---

##### `listTemplateVersions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listTemplateVersions"></a>

```typescript
public listTemplateVersions(input: QuickSightListTemplateVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest)

---

##### `listThemeAliases` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listThemeAliases"></a>

```typescript
public listThemeAliases(input: QuickSightListThemeAliasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest`](#aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest)

---

##### `listThemes` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listThemes"></a>

```typescript
public listThemes(input: QuickSightListThemesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListThemesRequest`](#aws-cdk-sdk.quicksight.QuickSightListThemesRequest)

---

##### `listThemeVersions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listThemeVersions"></a>

```typescript
public listThemeVersions(input: QuickSightListThemeVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest)

---

##### `listUserGroups` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listUserGroups"></a>

```typescript
public listUserGroups(input: QuickSightListUserGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest`](#aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest)

---

##### `listUsers` <a name="aws-cdk-sdk.quicksight.QuickSightClient.listUsers"></a>

```typescript
public listUsers(input: QuickSightListUsersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListUsersRequest`](#aws-cdk-sdk.quicksight.QuickSightListUsersRequest)

---

##### `registerUser` <a name="aws-cdk-sdk.quicksight.QuickSightClient.registerUser"></a>

```typescript
public registerUser(input: QuickSightRegisterUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest`](#aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest)

---

##### `restoreAnalysis` <a name="aws-cdk-sdk.quicksight.QuickSightClient.restoreAnalysis"></a>

```typescript
public restoreAnalysis(input: QuickSightRestoreAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest)

---

##### `searchAnalyses` <a name="aws-cdk-sdk.quicksight.QuickSightClient.searchAnalyses"></a>

```typescript
public searchAnalyses(input: QuickSightSearchAnalysesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest`](#aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest)

---

##### `searchDashboards` <a name="aws-cdk-sdk.quicksight.QuickSightClient.searchDashboards"></a>

```typescript
public searchDashboards(input: QuickSightSearchDashboardsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest`](#aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.tagResource"></a>

```typescript
public tagResource(input: QuickSightTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTagResourceRequest`](#aws-cdk-sdk.quicksight.QuickSightTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.untagResource"></a>

```typescript
public untagResource(input: QuickSightUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest`](#aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest)

---

##### `updateAccountCustomization` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateAccountCustomization"></a>

```typescript
public updateAccountCustomization(input: QuickSightUpdateAccountCustomizationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest)

---

##### `updateAccountSettings` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateAccountSettings"></a>

```typescript
public updateAccountSettings(input: QuickSightUpdateAccountSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest)

---

##### `updateAnalysis` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateAnalysis"></a>

```typescript
public updateAnalysis(input: QuickSightUpdateAnalysisRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest)

---

##### `updateAnalysisPermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateAnalysisPermissions"></a>

```typescript
public updateAnalysisPermissions(input: QuickSightUpdateAnalysisPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest)

---

##### `updateDashboard` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDashboard"></a>

```typescript
public updateDashboard(input: QuickSightUpdateDashboardRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest)

---

##### `updateDashboardPermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDashboardPermissions"></a>

```typescript
public updateDashboardPermissions(input: QuickSightUpdateDashboardPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest)

---

##### `updateDashboardPublishedVersion` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDashboardPublishedVersion"></a>

```typescript
public updateDashboardPublishedVersion(input: QuickSightUpdateDashboardPublishedVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest)

---

##### `updateDataSet` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDataSet"></a>

```typescript
public updateDataSet(input: QuickSightUpdateDataSetRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest)

---

##### `updateDataSetPermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDataSetPermissions"></a>

```typescript
public updateDataSetPermissions(input: QuickSightUpdateDataSetPermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest)

---

##### `updateDataSource` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDataSource"></a>

```typescript
public updateDataSource(input: QuickSightUpdateDataSourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest)

---

##### `updateDataSourcePermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateDataSourcePermissions"></a>

```typescript
public updateDataSourcePermissions(input: QuickSightUpdateDataSourcePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest)

---

##### `updateGroup` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateGroup"></a>

```typescript
public updateGroup(input: QuickSightUpdateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest)

---

##### `updateIamPolicyAssignment` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateIamPolicyAssignment"></a>

```typescript
public updateIamPolicyAssignment(input: QuickSightUpdateIamPolicyAssignmentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest)

---

##### `updateTemplate` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateTemplate"></a>

```typescript
public updateTemplate(input: QuickSightUpdateTemplateRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest)

---

##### `updateTemplateAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateTemplateAlias"></a>

```typescript
public updateTemplateAlias(input: QuickSightUpdateTemplateAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest)

---

##### `updateTemplatePermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateTemplatePermissions"></a>

```typescript
public updateTemplatePermissions(input: QuickSightUpdateTemplatePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest)

---

##### `updateTheme` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateTheme"></a>

```typescript
public updateTheme(input: QuickSightUpdateThemeRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest)

---

##### `updateThemeAlias` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateThemeAlias"></a>

```typescript
public updateThemeAlias(input: QuickSightUpdateThemeAliasRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest)

---

##### `updateThemePermissions` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateThemePermissions"></a>

```typescript
public updateThemePermissions(input: QuickSightUpdateThemePermissionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest)

---

##### `updateUser` <a name="aws-cdk-sdk.quicksight.QuickSightClient.updateUser"></a>

```typescript
public updateUser(input: QuickSightUpdateUserRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest)

---




## Structs <a name="Structs"></a>

### QuickSightAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightAccountCustomization"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAccountCustomization: quicksight.QuickSightAccountCustomization = { ... }
```

##### `defaultTheme`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAccountCustomization.property.defaultTheme"></a>

- *Type:* `string`

---

### QuickSightAccountSettings <a name="aws-cdk-sdk.quicksight.QuickSightAccountSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAccountSettings: quicksight.QuickSightAccountSettings = { ... }
```

##### `accountName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAccountSettings.property.accountName"></a>

- *Type:* `string`

---

##### `defaultNamespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAccountSettings.property.defaultNamespace"></a>

- *Type:* `string`

---

##### `edition`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAccountSettings.property.edition"></a>

- *Type:* `string`

---

##### `notificationEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAccountSettings.property.notificationEmail"></a>

- *Type:* `string`

---

### QuickSightActiveIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightActiveIamPolicyAssignment: quicksight.QuickSightActiveIamPolicyAssignment = { ... }
```

##### `assignmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment.property.assignmentName"></a>

- *Type:* `string`

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment.property.policyArn"></a>

- *Type:* `string`

---

### QuickSightAdHocFilteringOption <a name="aws-cdk-sdk.quicksight.QuickSightAdHocFilteringOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAdHocFilteringOption: quicksight.QuickSightAdHocFilteringOption = { ... }
```

##### `availabilityStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAdHocFilteringOption.property.availabilityStatus"></a>

- *Type:* `string`

---

### QuickSightAmazonElasticsearchParameters <a name="aws-cdk-sdk.quicksight.QuickSightAmazonElasticsearchParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAmazonElasticsearchParameters: quicksight.QuickSightAmazonElasticsearchParameters = { ... }
```

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAmazonElasticsearchParameters.property.domain"></a>

- *Type:* `string`

---

### QuickSightAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAnalysis: quicksight.QuickSightAnalysis = { ... }
```

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.dataSetArns"></a>

- *Type:* `string`[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisError`](#aws-cdk-sdk.quicksight.QuickSightAnalysisError)[]

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.name"></a>

- *Type:* `string`

---

##### `sheets`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.sheets"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheet`](#aws-cdk-sdk.quicksight.QuickSightSheet)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.status"></a>

- *Type:* `string`

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysis.property.themeArn"></a>

- *Type:* `string`

---

### QuickSightAnalysisError <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAnalysisError: quicksight.QuickSightAnalysisError = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisError.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisError.property.type"></a>

- *Type:* `string`

---

### QuickSightAnalysisSearchFilter <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSearchFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAnalysisSearchFilter: quicksight.QuickSightAnalysisSearchFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSearchFilter.property.name"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSearchFilter.property.operator"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSearchFilter.property.value"></a>

- *Type:* `string`

---

### QuickSightAnalysisSourceEntity <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSourceEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAnalysisSourceEntity: quicksight.QuickSightAnalysisSourceEntity = { ... }
```

##### `sourceTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSourceEntity.property.sourceTemplate"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSourceTemplate`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSourceTemplate)

---

### QuickSightAnalysisSourceTemplate <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSourceTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAnalysisSourceTemplate: quicksight.QuickSightAnalysisSourceTemplate = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSourceTemplate.property.arn"></a>

- *Type:* `string`

---

##### `dataSetReferences`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSourceTemplate.property.dataSetReferences"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetReference`](#aws-cdk-sdk.quicksight.QuickSightDataSetReference)[]

---

### QuickSightAnalysisSummary <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAnalysisSummary: quicksight.QuickSightAnalysisSummary = { ... }
```

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary.property.name"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAnalysisSummary.property.status"></a>

- *Type:* `string`

---

### QuickSightAthenaParameters <a name="aws-cdk-sdk.quicksight.QuickSightAthenaParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAthenaParameters: quicksight.QuickSightAthenaParameters = { ... }
```

##### `workGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAthenaParameters.property.workGroup"></a>

- *Type:* `string`

---

### QuickSightAuroraParameters <a name="aws-cdk-sdk.quicksight.QuickSightAuroraParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAuroraParameters: quicksight.QuickSightAuroraParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAuroraParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAuroraParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAuroraParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightAuroraPostgreSqlParameters <a name="aws-cdk-sdk.quicksight.QuickSightAuroraPostgreSqlParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAuroraPostgreSqlParameters: quicksight.QuickSightAuroraPostgreSqlParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAuroraPostgreSqlParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAuroraPostgreSqlParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAuroraPostgreSqlParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightAwsIotAnalyticsParameters <a name="aws-cdk-sdk.quicksight.QuickSightAwsIotAnalyticsParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightAwsIotAnalyticsParameters: quicksight.QuickSightAwsIotAnalyticsParameters = { ... }
```

##### `dataSetName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightAwsIotAnalyticsParameters.property.dataSetName"></a>

- *Type:* `string`

---

### QuickSightBorderStyle <a name="aws-cdk-sdk.quicksight.QuickSightBorderStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightBorderStyle: quicksight.QuickSightBorderStyle = { ... }
```

##### `show`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightBorderStyle.property.show"></a>

- *Type:* `boolean`

---

### QuickSightCalculatedColumn <a name="aws-cdk-sdk.quicksight.QuickSightCalculatedColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCalculatedColumn: quicksight.QuickSightCalculatedColumn = { ... }
```

##### `columnId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCalculatedColumn.property.columnId"></a>

- *Type:* `string`

---

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCalculatedColumn.property.columnName"></a>

- *Type:* `string`

---

##### `expression`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCalculatedColumn.property.expression"></a>

- *Type:* `string`

---

### QuickSightCancelIngestionRequest <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCancelIngestionRequest: quicksight.QuickSightCancelIngestionRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest.property.ingestionId"></a>

- *Type:* `string`

---

### QuickSightCancelIngestionResponse <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCancelIngestionResponse: quicksight.QuickSightCancelIngestionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionResponse.property.arn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionResponse.property.ingestionId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCancelIngestionResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCastColumnTypeOperation <a name="aws-cdk-sdk.quicksight.QuickSightCastColumnTypeOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCastColumnTypeOperation: quicksight.QuickSightCastColumnTypeOperation = { ... }
```

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCastColumnTypeOperation.property.columnName"></a>

- *Type:* `string`

---

##### `newColumnType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCastColumnTypeOperation.property.newColumnType"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCastColumnTypeOperation.property.format"></a>

- *Type:* `string`

---

### QuickSightColumnDescription <a name="aws-cdk-sdk.quicksight.QuickSightColumnDescription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnDescription: quicksight.QuickSightColumnDescription = { ... }
```

##### `text`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnDescription.property.text"></a>

- *Type:* `string`

---

### QuickSightColumnGroup <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnGroup: quicksight.QuickSightColumnGroup = { ... }
```

##### `geoSpatialColumnGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroup.property.geoSpatialColumnGroup"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGeoSpatialColumnGroup`](#aws-cdk-sdk.quicksight.QuickSightGeoSpatialColumnGroup)

---

### QuickSightColumnGroupColumnSchema <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroupColumnSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnGroupColumnSchema: quicksight.QuickSightColumnGroupColumnSchema = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroupColumnSchema.property.name"></a>

- *Type:* `string`

---

### QuickSightColumnGroupSchema <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroupSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnGroupSchema: quicksight.QuickSightColumnGroupSchema = { ... }
```

##### `columnGroupColumnSchemaList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroupSchema.property.columnGroupColumnSchemaList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnGroupColumnSchema`](#aws-cdk-sdk.quicksight.QuickSightColumnGroupColumnSchema)[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnGroupSchema.property.name"></a>

- *Type:* `string`

---

### QuickSightColumnLevelPermissionRule <a name="aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnLevelPermissionRule: quicksight.QuickSightColumnLevelPermissionRule = { ... }
```

##### `columnNames`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule.property.columnNames"></a>

- *Type:* `string`[]

---

##### `principals`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule.property.principals"></a>

- *Type:* `string`[]

---

### QuickSightColumnSchema <a name="aws-cdk-sdk.quicksight.QuickSightColumnSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnSchema: quicksight.QuickSightColumnSchema = { ... }
```

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnSchema.property.dataType"></a>

- *Type:* `string`

---

##### `geographicRole`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnSchema.property.geographicRole"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnSchema.property.name"></a>

- *Type:* `string`

---

### QuickSightColumnTag <a name="aws-cdk-sdk.quicksight.QuickSightColumnTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightColumnTag: quicksight.QuickSightColumnTag = { ... }
```

##### `columnDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnTag.property.columnDescription"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnDescription`](#aws-cdk-sdk.quicksight.QuickSightColumnDescription)

---

##### `columnGeographicRole`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightColumnTag.property.columnGeographicRole"></a>

- *Type:* `string`

---

### QuickSightCreateAccountCustomizationRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateAccountCustomizationRequest: quicksight.QuickSightCreateAccountCustomizationRequest = { ... }
```

##### `accountCustomization`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightAccountCustomization)

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest.property.namespace"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

### QuickSightCreateAccountCustomizationResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateAccountCustomizationResponse: quicksight.QuickSightCreateAccountCustomizationResponse = { ... }
```

##### `accountCustomization`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightAccountCustomization)

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse.property.namespace"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateAnalysisRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateAnalysisRequest: quicksight.QuickSightCreateAnalysisRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.name"></a>

- *Type:* `string`

---

##### `sourceEntity`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.sourceEntity"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSourceEntity`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSourceEntity)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightParameters`](#aws-cdk-sdk.quicksight.QuickSightParameters)

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest.property.themeArn"></a>

- *Type:* `string`

---

### QuickSightCreateAnalysisResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateAnalysisResponse: quicksight.QuickSightCreateAnalysisResponse = { ... }
```

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisResponse.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateAnalysisResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateColumnsOperation <a name="aws-cdk-sdk.quicksight.QuickSightCreateColumnsOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateColumnsOperation: quicksight.QuickSightCreateColumnsOperation = { ... }
```

##### `columns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateColumnsOperation.property.columns"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCalculatedColumn`](#aws-cdk-sdk.quicksight.QuickSightCalculatedColumn)[]

---

### QuickSightCreateDashboardRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateDashboardRequest: quicksight.QuickSightCreateDashboardRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.name"></a>

- *Type:* `string`

---

##### `sourceEntity`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.sourceEntity"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSourceEntity`](#aws-cdk-sdk.quicksight.QuickSightDashboardSourceEntity)

---

##### `dashboardPublishOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.dashboardPublishOptions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions`](#aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightParameters`](#aws-cdk-sdk.quicksight.QuickSightParameters)

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.themeArn"></a>

- *Type:* `string`

---

##### `versionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest.property.versionDescription"></a>

- *Type:* `string`

---

### QuickSightCreateDashboardResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateDashboardResponse: quicksight.QuickSightCreateDashboardResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse.property.status"></a>

- *Type:* `number`

---

##### `versionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDashboardResponse.property.versionArn"></a>

- *Type:* `string`

---

### QuickSightCreateDataSetRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateDataSetRequest: quicksight.QuickSightCreateDataSetRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `importMode`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.importMode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.name"></a>

- *Type:* `string`

---

##### `physicalTableMap`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.physicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightPhysicalTable`](#aws-cdk-sdk.quicksight.QuickSightPhysicalTable)}

---

##### `columnGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.columnGroups"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnGroup`](#aws-cdk-sdk.quicksight.QuickSightColumnGroup)[]

---

##### `columnLevelPermissionRules`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.columnLevelPermissionRules"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule`](#aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule)[]

---

##### `logicalTableMap`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.logicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightLogicalTable`](#aws-cdk-sdk.quicksight.QuickSightLogicalTable)}

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `rowLevelPermissionDataSet`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.rowLevelPermissionDataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet`](#aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

### QuickSightCreateDataSetResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateDataSetResponse: quicksight.QuickSightCreateDataSetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse.property.arn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse.property.ingestionArn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse.property.ingestionId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSetResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateDataSourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateDataSourceRequest: quicksight.QuickSightCreateDataSourceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.dataSourceId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.type"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials`](#aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials)

---

##### `dataSourceParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.dataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightDataSourceParameters)

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `sslProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.sslProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSslProperties`](#aws-cdk-sdk.quicksight.QuickSightSslProperties)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

##### `vpcConnectionProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest.property.vpcConnectionProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties`](#aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties)

---

### QuickSightCreateDataSourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateDataSourceResponse: quicksight.QuickSightCreateDataSourceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceResponse.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateDataSourceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateGroupMembershipRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateGroupMembershipRequest: quicksight.QuickSightCreateGroupMembershipRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest.property.groupName"></a>

- *Type:* `string`

---

##### `memberName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest.property.memberName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightCreateGroupMembershipResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateGroupMembershipResponse: quicksight.QuickSightCreateGroupMembershipResponse = { ... }
```

##### `groupMember`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipResponse.property.groupMember"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroupMember`](#aws-cdk-sdk.quicksight.QuickSightGroupMember)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateGroupRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateGroupRequest: quicksight.QuickSightCreateGroupRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest.property.namespace"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest.property.description"></a>

- *Type:* `string`

---

### QuickSightCreateGroupResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateGroupResponse: quicksight.QuickSightCreateGroupResponse = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupResponse.property.group"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateGroupResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateIamPolicyAssignmentRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateIamPolicyAssignmentRequest: quicksight.QuickSightCreateIamPolicyAssignmentRequest = { ... }
```

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest.property.namespace"></a>

- *Type:* `string`

---

##### `identities`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest.property.policyArn"></a>

- *Type:* `string`

---

### QuickSightCreateIamPolicyAssignmentResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateIamPolicyAssignmentResponse: quicksight.QuickSightCreateIamPolicyAssignmentResponse = { ... }
```

##### `assignmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.assignmentId"></a>

- *Type:* `string`

---

##### `assignmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `identities`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateIngestionRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateIngestionRequest: quicksight.QuickSightCreateIngestionRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest.property.ingestionId"></a>

- *Type:* `string`

---

### QuickSightCreateIngestionResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateIngestionResponse: quicksight.QuickSightCreateIngestionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionResponse.property.arn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionResponse.property.ingestionId"></a>

- *Type:* `string`

---

##### `ingestionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionResponse.property.ingestionStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateIngestionResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateNamespaceRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateNamespaceRequest: quicksight.QuickSightCreateNamespaceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `identityStore`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest.property.identityStore"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest.property.namespace"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

### QuickSightCreateNamespaceResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateNamespaceResponse: quicksight.QuickSightCreateNamespaceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.arn"></a>

- *Type:* `string`

---

##### `capacityRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.capacityRegion"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `identityStore`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.identityStore"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.name"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateNamespaceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightCreateTemplateAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateTemplateAliasRequest: quicksight.QuickSightCreateTemplateAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest.property.templateId"></a>

- *Type:* `string`

---

##### `templateVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest.property.templateVersionNumber"></a>

- *Type:* `number`

---

### QuickSightCreateTemplateAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateTemplateAliasResponse: quicksight.QuickSightCreateTemplateAliasResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `templateAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasResponse.property.templateAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightTemplateAlias)

---

### QuickSightCreateTemplateRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateTemplateRequest: quicksight.QuickSightCreateTemplateRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `sourceEntity`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.sourceEntity"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity`](#aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity)

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.templateId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.name"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

##### `versionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest.property.versionDescription"></a>

- *Type:* `string`

---

### QuickSightCreateTemplateResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateTemplateResponse: quicksight.QuickSightCreateTemplateResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse.property.templateId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateTemplateResponse.property.versionArn"></a>

- *Type:* `string`

---

### QuickSightCreateThemeAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateThemeAliasRequest: quicksight.QuickSightCreateThemeAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest.property.themeId"></a>

- *Type:* `string`

---

##### `themeVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest.property.themeVersionNumber"></a>

- *Type:* `number`

---

### QuickSightCreateThemeAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateThemeAliasResponse: quicksight.QuickSightCreateThemeAliasResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `themeAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasResponse.property.themeAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightThemeAlias)

---

### QuickSightCreateThemeRequest <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateThemeRequest: quicksight.QuickSightCreateThemeRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `baseThemeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.baseThemeId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeConfiguration`](#aws-cdk-sdk.quicksight.QuickSightThemeConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.name"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.themeId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

##### `versionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest.property.versionDescription"></a>

- *Type:* `string`

---

### QuickSightCreateThemeResponse <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCreateThemeResponse: quicksight.QuickSightCreateThemeResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse.property.themeId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCreateThemeResponse.property.versionArn"></a>

- *Type:* `string`

---

### QuickSightCredentialPair <a name="aws-cdk-sdk.quicksight.QuickSightCredentialPair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCredentialPair: quicksight.QuickSightCredentialPair = { ... }
```

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCredentialPair.property.password"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCredentialPair.property.username"></a>

- *Type:* `string`

---

##### `alternateDataSourceParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCredentialPair.property.alternateDataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightDataSourceParameters)[]

---

### QuickSightCustomSql <a name="aws-cdk-sdk.quicksight.QuickSightCustomSql"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightCustomSql: quicksight.QuickSightCustomSql = { ... }
```

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCustomSql.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCustomSql.property.name"></a>

- *Type:* `string`

---

##### `sqlQuery`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCustomSql.property.sqlQuery"></a>

- *Type:* `string`

---

##### `columns`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightCustomSql.property.columns"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightInputColumn`](#aws-cdk-sdk.quicksight.QuickSightInputColumn)[]

---

### QuickSightDashboard <a name="aws-cdk-sdk.quicksight.QuickSightDashboard"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboard: quicksight.QuickSightDashboard = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.createdTime"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.dashboardId"></a>

- *Type:* `string`

---

##### `lastPublishedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.lastPublishedTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboard.property.version"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardVersion`](#aws-cdk-sdk.quicksight.QuickSightDashboardVersion)

---

### QuickSightDashboardError <a name="aws-cdk-sdk.quicksight.QuickSightDashboardError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardError: quicksight.QuickSightDashboardError = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardError.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardError.property.type"></a>

- *Type:* `string`

---

### QuickSightDashboardPublishOptions <a name="aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardPublishOptions: quicksight.QuickSightDashboardPublishOptions = { ... }
```

##### `adHocFilteringOption`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions.property.adHocFilteringOption"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAdHocFilteringOption`](#aws-cdk-sdk.quicksight.QuickSightAdHocFilteringOption)

---

##### `exportToCsvOption`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions.property.exportToCsvOption"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightExportToCsvOption`](#aws-cdk-sdk.quicksight.QuickSightExportToCsvOption)

---

##### `sheetControlsOption`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions.property.sheetControlsOption"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheetControlsOption`](#aws-cdk-sdk.quicksight.QuickSightSheetControlsOption)

---

### QuickSightDashboardSearchFilter <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSearchFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardSearchFilter: quicksight.QuickSightDashboardSearchFilter = { ... }
```

##### `operator`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSearchFilter.property.operator"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSearchFilter.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSearchFilter.property.value"></a>

- *Type:* `string`

---

### QuickSightDashboardSourceEntity <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSourceEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardSourceEntity: quicksight.QuickSightDashboardSourceEntity = { ... }
```

##### `sourceTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSourceEntity.property.sourceTemplate"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSourceTemplate`](#aws-cdk-sdk.quicksight.QuickSightDashboardSourceTemplate)

---

### QuickSightDashboardSourceTemplate <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSourceTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardSourceTemplate: quicksight.QuickSightDashboardSourceTemplate = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSourceTemplate.property.arn"></a>

- *Type:* `string`

---

##### `dataSetReferences`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSourceTemplate.property.dataSetReferences"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetReference`](#aws-cdk-sdk.quicksight.QuickSightDataSetReference)[]

---

### QuickSightDashboardSummary <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardSummary: quicksight.QuickSightDashboardSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.dashboardId"></a>

- *Type:* `string`

---

##### `lastPublishedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.lastPublishedTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.name"></a>

- *Type:* `string`

---

##### `publishedVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardSummary.property.publishedVersionNumber"></a>

- *Type:* `number`

---

### QuickSightDashboardVersion <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardVersion: quicksight.QuickSightDashboardVersion = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetArns`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.dataSetArns"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.description"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardError`](#aws-cdk-sdk.quicksight.QuickSightDashboardError)[]

---

##### `sheets`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.sheets"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheet`](#aws-cdk-sdk.quicksight.QuickSightSheet)[]

---

##### `sourceEntityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.sourceEntityArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.status"></a>

- *Type:* `string`

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.themeArn"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersion.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDashboardVersionSummary <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDashboardVersionSummary: quicksight.QuickSightDashboardVersionSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary.property.description"></a>

- *Type:* `string`

---

##### `sourceEntityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary.property.sourceEntityArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDataColorPalette <a name="aws-cdk-sdk.quicksight.QuickSightDataColorPalette"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataColorPalette: quicksight.QuickSightDataColorPalette = { ... }
```

##### `colors`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataColorPalette.property.colors"></a>

- *Type:* `string`[]

---

##### `emptyFillColor`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataColorPalette.property.emptyFillColor"></a>

- *Type:* `string`

---

##### `minMaxGradient`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataColorPalette.property.minMaxGradient"></a>

- *Type:* `string`[]

---

### QuickSightDataSet <a name="aws-cdk-sdk.quicksight.QuickSightDataSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSet: quicksight.QuickSightDataSet = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.arn"></a>

- *Type:* `string`

---

##### `columnGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.columnGroups"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnGroup`](#aws-cdk-sdk.quicksight.QuickSightColumnGroup)[]

---

##### `columnLevelPermissionRules`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.columnLevelPermissionRules"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule`](#aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule)[]

---

##### `consumedSpiceCapacityInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.consumedSpiceCapacityInBytes"></a>

- *Type:* `number`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.dataSetId"></a>

- *Type:* `string`

---

##### `importMode`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.importMode"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `logicalTableMap`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.logicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightLogicalTable`](#aws-cdk-sdk.quicksight.QuickSightLogicalTable)}

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.name"></a>

- *Type:* `string`

---

##### `outputColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.outputColumns"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightOutputColumn`](#aws-cdk-sdk.quicksight.QuickSightOutputColumn)[]

---

##### `physicalTableMap`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.physicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightPhysicalTable`](#aws-cdk-sdk.quicksight.QuickSightPhysicalTable)}

---

##### `rowLevelPermissionDataSet`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSet.property.rowLevelPermissionDataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet`](#aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet)

---

### QuickSightDataSetConfiguration <a name="aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSetConfiguration: quicksight.QuickSightDataSetConfiguration = { ... }
```

##### `columnGroupSchemaList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration.property.columnGroupSchemaList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnGroupSchema`](#aws-cdk-sdk.quicksight.QuickSightColumnGroupSchema)[]

---

##### `dataSetSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration.property.dataSetSchema"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetSchema`](#aws-cdk-sdk.quicksight.QuickSightDataSetSchema)

---

##### `placeholder`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration.property.placeholder"></a>

- *Type:* `string`

---

### QuickSightDataSetReference <a name="aws-cdk-sdk.quicksight.QuickSightDataSetReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSetReference: quicksight.QuickSightDataSetReference = { ... }
```

##### `dataSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetReference.property.dataSetArn"></a>

- *Type:* `string`

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetReference.property.dataSetPlaceholder"></a>

- *Type:* `string`

---

### QuickSightDataSetSchema <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSchema"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSetSchema: quicksight.QuickSightDataSetSchema = { ... }
```

##### `columnSchemaList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSchema.property.columnSchemaList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnSchema`](#aws-cdk-sdk.quicksight.QuickSightColumnSchema)[]

---

### QuickSightDataSetSummary <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSetSummary: quicksight.QuickSightDataSetSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.arn"></a>

- *Type:* `string`

---

##### `columnLevelPermissionRulesApplied`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.columnLevelPermissionRulesApplied"></a>

- *Type:* `boolean`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.dataSetId"></a>

- *Type:* `string`

---

##### `importMode`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.importMode"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.name"></a>

- *Type:* `string`

---

##### `rowLevelPermissionDataSet`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSetSummary.property.rowLevelPermissionDataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet`](#aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet)

---

### QuickSightDataSource <a name="aws-cdk-sdk.quicksight.QuickSightDataSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSource: quicksight.QuickSightDataSource = { ... }
```

##### `alternateDataSourceParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.alternateDataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightDataSourceParameters)[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSourceParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.dataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightDataSourceParameters)

---

##### `errorInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceErrorInfo`](#aws-cdk-sdk.quicksight.QuickSightDataSourceErrorInfo)

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.name"></a>

- *Type:* `string`

---

##### `sslProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.sslProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSslProperties`](#aws-cdk-sdk.quicksight.QuickSightSslProperties)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.type"></a>

- *Type:* `string`

---

##### `vpcConnectionProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSource.property.vpcConnectionProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties`](#aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties)

---

### QuickSightDataSourceCredentials <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSourceCredentials: quicksight.QuickSightDataSourceCredentials = { ... }
```

##### `copySourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials.property.copySourceArn"></a>

- *Type:* `string`

---

##### `credentialPair`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials.property.credentialPair"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCredentialPair`](#aws-cdk-sdk.quicksight.QuickSightCredentialPair)

---

### QuickSightDataSourceErrorInfo <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceErrorInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSourceErrorInfo: quicksight.QuickSightDataSourceErrorInfo = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceErrorInfo.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceErrorInfo.property.type"></a>

- *Type:* `string`

---

### QuickSightDataSourceParameters <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDataSourceParameters: quicksight.QuickSightDataSourceParameters = { ... }
```

##### `amazonElasticsearchParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.amazonElasticsearchParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAmazonElasticsearchParameters`](#aws-cdk-sdk.quicksight.QuickSightAmazonElasticsearchParameters)

---

##### `athenaParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.athenaParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAthenaParameters`](#aws-cdk-sdk.quicksight.QuickSightAthenaParameters)

---

##### `auroraParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.auroraParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAuroraParameters`](#aws-cdk-sdk.quicksight.QuickSightAuroraParameters)

---

##### `auroraPostgreSqlParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.auroraPostgreSqlParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAuroraPostgreSqlParameters`](#aws-cdk-sdk.quicksight.QuickSightAuroraPostgreSqlParameters)

---

##### `awsIotAnalyticsParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.awsIotAnalyticsParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAwsIotAnalyticsParameters`](#aws-cdk-sdk.quicksight.QuickSightAwsIotAnalyticsParameters)

---

##### `jiraParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.jiraParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightJiraParameters`](#aws-cdk-sdk.quicksight.QuickSightJiraParameters)

---

##### `mariaDbParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.mariaDbParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightMariaDbParameters`](#aws-cdk-sdk.quicksight.QuickSightMariaDbParameters)

---

##### `mySqlParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.mySqlParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightMySqlParameters`](#aws-cdk-sdk.quicksight.QuickSightMySqlParameters)

---

##### `oracleParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.oracleParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightOracleParameters`](#aws-cdk-sdk.quicksight.QuickSightOracleParameters)

---

##### `postgreSqlParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.postgreSqlParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightPostgreSqlParameters`](#aws-cdk-sdk.quicksight.QuickSightPostgreSqlParameters)

---

##### `prestoParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.prestoParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightPrestoParameters`](#aws-cdk-sdk.quicksight.QuickSightPrestoParameters)

---

##### `rdsParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.rdsParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRdsParameters`](#aws-cdk-sdk.quicksight.QuickSightRdsParameters)

---

##### `redshiftParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.redshiftParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRedshiftParameters`](#aws-cdk-sdk.quicksight.QuickSightRedshiftParameters)

---

##### `s3Parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.s3Parameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightS3Parameters`](#aws-cdk-sdk.quicksight.QuickSightS3Parameters)

---

##### `serviceNowParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.serviceNowParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightServiceNowParameters`](#aws-cdk-sdk.quicksight.QuickSightServiceNowParameters)

---

##### `snowflakeParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.snowflakeParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSnowflakeParameters`](#aws-cdk-sdk.quicksight.QuickSightSnowflakeParameters)

---

##### `sparkParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.sparkParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSparkParameters`](#aws-cdk-sdk.quicksight.QuickSightSparkParameters)

---

##### `sqlServerParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.sqlServerParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSqlServerParameters`](#aws-cdk-sdk.quicksight.QuickSightSqlServerParameters)

---

##### `teradataParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.teradataParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTeradataParameters`](#aws-cdk-sdk.quicksight.QuickSightTeradataParameters)

---

##### `twitterParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDataSourceParameters.property.twitterParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTwitterParameters`](#aws-cdk-sdk.quicksight.QuickSightTwitterParameters)

---

### QuickSightDateTimeParameter <a name="aws-cdk-sdk.quicksight.QuickSightDateTimeParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDateTimeParameter: quicksight.QuickSightDateTimeParameter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDateTimeParameter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDateTimeParameter.property.values"></a>

- *Type:* `string`[]

---

### QuickSightDecimalParameter <a name="aws-cdk-sdk.quicksight.QuickSightDecimalParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDecimalParameter: quicksight.QuickSightDecimalParameter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDecimalParameter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDecimalParameter.property.values"></a>

- *Type:* `number`[]

---

### QuickSightDeleteAccountCustomizationRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteAccountCustomizationRequest: quicksight.QuickSightDeleteAccountCustomizationRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDeleteAccountCustomizationResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteAccountCustomizationResponse: quicksight.QuickSightDeleteAccountCustomizationResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteAnalysisRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteAnalysisRequest: quicksight.QuickSightDeleteAnalysisRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `forceDeleteWithoutRecovery`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest.property.forceDeleteWithoutRecovery"></a>

- *Type:* `boolean`

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest.property.recoveryWindowInDays"></a>

- *Type:* `number`

---

### QuickSightDeleteAnalysisResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteAnalysisResponse: quicksight.QuickSightDeleteAnalysisResponse = { ... }
```

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisResponse.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisResponse.property.arn"></a>

- *Type:* `string`

---

##### `deletionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisResponse.property.deletionTime"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteDashboardRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteDashboardRequest: quicksight.QuickSightDeleteDashboardRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDeleteDashboardResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteDashboardResponse: quicksight.QuickSightDeleteDashboardResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardResponse.property.arn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDashboardResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteDataSetRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteDataSetRequest: quicksight.QuickSightDeleteDataSetRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

### QuickSightDeleteDataSetResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteDataSetResponse: quicksight.QuickSightDeleteDataSetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetResponse.property.arn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSetResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteDataSourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteDataSourceRequest: quicksight.QuickSightDeleteDataSourceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest.property.dataSourceId"></a>

- *Type:* `string`

---

### QuickSightDeleteDataSourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteDataSourceResponse: quicksight.QuickSightDeleteDataSourceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceResponse.property.arn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceResponse.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteGroupMembershipRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteGroupMembershipRequest: quicksight.QuickSightDeleteGroupMembershipRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest.property.groupName"></a>

- *Type:* `string`

---

##### `memberName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest.property.memberName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDeleteGroupMembershipResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteGroupMembershipResponse: quicksight.QuickSightDeleteGroupMembershipResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteGroupRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteGroupRequest: quicksight.QuickSightDeleteGroupRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDeleteGroupResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteGroupResponse: quicksight.QuickSightDeleteGroupResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteGroupResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteIamPolicyAssignmentRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteIamPolicyAssignmentRequest: quicksight.QuickSightDeleteIamPolicyAssignmentRequest = { ... }
```

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest.property.assignmentName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDeleteIamPolicyAssignmentResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteIamPolicyAssignmentResponse: quicksight.QuickSightDeleteIamPolicyAssignmentResponse = { ... }
```

##### `assignmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentResponse.property.assignmentName"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteNamespaceRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteNamespaceRequest: quicksight.QuickSightDeleteNamespaceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDeleteNamespaceResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteNamespaceResponse: quicksight.QuickSightDeleteNamespaceResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteTemplateAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteTemplateAliasRequest: quicksight.QuickSightDeleteTemplateAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest.property.templateId"></a>

- *Type:* `string`

---

### QuickSightDeleteTemplateAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteTemplateAliasResponse: quicksight.QuickSightDeleteTemplateAliasResponse = { ... }
```

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasResponse.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasResponse.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasResponse.property.templateId"></a>

- *Type:* `string`

---

### QuickSightDeleteTemplateRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteTemplateRequest: quicksight.QuickSightDeleteTemplateRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest.property.templateId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDeleteTemplateResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteTemplateResponse: quicksight.QuickSightDeleteTemplateResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateResponse.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateResponse.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteTemplateResponse.property.templateId"></a>

- *Type:* `string`

---

### QuickSightDeleteThemeAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteThemeAliasRequest: quicksight.QuickSightDeleteThemeAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest.property.themeId"></a>

- *Type:* `string`

---

### QuickSightDeleteThemeAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteThemeAliasResponse: quicksight.QuickSightDeleteThemeAliasResponse = { ... }
```

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasResponse.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasResponse.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasResponse.property.themeId"></a>

- *Type:* `string`

---

### QuickSightDeleteThemeRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteThemeRequest: quicksight.QuickSightDeleteThemeRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest.property.themeId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDeleteThemeResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteThemeResponse: quicksight.QuickSightDeleteThemeResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeResponse.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeResponse.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteThemeResponse.property.themeId"></a>

- *Type:* `string`

---

### QuickSightDeleteUserByPrincipalIdRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteUserByPrincipalIdRequest: quicksight.QuickSightDeleteUserByPrincipalIdRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest.property.namespace"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest.property.principalId"></a>

- *Type:* `string`

---

### QuickSightDeleteUserByPrincipalIdResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteUserByPrincipalIdResponse: quicksight.QuickSightDeleteUserByPrincipalIdResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDeleteUserRequest <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteUserRequest: quicksight.QuickSightDeleteUserRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest.property.namespace"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest.property.userName"></a>

- *Type:* `string`

---

### QuickSightDeleteUserResponse <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDeleteUserResponse: quicksight.QuickSightDeleteUserResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDeleteUserResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeAccountCustomizationRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAccountCustomizationRequest: quicksight.QuickSightDescribeAccountCustomizationRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest.property.namespace"></a>

- *Type:* `string`

---

##### `resolved`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest.property.resolved"></a>

- *Type:* `boolean`

---

### QuickSightDescribeAccountCustomizationResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAccountCustomizationResponse: quicksight.QuickSightDescribeAccountCustomizationResponse = { ... }
```

##### `accountCustomization`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightAccountCustomization)

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse.property.namespace"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeAccountSettingsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAccountSettingsRequest: quicksight.QuickSightDescribeAccountSettingsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

### QuickSightDescribeAccountSettingsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAccountSettingsResponse: quicksight.QuickSightDescribeAccountSettingsResponse = { ... }
```

##### `accountSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsResponse.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAccountSettings`](#aws-cdk-sdk.quicksight.QuickSightAccountSettings)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeAnalysisPermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAnalysisPermissionsRequest: quicksight.QuickSightDescribeAnalysisPermissionsRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

### QuickSightDescribeAnalysisPermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAnalysisPermissionsResponse: quicksight.QuickSightDescribeAnalysisPermissionsResponse = { ... }
```

##### `analysisArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsResponse.property.analysisArn"></a>

- *Type:* `string`

---

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsResponse.property.analysisId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeAnalysisRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAnalysisRequest: quicksight.QuickSightDescribeAnalysisRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest.property.awsAccountId"></a>

- *Type:* `string`

---

### QuickSightDescribeAnalysisResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeAnalysisResponse: quicksight.QuickSightDescribeAnalysisResponse = { ... }
```

##### `analysis`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisResponse.property.analysis"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysis`](#aws-cdk-sdk.quicksight.QuickSightAnalysis)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeDashboardPermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDashboardPermissionsRequest: quicksight.QuickSightDescribeDashboardPermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest.property.dashboardId"></a>

- *Type:* `string`

---

### QuickSightDescribeDashboardPermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDashboardPermissionsResponse: quicksight.QuickSightDescribeDashboardPermissionsResponse = { ... }
```

##### `dashboardArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsResponse.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeDashboardRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDashboardRequest: quicksight.QuickSightDescribeDashboardRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDescribeDashboardResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDashboardResponse: quicksight.QuickSightDescribeDashboardResponse = { ... }
```

##### `dashboard`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardResponse.property.dashboard"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboard`](#aws-cdk-sdk.quicksight.QuickSightDashboard)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDashboardResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeDataSetPermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSetPermissionsRequest: quicksight.QuickSightDescribeDataSetPermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest.property.dataSetId"></a>

- *Type:* `string`

---

### QuickSightDescribeDataSetPermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSetPermissionsResponse: quicksight.QuickSightDescribeDataSetPermissionsResponse = { ... }
```

##### `dataSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsResponse.property.dataSetArn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeDataSetRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSetRequest: quicksight.QuickSightDescribeDataSetRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

### QuickSightDescribeDataSetResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSetResponse: quicksight.QuickSightDescribeDataSetResponse = { ... }
```

##### `dataSet`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetResponse.property.dataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSet`](#aws-cdk-sdk.quicksight.QuickSightDataSet)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSetResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeDataSourcePermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSourcePermissionsRequest: quicksight.QuickSightDescribeDataSourcePermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest.property.dataSourceId"></a>

- *Type:* `string`

---

### QuickSightDescribeDataSourcePermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSourcePermissionsResponse: quicksight.QuickSightDescribeDataSourcePermissionsResponse = { ... }
```

##### `dataSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsResponse.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsResponse.property.dataSourceId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeDataSourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSourceRequest: quicksight.QuickSightDescribeDataSourceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest.property.dataSourceId"></a>

- *Type:* `string`

---

### QuickSightDescribeDataSourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeDataSourceResponse: quicksight.QuickSightDescribeDataSourceResponse = { ... }
```

##### `dataSource`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceResponse.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSource`](#aws-cdk-sdk.quicksight.QuickSightDataSource)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeGroupRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeGroupRequest: quicksight.QuickSightDescribeGroupRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDescribeGroupResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeGroupResponse: quicksight.QuickSightDescribeGroupResponse = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupResponse.property.group"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeGroupResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeIamPolicyAssignmentRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeIamPolicyAssignmentRequest: quicksight.QuickSightDescribeIamPolicyAssignmentRequest = { ... }
```

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest.property.assignmentName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDescribeIamPolicyAssignmentResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeIamPolicyAssignmentResponse: quicksight.QuickSightDescribeIamPolicyAssignmentResponse = { ... }
```

##### `iamPolicyAssignment`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentResponse.property.iamPolicyAssignment"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment`](#aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeIngestionRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeIngestionRequest: quicksight.QuickSightDescribeIngestionRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest.property.ingestionId"></a>

- *Type:* `string`

---

### QuickSightDescribeIngestionResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeIngestionResponse: quicksight.QuickSightDescribeIngestionResponse = { ... }
```

##### `ingestion`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionResponse.property.ingestion"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIngestion`](#aws-cdk-sdk.quicksight.QuickSightIngestion)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeIngestionResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeNamespaceRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeNamespaceRequest: quicksight.QuickSightDescribeNamespaceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightDescribeNamespaceResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeNamespaceResponse: quicksight.QuickSightDescribeNamespaceResponse = { ... }
```

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceResponse.property.namespace"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2`](#aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightDescribeTemplateAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeTemplateAliasRequest: quicksight.QuickSightDescribeTemplateAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest.property.templateId"></a>

- *Type:* `string`

---

### QuickSightDescribeTemplateAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeTemplateAliasResponse: quicksight.QuickSightDescribeTemplateAliasResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `templateAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasResponse.property.templateAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightTemplateAlias)

---

### QuickSightDescribeTemplatePermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeTemplatePermissionsRequest: quicksight.QuickSightDescribeTemplatePermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest.property.templateId"></a>

- *Type:* `string`

---

### QuickSightDescribeTemplatePermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeTemplatePermissionsResponse: quicksight.QuickSightDescribeTemplatePermissionsResponse = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsResponse.property.status"></a>

- *Type:* `number`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsResponse.property.templateArn"></a>

- *Type:* `string`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsResponse.property.templateId"></a>

- *Type:* `string`

---

### QuickSightDescribeTemplateRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeTemplateRequest: quicksight.QuickSightDescribeTemplateRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest.property.templateId"></a>

- *Type:* `string`

---

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDescribeTemplateResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeTemplateResponse: quicksight.QuickSightDescribeTemplateResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateResponse.property.status"></a>

- *Type:* `number`

---

##### `template`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeTemplateResponse.property.template"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplate`](#aws-cdk-sdk.quicksight.QuickSightTemplate)

---

### QuickSightDescribeThemeAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeThemeAliasRequest: quicksight.QuickSightDescribeThemeAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest.property.themeId"></a>

- *Type:* `string`

---

### QuickSightDescribeThemeAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeThemeAliasResponse: quicksight.QuickSightDescribeThemeAliasResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `themeAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasResponse.property.themeAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightThemeAlias)

---

### QuickSightDescribeThemePermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeThemePermissionsRequest: quicksight.QuickSightDescribeThemePermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest.property.themeId"></a>

- *Type:* `string`

---

### QuickSightDescribeThemePermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeThemePermissionsResponse: quicksight.QuickSightDescribeThemePermissionsResponse = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsResponse.property.status"></a>

- *Type:* `number`

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsResponse.property.themeArn"></a>

- *Type:* `string`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsResponse.property.themeId"></a>

- *Type:* `string`

---

### QuickSightDescribeThemeRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeThemeRequest: quicksight.QuickSightDescribeThemeRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest.property.themeId"></a>

- *Type:* `string`

---

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightDescribeThemeResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeThemeResponse: quicksight.QuickSightDescribeThemeResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeResponse.property.status"></a>

- *Type:* `number`

---

##### `theme`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeThemeResponse.property.theme"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTheme`](#aws-cdk-sdk.quicksight.QuickSightTheme)

---

### QuickSightDescribeUserRequest <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeUserRequest: quicksight.QuickSightDescribeUserRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest.property.namespace"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest.property.userName"></a>

- *Type:* `string`

---

### QuickSightDescribeUserResponse <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightDescribeUserResponse: quicksight.QuickSightDescribeUserResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserResponse.property.status"></a>

- *Type:* `number`

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightDescribeUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUser`](#aws-cdk-sdk.quicksight.QuickSightUser)

---

### QuickSightErrorInfo <a name="aws-cdk-sdk.quicksight.QuickSightErrorInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightErrorInfo: quicksight.QuickSightErrorInfo = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightErrorInfo.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightErrorInfo.property.type"></a>

- *Type:* `string`

---

### QuickSightExportToCsvOption <a name="aws-cdk-sdk.quicksight.QuickSightExportToCsvOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightExportToCsvOption: quicksight.QuickSightExportToCsvOption = { ... }
```

##### `availabilityStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightExportToCsvOption.property.availabilityStatus"></a>

- *Type:* `string`

---

### QuickSightFilterOperation <a name="aws-cdk-sdk.quicksight.QuickSightFilterOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightFilterOperation: quicksight.QuickSightFilterOperation = { ... }
```

##### `conditionExpression`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightFilterOperation.property.conditionExpression"></a>

- *Type:* `string`

---

### QuickSightGeoSpatialColumnGroup <a name="aws-cdk-sdk.quicksight.QuickSightGeoSpatialColumnGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGeoSpatialColumnGroup: quicksight.QuickSightGeoSpatialColumnGroup = { ... }
```

##### `columns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGeoSpatialColumnGroup.property.columns"></a>

- *Type:* `string`[]

---

##### `countryCode`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGeoSpatialColumnGroup.property.countryCode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGeoSpatialColumnGroup.property.name"></a>

- *Type:* `string`

---

### QuickSightGetDashboardEmbedUrlRequest <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGetDashboardEmbedUrlRequest: quicksight.QuickSightGetDashboardEmbedUrlRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.identityType"></a>

- *Type:* `string`

---

##### `additionalDashboardIds`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.additionalDashboardIds"></a>

- *Type:* `string`[]

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.namespace"></a>

- *Type:* `string`

---

##### `resetDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.resetDisabled"></a>

- *Type:* `boolean`

---

##### `sessionLifetimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.sessionLifetimeInMinutes"></a>

- *Type:* `number`

---

##### `statePersistenceEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.statePersistenceEnabled"></a>

- *Type:* `boolean`

---

##### `undoRedoDisabled`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.undoRedoDisabled"></a>

- *Type:* `boolean`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest.property.userArn"></a>

- *Type:* `string`

---

### QuickSightGetDashboardEmbedUrlResponse <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGetDashboardEmbedUrlResponse: quicksight.QuickSightGetDashboardEmbedUrlResponse = { ... }
```

##### `embedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlResponse.property.embedUrl"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightGetSessionEmbedUrlRequest <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGetSessionEmbedUrlRequest: quicksight.QuickSightGetSessionEmbedUrlRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `entryPoint`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest.property.entryPoint"></a>

- *Type:* `string`

---

##### `sessionLifetimeInMinutes`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest.property.sessionLifetimeInMinutes"></a>

- *Type:* `number`

---

##### `userArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest.property.userArn"></a>

- *Type:* `string`

---

### QuickSightGetSessionEmbedUrlResponse <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGetSessionEmbedUrlResponse: quicksight.QuickSightGetSessionEmbedUrlResponse = { ... }
```

##### `embedUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlResponse.property.embedUrl"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightGroup <a name="aws-cdk-sdk.quicksight.QuickSightGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGroup: quicksight.QuickSightGroup = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGroup.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGroup.property.description"></a>

- *Type:* `string`

---

##### `groupName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGroup.property.groupName"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGroup.property.principalId"></a>

- *Type:* `string`

---

### QuickSightGroupMember <a name="aws-cdk-sdk.quicksight.QuickSightGroupMember"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGroupMember: quicksight.QuickSightGroupMember = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGroupMember.property.arn"></a>

- *Type:* `string`

---

##### `memberName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGroupMember.property.memberName"></a>

- *Type:* `string`

---

### QuickSightGutterStyle <a name="aws-cdk-sdk.quicksight.QuickSightGutterStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightGutterStyle: quicksight.QuickSightGutterStyle = { ... }
```

##### `show`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightGutterStyle.property.show"></a>

- *Type:* `boolean`

---

### QuickSightIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightIamPolicyAssignment: quicksight.QuickSightIamPolicyAssignment = { ... }
```

##### `assignmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment.property.assignmentId"></a>

- *Type:* `string`

---

##### `assignmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment.property.awsAccountId"></a>

- *Type:* `string`

---

##### `identities`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignment.property.policyArn"></a>

- *Type:* `string`

---

### QuickSightIamPolicyAssignmentSummary <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightIamPolicyAssignmentSummary: quicksight.QuickSightIamPolicyAssignmentSummary = { ... }
```

##### `assignmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary.property.assignmentStatus"></a>

- *Type:* `string`

---

### QuickSightIngestion <a name="aws-cdk-sdk.quicksight.QuickSightIngestion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightIngestion: quicksight.QuickSightIngestion = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.createdTime"></a>

- *Type:* `string`

---

##### `ingestionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.ingestionStatus"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightErrorInfo`](#aws-cdk-sdk.quicksight.QuickSightErrorInfo)

---

##### `ingestionId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.ingestionId"></a>

- *Type:* `string`

---

##### `ingestionSizeInBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.ingestionSizeInBytes"></a>

- *Type:* `number`

---

##### `ingestionTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.ingestionTimeInSeconds"></a>

- *Type:* `number`

---

##### `queueInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.queueInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightQueueInfo`](#aws-cdk-sdk.quicksight.QuickSightQueueInfo)

---

##### `requestSource`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.requestSource"></a>

- *Type:* `string`

---

##### `requestType`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.requestType"></a>

- *Type:* `string`

---

##### `rowInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIngestion.property.rowInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRowInfo`](#aws-cdk-sdk.quicksight.QuickSightRowInfo)

---

### QuickSightInputColumn <a name="aws-cdk-sdk.quicksight.QuickSightInputColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightInputColumn: quicksight.QuickSightInputColumn = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightInputColumn.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightInputColumn.property.type"></a>

- *Type:* `string`

---

### QuickSightIntegerParameter <a name="aws-cdk-sdk.quicksight.QuickSightIntegerParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightIntegerParameter: quicksight.QuickSightIntegerParameter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIntegerParameter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightIntegerParameter.property.values"></a>

- *Type:* `number`[]

---

### QuickSightJiraParameters <a name="aws-cdk-sdk.quicksight.QuickSightJiraParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightJiraParameters: quicksight.QuickSightJiraParameters = { ... }
```

##### `siteBaseUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightJiraParameters.property.siteBaseUrl"></a>

- *Type:* `string`

---

### QuickSightJoinInstruction <a name="aws-cdk-sdk.quicksight.QuickSightJoinInstruction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightJoinInstruction: quicksight.QuickSightJoinInstruction = { ... }
```

##### `leftOperand`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightJoinInstruction.property.leftOperand"></a>

- *Type:* `string`

---

##### `onClause`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightJoinInstruction.property.onClause"></a>

- *Type:* `string`

---

##### `rightOperand`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightJoinInstruction.property.rightOperand"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightJoinInstruction.property.type"></a>

- *Type:* `string`

---

### QuickSightListAnalysesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListAnalysesRequest: quicksight.QuickSightListAnalysesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListAnalysesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListAnalysesResponse: quicksight.QuickSightListAnalysesResponse = { ... }
```

##### `analysisSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesResponse.property.analysisSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSummary`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListAnalysesResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListDashboardsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDashboardsRequest: quicksight.QuickSightListDashboardsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListDashboardsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDashboardsResponse: quicksight.QuickSightListDashboardsResponse = { ... }
```

##### `dashboardSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsResponse.property.dashboardSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSummary`](#aws-cdk-sdk.quicksight.QuickSightDashboardSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListDashboardVersionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDashboardVersionsRequest: quicksight.QuickSightListDashboardVersionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListDashboardVersionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDashboardVersionsResponse: quicksight.QuickSightListDashboardVersionsResponse = { ... }
```

##### `dashboardVersionSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsResponse.property.dashboardVersionSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary`](#aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListDataSetsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDataSetsRequest: quicksight.QuickSightListDataSetsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListDataSetsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDataSetsResponse: quicksight.QuickSightListDataSetsResponse = { ... }
```

##### `dataSetSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsResponse.property.dataSetSummaries"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetSummary`](#aws-cdk-sdk.quicksight.QuickSightDataSetSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSetsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListDataSourcesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDataSourcesRequest: quicksight.QuickSightListDataSourcesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListDataSourcesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListDataSourcesResponse: quicksight.QuickSightListDataSourcesResponse = { ... }
```

##### `dataSources`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesResponse.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSource`](#aws-cdk-sdk.quicksight.QuickSightDataSource)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListDataSourcesResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListGroupMembershipsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListGroupMembershipsRequest: quicksight.QuickSightListGroupMembershipsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest.property.groupName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListGroupMembershipsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListGroupMembershipsResponse: quicksight.QuickSightListGroupMembershipsResponse = { ... }
```

##### `groupMemberList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsResponse.property.groupMemberList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroupMember`](#aws-cdk-sdk.quicksight.QuickSightGroupMember)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListGroupsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListGroupsRequest: quicksight.QuickSightListGroupsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListGroupsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListGroupsResponse: quicksight.QuickSightListGroupsResponse = { ... }
```

##### `groupList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsResponse.property.groupList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListGroupsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListIamPolicyAssignmentsForUserRequest <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListIamPolicyAssignmentsForUserRequest: quicksight.QuickSightListIamPolicyAssignmentsForUserRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest.property.namespace"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListIamPolicyAssignmentsForUserResponse <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListIamPolicyAssignmentsForUserResponse: quicksight.QuickSightListIamPolicyAssignmentsForUserResponse = { ... }
```

##### `activeAssignments`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserResponse.property.activeAssignments"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment`](#aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListIamPolicyAssignmentsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListIamPolicyAssignmentsRequest: quicksight.QuickSightListIamPolicyAssignmentsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListIamPolicyAssignmentsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListIamPolicyAssignmentsResponse: quicksight.QuickSightListIamPolicyAssignmentsResponse = { ... }
```

##### `iamPolicyAssignments`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsResponse.property.iamPolicyAssignments"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary`](#aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListIngestionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListIngestionsRequest: quicksight.QuickSightListIngestionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListIngestionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListIngestionsResponse: quicksight.QuickSightListIngestionsResponse = { ... }
```

##### `ingestions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsResponse.property.ingestions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIngestion`](#aws-cdk-sdk.quicksight.QuickSightIngestion)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListIngestionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListNamespacesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListNamespacesRequest: quicksight.QuickSightListNamespacesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListNamespacesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListNamespacesResponse: quicksight.QuickSightListNamespacesResponse = { ... }
```

##### `namespaces`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesResponse.property.namespaces"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2`](#aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListNamespacesResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListTagsForResourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTagsForResourceRequest: quicksight.QuickSightListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### QuickSightListTagsForResourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTagsForResourceResponse: quicksight.QuickSightListTagsForResourceResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTagsForResourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTagsForResourceResponse.property.status"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTagsForResourceResponse.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

### QuickSightListTemplateAliasesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTemplateAliasesRequest: quicksight.QuickSightListTemplateAliasesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest.property.templateId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListTemplateAliasesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTemplateAliasesResponse: quicksight.QuickSightListTemplateAliasesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesResponse.property.status"></a>

- *Type:* `number`

---

##### `templateAliasList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesResponse.property.templateAliasList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightTemplateAlias)[]

---

### QuickSightListTemplatesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTemplatesRequest: quicksight.QuickSightListTemplatesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListTemplatesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTemplatesResponse: quicksight.QuickSightListTemplatesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesResponse.property.status"></a>

- *Type:* `number`

---

##### `templateSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplatesResponse.property.templateSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateSummary`](#aws-cdk-sdk.quicksight.QuickSightTemplateSummary)[]

---

### QuickSightListTemplateVersionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTemplateVersionsRequest: quicksight.QuickSightListTemplateVersionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest.property.templateId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListTemplateVersionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListTemplateVersionsResponse: quicksight.QuickSightListTemplateVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsResponse.property.status"></a>

- *Type:* `number`

---

##### `templateVersionSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsResponse.property.templateVersionSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary`](#aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary)[]

---

### QuickSightListThemeAliasesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListThemeAliasesRequest: quicksight.QuickSightListThemeAliasesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest.property.themeId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListThemeAliasesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListThemeAliasesResponse: quicksight.QuickSightListThemeAliasesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesResponse.property.status"></a>

- *Type:* `number`

---

##### `themeAliasList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeAliasesResponse.property.themeAliasList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightThemeAlias)[]

---

### QuickSightListThemesRequest <a name="aws-cdk-sdk.quicksight.QuickSightListThemesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListThemesRequest: quicksight.QuickSightListThemesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesRequest.property.type"></a>

- *Type:* `string`

---

### QuickSightListThemesResponse <a name="aws-cdk-sdk.quicksight.QuickSightListThemesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListThemesResponse: quicksight.QuickSightListThemesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesResponse.property.status"></a>

- *Type:* `number`

---

##### `themeSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemesResponse.property.themeSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeSummary`](#aws-cdk-sdk.quicksight.QuickSightThemeSummary)[]

---

### QuickSightListThemeVersionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListThemeVersionsRequest: quicksight.QuickSightListThemeVersionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest.property.themeId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListThemeVersionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListThemeVersionsResponse: quicksight.QuickSightListThemeVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsResponse.property.status"></a>

- *Type:* `number`

---

##### `themeVersionSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListThemeVersionsResponse.property.themeVersionSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary`](#aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary)[]

---

### QuickSightListUserGroupsRequest <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListUserGroupsRequest: quicksight.QuickSightListUserGroupsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest.property.namespace"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest.property.userName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListUserGroupsResponse <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListUserGroupsResponse: quicksight.QuickSightListUserGroupsResponse = { ... }
```

##### `groupList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsResponse.property.groupList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUserGroupsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightListUsersRequest <a name="aws-cdk-sdk.quicksight.QuickSightListUsersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListUsersRequest: quicksight.QuickSightListUsersRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersRequest.property.namespace"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightListUsersResponse <a name="aws-cdk-sdk.quicksight.QuickSightListUsersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightListUsersResponse: quicksight.QuickSightListUsersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersResponse.property.status"></a>

- *Type:* `number`

---

##### `userList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightListUsersResponse.property.userList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUser`](#aws-cdk-sdk.quicksight.QuickSightUser)[]

---

### QuickSightLogicalTable <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightLogicalTable: quicksight.QuickSightLogicalTable = { ... }
```

##### `alias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTable.property.alias"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTable.property.source"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightLogicalTableSource`](#aws-cdk-sdk.quicksight.QuickSightLogicalTableSource)

---

##### `dataTransforms`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTable.property.dataTransforms"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTransformOperation`](#aws-cdk-sdk.quicksight.QuickSightTransformOperation)[]

---

### QuickSightLogicalTableSource <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTableSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightLogicalTableSource: quicksight.QuickSightLogicalTableSource = { ... }
```

##### `joinInstruction`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTableSource.property.joinInstruction"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightJoinInstruction`](#aws-cdk-sdk.quicksight.QuickSightJoinInstruction)

---

##### `physicalTableId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightLogicalTableSource.property.physicalTableId"></a>

- *Type:* `string`

---

### QuickSightManifestFileLocation <a name="aws-cdk-sdk.quicksight.QuickSightManifestFileLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightManifestFileLocation: quicksight.QuickSightManifestFileLocation = { ... }
```

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightManifestFileLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightManifestFileLocation.property.key"></a>

- *Type:* `string`

---

### QuickSightMarginStyle <a name="aws-cdk-sdk.quicksight.QuickSightMarginStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightMarginStyle: quicksight.QuickSightMarginStyle = { ... }
```

##### `show`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMarginStyle.property.show"></a>

- *Type:* `boolean`

---

### QuickSightMariaDbParameters <a name="aws-cdk-sdk.quicksight.QuickSightMariaDbParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightMariaDbParameters: quicksight.QuickSightMariaDbParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMariaDbParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMariaDbParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMariaDbParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightMySqlParameters <a name="aws-cdk-sdk.quicksight.QuickSightMySqlParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightMySqlParameters: quicksight.QuickSightMySqlParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMySqlParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMySqlParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightMySqlParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightNamespaceError <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightNamespaceError: quicksight.QuickSightNamespaceError = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceError.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceError.property.type"></a>

- *Type:* `string`

---

### QuickSightNamespaceInfoV2 <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightNamespaceInfoV2: quicksight.QuickSightNamespaceInfoV2 = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2.property.arn"></a>

- *Type:* `string`

---

##### `capacityRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2.property.capacityRegion"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2.property.creationStatus"></a>

- *Type:* `string`

---

##### `identityStore`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2.property.identityStore"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2.property.name"></a>

- *Type:* `string`

---

##### `namespaceError`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2.property.namespaceError"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightNamespaceError`](#aws-cdk-sdk.quicksight.QuickSightNamespaceError)

---

### QuickSightOracleParameters <a name="aws-cdk-sdk.quicksight.QuickSightOracleParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightOracleParameters: quicksight.QuickSightOracleParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightOracleParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightOracleParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightOracleParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightOutputColumn <a name="aws-cdk-sdk.quicksight.QuickSightOutputColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightOutputColumn: quicksight.QuickSightOutputColumn = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightOutputColumn.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightOutputColumn.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightOutputColumn.property.type"></a>

- *Type:* `string`

---

### QuickSightParameters <a name="aws-cdk-sdk.quicksight.QuickSightParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightParameters: quicksight.QuickSightParameters = { ... }
```

##### `dateTimeParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightParameters.property.dateTimeParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDateTimeParameter`](#aws-cdk-sdk.quicksight.QuickSightDateTimeParameter)[]

---

##### `decimalParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightParameters.property.decimalParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDecimalParameter`](#aws-cdk-sdk.quicksight.QuickSightDecimalParameter)[]

---

##### `integerParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightParameters.property.integerParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIntegerParameter`](#aws-cdk-sdk.quicksight.QuickSightIntegerParameter)[]

---

##### `stringParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightParameters.property.stringParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightStringParameter`](#aws-cdk-sdk.quicksight.QuickSightStringParameter)[]

---

### QuickSightPhysicalTable <a name="aws-cdk-sdk.quicksight.QuickSightPhysicalTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightPhysicalTable: quicksight.QuickSightPhysicalTable = { ... }
```

##### `customSql`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPhysicalTable.property.customSql"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCustomSql`](#aws-cdk-sdk.quicksight.QuickSightCustomSql)

---

##### `relationalTable`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPhysicalTable.property.relationalTable"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRelationalTable`](#aws-cdk-sdk.quicksight.QuickSightRelationalTable)

---

##### `s3Source`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPhysicalTable.property.s3Source"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightS3Source`](#aws-cdk-sdk.quicksight.QuickSightS3Source)

---

### QuickSightPostgreSqlParameters <a name="aws-cdk-sdk.quicksight.QuickSightPostgreSqlParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightPostgreSqlParameters: quicksight.QuickSightPostgreSqlParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPostgreSqlParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPostgreSqlParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPostgreSqlParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightPrestoParameters <a name="aws-cdk-sdk.quicksight.QuickSightPrestoParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightPrestoParameters: quicksight.QuickSightPrestoParameters = { ... }
```

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPrestoParameters.property.catalog"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPrestoParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightPrestoParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightProjectOperation <a name="aws-cdk-sdk.quicksight.QuickSightProjectOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightProjectOperation: quicksight.QuickSightProjectOperation = { ... }
```

##### `projectedColumns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightProjectOperation.property.projectedColumns"></a>

- *Type:* `string`[]

---

### QuickSightQueueInfo <a name="aws-cdk-sdk.quicksight.QuickSightQueueInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightQueueInfo: quicksight.QuickSightQueueInfo = { ... }
```

##### `queuedIngestion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightQueueInfo.property.queuedIngestion"></a>

- *Type:* `string`

---

##### `waitingOnIngestion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightQueueInfo.property.waitingOnIngestion"></a>

- *Type:* `string`

---

### QuickSightRdsParameters <a name="aws-cdk-sdk.quicksight.QuickSightRdsParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRdsParameters: quicksight.QuickSightRdsParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRdsParameters.property.database"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRdsParameters.property.instanceId"></a>

- *Type:* `string`

---

### QuickSightRedshiftParameters <a name="aws-cdk-sdk.quicksight.QuickSightRedshiftParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRedshiftParameters: quicksight.QuickSightRedshiftParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRedshiftParameters.property.database"></a>

- *Type:* `string`

---

##### `clusterId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRedshiftParameters.property.clusterId"></a>

- *Type:* `string`

---

##### `host`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRedshiftParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRedshiftParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightRegisterUserRequest <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRegisterUserRequest: quicksight.QuickSightRegisterUserRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.email"></a>

- *Type:* `string`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.identityType"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.namespace"></a>

- *Type:* `string`

---

##### `userRole`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.userRole"></a>

- *Type:* `string`

---

##### `customPermissionsName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.customPermissionsName"></a>

- *Type:* `string`

---

##### `iamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.iamArn"></a>

- *Type:* `string`

---

##### `sessionName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.sessionName"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest.property.userName"></a>

- *Type:* `string`

---

### QuickSightRegisterUserResponse <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRegisterUserResponse: quicksight.QuickSightRegisterUserResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserResponse.property.status"></a>

- *Type:* `number`

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUser`](#aws-cdk-sdk.quicksight.QuickSightUser)

---

##### `userInvitationUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRegisterUserResponse.property.userInvitationUrl"></a>

- *Type:* `string`

---

### QuickSightRelationalTable <a name="aws-cdk-sdk.quicksight.QuickSightRelationalTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRelationalTable: quicksight.QuickSightRelationalTable = { ... }
```

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRelationalTable.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `inputColumns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRelationalTable.property.inputColumns"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightInputColumn`](#aws-cdk-sdk.quicksight.QuickSightInputColumn)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRelationalTable.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRelationalTable.property.schema"></a>

- *Type:* `string`

---

### QuickSightRenameColumnOperation <a name="aws-cdk-sdk.quicksight.QuickSightRenameColumnOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRenameColumnOperation: quicksight.QuickSightRenameColumnOperation = { ... }
```

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRenameColumnOperation.property.columnName"></a>

- *Type:* `string`

---

##### `newColumnName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRenameColumnOperation.property.newColumnName"></a>

- *Type:* `string`

---

### QuickSightResourcePermission <a name="aws-cdk-sdk.quicksight.QuickSightResourcePermission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightResourcePermission: quicksight.QuickSightResourcePermission = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResourcePermission.property.actions"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResourcePermission.property.principal"></a>

- *Type:* `string`

---

### QuickSightRestoreAnalysisRequest <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRestoreAnalysisRequest: quicksight.QuickSightRestoreAnalysisRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest.property.awsAccountId"></a>

- *Type:* `string`

---

### QuickSightRestoreAnalysisResponse <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRestoreAnalysisResponse: quicksight.QuickSightRestoreAnalysisResponse = { ... }
```

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisResponse.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisResponse.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightRowInfo <a name="aws-cdk-sdk.quicksight.QuickSightRowInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRowInfo: quicksight.QuickSightRowInfo = { ... }
```

##### `rowsDropped`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRowInfo.property.rowsDropped"></a>

- *Type:* `number`

---

##### `rowsIngested`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRowInfo.property.rowsIngested"></a>

- *Type:* `number`

---

### QuickSightRowLevelPermissionDataSet <a name="aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightRowLevelPermissionDataSet: quicksight.QuickSightRowLevelPermissionDataSet = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet.property.arn"></a>

- *Type:* `string`

---

##### `permissionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet.property.permissionPolicy"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet.property.namespace"></a>

- *Type:* `string`

---

### QuickSightS3Parameters <a name="aws-cdk-sdk.quicksight.QuickSightS3Parameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightS3Parameters: quicksight.QuickSightS3Parameters = { ... }
```

##### `manifestFileLocation`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightS3Parameters.property.manifestFileLocation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightManifestFileLocation`](#aws-cdk-sdk.quicksight.QuickSightManifestFileLocation)

---

### QuickSightS3Source <a name="aws-cdk-sdk.quicksight.QuickSightS3Source"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightS3Source: quicksight.QuickSightS3Source = { ... }
```

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightS3Source.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `inputColumns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightS3Source.property.inputColumns"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightInputColumn`](#aws-cdk-sdk.quicksight.QuickSightInputColumn)[]

---

##### `uploadSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightS3Source.property.uploadSettings"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUploadSettings`](#aws-cdk-sdk.quicksight.QuickSightUploadSettings)

---

### QuickSightSearchAnalysesRequest <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSearchAnalysesRequest: quicksight.QuickSightSearchAnalysesRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSearchFilter`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSearchFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightSearchAnalysesResponse <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSearchAnalysesResponse: quicksight.QuickSightSearchAnalysesResponse = { ... }
```

##### `analysisSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesResponse.property.analysisSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSummary`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchAnalysesResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightSearchDashboardsRequest <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSearchDashboardsRequest: quicksight.QuickSightSearchDashboardsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `filters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSearchFilter`](#aws-cdk-sdk.quicksight.QuickSightDashboardSearchFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest.property.nextToken"></a>

- *Type:* `string`

---

### QuickSightSearchDashboardsResponse <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSearchDashboardsResponse: quicksight.QuickSightSearchDashboardsResponse = { ... }
```

##### `dashboardSummaryList`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsResponse.property.dashboardSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSummary`](#aws-cdk-sdk.quicksight.QuickSightDashboardSummary)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSearchDashboardsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightServiceNowParameters <a name="aws-cdk-sdk.quicksight.QuickSightServiceNowParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightServiceNowParameters: quicksight.QuickSightServiceNowParameters = { ... }
```

##### `siteBaseUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightServiceNowParameters.property.siteBaseUrl"></a>

- *Type:* `string`

---

### QuickSightSheet <a name="aws-cdk-sdk.quicksight.QuickSightSheet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSheet: quicksight.QuickSightSheet = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSheet.property.name"></a>

- *Type:* `string`

---

##### `sheetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSheet.property.sheetId"></a>

- *Type:* `string`

---

### QuickSightSheetControlsOption <a name="aws-cdk-sdk.quicksight.QuickSightSheetControlsOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSheetControlsOption: quicksight.QuickSightSheetControlsOption = { ... }
```

##### `visibilityState`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSheetControlsOption.property.visibilityState"></a>

- *Type:* `string`

---

### QuickSightSheetStyle <a name="aws-cdk-sdk.quicksight.QuickSightSheetStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSheetStyle: quicksight.QuickSightSheetStyle = { ... }
```

##### `tile`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSheetStyle.property.tile"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTileStyle`](#aws-cdk-sdk.quicksight.QuickSightTileStyle)

---

##### `tileLayout`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSheetStyle.property.tileLayout"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTileLayoutStyle`](#aws-cdk-sdk.quicksight.QuickSightTileLayoutStyle)

---

### QuickSightSnowflakeParameters <a name="aws-cdk-sdk.quicksight.QuickSightSnowflakeParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSnowflakeParameters: quicksight.QuickSightSnowflakeParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSnowflakeParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSnowflakeParameters.property.host"></a>

- *Type:* `string`

---

##### `warehouse`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSnowflakeParameters.property.warehouse"></a>

- *Type:* `string`

---

### QuickSightSparkParameters <a name="aws-cdk-sdk.quicksight.QuickSightSparkParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSparkParameters: quicksight.QuickSightSparkParameters = { ... }
```

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSparkParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSparkParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightSqlServerParameters <a name="aws-cdk-sdk.quicksight.QuickSightSqlServerParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSqlServerParameters: quicksight.QuickSightSqlServerParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSqlServerParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSqlServerParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSqlServerParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightSslProperties <a name="aws-cdk-sdk.quicksight.QuickSightSslProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightSslProperties: quicksight.QuickSightSslProperties = { ... }
```

##### `disableSsl`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightSslProperties.property.disableSsl"></a>

- *Type:* `boolean`

---

### QuickSightStringParameter <a name="aws-cdk-sdk.quicksight.QuickSightStringParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightStringParameter: quicksight.QuickSightStringParameter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightStringParameter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightStringParameter.property.values"></a>

- *Type:* `string`[]

---

### QuickSightTag <a name="aws-cdk-sdk.quicksight.QuickSightTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTag: quicksight.QuickSightTag = { ... }
```

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTag.property.value"></a>

- *Type:* `string`

---

### QuickSightTagColumnOperation <a name="aws-cdk-sdk.quicksight.QuickSightTagColumnOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTagColumnOperation: quicksight.QuickSightTagColumnOperation = { ... }
```

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTagColumnOperation.property.columnName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTagColumnOperation.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnTag`](#aws-cdk-sdk.quicksight.QuickSightColumnTag)[]

---

### QuickSightTagResourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTagResourceRequest: quicksight.QuickSightTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTagResourceRequest.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---

### QuickSightTagResourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTagResourceResponse: quicksight.QuickSightTagResourceResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTagResourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTagResourceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightTemplate <a name="aws-cdk-sdk.quicksight.QuickSightTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplate: quicksight.QuickSightTemplate = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplate.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplate.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplate.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplate.property.name"></a>

- *Type:* `string`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplate.property.templateId"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplate.property.version"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateVersion`](#aws-cdk-sdk.quicksight.QuickSightTemplateVersion)

---

### QuickSightTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightTemplateAlias"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateAlias: quicksight.QuickSightTemplateAlias = { ... }
```

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateAlias.property.arn"></a>

- *Type:* `string`

---

##### `templateVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateAlias.property.templateVersionNumber"></a>

- *Type:* `number`

---

### QuickSightTemplateError <a name="aws-cdk-sdk.quicksight.QuickSightTemplateError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateError: quicksight.QuickSightTemplateError = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateError.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateError.property.type"></a>

- *Type:* `string`

---

### QuickSightTemplateSourceAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceAnalysis"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateSourceAnalysis: quicksight.QuickSightTemplateSourceAnalysis = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `dataSetReferences`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceAnalysis.property.dataSetReferences"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetReference`](#aws-cdk-sdk.quicksight.QuickSightDataSetReference)[]

---

### QuickSightTemplateSourceEntity <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateSourceEntity: quicksight.QuickSightTemplateSourceEntity = { ... }
```

##### `sourceAnalysis`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity.property.sourceAnalysis"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateSourceAnalysis`](#aws-cdk-sdk.quicksight.QuickSightTemplateSourceAnalysis)

---

##### `sourceTemplate`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity.property.sourceTemplate"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateSourceTemplate`](#aws-cdk-sdk.quicksight.QuickSightTemplateSourceTemplate)

---

### QuickSightTemplateSourceTemplate <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceTemplate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateSourceTemplate: quicksight.QuickSightTemplateSourceTemplate = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSourceTemplate.property.arn"></a>

- *Type:* `string`

---

### QuickSightTemplateSummary <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateSummary: quicksight.QuickSightTemplateSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary.property.latestVersionNumber"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary.property.name"></a>

- *Type:* `string`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateSummary.property.templateId"></a>

- *Type:* `string`

---

### QuickSightTemplateVersion <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateVersion: quicksight.QuickSightTemplateVersion = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.dataSetConfigurations"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration`](#aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.description"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateError`](#aws-cdk-sdk.quicksight.QuickSightTemplateError)[]

---

##### `sheets`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.sheets"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheet`](#aws-cdk-sdk.quicksight.QuickSightSheet)[]

---

##### `sourceEntityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.sourceEntityArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.status"></a>

- *Type:* `string`

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.themeArn"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersion.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightTemplateVersionSummary <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTemplateVersionSummary: quicksight.QuickSightTemplateVersionSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightTeradataParameters <a name="aws-cdk-sdk.quicksight.QuickSightTeradataParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTeradataParameters: quicksight.QuickSightTeradataParameters = { ... }
```

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTeradataParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTeradataParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTeradataParameters.property.port"></a>

- *Type:* `number`

---

### QuickSightTheme <a name="aws-cdk-sdk.quicksight.QuickSightTheme"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTheme: quicksight.QuickSightTheme = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.name"></a>

- *Type:* `string`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.themeId"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTheme.property.version"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeVersion`](#aws-cdk-sdk.quicksight.QuickSightThemeVersion)

---

### QuickSightThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightThemeAlias"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightThemeAlias: quicksight.QuickSightThemeAlias = { ... }
```

##### `aliasName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeAlias.property.arn"></a>

- *Type:* `string`

---

##### `themeVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeAlias.property.themeVersionNumber"></a>

- *Type:* `number`

---

### QuickSightThemeConfiguration <a name="aws-cdk-sdk.quicksight.QuickSightThemeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightThemeConfiguration: quicksight.QuickSightThemeConfiguration = { ... }
```

##### `dataColorPalette`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeConfiguration.property.dataColorPalette"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataColorPalette`](#aws-cdk-sdk.quicksight.QuickSightDataColorPalette)

---

##### `sheet`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeConfiguration.property.sheet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheetStyle`](#aws-cdk-sdk.quicksight.QuickSightSheetStyle)

---

##### `uiColorPalette`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeConfiguration.property.uiColorPalette"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUiColorPalette`](#aws-cdk-sdk.quicksight.QuickSightUiColorPalette)

---

### QuickSightThemeError <a name="aws-cdk-sdk.quicksight.QuickSightThemeError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightThemeError: quicksight.QuickSightThemeError = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeError.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeError.property.type"></a>

- *Type:* `string`

---

### QuickSightThemeSummary <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightThemeSummary: quicksight.QuickSightThemeSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary.property.latestVersionNumber"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary.property.name"></a>

- *Type:* `string`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeSummary.property.themeId"></a>

- *Type:* `string`

---

### QuickSightThemeVersion <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightThemeVersion: quicksight.QuickSightThemeVersion = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.arn"></a>

- *Type:* `string`

---

##### `baseThemeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.baseThemeId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeConfiguration`](#aws-cdk-sdk.quicksight.QuickSightThemeConfiguration)

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.description"></a>

- *Type:* `string`

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeError`](#aws-cdk-sdk.quicksight.QuickSightThemeError)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersion.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightThemeVersionSummary <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightThemeVersionSummary: quicksight.QuickSightThemeVersionSummary = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary.property.description"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightTileLayoutStyle <a name="aws-cdk-sdk.quicksight.QuickSightTileLayoutStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTileLayoutStyle: quicksight.QuickSightTileLayoutStyle = { ... }
```

##### `gutter`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTileLayoutStyle.property.gutter"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGutterStyle`](#aws-cdk-sdk.quicksight.QuickSightGutterStyle)

---

##### `margin`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTileLayoutStyle.property.margin"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightMarginStyle`](#aws-cdk-sdk.quicksight.QuickSightMarginStyle)

---

### QuickSightTileStyle <a name="aws-cdk-sdk.quicksight.QuickSightTileStyle"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTileStyle: quicksight.QuickSightTileStyle = { ... }
```

##### `border`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTileStyle.property.border"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightBorderStyle`](#aws-cdk-sdk.quicksight.QuickSightBorderStyle)

---

### QuickSightTransformOperation <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTransformOperation: quicksight.QuickSightTransformOperation = { ... }
```

##### `castColumnTypeOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation.property.castColumnTypeOperation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCastColumnTypeOperation`](#aws-cdk-sdk.quicksight.QuickSightCastColumnTypeOperation)

---

##### `createColumnsOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation.property.createColumnsOperation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateColumnsOperation`](#aws-cdk-sdk.quicksight.QuickSightCreateColumnsOperation)

---

##### `filterOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation.property.filterOperation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightFilterOperation`](#aws-cdk-sdk.quicksight.QuickSightFilterOperation)

---

##### `projectOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation.property.projectOperation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightProjectOperation`](#aws-cdk-sdk.quicksight.QuickSightProjectOperation)

---

##### `renameColumnOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation.property.renameColumnOperation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRenameColumnOperation`](#aws-cdk-sdk.quicksight.QuickSightRenameColumnOperation)

---

##### `tagColumnOperation`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTransformOperation.property.tagColumnOperation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTagColumnOperation`](#aws-cdk-sdk.quicksight.QuickSightTagColumnOperation)

---

### QuickSightTwitterParameters <a name="aws-cdk-sdk.quicksight.QuickSightTwitterParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightTwitterParameters: quicksight.QuickSightTwitterParameters = { ... }
```

##### `maxRows`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTwitterParameters.property.maxRows"></a>

- *Type:* `number`

---

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightTwitterParameters.property.query"></a>

- *Type:* `string`

---

### QuickSightUiColorPalette <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUiColorPalette: quicksight.QuickSightUiColorPalette = { ... }
```

##### `accent`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.accent"></a>

- *Type:* `string`

---

##### `accentForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.accentForeground"></a>

- *Type:* `string`

---

##### `danger`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.danger"></a>

- *Type:* `string`

---

##### `dangerForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.dangerForeground"></a>

- *Type:* `string`

---

##### `dimension`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.dimension"></a>

- *Type:* `string`

---

##### `dimensionForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.dimensionForeground"></a>

- *Type:* `string`

---

##### `measure`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.measure"></a>

- *Type:* `string`

---

##### `measureForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.measureForeground"></a>

- *Type:* `string`

---

##### `primaryBackground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.primaryBackground"></a>

- *Type:* `string`

---

##### `primaryForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.primaryForeground"></a>

- *Type:* `string`

---

##### `secondaryBackground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.secondaryBackground"></a>

- *Type:* `string`

---

##### `secondaryForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.secondaryForeground"></a>

- *Type:* `string`

---

##### `success`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.success"></a>

- *Type:* `string`

---

##### `successForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.successForeground"></a>

- *Type:* `string`

---

##### `warning`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.warning"></a>

- *Type:* `string`

---

##### `warningForeground`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUiColorPalette.property.warningForeground"></a>

- *Type:* `string`

---

### QuickSightUntagResourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUntagResourceRequest: quicksight.QuickSightUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### QuickSightUntagResourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUntagResourceResponse: quicksight.QuickSightUntagResourceResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUntagResourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUntagResourceResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateAccountCustomizationRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAccountCustomizationRequest: quicksight.QuickSightUpdateAccountCustomizationRequest = { ... }
```

##### `accountCustomization`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightAccountCustomization)

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest.property.namespace"></a>

- *Type:* `string`

---

### QuickSightUpdateAccountCustomizationResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAccountCustomizationResponse: quicksight.QuickSightUpdateAccountCustomizationResponse = { ... }
```

##### `accountCustomization`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightAccountCustomization)

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse.property.namespace"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateAccountSettingsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAccountSettingsRequest: quicksight.QuickSightUpdateAccountSettingsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `defaultNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest.property.defaultNamespace"></a>

- *Type:* `string`

---

##### `notificationEmail`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest.property.notificationEmail"></a>

- *Type:* `string`

---

### QuickSightUpdateAccountSettingsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAccountSettingsResponse: quicksight.QuickSightUpdateAccountSettingsResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateAnalysisPermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAnalysisPermissionsRequest: quicksight.QuickSightUpdateAnalysisPermissionsRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `grantPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest.property.grantPermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `revokePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest.property.revokePermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

### QuickSightUpdateAnalysisPermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAnalysisPermissionsResponse: quicksight.QuickSightUpdateAnalysisPermissionsResponse = { ... }
```

##### `analysisArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsResponse.property.analysisArn"></a>

- *Type:* `string`

---

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsResponse.property.analysisId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateAnalysisRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAnalysisRequest: quicksight.QuickSightUpdateAnalysisRequest = { ... }
```

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest.property.analysisId"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest.property.name"></a>

- *Type:* `string`

---

##### `sourceEntity`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest.property.sourceEntity"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSourceEntity`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSourceEntity)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightParameters`](#aws-cdk-sdk.quicksight.QuickSightParameters)

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest.property.themeArn"></a>

- *Type:* `string`

---

### QuickSightUpdateAnalysisResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateAnalysisResponse: quicksight.QuickSightUpdateAnalysisResponse = { ... }
```

##### `analysisId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisResponse.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisResponse.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisResponse.property.status"></a>

- *Type:* `number`

---

##### `updateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisResponse.property.updateStatus"></a>

- *Type:* `string`

---

### QuickSightUpdateDashboardPermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDashboardPermissionsRequest: quicksight.QuickSightUpdateDashboardPermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `grantPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest.property.grantPermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `revokePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest.property.revokePermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

### QuickSightUpdateDashboardPermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDashboardPermissionsResponse: quicksight.QuickSightUpdateDashboardPermissionsResponse = { ... }
```

##### `dashboardArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsResponse.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateDashboardPublishedVersionRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDashboardPublishedVersionRequest: quicksight.QuickSightUpdateDashboardPublishedVersionRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest.property.versionNumber"></a>

- *Type:* `number`

---

### QuickSightUpdateDashboardPublishedVersionResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDashboardPublishedVersionResponse: quicksight.QuickSightUpdateDashboardPublishedVersionResponse = { ... }
```

##### `dashboardArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionResponse.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateDashboardRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDashboardRequest: quicksight.QuickSightUpdateDashboardRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.dashboardId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.name"></a>

- *Type:* `string`

---

##### `sourceEntity`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.sourceEntity"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSourceEntity`](#aws-cdk-sdk.quicksight.QuickSightDashboardSourceEntity)

---

##### `dashboardPublishOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.dashboardPublishOptions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions`](#aws-cdk-sdk.quicksight.QuickSightDashboardPublishOptions)

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightParameters`](#aws-cdk-sdk.quicksight.QuickSightParameters)

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.themeArn"></a>

- *Type:* `string`

---

##### `versionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest.property.versionDescription"></a>

- *Type:* `string`

---

### QuickSightUpdateDashboardResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDashboardResponse: quicksight.QuickSightUpdateDashboardResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse.property.status"></a>

- *Type:* `number`

---

##### `versionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDashboardResponse.property.versionArn"></a>

- *Type:* `string`

---

### QuickSightUpdateDataSetPermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSetPermissionsRequest: quicksight.QuickSightUpdateDataSetPermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `grantPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest.property.grantPermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `revokePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest.property.revokePermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

### QuickSightUpdateDataSetPermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSetPermissionsResponse: quicksight.QuickSightUpdateDataSetPermissionsResponse = { ... }
```

##### `dataSetArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsResponse.property.dataSetArn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateDataSetRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSetRequest: quicksight.QuickSightUpdateDataSetRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.dataSetId"></a>

- *Type:* `string`

---

##### `importMode`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.importMode"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.name"></a>

- *Type:* `string`

---

##### `physicalTableMap`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.physicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightPhysicalTable`](#aws-cdk-sdk.quicksight.QuickSightPhysicalTable)}

---

##### `columnGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.columnGroups"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnGroup`](#aws-cdk-sdk.quicksight.QuickSightColumnGroup)[]

---

##### `columnLevelPermissionRules`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.columnLevelPermissionRules"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule`](#aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule)[]

---

##### `logicalTableMap`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.logicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightLogicalTable`](#aws-cdk-sdk.quicksight.QuickSightLogicalTable)}

---

##### `rowLevelPermissionDataSet`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest.property.rowLevelPermissionDataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet`](#aws-cdk-sdk.quicksight.QuickSightRowLevelPermissionDataSet)

---

### QuickSightUpdateDataSetResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSetResponse: quicksight.QuickSightUpdateDataSetResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse.property.arn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse.property.ingestionArn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse.property.ingestionId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSetResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateDataSourcePermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSourcePermissionsRequest: quicksight.QuickSightUpdateDataSourcePermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest.property.dataSourceId"></a>

- *Type:* `string`

---

##### `grantPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest.property.grantPermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `revokePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest.property.revokePermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

### QuickSightUpdateDataSourcePermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSourcePermissionsResponse: quicksight.QuickSightUpdateDataSourcePermissionsResponse = { ... }
```

##### `dataSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsResponse.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsResponse.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateDataSourceRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSourceRequest: quicksight.QuickSightUpdateDataSourceRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.dataSourceId"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.name"></a>

- *Type:* `string`

---

##### `credentials`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.credentials"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials`](#aws-cdk-sdk.quicksight.QuickSightDataSourceCredentials)

---

##### `dataSourceParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.dataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightDataSourceParameters)

---

##### `sslProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.sslProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSslProperties`](#aws-cdk-sdk.quicksight.QuickSightSslProperties)

---

##### `vpcConnectionProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest.property.vpcConnectionProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties`](#aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties)

---

### QuickSightUpdateDataSourceResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateDataSourceResponse: quicksight.QuickSightUpdateDataSourceResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceResponse.property.arn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceResponse.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceResponse.property.status"></a>

- *Type:* `number`

---

##### `updateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceResponse.property.updateStatus"></a>

- *Type:* `string`

---

### QuickSightUpdateGroupRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateGroupRequest: quicksight.QuickSightUpdateGroupRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest.property.groupName"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest.property.namespace"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest.property.description"></a>

- *Type:* `string`

---

### QuickSightUpdateGroupResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateGroupResponse: quicksight.QuickSightUpdateGroupResponse = { ... }
```

##### `group`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupResponse.property.group"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateGroupResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateIamPolicyAssignmentRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateIamPolicyAssignmentRequest: quicksight.QuickSightUpdateIamPolicyAssignmentRequest = { ... }
```

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest.property.assignmentName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest.property.namespace"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `identities`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest.property.policyArn"></a>

- *Type:* `string`

---

### QuickSightUpdateIamPolicyAssignmentResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateIamPolicyAssignmentResponse: quicksight.QuickSightUpdateIamPolicyAssignmentResponse = { ... }
```

##### `assignmentId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.assignmentId"></a>

- *Type:* `string`

---

##### `assignmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `identities`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.policyArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentResponse.property.status"></a>

- *Type:* `number`

---

### QuickSightUpdateTemplateAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateTemplateAliasRequest: quicksight.QuickSightUpdateTemplateAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest.property.templateId"></a>

- *Type:* `string`

---

##### `templateVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest.property.templateVersionNumber"></a>

- *Type:* `number`

---

### QuickSightUpdateTemplateAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateTemplateAliasResponse: quicksight.QuickSightUpdateTemplateAliasResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `templateAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasResponse.property.templateAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightTemplateAlias)

---

### QuickSightUpdateTemplatePermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateTemplatePermissionsRequest: quicksight.QuickSightUpdateTemplatePermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest.property.templateId"></a>

- *Type:* `string`

---

##### `grantPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest.property.grantPermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `revokePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest.property.revokePermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

### QuickSightUpdateTemplatePermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateTemplatePermissionsResponse: quicksight.QuickSightUpdateTemplatePermissionsResponse = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsResponse.property.status"></a>

- *Type:* `number`

---

##### `templateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsResponse.property.templateArn"></a>

- *Type:* `string`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsResponse.property.templateId"></a>

- *Type:* `string`

---

### QuickSightUpdateTemplateRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateTemplateRequest: quicksight.QuickSightUpdateTemplateRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `sourceEntity`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest.property.sourceEntity"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity`](#aws-cdk-sdk.quicksight.QuickSightTemplateSourceEntity)

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest.property.templateId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest.property.name"></a>

- *Type:* `string`

---

##### `versionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest.property.versionDescription"></a>

- *Type:* `string`

---

### QuickSightUpdateTemplateResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateTemplateResponse: quicksight.QuickSightUpdateTemplateResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse.property.templateId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateTemplateResponse.property.versionArn"></a>

- *Type:* `string`

---

### QuickSightUpdateThemeAliasRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateThemeAliasRequest: quicksight.QuickSightUpdateThemeAliasRequest = { ... }
```

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest.property.aliasName"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest.property.themeId"></a>

- *Type:* `string`

---

##### `themeVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest.property.themeVersionNumber"></a>

- *Type:* `number`

---

### QuickSightUpdateThemeAliasResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateThemeAliasResponse: quicksight.QuickSightUpdateThemeAliasResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasResponse.property.status"></a>

- *Type:* `number`

---

##### `themeAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasResponse.property.themeAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightThemeAlias)

---

### QuickSightUpdateThemePermissionsRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateThemePermissionsRequest: quicksight.QuickSightUpdateThemePermissionsRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest.property.themeId"></a>

- *Type:* `string`

---

##### `grantPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest.property.grantPermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `revokePermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest.property.revokePermissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

### QuickSightUpdateThemePermissionsResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateThemePermissionsResponse: quicksight.QuickSightUpdateThemePermissionsResponse = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsResponse.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsResponse.property.status"></a>

- *Type:* `number`

---

##### `themeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsResponse.property.themeArn"></a>

- *Type:* `string`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsResponse.property.themeId"></a>

- *Type:* `string`

---

### QuickSightUpdateThemeRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateThemeRequest: quicksight.QuickSightUpdateThemeRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `baseThemeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest.property.baseThemeId"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest.property.themeId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeConfiguration`](#aws-cdk-sdk.quicksight.QuickSightThemeConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest.property.name"></a>

- *Type:* `string`

---

##### `versionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest.property.versionDescription"></a>

- *Type:* `string`

---

### QuickSightUpdateThemeResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateThemeResponse: quicksight.QuickSightUpdateThemeResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse.property.themeId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateThemeResponse.property.versionArn"></a>

- *Type:* `string`

---

### QuickSightUpdateUserRequest <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateUserRequest: quicksight.QuickSightUpdateUserRequest = { ... }
```

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.awsAccountId"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.email"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.namespace"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.role"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.userName"></a>

- *Type:* `string`

---

##### `customPermissionsName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.customPermissionsName"></a>

- *Type:* `string`

---

##### `unapplyCustomPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest.property.unapplyCustomPermissions"></a>

- *Type:* `boolean`

---

### QuickSightUpdateUserResponse <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUpdateUserResponse: quicksight.QuickSightUpdateUserResponse = { ... }
```

##### `requestId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserResponse.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserResponse.property.status"></a>

- *Type:* `number`

---

##### `user`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUpdateUserResponse.property.user"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUser`](#aws-cdk-sdk.quicksight.QuickSightUser)

---

### QuickSightUploadSettings <a name="aws-cdk-sdk.quicksight.QuickSightUploadSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUploadSettings: quicksight.QuickSightUploadSettings = { ... }
```

##### `containsHeader`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUploadSettings.property.containsHeader"></a>

- *Type:* `boolean`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUploadSettings.property.delimiter"></a>

- *Type:* `string`

---

##### `format`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUploadSettings.property.format"></a>

- *Type:* `string`

---

##### `startFromRow`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUploadSettings.property.startFromRow"></a>

- *Type:* `number`

---

##### `textQualifier`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUploadSettings.property.textQualifier"></a>

- *Type:* `string`

---

### QuickSightUser <a name="aws-cdk-sdk.quicksight.QuickSightUser"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightUser: quicksight.QuickSightUser = { ... }
```

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.active"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.arn"></a>

- *Type:* `string`

---

##### `customPermissionsName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.customPermissionsName"></a>

- *Type:* `string`

---

##### `email`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.email"></a>

- *Type:* `string`

---

##### `identityType`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.identityType"></a>

- *Type:* `string`

---

##### `principalId`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.principalId"></a>

- *Type:* `string`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.role"></a>

- *Type:* `string`

---

##### `userName`<sup>Optional</sup> <a name="aws-cdk-sdk.quicksight.QuickSightUser.property.userName"></a>

- *Type:* `string`

---

### QuickSightVpcConnectionProperties <a name="aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

const quickSightVpcConnectionProperties: quicksight.QuickSightVpcConnectionProperties = { ... }
```

##### `vpcConnectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightVpcConnectionProperties.property.vpcConnectionArn"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### QuickSightResponsesCancelIngestion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCancelIngestion(__scope: Construct, __resources: string[], __input: QuickSightCancelIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightCancelIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.property.arn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.property.ingestionId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCancelIngestion.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightCreateAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountCustomization`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.property.namespace"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomization.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateAccountCustomizationAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightCreateAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultTheme`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAccountCustomizationAccountCustomization.property.defaultTheme"></a>

- *Type:* `string`

---


### QuickSightResponsesCreateAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateAnalysis(__scope: Construct, __resources: string[], __input: QuickSightCreateAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateAnalysis.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateDashboard <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateDashboard(__scope: Construct, __resources: string[], __input: QuickSightCreateDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.property.creationStatus"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.property.status"></a>

- *Type:* `number`

---

##### `versionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDashboard.property.versionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesCreateDataSet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateDataSet(__scope: Construct, __resources: string[], __input: QuickSightCreateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.property.arn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.property.ingestionArn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.property.ingestionId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSet.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateDataSource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateDataSource(__scope: Construct, __resources: string[], __input: QuickSightCreateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.property.creationStatus"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateDataSource.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateGroup(__scope: Construct, __resources: string[], __input: QuickSightCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup`](#aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroup.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateGroupGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateGroupGroup(__scope: Construct, __resources: string[], __input: QuickSightCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupGroup.property.principalId"></a>

- *Type:* `string`

---


### QuickSightResponsesCreateGroupMembership <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateGroupMembership(__scope: Construct, __resources: string[], __input: QuickSightCreateGroupMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `groupMember`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.property.groupMember"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember`](#aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembership.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateGroupMembershipGroupMember <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateGroupMembershipGroupMember(__scope: Construct, __resources: string[], __input: QuickSightCreateGroupMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateGroupMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember.property.arn"></a>

- *Type:* `string`

---

##### `memberName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateGroupMembershipGroupMember.property.memberName"></a>

- *Type:* `string`

---


### QuickSightResponsesCreateIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateIamPolicyAssignment(__scope: Construct, __resources: string[], __input: QuickSightCreateIamPolicyAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateIamPolicyAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `assignmentId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.assignmentId"></a>

- *Type:* `string`

---

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `identities`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.policyArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIamPolicyAssignment.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateIngestion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateIngestion(__scope: Construct, __resources: string[], __input: QuickSightCreateIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.property.arn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.property.ingestionId"></a>

- *Type:* `string`

---

##### `ingestionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.property.ingestionStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateIngestion.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateNamespace <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateNamespace(__scope: Construct, __resources: string[], __input: QuickSightCreateNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.arn"></a>

- *Type:* `string`

---

##### `capacityRegion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.capacityRegion"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.creationStatus"></a>

- *Type:* `string`

---

##### `identityStore`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.identityStore"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.name"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateNamespace.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateTemplate <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateTemplate(__scope: Construct, __resources: string[], __input: QuickSightCreateTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.property.templateId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplate.property.versionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesCreateTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightCreateTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.property.status"></a>

- *Type:* `number`

---

##### `templateAlias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAlias.property.templateAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias)

---


### QuickSightResponsesCreateTemplateAliasTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightCreateTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.property.arn"></a>

- *Type:* `string`

---

##### `templateVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTemplateAliasTemplateAlias.property.templateVersionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesCreateTheme <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateTheme(__scope: Construct, __resources: string[], __input: QuickSightCreateThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.property.themeId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateTheme.property.versionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesCreateThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightCreateThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.property.status"></a>

- *Type:* `number`

---

##### `themeAlias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAlias.property.themeAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias)

---


### QuickSightResponsesCreateThemeAliasThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesCreateThemeAliasThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightCreateThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightCreateThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.property.arn"></a>

- *Type:* `string`

---

##### `themeVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesCreateThemeAliasThemeAlias.property.themeVersionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightDeleteAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAccountCustomization.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteAnalysis(__scope: Construct, __resources: string[], __input: QuickSightDeleteAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `deletionTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.property.deletionTime"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteAnalysis.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteDashboard <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteDashboard(__scope: Construct, __resources: string[], __input: QuickSightDeleteDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.property.arn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDashboard.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteDataSet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteDataSet(__scope: Construct, __resources: string[], __input: QuickSightDeleteDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.property.arn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.property.dataSetId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSet.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteDataSource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteDataSource(__scope: Construct, __resources: string[], __input: QuickSightDeleteDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.property.arn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteDataSource.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteGroup(__scope: Construct, __resources: string[], __input: QuickSightDeleteGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroup.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteGroupMembership <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteGroupMembership(__scope: Construct, __resources: string[], __input: QuickSightDeleteGroupMembershipRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteGroupMembershipRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteGroupMembership.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteIamPolicyAssignment(__scope: Construct, __resources: string[], __input: QuickSightDeleteIamPolicyAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteIamPolicyAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.property.assignmentName"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteIamPolicyAssignment.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteNamespace <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteNamespace(__scope: Construct, __resources: string[], __input: QuickSightDeleteNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteNamespace.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteTemplate <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteTemplate(__scope: Construct, __resources: string[], __input: QuickSightDeleteTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplate.property.templateId"></a>

- *Type:* `string`

---


### QuickSightResponsesDeleteTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightDeleteTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTemplateAlias.property.templateId"></a>

- *Type:* `string`

---


### QuickSightResponsesDeleteTheme <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteTheme(__scope: Construct, __resources: string[], __input: QuickSightDeleteThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteTheme.property.themeId"></a>

- *Type:* `string`

---


### QuickSightResponsesDeleteThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightDeleteThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteThemeAlias.property.themeId"></a>

- *Type:* `string`

---


### QuickSightResponsesDeleteUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteUser(__scope: Construct, __resources: string[], __input: QuickSightDeleteUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteUserRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUser.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDeleteUserByPrincipalId <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDeleteUserByPrincipalId(__scope: Construct, __resources: string[], __input: QuickSightDeleteUserByPrincipalIdRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest`](#aws-cdk-sdk.quicksight.QuickSightDeleteUserByPrincipalIdRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDeleteUserByPrincipalId.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightDescribeAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountCustomization`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.property.namespace"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomization.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeAccountCustomizationAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightDescribeAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultTheme`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountCustomizationAccountCustomization.property.defaultTheme"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeAccountSettings <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAccountSettings(__scope: Construct, __resources: string[], __input: QuickSightDescribeAccountSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `accountSettings`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.property.accountSettings"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettings.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeAccountSettingsAccountSettings <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings(__scope: Construct, __resources: string[], __input: QuickSightDescribeAccountSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAccountSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `accountName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.property.accountName"></a>

- *Type:* `string`

---

##### `defaultNamespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.property.defaultNamespace"></a>

- *Type:* `string`

---

##### `edition`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.property.edition"></a>

- *Type:* `string`

---

##### `notificationEmail`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAccountSettingsAccountSettings.property.notificationEmail"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAnalysis(__scope: Construct, __resources: string[], __input: QuickSightDescribeAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analysis`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.property.analysis"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysis.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeAnalysisAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAnalysisAnalysis(__scope: Construct, __resources: string[], __input: QuickSightDescribeAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetArns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.dataSetArns"></a>

- *Type:* `string`[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisError`](#aws-cdk-sdk.quicksight.QuickSightAnalysisError)[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.name"></a>

- *Type:* `string`

---

##### `sheets`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.sheets"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheet`](#aws-cdk-sdk.quicksight.QuickSightSheet)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.status"></a>

- *Type:* `string`

---

##### `themeArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisAnalysis.property.themeArn"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeAnalysisPermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeAnalysisPermissions(__scope: Construct, __resources: string[], __input: QuickSightDescribeAnalysisPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeAnalysisPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.property.analysisArn"></a>

- *Type:* `string`

---

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.property.analysisId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeAnalysisPermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDashboard <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDashboard(__scope: Construct, __resources: string[], __input: QuickSightDescribeDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboard`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.property.dashboard"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboard.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDashboardDashboard <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDashboardDashboard(__scope: Construct, __resources: string[], __input: QuickSightDescribeDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.createdTime"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.dashboardId"></a>

- *Type:* `string`

---

##### `lastPublishedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.lastPublishedTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboard.property.version"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion)

---


### QuickSightResponsesDescribeDashboardDashboardVersion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDashboardDashboardVersion(__scope: Construct, __resources: string[], __input: QuickSightDescribeDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetArns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.dataSetArns"></a>

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.description"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardError`](#aws-cdk-sdk.quicksight.QuickSightDashboardError)[]

---

##### `sheets`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.sheets"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheet`](#aws-cdk-sdk.quicksight.QuickSightSheet)[]

---

##### `sourceEntityArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.sourceEntityArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.status"></a>

- *Type:* `string`

---

##### `themeArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.themeArn"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardDashboardVersion.property.versionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDashboardPermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDashboardPermissions(__scope: Construct, __resources: string[], __input: QuickSightDescribeDashboardPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDashboardPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.property.dashboardId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDashboardPermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSet(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSet`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.property.dataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSet.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSetDataSet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSetDataSet(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.arn"></a>

- *Type:* `string`

---

##### `columnGroups`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.columnGroups"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnGroup`](#aws-cdk-sdk.quicksight.QuickSightColumnGroup)[]

---

##### `columnLevelPermissionRules`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.columnLevelPermissionRules"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule`](#aws-cdk-sdk.quicksight.QuickSightColumnLevelPermissionRule)[]

---

##### `consumedSpiceCapacityInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.consumedSpiceCapacityInBytes"></a>

- *Type:* `number`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.dataSetId"></a>

- *Type:* `string`

---

##### `importMode`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.importMode"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `logicalTableMap`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.logicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightLogicalTable`](#aws-cdk-sdk.quicksight.QuickSightLogicalTable)}

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.name"></a>

- *Type:* `string`

---

##### `outputColumns`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.outputColumns"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightOutputColumn`](#aws-cdk-sdk.quicksight.QuickSightOutputColumn)[]

---

##### `physicalTableMap`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.physicalTableMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.quicksight.QuickSightPhysicalTable`](#aws-cdk-sdk.quicksight.QuickSightPhysicalTable)}

---

##### `rowLevelPermissionDataSet`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSet.property.rowLevelPermissionDataSet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet)

---


### QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.property.arn"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.property.namespace"></a>

- *Type:* `string`

---

##### `permissionPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetDataSetRowLevelPermissionDataSet.property.permissionPolicy"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSetPermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSetPermissions(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSetPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSetPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.property.dataSetArn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.property.dataSetId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSetPermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSource(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSource`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.property.dataSource"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSource.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSource(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `alternateDataSourceParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.alternateDataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightDataSourceParameters)[]

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `dataSourceParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.dataSourceParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters)

---

##### `errorInfo`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo)

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.name"></a>

- *Type:* `string`

---

##### `sslProperties`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.sslProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.status"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.type"></a>

- *Type:* `string`

---

##### `vpcConnectionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSource.property.vpcConnectionProperties"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties)

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `amazonElasticsearchParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.amazonElasticsearchParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters)

---

##### `athenaParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.athenaParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters)

---

##### `auroraParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.auroraParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters)

---

##### `auroraPostgreSqlParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.auroraPostgreSqlParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters)

---

##### `awsIotAnalyticsParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.awsIotAnalyticsParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters)

---

##### `jiraParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.jiraParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters)

---

##### `mariaDbParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.mariaDbParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters)

---

##### `mySqlParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.mySqlParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters)

---

##### `oracleParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.oracleParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters)

---

##### `postgreSqlParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.postgreSqlParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters)

---

##### `prestoParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.prestoParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters)

---

##### `rdsParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.rdsParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters)

---

##### `redshiftParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.redshiftParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters)

---

##### `s3Parameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.s3Parameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters)

---

##### `serviceNowParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.serviceNowParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters)

---

##### `snowflakeParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.snowflakeParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters)

---

##### `sparkParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.sparkParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters)

---

##### `sqlServerParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.sqlServerParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters)

---

##### `teradataParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.teradataParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters)

---

##### `twitterParameters`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParameters.property.twitterParameters"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters)

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `domain`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAmazonElasticsearchParameters.property.domain"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `workGroup`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAthenaParameters.property.workGroup"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAuroraPostgreSqlParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSetName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersAwsIotAnalyticsParameters.property.dataSetName"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `siteBaseUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersJiraParameters.property.siteBaseUrl"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMariaDbParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersMySqlParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersOracleParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPostgreSqlParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `catalog`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.property.catalog"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersPrestoParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters.property.database"></a>

- *Type:* `string`

---

##### `instanceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRdsParameters.property.instanceId"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.property.clusterId"></a>

- *Type:* `string`

---

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersRedshiftParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `manifestFileLocation`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3Parameters.property.manifestFileLocation"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation)

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersS3ParametersManifestFileLocation.property.key"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `siteBaseUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersServiceNowParameters.property.siteBaseUrl"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.property.host"></a>

- *Type:* `string`

---

##### `warehouse`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSnowflakeParameters.property.warehouse"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSparkParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersSqlServerParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.property.database"></a>

- *Type:* `string`

---

##### `host`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.property.host"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTeradataParameters.property.port"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `maxRows`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters.property.maxRows"></a>

- *Type:* `number`

---

##### `query`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceDataSourceParametersTwitterParameters.property.query"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceErrorInfo <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceErrorInfo.property.type"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourceDataSourceSslProperties <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `disableSsl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceSslProperties.property.disableSsl"></a>

- *Type:* `boolean`

---


### QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `vpcConnectionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourceDataSourceVpcConnectionProperties.property.vpcConnectionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeDataSourcePermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeDataSourcePermissions(__scope: Construct, __resources: string[], __input: QuickSightDescribeDataSourcePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeDataSourcePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.property.dataSourceId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeDataSourcePermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeGroup(__scope: Construct, __resources: string[], __input: QuickSightDescribeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroup.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeGroupGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeGroupGroup(__scope: Construct, __resources: string[], __input: QuickSightDescribeGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeGroupGroup.property.principalId"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIamPolicyAssignment(__scope: Construct, __resources: string[], __input: QuickSightDescribeIamPolicyAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `iamPolicyAssignment`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.property.iamPolicyAssignment"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignment.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment(__scope: Construct, __resources: string[], __input: QuickSightDescribeIamPolicyAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIamPolicyAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `assignmentId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.property.assignmentId"></a>

- *Type:* `string`

---

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.property.awsAccountId"></a>

- *Type:* `string`

---

##### `identities`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIamPolicyAssignmentIamPolicyAssignment.property.policyArn"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeIngestion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIngestion(__scope: Construct, __resources: string[], __input: QuickSightDescribeIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.property.ingestion"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestion.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeIngestionIngestion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIngestionIngestion(__scope: Construct, __resources: string[], __input: QuickSightDescribeIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.createdTime"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo)

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.ingestionId"></a>

- *Type:* `string`

---

##### `ingestionSizeInBytes`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.ingestionSizeInBytes"></a>

- *Type:* `number`

---

##### `ingestionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.ingestionStatus"></a>

- *Type:* `string`

---

##### `ingestionTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.ingestionTimeInSeconds"></a>

- *Type:* `number`

---

##### `queueInfo`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.queueInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo)

---

##### `requestSource`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.requestSource"></a>

- *Type:* `string`

---

##### `requestType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.requestType"></a>

- *Type:* `string`

---

##### `rowInfo`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestion.property.rowInfo"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo)

---


### QuickSightResponsesDescribeIngestionIngestionErrorInfo <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo(__scope: Construct, __resources: string[], __input: QuickSightDescribeIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionErrorInfo.property.type"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeIngestionIngestionQueueInfo <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo(__scope: Construct, __resources: string[], __input: QuickSightDescribeIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `queuedIngestion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo.property.queuedIngestion"></a>

- *Type:* `string`

---

##### `waitingOnIngestion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionQueueInfo.property.waitingOnIngestion"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeIngestionIngestionRowInfo <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo(__scope: Construct, __resources: string[], __input: QuickSightDescribeIngestionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeIngestionRequest)

---



#### Properties <a name="Properties"></a>

##### `rowsDropped`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo.property.rowsDropped"></a>

- *Type:* `number`

---

##### `rowsIngested`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeIngestionIngestionRowInfo.property.rowsIngested"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeNamespace <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeNamespace(__scope: Construct, __resources: string[], __input: QuickSightDescribeNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.property.namespace"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespace.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeNamespaceNamespace <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeNamespaceNamespace(__scope: Construct, __resources: string[], __input: QuickSightDescribeNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.property.arn"></a>

- *Type:* `string`

---

##### `capacityRegion`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.property.capacityRegion"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.property.creationStatus"></a>

- *Type:* `string`

---

##### `identityStore`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.property.identityStore"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.property.name"></a>

- *Type:* `string`

---

##### `namespaceError`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespace.property.namespaceError"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError)

---


### QuickSightResponsesDescribeNamespaceNamespaceNamespaceError <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError(__scope: Construct, __resources: string[], __input: QuickSightDescribeNamespaceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeNamespaceRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError.property.message"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeNamespaceNamespaceNamespaceError.property.type"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeTemplate <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTemplate(__scope: Construct, __resources: string[], __input: QuickSightDescribeTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.property.status"></a>

- *Type:* `number`

---

##### `template`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplate.property.template"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate)

---


### QuickSightResponsesDescribeTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightDescribeTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.property.status"></a>

- *Type:* `number`

---

##### `templateAlias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAlias.property.templateAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias)

---


### QuickSightResponsesDescribeTemplateAliasTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightDescribeTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.property.arn"></a>

- *Type:* `string`

---

##### `templateVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateAliasTemplateAlias.property.templateVersionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeTemplatePermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTemplatePermissions(__scope: Construct, __resources: string[], __input: QuickSightDescribeTemplatePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplatePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.property.status"></a>

- *Type:* `number`

---

##### `templateArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.property.templateArn"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplatePermissions.property.templateId"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeTemplateTemplate <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTemplateTemplate(__scope: Construct, __resources: string[], __input: QuickSightDescribeTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.property.name"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.property.templateId"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplate.property.version"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion)

---


### QuickSightResponsesDescribeTemplateTemplateVersion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTemplateTemplateVersion(__scope: Construct, __resources: string[], __input: QuickSightDescribeTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `dataSetConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.dataSetConfigurations"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration`](#aws-cdk-sdk.quicksight.QuickSightDataSetConfiguration)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.description"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateError`](#aws-cdk-sdk.quicksight.QuickSightTemplateError)[]

---

##### `sheets`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.sheets"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSheet`](#aws-cdk-sdk.quicksight.QuickSightSheet)[]

---

##### `sourceEntityArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.sourceEntityArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.status"></a>

- *Type:* `string`

---

##### `themeArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.themeArn"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTemplateTemplateVersion.property.versionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeTheme <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeTheme(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.property.status"></a>

- *Type:* `number`

---

##### `theme`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeTheme.property.theme"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme)

---


### QuickSightResponsesDescribeThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.property.status"></a>

- *Type:* `number`

---

##### `themeAlias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAlias.property.themeAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias)

---


### QuickSightResponsesDescribeThemeAliasThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.property.arn"></a>

- *Type:* `string`

---

##### `themeVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeAliasThemeAlias.property.themeVersionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeThemePermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemePermissions(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.property.status"></a>

- *Type:* `number`

---

##### `themeArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.property.themeArn"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemePermissions.property.themeId"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeThemeTheme <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeTheme(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.arn"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.createdTime"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.name"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.themeId"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.type"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeTheme.property.version"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion)

---


### QuickSightResponsesDescribeThemeThemeVersion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersion(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.arn"></a>

- *Type:* `string`

---

##### `baseThemeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.baseThemeId"></a>

- *Type:* `string`

---

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration)

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.description"></a>

- *Type:* `string`

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeError`](#aws-cdk-sdk.quicksight.QuickSightThemeError)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersion.property.versionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesDescribeThemeThemeVersionConfiguration <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `dataColorPalette`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.property.dataColorPalette"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette)

---

##### `sheet`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.property.sheet"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet)

---

##### `uiColorPalette`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfiguration.property.uiColorPalette"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette)

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `colors`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.property.colors"></a>

- *Type:* `string`[]

---

##### `emptyFillColor`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.property.emptyFillColor"></a>

- *Type:* `string`

---

##### `minMaxGradient`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationDataColorPalette.property.minMaxGradient"></a>

- *Type:* `string`[]

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `tile`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet.property.tile"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile)

---

##### `tileLayout`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheet.property.tileLayout"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout)

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `border`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTile.property.border"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder)

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `show`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileBorder.property.show"></a>

- *Type:* `boolean`

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `gutter`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout.property.gutter"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter)

---

##### `margin`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayout.property.margin"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin)

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `show`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutGutter.property.show"></a>

- *Type:* `boolean`

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `show`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationSheetTileLayoutMargin.property.show"></a>

- *Type:* `boolean`

---


### QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette(__scope: Construct, __resources: string[], __input: QuickSightDescribeThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `accent`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.accent"></a>

- *Type:* `string`

---

##### `accentForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.accentForeground"></a>

- *Type:* `string`

---

##### `danger`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.danger"></a>

- *Type:* `string`

---

##### `dangerForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.dangerForeground"></a>

- *Type:* `string`

---

##### `dimension`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.dimension"></a>

- *Type:* `string`

---

##### `dimensionForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.dimensionForeground"></a>

- *Type:* `string`

---

##### `measure`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.measure"></a>

- *Type:* `string`

---

##### `measureForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.measureForeground"></a>

- *Type:* `string`

---

##### `primaryBackground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.primaryBackground"></a>

- *Type:* `string`

---

##### `primaryForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.primaryForeground"></a>

- *Type:* `string`

---

##### `secondaryBackground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.secondaryBackground"></a>

- *Type:* `string`

---

##### `secondaryForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.secondaryForeground"></a>

- *Type:* `string`

---

##### `success`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.success"></a>

- *Type:* `string`

---

##### `successForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.successForeground"></a>

- *Type:* `string`

---

##### `warning`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.warning"></a>

- *Type:* `string`

---

##### `warningForeground`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeThemeThemeVersionConfigurationUiColorPalette.property.warningForeground"></a>

- *Type:* `string`

---


### QuickSightResponsesDescribeUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeUser(__scope: Construct, __resources: string[], __input: QuickSightDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.property.status"></a>

- *Type:* `number`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser`](#aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser)

---


### QuickSightResponsesDescribeUserUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesDescribeUserUser(__scope: Construct, __resources: string[], __input: QuickSightDescribeUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest`](#aws-cdk-sdk.quicksight.QuickSightDescribeUserRequest)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.active"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.arn"></a>

- *Type:* `string`

---

##### `customPermissionsName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.customPermissionsName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.email"></a>

- *Type:* `string`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.identityType"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.principalId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.role"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesDescribeUserUser.property.userName"></a>

- *Type:* `string`

---


### QuickSightResponsesFetchDashboardEmbedUrl <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesFetchDashboardEmbedUrl(__scope: Construct, __resources: string[], __input: QuickSightGetDashboardEmbedUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest`](#aws-cdk-sdk.quicksight.QuickSightGetDashboardEmbedUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `embedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.property.embedUrl"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchDashboardEmbedUrl.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesFetchSessionEmbedUrl <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesFetchSessionEmbedUrl(__scope: Construct, __resources: string[], __input: QuickSightGetSessionEmbedUrlRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest`](#aws-cdk-sdk.quicksight.QuickSightGetSessionEmbedUrlRequest)

---



#### Properties <a name="Properties"></a>

##### `embedUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.property.embedUrl"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesFetchSessionEmbedUrl.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListAnalyses <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListAnalyses(__scope: Construct, __resources: string[], __input: QuickSightListAnalysesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest`](#aws-cdk-sdk.quicksight.QuickSightListAnalysesRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.property.analysisSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSummary`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListAnalyses.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListDashboards <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListDashboards(__scope: Construct, __resources: string[], __input: QuickSightListDashboardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest`](#aws-cdk-sdk.quicksight.QuickSightListDashboardsRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.property.dashboardSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSummary`](#aws-cdk-sdk.quicksight.QuickSightDashboardSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboards.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListDashboardVersions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListDashboardVersions(__scope: Construct, __resources: string[], __input: QuickSightListDashboardVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListDashboardVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardVersionSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.property.dashboardVersionSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary`](#aws-cdk-sdk.quicksight.QuickSightDashboardVersionSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDashboardVersions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListDataSets <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListDataSets(__scope: Construct, __resources: string[], __input: QuickSightListDataSetsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest`](#aws-cdk-sdk.quicksight.QuickSightListDataSetsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSetSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.property.dataSetSummaries"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSetSummary`](#aws-cdk-sdk.quicksight.QuickSightDataSetSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSets.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListDataSources <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListDataSources(__scope: Construct, __resources: string[], __input: QuickSightListDataSourcesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest`](#aws-cdk-sdk.quicksight.QuickSightListDataSourcesRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.property.dataSources"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDataSource`](#aws-cdk-sdk.quicksight.QuickSightDataSource)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListDataSources.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListGroupMemberships <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListGroupMemberships(__scope: Construct, __resources: string[], __input: QuickSightListGroupMembershipsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest`](#aws-cdk-sdk.quicksight.QuickSightListGroupMembershipsRequest)

---



#### Properties <a name="Properties"></a>

##### `groupMemberList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.property.groupMemberList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroupMember`](#aws-cdk-sdk.quicksight.QuickSightGroupMember)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroupMemberships.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListGroups <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListGroups(__scope: Construct, __resources: string[], __input: QuickSightListGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListGroupsRequest`](#aws-cdk-sdk.quicksight.QuickSightListGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groupList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.property.groupList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListGroups.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListIamPolicyAssignments <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListIamPolicyAssignments(__scope: Construct, __resources: string[], __input: QuickSightListIamPolicyAssignmentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest`](#aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsRequest)

---



#### Properties <a name="Properties"></a>

##### `iamPolicyAssignments`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.property.iamPolicyAssignments"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary`](#aws-cdk-sdk.quicksight.QuickSightIamPolicyAssignmentSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignments.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListIamPolicyAssignmentsForUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser(__scope: Construct, __resources: string[], __input: QuickSightListIamPolicyAssignmentsForUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest`](#aws-cdk-sdk.quicksight.QuickSightListIamPolicyAssignmentsForUserRequest)

---



#### Properties <a name="Properties"></a>

##### `activeAssignments`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.property.activeAssignments"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment`](#aws-cdk-sdk.quicksight.QuickSightActiveIamPolicyAssignment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIamPolicyAssignmentsForUser.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListIngestions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListIngestions(__scope: Construct, __resources: string[], __input: QuickSightListIngestionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListIngestionsRequest)

---



#### Properties <a name="Properties"></a>

##### `ingestions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.property.ingestions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightIngestion`](#aws-cdk-sdk.quicksight.QuickSightIngestion)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListIngestions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListNamespaces <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListNamespaces(__scope: Construct, __resources: string[], __input: QuickSightListNamespacesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest`](#aws-cdk-sdk.quicksight.QuickSightListNamespacesRequest)

---



#### Properties <a name="Properties"></a>

##### `namespaces`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.property.namespaces"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2`](#aws-cdk-sdk.quicksight.QuickSightNamespaceInfoV2)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListNamespaces.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListTagsForResource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: QuickSightListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTagsForResourceRequest`](#aws-cdk-sdk.quicksight.QuickSightListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.property.status"></a>

- *Type:* `number`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTagsForResource.property.tags"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTag`](#aws-cdk-sdk.quicksight.QuickSightTag)[]

---


### QuickSightResponsesListTemplateAliases <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListTemplateAliases(__scope: Construct, __resources: string[], __input: QuickSightListTemplateAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest`](#aws-cdk-sdk.quicksight.QuickSightListTemplateAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.property.status"></a>

- *Type:* `number`

---

##### `templateAliasList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateAliases.property.templateAliasList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightTemplateAlias)[]

---


### QuickSightResponsesListTemplates <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListTemplates(__scope: Construct, __resources: string[], __input: QuickSightListTemplatesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest`](#aws-cdk-sdk.quicksight.QuickSightListTemplatesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.property.status"></a>

- *Type:* `number`

---

##### `templateSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplates.property.templateSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateSummary`](#aws-cdk-sdk.quicksight.QuickSightTemplateSummary)[]

---


### QuickSightResponsesListTemplateVersions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListTemplateVersions(__scope: Construct, __resources: string[], __input: QuickSightListTemplateVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListTemplateVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.property.status"></a>

- *Type:* `number`

---

##### `templateVersionSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListTemplateVersions.property.templateVersionSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary`](#aws-cdk-sdk.quicksight.QuickSightTemplateVersionSummary)[]

---


### QuickSightResponsesListThemeAliases <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListThemeAliases(__scope: Construct, __resources: string[], __input: QuickSightListThemeAliasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest`](#aws-cdk-sdk.quicksight.QuickSightListThemeAliasesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.property.status"></a>

- *Type:* `number`

---

##### `themeAliasList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeAliases.property.themeAliasList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightThemeAlias)[]

---


### QuickSightResponsesListThemes <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListThemes(__scope: Construct, __resources: string[], __input: QuickSightListThemesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListThemesRequest`](#aws-cdk-sdk.quicksight.QuickSightListThemesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.property.status"></a>

- *Type:* `number`

---

##### `themeSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemes.property.themeSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeSummary`](#aws-cdk-sdk.quicksight.QuickSightThemeSummary)[]

---


### QuickSightResponsesListThemeVersions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListThemeVersions(__scope: Construct, __resources: string[], __input: QuickSightListThemeVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest`](#aws-cdk-sdk.quicksight.QuickSightListThemeVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.property.status"></a>

- *Type:* `number`

---

##### `themeVersionSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListThemeVersions.property.themeVersionSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary`](#aws-cdk-sdk.quicksight.QuickSightThemeVersionSummary)[]

---


### QuickSightResponsesListUserGroups <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListUserGroups(__scope: Construct, __resources: string[], __input: QuickSightListUserGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest`](#aws-cdk-sdk.quicksight.QuickSightListUserGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groupList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.property.groupList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightGroup`](#aws-cdk-sdk.quicksight.QuickSightGroup)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUserGroups.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesListUsers <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesListUsers(__scope: Construct, __resources: string[], __input: QuickSightListUsersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightListUsersRequest`](#aws-cdk-sdk.quicksight.QuickSightListUsersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.property.status"></a>

- *Type:* `number`

---

##### `userList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesListUsers.property.userList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUser`](#aws-cdk-sdk.quicksight.QuickSightUser)[]

---


### QuickSightResponsesRegisterUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesRegisterUser(__scope: Construct, __resources: string[], __input: QuickSightRegisterUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest`](#aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.property.status"></a>

- *Type:* `number`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser`](#aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser)

---

##### `userInvitationUrl`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUser.property.userInvitationUrl"></a>

- *Type:* `string`

---


### QuickSightResponsesRegisterUserUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesRegisterUserUser(__scope: Construct, __resources: string[], __input: QuickSightRegisterUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest`](#aws-cdk-sdk.quicksight.QuickSightRegisterUserRequest)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.active"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.arn"></a>

- *Type:* `string`

---

##### `customPermissionsName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.customPermissionsName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.email"></a>

- *Type:* `string`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.identityType"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.principalId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.role"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRegisterUserUser.property.userName"></a>

- *Type:* `string`

---


### QuickSightResponsesRestoreAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesRestoreAnalysis(__scope: Construct, __resources: string[], __input: QuickSightRestoreAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightRestoreAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesRestoreAnalysis.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesSearchAnalyses <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesSearchAnalyses(__scope: Construct, __resources: string[], __input: QuickSightSearchAnalysesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest`](#aws-cdk-sdk.quicksight.QuickSightSearchAnalysesRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.property.analysisSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightAnalysisSummary`](#aws-cdk-sdk.quicksight.QuickSightAnalysisSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchAnalyses.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesSearchDashboards <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesSearchDashboards(__scope: Construct, __resources: string[], __input: QuickSightSearchDashboardsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest`](#aws-cdk-sdk.quicksight.QuickSightSearchDashboardsRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardSummaryList`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.property.dashboardSummaryList"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightDashboardSummary`](#aws-cdk-sdk.quicksight.QuickSightDashboardSummary)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.property.nextToken"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesSearchDashboards.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesTagResource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesTagResource(__scope: Construct, __resources: string[], __input: QuickSightTagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightTagResourceRequest`](#aws-cdk-sdk.quicksight.QuickSightTagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesTagResource.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUntagResource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUntagResource(__scope: Construct, __resources: string[], __input: QuickSightUntagResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest`](#aws-cdk-sdk.quicksight.QuickSightUntagResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUntagResource.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightUpdateAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `accountCustomization`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.property.accountCustomization"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization`](#aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization)

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.property.arn"></a>

- *Type:* `string`

---

##### `awsAccountId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.property.awsAccountId"></a>

- *Type:* `string`

---

##### `namespace`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.property.namespace"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomization.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateAccountCustomizationAccountCustomization <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization(__scope: Construct, __resources: string[], __input: QuickSightUpdateAccountCustomizationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAccountCustomizationRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultTheme`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountCustomizationAccountCustomization.property.defaultTheme"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateAccountSettings <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateAccountSettings(__scope: Construct, __resources: string[], __input: QuickSightUpdateAccountSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAccountSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAccountSettings.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateAnalysis <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateAnalysis(__scope: Construct, __resources: string[], __input: QuickSightUpdateAnalysisRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.property.analysisId"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.property.arn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.property.status"></a>

- *Type:* `number`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysis.property.updateStatus"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateAnalysisPermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateAnalysisPermissions(__scope: Construct, __resources: string[], __input: QuickSightUpdateAnalysisPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateAnalysisPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `analysisArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.property.analysisArn"></a>

- *Type:* `string`

---

##### `analysisId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.property.analysisId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateAnalysisPermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateDashboard <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDashboard(__scope: Construct, __resources: string[], __input: QuickSightUpdateDashboardRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDashboardRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.property.creationStatus"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.property.status"></a>

- *Type:* `number`

---

##### `versionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboard.property.versionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateDashboardPermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDashboardPermissions(__scope: Construct, __resources: string[], __input: QuickSightUpdateDashboardPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.property.dashboardId"></a>

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateDashboardPublishedVersion <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDashboardPublishedVersion(__scope: Construct, __resources: string[], __input: QuickSightUpdateDashboardPublishedVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDashboardPublishedVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `dashboardArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.property.dashboardArn"></a>

- *Type:* `string`

---

##### `dashboardId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.property.dashboardId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDashboardPublishedVersion.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateDataSet <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDataSet(__scope: Construct, __resources: string[], __input: QuickSightUpdateDataSetRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSetRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.property.arn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.property.dataSetId"></a>

- *Type:* `string`

---

##### `ingestionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.property.ingestionArn"></a>

- *Type:* `string`

---

##### `ingestionId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.property.ingestionId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSet.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateDataSetPermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDataSetPermissions(__scope: Construct, __resources: string[], __input: QuickSightUpdateDataSetPermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSetPermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSetArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.property.dataSetArn"></a>

- *Type:* `string`

---

##### `dataSetId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.property.dataSetId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSetPermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateDataSource <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDataSource(__scope: Construct, __resources: string[], __input: QuickSightUpdateDataSourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSourceRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.property.arn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.property.status"></a>

- *Type:* `number`

---

##### `updateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSource.property.updateStatus"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateDataSourcePermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateDataSourcePermissions(__scope: Construct, __resources: string[], __input: QuickSightUpdateDataSourcePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateDataSourcePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataSourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.property.dataSourceArn"></a>

- *Type:* `string`

---

##### `dataSourceId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.property.dataSourceId"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateDataSourcePermissions.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateGroup(__scope: Construct, __resources: string[], __input: QuickSightUpdateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `group`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.property.group"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup`](#aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup)

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroup.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateGroupGroup <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateGroupGroup(__scope: Construct, __resources: string[], __input: QuickSightUpdateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.property.arn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.property.description"></a>

- *Type:* `string`

---

##### `groupName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.property.groupName"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateGroupGroup.property.principalId"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateIamPolicyAssignment <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateIamPolicyAssignment(__scope: Construct, __resources: string[], __input: QuickSightUpdateIamPolicyAssignmentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateIamPolicyAssignmentRequest)

---



#### Properties <a name="Properties"></a>

##### `assignmentId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.assignmentId"></a>

- *Type:* `string`

---

##### `assignmentName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.assignmentName"></a>

- *Type:* `string`

---

##### `assignmentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.assignmentStatus"></a>

- *Type:* `string`

---

##### `identities`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.identities"></a>

- *Type:* {[ key: string ]: `string`[]}

---

##### `policyArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.policyArn"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateIamPolicyAssignment.property.status"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateTemplate <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateTemplate(__scope: Construct, __resources: string[], __input: QuickSightUpdateTemplateRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplateRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.property.status"></a>

- *Type:* `number`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.property.templateId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplate.property.versionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightUpdateTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.property.status"></a>

- *Type:* `number`

---

##### `templateAlias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAlias.property.templateAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias`](#aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias)

---


### QuickSightResponsesUpdateTemplateAliasTemplateAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias(__scope: Construct, __resources: string[], __input: QuickSightUpdateTemplateAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplateAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.property.arn"></a>

- *Type:* `string`

---

##### `templateVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplateAliasTemplateAlias.property.templateVersionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateTemplatePermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateTemplatePermissions(__scope: Construct, __resources: string[], __input: QuickSightUpdateTemplatePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateTemplatePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.property.status"></a>

- *Type:* `number`

---

##### `templateArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.property.templateArn"></a>

- *Type:* `string`

---

##### `templateId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTemplatePermissions.property.templateId"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateTheme <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateTheme(__scope: Construct, __resources: string[], __input: QuickSightUpdateThemeRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemeRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.property.arn"></a>

- *Type:* `string`

---

##### `creationStatus`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.property.creationStatus"></a>

- *Type:* `string`

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.property.status"></a>

- *Type:* `number`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.property.themeId"></a>

- *Type:* `string`

---

##### `versionArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateTheme.property.versionArn"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightUpdateThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.property.status"></a>

- *Type:* `number`

---

##### `themeAlias`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAlias.property.themeAlias"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias`](#aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias)

---


### QuickSightResponsesUpdateThemeAliasThemeAlias <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias(__scope: Construct, __resources: string[], __input: QuickSightUpdateThemeAliasRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemeAliasRequest)

---



#### Properties <a name="Properties"></a>

##### `aliasName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.property.aliasName"></a>

- *Type:* `string`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.property.arn"></a>

- *Type:* `string`

---

##### `themeVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemeAliasThemeAlias.property.themeVersionNumber"></a>

- *Type:* `number`

---


### QuickSightResponsesUpdateThemePermissions <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateThemePermissions(__scope: Construct, __resources: string[], __input: QuickSightUpdateThemePermissionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateThemePermissionsRequest)

---



#### Properties <a name="Properties"></a>

##### `permissions`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.property.permissions"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResourcePermission`](#aws-cdk-sdk.quicksight.QuickSightResourcePermission)[]

---

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.property.status"></a>

- *Type:* `number`

---

##### `themeArn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.property.themeArn"></a>

- *Type:* `string`

---

##### `themeId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateThemePermissions.property.themeId"></a>

- *Type:* `string`

---


### QuickSightResponsesUpdateUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateUser(__scope: Construct, __resources: string[], __input: QuickSightUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `requestId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.property.requestId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.property.status"></a>

- *Type:* `number`

---

##### `user`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUser.property.user"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser`](#aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser)

---


### QuickSightResponsesUpdateUserUser <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser"></a>

#### Initializer <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.Initializer"></a>

```typescript
import { quicksight } from 'aws-cdk-sdk'

new quicksight.QuickSightResponsesUpdateUserUser(__scope: Construct, __resources: string[], __input: QuickSightUpdateUserRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest`](#aws-cdk-sdk.quicksight.QuickSightUpdateUserRequest)

---



#### Properties <a name="Properties"></a>

##### `active`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.active"></a>

- *Type:* `boolean`

---

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.arn"></a>

- *Type:* `string`

---

##### `customPermissionsName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.customPermissionsName"></a>

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.email"></a>

- *Type:* `string`

---

##### `identityType`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.identityType"></a>

- *Type:* `string`

---

##### `principalId`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.principalId"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.role"></a>

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="aws-cdk-sdk.quicksight.QuickSightResponsesUpdateUserUser.property.userName"></a>

- *Type:* `string`

---



