/**
 * @schema AppflowCreateConnectorProfileRequest
 */
export interface AppflowCreateConnectorProfileRequest {
  /**
   * @schema AppflowCreateConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#connectionMode
   */
  readonly connectionMode: string;

  /**
   * @schema AppflowCreateConnectorProfileRequest#connectorProfileConfig
   */
  readonly connectorProfileConfig: AppflowConnectorProfileConfig;

}

/**
 * Converts an object of type 'AppflowCreateConnectorProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowCreateConnectorProfileRequest(obj: AppflowCreateConnectorProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileName': obj.connectorProfileName,
    'kmsArn': obj.kmsArn,
    'connectorType': obj.connectorType,
    'connectionMode': obj.connectionMode,
    'connectorProfileConfig': toJson_AppflowConnectorProfileConfig(obj.connectorProfileConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowCreateConnectorProfileResponse
 */
export interface AppflowCreateConnectorProfileResponse {
  /**
   * @schema AppflowCreateConnectorProfileResponse#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

}

/**
 * Converts an object of type 'AppflowCreateConnectorProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowCreateConnectorProfileResponse(obj: AppflowCreateConnectorProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileArn': obj.connectorProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowCreateFlowRequest
 */
export interface AppflowCreateFlowRequest {
  /**
   * @schema AppflowCreateFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowCreateFlowRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppflowCreateFlowRequest#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema AppflowCreateFlowRequest#triggerConfig
   */
  readonly triggerConfig: AppflowTriggerConfig;

  /**
   * @schema AppflowCreateFlowRequest#sourceFlowConfig
   */
  readonly sourceFlowConfig: AppflowSourceFlowConfig;

  /**
   * @schema AppflowCreateFlowRequest#destinationFlowConfigList
   */
  readonly destinationFlowConfigList: AppflowDestinationFlowConfig[];

  /**
   * @schema AppflowCreateFlowRequest#tasks
   */
  readonly tasks: AppflowTask[];

  /**
   * @schema AppflowCreateFlowRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppflowCreateFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowCreateFlowRequest(obj: AppflowCreateFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
    'description': obj.description,
    'kmsArn': obj.kmsArn,
    'triggerConfig': toJson_AppflowTriggerConfig(obj.triggerConfig),
    'sourceFlowConfig': toJson_AppflowSourceFlowConfig(obj.sourceFlowConfig),
    'destinationFlowConfigList': obj.destinationFlowConfigList?.map(y => toJson_AppflowDestinationFlowConfig(y)),
    'tasks': obj.tasks?.map(y => toJson_AppflowTask(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowCreateFlowResponse
 */
export interface AppflowCreateFlowResponse {
  /**
   * @schema AppflowCreateFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowCreateFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * Converts an object of type 'AppflowCreateFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowCreateFlowResponse(obj: AppflowCreateFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowArn': obj.flowArn,
    'flowStatus': obj.flowStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDeleteConnectorProfileRequest
 */
export interface AppflowDeleteConnectorProfileRequest {
  /**
   * @schema AppflowDeleteConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema AppflowDeleteConnectorProfileRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'AppflowDeleteConnectorProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDeleteConnectorProfileRequest(obj: AppflowDeleteConnectorProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileName': obj.connectorProfileName,
    'forceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDeleteConnectorProfileResponse
 */
export interface AppflowDeleteConnectorProfileResponse {
}

/**
 * Converts an object of type 'AppflowDeleteConnectorProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDeleteConnectorProfileResponse(obj: AppflowDeleteConnectorProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDeleteFlowRequest
 */
export interface AppflowDeleteFlowRequest {
  /**
   * @schema AppflowDeleteFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowDeleteFlowRequest#forceDelete
   */
  readonly forceDelete?: boolean;

}

/**
 * Converts an object of type 'AppflowDeleteFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDeleteFlowRequest(obj: AppflowDeleteFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
    'forceDelete': obj.forceDelete,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDeleteFlowResponse
 */
export interface AppflowDeleteFlowResponse {
}

/**
 * Converts an object of type 'AppflowDeleteFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDeleteFlowResponse(obj: AppflowDeleteFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeConnectorEntityRequest
 */
export interface AppflowDescribeConnectorEntityRequest {
  /**
   * @schema AppflowDescribeConnectorEntityRequest#connectorEntityName
   */
  readonly connectorEntityName: string;

  /**
   * @schema AppflowDescribeConnectorEntityRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowDescribeConnectorEntityRequest#connectorProfileName
   */
  readonly connectorProfileName?: string;

}

/**
 * Converts an object of type 'AppflowDescribeConnectorEntityRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeConnectorEntityRequest(obj: AppflowDescribeConnectorEntityRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorEntityName': obj.connectorEntityName,
    'connectorType': obj.connectorType,
    'connectorProfileName': obj.connectorProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeConnectorEntityResponse
 */
export interface AppflowDescribeConnectorEntityResponse {
  /**
   * @schema AppflowDescribeConnectorEntityResponse#connectorEntityFields
   */
  readonly connectorEntityFields: AppflowConnectorEntityField[];

}

/**
 * Converts an object of type 'AppflowDescribeConnectorEntityResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeConnectorEntityResponse(obj: AppflowDescribeConnectorEntityResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorEntityFields': obj.connectorEntityFields?.map(y => toJson_AppflowConnectorEntityField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeConnectorProfilesRequest
 */
export interface AppflowDescribeConnectorProfilesRequest {
  /**
   * @schema AppflowDescribeConnectorProfilesRequest#connectorProfileNames
   */
  readonly connectorProfileNames?: string[];

  /**
   * @schema AppflowDescribeConnectorProfilesRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowDescribeConnectorProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppflowDescribeConnectorProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowDescribeConnectorProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeConnectorProfilesRequest(obj: AppflowDescribeConnectorProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileNames': obj.connectorProfileNames?.map(y => y),
    'connectorType': obj.connectorType,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeConnectorProfilesResponse
 */
export interface AppflowDescribeConnectorProfilesResponse {
  /**
   * @schema AppflowDescribeConnectorProfilesResponse#connectorProfileDetails
   */
  readonly connectorProfileDetails?: AppflowConnectorProfile[];

  /**
   * @schema AppflowDescribeConnectorProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowDescribeConnectorProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeConnectorProfilesResponse(obj: AppflowDescribeConnectorProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileDetails': obj.connectorProfileDetails?.map(y => toJson_AppflowConnectorProfile(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeConnectorsRequest
 */
export interface AppflowDescribeConnectorsRequest {
  /**
   * @schema AppflowDescribeConnectorsRequest#connectorTypes
   */
  readonly connectorTypes?: string[];

  /**
   * @schema AppflowDescribeConnectorsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowDescribeConnectorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeConnectorsRequest(obj: AppflowDescribeConnectorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorTypes': obj.connectorTypes?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeConnectorsResponse
 */
export interface AppflowDescribeConnectorsResponse {
  /**
   * @schema AppflowDescribeConnectorsResponse#connectorConfigurations
   */
  readonly connectorConfigurations?: { [key: string]: AppflowConnectorConfiguration };

  /**
   * @schema AppflowDescribeConnectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowDescribeConnectorsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeConnectorsResponse(obj: AppflowDescribeConnectorsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorConfigurations': ((obj.connectorConfigurations) === undefined) ? undefined : (Object.entries(obj.connectorConfigurations).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_AppflowConnectorConfiguration(i[1]) }), {})),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeFlowRequest
 */
export interface AppflowDescribeFlowRequest {
  /**
   * @schema AppflowDescribeFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * Converts an object of type 'AppflowDescribeFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeFlowRequest(obj: AppflowDescribeFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeFlowResponse
 */
export interface AppflowDescribeFlowResponse {
  /**
   * @schema AppflowDescribeFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowDescribeFlowResponse#description
   */
  readonly description?: string;

  /**
   * @schema AppflowDescribeFlowResponse#flowName
   */
  readonly flowName?: string;

  /**
   * @schema AppflowDescribeFlowResponse#kmsArn
   */
  readonly kmsArn?: string;

  /**
   * @schema AppflowDescribeFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema AppflowDescribeFlowResponse#flowStatusMessage
   */
  readonly flowStatusMessage?: string;

  /**
   * @schema AppflowDescribeFlowResponse#sourceFlowConfig
   */
  readonly sourceFlowConfig?: AppflowSourceFlowConfig;

  /**
   * @schema AppflowDescribeFlowResponse#destinationFlowConfigList
   */
  readonly destinationFlowConfigList?: AppflowDestinationFlowConfig[];

  /**
   * @schema AppflowDescribeFlowResponse#lastRunExecutionDetails
   */
  readonly lastRunExecutionDetails?: AppflowExecutionDetails;

  /**
   * @schema AppflowDescribeFlowResponse#triggerConfig
   */
  readonly triggerConfig?: AppflowTriggerConfig;

  /**
   * @schema AppflowDescribeFlowResponse#tasks
   */
  readonly tasks?: AppflowTask[];

  /**
   * @schema AppflowDescribeFlowResponse#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppflowDescribeFlowResponse#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AppflowDescribeFlowResponse#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema AppflowDescribeFlowResponse#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema AppflowDescribeFlowResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppflowDescribeFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeFlowResponse(obj: AppflowDescribeFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowArn': obj.flowArn,
    'description': obj.description,
    'flowName': obj.flowName,
    'kmsArn': obj.kmsArn,
    'flowStatus': obj.flowStatus,
    'flowStatusMessage': obj.flowStatusMessage,
    'sourceFlowConfig': toJson_AppflowSourceFlowConfig(obj.sourceFlowConfig),
    'destinationFlowConfigList': obj.destinationFlowConfigList?.map(y => toJson_AppflowDestinationFlowConfig(y)),
    'lastRunExecutionDetails': toJson_AppflowExecutionDetails(obj.lastRunExecutionDetails),
    'triggerConfig': toJson_AppflowTriggerConfig(obj.triggerConfig),
    'tasks': obj.tasks?.map(y => toJson_AppflowTask(y)),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'createdBy': obj.createdBy,
    'lastUpdatedBy': obj.lastUpdatedBy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeFlowExecutionRecordsRequest
 */
export interface AppflowDescribeFlowExecutionRecordsRequest {
  /**
   * @schema AppflowDescribeFlowExecutionRecordsRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowDescribeFlowExecutionRecordsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppflowDescribeFlowExecutionRecordsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowDescribeFlowExecutionRecordsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeFlowExecutionRecordsRequest(obj: AppflowDescribeFlowExecutionRecordsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDescribeFlowExecutionRecordsResponse
 */
export interface AppflowDescribeFlowExecutionRecordsResponse {
  /**
   * @schema AppflowDescribeFlowExecutionRecordsResponse#flowExecutions
   */
  readonly flowExecutions?: AppflowExecutionRecord[];

