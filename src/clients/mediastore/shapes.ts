/**
 * @schema CreateContainerInput
 */
export interface CreateContainerInput {
  /**
   * @schema CreateContainerInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema CreateContainerInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateContainerOutput
 */
export interface CreateContainerOutput {
  /**
   * @schema CreateContainerOutput#Container
   */
  readonly container: Container;

}

/**
 * @schema DeleteContainerInput
 */
export interface DeleteContainerInput {
  /**
   * @schema DeleteContainerInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema DeleteContainerOutput
 */
export interface DeleteContainerOutput {
}

/**
 * @schema DeleteContainerPolicyInput
 */
export interface DeleteContainerPolicyInput {
  /**
   * @schema DeleteContainerPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema DeleteContainerPolicyOutput
 */
export interface DeleteContainerPolicyOutput {
}

/**
 * @schema DeleteCorsPolicyInput
 */
export interface DeleteCorsPolicyInput {
  /**
   * @schema DeleteCorsPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema DeleteCorsPolicyOutput
 */
export interface DeleteCorsPolicyOutput {
}

/**
 * @schema DeleteLifecyclePolicyInput
 */
export interface DeleteLifecyclePolicyInput {
  /**
   * @schema DeleteLifecyclePolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema DeleteLifecyclePolicyOutput
 */
export interface DeleteLifecyclePolicyOutput {
}

/**
 * @schema DeleteMetricPolicyInput
 */
export interface DeleteMetricPolicyInput {
  /**
   * @schema DeleteMetricPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema DeleteMetricPolicyOutput
 */
export interface DeleteMetricPolicyOutput {
}

/**
 * @schema DescribeContainerInput
 */
export interface DescribeContainerInput {
  /**
   * @schema DescribeContainerInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * @schema DescribeContainerOutput
 */
export interface DescribeContainerOutput {
  /**
   * @schema DescribeContainerOutput#Container
   */
  readonly container?: Container;

}

/**
 * @schema GetContainerPolicyInput
 */
export interface GetContainerPolicyInput {
  /**
   * @schema GetContainerPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema GetContainerPolicyOutput
 */
export interface GetContainerPolicyOutput {
  /**
   * @schema GetContainerPolicyOutput#Policy
   */
  readonly policy: string;

}

/**
 * @schema GetCorsPolicyInput
 */
export interface GetCorsPolicyInput {
  /**
   * @schema GetCorsPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema GetCorsPolicyOutput
 */
export interface GetCorsPolicyOutput {
  /**
   * @schema GetCorsPolicyOutput#CorsPolicy
   */
  readonly corsPolicy: CorsRule[];

}

/**
 * @schema GetLifecyclePolicyInput
 */
export interface GetLifecyclePolicyInput {
  /**
   * @schema GetLifecyclePolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema GetLifecyclePolicyOutput
 */
export interface GetLifecyclePolicyOutput {
  /**
   * @schema GetLifecyclePolicyOutput#LifecyclePolicy
   */
  readonly lifecyclePolicy: string;

}

/**
 * @schema GetMetricPolicyInput
 */
export interface GetMetricPolicyInput {
  /**
   * @schema GetMetricPolicyInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema GetMetricPolicyOutput
 */
export interface GetMetricPolicyOutput {
  /**
   * @schema GetMetricPolicyOutput#MetricPolicy
   */
  readonly metricPolicy: MetricPolicy;

}

/**
 * @schema ListContainersInput
 */
export interface ListContainersInput {
  /**
   * @schema ListContainersInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListContainersInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListContainersOutput
 */
export interface ListContainersOutput {
  /**
   * @schema ListContainersOutput#Containers
   */
  readonly containers: Container[];

