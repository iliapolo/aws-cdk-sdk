/**
 * @schema DiscoveryAssociateConfigurationItemsToApplicationRequest
 */
export interface DiscoveryAssociateConfigurationItemsToApplicationRequest {
  /**
   * @schema DiscoveryAssociateConfigurationItemsToApplicationRequest#applicationConfigurationId
   */
  readonly applicationConfigurationId: string;

  /**
   * @schema DiscoveryAssociateConfigurationItemsToApplicationRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * Converts an object of type 'DiscoveryAssociateConfigurationItemsToApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryAssociateConfigurationItemsToApplicationRequest(obj: DiscoveryAssociateConfigurationItemsToApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationConfigurationId': obj.applicationConfigurationId,
    'configurationIds': obj.configurationIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryAssociateConfigurationItemsToApplicationResponse
 */
export interface DiscoveryAssociateConfigurationItemsToApplicationResponse {
}

/**
 * Converts an object of type 'DiscoveryAssociateConfigurationItemsToApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryAssociateConfigurationItemsToApplicationResponse(obj: DiscoveryAssociateConfigurationItemsToApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryBatchDeleteImportDataRequest
 */
export interface DiscoveryBatchDeleteImportDataRequest {
  /**
   * @schema DiscoveryBatchDeleteImportDataRequest#importTaskIds
   */
  readonly importTaskIds: string[];

}

/**
 * Converts an object of type 'DiscoveryBatchDeleteImportDataRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryBatchDeleteImportDataRequest(obj: DiscoveryBatchDeleteImportDataRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'importTaskIds': obj.importTaskIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryBatchDeleteImportDataResponse
 */
export interface DiscoveryBatchDeleteImportDataResponse {
  /**
   * @schema DiscoveryBatchDeleteImportDataResponse#errors
   */
  readonly errors?: DiscoveryBatchDeleteImportDataError[];

}

/**
 * Converts an object of type 'DiscoveryBatchDeleteImportDataResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryBatchDeleteImportDataResponse(obj: DiscoveryBatchDeleteImportDataResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_DiscoveryBatchDeleteImportDataError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryCreateApplicationRequest
 */
export interface DiscoveryCreateApplicationRequest {
  /**
   * @schema DiscoveryCreateApplicationRequest#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryCreateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DiscoveryCreateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryCreateApplicationRequest(obj: DiscoveryCreateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryCreateApplicationResponse
 */
export interface DiscoveryCreateApplicationResponse {
  /**
   * @schema DiscoveryCreateApplicationResponse#configurationId
   */
  readonly configurationId?: string;

}

/**
 * Converts an object of type 'DiscoveryCreateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryCreateApplicationResponse(obj: DiscoveryCreateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationId': obj.configurationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryCreateTagsRequest
 */
export interface DiscoveryCreateTagsRequest {
  /**
   * @schema DiscoveryCreateTagsRequest#configurationIds
   */
  readonly configurationIds: string[];

  /**
   * @schema DiscoveryCreateTagsRequest#tags
   */
  readonly tags: DiscoveryTag[];

}

/**
 * Converts an object of type 'DiscoveryCreateTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryCreateTagsRequest(obj: DiscoveryCreateTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationIds': obj.configurationIds?.map(y => y),
    'tags': obj.tags?.map(y => toJson_DiscoveryTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryCreateTagsResponse
 */
export interface DiscoveryCreateTagsResponse {
}

/**
 * Converts an object of type 'DiscoveryCreateTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryCreateTagsResponse(obj: DiscoveryCreateTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDeleteApplicationsRequest
 */
export interface DiscoveryDeleteApplicationsRequest {
  /**
   * @schema DiscoveryDeleteApplicationsRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * Converts an object of type 'DiscoveryDeleteApplicationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDeleteApplicationsRequest(obj: DiscoveryDeleteApplicationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationIds': obj.configurationIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDeleteApplicationsResponse
 */
export interface DiscoveryDeleteApplicationsResponse {
}

/**
 * Converts an object of type 'DiscoveryDeleteApplicationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDeleteApplicationsResponse(obj: DiscoveryDeleteApplicationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDeleteTagsRequest
 */
export interface DiscoveryDeleteTagsRequest {
  /**
   * @schema DiscoveryDeleteTagsRequest#configurationIds
   */
  readonly configurationIds: string[];

  /**
   * @schema DiscoveryDeleteTagsRequest#tags
   */
  readonly tags?: DiscoveryTag[];

}

/**
 * Converts an object of type 'DiscoveryDeleteTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDeleteTagsRequest(obj: DiscoveryDeleteTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationIds': obj.configurationIds?.map(y => y),
    'tags': obj.tags?.map(y => toJson_DiscoveryTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDeleteTagsResponse
 */
export interface DiscoveryDeleteTagsResponse {
}

/**
 * Converts an object of type 'DiscoveryDeleteTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDeleteTagsResponse(obj: DiscoveryDeleteTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeAgentsRequest
 */
export interface DiscoveryDescribeAgentsRequest {
  /**
   * @schema DiscoveryDescribeAgentsRequest#agentIds
   */
  readonly agentIds?: string[];

