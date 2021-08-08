# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### ComputeOptimizerClient <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerClient(scope: Construct, id: string, __resources: string[])
```

##### `scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.id"></a>

- *Type:* `string`

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.__resources"></a>

- *Type:* `string`[]

---

#### Methods <a name="Methods"></a>

##### `describeRecommendationExportJobs` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.describeRecommendationExportJobs"></a>

```typescript
public describeRecommendationExportJobs(input: ComputeOptimizerDescribeRecommendationExportJobsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest)

---

##### `exportAutoScalingGroupRecommendations` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.exportAutoScalingGroupRecommendations"></a>

```typescript
public exportAutoScalingGroupRecommendations(input: ComputeOptimizerExportAutoScalingGroupRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest)

---

##### `exportEc2InstanceRecommendations` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.exportEc2InstanceRecommendations"></a>

```typescript
public exportEc2InstanceRecommendations(input: ComputeOptimizerExportEc2InstanceRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest)

---

##### `fetchAutoScalingGroupRecommendations` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.fetchAutoScalingGroupRecommendations"></a>

```typescript
public fetchAutoScalingGroupRecommendations(input: ComputeOptimizerGetAutoScalingGroupRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest)

---

##### `fetchEc2InstanceRecommendations` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.fetchEc2InstanceRecommendations"></a>

```typescript
public fetchEc2InstanceRecommendations(input: ComputeOptimizerGetEc2InstanceRecommendationsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest)

---

##### `fetchEc2RecommendationProjectedMetrics` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.fetchEc2RecommendationProjectedMetrics"></a>

```typescript
public fetchEc2RecommendationProjectedMetrics(input: ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest)

---

##### `fetchEnrollmentStatus` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.fetchEnrollmentStatus"></a>

```typescript
public fetchEnrollmentStatus()
```

##### `fetchRecommendationSummaries` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.fetchRecommendationSummaries"></a>

```typescript
public fetchRecommendationSummaries(input: ComputeOptimizerGetRecommendationSummariesRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest)

---

##### `updateEnrollmentStatus` <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.updateEnrollmentStatus"></a>

```typescript
public updateEnrollmentStatus(input: ComputeOptimizerUpdateEnrollmentStatusRequest)
```

###### `input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerClient.parameter.input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest)

---




## Structs <a name="Structs"></a>

### ComputeOptimizerAutoScalingGroupConfiguration <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerAutoScalingGroupConfiguration: computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration = { ... }
```

##### `desiredCapacity`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration.property.desiredCapacity"></a>

- *Type:* `number`

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration.property.instanceType"></a>

- *Type:* `string`

---

##### `maxSize`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration.property.maxSize"></a>

- *Type:* `number`

---

##### `minSize`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration.property.minSize"></a>

- *Type:* `number`

---

### ComputeOptimizerAutoScalingGroupRecommendation <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerAutoScalingGroupRecommendation: computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.accountId"></a>

- *Type:* `string`

---

##### `autoScalingGroupArn`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.autoScalingGroupArn"></a>

- *Type:* `string`

---

##### `autoScalingGroupName`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.autoScalingGroupName"></a>

- *Type:* `string`

---

##### `currentConfiguration`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.currentConfiguration"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration)

---

##### `finding`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.finding"></a>

- *Type:* `string`

---

##### `lastRefreshTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.lastRefreshTimestamp"></a>

- *Type:* `string`

---

##### `lookBackPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.lookBackPeriodInDays"></a>

- *Type:* `number`

---

##### `recommendationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.recommendationOptions"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption)[]

---

##### `utilizationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation.property.utilizationMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric)[]

---

### ComputeOptimizerAutoScalingGroupRecommendationOption <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerAutoScalingGroupRecommendationOption: computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption = { ... }
```

##### `configuration`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption.property.configuration"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupConfiguration)

---

##### `performanceRisk`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption.property.performanceRisk"></a>

- *Type:* `number`

---

##### `projectedUtilizationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption.property.projectedUtilizationMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric)[]

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendationOption.property.rank"></a>

- *Type:* `number`

---

