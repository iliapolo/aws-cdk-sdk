/**
 * @schema MediaStoreCreateContainerInput
 */
export interface MediaStoreCreateContainerInput {
  /**
   * @schema MediaStoreCreateContainerInput#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema MediaStoreCreateContainerInput#Tags
   */
  readonly tags?: MediaStoreTag[];

}

/**
 * Converts an object of type 'MediaStoreCreateContainerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreCreateContainerInput(obj: MediaStoreCreateContainerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'Tags': obj.tags?.map(y => toJson_MediaStoreTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreCreateContainerOutput
 */
export interface MediaStoreCreateContainerOutput {
  /**
   * @schema MediaStoreCreateContainerOutput#Container
   */
  readonly container?: MediaStoreContainer;

}

/**
 * Converts an object of type 'MediaStoreCreateContainerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreCreateContainerOutput(obj: MediaStoreCreateContainerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Container': toJson_MediaStoreContainer(obj.container),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteContainerInput
 */
export interface MediaStoreDeleteContainerInput {
  /**
   * @schema MediaStoreDeleteContainerInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreDeleteContainerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteContainerInput(obj: MediaStoreDeleteContainerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteContainerOutput
 */
export interface MediaStoreDeleteContainerOutput {
}

/**
 * Converts an object of type 'MediaStoreDeleteContainerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteContainerOutput(obj: MediaStoreDeleteContainerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteContainerPolicyInput
 */
export interface MediaStoreDeleteContainerPolicyInput {
  /**
   * @schema MediaStoreDeleteContainerPolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreDeleteContainerPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteContainerPolicyInput(obj: MediaStoreDeleteContainerPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteContainerPolicyOutput
 */
export interface MediaStoreDeleteContainerPolicyOutput {
}

/**
 * Converts an object of type 'MediaStoreDeleteContainerPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteContainerPolicyOutput(obj: MediaStoreDeleteContainerPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteCorsPolicyInput
 */
export interface MediaStoreDeleteCorsPolicyInput {
  /**
   * @schema MediaStoreDeleteCorsPolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreDeleteCorsPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteCorsPolicyInput(obj: MediaStoreDeleteCorsPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteCorsPolicyOutput
 */
export interface MediaStoreDeleteCorsPolicyOutput {
}

/**
 * Converts an object of type 'MediaStoreDeleteCorsPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteCorsPolicyOutput(obj: MediaStoreDeleteCorsPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteLifecyclePolicyInput
 */
export interface MediaStoreDeleteLifecyclePolicyInput {
  /**
   * @schema MediaStoreDeleteLifecyclePolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreDeleteLifecyclePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteLifecyclePolicyInput(obj: MediaStoreDeleteLifecyclePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteLifecyclePolicyOutput
 */
export interface MediaStoreDeleteLifecyclePolicyOutput {
}

/**
 * Converts an object of type 'MediaStoreDeleteLifecyclePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteLifecyclePolicyOutput(obj: MediaStoreDeleteLifecyclePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteMetricPolicyInput
 */
export interface MediaStoreDeleteMetricPolicyInput {
  /**
   * @schema MediaStoreDeleteMetricPolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreDeleteMetricPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteMetricPolicyInput(obj: MediaStoreDeleteMetricPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreDeleteMetricPolicyOutput
 */
export interface MediaStoreDeleteMetricPolicyOutput {
}

/**
 * Converts an object of type 'MediaStoreDeleteMetricPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDeleteMetricPolicyOutput(obj: MediaStoreDeleteMetricPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaStoreDescribeContainerInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDescribeContainerInput(obj: MediaStoreDescribeContainerInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaStoreDescribeContainerOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreDescribeContainerOutput(obj: MediaStoreDescribeContainerOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Container': toJson_MediaStoreContainer(obj.container),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetContainerPolicyInput
 */
export interface MediaStoreGetContainerPolicyInput {
  /**
   * @schema MediaStoreGetContainerPolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreGetContainerPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetContainerPolicyInput(obj: MediaStoreGetContainerPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetContainerPolicyOutput
 */
export interface MediaStoreGetContainerPolicyOutput {
  /**
   * @schema MediaStoreGetContainerPolicyOutput#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'MediaStoreGetContainerPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetContainerPolicyOutput(obj: MediaStoreGetContainerPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetCorsPolicyInput
 */
export interface MediaStoreGetCorsPolicyInput {
  /**
   * @schema MediaStoreGetCorsPolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreGetCorsPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetCorsPolicyInput(obj: MediaStoreGetCorsPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetCorsPolicyOutput
 */
export interface MediaStoreGetCorsPolicyOutput {
  /**
   * @schema MediaStoreGetCorsPolicyOutput#CorsPolicy
   */
  readonly corsPolicy?: MediaStoreCorsRule[];

}

/**
 * Converts an object of type 'MediaStoreGetCorsPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetCorsPolicyOutput(obj: MediaStoreGetCorsPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CorsPolicy': obj.corsPolicy?.map(y => toJson_MediaStoreCorsRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetLifecyclePolicyInput
 */
export interface MediaStoreGetLifecyclePolicyInput {
  /**
   * @schema MediaStoreGetLifecyclePolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreGetLifecyclePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetLifecyclePolicyInput(obj: MediaStoreGetLifecyclePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetLifecyclePolicyOutput
 */
export interface MediaStoreGetLifecyclePolicyOutput {
  /**
   * @schema MediaStoreGetLifecyclePolicyOutput#LifecyclePolicy
   */
  readonly lifecyclePolicy?: string;

}

/**
 * Converts an object of type 'MediaStoreGetLifecyclePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetLifecyclePolicyOutput(obj: MediaStoreGetLifecyclePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LifecyclePolicy': obj.lifecyclePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetMetricPolicyInput
 */
export interface MediaStoreGetMetricPolicyInput {
  /**
   * @schema MediaStoreGetMetricPolicyInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreGetMetricPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetMetricPolicyInput(obj: MediaStoreGetMetricPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreGetMetricPolicyOutput
 */
export interface MediaStoreGetMetricPolicyOutput {
  /**
   * @schema MediaStoreGetMetricPolicyOutput#MetricPolicy
   */
  readonly metricPolicy?: MediaStoreMetricPolicy;

}

/**
 * Converts an object of type 'MediaStoreGetMetricPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreGetMetricPolicyOutput(obj: MediaStoreGetMetricPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MetricPolicy': toJson_MediaStoreMetricPolicy(obj.metricPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaStoreListContainersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreListContainersInput(obj: MediaStoreListContainersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreListContainersOutput
 */
export interface MediaStoreListContainersOutput {
  /**
   * @schema MediaStoreListContainersOutput#Containers
   */
  readonly containers?: MediaStoreContainer[];