  /**
   * @schema DiscoveryDescribeAgentsRequest#filters
   */
  readonly filters?: DiscoveryFilter[];

  /**
   * @schema DiscoveryDescribeAgentsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeAgentsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeAgentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeAgentsRequest(obj: DiscoveryDescribeAgentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentIds': obj.agentIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_DiscoveryFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeAgentsResponse
 */
export interface DiscoveryDescribeAgentsResponse {
  /**
   * @schema DiscoveryDescribeAgentsResponse#agentsInfo
   */
  readonly agentsInfo?: DiscoveryAgentInfo[];

  /**
   * @schema DiscoveryDescribeAgentsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeAgentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeAgentsResponse(obj: DiscoveryDescribeAgentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentsInfo': obj.agentsInfo?.map(y => toJson_DiscoveryAgentInfo(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeConfigurationsRequest
 */
export interface DiscoveryDescribeConfigurationsRequest {
  /**
   * @schema DiscoveryDescribeConfigurationsRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * Converts an object of type 'DiscoveryDescribeConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeConfigurationsRequest(obj: DiscoveryDescribeConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationIds': obj.configurationIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeConfigurationsResponse
 */
export interface DiscoveryDescribeConfigurationsResponse {
  /**
   * @schema DiscoveryDescribeConfigurationsResponse#configurations
   */
  readonly configurations?: { [key: string]: string }[];

}

/**
 * Converts an object of type 'DiscoveryDescribeConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeConfigurationsResponse(obj: DiscoveryDescribeConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurations': obj.configurations?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeContinuousExportsRequest
 */
export interface DiscoveryDescribeContinuousExportsRequest {
  /**
   * @schema DiscoveryDescribeContinuousExportsRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DiscoveryDescribeContinuousExportsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeContinuousExportsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeContinuousExportsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeContinuousExportsRequest(obj: DiscoveryDescribeContinuousExportsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportIds': obj.exportIds?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeContinuousExportsResponse
 */
export interface DiscoveryDescribeContinuousExportsResponse {
  /**
   * @schema DiscoveryDescribeContinuousExportsResponse#descriptions
   */
  readonly descriptions?: DiscoveryContinuousExportDescription[];

  /**
   * @schema DiscoveryDescribeContinuousExportsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeContinuousExportsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeContinuousExportsResponse(obj: DiscoveryDescribeContinuousExportsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'descriptions': obj.descriptions?.map(y => toJson_DiscoveryContinuousExportDescription(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeExportConfigurationsRequest
 */
export interface DiscoveryDescribeExportConfigurationsRequest {
  /**
   * @schema DiscoveryDescribeExportConfigurationsRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DiscoveryDescribeExportConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeExportConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeExportConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeExportConfigurationsRequest(obj: DiscoveryDescribeExportConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportIds': obj.exportIds?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeExportConfigurationsResponse
 */
export interface DiscoveryDescribeExportConfigurationsResponse {
  /**
   * @schema DiscoveryDescribeExportConfigurationsResponse#exportsInfo
   */
  readonly exportsInfo?: DiscoveryExportInfo[];

  /**
   * @schema DiscoveryDescribeExportConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeExportConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeExportConfigurationsResponse(obj: DiscoveryDescribeExportConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportsInfo': obj.exportsInfo?.map(y => toJson_DiscoveryExportInfo(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeExportTasksRequest
 */
export interface DiscoveryDescribeExportTasksRequest {
  /**
   * @schema DiscoveryDescribeExportTasksRequest#exportIds
   */
  readonly exportIds?: string[];

  /**
   * @schema DiscoveryDescribeExportTasksRequest#filters
   */
  readonly filters?: DiscoveryExportFilter[];

  /**
   * @schema DiscoveryDescribeExportTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeExportTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeExportTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeExportTasksRequest(obj: DiscoveryDescribeExportTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportIds': obj.exportIds?.map(y => y),
    'filters': obj.filters?.map(y => toJson_DiscoveryExportFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeExportTasksResponse
 */
export interface DiscoveryDescribeExportTasksResponse {
  /**
   * @schema DiscoveryDescribeExportTasksResponse#exportsInfo
   */
  readonly exportsInfo?: DiscoveryExportInfo[];

  /**
   * @schema DiscoveryDescribeExportTasksResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeExportTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeExportTasksResponse(obj: DiscoveryDescribeExportTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportsInfo': obj.exportsInfo?.map(y => toJson_DiscoveryExportInfo(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeImportTasksRequest
 */
export interface DiscoveryDescribeImportTasksRequest {
  /**
   * @schema DiscoveryDescribeImportTasksRequest#filters
   */
  readonly filters?: DiscoveryImportTaskFilter[];