### ComputeOptimizerDescribeRecommendationExportJobsRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerDescribeRecommendationExportJobsRequest: computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest = { ... }
```

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerJobFilter`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerJobFilter)[]

---

##### `jobIds`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest.property.jobIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComputeOptimizerDescribeRecommendationExportJobsResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerDescribeRecommendationExportJobsResponse: computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationExportJobs`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsResponse.property.recommendationExportJobs"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob)[]

---

### ComputeOptimizerExportAutoScalingGroupRecommendationsRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerExportAutoScalingGroupRecommendationsRequest: computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest = { ... }
```

##### `s3DestinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest.property.s3DestinationConfig"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig)

---

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `fieldsToExport`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest.property.fieldsToExport"></a>

- *Type:* `string`[]

---

##### `fileFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest.property.fileFormat"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter)[]

---

##### `includeMemberAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest.property.includeMemberAccounts"></a>

- *Type:* `boolean`

---

### ComputeOptimizerExportAutoScalingGroupRecommendationsResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerExportAutoScalingGroupRecommendationsResponse: computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsResponse.property.jobId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsResponse.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination)

---

### ComputeOptimizerExportDestination <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportDestination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerExportDestination: computeoptimizer.ComputeOptimizerExportDestination = { ... }
```

##### `s3`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportDestination.property.s3"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination)

---

### ComputeOptimizerExportEc2InstanceRecommendationsRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerExportEc2InstanceRecommendationsRequest: computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest = { ... }
```

##### `s3DestinationConfig`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest.property.s3DestinationConfig"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig)

---

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `fieldsToExport`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest.property.fieldsToExport"></a>

- *Type:* `string`[]

---

##### `fileFormat`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest.property.fileFormat"></a>

- *Type:* `string`

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter)[]

---

##### `includeMemberAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest.property.includeMemberAccounts"></a>

- *Type:* `boolean`

---

### ComputeOptimizerExportEc2InstanceRecommendationsResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerExportEc2InstanceRecommendationsResponse: computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsResponse = { ... }
```

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsResponse.property.jobId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsResponse.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination)

---

### ComputeOptimizerFilter <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerFilter: computeoptimizer.ComputeOptimizerFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter.property.values"></a>

- *Type:* `string`[]

---

### ComputeOptimizerGetAutoScalingGroupRecommendationsRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetAutoScalingGroupRecommendationsRequest: computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `autoScalingGroupArns`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest.property.autoScalingGroupArns"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter)[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComputeOptimizerGetAutoScalingGroupRecommendationsResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetAutoScalingGroupRecommendationsResponse: computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsResponse = { ... }
```

##### `autoScalingGroupRecommendations`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsResponse.property.autoScalingGroupRecommendations"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation)[]

---

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComputeOptimizerGetEc2InstanceRecommendationsRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetEc2InstanceRecommendationsRequest: computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `filters`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest.property.filters"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerFilter)[]

---

##### `instanceArns`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest.property.instanceArns"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComputeOptimizerGetEc2InstanceRecommendationsResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetEc2InstanceRecommendationsResponse: computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsResponse = { ... }
```

##### `errors`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsResponse.property.errors"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError)[]

---

##### `instanceRecommendations`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsResponse.property.instanceRecommendations"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation)[]

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsResponse.property.nextToken"></a>

- *Type:* `string`

---

### ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetEc2RecommendationProjectedMetricsRequest: computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest = { ... }
```

##### `endTime`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest.property.endTime"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest.property.instanceArn"></a>

- *Type:* `string`

---

##### `period`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest.property.period"></a>

- *Type:* `number`

---

##### `startTime`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest.property.startTime"></a>

- *Type:* `string`

---

##### `stat`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest.property.stat"></a>

- *Type:* `string`

---

### ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetEc2RecommendationProjectedMetricsResponse: computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse = { ... }
```

##### `recommendedOptionProjectedMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsResponse.property.recommendedOptionProjectedMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric)[]

---