  /**
   * @schema AppflowDescribeFlowExecutionRecordsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowDescribeFlowExecutionRecordsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDescribeFlowExecutionRecordsResponse(obj: AppflowDescribeFlowExecutionRecordsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowExecutions': obj.flowExecutions?.map(y => toJson_AppflowExecutionRecord(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowListConnectorEntitiesRequest
 */
export interface AppflowListConnectorEntitiesRequest {
  /**
   * @schema AppflowListConnectorEntitiesRequest#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowListConnectorEntitiesRequest#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowListConnectorEntitiesRequest#entitiesPath
   */
  readonly entitiesPath?: string;

}

/**
 * Converts an object of type 'AppflowListConnectorEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowListConnectorEntitiesRequest(obj: AppflowListConnectorEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileName': obj.connectorProfileName,
    'connectorType': obj.connectorType,
    'entitiesPath': obj.entitiesPath,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowListConnectorEntitiesResponse
 */
export interface AppflowListConnectorEntitiesResponse {
  /**
   * @schema AppflowListConnectorEntitiesResponse#connectorEntityMap
   */
  readonly connectorEntityMap: { [key: string]: AppflowConnectorEntity[] };

}

/**
 * Converts an object of type 'AppflowListConnectorEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowListConnectorEntitiesResponse(obj: AppflowListConnectorEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorEntityMap': ((obj.connectorEntityMap) === undefined) ? undefined : (Object.entries(obj.connectorEntityMap).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => toJson_AppflowConnectorEntity(y)) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowListFlowsRequest
 */
export interface AppflowListFlowsRequest {
  /**
   * @schema AppflowListFlowsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema AppflowListFlowsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowListFlowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowListFlowsRequest(obj: AppflowListFlowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowListFlowsResponse
 */
export interface AppflowListFlowsResponse {
  /**
   * @schema AppflowListFlowsResponse#flows
   */
  readonly flows?: AppflowFlowDefinition[];

  /**
   * @schema AppflowListFlowsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppflowListFlowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowListFlowsResponse(obj: AppflowListFlowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flows': obj.flows?.map(y => toJson_AppflowFlowDefinition(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowListTagsForResourceRequest
 */
export interface AppflowListTagsForResourceRequest {
  /**
   * @schema AppflowListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'AppflowListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowListTagsForResourceRequest(obj: AppflowListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowListTagsForResourceResponse
 */
export interface AppflowListTagsForResourceResponse {
  /**
   * @schema AppflowListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppflowListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowListTagsForResourceResponse(obj: AppflowListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowStartFlowRequest
 */
export interface AppflowStartFlowRequest {
  /**
   * @schema AppflowStartFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * Converts an object of type 'AppflowStartFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowStartFlowRequest(obj: AppflowStartFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowStartFlowResponse
 */
export interface AppflowStartFlowResponse {
  /**
   * @schema AppflowStartFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowStartFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema AppflowStartFlowResponse#executionId
   */
  readonly executionId?: string;

}

/**
 * Converts an object of type 'AppflowStartFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowStartFlowResponse(obj: AppflowStartFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowArn': obj.flowArn,
    'flowStatus': obj.flowStatus,
    'executionId': obj.executionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowStopFlowRequest
 */
export interface AppflowStopFlowRequest {
  /**
   * @schema AppflowStopFlowRequest#flowName
   */
  readonly flowName: string;

}

/**
 * Converts an object of type 'AppflowStopFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowStopFlowRequest(obj: AppflowStopFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowStopFlowResponse
 */
export interface AppflowStopFlowResponse {
  /**
   * @schema AppflowStopFlowResponse#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowStopFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * Converts an object of type 'AppflowStopFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowStopFlowResponse(obj: AppflowStopFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowArn': obj.flowArn,
    'flowStatus': obj.flowStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTagResourceRequest
 */
export interface AppflowTagResourceRequest {
  /**
   * @schema AppflowTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppflowTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'AppflowTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTagResourceRequest(obj: AppflowTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTagResourceResponse
 */
export interface AppflowTagResourceResponse {
}

/**
 * Converts an object of type 'AppflowTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTagResourceResponse(obj: AppflowTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUntagResourceRequest
 */
export interface AppflowUntagResourceRequest {
  /**
   * @schema AppflowUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppflowUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'AppflowUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUntagResourceRequest(obj: AppflowUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUntagResourceResponse
 */
export interface AppflowUntagResourceResponse {
}

/**
 * Converts an object of type 'AppflowUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUntagResourceResponse(obj: AppflowUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpdateConnectorProfileRequest
 */
export interface AppflowUpdateConnectorProfileRequest {
  /**
   * @schema AppflowUpdateConnectorProfileRequest#connectorProfileName
   */
  readonly connectorProfileName: string;

  /**
   * @schema AppflowUpdateConnectorProfileRequest#connectionMode
   */
  readonly connectionMode: string;

  /**
   * @schema AppflowUpdateConnectorProfileRequest#connectorProfileConfig
   */
  readonly connectorProfileConfig: AppflowConnectorProfileConfig;

}

/**
 * Converts an object of type 'AppflowUpdateConnectorProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpdateConnectorProfileRequest(obj: AppflowUpdateConnectorProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileName': obj.connectorProfileName,
    'connectionMode': obj.connectionMode,
    'connectorProfileConfig': toJson_AppflowConnectorProfileConfig(obj.connectorProfileConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpdateConnectorProfileResponse
 */
export interface AppflowUpdateConnectorProfileResponse {
  /**
   * @schema AppflowUpdateConnectorProfileResponse#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

}

/**
 * Converts an object of type 'AppflowUpdateConnectorProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpdateConnectorProfileResponse(obj: AppflowUpdateConnectorProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileArn': obj.connectorProfileArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpdateFlowRequest
 */
export interface AppflowUpdateFlowRequest {
  /**
   * @schema AppflowUpdateFlowRequest#flowName
   */
  readonly flowName: string;

  /**
   * @schema AppflowUpdateFlowRequest#description
   */
  readonly description?: string;

  /**
   * @schema AppflowUpdateFlowRequest#triggerConfig
   */
  readonly triggerConfig: AppflowTriggerConfig;

  /**
   * @schema AppflowUpdateFlowRequest#sourceFlowConfig
   */
  readonly sourceFlowConfig?: AppflowSourceFlowConfig;

  /**
   * @schema AppflowUpdateFlowRequest#destinationFlowConfigList
   */
  readonly destinationFlowConfigList: AppflowDestinationFlowConfig[];

  /**
   * @schema AppflowUpdateFlowRequest#tasks
   */
  readonly tasks: AppflowTask[];

}

/**
 * Converts an object of type 'AppflowUpdateFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpdateFlowRequest(obj: AppflowUpdateFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowName': obj.flowName,
    'description': obj.description,
    'triggerConfig': toJson_AppflowTriggerConfig(obj.triggerConfig),
    'sourceFlowConfig': toJson_AppflowSourceFlowConfig(obj.sourceFlowConfig),
    'destinationFlowConfigList': obj.destinationFlowConfigList?.map(y => toJson_AppflowDestinationFlowConfig(y)),
    'tasks': obj.tasks?.map(y => toJson_AppflowTask(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpdateFlowResponse
 */
export interface AppflowUpdateFlowResponse {
  /**
   * @schema AppflowUpdateFlowResponse#flowStatus
   */
  readonly flowStatus?: string;

}

/**
 * Converts an object of type 'AppflowUpdateFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpdateFlowResponse(obj: AppflowUpdateFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowStatus': obj.flowStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorProfileConfig
 */
export interface AppflowConnectorProfileConfig {
  /**
   * @schema AppflowConnectorProfileConfig#connectorProfileProperties
   */
  readonly connectorProfileProperties: AppflowConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileConfig#connectorProfileCredentials
   */
  readonly connectorProfileCredentials: AppflowConnectorProfileCredentials;

}

/**
 * Converts an object of type 'AppflowConnectorProfileConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorProfileConfig(obj: AppflowConnectorProfileConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileProperties': toJson_AppflowConnectorProfileProperties(obj.connectorProfileProperties),
    'connectorProfileCredentials': toJson_AppflowConnectorProfileCredentials(obj.connectorProfileCredentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTriggerConfig
 */
export interface AppflowTriggerConfig {
  /**
   * @schema AppflowTriggerConfig#triggerType
   */
  readonly triggerType: string;

  /**
   * @schema AppflowTriggerConfig#triggerProperties
   */
  readonly triggerProperties?: AppflowTriggerProperties;

}

/**
 * Converts an object of type 'AppflowTriggerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTriggerConfig(obj: AppflowTriggerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'triggerType': obj.triggerType,
    'triggerProperties': toJson_AppflowTriggerProperties(obj.triggerProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSourceFlowConfig
 */
export interface AppflowSourceFlowConfig {
  /**
   * @schema AppflowSourceFlowConfig#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppflowSourceFlowConfig#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowSourceFlowConfig#sourceConnectorProperties
   */
  readonly sourceConnectorProperties: AppflowSourceConnectorProperties;

  /**
   * @schema AppflowSourceFlowConfig#incrementalPullConfig
   */
  readonly incrementalPullConfig?: AppflowIncrementalPullConfig;

}

/**
 * Converts an object of type 'AppflowSourceFlowConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSourceFlowConfig(obj: AppflowSourceFlowConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorType': obj.connectorType,
    'connectorProfileName': obj.connectorProfileName,
    'sourceConnectorProperties': toJson_AppflowSourceConnectorProperties(obj.sourceConnectorProperties),
    'incrementalPullConfig': toJson_AppflowIncrementalPullConfig(obj.incrementalPullConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDestinationFlowConfig
 */
export interface AppflowDestinationFlowConfig {
  /**
   * @schema AppflowDestinationFlowConfig#connectorType
   */
  readonly connectorType: string;

  /**
   * @schema AppflowDestinationFlowConfig#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowDestinationFlowConfig#destinationConnectorProperties
   */
  readonly destinationConnectorProperties: AppflowDestinationConnectorProperties;

}

/**
 * Converts an object of type 'AppflowDestinationFlowConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDestinationFlowConfig(obj: AppflowDestinationFlowConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorType': obj.connectorType,
    'connectorProfileName': obj.connectorProfileName,
    'destinationConnectorProperties': toJson_AppflowDestinationConnectorProperties(obj.destinationConnectorProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTask
 */
export interface AppflowTask {
  /**
   * @schema AppflowTask#sourceFields
   */
  readonly sourceFields: string[];