  /**
   * @schema DiscoveryDescribeImportTasksRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeImportTasksRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeImportTasksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeImportTasksRequest(obj: DiscoveryDescribeImportTasksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_DiscoveryImportTaskFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeImportTasksResponse
 */
export interface DiscoveryDescribeImportTasksResponse {
  /**
   * @schema DiscoveryDescribeImportTasksResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DiscoveryDescribeImportTasksResponse#tasks
   */
  readonly tasks?: DiscoveryImportTask[];

}

/**
 * Converts an object of type 'DiscoveryDescribeImportTasksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeImportTasksResponse(obj: DiscoveryDescribeImportTasksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'tasks': obj.tasks?.map(y => toJson_DiscoveryImportTask(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeTagsRequest
 */
export interface DiscoveryDescribeTagsRequest {
  /**
   * @schema DiscoveryDescribeTagsRequest#filters
   */
  readonly filters?: DiscoveryTagFilter[];

  /**
   * @schema DiscoveryDescribeTagsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryDescribeTagsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeTagsRequest(obj: DiscoveryDescribeTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'filters': obj.filters?.map(y => toJson_DiscoveryTagFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDescribeTagsResponse
 */
export interface DiscoveryDescribeTagsResponse {
  /**
   * @schema DiscoveryDescribeTagsResponse#tags
   */
  readonly tags?: DiscoveryConfigurationTag[];

  /**
   * @schema DiscoveryDescribeTagsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryDescribeTagsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDescribeTagsResponse(obj: DiscoveryDescribeTagsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': obj.tags?.map(y => toJson_DiscoveryConfigurationTag(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDisassociateConfigurationItemsFromApplicationRequest
 */
export interface DiscoveryDisassociateConfigurationItemsFromApplicationRequest {
  /**
   * @schema DiscoveryDisassociateConfigurationItemsFromApplicationRequest#applicationConfigurationId
   */
  readonly applicationConfigurationId: string;

  /**
   * @schema DiscoveryDisassociateConfigurationItemsFromApplicationRequest#configurationIds
   */
  readonly configurationIds: string[];

}

/**
 * Converts an object of type 'DiscoveryDisassociateConfigurationItemsFromApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDisassociateConfigurationItemsFromApplicationRequest(obj: DiscoveryDisassociateConfigurationItemsFromApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'applicationConfigurationId': obj.applicationConfigurationId,
    'configurationIds': obj.configurationIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryDisassociateConfigurationItemsFromApplicationResponse
 */
export interface DiscoveryDisassociateConfigurationItemsFromApplicationResponse {
}

/**
 * Converts an object of type 'DiscoveryDisassociateConfigurationItemsFromApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryDisassociateConfigurationItemsFromApplicationResponse(obj: DiscoveryDisassociateConfigurationItemsFromApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryExportConfigurationsResponse
 */
export interface DiscoveryExportConfigurationsResponse {
  /**
   * @schema DiscoveryExportConfigurationsResponse#exportId
   */
  readonly exportId?: string;

}

/**
 * Converts an object of type 'DiscoveryExportConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryExportConfigurationsResponse(obj: DiscoveryExportConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportId': obj.exportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryGetDiscoverySummaryRequest
 */
export interface DiscoveryGetDiscoverySummaryRequest {
}

/**
 * Converts an object of type 'DiscoveryGetDiscoverySummaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryGetDiscoverySummaryRequest(obj: DiscoveryGetDiscoverySummaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryGetDiscoverySummaryResponse
 */
export interface DiscoveryGetDiscoverySummaryResponse {
  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#servers
   */
  readonly servers?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#applications
   */
  readonly applications?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#serversMappedToApplications
   */
  readonly serversMappedToApplications?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#serversMappedtoTags
   */
  readonly serversMappedtoTags?: number;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#agentSummary
   */
  readonly agentSummary?: DiscoveryCustomerAgentInfo;

  /**
   * @schema DiscoveryGetDiscoverySummaryResponse#connectorSummary
   */
  readonly connectorSummary?: DiscoveryCustomerConnectorInfo;

}

/**
 * Converts an object of type 'DiscoveryGetDiscoverySummaryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryGetDiscoverySummaryResponse(obj: DiscoveryGetDiscoverySummaryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'servers': obj.servers,
    'applications': obj.applications,
    'serversMappedToApplications': obj.serversMappedToApplications,
    'serversMappedtoTags': obj.serversMappedtoTags,
    'agentSummary': toJson_DiscoveryCustomerAgentInfo(obj.agentSummary),
    'connectorSummary': toJson_DiscoveryCustomerConnectorInfo(obj.connectorSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryListConfigurationsRequest
 */
export interface DiscoveryListConfigurationsRequest {
  /**
   * @schema DiscoveryListConfigurationsRequest#configurationType
   */
  readonly configurationType: string;

  /**
   * @schema DiscoveryListConfigurationsRequest#filters
   */
  readonly filters?: DiscoveryFilter[];