### ComputeOptimizerGetEnrollmentStatusRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEnrollmentStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetEnrollmentStatusRequest: computeoptimizer.ComputeOptimizerGetEnrollmentStatusRequest = { ... }
```

### ComputeOptimizerGetEnrollmentStatusResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEnrollmentStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetEnrollmentStatusResponse: computeoptimizer.ComputeOptimizerGetEnrollmentStatusResponse = { ... }
```

##### `memberAccountsEnrolled`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEnrollmentStatusResponse.property.memberAccountsEnrolled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEnrollmentStatusResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEnrollmentStatusResponse.property.statusReason"></a>

- *Type:* `string`

---

### ComputeOptimizerGetRecommendationError <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetRecommendationError: computeoptimizer.ComputeOptimizerGetRecommendationError = { ... }
```

##### `code`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError.property.code"></a>

- *Type:* `string`

---

##### `identifier`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError.property.identifier"></a>

- *Type:* `string`

---

##### `message`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError.property.message"></a>

- *Type:* `string`

---

### ComputeOptimizerGetRecommendationSummariesRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetRecommendationSummariesRequest: computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest = { ... }
```

##### `accountIds`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest.property.accountIds"></a>

- *Type:* `string`[]

---

##### `maxResults`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest.property.maxResults"></a>

- *Type:* `number`

---

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest.property.nextToken"></a>

- *Type:* `string`

---

### ComputeOptimizerGetRecommendationSummariesResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerGetRecommendationSummariesResponse: computeoptimizer.ComputeOptimizerGetRecommendationSummariesResponse = { ... }
```

##### `nextToken`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesResponse.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationSummaries`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesResponse.property.recommendationSummaries"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary)[]

---

### ComputeOptimizerInstanceRecommendation <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerInstanceRecommendation: computeoptimizer.ComputeOptimizerInstanceRecommendation = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.accountId"></a>

- *Type:* `string`

---

##### `currentInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.currentInstanceType"></a>

- *Type:* `string`

---

##### `finding`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.finding"></a>

- *Type:* `string`

---

##### `instanceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.instanceArn"></a>

- *Type:* `string`

---

##### `instanceName`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.instanceName"></a>

- *Type:* `string`

---

##### `lastRefreshTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.lastRefreshTimestamp"></a>

- *Type:* `string`

---

##### `lookBackPeriodInDays`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.lookBackPeriodInDays"></a>

- *Type:* `number`

---

##### `recommendationOptions`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.recommendationOptions"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption)[]

---

##### `recommendationSources`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.recommendationSources"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSource`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSource)[]

---

##### `utilizationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation.property.utilizationMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric)[]

---

### ComputeOptimizerInstanceRecommendationOption <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerInstanceRecommendationOption: computeoptimizer.ComputeOptimizerInstanceRecommendationOption = { ... }
```

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption.property.instanceType"></a>

- *Type:* `string`

---

##### `performanceRisk`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption.property.performanceRisk"></a>

- *Type:* `number`

---

##### `projectedUtilizationMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption.property.projectedUtilizationMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric)[]

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendationOption.property.rank"></a>

- *Type:* `number`

---

### ComputeOptimizerJobFilter <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerJobFilter"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerJobFilter: computeoptimizer.ComputeOptimizerJobFilter = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerJobFilter.property.name"></a>

- *Type:* `string`

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerJobFilter.property.values"></a>

- *Type:* `string`[]

---

### ComputeOptimizerProjectedMetric <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerProjectedMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerProjectedMetric: computeoptimizer.ComputeOptimizerProjectedMetric = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerProjectedMetric.property.name"></a>

- *Type:* `string`

---

##### `timestamps`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerProjectedMetric.property.timestamps"></a>

- *Type:* `string`[]

---

##### `values`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerProjectedMetric.property.values"></a>

- *Type:* `number`[]

---

### ComputeOptimizerRecommendationExportJob <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerRecommendationExportJob: computeoptimizer.ComputeOptimizerRecommendationExportJob = { ... }
```

##### `creationTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.creationTimestamp"></a>

- *Type:* `string`

---

##### `destination`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.destination"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportDestination`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportDestination)

---

##### `failureReason`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.failureReason"></a>

- *Type:* `string`

---

##### `jobId`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.jobId"></a>

- *Type:* `string`