  /**
   * @schema AppflowTask#connectorOperator
   */
  readonly connectorOperator?: AppflowConnectorOperator;

  /**
   * @schema AppflowTask#destinationField
   */
  readonly destinationField?: string;

  /**
   * @schema AppflowTask#taskType
   */
  readonly taskType: string;

  /**
   * @schema AppflowTask#taskProperties
   */
  readonly taskProperties?: { [key: string]: string };

}

/**
 * Converts an object of type 'AppflowTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTask(obj: AppflowTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceFields': obj.sourceFields?.map(y => y),
    'connectorOperator': toJson_AppflowConnectorOperator(obj.connectorOperator),
    'destinationField': obj.destinationField,
    'taskType': obj.taskType,
    'taskProperties': ((obj.taskProperties) === undefined) ? undefined : (Object.entries(obj.taskProperties).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorEntityField
 */
export interface AppflowConnectorEntityField {
  /**
   * @schema AppflowConnectorEntityField#identifier
   */
  readonly identifier: string;

  /**
   * @schema AppflowConnectorEntityField#label
   */
  readonly label?: string;

  /**
   * @schema AppflowConnectorEntityField#supportedFieldTypeDetails
   */
  readonly supportedFieldTypeDetails?: AppflowSupportedFieldTypeDetails;

  /**
   * @schema AppflowConnectorEntityField#description
   */
  readonly description?: string;

  /**
   * @schema AppflowConnectorEntityField#sourceProperties
   */
  readonly sourceProperties?: AppflowSourceFieldProperties;

  /**
   * @schema AppflowConnectorEntityField#destinationProperties
   */
  readonly destinationProperties?: AppflowDestinationFieldProperties;

}

/**
 * Converts an object of type 'AppflowConnectorEntityField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorEntityField(obj: AppflowConnectorEntityField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identifier': obj.identifier,
    'label': obj.label,
    'supportedFieldTypeDetails': toJson_AppflowSupportedFieldTypeDetails(obj.supportedFieldTypeDetails),
    'description': obj.description,
    'sourceProperties': toJson_AppflowSourceFieldProperties(obj.sourceProperties),
    'destinationProperties': toJson_AppflowDestinationFieldProperties(obj.destinationProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorProfile
 */
export interface AppflowConnectorProfile {
  /**
   * @schema AppflowConnectorProfile#connectorProfileArn
   */
  readonly connectorProfileArn?: string;

  /**
   * @schema AppflowConnectorProfile#connectorProfileName
   */
  readonly connectorProfileName?: string;

  /**
   * @schema AppflowConnectorProfile#connectorType
   */
  readonly connectorType?: string;

  /**
   * @schema AppflowConnectorProfile#connectionMode
   */
  readonly connectionMode?: string;

  /**
   * @schema AppflowConnectorProfile#credentialsArn
   */
  readonly credentialsArn?: string;

  /**
   * @schema AppflowConnectorProfile#connectorProfileProperties
   */
  readonly connectorProfileProperties?: AppflowConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfile#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppflowConnectorProfile#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * Converts an object of type 'AppflowConnectorProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorProfile(obj: AppflowConnectorProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectorProfileArn': obj.connectorProfileArn,
    'connectorProfileName': obj.connectorProfileName,
    'connectorType': obj.connectorType,
    'connectionMode': obj.connectionMode,
    'credentialsArn': obj.credentialsArn,
    'connectorProfileProperties': toJson_AppflowConnectorProfileProperties(obj.connectorProfileProperties),
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorConfiguration
 */
export interface AppflowConnectorConfiguration {
  /**
   * @schema AppflowConnectorConfiguration#canUseAsSource
   */
  readonly canUseAsSource?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#canUseAsDestination
   */
  readonly canUseAsDestination?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#supportedDestinationConnectors
   */
  readonly supportedDestinationConnectors?: string[];

  /**
   * @schema AppflowConnectorConfiguration#supportedSchedulingFrequencies
   */
  readonly supportedSchedulingFrequencies?: string[];

  /**
   * @schema AppflowConnectorConfiguration#isPrivateLinkEnabled
   */
  readonly isPrivateLinkEnabled?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#isPrivateLinkEndpointUrlRequired
   */
  readonly isPrivateLinkEndpointUrlRequired?: boolean;

  /**
   * @schema AppflowConnectorConfiguration#supportedTriggerTypes
   */
  readonly supportedTriggerTypes?: string[];

  /**
   * @schema AppflowConnectorConfiguration#connectorMetadata
   */
  readonly connectorMetadata?: AppflowConnectorMetadata;

}

/**
 * Converts an object of type 'AppflowConnectorConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorConfiguration(obj: AppflowConnectorConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'canUseAsSource': obj.canUseAsSource,
    'canUseAsDestination': obj.canUseAsDestination,
    'supportedDestinationConnectors': obj.supportedDestinationConnectors?.map(y => y),
    'supportedSchedulingFrequencies': obj.supportedSchedulingFrequencies?.map(y => y),
    'isPrivateLinkEnabled': obj.isPrivateLinkEnabled,
    'isPrivateLinkEndpointUrlRequired': obj.isPrivateLinkEndpointUrlRequired,
    'supportedTriggerTypes': obj.supportedTriggerTypes?.map(y => y),
    'connectorMetadata': toJson_AppflowConnectorMetadata(obj.connectorMetadata),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowExecutionDetails
 */
export interface AppflowExecutionDetails {
  /**
   * @schema AppflowExecutionDetails#mostRecentExecutionMessage
   */
  readonly mostRecentExecutionMessage?: string;

  /**
   * @schema AppflowExecutionDetails#mostRecentExecutionTime
   */
  readonly mostRecentExecutionTime?: string;

  /**
   * @schema AppflowExecutionDetails#mostRecentExecutionStatus
   */
  readonly mostRecentExecutionStatus?: string;

}

/**
 * Converts an object of type 'AppflowExecutionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowExecutionDetails(obj: AppflowExecutionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mostRecentExecutionMessage': obj.mostRecentExecutionMessage,
    'mostRecentExecutionTime': obj.mostRecentExecutionTime,
    'mostRecentExecutionStatus': obj.mostRecentExecutionStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowExecutionRecord
 */
export interface AppflowExecutionRecord {
  /**
   * @schema AppflowExecutionRecord#executionId
   */
  readonly executionId?: string;

  /**
   * @schema AppflowExecutionRecord#executionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema AppflowExecutionRecord#executionResult
   */
  readonly executionResult?: AppflowExecutionResult;

  /**
   * @schema AppflowExecutionRecord#startedAt
   */
  readonly startedAt?: string;

  /**
   * @schema AppflowExecutionRecord#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AppflowExecutionRecord#dataPullStartTime
   */
  readonly dataPullStartTime?: string;

  /**
   * @schema AppflowExecutionRecord#dataPullEndTime
   */
  readonly dataPullEndTime?: string;

}

/**
 * Converts an object of type 'AppflowExecutionRecord' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowExecutionRecord(obj: AppflowExecutionRecord | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'executionId': obj.executionId,
    'executionStatus': obj.executionStatus,
    'executionResult': toJson_AppflowExecutionResult(obj.executionResult),
    'startedAt': obj.startedAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'dataPullStartTime': obj.dataPullStartTime,
    'dataPullEndTime': obj.dataPullEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorEntity
 */
export interface AppflowConnectorEntity {
  /**
   * @schema AppflowConnectorEntity#name
   */
  readonly name: string;

  /**
   * @schema AppflowConnectorEntity#label
   */
  readonly label?: string;

  /**
   * @schema AppflowConnectorEntity#hasNestedEntities
   */
  readonly hasNestedEntities?: boolean;

}

/**
 * Converts an object of type 'AppflowConnectorEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorEntity(obj: AppflowConnectorEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'label': obj.label,
    'hasNestedEntities': obj.hasNestedEntities,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowFlowDefinition
 */
export interface AppflowFlowDefinition {
  /**
   * @schema AppflowFlowDefinition#flowArn
   */
  readonly flowArn?: string;

  /**
   * @schema AppflowFlowDefinition#description
   */
  readonly description?: string;

  /**
   * @schema AppflowFlowDefinition#flowName
   */
  readonly flowName?: string;

  /**
   * @schema AppflowFlowDefinition#flowStatus
   */
  readonly flowStatus?: string;

  /**
   * @schema AppflowFlowDefinition#sourceConnectorType
   */
  readonly sourceConnectorType?: string;

  /**
   * @schema AppflowFlowDefinition#destinationConnectorType
   */
  readonly destinationConnectorType?: string;

  /**
   * @schema AppflowFlowDefinition#triggerType
   */
  readonly triggerType?: string;

  /**
   * @schema AppflowFlowDefinition#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema AppflowFlowDefinition#lastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema AppflowFlowDefinition#createdBy
   */
  readonly createdBy?: string;

  /**
   * @schema AppflowFlowDefinition#lastUpdatedBy
   */
  readonly lastUpdatedBy?: string;

  /**
   * @schema AppflowFlowDefinition#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema AppflowFlowDefinition#lastRunExecutionDetails
   */
  readonly lastRunExecutionDetails?: AppflowExecutionDetails;

}

/**
 * Converts an object of type 'AppflowFlowDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowFlowDefinition(obj: AppflowFlowDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'flowArn': obj.flowArn,
    'description': obj.description,
    'flowName': obj.flowName,
    'flowStatus': obj.flowStatus,
    'sourceConnectorType': obj.sourceConnectorType,
    'destinationConnectorType': obj.destinationConnectorType,
    'triggerType': obj.triggerType,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'createdBy': obj.createdBy,
    'lastUpdatedBy': obj.lastUpdatedBy,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'lastRunExecutionDetails': toJson_AppflowExecutionDetails(obj.lastRunExecutionDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorProfileProperties
 */
export interface AppflowConnectorProfileProperties {
  /**
   * @schema AppflowConnectorProfileProperties#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Datadog
   */
  readonly datadog?: AppflowDatadogConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Honeycode
   */
  readonly honeycode?: AppflowHoneycodeConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Marketo
   */
  readonly marketo?: AppflowMarketoConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Redshift
   */
  readonly redshift?: AppflowRedshiftConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Salesforce
   */
  readonly salesforce?: AppflowSalesforceConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Singular
   */
  readonly singular?: AppflowSingularConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Slack
   */
  readonly slack?: AppflowSlackConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Veeva
   */
  readonly veeva?: AppflowVeevaConnectorProfileProperties;