  /**
   * @schema DiscoveryListConfigurationsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryListConfigurationsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DiscoveryListConfigurationsRequest#orderBy
   */
  readonly orderBy?: DiscoveryOrderByElement[];

}

/**
 * Converts an object of type 'DiscoveryListConfigurationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryListConfigurationsRequest(obj: DiscoveryListConfigurationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationType': obj.configurationType,
    'filters': obj.filters?.map(y => toJson_DiscoveryFilter(y)),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'orderBy': obj.orderBy?.map(y => toJson_DiscoveryOrderByElement(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryListConfigurationsResponse
 */
export interface DiscoveryListConfigurationsResponse {
  /**
   * @schema DiscoveryListConfigurationsResponse#configurations
   */
  readonly configurations?: { [key: string]: string }[];

  /**
   * @schema DiscoveryListConfigurationsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryListConfigurationsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryListConfigurationsResponse(obj: DiscoveryListConfigurationsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurations': obj.configurations?.map(y => ((y) === undefined) ? undefined : (Object.entries(y).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {}))),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryListServerNeighborsRequest
 */
export interface DiscoveryListServerNeighborsRequest {
  /**
   * @schema DiscoveryListServerNeighborsRequest#configurationId
   */
  readonly configurationId: string;

  /**
   * @schema DiscoveryListServerNeighborsRequest#portInformationNeeded
   */
  readonly portInformationNeeded?: boolean;

  /**
   * @schema DiscoveryListServerNeighborsRequest#neighborConfigurationIds
   */
  readonly neighborConfigurationIds?: string[];

  /**
   * @schema DiscoveryListServerNeighborsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DiscoveryListServerNeighborsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'DiscoveryListServerNeighborsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryListServerNeighborsRequest(obj: DiscoveryListServerNeighborsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationId': obj.configurationId,
    'portInformationNeeded': obj.portInformationNeeded,
    'neighborConfigurationIds': obj.neighborConfigurationIds?.map(y => y),
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryListServerNeighborsResponse
 */
export interface DiscoveryListServerNeighborsResponse {
  /**
   * @schema DiscoveryListServerNeighborsResponse#neighbors
   */
  readonly neighbors: DiscoveryNeighborConnectionDetail[];

  /**
   * @schema DiscoveryListServerNeighborsResponse#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DiscoveryListServerNeighborsResponse#knownDependencyCount
   */
  readonly knownDependencyCount?: number;

}

/**
 * Converts an object of type 'DiscoveryListServerNeighborsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryListServerNeighborsResponse(obj: DiscoveryListServerNeighborsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'neighbors': obj.neighbors?.map(y => toJson_DiscoveryNeighborConnectionDetail(y)),
    'nextToken': obj.nextToken,
    'knownDependencyCount': obj.knownDependencyCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartContinuousExportRequest
 */
export interface DiscoveryStartContinuousExportRequest {
}

/**
 * Converts an object of type 'DiscoveryStartContinuousExportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartContinuousExportRequest(obj: DiscoveryStartContinuousExportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartContinuousExportResponse
 */
export interface DiscoveryStartContinuousExportResponse {
  /**
   * @schema DiscoveryStartContinuousExportResponse#exportId
   */
  readonly exportId?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema DiscoveryStartContinuousExportResponse#schemaStorageConfig
   */
  readonly schemaStorageConfig?: { [key: string]: string };

}

/**
 * Converts an object of type 'DiscoveryStartContinuousExportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartContinuousExportResponse(obj: DiscoveryStartContinuousExportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportId': obj.exportId,
    's3Bucket': obj.s3Bucket,
    'startTime': obj.startTime,
    'dataSource': obj.dataSource,
    'schemaStorageConfig': ((obj.schemaStorageConfig) === undefined) ? undefined : (Object.entries(obj.schemaStorageConfig).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartDataCollectionByAgentIdsRequest
 */
export interface DiscoveryStartDataCollectionByAgentIdsRequest {
  /**
   * @schema DiscoveryStartDataCollectionByAgentIdsRequest#agentIds
   */
  readonly agentIds: string[];

}

/**
 * Converts an object of type 'DiscoveryStartDataCollectionByAgentIdsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartDataCollectionByAgentIdsRequest(obj: DiscoveryStartDataCollectionByAgentIdsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentIds': obj.agentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartDataCollectionByAgentIdsResponse
 */
export interface DiscoveryStartDataCollectionByAgentIdsResponse {
  /**
   * @schema DiscoveryStartDataCollectionByAgentIdsResponse#agentsConfigurationStatus
   */
  readonly agentsConfigurationStatus?: DiscoveryAgentConfigurationStatus[];

}

/**
 * Converts an object of type 'DiscoveryStartDataCollectionByAgentIdsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartDataCollectionByAgentIdsResponse(obj: DiscoveryStartDataCollectionByAgentIdsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentsConfigurationStatus': obj.agentsConfigurationStatus?.map(y => toJson_DiscoveryAgentConfigurationStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartExportTaskRequest
 */
export interface DiscoveryStartExportTaskRequest {
  /**
   * @schema DiscoveryStartExportTaskRequest#exportDataFormat
   */
  readonly exportDataFormat?: string[];