---

##### `lastUpdatedTimestamp`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.lastUpdatedTimestamp"></a>

- *Type:* `string`

---

##### `resourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.resourceType"></a>

- *Type:* `string`

---

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob.property.status"></a>

- *Type:* `string`

---

### ComputeOptimizerRecommendationSource <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSource"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerRecommendationSource: computeoptimizer.ComputeOptimizerRecommendationSource = { ... }
```

##### `recommendationSourceArn`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSource.property.recommendationSourceArn"></a>

- *Type:* `string`

---

##### `recommendationSourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSource.property.recommendationSourceType"></a>

- *Type:* `string`

---

### ComputeOptimizerRecommendationSummary <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerRecommendationSummary: computeoptimizer.ComputeOptimizerRecommendationSummary = { ... }
```

##### `accountId`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary.property.accountId"></a>

- *Type:* `string`

---

##### `recommendationResourceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary.property.recommendationResourceType"></a>

- *Type:* `string`

---

##### `summaries`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary.property.summaries"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerSummary`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerSummary)[]

---

### ComputeOptimizerRecommendedOptionProjectedMetric <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerRecommendedOptionProjectedMetric: computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric = { ... }
```

##### `projectedMetrics`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric.property.projectedMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerProjectedMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerProjectedMetric)[]

---

##### `rank`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric.property.rank"></a>

- *Type:* `number`

---

##### `recommendedInstanceType`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric.property.recommendedInstanceType"></a>

- *Type:* `string`

---

### ComputeOptimizerS3Destination <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerS3Destination: computeoptimizer.ComputeOptimizerS3Destination = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination.property.key"></a>

- *Type:* `string`

---

##### `metadataKey`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3Destination.property.metadataKey"></a>

- *Type:* `string`

---

### ComputeOptimizerS3DestinationConfig <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerS3DestinationConfig: computeoptimizer.ComputeOptimizerS3DestinationConfig = { ... }
```

##### `bucket`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig.property.bucket"></a>

- *Type:* `string`

---

##### `keyPrefix`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerS3DestinationConfig.property.keyPrefix"></a>

- *Type:* `string`

---

### ComputeOptimizerSummary <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerSummary"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerSummary: computeoptimizer.ComputeOptimizerSummary = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerSummary.property.name"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerSummary.property.value"></a>

- *Type:* `number`

---

### ComputeOptimizerUpdateEnrollmentStatusRequest <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerUpdateEnrollmentStatusRequest: computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest = { ... }
```

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest.property.status"></a>

- *Type:* `string`

---

##### `includeMemberAccounts`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest.property.includeMemberAccounts"></a>

- *Type:* `boolean`

---

### ComputeOptimizerUpdateEnrollmentStatusResponse <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusResponse"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerUpdateEnrollmentStatusResponse: computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusResponse = { ... }
```

##### `status`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusResponse.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusResponse.property.statusReason"></a>

- *Type:* `string`

---

### ComputeOptimizerUtilizationMetric <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

const computeOptimizerUtilizationMetric: computeoptimizer.ComputeOptimizerUtilizationMetric = { ... }
```

##### `name`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric.property.name"></a>

- *Type:* `string`

---

##### `statistic`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric.property.statistic"></a>

- *Type:* `string`

---

##### `value`<sup>Optional</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerUtilizationMetric.property.value"></a>

- *Type:* `number`

---

## Classes <a name="Classes"></a>

### ComputeOptimizerResponsesDescribeRecommendationExportJobs <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs(__scope: Construct, __resources: string[], __input: ComputeOptimizerDescribeRecommendationExportJobsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerDescribeRecommendationExportJobsRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationExportJobs`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesDescribeRecommendationExportJobs.property.recommendationExportJobs"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationExportJob)[]

---


### ComputeOptimizerResponsesExportAutoScalingGroupRecommendations <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations(__scope: Construct, __resources: string[], __input: ComputeOptimizerExportAutoScalingGroupRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations.property.jobId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendations.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination)

---


### ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination(__scope: Construct, __resources: string[], __input: ComputeOptimizerExportAutoScalingGroupRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportAutoScalingGroupRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.property.key"></a>

