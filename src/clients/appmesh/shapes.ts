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
 * @schema AppMeshCreateGatewayRouteOutput
 */
export interface AppMeshCreateGatewayRouteOutput {
  /**
   * @schema AppMeshCreateGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

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
 * @schema AppMeshCreateMeshOutput
 */
export interface AppMeshCreateMeshOutput {
  /**
   * @schema AppMeshCreateMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

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
 * @schema AppMeshCreateRouteOutput
 */
export interface AppMeshCreateRouteOutput {
  /**
   * @schema AppMeshCreateRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

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
 * @schema AppMeshCreateVirtualGatewayOutput
 */
export interface AppMeshCreateVirtualGatewayOutput {
  /**
   * @schema AppMeshCreateVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

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
 * @schema AppMeshCreateVirtualNodeOutput
 */
export interface AppMeshCreateVirtualNodeOutput {
  /**
   * @schema AppMeshCreateVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

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
 * @schema AppMeshCreateVirtualRouterOutput
 */
export interface AppMeshCreateVirtualRouterOutput {
  /**
   * @schema AppMeshCreateVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

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
 * @schema AppMeshCreateVirtualServiceOutput
 */
export interface AppMeshCreateVirtualServiceOutput {
  /**
   * @schema AppMeshCreateVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

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
 * @schema AppMeshDeleteGatewayRouteOutput
 */
export interface AppMeshDeleteGatewayRouteOutput {
  /**
   * @schema AppMeshDeleteGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

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
 * @schema AppMeshDeleteMeshOutput
 */
export interface AppMeshDeleteMeshOutput {
  /**
   * @schema AppMeshDeleteMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

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
 * @schema AppMeshDeleteRouteOutput
 */
export interface AppMeshDeleteRouteOutput {
  /**
   * @schema AppMeshDeleteRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

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
 * @schema AppMeshDeleteVirtualGatewayOutput
 */
export interface AppMeshDeleteVirtualGatewayOutput {
  /**
   * @schema AppMeshDeleteVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

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
 * @schema AppMeshDeleteVirtualNodeOutput
 */
export interface AppMeshDeleteVirtualNodeOutput {
  /**
   * @schema AppMeshDeleteVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

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
 * @schema AppMeshDeleteVirtualRouterOutput
 */
export interface AppMeshDeleteVirtualRouterOutput {
  /**
   * @schema AppMeshDeleteVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

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
 * @schema AppMeshDeleteVirtualServiceOutput
 */
export interface AppMeshDeleteVirtualServiceOutput {
  /**
   * @schema AppMeshDeleteVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

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
 * @schema AppMeshDescribeGatewayRouteOutput
 */
export interface AppMeshDescribeGatewayRouteOutput {
  /**
   * @schema AppMeshDescribeGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

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
 * @schema AppMeshDescribeMeshOutput
 */
export interface AppMeshDescribeMeshOutput {
  /**
   * @schema AppMeshDescribeMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

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
 * @schema AppMeshDescribeRouteOutput
 */
export interface AppMeshDescribeRouteOutput {
  /**
   * @schema AppMeshDescribeRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

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
 * @schema AppMeshDescribeVirtualGatewayOutput
 */
export interface AppMeshDescribeVirtualGatewayOutput {
  /**
   * @schema AppMeshDescribeVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

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
 * @schema AppMeshDescribeVirtualNodeOutput
 */
export interface AppMeshDescribeVirtualNodeOutput {
  /**
   * @schema AppMeshDescribeVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

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
 * @schema AppMeshDescribeVirtualRouterOutput
 */
export interface AppMeshDescribeVirtualRouterOutput {
  /**
   * @schema AppMeshDescribeVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

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
 * @schema AppMeshDescribeVirtualServiceOutput
 */
export interface AppMeshDescribeVirtualServiceOutput {
  /**
   * @schema AppMeshDescribeVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

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
 * @schema AppMeshTagResourceOutput
 */
export interface AppMeshTagResourceOutput {
}

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
 * @schema AppMeshUntagResourceOutput
 */
export interface AppMeshUntagResourceOutput {
}

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
 * @schema AppMeshUpdateGatewayRouteOutput
 */
export interface AppMeshUpdateGatewayRouteOutput {
  /**
   * @schema AppMeshUpdateGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: AppMeshGatewayRouteData;

}

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
 * @schema AppMeshUpdateMeshOutput
 */
export interface AppMeshUpdateMeshOutput {
  /**
   * @schema AppMeshUpdateMeshOutput#mesh
   */
  readonly mesh: AppMeshMeshData;

}

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
 * @schema AppMeshUpdateRouteOutput
 */
export interface AppMeshUpdateRouteOutput {
  /**
   * @schema AppMeshUpdateRouteOutput#route
   */
  readonly route: AppMeshRouteData;

}

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
 * @schema AppMeshUpdateVirtualGatewayOutput
 */
export interface AppMeshUpdateVirtualGatewayOutput {
  /**
   * @schema AppMeshUpdateVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: AppMeshVirtualGatewayData;

}

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
 * @schema AppMeshUpdateVirtualNodeOutput
 */
export interface AppMeshUpdateVirtualNodeOutput {
  /**
   * @schema AppMeshUpdateVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: AppMeshVirtualNodeData;

}

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
 * @schema AppMeshUpdateVirtualRouterOutput
 */
export interface AppMeshUpdateVirtualRouterOutput {
  /**
   * @schema AppMeshUpdateVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: AppMeshVirtualRouterData;

}

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
 * @schema AppMeshUpdateVirtualServiceOutput
 */
export interface AppMeshUpdateVirtualServiceOutput {
  /**
   * @schema AppMeshUpdateVirtualServiceOutput#virtualService
   */
  readonly virtualService: AppMeshVirtualServiceData;

}

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

}

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
 * @schema AppMeshMeshSpec
 */
export interface AppMeshMeshSpec {
  /**
   * @schema AppMeshMeshSpec#egressFilter
   */
  readonly egressFilter?: AppMeshEgressFilter;

}

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
 * @schema AppMeshVirtualRouterSpec
 */
export interface AppMeshVirtualRouterSpec {
  /**
   * @schema AppMeshVirtualRouterSpec#listeners
   */
  readonly listeners?: AppMeshVirtualRouterListener[];

}

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
 * @schema AppMeshVirtualServiceSpec
 */
export interface AppMeshVirtualServiceSpec {
  /**
   * @schema AppMeshVirtualServiceSpec#provider
   */
  readonly provider?: AppMeshVirtualServiceProvider;

}

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
 * @schema AppMeshGatewayRouteStatus
 */
export interface AppMeshGatewayRouteStatus {
  /**
   * @schema AppMeshGatewayRouteStatus#status
   */
  readonly status: string;

}

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
 * @schema AppMeshMeshStatus
 */
export interface AppMeshMeshStatus {
  /**
   * @schema AppMeshMeshStatus#status
   */
  readonly status?: string;

}

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
 * @schema AppMeshRouteStatus
 */
export interface AppMeshRouteStatus {
  /**
   * @schema AppMeshRouteStatus#status
   */
  readonly status: string;

}

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
 * @schema AppMeshVirtualGatewayLogging
 */
export interface AppMeshVirtualGatewayLogging {
  /**
   * @schema AppMeshVirtualGatewayLogging#accessLog
   */
  readonly accessLog?: AppMeshVirtualGatewayAccessLog;

}

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
 * @schema AppMeshBackendDefaults
 */
export interface AppMeshBackendDefaults {
  /**
   * @schema AppMeshBackendDefaults#clientPolicy
   */
  readonly clientPolicy?: AppMeshClientPolicy;

}

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
 * @schema AppMeshLogging
 */
export interface AppMeshLogging {
  /**
   * @schema AppMeshLogging#accessLog
   */
  readonly accessLog?: AppMeshAccessLog;

}

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
 * @schema AppMeshVirtualNodeStatus
 */
export interface AppMeshVirtualNodeStatus {
  /**
   * @schema AppMeshVirtualNodeStatus#status
   */
  readonly status: string;

}

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
 * @schema AppMeshVirtualRouterStatus
 */
export interface AppMeshVirtualRouterStatus {
  /**
   * @schema AppMeshVirtualRouterStatus#status
   */
  readonly status: string;

}

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
 * @schema AppMeshVirtualServiceStatus
 */
export interface AppMeshVirtualServiceStatus {
  /**
   * @schema AppMeshVirtualServiceStatus#status
   */
  readonly status: string;

}

/**
 * @schema AppMeshGrpcGatewayRouteAction
 */
export interface AppMeshGrpcGatewayRouteAction {
  /**
   * @schema AppMeshGrpcGatewayRouteAction#target
   */
  readonly target: AppMeshGatewayRouteTarget;

}

/**
 * @schema AppMeshGrpcGatewayRouteMatch
 */
export interface AppMeshGrpcGatewayRouteMatch {
  /**
   * @schema AppMeshGrpcGatewayRouteMatch#serviceName
   */
  readonly serviceName?: string;

}

/**
 * @schema AppMeshHttpGatewayRouteAction
 */
export interface AppMeshHttpGatewayRouteAction {
  /**
   * @schema AppMeshHttpGatewayRouteAction#target
   */
  readonly target: AppMeshGatewayRouteTarget;

}

/**
 * @schema AppMeshHttpGatewayRouteMatch
 */
export interface AppMeshHttpGatewayRouteMatch {
  /**
   * @schema AppMeshHttpGatewayRouteMatch#prefix
   */
  readonly prefix: string;

}

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
 * @schema AppMeshHttpRouteAction
 */
export interface AppMeshHttpRouteAction {
  /**
   * @schema AppMeshHttpRouteAction#weightedTargets
   */
  readonly weightedTargets: AppMeshWeightedTarget[];

}

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
   * @schema AppMeshHttpRouteMatch#prefix
   */
  readonly prefix: string;

