/**
 * @schema ConnectAssociateApprovedOriginRequest
 */
export interface ConnectAssociateApprovedOriginRequest {
  /**
   * @schema ConnectAssociateApprovedOriginRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateApprovedOriginRequest#Origin
   */
  readonly origin?: string;

}

/**
 * Converts an object of type 'ConnectAssociateApprovedOriginRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateApprovedOriginRequest(obj: ConnectAssociateApprovedOriginRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Origin': obj.origin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateBotRequest
 */
export interface ConnectAssociateBotRequest {
  /**
   * @schema ConnectAssociateBotRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateBotRequest#LexBot
   */
  readonly lexBot?: ConnectLexBot;

  /**
   * @schema ConnectAssociateBotRequest#LexV2Bot
   */
  readonly lexV2Bot?: ConnectLexV2Bot;

}

/**
 * Converts an object of type 'ConnectAssociateBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateBotRequest(obj: ConnectAssociateBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'LexBot': toJson_ConnectLexBot(obj.lexBot),
    'LexV2Bot': toJson_ConnectLexV2Bot(obj.lexV2Bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateInstanceStorageConfigRequest
 */
export interface ConnectAssociateInstanceStorageConfigRequest {
  /**
   * @schema ConnectAssociateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ConnectAssociateInstanceStorageConfigRequest#StorageConfig
   */
  readonly storageConfig?: ConnectInstanceStorageConfig;

}

/**
 * Converts an object of type 'ConnectAssociateInstanceStorageConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateInstanceStorageConfigRequest(obj: ConnectAssociateInstanceStorageConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ResourceType': obj.resourceType,
    'StorageConfig': toJson_ConnectInstanceStorageConfig(obj.storageConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateInstanceStorageConfigResponse
 */
export interface ConnectAssociateInstanceStorageConfigResponse {
  /**
   * @schema ConnectAssociateInstanceStorageConfigResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * Converts an object of type 'ConnectAssociateInstanceStorageConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateInstanceStorageConfigResponse(obj: ConnectAssociateInstanceStorageConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateLambdaFunctionRequest
 */
export interface ConnectAssociateLambdaFunctionRequest {
  /**
   * @schema ConnectAssociateLambdaFunctionRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateLambdaFunctionRequest#FunctionArn
   */
  readonly functionArn?: string;

}

/**
 * Converts an object of type 'ConnectAssociateLambdaFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateLambdaFunctionRequest(obj: ConnectAssociateLambdaFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'FunctionArn': obj.functionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateLexBotRequest
 */
export interface ConnectAssociateLexBotRequest {
  /**
   * @schema ConnectAssociateLexBotRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateLexBotRequest#LexBot
   */
  readonly lexBot?: ConnectLexBot;

}

/**
 * Converts an object of type 'ConnectAssociateLexBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateLexBotRequest(obj: ConnectAssociateLexBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'LexBot': toJson_ConnectLexBot(obj.lexBot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateQueueQuickConnectsRequest
 */
export interface ConnectAssociateQueueQuickConnectsRequest {
  /**
   * @schema ConnectAssociateQueueQuickConnectsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateQueueQuickConnectsRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectAssociateQueueQuickConnectsRequest#QuickConnectIds
   */
  readonly quickConnectIds?: string[];

}

/**
 * Converts an object of type 'ConnectAssociateQueueQuickConnectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateQueueQuickConnectsRequest(obj: ConnectAssociateQueueQuickConnectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'QuickConnectIds': obj.quickConnectIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateRoutingProfileQueuesRequest
 */
export interface ConnectAssociateRoutingProfileQueuesRequest {
  /**
   * @schema ConnectAssociateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectAssociateRoutingProfileQueuesRequest#QueueConfigs
   */
  readonly queueConfigs?: ConnectRoutingProfileQueueConfig[];

}

/**
 * Converts an object of type 'ConnectAssociateRoutingProfileQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateRoutingProfileQueuesRequest(obj: ConnectAssociateRoutingProfileQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'QueueConfigs': obj.queueConfigs?.map(y => toJson_ConnectRoutingProfileQueueConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateSecurityKeyRequest
 */
export interface ConnectAssociateSecurityKeyRequest {
  /**
   * @schema ConnectAssociateSecurityKeyRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectAssociateSecurityKeyRequest#Key
   */
  readonly key?: string;

}

/**
 * Converts an object of type 'ConnectAssociateSecurityKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateSecurityKeyRequest(obj: ConnectAssociateSecurityKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Key': obj.key,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAssociateSecurityKeyResponse
 */
export interface ConnectAssociateSecurityKeyResponse {
  /**
   * @schema ConnectAssociateSecurityKeyResponse#AssociationId
   */
  readonly associationId?: string;

}

/**
 * Converts an object of type 'ConnectAssociateSecurityKeyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAssociateSecurityKeyResponse(obj: ConnectAssociateSecurityKeyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateAgentStatusRequest
 */
export interface ConnectCreateAgentStatusRequest {
  /**
   * @schema ConnectCreateAgentStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateAgentStatusRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateAgentStatusRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateAgentStatusRequest#State
   */
  readonly state?: string;

  /**
   * @schema ConnectCreateAgentStatusRequest#DisplayOrder
   */
  readonly displayOrder?: number;

  /**
   * @schema ConnectCreateAgentStatusRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateAgentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateAgentStatusRequest(obj: ConnectCreateAgentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'Description': obj.description,
    'State': obj.state,
    'DisplayOrder': obj.displayOrder,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateAgentStatusResponse
 */
export interface ConnectCreateAgentStatusResponse {
  /**
   * @schema ConnectCreateAgentStatusResponse#AgentStatusARN
   */
  readonly agentStatusArn?: string;