  /**
   * @schema ListContainersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#Resource
   */
  readonly resource: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutContainerPolicyInput
 */
export interface PutContainerPolicyInput {
  /**
   * @schema PutContainerPolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema PutContainerPolicyInput#Policy
   */
  readonly policy: string;

}

/**
 * @schema PutContainerPolicyOutput
 */
export interface PutContainerPolicyOutput {
}

/**
 * @schema PutCorsPolicyInput
 */
export interface PutCorsPolicyInput {
  /**
   * @schema PutCorsPolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema PutCorsPolicyInput#CorsPolicy
   */
  readonly corsPolicy: CorsRule[];

}

/**
 * @schema PutCorsPolicyOutput
 */
export interface PutCorsPolicyOutput {
}

/**
 * @schema PutLifecyclePolicyInput
 */
export interface PutLifecyclePolicyInput {
  /**
   * @schema PutLifecyclePolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema PutLifecyclePolicyInput#LifecyclePolicy
   */
  readonly lifecyclePolicy: string;

}

/**
 * @schema PutLifecyclePolicyOutput
 */
export interface PutLifecyclePolicyOutput {
}

/**
 * @schema PutMetricPolicyInput
 */
export interface PutMetricPolicyInput {
  /**
   * @schema PutMetricPolicyInput#ContainerName
   */
  readonly containerName: string;

  /**
   * @schema PutMetricPolicyInput#MetricPolicy
   */
  readonly metricPolicy: MetricPolicy;

}

/**
 * @schema PutMetricPolicyOutput
 */
export interface PutMetricPolicyOutput {
}

/**
 * @schema StartAccessLoggingInput
 */
export interface StartAccessLoggingInput {
  /**
   * @schema StartAccessLoggingInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema StartAccessLoggingOutput
 */
export interface StartAccessLoggingOutput {
}

/**
 * @schema StopAccessLoggingInput
 */
export interface StopAccessLoggingInput {
  /**
   * @schema StopAccessLoggingInput#ContainerName
   */
  readonly containerName: string;

}

/**
 * @schema StopAccessLoggingOutput
 */
export interface StopAccessLoggingOutput {
}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#Resource
   */
  readonly resource: string;

  /**
   * @schema TagResourceInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceOutput
 */
export interface TagResourceOutput {
}

/**
 * @schema UntagResourceInput
 */
export interface UntagResourceInput {
  /**
   * @schema UntagResourceInput#Resource
   */
  readonly resource: string;

  /**
   * @schema UntagResourceInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema Container
 */
export interface Container {
  /**
   * @schema Container#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Container#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Container#ARN
   */
  readonly arn?: string;

  /**
   * @schema Container#Name
   */
  readonly name?: string;

  /**
   * @schema Container#Status
   */
  readonly status?: string;

  /**
   * @schema Container#AccessLoggingEnabled
   */
  readonly accessLoggingEnabled?: boolean;

}

/**
 * @schema CorsRule
 */
export interface CorsRule {
  /**
   * @schema CorsRule#AllowedOrigins
   */
  readonly allowedOrigins: string[];

  /**
   * @schema CorsRule#AllowedMethods
   */
  readonly allowedMethods?: string[];

  /**
   * @schema CorsRule#AllowedHeaders
   */
  readonly allowedHeaders: string[];

  /**
   * @schema CorsRule#MaxAgeSeconds
   */
  readonly maxAgeSeconds?: number;

  /**
   * @schema CorsRule#ExposeHeaders
   */
  readonly exposeHeaders?: string[];

}

/**
 * @schema MetricPolicy
 */
export interface MetricPolicy {
  /**
   * @schema MetricPolicy#ContainerLevelMetrics
   */
  readonly containerLevelMetrics: string;

  /**
   * @schema MetricPolicy#MetricPolicyRules
   */
  readonly metricPolicyRules?: MetricPolicyRule[];

}

/**
 * @schema MetricPolicyRule
 */
export interface MetricPolicyRule {
  /**
   * @schema MetricPolicyRule#ObjectGroup
   */
  readonly objectGroup: string;

  /**
   * @schema MetricPolicyRule#ObjectGroupName
   */
  readonly objectGroupName: string;

}