  /**
   * @schema DiscoveryStartExportTaskRequest#filters
   */
  readonly filters?: DiscoveryExportFilter[];

  /**
   * @schema DiscoveryStartExportTaskRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryStartExportTaskRequest#endTime
   */
  readonly endTime?: string;

}

/**
 * Converts an object of type 'DiscoveryStartExportTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartExportTaskRequest(obj: DiscoveryStartExportTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportDataFormat': obj.exportDataFormat?.map(y => y),
    'filters': obj.filters?.map(y => toJson_DiscoveryExportFilter(y)),
    'startTime': obj.startTime,
    'endTime': obj.endTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartExportTaskResponse
 */
export interface DiscoveryStartExportTaskResponse {
  /**
   * @schema DiscoveryStartExportTaskResponse#exportId
   */
  readonly exportId?: string;

}

/**
 * Converts an object of type 'DiscoveryStartExportTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartExportTaskResponse(obj: DiscoveryStartExportTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportId': obj.exportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartImportTaskRequest
 */
export interface DiscoveryStartImportTaskRequest {
  /**
   * @schema DiscoveryStartImportTaskRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DiscoveryStartImportTaskRequest#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryStartImportTaskRequest#importUrl
   */
  readonly importUrl: string;

}

/**
 * Converts an object of type 'DiscoveryStartImportTaskRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartImportTaskRequest(obj: DiscoveryStartImportTaskRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
    'name': obj.name,
    'importUrl': obj.importUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStartImportTaskResponse
 */
export interface DiscoveryStartImportTaskResponse {
  /**
   * @schema DiscoveryStartImportTaskResponse#task
   */
  readonly task?: DiscoveryImportTask;

}

/**
 * Converts an object of type 'DiscoveryStartImportTaskResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStartImportTaskResponse(obj: DiscoveryStartImportTaskResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'task': toJson_DiscoveryImportTask(obj.task),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStopContinuousExportRequest
 */
export interface DiscoveryStopContinuousExportRequest {
  /**
   * @schema DiscoveryStopContinuousExportRequest#exportId
   */
  readonly exportId: string;

}

/**
 * Converts an object of type 'DiscoveryStopContinuousExportRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStopContinuousExportRequest(obj: DiscoveryStopContinuousExportRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportId': obj.exportId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStopContinuousExportResponse
 */
export interface DiscoveryStopContinuousExportResponse {
  /**
   * @schema DiscoveryStopContinuousExportResponse#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryStopContinuousExportResponse#stopTime
   */
  readonly stopTime?: string;

}

/**
 * Converts an object of type 'DiscoveryStopContinuousExportResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStopContinuousExportResponse(obj: DiscoveryStopContinuousExportResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'startTime': obj.startTime,
    'stopTime': obj.stopTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStopDataCollectionByAgentIdsRequest
 */
export interface DiscoveryStopDataCollectionByAgentIdsRequest {
  /**
   * @schema DiscoveryStopDataCollectionByAgentIdsRequest#agentIds
   */
  readonly agentIds: string[];

}

/**
 * Converts an object of type 'DiscoveryStopDataCollectionByAgentIdsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStopDataCollectionByAgentIdsRequest(obj: DiscoveryStopDataCollectionByAgentIdsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentIds': obj.agentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryStopDataCollectionByAgentIdsResponse
 */
export interface DiscoveryStopDataCollectionByAgentIdsResponse {
  /**
   * @schema DiscoveryStopDataCollectionByAgentIdsResponse#agentsConfigurationStatus
   */
  readonly agentsConfigurationStatus?: DiscoveryAgentConfigurationStatus[];

}

/**
 * Converts an object of type 'DiscoveryStopDataCollectionByAgentIdsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryStopDataCollectionByAgentIdsResponse(obj: DiscoveryStopDataCollectionByAgentIdsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentsConfigurationStatus': obj.agentsConfigurationStatus?.map(y => toJson_DiscoveryAgentConfigurationStatus(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryUpdateApplicationRequest
 */
export interface DiscoveryUpdateApplicationRequest {
  /**
   * @schema DiscoveryUpdateApplicationRequest#configurationId
   */
  readonly configurationId: string;

  /**
   * @schema DiscoveryUpdateApplicationRequest#name
   */
  readonly name?: string;

  /**
   * @schema DiscoveryUpdateApplicationRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DiscoveryUpdateApplicationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryUpdateApplicationRequest(obj: DiscoveryUpdateApplicationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationId': obj.configurationId,
    'name': obj.name,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryUpdateApplicationResponse
 */
export interface DiscoveryUpdateApplicationResponse {
}

/**
 * Converts an object of type 'DiscoveryUpdateApplicationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryUpdateApplicationResponse(obj: DiscoveryUpdateApplicationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryBatchDeleteImportDataError
 */
export interface DiscoveryBatchDeleteImportDataError {
  /**
   * @schema DiscoveryBatchDeleteImportDataError#importTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema DiscoveryBatchDeleteImportDataError#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DiscoveryBatchDeleteImportDataError#errorDescription
   */
  readonly errorDescription?: string;

}

/**
 * Converts an object of type 'DiscoveryBatchDeleteImportDataError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryBatchDeleteImportDataError(obj: DiscoveryBatchDeleteImportDataError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'importTaskId': obj.importTaskId,
    'errorCode': obj.errorCode,
    'errorDescription': obj.errorDescription,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryTag
 */
export interface DiscoveryTag {
  /**
   * @schema DiscoveryTag#key
   */
  readonly key: string;

