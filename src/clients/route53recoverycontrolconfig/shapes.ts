/**
 * @schema Route53RecoveryControlConfigCreateClusterRequest
 */
export interface Route53RecoveryControlConfigCreateClusterRequest {
  /**
   * @schema Route53RecoveryControlConfigCreateClusterRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateClusterRequest#ClusterName
   */
  readonly clusterName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateClusterRequest(obj: Route53RecoveryControlConfigCreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'ClusterName': obj.clusterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateClusterResponse
 */
export interface Route53RecoveryControlConfigCreateClusterResponse {
  /**
   * @schema Route53RecoveryControlConfigCreateClusterResponse#Cluster
   */
  readonly cluster?: Route53RecoveryControlConfigCluster;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateClusterResponse(obj: Route53RecoveryControlConfigCreateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_Route53RecoveryControlConfigCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateControlPanelRequest
 */
export interface Route53RecoveryControlConfigCreateControlPanelRequest {
  /**
   * @schema Route53RecoveryControlConfigCreateControlPanelRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateControlPanelRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateControlPanelRequest#ControlPanelName
   */
  readonly controlPanelName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateControlPanelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateControlPanelRequest(obj: Route53RecoveryControlConfigCreateControlPanelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'ClusterArn': obj.clusterArn,
    'ControlPanelName': obj.controlPanelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateControlPanelResponse
 */
export interface Route53RecoveryControlConfigCreateControlPanelResponse {
  /**
   * @schema Route53RecoveryControlConfigCreateControlPanelResponse#ControlPanel
   */
  readonly controlPanel?: Route53RecoveryControlConfigControlPanel;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateControlPanelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateControlPanelResponse(obj: Route53RecoveryControlConfigCreateControlPanelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanel': toJson_Route53RecoveryControlConfigControlPanel(obj.controlPanel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateRoutingControlRequest
 */
export interface Route53RecoveryControlConfigCreateRoutingControlRequest {
  /**
   * @schema Route53RecoveryControlConfigCreateRoutingControlRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateRoutingControlRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateRoutingControlRequest#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateRoutingControlRequest#RoutingControlName
   */
  readonly routingControlName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateRoutingControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateRoutingControlRequest(obj: Route53RecoveryControlConfigCreateRoutingControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'ClusterArn': obj.clusterArn,
    'ControlPanelArn': obj.controlPanelArn,
    'RoutingControlName': obj.routingControlName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateRoutingControlResponse
 */
export interface Route53RecoveryControlConfigCreateRoutingControlResponse {
  /**
   * @schema Route53RecoveryControlConfigCreateRoutingControlResponse#RoutingControl
   */
  readonly routingControl?: Route53RecoveryControlConfigRoutingControl;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateRoutingControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateRoutingControlResponse(obj: Route53RecoveryControlConfigCreateRoutingControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControl': toJson_Route53RecoveryControlConfigRoutingControl(obj.routingControl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateSafetyRuleRequest
 */
export interface Route53RecoveryControlConfigCreateSafetyRuleRequest {
  /**
   * @schema Route53RecoveryControlConfigCreateSafetyRuleRequest#AssertionRule
   */
  readonly assertionRule?: Route53RecoveryControlConfigNewAssertionRule;

  /**
   * @schema Route53RecoveryControlConfigCreateSafetyRuleRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema Route53RecoveryControlConfigCreateSafetyRuleRequest#GatingRule
   */
  readonly gatingRule?: Route53RecoveryControlConfigNewGatingRule;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateSafetyRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateSafetyRuleRequest(obj: Route53RecoveryControlConfigCreateSafetyRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertionRule': toJson_Route53RecoveryControlConfigNewAssertionRule(obj.assertionRule),
    'ClientToken': obj.clientToken,
    'GatingRule': toJson_Route53RecoveryControlConfigNewGatingRule(obj.gatingRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCreateSafetyRuleResponse
 */
export interface Route53RecoveryControlConfigCreateSafetyRuleResponse {
  /**
   * @schema Route53RecoveryControlConfigCreateSafetyRuleResponse#AssertionRule
   */
  readonly assertionRule?: Route53RecoveryControlConfigAssertionRule;

  /**
   * @schema Route53RecoveryControlConfigCreateSafetyRuleResponse#GatingRule
   */
  readonly gatingRule?: Route53RecoveryControlConfigGatingRule;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCreateSafetyRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCreateSafetyRuleResponse(obj: Route53RecoveryControlConfigCreateSafetyRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertionRule': toJson_Route53RecoveryControlConfigAssertionRule(obj.assertionRule),
    'GatingRule': toJson_Route53RecoveryControlConfigGatingRule(obj.gatingRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteClusterRequest
 */
export interface Route53RecoveryControlConfigDeleteClusterRequest {
  /**
   * @schema Route53RecoveryControlConfigDeleteClusterRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteClusterRequest(obj: Route53RecoveryControlConfigDeleteClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteClusterResponse
 */
export interface Route53RecoveryControlConfigDeleteClusterResponse {
}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteClusterResponse(obj: Route53RecoveryControlConfigDeleteClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteControlPanelRequest
 */
export interface Route53RecoveryControlConfigDeleteControlPanelRequest {
  /**
   * @schema Route53RecoveryControlConfigDeleteControlPanelRequest#ControlPanelArn
   */
  readonly controlPanelArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteControlPanelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteControlPanelRequest(obj: Route53RecoveryControlConfigDeleteControlPanelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteControlPanelResponse
 */
export interface Route53RecoveryControlConfigDeleteControlPanelResponse {
}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteControlPanelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteControlPanelResponse(obj: Route53RecoveryControlConfigDeleteControlPanelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteRoutingControlRequest
 */
export interface Route53RecoveryControlConfigDeleteRoutingControlRequest {
  /**
   * @schema Route53RecoveryControlConfigDeleteRoutingControlRequest#RoutingControlArn
   */
  readonly routingControlArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteRoutingControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteRoutingControlRequest(obj: Route53RecoveryControlConfigDeleteRoutingControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteRoutingControlResponse
 */
export interface Route53RecoveryControlConfigDeleteRoutingControlResponse {
}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteRoutingControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteRoutingControlResponse(obj: Route53RecoveryControlConfigDeleteRoutingControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteSafetyRuleRequest
 */
export interface Route53RecoveryControlConfigDeleteSafetyRuleRequest {
  /**
   * @schema Route53RecoveryControlConfigDeleteSafetyRuleRequest#SafetyRuleArn
   */
  readonly safetyRuleArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteSafetyRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteSafetyRuleRequest(obj: Route53RecoveryControlConfigDeleteSafetyRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SafetyRuleArn': obj.safetyRuleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDeleteSafetyRuleResponse
 */
export interface Route53RecoveryControlConfigDeleteSafetyRuleResponse {
}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDeleteSafetyRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDeleteSafetyRuleResponse(obj: Route53RecoveryControlConfigDeleteSafetyRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeClusterRequest
 */
export interface Route53RecoveryControlConfigDescribeClusterRequest {
  /**
   * @schema Route53RecoveryControlConfigDescribeClusterRequest#ClusterArn
   */
  readonly clusterArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeClusterRequest(obj: Route53RecoveryControlConfigDescribeClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeClusterResponse
 */
export interface Route53RecoveryControlConfigDescribeClusterResponse {
  /**
   * @schema Route53RecoveryControlConfigDescribeClusterResponse#Cluster
   */
  readonly cluster?: Route53RecoveryControlConfigCluster;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeClusterResponse(obj: Route53RecoveryControlConfigDescribeClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Cluster': toJson_Route53RecoveryControlConfigCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeControlPanelRequest
 */
export interface Route53RecoveryControlConfigDescribeControlPanelRequest {
  /**
   * @schema Route53RecoveryControlConfigDescribeControlPanelRequest#ControlPanelArn
   */
  readonly controlPanelArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeControlPanelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeControlPanelRequest(obj: Route53RecoveryControlConfigDescribeControlPanelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeControlPanelResponse
 */
export interface Route53RecoveryControlConfigDescribeControlPanelResponse {
  /**
   * @schema Route53RecoveryControlConfigDescribeControlPanelResponse#ControlPanel
   */
  readonly controlPanel?: Route53RecoveryControlConfigControlPanel;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeControlPanelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeControlPanelResponse(obj: Route53RecoveryControlConfigDescribeControlPanelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanel': toJson_Route53RecoveryControlConfigControlPanel(obj.controlPanel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeRoutingControlRequest
 */
export interface Route53RecoveryControlConfigDescribeRoutingControlRequest {
  /**
   * @schema Route53RecoveryControlConfigDescribeRoutingControlRequest#RoutingControlArn
   */
  readonly routingControlArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeRoutingControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeRoutingControlRequest(obj: Route53RecoveryControlConfigDescribeRoutingControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeRoutingControlResponse
 */
export interface Route53RecoveryControlConfigDescribeRoutingControlResponse {
  /**
   * @schema Route53RecoveryControlConfigDescribeRoutingControlResponse#RoutingControl
   */
  readonly routingControl?: Route53RecoveryControlConfigRoutingControl;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeRoutingControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeRoutingControlResponse(obj: Route53RecoveryControlConfigDescribeRoutingControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControl': toJson_Route53RecoveryControlConfigRoutingControl(obj.routingControl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeSafetyRuleRequest
 */
export interface Route53RecoveryControlConfigDescribeSafetyRuleRequest {
  /**
   * @schema Route53RecoveryControlConfigDescribeSafetyRuleRequest#SafetyRuleArn
   */
  readonly safetyRuleArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeSafetyRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeSafetyRuleRequest(obj: Route53RecoveryControlConfigDescribeSafetyRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SafetyRuleArn': obj.safetyRuleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigDescribeSafetyRuleResponse
 */
export interface Route53RecoveryControlConfigDescribeSafetyRuleResponse {
  /**
   * @schema Route53RecoveryControlConfigDescribeSafetyRuleResponse#AssertionRule
   */
  readonly assertionRule?: Route53RecoveryControlConfigAssertionRule;

  /**
   * @schema Route53RecoveryControlConfigDescribeSafetyRuleResponse#GatingRule
   */
  readonly gatingRule?: Route53RecoveryControlConfigGatingRule;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigDescribeSafetyRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigDescribeSafetyRuleResponse(obj: Route53RecoveryControlConfigDescribeSafetyRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertionRule': toJson_Route53RecoveryControlConfigAssertionRule(obj.assertionRule),
    'GatingRule': toJson_Route53RecoveryControlConfigGatingRule(obj.gatingRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest
 */
export interface Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest {
  /**
   * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest#RoutingControlArn
   */
  readonly routingControlArn?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest(obj: Route53RecoveryControlConfigListAssociatedRoute53HealthChecksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'RoutingControlArn': obj.routingControlArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse
 */
export interface Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse {
  /**
   * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse#HealthCheckIds
   */
  readonly healthCheckIds?: string[];

  /**
   * @schema Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse(obj: Route53RecoveryControlConfigListAssociatedRoute53HealthChecksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HealthCheckIds': obj.healthCheckIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListClustersRequest
 */
export interface Route53RecoveryControlConfigListClustersRequest {
  /**
   * @schema Route53RecoveryControlConfigListClustersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryControlConfigListClustersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListClustersRequest(obj: Route53RecoveryControlConfigListClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListClustersResponse
 */
export interface Route53RecoveryControlConfigListClustersResponse {
  /**
   * @schema Route53RecoveryControlConfigListClustersResponse#Clusters
   */
  readonly clusters?: Route53RecoveryControlConfigCluster[];

  /**
   * @schema Route53RecoveryControlConfigListClustersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListClustersResponse(obj: Route53RecoveryControlConfigListClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Clusters': obj.clusters?.map(y => toJson_Route53RecoveryControlConfigCluster(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListControlPanelsRequest
 */
export interface Route53RecoveryControlConfigListControlPanelsRequest {
  /**
   * @schema Route53RecoveryControlConfigListControlPanelsRequest#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Route53RecoveryControlConfigListControlPanelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryControlConfigListControlPanelsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListControlPanelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListControlPanelsRequest(obj: Route53RecoveryControlConfigListControlPanelsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListControlPanelsResponse
 */
export interface Route53RecoveryControlConfigListControlPanelsResponse {
  /**
   * @schema Route53RecoveryControlConfigListControlPanelsResponse#ControlPanels
   */
  readonly controlPanels?: Route53RecoveryControlConfigControlPanel[];

  /**
   * @schema Route53RecoveryControlConfigListControlPanelsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListControlPanelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListControlPanelsResponse(obj: Route53RecoveryControlConfigListControlPanelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanels': obj.controlPanels?.map(y => toJson_Route53RecoveryControlConfigControlPanel(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListRoutingControlsRequest
 */
export interface Route53RecoveryControlConfigListRoutingControlsRequest {
  /**
   * @schema Route53RecoveryControlConfigListRoutingControlsRequest#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigListRoutingControlsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryControlConfigListRoutingControlsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListRoutingControlsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListRoutingControlsRequest(obj: Route53RecoveryControlConfigListRoutingControlsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListRoutingControlsResponse
 */
export interface Route53RecoveryControlConfigListRoutingControlsResponse {
  /**
   * @schema Route53RecoveryControlConfigListRoutingControlsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryControlConfigListRoutingControlsResponse#RoutingControls
   */
  readonly routingControls?: Route53RecoveryControlConfigRoutingControl[];

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListRoutingControlsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListRoutingControlsResponse(obj: Route53RecoveryControlConfigListRoutingControlsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RoutingControls': obj.routingControls?.map(y => toJson_Route53RecoveryControlConfigRoutingControl(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListSafetyRulesRequest
 */
export interface Route53RecoveryControlConfigListSafetyRulesRequest {
  /**
   * @schema Route53RecoveryControlConfigListSafetyRulesRequest#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigListSafetyRulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema Route53RecoveryControlConfigListSafetyRulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListSafetyRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListSafetyRulesRequest(obj: Route53RecoveryControlConfigListSafetyRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigListSafetyRulesResponse
 */
export interface Route53RecoveryControlConfigListSafetyRulesResponse {
  /**
   * @schema Route53RecoveryControlConfigListSafetyRulesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema Route53RecoveryControlConfigListSafetyRulesResponse#SafetyRules
   */
  readonly safetyRules?: Route53RecoveryControlConfigRule[];

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigListSafetyRulesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigListSafetyRulesResponse(obj: Route53RecoveryControlConfigListSafetyRulesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SafetyRules': obj.safetyRules?.map(y => toJson_Route53RecoveryControlConfigRule(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigUpdateControlPanelRequest
 */
export interface Route53RecoveryControlConfigUpdateControlPanelRequest {
  /**
   * @schema Route53RecoveryControlConfigUpdateControlPanelRequest#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigUpdateControlPanelRequest#ControlPanelName
   */
  readonly controlPanelName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigUpdateControlPanelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigUpdateControlPanelRequest(obj: Route53RecoveryControlConfigUpdateControlPanelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
    'ControlPanelName': obj.controlPanelName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigUpdateControlPanelResponse
 */
export interface Route53RecoveryControlConfigUpdateControlPanelResponse {
  /**
   * @schema Route53RecoveryControlConfigUpdateControlPanelResponse#ControlPanel
   */
  readonly controlPanel?: Route53RecoveryControlConfigControlPanel;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigUpdateControlPanelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigUpdateControlPanelResponse(obj: Route53RecoveryControlConfigUpdateControlPanelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanel': toJson_Route53RecoveryControlConfigControlPanel(obj.controlPanel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigUpdateRoutingControlRequest
 */
export interface Route53RecoveryControlConfigUpdateRoutingControlRequest {
  /**
   * @schema Route53RecoveryControlConfigUpdateRoutingControlRequest#RoutingControlArn
   */
  readonly routingControlArn?: string;

  /**
   * @schema Route53RecoveryControlConfigUpdateRoutingControlRequest#RoutingControlName
   */
  readonly routingControlName?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigUpdateRoutingControlRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigUpdateRoutingControlRequest(obj: Route53RecoveryControlConfigUpdateRoutingControlRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControlArn': obj.routingControlArn,
    'RoutingControlName': obj.routingControlName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigUpdateRoutingControlResponse
 */
export interface Route53RecoveryControlConfigUpdateRoutingControlResponse {
  /**
   * @schema Route53RecoveryControlConfigUpdateRoutingControlResponse#RoutingControl
   */
  readonly routingControl?: Route53RecoveryControlConfigRoutingControl;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigUpdateRoutingControlResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigUpdateRoutingControlResponse(obj: Route53RecoveryControlConfigUpdateRoutingControlResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingControl': toJson_Route53RecoveryControlConfigRoutingControl(obj.routingControl),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigUpdateSafetyRuleRequest
 */
export interface Route53RecoveryControlConfigUpdateSafetyRuleRequest {
  /**
   * @schema Route53RecoveryControlConfigUpdateSafetyRuleRequest#AssertionRuleUpdate
   */
  readonly assertionRuleUpdate?: Route53RecoveryControlConfigAssertionRuleUpdate;

  /**
   * @schema Route53RecoveryControlConfigUpdateSafetyRuleRequest#GatingRuleUpdate
   */
  readonly gatingRuleUpdate?: Route53RecoveryControlConfigGatingRuleUpdate;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigUpdateSafetyRuleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigUpdateSafetyRuleRequest(obj: Route53RecoveryControlConfigUpdateSafetyRuleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertionRuleUpdate': toJson_Route53RecoveryControlConfigAssertionRuleUpdate(obj.assertionRuleUpdate),
    'GatingRuleUpdate': toJson_Route53RecoveryControlConfigGatingRuleUpdate(obj.gatingRuleUpdate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigUpdateSafetyRuleResponse
 */
export interface Route53RecoveryControlConfigUpdateSafetyRuleResponse {
  /**
   * @schema Route53RecoveryControlConfigUpdateSafetyRuleResponse#AssertionRule
   */
  readonly assertionRule?: Route53RecoveryControlConfigAssertionRule;

  /**
   * @schema Route53RecoveryControlConfigUpdateSafetyRuleResponse#GatingRule
   */
  readonly gatingRule?: Route53RecoveryControlConfigGatingRule;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigUpdateSafetyRuleResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigUpdateSafetyRuleResponse(obj: Route53RecoveryControlConfigUpdateSafetyRuleResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertionRule': toJson_Route53RecoveryControlConfigAssertionRule(obj.assertionRule),
    'GatingRule': toJson_Route53RecoveryControlConfigGatingRule(obj.gatingRule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigCluster
 */
export interface Route53RecoveryControlConfigCluster {
  /**
   * @schema Route53RecoveryControlConfigCluster#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Route53RecoveryControlConfigCluster#ClusterEndpoints
   */
  readonly clusterEndpoints?: Route53RecoveryControlConfigClusterEndpoint[];

  /**
   * @schema Route53RecoveryControlConfigCluster#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigCluster#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigCluster(obj: Route53RecoveryControlConfigCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ClusterEndpoints': obj.clusterEndpoints?.map(y => toJson_Route53RecoveryControlConfigClusterEndpoint(y)),
    'Name': obj.name,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigControlPanel
 */
export interface Route53RecoveryControlConfigControlPanel {
  /**
   * @schema Route53RecoveryControlConfigControlPanel#ClusterArn
   */
  readonly clusterArn?: string;

  /**
   * @schema Route53RecoveryControlConfigControlPanel#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigControlPanel#DefaultControlPanel
   */
  readonly defaultControlPanel?: boolean;

  /**
   * @schema Route53RecoveryControlConfigControlPanel#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigControlPanel#RoutingControlCount
   */
  readonly routingControlCount?: number;

  /**
   * @schema Route53RecoveryControlConfigControlPanel#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigControlPanel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigControlPanel(obj: Route53RecoveryControlConfigControlPanel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClusterArn': obj.clusterArn,
    'ControlPanelArn': obj.controlPanelArn,
    'DefaultControlPanel': obj.defaultControlPanel,
    'Name': obj.name,
    'RoutingControlCount': obj.routingControlCount,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigRoutingControl
 */
export interface Route53RecoveryControlConfigRoutingControl {
  /**
   * @schema Route53RecoveryControlConfigRoutingControl#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigRoutingControl#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigRoutingControl#RoutingControlArn
   */
  readonly routingControlArn?: string;

  /**
   * @schema Route53RecoveryControlConfigRoutingControl#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigRoutingControl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigRoutingControl(obj: Route53RecoveryControlConfigRoutingControl | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
    'Name': obj.name,
    'RoutingControlArn': obj.routingControlArn,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigNewAssertionRule
 */
export interface Route53RecoveryControlConfigNewAssertionRule {
  /**
   * @schema Route53RecoveryControlConfigNewAssertionRule#AssertedControls
   */
  readonly assertedControls?: string[];

  /**
   * @schema Route53RecoveryControlConfigNewAssertionRule#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigNewAssertionRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigNewAssertionRule#RuleConfig
   */
  readonly ruleConfig?: Route53RecoveryControlConfigRuleConfig;

  /**
   * @schema Route53RecoveryControlConfigNewAssertionRule#WaitPeriodMs
   */
  readonly waitPeriodMs?: number;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigNewAssertionRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigNewAssertionRule(obj: Route53RecoveryControlConfigNewAssertionRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertedControls': obj.assertedControls?.map(y => y),
    'ControlPanelArn': obj.controlPanelArn,
    'Name': obj.name,
    'RuleConfig': toJson_Route53RecoveryControlConfigRuleConfig(obj.ruleConfig),
    'WaitPeriodMs': obj.waitPeriodMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigNewGatingRule
 */
export interface Route53RecoveryControlConfigNewGatingRule {
  /**
   * @schema Route53RecoveryControlConfigNewGatingRule#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigNewGatingRule#GatingControls
   */
  readonly gatingControls?: string[];

  /**
   * @schema Route53RecoveryControlConfigNewGatingRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigNewGatingRule#RuleConfig
   */
  readonly ruleConfig?: Route53RecoveryControlConfigRuleConfig;

  /**
   * @schema Route53RecoveryControlConfigNewGatingRule#TargetControls
   */
  readonly targetControls?: string[];

  /**
   * @schema Route53RecoveryControlConfigNewGatingRule#WaitPeriodMs
   */
  readonly waitPeriodMs?: number;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigNewGatingRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigNewGatingRule(obj: Route53RecoveryControlConfigNewGatingRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
    'GatingControls': obj.gatingControls?.map(y => y),
    'Name': obj.name,
    'RuleConfig': toJson_Route53RecoveryControlConfigRuleConfig(obj.ruleConfig),
    'TargetControls': obj.targetControls?.map(y => y),
    'WaitPeriodMs': obj.waitPeriodMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigAssertionRule
 */
export interface Route53RecoveryControlConfigAssertionRule {
  /**
   * @schema Route53RecoveryControlConfigAssertionRule#AssertedControls
   */
  readonly assertedControls?: string[];

  /**
   * @schema Route53RecoveryControlConfigAssertionRule#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigAssertionRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigAssertionRule#RuleConfig
   */
  readonly ruleConfig?: Route53RecoveryControlConfigRuleConfig;

  /**
   * @schema Route53RecoveryControlConfigAssertionRule#SafetyRuleArn
   */
  readonly safetyRuleArn?: string;

  /**
   * @schema Route53RecoveryControlConfigAssertionRule#Status
   */
  readonly status?: string;

  /**
   * @schema Route53RecoveryControlConfigAssertionRule#WaitPeriodMs
   */
  readonly waitPeriodMs?: number;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigAssertionRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigAssertionRule(obj: Route53RecoveryControlConfigAssertionRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssertedControls': obj.assertedControls?.map(y => y),
    'ControlPanelArn': obj.controlPanelArn,
    'Name': obj.name,
    'RuleConfig': toJson_Route53RecoveryControlConfigRuleConfig(obj.ruleConfig),
    'SafetyRuleArn': obj.safetyRuleArn,
    'Status': obj.status,
    'WaitPeriodMs': obj.waitPeriodMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigGatingRule
 */
export interface Route53RecoveryControlConfigGatingRule {
  /**
   * @schema Route53RecoveryControlConfigGatingRule#ControlPanelArn
   */
  readonly controlPanelArn?: string;

  /**
   * @schema Route53RecoveryControlConfigGatingRule#GatingControls
   */
  readonly gatingControls?: string[];

  /**
   * @schema Route53RecoveryControlConfigGatingRule#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigGatingRule#RuleConfig
   */
  readonly ruleConfig?: Route53RecoveryControlConfigRuleConfig;

  /**
   * @schema Route53RecoveryControlConfigGatingRule#SafetyRuleArn
   */
  readonly safetyRuleArn?: string;

  /**
   * @schema Route53RecoveryControlConfigGatingRule#Status
   */
  readonly status?: string;

  /**
   * @schema Route53RecoveryControlConfigGatingRule#TargetControls
   */
  readonly targetControls?: string[];

  /**
   * @schema Route53RecoveryControlConfigGatingRule#WaitPeriodMs
   */
  readonly waitPeriodMs?: number;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigGatingRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigGatingRule(obj: Route53RecoveryControlConfigGatingRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ControlPanelArn': obj.controlPanelArn,
    'GatingControls': obj.gatingControls?.map(y => y),
    'Name': obj.name,
    'RuleConfig': toJson_Route53RecoveryControlConfigRuleConfig(obj.ruleConfig),
    'SafetyRuleArn': obj.safetyRuleArn,
    'Status': obj.status,
    'TargetControls': obj.targetControls?.map(y => y),
    'WaitPeriodMs': obj.waitPeriodMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigRule
 */
export interface Route53RecoveryControlConfigRule {
  /**
   * @schema Route53RecoveryControlConfigRule#ASSERTION
   */
  readonly assertion?: Route53RecoveryControlConfigAssertionRule;

  /**
   * @schema Route53RecoveryControlConfigRule#GATING
   */
  readonly gating?: Route53RecoveryControlConfigGatingRule;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigRule(obj: Route53RecoveryControlConfigRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ASSERTION': toJson_Route53RecoveryControlConfigAssertionRule(obj.assertion),
    'GATING': toJson_Route53RecoveryControlConfigGatingRule(obj.gating),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigAssertionRuleUpdate
 */
export interface Route53RecoveryControlConfigAssertionRuleUpdate {
  /**
   * @schema Route53RecoveryControlConfigAssertionRuleUpdate#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigAssertionRuleUpdate#SafetyRuleArn
   */
  readonly safetyRuleArn?: string;

  /**
   * @schema Route53RecoveryControlConfigAssertionRuleUpdate#WaitPeriodMs
   */
  readonly waitPeriodMs?: number;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigAssertionRuleUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigAssertionRuleUpdate(obj: Route53RecoveryControlConfigAssertionRuleUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SafetyRuleArn': obj.safetyRuleArn,
    'WaitPeriodMs': obj.waitPeriodMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigGatingRuleUpdate
 */
export interface Route53RecoveryControlConfigGatingRuleUpdate {
  /**
   * @schema Route53RecoveryControlConfigGatingRuleUpdate#Name
   */
  readonly name?: string;

  /**
   * @schema Route53RecoveryControlConfigGatingRuleUpdate#SafetyRuleArn
   */
  readonly safetyRuleArn?: string;

  /**
   * @schema Route53RecoveryControlConfigGatingRuleUpdate#WaitPeriodMs
   */
  readonly waitPeriodMs?: number;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigGatingRuleUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigGatingRuleUpdate(obj: Route53RecoveryControlConfigGatingRuleUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SafetyRuleArn': obj.safetyRuleArn,
    'WaitPeriodMs': obj.waitPeriodMs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigClusterEndpoint
 */
export interface Route53RecoveryControlConfigClusterEndpoint {
  /**
   * @schema Route53RecoveryControlConfigClusterEndpoint#Endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Route53RecoveryControlConfigClusterEndpoint#Region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigClusterEndpoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigClusterEndpoint(obj: Route53RecoveryControlConfigClusterEndpoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Endpoint': obj.endpoint,
    'Region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema Route53RecoveryControlConfigRuleConfig
 */
export interface Route53RecoveryControlConfigRuleConfig {
  /**
   * @schema Route53RecoveryControlConfigRuleConfig#Inverted
   */
  readonly inverted?: boolean;

  /**
   * @schema Route53RecoveryControlConfigRuleConfig#Threshold
   */
  readonly threshold?: number;

  /**
   * @schema Route53RecoveryControlConfigRuleConfig#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'Route53RecoveryControlConfigRuleConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Route53RecoveryControlConfigRuleConfig(obj: Route53RecoveryControlConfigRuleConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Inverted': obj.inverted,
    'Threshold': obj.threshold,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