  /**
   * @schema MediaStoreListContainersOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'MediaStoreListContainersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreListContainersOutput(obj: MediaStoreListContainersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Containers': obj.containers?.map(y => toJson_MediaStoreContainer(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreListTagsForResourceInput
 */
export interface MediaStoreListTagsForResourceInput {
  /**
   * @schema MediaStoreListTagsForResourceInput#Resource
   */
  readonly resource?: string;

}

/**
 * Converts an object of type 'MediaStoreListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreListTagsForResourceInput(obj: MediaStoreListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaStoreListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreListTagsForResourceOutput(obj: MediaStoreListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_MediaStoreTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutContainerPolicyInput
 */
export interface MediaStorePutContainerPolicyInput {
  /**
   * @schema MediaStorePutContainerPolicyInput#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema MediaStorePutContainerPolicyInput#Policy
   */
  readonly policy?: string;

}

/**
 * Converts an object of type 'MediaStorePutContainerPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutContainerPolicyInput(obj: MediaStorePutContainerPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'Policy': obj.policy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutContainerPolicyOutput
 */
export interface MediaStorePutContainerPolicyOutput {
}

/**
 * Converts an object of type 'MediaStorePutContainerPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutContainerPolicyOutput(obj: MediaStorePutContainerPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutCorsPolicyInput
 */
export interface MediaStorePutCorsPolicyInput {
  /**
   * @schema MediaStorePutCorsPolicyInput#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema MediaStorePutCorsPolicyInput#CorsPolicy
   */
  readonly corsPolicy?: MediaStoreCorsRule[];

}

/**
 * Converts an object of type 'MediaStorePutCorsPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutCorsPolicyInput(obj: MediaStorePutCorsPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'CorsPolicy': obj.corsPolicy?.map(y => toJson_MediaStoreCorsRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutCorsPolicyOutput
 */
export interface MediaStorePutCorsPolicyOutput {
}

/**
 * Converts an object of type 'MediaStorePutCorsPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutCorsPolicyOutput(obj: MediaStorePutCorsPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutLifecyclePolicyInput
 */
export interface MediaStorePutLifecyclePolicyInput {
  /**
   * @schema MediaStorePutLifecyclePolicyInput#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema MediaStorePutLifecyclePolicyInput#LifecyclePolicy
   */
  readonly lifecyclePolicy?: string;

}

/**
 * Converts an object of type 'MediaStorePutLifecyclePolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutLifecyclePolicyInput(obj: MediaStorePutLifecyclePolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'LifecyclePolicy': obj.lifecyclePolicy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutLifecyclePolicyOutput
 */
export interface MediaStorePutLifecyclePolicyOutput {
}

/**
 * Converts an object of type 'MediaStorePutLifecyclePolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutLifecyclePolicyOutput(obj: MediaStorePutLifecyclePolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutMetricPolicyInput
 */
export interface MediaStorePutMetricPolicyInput {
  /**
   * @schema MediaStorePutMetricPolicyInput#ContainerName
   */
  readonly containerName?: string;

