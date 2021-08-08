# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GreengrassClient <a name="aws-cdk-sdk.greengrass.GreengrassClient"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassClient.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `associateRoleToGroup` <a name="aws-cdk-sdk.greengrass.GreengrassClient.associateRoleToGroup"></a>

```typescript
public associateRoleToGroup(input: GreengrassAssociateRoleToGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest)

---

##### `associateServiceRoleToAccount` <a name="aws-cdk-sdk.greengrass.GreengrassClient.associateServiceRoleToAccount"></a>

```typescript
public associateServiceRoleToAccount(input: GreengrassAssociateServiceRoleToAccountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountRequest`](#aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountRequest)

---

##### `createConnectorDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createConnectorDefinition"></a>

```typescript
public createConnectorDefinition(input: GreengrassCreateConnectorDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest)

---

##### `createConnectorDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createConnectorDefinitionVersion"></a>

```typescript
public createConnectorDefinitionVersion(input: GreengrassCreateConnectorDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest)

---

##### `createCoreDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createCoreDefinition"></a>

```typescript
public createCoreDefinition(input: GreengrassCreateCoreDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest)

---

##### `createCoreDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createCoreDefinitionVersion"></a>

```typescript
public createCoreDefinitionVersion(input: GreengrassCreateCoreDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest)

---

##### `createDeployment` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createDeployment"></a>

```typescript
public createDeployment(input: GreengrassCreateDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest)

---

##### `createDeviceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createDeviceDefinition"></a>

```typescript
public createDeviceDefinition(input: GreengrassCreateDeviceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest)

---

##### `createDeviceDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createDeviceDefinitionVersion"></a>

```typescript
public createDeviceDefinitionVersion(input: GreengrassCreateDeviceDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest)

---

##### `createFunctionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createFunctionDefinition"></a>

```typescript
public createFunctionDefinition(input: GreengrassCreateFunctionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest)

---

##### `createFunctionDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createFunctionDefinitionVersion"></a>

```typescript
public createFunctionDefinitionVersion(input: GreengrassCreateFunctionDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest)

---

##### `createGroup` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createGroup"></a>

```typescript
public createGroup(input: GreengrassCreateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest)

---

##### `createGroupCertificateAuthority` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createGroupCertificateAuthority"></a>

```typescript
public createGroupCertificateAuthority(input: GreengrassCreateGroupCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest)

---

##### `createGroupVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createGroupVersion"></a>

```typescript
public createGroupVersion(input: GreengrassCreateGroupVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest)

---

##### `createLoggerDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createLoggerDefinition"></a>

```typescript
public createLoggerDefinition(input: GreengrassCreateLoggerDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest)

---

##### `createLoggerDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createLoggerDefinitionVersion"></a>

```typescript
public createLoggerDefinitionVersion(input: GreengrassCreateLoggerDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest)

---

##### `createResourceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createResourceDefinition"></a>

```typescript
public createResourceDefinition(input: GreengrassCreateResourceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest)

---

##### `createResourceDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createResourceDefinitionVersion"></a>

```typescript
public createResourceDefinitionVersion(input: GreengrassCreateResourceDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest)

---

##### `createSoftwareUpdateJob` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createSoftwareUpdateJob"></a>

```typescript
public createSoftwareUpdateJob(input: GreengrassCreateSoftwareUpdateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest)

---

##### `createSubscriptionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createSubscriptionDefinition"></a>

```typescript
public createSubscriptionDefinition(input: GreengrassCreateSubscriptionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest)

---

##### `createSubscriptionDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.createSubscriptionDefinitionVersion"></a>

```typescript
public createSubscriptionDefinitionVersion(input: GreengrassCreateSubscriptionDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest)

---

##### `deleteConnectorDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteConnectorDefinition"></a>

```typescript
public deleteConnectorDefinition(input: GreengrassDeleteConnectorDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteConnectorDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteConnectorDefinitionRequest)

---

##### `deleteCoreDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteCoreDefinition"></a>

```typescript
public deleteCoreDefinition(input: GreengrassDeleteCoreDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteCoreDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteCoreDefinitionRequest)

---

##### `deleteDeviceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteDeviceDefinition"></a>

```typescript
public deleteDeviceDefinition(input: GreengrassDeleteDeviceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteDeviceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteDeviceDefinitionRequest)

---

##### `deleteFunctionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteFunctionDefinition"></a>

```typescript
public deleteFunctionDefinition(input: GreengrassDeleteFunctionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteFunctionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteFunctionDefinitionRequest)

---

##### `deleteGroup` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteGroup"></a>

```typescript
public deleteGroup(input: GreengrassDeleteGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteGroupRequest)

---

##### `deleteLoggerDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteLoggerDefinition"></a>

```typescript
public deleteLoggerDefinition(input: GreengrassDeleteLoggerDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteLoggerDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteLoggerDefinitionRequest)

---

##### `deleteResourceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteResourceDefinition"></a>

```typescript
public deleteResourceDefinition(input: GreengrassDeleteResourceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteResourceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteResourceDefinitionRequest)

---

##### `deleteSubscriptionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.deleteSubscriptionDefinition"></a>

```typescript
public deleteSubscriptionDefinition(input: GreengrassDeleteSubscriptionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeleteSubscriptionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassDeleteSubscriptionDefinitionRequest)

---

##### `disassociateRoleFromGroup` <a name="aws-cdk-sdk.greengrass.GreengrassClient.disassociateRoleFromGroup"></a>

```typescript
public disassociateRoleFromGroup(input: GreengrassDisassociateRoleFromGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupRequest)

---

##### `disassociateServiceRoleFromAccount` <a name="aws-cdk-sdk.greengrass.GreengrassClient.disassociateServiceRoleFromAccount"></a>

```typescript
public disassociateServiceRoleFromAccount()
```

##### `fetchAssociatedRole` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchAssociatedRole"></a>

```typescript
public fetchAssociatedRole(input: GreengrassGetAssociatedRoleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleRequest`](#aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleRequest)

---

##### `fetchBulkDeploymentStatus` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchBulkDeploymentStatus"></a>

```typescript
public fetchBulkDeploymentStatus(input: GreengrassGetBulkDeploymentStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest`](#aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest)

---

##### `fetchConnectivityInfo` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchConnectivityInfo"></a>

```typescript
public fetchConnectivityInfo(input: GreengrassGetConnectivityInfoRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoRequest)

---

##### `fetchConnectorDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchConnectorDefinition"></a>

```typescript
public fetchConnectorDefinition(input: GreengrassGetConnectorDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionRequest)

---

##### `fetchConnectorDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchConnectorDefinitionVersion"></a>

```typescript
public fetchConnectorDefinitionVersion(input: GreengrassGetConnectorDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest)

---

##### `fetchCoreDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchCoreDefinition"></a>

```typescript
public fetchCoreDefinition(input: GreengrassGetCoreDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionRequest)

---

##### `fetchCoreDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchCoreDefinitionVersion"></a>

```typescript
public fetchCoreDefinitionVersion(input: GreengrassGetCoreDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest)

---

##### `fetchDeploymentStatus` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchDeploymentStatus"></a>

```typescript
public fetchDeploymentStatus(input: GreengrassGetDeploymentStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest)

---

##### `fetchDeviceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchDeviceDefinition"></a>

```typescript
public fetchDeviceDefinition(input: GreengrassGetDeviceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionRequest)

---

##### `fetchDeviceDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchDeviceDefinitionVersion"></a>

```typescript
public fetchDeviceDefinitionVersion(input: GreengrassGetDeviceDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest)

---

##### `fetchFunctionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchFunctionDefinition"></a>

```typescript
public fetchFunctionDefinition(input: GreengrassGetFunctionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionRequest)

---

##### `fetchFunctionDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchFunctionDefinitionVersion"></a>

```typescript
public fetchFunctionDefinitionVersion(input: GreengrassGetFunctionDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest)

---

##### `fetchGroup` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchGroup"></a>

```typescript
public fetchGroup(input: GreengrassGetGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupRequest)

---

##### `fetchGroupCertificateAuthority` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchGroupCertificateAuthority"></a>

```typescript
public fetchGroupCertificateAuthority(input: GreengrassGetGroupCertificateAuthorityRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest)

---

##### `fetchGroupCertificateConfiguration` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchGroupCertificateConfiguration"></a>

```typescript
public fetchGroupCertificateConfiguration(input: GreengrassGetGroupCertificateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationRequest)

---

##### `fetchGroupVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchGroupVersion"></a>

```typescript
public fetchGroupVersion(input: GreengrassGetGroupVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest)

---

##### `fetchLoggerDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchLoggerDefinition"></a>

```typescript
public fetchLoggerDefinition(input: GreengrassGetLoggerDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionRequest)

---

##### `fetchLoggerDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchLoggerDefinitionVersion"></a>

```typescript
public fetchLoggerDefinitionVersion(input: GreengrassGetLoggerDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest)

---

##### `fetchResourceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchResourceDefinition"></a>

```typescript
public fetchResourceDefinition(input: GreengrassGetResourceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionRequest)

---

##### `fetchResourceDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchResourceDefinitionVersion"></a>

```typescript
public fetchResourceDefinitionVersion(input: GreengrassGetResourceDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest)

---

##### `fetchServiceRoleForAccount` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchServiceRoleForAccount"></a>

```typescript
public fetchServiceRoleForAccount()
```

##### `fetchSubscriptionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchSubscriptionDefinition"></a>

```typescript
public fetchSubscriptionDefinition(input: GreengrassGetSubscriptionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionRequest)

---

##### `fetchSubscriptionDefinitionVersion` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchSubscriptionDefinitionVersion"></a>

```typescript
public fetchSubscriptionDefinitionVersion(input: GreengrassGetSubscriptionDefinitionVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest)

---

##### `fetchThingRuntimeConfiguration` <a name="aws-cdk-sdk.greengrass.GreengrassClient.fetchThingRuntimeConfiguration"></a>

```typescript
public fetchThingRuntimeConfiguration(input: GreengrassGetThingRuntimeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest)

---

##### `listBulkDeploymentDetailedReports` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listBulkDeploymentDetailedReports"></a>

```typescript
public listBulkDeploymentDetailedReports(input: GreengrassListBulkDeploymentDetailedReportsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest`](#aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest)

---

##### `listBulkDeployments` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listBulkDeployments"></a>

```typescript
public listBulkDeployments(input: GreengrassListBulkDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest`](#aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest)

---

##### `listConnectorDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listConnectorDefinitions"></a>

```typescript
public listConnectorDefinitions(input: GreengrassListConnectorDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest)

---

##### `listConnectorDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listConnectorDefinitionVersions"></a>

```typescript
public listConnectorDefinitionVersions(input: GreengrassListConnectorDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest)

---

##### `listCoreDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listCoreDefinitions"></a>

```typescript
public listCoreDefinitions(input: GreengrassListCoreDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest)

---

##### `listCoreDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listCoreDefinitionVersions"></a>

```typescript
public listCoreDefinitionVersions(input: GreengrassListCoreDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest)

---

##### `listDeployments` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listDeployments"></a>

```typescript
public listDeployments(input: GreengrassListDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest`](#aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest)

---

##### `listDeviceDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listDeviceDefinitions"></a>

```typescript
public listDeviceDefinitions(input: GreengrassListDeviceDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest)

---

##### `listDeviceDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listDeviceDefinitionVersions"></a>

```typescript
public listDeviceDefinitionVersions(input: GreengrassListDeviceDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest)

---

##### `listFunctionDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listFunctionDefinitions"></a>

```typescript
public listFunctionDefinitions(input: GreengrassListFunctionDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest)

---

##### `listFunctionDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listFunctionDefinitionVersions"></a>

```typescript
public listFunctionDefinitionVersions(input: GreengrassListFunctionDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest)

---

##### `listGroupCertificateAuthorities` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listGroupCertificateAuthorities"></a>

```typescript
public listGroupCertificateAuthorities(input: GreengrassListGroupCertificateAuthoritiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesRequest`](#aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesRequest)

---

##### `listGroups` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listGroups"></a>

```typescript
public listGroups(input: GreengrassListGroupsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListGroupsRequest`](#aws-cdk-sdk.greengrass.GreengrassListGroupsRequest)

---

##### `listGroupVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listGroupVersions"></a>

```typescript
public listGroupVersions(input: GreengrassListGroupVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest)

---

##### `listLoggerDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listLoggerDefinitions"></a>

```typescript
public listLoggerDefinitions(input: GreengrassListLoggerDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest)

---

##### `listLoggerDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listLoggerDefinitionVersions"></a>

```typescript
public listLoggerDefinitionVersions(input: GreengrassListLoggerDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest)

---

##### `listResourceDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listResourceDefinitions"></a>

```typescript
public listResourceDefinitions(input: GreengrassListResourceDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest)

---

##### `listResourceDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listResourceDefinitionVersions"></a>

```typescript
public listResourceDefinitionVersions(input: GreengrassListResourceDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest)

---

##### `listSubscriptionDefinitions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listSubscriptionDefinitions"></a>

```typescript
public listSubscriptionDefinitions(input: GreengrassListSubscriptionDefinitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest)

---

##### `listSubscriptionDefinitionVersions` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listSubscriptionDefinitionVersions"></a>

```typescript
public listSubscriptionDefinitionVersions(input: GreengrassListSubscriptionDefinitionVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.greengrass.GreengrassClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: GreengrassListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListTagsForResourceRequest`](#aws-cdk-sdk.greengrass.GreengrassListTagsForResourceRequest)

---

##### `resetDeployments` <a name="aws-cdk-sdk.greengrass.GreengrassClient.resetDeployments"></a>

```typescript
public resetDeployments(input: GreengrassResetDeploymentsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest`](#aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest)

---

##### `startBulkDeployment` <a name="aws-cdk-sdk.greengrass.GreengrassClient.startBulkDeployment"></a>

```typescript
public startBulkDeployment(input: GreengrassStartBulkDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest`](#aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest)

---

##### `stopBulkDeployment` <a name="aws-cdk-sdk.greengrass.GreengrassClient.stopBulkDeployment"></a>

```typescript
public stopBulkDeployment(input: GreengrassStopBulkDeploymentRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassStopBulkDeploymentRequest`](#aws-cdk-sdk.greengrass.GreengrassStopBulkDeploymentRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.greengrass.GreengrassClient.tagResource"></a>

```typescript
public tagResource(input: GreengrassTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassTagResourceRequest`](#aws-cdk-sdk.greengrass.GreengrassTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.greengrass.GreengrassClient.untagResource"></a>

```typescript
public untagResource(input: GreengrassUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUntagResourceRequest`](#aws-cdk-sdk.greengrass.GreengrassUntagResourceRequest)

---

##### `updateConnectivityInfo` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateConnectivityInfo"></a>

```typescript
public updateConnectivityInfo(input: GreengrassUpdateConnectivityInfoRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest)

---

##### `updateConnectorDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateConnectorDefinition"></a>

```typescript
public updateConnectorDefinition(input: GreengrassUpdateConnectorDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateConnectorDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateConnectorDefinitionRequest)

---

##### `updateCoreDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateCoreDefinition"></a>

```typescript
public updateCoreDefinition(input: GreengrassUpdateCoreDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateCoreDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateCoreDefinitionRequest)

---

##### `updateDeviceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateDeviceDefinition"></a>

```typescript
public updateDeviceDefinition(input: GreengrassUpdateDeviceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateDeviceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateDeviceDefinitionRequest)

---

##### `updateFunctionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateFunctionDefinition"></a>

```typescript
public updateFunctionDefinition(input: GreengrassUpdateFunctionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateFunctionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateFunctionDefinitionRequest)

---

##### `updateGroup` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateGroup"></a>

```typescript
public updateGroup(input: GreengrassUpdateGroupRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateGroupRequest)

---

##### `updateGroupCertificateConfiguration` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateGroupCertificateConfiguration"></a>

```typescript
public updateGroupCertificateConfiguration(input: GreengrassUpdateGroupCertificateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest)

---

##### `updateLoggerDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateLoggerDefinition"></a>

```typescript
public updateLoggerDefinition(input: GreengrassUpdateLoggerDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateLoggerDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateLoggerDefinitionRequest)

---

##### `updateResourceDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateResourceDefinition"></a>

```typescript
public updateResourceDefinition(input: GreengrassUpdateResourceDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateResourceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateResourceDefinitionRequest)

---

##### `updateSubscriptionDefinition` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateSubscriptionDefinition"></a>

```typescript
public updateSubscriptionDefinition(input: GreengrassUpdateSubscriptionDefinitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateSubscriptionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateSubscriptionDefinitionRequest)

---

##### `updateThingRuntimeConfiguration` <a name="aws-cdk-sdk.greengrass.GreengrassClient.updateThingRuntimeConfiguration"></a>

```typescript
public updateThingRuntimeConfiguration(input: GreengrassUpdateThingRuntimeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateThingRuntimeConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateThingRuntimeConfigurationRequest)

---




## Structs <a name="Structs"></a>

### GreengrassAssociateRoleToGroupRequest <a name="aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassAssociateRoleToGroupRequest: greengrass.GreengrassAssociateRoleToGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest.property.roleArn"></a>

- *Type:* `string`

---

### GreengrassAssociateRoleToGroupResponse <a name="aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassAssociateRoleToGroupResponse: greengrass.GreengrassAssociateRoleToGroupResponse = { ... }
```

##### `associatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupResponse.property.associatedAt"></a>

- *Type:* `string`

---

### GreengrassAssociateServiceRoleToAccountRequest <a name="aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassAssociateServiceRoleToAccountRequest: greengrass.GreengrassAssociateServiceRoleToAccountRequest = { ... }
```

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountRequest.property.roleArn"></a>

- *Type:* `string`

---

### GreengrassAssociateServiceRoleToAccountResponse <a name="aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassAssociateServiceRoleToAccountResponse: greengrass.GreengrassAssociateServiceRoleToAccountResponse = { ... }
```

##### `associatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountResponse.property.associatedAt"></a>

- *Type:* `string`

---

### GreengrassBulkDeployment <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassBulkDeployment: greengrass.GreengrassBulkDeployment = { ... }
```

##### `bulkDeploymentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeployment.property.bulkDeploymentArn"></a>

- *Type:* `string`

---

##### `bulkDeploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeployment.property.bulkDeploymentId"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeployment.property.createdAt"></a>

- *Type:* `string`

---

### GreengrassBulkDeploymentMetrics <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassBulkDeploymentMetrics: greengrass.GreengrassBulkDeploymentMetrics = { ... }
```

##### `invalidInputRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentMetrics.property.invalidInputRecords"></a>

- *Type:* `number`

---

##### `recordsProcessed`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentMetrics.property.recordsProcessed"></a>

- *Type:* `number`

---

##### `retryAttempts`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentMetrics.property.retryAttempts"></a>

- *Type:* `number`

---

### GreengrassBulkDeploymentResult <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassBulkDeploymentResult: greengrass.GreengrassBulkDeploymentResult = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.deploymentArn"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.deploymentType"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassErrorDetail`](#aws-cdk-sdk.greengrass.GreengrassErrorDetail)[]

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.errorMessage"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult.property.groupArn"></a>

- *Type:* `string`

---

### GreengrassConnectivityInfo <a name="aws-cdk-sdk.greengrass.GreengrassConnectivityInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassConnectivityInfo: greengrass.GreengrassConnectivityInfo = { ... }
```

##### `hostAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnectivityInfo.property.hostAddress"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnectivityInfo.property.id"></a>

- *Type:* `string`

---

##### `metadata`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnectivityInfo.property.metadata"></a>

- *Type:* `string`

---

##### `portNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnectivityInfo.property.portNumber"></a>

- *Type:* `number`

---

### GreengrassConnector <a name="aws-cdk-sdk.greengrass.GreengrassConnector"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassConnector: greengrass.GreengrassConnector = { ... }
```

##### `connectorArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnector.property.connectorArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnector.property.id"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnector.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassConnectorDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassConnectorDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassConnectorDefinitionVersion: greengrass.GreengrassConnectorDefinitionVersion = { ... }
```

##### `connectors`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassConnectorDefinitionVersion.property.connectors"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnector`](#aws-cdk-sdk.greengrass.GreengrassConnector)[]

---

### GreengrassCore <a name="aws-cdk-sdk.greengrass.GreengrassCore"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCore: greengrass.GreengrassCore = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCore.property.certificateArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCore.property.id"></a>

- *Type:* `string`

---

##### `thingArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCore.property.thingArn"></a>

- *Type:* `string`

---

##### `syncShadow`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCore.property.syncShadow"></a>

- *Type:* `boolean`

---

### GreengrassCoreDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassCoreDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCoreDefinitionVersion: greengrass.GreengrassCoreDefinitionVersion = { ... }
```

##### `cores`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCoreDefinitionVersion.property.cores"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCore`](#aws-cdk-sdk.greengrass.GreengrassCore)[]

---

### GreengrassCreateConnectorDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateConnectorDefinitionRequest: greengrass.GreengrassCreateConnectorDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnectorDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassConnectorDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateConnectorDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateConnectorDefinitionResponse: greengrass.GreengrassCreateConnectorDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateConnectorDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateConnectorDefinitionVersionRequest: greengrass.GreengrassCreateConnectorDefinitionVersionRequest = { ... }
```

##### `connectorDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest.property.connectorDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `connectors`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest.property.connectors"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnector`](#aws-cdk-sdk.greengrass.GreengrassConnector)[]

---

### GreengrassCreateConnectorDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateConnectorDefinitionVersionResponse: greengrass.GreengrassCreateConnectorDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateCoreDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateCoreDefinitionRequest: greengrass.GreengrassCreateCoreDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCoreDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassCoreDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateCoreDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateCoreDefinitionResponse: greengrass.GreengrassCreateCoreDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateCoreDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateCoreDefinitionVersionRequest: greengrass.GreengrassCreateCoreDefinitionVersionRequest = { ... }
```

##### `coreDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest.property.coreDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `cores`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest.property.cores"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCore`](#aws-cdk-sdk.greengrass.GreengrassCore)[]

---

### GreengrassCreateCoreDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateCoreDefinitionVersionResponse: greengrass.GreengrassCreateCoreDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateDeploymentRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateDeploymentRequest: greengrass.GreengrassCreateDeploymentRequest = { ... }
```

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest.property.deploymentType"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest.property.groupId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `groupVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest.property.groupVersionId"></a>

- *Type:* `string`

---

### GreengrassCreateDeploymentResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateDeploymentResponse: greengrass.GreengrassCreateDeploymentResponse = { ... }
```

##### `deploymentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentResponse.property.deploymentArn"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeploymentResponse.property.deploymentId"></a>

- *Type:* `string`

---

### GreengrassCreateDeviceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateDeviceDefinitionRequest: greengrass.GreengrassCreateDeviceDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeviceDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassDeviceDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateDeviceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateDeviceDefinitionResponse: greengrass.GreengrassCreateDeviceDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateDeviceDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateDeviceDefinitionVersionRequest: greengrass.GreengrassCreateDeviceDefinitionVersionRequest = { ... }
```

##### `deviceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest.property.deviceDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest.property.devices"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDevice`](#aws-cdk-sdk.greengrass.GreengrassDevice)[]

---

### GreengrassCreateDeviceDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateDeviceDefinitionVersionResponse: greengrass.GreengrassCreateDeviceDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateFunctionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateFunctionDefinitionRequest: greengrass.GreengrassCreateFunctionDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateFunctionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateFunctionDefinitionResponse: greengrass.GreengrassCreateFunctionDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateFunctionDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateFunctionDefinitionVersionRequest: greengrass.GreengrassCreateFunctionDefinitionVersionRequest = { ... }
```

##### `functionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest.property.functionDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `defaultConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest.property.defaultConfig"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionDefaultConfig`](#aws-cdk-sdk.greengrass.GreengrassFunctionDefaultConfig)

---

##### `functions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest.property.functions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunction`](#aws-cdk-sdk.greengrass.GreengrassFunction)[]

---

### GreengrassCreateFunctionDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateFunctionDefinitionVersionResponse: greengrass.GreengrassCreateFunctionDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateGroupCertificateAuthorityRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateGroupCertificateAuthorityRequest: greengrass.GreengrassCreateGroupCertificateAuthorityRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest.property.groupId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest.property.amznClientToken"></a>

- *Type:* `string`

---

### GreengrassCreateGroupCertificateAuthorityResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateGroupCertificateAuthorityResponse: greengrass.GreengrassCreateGroupCertificateAuthorityResponse = { ... }
```

##### `groupCertificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityResponse.property.groupCertificateAuthorityArn"></a>

- *Type:* `string`

---

### GreengrassCreateGroupRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateGroupRequest: greengrass.GreengrassCreateGroupRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupVersion`](#aws-cdk-sdk.greengrass.GreengrassGroupVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateGroupResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateGroupResponse: greengrass.GreengrassCreateGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateGroupVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateGroupVersionRequest: greengrass.GreengrassCreateGroupVersionRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.groupId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `connectorDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.connectorDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `coreDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.coreDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `deviceDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.deviceDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `functionDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.functionDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `loggerDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.loggerDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `resourceDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.resourceDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `subscriptionDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest.property.subscriptionDefinitionVersionArn"></a>

- *Type:* `string`

---

### GreengrassCreateGroupVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateGroupVersionResponse: greengrass.GreengrassCreateGroupVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateLoggerDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateLoggerDefinitionRequest: greengrass.GreengrassCreateLoggerDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLoggerDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassLoggerDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateLoggerDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateLoggerDefinitionResponse: greengrass.GreengrassCreateLoggerDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateLoggerDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateLoggerDefinitionVersionRequest: greengrass.GreengrassCreateLoggerDefinitionVersionRequest = { ... }
```

##### `loggerDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest.property.loggerDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `loggers`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest.property.loggers"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLogger`](#aws-cdk-sdk.greengrass.GreengrassLogger)[]

---

### GreengrassCreateLoggerDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateLoggerDefinitionVersionResponse: greengrass.GreengrassCreateLoggerDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateResourceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateResourceDefinitionRequest: greengrass.GreengrassCreateResourceDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResourceDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassResourceDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateResourceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateResourceDefinitionResponse: greengrass.GreengrassCreateResourceDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateResourceDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateResourceDefinitionVersionRequest: greengrass.GreengrassCreateResourceDefinitionVersionRequest = { ... }
```

##### `resourceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest.property.resourceDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest.property.resources"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResource`](#aws-cdk-sdk.greengrass.GreengrassResource)[]

---

### GreengrassCreateResourceDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateResourceDefinitionVersionResponse: greengrass.GreengrassCreateResourceDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassCreateSoftwareUpdateJobRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateSoftwareUpdateJobRequest: greengrass.GreengrassCreateSoftwareUpdateJobRequest = { ... }
```

##### `s3UrlSignerRole`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.s3UrlSignerRole"></a>

- *Type:* `string`

---

##### `softwareToUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.softwareToUpdate"></a>

- *Type:* `string`

---

##### `updateTargets`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.updateTargets"></a>

- *Type:* `string`[]

---

##### `updateTargetsArchitecture`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.updateTargetsArchitecture"></a>

- *Type:* `string`

---

##### `updateTargetsOperatingSystem`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.updateTargetsOperatingSystem"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `updateAgentLogLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest.property.updateAgentLogLevel"></a>

- *Type:* `string`

---

### GreengrassCreateSoftwareUpdateJobResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateSoftwareUpdateJobResponse: greengrass.GreengrassCreateSoftwareUpdateJobResponse = { ... }
```

##### `iotJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobResponse.property.iotJobArn"></a>

- *Type:* `string`

---

##### `iotJobId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobResponse.property.iotJobId"></a>

- *Type:* `string`

---

##### `platformSoftwareVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobResponse.property.platformSoftwareVersion"></a>

- *Type:* `string`

---

### GreengrassCreateSubscriptionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateSubscriptionDefinitionRequest: greengrass.GreengrassCreateSubscriptionDefinitionRequest = { ... }
```

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `initialVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest.property.initialVersion"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSubscriptionDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassSubscriptionDefinitionVersion)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassCreateSubscriptionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateSubscriptionDefinitionResponse: greengrass.GreengrassCreateSubscriptionDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionResponse.property.name"></a>

- *Type:* `string`

---

### GreengrassCreateSubscriptionDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateSubscriptionDefinitionVersionRequest: greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest = { ... }
```

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest.property.subscriptionDefinitionId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `subscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSubscription`](#aws-cdk-sdk.greengrass.GreengrassSubscription)[]

---

### GreengrassCreateSubscriptionDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassCreateSubscriptionDefinitionVersionResponse: greengrass.GreengrassCreateSubscriptionDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassDefinitionInformation <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDefinitionInformation: greengrass.GreengrassDefinitionInformation = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDefinitionInformation.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassDeleteConnectorDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteConnectorDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteConnectorDefinitionRequest: greengrass.GreengrassDeleteConnectorDefinitionRequest = { ... }
```

##### `connectorDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteConnectorDefinitionRequest.property.connectorDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteConnectorDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteConnectorDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteConnectorDefinitionResponse: greengrass.GreengrassDeleteConnectorDefinitionResponse = { ... }
```

### GreengrassDeleteCoreDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteCoreDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteCoreDefinitionRequest: greengrass.GreengrassDeleteCoreDefinitionRequest = { ... }
```

##### `coreDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteCoreDefinitionRequest.property.coreDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteCoreDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteCoreDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteCoreDefinitionResponse: greengrass.GreengrassDeleteCoreDefinitionResponse = { ... }
```

### GreengrassDeleteDeviceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteDeviceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteDeviceDefinitionRequest: greengrass.GreengrassDeleteDeviceDefinitionRequest = { ... }
```

##### `deviceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteDeviceDefinitionRequest.property.deviceDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteDeviceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteDeviceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteDeviceDefinitionResponse: greengrass.GreengrassDeleteDeviceDefinitionResponse = { ... }
```

### GreengrassDeleteFunctionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteFunctionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteFunctionDefinitionRequest: greengrass.GreengrassDeleteFunctionDefinitionRequest = { ... }
```

##### `functionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteFunctionDefinitionRequest.property.functionDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteFunctionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteFunctionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteFunctionDefinitionResponse: greengrass.GreengrassDeleteFunctionDefinitionResponse = { ... }
```

### GreengrassDeleteGroupRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteGroupRequest: greengrass.GreengrassDeleteGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteGroupRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassDeleteGroupResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteGroupResponse: greengrass.GreengrassDeleteGroupResponse = { ... }
```

### GreengrassDeleteLoggerDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteLoggerDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteLoggerDefinitionRequest: greengrass.GreengrassDeleteLoggerDefinitionRequest = { ... }
```

##### `loggerDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteLoggerDefinitionRequest.property.loggerDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteLoggerDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteLoggerDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteLoggerDefinitionResponse: greengrass.GreengrassDeleteLoggerDefinitionResponse = { ... }
```

### GreengrassDeleteResourceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteResourceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteResourceDefinitionRequest: greengrass.GreengrassDeleteResourceDefinitionRequest = { ... }
```

##### `resourceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteResourceDefinitionRequest.property.resourceDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteResourceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteResourceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteResourceDefinitionResponse: greengrass.GreengrassDeleteResourceDefinitionResponse = { ... }
```

### GreengrassDeleteSubscriptionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassDeleteSubscriptionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteSubscriptionDefinitionRequest: greengrass.GreengrassDeleteSubscriptionDefinitionRequest = { ... }
```

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeleteSubscriptionDefinitionRequest.property.subscriptionDefinitionId"></a>

- *Type:* `string`

---

### GreengrassDeleteSubscriptionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassDeleteSubscriptionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeleteSubscriptionDefinitionResponse: greengrass.GreengrassDeleteSubscriptionDefinitionResponse = { ... }
```

### GreengrassDeployment <a name="aws-cdk-sdk.greengrass.GreengrassDeployment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeployment: greengrass.GreengrassDeployment = { ... }
```

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeployment.property.createdAt"></a>

- *Type:* `string`

---

##### `deploymentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeployment.property.deploymentArn"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeployment.property.deploymentId"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeployment.property.deploymentType"></a>

- *Type:* `string`

---

##### `groupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeployment.property.groupArn"></a>

- *Type:* `string`

---

### GreengrassDevice <a name="aws-cdk-sdk.greengrass.GreengrassDevice"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDevice: greengrass.GreengrassDevice = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDevice.property.certificateArn"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDevice.property.id"></a>

- *Type:* `string`

---

##### `thingArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDevice.property.thingArn"></a>

- *Type:* `string`

---

##### `syncShadow`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDevice.property.syncShadow"></a>

- *Type:* `boolean`

---

### GreengrassDeviceDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassDeviceDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDeviceDefinitionVersion: greengrass.GreengrassDeviceDefinitionVersion = { ... }
```

##### `devices`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDeviceDefinitionVersion.property.devices"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDevice`](#aws-cdk-sdk.greengrass.GreengrassDevice)[]

---

### GreengrassDisassociateRoleFromGroupRequest <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDisassociateRoleFromGroupRequest: greengrass.GreengrassDisassociateRoleFromGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassDisassociateRoleFromGroupResponse <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDisassociateRoleFromGroupResponse: greengrass.GreengrassDisassociateRoleFromGroupResponse = { ... }
```

##### `disassociatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupResponse.property.disassociatedAt"></a>

- *Type:* `string`

---

### GreengrassDisassociateServiceRoleFromAccountRequest <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateServiceRoleFromAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDisassociateServiceRoleFromAccountRequest: greengrass.GreengrassDisassociateServiceRoleFromAccountRequest = { ... }
```

### GreengrassDisassociateServiceRoleFromAccountResponse <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateServiceRoleFromAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassDisassociateServiceRoleFromAccountResponse: greengrass.GreengrassDisassociateServiceRoleFromAccountResponse = { ... }
```

##### `disassociatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassDisassociateServiceRoleFromAccountResponse.property.disassociatedAt"></a>

- *Type:* `string`

---

### GreengrassErrorDetail <a name="aws-cdk-sdk.greengrass.GreengrassErrorDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassErrorDetail: greengrass.GreengrassErrorDetail = { ... }
```

##### `detailedErrorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassErrorDetail.property.detailedErrorCode"></a>

- *Type:* `string`

---

##### `detailedErrorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassErrorDetail.property.detailedErrorMessage"></a>

- *Type:* `string`

---

### GreengrassFunction <a name="aws-cdk-sdk.greengrass.GreengrassFunction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunction: greengrass.GreengrassFunction = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunction.property.id"></a>

- *Type:* `string`

---

##### `functionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunction.property.functionArn"></a>

- *Type:* `string`

---

##### `functionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunction.property.functionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration`](#aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration)

---

### GreengrassFunctionConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionConfiguration: greengrass.GreengrassFunctionConfiguration = { ... }
```

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.encodingType"></a>

- *Type:* `string`

---

##### `environment`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.environment"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment`](#aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment)

---

##### `execArgs`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.execArgs"></a>

- *Type:* `string`

---

##### `executable`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.executable"></a>

- *Type:* `string`

---

##### `memorySize`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.memorySize"></a>

- *Type:* `number`

---

##### `pinned`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.pinned"></a>

- *Type:* `boolean`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfiguration.property.timeout"></a>

- *Type:* `number`

---

### GreengrassFunctionConfigurationEnvironment <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionConfigurationEnvironment: greengrass.GreengrassFunctionConfigurationEnvironment = { ... }
```

##### `accessSysfs`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment.property.accessSysfs"></a>

- *Type:* `boolean`

---

##### `execution`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment.property.execution"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionExecutionConfig`](#aws-cdk-sdk.greengrass.GreengrassFunctionExecutionConfig)

---

##### `resourceAccessPolicies`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment.property.resourceAccessPolicies"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResourceAccessPolicy`](#aws-cdk-sdk.greengrass.GreengrassResourceAccessPolicy)[]

---

##### `variables`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionConfigurationEnvironment.property.variables"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassFunctionDefaultConfig <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefaultConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionDefaultConfig: greengrass.GreengrassFunctionDefaultConfig = { ... }
```

##### `execution`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefaultConfig.property.execution"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionDefaultExecutionConfig`](#aws-cdk-sdk.greengrass.GreengrassFunctionDefaultExecutionConfig)

---

### GreengrassFunctionDefaultExecutionConfig <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefaultExecutionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionDefaultExecutionConfig: greengrass.GreengrassFunctionDefaultExecutionConfig = { ... }
```

##### `isolationMode`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefaultExecutionConfig.property.isolationMode"></a>

- *Type:* `string`

---

##### `runAs`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefaultExecutionConfig.property.runAs"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig`](#aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig)

---

### GreengrassFunctionDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionDefinitionVersion: greengrass.GreengrassFunctionDefinitionVersion = { ... }
```

##### `defaultConfig`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion.property.defaultConfig"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionDefaultConfig`](#aws-cdk-sdk.greengrass.GreengrassFunctionDefaultConfig)

---

##### `functions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion.property.functions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunction`](#aws-cdk-sdk.greengrass.GreengrassFunction)[]

---

### GreengrassFunctionExecutionConfig <a name="aws-cdk-sdk.greengrass.GreengrassFunctionExecutionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionExecutionConfig: greengrass.GreengrassFunctionExecutionConfig = { ... }
```

##### `isolationMode`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionExecutionConfig.property.isolationMode"></a>

- *Type:* `string`

---

##### `runAs`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionExecutionConfig.property.runAs"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig`](#aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig)

---

### GreengrassFunctionRunAsConfig <a name="aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassFunctionRunAsConfig: greengrass.GreengrassFunctionRunAsConfig = { ... }
```

##### `gid`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig.property.gid"></a>

- *Type:* `number`

---

##### `uid`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassFunctionRunAsConfig.property.uid"></a>

- *Type:* `number`

---

### GreengrassGetAssociatedRoleRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetAssociatedRoleRequest: greengrass.GreengrassGetAssociatedRoleRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassGetAssociatedRoleResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetAssociatedRoleResponse: greengrass.GreengrassGetAssociatedRoleResponse = { ... }
```

##### `associatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleResponse.property.associatedAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleResponse.property.roleArn"></a>

- *Type:* `string`

---

### GreengrassGetBulkDeploymentStatusRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetBulkDeploymentStatusRequest: greengrass.GreengrassGetBulkDeploymentStatusRequest = { ... }
```

##### `bulkDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest.property.bulkDeploymentId"></a>

- *Type:* `string`

---

### GreengrassGetBulkDeploymentStatusResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetBulkDeploymentStatusResponse: greengrass.GreengrassGetBulkDeploymentStatusResponse = { ... }
```

##### `bulkDeploymentMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse.property.bulkDeploymentMetrics"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassBulkDeploymentMetrics`](#aws-cdk-sdk.greengrass.GreengrassBulkDeploymentMetrics)

---

##### `bulkDeploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse.property.bulkDeploymentStatus"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse.property.createdAt"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassErrorDetail`](#aws-cdk-sdk.greengrass.GreengrassErrorDetail)[]

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse.property.errorMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetConnectivityInfoRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetConnectivityInfoRequest: greengrass.GreengrassGetConnectivityInfoRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoRequest.property.thingName"></a>

- *Type:* `string`

---

### GreengrassGetConnectivityInfoResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetConnectivityInfoResponse: greengrass.GreengrassGetConnectivityInfoResponse = { ... }
```

##### `connectivityInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoResponse.property.connectivityInfo"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnectivityInfo`](#aws-cdk-sdk.greengrass.GreengrassConnectivityInfo)[]

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoResponse.property.message"></a>

- *Type:* `string`

---

### GreengrassGetConnectorDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetConnectorDefinitionRequest: greengrass.GreengrassGetConnectorDefinitionRequest = { ... }
```

##### `connectorDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionRequest.property.connectorDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetConnectorDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetConnectorDefinitionResponse: greengrass.GreengrassGetConnectorDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetConnectorDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetConnectorDefinitionVersionRequest: greengrass.GreengrassGetConnectorDefinitionVersionRequest = { ... }
```

##### `connectorDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest.property.connectorDefinitionId"></a>

- *Type:* `string`

---

##### `connectorDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest.property.connectorDefinitionVersionId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassGetConnectorDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetConnectorDefinitionVersionResponse: greengrass.GreengrassGetConnectorDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnectorDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassConnectorDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetCoreDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetCoreDefinitionRequest: greengrass.GreengrassGetCoreDefinitionRequest = { ... }
```

##### `coreDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionRequest.property.coreDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetCoreDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetCoreDefinitionResponse: greengrass.GreengrassGetCoreDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetCoreDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetCoreDefinitionVersionRequest: greengrass.GreengrassGetCoreDefinitionVersionRequest = { ... }
```

##### `coreDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest.property.coreDefinitionId"></a>

- *Type:* `string`

---

##### `coreDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest.property.coreDefinitionVersionId"></a>

- *Type:* `string`

---

### GreengrassGetCoreDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetCoreDefinitionVersionResponse: greengrass.GreengrassGetCoreDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCoreDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassCoreDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetDeploymentStatusRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetDeploymentStatusRequest: greengrass.GreengrassGetDeploymentStatusRequest = { ... }
```

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest.property.deploymentId"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassGetDeploymentStatusResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetDeploymentStatusResponse: greengrass.GreengrassGetDeploymentStatusResponse = { ... }
```

##### `deploymentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusResponse.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusResponse.property.deploymentType"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusResponse.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassErrorDetail`](#aws-cdk-sdk.greengrass.GreengrassErrorDetail)[]

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusResponse.property.errorMessage"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusResponse.property.updatedAt"></a>

- *Type:* `string`

---

### GreengrassGetDeviceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetDeviceDefinitionRequest: greengrass.GreengrassGetDeviceDefinitionRequest = { ... }
```

##### `deviceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionRequest.property.deviceDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetDeviceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetDeviceDefinitionResponse: greengrass.GreengrassGetDeviceDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetDeviceDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetDeviceDefinitionVersionRequest: greengrass.GreengrassGetDeviceDefinitionVersionRequest = { ... }
```

##### `deviceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest.property.deviceDefinitionId"></a>

- *Type:* `string`

---

##### `deviceDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest.property.deviceDefinitionVersionId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassGetDeviceDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetDeviceDefinitionVersionResponse: greengrass.GreengrassGetDeviceDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeviceDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassDeviceDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetFunctionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetFunctionDefinitionRequest: greengrass.GreengrassGetFunctionDefinitionRequest = { ... }
```

##### `functionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionRequest.property.functionDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetFunctionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetFunctionDefinitionResponse: greengrass.GreengrassGetFunctionDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetFunctionDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetFunctionDefinitionVersionRequest: greengrass.GreengrassGetFunctionDefinitionVersionRequest = { ... }
```

##### `functionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest.property.functionDefinitionId"></a>

- *Type:* `string`

---

##### `functionDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest.property.functionDefinitionVersionId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassGetFunctionDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetFunctionDefinitionVersionResponse: greengrass.GreengrassGetFunctionDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassFunctionDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetGroupCertificateAuthorityRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupCertificateAuthorityRequest: greengrass.GreengrassGetGroupCertificateAuthorityRequest = { ... }
```

##### `certificateAuthorityId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest.property.certificateAuthorityId"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassGetGroupCertificateAuthorityResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupCertificateAuthorityResponse: greengrass.GreengrassGetGroupCertificateAuthorityResponse = { ... }
```

##### `groupCertificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityResponse.property.groupCertificateAuthorityArn"></a>

- *Type:* `string`

---

##### `groupCertificateAuthorityId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityResponse.property.groupCertificateAuthorityId"></a>

- *Type:* `string`

---

##### `pemEncodedCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityResponse.property.pemEncodedCertificate"></a>

- *Type:* `string`

---

### GreengrassGetGroupCertificateConfigurationRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupCertificateConfigurationRequest: greengrass.GreengrassGetGroupCertificateConfigurationRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassGetGroupCertificateConfigurationResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupCertificateConfigurationResponse: greengrass.GreengrassGetGroupCertificateConfigurationResponse = { ... }
```

##### `certificateAuthorityExpiryInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationResponse.property.certificateAuthorityExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `certificateExpiryInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationResponse.property.certificateExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationResponse.property.groupId"></a>

- *Type:* `string`

---

### GreengrassGetGroupRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupRequest: greengrass.GreengrassGetGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassGetGroupResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupResponse: greengrass.GreengrassGetGroupResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetGroupVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupVersionRequest: greengrass.GreengrassGetGroupVersionRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest.property.groupId"></a>

- *Type:* `string`

---

##### `groupVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest.property.groupVersionId"></a>

- *Type:* `string`

---

### GreengrassGetGroupVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetGroupVersionResponse: greengrass.GreengrassGetGroupVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupVersion`](#aws-cdk-sdk.greengrass.GreengrassGroupVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetGroupVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetLoggerDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetLoggerDefinitionRequest: greengrass.GreengrassGetLoggerDefinitionRequest = { ... }
```

##### `loggerDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionRequest.property.loggerDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetLoggerDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetLoggerDefinitionResponse: greengrass.GreengrassGetLoggerDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetLoggerDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetLoggerDefinitionVersionRequest: greengrass.GreengrassGetLoggerDefinitionVersionRequest = { ... }
```

##### `loggerDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest.property.loggerDefinitionId"></a>

- *Type:* `string`

---

##### `loggerDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest.property.loggerDefinitionVersionId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassGetLoggerDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetLoggerDefinitionVersionResponse: greengrass.GreengrassGetLoggerDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLoggerDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassLoggerDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetResourceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetResourceDefinitionRequest: greengrass.GreengrassGetResourceDefinitionRequest = { ... }
```

##### `resourceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionRequest.property.resourceDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetResourceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetResourceDefinitionResponse: greengrass.GreengrassGetResourceDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetResourceDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetResourceDefinitionVersionRequest: greengrass.GreengrassGetResourceDefinitionVersionRequest = { ... }
```

##### `resourceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest.property.resourceDefinitionId"></a>

- *Type:* `string`

---

##### `resourceDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest.property.resourceDefinitionVersionId"></a>

- *Type:* `string`

---

### GreengrassGetResourceDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetResourceDefinitionVersionResponse: greengrass.GreengrassGetResourceDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResourceDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassResourceDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetServiceRoleForAccountRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetServiceRoleForAccountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetServiceRoleForAccountRequest: greengrass.GreengrassGetServiceRoleForAccountRequest = { ... }
```

### GreengrassGetServiceRoleForAccountResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetServiceRoleForAccountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetServiceRoleForAccountResponse: greengrass.GreengrassGetServiceRoleForAccountResponse = { ... }
```

##### `associatedAt`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetServiceRoleForAccountResponse.property.associatedAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetServiceRoleForAccountResponse.property.roleArn"></a>

- *Type:* `string`

---

### GreengrassGetSubscriptionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetSubscriptionDefinitionRequest: greengrass.GreengrassGetSubscriptionDefinitionRequest = { ... }
```

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionRequest.property.subscriptionDefinitionId"></a>

- *Type:* `string`

---

### GreengrassGetSubscriptionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetSubscriptionDefinitionResponse: greengrass.GreengrassGetSubscriptionDefinitionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassGetSubscriptionDefinitionVersionRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetSubscriptionDefinitionVersionRequest: greengrass.GreengrassGetSubscriptionDefinitionVersionRequest = { ... }
```

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest.property.subscriptionDefinitionId"></a>

- *Type:* `string`

---

##### `subscriptionDefinitionVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest.property.subscriptionDefinitionVersionId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassGetSubscriptionDefinitionVersionResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetSubscriptionDefinitionVersionResponse: greengrass.GreengrassGetSubscriptionDefinitionVersionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSubscriptionDefinitionVersion`](#aws-cdk-sdk.greengrass.GreengrassSubscriptionDefinitionVersion)

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassGetThingRuntimeConfigurationRequest <a name="aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetThingRuntimeConfigurationRequest: greengrass.GreengrassGetThingRuntimeConfigurationRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest.property.thingName"></a>

- *Type:* `string`

---

### GreengrassGetThingRuntimeConfigurationResponse <a name="aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGetThingRuntimeConfigurationResponse: greengrass.GreengrassGetThingRuntimeConfigurationResponse = { ... }
```

##### `runtimeConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationResponse.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassRuntimeConfiguration`](#aws-cdk-sdk.greengrass.GreengrassRuntimeConfiguration)

---

### GreengrassGroupCertificateAuthorityProperties <a name="aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGroupCertificateAuthorityProperties: greengrass.GreengrassGroupCertificateAuthorityProperties = { ... }
```

##### `groupCertificateAuthorityArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties.property.groupCertificateAuthorityArn"></a>

- *Type:* `string`

---

##### `groupCertificateAuthorityId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties.property.groupCertificateAuthorityId"></a>

- *Type:* `string`

---

### GreengrassGroupInformation <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGroupInformation: greengrass.GreengrassGroupInformation = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupInformation.property.name"></a>

- *Type:* `string`

---

### GreengrassGroupOwnerSetting <a name="aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGroupOwnerSetting: greengrass.GreengrassGroupOwnerSetting = { ... }
```

##### `autoAddGroupOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting.property.autoAddGroupOwner"></a>

- *Type:* `boolean`

---

##### `groupOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting.property.groupOwner"></a>

- *Type:* `string`

---

### GreengrassGroupVersion <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassGroupVersion: greengrass.GreengrassGroupVersion = { ... }
```

##### `connectorDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.connectorDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `coreDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.coreDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `deviceDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.deviceDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `functionDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.functionDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `loggerDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.loggerDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `resourceDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.resourceDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `subscriptionDefinitionVersionArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassGroupVersion.property.subscriptionDefinitionVersionArn"></a>

- *Type:* `string`

---

### GreengrassListBulkDeploymentDetailedReportsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListBulkDeploymentDetailedReportsRequest: greengrass.GreengrassListBulkDeploymentDetailedReportsRequest = { ... }
```

##### `bulkDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest.property.bulkDeploymentId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListBulkDeploymentDetailedReportsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListBulkDeploymentDetailedReportsResponse: greengrass.GreengrassListBulkDeploymentDetailedReportsResponse = { ... }
```

##### `deployments`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsResponse.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult`](#aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListBulkDeploymentsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListBulkDeploymentsRequest: greengrass.GreengrassListBulkDeploymentsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListBulkDeploymentsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListBulkDeploymentsResponse: greengrass.GreengrassListBulkDeploymentsResponse = { ... }
```

##### `bulkDeployments`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsResponse.property.bulkDeployments"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassBulkDeployment`](#aws-cdk-sdk.greengrass.GreengrassBulkDeployment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListConnectorDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListConnectorDefinitionsRequest: greengrass.GreengrassListConnectorDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListConnectorDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListConnectorDefinitionsResponse: greengrass.GreengrassListConnectorDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListConnectorDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListConnectorDefinitionVersionsRequest: greengrass.GreengrassListConnectorDefinitionVersionsRequest = { ... }
```

##### `connectorDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest.property.connectorDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListConnectorDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListConnectorDefinitionVersionsResponse: greengrass.GreengrassListConnectorDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListCoreDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListCoreDefinitionsRequest: greengrass.GreengrassListCoreDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListCoreDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListCoreDefinitionsResponse: greengrass.GreengrassListCoreDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListCoreDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListCoreDefinitionVersionsRequest: greengrass.GreengrassListCoreDefinitionVersionsRequest = { ... }
```

##### `coreDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest.property.coreDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListCoreDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListCoreDefinitionVersionsResponse: greengrass.GreengrassListCoreDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListDeploymentsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListDeploymentsRequest: greengrass.GreengrassListDeploymentsRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest.property.groupId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListDeploymentsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListDeploymentsResponse: greengrass.GreengrassListDeploymentsResponse = { ... }
```

##### `deployments`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsResponse.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeployment`](#aws-cdk-sdk.greengrass.GreengrassDeployment)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeploymentsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListDeviceDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListDeviceDefinitionsRequest: greengrass.GreengrassListDeviceDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListDeviceDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListDeviceDefinitionsResponse: greengrass.GreengrassListDeviceDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListDeviceDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListDeviceDefinitionVersionsRequest: greengrass.GreengrassListDeviceDefinitionVersionsRequest = { ... }
```

##### `deviceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest.property.deviceDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListDeviceDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListDeviceDefinitionVersionsResponse: greengrass.GreengrassListDeviceDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListFunctionDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListFunctionDefinitionsRequest: greengrass.GreengrassListFunctionDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListFunctionDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListFunctionDefinitionsResponse: greengrass.GreengrassListFunctionDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListFunctionDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListFunctionDefinitionVersionsRequest: greengrass.GreengrassListFunctionDefinitionVersionsRequest = { ... }
```

##### `functionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest.property.functionDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListFunctionDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListFunctionDefinitionVersionsResponse: greengrass.GreengrassListFunctionDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListGroupCertificateAuthoritiesRequest <a name="aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListGroupCertificateAuthoritiesRequest: greengrass.GreengrassListGroupCertificateAuthoritiesRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesRequest.property.groupId"></a>

- *Type:* `string`

---

### GreengrassListGroupCertificateAuthoritiesResponse <a name="aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListGroupCertificateAuthoritiesResponse: greengrass.GreengrassListGroupCertificateAuthoritiesResponse = { ... }
```

##### `groupCertificateAuthorities`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesResponse.property.groupCertificateAuthorities"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties`](#aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties)[]

---

### GreengrassListGroupsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListGroupsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListGroupsRequest: greengrass.GreengrassListGroupsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListGroupsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListGroupsResponse: greengrass.GreengrassListGroupsResponse = { ... }
```

##### `groups`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupsResponse.property.groups"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupInformation`](#aws-cdk-sdk.greengrass.GreengrassGroupInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListGroupVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListGroupVersionsRequest: greengrass.GreengrassListGroupVersionsRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest.property.groupId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListGroupVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListGroupVersionsResponse: greengrass.GreengrassListGroupVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListGroupVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListLoggerDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListLoggerDefinitionsRequest: greengrass.GreengrassListLoggerDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListLoggerDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListLoggerDefinitionsResponse: greengrass.GreengrassListLoggerDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListLoggerDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListLoggerDefinitionVersionsRequest: greengrass.GreengrassListLoggerDefinitionVersionsRequest = { ... }
```

##### `loggerDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest.property.loggerDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListLoggerDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListLoggerDefinitionVersionsResponse: greengrass.GreengrassListLoggerDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListResourceDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListResourceDefinitionsRequest: greengrass.GreengrassListResourceDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListResourceDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListResourceDefinitionsResponse: greengrass.GreengrassListResourceDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListResourceDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListResourceDefinitionVersionsRequest: greengrass.GreengrassListResourceDefinitionVersionsRequest = { ... }
```

##### `resourceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest.property.resourceDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListResourceDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListResourceDefinitionVersionsResponse: greengrass.GreengrassListResourceDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListSubscriptionDefinitionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListSubscriptionDefinitionsRequest: greengrass.GreengrassListSubscriptionDefinitionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListSubscriptionDefinitionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListSubscriptionDefinitionsResponse: greengrass.GreengrassListSubscriptionDefinitionsResponse = { ... }
```

##### `definitions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsResponse.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListSubscriptionDefinitionVersionsRequest <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListSubscriptionDefinitionVersionsRequest: greengrass.GreengrassListSubscriptionDefinitionVersionsRequest = { ... }
```

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest.property.subscriptionDefinitionId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest.property.maxResults"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GreengrassListSubscriptionDefinitionVersionsResponse <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListSubscriptionDefinitionVersionsResponse: greengrass.GreengrassListSubscriptionDefinitionVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsResponse.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---

### GreengrassListTagsForResourceRequest <a name="aws-cdk-sdk.greengrass.GreengrassListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListTagsForResourceRequest: greengrass.GreengrassListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GreengrassListTagsForResourceResponse <a name="aws-cdk-sdk.greengrass.GreengrassListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassListTagsForResourceResponse: greengrass.GreengrassListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassLocalDeviceResourceData <a name="aws-cdk-sdk.greengrass.GreengrassLocalDeviceResourceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassLocalDeviceResourceData: greengrass.GreengrassLocalDeviceResourceData = { ... }
```

##### `groupOwnerSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLocalDeviceResourceData.property.groupOwnerSetting"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting`](#aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting)

---

##### `sourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLocalDeviceResourceData.property.sourcePath"></a>

- *Type:* `string`

---

### GreengrassLocalVolumeResourceData <a name="aws-cdk-sdk.greengrass.GreengrassLocalVolumeResourceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassLocalVolumeResourceData: greengrass.GreengrassLocalVolumeResourceData = { ... }
```

##### `destinationPath`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLocalVolumeResourceData.property.destinationPath"></a>

- *Type:* `string`

---

##### `groupOwnerSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLocalVolumeResourceData.property.groupOwnerSetting"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting`](#aws-cdk-sdk.greengrass.GreengrassGroupOwnerSetting)

---

##### `sourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLocalVolumeResourceData.property.sourcePath"></a>

- *Type:* `string`

---

### GreengrassLogger <a name="aws-cdk-sdk.greengrass.GreengrassLogger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassLogger: greengrass.GreengrassLogger = { ... }
```

##### `component`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLogger.property.component"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLogger.property.id"></a>

- *Type:* `string`

---

##### `level`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLogger.property.level"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLogger.property.type"></a>

- *Type:* `string`

---

##### `space`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLogger.property.space"></a>

- *Type:* `number`

---

### GreengrassLoggerDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassLoggerDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassLoggerDefinitionVersion: greengrass.GreengrassLoggerDefinitionVersion = { ... }
```

##### `loggers`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassLoggerDefinitionVersion.property.loggers"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLogger`](#aws-cdk-sdk.greengrass.GreengrassLogger)[]

---

### GreengrassResetDeploymentsRequest <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResetDeploymentsRequest: greengrass.GreengrassResetDeploymentsRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest.property.groupId"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest.property.force"></a>

- *Type:* `boolean`

---

### GreengrassResetDeploymentsResponse <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResetDeploymentsResponse: greengrass.GreengrassResetDeploymentsResponse = { ... }
```

##### `deploymentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsResponse.property.deploymentArn"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResetDeploymentsResponse.property.deploymentId"></a>

- *Type:* `string`

---

### GreengrassResource <a name="aws-cdk-sdk.greengrass.GreengrassResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResource: greengrass.GreengrassResource = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResource.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResource.property.name"></a>

- *Type:* `string`

---

##### `resourceDataContainer`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResource.property.resourceDataContainer"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResourceDataContainer`](#aws-cdk-sdk.greengrass.GreengrassResourceDataContainer)

---

### GreengrassResourceAccessPolicy <a name="aws-cdk-sdk.greengrass.GreengrassResourceAccessPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResourceAccessPolicy: greengrass.GreengrassResourceAccessPolicy = { ... }
```

##### `resourceId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceAccessPolicy.property.resourceId"></a>

- *Type:* `string`

---

##### `permission`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceAccessPolicy.property.permission"></a>

- *Type:* `string`

---

### GreengrassResourceDataContainer <a name="aws-cdk-sdk.greengrass.GreengrassResourceDataContainer"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResourceDataContainer: greengrass.GreengrassResourceDataContainer = { ... }
```

##### `localDeviceResourceData`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDataContainer.property.localDeviceResourceData"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLocalDeviceResourceData`](#aws-cdk-sdk.greengrass.GreengrassLocalDeviceResourceData)

---

##### `localVolumeResourceData`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDataContainer.property.localVolumeResourceData"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLocalVolumeResourceData`](#aws-cdk-sdk.greengrass.GreengrassLocalVolumeResourceData)

---

##### `s3MachineLearningModelResourceData`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDataContainer.property.s3MachineLearningModelResourceData"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassS3MachineLearningModelResourceData`](#aws-cdk-sdk.greengrass.GreengrassS3MachineLearningModelResourceData)

---

##### `sageMakerMachineLearningModelResourceData`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDataContainer.property.sageMakerMachineLearningModelResourceData"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSageMakerMachineLearningModelResourceData`](#aws-cdk-sdk.greengrass.GreengrassSageMakerMachineLearningModelResourceData)

---

##### `secretsManagerSecretResourceData`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDataContainer.property.secretsManagerSecretResourceData"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSecretsManagerSecretResourceData`](#aws-cdk-sdk.greengrass.GreengrassSecretsManagerSecretResourceData)

---

### GreengrassResourceDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResourceDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResourceDefinitionVersion: greengrass.GreengrassResourceDefinitionVersion = { ... }
```

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDefinitionVersion.property.resources"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResource`](#aws-cdk-sdk.greengrass.GreengrassResource)[]

---

### GreengrassResourceDownloadOwnerSetting <a name="aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassResourceDownloadOwnerSetting: greengrass.GreengrassResourceDownloadOwnerSetting = { ... }
```

##### `groupOwner`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting.property.groupOwner"></a>

- *Type:* `string`

---

##### `groupPermission`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting.property.groupPermission"></a>

- *Type:* `string`

---

### GreengrassRuntimeConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassRuntimeConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassRuntimeConfiguration: greengrass.GreengrassRuntimeConfiguration = { ... }
```

##### `telemetryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassRuntimeConfiguration.property.telemetryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassTelemetryConfiguration`](#aws-cdk-sdk.greengrass.GreengrassTelemetryConfiguration)

---

### GreengrassS3MachineLearningModelResourceData <a name="aws-cdk-sdk.greengrass.GreengrassS3MachineLearningModelResourceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassS3MachineLearningModelResourceData: greengrass.GreengrassS3MachineLearningModelResourceData = { ... }
```

##### `destinationPath`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassS3MachineLearningModelResourceData.property.destinationPath"></a>

- *Type:* `string`

---

##### `ownerSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassS3MachineLearningModelResourceData.property.ownerSetting"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting`](#aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting)

---

##### `s3Uri`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassS3MachineLearningModelResourceData.property.s3Uri"></a>

- *Type:* `string`

---

### GreengrassSageMakerMachineLearningModelResourceData <a name="aws-cdk-sdk.greengrass.GreengrassSageMakerMachineLearningModelResourceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassSageMakerMachineLearningModelResourceData: greengrass.GreengrassSageMakerMachineLearningModelResourceData = { ... }
```

##### `destinationPath`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSageMakerMachineLearningModelResourceData.property.destinationPath"></a>

- *Type:* `string`

---

##### `ownerSetting`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSageMakerMachineLearningModelResourceData.property.ownerSetting"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting`](#aws-cdk-sdk.greengrass.GreengrassResourceDownloadOwnerSetting)

---

##### `sageMakerJobArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSageMakerMachineLearningModelResourceData.property.sageMakerJobArn"></a>

- *Type:* `string`

---

### GreengrassSecretsManagerSecretResourceData <a name="aws-cdk-sdk.greengrass.GreengrassSecretsManagerSecretResourceData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassSecretsManagerSecretResourceData: greengrass.GreengrassSecretsManagerSecretResourceData = { ... }
```

##### `additionalStagingLabelsToDownload`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSecretsManagerSecretResourceData.property.additionalStagingLabelsToDownload"></a>

- *Type:* `string`[]

---

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSecretsManagerSecretResourceData.property.arn"></a>

- *Type:* `string`

---

### GreengrassStartBulkDeploymentRequest <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassStartBulkDeploymentRequest: greengrass.GreengrassStartBulkDeploymentRequest = { ... }
```

##### `executionRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest.property.executionRoleArn"></a>

- *Type:* `string`

---

##### `inputFileUri`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest.property.inputFileUri"></a>

- *Type:* `string`

---

##### `amznClientToken`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest.property.amznClientToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassStartBulkDeploymentResponse <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassStartBulkDeploymentResponse: greengrass.GreengrassStartBulkDeploymentResponse = { ... }
```

##### `bulkDeploymentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentResponse.property.bulkDeploymentArn"></a>

- *Type:* `string`

---

##### `bulkDeploymentId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentResponse.property.bulkDeploymentId"></a>

- *Type:* `string`

---

### GreengrassStopBulkDeploymentRequest <a name="aws-cdk-sdk.greengrass.GreengrassStopBulkDeploymentRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassStopBulkDeploymentRequest: greengrass.GreengrassStopBulkDeploymentRequest = { ... }
```

##### `bulkDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassStopBulkDeploymentRequest.property.bulkDeploymentId"></a>

- *Type:* `string`

---

### GreengrassStopBulkDeploymentResponse <a name="aws-cdk-sdk.greengrass.GreengrassStopBulkDeploymentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassStopBulkDeploymentResponse: greengrass.GreengrassStopBulkDeploymentResponse = { ... }
```

### GreengrassSubscription <a name="aws-cdk-sdk.greengrass.GreengrassSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassSubscription: greengrass.GreengrassSubscription = { ... }
```

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSubscription.property.id"></a>

- *Type:* `string`

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSubscription.property.source"></a>

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSubscription.property.subject"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSubscription.property.target"></a>

- *Type:* `string`

---

### GreengrassSubscriptionDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassSubscriptionDefinitionVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassSubscriptionDefinitionVersion: greengrass.GreengrassSubscriptionDefinitionVersion = { ... }
```

##### `subscriptions`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassSubscriptionDefinitionVersion.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSubscription`](#aws-cdk-sdk.greengrass.GreengrassSubscription)[]

---

### GreengrassTagResourceRequest <a name="aws-cdk-sdk.greengrass.GreengrassTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassTagResourceRequest: greengrass.GreengrassTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GreengrassTelemetryConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassTelemetryConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassTelemetryConfiguration: greengrass.GreengrassTelemetryConfiguration = { ... }
```

##### `telemetry`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassTelemetryConfiguration.property.telemetry"></a>

- *Type:* `string`

---

##### `configurationSyncStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassTelemetryConfiguration.property.configurationSyncStatus"></a>

- *Type:* `string`

---

### GreengrassTelemetryConfigurationUpdate <a name="aws-cdk-sdk.greengrass.GreengrassTelemetryConfigurationUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassTelemetryConfigurationUpdate: greengrass.GreengrassTelemetryConfigurationUpdate = { ... }
```

##### `telemetry`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassTelemetryConfigurationUpdate.property.telemetry"></a>

- *Type:* `string`

---

### GreengrassUntagResourceRequest <a name="aws-cdk-sdk.greengrass.GreengrassUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUntagResourceRequest: greengrass.GreengrassUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### GreengrassUpdateConnectivityInfoRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateConnectivityInfoRequest: greengrass.GreengrassUpdateConnectivityInfoRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest.property.thingName"></a>

- *Type:* `string`

---

##### `connectivityInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest.property.connectivityInfo"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnectivityInfo`](#aws-cdk-sdk.greengrass.GreengrassConnectivityInfo)[]

---

### GreengrassUpdateConnectivityInfoResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateConnectivityInfoResponse: greengrass.GreengrassUpdateConnectivityInfoResponse = { ... }
```

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoResponse.property.message"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoResponse.property.version"></a>

- *Type:* `string`

---

### GreengrassUpdateConnectorDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectorDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateConnectorDefinitionRequest: greengrass.GreengrassUpdateConnectorDefinitionRequest = { ... }
```

##### `connectorDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectorDefinitionRequest.property.connectorDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectorDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateConnectorDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateConnectorDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateConnectorDefinitionResponse: greengrass.GreengrassUpdateConnectorDefinitionResponse = { ... }
```

### GreengrassUpdateCoreDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateCoreDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateCoreDefinitionRequest: greengrass.GreengrassUpdateCoreDefinitionRequest = { ... }
```

##### `coreDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateCoreDefinitionRequest.property.coreDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateCoreDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateCoreDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateCoreDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateCoreDefinitionResponse: greengrass.GreengrassUpdateCoreDefinitionResponse = { ... }
```

### GreengrassUpdateDeviceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateDeviceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateDeviceDefinitionRequest: greengrass.GreengrassUpdateDeviceDefinitionRequest = { ... }
```

##### `deviceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateDeviceDefinitionRequest.property.deviceDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateDeviceDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateDeviceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateDeviceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateDeviceDefinitionResponse: greengrass.GreengrassUpdateDeviceDefinitionResponse = { ... }
```

### GreengrassUpdateFunctionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateFunctionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateFunctionDefinitionRequest: greengrass.GreengrassUpdateFunctionDefinitionRequest = { ... }
```

##### `functionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateFunctionDefinitionRequest.property.functionDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateFunctionDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateFunctionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateFunctionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateFunctionDefinitionResponse: greengrass.GreengrassUpdateFunctionDefinitionResponse = { ... }
```

### GreengrassUpdateGroupCertificateConfigurationRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateGroupCertificateConfigurationRequest: greengrass.GreengrassUpdateGroupCertificateConfigurationRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest.property.groupId"></a>

- *Type:* `string`

---

##### `certificateExpiryInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest.property.certificateExpiryInMilliseconds"></a>

- *Type:* `string`

---

### GreengrassUpdateGroupCertificateConfigurationResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateGroupCertificateConfigurationResponse: greengrass.GreengrassUpdateGroupCertificateConfigurationResponse = { ... }
```

##### `certificateAuthorityExpiryInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationResponse.property.certificateAuthorityExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `certificateExpiryInMilliseconds`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationResponse.property.certificateExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `groupId`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationResponse.property.groupId"></a>

- *Type:* `string`

---

### GreengrassUpdateGroupRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateGroupRequest: greengrass.GreengrassUpdateGroupRequest = { ... }
```

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupRequest.property.groupId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateGroupResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateGroupResponse: greengrass.GreengrassUpdateGroupResponse = { ... }
```

### GreengrassUpdateLoggerDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateLoggerDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateLoggerDefinitionRequest: greengrass.GreengrassUpdateLoggerDefinitionRequest = { ... }
```

##### `loggerDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateLoggerDefinitionRequest.property.loggerDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateLoggerDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateLoggerDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateLoggerDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateLoggerDefinitionResponse: greengrass.GreengrassUpdateLoggerDefinitionResponse = { ... }
```

### GreengrassUpdateResourceDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateResourceDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateResourceDefinitionRequest: greengrass.GreengrassUpdateResourceDefinitionRequest = { ... }
```

##### `resourceDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateResourceDefinitionRequest.property.resourceDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateResourceDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateResourceDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateResourceDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateResourceDefinitionResponse: greengrass.GreengrassUpdateResourceDefinitionResponse = { ... }
```

### GreengrassUpdateSubscriptionDefinitionRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateSubscriptionDefinitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateSubscriptionDefinitionRequest: greengrass.GreengrassUpdateSubscriptionDefinitionRequest = { ... }
```

##### `subscriptionDefinitionId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateSubscriptionDefinitionRequest.property.subscriptionDefinitionId"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateSubscriptionDefinitionRequest.property.name"></a>

- *Type:* `string`

---

### GreengrassUpdateSubscriptionDefinitionResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateSubscriptionDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateSubscriptionDefinitionResponse: greengrass.GreengrassUpdateSubscriptionDefinitionResponse = { ... }
```

### GreengrassUpdateThingRuntimeConfigurationRequest <a name="aws-cdk-sdk.greengrass.GreengrassUpdateThingRuntimeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateThingRuntimeConfigurationRequest: greengrass.GreengrassUpdateThingRuntimeConfigurationRequest = { ... }
```

##### `thingName`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateThingRuntimeConfigurationRequest.property.thingName"></a>

- *Type:* `string`

---

##### `telemetryConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassUpdateThingRuntimeConfigurationRequest.property.telemetryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassTelemetryConfigurationUpdate`](#aws-cdk-sdk.greengrass.GreengrassTelemetryConfigurationUpdate)

---

### GreengrassUpdateThingRuntimeConfigurationResponse <a name="aws-cdk-sdk.greengrass.GreengrassUpdateThingRuntimeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassUpdateThingRuntimeConfigurationResponse: greengrass.GreengrassUpdateThingRuntimeConfigurationResponse = { ... }
```

### GreengrassVersionInformation <a name="aws-cdk-sdk.greengrass.GreengrassVersionInformation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

const greengrassVersionInformation: greengrass.GreengrassVersionInformation = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassVersionInformation.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassVersionInformation.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassVersionInformation.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.greengrass.GreengrassVersionInformation.property.version"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### GreengrassResponsesAssociateRoleToGroup <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateRoleToGroup"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateRoleToGroup.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesAssociateRoleToGroup(__scope: Construct, __resources: string[], __input: GreengrassAssociateRoleToGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateRoleToGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateRoleToGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateRoleToGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassAssociateRoleToGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `associatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateRoleToGroup.property.associatedAt"></a>

- *Type:* `string`

---


### GreengrassResponsesAssociateServiceRoleToAccount <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateServiceRoleToAccount"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateServiceRoleToAccount.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesAssociateServiceRoleToAccount(__scope: Construct, __resources: string[], __input: GreengrassAssociateServiceRoleToAccountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateServiceRoleToAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateServiceRoleToAccount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateServiceRoleToAccount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountRequest`](#aws-cdk-sdk.greengrass.GreengrassAssociateServiceRoleToAccountRequest)

---



#### Properties <a name="Properties"></a>

##### `associatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesAssociateServiceRoleToAccount.property.associatedAt"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateConnectorDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateConnectorDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateConnectorDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateConnectorDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateConnectorDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateConnectorDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateConnectorDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateConnectorDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateCoreDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateCoreDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateCoreDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateCoreDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateCoreDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateCoreDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateCoreDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateCoreDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateDeployment <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateDeployment(__scope: Construct, __resources: string[], __input: GreengrassCreateDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment.property.deploymentArn"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeployment.property.deploymentId"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateDeviceDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateDeviceDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateDeviceDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateDeviceDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateDeviceDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateDeviceDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateDeviceDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateDeviceDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateFunctionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateFunctionDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateFunctionDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateFunctionDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateFunctionDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateFunctionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateFunctionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateFunctionDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateGroup <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateGroup(__scope: Construct, __resources: string[], __input: GreengrassCreateGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroup.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateGroupCertificateAuthority <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupCertificateAuthority.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateGroupCertificateAuthority(__scope: Construct, __resources: string[], __input: GreengrassCreateGroupCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateGroupCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `groupCertificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupCertificateAuthority.property.groupCertificateAuthorityArn"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateGroupVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateGroupVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateGroupVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateGroupVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateGroupVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateLoggerDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateLoggerDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateLoggerDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateLoggerDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateLoggerDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateLoggerDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateLoggerDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateLoggerDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateResourceDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateResourceDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateResourceDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateResourceDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateResourceDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateResourceDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateResourceDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateResourceDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateSoftwareUpdateJob <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateSoftwareUpdateJob(__scope: Construct, __resources: string[], __input: GreengrassCreateSoftwareUpdateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateSoftwareUpdateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `iotJobArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.property.iotJobArn"></a>

- *Type:* `string`

---

##### `iotJobId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.property.iotJobId"></a>

- *Type:* `string`

---

##### `platformSoftwareVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSoftwareUpdateJob.property.platformSoftwareVersion"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateSubscriptionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateSubscriptionDefinition(__scope: Construct, __resources: string[], __input: GreengrassCreateSubscriptionDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinition.property.name"></a>

- *Type:* `string`

---


### GreengrassResponsesCreateSubscriptionDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassCreateSubscriptionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassCreateSubscriptionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesCreateSubscriptionDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesDisassociateRoleFromGroup <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateRoleFromGroup"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateRoleFromGroup.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesDisassociateRoleFromGroup(__scope: Construct, __resources: string[], __input: GreengrassDisassociateRoleFromGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateRoleFromGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateRoleFromGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateRoleFromGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassDisassociateRoleFromGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `disassociatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateRoleFromGroup.property.disassociatedAt"></a>

- *Type:* `string`

---


### GreengrassResponsesDisassociateServiceRoleFromAccount <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateServiceRoleFromAccount"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateServiceRoleFromAccount.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesDisassociateServiceRoleFromAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateServiceRoleFromAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateServiceRoleFromAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `disassociatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesDisassociateServiceRoleFromAccount.property.disassociatedAt"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchAssociatedRole <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchAssociatedRole(__scope: Construct, __resources: string[], __input: GreengrassGetAssociatedRoleRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleRequest`](#aws-cdk-sdk.greengrass.GreengrassGetAssociatedRoleRequest)

---



#### Properties <a name="Properties"></a>

##### `associatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole.property.associatedAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchAssociatedRole.property.roleArn"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchBulkDeploymentStatus <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchBulkDeploymentStatus(__scope: Construct, __resources: string[], __input: GreengrassGetBulkDeploymentStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest`](#aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `bulkDeploymentMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.property.bulkDeploymentMetrics"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics)

---

##### `bulkDeploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.property.bulkDeploymentStatus"></a>

- *Type:* `string`

---

##### `createdAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.property.createdAt"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassErrorDetail`](#aws-cdk-sdk.greengrass.GreengrassErrorDetail)[]

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.property.errorMessage"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatus.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics(__scope: Construct, __resources: string[], __input: GreengrassGetBulkDeploymentStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest`](#aws-cdk-sdk.greengrass.GreengrassGetBulkDeploymentStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `invalidInputRecords`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.property.invalidInputRecords"></a>

- *Type:* `number`

---

##### `recordsProcessed`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.property.recordsProcessed"></a>

- *Type:* `number`

---

##### `retryAttempts`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchBulkDeploymentStatusBulkDeploymentMetrics.property.retryAttempts"></a>

- *Type:* `number`

---


### GreengrassResponsesFetchConnectivityInfo <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchConnectivityInfo(__scope: Construct, __resources: string[], __input: GreengrassGetConnectivityInfoRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectivityInfoRequest)

---



#### Properties <a name="Properties"></a>

##### `connectivityInfo`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo.property.connectivityInfo"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnectivityInfo`](#aws-cdk-sdk.greengrass.GreengrassConnectivityInfo)[]

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectivityInfo.property.message"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchConnectorDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchConnectorDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetConnectorDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchConnectorDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchConnectorDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetConnectorDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchConnectorDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetConnectorDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetConnectorDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectors`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchConnectorDefinitionVersionDefinition.property.connectors"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassConnector`](#aws-cdk-sdk.greengrass.GreengrassConnector)[]

---


### GreengrassResponsesFetchCoreDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchCoreDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetCoreDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchCoreDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchCoreDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetCoreDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchCoreDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetCoreDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetCoreDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `cores`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchCoreDefinitionVersionDefinition.property.cores"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassCore`](#aws-cdk-sdk.greengrass.GreengrassCore)[]

---


### GreengrassResponsesFetchDeploymentStatus <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchDeploymentStatus(__scope: Construct, __resources: string[], __input: GreengrassGetDeploymentStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeploymentStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentStatus`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.property.deploymentStatus"></a>

- *Type:* `string`

---

##### `deploymentType`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.property.deploymentType"></a>

- *Type:* `string`

---

##### `errorDetails`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassErrorDetail`](#aws-cdk-sdk.greengrass.GreengrassErrorDetail)[]

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.property.errorMessage"></a>

- *Type:* `string`

---

##### `updatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeploymentStatus.property.updatedAt"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchDeviceDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchDeviceDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetDeviceDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchDeviceDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchDeviceDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetDeviceDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchDeviceDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetDeviceDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetDeviceDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `devices`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchDeviceDefinitionVersionDefinition.property.devices"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDevice`](#aws-cdk-sdk.greengrass.GreengrassDevice)[]

---


### GreengrassResponsesFetchFunctionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchFunctionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetFunctionDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchFunctionDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchFunctionDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetFunctionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchFunctionDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetFunctionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `defaultConfig`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition.property.defaultConfig"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig)

---

##### `functions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinition.property.functions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassFunction`](#aws-cdk-sdk.greengrass.GreengrassFunction)[]

---


### GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig(__scope: Construct, __resources: string[], __input: GreengrassGetFunctionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `execution`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfig.property.execution"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution)

---


### GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution(__scope: Construct, __resources: string[], __input: GreengrassGetFunctionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `isolationMode`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution.property.isolationMode"></a>

- *Type:* `string`

---

##### `runAs`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecution.property.runAs"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs)

---


### GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs(__scope: Construct, __resources: string[], __input: GreengrassGetFunctionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetFunctionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `gid`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs.property.gid"></a>

- *Type:* `number`

---

##### `uid`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchFunctionDefinitionVersionDefinitionDefaultConfigExecutionRunAs.property.uid"></a>

- *Type:* `number`

---


### GreengrassResponsesFetchGroup <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchGroup(__scope: Construct, __resources: string[], __input: GreengrassGetGroupRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroup.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchGroupCertificateAuthority <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchGroupCertificateAuthority(__scope: Construct, __resources: string[], __input: GreengrassGetGroupCertificateAuthorityRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateAuthorityRequest)

---



#### Properties <a name="Properties"></a>

##### `groupCertificateAuthorityArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.property.groupCertificateAuthorityArn"></a>

- *Type:* `string`

---

##### `groupCertificateAuthorityId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.property.groupCertificateAuthorityId"></a>

- *Type:* `string`

---

##### `pemEncodedCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateAuthority.property.pemEncodedCertificate"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchGroupCertificateConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchGroupCertificateConfiguration(__scope: Construct, __resources: string[], __input: GreengrassGetGroupCertificateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupCertificateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityExpiryInMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.property.certificateAuthorityExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `certificateExpiryInMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.property.certificateExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupCertificateConfiguration.property.groupId"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchGroupVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchGroupVersion(__scope: Construct, __resources: string[], __input: GreengrassGetGroupVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchGroupVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchGroupVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetGroupVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetGroupVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectorDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.connectorDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `coreDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.coreDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `deviceDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.deviceDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `functionDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.functionDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `loggerDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.loggerDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `resourceDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.resourceDefinitionVersionArn"></a>

- *Type:* `string`

---

##### `subscriptionDefinitionVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchGroupVersionDefinition.property.subscriptionDefinitionVersionArn"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchLoggerDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchLoggerDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetLoggerDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchLoggerDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchLoggerDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetLoggerDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchLoggerDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetLoggerDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetLoggerDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `loggers`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchLoggerDefinitionVersionDefinition.property.loggers"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassLogger`](#aws-cdk-sdk.greengrass.GreengrassLogger)[]

---


### GreengrassResponsesFetchResourceDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchResourceDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetResourceDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchResourceDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchResourceDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetResourceDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchResourceDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetResourceDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetResourceDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchResourceDefinitionVersionDefinition.property.resources"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResource`](#aws-cdk-sdk.greengrass.GreengrassResource)[]

---


### GreengrassResponsesFetchServiceRoleForAccount <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchServiceRoleForAccount"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchServiceRoleForAccount.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchServiceRoleForAccount(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchServiceRoleForAccount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchServiceRoleForAccount.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `associatedAt`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchServiceRoleForAccount.property.associatedAt"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchServiceRoleForAccount.property.roleArn"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchSubscriptionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchSubscriptionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetSubscriptionDefinitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.id"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.latestVersion"></a>

- *Type:* `string`

---

##### `latestVersionArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.latestVersionArn"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.name"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinition.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesFetchSubscriptionDefinitionVersion <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion(__scope: Construct, __resources: string[], __input: GreengrassGetSubscriptionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.property.arn"></a>

- *Type:* `string`

---

##### `creationTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `definition`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.property.definition"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.property.id"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.property.nextToken"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersion.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition(__scope: Construct, __resources: string[], __input: GreengrassGetSubscriptionDefinitionVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest`](#aws-cdk-sdk.greengrass.GreengrassGetSubscriptionDefinitionVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `subscriptions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchSubscriptionDefinitionVersionDefinition.property.subscriptions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassSubscription`](#aws-cdk-sdk.greengrass.GreengrassSubscription)[]

---


### GreengrassResponsesFetchThingRuntimeConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfiguration.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchThingRuntimeConfiguration(__scope: Construct, __resources: string[], __input: GreengrassGetThingRuntimeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `runtimeConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfiguration.property.runtimeConfiguration"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration)

---


### GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration(__scope: Construct, __resources: string[], __input: GreengrassGetThingRuntimeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `telemetryConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfiguration.property.telemetryConfiguration"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration`](#aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration)

---


### GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration(__scope: Construct, __resources: string[], __input: GreengrassGetThingRuntimeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassGetThingRuntimeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationSyncStatus`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration.property.configurationSyncStatus"></a>

- *Type:* `string`

---

##### `telemetry`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesFetchThingRuntimeConfigurationRuntimeConfigurationTelemetryConfiguration.property.telemetry"></a>

- *Type:* `string`

---


### GreengrassResponsesListBulkDeploymentDetailedReports <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListBulkDeploymentDetailedReports(__scope: Construct, __resources: string[], __input: GreengrassListBulkDeploymentDetailedReportsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest`](#aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentDetailedReportsRequest)

---



#### Properties <a name="Properties"></a>

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult`](#aws-cdk-sdk.greengrass.GreengrassBulkDeploymentResult)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeploymentDetailedReports.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListBulkDeployments <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListBulkDeployments(__scope: Construct, __resources: string[], __input: GreengrassListBulkDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest`](#aws-cdk-sdk.greengrass.GreengrassListBulkDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `bulkDeployments`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments.property.bulkDeployments"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassBulkDeployment`](#aws-cdk-sdk.greengrass.GreengrassBulkDeployment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListBulkDeployments.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListConnectorDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListConnectorDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListConnectorDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListConnectorDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListConnectorDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListConnectorDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListConnectorDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListConnectorDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListCoreDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListCoreDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListCoreDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListCoreDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListCoreDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListCoreDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListCoreDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListCoreDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListDeployments <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListDeployments(__scope: Construct, __resources: string[], __input: GreengrassListDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest`](#aws-cdk-sdk.greengrass.GreengrassListDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `deployments`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments.property.deployments"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDeployment`](#aws-cdk-sdk.greengrass.GreengrassDeployment)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeployments.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListDeviceDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListDeviceDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListDeviceDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListDeviceDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListDeviceDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListDeviceDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListDeviceDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListDeviceDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListFunctionDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListFunctionDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListFunctionDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListFunctionDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListFunctionDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListFunctionDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListFunctionDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListFunctionDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListGroupCertificateAuthorities <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupCertificateAuthorities"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupCertificateAuthorities.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListGroupCertificateAuthorities(__scope: Construct, __resources: string[], __input: GreengrassListGroupCertificateAuthoritiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupCertificateAuthorities.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupCertificateAuthorities.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupCertificateAuthorities.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesRequest`](#aws-cdk-sdk.greengrass.GreengrassListGroupCertificateAuthoritiesRequest)

---



#### Properties <a name="Properties"></a>

##### `groupCertificateAuthorities`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupCertificateAuthorities.property.groupCertificateAuthorities"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties`](#aws-cdk-sdk.greengrass.GreengrassGroupCertificateAuthorityProperties)[]

---


### GreengrassResponsesListGroups <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListGroups(__scope: Construct, __resources: string[], __input: GreengrassListGroupsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListGroupsRequest`](#aws-cdk-sdk.greengrass.GreengrassListGroupsRequest)

---



#### Properties <a name="Properties"></a>

##### `groups`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups.property.groups"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassGroupInformation`](#aws-cdk-sdk.greengrass.GreengrassGroupInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroups.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListGroupVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListGroupVersions(__scope: Construct, __resources: string[], __input: GreengrassListGroupVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListGroupVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListGroupVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListLoggerDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListLoggerDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListLoggerDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListLoggerDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListLoggerDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListLoggerDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListLoggerDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListLoggerDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListResourceDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListResourceDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListResourceDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListResourceDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListResourceDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListResourceDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListResourceDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListResourceDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListSubscriptionDefinitions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListSubscriptionDefinitions(__scope: Construct, __resources: string[], __input: GreengrassListSubscriptionDefinitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `definitions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions.property.definitions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassDefinitionInformation`](#aws-cdk-sdk.greengrass.GreengrassDefinitionInformation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitions.property.nextToken"></a>

- *Type:* `string`

---


### GreengrassResponsesListSubscriptionDefinitionVersions <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListSubscriptionDefinitionVersions(__scope: Construct, __resources: string[], __input: GreengrassListSubscriptionDefinitionVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest`](#aws-cdk-sdk.greengrass.GreengrassListSubscriptionDefinitionVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListSubscriptionDefinitionVersions.property.versions"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassVersionInformation`](#aws-cdk-sdk.greengrass.GreengrassVersionInformation)[]

---


### GreengrassResponsesListTagsForResource <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListTagsForResource.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: GreengrassListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassListTagsForResourceRequest`](#aws-cdk-sdk.greengrass.GreengrassListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GreengrassResponsesResetDeployments <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesResetDeployments(__scope: Construct, __resources: string[], __input: GreengrassResetDeploymentsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest`](#aws-cdk-sdk.greengrass.GreengrassResetDeploymentsRequest)

---



#### Properties <a name="Properties"></a>

##### `deploymentArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments.property.deploymentArn"></a>

- *Type:* `string`

---

##### `deploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesResetDeployments.property.deploymentId"></a>

- *Type:* `string`

---


### GreengrassResponsesStartBulkDeployment <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesStartBulkDeployment(__scope: Construct, __resources: string[], __input: GreengrassStartBulkDeploymentRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest`](#aws-cdk-sdk.greengrass.GreengrassStartBulkDeploymentRequest)

---



#### Properties <a name="Properties"></a>

##### `bulkDeploymentArn`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment.property.bulkDeploymentArn"></a>

- *Type:* `string`

---

##### `bulkDeploymentId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesStartBulkDeployment.property.bulkDeploymentId"></a>

- *Type:* `string`

---


### GreengrassResponsesUpdateConnectivityInfo <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesUpdateConnectivityInfo(__scope: Construct, __resources: string[], __input: GreengrassUpdateConnectivityInfoRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateConnectivityInfoRequest)

---



#### Properties <a name="Properties"></a>

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo.property.message"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateConnectivityInfo.property.version"></a>

- *Type:* `string`

---


### GreengrassResponsesUpdateGroupCertificateConfiguration <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.Initializer"></a>

```typescript
import { greengrass } from 'aws-cdk-sdk'

new greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration(__scope: Construct, __resources: string[], __input: GreengrassUpdateGroupCertificateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest`](#aws-cdk-sdk.greengrass.GreengrassUpdateGroupCertificateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityExpiryInMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.property.certificateAuthorityExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `certificateExpiryInMilliseconds`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.property.certificateExpiryInMilliseconds"></a>

- *Type:* `string`

---

##### `groupId`<sup>Required</sup> <a name="aws-cdk-sdk.greengrass.GreengrassResponsesUpdateGroupCertificateConfiguration.property.groupId"></a>

- *Type:* `string`

---



