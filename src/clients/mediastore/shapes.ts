/**
 * @schema MediaStoreCreateContainerInput
 */
export interface MediaStoreCreateContainerInput {
  /**
   * @schema MediaStoreCreateContainerInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema MediaStoreCreateContainerInput#Tags
   */
  readonly tags?: MediaStoreTag[];

}

/**
 * @schema MediaStoreCreateContainerOutput
 */
export interface MediaStoreCreateContainerOutput {
  /**
   * @schema MediaStoreCreateContainerOutput#Container
   */
  readonly container: MediaStoreContainer;

}

/**
 * @schema MediaStoreDeleteContainerInput
 */
export interface MediaStoreDeleteContainerInput {
  /**
   * @schema MediaStoreDeleteContainerInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreDeleteContainerOutput
 */
export interface MediaStoreDeleteContainerOutput {
}

/**
 * @schema MediaStoreDeleteContainerPolicyInput
 */
export interface MediaStoreDeleteContainerPolicyInput {
  /**
   * @schema MediaStoreDeleteContainerPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreDeleteContainerPolicyOutput
 */
export interface MediaStoreDeleteContainerPolicyOutput {
}

/**
 * @schema MediaStoreDeleteCorsPolicyInput
 */
export interface MediaStoreDeleteCorsPolicyInput {
  /**
   * @schema MediaStoreDeleteCorsPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreDeleteCorsPolicyOutput
 */
export interface MediaStoreDeleteCorsPolicyOutput {
}

/**
 * @schema MediaStoreDeleteLifecyclePolicyInput
 */
export interface MediaStoreDeleteLifecyclePolicyInput {
  /**
   * @schema MediaStoreDeleteLifecyclePolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreDeleteLifecyclePolicyOutput
 */
export interface MediaStoreDeleteLifecyclePolicyOutput {
}

/**
 * @schema MediaStoreDeleteMetricPolicyInput
 */
export interface MediaStoreDeleteMetricPolicyInput {
  /**
   * @schema MediaStoreDeleteMetricPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreDeleteMetricPolicyOutput
 */
export interface MediaStoreDeleteMetricPolicyOutput {
}

/**
 * @schema MediaStoreDescribeContainerInput
 */
export interface MediaStoreDescribeContainerInput {
  /**
   * @schema MediaStoreDescribeContainerInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * @schema MediaStoreDescribeContainerOutput
 */
export interface MediaStoreDescribeContainerOutput {
  /**
   * @schema MediaStoreDescribeContainerOutput#Container
   */
  readonly container?: MediaStoreContainer;

}

/**
 * @schema MediaStoreGetContainerPolicyInput
 */
export interface MediaStoreGetContainerPolicyInput {
  /**
   * @schema MediaStoreGetContainerPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreGetContainerPolicyOutput
 */
export interface MediaStoreGetContainerPolicyOutput {
  /**
   * @schema MediaStoreGetContainerPolicyOutput#Policy
   */
  readonly policy: string;

}

/**
 * @schema MediaStoreGetCorsPolicyInput
 */
export interface MediaStoreGetCorsPolicyInput {
  /**
   * @schema MediaStoreGetCorsPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreGetCorsPolicyOutput
 */
export interface MediaStoreGetCorsPolicyOutput {
  /**
   * @schema MediaStoreGetCorsPolicyOutput#CorsPolicy
   */
  readonly corsPolicy: MediaStoreCorsRule[];

}

/**
 * @schema MediaStoreGetLifecyclePolicyInput
 */
export interface MediaStoreGetLifecyclePolicyInput {
  /**
   * @schema MediaStoreGetLifecyclePolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreGetLifecyclePolicyOutput
 */
export interface MediaStoreGetLifecyclePolicyOutput {
  /**
   * @schema MediaStoreGetLifecyclePolicyOutput#LifecyclePolicy
   */
  readonly lifecyclePolicy: string;

}

/**
 * @schema MediaStoreGetMetricPolicyInput
 */
export interface MediaStoreGetMetricPolicyInput {
  /**
   * @schema MediaStoreGetMetricPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreGetMetricPolicyOutput
 */
export interface MediaStoreGetMetricPolicyOutput {
  /**
   * @schema MediaStoreGetMetricPolicyOutput#MetricPolicy
   */
  readonly metricPolicy: MediaStoreMetricPolicy;

}

/**
 * @schema MediaStoreListContainersInput
 */
export interface MediaStoreListContainersInput {
  /**
   * @schema MediaStoreListContainersInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MediaStoreListContainersInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema MediaStoreListContainersOutput
 */
export interface MediaStoreListContainersOutput {
  /**
   * @schema MediaStoreListContainersOutput#Containers
   */
  readonly containers: MediaStoreContainer[];

