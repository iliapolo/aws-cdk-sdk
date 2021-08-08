# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### DmsClient <a name="aws-cdk-sdk.dms.DmsClient"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DmsClient.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DmsClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `addTagsToResource` <a name="aws-cdk-sdk.dms.DmsClient.addTagsToResource"></a>

```typescript
public addTagsToResource(input: DmsAddTagsToResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsAddTagsToResourceMessage`](#aws-cdk-sdk.dms.DmsAddTagsToResourceMessage)

---

##### `applyPendingMaintenanceAction` <a name="aws-cdk-sdk.dms.DmsClient.applyPendingMaintenanceAction"></a>

```typescript
public applyPendingMaintenanceAction(input: DmsApplyPendingMaintenanceActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage)

---

##### `cancelReplicationTaskAssessmentRun` <a name="aws-cdk-sdk.dms.DmsClient.cancelReplicationTaskAssessmentRun"></a>

```typescript
public cancelReplicationTaskAssessmentRun(input: DmsCancelReplicationTaskAssessmentRunMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage)

---

##### `createEndpoint` <a name="aws-cdk-sdk.dms.DmsClient.createEndpoint"></a>

```typescript
public createEndpoint(input: DmsCreateEndpointMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---

##### `createEventSubscription` <a name="aws-cdk-sdk.dms.DmsClient.createEventSubscription"></a>

```typescript
public createEventSubscription(input: DmsCreateEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage)

---

##### `createReplicationInstance` <a name="aws-cdk-sdk.dms.DmsClient.createReplicationInstance"></a>

```typescript
public createReplicationInstance(input: DmsCreateReplicationInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage)

---

##### `createReplicationSubnetGroup` <a name="aws-cdk-sdk.dms.DmsClient.createReplicationSubnetGroup"></a>

```typescript
public createReplicationSubnetGroup(input: DmsCreateReplicationSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage)

---

##### `createReplicationTask` <a name="aws-cdk-sdk.dms.DmsClient.createReplicationTask"></a>

```typescript
public createReplicationTask(input: DmsCreateReplicationTaskMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage)

---

##### `deleteCertificate` <a name="aws-cdk-sdk.dms.DmsClient.deleteCertificate"></a>

```typescript
public deleteCertificate(input: DmsDeleteCertificateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteCertificateMessage`](#aws-cdk-sdk.dms.DmsDeleteCertificateMessage)

---

##### `deleteConnection` <a name="aws-cdk-sdk.dms.DmsClient.deleteConnection"></a>

```typescript
public deleteConnection(input: DmsDeleteConnectionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteConnectionMessage`](#aws-cdk-sdk.dms.DmsDeleteConnectionMessage)

---

##### `deleteEndpoint` <a name="aws-cdk-sdk.dms.DmsClient.deleteEndpoint"></a>

```typescript
public deleteEndpoint(input: DmsDeleteEndpointMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---

##### `deleteEventSubscription` <a name="aws-cdk-sdk.dms.DmsClient.deleteEventSubscription"></a>

```typescript
public deleteEventSubscription(input: DmsDeleteEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage)

---

##### `deleteReplicationInstance` <a name="aws-cdk-sdk.dms.DmsClient.deleteReplicationInstance"></a>

```typescript
public deleteReplicationInstance(input: DmsDeleteReplicationInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage)

---

##### `deleteReplicationSubnetGroup` <a name="aws-cdk-sdk.dms.DmsClient.deleteReplicationSubnetGroup"></a>

```typescript
public deleteReplicationSubnetGroup(input: DmsDeleteReplicationSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationSubnetGroupMessage)

---

##### `deleteReplicationTask` <a name="aws-cdk-sdk.dms.DmsClient.deleteReplicationTask"></a>

```typescript
public deleteReplicationTask(input: DmsDeleteReplicationTaskMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage)

---

##### `deleteReplicationTaskAssessmentRun` <a name="aws-cdk-sdk.dms.DmsClient.deleteReplicationTaskAssessmentRun"></a>

```typescript
public deleteReplicationTaskAssessmentRun(input: DmsDeleteReplicationTaskAssessmentRunMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage)

---

##### `describeAccountAttributes` <a name="aws-cdk-sdk.dms.DmsClient.describeAccountAttributes"></a>

```typescript
public describeAccountAttributes()
```

##### `describeApplicableIndividualAssessments` <a name="aws-cdk-sdk.dms.DmsClient.describeApplicableIndividualAssessments"></a>

```typescript
public describeApplicableIndividualAssessments(input: DmsDescribeApplicableIndividualAssessmentsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage`](#aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage)

---

##### `describeCertificates` <a name="aws-cdk-sdk.dms.DmsClient.describeCertificates"></a>

```typescript
public describeCertificates(input: DmsDescribeCertificatesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeCertificatesMessage`](#aws-cdk-sdk.dms.DmsDescribeCertificatesMessage)

---

##### `describeConnections` <a name="aws-cdk-sdk.dms.DmsClient.describeConnections"></a>

```typescript
public describeConnections(input: DmsDescribeConnectionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeConnectionsMessage`](#aws-cdk-sdk.dms.DmsDescribeConnectionsMessage)

---

##### `describeEndpoints` <a name="aws-cdk-sdk.dms.DmsClient.describeEndpoints"></a>

```typescript
public describeEndpoints(input: DmsDescribeEndpointsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEndpointsMessage`](#aws-cdk-sdk.dms.DmsDescribeEndpointsMessage)

---

##### `describeEndpointTypes` <a name="aws-cdk-sdk.dms.DmsClient.describeEndpointTypes"></a>

```typescript
public describeEndpointTypes(input: DmsDescribeEndpointTypesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage`](#aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage)

---

##### `describeEventCategories` <a name="aws-cdk-sdk.dms.DmsClient.describeEventCategories"></a>

```typescript
public describeEventCategories(input: DmsDescribeEventCategoriesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage`](#aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage)

---

##### `describeEvents` <a name="aws-cdk-sdk.dms.DmsClient.describeEvents"></a>

```typescript
public describeEvents(input: DmsDescribeEventsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEventsMessage`](#aws-cdk-sdk.dms.DmsDescribeEventsMessage)

---

##### `describeEventSubscriptions` <a name="aws-cdk-sdk.dms.DmsClient.describeEventSubscriptions"></a>

```typescript
public describeEventSubscriptions(input: DmsDescribeEventSubscriptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage`](#aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage)

---

##### `describeOrderableReplicationInstances` <a name="aws-cdk-sdk.dms.DmsClient.describeOrderableReplicationInstances"></a>

```typescript
public describeOrderableReplicationInstances(input: DmsDescribeOrderableReplicationInstancesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage`](#aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage)

---

##### `describePendingMaintenanceActions` <a name="aws-cdk-sdk.dms.DmsClient.describePendingMaintenanceActions"></a>

```typescript
public describePendingMaintenanceActions(input: DmsDescribePendingMaintenanceActionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage`](#aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage)

---

##### `describeRefreshSchemasStatus` <a name="aws-cdk-sdk.dms.DmsClient.describeRefreshSchemasStatus"></a>

```typescript
public describeRefreshSchemasStatus(input: DmsDescribeRefreshSchemasStatusMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage`](#aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage)

---

##### `describeReplicationInstances` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationInstances"></a>

```typescript
public describeReplicationInstances(input: DmsDescribeReplicationInstancesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage)

---

##### `describeReplicationInstanceTaskLogs` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationInstanceTaskLogs"></a>

```typescript
public describeReplicationInstanceTaskLogs(input: DmsDescribeReplicationInstanceTaskLogsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage)

---

##### `describeReplicationSubnetGroups` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationSubnetGroups"></a>

```typescript
public describeReplicationSubnetGroups(input: DmsDescribeReplicationSubnetGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage)

---

##### `describeReplicationTaskAssessmentResults` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationTaskAssessmentResults"></a>

```typescript
public describeReplicationTaskAssessmentResults(input: DmsDescribeReplicationTaskAssessmentResultsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage)

---

##### `describeReplicationTaskAssessmentRuns` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationTaskAssessmentRuns"></a>

```typescript
public describeReplicationTaskAssessmentRuns(input: DmsDescribeReplicationTaskAssessmentRunsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage)

---

##### `describeReplicationTaskIndividualAssessments` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationTaskIndividualAssessments"></a>

```typescript
public describeReplicationTaskIndividualAssessments(input: DmsDescribeReplicationTaskIndividualAssessmentsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage)

---

##### `describeReplicationTasks` <a name="aws-cdk-sdk.dms.DmsClient.describeReplicationTasks"></a>

```typescript
public describeReplicationTasks(input: DmsDescribeReplicationTasksMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage)

---

##### `describeSchemas` <a name="aws-cdk-sdk.dms.DmsClient.describeSchemas"></a>

```typescript
public describeSchemas(input: DmsDescribeSchemasMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeSchemasMessage`](#aws-cdk-sdk.dms.DmsDescribeSchemasMessage)

---

##### `describeTableStatistics` <a name="aws-cdk-sdk.dms.DmsClient.describeTableStatistics"></a>

```typescript
public describeTableStatistics(input: DmsDescribeTableStatisticsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage`](#aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage)

---

##### `importCertificate` <a name="aws-cdk-sdk.dms.DmsClient.importCertificate"></a>

```typescript
public importCertificate(input: DmsImportCertificateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsImportCertificateMessage`](#aws-cdk-sdk.dms.DmsImportCertificateMessage)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.dms.DmsClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: DmsListTagsForResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsListTagsForResourceMessage`](#aws-cdk-sdk.dms.DmsListTagsForResourceMessage)

---

##### `modifyEndpoint` <a name="aws-cdk-sdk.dms.DmsClient.modifyEndpoint"></a>

```typescript
public modifyEndpoint(input: DmsModifyEndpointMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---

##### `modifyEventSubscription` <a name="aws-cdk-sdk.dms.DmsClient.modifyEventSubscription"></a>

```typescript
public modifyEventSubscription(input: DmsModifyEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage)

---

##### `modifyReplicationInstance` <a name="aws-cdk-sdk.dms.DmsClient.modifyReplicationInstance"></a>

```typescript
public modifyReplicationInstance(input: DmsModifyReplicationInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage)

---

##### `modifyReplicationSubnetGroup` <a name="aws-cdk-sdk.dms.DmsClient.modifyReplicationSubnetGroup"></a>

```typescript
public modifyReplicationSubnetGroup(input: DmsModifyReplicationSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage)

---

##### `modifyReplicationTask` <a name="aws-cdk-sdk.dms.DmsClient.modifyReplicationTask"></a>

```typescript
public modifyReplicationTask(input: DmsModifyReplicationTaskMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage)

---

##### `moveReplicationTask` <a name="aws-cdk-sdk.dms.DmsClient.moveReplicationTask"></a>

```typescript
public moveReplicationTask(input: DmsMoveReplicationTaskMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage)

---

##### `rebootReplicationInstance` <a name="aws-cdk-sdk.dms.DmsClient.rebootReplicationInstance"></a>

```typescript
public rebootReplicationInstance(input: DmsRebootReplicationInstanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage)

---

##### `refreshSchemas` <a name="aws-cdk-sdk.dms.DmsClient.refreshSchemas"></a>

```typescript
public refreshSchemas(input: DmsRefreshSchemasMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRefreshSchemasMessage`](#aws-cdk-sdk.dms.DmsRefreshSchemasMessage)

---

##### `reloadTables` <a name="aws-cdk-sdk.dms.DmsClient.reloadTables"></a>

```typescript
public reloadTables(input: DmsReloadTablesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReloadTablesMessage`](#aws-cdk-sdk.dms.DmsReloadTablesMessage)

---

##### `removeTagsFromResource` <a name="aws-cdk-sdk.dms.DmsClient.removeTagsFromResource"></a>

```typescript
public removeTagsFromResource(input: DmsRemoveTagsFromResourceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRemoveTagsFromResourceMessage`](#aws-cdk-sdk.dms.DmsRemoveTagsFromResourceMessage)

---

##### `startReplicationTask` <a name="aws-cdk-sdk.dms.DmsClient.startReplicationTask"></a>

```typescript
public startReplicationTask(input: DmsStartReplicationTaskMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskMessage)

---

##### `startReplicationTaskAssessment` <a name="aws-cdk-sdk.dms.DmsClient.startReplicationTaskAssessment"></a>

```typescript
public startReplicationTaskAssessment(input: DmsStartReplicationTaskAssessmentMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage)

---

##### `startReplicationTaskAssessmentRun` <a name="aws-cdk-sdk.dms.DmsClient.startReplicationTaskAssessmentRun"></a>

```typescript
public startReplicationTaskAssessmentRun(input: DmsStartReplicationTaskAssessmentRunMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage)

---

##### `stopReplicationTask` <a name="aws-cdk-sdk.dms.DmsClient.stopReplicationTask"></a>

```typescript
public stopReplicationTask(input: DmsStopReplicationTaskMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStopReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStopReplicationTaskMessage)

---

##### `testConnection` <a name="aws-cdk-sdk.dms.DmsClient.testConnection"></a>

```typescript
public testConnection(input: DmsTestConnectionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTestConnectionMessage`](#aws-cdk-sdk.dms.DmsTestConnectionMessage)

---




## Structs <a name="Structs"></a>

### DmsAccountQuota <a name="aws-cdk-sdk.dms.DmsAccountQuota"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsAccountQuota: dms.DmsAccountQuota = { ... }
```

##### `accountQuotaName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsAccountQuota.property.accountQuotaName"></a>

- *Type:* `string`

---

##### `max`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsAccountQuota.property.max"></a>

- *Type:* `number`

---

##### `used`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsAccountQuota.property.used"></a>

- *Type:* `number`

---

### DmsAddTagsToResourceMessage <a name="aws-cdk-sdk.dms.DmsAddTagsToResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsAddTagsToResourceMessage: dms.DmsAddTagsToResourceMessage = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsAddTagsToResourceMessage.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsAddTagsToResourceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

### DmsAddTagsToResourceResponse <a name="aws-cdk-sdk.dms.DmsAddTagsToResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsAddTagsToResourceResponse: dms.DmsAddTagsToResourceResponse = { ... }
```

### DmsApplyPendingMaintenanceActionMessage <a name="aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsApplyPendingMaintenanceActionMessage: dms.DmsApplyPendingMaintenanceActionMessage = { ... }
```

##### `applyAction`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage.property.applyAction"></a>

- *Type:* `string`

---

##### `optInType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage.property.optInType"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

### DmsApplyPendingMaintenanceActionResponse <a name="aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsApplyPendingMaintenanceActionResponse: dms.DmsApplyPendingMaintenanceActionResponse = { ... }
```

##### `resourcePendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionResponse.property.resourcePendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions`](#aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions)

---

### DmsAvailabilityZone <a name="aws-cdk-sdk.dms.DmsAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsAvailabilityZone: dms.DmsAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsAvailabilityZone.property.name"></a>

- *Type:* `string`

---

### DmsCancelReplicationTaskAssessmentRunMessage <a name="aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCancelReplicationTaskAssessmentRunMessage: dms.DmsCancelReplicationTaskAssessmentRunMessage = { ... }
```

##### `replicationTaskAssessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

### DmsCancelReplicationTaskAssessmentRunResponse <a name="aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCancelReplicationTaskAssessmentRunResponse: dms.DmsCancelReplicationTaskAssessmentRunResponse = { ... }
```

##### `replicationTaskAssessmentRun`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunResponse.property.replicationTaskAssessmentRun"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun)

---

### DmsCertificate <a name="aws-cdk-sdk.dms.DmsCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCertificate: dms.DmsCertificate = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateCreationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.certificateCreationDate"></a>

- *Type:* `string`

---

##### `certificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.certificateIdentifier"></a>

- *Type:* `string`

---

##### `certificateOwner`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.certificateOwner"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.certificatePem"></a>

- *Type:* `string`

---

##### `certificateWallet`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.certificateWallet"></a>

- *Type:* `any`

---

##### `keyLength`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.keyLength"></a>

- *Type:* `number`

---

##### `signingAlgorithm`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `validFromDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.validFromDate"></a>

- *Type:* `string`

---

##### `validToDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCertificate.property.validToDate"></a>

- *Type:* `string`

---

### DmsConnection <a name="aws-cdk-sdk.dms.DmsConnection"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsConnection: dms.DmsConnection = { ... }
```

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsConnection.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsConnection.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsConnection.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsConnection.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsConnection.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsConnection.property.status"></a>

- *Type:* `string`

---

### DmsCreateEndpointMessage <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateEndpointMessage: dms.DmsCreateEndpointMessage = { ... }
```

##### `endpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.endpointType"></a>

- *Type:* `string`

---

##### `engineName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.engineName"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.certificateArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.databaseName"></a>

- *Type:* `string`

---

##### `dmsTransferSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.dmsTransferSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDmsTransferSettings`](#aws-cdk-sdk.dms.DmsDmsTransferSettings)

---

##### `docDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.docDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDocDbSettings`](#aws-cdk-sdk.dms.DmsDocDbSettings)

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.dynamoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDynamoDbSettings`](#aws-cdk-sdk.dms.DmsDynamoDbSettings)

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.elasticsearchSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsElasticsearchSettings`](#aws-cdk-sdk.dms.DmsElasticsearchSettings)

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.extraConnectionAttributes"></a>

- *Type:* `string`

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.ibmDb2Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsibmDb2Settings`](#aws-cdk-sdk.dms.DmsibmDb2Settings)

---

##### `kafkaSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.kafkaSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsKafkaSettings`](#aws-cdk-sdk.dms.DmsKafkaSettings)

---

##### `kinesisSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.kinesisSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsKinesisSettings`](#aws-cdk-sdk.dms.DmsKinesisSettings)

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.microsoftSqlServerSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings`](#aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings)

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.mongoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMongoDbSettings`](#aws-cdk-sdk.dms.DmsMongoDbSettings)

---

##### `mySqlSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.mySqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMySqlSettings`](#aws-cdk-sdk.dms.DmsMySqlSettings)

---

##### `neptuneSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.neptuneSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsNeptuneSettings`](#aws-cdk-sdk.dms.DmsNeptuneSettings)

---

##### `oracleSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.oracleSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsOracleSettings`](#aws-cdk-sdk.dms.DmsOracleSettings)

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.port"></a>

- *Type:* `number`

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.postgreSqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsPostgreSqlSettings`](#aws-cdk-sdk.dms.DmsPostgreSqlSettings)

---

##### `redshiftSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.redshiftSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRedshiftSettings`](#aws-cdk-sdk.dms.DmsRedshiftSettings)

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

##### `s3Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.s3Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.Dmss3Settings`](#aws-cdk-sdk.dms.Dmss3Settings)

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.serverName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `sslMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.sslMode"></a>

- *Type:* `string`

---

##### `sybaseSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.sybaseSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSybaseSettings`](#aws-cdk-sdk.dms.DmsSybaseSettings)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointMessage.property.username"></a>

- *Type:* `string`

---

### DmsCreateEndpointResponse <a name="aws-cdk-sdk.dms.DmsCreateEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateEndpointResponse: dms.DmsCreateEndpointResponse = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEndpointResponse.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEndpoint`](#aws-cdk-sdk.dms.DmsEndpoint)

---

### DmsCreateEventSubscriptionMessage <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateEventSubscriptionMessage: dms.DmsCreateEventSubscriptionMessage = { ... }
```

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `sourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.sourceIds"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

### DmsCreateEventSubscriptionResponse <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateEventSubscriptionResponse: dms.DmsCreateEventSubscriptionResponse = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateEventSubscriptionResponse.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventSubscription`](#aws-cdk-sdk.dms.DmsEventSubscription)

---

### DmsCreateReplicationInstanceMessage <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateReplicationInstanceMessage: dms.DmsCreateReplicationInstanceMessage = { ... }
```

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dnsNameServers`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.dnsNameServers"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.multiAz"></a>

- *Type:* `boolean`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `replicationSubnetGroupIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### DmsCreateReplicationInstanceResponse <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateReplicationInstanceResponse: dms.DmsCreateReplicationInstanceResponse = { ... }
```

##### `replicationInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationInstanceResponse.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstance`](#aws-cdk-sdk.dms.DmsReplicationInstance)

---

### DmsCreateReplicationSubnetGroupMessage <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateReplicationSubnetGroupMessage: dms.DmsCreateReplicationSubnetGroupMessage = { ... }
```

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

### DmsCreateReplicationSubnetGroupResponse <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateReplicationSubnetGroupResponse: dms.DmsCreateReplicationSubnetGroupResponse = { ... }
```

##### `replicationSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupResponse.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationSubnetGroup`](#aws-cdk-sdk.dms.DmsReplicationSubnetGroup)

---

### DmsCreateReplicationTaskMessage <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateReplicationTaskMessage: dms.DmsCreateReplicationTaskMessage = { ... }
```

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.migrationType"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.cdcStartTime"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.resourceIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

##### `taskData`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage.property.taskData"></a>

- *Type:* `string`

---

### DmsCreateReplicationTaskResponse <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsCreateReplicationTaskResponse: dms.DmsCreateReplicationTaskResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsCreateReplicationTaskResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsDeleteCertificateMessage <a name="aws-cdk-sdk.dms.DmsDeleteCertificateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteCertificateMessage: dms.DmsDeleteCertificateMessage = { ... }
```

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteCertificateMessage.property.certificateArn"></a>

- *Type:* `string`

---

### DmsDeleteCertificateResponse <a name="aws-cdk-sdk.dms.DmsDeleteCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteCertificateResponse: dms.DmsDeleteCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteCertificateResponse.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCertificate`](#aws-cdk-sdk.dms.DmsCertificate)

---

### DmsDeleteConnectionMessage <a name="aws-cdk-sdk.dms.DmsDeleteConnectionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteConnectionMessage: dms.DmsDeleteConnectionMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteConnectionMessage.property.endpointArn"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteConnectionMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

### DmsDeleteConnectionResponse <a name="aws-cdk-sdk.dms.DmsDeleteConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteConnectionResponse: dms.DmsDeleteConnectionResponse = { ... }
```

##### `connection`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteConnectionResponse.property.connection"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsConnection`](#aws-cdk-sdk.dms.DmsConnection)

---

### DmsDeleteEndpointMessage <a name="aws-cdk-sdk.dms.DmsDeleteEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteEndpointMessage: dms.DmsDeleteEndpointMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteEndpointMessage.property.endpointArn"></a>

- *Type:* `string`

---

### DmsDeleteEndpointResponse <a name="aws-cdk-sdk.dms.DmsDeleteEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteEndpointResponse: dms.DmsDeleteEndpointResponse = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteEndpointResponse.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEndpoint`](#aws-cdk-sdk.dms.DmsEndpoint)

---

### DmsDeleteEventSubscriptionMessage <a name="aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteEventSubscriptionMessage: dms.DmsDeleteEventSubscriptionMessage = { ... }
```

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### DmsDeleteEventSubscriptionResponse <a name="aws-cdk-sdk.dms.DmsDeleteEventSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteEventSubscriptionResponse: dms.DmsDeleteEventSubscriptionResponse = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteEventSubscriptionResponse.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventSubscription`](#aws-cdk-sdk.dms.DmsEventSubscription)

---

### DmsDeleteReplicationInstanceMessage <a name="aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationInstanceMessage: dms.DmsDeleteReplicationInstanceMessage = { ... }
```

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

### DmsDeleteReplicationInstanceResponse <a name="aws-cdk-sdk.dms.DmsDeleteReplicationInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationInstanceResponse: dms.DmsDeleteReplicationInstanceResponse = { ... }
```

##### `replicationInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationInstanceResponse.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstance`](#aws-cdk-sdk.dms.DmsReplicationInstance)

---

### DmsDeleteReplicationSubnetGroupMessage <a name="aws-cdk-sdk.dms.DmsDeleteReplicationSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationSubnetGroupMessage: dms.DmsDeleteReplicationSubnetGroupMessage = { ... }
```

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationSubnetGroupMessage.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

### DmsDeleteReplicationSubnetGroupResponse <a name="aws-cdk-sdk.dms.DmsDeleteReplicationSubnetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationSubnetGroupResponse: dms.DmsDeleteReplicationSubnetGroupResponse = { ... }
```

### DmsDeleteReplicationTaskAssessmentRunMessage <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationTaskAssessmentRunMessage: dms.DmsDeleteReplicationTaskAssessmentRunMessage = { ... }
```

##### `replicationTaskAssessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

### DmsDeleteReplicationTaskAssessmentRunResponse <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationTaskAssessmentRunResponse: dms.DmsDeleteReplicationTaskAssessmentRunResponse = { ... }
```

##### `replicationTaskAssessmentRun`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunResponse.property.replicationTaskAssessmentRun"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun)

---

### DmsDeleteReplicationTaskMessage <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationTaskMessage: dms.DmsDeleteReplicationTaskMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

### DmsDeleteReplicationTaskResponse <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDeleteReplicationTaskResponse: dms.DmsDeleteReplicationTaskResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDeleteReplicationTaskResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsDescribeAccountAttributesMessage <a name="aws-cdk-sdk.dms.DmsDescribeAccountAttributesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeAccountAttributesMessage: dms.DmsDescribeAccountAttributesMessage = { ... }
```

### DmsDescribeAccountAttributesResponse <a name="aws-cdk-sdk.dms.DmsDescribeAccountAttributesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeAccountAttributesResponse: dms.DmsDescribeAccountAttributesResponse = { ... }
```

##### `accountQuotas`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeAccountAttributesResponse.property.accountQuotas"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsAccountQuota`](#aws-cdk-sdk.dms.DmsAccountQuota)[]

---

##### `uniqueAccountIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeAccountAttributesResponse.property.uniqueAccountIdentifier"></a>

- *Type:* `string`

---

### DmsDescribeApplicableIndividualAssessmentsMessage <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeApplicableIndividualAssessmentsMessage: dms.DmsDescribeApplicableIndividualAssessmentsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `migrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.migrationType"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `sourceEngineName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.sourceEngineName"></a>

- *Type:* `string`

---

##### `targetEngineName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage.property.targetEngineName"></a>

- *Type:* `string`

---

### DmsDescribeApplicableIndividualAssessmentsResponse <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeApplicableIndividualAssessmentsResponse: dms.DmsDescribeApplicableIndividualAssessmentsResponse = { ... }
```

##### `individualAssessmentNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsResponse.property.individualAssessmentNames"></a>

- *Type:* `string`[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsResponse.property.marker"></a>

- *Type:* `string`

---

### DmsDescribeCertificatesMessage <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeCertificatesMessage: dms.DmsDescribeCertificatesMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeCertificatesResponse <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeCertificatesResponse: dms.DmsDescribeCertificatesResponse = { ... }
```

##### `certificates`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesResponse.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCertificate`](#aws-cdk-sdk.dms.DmsCertificate)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeCertificatesResponse.property.marker"></a>

- *Type:* `string`

---

### DmsDescribeConnectionsMessage <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeConnectionsMessage: dms.DmsDescribeConnectionsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeConnectionsResponse <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeConnectionsResponse: dms.DmsDescribeConnectionsResponse = { ... }
```

##### `connections`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsResponse.property.connections"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsConnection`](#aws-cdk-sdk.dms.DmsConnection)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeConnectionsResponse.property.marker"></a>

- *Type:* `string`

---

### DmsDescribeEndpointsMessage <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEndpointsMessage: dms.DmsDescribeEndpointsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeEndpointsResponse <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEndpointsResponse: dms.DmsDescribeEndpointsResponse = { ... }
```

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsResponse.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEndpoint`](#aws-cdk-sdk.dms.DmsEndpoint)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointsResponse.property.marker"></a>

- *Type:* `string`

---

### DmsDescribeEndpointTypesMessage <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEndpointTypesMessage: dms.DmsDescribeEndpointTypesMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeEndpointTypesResponse <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEndpointTypesResponse: dms.DmsDescribeEndpointTypesResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesResponse.property.marker"></a>

- *Type:* `string`

---

##### `supportedEndpointTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEndpointTypesResponse.property.supportedEndpointTypes"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSupportedEndpointType`](#aws-cdk-sdk.dms.DmsSupportedEndpointType)[]

---

### DmsDescribeEventCategoriesMessage <a name="aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEventCategoriesMessage: dms.DmsDescribeEventCategoriesMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage.property.sourceType"></a>

- *Type:* `string`

---

### DmsDescribeEventCategoriesResponse <a name="aws-cdk-sdk.dms.DmsDescribeEventCategoriesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEventCategoriesResponse: dms.DmsDescribeEventCategoriesResponse = { ... }
```

##### `eventCategoryGroupList`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventCategoriesResponse.property.eventCategoryGroupList"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventCategoryGroup`](#aws-cdk-sdk.dms.DmsEventCategoryGroup)[]

---

### DmsDescribeEventsMessage <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEventsMessage: dms.DmsDescribeEventsMessage = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.duration"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsMessage.property.startTime"></a>

- *Type:* `string`

---

### DmsDescribeEventsResponse <a name="aws-cdk-sdk.dms.DmsDescribeEventsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEventsResponse: dms.DmsDescribeEventsResponse = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsResponse.property.events"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEvent`](#aws-cdk-sdk.dms.DmsEvent)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventsResponse.property.marker"></a>

- *Type:* `string`

---

### DmsDescribeEventSubscriptionsMessage <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEventSubscriptionsMessage: dms.DmsDescribeEventSubscriptionsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `subscriptionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### DmsDescribeEventSubscriptionsResponse <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeEventSubscriptionsResponse: dms.DmsDescribeEventSubscriptionsResponse = { ... }
```

##### `eventSubscriptionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsResponse.property.eventSubscriptionsList"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventSubscription`](#aws-cdk-sdk.dms.DmsEventSubscription)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsResponse.property.marker"></a>

- *Type:* `string`

---

### DmsDescribeOrderableReplicationInstancesMessage <a name="aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeOrderableReplicationInstancesMessage: dms.DmsDescribeOrderableReplicationInstancesMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeOrderableReplicationInstancesResponse <a name="aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeOrderableReplicationInstancesResponse: dms.DmsDescribeOrderableReplicationInstancesResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesResponse.property.marker"></a>

- *Type:* `string`

---

##### `orderableReplicationInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesResponse.property.orderableReplicationInstances"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsOrderableReplicationInstance`](#aws-cdk-sdk.dms.DmsOrderableReplicationInstance)[]

---

### DmsDescribePendingMaintenanceActionsMessage <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribePendingMaintenanceActionsMessage: dms.DmsDescribePendingMaintenanceActionsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

### DmsDescribePendingMaintenanceActionsResponse <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribePendingMaintenanceActionsResponse: dms.DmsDescribePendingMaintenanceActionsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsResponse.property.marker"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsResponse.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions`](#aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions)[]

---

### DmsDescribeRefreshSchemasStatusMessage <a name="aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeRefreshSchemasStatusMessage: dms.DmsDescribeRefreshSchemasStatusMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage.property.endpointArn"></a>

- *Type:* `string`

---

### DmsDescribeRefreshSchemasStatusResponse <a name="aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeRefreshSchemasStatusResponse: dms.DmsDescribeRefreshSchemasStatusResponse = { ... }
```

##### `refreshSchemasStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusResponse.property.refreshSchemasStatus"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRefreshSchemasStatus`](#aws-cdk-sdk.dms.DmsRefreshSchemasStatus)

---

### DmsDescribeReplicationInstancesMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationInstancesMessage: dms.DmsDescribeReplicationInstancesMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeReplicationInstancesResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationInstancesResponse: dms.DmsDescribeReplicationInstancesResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationInstances`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstancesResponse.property.replicationInstances"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstance`](#aws-cdk-sdk.dms.DmsReplicationInstance)[]

---

### DmsDescribeReplicationInstanceTaskLogsMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationInstanceTaskLogsMessage: dms.DmsDescribeReplicationInstanceTaskLogsMessage = { ... }
```

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeReplicationInstanceTaskLogsResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationInstanceTaskLogsResponse: dms.DmsDescribeReplicationInstanceTaskLogsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsResponse.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceTaskLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsResponse.property.replicationInstanceTaskLogs"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog`](#aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog)[]

---

### DmsDescribeReplicationSubnetGroupsMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationSubnetGroupsMessage: dms.DmsDescribeReplicationSubnetGroupsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeReplicationSubnetGroupsResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationSubnetGroupsResponse: dms.DmsDescribeReplicationSubnetGroupsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationSubnetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsResponse.property.replicationSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationSubnetGroup`](#aws-cdk-sdk.dms.DmsReplicationSubnetGroup)[]

---

### DmsDescribeReplicationTaskAssessmentResultsMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTaskAssessmentResultsMessage: dms.DmsDescribeReplicationTaskAssessmentResultsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

### DmsDescribeReplicationTaskAssessmentResultsResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTaskAssessmentResultsResponse: dms.DmsDescribeReplicationTaskAssessmentResultsResponse = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsResponse.property.bucketName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsResponse.property.replicationTaskAssessmentResults"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult)[]

---

### DmsDescribeReplicationTaskAssessmentRunsMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTaskAssessmentRunsMessage: dms.DmsDescribeReplicationTaskAssessmentRunsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeReplicationTaskAssessmentRunsResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTaskAssessmentRunsResponse: dms.DmsDescribeReplicationTaskAssessmentRunsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRuns`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsResponse.property.replicationTaskAssessmentRuns"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun)[]

---

### DmsDescribeReplicationTaskIndividualAssessmentsMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTaskIndividualAssessmentsMessage: dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeReplicationTaskIndividualAssessmentsResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTaskIndividualAssessmentsResponse: dms.DmsDescribeReplicationTaskIndividualAssessmentsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskIndividualAssessments`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsResponse.property.replicationTaskIndividualAssessments"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment`](#aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment)[]

---

### DmsDescribeReplicationTasksMessage <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTasksMessage: dms.DmsDescribeReplicationTasksMessage = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `withoutSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage.property.withoutSettings"></a>

- *Type:* `boolean`

---

### DmsDescribeReplicationTasksResponse <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeReplicationTasksResponse: dms.DmsDescribeReplicationTasksResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationTasks`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeReplicationTasksResponse.property.replicationTasks"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)[]

---

### DmsDescribeSchemasMessage <a name="aws-cdk-sdk.dms.DmsDescribeSchemasMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeSchemasMessage: dms.DmsDescribeSchemasMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDescribeSchemasMessage.property.endpointArn"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeSchemasMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeSchemasMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeSchemasResponse <a name="aws-cdk-sdk.dms.DmsDescribeSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeSchemasResponse: dms.DmsDescribeSchemasResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeSchemasResponse.property.marker"></a>

- *Type:* `string`

---

##### `schemas`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeSchemasResponse.property.schemas"></a>

- *Type:* `string`[]

---

### DmsDescribeTableStatisticsMessage <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeTableStatisticsMessage: dms.DmsDescribeTableStatisticsMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsFilter`](#aws-cdk-sdk.dms.DmsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### DmsDescribeTableStatisticsResponse <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDescribeTableStatisticsResponse: dms.DmsDescribeTableStatisticsResponse = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsResponse.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsResponse.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `tableStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDescribeTableStatisticsResponse.property.tableStatistics"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTableStatistics`](#aws-cdk-sdk.dms.DmsTableStatistics)[]

---

### DmsDmsTransferSettings <a name="aws-cdk-sdk.dms.DmsDmsTransferSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDmsTransferSettings: dms.DmsDmsTransferSettings = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDmsTransferSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDmsTransferSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

### DmsDocDbSettings <a name="aws-cdk-sdk.dms.DmsDocDbSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDocDbSettings: dms.DmsDocDbSettings = { ... }
```

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.docsToInvestigate"></a>

- *Type:* `number`

---

##### `extractDocId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.extractDocId"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsDocDbSettings.property.username"></a>

- *Type:* `string`

---

### DmsDynamoDbSettings <a name="aws-cdk-sdk.dms.DmsDynamoDbSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsDynamoDbSettings: dms.DmsDynamoDbSettings = { ... }
```

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsDynamoDbSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

### DmsElasticsearchSettings <a name="aws-cdk-sdk.dms.DmsElasticsearchSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsElasticsearchSettings: dms.DmsElasticsearchSettings = { ... }
```

##### `endpointUri`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsElasticsearchSettings.property.endpointUri"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsElasticsearchSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsElasticsearchSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsElasticsearchSettings.property.fullLoadErrorPercentage"></a>

- *Type:* `number`

---

### DmsEndpoint <a name="aws-cdk-sdk.dms.DmsEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsEndpoint: dms.DmsEndpoint = { ... }
```

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.certificateArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.databaseName"></a>

- *Type:* `string`

---

##### `dmsTransferSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.dmsTransferSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDmsTransferSettings`](#aws-cdk-sdk.dms.DmsDmsTransferSettings)

---

##### `docDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.docDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDocDbSettings`](#aws-cdk-sdk.dms.DmsDocDbSettings)

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.dynamoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDynamoDbSettings`](#aws-cdk-sdk.dms.DmsDynamoDbSettings)

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.elasticsearchSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsElasticsearchSettings`](#aws-cdk-sdk.dms.DmsElasticsearchSettings)

---

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `engineDisplayName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.engineDisplayName"></a>

- *Type:* `string`

---

##### `engineName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.engineName"></a>

- *Type:* `string`

---

##### `externalId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.externalId"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.extraConnectionAttributes"></a>

- *Type:* `string`

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.ibmDb2Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsibmDb2Settings`](#aws-cdk-sdk.dms.DmsibmDb2Settings)

---

##### `kafkaSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.kafkaSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsKafkaSettings`](#aws-cdk-sdk.dms.DmsKafkaSettings)

---

##### `kinesisSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.kinesisSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsKinesisSettings`](#aws-cdk-sdk.dms.DmsKinesisSettings)

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.microsoftSqlServerSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings`](#aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings)

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.mongoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMongoDbSettings`](#aws-cdk-sdk.dms.DmsMongoDbSettings)

---

##### `mySqlSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.mySqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMySqlSettings`](#aws-cdk-sdk.dms.DmsMySqlSettings)

---

##### `neptuneSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.neptuneSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsNeptuneSettings`](#aws-cdk-sdk.dms.DmsNeptuneSettings)

---

##### `oracleSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.oracleSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsOracleSettings`](#aws-cdk-sdk.dms.DmsOracleSettings)

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.port"></a>

- *Type:* `number`

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.postgreSqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsPostgreSqlSettings`](#aws-cdk-sdk.dms.DmsPostgreSqlSettings)

---

##### `redshiftSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.redshiftSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRedshiftSettings`](#aws-cdk-sdk.dms.DmsRedshiftSettings)

---

##### `s3Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.s3Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.Dmss3Settings`](#aws-cdk-sdk.dms.Dmss3Settings)

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.serverName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `sslMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.sslMode"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.status"></a>

- *Type:* `string`

---

##### `sybaseSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.sybaseSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSybaseSettings`](#aws-cdk-sdk.dms.DmsSybaseSettings)

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEndpoint.property.username"></a>

- *Type:* `string`

---

### DmsEvent <a name="aws-cdk-sdk.dms.DmsEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsEvent: dms.DmsEvent = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEvent.property.date"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEvent.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEvent.property.message"></a>

- *Type:* `string`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEvent.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEvent.property.sourceType"></a>

- *Type:* `string`

---

### DmsEventCategoryGroup <a name="aws-cdk-sdk.dms.DmsEventCategoryGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsEventCategoryGroup: dms.DmsEventCategoryGroup = { ... }
```

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventCategoryGroup.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventCategoryGroup.property.sourceType"></a>

- *Type:* `string`

---

### DmsEventSubscription <a name="aws-cdk-sdk.dms.DmsEventSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsEventSubscription: dms.DmsEventSubscription = { ... }
```

##### `customerAwsId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---

### DmsFilter <a name="aws-cdk-sdk.dms.DmsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsFilter: dms.DmsFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsFilter.property.values"></a>

- *Type:* `string`[]

---

### DmsibmDb2Settings <a name="aws-cdk-sdk.dms.DmsibmDb2Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsibmDb2Settings: dms.DmsibmDb2Settings = { ... }
```

##### `currentLsn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.currentLsn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.databaseName"></a>

- *Type:* `string`

---

##### `maxKBytesPerRead`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.maxKBytesPerRead"></a>

- *Type:* `number`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.serverName"></a>

- *Type:* `string`

---

##### `setDataCaptureChanges`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.setDataCaptureChanges"></a>

- *Type:* `boolean`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsibmDb2Settings.property.username"></a>

- *Type:* `string`

---

### DmsImportCertificateMessage <a name="aws-cdk-sdk.dms.DmsImportCertificateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsImportCertificateMessage: dms.DmsImportCertificateMessage = { ... }
```

##### `certificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsImportCertificateMessage.property.certificateIdentifier"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsImportCertificateMessage.property.certificatePem"></a>

- *Type:* `string`

---

##### `certificateWallet`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsImportCertificateMessage.property.certificateWallet"></a>

- *Type:* `any`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsImportCertificateMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

### DmsImportCertificateResponse <a name="aws-cdk-sdk.dms.DmsImportCertificateResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsImportCertificateResponse: dms.DmsImportCertificateResponse = { ... }
```

##### `certificate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsImportCertificateResponse.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCertificate`](#aws-cdk-sdk.dms.DmsCertificate)

---

### DmsKafkaSettings <a name="aws-cdk-sdk.dms.DmsKafkaSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsKafkaSettings: dms.DmsKafkaSettings = { ... }
```

##### `broker`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.broker"></a>

- *Type:* `string`

---

##### `includeControlDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.messageMaxBytes"></a>

- *Type:* `number`

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `topic`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKafkaSettings.property.topic"></a>

- *Type:* `string`

---

### DmsKinesisSettings <a name="aws-cdk-sdk.dms.DmsKinesisSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsKinesisSettings: dms.DmsKinesisSettings = { ... }
```

##### `includeControlDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsKinesisSettings.property.streamArn"></a>

- *Type:* `string`

---

### DmsListTagsForResourceMessage <a name="aws-cdk-sdk.dms.DmsListTagsForResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsListTagsForResourceMessage: dms.DmsListTagsForResourceMessage = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsListTagsForResourceMessage.property.resourceArn"></a>

- *Type:* `string`

---

### DmsListTagsForResourceResponse <a name="aws-cdk-sdk.dms.DmsListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsListTagsForResourceResponse: dms.DmsListTagsForResourceResponse = { ... }
```

##### `tagList`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsListTagsForResourceResponse.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---

### DmsMicrosoftSqlServerSettings <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsMicrosoftSqlServerSettings: dms.DmsMicrosoftSqlServerSettings = { ... }
```

##### `bcpPacketSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

- *Type:* `number`

---

##### `controlTablesFileGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.port"></a>

- *Type:* `number`

---

##### `readBackupOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.readBackupOnly"></a>

- *Type:* `boolean`

---

##### `safeguardPolicy`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useBcpFullLoad`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

- *Type:* `boolean`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings.property.username"></a>

- *Type:* `string`

---

### DmsModifyEndpointMessage <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyEndpointMessage: dms.DmsModifyEndpointMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.endpointArn"></a>

- *Type:* `string`

---

##### `certificateArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.certificateArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.databaseName"></a>

- *Type:* `string`

---

##### `dmsTransferSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.dmsTransferSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDmsTransferSettings`](#aws-cdk-sdk.dms.DmsDmsTransferSettings)

---

##### `docDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.docDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDocDbSettings`](#aws-cdk-sdk.dms.DmsDocDbSettings)

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.dynamoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDynamoDbSettings`](#aws-cdk-sdk.dms.DmsDynamoDbSettings)

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.elasticsearchSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsElasticsearchSettings`](#aws-cdk-sdk.dms.DmsElasticsearchSettings)

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.endpointType"></a>

- *Type:* `string`

---

##### `engineName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.engineName"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.extraConnectionAttributes"></a>

- *Type:* `string`

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.ibmDb2Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsibmDb2Settings`](#aws-cdk-sdk.dms.DmsibmDb2Settings)

---

##### `kafkaSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.kafkaSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsKafkaSettings`](#aws-cdk-sdk.dms.DmsKafkaSettings)

---

##### `kinesisSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.kinesisSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsKinesisSettings`](#aws-cdk-sdk.dms.DmsKinesisSettings)

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.microsoftSqlServerSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings`](#aws-cdk-sdk.dms.DmsMicrosoftSqlServerSettings)

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.mongoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMongoDbSettings`](#aws-cdk-sdk.dms.DmsMongoDbSettings)

---

##### `mySqlSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.mySqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMySqlSettings`](#aws-cdk-sdk.dms.DmsMySqlSettings)

---

##### `neptuneSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.neptuneSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsNeptuneSettings`](#aws-cdk-sdk.dms.DmsNeptuneSettings)

---

##### `oracleSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.oracleSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsOracleSettings`](#aws-cdk-sdk.dms.DmsOracleSettings)

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.port"></a>

- *Type:* `number`

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.postgreSqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsPostgreSqlSettings`](#aws-cdk-sdk.dms.DmsPostgreSqlSettings)

---

##### `redshiftSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.redshiftSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRedshiftSettings`](#aws-cdk-sdk.dms.DmsRedshiftSettings)

---

##### `s3Settings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.s3Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.Dmss3Settings`](#aws-cdk-sdk.dms.Dmss3Settings)

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.serverName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `sslMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.sslMode"></a>

- *Type:* `string`

---

##### `sybaseSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.sybaseSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSybaseSettings`](#aws-cdk-sdk.dms.DmsSybaseSettings)

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointMessage.property.username"></a>

- *Type:* `string`

---

### DmsModifyEndpointResponse <a name="aws-cdk-sdk.dms.DmsModifyEndpointResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyEndpointResponse: dms.DmsModifyEndpointResponse = { ... }
```

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEndpointResponse.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEndpoint`](#aws-cdk-sdk.dms.DmsEndpoint)

---

### DmsModifyEventSubscriptionMessage <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyEventSubscriptionMessage: dms.DmsModifyEventSubscriptionMessage = { ... }
```

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage.property.sourceType"></a>

- *Type:* `string`

---

### DmsModifyEventSubscriptionResponse <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyEventSubscriptionResponse: dms.DmsModifyEventSubscriptionResponse = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyEventSubscriptionResponse.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventSubscription`](#aws-cdk-sdk.dms.DmsEventSubscription)

---

### DmsModifyReplicationInstanceMessage <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyReplicationInstanceMessage: dms.DmsModifyReplicationInstanceMessage = { ... }
```

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.allowMajorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `applyImmediately`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.applyImmediately"></a>

- *Type:* `boolean`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.multiAz"></a>

- *Type:* `boolean`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### DmsModifyReplicationInstanceResponse <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyReplicationInstanceResponse: dms.DmsModifyReplicationInstanceResponse = { ... }
```

##### `replicationInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationInstanceResponse.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstance`](#aws-cdk-sdk.dms.DmsReplicationInstance)

---

### DmsModifyReplicationSubnetGroupMessage <a name="aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyReplicationSubnetGroupMessage: dms.DmsModifyReplicationSubnetGroupMessage = { ... }
```

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `replicationSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

### DmsModifyReplicationSubnetGroupResponse <a name="aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyReplicationSubnetGroupResponse: dms.DmsModifyReplicationSubnetGroupResponse = { ... }
```

##### `replicationSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupResponse.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationSubnetGroup`](#aws-cdk-sdk.dms.DmsReplicationSubnetGroup)

---

### DmsModifyReplicationTaskMessage <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyReplicationTaskMessage: dms.DmsModifyReplicationTaskMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.cdcStartTime"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.migrationType"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.tableMappings"></a>

- *Type:* `string`

---

##### `taskData`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage.property.taskData"></a>

- *Type:* `string`

---

### DmsModifyReplicationTaskResponse <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsModifyReplicationTaskResponse: dms.DmsModifyReplicationTaskResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsModifyReplicationTaskResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsMongoDbSettings <a name="aws-cdk-sdk.dms.DmsMongoDbSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsMongoDbSettings: dms.DmsMongoDbSettings = { ... }
```

##### `authMechanism`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.authMechanism"></a>

- *Type:* `string`

---

##### `authSource`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.authSource"></a>

- *Type:* `string`

---

##### `authType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.authType"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.docsToInvestigate"></a>

- *Type:* `string`

---

##### `extractDocId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.extractDocId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMongoDbSettings.property.username"></a>

- *Type:* `string`

---

### DmsMoveReplicationTaskMessage <a name="aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsMoveReplicationTaskMessage: dms.DmsMoveReplicationTaskMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

### DmsMoveReplicationTaskResponse <a name="aws-cdk-sdk.dms.DmsMoveReplicationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsMoveReplicationTaskResponse: dms.DmsMoveReplicationTaskResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMoveReplicationTaskResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsMySqlSettings <a name="aws-cdk-sdk.dms.DmsMySqlSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsMySqlSettings: dms.DmsMySqlSettings = { ... }
```

##### `afterConnectScript`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.eventsPollInterval"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `parallelLoadThreads`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.parallelLoadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverTimezone`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.serverTimezone"></a>

- *Type:* `string`

---

##### `targetDbType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.targetDbType"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsMySqlSettings.property.username"></a>

- *Type:* `string`

---

### DmsNeptuneSettings <a name="aws-cdk-sdk.dms.DmsNeptuneSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsNeptuneSettings: dms.DmsNeptuneSettings = { ... }
```

##### `s3BucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.s3BucketFolder"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.s3BucketName"></a>

- *Type:* `string`

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `iamAuthEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.iamAuthEnabled"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `maxRetryCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.maxRetryCount"></a>

- *Type:* `number`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsNeptuneSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

### DmsOracleSettings <a name="aws-cdk-sdk.dms.DmsOracleSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsOracleSettings: dms.DmsOracleSettings = { ... }
```

##### `accessAlternateDirectly`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.accessAlternateDirectly"></a>

- *Type:* `boolean`

---

##### `additionalArchivedLogDestId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.additionalArchivedLogDestId"></a>

- *Type:* `number`

---

##### `addSupplementalLogging`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.addSupplementalLogging"></a>

- *Type:* `boolean`

---

##### `allowSelectNestedTables`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.allowSelectNestedTables"></a>

- *Type:* `boolean`

---

##### `archivedLogDestId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.archivedLogDestId"></a>

- *Type:* `number`

---

##### `archivedLogsOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.archivedLogsOnly"></a>

- *Type:* `boolean`

---

##### `asmPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.asmPassword"></a>

- *Type:* `string`

---

##### `asmServer`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.asmServer"></a>

- *Type:* `string`

---

##### `asmUser`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.asmUser"></a>

- *Type:* `string`

---

##### `charLengthSemantics`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.charLengthSemantics"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `directPathNoLog`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.directPathNoLog"></a>

- *Type:* `boolean`

---

##### `directPathParallelLoad`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.directPathParallelLoad"></a>

- *Type:* `boolean`

---

##### `enableHomogenousTablespace`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.enableHomogenousTablespace"></a>

- *Type:* `boolean`

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `numberDatatypeScale`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.numberDatatypeScale"></a>

- *Type:* `number`

---

##### `oraclePathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.oraclePathPrefix"></a>

- *Type:* `string`

---

##### `parallelAsmReadThreads`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.parallelAsmReadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.port"></a>

- *Type:* `number`

---

##### `readAheadBlocks`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.readAheadBlocks"></a>

- *Type:* `number`

---

##### `readTableSpaceName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.readTableSpaceName"></a>

- *Type:* `boolean`

---

##### `replacePathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.replacePathPrefix"></a>

- *Type:* `boolean`

---

##### `retryInterval`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.retryInterval"></a>

- *Type:* `number`

---

##### `securityDbEncryption`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.securityDbEncryption"></a>

- *Type:* `string`

---

##### `securityDbEncryptionName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.securityDbEncryptionName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useAlternateFolderForOnline`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.useAlternateFolderForOnline"></a>

- *Type:* `boolean`

---

##### `usePathPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.usePathPrefix"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOracleSettings.property.username"></a>

- *Type:* `string`

---

### DmsOrderableReplicationInstance <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsOrderableReplicationInstance: dms.DmsOrderableReplicationInstance = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.availabilityZones"></a>

- *Type:* `string`[]

---

##### `defaultAllocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.defaultAllocatedStorage"></a>

- *Type:* `number`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `includedAllocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.includedAllocatedStorage"></a>

- *Type:* `number`

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.maxAllocatedStorage"></a>

- *Type:* `number`

---

##### `minAllocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.minAllocatedStorage"></a>

- *Type:* `number`

---

##### `releaseStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.releaseStatus"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `storageType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsOrderableReplicationInstance.property.storageType"></a>

- *Type:* `string`

---

### DmsPendingMaintenanceAction <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsPendingMaintenanceAction: dms.DmsPendingMaintenanceAction = { ... }
```

##### `action`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction.property.action"></a>

- *Type:* `string`

---

##### `autoAppliedAfterDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction.property.autoAppliedAfterDate"></a>

- *Type:* `string`

---

##### `currentApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction.property.currentApplyDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction.property.description"></a>

- *Type:* `string`

---

##### `forcedApplyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction.property.forcedApplyDate"></a>

- *Type:* `string`

---

##### `optInStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPendingMaintenanceAction.property.optInStatus"></a>

- *Type:* `string`

---

### DmsPostgreSqlSettings <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsPostgreSqlSettings: dms.DmsPostgreSqlSettings = { ... }
```

##### `afterConnectScript`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `captureDdls`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.captureDdls"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `ddlArtifactsSchema`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.ddlArtifactsSchema"></a>

- *Type:* `string`

---

##### `executeTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.executeTimeout"></a>

- *Type:* `number`

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `slotName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.slotName"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsPostgreSqlSettings.property.username"></a>

- *Type:* `string`

---

### DmsRebootReplicationInstanceMessage <a name="aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRebootReplicationInstanceMessage: dms.DmsRebootReplicationInstanceMessage = { ... }
```

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `forceFailover`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage.property.forceFailover"></a>

- *Type:* `boolean`

---

### DmsRebootReplicationInstanceResponse <a name="aws-cdk-sdk.dms.DmsRebootReplicationInstanceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRebootReplicationInstanceResponse: dms.DmsRebootReplicationInstanceResponse = { ... }
```

##### `replicationInstance`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRebootReplicationInstanceResponse.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstance`](#aws-cdk-sdk.dms.DmsReplicationInstance)

---

### DmsRedshiftSettings <a name="aws-cdk-sdk.dms.DmsRedshiftSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRedshiftSettings: dms.DmsRedshiftSettings = { ... }
```

##### `acceptAnyDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.acceptAnyDate"></a>

- *Type:* `boolean`

---

##### `afterConnectScript`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `bucketFolder`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.caseSensitiveNames"></a>

- *Type:* `boolean`

---

##### `compUpdate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.compUpdate"></a>

- *Type:* `boolean`

---

##### `connectionTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.connectionTimeout"></a>

- *Type:* `number`

---

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `dateFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.dateFormat"></a>

- *Type:* `string`

---

##### `emptyAsNull`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.emptyAsNull"></a>

- *Type:* `boolean`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `explicitIds`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.explicitIds"></a>

- *Type:* `boolean`

---

##### `fileTransferUploadStreams`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.fileTransferUploadStreams"></a>

- *Type:* `number`

---

##### `loadTimeout`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.loadTimeout"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.port"></a>

- *Type:* `number`

---

##### `removeQuotes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.removeQuotes"></a>

- *Type:* `boolean`

---

##### `replaceChars`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.replaceChars"></a>

- *Type:* `string`

---

##### `replaceInvalidChars`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.replaceInvalidChars"></a>

- *Type:* `string`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timeFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.timeFormat"></a>

- *Type:* `string`

---

##### `trimBlanks`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.trimBlanks"></a>

- *Type:* `boolean`

---

##### `truncateColumns`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.truncateColumns"></a>

- *Type:* `boolean`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.username"></a>

- *Type:* `string`

---

##### `writeBufferSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRedshiftSettings.property.writeBufferSize"></a>

- *Type:* `number`

---

### DmsRefreshSchemasMessage <a name="aws-cdk-sdk.dms.DmsRefreshSchemasMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRefreshSchemasMessage: dms.DmsRefreshSchemasMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasMessage.property.endpointArn"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

### DmsRefreshSchemasResponse <a name="aws-cdk-sdk.dms.DmsRefreshSchemasResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRefreshSchemasResponse: dms.DmsRefreshSchemasResponse = { ... }
```

##### `refreshSchemasStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasResponse.property.refreshSchemasStatus"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRefreshSchemasStatus`](#aws-cdk-sdk.dms.DmsRefreshSchemasStatus)

---

### DmsRefreshSchemasStatus <a name="aws-cdk-sdk.dms.DmsRefreshSchemasStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRefreshSchemasStatus: dms.DmsRefreshSchemasStatus = { ... }
```

##### `endpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasStatus.property.endpointArn"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasStatus.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastRefreshDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasStatus.property.lastRefreshDate"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasStatus.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsRefreshSchemasStatus.property.status"></a>

- *Type:* `string`

---

### DmsReloadTablesMessage <a name="aws-cdk-sdk.dms.DmsReloadTablesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReloadTablesMessage: dms.DmsReloadTablesMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsReloadTablesMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `tablesToReload`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsReloadTablesMessage.property.tablesToReload"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTableToReload`](#aws-cdk-sdk.dms.DmsTableToReload)[]

---

##### `reloadOption`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReloadTablesMessage.property.reloadOption"></a>

- *Type:* `string`

---

### DmsReloadTablesResponse <a name="aws-cdk-sdk.dms.DmsReloadTablesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReloadTablesResponse: dms.DmsReloadTablesResponse = { ... }
```

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReloadTablesResponse.property.replicationTaskArn"></a>

- *Type:* `string`

---

### DmsRemoveTagsFromResourceMessage <a name="aws-cdk-sdk.dms.DmsRemoveTagsFromResourceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRemoveTagsFromResourceMessage: dms.DmsRemoveTagsFromResourceMessage = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsRemoveTagsFromResourceMessage.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsRemoveTagsFromResourceMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

### DmsRemoveTagsFromResourceResponse <a name="aws-cdk-sdk.dms.DmsRemoveTagsFromResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsRemoveTagsFromResourceResponse: dms.DmsRemoveTagsFromResourceResponse = { ... }
```

### DmsReplicationInstance <a name="aws-cdk-sdk.dms.DmsReplicationInstance"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationInstance: dms.DmsReplicationInstance = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dnsNameServers`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.dnsNameServers"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `freeUntil`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.freeUntil"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues`](#aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstancePrivateIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstancePublicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstancePublicIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePublicIpAddresses`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstanceStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationInstanceStatus"></a>

- *Type:* `string`

---

##### `replicationSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationSubnetGroup`](#aws-cdk-sdk.dms.DmsReplicationSubnetGroup)

---

##### `secondaryAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership`](#aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership)[]

---

### DmsReplicationInstanceTaskLog <a name="aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationInstanceTaskLog: dms.DmsReplicationInstanceTaskLog = { ... }
```

##### `replicationInstanceTaskLogSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog.property.replicationInstanceTaskLogSize"></a>

- *Type:* `number`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog.property.replicationTaskName"></a>

- *Type:* `string`

---

### DmsReplicationPendingModifiedValues <a name="aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationPendingModifiedValues: dms.DmsReplicationPendingModifiedValues = { ... }
```

##### `allocatedStorage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `engineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `replicationInstanceClass`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationPendingModifiedValues.property.replicationInstanceClass"></a>

- *Type:* `string`

---

### DmsReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DmsReplicationSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationSubnetGroup: dms.DmsReplicationSubnetGroup = { ... }
```

##### `replicationSubnetGroupDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### DmsReplicationTask <a name="aws-cdk-sdk.dms.DmsReplicationTask"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationTask: dms.DmsReplicationTask = { ... }
```

##### `cdcStartPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskStats`](#aws-cdk-sdk.dms.DmsReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTask.property.taskData"></a>

- *Type:* `string`

---

### DmsReplicationTaskAssessmentResult <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationTaskAssessmentResult: dms.DmsReplicationTaskAssessmentResult = { ... }
```

##### `assessmentResults`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.assessmentResults"></a>

- *Type:* `string`

---

##### `assessmentResultsFile`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.assessmentResultsFile"></a>

- *Type:* `string`

---

##### `assessmentStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.assessmentStatus"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskLastAssessmentDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.replicationTaskLastAssessmentDate"></a>

- *Type:* `string`

---

##### `s3ObjectUrl`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult.property.s3ObjectUrl"></a>

- *Type:* `string`

---

### DmsReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationTaskAssessmentRun: dms.DmsReplicationTaskAssessmentRun = { ... }
```

##### `assessmentProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.assessmentProgress"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRunProgress`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRunProgress)

---

##### `assessmentRunName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.assessmentRunName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunCreationDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunCreationDate"></a>

- *Type:* `string`

---

##### `resultEncryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.resultEncryptionMode"></a>

- *Type:* `string`

---

##### `resultKmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.resultKmsKeyArn"></a>

- *Type:* `string`

---

##### `resultLocationBucket`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.resultLocationBucket"></a>

- *Type:* `string`

---

##### `resultLocationFolder`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.resultLocationFolder"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun.property.status"></a>

- *Type:* `string`

---

### DmsReplicationTaskAssessmentRunProgress <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRunProgress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationTaskAssessmentRunProgress: dms.DmsReplicationTaskAssessmentRunProgress = { ... }
```

##### `individualAssessmentCompletedCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRunProgress.property.individualAssessmentCompletedCount"></a>

- *Type:* `number`

---

##### `individualAssessmentCount`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRunProgress.property.individualAssessmentCount"></a>

- *Type:* `number`

---

### DmsReplicationTaskIndividualAssessment <a name="aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationTaskIndividualAssessment: dms.DmsReplicationTaskIndividualAssessment = { ... }
```

##### `individualAssessmentName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment.property.individualAssessmentName"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

##### `replicationTaskIndividualAssessmentArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment.property.replicationTaskIndividualAssessmentArn"></a>

- *Type:* `string`

---

##### `replicationTaskIndividualAssessmentStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment.property.replicationTaskIndividualAssessmentStartDate"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment.property.status"></a>

- *Type:* `string`

---

### DmsReplicationTaskStats <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsReplicationTaskStats: dms.DmsReplicationTaskStats = { ... }
```

##### `elapsedTimeMillis`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---

### DmsResourcePendingMaintenanceActions <a name="aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsResourcePendingMaintenanceActions: dms.DmsResourcePendingMaintenanceActions = { ... }
```

##### `pendingMaintenanceActionDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions.property.pendingMaintenanceActionDetails"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsPendingMaintenanceAction`](#aws-cdk-sdk.dms.DmsPendingMaintenanceAction)[]

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions.property.resourceIdentifier"></a>

- *Type:* `string`

---

### Dmss3Settings <a name="aws-cdk-sdk.dms.Dmss3Settings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmss3Settings: dms.Dmss3Settings = { ... }
```

##### `bucketFolder`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.bucketName"></a>

- *Type:* `string`

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.cdcInsertsAndUpdates"></a>

- *Type:* `boolean`

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.cdcInsertsOnly"></a>

- *Type:* `boolean`

---

##### `compressionType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.compressionType"></a>

- *Type:* `string`

---

##### `csvDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.csvDelimiter"></a>

- *Type:* `string`

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.csvRowDelimiter"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.dataFormat"></a>

- *Type:* `string`

---

##### `dataPageSize`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.dataPageSize"></a>

- *Type:* `number`

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.datePartitionDelimiter"></a>

- *Type:* `string`

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.datePartitionEnabled"></a>

- *Type:* `boolean`

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.datePartitionSequence"></a>

- *Type:* `string`

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.dictPageSizeLimit"></a>

- *Type:* `number`

---

##### `enableStatistics`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.enableStatistics"></a>

- *Type:* `boolean`

---

##### `encodingType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.encodingType"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.includeOpForFullLoad"></a>

- *Type:* `boolean`

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.parquetTimestampInMillisecond"></a>

- *Type:* `boolean`

---

##### `parquetVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.parquetVersion"></a>

- *Type:* `string`

---

##### `rowGroupLength`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.rowGroupLength"></a>

- *Type:* `number`

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timestampColumnName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.Dmss3Settings.property.timestampColumnName"></a>

- *Type:* `string`

---

### DmsStartReplicationTaskAssessmentMessage <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStartReplicationTaskAssessmentMessage: dms.DmsStartReplicationTaskAssessmentMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

### DmsStartReplicationTaskAssessmentResponse <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStartReplicationTaskAssessmentResponse: dms.DmsStartReplicationTaskAssessmentResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsStartReplicationTaskAssessmentRunMessage <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStartReplicationTaskAssessmentRunMessage: dms.DmsStartReplicationTaskAssessmentRunMessage = { ... }
```

##### `assessmentRunName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.assessmentRunName"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `resultLocationBucket`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.resultLocationBucket"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `exclude`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.exclude"></a>

- *Type:* `string`[]

---

##### `includeOnly`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.includeOnly"></a>

- *Type:* `string`[]

---

##### `resultEncryptionMode`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.resultEncryptionMode"></a>

- *Type:* `string`

---

##### `resultKmsKeyArn`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.resultKmsKeyArn"></a>

- *Type:* `string`

---

##### `resultLocationFolder`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage.property.resultLocationFolder"></a>

- *Type:* `string`

---

### DmsStartReplicationTaskAssessmentRunResponse <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStartReplicationTaskAssessmentRunResponse: dms.DmsStartReplicationTaskAssessmentRunResponse = { ... }
```

##### `replicationTaskAssessmentRun`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunResponse.property.replicationTaskAssessmentRun"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun)

---

### DmsStartReplicationTaskMessage <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStartReplicationTaskMessage: dms.DmsStartReplicationTaskMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `startReplicationTaskType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskMessage.property.startReplicationTaskType"></a>

- *Type:* `string`

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskMessage.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskMessage.property.cdcStartTime"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskMessage.property.cdcStopPosition"></a>

- *Type:* `string`

---

### DmsStartReplicationTaskResponse <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStartReplicationTaskResponse: dms.DmsStartReplicationTaskResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStartReplicationTaskResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsStopReplicationTaskMessage <a name="aws-cdk-sdk.dms.DmsStopReplicationTaskMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStopReplicationTaskMessage: dms.DmsStopReplicationTaskMessage = { ... }
```

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsStopReplicationTaskMessage.property.replicationTaskArn"></a>

- *Type:* `string`

---

### DmsStopReplicationTaskResponse <a name="aws-cdk-sdk.dms.DmsStopReplicationTaskResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsStopReplicationTaskResponse: dms.DmsStopReplicationTaskResponse = { ... }
```

##### `replicationTask`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsStopReplicationTaskResponse.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)

---

### DmsSubnet <a name="aws-cdk-sdk.dms.DmsSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsSubnet: dms.DmsSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSubnet.property.subnetAvailabilityZone"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsAvailabilityZone`](#aws-cdk-sdk.dms.DmsAvailabilityZone)

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

##### `subnetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSubnet.property.subnetStatus"></a>

- *Type:* `string`

---

### DmsSupportedEndpointType <a name="aws-cdk-sdk.dms.DmsSupportedEndpointType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsSupportedEndpointType: dms.DmsSupportedEndpointType = { ... }
```

##### `endpointType`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSupportedEndpointType.property.endpointType"></a>

- *Type:* `string`

---

##### `engineDisplayName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSupportedEndpointType.property.engineDisplayName"></a>

- *Type:* `string`

---

##### `engineName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSupportedEndpointType.property.engineName"></a>

- *Type:* `string`

---

##### `replicationInstanceEngineMinimumVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSupportedEndpointType.property.replicationInstanceEngineMinimumVersion"></a>

- *Type:* `string`

---

##### `supportsCdc`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSupportedEndpointType.property.supportsCdc"></a>

- *Type:* `boolean`

---

### DmsSybaseSettings <a name="aws-cdk-sdk.dms.DmsSybaseSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsSybaseSettings: dms.DmsSybaseSettings = { ... }
```

##### `databaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSybaseSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSybaseSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSybaseSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSybaseSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsSybaseSettings.property.username"></a>

- *Type:* `string`

---

### DmsTableStatistics <a name="aws-cdk-sdk.dms.DmsTableStatistics"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsTableStatistics: dms.DmsTableStatistics = { ... }
```

##### `ddls`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.ddls"></a>

- *Type:* `number`

---

##### `deletes`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.deletes"></a>

- *Type:* `number`

---

##### `fullLoadCondtnlChkFailedRows`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.fullLoadCondtnlChkFailedRows"></a>

- *Type:* `number`

---

##### `fullLoadEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.fullLoadEndTime"></a>

- *Type:* `string`

---

##### `fullLoadErrorRows`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.fullLoadErrorRows"></a>

- *Type:* `number`

---

##### `fullLoadReloaded`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.fullLoadReloaded"></a>

- *Type:* `boolean`

---

##### `fullLoadRows`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.fullLoadRows"></a>

- *Type:* `number`

---

##### `fullLoadStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.fullLoadStartTime"></a>

- *Type:* `string`

---

##### `inserts`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.inserts"></a>

- *Type:* `number`

---

##### `lastUpdateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.lastUpdateTime"></a>

- *Type:* `string`

---

##### `schemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.schemaName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.tableName"></a>

- *Type:* `string`

---

##### `tableState`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.tableState"></a>

- *Type:* `string`

---

##### `updates`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.updates"></a>

- *Type:* `number`

---

##### `validationFailedRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.validationFailedRecords"></a>

- *Type:* `number`

---

##### `validationPendingRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.validationPendingRecords"></a>

- *Type:* `number`

---

##### `validationState`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.validationState"></a>

- *Type:* `string`

---

##### `validationStateDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.validationStateDetails"></a>

- *Type:* `string`

---

##### `validationSuspendedRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTableStatistics.property.validationSuspendedRecords"></a>

- *Type:* `number`

---

### DmsTableToReload <a name="aws-cdk-sdk.dms.DmsTableToReload"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsTableToReload: dms.DmsTableToReload = { ... }
```

##### `schemaName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsTableToReload.property.schemaName"></a>

- *Type:* `string`

---

##### `tableName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsTableToReload.property.tableName"></a>

- *Type:* `string`

---

### DmsTag <a name="aws-cdk-sdk.dms.DmsTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsTag: dms.DmsTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTag.property.value"></a>

- *Type:* `string`

---

### DmsTestConnectionMessage <a name="aws-cdk-sdk.dms.DmsTestConnectionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsTestConnectionMessage: dms.DmsTestConnectionMessage = { ... }
```

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsTestConnectionMessage.property.endpointArn"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DmsTestConnectionMessage.property.replicationInstanceArn"></a>

- *Type:* `string`

---

### DmsTestConnectionResponse <a name="aws-cdk-sdk.dms.DmsTestConnectionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsTestConnectionResponse: dms.DmsTestConnectionResponse = { ... }
```

##### `connection`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsTestConnectionResponse.property.connection"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsConnection`](#aws-cdk-sdk.dms.DmsConnection)

---

### DmsVpcSecurityGroupMembership <a name="aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

const dmsVpcSecurityGroupMembership: dms.DmsVpcSecurityGroupMembership = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership.property.vpcSecurityGroupId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### DMSResponsesApplyPendingMaintenanceAction <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceAction"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceAction.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesApplyPendingMaintenanceAction(__scope: Construct, __resources: string[], __input: DmsApplyPendingMaintenanceActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage)

---



#### Properties <a name="Properties"></a>

##### `resourcePendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceAction.property.resourcePendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions`](#aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions)

---


### DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions(__scope: Construct, __resources: string[], __input: DmsApplyPendingMaintenanceActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage`](#aws-cdk-sdk.dms.DmsApplyPendingMaintenanceActionMessage)

---



#### Properties <a name="Properties"></a>

##### `pendingMaintenanceActionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.property.pendingMaintenanceActionDetails"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsPendingMaintenanceAction`](#aws-cdk-sdk.dms.DmsPendingMaintenanceAction)[]

---

##### `resourceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions.property.resourceIdentifier"></a>

- *Type:* `string`

---


### DMSResponsesCancelReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRun.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCancelReplicationTaskAssessmentRun(__scope: Construct, __resources: string[], __input: DmsCancelReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTaskAssessmentRun`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRun.property.replicationTaskAssessmentRun"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun)

---


### DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun(__scope: Construct, __resources: string[], __input: DmsCancelReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `assessmentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.assessmentProgress"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress`](#aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress)

---

##### `assessmentRunName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.assessmentRunName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunCreationDate"></a>

- *Type:* `string`

---

##### `resultEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultEncryptionMode"></a>

- *Type:* `string`

---

##### `resultKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultKmsKeyArn"></a>

- *Type:* `string`

---

##### `resultLocationBucket`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultLocationBucket"></a>

- *Type:* `string`

---

##### `resultLocationFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultLocationFolder"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.status"></a>

- *Type:* `string`

---


### DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress(__scope: Construct, __resources: string[], __input: DmsCancelReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsCancelReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `individualAssessmentCompletedCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.property.individualAssessmentCompletedCount"></a>

- *Type:* `number`

---

##### `individualAssessmentCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCancelReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.property.individualAssessmentCount"></a>

- *Type:* `number`

---


### DMSResponsesCreateEndpoint <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpoint.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpoint(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpoint.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint)

---


### DMSResponsesCreateEndpointEndpoint <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpoint(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.certificateArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.databaseName"></a>

- *Type:* `string`

---

##### `dmsTransferSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.dmsTransferSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings)

---

##### `docDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.docDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings)

---

##### `dynamoDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.dynamoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings)

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.elasticsearchSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings)

---

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `engineDisplayName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.engineDisplayName"></a>

- *Type:* `string`

---

##### `engineName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.engineName"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.externalId"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.extraConnectionAttributes"></a>

- *Type:* `string`

---

##### `ibmDb2Settings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.ibmDb2Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings)

---

##### `kafkaSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.kafkaSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings)

---

##### `kinesisSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.kinesisSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.microsoftSqlServerSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings)

---

##### `mongoDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.mongoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings)

---

##### `mySqlSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.mySqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings)

---

##### `neptuneSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.neptuneSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings)

---

##### `oracleSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.oracleSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.port"></a>

- *Type:* `number`

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.postgreSqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings)

---

##### `redshiftSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.redshiftSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings)

---

##### `s3Settings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.s3Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings)

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.serverName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `sslMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.sslMode"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.status"></a>

- *Type:* `string`

---

##### `sybaseSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.sybaseSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings`](#aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings)

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpoint.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointDmsTransferSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDmsTransferSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointDocDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointDocDbSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.docsToInvestigate"></a>

- *Type:* `number`

---

##### `extractDocId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.extractDocId"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDocDbSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointDynamoDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointElasticsearchSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointUri`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.property.endpointUri"></a>

- *Type:* `string`

---

##### `errorRetryDuration`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

- *Type:* `number`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointIbmDb2Settings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `currentLsn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.currentLsn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.databaseName"></a>

- *Type:* `string`

---

##### `maxKBytesPerRead`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.serverName"></a>

- *Type:* `string`

---

##### `setDataCaptureChanges`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointIbmDb2Settings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointKafkaSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointKafkaSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `broker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.broker"></a>

- *Type:* `string`

---

##### `includeControlDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `messageMaxBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.messageMaxBytes"></a>

- *Type:* `number`

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKafkaSettings.property.topic"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointKinesisSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointKinesisSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `includeControlDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointKinesisSettings.property.streamArn"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bcpPacketSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

- *Type:* `number`

---

##### `controlTablesFileGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.port"></a>

- *Type:* `number`

---

##### `readBackupOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

- *Type:* `boolean`

---

##### `safeguardPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useBcpFullLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMicrosoftSqlServerSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointMongoDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointMongoDbSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `authMechanism`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.authMechanism"></a>

- *Type:* `string`

---

##### `authSource`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.authSource"></a>

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.authType"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.docsToInvestigate"></a>

- *Type:* `string`

---

##### `extractDocId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.extractDocId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMongoDbSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointMySqlSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointMySqlSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `eventsPollInterval`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.eventsPollInterval"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.parallelLoadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.serverTimezone"></a>

- *Type:* `string`

---

##### `targetDbType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.targetDbType"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointMySqlSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointNeptuneSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointNeptuneSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `errorRetryDuration`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.iamAuthEnabled"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `maxRetryCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.maxRetryCount"></a>

- *Type:* `number`

---

##### `s3BucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.s3BucketFolder"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.s3BucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointOracleSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointOracleSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `accessAlternateDirectly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.accessAlternateDirectly"></a>

- *Type:* `boolean`

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

- *Type:* `number`

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.addSupplementalLogging"></a>

- *Type:* `boolean`

---

##### `allowSelectNestedTables`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.allowSelectNestedTables"></a>

- *Type:* `boolean`

---

##### `archivedLogDestId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.archivedLogDestId"></a>

- *Type:* `number`

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.archivedLogsOnly"></a>

- *Type:* `boolean`

---

##### `asmPassword`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.asmPassword"></a>

- *Type:* `string`

---

##### `asmServer`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.asmServer"></a>

- *Type:* `string`

---

##### `asmUser`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.asmUser"></a>

- *Type:* `string`

---

##### `charLengthSemantics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.charLengthSemantics"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `directPathNoLog`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.directPathNoLog"></a>

- *Type:* `boolean`

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.directPathParallelLoad"></a>

- *Type:* `boolean`

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.enableHomogenousTablespace"></a>

- *Type:* `boolean`

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.numberDatatypeScale"></a>

- *Type:* `number`

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.oraclePathPrefix"></a>

- *Type:* `string`

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.parallelAsmReadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.port"></a>

- *Type:* `number`

---

##### `readAheadBlocks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.readAheadBlocks"></a>

- *Type:* `number`

---

##### `readTableSpaceName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.readTableSpaceName"></a>

- *Type:* `boolean`

---

##### `replacePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.replacePathPrefix"></a>

- *Type:* `boolean`

---

##### `retryInterval`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.retryInterval"></a>

- *Type:* `number`

---

##### `securityDbEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.securityDbEncryption"></a>

- *Type:* `string`

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.securityDbEncryptionName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

- *Type:* `boolean`

---

##### `usePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.usePathPrefix"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointOracleSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointPostgreSqlSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `captureDdls`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.captureDdls"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

- *Type:* `string`

---

##### `executeTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.executeTimeout"></a>

- *Type:* `number`

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `slotName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.slotName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointPostgreSqlSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointRedshiftSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointRedshiftSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `acceptAnyDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.acceptAnyDate"></a>

- *Type:* `boolean`

---

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `bucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.caseSensitiveNames"></a>

- *Type:* `boolean`

---

##### `compUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.compUpdate"></a>

- *Type:* `boolean`

---

##### `connectionTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.connectionTimeout"></a>

- *Type:* `number`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `dateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.dateFormat"></a>

- *Type:* `string`

---

##### `emptyAsNull`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.emptyAsNull"></a>

- *Type:* `boolean`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `explicitIds`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.explicitIds"></a>

- *Type:* `boolean`

---

##### `fileTransferUploadStreams`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

- *Type:* `number`

---

##### `loadTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.loadTimeout"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.port"></a>

- *Type:* `number`

---

##### `removeQuotes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.removeQuotes"></a>

- *Type:* `boolean`

---

##### `replaceChars`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.replaceChars"></a>

- *Type:* `string`

---

##### `replaceInvalidChars`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.replaceInvalidChars"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timeFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.timeFormat"></a>

- *Type:* `string`

---

##### `trimBlanks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.trimBlanks"></a>

- *Type:* `boolean`

---

##### `truncateColumns`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.truncateColumns"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.username"></a>

- *Type:* `string`

---

##### `writeBufferSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointRedshiftSettings.property.writeBufferSize"></a>

- *Type:* `number`

---


### DMSResponsesCreateEndpointEndpointS3Settings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointS3Settings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.bucketName"></a>

- *Type:* `string`

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

- *Type:* `boolean`

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.cdcInsertsOnly"></a>

- *Type:* `boolean`

---

##### `compressionType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.compressionType"></a>

- *Type:* `string`

---

##### `csvDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.csvDelimiter"></a>

- *Type:* `string`

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.csvRowDelimiter"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.dataFormat"></a>

- *Type:* `string`

---

##### `dataPageSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.dataPageSize"></a>

- *Type:* `number`

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.datePartitionDelimiter"></a>

- *Type:* `string`

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.datePartitionEnabled"></a>

- *Type:* `boolean`

---

##### `datePartitionSequence`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.datePartitionSequence"></a>

- *Type:* `string`

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.dictPageSizeLimit"></a>

- *Type:* `number`

---

##### `enableStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.enableStatistics"></a>

- *Type:* `boolean`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.encodingType"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.includeOpForFullLoad"></a>

- *Type:* `boolean`

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

- *Type:* `boolean`

---

##### `parquetVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.parquetVersion"></a>

- *Type:* `string`

---

##### `rowGroupLength`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.rowGroupLength"></a>

- *Type:* `number`

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timestampColumnName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointS3Settings.property.timestampColumnName"></a>

- *Type:* `string`

---


### DMSResponsesCreateEndpointEndpointSybaseSettings <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEndpointEndpointSybaseSettings(__scope: Construct, __resources: string[], __input: DmsCreateEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEndpointMessage`](#aws-cdk-sdk.dms.DmsCreateEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEndpointEndpointSybaseSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesCreateEventSubscription <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscription.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEventSubscription(__scope: Construct, __resources: string[], __input: DmsCreateEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription`](#aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription)

---


### DMSResponsesCreateEventSubscriptionEventSubscription <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: DmsCreateEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsCreateEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### DMSResponsesCreateReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationInstance(__scope: Construct, __resources: string[], __input: DmsCreateReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationInstance`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstance.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance`](#aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance)

---


### DMSResponsesCreateReplicationInstanceReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationInstanceReplicationInstance(__scope: Construct, __resources: string[], __input: DmsCreateReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dnsNameServers`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.dnsNameServers"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `freeUntil`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.freeUntil"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues`](#aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstancePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePublicIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationInstanceStatus"></a>

- *Type:* `string`

---

##### `replicationSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup`](#aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup)

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership`](#aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership)[]

---


### DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DmsCreateReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstancePendingModifiedValues.property.replicationInstanceClass"></a>

- *Type:* `string`

---


### DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsCreateReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DMSResponsesCreateReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsCreateReplicationSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroup.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup`](#aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup)

---


### DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsCreateReplicationSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationSubnetGroupReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DMSResponsesCreateReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationTask(__scope: Construct, __resources: string[], __input: DmsCreateReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTask.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask)

---


### DMSResponsesCreateReplicationTaskReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationTaskReplicationTask(__scope: Construct, __resources: string[], __input: DmsCreateReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsCreateReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsCreateReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesCreateReplicationTaskReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesDeleteCertificate <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificate.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteCertificate(__scope: Construct, __resources: string[], __input: DmsDeleteCertificateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteCertificateMessage`](#aws-cdk-sdk.dms.DmsDeleteCertificateMessage)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificate.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate`](#aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate)

---


### DMSResponsesDeleteCertificateCertificate <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteCertificateCertificate(__scope: Construct, __resources: string[], __input: DmsDeleteCertificateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteCertificateMessage`](#aws-cdk-sdk.dms.DmsDeleteCertificateMessage)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.certificateCreationDate"></a>

- *Type:* `string`

---

##### `certificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.certificateIdentifier"></a>

- *Type:* `string`

---

##### `certificateOwner`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.certificateOwner"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.certificatePem"></a>

- *Type:* `string`

---

##### `certificateWallet`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.certificateWallet"></a>

- *Type:* `any`

---

##### `keyLength`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.keyLength"></a>

- *Type:* `number`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `validFromDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.validFromDate"></a>

- *Type:* `string`

---

##### `validToDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteCertificateCertificate.property.validToDate"></a>

- *Type:* `string`

---


### DMSResponsesDeleteConnection <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnection"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnection.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteConnection(__scope: Construct, __resources: string[], __input: DmsDeleteConnectionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteConnectionMessage`](#aws-cdk-sdk.dms.DmsDeleteConnectionMessage)

---



#### Properties <a name="Properties"></a>

##### `connection`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnection.property.connection"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection`](#aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection)

---


### DMSResponsesDeleteConnectionConnection <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteConnectionConnection(__scope: Construct, __resources: string[], __input: DmsDeleteConnectionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteConnectionMessage`](#aws-cdk-sdk.dms.DmsDeleteConnectionMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteConnectionConnection.property.status"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpoint <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpoint.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpoint(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpoint.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint)

---


### DMSResponsesDeleteEndpointEndpoint <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpoint(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.certificateArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.databaseName"></a>

- *Type:* `string`

---

##### `dmsTransferSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.dmsTransferSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings)

---

##### `docDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.docDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings)

---

##### `dynamoDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.dynamoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings)

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.elasticsearchSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings)

---

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `engineDisplayName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.engineDisplayName"></a>

- *Type:* `string`

---

##### `engineName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.engineName"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.externalId"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.extraConnectionAttributes"></a>

- *Type:* `string`

---

##### `ibmDb2Settings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.ibmDb2Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings)

---

##### `kafkaSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.kafkaSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings)

---

##### `kinesisSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.kinesisSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.microsoftSqlServerSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings)

---

##### `mongoDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.mongoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings)

---

##### `mySqlSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.mySqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings)

---

##### `neptuneSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.neptuneSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings)

---

##### `oracleSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.oracleSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.port"></a>

- *Type:* `number`

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.postgreSqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings)

---

##### `redshiftSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.redshiftSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings)

---

##### `s3Settings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.s3Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings)

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.serverName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `sslMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.sslMode"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.status"></a>

- *Type:* `string`

---

##### `sybaseSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.sybaseSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings`](#aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings)

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpoint.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointDmsTransferSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDmsTransferSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointDocDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointDocDbSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.docsToInvestigate"></a>

- *Type:* `number`

---

##### `extractDocId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.extractDocId"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDocDbSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointDynamoDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointElasticsearchSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointUri`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.property.endpointUri"></a>

- *Type:* `string`

---

##### `errorRetryDuration`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

- *Type:* `number`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointIbmDb2Settings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `currentLsn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.currentLsn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.databaseName"></a>

- *Type:* `string`

---

##### `maxKBytesPerRead`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.serverName"></a>

- *Type:* `string`

---

##### `setDataCaptureChanges`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointIbmDb2Settings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointKafkaSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointKafkaSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `broker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.broker"></a>

- *Type:* `string`

---

##### `includeControlDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `messageMaxBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.messageMaxBytes"></a>

- *Type:* `number`

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKafkaSettings.property.topic"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointKinesisSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointKinesisSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `includeControlDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointKinesisSettings.property.streamArn"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bcpPacketSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

- *Type:* `number`

---

##### `controlTablesFileGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.port"></a>

- *Type:* `number`

---

##### `readBackupOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

- *Type:* `boolean`

---

##### `safeguardPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useBcpFullLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMicrosoftSqlServerSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointMongoDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `authMechanism`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.authMechanism"></a>

- *Type:* `string`

---

##### `authSource`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.authSource"></a>

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.authType"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.docsToInvestigate"></a>

- *Type:* `string`

---

##### `extractDocId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.extractDocId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMongoDbSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointMySqlSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointMySqlSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `eventsPollInterval`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.eventsPollInterval"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.parallelLoadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.serverTimezone"></a>

- *Type:* `string`

---

##### `targetDbType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.targetDbType"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointMySqlSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointNeptuneSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `errorRetryDuration`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.iamAuthEnabled"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `maxRetryCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.maxRetryCount"></a>

- *Type:* `number`

---

##### `s3BucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.s3BucketFolder"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.s3BucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointOracleSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointOracleSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `accessAlternateDirectly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.accessAlternateDirectly"></a>

- *Type:* `boolean`

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

- *Type:* `number`

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.addSupplementalLogging"></a>

- *Type:* `boolean`

---

##### `allowSelectNestedTables`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.allowSelectNestedTables"></a>

- *Type:* `boolean`

---

##### `archivedLogDestId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.archivedLogDestId"></a>

- *Type:* `number`

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.archivedLogsOnly"></a>

- *Type:* `boolean`

---

##### `asmPassword`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.asmPassword"></a>

- *Type:* `string`

---

##### `asmServer`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.asmServer"></a>

- *Type:* `string`

---

##### `asmUser`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.asmUser"></a>

- *Type:* `string`

---

##### `charLengthSemantics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.charLengthSemantics"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `directPathNoLog`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.directPathNoLog"></a>

- *Type:* `boolean`

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.directPathParallelLoad"></a>

- *Type:* `boolean`

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.enableHomogenousTablespace"></a>

- *Type:* `boolean`

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.numberDatatypeScale"></a>

- *Type:* `number`

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.oraclePathPrefix"></a>

- *Type:* `string`

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.parallelAsmReadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.port"></a>

- *Type:* `number`

---

##### `readAheadBlocks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.readAheadBlocks"></a>

- *Type:* `number`

---

##### `readTableSpaceName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.readTableSpaceName"></a>

- *Type:* `boolean`

---

##### `replacePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.replacePathPrefix"></a>

- *Type:* `boolean`

---

##### `retryInterval`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.retryInterval"></a>

- *Type:* `number`

---

##### `securityDbEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.securityDbEncryption"></a>

- *Type:* `string`

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.securityDbEncryptionName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

- *Type:* `boolean`

---

##### `usePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.usePathPrefix"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointOracleSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointPostgreSqlSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `captureDdls`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.captureDdls"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

- *Type:* `string`

---

##### `executeTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.executeTimeout"></a>

- *Type:* `number`

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `slotName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.slotName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointPostgreSqlSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointRedshiftSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `acceptAnyDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.acceptAnyDate"></a>

- *Type:* `boolean`

---

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `bucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.caseSensitiveNames"></a>

- *Type:* `boolean`

---

##### `compUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.compUpdate"></a>

- *Type:* `boolean`

---

##### `connectionTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.connectionTimeout"></a>

- *Type:* `number`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `dateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.dateFormat"></a>

- *Type:* `string`

---

##### `emptyAsNull`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.emptyAsNull"></a>

- *Type:* `boolean`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `explicitIds`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.explicitIds"></a>

- *Type:* `boolean`

---

##### `fileTransferUploadStreams`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

- *Type:* `number`

---

##### `loadTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.loadTimeout"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.port"></a>

- *Type:* `number`

---

##### `removeQuotes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.removeQuotes"></a>

- *Type:* `boolean`

---

##### `replaceChars`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.replaceChars"></a>

- *Type:* `string`

---

##### `replaceInvalidChars`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.replaceInvalidChars"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timeFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.timeFormat"></a>

- *Type:* `string`

---

##### `trimBlanks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.trimBlanks"></a>

- *Type:* `boolean`

---

##### `truncateColumns`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.truncateColumns"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.username"></a>

- *Type:* `string`

---

##### `writeBufferSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointRedshiftSettings.property.writeBufferSize"></a>

- *Type:* `number`

---


### DMSResponsesDeleteEndpointEndpointS3Settings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointS3Settings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.bucketName"></a>

- *Type:* `string`

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

- *Type:* `boolean`

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.cdcInsertsOnly"></a>

- *Type:* `boolean`

---

##### `compressionType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.compressionType"></a>

- *Type:* `string`

---

##### `csvDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.csvDelimiter"></a>

- *Type:* `string`

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.csvRowDelimiter"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.dataFormat"></a>

- *Type:* `string`

---

##### `dataPageSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.dataPageSize"></a>

- *Type:* `number`

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.datePartitionDelimiter"></a>

- *Type:* `string`

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.datePartitionEnabled"></a>

- *Type:* `boolean`

---

##### `datePartitionSequence`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.datePartitionSequence"></a>

- *Type:* `string`

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.dictPageSizeLimit"></a>

- *Type:* `number`

---

##### `enableStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.enableStatistics"></a>

- *Type:* `boolean`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.encodingType"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.includeOpForFullLoad"></a>

- *Type:* `boolean`

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

- *Type:* `boolean`

---

##### `parquetVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.parquetVersion"></a>

- *Type:* `string`

---

##### `rowGroupLength`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.rowGroupLength"></a>

- *Type:* `number`

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timestampColumnName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointS3Settings.property.timestampColumnName"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEndpointEndpointSybaseSettings <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEndpointEndpointSybaseSettings(__scope: Construct, __resources: string[], __input: DmsDeleteEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEndpointMessage`](#aws-cdk-sdk.dms.DmsDeleteEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEndpointEndpointSybaseSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesDeleteEventSubscription <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscription.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEventSubscription(__scope: Construct, __resources: string[], __input: DmsDeleteEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription`](#aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription)

---


### DMSResponsesDeleteEventSubscriptionEventSubscription <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: DmsDeleteEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsDeleteEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### DMSResponsesDeleteReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationInstance(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationInstance`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstance.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance)

---


### DMSResponsesDeleteReplicationInstanceReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationInstanceReplicationInstance(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dnsNameServers`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.dnsNameServers"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `freeUntil`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.freeUntil"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstancePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePublicIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationInstanceStatus"></a>

- *Type:* `string`

---

##### `replicationSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup)

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership`](#aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership)[]

---


### DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstancePendingModifiedValues.property.replicationInstanceClass"></a>

- *Type:* `string`

---


### DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DMSResponsesDeleteReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationTask(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTask.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask)

---


### DMSResponsesDeleteReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRun.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationTaskAssessmentRun(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTaskAssessmentRun`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRun.property.replicationTaskAssessmentRun"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun)

---


### DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `assessmentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.assessmentProgress"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress)

---

##### `assessmentRunName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.assessmentRunName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunCreationDate"></a>

- *Type:* `string`

---

##### `resultEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultEncryptionMode"></a>

- *Type:* `string`

---

##### `resultKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultKmsKeyArn"></a>

- *Type:* `string`

---

##### `resultLocationBucket`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultLocationBucket"></a>

- *Type:* `string`

---

##### `resultLocationFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultLocationFolder"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.status"></a>

- *Type:* `string`

---


### DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `individualAssessmentCompletedCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.property.individualAssessmentCompletedCount"></a>

- *Type:* `number`

---

##### `individualAssessmentCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.property.individualAssessmentCount"></a>

- *Type:* `number`

---


### DMSResponsesDeleteReplicationTaskReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationTaskReplicationTask(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsDeleteReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsDeleteReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDeleteReplicationTaskReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesDescribeAccountAttributes <a name="aws-cdk-sdk.dms.DMSResponsesDescribeAccountAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeAccountAttributes.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeAccountAttributes(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeAccountAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeAccountAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `accountQuotas`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeAccountAttributes.property.accountQuotas"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsAccountQuota`](#aws-cdk-sdk.dms.DmsAccountQuota)[]

---

##### `uniqueAccountIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeAccountAttributes.property.uniqueAccountIdentifier"></a>

- *Type:* `string`

---


### DMSResponsesDescribeApplicableIndividualAssessments <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeApplicableIndividualAssessments(__scope: Construct, __resources: string[], __input: DmsDescribeApplicableIndividualAssessmentsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage`](#aws-cdk-sdk.dms.DmsDescribeApplicableIndividualAssessmentsMessage)

---



#### Properties <a name="Properties"></a>

##### `individualAssessmentNames`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments.property.individualAssessmentNames"></a>

- *Type:* `string`[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeApplicableIndividualAssessments.property.marker"></a>

- *Type:* `string`

---


### DMSResponsesDescribeCertificates <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeCertificates(__scope: Construct, __resources: string[], __input: DmsDescribeCertificatesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeCertificatesMessage`](#aws-cdk-sdk.dms.DmsDescribeCertificatesMessage)

---



#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates.property.certificates"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsCertificate`](#aws-cdk-sdk.dms.DmsCertificate)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeCertificates.property.marker"></a>

- *Type:* `string`

---


### DMSResponsesDescribeConnections <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeConnections(__scope: Construct, __resources: string[], __input: DmsDescribeConnectionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeConnectionsMessage`](#aws-cdk-sdk.dms.DmsDescribeConnectionsMessage)

---



#### Properties <a name="Properties"></a>

##### `connections`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections.property.connections"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsConnection`](#aws-cdk-sdk.dms.DmsConnection)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeConnections.property.marker"></a>

- *Type:* `string`

---


### DMSResponsesDescribeEndpoints <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeEndpoints(__scope: Construct, __resources: string[], __input: DmsDescribeEndpointsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEndpointsMessage`](#aws-cdk-sdk.dms.DmsDescribeEndpointsMessage)

---



#### Properties <a name="Properties"></a>

##### `endpoints`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints.property.endpoints"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEndpoint`](#aws-cdk-sdk.dms.DmsEndpoint)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpoints.property.marker"></a>

- *Type:* `string`

---


### DMSResponsesDescribeEndpointTypes <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeEndpointTypes(__scope: Construct, __resources: string[], __input: DmsDescribeEndpointTypesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage`](#aws-cdk-sdk.dms.DmsDescribeEndpointTypesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes.property.marker"></a>

- *Type:* `string`

---

##### `supportedEndpointTypes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEndpointTypes.property.supportedEndpointTypes"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSupportedEndpointType`](#aws-cdk-sdk.dms.DmsSupportedEndpointType)[]

---


### DMSResponsesDescribeEventCategories <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventCategories"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventCategories.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeEventCategories(__scope: Construct, __resources: string[], __input: DmsDescribeEventCategoriesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventCategories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventCategories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventCategories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage`](#aws-cdk-sdk.dms.DmsDescribeEventCategoriesMessage)

---



#### Properties <a name="Properties"></a>

##### `eventCategoryGroupList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventCategories.property.eventCategoryGroupList"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventCategoryGroup`](#aws-cdk-sdk.dms.DmsEventCategoryGroup)[]

---


### DMSResponsesDescribeEvents <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: DmsDescribeEventsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEventsMessage`](#aws-cdk-sdk.dms.DmsDescribeEventsMessage)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEvent`](#aws-cdk-sdk.dms.DmsEvent)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEvents.property.marker"></a>

- *Type:* `string`

---


### DMSResponsesDescribeEventSubscriptions <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeEventSubscriptions(__scope: Construct, __resources: string[], __input: DmsDescribeEventSubscriptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage`](#aws-cdk-sdk.dms.DmsDescribeEventSubscriptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscriptionsList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions.property.eventSubscriptionsList"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsEventSubscription`](#aws-cdk-sdk.dms.DmsEventSubscription)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeEventSubscriptions.property.marker"></a>

- *Type:* `string`

---


### DMSResponsesDescribeOrderableReplicationInstances <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeOrderableReplicationInstances(__scope: Construct, __resources: string[], __input: DmsDescribeOrderableReplicationInstancesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage`](#aws-cdk-sdk.dms.DmsDescribeOrderableReplicationInstancesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances.property.marker"></a>

- *Type:* `string`

---

##### `orderableReplicationInstances`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeOrderableReplicationInstances.property.orderableReplicationInstances"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsOrderableReplicationInstance`](#aws-cdk-sdk.dms.DmsOrderableReplicationInstance)[]

---


### DMSResponsesDescribePendingMaintenanceActions <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribePendingMaintenanceActions(__scope: Construct, __resources: string[], __input: DmsDescribePendingMaintenanceActionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage`](#aws-cdk-sdk.dms.DmsDescribePendingMaintenanceActionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions.property.marker"></a>

- *Type:* `string`

---

##### `pendingMaintenanceActions`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribePendingMaintenanceActions.property.pendingMaintenanceActions"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions`](#aws-cdk-sdk.dms.DmsResourcePendingMaintenanceActions)[]

---


### DMSResponsesDescribeRefreshSchemasStatus <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatus"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatus.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeRefreshSchemasStatus(__scope: Construct, __resources: string[], __input: DmsDescribeRefreshSchemasStatusMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage`](#aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage)

---



#### Properties <a name="Properties"></a>

##### `refreshSchemasStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatus.property.refreshSchemasStatus"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus`](#aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus)

---


### DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus(__scope: Construct, __resources: string[], __input: DmsDescribeRefreshSchemasStatusMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage`](#aws-cdk-sdk.dms.DmsDescribeRefreshSchemasStatusMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.property.endpointArn"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastRefreshDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.property.lastRefreshDate"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeRefreshSchemasStatusRefreshSchemasStatus.property.status"></a>

- *Type:* `string`

---


### DMSResponsesDescribeReplicationInstances <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationInstances(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationInstancesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationInstancesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances.property.marker"></a>

- *Type:* `string`

---

##### `replicationInstances`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstances.property.replicationInstances"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstance`](#aws-cdk-sdk.dms.DmsReplicationInstance)[]

---


### DMSResponsesDescribeReplicationInstanceTaskLogs <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationInstanceTaskLogs(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationInstanceTaskLogsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationInstanceTaskLogsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.property.marker"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceTaskLogs`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationInstanceTaskLogs.property.replicationInstanceTaskLogs"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog`](#aws-cdk-sdk.dms.DmsReplicationInstanceTaskLog)[]

---


### DMSResponsesDescribeReplicationSubnetGroups <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationSubnetGroups(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationSubnetGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationSubnetGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups.property.marker"></a>

- *Type:* `string`

---

##### `replicationSubnetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationSubnetGroups.property.replicationSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationSubnetGroup`](#aws-cdk-sdk.dms.DmsReplicationSubnetGroup)[]

---


### DMSResponsesDescribeReplicationTaskAssessmentResults <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationTaskAssessmentResults(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationTaskAssessmentResultsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentResultsMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.property.bucketName"></a>

- *Type:* `string`

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentResults`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentResults.property.replicationTaskAssessmentResults"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentResult)[]

---


### DMSResponsesDescribeReplicationTaskAssessmentRuns <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationTaskAssessmentRuns(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationTaskAssessmentRunsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTaskAssessmentRunsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRuns`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskAssessmentRuns.property.replicationTaskAssessmentRuns"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DmsReplicationTaskAssessmentRun)[]

---


### DMSResponsesDescribeReplicationTaskIndividualAssessments <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationTaskIndividualAssessments(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationTaskIndividualAssessmentsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTaskIndividualAssessmentsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskIndividualAssessments`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTaskIndividualAssessments.property.replicationTaskIndividualAssessments"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment`](#aws-cdk-sdk.dms.DmsReplicationTaskIndividualAssessment)[]

---


### DMSResponsesDescribeReplicationTasks <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeReplicationTasks(__scope: Construct, __resources: string[], __input: DmsDescribeReplicationTasksMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage`](#aws-cdk-sdk.dms.DmsDescribeReplicationTasksMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks.property.marker"></a>

- *Type:* `string`

---

##### `replicationTasks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeReplicationTasks.property.replicationTasks"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReplicationTask`](#aws-cdk-sdk.dms.DmsReplicationTask)[]

---


### DMSResponsesDescribeSchemas <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeSchemas(__scope: Construct, __resources: string[], __input: DmsDescribeSchemasMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeSchemasMessage`](#aws-cdk-sdk.dms.DmsDescribeSchemasMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas.property.marker"></a>

- *Type:* `string`

---

##### `schemas`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeSchemas.property.schemas"></a>

- *Type:* `string`[]

---


### DMSResponsesDescribeTableStatistics <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesDescribeTableStatistics(__scope: Construct, __resources: string[], __input: DmsDescribeTableStatisticsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage`](#aws-cdk-sdk.dms.DmsDescribeTableStatisticsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.property.marker"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `tableStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesDescribeTableStatistics.property.tableStatistics"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTableStatistics`](#aws-cdk-sdk.dms.DmsTableStatistics)[]

---


### DMSResponsesImportCertificate <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificate.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesImportCertificate(__scope: Construct, __resources: string[], __input: DmsImportCertificateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsImportCertificateMessage`](#aws-cdk-sdk.dms.DmsImportCertificateMessage)

---



#### Properties <a name="Properties"></a>

##### `certificate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificate.property.certificate"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate`](#aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate)

---


### DMSResponsesImportCertificateCertificate <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesImportCertificateCertificate(__scope: Construct, __resources: string[], __input: DmsImportCertificateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsImportCertificateMessage`](#aws-cdk-sdk.dms.DmsImportCertificateMessage)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.certificateArn"></a>

- *Type:* `string`

---

##### `certificateCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.certificateCreationDate"></a>

- *Type:* `string`

---

##### `certificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.certificateIdentifier"></a>

- *Type:* `string`

---

##### `certificateOwner`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.certificateOwner"></a>

- *Type:* `string`

---

##### `certificatePem`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.certificatePem"></a>

- *Type:* `string`

---

##### `certificateWallet`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.certificateWallet"></a>

- *Type:* `any`

---

##### `keyLength`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.keyLength"></a>

- *Type:* `number`

---

##### `signingAlgorithm`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.signingAlgorithm"></a>

- *Type:* `string`

---

##### `validFromDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.validFromDate"></a>

- *Type:* `string`

---

##### `validToDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesImportCertificateCertificate.property.validToDate"></a>

- *Type:* `string`

---


### DMSResponsesListTagsForResource <a name="aws-cdk-sdk.dms.DMSResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesListTagsForResource.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: DmsListTagsForResourceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsListTagsForResourceMessage`](#aws-cdk-sdk.dms.DmsListTagsForResourceMessage)

---



#### Properties <a name="Properties"></a>

##### `tagList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesListTagsForResource.property.tagList"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTag`](#aws-cdk-sdk.dms.DmsTag)[]

---


### DMSResponsesModifyEndpoint <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpoint.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpoint(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpoint.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint)

---


### DMSResponsesModifyEndpointEndpoint <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpoint(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `certificateArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.certificateArn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.databaseName"></a>

- *Type:* `string`

---

##### `dmsTransferSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.dmsTransferSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings)

---

##### `docDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.docDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings)

---

##### `dynamoDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.dynamoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings)

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.elasticsearchSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings)

---

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `endpointType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.endpointType"></a>

- *Type:* `string`

---

##### `engineDisplayName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.engineDisplayName"></a>

- *Type:* `string`

---

##### `engineName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.engineName"></a>

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.externalId"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.extraConnectionAttributes"></a>

- *Type:* `string`

---

##### `ibmDb2Settings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.ibmDb2Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings)

---

##### `kafkaSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.kafkaSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings)

---

##### `kinesisSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.kinesisSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings)

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.microsoftSqlServerSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings)

---

##### `mongoDbSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.mongoDbSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings)

---

##### `mySqlSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.mySqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings)

---

##### `neptuneSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.neptuneSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings)

---

##### `oracleSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.oracleSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings)

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.port"></a>

- *Type:* `number`

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.postgreSqlSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings)

---

##### `redshiftSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.redshiftSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings)

---

##### `s3Settings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.s3Settings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings)

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.serverName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `sslMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.sslMode"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.status"></a>

- *Type:* `string`

---

##### `sybaseSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.sybaseSettings"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings`](#aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings)

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpoint.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointDmsTransferSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDmsTransferSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointDocDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointDocDbSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.docsToInvestigate"></a>

- *Type:* `number`

---

##### `extractDocId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.extractDocId"></a>

- *Type:* `boolean`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDocDbSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointDynamoDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointElasticsearchSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointUri`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.property.endpointUri"></a>

- *Type:* `string`

---

##### `errorRetryDuration`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

- *Type:* `number`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointIbmDb2Settings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `currentLsn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.currentLsn"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.databaseName"></a>

- *Type:* `string`

---

##### `maxKBytesPerRead`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.serverName"></a>

- *Type:* `string`

---

##### `setDataCaptureChanges`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointIbmDb2Settings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointKafkaSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointKafkaSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `broker`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.broker"></a>

- *Type:* `string`

---

##### `includeControlDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `messageMaxBytes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.messageMaxBytes"></a>

- *Type:* `number`

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `topic`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKafkaSettings.property.topic"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointKinesisSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointKinesisSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `includeControlDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.includeControlDetails"></a>

- *Type:* `boolean`

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.includeNullAndEmpty"></a>

- *Type:* `boolean`

---

##### `includePartitionValue`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.includePartitionValue"></a>

- *Type:* `boolean`

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.includeTableAlterOperations"></a>

- *Type:* `boolean`

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.includeTransactionDetails"></a>

- *Type:* `boolean`

---

##### `messageFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.messageFormat"></a>

- *Type:* `string`

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

- *Type:* `boolean`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `streamArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointKinesisSettings.property.streamArn"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bcpPacketSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

- *Type:* `number`

---

##### `controlTablesFileGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.port"></a>

- *Type:* `number`

---

##### `readBackupOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

- *Type:* `boolean`

---

##### `safeguardPolicy`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useBcpFullLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMicrosoftSqlServerSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointMongoDbSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointMongoDbSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `authMechanism`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.authMechanism"></a>

- *Type:* `string`

---

##### `authSource`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.authSource"></a>

- *Type:* `string`

---

##### `authType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.authType"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `docsToInvestigate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.docsToInvestigate"></a>

- *Type:* `string`

---

##### `extractDocId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.extractDocId"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `nestingLevel`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.nestingLevel"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMongoDbSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointMySqlSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointMySqlSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `eventsPollInterval`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.eventsPollInterval"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.parallelLoadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverTimezone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.serverTimezone"></a>

- *Type:* `string`

---

##### `targetDbType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.targetDbType"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointMySqlSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointNeptuneSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointNeptuneSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `errorRetryDuration`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.errorRetryDuration"></a>

- *Type:* `number`

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.iamAuthEnabled"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `maxRetryCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.maxRetryCount"></a>

- *Type:* `number`

---

##### `s3BucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.s3BucketFolder"></a>

- *Type:* `string`

---

##### `s3BucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.s3BucketName"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointOracleSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointOracleSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `accessAlternateDirectly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.accessAlternateDirectly"></a>

- *Type:* `boolean`

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

- *Type:* `number`

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.addSupplementalLogging"></a>

- *Type:* `boolean`

---

##### `allowSelectNestedTables`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.allowSelectNestedTables"></a>

- *Type:* `boolean`

---

##### `archivedLogDestId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.archivedLogDestId"></a>

- *Type:* `number`

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.archivedLogsOnly"></a>

- *Type:* `boolean`

---

##### `asmPassword`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.asmPassword"></a>

- *Type:* `string`

---

##### `asmServer`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.asmServer"></a>

- *Type:* `string`

---

##### `asmUser`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.asmUser"></a>

- *Type:* `string`

---

##### `charLengthSemantics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.charLengthSemantics"></a>

- *Type:* `string`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `directPathNoLog`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.directPathNoLog"></a>

- *Type:* `boolean`

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.directPathParallelLoad"></a>

- *Type:* `boolean`

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.enableHomogenousTablespace"></a>

- *Type:* `boolean`

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.numberDatatypeScale"></a>

- *Type:* `number`

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.oraclePathPrefix"></a>

- *Type:* `string`

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.parallelAsmReadThreads"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.port"></a>

- *Type:* `number`

---

##### `readAheadBlocks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.readAheadBlocks"></a>

- *Type:* `number`

---

##### `readTableSpaceName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.readTableSpaceName"></a>

- *Type:* `boolean`

---

##### `replacePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.replacePathPrefix"></a>

- *Type:* `boolean`

---

##### `retryInterval`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.retryInterval"></a>

- *Type:* `number`

---

##### `securityDbEncryption`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.securityDbEncryption"></a>

- *Type:* `string`

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.securityDbEncryptionName"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.serverName"></a>

- *Type:* `string`

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

- *Type:* `boolean`

---

##### `usePathPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.usePathPrefix"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointOracleSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointPostgreSqlSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `captureDdls`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.captureDdls"></a>

- *Type:* `boolean`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

- *Type:* `string`

---

##### `executeTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.executeTimeout"></a>

- *Type:* `number`

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

- *Type:* `boolean`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.serverName"></a>

- *Type:* `string`

---

##### `slotName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.slotName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointPostgreSqlSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointRedshiftSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointRedshiftSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `acceptAnyDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.acceptAnyDate"></a>

- *Type:* `boolean`

---

##### `afterConnectScript`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.afterConnectScript"></a>

- *Type:* `string`

---

##### `bucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.bucketName"></a>

- *Type:* `string`

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.caseSensitiveNames"></a>

- *Type:* `boolean`

---

##### `compUpdate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.compUpdate"></a>

- *Type:* `boolean`

---

##### `connectionTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.connectionTimeout"></a>

- *Type:* `number`

---

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `dateFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.dateFormat"></a>

- *Type:* `string`

---

##### `emptyAsNull`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.emptyAsNull"></a>

- *Type:* `boolean`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `explicitIds`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.explicitIds"></a>

- *Type:* `boolean`

---

##### `fileTransferUploadStreams`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

- *Type:* `number`

---

##### `loadTimeout`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.loadTimeout"></a>

- *Type:* `number`

---

##### `maxFileSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.maxFileSize"></a>

- *Type:* `number`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.port"></a>

- *Type:* `number`

---

##### `removeQuotes`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.removeQuotes"></a>

- *Type:* `boolean`

---

##### `replaceChars`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.replaceChars"></a>

- *Type:* `string`

---

##### `replaceInvalidChars`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.replaceInvalidChars"></a>

- *Type:* `string`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.serverName"></a>

- *Type:* `string`

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timeFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.timeFormat"></a>

- *Type:* `string`

---

##### `trimBlanks`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.trimBlanks"></a>

- *Type:* `boolean`

---

##### `truncateColumns`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.truncateColumns"></a>

- *Type:* `boolean`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.username"></a>

- *Type:* `string`

---

##### `writeBufferSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointRedshiftSettings.property.writeBufferSize"></a>

- *Type:* `number`

---


### DMSResponsesModifyEndpointEndpointS3Settings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointS3Settings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.bucketFolder"></a>

- *Type:* `string`

---

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.bucketName"></a>

- *Type:* `string`

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

- *Type:* `boolean`

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.cdcInsertsOnly"></a>

- *Type:* `boolean`

---

##### `compressionType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.compressionType"></a>

- *Type:* `string`

---

##### `csvDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.csvDelimiter"></a>

- *Type:* `string`

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.csvRowDelimiter"></a>

- *Type:* `string`

---

##### `dataFormat`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.dataFormat"></a>

- *Type:* `string`

---

##### `dataPageSize`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.dataPageSize"></a>

- *Type:* `number`

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.datePartitionDelimiter"></a>

- *Type:* `string`

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.datePartitionEnabled"></a>

- *Type:* `boolean`

---

##### `datePartitionSequence`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.datePartitionSequence"></a>

- *Type:* `string`

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.dictPageSizeLimit"></a>

- *Type:* `number`

---

##### `enableStatistics`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.enableStatistics"></a>

- *Type:* `boolean`

---

##### `encodingType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.encodingType"></a>

- *Type:* `string`

---

##### `encryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.encryptionMode"></a>

- *Type:* `string`

---

##### `externalTableDefinition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.externalTableDefinition"></a>

- *Type:* `string`

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.includeOpForFullLoad"></a>

- *Type:* `boolean`

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

- *Type:* `boolean`

---

##### `parquetVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.parquetVersion"></a>

- *Type:* `string`

---

##### `rowGroupLength`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.rowGroupLength"></a>

- *Type:* `number`

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `timestampColumnName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointS3Settings.property.timestampColumnName"></a>

- *Type:* `string`

---


### DMSResponsesModifyEndpointEndpointSybaseSettings <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEndpointEndpointSybaseSettings(__scope: Construct, __resources: string[], __input: DmsModifyEndpointMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEndpointMessage`](#aws-cdk-sdk.dms.DmsModifyEndpointMessage)

---



#### Properties <a name="Properties"></a>

##### `databaseName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.property.databaseName"></a>

- *Type:* `string`

---

##### `password`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.property.password"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.property.port"></a>

- *Type:* `number`

---

##### `serverName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.property.serverName"></a>

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEndpointEndpointSybaseSettings.property.username"></a>

- *Type:* `string`

---


### DMSResponsesModifyEventSubscription <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscription.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEventSubscription(__scope: Construct, __resources: string[], __input: DmsModifyEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription`](#aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription)

---


### DMSResponsesModifyEventSubscriptionEventSubscription <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: DmsModifyEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage`](#aws-cdk-sdk.dms.DmsModifyEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---


### DMSResponsesModifyReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationInstance(__scope: Construct, __resources: string[], __input: DmsModifyReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationInstance`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstance.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance`](#aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance)

---


### DMSResponsesModifyReplicationInstanceReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationInstanceReplicationInstance(__scope: Construct, __resources: string[], __input: DmsModifyReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dnsNameServers`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.dnsNameServers"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `freeUntil`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.freeUntil"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues`](#aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstancePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePublicIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationInstanceStatus"></a>

- *Type:* `string`

---

##### `replicationSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup`](#aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup)

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership`](#aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership)[]

---


### DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DmsModifyReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstancePendingModifiedValues.property.replicationInstanceClass"></a>

- *Type:* `string`

---


### DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsModifyReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DMSResponsesModifyReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsModifyReplicationSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroup.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup`](#aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup)

---


### DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsModifyReplicationSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationSubnetGroupReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DMSResponsesModifyReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationTask(__scope: Construct, __resources: string[], __input: DmsModifyReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTask.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask)

---


### DMSResponsesModifyReplicationTaskReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationTaskReplicationTask(__scope: Construct, __resources: string[], __input: DmsModifyReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsModifyReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsModifyReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesModifyReplicationTaskReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesMoveReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesMoveReplicationTask(__scope: Construct, __resources: string[], __input: DmsMoveReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTask.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask)

---


### DMSResponsesMoveReplicationTaskReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesMoveReplicationTaskReplicationTask(__scope: Construct, __resources: string[], __input: DmsMoveReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsMoveReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsMoveReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesMoveReplicationTaskReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesRebootReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesRebootReplicationInstance(__scope: Construct, __resources: string[], __input: DmsRebootReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationInstance`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstance.property.replicationInstance"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance`](#aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance)

---


### DMSResponsesRebootReplicationInstanceReplicationInstance <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesRebootReplicationInstanceReplicationInstance(__scope: Construct, __resources: string[], __input: DmsRebootReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.autoMinorVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.availabilityZone"></a>

- *Type:* `string`

---

##### `dnsNameServers`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.dnsNameServers"></a>

- *Type:* `string`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.engineVersion"></a>

- *Type:* `string`

---

##### `freeUntil`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.freeUntil"></a>

- *Type:* `string`

---

##### `instanceCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.instanceCreateTime"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.multiAz"></a>

- *Type:* `boolean`

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues`](#aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstanceClass"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePrivateIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstancePrivateIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstancePublicIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddress"></a>

- *Type:* `string`

---

##### `replicationInstancePublicIpAddresses`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstancePublicIpAddresses"></a>

- *Type:* `string`[]

---

##### `replicationInstanceStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationInstanceStatus"></a>

- *Type:* `string`

---

##### `replicationSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.replicationSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup`](#aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup)

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.secondaryAvailabilityZone"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstance.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership`](#aws-cdk-sdk.dms.DmsVpcSecurityGroupMembership)[]

---


### DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues(__scope: Construct, __resources: string[], __input: DmsRebootReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allocatedStorage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.property.allocatedStorage"></a>

- *Type:* `number`

---

##### `engineVersion`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.property.engineVersion"></a>

- *Type:* `string`

---

##### `multiAz`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.property.multiAz"></a>

- *Type:* `boolean`

---

##### `replicationInstanceClass`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstancePendingModifiedValues.property.replicationInstanceClass"></a>

- *Type:* `string`

---


### DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup(__scope: Construct, __resources: string[], __input: DmsRebootReplicationInstanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage`](#aws-cdk-sdk.dms.DmsRebootReplicationInstanceMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationSubnetGroupDescription`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

- *Type:* `string`

---

##### `replicationSubnetGroupIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.replicationSubnetGroupIdentifier"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsSubnet`](#aws-cdk-sdk.dms.DmsSubnet)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRebootReplicationInstanceReplicationInstanceReplicationSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### DMSResponsesRefreshSchemas <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemas"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemas.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesRefreshSchemas(__scope: Construct, __resources: string[], __input: DmsRefreshSchemasMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemas.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemas.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemas.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRefreshSchemasMessage`](#aws-cdk-sdk.dms.DmsRefreshSchemasMessage)

---



#### Properties <a name="Properties"></a>

##### `refreshSchemasStatus`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemas.property.refreshSchemasStatus"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus`](#aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus)

---


### DMSResponsesRefreshSchemasRefreshSchemasStatus <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesRefreshSchemasRefreshSchemasStatus(__scope: Construct, __resources: string[], __input: DmsRefreshSchemasMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsRefreshSchemasMessage`](#aws-cdk-sdk.dms.DmsRefreshSchemasMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.property.endpointArn"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastRefreshDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.property.lastRefreshDate"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesRefreshSchemasRefreshSchemasStatus.property.status"></a>

- *Type:* `string`

---


### DMSResponsesReloadTables <a name="aws-cdk-sdk.dms.DMSResponsesReloadTables"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesReloadTables.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesReloadTables(__scope: Construct, __resources: string[], __input: DmsReloadTablesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesReloadTables.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesReloadTables.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesReloadTables.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsReloadTablesMessage`](#aws-cdk-sdk.dms.DmsReloadTablesMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesReloadTables.property.replicationTaskArn"></a>

- *Type:* `string`

---


### DMSResponsesStartReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTask(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTask.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask)

---


### DMSResponsesStartReplicationTaskAssessment <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessment"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessment.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskAssessment(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskAssessmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessment.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessment.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessment.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessment.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask)

---


### DMSResponsesStartReplicationTaskAssessmentReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskAssessmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskAssessmentMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesStartReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRun.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskAssessmentRun(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTaskAssessmentRun`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRun.property.replicationTaskAssessmentRun"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun`](#aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun)

---


### DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `assessmentProgress`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.assessmentProgress"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress`](#aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress)

---

##### `assessmentRunName`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.assessmentRunName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunArn"></a>

- *Type:* `string`

---

##### `replicationTaskAssessmentRunCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.replicationTaskAssessmentRunCreationDate"></a>

- *Type:* `string`

---

##### `resultEncryptionMode`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultEncryptionMode"></a>

- *Type:* `string`

---

##### `resultKmsKeyArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultKmsKeyArn"></a>

- *Type:* `string`

---

##### `resultLocationBucket`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultLocationBucket"></a>

- *Type:* `string`

---

##### `resultLocationFolder`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.resultLocationFolder"></a>

- *Type:* `string`

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.serviceAccessRoleArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRun.property.status"></a>

- *Type:* `string`

---


### DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskAssessmentRunMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskAssessmentRunMessage)

---



#### Properties <a name="Properties"></a>

##### `individualAssessmentCompletedCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.property.individualAssessmentCompletedCount"></a>

- *Type:* `number`

---

##### `individualAssessmentCount`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskAssessmentRunReplicationTaskAssessmentRunAssessmentProgress.property.individualAssessmentCount"></a>

- *Type:* `number`

---


### DMSResponsesStartReplicationTaskReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskReplicationTask(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsStartReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStartReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStartReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStartReplicationTaskReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesStopReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStopReplicationTask(__scope: Construct, __resources: string[], __input: DmsStopReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStopReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStopReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `replicationTask`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTask.property.replicationTask"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask`](#aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask)

---


### DMSResponsesStopReplicationTaskReplicationTask <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStopReplicationTaskReplicationTask(__scope: Construct, __resources: string[], __input: DmsStopReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStopReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStopReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `cdcStartPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.cdcStartPosition"></a>

- *Type:* `string`

---

##### `cdcStopPosition`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.cdcStopPosition"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `migrationType`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.migrationType"></a>

- *Type:* `string`

---

##### `recoveryCheckpoint`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.recoveryCheckpoint"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationTaskArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationTaskArn"></a>

- *Type:* `string`

---

##### `replicationTaskCreationDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationTaskCreationDate"></a>

- *Type:* `string`

---

##### `replicationTaskIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationTaskIdentifier"></a>

- *Type:* `string`

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationTaskSettings"></a>

- *Type:* `string`

---

##### `replicationTaskStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationTaskStartDate"></a>

- *Type:* `string`

---

##### `replicationTaskStats`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.replicationTaskStats"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats`](#aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats)

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.sourceEndpointArn"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.status"></a>

- *Type:* `string`

---

##### `stopReason`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.stopReason"></a>

- *Type:* `string`

---

##### `tableMappings`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.tableMappings"></a>

- *Type:* `string`

---

##### `targetEndpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.targetEndpointArn"></a>

- *Type:* `string`

---

##### `targetReplicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.targetReplicationInstanceArn"></a>

- *Type:* `string`

---

##### `taskData`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTask.property.taskData"></a>

- *Type:* `string`

---


### DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats(__scope: Construct, __resources: string[], __input: DmsStopReplicationTaskMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsStopReplicationTaskMessage`](#aws-cdk-sdk.dms.DmsStopReplicationTaskMessage)

---



#### Properties <a name="Properties"></a>

##### `elapsedTimeMillis`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.elapsedTimeMillis"></a>

- *Type:* `number`

---

##### `freshStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.freshStartDate"></a>

- *Type:* `string`

---

##### `fullLoadFinishDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadFinishDate"></a>

- *Type:* `string`

---

##### `fullLoadProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadProgressPercent"></a>

- *Type:* `number`

---

##### `fullLoadStartDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.fullLoadStartDate"></a>

- *Type:* `string`

---

##### `startDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.startDate"></a>

- *Type:* `string`

---

##### `stopDate`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.stopDate"></a>

- *Type:* `string`

---

##### `tablesErrored`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.tablesErrored"></a>

- *Type:* `number`

---

##### `tablesLoaded`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoaded"></a>

- *Type:* `number`

---

##### `tablesLoading`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.tablesLoading"></a>

- *Type:* `number`

---

##### `tablesQueued`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesStopReplicationTaskReplicationTaskReplicationTaskStats.property.tablesQueued"></a>

- *Type:* `number`

---


### DMSResponsesTestConnection <a name="aws-cdk-sdk.dms.DMSResponsesTestConnection"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesTestConnection.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesTestConnection(__scope: Construct, __resources: string[], __input: DmsTestConnectionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTestConnectionMessage`](#aws-cdk-sdk.dms.DmsTestConnectionMessage)

---



#### Properties <a name="Properties"></a>

##### `connection`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnection.property.connection"></a>

- *Type:* [`aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection`](#aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection)

---


### DMSResponsesTestConnectionConnection <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection"></a>

#### Initializer <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.Initializer"></a>

```typescript
import { dms } from 'aws-cdk-sdk'

new dms.DMSResponsesTestConnectionConnection(__scope: Construct, __resources: string[], __input: DmsTestConnectionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.dms.DmsTestConnectionMessage`](#aws-cdk-sdk.dms.DmsTestConnectionMessage)

---



#### Properties <a name="Properties"></a>

##### `endpointArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.property.endpointArn"></a>

- *Type:* `string`

---

##### `endpointIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.property.endpointIdentifier"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.property.replicationInstanceArn"></a>

- *Type:* `string`

---

##### `replicationInstanceIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.property.replicationInstanceIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.dms.DMSResponsesTestConnectionConnection.property.status"></a>

- *Type:* `string`

---