- *Type:* `string`

---

##### `metadataKey`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportAutoScalingGroupRecommendationsS3Destination.property.metadataKey"></a>

- *Type:* `string`

---


### ComputeOptimizerResponsesExportEc2InstanceRecommendations <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations(__scope: Construct, __resources: string[], __input: ComputeOptimizerExportEc2InstanceRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `jobId`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations.property.jobId"></a>

- *Type:* `string`

---

##### `s3Destination`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendations.property.s3Destination"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination)

---


### ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination(__scope: Construct, __resources: string[], __input: ComputeOptimizerExportEc2InstanceRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerExportEc2InstanceRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.property.bucket"></a>

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.property.key"></a>

- *Type:* `string`

---

##### `metadataKey`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesExportEc2InstanceRecommendationsS3Destination.property.metadataKey"></a>

- *Type:* `string`

---


### ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations(__scope: Construct, __resources: string[], __input: ComputeOptimizerGetAutoScalingGroupRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetAutoScalingGroupRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `autoScalingGroupRecommendations`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.property.autoScalingGroupRecommendations"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerAutoScalingGroupRecommendation)[]

---

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.property.errors"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchAutoScalingGroupRecommendations.property.nextToken"></a>

- *Type:* `string`

---


### ComputeOptimizerResponsesFetchEc2InstanceRecommendations <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations(__scope: Construct, __resources: string[], __input: ComputeOptimizerGetEc2InstanceRecommendationsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2InstanceRecommendationsRequest)

---



#### Properties <a name="Properties"></a>

##### `errors`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.property.errors"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationError)[]

---

##### `instanceRecommendations`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.property.instanceRecommendations"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerInstanceRecommendation)[]

---

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2InstanceRecommendations.property.nextToken"></a>

- *Type:* `string`

---


### ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics(__scope: Construct, __resources: string[], __input: ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetEc2RecommendationProjectedMetricsRequest)

---



#### Properties <a name="Properties"></a>

##### `recommendedOptionProjectedMetrics`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEc2RecommendationProjectedMetrics.property.recommendedOptionProjectedMetrics"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendedOptionProjectedMetric)[]

---


### ComputeOptimizerResponsesFetchEnrollmentStatus <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus(__scope: Construct, __resources: string[])
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus.parameter.__resources"></a>

- *Type:* `string`[]

---



#### Properties <a name="Properties"></a>

##### `memberAccountsEnrolled`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus.property.memberAccountsEnrolled"></a>

- *Type:* `boolean`

---

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchEnrollmentStatus.property.statusReason"></a>

- *Type:* `string`

---


### ComputeOptimizerResponsesFetchRecommendationSummaries <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries(__scope: Construct, __resources: string[], __input: ComputeOptimizerGetRecommendationSummariesRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerGetRecommendationSummariesRequest)

---



#### Properties <a name="Properties"></a>

##### `nextToken`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries.property.nextToken"></a>

- *Type:* `string`

---

##### `recommendationSummaries`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesFetchRecommendationSummaries.property.recommendationSummaries"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerRecommendationSummary)[]

---


### ComputeOptimizerResponsesUpdateEnrollmentStatus <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus"></a>

#### Initializer <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus.Initializer"></a>

```typescript
import { computeoptimizer } from 'aws-cdk-sdk'

new computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus(__scope: Construct, __resources: string[], __input: ComputeOptimizerUpdateEnrollmentStatusRequest)
```

##### `__scope`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus.parameter.__scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `__resources`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus.parameter.__resources"></a>

- *Type:* `string`[]

---

##### `__input`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus.parameter.__input"></a>

- *Type:* [`aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest`](#aws-cdk-sdk.computeoptimizer.ComputeOptimizerUpdateEnrollmentStatusRequest)

---



#### Properties <a name="Properties"></a>

##### `status`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus.property.status"></a>

- *Type:* `string`

---

##### `statusReason`<sup>Required</sup> <a name="aws-cdk-sdk.computeoptimizer.ComputeOptimizerResponsesUpdateEnrollmentStatus.property.statusReason"></a>

- *Type:* `string`

---