  /**
   * @schema AppflowConnectorProfileProperties#Zendesk
   */
  readonly zendesk?: AppflowZendeskConnectorProfileProperties;

}

/**
 * Converts an object of type 'AppflowConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorProfileProperties(obj: AppflowConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amplitude': toJson_AppflowAmplitudeConnectorProfileProperties(obj.amplitude),
    'Datadog': toJson_AppflowDatadogConnectorProfileProperties(obj.datadog),
    'Dynatrace': toJson_AppflowDynatraceConnectorProfileProperties(obj.dynatrace),
    'GoogleAnalytics': toJson_AppflowGoogleAnalyticsConnectorProfileProperties(obj.googleAnalytics),
    'Honeycode': toJson_AppflowHoneycodeConnectorProfileProperties(obj.honeycode),
    'InforNexus': toJson_AppflowInforNexusConnectorProfileProperties(obj.inforNexus),
    'Marketo': toJson_AppflowMarketoConnectorProfileProperties(obj.marketo),
    'Redshift': toJson_AppflowRedshiftConnectorProfileProperties(obj.redshift),
    'Salesforce': toJson_AppflowSalesforceConnectorProfileProperties(obj.salesforce),
    'ServiceNow': toJson_AppflowServiceNowConnectorProfileProperties(obj.serviceNow),
    'Singular': toJson_AppflowSingularConnectorProfileProperties(obj.singular),
    'Slack': toJson_AppflowSlackConnectorProfileProperties(obj.slack),
    'Snowflake': toJson_AppflowSnowflakeConnectorProfileProperties(obj.snowflake),
    'Trendmicro': toJson_AppflowTrendmicroConnectorProfileProperties(obj.trendmicro),
    'Veeva': toJson_AppflowVeevaConnectorProfileProperties(obj.veeva),
    'Zendesk': toJson_AppflowZendeskConnectorProfileProperties(obj.zendesk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorProfileCredentials
 */
export interface AppflowConnectorProfileCredentials {
  /**
   * @schema AppflowConnectorProfileCredentials#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Datadog
   */
  readonly datadog?: AppflowDatadogConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Honeycode
   */
  readonly honeycode?: AppflowHoneycodeConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Marketo
   */
  readonly marketo?: AppflowMarketoConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Redshift
   */
  readonly redshift?: AppflowRedshiftConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Salesforce
   */
  readonly salesforce?: AppflowSalesforceConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Singular
   */
  readonly singular?: AppflowSingularConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Slack
   */
  readonly slack?: AppflowSlackConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Veeva
   */
  readonly veeva?: AppflowVeevaConnectorProfileCredentials;

  /**
   * @schema AppflowConnectorProfileCredentials#Zendesk
   */
  readonly zendesk?: AppflowZendeskConnectorProfileCredentials;

}

/**
 * Converts an object of type 'AppflowConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorProfileCredentials(obj: AppflowConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amplitude': toJson_AppflowAmplitudeConnectorProfileCredentials(obj.amplitude),
    'Datadog': toJson_AppflowDatadogConnectorProfileCredentials(obj.datadog),
    'Dynatrace': toJson_AppflowDynatraceConnectorProfileCredentials(obj.dynatrace),
    'GoogleAnalytics': toJson_AppflowGoogleAnalyticsConnectorProfileCredentials(obj.googleAnalytics),
    'Honeycode': toJson_AppflowHoneycodeConnectorProfileCredentials(obj.honeycode),
    'InforNexus': toJson_AppflowInforNexusConnectorProfileCredentials(obj.inforNexus),
    'Marketo': toJson_AppflowMarketoConnectorProfileCredentials(obj.marketo),
    'Redshift': toJson_AppflowRedshiftConnectorProfileCredentials(obj.redshift),
    'Salesforce': toJson_AppflowSalesforceConnectorProfileCredentials(obj.salesforce),
    'ServiceNow': toJson_AppflowServiceNowConnectorProfileCredentials(obj.serviceNow),
    'Singular': toJson_AppflowSingularConnectorProfileCredentials(obj.singular),
    'Slack': toJson_AppflowSlackConnectorProfileCredentials(obj.slack),
    'Snowflake': toJson_AppflowSnowflakeConnectorProfileCredentials(obj.snowflake),
    'Trendmicro': toJson_AppflowTrendmicroConnectorProfileCredentials(obj.trendmicro),
    'Veeva': toJson_AppflowVeevaConnectorProfileCredentials(obj.veeva),
    'Zendesk': toJson_AppflowZendeskConnectorProfileCredentials(obj.zendesk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTriggerProperties
 */
export interface AppflowTriggerProperties {
  /**
   * @schema AppflowTriggerProperties#Scheduled
   */
  readonly scheduled?: AppflowScheduledTriggerProperties;

}

/**
 * Converts an object of type 'AppflowTriggerProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTriggerProperties(obj: AppflowTriggerProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Scheduled': toJson_AppflowScheduledTriggerProperties(obj.scheduled),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSourceConnectorProperties
 */
export interface AppflowSourceConnectorProperties {
  /**
   * @schema AppflowSourceConnectorProperties#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Datadog
   */
  readonly datadog?: AppflowDatadogSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Marketo
   */
  readonly marketo?: AppflowMarketoSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#S3
   */
  readonly s3?: AppflowS3SourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Salesforce
   */
  readonly salesforce?: AppflowSalesforceSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Singular
   */
  readonly singular?: AppflowSingularSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Slack
   */
  readonly slack?: AppflowSlackSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Veeva
   */
  readonly veeva?: AppflowVeevaSourceProperties;

  /**
   * @schema AppflowSourceConnectorProperties#Zendesk
   */
  readonly zendesk?: AppflowZendeskSourceProperties;

}

/**
 * Converts an object of type 'AppflowSourceConnectorProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSourceConnectorProperties(obj: AppflowSourceConnectorProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amplitude': toJson_AppflowAmplitudeSourceProperties(obj.amplitude),
    'Datadog': toJson_AppflowDatadogSourceProperties(obj.datadog),
    'Dynatrace': toJson_AppflowDynatraceSourceProperties(obj.dynatrace),
    'GoogleAnalytics': toJson_AppflowGoogleAnalyticsSourceProperties(obj.googleAnalytics),
    'InforNexus': toJson_AppflowInforNexusSourceProperties(obj.inforNexus),
    'Marketo': toJson_AppflowMarketoSourceProperties(obj.marketo),
    'S3': toJson_AppflowS3SourceProperties(obj.s3),
    'Salesforce': toJson_AppflowSalesforceSourceProperties(obj.salesforce),
    'ServiceNow': toJson_AppflowServiceNowSourceProperties(obj.serviceNow),
    'Singular': toJson_AppflowSingularSourceProperties(obj.singular),
    'Slack': toJson_AppflowSlackSourceProperties(obj.slack),
    'Trendmicro': toJson_AppflowTrendmicroSourceProperties(obj.trendmicro),
    'Veeva': toJson_AppflowVeevaSourceProperties(obj.veeva),
    'Zendesk': toJson_AppflowZendeskSourceProperties(obj.zendesk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowIncrementalPullConfig
 */
export interface AppflowIncrementalPullConfig {
  /**
   * @schema AppflowIncrementalPullConfig#datetimeTypeFieldName
   */
  readonly datetimeTypeFieldName?: string;

}

/**
 * Converts an object of type 'AppflowIncrementalPullConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowIncrementalPullConfig(obj: AppflowIncrementalPullConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'datetimeTypeFieldName': obj.datetimeTypeFieldName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDestinationConnectorProperties
 */
export interface AppflowDestinationConnectorProperties {
  /**
   * @schema AppflowDestinationConnectorProperties#Redshift
   */
  readonly redshift?: AppflowRedshiftDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#S3
   */
  readonly s3?: AppflowS3DestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Salesforce
   */
  readonly salesforce?: AppflowSalesforceDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#EventBridge
   */
  readonly eventBridge?: AppflowEventBridgeDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#LookoutMetrics
   */
  readonly lookoutMetrics?: AppflowLookoutMetricsDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Upsolver
   */
  readonly upsolver?: AppflowUpsolverDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Honeycode
   */
  readonly honeycode?: AppflowHoneycodeDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#CustomerProfiles
   */
  readonly customerProfiles?: AppflowCustomerProfilesDestinationProperties;

  /**
   * @schema AppflowDestinationConnectorProperties#Zendesk
   */
  readonly zendesk?: AppflowZendeskDestinationProperties;

}

/**
 * Converts an object of type 'AppflowDestinationConnectorProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDestinationConnectorProperties(obj: AppflowDestinationConnectorProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Redshift': toJson_AppflowRedshiftDestinationProperties(obj.redshift),
    'S3': toJson_AppflowS3DestinationProperties(obj.s3),
    'Salesforce': toJson_AppflowSalesforceDestinationProperties(obj.salesforce),
    'Snowflake': toJson_AppflowSnowflakeDestinationProperties(obj.snowflake),
    'EventBridge': toJson_AppflowEventBridgeDestinationProperties(obj.eventBridge),
    'LookoutMetrics': toJson_AppflowLookoutMetricsDestinationProperties(obj.lookoutMetrics),
    'Upsolver': toJson_AppflowUpsolverDestinationProperties(obj.upsolver),
    'Honeycode': toJson_AppflowHoneycodeDestinationProperties(obj.honeycode),
    'CustomerProfiles': toJson_AppflowCustomerProfilesDestinationProperties(obj.customerProfiles),
    'Zendesk': toJson_AppflowZendeskDestinationProperties(obj.zendesk),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorOperator
 */
export interface AppflowConnectorOperator {
  /**
   * @schema AppflowConnectorOperator#Amplitude
   */
  readonly amplitude?: string;

  /**
   * @schema AppflowConnectorOperator#Datadog
   */
  readonly datadog?: string;

  /**
   * @schema AppflowConnectorOperator#Dynatrace
   */
  readonly dynatrace?: string;

  /**
   * @schema AppflowConnectorOperator#GoogleAnalytics
   */
  readonly googleAnalytics?: string;

  /**
   * @schema AppflowConnectorOperator#InforNexus
   */
  readonly inforNexus?: string;

  /**
   * @schema AppflowConnectorOperator#Marketo
   */
  readonly marketo?: string;

  /**
   * @schema AppflowConnectorOperator#S3
   */
  readonly s3?: string;

  /**
   * @schema AppflowConnectorOperator#Salesforce
   */
  readonly salesforce?: string;

  /**
   * @schema AppflowConnectorOperator#ServiceNow
   */
  readonly serviceNow?: string;

  /**
   * @schema AppflowConnectorOperator#Singular
   */
  readonly singular?: string;

  /**
   * @schema AppflowConnectorOperator#Slack
   */
  readonly slack?: string;

  /**
   * @schema AppflowConnectorOperator#Trendmicro
   */
  readonly trendmicro?: string;