  /**
   * @schema DiscoveryTag#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'DiscoveryTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryTag(obj: DiscoveryTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryFilter
 */
export interface DiscoveryFilter {
  /**
   * @schema DiscoveryFilter#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryFilter#values
   */
  readonly values: string[];

  /**
   * @schema DiscoveryFilter#condition
   */
  readonly condition: string;

}

/**
 * Converts an object of type 'DiscoveryFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryFilter(obj: DiscoveryFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
    'condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryAgentInfo
 */
export interface DiscoveryAgentInfo {
  /**
   * @schema DiscoveryAgentInfo#agentId
   */
  readonly agentId?: string;

  /**
   * @schema DiscoveryAgentInfo#hostName
   */
  readonly hostName?: string;

  /**
   * @schema DiscoveryAgentInfo#agentNetworkInfoList
   */
  readonly agentNetworkInfoList?: DiscoveryAgentNetworkInfo[];

  /**
   * @schema DiscoveryAgentInfo#connectorId
   */
  readonly connectorId?: string;

  /**
   * @schema DiscoveryAgentInfo#version
   */
  readonly version?: string;

  /**
   * @schema DiscoveryAgentInfo#health
   */
  readonly health?: string;

  /**
   * @schema DiscoveryAgentInfo#lastHealthPingTime
   */
  readonly lastHealthPingTime?: string;

  /**
   * @schema DiscoveryAgentInfo#collectionStatus
   */
  readonly collectionStatus?: string;

  /**
   * @schema DiscoveryAgentInfo#agentType
   */
  readonly agentType?: string;

  /**
   * @schema DiscoveryAgentInfo#registeredTime
   */
  readonly registeredTime?: string;

}

/**
 * Converts an object of type 'DiscoveryAgentInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryAgentInfo(obj: DiscoveryAgentInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentId': obj.agentId,
    'hostName': obj.hostName,
    'agentNetworkInfoList': obj.agentNetworkInfoList?.map(y => toJson_DiscoveryAgentNetworkInfo(y)),
    'connectorId': obj.connectorId,
    'version': obj.version,
    'health': obj.health,
    'lastHealthPingTime': obj.lastHealthPingTime,
    'collectionStatus': obj.collectionStatus,
    'agentType': obj.agentType,
    'registeredTime': obj.registeredTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryContinuousExportDescription
 */
export interface DiscoveryContinuousExportDescription {
  /**
   * @schema DiscoveryContinuousExportDescription#exportId
   */
  readonly exportId?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#status
   */
  readonly status?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#statusDetail
   */
  readonly statusDetail?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#s3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#startTime
   */
  readonly startTime?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#stopTime
   */
  readonly stopTime?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#dataSource
   */
  readonly dataSource?: string;

  /**
   * @schema DiscoveryContinuousExportDescription#schemaStorageConfig
   */
  readonly schemaStorageConfig?: { [key: string]: string };

}

/**
 * Converts an object of type 'DiscoveryContinuousExportDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryContinuousExportDescription(obj: DiscoveryContinuousExportDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportId': obj.exportId,
    'status': obj.status,
    'statusDetail': obj.statusDetail,
    's3Bucket': obj.s3Bucket,
    'startTime': obj.startTime,
    'stopTime': obj.stopTime,
    'dataSource': obj.dataSource,
    'schemaStorageConfig': ((obj.schemaStorageConfig) === undefined) ? undefined : (Object.entries(obj.schemaStorageConfig).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryExportInfo
 */
export interface DiscoveryExportInfo {
  /**
   * @schema DiscoveryExportInfo#exportId
   */
  readonly exportId: string;

  /**
   * @schema DiscoveryExportInfo#exportStatus
   */
  readonly exportStatus: string;

  /**
   * @schema DiscoveryExportInfo#statusMessage
   */
  readonly statusMessage: string;

  /**
   * @schema DiscoveryExportInfo#configurationsDownloadUrl
   */
  readonly configurationsDownloadUrl?: string;

  /**
   * @schema DiscoveryExportInfo#exportRequestTime
   */
  readonly exportRequestTime: string;

  /**
   * @schema DiscoveryExportInfo#isTruncated
   */
  readonly isTruncated?: boolean;

  /**
   * @schema DiscoveryExportInfo#requestedStartTime
   */
  readonly requestedStartTime?: string;