  /**
   * @schema MediaStoreListContainersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MediaStoreListTagsForResourceInput
 */
export interface MediaStoreListTagsForResourceInput {
  /**
   * @schema MediaStoreListTagsForResourceInput#Resource
   */
  readonly resource: string;

}

/**
 * @schema MediaStoreListTagsForResourceOutput
 */
export interface MediaStoreListTagsForResourceOutput {
  /**
   * @schema MediaStoreListTagsForResourceOutput#Tags
   */
  readonly tags?: MediaStoreTag[];

}

/**
 * @schema MediaStorePutContainerPolicyInput
 */
export interface MediaStorePutContainerPolicyInput {
  /**
   * @schema MediaStorePutContainerPolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema MediaStorePutContainerPolicyInput#Policy
   */
  readonly policy: string;

}

/**
 * @schema MediaStorePutContainerPolicyOutput
 */
export interface MediaStorePutContainerPolicyOutput {
}

/**
 * @schema MediaStorePutCorsPolicyInput
 */
export interface MediaStorePutCorsPolicyInput {
  /**
   * @schema MediaStorePutCorsPolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema MediaStorePutCorsPolicyInput#CorsPolicy
   */
  readonly corsPolicy: MediaStoreCorsRule[];

}

/**
 * @schema MediaStorePutCorsPolicyOutput
 */
export interface MediaStorePutCorsPolicyOutput {
}

/**
 * @schema MediaStorePutLifecyclePolicyInput
 */
export interface MediaStorePutLifecyclePolicyInput {
  /**
   * @schema MediaStorePutLifecyclePolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema MediaStorePutLifecyclePolicyInput#LifecyclePolicy
   */
  readonly lifecyclePolicy: string;

}

/**
 * @schema MediaStorePutLifecyclePolicyOutput
 */
export interface MediaStorePutLifecyclePolicyOutput {
}

/**
 * @schema MediaStorePutMetricPolicyInput
 */
export interface MediaStorePutMetricPolicyInput {
  /**
   * @schema MediaStorePutMetricPolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema MediaStorePutMetricPolicyInput#MetricPolicy
   */
  readonly metricPolicy: MediaStoreMetricPolicy;

}

/**
 * @schema MediaStorePutMetricPolicyOutput
 */
export interface MediaStorePutMetricPolicyOutput {
}

/**
 * @schema MediaStoreStartAccessLoggingInput
 */
export interface MediaStoreStartAccessLoggingInput {
  /**
   * @schema MediaStoreStartAccessLoggingInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreStartAccessLoggingOutput
 */
export interface MediaStoreStartAccessLoggingOutput {
}

/**
 * @schema MediaStoreStopAccessLoggingInput
 */
export interface MediaStoreStopAccessLoggingInput {
  /**
   * @schema MediaStoreStopAccessLoggingInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema MediaStoreStopAccessLoggingOutput
 */
export interface MediaStoreStopAccessLoggingOutput {
}

/**
 * @schema MediaStoreTagResourceInput
 */
export interface MediaStoreTagResourceInput {
  /**
   * @schema MediaStoreTagResourceInput#Resource
   */
  readonly resource: string;

  /**
   * @schema MediaStoreTagResourceInput#Tags
   */
  readonly tags: MediaStoreTag[];

}

/**
 * @schema MediaStoreTagResourceOutput
 */
export interface MediaStoreTagResourceOutput {
}

/**
 * @schema MediaStoreUntagResourceInput
 */
export interface MediaStoreUntagResourceInput {
  /**
   * @schema MediaStoreUntagResourceInput#Resource
   */
  readonly resource: string;

  /**
   * @schema MediaStoreUntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema MediaStoreUntagResourceOutput
 */
export interface MediaStoreUntagResourceOutput {
}

/**
 * @schema MediaStoreTag
 */
export interface MediaStoreTag {
  /**
   * @schema MediaStoreTag#Key
   */
  readonly key: string;

  /**
   * @schema MediaStoreTag#Value
   */
  readonly value?: string;

}

/**
 * @schema MediaStoreContainer
 */
export interface MediaStoreContainer {
  /**
   * @schema MediaStoreContainer#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema MediaStoreContainer#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema MediaStoreContainer#ARN
   */
  readonly arn?: string;

  /**
   * @schema MediaStoreContainer#Name
   */
  readonly name?: string;

  /**
   * @schema MediaStoreContainer#Status
   */
  readonly status?: string;

  /**
   * @schema MediaStoreContainer#AccessLoggingEnabled
   */
  readonly accessLoggingEnabled?: boolean;

}

/**
 * @schema MediaStoreCorsRule
 */
export interface MediaStoreCorsRule {
  /**
   * @schema MediaStoreCorsRule#AllowedOrigins
   */
  readonly allowedOrigins: string[];

  /**
   * @schema MediaStoreCorsRule#AllowedMethods
   */
  readonly allowedMethods?: string[];

  /**
   * @schema MediaStoreCorsRule#AllowedHeaders
   */
  readonly allowedHeaders: string[];

  /**
   * @schema MediaStoreCorsRule#MaxAgeSeconds
   */
  readonly maxAgeSeconds?: number;

  /**
   * @schema MediaStoreCorsRule#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

}

/**
 * @schema MediaStoreMetricPolicy
 */
export interface MediaStoreMetricPolicy {
  /**
   * @schema MediaStoreMetricPolicy#ContainerLevelMetrics
   */
  readonly containerLevelMetrics: string;

  /**
   * @schema MediaStoreMetricPolicy#MetricPolicyRules
   */
  readonly metricPolicyRules?: MediaStoreMetricPolicyRule[];

}

/**
 * @schema MediaStoreMetricPolicyRule
 */
export interface MediaStoreMetricPolicyRule {
  /**
   * @schema MediaStoreMetricPolicyRule#ObjectGroup
   */
  readonly objectGroup: string;

  /**
   * @schema MediaStoreMetricPolicyRule#ObjectGroupName
   */
  readonly objectGroupName: string;

}
