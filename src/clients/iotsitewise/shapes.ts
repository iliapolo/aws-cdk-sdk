/**
 * @schema IoTSiteWiseAssociateAssetsRequest
 */
export interface IoTSiteWiseAssociateAssetsRequest {
  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#hierarchyId
   */
  readonly hierarchyId: string;

  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#childAssetId
   */
  readonly childAssetId: string;

  /**
   * @schema IoTSiteWiseAssociateAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssociateAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssociateAssetsRequest(obj: IoTSiteWiseAssociateAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'hierarchyId': obj.hierarchyId,
    'childAssetId': obj.childAssetId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest
 */
export interface IoTSiteWiseBatchAssociateProjectAssetsRequest {
  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseBatchAssociateProjectAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchAssociateProjectAssetsRequest(obj: IoTSiteWiseBatchAssociateProjectAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'assetIds': obj.assetIds?.map(y => y),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchAssociateProjectAssetsResponse
 */
export interface IoTSiteWiseBatchAssociateProjectAssetsResponse {
  /**
   * @schema IoTSiteWiseBatchAssociateProjectAssetsResponse#errors
   */
  readonly errors?: IoTSiteWiseAssetErrorDetails[];

}

/**
 * Converts an object of type 'IoTSiteWiseBatchAssociateProjectAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchAssociateProjectAssetsResponse(obj: IoTSiteWiseBatchAssociateProjectAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_IoTSiteWiseAssetErrorDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest
 */
export interface IoTSiteWiseBatchDisassociateProjectAssetsRequest {
  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseBatchDisassociateProjectAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchDisassociateProjectAssetsRequest(obj: IoTSiteWiseBatchDisassociateProjectAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'assetIds': obj.assetIds?.map(y => y),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchDisassociateProjectAssetsResponse
 */
export interface IoTSiteWiseBatchDisassociateProjectAssetsResponse {
  /**
   * @schema IoTSiteWiseBatchDisassociateProjectAssetsResponse#errors
   */
  readonly errors?: IoTSiteWiseAssetErrorDetails[];

}

/**
 * Converts an object of type 'IoTSiteWiseBatchDisassociateProjectAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchDisassociateProjectAssetsResponse(obj: IoTSiteWiseBatchDisassociateProjectAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errors': obj.errors?.map(y => toJson_IoTSiteWiseAssetErrorDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyValueRequest
 */
export interface IoTSiteWiseBatchPutAssetPropertyValueRequest {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyValueRequest#entries
   */
  readonly entries: IoTSiteWisePutAssetPropertyValueEntry[];

}

/**
 * Converts an object of type 'IoTSiteWiseBatchPutAssetPropertyValueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchPutAssetPropertyValueRequest(obj: IoTSiteWiseBatchPutAssetPropertyValueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entries': obj.entries?.map(y => toJson_IoTSiteWisePutAssetPropertyValueEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyValueResponse
 */
export interface IoTSiteWiseBatchPutAssetPropertyValueResponse {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyValueResponse#errorEntries
   */
  readonly errorEntries: IoTSiteWiseBatchPutAssetPropertyErrorEntry[];

}

/**
 * Converts an object of type 'IoTSiteWiseBatchPutAssetPropertyValueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchPutAssetPropertyValueResponse(obj: IoTSiteWiseBatchPutAssetPropertyValueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorEntries': obj.errorEntries?.map(y => toJson_IoTSiteWiseBatchPutAssetPropertyErrorEntry(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateAccessPolicyRequest
 */
export interface IoTSiteWiseCreateAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#accessPolicyResource
   */
  readonly accessPolicyResource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseCreateAccessPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateAccessPolicyRequest(obj: IoTSiteWiseCreateAccessPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicyIdentity': toJson_IoTSiteWiseIdentity(obj.accessPolicyIdentity),
    'accessPolicyResource': toJson_IoTSiteWiseResource(obj.accessPolicyResource),
    'accessPolicyPermission': obj.accessPolicyPermission,
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateAccessPolicyResponse
 */
export interface IoTSiteWiseCreateAccessPolicyResponse {
  /**
   * @schema IoTSiteWiseCreateAccessPolicyResponse#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseCreateAccessPolicyResponse#accessPolicyArn
   */
  readonly accessPolicyArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseCreateAccessPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateAccessPolicyResponse(obj: IoTSiteWiseCreateAccessPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicyId': obj.accessPolicyId,
    'accessPolicyArn': obj.accessPolicyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateAssetRequest
 */
export interface IoTSiteWiseCreateAssetRequest {
  /**
   * @schema IoTSiteWiseCreateAssetRequest#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseCreateAssetRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseCreateAssetRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateAssetRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseCreateAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateAssetRequest(obj: IoTSiteWiseCreateAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetName': obj.assetName,
    'assetModelId': obj.assetModelId,
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateAssetResponse
 */
export interface IoTSiteWiseCreateAssetResponse {
  /**
   * @schema IoTSiteWiseCreateAssetResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseCreateAssetResponse#assetArn
   */
  readonly assetArn: string;

  /**
   * @schema IoTSiteWiseCreateAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseCreateAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateAssetResponse(obj: IoTSiteWiseCreateAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'assetArn': obj.assetArn,
    'assetStatus': toJson_IoTSiteWiseAssetStatus(obj.assetStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateAssetModelRequest
 */
export interface IoTSiteWiseCreateAssetModelRequest {
  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelDescription
   */
  readonly assetModelDescription?: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelProperties
   */
  readonly assetModelProperties?: IoTSiteWiseAssetModelPropertyDefinition[];

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelHierarchies
   */
  readonly assetModelHierarchies?: IoTSiteWiseAssetModelHierarchyDefinition[];

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#assetModelCompositeModels
   */
  readonly assetModelCompositeModels?: IoTSiteWiseAssetModelCompositeModelDefinition[];

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseCreateAssetModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateAssetModelRequest(obj: IoTSiteWiseCreateAssetModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelName': obj.assetModelName,
    'assetModelDescription': obj.assetModelDescription,
    'assetModelProperties': obj.assetModelProperties?.map(y => toJson_IoTSiteWiseAssetModelPropertyDefinition(y)),
    'assetModelHierarchies': obj.assetModelHierarchies?.map(y => toJson_IoTSiteWiseAssetModelHierarchyDefinition(y)),
    'assetModelCompositeModels': obj.assetModelCompositeModels?.map(y => toJson_IoTSiteWiseAssetModelCompositeModelDefinition(y)),
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateAssetModelResponse
 */
export interface IoTSiteWiseCreateAssetModelResponse {
  /**
   * @schema IoTSiteWiseCreateAssetModelResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelResponse#assetModelArn
   */
  readonly assetModelArn: string;

  /**
   * @schema IoTSiteWiseCreateAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseCreateAssetModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateAssetModelResponse(obj: IoTSiteWiseCreateAssetModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelId': obj.assetModelId,
    'assetModelArn': obj.assetModelArn,
    'assetModelStatus': toJson_IoTSiteWiseAssetModelStatus(obj.assetModelStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateDashboardRequest
 */
export interface IoTSiteWiseCreateDashboardRequest {
  /**
   * @schema IoTSiteWiseCreateDashboardRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateDashboardRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseCreateDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateDashboardRequest(obj: IoTSiteWiseCreateDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'dashboardName': obj.dashboardName,
    'dashboardDescription': obj.dashboardDescription,
    'dashboardDefinition': obj.dashboardDefinition,
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateDashboardResponse
 */
export interface IoTSiteWiseCreateDashboardResponse {
  /**
   * @schema IoTSiteWiseCreateDashboardResponse#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseCreateDashboardResponse#dashboardArn
   */
  readonly dashboardArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseCreateDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateDashboardResponse(obj: IoTSiteWiseCreateDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dashboardId': obj.dashboardId,
    'dashboardArn': obj.dashboardArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateGatewayRequest
 */
export interface IoTSiteWiseCreateGatewayRequest {
  /**
   * @schema IoTSiteWiseCreateGatewayRequest#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema IoTSiteWiseCreateGatewayRequest#gatewayPlatform
   */
  readonly gatewayPlatform: IoTSiteWiseGatewayPlatform;

  /**
   * @schema IoTSiteWiseCreateGatewayRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseCreateGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateGatewayRequest(obj: IoTSiteWiseCreateGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayName': obj.gatewayName,
    'gatewayPlatform': toJson_IoTSiteWiseGatewayPlatform(obj.gatewayPlatform),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateGatewayResponse
 */
export interface IoTSiteWiseCreateGatewayResponse {
  /**
   * @schema IoTSiteWiseCreateGatewayResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseCreateGatewayResponse#gatewayArn
   */
  readonly gatewayArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseCreateGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateGatewayResponse(obj: IoTSiteWiseCreateGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'gatewayArn': obj.gatewayArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreatePortalRequest
 */
export interface IoTSiteWiseCreatePortalRequest {
  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalName
   */
  readonly portalName: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalLogoImageFile
   */
  readonly portalLogoImageFile?: IoTSiteWiseImageFile;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema IoTSiteWiseCreatePortalRequest#portalAuthMode
   */
  readonly portalAuthMode?: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#notificationSenderEmail
   */
  readonly notificationSenderEmail?: string;

  /**
   * @schema IoTSiteWiseCreatePortalRequest#alarms
   */
  readonly alarms?: IoTSiteWiseAlarms;

}

/**
 * Converts an object of type 'IoTSiteWiseCreatePortalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreatePortalRequest(obj: IoTSiteWiseCreatePortalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalName': obj.portalName,
    'portalDescription': obj.portalDescription,
    'portalContactEmail': obj.portalContactEmail,
    'clientToken': obj.clientToken,
    'portalLogoImageFile': toJson_IoTSiteWiseImageFile(obj.portalLogoImageFile),
    'roleArn': obj.roleArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'portalAuthMode': obj.portalAuthMode,
    'notificationSenderEmail': obj.notificationSenderEmail,
    'alarms': toJson_IoTSiteWiseAlarms(obj.alarms),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreatePortalResponse
 */
export interface IoTSiteWiseCreatePortalResponse {
  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalArn
   */
  readonly portalArn: string;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalStartUrl
   */
  readonly portalStartUrl: string;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

  /**
   * @schema IoTSiteWiseCreatePortalResponse#ssoApplicationId
   */
  readonly ssoApplicationId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseCreatePortalResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreatePortalResponse(obj: IoTSiteWiseCreatePortalResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
    'portalArn': obj.portalArn,
    'portalStartUrl': obj.portalStartUrl,
    'portalStatus': toJson_IoTSiteWisePortalStatus(obj.portalStatus),
    'ssoApplicationId': obj.ssoApplicationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateProjectRequest
 */
export interface IoTSiteWiseCreateProjectRequest {
  /**
   * @schema IoTSiteWiseCreateProjectRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseCreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateProjectRequest(obj: IoTSiteWiseCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
    'projectName': obj.projectName,
    'projectDescription': obj.projectDescription,
    'clientToken': obj.clientToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCreateProjectResponse
 */
export interface IoTSiteWiseCreateProjectResponse {
  /**
   * @schema IoTSiteWiseCreateProjectResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseCreateProjectResponse#projectArn
   */
  readonly projectArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseCreateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCreateProjectResponse(obj: IoTSiteWiseCreateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'projectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteAccessPolicyRequest
 */
export interface IoTSiteWiseDeleteAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseDeleteAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseDeleteAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteAccessPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteAccessPolicyRequest(obj: IoTSiteWiseDeleteAccessPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicyId': obj.accessPolicyId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteAccessPolicyResponse
 */
export interface IoTSiteWiseDeleteAccessPolicyResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseDeleteAccessPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteAccessPolicyResponse(obj: IoTSiteWiseDeleteAccessPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteAssetRequest
 */
export interface IoTSiteWiseDeleteAssetRequest {
  /**
   * @schema IoTSiteWiseDeleteAssetRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDeleteAssetRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteAssetRequest(obj: IoTSiteWiseDeleteAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteAssetResponse
 */
export interface IoTSiteWiseDeleteAssetResponse {
  /**
   * @schema IoTSiteWiseDeleteAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteAssetResponse(obj: IoTSiteWiseDeleteAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetStatus': toJson_IoTSiteWiseAssetStatus(obj.assetStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteAssetModelRequest
 */
export interface IoTSiteWiseDeleteAssetModelRequest {
  /**
   * @schema IoTSiteWiseDeleteAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDeleteAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteAssetModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteAssetModelRequest(obj: IoTSiteWiseDeleteAssetModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelId': obj.assetModelId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteAssetModelResponse
 */
export interface IoTSiteWiseDeleteAssetModelResponse {
  /**
   * @schema IoTSiteWiseDeleteAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteAssetModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteAssetModelResponse(obj: IoTSiteWiseDeleteAssetModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelStatus': toJson_IoTSiteWiseAssetModelStatus(obj.assetModelStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteDashboardRequest
 */
export interface IoTSiteWiseDeleteDashboardRequest {
  /**
   * @schema IoTSiteWiseDeleteDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseDeleteDashboardRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteDashboardRequest(obj: IoTSiteWiseDeleteDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dashboardId': obj.dashboardId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteDashboardResponse
 */
export interface IoTSiteWiseDeleteDashboardResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseDeleteDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteDashboardResponse(obj: IoTSiteWiseDeleteDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteGatewayRequest
 */
export interface IoTSiteWiseDeleteGatewayRequest {
  /**
   * @schema IoTSiteWiseDeleteGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteGatewayRequest(obj: IoTSiteWiseDeleteGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeletePortalRequest
 */
export interface IoTSiteWiseDeletePortalRequest {
  /**
   * @schema IoTSiteWiseDeletePortalRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseDeletePortalRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeletePortalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeletePortalRequest(obj: IoTSiteWiseDeletePortalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeletePortalResponse
 */
export interface IoTSiteWiseDeletePortalResponse {
  /**
   * @schema IoTSiteWiseDeletePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseDeletePortalResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeletePortalResponse(obj: IoTSiteWiseDeletePortalResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalStatus': toJson_IoTSiteWisePortalStatus(obj.portalStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteProjectRequest
 */
export interface IoTSiteWiseDeleteProjectRequest {
  /**
   * @schema IoTSiteWiseDeleteProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseDeleteProjectRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteProjectRequest(obj: IoTSiteWiseDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDeleteProjectResponse
 */
export interface IoTSiteWiseDeleteProjectResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseDeleteProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDeleteProjectResponse(obj: IoTSiteWiseDeleteProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAccessPolicyRequest
 */
export interface IoTSiteWiseDescribeAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseDescribeAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAccessPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAccessPolicyRequest(obj: IoTSiteWiseDescribeAccessPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicyId': obj.accessPolicyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAccessPolicyResponse
 */
export interface IoTSiteWiseDescribeAccessPolicyResponse {
  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyArn
   */
  readonly accessPolicyArn: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyResource
   */
  readonly accessPolicyResource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyCreationDate
   */
  readonly accessPolicyCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeAccessPolicyResponse#accessPolicyLastUpdateDate
   */
  readonly accessPolicyLastUpdateDate: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAccessPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAccessPolicyResponse(obj: IoTSiteWiseDescribeAccessPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicyId': obj.accessPolicyId,
    'accessPolicyArn': obj.accessPolicyArn,
    'accessPolicyIdentity': toJson_IoTSiteWiseIdentity(obj.accessPolicyIdentity),
    'accessPolicyResource': toJson_IoTSiteWiseResource(obj.accessPolicyResource),
    'accessPolicyPermission': obj.accessPolicyPermission,
    'accessPolicyCreationDate': obj.accessPolicyCreationDate,
    'accessPolicyLastUpdateDate': obj.accessPolicyLastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAssetRequest
 */
export interface IoTSiteWiseDescribeAssetRequest {
  /**
   * @schema IoTSiteWiseDescribeAssetRequest#assetId
   */
  readonly assetId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAssetRequest(obj: IoTSiteWiseDescribeAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAssetResponse
 */
export interface IoTSiteWiseDescribeAssetResponse {
  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetArn
   */
  readonly assetArn: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetProperties
   */
  readonly assetProperties: IoTSiteWiseAssetProperty[];

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetHierarchies
   */
  readonly assetHierarchies: IoTSiteWiseAssetHierarchy[];

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetCompositeModels
   */
  readonly assetCompositeModels?: IoTSiteWiseAssetCompositeModel[];

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetCreationDate
   */
  readonly assetCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetLastUpdateDate
   */
  readonly assetLastUpdateDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAssetResponse(obj: IoTSiteWiseDescribeAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'assetArn': obj.assetArn,
    'assetName': obj.assetName,
    'assetModelId': obj.assetModelId,
    'assetProperties': obj.assetProperties?.map(y => toJson_IoTSiteWiseAssetProperty(y)),
    'assetHierarchies': obj.assetHierarchies?.map(y => toJson_IoTSiteWiseAssetHierarchy(y)),
    'assetCompositeModels': obj.assetCompositeModels?.map(y => toJson_IoTSiteWiseAssetCompositeModel(y)),
    'assetCreationDate': obj.assetCreationDate,
    'assetLastUpdateDate': obj.assetLastUpdateDate,
    'assetStatus': toJson_IoTSiteWiseAssetStatus(obj.assetStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAssetModelRequest
 */
export interface IoTSiteWiseDescribeAssetModelRequest {
  /**
   * @schema IoTSiteWiseDescribeAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAssetModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAssetModelRequest(obj: IoTSiteWiseDescribeAssetModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelId': obj.assetModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAssetModelResponse
 */
export interface IoTSiteWiseDescribeAssetModelResponse {
  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelArn
   */
  readonly assetModelArn: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelDescription
   */
  readonly assetModelDescription: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelProperties
   */
  readonly assetModelProperties: IoTSiteWiseAssetModelProperty[];

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelHierarchies
   */
  readonly assetModelHierarchies: IoTSiteWiseAssetModelHierarchy[];

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelCompositeModels
   */
  readonly assetModelCompositeModels?: IoTSiteWiseAssetModelCompositeModel[];

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelCreationDate
   */
  readonly assetModelCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelLastUpdateDate
   */
  readonly assetModelLastUpdateDate: string;

  /**
   * @schema IoTSiteWiseDescribeAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAssetModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAssetModelResponse(obj: IoTSiteWiseDescribeAssetModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelId': obj.assetModelId,
    'assetModelArn': obj.assetModelArn,
    'assetModelName': obj.assetModelName,
    'assetModelDescription': obj.assetModelDescription,
    'assetModelProperties': obj.assetModelProperties?.map(y => toJson_IoTSiteWiseAssetModelProperty(y)),
    'assetModelHierarchies': obj.assetModelHierarchies?.map(y => toJson_IoTSiteWiseAssetModelHierarchy(y)),
    'assetModelCompositeModels': obj.assetModelCompositeModels?.map(y => toJson_IoTSiteWiseAssetModelCompositeModel(y)),
    'assetModelCreationDate': obj.assetModelCreationDate,
    'assetModelLastUpdateDate': obj.assetModelLastUpdateDate,
    'assetModelStatus': toJson_IoTSiteWiseAssetModelStatus(obj.assetModelStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAssetPropertyRequest
 */
export interface IoTSiteWiseDescribeAssetPropertyRequest {
  /**
   * @schema IoTSiteWiseDescribeAssetPropertyRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyRequest#propertyId
   */
  readonly propertyId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAssetPropertyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAssetPropertyRequest(obj: IoTSiteWiseDescribeAssetPropertyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeAssetPropertyResponse
 */
export interface IoTSiteWiseDescribeAssetPropertyResponse {
  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#assetProperty
   */
  readonly assetProperty?: IoTSiteWiseProperty;

  /**
   * @schema IoTSiteWiseDescribeAssetPropertyResponse#compositeModel
   */
  readonly compositeModel?: IoTSiteWiseCompositeModelProperty;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeAssetPropertyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeAssetPropertyResponse(obj: IoTSiteWiseDescribeAssetPropertyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'assetName': obj.assetName,
    'assetModelId': obj.assetModelId,
    'assetProperty': toJson_IoTSiteWiseProperty(obj.assetProperty),
    'compositeModel': toJson_IoTSiteWiseCompositeModelProperty(obj.compositeModel),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeDashboardRequest
 */
export interface IoTSiteWiseDescribeDashboardRequest {
  /**
   * @schema IoTSiteWiseDescribeDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeDashboardRequest(obj: IoTSiteWiseDescribeDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dashboardId': obj.dashboardId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeDashboardResponse
 */
export interface IoTSiteWiseDescribeDashboardResponse {
  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardArn
   */
  readonly dashboardArn: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardCreationDate
   */
  readonly dashboardCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeDashboardResponse#dashboardLastUpdateDate
   */
  readonly dashboardLastUpdateDate: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeDashboardResponse(obj: IoTSiteWiseDescribeDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dashboardId': obj.dashboardId,
    'dashboardArn': obj.dashboardArn,
    'dashboardName': obj.dashboardName,
    'projectId': obj.projectId,
    'dashboardDescription': obj.dashboardDescription,
    'dashboardDefinition': obj.dashboardDefinition,
    'dashboardCreationDate': obj.dashboardCreationDate,
    'dashboardLastUpdateDate': obj.dashboardLastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest
 */
export interface IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest {
}

/**
 * Converts an object of type 'IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest(obj: IoTSiteWiseDescribeDefaultEncryptionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse
 */
export interface IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse {
  /**
   * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: IoTSiteWiseConfigurationStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse(obj: IoTSiteWiseDescribeDefaultEncryptionConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionType': obj.encryptionType,
    'kmsKeyArn': obj.kmsKeyArn,
    'configurationStatus': toJson_IoTSiteWiseConfigurationStatus(obj.configurationStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeGatewayRequest
 */
export interface IoTSiteWiseDescribeGatewayRequest {
  /**
   * @schema IoTSiteWiseDescribeGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeGatewayRequest(obj: IoTSiteWiseDescribeGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeGatewayResponse
 */
export interface IoTSiteWiseDescribeGatewayResponse {
  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayArn
   */
  readonly gatewayArn: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayPlatform
   */
  readonly gatewayPlatform?: IoTSiteWiseGatewayPlatform;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#gatewayCapabilitySummaries
   */
  readonly gatewayCapabilitySummaries: IoTSiteWiseGatewayCapabilitySummary[];

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayResponse#lastUpdateDate
   */
  readonly lastUpdateDate: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeGatewayResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeGatewayResponse(obj: IoTSiteWiseDescribeGatewayResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'gatewayName': obj.gatewayName,
    'gatewayArn': obj.gatewayArn,
    'gatewayPlatform': toJson_IoTSiteWiseGatewayPlatform(obj.gatewayPlatform),
    'gatewayCapabilitySummaries': obj.gatewayCapabilitySummaries?.map(y => toJson_IoTSiteWiseGatewayCapabilitySummary(y)),
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest
 */
export interface IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest {
  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest#capabilityNamespace
   */
  readonly capabilityNamespace: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest(obj: IoTSiteWiseDescribeGatewayCapabilityConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'capabilityNamespace': obj.capabilityNamespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse
 */
export interface IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse {
  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#capabilityConfiguration
   */
  readonly capabilityConfiguration: string;

  /**
   * @schema IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse(obj: IoTSiteWiseDescribeGatewayCapabilityConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'capabilityNamespace': obj.capabilityNamespace,
    'capabilityConfiguration': obj.capabilityConfiguration,
    'capabilitySyncStatus': obj.capabilitySyncStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeLoggingOptionsRequest
 */
export interface IoTSiteWiseDescribeLoggingOptionsRequest {
}

/**
 * Converts an object of type 'IoTSiteWiseDescribeLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeLoggingOptionsRequest(obj: IoTSiteWiseDescribeLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeLoggingOptionsResponse
 */
export interface IoTSiteWiseDescribeLoggingOptionsResponse {
  /**
   * @schema IoTSiteWiseDescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions: IoTSiteWiseLoggingOptions;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeLoggingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeLoggingOptionsResponse(obj: IoTSiteWiseDescribeLoggingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptions': toJson_IoTSiteWiseLoggingOptions(obj.loggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribePortalRequest
 */
export interface IoTSiteWiseDescribePortalRequest {
  /**
   * @schema IoTSiteWiseDescribePortalRequest#portalId
   */
  readonly portalId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribePortalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribePortalRequest(obj: IoTSiteWiseDescribePortalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribePortalResponse
 */
export interface IoTSiteWiseDescribePortalResponse {
  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalArn
   */
  readonly portalArn: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalName
   */
  readonly portalName: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalClientId
   */
  readonly portalClientId: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalStartUrl
   */
  readonly portalStartUrl: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalCreationDate
   */
  readonly portalCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalLastUpdateDate
   */
  readonly portalLastUpdateDate: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalLogoImageLocation
   */
  readonly portalLogoImageLocation?: IoTSiteWiseImageLocation;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#portalAuthMode
   */
  readonly portalAuthMode?: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#notificationSenderEmail
   */
  readonly notificationSenderEmail?: string;

  /**
   * @schema IoTSiteWiseDescribePortalResponse#alarms
   */
  readonly alarms?: IoTSiteWiseAlarms;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribePortalResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribePortalResponse(obj: IoTSiteWiseDescribePortalResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
    'portalArn': obj.portalArn,
    'portalName': obj.portalName,
    'portalDescription': obj.portalDescription,
    'portalClientId': obj.portalClientId,
    'portalStartUrl': obj.portalStartUrl,
    'portalContactEmail': obj.portalContactEmail,
    'portalStatus': toJson_IoTSiteWisePortalStatus(obj.portalStatus),
    'portalCreationDate': obj.portalCreationDate,
    'portalLastUpdateDate': obj.portalLastUpdateDate,
    'portalLogoImageLocation': toJson_IoTSiteWiseImageLocation(obj.portalLogoImageLocation),
    'roleArn': obj.roleArn,
    'portalAuthMode': obj.portalAuthMode,
    'notificationSenderEmail': obj.notificationSenderEmail,
    'alarms': toJson_IoTSiteWiseAlarms(obj.alarms),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeProjectRequest
 */
export interface IoTSiteWiseDescribeProjectRequest {
  /**
   * @schema IoTSiteWiseDescribeProjectRequest#projectId
   */
  readonly projectId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeProjectRequest(obj: IoTSiteWiseDescribeProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeProjectResponse
 */
export interface IoTSiteWiseDescribeProjectResponse {
  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectArn
   */
  readonly projectArn: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectCreationDate
   */
  readonly projectCreationDate: string;

  /**
   * @schema IoTSiteWiseDescribeProjectResponse#projectLastUpdateDate
   */
  readonly projectLastUpdateDate: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeProjectResponse(obj: IoTSiteWiseDescribeProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'projectArn': obj.projectArn,
    'projectName': obj.projectName,
    'portalId': obj.portalId,
    'projectDescription': obj.projectDescription,
    'projectCreationDate': obj.projectCreationDate,
    'projectLastUpdateDate': obj.projectLastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeStorageConfigurationRequest
 */
export interface IoTSiteWiseDescribeStorageConfigurationRequest {
}

/**
 * Converts an object of type 'IoTSiteWiseDescribeStorageConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeStorageConfigurationRequest(obj: IoTSiteWiseDescribeStorageConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDescribeStorageConfigurationResponse
 */
export interface IoTSiteWiseDescribeStorageConfigurationResponse {
  /**
   * @schema IoTSiteWiseDescribeStorageConfigurationResponse#storageType
   */
  readonly storageType: string;

  /**
   * @schema IoTSiteWiseDescribeStorageConfigurationResponse#multiLayerStorage
   */
  readonly multiLayerStorage?: IoTSiteWiseMultiLayerStorage;

  /**
   * @schema IoTSiteWiseDescribeStorageConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: IoTSiteWiseConfigurationStatus;

  /**
   * @schema IoTSiteWiseDescribeStorageConfigurationResponse#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDescribeStorageConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDescribeStorageConfigurationResponse(obj: IoTSiteWiseDescribeStorageConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'storageType': obj.storageType,
    'multiLayerStorage': toJson_IoTSiteWiseMultiLayerStorage(obj.multiLayerStorage),
    'configurationStatus': toJson_IoTSiteWiseConfigurationStatus(obj.configurationStatus),
    'lastUpdateDate': obj.lastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDisassociateAssetsRequest
 */
export interface IoTSiteWiseDisassociateAssetsRequest {
  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#hierarchyId
   */
  readonly hierarchyId: string;

  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#childAssetId
   */
  readonly childAssetId: string;

  /**
   * @schema IoTSiteWiseDisassociateAssetsRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDisassociateAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDisassociateAssetsRequest(obj: IoTSiteWiseDisassociateAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'hierarchyId': obj.hierarchyId,
    'childAssetId': obj.childAssetId,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest
 */
export interface IoTSiteWiseGetAssetPropertyAggregatesRequest {
  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#aggregateTypes
   */
  readonly aggregateTypes: string[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#resolution
   */
  readonly resolution: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#qualities
   */
  readonly qualities?: string[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#startDate
   */
  readonly startDate: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#endDate
   */
  readonly endDate: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#timeOrdering
   */
  readonly timeOrdering?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseGetAssetPropertyAggregatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetAssetPropertyAggregatesRequest(obj: IoTSiteWiseGetAssetPropertyAggregatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'aggregateTypes': obj.aggregateTypes?.map(y => y),
    'resolution': obj.resolution,
    'qualities': obj.qualities?.map(y => y),
    'startDate': obj.startDate,
    'endDate': obj.endDate,
    'timeOrdering': obj.timeOrdering,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetAssetPropertyAggregatesResponse
 */
export interface IoTSiteWiseGetAssetPropertyAggregatesResponse {
  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesResponse#aggregatedValues
   */
  readonly aggregatedValues: IoTSiteWiseAggregatedValue[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyAggregatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGetAssetPropertyAggregatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetAssetPropertyAggregatesResponse(obj: IoTSiteWiseGetAssetPropertyAggregatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'aggregatedValues': obj.aggregatedValues?.map(y => toJson_IoTSiteWiseAggregatedValue(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetAssetPropertyValueRequest
 */
export interface IoTSiteWiseGetAssetPropertyValueRequest {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueRequest#propertyAlias
   */
  readonly propertyAlias?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGetAssetPropertyValueRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetAssetPropertyValueRequest(obj: IoTSiteWiseGetAssetPropertyValueRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetAssetPropertyValueResponse
 */
export interface IoTSiteWiseGetAssetPropertyValueResponse {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueResponse#propertyValue
   */
  readonly propertyValue?: IoTSiteWiseAssetPropertyValue;

}

/**
 * Converts an object of type 'IoTSiteWiseGetAssetPropertyValueResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetAssetPropertyValueResponse(obj: IoTSiteWiseGetAssetPropertyValueResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'propertyValue': toJson_IoTSiteWiseAssetPropertyValue(obj.propertyValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest
 */
export interface IoTSiteWiseGetAssetPropertyValueHistoryRequest {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#startDate
   */
  readonly startDate?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#endDate
   */
  readonly endDate?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#qualities
   */
  readonly qualities?: string[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#timeOrdering
   */
  readonly timeOrdering?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseGetAssetPropertyValueHistoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetAssetPropertyValueHistoryRequest(obj: IoTSiteWiseGetAssetPropertyValueHistoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'startDate': obj.startDate,
    'endDate': obj.endDate,
    'qualities': obj.qualities?.map(y => y),
    'timeOrdering': obj.timeOrdering,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetAssetPropertyValueHistoryResponse
 */
export interface IoTSiteWiseGetAssetPropertyValueHistoryResponse {
  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryResponse#assetPropertyValueHistory
   */
  readonly assetPropertyValueHistory: IoTSiteWiseAssetPropertyValue[];

  /**
   * @schema IoTSiteWiseGetAssetPropertyValueHistoryResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGetAssetPropertyValueHistoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetAssetPropertyValueHistoryResponse(obj: IoTSiteWiseGetAssetPropertyValueHistoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetPropertyValueHistory': obj.assetPropertyValueHistory?.map(y => toJson_IoTSiteWiseAssetPropertyValue(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest
 */
export interface IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest {
  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#startTimeInSeconds
   */
  readonly startTimeInSeconds: number;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#startTimeOffsetInNanos
   */
  readonly startTimeOffsetInNanos?: number;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#endTimeInSeconds
   */
  readonly endTimeInSeconds: number;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#endTimeOffsetInNanos
   */
  readonly endTimeOffsetInNanos?: number;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#quality
   */
  readonly quality: string;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#intervalInSeconds
   */
  readonly intervalInSeconds: number;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest(obj: IoTSiteWiseGetInterpolatedAssetPropertyValuesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'startTimeInSeconds': obj.startTimeInSeconds,
    'startTimeOffsetInNanos': obj.startTimeOffsetInNanos,
    'endTimeInSeconds': obj.endTimeInSeconds,
    'endTimeOffsetInNanos': obj.endTimeOffsetInNanos,
    'quality': obj.quality,
    'intervalInSeconds': obj.intervalInSeconds,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse
 */
export interface IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse {
  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse#interpolatedAssetPropertyValues
   */
  readonly interpolatedAssetPropertyValues: IoTSiteWiseInterpolatedAssetPropertyValue[];

  /**
   * @schema IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse(obj: IoTSiteWiseGetInterpolatedAssetPropertyValuesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interpolatedAssetPropertyValues': obj.interpolatedAssetPropertyValues?.map(y => toJson_IoTSiteWiseInterpolatedAssetPropertyValue(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAccessPoliciesRequest
 */
export interface IoTSiteWiseListAccessPoliciesRequest {
  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#identityType
   */
  readonly identityType?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#identityId
   */
  readonly identityId?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#resourceType
   */
  readonly resourceType?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#resourceId
   */
  readonly resourceId?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#iamArn
   */
  readonly iamArn?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAccessPoliciesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListAccessPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAccessPoliciesRequest(obj: IoTSiteWiseListAccessPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityType': obj.identityType,
    'identityId': obj.identityId,
    'resourceType': obj.resourceType,
    'resourceId': obj.resourceId,
    'iamArn': obj.iamArn,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAccessPoliciesResponse
 */
export interface IoTSiteWiseListAccessPoliciesResponse {
  /**
   * @schema IoTSiteWiseListAccessPoliciesResponse#accessPolicySummaries
   */
  readonly accessPolicySummaries: IoTSiteWiseAccessPolicySummary[];

  /**
   * @schema IoTSiteWiseListAccessPoliciesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListAccessPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAccessPoliciesResponse(obj: IoTSiteWiseListAccessPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicySummaries': obj.accessPolicySummaries?.map(y => toJson_IoTSiteWiseAccessPolicySummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssetModelsRequest
 */
export interface IoTSiteWiseListAssetModelsRequest {
  /**
   * @schema IoTSiteWiseListAssetModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssetModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssetModelsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssetModelsRequest(obj: IoTSiteWiseListAssetModelsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTSiteWiseListAssetModelsResponse
 */
export interface IoTSiteWiseListAssetModelsResponse {
  /**
   * @schema IoTSiteWiseListAssetModelsResponse#assetModelSummaries
   */
  readonly assetModelSummaries: IoTSiteWiseAssetModelSummary[];

  /**
   * @schema IoTSiteWiseListAssetModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssetModelsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssetModelsResponse(obj: IoTSiteWiseListAssetModelsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelSummaries': obj.assetModelSummaries?.map(y => toJson_IoTSiteWiseAssetModelSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssetRelationshipsRequest
 */
export interface IoTSiteWiseListAssetRelationshipsRequest {
  /**
   * @schema IoTSiteWiseListAssetRelationshipsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseListAssetRelationshipsRequest#traversalType
   */
  readonly traversalType: string;

  /**
   * @schema IoTSiteWiseListAssetRelationshipsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssetRelationshipsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssetRelationshipsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssetRelationshipsRequest(obj: IoTSiteWiseListAssetRelationshipsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'traversalType': obj.traversalType,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssetRelationshipsResponse
 */
export interface IoTSiteWiseListAssetRelationshipsResponse {
  /**
   * @schema IoTSiteWiseListAssetRelationshipsResponse#assetRelationshipSummaries
   */
  readonly assetRelationshipSummaries: IoTSiteWiseAssetRelationshipSummary[];

  /**
   * @schema IoTSiteWiseListAssetRelationshipsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssetRelationshipsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssetRelationshipsResponse(obj: IoTSiteWiseListAssetRelationshipsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetRelationshipSummaries': obj.assetRelationshipSummaries?.map(y => toJson_IoTSiteWiseAssetRelationshipSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssetsRequest
 */
export interface IoTSiteWiseListAssetsRequest {
  /**
   * @schema IoTSiteWiseListAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssetsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTSiteWiseListAssetsRequest#assetModelId
   */
  readonly assetModelId?: string;

  /**
   * @schema IoTSiteWiseListAssetsRequest#filter
   */
  readonly filter?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssetsRequest(obj: IoTSiteWiseListAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
    'assetModelId': obj.assetModelId,
    'filter': obj.filter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssetsResponse
 */
export interface IoTSiteWiseListAssetsResponse {
  /**
   * @schema IoTSiteWiseListAssetsResponse#assetSummaries
   */
  readonly assetSummaries: IoTSiteWiseAssetSummary[];

  /**
   * @schema IoTSiteWiseListAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssetsResponse(obj: IoTSiteWiseListAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetSummaries': obj.assetSummaries?.map(y => toJson_IoTSiteWiseAssetSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssociatedAssetsRequest
 */
export interface IoTSiteWiseListAssociatedAssetsRequest {
  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#hierarchyId
   */
  readonly hierarchyId?: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#traversalDirection
   */
  readonly traversalDirection?: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListAssociatedAssetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssociatedAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssociatedAssetsRequest(obj: IoTSiteWiseListAssociatedAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'hierarchyId': obj.hierarchyId,
    'traversalDirection': obj.traversalDirection,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListAssociatedAssetsResponse
 */
export interface IoTSiteWiseListAssociatedAssetsResponse {
  /**
   * @schema IoTSiteWiseListAssociatedAssetsResponse#assetSummaries
   */
  readonly assetSummaries: IoTSiteWiseAssociatedAssetsSummary[];

  /**
   * @schema IoTSiteWiseListAssociatedAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListAssociatedAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListAssociatedAssetsResponse(obj: IoTSiteWiseListAssociatedAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetSummaries': obj.assetSummaries?.map(y => toJson_IoTSiteWiseAssociatedAssetsSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListDashboardsRequest
 */
export interface IoTSiteWiseListDashboardsRequest {
  /**
   * @schema IoTSiteWiseListDashboardsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseListDashboardsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListDashboardsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListDashboardsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListDashboardsRequest(obj: IoTSiteWiseListDashboardsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListDashboardsResponse
 */
export interface IoTSiteWiseListDashboardsResponse {
  /**
   * @schema IoTSiteWiseListDashboardsResponse#dashboardSummaries
   */
  readonly dashboardSummaries: IoTSiteWiseDashboardSummary[];

  /**
   * @schema IoTSiteWiseListDashboardsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListDashboardsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListDashboardsResponse(obj: IoTSiteWiseListDashboardsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dashboardSummaries': obj.dashboardSummaries?.map(y => toJson_IoTSiteWiseDashboardSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListGatewaysRequest
 */
export interface IoTSiteWiseListGatewaysRequest {
  /**
   * @schema IoTSiteWiseListGatewaysRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListGatewaysRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListGatewaysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListGatewaysRequest(obj: IoTSiteWiseListGatewaysRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTSiteWiseListGatewaysResponse
 */
export interface IoTSiteWiseListGatewaysResponse {
  /**
   * @schema IoTSiteWiseListGatewaysResponse#gatewaySummaries
   */
  readonly gatewaySummaries: IoTSiteWiseGatewaySummary[];

  /**
   * @schema IoTSiteWiseListGatewaysResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListGatewaysResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListGatewaysResponse(obj: IoTSiteWiseListGatewaysResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewaySummaries': obj.gatewaySummaries?.map(y => toJson_IoTSiteWiseGatewaySummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListPortalsRequest
 */
export interface IoTSiteWiseListPortalsRequest {
  /**
   * @schema IoTSiteWiseListPortalsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListPortalsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListPortalsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListPortalsRequest(obj: IoTSiteWiseListPortalsRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTSiteWiseListPortalsResponse
 */
export interface IoTSiteWiseListPortalsResponse {
  /**
   * @schema IoTSiteWiseListPortalsResponse#portalSummaries
   */
  readonly portalSummaries?: IoTSiteWisePortalSummary[];

  /**
   * @schema IoTSiteWiseListPortalsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListPortalsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListPortalsResponse(obj: IoTSiteWiseListPortalsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalSummaries': obj.portalSummaries?.map(y => toJson_IoTSiteWisePortalSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListProjectAssetsRequest
 */
export interface IoTSiteWiseListProjectAssetsRequest {
  /**
   * @schema IoTSiteWiseListProjectAssetsRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseListProjectAssetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListProjectAssetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListProjectAssetsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListProjectAssetsRequest(obj: IoTSiteWiseListProjectAssetsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListProjectAssetsResponse
 */
export interface IoTSiteWiseListProjectAssetsResponse {
  /**
   * @schema IoTSiteWiseListProjectAssetsResponse#assetIds
   */
  readonly assetIds: string[];

  /**
   * @schema IoTSiteWiseListProjectAssetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListProjectAssetsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListProjectAssetsResponse(obj: IoTSiteWiseListProjectAssetsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetIds': obj.assetIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListProjectsRequest
 */
export interface IoTSiteWiseListProjectsRequest {
  /**
   * @schema IoTSiteWiseListProjectsRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTSiteWiseListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListProjectsRequest(obj: IoTSiteWiseListProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListProjectsResponse
 */
export interface IoTSiteWiseListProjectsResponse {
  /**
   * @schema IoTSiteWiseListProjectsResponse#projectSummaries
   */
  readonly projectSummaries: IoTSiteWiseProjectSummary[];

  /**
   * @schema IoTSiteWiseListProjectsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListProjectsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListProjectsResponse(obj: IoTSiteWiseListProjectsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectSummaries': obj.projectSummaries?.map(y => toJson_IoTSiteWiseProjectSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListTagsForResourceRequest
 */
export interface IoTSiteWiseListTagsForResourceRequest {
  /**
   * @schema IoTSiteWiseListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListTagsForResourceRequest(obj: IoTSiteWiseListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseListTagsForResourceResponse
 */
export interface IoTSiteWiseListTagsForResourceResponse {
  /**
   * @schema IoTSiteWiseListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseListTagsForResourceResponse(obj: IoTSiteWiseListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutDefaultEncryptionConfigurationRequest
 */
export interface IoTSiteWisePutDefaultEncryptionConfigurationRequest {
  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationRequest#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationRequest#kmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'IoTSiteWisePutDefaultEncryptionConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutDefaultEncryptionConfigurationRequest(obj: IoTSiteWisePutDefaultEncryptionConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionType': obj.encryptionType,
    'kmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse
 */
export interface IoTSiteWisePutDefaultEncryptionConfigurationResponse {
  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse#encryptionType
   */
  readonly encryptionType: string;

  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema IoTSiteWisePutDefaultEncryptionConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: IoTSiteWiseConfigurationStatus;

}

/**
 * Converts an object of type 'IoTSiteWisePutDefaultEncryptionConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutDefaultEncryptionConfigurationResponse(obj: IoTSiteWisePutDefaultEncryptionConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'encryptionType': obj.encryptionType,
    'kmsKeyArn': obj.kmsKeyArn,
    'configurationStatus': toJson_IoTSiteWiseConfigurationStatus(obj.configurationStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutLoggingOptionsRequest
 */
export interface IoTSiteWisePutLoggingOptionsRequest {
  /**
   * @schema IoTSiteWisePutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: IoTSiteWiseLoggingOptions;

}

/**
 * Converts an object of type 'IoTSiteWisePutLoggingOptionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutLoggingOptionsRequest(obj: IoTSiteWisePutLoggingOptionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'loggingOptions': toJson_IoTSiteWiseLoggingOptions(obj.loggingOptions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutLoggingOptionsResponse
 */
export interface IoTSiteWisePutLoggingOptionsResponse {
}

/**
 * Converts an object of type 'IoTSiteWisePutLoggingOptionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutLoggingOptionsResponse(obj: IoTSiteWisePutLoggingOptionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutStorageConfigurationRequest
 */
export interface IoTSiteWisePutStorageConfigurationRequest {
  /**
   * @schema IoTSiteWisePutStorageConfigurationRequest#storageType
   */
  readonly storageType: string;

  /**
   * @schema IoTSiteWisePutStorageConfigurationRequest#multiLayerStorage
   */
  readonly multiLayerStorage?: IoTSiteWiseMultiLayerStorage;

}

/**
 * Converts an object of type 'IoTSiteWisePutStorageConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutStorageConfigurationRequest(obj: IoTSiteWisePutStorageConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'storageType': obj.storageType,
    'multiLayerStorage': toJson_IoTSiteWiseMultiLayerStorage(obj.multiLayerStorage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutStorageConfigurationResponse
 */
export interface IoTSiteWisePutStorageConfigurationResponse {
  /**
   * @schema IoTSiteWisePutStorageConfigurationResponse#storageType
   */
  readonly storageType: string;

  /**
   * @schema IoTSiteWisePutStorageConfigurationResponse#multiLayerStorage
   */
  readonly multiLayerStorage?: IoTSiteWiseMultiLayerStorage;

  /**
   * @schema IoTSiteWisePutStorageConfigurationResponse#configurationStatus
   */
  readonly configurationStatus: IoTSiteWiseConfigurationStatus;

}

/**
 * Converts an object of type 'IoTSiteWisePutStorageConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutStorageConfigurationResponse(obj: IoTSiteWisePutStorageConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'storageType': obj.storageType,
    'multiLayerStorage': toJson_IoTSiteWiseMultiLayerStorage(obj.multiLayerStorage),
    'configurationStatus': toJson_IoTSiteWiseConfigurationStatus(obj.configurationStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseTagResourceRequest
 */
export interface IoTSiteWiseTagResourceRequest {
  /**
   * @schema IoTSiteWiseTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTSiteWiseTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'IoTSiteWiseTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseTagResourceRequest(obj: IoTSiteWiseTagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTSiteWiseTagResourceResponse
 */
export interface IoTSiteWiseTagResourceResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseTagResourceResponse(obj: IoTSiteWiseTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUntagResourceRequest
 */
export interface IoTSiteWiseUntagResourceRequest {
  /**
   * @schema IoTSiteWiseUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTSiteWiseUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'IoTSiteWiseUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUntagResourceRequest(obj: IoTSiteWiseUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema IoTSiteWiseUntagResourceResponse
 */
export interface IoTSiteWiseUntagResourceResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUntagResourceResponse(obj: IoTSiteWiseUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAccessPolicyRequest
 */
export interface IoTSiteWiseUpdateAccessPolicyRequest {
  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyId
   */
  readonly accessPolicyId: string;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyIdentity
   */
  readonly accessPolicyIdentity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyResource
   */
  readonly accessPolicyResource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#accessPolicyPermission
   */
  readonly accessPolicyPermission: string;

  /**
   * @schema IoTSiteWiseUpdateAccessPolicyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAccessPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAccessPolicyRequest(obj: IoTSiteWiseUpdateAccessPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessPolicyId': obj.accessPolicyId,
    'accessPolicyIdentity': toJson_IoTSiteWiseIdentity(obj.accessPolicyIdentity),
    'accessPolicyResource': toJson_IoTSiteWiseResource(obj.accessPolicyResource),
    'accessPolicyPermission': obj.accessPolicyPermission,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAccessPolicyResponse
 */
export interface IoTSiteWiseUpdateAccessPolicyResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAccessPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAccessPolicyResponse(obj: IoTSiteWiseUpdateAccessPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAssetRequest
 */
export interface IoTSiteWiseUpdateAssetRequest {
  /**
   * @schema IoTSiteWiseUpdateAssetRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetRequest#assetName
   */
  readonly assetName: string;

  /**
   * @schema IoTSiteWiseUpdateAssetRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAssetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAssetRequest(obj: IoTSiteWiseUpdateAssetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'assetName': obj.assetName,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAssetResponse
 */
export interface IoTSiteWiseUpdateAssetResponse {
  /**
   * @schema IoTSiteWiseUpdateAssetResponse#assetStatus
   */
  readonly assetStatus: IoTSiteWiseAssetStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAssetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAssetResponse(obj: IoTSiteWiseUpdateAssetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetStatus': toJson_IoTSiteWiseAssetStatus(obj.assetStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAssetModelRequest
 */
export interface IoTSiteWiseUpdateAssetModelRequest {
  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelName
   */
  readonly assetModelName: string;

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelDescription
   */
  readonly assetModelDescription?: string;

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelProperties
   */
  readonly assetModelProperties?: IoTSiteWiseAssetModelProperty[];

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelHierarchies
   */
  readonly assetModelHierarchies?: IoTSiteWiseAssetModelHierarchy[];

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#assetModelCompositeModels
   */
  readonly assetModelCompositeModels?: IoTSiteWiseAssetModelCompositeModel[];

  /**
   * @schema IoTSiteWiseUpdateAssetModelRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAssetModelRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAssetModelRequest(obj: IoTSiteWiseUpdateAssetModelRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelId': obj.assetModelId,
    'assetModelName': obj.assetModelName,
    'assetModelDescription': obj.assetModelDescription,
    'assetModelProperties': obj.assetModelProperties?.map(y => toJson_IoTSiteWiseAssetModelProperty(y)),
    'assetModelHierarchies': obj.assetModelHierarchies?.map(y => toJson_IoTSiteWiseAssetModelHierarchy(y)),
    'assetModelCompositeModels': obj.assetModelCompositeModels?.map(y => toJson_IoTSiteWiseAssetModelCompositeModel(y)),
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAssetModelResponse
 */
export interface IoTSiteWiseUpdateAssetModelResponse {
  /**
   * @schema IoTSiteWiseUpdateAssetModelResponse#assetModelStatus
   */
  readonly assetModelStatus: IoTSiteWiseAssetModelStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAssetModelResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAssetModelResponse(obj: IoTSiteWiseUpdateAssetModelResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetModelStatus': toJson_IoTSiteWiseAssetModelStatus(obj.assetModelStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateAssetPropertyRequest
 */
export interface IoTSiteWiseUpdateAssetPropertyRequest {
  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#propertyId
   */
  readonly propertyId: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#propertyNotificationState
   */
  readonly propertyNotificationState?: string;

  /**
   * @schema IoTSiteWiseUpdateAssetPropertyRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateAssetPropertyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateAssetPropertyRequest(obj: IoTSiteWiseUpdateAssetPropertyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'propertyNotificationState': obj.propertyNotificationState,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateDashboardRequest
 */
export interface IoTSiteWiseUpdateDashboardRequest {
  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardId
   */
  readonly dashboardId: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardName
   */
  readonly dashboardName: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardDescription
   */
  readonly dashboardDescription?: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#dashboardDefinition
   */
  readonly dashboardDefinition: string;

  /**
   * @schema IoTSiteWiseUpdateDashboardRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateDashboardRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateDashboardRequest(obj: IoTSiteWiseUpdateDashboardRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'dashboardId': obj.dashboardId,
    'dashboardName': obj.dashboardName,
    'dashboardDescription': obj.dashboardDescription,
    'dashboardDefinition': obj.dashboardDefinition,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateDashboardResponse
 */
export interface IoTSiteWiseUpdateDashboardResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseUpdateDashboardResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateDashboardResponse(obj: IoTSiteWiseUpdateDashboardResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateGatewayRequest
 */
export interface IoTSiteWiseUpdateGatewayRequest {
  /**
   * @schema IoTSiteWiseUpdateGatewayRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayRequest#gatewayName
   */
  readonly gatewayName: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateGatewayRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateGatewayRequest(obj: IoTSiteWiseUpdateGatewayRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'gatewayName': obj.gatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest
 */
export interface IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest {
  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest#capabilityConfiguration
   */
  readonly capabilityConfiguration: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest(obj: IoTSiteWiseUpdateGatewayCapabilityConfigurationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'capabilityNamespace': obj.capabilityNamespace,
    'capabilityConfiguration': obj.capabilityConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse
 */
export interface IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse {
  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse(obj: IoTSiteWiseUpdateGatewayCapabilityConfigurationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capabilityNamespace': obj.capabilityNamespace,
    'capabilitySyncStatus': obj.capabilitySyncStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdatePortalRequest
 */
export interface IoTSiteWiseUpdatePortalRequest {
  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalId
   */
  readonly portalId: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalName
   */
  readonly portalName: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalDescription
   */
  readonly portalDescription?: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalContactEmail
   */
  readonly portalContactEmail: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#portalLogoImage
   */
  readonly portalLogoImage?: IoTSiteWiseImage;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#notificationSenderEmail
   */
  readonly notificationSenderEmail?: string;

  /**
   * @schema IoTSiteWiseUpdatePortalRequest#alarms
   */
  readonly alarms?: IoTSiteWiseAlarms;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdatePortalRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdatePortalRequest(obj: IoTSiteWiseUpdatePortalRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalId': obj.portalId,
    'portalName': obj.portalName,
    'portalDescription': obj.portalDescription,
    'portalContactEmail': obj.portalContactEmail,
    'portalLogoImage': toJson_IoTSiteWiseImage(obj.portalLogoImage),
    'roleArn': obj.roleArn,
    'clientToken': obj.clientToken,
    'notificationSenderEmail': obj.notificationSenderEmail,
    'alarms': toJson_IoTSiteWiseAlarms(obj.alarms),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdatePortalResponse
 */
export interface IoTSiteWiseUpdatePortalResponse {
  /**
   * @schema IoTSiteWiseUpdatePortalResponse#portalStatus
   */
  readonly portalStatus: IoTSiteWisePortalStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdatePortalResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdatePortalResponse(obj: IoTSiteWiseUpdatePortalResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portalStatus': toJson_IoTSiteWisePortalStatus(obj.portalStatus),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateProjectRequest
 */
export interface IoTSiteWiseUpdateProjectRequest {
  /**
   * @schema IoTSiteWiseUpdateProjectRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema IoTSiteWiseUpdateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema IoTSiteWiseUpdateProjectRequest#projectDescription
   */
  readonly projectDescription?: string;

  /**
   * @schema IoTSiteWiseUpdateProjectRequest#clientToken
   */
  readonly clientToken?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUpdateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateProjectRequest(obj: IoTSiteWiseUpdateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'projectName': obj.projectName,
    'projectDescription': obj.projectDescription,
    'clientToken': obj.clientToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUpdateProjectResponse
 */
export interface IoTSiteWiseUpdateProjectResponse {
}

/**
 * Converts an object of type 'IoTSiteWiseUpdateProjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUpdateProjectResponse(obj: IoTSiteWiseUpdateProjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetErrorDetails
 */
export interface IoTSiteWiseAssetErrorDetails {
  /**
   * @schema IoTSiteWiseAssetErrorDetails#assetId
   */
  readonly assetId: string;

  /**
   * @schema IoTSiteWiseAssetErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseAssetErrorDetails#message
   */
  readonly message: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetErrorDetails(obj: IoTSiteWiseAssetErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'assetId': obj.assetId,
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePutAssetPropertyValueEntry
 */
export interface IoTSiteWisePutAssetPropertyValueEntry {
  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#entryId
   */
  readonly entryId: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTSiteWisePutAssetPropertyValueEntry#propertyValues
   */
  readonly propertyValues: IoTSiteWiseAssetPropertyValue[];

}

/**
 * Converts an object of type 'IoTSiteWisePutAssetPropertyValueEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePutAssetPropertyValueEntry(obj: IoTSiteWisePutAssetPropertyValueEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryId': obj.entryId,
    'assetId': obj.assetId,
    'propertyId': obj.propertyId,
    'propertyAlias': obj.propertyAlias,
    'propertyValues': obj.propertyValues?.map(y => toJson_IoTSiteWiseAssetPropertyValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyErrorEntry
 */
export interface IoTSiteWiseBatchPutAssetPropertyErrorEntry {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyErrorEntry#entryId
   */
  readonly entryId: string;

  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyErrorEntry#errors
   */
  readonly errors: IoTSiteWiseBatchPutAssetPropertyError[];

}

/**
 * Converts an object of type 'IoTSiteWiseBatchPutAssetPropertyErrorEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchPutAssetPropertyErrorEntry(obj: IoTSiteWiseBatchPutAssetPropertyErrorEntry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'entryId': obj.entryId,
    'errors': obj.errors?.map(y => toJson_IoTSiteWiseBatchPutAssetPropertyError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseIdentity
 */
export interface IoTSiteWiseIdentity {
  /**
   * @schema IoTSiteWiseIdentity#user
   */
  readonly user?: IoTSiteWiseUserIdentity;

  /**
   * @schema IoTSiteWiseIdentity#group
   */
  readonly group?: IoTSiteWiseGroupIdentity;

  /**
   * @schema IoTSiteWiseIdentity#iamUser
   */
  readonly iamUser?: IoTSiteWiseIamUserIdentity;

  /**
   * @schema IoTSiteWiseIdentity#iamRole
   */
  readonly iamRole?: IoTSiteWiseIamRoleIdentity;

}

/**
 * Converts an object of type 'IoTSiteWiseIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseIdentity(obj: IoTSiteWiseIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'user': toJson_IoTSiteWiseUserIdentity(obj.user),
    'group': toJson_IoTSiteWiseGroupIdentity(obj.group),
    'iamUser': toJson_IoTSiteWiseIamUserIdentity(obj.iamUser),
    'iamRole': toJson_IoTSiteWiseIamRoleIdentity(obj.iamRole),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseResource
 */
export interface IoTSiteWiseResource {
  /**
   * @schema IoTSiteWiseResource#portal
   */
  readonly portal?: IoTSiteWisePortalResource;

  /**
   * @schema IoTSiteWiseResource#project
   */
  readonly project?: IoTSiteWiseProjectResource;

}

/**
 * Converts an object of type 'IoTSiteWiseResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseResource(obj: IoTSiteWiseResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portal': toJson_IoTSiteWisePortalResource(obj.portal),
    'project': toJson_IoTSiteWiseProjectResource(obj.project),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetStatus
 */
export interface IoTSiteWiseAssetStatus {
  /**
   * @schema IoTSiteWiseAssetStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWiseAssetStatus#error
   */
  readonly error?: IoTSiteWiseErrorDetails;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetStatus(obj: IoTSiteWiseAssetStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
    'error': toJson_IoTSiteWiseErrorDetails(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelPropertyDefinition
 */
export interface IoTSiteWiseAssetModelPropertyDefinition {
  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#dataTypeSpec
   */
  readonly dataTypeSpec?: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#unit
   */
  readonly unit?: string;

  /**
   * @schema IoTSiteWiseAssetModelPropertyDefinition#type
   */
  readonly type: IoTSiteWisePropertyType;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelPropertyDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelPropertyDefinition(obj: IoTSiteWiseAssetModelPropertyDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'dataType': obj.dataType,
    'dataTypeSpec': obj.dataTypeSpec,
    'unit': obj.unit,
    'type': toJson_IoTSiteWisePropertyType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelHierarchyDefinition
 */
export interface IoTSiteWiseAssetModelHierarchyDefinition {
  /**
   * @schema IoTSiteWiseAssetModelHierarchyDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelHierarchyDefinition#childAssetModelId
   */
  readonly childAssetModelId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelHierarchyDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelHierarchyDefinition(obj: IoTSiteWiseAssetModelHierarchyDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'childAssetModelId': obj.childAssetModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelCompositeModelDefinition
 */
export interface IoTSiteWiseAssetModelCompositeModelDefinition {
  /**
   * @schema IoTSiteWiseAssetModelCompositeModelDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelCompositeModelDefinition#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseAssetModelCompositeModelDefinition#type
   */
  readonly type: string;

  /**
   * @schema IoTSiteWiseAssetModelCompositeModelDefinition#properties
   */
  readonly properties?: IoTSiteWiseAssetModelPropertyDefinition[];

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelCompositeModelDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelCompositeModelDefinition(obj: IoTSiteWiseAssetModelCompositeModelDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'properties': obj.properties?.map(y => toJson_IoTSiteWiseAssetModelPropertyDefinition(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelStatus
 */
export interface IoTSiteWiseAssetModelStatus {
  /**
   * @schema IoTSiteWiseAssetModelStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWiseAssetModelStatus#error
   */
  readonly error?: IoTSiteWiseErrorDetails;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelStatus(obj: IoTSiteWiseAssetModelStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
    'error': toJson_IoTSiteWiseErrorDetails(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGatewayPlatform
 */
export interface IoTSiteWiseGatewayPlatform {
  /**
   * @schema IoTSiteWiseGatewayPlatform#greengrass
   */
  readonly greengrass?: IoTSiteWiseGreengrass;

  /**
   * @schema IoTSiteWiseGatewayPlatform#greengrassV2
   */
  readonly greengrassV2?: IoTSiteWiseGreengrassV2;

}

/**
 * Converts an object of type 'IoTSiteWiseGatewayPlatform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGatewayPlatform(obj: IoTSiteWiseGatewayPlatform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'greengrass': toJson_IoTSiteWiseGreengrass(obj.greengrass),
    'greengrassV2': toJson_IoTSiteWiseGreengrassV2(obj.greengrassV2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseImageFile
 */
export interface IoTSiteWiseImageFile {
  /**
   * @schema IoTSiteWiseImageFile#data
   */
  readonly data: any;

  /**
   * @schema IoTSiteWiseImageFile#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'IoTSiteWiseImageFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseImageFile(obj: IoTSiteWiseImageFile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'data': obj.data,
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAlarms
 */
export interface IoTSiteWiseAlarms {
  /**
   * @schema IoTSiteWiseAlarms#alarmRoleArn
   */
  readonly alarmRoleArn: string;

  /**
   * @schema IoTSiteWiseAlarms#notificationLambdaArn
   */
  readonly notificationLambdaArn?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAlarms' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAlarms(obj: IoTSiteWiseAlarms | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'alarmRoleArn': obj.alarmRoleArn,
    'notificationLambdaArn': obj.notificationLambdaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePortalStatus
 */
export interface IoTSiteWisePortalStatus {
  /**
   * @schema IoTSiteWisePortalStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWisePortalStatus#error
   */
  readonly error?: IoTSiteWiseMonitorErrorDetails;

}

/**
 * Converts an object of type 'IoTSiteWisePortalStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePortalStatus(obj: IoTSiteWisePortalStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
    'error': toJson_IoTSiteWiseMonitorErrorDetails(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetProperty
 */
export interface IoTSiteWiseAssetProperty {
  /**
   * @schema IoTSiteWiseAssetProperty#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssetProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetProperty#alias
   */
  readonly alias?: string;

  /**
   * @schema IoTSiteWiseAssetProperty#notification
   */
  readonly notification?: IoTSiteWisePropertyNotification;

  /**
   * @schema IoTSiteWiseAssetProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseAssetProperty#dataTypeSpec
   */
  readonly dataTypeSpec?: string;

  /**
   * @schema IoTSiteWiseAssetProperty#unit
   */
  readonly unit?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetProperty(obj: IoTSiteWiseAssetProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'alias': obj.alias,
    'notification': toJson_IoTSiteWisePropertyNotification(obj.notification),
    'dataType': obj.dataType,
    'dataTypeSpec': obj.dataTypeSpec,
    'unit': obj.unit,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetHierarchy
 */
export interface IoTSiteWiseAssetHierarchy {
  /**
   * @schema IoTSiteWiseAssetHierarchy#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseAssetHierarchy#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetHierarchy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetHierarchy(obj: IoTSiteWiseAssetHierarchy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetCompositeModel
 */
export interface IoTSiteWiseAssetCompositeModel {
  /**
   * @schema IoTSiteWiseAssetCompositeModel#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetCompositeModel#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseAssetCompositeModel#type
   */
  readonly type: string;

  /**
   * @schema IoTSiteWiseAssetCompositeModel#properties
   */
  readonly properties: IoTSiteWiseAssetProperty[];

}

/**
 * Converts an object of type 'IoTSiteWiseAssetCompositeModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetCompositeModel(obj: IoTSiteWiseAssetCompositeModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'properties': obj.properties?.map(y => toJson_IoTSiteWiseAssetProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelProperty
 */
export interface IoTSiteWiseAssetModelProperty {
  /**
   * @schema IoTSiteWiseAssetModelProperty#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#dataTypeSpec
   */
  readonly dataTypeSpec?: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#unit
   */
  readonly unit?: string;

  /**
   * @schema IoTSiteWiseAssetModelProperty#type
   */
  readonly type: IoTSiteWisePropertyType;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelProperty(obj: IoTSiteWiseAssetModelProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'dataType': obj.dataType,
    'dataTypeSpec': obj.dataTypeSpec,
    'unit': obj.unit,
    'type': toJson_IoTSiteWisePropertyType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelHierarchy
 */
export interface IoTSiteWiseAssetModelHierarchy {
  /**
   * @schema IoTSiteWiseAssetModelHierarchy#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseAssetModelHierarchy#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelHierarchy#childAssetModelId
   */
  readonly childAssetModelId: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelHierarchy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelHierarchy(obj: IoTSiteWiseAssetModelHierarchy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'childAssetModelId': obj.childAssetModelId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelCompositeModel
 */
export interface IoTSiteWiseAssetModelCompositeModel {
  /**
   * @schema IoTSiteWiseAssetModelCompositeModel#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelCompositeModel#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseAssetModelCompositeModel#type
   */
  readonly type: string;

  /**
   * @schema IoTSiteWiseAssetModelCompositeModel#properties
   */
  readonly properties?: IoTSiteWiseAssetModelProperty[];

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelCompositeModel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelCompositeModel(obj: IoTSiteWiseAssetModelCompositeModel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'properties': obj.properties?.map(y => toJson_IoTSiteWiseAssetModelProperty(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseProperty
 */
export interface IoTSiteWiseProperty {
  /**
   * @schema IoTSiteWiseProperty#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseProperty#alias
   */
  readonly alias?: string;

  /**
   * @schema IoTSiteWiseProperty#notification
   */
  readonly notification?: IoTSiteWisePropertyNotification;

  /**
   * @schema IoTSiteWiseProperty#dataType
   */
  readonly dataType: string;

  /**
   * @schema IoTSiteWiseProperty#unit
   */
  readonly unit?: string;

  /**
   * @schema IoTSiteWiseProperty#type
   */
  readonly type?: IoTSiteWisePropertyType;

}

/**
 * Converts an object of type 'IoTSiteWiseProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseProperty(obj: IoTSiteWiseProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'alias': obj.alias,
    'notification': toJson_IoTSiteWisePropertyNotification(obj.notification),
    'dataType': obj.dataType,
    'unit': obj.unit,
    'type': toJson_IoTSiteWisePropertyType(obj.type),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCompositeModelProperty
 */
export interface IoTSiteWiseCompositeModelProperty {
  /**
   * @schema IoTSiteWiseCompositeModelProperty#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseCompositeModelProperty#type
   */
  readonly type: string;

  /**
   * @schema IoTSiteWiseCompositeModelProperty#assetProperty
   */
  readonly assetProperty: IoTSiteWiseProperty;

}

/**
 * Converts an object of type 'IoTSiteWiseCompositeModelProperty' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCompositeModelProperty(obj: IoTSiteWiseCompositeModelProperty | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'type': obj.type,
    'assetProperty': toJson_IoTSiteWiseProperty(obj.assetProperty),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseConfigurationStatus
 */
export interface IoTSiteWiseConfigurationStatus {
  /**
   * @schema IoTSiteWiseConfigurationStatus#state
   */
  readonly state: string;

  /**
   * @schema IoTSiteWiseConfigurationStatus#error
   */
  readonly error?: IoTSiteWiseConfigurationErrorDetails;

}

/**
 * Converts an object of type 'IoTSiteWiseConfigurationStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseConfigurationStatus(obj: IoTSiteWiseConfigurationStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
    'error': toJson_IoTSiteWiseConfigurationErrorDetails(obj.error),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGatewayCapabilitySummary
 */
export interface IoTSiteWiseGatewayCapabilitySummary {
  /**
   * @schema IoTSiteWiseGatewayCapabilitySummary#capabilityNamespace
   */
  readonly capabilityNamespace: string;

  /**
   * @schema IoTSiteWiseGatewayCapabilitySummary#capabilitySyncStatus
   */
  readonly capabilitySyncStatus: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGatewayCapabilitySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGatewayCapabilitySummary(obj: IoTSiteWiseGatewayCapabilitySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'capabilityNamespace': obj.capabilityNamespace,
    'capabilitySyncStatus': obj.capabilitySyncStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseLoggingOptions
 */
export interface IoTSiteWiseLoggingOptions {
  /**
   * @schema IoTSiteWiseLoggingOptions#level
   */
  readonly level: string;

}

/**
 * Converts an object of type 'IoTSiteWiseLoggingOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseLoggingOptions(obj: IoTSiteWiseLoggingOptions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'level': obj.level,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseImageLocation
 */
export interface IoTSiteWiseImageLocation {
  /**
   * @schema IoTSiteWiseImageLocation#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseImageLocation#url
   */
  readonly url: string;

}

/**
 * Converts an object of type 'IoTSiteWiseImageLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseImageLocation(obj: IoTSiteWiseImageLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMultiLayerStorage
 */
export interface IoTSiteWiseMultiLayerStorage {
  /**
   * @schema IoTSiteWiseMultiLayerStorage#customerManagedS3Storage
   */
  readonly customerManagedS3Storage: IoTSiteWiseCustomerManagedS3Storage;

}

/**
 * Converts an object of type 'IoTSiteWiseMultiLayerStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMultiLayerStorage(obj: IoTSiteWiseMultiLayerStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'customerManagedS3Storage': toJson_IoTSiteWiseCustomerManagedS3Storage(obj.customerManagedS3Storage),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAggregatedValue
 */
export interface IoTSiteWiseAggregatedValue {
  /**
   * @schema IoTSiteWiseAggregatedValue#timestamp
   */
  readonly timestamp: string;

  /**
   * @schema IoTSiteWiseAggregatedValue#quality
   */
  readonly quality?: string;

  /**
   * @schema IoTSiteWiseAggregatedValue#value
   */
  readonly value: IoTSiteWiseAggregates;

}

/**
 * Converts an object of type 'IoTSiteWiseAggregatedValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAggregatedValue(obj: IoTSiteWiseAggregatedValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timestamp': obj.timestamp,
    'quality': obj.quality,
    'value': toJson_IoTSiteWiseAggregates(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetPropertyValue
 */
export interface IoTSiteWiseAssetPropertyValue {
  /**
   * @schema IoTSiteWiseAssetPropertyValue#value
   */
  readonly value: IoTSiteWiseVariant;

  /**
   * @schema IoTSiteWiseAssetPropertyValue#timestamp
   */
  readonly timestamp: IoTSiteWiseTimeInNanos;

  /**
   * @schema IoTSiteWiseAssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetPropertyValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetPropertyValue(obj: IoTSiteWiseAssetPropertyValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'value': toJson_IoTSiteWiseVariant(obj.value),
    'timestamp': toJson_IoTSiteWiseTimeInNanos(obj.timestamp),
    'quality': obj.quality,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseInterpolatedAssetPropertyValue
 */
export interface IoTSiteWiseInterpolatedAssetPropertyValue {
  /**
   * @schema IoTSiteWiseInterpolatedAssetPropertyValue#timestamp
   */
  readonly timestamp: IoTSiteWiseTimeInNanos;

  /**
   * @schema IoTSiteWiseInterpolatedAssetPropertyValue#value
   */
  readonly value: IoTSiteWiseVariant;

}

/**
 * Converts an object of type 'IoTSiteWiseInterpolatedAssetPropertyValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseInterpolatedAssetPropertyValue(obj: IoTSiteWiseInterpolatedAssetPropertyValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timestamp': toJson_IoTSiteWiseTimeInNanos(obj.timestamp),
    'value': toJson_IoTSiteWiseVariant(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAccessPolicySummary
 */
export interface IoTSiteWiseAccessPolicySummary {
  /**
   * @schema IoTSiteWiseAccessPolicySummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#identity
   */
  readonly identity: IoTSiteWiseIdentity;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#resource
   */
  readonly resource: IoTSiteWiseResource;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#permission
   */
  readonly permission: string;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWiseAccessPolicySummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAccessPolicySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAccessPolicySummary(obj: IoTSiteWiseAccessPolicySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'identity': toJson_IoTSiteWiseIdentity(obj.identity),
    'resource': toJson_IoTSiteWiseResource(obj.resource),
    'permission': obj.permission,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetModelSummary
 */
export interface IoTSiteWiseAssetModelSummary {
  /**
   * @schema IoTSiteWiseAssetModelSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#description
   */
  readonly description: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema IoTSiteWiseAssetModelSummary#status
   */
  readonly status: IoTSiteWiseAssetModelStatus;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetModelSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetModelSummary(obj: IoTSiteWiseAssetModelSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
    'status': toJson_IoTSiteWiseAssetModelStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetRelationshipSummary
 */
export interface IoTSiteWiseAssetRelationshipSummary {
  /**
   * @schema IoTSiteWiseAssetRelationshipSummary#hierarchyInfo
   */
  readonly hierarchyInfo?: IoTSiteWiseAssetHierarchyInfo;

  /**
   * @schema IoTSiteWiseAssetRelationshipSummary#relationshipType
   */
  readonly relationshipType: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetRelationshipSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetRelationshipSummary(obj: IoTSiteWiseAssetRelationshipSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hierarchyInfo': toJson_IoTSiteWiseAssetHierarchyInfo(obj.hierarchyInfo),
    'relationshipType': obj.relationshipType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetSummary
 */
export interface IoTSiteWiseAssetSummary {
  /**
   * @schema IoTSiteWiseAssetSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssetSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IoTSiteWiseAssetSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssetSummary#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseAssetSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseAssetSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema IoTSiteWiseAssetSummary#status
   */
  readonly status: IoTSiteWiseAssetStatus;

  /**
   * @schema IoTSiteWiseAssetSummary#hierarchies
   */
  readonly hierarchies: IoTSiteWiseAssetHierarchy[];

}

/**
 * Converts an object of type 'IoTSiteWiseAssetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetSummary(obj: IoTSiteWiseAssetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'assetModelId': obj.assetModelId,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
    'status': toJson_IoTSiteWiseAssetStatus(obj.status),
    'hierarchies': obj.hierarchies?.map(y => toJson_IoTSiteWiseAssetHierarchy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssociatedAssetsSummary
 */
export interface IoTSiteWiseAssociatedAssetsSummary {
  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#arn
   */
  readonly arn: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#assetModelId
   */
  readonly assetModelId: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#status
   */
  readonly status: IoTSiteWiseAssetStatus;

  /**
   * @schema IoTSiteWiseAssociatedAssetsSummary#hierarchies
   */
  readonly hierarchies: IoTSiteWiseAssetHierarchy[];

}

/**
 * Converts an object of type 'IoTSiteWiseAssociatedAssetsSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssociatedAssetsSummary(obj: IoTSiteWiseAssociatedAssetsSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'name': obj.name,
    'assetModelId': obj.assetModelId,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
    'status': toJson_IoTSiteWiseAssetStatus(obj.status),
    'hierarchies': obj.hierarchies?.map(y => toJson_IoTSiteWiseAssetHierarchy(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDashboardSummary
 */
export interface IoTSiteWiseDashboardSummary {
  /**
   * @schema IoTSiteWiseDashboardSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWiseDashboardSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDashboardSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDashboardSummary(obj: IoTSiteWiseDashboardSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGatewaySummary
 */
export interface IoTSiteWiseGatewaySummary {
  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayId
   */
  readonly gatewayId: string;

  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayName
   */
  readonly gatewayName: string;

  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayPlatform
   */
  readonly gatewayPlatform?: IoTSiteWiseGatewayPlatform;

  /**
   * @schema IoTSiteWiseGatewaySummary#gatewayCapabilitySummaries
   */
  readonly gatewayCapabilitySummaries?: IoTSiteWiseGatewayCapabilitySummary[];

  /**
   * @schema IoTSiteWiseGatewaySummary#creationDate
   */
  readonly creationDate: string;

  /**
   * @schema IoTSiteWiseGatewaySummary#lastUpdateDate
   */
  readonly lastUpdateDate: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGatewaySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGatewaySummary(obj: IoTSiteWiseGatewaySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayId': obj.gatewayId,
    'gatewayName': obj.gatewayName,
    'gatewayPlatform': toJson_IoTSiteWiseGatewayPlatform(obj.gatewayPlatform),
    'gatewayCapabilitySummaries': obj.gatewayCapabilitySummaries?.map(y => toJson_IoTSiteWiseGatewayCapabilitySummary(y)),
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePortalSummary
 */
export interface IoTSiteWisePortalSummary {
  /**
   * @schema IoTSiteWisePortalSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWisePortalSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWisePortalSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWisePortalSummary#startUrl
   */
  readonly startUrl: string;

  /**
   * @schema IoTSiteWisePortalSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWisePortalSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

  /**
   * @schema IoTSiteWisePortalSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTSiteWisePortalSummary#status
   */
  readonly status: IoTSiteWisePortalStatus;

}

/**
 * Converts an object of type 'IoTSiteWisePortalSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePortalSummary(obj: IoTSiteWisePortalSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'startUrl': obj.startUrl,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
    'roleArn': obj.roleArn,
    'status': toJson_IoTSiteWisePortalStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseProjectSummary
 */
export interface IoTSiteWiseProjectSummary {
  /**
   * @schema IoTSiteWiseProjectSummary#id
   */
  readonly id: string;

  /**
   * @schema IoTSiteWiseProjectSummary#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseProjectSummary#description
   */
  readonly description?: string;

  /**
   * @schema IoTSiteWiseProjectSummary#creationDate
   */
  readonly creationDate?: string;

  /**
   * @schema IoTSiteWiseProjectSummary#lastUpdateDate
   */
  readonly lastUpdateDate?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseProjectSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseProjectSummary(obj: IoTSiteWiseProjectSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
    'creationDate': obj.creationDate,
    'lastUpdateDate': obj.lastUpdateDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseImage
 */
export interface IoTSiteWiseImage {
  /**
   * @schema IoTSiteWiseImage#id
   */
  readonly id?: string;

  /**
   * @schema IoTSiteWiseImage#file
   */
  readonly file?: IoTSiteWiseImageFile;

}

/**
 * Converts an object of type 'IoTSiteWiseImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseImage(obj: IoTSiteWiseImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'file': toJson_IoTSiteWiseImageFile(obj.file),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseBatchPutAssetPropertyError
 */
export interface IoTSiteWiseBatchPutAssetPropertyError {
  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyError#errorCode
   */
  readonly errorCode: string;

  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyError#errorMessage
   */
  readonly errorMessage: string;

  /**
   * @schema IoTSiteWiseBatchPutAssetPropertyError#timestamps
   */
  readonly timestamps: IoTSiteWiseTimeInNanos[];

}

/**
 * Converts an object of type 'IoTSiteWiseBatchPutAssetPropertyError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseBatchPutAssetPropertyError(obj: IoTSiteWiseBatchPutAssetPropertyError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
    'timestamps': obj.timestamps?.map(y => toJson_IoTSiteWiseTimeInNanos(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseUserIdentity
 */
export interface IoTSiteWiseUserIdentity {
  /**
   * @schema IoTSiteWiseUserIdentity#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTSiteWiseUserIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseUserIdentity(obj: IoTSiteWiseUserIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGroupIdentity
 */
export interface IoTSiteWiseGroupIdentity {
  /**
   * @schema IoTSiteWiseGroupIdentity#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGroupIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGroupIdentity(obj: IoTSiteWiseGroupIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseIamUserIdentity
 */
export interface IoTSiteWiseIamUserIdentity {
  /**
   * @schema IoTSiteWiseIamUserIdentity#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseIamUserIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseIamUserIdentity(obj: IoTSiteWiseIamUserIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseIamRoleIdentity
 */
export interface IoTSiteWiseIamRoleIdentity {
  /**
   * @schema IoTSiteWiseIamRoleIdentity#arn
   */
  readonly arn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseIamRoleIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseIamRoleIdentity(obj: IoTSiteWiseIamRoleIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePortalResource
 */
export interface IoTSiteWisePortalResource {
  /**
   * @schema IoTSiteWisePortalResource#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTSiteWisePortalResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePortalResource(obj: IoTSiteWisePortalResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseProjectResource
 */
export interface IoTSiteWiseProjectResource {
  /**
   * @schema IoTSiteWiseProjectResource#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'IoTSiteWiseProjectResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseProjectResource(obj: IoTSiteWiseProjectResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseErrorDetails
 */
export interface IoTSiteWiseErrorDetails {
  /**
   * @schema IoTSiteWiseErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseErrorDetails#message
   */
  readonly message: string;

  /**
   * @schema IoTSiteWiseErrorDetails#details
   */
  readonly details?: IoTSiteWiseDetailedError[];

}

/**
 * Converts an object of type 'IoTSiteWiseErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseErrorDetails(obj: IoTSiteWiseErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
    'details': obj.details?.map(y => toJson_IoTSiteWiseDetailedError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePropertyType
 */
export interface IoTSiteWisePropertyType {
  /**
   * @schema IoTSiteWisePropertyType#attribute
   */
  readonly attribute?: IoTSiteWiseAttribute;

  /**
   * @schema IoTSiteWisePropertyType#measurement
   */
  readonly measurement?: IoTSiteWiseMeasurement;

  /**
   * @schema IoTSiteWisePropertyType#transform
   */
  readonly transform?: IoTSiteWiseTransform;

  /**
   * @schema IoTSiteWisePropertyType#metric
   */
  readonly metric?: IoTSiteWiseMetric;

}

/**
 * Converts an object of type 'IoTSiteWisePropertyType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePropertyType(obj: IoTSiteWisePropertyType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attribute': toJson_IoTSiteWiseAttribute(obj.attribute),
    'measurement': toJson_IoTSiteWiseMeasurement(obj.measurement),
    'transform': toJson_IoTSiteWiseTransform(obj.transform),
    'metric': toJson_IoTSiteWiseMetric(obj.metric),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGreengrass
 */
export interface IoTSiteWiseGreengrass {
  /**
   * @schema IoTSiteWiseGreengrass#groupArn
   */
  readonly groupArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGreengrass' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGreengrass(obj: IoTSiteWiseGreengrass | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupArn': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseGreengrassV2
 */
export interface IoTSiteWiseGreengrassV2 {
  /**
   * @schema IoTSiteWiseGreengrassV2#coreDeviceThingName
   */
  readonly coreDeviceThingName: string;

}

/**
 * Converts an object of type 'IoTSiteWiseGreengrassV2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseGreengrassV2(obj: IoTSiteWiseGreengrassV2 | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'coreDeviceThingName': obj.coreDeviceThingName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMonitorErrorDetails
 */
export interface IoTSiteWiseMonitorErrorDetails {
  /**
   * @schema IoTSiteWiseMonitorErrorDetails#code
   */
  readonly code?: string;

  /**
   * @schema IoTSiteWiseMonitorErrorDetails#message
   */
  readonly message?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseMonitorErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMonitorErrorDetails(obj: IoTSiteWiseMonitorErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWisePropertyNotification
 */
export interface IoTSiteWisePropertyNotification {
  /**
   * @schema IoTSiteWisePropertyNotification#topic
   */
  readonly topic: string;

  /**
   * @schema IoTSiteWisePropertyNotification#state
   */
  readonly state: string;

}

/**
 * Converts an object of type 'IoTSiteWisePropertyNotification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWisePropertyNotification(obj: IoTSiteWisePropertyNotification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'topic': obj.topic,
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseConfigurationErrorDetails
 */
export interface IoTSiteWiseConfigurationErrorDetails {
  /**
   * @schema IoTSiteWiseConfigurationErrorDetails#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseConfigurationErrorDetails#message
   */
  readonly message: string;

}

/**
 * Converts an object of type 'IoTSiteWiseConfigurationErrorDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseConfigurationErrorDetails(obj: IoTSiteWiseConfigurationErrorDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseCustomerManagedS3Storage
 */
export interface IoTSiteWiseCustomerManagedS3Storage {
  /**
   * @schema IoTSiteWiseCustomerManagedS3Storage#s3ResourceArn
   */
  readonly s3ResourceArn: string;

  /**
   * @schema IoTSiteWiseCustomerManagedS3Storage#roleArn
   */
  readonly roleArn: string;

}

/**
 * Converts an object of type 'IoTSiteWiseCustomerManagedS3Storage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseCustomerManagedS3Storage(obj: IoTSiteWiseCustomerManagedS3Storage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3ResourceArn': obj.s3ResourceArn,
    'roleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAggregates
 */
export interface IoTSiteWiseAggregates {
  /**
   * @schema IoTSiteWiseAggregates#average
   */
  readonly average?: number;

  /**
   * @schema IoTSiteWiseAggregates#count
   */
  readonly count?: number;

  /**
   * @schema IoTSiteWiseAggregates#maximum
   */
  readonly maximum?: number;

  /**
   * @schema IoTSiteWiseAggregates#minimum
   */
  readonly minimum?: number;

  /**
   * @schema IoTSiteWiseAggregates#sum
   */
  readonly sum?: number;

  /**
   * @schema IoTSiteWiseAggregates#standardDeviation
   */
  readonly standardDeviation?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseAggregates' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAggregates(obj: IoTSiteWiseAggregates | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'average': obj.average,
    'count': obj.count,
    'maximum': obj.maximum,
    'minimum': obj.minimum,
    'sum': obj.sum,
    'standardDeviation': obj.standardDeviation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseVariant
 */
export interface IoTSiteWiseVariant {
  /**
   * @schema IoTSiteWiseVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IoTSiteWiseVariant#integerValue
   */
  readonly integerValue?: number;

  /**
   * @schema IoTSiteWiseVariant#doubleValue
   */
  readonly doubleValue?: number;

  /**
   * @schema IoTSiteWiseVariant#booleanValue
   */
  readonly booleanValue?: boolean;

}

/**
 * Converts an object of type 'IoTSiteWiseVariant' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseVariant(obj: IoTSiteWiseVariant | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stringValue': obj.stringValue,
    'integerValue': obj.integerValue,
    'doubleValue': obj.doubleValue,
    'booleanValue': obj.booleanValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseTimeInNanos
 */
export interface IoTSiteWiseTimeInNanos {
  /**
   * @schema IoTSiteWiseTimeInNanos#timeInSeconds
   */
  readonly timeInSeconds: number;

  /**
   * @schema IoTSiteWiseTimeInNanos#offsetInNanos
   */
  readonly offsetInNanos?: number;

}

/**
 * Converts an object of type 'IoTSiteWiseTimeInNanos' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseTimeInNanos(obj: IoTSiteWiseTimeInNanos | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'timeInSeconds': obj.timeInSeconds,
    'offsetInNanos': obj.offsetInNanos,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAssetHierarchyInfo
 */
export interface IoTSiteWiseAssetHierarchyInfo {
  /**
   * @schema IoTSiteWiseAssetHierarchyInfo#parentAssetId
   */
  readonly parentAssetId?: string;

  /**
   * @schema IoTSiteWiseAssetHierarchyInfo#childAssetId
   */
  readonly childAssetId?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAssetHierarchyInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAssetHierarchyInfo(obj: IoTSiteWiseAssetHierarchyInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'parentAssetId': obj.parentAssetId,
    'childAssetId': obj.childAssetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseDetailedError
 */
export interface IoTSiteWiseDetailedError {
  /**
   * @schema IoTSiteWiseDetailedError#code
   */
  readonly code: string;

  /**
   * @schema IoTSiteWiseDetailedError#message
   */
  readonly message: string;

}

/**
 * Converts an object of type 'IoTSiteWiseDetailedError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseDetailedError(obj: IoTSiteWiseDetailedError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseAttribute
 */
export interface IoTSiteWiseAttribute {
  /**
   * @schema IoTSiteWiseAttribute#defaultValue
   */
  readonly defaultValue?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseAttribute(obj: IoTSiteWiseAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultValue': obj.defaultValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMeasurement
 */
export interface IoTSiteWiseMeasurement {
  /**
   * @schema IoTSiteWiseMeasurement#processingConfig
   */
  readonly processingConfig?: IoTSiteWiseMeasurementProcessingConfig;

}

/**
 * Converts an object of type 'IoTSiteWiseMeasurement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMeasurement(obj: IoTSiteWiseMeasurement | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'processingConfig': toJson_IoTSiteWiseMeasurementProcessingConfig(obj.processingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseTransform
 */
export interface IoTSiteWiseTransform {
  /**
   * @schema IoTSiteWiseTransform#expression
   */
  readonly expression: string;

  /**
   * @schema IoTSiteWiseTransform#variables
   */
  readonly variables: IoTSiteWiseExpressionVariable[];

  /**
   * @schema IoTSiteWiseTransform#processingConfig
   */
  readonly processingConfig?: IoTSiteWiseTransformProcessingConfig;

}

/**
 * Converts an object of type 'IoTSiteWiseTransform' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseTransform(obj: IoTSiteWiseTransform | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expression': obj.expression,
    'variables': obj.variables?.map(y => toJson_IoTSiteWiseExpressionVariable(y)),
    'processingConfig': toJson_IoTSiteWiseTransformProcessingConfig(obj.processingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMetric
 */
export interface IoTSiteWiseMetric {
  /**
   * @schema IoTSiteWiseMetric#expression
   */
  readonly expression: string;

  /**
   * @schema IoTSiteWiseMetric#variables
   */
  readonly variables: IoTSiteWiseExpressionVariable[];

  /**
   * @schema IoTSiteWiseMetric#window
   */
  readonly window: IoTSiteWiseMetricWindow;

  /**
   * @schema IoTSiteWiseMetric#processingConfig
   */
  readonly processingConfig?: IoTSiteWiseMetricProcessingConfig;

}

/**
 * Converts an object of type 'IoTSiteWiseMetric' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMetric(obj: IoTSiteWiseMetric | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'expression': obj.expression,
    'variables': obj.variables?.map(y => toJson_IoTSiteWiseExpressionVariable(y)),
    'window': toJson_IoTSiteWiseMetricWindow(obj.window),
    'processingConfig': toJson_IoTSiteWiseMetricProcessingConfig(obj.processingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMeasurementProcessingConfig
 */
export interface IoTSiteWiseMeasurementProcessingConfig {
  /**
   * @schema IoTSiteWiseMeasurementProcessingConfig#forwardingConfig
   */
  readonly forwardingConfig: IoTSiteWiseForwardingConfig;

}

/**
 * Converts an object of type 'IoTSiteWiseMeasurementProcessingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMeasurementProcessingConfig(obj: IoTSiteWiseMeasurementProcessingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'forwardingConfig': toJson_IoTSiteWiseForwardingConfig(obj.forwardingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseExpressionVariable
 */
export interface IoTSiteWiseExpressionVariable {
  /**
   * @schema IoTSiteWiseExpressionVariable#name
   */
  readonly name: string;

  /**
   * @schema IoTSiteWiseExpressionVariable#value
   */
  readonly value: IoTSiteWiseVariableValue;

}

/**
 * Converts an object of type 'IoTSiteWiseExpressionVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseExpressionVariable(obj: IoTSiteWiseExpressionVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'value': toJson_IoTSiteWiseVariableValue(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseTransformProcessingConfig
 */
export interface IoTSiteWiseTransformProcessingConfig {
  /**
   * @schema IoTSiteWiseTransformProcessingConfig#computeLocation
   */
  readonly computeLocation: string;

  /**
   * @schema IoTSiteWiseTransformProcessingConfig#forwardingConfig
   */
  readonly forwardingConfig?: IoTSiteWiseForwardingConfig;

}

/**
 * Converts an object of type 'IoTSiteWiseTransformProcessingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseTransformProcessingConfig(obj: IoTSiteWiseTransformProcessingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeLocation': obj.computeLocation,
    'forwardingConfig': toJson_IoTSiteWiseForwardingConfig(obj.forwardingConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMetricWindow
 */
export interface IoTSiteWiseMetricWindow {
  /**
   * @schema IoTSiteWiseMetricWindow#tumbling
   */
  readonly tumbling?: IoTSiteWiseTumblingWindow;

}

/**
 * Converts an object of type 'IoTSiteWiseMetricWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMetricWindow(obj: IoTSiteWiseMetricWindow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tumbling': toJson_IoTSiteWiseTumblingWindow(obj.tumbling),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseMetricProcessingConfig
 */
export interface IoTSiteWiseMetricProcessingConfig {
  /**
   * @schema IoTSiteWiseMetricProcessingConfig#computeLocation
   */
  readonly computeLocation: string;

}

/**
 * Converts an object of type 'IoTSiteWiseMetricProcessingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseMetricProcessingConfig(obj: IoTSiteWiseMetricProcessingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'computeLocation': obj.computeLocation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseForwardingConfig
 */
export interface IoTSiteWiseForwardingConfig {
  /**
   * @schema IoTSiteWiseForwardingConfig#state
   */
  readonly state: string;

}

/**
 * Converts an object of type 'IoTSiteWiseForwardingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseForwardingConfig(obj: IoTSiteWiseForwardingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseVariableValue
 */
export interface IoTSiteWiseVariableValue {
  /**
   * @schema IoTSiteWiseVariableValue#propertyId
   */
  readonly propertyId: string;

  /**
   * @schema IoTSiteWiseVariableValue#hierarchyId
   */
  readonly hierarchyId?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseVariableValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseVariableValue(obj: IoTSiteWiseVariableValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'propertyId': obj.propertyId,
    'hierarchyId': obj.hierarchyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema IoTSiteWiseTumblingWindow
 */
export interface IoTSiteWiseTumblingWindow {
  /**
   * @schema IoTSiteWiseTumblingWindow#interval
   */
  readonly interval: string;

  /**
   * @schema IoTSiteWiseTumblingWindow#offset
   */
  readonly offset?: string;

}

/**
 * Converts an object of type 'IoTSiteWiseTumblingWindow' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_IoTSiteWiseTumblingWindow(obj: IoTSiteWiseTumblingWindow | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'interval': obj.interval,
    'offset': obj.offset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