  /**
   * @schema DiscoveryExportInfo#requestedEndTime
   */
  readonly requestedEndTime?: string;

}

/**
 * Converts an object of type 'DiscoveryExportInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryExportInfo(obj: DiscoveryExportInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exportId': obj.exportId,
    'exportStatus': obj.exportStatus,
    'statusMessage': obj.statusMessage,
    'configurationsDownloadUrl': obj.configurationsDownloadUrl,
    'exportRequestTime': obj.exportRequestTime,
    'isTruncated': obj.isTruncated,
    'requestedStartTime': obj.requestedStartTime,
    'requestedEndTime': obj.requestedEndTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryExportFilter
 */
export interface DiscoveryExportFilter {
  /**
   * @schema DiscoveryExportFilter#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryExportFilter#values
   */
  readonly values: string[];

  /**
   * @schema DiscoveryExportFilter#condition
   */
  readonly condition: string;

}

/**
 * Converts an object of type 'DiscoveryExportFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryExportFilter(obj: DiscoveryExportFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
    'condition': obj.condition,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryImportTaskFilter
 */
export interface DiscoveryImportTaskFilter {
  /**
   * @schema DiscoveryImportTaskFilter#name
   */
  readonly name?: string;

  /**
   * @schema DiscoveryImportTaskFilter#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'DiscoveryImportTaskFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryImportTaskFilter(obj: DiscoveryImportTaskFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryImportTask
 */
export interface DiscoveryImportTask {
  /**
   * @schema DiscoveryImportTask#importTaskId
   */
  readonly importTaskId?: string;

  /**
   * @schema DiscoveryImportTask#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DiscoveryImportTask#name
   */
  readonly name?: string;

  /**
   * @schema DiscoveryImportTask#importUrl
   */
  readonly importUrl?: string;

  /**
   * @schema DiscoveryImportTask#status
   */
  readonly status?: string;

  /**
   * @schema DiscoveryImportTask#importRequestTime
   */
  readonly importRequestTime?: string;

  /**
   * @schema DiscoveryImportTask#importCompletionTime
   */
  readonly importCompletionTime?: string;

  /**
   * @schema DiscoveryImportTask#importDeletedTime
   */
  readonly importDeletedTime?: string;

  /**
   * @schema DiscoveryImportTask#serverImportSuccess
   */
  readonly serverImportSuccess?: number;

  /**
   * @schema DiscoveryImportTask#serverImportFailure
   */
  readonly serverImportFailure?: number;

  /**
   * @schema DiscoveryImportTask#applicationImportSuccess
   */
  readonly applicationImportSuccess?: number;

  /**
   * @schema DiscoveryImportTask#applicationImportFailure
   */
  readonly applicationImportFailure?: number;

  /**
   * @schema DiscoveryImportTask#errorsAndFailedEntriesZip
   */
  readonly errorsAndFailedEntriesZip?: string;

}

/**
 * Converts an object of type 'DiscoveryImportTask' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryImportTask(obj: DiscoveryImportTask | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'importTaskId': obj.importTaskId,
    'clientRequestToken': obj.clientRequestToken,
    'name': obj.name,
    'importUrl': obj.importUrl,
    'status': obj.status,
    'importRequestTime': obj.importRequestTime,
    'importCompletionTime': obj.importCompletionTime,
    'importDeletedTime': obj.importDeletedTime,
    'serverImportSuccess': obj.serverImportSuccess,
    'serverImportFailure': obj.serverImportFailure,
    'applicationImportSuccess': obj.applicationImportSuccess,
    'applicationImportFailure': obj.applicationImportFailure,
    'errorsAndFailedEntriesZip': obj.errorsAndFailedEntriesZip,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryTagFilter
 */
export interface DiscoveryTagFilter {
  /**
   * @schema DiscoveryTagFilter#name
   */
  readonly name: string;

  /**
   * @schema DiscoveryTagFilter#values
   */
  readonly values: string[];

}

/**
 * Converts an object of type 'DiscoveryTagFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryTagFilter(obj: DiscoveryTagFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryConfigurationTag
 */
export interface DiscoveryConfigurationTag {
  /**
   * @schema DiscoveryConfigurationTag#configurationType
   */
  readonly configurationType?: string;

  /**
   * @schema DiscoveryConfigurationTag#configurationId
   */
  readonly configurationId?: string;

  /**
   * @schema DiscoveryConfigurationTag#key
   */
  readonly key?: string;

  /**
   * @schema DiscoveryConfigurationTag#value
   */
  readonly value?: string;

  /**
   * @schema DiscoveryConfigurationTag#timeOfCreation
   */
  readonly timeOfCreation?: string;

}

/**
 * Converts an object of type 'DiscoveryConfigurationTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryConfigurationTag(obj: DiscoveryConfigurationTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'configurationType': obj.configurationType,
    'configurationId': obj.configurationId,
    'key': obj.key,
    'value': obj.value,
    'timeOfCreation': obj.timeOfCreation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryCustomerAgentInfo
 */
export interface DiscoveryCustomerAgentInfo {
  /**
   * @schema DiscoveryCustomerAgentInfo#activeAgents
   */
  readonly activeAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#healthyAgents
   */
  readonly healthyAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#blackListedAgents
   */
  readonly blackListedAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#shutdownAgents
   */
  readonly shutdownAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#unhealthyAgents
   */
  readonly unhealthyAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#totalAgents
   */
  readonly totalAgents: number;