  /**
   * @schema MediaStorePutMetricPolicyInput#MetricPolicy
   */
  readonly metricPolicy?: MediaStoreMetricPolicy;

}

/**
 * Converts an object of type 'MediaStorePutMetricPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutMetricPolicyInput(obj: MediaStorePutMetricPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
    'MetricPolicy': toJson_MediaStoreMetricPolicy(obj.metricPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStorePutMetricPolicyOutput
 */
export interface MediaStorePutMetricPolicyOutput {
}

/**
 * Converts an object of type 'MediaStorePutMetricPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStorePutMetricPolicyOutput(obj: MediaStorePutMetricPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreStartAccessLoggingInput
 */
export interface MediaStoreStartAccessLoggingInput {
  /**
   * @schema MediaStoreStartAccessLoggingInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreStartAccessLoggingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreStartAccessLoggingInput(obj: MediaStoreStartAccessLoggingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreStartAccessLoggingOutput
 */
export interface MediaStoreStartAccessLoggingOutput {
}

/**
 * Converts an object of type 'MediaStoreStartAccessLoggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreStartAccessLoggingOutput(obj: MediaStoreStartAccessLoggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreStopAccessLoggingInput
 */
export interface MediaStoreStopAccessLoggingInput {
  /**
   * @schema MediaStoreStopAccessLoggingInput#ContainerName
   */
  readonly containerName?: string;

}

/**
 * Converts an object of type 'MediaStoreStopAccessLoggingInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreStopAccessLoggingInput(obj: MediaStoreStopAccessLoggingInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerName': obj.containerName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreStopAccessLoggingOutput
 */
export interface MediaStoreStopAccessLoggingOutput {
}

/**
 * Converts an object of type 'MediaStoreStopAccessLoggingOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreStopAccessLoggingOutput(obj: MediaStoreStopAccessLoggingOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreTagResourceInput
 */
export interface MediaStoreTagResourceInput {
  /**
   * @schema MediaStoreTagResourceInput#Resource
   */
  readonly resource?: string;

