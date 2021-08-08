# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### GlueClient <a name="aws-cdk-sdk.glue.GlueClient"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueClient.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchCreatePartition` <a name="aws-cdk-sdk.glue.GlueClient.batchCreatePartition"></a>

```typescript
public batchCreatePartition(input: GlueBatchCreatePartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest`](#aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest)

---

##### `batchDeleteConnection` <a name="aws-cdk-sdk.glue.GlueClient.batchDeleteConnection"></a>

```typescript
public batchDeleteConnection(input: GlueBatchDeleteConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest`](#aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest)

---

##### `batchDeletePartition` <a name="aws-cdk-sdk.glue.GlueClient.batchDeletePartition"></a>

```typescript
public batchDeletePartition(input: GlueBatchDeletePartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest`](#aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest)

---

##### `batchDeleteTable` <a name="aws-cdk-sdk.glue.GlueClient.batchDeleteTable"></a>

```typescript
public batchDeleteTable(input: GlueBatchDeleteTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeleteTableRequest`](#aws-cdk-sdk.glue.GlueBatchDeleteTableRequest)

---

##### `batchDeleteTableVersion` <a name="aws-cdk-sdk.glue.GlueClient.batchDeleteTableVersion"></a>

```typescript
public batchDeleteTableVersion(input: GlueBatchDeleteTableVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest`](#aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest)

---

##### `batchGetCrawlers` <a name="aws-cdk-sdk.glue.GlueClient.batchGetCrawlers"></a>

```typescript
public batchGetCrawlers(input: GlueBatchGetCrawlersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetCrawlersRequest`](#aws-cdk-sdk.glue.GlueBatchGetCrawlersRequest)

---

##### `batchGetDevEndpoints` <a name="aws-cdk-sdk.glue.GlueClient.batchGetDevEndpoints"></a>

```typescript
public batchGetDevEndpoints(input: GlueBatchGetDevEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetDevEndpointsRequest`](#aws-cdk-sdk.glue.GlueBatchGetDevEndpointsRequest)

---

##### `batchGetJobs` <a name="aws-cdk-sdk.glue.GlueClient.batchGetJobs"></a>

```typescript
public batchGetJobs(input: GlueBatchGetJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetJobsRequest`](#aws-cdk-sdk.glue.GlueBatchGetJobsRequest)

---

##### `batchGetPartition` <a name="aws-cdk-sdk.glue.GlueClient.batchGetPartition"></a>

```typescript
public batchGetPartition(input: GlueBatchGetPartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetPartitionRequest`](#aws-cdk-sdk.glue.GlueBatchGetPartitionRequest)

---

##### `batchGetTriggers` <a name="aws-cdk-sdk.glue.GlueClient.batchGetTriggers"></a>

```typescript
public batchGetTriggers(input: GlueBatchGetTriggersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetTriggersRequest`](#aws-cdk-sdk.glue.GlueBatchGetTriggersRequest)

---

##### `batchGetWorkflows` <a name="aws-cdk-sdk.glue.GlueClient.batchGetWorkflows"></a>

```typescript
public batchGetWorkflows(input: GlueBatchGetWorkflowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest`](#aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest)

---

##### `batchStopJobRun` <a name="aws-cdk-sdk.glue.GlueClient.batchStopJobRun"></a>

```typescript
public batchStopJobRun(input: GlueBatchStopJobRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchStopJobRunRequest`](#aws-cdk-sdk.glue.GlueBatchStopJobRunRequest)

---

##### `batchUpdatePartition` <a name="aws-cdk-sdk.glue.GlueClient.batchUpdatePartition"></a>

```typescript
public batchUpdatePartition(input: GlueBatchUpdatePartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest`](#aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest)

---

##### `cancelMlTaskRun` <a name="aws-cdk-sdk.glue.GlueClient.cancelMlTaskRun"></a>

```typescript
public cancelMlTaskRun(input: GlueCancelMlTaskRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest)

---

##### `checkSchemaVersionValidity` <a name="aws-cdk-sdk.glue.GlueClient.checkSchemaVersionValidity"></a>

```typescript
public checkSchemaVersionValidity(input: GlueCheckSchemaVersionValidityInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput`](#aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput)

---

##### `createClassifier` <a name="aws-cdk-sdk.glue.GlueClient.createClassifier"></a>

```typescript
public createClassifier(input: GlueCreateClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateClassifierRequest`](#aws-cdk-sdk.glue.GlueCreateClassifierRequest)

---

##### `createConnection` <a name="aws-cdk-sdk.glue.GlueClient.createConnection"></a>

```typescript
public createConnection(input: GlueCreateConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateConnectionRequest`](#aws-cdk-sdk.glue.GlueCreateConnectionRequest)

---

##### `createCrawler` <a name="aws-cdk-sdk.glue.GlueClient.createCrawler"></a>

```typescript
public createCrawler(input: GlueCreateCrawlerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateCrawlerRequest`](#aws-cdk-sdk.glue.GlueCreateCrawlerRequest)

---

##### `createDatabase` <a name="aws-cdk-sdk.glue.GlueClient.createDatabase"></a>

```typescript
public createDatabase(input: GlueCreateDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateDatabaseRequest`](#aws-cdk-sdk.glue.GlueCreateDatabaseRequest)

---

##### `createDevEndpoint` <a name="aws-cdk-sdk.glue.GlueClient.createDevEndpoint"></a>

```typescript
public createDevEndpoint(input: GlueCreateDevEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateDevEndpointRequest`](#aws-cdk-sdk.glue.GlueCreateDevEndpointRequest)

---

##### `createJob` <a name="aws-cdk-sdk.glue.GlueClient.createJob"></a>

```typescript
public createJob(input: GlueCreateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateJobRequest`](#aws-cdk-sdk.glue.GlueCreateJobRequest)

---

##### `createMlTransform` <a name="aws-cdk-sdk.glue.GlueClient.createMlTransform"></a>

```typescript
public createMlTransform(input: GlueCreateMlTransformRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateMlTransformRequest`](#aws-cdk-sdk.glue.GlueCreateMlTransformRequest)

---

##### `createPartition` <a name="aws-cdk-sdk.glue.GlueClient.createPartition"></a>

```typescript
public createPartition(input: GlueCreatePartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreatePartitionRequest`](#aws-cdk-sdk.glue.GlueCreatePartitionRequest)

---

##### `createPartitionIndex` <a name="aws-cdk-sdk.glue.GlueClient.createPartitionIndex"></a>

```typescript
public createPartitionIndex(input: GlueCreatePartitionIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest`](#aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest)

---

##### `createRegistry` <a name="aws-cdk-sdk.glue.GlueClient.createRegistry"></a>

```typescript
public createRegistry(input: GlueCreateRegistryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateRegistryInput`](#aws-cdk-sdk.glue.GlueCreateRegistryInput)

---

##### `createSchema` <a name="aws-cdk-sdk.glue.GlueClient.createSchema"></a>

```typescript
public createSchema(input: GlueCreateSchemaInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateSchemaInput`](#aws-cdk-sdk.glue.GlueCreateSchemaInput)

---

##### `createScript` <a name="aws-cdk-sdk.glue.GlueClient.createScript"></a>

```typescript
public createScript(input: GlueCreateScriptRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateScriptRequest`](#aws-cdk-sdk.glue.GlueCreateScriptRequest)

---

##### `createSecurityConfiguration` <a name="aws-cdk-sdk.glue.GlueClient.createSecurityConfiguration"></a>

```typescript
public createSecurityConfiguration(input: GlueCreateSecurityConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest)

---

##### `createTable` <a name="aws-cdk-sdk.glue.GlueClient.createTable"></a>

```typescript
public createTable(input: GlueCreateTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateTableRequest`](#aws-cdk-sdk.glue.GlueCreateTableRequest)

---

##### `createTrigger` <a name="aws-cdk-sdk.glue.GlueClient.createTrigger"></a>

```typescript
public createTrigger(input: GlueCreateTriggerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateTriggerRequest`](#aws-cdk-sdk.glue.GlueCreateTriggerRequest)

---

##### `createUserDefinedFunction` <a name="aws-cdk-sdk.glue.GlueClient.createUserDefinedFunction"></a>

```typescript
public createUserDefinedFunction(input: GlueCreateUserDefinedFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionRequest`](#aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionRequest)

---

##### `createWorkflow` <a name="aws-cdk-sdk.glue.GlueClient.createWorkflow"></a>

```typescript
public createWorkflow(input: GlueCreateWorkflowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateWorkflowRequest`](#aws-cdk-sdk.glue.GlueCreateWorkflowRequest)

---

##### `deleteClassifier` <a name="aws-cdk-sdk.glue.GlueClient.deleteClassifier"></a>

```typescript
public deleteClassifier(input: GlueDeleteClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteClassifierRequest`](#aws-cdk-sdk.glue.GlueDeleteClassifierRequest)

---

##### `deleteColumnStatisticsForPartition` <a name="aws-cdk-sdk.glue.GlueClient.deleteColumnStatisticsForPartition"></a>

```typescript
public deleteColumnStatisticsForPartition(input: GlueDeleteColumnStatisticsForPartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest`](#aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest)

---

##### `deleteColumnStatisticsForTable` <a name="aws-cdk-sdk.glue.GlueClient.deleteColumnStatisticsForTable"></a>

```typescript
public deleteColumnStatisticsForTable(input: GlueDeleteColumnStatisticsForTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest`](#aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest)

---

##### `deleteConnection` <a name="aws-cdk-sdk.glue.GlueClient.deleteConnection"></a>

```typescript
public deleteConnection(input: GlueDeleteConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteConnectionRequest`](#aws-cdk-sdk.glue.GlueDeleteConnectionRequest)

---

##### `deleteCrawler` <a name="aws-cdk-sdk.glue.GlueClient.deleteCrawler"></a>

```typescript
public deleteCrawler(input: GlueDeleteCrawlerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteCrawlerRequest`](#aws-cdk-sdk.glue.GlueDeleteCrawlerRequest)

---

##### `deleteDatabase` <a name="aws-cdk-sdk.glue.GlueClient.deleteDatabase"></a>

```typescript
public deleteDatabase(input: GlueDeleteDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteDatabaseRequest`](#aws-cdk-sdk.glue.GlueDeleteDatabaseRequest)

---

##### `deleteDevEndpoint` <a name="aws-cdk-sdk.glue.GlueClient.deleteDevEndpoint"></a>

```typescript
public deleteDevEndpoint(input: GlueDeleteDevEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteDevEndpointRequest`](#aws-cdk-sdk.glue.GlueDeleteDevEndpointRequest)

---

##### `deleteJob` <a name="aws-cdk-sdk.glue.GlueClient.deleteJob"></a>

```typescript
public deleteJob(input: GlueDeleteJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteJobRequest`](#aws-cdk-sdk.glue.GlueDeleteJobRequest)

---

##### `deleteMlTransform` <a name="aws-cdk-sdk.glue.GlueClient.deleteMlTransform"></a>

```typescript
public deleteMlTransform(input: GlueDeleteMlTransformRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteMlTransformRequest`](#aws-cdk-sdk.glue.GlueDeleteMlTransformRequest)

---

##### `deletePartition` <a name="aws-cdk-sdk.glue.GlueClient.deletePartition"></a>

```typescript
public deletePartition(input: GlueDeletePartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeletePartitionRequest`](#aws-cdk-sdk.glue.GlueDeletePartitionRequest)

---

##### `deletePartitionIndex` <a name="aws-cdk-sdk.glue.GlueClient.deletePartitionIndex"></a>

```typescript
public deletePartitionIndex(input: GlueDeletePartitionIndexRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest`](#aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest)

---

##### `deleteRegistry` <a name="aws-cdk-sdk.glue.GlueClient.deleteRegistry"></a>

```typescript
public deleteRegistry(input: GlueDeleteRegistryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteRegistryInput`](#aws-cdk-sdk.glue.GlueDeleteRegistryInput)

---

##### `deleteResourcePolicy` <a name="aws-cdk-sdk.glue.GlueClient.deleteResourcePolicy"></a>

```typescript
public deleteResourcePolicy(input: GlueDeleteResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteResourcePolicyRequest`](#aws-cdk-sdk.glue.GlueDeleteResourcePolicyRequest)

---

##### `deleteSchema` <a name="aws-cdk-sdk.glue.GlueClient.deleteSchema"></a>

```typescript
public deleteSchema(input: GlueDeleteSchemaInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteSchemaInput`](#aws-cdk-sdk.glue.GlueDeleteSchemaInput)

---

##### `deleteSchemaVersions` <a name="aws-cdk-sdk.glue.GlueClient.deleteSchemaVersions"></a>

```typescript
public deleteSchemaVersions(input: GlueDeleteSchemaVersionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput`](#aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput)

---

##### `deleteSecurityConfiguration` <a name="aws-cdk-sdk.glue.GlueClient.deleteSecurityConfiguration"></a>

```typescript
public deleteSecurityConfiguration(input: GlueDeleteSecurityConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueDeleteSecurityConfigurationRequest)

---

##### `deleteTable` <a name="aws-cdk-sdk.glue.GlueClient.deleteTable"></a>

```typescript
public deleteTable(input: GlueDeleteTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteTableRequest`](#aws-cdk-sdk.glue.GlueDeleteTableRequest)

---

##### `deleteTableVersion` <a name="aws-cdk-sdk.glue.GlueClient.deleteTableVersion"></a>

```typescript
public deleteTableVersion(input: GlueDeleteTableVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteTableVersionRequest`](#aws-cdk-sdk.glue.GlueDeleteTableVersionRequest)

---

##### `deleteTrigger` <a name="aws-cdk-sdk.glue.GlueClient.deleteTrigger"></a>

```typescript
public deleteTrigger(input: GlueDeleteTriggerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteTriggerRequest`](#aws-cdk-sdk.glue.GlueDeleteTriggerRequest)

---

##### `deleteUserDefinedFunction` <a name="aws-cdk-sdk.glue.GlueClient.deleteUserDefinedFunction"></a>

```typescript
public deleteUserDefinedFunction(input: GlueDeleteUserDefinedFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionRequest`](#aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionRequest)

---

##### `deleteWorkflow` <a name="aws-cdk-sdk.glue.GlueClient.deleteWorkflow"></a>

```typescript
public deleteWorkflow(input: GlueDeleteWorkflowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteWorkflowRequest`](#aws-cdk-sdk.glue.GlueDeleteWorkflowRequest)

---

##### `fetchCatalogImportStatus` <a name="aws-cdk-sdk.glue.GlueClient.fetchCatalogImportStatus"></a>

```typescript
public fetchCatalogImportStatus(input: GlueGetCatalogImportStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest`](#aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest)

---

##### `fetchClassifier` <a name="aws-cdk-sdk.glue.GlueClient.fetchClassifier"></a>

```typescript
public fetchClassifier(input: GlueGetClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---

##### `fetchClassifiers` <a name="aws-cdk-sdk.glue.GlueClient.fetchClassifiers"></a>

```typescript
public fetchClassifiers(input: GlueGetClassifiersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifiersRequest`](#aws-cdk-sdk.glue.GlueGetClassifiersRequest)

---

##### `fetchColumnStatisticsForPartition` <a name="aws-cdk-sdk.glue.GlueClient.fetchColumnStatisticsForPartition"></a>

```typescript
public fetchColumnStatisticsForPartition(input: GlueGetColumnStatisticsForPartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest`](#aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest)

---

##### `fetchColumnStatisticsForTable` <a name="aws-cdk-sdk.glue.GlueClient.fetchColumnStatisticsForTable"></a>

```typescript
public fetchColumnStatisticsForTable(input: GlueGetColumnStatisticsForTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest`](#aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest)

---

##### `fetchConnection` <a name="aws-cdk-sdk.glue.GlueClient.fetchConnection"></a>

```typescript
public fetchConnection(input: GlueGetConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionRequest`](#aws-cdk-sdk.glue.GlueGetConnectionRequest)

---

##### `fetchConnections` <a name="aws-cdk-sdk.glue.GlueClient.fetchConnections"></a>

```typescript
public fetchConnections(input: GlueGetConnectionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionsRequest`](#aws-cdk-sdk.glue.GlueGetConnectionsRequest)

---

##### `fetchCrawler` <a name="aws-cdk-sdk.glue.GlueClient.fetchCrawler"></a>

```typescript
public fetchCrawler(input: GlueGetCrawlerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---

##### `fetchCrawlerMetrics` <a name="aws-cdk-sdk.glue.GlueClient.fetchCrawlerMetrics"></a>

```typescript
public fetchCrawlerMetrics(input: GlueGetCrawlerMetricsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest)

---

##### `fetchCrawlers` <a name="aws-cdk-sdk.glue.GlueClient.fetchCrawlers"></a>

```typescript
public fetchCrawlers(input: GlueGetCrawlersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlersRequest`](#aws-cdk-sdk.glue.GlueGetCrawlersRequest)

---

##### `fetchDatabase` <a name="aws-cdk-sdk.glue.GlueClient.fetchDatabase"></a>

```typescript
public fetchDatabase(input: GlueGetDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDatabaseRequest`](#aws-cdk-sdk.glue.GlueGetDatabaseRequest)

---

##### `fetchDatabases` <a name="aws-cdk-sdk.glue.GlueClient.fetchDatabases"></a>

```typescript
public fetchDatabases(input: GlueGetDatabasesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDatabasesRequest`](#aws-cdk-sdk.glue.GlueGetDatabasesRequest)

---

##### `fetchDataCatalogEncryptionSettings` <a name="aws-cdk-sdk.glue.GlueClient.fetchDataCatalogEncryptionSettings"></a>

```typescript
public fetchDataCatalogEncryptionSettings(input: GlueGetDataCatalogEncryptionSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest`](#aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest)

---

##### `fetchDataflowGraph` <a name="aws-cdk-sdk.glue.GlueClient.fetchDataflowGraph"></a>

```typescript
public fetchDataflowGraph(input: GlueGetDataflowGraphRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataflowGraphRequest`](#aws-cdk-sdk.glue.GlueGetDataflowGraphRequest)

---

##### `fetchDevEndpoint` <a name="aws-cdk-sdk.glue.GlueClient.fetchDevEndpoint"></a>

```typescript
public fetchDevEndpoint(input: GlueGetDevEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDevEndpointRequest`](#aws-cdk-sdk.glue.GlueGetDevEndpointRequest)

---

##### `fetchDevEndpoints` <a name="aws-cdk-sdk.glue.GlueClient.fetchDevEndpoints"></a>

```typescript
public fetchDevEndpoints(input: GlueGetDevEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDevEndpointsRequest`](#aws-cdk-sdk.glue.GlueGetDevEndpointsRequest)

---

##### `fetchJob` <a name="aws-cdk-sdk.glue.GlueClient.fetchJob"></a>

```typescript
public fetchJob(input: GlueGetJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---

##### `fetchJobBookmark` <a name="aws-cdk-sdk.glue.GlueClient.fetchJobBookmark"></a>

```typescript
public fetchJobBookmark(input: GlueGetJobBookmarkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobBookmarkRequest`](#aws-cdk-sdk.glue.GlueGetJobBookmarkRequest)

---

##### `fetchJobRun` <a name="aws-cdk-sdk.glue.GlueClient.fetchJobRun"></a>

```typescript
public fetchJobRun(input: GlueGetJobRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRunRequest`](#aws-cdk-sdk.glue.GlueGetJobRunRequest)

---

##### `fetchJobRuns` <a name="aws-cdk-sdk.glue.GlueClient.fetchJobRuns"></a>

```typescript
public fetchJobRuns(input: GlueGetJobRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRunsRequest`](#aws-cdk-sdk.glue.GlueGetJobRunsRequest)

---

##### `fetchJobs` <a name="aws-cdk-sdk.glue.GlueClient.fetchJobs"></a>

```typescript
public fetchJobs(input: GlueGetJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobsRequest`](#aws-cdk-sdk.glue.GlueGetJobsRequest)

---

##### `fetchMapping` <a name="aws-cdk-sdk.glue.GlueClient.fetchMapping"></a>

```typescript
public fetchMapping(input: GlueGetMappingRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMappingRequest`](#aws-cdk-sdk.glue.GlueGetMappingRequest)

---

##### `fetchMlTaskRun` <a name="aws-cdk-sdk.glue.GlueClient.fetchMlTaskRun"></a>

```typescript
public fetchMlTaskRun(input: GlueGetMlTaskRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---

##### `fetchMlTaskRuns` <a name="aws-cdk-sdk.glue.GlueClient.fetchMlTaskRuns"></a>

```typescript
public fetchMlTaskRuns(input: GlueGetMlTaskRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest)

---

##### `fetchMlTransform` <a name="aws-cdk-sdk.glue.GlueClient.fetchMlTransform"></a>

```typescript
public fetchMlTransform(input: GlueGetMlTransformRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---

##### `fetchMlTransforms` <a name="aws-cdk-sdk.glue.GlueClient.fetchMlTransforms"></a>

```typescript
public fetchMlTransforms(input: GlueGetMlTransformsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformsRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformsRequest)

---

##### `fetchPartition` <a name="aws-cdk-sdk.glue.GlueClient.fetchPartition"></a>

```typescript
public fetchPartition(input: GlueGetPartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---

##### `fetchPartitionIndexes` <a name="aws-cdk-sdk.glue.GlueClient.fetchPartitionIndexes"></a>

```typescript
public fetchPartitionIndexes(input: GlueGetPartitionIndexesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest`](#aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest)

---

##### `fetchPartitions` <a name="aws-cdk-sdk.glue.GlueClient.fetchPartitions"></a>

```typescript
public fetchPartitions(input: GlueGetPartitionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionsRequest`](#aws-cdk-sdk.glue.GlueGetPartitionsRequest)

---

##### `fetchPlan` <a name="aws-cdk-sdk.glue.GlueClient.fetchPlan"></a>

```typescript
public fetchPlan(input: GlueGetPlanRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPlanRequest`](#aws-cdk-sdk.glue.GlueGetPlanRequest)

---

##### `fetchRegistry` <a name="aws-cdk-sdk.glue.GlueClient.fetchRegistry"></a>

```typescript
public fetchRegistry(input: GlueGetRegistryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetRegistryInput`](#aws-cdk-sdk.glue.GlueGetRegistryInput)

---

##### `fetchResourcePolicies` <a name="aws-cdk-sdk.glue.GlueClient.fetchResourcePolicies"></a>

```typescript
public fetchResourcePolicies(input: GlueGetResourcePoliciesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest`](#aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest)

---

##### `fetchResourcePolicy` <a name="aws-cdk-sdk.glue.GlueClient.fetchResourcePolicy"></a>

```typescript
public fetchResourcePolicy(input: GlueGetResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetResourcePolicyRequest`](#aws-cdk-sdk.glue.GlueGetResourcePolicyRequest)

---

##### `fetchSchema` <a name="aws-cdk-sdk.glue.GlueClient.fetchSchema"></a>

```typescript
public fetchSchema(input: GlueGetSchemaInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaInput`](#aws-cdk-sdk.glue.GlueGetSchemaInput)

---

##### `fetchSchemaByDefinition` <a name="aws-cdk-sdk.glue.GlueClient.fetchSchemaByDefinition"></a>

```typescript
public fetchSchemaByDefinition(input: GlueGetSchemaByDefinitionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput`](#aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput)

---

##### `fetchSchemaVersion` <a name="aws-cdk-sdk.glue.GlueClient.fetchSchemaVersion"></a>

```typescript
public fetchSchemaVersion(input: GlueGetSchemaVersionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaVersionInput`](#aws-cdk-sdk.glue.GlueGetSchemaVersionInput)

---

##### `fetchSchemaVersionsDiff` <a name="aws-cdk-sdk.glue.GlueClient.fetchSchemaVersionsDiff"></a>

```typescript
public fetchSchemaVersionsDiff(input: GlueGetSchemaVersionsDiffInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput`](#aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput)

---

##### `fetchSecurityConfiguration` <a name="aws-cdk-sdk.glue.GlueClient.fetchSecurityConfiguration"></a>

```typescript
public fetchSecurityConfiguration(input: GlueGetSecurityConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest)

---

##### `fetchSecurityConfigurations` <a name="aws-cdk-sdk.glue.GlueClient.fetchSecurityConfigurations"></a>

```typescript
public fetchSecurityConfigurations(input: GlueGetSecurityConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest)

---

##### `fetchTable` <a name="aws-cdk-sdk.glue.GlueClient.fetchTable"></a>

```typescript
public fetchTable(input: GlueGetTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---

##### `fetchTables` <a name="aws-cdk-sdk.glue.GlueClient.fetchTables"></a>

```typescript
public fetchTables(input: GlueGetTablesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTablesRequest`](#aws-cdk-sdk.glue.GlueGetTablesRequest)

---

##### `fetchTableVersion` <a name="aws-cdk-sdk.glue.GlueClient.fetchTableVersion"></a>

```typescript
public fetchTableVersion(input: GlueGetTableVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---

##### `fetchTableVersions` <a name="aws-cdk-sdk.glue.GlueClient.fetchTableVersions"></a>

```typescript
public fetchTableVersions(input: GlueGetTableVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionsRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionsRequest)

---

##### `fetchTags` <a name="aws-cdk-sdk.glue.GlueClient.fetchTags"></a>

```typescript
public fetchTags(input: GlueGetTagsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTagsRequest`](#aws-cdk-sdk.glue.GlueGetTagsRequest)

---

##### `fetchTrigger` <a name="aws-cdk-sdk.glue.GlueClient.fetchTrigger"></a>

```typescript
public fetchTrigger(input: GlueGetTriggerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTriggerRequest`](#aws-cdk-sdk.glue.GlueGetTriggerRequest)

---

##### `fetchTriggers` <a name="aws-cdk-sdk.glue.GlueClient.fetchTriggers"></a>

```typescript
public fetchTriggers(input: GlueGetTriggersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTriggersRequest`](#aws-cdk-sdk.glue.GlueGetTriggersRequest)

---

##### `fetchUserDefinedFunction` <a name="aws-cdk-sdk.glue.GlueClient.fetchUserDefinedFunction"></a>

```typescript
public fetchUserDefinedFunction(input: GlueGetUserDefinedFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest`](#aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest)

---

##### `fetchUserDefinedFunctions` <a name="aws-cdk-sdk.glue.GlueClient.fetchUserDefinedFunctions"></a>

```typescript
public fetchUserDefinedFunctions(input: GlueGetUserDefinedFunctionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest`](#aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest)

---

##### `fetchWorkflow` <a name="aws-cdk-sdk.glue.GlueClient.fetchWorkflow"></a>

```typescript
public fetchWorkflow(input: GlueGetWorkflowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---

##### `fetchWorkflowRun` <a name="aws-cdk-sdk.glue.GlueClient.fetchWorkflowRun"></a>

```typescript
public fetchWorkflowRun(input: GlueGetWorkflowRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunRequest)

---

##### `fetchWorkflowRunProperties` <a name="aws-cdk-sdk.glue.GlueClient.fetchWorkflowRunProperties"></a>

```typescript
public fetchWorkflowRunProperties(input: GlueGetWorkflowRunPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest)

---

##### `fetchWorkflowRuns` <a name="aws-cdk-sdk.glue.GlueClient.fetchWorkflowRuns"></a>

```typescript
public fetchWorkflowRuns(input: GlueGetWorkflowRunsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest)

---

##### `importCatalogToGlue` <a name="aws-cdk-sdk.glue.GlueClient.importCatalogToGlue"></a>

```typescript
public importCatalogToGlue(input: GlueImportCatalogToGlueRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueImportCatalogToGlueRequest`](#aws-cdk-sdk.glue.GlueImportCatalogToGlueRequest)

---

##### `listCrawlers` <a name="aws-cdk-sdk.glue.GlueClient.listCrawlers"></a>

```typescript
public listCrawlers(input: GlueListCrawlersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListCrawlersRequest`](#aws-cdk-sdk.glue.GlueListCrawlersRequest)

---

##### `listDevEndpoints` <a name="aws-cdk-sdk.glue.GlueClient.listDevEndpoints"></a>

```typescript
public listDevEndpoints(input: GlueListDevEndpointsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListDevEndpointsRequest`](#aws-cdk-sdk.glue.GlueListDevEndpointsRequest)

---

##### `listJobs` <a name="aws-cdk-sdk.glue.GlueClient.listJobs"></a>

```typescript
public listJobs(input: GlueListJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListJobsRequest`](#aws-cdk-sdk.glue.GlueListJobsRequest)

---

##### `listMlTransforms` <a name="aws-cdk-sdk.glue.GlueClient.listMlTransforms"></a>

```typescript
public listMlTransforms(input: GlueListMlTransformsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListMlTransformsRequest`](#aws-cdk-sdk.glue.GlueListMlTransformsRequest)

---

##### `listRegistries` <a name="aws-cdk-sdk.glue.GlueClient.listRegistries"></a>

```typescript
public listRegistries(input: GlueListRegistriesInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListRegistriesInput`](#aws-cdk-sdk.glue.GlueListRegistriesInput)

---

##### `listSchemas` <a name="aws-cdk-sdk.glue.GlueClient.listSchemas"></a>

```typescript
public listSchemas(input: GlueListSchemasInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListSchemasInput`](#aws-cdk-sdk.glue.GlueListSchemasInput)

---

##### `listSchemaVersions` <a name="aws-cdk-sdk.glue.GlueClient.listSchemaVersions"></a>

```typescript
public listSchemaVersions(input: GlueListSchemaVersionsInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListSchemaVersionsInput`](#aws-cdk-sdk.glue.GlueListSchemaVersionsInput)

---

##### `listTriggers` <a name="aws-cdk-sdk.glue.GlueClient.listTriggers"></a>

```typescript
public listTriggers(input: GlueListTriggersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListTriggersRequest`](#aws-cdk-sdk.glue.GlueListTriggersRequest)

---

##### `listWorkflows` <a name="aws-cdk-sdk.glue.GlueClient.listWorkflows"></a>

```typescript
public listWorkflows(input: GlueListWorkflowsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListWorkflowsRequest`](#aws-cdk-sdk.glue.GlueListWorkflowsRequest)

---

##### `putDataCatalogEncryptionSettings` <a name="aws-cdk-sdk.glue.GlueClient.putDataCatalogEncryptionSettings"></a>

```typescript
public putDataCatalogEncryptionSettings(input: GluePutDataCatalogEncryptionSettingsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePutDataCatalogEncryptionSettingsRequest`](#aws-cdk-sdk.glue.GluePutDataCatalogEncryptionSettingsRequest)

---

##### `putResourcePolicy` <a name="aws-cdk-sdk.glue.GlueClient.putResourcePolicy"></a>

```typescript
public putResourcePolicy(input: GluePutResourcePolicyRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePutResourcePolicyRequest`](#aws-cdk-sdk.glue.GluePutResourcePolicyRequest)

---

##### `putSchemaVersionMetadata` <a name="aws-cdk-sdk.glue.GlueClient.putSchemaVersionMetadata"></a>

```typescript
public putSchemaVersionMetadata(input: GluePutSchemaVersionMetadataInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput`](#aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput)

---

##### `putWorkflowRunProperties` <a name="aws-cdk-sdk.glue.GlueClient.putWorkflowRunProperties"></a>

```typescript
public putWorkflowRunProperties(input: GluePutWorkflowRunPropertiesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesRequest`](#aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesRequest)

---

##### `querySchemaVersionMetadata` <a name="aws-cdk-sdk.glue.GlueClient.querySchemaVersionMetadata"></a>

```typescript
public querySchemaVersionMetadata(input: GlueQuerySchemaVersionMetadataInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput`](#aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput)

---

##### `registerSchemaVersion` <a name="aws-cdk-sdk.glue.GlueClient.registerSchemaVersion"></a>

```typescript
public registerSchemaVersion(input: GlueRegisterSchemaVersionInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput`](#aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput)

---

##### `removeSchemaVersionMetadata` <a name="aws-cdk-sdk.glue.GlueClient.removeSchemaVersionMetadata"></a>

```typescript
public removeSchemaVersionMetadata(input: GlueRemoveSchemaVersionMetadataInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput`](#aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput)

---

##### `resetJobBookmark` <a name="aws-cdk-sdk.glue.GlueClient.resetJobBookmark"></a>

```typescript
public resetJobBookmark(input: GlueResetJobBookmarkRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResetJobBookmarkRequest`](#aws-cdk-sdk.glue.GlueResetJobBookmarkRequest)

---

##### `resumeWorkflowRun` <a name="aws-cdk-sdk.glue.GlueClient.resumeWorkflowRun"></a>

```typescript
public resumeWorkflowRun(input: GlueResumeWorkflowRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest)

---

##### `searchTables` <a name="aws-cdk-sdk.glue.GlueClient.searchTables"></a>

```typescript
public searchTables(input: GlueSearchTablesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSearchTablesRequest`](#aws-cdk-sdk.glue.GlueSearchTablesRequest)

---

##### `startCrawler` <a name="aws-cdk-sdk.glue.GlueClient.startCrawler"></a>

```typescript
public startCrawler(input: GlueStartCrawlerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartCrawlerRequest`](#aws-cdk-sdk.glue.GlueStartCrawlerRequest)

---

##### `startCrawlerSchedule` <a name="aws-cdk-sdk.glue.GlueClient.startCrawlerSchedule"></a>

```typescript
public startCrawlerSchedule(input: GlueStartCrawlerScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartCrawlerScheduleRequest`](#aws-cdk-sdk.glue.GlueStartCrawlerScheduleRequest)

---

##### `startExportLabelsTaskRun` <a name="aws-cdk-sdk.glue.GlueClient.startExportLabelsTaskRun"></a>

```typescript
public startExportLabelsTaskRun(input: GlueStartExportLabelsTaskRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest)

---

##### `startImportLabelsTaskRun` <a name="aws-cdk-sdk.glue.GlueClient.startImportLabelsTaskRun"></a>

```typescript
public startImportLabelsTaskRun(input: GlueStartImportLabelsTaskRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest)

---

##### `startJobRun` <a name="aws-cdk-sdk.glue.GlueClient.startJobRun"></a>

```typescript
public startJobRun(input: GlueStartJobRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartJobRunRequest`](#aws-cdk-sdk.glue.GlueStartJobRunRequest)

---

##### `startMlEvaluationTaskRun` <a name="aws-cdk-sdk.glue.GlueClient.startMlEvaluationTaskRun"></a>

```typescript
public startMlEvaluationTaskRun(input: GlueStartMlEvaluationTaskRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunRequest)

---

##### `startMlLabelingSetGenerationTaskRun` <a name="aws-cdk-sdk.glue.GlueClient.startMlLabelingSetGenerationTaskRun"></a>

```typescript
public startMlLabelingSetGenerationTaskRun(input: GlueStartMlLabelingSetGenerationTaskRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest)

---

##### `startTrigger` <a name="aws-cdk-sdk.glue.GlueClient.startTrigger"></a>

```typescript
public startTrigger(input: GlueStartTriggerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartTriggerRequest`](#aws-cdk-sdk.glue.GlueStartTriggerRequest)

---

##### `startWorkflowRun` <a name="aws-cdk-sdk.glue.GlueClient.startWorkflowRun"></a>

```typescript
public startWorkflowRun(input: GlueStartWorkflowRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueStartWorkflowRunRequest)

---

##### `stopCrawler` <a name="aws-cdk-sdk.glue.GlueClient.stopCrawler"></a>

```typescript
public stopCrawler(input: GlueStopCrawlerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStopCrawlerRequest`](#aws-cdk-sdk.glue.GlueStopCrawlerRequest)

---

##### `stopCrawlerSchedule` <a name="aws-cdk-sdk.glue.GlueClient.stopCrawlerSchedule"></a>

```typescript
public stopCrawlerSchedule(input: GlueStopCrawlerScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStopCrawlerScheduleRequest`](#aws-cdk-sdk.glue.GlueStopCrawlerScheduleRequest)

---

##### `stopTrigger` <a name="aws-cdk-sdk.glue.GlueClient.stopTrigger"></a>

```typescript
public stopTrigger(input: GlueStopTriggerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStopTriggerRequest`](#aws-cdk-sdk.glue.GlueStopTriggerRequest)

---

##### `stopWorkflowRun` <a name="aws-cdk-sdk.glue.GlueClient.stopWorkflowRun"></a>

```typescript
public stopWorkflowRun(input: GlueStopWorkflowRunRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStopWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueStopWorkflowRunRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.glue.GlueClient.tagResource"></a>

```typescript
public tagResource(input: GlueTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTagResourceRequest`](#aws-cdk-sdk.glue.GlueTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.glue.GlueClient.untagResource"></a>

```typescript
public untagResource(input: GlueUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUntagResourceRequest`](#aws-cdk-sdk.glue.GlueUntagResourceRequest)

---

##### `updateClassifier` <a name="aws-cdk-sdk.glue.GlueClient.updateClassifier"></a>

```typescript
public updateClassifier(input: GlueUpdateClassifierRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateClassifierRequest`](#aws-cdk-sdk.glue.GlueUpdateClassifierRequest)

---

##### `updateColumnStatisticsForPartition` <a name="aws-cdk-sdk.glue.GlueClient.updateColumnStatisticsForPartition"></a>

```typescript
public updateColumnStatisticsForPartition(input: GlueUpdateColumnStatisticsForPartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest`](#aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest)

---

##### `updateColumnStatisticsForTable` <a name="aws-cdk-sdk.glue.GlueClient.updateColumnStatisticsForTable"></a>

```typescript
public updateColumnStatisticsForTable(input: GlueUpdateColumnStatisticsForTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest`](#aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest)

---

##### `updateConnection` <a name="aws-cdk-sdk.glue.GlueClient.updateConnection"></a>

```typescript
public updateConnection(input: GlueUpdateConnectionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateConnectionRequest`](#aws-cdk-sdk.glue.GlueUpdateConnectionRequest)

---

##### `updateCrawler` <a name="aws-cdk-sdk.glue.GlueClient.updateCrawler"></a>

```typescript
public updateCrawler(input: GlueUpdateCrawlerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateCrawlerRequest`](#aws-cdk-sdk.glue.GlueUpdateCrawlerRequest)

---

##### `updateCrawlerSchedule` <a name="aws-cdk-sdk.glue.GlueClient.updateCrawlerSchedule"></a>

```typescript
public updateCrawlerSchedule(input: GlueUpdateCrawlerScheduleRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateCrawlerScheduleRequest`](#aws-cdk-sdk.glue.GlueUpdateCrawlerScheduleRequest)

---

##### `updateDatabase` <a name="aws-cdk-sdk.glue.GlueClient.updateDatabase"></a>

```typescript
public updateDatabase(input: GlueUpdateDatabaseRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateDatabaseRequest`](#aws-cdk-sdk.glue.GlueUpdateDatabaseRequest)

---

##### `updateDevEndpoint` <a name="aws-cdk-sdk.glue.GlueClient.updateDevEndpoint"></a>

```typescript
public updateDevEndpoint(input: GlueUpdateDevEndpointRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest`](#aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest)

---

##### `updateJob` <a name="aws-cdk-sdk.glue.GlueClient.updateJob"></a>

```typescript
public updateJob(input: GlueUpdateJobRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateJobRequest`](#aws-cdk-sdk.glue.GlueUpdateJobRequest)

---

##### `updateMlTransform` <a name="aws-cdk-sdk.glue.GlueClient.updateMlTransform"></a>

```typescript
public updateMlTransform(input: GlueUpdateMlTransformRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateMlTransformRequest`](#aws-cdk-sdk.glue.GlueUpdateMlTransformRequest)

---

##### `updatePartition` <a name="aws-cdk-sdk.glue.GlueClient.updatePartition"></a>

```typescript
public updatePartition(input: GlueUpdatePartitionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdatePartitionRequest`](#aws-cdk-sdk.glue.GlueUpdatePartitionRequest)

---

##### `updateRegistry` <a name="aws-cdk-sdk.glue.GlueClient.updateRegistry"></a>

```typescript
public updateRegistry(input: GlueUpdateRegistryInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateRegistryInput`](#aws-cdk-sdk.glue.GlueUpdateRegistryInput)

---

##### `updateSchema` <a name="aws-cdk-sdk.glue.GlueClient.updateSchema"></a>

```typescript
public updateSchema(input: GlueUpdateSchemaInput)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateSchemaInput`](#aws-cdk-sdk.glue.GlueUpdateSchemaInput)

---

##### `updateTable` <a name="aws-cdk-sdk.glue.GlueClient.updateTable"></a>

```typescript
public updateTable(input: GlueUpdateTableRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateTableRequest`](#aws-cdk-sdk.glue.GlueUpdateTableRequest)

---

##### `updateTrigger` <a name="aws-cdk-sdk.glue.GlueClient.updateTrigger"></a>

```typescript
public updateTrigger(input: GlueUpdateTriggerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateTriggerRequest`](#aws-cdk-sdk.glue.GlueUpdateTriggerRequest)

---

##### `updateUserDefinedFunction` <a name="aws-cdk-sdk.glue.GlueClient.updateUserDefinedFunction"></a>

```typescript
public updateUserDefinedFunction(input: GlueUpdateUserDefinedFunctionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest`](#aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest)

---

##### `updateWorkflow` <a name="aws-cdk-sdk.glue.GlueClient.updateWorkflow"></a>

```typescript
public updateWorkflow(input: GlueUpdateWorkflowRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateWorkflowRequest`](#aws-cdk-sdk.glue.GlueUpdateWorkflowRequest)

---




## Structs <a name="Structs"></a>

### GlueAction <a name="aws-cdk-sdk.glue.GlueAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueAction: glue.GlueAction = { ... }
```

##### `arguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueAction.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `crawlerName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueAction.property.crawlerName"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueAction.property.jobName"></a>

- *Type:* `string`

---

##### `notificationProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueAction.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNotificationProperty`](#aws-cdk-sdk.glue.GlueNotificationProperty)

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueAction.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueAction.property.timeout"></a>

- *Type:* `number`

---

### GlueBackfillError <a name="aws-cdk-sdk.glue.GlueBackfillError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBackfillError: glue.GlueBackfillError = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBackfillError.property.code"></a>

- *Type:* `string`

---

##### `partitions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBackfillError.property.partitions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionValueList`](#aws-cdk-sdk.glue.GluePartitionValueList)[]

---

### GlueBatchCreatePartitionRequest <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchCreatePartitionRequest: glue.GlueBatchCreatePartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionInputList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest.property.partitionInputList"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionInput`](#aws-cdk-sdk.glue.GluePartitionInput)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchCreatePartitionResponse <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchCreatePartitionResponse: glue.GlueBatchCreatePartitionResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchCreatePartitionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionError`](#aws-cdk-sdk.glue.GluePartitionError)[]

---

### GlueBatchDeleteConnectionRequest <a name="aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeleteConnectionRequest: glue.GlueBatchDeleteConnectionRequest = { ... }
```

##### `connectionNameList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest.property.connectionNameList"></a>

- *Type:* `string`[]

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchDeleteConnectionResponse <a name="aws-cdk-sdk.glue.GlueBatchDeleteConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeleteConnectionResponse: glue.GlueBatchDeleteConnectionResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteConnectionResponse.property.errors"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)}

---

##### `succeeded`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteConnectionResponse.property.succeeded"></a>

- *Type:* `string`[]

---

### GlueBatchDeletePartitionRequest <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeletePartitionRequest: glue.GlueBatchDeletePartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionsToDelete`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest.property.partitionsToDelete"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionValueList`](#aws-cdk-sdk.glue.GluePartitionValueList)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchDeletePartitionResponse <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeletePartitionResponse: glue.GlueBatchDeletePartitionResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeletePartitionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionError`](#aws-cdk-sdk.glue.GluePartitionError)[]

---

### GlueBatchDeleteTableRequest <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeleteTableRequest: glue.GlueBatchDeleteTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tablesToDelete`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableRequest.property.tablesToDelete"></a>

- *Type:* `string`[]

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchDeleteTableResponse <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeleteTableResponse: glue.GlueBatchDeleteTableResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableError`](#aws-cdk-sdk.glue.GlueTableError)[]

---

### GlueBatchDeleteTableVersionRequest <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeleteTableVersionRequest: glue.GlueBatchDeleteTableVersionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `versionIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest.property.versionIds"></a>

- *Type:* `string`[]

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchDeleteTableVersionResponse <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchDeleteTableVersionResponse: glue.GlueBatchDeleteTableVersionResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchDeleteTableVersionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableVersionError`](#aws-cdk-sdk.glue.GlueTableVersionError)[]

---

### GlueBatchGetCrawlersRequest <a name="aws-cdk-sdk.glue.GlueBatchGetCrawlersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetCrawlersRequest: glue.GlueBatchGetCrawlersRequest = { ... }
```

##### `crawlerNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetCrawlersRequest.property.crawlerNames"></a>

- *Type:* `string`[]

---

### GlueBatchGetCrawlersResponse <a name="aws-cdk-sdk.glue.GlueBatchGetCrawlersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetCrawlersResponse: glue.GlueBatchGetCrawlersResponse = { ... }
```

##### `crawlers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetCrawlersResponse.property.crawlers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawler`](#aws-cdk-sdk.glue.GlueCrawler)[]

---

##### `crawlersNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetCrawlersResponse.property.crawlersNotFound"></a>

- *Type:* `string`[]

---

### GlueBatchGetDevEndpointsRequest <a name="aws-cdk-sdk.glue.GlueBatchGetDevEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetDevEndpointsRequest: glue.GlueBatchGetDevEndpointsRequest = { ... }
```

##### `devEndpointNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetDevEndpointsRequest.property.devEndpointNames"></a>

- *Type:* `string`[]

---

### GlueBatchGetDevEndpointsResponse <a name="aws-cdk-sdk.glue.GlueBatchGetDevEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetDevEndpointsResponse: glue.GlueBatchGetDevEndpointsResponse = { ... }
```

##### `devEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetDevEndpointsResponse.property.devEndpoints"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDevEndpoint`](#aws-cdk-sdk.glue.GlueDevEndpoint)[]

---

##### `devEndpointsNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetDevEndpointsResponse.property.devEndpointsNotFound"></a>

- *Type:* `string`[]

---

### GlueBatchGetJobsRequest <a name="aws-cdk-sdk.glue.GlueBatchGetJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetJobsRequest: glue.GlueBatchGetJobsRequest = { ... }
```

##### `jobNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetJobsRequest.property.jobNames"></a>

- *Type:* `string`[]

---

### GlueBatchGetJobsResponse <a name="aws-cdk-sdk.glue.GlueBatchGetJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetJobsResponse: glue.GlueBatchGetJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJob`](#aws-cdk-sdk.glue.GlueJob)[]

---

##### `jobsNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetJobsResponse.property.jobsNotFound"></a>

- *Type:* `string`[]

---

### GlueBatchGetPartitionRequest <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetPartitionRequest: glue.GlueBatchGetPartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionsToGet`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionRequest.property.partitionsToGet"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionValueList`](#aws-cdk-sdk.glue.GluePartitionValueList)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchGetPartitionResponse <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetPartitionResponse: glue.GlueBatchGetPartitionResponse = { ... }
```

##### `partitions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionResponse.property.partitions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartition`](#aws-cdk-sdk.glue.GluePartition)[]

---

##### `unprocessedKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetPartitionResponse.property.unprocessedKeys"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionValueList`](#aws-cdk-sdk.glue.GluePartitionValueList)[]

---

### GlueBatchGetTriggersRequest <a name="aws-cdk-sdk.glue.GlueBatchGetTriggersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetTriggersRequest: glue.GlueBatchGetTriggersRequest = { ... }
```

##### `triggerNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetTriggersRequest.property.triggerNames"></a>

- *Type:* `string`[]

---

### GlueBatchGetTriggersResponse <a name="aws-cdk-sdk.glue.GlueBatchGetTriggersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetTriggersResponse: glue.GlueBatchGetTriggersResponse = { ... }
```

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetTriggersResponse.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)[]

---

##### `triggersNotFound`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetTriggersResponse.property.triggersNotFound"></a>

- *Type:* `string`[]

---

### GlueBatchGetWorkflowsRequest <a name="aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetWorkflowsRequest: glue.GlueBatchGetWorkflowsRequest = { ... }
```

##### `names`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest.property.names"></a>

- *Type:* `string`[]

---

##### `includeGraph`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest.property.includeGraph"></a>

- *Type:* `boolean`

---

### GlueBatchGetWorkflowsResponse <a name="aws-cdk-sdk.glue.GlueBatchGetWorkflowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchGetWorkflowsResponse: glue.GlueBatchGetWorkflowsResponse = { ... }
```

##### `missingWorkflows`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetWorkflowsResponse.property.missingWorkflows"></a>

- *Type:* `string`[]

---

##### `workflows`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchGetWorkflowsResponse.property.workflows"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflow`](#aws-cdk-sdk.glue.GlueWorkflow)[]

---

### GlueBatchStopJobRunError <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchStopJobRunError: glue.GlueBatchStopJobRunError = { ... }
```

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunError.property.errorDetail"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunError.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunError.property.jobRunId"></a>

- *Type:* `string`

---

### GlueBatchStopJobRunRequest <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchStopJobRunRequest: glue.GlueBatchStopJobRunRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunRequest.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunRequest.property.jobRunIds"></a>

- *Type:* `string`[]

---

### GlueBatchStopJobRunResponse <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchStopJobRunResponse: glue.GlueBatchStopJobRunResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchStopJobRunError`](#aws-cdk-sdk.glue.GlueBatchStopJobRunError)[]

---

##### `successfulSubmissions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunResponse.property.successfulSubmissions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission`](#aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission)[]

---

### GlueBatchStopJobRunSuccessfulSubmission <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchStopJobRunSuccessfulSubmission: glue.GlueBatchStopJobRunSuccessfulSubmission = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission.property.jobRunId"></a>

- *Type:* `string`

---

### GlueBatchUpdatePartitionFailureEntry <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchUpdatePartitionFailureEntry: glue.GlueBatchUpdatePartitionFailureEntry = { ... }
```

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry.property.errorDetail"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

##### `partitionValueList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry.property.partitionValueList"></a>

- *Type:* `string`[]

---

### GlueBatchUpdatePartitionRequest <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchUpdatePartitionRequest: glue.GlueBatchUpdatePartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `entries`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest.property.entries"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequestEntry`](#aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequestEntry)[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueBatchUpdatePartitionRequestEntry <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequestEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchUpdatePartitionRequestEntry: glue.GlueBatchUpdatePartitionRequestEntry = { ... }
```

##### `partitionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequestEntry.property.partitionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionInput`](#aws-cdk-sdk.glue.GluePartitionInput)

---

##### `partitionValueList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequestEntry.property.partitionValueList"></a>

- *Type:* `string`[]

---

### GlueBatchUpdatePartitionResponse <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBatchUpdatePartitionResponse: glue.GlueBatchUpdatePartitionResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueBatchUpdatePartitionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry`](#aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry)[]

---

### GlueBinaryColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueBinaryColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBinaryColumnStatisticsData: glue.GlueBinaryColumnStatisticsData = { ... }
```

##### `averageLength`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBinaryColumnStatisticsData.property.averageLength"></a>

- *Type:* `number`

---

##### `maximumLength`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBinaryColumnStatisticsData.property.maximumLength"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBinaryColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

### GlueBooleanColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueBooleanColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueBooleanColumnStatisticsData: glue.GlueBooleanColumnStatisticsData = { ... }
```

##### `numberOfFalses`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBooleanColumnStatisticsData.property.numberOfFalses"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBooleanColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

##### `numberOfTrues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueBooleanColumnStatisticsData.property.numberOfTrues"></a>

- *Type:* `number`

---

### GlueCancelMlTaskRunRequest <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCancelMlTaskRunRequest: glue.GlueCancelMlTaskRunRequest = { ... }
```

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueCancelMlTaskRunResponse <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCancelMlTaskRunResponse: glue.GlueCancelMlTaskRunResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunResponse.property.status"></a>

- *Type:* `string`

---

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunResponse.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCancelMlTaskRunResponse.property.transformId"></a>

- *Type:* `string`

---

### GlueCatalogEntry <a name="aws-cdk-sdk.glue.GlueCatalogEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCatalogEntry: glue.GlueCatalogEntry = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCatalogEntry.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCatalogEntry.property.tableName"></a>

- *Type:* `string`

---

### GlueCatalogImportStatus <a name="aws-cdk-sdk.glue.GlueCatalogImportStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCatalogImportStatus: glue.GlueCatalogImportStatus = { ... }
```

##### `importCompleted`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCatalogImportStatus.property.importCompleted"></a>

- *Type:* `boolean`

---

##### `importedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCatalogImportStatus.property.importedBy"></a>

- *Type:* `string`

---

##### `importTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCatalogImportStatus.property.importTime"></a>

- *Type:* `string`

---

### GlueCatalogTarget <a name="aws-cdk-sdk.glue.GlueCatalogTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCatalogTarget: glue.GlueCatalogTarget = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCatalogTarget.property.databaseName"></a>

- *Type:* `string`

---

##### `tables`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCatalogTarget.property.tables"></a>

- *Type:* `string`[]

---

### GlueCheckSchemaVersionValidityInput <a name="aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCheckSchemaVersionValidityInput: glue.GlueCheckSchemaVersionValidityInput = { ... }
```

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput.property.dataFormat"></a>

- *Type:* `string`

---

##### `schemaDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput.property.schemaDefinition"></a>

- *Type:* `string`

---

### GlueCheckSchemaVersionValidityResponse <a name="aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCheckSchemaVersionValidityResponse: glue.GlueCheckSchemaVersionValidityResponse = { ... }
```

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityResponse.property.error"></a>

- *Type:* `string`

---

##### `valid`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityResponse.property.valid"></a>

- *Type:* `boolean`

---

### GlueClassifier <a name="aws-cdk-sdk.glue.GlueClassifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueClassifier: glue.GlueClassifier = { ... }
```

##### `csvClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueClassifier.property.csvClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCsvClassifier`](#aws-cdk-sdk.glue.GlueCsvClassifier)

---

##### `grokClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueClassifier.property.grokClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGrokClassifier`](#aws-cdk-sdk.glue.GlueGrokClassifier)

---

##### `jsonClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueClassifier.property.jsonClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJsonClassifier`](#aws-cdk-sdk.glue.GlueJsonClassifier)

---

##### `xmlClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueClassifier.property.xmlClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueXmlClassifier`](#aws-cdk-sdk.glue.GlueXmlClassifier)

---

### GlueCloudWatchEncryption <a name="aws-cdk-sdk.glue.GlueCloudWatchEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCloudWatchEncryption: glue.GlueCloudWatchEncryption = { ... }
```

##### `cloudWatchEncryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCloudWatchEncryption.property.cloudWatchEncryptionMode"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCloudWatchEncryption.property.kmsKeyArn"></a>

- *Type:* `string`

---

### GlueCodeGenEdge <a name="aws-cdk-sdk.glue.GlueCodeGenEdge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCodeGenEdge: glue.GlueCodeGenEdge = { ... }
```

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenEdge.property.source"></a>

- *Type:* `string`

---

##### `target`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenEdge.property.target"></a>

- *Type:* `string`

---

##### `targetParameter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenEdge.property.targetParameter"></a>

- *Type:* `string`

---

### GlueCodeGenNode <a name="aws-cdk-sdk.glue.GlueCodeGenNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCodeGenNode: glue.GlueCodeGenNode = { ... }
```

##### `args`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNode.property.args"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNodeArg`](#aws-cdk-sdk.glue.GlueCodeGenNodeArg)[]

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNode.property.id"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNode.property.nodeType"></a>

- *Type:* `string`

---

##### `lineNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNode.property.lineNumber"></a>

- *Type:* `number`

---

### GlueCodeGenNodeArg <a name="aws-cdk-sdk.glue.GlueCodeGenNodeArg"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCodeGenNodeArg: glue.GlueCodeGenNodeArg = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNodeArg.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNodeArg.property.value"></a>

- *Type:* `string`

---

##### `param`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCodeGenNodeArg.property.param"></a>

- *Type:* `boolean`

---

### GlueColumn <a name="aws-cdk-sdk.glue.GlueColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueColumn: glue.GlueColumn = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueColumn.property.name"></a>

- *Type:* `string`

---

##### `comment`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumn.property.comment"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumn.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumn.property.type"></a>

- *Type:* `string`

---

### GlueColumnError <a name="aws-cdk-sdk.glue.GlueColumnError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueColumnError: glue.GlueColumnError = { ... }
```

##### `columnName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnError.property.columnName"></a>

- *Type:* `string`

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnError.property.error"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

### GlueColumnStatistics <a name="aws-cdk-sdk.glue.GlueColumnStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueColumnStatistics: glue.GlueColumnStatistics = { ... }
```

##### `analyzedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatistics.property.analyzedTime"></a>

- *Type:* `string`

---

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatistics.property.columnName"></a>

- *Type:* `string`

---

##### `columnType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatistics.property.columnType"></a>

- *Type:* `string`

---

##### `statisticsData`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatistics.property.statisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatisticsData`](#aws-cdk-sdk.glue.GlueColumnStatisticsData)

---

### GlueColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueColumnStatisticsData: glue.GlueColumnStatisticsData = { ... }
```

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.type"></a>

- *Type:* `string`

---

##### `binaryColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.binaryColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBinaryColumnStatisticsData`](#aws-cdk-sdk.glue.GlueBinaryColumnStatisticsData)

---

##### `booleanColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.booleanColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBooleanColumnStatisticsData`](#aws-cdk-sdk.glue.GlueBooleanColumnStatisticsData)

---

##### `dateColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.dateColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDateColumnStatisticsData`](#aws-cdk-sdk.glue.GlueDateColumnStatisticsData)

---

##### `decimalColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.decimalColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData`](#aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData)

---

##### `doubleColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.doubleColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData`](#aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData)

---

##### `longColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.longColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLongColumnStatisticsData`](#aws-cdk-sdk.glue.GlueLongColumnStatisticsData)

---

##### `stringColumnStatisticsData`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsData.property.stringColumnStatisticsData"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStringColumnStatisticsData`](#aws-cdk-sdk.glue.GlueStringColumnStatisticsData)

---

### GlueColumnStatisticsError <a name="aws-cdk-sdk.glue.GlueColumnStatisticsError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueColumnStatisticsError: glue.GlueColumnStatisticsError = { ... }
```

##### `columnStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsError.property.columnStatistics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)

---

##### `error`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueColumnStatisticsError.property.error"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

### GlueCondition <a name="aws-cdk-sdk.glue.GlueCondition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCondition: glue.GlueCondition = { ... }
```

##### `crawlerName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCondition.property.crawlerName"></a>

- *Type:* `string`

---

##### `crawlState`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCondition.property.crawlState"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCondition.property.jobName"></a>

- *Type:* `string`

---

##### `logicalOperator`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCondition.property.logicalOperator"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCondition.property.state"></a>

- *Type:* `string`

---

### GlueConfusionMatrix <a name="aws-cdk-sdk.glue.GlueConfusionMatrix"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueConfusionMatrix: glue.GlueConfusionMatrix = { ... }
```

##### `numFalseNegatives`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConfusionMatrix.property.numFalseNegatives"></a>

- *Type:* `number`

---

##### `numFalsePositives`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConfusionMatrix.property.numFalsePositives"></a>

- *Type:* `number`

---

##### `numTrueNegatives`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConfusionMatrix.property.numTrueNegatives"></a>

- *Type:* `number`

---

##### `numTruePositives`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConfusionMatrix.property.numTruePositives"></a>

- *Type:* `number`

---

### GlueConnection <a name="aws-cdk-sdk.glue.GlueConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueConnection: glue.GlueConnection = { ... }
```

##### `connectionProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.connectionProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.connectionType"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedBy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.lastUpdatedBy"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `matchCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.matchCriteria"></a>

- *Type:* `string`[]

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.name"></a>

- *Type:* `string`

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnection.property.physicalConnectionRequirements"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePhysicalConnectionRequirements`](#aws-cdk-sdk.glue.GluePhysicalConnectionRequirements)

---

### GlueConnectionInput <a name="aws-cdk-sdk.glue.GlueConnectionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueConnectionInput: glue.GlueConnectionInput = { ... }
```

##### `connectionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueConnectionInput.property.connectionProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueConnectionInput.property.connectionType"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueConnectionInput.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnectionInput.property.description"></a>

- *Type:* `string`

---

##### `matchCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnectionInput.property.matchCriteria"></a>

- *Type:* `string`[]

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnectionInput.property.physicalConnectionRequirements"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePhysicalConnectionRequirements`](#aws-cdk-sdk.glue.GluePhysicalConnectionRequirements)

---

### GlueConnectionPasswordEncryption <a name="aws-cdk-sdk.glue.GlueConnectionPasswordEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueConnectionPasswordEncryption: glue.GlueConnectionPasswordEncryption = { ... }
```

##### `returnConnectionPasswordEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueConnectionPasswordEncryption.property.returnConnectionPasswordEncrypted"></a>

- *Type:* `boolean`

---

##### `awsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnectionPasswordEncryption.property.awsKmsKeyId"></a>

- *Type:* `string`

---

### GlueConnectionsList <a name="aws-cdk-sdk.glue.GlueConnectionsList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueConnectionsList: glue.GlueConnectionsList = { ... }
```

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueConnectionsList.property.connections"></a>

- *Type:* `string`[]

---

### GlueCrawl <a name="aws-cdk-sdk.glue.GlueCrawl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCrawl: glue.GlueCrawl = { ... }
```

##### `completedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawl.property.completedOn"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawl.property.errorMessage"></a>

- *Type:* `string`

---

##### `logGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawl.property.logGroup"></a>

- *Type:* `string`

---

##### `logStream`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawl.property.logStream"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawl.property.startedOn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawl.property.state"></a>

- *Type:* `string`

---

### GlueCrawler <a name="aws-cdk-sdk.glue.GlueCrawler"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCrawler: glue.GlueCrawler = { ... }
```

##### `classifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.classifiers"></a>

- *Type:* `string`[]

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.configuration"></a>

- *Type:* `string`

---

##### `crawlElapsedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.crawlElapsedTime"></a>

- *Type:* `number`

---

##### `crawlerSecurityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.crawlerSecurityConfiguration"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.description"></a>

- *Type:* `string`

---

##### `lastCrawl`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.lastCrawl"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLastCrawlInfo`](#aws-cdk-sdk.glue.GlueLastCrawlInfo)

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.lastUpdated"></a>

- *Type:* `string`

---

##### `lineageConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.lineageConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLineageConfiguration`](#aws-cdk-sdk.glue.GlueLineageConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.name"></a>

- *Type:* `string`

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.recrawlPolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRecrawlPolicy`](#aws-cdk-sdk.glue.GlueRecrawlPolicy)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.role"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchedule`](#aws-cdk-sdk.glue.GlueSchedule)

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.schemaChangePolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaChangePolicy`](#aws-cdk-sdk.glue.GlueSchemaChangePolicy)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.state"></a>

- *Type:* `string`

---

##### `tablePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.tablePrefix"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.targets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawlerTargets`](#aws-cdk-sdk.glue.GlueCrawlerTargets)

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawler.property.version"></a>

- *Type:* `number`

---

### GlueCrawlerMetrics <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCrawlerMetrics: glue.GlueCrawlerMetrics = { ... }
```

##### `crawlerName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.crawlerName"></a>

- *Type:* `string`

---

##### `lastRuntimeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.lastRuntimeSeconds"></a>

- *Type:* `number`

---

##### `medianRuntimeSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.medianRuntimeSeconds"></a>

- *Type:* `number`

---

##### `stillEstimating`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.stillEstimating"></a>

- *Type:* `boolean`

---

##### `tablesCreated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.tablesCreated"></a>

- *Type:* `number`

---

##### `tablesDeleted`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.tablesDeleted"></a>

- *Type:* `number`

---

##### `tablesUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.tablesUpdated"></a>

- *Type:* `number`

---

##### `timeLeftSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerMetrics.property.timeLeftSeconds"></a>

- *Type:* `number`

---

### GlueCrawlerNodeDetails <a name="aws-cdk-sdk.glue.GlueCrawlerNodeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCrawlerNodeDetails: glue.GlueCrawlerNodeDetails = { ... }
```

##### `crawls`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerNodeDetails.property.crawls"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawl`](#aws-cdk-sdk.glue.GlueCrawl)[]

---

### GlueCrawlerTargets <a name="aws-cdk-sdk.glue.GlueCrawlerTargets"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCrawlerTargets: glue.GlueCrawlerTargets = { ... }
```

##### `catalogTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerTargets.property.catalogTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogTarget`](#aws-cdk-sdk.glue.GlueCatalogTarget)[]

---

##### `dynamoDbTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerTargets.property.dynamoDbTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDynamoDbTarget`](#aws-cdk-sdk.glue.GlueDynamoDbTarget)[]

---

##### `jdbcTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerTargets.property.jdbcTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJdbcTarget`](#aws-cdk-sdk.glue.GlueJdbcTarget)[]

---

##### `mongoDbTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerTargets.property.mongoDbTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMongoDbTarget`](#aws-cdk-sdk.glue.GlueMongoDbTarget)[]

---

##### `s3Targets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCrawlerTargets.property.s3Targets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueS3Target`](#aws-cdk-sdk.glue.GlueS3Target)[]

---

### GlueCreateClassifierRequest <a name="aws-cdk-sdk.glue.GlueCreateClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateClassifierRequest: glue.GlueCreateClassifierRequest = { ... }
```

##### `csvClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateClassifierRequest.property.csvClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest`](#aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest)

---

##### `grokClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateClassifierRequest.property.grokClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest`](#aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest)

---

##### `jsonClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateClassifierRequest.property.jsonClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateJsonClassifierRequest`](#aws-cdk-sdk.glue.GlueCreateJsonClassifierRequest)

---

##### `xmlClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateClassifierRequest.property.xmlClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateXmlClassifierRequest`](#aws-cdk-sdk.glue.GlueCreateXmlClassifierRequest)

---

### GlueCreateClassifierResponse <a name="aws-cdk-sdk.glue.GlueCreateClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateClassifierResponse: glue.GlueCreateClassifierResponse = { ... }
```

### GlueCreateConnectionRequest <a name="aws-cdk-sdk.glue.GlueCreateConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateConnectionRequest: glue.GlueCreateConnectionRequest = { ... }
```

##### `connectionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateConnectionRequest.property.connectionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnectionInput`](#aws-cdk-sdk.glue.GlueConnectionInput)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateConnectionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueCreateConnectionResponse <a name="aws-cdk-sdk.glue.GlueCreateConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateConnectionResponse: glue.GlueCreateConnectionResponse = { ... }
```

### GlueCreateCrawlerRequest <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateCrawlerRequest: glue.GlueCreateCrawlerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.name"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.role"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawlerTargets`](#aws-cdk-sdk.glue.GlueCrawlerTargets)

---

##### `classifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.classifiers"></a>

- *Type:* `string`[]

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.configuration"></a>

- *Type:* `string`

---

##### `crawlerSecurityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.crawlerSecurityConfiguration"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.description"></a>

- *Type:* `string`

---

##### `lineageConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.lineageConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLineageConfiguration`](#aws-cdk-sdk.glue.GlueLineageConfiguration)

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.recrawlPolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRecrawlPolicy`](#aws-cdk-sdk.glue.GlueRecrawlPolicy)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.schedule"></a>

- *Type:* `string`

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.schemaChangePolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaChangePolicy`](#aws-cdk-sdk.glue.GlueSchemaChangePolicy)

---

##### `tablePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.tablePrefix"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCrawlerRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueCreateCrawlerResponse <a name="aws-cdk-sdk.glue.GlueCreateCrawlerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateCrawlerResponse: glue.GlueCreateCrawlerResponse = { ... }
```

### GlueCreateCsvClassifierRequest <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateCsvClassifierRequest: glue.GlueCreateCsvClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `allowSingleColumn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.allowSingleColumn"></a>

- *Type:* `boolean`

---

##### `containsHeader`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.containsHeader"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `disableValueTrimming`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.disableValueTrimming"></a>

- *Type:* `boolean`

---

##### `header`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.header"></a>

- *Type:* `string`[]

---

##### `quoteSymbol`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateCsvClassifierRequest.property.quoteSymbol"></a>

- *Type:* `string`

---

### GlueCreateDatabaseRequest <a name="aws-cdk-sdk.glue.GlueCreateDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateDatabaseRequest: glue.GlueCreateDatabaseRequest = { ... }
```

##### `databaseInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateDatabaseRequest.property.databaseInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabaseInput`](#aws-cdk-sdk.glue.GlueDatabaseInput)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDatabaseRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueCreateDatabaseResponse <a name="aws-cdk-sdk.glue.GlueCreateDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateDatabaseResponse: glue.GlueCreateDatabaseResponse = { ... }
```

### GlueCreateDevEndpointRequest <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateDevEndpointRequest: glue.GlueCreateDevEndpointRequest = { ... }
```

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.endpointName"></a>

- *Type:* `string`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.roleArn"></a>

- *Type:* `string`

---

##### `arguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `extraJarsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.extraJarsS3Path"></a>

- *Type:* `string`

---

##### `extraPythonLibsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.extraPythonLibsS3Path"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.glueVersion"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.publicKey"></a>

- *Type:* `string`

---

##### `publicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.publicKeys"></a>

- *Type:* `string`[]

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.subnetId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointRequest.property.workerType"></a>

- *Type:* `string`

---

### GlueCreateDevEndpointResponse <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateDevEndpointResponse: glue.GlueCreateDevEndpointResponse = { ... }
```

##### `arguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.availabilityZone"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpointName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.endpointName"></a>

- *Type:* `string`

---

##### `extraJarsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.extraJarsS3Path"></a>

- *Type:* `string`

---

##### `extraPythonLibsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.extraPythonLibsS3Path"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.failureReason"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.glueVersion"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.roleArn"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.status"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.subnetId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.vpcId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.workerType"></a>

- *Type:* `string`

---

##### `yarnEndpointAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.yarnEndpointAddress"></a>

- *Type:* `string`

---

##### `zeppelinRemoteSparkInterpreterPort`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateDevEndpointResponse.property.zeppelinRemoteSparkInterpreterPort"></a>

- *Type:* `number`

---

### GlueCreateGrokClassifierRequest <a name="aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateGrokClassifierRequest: glue.GlueCreateGrokClassifierRequest = { ... }
```

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest.property.classification"></a>

- *Type:* `string`

---

##### `grokPattern`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest.property.grokPattern"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `customPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateGrokClassifierRequest.property.customPatterns"></a>

- *Type:* `string`

---

### GlueCreateJobRequest <a name="aws-cdk-sdk.glue.GlueCreateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateJobRequest: glue.GlueCreateJobRequest = { ... }
```

##### `command`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.command"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobCommand`](#aws-cdk-sdk.glue.GlueJobCommand)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.name"></a>

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.role"></a>

- *Type:* `string`

---

##### `allocatedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.connections"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnectionsList`](#aws-cdk-sdk.glue.GlueConnectionsList)

---

##### `defaultArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.defaultArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.description"></a>

- *Type:* `string`

---

##### `executionProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.executionProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueExecutionProperty`](#aws-cdk-sdk.glue.GlueExecutionProperty)

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.glueVersion"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.logUri"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.nonOverridableArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `notificationProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNotificationProperty`](#aws-cdk-sdk.glue.GlueNotificationProperty)

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.timeout"></a>

- *Type:* `number`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobRequest.property.workerType"></a>

- *Type:* `string`

---

### GlueCreateJobResponse <a name="aws-cdk-sdk.glue.GlueCreateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateJobResponse: glue.GlueCreateJobResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateJobResponse.property.name"></a>

- *Type:* `string`

---

### GlueCreateJsonClassifierRequest <a name="aws-cdk-sdk.glue.GlueCreateJsonClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateJsonClassifierRequest: glue.GlueCreateJsonClassifierRequest = { ... }
```

##### `jsonPath`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateJsonClassifierRequest.property.jsonPath"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateJsonClassifierRequest.property.name"></a>

- *Type:* `string`

---

### GlueCreateMlTransformRequest <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateMlTransformRequest: glue.GlueCreateMlTransformRequest = { ... }
```

##### `inputRecordTables`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.inputRecordTables"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGlueTable`](#aws-cdk-sdk.glue.GlueGlueTable)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformParameters`](#aws-cdk-sdk.glue.GlueTransformParameters)

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.role"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.description"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.glueVersion"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.timeout"></a>

- *Type:* `number`

---

##### `transformEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.transformEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformEncryption`](#aws-cdk-sdk.glue.GlueTransformEncryption)

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformRequest.property.workerType"></a>

- *Type:* `string`

---

### GlueCreateMlTransformResponse <a name="aws-cdk-sdk.glue.GlueCreateMlTransformResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateMlTransformResponse: glue.GlueCreateMlTransformResponse = { ... }
```

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateMlTransformResponse.property.transformId"></a>

- *Type:* `string`

---

### GlueCreatePartitionIndexRequest <a name="aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreatePartitionIndexRequest: glue.GlueCreatePartitionIndexRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionIndex`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest.property.partitionIndex"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionIndex`](#aws-cdk-sdk.glue.GluePartitionIndex)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionIndexRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueCreatePartitionIndexResponse <a name="aws-cdk-sdk.glue.GlueCreatePartitionIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreatePartitionIndexResponse: glue.GlueCreatePartitionIndexResponse = { ... }
```

### GlueCreatePartitionRequest <a name="aws-cdk-sdk.glue.GlueCreatePartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreatePartitionRequest: glue.GlueCreatePartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionRequest.property.partitionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionInput`](#aws-cdk-sdk.glue.GluePartitionInput)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreatePartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueCreatePartitionResponse <a name="aws-cdk-sdk.glue.GlueCreatePartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreatePartitionResponse: glue.GlueCreatePartitionResponse = { ... }
```

### GlueCreateRegistryInput <a name="aws-cdk-sdk.glue.GlueCreateRegistryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateRegistryInput: glue.GlueCreateRegistryInput = { ... }
```

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryInput.property.registryName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryInput.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueCreateRegistryResponse <a name="aws-cdk-sdk.glue.GlueCreateRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateRegistryResponse: glue.GlueCreateRegistryResponse = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryResponse.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateRegistryResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueCreateSchemaInput <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateSchemaInput: glue.GlueCreateSchemaInput = { ... }
```

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.dataFormat"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.schemaName"></a>

- *Type:* `string`

---

##### `compatibility`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.compatibility"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.description"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.registryId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryId`](#aws-cdk-sdk.glue.GlueRegistryId)

---

##### `schemaDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.schemaDefinition"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaInput.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueCreateSchemaResponse <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateSchemaResponse: glue.GlueCreateSchemaResponse = { ... }
```

##### `compatibility`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.compatibility"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.dataFormat"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.description"></a>

- *Type:* `string`

---

##### `latestSchemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.latestSchemaVersion"></a>

- *Type:* `number`

---

##### `nextSchemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.nextSchemaVersion"></a>

- *Type:* `number`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaCheckpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.schemaCheckpoint"></a>

- *Type:* `number`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.schemaStatus"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.schemaVersionStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSchemaResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueCreateScriptRequest <a name="aws-cdk-sdk.glue.GlueCreateScriptRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateScriptRequest: glue.GlueCreateScriptRequest = { ... }
```

##### `dagEdges`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateScriptRequest.property.dagEdges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenEdge`](#aws-cdk-sdk.glue.GlueCodeGenEdge)[]

---

##### `dagNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateScriptRequest.property.dagNodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNode`](#aws-cdk-sdk.glue.GlueCodeGenNode)[]

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateScriptRequest.property.language"></a>

- *Type:* `string`

---

### GlueCreateScriptResponse <a name="aws-cdk-sdk.glue.GlueCreateScriptResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateScriptResponse: glue.GlueCreateScriptResponse = { ... }
```

##### `pythonScript`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateScriptResponse.property.pythonScript"></a>

- *Type:* `string`

---

##### `scalaCode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateScriptResponse.property.scalaCode"></a>

- *Type:* `string`

---

### GlueCreateSecurityConfigurationRequest <a name="aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateSecurityConfigurationRequest: glue.GlueCreateSecurityConfigurationRequest = { ... }
```

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEncryptionConfiguration`](#aws-cdk-sdk.glue.GlueEncryptionConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest.property.name"></a>

- *Type:* `string`

---

### GlueCreateSecurityConfigurationResponse <a name="aws-cdk-sdk.glue.GlueCreateSecurityConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateSecurityConfigurationResponse: glue.GlueCreateSecurityConfigurationResponse = { ... }
```

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSecurityConfigurationResponse.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateSecurityConfigurationResponse.property.name"></a>

- *Type:* `string`

---

### GlueCreateTableRequest <a name="aws-cdk-sdk.glue.GlueCreateTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateTableRequest: glue.GlueCreateTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateTableRequest.property.tableInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableInput`](#aws-cdk-sdk.glue.GlueTableInput)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTableRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `partitionIndexes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTableRequest.property.partitionIndexes"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionIndex`](#aws-cdk-sdk.glue.GluePartitionIndex)[]

---

### GlueCreateTableResponse <a name="aws-cdk-sdk.glue.GlueCreateTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateTableResponse: glue.GlueCreateTableResponse = { ... }
```

### GlueCreateTriggerRequest <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateTriggerRequest: glue.GlueCreateTriggerRequest = { ... }
```

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.actions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueAction`](#aws-cdk-sdk.glue.GlueAction)[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.type"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.description"></a>

- *Type:* `string`

---

##### `predicate`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePredicate`](#aws-cdk-sdk.glue.GluePredicate)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.schedule"></a>

- *Type:* `string`

---

##### `startOnCreation`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.startOnCreation"></a>

- *Type:* `boolean`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `workflowName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerRequest.property.workflowName"></a>

- *Type:* `string`

---

### GlueCreateTriggerResponse <a name="aws-cdk-sdk.glue.GlueCreateTriggerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateTriggerResponse: glue.GlueCreateTriggerResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateTriggerResponse.property.name"></a>

- *Type:* `string`

---

### GlueCreateUserDefinedFunctionRequest <a name="aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateUserDefinedFunctionRequest: glue.GlueCreateUserDefinedFunctionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `functionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionRequest.property.functionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUserDefinedFunctionInput`](#aws-cdk-sdk.glue.GlueUserDefinedFunctionInput)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueCreateUserDefinedFunctionResponse <a name="aws-cdk-sdk.glue.GlueCreateUserDefinedFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateUserDefinedFunctionResponse: glue.GlueCreateUserDefinedFunctionResponse = { ... }
```

### GlueCreateWorkflowRequest <a name="aws-cdk-sdk.glue.GlueCreateWorkflowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateWorkflowRequest: glue.GlueCreateWorkflowRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateWorkflowRequest.property.name"></a>

- *Type:* `string`

---

##### `defaultRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateWorkflowRequest.property.defaultRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateWorkflowRequest.property.description"></a>

- *Type:* `string`

---

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateWorkflowRequest.property.maxConcurrentRuns"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateWorkflowRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueCreateWorkflowResponse <a name="aws-cdk-sdk.glue.GlueCreateWorkflowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateWorkflowResponse: glue.GlueCreateWorkflowResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateWorkflowResponse.property.name"></a>

- *Type:* `string`

---

### GlueCreateXmlClassifierRequest <a name="aws-cdk-sdk.glue.GlueCreateXmlClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCreateXmlClassifierRequest: glue.GlueCreateXmlClassifierRequest = { ... }
```

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateXmlClassifierRequest.property.classification"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCreateXmlClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `rowTag`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCreateXmlClassifierRequest.property.rowTag"></a>

- *Type:* `string`

---

### GlueCsvClassifier <a name="aws-cdk-sdk.glue.GlueCsvClassifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueCsvClassifier: glue.GlueCsvClassifier = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.name"></a>

- *Type:* `string`

---

##### `allowSingleColumn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.allowSingleColumn"></a>

- *Type:* `boolean`

---

##### `containsHeader`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.containsHeader"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.delimiter"></a>

- *Type:* `string`

---

##### `disableValueTrimming`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.disableValueTrimming"></a>

- *Type:* `boolean`

---

##### `header`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.header"></a>

- *Type:* `string`[]

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `quoteSymbol`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.quoteSymbol"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueCsvClassifier.property.version"></a>

- *Type:* `number`

---

### GlueDatabase <a name="aws-cdk-sdk.glue.GlueDatabase"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDatabase: glue.GlueDatabase = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.catalogId"></a>

- *Type:* `string`

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.createTableDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePrincipalPermissions`](#aws-cdk-sdk.glue.GluePrincipalPermissions)[]

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.description"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.locationUri"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetDatabase`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabase.property.targetDatabase"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabaseIdentifier`](#aws-cdk-sdk.glue.GlueDatabaseIdentifier)

---

### GlueDatabaseIdentifier <a name="aws-cdk-sdk.glue.GlueDatabaseIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDatabaseIdentifier: glue.GlueDatabaseIdentifier = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseIdentifier.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseIdentifier.property.databaseName"></a>

- *Type:* `string`

---

### GlueDatabaseInput <a name="aws-cdk-sdk.glue.GlueDatabaseInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDatabaseInput: glue.GlueDatabaseInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseInput.property.name"></a>

- *Type:* `string`

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseInput.property.createTableDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePrincipalPermissions`](#aws-cdk-sdk.glue.GluePrincipalPermissions)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseInput.property.description"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseInput.property.locationUri"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetDatabase`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDatabaseInput.property.targetDatabase"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabaseIdentifier`](#aws-cdk-sdk.glue.GlueDatabaseIdentifier)

---

### GlueDataCatalogEncryptionSettings <a name="aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDataCatalogEncryptionSettings: glue.GlueDataCatalogEncryptionSettings = { ... }
```

##### `connectionPasswordEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings.property.connectionPasswordEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnectionPasswordEncryption`](#aws-cdk-sdk.glue.GlueConnectionPasswordEncryption)

---

##### `encryptionAtRest`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings.property.encryptionAtRest"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEncryptionAtRest`](#aws-cdk-sdk.glue.GlueEncryptionAtRest)

---

### GlueDataLakePrincipal <a name="aws-cdk-sdk.glue.GlueDataLakePrincipal"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDataLakePrincipal: glue.GlueDataLakePrincipal = { ... }
```

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDataLakePrincipal.property.dataLakePrincipalIdentifier"></a>

- *Type:* `string`

---

### GlueDateColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueDateColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDateColumnStatisticsData: glue.GlueDateColumnStatisticsData = { ... }
```

##### `numberOfDistinctValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDateColumnStatisticsData.property.numberOfDistinctValues"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDateColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

##### `maximumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDateColumnStatisticsData.property.maximumValue"></a>

- *Type:* `string`

---

##### `minimumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDateColumnStatisticsData.property.minimumValue"></a>

- *Type:* `string`

---

### GlueDecimalColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDecimalColumnStatisticsData: glue.GlueDecimalColumnStatisticsData = { ... }
```

##### `numberOfDistinctValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData.property.numberOfDistinctValues"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

##### `maximumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData.property.maximumValue"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDecimalNumber`](#aws-cdk-sdk.glue.GlueDecimalNumber)

---

##### `minimumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDecimalColumnStatisticsData.property.minimumValue"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDecimalNumber`](#aws-cdk-sdk.glue.GlueDecimalNumber)

---

### GlueDecimalNumber <a name="aws-cdk-sdk.glue.GlueDecimalNumber"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDecimalNumber: glue.GlueDecimalNumber = { ... }
```

##### `scale`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDecimalNumber.property.scale"></a>

- *Type:* `number`

---

##### `unscaledValue`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDecimalNumber.property.unscaledValue"></a>

- *Type:* `any`

---

### GlueDeleteClassifierRequest <a name="aws-cdk-sdk.glue.GlueDeleteClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteClassifierRequest: glue.GlueDeleteClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteClassifierRequest.property.name"></a>

- *Type:* `string`

---

### GlueDeleteClassifierResponse <a name="aws-cdk-sdk.glue.GlueDeleteClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteClassifierResponse: glue.GlueDeleteClassifierResponse = { ... }
```

### GlueDeleteColumnStatisticsForPartitionRequest <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteColumnStatisticsForPartitionRequest: glue.GlueDeleteColumnStatisticsForPartitionRequest = { ... }
```

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest.property.columnName"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest.property.partitionValues"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteColumnStatisticsForPartitionResponse <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForPartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteColumnStatisticsForPartitionResponse: glue.GlueDeleteColumnStatisticsForPartitionResponse = { ... }
```

### GlueDeleteColumnStatisticsForTableRequest <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteColumnStatisticsForTableRequest: glue.GlueDeleteColumnStatisticsForTableRequest = { ... }
```

##### `columnName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest.property.columnName"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteColumnStatisticsForTableResponse <a name="aws-cdk-sdk.glue.GlueDeleteColumnStatisticsForTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteColumnStatisticsForTableResponse: glue.GlueDeleteColumnStatisticsForTableResponse = { ... }
```

### GlueDeleteConnectionRequest <a name="aws-cdk-sdk.glue.GlueDeleteConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteConnectionRequest: glue.GlueDeleteConnectionRequest = { ... }
```

##### `connectionName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteConnectionRequest.property.connectionName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteConnectionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteConnectionResponse <a name="aws-cdk-sdk.glue.GlueDeleteConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteConnectionResponse: glue.GlueDeleteConnectionResponse = { ... }
```

### GlueDeleteCrawlerRequest <a name="aws-cdk-sdk.glue.GlueDeleteCrawlerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteCrawlerRequest: glue.GlueDeleteCrawlerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteCrawlerRequest.property.name"></a>

- *Type:* `string`

---

### GlueDeleteCrawlerResponse <a name="aws-cdk-sdk.glue.GlueDeleteCrawlerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteCrawlerResponse: glue.GlueDeleteCrawlerResponse = { ... }
```

### GlueDeleteDatabaseRequest <a name="aws-cdk-sdk.glue.GlueDeleteDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteDatabaseRequest: glue.GlueDeleteDatabaseRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteDatabaseRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteDatabaseRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteDatabaseResponse <a name="aws-cdk-sdk.glue.GlueDeleteDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteDatabaseResponse: glue.GlueDeleteDatabaseResponse = { ... }
```

### GlueDeleteDevEndpointRequest <a name="aws-cdk-sdk.glue.GlueDeleteDevEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteDevEndpointRequest: glue.GlueDeleteDevEndpointRequest = { ... }
```

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteDevEndpointRequest.property.endpointName"></a>

- *Type:* `string`

---

### GlueDeleteDevEndpointResponse <a name="aws-cdk-sdk.glue.GlueDeleteDevEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteDevEndpointResponse: glue.GlueDeleteDevEndpointResponse = { ... }
```

### GlueDeleteJobRequest <a name="aws-cdk-sdk.glue.GlueDeleteJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteJobRequest: glue.GlueDeleteJobRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteJobRequest.property.jobName"></a>

- *Type:* `string`

---

### GlueDeleteJobResponse <a name="aws-cdk-sdk.glue.GlueDeleteJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteJobResponse: glue.GlueDeleteJobResponse = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteJobResponse.property.jobName"></a>

- *Type:* `string`

---

### GlueDeleteMlTransformRequest <a name="aws-cdk-sdk.glue.GlueDeleteMlTransformRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteMlTransformRequest: glue.GlueDeleteMlTransformRequest = { ... }
```

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteMlTransformRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueDeleteMlTransformResponse <a name="aws-cdk-sdk.glue.GlueDeleteMlTransformResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteMlTransformResponse: glue.GlueDeleteMlTransformResponse = { ... }
```

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteMlTransformResponse.property.transformId"></a>

- *Type:* `string`

---

### GlueDeletePartitionIndexRequest <a name="aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeletePartitionIndexRequest: glue.GlueDeletePartitionIndexRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest.property.indexName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionIndexRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeletePartitionIndexResponse <a name="aws-cdk-sdk.glue.GlueDeletePartitionIndexResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeletePartitionIndexResponse: glue.GlueDeletePartitionIndexResponse = { ... }
```

### GlueDeletePartitionRequest <a name="aws-cdk-sdk.glue.GlueDeletePartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeletePartitionRequest: glue.GlueDeletePartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionRequest.property.partitionValues"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeletePartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeletePartitionResponse <a name="aws-cdk-sdk.glue.GlueDeletePartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeletePartitionResponse: glue.GlueDeletePartitionResponse = { ... }
```

### GlueDeleteRegistryInput <a name="aws-cdk-sdk.glue.GlueDeleteRegistryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteRegistryInput: glue.GlueDeleteRegistryInput = { ... }
```

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteRegistryInput.property.registryId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryId`](#aws-cdk-sdk.glue.GlueRegistryId)

---

### GlueDeleteRegistryResponse <a name="aws-cdk-sdk.glue.GlueDeleteRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteRegistryResponse: glue.GlueDeleteRegistryResponse = { ... }
```

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteRegistryResponse.property.status"></a>

- *Type:* `string`

---

### GlueDeleteResourcePolicyRequest <a name="aws-cdk-sdk.glue.GlueDeleteResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteResourcePolicyRequest: glue.GlueDeleteResourcePolicyRequest = { ... }
```

##### `policyHashCondition`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteResourcePolicyRequest.property.policyHashCondition"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteResourcePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GlueDeleteResourcePolicyResponse <a name="aws-cdk-sdk.glue.GlueDeleteResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteResourcePolicyResponse: glue.GlueDeleteResourcePolicyResponse = { ... }
```

### GlueDeleteSchemaInput <a name="aws-cdk-sdk.glue.GlueDeleteSchemaInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteSchemaInput: glue.GlueDeleteSchemaInput = { ... }
```

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

### GlueDeleteSchemaResponse <a name="aws-cdk-sdk.glue.GlueDeleteSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteSchemaResponse: glue.GlueDeleteSchemaResponse = { ... }
```

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaResponse.property.status"></a>

- *Type:* `string`

---

### GlueDeleteSchemaVersionsInput <a name="aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteSchemaVersionsInput: glue.GlueDeleteSchemaVersionsInput = { ... }
```

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `versions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput.property.versions"></a>

- *Type:* `string`

---

### GlueDeleteSchemaVersionsResponse <a name="aws-cdk-sdk.glue.GlueDeleteSchemaVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteSchemaVersionsResponse: glue.GlueDeleteSchemaVersionsResponse = { ... }
```

##### `schemaVersionErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSchemaVersionsResponse.property.schemaVersionErrors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionErrorItem`](#aws-cdk-sdk.glue.GlueSchemaVersionErrorItem)[]

---

### GlueDeleteSecurityConfigurationRequest <a name="aws-cdk-sdk.glue.GlueDeleteSecurityConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteSecurityConfigurationRequest: glue.GlueDeleteSecurityConfigurationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteSecurityConfigurationRequest.property.name"></a>

- *Type:* `string`

---

### GlueDeleteSecurityConfigurationResponse <a name="aws-cdk-sdk.glue.GlueDeleteSecurityConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteSecurityConfigurationResponse: glue.GlueDeleteSecurityConfigurationResponse = { ... }
```

### GlueDeleteTableRequest <a name="aws-cdk-sdk.glue.GlueDeleteTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteTableRequest: glue.GlueDeleteTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteTableResponse <a name="aws-cdk-sdk.glue.GlueDeleteTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteTableResponse: glue.GlueDeleteTableResponse = { ... }
```

### GlueDeleteTableVersionRequest <a name="aws-cdk-sdk.glue.GlueDeleteTableVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteTableVersionRequest: glue.GlueDeleteTableVersionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableVersionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableVersionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableVersionRequest.property.versionId"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTableVersionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteTableVersionResponse <a name="aws-cdk-sdk.glue.GlueDeleteTableVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteTableVersionResponse: glue.GlueDeleteTableVersionResponse = { ... }
```

### GlueDeleteTriggerRequest <a name="aws-cdk-sdk.glue.GlueDeleteTriggerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteTriggerRequest: glue.GlueDeleteTriggerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTriggerRequest.property.name"></a>

- *Type:* `string`

---

### GlueDeleteTriggerResponse <a name="aws-cdk-sdk.glue.GlueDeleteTriggerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteTriggerResponse: glue.GlueDeleteTriggerResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteTriggerResponse.property.name"></a>

- *Type:* `string`

---

### GlueDeleteUserDefinedFunctionRequest <a name="aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteUserDefinedFunctionRequest: glue.GlueDeleteUserDefinedFunctionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueDeleteUserDefinedFunctionResponse <a name="aws-cdk-sdk.glue.GlueDeleteUserDefinedFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteUserDefinedFunctionResponse: glue.GlueDeleteUserDefinedFunctionResponse = { ... }
```

### GlueDeleteWorkflowRequest <a name="aws-cdk-sdk.glue.GlueDeleteWorkflowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteWorkflowRequest: glue.GlueDeleteWorkflowRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDeleteWorkflowRequest.property.name"></a>

- *Type:* `string`

---

### GlueDeleteWorkflowResponse <a name="aws-cdk-sdk.glue.GlueDeleteWorkflowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDeleteWorkflowResponse: glue.GlueDeleteWorkflowResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDeleteWorkflowResponse.property.name"></a>

- *Type:* `string`

---

### GlueDevEndpoint <a name="aws-cdk-sdk.glue.GlueDevEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDevEndpoint: glue.GlueDevEndpoint = { ... }
```

##### `arguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.availabilityZone"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpointName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.endpointName"></a>

- *Type:* `string`

---

##### `extraJarsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.extraJarsS3Path"></a>

- *Type:* `string`

---

##### `extraPythonLibsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.extraPythonLibsS3Path"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.failureReason"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.glueVersion"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `privateAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.privateAddress"></a>

- *Type:* `string`

---

##### `publicAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.publicAddress"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.publicKey"></a>

- *Type:* `string`

---

##### `publicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.publicKeys"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.roleArn"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.status"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.subnetId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.vpcId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.workerType"></a>

- *Type:* `string`

---

##### `yarnEndpointAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.yarnEndpointAddress"></a>

- *Type:* `string`

---

##### `zeppelinRemoteSparkInterpreterPort`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

- *Type:* `number`

---

### GlueDevEndpointCustomLibraries <a name="aws-cdk-sdk.glue.GlueDevEndpointCustomLibraries"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDevEndpointCustomLibraries: glue.GlueDevEndpointCustomLibraries = { ... }
```

##### `extraJarsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpointCustomLibraries.property.extraJarsS3Path"></a>

- *Type:* `string`

---

##### `extraPythonLibsS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDevEndpointCustomLibraries.property.extraPythonLibsS3Path"></a>

- *Type:* `string`

---

### GlueDoubleColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDoubleColumnStatisticsData: glue.GlueDoubleColumnStatisticsData = { ... }
```

##### `numberOfDistinctValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData.property.numberOfDistinctValues"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

##### `maximumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData.property.maximumValue"></a>

- *Type:* `number`

---

##### `minimumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDoubleColumnStatisticsData.property.minimumValue"></a>

- *Type:* `number`

---

### GlueDynamoDbTarget <a name="aws-cdk-sdk.glue.GlueDynamoDbTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueDynamoDbTarget: glue.GlueDynamoDbTarget = { ... }
```

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDynamoDbTarget.property.path"></a>

- *Type:* `string`

---

##### `scanAll`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDynamoDbTarget.property.scanAll"></a>

- *Type:* `boolean`

---

##### `scanRate`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueDynamoDbTarget.property.scanRate"></a>

- *Type:* `number`

---

### GlueEdge <a name="aws-cdk-sdk.glue.GlueEdge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueEdge: glue.GlueEdge = { ... }
```

##### `destinationId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEdge.property.destinationId"></a>

- *Type:* `string`

---

##### `sourceId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEdge.property.sourceId"></a>

- *Type:* `string`

---

### GlueEncryptionAtRest <a name="aws-cdk-sdk.glue.GlueEncryptionAtRest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueEncryptionAtRest: glue.GlueEncryptionAtRest = { ... }
```

##### `catalogEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueEncryptionAtRest.property.catalogEncryptionMode"></a>

- *Type:* `string`

---

##### `sseAwsKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEncryptionAtRest.property.sseAwsKmsKeyId"></a>

- *Type:* `string`

---

### GlueEncryptionConfiguration <a name="aws-cdk-sdk.glue.GlueEncryptionConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueEncryptionConfiguration: glue.GlueEncryptionConfiguration = { ... }
```

##### `cloudWatchEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEncryptionConfiguration.property.cloudWatchEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCloudWatchEncryption`](#aws-cdk-sdk.glue.GlueCloudWatchEncryption)

---

##### `jobBookmarksEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEncryptionConfiguration.property.jobBookmarksEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobBookmarksEncryption`](#aws-cdk-sdk.glue.GlueJobBookmarksEncryption)

---

##### `s3Encryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEncryptionConfiguration.property.s3Encryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueS3Encryption`](#aws-cdk-sdk.glue.GlueS3Encryption)[]

---

### GlueErrorDetail <a name="aws-cdk-sdk.glue.GlueErrorDetail"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueErrorDetail: glue.GlueErrorDetail = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueErrorDetail.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueErrorDetail.property.errorMessage"></a>

- *Type:* `string`

---

### GlueErrorDetails <a name="aws-cdk-sdk.glue.GlueErrorDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueErrorDetails: glue.GlueErrorDetails = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueErrorDetails.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueErrorDetails.property.errorMessage"></a>

- *Type:* `string`

---

### GlueEvaluationMetrics <a name="aws-cdk-sdk.glue.GlueEvaluationMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueEvaluationMetrics: glue.GlueEvaluationMetrics = { ... }
```

##### `transformType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueEvaluationMetrics.property.transformType"></a>

- *Type:* `string`

---

##### `findMatchesMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueEvaluationMetrics.property.findMatchesMetrics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueFindMatchesMetrics`](#aws-cdk-sdk.glue.GlueFindMatchesMetrics)

---

### GlueExecutionProperty <a name="aws-cdk-sdk.glue.GlueExecutionProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueExecutionProperty: glue.GlueExecutionProperty = { ... }
```

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueExecutionProperty.property.maxConcurrentRuns"></a>

- *Type:* `number`

---

### GlueExportLabelsTaskRunProperties <a name="aws-cdk-sdk.glue.GlueExportLabelsTaskRunProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueExportLabelsTaskRunProperties: glue.GlueExportLabelsTaskRunProperties = { ... }
```

##### `outputS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueExportLabelsTaskRunProperties.property.outputS3Path"></a>

- *Type:* `string`

---

### GlueFindMatchesMetrics <a name="aws-cdk-sdk.glue.GlueFindMatchesMetrics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueFindMatchesMetrics: glue.GlueFindMatchesMetrics = { ... }
```

##### `areaUnderPrCurve`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesMetrics.property.areaUnderPrCurve"></a>

- *Type:* `number`

---

##### `confusionMatrix`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesMetrics.property.confusionMatrix"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConfusionMatrix`](#aws-cdk-sdk.glue.GlueConfusionMatrix)

---

##### `f1`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesMetrics.property.f1"></a>

- *Type:* `number`

---

##### `precision`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesMetrics.property.recall"></a>

- *Type:* `number`

---

### GlueFindMatchesParameters <a name="aws-cdk-sdk.glue.GlueFindMatchesParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueFindMatchesParameters: glue.GlueFindMatchesParameters = { ... }
```

##### `accuracyCostTradeoff`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesParameters.property.accuracyCostTradeoff"></a>

- *Type:* `number`

---

##### `enforceProvidedLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesParameters.property.enforceProvidedLabels"></a>

- *Type:* `boolean`

---

##### `precisionRecallTradeoff`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesParameters.property.precisionRecallTradeoff"></a>

- *Type:* `number`

---

##### `primaryKeyColumnName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesParameters.property.primaryKeyColumnName"></a>

- *Type:* `string`

---

### GlueFindMatchesTaskRunProperties <a name="aws-cdk-sdk.glue.GlueFindMatchesTaskRunProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueFindMatchesTaskRunProperties: glue.GlueFindMatchesTaskRunProperties = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesTaskRunProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesTaskRunProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueFindMatchesTaskRunProperties.property.jobRunId"></a>

- *Type:* `string`

---

### GlueGetCatalogImportStatusRequest <a name="aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCatalogImportStatusRequest: glue.GlueGetCatalogImportStatusRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetCatalogImportStatusResponse <a name="aws-cdk-sdk.glue.GlueGetCatalogImportStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCatalogImportStatusResponse: glue.GlueGetCatalogImportStatusResponse = { ... }
```

##### `importStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCatalogImportStatusResponse.property.importStatus"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogImportStatus`](#aws-cdk-sdk.glue.GlueCatalogImportStatus)

---

### GlueGetClassifierRequest <a name="aws-cdk-sdk.glue.GlueGetClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetClassifierRequest: glue.GlueGetClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetClassifierRequest.property.name"></a>

- *Type:* `string`

---

### GlueGetClassifierResponse <a name="aws-cdk-sdk.glue.GlueGetClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetClassifierResponse: glue.GlueGetClassifierResponse = { ... }
```

##### `classifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetClassifierResponse.property.classifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueClassifier`](#aws-cdk-sdk.glue.GlueClassifier)

---

### GlueGetClassifiersRequest <a name="aws-cdk-sdk.glue.GlueGetClassifiersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetClassifiersRequest: glue.GlueGetClassifiersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetClassifiersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetClassifiersRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetClassifiersResponse <a name="aws-cdk-sdk.glue.GlueGetClassifiersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetClassifiersResponse: glue.GlueGetClassifiersResponse = { ... }
```

##### `classifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetClassifiersResponse.property.classifiers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueClassifier`](#aws-cdk-sdk.glue.GlueClassifier)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetClassifiersResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetColumnStatisticsForPartitionRequest <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetColumnStatisticsForPartitionRequest: glue.GlueGetColumnStatisticsForPartitionRequest = { ... }
```

##### `columnNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest.property.columnNames"></a>

- *Type:* `string`[]

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest.property.partitionValues"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetColumnStatisticsForPartitionResponse <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetColumnStatisticsForPartitionResponse: glue.GlueGetColumnStatisticsForPartitionResponse = { ... }
```

##### `columnStatisticsList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionResponse.property.columnStatisticsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnError`](#aws-cdk-sdk.glue.GlueColumnError)[]

---

### GlueGetColumnStatisticsForTableRequest <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetColumnStatisticsForTableRequest: glue.GlueGetColumnStatisticsForTableRequest = { ... }
```

##### `columnNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest.property.columnNames"></a>

- *Type:* `string`[]

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetColumnStatisticsForTableResponse <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetColumnStatisticsForTableResponse: glue.GlueGetColumnStatisticsForTableResponse = { ... }
```

##### `columnStatisticsList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableResponse.property.columnStatisticsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnError`](#aws-cdk-sdk.glue.GlueColumnError)[]

---

### GlueGetConnectionRequest <a name="aws-cdk-sdk.glue.GlueGetConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetConnectionRequest: glue.GlueGetConnectionRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `hidePassword`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionRequest.property.hidePassword"></a>

- *Type:* `boolean`

---

### GlueGetConnectionResponse <a name="aws-cdk-sdk.glue.GlueGetConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetConnectionResponse: glue.GlueGetConnectionResponse = { ... }
```

##### `connection`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionResponse.property.connection"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnection`](#aws-cdk-sdk.glue.GlueConnection)

---

### GlueGetConnectionsFilter <a name="aws-cdk-sdk.glue.GlueGetConnectionsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetConnectionsFilter: glue.GlueGetConnectionsFilter = { ... }
```

##### `connectionType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsFilter.property.connectionType"></a>

- *Type:* `string`

---

##### `matchCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsFilter.property.matchCriteria"></a>

- *Type:* `string`[]

---

### GlueGetConnectionsRequest <a name="aws-cdk-sdk.glue.GlueGetConnectionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetConnectionsRequest: glue.GlueGetConnectionsRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionsFilter`](#aws-cdk-sdk.glue.GlueGetConnectionsFilter)

---

##### `hidePassword`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsRequest.property.hidePassword"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetConnectionsResponse <a name="aws-cdk-sdk.glue.GlueGetConnectionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetConnectionsResponse: glue.GlueGetConnectionsResponse = { ... }
```

##### `connectionList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsResponse.property.connectionList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnection`](#aws-cdk-sdk.glue.GlueConnection)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetConnectionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetCrawlerMetricsRequest <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCrawlerMetricsRequest: glue.GlueGetCrawlerMetricsRequest = { ... }
```

##### `crawlerNameList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest.property.crawlerNameList"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetCrawlerMetricsResponse <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCrawlerMetricsResponse: glue.GlueGetCrawlerMetricsResponse = { ... }
```

##### `crawlerMetricsList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsResponse.property.crawlerMetricsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawlerMetrics`](#aws-cdk-sdk.glue.GlueCrawlerMetrics)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerMetricsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetCrawlerRequest <a name="aws-cdk-sdk.glue.GlueGetCrawlerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCrawlerRequest: glue.GlueGetCrawlerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerRequest.property.name"></a>

- *Type:* `string`

---

### GlueGetCrawlerResponse <a name="aws-cdk-sdk.glue.GlueGetCrawlerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCrawlerResponse: glue.GlueGetCrawlerResponse = { ... }
```

##### `crawler`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlerResponse.property.crawler"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawler`](#aws-cdk-sdk.glue.GlueCrawler)

---

### GlueGetCrawlersRequest <a name="aws-cdk-sdk.glue.GlueGetCrawlersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCrawlersRequest: glue.GlueGetCrawlersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlersRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetCrawlersResponse <a name="aws-cdk-sdk.glue.GlueGetCrawlersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetCrawlersResponse: glue.GlueGetCrawlersResponse = { ... }
```

##### `crawlers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlersResponse.property.crawlers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawler`](#aws-cdk-sdk.glue.GlueCrawler)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetCrawlersResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetDatabaseRequest <a name="aws-cdk-sdk.glue.GlueGetDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDatabaseRequest: glue.GlueGetDatabaseRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabaseRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabaseRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetDatabaseResponse <a name="aws-cdk-sdk.glue.GlueGetDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDatabaseResponse: glue.GlueGetDatabaseResponse = { ... }
```

##### `database`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabaseResponse.property.database"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabase`](#aws-cdk-sdk.glue.GlueDatabase)

---

### GlueGetDatabasesRequest <a name="aws-cdk-sdk.glue.GlueGetDatabasesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDatabasesRequest: glue.GlueGetDatabasesRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabasesRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabasesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabasesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabasesRequest.property.resourceShareType"></a>

- *Type:* `string`

---

### GlueGetDatabasesResponse <a name="aws-cdk-sdk.glue.GlueGetDatabasesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDatabasesResponse: glue.GlueGetDatabasesResponse = { ... }
```

##### `databaseList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabasesResponse.property.databaseList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabase`](#aws-cdk-sdk.glue.GlueDatabase)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDatabasesResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetDataCatalogEncryptionSettingsRequest <a name="aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDataCatalogEncryptionSettingsRequest: glue.GlueGetDataCatalogEncryptionSettingsRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetDataCatalogEncryptionSettingsResponse <a name="aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDataCatalogEncryptionSettingsResponse: glue.GlueGetDataCatalogEncryptionSettingsResponse = { ... }
```

##### `dataCatalogEncryptionSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsResponse.property.dataCatalogEncryptionSettings"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings`](#aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings)

---

### GlueGetDataflowGraphRequest <a name="aws-cdk-sdk.glue.GlueGetDataflowGraphRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDataflowGraphRequest: glue.GlueGetDataflowGraphRequest = { ... }
```

##### `pythonScript`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDataflowGraphRequest.property.pythonScript"></a>

- *Type:* `string`

---

### GlueGetDataflowGraphResponse <a name="aws-cdk-sdk.glue.GlueGetDataflowGraphResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDataflowGraphResponse: glue.GlueGetDataflowGraphResponse = { ... }
```

##### `dagEdges`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDataflowGraphResponse.property.dagEdges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenEdge`](#aws-cdk-sdk.glue.GlueCodeGenEdge)[]

---

##### `dagNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDataflowGraphResponse.property.dagNodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNode`](#aws-cdk-sdk.glue.GlueCodeGenNode)[]

---

### GlueGetDevEndpointRequest <a name="aws-cdk-sdk.glue.GlueGetDevEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDevEndpointRequest: glue.GlueGetDevEndpointRequest = { ... }
```

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetDevEndpointRequest.property.endpointName"></a>

- *Type:* `string`

---

### GlueGetDevEndpointResponse <a name="aws-cdk-sdk.glue.GlueGetDevEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDevEndpointResponse: glue.GlueGetDevEndpointResponse = { ... }
```

##### `devEndpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDevEndpointResponse.property.devEndpoint"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDevEndpoint`](#aws-cdk-sdk.glue.GlueDevEndpoint)

---

### GlueGetDevEndpointsRequest <a name="aws-cdk-sdk.glue.GlueGetDevEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDevEndpointsRequest: glue.GlueGetDevEndpointsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDevEndpointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDevEndpointsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetDevEndpointsResponse <a name="aws-cdk-sdk.glue.GlueGetDevEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetDevEndpointsResponse: glue.GlueGetDevEndpointsResponse = { ... }
```

##### `devEndpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDevEndpointsResponse.property.devEndpoints"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDevEndpoint`](#aws-cdk-sdk.glue.GlueDevEndpoint)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetDevEndpointsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetJobBookmarkRequest <a name="aws-cdk-sdk.glue.GlueGetJobBookmarkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobBookmarkRequest: glue.GlueGetJobBookmarkRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetJobBookmarkRequest.property.jobName"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobBookmarkRequest.property.runId"></a>

- *Type:* `string`

---

### GlueGetJobBookmarkResponse <a name="aws-cdk-sdk.glue.GlueGetJobBookmarkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobBookmarkResponse: glue.GlueGetJobBookmarkResponse = { ... }
```

##### `jobBookmarkEntry`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobBookmarkResponse.property.jobBookmarkEntry"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobBookmarkEntry`](#aws-cdk-sdk.glue.GlueJobBookmarkEntry)

---

### GlueGetJobRequest <a name="aws-cdk-sdk.glue.GlueGetJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobRequest: glue.GlueGetJobRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRequest.property.jobName"></a>

- *Type:* `string`

---

### GlueGetJobResponse <a name="aws-cdk-sdk.glue.GlueGetJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobResponse: glue.GlueGetJobResponse = { ... }
```

##### `job`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobResponse.property.job"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJob`](#aws-cdk-sdk.glue.GlueJob)

---

### GlueGetJobRunRequest <a name="aws-cdk-sdk.glue.GlueGetJobRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobRunRequest: glue.GlueGetJobRunRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunRequest.property.jobName"></a>

- *Type:* `string`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunRequest.property.runId"></a>

- *Type:* `string`

---

##### `predecessorsIncluded`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunRequest.property.predecessorsIncluded"></a>

- *Type:* `boolean`

---

### GlueGetJobRunResponse <a name="aws-cdk-sdk.glue.GlueGetJobRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobRunResponse: glue.GlueGetJobRunResponse = { ... }
```

##### `jobRun`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunResponse.property.jobRun"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobRun`](#aws-cdk-sdk.glue.GlueJobRun)

---

### GlueGetJobRunsRequest <a name="aws-cdk-sdk.glue.GlueGetJobRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobRunsRequest: glue.GlueGetJobRunsRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunsRequest.property.jobName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetJobRunsResponse <a name="aws-cdk-sdk.glue.GlueGetJobRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobRunsResponse: glue.GlueGetJobRunsResponse = { ... }
```

##### `jobRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunsResponse.property.jobRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobRun`](#aws-cdk-sdk.glue.GlueJobRun)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetJobsRequest <a name="aws-cdk-sdk.glue.GlueGetJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobsRequest: glue.GlueGetJobsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetJobsResponse <a name="aws-cdk-sdk.glue.GlueGetJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetJobsResponse: glue.GlueGetJobsResponse = { ... }
```

##### `jobs`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobsResponse.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJob`](#aws-cdk-sdk.glue.GlueJob)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetMappingRequest <a name="aws-cdk-sdk.glue.GlueGetMappingRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMappingRequest: glue.GlueGetMappingRequest = { ... }
```

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMappingRequest.property.source"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogEntry`](#aws-cdk-sdk.glue.GlueCatalogEntry)

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMappingRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLocation`](#aws-cdk-sdk.glue.GlueLocation)

---

##### `sinks`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMappingRequest.property.sinks"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogEntry`](#aws-cdk-sdk.glue.GlueCatalogEntry)[]

---

### GlueGetMappingResponse <a name="aws-cdk-sdk.glue.GlueGetMappingResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMappingResponse: glue.GlueGetMappingResponse = { ... }
```

##### `mapping`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMappingResponse.property.mapping"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMappingEntry`](#aws-cdk-sdk.glue.GlueMappingEntry)[]

---

### GlueGetMlTaskRunRequest <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTaskRunRequest: glue.GlueGetMlTaskRunRequest = { ... }
```

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunRequest.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueGetMlTaskRunResponse <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTaskRunResponse: glue.GlueGetMlTaskRunResponse = { ... }
```

##### `completedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.completedOn"></a>

- *Type:* `string`

---

##### `errorString`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.errorString"></a>

- *Type:* `string`

---

##### `executionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.executionTime"></a>

- *Type:* `number`

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.logGroupName"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.properties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTaskRunProperties`](#aws-cdk-sdk.glue.GlueTaskRunProperties)

---

##### `startedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.startedOn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.status"></a>

- *Type:* `string`

---

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunResponse.property.transformId"></a>

- *Type:* `string`

---

### GlueGetMlTaskRunsRequest <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTaskRunsRequest: glue.GlueGetMlTaskRunsRequest = { ... }
```

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest.property.transformId"></a>

- *Type:* `string`

---

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTaskRunFilterCriteria`](#aws-cdk-sdk.glue.GlueTaskRunFilterCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest.property.sort"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTaskRunSortCriteria`](#aws-cdk-sdk.glue.GlueTaskRunSortCriteria)

---

### GlueGetMlTaskRunsResponse <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTaskRunsResponse: glue.GlueGetMlTaskRunsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `taskRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTaskRunsResponse.property.taskRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTaskRun`](#aws-cdk-sdk.glue.GlueTaskRun)[]

---

### GlueGetMlTransformRequest <a name="aws-cdk-sdk.glue.GlueGetMlTransformRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTransformRequest: glue.GlueGetMlTransformRequest = { ... }
```

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueGetMlTransformResponse <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTransformResponse: glue.GlueGetMlTransformResponse = { ... }
```

##### `createdOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.createdOn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.description"></a>

- *Type:* `string`

---

##### `evaluationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEvaluationMetrics`](#aws-cdk-sdk.glue.GlueEvaluationMetrics)

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.glueVersion"></a>

- *Type:* `string`

---

##### `inputRecordTables`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.inputRecordTables"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGlueTable`](#aws-cdk-sdk.glue.GlueGlueTable)[]

---

##### `labelCount`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.labelCount"></a>

- *Type:* `number`

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.name"></a>

- *Type:* `string`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformParameters`](#aws-cdk-sdk.glue.GlueTransformParameters)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.role"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.schema"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaColumn`](#aws-cdk-sdk.glue.GlueSchemaColumn)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.status"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.timeout"></a>

- *Type:* `number`

---

##### `transformEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.transformEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformEncryption`](#aws-cdk-sdk.glue.GlueTransformEncryption)

---

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.transformId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformResponse.property.workerType"></a>

- *Type:* `string`

---

### GlueGetMlTransformsRequest <a name="aws-cdk-sdk.glue.GlueGetMlTransformsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTransformsRequest: glue.GlueGetMlTransformsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformFilterCriteria`](#aws-cdk-sdk.glue.GlueTransformFilterCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformsRequest.property.sort"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformSortCriteria`](#aws-cdk-sdk.glue.GlueTransformSortCriteria)

---

### GlueGetMlTransformsResponse <a name="aws-cdk-sdk.glue.GlueGetMlTransformsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetMlTransformsResponse: glue.GlueGetMlTransformsResponse = { ... }
```

##### `transforms`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformsResponse.property.transforms"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMlTransform`](#aws-cdk-sdk.glue.GlueMlTransform)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetMlTransformsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetPartitionIndexesRequest <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPartitionIndexesRequest: glue.GlueGetPartitionIndexesRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetPartitionIndexesResponse <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPartitionIndexesResponse: glue.GlueGetPartitionIndexesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `partitionIndexDescriptorList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionIndexesResponse.property.partitionIndexDescriptorList"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionIndexDescriptor`](#aws-cdk-sdk.glue.GluePartitionIndexDescriptor)[]

---

### GlueGetPartitionRequest <a name="aws-cdk-sdk.glue.GlueGetPartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPartitionRequest: glue.GlueGetPartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionRequest.property.partitionValues"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetPartitionResponse <a name="aws-cdk-sdk.glue.GlueGetPartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPartitionResponse: glue.GlueGetPartitionResponse = { ... }
```

##### `partition`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionResponse.property.partition"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartition`](#aws-cdk-sdk.glue.GluePartition)

---

### GlueGetPartitionsRequest <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPartitionsRequest: glue.GlueGetPartitionsRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.expression"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `segment`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsRequest.property.segment"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSegment`](#aws-cdk-sdk.glue.GlueSegment)

---

### GlueGetPartitionsResponse <a name="aws-cdk-sdk.glue.GlueGetPartitionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPartitionsResponse: glue.GlueGetPartitionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `partitions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPartitionsResponse.property.partitions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartition`](#aws-cdk-sdk.glue.GluePartition)[]

---

### GlueGetPlanRequest <a name="aws-cdk-sdk.glue.GlueGetPlanRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPlanRequest: glue.GlueGetPlanRequest = { ... }
```

##### `mapping`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanRequest.property.mapping"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMappingEntry`](#aws-cdk-sdk.glue.GlueMappingEntry)[]

---

##### `source`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanRequest.property.source"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogEntry`](#aws-cdk-sdk.glue.GlueCatalogEntry)

---

##### `additionalPlanOptionsMap`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanRequest.property.additionalPlanOptionsMap"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `language`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanRequest.property.language"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanRequest.property.location"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLocation`](#aws-cdk-sdk.glue.GlueLocation)

---

##### `sinks`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanRequest.property.sinks"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogEntry`](#aws-cdk-sdk.glue.GlueCatalogEntry)[]

---

### GlueGetPlanResponse <a name="aws-cdk-sdk.glue.GlueGetPlanResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetPlanResponse: glue.GlueGetPlanResponse = { ... }
```

##### `pythonScript`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanResponse.property.pythonScript"></a>

- *Type:* `string`

---

##### `scalaCode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetPlanResponse.property.scalaCode"></a>

- *Type:* `string`

---

### GlueGetRegistryInput <a name="aws-cdk-sdk.glue.GlueGetRegistryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetRegistryInput: glue.GlueGetRegistryInput = { ... }
```

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryInput.property.registryId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryId`](#aws-cdk-sdk.glue.GlueRegistryId)

---

### GlueGetRegistryResponse <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetRegistryResponse: glue.GlueGetRegistryResponse = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetRegistryResponse.property.updatedTime"></a>

- *Type:* `string`

---

### GlueGetResourcePoliciesRequest <a name="aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetResourcePoliciesRequest: glue.GlueGetResourcePoliciesRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetResourcePoliciesResponse <a name="aws-cdk-sdk.glue.GlueGetResourcePoliciesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetResourcePoliciesResponse: glue.GlueGetResourcePoliciesResponse = { ... }
```

##### `fetchResourcePoliciesResponseList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePoliciesResponse.property.fetchResourcePoliciesResponseList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGluePolicy`](#aws-cdk-sdk.glue.GlueGluePolicy)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePoliciesResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetResourcePolicyRequest <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetResourcePolicyRequest: glue.GlueGetResourcePolicyRequest = { ... }
```

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GlueGetResourcePolicyResponse <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetResourcePolicyResponse: glue.GlueGetResourcePolicyResponse = { ... }
```

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyResponse.property.createTime"></a>

- *Type:* `string`

---

##### `policyHash`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyResponse.property.policyHash"></a>

- *Type:* `string`

---

##### `policyInJson`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyResponse.property.policyInJson"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetResourcePolicyResponse.property.updateTime"></a>

- *Type:* `string`

---

### GlueGetSchemaByDefinitionInput <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaByDefinitionInput: glue.GlueGetSchemaByDefinitionInput = { ... }
```

##### `schemaDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput.property.schemaDefinition"></a>

- *Type:* `string`

---

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

### GlueGetSchemaByDefinitionResponse <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaByDefinitionResponse: glue.GlueGetSchemaByDefinitionResponse = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionResponse.property.dataFormat"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaByDefinitionResponse.property.status"></a>

- *Type:* `string`

---

### GlueGetSchemaInput <a name="aws-cdk-sdk.glue.GlueGetSchemaInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaInput: glue.GlueGetSchemaInput = { ... }
```

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

### GlueGetSchemaResponse <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaResponse: glue.GlueGetSchemaResponse = { ... }
```

##### `compatibility`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.compatibility"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.dataFormat"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.description"></a>

- *Type:* `string`

---

##### `latestSchemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.latestSchemaVersion"></a>

- *Type:* `number`

---

##### `nextSchemaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.nextSchemaVersion"></a>

- *Type:* `number`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaCheckpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.schemaCheckpoint"></a>

- *Type:* `number`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.schemaStatus"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaResponse.property.updatedTime"></a>

- *Type:* `string`

---

### GlueGetSchemaVersionInput <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaVersionInput: glue.GlueGetSchemaVersionInput = { ... }
```

##### `schemaId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionInput.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionInput.property.schemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

### GlueGetSchemaVersionResponse <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaVersionResponse: glue.GlueGetSchemaVersionResponse = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.createdTime"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.dataFormat"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.schemaDefinition"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionResponse.property.versionNumber"></a>

- *Type:* `number`

---

### GlueGetSchemaVersionsDiffInput <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaVersionsDiffInput: glue.GlueGetSchemaVersionsDiffInput = { ... }
```

##### `firstSchemaVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput.property.firstSchemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

##### `schemaDiffType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput.property.schemaDiffType"></a>

- *Type:* `string`

---

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `secondSchemaVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput.property.secondSchemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

### GlueGetSchemaVersionsDiffResponse <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSchemaVersionsDiffResponse: glue.GlueGetSchemaVersionsDiffResponse = { ... }
```

##### `diff`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffResponse.property.diff"></a>

- *Type:* `string`

---

### GlueGetSecurityConfigurationRequest <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSecurityConfigurationRequest: glue.GlueGetSecurityConfigurationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest.property.name"></a>

- *Type:* `string`

---

### GlueGetSecurityConfigurationResponse <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSecurityConfigurationResponse: glue.GlueGetSecurityConfigurationResponse = { ... }
```

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationResponse.property.securityConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSecurityConfiguration`](#aws-cdk-sdk.glue.GlueSecurityConfiguration)

---

### GlueGetSecurityConfigurationsRequest <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSecurityConfigurationsRequest: glue.GlueGetSecurityConfigurationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetSecurityConfigurationsResponse <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetSecurityConfigurationsResponse: glue.GlueGetSecurityConfigurationsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `securityConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetSecurityConfigurationsResponse.property.securityConfigurations"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSecurityConfiguration`](#aws-cdk-sdk.glue.GlueSecurityConfiguration)[]

---

### GlueGetTableRequest <a name="aws-cdk-sdk.glue.GlueGetTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTableRequest: glue.GlueGetTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTableRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetTableResponse <a name="aws-cdk-sdk.glue.GlueGetTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTableResponse: glue.GlueGetTableResponse = { ... }
```

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableResponse.property.table"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTable`](#aws-cdk-sdk.glue.GlueTable)

---

### GlueGetTablesRequest <a name="aws-cdk-sdk.glue.GlueGetTablesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTablesRequest: glue.GlueGetTablesRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `expression`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesRequest.property.expression"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetTablesResponse <a name="aws-cdk-sdk.glue.GlueGetTablesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTablesResponse: glue.GlueGetTablesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tableList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTablesResponse.property.tableList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTable`](#aws-cdk-sdk.glue.GlueTable)[]

---

### GlueGetTableVersionRequest <a name="aws-cdk-sdk.glue.GlueGetTableVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTableVersionRequest: glue.GlueGetTableVersionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionRequest.property.versionId"></a>

- *Type:* `string`

---

### GlueGetTableVersionResponse <a name="aws-cdk-sdk.glue.GlueGetTableVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTableVersionResponse: glue.GlueGetTableVersionResponse = { ... }
```

##### `tableVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionResponse.property.tableVersion"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableVersion`](#aws-cdk-sdk.glue.GlueTableVersion)

---

### GlueGetTableVersionsRequest <a name="aws-cdk-sdk.glue.GlueGetTableVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTableVersionsRequest: glue.GlueGetTableVersionsRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetTableVersionsResponse <a name="aws-cdk-sdk.glue.GlueGetTableVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTableVersionsResponse: glue.GlueGetTableVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tableVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTableVersionsResponse.property.tableVersions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableVersion`](#aws-cdk-sdk.glue.GlueTableVersion)[]

---

### GlueGetTagsRequest <a name="aws-cdk-sdk.glue.GlueGetTagsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTagsRequest: glue.GlueGetTagsRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTagsRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GlueGetTagsResponse <a name="aws-cdk-sdk.glue.GlueGetTagsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTagsResponse: glue.GlueGetTagsResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTagsResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueGetTriggerRequest <a name="aws-cdk-sdk.glue.GlueGetTriggerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTriggerRequest: glue.GlueGetTriggerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggerRequest.property.name"></a>

- *Type:* `string`

---

### GlueGetTriggerResponse <a name="aws-cdk-sdk.glue.GlueGetTriggerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTriggerResponse: glue.GlueGetTriggerResponse = { ... }
```

##### `trigger`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggerResponse.property.trigger"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)

---

### GlueGetTriggersRequest <a name="aws-cdk-sdk.glue.GlueGetTriggersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTriggersRequest: glue.GlueGetTriggersRequest = { ... }
```

##### `dependentJobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggersRequest.property.dependentJobName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggersRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetTriggersResponse <a name="aws-cdk-sdk.glue.GlueGetTriggersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetTriggersResponse: glue.GlueGetTriggersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `triggers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetTriggersResponse.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)[]

---

### GlueGetUserDefinedFunctionRequest <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetUserDefinedFunctionRequest: glue.GlueGetUserDefinedFunctionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueGetUserDefinedFunctionResponse <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetUserDefinedFunctionResponse: glue.GlueGetUserDefinedFunctionResponse = { ... }
```

##### `userDefinedFunction`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionResponse.property.userDefinedFunction"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUserDefinedFunction`](#aws-cdk-sdk.glue.GlueUserDefinedFunction)

---

### GlueGetUserDefinedFunctionsRequest <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetUserDefinedFunctionsRequest: glue.GlueGetUserDefinedFunctionsRequest = { ... }
```

##### `pattern`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest.property.pattern"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetUserDefinedFunctionsResponse <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetUserDefinedFunctionsResponse: glue.GlueGetUserDefinedFunctionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `userDefinedFunctions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsResponse.property.userDefinedFunctions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUserDefinedFunction`](#aws-cdk-sdk.glue.GlueUserDefinedFunction)[]

---

### GlueGetWorkflowRequest <a name="aws-cdk-sdk.glue.GlueGetWorkflowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRequest: glue.GlueGetWorkflowRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRequest.property.name"></a>

- *Type:* `string`

---

##### `includeGraph`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRequest.property.includeGraph"></a>

- *Type:* `boolean`

---

### GlueGetWorkflowResponse <a name="aws-cdk-sdk.glue.GlueGetWorkflowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowResponse: glue.GlueGetWorkflowResponse = { ... }
```

##### `workflow`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowResponse.property.workflow"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflow`](#aws-cdk-sdk.glue.GlueWorkflow)

---

### GlueGetWorkflowRunPropertiesRequest <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRunPropertiesRequest: glue.GlueGetWorkflowRunPropertiesRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest.property.name"></a>

- *Type:* `string`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest.property.runId"></a>

- *Type:* `string`

---

### GlueGetWorkflowRunPropertiesResponse <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRunPropertiesResponse: glue.GlueGetWorkflowRunPropertiesResponse = { ... }
```

##### `runProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesResponse.property.runProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueGetWorkflowRunRequest <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRunRequest: glue.GlueGetWorkflowRunRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunRequest.property.name"></a>

- *Type:* `string`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunRequest.property.runId"></a>

- *Type:* `string`

---

##### `includeGraph`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunRequest.property.includeGraph"></a>

- *Type:* `boolean`

---

### GlueGetWorkflowRunResponse <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRunResponse: glue.GlueGetWorkflowRunResponse = { ... }
```

##### `run`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunResponse.property.run"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowRun`](#aws-cdk-sdk.glue.GlueWorkflowRun)

---

### GlueGetWorkflowRunsRequest <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRunsRequest: glue.GlueGetWorkflowRunsRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest.property.name"></a>

- *Type:* `string`

---

##### `includeGraph`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest.property.includeGraph"></a>

- *Type:* `boolean`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueGetWorkflowRunsResponse <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGetWorkflowRunsResponse: glue.GlueGetWorkflowRunsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `runs`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGetWorkflowRunsResponse.property.runs"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowRun`](#aws-cdk-sdk.glue.GlueWorkflowRun)[]

---

### GlueGluePolicy <a name="aws-cdk-sdk.glue.GlueGluePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGluePolicy: glue.GlueGluePolicy = { ... }
```

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGluePolicy.property.createTime"></a>

- *Type:* `string`

---

##### `policyHash`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGluePolicy.property.policyHash"></a>

- *Type:* `string`

---

##### `policyInJson`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGluePolicy.property.policyInJson"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGluePolicy.property.updateTime"></a>

- *Type:* `string`

---

### GlueGlueTable <a name="aws-cdk-sdk.glue.GlueGlueTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGlueTable: glue.GlueGlueTable = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGlueTable.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGlueTable.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGlueTable.property.catalogId"></a>

- *Type:* `string`

---

##### `connectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGlueTable.property.connectionName"></a>

- *Type:* `string`

---

### GlueGrokClassifier <a name="aws-cdk-sdk.glue.GlueGrokClassifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueGrokClassifier: glue.GlueGrokClassifier = { ... }
```

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.classification"></a>

- *Type:* `string`

---

##### `grokPattern`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.grokPattern"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.name"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `customPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.customPatterns"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueGrokClassifier.property.version"></a>

- *Type:* `number`

---

### GlueImportCatalogToGlueRequest <a name="aws-cdk-sdk.glue.GlueImportCatalogToGlueRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueImportCatalogToGlueRequest: glue.GlueImportCatalogToGlueRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueImportCatalogToGlueRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueImportCatalogToGlueResponse <a name="aws-cdk-sdk.glue.GlueImportCatalogToGlueResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueImportCatalogToGlueResponse: glue.GlueImportCatalogToGlueResponse = { ... }
```

### GlueImportLabelsTaskRunProperties <a name="aws-cdk-sdk.glue.GlueImportLabelsTaskRunProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueImportLabelsTaskRunProperties: glue.GlueImportLabelsTaskRunProperties = { ... }
```

##### `inputS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueImportLabelsTaskRunProperties.property.inputS3Path"></a>

- *Type:* `string`

---

##### `replace`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueImportLabelsTaskRunProperties.property.replace"></a>

- *Type:* `boolean`

---

### GlueJdbcTarget <a name="aws-cdk-sdk.glue.GlueJdbcTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJdbcTarget: glue.GlueJdbcTarget = { ... }
```

##### `connectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJdbcTarget.property.connectionName"></a>

- *Type:* `string`

---

##### `exclusions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJdbcTarget.property.exclusions"></a>

- *Type:* `string`[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJdbcTarget.property.path"></a>

- *Type:* `string`

---

### GlueJob <a name="aws-cdk-sdk.glue.GlueJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJob: glue.GlueJob = { ... }
```

##### `allocatedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.command"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobCommand`](#aws-cdk-sdk.glue.GlueJobCommand)

---

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.connections"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnectionsList`](#aws-cdk-sdk.glue.GlueConnectionsList)

---

##### `createdOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.createdOn"></a>

- *Type:* `string`

---

##### `defaultArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.defaultArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.description"></a>

- *Type:* `string`

---

##### `executionProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.executionProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueExecutionProperty`](#aws-cdk-sdk.glue.GlueExecutionProperty)

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.glueVersion"></a>

- *Type:* `string`

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.logUri"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.name"></a>

- *Type:* `string`

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.nonOverridableArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `notificationProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNotificationProperty`](#aws-cdk-sdk.glue.GlueNotificationProperty)

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.role"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.timeout"></a>

- *Type:* `number`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJob.property.workerType"></a>

- *Type:* `string`

---

### GlueJobBookmarkEntry <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJobBookmarkEntry: glue.GlueJobBookmarkEntry = { ... }
```

##### `attempt`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.attempt"></a>

- *Type:* `number`

---

##### `jobBookmark`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.jobBookmark"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.jobName"></a>

- *Type:* `string`

---

##### `previousRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.previousRunId"></a>

- *Type:* `string`

---

##### `run`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.run"></a>

- *Type:* `number`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.runId"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarkEntry.property.version"></a>

- *Type:* `number`

---

### GlueJobBookmarksEncryption <a name="aws-cdk-sdk.glue.GlueJobBookmarksEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJobBookmarksEncryption: glue.GlueJobBookmarksEncryption = { ... }
```

##### `jobBookmarksEncryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarksEncryption.property.jobBookmarksEncryptionMode"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobBookmarksEncryption.property.kmsKeyArn"></a>

- *Type:* `string`

---

### GlueJobCommand <a name="aws-cdk-sdk.glue.GlueJobCommand"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJobCommand: glue.GlueJobCommand = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobCommand.property.name"></a>

- *Type:* `string`

---

##### `pythonVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobCommand.property.pythonVersion"></a>

- *Type:* `string`

---

##### `scriptLocation`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobCommand.property.scriptLocation"></a>

- *Type:* `string`

---

### GlueJobNodeDetails <a name="aws-cdk-sdk.glue.GlueJobNodeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJobNodeDetails: glue.GlueJobNodeDetails = { ... }
```

##### `jobRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobNodeDetails.property.jobRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobRun`](#aws-cdk-sdk.glue.GlueJobRun)[]

---

### GlueJobRun <a name="aws-cdk-sdk.glue.GlueJobRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJobRun: glue.GlueJobRun = { ... }
```

##### `allocatedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `arguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `attempt`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.attempt"></a>

- *Type:* `number`

---

##### `completedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.errorMessage"></a>

- *Type:* `string`

---

##### `executionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.executionTime"></a>

- *Type:* `number`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.glueVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.id"></a>

- *Type:* `string`

---

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunState`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.jobRunState"></a>

- *Type:* `string`

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.logGroupName"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.maxCapacity"></a>

- *Type:* `number`

---

##### `notificationProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNotificationProperty`](#aws-cdk-sdk.glue.GlueNotificationProperty)

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `predecessorRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.predecessorRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePredecessor`](#aws-cdk-sdk.glue.GluePredecessor)[]

---

##### `previousRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.previousRunId"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.startedOn"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.timeout"></a>

- *Type:* `number`

---

##### `triggerName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.triggerName"></a>

- *Type:* `string`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobRun.property.workerType"></a>

- *Type:* `string`

---

### GlueJobUpdate <a name="aws-cdk-sdk.glue.GlueJobUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJobUpdate: glue.GlueJobUpdate = { ... }
```

##### `allocatedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `command`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.command"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobCommand`](#aws-cdk-sdk.glue.GlueJobCommand)

---

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.connections"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnectionsList`](#aws-cdk-sdk.glue.GlueConnectionsList)

---

##### `defaultArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.defaultArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.description"></a>

- *Type:* `string`

---

##### `executionProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.executionProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueExecutionProperty`](#aws-cdk-sdk.glue.GlueExecutionProperty)

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.glueVersion"></a>

- *Type:* `string`

---

##### `logUri`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.logUri"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.maxRetries"></a>

- *Type:* `number`

---

##### `nonOverridableArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.nonOverridableArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `notificationProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNotificationProperty`](#aws-cdk-sdk.glue.GlueNotificationProperty)

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.role"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.timeout"></a>

- *Type:* `number`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJobUpdate.property.workerType"></a>

- *Type:* `string`

---

### GlueJsonClassifier <a name="aws-cdk-sdk.glue.GlueJsonClassifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueJsonClassifier: glue.GlueJsonClassifier = { ... }
```

##### `jsonPath`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueJsonClassifier.property.jsonPath"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueJsonClassifier.property.name"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJsonClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJsonClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueJsonClassifier.property.version"></a>

- *Type:* `number`

---

### GlueKeySchemaElement <a name="aws-cdk-sdk.glue.GlueKeySchemaElement"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueKeySchemaElement: glue.GlueKeySchemaElement = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueKeySchemaElement.property.name"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueKeySchemaElement.property.type"></a>

- *Type:* `string`

---

### GlueLabelingSetGenerationTaskRunProperties <a name="aws-cdk-sdk.glue.GlueLabelingSetGenerationTaskRunProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueLabelingSetGenerationTaskRunProperties: glue.GlueLabelingSetGenerationTaskRunProperties = { ... }
```

##### `outputS3Path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLabelingSetGenerationTaskRunProperties.property.outputS3Path"></a>

- *Type:* `string`

---

### GlueLastCrawlInfo <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueLastCrawlInfo: glue.GlueLastCrawlInfo = { ... }
```

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo.property.errorMessage"></a>

- *Type:* `string`

---

##### `logGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo.property.logGroup"></a>

- *Type:* `string`

---

##### `logStream`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo.property.logStream"></a>

- *Type:* `string`

---

##### `messagePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo.property.messagePrefix"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLastCrawlInfo.property.status"></a>

- *Type:* `string`

---

### GlueLineageConfiguration <a name="aws-cdk-sdk.glue.GlueLineageConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueLineageConfiguration: glue.GlueLineageConfiguration = { ... }
```

##### `crawlerLineageSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLineageConfiguration.property.crawlerLineageSettings"></a>

- *Type:* `string`

---

### GlueListCrawlersRequest <a name="aws-cdk-sdk.glue.GlueListCrawlersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListCrawlersRequest: glue.GlueListCrawlersRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListCrawlersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListCrawlersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListCrawlersRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueListCrawlersResponse <a name="aws-cdk-sdk.glue.GlueListCrawlersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListCrawlersResponse: glue.GlueListCrawlersResponse = { ... }
```

##### `crawlerNames`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListCrawlersResponse.property.crawlerNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListCrawlersResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueListDevEndpointsRequest <a name="aws-cdk-sdk.glue.GlueListDevEndpointsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListDevEndpointsRequest: glue.GlueListDevEndpointsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListDevEndpointsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListDevEndpointsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListDevEndpointsRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueListDevEndpointsResponse <a name="aws-cdk-sdk.glue.GlueListDevEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListDevEndpointsResponse: glue.GlueListDevEndpointsResponse = { ... }
```

##### `devEndpointNames`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListDevEndpointsResponse.property.devEndpointNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListDevEndpointsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueListJobsRequest <a name="aws-cdk-sdk.glue.GlueListJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListJobsRequest: glue.GlueListJobsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListJobsRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueListJobsResponse <a name="aws-cdk-sdk.glue.GlueListJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListJobsResponse: glue.GlueListJobsResponse = { ... }
```

##### `jobNames`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListJobsResponse.property.jobNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueListMlTransformsRequest <a name="aws-cdk-sdk.glue.GlueListMlTransformsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListMlTransformsRequest: glue.GlueListMlTransformsRequest = { ... }
```

##### `filter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsRequest.property.filter"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformFilterCriteria`](#aws-cdk-sdk.glue.GlueTransformFilterCriteria)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsRequest.property.sort"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformSortCriteria`](#aws-cdk-sdk.glue.GlueTransformSortCriteria)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueListMlTransformsResponse <a name="aws-cdk-sdk.glue.GlueListMlTransformsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListMlTransformsResponse: glue.GlueListMlTransformsResponse = { ... }
```

##### `transformIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsResponse.property.transformIds"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListMlTransformsResponse.property.nextToken"></a>

- *Type:* `string`

---

### GlueListRegistriesInput <a name="aws-cdk-sdk.glue.GlueListRegistriesInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListRegistriesInput: glue.GlueListRegistriesInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListRegistriesInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListRegistriesInput.property.nextToken"></a>

- *Type:* `string`

---

### GlueListRegistriesResponse <a name="aws-cdk-sdk.glue.GlueListRegistriesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListRegistriesResponse: glue.GlueListRegistriesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListRegistriesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `registries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListRegistriesResponse.property.registries"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryListItem`](#aws-cdk-sdk.glue.GlueRegistryListItem)[]

---

### GlueListSchemasInput <a name="aws-cdk-sdk.glue.GlueListSchemasInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListSchemasInput: glue.GlueListSchemasInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemasInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemasInput.property.nextToken"></a>

- *Type:* `string`

---

##### `registryId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemasInput.property.registryId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryId`](#aws-cdk-sdk.glue.GlueRegistryId)

---

### GlueListSchemasResponse <a name="aws-cdk-sdk.glue.GlueListSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListSchemasResponse: glue.GlueListSchemasResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemasResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemasResponse.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaListItem`](#aws-cdk-sdk.glue.GlueSchemaListItem)[]

---

### GlueListSchemaVersionsInput <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListSchemaVersionsInput: glue.GlueListSchemaVersionsInput = { ... }
```

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsInput.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsInput.property.nextToken"></a>

- *Type:* `string`

---

### GlueListSchemaVersionsResponse <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListSchemaVersionsResponse: glue.GlueListSchemaVersionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListSchemaVersionsResponse.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionListItem`](#aws-cdk-sdk.glue.GlueSchemaVersionListItem)[]

---

### GlueListTriggersRequest <a name="aws-cdk-sdk.glue.GlueListTriggersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListTriggersRequest: glue.GlueListTriggersRequest = { ... }
```

##### `dependentJobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListTriggersRequest.property.dependentJobName"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListTriggersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListTriggersRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListTriggersRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueListTriggersResponse <a name="aws-cdk-sdk.glue.GlueListTriggersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListTriggersResponse: glue.GlueListTriggersResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListTriggersResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `triggerNames`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListTriggersResponse.property.triggerNames"></a>

- *Type:* `string`[]

---

### GlueListWorkflowsRequest <a name="aws-cdk-sdk.glue.GlueListWorkflowsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListWorkflowsRequest: glue.GlueListWorkflowsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListWorkflowsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListWorkflowsRequest.property.nextToken"></a>

- *Type:* `string`

---

### GlueListWorkflowsResponse <a name="aws-cdk-sdk.glue.GlueListWorkflowsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueListWorkflowsResponse: glue.GlueListWorkflowsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListWorkflowsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `workflows`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueListWorkflowsResponse.property.workflows"></a>

- *Type:* `string`[]

---

### GlueLocation <a name="aws-cdk-sdk.glue.GlueLocation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueLocation: glue.GlueLocation = { ... }
```

##### `dynamoDb`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLocation.property.dynamoDb"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNodeArg`](#aws-cdk-sdk.glue.GlueCodeGenNodeArg)[]

---

##### `jdbc`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLocation.property.jdbc"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNodeArg`](#aws-cdk-sdk.glue.GlueCodeGenNodeArg)[]

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLocation.property.s3"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNodeArg`](#aws-cdk-sdk.glue.GlueCodeGenNodeArg)[]

---

### GlueLongColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueLongColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueLongColumnStatisticsData: glue.GlueLongColumnStatisticsData = { ... }
```

##### `numberOfDistinctValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueLongColumnStatisticsData.property.numberOfDistinctValues"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueLongColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

##### `maximumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLongColumnStatisticsData.property.maximumValue"></a>

- *Type:* `number`

---

##### `minimumValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueLongColumnStatisticsData.property.minimumValue"></a>

- *Type:* `number`

---

### GlueMappingEntry <a name="aws-cdk-sdk.glue.GlueMappingEntry"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueMappingEntry: glue.GlueMappingEntry = { ... }
```

##### `sourcePath`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMappingEntry.property.sourcePath"></a>

- *Type:* `string`

---

##### `sourceTable`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMappingEntry.property.sourceTable"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMappingEntry.property.sourceType"></a>

- *Type:* `string`

---

##### `targetPath`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMappingEntry.property.targetPath"></a>

- *Type:* `string`

---

##### `targetTable`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMappingEntry.property.targetTable"></a>

- *Type:* `string`

---

##### `targetType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMappingEntry.property.targetType"></a>

- *Type:* `string`

---

### GlueMetadataInfo <a name="aws-cdk-sdk.glue.GlueMetadataInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueMetadataInfo: glue.GlueMetadataInfo = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMetadataInfo.property.createdTime"></a>

- *Type:* `string`

---

##### `metadataValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMetadataInfo.property.metadataValue"></a>

- *Type:* `string`

---

### GlueMetadataKeyValuePair <a name="aws-cdk-sdk.glue.GlueMetadataKeyValuePair"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueMetadataKeyValuePair: glue.GlueMetadataKeyValuePair = { ... }
```

##### `metadataKey`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMetadataKeyValuePair.property.metadataKey"></a>

- *Type:* `string`

---

##### `metadataValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMetadataKeyValuePair.property.metadataValue"></a>

- *Type:* `string`

---

### GlueMlTransform <a name="aws-cdk-sdk.glue.GlueMlTransform"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueMlTransform: glue.GlueMlTransform = { ... }
```

##### `createdOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.createdOn"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.description"></a>

- *Type:* `string`

---

##### `evaluationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEvaluationMetrics`](#aws-cdk-sdk.glue.GlueEvaluationMetrics)

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.glueVersion"></a>

- *Type:* `string`

---

##### `inputRecordTables`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.inputRecordTables"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGlueTable`](#aws-cdk-sdk.glue.GlueGlueTable)[]

---

##### `labelCount`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.labelCount"></a>

- *Type:* `number`

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.name"></a>

- *Type:* `string`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformParameters`](#aws-cdk-sdk.glue.GlueTransformParameters)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.role"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.schema"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaColumn`](#aws-cdk-sdk.glue.GlueSchemaColumn)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.status"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.timeout"></a>

- *Type:* `number`

---

##### `transformEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.transformEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformEncryption`](#aws-cdk-sdk.glue.GlueTransformEncryption)

---

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.transformId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlTransform.property.workerType"></a>

- *Type:* `string`

---

### GlueMlUserDataEncryption <a name="aws-cdk-sdk.glue.GlueMlUserDataEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueMlUserDataEncryption: glue.GlueMlUserDataEncryption = { ... }
```

##### `mlUserDataEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMlUserDataEncryption.property.kmsKeyId"></a>

- *Type:* `string`

---

### GlueMongoDbTarget <a name="aws-cdk-sdk.glue.GlueMongoDbTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueMongoDbTarget: glue.GlueMongoDbTarget = { ... }
```

##### `connectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMongoDbTarget.property.connectionName"></a>

- *Type:* `string`

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMongoDbTarget.property.path"></a>

- *Type:* `string`

---

##### `scanAll`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueMongoDbTarget.property.scanAll"></a>

- *Type:* `boolean`

---

### GlueNode <a name="aws-cdk-sdk.glue.GlueNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueNode: glue.GlueNode = { ... }
```

##### `crawlerDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNode.property.crawlerDetails"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawlerNodeDetails`](#aws-cdk-sdk.glue.GlueCrawlerNodeDetails)

---

##### `jobDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNode.property.jobDetails"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobNodeDetails`](#aws-cdk-sdk.glue.GlueJobNodeDetails)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNode.property.name"></a>

- *Type:* `string`

---

##### `triggerDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNode.property.triggerDetails"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTriggerNodeDetails`](#aws-cdk-sdk.glue.GlueTriggerNodeDetails)

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNode.property.type"></a>

- *Type:* `string`

---

##### `uniqueId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNode.property.uniqueId"></a>

- *Type:* `string`

---

### GlueNotificationProperty <a name="aws-cdk-sdk.glue.GlueNotificationProperty"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueNotificationProperty: glue.GlueNotificationProperty = { ... }
```

##### `notifyDelayAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueNotificationProperty.property.notifyDelayAfter"></a>

- *Type:* `number`

---

### GlueOrder <a name="aws-cdk-sdk.glue.GlueOrder"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueOrder: glue.GlueOrder = { ... }
```

##### `column`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueOrder.property.column"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueOrder.property.sortOrder"></a>

- *Type:* `number`

---

### GluePartition <a name="aws-cdk-sdk.glue.GluePartition"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePartition: glue.GluePartition = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.catalogId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.databaseName"></a>

- *Type:* `string`

---

##### `lastAccessTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStorageDescriptor`](#aws-cdk-sdk.glue.GlueStorageDescriptor)

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.tableName"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartition.property.values"></a>

- *Type:* `string`[]

---

### GluePartitionError <a name="aws-cdk-sdk.glue.GluePartitionError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePartitionError: glue.GluePartitionError = { ... }
```

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionError.property.errorDetail"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

##### `partitionValues`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionError.property.partitionValues"></a>

- *Type:* `string`[]

---

### GluePartitionIndex <a name="aws-cdk-sdk.glue.GluePartitionIndex"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePartitionIndex: glue.GluePartitionIndex = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePartitionIndex.property.indexName"></a>

- *Type:* `string`

---

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePartitionIndex.property.keys"></a>

- *Type:* `string`[]

---

### GluePartitionIndexDescriptor <a name="aws-cdk-sdk.glue.GluePartitionIndexDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePartitionIndexDescriptor: glue.GluePartitionIndexDescriptor = { ... }
```

##### `indexName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePartitionIndexDescriptor.property.indexName"></a>

- *Type:* `string`

---

##### `indexStatus`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePartitionIndexDescriptor.property.indexStatus"></a>

- *Type:* `string`

---

##### `keys`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePartitionIndexDescriptor.property.keys"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueKeySchemaElement`](#aws-cdk-sdk.glue.GlueKeySchemaElement)[]

---

##### `backfillErrors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionIndexDescriptor.property.backfillErrors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBackfillError`](#aws-cdk-sdk.glue.GlueBackfillError)[]

---

### GluePartitionInput <a name="aws-cdk-sdk.glue.GluePartitionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePartitionInput: glue.GluePartitionInput = { ... }
```

##### `lastAccessTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionInput.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionInput.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionInput.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStorageDescriptor`](#aws-cdk-sdk.glue.GlueStorageDescriptor)

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePartitionInput.property.values"></a>

- *Type:* `string`[]

---

### GluePartitionValueList <a name="aws-cdk-sdk.glue.GluePartitionValueList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePartitionValueList: glue.GluePartitionValueList = { ... }
```

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePartitionValueList.property.values"></a>

- *Type:* `string`[]

---

### GluePhysicalConnectionRequirements <a name="aws-cdk-sdk.glue.GluePhysicalConnectionRequirements"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePhysicalConnectionRequirements: glue.GluePhysicalConnectionRequirements = { ... }
```

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePhysicalConnectionRequirements.property.availabilityZone"></a>

- *Type:* `string`

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePhysicalConnectionRequirements.property.securityGroupIdList"></a>

- *Type:* `string`[]

---

##### `subnetId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePhysicalConnectionRequirements.property.subnetId"></a>

- *Type:* `string`

---

### GluePredecessor <a name="aws-cdk-sdk.glue.GluePredecessor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePredecessor: glue.GluePredecessor = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePredecessor.property.jobName"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePredecessor.property.runId"></a>

- *Type:* `string`

---

### GluePredicate <a name="aws-cdk-sdk.glue.GluePredicate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePredicate: glue.GluePredicate = { ... }
```

##### `conditions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePredicate.property.conditions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCondition`](#aws-cdk-sdk.glue.GlueCondition)[]

---

##### `logical`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePredicate.property.logical"></a>

- *Type:* `string`

---

### GluePrincipalPermissions <a name="aws-cdk-sdk.glue.GluePrincipalPermissions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePrincipalPermissions: glue.GluePrincipalPermissions = { ... }
```

##### `permissions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePrincipalPermissions.property.permissions"></a>

- *Type:* `string`[]

---

##### `principal`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePrincipalPermissions.property.principal"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDataLakePrincipal`](#aws-cdk-sdk.glue.GlueDataLakePrincipal)

---

### GluePropertyPredicate <a name="aws-cdk-sdk.glue.GluePropertyPredicate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePropertyPredicate: glue.GluePropertyPredicate = { ... }
```

##### `comparator`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePropertyPredicate.property.comparator"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePropertyPredicate.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePropertyPredicate.property.value"></a>

- *Type:* `string`

---

### GluePutDataCatalogEncryptionSettingsRequest <a name="aws-cdk-sdk.glue.GluePutDataCatalogEncryptionSettingsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutDataCatalogEncryptionSettingsRequest: glue.GluePutDataCatalogEncryptionSettingsRequest = { ... }
```

##### `dataCatalogEncryptionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePutDataCatalogEncryptionSettingsRequest.property.dataCatalogEncryptionSettings"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings`](#aws-cdk-sdk.glue.GlueDataCatalogEncryptionSettings)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutDataCatalogEncryptionSettingsRequest.property.catalogId"></a>

- *Type:* `string`

---

### GluePutDataCatalogEncryptionSettingsResponse <a name="aws-cdk-sdk.glue.GluePutDataCatalogEncryptionSettingsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutDataCatalogEncryptionSettingsResponse: glue.GluePutDataCatalogEncryptionSettingsResponse = { ... }
```

### GluePutResourcePolicyRequest <a name="aws-cdk-sdk.glue.GluePutResourcePolicyRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutResourcePolicyRequest: glue.GluePutResourcePolicyRequest = { ... }
```

##### `policyInJson`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePutResourcePolicyRequest.property.policyInJson"></a>

- *Type:* `string`

---

##### `enableHybrid`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutResourcePolicyRequest.property.enableHybrid"></a>

- *Type:* `string`

---

##### `policyExistsCondition`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutResourcePolicyRequest.property.policyExistsCondition"></a>

- *Type:* `string`

---

##### `policyHashCondition`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutResourcePolicyRequest.property.policyHashCondition"></a>

- *Type:* `string`

---

##### `resourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutResourcePolicyRequest.property.resourceArn"></a>

- *Type:* `string`

---

### GluePutResourcePolicyResponse <a name="aws-cdk-sdk.glue.GluePutResourcePolicyResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutResourcePolicyResponse: glue.GluePutResourcePolicyResponse = { ... }
```

##### `policyHash`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutResourcePolicyResponse.property.policyHash"></a>

- *Type:* `string`

---

### GluePutSchemaVersionMetadataInput <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutSchemaVersionMetadataInput: glue.GluePutSchemaVersionMetadataInput = { ... }
```

##### `metadataKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput.property.metadataKeyValue"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMetadataKeyValuePair`](#aws-cdk-sdk.glue.GlueMetadataKeyValuePair)

---

##### `schemaId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput.property.schemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

### GluePutSchemaVersionMetadataResponse <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutSchemaVersionMetadataResponse: glue.GluePutSchemaVersionMetadataResponse = { ... }
```

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.latestVersion"></a>

- *Type:* `boolean`

---

##### `metadataKey`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.metadataKey"></a>

- *Type:* `string`

---

##### `metadataValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.metadataValue"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GluePutSchemaVersionMetadataResponse.property.versionNumber"></a>

- *Type:* `number`

---

### GluePutWorkflowRunPropertiesRequest <a name="aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutWorkflowRunPropertiesRequest: glue.GluePutWorkflowRunPropertiesRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesRequest.property.name"></a>

- *Type:* `string`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesRequest.property.runId"></a>

- *Type:* `string`

---

##### `runProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesRequest.property.runProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

### GluePutWorkflowRunPropertiesResponse <a name="aws-cdk-sdk.glue.GluePutWorkflowRunPropertiesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const gluePutWorkflowRunPropertiesResponse: glue.GluePutWorkflowRunPropertiesResponse = { ... }
```

### GlueQuerySchemaVersionMetadataInput <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueQuerySchemaVersionMetadataInput: glue.GlueQuerySchemaVersionMetadataInput = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput.property.maxResults"></a>

- *Type:* `number`

---

##### `metadataList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput.property.metadataList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMetadataKeyValuePair`](#aws-cdk-sdk.glue.GlueMetadataKeyValuePair)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput.property.schemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

### GlueQuerySchemaVersionMetadataResponse <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueQuerySchemaVersionMetadataResponse: glue.GlueQuerySchemaVersionMetadataResponse = { ... }
```

##### `metadataInfoMap`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataResponse.property.metadataInfoMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.glue.GlueMetadataInfo`](#aws-cdk-sdk.glue.GlueMetadataInfo)}

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

### GlueRecrawlPolicy <a name="aws-cdk-sdk.glue.GlueRecrawlPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRecrawlPolicy: glue.GlueRecrawlPolicy = { ... }
```

##### `recrawlBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRecrawlPolicy.property.recrawlBehavior"></a>

- *Type:* `string`

---

### GlueRegisterSchemaVersionInput <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRegisterSchemaVersionInput: glue.GlueRegisterSchemaVersionInput = { ... }
```

##### `schemaDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput.property.schemaDefinition"></a>

- *Type:* `string`

---

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

### GlueRegisterSchemaVersionResponse <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRegisterSchemaVersionResponse: glue.GlueRegisterSchemaVersionResponse = { ... }
```

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionResponse.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegisterSchemaVersionResponse.property.versionNumber"></a>

- *Type:* `number`

---

### GlueRegistryId <a name="aws-cdk-sdk.glue.GlueRegistryId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRegistryId: glue.GlueRegistryId = { ... }
```

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryId.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryId.property.registryName"></a>

- *Type:* `string`

---

### GlueRegistryListItem <a name="aws-cdk-sdk.glue.GlueRegistryListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRegistryListItem: glue.GlueRegistryListItem = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryListItem.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryListItem.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryListItem.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryListItem.property.registryName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryListItem.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRegistryListItem.property.updatedTime"></a>

- *Type:* `string`

---

### GlueRemoveSchemaVersionMetadataInput <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRemoveSchemaVersionMetadataInput: glue.GlueRemoveSchemaVersionMetadataInput = { ... }
```

##### `metadataKeyValue`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput.property.metadataKeyValue"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMetadataKeyValuePair`](#aws-cdk-sdk.glue.GlueMetadataKeyValuePair)

---

##### `schemaId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput.property.schemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

### GlueRemoveSchemaVersionMetadataResponse <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueRemoveSchemaVersionMetadataResponse: glue.GlueRemoveSchemaVersionMetadataResponse = { ... }
```

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.latestVersion"></a>

- *Type:* `boolean`

---

##### `metadataKey`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.metadataKey"></a>

- *Type:* `string`

---

##### `metadataValue`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.metadataValue"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataResponse.property.versionNumber"></a>

- *Type:* `number`

---

### GlueResetJobBookmarkRequest <a name="aws-cdk-sdk.glue.GlueResetJobBookmarkRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueResetJobBookmarkRequest: glue.GlueResetJobBookmarkRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResetJobBookmarkRequest.property.jobName"></a>

- *Type:* `string`

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueResetJobBookmarkRequest.property.runId"></a>

- *Type:* `string`

---

### GlueResetJobBookmarkResponse <a name="aws-cdk-sdk.glue.GlueResetJobBookmarkResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueResetJobBookmarkResponse: glue.GlueResetJobBookmarkResponse = { ... }
```

##### `jobBookmarkEntry`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueResetJobBookmarkResponse.property.jobBookmarkEntry"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobBookmarkEntry`](#aws-cdk-sdk.glue.GlueJobBookmarkEntry)

---

### GlueResourceUri <a name="aws-cdk-sdk.glue.GlueResourceUri"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueResourceUri: glue.GlueResourceUri = { ... }
```

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueResourceUri.property.resourceType"></a>

- *Type:* `string`

---

##### `uri`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueResourceUri.property.uri"></a>

- *Type:* `string`

---

### GlueResumeWorkflowRunRequest <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueResumeWorkflowRunRequest: glue.GlueResumeWorkflowRunRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest.property.name"></a>

- *Type:* `string`

---

##### `nodeIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest.property.nodeIds"></a>

- *Type:* `string`[]

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest.property.runId"></a>

- *Type:* `string`

---

### GlueResumeWorkflowRunResponse <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueResumeWorkflowRunResponse: glue.GlueResumeWorkflowRunResponse = { ... }
```

##### `nodeIds`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunResponse.property.nodeIds"></a>

- *Type:* `string`[]

---

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueResumeWorkflowRunResponse.property.runId"></a>

- *Type:* `string`

---

### GlueS3Encryption <a name="aws-cdk-sdk.glue.GlueS3Encryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueS3Encryption: glue.GlueS3Encryption = { ... }
```

##### `kmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueS3Encryption.property.kmsKeyArn"></a>

- *Type:* `string`

---

##### `s3EncryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueS3Encryption.property.s3EncryptionMode"></a>

- *Type:* `string`

---

### GlueS3Target <a name="aws-cdk-sdk.glue.GlueS3Target"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueS3Target: glue.GlueS3Target = { ... }
```

##### `connectionName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueS3Target.property.connectionName"></a>

- *Type:* `string`

---

##### `exclusions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueS3Target.property.exclusions"></a>

- *Type:* `string`[]

---

##### `path`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueS3Target.property.path"></a>

- *Type:* `string`

---

### GlueSchedule <a name="aws-cdk-sdk.glue.GlueSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchedule: glue.GlueSchedule = { ... }
```

##### `scheduleExpression`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchedule.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchedule.property.state"></a>

- *Type:* `string`

---

### GlueSchemaChangePolicy <a name="aws-cdk-sdk.glue.GlueSchemaChangePolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaChangePolicy: glue.GlueSchemaChangePolicy = { ... }
```

##### `deleteBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaChangePolicy.property.deleteBehavior"></a>

- *Type:* `string`

---

##### `updateBehavior`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaChangePolicy.property.updateBehavior"></a>

- *Type:* `string`

---

### GlueSchemaColumn <a name="aws-cdk-sdk.glue.GlueSchemaColumn"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaColumn: glue.GlueSchemaColumn = { ... }
```

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaColumn.property.dataType"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaColumn.property.name"></a>

- *Type:* `string`

---

### GlueSchemaId <a name="aws-cdk-sdk.glue.GlueSchemaId"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaId: glue.GlueSchemaId = { ... }
```

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaId.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaId.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaId.property.schemaName"></a>

- *Type:* `string`

---

### GlueSchemaListItem <a name="aws-cdk-sdk.glue.GlueSchemaListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaListItem: glue.GlueSchemaListItem = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.description"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.schemaStatus"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaListItem.property.updatedTime"></a>

- *Type:* `string`

---

### GlueSchemaReference <a name="aws-cdk-sdk.glue.GlueSchemaReference"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaReference: glue.GlueSchemaReference = { ... }
```

##### `schemaId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaReference.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaReference.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaReference.property.schemaVersionNumber"></a>

- *Type:* `number`

---

### GlueSchemaVersionErrorItem <a name="aws-cdk-sdk.glue.GlueSchemaVersionErrorItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaVersionErrorItem: glue.GlueSchemaVersionErrorItem = { ... }
```

##### `errorDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionErrorItem.property.errorDetails"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetails`](#aws-cdk-sdk.glue.GlueErrorDetails)

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionErrorItem.property.versionNumber"></a>

- *Type:* `number`

---

### GlueSchemaVersionListItem <a name="aws-cdk-sdk.glue.GlueSchemaVersionListItem"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaVersionListItem: glue.GlueSchemaVersionListItem = { ... }
```

##### `createdTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionListItem.property.createdTime"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionListItem.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionListItem.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionListItem.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionListItem.property.versionNumber"></a>

- *Type:* `number`

---

### GlueSchemaVersionNumber <a name="aws-cdk-sdk.glue.GlueSchemaVersionNumber"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSchemaVersionNumber: glue.GlueSchemaVersionNumber = { ... }
```

##### `latestVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionNumber.property.latestVersion"></a>

- *Type:* `boolean`

---

##### `versionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSchemaVersionNumber.property.versionNumber"></a>

- *Type:* `number`

---

### GlueSearchTablesRequest <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSearchTablesRequest: glue.GlueSearchTablesRequest = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePropertyPredicate`](#aws-cdk-sdk.glue.GluePropertyPredicate)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.nextToken"></a>

- *Type:* `string`

---

##### `resourceShareType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.resourceShareType"></a>

- *Type:* `string`

---

##### `searchText`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.searchText"></a>

- *Type:* `string`

---

##### `sortCriteria`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesRequest.property.sortCriteria"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSortCriterion`](#aws-cdk-sdk.glue.GlueSortCriterion)[]

---

### GlueSearchTablesResponse <a name="aws-cdk-sdk.glue.GlueSearchTablesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSearchTablesResponse: glue.GlueSearchTablesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `tableList`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSearchTablesResponse.property.tableList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTable`](#aws-cdk-sdk.glue.GlueTable)[]

---

### GlueSecurityConfiguration <a name="aws-cdk-sdk.glue.GlueSecurityConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSecurityConfiguration: glue.GlueSecurityConfiguration = { ... }
```

##### `createdTimeStamp`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSecurityConfiguration.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSecurityConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEncryptionConfiguration`](#aws-cdk-sdk.glue.GlueEncryptionConfiguration)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSecurityConfiguration.property.name"></a>

- *Type:* `string`

---

### GlueSegment <a name="aws-cdk-sdk.glue.GlueSegment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSegment: glue.GlueSegment = { ... }
```

##### `segmentNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueSegment.property.segmentNumber"></a>

- *Type:* `number`

---

##### `totalSegments`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueSegment.property.totalSegments"></a>

- *Type:* `number`

---

### GlueSerDeInfo <a name="aws-cdk-sdk.glue.GlueSerDeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSerDeInfo: glue.GlueSerDeInfo = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSerDeInfo.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSerDeInfo.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serializationLibrary`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSerDeInfo.property.serializationLibrary"></a>

- *Type:* `string`

---

### GlueSkewedInfo <a name="aws-cdk-sdk.glue.GlueSkewedInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSkewedInfo: glue.GlueSkewedInfo = { ... }
```

##### `skewedColumnNames`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSkewedInfo.property.skewedColumnNames"></a>

- *Type:* `string`[]

---

##### `skewedColumnValueLocationMaps`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSkewedInfo.property.skewedColumnValueLocationMaps"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `skewedColumnValues`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSkewedInfo.property.skewedColumnValues"></a>

- *Type:* `string`[]

---

### GlueSortCriterion <a name="aws-cdk-sdk.glue.GlueSortCriterion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueSortCriterion: glue.GlueSortCriterion = { ... }
```

##### `fieldName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSortCriterion.property.fieldName"></a>

- *Type:* `string`

---

##### `sort`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueSortCriterion.property.sort"></a>

- *Type:* `string`

---

### GlueStartCrawlerRequest <a name="aws-cdk-sdk.glue.GlueStartCrawlerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartCrawlerRequest: glue.GlueStartCrawlerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartCrawlerRequest.property.name"></a>

- *Type:* `string`

---

### GlueStartCrawlerResponse <a name="aws-cdk-sdk.glue.GlueStartCrawlerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartCrawlerResponse: glue.GlueStartCrawlerResponse = { ... }
```

### GlueStartCrawlerScheduleRequest <a name="aws-cdk-sdk.glue.GlueStartCrawlerScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartCrawlerScheduleRequest: glue.GlueStartCrawlerScheduleRequest = { ... }
```

##### `crawlerName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartCrawlerScheduleRequest.property.crawlerName"></a>

- *Type:* `string`

---

### GlueStartCrawlerScheduleResponse <a name="aws-cdk-sdk.glue.GlueStartCrawlerScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartCrawlerScheduleResponse: glue.GlueStartCrawlerScheduleResponse = { ... }
```

### GlueStartExportLabelsTaskRunRequest <a name="aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartExportLabelsTaskRunRequest: glue.GlueStartExportLabelsTaskRunRequest = { ... }
```

##### `outputS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest.property.outputS3Path"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueStartExportLabelsTaskRunResponse <a name="aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartExportLabelsTaskRunResponse: glue.GlueStartExportLabelsTaskRunResponse = { ... }
```

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunResponse.property.taskRunId"></a>

- *Type:* `string`

---

### GlueStartImportLabelsTaskRunRequest <a name="aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartImportLabelsTaskRunRequest: glue.GlueStartImportLabelsTaskRunRequest = { ... }
```

##### `inputS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest.property.inputS3Path"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest.property.transformId"></a>

- *Type:* `string`

---

##### `replaceAllLabels`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest.property.replaceAllLabels"></a>

- *Type:* `boolean`

---

### GlueStartImportLabelsTaskRunResponse <a name="aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartImportLabelsTaskRunResponse: glue.GlueStartImportLabelsTaskRunResponse = { ... }
```

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunResponse.property.taskRunId"></a>

- *Type:* `string`

---

### GlueStartJobRunRequest <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartJobRunRequest: glue.GlueStartJobRunRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.jobName"></a>

- *Type:* `string`

---

##### `allocatedCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `arguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `jobRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.jobRunId"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `notificationProperty`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNotificationProperty`](#aws-cdk-sdk.glue.GlueNotificationProperty)

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `securityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.timeout"></a>

- *Type:* `number`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunRequest.property.workerType"></a>

- *Type:* `string`

---

### GlueStartJobRunResponse <a name="aws-cdk-sdk.glue.GlueStartJobRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartJobRunResponse: glue.GlueStartJobRunResponse = { ... }
```

##### `jobRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartJobRunResponse.property.jobRunId"></a>

- *Type:* `string`

---

### GlueStartMlEvaluationTaskRunRequest <a name="aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartMlEvaluationTaskRunRequest: glue.GlueStartMlEvaluationTaskRunRequest = { ... }
```

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueStartMlEvaluationTaskRunResponse <a name="aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartMlEvaluationTaskRunResponse: glue.GlueStartMlEvaluationTaskRunResponse = { ... }
```

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunResponse.property.taskRunId"></a>

- *Type:* `string`

---

### GlueStartMlLabelingSetGenerationTaskRunRequest <a name="aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartMlLabelingSetGenerationTaskRunRequest: glue.GlueStartMlLabelingSetGenerationTaskRunRequest = { ... }
```

##### `outputS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest.property.outputS3Path"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest.property.transformId"></a>

- *Type:* `string`

---

### GlueStartMlLabelingSetGenerationTaskRunResponse <a name="aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartMlLabelingSetGenerationTaskRunResponse: glue.GlueStartMlLabelingSetGenerationTaskRunResponse = { ... }
```

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunResponse.property.taskRunId"></a>

- *Type:* `string`

---

### GlueStartTriggerRequest <a name="aws-cdk-sdk.glue.GlueStartTriggerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartTriggerRequest: glue.GlueStartTriggerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartTriggerRequest.property.name"></a>

- *Type:* `string`

---

### GlueStartTriggerResponse <a name="aws-cdk-sdk.glue.GlueStartTriggerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartTriggerResponse: glue.GlueStartTriggerResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartTriggerResponse.property.name"></a>

- *Type:* `string`

---

### GlueStartWorkflowRunRequest <a name="aws-cdk-sdk.glue.GlueStartWorkflowRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartWorkflowRunRequest: glue.GlueStartWorkflowRunRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStartWorkflowRunRequest.property.name"></a>

- *Type:* `string`

---

### GlueStartWorkflowRunResponse <a name="aws-cdk-sdk.glue.GlueStartWorkflowRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStartWorkflowRunResponse: glue.GlueStartWorkflowRunResponse = { ... }
```

##### `runId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStartWorkflowRunResponse.property.runId"></a>

- *Type:* `string`

---

### GlueStopCrawlerRequest <a name="aws-cdk-sdk.glue.GlueStopCrawlerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopCrawlerRequest: glue.GlueStopCrawlerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStopCrawlerRequest.property.name"></a>

- *Type:* `string`

---

### GlueStopCrawlerResponse <a name="aws-cdk-sdk.glue.GlueStopCrawlerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopCrawlerResponse: glue.GlueStopCrawlerResponse = { ... }
```

### GlueStopCrawlerScheduleRequest <a name="aws-cdk-sdk.glue.GlueStopCrawlerScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopCrawlerScheduleRequest: glue.GlueStopCrawlerScheduleRequest = { ... }
```

##### `crawlerName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStopCrawlerScheduleRequest.property.crawlerName"></a>

- *Type:* `string`

---

### GlueStopCrawlerScheduleResponse <a name="aws-cdk-sdk.glue.GlueStopCrawlerScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopCrawlerScheduleResponse: glue.GlueStopCrawlerScheduleResponse = { ... }
```

### GlueStopTriggerRequest <a name="aws-cdk-sdk.glue.GlueStopTriggerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopTriggerRequest: glue.GlueStopTriggerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStopTriggerRequest.property.name"></a>

- *Type:* `string`

---

### GlueStopTriggerResponse <a name="aws-cdk-sdk.glue.GlueStopTriggerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopTriggerResponse: glue.GlueStopTriggerResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStopTriggerResponse.property.name"></a>

- *Type:* `string`

---

### GlueStopWorkflowRunRequest <a name="aws-cdk-sdk.glue.GlueStopWorkflowRunRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopWorkflowRunRequest: glue.GlueStopWorkflowRunRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStopWorkflowRunRequest.property.name"></a>

- *Type:* `string`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStopWorkflowRunRequest.property.runId"></a>

- *Type:* `string`

---

### GlueStopWorkflowRunResponse <a name="aws-cdk-sdk.glue.GlueStopWorkflowRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStopWorkflowRunResponse: glue.GlueStopWorkflowRunResponse = { ... }
```

### GlueStorageDescriptor <a name="aws-cdk-sdk.glue.GlueStorageDescriptor"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStorageDescriptor: glue.GlueStorageDescriptor = { ... }
```

##### `bucketColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.bucketColumns"></a>

- *Type:* `string`[]

---

##### `columns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.columns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `compressed`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.compressed"></a>

- *Type:* `boolean`

---

##### `inputFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.inputFormat"></a>

- *Type:* `string`

---

##### `location`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.location"></a>

- *Type:* `string`

---

##### `numberOfBuckets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.numberOfBuckets"></a>

- *Type:* `number`

---

##### `outputFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.outputFormat"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `schemaReference`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.schemaReference"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaReference`](#aws-cdk-sdk.glue.GlueSchemaReference)

---

##### `serdeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.serdeInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSerDeInfo`](#aws-cdk-sdk.glue.GlueSerDeInfo)

---

##### `skewedInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.skewedInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSkewedInfo`](#aws-cdk-sdk.glue.GlueSkewedInfo)

---

##### `sortColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.sortColumns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueOrder`](#aws-cdk-sdk.glue.GlueOrder)[]

---

##### `storedAsSubDirectories`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueStorageDescriptor.property.storedAsSubDirectories"></a>

- *Type:* `boolean`

---

### GlueStringColumnStatisticsData <a name="aws-cdk-sdk.glue.GlueStringColumnStatisticsData"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueStringColumnStatisticsData: glue.GlueStringColumnStatisticsData = { ... }
```

##### `averageLength`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStringColumnStatisticsData.property.averageLength"></a>

- *Type:* `number`

---

##### `maximumLength`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStringColumnStatisticsData.property.maximumLength"></a>

- *Type:* `number`

---

##### `numberOfDistinctValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStringColumnStatisticsData.property.numberOfDistinctValues"></a>

- *Type:* `number`

---

##### `numberOfNulls`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueStringColumnStatisticsData.property.numberOfNulls"></a>

- *Type:* `number`

---

### GlueTable <a name="aws-cdk-sdk.glue.GlueTable"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTable: glue.GlueTable = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.catalogId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.createdBy"></a>

- *Type:* `string`

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.createTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.description"></a>

- *Type:* `string`

---

##### `isRegisteredWithLakeFormation`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.isRegisteredWithLakeFormation"></a>

- *Type:* `boolean`

---

##### `lastAccessTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitionKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `retention`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.retention"></a>

- *Type:* `number`

---

##### `storageDescriptor`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStorageDescriptor`](#aws-cdk-sdk.glue.GlueStorageDescriptor)

---

##### `tableType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.tableType"></a>

- *Type:* `string`

---

##### `targetTable`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.targetTable"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableIdentifier`](#aws-cdk-sdk.glue.GlueTableIdentifier)

---

##### `updateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.updateTime"></a>

- *Type:* `string`

---

##### `viewExpandedText`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.viewExpandedText"></a>

- *Type:* `string`

---

##### `viewOriginalText`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTable.property.viewOriginalText"></a>

- *Type:* `string`

---

### GlueTableError <a name="aws-cdk-sdk.glue.GlueTableError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTableError: glue.GlueTableError = { ... }
```

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableError.property.errorDetail"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableError.property.tableName"></a>

- *Type:* `string`

---

### GlueTableIdentifier <a name="aws-cdk-sdk.glue.GlueTableIdentifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTableIdentifier: glue.GlueTableIdentifier = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableIdentifier.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableIdentifier.property.databaseName"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableIdentifier.property.name"></a>

- *Type:* `string`

---

### GlueTableInput <a name="aws-cdk-sdk.glue.GlueTableInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTableInput: glue.GlueTableInput = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.name"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.description"></a>

- *Type:* `string`

---

##### `lastAccessTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitionKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `retention`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.retention"></a>

- *Type:* `number`

---

##### `storageDescriptor`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStorageDescriptor`](#aws-cdk-sdk.glue.GlueStorageDescriptor)

---

##### `tableType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.tableType"></a>

- *Type:* `string`

---

##### `targetTable`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.targetTable"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableIdentifier`](#aws-cdk-sdk.glue.GlueTableIdentifier)

---

##### `viewExpandedText`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.viewExpandedText"></a>

- *Type:* `string`

---

##### `viewOriginalText`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableInput.property.viewOriginalText"></a>

- *Type:* `string`

---

### GlueTableVersion <a name="aws-cdk-sdk.glue.GlueTableVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTableVersion: glue.GlueTableVersion = { ... }
```

##### `table`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableVersion.property.table"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTable`](#aws-cdk-sdk.glue.GlueTable)

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableVersion.property.versionId"></a>

- *Type:* `string`

---

### GlueTableVersionError <a name="aws-cdk-sdk.glue.GlueTableVersionError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTableVersionError: glue.GlueTableVersionError = { ... }
```

##### `errorDetail`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableVersionError.property.errorDetail"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableVersionError.property.tableName"></a>

- *Type:* `string`

---

##### `versionId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTableVersionError.property.versionId"></a>

- *Type:* `string`

---

### GlueTagResourceRequest <a name="aws-cdk-sdk.glue.GlueTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTagResourceRequest: glue.GlueTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagsToAdd`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTagResourceRequest.property.tagsToAdd"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueTagResourceResponse <a name="aws-cdk-sdk.glue.GlueTagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTagResourceResponse: glue.GlueTagResourceResponse = { ... }
```

### GlueTaskRun <a name="aws-cdk-sdk.glue.GlueTaskRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTaskRun: glue.GlueTaskRun = { ... }
```

##### `completedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorString`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.errorString"></a>

- *Type:* `string`

---

##### `executionTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.executionTime"></a>

- *Type:* `number`

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.logGroupName"></a>

- *Type:* `string`

---

##### `properties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.properties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTaskRunProperties`](#aws-cdk-sdk.glue.GlueTaskRunProperties)

---

##### `startedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.startedOn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.status"></a>

- *Type:* `string`

---

##### `taskRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRun.property.transformId"></a>

- *Type:* `string`

---

### GlueTaskRunFilterCriteria <a name="aws-cdk-sdk.glue.GlueTaskRunFilterCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTaskRunFilterCriteria: glue.GlueTaskRunFilterCriteria = { ... }
```

##### `startedAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunFilterCriteria.property.startedAfter"></a>

- *Type:* `string`

---

##### `startedBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunFilterCriteria.property.startedBefore"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunFilterCriteria.property.status"></a>

- *Type:* `string`

---

##### `taskRunType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunFilterCriteria.property.taskRunType"></a>

- *Type:* `string`

---

### GlueTaskRunProperties <a name="aws-cdk-sdk.glue.GlueTaskRunProperties"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTaskRunProperties: glue.GlueTaskRunProperties = { ... }
```

##### `exportLabelsTaskRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunProperties.property.exportLabelsTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueExportLabelsTaskRunProperties`](#aws-cdk-sdk.glue.GlueExportLabelsTaskRunProperties)

---

##### `findMatchesTaskRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunProperties.property.findMatchesTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueFindMatchesTaskRunProperties`](#aws-cdk-sdk.glue.GlueFindMatchesTaskRunProperties)

---

##### `importLabelsTaskRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunProperties.property.importLabelsTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueImportLabelsTaskRunProperties`](#aws-cdk-sdk.glue.GlueImportLabelsTaskRunProperties)

---

##### `labelingSetGenerationTaskRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunProperties.property.labelingSetGenerationTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLabelingSetGenerationTaskRunProperties`](#aws-cdk-sdk.glue.GlueLabelingSetGenerationTaskRunProperties)

---

##### `taskType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunProperties.property.taskType"></a>

- *Type:* `string`

---

### GlueTaskRunSortCriteria <a name="aws-cdk-sdk.glue.GlueTaskRunSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTaskRunSortCriteria: glue.GlueTaskRunSortCriteria = { ... }
```

##### `column`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunSortCriteria.property.column"></a>

- *Type:* `string`

---

##### `sortDirection`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTaskRunSortCriteria.property.sortDirection"></a>

- *Type:* `string`

---

### GlueTransformEncryption <a name="aws-cdk-sdk.glue.GlueTransformEncryption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTransformEncryption: glue.GlueTransformEncryption = { ... }
```

##### `mlUserDataEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformEncryption.property.mlUserDataEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMlUserDataEncryption`](#aws-cdk-sdk.glue.GlueMlUserDataEncryption)

---

##### `taskRunSecurityConfigurationName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformEncryption.property.taskRunSecurityConfigurationName"></a>

- *Type:* `string`

---

### GlueTransformFilterCriteria <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTransformFilterCriteria: glue.GlueTransformFilterCriteria = { ... }
```

##### `createdAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.createdAfter"></a>

- *Type:* `string`

---

##### `createdBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.createdBefore"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.glueVersion"></a>

- *Type:* `string`

---

##### `lastModifiedAfter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.lastModifiedAfter"></a>

- *Type:* `string`

---

##### `lastModifiedBefore`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.lastModifiedBefore"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.name"></a>

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.schema"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaColumn`](#aws-cdk-sdk.glue.GlueSchemaColumn)[]

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.status"></a>

- *Type:* `string`

---

##### `transformType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformFilterCriteria.property.transformType"></a>

- *Type:* `string`

---

### GlueTransformParameters <a name="aws-cdk-sdk.glue.GlueTransformParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTransformParameters: glue.GlueTransformParameters = { ... }
```

##### `transformType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTransformParameters.property.transformType"></a>

- *Type:* `string`

---

##### `findMatchesParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTransformParameters.property.findMatchesParameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueFindMatchesParameters`](#aws-cdk-sdk.glue.GlueFindMatchesParameters)

---

### GlueTransformSortCriteria <a name="aws-cdk-sdk.glue.GlueTransformSortCriteria"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTransformSortCriteria: glue.GlueTransformSortCriteria = { ... }
```

##### `column`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTransformSortCriteria.property.column"></a>

- *Type:* `string`

---

##### `sortDirection`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueTransformSortCriteria.property.sortDirection"></a>

- *Type:* `string`

---

### GlueTrigger <a name="aws-cdk-sdk.glue.GlueTrigger"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTrigger: glue.GlueTrigger = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.actions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueAction`](#aws-cdk-sdk.glue.GlueAction)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.name"></a>

- *Type:* `string`

---

##### `predicate`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePredicate`](#aws-cdk-sdk.glue.GluePredicate)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.schedule"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.type"></a>

- *Type:* `string`

---

##### `workflowName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTrigger.property.workflowName"></a>

- *Type:* `string`

---

### GlueTriggerNodeDetails <a name="aws-cdk-sdk.glue.GlueTriggerNodeDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTriggerNodeDetails: glue.GlueTriggerNodeDetails = { ... }
```

##### `trigger`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTriggerNodeDetails.property.trigger"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)

---

### GlueTriggerUpdate <a name="aws-cdk-sdk.glue.GlueTriggerUpdate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueTriggerUpdate: glue.GlueTriggerUpdate = { ... }
```

##### `actions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTriggerUpdate.property.actions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueAction`](#aws-cdk-sdk.glue.GlueAction)[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTriggerUpdate.property.description"></a>

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTriggerUpdate.property.name"></a>

- *Type:* `string`

---

##### `predicate`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTriggerUpdate.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePredicate`](#aws-cdk-sdk.glue.GluePredicate)

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueTriggerUpdate.property.schedule"></a>

- *Type:* `string`

---

### GlueUntagResourceRequest <a name="aws-cdk-sdk.glue.GlueUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUntagResourceRequest: glue.GlueUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagsToRemove`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUntagResourceRequest.property.tagsToRemove"></a>

- *Type:* `string`[]

---

### GlueUntagResourceResponse <a name="aws-cdk-sdk.glue.GlueUntagResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUntagResourceResponse: glue.GlueUntagResourceResponse = { ... }
```

### GlueUpdateClassifierRequest <a name="aws-cdk-sdk.glue.GlueUpdateClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateClassifierRequest: glue.GlueUpdateClassifierRequest = { ... }
```

##### `csvClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateClassifierRequest.property.csvClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest`](#aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest)

---

##### `grokClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateClassifierRequest.property.grokClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest`](#aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest)

---

##### `jsonClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateClassifierRequest.property.jsonClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateJsonClassifierRequest`](#aws-cdk-sdk.glue.GlueUpdateJsonClassifierRequest)

---

##### `xmlClassifier`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateClassifierRequest.property.xmlClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateXmlClassifierRequest`](#aws-cdk-sdk.glue.GlueUpdateXmlClassifierRequest)

---

### GlueUpdateClassifierResponse <a name="aws-cdk-sdk.glue.GlueUpdateClassifierResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateClassifierResponse: glue.GlueUpdateClassifierResponse = { ... }
```

### GlueUpdateColumnStatisticsForPartitionRequest <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateColumnStatisticsForPartitionRequest: glue.GlueUpdateColumnStatisticsForPartitionRequest = { ... }
```

##### `columnStatisticsList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest.property.columnStatisticsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)[]

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest.property.partitionValues"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueUpdateColumnStatisticsForPartitionResponse <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateColumnStatisticsForPartitionResponse: glue.GlueUpdateColumnStatisticsForPartitionResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatisticsError`](#aws-cdk-sdk.glue.GlueColumnStatisticsError)[]

---

### GlueUpdateColumnStatisticsForTableRequest <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateColumnStatisticsForTableRequest: glue.GlueUpdateColumnStatisticsForTableRequest = { ... }
```

##### `columnStatisticsList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest.property.columnStatisticsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)[]

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueUpdateColumnStatisticsForTableResponse <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateColumnStatisticsForTableResponse: glue.GlueUpdateColumnStatisticsForTableResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatisticsError`](#aws-cdk-sdk.glue.GlueColumnStatisticsError)[]

---

### GlueUpdateConnectionRequest <a name="aws-cdk-sdk.glue.GlueUpdateConnectionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateConnectionRequest: glue.GlueUpdateConnectionRequest = { ... }
```

##### `connectionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateConnectionRequest.property.connectionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnectionInput`](#aws-cdk-sdk.glue.GlueConnectionInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateConnectionRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateConnectionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueUpdateConnectionResponse <a name="aws-cdk-sdk.glue.GlueUpdateConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateConnectionResponse: glue.GlueUpdateConnectionResponse = { ... }
```

### GlueUpdateCrawlerRequest <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateCrawlerRequest: glue.GlueUpdateCrawlerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.name"></a>

- *Type:* `string`

---

##### `classifiers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.classifiers"></a>

- *Type:* `string`[]

---

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.configuration"></a>

- *Type:* `string`

---

##### `crawlerSecurityConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.crawlerSecurityConfiguration"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.description"></a>

- *Type:* `string`

---

##### `lineageConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.lineageConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueLineageConfiguration`](#aws-cdk-sdk.glue.GlueLineageConfiguration)

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.recrawlPolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRecrawlPolicy`](#aws-cdk-sdk.glue.GlueRecrawlPolicy)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.role"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.schedule"></a>

- *Type:* `string`

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.schemaChangePolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaChangePolicy`](#aws-cdk-sdk.glue.GlueSchemaChangePolicy)

---

##### `tablePrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.tablePrefix"></a>

- *Type:* `string`

---

##### `targets`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerRequest.property.targets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawlerTargets`](#aws-cdk-sdk.glue.GlueCrawlerTargets)

---

### GlueUpdateCrawlerResponse <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateCrawlerResponse: glue.GlueUpdateCrawlerResponse = { ... }
```

### GlueUpdateCrawlerScheduleRequest <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerScheduleRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateCrawlerScheduleRequest: glue.GlueUpdateCrawlerScheduleRequest = { ... }
```

##### `crawlerName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerScheduleRequest.property.crawlerName"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerScheduleRequest.property.schedule"></a>

- *Type:* `string`

---

### GlueUpdateCrawlerScheduleResponse <a name="aws-cdk-sdk.glue.GlueUpdateCrawlerScheduleResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateCrawlerScheduleResponse: glue.GlueUpdateCrawlerScheduleResponse = { ... }
```

### GlueUpdateCsvClassifierRequest <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateCsvClassifierRequest: glue.GlueUpdateCsvClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `allowSingleColumn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.allowSingleColumn"></a>

- *Type:* `boolean`

---

##### `containsHeader`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.containsHeader"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.delimiter"></a>

- *Type:* `string`

---

##### `disableValueTrimming`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.disableValueTrimming"></a>

- *Type:* `boolean`

---

##### `header`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.header"></a>

- *Type:* `string`[]

---

##### `quoteSymbol`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateCsvClassifierRequest.property.quoteSymbol"></a>

- *Type:* `string`

---

### GlueUpdateDatabaseRequest <a name="aws-cdk-sdk.glue.GlueUpdateDatabaseRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateDatabaseRequest: glue.GlueUpdateDatabaseRequest = { ... }
```

##### `databaseInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDatabaseRequest.property.databaseInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabaseInput`](#aws-cdk-sdk.glue.GlueDatabaseInput)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDatabaseRequest.property.name"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDatabaseRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueUpdateDatabaseResponse <a name="aws-cdk-sdk.glue.GlueUpdateDatabaseResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateDatabaseResponse: glue.GlueUpdateDatabaseResponse = { ... }
```

### GlueUpdateDevEndpointRequest <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateDevEndpointRequest: glue.GlueUpdateDevEndpointRequest = { ... }
```

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.endpointName"></a>

- *Type:* `string`

---

##### `addArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.addArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `addPublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.addPublicKeys"></a>

- *Type:* `string`[]

---

##### `customLibraries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.customLibraries"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDevEndpointCustomLibraries`](#aws-cdk-sdk.glue.GlueDevEndpointCustomLibraries)

---

##### `deleteArguments`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.deleteArguments"></a>

- *Type:* `string`[]

---

##### `deletePublicKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.deletePublicKeys"></a>

- *Type:* `string`[]

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.publicKey"></a>

- *Type:* `string`

---

##### `updateEtlLibraries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointRequest.property.updateEtlLibraries"></a>

- *Type:* `boolean`

---

### GlueUpdateDevEndpointResponse <a name="aws-cdk-sdk.glue.GlueUpdateDevEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateDevEndpointResponse: glue.GlueUpdateDevEndpointResponse = { ... }
```

### GlueUpdateGrokClassifierRequest <a name="aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateGrokClassifierRequest: glue.GlueUpdateGrokClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `classification`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest.property.classification"></a>

- *Type:* `string`

---

##### `customPatterns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest.property.customPatterns"></a>

- *Type:* `string`

---

##### `grokPattern`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateGrokClassifierRequest.property.grokPattern"></a>

- *Type:* `string`

---

### GlueUpdateJobRequest <a name="aws-cdk-sdk.glue.GlueUpdateJobRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateJobRequest: glue.GlueUpdateJobRequest = { ... }
```

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateJobRequest.property.jobName"></a>

- *Type:* `string`

---

##### `jobUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateJobRequest.property.jobUpdate"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobUpdate`](#aws-cdk-sdk.glue.GlueJobUpdate)

---

### GlueUpdateJobResponse <a name="aws-cdk-sdk.glue.GlueUpdateJobResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateJobResponse: glue.GlueUpdateJobResponse = { ... }
```

##### `jobName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateJobResponse.property.jobName"></a>

- *Type:* `string`

---

### GlueUpdateJsonClassifierRequest <a name="aws-cdk-sdk.glue.GlueUpdateJsonClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateJsonClassifierRequest: glue.GlueUpdateJsonClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateJsonClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `jsonPath`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateJsonClassifierRequest.property.jsonPath"></a>

- *Type:* `string`

---

### GlueUpdateMlTransformRequest <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateMlTransformRequest: glue.GlueUpdateMlTransformRequest = { ... }
```

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.transformId"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.description"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.glueVersion"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.name"></a>

- *Type:* `string`

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTransformParameters`](#aws-cdk-sdk.glue.GlueTransformParameters)

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.role"></a>

- *Type:* `string`

---

##### `timeout`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.timeout"></a>

- *Type:* `number`

---

##### `workerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformRequest.property.workerType"></a>

- *Type:* `string`

---

### GlueUpdateMlTransformResponse <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateMlTransformResponse: glue.GlueUpdateMlTransformResponse = { ... }
```

##### `transformId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateMlTransformResponse.property.transformId"></a>

- *Type:* `string`

---

### GlueUpdatePartitionRequest <a name="aws-cdk-sdk.glue.GlueUpdatePartitionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdatePartitionRequest: glue.GlueUpdatePartitionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdatePartitionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `partitionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdatePartitionRequest.property.partitionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionInput`](#aws-cdk-sdk.glue.GluePartitionInput)

---

##### `partitionValueList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdatePartitionRequest.property.partitionValueList"></a>

- *Type:* `string`[]

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdatePartitionRequest.property.tableName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdatePartitionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueUpdatePartitionResponse <a name="aws-cdk-sdk.glue.GlueUpdatePartitionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdatePartitionResponse: glue.GlueUpdatePartitionResponse = { ... }
```

### GlueUpdateRegistryInput <a name="aws-cdk-sdk.glue.GlueUpdateRegistryInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateRegistryInput: glue.GlueUpdateRegistryInput = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateRegistryInput.property.description"></a>

- *Type:* `string`

---

##### `registryId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateRegistryInput.property.registryId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryId`](#aws-cdk-sdk.glue.GlueRegistryId)

---

### GlueUpdateRegistryResponse <a name="aws-cdk-sdk.glue.GlueUpdateRegistryResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateRegistryResponse: glue.GlueUpdateRegistryResponse = { ... }
```

##### `registryArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateRegistryResponse.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateRegistryResponse.property.registryName"></a>

- *Type:* `string`

---

### GlueUpdateSchemaInput <a name="aws-cdk-sdk.glue.GlueUpdateSchemaInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateSchemaInput: glue.GlueUpdateSchemaInput = { ... }
```

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaInput.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaId`](#aws-cdk-sdk.glue.GlueSchemaId)

---

##### `compatibility`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaInput.property.compatibility"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaInput.property.description"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaInput.property.schemaVersionNumber"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionNumber`](#aws-cdk-sdk.glue.GlueSchemaVersionNumber)

---

### GlueUpdateSchemaResponse <a name="aws-cdk-sdk.glue.GlueUpdateSchemaResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateSchemaResponse: glue.GlueUpdateSchemaResponse = { ... }
```

##### `registryName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaResponse.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaResponse.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateSchemaResponse.property.schemaName"></a>

- *Type:* `string`

---

### GlueUpdateTableRequest <a name="aws-cdk-sdk.glue.GlueUpdateTableRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateTableRequest: glue.GlueUpdateTableRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTableRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `tableInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTableRequest.property.tableInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableInput`](#aws-cdk-sdk.glue.GlueTableInput)

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTableRequest.property.catalogId"></a>

- *Type:* `string`

---

##### `skipArchive`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTableRequest.property.skipArchive"></a>

- *Type:* `boolean`

---

### GlueUpdateTableResponse <a name="aws-cdk-sdk.glue.GlueUpdateTableResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateTableResponse: glue.GlueUpdateTableResponse = { ... }
```

### GlueUpdateTriggerRequest <a name="aws-cdk-sdk.glue.GlueUpdateTriggerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateTriggerRequest: glue.GlueUpdateTriggerRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTriggerRequest.property.name"></a>

- *Type:* `string`

---

##### `triggerUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTriggerRequest.property.triggerUpdate"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTriggerUpdate`](#aws-cdk-sdk.glue.GlueTriggerUpdate)

---

### GlueUpdateTriggerResponse <a name="aws-cdk-sdk.glue.GlueUpdateTriggerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateTriggerResponse: glue.GlueUpdateTriggerResponse = { ... }
```

##### `trigger`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateTriggerResponse.property.trigger"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)

---

### GlueUpdateUserDefinedFunctionRequest <a name="aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateUserDefinedFunctionRequest: glue.GlueUpdateUserDefinedFunctionRequest = { ... }
```

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest.property.databaseName"></a>

- *Type:* `string`

---

##### `functionInput`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest.property.functionInput"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUserDefinedFunctionInput`](#aws-cdk-sdk.glue.GlueUserDefinedFunctionInput)

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest.property.functionName"></a>

- *Type:* `string`

---

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionRequest.property.catalogId"></a>

- *Type:* `string`

---

### GlueUpdateUserDefinedFunctionResponse <a name="aws-cdk-sdk.glue.GlueUpdateUserDefinedFunctionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateUserDefinedFunctionResponse: glue.GlueUpdateUserDefinedFunctionResponse = { ... }
```

### GlueUpdateWorkflowRequest <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateWorkflowRequest: glue.GlueUpdateWorkflowRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowRequest.property.name"></a>

- *Type:* `string`

---

##### `defaultRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowRequest.property.defaultRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowRequest.property.description"></a>

- *Type:* `string`

---

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowRequest.property.maxConcurrentRuns"></a>

- *Type:* `number`

---

### GlueUpdateWorkflowResponse <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateWorkflowResponse: glue.GlueUpdateWorkflowResponse = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateWorkflowResponse.property.name"></a>

- *Type:* `string`

---

### GlueUpdateXmlClassifierRequest <a name="aws-cdk-sdk.glue.GlueUpdateXmlClassifierRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUpdateXmlClassifierRequest: glue.GlueUpdateXmlClassifierRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueUpdateXmlClassifierRequest.property.name"></a>

- *Type:* `string`

---

##### `classification`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateXmlClassifierRequest.property.classification"></a>

- *Type:* `string`

---

##### `rowTag`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUpdateXmlClassifierRequest.property.rowTag"></a>

- *Type:* `string`

---

### GlueUserDefinedFunction <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUserDefinedFunction: glue.GlueUserDefinedFunction = { ... }
```

##### `catalogId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.catalogId"></a>

- *Type:* `string`

---

##### `className`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.className"></a>

- *Type:* `string`

---

##### `createTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.createTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.databaseName"></a>

- *Type:* `string`

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.functionName"></a>

- *Type:* `string`

---

##### `ownerName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.ownerName"></a>

- *Type:* `string`

---

##### `ownerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.ownerType"></a>

- *Type:* `string`

---

##### `resourceUris`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunction.property.resourceUris"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResourceUri`](#aws-cdk-sdk.glue.GlueResourceUri)[]

---

### GlueUserDefinedFunctionInput <a name="aws-cdk-sdk.glue.GlueUserDefinedFunctionInput"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueUserDefinedFunctionInput: glue.GlueUserDefinedFunctionInput = { ... }
```

##### `className`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunctionInput.property.className"></a>

- *Type:* `string`

---

##### `functionName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunctionInput.property.functionName"></a>

- *Type:* `string`

---

##### `ownerName`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunctionInput.property.ownerName"></a>

- *Type:* `string`

---

##### `ownerType`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunctionInput.property.ownerType"></a>

- *Type:* `string`

---

##### `resourceUris`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueUserDefinedFunctionInput.property.resourceUris"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResourceUri`](#aws-cdk-sdk.glue.GlueResourceUri)[]

---

### GlueWorkflow <a name="aws-cdk-sdk.glue.GlueWorkflow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueWorkflow: glue.GlueWorkflow = { ... }
```

##### `createdOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.createdOn"></a>

- *Type:* `string`

---

##### `defaultRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.defaultRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.description"></a>

- *Type:* `string`

---

##### `graph`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.graph"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowGraph`](#aws-cdk-sdk.glue.GlueWorkflowGraph)

---

##### `lastModifiedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `lastRun`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.lastRun"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowRun`](#aws-cdk-sdk.glue.GlueWorkflowRun)

---

##### `maxConcurrentRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.maxConcurrentRuns"></a>

- *Type:* `number`

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflow.property.name"></a>

- *Type:* `string`

---

### GlueWorkflowGraph <a name="aws-cdk-sdk.glue.GlueWorkflowGraph"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueWorkflowGraph: glue.GlueWorkflowGraph = { ... }
```

##### `edges`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowGraph.property.edges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEdge`](#aws-cdk-sdk.glue.GlueEdge)[]

---

##### `nodes`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowGraph.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNode`](#aws-cdk-sdk.glue.GlueNode)[]

---

### GlueWorkflowRun <a name="aws-cdk-sdk.glue.GlueWorkflowRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueWorkflowRun: glue.GlueWorkflowRun = { ... }
```

##### `completedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.errorMessage"></a>

- *Type:* `string`

---

##### `graph`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.graph"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowGraph`](#aws-cdk-sdk.glue.GlueWorkflowGraph)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.name"></a>

- *Type:* `string`

---

##### `previousRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.previousRunId"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.startedOn"></a>

- *Type:* `string`

---

##### `statistics`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowRunStatistics`](#aws-cdk-sdk.glue.GlueWorkflowRunStatistics)

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.status"></a>

- *Type:* `string`

---

##### `workflowRunId`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.workflowRunId"></a>

- *Type:* `string`

---

##### `workflowRunProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRun.property.workflowRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

### GlueWorkflowRunStatistics <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueWorkflowRunStatistics: glue.GlueWorkflowRunStatistics = { ... }
```

##### `failedActions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics.property.failedActions"></a>

- *Type:* `number`

---

##### `runningActions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics.property.runningActions"></a>

- *Type:* `number`

---

##### `stoppedActions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics.property.stoppedActions"></a>

- *Type:* `number`

---

##### `succeededActions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics.property.succeededActions"></a>

- *Type:* `number`

---

##### `timeoutActions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics.property.timeoutActions"></a>

- *Type:* `number`

---

##### `totalActions`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueWorkflowRunStatistics.property.totalActions"></a>

- *Type:* `number`

---

### GlueXmlClassifier <a name="aws-cdk-sdk.glue.GlueXmlClassifier"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

const glueXmlClassifier: glue.GlueXmlClassifier = { ... }
```

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueXmlClassifier.property.classification"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueXmlClassifier.property.name"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueXmlClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueXmlClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `rowTag`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueXmlClassifier.property.rowTag"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.glue.GlueXmlClassifier.property.version"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### GlueResponsesBatchCreatePartition <a name="aws-cdk-sdk.glue.GlueResponsesBatchCreatePartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchCreatePartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchCreatePartition(__scope: Construct, __resources: string[], __input: GlueBatchCreatePartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchCreatePartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchCreatePartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchCreatePartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest`](#aws-cdk-sdk.glue.GlueBatchCreatePartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchCreatePartition.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionError`](#aws-cdk-sdk.glue.GluePartitionError)[]

---


### GlueResponsesBatchDeleteConnection <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchDeleteConnection(__scope: Construct, __resources: string[], __input: GlueBatchDeleteConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest`](#aws-cdk-sdk.glue.GlueBatchDeleteConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection.property.errors"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.glue.GlueErrorDetail`](#aws-cdk-sdk.glue.GlueErrorDetail)}

---

##### `succeeded`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteConnection.property.succeeded"></a>

- *Type:* `string`[]

---


### GlueResponsesBatchDeletePartition <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeletePartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeletePartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchDeletePartition(__scope: Construct, __resources: string[], __input: GlueBatchDeletePartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeletePartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeletePartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeletePartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest`](#aws-cdk-sdk.glue.GlueBatchDeletePartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeletePartition.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionError`](#aws-cdk-sdk.glue.GluePartitionError)[]

---


### GlueResponsesBatchDeleteTable <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchDeleteTable(__scope: Construct, __resources: string[], __input: GlueBatchDeleteTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeleteTableRequest`](#aws-cdk-sdk.glue.GlueBatchDeleteTableRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTable.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableError`](#aws-cdk-sdk.glue.GlueTableError)[]

---


### GlueResponsesBatchDeleteTableVersion <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTableVersion"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTableVersion.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchDeleteTableVersion(__scope: Construct, __resources: string[], __input: GlueBatchDeleteTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTableVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTableVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTableVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest`](#aws-cdk-sdk.glue.GlueBatchDeleteTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchDeleteTableVersion.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableVersionError`](#aws-cdk-sdk.glue.GlueTableVersionError)[]

---


### GlueResponsesBatchGetCrawlers <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchGetCrawlers(__scope: Construct, __resources: string[], __input: GlueBatchGetCrawlersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetCrawlersRequest`](#aws-cdk-sdk.glue.GlueBatchGetCrawlersRequest)

---



#### Properties <a name="Properties"></a>

##### `crawlers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers.property.crawlers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawler`](#aws-cdk-sdk.glue.GlueCrawler)[]

---

##### `crawlersNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetCrawlers.property.crawlersNotFound"></a>

- *Type:* `string`[]

---


### GlueResponsesBatchGetDevEndpoints <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchGetDevEndpoints(__scope: Construct, __resources: string[], __input: GlueBatchGetDevEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetDevEndpointsRequest`](#aws-cdk-sdk.glue.GlueBatchGetDevEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `devEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints.property.devEndpoints"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDevEndpoint`](#aws-cdk-sdk.glue.GlueDevEndpoint)[]

---

##### `devEndpointsNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetDevEndpoints.property.devEndpointsNotFound"></a>

- *Type:* `string`[]

---


### GlueResponsesBatchGetJobs <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchGetJobs(__scope: Construct, __resources: string[], __input: GlueBatchGetJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetJobsRequest`](#aws-cdk-sdk.glue.GlueBatchGetJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJob`](#aws-cdk-sdk.glue.GlueJob)[]

---

##### `jobsNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetJobs.property.jobsNotFound"></a>

- *Type:* `string`[]

---


### GlueResponsesBatchGetPartition <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchGetPartition(__scope: Construct, __resources: string[], __input: GlueBatchGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetPartitionRequest`](#aws-cdk-sdk.glue.GlueBatchGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `partitions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition.property.partitions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartition`](#aws-cdk-sdk.glue.GluePartition)[]

---

##### `unprocessedKeys`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetPartition.property.unprocessedKeys"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionValueList`](#aws-cdk-sdk.glue.GluePartitionValueList)[]

---


### GlueResponsesBatchGetTriggers <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchGetTriggers(__scope: Construct, __resources: string[], __input: GlueBatchGetTriggersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetTriggersRequest`](#aws-cdk-sdk.glue.GlueBatchGetTriggersRequest)

---



#### Properties <a name="Properties"></a>

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)[]

---

##### `triggersNotFound`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetTriggers.property.triggersNotFound"></a>

- *Type:* `string`[]

---


### GlueResponsesBatchGetWorkflows <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchGetWorkflows(__scope: Construct, __resources: string[], __input: GlueBatchGetWorkflowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest`](#aws-cdk-sdk.glue.GlueBatchGetWorkflowsRequest)

---



#### Properties <a name="Properties"></a>

##### `missingWorkflows`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows.property.missingWorkflows"></a>

- *Type:* `string`[]

---

##### `workflows`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchGetWorkflows.property.workflows"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflow`](#aws-cdk-sdk.glue.GlueWorkflow)[]

---


### GlueResponsesBatchStopJobRun <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchStopJobRun(__scope: Construct, __resources: string[], __input: GlueBatchStopJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchStopJobRunRequest`](#aws-cdk-sdk.glue.GlueBatchStopJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchStopJobRunError`](#aws-cdk-sdk.glue.GlueBatchStopJobRunError)[]

---

##### `successfulSubmissions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchStopJobRun.property.successfulSubmissions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission`](#aws-cdk-sdk.glue.GlueBatchStopJobRunSuccessfulSubmission)[]

---


### GlueResponsesBatchUpdatePartition <a name="aws-cdk-sdk.glue.GlueResponsesBatchUpdatePartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesBatchUpdatePartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesBatchUpdatePartition(__scope: Construct, __resources: string[], __input: GlueBatchUpdatePartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchUpdatePartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchUpdatePartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchUpdatePartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest`](#aws-cdk-sdk.glue.GlueBatchUpdatePartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesBatchUpdatePartition.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry`](#aws-cdk-sdk.glue.GlueBatchUpdatePartitionFailureEntry)[]

---


### GlueResponsesCancelMlTaskRun <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCancelMlTaskRun(__scope: Construct, __resources: string[], __input: GlueCancelMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueCancelMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.property.status"></a>

- *Type:* `string`

---

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCancelMlTaskRun.property.transformId"></a>

- *Type:* `string`

---


### GlueResponsesCheckSchemaVersionValidity <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCheckSchemaVersionValidity(__scope: Construct, __resources: string[], __input: GlueCheckSchemaVersionValidityInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput`](#aws-cdk-sdk.glue.GlueCheckSchemaVersionValidityInput)

---



#### Properties <a name="Properties"></a>

##### `error`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity.property.error"></a>

- *Type:* `string`

---

##### `valid`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCheckSchemaVersionValidity.property.valid"></a>

- *Type:* `boolean`

---


### GlueResponsesCreateDevEndpoint <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateDevEndpoint(__scope: Construct, __resources: string[], __input: GlueCreateDevEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateDevEndpointRequest`](#aws-cdk-sdk.glue.GlueCreateDevEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arguments`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.availabilityZone"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.endpointName"></a>

- *Type:* `string`

---

##### `extraJarsS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.extraJarsS3Path"></a>

- *Type:* `string`

---

##### `extraPythonLibsS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.extraPythonLibsS3Path"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.failureReason"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.glueVersion"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `numberOfWorkers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.roleArn"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.status"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.subnetId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.vpcId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.workerType"></a>

- *Type:* `string`

---

##### `yarnEndpointAddress`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.yarnEndpointAddress"></a>

- *Type:* `string`

---

##### `zeppelinRemoteSparkInterpreterPort`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

- *Type:* `number`

---


### GlueResponsesCreateJob <a name="aws-cdk-sdk.glue.GlueResponsesCreateJob"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateJob.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateJob(__scope: Construct, __resources: string[], __input: GlueCreateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateJobRequest`](#aws-cdk-sdk.glue.GlueCreateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateJob.property.name"></a>

- *Type:* `string`

---


### GlueResponsesCreateMlTransform <a name="aws-cdk-sdk.glue.GlueResponsesCreateMlTransform"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateMlTransform.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateMlTransform(__scope: Construct, __resources: string[], __input: GlueCreateMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateMlTransform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateMlTransform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateMlTransform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateMlTransformRequest`](#aws-cdk-sdk.glue.GlueCreateMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateMlTransform.property.transformId"></a>

- *Type:* `string`

---


### GlueResponsesCreateRegistry <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateRegistry(__scope: Construct, __resources: string[], __input: GlueCreateRegistryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateRegistryInput`](#aws-cdk-sdk.glue.GlueCreateRegistryInput)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.property.registryName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateRegistry.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlueResponsesCreateSchema <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateSchema(__scope: Construct, __resources: string[], __input: GlueCreateSchemaInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateSchemaInput`](#aws-cdk-sdk.glue.GlueCreateSchemaInput)

---



#### Properties <a name="Properties"></a>

##### `compatibility`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.compatibility"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.dataFormat"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.description"></a>

- *Type:* `string`

---

##### `latestSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.latestSchemaVersion"></a>

- *Type:* `number`

---

##### `nextSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.nextSchemaVersion"></a>

- *Type:* `number`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.schemaCheckpoint"></a>

- *Type:* `number`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaStatus`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.schemaStatus"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionStatus`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.schemaVersionStatus"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSchema.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlueResponsesCreateScript <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateScript(__scope: Construct, __resources: string[], __input: GlueCreateScriptRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateScriptRequest`](#aws-cdk-sdk.glue.GlueCreateScriptRequest)

---



#### Properties <a name="Properties"></a>

##### `pythonScript`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript.property.pythonScript"></a>

- *Type:* `string`

---

##### `scalaCode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateScript.property.scalaCode"></a>

- *Type:* `string`

---


### GlueResponsesCreateSecurityConfiguration <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateSecurityConfiguration(__scope: Construct, __resources: string[], __input: GlueCreateSecurityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueCreateSecurityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateSecurityConfiguration.property.name"></a>

- *Type:* `string`

---


### GlueResponsesCreateTrigger <a name="aws-cdk-sdk.glue.GlueResponsesCreateTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateTrigger(__scope: Construct, __resources: string[], __input: GlueCreateTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateTriggerRequest`](#aws-cdk-sdk.glue.GlueCreateTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateTrigger.property.name"></a>

- *Type:* `string`

---


### GlueResponsesCreateWorkflow <a name="aws-cdk-sdk.glue.GlueResponsesCreateWorkflow"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesCreateWorkflow.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesCreateWorkflow(__scope: Construct, __resources: string[], __input: GlueCreateWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateWorkflow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateWorkflow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateWorkflow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCreateWorkflowRequest`](#aws-cdk-sdk.glue.GlueCreateWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesCreateWorkflow.property.name"></a>

- *Type:* `string`

---


### GlueResponsesDeleteJob <a name="aws-cdk-sdk.glue.GlueResponsesDeleteJob"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteJob.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteJob(__scope: Construct, __resources: string[], __input: GlueDeleteJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteJobRequest`](#aws-cdk-sdk.glue.GlueDeleteJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteJob.property.jobName"></a>

- *Type:* `string`

---


### GlueResponsesDeleteMlTransform <a name="aws-cdk-sdk.glue.GlueResponsesDeleteMlTransform"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteMlTransform.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteMlTransform(__scope: Construct, __resources: string[], __input: GlueDeleteMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteMlTransform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteMlTransform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteMlTransform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteMlTransformRequest`](#aws-cdk-sdk.glue.GlueDeleteMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteMlTransform.property.transformId"></a>

- *Type:* `string`

---


### GlueResponsesDeleteRegistry <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteRegistry(__scope: Construct, __resources: string[], __input: GlueDeleteRegistryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteRegistryInput`](#aws-cdk-sdk.glue.GlueDeleteRegistryInput)

---



#### Properties <a name="Properties"></a>

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.property.registryName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteRegistry.property.status"></a>

- *Type:* `string`

---


### GlueResponsesDeleteSchema <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteSchema(__scope: Construct, __resources: string[], __input: GlueDeleteSchemaInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteSchemaInput`](#aws-cdk-sdk.glue.GlueDeleteSchemaInput)

---



#### Properties <a name="Properties"></a>

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchema.property.status"></a>

- *Type:* `string`

---


### GlueResponsesDeleteSchemaVersions <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchemaVersions"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchemaVersions.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteSchemaVersions(__scope: Construct, __resources: string[], __input: GlueDeleteSchemaVersionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchemaVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchemaVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchemaVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput`](#aws-cdk-sdk.glue.GlueDeleteSchemaVersionsInput)

---



#### Properties <a name="Properties"></a>

##### `schemaVersionErrors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteSchemaVersions.property.schemaVersionErrors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionErrorItem`](#aws-cdk-sdk.glue.GlueSchemaVersionErrorItem)[]

---


### GlueResponsesDeleteTrigger <a name="aws-cdk-sdk.glue.GlueResponsesDeleteTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteTrigger(__scope: Construct, __resources: string[], __input: GlueDeleteTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteTriggerRequest`](#aws-cdk-sdk.glue.GlueDeleteTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteTrigger.property.name"></a>

- *Type:* `string`

---


### GlueResponsesDeleteWorkflow <a name="aws-cdk-sdk.glue.GlueResponsesDeleteWorkflow"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesDeleteWorkflow.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesDeleteWorkflow(__scope: Construct, __resources: string[], __input: GlueDeleteWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteWorkflow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteWorkflow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteWorkflow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDeleteWorkflowRequest`](#aws-cdk-sdk.glue.GlueDeleteWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesDeleteWorkflow.property.name"></a>

- *Type:* `string`

---


### GlueResponsesFetchCatalogImportStatus <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatus"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatus.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCatalogImportStatus(__scope: Construct, __resources: string[], __input: GlueGetCatalogImportStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest`](#aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `importStatus`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatus.property.importStatus"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus`](#aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus)

---


### GlueResponsesFetchCatalogImportStatusImportStatus <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCatalogImportStatusImportStatus(__scope: Construct, __resources: string[], __input: GlueGetCatalogImportStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest`](#aws-cdk-sdk.glue.GlueGetCatalogImportStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `importCompleted`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.property.importCompleted"></a>

- *Type:* `boolean`

---

##### `importedBy`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.property.importedBy"></a>

- *Type:* `string`

---

##### `importTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCatalogImportStatusImportStatus.property.importTime"></a>

- *Type:* `string`

---


### GlueResponsesFetchClassifier <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifier.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifier(__scope: Construct, __resources: string[], __input: GlueGetClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `classifier`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifier.property.classifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier`](#aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier)

---


### GlueResponsesFetchClassifierClassifier <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifierClassifier(__scope: Construct, __resources: string[], __input: GlueGetClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `csvClassifier`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.property.csvClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier`](#aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier)

---

##### `grokClassifier`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.property.grokClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier`](#aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier)

---

##### `jsonClassifier`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.property.jsonClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier`](#aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier)

---

##### `xmlClassifier`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifier.property.xmlClassifier"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier`](#aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier)

---


### GlueResponsesFetchClassifierClassifierCsvClassifier <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifierClassifierCsvClassifier(__scope: Construct, __resources: string[], __input: GlueGetClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `allowSingleColumn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.allowSingleColumn"></a>

- *Type:* `boolean`

---

##### `containsHeader`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.containsHeader"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `delimiter`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.delimiter"></a>

- *Type:* `string`

---

##### `disableValueTrimming`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.disableValueTrimming"></a>

- *Type:* `boolean`

---

##### `header`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.header"></a>

- *Type:* `string`[]

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.name"></a>

- *Type:* `string`

---

##### `quoteSymbol`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.quoteSymbol"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierCsvClassifier.property.version"></a>

- *Type:* `number`

---


### GlueResponsesFetchClassifierClassifierGrokClassifier <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifierClassifierGrokClassifier(__scope: Construct, __resources: string[], __input: GlueGetClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.classification"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `customPatterns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.customPatterns"></a>

- *Type:* `string`

---

##### `grokPattern`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.grokPattern"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierGrokClassifier.property.version"></a>

- *Type:* `number`

---


### GlueResponsesFetchClassifierClassifierJsonClassifier <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifierClassifierJsonClassifier(__scope: Construct, __resources: string[], __input: GlueGetClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `jsonPath`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.property.jsonPath"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.property.name"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierJsonClassifier.property.version"></a>

- *Type:* `number`

---


### GlueResponsesFetchClassifierClassifierXmlClassifier <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifierClassifierXmlClassifier(__scope: Construct, __resources: string[], __input: GlueGetClassifierRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifierRequest`](#aws-cdk-sdk.glue.GlueGetClassifierRequest)

---



#### Properties <a name="Properties"></a>

##### `classification`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.property.classification"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.property.creationTime"></a>

- *Type:* `string`

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.property.lastUpdated"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.property.name"></a>

- *Type:* `string`

---

##### `rowTag`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.property.rowTag"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifierClassifierXmlClassifier.property.version"></a>

- *Type:* `number`

---


### GlueResponsesFetchClassifiers <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchClassifiers(__scope: Construct, __resources: string[], __input: GlueGetClassifiersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetClassifiersRequest`](#aws-cdk-sdk.glue.GlueGetClassifiersRequest)

---



#### Properties <a name="Properties"></a>

##### `classifiers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers.property.classifiers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueClassifier`](#aws-cdk-sdk.glue.GlueClassifier)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchClassifiers.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchColumnStatisticsForPartition <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchColumnStatisticsForPartition(__scope: Construct, __resources: string[], __input: GlueGetColumnStatisticsForPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest`](#aws-cdk-sdk.glue.GlueGetColumnStatisticsForPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `columnStatisticsList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition.property.columnStatisticsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForPartition.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnError`](#aws-cdk-sdk.glue.GlueColumnError)[]

---


### GlueResponsesFetchColumnStatisticsForTable <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchColumnStatisticsForTable(__scope: Construct, __resources: string[], __input: GlueGetColumnStatisticsForTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest`](#aws-cdk-sdk.glue.GlueGetColumnStatisticsForTableRequest)

---



#### Properties <a name="Properties"></a>

##### `columnStatisticsList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable.property.columnStatisticsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatistics`](#aws-cdk-sdk.glue.GlueColumnStatistics)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchColumnStatisticsForTable.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnError`](#aws-cdk-sdk.glue.GlueColumnError)[]

---


### GlueResponsesFetchConnection <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnection"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnection.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchConnection(__scope: Construct, __resources: string[], __input: GlueGetConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionRequest`](#aws-cdk-sdk.glue.GlueGetConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connection`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnection.property.connection"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection`](#aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection)

---


### GlueResponsesFetchConnectionConnection <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchConnectionConnection(__scope: Construct, __resources: string[], __input: GlueGetConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionRequest`](#aws-cdk-sdk.glue.GlueGetConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.connectionProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `connectionType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.connectionType"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.description"></a>

- *Type:* `string`

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.lastUpdatedBy"></a>

- *Type:* `string`

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.lastUpdatedTime"></a>

- *Type:* `string`

---

##### `matchCriteria`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.matchCriteria"></a>

- *Type:* `string`[]

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.name"></a>

- *Type:* `string`

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnection.property.physicalConnectionRequirements"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements`](#aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements)

---


### GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements(__scope: Construct, __resources: string[], __input: GlueGetConnectionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionRequest`](#aws-cdk-sdk.glue.GlueGetConnectionRequest)

---



#### Properties <a name="Properties"></a>

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.property.availabilityZone"></a>

- *Type:* `string`

---

##### `securityGroupIdList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.property.securityGroupIdList"></a>

- *Type:* `string`[]

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnectionConnectionPhysicalConnectionRequirements.property.subnetId"></a>

- *Type:* `string`

---


### GlueResponsesFetchConnections <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchConnections(__scope: Construct, __resources: string[], __input: GlueGetConnectionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetConnectionsRequest`](#aws-cdk-sdk.glue.GlueGetConnectionsRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections.property.connectionList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueConnection`](#aws-cdk-sdk.glue.GlueConnection)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchConnections.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawler <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawler"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawler.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawler(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawler.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawler.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawler.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `crawler`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawler.property.crawler"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler)

---


### GlueResponsesFetchCrawlerCrawler <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawler(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `classifiers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.classifiers"></a>

- *Type:* `string`[]

---

##### `configuration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.configuration"></a>

- *Type:* `string`

---

##### `crawlElapsedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.crawlElapsedTime"></a>

- *Type:* `number`

---

##### `crawlerSecurityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.crawlerSecurityConfiguration"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.description"></a>

- *Type:* `string`

---

##### `lastCrawl`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.lastCrawl"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl)

---

##### `lastUpdated`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.lastUpdated"></a>

- *Type:* `string`

---

##### `lineageConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.lineageConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.name"></a>

- *Type:* `string`

---

##### `recrawlPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.recrawlPolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy)

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.role"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.schedule"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule)

---

##### `schemaChangePolicy`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.schemaChangePolicy"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.state"></a>

- *Type:* `string`

---

##### `tablePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.tablePrefix"></a>

- *Type:* `string`

---

##### `targets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.targets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets`](#aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets)

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawler.property.version"></a>

- *Type:* `number`

---


### GlueResponsesFetchCrawlerCrawlerLastCrawl <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawlerLastCrawl(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.property.errorMessage"></a>

- *Type:* `string`

---

##### `logGroup`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.property.logGroup"></a>

- *Type:* `string`

---

##### `logStream`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.property.logStream"></a>

- *Type:* `string`

---

##### `messagePrefix`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.property.messagePrefix"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.property.startTime"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLastCrawl.property.status"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawlerCrawlerLineageConfiguration <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `crawlerLineageSettings`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerLineageConfiguration.property.crawlerLineageSettings"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawlerCrawlerRecrawlPolicy <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `recrawlBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawlerCrawlerSchedule <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawlerSchedule(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `scheduleExpression`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule.property.scheduleExpression"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchedule.property.state"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `deleteBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

- *Type:* `string`

---

##### `updateBehavior`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerSchemaChangePolicy.property.updateBehavior"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawlerCrawlerTargets <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerCrawlerTargets(__scope: Construct, __resources: string[], __input: GlueGetCrawlerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogTargets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.property.catalogTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCatalogTarget`](#aws-cdk-sdk.glue.GlueCatalogTarget)[]

---

##### `dynamoDbTargets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.property.dynamoDbTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDynamoDbTarget`](#aws-cdk-sdk.glue.GlueDynamoDbTarget)[]

---

##### `jdbcTargets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.property.jdbcTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJdbcTarget`](#aws-cdk-sdk.glue.GlueJdbcTarget)[]

---

##### `mongoDbTargets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.property.mongoDbTargets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMongoDbTarget`](#aws-cdk-sdk.glue.GlueMongoDbTarget)[]

---

##### `s3Targets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerCrawlerTargets.property.s3Targets"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueS3Target`](#aws-cdk-sdk.glue.GlueS3Target)[]

---


### GlueResponsesFetchCrawlerMetrics <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlerMetrics(__scope: Construct, __resources: string[], __input: GlueGetCrawlerMetricsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest`](#aws-cdk-sdk.glue.GlueGetCrawlerMetricsRequest)

---



#### Properties <a name="Properties"></a>

##### `crawlerMetricsList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics.property.crawlerMetricsList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawlerMetrics`](#aws-cdk-sdk.glue.GlueCrawlerMetrics)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlerMetrics.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchCrawlers <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchCrawlers(__scope: Construct, __resources: string[], __input: GlueGetCrawlersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetCrawlersRequest`](#aws-cdk-sdk.glue.GlueGetCrawlersRequest)

---



#### Properties <a name="Properties"></a>

##### `crawlers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers.property.crawlers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCrawler`](#aws-cdk-sdk.glue.GlueCrawler)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchCrawlers.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchDatabase <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabase.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDatabase(__scope: Construct, __resources: string[], __input: GlueGetDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDatabaseRequest`](#aws-cdk-sdk.glue.GlueGetDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `database`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabase.property.database"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase`](#aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase)

---


### GlueResponsesFetchDatabaseDatabase <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDatabaseDatabase(__scope: Construct, __resources: string[], __input: GlueGetDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDatabaseRequest`](#aws-cdk-sdk.glue.GlueGetDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.catalogId"></a>

- *Type:* `string`

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.createTableDefaultPermissions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePrincipalPermissions`](#aws-cdk-sdk.glue.GluePrincipalPermissions)[]

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.createTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.description"></a>

- *Type:* `string`

---

##### `locationUri`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.locationUri"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `targetDatabase`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabase.property.targetDatabase"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase`](#aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase)

---


### GlueResponsesFetchDatabaseDatabaseTargetDatabase <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase(__scope: Construct, __resources: string[], __input: GlueGetDatabaseRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDatabaseRequest`](#aws-cdk-sdk.glue.GlueGetDatabaseRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabaseDatabaseTargetDatabase.property.databaseName"></a>

- *Type:* `string`

---


### GlueResponsesFetchDatabases <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDatabases(__scope: Construct, __resources: string[], __input: GlueGetDatabasesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDatabasesRequest`](#aws-cdk-sdk.glue.GlueGetDatabasesRequest)

---



#### Properties <a name="Properties"></a>

##### `databaseList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases.property.databaseList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDatabase`](#aws-cdk-sdk.glue.GlueDatabase)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDatabases.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchDataCatalogEncryptionSettings <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettings.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDataCatalogEncryptionSettings(__scope: Construct, __resources: string[], __input: GlueGetDataCatalogEncryptionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest`](#aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `dataCatalogEncryptionSettings`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings`](#aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings)

---


### GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings(__scope: Construct, __resources: string[], __input: GlueGetDataCatalogEncryptionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest`](#aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `connectionPasswordEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.property.connectionPasswordEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption`](#aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption)

---

##### `encryptionAtRest`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.property.encryptionAtRest"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest`](#aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest)

---


### GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption(__scope: Construct, __resources: string[], __input: GlueGetDataCatalogEncryptionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest`](#aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `awsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.property.awsKmsKeyId"></a>

- *Type:* `string`

---

##### `returnConnectionPasswordEncrypted`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.property.returnConnectionPasswordEncrypted"></a>

- *Type:* `boolean`

---


### GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest(__scope: Construct, __resources: string[], __input: GlueGetDataCatalogEncryptionSettingsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest`](#aws-cdk-sdk.glue.GlueGetDataCatalogEncryptionSettingsRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.catalogEncryptionMode"></a>

- *Type:* `string`

---

##### `sseAwsKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.sseAwsKmsKeyId"></a>

- *Type:* `string`

---


### GlueResponsesFetchDataflowGraph <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDataflowGraph(__scope: Construct, __resources: string[], __input: GlueGetDataflowGraphRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDataflowGraphRequest`](#aws-cdk-sdk.glue.GlueGetDataflowGraphRequest)

---



#### Properties <a name="Properties"></a>

##### `dagEdges`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph.property.dagEdges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenEdge`](#aws-cdk-sdk.glue.GlueCodeGenEdge)[]

---

##### `dagNodes`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDataflowGraph.property.dagNodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCodeGenNode`](#aws-cdk-sdk.glue.GlueCodeGenNode)[]

---


### GlueResponsesFetchDevEndpoint <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoint.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDevEndpoint(__scope: Construct, __resources: string[], __input: GlueGetDevEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDevEndpointRequest`](#aws-cdk-sdk.glue.GlueGetDevEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `devEndpoint`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoint.property.devEndpoint"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint`](#aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint)

---


### GlueResponsesFetchDevEndpointDevEndpoint <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDevEndpointDevEndpoint(__scope: Construct, __resources: string[], __input: GlueGetDevEndpointRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDevEndpointRequest`](#aws-cdk-sdk.glue.GlueGetDevEndpointRequest)

---



#### Properties <a name="Properties"></a>

##### `arguments`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.availabilityZone"></a>

- *Type:* `string`

---

##### `createdTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.createdTimestamp"></a>

- *Type:* `string`

---

##### `endpointName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.endpointName"></a>

- *Type:* `string`

---

##### `extraJarsS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.extraJarsS3Path"></a>

- *Type:* `string`

---

##### `extraPythonLibsS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.extraPythonLibsS3Path"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.failureReason"></a>

- *Type:* `string`

---

##### `glueVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.glueVersion"></a>

- *Type:* `string`

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.lastModifiedTimestamp"></a>

- *Type:* `string`

---

##### `lastUpdateStatus`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.lastUpdateStatus"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `numberOfWorkers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `privateAddress`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.privateAddress"></a>

- *Type:* `string`

---

##### `publicAddress`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.publicAddress"></a>

- *Type:* `string`

---

##### `publicKey`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.publicKey"></a>

- *Type:* `string`

---

##### `publicKeys`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.publicKeys"></a>

- *Type:* `string`[]

---

##### `roleArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.roleArn"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `securityGroupIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.securityGroupIds"></a>

- *Type:* `string`[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.status"></a>

- *Type:* `string`

---

##### `subnetId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.subnetId"></a>

- *Type:* `string`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.vpcId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.workerType"></a>

- *Type:* `string`

---

##### `yarnEndpointAddress`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.yarnEndpointAddress"></a>

- *Type:* `string`

---

##### `zeppelinRemoteSparkInterpreterPort`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpointDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

- *Type:* `number`

---


### GlueResponsesFetchDevEndpoints <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchDevEndpoints(__scope: Construct, __resources: string[], __input: GlueGetDevEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetDevEndpointsRequest`](#aws-cdk-sdk.glue.GlueGetDevEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `devEndpoints`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints.property.devEndpoints"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueDevEndpoint`](#aws-cdk-sdk.glue.GlueDevEndpoint)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchDevEndpoints.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchJob <a name="aws-cdk-sdk.glue.GlueResponsesFetchJob"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJob.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJob(__scope: Construct, __resources: string[], __input: GlueGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `job`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJob.property.job"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobJob`](#aws-cdk-sdk.glue.GlueResponsesFetchJobJob)

---


### GlueResponsesFetchJobBookmark <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmark"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmark.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobBookmark(__scope: Construct, __resources: string[], __input: GlueGetJobBookmarkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmark.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmark.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmark.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobBookmarkRequest`](#aws-cdk-sdk.glue.GlueGetJobBookmarkRequest)

---



#### Properties <a name="Properties"></a>

##### `jobBookmarkEntry`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmark.property.jobBookmarkEntry"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry`](#aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry)

---


### GlueResponsesFetchJobBookmarkJobBookmarkEntry <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry(__scope: Construct, __resources: string[], __input: GlueGetJobBookmarkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobBookmarkRequest`](#aws-cdk-sdk.glue.GlueGetJobBookmarkRequest)

---



#### Properties <a name="Properties"></a>

##### `attempt`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.attempt"></a>

- *Type:* `number`

---

##### `jobBookmark`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.jobBookmark"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.jobName"></a>

- *Type:* `string`

---

##### `previousRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.previousRunId"></a>

- *Type:* `string`

---

##### `run`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.run"></a>

- *Type:* `number`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.runId"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobBookmarkJobBookmarkEntry.property.version"></a>

- *Type:* `number`

---


### GlueResponsesFetchJobJob <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobJob(__scope: Construct, __resources: string[], __input: GlueGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `allocatedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `command`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.command"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand`](#aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand)

---

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.connections"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections`](#aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections)

---

##### `createdOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.createdOn"></a>

- *Type:* `string`

---

##### `defaultArguments`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.defaultArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.description"></a>

- *Type:* `string`

---

##### `executionProperty`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.executionProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty`](#aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty)

---

##### `glueVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.glueVersion"></a>

- *Type:* `string`

---

##### `lastModifiedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logUri`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.logUri"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.name"></a>

- *Type:* `string`

---

##### `nonOverridableArguments`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.nonOverridableArguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `notificationProperty`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty`](#aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty)

---

##### `numberOfWorkers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.role"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.timeout"></a>

- *Type:* `number`

---

##### `workerType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJob.property.workerType"></a>

- *Type:* `string`

---


### GlueResponsesFetchJobJobCommand <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobJobCommand(__scope: Construct, __resources: string[], __input: GlueGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.property.name"></a>

- *Type:* `string`

---

##### `pythonVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.property.pythonVersion"></a>

- *Type:* `string`

---

##### `scriptLocation`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobCommand.property.scriptLocation"></a>

- *Type:* `string`

---


### GlueResponsesFetchJobJobConnections <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobJobConnections(__scope: Construct, __resources: string[], __input: GlueGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobConnections.property.connections"></a>

- *Type:* `string`[]

---


### GlueResponsesFetchJobJobExecutionProperty <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobJobExecutionProperty(__scope: Construct, __resources: string[], __input: GlueGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `maxConcurrentRuns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobExecutionProperty.property.maxConcurrentRuns"></a>

- *Type:* `number`

---


### GlueResponsesFetchJobJobNotificationProperty <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobJobNotificationProperty(__scope: Construct, __resources: string[], __input: GlueGetJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRequest`](#aws-cdk-sdk.glue.GlueGetJobRequest)

---



#### Properties <a name="Properties"></a>

##### `notifyDelayAfter`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobJobNotificationProperty.property.notifyDelayAfter"></a>

- *Type:* `number`

---


### GlueResponsesFetchJobRun <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobRun(__scope: Construct, __resources: string[], __input: GlueGetJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRunRequest`](#aws-cdk-sdk.glue.GlueGetJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `jobRun`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRun.property.jobRun"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun`](#aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun)

---


### GlueResponsesFetchJobRunJobRun <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobRunJobRun(__scope: Construct, __resources: string[], __input: GlueGetJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRunRequest`](#aws-cdk-sdk.glue.GlueGetJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `allocatedCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.allocatedCapacity"></a>

- *Type:* `number`

---

##### `arguments`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.arguments"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `attempt`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.attempt"></a>

- *Type:* `number`

---

##### `completedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.errorMessage"></a>

- *Type:* `string`

---

##### `executionTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.executionTime"></a>

- *Type:* `number`

---

##### `glueVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.glueVersion"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.id"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunState`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.jobRunState"></a>

- *Type:* `string`

---

##### `lastModifiedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.logGroupName"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.maxCapacity"></a>

- *Type:* `number`

---

##### `notificationProperty`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.notificationProperty"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty`](#aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty)

---

##### `numberOfWorkers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `predecessorRuns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.predecessorRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePredecessor`](#aws-cdk-sdk.glue.GluePredecessor)[]

---

##### `previousRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.previousRunId"></a>

- *Type:* `string`

---

##### `securityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.securityConfiguration"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.startedOn"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.timeout"></a>

- *Type:* `number`

---

##### `triggerName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.triggerName"></a>

- *Type:* `string`

---

##### `workerType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRun.property.workerType"></a>

- *Type:* `string`

---


### GlueResponsesFetchJobRunJobRunNotificationProperty <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobRunJobRunNotificationProperty(__scope: Construct, __resources: string[], __input: GlueGetJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRunRequest`](#aws-cdk-sdk.glue.GlueGetJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `notifyDelayAfter`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRunJobRunNotificationProperty.property.notifyDelayAfter"></a>

- *Type:* `number`

---


### GlueResponsesFetchJobRuns <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobRuns(__scope: Construct, __resources: string[], __input: GlueGetJobRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobRunsRequest`](#aws-cdk-sdk.glue.GlueGetJobRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobRuns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns.property.jobRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJobRun`](#aws-cdk-sdk.glue.GlueJobRun)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobRuns.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchJobs <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchJobs(__scope: Construct, __resources: string[], __input: GlueGetJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetJobsRequest`](#aws-cdk-sdk.glue.GlueGetJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobs`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs.property.jobs"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueJob`](#aws-cdk-sdk.glue.GlueJob)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchJobs.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchMapping <a name="aws-cdk-sdk.glue.GlueResponsesFetchMapping"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMapping.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMapping(__scope: Construct, __resources: string[], __input: GlueGetMappingRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMapping.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMapping.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMapping.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMappingRequest`](#aws-cdk-sdk.glue.GlueGetMappingRequest)

---



#### Properties <a name="Properties"></a>

##### `mapping`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMapping.property.mapping"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMappingEntry`](#aws-cdk-sdk.glue.GlueMappingEntry)[]

---


### GlueResponsesFetchMlTaskRun <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRun(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `completedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorString`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.errorString"></a>

- *Type:* `string`

---

##### `executionTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.executionTime"></a>

- *Type:* `number`

---

##### `lastModifiedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `logGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.logGroupName"></a>

- *Type:* `string`

---

##### `properties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.properties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties)

---

##### `startedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.startedOn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.status"></a>

- *Type:* `string`

---

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.taskRunId"></a>

- *Type:* `string`

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRun.property.transformId"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTaskRunProperties <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRunProperties(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `exportLabelsTaskRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.property.exportLabelsTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties)

---

##### `findMatchesTaskRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.property.findMatchesTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties)

---

##### `importLabelsTaskRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.property.importLabelsTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties)

---

##### `labelingSetGenerationTaskRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.property.labelingSetGenerationTaskRunProperties"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties)

---

##### `taskType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunProperties.property.taskType"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `outputS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesExportLabelsTaskRunProperties.property.outputS3Path"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.property.jobId"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.property.jobName"></a>

- *Type:* `string`

---

##### `jobRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesFindMatchesTaskRunProperties.property.jobRunId"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `inputS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties.property.inputS3Path"></a>

- *Type:* `string`

---

##### `replace`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesImportLabelsTaskRunProperties.property.replace"></a>

- *Type:* `boolean`

---


### GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `outputS3Path`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRunPropertiesLabelingSetGenerationTaskRunProperties.property.outputS3Path"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTaskRuns <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTaskRuns(__scope: Construct, __resources: string[], __input: GlueGetMlTaskRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest`](#aws-cdk-sdk.glue.GlueGetMlTaskRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns.property.nextToken"></a>

- *Type:* `string`

---

##### `taskRuns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTaskRuns.property.taskRuns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTaskRun`](#aws-cdk-sdk.glue.GlueTaskRun)[]

---


### GlueResponsesFetchMlTransform <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransform(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `createdOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.createdOn"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.description"></a>

- *Type:* `string`

---

##### `evaluationMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.evaluationMetrics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics)

---

##### `glueVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.glueVersion"></a>

- *Type:* `string`

---

##### `inputRecordTables`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.inputRecordTables"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGlueTable`](#aws-cdk-sdk.glue.GlueGlueTable)[]

---

##### `labelCount`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.labelCount"></a>

- *Type:* `number`

---

##### `lastModifiedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `maxCapacity`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.maxCapacity"></a>

- *Type:* `number`

---

##### `maxRetries`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.maxRetries"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.name"></a>

- *Type:* `string`

---

##### `numberOfWorkers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.numberOfWorkers"></a>

- *Type:* `number`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters)

---

##### `role`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.role"></a>

- *Type:* `string`

---

##### `schema`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.schema"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaColumn`](#aws-cdk-sdk.glue.GlueSchemaColumn)[]

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.status"></a>

- *Type:* `string`

---

##### `timeout`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.timeout"></a>

- *Type:* `number`

---

##### `transformEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.transformEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption)

---

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.transformId"></a>

- *Type:* `string`

---

##### `workerType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransform.property.workerType"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTransformEvaluationMetrics <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformEvaluationMetrics(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `findMatchesMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics.property.findMatchesMetrics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics)

---

##### `transformType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetrics.property.transformType"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `areaUnderPrCurve`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.property.areaUnderPrCurve"></a>

- *Type:* `number`

---

##### `confusionMatrix`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.property.confusionMatrix"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix)

---

##### `f1`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.property.f1"></a>

- *Type:* `number`

---

##### `precision`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.property.precision"></a>

- *Type:* `number`

---

##### `recall`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetrics.property.recall"></a>

- *Type:* `number`

---


### GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `numFalseNegatives`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.property.numFalseNegatives"></a>

- *Type:* `number`

---

##### `numFalsePositives`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.property.numFalsePositives"></a>

- *Type:* `number`

---

##### `numTrueNegatives`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.property.numTrueNegatives"></a>

- *Type:* `number`

---

##### `numTruePositives`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformEvaluationMetricsFindMatchesMetricsConfusionMatrix.property.numTruePositives"></a>

- *Type:* `number`

---


### GlueResponsesFetchMlTransformParameters <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformParameters(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `findMatchesParameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters.property.findMatchesParameters"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters)

---

##### `transformType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParameters.property.transformType"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTransformParametersFindMatchesParameters <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `accuracyCostTradeoff`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.property.accuracyCostTradeoff"></a>

- *Type:* `number`

---

##### `enforceProvidedLabels`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

- *Type:* `boolean`

---

##### `precisionRecallTradeoff`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.property.precisionRecallTradeoff"></a>

- *Type:* `number`

---

##### `primaryKeyColumnName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTransforms <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransforms(__scope: Construct, __resources: string[], __input: GlueGetMlTransformsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformsRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms.property.nextToken"></a>

- *Type:* `string`

---

##### `transforms`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransforms.property.transforms"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueMlTransform`](#aws-cdk-sdk.glue.GlueMlTransform)[]

---


### GlueResponsesFetchMlTransformTransformEncryption <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformTransformEncryption(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `mlUserDataEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption.property.mlUserDataEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption`](#aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption)

---

##### `taskRunSecurityConfigurationName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryption.property.taskRunSecurityConfigurationName"></a>

- *Type:* `string`

---


### GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption(__scope: Construct, __resources: string[], __input: GlueGetMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetMlTransformRequest`](#aws-cdk-sdk.glue.GlueGetMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `mlUserDataEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

- *Type:* `string`

---


### GlueResponsesFetchPartition <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartition(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `partition`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartition.property.partition"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition`](#aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition)

---


### GlueResponsesFetchPartitionIndexes <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionIndexes(__scope: Construct, __resources: string[], __input: GlueGetPartitionIndexesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest`](#aws-cdk-sdk.glue.GlueGetPartitionIndexesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes.property.nextToken"></a>

- *Type:* `string`

---

##### `partitionIndexDescriptorList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionIndexes.property.partitionIndexDescriptorList"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartitionIndexDescriptor`](#aws-cdk-sdk.glue.GluePartitionIndexDescriptor)[]

---


### GlueResponsesFetchPartitionPartition <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionPartition(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.catalogId"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.creationTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.databaseName"></a>

- *Type:* `string`

---

##### `lastAccessTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `storageDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor`](#aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor)

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.tableName"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartition.property.values"></a>

- *Type:* `string`[]

---


### GlueResponsesFetchPartitionPartitionStorageDescriptor <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionPartitionStorageDescriptor(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketColumns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.bucketColumns"></a>

- *Type:* `string`[]

---

##### `columns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.columns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `compressed`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.compressed"></a>

- *Type:* `boolean`

---

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.inputFormat"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.location"></a>

- *Type:* `string`

---

##### `numberOfBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.numberOfBuckets"></a>

- *Type:* `number`

---

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.outputFormat"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `schemaReference`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.schemaReference"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference`](#aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference)

---

##### `serdeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.serdeInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo`](#aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo)

---

##### `skewedInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.skewedInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo`](#aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo)

---

##### `sortColumns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.sortColumns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueOrder`](#aws-cdk-sdk.glue.GlueOrder)[]

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptor.property.storedAsSubDirectories"></a>

- *Type:* `boolean`

---


### GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId`](#aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId)

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

- *Type:* `number`

---


### GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

- *Type:* `string`

---


### GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serializationLibrary`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

- *Type:* `string`

---


### GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo(__scope: Construct, __resources: string[], __input: GlueGetPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionRequest`](#aws-cdk-sdk.glue.GlueGetPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `skewedColumnNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

- *Type:* `string`[]

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `skewedColumnValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitionPartitionStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

- *Type:* `string`[]

---


### GlueResponsesFetchPartitions <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPartitions(__scope: Construct, __resources: string[], __input: GlueGetPartitionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPartitionsRequest`](#aws-cdk-sdk.glue.GlueGetPartitionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions.property.nextToken"></a>

- *Type:* `string`

---

##### `partitions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPartitions.property.partitions"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePartition`](#aws-cdk-sdk.glue.GluePartition)[]

---


### GlueResponsesFetchPlan <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchPlan(__scope: Construct, __resources: string[], __input: GlueGetPlanRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetPlanRequest`](#aws-cdk-sdk.glue.GlueGetPlanRequest)

---



#### Properties <a name="Properties"></a>

##### `pythonScript`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan.property.pythonScript"></a>

- *Type:* `string`

---

##### `scalaCode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchPlan.property.scalaCode"></a>

- *Type:* `string`

---


### GlueResponsesFetchRegistry <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchRegistry(__scope: Construct, __resources: string[], __input: GlueGetRegistryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetRegistryInput`](#aws-cdk-sdk.glue.GlueGetRegistryInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.property.createdTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.property.description"></a>

- *Type:* `string`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.property.registryName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.property.status"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchRegistry.property.updatedTime"></a>

- *Type:* `string`

---


### GlueResponsesFetchResourcePolicies <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchResourcePolicies(__scope: Construct, __resources: string[], __input: GlueGetResourcePoliciesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest`](#aws-cdk-sdk.glue.GlueGetResourcePoliciesRequest)

---



#### Properties <a name="Properties"></a>

##### `fetchResourcePoliciesResponseList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies.property.fetchResourcePoliciesResponseList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGluePolicy`](#aws-cdk-sdk.glue.GlueGluePolicy)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicies.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesFetchResourcePolicy <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchResourcePolicy(__scope: Construct, __resources: string[], __input: GlueGetResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetResourcePolicyRequest`](#aws-cdk-sdk.glue.GlueGetResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.property.createTime"></a>

- *Type:* `string`

---

##### `policyHash`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.property.policyHash"></a>

- *Type:* `string`

---

##### `policyInJson`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.property.policyInJson"></a>

- *Type:* `string`

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchResourcePolicy.property.updateTime"></a>

- *Type:* `string`

---


### GlueResponsesFetchSchema <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSchema(__scope: Construct, __resources: string[], __input: GlueGetSchemaInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaInput`](#aws-cdk-sdk.glue.GlueGetSchemaInput)

---



#### Properties <a name="Properties"></a>

##### `compatibility`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.compatibility"></a>

- *Type:* `string`

---

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.createdTime"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.dataFormat"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.description"></a>

- *Type:* `string`

---

##### `latestSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.latestSchemaVersion"></a>

- *Type:* `number`

---

##### `nextSchemaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.nextSchemaVersion"></a>

- *Type:* `number`

---

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.schemaCheckpoint"></a>

- *Type:* `number`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaStatus`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.schemaStatus"></a>

- *Type:* `string`

---

##### `updatedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchema.property.updatedTime"></a>

- *Type:* `string`

---


### GlueResponsesFetchSchemaByDefinition <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSchemaByDefinition(__scope: Construct, __resources: string[], __input: GlueGetSchemaByDefinitionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput`](#aws-cdk-sdk.glue.GlueGetSchemaByDefinitionInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.property.createdTime"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.property.dataFormat"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaByDefinition.property.status"></a>

- *Type:* `string`

---


### GlueResponsesFetchSchemaVersion <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSchemaVersion(__scope: Construct, __resources: string[], __input: GlueGetSchemaVersionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaVersionInput`](#aws-cdk-sdk.glue.GlueGetSchemaVersionInput)

---



#### Properties <a name="Properties"></a>

##### `createdTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.createdTime"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.dataFormat"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.schemaDefinition"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersion.property.versionNumber"></a>

- *Type:* `number`

---


### GlueResponsesFetchSchemaVersionsDiff <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersionsDiff"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersionsDiff.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSchemaVersionsDiff(__scope: Construct, __resources: string[], __input: GlueGetSchemaVersionsDiffInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersionsDiff.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersionsDiff.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersionsDiff.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput`](#aws-cdk-sdk.glue.GlueGetSchemaVersionsDiffInput)

---



#### Properties <a name="Properties"></a>

##### `diff`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSchemaVersionsDiff.property.diff"></a>

- *Type:* `string`

---


### GlueResponsesFetchSecurityConfiguration <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfiguration.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSecurityConfiguration(__scope: Construct, __resources: string[], __input: GlueGetSecurityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `securityConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfiguration.property.securityConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration`](#aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration)

---


### GlueResponsesFetchSecurityConfigurations <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSecurityConfigurations(__scope: Construct, __resources: string[], __input: GlueGetSecurityConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations.property.nextToken"></a>

- *Type:* `string`

---

##### `securityConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurations.property.securityConfigurations"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSecurityConfiguration`](#aws-cdk-sdk.glue.GlueSecurityConfiguration)[]

---


### GlueResponsesFetchSecurityConfigurationSecurityConfiguration <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration(__scope: Construct, __resources: string[], __input: GlueGetSecurityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `createdTimeStamp`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.property.createdTimeStamp"></a>

- *Type:* `string`

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.property.encryptionConfiguration"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration`](#aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfiguration.property.name"></a>

- *Type:* `string`

---


### GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration(__scope: Construct, __resources: string[], __input: GlueGetSecurityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.property.cloudWatchEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption`](#aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption)

---

##### `jobBookmarksEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption`](#aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption)

---

##### `s3Encryption`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfiguration.property.s3Encryption"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueS3Encryption`](#aws-cdk-sdk.glue.GlueS3Encryption)[]

---


### GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption(__scope: Construct, __resources: string[], __input: GlueGetSecurityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption.property.cloudWatchEncryptionMode"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationCloudWatchEncryption.property.kmsKeyArn"></a>

- *Type:* `string`

---


### GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption(__scope: Construct, __resources: string[], __input: GlueGetSecurityConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest`](#aws-cdk-sdk.glue.GlueGetSecurityConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `jobBookmarksEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode"></a>

- *Type:* `string`

---

##### `kmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchSecurityConfigurationSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn"></a>

- *Type:* `string`

---


### GlueResponsesFetchTable <a name="aws-cdk-sdk.glue.GlueResponsesFetchTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTable(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTable.property.table"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTable`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTable)

---


### GlueResponsesFetchTables <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTables(__scope: Construct, __resources: string[], __input: GlueGetTablesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTablesRequest`](#aws-cdk-sdk.glue.GlueGetTablesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables.property.nextToken"></a>

- *Type:* `string`

---

##### `tableList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTables.property.tableList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTable`](#aws-cdk-sdk.glue.GlueTable)[]

---


### GlueResponsesFetchTableTable <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTable(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.catalogId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.createdBy"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.createTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.description"></a>

- *Type:* `string`

---

##### `isRegisteredWithLakeFormation`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.isRegisteredWithLakeFormation"></a>

- *Type:* `boolean`

---

##### `lastAccessTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitionKeys`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `retention`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.retention"></a>

- *Type:* `number`

---

##### `storageDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor)

---

##### `tableType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.tableType"></a>

- *Type:* `string`

---

##### `targetTable`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.targetTable"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable)

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.updateTime"></a>

- *Type:* `string`

---

##### `viewExpandedText`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.viewExpandedText"></a>

- *Type:* `string`

---

##### `viewOriginalText`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTable.property.viewOriginalText"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableTableStorageDescriptor <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTableStorageDescriptor(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketColumns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.bucketColumns"></a>

- *Type:* `string`[]

---

##### `columns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.columns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `compressed`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.compressed"></a>

- *Type:* `boolean`

---

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.inputFormat"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.location"></a>

- *Type:* `string`

---

##### `numberOfBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.numberOfBuckets"></a>

- *Type:* `number`

---

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.outputFormat"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `schemaReference`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.schemaReference"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference)

---

##### `serdeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.serdeInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo)

---

##### `skewedInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.skewedInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo)

---

##### `sortColumns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.sortColumns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueOrder`](#aws-cdk-sdk.glue.GlueOrder)[]

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptor.property.storedAsSubDirectories"></a>

- *Type:* `boolean`

---


### GlueResponsesFetchTableTableStorageDescriptorSchemaReference <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId`](#aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId)

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

- *Type:* `number`

---


### GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableTableStorageDescriptorSerdeInfo <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serializationLibrary`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableTableStorageDescriptorSkewedInfo <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `skewedColumnNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

- *Type:* `string`[]

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `skewedColumnValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

- *Type:* `string`[]

---


### GlueResponsesFetchTableTableTargetTable <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableTableTargetTable(__scope: Construct, __resources: string[], __input: GlueGetTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableRequest`](#aws-cdk-sdk.glue.GlueGetTableRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.property.databaseName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableTableTargetTable.property.name"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableVersion <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersion"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersion.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersion(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `tableVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersion.property.tableVersion"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion)

---


### GlueResponsesFetchTableVersions <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersions(__scope: Construct, __resources: string[], __input: GlueGetTableVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionsRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `tableVersions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersions.property.tableVersions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTableVersion`](#aws-cdk-sdk.glue.GlueTableVersion)[]

---


### GlueResponsesFetchTableVersionTableVersion <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersion(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `table`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion.property.table"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable)

---

##### `versionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersion.property.versionId"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableVersionTableVersionTable <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTable(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.catalogId"></a>

- *Type:* `string`

---

##### `createdBy`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.createdBy"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.createTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.databaseName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.description"></a>

- *Type:* `string`

---

##### `isRegisteredWithLakeFormation`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.isRegisteredWithLakeFormation"></a>

- *Type:* `boolean`

---

##### `lastAccessTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.lastAccessTime"></a>

- *Type:* `string`

---

##### `lastAnalyzedTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.lastAnalyzedTime"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.name"></a>

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.owner"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `partitionKeys`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.partitionKeys"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `retention`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.retention"></a>

- *Type:* `number`

---

##### `storageDescriptor`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.storageDescriptor"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor)

---

##### `tableType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.tableType"></a>

- *Type:* `string`

---

##### `targetTable`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.targetTable"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable)

---

##### `updateTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.updateTime"></a>

- *Type:* `string`

---

##### `viewExpandedText`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.viewExpandedText"></a>

- *Type:* `string`

---

##### `viewOriginalText`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTable.property.viewOriginalText"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `bucketColumns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.bucketColumns"></a>

- *Type:* `string`[]

---

##### `columns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.columns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumn`](#aws-cdk-sdk.glue.GlueColumn)[]

---

##### `compressed`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.compressed"></a>

- *Type:* `boolean`

---

##### `inputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.inputFormat"></a>

- *Type:* `string`

---

##### `location`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.location"></a>

- *Type:* `string`

---

##### `numberOfBuckets`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.numberOfBuckets"></a>

- *Type:* `number`

---

##### `outputFormat`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.outputFormat"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `schemaReference`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.schemaReference"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference)

---

##### `serdeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.serdeInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo)

---

##### `skewedInfo`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.skewedInfo"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo)

---

##### `sortColumns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.sortColumns"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueOrder`](#aws-cdk-sdk.glue.GlueOrder)[]

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptor.property.storedAsSubDirectories"></a>

- *Type:* `boolean`

---


### GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `schemaId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.property.schemaId"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId`](#aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId)

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

- *Type:* `number`

---


### GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.property.name"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.property.parameters"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `serializationLibrary`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

- *Type:* `string`

---


### GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `skewedColumnNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

- *Type:* `string`[]

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `skewedColumnValues`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

- *Type:* `string`[]

---


### GlueResponsesFetchTableVersionTableVersionTableTargetTable <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable(__scope: Construct, __resources: string[], __input: GlueGetTableVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTableVersionRequest`](#aws-cdk-sdk.glue.GlueGetTableVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.property.catalogId"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.property.databaseName"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTableVersionTableVersionTableTargetTable.property.name"></a>

- *Type:* `string`

---


### GlueResponsesFetchTags <a name="aws-cdk-sdk.glue.GlueResponsesFetchTags"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTags.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTags(__scope: Construct, __resources: string[], __input: GlueGetTagsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTagsRequest`](#aws-cdk-sdk.glue.GlueGetTagsRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTags.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlueResponsesFetchTrigger <a name="aws-cdk-sdk.glue.GlueResponsesFetchTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTrigger(__scope: Construct, __resources: string[], __input: GlueGetTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTriggerRequest`](#aws-cdk-sdk.glue.GlueGetTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `trigger`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTrigger.property.trigger"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger`](#aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger)

---


### GlueResponsesFetchTriggers <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTriggers(__scope: Construct, __resources: string[], __input: GlueGetTriggersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTriggersRequest`](#aws-cdk-sdk.glue.GlueGetTriggersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers.property.nextToken"></a>

- *Type:* `string`

---

##### `triggers`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggers.property.triggers"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTrigger`](#aws-cdk-sdk.glue.GlueTrigger)[]

---


### GlueResponsesFetchTriggerTrigger <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTriggerTrigger(__scope: Construct, __resources: string[], __input: GlueGetTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTriggerRequest`](#aws-cdk-sdk.glue.GlueGetTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.actions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueAction`](#aws-cdk-sdk.glue.GlueAction)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.name"></a>

- *Type:* `string`

---

##### `predicate`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate`](#aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate)

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.schedule"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.type"></a>

- *Type:* `string`

---

##### `workflowName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTrigger.property.workflowName"></a>

- *Type:* `string`

---


### GlueResponsesFetchTriggerTriggerPredicate <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchTriggerTriggerPredicate(__scope: Construct, __resources: string[], __input: GlueGetTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetTriggerRequest`](#aws-cdk-sdk.glue.GlueGetTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `conditions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate.property.conditions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCondition`](#aws-cdk-sdk.glue.GlueCondition)[]

---

##### `logical`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchTriggerTriggerPredicate.property.logical"></a>

- *Type:* `string`

---


### GlueResponsesFetchUserDefinedFunction <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunction"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunction.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchUserDefinedFunction(__scope: Construct, __resources: string[], __input: GlueGetUserDefinedFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest`](#aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `userDefinedFunction`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunction.property.userDefinedFunction"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction`](#aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction)

---


### GlueResponsesFetchUserDefinedFunctions <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchUserDefinedFunctions(__scope: Construct, __resources: string[], __input: GlueGetUserDefinedFunctionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest`](#aws-cdk-sdk.glue.GlueGetUserDefinedFunctionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions.property.nextToken"></a>

- *Type:* `string`

---

##### `userDefinedFunctions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctions.property.userDefinedFunctions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUserDefinedFunction`](#aws-cdk-sdk.glue.GlueUserDefinedFunction)[]

---


### GlueResponsesFetchUserDefinedFunctionUserDefinedFunction <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction(__scope: Construct, __resources: string[], __input: GlueGetUserDefinedFunctionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest`](#aws-cdk-sdk.glue.GlueGetUserDefinedFunctionRequest)

---



#### Properties <a name="Properties"></a>

##### `catalogId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.catalogId"></a>

- *Type:* `string`

---

##### `className`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.className"></a>

- *Type:* `string`

---

##### `createTime`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.createTime"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.databaseName"></a>

- *Type:* `string`

---

##### `functionName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.functionName"></a>

- *Type:* `string`

---

##### `ownerName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.ownerName"></a>

- *Type:* `string`

---

##### `ownerType`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.ownerType"></a>

- *Type:* `string`

---

##### `resourceUris`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchUserDefinedFunctionUserDefinedFunction.property.resourceUris"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResourceUri`](#aws-cdk-sdk.glue.GlueResourceUri)[]

---


### GlueResponsesFetchWorkflow <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflow"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflow.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflow(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `workflow`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflow.property.workflow"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow)

---


### GlueResponsesFetchWorkflowRun <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowRun(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunRequest)

---



#### Properties <a name="Properties"></a>

##### `run`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRun.property.run"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun)

---


### GlueResponsesFetchWorkflowRunProperties <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunProperties"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunProperties.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowRunProperties(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRunPropertiesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunProperties.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunProperties.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunProperties.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunPropertiesRequest)

---



#### Properties <a name="Properties"></a>

##### `runProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunProperties.property.runProperties"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlueResponsesFetchWorkflowRunRun <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowRunRun(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunRequest)

---



#### Properties <a name="Properties"></a>

##### `completedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.errorMessage"></a>

- *Type:* `string`

---

##### `graph`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.graph"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.name"></a>

- *Type:* `string`

---

##### `previousRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.previousRunId"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.startedOn"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.status"></a>

- *Type:* `string`

---

##### `workflowRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.workflowRunId"></a>

- *Type:* `string`

---

##### `workflowRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRun.property.workflowRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlueResponsesFetchWorkflowRunRunGraph <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowRunRunGraph(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunRequest)

---



#### Properties <a name="Properties"></a>

##### `edges`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph.property.edges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEdge`](#aws-cdk-sdk.glue.GlueEdge)[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunGraph.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNode`](#aws-cdk-sdk.glue.GlueNode)[]

---


### GlueResponsesFetchWorkflowRunRunStatistics <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowRunRunStatistics(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunRequest)

---



#### Properties <a name="Properties"></a>

##### `failedActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.property.failedActions"></a>

- *Type:* `number`

---

##### `runningActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.property.runningActions"></a>

- *Type:* `number`

---

##### `stoppedActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.property.stoppedActions"></a>

- *Type:* `number`

---

##### `succeededActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.property.succeededActions"></a>

- *Type:* `number`

---

##### `timeoutActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.property.timeoutActions"></a>

- *Type:* `number`

---

##### `totalActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRunRunStatistics.property.totalActions"></a>

- *Type:* `number`

---


### GlueResponsesFetchWorkflowRuns <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowRuns(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRunsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRunsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns.property.nextToken"></a>

- *Type:* `string`

---

##### `runs`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowRuns.property.runs"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueWorkflowRun`](#aws-cdk-sdk.glue.GlueWorkflowRun)[]

---


### GlueResponsesFetchWorkflowWorkflow <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowWorkflow(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `createdOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.createdOn"></a>

- *Type:* `string`

---

##### `defaultRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.defaultRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.description"></a>

- *Type:* `string`

---

##### `graph`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.graph"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph)

---

##### `lastModifiedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.lastModifiedOn"></a>

- *Type:* `string`

---

##### `lastRun`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.lastRun"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun)

---

##### `maxConcurrentRuns`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.maxConcurrentRuns"></a>

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflow.property.name"></a>

- *Type:* `string`

---


### GlueResponsesFetchWorkflowWorkflowGraph <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowWorkflowGraph(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `edges`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph.property.edges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEdge`](#aws-cdk-sdk.glue.GlueEdge)[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowGraph.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNode`](#aws-cdk-sdk.glue.GlueNode)[]

---


### GlueResponsesFetchWorkflowWorkflowLastRun <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowWorkflowLastRun(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `completedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.completedOn"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.errorMessage"></a>

- *Type:* `string`

---

##### `graph`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.graph"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.name"></a>

- *Type:* `string`

---

##### `previousRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.previousRunId"></a>

- *Type:* `string`

---

##### `startedOn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.startedOn"></a>

- *Type:* `string`

---

##### `statistics`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.statistics"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics`](#aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics)

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.status"></a>

- *Type:* `string`

---

##### `workflowRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.workflowRunId"></a>

- *Type:* `string`

---

##### `workflowRunProperties`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRun.property.workflowRunProperties"></a>

- *Type:* {[ key: string ]: `string`}

---


### GlueResponsesFetchWorkflowWorkflowLastRunGraph <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `edges`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph.property.edges"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueEdge`](#aws-cdk-sdk.glue.GlueEdge)[]

---

##### `nodes`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunGraph.property.nodes"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueNode`](#aws-cdk-sdk.glue.GlueNode)[]

---


### GlueResponsesFetchWorkflowWorkflowLastRunStatistics <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics(__scope: Construct, __resources: string[], __input: GlueGetWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueGetWorkflowRequest`](#aws-cdk-sdk.glue.GlueGetWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `failedActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.property.failedActions"></a>

- *Type:* `number`

---

##### `runningActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.property.runningActions"></a>

- *Type:* `number`

---

##### `stoppedActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.property.stoppedActions"></a>

- *Type:* `number`

---

##### `succeededActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.property.succeededActions"></a>

- *Type:* `number`

---

##### `timeoutActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.property.timeoutActions"></a>

- *Type:* `number`

---

##### `totalActions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesFetchWorkflowWorkflowLastRunStatistics.property.totalActions"></a>

- *Type:* `number`

---


### GlueResponsesListCrawlers <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListCrawlers(__scope: Construct, __resources: string[], __input: GlueListCrawlersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListCrawlersRequest`](#aws-cdk-sdk.glue.GlueListCrawlersRequest)

---



#### Properties <a name="Properties"></a>

##### `crawlerNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers.property.crawlerNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListCrawlers.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesListDevEndpoints <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListDevEndpoints(__scope: Construct, __resources: string[], __input: GlueListDevEndpointsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListDevEndpointsRequest`](#aws-cdk-sdk.glue.GlueListDevEndpointsRequest)

---



#### Properties <a name="Properties"></a>

##### `devEndpointNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints.property.devEndpointNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListDevEndpoints.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesListJobs <a name="aws-cdk-sdk.glue.GlueResponsesListJobs"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListJobs.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListJobs(__scope: Construct, __resources: string[], __input: GlueListJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListJobsRequest`](#aws-cdk-sdk.glue.GlueListJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListJobs.property.jobNames"></a>

- *Type:* `string`[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListJobs.property.nextToken"></a>

- *Type:* `string`

---


### GlueResponsesListMlTransforms <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListMlTransforms(__scope: Construct, __resources: string[], __input: GlueListMlTransformsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListMlTransformsRequest`](#aws-cdk-sdk.glue.GlueListMlTransformsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms.property.nextToken"></a>

- *Type:* `string`

---

##### `transformIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListMlTransforms.property.transformIds"></a>

- *Type:* `string`[]

---


### GlueResponsesListRegistries <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListRegistries(__scope: Construct, __resources: string[], __input: GlueListRegistriesInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListRegistriesInput`](#aws-cdk-sdk.glue.GlueListRegistriesInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries.property.nextToken"></a>

- *Type:* `string`

---

##### `registries`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListRegistries.property.registries"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegistryListItem`](#aws-cdk-sdk.glue.GlueRegistryListItem)[]

---


### GlueResponsesListSchemas <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListSchemas(__scope: Construct, __resources: string[], __input: GlueListSchemasInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListSchemasInput`](#aws-cdk-sdk.glue.GlueListSchemasInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemas.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaListItem`](#aws-cdk-sdk.glue.GlueSchemaListItem)[]

---


### GlueResponsesListSchemaVersions <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListSchemaVersions(__scope: Construct, __resources: string[], __input: GlueListSchemaVersionsInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListSchemaVersionsInput`](#aws-cdk-sdk.glue.GlueListSchemaVersionsInput)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions.property.nextToken"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListSchemaVersions.property.schemas"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSchemaVersionListItem`](#aws-cdk-sdk.glue.GlueSchemaVersionListItem)[]

---


### GlueResponsesListTriggers <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListTriggers(__scope: Construct, __resources: string[], __input: GlueListTriggersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListTriggersRequest`](#aws-cdk-sdk.glue.GlueListTriggersRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers.property.nextToken"></a>

- *Type:* `string`

---

##### `triggerNames`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListTriggers.property.triggerNames"></a>

- *Type:* `string`[]

---


### GlueResponsesListWorkflows <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesListWorkflows(__scope: Construct, __resources: string[], __input: GlueListWorkflowsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueListWorkflowsRequest`](#aws-cdk-sdk.glue.GlueListWorkflowsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows.property.nextToken"></a>

- *Type:* `string`

---

##### `workflows`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesListWorkflows.property.workflows"></a>

- *Type:* `string`[]

---


### GlueResponsesPutResourcePolicy <a name="aws-cdk-sdk.glue.GlueResponsesPutResourcePolicy"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesPutResourcePolicy.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesPutResourcePolicy(__scope: Construct, __resources: string[], __input: GluePutResourcePolicyRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutResourcePolicy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutResourcePolicy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutResourcePolicy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePutResourcePolicyRequest`](#aws-cdk-sdk.glue.GluePutResourcePolicyRequest)

---



#### Properties <a name="Properties"></a>

##### `policyHash`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutResourcePolicy.property.policyHash"></a>

- *Type:* `string`

---


### GlueResponsesPutSchemaVersionMetadata <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesPutSchemaVersionMetadata(__scope: Construct, __resources: string[], __input: GluePutSchemaVersionMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput`](#aws-cdk-sdk.glue.GluePutSchemaVersionMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.latestVersion"></a>

- *Type:* `boolean`

---

##### `metadataKey`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.metadataKey"></a>

- *Type:* `string`

---

##### `metadataValue`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.metadataValue"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesPutSchemaVersionMetadata.property.versionNumber"></a>

- *Type:* `number`

---


### GlueResponsesQuerySchemaVersionMetadata <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesQuerySchemaVersionMetadata(__scope: Construct, __resources: string[], __input: GlueQuerySchemaVersionMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput`](#aws-cdk-sdk.glue.GlueQuerySchemaVersionMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `metadataInfoMap`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.property.metadataInfoMap"></a>

- *Type:* {[ key: string ]: [`aws-cdk-sdk.glue.GlueMetadataInfo`](#aws-cdk-sdk.glue.GlueMetadataInfo)}

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.property.nextToken"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesQuerySchemaVersionMetadata.property.schemaVersionId"></a>

- *Type:* `string`

---


### GlueResponsesRegisterSchemaVersion <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesRegisterSchemaVersion(__scope: Construct, __resources: string[], __input: GlueRegisterSchemaVersionInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput`](#aws-cdk-sdk.glue.GlueRegisterSchemaVersionInput)

---



#### Properties <a name="Properties"></a>

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.property.status"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRegisterSchemaVersion.property.versionNumber"></a>

- *Type:* `number`

---


### GlueResponsesRemoveSchemaVersionMetadata <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesRemoveSchemaVersionMetadata(__scope: Construct, __resources: string[], __input: GlueRemoveSchemaVersionMetadataInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput`](#aws-cdk-sdk.glue.GlueRemoveSchemaVersionMetadataInput)

---



#### Properties <a name="Properties"></a>

##### `latestVersion`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.latestVersion"></a>

- *Type:* `boolean`

---

##### `metadataKey`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.metadataKey"></a>

- *Type:* `string`

---

##### `metadataValue`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.metadataValue"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.schemaName"></a>

- *Type:* `string`

---

##### `schemaVersionId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.schemaVersionId"></a>

- *Type:* `string`

---

##### `versionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesRemoveSchemaVersionMetadata.property.versionNumber"></a>

- *Type:* `number`

---


### GlueResponsesResetJobBookmark <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmark"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmark.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesResetJobBookmark(__scope: Construct, __resources: string[], __input: GlueResetJobBookmarkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmark.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmark.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmark.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResetJobBookmarkRequest`](#aws-cdk-sdk.glue.GlueResetJobBookmarkRequest)

---



#### Properties <a name="Properties"></a>

##### `jobBookmarkEntry`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmark.property.jobBookmarkEntry"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry`](#aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry)

---


### GlueResponsesResetJobBookmarkJobBookmarkEntry <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesResetJobBookmarkJobBookmarkEntry(__scope: Construct, __resources: string[], __input: GlueResetJobBookmarkRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResetJobBookmarkRequest`](#aws-cdk-sdk.glue.GlueResetJobBookmarkRequest)

---



#### Properties <a name="Properties"></a>

##### `attempt`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.attempt"></a>

- *Type:* `number`

---

##### `jobBookmark`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.jobBookmark"></a>

- *Type:* `string`

---

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.jobName"></a>

- *Type:* `string`

---

##### `previousRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.previousRunId"></a>

- *Type:* `string`

---

##### `run`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.run"></a>

- *Type:* `number`

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.runId"></a>

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResetJobBookmarkJobBookmarkEntry.property.version"></a>

- *Type:* `number`

---


### GlueResponsesResumeWorkflowRun <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesResumeWorkflowRun(__scope: Construct, __resources: string[], __input: GlueResumeWorkflowRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueResumeWorkflowRunRequest)

---



#### Properties <a name="Properties"></a>

##### `nodeIds`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun.property.nodeIds"></a>

- *Type:* `string`[]

---

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesResumeWorkflowRun.property.runId"></a>

- *Type:* `string`

---


### GlueResponsesSearchTables <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesSearchTables(__scope: Construct, __resources: string[], __input: GlueSearchTablesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueSearchTablesRequest`](#aws-cdk-sdk.glue.GlueSearchTablesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables.property.nextToken"></a>

- *Type:* `string`

---

##### `tableList`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesSearchTables.property.tableList"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueTable`](#aws-cdk-sdk.glue.GlueTable)[]

---


### GlueResponsesStartExportLabelsTaskRun <a name="aws-cdk-sdk.glue.GlueResponsesStartExportLabelsTaskRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartExportLabelsTaskRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartExportLabelsTaskRun(__scope: Construct, __resources: string[], __input: GlueStartExportLabelsTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartExportLabelsTaskRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartExportLabelsTaskRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartExportLabelsTaskRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartExportLabelsTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartExportLabelsTaskRun.property.taskRunId"></a>

- *Type:* `string`

---


### GlueResponsesStartImportLabelsTaskRun <a name="aws-cdk-sdk.glue.GlueResponsesStartImportLabelsTaskRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartImportLabelsTaskRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartImportLabelsTaskRun(__scope: Construct, __resources: string[], __input: GlueStartImportLabelsTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartImportLabelsTaskRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartImportLabelsTaskRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartImportLabelsTaskRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartImportLabelsTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartImportLabelsTaskRun.property.taskRunId"></a>

- *Type:* `string`

---


### GlueResponsesStartJobRun <a name="aws-cdk-sdk.glue.GlueResponsesStartJobRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartJobRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartJobRun(__scope: Construct, __resources: string[], __input: GlueStartJobRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartJobRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartJobRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartJobRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartJobRunRequest`](#aws-cdk-sdk.glue.GlueStartJobRunRequest)

---



#### Properties <a name="Properties"></a>

##### `jobRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartJobRun.property.jobRunId"></a>

- *Type:* `string`

---


### GlueResponsesStartMlEvaluationTaskRun <a name="aws-cdk-sdk.glue.GlueResponsesStartMlEvaluationTaskRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartMlEvaluationTaskRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartMlEvaluationTaskRun(__scope: Construct, __resources: string[], __input: GlueStartMlEvaluationTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlEvaluationTaskRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlEvaluationTaskRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlEvaluationTaskRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartMlEvaluationTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlEvaluationTaskRun.property.taskRunId"></a>

- *Type:* `string`

---


### GlueResponsesStartMlLabelingSetGenerationTaskRun <a name="aws-cdk-sdk.glue.GlueResponsesStartMlLabelingSetGenerationTaskRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartMlLabelingSetGenerationTaskRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartMlLabelingSetGenerationTaskRun(__scope: Construct, __resources: string[], __input: GlueStartMlLabelingSetGenerationTaskRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlLabelingSetGenerationTaskRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlLabelingSetGenerationTaskRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlLabelingSetGenerationTaskRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest`](#aws-cdk-sdk.glue.GlueStartMlLabelingSetGenerationTaskRunRequest)

---



#### Properties <a name="Properties"></a>

##### `taskRunId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartMlLabelingSetGenerationTaskRun.property.taskRunId"></a>

- *Type:* `string`

---


### GlueResponsesStartTrigger <a name="aws-cdk-sdk.glue.GlueResponsesStartTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartTrigger(__scope: Construct, __resources: string[], __input: GlueStartTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartTriggerRequest`](#aws-cdk-sdk.glue.GlueStartTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartTrigger.property.name"></a>

- *Type:* `string`

---


### GlueResponsesStartWorkflowRun <a name="aws-cdk-sdk.glue.GlueResponsesStartWorkflowRun"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStartWorkflowRun.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStartWorkflowRun(__scope: Construct, __resources: string[], __input: GlueStartWorkflowRunRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartWorkflowRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartWorkflowRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartWorkflowRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStartWorkflowRunRequest`](#aws-cdk-sdk.glue.GlueStartWorkflowRunRequest)

---



#### Properties <a name="Properties"></a>

##### `runId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStartWorkflowRun.property.runId"></a>

- *Type:* `string`

---


### GlueResponsesStopTrigger <a name="aws-cdk-sdk.glue.GlueResponsesStopTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesStopTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesStopTrigger(__scope: Construct, __resources: string[], __input: GlueStopTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStopTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStopTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStopTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueStopTriggerRequest`](#aws-cdk-sdk.glue.GlueStopTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesStopTrigger.property.name"></a>

- *Type:* `string`

---


### GlueResponsesUpdateColumnStatisticsForPartition <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForPartition"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForPartition.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateColumnStatisticsForPartition(__scope: Construct, __resources: string[], __input: GlueUpdateColumnStatisticsForPartitionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForPartition.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForPartition.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForPartition.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest`](#aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForPartitionRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForPartition.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatisticsError`](#aws-cdk-sdk.glue.GlueColumnStatisticsError)[]

---


### GlueResponsesUpdateColumnStatisticsForTable <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForTable"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForTable.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateColumnStatisticsForTable(__scope: Construct, __resources: string[], __input: GlueUpdateColumnStatisticsForTableRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForTable.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForTable.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForTable.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest`](#aws-cdk-sdk.glue.GlueUpdateColumnStatisticsForTableRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateColumnStatisticsForTable.property.errors"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueColumnStatisticsError`](#aws-cdk-sdk.glue.GlueColumnStatisticsError)[]

---


### GlueResponsesUpdateJob <a name="aws-cdk-sdk.glue.GlueResponsesUpdateJob"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateJob.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateJob(__scope: Construct, __resources: string[], __input: GlueUpdateJobRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateJob.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateJob.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateJob.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateJobRequest`](#aws-cdk-sdk.glue.GlueUpdateJobRequest)

---



#### Properties <a name="Properties"></a>

##### `jobName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateJob.property.jobName"></a>

- *Type:* `string`

---


### GlueResponsesUpdateMlTransform <a name="aws-cdk-sdk.glue.GlueResponsesUpdateMlTransform"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateMlTransform.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateMlTransform(__scope: Construct, __resources: string[], __input: GlueUpdateMlTransformRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateMlTransform.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateMlTransform.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateMlTransform.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateMlTransformRequest`](#aws-cdk-sdk.glue.GlueUpdateMlTransformRequest)

---



#### Properties <a name="Properties"></a>

##### `transformId`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateMlTransform.property.transformId"></a>

- *Type:* `string`

---


### GlueResponsesUpdateRegistry <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateRegistry(__scope: Construct, __resources: string[], __input: GlueUpdateRegistryInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateRegistryInput`](#aws-cdk-sdk.glue.GlueUpdateRegistryInput)

---



#### Properties <a name="Properties"></a>

##### `registryArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry.property.registryArn"></a>

- *Type:* `string`

---

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateRegistry.property.registryName"></a>

- *Type:* `string`

---


### GlueResponsesUpdateSchema <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateSchema(__scope: Construct, __resources: string[], __input: GlueUpdateSchemaInput)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateSchemaInput`](#aws-cdk-sdk.glue.GlueUpdateSchemaInput)

---



#### Properties <a name="Properties"></a>

##### `registryName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.property.registryName"></a>

- *Type:* `string`

---

##### `schemaArn`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.property.schemaArn"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateSchema.property.schemaName"></a>

- *Type:* `string`

---


### GlueResponsesUpdateTrigger <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateTrigger(__scope: Construct, __resources: string[], __input: GlueUpdateTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateTriggerRequest`](#aws-cdk-sdk.glue.GlueUpdateTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `trigger`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTrigger.property.trigger"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger`](#aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger)

---


### GlueResponsesUpdateTriggerTrigger <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateTriggerTrigger(__scope: Construct, __resources: string[], __input: GlueUpdateTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateTriggerRequest`](#aws-cdk-sdk.glue.GlueUpdateTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `actions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.actions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueAction`](#aws-cdk-sdk.glue.GlueAction)[]

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.description"></a>

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.id"></a>

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.name"></a>

- *Type:* `string`

---

##### `predicate`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.predicate"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate`](#aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate)

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.schedule"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.state"></a>

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.type"></a>

- *Type:* `string`

---

##### `workflowName`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTrigger.property.workflowName"></a>

- *Type:* `string`

---


### GlueResponsesUpdateTriggerTriggerPredicate <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateTriggerTriggerPredicate(__scope: Construct, __resources: string[], __input: GlueUpdateTriggerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateTriggerRequest`](#aws-cdk-sdk.glue.GlueUpdateTriggerRequest)

---



#### Properties <a name="Properties"></a>

##### `conditions`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate.property.conditions"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueCondition`](#aws-cdk-sdk.glue.GlueCondition)[]

---

##### `logical`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateTriggerTriggerPredicate.property.logical"></a>

- *Type:* `string`

---


### GlueResponsesUpdateWorkflow <a name="aws-cdk-sdk.glue.GlueResponsesUpdateWorkflow"></a>

#### Initializer <a name="aws-cdk-sdk.glue.GlueResponsesUpdateWorkflow.Initializer"></a>

```typescript
import { glue } from 'aws-cdk-sdk'

new glue.GlueResponsesUpdateWorkflow(__scope: Construct, __resources: string[], __input: GlueUpdateWorkflowRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateWorkflow.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateWorkflow.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateWorkflow.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.glue.GlueUpdateWorkflowRequest`](#aws-cdk-sdk.glue.GlueUpdateWorkflowRequest)

---



#### Properties <a name="Properties"></a>

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.glue.GlueResponsesUpdateWorkflow.property.name"></a>

- *Type:* `string`

---