  /**
   * @schema AppflowConnectorOperator#Veeva
   */
  readonly veeva?: string;

  /**
   * @schema AppflowConnectorOperator#Zendesk
   */
  readonly zendesk?: string;

}

/**
 * Converts an object of type 'AppflowConnectorOperator' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorOperator(obj: AppflowConnectorOperator | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amplitude': obj.amplitude,
    'Datadog': obj.datadog,
    'Dynatrace': obj.dynatrace,
    'GoogleAnalytics': obj.googleAnalytics,
    'InforNexus': obj.inforNexus,
    'Marketo': obj.marketo,
    'S3': obj.s3,
    'Salesforce': obj.salesforce,
    'ServiceNow': obj.serviceNow,
    'Singular': obj.singular,
    'Slack': obj.slack,
    'Trendmicro': obj.trendmicro,
    'Veeva': obj.veeva,
    'Zendesk': obj.zendesk,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSupportedFieldTypeDetails
 */
export interface AppflowSupportedFieldTypeDetails {
  /**
   * @schema AppflowSupportedFieldTypeDetails#v1
   */
  readonly v1: AppflowFieldTypeDetails;

}

/**
 * Converts an object of type 'AppflowSupportedFieldTypeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSupportedFieldTypeDetails(obj: AppflowSupportedFieldTypeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'v1': toJson_AppflowFieldTypeDetails(obj.v1),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSourceFieldProperties
 */
export interface AppflowSourceFieldProperties {
  /**
   * @schema AppflowSourceFieldProperties#isRetrievable
   */
  readonly isRetrievable?: boolean;

  /**
   * @schema AppflowSourceFieldProperties#isQueryable
   */
  readonly isQueryable?: boolean;

}

/**
 * Converts an object of type 'AppflowSourceFieldProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSourceFieldProperties(obj: AppflowSourceFieldProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isRetrievable': obj.isRetrievable,
    'isQueryable': obj.isQueryable,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDestinationFieldProperties
 */
export interface AppflowDestinationFieldProperties {
  /**
   * @schema AppflowDestinationFieldProperties#isCreatable
   */
  readonly isCreatable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#isNullable
   */
  readonly isNullable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#isUpsertable
   */
  readonly isUpsertable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#isUpdatable
   */
  readonly isUpdatable?: boolean;

  /**
   * @schema AppflowDestinationFieldProperties#supportedWriteOperations
   */
  readonly supportedWriteOperations?: string[];

}

/**
 * Converts an object of type 'AppflowDestinationFieldProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDestinationFieldProperties(obj: AppflowDestinationFieldProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'isCreatable': obj.isCreatable,
    'isNullable': obj.isNullable,
    'isUpsertable': obj.isUpsertable,
    'isUpdatable': obj.isUpdatable,
    'supportedWriteOperations': obj.supportedWriteOperations?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorMetadata
 */
export interface AppflowConnectorMetadata {
  /**
   * @schema AppflowConnectorMetadata#Amplitude
   */
  readonly amplitude?: AppflowAmplitudeMetadata;

  /**
   * @schema AppflowConnectorMetadata#Datadog
   */
  readonly datadog?: AppflowDatadogMetadata;

  /**
   * @schema AppflowConnectorMetadata#Dynatrace
   */
  readonly dynatrace?: AppflowDynatraceMetadata;

  /**
   * @schema AppflowConnectorMetadata#GoogleAnalytics
   */
  readonly googleAnalytics?: AppflowGoogleAnalyticsMetadata;

  /**
   * @schema AppflowConnectorMetadata#InforNexus
   */
  readonly inforNexus?: AppflowInforNexusMetadata;

  /**
   * @schema AppflowConnectorMetadata#Marketo
   */
  readonly marketo?: AppflowMarketoMetadata;

  /**
   * @schema AppflowConnectorMetadata#Redshift
   */
  readonly redshift?: AppflowRedshiftMetadata;

  /**
   * @schema AppflowConnectorMetadata#S3
   */
  readonly s3?: AppflowS3Metadata;

  /**
   * @schema AppflowConnectorMetadata#Salesforce
   */
  readonly salesforce?: AppflowSalesforceMetadata;

  /**
   * @schema AppflowConnectorMetadata#ServiceNow
   */
  readonly serviceNow?: AppflowServiceNowMetadata;

  /**
   * @schema AppflowConnectorMetadata#Singular
   */
  readonly singular?: AppflowSingularMetadata;

  /**
   * @schema AppflowConnectorMetadata#Slack
   */
  readonly slack?: AppflowSlackMetadata;

  /**
   * @schema AppflowConnectorMetadata#Snowflake
   */
  readonly snowflake?: AppflowSnowflakeMetadata;

  /**
   * @schema AppflowConnectorMetadata#Trendmicro
   */
  readonly trendmicro?: AppflowTrendmicroMetadata;

  /**
   * @schema AppflowConnectorMetadata#Veeva
   */
  readonly veeva?: AppflowVeevaMetadata;

  /**
   * @schema AppflowConnectorMetadata#Zendesk
   */
  readonly zendesk?: AppflowZendeskMetadata;

  /**
   * @schema AppflowConnectorMetadata#EventBridge
   */
  readonly eventBridge?: AppflowEventBridgeMetadata;

  /**
   * @schema AppflowConnectorMetadata#Upsolver
   */
  readonly upsolver?: AppflowUpsolverMetadata;

  /**
   * @schema AppflowConnectorMetadata#CustomerProfiles
   */
  readonly customerProfiles?: AppflowCustomerProfilesMetadata;

  /**
   * @schema AppflowConnectorMetadata#Honeycode
   */
  readonly honeycode?: AppflowHoneycodeMetadata;

}

/**
 * Converts an object of type 'AppflowConnectorMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorMetadata(obj: AppflowConnectorMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Amplitude': toJson_AppflowAmplitudeMetadata(obj.amplitude),
    'Datadog': toJson_AppflowDatadogMetadata(obj.datadog),
    'Dynatrace': toJson_AppflowDynatraceMetadata(obj.dynatrace),
    'GoogleAnalytics': toJson_AppflowGoogleAnalyticsMetadata(obj.googleAnalytics),
    'InforNexus': toJson_AppflowInforNexusMetadata(obj.inforNexus),
    'Marketo': toJson_AppflowMarketoMetadata(obj.marketo),
    'Redshift': toJson_AppflowRedshiftMetadata(obj.redshift),
    'S3': toJson_AppflowS3Metadata(obj.s3),
    'Salesforce': toJson_AppflowSalesforceMetadata(obj.salesforce),
    'ServiceNow': toJson_AppflowServiceNowMetadata(obj.serviceNow),
    'Singular': toJson_AppflowSingularMetadata(obj.singular),
    'Slack': toJson_AppflowSlackMetadata(obj.slack),
    'Snowflake': toJson_AppflowSnowflakeMetadata(obj.snowflake),
    'Trendmicro': toJson_AppflowTrendmicroMetadata(obj.trendmicro),
    'Veeva': toJson_AppflowVeevaMetadata(obj.veeva),
    'Zendesk': toJson_AppflowZendeskMetadata(obj.zendesk),
    'EventBridge': toJson_AppflowEventBridgeMetadata(obj.eventBridge),
    'Upsolver': toJson_AppflowUpsolverMetadata(obj.upsolver),
    'CustomerProfiles': toJson_AppflowCustomerProfilesMetadata(obj.customerProfiles),
    'Honeycode': toJson_AppflowHoneycodeMetadata(obj.honeycode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowExecutionResult
 */
export interface AppflowExecutionResult {
  /**
   * @schema AppflowExecutionResult#errorInfo
   */
  readonly errorInfo?: AppflowErrorInfo;

  /**
   * @schema AppflowExecutionResult#bytesProcessed
   */
  readonly bytesProcessed?: number;

  /**
   * @schema AppflowExecutionResult#bytesWritten
   */
  readonly bytesWritten?: number;

  /**
   * @schema AppflowExecutionResult#recordsProcessed
   */
  readonly recordsProcessed?: number;

}

/**
 * Converts an object of type 'AppflowExecutionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowExecutionResult(obj: AppflowExecutionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorInfo': toJson_AppflowErrorInfo(obj.errorInfo),
    'bytesProcessed': obj.bytesProcessed,
    'bytesWritten': obj.bytesWritten,
    'recordsProcessed': obj.recordsProcessed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowAmplitudeConnectorProfileProperties
 */
export interface AppflowAmplitudeConnectorProfileProperties {
}

/**
 * Converts an object of type 'AppflowAmplitudeConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowAmplitudeConnectorProfileProperties(obj: AppflowAmplitudeConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDatadogConnectorProfileProperties
 */
export interface AppflowDatadogConnectorProfileProperties {
  /**
   * @schema AppflowDatadogConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowDatadogConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDatadogConnectorProfileProperties(obj: AppflowDatadogConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDynatraceConnectorProfileProperties
 */
export interface AppflowDynatraceConnectorProfileProperties {
  /**
   * @schema AppflowDynatraceConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowDynatraceConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDynatraceConnectorProfileProperties(obj: AppflowDynatraceConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowGoogleAnalyticsConnectorProfileProperties
 */
export interface AppflowGoogleAnalyticsConnectorProfileProperties {
}

/**
 * Converts an object of type 'AppflowGoogleAnalyticsConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowGoogleAnalyticsConnectorProfileProperties(obj: AppflowGoogleAnalyticsConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowHoneycodeConnectorProfileProperties
 */
export interface AppflowHoneycodeConnectorProfileProperties {
}

/**
 * Converts an object of type 'AppflowHoneycodeConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowHoneycodeConnectorProfileProperties(obj: AppflowHoneycodeConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowInforNexusConnectorProfileProperties
 */
export interface AppflowInforNexusConnectorProfileProperties {
  /**
   * @schema AppflowInforNexusConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowInforNexusConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowInforNexusConnectorProfileProperties(obj: AppflowInforNexusConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowMarketoConnectorProfileProperties
 */
export interface AppflowMarketoConnectorProfileProperties {
  /**
   * @schema AppflowMarketoConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowMarketoConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowMarketoConnectorProfileProperties(obj: AppflowMarketoConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowRedshiftConnectorProfileProperties
 */
export interface AppflowRedshiftConnectorProfileProperties {
  /**
   * @schema AppflowRedshiftConnectorProfileProperties#databaseUrl
   */
  readonly databaseUrl: string;

