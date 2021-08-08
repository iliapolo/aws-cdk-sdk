/**
 * @schema AppMeshCreateGatewayRouteInput
 */
export interface AppMeshCreateGatewayRouteInput {
  /**
   * @schema AppMeshCreateGatewayRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema AppMeshCreateGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshCreateGatewayRouteInput#spec
   */
  readonly spec: AppMeshGatewayRouteSpec;

  /**
   * @schema AppMeshCreateGatewayRouteInput#tags
   */
  readonly tags?: AppMeshTagRef[];

  /**
   * @schema AppMeshCreateGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshCreateGatewayRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateGatewayRouteInput(obj: AppMeshCreateGatewayRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'gatewayRouteName': obj.gatewayRouteName,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshGatewayRouteSpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateGatewayRouteOutput
 */
export interface AppMeshCreateGatewayRouteOutput {
  /**
   * @schema AppMeshCreateGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

/**
 * Converts an object of type 'AppMeshCreateGatewayRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateGatewayRouteOutput(obj: AppMeshCreateGatewayRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRoute': toJson_AppMeshGatewayRouteData(obj.gatewayRoute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateMeshInput
 */
export interface AppMeshCreateMeshInput {
  /**
   * @schema AppMeshCreateMeshInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateMeshInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateMeshInput#spec
   */
  readonly spec?: AppMeshMeshSpec;

  /**
   * @schema AppMeshCreateMeshInput#tags
   */
  readonly tags?: AppMeshTagRef[];

}

/**
 * Converts an object of type 'AppMeshCreateMeshInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateMeshInput(obj: AppMeshCreateMeshInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'spec': toJson_AppMeshMeshSpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateMeshOutput
 */
export interface AppMeshCreateMeshOutput {
  /**
   * @schema AppMeshCreateMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

/**
 * Converts an object of type 'AppMeshCreateMeshOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateMeshOutput(obj: AppMeshCreateMeshOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mesh': toJson_AppMeshMeshData(obj.mesh),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateRouteInput
 */
export interface AppMeshCreateRouteInput {
  /**
   * @schema AppMeshCreateRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshCreateRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema AppMeshCreateRouteInput#spec
   */
  readonly spec: AppMeshRouteSpec;

  /**
   * @schema AppMeshCreateRouteInput#tags
   */
  readonly tags?: AppMeshTagRef[];

  /**
   * @schema AppMeshCreateRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshCreateRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateRouteInput(obj: AppMeshCreateRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'routeName': obj.routeName,
    'spec': toJson_AppMeshRouteSpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateRouteOutput
 */
export interface AppMeshCreateRouteOutput {
  /**
   * @schema AppMeshCreateRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

/**
 * Converts an object of type 'AppMeshCreateRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateRouteOutput(obj: AppMeshCreateRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'route': toJson_AppMeshRouteData(obj.route),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualGatewayInput
 */
export interface AppMeshCreateVirtualGatewayInput {
  /**
   * @schema AppMeshCreateVirtualGatewayInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshCreateVirtualGatewayInput#spec
   */
  readonly spec: AppMeshVirtualGatewaySpec;

  /**
   * @schema AppMeshCreateVirtualGatewayInput#tags
   */
  readonly tags?: AppMeshTagRef[];

  /**
   * @schema AppMeshCreateVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualGatewayInput(obj: AppMeshCreateVirtualGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualGatewaySpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualGatewayOutput
 */
export interface AppMeshCreateVirtualGatewayOutput {
  /**
   * @schema AppMeshCreateVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualGatewayOutput(obj: AppMeshCreateVirtualGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualGateway': toJson_AppMeshVirtualGatewayData(obj.virtualGateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualNodeInput
 */
export interface AppMeshCreateVirtualNodeInput {
  /**
   * @schema AppMeshCreateVirtualNodeInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshCreateVirtualNodeInput#spec
   */
  readonly spec: AppMeshVirtualNodeSpec;

  /**
   * @schema AppMeshCreateVirtualNodeInput#tags
   */
  readonly tags?: AppMeshTagRef[];

  /**
   * @schema AppMeshCreateVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualNodeInput(obj: AppMeshCreateVirtualNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualNodeSpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualNodeOutput
 */
export interface AppMeshCreateVirtualNodeOutput {
  /**
   * @schema AppMeshCreateVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualNodeOutput(obj: AppMeshCreateVirtualNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNode': toJson_AppMeshVirtualNodeData(obj.virtualNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualRouterInput
 */
export interface AppMeshCreateVirtualRouterInput {
  /**
   * @schema AppMeshCreateVirtualRouterInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshCreateVirtualRouterInput#spec
   */
  readonly spec: AppMeshVirtualRouterSpec;

  /**
   * @schema AppMeshCreateVirtualRouterInput#tags
   */
  readonly tags?: AppMeshTagRef[];

  /**
   * @schema AppMeshCreateVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualRouterInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualRouterInput(obj: AppMeshCreateVirtualRouterInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualRouterSpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualRouterOutput
 */
export interface AppMeshCreateVirtualRouterOutput {
  /**
   * @schema AppMeshCreateVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualRouterOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualRouterOutput(obj: AppMeshCreateVirtualRouterOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualRouter': toJson_AppMeshVirtualRouterData(obj.virtualRouter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualServiceInput
 */
export interface AppMeshCreateVirtualServiceInput {
  /**
   * @schema AppMeshCreateVirtualServiceInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshCreateVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshCreateVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshCreateVirtualServiceInput#spec
   */
  readonly spec: AppMeshVirtualServiceSpec;

  /**
   * @schema AppMeshCreateVirtualServiceInput#tags
   */
  readonly tags?: AppMeshTagRef[];

