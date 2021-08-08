# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### KafkaClient <a name="aws-cdk-sdk.kafka.KafkaClient"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaClient.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `batchAssociateScramSecret` <a name="aws-cdk-sdk.kafka.KafkaClient.batchAssociateScramSecret"></a>

```typescript
public batchAssociateScramSecret(input: KafkaBatchAssociateScramSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest`](#aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest)

---

##### `batchDisassociateScramSecret` <a name="aws-cdk-sdk.kafka.KafkaClient.batchDisassociateScramSecret"></a>

```typescript
public batchDisassociateScramSecret(input: KafkaBatchDisassociateScramSecretRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest`](#aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest)

---

##### `createCluster` <a name="aws-cdk-sdk.kafka.KafkaClient.createCluster"></a>

```typescript
public createCluster(input: KafkaCreateClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCreateClusterRequest`](#aws-cdk-sdk.kafka.KafkaCreateClusterRequest)

---

##### `createConfiguration` <a name="aws-cdk-sdk.kafka.KafkaClient.createConfiguration"></a>

```typescript
public createConfiguration(input: KafkaCreateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest)

---

##### `deleteCluster` <a name="aws-cdk-sdk.kafka.KafkaClient.deleteCluster"></a>

```typescript
public deleteCluster(input: KafkaDeleteClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDeleteClusterRequest`](#aws-cdk-sdk.kafka.KafkaDeleteClusterRequest)

---

##### `deleteConfiguration` <a name="aws-cdk-sdk.kafka.KafkaClient.deleteConfiguration"></a>

```typescript
public deleteConfiguration(input: KafkaDeleteConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDeleteConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaDeleteConfigurationRequest)

---

##### `describeCluster` <a name="aws-cdk-sdk.kafka.KafkaClient.describeCluster"></a>

```typescript
public describeCluster(input: KafkaDescribeClusterRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---

##### `describeClusterOperation` <a name="aws-cdk-sdk.kafka.KafkaClient.describeClusterOperation"></a>

```typescript
public describeClusterOperation(input: KafkaDescribeClusterOperationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---

##### `describeConfiguration` <a name="aws-cdk-sdk.kafka.KafkaClient.describeConfiguration"></a>

```typescript
public describeConfiguration(input: KafkaDescribeConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest)

---

##### `describeConfigurationRevision` <a name="aws-cdk-sdk.kafka.KafkaClient.describeConfigurationRevision"></a>

```typescript
public describeConfigurationRevision(input: KafkaDescribeConfigurationRevisionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest`](#aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest)

---

##### `fetchBootstrapBrokers` <a name="aws-cdk-sdk.kafka.KafkaClient.fetchBootstrapBrokers"></a>

```typescript
public fetchBootstrapBrokers(input: KafkaGetBootstrapBrokersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersRequest`](#aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersRequest)

---

##### `fetchCompatibleKafkaVersions` <a name="aws-cdk-sdk.kafka.KafkaClient.fetchCompatibleKafkaVersions"></a>

```typescript
public fetchCompatibleKafkaVersions(input: KafkaGetCompatibleKafkaVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsRequest`](#aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsRequest)

---

##### `listClusterOperations` <a name="aws-cdk-sdk.kafka.KafkaClient.listClusterOperations"></a>

```typescript
public listClusterOperations(input: KafkaListClusterOperationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest`](#aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest)

---

##### `listClusters` <a name="aws-cdk-sdk.kafka.KafkaClient.listClusters"></a>

```typescript
public listClusters(input: KafkaListClustersRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListClustersRequest`](#aws-cdk-sdk.kafka.KafkaListClustersRequest)

---

##### `listConfigurationRevisions` <a name="aws-cdk-sdk.kafka.KafkaClient.listConfigurationRevisions"></a>

```typescript
public listConfigurationRevisions(input: KafkaListConfigurationRevisionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest`](#aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest)

---

##### `listConfigurations` <a name="aws-cdk-sdk.kafka.KafkaClient.listConfigurations"></a>

```typescript
public listConfigurations(input: KafkaListConfigurationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListConfigurationsRequest`](#aws-cdk-sdk.kafka.KafkaListConfigurationsRequest)

---

##### `listKafkaVersions` <a name="aws-cdk-sdk.kafka.KafkaClient.listKafkaVersions"></a>

```typescript
public listKafkaVersions(input: KafkaListKafkaVersionsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest`](#aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest)

---

##### `listNodes` <a name="aws-cdk-sdk.kafka.KafkaClient.listNodes"></a>

```typescript
public listNodes(input: KafkaListNodesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListNodesRequest`](#aws-cdk-sdk.kafka.KafkaListNodesRequest)

---

##### `listScramSecrets` <a name="aws-cdk-sdk.kafka.KafkaClient.listScramSecrets"></a>

```typescript
public listScramSecrets(input: KafkaListScramSecretsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListScramSecretsRequest`](#aws-cdk-sdk.kafka.KafkaListScramSecretsRequest)

---

##### `listTagsForResource` <a name="aws-cdk-sdk.kafka.KafkaClient.listTagsForResource"></a>

```typescript
public listTagsForResource(input: KafkaListTagsForResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListTagsForResourceRequest`](#aws-cdk-sdk.kafka.KafkaListTagsForResourceRequest)

---

##### `rebootBroker` <a name="aws-cdk-sdk.kafka.KafkaClient.rebootBroker"></a>

```typescript
public rebootBroker(input: KafkaRebootBrokerRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaRebootBrokerRequest`](#aws-cdk-sdk.kafka.KafkaRebootBrokerRequest)

---

##### `tagResource` <a name="aws-cdk-sdk.kafka.KafkaClient.tagResource"></a>

```typescript
public tagResource(input: KafkaTagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaTagResourceRequest`](#aws-cdk-sdk.kafka.KafkaTagResourceRequest)

---

##### `untagResource` <a name="aws-cdk-sdk.kafka.KafkaClient.untagResource"></a>

```typescript
public untagResource(input: KafkaUntagResourceRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUntagResourceRequest`](#aws-cdk-sdk.kafka.KafkaUntagResourceRequest)

---

##### `updateBrokerCount` <a name="aws-cdk-sdk.kafka.KafkaClient.updateBrokerCount"></a>

```typescript
public updateBrokerCount(input: KafkaUpdateBrokerCountRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest`](#aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest)

---

##### `updateBrokerStorage` <a name="aws-cdk-sdk.kafka.KafkaClient.updateBrokerStorage"></a>

```typescript
public updateBrokerStorage(input: KafkaUpdateBrokerStorageRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest`](#aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest)

---

##### `updateClusterConfiguration` <a name="aws-cdk-sdk.kafka.KafkaClient.updateClusterConfiguration"></a>

```typescript
public updateClusterConfiguration(input: KafkaUpdateClusterConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest)

---

##### `updateClusterKafkaVersion` <a name="aws-cdk-sdk.kafka.KafkaClient.updateClusterKafkaVersion"></a>

```typescript
public updateClusterKafkaVersion(input: KafkaUpdateClusterKafkaVersionRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest`](#aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest)

---

##### `updateConfiguration` <a name="aws-cdk-sdk.kafka.KafkaClient.updateConfiguration"></a>

```typescript
public updateConfiguration(input: KafkaUpdateConfigurationRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest)

---

##### `updateMonitoring` <a name="aws-cdk-sdk.kafka.KafkaClient.updateMonitoring"></a>

```typescript
public updateMonitoring(input: KafkaUpdateMonitoringRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest`](#aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest)

---




## Structs <a name="Structs"></a>

### KafkaBatchAssociateScramSecretRequest <a name="aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBatchAssociateScramSecretRequest: kafka.KafkaBatchAssociateScramSecretRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `secretArnList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest.property.secretArnList"></a>

- *Type:* `string`[]

---

### KafkaBatchAssociateScramSecretResponse <a name="aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBatchAssociateScramSecretResponse: kafka.KafkaBatchAssociateScramSecretResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `unprocessedScramSecrets`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretResponse.property.unprocessedScramSecrets"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret`](#aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret)[]

---

### KafkaBatchDisassociateScramSecretRequest <a name="aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBatchDisassociateScramSecretRequest: kafka.KafkaBatchDisassociateScramSecretRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `secretArnList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest.property.secretArnList"></a>

- *Type:* `string`[]

---

### KafkaBatchDisassociateScramSecretResponse <a name="aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBatchDisassociateScramSecretResponse: kafka.KafkaBatchDisassociateScramSecretResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `unprocessedScramSecrets`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretResponse.property.unprocessedScramSecrets"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret`](#aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret)[]

---

### KafkaBrokerEbsVolumeInfo <a name="aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBrokerEbsVolumeInfo: kafka.KafkaBrokerEbsVolumeInfo = { ... }
```

##### `kafkaBrokerNodeId`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo.property.kafkaBrokerNodeId"></a>

- *Type:* `string`

---

##### `volumeSizeGb`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo.property.volumeSizeGb"></a>

- *Type:* `number`

---

### KafkaBrokerLogs <a name="aws-cdk-sdk.kafka.KafkaBrokerLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBrokerLogs: kafka.KafkaBrokerLogs = { ... }
```

##### `cloudWatchLogs`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerLogs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCloudWatchLogs`](#aws-cdk-sdk.kafka.KafkaCloudWatchLogs)

---

##### `firehose`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerLogs.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaFirehose`](#aws-cdk-sdk.kafka.KafkaFirehose)

---

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerLogs.property.s3"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaS3`](#aws-cdk-sdk.kafka.KafkaS3)

---

### KafkaBrokerNodeGroupInfo <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBrokerNodeGroupInfo: kafka.KafkaBrokerNodeGroupInfo = { ... }
```

##### `clientSubnets`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo.property.clientSubnets"></a>

- *Type:* `string`[]

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo.property.instanceType"></a>

- *Type:* `string`

---

##### `brokerAzDistribution`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo.property.brokerAzDistribution"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `storageInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo.property.storageInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaStorageInfo`](#aws-cdk-sdk.kafka.KafkaStorageInfo)

---

### KafkaBrokerNodeInfo <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBrokerNodeInfo: kafka.KafkaBrokerNodeInfo = { ... }
```

##### `attachedEniId`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo.property.attachedEniId"></a>

- *Type:* `string`

---

##### `brokerId`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo.property.brokerId"></a>

- *Type:* `number`

---

##### `clientSubnet`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo.property.clientSubnet"></a>

- *Type:* `string`

---

##### `clientVpcIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo.property.clientVpcIpAddress"></a>

- *Type:* `string`

---

##### `currentBrokerSoftwareInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo.property.currentBrokerSoftwareInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo`](#aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo)

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerNodeInfo.property.endpoints"></a>

- *Type:* `string`[]

---

### KafkaBrokerSoftwareInfo <a name="aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaBrokerSoftwareInfo: kafka.KafkaBrokerSoftwareInfo = { ... }
```

##### `configurationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo.property.configurationArn"></a>

- *Type:* `string`

---

##### `configurationRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo.property.configurationRevision"></a>

- *Type:* `number`

---

##### `kafkaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo.property.kafkaVersion"></a>

- *Type:* `string`

---

### KafkaClientAuthentication <a name="aws-cdk-sdk.kafka.KafkaClientAuthentication"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaClientAuthentication: kafka.KafkaClientAuthentication = { ... }
```

##### `sasl`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClientAuthentication.property.sasl"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaSasl`](#aws-cdk-sdk.kafka.KafkaSasl)

---

##### `tls`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClientAuthentication.property.tls"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaTls`](#aws-cdk-sdk.kafka.KafkaTls)

---

### KafkaCloudWatchLogs <a name="aws-cdk-sdk.kafka.KafkaCloudWatchLogs"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaCloudWatchLogs: kafka.KafkaCloudWatchLogs = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCloudWatchLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logGroup`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCloudWatchLogs.property.logGroup"></a>

- *Type:* `string`

---

### KafkaClusterInfo <a name="aws-cdk-sdk.kafka.KafkaClusterInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaClusterInfo: kafka.KafkaClusterInfo = { ... }
```

##### `activeOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.activeOperationArn"></a>

- *Type:* `string`

---

##### `brokerNodeGroupInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.brokerNodeGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo`](#aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo)

---

##### `clientAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.clientAuthentication"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClientAuthentication`](#aws-cdk-sdk.kafka.KafkaClientAuthentication)

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.clusterName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `currentBrokerSoftwareInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.currentBrokerSoftwareInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo`](#aws-cdk-sdk.kafka.KafkaBrokerSoftwareInfo)

---

##### `currentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.currentVersion"></a>

- *Type:* `string`

---

##### `encryptionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.encryptionInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaEncryptionInfo`](#aws-cdk-sdk.kafka.KafkaEncryptionInfo)

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaLoggingInfo`](#aws-cdk-sdk.kafka.KafkaLoggingInfo)

---

##### `numberOfBrokerNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.numberOfBrokerNodes"></a>

- *Type:* `number`

---

##### `openMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaOpenMonitoring`](#aws-cdk-sdk.kafka.KafkaOpenMonitoring)

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.state"></a>

- *Type:* `string`

---

##### `stateInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.stateInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaStateInfo`](#aws-cdk-sdk.kafka.KafkaStateInfo)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `zookeeperConnectString`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.zookeeperConnectString"></a>

- *Type:* `string`

---

##### `zookeeperConnectStringTls`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterInfo.property.zookeeperConnectStringTls"></a>

- *Type:* `string`

---

### KafkaClusterOperationInfo <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaClusterOperationInfo: kafka.KafkaClusterOperationInfo = { ... }
```

##### `clientRequestId`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.clientRequestId"></a>

- *Type:* `string`

---

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.clusterArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.endTime"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaErrorInfo`](#aws-cdk-sdk.kafka.KafkaErrorInfo)

---

##### `operationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.operationArn"></a>

- *Type:* `string`

---

##### `operationState`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.operationState"></a>

- *Type:* `string`

---

##### `operationSteps`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.operationSteps"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterOperationStep`](#aws-cdk-sdk.kafka.KafkaClusterOperationStep)[]

---

##### `operationType`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.operationType"></a>

- *Type:* `string`

---

##### `sourceClusterInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.sourceClusterInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaMutableClusterInfo`](#aws-cdk-sdk.kafka.KafkaMutableClusterInfo)

---

##### `targetClusterInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationInfo.property.targetClusterInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaMutableClusterInfo`](#aws-cdk-sdk.kafka.KafkaMutableClusterInfo)

---

### KafkaClusterOperationStep <a name="aws-cdk-sdk.kafka.KafkaClusterOperationStep"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaClusterOperationStep: kafka.KafkaClusterOperationStep = { ... }
```

##### `stepInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationStep.property.stepInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterOperationStepInfo`](#aws-cdk-sdk.kafka.KafkaClusterOperationStepInfo)

---

##### `stepName`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationStep.property.stepName"></a>

- *Type:* `string`

---

### KafkaClusterOperationStepInfo <a name="aws-cdk-sdk.kafka.KafkaClusterOperationStepInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaClusterOperationStepInfo: kafka.KafkaClusterOperationStepInfo = { ... }
```

##### `stepStatus`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaClusterOperationStepInfo.property.stepStatus"></a>

- *Type:* `string`

---

### KafkaCompatibleKafkaVersion <a name="aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaCompatibleKafkaVersion: kafka.KafkaCompatibleKafkaVersion = { ... }
```

##### `sourceVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion.property.sourceVersion"></a>

- *Type:* `string`

---

##### `targetVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion.property.targetVersions"></a>

- *Type:* `string`[]

---

### KafkaConfiguration <a name="aws-cdk-sdk.kafka.KafkaConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaConfiguration: kafka.KafkaConfiguration = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.description"></a>

- *Type:* `string`

---

##### `kafkaVersions`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.kafkaVersions"></a>

- *Type:* `string`[]

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationRevision`](#aws-cdk-sdk.kafka.KafkaConfigurationRevision)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfiguration.property.state"></a>

- *Type:* `string`

---

### KafkaConfigurationInfo <a name="aws-cdk-sdk.kafka.KafkaConfigurationInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaConfigurationInfo: kafka.KafkaConfigurationInfo = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfigurationInfo.property.arn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfigurationInfo.property.revision"></a>

- *Type:* `number`

---

### KafkaConfigurationRevision <a name="aws-cdk-sdk.kafka.KafkaConfigurationRevision"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaConfigurationRevision: kafka.KafkaConfigurationRevision = { ... }
```

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfigurationRevision.property.creationTime"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaConfigurationRevision.property.revision"></a>

- *Type:* `number`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaConfigurationRevision.property.description"></a>

- *Type:* `string`

---

### KafkaCreateClusterRequest <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaCreateClusterRequest: kafka.KafkaCreateClusterRequest = { ... }
```

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.brokerNodeGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo`](#aws-cdk-sdk.kafka.KafkaBrokerNodeGroupInfo)

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.clusterName"></a>

- *Type:* `string`

---

##### `kafkaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.kafkaVersion"></a>

- *Type:* `string`

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.numberOfBrokerNodes"></a>

- *Type:* `number`

---

##### `clientAuthentication`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.clientAuthentication"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClientAuthentication`](#aws-cdk-sdk.kafka.KafkaClientAuthentication)

---

##### `configurationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.configurationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationInfo`](#aws-cdk-sdk.kafka.KafkaConfigurationInfo)

---

##### `encryptionInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.encryptionInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaEncryptionInfo`](#aws-cdk-sdk.kafka.KafkaEncryptionInfo)

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaLoggingInfo`](#aws-cdk-sdk.kafka.KafkaLoggingInfo)

---

##### `openMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaOpenMonitoringInfo`](#aws-cdk-sdk.kafka.KafkaOpenMonitoringInfo)

---

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KafkaCreateClusterResponse <a name="aws-cdk-sdk.kafka.KafkaCreateClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaCreateClusterResponse: kafka.KafkaCreateClusterResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterResponse.property.clusterName"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateClusterResponse.property.state"></a>

- *Type:* `string`

---

### KafkaCreateConfigurationRequest <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaCreateConfigurationRequest: kafka.KafkaCreateConfigurationRequest = { ... }
```

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest.property.name"></a>

- *Type:* `string`

---

##### `serverProperties`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest.property.serverProperties"></a>

- *Type:* `any`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest.property.description"></a>

- *Type:* `string`

---

##### `kafkaVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest.property.kafkaVersions"></a>

- *Type:* `string`[]

---

### KafkaCreateConfigurationResponse <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaCreateConfigurationResponse: kafka.KafkaCreateConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationResponse.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationRevision`](#aws-cdk-sdk.kafka.KafkaConfigurationRevision)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaCreateConfigurationResponse.property.state"></a>

- *Type:* `string`

---

### KafkaDeleteClusterRequest <a name="aws-cdk-sdk.kafka.KafkaDeleteClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDeleteClusterRequest: kafka.KafkaDeleteClusterRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteClusterRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteClusterRequest.property.currentVersion"></a>

- *Type:* `string`

---

### KafkaDeleteClusterResponse <a name="aws-cdk-sdk.kafka.KafkaDeleteClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDeleteClusterResponse: kafka.KafkaDeleteClusterResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteClusterResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteClusterResponse.property.state"></a>

- *Type:* `string`

---

### KafkaDeleteConfigurationRequest <a name="aws-cdk-sdk.kafka.KafkaDeleteConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDeleteConfigurationRequest: kafka.KafkaDeleteConfigurationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteConfigurationRequest.property.arn"></a>

- *Type:* `string`

---

### KafkaDeleteConfigurationResponse <a name="aws-cdk-sdk.kafka.KafkaDeleteConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDeleteConfigurationResponse: kafka.KafkaDeleteConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDeleteConfigurationResponse.property.state"></a>

- *Type:* `string`

---

### KafkaDescribeClusterOperationRequest <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeClusterOperationRequest: kafka.KafkaDescribeClusterOperationRequest = { ... }
```

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaDescribeClusterOperationResponse <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterOperationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeClusterOperationResponse: kafka.KafkaDescribeClusterOperationResponse = { ... }
```

##### `clusterOperationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterOperationResponse.property.clusterOperationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterOperationInfo`](#aws-cdk-sdk.kafka.KafkaClusterOperationInfo)

---

### KafkaDescribeClusterRequest <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeClusterRequest: kafka.KafkaDescribeClusterRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterRequest.property.clusterArn"></a>

- *Type:* `string`

---

### KafkaDescribeClusterResponse <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeClusterResponse: kafka.KafkaDescribeClusterResponse = { ... }
```

##### `clusterInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeClusterResponse.property.clusterInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterInfo`](#aws-cdk-sdk.kafka.KafkaClusterInfo)

---

### KafkaDescribeConfigurationRequest <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeConfigurationRequest: kafka.KafkaDescribeConfigurationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest.property.arn"></a>

- *Type:* `string`

---

### KafkaDescribeConfigurationResponse <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeConfigurationResponse: kafka.KafkaDescribeConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.description"></a>

- *Type:* `string`

---

##### `kafkaVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.kafkaVersions"></a>

- *Type:* `string`[]

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationRevision`](#aws-cdk-sdk.kafka.KafkaConfigurationRevision)

---

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationResponse.property.state"></a>

- *Type:* `string`

---

### KafkaDescribeConfigurationRevisionRequest <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeConfigurationRevisionRequest: kafka.KafkaDescribeConfigurationRevisionRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest.property.arn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest.property.revision"></a>

- *Type:* `number`

---

### KafkaDescribeConfigurationRevisionResponse <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaDescribeConfigurationRevisionResponse: kafka.KafkaDescribeConfigurationRevisionResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionResponse.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionResponse.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionResponse.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionResponse.property.revision"></a>

- *Type:* `number`

---

##### `serverProperties`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionResponse.property.serverProperties"></a>

- *Type:* `any`

---

### KafkaEbsStorageInfo <a name="aws-cdk-sdk.kafka.KafkaEbsStorageInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaEbsStorageInfo: kafka.KafkaEbsStorageInfo = { ... }
```

##### `volumeSize`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaEbsStorageInfo.property.volumeSize"></a>

- *Type:* `number`

---

### KafkaEncryptionAtRest <a name="aws-cdk-sdk.kafka.KafkaEncryptionAtRest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaEncryptionAtRest: kafka.KafkaEncryptionAtRest = { ... }
```

##### `dataVolumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaEncryptionAtRest.property.dataVolumeKmsKeyId"></a>

- *Type:* `string`

---

### KafkaEncryptionInfo <a name="aws-cdk-sdk.kafka.KafkaEncryptionInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaEncryptionInfo: kafka.KafkaEncryptionInfo = { ... }
```

##### `encryptionAtRest`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaEncryptionInfo.property.encryptionAtRest"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaEncryptionAtRest`](#aws-cdk-sdk.kafka.KafkaEncryptionAtRest)

---

##### `encryptionInTransit`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaEncryptionInfo.property.encryptionInTransit"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaEncryptionInTransit`](#aws-cdk-sdk.kafka.KafkaEncryptionInTransit)

---

### KafkaEncryptionInTransit <a name="aws-cdk-sdk.kafka.KafkaEncryptionInTransit"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaEncryptionInTransit: kafka.KafkaEncryptionInTransit = { ... }
```

##### `clientBroker`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaEncryptionInTransit.property.clientBroker"></a>

- *Type:* `string`

---

##### `inCluster`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaEncryptionInTransit.property.inCluster"></a>

- *Type:* `boolean`

---

### KafkaErrorInfo <a name="aws-cdk-sdk.kafka.KafkaErrorInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaErrorInfo: kafka.KafkaErrorInfo = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaErrorInfo.property.errorCode"></a>

- *Type:* `string`

---

##### `errorString`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaErrorInfo.property.errorString"></a>

- *Type:* `string`

---

### KafkaFirehose <a name="aws-cdk-sdk.kafka.KafkaFirehose"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaFirehose: kafka.KafkaFirehose = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaFirehose.property.enabled"></a>

- *Type:* `boolean`

---

##### `deliveryStream`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaFirehose.property.deliveryStream"></a>

- *Type:* `string`

---

### KafkaGetBootstrapBrokersRequest <a name="aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaGetBootstrapBrokersRequest: kafka.KafkaGetBootstrapBrokersRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersRequest.property.clusterArn"></a>

- *Type:* `string`

---

### KafkaGetBootstrapBrokersResponse <a name="aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaGetBootstrapBrokersResponse: kafka.KafkaGetBootstrapBrokersResponse = { ... }
```

##### `bootstrapBrokerString`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersResponse.property.bootstrapBrokerString"></a>

- *Type:* `string`

---

##### `bootstrapBrokerStringSaslScram`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersResponse.property.bootstrapBrokerStringSaslScram"></a>

- *Type:* `string`

---

##### `bootstrapBrokerStringTls`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersResponse.property.bootstrapBrokerStringTls"></a>

- *Type:* `string`

---

### KafkaGetCompatibleKafkaVersionsRequest <a name="aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaGetCompatibleKafkaVersionsRequest: kafka.KafkaGetCompatibleKafkaVersionsRequest = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsRequest.property.clusterArn"></a>

- *Type:* `string`

---

### KafkaGetCompatibleKafkaVersionsResponse <a name="aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaGetCompatibleKafkaVersionsResponse: kafka.KafkaGetCompatibleKafkaVersionsResponse = { ... }
```

##### `compatibleKafkaVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsResponse.property.compatibleKafkaVersions"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion`](#aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion)[]

---

### KafkaJmxExporter <a name="aws-cdk-sdk.kafka.KafkaJmxExporter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaJmxExporter: kafka.KafkaJmxExporter = { ... }
```

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaJmxExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---

### KafkaJmxExporterInfo <a name="aws-cdk-sdk.kafka.KafkaJmxExporterInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaJmxExporterInfo: kafka.KafkaJmxExporterInfo = { ... }
```

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaJmxExporterInfo.property.enabledInBroker"></a>

- *Type:* `boolean`

---

### KafkaKafkaVersion <a name="aws-cdk-sdk.kafka.KafkaKafkaVersion"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaKafkaVersion: kafka.KafkaKafkaVersion = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaKafkaVersion.property.status"></a>

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaKafkaVersion.property.version"></a>

- *Type:* `string`

---

### KafkaListClusterOperationsRequest <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListClusterOperationsRequest: kafka.KafkaListClusterOperationsRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListClusterOperationsResponse <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListClusterOperationsResponse: kafka.KafkaListClusterOperationsResponse = { ... }
```

##### `clusterOperationInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsResponse.property.clusterOperationInfoList"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterOperationInfo`](#aws-cdk-sdk.kafka.KafkaClusterOperationInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClusterOperationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListClustersRequest <a name="aws-cdk-sdk.kafka.KafkaListClustersRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListClustersRequest: kafka.KafkaListClustersRequest = { ... }
```

##### `clusterNameFilter`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClustersRequest.property.clusterNameFilter"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClustersRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClustersRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListClustersResponse <a name="aws-cdk-sdk.kafka.KafkaListClustersResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListClustersResponse: kafka.KafkaListClustersResponse = { ... }
```

##### `clusterInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClustersResponse.property.clusterInfoList"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterInfo`](#aws-cdk-sdk.kafka.KafkaClusterInfo)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListClustersResponse.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListConfigurationRevisionsRequest <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListConfigurationRevisionsRequest: kafka.KafkaListConfigurationRevisionsRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest.property.arn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListConfigurationRevisionsResponse <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListConfigurationRevisionsResponse: kafka.KafkaListConfigurationRevisionsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsResponse.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationRevision`](#aws-cdk-sdk.kafka.KafkaConfigurationRevision)[]

---

### KafkaListConfigurationsRequest <a name="aws-cdk-sdk.kafka.KafkaListConfigurationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListConfigurationsRequest: kafka.KafkaListConfigurationsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListConfigurationsResponse <a name="aws-cdk-sdk.kafka.KafkaListConfigurationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListConfigurationsResponse: kafka.KafkaListConfigurationsResponse = { ... }
```

##### `configurations`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationsResponse.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfiguration`](#aws-cdk-sdk.kafka.KafkaConfiguration)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListConfigurationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListKafkaVersionsRequest <a name="aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListKafkaVersionsRequest: kafka.KafkaListKafkaVersionsRequest = { ... }
```

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListKafkaVersionsResponse <a name="aws-cdk-sdk.kafka.KafkaListKafkaVersionsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListKafkaVersionsResponse: kafka.KafkaListKafkaVersionsResponse = { ... }
```

##### `kafkaVersions`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListKafkaVersionsResponse.property.kafkaVersions"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaKafkaVersion`](#aws-cdk-sdk.kafka.KafkaKafkaVersion)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListKafkaVersionsResponse.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListNodesRequest <a name="aws-cdk-sdk.kafka.KafkaListNodesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListNodesRequest: kafka.KafkaListNodesRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaListNodesRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListNodesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListNodesRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListNodesResponse <a name="aws-cdk-sdk.kafka.KafkaListNodesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListNodesResponse: kafka.KafkaListNodesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListNodesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `nodeInfoList`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListNodesResponse.property.nodeInfoList"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaNodeInfo`](#aws-cdk-sdk.kafka.KafkaNodeInfo)[]

---

### KafkaListScramSecretsRequest <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListScramSecretsRequest: kafka.KafkaListScramSecretsRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsRequest.property.nextToken"></a>

- *Type:* `string`

---

### KafkaListScramSecretsResponse <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListScramSecretsResponse: kafka.KafkaListScramSecretsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `secretArnList`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListScramSecretsResponse.property.secretArnList"></a>

- *Type:* `string`[]

---

### KafkaListTagsForResourceRequest <a name="aws-cdk-sdk.kafka.KafkaListTagsForResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListTagsForResourceRequest: kafka.KafkaListTagsForResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaListTagsForResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

### KafkaListTagsForResourceResponse <a name="aws-cdk-sdk.kafka.KafkaListTagsForResourceResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaListTagsForResourceResponse: kafka.KafkaListTagsForResourceResponse = { ... }
```

##### `tags`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaListTagsForResourceResponse.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KafkaLoggingInfo <a name="aws-cdk-sdk.kafka.KafkaLoggingInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaLoggingInfo: kafka.KafkaLoggingInfo = { ... }
```

##### `brokerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaLoggingInfo.property.brokerLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerLogs`](#aws-cdk-sdk.kafka.KafkaBrokerLogs)

---

### KafkaMutableClusterInfo <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaMutableClusterInfo: kafka.KafkaMutableClusterInfo = { ... }
```

##### `brokerEbsVolumeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.brokerEbsVolumeInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo`](#aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo)[]

---

##### `configurationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.configurationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationInfo`](#aws-cdk-sdk.kafka.KafkaConfigurationInfo)

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `kafkaVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.kafkaVersion"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaLoggingInfo`](#aws-cdk-sdk.kafka.KafkaLoggingInfo)

---

##### `numberOfBrokerNodes`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.numberOfBrokerNodes"></a>

- *Type:* `number`

---

##### `openMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaMutableClusterInfo.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaOpenMonitoring`](#aws-cdk-sdk.kafka.KafkaOpenMonitoring)

---

### KafkaNodeExporter <a name="aws-cdk-sdk.kafka.KafkaNodeExporter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaNodeExporter: kafka.KafkaNodeExporter = { ... }
```

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---

### KafkaNodeExporterInfo <a name="aws-cdk-sdk.kafka.KafkaNodeExporterInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaNodeExporterInfo: kafka.KafkaNodeExporterInfo = { ... }
```

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeExporterInfo.property.enabledInBroker"></a>

- *Type:* `boolean`

---

### KafkaNodeInfo <a name="aws-cdk-sdk.kafka.KafkaNodeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaNodeInfo: kafka.KafkaNodeInfo = { ... }
```

##### `addedToClusterTime`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeInfo.property.addedToClusterTime"></a>

- *Type:* `string`

---

##### `brokerNodeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeInfo.property.brokerNodeInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerNodeInfo`](#aws-cdk-sdk.kafka.KafkaBrokerNodeInfo)

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeInfo.property.instanceType"></a>

- *Type:* `string`

---

##### `nodeArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeInfo.property.nodeArn"></a>

- *Type:* `string`

---

##### `nodeType`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeInfo.property.nodeType"></a>

- *Type:* `string`

---

##### `zookeeperNodeInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaNodeInfo.property.zookeeperNodeInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo`](#aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo)

---

### KafkaOpenMonitoring <a name="aws-cdk-sdk.kafka.KafkaOpenMonitoring"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaOpenMonitoring: kafka.KafkaOpenMonitoring = { ... }
```

##### `prometheus`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaOpenMonitoring.property.prometheus"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaPrometheus`](#aws-cdk-sdk.kafka.KafkaPrometheus)

---

### KafkaOpenMonitoringInfo <a name="aws-cdk-sdk.kafka.KafkaOpenMonitoringInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaOpenMonitoringInfo: kafka.KafkaOpenMonitoringInfo = { ... }
```

##### `prometheus`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaOpenMonitoringInfo.property.prometheus"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaPrometheusInfo`](#aws-cdk-sdk.kafka.KafkaPrometheusInfo)

---

### KafkaPrometheus <a name="aws-cdk-sdk.kafka.KafkaPrometheus"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaPrometheus: kafka.KafkaPrometheus = { ... }
```

##### `jmxExporter`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaPrometheus.property.jmxExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaJmxExporter`](#aws-cdk-sdk.kafka.KafkaJmxExporter)

---

##### `nodeExporter`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaPrometheus.property.nodeExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaNodeExporter`](#aws-cdk-sdk.kafka.KafkaNodeExporter)

---

### KafkaPrometheusInfo <a name="aws-cdk-sdk.kafka.KafkaPrometheusInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaPrometheusInfo: kafka.KafkaPrometheusInfo = { ... }
```

##### `jmxExporter`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaPrometheusInfo.property.jmxExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaJmxExporterInfo`](#aws-cdk-sdk.kafka.KafkaJmxExporterInfo)

---

##### `nodeExporter`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaPrometheusInfo.property.nodeExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaNodeExporterInfo`](#aws-cdk-sdk.kafka.KafkaNodeExporterInfo)

---

### KafkaRebootBrokerRequest <a name="aws-cdk-sdk.kafka.KafkaRebootBrokerRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaRebootBrokerRequest: kafka.KafkaRebootBrokerRequest = { ... }
```

##### `brokerIds`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaRebootBrokerRequest.property.brokerIds"></a>

- *Type:* `string`[]

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaRebootBrokerRequest.property.clusterArn"></a>

- *Type:* `string`

---

### KafkaRebootBrokerResponse <a name="aws-cdk-sdk.kafka.KafkaRebootBrokerResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaRebootBrokerResponse: kafka.KafkaRebootBrokerResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaRebootBrokerResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaRebootBrokerResponse.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaS3 <a name="aws-cdk-sdk.kafka.KafkaS3"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaS3: kafka.KafkaS3 = { ... }
```

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaS3.property.enabled"></a>

- *Type:* `boolean`

---

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaS3.property.bucket"></a>

- *Type:* `string`

---

##### `prefix`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaS3.property.prefix"></a>

- *Type:* `string`

---

### KafkaSasl <a name="aws-cdk-sdk.kafka.KafkaSasl"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaSasl: kafka.KafkaSasl = { ... }
```

##### `scram`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaSasl.property.scram"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaScram`](#aws-cdk-sdk.kafka.KafkaScram)

---

### KafkaScram <a name="aws-cdk-sdk.kafka.KafkaScram"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaScram: kafka.KafkaScram = { ... }
```

##### `enabled`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaScram.property.enabled"></a>

- *Type:* `boolean`

---

### KafkaStateInfo <a name="aws-cdk-sdk.kafka.KafkaStateInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaStateInfo: kafka.KafkaStateInfo = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaStateInfo.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaStateInfo.property.message"></a>

- *Type:* `string`

---

### KafkaStorageInfo <a name="aws-cdk-sdk.kafka.KafkaStorageInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaStorageInfo: kafka.KafkaStorageInfo = { ... }
```

##### `ebsStorageInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaStorageInfo.property.ebsStorageInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaEbsStorageInfo`](#aws-cdk-sdk.kafka.KafkaEbsStorageInfo)

---

### KafkaTagResourceRequest <a name="aws-cdk-sdk.kafka.KafkaTagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaTagResourceRequest: kafka.KafkaTagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaTagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaTagResourceRequest.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

### KafkaTls <a name="aws-cdk-sdk.kafka.KafkaTls"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaTls: kafka.KafkaTls = { ... }
```

##### `certificateAuthorityArnList`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaTls.property.certificateAuthorityArnList"></a>

- *Type:* `string`[]

---

### KafkaUnprocessedScramSecret <a name="aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUnprocessedScramSecret: kafka.KafkaUnprocessedScramSecret = { ... }
```

##### `errorCode`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret.property.errorCode"></a>

- *Type:* `string`

---

##### `errorMessage`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret.property.errorMessage"></a>

- *Type:* `string`

---

##### `secretArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret.property.secretArn"></a>

- *Type:* `string`

---

### KafkaUntagResourceRequest <a name="aws-cdk-sdk.kafka.KafkaUntagResourceRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUntagResourceRequest: kafka.KafkaUntagResourceRequest = { ... }
```

##### `resourceArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUntagResourceRequest.property.resourceArn"></a>

- *Type:* `string`

---

##### `tagKeys`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUntagResourceRequest.property.tagKeys"></a>

- *Type:* `string`[]

---

### KafkaUpdateBrokerCountRequest <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateBrokerCountRequest: kafka.KafkaUpdateBrokerCountRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest.property.currentVersion"></a>

- *Type:* `string`

---

##### `targetNumberOfBrokerNodes`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest.property.targetNumberOfBrokerNodes"></a>

- *Type:* `number`

---

### KafkaUpdateBrokerCountResponse <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateBrokerCountResponse: kafka.KafkaUpdateBrokerCountResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerCountResponse.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaUpdateBrokerStorageRequest <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateBrokerStorageRequest: kafka.KafkaUpdateBrokerStorageRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest.property.currentVersion"></a>

- *Type:* `string`

---

##### `targetBrokerEbsVolumeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest.property.targetBrokerEbsVolumeInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo`](#aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo)[]

---

### KafkaUpdateBrokerStorageResponse <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateBrokerStorageResponse: kafka.KafkaUpdateBrokerStorageResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageResponse.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaUpdateClusterConfigurationRequest <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateClusterConfigurationRequest: kafka.KafkaUpdateClusterConfigurationRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `configurationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest.property.configurationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationInfo`](#aws-cdk-sdk.kafka.KafkaConfigurationInfo)

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest.property.currentVersion"></a>

- *Type:* `string`

---

### KafkaUpdateClusterConfigurationResponse <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateClusterConfigurationResponse: kafka.KafkaUpdateClusterConfigurationResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationResponse.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaUpdateClusterKafkaVersionRequest <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateClusterKafkaVersionRequest: kafka.KafkaUpdateClusterKafkaVersionRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest.property.currentVersion"></a>

- *Type:* `string`

---

##### `targetKafkaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest.property.targetKafkaVersion"></a>

- *Type:* `string`

---

##### `configurationInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest.property.configurationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationInfo`](#aws-cdk-sdk.kafka.KafkaConfigurationInfo)

---

### KafkaUpdateClusterKafkaVersionResponse <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateClusterKafkaVersionResponse: kafka.KafkaUpdateClusterKafkaVersionResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionResponse.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaUpdateConfigurationRequest <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateConfigurationRequest: kafka.KafkaUpdateConfigurationRequest = { ... }
```

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest.property.arn"></a>

- *Type:* `string`

---

##### `serverProperties`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest.property.serverProperties"></a>

- *Type:* `any`

---

##### `description`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest.property.description"></a>

- *Type:* `string`

---

### KafkaUpdateConfigurationResponse <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateConfigurationResponse: kafka.KafkaUpdateConfigurationResponse = { ... }
```

##### `arn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationResponse.property.arn"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateConfigurationResponse.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationRevision`](#aws-cdk-sdk.kafka.KafkaConfigurationRevision)

---

### KafkaUpdateMonitoringRequest <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateMonitoringRequest: kafka.KafkaUpdateMonitoringRequest = { ... }
```

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest.property.clusterArn"></a>

- *Type:* `string`

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest.property.currentVersion"></a>

- *Type:* `string`

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaLoggingInfo`](#aws-cdk-sdk.kafka.KafkaLoggingInfo)

---

##### `openMonitoring`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaOpenMonitoringInfo`](#aws-cdk-sdk.kafka.KafkaOpenMonitoringInfo)

---

### KafkaUpdateMonitoringResponse <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaUpdateMonitoringResponse: kafka.KafkaUpdateMonitoringResponse = { ... }
```

##### `clusterArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringResponse.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaUpdateMonitoringResponse.property.clusterOperationArn"></a>

- *Type:* `string`

---

### KafkaZookeeperNodeInfo <a name="aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

const kafkaZookeeperNodeInfo: kafka.KafkaZookeeperNodeInfo = { ... }
```

##### `attachedEniId`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo.property.attachedEniId"></a>

- *Type:* `string`

---

##### `clientVpcIpAddress`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo.property.clientVpcIpAddress"></a>

- *Type:* `string`

---

##### `endpoints`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo.property.endpoints"></a>

- *Type:* `string`[]

---

##### `zookeeperId`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo.property.zookeeperId"></a>

- *Type:* `number`

---

##### `zookeeperVersion`<sup>Optional</sup> <a name="aws-cdk-sdk.kafka.KafkaZookeeperNodeInfo.property.zookeeperVersion"></a>

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### KafkaResponsesBatchAssociateScramSecret <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesBatchAssociateScramSecret(__scope: Construct, __resources: string[], __input: KafkaBatchAssociateScramSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest`](#aws-cdk-sdk.kafka.KafkaBatchAssociateScramSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret.property.clusterArn"></a>

- *Type:* `string`

---

##### `unprocessedScramSecrets`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchAssociateScramSecret.property.unprocessedScramSecrets"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret`](#aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret)[]

---


### KafkaResponsesBatchDisassociateScramSecret <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesBatchDisassociateScramSecret(__scope: Construct, __resources: string[], __input: KafkaBatchDisassociateScramSecretRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest`](#aws-cdk-sdk.kafka.KafkaBatchDisassociateScramSecretRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret.property.clusterArn"></a>

- *Type:* `string`

---

##### `unprocessedScramSecrets`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesBatchDisassociateScramSecret.property.unprocessedScramSecrets"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret`](#aws-cdk-sdk.kafka.KafkaUnprocessedScramSecret)[]

---


### KafkaResponsesCreateCluster <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesCreateCluster(__scope: Construct, __resources: string[], __input: KafkaCreateClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCreateClusterRequest`](#aws-cdk-sdk.kafka.KafkaCreateClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.property.clusterName"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateCluster.property.state"></a>

- *Type:* `string`

---


### KafkaResponsesCreateConfiguration <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesCreateConfiguration(__scope: Construct, __resources: string[], __input: KafkaCreateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision`](#aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfiguration.property.state"></a>

- *Type:* `string`

---


### KafkaResponsesCreateConfigurationLatestRevision <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesCreateConfigurationLatestRevision(__scope: Construct, __resources: string[], __input: KafkaCreateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaCreateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesCreateConfigurationLatestRevision.property.revision"></a>

- *Type:* `number`

---


### KafkaResponsesDeleteCluster <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDeleteCluster(__scope: Construct, __resources: string[], __input: KafkaDeleteClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDeleteClusterRequest`](#aws-cdk-sdk.kafka.KafkaDeleteClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster.property.clusterArn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteCluster.property.state"></a>

- *Type:* `string`

---


### KafkaResponsesDeleteConfiguration <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDeleteConfiguration(__scope: Construct, __resources: string[], __input: KafkaDeleteConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDeleteConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaDeleteConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDeleteConfiguration.property.state"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeCluster <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeCluster"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeCluster.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeCluster(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeCluster.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeCluster.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeCluster.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeCluster.property.clusterInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo)

---


### KafkaResponsesDescribeClusterClusterInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `activeOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.activeOperationArn"></a>

- *Type:* `string`

---

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.brokerNodeGroupInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo)

---

##### `clientAuthentication`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.clientAuthentication"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication)

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterName`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.clusterName"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `currentBrokerSoftwareInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.currentBrokerSoftwareInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo)

---

##### `currentVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.currentVersion"></a>

- *Type:* `string`

---

##### `encryptionInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.encryptionInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo)

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo)

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.numberOfBrokerNodes"></a>

- *Type:* `number`

---

##### `openMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring)

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.state"></a>

- *Type:* `string`

---

##### `stateInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.stateInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo)

---

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---

##### `zookeeperConnectString`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.zookeeperConnectString"></a>

- *Type:* `string`

---

##### `zookeeperConnectStringTls`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfo.property.zookeeperConnectStringTls"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerAzDistribution`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.property.brokerAzDistribution"></a>

- *Type:* `string`

---

##### `clientSubnets`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.property.clientSubnets"></a>

- *Type:* `string`[]

---

##### `instanceType`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.property.instanceType"></a>

- *Type:* `string`

---

##### `securityGroups`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.property.securityGroups"></a>

- *Type:* `string`[]

---

##### `storageInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfo.property.storageInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo)

---


### KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `ebsStorageInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo)

---


### KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `volumeSize`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize"></a>

- *Type:* `number`

---


### KafkaResponsesDescribeClusterClusterInfoClientAuthentication <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `sasl`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication.property.sasl"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl)

---

##### `tls`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthentication.property.tls"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls)

---


### KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `scram`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSasl.property.scram"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram)

---


### KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationSaslScram.property.enabled"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `certificateAuthorityArnList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoClientAuthenticationTls.property.certificateAuthorityArnList"></a>

- *Type:* `string`[]

---


### KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `configurationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.property.configurationArn"></a>

- *Type:* `string`

---

##### `configurationRevision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.property.configurationRevision"></a>

- *Type:* `number`

---

##### `kafkaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoCurrentBrokerSoftwareInfo.property.kafkaVersion"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterClusterInfoEncryptionInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `encryptionAtRest`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo.property.encryptionAtRest"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest)

---

##### `encryptionInTransit`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfo.property.encryptionInTransit"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit)

---


### KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `dataVolumeKmsKeyId`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionAtRest.property.dataVolumeKmsKeyId"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `clientBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit.property.clientBroker"></a>

- *Type:* `string`

---

##### `inCluster`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoEncryptionInfoEncryptionInTransit.property.inCluster"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterClusterInfoLoggingInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfo.property.brokerLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs)

---


### KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs)

---

##### `firehose`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose)

---

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogs.property.s3"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3)

---


### KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logGroup`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.property.logGroup"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `deliveryStream`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsFirehose.property.enabled"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3 <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.property.bucket"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.property.enabled"></a>

- *Type:* `boolean`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoLoggingInfoBrokerLogsS3.property.prefix"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterClusterInfoOpenMonitoring <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `prometheus`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoring.property.prometheus"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus)

---


### KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `jmxExporter`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus.property.jmxExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter)

---

##### `nodeExporter`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheus.property.nodeExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter)

---


### KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterClusterInfoStateInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterRequest)

---



#### Properties <a name="Properties"></a>

##### `code`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo.property.code"></a>

- *Type:* `string`

---

##### `message`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterClusterInfoStateInfo.property.message"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterOperation <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperation"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperation.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperation(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperation.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperation.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperation.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterOperationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperation.property.clusterOperationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `clientRequestId`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.clientRequestId"></a>

- *Type:* `string`

---

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.clusterArn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.creationTime"></a>

- *Type:* `string`

---

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.endTime"></a>

- *Type:* `string`

---

##### `errorInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.errorInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo)

---

##### `operationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.operationArn"></a>

- *Type:* `string`

---

##### `operationState`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.operationState"></a>

- *Type:* `string`

---

##### `operationSteps`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.operationSteps"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterOperationStep`](#aws-cdk-sdk.kafka.KafkaClusterOperationStep)[]

---

##### `operationType`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.operationType"></a>

- *Type:* `string`

---

##### `sourceClusterInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.sourceClusterInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo)

---

##### `targetClusterInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfo.property.targetClusterInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `errorCode`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo.property.errorCode"></a>

- *Type:* `string`

---

##### `errorString`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoErrorInfo.property.errorString"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerEbsVolumeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.brokerEbsVolumeInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo`](#aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo)[]

---

##### `configurationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.configurationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo)

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `kafkaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.kafkaVersion"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo)

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.numberOfBrokerNodes"></a>

- *Type:* `number`

---

##### `openMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfo.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo.property.arn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoConfigurationInfo.property.revision"></a>

- *Type:* `number`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfo.property.brokerLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs)

---

##### `firehose`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose)

---

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogs.property.s3"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logGroup`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.property.logGroup"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `deliveryStream`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsFirehose.property.enabled"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3 <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.property.bucket"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.property.enabled"></a>

- *Type:* `boolean`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoLoggingInfoBrokerLogsS3.property.prefix"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `prometheus`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoring.property.prometheus"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `jmxExporter`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus.property.jmxExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter)

---

##### `nodeExporter`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheus.property.nodeExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoSourceClusterInfoOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerEbsVolumeInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.brokerEbsVolumeInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo`](#aws-cdk-sdk.kafka.KafkaBrokerEbsVolumeInfo)[]

---

##### `configurationInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.configurationInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo)

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.enhancedMonitoring"></a>

- *Type:* `string`

---

##### `kafkaVersion`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.kafkaVersion"></a>

- *Type:* `string`

---

##### `loggingInfo`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.loggingInfo"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo)

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.numberOfBrokerNodes"></a>

- *Type:* `number`

---

##### `openMonitoring`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfo.property.openMonitoring"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo.property.arn"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoConfigurationInfo.property.revision"></a>

- *Type:* `number`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `brokerLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfo.property.brokerLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `cloudWatchLogs`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.property.cloudWatchLogs"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs)

---

##### `firehose`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.property.firehose"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose)

---

##### `s3`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogs.property.s3"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.property.enabled"></a>

- *Type:* `boolean`

---

##### `logGroup`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsCloudWatchLogs.property.logGroup"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `deliveryStream`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsFirehose.property.enabled"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3 <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.property.bucket"></a>

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.property.enabled"></a>

- *Type:* `boolean`

---

##### `prefix`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoLoggingInfoBrokerLogsS3.property.prefix"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `prometheus`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoring.property.prometheus"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `jmxExporter`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus.property.jmxExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter)

---

##### `nodeExporter`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheus.property.nodeExporter"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter)

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter(__scope: Construct, __resources: string[], __input: KafkaDescribeClusterOperationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeClusterOperationRequest)

---



#### Properties <a name="Properties"></a>

##### `enabledInBroker`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeClusterOperationClusterOperationInfoTargetClusterInfoOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

- *Type:* `boolean`

---


### KafkaResponsesDescribeConfiguration <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeConfiguration(__scope: Construct, __resources: string[], __input: KafkaDescribeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.description"></a>

- *Type:* `string`

---

##### `kafkaVersions`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.kafkaVersions"></a>

- *Type:* `string`[]

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision`](#aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision)

---

##### `name`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.name"></a>

- *Type:* `string`

---

##### `state`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfiguration.property.state"></a>

- *Type:* `string`

---


### KafkaResponsesDescribeConfigurationLatestRevision <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeConfigurationLatestRevision(__scope: Construct, __resources: string[], __input: KafkaDescribeConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaDescribeConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationLatestRevision.property.revision"></a>

- *Type:* `number`

---


### KafkaResponsesDescribeConfigurationRevision <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesDescribeConfigurationRevision(__scope: Construct, __resources: string[], __input: KafkaDescribeConfigurationRevisionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest`](#aws-cdk-sdk.kafka.KafkaDescribeConfigurationRevisionRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.property.arn"></a>

- *Type:* `string`

---

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.property.revision"></a>

- *Type:* `number`

---

##### `serverProperties`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesDescribeConfigurationRevision.property.serverProperties"></a>

- *Type:* `any`

---


### KafkaResponsesFetchBootstrapBrokers <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesFetchBootstrapBrokers(__scope: Construct, __resources: string[], __input: KafkaGetBootstrapBrokersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersRequest`](#aws-cdk-sdk.kafka.KafkaGetBootstrapBrokersRequest)

---



#### Properties <a name="Properties"></a>

##### `bootstrapBrokerString`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.property.bootstrapBrokerString"></a>

- *Type:* `string`

---

##### `bootstrapBrokerStringSaslScram`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.property.bootstrapBrokerStringSaslScram"></a>

- *Type:* `string`

---

##### `bootstrapBrokerStringTls`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchBootstrapBrokers.property.bootstrapBrokerStringTls"></a>

- *Type:* `string`

---


### KafkaResponsesFetchCompatibleKafkaVersions <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchCompatibleKafkaVersions"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchCompatibleKafkaVersions.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesFetchCompatibleKafkaVersions(__scope: Construct, __resources: string[], __input: KafkaGetCompatibleKafkaVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchCompatibleKafkaVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchCompatibleKafkaVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchCompatibleKafkaVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsRequest`](#aws-cdk-sdk.kafka.KafkaGetCompatibleKafkaVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `compatibleKafkaVersions`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesFetchCompatibleKafkaVersions.property.compatibleKafkaVersions"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion`](#aws-cdk-sdk.kafka.KafkaCompatibleKafkaVersion)[]

---


### KafkaResponsesListClusterOperations <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListClusterOperations(__scope: Construct, __resources: string[], __input: KafkaListClusterOperationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest`](#aws-cdk-sdk.kafka.KafkaListClusterOperationsRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterOperationInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations.property.clusterOperationInfoList"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterOperationInfo`](#aws-cdk-sdk.kafka.KafkaClusterOperationInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusterOperations.property.nextToken"></a>

- *Type:* `string`

---


### KafkaResponsesListClusters <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListClusters(__scope: Construct, __resources: string[], __input: KafkaListClustersRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListClustersRequest`](#aws-cdk-sdk.kafka.KafkaListClustersRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters.property.clusterInfoList"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaClusterInfo`](#aws-cdk-sdk.kafka.KafkaClusterInfo)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListClusters.property.nextToken"></a>

- *Type:* `string`

---


### KafkaResponsesListConfigurationRevisions <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListConfigurationRevisions(__scope: Construct, __resources: string[], __input: KafkaListConfigurationRevisionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest`](#aws-cdk-sdk.kafka.KafkaListConfigurationRevisionsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions.property.nextToken"></a>

- *Type:* `string`

---

##### `revisions`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurationRevisions.property.revisions"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfigurationRevision`](#aws-cdk-sdk.kafka.KafkaConfigurationRevision)[]

---


### KafkaResponsesListConfigurations <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListConfigurations(__scope: Construct, __resources: string[], __input: KafkaListConfigurationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListConfigurationsRequest`](#aws-cdk-sdk.kafka.KafkaListConfigurationsRequest)

---



#### Properties <a name="Properties"></a>

##### `configurations`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations.property.configurations"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaConfiguration`](#aws-cdk-sdk.kafka.KafkaConfiguration)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListConfigurations.property.nextToken"></a>

- *Type:* `string`

---


### KafkaResponsesListKafkaVersions <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListKafkaVersions(__scope: Construct, __resources: string[], __input: KafkaListKafkaVersionsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest`](#aws-cdk-sdk.kafka.KafkaListKafkaVersionsRequest)

---



#### Properties <a name="Properties"></a>

##### `kafkaVersions`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions.property.kafkaVersions"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaKafkaVersion`](#aws-cdk-sdk.kafka.KafkaKafkaVersion)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListKafkaVersions.property.nextToken"></a>

- *Type:* `string`

---


### KafkaResponsesListNodes <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListNodes(__scope: Construct, __resources: string[], __input: KafkaListNodesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListNodesRequest`](#aws-cdk-sdk.kafka.KafkaListNodesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes.property.nextToken"></a>

- *Type:* `string`

---

##### `nodeInfoList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListNodes.property.nodeInfoList"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaNodeInfo`](#aws-cdk-sdk.kafka.KafkaNodeInfo)[]

---


### KafkaResponsesListScramSecrets <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListScramSecrets(__scope: Construct, __resources: string[], __input: KafkaListScramSecretsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListScramSecretsRequest`](#aws-cdk-sdk.kafka.KafkaListScramSecretsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets.property.nextToken"></a>

- *Type:* `string`

---

##### `secretArnList`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListScramSecrets.property.secretArnList"></a>

- *Type:* `string`[]

---


### KafkaResponsesListTagsForResource <a name="aws-cdk-sdk.kafka.KafkaResponsesListTagsForResource"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesListTagsForResource.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesListTagsForResource(__scope: Construct, __resources: string[], __input: KafkaListTagsForResourceRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListTagsForResource.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListTagsForResource.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListTagsForResource.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaListTagsForResourceRequest`](#aws-cdk-sdk.kafka.KafkaListTagsForResourceRequest)

---



#### Properties <a name="Properties"></a>

##### `tags`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesListTagsForResource.property.tags"></a>

- *Type:* {[ key: string ]: `string`}

---


### KafkaResponsesRebootBroker <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesRebootBroker(__scope: Construct, __resources: string[], __input: KafkaRebootBrokerRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaRebootBrokerRequest`](#aws-cdk-sdk.kafka.KafkaRebootBrokerRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesRebootBroker.property.clusterOperationArn"></a>

- *Type:* `string`

---


### KafkaResponsesUpdateBrokerCount <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateBrokerCount(__scope: Construct, __resources: string[], __input: KafkaUpdateBrokerCountRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest`](#aws-cdk-sdk.kafka.KafkaUpdateBrokerCountRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerCount.property.clusterOperationArn"></a>

- *Type:* `string`

---


### KafkaResponsesUpdateBrokerStorage <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateBrokerStorage(__scope: Construct, __resources: string[], __input: KafkaUpdateBrokerStorageRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest`](#aws-cdk-sdk.kafka.KafkaUpdateBrokerStorageRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateBrokerStorage.property.clusterOperationArn"></a>

- *Type:* `string`

---


### KafkaResponsesUpdateClusterConfiguration <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateClusterConfiguration(__scope: Construct, __resources: string[], __input: KafkaUpdateClusterConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaUpdateClusterConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterConfiguration.property.clusterOperationArn"></a>

- *Type:* `string`

---


### KafkaResponsesUpdateClusterKafkaVersion <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateClusterKafkaVersion(__scope: Construct, __resources: string[], __input: KafkaUpdateClusterKafkaVersionRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest`](#aws-cdk-sdk.kafka.KafkaUpdateClusterKafkaVersionRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateClusterKafkaVersion.property.clusterOperationArn"></a>

- *Type:* `string`

---


### KafkaResponsesUpdateConfiguration <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateConfiguration(__scope: Construct, __resources: string[], __input: KafkaUpdateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `arn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration.property.arn"></a>

- *Type:* `string`

---

##### `latestRevision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfiguration.property.latestRevision"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision`](#aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision)

---


### KafkaResponsesUpdateConfigurationLatestRevision <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateConfigurationLatestRevision(__scope: Construct, __resources: string[], __input: KafkaUpdateConfigurationRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest`](#aws-cdk-sdk.kafka.KafkaUpdateConfigurationRequest)

---



#### Properties <a name="Properties"></a>

##### `creationTime`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.property.creationTime"></a>

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.property.description"></a>

- *Type:* `string`

---

##### `revision`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateConfigurationLatestRevision.property.revision"></a>

- *Type:* `number`

---


### KafkaResponsesUpdateMonitoring <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring"></a>

#### Initializer <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring.Initializer"></a>

```typescript
import { kafka } from 'aws-cdk-sdk'

new kafka.KafkaResponsesUpdateMonitoring(__scope: Construct, __resources: string[], __input: KafkaUpdateMonitoringRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest`](#aws-cdk-sdk.kafka.KafkaUpdateMonitoringRequest)

---



#### Properties <a name="Properties"></a>

##### `clusterArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring.property.clusterArn"></a>

- *Type:* `string`

---

##### `clusterOperationArn`<sup>Required</sup> <a name="aws-cdk-sdk.kafka.KafkaResponsesUpdateMonitoring.property.clusterOperationArn"></a>

- *Type:* `string`

---