  /**
   * @schema DiscoveryCustomerAgentInfo#unknownAgents
   */
  readonly unknownAgents: number;

}

/**
 * Converts an object of type 'DiscoveryCustomerAgentInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryCustomerAgentInfo(obj: DiscoveryCustomerAgentInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeAgents': obj.activeAgents,
    'healthyAgents': obj.healthyAgents,
    'blackListedAgents': obj.blackListedAgents,
    'shutdownAgents': obj.shutdownAgents,
    'unhealthyAgents': obj.unhealthyAgents,
    'totalAgents': obj.totalAgents,
    'unknownAgents': obj.unknownAgents,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryCustomerConnectorInfo
 */
export interface DiscoveryCustomerConnectorInfo {
  /**
   * @schema DiscoveryCustomerConnectorInfo#activeConnectors
   */
  readonly activeConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#healthyConnectors
   */
  readonly healthyConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#blackListedConnectors
   */
  readonly blackListedConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#shutdownConnectors
   */
  readonly shutdownConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#unhealthyConnectors
   */
  readonly unhealthyConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#totalConnectors
   */
  readonly totalConnectors: number;

  /**
   * @schema DiscoveryCustomerConnectorInfo#unknownConnectors
   */
  readonly unknownConnectors: number;

}

/**
 * Converts an object of type 'DiscoveryCustomerConnectorInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryCustomerConnectorInfo(obj: DiscoveryCustomerConnectorInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activeConnectors': obj.activeConnectors,
    'healthyConnectors': obj.healthyConnectors,
    'blackListedConnectors': obj.blackListedConnectors,
    'shutdownConnectors': obj.shutdownConnectors,
    'unhealthyConnectors': obj.unhealthyConnectors,
    'totalConnectors': obj.totalConnectors,
    'unknownConnectors': obj.unknownConnectors,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryOrderByElement
 */
export interface DiscoveryOrderByElement {
  /**
   * @schema DiscoveryOrderByElement#fieldName
   */
  readonly fieldName: string;

  /**
   * @schema DiscoveryOrderByElement#sortOrder
   */
  readonly sortOrder?: string;

}

/**
 * Converts an object of type 'DiscoveryOrderByElement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryOrderByElement(obj: DiscoveryOrderByElement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fieldName': obj.fieldName,
    'sortOrder': obj.sortOrder,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryNeighborConnectionDetail
 */
export interface DiscoveryNeighborConnectionDetail {
  /**
   * @schema DiscoveryNeighborConnectionDetail#sourceServerId
   */
  readonly sourceServerId: string;

  /**
   * @schema DiscoveryNeighborConnectionDetail#destinationServerId
   */
  readonly destinationServerId: string;

  /**
   * @schema DiscoveryNeighborConnectionDetail#destinationPort
   */
  readonly destinationPort?: number;

  /**
   * @schema DiscoveryNeighborConnectionDetail#transportProtocol
   */
  readonly transportProtocol?: string;

  /**
   * @schema DiscoveryNeighborConnectionDetail#connectionsCount
   */
  readonly connectionsCount: number;

}

/**
 * Converts an object of type 'DiscoveryNeighborConnectionDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryNeighborConnectionDetail(obj: DiscoveryNeighborConnectionDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'sourceServerId': obj.sourceServerId,
    'destinationServerId': obj.destinationServerId,
    'destinationPort': obj.destinationPort,
    'transportProtocol': obj.transportProtocol,
    'connectionsCount': obj.connectionsCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryAgentConfigurationStatus
 */
export interface DiscoveryAgentConfigurationStatus {
  /**
   * @schema DiscoveryAgentConfigurationStatus#agentId
   */
  readonly agentId?: string;

  /**
   * @schema DiscoveryAgentConfigurationStatus#operationSucceeded
   */
  readonly operationSucceeded?: boolean;

  /**
   * @schema DiscoveryAgentConfigurationStatus#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'DiscoveryAgentConfigurationStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryAgentConfigurationStatus(obj: DiscoveryAgentConfigurationStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'agentId': obj.agentId,
    'operationSucceeded': obj.operationSucceeded,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DiscoveryAgentNetworkInfo
 */
export interface DiscoveryAgentNetworkInfo {
  /**
   * @schema DiscoveryAgentNetworkInfo#ipAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema DiscoveryAgentNetworkInfo#macAddress
   */
  readonly macAddress?: string;

}

/**
 * Converts an object of type 'DiscoveryAgentNetworkInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DiscoveryAgentNetworkInfo(obj: DiscoveryAgentNetworkInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ipAddress': obj.ipAddress,
    'macAddress': obj.macAddress,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
