# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### RedshiftClient <a name="aws-cdk-sdk.redshift.RedshiftClient"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftClient.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `acceptReservedNodeExchange` <a name="aws-cdk-sdk.redshift.RedshiftClient.acceptReservedNodeExchange"></a>

```typescript
public acceptReservedNodeExchange(input: RedshiftAcceptReservedNodeExchangeInputMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage`](#aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage)

---

##### `authorizeClusterSecurityGroupIngress` <a name="aws-cdk-sdk.redshift.RedshiftClient.authorizeClusterSecurityGroupIngress"></a>

```typescript
public authorizeClusterSecurityGroupIngress(input: RedshiftAuthorizeClusterSecurityGroupIngressMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage`](#aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage)

---

##### `authorizeSnapshotAccess` <a name="aws-cdk-sdk.redshift.RedshiftClient.authorizeSnapshotAccess"></a>

```typescript
public authorizeSnapshotAccess(input: RedshiftAuthorizeSnapshotAccessMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage`](#aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage)

---

##### `batchDeleteClusterSnapshots` <a name="aws-cdk-sdk.redshift.RedshiftClient.batchDeleteClusterSnapshots"></a>

```typescript
public batchDeleteClusterSnapshots(input: RedshiftBatchDeleteClusterSnapshotsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsRequest`](#aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsRequest)

---

##### `batchModifyClusterSnapshots` <a name="aws-cdk-sdk.redshift.RedshiftClient.batchModifyClusterSnapshots"></a>

```typescript
public batchModifyClusterSnapshots(input: RedshiftBatchModifyClusterSnapshotsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage`](#aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage)

---

##### `cancelResize` <a name="aws-cdk-sdk.redshift.RedshiftClient.cancelResize"></a>

```typescript
public cancelResize(input: RedshiftCancelResizeMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCancelResizeMessage`](#aws-cdk-sdk.redshift.RedshiftCancelResizeMessage)

---

##### `copyClusterSnapshot` <a name="aws-cdk-sdk.redshift.RedshiftClient.copyClusterSnapshot"></a>

```typescript
public copyClusterSnapshot(input: RedshiftCopyClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage)

---

##### `createCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.createCluster"></a>

```typescript
public createCluster(input: RedshiftCreateClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---

##### `createClusterParameterGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.createClusterParameterGroup"></a>

```typescript
public createClusterParameterGroup(input: RedshiftCreateClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage)

---

##### `createClusterSecurityGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.createClusterSecurityGroup"></a>

```typescript
public createClusterSecurityGroup(input: RedshiftCreateClusterSecurityGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage)

---

##### `createClusterSnapshot` <a name="aws-cdk-sdk.redshift.RedshiftClient.createClusterSnapshot"></a>

```typescript
public createClusterSnapshot(input: RedshiftCreateClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage)

---

##### `createClusterSubnetGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.createClusterSubnetGroup"></a>

```typescript
public createClusterSubnetGroup(input: RedshiftCreateClusterSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage)

---

##### `createEventSubscription` <a name="aws-cdk-sdk.redshift.RedshiftClient.createEventSubscription"></a>

```typescript
public createEventSubscription(input: RedshiftCreateEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage)

---

##### `createHsmClientCertificate` <a name="aws-cdk-sdk.redshift.RedshiftClient.createHsmClientCertificate"></a>

```typescript
public createHsmClientCertificate(input: RedshiftCreateHsmClientCertificateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage`](#aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage)

---

##### `createHsmConfiguration` <a name="aws-cdk-sdk.redshift.RedshiftClient.createHsmConfiguration"></a>

```typescript
public createHsmConfiguration(input: RedshiftCreateHsmConfigurationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage`](#aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage)

---

##### `createScheduledAction` <a name="aws-cdk-sdk.redshift.RedshiftClient.createScheduledAction"></a>

```typescript
public createScheduledAction(input: RedshiftCreateScheduledActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage)

---

##### `createSnapshotCopyGrant` <a name="aws-cdk-sdk.redshift.RedshiftClient.createSnapshotCopyGrant"></a>

```typescript
public createSnapshotCopyGrant(input: RedshiftCreateSnapshotCopyGrantMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage`](#aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage)

---

##### `createSnapshotSchedule` <a name="aws-cdk-sdk.redshift.RedshiftClient.createSnapshotSchedule"></a>

```typescript
public createSnapshotSchedule(input: RedshiftCreateSnapshotScheduleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage`](#aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage)

---

##### `createTags` <a name="aws-cdk-sdk.redshift.RedshiftClient.createTags"></a>

```typescript
public createTags(input: RedshiftCreateTagsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateTagsMessage`](#aws-cdk-sdk.redshift.RedshiftCreateTagsMessage)

---

##### `createUsageLimit` <a name="aws-cdk-sdk.redshift.RedshiftClient.createUsageLimit"></a>

```typescript
public createUsageLimit(input: RedshiftCreateUsageLimitMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage`](#aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage)

---

##### `deleteCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteCluster"></a>

```typescript
public deleteCluster(input: RedshiftDeleteClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---

##### `deleteClusterParameterGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteClusterParameterGroup"></a>

```typescript
public deleteClusterParameterGroup(input: RedshiftDeleteClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterParameterGroupMessage)

---

##### `deleteClusterSecurityGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteClusterSecurityGroup"></a>

```typescript
public deleteClusterSecurityGroup(input: RedshiftDeleteClusterSecurityGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterSecurityGroupMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterSecurityGroupMessage)

---

##### `deleteClusterSnapshot` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteClusterSnapshot"></a>

```typescript
public deleteClusterSnapshot(input: RedshiftDeleteClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage)

---

##### `deleteClusterSubnetGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteClusterSubnetGroup"></a>

```typescript
public deleteClusterSubnetGroup(input: RedshiftDeleteClusterSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterSubnetGroupMessage)

---

##### `deleteEventSubscription` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteEventSubscription"></a>

```typescript
public deleteEventSubscription(input: RedshiftDeleteEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteEventSubscriptionMessage)

---

##### `deleteHsmClientCertificate` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteHsmClientCertificate"></a>

```typescript
public deleteHsmClientCertificate(input: RedshiftDeleteHsmClientCertificateMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteHsmClientCertificateMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteHsmClientCertificateMessage)

---

##### `deleteHsmConfiguration` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteHsmConfiguration"></a>

```typescript
public deleteHsmConfiguration(input: RedshiftDeleteHsmConfigurationMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteHsmConfigurationMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteHsmConfigurationMessage)

---

##### `deleteScheduledAction` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteScheduledAction"></a>

```typescript
public deleteScheduledAction(input: RedshiftDeleteScheduledActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteScheduledActionMessage)

---

##### `deleteSnapshotCopyGrant` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteSnapshotCopyGrant"></a>

```typescript
public deleteSnapshotCopyGrant(input: RedshiftDeleteSnapshotCopyGrantMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteSnapshotCopyGrantMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteSnapshotCopyGrantMessage)

---

##### `deleteSnapshotSchedule` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteSnapshotSchedule"></a>

```typescript
public deleteSnapshotSchedule(input: RedshiftDeleteSnapshotScheduleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteSnapshotScheduleMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteSnapshotScheduleMessage)

---

##### `deleteTags` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteTags"></a>

```typescript
public deleteTags(input: RedshiftDeleteTagsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteTagsMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteTagsMessage)

---

##### `deleteUsageLimit` <a name="aws-cdk-sdk.redshift.RedshiftClient.deleteUsageLimit"></a>

```typescript
public deleteUsageLimit(input: RedshiftDeleteUsageLimitMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteUsageLimitMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteUsageLimitMessage)

---

##### `describeAccountAttributes` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeAccountAttributes"></a>

```typescript
public describeAccountAttributes(input: RedshiftDescribeAccountAttributesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeAccountAttributesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeAccountAttributesMessage)

---

##### `describeClusterDbRevisions` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterDbRevisions"></a>

```typescript
public describeClusterDbRevisions(input: RedshiftDescribeClusterDbRevisionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage)

---

##### `describeClusterParameterGroups` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterParameterGroups"></a>

```typescript
public describeClusterParameterGroups(input: RedshiftDescribeClusterParameterGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage)

---

##### `describeClusterParameters` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterParameters"></a>

```typescript
public describeClusterParameters(input: RedshiftDescribeClusterParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage)

---

##### `describeClusters` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusters"></a>

```typescript
public describeClusters(input: RedshiftDescribeClustersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage)

---

##### `describeClusterSecurityGroups` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterSecurityGroups"></a>

```typescript
public describeClusterSecurityGroups(input: RedshiftDescribeClusterSecurityGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage)

---

##### `describeClusterSnapshots` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterSnapshots"></a>

```typescript
public describeClusterSnapshots(input: RedshiftDescribeClusterSnapshotsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage)

---

##### `describeClusterSubnetGroups` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterSubnetGroups"></a>

```typescript
public describeClusterSubnetGroups(input: RedshiftDescribeClusterSubnetGroupsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage)

---

##### `describeClusterTracks` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterTracks"></a>

```typescript
public describeClusterTracks(input: RedshiftDescribeClusterTracksMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage)

---

##### `describeClusterVersions` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeClusterVersions"></a>

```typescript
public describeClusterVersions(input: RedshiftDescribeClusterVersionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage)

---

##### `describeDefaultClusterParameters` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeDefaultClusterParameters"></a>

```typescript
public describeDefaultClusterParameters(input: RedshiftDescribeDefaultClusterParametersMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage)

---

##### `describeEventCategories` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeEventCategories"></a>

```typescript
public describeEventCategories(input: RedshiftDescribeEventCategoriesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeEventCategoriesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeEventCategoriesMessage)

---

##### `describeEvents` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeEvents"></a>

```typescript
public describeEvents(input: RedshiftDescribeEventsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage)

---

##### `describeEventSubscriptions` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeEventSubscriptions"></a>

```typescript
public describeEventSubscriptions(input: RedshiftDescribeEventSubscriptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage)

---

##### `describeHsmClientCertificates` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeHsmClientCertificates"></a>

```typescript
public describeHsmClientCertificates(input: RedshiftDescribeHsmClientCertificatesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage)

---

##### `describeHsmConfigurations` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeHsmConfigurations"></a>

```typescript
public describeHsmConfigurations(input: RedshiftDescribeHsmConfigurationsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage)

---

##### `describeLoggingStatus` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeLoggingStatus"></a>

```typescript
public describeLoggingStatus(input: RedshiftDescribeLoggingStatusMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeLoggingStatusMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeLoggingStatusMessage)

---

##### `describeNodeConfigurationOptions` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeNodeConfigurationOptions"></a>

```typescript
public describeNodeConfigurationOptions(input: RedshiftDescribeNodeConfigurationOptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage)

---

##### `describeOrderableClusterOptions` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeOrderableClusterOptions"></a>

```typescript
public describeOrderableClusterOptions(input: RedshiftDescribeOrderableClusterOptionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage)

---

##### `describeReservedNodeOfferings` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeReservedNodeOfferings"></a>

```typescript
public describeReservedNodeOfferings(input: RedshiftDescribeReservedNodeOfferingsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage)

---

##### `describeReservedNodes` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeReservedNodes"></a>

```typescript
public describeReservedNodes(input: RedshiftDescribeReservedNodesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage)

---

##### `describeResize` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeResize"></a>

```typescript
public describeResize(input: RedshiftDescribeResizeMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeResizeMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeResizeMessage)

---

##### `describeScheduledActions` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeScheduledActions"></a>

```typescript
public describeScheduledActions(input: RedshiftDescribeScheduledActionsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage)

---

##### `describeSnapshotCopyGrants` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeSnapshotCopyGrants"></a>

```typescript
public describeSnapshotCopyGrants(input: RedshiftDescribeSnapshotCopyGrantsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage)

---

##### `describeSnapshotSchedules` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeSnapshotSchedules"></a>

```typescript
public describeSnapshotSchedules(input: RedshiftDescribeSnapshotSchedulesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage)

---

##### `describeStorage` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeStorage"></a>

```typescript
public describeStorage()
```

##### `describeTableRestoreStatus` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeTableRestoreStatus"></a>

```typescript
public describeTableRestoreStatus(input: RedshiftDescribeTableRestoreStatusMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage)

---

##### `describeTags` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeTags"></a>

```typescript
public describeTags(input: RedshiftDescribeTagsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage)

---

##### `describeUsageLimits` <a name="aws-cdk-sdk.redshift.RedshiftClient.describeUsageLimits"></a>

```typescript
public describeUsageLimits(input: RedshiftDescribeUsageLimitsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage)

---

##### `disableLogging` <a name="aws-cdk-sdk.redshift.RedshiftClient.disableLogging"></a>

```typescript
public disableLogging(input: RedshiftDisableLoggingMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableLoggingMessage`](#aws-cdk-sdk.redshift.RedshiftDisableLoggingMessage)

---

##### `disableSnapshotCopy` <a name="aws-cdk-sdk.redshift.RedshiftClient.disableSnapshotCopy"></a>

```typescript
public disableSnapshotCopy(input: RedshiftDisableSnapshotCopyMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---

##### `enableLogging` <a name="aws-cdk-sdk.redshift.RedshiftClient.enableLogging"></a>

```typescript
public enableLogging(input: RedshiftEnableLoggingMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage`](#aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage)

---

##### `enableSnapshotCopy` <a name="aws-cdk-sdk.redshift.RedshiftClient.enableSnapshotCopy"></a>

```typescript
public enableSnapshotCopy(input: RedshiftEnableSnapshotCopyMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---

##### `fetchClusterCredentials` <a name="aws-cdk-sdk.redshift.RedshiftClient.fetchClusterCredentials"></a>

```typescript
public fetchClusterCredentials(input: RedshiftGetClusterCredentialsMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage`](#aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage)

---

##### `fetchReservedNodeExchangeOfferings` <a name="aws-cdk-sdk.redshift.RedshiftClient.fetchReservedNodeExchangeOfferings"></a>

```typescript
public fetchReservedNodeExchangeOfferings(input: RedshiftGetReservedNodeExchangeOfferingsInputMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage`](#aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage)

---

##### `modifyCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyCluster"></a>

```typescript
public modifyCluster(input: RedshiftModifyClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---

##### `modifyClusterDbRevision` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterDbRevision"></a>

```typescript
public modifyClusterDbRevision(input: RedshiftModifyClusterDbRevisionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---

##### `modifyClusterIamRoles` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterIamRoles"></a>

```typescript
public modifyClusterIamRoles(input: RedshiftModifyClusterIamRolesMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---

##### `modifyClusterMaintenance` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterMaintenance"></a>

```typescript
public modifyClusterMaintenance(input: RedshiftModifyClusterMaintenanceMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---

##### `modifyClusterParameterGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterParameterGroup"></a>

```typescript
public modifyClusterParameterGroup(input: RedshiftModifyClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage)

---

##### `modifyClusterSnapshot` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterSnapshot"></a>

```typescript
public modifyClusterSnapshot(input: RedshiftModifyClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage)

---

##### `modifyClusterSnapshotSchedule` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterSnapshotSchedule"></a>

```typescript
public modifyClusterSnapshotSchedule(input: RedshiftModifyClusterSnapshotScheduleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotScheduleMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotScheduleMessage)

---

##### `modifyClusterSubnetGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyClusterSubnetGroup"></a>

```typescript
public modifyClusterSubnetGroup(input: RedshiftModifyClusterSubnetGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage)

---

##### `modifyEventSubscription` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyEventSubscription"></a>

```typescript
public modifyEventSubscription(input: RedshiftModifyEventSubscriptionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage)

---

##### `modifyScheduledAction` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyScheduledAction"></a>

```typescript
public modifyScheduledAction(input: RedshiftModifyScheduledActionMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage)

---

##### `modifySnapshotCopyRetentionPeriod` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifySnapshotCopyRetentionPeriod"></a>

```typescript
public modifySnapshotCopyRetentionPeriod(input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---

##### `modifySnapshotSchedule` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifySnapshotSchedule"></a>

```typescript
public modifySnapshotSchedule(input: RedshiftModifySnapshotScheduleMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage)

---

##### `modifyUsageLimit` <a name="aws-cdk-sdk.redshift.RedshiftClient.modifyUsageLimit"></a>

```typescript
public modifyUsageLimit(input: RedshiftModifyUsageLimitMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage`](#aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage)

---

##### `pauseCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.pauseCluster"></a>

```typescript
public pauseCluster(input: RedshiftPauseClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---

##### `purchaseReservedNodeOffering` <a name="aws-cdk-sdk.redshift.RedshiftClient.purchaseReservedNodeOffering"></a>

```typescript
public purchaseReservedNodeOffering(input: RedshiftPurchaseReservedNodeOfferingMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage`](#aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage)

---

##### `rebootCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.rebootCluster"></a>

```typescript
public rebootCluster(input: RedshiftRebootClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---

##### `resetClusterParameterGroup` <a name="aws-cdk-sdk.redshift.RedshiftClient.resetClusterParameterGroup"></a>

```typescript
public resetClusterParameterGroup(input: RedshiftResetClusterParameterGroupMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage)

---

##### `resizeCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.resizeCluster"></a>

```typescript
public resizeCluster(input: RedshiftResizeClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---

##### `restoreFromClusterSnapshot` <a name="aws-cdk-sdk.redshift.RedshiftClient.restoreFromClusterSnapshot"></a>

```typescript
public restoreFromClusterSnapshot(input: RedshiftRestoreFromClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---

##### `restoreTableFromClusterSnapshot` <a name="aws-cdk-sdk.redshift.RedshiftClient.restoreTableFromClusterSnapshot"></a>

```typescript
public restoreTableFromClusterSnapshot(input: RedshiftRestoreTableFromClusterSnapshotMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage)

---

##### `resumeCluster` <a name="aws-cdk-sdk.redshift.RedshiftClient.resumeCluster"></a>

```typescript
public resumeCluster(input: RedshiftResumeClusterMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---

##### `revokeClusterSecurityGroupIngress` <a name="aws-cdk-sdk.redshift.RedshiftClient.revokeClusterSecurityGroupIngress"></a>

```typescript
public revokeClusterSecurityGroupIngress(input: RedshiftRevokeClusterSecurityGroupIngressMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage`](#aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage)

---

##### `revokeSnapshotAccess` <a name="aws-cdk-sdk.redshift.RedshiftClient.revokeSnapshotAccess"></a>

```typescript
public revokeSnapshotAccess(input: RedshiftRevokeSnapshotAccessMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage`](#aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage)

---

##### `rotateEncryptionKey` <a name="aws-cdk-sdk.redshift.RedshiftClient.rotateEncryptionKey"></a>

```typescript
public rotateEncryptionKey(input: RedshiftRotateEncryptionKeyMessage)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---




## Structs <a name="Structs"></a>

### RedshiftAcceptReservedNodeExchangeInputMessage <a name="aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAcceptReservedNodeExchangeInputMessage: redshift.RedshiftAcceptReservedNodeExchangeInputMessage = { ... }
```

##### `reservedNodeId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage.property.reservedNodeId"></a>

- *Type:* `string`

---

##### `targetReservedNodeOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage.property.targetReservedNodeOfferingId"></a>

- *Type:* `string`

---

### RedshiftAcceptReservedNodeExchangeOutputMessage <a name="aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeOutputMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAcceptReservedNodeExchangeOutputMessage: redshift.RedshiftAcceptReservedNodeExchangeOutputMessage = { ... }
```

##### `exchangedReservedNode`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeOutputMessage.property.exchangedReservedNode"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNode`](#aws-cdk-sdk.redshift.RedshiftReservedNode)

---

### RedshiftAccountAttribute <a name="aws-cdk-sdk.redshift.RedshiftAccountAttribute"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAccountAttribute: redshift.RedshiftAccountAttribute = { ... }
```

##### `attributeName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAccountAttribute.property.attributeName"></a>

- *Type:* `string`

---

##### `attributeValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAccountAttribute.property.attributeValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAttributeValueTarget`](#aws-cdk-sdk.redshift.RedshiftAttributeValueTarget)[]

---

### RedshiftAccountAttributeList <a name="aws-cdk-sdk.redshift.RedshiftAccountAttributeList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAccountAttributeList: redshift.RedshiftAccountAttributeList = { ... }
```

##### `accountAttributes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAccountAttributeList.property.accountAttributes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountAttribute`](#aws-cdk-sdk.redshift.RedshiftAccountAttribute)[]

---

### RedshiftAccountWithRestoreAccess <a name="aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAccountWithRestoreAccess: redshift.RedshiftAccountWithRestoreAccess = { ... }
```

##### `accountAlias`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess.property.accountAlias"></a>

- *Type:* `string`

---

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess.property.accountId"></a>

- *Type:* `string`

---

### RedshiftAttributeValueTarget <a name="aws-cdk-sdk.redshift.RedshiftAttributeValueTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAttributeValueTarget: redshift.RedshiftAttributeValueTarget = { ... }
```

##### `attributeValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAttributeValueTarget.property.attributeValue"></a>

- *Type:* `string`

---

### RedshiftAuthorizeClusterSecurityGroupIngressMessage <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAuthorizeClusterSecurityGroupIngressMessage: redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage = { ... }
```

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `cidrip`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage.property.cidrip"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage.property.ec2SecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage.property.ec2SecurityGroupOwnerId"></a>

- *Type:* `string`

---

### RedshiftAuthorizeClusterSecurityGroupIngressResult <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAuthorizeClusterSecurityGroupIngressResult: redshift.RedshiftAuthorizeClusterSecurityGroupIngressResult = { ... }
```

##### `clusterSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressResult.property.clusterSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup)

---

### RedshiftAuthorizeSnapshotAccessMessage <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAuthorizeSnapshotAccessMessage: redshift.RedshiftAuthorizeSnapshotAccessMessage = { ... }
```

##### `accountWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage.property.accountWithRestoreAccess"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage.property.snapshotClusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftAuthorizeSnapshotAccessResult <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAuthorizeSnapshotAccessResult: redshift.RedshiftAuthorizeSnapshotAccessResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)

---

### RedshiftAvailabilityZone <a name="aws-cdk-sdk.redshift.RedshiftAvailabilityZone"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftAvailabilityZone: redshift.RedshiftAvailabilityZone = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAvailabilityZone.property.name"></a>

- *Type:* `string`

---

##### `supportedPlatforms`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftAvailabilityZone.property.supportedPlatforms"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSupportedPlatform`](#aws-cdk-sdk.redshift.RedshiftSupportedPlatform)[]

---

### RedshiftBatchDeleteClusterSnapshotsRequest <a name="aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftBatchDeleteClusterSnapshotsRequest: redshift.RedshiftBatchDeleteClusterSnapshotsRequest = { ... }
```

##### `identifiers`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsRequest.property.identifiers"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage)[]

---

### RedshiftBatchDeleteClusterSnapshotsResult <a name="aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftBatchDeleteClusterSnapshotsResult: redshift.RedshiftBatchDeleteClusterSnapshotsResult = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsResult.property.errors"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage`](#aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage)[]

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsResult.property.resources"></a>

- *Type:* `string`[]

---

### RedshiftBatchModifyClusterSnapshotsMessage <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftBatchModifyClusterSnapshotsMessage: redshift.RedshiftBatchModifyClusterSnapshotsMessage = { ... }
```

##### `snapshotIdentifierList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage.property.snapshotIdentifierList"></a>

- *Type:* `string`[]

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage.property.force"></a>

- *Type:* `boolean`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

### RedshiftBatchModifyClusterSnapshotsOutputMessage <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsOutputMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftBatchModifyClusterSnapshotsOutputMessage: redshift.RedshiftBatchModifyClusterSnapshotsOutputMessage = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsOutputMessage.property.errors"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage`](#aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage)[]

---

##### `resources`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsOutputMessage.property.resources"></a>

- *Type:* `string`[]

---

### RedshiftCancelResizeMessage <a name="aws-cdk-sdk.redshift.RedshiftCancelResizeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCancelResizeMessage: redshift.RedshiftCancelResizeMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCancelResizeMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftCluster <a name="aws-cdk-sdk.redshift.RedshiftCluster"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCluster: redshift.RedshiftCluster = { ... }
```

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftDataTransferProgress)

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEndpoint`](#aws-cdk-sdk.redshift.RedshiftEndpoint)

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmStatus`](#aws-cdk-sdk.redshift.RedshiftHsmStatus)

---

##### `iamRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResizeInfo)

---

##### `restoreStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---

### RedshiftClusterAssociatedToSchedule <a name="aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterAssociatedToSchedule: redshift.RedshiftClusterAssociatedToSchedule = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `scheduleAssociationState`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule.property.scheduleAssociationState"></a>

- *Type:* `string`

---

### RedshiftClusterCredentials <a name="aws-cdk-sdk.redshift.RedshiftClusterCredentials"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterCredentials: redshift.RedshiftClusterCredentials = { ... }
```

##### `dbPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterCredentials.property.dbPassword"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterCredentials.property.dbUser"></a>

- *Type:* `string`

---

##### `expiration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterCredentials.property.expiration"></a>

- *Type:* `string`

---

### RedshiftClusterDbRevision <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterDbRevision: redshift.RedshiftClusterDbRevision = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevision.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `currentDatabaseRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevision.property.currentDatabaseRevision"></a>

- *Type:* `string`

---

##### `databaseRevisionReleaseDate`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevision.property.databaseRevisionReleaseDate"></a>

- *Type:* `string`

---

##### `revisionTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevision.property.revisionTargets"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevisionTarget`](#aws-cdk-sdk.redshift.RedshiftRevisionTarget)[]

---

### RedshiftClusterDbRevisionsMessage <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevisionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterDbRevisionsMessage: redshift.RedshiftClusterDbRevisionsMessage = { ... }
```

##### `clusterDbRevisions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevisionsMessage.property.clusterDbRevisions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterDbRevision`](#aws-cdk-sdk.redshift.RedshiftClusterDbRevision)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterDbRevisionsMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftClusterIamRole <a name="aws-cdk-sdk.redshift.RedshiftClusterIamRole"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterIamRole: redshift.RedshiftClusterIamRole = { ... }
```

##### `applyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterIamRole.property.applyStatus"></a>

- *Type:* `string`

---

##### `iamRoleArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterIamRole.property.iamRoleArn"></a>

- *Type:* `string`

---

### RedshiftClusterNode <a name="aws-cdk-sdk.redshift.RedshiftClusterNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterNode: redshift.RedshiftClusterNode = { ... }
```

##### `nodeRole`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterNode.property.nodeRole"></a>

- *Type:* `string`

---

##### `privateIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterNode.property.privateIpAddress"></a>

- *Type:* `string`

---

##### `publicIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterNode.property.publicIpAddress"></a>

- *Type:* `string`

---

### RedshiftClusterParameterGroup <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterParameterGroup: redshift.RedshiftClusterParameterGroup = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `parameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroup.property.parameterGroupFamily"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftClusterParameterGroupDetails <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupDetails"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterParameterGroupDetails: redshift.RedshiftClusterParameterGroupDetails = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupDetails.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupDetails.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftParameter`](#aws-cdk-sdk.redshift.RedshiftParameter)[]

---

### RedshiftClusterParameterGroupNameMessage <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupNameMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterParameterGroupNameMessage: redshift.RedshiftClusterParameterGroupNameMessage = { ... }
```

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupNameMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `parameterGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupNameMessage.property.parameterGroupStatus"></a>

- *Type:* `string`

---

### RedshiftClusterParameterGroupsMessage <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterParameterGroupsMessage: redshift.RedshiftClusterParameterGroupsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `parameterGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupsMessage.property.parameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroup`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroup)[]

---

### RedshiftClusterParameterGroupStatus <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterParameterGroupStatus: redshift.RedshiftClusterParameterGroupStatus = { ... }
```

##### `clusterParameterStatusList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus.property.clusterParameterStatusList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterStatus)[]

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus.property.parameterGroupName"></a>

- *Type:* `string`

---

### RedshiftClusterParameterStatus <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterParameterStatus: redshift.RedshiftClusterParameterStatus = { ... }
```

##### `parameterApplyErrorDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterStatus.property.parameterApplyErrorDescription"></a>

- *Type:* `string`

---

##### `parameterApplyStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterStatus.property.parameterApplyStatus"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterParameterStatus.property.parameterName"></a>

- *Type:* `string`

---

### RedshiftClusterSecurityGroup <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterSecurityGroup: redshift.RedshiftClusterSecurityGroup = { ... }
```

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup`](#aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup)[]

---

##### `ipRanges`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup.property.ipRanges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftIpRange`](#aws-cdk-sdk.redshift.RedshiftIpRange)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftClusterSecurityGroupMembership <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterSecurityGroupMembership: redshift.RedshiftClusterSecurityGroupMembership = { ... }
```

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

### RedshiftClusterSecurityGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterSecurityGroupMessage: redshift.RedshiftClusterSecurityGroupMessage = { ... }
```

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMessage.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftClustersMessage <a name="aws-cdk-sdk.redshift.RedshiftClustersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClustersMessage: redshift.RedshiftClustersMessage = { ... }
```

##### `clusters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClustersMessage.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClustersMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterSnapshotCopyStatus: redshift.RedshiftClusterSnapshotCopyStatus = { ... }
```

##### `destinationRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

### RedshiftClusterSubnetGroup <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterSubnetGroup: redshift.RedshiftClusterSubnetGroup = { ... }
```

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup.property.description"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSubnet`](#aws-cdk-sdk.redshift.RedshiftSubnet)[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---

### RedshiftClusterSubnetGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterSubnetGroupMessage: redshift.RedshiftClusterSubnetGroupMessage = { ... }
```

##### `clusterSubnetGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroupMessage.property.clusterSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterSubnetGroupMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftClusterVersion <a name="aws-cdk-sdk.redshift.RedshiftClusterVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterVersion: redshift.RedshiftClusterVersion = { ... }
```

##### `clusterParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterVersion.property.clusterParameterGroupFamily"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterVersion.property.clusterVersion"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterVersion.property.description"></a>

- *Type:* `string`

---

### RedshiftClusterVersionsMessage <a name="aws-cdk-sdk.redshift.RedshiftClusterVersionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftClusterVersionsMessage: redshift.RedshiftClusterVersionsMessage = { ... }
```

##### `clusterVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterVersionsMessage.property.clusterVersions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterVersion`](#aws-cdk-sdk.redshift.RedshiftClusterVersion)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftClusterVersionsMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftCopyClusterSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCopyClusterSnapshotMessage: redshift.RedshiftCopyClusterSnapshotMessage = { ... }
```

##### `sourceSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage.property.sourceSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `targetSnapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage.property.targetSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `sourceSnapshotClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage.property.sourceSnapshotClusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftCopyClusterSnapshotResult <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCopyClusterSnapshotResult: redshift.RedshiftCopyClusterSnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)

---

### RedshiftCreateClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterMessage: redshift.RedshiftCreateClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.masterUsername"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.nodeType"></a>

- *Type:* `string`

---

##### `additionalInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.additionalInfo"></a>

- *Type:* `string`

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.clusterParameterGroupName"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.clusterSecurityGroups"></a>

- *Type:* `string`[]

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.dbName"></a>

- *Type:* `string`

---

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.elasticIp"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.encrypted"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `iamRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.iamRoles"></a>

- *Type:* `string`[]

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `snapshotScheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### RedshiftCreateClusterParameterGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterParameterGroupMessage: redshift.RedshiftCreateClusterParameterGroupMessage = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage.property.description"></a>

- *Type:* `string`

---

##### `parameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage.property.parameterGroupFamily"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateClusterParameterGroupResult <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterParameterGroupResult: redshift.RedshiftCreateClusterParameterGroupResult = { ... }
```

##### `clusterParameterGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupResult.property.clusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroup`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroup)

---

### RedshiftCreateClusterResult <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterResult: redshift.RedshiftCreateClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftCreateClusterSecurityGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterSecurityGroupMessage: redshift.RedshiftCreateClusterSecurityGroupMessage = { ... }
```

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage.property.description"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateClusterSecurityGroupResult <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterSecurityGroupResult: redshift.RedshiftCreateClusterSecurityGroupResult = { ... }
```

##### `clusterSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupResult.property.clusterSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup)

---

### RedshiftCreateClusterSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterSnapshotMessage: redshift.RedshiftCreateClusterSnapshotMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateClusterSnapshotResult <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterSnapshotResult: redshift.RedshiftCreateClusterSnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)

---

### RedshiftCreateClusterSubnetGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterSubnetGroupMessage: redshift.RedshiftCreateClusterSubnetGroupMessage = { ... }
```

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage.property.description"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateClusterSubnetGroupResult <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateClusterSubnetGroupResult: redshift.RedshiftCreateClusterSubnetGroupResult = { ... }
```

##### `clusterSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupResult.property.clusterSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup)

---

### RedshiftCreateEventSubscriptionMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateEventSubscriptionMessage: redshift.RedshiftCreateEventSubscriptionMessage = { ... }
```

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.severity"></a>

- *Type:* `string`

---

##### `sourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.sourceIds"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateEventSubscriptionResult <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateEventSubscriptionResult: redshift.RedshiftCreateEventSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventSubscription`](#aws-cdk-sdk.redshift.RedshiftEventSubscription)

---

### RedshiftCreateHsmClientCertificateMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateHsmClientCertificateMessage: redshift.RedshiftCreateHsmClientCertificateMessage = { ... }
```

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateHsmClientCertificateResult <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateHsmClientCertificateResult: redshift.RedshiftCreateHsmClientCertificateResult = { ... }
```

##### `hsmClientCertificate`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateResult.property.hsmClientCertificate"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmClientCertificate`](#aws-cdk-sdk.redshift.RedshiftHsmClientCertificate)

---

### RedshiftCreateHsmConfigurationMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateHsmConfigurationMessage: redshift.RedshiftCreateHsmConfigurationMessage = { ... }
```

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.description"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `hsmIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.hsmIpAddress"></a>

- *Type:* `string`

---

##### `hsmPartitionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.hsmPartitionName"></a>

- *Type:* `string`

---

##### `hsmPartitionPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.hsmPartitionPassword"></a>

- *Type:* `string`

---

##### `hsmServerPublicCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.hsmServerPublicCertificate"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateHsmConfigurationResult <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateHsmConfigurationResult: redshift.RedshiftCreateHsmConfigurationResult = { ... }
```

##### `hsmConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationResult.property.hsmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmConfiguration`](#aws-cdk-sdk.redshift.RedshiftHsmConfiguration)

---

### RedshiftCreateScheduledActionMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateScheduledActionMessage: redshift.RedshiftCreateScheduledActionMessage = { ... }
```

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.iamRole"></a>

- *Type:* `string`

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.schedule"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.targetAction"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftScheduledActionType`](#aws-cdk-sdk.redshift.RedshiftScheduledActionType)

---

##### `enable`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.enable"></a>

- *Type:* `boolean`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.endTime"></a>

- *Type:* `string`

---

##### `scheduledActionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.scheduledActionDescription"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage.property.startTime"></a>

- *Type:* `string`

---

### RedshiftCreateSnapshotCopyGrantMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateSnapshotCopyGrantMessage: redshift.RedshiftCreateSnapshotCopyGrantMessage = { ... }
```

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateSnapshotCopyGrantResult <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateSnapshotCopyGrantResult: redshift.RedshiftCreateSnapshotCopyGrantResult = { ... }
```

##### `snapshotCopyGrant`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantResult.property.snapshotCopyGrant"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant`](#aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant)

---

### RedshiftCreateSnapshotScheduleMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateSnapshotScheduleMessage: redshift.RedshiftCreateSnapshotScheduleMessage = { ... }
```

##### `dryRun`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage.property.dryRun"></a>

- *Type:* `boolean`

---

##### `nextInvocations`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage.property.nextInvocations"></a>

- *Type:* `number`

---

##### `scheduleDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage.property.scheduleDefinitions"></a>

- *Type:* `string`[]

---

##### `scheduleDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage.property.scheduleDescription"></a>

- *Type:* `string`

---

##### `scheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage.property.scheduleIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateTagsMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateTagsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateTagsMessage: redshift.RedshiftCreateTagsMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateTagsMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateTagsMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCreateUsageLimitMessage <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCreateUsageLimitMessage: redshift.RedshiftCreateUsageLimitMessage = { ... }
```

##### `amount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.amount"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `featureType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.featureType"></a>

- *Type:* `string`

---

##### `limitType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.limitType"></a>

- *Type:* `string`

---

##### `breachAction`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.breachAction"></a>

- *Type:* `string`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.period"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftCustomerStorageMessage <a name="aws-cdk-sdk.redshift.RedshiftCustomerStorageMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftCustomerStorageMessage: redshift.RedshiftCustomerStorageMessage = { ... }
```

##### `totalBackupSizeInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCustomerStorageMessage.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `totalProvisionedStorageInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftCustomerStorageMessage.property.totalProvisionedStorageInMegaBytes"></a>

- *Type:* `number`

---

### RedshiftDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDataTransferProgress: redshift.RedshiftDataTransferProgress = { ... }
```

##### `currentRateInMegaBytesPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---

### RedshiftDefaultClusterParameters <a name="aws-cdk-sdk.redshift.RedshiftDefaultClusterParameters"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDefaultClusterParameters: redshift.RedshiftDefaultClusterParameters = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDefaultClusterParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDefaultClusterParameters.property.parameterGroupFamily"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDefaultClusterParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftParameter`](#aws-cdk-sdk.redshift.RedshiftParameter)[]

---

### RedshiftDeferredMaintenanceWindow <a name="aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeferredMaintenanceWindow: redshift.RedshiftDeferredMaintenanceWindow = { ... }
```

##### `deferMaintenanceEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow.property.deferMaintenanceEndTime"></a>

- *Type:* `string`

---

##### `deferMaintenanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow.property.deferMaintenanceIdentifier"></a>

- *Type:* `string`

---

##### `deferMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow.property.deferMaintenanceStartTime"></a>

- *Type:* `string`

---

### RedshiftDeleteClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterMessage: redshift.RedshiftDeleteClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `finalClusterSnapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage.property.finalClusterSnapshotIdentifier"></a>

- *Type:* `string`

---

##### `finalClusterSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage.property.finalClusterSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `skipFinalClusterSnapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage.property.skipFinalClusterSnapshot"></a>

- *Type:* `boolean`

---

### RedshiftDeleteClusterParameterGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterParameterGroupMessage: redshift.RedshiftDeleteClusterParameterGroupMessage = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterParameterGroupMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

### RedshiftDeleteClusterResult <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterResult: redshift.RedshiftDeleteClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftDeleteClusterSecurityGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSecurityGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterSecurityGroupMessage: redshift.RedshiftDeleteClusterSecurityGroupMessage = { ... }
```

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSecurityGroupMessage.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

### RedshiftDeleteClusterSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterSnapshotMessage: redshift.RedshiftDeleteClusterSnapshotMessage = { ... }
```

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage.property.snapshotClusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftDeleteClusterSnapshotResult <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterSnapshotResult: redshift.RedshiftDeleteClusterSnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)

---

### RedshiftDeleteClusterSubnetGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteClusterSubnetGroupMessage: redshift.RedshiftDeleteClusterSubnetGroupMessage = { ... }
```

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteClusterSubnetGroupMessage.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

### RedshiftDeleteEventSubscriptionMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteEventSubscriptionMessage: redshift.RedshiftDeleteEventSubscriptionMessage = { ... }
```

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

### RedshiftDeleteHsmClientCertificateMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteHsmClientCertificateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteHsmClientCertificateMessage: redshift.RedshiftDeleteHsmClientCertificateMessage = { ... }
```

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteHsmClientCertificateMessage.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

### RedshiftDeleteHsmConfigurationMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteHsmConfigurationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteHsmConfigurationMessage: redshift.RedshiftDeleteHsmConfigurationMessage = { ... }
```

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteHsmConfigurationMessage.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

### RedshiftDeleteScheduledActionMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteScheduledActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteScheduledActionMessage: redshift.RedshiftDeleteScheduledActionMessage = { ... }
```

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteScheduledActionMessage.property.scheduledActionName"></a>

- *Type:* `string`

---

### RedshiftDeleteSnapshotCopyGrantMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteSnapshotCopyGrantMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteSnapshotCopyGrantMessage: redshift.RedshiftDeleteSnapshotCopyGrantMessage = { ... }
```

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteSnapshotCopyGrantMessage.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

### RedshiftDeleteSnapshotScheduleMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteSnapshotScheduleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteSnapshotScheduleMessage: redshift.RedshiftDeleteSnapshotScheduleMessage = { ... }
```

##### `scheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteSnapshotScheduleMessage.property.scheduleIdentifier"></a>

- *Type:* `string`

---

### RedshiftDeleteTagsMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteTagsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteTagsMessage: redshift.RedshiftDeleteTagsMessage = { ... }
```

##### `resourceName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteTagsMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteTagsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

### RedshiftDeleteUsageLimitMessage <a name="aws-cdk-sdk.redshift.RedshiftDeleteUsageLimitMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDeleteUsageLimitMessage: redshift.RedshiftDeleteUsageLimitMessage = { ... }
```

##### `usageLimitId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDeleteUsageLimitMessage.property.usageLimitId"></a>

- *Type:* `string`

---

### RedshiftDescribeAccountAttributesMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeAccountAttributesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeAccountAttributesMessage: redshift.RedshiftDescribeAccountAttributesMessage = { ... }
```

##### `attributeNames`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeAccountAttributesMessage.property.attributeNames"></a>

- *Type:* `string`[]

---

### RedshiftDescribeClusterDbRevisionsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterDbRevisionsMessage: redshift.RedshiftDescribeClusterDbRevisionsMessage = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### RedshiftDescribeClusterParameterGroupsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterParameterGroupsMessage: redshift.RedshiftDescribeClusterParameterGroupsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `parameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeClusterParametersMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterParametersMessage: redshift.RedshiftDescribeClusterParametersMessage = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage.property.source"></a>

- *Type:* `string`

---

### RedshiftDescribeClusterSecurityGroupsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterSecurityGroupsMessage: redshift.RedshiftDescribeClusterSecurityGroupsMessage = { ... }
```

##### `clusterSecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeClustersMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClustersMessage: redshift.RedshiftDescribeClustersMessage = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeClusterSnapshotsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterSnapshotsMessage: redshift.RedshiftDescribeClusterSnapshotsMessage = { ... }
```

##### `clusterExists`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.clusterExists"></a>

- *Type:* `boolean`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.ownerAccount"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.snapshotType"></a>

- *Type:* `string`

---

##### `sortingEntities`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.sortingEntities"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotSortingEntity`](#aws-cdk-sdk.redshift.RedshiftSnapshotSortingEntity)[]

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.startTime"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeClusterSubnetGroupsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterSubnetGroupsMessage: redshift.RedshiftDescribeClusterSubnetGroupsMessage = { ... }
```

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeClusterTracksMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterTracksMessage: redshift.RedshiftDescribeClusterTracksMessage = { ... }
```

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage.property.maxRecords"></a>

- *Type:* `number`

---

### RedshiftDescribeClusterVersionsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeClusterVersionsMessage: redshift.RedshiftDescribeClusterVersionsMessage = { ... }
```

##### `clusterParameterGroupFamily`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage.property.clusterParameterGroupFamily"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage.property.clusterVersion"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

### RedshiftDescribeDefaultClusterParametersMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeDefaultClusterParametersMessage: redshift.RedshiftDescribeDefaultClusterParametersMessage = { ... }
```

##### `parameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage.property.parameterGroupFamily"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage.property.maxRecords"></a>

- *Type:* `number`

---

### RedshiftDescribeDefaultClusterParametersResult <a name="aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeDefaultClusterParametersResult: redshift.RedshiftDescribeDefaultClusterParametersResult = { ... }
```

##### `defaultClusterParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersResult.property.defaultClusterParameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDefaultClusterParameters`](#aws-cdk-sdk.redshift.RedshiftDefaultClusterParameters)

---

### RedshiftDescribeEventCategoriesMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeEventCategoriesMessage: redshift.RedshiftDescribeEventCategoriesMessage = { ... }
```

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventCategoriesMessage.property.sourceType"></a>

- *Type:* `string`

---

### RedshiftDescribeEventsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeEventsMessage: redshift.RedshiftDescribeEventsMessage = { ... }
```

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.duration"></a>

- *Type:* `number`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.sourceType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage.property.startTime"></a>

- *Type:* `string`

---

### RedshiftDescribeEventSubscriptionsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeEventSubscriptionsMessage: redshift.RedshiftDescribeEventSubscriptionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `subscriptionName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeHsmClientCertificatesMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeHsmClientCertificatesMessage: redshift.RedshiftDescribeHsmClientCertificatesMessage = { ... }
```

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeHsmConfigurationsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeHsmConfigurationsMessage: redshift.RedshiftDescribeHsmConfigurationsMessage = { ... }
```

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeLoggingStatusMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeLoggingStatusMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeLoggingStatusMessage: redshift.RedshiftDescribeLoggingStatusMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeLoggingStatusMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftDescribeNodeConfigurationOptionsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeNodeConfigurationOptionsMessage: redshift.RedshiftDescribeNodeConfigurationOptionsMessage = { ... }
```

##### `actionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.actionType"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsFilter`](#aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.ownerAccount"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

### RedshiftDescribeOrderableClusterOptionsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeOrderableClusterOptionsMessage: redshift.RedshiftDescribeOrderableClusterOptionsMessage = { ... }
```

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage.property.clusterVersion"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage.property.nodeType"></a>

- *Type:* `string`

---

### RedshiftDescribeReservedNodeOfferingsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeReservedNodeOfferingsMessage: redshift.RedshiftDescribeReservedNodeOfferingsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `reservedNodeOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage.property.reservedNodeOfferingId"></a>

- *Type:* `string`

---

### RedshiftDescribeReservedNodesMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeReservedNodesMessage: redshift.RedshiftDescribeReservedNodesMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `reservedNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage.property.reservedNodeId"></a>

- *Type:* `string`

---

### RedshiftDescribeResizeMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeResizeMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeResizeMessage: redshift.RedshiftDescribeResizeMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeResizeMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftDescribeScheduledActionsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeScheduledActionsMessage: redshift.RedshiftDescribeScheduledActionsMessage = { ... }
```

##### `active`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.active"></a>

- *Type:* `boolean`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.endTime"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.filters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftScheduledActionFilter`](#aws-cdk-sdk.redshift.RedshiftScheduledActionFilter)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `scheduledActionName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.startTime"></a>

- *Type:* `string`

---

##### `targetActionType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage.property.targetActionType"></a>

- *Type:* `string`

---

### RedshiftDescribeSnapshotCopyGrantsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeSnapshotCopyGrantsMessage: redshift.RedshiftDescribeSnapshotCopyGrantsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeSnapshotSchedulesMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeSnapshotSchedulesMessage: redshift.RedshiftDescribeSnapshotSchedulesMessage = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `scheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage.property.scheduleIdentifier"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeSnapshotSchedulesOutputMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesOutputMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeSnapshotSchedulesOutputMessage: redshift.RedshiftDescribeSnapshotSchedulesOutputMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesOutputMessage.property.marker"></a>

- *Type:* `string`

---

##### `snapshotSchedules`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesOutputMessage.property.snapshotSchedules"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotSchedule`](#aws-cdk-sdk.redshift.RedshiftSnapshotSchedule)[]

---

### RedshiftDescribeTableRestoreStatusMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeTableRestoreStatusMessage: redshift.RedshiftDescribeTableRestoreStatusMessage = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tableRestoreRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage.property.tableRestoreRequestId"></a>

- *Type:* `string`

---

### RedshiftDescribeTagsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeTagsMessage: redshift.RedshiftDescribeTagsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage.property.resourceType"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

### RedshiftDescribeUsageLimitsMessage <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDescribeUsageLimitsMessage: redshift.RedshiftDescribeUsageLimitsMessage = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `featureType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.featureType"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.maxRecords"></a>

- *Type:* `number`

---

##### `tagKeys`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.tagKeys"></a>

- *Type:* `string`[]

---

##### `tagValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.tagValues"></a>

- *Type:* `string`[]

---

##### `usageLimitId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage.property.usageLimitId"></a>

- *Type:* `string`

---

### RedshiftDisableLoggingMessage <a name="aws-cdk-sdk.redshift.RedshiftDisableLoggingMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDisableLoggingMessage: redshift.RedshiftDisableLoggingMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDisableLoggingMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftDisableSnapshotCopyMessage <a name="aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDisableSnapshotCopyMessage: redshift.RedshiftDisableSnapshotCopyMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftDisableSnapshotCopyResult <a name="aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftDisableSnapshotCopyResult: redshift.RedshiftDisableSnapshotCopyResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftEc2SecurityGroup <a name="aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEc2SecurityGroup: redshift.RedshiftEc2SecurityGroup = { ... }
```

##### `ec2SecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup.property.ec2SecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup.property.ec2SecurityGroupOwnerId"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftElasticIpStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftElasticIpStatus: redshift.RedshiftElasticIpStatus = { ... }
```

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftElasticIpStatus.property.status"></a>

- *Type:* `string`

---

### RedshiftEnableLoggingMessage <a name="aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEnableLoggingMessage: redshift.RedshiftEnableLoggingMessage = { ... }
```

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage.property.bucketName"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage.property.s3KeyPrefix"></a>

- *Type:* `string`

---

### RedshiftEnableSnapshotCopyMessage <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEnableSnapshotCopyMessage: redshift.RedshiftEnableSnapshotCopyMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

### RedshiftEnableSnapshotCopyResult <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEnableSnapshotCopyResult: redshift.RedshiftEnableSnapshotCopyResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftEndpoint <a name="aws-cdk-sdk.redshift.RedshiftEndpoint"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEndpoint: redshift.RedshiftEndpoint = { ... }
```

##### `address`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEndpoint.property.port"></a>

- *Type:* `number`

---

### RedshiftEvent <a name="aws-cdk-sdk.redshift.RedshiftEvent"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEvent: redshift.RedshiftEvent = { ... }
```

##### `date`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.date"></a>

- *Type:* `string`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.eventId"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.message"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.severity"></a>

- *Type:* `string`

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.sourceIdentifier"></a>

- *Type:* `string`

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEvent.property.sourceType"></a>

- *Type:* `string`

---

### RedshiftEventCategoriesMap <a name="aws-cdk-sdk.redshift.RedshiftEventCategoriesMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEventCategoriesMap: redshift.RedshiftEventCategoriesMap = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventCategoriesMap.property.events"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventInfoMap`](#aws-cdk-sdk.redshift.RedshiftEventInfoMap)[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventCategoriesMap.property.sourceType"></a>

- *Type:* `string`

---

### RedshiftEventCategoriesMessage <a name="aws-cdk-sdk.redshift.RedshiftEventCategoriesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEventCategoriesMessage: redshift.RedshiftEventCategoriesMessage = { ... }
```

##### `eventCategoriesMapList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventCategoriesMessage.property.eventCategoriesMapList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventCategoriesMap`](#aws-cdk-sdk.redshift.RedshiftEventCategoriesMap)[]

---

### RedshiftEventInfoMap <a name="aws-cdk-sdk.redshift.RedshiftEventInfoMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEventInfoMap: redshift.RedshiftEventInfoMap = { ... }
```

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventInfoMap.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `eventDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventInfoMap.property.eventDescription"></a>

- *Type:* `string`

---

##### `eventId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventInfoMap.property.eventId"></a>

- *Type:* `string`

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventInfoMap.property.severity"></a>

- *Type:* `string`

---

### RedshiftEventsMessage <a name="aws-cdk-sdk.redshift.RedshiftEventsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEventsMessage: redshift.RedshiftEventsMessage = { ... }
```

##### `events`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventsMessage.property.events"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEvent`](#aws-cdk-sdk.redshift.RedshiftEvent)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventsMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftEventSubscription <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEventSubscription: redshift.RedshiftEventSubscription = { ... }
```

##### `customerAwsId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.severity"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftEventSubscriptionsMessage <a name="aws-cdk-sdk.redshift.RedshiftEventSubscriptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftEventSubscriptionsMessage: redshift.RedshiftEventSubscriptionsMessage = { ... }
```

##### `eventSubscriptionsList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscriptionsMessage.property.eventSubscriptionsList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventSubscription`](#aws-cdk-sdk.redshift.RedshiftEventSubscription)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftEventSubscriptionsMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftGetClusterCredentialsMessage <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftGetClusterCredentialsMessage: redshift.RedshiftGetClusterCredentialsMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage.property.dbUser"></a>

- *Type:* `string`

---

##### `autoCreate`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage.property.autoCreate"></a>

- *Type:* `boolean`

---

##### `dbGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage.property.dbGroups"></a>

- *Type:* `string`[]

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage.property.dbName"></a>

- *Type:* `string`

---

##### `durationSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage.property.durationSeconds"></a>

- *Type:* `number`

---

### RedshiftGetReservedNodeExchangeOfferingsInputMessage <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftGetReservedNodeExchangeOfferingsInputMessage: redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage = { ... }
```

##### `reservedNodeId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage.property.reservedNodeId"></a>

- *Type:* `string`

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage.property.marker"></a>

- *Type:* `string`

---

##### `maxRecords`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage.property.maxRecords"></a>

- *Type:* `number`

---

### RedshiftGetReservedNodeExchangeOfferingsOutputMessage <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsOutputMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftGetReservedNodeExchangeOfferingsOutputMessage: redshift.RedshiftGetReservedNodeExchangeOfferingsOutputMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsOutputMessage.property.marker"></a>

- *Type:* `string`

---

##### `reservedNodeOfferings`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsOutputMessage.property.reservedNodeOfferings"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNodeOffering`](#aws-cdk-sdk.redshift.RedshiftReservedNodeOffering)[]

---

### RedshiftHsmClientCertificate <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificate"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftHsmClientCertificate: redshift.RedshiftHsmClientCertificate = { ... }
```

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificate.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmClientCertificatePublicKey`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificate.property.hsmClientCertificatePublicKey"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificate.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftHsmClientCertificateMessage <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificateMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftHsmClientCertificateMessage: redshift.RedshiftHsmClientCertificateMessage = { ... }
```

##### `hsmClientCertificates`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificateMessage.property.hsmClientCertificates"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmClientCertificate`](#aws-cdk-sdk.redshift.RedshiftHsmClientCertificate)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmClientCertificateMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftHsmConfiguration <a name="aws-cdk-sdk.redshift.RedshiftHsmConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftHsmConfiguration: redshift.RedshiftHsmConfiguration = { ... }
```

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfiguration.property.description"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfiguration.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `hsmIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfiguration.property.hsmIpAddress"></a>

- *Type:* `string`

---

##### `hsmPartitionName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfiguration.property.hsmPartitionName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfiguration.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftHsmConfigurationMessage <a name="aws-cdk-sdk.redshift.RedshiftHsmConfigurationMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftHsmConfigurationMessage: redshift.RedshiftHsmConfigurationMessage = { ... }
```

##### `hsmConfigurations`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfigurationMessage.property.hsmConfigurations"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmConfiguration`](#aws-cdk-sdk.redshift.RedshiftHsmConfiguration)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmConfigurationMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftHsmStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftHsmStatus: redshift.RedshiftHsmStatus = { ... }
```

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftHsmStatus.property.status"></a>

- *Type:* `string`

---

### RedshiftIpRange <a name="aws-cdk-sdk.redshift.RedshiftIpRange"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftIpRange: redshift.RedshiftIpRange = { ... }
```

##### `cidrip`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftIpRange.property.cidrip"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftIpRange.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftIpRange.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftLoggingStatus <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftLoggingStatus: redshift.RedshiftLoggingStatus = { ... }
```

##### `bucketName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus.property.bucketName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastFailureTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus.property.lastFailureTime"></a>

- *Type:* `string`

---

##### `lastSuccessfulDeliveryTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus.property.lastSuccessfulDeliveryTime"></a>

- *Type:* `string`

---

##### `loggingEnabled`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus.property.loggingEnabled"></a>

- *Type:* `boolean`

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftLoggingStatus.property.s3KeyPrefix"></a>

- *Type:* `string`

---

### RedshiftMaintenanceTrack <a name="aws-cdk-sdk.redshift.RedshiftMaintenanceTrack"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftMaintenanceTrack: redshift.RedshiftMaintenanceTrack = { ... }
```

##### `databaseVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftMaintenanceTrack.property.databaseVersion"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftMaintenanceTrack.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `updateTargets`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftMaintenanceTrack.property.updateTargets"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftUpdateTarget`](#aws-cdk-sdk.redshift.RedshiftUpdateTarget)[]

---

### RedshiftModifyClusterDbRevisionMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterDbRevisionMessage: redshift.RedshiftModifyClusterDbRevisionMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `revisionTarget`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage.property.revisionTarget"></a>

- *Type:* `string`

---

### RedshiftModifyClusterDbRevisionResult <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterDbRevisionResult: redshift.RedshiftModifyClusterDbRevisionResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftModifyClusterIamRolesMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterIamRolesMessage: redshift.RedshiftModifyClusterIamRolesMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `addIamRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage.property.addIamRoles"></a>

- *Type:* `string`[]

---

##### `removeIamRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage.property.removeIamRoles"></a>

- *Type:* `string`[]

---

### RedshiftModifyClusterIamRolesResult <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterIamRolesResult: redshift.RedshiftModifyClusterIamRolesResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftModifyClusterMaintenanceMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterMaintenanceMessage: redshift.RedshiftModifyClusterMaintenanceMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `deferMaintenance`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage.property.deferMaintenance"></a>

- *Type:* `boolean`

---

##### `deferMaintenanceDuration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage.property.deferMaintenanceDuration"></a>

- *Type:* `number`

---

##### `deferMaintenanceEndTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage.property.deferMaintenanceEndTime"></a>

- *Type:* `string`

---

##### `deferMaintenanceIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage.property.deferMaintenanceIdentifier"></a>

- *Type:* `string`

---

##### `deferMaintenanceStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage.property.deferMaintenanceStartTime"></a>

- *Type:* `string`

---

### RedshiftModifyClusterMaintenanceResult <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterMaintenanceResult: redshift.RedshiftModifyClusterMaintenanceResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftModifyClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterMessage: redshift.RedshiftModifyClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.clusterParameterGroupName"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.clusterSecurityGroups"></a>

- *Type:* `string`[]

---

##### `clusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.clusterVersion"></a>

- *Type:* `string`

---

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.elasticIp"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.encrypted"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `newClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.newClusterIdentifier"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### RedshiftModifyClusterParameterGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterParameterGroupMessage: redshift.RedshiftModifyClusterParameterGroupMessage = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftParameter`](#aws-cdk-sdk.redshift.RedshiftParameter)[]

---

### RedshiftModifyClusterResult <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterResult: redshift.RedshiftModifyClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftModifyClusterSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterSnapshotMessage: redshift.RedshiftModifyClusterSnapshotMessage = { ... }
```

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `force`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage.property.force"></a>

- *Type:* `boolean`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

### RedshiftModifyClusterSnapshotResult <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterSnapshotResult: redshift.RedshiftModifyClusterSnapshotResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)

---

### RedshiftModifyClusterSnapshotScheduleMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotScheduleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterSnapshotScheduleMessage: redshift.RedshiftModifyClusterSnapshotScheduleMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotScheduleMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `disassociateSchedule`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotScheduleMessage.property.disassociateSchedule"></a>

- *Type:* `boolean`

---

##### `scheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotScheduleMessage.property.scheduleIdentifier"></a>

- *Type:* `string`

---

### RedshiftModifyClusterSubnetGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterSubnetGroupMessage: redshift.RedshiftModifyClusterSubnetGroupMessage = { ... }
```

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `subnetIds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage.property.subnetIds"></a>

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage.property.description"></a>

- *Type:* `string`

---

### RedshiftModifyClusterSubnetGroupResult <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyClusterSubnetGroupResult: redshift.RedshiftModifyClusterSubnetGroupResult = { ... }
```

##### `clusterSubnetGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupResult.property.clusterSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup)

---

### RedshiftModifyEventSubscriptionMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyEventSubscriptionMessage: redshift.RedshiftModifyEventSubscriptionMessage = { ... }
```

##### `subscriptionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.subscriptionName"></a>

- *Type:* `string`

---

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategories`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.eventCategories"></a>

- *Type:* `string`[]

---

##### `severity`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.severity"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.sourceIds"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage.property.sourceType"></a>

- *Type:* `string`

---

### RedshiftModifyEventSubscriptionResult <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyEventSubscriptionResult: redshift.RedshiftModifyEventSubscriptionResult = { ... }
```

##### `eventSubscription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionResult.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventSubscription`](#aws-cdk-sdk.redshift.RedshiftEventSubscription)

---

### RedshiftModifyScheduledActionMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyScheduledActionMessage: redshift.RedshiftModifyScheduledActionMessage = { ... }
```

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `enable`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.enable"></a>

- *Type:* `boolean`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.endTime"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.iamRole"></a>

- *Type:* `string`

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.schedule"></a>

- *Type:* `string`

---

##### `scheduledActionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.scheduledActionDescription"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.startTime"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage.property.targetAction"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftScheduledActionType`](#aws-cdk-sdk.redshift.RedshiftScheduledActionType)

---

### RedshiftModifySnapshotCopyRetentionPeriodMessage <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifySnapshotCopyRetentionPeriodMessage: redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `manual`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage.property.manual"></a>

- *Type:* `boolean`

---

### RedshiftModifySnapshotCopyRetentionPeriodResult <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifySnapshotCopyRetentionPeriodResult: redshift.RedshiftModifySnapshotCopyRetentionPeriodResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftModifySnapshotScheduleMessage <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifySnapshotScheduleMessage: redshift.RedshiftModifySnapshotScheduleMessage = { ... }
```

##### `scheduleDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage.property.scheduleDefinitions"></a>

- *Type:* `string`[]

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage.property.scheduleIdentifier"></a>

- *Type:* `string`

---

### RedshiftModifyUsageLimitMessage <a name="aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftModifyUsageLimitMessage: redshift.RedshiftModifyUsageLimitMessage = { ... }
```

##### `usageLimitId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage.property.usageLimitId"></a>

- *Type:* `string`

---

##### `amount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage.property.amount"></a>

- *Type:* `number`

---

##### `breachAction`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage.property.breachAction"></a>

- *Type:* `string`

---

### RedshiftNodeConfigurationOption <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftNodeConfigurationOption: redshift.RedshiftNodeConfigurationOption = { ... }
```

##### `estimatedDiskUtilizationPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption.property.estimatedDiskUtilizationPercent"></a>

- *Type:* `number`

---

##### `mode`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption.property.mode"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption.property.numberOfNodes"></a>

- *Type:* `number`

---

### RedshiftNodeConfigurationOptionsFilter <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftNodeConfigurationOptionsFilter: redshift.RedshiftNodeConfigurationOptionsFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsFilter.property.name"></a>

- *Type:* `string`

---

##### `operator`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsFilter.property.operator"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsFilter.property.values"></a>

- *Type:* `string`[]

---

### RedshiftNodeConfigurationOptionsMessage <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftNodeConfigurationOptionsMessage: redshift.RedshiftNodeConfigurationOptionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `nodeConfigurationOptionList`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftNodeConfigurationOptionsMessage.property.nodeConfigurationOptionList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption`](#aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption)[]

---

### RedshiftOrderableClusterOption <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftOrderableClusterOption: redshift.RedshiftOrderableClusterOption = { ... }
```

##### `availabilityZones`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOption.property.availabilityZones"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAvailabilityZone`](#aws-cdk-sdk.redshift.RedshiftAvailabilityZone)[]

---

##### `clusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOption.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOption.property.clusterVersion"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOption.property.nodeType"></a>

- *Type:* `string`

---

### RedshiftOrderableClusterOptionsMessage <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOptionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftOrderableClusterOptionsMessage: redshift.RedshiftOrderableClusterOptionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOptionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `orderableClusterOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftOrderableClusterOptionsMessage.property.orderableClusterOptions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftOrderableClusterOption`](#aws-cdk-sdk.redshift.RedshiftOrderableClusterOption)[]

---

### RedshiftParameter <a name="aws-cdk-sdk.redshift.RedshiftParameter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftParameter: redshift.RedshiftParameter = { ... }
```

##### `allowedValues`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.allowedValues"></a>

- *Type:* `string`

---

##### `applyType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.applyType"></a>

- *Type:* `string`

---

##### `dataType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.dataType"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.description"></a>

- *Type:* `string`

---

##### `isModifiable`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.isModifiable"></a>

- *Type:* `boolean`

---

##### `minimumEngineVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.minimumEngineVersion"></a>

- *Type:* `string`

---

##### `parameterName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.parameterName"></a>

- *Type:* `string`

---

##### `parameterValue`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.parameterValue"></a>

- *Type:* `string`

---

##### `source`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftParameter.property.source"></a>

- *Type:* `string`

---

### RedshiftPauseClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftPauseClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftPauseClusterMessage: redshift.RedshiftPauseClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftPauseClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftPauseClusterResult <a name="aws-cdk-sdk.redshift.RedshiftPauseClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftPauseClusterResult: redshift.RedshiftPauseClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPauseClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftPendingModifiedValues: redshift.RedshiftPendingModifiedValues = { ... }
```

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

### RedshiftPurchaseReservedNodeOfferingMessage <a name="aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftPurchaseReservedNodeOfferingMessage: redshift.RedshiftPurchaseReservedNodeOfferingMessage = { ... }
```

##### `reservedNodeOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage.property.reservedNodeOfferingId"></a>

- *Type:* `string`

---

##### `nodeCount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage.property.nodeCount"></a>

- *Type:* `number`

---

### RedshiftPurchaseReservedNodeOfferingResult <a name="aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftPurchaseReservedNodeOfferingResult: redshift.RedshiftPurchaseReservedNodeOfferingResult = { ... }
```

##### `reservedNode`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingResult.property.reservedNode"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNode`](#aws-cdk-sdk.redshift.RedshiftReservedNode)

---

### RedshiftRebootClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftRebootClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRebootClusterMessage: redshift.RedshiftRebootClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRebootClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftRebootClusterResult <a name="aws-cdk-sdk.redshift.RedshiftRebootClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRebootClusterResult: redshift.RedshiftRebootClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRebootClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftRecurringCharge <a name="aws-cdk-sdk.redshift.RedshiftRecurringCharge"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRecurringCharge: redshift.RedshiftRecurringCharge = { ... }
```

##### `recurringChargeAmount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRecurringCharge.property.recurringChargeAmount"></a>

- *Type:* `number`

---

##### `recurringChargeFrequency`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRecurringCharge.property.recurringChargeFrequency"></a>

- *Type:* `string`

---

### RedshiftReservedNode <a name="aws-cdk-sdk.redshift.RedshiftReservedNode"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftReservedNode: redshift.RedshiftReservedNode = { ... }
```

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.fixedPrice"></a>

- *Type:* `number`

---

##### `nodeCount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.nodeCount"></a>

- *Type:* `number`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.nodeType"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.offeringType"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRecurringCharge`](#aws-cdk-sdk.redshift.RedshiftRecurringCharge)[]

---

##### `reservedNodeId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.reservedNodeId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.reservedNodeOfferingId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.reservedNodeOfferingType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.state"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNode.property.usagePrice"></a>

- *Type:* `number`

---

### RedshiftReservedNodeOffering <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftReservedNodeOffering: redshift.RedshiftReservedNodeOffering = { ... }
```

##### `currencyCode`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.fixedPrice"></a>

- *Type:* `number`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.nodeType"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.offeringType"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRecurringCharge`](#aws-cdk-sdk.redshift.RedshiftRecurringCharge)[]

---

##### `reservedNodeOfferingId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.reservedNodeOfferingId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.reservedNodeOfferingType"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOffering.property.usagePrice"></a>

- *Type:* `number`

---

### RedshiftReservedNodeOfferingsMessage <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOfferingsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftReservedNodeOfferingsMessage: redshift.RedshiftReservedNodeOfferingsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOfferingsMessage.property.marker"></a>

- *Type:* `string`

---

##### `reservedNodeOfferings`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodeOfferingsMessage.property.reservedNodeOfferings"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNodeOffering`](#aws-cdk-sdk.redshift.RedshiftReservedNodeOffering)[]

---

### RedshiftReservedNodesMessage <a name="aws-cdk-sdk.redshift.RedshiftReservedNodesMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftReservedNodesMessage: redshift.RedshiftReservedNodesMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodesMessage.property.marker"></a>

- *Type:* `string`

---

##### `reservedNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftReservedNodesMessage.property.reservedNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNode`](#aws-cdk-sdk.redshift.RedshiftReservedNode)[]

---

### RedshiftResetClusterParameterGroupMessage <a name="aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResetClusterParameterGroupMessage: redshift.RedshiftResetClusterParameterGroupMessage = { ... }
```

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `parameters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftParameter`](#aws-cdk-sdk.redshift.RedshiftParameter)[]

---

##### `resetAllParameters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage.property.resetAllParameters"></a>

- *Type:* `boolean`

---

### RedshiftResizeClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResizeClusterMessage: redshift.RedshiftResizeClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `classic`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterMessage.property.classic"></a>

- *Type:* `boolean`

---

##### `clusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterMessage.property.clusterType"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterMessage.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterMessage.property.numberOfNodes"></a>

- *Type:* `number`

---

### RedshiftResizeClusterResult <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResizeClusterResult: redshift.RedshiftResizeClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResizeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResizeInfo: redshift.RedshiftResizeInfo = { ... }
```

##### `allowCancelResize`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeInfo.property.resizeType"></a>

- *Type:* `string`

---

### RedshiftResizeProgressMessage <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResizeProgressMessage: redshift.RedshiftResizeProgressMessage = { ... }
```

##### `avgResizeRateInMegaBytesPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.avgResizeRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferProgressPercent`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.dataTransferProgressPercent"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `importTablesCompleted`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.importTablesCompleted"></a>

- *Type:* `string`[]

---

##### `importTablesInProgress`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.importTablesInProgress"></a>

- *Type:* `string`[]

---

##### `importTablesNotStarted`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.importTablesNotStarted"></a>

- *Type:* `string`[]

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.message"></a>

- *Type:* `string`

---

##### `progressInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `resizeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.resizeType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.status"></a>

- *Type:* `string`

---

##### `targetClusterType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.targetClusterType"></a>

- *Type:* `string`

---

##### `targetEncryptionType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.targetEncryptionType"></a>

- *Type:* `string`

---

##### `targetNodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.targetNodeType"></a>

- *Type:* `string`

---

##### `targetNumberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.targetNumberOfNodes"></a>

- *Type:* `number`

---

##### `totalResizeDataInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResizeProgressMessage.property.totalResizeDataInMegaBytes"></a>

- *Type:* `number`

---

### RedshiftRestoreFromClusterSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRestoreFromClusterSnapshotMessage: redshift.RedshiftRestoreFromClusterSnapshotMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `additionalInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.additionalInfo"></a>

- *Type:* `string`

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.clusterParameterGroupName"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.clusterSecurityGroups"></a>

- *Type:* `string`[]

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `elasticIp`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.elasticIp"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `iamRoles`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.iamRoles"></a>

- *Type:* `string`[]

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.port"></a>

- *Type:* `number`

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.snapshotClusterIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage.property.vpcSecurityGroupIds"></a>

- *Type:* `string`[]

---

### RedshiftRestoreFromClusterSnapshotResult <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRestoreFromClusterSnapshotResult: redshift.RedshiftRestoreFromClusterSnapshotResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRestoreStatus: redshift.RedshiftRestoreStatus = { ... }
```

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreStatus.property.status"></a>

- *Type:* `string`

---

### RedshiftRestoreTableFromClusterSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRestoreTableFromClusterSnapshotMessage: redshift.RedshiftRestoreTableFromClusterSnapshotMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `newTableName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.newTableName"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `sourceDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.sourceDatabaseName"></a>

- *Type:* `string`

---

##### `sourceTableName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.sourceTableName"></a>

- *Type:* `string`

---

##### `sourceSchemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.sourceSchemaName"></a>

- *Type:* `string`

---

##### `targetDatabaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.targetDatabaseName"></a>

- *Type:* `string`

---

##### `targetSchemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage.property.targetSchemaName"></a>

- *Type:* `string`

---

### RedshiftRestoreTableFromClusterSnapshotResult <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRestoreTableFromClusterSnapshotResult: redshift.RedshiftRestoreTableFromClusterSnapshotResult = { ... }
```

##### `tableRestoreStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotResult.property.tableRestoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTableRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftTableRestoreStatus)

---

### RedshiftResumeClusterMessage <a name="aws-cdk-sdk.redshift.RedshiftResumeClusterMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResumeClusterMessage: redshift.RedshiftResumeClusterMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResumeClusterMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftResumeClusterResult <a name="aws-cdk-sdk.redshift.RedshiftResumeClusterResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftResumeClusterResult: redshift.RedshiftResumeClusterResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftResumeClusterResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftRevisionTarget <a name="aws-cdk-sdk.redshift.RedshiftRevisionTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRevisionTarget: redshift.RedshiftRevisionTarget = { ... }
```

##### `databaseRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevisionTarget.property.databaseRevision"></a>

- *Type:* `string`

---

##### `databaseRevisionReleaseDate`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevisionTarget.property.databaseRevisionReleaseDate"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevisionTarget.property.description"></a>

- *Type:* `string`

---

### RedshiftRevokeClusterSecurityGroupIngressMessage <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRevokeClusterSecurityGroupIngressMessage: redshift.RedshiftRevokeClusterSecurityGroupIngressMessage = { ... }
```

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `cidrip`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage.property.cidrip"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage.property.ec2SecurityGroupName"></a>

- *Type:* `string`

---

##### `ec2SecurityGroupOwnerId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage.property.ec2SecurityGroupOwnerId"></a>

- *Type:* `string`

---

### RedshiftRevokeClusterSecurityGroupIngressResult <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRevokeClusterSecurityGroupIngressResult: redshift.RedshiftRevokeClusterSecurityGroupIngressResult = { ... }
```

##### `clusterSecurityGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressResult.property.clusterSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup)

---

### RedshiftRevokeSnapshotAccessMessage <a name="aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRevokeSnapshotAccessMessage: redshift.RedshiftRevokeSnapshotAccessMessage = { ... }
```

##### `accountWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage.property.accountWithRestoreAccess"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage.property.snapshotClusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftRevokeSnapshotAccessResult <a name="aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRevokeSnapshotAccessResult: redshift.RedshiftRevokeSnapshotAccessResult = { ... }
```

##### `snapshot`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessResult.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)

---

### RedshiftRotateEncryptionKeyMessage <a name="aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRotateEncryptionKeyMessage: redshift.RedshiftRotateEncryptionKeyMessage = { ... }
```

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage.property.clusterIdentifier"></a>

- *Type:* `string`

---

### RedshiftRotateEncryptionKeyResult <a name="aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyResult"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftRotateEncryptionKeyResult: redshift.RedshiftRotateEncryptionKeyResult = { ... }
```

##### `cluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyResult.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)

---

### RedshiftScheduledAction <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftScheduledAction: redshift.RedshiftScheduledAction = { ... }
```

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.endTime"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.iamRole"></a>

- *Type:* `string`

---

##### `nextInvocations`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.nextInvocations"></a>

- *Type:* `string`[]

---

##### `schedule`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.schedule"></a>

- *Type:* `string`

---

##### `scheduledActionDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.scheduledActionDescription"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.state"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledAction.property.targetAction"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftScheduledActionType`](#aws-cdk-sdk.redshift.RedshiftScheduledActionType)

---

### RedshiftScheduledActionFilter <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftScheduledActionFilter: redshift.RedshiftScheduledActionFilter = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionFilter.property.values"></a>

- *Type:* `string`[]

---

### RedshiftScheduledActionsMessage <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionsMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftScheduledActionsMessage: redshift.RedshiftScheduledActionsMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionsMessage.property.marker"></a>

- *Type:* `string`

---

##### `scheduledActions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionsMessage.property.scheduledActions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftScheduledAction`](#aws-cdk-sdk.redshift.RedshiftScheduledAction)[]

---

### RedshiftScheduledActionType <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionType"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftScheduledActionType: redshift.RedshiftScheduledActionType = { ... }
```

##### `pauseCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionType.property.pauseCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---

##### `resizeCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionType.property.resizeCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---

##### `resumeCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftScheduledActionType.property.resumeCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---

### RedshiftSnapshot <a name="aws-cdk-sdk.redshift.RedshiftSnapshot"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshot: redshift.RedshiftSnapshot = { ... }
```

##### `accountsWithRestoreAccess`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshot.property.vpcId"></a>

- *Type:* `string`

---

### RedshiftSnapshotCopyGrant <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshotCopyGrant: redshift.RedshiftSnapshotCopyGrant = { ... }
```

##### `kmsKeyId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftSnapshotCopyGrantMessage <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrantMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshotCopyGrantMessage: redshift.RedshiftSnapshotCopyGrantMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrantMessage.property.marker"></a>

- *Type:* `string`

---

##### `snapshotCopyGrants`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrantMessage.property.snapshotCopyGrants"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant`](#aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant)[]

---

### RedshiftSnapshotErrorMessage <a name="aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshotErrorMessage: redshift.RedshiftSnapshotErrorMessage = { ... }
```

##### `failureCode`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage.property.failureCode"></a>

- *Type:* `string`

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage.property.failureReason"></a>

- *Type:* `string`

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage.property.snapshotClusterIdentifier"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage.property.snapshotIdentifier"></a>

- *Type:* `string`

---

### RedshiftSnapshotMessage <a name="aws-cdk-sdk.redshift.RedshiftSnapshotMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshotMessage: redshift.RedshiftSnapshotMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotMessage.property.marker"></a>

- *Type:* `string`

---

##### `snapshots`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotMessage.property.snapshots"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)[]

---

### RedshiftSnapshotSchedule <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshotSchedule: redshift.RedshiftSnapshotSchedule = { ... }
```

##### `associatedClusterCount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.associatedClusterCount"></a>

- *Type:* `number`

---

##### `associatedClusters`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.associatedClusters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule`](#aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule)[]

---

##### `nextInvocations`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.nextInvocations"></a>

- *Type:* `string`[]

---

##### `scheduleDefinitions`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.scheduleDefinitions"></a>

- *Type:* `string`[]

---

##### `scheduleDescription`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.scheduleDescription"></a>

- *Type:* `string`

---

##### `scheduleIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.scheduleIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSchedule.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

### RedshiftSnapshotSortingEntity <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSortingEntity"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSnapshotSortingEntity: redshift.RedshiftSnapshotSortingEntity = { ... }
```

##### `attribute`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSortingEntity.property.attribute"></a>

- *Type:* `string`

---

##### `sortOrder`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSnapshotSortingEntity.property.sortOrder"></a>

- *Type:* `string`

---

### RedshiftSubnet <a name="aws-cdk-sdk.redshift.RedshiftSubnet"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSubnet: redshift.RedshiftSubnet = { ... }
```

##### `subnetAvailabilityZone`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSubnet.property.subnetAvailabilityZone"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAvailabilityZone`](#aws-cdk-sdk.redshift.RedshiftAvailabilityZone)

---

##### `subnetIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSubnet.property.subnetIdentifier"></a>

- *Type:* `string`

---

##### `subnetStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSubnet.property.subnetStatus"></a>

- *Type:* `string`

---

### RedshiftSupportedOperation <a name="aws-cdk-sdk.redshift.RedshiftSupportedOperation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSupportedOperation: redshift.RedshiftSupportedOperation = { ... }
```

##### `operationName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSupportedOperation.property.operationName"></a>

- *Type:* `string`

---

### RedshiftSupportedPlatform <a name="aws-cdk-sdk.redshift.RedshiftSupportedPlatform"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftSupportedPlatform: redshift.RedshiftSupportedPlatform = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftSupportedPlatform.property.name"></a>

- *Type:* `string`

---

### RedshiftTableRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftTableRestoreStatus: redshift.RedshiftTableRestoreStatus = { ... }
```

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.message"></a>

- *Type:* `string`

---

##### `newTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.newTableName"></a>

- *Type:* `string`

---

##### `progressInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `requestTime`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.requestTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `sourceDatabaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.sourceDatabaseName"></a>

- *Type:* `string`

---

##### `sourceSchemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.sourceSchemaName"></a>

- *Type:* `string`

---

##### `sourceTableName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.sourceTableName"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.status"></a>

- *Type:* `string`

---

##### `tableRestoreRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.tableRestoreRequestId"></a>

- *Type:* `string`

---

##### `targetDatabaseName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.targetDatabaseName"></a>

- *Type:* `string`

---

##### `targetSchemaName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.targetSchemaName"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatus.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---

### RedshiftTableRestoreStatusMessage <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatusMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftTableRestoreStatusMessage: redshift.RedshiftTableRestoreStatusMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatusMessage.property.marker"></a>

- *Type:* `string`

---

##### `tableRestoreStatusDetails`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTableRestoreStatusMessage.property.tableRestoreStatusDetails"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTableRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftTableRestoreStatus)[]

---

### RedshiftTag <a name="aws-cdk-sdk.redshift.RedshiftTag"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftTag: redshift.RedshiftTag = { ... }
```

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTag.property.key"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTag.property.value"></a>

- *Type:* `string`

---

### RedshiftTaggedResource <a name="aws-cdk-sdk.redshift.RedshiftTaggedResource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftTaggedResource: redshift.RedshiftTaggedResource = { ... }
```

##### `resourceName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTaggedResource.property.resourceName"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTaggedResource.property.resourceType"></a>

- *Type:* `string`

---

##### `tag`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTaggedResource.property.tag"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)

---

### RedshiftTaggedResourceListMessage <a name="aws-cdk-sdk.redshift.RedshiftTaggedResourceListMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftTaggedResourceListMessage: redshift.RedshiftTaggedResourceListMessage = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTaggedResourceListMessage.property.marker"></a>

- *Type:* `string`

---

##### `taggedResources`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTaggedResourceListMessage.property.taggedResources"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTaggedResource`](#aws-cdk-sdk.redshift.RedshiftTaggedResource)[]

---

### RedshiftTrackListMessage <a name="aws-cdk-sdk.redshift.RedshiftTrackListMessage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftTrackListMessage: redshift.RedshiftTrackListMessage = { ... }
```

##### `maintenanceTracks`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTrackListMessage.property.maintenanceTracks"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftMaintenanceTrack`](#aws-cdk-sdk.redshift.RedshiftMaintenanceTrack)[]

---

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftTrackListMessage.property.marker"></a>

- *Type:* `string`

---

### RedshiftUpdateTarget <a name="aws-cdk-sdk.redshift.RedshiftUpdateTarget"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftUpdateTarget: redshift.RedshiftUpdateTarget = { ... }
```

##### `databaseVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUpdateTarget.property.databaseVersion"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUpdateTarget.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `supportedOperations`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUpdateTarget.property.supportedOperations"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSupportedOperation`](#aws-cdk-sdk.redshift.RedshiftSupportedOperation)[]

---

### RedshiftUsageLimit <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftUsageLimit: redshift.RedshiftUsageLimit = { ... }
```

##### `amount`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.amount"></a>

- *Type:* `number`

---

##### `breachAction`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.breachAction"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `featureType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.featureType"></a>

- *Type:* `string`

---

##### `limitType`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.limitType"></a>

- *Type:* `string`

---

##### `period`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.period"></a>

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `usageLimitId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimit.property.usageLimitId"></a>

- *Type:* `string`

---

### RedshiftUsageLimitList <a name="aws-cdk-sdk.redshift.RedshiftUsageLimitList"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftUsageLimitList: redshift.RedshiftUsageLimitList = { ... }
```

##### `marker`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimitList.property.marker"></a>

- *Type:* `string`

---

##### `usageLimits`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftUsageLimitList.property.usageLimits"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftUsageLimit`](#aws-cdk-sdk.redshift.RedshiftUsageLimit)[]

---

### RedshiftVpcSecurityGroupMembership <a name="aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

const redshiftVpcSecurityGroupMembership: redshift.RedshiftVpcSecurityGroupMembership = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership.property.status"></a>

- *Type:* `string`

---

##### `vpcSecurityGroupId`<sup>Optional</sup> <a name="aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership.property.vpcSecurityGroupId"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### RedshiftResponsesAcceptReservedNodeExchange <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchange"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchange.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesAcceptReservedNodeExchange(__scope: Construct, __resources: string[], __input: RedshiftAcceptReservedNodeExchangeInputMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchange.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchange.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchange.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage`](#aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage)

---



#### Properties <a name="Properties"></a>

##### `exchangedReservedNode`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchange.property.exchangedReservedNode"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode`](#aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode)

---


### RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode(__scope: Construct, __resources: string[], __input: RedshiftAcceptReservedNodeExchangeInputMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage`](#aws-cdk-sdk.redshift.RedshiftAcceptReservedNodeExchangeInputMessage)

---



#### Properties <a name="Properties"></a>

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.fixedPrice"></a>

- *Type:* `number`

---

##### `nodeCount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.nodeCount"></a>

- *Type:* `number`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.nodeType"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.offeringType"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRecurringCharge`](#aws-cdk-sdk.redshift.RedshiftRecurringCharge)[]

---

##### `reservedNodeId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.reservedNodeId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.reservedNodeOfferingId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.reservedNodeOfferingType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.state"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAcceptReservedNodeExchangeExchangedReservedNode.property.usagePrice"></a>

- *Type:* `number`

---


### RedshiftResponsesAuthorizeClusterSecurityGroupIngress <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress(__scope: Construct, __resources: string[], __input: RedshiftAuthorizeClusterSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage`](#aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngress.property.clusterSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup)

---


### RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup(__scope: Construct, __resources: string[], __input: RedshiftAuthorizeClusterSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage`](#aws-cdk-sdk.redshift.RedshiftAuthorizeClusterSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup`](#aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup)[]

---

##### `ipRanges`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.property.ipRanges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftIpRange`](#aws-cdk-sdk.redshift.RedshiftIpRange)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeClusterSecurityGroupIngressClusterSecurityGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesAuthorizeSnapshotAccess <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccess"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccess.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesAuthorizeSnapshotAccess(__scope: Construct, __resources: string[], __input: RedshiftAuthorizeSnapshotAccessMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage`](#aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccess.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot`](#aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot)

---


### RedshiftResponsesAuthorizeSnapshotAccessSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot(__scope: Construct, __resources: string[], __input: RedshiftAuthorizeSnapshotAccessMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage`](#aws-cdk-sdk.redshift.RedshiftAuthorizeSnapshotAccessMessage)

---



#### Properties <a name="Properties"></a>

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesAuthorizeSnapshotAccessSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesBatchDeleteClusterSnapshots <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesBatchDeleteClusterSnapshots(__scope: Construct, __resources: string[], __input: RedshiftBatchDeleteClusterSnapshotsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsRequest`](#aws-cdk-sdk.redshift.RedshiftBatchDeleteClusterSnapshotsRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots.property.errors"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage`](#aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage)[]

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchDeleteClusterSnapshots.property.resources"></a>

- *Type:* `string`[]

---


### RedshiftResponsesBatchModifyClusterSnapshots <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesBatchModifyClusterSnapshots(__scope: Construct, __resources: string[], __input: RedshiftBatchModifyClusterSnapshotsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage`](#aws-cdk-sdk.redshift.RedshiftBatchModifyClusterSnapshotsMessage)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots.property.errors"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage`](#aws-cdk-sdk.redshift.RedshiftSnapshotErrorMessage)[]

---

##### `resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesBatchModifyClusterSnapshots.property.resources"></a>

- *Type:* `string`[]

---


### RedshiftResponsesCancelResize <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCancelResize(__scope: Construct, __resources: string[], __input: RedshiftCancelResizeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCancelResizeMessage`](#aws-cdk-sdk.redshift.RedshiftCancelResizeMessage)

---



#### Properties <a name="Properties"></a>

##### `avgResizeRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.avgResizeRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.dataTransferProgressPercent"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `importTablesCompleted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.importTablesCompleted"></a>

- *Type:* `string`[]

---

##### `importTablesInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.importTablesInProgress"></a>

- *Type:* `string`[]

---

##### `importTablesNotStarted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.importTablesNotStarted"></a>

- *Type:* `string`[]

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.message"></a>

- *Type:* `string`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.resizeType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.status"></a>

- *Type:* `string`

---

##### `targetClusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.targetClusterType"></a>

- *Type:* `string`

---

##### `targetEncryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.targetEncryptionType"></a>

- *Type:* `string`

---

##### `targetNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.targetNodeType"></a>

- *Type:* `string`

---

##### `targetNumberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.targetNumberOfNodes"></a>

- *Type:* `number`

---

##### `totalResizeDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCancelResize.property.totalResizeDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesCopyClusterSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCopyClusterSnapshot(__scope: Construct, __resources: string[], __input: RedshiftCopyClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot`](#aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot)

---


### RedshiftResponsesCopyClusterSnapshotSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCopyClusterSnapshotSnapshot(__scope: Construct, __resources: string[], __input: RedshiftCopyClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftCopyClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCopyClusterSnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateCluster(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster)

---


### RedshiftResponsesCreateClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesCreateClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesCreateClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesCreateClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateClusterParameterGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterParameterGroup(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterParameterGroup`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroup.property.clusterParameterGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup)

---


### RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.property.description"></a>

- *Type:* `string`

---

##### `parameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.property.parameterGroupFamily"></a>

- *Type:* `string`

---

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterParameterGroupClusterParameterGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateClusterSecurityGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterSecurityGroup(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterSecurityGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroup.property.clusterSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup)

---


### RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterSecurityGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSecurityGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup`](#aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup)[]

---

##### `ipRanges`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.property.ipRanges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftIpRange`](#aws-cdk-sdk.redshift.RedshiftIpRange)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSecurityGroupClusterSecurityGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateClusterSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterSnapshot(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot)

---


### RedshiftResponsesCreateClusterSnapshotSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterSnapshotSnapshot(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateClusterSubnetGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterSubnetGroup(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroup.property.clusterSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup)

---


### RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup(__scope: Construct, __resources: string[], __input: RedshiftCreateClusterSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftCreateClusterSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.property.description"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSubnet`](#aws-cdk-sdk.redshift.RedshiftSubnet)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateClusterSubnetGroupClusterSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateEventSubscription <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscription.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateEventSubscription(__scope: Construct, __resources: string[], __input: RedshiftCreateEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription)

---


### RedshiftResponsesCreateEventSubscriptionEventSubscription <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: RedshiftCreateEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.severity"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateEventSubscriptionEventSubscription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateHsmClientCertificate <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificate.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateHsmClientCertificate(__scope: Construct, __resources: string[], __input: RedshiftCreateHsmClientCertificateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage`](#aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificate`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificate.property.hsmClientCertificate"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate)

---


### RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate(__scope: Construct, __resources: string[], __input: RedshiftCreateHsmClientCertificateMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage`](#aws-cdk-sdk.redshift.RedshiftCreateHsmClientCertificateMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmClientCertificatePublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.property.hsmClientCertificatePublicKey"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmClientCertificateHsmClientCertificate.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateHsmConfiguration <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfiguration.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateHsmConfiguration(__scope: Construct, __resources: string[], __input: RedshiftCreateHsmConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage`](#aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmConfiguration`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfiguration.property.hsmConfiguration"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration)

---


### RedshiftResponsesCreateHsmConfigurationHsmConfiguration <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration(__scope: Construct, __resources: string[], __input: RedshiftCreateHsmConfigurationMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage`](#aws-cdk-sdk.redshift.RedshiftCreateHsmConfigurationMessage)

---



#### Properties <a name="Properties"></a>

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.property.description"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `hsmIpAddress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.property.hsmIpAddress"></a>

- *Type:* `string`

---

##### `hsmPartitionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.property.hsmPartitionName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateHsmConfigurationHsmConfiguration.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateScheduledAction <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateScheduledAction(__scope: Construct, __resources: string[], __input: RedshiftCreateScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.endTime"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.iamRole"></a>

- *Type:* `string`

---

##### `nextInvocations`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.nextInvocations"></a>

- *Type:* `string`[]

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.schedule"></a>

- *Type:* `string`

---

##### `scheduledActionDescription`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.scheduledActionDescription"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.state"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledAction.property.targetAction"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction)

---


### RedshiftResponsesCreateScheduledActionTargetAction <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateScheduledActionTargetAction(__scope: Construct, __resources: string[], __input: RedshiftCreateScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `pauseCluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.property.pauseCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster)

---

##### `resizeCluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.property.resizeCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster)

---

##### `resumeCluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetAction.property.resumeCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster)

---


### RedshiftResponsesCreateScheduledActionTargetActionPauseCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster(__scope: Construct, __resources: string[], __input: RedshiftCreateScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateScheduledActionTargetActionResizeCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster(__scope: Construct, __resources: string[], __input: RedshiftCreateScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `classic`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.property.classic"></a>

- *Type:* `boolean`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.property.clusterType"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

- *Type:* `number`

---


### RedshiftResponsesCreateScheduledActionTargetActionResumeCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster(__scope: Construct, __resources: string[], __input: RedshiftCreateScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftCreateScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---


### RedshiftResponsesCreateSnapshotCopyGrant <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrant"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrant.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateSnapshotCopyGrant(__scope: Construct, __resources: string[], __input: RedshiftCreateSnapshotCopyGrantMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrant.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrant.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrant.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage`](#aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshotCopyGrant`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrant.property.snapshotCopyGrant"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant`](#aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant)

---


### RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant(__scope: Construct, __resources: string[], __input: RedshiftCreateSnapshotCopyGrantMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage`](#aws-cdk-sdk.redshift.RedshiftCreateSnapshotCopyGrantMessage)

---



#### Properties <a name="Properties"></a>

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotCopyGrantSnapshotCopyGrant.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateSnapshotSchedule <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateSnapshotSchedule(__scope: Construct, __resources: string[], __input: RedshiftCreateSnapshotScheduleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage`](#aws-cdk-sdk.redshift.RedshiftCreateSnapshotScheduleMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedClusterCount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.associatedClusterCount"></a>

- *Type:* `number`

---

##### `associatedClusters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.associatedClusters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule`](#aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule)[]

---

##### `nextInvocations`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.nextInvocations"></a>

- *Type:* `string`[]

---

##### `scheduleDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.scheduleDefinitions"></a>

- *Type:* `string`[]

---

##### `scheduleDescription`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.scheduleDescription"></a>

- *Type:* `string`

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.scheduleIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateSnapshotSchedule.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesCreateUsageLimit <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesCreateUsageLimit(__scope: Construct, __resources: string[], __input: RedshiftCreateUsageLimitMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage`](#aws-cdk-sdk.redshift.RedshiftCreateUsageLimitMessage)

---



#### Properties <a name="Properties"></a>

##### `amount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.amount"></a>

- *Type:* `number`

---

##### `breachAction`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.breachAction"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `featureType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.featureType"></a>

- *Type:* `string`

---

##### `limitType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.limitType"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.period"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `usageLimitId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesCreateUsageLimit.property.usageLimitId"></a>

- *Type:* `string`

---


### RedshiftResponsesDeleteCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteCluster(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster)

---


### RedshiftResponsesDeleteClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesDeleteClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesDeleteClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesDeleteClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesDeleteClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesDeleteClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesDeleteClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesDeleteClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesDeleteClusterSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterSnapshot(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot`](#aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot)

---


### RedshiftResponsesDeleteClusterSnapshotSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot(__scope: Construct, __resources: string[], __input: RedshiftDeleteClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftDeleteClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDeleteClusterSnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeAccountAttributes <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeAccountAttributes"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeAccountAttributes.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeAccountAttributes(__scope: Construct, __resources: string[], __input: RedshiftDescribeAccountAttributesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeAccountAttributes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeAccountAttributes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeAccountAttributes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeAccountAttributesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeAccountAttributesMessage)

---



#### Properties <a name="Properties"></a>

##### `accountAttributes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeAccountAttributes.property.accountAttributes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountAttribute`](#aws-cdk-sdk.redshift.RedshiftAccountAttribute)[]

---


### RedshiftResponsesDescribeClusterDbRevisions <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterDbRevisions(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterDbRevisionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterDbRevisionsMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterDbRevisions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions.property.clusterDbRevisions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterDbRevision`](#aws-cdk-sdk.redshift.RedshiftClusterDbRevision)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterDbRevisions.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeClusterParameterGroups <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterParameterGroups(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterParameterGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterParameterGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups.property.marker"></a>

- *Type:* `string`

---

##### `parameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameterGroups.property.parameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroup`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroup)[]

---


### RedshiftResponsesDescribeClusterParameters <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterParameters(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftParameter`](#aws-cdk-sdk.redshift.RedshiftParameter)[]

---


### RedshiftResponsesDescribeClusters <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusters(__scope: Construct, __resources: string[], __input: RedshiftDescribeClustersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClustersMessage)

---



#### Properties <a name="Properties"></a>

##### `clusters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters.property.clusters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftCluster`](#aws-cdk-sdk.redshift.RedshiftCluster)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusters.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeClusterSecurityGroups <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterSecurityGroups(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterSecurityGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterSecurityGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSecurityGroups.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeClusterSnapshots <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterSnapshots(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterSnapshotsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterSnapshotsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots.property.marker"></a>

- *Type:* `string`

---

##### `snapshots`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSnapshots.property.snapshots"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshot`](#aws-cdk-sdk.redshift.RedshiftSnapshot)[]

---


### RedshiftResponsesDescribeClusterSubnetGroups <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterSubnetGroups(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterSubnetGroupsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterSubnetGroupsMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSubnetGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups.property.clusterSubnetGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup`](#aws-cdk-sdk.redshift.RedshiftClusterSubnetGroup)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterSubnetGroups.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeClusterTracks <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterTracks(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterTracksMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterTracksMessage)

---



#### Properties <a name="Properties"></a>

##### `maintenanceTracks`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks.property.maintenanceTracks"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftMaintenanceTrack`](#aws-cdk-sdk.redshift.RedshiftMaintenanceTrack)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterTracks.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeClusterVersions <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeClusterVersions(__scope: Construct, __resources: string[], __input: RedshiftDescribeClusterVersionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeClusterVersionsMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterVersions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions.property.clusterVersions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterVersion`](#aws-cdk-sdk.redshift.RedshiftClusterVersion)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeClusterVersions.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeDefaultClusterParameters <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParameters.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeDefaultClusterParameters(__scope: Construct, __resources: string[], __input: RedshiftDescribeDefaultClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `defaultClusterParameters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParameters.property.defaultClusterParameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters`](#aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters)

---


### RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters(__scope: Construct, __resources: string[], __input: RedshiftDescribeDefaultClusterParametersMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeDefaultClusterParametersMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.property.marker"></a>

- *Type:* `string`

---

##### `parameterGroupFamily`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.property.parameterGroupFamily"></a>

- *Type:* `string`

---

##### `parameters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeDefaultClusterParametersDefaultClusterParameters.property.parameters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftParameter`](#aws-cdk-sdk.redshift.RedshiftParameter)[]

---


### RedshiftResponsesDescribeEventCategories <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventCategories"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventCategories.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeEventCategories(__scope: Construct, __resources: string[], __input: RedshiftDescribeEventCategoriesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventCategories.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventCategories.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventCategories.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeEventCategoriesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeEventCategoriesMessage)

---



#### Properties <a name="Properties"></a>

##### `eventCategoriesMapList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventCategories.property.eventCategoriesMapList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventCategoriesMap`](#aws-cdk-sdk.redshift.RedshiftEventCategoriesMap)[]

---


### RedshiftResponsesDescribeEvents <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeEvents(__scope: Construct, __resources: string[], __input: RedshiftDescribeEventsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeEventsMessage)

---



#### Properties <a name="Properties"></a>

##### `events`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents.property.events"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEvent`](#aws-cdk-sdk.redshift.RedshiftEvent)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEvents.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeEventSubscriptions <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeEventSubscriptions(__scope: Construct, __resources: string[], __input: RedshiftDescribeEventSubscriptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeEventSubscriptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscriptionsList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions.property.eventSubscriptionsList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEventSubscription`](#aws-cdk-sdk.redshift.RedshiftEventSubscription)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeEventSubscriptions.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeHsmClientCertificates <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeHsmClientCertificates(__scope: Construct, __resources: string[], __input: RedshiftDescribeHsmClientCertificatesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeHsmClientCertificatesMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificates`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates.property.hsmClientCertificates"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmClientCertificate`](#aws-cdk-sdk.redshift.RedshiftHsmClientCertificate)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmClientCertificates.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeHsmConfigurations <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeHsmConfigurations(__scope: Construct, __resources: string[], __input: RedshiftDescribeHsmConfigurationsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeHsmConfigurationsMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmConfigurations`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations.property.hsmConfigurations"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftHsmConfiguration`](#aws-cdk-sdk.redshift.RedshiftHsmConfiguration)[]

---

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeHsmConfigurations.property.marker"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeLoggingStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeLoggingStatus(__scope: Construct, __resources: string[], __input: RedshiftDescribeLoggingStatusMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeLoggingStatusMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeLoggingStatusMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.property.bucketName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastFailureTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.property.lastFailureTime"></a>

- *Type:* `string`

---

##### `lastSuccessfulDeliveryTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.property.lastSuccessfulDeliveryTime"></a>

- *Type:* `string`

---

##### `loggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.property.loggingEnabled"></a>

- *Type:* `boolean`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeLoggingStatus.property.s3KeyPrefix"></a>

- *Type:* `string`

---


### RedshiftResponsesDescribeNodeConfigurationOptions <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeNodeConfigurationOptions(__scope: Construct, __resources: string[], __input: RedshiftDescribeNodeConfigurationOptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeNodeConfigurationOptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions.property.marker"></a>

- *Type:* `string`

---

##### `nodeConfigurationOptionList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeNodeConfigurationOptions.property.nodeConfigurationOptionList"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption`](#aws-cdk-sdk.redshift.RedshiftNodeConfigurationOption)[]

---


### RedshiftResponsesDescribeOrderableClusterOptions <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeOrderableClusterOptions(__scope: Construct, __resources: string[], __input: RedshiftDescribeOrderableClusterOptionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeOrderableClusterOptionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions.property.marker"></a>

- *Type:* `string`

---

##### `orderableClusterOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeOrderableClusterOptions.property.orderableClusterOptions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftOrderableClusterOption`](#aws-cdk-sdk.redshift.RedshiftOrderableClusterOption)[]

---


### RedshiftResponsesDescribeReservedNodeOfferings <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeReservedNodeOfferings(__scope: Construct, __resources: string[], __input: RedshiftDescribeReservedNodeOfferingsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeReservedNodeOfferingsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings.property.marker"></a>

- *Type:* `string`

---

##### `reservedNodeOfferings`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodeOfferings.property.reservedNodeOfferings"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNodeOffering`](#aws-cdk-sdk.redshift.RedshiftReservedNodeOffering)[]

---


### RedshiftResponsesDescribeReservedNodes <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeReservedNodes(__scope: Construct, __resources: string[], __input: RedshiftDescribeReservedNodesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeReservedNodesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes.property.marker"></a>

- *Type:* `string`

---

##### `reservedNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeReservedNodes.property.reservedNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNode`](#aws-cdk-sdk.redshift.RedshiftReservedNode)[]

---


### RedshiftResponsesDescribeResize <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeResize(__scope: Construct, __resources: string[], __input: RedshiftDescribeResizeMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeResizeMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeResizeMessage)

---



#### Properties <a name="Properties"></a>

##### `avgResizeRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.avgResizeRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferProgressPercent`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.dataTransferProgressPercent"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `importTablesCompleted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.importTablesCompleted"></a>

- *Type:* `string`[]

---

##### `importTablesInProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.importTablesInProgress"></a>

- *Type:* `string`[]

---

##### `importTablesNotStarted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.importTablesNotStarted"></a>

- *Type:* `string`[]

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.message"></a>

- *Type:* `string`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.resizeType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.status"></a>

- *Type:* `string`

---

##### `targetClusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.targetClusterType"></a>

- *Type:* `string`

---

##### `targetEncryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.targetEncryptionType"></a>

- *Type:* `string`

---

##### `targetNodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.targetNodeType"></a>

- *Type:* `string`

---

##### `targetNumberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.targetNumberOfNodes"></a>

- *Type:* `number`

---

##### `totalResizeDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeResize.property.totalResizeDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesDescribeScheduledActions <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeScheduledActions(__scope: Construct, __resources: string[], __input: RedshiftDescribeScheduledActionsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeScheduledActionsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions.property.marker"></a>

- *Type:* `string`

---

##### `scheduledActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeScheduledActions.property.scheduledActions"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftScheduledAction`](#aws-cdk-sdk.redshift.RedshiftScheduledAction)[]

---


### RedshiftResponsesDescribeSnapshotCopyGrants <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeSnapshotCopyGrants(__scope: Construct, __resources: string[], __input: RedshiftDescribeSnapshotCopyGrantsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeSnapshotCopyGrantsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants.property.marker"></a>

- *Type:* `string`

---

##### `snapshotCopyGrants`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotCopyGrants.property.snapshotCopyGrants"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant`](#aws-cdk-sdk.redshift.RedshiftSnapshotCopyGrant)[]

---


### RedshiftResponsesDescribeSnapshotSchedules <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeSnapshotSchedules(__scope: Construct, __resources: string[], __input: RedshiftDescribeSnapshotSchedulesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeSnapshotSchedulesMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules.property.marker"></a>

- *Type:* `string`

---

##### `snapshotSchedules`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeSnapshotSchedules.property.snapshotSchedules"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSnapshotSchedule`](#aws-cdk-sdk.redshift.RedshiftSnapshotSchedule)[]

---


### RedshiftResponsesDescribeStorage <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeStorage"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeStorage.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeStorage(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeStorage.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeStorage.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `totalProvisionedStorageInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeStorage.property.totalProvisionedStorageInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesDescribeTableRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeTableRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftDescribeTableRestoreStatusMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeTableRestoreStatusMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus.property.marker"></a>

- *Type:* `string`

---

##### `tableRestoreStatusDetails`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTableRestoreStatus.property.tableRestoreStatusDetails"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTableRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftTableRestoreStatus)[]

---


### RedshiftResponsesDescribeTags <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeTags(__scope: Construct, __resources: string[], __input: RedshiftDescribeTagsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeTagsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags.property.marker"></a>

- *Type:* `string`

---

##### `taggedResources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeTags.property.taggedResources"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTaggedResource`](#aws-cdk-sdk.redshift.RedshiftTaggedResource)[]

---


### RedshiftResponsesDescribeUsageLimits <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDescribeUsageLimits(__scope: Construct, __resources: string[], __input: RedshiftDescribeUsageLimitsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage`](#aws-cdk-sdk.redshift.RedshiftDescribeUsageLimitsMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits.property.marker"></a>

- *Type:* `string`

---

##### `usageLimits`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDescribeUsageLimits.property.usageLimits"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftUsageLimit`](#aws-cdk-sdk.redshift.RedshiftUsageLimit)[]

---


### RedshiftResponsesDisableLogging <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableLogging(__scope: Construct, __resources: string[], __input: RedshiftDisableLoggingMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableLoggingMessage`](#aws-cdk-sdk.redshift.RedshiftDisableLoggingMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.property.bucketName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastFailureTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.property.lastFailureTime"></a>

- *Type:* `string`

---

##### `lastSuccessfulDeliveryTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.property.lastSuccessfulDeliveryTime"></a>

- *Type:* `string`

---

##### `loggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.property.loggingEnabled"></a>

- *Type:* `boolean`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableLogging.property.s3KeyPrefix"></a>

- *Type:* `string`

---


### RedshiftResponsesDisableSnapshotCopy <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopy"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopy.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopy(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopy.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster)

---


### RedshiftResponsesDisableSnapshotCopyCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyCluster(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesDisableSnapshotCopyClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesDisableSnapshotCopyClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesDisableSnapshotCopyClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftDisableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftDisableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesDisableSnapshotCopyClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesEnableLogging <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableLogging(__scope: Construct, __resources: string[], __input: RedshiftEnableLoggingMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage`](#aws-cdk-sdk.redshift.RedshiftEnableLoggingMessage)

---



#### Properties <a name="Properties"></a>

##### `bucketName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.property.bucketName"></a>

- *Type:* `string`

---

##### `lastFailureMessage`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.property.lastFailureMessage"></a>

- *Type:* `string`

---

##### `lastFailureTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.property.lastFailureTime"></a>

- *Type:* `string`

---

##### `lastSuccessfulDeliveryTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.property.lastSuccessfulDeliveryTime"></a>

- *Type:* `string`

---

##### `loggingEnabled`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.property.loggingEnabled"></a>

- *Type:* `boolean`

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableLogging.property.s3KeyPrefix"></a>

- *Type:* `string`

---


### RedshiftResponsesEnableSnapshotCopy <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopy"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopy.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopy(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopy.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopy.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopy.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopy.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster)

---


### RedshiftResponsesEnableSnapshotCopyCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyCluster(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesEnableSnapshotCopyClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesEnableSnapshotCopyClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesEnableSnapshotCopyClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftEnableSnapshotCopyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage`](#aws-cdk-sdk.redshift.RedshiftEnableSnapshotCopyMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesEnableSnapshotCopyClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesFetchClusterCredentials <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesFetchClusterCredentials(__scope: Construct, __resources: string[], __input: RedshiftGetClusterCredentialsMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage`](#aws-cdk-sdk.redshift.RedshiftGetClusterCredentialsMessage)

---



#### Properties <a name="Properties"></a>

##### `dbPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.property.dbPassword"></a>

- *Type:* `string`

---

##### `dbUser`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.property.dbUser"></a>

- *Type:* `string`

---

##### `expiration`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchClusterCredentials.property.expiration"></a>

- *Type:* `string`

---


### RedshiftResponsesFetchReservedNodeExchangeOfferings <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings(__scope: Construct, __resources: string[], __input: RedshiftGetReservedNodeExchangeOfferingsInputMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage`](#aws-cdk-sdk.redshift.RedshiftGetReservedNodeExchangeOfferingsInputMessage)

---



#### Properties <a name="Properties"></a>

##### `marker`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings.property.marker"></a>

- *Type:* `string`

---

##### `reservedNodeOfferings`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesFetchReservedNodeExchangeOfferings.property.reservedNodeOfferings"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftReservedNodeOffering`](#aws-cdk-sdk.redshift.RedshiftReservedNodeOffering)[]

---


### RedshiftResponsesModifyCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster)

---


### RedshiftResponsesModifyClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesModifyClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterDbRevision <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevision"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevision.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevision(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevision.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster)

---


### RedshiftResponsesModifyClusterDbRevisionCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterDbRevisionClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterDbRevisionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterDbRevisionMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterDbRevisionClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterIamRoles <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRoles"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRoles.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRoles(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRoles.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRoles.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRoles.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRoles.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster)

---


### RedshiftResponsesModifyClusterIamRolesCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterIamRolesClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterIamRolesClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesModifyClusterIamRolesClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterIamRolesMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterIamRolesMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterIamRolesClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterMaintenance <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenance"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenance.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenance(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenance.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenance.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenance.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenance.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster)

---


### RedshiftResponsesModifyClusterMaintenanceCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterMaintenanceClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterMaintenanceMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterMaintenanceMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterMaintenanceClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterParameterGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterParameterGroup(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `parameterGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterParameterGroup.property.parameterGroupStatus"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterSnapshot(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshot.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot)

---


### RedshiftResponsesModifyClusterSnapshotSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterSnapshotSnapshot(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSnapshotSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyClusterSubnetGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterSubnetGroup(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSubnetGroup`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroup.property.clusterSubnetGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup)

---


### RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup(__scope: Construct, __resources: string[], __input: RedshiftModifyClusterSubnetGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage`](#aws-cdk-sdk.redshift.RedshiftModifyClusterSubnetGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.property.description"></a>

- *Type:* `string`

---

##### `subnetGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.property.subnetGroupStatus"></a>

- *Type:* `string`

---

##### `subnets`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.property.subnets"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftSubnet`](#aws-cdk-sdk.redshift.RedshiftSubnet)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyClusterSubnetGroupClusterSubnetGroup.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyEventSubscription <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscription.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyEventSubscription(__scope: Construct, __resources: string[], __input: RedshiftModifyEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `eventSubscription`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscription.property.eventSubscription"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription)

---


### RedshiftResponsesModifyEventSubscriptionEventSubscription <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription(__scope: Construct, __resources: string[], __input: RedshiftModifyEventSubscriptionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyEventSubscriptionMessage)

---



#### Properties <a name="Properties"></a>

##### `customerAwsId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.customerAwsId"></a>

- *Type:* `string`

---

##### `custSubscriptionId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.custSubscriptionId"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.enabled"></a>

- *Type:* `boolean`

---

##### `eventCategoriesList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.eventCategoriesList"></a>

- *Type:* `string`[]

---

##### `severity`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.severity"></a>

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.snsTopicArn"></a>

- *Type:* `string`

---

##### `sourceIdsList`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.sourceIdsList"></a>

- *Type:* `string`[]

---

##### `sourceType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.sourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.status"></a>

- *Type:* `string`

---

##### `subscriptionCreationTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.subscriptionCreationTime"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyEventSubscriptionEventSubscription.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesModifyScheduledAction <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyScheduledAction(__scope: Construct, __resources: string[], __input: RedshiftModifyScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.endTime"></a>

- *Type:* `string`

---

##### `iamRole`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.iamRole"></a>

- *Type:* `string`

---

##### `nextInvocations`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.nextInvocations"></a>

- *Type:* `string`[]

---

##### `schedule`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.schedule"></a>

- *Type:* `string`

---

##### `scheduledActionDescription`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.scheduledActionDescription"></a>

- *Type:* `string`

---

##### `scheduledActionName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.scheduledActionName"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.state"></a>

- *Type:* `string`

---

##### `targetAction`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledAction.property.targetAction"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction)

---


### RedshiftResponsesModifyScheduledActionTargetAction <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyScheduledActionTargetAction(__scope: Construct, __resources: string[], __input: RedshiftModifyScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `pauseCluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.property.pauseCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster)

---

##### `resizeCluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.property.resizeCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster)

---

##### `resumeCluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetAction.property.resumeCluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster)

---


### RedshiftResponsesModifyScheduledActionTargetActionPauseCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---


### RedshiftResponsesModifyScheduledActionTargetActionResizeCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `classic`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.property.classic"></a>

- *Type:* `boolean`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.property.clusterType"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

- *Type:* `number`

---


### RedshiftResponsesModifyScheduledActionTargetActionResumeCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster(__scope: Construct, __resources: string[], __input: RedshiftModifyScheduledActionMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage`](#aws-cdk-sdk.redshift.RedshiftModifyScheduledActionMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriod <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriod.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster)

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotCopyRetentionPeriodMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotCopyRetentionPeriodMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotCopyRetentionPeriodClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesModifySnapshotSchedule <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifySnapshotSchedule(__scope: Construct, __resources: string[], __input: RedshiftModifySnapshotScheduleMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage`](#aws-cdk-sdk.redshift.RedshiftModifySnapshotScheduleMessage)

---



#### Properties <a name="Properties"></a>

##### `associatedClusterCount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.associatedClusterCount"></a>

- *Type:* `number`

---

##### `associatedClusters`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.associatedClusters"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule`](#aws-cdk-sdk.redshift.RedshiftClusterAssociatedToSchedule)[]

---

##### `nextInvocations`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.nextInvocations"></a>

- *Type:* `string`[]

---

##### `scheduleDefinitions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.scheduleDefinitions"></a>

- *Type:* `string`[]

---

##### `scheduleDescription`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.scheduleDescription"></a>

- *Type:* `string`

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.scheduleIdentifier"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifySnapshotSchedule.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesModifyUsageLimit <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesModifyUsageLimit(__scope: Construct, __resources: string[], __input: RedshiftModifyUsageLimitMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage`](#aws-cdk-sdk.redshift.RedshiftModifyUsageLimitMessage)

---



#### Properties <a name="Properties"></a>

##### `amount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.amount"></a>

- *Type:* `number`

---

##### `breachAction`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.breachAction"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `featureType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.featureType"></a>

- *Type:* `string`

---

##### `limitType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.limitType"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.period"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `usageLimitId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesModifyUsageLimit.property.usageLimitId"></a>

- *Type:* `string`

---


### RedshiftResponsesPauseCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseCluster(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster)

---


### RedshiftResponsesPauseClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesPauseClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesPauseClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesPauseClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesPauseClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesPauseClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesPauseClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesPauseClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPauseClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftPauseClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPauseClusterMessage`](#aws-cdk-sdk.redshift.RedshiftPauseClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPauseClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesPurchaseReservedNodeOffering <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOffering"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOffering.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPurchaseReservedNodeOffering(__scope: Construct, __resources: string[], __input: RedshiftPurchaseReservedNodeOfferingMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOffering.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOffering.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOffering.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage`](#aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage)

---



#### Properties <a name="Properties"></a>

##### `reservedNode`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOffering.property.reservedNode"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode`](#aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode)

---


### RedshiftResponsesPurchaseReservedNodeOfferingReservedNode <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode(__scope: Construct, __resources: string[], __input: RedshiftPurchaseReservedNodeOfferingMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage`](#aws-cdk-sdk.redshift.RedshiftPurchaseReservedNodeOfferingMessage)

---



#### Properties <a name="Properties"></a>

##### `currencyCode`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.currencyCode"></a>

- *Type:* `string`

---

##### `duration`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.duration"></a>

- *Type:* `number`

---

##### `fixedPrice`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.fixedPrice"></a>

- *Type:* `number`

---

##### `nodeCount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.nodeCount"></a>

- *Type:* `number`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.nodeType"></a>

- *Type:* `string`

---

##### `offeringType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.offeringType"></a>

- *Type:* `string`

---

##### `recurringCharges`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.recurringCharges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRecurringCharge`](#aws-cdk-sdk.redshift.RedshiftRecurringCharge)[]

---

##### `reservedNodeId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.reservedNodeId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.reservedNodeOfferingId"></a>

- *Type:* `string`

---

##### `reservedNodeOfferingType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.reservedNodeOfferingType"></a>

- *Type:* `string`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.startTime"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.state"></a>

- *Type:* `string`

---

##### `usagePrice`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesPurchaseReservedNodeOfferingReservedNode.property.usagePrice"></a>

- *Type:* `number`

---


### RedshiftResponsesRebootCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootCluster(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster)

---


### RedshiftResponsesRebootClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesRebootClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesRebootClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRebootClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesRebootClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRebootClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesRebootClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesRebootClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRebootClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftRebootClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRebootClusterMessage`](#aws-cdk-sdk.redshift.RedshiftRebootClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRebootClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesResetClusterParameterGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResetClusterParameterGroup(__scope: Construct, __resources: string[], __input: RedshiftResetClusterParameterGroupMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage`](#aws-cdk-sdk.redshift.RedshiftResetClusterParameterGroupMessage)

---



#### Properties <a name="Properties"></a>

##### `parameterGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup.property.parameterGroupName"></a>

- *Type:* `string`

---

##### `parameterGroupStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResetClusterParameterGroup.property.parameterGroupStatus"></a>

- *Type:* `string`

---


### RedshiftResponsesResizeCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeCluster(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster)

---


### RedshiftResponsesResizeClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesResizeClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesResizeClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesResizeClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesResizeClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesResizeClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesResizeClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesResizeClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResizeClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftResizeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResizeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResizeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResizeClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRestoreFromClusterSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshot(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshot.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster)

---


### RedshiftResponsesRestoreFromClusterSnapshotCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftRestoreFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreFromClusterSnapshotClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRestoreTableFromClusterSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreTableFromClusterSnapshot(__scope: Construct, __resources: string[], __input: RedshiftRestoreTableFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `tableRestoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshot.property.tableRestoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus)

---


### RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftRestoreTableFromClusterSnapshotMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage`](#aws-cdk-sdk.redshift.RedshiftRestoreTableFromClusterSnapshotMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.message"></a>

- *Type:* `string`

---

##### `newTableName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.newTableName"></a>

- *Type:* `string`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `requestTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.requestTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `sourceDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.sourceDatabaseName"></a>

- *Type:* `string`

---

##### `sourceSchemaName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.sourceSchemaName"></a>

- *Type:* `string`

---

##### `sourceTableName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.sourceTableName"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.status"></a>

- *Type:* `string`

---

##### `tableRestoreRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.tableRestoreRequestId"></a>

- *Type:* `string`

---

##### `targetDatabaseName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.targetDatabaseName"></a>

- *Type:* `string`

---

##### `targetSchemaName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.targetSchemaName"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRestoreTableFromClusterSnapshotTableRestoreStatus.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesResumeCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeCluster(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeCluster.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster)

---


### RedshiftResponsesResumeClusterCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterCluster(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesResumeClusterClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesResumeClusterClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesResumeClusterClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesResumeClusterClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesResumeClusterClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesResumeClusterClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesResumeClusterClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesResumeClusterClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftResumeClusterMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResumeClusterMessage`](#aws-cdk-sdk.redshift.RedshiftResumeClusterMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesResumeClusterClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRevokeClusterSecurityGroupIngress <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress(__scope: Construct, __resources: string[], __input: RedshiftRevokeClusterSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage`](#aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroup`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngress.property.clusterSecurityGroup"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup`](#aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup)

---


### RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup(__scope: Construct, __resources: string[], __input: RedshiftRevokeClusterSecurityGroupIngressMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage`](#aws-cdk-sdk.redshift.RedshiftRevokeClusterSecurityGroupIngressMessage)

---



#### Properties <a name="Properties"></a>

##### `clusterSecurityGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.property.clusterSecurityGroupName"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.property.description"></a>

- *Type:* `string`

---

##### `ec2SecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.property.ec2SecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup`](#aws-cdk-sdk.redshift.RedshiftEc2SecurityGroup)[]

---

##### `ipRanges`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.property.ipRanges"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftIpRange`](#aws-cdk-sdk.redshift.RedshiftIpRange)[]

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeClusterSecurityGroupIngressClusterSecurityGroup.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---


### RedshiftResponsesRevokeSnapshotAccess <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccess"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccess.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRevokeSnapshotAccess(__scope: Construct, __resources: string[], __input: RedshiftRevokeSnapshotAccessMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccess.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccess.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccess.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage`](#aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage)

---



#### Properties <a name="Properties"></a>

##### `snapshot`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccess.property.snapshot"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot`](#aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot)

---


### RedshiftResponsesRevokeSnapshotAccessSnapshot <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot(__scope: Construct, __resources: string[], __input: RedshiftRevokeSnapshotAccessMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage`](#aws-cdk-sdk.redshift.RedshiftRevokeSnapshotAccessMessage)

---



#### Properties <a name="Properties"></a>

##### `accountsWithRestoreAccess`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.accountsWithRestoreAccess"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess`](#aws-cdk-sdk.redshift.RedshiftAccountWithRestoreAccess)[]

---

##### `actualIncrementalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.actualIncrementalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.availabilityZone"></a>

- *Type:* `string`

---

##### `backupProgressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.backupProgressInMegaBytes"></a>

- *Type:* `number`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.clusterVersion"></a>

- *Type:* `string`

---

##### `currentBackupRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.currentBackupRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.dbName"></a>

- *Type:* `string`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.encrypted"></a>

- *Type:* `boolean`

---

##### `encryptedWithHsm`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.encryptedWithHsm"></a>

- *Type:* `boolean`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `estimatedSecondsToCompletion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.estimatedSecondsToCompletion"></a>

- *Type:* `number`

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRemainingDays`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.manualSnapshotRemainingDays"></a>

- *Type:* `number`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.masterUsername"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `ownerAccount`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.ownerAccount"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.port"></a>

- *Type:* `number`

---

##### `restorableNodeTypes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.restorableNodeTypes"></a>

- *Type:* `string`[]

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.snapshotCreateTime"></a>

- *Type:* `string`

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.snapshotIdentifier"></a>

- *Type:* `string`

---

##### `snapshotRetentionStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.snapshotRetentionStartTime"></a>

- *Type:* `string`

---

##### `snapshotType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.snapshotType"></a>

- *Type:* `string`

---

##### `sourceRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.sourceRegion"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.status"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `totalBackupSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.totalBackupSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRevokeSnapshotAccessSnapshot.property.vpcId"></a>

- *Type:* `string`

---


### RedshiftResponsesRotateEncryptionKey <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKey"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKey.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKey(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKey.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKey.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKey.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `cluster`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKey.property.cluster"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster)

---


### RedshiftResponsesRotateEncryptionKeyCluster <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyCluster(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `allowVersionUpgrade`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.allowVersionUpgrade"></a>

- *Type:* `boolean`

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `availabilityZone`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.availabilityZone"></a>

- *Type:* `string`

---

##### `clusterAvailabilityStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterAvailabilityStatus"></a>

- *Type:* `string`

---

##### `clusterCreateTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterCreateTime"></a>

- *Type:* `string`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterNamespaceArn"></a>

- *Type:* `string`

---

##### `clusterNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterNodes"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterNode`](#aws-cdk-sdk.redshift.RedshiftClusterNode)[]

---

##### `clusterParameterGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterParameterGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus`](#aws-cdk-sdk.redshift.RedshiftClusterParameterGroupStatus)[]

---

##### `clusterPublicKey`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterPublicKey"></a>

- *Type:* `string`

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterRevisionNumber"></a>

- *Type:* `string`

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftClusterSecurityGroupMembership)[]

---

##### `clusterSnapshotCopyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterSnapshotCopyStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus)

---

##### `clusterStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterStatus"></a>

- *Type:* `string`

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterSubnetGroupName"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.clusterVersion"></a>

- *Type:* `string`

---

##### `dataTransferProgress`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.dataTransferProgress"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress)

---

##### `dbName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.dbName"></a>

- *Type:* `string`

---

##### `deferredMaintenanceWindows`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.deferredMaintenanceWindows"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow`](#aws-cdk-sdk.redshift.RedshiftDeferredMaintenanceWindow)[]

---

##### `elasticIpStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.elasticIpStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus)

---

##### `elasticResizeNumberOfNodeOptions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.elasticResizeNumberOfNodeOptions"></a>

- *Type:* `string`

---

##### `encrypted`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.encrypted"></a>

- *Type:* `boolean`

---

##### `endpoint`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.endpoint"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint)

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `expectedNextSnapshotScheduleTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.expectedNextSnapshotScheduleTime"></a>

- *Type:* `string`

---

##### `expectedNextSnapshotScheduleTimeStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.expectedNextSnapshotScheduleTimeStatus"></a>

- *Type:* `string`

---

##### `hsmStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.hsmStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus)

---

##### `iamRoles`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.iamRoles"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftClusterIamRole`](#aws-cdk-sdk.redshift.RedshiftClusterIamRole)[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.kmsKeyId"></a>

- *Type:* `string`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `masterUsername`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.masterUsername"></a>

- *Type:* `string`

---

##### `modifyStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.modifyStatus"></a>

- *Type:* `string`

---

##### `nextMaintenanceWindowStartTime`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.nextMaintenanceWindowStartTime"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `pendingActions`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.pendingActions"></a>

- *Type:* `string`[]

---

##### `pendingModifiedValues`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.pendingModifiedValues"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues)

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.preferredMaintenanceWindow"></a>

- *Type:* `string`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.publiclyAccessible"></a>

- *Type:* `boolean`

---

##### `resizeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.resizeInfo"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo)

---

##### `restoreStatus`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.restoreStatus"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus`](#aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus)

---

##### `snapshotScheduleIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.snapshotScheduleIdentifier"></a>

- *Type:* `string`

---

##### `snapshotScheduleState`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.snapshotScheduleState"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.tags"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftTag`](#aws-cdk-sdk.redshift.RedshiftTag)[]

---

##### `vpcId`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.vpcId"></a>

- *Type:* `string`

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyCluster.property.vpcSecurityGroups"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership`](#aws-cdk-sdk.redshift.RedshiftVpcSecurityGroupMembership)[]

---


### RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `destinationRegion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.property.destinationRegion"></a>

- *Type:* `string`

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.property.manualSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `retentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.property.retentionPeriod"></a>

- *Type:* `number`

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterClusterSnapshotCopyStatus.property.snapshotCopyGrantName"></a>

- *Type:* `string`

---


### RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.property.currentRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `dataTransferredInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.property.dataTransferredInMegaBytes"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.property.status"></a>

- *Type:* `string`

---

##### `totalDataInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterDataTransferProgress.property.totalDataInMegaBytes"></a>

- *Type:* `number`

---


### RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `elasticIp`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus.property.elasticIp"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterElasticIpStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRotateEncryptionKeyClusterEndpoint <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `address`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint.property.address"></a>

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterEndpoint.property.port"></a>

- *Type:* `number`

---


### RedshiftResponsesRotateEncryptionKeyClusterHsmStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.property.hsmClientCertificateIdentifier"></a>

- *Type:* `string`

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.property.hsmConfigurationIdentifier"></a>

- *Type:* `string`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterHsmStatus.property.status"></a>

- *Type:* `string`

---


### RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.automatedSnapshotRetentionPeriod"></a>

- *Type:* `number`

---

##### `clusterIdentifier`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.clusterIdentifier"></a>

- *Type:* `string`

---

##### `clusterType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.clusterType"></a>

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.clusterVersion"></a>

- *Type:* `string`

---

##### `encryptionType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.encryptionType"></a>

- *Type:* `string`

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.enhancedVpcRouting"></a>

- *Type:* `boolean`

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.maintenanceTrackName"></a>

- *Type:* `string`

---

##### `masterUserPassword`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.masterUserPassword"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.nodeType"></a>

- *Type:* `string`

---

##### `numberOfNodes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.numberOfNodes"></a>

- *Type:* `number`

---

##### `publiclyAccessible`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterPendingModifiedValues.property.publiclyAccessible"></a>

- *Type:* `boolean`

---


### RedshiftResponsesRotateEncryptionKeyClusterResizeInfo <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `allowCancelResize`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo.property.allowCancelResize"></a>

- *Type:* `boolean`

---

##### `resizeType`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterResizeInfo.property.resizeType"></a>

- *Type:* `string`

---


### RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus"></a>

#### Initializer <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.Initializer"></a>

```typescript
import { redshift } from 'aws-cdk-sdk'

new redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus(__scope: Construct, __resources: string[], __input: RedshiftRotateEncryptionKeyMessage)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage`](#aws-cdk-sdk.redshift.RedshiftRotateEncryptionKeyMessage)

---



#### Properties <a name="Properties"></a>

##### `currentRestoreRateInMegaBytesPerSecond`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.property.currentRestoreRateInMegaBytesPerSecond"></a>

- *Type:* `number`

---

##### `elapsedTimeInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.property.elapsedTimeInSeconds"></a>

- *Type:* `number`

---

##### `estimatedTimeToCompletionInSeconds`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.property.estimatedTimeToCompletionInSeconds"></a>

- *Type:* `number`

---

##### `progressInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.property.progressInMegaBytes"></a>

- *Type:* `number`

---

##### `snapshotSizeInMegaBytes`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.property.snapshotSizeInMegaBytes"></a>

- *Type:* `number`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.redshift.RedshiftResponsesRotateEncryptionKeyClusterRestoreStatus.property.status"></a>

- *Type:* `string`

---