  /**
   * @schema AppflowRedshiftConnectorProfileProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowRedshiftConnectorProfileProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowRedshiftConnectorProfileProperties#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'AppflowRedshiftConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowRedshiftConnectorProfileProperties(obj: AppflowRedshiftConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'databaseUrl': obj.databaseUrl,
    'bucketName': obj.bucketName,
    'bucketPrefix': obj.bucketPrefix,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSalesforceConnectorProfileProperties
 */
export interface AppflowSalesforceConnectorProfileProperties {
  /**
   * @schema AppflowSalesforceConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl?: string;

  /**
   * @schema AppflowSalesforceConnectorProfileProperties#isSandboxEnvironment
   */
  readonly isSandboxEnvironment?: boolean;

}

/**
 * Converts an object of type 'AppflowSalesforceConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSalesforceConnectorProfileProperties(obj: AppflowSalesforceConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
    'isSandboxEnvironment': obj.isSandboxEnvironment,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowServiceNowConnectorProfileProperties
 */
export interface AppflowServiceNowConnectorProfileProperties {
  /**
   * @schema AppflowServiceNowConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowServiceNowConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowServiceNowConnectorProfileProperties(obj: AppflowServiceNowConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSingularConnectorProfileProperties
 */
export interface AppflowSingularConnectorProfileProperties {
}

/**
 * Converts an object of type 'AppflowSingularConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSingularConnectorProfileProperties(obj: AppflowSingularConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSlackConnectorProfileProperties
 */
export interface AppflowSlackConnectorProfileProperties {
  /**
   * @schema AppflowSlackConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowSlackConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSlackConnectorProfileProperties(obj: AppflowSlackConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSnowflakeConnectorProfileProperties
 */
export interface AppflowSnowflakeConnectorProfileProperties {
  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#warehouse
   */
  readonly warehouse: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#stage
   */
  readonly stage: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#privateLinkServiceName
   */
  readonly privateLinkServiceName?: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#accountName
   */
  readonly accountName?: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileProperties#region
   */
  readonly region?: string;

}

/**
 * Converts an object of type 'AppflowSnowflakeConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSnowflakeConnectorProfileProperties(obj: AppflowSnowflakeConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'warehouse': obj.warehouse,
    'stage': obj.stage,
    'bucketName': obj.bucketName,
    'bucketPrefix': obj.bucketPrefix,
    'privateLinkServiceName': obj.privateLinkServiceName,
    'accountName': obj.accountName,
    'region': obj.region,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTrendmicroConnectorProfileProperties
 */
export interface AppflowTrendmicroConnectorProfileProperties {
}

/**
 * Converts an object of type 'AppflowTrendmicroConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTrendmicroConnectorProfileProperties(obj: AppflowTrendmicroConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowVeevaConnectorProfileProperties
 */
export interface AppflowVeevaConnectorProfileProperties {
  /**
   * @schema AppflowVeevaConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowVeevaConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowVeevaConnectorProfileProperties(obj: AppflowVeevaConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowZendeskConnectorProfileProperties
 */
export interface AppflowZendeskConnectorProfileProperties {
  /**
   * @schema AppflowZendeskConnectorProfileProperties#instanceUrl
   */
  readonly instanceUrl: string;

}

/**
 * Converts an object of type 'AppflowZendeskConnectorProfileProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowZendeskConnectorProfileProperties(obj: AppflowZendeskConnectorProfileProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'instanceUrl': obj.instanceUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowAmplitudeConnectorProfileCredentials
 */
export interface AppflowAmplitudeConnectorProfileCredentials {
  /**
   * @schema AppflowAmplitudeConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema AppflowAmplitudeConnectorProfileCredentials#secretKey
   */
  readonly secretKey: string;

}

/**
 * Converts an object of type 'AppflowAmplitudeConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowAmplitudeConnectorProfileCredentials(obj: AppflowAmplitudeConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': obj.apiKey,
    'secretKey': obj.secretKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDatadogConnectorProfileCredentials
 */
export interface AppflowDatadogConnectorProfileCredentials {
  /**
   * @schema AppflowDatadogConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

  /**
   * @schema AppflowDatadogConnectorProfileCredentials#applicationKey
   */
  readonly applicationKey: string;

}

/**
 * Converts an object of type 'AppflowDatadogConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDatadogConnectorProfileCredentials(obj: AppflowDatadogConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': obj.apiKey,
    'applicationKey': obj.applicationKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDynatraceConnectorProfileCredentials
 */
export interface AppflowDynatraceConnectorProfileCredentials {
  /**
   * @schema AppflowDynatraceConnectorProfileCredentials#apiToken
   */
  readonly apiToken: string;

}

/**
 * Converts an object of type 'AppflowDynatraceConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDynatraceConnectorProfileCredentials(obj: AppflowDynatraceConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiToken': obj.apiToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowGoogleAnalyticsConnectorProfileCredentials
 */
export interface AppflowGoogleAnalyticsConnectorProfileCredentials {
  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema AppflowGoogleAnalyticsConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * Converts an object of type 'AppflowGoogleAnalyticsConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowGoogleAnalyticsConnectorProfileCredentials(obj: AppflowGoogleAnalyticsConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'accessToken': obj.accessToken,
    'refreshToken': obj.refreshToken,
    'oAuthRequest': toJson_AppflowConnectorOAuthRequest(obj.oAuthRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowHoneycodeConnectorProfileCredentials
 */
export interface AppflowHoneycodeConnectorProfileCredentials {
  /**
   * @schema AppflowHoneycodeConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowHoneycodeConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema AppflowHoneycodeConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * Converts an object of type 'AppflowHoneycodeConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowHoneycodeConnectorProfileCredentials(obj: AppflowHoneycodeConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessToken': obj.accessToken,
    'refreshToken': obj.refreshToken,
    'oAuthRequest': toJson_AppflowConnectorOAuthRequest(obj.oAuthRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowInforNexusConnectorProfileCredentials
 */
export interface AppflowInforNexusConnectorProfileCredentials {
  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#accessKeyId
   */
  readonly accessKeyId: string;

  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#userId
   */
  readonly userId: string;

  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#secretAccessKey
   */
  readonly secretAccessKey: string;

  /**
   * @schema AppflowInforNexusConnectorProfileCredentials#datakey
   */
  readonly datakey: string;

}

/**
 * Converts an object of type 'AppflowInforNexusConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowInforNexusConnectorProfileCredentials(obj: AppflowInforNexusConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessKeyId': obj.accessKeyId,
    'userId': obj.userId,
    'secretAccessKey': obj.secretAccessKey,
    'datakey': obj.datakey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowMarketoConnectorProfileCredentials
 */
export interface AppflowMarketoConnectorProfileCredentials {
  /**
   * @schema AppflowMarketoConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowMarketoConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowMarketoConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowMarketoConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * Converts an object of type 'AppflowMarketoConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowMarketoConnectorProfileCredentials(obj: AppflowMarketoConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'accessToken': obj.accessToken,
    'oAuthRequest': toJson_AppflowConnectorOAuthRequest(obj.oAuthRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowRedshiftConnectorProfileCredentials
 */
export interface AppflowRedshiftConnectorProfileCredentials {
  /**
   * @schema AppflowRedshiftConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowRedshiftConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * Converts an object of type 'AppflowRedshiftConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowRedshiftConnectorProfileCredentials(obj: AppflowRedshiftConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSalesforceConnectorProfileCredentials
 */
export interface AppflowSalesforceConnectorProfileCredentials {
  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#refreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

  /**
   * @schema AppflowSalesforceConnectorProfileCredentials#clientCredentialsArn
   */
  readonly clientCredentialsArn?: string;

}

/**
 * Converts an object of type 'AppflowSalesforceConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSalesforceConnectorProfileCredentials(obj: AppflowSalesforceConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessToken': obj.accessToken,
    'refreshToken': obj.refreshToken,
    'oAuthRequest': toJson_AppflowConnectorOAuthRequest(obj.oAuthRequest),
    'clientCredentialsArn': obj.clientCredentialsArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowServiceNowConnectorProfileCredentials
 */
export interface AppflowServiceNowConnectorProfileCredentials {
  /**
   * @schema AppflowServiceNowConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowServiceNowConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * Converts an object of type 'AppflowServiceNowConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowServiceNowConnectorProfileCredentials(obj: AppflowServiceNowConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSingularConnectorProfileCredentials
 */
export interface AppflowSingularConnectorProfileCredentials {
  /**
   * @schema AppflowSingularConnectorProfileCredentials#apiKey
   */
  readonly apiKey: string;

}

/**
 * Converts an object of type 'AppflowSingularConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSingularConnectorProfileCredentials(obj: AppflowSingularConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiKey': obj.apiKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSlackConnectorProfileCredentials
 */
export interface AppflowSlackConnectorProfileCredentials {
  /**
   * @schema AppflowSlackConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowSlackConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowSlackConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowSlackConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * Converts an object of type 'AppflowSlackConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSlackConnectorProfileCredentials(obj: AppflowSlackConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'accessToken': obj.accessToken,
    'oAuthRequest': toJson_AppflowConnectorOAuthRequest(obj.oAuthRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSnowflakeConnectorProfileCredentials
 */
export interface AppflowSnowflakeConnectorProfileCredentials {
  /**
   * @schema AppflowSnowflakeConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowSnowflakeConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * Converts an object of type 'AppflowSnowflakeConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSnowflakeConnectorProfileCredentials(obj: AppflowSnowflakeConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTrendmicroConnectorProfileCredentials
 */
export interface AppflowTrendmicroConnectorProfileCredentials {
  /**
   * @schema AppflowTrendmicroConnectorProfileCredentials#apiSecretKey
   */
  readonly apiSecretKey: string;

}

/**
 * Converts an object of type 'AppflowTrendmicroConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTrendmicroConnectorProfileCredentials(obj: AppflowTrendmicroConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'apiSecretKey': obj.apiSecretKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowVeevaConnectorProfileCredentials
 */
export interface AppflowVeevaConnectorProfileCredentials {
  /**
   * @schema AppflowVeevaConnectorProfileCredentials#username
   */
  readonly username: string;

  /**
   * @schema AppflowVeevaConnectorProfileCredentials#password
   */
  readonly password: string;

}

/**
 * Converts an object of type 'AppflowVeevaConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowVeevaConnectorProfileCredentials(obj: AppflowVeevaConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'username': obj.username,
    'password': obj.password,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowZendeskConnectorProfileCredentials
 */
export interface AppflowZendeskConnectorProfileCredentials {
  /**
   * @schema AppflowZendeskConnectorProfileCredentials#clientId
   */
  readonly clientId: string;

  /**
   * @schema AppflowZendeskConnectorProfileCredentials#clientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema AppflowZendeskConnectorProfileCredentials#accessToken
   */
  readonly accessToken?: string;

  /**
   * @schema AppflowZendeskConnectorProfileCredentials#oAuthRequest
   */
  readonly oAuthRequest?: AppflowConnectorOAuthRequest;

}

/**
 * Converts an object of type 'AppflowZendeskConnectorProfileCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowZendeskConnectorProfileCredentials(obj: AppflowZendeskConnectorProfileCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientId': obj.clientId,
    'clientSecret': obj.clientSecret,
    'accessToken': obj.accessToken,
    'oAuthRequest': toJson_AppflowConnectorOAuthRequest(obj.oAuthRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowScheduledTriggerProperties
 */
export interface AppflowScheduledTriggerProperties {
  /**
   * @schema AppflowScheduledTriggerProperties#scheduleExpression
   */
  readonly scheduleExpression: string;

  /**
   * @schema AppflowScheduledTriggerProperties#dataPullMode
   */
  readonly dataPullMode?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#scheduleStartTime
   */
  readonly scheduleStartTime?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#scheduleEndTime
   */
  readonly scheduleEndTime?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#timezone
   */
  readonly timezone?: string;

  /**
   * @schema AppflowScheduledTriggerProperties#scheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema AppflowScheduledTriggerProperties#firstExecutionFrom
   */
  readonly firstExecutionFrom?: string;

}

/**
 * Converts an object of type 'AppflowScheduledTriggerProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowScheduledTriggerProperties(obj: AppflowScheduledTriggerProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'scheduleExpression': obj.scheduleExpression,
    'dataPullMode': obj.dataPullMode,
    'scheduleStartTime': obj.scheduleStartTime,
    'scheduleEndTime': obj.scheduleEndTime,
    'timezone': obj.timezone,
    'scheduleOffset': obj.scheduleOffset,
    'firstExecutionFrom': obj.firstExecutionFrom,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowAmplitudeSourceProperties
 */
export interface AppflowAmplitudeSourceProperties {
  /**
   * @schema AppflowAmplitudeSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowAmplitudeSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowAmplitudeSourceProperties(obj: AppflowAmplitudeSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDatadogSourceProperties
 */
export interface AppflowDatadogSourceProperties {
  /**
   * @schema AppflowDatadogSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowDatadogSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDatadogSourceProperties(obj: AppflowDatadogSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDynatraceSourceProperties
 */
export interface AppflowDynatraceSourceProperties {
  /**
   * @schema AppflowDynatraceSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowDynatraceSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDynatraceSourceProperties(obj: AppflowDynatraceSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowGoogleAnalyticsSourceProperties
 */
export interface AppflowGoogleAnalyticsSourceProperties {
  /**
   * @schema AppflowGoogleAnalyticsSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowGoogleAnalyticsSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowGoogleAnalyticsSourceProperties(obj: AppflowGoogleAnalyticsSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowInforNexusSourceProperties
 */
export interface AppflowInforNexusSourceProperties {
  /**
   * @schema AppflowInforNexusSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowInforNexusSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowInforNexusSourceProperties(obj: AppflowInforNexusSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowMarketoSourceProperties
 */
export interface AppflowMarketoSourceProperties {
  /**
   * @schema AppflowMarketoSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowMarketoSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowMarketoSourceProperties(obj: AppflowMarketoSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowS3SourceProperties
 */
export interface AppflowS3SourceProperties {
  /**
   * @schema AppflowS3SourceProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowS3SourceProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

}

/**
 * Converts an object of type 'AppflowS3SourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowS3SourceProperties(obj: AppflowS3SourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'bucketPrefix': obj.bucketPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSalesforceSourceProperties
 */
export interface AppflowSalesforceSourceProperties {
  /**
   * @schema AppflowSalesforceSourceProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowSalesforceSourceProperties#enableDynamicFieldUpdate
   */
  readonly enableDynamicFieldUpdate?: boolean;

  /**
   * @schema AppflowSalesforceSourceProperties#includeDeletedRecords
   */
  readonly includeDeletedRecords?: boolean;

}

/**
 * Converts an object of type 'AppflowSalesforceSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSalesforceSourceProperties(obj: AppflowSalesforceSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'enableDynamicFieldUpdate': obj.enableDynamicFieldUpdate,
    'includeDeletedRecords': obj.includeDeletedRecords,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowServiceNowSourceProperties
 */
export interface AppflowServiceNowSourceProperties {
  /**
   * @schema AppflowServiceNowSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowServiceNowSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowServiceNowSourceProperties(obj: AppflowServiceNowSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSingularSourceProperties
 */
export interface AppflowSingularSourceProperties {
  /**
   * @schema AppflowSingularSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowSingularSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSingularSourceProperties(obj: AppflowSingularSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSlackSourceProperties
 */
export interface AppflowSlackSourceProperties {
  /**
   * @schema AppflowSlackSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowSlackSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSlackSourceProperties(obj: AppflowSlackSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTrendmicroSourceProperties
 */
export interface AppflowTrendmicroSourceProperties {
  /**
   * @schema AppflowTrendmicroSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowTrendmicroSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTrendmicroSourceProperties(obj: AppflowTrendmicroSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowVeevaSourceProperties
 */
export interface AppflowVeevaSourceProperties {
  /**
   * @schema AppflowVeevaSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowVeevaSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowVeevaSourceProperties(obj: AppflowVeevaSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowZendeskSourceProperties
 */
export interface AppflowZendeskSourceProperties {
  /**
   * @schema AppflowZendeskSourceProperties#object
   */
  readonly object: string;

}

/**
 * Converts an object of type 'AppflowZendeskSourceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowZendeskSourceProperties(obj: AppflowZendeskSourceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowRedshiftDestinationProperties
 */
export interface AppflowRedshiftDestinationProperties {
  /**
   * @schema AppflowRedshiftDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowRedshiftDestinationProperties#intermediateBucketName
   */
  readonly intermediateBucketName: string;

  /**
   * @schema AppflowRedshiftDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowRedshiftDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * Converts an object of type 'AppflowRedshiftDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowRedshiftDestinationProperties(obj: AppflowRedshiftDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'intermediateBucketName': obj.intermediateBucketName,
    'bucketPrefix': obj.bucketPrefix,
    'errorHandlingConfig': toJson_AppflowErrorHandlingConfig(obj.errorHandlingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowS3DestinationProperties
 */
export interface AppflowS3DestinationProperties {
  /**
   * @schema AppflowS3DestinationProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowS3DestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowS3DestinationProperties#s3OutputFormatConfig
   */
  readonly s3OutputFormatConfig?: AppflowS3OutputFormatConfig;

}

/**
 * Converts an object of type 'AppflowS3DestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowS3DestinationProperties(obj: AppflowS3DestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'bucketPrefix': obj.bucketPrefix,
    's3OutputFormatConfig': toJson_AppflowS3OutputFormatConfig(obj.s3OutputFormatConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSalesforceDestinationProperties
 */
export interface AppflowSalesforceDestinationProperties {
  /**
   * @schema AppflowSalesforceDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowSalesforceDestinationProperties#idFieldNames
   */
  readonly idFieldNames?: string[];

  /**
   * @schema AppflowSalesforceDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

  /**
   * @schema AppflowSalesforceDestinationProperties#writeOperationType
   */
  readonly writeOperationType?: string;

}

/**
 * Converts an object of type 'AppflowSalesforceDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSalesforceDestinationProperties(obj: AppflowSalesforceDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'idFieldNames': obj.idFieldNames?.map(y => y),
    'errorHandlingConfig': toJson_AppflowErrorHandlingConfig(obj.errorHandlingConfig),
    'writeOperationType': obj.writeOperationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSnowflakeDestinationProperties
 */
export interface AppflowSnowflakeDestinationProperties {
  /**
   * @schema AppflowSnowflakeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowSnowflakeDestinationProperties#intermediateBucketName
   */
  readonly intermediateBucketName: string;

  /**
   * @schema AppflowSnowflakeDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowSnowflakeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * Converts an object of type 'AppflowSnowflakeDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSnowflakeDestinationProperties(obj: AppflowSnowflakeDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'intermediateBucketName': obj.intermediateBucketName,
    'bucketPrefix': obj.bucketPrefix,
    'errorHandlingConfig': toJson_AppflowErrorHandlingConfig(obj.errorHandlingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowEventBridgeDestinationProperties
 */
export interface AppflowEventBridgeDestinationProperties {
  /**
   * @schema AppflowEventBridgeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowEventBridgeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * Converts an object of type 'AppflowEventBridgeDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowEventBridgeDestinationProperties(obj: AppflowEventBridgeDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'errorHandlingConfig': toJson_AppflowErrorHandlingConfig(obj.errorHandlingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowLookoutMetricsDestinationProperties
 */
export interface AppflowLookoutMetricsDestinationProperties {
}

/**
 * Converts an object of type 'AppflowLookoutMetricsDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowLookoutMetricsDestinationProperties(obj: AppflowLookoutMetricsDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpsolverDestinationProperties
 */
export interface AppflowUpsolverDestinationProperties {
  /**
   * @schema AppflowUpsolverDestinationProperties#bucketName
   */
  readonly bucketName: string;

  /**
   * @schema AppflowUpsolverDestinationProperties#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowUpsolverDestinationProperties#s3OutputFormatConfig
   */
  readonly s3OutputFormatConfig: AppflowUpsolverS3OutputFormatConfig;

}

/**
 * Converts an object of type 'AppflowUpsolverDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpsolverDestinationProperties(obj: AppflowUpsolverDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'bucketPrefix': obj.bucketPrefix,
    's3OutputFormatConfig': toJson_AppflowUpsolverS3OutputFormatConfig(obj.s3OutputFormatConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowHoneycodeDestinationProperties
 */
export interface AppflowHoneycodeDestinationProperties {
  /**
   * @schema AppflowHoneycodeDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowHoneycodeDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

}

/**
 * Converts an object of type 'AppflowHoneycodeDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowHoneycodeDestinationProperties(obj: AppflowHoneycodeDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'errorHandlingConfig': toJson_AppflowErrorHandlingConfig(obj.errorHandlingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowCustomerProfilesDestinationProperties
 */
export interface AppflowCustomerProfilesDestinationProperties {
  /**
   * @schema AppflowCustomerProfilesDestinationProperties#domainName
   */
  readonly domainName: string;

  /**
   * @schema AppflowCustomerProfilesDestinationProperties#objectTypeName
   */
  readonly objectTypeName?: string;

}

/**
 * Converts an object of type 'AppflowCustomerProfilesDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowCustomerProfilesDestinationProperties(obj: AppflowCustomerProfilesDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'domainName': obj.domainName,
    'objectTypeName': obj.objectTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowZendeskDestinationProperties
 */
export interface AppflowZendeskDestinationProperties {
  /**
   * @schema AppflowZendeskDestinationProperties#object
   */
  readonly object: string;

  /**
   * @schema AppflowZendeskDestinationProperties#idFieldNames
   */
  readonly idFieldNames?: string[];

  /**
   * @schema AppflowZendeskDestinationProperties#errorHandlingConfig
   */
  readonly errorHandlingConfig?: AppflowErrorHandlingConfig;

  /**
   * @schema AppflowZendeskDestinationProperties#writeOperationType
   */
  readonly writeOperationType?: string;

}

/**
 * Converts an object of type 'AppflowZendeskDestinationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowZendeskDestinationProperties(obj: AppflowZendeskDestinationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'object': obj.object,
    'idFieldNames': obj.idFieldNames?.map(y => y),
    'errorHandlingConfig': toJson_AppflowErrorHandlingConfig(obj.errorHandlingConfig),
    'writeOperationType': obj.writeOperationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowFieldTypeDetails
 */
export interface AppflowFieldTypeDetails {
  /**
   * @schema AppflowFieldTypeDetails#fieldType
   */
  readonly fieldType: string;

  /**
   * @schema AppflowFieldTypeDetails#filterOperators
   */
  readonly filterOperators: string[];

  /**
   * @schema AppflowFieldTypeDetails#supportedValues
   */
  readonly supportedValues?: string[];

}

/**
 * Converts an object of type 'AppflowFieldTypeDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowFieldTypeDetails(obj: AppflowFieldTypeDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fieldType': obj.fieldType,
    'filterOperators': obj.filterOperators?.map(y => y),
    'supportedValues': obj.supportedValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowAmplitudeMetadata
 */
export interface AppflowAmplitudeMetadata {
}

/**
 * Converts an object of type 'AppflowAmplitudeMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowAmplitudeMetadata(obj: AppflowAmplitudeMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDatadogMetadata
 */
export interface AppflowDatadogMetadata {
}

/**
 * Converts an object of type 'AppflowDatadogMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDatadogMetadata(obj: AppflowDatadogMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowDynatraceMetadata
 */
export interface AppflowDynatraceMetadata {
}

/**
 * Converts an object of type 'AppflowDynatraceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowDynatraceMetadata(obj: AppflowDynatraceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowGoogleAnalyticsMetadata
 */
export interface AppflowGoogleAnalyticsMetadata {
  /**
   * @schema AppflowGoogleAnalyticsMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * Converts an object of type 'AppflowGoogleAnalyticsMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowGoogleAnalyticsMetadata(obj: AppflowGoogleAnalyticsMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oAuthScopes': obj.oAuthScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowInforNexusMetadata
 */
export interface AppflowInforNexusMetadata {
}

/**
 * Converts an object of type 'AppflowInforNexusMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowInforNexusMetadata(obj: AppflowInforNexusMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowMarketoMetadata
 */
export interface AppflowMarketoMetadata {
}

/**
 * Converts an object of type 'AppflowMarketoMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowMarketoMetadata(obj: AppflowMarketoMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowRedshiftMetadata
 */
export interface AppflowRedshiftMetadata {
}

/**
 * Converts an object of type 'AppflowRedshiftMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowRedshiftMetadata(obj: AppflowRedshiftMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowS3Metadata
 */
export interface AppflowS3Metadata {
}

/**
 * Converts an object of type 'AppflowS3Metadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowS3Metadata(obj: AppflowS3Metadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSalesforceMetadata
 */
export interface AppflowSalesforceMetadata {
  /**
   * @schema AppflowSalesforceMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * Converts an object of type 'AppflowSalesforceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSalesforceMetadata(obj: AppflowSalesforceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oAuthScopes': obj.oAuthScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowServiceNowMetadata
 */
export interface AppflowServiceNowMetadata {
}

/**
 * Converts an object of type 'AppflowServiceNowMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowServiceNowMetadata(obj: AppflowServiceNowMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSingularMetadata
 */
export interface AppflowSingularMetadata {
}

/**
 * Converts an object of type 'AppflowSingularMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSingularMetadata(obj: AppflowSingularMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSlackMetadata
 */
export interface AppflowSlackMetadata {
  /**
   * @schema AppflowSlackMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * Converts an object of type 'AppflowSlackMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSlackMetadata(obj: AppflowSlackMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oAuthScopes': obj.oAuthScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowSnowflakeMetadata
 */
export interface AppflowSnowflakeMetadata {
  /**
   * @schema AppflowSnowflakeMetadata#supportedRegions
   */
  readonly supportedRegions?: string[];

}

/**
 * Converts an object of type 'AppflowSnowflakeMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowSnowflakeMetadata(obj: AppflowSnowflakeMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'supportedRegions': obj.supportedRegions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowTrendmicroMetadata
 */
export interface AppflowTrendmicroMetadata {
}

/**
 * Converts an object of type 'AppflowTrendmicroMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowTrendmicroMetadata(obj: AppflowTrendmicroMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowVeevaMetadata
 */
export interface AppflowVeevaMetadata {
}

/**
 * Converts an object of type 'AppflowVeevaMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowVeevaMetadata(obj: AppflowVeevaMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowZendeskMetadata
 */
export interface AppflowZendeskMetadata {
  /**
   * @schema AppflowZendeskMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * Converts an object of type 'AppflowZendeskMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowZendeskMetadata(obj: AppflowZendeskMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oAuthScopes': obj.oAuthScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowEventBridgeMetadata
 */
export interface AppflowEventBridgeMetadata {
}

/**
 * Converts an object of type 'AppflowEventBridgeMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowEventBridgeMetadata(obj: AppflowEventBridgeMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpsolverMetadata
 */
export interface AppflowUpsolverMetadata {
}

/**
 * Converts an object of type 'AppflowUpsolverMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpsolverMetadata(obj: AppflowUpsolverMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowCustomerProfilesMetadata
 */
export interface AppflowCustomerProfilesMetadata {
}

/**
 * Converts an object of type 'AppflowCustomerProfilesMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowCustomerProfilesMetadata(obj: AppflowCustomerProfilesMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowHoneycodeMetadata
 */
export interface AppflowHoneycodeMetadata {
  /**
   * @schema AppflowHoneycodeMetadata#oAuthScopes
   */
  readonly oAuthScopes?: string[];

}

/**
 * Converts an object of type 'AppflowHoneycodeMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowHoneycodeMetadata(obj: AppflowHoneycodeMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oAuthScopes': obj.oAuthScopes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowErrorInfo
 */
export interface AppflowErrorInfo {
  /**
   * @schema AppflowErrorInfo#putFailuresCount
   */
  readonly putFailuresCount?: number;

  /**
   * @schema AppflowErrorInfo#executionMessage
   */
  readonly executionMessage?: string;

}

/**
 * Converts an object of type 'AppflowErrorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowErrorInfo(obj: AppflowErrorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'putFailuresCount': obj.putFailuresCount,
    'executionMessage': obj.executionMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowConnectorOAuthRequest
 */
export interface AppflowConnectorOAuthRequest {
  /**
   * @schema AppflowConnectorOAuthRequest#authCode
   */
  readonly authCode?: string;

  /**
   * @schema AppflowConnectorOAuthRequest#redirectUri
   */
  readonly redirectUri?: string;

}

/**
 * Converts an object of type 'AppflowConnectorOAuthRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowConnectorOAuthRequest(obj: AppflowConnectorOAuthRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'authCode': obj.authCode,
    'redirectUri': obj.redirectUri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowErrorHandlingConfig
 */
export interface AppflowErrorHandlingConfig {
  /**
   * @schema AppflowErrorHandlingConfig#failOnFirstDestinationError
   */
  readonly failOnFirstDestinationError?: boolean;

  /**
   * @schema AppflowErrorHandlingConfig#bucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema AppflowErrorHandlingConfig#bucketName
   */
  readonly bucketName?: string;

}

/**
 * Converts an object of type 'AppflowErrorHandlingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowErrorHandlingConfig(obj: AppflowErrorHandlingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'failOnFirstDestinationError': obj.failOnFirstDestinationError,
    'bucketPrefix': obj.bucketPrefix,
    'bucketName': obj.bucketName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowS3OutputFormatConfig
 */
export interface AppflowS3OutputFormatConfig {
  /**
   * @schema AppflowS3OutputFormatConfig#fileType
   */
  readonly fileType?: string;

  /**
   * @schema AppflowS3OutputFormatConfig#prefixConfig
   */
  readonly prefixConfig?: AppflowPrefixConfig;

  /**
   * @schema AppflowS3OutputFormatConfig#aggregationConfig
   */
  readonly aggregationConfig?: AppflowAggregationConfig;

}

/**
 * Converts an object of type 'AppflowS3OutputFormatConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowS3OutputFormatConfig(obj: AppflowS3OutputFormatConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileType': obj.fileType,
    'prefixConfig': toJson_AppflowPrefixConfig(obj.prefixConfig),
    'aggregationConfig': toJson_AppflowAggregationConfig(obj.aggregationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowUpsolverS3OutputFormatConfig
 */
export interface AppflowUpsolverS3OutputFormatConfig {
  /**
   * @schema AppflowUpsolverS3OutputFormatConfig#fileType
   */
  readonly fileType?: string;

  /**
   * @schema AppflowUpsolverS3OutputFormatConfig#prefixConfig
   */
  readonly prefixConfig: AppflowPrefixConfig;

  /**
   * @schema AppflowUpsolverS3OutputFormatConfig#aggregationConfig
   */
  readonly aggregationConfig?: AppflowAggregationConfig;

}

/**
 * Converts an object of type 'AppflowUpsolverS3OutputFormatConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowUpsolverS3OutputFormatConfig(obj: AppflowUpsolverS3OutputFormatConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fileType': obj.fileType,
    'prefixConfig': toJson_AppflowPrefixConfig(obj.prefixConfig),
    'aggregationConfig': toJson_AppflowAggregationConfig(obj.aggregationConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowPrefixConfig
 */
export interface AppflowPrefixConfig {
  /**
   * @schema AppflowPrefixConfig#prefixType
   */
  readonly prefixType?: string;

  /**
   * @schema AppflowPrefixConfig#prefixFormat
   */
  readonly prefixFormat?: string;

}

/**
 * Converts an object of type 'AppflowPrefixConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowPrefixConfig(obj: AppflowPrefixConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'prefixType': obj.prefixType,
    'prefixFormat': obj.prefixFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppflowAggregationConfig
 */
export interface AppflowAggregationConfig {
  /**
   * @schema AppflowAggregationConfig#aggregationType
   */
  readonly aggregationType?: string;

}

/**
 * Converts an object of type 'AppflowAggregationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppflowAggregationConfig(obj: AppflowAggregationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'aggregationType': obj.aggregationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