  /**
   * @schema MediaStoreTagResourceInput#Tags
   */
  readonly tags?: MediaStoreTag[];

}

/**
 * Converts an object of type 'MediaStoreTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreTagResourceInput(obj: MediaStoreTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'Tags': obj.tags?.map(y => toJson_MediaStoreTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreTagResourceOutput
 */
export interface MediaStoreTagResourceOutput {
}

/**
 * Converts an object of type 'MediaStoreTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreTagResourceOutput(obj: MediaStoreTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreUntagResourceInput
 */
export interface MediaStoreUntagResourceInput {
  /**
   * @schema MediaStoreUntagResourceInput#Resource
   */
  readonly resource?: string;

  /**
   * @schema MediaStoreUntagResourceInput#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'MediaStoreUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreUntagResourceInput(obj: MediaStoreUntagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreUntagResourceOutput
 */
export interface MediaStoreUntagResourceOutput {
}

/**
 * Converts an object of type 'MediaStoreUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreUntagResourceOutput(obj: MediaStoreUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreTag
 */
export interface MediaStoreTag {
  /**
   * @schema MediaStoreTag#Key
   */
  readonly key?: string;

  /**
   * @schema MediaStoreTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'MediaStoreTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreTag(obj: MediaStoreTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'MediaStoreContainer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreContainer(obj: MediaStoreContainer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': obj.endpoint,
    'CreationTime': obj.creationTime,
    'ARN': obj.arn,
    'Name': obj.name,
    'Status': obj.status,
    'AccessLoggingEnabled': obj.accessLoggingEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreCorsRule
 */
export interface MediaStoreCorsRule {
  /**
   * @schema MediaStoreCorsRule#AllowedOrigins
   */
  readonly allowedOrigins?: string[];

  /**
   * @schema MediaStoreCorsRule#AllowedMethods
   */
  readonly allowedMethods?: string[];

  /**
   * @schema MediaStoreCorsRule#AllowedHeaders
   */
  readonly allowedHeaders?: string[];

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
 * Converts an object of type 'MediaStoreCorsRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreCorsRule(obj: MediaStoreCorsRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedOrigins': obj.allowedOrigins?.map(y => y),
    'AllowedMethods': obj.allowedMethods?.map(y => y),
    'AllowedHeaders': obj.allowedHeaders?.map(y => y),
    'MaxAgeSeconds': obj.maxAgeSeconds,
    'ExposeHeaders': obj.exposeHeaders?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreMetricPolicy
 */
export interface MediaStoreMetricPolicy {
  /**
   * @schema MediaStoreMetricPolicy#ContainerLevelMetrics
   */
  readonly containerLevelMetrics?: string;

  /**
   * @schema MediaStoreMetricPolicy#MetricPolicyRules
   */
  readonly metricPolicyRules?: MediaStoreMetricPolicyRule[];

}

/**
 * Converts an object of type 'MediaStoreMetricPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreMetricPolicy(obj: MediaStoreMetricPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContainerLevelMetrics': obj.containerLevelMetrics,
    'MetricPolicyRules': obj.metricPolicyRules?.map(y => toJson_MediaStoreMetricPolicyRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema MediaStoreMetricPolicyRule
 */
export interface MediaStoreMetricPolicyRule {
  /**
   * @schema MediaStoreMetricPolicyRule#ObjectGroup
   */
  readonly objectGroup?: string;

  /**
   * @schema MediaStoreMetricPolicyRule#ObjectGroupName
   */
  readonly objectGroupName?: string;

}

/**
 * Converts an object of type 'MediaStoreMetricPolicyRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_MediaStoreMetricPolicyRule(obj: MediaStoreMetricPolicyRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectGroup': obj.objectGroup,
    'ObjectGroupName': obj.objectGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