  /**
   * @schema ConnectCreateAgentStatusResponse#AgentStatusId
   */
  readonly agentStatusId?: string;

}

/**
 * Converts an object of type 'ConnectCreateAgentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateAgentStatusResponse(obj: ConnectCreateAgentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentStatusARN': obj.agentStatusArn,
    'AgentStatusId': obj.agentStatusId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateContactFlowRequest
 */
export interface ConnectCreateContactFlowRequest {
  /**
   * @schema ConnectCreateContactFlowRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Type
   */
  readonly type?: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectCreateContactFlowRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateContactFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateContactFlowRequest(obj: ConnectCreateContactFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'Content': obj.content,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateContactFlowResponse
 */
export interface ConnectCreateContactFlowResponse {
  /**
   * @schema ConnectCreateContactFlowResponse#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectCreateContactFlowResponse#ContactFlowArn
   */
  readonly contactFlowArn?: string;

}

/**
 * Converts an object of type 'ConnectCreateContactFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateContactFlowResponse(obj: ConnectCreateContactFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactFlowId': obj.contactFlowId,
    'ContactFlowArn': obj.contactFlowArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateHoursOfOperationRequest
 */
export interface ConnectCreateHoursOfOperationRequest {
  /**
   * @schema ConnectCreateHoursOfOperationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateHoursOfOperationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateHoursOfOperationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateHoursOfOperationRequest#TimeZone
   */
  readonly timeZone?: string;

  /**
   * @schema ConnectCreateHoursOfOperationRequest#Config
   */
  readonly config?: ConnectHoursOfOperationConfig[];

  /**
   * @schema ConnectCreateHoursOfOperationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateHoursOfOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateHoursOfOperationRequest(obj: ConnectCreateHoursOfOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'Description': obj.description,
    'TimeZone': obj.timeZone,
    'Config': obj.config?.map(y => toJson_ConnectHoursOfOperationConfig(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateHoursOfOperationResponse
 */
export interface ConnectCreateHoursOfOperationResponse {
  /**
   * @schema ConnectCreateHoursOfOperationResponse#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

  /**
   * @schema ConnectCreateHoursOfOperationResponse#HoursOfOperationArn
   */
  readonly hoursOfOperationArn?: string;

}

/**
 * Converts an object of type 'ConnectCreateHoursOfOperationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateHoursOfOperationResponse(obj: ConnectCreateHoursOfOperationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HoursOfOperationId': obj.hoursOfOperationId,
    'HoursOfOperationArn': obj.hoursOfOperationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateInstanceRequest
 */
export interface ConnectCreateInstanceRequest {
  /**
   * @schema ConnectCreateInstanceRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectCreateInstanceRequest#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema ConnectCreateInstanceRequest#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema ConnectCreateInstanceRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema ConnectCreateInstanceRequest#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema ConnectCreateInstanceRequest#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * Converts an object of type 'ConnectCreateInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateInstanceRequest(obj: ConnectCreateInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientToken': obj.clientToken,
    'IdentityManagementType': obj.identityManagementType,
    'InstanceAlias': obj.instanceAlias,
    'DirectoryId': obj.directoryId,
    'InboundCallsEnabled': obj.inboundCallsEnabled,
    'OutboundCallsEnabled': obj.outboundCallsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateInstanceResponse
 */
export interface ConnectCreateInstanceResponse {
  /**
   * @schema ConnectCreateInstanceResponse#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectCreateInstanceResponse#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ConnectCreateInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateInstanceResponse(obj: ConnectCreateInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateIntegrationAssociationRequest
 */
export interface ConnectCreateIntegrationAssociationRequest {
  /**
   * @schema ConnectCreateIntegrationAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationRequest#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationRequest#IntegrationArn
   */
  readonly integrationArn?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationRequest#SourceApplicationUrl
   */
  readonly sourceApplicationUrl?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationRequest#SourceApplicationName
   */
  readonly sourceApplicationName?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationRequest#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateIntegrationAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateIntegrationAssociationRequest(obj: ConnectCreateIntegrationAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'IntegrationType': obj.integrationType,
    'IntegrationArn': obj.integrationArn,
    'SourceApplicationUrl': obj.sourceApplicationUrl,
    'SourceApplicationName': obj.sourceApplicationName,
    'SourceType': obj.sourceType,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateIntegrationAssociationResponse
 */
export interface ConnectCreateIntegrationAssociationResponse {
  /**
   * @schema ConnectCreateIntegrationAssociationResponse#IntegrationAssociationId
   */
  readonly integrationAssociationId?: string;

  /**
   * @schema ConnectCreateIntegrationAssociationResponse#IntegrationAssociationArn
   */
  readonly integrationAssociationArn?: string;

}

/**
 * Converts an object of type 'ConnectCreateIntegrationAssociationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateIntegrationAssociationResponse(obj: ConnectCreateIntegrationAssociationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IntegrationAssociationId': obj.integrationAssociationId,
    'IntegrationAssociationArn': obj.integrationAssociationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateQueueRequest
 */
export interface ConnectCreateQueueRequest {
  /**
   * @schema ConnectCreateQueueRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateQueueRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateQueueRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateQueueRequest#OutboundCallerConfig
   */
  readonly outboundCallerConfig?: ConnectOutboundCallerConfig;

  /**
   * @schema ConnectCreateQueueRequest#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

  /**
   * @schema ConnectCreateQueueRequest#MaxContacts
   */
  readonly maxContacts?: number;

  /**
   * @schema ConnectCreateQueueRequest#QuickConnectIds
   */
  readonly quickConnectIds?: string[];

  /**
   * @schema ConnectCreateQueueRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateQueueRequest(obj: ConnectCreateQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'Description': obj.description,
    'OutboundCallerConfig': toJson_ConnectOutboundCallerConfig(obj.outboundCallerConfig),
    'HoursOfOperationId': obj.hoursOfOperationId,
    'MaxContacts': obj.maxContacts,
    'QuickConnectIds': obj.quickConnectIds?.map(y => y),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateQueueResponse
 */
export interface ConnectCreateQueueResponse {
  /**
   * @schema ConnectCreateQueueResponse#QueueArn
   */
  readonly queueArn?: string;

  /**
   * @schema ConnectCreateQueueResponse#QueueId
   */
  readonly queueId?: string;

}

/**
 * Converts an object of type 'ConnectCreateQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateQueueResponse(obj: ConnectCreateQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueArn': obj.queueArn,
    'QueueId': obj.queueId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateQuickConnectRequest
 */
export interface ConnectCreateQuickConnectRequest {
  /**
   * @schema ConnectCreateQuickConnectRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateQuickConnectRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateQuickConnectRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateQuickConnectRequest#QuickConnectConfig
   */
  readonly quickConnectConfig?: ConnectQuickConnectConfig;

  /**
   * @schema ConnectCreateQuickConnectRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateQuickConnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateQuickConnectRequest(obj: ConnectCreateQuickConnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'Description': obj.description,
    'QuickConnectConfig': toJson_ConnectQuickConnectConfig(obj.quickConnectConfig),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateQuickConnectResponse
 */
export interface ConnectCreateQuickConnectResponse {
  /**
   * @schema ConnectCreateQuickConnectResponse#QuickConnectARN
   */
  readonly quickConnectArn?: string;

  /**
   * @schema ConnectCreateQuickConnectResponse#QuickConnectId
   */
  readonly quickConnectId?: string;

}

/**
 * Converts an object of type 'ConnectCreateQuickConnectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateQuickConnectResponse(obj: ConnectCreateQuickConnectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuickConnectARN': obj.quickConnectArn,
    'QuickConnectId': obj.quickConnectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateRoutingProfileRequest
 */
export interface ConnectCreateRoutingProfileRequest {
  /**
   * @schema ConnectCreateRoutingProfileRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId?: string;

  /**
   * @schema ConnectCreateRoutingProfileRequest#QueueConfigs
   */
  readonly queueConfigs?: ConnectRoutingProfileQueueConfig[];

  /**
   * @schema ConnectCreateRoutingProfileRequest#MediaConcurrencies
   */
  readonly mediaConcurrencies?: ConnectMediaConcurrency[];

  /**
   * @schema ConnectCreateRoutingProfileRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateRoutingProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateRoutingProfileRequest(obj: ConnectCreateRoutingProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'Description': obj.description,
    'DefaultOutboundQueueId': obj.defaultOutboundQueueId,
    'QueueConfigs': obj.queueConfigs?.map(y => toJson_ConnectRoutingProfileQueueConfig(y)),
    'MediaConcurrencies': obj.mediaConcurrencies?.map(y => toJson_ConnectMediaConcurrency(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateRoutingProfileResponse
 */
export interface ConnectCreateRoutingProfileResponse {
  /**
   * @schema ConnectCreateRoutingProfileResponse#RoutingProfileArn
   */
  readonly routingProfileArn?: string;

  /**
   * @schema ConnectCreateRoutingProfileResponse#RoutingProfileId
   */
  readonly routingProfileId?: string;

}

/**
 * Converts an object of type 'ConnectCreateRoutingProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateRoutingProfileResponse(obj: ConnectCreateRoutingProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingProfileArn': obj.routingProfileArn,
    'RoutingProfileId': obj.routingProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateUseCaseRequest
 */
export interface ConnectCreateUseCaseRequest {
  /**
   * @schema ConnectCreateUseCaseRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateUseCaseRequest#IntegrationAssociationId
   */
  readonly integrationAssociationId?: string;

  /**
   * @schema ConnectCreateUseCaseRequest#UseCaseType
   */
  readonly useCaseType?: string;

  /**
   * @schema ConnectCreateUseCaseRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateUseCaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateUseCaseRequest(obj: ConnectCreateUseCaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'IntegrationAssociationId': obj.integrationAssociationId,
    'UseCaseType': obj.useCaseType,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateUseCaseResponse
 */
export interface ConnectCreateUseCaseResponse {
  /**
   * @schema ConnectCreateUseCaseResponse#UseCaseId
   */
  readonly useCaseId?: string;

  /**
   * @schema ConnectCreateUseCaseResponse#UseCaseArn
   */
  readonly useCaseArn?: string;

}

/**
 * Converts an object of type 'ConnectCreateUseCaseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateUseCaseResponse(obj: ConnectCreateUseCaseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UseCaseId': obj.useCaseId,
    'UseCaseArn': obj.useCaseArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateUserRequest
 */
export interface ConnectCreateUserRequest {
  /**
   * @schema ConnectCreateUserRequest#Username
   */
  readonly username?: string;

  /**
   * @schema ConnectCreateUserRequest#Password
   */
  readonly password?: string;

  /**
   * @schema ConnectCreateUserRequest#IdentityInfo
   */
  readonly identityInfo?: ConnectUserIdentityInfo;

  /**
   * @schema ConnectCreateUserRequest#PhoneConfig
   */
  readonly phoneConfig?: ConnectUserPhoneConfig;

  /**
   * @schema ConnectCreateUserRequest#DirectoryUserId
   */
  readonly directoryUserId?: string;

  /**
   * @schema ConnectCreateUserRequest#SecurityProfileIds
   */
  readonly securityProfileIds?: string[];

  /**
   * @schema ConnectCreateUserRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectCreateUserRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectCreateUserRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectCreateUserRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectCreateUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateUserRequest(obj: ConnectCreateUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
    'IdentityInfo': toJson_ConnectUserIdentityInfo(obj.identityInfo),
    'PhoneConfig': toJson_ConnectUserPhoneConfig(obj.phoneConfig),
    'DirectoryUserId': obj.directoryUserId,
    'SecurityProfileIds': obj.securityProfileIds?.map(y => y),
    'RoutingProfileId': obj.routingProfileId,
    'HierarchyGroupId': obj.hierarchyGroupId,
    'InstanceId': obj.instanceId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateUserResponse
 */
export interface ConnectCreateUserResponse {
  /**
   * @schema ConnectCreateUserResponse#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectCreateUserResponse#UserArn
   */
  readonly userArn?: string;

}

/**
 * Converts an object of type 'ConnectCreateUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateUserResponse(obj: ConnectCreateUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'UserArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateUserHierarchyGroupRequest
 */
export interface ConnectCreateUserHierarchyGroupRequest {
  /**
   * @schema ConnectCreateUserHierarchyGroupRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCreateUserHierarchyGroupRequest#ParentGroupId
   */
  readonly parentGroupId?: string;

  /**
   * @schema ConnectCreateUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectCreateUserHierarchyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateUserHierarchyGroupRequest(obj: ConnectCreateUserHierarchyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ParentGroupId': obj.parentGroupId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCreateUserHierarchyGroupResponse
 */
export interface ConnectCreateUserHierarchyGroupResponse {
  /**
   * @schema ConnectCreateUserHierarchyGroupResponse#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectCreateUserHierarchyGroupResponse#HierarchyGroupArn
   */
  readonly hierarchyGroupArn?: string;

}

/**
 * Converts an object of type 'ConnectCreateUserHierarchyGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCreateUserHierarchyGroupResponse(obj: ConnectCreateUserHierarchyGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyGroupId': obj.hierarchyGroupId,
    'HierarchyGroupArn': obj.hierarchyGroupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteHoursOfOperationRequest
 */
export interface ConnectDeleteHoursOfOperationRequest {
  /**
   * @schema ConnectDeleteHoursOfOperationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDeleteHoursOfOperationRequest#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteHoursOfOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteHoursOfOperationRequest(obj: ConnectDeleteHoursOfOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'HoursOfOperationId': obj.hoursOfOperationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteInstanceRequest
 */
export interface ConnectDeleteInstanceRequest {
  /**
   * @schema ConnectDeleteInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteInstanceRequest(obj: ConnectDeleteInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteIntegrationAssociationRequest
 */
export interface ConnectDeleteIntegrationAssociationRequest {
  /**
   * @schema ConnectDeleteIntegrationAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDeleteIntegrationAssociationRequest#IntegrationAssociationId
   */
  readonly integrationAssociationId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteIntegrationAssociationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteIntegrationAssociationRequest(obj: ConnectDeleteIntegrationAssociationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'IntegrationAssociationId': obj.integrationAssociationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteQuickConnectRequest
 */
export interface ConnectDeleteQuickConnectRequest {
  /**
   * @schema ConnectDeleteQuickConnectRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDeleteQuickConnectRequest#QuickConnectId
   */
  readonly quickConnectId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteQuickConnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteQuickConnectRequest(obj: ConnectDeleteQuickConnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QuickConnectId': obj.quickConnectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteUseCaseRequest
 */
export interface ConnectDeleteUseCaseRequest {
  /**
   * @schema ConnectDeleteUseCaseRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDeleteUseCaseRequest#IntegrationAssociationId
   */
  readonly integrationAssociationId?: string;

  /**
   * @schema ConnectDeleteUseCaseRequest#UseCaseId
   */
  readonly useCaseId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteUseCaseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteUseCaseRequest(obj: ConnectDeleteUseCaseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'IntegrationAssociationId': obj.integrationAssociationId,
    'UseCaseId': obj.useCaseId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteUserRequest
 */
export interface ConnectDeleteUserRequest {
  /**
   * @schema ConnectDeleteUserRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDeleteUserRequest#UserId
   */
  readonly userId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteUserRequest(obj: ConnectDeleteUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'UserId': obj.userId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDeleteUserHierarchyGroupRequest
 */
export interface ConnectDeleteUserHierarchyGroupRequest {
  /**
   * @schema ConnectDeleteUserHierarchyGroupRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectDeleteUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectDeleteUserHierarchyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDeleteUserHierarchyGroupRequest(obj: ConnectDeleteUserHierarchyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyGroupId': obj.hierarchyGroupId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeAgentStatusRequest
 */
export interface ConnectDescribeAgentStatusRequest {
  /**
   * @schema ConnectDescribeAgentStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeAgentStatusRequest#AgentStatusId
   */
  readonly agentStatusId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeAgentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeAgentStatusRequest(obj: ConnectDescribeAgentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AgentStatusId': obj.agentStatusId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeAgentStatusResponse
 */
export interface ConnectDescribeAgentStatusResponse {
  /**
   * @schema ConnectDescribeAgentStatusResponse#AgentStatus
   */
  readonly agentStatus?: ConnectAgentStatus;

}

/**
 * Converts an object of type 'ConnectDescribeAgentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeAgentStatusResponse(obj: ConnectDescribeAgentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentStatus': toJson_ConnectAgentStatus(obj.agentStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeContactFlowRequest
 */
export interface ConnectDescribeContactFlowRequest {
  /**
   * @schema ConnectDescribeContactFlowRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeContactFlowRequest#ContactFlowId
   */
  readonly contactFlowId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeContactFlowRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeContactFlowRequest(obj: ConnectDescribeContactFlowRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactFlowId': obj.contactFlowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeContactFlowResponse
 */
export interface ConnectDescribeContactFlowResponse {
  /**
   * @schema ConnectDescribeContactFlowResponse#ContactFlow
   */
  readonly contactFlow?: ConnectContactFlow;

}

/**
 * Converts an object of type 'ConnectDescribeContactFlowResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeContactFlowResponse(obj: ConnectDescribeContactFlowResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactFlow': toJson_ConnectContactFlow(obj.contactFlow),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeHoursOfOperationRequest
 */
export interface ConnectDescribeHoursOfOperationRequest {
  /**
   * @schema ConnectDescribeHoursOfOperationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeHoursOfOperationRequest#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeHoursOfOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeHoursOfOperationRequest(obj: ConnectDescribeHoursOfOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'HoursOfOperationId': obj.hoursOfOperationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeHoursOfOperationResponse
 */
export interface ConnectDescribeHoursOfOperationResponse {
  /**
   * @schema ConnectDescribeHoursOfOperationResponse#HoursOfOperation
   */
  readonly hoursOfOperation?: ConnectHoursOfOperation;

}

/**
 * Converts an object of type 'ConnectDescribeHoursOfOperationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeHoursOfOperationResponse(obj: ConnectDescribeHoursOfOperationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HoursOfOperation': toJson_ConnectHoursOfOperation(obj.hoursOfOperation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeInstanceRequest
 */
export interface ConnectDescribeInstanceRequest {
  /**
   * @schema ConnectDescribeInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeInstanceRequest(obj: ConnectDescribeInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeInstanceResponse
 */
export interface ConnectDescribeInstanceResponse {
  /**
   * @schema ConnectDescribeInstanceResponse#Instance
   */
  readonly instance?: ConnectInstance;

}

/**
 * Converts an object of type 'ConnectDescribeInstanceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeInstanceResponse(obj: ConnectDescribeInstanceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instance': toJson_ConnectInstance(obj.instance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeInstanceAttributeRequest
 */
export interface ConnectDescribeInstanceAttributeRequest {
  /**
   * @schema ConnectDescribeInstanceAttributeRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeInstanceAttributeRequest#AttributeType
   */
  readonly attributeType?: string;

}

/**
 * Converts an object of type 'ConnectDescribeInstanceAttributeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeInstanceAttributeRequest(obj: ConnectDescribeInstanceAttributeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AttributeType': obj.attributeType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeInstanceAttributeResponse
 */
export interface ConnectDescribeInstanceAttributeResponse {
  /**
   * @schema ConnectDescribeInstanceAttributeResponse#Attribute
   */
  readonly attribute?: ConnectAttribute;

}

/**
 * Converts an object of type 'ConnectDescribeInstanceAttributeResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeInstanceAttributeResponse(obj: ConnectDescribeInstanceAttributeResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': toJson_ConnectAttribute(obj.attribute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeInstanceStorageConfigRequest
 */
export interface ConnectDescribeInstanceStorageConfigRequest {
  /**
   * @schema ConnectDescribeInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectDescribeInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'ConnectDescribeInstanceStorageConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeInstanceStorageConfigRequest(obj: ConnectDescribeInstanceStorageConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeInstanceStorageConfigResponse
 */
export interface ConnectDescribeInstanceStorageConfigResponse {
  /**
   * @schema ConnectDescribeInstanceStorageConfigResponse#StorageConfig
   */
  readonly storageConfig?: ConnectInstanceStorageConfig;

}

/**
 * Converts an object of type 'ConnectDescribeInstanceStorageConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeInstanceStorageConfigResponse(obj: ConnectDescribeInstanceStorageConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageConfig': toJson_ConnectInstanceStorageConfig(obj.storageConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeQueueRequest
 */
export interface ConnectDescribeQueueRequest {
  /**
   * @schema ConnectDescribeQueueRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeQueueRequest#QueueId
   */
  readonly queueId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeQueueRequest(obj: ConnectDescribeQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeQueueResponse
 */
export interface ConnectDescribeQueueResponse {
  /**
   * @schema ConnectDescribeQueueResponse#Queue
   */
  readonly queue?: ConnectQueue;

}

/**
 * Converts an object of type 'ConnectDescribeQueueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeQueueResponse(obj: ConnectDescribeQueueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Queue': toJson_ConnectQueue(obj.queue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeQuickConnectRequest
 */
export interface ConnectDescribeQuickConnectRequest {
  /**
   * @schema ConnectDescribeQuickConnectRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeQuickConnectRequest#QuickConnectId
   */
  readonly quickConnectId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeQuickConnectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeQuickConnectRequest(obj: ConnectDescribeQuickConnectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QuickConnectId': obj.quickConnectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeQuickConnectResponse
 */
export interface ConnectDescribeQuickConnectResponse {
  /**
   * @schema ConnectDescribeQuickConnectResponse#QuickConnect
   */
  readonly quickConnect?: ConnectQuickConnect;

}

/**
 * Converts an object of type 'ConnectDescribeQuickConnectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeQuickConnectResponse(obj: ConnectDescribeQuickConnectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuickConnect': toJson_ConnectQuickConnect(obj.quickConnect),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeRoutingProfileRequest
 */
export interface ConnectDescribeRoutingProfileRequest {
  /**
   * @schema ConnectDescribeRoutingProfileRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDescribeRoutingProfileRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeRoutingProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeRoutingProfileRequest(obj: ConnectDescribeRoutingProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeRoutingProfileResponse
 */
export interface ConnectDescribeRoutingProfileResponse {
  /**
   * @schema ConnectDescribeRoutingProfileResponse#RoutingProfile
   */
  readonly routingProfile?: ConnectRoutingProfile;

}

/**
 * Converts an object of type 'ConnectDescribeRoutingProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeRoutingProfileResponse(obj: ConnectDescribeRoutingProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingProfile': toJson_ConnectRoutingProfile(obj.routingProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeUserRequest
 */
export interface ConnectDescribeUserRequest {
  /**
   * @schema ConnectDescribeUserRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectDescribeUserRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeUserRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeUserRequest(obj: ConnectDescribeUserRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeUserResponse
 */
export interface ConnectDescribeUserResponse {
  /**
   * @schema ConnectDescribeUserResponse#User
   */
  readonly user?: ConnectUser;

}

/**
 * Converts an object of type 'ConnectDescribeUserResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeUserResponse(obj: ConnectDescribeUserResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'User': toJson_ConnectUser(obj.user),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeUserHierarchyGroupRequest
 */
export interface ConnectDescribeUserHierarchyGroupRequest {
  /**
   * @schema ConnectDescribeUserHierarchyGroupRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectDescribeUserHierarchyGroupRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeUserHierarchyGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeUserHierarchyGroupRequest(obj: ConnectDescribeUserHierarchyGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyGroupId': obj.hierarchyGroupId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeUserHierarchyGroupResponse
 */
export interface ConnectDescribeUserHierarchyGroupResponse {
  /**
   * @schema ConnectDescribeUserHierarchyGroupResponse#HierarchyGroup
   */
  readonly hierarchyGroup?: ConnectHierarchyGroup;

}

/**
 * Converts an object of type 'ConnectDescribeUserHierarchyGroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeUserHierarchyGroupResponse(obj: ConnectDescribeUserHierarchyGroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyGroup': toJson_ConnectHierarchyGroup(obj.hierarchyGroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeUserHierarchyStructureRequest
 */
export interface ConnectDescribeUserHierarchyStructureRequest {
  /**
   * @schema ConnectDescribeUserHierarchyStructureRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectDescribeUserHierarchyStructureRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeUserHierarchyStructureRequest(obj: ConnectDescribeUserHierarchyStructureRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDescribeUserHierarchyStructureResponse
 */
export interface ConnectDescribeUserHierarchyStructureResponse {
  /**
   * @schema ConnectDescribeUserHierarchyStructureResponse#HierarchyStructure
   */
  readonly hierarchyStructure?: ConnectHierarchyStructure;

}

/**
 * Converts an object of type 'ConnectDescribeUserHierarchyStructureResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDescribeUserHierarchyStructureResponse(obj: ConnectDescribeUserHierarchyStructureResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyStructure': toJson_ConnectHierarchyStructure(obj.hierarchyStructure),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateApprovedOriginRequest
 */
export interface ConnectDisassociateApprovedOriginRequest {
  /**
   * @schema ConnectDisassociateApprovedOriginRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateApprovedOriginRequest#Origin
   */
  readonly origin?: string;

}

/**
 * Converts an object of type 'ConnectDisassociateApprovedOriginRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateApprovedOriginRequest(obj: ConnectDisassociateApprovedOriginRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Origin': obj.origin,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateBotRequest
 */
export interface ConnectDisassociateBotRequest {
  /**
   * @schema ConnectDisassociateBotRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateBotRequest#LexBot
   */
  readonly lexBot?: ConnectLexBot;

  /**
   * @schema ConnectDisassociateBotRequest#LexV2Bot
   */
  readonly lexV2Bot?: ConnectLexV2Bot;

}

/**
 * Converts an object of type 'ConnectDisassociateBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateBotRequest(obj: ConnectDisassociateBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'LexBot': toJson_ConnectLexBot(obj.lexBot),
    'LexV2Bot': toJson_ConnectLexV2Bot(obj.lexV2Bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateInstanceStorageConfigRequest
 */
export interface ConnectDisassociateInstanceStorageConfigRequest {
  /**
   * @schema ConnectDisassociateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectDisassociateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * Converts an object of type 'ConnectDisassociateInstanceStorageConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateInstanceStorageConfigRequest(obj: ConnectDisassociateInstanceStorageConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateLambdaFunctionRequest
 */
export interface ConnectDisassociateLambdaFunctionRequest {
  /**
   * @schema ConnectDisassociateLambdaFunctionRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateLambdaFunctionRequest#FunctionArn
   */
  readonly functionArn?: string;

}

/**
 * Converts an object of type 'ConnectDisassociateLambdaFunctionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateLambdaFunctionRequest(obj: ConnectDisassociateLambdaFunctionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'FunctionArn': obj.functionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateLexBotRequest
 */
export interface ConnectDisassociateLexBotRequest {
  /**
   * @schema ConnectDisassociateLexBotRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateLexBotRequest#BotName
   */
  readonly botName?: string;

  /**
   * @schema ConnectDisassociateLexBotRequest#LexRegion
   */
  readonly lexRegion?: string;

}

/**
 * Converts an object of type 'ConnectDisassociateLexBotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateLexBotRequest(obj: ConnectDisassociateLexBotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'BotName': obj.botName,
    'LexRegion': obj.lexRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateQueueQuickConnectsRequest
 */
export interface ConnectDisassociateQueueQuickConnectsRequest {
  /**
   * @schema ConnectDisassociateQueueQuickConnectsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateQueueQuickConnectsRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectDisassociateQueueQuickConnectsRequest#QuickConnectIds
   */
  readonly quickConnectIds?: string[];

}

/**
 * Converts an object of type 'ConnectDisassociateQueueQuickConnectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateQueueQuickConnectsRequest(obj: ConnectDisassociateQueueQuickConnectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'QuickConnectIds': obj.quickConnectIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateRoutingProfileQueuesRequest
 */
export interface ConnectDisassociateRoutingProfileQueuesRequest {
  /**
   * @schema ConnectDisassociateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectDisassociateRoutingProfileQueuesRequest#QueueReferences
   */
  readonly queueReferences?: ConnectRoutingProfileQueueReference[];

}

/**
 * Converts an object of type 'ConnectDisassociateRoutingProfileQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateRoutingProfileQueuesRequest(obj: ConnectDisassociateRoutingProfileQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'QueueReferences': obj.queueReferences?.map(y => toJson_ConnectRoutingProfileQueueReference(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDisassociateSecurityKeyRequest
 */
export interface ConnectDisassociateSecurityKeyRequest {
  /**
   * @schema ConnectDisassociateSecurityKeyRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectDisassociateSecurityKeyRequest#AssociationId
   */
  readonly associationId?: string;

}

/**
 * Converts an object of type 'ConnectDisassociateSecurityKeyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDisassociateSecurityKeyRequest(obj: ConnectDisassociateSecurityKeyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetContactAttributesRequest
 */
export interface ConnectGetContactAttributesRequest {
  /**
   * @schema ConnectGetContactAttributesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectGetContactAttributesRequest#InitialContactId
   */
  readonly initialContactId?: string;

}

/**
 * Converts an object of type 'ConnectGetContactAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetContactAttributesRequest(obj: ConnectGetContactAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'InitialContactId': obj.initialContactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetContactAttributesResponse
 */
export interface ConnectGetContactAttributesResponse {
  /**
   * @schema ConnectGetContactAttributesResponse#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectGetContactAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetContactAttributesResponse(obj: ConnectGetContactAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetCurrentMetricDataRequest
 */
export interface ConnectGetCurrentMetricDataRequest {
  /**
   * @schema ConnectGetCurrentMetricDataRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectGetCurrentMetricDataRequest#Filters
   */
  readonly filters?: ConnectFilters;

  /**
   * @schema ConnectGetCurrentMetricDataRequest#Groupings
   */
  readonly groupings?: string[];

  /**
   * @schema ConnectGetCurrentMetricDataRequest#CurrentMetrics
   */
  readonly currentMetrics?: ConnectCurrentMetric[];

  /**
   * @schema ConnectGetCurrentMetricDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetCurrentMetricDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectGetCurrentMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetCurrentMetricDataRequest(obj: ConnectGetCurrentMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Filters': toJson_ConnectFilters(obj.filters),
    'Groupings': obj.groupings?.map(y => y),
    'CurrentMetrics': obj.currentMetrics?.map(y => toJson_ConnectCurrentMetric(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetCurrentMetricDataResponse
 */
export interface ConnectGetCurrentMetricDataResponse {
  /**
   * @schema ConnectGetCurrentMetricDataResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetCurrentMetricDataResponse#MetricResults
   */
  readonly metricResults?: ConnectCurrentMetricResult[];

  /**
   * @schema ConnectGetCurrentMetricDataResponse#DataSnapshotTime
   */
  readonly dataSnapshotTime?: string;

}

/**
 * Converts an object of type 'ConnectGetCurrentMetricDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetCurrentMetricDataResponse(obj: ConnectGetCurrentMetricDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MetricResults': obj.metricResults?.map(y => toJson_ConnectCurrentMetricResult(y)),
    'DataSnapshotTime': obj.dataSnapshotTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetFederationTokenRequest
 */
export interface ConnectGetFederationTokenRequest {
  /**
   * @schema ConnectGetFederationTokenRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectGetFederationTokenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetFederationTokenRequest(obj: ConnectGetFederationTokenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetFederationTokenResponse
 */
export interface ConnectGetFederationTokenResponse {
  /**
   * @schema ConnectGetFederationTokenResponse#Credentials
   */
  readonly credentials?: ConnectCredentials;

}

/**
 * Converts an object of type 'ConnectGetFederationTokenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetFederationTokenResponse(obj: ConnectGetFederationTokenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Credentials': toJson_ConnectCredentials(obj.credentials),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetMetricDataRequest
 */
export interface ConnectGetMetricDataRequest {
  /**
   * @schema ConnectGetMetricDataRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectGetMetricDataRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema ConnectGetMetricDataRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ConnectGetMetricDataRequest#Filters
   */
  readonly filters?: ConnectFilters;

  /**
   * @schema ConnectGetMetricDataRequest#Groupings
   */
  readonly groupings?: string[];

  /**
   * @schema ConnectGetMetricDataRequest#HistoricalMetrics
   */
  readonly historicalMetrics?: ConnectHistoricalMetric[];

  /**
   * @schema ConnectGetMetricDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetMetricDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectGetMetricDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetMetricDataRequest(obj: ConnectGetMetricDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'StartTime': obj.startTime,
    'EndTime': obj.endTime,
    'Filters': toJson_ConnectFilters(obj.filters),
    'Groupings': obj.groupings?.map(y => y),
    'HistoricalMetrics': obj.historicalMetrics?.map(y => toJson_ConnectHistoricalMetric(y)),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectGetMetricDataResponse
 */
export interface ConnectGetMetricDataResponse {
  /**
   * @schema ConnectGetMetricDataResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectGetMetricDataResponse#MetricResults
   */
  readonly metricResults?: ConnectHistoricalMetricResult[];

}

/**
 * Converts an object of type 'ConnectGetMetricDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectGetMetricDataResponse(obj: ConnectGetMetricDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MetricResults': obj.metricResults?.map(y => toJson_ConnectHistoricalMetricResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListAgentStatusRequest
 */
export interface ConnectListAgentStatusRequest {
  /**
   * @schema ConnectListAgentStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListAgentStatusRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListAgentStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ConnectListAgentStatusRequest#AgentStatusTypes
   */
  readonly agentStatusTypes?: string[];

}

/**
 * Converts an object of type 'ConnectListAgentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListAgentStatusRequest(obj: ConnectListAgentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'AgentStatusTypes': obj.agentStatusTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListAgentStatusResponse
 */
export interface ConnectListAgentStatusResponse {
  /**
   * @schema ConnectListAgentStatusResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListAgentStatusResponse#AgentStatusSummaryList
   */
  readonly agentStatusSummaryList?: ConnectAgentStatusSummary[];

}

/**
 * Converts an object of type 'ConnectListAgentStatusResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListAgentStatusResponse(obj: ConnectListAgentStatusResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'AgentStatusSummaryList': obj.agentStatusSummaryList?.map(y => toJson_ConnectAgentStatusSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListApprovedOriginsRequest
 */
export interface ConnectListApprovedOriginsRequest {
  /**
   * @schema ConnectListApprovedOriginsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListApprovedOriginsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListApprovedOriginsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListApprovedOriginsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListApprovedOriginsRequest(obj: ConnectListApprovedOriginsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListApprovedOriginsResponse
 */
export interface ConnectListApprovedOriginsResponse {
  /**
   * @schema ConnectListApprovedOriginsResponse#Origins
   */
  readonly origins?: string[];

  /**
   * @schema ConnectListApprovedOriginsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListApprovedOriginsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListApprovedOriginsResponse(obj: ConnectListApprovedOriginsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Origins': obj.origins?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListBotsRequest
 */
export interface ConnectListBotsRequest {
  /**
   * @schema ConnectListBotsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListBotsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListBotsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ConnectListBotsRequest#LexVersion
   */
  readonly lexVersion?: string;

}

/**
 * Converts an object of type 'ConnectListBotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListBotsRequest(obj: ConnectListBotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'LexVersion': obj.lexVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListBotsResponse
 */
export interface ConnectListBotsResponse {
  /**
   * @schema ConnectListBotsResponse#LexBots
   */
  readonly lexBots?: ConnectLexBotConfig[];

  /**
   * @schema ConnectListBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListBotsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListBotsResponse(obj: ConnectListBotsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LexBots': obj.lexBots?.map(y => toJson_ConnectLexBotConfig(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListContactFlowsRequest
 */
export interface ConnectListContactFlowsRequest {
  /**
   * @schema ConnectListContactFlowsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListContactFlowsRequest#ContactFlowTypes
   */
  readonly contactFlowTypes?: string[];

  /**
   * @schema ConnectListContactFlowsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListContactFlowsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListContactFlowsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListContactFlowsRequest(obj: ConnectListContactFlowsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactFlowTypes': obj.contactFlowTypes?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListContactFlowsResponse
 */
export interface ConnectListContactFlowsResponse {
  /**
   * @schema ConnectListContactFlowsResponse#ContactFlowSummaryList
   */
  readonly contactFlowSummaryList?: ConnectContactFlowSummary[];

  /**
   * @schema ConnectListContactFlowsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListContactFlowsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListContactFlowsResponse(obj: ConnectListContactFlowsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactFlowSummaryList': obj.contactFlowSummaryList?.map(y => toJson_ConnectContactFlowSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListHoursOfOperationsRequest
 */
export interface ConnectListHoursOfOperationsRequest {
  /**
   * @schema ConnectListHoursOfOperationsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListHoursOfOperationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListHoursOfOperationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListHoursOfOperationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListHoursOfOperationsRequest(obj: ConnectListHoursOfOperationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListHoursOfOperationsResponse
 */
export interface ConnectListHoursOfOperationsResponse {
  /**
   * @schema ConnectListHoursOfOperationsResponse#HoursOfOperationSummaryList
   */
  readonly hoursOfOperationSummaryList?: ConnectHoursOfOperationSummary[];

  /**
   * @schema ConnectListHoursOfOperationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListHoursOfOperationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListHoursOfOperationsResponse(obj: ConnectListHoursOfOperationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HoursOfOperationSummaryList': obj.hoursOfOperationSummaryList?.map(y => toJson_ConnectHoursOfOperationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListInstanceAttributesRequest
 */
export interface ConnectListInstanceAttributesRequest {
  /**
   * @schema ConnectListInstanceAttributesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListInstanceAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListInstanceAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListInstanceAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListInstanceAttributesRequest(obj: ConnectListInstanceAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListInstanceAttributesResponse
 */
export interface ConnectListInstanceAttributesResponse {
  /**
   * @schema ConnectListInstanceAttributesResponse#Attributes
   */
  readonly attributes?: ConnectAttribute[];

  /**
   * @schema ConnectListInstanceAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListInstanceAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListInstanceAttributesResponse(obj: ConnectListInstanceAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_ConnectAttribute(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListInstanceStorageConfigsRequest
 */
export interface ConnectListInstanceStorageConfigsRequest {
  /**
   * @schema ConnectListInstanceStorageConfigsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListInstanceStorageConfigsRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ConnectListInstanceStorageConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListInstanceStorageConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListInstanceStorageConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListInstanceStorageConfigsRequest(obj: ConnectListInstanceStorageConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ResourceType': obj.resourceType,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListInstanceStorageConfigsResponse
 */
export interface ConnectListInstanceStorageConfigsResponse {
  /**
   * @schema ConnectListInstanceStorageConfigsResponse#StorageConfigs
   */
  readonly storageConfigs?: ConnectInstanceStorageConfig[];

  /**
   * @schema ConnectListInstanceStorageConfigsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListInstanceStorageConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListInstanceStorageConfigsResponse(obj: ConnectListInstanceStorageConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StorageConfigs': obj.storageConfigs?.map(y => toJson_ConnectInstanceStorageConfig(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListInstancesRequest
 */
export interface ConnectListInstancesRequest {
  /**
   * @schema ConnectListInstancesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListInstancesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListInstancesRequest(obj: ConnectListInstancesRequest | undefined): Record<string, any> | undefined {
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
 * @schema ConnectListInstancesResponse
 */
export interface ConnectListInstancesResponse {
  /**
   * @schema ConnectListInstancesResponse#InstanceSummaryList
   */
  readonly instanceSummaryList?: ConnectInstanceSummary[];

  /**
   * @schema ConnectListInstancesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListInstancesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListInstancesResponse(obj: ConnectListInstancesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceSummaryList': obj.instanceSummaryList?.map(y => toJson_ConnectInstanceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListIntegrationAssociationsRequest
 */
export interface ConnectListIntegrationAssociationsRequest {
  /**
   * @schema ConnectListIntegrationAssociationsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListIntegrationAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListIntegrationAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListIntegrationAssociationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListIntegrationAssociationsRequest(obj: ConnectListIntegrationAssociationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListIntegrationAssociationsResponse
 */
export interface ConnectListIntegrationAssociationsResponse {
  /**
   * @schema ConnectListIntegrationAssociationsResponse#IntegrationAssociationSummaryList
   */
  readonly integrationAssociationSummaryList?: ConnectIntegrationAssociationSummary[];

  /**
   * @schema ConnectListIntegrationAssociationsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListIntegrationAssociationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListIntegrationAssociationsResponse(obj: ConnectListIntegrationAssociationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IntegrationAssociationSummaryList': obj.integrationAssociationSummaryList?.map(y => toJson_ConnectIntegrationAssociationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListLambdaFunctionsRequest
 */
export interface ConnectListLambdaFunctionsRequest {
  /**
   * @schema ConnectListLambdaFunctionsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListLambdaFunctionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListLambdaFunctionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListLambdaFunctionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListLambdaFunctionsRequest(obj: ConnectListLambdaFunctionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListLambdaFunctionsResponse
 */
export interface ConnectListLambdaFunctionsResponse {
  /**
   * @schema ConnectListLambdaFunctionsResponse#LambdaFunctions
   */
  readonly lambdaFunctions?: string[];

  /**
   * @schema ConnectListLambdaFunctionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListLambdaFunctionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListLambdaFunctionsResponse(obj: ConnectListLambdaFunctionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LambdaFunctions': obj.lambdaFunctions?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListLexBotsRequest
 */
export interface ConnectListLexBotsRequest {
  /**
   * @schema ConnectListLexBotsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListLexBotsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListLexBotsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListLexBotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListLexBotsRequest(obj: ConnectListLexBotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListLexBotsResponse
 */
export interface ConnectListLexBotsResponse {
  /**
   * @schema ConnectListLexBotsResponse#LexBots
   */
  readonly lexBots?: ConnectLexBot[];

  /**
   * @schema ConnectListLexBotsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListLexBotsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListLexBotsResponse(obj: ConnectListLexBotsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LexBots': obj.lexBots?.map(y => toJson_ConnectLexBot(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListPhoneNumbersRequest
 */
export interface ConnectListPhoneNumbersRequest {
  /**
   * @schema ConnectListPhoneNumbersRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListPhoneNumbersRequest#PhoneNumberTypes
   */
  readonly phoneNumberTypes?: string[];

  /**
   * @schema ConnectListPhoneNumbersRequest#PhoneNumberCountryCodes
   */
  readonly phoneNumberCountryCodes?: string[];

  /**
   * @schema ConnectListPhoneNumbersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListPhoneNumbersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListPhoneNumbersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListPhoneNumbersRequest(obj: ConnectListPhoneNumbersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'PhoneNumberTypes': obj.phoneNumberTypes?.map(y => y),
    'PhoneNumberCountryCodes': obj.phoneNumberCountryCodes?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListPhoneNumbersResponse
 */
export interface ConnectListPhoneNumbersResponse {
  /**
   * @schema ConnectListPhoneNumbersResponse#PhoneNumberSummaryList
   */
  readonly phoneNumberSummaryList?: ConnectPhoneNumberSummary[];

  /**
   * @schema ConnectListPhoneNumbersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListPhoneNumbersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListPhoneNumbersResponse(obj: ConnectListPhoneNumbersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumberSummaryList': obj.phoneNumberSummaryList?.map(y => toJson_ConnectPhoneNumberSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListPromptsRequest
 */
export interface ConnectListPromptsRequest {
  /**
   * @schema ConnectListPromptsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListPromptsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListPromptsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListPromptsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListPromptsRequest(obj: ConnectListPromptsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListPromptsResponse
 */
export interface ConnectListPromptsResponse {
  /**
   * @schema ConnectListPromptsResponse#PromptSummaryList
   */
  readonly promptSummaryList?: ConnectPromptSummary[];

  /**
   * @schema ConnectListPromptsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListPromptsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListPromptsResponse(obj: ConnectListPromptsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PromptSummaryList': obj.promptSummaryList?.map(y => toJson_ConnectPromptSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListQueueQuickConnectsRequest
 */
export interface ConnectListQueueQuickConnectsRequest {
  /**
   * @schema ConnectListQueueQuickConnectsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListQueueQuickConnectsRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectListQueueQuickConnectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListQueueQuickConnectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListQueueQuickConnectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListQueueQuickConnectsRequest(obj: ConnectListQueueQuickConnectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListQueueQuickConnectsResponse
 */
export interface ConnectListQueueQuickConnectsResponse {
  /**
   * @schema ConnectListQueueQuickConnectsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListQueueQuickConnectsResponse#QuickConnectSummaryList
   */
  readonly quickConnectSummaryList?: ConnectQuickConnectSummary[];

}

/**
 * Converts an object of type 'ConnectListQueueQuickConnectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListQueueQuickConnectsResponse(obj: ConnectListQueueQuickConnectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'QuickConnectSummaryList': obj.quickConnectSummaryList?.map(y => toJson_ConnectQuickConnectSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListQueuesRequest
 */
export interface ConnectListQueuesRequest {
  /**
   * @schema ConnectListQueuesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListQueuesRequest#QueueTypes
   */
  readonly queueTypes?: string[];

  /**
   * @schema ConnectListQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListQueuesRequest(obj: ConnectListQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueTypes': obj.queueTypes?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListQueuesResponse
 */
export interface ConnectListQueuesResponse {
  /**
   * @schema ConnectListQueuesResponse#QueueSummaryList
   */
  readonly queueSummaryList?: ConnectQueueSummary[];

  /**
   * @schema ConnectListQueuesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListQueuesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListQueuesResponse(obj: ConnectListQueuesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueSummaryList': obj.queueSummaryList?.map(y => toJson_ConnectQueueSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListQuickConnectsRequest
 */
export interface ConnectListQuickConnectsRequest {
  /**
   * @schema ConnectListQuickConnectsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListQuickConnectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListQuickConnectsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ConnectListQuickConnectsRequest#QuickConnectTypes
   */
  readonly quickConnectTypes?: string[];

}

/**
 * Converts an object of type 'ConnectListQuickConnectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListQuickConnectsRequest(obj: ConnectListQuickConnectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'QuickConnectTypes': obj.quickConnectTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListQuickConnectsResponse
 */
export interface ConnectListQuickConnectsResponse {
  /**
   * @schema ConnectListQuickConnectsResponse#QuickConnectSummaryList
   */
  readonly quickConnectSummaryList?: ConnectQuickConnectSummary[];

  /**
   * @schema ConnectListQuickConnectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListQuickConnectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListQuickConnectsResponse(obj: ConnectListQuickConnectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuickConnectSummaryList': obj.quickConnectSummaryList?.map(y => toJson_ConnectQuickConnectSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListRoutingProfileQueuesRequest
 */
export interface ConnectListRoutingProfileQueuesRequest {
  /**
   * @schema ConnectListRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectListRoutingProfileQueuesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListRoutingProfileQueuesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListRoutingProfileQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListRoutingProfileQueuesRequest(obj: ConnectListRoutingProfileQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListRoutingProfileQueuesResponse
 */
export interface ConnectListRoutingProfileQueuesResponse {
  /**
   * @schema ConnectListRoutingProfileQueuesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListRoutingProfileQueuesResponse#RoutingProfileQueueConfigSummaryList
   */
  readonly routingProfileQueueConfigSummaryList?: ConnectRoutingProfileQueueConfigSummary[];

}

/**
 * Converts an object of type 'ConnectListRoutingProfileQueuesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListRoutingProfileQueuesResponse(obj: ConnectListRoutingProfileQueuesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'RoutingProfileQueueConfigSummaryList': obj.routingProfileQueueConfigSummaryList?.map(y => toJson_ConnectRoutingProfileQueueConfigSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListRoutingProfilesRequest
 */
export interface ConnectListRoutingProfilesRequest {
  /**
   * @schema ConnectListRoutingProfilesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListRoutingProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListRoutingProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListRoutingProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListRoutingProfilesRequest(obj: ConnectListRoutingProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListRoutingProfilesResponse
 */
export interface ConnectListRoutingProfilesResponse {
  /**
   * @schema ConnectListRoutingProfilesResponse#RoutingProfileSummaryList
   */
  readonly routingProfileSummaryList?: ConnectRoutingProfileSummary[];

  /**
   * @schema ConnectListRoutingProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListRoutingProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListRoutingProfilesResponse(obj: ConnectListRoutingProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingProfileSummaryList': obj.routingProfileSummaryList?.map(y => toJson_ConnectRoutingProfileSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListSecurityKeysRequest
 */
export interface ConnectListSecurityKeysRequest {
  /**
   * @schema ConnectListSecurityKeysRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListSecurityKeysRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListSecurityKeysRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListSecurityKeysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListSecurityKeysRequest(obj: ConnectListSecurityKeysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListSecurityKeysResponse
 */
export interface ConnectListSecurityKeysResponse {
  /**
   * @schema ConnectListSecurityKeysResponse#SecurityKeys
   */
  readonly securityKeys?: ConnectSecurityKey[];

  /**
   * @schema ConnectListSecurityKeysResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListSecurityKeysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListSecurityKeysResponse(obj: ConnectListSecurityKeysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityKeys': obj.securityKeys?.map(y => toJson_ConnectSecurityKey(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListSecurityProfilesRequest
 */
export interface ConnectListSecurityProfilesRequest {
  /**
   * @schema ConnectListSecurityProfilesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListSecurityProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListSecurityProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListSecurityProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListSecurityProfilesRequest(obj: ConnectListSecurityProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListSecurityProfilesResponse
 */
export interface ConnectListSecurityProfilesResponse {
  /**
   * @schema ConnectListSecurityProfilesResponse#SecurityProfileSummaryList
   */
  readonly securityProfileSummaryList?: ConnectSecurityProfileSummary[];

  /**
   * @schema ConnectListSecurityProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListSecurityProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListSecurityProfilesResponse(obj: ConnectListSecurityProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityProfileSummaryList': obj.securityProfileSummaryList?.map(y => toJson_ConnectSecurityProfileSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListTagsForResourceRequest
 */
export interface ConnectListTagsForResourceRequest {
  /**
   * @schema ConnectListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'ConnectListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListTagsForResourceRequest(obj: ConnectListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListTagsForResourceResponse
 */
export interface ConnectListTagsForResourceResponse {
  /**
   * @schema ConnectListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListTagsForResourceResponse(obj: ConnectListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListUseCasesRequest
 */
export interface ConnectListUseCasesRequest {
  /**
   * @schema ConnectListUseCasesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListUseCasesRequest#IntegrationAssociationId
   */
  readonly integrationAssociationId?: string;

  /**
   * @schema ConnectListUseCasesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListUseCasesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListUseCasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListUseCasesRequest(obj: ConnectListUseCasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'IntegrationAssociationId': obj.integrationAssociationId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListUseCasesResponse
 */
export interface ConnectListUseCasesResponse {
  /**
   * @schema ConnectListUseCasesResponse#UseCaseSummaryList
   */
  readonly useCaseSummaryList?: ConnectUseCase[];

  /**
   * @schema ConnectListUseCasesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListUseCasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListUseCasesResponse(obj: ConnectListUseCasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UseCaseSummaryList': obj.useCaseSummaryList?.map(y => toJson_ConnectUseCase(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListUserHierarchyGroupsRequest
 */
export interface ConnectListUserHierarchyGroupsRequest {
  /**
   * @schema ConnectListUserHierarchyGroupsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListUserHierarchyGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListUserHierarchyGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListUserHierarchyGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListUserHierarchyGroupsRequest(obj: ConnectListUserHierarchyGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListUserHierarchyGroupsResponse
 */
export interface ConnectListUserHierarchyGroupsResponse {
  /**
   * @schema ConnectListUserHierarchyGroupsResponse#UserHierarchyGroupSummaryList
   */
  readonly userHierarchyGroupSummaryList?: ConnectHierarchyGroupSummary[];

  /**
   * @schema ConnectListUserHierarchyGroupsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListUserHierarchyGroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListUserHierarchyGroupsResponse(obj: ConnectListUserHierarchyGroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserHierarchyGroupSummaryList': obj.userHierarchyGroupSummaryList?.map(y => toJson_ConnectHierarchyGroupSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListUsersRequest
 */
export interface ConnectListUsersRequest {
  /**
   * @schema ConnectListUsersRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectListUsersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ConnectListUsersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ConnectListUsersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListUsersRequest(obj: ConnectListUsersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectListUsersResponse
 */
export interface ConnectListUsersResponse {
  /**
   * @schema ConnectListUsersResponse#UserSummaryList
   */
  readonly userSummaryList?: ConnectUserSummary[];

  /**
   * @schema ConnectListUsersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ConnectListUsersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectListUsersResponse(obj: ConnectListUsersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserSummaryList': obj.userSummaryList?.map(y => toJson_ConnectUserSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectResumeContactRecordingRequest
 */
export interface ConnectResumeContactRecordingRequest {
  /**
   * @schema ConnectResumeContactRecordingRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectResumeContactRecordingRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectResumeContactRecordingRequest#InitialContactId
   */
  readonly initialContactId?: string;

}

/**
 * Converts an object of type 'ConnectResumeContactRecordingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectResumeContactRecordingRequest(obj: ConnectResumeContactRecordingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactId': obj.contactId,
    'InitialContactId': obj.initialContactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectResumeContactRecordingResponse
 */
export interface ConnectResumeContactRecordingResponse {
}

/**
 * Converts an object of type 'ConnectResumeContactRecordingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectResumeContactRecordingResponse(obj: ConnectResumeContactRecordingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartChatContactRequest
 */
export interface ConnectStartChatContactRequest {
  /**
   * @schema ConnectStartChatContactRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectStartChatContactRequest#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectStartChatContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema ConnectStartChatContactRequest#ParticipantDetails
   */
  readonly participantDetails?: ConnectParticipantDetails;

  /**
   * @schema ConnectStartChatContactRequest#InitialMessage
   */
  readonly initialMessage?: ConnectChatMessage;

  /**
   * @schema ConnectStartChatContactRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'ConnectStartChatContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartChatContactRequest(obj: ConnectStartChatContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactFlowId': obj.contactFlowId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ParticipantDetails': toJson_ConnectParticipantDetails(obj.participantDetails),
    'InitialMessage': toJson_ConnectChatMessage(obj.initialMessage),
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartChatContactResponse
 */
export interface ConnectStartChatContactResponse {
  /**
   * @schema ConnectStartChatContactResponse#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectStartChatContactResponse#ParticipantId
   */
  readonly participantId?: string;

  /**
   * @schema ConnectStartChatContactResponse#ParticipantToken
   */
  readonly participantToken?: string;

}

/**
 * Converts an object of type 'ConnectStartChatContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartChatContactResponse(obj: ConnectStartChatContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'ParticipantId': obj.participantId,
    'ParticipantToken': obj.participantToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartContactRecordingRequest
 */
export interface ConnectStartContactRecordingRequest {
  /**
   * @schema ConnectStartContactRecordingRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectStartContactRecordingRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectStartContactRecordingRequest#InitialContactId
   */
  readonly initialContactId?: string;

  /**
   * @schema ConnectStartContactRecordingRequest#VoiceRecordingConfiguration
   */
  readonly voiceRecordingConfiguration?: ConnectVoiceRecordingConfiguration;

}

/**
 * Converts an object of type 'ConnectStartContactRecordingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartContactRecordingRequest(obj: ConnectStartContactRecordingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactId': obj.contactId,
    'InitialContactId': obj.initialContactId,
    'VoiceRecordingConfiguration': toJson_ConnectVoiceRecordingConfiguration(obj.voiceRecordingConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartContactRecordingResponse
 */
export interface ConnectStartContactRecordingResponse {
}

/**
 * Converts an object of type 'ConnectStartContactRecordingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartContactRecordingResponse(obj: ConnectStartContactRecordingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartOutboundVoiceContactRequest
 */
export interface ConnectStartOutboundVoiceContactRequest {
  /**
   * @schema ConnectStartOutboundVoiceContactRequest#DestinationPhoneNumber
   */
  readonly destinationPhoneNumber?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#SourcePhoneNumber
   */
  readonly sourcePhoneNumber?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectStartOutboundVoiceContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectStartOutboundVoiceContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartOutboundVoiceContactRequest(obj: ConnectStartOutboundVoiceContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DestinationPhoneNumber': obj.destinationPhoneNumber,
    'ContactFlowId': obj.contactFlowId,
    'InstanceId': obj.instanceId,
    'ClientToken': obj.clientToken,
    'SourcePhoneNumber': obj.sourcePhoneNumber,
    'QueueId': obj.queueId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartOutboundVoiceContactResponse
 */
export interface ConnectStartOutboundVoiceContactResponse {
  /**
   * @schema ConnectStartOutboundVoiceContactResponse#ContactId
   */
  readonly contactId?: string;

}

/**
 * Converts an object of type 'ConnectStartOutboundVoiceContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartOutboundVoiceContactResponse(obj: ConnectStartOutboundVoiceContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartTaskContactRequest
 */
export interface ConnectStartTaskContactRequest {
  /**
   * @schema ConnectStartTaskContactRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectStartTaskContactRequest#PreviousContactId
   */
  readonly previousContactId?: string;

  /**
   * @schema ConnectStartTaskContactRequest#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectStartTaskContactRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema ConnectStartTaskContactRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectStartTaskContactRequest#References
   */
  readonly references?: { [key: string]: ConnectReference };

  /**
   * @schema ConnectStartTaskContactRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectStartTaskContactRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'ConnectStartTaskContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartTaskContactRequest(obj: ConnectStartTaskContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'PreviousContactId': obj.previousContactId,
    'ContactFlowId': obj.contactFlowId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Name': obj.name,
    'References': ((obj.references) === undefined) ? undefined : (Object.entries(obj.references).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_ConnectReference(i[1]) }), {})),
    'Description': obj.description,
    'ClientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStartTaskContactResponse
 */
export interface ConnectStartTaskContactResponse {
  /**
   * @schema ConnectStartTaskContactResponse#ContactId
   */
  readonly contactId?: string;

}

/**
 * Converts an object of type 'ConnectStartTaskContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStartTaskContactResponse(obj: ConnectStartTaskContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStopContactRequest
 */
export interface ConnectStopContactRequest {
  /**
   * @schema ConnectStopContactRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectStopContactRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectStopContactRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStopContactRequest(obj: ConnectStopContactRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContactId': obj.contactId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStopContactResponse
 */
export interface ConnectStopContactResponse {
}

/**
 * Converts an object of type 'ConnectStopContactResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStopContactResponse(obj: ConnectStopContactResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStopContactRecordingRequest
 */
export interface ConnectStopContactRecordingRequest {
  /**
   * @schema ConnectStopContactRecordingRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectStopContactRecordingRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectStopContactRecordingRequest#InitialContactId
   */
  readonly initialContactId?: string;

}

/**
 * Converts an object of type 'ConnectStopContactRecordingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStopContactRecordingRequest(obj: ConnectStopContactRecordingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactId': obj.contactId,
    'InitialContactId': obj.initialContactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectStopContactRecordingResponse
 */
export interface ConnectStopContactRecordingResponse {
}

/**
 * Converts an object of type 'ConnectStopContactRecordingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectStopContactRecordingResponse(obj: ConnectStopContactRecordingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectSuspendContactRecordingRequest
 */
export interface ConnectSuspendContactRecordingRequest {
  /**
   * @schema ConnectSuspendContactRecordingRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectSuspendContactRecordingRequest#ContactId
   */
  readonly contactId?: string;

  /**
   * @schema ConnectSuspendContactRecordingRequest#InitialContactId
   */
  readonly initialContactId?: string;

}

/**
 * Converts an object of type 'ConnectSuspendContactRecordingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectSuspendContactRecordingRequest(obj: ConnectSuspendContactRecordingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactId': obj.contactId,
    'InitialContactId': obj.initialContactId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectSuspendContactRecordingResponse
 */
export interface ConnectSuspendContactRecordingResponse {
}

/**
 * Converts an object of type 'ConnectSuspendContactRecordingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectSuspendContactRecordingResponse(obj: ConnectSuspendContactRecordingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectTagResourceRequest
 */
export interface ConnectTagResourceRequest {
  /**
   * @schema ConnectTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ConnectTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectTagResourceRequest(obj: ConnectTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ConnectUntagResourceRequest
 */
export interface ConnectUntagResourceRequest {
  /**
   * @schema ConnectUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ConnectUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'ConnectUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUntagResourceRequest(obj: ConnectUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema ConnectUpdateAgentStatusRequest
 */
export interface ConnectUpdateAgentStatusRequest {
  /**
   * @schema ConnectUpdateAgentStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateAgentStatusRequest#AgentStatusId
   */
  readonly agentStatusId?: string;

  /**
   * @schema ConnectUpdateAgentStatusRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateAgentStatusRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectUpdateAgentStatusRequest#State
   */
  readonly state?: string;

  /**
   * @schema ConnectUpdateAgentStatusRequest#DisplayOrder
   */
  readonly displayOrder?: number;

  /**
   * @schema ConnectUpdateAgentStatusRequest#ResetOrderNumber
   */
  readonly resetOrderNumber?: boolean;

}

/**
 * Converts an object of type 'ConnectUpdateAgentStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateAgentStatusRequest(obj: ConnectUpdateAgentStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AgentStatusId': obj.agentStatusId,
    'Name': obj.name,
    'Description': obj.description,
    'State': obj.state,
    'DisplayOrder': obj.displayOrder,
    'ResetOrderNumber': obj.resetOrderNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateContactAttributesRequest
 */
export interface ConnectUpdateContactAttributesRequest {
  /**
   * @schema ConnectUpdateContactAttributesRequest#InitialContactId
   */
  readonly initialContactId?: string;

  /**
   * @schema ConnectUpdateContactAttributesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateContactAttributesRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectUpdateContactAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateContactAttributesRequest(obj: ConnectUpdateContactAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InitialContactId': obj.initialContactId,
    'InstanceId': obj.instanceId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateContactAttributesResponse
 */
export interface ConnectUpdateContactAttributesResponse {
}

/**
 * Converts an object of type 'ConnectUpdateContactAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateContactAttributesResponse(obj: ConnectUpdateContactAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateContactFlowContentRequest
 */
export interface ConnectUpdateContactFlowContentRequest {
  /**
   * @schema ConnectUpdateContactFlowContentRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateContactFlowContentRequest#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectUpdateContactFlowContentRequest#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'ConnectUpdateContactFlowContentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateContactFlowContentRequest(obj: ConnectUpdateContactFlowContentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactFlowId': obj.contactFlowId,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateContactFlowNameRequest
 */
export interface ConnectUpdateContactFlowNameRequest {
  /**
   * @schema ConnectUpdateContactFlowNameRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateContactFlowNameRequest#ContactFlowId
   */
  readonly contactFlowId?: string;

  /**
   * @schema ConnectUpdateContactFlowNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateContactFlowNameRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ConnectUpdateContactFlowNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateContactFlowNameRequest(obj: ConnectUpdateContactFlowNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ContactFlowId': obj.contactFlowId,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateHoursOfOperationRequest
 */
export interface ConnectUpdateHoursOfOperationRequest {
  /**
   * @schema ConnectUpdateHoursOfOperationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateHoursOfOperationRequest#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

  /**
   * @schema ConnectUpdateHoursOfOperationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateHoursOfOperationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectUpdateHoursOfOperationRequest#TimeZone
   */
  readonly timeZone?: string;

  /**
   * @schema ConnectUpdateHoursOfOperationRequest#Config
   */
  readonly config?: ConnectHoursOfOperationConfig[];

}

/**
 * Converts an object of type 'ConnectUpdateHoursOfOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateHoursOfOperationRequest(obj: ConnectUpdateHoursOfOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'HoursOfOperationId': obj.hoursOfOperationId,
    'Name': obj.name,
    'Description': obj.description,
    'TimeZone': obj.timeZone,
    'Config': obj.config?.map(y => toJson_ConnectHoursOfOperationConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateInstanceAttributeRequest
 */
export interface ConnectUpdateInstanceAttributeRequest {
  /**
   * @schema ConnectUpdateInstanceAttributeRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateInstanceAttributeRequest#AttributeType
   */
  readonly attributeType?: string;

  /**
   * @schema ConnectUpdateInstanceAttributeRequest#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ConnectUpdateInstanceAttributeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateInstanceAttributeRequest(obj: ConnectUpdateInstanceAttributeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AttributeType': obj.attributeType,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateInstanceStorageConfigRequest
 */
export interface ConnectUpdateInstanceStorageConfigRequest {
  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ConnectUpdateInstanceStorageConfigRequest#StorageConfig
   */
  readonly storageConfig?: ConnectInstanceStorageConfig;

}

/**
 * Converts an object of type 'ConnectUpdateInstanceStorageConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateInstanceStorageConfigRequest(obj: ConnectUpdateInstanceStorageConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AssociationId': obj.associationId,
    'ResourceType': obj.resourceType,
    'StorageConfig': toJson_ConnectInstanceStorageConfig(obj.storageConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQueueHoursOfOperationRequest
 */
export interface ConnectUpdateQueueHoursOfOperationRequest {
  /**
   * @schema ConnectUpdateQueueHoursOfOperationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQueueHoursOfOperationRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectUpdateQueueHoursOfOperationRequest#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateQueueHoursOfOperationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQueueHoursOfOperationRequest(obj: ConnectUpdateQueueHoursOfOperationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'HoursOfOperationId': obj.hoursOfOperationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQueueMaxContactsRequest
 */
export interface ConnectUpdateQueueMaxContactsRequest {
  /**
   * @schema ConnectUpdateQueueMaxContactsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQueueMaxContactsRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectUpdateQueueMaxContactsRequest#MaxContacts
   */
  readonly maxContacts?: number;

}

/**
 * Converts an object of type 'ConnectUpdateQueueMaxContactsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQueueMaxContactsRequest(obj: ConnectUpdateQueueMaxContactsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'MaxContacts': obj.maxContacts,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQueueNameRequest
 */
export interface ConnectUpdateQueueNameRequest {
  /**
   * @schema ConnectUpdateQueueNameRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQueueNameRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectUpdateQueueNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateQueueNameRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ConnectUpdateQueueNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQueueNameRequest(obj: ConnectUpdateQueueNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQueueOutboundCallerConfigRequest
 */
export interface ConnectUpdateQueueOutboundCallerConfigRequest {
  /**
   * @schema ConnectUpdateQueueOutboundCallerConfigRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQueueOutboundCallerConfigRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectUpdateQueueOutboundCallerConfigRequest#OutboundCallerConfig
   */
  readonly outboundCallerConfig?: ConnectOutboundCallerConfig;

}

/**
 * Converts an object of type 'ConnectUpdateQueueOutboundCallerConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQueueOutboundCallerConfigRequest(obj: ConnectUpdateQueueOutboundCallerConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'OutboundCallerConfig': toJson_ConnectOutboundCallerConfig(obj.outboundCallerConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQueueStatusRequest
 */
export interface ConnectUpdateQueueStatusRequest {
  /**
   * @schema ConnectUpdateQueueStatusRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQueueStatusRequest#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectUpdateQueueStatusRequest#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'ConnectUpdateQueueStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQueueStatusRequest(obj: ConnectUpdateQueueStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QueueId': obj.queueId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQuickConnectConfigRequest
 */
export interface ConnectUpdateQuickConnectConfigRequest {
  /**
   * @schema ConnectUpdateQuickConnectConfigRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQuickConnectConfigRequest#QuickConnectId
   */
  readonly quickConnectId?: string;

  /**
   * @schema ConnectUpdateQuickConnectConfigRequest#QuickConnectConfig
   */
  readonly quickConnectConfig?: ConnectQuickConnectConfig;

}

/**
 * Converts an object of type 'ConnectUpdateQuickConnectConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQuickConnectConfigRequest(obj: ConnectUpdateQuickConnectConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QuickConnectId': obj.quickConnectId,
    'QuickConnectConfig': toJson_ConnectQuickConnectConfig(obj.quickConnectConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateQuickConnectNameRequest
 */
export interface ConnectUpdateQuickConnectNameRequest {
  /**
   * @schema ConnectUpdateQuickConnectNameRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateQuickConnectNameRequest#QuickConnectId
   */
  readonly quickConnectId?: string;

  /**
   * @schema ConnectUpdateQuickConnectNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateQuickConnectNameRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ConnectUpdateQuickConnectNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateQuickConnectNameRequest(obj: ConnectUpdateQuickConnectNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'QuickConnectId': obj.quickConnectId,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateRoutingProfileConcurrencyRequest
 */
export interface ConnectUpdateRoutingProfileConcurrencyRequest {
  /**
   * @schema ConnectUpdateRoutingProfileConcurrencyRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileConcurrencyRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileConcurrencyRequest#MediaConcurrencies
   */
  readonly mediaConcurrencies?: ConnectMediaConcurrency[];

}

/**
 * Converts an object of type 'ConnectUpdateRoutingProfileConcurrencyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateRoutingProfileConcurrencyRequest(obj: ConnectUpdateRoutingProfileConcurrencyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'MediaConcurrencies': obj.mediaConcurrencies?.map(y => toJson_ConnectMediaConcurrency(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest
 */
export interface ConnectUpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileDefaultOutboundQueueRequest#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateRoutingProfileDefaultOutboundQueueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateRoutingProfileDefaultOutboundQueueRequest(obj: ConnectUpdateRoutingProfileDefaultOutboundQueueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'DefaultOutboundQueueId': obj.defaultOutboundQueueId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateRoutingProfileNameRequest
 */
export interface ConnectUpdateRoutingProfileNameRequest {
  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateRoutingProfileNameRequest#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ConnectUpdateRoutingProfileNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateRoutingProfileNameRequest(obj: ConnectUpdateRoutingProfileNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateRoutingProfileQueuesRequest
 */
export interface ConnectUpdateRoutingProfileQueuesRequest {
  /**
   * @schema ConnectUpdateRoutingProfileQueuesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileQueuesRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUpdateRoutingProfileQueuesRequest#QueueConfigs
   */
  readonly queueConfigs?: ConnectRoutingProfileQueueConfig[];

}

/**
 * Converts an object of type 'ConnectUpdateRoutingProfileQueuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateRoutingProfileQueuesRequest(obj: ConnectUpdateRoutingProfileQueuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'RoutingProfileId': obj.routingProfileId,
    'QueueConfigs': obj.queueConfigs?.map(y => toJson_ConnectRoutingProfileQueueConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserHierarchyRequest
 */
export interface ConnectUpdateUserHierarchyRequest {
  /**
   * @schema ConnectUpdateUserHierarchyRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectUpdateUserHierarchyRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectUpdateUserHierarchyRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserHierarchyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserHierarchyRequest(obj: ConnectUpdateUserHierarchyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyGroupId': obj.hierarchyGroupId,
    'UserId': obj.userId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserHierarchyGroupNameRequest
 */
export interface ConnectUpdateUserHierarchyGroupNameRequest {
  /**
   * @schema ConnectUpdateUserHierarchyGroupNameRequest#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectUpdateUserHierarchyGroupNameRequest#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectUpdateUserHierarchyGroupNameRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserHierarchyGroupNameRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserHierarchyGroupNameRequest(obj: ConnectUpdateUserHierarchyGroupNameRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'HierarchyGroupId': obj.hierarchyGroupId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserHierarchyStructureRequest
 */
export interface ConnectUpdateUserHierarchyStructureRequest {
  /**
   * @schema ConnectUpdateUserHierarchyStructureRequest#HierarchyStructure
   */
  readonly hierarchyStructure?: ConnectHierarchyStructureUpdate;

  /**
   * @schema ConnectUpdateUserHierarchyStructureRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserHierarchyStructureRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserHierarchyStructureRequest(obj: ConnectUpdateUserHierarchyStructureRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HierarchyStructure': toJson_ConnectHierarchyStructureUpdate(obj.hierarchyStructure),
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserIdentityInfoRequest
 */
export interface ConnectUpdateUserIdentityInfoRequest {
  /**
   * @schema ConnectUpdateUserIdentityInfoRequest#IdentityInfo
   */
  readonly identityInfo?: ConnectUserIdentityInfo;

  /**
   * @schema ConnectUpdateUserIdentityInfoRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectUpdateUserIdentityInfoRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserIdentityInfoRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserIdentityInfoRequest(obj: ConnectUpdateUserIdentityInfoRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityInfo': toJson_ConnectUserIdentityInfo(obj.identityInfo),
    'UserId': obj.userId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserPhoneConfigRequest
 */
export interface ConnectUpdateUserPhoneConfigRequest {
  /**
   * @schema ConnectUpdateUserPhoneConfigRequest#PhoneConfig
   */
  readonly phoneConfig?: ConnectUserPhoneConfig;

  /**
   * @schema ConnectUpdateUserPhoneConfigRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectUpdateUserPhoneConfigRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserPhoneConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserPhoneConfigRequest(obj: ConnectUpdateUserPhoneConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneConfig': toJson_ConnectUserPhoneConfig(obj.phoneConfig),
    'UserId': obj.userId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserRoutingProfileRequest
 */
export interface ConnectUpdateUserRoutingProfileRequest {
  /**
   * @schema ConnectUpdateUserRoutingProfileRequest#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUpdateUserRoutingProfileRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectUpdateUserRoutingProfileRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserRoutingProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserRoutingProfileRequest(obj: ConnectUpdateUserRoutingProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RoutingProfileId': obj.routingProfileId,
    'UserId': obj.userId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUpdateUserSecurityProfilesRequest
 */
export interface ConnectUpdateUserSecurityProfilesRequest {
  /**
   * @schema ConnectUpdateUserSecurityProfilesRequest#SecurityProfileIds
   */
  readonly securityProfileIds?: string[];

  /**
   * @schema ConnectUpdateUserSecurityProfilesRequest#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectUpdateUserSecurityProfilesRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'ConnectUpdateUserSecurityProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUpdateUserSecurityProfilesRequest(obj: ConnectUpdateUserSecurityProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityProfileIds': obj.securityProfileIds?.map(y => y),
    'UserId': obj.userId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectLexBot
 */
export interface ConnectLexBot {
  /**
   * @schema ConnectLexBot#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectLexBot#LexRegion
   */
  readonly lexRegion?: string;

}

/**
 * Converts an object of type 'ConnectLexBot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectLexBot(obj: ConnectLexBot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'LexRegion': obj.lexRegion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectLexV2Bot
 */
export interface ConnectLexV2Bot {
  /**
   * @schema ConnectLexV2Bot#AliasArn
   */
  readonly aliasArn?: string;

}

/**
 * Converts an object of type 'ConnectLexV2Bot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectLexV2Bot(obj: ConnectLexV2Bot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasArn': obj.aliasArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectInstanceStorageConfig
 */
export interface ConnectInstanceStorageConfig {
  /**
   * @schema ConnectInstanceStorageConfig#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectInstanceStorageConfig#StorageType
   */
  readonly storageType?: string;

  /**
   * @schema ConnectInstanceStorageConfig#S3Config
   */
  readonly s3Config?: ConnectS3Config;

  /**
   * @schema ConnectInstanceStorageConfig#KinesisVideoStreamConfig
   */
  readonly kinesisVideoStreamConfig?: ConnectKinesisVideoStreamConfig;

  /**
   * @schema ConnectInstanceStorageConfig#KinesisStreamConfig
   */
  readonly kinesisStreamConfig?: ConnectKinesisStreamConfig;

  /**
   * @schema ConnectInstanceStorageConfig#KinesisFirehoseConfig
   */
  readonly kinesisFirehoseConfig?: ConnectKinesisFirehoseConfig;

}

/**
 * Converts an object of type 'ConnectInstanceStorageConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectInstanceStorageConfig(obj: ConnectInstanceStorageConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'StorageType': obj.storageType,
    'S3Config': toJson_ConnectS3Config(obj.s3Config),
    'KinesisVideoStreamConfig': toJson_ConnectKinesisVideoStreamConfig(obj.kinesisVideoStreamConfig),
    'KinesisStreamConfig': toJson_ConnectKinesisStreamConfig(obj.kinesisStreamConfig),
    'KinesisFirehoseConfig': toJson_ConnectKinesisFirehoseConfig(obj.kinesisFirehoseConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectRoutingProfileQueueConfig
 */
export interface ConnectRoutingProfileQueueConfig {
  /**
   * @schema ConnectRoutingProfileQueueConfig#QueueReference
   */
  readonly queueReference?: ConnectRoutingProfileQueueReference;

  /**
   * @schema ConnectRoutingProfileQueueConfig#Priority
   */
  readonly priority?: number;

  /**
   * @schema ConnectRoutingProfileQueueConfig#Delay
   */
  readonly delay?: number;

}

/**
 * Converts an object of type 'ConnectRoutingProfileQueueConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectRoutingProfileQueueConfig(obj: ConnectRoutingProfileQueueConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueReference': toJson_ConnectRoutingProfileQueueReference(obj.queueReference),
    'Priority': obj.priority,
    'Delay': obj.delay,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHoursOfOperationConfig
 */
export interface ConnectHoursOfOperationConfig {
  /**
   * @schema ConnectHoursOfOperationConfig#Day
   */
  readonly day?: string;

  /**
   * @schema ConnectHoursOfOperationConfig#StartTime
   */
  readonly startTime?: ConnectHoursOfOperationTimeSlice;

  /**
   * @schema ConnectHoursOfOperationConfig#EndTime
   */
  readonly endTime?: ConnectHoursOfOperationTimeSlice;

}

/**
 * Converts an object of type 'ConnectHoursOfOperationConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHoursOfOperationConfig(obj: ConnectHoursOfOperationConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Day': obj.day,
    'StartTime': toJson_ConnectHoursOfOperationTimeSlice(obj.startTime),
    'EndTime': toJson_ConnectHoursOfOperationTimeSlice(obj.endTime),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectOutboundCallerConfig
 */
export interface ConnectOutboundCallerConfig {
  /**
   * @schema ConnectOutboundCallerConfig#OutboundCallerIdName
   */
  readonly outboundCallerIdName?: string;

  /**
   * @schema ConnectOutboundCallerConfig#OutboundCallerIdNumberId
   */
  readonly outboundCallerIdNumberId?: string;

  /**
   * @schema ConnectOutboundCallerConfig#OutboundFlowId
   */
  readonly outboundFlowId?: string;

}

/**
 * Converts an object of type 'ConnectOutboundCallerConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectOutboundCallerConfig(obj: ConnectOutboundCallerConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutboundCallerIdName': obj.outboundCallerIdName,
    'OutboundCallerIdNumberId': obj.outboundCallerIdNumberId,
    'OutboundFlowId': obj.outboundFlowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQuickConnectConfig
 */
export interface ConnectQuickConnectConfig {
  /**
   * @schema ConnectQuickConnectConfig#QuickConnectType
   */
  readonly quickConnectType?: string;

  /**
   * @schema ConnectQuickConnectConfig#UserConfig
   */
  readonly userConfig?: ConnectUserQuickConnectConfig;

  /**
   * @schema ConnectQuickConnectConfig#QueueConfig
   */
  readonly queueConfig?: ConnectQueueQuickConnectConfig;

  /**
   * @schema ConnectQuickConnectConfig#PhoneConfig
   */
  readonly phoneConfig?: ConnectPhoneNumberQuickConnectConfig;

}

/**
 * Converts an object of type 'ConnectQuickConnectConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQuickConnectConfig(obj: ConnectQuickConnectConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuickConnectType': obj.quickConnectType,
    'UserConfig': toJson_ConnectUserQuickConnectConfig(obj.userConfig),
    'QueueConfig': toJson_ConnectQueueQuickConnectConfig(obj.queueConfig),
    'PhoneConfig': toJson_ConnectPhoneNumberQuickConnectConfig(obj.phoneConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectMediaConcurrency
 */
export interface ConnectMediaConcurrency {
  /**
   * @schema ConnectMediaConcurrency#Channel
   */
  readonly channel?: string;

  /**
   * @schema ConnectMediaConcurrency#Concurrency
   */
  readonly concurrency?: number;

}

/**
 * Converts an object of type 'ConnectMediaConcurrency' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectMediaConcurrency(obj: ConnectMediaConcurrency | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Channel': obj.channel,
    'Concurrency': obj.concurrency,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUserIdentityInfo
 */
export interface ConnectUserIdentityInfo {
  /**
   * @schema ConnectUserIdentityInfo#FirstName
   */
  readonly firstName?: string;

  /**
   * @schema ConnectUserIdentityInfo#LastName
   */
  readonly lastName?: string;

  /**
   * @schema ConnectUserIdentityInfo#Email
   */
  readonly email?: string;

}

/**
 * Converts an object of type 'ConnectUserIdentityInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUserIdentityInfo(obj: ConnectUserIdentityInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirstName': obj.firstName,
    'LastName': obj.lastName,
    'Email': obj.email,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUserPhoneConfig
 */
export interface ConnectUserPhoneConfig {
  /**
   * @schema ConnectUserPhoneConfig#PhoneType
   */
  readonly phoneType?: string;

  /**
   * @schema ConnectUserPhoneConfig#AutoAccept
   */
  readonly autoAccept?: boolean;

  /**
   * @schema ConnectUserPhoneConfig#AfterContactWorkTimeLimit
   */
  readonly afterContactWorkTimeLimit?: number;

  /**
   * @schema ConnectUserPhoneConfig#DeskPhoneNumber
   */
  readonly deskPhoneNumber?: string;

}

/**
 * Converts an object of type 'ConnectUserPhoneConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUserPhoneConfig(obj: ConnectUserPhoneConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneType': obj.phoneType,
    'AutoAccept': obj.autoAccept,
    'AfterContactWorkTimeLimit': obj.afterContactWorkTimeLimit,
    'DeskPhoneNumber': obj.deskPhoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAgentStatus
 */
export interface ConnectAgentStatus {
  /**
   * @schema ConnectAgentStatus#AgentStatusARN
   */
  readonly agentStatusArn?: string;

  /**
   * @schema ConnectAgentStatus#AgentStatusId
   */
  readonly agentStatusId?: string;

  /**
   * @schema ConnectAgentStatus#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectAgentStatus#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectAgentStatus#Type
   */
  readonly type?: string;

  /**
   * @schema ConnectAgentStatus#DisplayOrder
   */
  readonly displayOrder?: number;

  /**
   * @schema ConnectAgentStatus#State
   */
  readonly state?: string;

  /**
   * @schema ConnectAgentStatus#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectAgentStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAgentStatus(obj: ConnectAgentStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentStatusARN': obj.agentStatusArn,
    'AgentStatusId': obj.agentStatusId,
    'Name': obj.name,
    'Description': obj.description,
    'Type': obj.type,
    'DisplayOrder': obj.displayOrder,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactFlow
 */
export interface ConnectContactFlow {
  /**
   * @schema ConnectContactFlow#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectContactFlow#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectContactFlow#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectContactFlow#Type
   */
  readonly type?: string;

  /**
   * @schema ConnectContactFlow#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectContactFlow#Content
   */
  readonly content?: string;

  /**
   * @schema ConnectContactFlow#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectContactFlow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactFlow(obj: ConnectContactFlow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Id': obj.id,
    'Name': obj.name,
    'Type': obj.type,
    'Description': obj.description,
    'Content': obj.content,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHoursOfOperation
 */
export interface ConnectHoursOfOperation {
  /**
   * @schema ConnectHoursOfOperation#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

  /**
   * @schema ConnectHoursOfOperation#HoursOfOperationArn
   */
  readonly hoursOfOperationArn?: string;

  /**
   * @schema ConnectHoursOfOperation#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectHoursOfOperation#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectHoursOfOperation#TimeZone
   */
  readonly timeZone?: string;

  /**
   * @schema ConnectHoursOfOperation#Config
   */
  readonly config?: ConnectHoursOfOperationConfig[];

  /**
   * @schema ConnectHoursOfOperation#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectHoursOfOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHoursOfOperation(obj: ConnectHoursOfOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HoursOfOperationId': obj.hoursOfOperationId,
    'HoursOfOperationArn': obj.hoursOfOperationArn,
    'Name': obj.name,
    'Description': obj.description,
    'TimeZone': obj.timeZone,
    'Config': obj.config?.map(y => toJson_ConnectHoursOfOperationConfig(y)),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectInstance
 */
export interface ConnectInstance {
  /**
   * @schema ConnectInstance#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectInstance#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectInstance#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema ConnectInstance#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema ConnectInstance#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ConnectInstance#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ConnectInstance#InstanceStatus
   */
  readonly instanceStatus?: string;

  /**
   * @schema ConnectInstance#StatusReason
   */
  readonly statusReason?: ConnectInstanceStatusReason;

  /**
   * @schema ConnectInstance#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema ConnectInstance#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * Converts an object of type 'ConnectInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectInstance(obj: ConnectInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'IdentityManagementType': obj.identityManagementType,
    'InstanceAlias': obj.instanceAlias,
    'CreatedTime': obj.createdTime,
    'ServiceRole': obj.serviceRole,
    'InstanceStatus': obj.instanceStatus,
    'StatusReason': toJson_ConnectInstanceStatusReason(obj.statusReason),
    'InboundCallsEnabled': obj.inboundCallsEnabled,
    'OutboundCallsEnabled': obj.outboundCallsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAttribute
 */
export interface ConnectAttribute {
  /**
   * @schema ConnectAttribute#AttributeType
   */
  readonly attributeType?: string;

  /**
   * @schema ConnectAttribute#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ConnectAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAttribute(obj: ConnectAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeType': obj.attributeType,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQueue
 */
export interface ConnectQueue {
  /**
   * @schema ConnectQueue#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectQueue#QueueArn
   */
  readonly queueArn?: string;

  /**
   * @schema ConnectQueue#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectQueue#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectQueue#OutboundCallerConfig
   */
  readonly outboundCallerConfig?: ConnectOutboundCallerConfig;

  /**
   * @schema ConnectQueue#HoursOfOperationId
   */
  readonly hoursOfOperationId?: string;

  /**
   * @schema ConnectQueue#MaxContacts
   */
  readonly maxContacts?: number;

  /**
   * @schema ConnectQueue#Status
   */
  readonly status?: string;

  /**
   * @schema ConnectQueue#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectQueue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQueue(obj: ConnectQueue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'QueueArn': obj.queueArn,
    'QueueId': obj.queueId,
    'Description': obj.description,
    'OutboundCallerConfig': toJson_ConnectOutboundCallerConfig(obj.outboundCallerConfig),
    'HoursOfOperationId': obj.hoursOfOperationId,
    'MaxContacts': obj.maxContacts,
    'Status': obj.status,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQuickConnect
 */
export interface ConnectQuickConnect {
  /**
   * @schema ConnectQuickConnect#QuickConnectARN
   */
  readonly quickConnectArn?: string;

  /**
   * @schema ConnectQuickConnect#QuickConnectId
   */
  readonly quickConnectId?: string;

  /**
   * @schema ConnectQuickConnect#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectQuickConnect#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectQuickConnect#QuickConnectConfig
   */
  readonly quickConnectConfig?: ConnectQuickConnectConfig;

  /**
   * @schema ConnectQuickConnect#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectQuickConnect' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQuickConnect(obj: ConnectQuickConnect | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QuickConnectARN': obj.quickConnectArn,
    'QuickConnectId': obj.quickConnectId,
    'Name': obj.name,
    'Description': obj.description,
    'QuickConnectConfig': toJson_ConnectQuickConnectConfig(obj.quickConnectConfig),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectRoutingProfile
 */
export interface ConnectRoutingProfile {
  /**
   * @schema ConnectRoutingProfile#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectRoutingProfile#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectRoutingProfile#RoutingProfileArn
   */
  readonly routingProfileArn?: string;

  /**
   * @schema ConnectRoutingProfile#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectRoutingProfile#Description
   */
  readonly description?: string;

  /**
   * @schema ConnectRoutingProfile#MediaConcurrencies
   */
  readonly mediaConcurrencies?: ConnectMediaConcurrency[];

  /**
   * @schema ConnectRoutingProfile#DefaultOutboundQueueId
   */
  readonly defaultOutboundQueueId?: string;

  /**
   * @schema ConnectRoutingProfile#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectRoutingProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectRoutingProfile(obj: ConnectRoutingProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'RoutingProfileArn': obj.routingProfileArn,
    'RoutingProfileId': obj.routingProfileId,
    'Description': obj.description,
    'MediaConcurrencies': obj.mediaConcurrencies?.map(y => toJson_ConnectMediaConcurrency(y)),
    'DefaultOutboundQueueId': obj.defaultOutboundQueueId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUser
 */
export interface ConnectUser {
  /**
   * @schema ConnectUser#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectUser#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectUser#Username
   */
  readonly username?: string;

  /**
   * @schema ConnectUser#IdentityInfo
   */
  readonly identityInfo?: ConnectUserIdentityInfo;

  /**
   * @schema ConnectUser#PhoneConfig
   */
  readonly phoneConfig?: ConnectUserPhoneConfig;

  /**
   * @schema ConnectUser#DirectoryUserId
   */
  readonly directoryUserId?: string;

  /**
   * @schema ConnectUser#SecurityProfileIds
   */
  readonly securityProfileIds?: string[];

  /**
   * @schema ConnectUser#RoutingProfileId
   */
  readonly routingProfileId?: string;

  /**
   * @schema ConnectUser#HierarchyGroupId
   */
  readonly hierarchyGroupId?: string;

  /**
   * @schema ConnectUser#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ConnectUser' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUser(obj: ConnectUser | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Username': obj.username,
    'IdentityInfo': toJson_ConnectUserIdentityInfo(obj.identityInfo),
    'PhoneConfig': toJson_ConnectUserPhoneConfig(obj.phoneConfig),
    'DirectoryUserId': obj.directoryUserId,
    'SecurityProfileIds': obj.securityProfileIds?.map(y => y),
    'RoutingProfileId': obj.routingProfileId,
    'HierarchyGroupId': obj.hierarchyGroupId,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyGroup
 */
export interface ConnectHierarchyGroup {
  /**
   * @schema ConnectHierarchyGroup#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHierarchyGroup#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHierarchyGroup#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectHierarchyGroup#LevelId
   */
  readonly levelId?: string;

  /**
   * @schema ConnectHierarchyGroup#HierarchyPath
   */
  readonly hierarchyPath?: ConnectHierarchyPath;

}

/**
 * Converts an object of type 'ConnectHierarchyGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyGroup(obj: ConnectHierarchyGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'LevelId': obj.levelId,
    'HierarchyPath': toJson_ConnectHierarchyPath(obj.hierarchyPath),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyStructure
 */
export interface ConnectHierarchyStructure {
  /**
   * @schema ConnectHierarchyStructure#LevelOne
   */
  readonly levelOne?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelTwo
   */
  readonly levelTwo?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelThree
   */
  readonly levelThree?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelFour
   */
  readonly levelFour?: ConnectHierarchyLevel;

  /**
   * @schema ConnectHierarchyStructure#LevelFive
   */
  readonly levelFive?: ConnectHierarchyLevel;

}

/**
 * Converts an object of type 'ConnectHierarchyStructure' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyStructure(obj: ConnectHierarchyStructure | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LevelOne': toJson_ConnectHierarchyLevel(obj.levelOne),
    'LevelTwo': toJson_ConnectHierarchyLevel(obj.levelTwo),
    'LevelThree': toJson_ConnectHierarchyLevel(obj.levelThree),
    'LevelFour': toJson_ConnectHierarchyLevel(obj.levelFour),
    'LevelFive': toJson_ConnectHierarchyLevel(obj.levelFive),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectRoutingProfileQueueReference
 */
export interface ConnectRoutingProfileQueueReference {
  /**
   * @schema ConnectRoutingProfileQueueReference#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectRoutingProfileQueueReference#Channel
   */
  readonly channel?: string;

}

/**
 * Converts an object of type 'ConnectRoutingProfileQueueReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectRoutingProfileQueueReference(obj: ConnectRoutingProfileQueueReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueId': obj.queueId,
    'Channel': obj.channel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectFilters
 */
export interface ConnectFilters {
  /**
   * @schema ConnectFilters#Queues
   */
  readonly queues?: string[];

  /**
   * @schema ConnectFilters#Channels
   */
  readonly channels?: string[];

}

/**
 * Converts an object of type 'ConnectFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectFilters(obj: ConnectFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Queues': obj.queues?.map(y => y),
    'Channels': obj.channels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCurrentMetric
 */
export interface ConnectCurrentMetric {
  /**
   * @schema ConnectCurrentMetric#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectCurrentMetric#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'ConnectCurrentMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCurrentMetric(obj: ConnectCurrentMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCurrentMetricResult
 */
export interface ConnectCurrentMetricResult {
  /**
   * @schema ConnectCurrentMetricResult#Dimensions
   */
  readonly dimensions?: ConnectDimensions;

  /**
   * @schema ConnectCurrentMetricResult#Collections
   */
  readonly collections?: ConnectCurrentMetricData[];

}

/**
 * Converts an object of type 'ConnectCurrentMetricResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCurrentMetricResult(obj: ConnectCurrentMetricResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': toJson_ConnectDimensions(obj.dimensions),
    'Collections': obj.collections?.map(y => toJson_ConnectCurrentMetricData(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCredentials
 */
export interface ConnectCredentials {
  /**
   * @schema ConnectCredentials#AccessToken
   */
  readonly accessToken?: string;

  /**
   * @schema ConnectCredentials#AccessTokenExpiration
   */
  readonly accessTokenExpiration?: string;

  /**
   * @schema ConnectCredentials#RefreshToken
   */
  readonly refreshToken?: string;

  /**
   * @schema ConnectCredentials#RefreshTokenExpiration
   */
  readonly refreshTokenExpiration?: string;

}

/**
 * Converts an object of type 'ConnectCredentials' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCredentials(obj: ConnectCredentials | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccessToken': obj.accessToken,
    'AccessTokenExpiration': obj.accessTokenExpiration,
    'RefreshToken': obj.refreshToken,
    'RefreshTokenExpiration': obj.refreshTokenExpiration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHistoricalMetric
 */
export interface ConnectHistoricalMetric {
  /**
   * @schema ConnectHistoricalMetric#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectHistoricalMetric#Threshold
   */
  readonly threshold?: ConnectThreshold;

  /**
   * @schema ConnectHistoricalMetric#Statistic
   */
  readonly statistic?: string;

  /**
   * @schema ConnectHistoricalMetric#Unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'ConnectHistoricalMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHistoricalMetric(obj: ConnectHistoricalMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Threshold': toJson_ConnectThreshold(obj.threshold),
    'Statistic': obj.statistic,
    'Unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHistoricalMetricResult
 */
export interface ConnectHistoricalMetricResult {
  /**
   * @schema ConnectHistoricalMetricResult#Dimensions
   */
  readonly dimensions?: ConnectDimensions;

  /**
   * @schema ConnectHistoricalMetricResult#Collections
   */
  readonly collections?: ConnectHistoricalMetricData[];

}

/**
 * Converts an object of type 'ConnectHistoricalMetricResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHistoricalMetricResult(obj: ConnectHistoricalMetricResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Dimensions': toJson_ConnectDimensions(obj.dimensions),
    'Collections': obj.collections?.map(y => toJson_ConnectHistoricalMetricData(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectAgentStatusSummary
 */
export interface ConnectAgentStatusSummary {
  /**
   * @schema ConnectAgentStatusSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectAgentStatusSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectAgentStatusSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectAgentStatusSummary#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'ConnectAgentStatusSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectAgentStatusSummary(obj: ConnectAgentStatusSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectLexBotConfig
 */
export interface ConnectLexBotConfig {
  /**
   * @schema ConnectLexBotConfig#LexBot
   */
  readonly lexBot?: ConnectLexBot;

  /**
   * @schema ConnectLexBotConfig#LexV2Bot
   */
  readonly lexV2Bot?: ConnectLexV2Bot;

}

/**
 * Converts an object of type 'ConnectLexBotConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectLexBotConfig(obj: ConnectLexBotConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LexBot': toJson_ConnectLexBot(obj.lexBot),
    'LexV2Bot': toJson_ConnectLexV2Bot(obj.lexV2Bot),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectContactFlowSummary
 */
export interface ConnectContactFlowSummary {
  /**
   * @schema ConnectContactFlowSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectContactFlowSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectContactFlowSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectContactFlowSummary#ContactFlowType
   */
  readonly contactFlowType?: string;

}

/**
 * Converts an object of type 'ConnectContactFlowSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectContactFlowSummary(obj: ConnectContactFlowSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'ContactFlowType': obj.contactFlowType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHoursOfOperationSummary
 */
export interface ConnectHoursOfOperationSummary {
  /**
   * @schema ConnectHoursOfOperationSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHoursOfOperationSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHoursOfOperationSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectHoursOfOperationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHoursOfOperationSummary(obj: ConnectHoursOfOperationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectInstanceSummary
 */
export interface ConnectInstanceSummary {
  /**
   * @schema ConnectInstanceSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectInstanceSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectInstanceSummary#IdentityManagementType
   */
  readonly identityManagementType?: string;

  /**
   * @schema ConnectInstanceSummary#InstanceAlias
   */
  readonly instanceAlias?: string;

  /**
   * @schema ConnectInstanceSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema ConnectInstanceSummary#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema ConnectInstanceSummary#InstanceStatus
   */
  readonly instanceStatus?: string;

  /**
   * @schema ConnectInstanceSummary#InboundCallsEnabled
   */
  readonly inboundCallsEnabled?: boolean;

  /**
   * @schema ConnectInstanceSummary#OutboundCallsEnabled
   */
  readonly outboundCallsEnabled?: boolean;

}

/**
 * Converts an object of type 'ConnectInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectInstanceSummary(obj: ConnectInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'IdentityManagementType': obj.identityManagementType,
    'InstanceAlias': obj.instanceAlias,
    'CreatedTime': obj.createdTime,
    'ServiceRole': obj.serviceRole,
    'InstanceStatus': obj.instanceStatus,
    'InboundCallsEnabled': obj.inboundCallsEnabled,
    'OutboundCallsEnabled': obj.outboundCallsEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectIntegrationAssociationSummary
 */
export interface ConnectIntegrationAssociationSummary {
  /**
   * @schema ConnectIntegrationAssociationSummary#IntegrationAssociationId
   */
  readonly integrationAssociationId?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#IntegrationAssociationArn
   */
  readonly integrationAssociationArn?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#IntegrationType
   */
  readonly integrationType?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#IntegrationArn
   */
  readonly integrationArn?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#SourceApplicationUrl
   */
  readonly sourceApplicationUrl?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#SourceApplicationName
   */
  readonly sourceApplicationName?: string;

  /**
   * @schema ConnectIntegrationAssociationSummary#SourceType
   */
  readonly sourceType?: string;

}

/**
 * Converts an object of type 'ConnectIntegrationAssociationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectIntegrationAssociationSummary(obj: ConnectIntegrationAssociationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IntegrationAssociationId': obj.integrationAssociationId,
    'IntegrationAssociationArn': obj.integrationAssociationArn,
    'InstanceId': obj.instanceId,
    'IntegrationType': obj.integrationType,
    'IntegrationArn': obj.integrationArn,
    'SourceApplicationUrl': obj.sourceApplicationUrl,
    'SourceApplicationName': obj.sourceApplicationName,
    'SourceType': obj.sourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectPhoneNumberSummary
 */
export interface ConnectPhoneNumberSummary {
  /**
   * @schema ConnectPhoneNumberSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectPhoneNumberSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectPhoneNumberSummary#PhoneNumber
   */
  readonly phoneNumber?: string;

  /**
   * @schema ConnectPhoneNumberSummary#PhoneNumberType
   */
  readonly phoneNumberType?: string;

  /**
   * @schema ConnectPhoneNumberSummary#PhoneNumberCountryCode
   */
  readonly phoneNumberCountryCode?: string;

}

/**
 * Converts an object of type 'ConnectPhoneNumberSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectPhoneNumberSummary(obj: ConnectPhoneNumberSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'PhoneNumber': obj.phoneNumber,
    'PhoneNumberType': obj.phoneNumberType,
    'PhoneNumberCountryCode': obj.phoneNumberCountryCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectPromptSummary
 */
export interface ConnectPromptSummary {
  /**
   * @schema ConnectPromptSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectPromptSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectPromptSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectPromptSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectPromptSummary(obj: ConnectPromptSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQuickConnectSummary
 */
export interface ConnectQuickConnectSummary {
  /**
   * @schema ConnectQuickConnectSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectQuickConnectSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectQuickConnectSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectQuickConnectSummary#QuickConnectType
   */
  readonly quickConnectType?: string;

}

/**
 * Converts an object of type 'ConnectQuickConnectSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQuickConnectSummary(obj: ConnectQuickConnectSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'QuickConnectType': obj.quickConnectType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQueueSummary
 */
export interface ConnectQueueSummary {
  /**
   * @schema ConnectQueueSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectQueueSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectQueueSummary#Name
   */
  readonly name?: string;

  /**
   * @schema ConnectQueueSummary#QueueType
   */
  readonly queueType?: string;

}

/**
 * Converts an object of type 'ConnectQueueSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQueueSummary(obj: ConnectQueueSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
    'QueueType': obj.queueType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectRoutingProfileQueueConfigSummary
 */
export interface ConnectRoutingProfileQueueConfigSummary {
  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#QueueArn
   */
  readonly queueArn?: string;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#QueueName
   */
  readonly queueName?: string;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#Priority
   */
  readonly priority?: number;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#Delay
   */
  readonly delay?: number;

  /**
   * @schema ConnectRoutingProfileQueueConfigSummary#Channel
   */
  readonly channel?: string;

}

/**
 * Converts an object of type 'ConnectRoutingProfileQueueConfigSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectRoutingProfileQueueConfigSummary(obj: ConnectRoutingProfileQueueConfigSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueId': obj.queueId,
    'QueueArn': obj.queueArn,
    'QueueName': obj.queueName,
    'Priority': obj.priority,
    'Delay': obj.delay,
    'Channel': obj.channel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectRoutingProfileSummary
 */
export interface ConnectRoutingProfileSummary {
  /**
   * @schema ConnectRoutingProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectRoutingProfileSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectRoutingProfileSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectRoutingProfileSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectRoutingProfileSummary(obj: ConnectRoutingProfileSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectSecurityKey
 */
export interface ConnectSecurityKey {
  /**
   * @schema ConnectSecurityKey#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema ConnectSecurityKey#Key
   */
  readonly key?: string;

  /**
   * @schema ConnectSecurityKey#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'ConnectSecurityKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectSecurityKey(obj: ConnectSecurityKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationId': obj.associationId,
    'Key': obj.key,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectSecurityProfileSummary
 */
export interface ConnectSecurityProfileSummary {
  /**
   * @schema ConnectSecurityProfileSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectSecurityProfileSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectSecurityProfileSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectSecurityProfileSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectSecurityProfileSummary(obj: ConnectSecurityProfileSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUseCase
 */
export interface ConnectUseCase {
  /**
   * @schema ConnectUseCase#UseCaseId
   */
  readonly useCaseId?: string;

  /**
   * @schema ConnectUseCase#UseCaseArn
   */
  readonly useCaseArn?: string;

  /**
   * @schema ConnectUseCase#UseCaseType
   */
  readonly useCaseType?: string;

}

/**
 * Converts an object of type 'ConnectUseCase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUseCase(obj: ConnectUseCase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UseCaseId': obj.useCaseId,
    'UseCaseArn': obj.useCaseArn,
    'UseCaseType': obj.useCaseType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyGroupSummary
 */
export interface ConnectHierarchyGroupSummary {
  /**
   * @schema ConnectHierarchyGroupSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHierarchyGroupSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHierarchyGroupSummary#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectHierarchyGroupSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyGroupSummary(obj: ConnectHierarchyGroupSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUserSummary
 */
export interface ConnectUserSummary {
  /**
   * @schema ConnectUserSummary#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectUserSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectUserSummary#Username
   */
  readonly username?: string;

}

/**
 * Converts an object of type 'ConnectUserSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUserSummary(obj: ConnectUserSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Username': obj.username,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectParticipantDetails
 */
export interface ConnectParticipantDetails {
  /**
   * @schema ConnectParticipantDetails#DisplayName
   */
  readonly displayName?: string;

}

/**
 * Converts an object of type 'ConnectParticipantDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectParticipantDetails(obj: ConnectParticipantDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DisplayName': obj.displayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectChatMessage
 */
export interface ConnectChatMessage {
  /**
   * @schema ConnectChatMessage#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema ConnectChatMessage#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'ConnectChatMessage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectChatMessage(obj: ConnectChatMessage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentType': obj.contentType,
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectVoiceRecordingConfiguration
 */
export interface ConnectVoiceRecordingConfiguration {
  /**
   * @schema ConnectVoiceRecordingConfiguration#VoiceRecordingTrack
   */
  readonly voiceRecordingTrack?: string;

}

/**
 * Converts an object of type 'ConnectVoiceRecordingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectVoiceRecordingConfiguration(obj: ConnectVoiceRecordingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VoiceRecordingTrack': obj.voiceRecordingTrack,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectReference
 */
export interface ConnectReference {
  /**
   * @schema ConnectReference#Value
   */
  readonly value?: string;

  /**
   * @schema ConnectReference#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'ConnectReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectReference(obj: ConnectReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Value': obj.value,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyStructureUpdate
 */
export interface ConnectHierarchyStructureUpdate {
  /**
   * @schema ConnectHierarchyStructureUpdate#LevelOne
   */
  readonly levelOne?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelTwo
   */
  readonly levelTwo?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelThree
   */
  readonly levelThree?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelFour
   */
  readonly levelFour?: ConnectHierarchyLevelUpdate;

  /**
   * @schema ConnectHierarchyStructureUpdate#LevelFive
   */
  readonly levelFive?: ConnectHierarchyLevelUpdate;

}

/**
 * Converts an object of type 'ConnectHierarchyStructureUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyStructureUpdate(obj: ConnectHierarchyStructureUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LevelOne': toJson_ConnectHierarchyLevelUpdate(obj.levelOne),
    'LevelTwo': toJson_ConnectHierarchyLevelUpdate(obj.levelTwo),
    'LevelThree': toJson_ConnectHierarchyLevelUpdate(obj.levelThree),
    'LevelFour': toJson_ConnectHierarchyLevelUpdate(obj.levelFour),
    'LevelFive': toJson_ConnectHierarchyLevelUpdate(obj.levelFive),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectS3Config
 */
export interface ConnectS3Config {
  /**
   * @schema ConnectS3Config#BucketName
   */
  readonly bucketName?: string;

  /**
   * @schema ConnectS3Config#BucketPrefix
   */
  readonly bucketPrefix?: string;

  /**
   * @schema ConnectS3Config#EncryptionConfig
   */
  readonly encryptionConfig?: ConnectEncryptionConfig;

}

/**
 * Converts an object of type 'ConnectS3Config' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectS3Config(obj: ConnectS3Config | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BucketName': obj.bucketName,
    'BucketPrefix': obj.bucketPrefix,
    'EncryptionConfig': toJson_ConnectEncryptionConfig(obj.encryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectKinesisVideoStreamConfig
 */
export interface ConnectKinesisVideoStreamConfig {
  /**
   * @schema ConnectKinesisVideoStreamConfig#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ConnectKinesisVideoStreamConfig#RetentionPeriodHours
   */
  readonly retentionPeriodHours?: number;

  /**
   * @schema ConnectKinesisVideoStreamConfig#EncryptionConfig
   */
  readonly encryptionConfig?: ConnectEncryptionConfig;

}

/**
 * Converts an object of type 'ConnectKinesisVideoStreamConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectKinesisVideoStreamConfig(obj: ConnectKinesisVideoStreamConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Prefix': obj.prefix,
    'RetentionPeriodHours': obj.retentionPeriodHours,
    'EncryptionConfig': toJson_ConnectEncryptionConfig(obj.encryptionConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectKinesisStreamConfig
 */
export interface ConnectKinesisStreamConfig {
  /**
   * @schema ConnectKinesisStreamConfig#StreamArn
   */
  readonly streamArn?: string;

}

/**
 * Converts an object of type 'ConnectKinesisStreamConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectKinesisStreamConfig(obj: ConnectKinesisStreamConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StreamArn': obj.streamArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectKinesisFirehoseConfig
 */
export interface ConnectKinesisFirehoseConfig {
  /**
   * @schema ConnectKinesisFirehoseConfig#FirehoseArn
   */
  readonly firehoseArn?: string;

}

/**
 * Converts an object of type 'ConnectKinesisFirehoseConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectKinesisFirehoseConfig(obj: ConnectKinesisFirehoseConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirehoseArn': obj.firehoseArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHoursOfOperationTimeSlice
 */
export interface ConnectHoursOfOperationTimeSlice {
  /**
   * @schema ConnectHoursOfOperationTimeSlice#Hours
   */
  readonly hours?: number;

  /**
   * @schema ConnectHoursOfOperationTimeSlice#Minutes
   */
  readonly minutes?: number;

}

/**
 * Converts an object of type 'ConnectHoursOfOperationTimeSlice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHoursOfOperationTimeSlice(obj: ConnectHoursOfOperationTimeSlice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Hours': obj.hours,
    'Minutes': obj.minutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectUserQuickConnectConfig
 */
export interface ConnectUserQuickConnectConfig {
  /**
   * @schema ConnectUserQuickConnectConfig#UserId
   */
  readonly userId?: string;

  /**
   * @schema ConnectUserQuickConnectConfig#ContactFlowId
   */
  readonly contactFlowId?: string;

}

/**
 * Converts an object of type 'ConnectUserQuickConnectConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectUserQuickConnectConfig(obj: ConnectUserQuickConnectConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserId': obj.userId,
    'ContactFlowId': obj.contactFlowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQueueQuickConnectConfig
 */
export interface ConnectQueueQuickConnectConfig {
  /**
   * @schema ConnectQueueQuickConnectConfig#QueueId
   */
  readonly queueId?: string;

  /**
   * @schema ConnectQueueQuickConnectConfig#ContactFlowId
   */
  readonly contactFlowId?: string;

}

/**
 * Converts an object of type 'ConnectQueueQuickConnectConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQueueQuickConnectConfig(obj: ConnectQueueQuickConnectConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'QueueId': obj.queueId,
    'ContactFlowId': obj.contactFlowId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectPhoneNumberQuickConnectConfig
 */
export interface ConnectPhoneNumberQuickConnectConfig {
  /**
   * @schema ConnectPhoneNumberQuickConnectConfig#PhoneNumber
   */
  readonly phoneNumber?: string;

}

/**
 * Converts an object of type 'ConnectPhoneNumberQuickConnectConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectPhoneNumberQuickConnectConfig(obj: ConnectPhoneNumberQuickConnectConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PhoneNumber': obj.phoneNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectInstanceStatusReason
 */
export interface ConnectInstanceStatusReason {
  /**
   * @schema ConnectInstanceStatusReason#Message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'ConnectInstanceStatusReason' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectInstanceStatusReason(obj: ConnectInstanceStatusReason | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyPath
 */
export interface ConnectHierarchyPath {
  /**
   * @schema ConnectHierarchyPath#LevelOne
   */
  readonly levelOne?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelTwo
   */
  readonly levelTwo?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelThree
   */
  readonly levelThree?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelFour
   */
  readonly levelFour?: ConnectHierarchyGroupSummary;

  /**
   * @schema ConnectHierarchyPath#LevelFive
   */
  readonly levelFive?: ConnectHierarchyGroupSummary;

}

/**
 * Converts an object of type 'ConnectHierarchyPath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyPath(obj: ConnectHierarchyPath | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LevelOne': toJson_ConnectHierarchyGroupSummary(obj.levelOne),
    'LevelTwo': toJson_ConnectHierarchyGroupSummary(obj.levelTwo),
    'LevelThree': toJson_ConnectHierarchyGroupSummary(obj.levelThree),
    'LevelFour': toJson_ConnectHierarchyGroupSummary(obj.levelFour),
    'LevelFive': toJson_ConnectHierarchyGroupSummary(obj.levelFive),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyLevel
 */
export interface ConnectHierarchyLevel {
  /**
   * @schema ConnectHierarchyLevel#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectHierarchyLevel#Arn
   */
  readonly arn?: string;

  /**
   * @schema ConnectHierarchyLevel#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectHierarchyLevel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyLevel(obj: ConnectHierarchyLevel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectDimensions
 */
export interface ConnectDimensions {
  /**
   * @schema ConnectDimensions#Queue
   */
  readonly queue?: ConnectQueueReference;

  /**
   * @schema ConnectDimensions#Channel
   */
  readonly channel?: string;

}

/**
 * Converts an object of type 'ConnectDimensions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectDimensions(obj: ConnectDimensions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Queue': toJson_ConnectQueueReference(obj.queue),
    'Channel': obj.channel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectCurrentMetricData
 */
export interface ConnectCurrentMetricData {
  /**
   * @schema ConnectCurrentMetricData#Metric
   */
  readonly metric?: ConnectCurrentMetric;

  /**
   * @schema ConnectCurrentMetricData#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ConnectCurrentMetricData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectCurrentMetricData(obj: ConnectCurrentMetricData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metric': toJson_ConnectCurrentMetric(obj.metric),
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectThreshold
 */
export interface ConnectThreshold {
  /**
   * @schema ConnectThreshold#Comparison
   */
  readonly comparison?: string;

  /**
   * @schema ConnectThreshold#ThresholdValue
   */
  readonly thresholdValue?: number;

}

/**
 * Converts an object of type 'ConnectThreshold' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectThreshold(obj: ConnectThreshold | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Comparison': obj.comparison,
    'ThresholdValue': obj.thresholdValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHistoricalMetricData
 */
export interface ConnectHistoricalMetricData {
  /**
   * @schema ConnectHistoricalMetricData#Metric
   */
  readonly metric?: ConnectHistoricalMetric;

  /**
   * @schema ConnectHistoricalMetricData#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'ConnectHistoricalMetricData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHistoricalMetricData(obj: ConnectHistoricalMetricData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Metric': toJson_ConnectHistoricalMetric(obj.metric),
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectHierarchyLevelUpdate
 */
export interface ConnectHierarchyLevelUpdate {
  /**
   * @schema ConnectHierarchyLevelUpdate#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ConnectHierarchyLevelUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectHierarchyLevelUpdate(obj: ConnectHierarchyLevelUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectEncryptionConfig
 */
export interface ConnectEncryptionConfig {
  /**
   * @schema ConnectEncryptionConfig#EncryptionType
   */
  readonly encryptionType?: string;

  /**
   * @schema ConnectEncryptionConfig#KeyId
   */
  readonly keyId?: string;

}

/**
 * Converts an object of type 'ConnectEncryptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectEncryptionConfig(obj: ConnectEncryptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EncryptionType': obj.encryptionType,
    'KeyId': obj.keyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConnectQueueReference
 */
export interface ConnectQueueReference {
  /**
   * @schema ConnectQueueReference#Id
   */
  readonly id?: string;

  /**
   * @schema ConnectQueueReference#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ConnectQueueReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConnectQueueReference(obj: ConnectQueueReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