  /**
   * @schema AppMeshHttpRouteMatch#scheme
   */
  readonly scheme?: string;

}

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
 * @schema AppMeshTcpRouteAction
 */
export interface AppMeshTcpRouteAction {
  /**
   * @schema AppMeshTcpRouteAction#weightedTargets
   */
  readonly weightedTargets: AppMeshWeightedTarget[];

}

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
 * @schema AppMeshVirtualGatewayClientPolicy
 */
export interface AppMeshVirtualGatewayClientPolicy {
  /**
   * @schema AppMeshVirtualGatewayClientPolicy#tls
   */
  readonly tls?: AppMeshVirtualGatewayClientPolicyTls;

}

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

}

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
 * @schema AppMeshClientPolicy
 */
export interface AppMeshClientPolicy {
  /**
   * @schema AppMeshClientPolicy#tls
   */
  readonly tls?: AppMeshClientPolicyTls;

}

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

}

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
 * @schema AppMeshDnsServiceDiscovery
 */
export interface AppMeshDnsServiceDiscovery {
  /**
   * @schema AppMeshDnsServiceDiscovery#hostname
   */
  readonly hostname: string;

}

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
 * @schema AppMeshVirtualRouterServiceProvider
 */
export interface AppMeshVirtualRouterServiceProvider {
  /**
   * @schema AppMeshVirtualRouterServiceProvider#virtualRouterName
   */
  readonly virtualRouterName: string;

}

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
 * @schema AppMeshVirtualGatewayClientPolicyTls
 */
export interface AppMeshVirtualGatewayClientPolicyTls {
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
 * @schema AppMeshVirtualGatewayGrpcConnectionPool
 */
export interface AppMeshVirtualGatewayGrpcConnectionPool {
  /**
   * @schema AppMeshVirtualGatewayGrpcConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

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
 * @schema AppMeshVirtualGatewayHttp2ConnectionPool
 */
export interface AppMeshVirtualGatewayHttp2ConnectionPool {
  /**
   * @schema AppMeshVirtualGatewayHttp2ConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

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

}

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
 * @schema AppMeshClientPolicyTls
 */
export interface AppMeshClientPolicyTls {
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
 * @schema AppMeshVirtualNodeGrpcConnectionPool
 */
export interface AppMeshVirtualNodeGrpcConnectionPool {
  /**
   * @schema AppMeshVirtualNodeGrpcConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

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
 * @schema AppMeshVirtualNodeHttp2ConnectionPool
 */
export interface AppMeshVirtualNodeHttp2ConnectionPool {
  /**
   * @schema AppMeshVirtualNodeHttp2ConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

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

}

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
 * @schema AppMeshGatewayRouteVirtualService
 */
export interface AppMeshGatewayRouteVirtualService {
  /**
   * @schema AppMeshGatewayRouteVirtualService#virtualServiceName
   */
  readonly virtualServiceName: string;

}

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
 * @schema AppMeshVirtualGatewayTlsValidationContext
 */
export interface AppMeshVirtualGatewayTlsValidationContext {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContext#trust
   */
  readonly trust: AppMeshVirtualGatewayTlsValidationContextTrust;

}

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
 * @schema AppMeshTlsValidationContext
 */
export interface AppMeshTlsValidationContext {
  /**
   * @schema AppMeshTlsValidationContext#trust
   */
  readonly trust: AppMeshTlsValidationContextTrust;

}

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

}

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

}

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
 * @schema AppMeshVirtualGatewayTlsValidationContextFileTrust
 */
export interface AppMeshVirtualGatewayTlsValidationContextFileTrust {
  /**
   * @schema AppMeshVirtualGatewayTlsValidationContextFileTrust#certificateChain
   */
  readonly certificateChain: string;

}

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
 * @schema AppMeshTlsValidationContextFileTrust
 */
export interface AppMeshTlsValidationContextFileTrust {
  /**
   * @schema AppMeshTlsValidationContextFileTrust#certificateChain
   */
  readonly certificateChain: string;

}
