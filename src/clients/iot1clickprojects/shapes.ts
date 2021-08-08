/**
 * @schema IoT1ClickProjectsAssociateDeviceWithPlacementRequest
 */
export interface IoT1ClickProjectsAssociateDeviceWithPlacementRequest {
  /**
   * @schema IoT1ClickProjectsAssociateDeviceWithPlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsAssociateDeviceWithPlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsAssociateDeviceWithPlacementRequest#deviceId
   */
  readonly deviceId: string;

  /**
   * @schema IoT1ClickProjectsAssociateDeviceWithPlacementRequest#deviceTemplateName
   */
  readonly deviceTemplateName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsAssociateDeviceWithPlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsAssociateDeviceWithPlacementRequest(obj: IoT1ClickProjectsAssociateDeviceWithPlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'placementName': obj.placementName,
    'deviceId': obj.deviceId,
    'deviceTemplateName': obj.deviceTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsAssociateDeviceWithPlacementResponse
 */
export interface IoT1ClickProjectsAssociateDeviceWithPlacementResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsAssociateDeviceWithPlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsAssociateDeviceWithPlacementResponse(obj: IoT1ClickProjectsAssociateDeviceWithPlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsCreatePlacementRequest
 */
export interface IoT1ClickProjectsCreatePlacementRequest {
  /**
   * @schema IoT1ClickProjectsCreatePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsCreatePlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsCreatePlacementRequest#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsCreatePlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsCreatePlacementRequest(obj: IoT1ClickProjectsCreatePlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'placementName': obj.placementName,
    'projectName': obj.projectName,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsCreatePlacementResponse
 */
export interface IoT1ClickProjectsCreatePlacementResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsCreatePlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsCreatePlacementResponse(obj: IoT1ClickProjectsCreatePlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsCreateProjectRequest
 */
export interface IoT1ClickProjectsCreateProjectRequest {
  /**
   * @schema IoT1ClickProjectsCreateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsCreateProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema IoT1ClickProjectsCreateProjectRequest#placementTemplate
   */
  readonly placementTemplate?: IoT1ClickProjectsPlacementTemplate;

  /**
   * @schema IoT1ClickProjectsCreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsCreateProjectRequest(obj: IoT1ClickProjectsCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'description': obj.description,
    'placementTemplate': toJson_IoT1ClickProjectsPlacementTemplate(obj.placementTemplate),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsCreateProjectResponse
 */
export interface IoT1ClickProjectsCreateProjectResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsCreateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsCreateProjectResponse(obj: IoT1ClickProjectsCreateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDeletePlacementRequest
 */
export interface IoT1ClickProjectsDeletePlacementRequest {
  /**
   * @schema IoT1ClickProjectsDeletePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsDeletePlacementRequest#projectName
   */
  readonly projectName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDeletePlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDeletePlacementRequest(obj: IoT1ClickProjectsDeletePlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'placementName': obj.placementName,
    'projectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDeletePlacementResponse
 */
export interface IoT1ClickProjectsDeletePlacementResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsDeletePlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDeletePlacementResponse(obj: IoT1ClickProjectsDeletePlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDeleteProjectRequest
 */
export interface IoT1ClickProjectsDeleteProjectRequest {
  /**
   * @schema IoT1ClickProjectsDeleteProjectRequest#projectName
   */
  readonly projectName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDeleteProjectRequest(obj: IoT1ClickProjectsDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDeleteProjectResponse
 */
export interface IoT1ClickProjectsDeleteProjectResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsDeleteProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDeleteProjectResponse(obj: IoT1ClickProjectsDeleteProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDescribePlacementRequest
 */
export interface IoT1ClickProjectsDescribePlacementRequest {
  /**
   * @schema IoT1ClickProjectsDescribePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsDescribePlacementRequest#projectName
   */
  readonly projectName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDescribePlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDescribePlacementRequest(obj: IoT1ClickProjectsDescribePlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'placementName': obj.placementName,
    'projectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDescribePlacementResponse
 */
export interface IoT1ClickProjectsDescribePlacementResponse {
  /**
   * @schema IoT1ClickProjectsDescribePlacementResponse#placement
   */
  readonly placement: IoT1ClickProjectsPlacementDescription;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDescribePlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDescribePlacementResponse(obj: IoT1ClickProjectsDescribePlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'placement': toJson_IoT1ClickProjectsPlacementDescription(obj.placement),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDescribeProjectRequest
 */
export interface IoT1ClickProjectsDescribeProjectRequest {
  /**
   * @schema IoT1ClickProjectsDescribeProjectRequest#projectName
   */
  readonly projectName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDescribeProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDescribeProjectRequest(obj: IoT1ClickProjectsDescribeProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDescribeProjectResponse
 */
export interface IoT1ClickProjectsDescribeProjectResponse {
  /**
   * @schema IoT1ClickProjectsDescribeProjectResponse#project
   */
  readonly project: IoT1ClickProjectsProjectDescription;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDescribeProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDescribeProjectResponse(obj: IoT1ClickProjectsDescribeProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'project': toJson_IoT1ClickProjectsProjectDescription(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDisassociateDeviceFromPlacementRequest
 */
export interface IoT1ClickProjectsDisassociateDeviceFromPlacementRequest {
  /**
   * @schema IoT1ClickProjectsDisassociateDeviceFromPlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsDisassociateDeviceFromPlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsDisassociateDeviceFromPlacementRequest#deviceTemplateName
   */
  readonly deviceTemplateName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsDisassociateDeviceFromPlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDisassociateDeviceFromPlacementRequest(obj: IoT1ClickProjectsDisassociateDeviceFromPlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'placementName': obj.placementName,
    'deviceTemplateName': obj.deviceTemplateName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDisassociateDeviceFromPlacementResponse
 */
export interface IoT1ClickProjectsDisassociateDeviceFromPlacementResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsDisassociateDeviceFromPlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDisassociateDeviceFromPlacementResponse(obj: IoT1ClickProjectsDisassociateDeviceFromPlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsGetDevicesInPlacementRequest
 */
export interface IoT1ClickProjectsGetDevicesInPlacementRequest {
  /**
   * @schema IoT1ClickProjectsGetDevicesInPlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsGetDevicesInPlacementRequest#placementName
   */
  readonly placementName: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsGetDevicesInPlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsGetDevicesInPlacementRequest(obj: IoT1ClickProjectsGetDevicesInPlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'placementName': obj.placementName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsGetDevicesInPlacementResponse
 */
export interface IoT1ClickProjectsGetDevicesInPlacementResponse {
  /**
   * @schema IoT1ClickProjectsGetDevicesInPlacementResponse#devices
   */
  readonly devices: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsGetDevicesInPlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsGetDevicesInPlacementResponse(obj: IoT1ClickProjectsGetDevicesInPlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'devices': ((obj.devices) === undefined) ? undefined : (Object.entries(obj.devices).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsListPlacementsRequest
 */
export interface IoT1ClickProjectsListPlacementsRequest {
  /**
   * @schema IoT1ClickProjectsListPlacementsRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsListPlacementsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoT1ClickProjectsListPlacementsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoT1ClickProjectsListPlacementsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsListPlacementsRequest(obj: IoT1ClickProjectsListPlacementsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsListPlacementsResponse
 */
export interface IoT1ClickProjectsListPlacementsResponse {
  /**
   * @schema IoT1ClickProjectsListPlacementsResponse#placements
   */
  readonly placements: IoT1ClickProjectsPlacementSummary[];

  /**
   * @schema IoT1ClickProjectsListPlacementsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsListPlacementsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsListPlacementsResponse(obj: IoT1ClickProjectsListPlacementsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'placements': obj.placements?.map(y => toJson_IoT1ClickProjectsPlacementSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsListProjectsRequest
 */
export interface IoT1ClickProjectsListProjectsRequest {
  /**
   * @schema IoT1ClickProjectsListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoT1ClickProjectsListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoT1ClickProjectsListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsListProjectsRequest(obj: IoT1ClickProjectsListProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsListProjectsResponse
 */
export interface IoT1ClickProjectsListProjectsResponse {
  /**
   * @schema IoT1ClickProjectsListProjectsResponse#projects
   */
  readonly projects: IoT1ClickProjectsProjectSummary[];

  /**
   * @schema IoT1ClickProjectsListProjectsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsListProjectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsListProjectsResponse(obj: IoT1ClickProjectsListProjectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projects': obj.projects?.map(y => toJson_IoT1ClickProjectsProjectSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsListTagsForResourceRequest
 */
export interface IoT1ClickProjectsListTagsForResourceRequest {
  /**
   * @schema IoT1ClickProjectsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsListTagsForResourceRequest(obj: IoT1ClickProjectsListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsListTagsForResourceResponse
 */
export interface IoT1ClickProjectsListTagsForResourceResponse {
  /**
   * @schema IoT1ClickProjectsListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsListTagsForResourceResponse(obj: IoT1ClickProjectsListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsTagResourceRequest
 */
export interface IoT1ClickProjectsTagResourceRequest {
  /**
   * @schema IoT1ClickProjectsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoT1ClickProjectsTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsTagResourceRequest(obj: IoT1ClickProjectsTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoT1ClickProjectsTagResourceResponse
 */
export interface IoT1ClickProjectsTagResourceResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsTagResourceResponse(obj: IoT1ClickProjectsTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsUntagResourceRequest
 */
export interface IoT1ClickProjectsUntagResourceRequest {
  /**
   * @schema IoT1ClickProjectsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoT1ClickProjectsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IoT1ClickProjectsUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsUntagResourceRequest(obj: IoT1ClickProjectsUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoT1ClickProjectsUntagResourceResponse
 */
export interface IoT1ClickProjectsUntagResourceResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsUntagResourceResponse(obj: IoT1ClickProjectsUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsUpdatePlacementRequest
 */
export interface IoT1ClickProjectsUpdatePlacementRequest {
  /**
   * @schema IoT1ClickProjectsUpdatePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsUpdatePlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsUpdatePlacementRequest#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsUpdatePlacementRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsUpdatePlacementRequest(obj: IoT1ClickProjectsUpdatePlacementRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'placementName': obj.placementName,
    'projectName': obj.projectName,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsUpdatePlacementResponse
 */
export interface IoT1ClickProjectsUpdatePlacementResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsUpdatePlacementResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsUpdatePlacementResponse(obj: IoT1ClickProjectsUpdatePlacementResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsUpdateProjectRequest
 */
export interface IoT1ClickProjectsUpdateProjectRequest {
  /**
   * @schema IoT1ClickProjectsUpdateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsUpdateProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema IoT1ClickProjectsUpdateProjectRequest#placementTemplate
   */
  readonly placementTemplate?: IoT1ClickProjectsPlacementTemplate;

}

/**
 * Converts an object of type 'IoT1ClickProjectsUpdateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsUpdateProjectRequest(obj: IoT1ClickProjectsUpdateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'description': obj.description,
    'placementTemplate': toJson_IoT1ClickProjectsPlacementTemplate(obj.placementTemplate),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsUpdateProjectResponse
 */
export interface IoT1ClickProjectsUpdateProjectResponse {
}

/**
 * Converts an object of type 'IoT1ClickProjectsUpdateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsUpdateProjectResponse(obj: IoT1ClickProjectsUpdateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsPlacementTemplate
 */
export interface IoT1ClickProjectsPlacementTemplate {
  /**
   * @schema IoT1ClickProjectsPlacementTemplate#defaultAttributes
   */
  readonly defaultAttributes?: { [key: string]: string };

  /**
   * @schema IoT1ClickProjectsPlacementTemplate#deviceTemplates
   */
  readonly deviceTemplates?: { [key: string]: IoT1ClickProjectsDeviceTemplate };

}

/**
 * Converts an object of type 'IoT1ClickProjectsPlacementTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsPlacementTemplate(obj: IoT1ClickProjectsPlacementTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultAttributes': ((obj.defaultAttributes) === undefined) ? undefined : (Object.entries(obj.defaultAttributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'deviceTemplates': ((obj.deviceTemplates) === undefined) ? undefined : (Object.entries(obj.deviceTemplates).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_IoT1ClickProjectsDeviceTemplate(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsPlacementDescription
 */
export interface IoT1ClickProjectsPlacementDescription {
  /**
   * @schema IoT1ClickProjectsPlacementDescription#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsPlacementDescription#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsPlacementDescription#attributes
   */
  readonly attributes: { [key: string]: string };

  /**
   * @schema IoT1ClickProjectsPlacementDescription#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema IoT1ClickProjectsPlacementDescription#updatedDate
   */
  readonly updatedDate: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsPlacementDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsPlacementDescription(obj: IoT1ClickProjectsPlacementDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'placementName': obj.placementName,
    'attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'createdDate': obj.createdDate,
    'updatedDate': obj.updatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsProjectDescription
 */
export interface IoT1ClickProjectsProjectDescription {
  /**
   * @schema IoT1ClickProjectsProjectDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema IoT1ClickProjectsProjectDescription#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsProjectDescription#description
   */
  readonly description?: string;

  /**
   * @schema IoT1ClickProjectsProjectDescription#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema IoT1ClickProjectsProjectDescription#updatedDate
   */
  readonly updatedDate: string;

  /**
   * @schema IoT1ClickProjectsProjectDescription#placementTemplate
   */
  readonly placementTemplate?: IoT1ClickProjectsPlacementTemplate;

  /**
   * @schema IoT1ClickProjectsProjectDescription#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsProjectDescription' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsProjectDescription(obj: IoT1ClickProjectsProjectDescription | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'projectName': obj.projectName,
    'description': obj.description,
    'createdDate': obj.createdDate,
    'updatedDate': obj.updatedDate,
    'placementTemplate': toJson_IoT1ClickProjectsPlacementTemplate(obj.placementTemplate),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsPlacementSummary
 */
export interface IoT1ClickProjectsPlacementSummary {
  /**
   * @schema IoT1ClickProjectsPlacementSummary#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsPlacementSummary#placementName
   */
  readonly placementName: string;

  /**
   * @schema IoT1ClickProjectsPlacementSummary#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema IoT1ClickProjectsPlacementSummary#updatedDate
   */
  readonly updatedDate: string;

}

/**
 * Converts an object of type 'IoT1ClickProjectsPlacementSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsPlacementSummary(obj: IoT1ClickProjectsPlacementSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectName': obj.projectName,
    'placementName': obj.placementName,
    'createdDate': obj.createdDate,
    'updatedDate': obj.updatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsProjectSummary
 */
export interface IoT1ClickProjectsProjectSummary {
  /**
   * @schema IoT1ClickProjectsProjectSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoT1ClickProjectsProjectSummary#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoT1ClickProjectsProjectSummary#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema IoT1ClickProjectsProjectSummary#updatedDate
   */
  readonly updatedDate: string;

  /**
   * @schema IoT1ClickProjectsProjectSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsProjectSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsProjectSummary(obj: IoT1ClickProjectsProjectSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'projectName': obj.projectName,
    'createdDate': obj.createdDate,
    'updatedDate': obj.updatedDate,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoT1ClickProjectsDeviceTemplate
 */
export interface IoT1ClickProjectsDeviceTemplate {
  /**
   * @schema IoT1ClickProjectsDeviceTemplate#deviceType
   */
  readonly deviceType?: string;

  /**
   * @schema IoT1ClickProjectsDeviceTemplate#callbackOverrides
   */
  readonly callbackOverrides?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoT1ClickProjectsDeviceTemplate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoT1ClickProjectsDeviceTemplate(obj: IoT1ClickProjectsDeviceTemplate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'deviceType': obj.deviceType,
    'callbackOverrides': ((obj.callbackOverrides) === undefined) ? undefined : (Object.entries(obj.callbackOverrides).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