  /**
   * @schema AppMeshCreateVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualServiceInput(obj: AppMeshCreateVirtualServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualServiceSpec(obj.spec),
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshCreateVirtualServiceOutput
 */
export interface AppMeshCreateVirtualServiceOutput {
  /**
   * @schema AppMeshCreateVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

/**
 * Converts an object of type 'AppMeshCreateVirtualServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshCreateVirtualServiceOutput(obj: AppMeshCreateVirtualServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualService': toJson_AppMeshVirtualServiceData(obj.virtualService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteGatewayRouteInput
 */
export interface AppMeshDeleteGatewayRouteInput {
  /**
   * @schema AppMeshDeleteGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema AppMeshDeleteGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDeleteGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDeleteGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteGatewayRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteGatewayRouteInput(obj: AppMeshDeleteGatewayRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRouteName': obj.gatewayRouteName,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteGatewayRouteOutput
 */
export interface AppMeshDeleteGatewayRouteOutput {
  /**
   * @schema AppMeshDeleteGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

/**
 * Converts an object of type 'AppMeshDeleteGatewayRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteGatewayRouteOutput(obj: AppMeshDeleteGatewayRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRoute': toJson_AppMeshGatewayRouteData(obj.gatewayRoute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteMeshInput
 */
export interface AppMeshDeleteMeshInput {
  /**
   * @schema AppMeshDeleteMeshInput#meshName
   */
  readonly meshName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteMeshInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteMeshInput(obj: AppMeshDeleteMeshInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteMeshOutput
 */
export interface AppMeshDeleteMeshOutput {
  /**
   * @schema AppMeshDeleteMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

/**
 * Converts an object of type 'AppMeshDeleteMeshOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteMeshOutput(obj: AppMeshDeleteMeshOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mesh': toJson_AppMeshMeshData(obj.mesh),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteRouteInput
 */
export interface AppMeshDeleteRouteInput {
  /**
   * @schema AppMeshDeleteRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDeleteRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDeleteRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema AppMeshDeleteRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteRouteInput(obj: AppMeshDeleteRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'routeName': obj.routeName,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteRouteOutput
 */
export interface AppMeshDeleteRouteOutput {
  /**
   * @schema AppMeshDeleteRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

/**
 * Converts an object of type 'AppMeshDeleteRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteRouteOutput(obj: AppMeshDeleteRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'route': toJson_AppMeshRouteData(obj.route),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualGatewayInput
 */
export interface AppMeshDeleteVirtualGatewayInput {
  /**
   * @schema AppMeshDeleteVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDeleteVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDeleteVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualGatewayInput(obj: AppMeshDeleteVirtualGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualGatewayOutput
 */
export interface AppMeshDeleteVirtualGatewayOutput {
  /**
   * @schema AppMeshDeleteVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualGatewayOutput(obj: AppMeshDeleteVirtualGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualGateway': toJson_AppMeshVirtualGatewayData(obj.virtualGateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualNodeInput
 */
export interface AppMeshDeleteVirtualNodeInput {
  /**
   * @schema AppMeshDeleteVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDeleteVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDeleteVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualNodeInput(obj: AppMeshDeleteVirtualNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualNodeOutput
 */
export interface AppMeshDeleteVirtualNodeOutput {
  /**
   * @schema AppMeshDeleteVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualNodeOutput(obj: AppMeshDeleteVirtualNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNode': toJson_AppMeshVirtualNodeData(obj.virtualNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualRouterInput
 */
export interface AppMeshDeleteVirtualRouterInput {
  /**
   * @schema AppMeshDeleteVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDeleteVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDeleteVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualRouterInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualRouterInput(obj: AppMeshDeleteVirtualRouterInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualRouterOutput
 */
export interface AppMeshDeleteVirtualRouterOutput {
  /**
   * @schema AppMeshDeleteVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualRouterOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualRouterOutput(obj: AppMeshDeleteVirtualRouterOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualRouter': toJson_AppMeshVirtualRouterData(obj.virtualRouter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualServiceInput
 */
export interface AppMeshDeleteVirtualServiceInput {
  /**
   * @schema AppMeshDeleteVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDeleteVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDeleteVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualServiceInput(obj: AppMeshDeleteVirtualServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDeleteVirtualServiceOutput
 */
export interface AppMeshDeleteVirtualServiceOutput {
  /**
   * @schema AppMeshDeleteVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

/**
 * Converts an object of type 'AppMeshDeleteVirtualServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDeleteVirtualServiceOutput(obj: AppMeshDeleteVirtualServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualService': toJson_AppMeshVirtualServiceData(obj.virtualService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeGatewayRouteInput
 */
export interface AppMeshDescribeGatewayRouteInput {
  /**
   * @schema AppMeshDescribeGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema AppMeshDescribeGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDescribeGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshDescribeGatewayRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeGatewayRouteInput(obj: AppMeshDescribeGatewayRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRouteName': obj.gatewayRouteName,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeGatewayRouteOutput
 */
export interface AppMeshDescribeGatewayRouteOutput {
  /**
   * @schema AppMeshDescribeGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

/**
 * Converts an object of type 'AppMeshDescribeGatewayRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeGatewayRouteOutput(obj: AppMeshDescribeGatewayRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRoute': toJson_AppMeshGatewayRouteData(obj.gatewayRoute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeMeshInput
 */
export interface AppMeshDescribeMeshInput {
  /**
   * @schema AppMeshDescribeMeshInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeMeshInput#meshOwner
   */
  readonly meshOwner?: string;

}

/**
 * Converts an object of type 'AppMeshDescribeMeshInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeMeshInput(obj: AppMeshDescribeMeshInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeMeshOutput
 */
export interface AppMeshDescribeMeshOutput {
  /**
   * @schema AppMeshDescribeMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

/**
 * Converts an object of type 'AppMeshDescribeMeshOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeMeshOutput(obj: AppMeshDescribeMeshOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mesh': toJson_AppMeshMeshData(obj.mesh),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeRouteInput
 */
export interface AppMeshDescribeRouteInput {
  /**
   * @schema AppMeshDescribeRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDescribeRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema AppMeshDescribeRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshDescribeRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeRouteInput(obj: AppMeshDescribeRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'routeName': obj.routeName,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeRouteOutput
 */
export interface AppMeshDescribeRouteOutput {
  /**
   * @schema AppMeshDescribeRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

/**
 * Converts an object of type 'AppMeshDescribeRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeRouteOutput(obj: AppMeshDescribeRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'route': toJson_AppMeshRouteData(obj.route),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualGatewayInput
 */
export interface AppMeshDescribeVirtualGatewayInput {
  /**
   * @schema AppMeshDescribeVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDescribeVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualGatewayInput(obj: AppMeshDescribeVirtualGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualGatewayOutput
 */
export interface AppMeshDescribeVirtualGatewayOutput {
  /**
   * @schema AppMeshDescribeVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualGatewayOutput(obj: AppMeshDescribeVirtualGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualGateway': toJson_AppMeshVirtualGatewayData(obj.virtualGateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualNodeInput
 */
export interface AppMeshDescribeVirtualNodeInput {
  /**
   * @schema AppMeshDescribeVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDescribeVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualNodeInput(obj: AppMeshDescribeVirtualNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualNodeOutput
 */
export interface AppMeshDescribeVirtualNodeOutput {
  /**
   * @schema AppMeshDescribeVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualNodeOutput(obj: AppMeshDescribeVirtualNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNode': toJson_AppMeshVirtualNodeData(obj.virtualNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualRouterInput
 */
export interface AppMeshDescribeVirtualRouterInput {
  /**
   * @schema AppMeshDescribeVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDescribeVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualRouterInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualRouterInput(obj: AppMeshDescribeVirtualRouterInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualRouterOutput
 */
export interface AppMeshDescribeVirtualRouterOutput {
  /**
   * @schema AppMeshDescribeVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualRouterOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualRouterOutput(obj: AppMeshDescribeVirtualRouterOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualRouter': toJson_AppMeshVirtualRouterData(obj.virtualRouter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualServiceInput
 */
export interface AppMeshDescribeVirtualServiceInput {
  /**
   * @schema AppMeshDescribeVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshDescribeVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshDescribeVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualServiceInput(obj: AppMeshDescribeVirtualServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDescribeVirtualServiceOutput
 */
export interface AppMeshDescribeVirtualServiceOutput {
  /**
   * @schema AppMeshDescribeVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

/**
 * Converts an object of type 'AppMeshDescribeVirtualServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDescribeVirtualServiceOutput(obj: AppMeshDescribeVirtualServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualService': toJson_AppMeshVirtualServiceData(obj.virtualService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListGatewayRoutesInput
 */
export interface AppMeshListGatewayRoutesInput {
  /**
   * @schema AppMeshListGatewayRoutesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListGatewayRoutesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshListGatewayRoutesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshListGatewayRoutesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListGatewayRoutesInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshListGatewayRoutesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListGatewayRoutesInput(obj: AppMeshListGatewayRoutesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'nextToken': obj.nextToken,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListGatewayRoutesOutput
 */
export interface AppMeshListGatewayRoutesOutput {
  /**
   * @schema AppMeshListGatewayRoutesOutput#gatewayRoutes
   */
  readonly gatewayRoutes: AppMeshGatewayRouteRef[];

  /**
   * @schema AppMeshListGatewayRoutesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListGatewayRoutesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListGatewayRoutesOutput(obj: AppMeshListGatewayRoutesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRoutes': obj.gatewayRoutes?.map(y => toJson_AppMeshGatewayRouteRef(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListMeshesInput
 */
export interface AppMeshListMeshesInput {
  /**
   * @schema AppMeshListMeshesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListMeshesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListMeshesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListMeshesInput(obj: AppMeshListMeshesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListMeshesOutput
 */
export interface AppMeshListMeshesOutput {
  /**
   * @schema AppMeshListMeshesOutput#meshes
   */
  readonly meshes: AppMeshMeshRef[];

  /**
   * @schema AppMeshListMeshesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListMeshesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListMeshesOutput(obj: AppMeshListMeshesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshes': obj.meshes?.map(y => toJson_AppMeshMeshRef(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListRoutesInput
 */
export interface AppMeshListRoutesInput {
  /**
   * @schema AppMeshListRoutesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListRoutesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshListRoutesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshListRoutesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListRoutesInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshListRoutesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListRoutesInput(obj: AppMeshListRoutesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'nextToken': obj.nextToken,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListRoutesOutput
 */
export interface AppMeshListRoutesOutput {
  /**
   * @schema AppMeshListRoutesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListRoutesOutput#routes
   */
  readonly routes: AppMeshRouteRef[];

}

/**
 * Converts an object of type 'AppMeshListRoutesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListRoutesOutput(obj: AppMeshListRoutesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'routes': obj.routes?.map(y => toJson_AppMeshRouteRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListTagsForResourceInput
 */
export interface AppMeshListTagsForResourceInput {
  /**
   * @schema AppMeshListTagsForResourceInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * Converts an object of type 'AppMeshListTagsForResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListTagsForResourceInput(obj: AppMeshListTagsForResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'nextToken': obj.nextToken,
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListTagsForResourceOutput
 */
export interface AppMeshListTagsForResourceOutput {
  /**
   * @schema AppMeshListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListTagsForResourceOutput#tags
   */
  readonly tags: AppMeshTagRef[];

}

/**
 * Converts an object of type 'AppMeshListTagsForResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListTagsForResourceOutput(obj: AppMeshListTagsForResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualGatewaysInput
 */
export interface AppMeshListVirtualGatewaysInput {
  /**
   * @schema AppMeshListVirtualGatewaysInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListVirtualGatewaysInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshListVirtualGatewaysInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshListVirtualGatewaysInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListVirtualGatewaysInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualGatewaysInput(obj: AppMeshListVirtualGatewaysInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualGatewaysOutput
 */
export interface AppMeshListVirtualGatewaysOutput {
  /**
   * @schema AppMeshListVirtualGatewaysOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListVirtualGatewaysOutput#virtualGateways
   */
  readonly virtualGateways: AppMeshVirtualGatewayRef[];

}

/**
 * Converts an object of type 'AppMeshListVirtualGatewaysOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualGatewaysOutput(obj: AppMeshListVirtualGatewaysOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'virtualGateways': obj.virtualGateways?.map(y => toJson_AppMeshVirtualGatewayRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualNodesInput
 */
export interface AppMeshListVirtualNodesInput {
  /**
   * @schema AppMeshListVirtualNodesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListVirtualNodesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshListVirtualNodesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshListVirtualNodesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListVirtualNodesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualNodesInput(obj: AppMeshListVirtualNodesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualNodesOutput
 */
export interface AppMeshListVirtualNodesOutput {
  /**
   * @schema AppMeshListVirtualNodesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListVirtualNodesOutput#virtualNodes
   */
  readonly virtualNodes: AppMeshVirtualNodeRef[];

}

/**
 * Converts an object of type 'AppMeshListVirtualNodesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualNodesOutput(obj: AppMeshListVirtualNodesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'virtualNodes': obj.virtualNodes?.map(y => toJson_AppMeshVirtualNodeRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualRoutersInput
 */
export interface AppMeshListVirtualRoutersInput {
  /**
   * @schema AppMeshListVirtualRoutersInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListVirtualRoutersInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshListVirtualRoutersInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshListVirtualRoutersInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListVirtualRoutersInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualRoutersInput(obj: AppMeshListVirtualRoutersInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualRoutersOutput
 */
export interface AppMeshListVirtualRoutersOutput {
  /**
   * @schema AppMeshListVirtualRoutersOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListVirtualRoutersOutput#virtualRouters
   */
  readonly virtualRouters: AppMeshVirtualRouterRef[];

}

/**
 * Converts an object of type 'AppMeshListVirtualRoutersOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualRoutersOutput(obj: AppMeshListVirtualRoutersOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'virtualRouters': obj.virtualRouters?.map(y => toJson_AppMeshVirtualRouterRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualServicesInput
 */
export interface AppMeshListVirtualServicesInput {
  /**
   * @schema AppMeshListVirtualServicesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema AppMeshListVirtualServicesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshListVirtualServicesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshListVirtualServicesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'AppMeshListVirtualServicesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualServicesInput(obj: AppMeshListVirtualServicesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'limit': obj.limit,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListVirtualServicesOutput
 */
export interface AppMeshListVirtualServicesOutput {
  /**
   * @schema AppMeshListVirtualServicesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema AppMeshListVirtualServicesOutput#virtualServices
   */
  readonly virtualServices: AppMeshVirtualServiceRef[];

}

/**
 * Converts an object of type 'AppMeshListVirtualServicesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListVirtualServicesOutput(obj: AppMeshListVirtualServicesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'virtualServices': obj.virtualServices?.map(y => toJson_AppMeshVirtualServiceRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTagResourceInput
 */
export interface AppMeshTagResourceInput {
  /**
   * @schema AppMeshTagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppMeshTagResourceInput#tags
   */
  readonly tags: AppMeshTagRef[];

}

/**
 * Converts an object of type 'AppMeshTagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTagResourceInput(obj: AppMeshTagResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': obj.tags?.map(y => toJson_AppMeshTagRef(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTagResourceOutput
 */
export interface AppMeshTagResourceOutput {
}

/**
 * Converts an object of type 'AppMeshTagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTagResourceOutput(obj: AppMeshTagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUntagResourceInput
 */
export interface AppMeshUntagResourceInput {
  /**
   * @schema AppMeshUntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AppMeshUntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * Converts an object of type 'AppMeshUntagResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUntagResourceInput(obj: AppMeshUntagResourceInput | undefined): Record<string, any> | undefined {
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
 * @schema AppMeshUntagResourceOutput
 */
export interface AppMeshUntagResourceOutput {
}

/**
 * Converts an object of type 'AppMeshUntagResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUntagResourceOutput(obj: AppMeshUntagResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateGatewayRouteInput
 */
export interface AppMeshUpdateGatewayRouteInput {
  /**
   * @schema AppMeshUpdateGatewayRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema AppMeshUpdateGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshUpdateGatewayRouteInput#spec
   */
  readonly spec: AppMeshGatewayRouteSpec;

  /**
   * @schema AppMeshUpdateGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshUpdateGatewayRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateGatewayRouteInput(obj: AppMeshUpdateGatewayRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'gatewayRouteName': obj.gatewayRouteName,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshGatewayRouteSpec(obj.spec),
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateGatewayRouteOutput
 */
export interface AppMeshUpdateGatewayRouteOutput {
  /**
   * @schema AppMeshUpdateGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

/**
 * Converts an object of type 'AppMeshUpdateGatewayRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateGatewayRouteOutput(obj: AppMeshUpdateGatewayRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRoute': toJson_AppMeshGatewayRouteData(obj.gatewayRoute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateMeshInput
 */
export interface AppMeshUpdateMeshInput {
  /**
   * @schema AppMeshUpdateMeshInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateMeshInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateMeshInput#spec
   */
  readonly spec?: AppMeshMeshSpec;

}

/**
 * Converts an object of type 'AppMeshUpdateMeshInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateMeshInput(obj: AppMeshUpdateMeshInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'spec': toJson_AppMeshMeshSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateMeshOutput
 */
export interface AppMeshUpdateMeshOutput {
  /**
   * @schema AppMeshUpdateMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

/**
 * Converts an object of type 'AppMeshUpdateMeshOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateMeshOutput(obj: AppMeshUpdateMeshOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'mesh': toJson_AppMeshMeshData(obj.mesh),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateRouteInput
 */
export interface AppMeshUpdateRouteInput {
  /**
   * @schema AppMeshUpdateRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshUpdateRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema AppMeshUpdateRouteInput#spec
   */
  readonly spec: AppMeshRouteSpec;

  /**
   * @schema AppMeshUpdateRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshUpdateRouteInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateRouteInput(obj: AppMeshUpdateRouteInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'routeName': obj.routeName,
    'spec': toJson_AppMeshRouteSpec(obj.spec),
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateRouteOutput
 */
export interface AppMeshUpdateRouteOutput {
  /**
   * @schema AppMeshUpdateRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

/**
 * Converts an object of type 'AppMeshUpdateRouteOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateRouteOutput(obj: AppMeshUpdateRouteOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'route': toJson_AppMeshRouteData(obj.route),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualGatewayInput
 */
export interface AppMeshUpdateVirtualGatewayInput {
  /**
   * @schema AppMeshUpdateVirtualGatewayInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshUpdateVirtualGatewayInput#spec
   */
  readonly spec: AppMeshVirtualGatewaySpec;

  /**
   * @schema AppMeshUpdateVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualGatewayInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualGatewayInput(obj: AppMeshUpdateVirtualGatewayInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualGatewaySpec(obj.spec),
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualGatewayOutput
 */
export interface AppMeshUpdateVirtualGatewayOutput {
  /**
   * @schema AppMeshUpdateVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualGatewayOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualGatewayOutput(obj: AppMeshUpdateVirtualGatewayOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualGateway': toJson_AppMeshVirtualGatewayData(obj.virtualGateway),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualNodeInput
 */
export interface AppMeshUpdateVirtualNodeInput {
  /**
   * @schema AppMeshUpdateVirtualNodeInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshUpdateVirtualNodeInput#spec
   */
  readonly spec: AppMeshVirtualNodeSpec;

  /**
   * @schema AppMeshUpdateVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualNodeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualNodeInput(obj: AppMeshUpdateVirtualNodeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualNodeSpec(obj.spec),
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualNodeOutput
 */
export interface AppMeshUpdateVirtualNodeOutput {
  /**
   * @schema AppMeshUpdateVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualNodeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualNodeOutput(obj: AppMeshUpdateVirtualNodeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNode': toJson_AppMeshVirtualNodeData(obj.virtualNode),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualRouterInput
 */
export interface AppMeshUpdateVirtualRouterInput {
  /**
   * @schema AppMeshUpdateVirtualRouterInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshUpdateVirtualRouterInput#spec
   */
  readonly spec: AppMeshVirtualRouterSpec;

  /**
   * @schema AppMeshUpdateVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualRouterInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualRouterInput(obj: AppMeshUpdateVirtualRouterInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualRouterSpec(obj.spec),
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualRouterOutput
 */
export interface AppMeshUpdateVirtualRouterOutput {
  /**
   * @schema AppMeshUpdateVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualRouterOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualRouterOutput(obj: AppMeshUpdateVirtualRouterOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualRouter': toJson_AppMeshVirtualRouterData(obj.virtualRouter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualServiceInput
 */
export interface AppMeshUpdateVirtualServiceInput {
  /**
   * @schema AppMeshUpdateVirtualServiceInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema AppMeshUpdateVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshUpdateVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema AppMeshUpdateVirtualServiceInput#spec
   */
  readonly spec: AppMeshVirtualServiceSpec;

  /**
   * @schema AppMeshUpdateVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualServiceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualServiceInput(obj: AppMeshUpdateVirtualServiceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientToken': obj.clientToken,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'spec': toJson_AppMeshVirtualServiceSpec(obj.spec),
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshUpdateVirtualServiceOutput
 */
export interface AppMeshUpdateVirtualServiceOutput {
  /**
   * @schema AppMeshUpdateVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

/**
 * Converts an object of type 'AppMeshUpdateVirtualServiceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshUpdateVirtualServiceOutput(obj: AppMeshUpdateVirtualServiceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualService': toJson_AppMeshVirtualServiceData(obj.virtualService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGatewayRouteSpec
 */
export interface AppMeshGatewayRouteSpec {
  /**
   * @schema AppMeshGatewayRouteSpec#grpcRoute
   */
  readonly grpcRoute?: AppMeshGrpcGatewayRoute;

  /**
   * @schema AppMeshGatewayRouteSpec#http2Route
   */
  readonly http2Route?: AppMeshHttpGatewayRoute;

  /**
   * @schema AppMeshGatewayRouteSpec#httpRoute
   */
  readonly httpRoute?: AppMeshHttpGatewayRoute;

  /**
   * @schema AppMeshGatewayRouteSpec#priority
   */
  readonly priority?: number;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteSpec(obj: AppMeshGatewayRouteSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grpcRoute': toJson_AppMeshGrpcGatewayRoute(obj.grpcRoute),
    'http2Route': toJson_AppMeshHttpGatewayRoute(obj.http2Route),
    'httpRoute': toJson_AppMeshHttpGatewayRoute(obj.httpRoute),
    'priority': obj.priority,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTagRef
 */
export interface AppMeshTagRef {
  /**
   * @schema AppMeshTagRef#key
   */
  readonly key: string;

  /**
   * @schema AppMeshTagRef#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'AppMeshTagRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTagRef(obj: AppMeshTagRef | undefined): Record<string, any> | undefined {
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
 * @schema AppMeshGatewayRouteData
 */
export interface AppMeshGatewayRouteData {
  /**
   * @schema AppMeshGatewayRouteData#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema AppMeshGatewayRouteData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshGatewayRouteData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshGatewayRouteData#spec
   */
  readonly spec: AppMeshGatewayRouteSpec;

  /**
   * @schema AppMeshGatewayRouteData#status
   */
  readonly status: AppMeshGatewayRouteStatus;

  /**
   * @schema AppMeshGatewayRouteData#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteData(obj: AppMeshGatewayRouteData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'gatewayRouteName': obj.gatewayRouteName,
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'spec': toJson_AppMeshGatewayRouteSpec(obj.spec),
    'status': toJson_AppMeshGatewayRouteStatus(obj.status),
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshMeshSpec
 */
export interface AppMeshMeshSpec {
  /**
   * @schema AppMeshMeshSpec#egressFilter
   */
  readonly egressFilter?: AppMeshEgressFilter;

}

/**
 * Converts an object of type 'AppMeshMeshSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshMeshSpec(obj: AppMeshMeshSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'egressFilter': toJson_AppMeshEgressFilter(obj.egressFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshMeshData
 */
export interface AppMeshMeshData {
  /**
   * @schema AppMeshMeshData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshMeshData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshMeshData#spec
   */
  readonly spec: AppMeshMeshSpec;

  /**
   * @schema AppMeshMeshData#status
   */
  readonly status: AppMeshMeshStatus;

}

/**
 * Converts an object of type 'AppMeshMeshData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshMeshData(obj: AppMeshMeshData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'spec': toJson_AppMeshMeshSpec(obj.spec),
    'status': toJson_AppMeshMeshStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshRouteSpec
 */
export interface AppMeshRouteSpec {
  /**
   * @schema AppMeshRouteSpec#grpcRoute
   */
  readonly grpcRoute?: AppMeshGrpcRoute;

  /**
   * @schema AppMeshRouteSpec#http2Route
   */
  readonly http2Route?: AppMeshHttpRoute;

  /**
   * @schema AppMeshRouteSpec#httpRoute
   */
  readonly httpRoute?: AppMeshHttpRoute;

  /**
   * @schema AppMeshRouteSpec#priority
   */
  readonly priority?: number;

  /**
   * @schema AppMeshRouteSpec#tcpRoute
   */
  readonly tcpRoute?: AppMeshTcpRoute;

}

/**
 * Converts an object of type 'AppMeshRouteSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshRouteSpec(obj: AppMeshRouteSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grpcRoute': toJson_AppMeshGrpcRoute(obj.grpcRoute),
    'http2Route': toJson_AppMeshHttpRoute(obj.http2Route),
    'httpRoute': toJson_AppMeshHttpRoute(obj.httpRoute),
    'priority': obj.priority,
    'tcpRoute': toJson_AppMeshTcpRoute(obj.tcpRoute),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshRouteData
 */
export interface AppMeshRouteData {
  /**
   * @schema AppMeshRouteData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshRouteData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshRouteData#routeName
   */
  readonly routeName: string;

  /**
   * @schema AppMeshRouteData#spec
   */
  readonly spec: AppMeshRouteSpec;

  /**
   * @schema AppMeshRouteData#status
   */
  readonly status: AppMeshRouteStatus;

  /**
   * @schema AppMeshRouteData#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshRouteData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshRouteData(obj: AppMeshRouteData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'routeName': obj.routeName,
    'spec': toJson_AppMeshRouteSpec(obj.spec),
    'status': toJson_AppMeshRouteStatus(obj.status),
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewaySpec
 */
export interface AppMeshVirtualGatewaySpec {
  /**
   * @schema AppMeshVirtualGatewaySpec#backendDefaults
   */
  readonly backendDefaults?: AppMeshVirtualGatewayBackendDefaults;

  /**
   * @schema AppMeshVirtualGatewaySpec#listeners
   */
  readonly listeners: AppMeshVirtualGatewayListener[];

  /**
   * @schema AppMeshVirtualGatewaySpec#logging
   */
  readonly logging?: AppMeshVirtualGatewayLogging;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewaySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewaySpec(obj: AppMeshVirtualGatewaySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendDefaults': toJson_AppMeshVirtualGatewayBackendDefaults(obj.backendDefaults),
    'listeners': obj.listeners?.map(y => toJson_AppMeshVirtualGatewayListener(y)),
    'logging': toJson_AppMeshVirtualGatewayLogging(obj.logging),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayData
 */
export interface AppMeshVirtualGatewayData {
  /**
   * @schema AppMeshVirtualGatewayData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualGatewayData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshVirtualGatewayData#spec
   */
  readonly spec: AppMeshVirtualGatewaySpec;

  /**
   * @schema AppMeshVirtualGatewayData#status
   */
  readonly status: AppMeshVirtualGatewayStatus;

  /**
   * @schema AppMeshVirtualGatewayData#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayData(obj: AppMeshVirtualGatewayData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'spec': toJson_AppMeshVirtualGatewaySpec(obj.spec),
    'status': toJson_AppMeshVirtualGatewayStatus(obj.status),
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeSpec
 */
export interface AppMeshVirtualNodeSpec {
  /**
   * @schema AppMeshVirtualNodeSpec#backendDefaults
   */
  readonly backendDefaults?: AppMeshBackendDefaults;

  /**
   * @schema AppMeshVirtualNodeSpec#backends
   */
  readonly backends?: AppMeshBackend[];

  /**
   * @schema AppMeshVirtualNodeSpec#listeners
   */
  readonly listeners?: AppMeshListener[];

  /**
   * @schema AppMeshVirtualNodeSpec#logging
   */
  readonly logging?: AppMeshLogging;

  /**
   * @schema AppMeshVirtualNodeSpec#serviceDiscovery
   */
  readonly serviceDiscovery?: AppMeshServiceDiscovery;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeSpec(obj: AppMeshVirtualNodeSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'backendDefaults': toJson_AppMeshBackendDefaults(obj.backendDefaults),
    'backends': obj.backends?.map(y => toJson_AppMeshBackend(y)),
    'listeners': obj.listeners?.map(y => toJson_AppMeshListener(y)),
    'logging': toJson_AppMeshLogging(obj.logging),
    'serviceDiscovery': toJson_AppMeshServiceDiscovery(obj.serviceDiscovery),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeData
 */
export interface AppMeshVirtualNodeData {
  /**
   * @schema AppMeshVirtualNodeData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualNodeData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshVirtualNodeData#spec
   */
  readonly spec: AppMeshVirtualNodeSpec;

  /**
   * @schema AppMeshVirtualNodeData#status
   */
  readonly status: AppMeshVirtualNodeStatus;

  /**
   * @schema AppMeshVirtualNodeData#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeData(obj: AppMeshVirtualNodeData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'spec': toJson_AppMeshVirtualNodeSpec(obj.spec),
    'status': toJson_AppMeshVirtualNodeStatus(obj.status),
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualRouterSpec
 */
export interface AppMeshVirtualRouterSpec {
  /**
   * @schema AppMeshVirtualRouterSpec#listeners
   */
  readonly listeners?: AppMeshVirtualRouterListener[];

}

/**
 * Converts an object of type 'AppMeshVirtualRouterSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualRouterSpec(obj: AppMeshVirtualRouterSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'listeners': obj.listeners?.map(y => toJson_AppMeshVirtualRouterListener(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualRouterData
 */
export interface AppMeshVirtualRouterData {
  /**
   * @schema AppMeshVirtualRouterData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualRouterData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshVirtualRouterData#spec
   */
  readonly spec: AppMeshVirtualRouterSpec;

  /**
   * @schema AppMeshVirtualRouterData#status
   */
  readonly status: AppMeshVirtualRouterStatus;

  /**
   * @schema AppMeshVirtualRouterData#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualRouterData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualRouterData(obj: AppMeshVirtualRouterData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'spec': toJson_AppMeshVirtualRouterSpec(obj.spec),
    'status': toJson_AppMeshVirtualRouterStatus(obj.status),
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualServiceSpec
 */
export interface AppMeshVirtualServiceSpec {
  /**
   * @schema AppMeshVirtualServiceSpec#provider
   */
  readonly provider?: AppMeshVirtualServiceProvider;

}

/**
 * Converts an object of type 'AppMeshVirtualServiceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualServiceSpec(obj: AppMeshVirtualServiceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'provider': toJson_AppMeshVirtualServiceProvider(obj.provider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualServiceData
 */
export interface AppMeshVirtualServiceData {
  /**
   * @schema AppMeshVirtualServiceData#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualServiceData#metadata
   */
  readonly metadata: AppMeshResourceMetadata;

  /**
   * @schema AppMeshVirtualServiceData#spec
   */
  readonly spec: AppMeshVirtualServiceSpec;

  /**
   * @schema AppMeshVirtualServiceData#status
   */
  readonly status: AppMeshVirtualServiceStatus;

  /**
   * @schema AppMeshVirtualServiceData#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualServiceData' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualServiceData(obj: AppMeshVirtualServiceData | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'meshName': obj.meshName,
    'metadata': toJson_AppMeshResourceMetadata(obj.metadata),
    'spec': toJson_AppMeshVirtualServiceSpec(obj.spec),
    'status': toJson_AppMeshVirtualServiceStatus(obj.status),
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGatewayRouteRef
 */
export interface AppMeshGatewayRouteRef {
  /**
   * @schema AppMeshGatewayRouteRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshGatewayRouteRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshGatewayRouteRef#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema AppMeshGatewayRouteRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshGatewayRouteRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshGatewayRouteRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshGatewayRouteRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshGatewayRouteRef#version
   */
  readonly version: number;

  /**
   * @schema AppMeshGatewayRouteRef#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteRef(obj: AppMeshGatewayRouteRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'gatewayRouteName': obj.gatewayRouteName,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'version': obj.version,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshMeshRef
 */
export interface AppMeshMeshRef {
  /**
   * @schema AppMeshMeshRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshMeshRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshMeshRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshMeshRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshMeshRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshMeshRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshMeshRef#version
   */
  readonly version: number;

}

/**
 * Converts an object of type 'AppMeshMeshRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshMeshRef(obj: AppMeshMeshRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshRouteRef
 */
export interface AppMeshRouteRef {
  /**
   * @schema AppMeshRouteRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshRouteRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshRouteRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshRouteRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshRouteRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshRouteRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshRouteRef#routeName
   */
  readonly routeName: string;

  /**
   * @schema AppMeshRouteRef#version
   */
  readonly version: number;

  /**
   * @schema AppMeshRouteRef#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshRouteRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshRouteRef(obj: AppMeshRouteRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'routeName': obj.routeName,
    'version': obj.version,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayRef
 */
export interface AppMeshVirtualGatewayRef {
  /**
   * @schema AppMeshVirtualGatewayRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshVirtualGatewayRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshVirtualGatewayRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshVirtualGatewayRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualGatewayRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshVirtualGatewayRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshVirtualGatewayRef#version
   */
  readonly version: number;

  /**
   * @schema AppMeshVirtualGatewayRef#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayRef(obj: AppMeshVirtualGatewayRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'version': obj.version,
    'virtualGatewayName': obj.virtualGatewayName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeRef
 */
export interface AppMeshVirtualNodeRef {
  /**
   * @schema AppMeshVirtualNodeRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshVirtualNodeRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshVirtualNodeRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshVirtualNodeRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualNodeRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshVirtualNodeRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshVirtualNodeRef#version
   */
  readonly version: number;

  /**
   * @schema AppMeshVirtualNodeRef#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeRef(obj: AppMeshVirtualNodeRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'version': obj.version,
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualRouterRef
 */
export interface AppMeshVirtualRouterRef {
  /**
   * @schema AppMeshVirtualRouterRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshVirtualRouterRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshVirtualRouterRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshVirtualRouterRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualRouterRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshVirtualRouterRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshVirtualRouterRef#version
   */
  readonly version: number;

  /**
   * @schema AppMeshVirtualRouterRef#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualRouterRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualRouterRef(obj: AppMeshVirtualRouterRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'version': obj.version,
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualServiceRef
 */
export interface AppMeshVirtualServiceRef {
  /**
   * @schema AppMeshVirtualServiceRef#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshVirtualServiceRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshVirtualServiceRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshVirtualServiceRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema AppMeshVirtualServiceRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshVirtualServiceRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshVirtualServiceRef#version
   */
  readonly version: number;

  /**
   * @schema AppMeshVirtualServiceRef#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualServiceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualServiceRef(obj: AppMeshVirtualServiceRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshName': obj.meshName,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'version': obj.version,
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcGatewayRoute
 */
export interface AppMeshGrpcGatewayRoute {
  /**
   * @schema AppMeshGrpcGatewayRoute#action
   */
  readonly action: AppMeshGrpcGatewayRouteAction;

  /**
   * @schema AppMeshGrpcGatewayRoute#match
   */
  readonly match: AppMeshGrpcGatewayRouteMatch;

}

/**
 * Converts an object of type 'AppMeshGrpcGatewayRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcGatewayRoute(obj: AppMeshGrpcGatewayRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_AppMeshGrpcGatewayRouteAction(obj.action),
    'match': toJson_AppMeshGrpcGatewayRouteMatch(obj.match),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRoute
 */
export interface AppMeshHttpGatewayRoute {
  /**
   * @schema AppMeshHttpGatewayRoute#action
   */
  readonly action: AppMeshHttpGatewayRouteAction;

  /**
   * @schema AppMeshHttpGatewayRoute#match
   */
  readonly match: AppMeshHttpGatewayRouteMatch;

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRoute(obj: AppMeshHttpGatewayRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_AppMeshHttpGatewayRouteAction(obj.action),
    'match': toJson_AppMeshHttpGatewayRouteMatch(obj.match),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshResourceMetadata
 */
export interface AppMeshResourceMetadata {
  /**
   * @schema AppMeshResourceMetadata#arn
   */
  readonly arn: string;

  /**
   * @schema AppMeshResourceMetadata#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema AppMeshResourceMetadata#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema AppMeshResourceMetadata#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema AppMeshResourceMetadata#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema AppMeshResourceMetadata#uid
   */
  readonly uid: string;

  /**
   * @schema AppMeshResourceMetadata#version
   */
  readonly version: number;

}

/**
 * Converts an object of type 'AppMeshResourceMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshResourceMetadata(obj: AppMeshResourceMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'lastUpdatedAt': obj.lastUpdatedAt,
    'meshOwner': obj.meshOwner,
    'resourceOwner': obj.resourceOwner,
    'uid': obj.uid,
    'version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGatewayRouteStatus
 */
export interface AppMeshGatewayRouteStatus {
  /**
   * @schema AppMeshGatewayRouteStatus#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteStatus(obj: AppMeshGatewayRouteStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshEgressFilter
 */
export interface AppMeshEgressFilter {
  /**
   * @schema AppMeshEgressFilter#type
   */
  readonly type: string;

}

/**
 * Converts an object of type 'AppMeshEgressFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshEgressFilter(obj: AppMeshEgressFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshMeshStatus
 */
export interface AppMeshMeshStatus {
  /**
   * @schema AppMeshMeshStatus#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'AppMeshMeshStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshMeshStatus(obj: AppMeshMeshStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcRoute
 */
export interface AppMeshGrpcRoute {
  /**
   * @schema AppMeshGrpcRoute#action
   */
  readonly action: AppMeshGrpcRouteAction;

  /**
   * @schema AppMeshGrpcRoute#match
   */
  readonly match: AppMeshGrpcRouteMatch;

  /**
   * @schema AppMeshGrpcRoute#retryPolicy
   */
  readonly retryPolicy?: AppMeshGrpcRetryPolicy;

  /**
   * @schema AppMeshGrpcRoute#timeout
   */
  readonly timeout?: AppMeshGrpcTimeout;

}

/**
 * Converts an object of type 'AppMeshGrpcRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcRoute(obj: AppMeshGrpcRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_AppMeshGrpcRouteAction(obj.action),
    'match': toJson_AppMeshGrpcRouteMatch(obj.match),
    'retryPolicy': toJson_AppMeshGrpcRetryPolicy(obj.retryPolicy),
    'timeout': toJson_AppMeshGrpcTimeout(obj.timeout),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpRoute
 */
export interface AppMeshHttpRoute {
  /**
   * @schema AppMeshHttpRoute#action
   */
  readonly action: AppMeshHttpRouteAction;

  /**
   * @schema AppMeshHttpRoute#match
   */
  readonly match: AppMeshHttpRouteMatch;

  /**
   * @schema AppMeshHttpRoute#retryPolicy
   */
  readonly retryPolicy?: AppMeshHttpRetryPolicy;

  /**
   * @schema AppMeshHttpRoute#timeout
   */
  readonly timeout?: AppMeshHttpTimeout;

}

/**
 * Converts an object of type 'AppMeshHttpRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpRoute(obj: AppMeshHttpRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_AppMeshHttpRouteAction(obj.action),
    'match': toJson_AppMeshHttpRouteMatch(obj.match),
    'retryPolicy': toJson_AppMeshHttpRetryPolicy(obj.retryPolicy),
    'timeout': toJson_AppMeshHttpTimeout(obj.timeout),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTcpRoute
 */
export interface AppMeshTcpRoute {
  /**
   * @schema AppMeshTcpRoute#action
   */
  readonly action: AppMeshTcpRouteAction;

  /**
   * @schema AppMeshTcpRoute#timeout
   */
  readonly timeout?: AppMeshTcpTimeout;

}

/**
 * Converts an object of type 'AppMeshTcpRoute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTcpRoute(obj: AppMeshTcpRoute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'action': toJson_AppMeshTcpRouteAction(obj.action),
    'timeout': toJson_AppMeshTcpTimeout(obj.timeout),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshRouteStatus
 */
export interface AppMeshRouteStatus {
  /**
   * @schema AppMeshRouteStatus#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AppMeshRouteStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshRouteStatus(obj: AppMeshRouteStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayBackendDefaults
 */
export interface AppMeshVirtualGatewayBackendDefaults {
  /**
   * @schema AppMeshVirtualGatewayBackendDefaults#clientPolicy
   */
  readonly clientPolicy?: AppMeshVirtualGatewayClientPolicy;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayBackendDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayBackendDefaults(obj: AppMeshVirtualGatewayBackendDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientPolicy': toJson_AppMeshVirtualGatewayClientPolicy(obj.clientPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListener
 */
export interface AppMeshVirtualGatewayListener {
  /**
   * @schema AppMeshVirtualGatewayListener#connectionPool
   */
  readonly connectionPool?: AppMeshVirtualGatewayConnectionPool;

  /**
   * @schema AppMeshVirtualGatewayListener#healthCheck
   */
  readonly healthCheck?: AppMeshVirtualGatewayHealthCheckPolicy;

  /**
   * @schema AppMeshVirtualGatewayListener#portMapping
   */
  readonly portMapping: AppMeshVirtualGatewayPortMapping;

  /**
   * @schema AppMeshVirtualGatewayListener#tls
   */
  readonly tls?: AppMeshVirtualGatewayListenerTls;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListener(obj: AppMeshVirtualGatewayListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionPool': toJson_AppMeshVirtualGatewayConnectionPool(obj.connectionPool),
    'healthCheck': toJson_AppMeshVirtualGatewayHealthCheckPolicy(obj.healthCheck),
    'portMapping': toJson_AppMeshVirtualGatewayPortMapping(obj.portMapping),
    'tls': toJson_AppMeshVirtualGatewayListenerTls(obj.tls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayLogging
 */
export interface AppMeshVirtualGatewayLogging {
  /**
   * @schema AppMeshVirtualGatewayLogging#accessLog
   */
  readonly accessLog?: AppMeshVirtualGatewayAccessLog;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayLogging(obj: AppMeshVirtualGatewayLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessLog': toJson_AppMeshVirtualGatewayAccessLog(obj.accessLog),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayStatus
 */
export interface AppMeshVirtualGatewayStatus {
  /**
   * @schema AppMeshVirtualGatewayStatus#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayStatus(obj: AppMeshVirtualGatewayStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshBackendDefaults
 */
export interface AppMeshBackendDefaults {
  /**
   * @schema AppMeshBackendDefaults#clientPolicy
   */
  readonly clientPolicy?: AppMeshClientPolicy;

}

/**
 * Converts an object of type 'AppMeshBackendDefaults' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshBackendDefaults(obj: AppMeshBackendDefaults | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientPolicy': toJson_AppMeshClientPolicy(obj.clientPolicy),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshBackend
 */
export interface AppMeshBackend {
  /**
   * @schema AppMeshBackend#virtualService
   */
  readonly virtualService?: AppMeshVirtualServiceBackend;

}

/**
 * Converts an object of type 'AppMeshBackend' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshBackend(obj: AppMeshBackend | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualService': toJson_AppMeshVirtualServiceBackend(obj.virtualService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListener
 */
export interface AppMeshListener {
  /**
   * @schema AppMeshListener#connectionPool
   */
  readonly connectionPool?: AppMeshVirtualNodeConnectionPool;

  /**
   * @schema AppMeshListener#healthCheck
   */
  readonly healthCheck?: AppMeshHealthCheckPolicy;

  /**
   * @schema AppMeshListener#outlierDetection
   */
  readonly outlierDetection?: AppMeshOutlierDetection;

  /**
   * @schema AppMeshListener#portMapping
   */
  readonly portMapping: AppMeshPortMapping;

  /**
   * @schema AppMeshListener#timeout
   */
  readonly timeout?: AppMeshListenerTimeout;

  /**
   * @schema AppMeshListener#tls
   */
  readonly tls?: AppMeshListenerTls;

}

/**
 * Converts an object of type 'AppMeshListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListener(obj: AppMeshListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'connectionPool': toJson_AppMeshVirtualNodeConnectionPool(obj.connectionPool),
    'healthCheck': toJson_AppMeshHealthCheckPolicy(obj.healthCheck),
    'outlierDetection': toJson_AppMeshOutlierDetection(obj.outlierDetection),
    'portMapping': toJson_AppMeshPortMapping(obj.portMapping),
    'timeout': toJson_AppMeshListenerTimeout(obj.timeout),
    'tls': toJson_AppMeshListenerTls(obj.tls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshLogging
 */
export interface AppMeshLogging {
  /**
   * @schema AppMeshLogging#accessLog
   */
  readonly accessLog?: AppMeshAccessLog;

}

/**
 * Converts an object of type 'AppMeshLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshLogging(obj: AppMeshLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'accessLog': toJson_AppMeshAccessLog(obj.accessLog),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshServiceDiscovery
 */
export interface AppMeshServiceDiscovery {
  /**
   * @schema AppMeshServiceDiscovery#awsCloudMap
   */
  readonly awsCloudMap?: AppMeshAwsCloudMapServiceDiscovery;

  /**
   * @schema AppMeshServiceDiscovery#dns
   */
  readonly dns?: AppMeshDnsServiceDiscovery;

}

/**
 * Converts an object of type 'AppMeshServiceDiscovery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshServiceDiscovery(obj: AppMeshServiceDiscovery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'awsCloudMap': toJson_AppMeshAwsCloudMapServiceDiscovery(obj.awsCloudMap),
    'dns': toJson_AppMeshDnsServiceDiscovery(obj.dns),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeStatus
 */
export interface AppMeshVirtualNodeStatus {
  /**
   * @schema AppMeshVirtualNodeStatus#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeStatus(obj: AppMeshVirtualNodeStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualRouterListener
 */
export interface AppMeshVirtualRouterListener {
  /**
   * @schema AppMeshVirtualRouterListener#portMapping
   */
  readonly portMapping: AppMeshPortMapping;

}

/**
 * Converts an object of type 'AppMeshVirtualRouterListener' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualRouterListener(obj: AppMeshVirtualRouterListener | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'portMapping': toJson_AppMeshPortMapping(obj.portMapping),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualRouterStatus
 */
export interface AppMeshVirtualRouterStatus {
  /**
   * @schema AppMeshVirtualRouterStatus#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AppMeshVirtualRouterStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualRouterStatus(obj: AppMeshVirtualRouterStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualServiceProvider
 */
export interface AppMeshVirtualServiceProvider {
  /**
   * @schema AppMeshVirtualServiceProvider#virtualNode
   */
  readonly virtualNode?: AppMeshVirtualNodeServiceProvider;

  /**
   * @schema AppMeshVirtualServiceProvider#virtualRouter
   */
  readonly virtualRouter?: AppMeshVirtualRouterServiceProvider;

}

/**
 * Converts an object of type 'AppMeshVirtualServiceProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualServiceProvider(obj: AppMeshVirtualServiceProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNode': toJson_AppMeshVirtualNodeServiceProvider(obj.virtualNode),
    'virtualRouter': toJson_AppMeshVirtualRouterServiceProvider(obj.virtualRouter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualServiceStatus
 */
export interface AppMeshVirtualServiceStatus {
  /**
   * @schema AppMeshVirtualServiceStatus#status
   */
  readonly status: string;

}

/**
 * Converts an object of type 'AppMeshVirtualServiceStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualServiceStatus(obj: AppMeshVirtualServiceStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcGatewayRouteAction
 */
export interface AppMeshGrpcGatewayRouteAction {
  /**
   * @schema AppMeshGrpcGatewayRouteAction#rewrite
   */
  readonly rewrite?: AppMeshGrpcGatewayRouteRewrite;

  /**
   * @schema AppMeshGrpcGatewayRouteAction#target
   */
  readonly target: AppMeshGatewayRouteTarget;

}

/**
 * Converts an object of type 'AppMeshGrpcGatewayRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcGatewayRouteAction(obj: AppMeshGrpcGatewayRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rewrite': toJson_AppMeshGrpcGatewayRouteRewrite(obj.rewrite),
    'target': toJson_AppMeshGatewayRouteTarget(obj.target),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcGatewayRouteMatch
 */
export interface AppMeshGrpcGatewayRouteMatch {
  /**
   * @schema AppMeshGrpcGatewayRouteMatch#hostname
   */
  readonly hostname?: AppMeshGatewayRouteHostnameMatch;

  /**
   * @schema AppMeshGrpcGatewayRouteMatch#metadata
   */
  readonly metadata?: AppMeshGrpcGatewayRouteMetadata[];

  /**
   * @schema AppMeshGrpcGatewayRouteMatch#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'AppMeshGrpcGatewayRouteMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcGatewayRouteMatch(obj: AppMeshGrpcGatewayRouteMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostname': toJson_AppMeshGatewayRouteHostnameMatch(obj.hostname),
    'metadata': obj.metadata?.map(y => toJson_AppMeshGrpcGatewayRouteMetadata(y)),
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRouteAction
 */
export interface AppMeshHttpGatewayRouteAction {
  /**
   * @schema AppMeshHttpGatewayRouteAction#rewrite
   */
  readonly rewrite?: AppMeshHttpGatewayRouteRewrite;

  /**
   * @schema AppMeshHttpGatewayRouteAction#target
   */
  readonly target: AppMeshGatewayRouteTarget;

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRouteAction(obj: AppMeshHttpGatewayRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'rewrite': toJson_AppMeshHttpGatewayRouteRewrite(obj.rewrite),
    'target': toJson_AppMeshGatewayRouteTarget(obj.target),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRouteMatch
 */
export interface AppMeshHttpGatewayRouteMatch {
  /**
   * @schema AppMeshHttpGatewayRouteMatch#headers
   */
  readonly headers?: AppMeshHttpGatewayRouteHeader[];

  /**
   * @schema AppMeshHttpGatewayRouteMatch#hostname
   */
  readonly hostname?: AppMeshGatewayRouteHostnameMatch;

  /**
   * @schema AppMeshHttpGatewayRouteMatch#method
   */
  readonly method?: string;

  /**
   * @schema AppMeshHttpGatewayRouteMatch#path
   */
  readonly path?: AppMeshHttpPathMatch;

  /**
   * @schema AppMeshHttpGatewayRouteMatch#prefix
   */
  readonly prefix?: string;

  /**
   * @schema AppMeshHttpGatewayRouteMatch#queryParameters
   */
  readonly queryParameters?: AppMeshHttpQueryParameter[];

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRouteMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRouteMatch(obj: AppMeshHttpGatewayRouteMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'headers': obj.headers?.map(y => toJson_AppMeshHttpGatewayRouteHeader(y)),
    'hostname': toJson_AppMeshGatewayRouteHostnameMatch(obj.hostname),
    'method': obj.method,
    'path': toJson_AppMeshHttpPathMatch(obj.path),
    'prefix': obj.prefix,
    'queryParameters': obj.queryParameters?.map(y => toJson_AppMeshHttpQueryParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcRouteAction
 */
export interface AppMeshGrpcRouteAction {
  /**
   * @schema AppMeshGrpcRouteAction#weightedTargets
   */
  readonly weightedTargets: AppMeshWeightedTarget[];

}

/**
 * Converts an object of type 'AppMeshGrpcRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcRouteAction(obj: AppMeshGrpcRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'weightedTargets': obj.weightedTargets?.map(y => toJson_AppMeshWeightedTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcRouteMatch
 */
export interface AppMeshGrpcRouteMatch {
  /**
   * @schema AppMeshGrpcRouteMatch#metadata
   */
  readonly metadata?: AppMeshGrpcRouteMetadata[];

  /**
   * @schema AppMeshGrpcRouteMatch#methodName
   */
  readonly methodName?: string;

  /**
   * @schema AppMeshGrpcRouteMatch#serviceName
   */
  readonly serviceName?: string;

}

/**
 * Converts an object of type 'AppMeshGrpcRouteMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcRouteMatch(obj: AppMeshGrpcRouteMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata?.map(y => toJson_AppMeshGrpcRouteMetadata(y)),
    'methodName': obj.methodName,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcRetryPolicy
 */
export interface AppMeshGrpcRetryPolicy {
  /**
   * @schema AppMeshGrpcRetryPolicy#grpcRetryEvents
   */
  readonly grpcRetryEvents?: string[];

  /**
   * @schema AppMeshGrpcRetryPolicy#httpRetryEvents
   */
  readonly httpRetryEvents?: string[];

  /**
   * @schema AppMeshGrpcRetryPolicy#maxRetries
   */
  readonly maxRetries: number;

  /**
   * @schema AppMeshGrpcRetryPolicy#perRetryTimeout
   */
  readonly perRetryTimeout: AppMeshDuration;

  /**
   * @schema AppMeshGrpcRetryPolicy#tcpRetryEvents
   */
  readonly tcpRetryEvents?: string[];

}

/**
 * Converts an object of type 'AppMeshGrpcRetryPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcRetryPolicy(obj: AppMeshGrpcRetryPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grpcRetryEvents': obj.grpcRetryEvents?.map(y => y),
    'httpRetryEvents': obj.httpRetryEvents?.map(y => y),
    'maxRetries': obj.maxRetries,
    'perRetryTimeout': toJson_AppMeshDuration(obj.perRetryTimeout),
    'tcpRetryEvents': obj.tcpRetryEvents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcTimeout
 */
export interface AppMeshGrpcTimeout {
  /**
   * @schema AppMeshGrpcTimeout#idle
   */
  readonly idle?: AppMeshDuration;

  /**
   * @schema AppMeshGrpcTimeout#perRequest
   */
  readonly perRequest?: AppMeshDuration;

}

/**
 * Converts an object of type 'AppMeshGrpcTimeout' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcTimeout(obj: AppMeshGrpcTimeout | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'idle': toJson_AppMeshDuration(obj.idle),
    'perRequest': toJson_AppMeshDuration(obj.perRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpRouteAction
 */
export interface AppMeshHttpRouteAction {
  /**
   * @schema AppMeshHttpRouteAction#weightedTargets
   */
  readonly weightedTargets: AppMeshWeightedTarget[];

}

/**
 * Converts an object of type 'AppMeshHttpRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpRouteAction(obj: AppMeshHttpRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'weightedTargets': obj.weightedTargets?.map(y => toJson_AppMeshWeightedTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpRouteMatch
 */
export interface AppMeshHttpRouteMatch {
  /**
   * @schema AppMeshHttpRouteMatch#headers
   */
  readonly headers?: AppMeshHttpRouteHeader[];

  /**
   * @schema AppMeshHttpRouteMatch#method
   */
  readonly method?: string;

  /**
   * @schema AppMeshHttpRouteMatch#path
   */
  readonly path?: AppMeshHttpPathMatch;

  /**
   * @schema AppMeshHttpRouteMatch#prefix
   */
  readonly prefix?: string;

  /**
   * @schema AppMeshHttpRouteMatch#queryParameters
   */
  readonly queryParameters?: AppMeshHttpQueryParameter[];

  /**
   * @schema AppMeshHttpRouteMatch#scheme
   */
  readonly scheme?: string;

}

/**
 * Converts an object of type 'AppMeshHttpRouteMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpRouteMatch(obj: AppMeshHttpRouteMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'headers': obj.headers?.map(y => toJson_AppMeshHttpRouteHeader(y)),
    'method': obj.method,
    'path': toJson_AppMeshHttpPathMatch(obj.path),
    'prefix': obj.prefix,
    'queryParameters': obj.queryParameters?.map(y => toJson_AppMeshHttpQueryParameter(y)),
    'scheme': obj.scheme,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpRetryPolicy
 */
export interface AppMeshHttpRetryPolicy {
  /**
   * @schema AppMeshHttpRetryPolicy#httpRetryEvents
   */
  readonly httpRetryEvents?: string[];

  /**
   * @schema AppMeshHttpRetryPolicy#maxRetries
   */
  readonly maxRetries: number;

  /**
   * @schema AppMeshHttpRetryPolicy#perRetryTimeout
   */
  readonly perRetryTimeout: AppMeshDuration;

  /**
   * @schema AppMeshHttpRetryPolicy#tcpRetryEvents
   */
  readonly tcpRetryEvents?: string[];

}

/**
 * Converts an object of type 'AppMeshHttpRetryPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpRetryPolicy(obj: AppMeshHttpRetryPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'httpRetryEvents': obj.httpRetryEvents?.map(y => y),
    'maxRetries': obj.maxRetries,
    'perRetryTimeout': toJson_AppMeshDuration(obj.perRetryTimeout),
    'tcpRetryEvents': obj.tcpRetryEvents?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpTimeout
 */
export interface AppMeshHttpTimeout {
  /**
   * @schema AppMeshHttpTimeout#idle
   */
  readonly idle?: AppMeshDuration;

  /**
   * @schema AppMeshHttpTimeout#perRequest
   */
  readonly perRequest?: AppMeshDuration;

}

/**
 * Converts an object of type 'AppMeshHttpTimeout' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpTimeout(obj: AppMeshHttpTimeout | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'idle': toJson_AppMeshDuration(obj.idle),
    'perRequest': toJson_AppMeshDuration(obj.perRequest),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTcpRouteAction
 */
export interface AppMeshTcpRouteAction {
  /**
   * @schema AppMeshTcpRouteAction#weightedTargets
   */
  readonly weightedTargets: AppMeshWeightedTarget[];

}

/**
 * Converts an object of type 'AppMeshTcpRouteAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTcpRouteAction(obj: AppMeshTcpRouteAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'weightedTargets': obj.weightedTargets?.map(y => toJson_AppMeshWeightedTarget(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTcpTimeout
 */
export interface AppMeshTcpTimeout {
  /**
   * @schema AppMeshTcpTimeout#idle
   */
  readonly idle?: AppMeshDuration;

}

/**
 * Converts an object of type 'AppMeshTcpTimeout' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTcpTimeout(obj: AppMeshTcpTimeout | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'idle': toJson_AppMeshDuration(obj.idle),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayClientPolicy
 */
export interface AppMeshVirtualGatewayClientPolicy {
  /**
   * @schema AppMeshVirtualGatewayClientPolicy#tls
   */
  readonly tls?: AppMeshVirtualGatewayClientPolicyTls;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayClientPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayClientPolicy(obj: AppMeshVirtualGatewayClientPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tls': toJson_AppMeshVirtualGatewayClientPolicyTls(obj.tls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayConnectionPool
 */
export interface AppMeshVirtualGatewayConnectionPool {
  /**
   * @schema AppMeshVirtualGatewayConnectionPool#grpc
   */
  readonly grpc?: AppMeshVirtualGatewayGrpcConnectionPool;

  /**
   * @schema AppMeshVirtualGatewayConnectionPool#http
   */
  readonly http?: AppMeshVirtualGatewayHttpConnectionPool;

  /**
   * @schema AppMeshVirtualGatewayConnectionPool#http2
   */
  readonly http2?: AppMeshVirtualGatewayHttp2ConnectionPool;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayConnectionPool(obj: AppMeshVirtualGatewayConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grpc': toJson_AppMeshVirtualGatewayGrpcConnectionPool(obj.grpc),
    'http': toJson_AppMeshVirtualGatewayHttpConnectionPool(obj.http),
    'http2': toJson_AppMeshVirtualGatewayHttp2ConnectionPool(obj.http2),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayHealthCheckPolicy
 */
export interface AppMeshVirtualGatewayHealthCheckPolicy {
  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#healthyThreshold
   */
  readonly healthyThreshold: number;

  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#intervalMillis
   */
  readonly intervalMillis: number;

  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#path
   */
  readonly path?: string;

  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#port
   */
  readonly port?: number;

  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#protocol
   */
  readonly protocol: string;

  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#timeoutMillis
   */
  readonly timeoutMillis: number;

  /**
   * @schema AppMeshVirtualGatewayHealthCheckPolicy#unhealthyThreshold
   */
  readonly unhealthyThreshold: number;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayHealthCheckPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayHealthCheckPolicy(obj: AppMeshVirtualGatewayHealthCheckPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'healthyThreshold': obj.healthyThreshold,
    'intervalMillis': obj.intervalMillis,
    'path': obj.path,
    'port': obj.port,
    'protocol': obj.protocol,
    'timeoutMillis': obj.timeoutMillis,
    'unhealthyThreshold': obj.unhealthyThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayPortMapping
 */
export interface AppMeshVirtualGatewayPortMapping {
  /**
   * @schema AppMeshVirtualGatewayPortMapping#port
   */
  readonly port: number;

  /**
   * @schema AppMeshVirtualGatewayPortMapping#protocol
   */
  readonly protocol: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayPortMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayPortMapping(obj: AppMeshVirtualGatewayPortMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'port': obj.port,
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTls
 */
export interface AppMeshVirtualGatewayListenerTls {
  /**
   * @schema AppMeshVirtualGatewayListenerTls#certificate
   */
  readonly certificate: AppMeshVirtualGatewayListenerTlsCertificate;

  /**
   * @schema AppMeshVirtualGatewayListenerTls#mode
   */
  readonly mode: string;

  /**
   * @schema AppMeshVirtualGatewayListenerTls#validation
   */
  readonly validation?: AppMeshVirtualGatewayListenerTlsValidationContext;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTls(obj: AppMeshVirtualGatewayListenerTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificate': toJson_AppMeshVirtualGatewayListenerTlsCertificate(obj.certificate),
    'mode': obj.mode,
    'validation': toJson_AppMeshVirtualGatewayListenerTlsValidationContext(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayAccessLog
 */
export interface AppMeshVirtualGatewayAccessLog {
  /**
   * @schema AppMeshVirtualGatewayAccessLog#file
   */
  readonly file?: AppMeshVirtualGatewayFileAccessLog;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayAccessLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayAccessLog(obj: AppMeshVirtualGatewayAccessLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'file': toJson_AppMeshVirtualGatewayFileAccessLog(obj.file),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshClientPolicy
 */
export interface AppMeshClientPolicy {
  /**
   * @schema AppMeshClientPolicy#tls
   */
  readonly tls?: AppMeshClientPolicyTls;

}

/**
 * Converts an object of type 'AppMeshClientPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshClientPolicy(obj: AppMeshClientPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tls': toJson_AppMeshClientPolicyTls(obj.tls),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualServiceBackend
 */
export interface AppMeshVirtualServiceBackend {
  /**
   * @schema AppMeshVirtualServiceBackend#clientPolicy
   */
  readonly clientPolicy?: AppMeshClientPolicy;

  /**
   * @schema AppMeshVirtualServiceBackend#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualServiceBackend' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualServiceBackend(obj: AppMeshVirtualServiceBackend | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientPolicy': toJson_AppMeshClientPolicy(obj.clientPolicy),
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeConnectionPool
 */
export interface AppMeshVirtualNodeConnectionPool {
  /**
   * @schema AppMeshVirtualNodeConnectionPool#grpc
   */
  readonly grpc?: AppMeshVirtualNodeGrpcConnectionPool;

  /**
   * @schema AppMeshVirtualNodeConnectionPool#http
   */
  readonly http?: AppMeshVirtualNodeHttpConnectionPool;

  /**
   * @schema AppMeshVirtualNodeConnectionPool#http2
   */
  readonly http2?: AppMeshVirtualNodeHttp2ConnectionPool;

  /**
   * @schema AppMeshVirtualNodeConnectionPool#tcp
   */
  readonly tcp?: AppMeshVirtualNodeTcpConnectionPool;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeConnectionPool(obj: AppMeshVirtualNodeConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grpc': toJson_AppMeshVirtualNodeGrpcConnectionPool(obj.grpc),
    'http': toJson_AppMeshVirtualNodeHttpConnectionPool(obj.http),
    'http2': toJson_AppMeshVirtualNodeHttp2ConnectionPool(obj.http2),
    'tcp': toJson_AppMeshVirtualNodeTcpConnectionPool(obj.tcp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHealthCheckPolicy
 */
export interface AppMeshHealthCheckPolicy {
  /**
   * @schema AppMeshHealthCheckPolicy#healthyThreshold
   */
  readonly healthyThreshold: number;

  /**
   * @schema AppMeshHealthCheckPolicy#intervalMillis
   */
  readonly intervalMillis: number;

  /**
   * @schema AppMeshHealthCheckPolicy#path
   */
  readonly path?: string;

  /**
   * @schema AppMeshHealthCheckPolicy#port
   */
  readonly port?: number;

  /**
   * @schema AppMeshHealthCheckPolicy#protocol
   */
  readonly protocol: string;

  /**
   * @schema AppMeshHealthCheckPolicy#timeoutMillis
   */
  readonly timeoutMillis: number;

  /**
   * @schema AppMeshHealthCheckPolicy#unhealthyThreshold
   */
  readonly unhealthyThreshold: number;

}

/**
 * Converts an object of type 'AppMeshHealthCheckPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHealthCheckPolicy(obj: AppMeshHealthCheckPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'healthyThreshold': obj.healthyThreshold,
    'intervalMillis': obj.intervalMillis,
    'path': obj.path,
    'port': obj.port,
    'protocol': obj.protocol,
    'timeoutMillis': obj.timeoutMillis,
    'unhealthyThreshold': obj.unhealthyThreshold,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshOutlierDetection
 */
export interface AppMeshOutlierDetection {
  /**
   * @schema AppMeshOutlierDetection#baseEjectionDuration
   */
  readonly baseEjectionDuration: AppMeshDuration;

  /**
   * @schema AppMeshOutlierDetection#interval
   */
  readonly interval: AppMeshDuration;

  /**
   * @schema AppMeshOutlierDetection#maxEjectionPercent
   */
  readonly maxEjectionPercent: number;

  /**
   * @schema AppMeshOutlierDetection#maxServerErrors
   */
  readonly maxServerErrors: number;

}

/**
 * Converts an object of type 'AppMeshOutlierDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshOutlierDetection(obj: AppMeshOutlierDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'baseEjectionDuration': toJson_AppMeshDuration(obj.baseEjectionDuration),
    'interval': toJson_AppMeshDuration(obj.interval),
    'maxEjectionPercent': obj.maxEjectionPercent,
    'maxServerErrors': obj.maxServerErrors,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshPortMapping
 */
export interface AppMeshPortMapping {
  /**
   * @schema AppMeshPortMapping#port
   */
  readonly port: number;

  /**
   * @schema AppMeshPortMapping#protocol
   */
  readonly protocol: string;

}

/**
 * Converts an object of type 'AppMeshPortMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshPortMapping(obj: AppMeshPortMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'port': obj.port,
    'protocol': obj.protocol,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTimeout
 */
export interface AppMeshListenerTimeout {
  /**
   * @schema AppMeshListenerTimeout#grpc
   */
  readonly grpc?: AppMeshGrpcTimeout;

  /**
   * @schema AppMeshListenerTimeout#http
   */
  readonly http?: AppMeshHttpTimeout;

  /**
   * @schema AppMeshListenerTimeout#http2
   */
  readonly http2?: AppMeshHttpTimeout;

  /**
   * @schema AppMeshListenerTimeout#tcp
   */
  readonly tcp?: AppMeshTcpTimeout;

}

/**
 * Converts an object of type 'AppMeshListenerTimeout' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTimeout(obj: AppMeshListenerTimeout | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'grpc': toJson_AppMeshGrpcTimeout(obj.grpc),
    'http': toJson_AppMeshHttpTimeout(obj.http),
    'http2': toJson_AppMeshHttpTimeout(obj.http2),
    'tcp': toJson_AppMeshTcpTimeout(obj.tcp),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTls
 */
export interface AppMeshListenerTls {
  /**
   * @schema AppMeshListenerTls#certificate
   */
  readonly certificate: AppMeshListenerTlsCertificate;

  /**
   * @schema AppMeshListenerTls#mode
   */
  readonly mode: string;

  /**
   * @schema AppMeshListenerTls#validation
   */
  readonly validation?: AppMeshListenerTlsValidationContext;

}

/**
 * Converts an object of type 'AppMeshListenerTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTls(obj: AppMeshListenerTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificate': toJson_AppMeshListenerTlsCertificate(obj.certificate),
    'mode': obj.mode,
    'validation': toJson_AppMeshListenerTlsValidationContext(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshAccessLog
 */
export interface AppMeshAccessLog {
  /**
   * @schema AppMeshAccessLog#file
   */
  readonly file?: AppMeshFileAccessLog;

}

/**
 * Converts an object of type 'AppMeshAccessLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshAccessLog(obj: AppMeshAccessLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'file': toJson_AppMeshFileAccessLog(obj.file),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshAwsCloudMapServiceDiscovery
 */
export interface AppMeshAwsCloudMapServiceDiscovery {
  /**
   * @schema AppMeshAwsCloudMapServiceDiscovery#attributes
   */
  readonly attributes?: AppMeshAwsCloudMapInstanceAttribute[];

  /**
   * @schema AppMeshAwsCloudMapServiceDiscovery#namespaceName
   */
  readonly namespaceName: string;

  /**
   * @schema AppMeshAwsCloudMapServiceDiscovery#serviceName
   */
  readonly serviceName: string;

}

/**
 * Converts an object of type 'AppMeshAwsCloudMapServiceDiscovery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshAwsCloudMapServiceDiscovery(obj: AppMeshAwsCloudMapServiceDiscovery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attributes': obj.attributes?.map(y => toJson_AppMeshAwsCloudMapInstanceAttribute(y)),
    'namespaceName': obj.namespaceName,
    'serviceName': obj.serviceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDnsServiceDiscovery
 */
export interface AppMeshDnsServiceDiscovery {
  /**
   * @schema AppMeshDnsServiceDiscovery#hostname
   */
  readonly hostname: string;

  /**
   * @schema AppMeshDnsServiceDiscovery#responseType
   */
  readonly responseType?: string;

}

/**
 * Converts an object of type 'AppMeshDnsServiceDiscovery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDnsServiceDiscovery(obj: AppMeshDnsServiceDiscovery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostname': obj.hostname,
    'responseType': obj.responseType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeServiceProvider
 */
export interface AppMeshVirtualNodeServiceProvider {
  /**
   * @schema AppMeshVirtualNodeServiceProvider#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeServiceProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeServiceProvider(obj: AppMeshVirtualNodeServiceProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNodeName': obj.virtualNodeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualRouterServiceProvider
 */
export interface AppMeshVirtualRouterServiceProvider {
  /**
   * @schema AppMeshVirtualRouterServiceProvider#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualRouterServiceProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualRouterServiceProvider(obj: AppMeshVirtualRouterServiceProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualRouterName': obj.virtualRouterName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcGatewayRouteRewrite
 */
export interface AppMeshGrpcGatewayRouteRewrite {
  /**
   * @schema AppMeshGrpcGatewayRouteRewrite#hostname
   */
  readonly hostname?: AppMeshGatewayRouteHostnameRewrite;

}

/**
 * Converts an object of type 'AppMeshGrpcGatewayRouteRewrite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcGatewayRouteRewrite(obj: AppMeshGrpcGatewayRouteRewrite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostname': toJson_AppMeshGatewayRouteHostnameRewrite(obj.hostname),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGatewayRouteTarget
 */
export interface AppMeshGatewayRouteTarget {
  /**
   * @schema AppMeshGatewayRouteTarget#virtualService
   */
  readonly virtualService: AppMeshGatewayRouteVirtualService;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteTarget(obj: AppMeshGatewayRouteTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualService': toJson_AppMeshGatewayRouteVirtualService(obj.virtualService),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGatewayRouteHostnameMatch
 */
export interface AppMeshGatewayRouteHostnameMatch {
  /**
   * @schema AppMeshGatewayRouteHostnameMatch#exact
   */
  readonly exact?: string;

  /**
   * @schema AppMeshGatewayRouteHostnameMatch#suffix
   */
  readonly suffix?: string;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteHostnameMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteHostnameMatch(obj: AppMeshGatewayRouteHostnameMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
    'suffix': obj.suffix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcGatewayRouteMetadata
 */
export interface AppMeshGrpcGatewayRouteMetadata {
  /**
   * @schema AppMeshGrpcGatewayRouteMetadata#invert
   */
  readonly invert?: boolean;

  /**
   * @schema AppMeshGrpcGatewayRouteMetadata#match
   */
  readonly match?: AppMeshGrpcMetadataMatchMethod;

  /**
   * @schema AppMeshGrpcGatewayRouteMetadata#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppMeshGrpcGatewayRouteMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcGatewayRouteMetadata(obj: AppMeshGrpcGatewayRouteMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invert': obj.invert,
    'match': toJson_AppMeshGrpcMetadataMatchMethod(obj.match),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRouteRewrite
 */
export interface AppMeshHttpGatewayRouteRewrite {
  /**
   * @schema AppMeshHttpGatewayRouteRewrite#hostname
   */
  readonly hostname?: AppMeshGatewayRouteHostnameRewrite;

  /**
   * @schema AppMeshHttpGatewayRouteRewrite#path
   */
  readonly path?: AppMeshHttpGatewayRoutePathRewrite;

  /**
   * @schema AppMeshHttpGatewayRouteRewrite#prefix
   */
  readonly prefix?: AppMeshHttpGatewayRoutePrefixRewrite;

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRouteRewrite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRouteRewrite(obj: AppMeshHttpGatewayRouteRewrite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'hostname': toJson_AppMeshGatewayRouteHostnameRewrite(obj.hostname),
    'path': toJson_AppMeshHttpGatewayRoutePathRewrite(obj.path),
    'prefix': toJson_AppMeshHttpGatewayRoutePrefixRewrite(obj.prefix),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRouteHeader
 */
export interface AppMeshHttpGatewayRouteHeader {
  /**
   * @schema AppMeshHttpGatewayRouteHeader#invert
   */
  readonly invert?: boolean;

  /**
   * @schema AppMeshHttpGatewayRouteHeader#match
   */
  readonly match?: AppMeshHeaderMatchMethod;

  /**
   * @schema AppMeshHttpGatewayRouteHeader#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRouteHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRouteHeader(obj: AppMeshHttpGatewayRouteHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invert': obj.invert,
    'match': toJson_AppMeshHeaderMatchMethod(obj.match),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpPathMatch
 */
export interface AppMeshHttpPathMatch {
  /**
   * @schema AppMeshHttpPathMatch#exact
   */
  readonly exact?: string;

  /**
   * @schema AppMeshHttpPathMatch#regex
   */
  readonly regex?: string;

}

/**
 * Converts an object of type 'AppMeshHttpPathMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpPathMatch(obj: AppMeshHttpPathMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
    'regex': obj.regex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpQueryParameter
 */
export interface AppMeshHttpQueryParameter {
  /**
   * @schema AppMeshHttpQueryParameter#match
   */
  readonly match?: AppMeshQueryParameterMatch;

  /**
   * @schema AppMeshHttpQueryParameter#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppMeshHttpQueryParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpQueryParameter(obj: AppMeshHttpQueryParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'match': toJson_AppMeshQueryParameterMatch(obj.match),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshWeightedTarget
 */
export interface AppMeshWeightedTarget {
  /**
   * @schema AppMeshWeightedTarget#virtualNode
   */
  readonly virtualNode: string;

  /**
   * @schema AppMeshWeightedTarget#weight
   */
  readonly weight: number;

}

/**
 * Converts an object of type 'AppMeshWeightedTarget' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshWeightedTarget(obj: AppMeshWeightedTarget | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualNode': obj.virtualNode,
    'weight': obj.weight,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcRouteMetadata
 */
export interface AppMeshGrpcRouteMetadata {
  /**
   * @schema AppMeshGrpcRouteMetadata#invert
   */
  readonly invert?: boolean;

  /**
   * @schema AppMeshGrpcRouteMetadata#match
   */
  readonly match?: AppMeshGrpcRouteMetadataMatchMethod;

  /**
   * @schema AppMeshGrpcRouteMetadata#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppMeshGrpcRouteMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcRouteMetadata(obj: AppMeshGrpcRouteMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invert': obj.invert,
    'match': toJson_AppMeshGrpcRouteMetadataMatchMethod(obj.match),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshDuration
 */
export interface AppMeshDuration {
  /**
   * @schema AppMeshDuration#unit
   */
  readonly unit?: string;

  /**
   * @schema AppMeshDuration#value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'AppMeshDuration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshDuration(obj: AppMeshDuration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'unit': obj.unit,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpRouteHeader
 */
export interface AppMeshHttpRouteHeader {
  /**
   * @schema AppMeshHttpRouteHeader#invert
   */
  readonly invert?: boolean;

  /**
   * @schema AppMeshHttpRouteHeader#match
   */
  readonly match?: AppMeshHeaderMatchMethod;

  /**
   * @schema AppMeshHttpRouteHeader#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'AppMeshHttpRouteHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpRouteHeader(obj: AppMeshHttpRouteHeader | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'invert': obj.invert,
    'match': toJson_AppMeshHeaderMatchMethod(obj.match),
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayClientPolicyTls
 */
export interface AppMeshVirtualGatewayClientPolicyTls {
  /**
   * @schema AppMeshVirtualGatewayClientPolicyTls#certificate
   */
  readonly certificate?: AppMeshVirtualGatewayClientTlsCertificate;

  /**
   * @schema AppMeshVirtualGatewayClientPolicyTls#enforce
   */
  readonly enforce?: boolean;

  /**
   * @schema AppMeshVirtualGatewayClientPolicyTls#ports
   */
  readonly ports?: number[];

  /**
   * @schema AppMeshVirtualGatewayClientPolicyTls#validation
   */
  readonly validation: AppMeshVirtualGatewayTlsValidationContext;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayClientPolicyTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayClientPolicyTls(obj: AppMeshVirtualGatewayClientPolicyTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificate': toJson_AppMeshVirtualGatewayClientTlsCertificate(obj.certificate),
    'enforce': obj.enforce,
    'ports': obj.ports?.map(y => y),
    'validation': toJson_AppMeshVirtualGatewayTlsValidationContext(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayGrpcConnectionPool
 */
export interface AppMeshVirtualGatewayGrpcConnectionPool {
  /**
   * @schema AppMeshVirtualGatewayGrpcConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayGrpcConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayGrpcConnectionPool(obj: AppMeshVirtualGatewayGrpcConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxRequests': obj.maxRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayHttpConnectionPool
 */
export interface AppMeshVirtualGatewayHttpConnectionPool {
  /**
   * @schema AppMeshVirtualGatewayHttpConnectionPool#maxConnections
   */
  readonly maxConnections: number;

  /**
   * @schema AppMeshVirtualGatewayHttpConnectionPool#maxPendingRequests
   */
  readonly maxPendingRequests?: number;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayHttpConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayHttpConnectionPool(obj: AppMeshVirtualGatewayHttpConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxConnections': obj.maxConnections,
    'maxPendingRequests': obj.maxPendingRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayHttp2ConnectionPool
 */
export interface AppMeshVirtualGatewayHttp2ConnectionPool {
  /**
   * @schema AppMeshVirtualGatewayHttp2ConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayHttp2ConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayHttp2ConnectionPool(obj: AppMeshVirtualGatewayHttp2ConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxRequests': obj.maxRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTlsCertificate
 */
export interface AppMeshVirtualGatewayListenerTlsCertificate {
  /**
   * @schema AppMeshVirtualGatewayListenerTlsCertificate#acm
   */
  readonly acm?: AppMeshVirtualGatewayListenerTlsAcmCertificate;

  /**
   * @schema AppMeshVirtualGatewayListenerTlsCertificate#file
   */
  readonly file?: AppMeshVirtualGatewayListenerTlsFileCertificate;

  /**
   * @schema AppMeshVirtualGatewayListenerTlsCertificate#sds
   */
  readonly sds?: AppMeshVirtualGatewayListenerTlsSdsCertificate;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTlsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTlsCertificate(obj: AppMeshVirtualGatewayListenerTlsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acm': toJson_AppMeshVirtualGatewayListenerTlsAcmCertificate(obj.acm),
    'file': toJson_AppMeshVirtualGatewayListenerTlsFileCertificate(obj.file),
    'sds': toJson_AppMeshVirtualGatewayListenerTlsSdsCertificate(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTlsValidationContext
 */
export interface AppMeshVirtualGatewayListenerTlsValidationContext {
  /**
   * @schema AppMeshVirtualGatewayListenerTlsValidationContext#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: AppMeshSubjectAlternativeNames;

  /**
   * @schema AppMeshVirtualGatewayListenerTlsValidationContext#trust
   */
  readonly trust: AppMeshVirtualGatewayListenerTlsValidationContextTrust;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTlsValidationContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTlsValidationContext(obj: AppMeshVirtualGatewayListenerTlsValidationContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subjectAlternativeNames': toJson_AppMeshSubjectAlternativeNames(obj.subjectAlternativeNames),
    'trust': toJson_AppMeshVirtualGatewayListenerTlsValidationContextTrust(obj.trust),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayFileAccessLog
 */
export interface AppMeshVirtualGatewayFileAccessLog {
  /**
   * @schema AppMeshVirtualGatewayFileAccessLog#path
   */
  readonly path: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayFileAccessLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayFileAccessLog(obj: AppMeshVirtualGatewayFileAccessLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshClientPolicyTls
 */
export interface AppMeshClientPolicyTls {
  /**
   * @schema AppMeshClientPolicyTls#certificate
   */
  readonly certificate?: AppMeshClientTlsCertificate;

  /**
   * @schema AppMeshClientPolicyTls#enforce
   */
  readonly enforce?: boolean;

  /**
   * @schema AppMeshClientPolicyTls#ports
   */
  readonly ports?: number[];

  /**
   * @schema AppMeshClientPolicyTls#validation
   */
  readonly validation: AppMeshTlsValidationContext;

}

/**
 * Converts an object of type 'AppMeshClientPolicyTls' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshClientPolicyTls(obj: AppMeshClientPolicyTls | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificate': toJson_AppMeshClientTlsCertificate(obj.certificate),
    'enforce': obj.enforce,
    'ports': obj.ports?.map(y => y),
    'validation': toJson_AppMeshTlsValidationContext(obj.validation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeGrpcConnectionPool
 */
export interface AppMeshVirtualNodeGrpcConnectionPool {
  /**
   * @schema AppMeshVirtualNodeGrpcConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeGrpcConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeGrpcConnectionPool(obj: AppMeshVirtualNodeGrpcConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxRequests': obj.maxRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeHttpConnectionPool
 */
export interface AppMeshVirtualNodeHttpConnectionPool {
  /**
   * @schema AppMeshVirtualNodeHttpConnectionPool#maxConnections
   */
  readonly maxConnections: number;

  /**
   * @schema AppMeshVirtualNodeHttpConnectionPool#maxPendingRequests
   */
  readonly maxPendingRequests?: number;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeHttpConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeHttpConnectionPool(obj: AppMeshVirtualNodeHttpConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxConnections': obj.maxConnections,
    'maxPendingRequests': obj.maxPendingRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeHttp2ConnectionPool
 */
export interface AppMeshVirtualNodeHttp2ConnectionPool {
  /**
   * @schema AppMeshVirtualNodeHttp2ConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeHttp2ConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeHttp2ConnectionPool(obj: AppMeshVirtualNodeHttp2ConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxRequests': obj.maxRequests,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualNodeTcpConnectionPool
 */
export interface AppMeshVirtualNodeTcpConnectionPool {
  /**
   * @schema AppMeshVirtualNodeTcpConnectionPool#maxConnections
   */
  readonly maxConnections: number;

}

/**
 * Converts an object of type 'AppMeshVirtualNodeTcpConnectionPool' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualNodeTcpConnectionPool(obj: AppMeshVirtualNodeTcpConnectionPool | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxConnections': obj.maxConnections,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTlsCertificate
 */
export interface AppMeshListenerTlsCertificate {
  /**
   * @schema AppMeshListenerTlsCertificate#acm
   */
  readonly acm?: AppMeshListenerTlsAcmCertificate;

  /**
   * @schema AppMeshListenerTlsCertificate#file
   */
  readonly file?: AppMeshListenerTlsFileCertificate;

  /**
   * @schema AppMeshListenerTlsCertificate#sds
   */
  readonly sds?: AppMeshListenerTlsSdsCertificate;

}

/**
 * Converts an object of type 'AppMeshListenerTlsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTlsCertificate(obj: AppMeshListenerTlsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acm': toJson_AppMeshListenerTlsAcmCertificate(obj.acm),
    'file': toJson_AppMeshListenerTlsFileCertificate(obj.file),
    'sds': toJson_AppMeshListenerTlsSdsCertificate(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTlsValidationContext
 */
export interface AppMeshListenerTlsValidationContext {
  /**
   * @schema AppMeshListenerTlsValidationContext#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: AppMeshSubjectAlternativeNames;

  /**
   * @schema AppMeshListenerTlsValidationContext#trust
   */
  readonly trust: AppMeshListenerTlsValidationContextTrust;

}

/**
 * Converts an object of type 'AppMeshListenerTlsValidationContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTlsValidationContext(obj: AppMeshListenerTlsValidationContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subjectAlternativeNames': toJson_AppMeshSubjectAlternativeNames(obj.subjectAlternativeNames),
    'trust': toJson_AppMeshListenerTlsValidationContextTrust(obj.trust),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshFileAccessLog
 */
export interface AppMeshFileAccessLog {
  /**
   * @schema AppMeshFileAccessLog#path
   */
  readonly path: string;

}

/**
 * Converts an object of type 'AppMeshFileAccessLog' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshFileAccessLog(obj: AppMeshFileAccessLog | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'path': obj.path,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshAwsCloudMapInstanceAttribute
 */
export interface AppMeshAwsCloudMapInstanceAttribute {
  /**
   * @schema AppMeshAwsCloudMapInstanceAttribute#key
   */
  readonly key: string;

  /**
   * @schema AppMeshAwsCloudMapInstanceAttribute#value
   */
  readonly value: string;

}

/**
 * Converts an object of type 'AppMeshAwsCloudMapInstanceAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshAwsCloudMapInstanceAttribute(obj: AppMeshAwsCloudMapInstanceAttribute | undefined): Record<string, any> | undefined {
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
 * @schema AppMeshGatewayRouteHostnameRewrite
 */
export interface AppMeshGatewayRouteHostnameRewrite {
  /**
   * @schema AppMeshGatewayRouteHostnameRewrite#defaultTargetHostname
   */
  readonly defaultTargetHostname?: string;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteHostnameRewrite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteHostnameRewrite(obj: AppMeshGatewayRouteHostnameRewrite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultTargetHostname': obj.defaultTargetHostname,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGatewayRouteVirtualService
 */
export interface AppMeshGatewayRouteVirtualService {
  /**
   * @schema AppMeshGatewayRouteVirtualService#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * Converts an object of type 'AppMeshGatewayRouteVirtualService' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGatewayRouteVirtualService(obj: AppMeshGatewayRouteVirtualService | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'virtualServiceName': obj.virtualServiceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcMetadataMatchMethod
 */
export interface AppMeshGrpcMetadataMatchMethod {
  /**
   * @schema AppMeshGrpcMetadataMatchMethod#exact
   */
  readonly exact?: string;

  /**
   * @schema AppMeshGrpcMetadataMatchMethod#prefix
   */
  readonly prefix?: string;

  /**
   * @schema AppMeshGrpcMetadataMatchMethod#range
   */
  readonly range?: AppMeshMatchRange;

  /**
   * @schema AppMeshGrpcMetadataMatchMethod#regex
   */
  readonly regex?: string;

  /**
   * @schema AppMeshGrpcMetadataMatchMethod#suffix
   */
  readonly suffix?: string;

}

/**
 * Converts an object of type 'AppMeshGrpcMetadataMatchMethod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcMetadataMatchMethod(obj: AppMeshGrpcMetadataMatchMethod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
    'prefix': obj.prefix,
    'range': toJson_AppMeshMatchRange(obj.range),
    'regex': obj.regex,
    'suffix': obj.suffix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRoutePathRewrite
 */
export interface AppMeshHttpGatewayRoutePathRewrite {
  /**
   * @schema AppMeshHttpGatewayRoutePathRewrite#exact
   */
  readonly exact?: string;

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRoutePathRewrite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRoutePathRewrite(obj: AppMeshHttpGatewayRoutePathRewrite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHttpGatewayRoutePrefixRewrite
 */
export interface AppMeshHttpGatewayRoutePrefixRewrite {
  /**
   * @schema AppMeshHttpGatewayRoutePrefixRewrite#defaultPrefix
   */
  readonly defaultPrefix?: string;

  /**
   * @schema AppMeshHttpGatewayRoutePrefixRewrite#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'AppMeshHttpGatewayRoutePrefixRewrite' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHttpGatewayRoutePrefixRewrite(obj: AppMeshHttpGatewayRoutePrefixRewrite | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'defaultPrefix': obj.defaultPrefix,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshHeaderMatchMethod
 */
export interface AppMeshHeaderMatchMethod {
  /**
   * @schema AppMeshHeaderMatchMethod#exact
   */
  readonly exact?: string;

  /**
   * @schema AppMeshHeaderMatchMethod#prefix
   */
  readonly prefix?: string;

  /**
   * @schema AppMeshHeaderMatchMethod#range
   */
  readonly range?: AppMeshMatchRange;

  /**
   * @schema AppMeshHeaderMatchMethod#regex
   */
  readonly regex?: string;

  /**
   * @schema AppMeshHeaderMatchMethod#suffix
   */
  readonly suffix?: string;

}

/**
 * Converts an object of type 'AppMeshHeaderMatchMethod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshHeaderMatchMethod(obj: AppMeshHeaderMatchMethod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
    'prefix': obj.prefix,
    'range': toJson_AppMeshMatchRange(obj.range),
    'regex': obj.regex,
    'suffix': obj.suffix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshQueryParameterMatch
 */
export interface AppMeshQueryParameterMatch {
  /**
   * @schema AppMeshQueryParameterMatch#exact
   */
  readonly exact?: string;

}

/**
 * Converts an object of type 'AppMeshQueryParameterMatch' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshQueryParameterMatch(obj: AppMeshQueryParameterMatch | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshGrpcRouteMetadataMatchMethod
 */
export interface AppMeshGrpcRouteMetadataMatchMethod {
  /**
   * @schema AppMeshGrpcRouteMetadataMatchMethod#exact
   */
  readonly exact?: string;

  /**
   * @schema AppMeshGrpcRouteMetadataMatchMethod#prefix
   */
  readonly prefix?: string;

  /**
   * @schema AppMeshGrpcRouteMetadataMatchMethod#range
   */
  readonly range?: AppMeshMatchRange;

  /**
   * @schema AppMeshGrpcRouteMetadataMatchMethod#regex
   */
  readonly regex?: string;

  /**
   * @schema AppMeshGrpcRouteMetadataMatchMethod#suffix
   */
  readonly suffix?: string;

}

/**
 * Converts an object of type 'AppMeshGrpcRouteMetadataMatchMethod' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshGrpcRouteMetadataMatchMethod(obj: AppMeshGrpcRouteMetadataMatchMethod | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact,
    'prefix': obj.prefix,
    'range': toJson_AppMeshMatchRange(obj.range),
    'regex': obj.regex,
    'suffix': obj.suffix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayClientTlsCertificate
 */
export interface AppMeshVirtualGatewayClientTlsCertificate {
  /**
   * @schema AppMeshVirtualGatewayClientTlsCertificate#file
   */
  readonly file?: AppMeshVirtualGatewayListenerTlsFileCertificate;

  /**
   * @schema AppMeshVirtualGatewayClientTlsCertificate#sds
   */
  readonly sds?: AppMeshVirtualGatewayListenerTlsSdsCertificate;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayClientTlsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayClientTlsCertificate(obj: AppMeshVirtualGatewayClientTlsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'file': toJson_AppMeshVirtualGatewayListenerTlsFileCertificate(obj.file),
    'sds': toJson_AppMeshVirtualGatewayListenerTlsSdsCertificate(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayTlsValidationContext
 */
export interface AppMeshVirtualGatewayTlsValidationContext {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContext#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: AppMeshSubjectAlternativeNames;

  /**
   * @schema AppMeshVirtualGatewayTlsValidationContext#trust
   */
  readonly trust: AppMeshVirtualGatewayTlsValidationContextTrust;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayTlsValidationContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayTlsValidationContext(obj: AppMeshVirtualGatewayTlsValidationContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subjectAlternativeNames': toJson_AppMeshSubjectAlternativeNames(obj.subjectAlternativeNames),
    'trust': toJson_AppMeshVirtualGatewayTlsValidationContextTrust(obj.trust),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTlsAcmCertificate
 */
export interface AppMeshVirtualGatewayListenerTlsAcmCertificate {
  /**
   * @schema AppMeshVirtualGatewayListenerTlsAcmCertificate#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTlsAcmCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTlsAcmCertificate(obj: AppMeshVirtualGatewayListenerTlsAcmCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTlsFileCertificate
 */
export interface AppMeshVirtualGatewayListenerTlsFileCertificate {
  /**
   * @schema AppMeshVirtualGatewayListenerTlsFileCertificate#certificateChain
   */
  readonly certificateChain: string;

  /**
   * @schema AppMeshVirtualGatewayListenerTlsFileCertificate#privateKey
   */
  readonly privateKey: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTlsFileCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTlsFileCertificate(obj: AppMeshVirtualGatewayListenerTlsFileCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateChain': obj.certificateChain,
    'privateKey': obj.privateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTlsSdsCertificate
 */
export interface AppMeshVirtualGatewayListenerTlsSdsCertificate {
  /**
   * @schema AppMeshVirtualGatewayListenerTlsSdsCertificate#secretName
   */
  readonly secretName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTlsSdsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTlsSdsCertificate(obj: AppMeshVirtualGatewayListenerTlsSdsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretName': obj.secretName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshSubjectAlternativeNames
 */
export interface AppMeshSubjectAlternativeNames {
  /**
   * @schema AppMeshSubjectAlternativeNames#match
   */
  readonly match: AppMeshSubjectAlternativeNameMatchers;

}

/**
 * Converts an object of type 'AppMeshSubjectAlternativeNames' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshSubjectAlternativeNames(obj: AppMeshSubjectAlternativeNames | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'match': toJson_AppMeshSubjectAlternativeNameMatchers(obj.match),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayListenerTlsValidationContextTrust
 */
export interface AppMeshVirtualGatewayListenerTlsValidationContextTrust {
  /**
   * @schema AppMeshVirtualGatewayListenerTlsValidationContextTrust#file
   */
  readonly file?: AppMeshVirtualGatewayTlsValidationContextFileTrust;

  /**
   * @schema AppMeshVirtualGatewayListenerTlsValidationContextTrust#sds
   */
  readonly sds?: AppMeshVirtualGatewayTlsValidationContextSdsTrust;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayListenerTlsValidationContextTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayListenerTlsValidationContextTrust(obj: AppMeshVirtualGatewayListenerTlsValidationContextTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'file': toJson_AppMeshVirtualGatewayTlsValidationContextFileTrust(obj.file),
    'sds': toJson_AppMeshVirtualGatewayTlsValidationContextSdsTrust(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshClientTlsCertificate
 */
export interface AppMeshClientTlsCertificate {
  /**
   * @schema AppMeshClientTlsCertificate#file
   */
  readonly file?: AppMeshListenerTlsFileCertificate;

  /**
   * @schema AppMeshClientTlsCertificate#sds
   */
  readonly sds?: AppMeshListenerTlsSdsCertificate;

}

/**
 * Converts an object of type 'AppMeshClientTlsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshClientTlsCertificate(obj: AppMeshClientTlsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'file': toJson_AppMeshListenerTlsFileCertificate(obj.file),
    'sds': toJson_AppMeshListenerTlsSdsCertificate(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTlsValidationContext
 */
export interface AppMeshTlsValidationContext {
  /**
   * @schema AppMeshTlsValidationContext#subjectAlternativeNames
   */
  readonly subjectAlternativeNames?: AppMeshSubjectAlternativeNames;

  /**
   * @schema AppMeshTlsValidationContext#trust
   */
  readonly trust: AppMeshTlsValidationContextTrust;

}

/**
 * Converts an object of type 'AppMeshTlsValidationContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTlsValidationContext(obj: AppMeshTlsValidationContext | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subjectAlternativeNames': toJson_AppMeshSubjectAlternativeNames(obj.subjectAlternativeNames),
    'trust': toJson_AppMeshTlsValidationContextTrust(obj.trust),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTlsAcmCertificate
 */
export interface AppMeshListenerTlsAcmCertificate {
  /**
   * @schema AppMeshListenerTlsAcmCertificate#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * Converts an object of type 'AppMeshListenerTlsAcmCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTlsAcmCertificate(obj: AppMeshListenerTlsAcmCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateArn': obj.certificateArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTlsFileCertificate
 */
export interface AppMeshListenerTlsFileCertificate {
  /**
   * @schema AppMeshListenerTlsFileCertificate#certificateChain
   */
  readonly certificateChain: string;

  /**
   * @schema AppMeshListenerTlsFileCertificate#privateKey
   */
  readonly privateKey: string;

}

/**
 * Converts an object of type 'AppMeshListenerTlsFileCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTlsFileCertificate(obj: AppMeshListenerTlsFileCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateChain': obj.certificateChain,
    'privateKey': obj.privateKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTlsSdsCertificate
 */
export interface AppMeshListenerTlsSdsCertificate {
  /**
   * @schema AppMeshListenerTlsSdsCertificate#secretName
   */
  readonly secretName: string;

}

/**
 * Converts an object of type 'AppMeshListenerTlsSdsCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTlsSdsCertificate(obj: AppMeshListenerTlsSdsCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretName': obj.secretName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshListenerTlsValidationContextTrust
 */
export interface AppMeshListenerTlsValidationContextTrust {
  /**
   * @schema AppMeshListenerTlsValidationContextTrust#file
   */
  readonly file?: AppMeshTlsValidationContextFileTrust;

  /**
   * @schema AppMeshListenerTlsValidationContextTrust#sds
   */
  readonly sds?: AppMeshTlsValidationContextSdsTrust;

}

/**
 * Converts an object of type 'AppMeshListenerTlsValidationContextTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshListenerTlsValidationContextTrust(obj: AppMeshListenerTlsValidationContextTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'file': toJson_AppMeshTlsValidationContextFileTrust(obj.file),
    'sds': toJson_AppMeshTlsValidationContextSdsTrust(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshMatchRange
 */
export interface AppMeshMatchRange {
  /**
   * @schema AppMeshMatchRange#end
   */
  readonly end: number;

  /**
   * @schema AppMeshMatchRange#start
   */
  readonly start: number;

}

/**
 * Converts an object of type 'AppMeshMatchRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshMatchRange(obj: AppMeshMatchRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'end': obj.end,
    'start': obj.start,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayTlsValidationContextTrust
 */
export interface AppMeshVirtualGatewayTlsValidationContextTrust {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextTrust#acm
   */
  readonly acm?: AppMeshVirtualGatewayTlsValidationContextAcmTrust;

  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextTrust#file
   */
  readonly file?: AppMeshVirtualGatewayTlsValidationContextFileTrust;

  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextTrust#sds
   */
  readonly sds?: AppMeshVirtualGatewayTlsValidationContextSdsTrust;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayTlsValidationContextTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayTlsValidationContextTrust(obj: AppMeshVirtualGatewayTlsValidationContextTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acm': toJson_AppMeshVirtualGatewayTlsValidationContextAcmTrust(obj.acm),
    'file': toJson_AppMeshVirtualGatewayTlsValidationContextFileTrust(obj.file),
    'sds': toJson_AppMeshVirtualGatewayTlsValidationContextSdsTrust(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshSubjectAlternativeNameMatchers
 */
export interface AppMeshSubjectAlternativeNameMatchers {
  /**
   * @schema AppMeshSubjectAlternativeNameMatchers#exact
   */
  readonly exact: string[];

}

/**
 * Converts an object of type 'AppMeshSubjectAlternativeNameMatchers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshSubjectAlternativeNameMatchers(obj: AppMeshSubjectAlternativeNameMatchers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'exact': obj.exact?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayTlsValidationContextFileTrust
 */
export interface AppMeshVirtualGatewayTlsValidationContextFileTrust {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextFileTrust#certificateChain
   */
  readonly certificateChain: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayTlsValidationContextFileTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayTlsValidationContextFileTrust(obj: AppMeshVirtualGatewayTlsValidationContextFileTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateChain': obj.certificateChain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayTlsValidationContextSdsTrust
 */
export interface AppMeshVirtualGatewayTlsValidationContextSdsTrust {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextSdsTrust#secretName
   */
  readonly secretName: string;

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayTlsValidationContextSdsTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayTlsValidationContextSdsTrust(obj: AppMeshVirtualGatewayTlsValidationContextSdsTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretName': obj.secretName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTlsValidationContextTrust
 */
export interface AppMeshTlsValidationContextTrust {
  /**
   * @schema AppMeshTlsValidationContextTrust#acm
   */
  readonly acm?: AppMeshTlsValidationContextAcmTrust;

  /**
   * @schema AppMeshTlsValidationContextTrust#file
   */
  readonly file?: AppMeshTlsValidationContextFileTrust;

  /**
   * @schema AppMeshTlsValidationContextTrust#sds
   */
  readonly sds?: AppMeshTlsValidationContextSdsTrust;

}

/**
 * Converts an object of type 'AppMeshTlsValidationContextTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTlsValidationContextTrust(obj: AppMeshTlsValidationContextTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'acm': toJson_AppMeshTlsValidationContextAcmTrust(obj.acm),
    'file': toJson_AppMeshTlsValidationContextFileTrust(obj.file),
    'sds': toJson_AppMeshTlsValidationContextSdsTrust(obj.sds),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTlsValidationContextFileTrust
 */
export interface AppMeshTlsValidationContextFileTrust {
  /**
   * @schema AppMeshTlsValidationContextFileTrust#certificateChain
   */
  readonly certificateChain: string;

}

/**
 * Converts an object of type 'AppMeshTlsValidationContextFileTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTlsValidationContextFileTrust(obj: AppMeshTlsValidationContextFileTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateChain': obj.certificateChain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTlsValidationContextSdsTrust
 */
export interface AppMeshTlsValidationContextSdsTrust {
  /**
   * @schema AppMeshTlsValidationContextSdsTrust#secretName
   */
  readonly secretName: string;

}

/**
 * Converts an object of type 'AppMeshTlsValidationContextSdsTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTlsValidationContextSdsTrust(obj: AppMeshTlsValidationContextSdsTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'secretName': obj.secretName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshVirtualGatewayTlsValidationContextAcmTrust
 */
export interface AppMeshVirtualGatewayTlsValidationContextAcmTrust {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextAcmTrust#certificateAuthorityArns
   */
  readonly certificateAuthorityArns: string[];

}

/**
 * Converts an object of type 'AppMeshVirtualGatewayTlsValidationContextAcmTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshVirtualGatewayTlsValidationContextAcmTrust(obj: AppMeshVirtualGatewayTlsValidationContextAcmTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateAuthorityArns': obj.certificateAuthorityArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema AppMeshTlsValidationContextAcmTrust
 */
export interface AppMeshTlsValidationContextAcmTrust {
  /**
   * @schema AppMeshTlsValidationContextAcmTrust#certificateAuthorityArns
   */
  readonly certificateAuthorityArns: string[];

}

/**
 * Converts an object of type 'AppMeshTlsValidationContextAcmTrust' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_AppMeshTlsValidationContextAcmTrust(obj: AppMeshTlsValidationContextAcmTrust | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'certificateAuthorityArns': obj.certificateAuthorityArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
