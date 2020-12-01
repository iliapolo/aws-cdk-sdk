/**
 * @schema CreateGatewayRouteInput
 */
export interface CreateGatewayRouteInput {
  /**
   * @schema CreateGatewayRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema CreateGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema CreateGatewayRouteInput#spec
   */
  readonly spec: GatewayRouteSpec;

  /**
   * @schema CreateGatewayRouteInput#tags
   */
  readonly tags?: TagRef[];

  /**
   * @schema CreateGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema CreateGatewayRouteOutput
 */
export interface CreateGatewayRouteOutput {
  /**
   * @schema CreateGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: GatewayRouteData;

}

/**
 * @schema CreateMeshInput
 */
export interface CreateMeshInput {
  /**
   * @schema CreateMeshInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateMeshInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateMeshInput#spec
   */
  readonly spec?: MeshSpec;

  /**
   * @schema CreateMeshInput#tags
   */
  readonly tags?: TagRef[];

}

/**
 * @schema CreateMeshOutput
 */
export interface CreateMeshOutput {
  /**
   * @schema CreateMeshOutput#mesh
   */
  readonly mesh: MeshData;

}

/**
 * @schema CreateRouteInput
 */
export interface CreateRouteInput {
  /**
   * @schema CreateRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema CreateRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema CreateRouteInput#spec
   */
  readonly spec: RouteSpec;

  /**
   * @schema CreateRouteInput#tags
   */
  readonly tags?: TagRef[];

  /**
   * @schema CreateRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema CreateRouteOutput
 */
export interface CreateRouteOutput {
  /**
   * @schema CreateRouteOutput#route
   */
  readonly route: RouteData;

}

/**
 * @schema CreateVirtualGatewayInput
 */
export interface CreateVirtualGatewayInput {
  /**
   * @schema CreateVirtualGatewayInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema CreateVirtualGatewayInput#spec
   */
  readonly spec: VirtualGatewaySpec;

  /**
   * @schema CreateVirtualGatewayInput#tags
   */
  readonly tags?: TagRef[];

  /**
   * @schema CreateVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema CreateVirtualGatewayOutput
 */
export interface CreateVirtualGatewayOutput {
  /**
   * @schema CreateVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: VirtualGatewayData;

}

/**
 * @schema CreateVirtualNodeInput
 */
export interface CreateVirtualNodeInput {
  /**
   * @schema CreateVirtualNodeInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema CreateVirtualNodeInput#spec
   */
  readonly spec: VirtualNodeSpec;

  /**
   * @schema CreateVirtualNodeInput#tags
   */
  readonly tags?: TagRef[];

  /**
   * @schema CreateVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema CreateVirtualNodeOutput
 */
export interface CreateVirtualNodeOutput {
  /**
   * @schema CreateVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: VirtualNodeData;

}

/**
 * @schema CreateVirtualRouterInput
 */
export interface CreateVirtualRouterInput {
  /**
   * @schema CreateVirtualRouterInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema CreateVirtualRouterInput#spec
   */
  readonly spec: VirtualRouterSpec;

  /**
   * @schema CreateVirtualRouterInput#tags
   */
  readonly tags?: TagRef[];

  /**
   * @schema CreateVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema CreateVirtualRouterOutput
 */
export interface CreateVirtualRouterOutput {
  /**
   * @schema CreateVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: VirtualRouterData;

}

/**
 * @schema CreateVirtualServiceInput
 */
export interface CreateVirtualServiceInput {
  /**
   * @schema CreateVirtualServiceInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema CreateVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema CreateVirtualServiceInput#spec
   */
  readonly spec: VirtualServiceSpec;

  /**
   * @schema CreateVirtualServiceInput#tags
   */
  readonly tags?: TagRef[];

  /**
   * @schema CreateVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema CreateVirtualServiceOutput
 */
export interface CreateVirtualServiceOutput {
  /**
   * @schema CreateVirtualServiceOutput#virtualService
   */
  readonly virtualService: VirtualServiceData;

}

/**
 * @schema DeleteGatewayRouteInput
 */
export interface DeleteGatewayRouteInput {
  /**
   * @schema DeleteGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema DeleteGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DeleteGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DeleteGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema DeleteGatewayRouteOutput
 */
export interface DeleteGatewayRouteOutput {
  /**
   * @schema DeleteGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: GatewayRouteData;

}

/**
 * @schema DeleteMeshInput
 */
export interface DeleteMeshInput {
  /**
   * @schema DeleteMeshInput#meshName
   */
  readonly meshName: string;

}

/**
 * @schema DeleteMeshOutput
 */
export interface DeleteMeshOutput {
  /**
   * @schema DeleteMeshOutput#mesh
   */
  readonly mesh: MeshData;

}

/**
 * @schema DeleteRouteInput
 */
export interface DeleteRouteInput {
  /**
   * @schema DeleteRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DeleteRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DeleteRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema DeleteRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema DeleteRouteOutput
 */
export interface DeleteRouteOutput {
  /**
   * @schema DeleteRouteOutput#route
   */
  readonly route: RouteData;

}

/**
 * @schema DeleteVirtualGatewayInput
 */
export interface DeleteVirtualGatewayInput {
  /**
   * @schema DeleteVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DeleteVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DeleteVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema DeleteVirtualGatewayOutput
 */
export interface DeleteVirtualGatewayOutput {
  /**
   * @schema DeleteVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: VirtualGatewayData;

}

/**
 * @schema DeleteVirtualNodeInput
 */
export interface DeleteVirtualNodeInput {
  /**
   * @schema DeleteVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DeleteVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DeleteVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema DeleteVirtualNodeOutput
 */
export interface DeleteVirtualNodeOutput {
  /**
   * @schema DeleteVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: VirtualNodeData;

}

/**
 * @schema DeleteVirtualRouterInput
 */
export interface DeleteVirtualRouterInput {
  /**
   * @schema DeleteVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DeleteVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DeleteVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema DeleteVirtualRouterOutput
 */
export interface DeleteVirtualRouterOutput {
  /**
   * @schema DeleteVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: VirtualRouterData;

}

/**
 * @schema DeleteVirtualServiceInput
 */
export interface DeleteVirtualServiceInput {
  /**
   * @schema DeleteVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DeleteVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DeleteVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema DeleteVirtualServiceOutput
 */
export interface DeleteVirtualServiceOutput {
  /**
   * @schema DeleteVirtualServiceOutput#virtualService
   */
  readonly virtualService: VirtualServiceData;

}

/**
 * @schema DescribeGatewayRouteInput
 */
export interface DescribeGatewayRouteInput {
  /**
   * @schema DescribeGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema DescribeGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DescribeGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema DescribeGatewayRouteOutput
 */
export interface DescribeGatewayRouteOutput {
  /**
   * @schema DescribeGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: GatewayRouteData;

}

/**
 * @schema DescribeMeshInput
 */
export interface DescribeMeshInput {
  /**
   * @schema DescribeMeshInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeMeshInput#meshOwner
   */
  readonly meshOwner?: string;

}

/**
 * @schema DescribeMeshOutput
 */
export interface DescribeMeshOutput {
  /**
   * @schema DescribeMeshOutput#mesh
   */
  readonly mesh: MeshData;

}

/**
 * @schema DescribeRouteInput
 */
export interface DescribeRouteInput {
  /**
   * @schema DescribeRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DescribeRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema DescribeRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema DescribeRouteOutput
 */
export interface DescribeRouteOutput {
  /**
   * @schema DescribeRouteOutput#route
   */
  readonly route: RouteData;

}

/**
 * @schema DescribeVirtualGatewayInput
 */
export interface DescribeVirtualGatewayInput {
  /**
   * @schema DescribeVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DescribeVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema DescribeVirtualGatewayOutput
 */
export interface DescribeVirtualGatewayOutput {
  /**
   * @schema DescribeVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: VirtualGatewayData;

}

/**
 * @schema DescribeVirtualNodeInput
 */
export interface DescribeVirtualNodeInput {
  /**
   * @schema DescribeVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DescribeVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema DescribeVirtualNodeOutput
 */
export interface DescribeVirtualNodeOutput {
  /**
   * @schema DescribeVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: VirtualNodeData;

}

/**
 * @schema DescribeVirtualRouterInput
 */
export interface DescribeVirtualRouterInput {
  /**
   * @schema DescribeVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DescribeVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema DescribeVirtualRouterOutput
 */
export interface DescribeVirtualRouterOutput {
  /**
   * @schema DescribeVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: VirtualRouterData;

}

/**
 * @schema DescribeVirtualServiceInput
 */
export interface DescribeVirtualServiceInput {
  /**
   * @schema DescribeVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema DescribeVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema DescribeVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema DescribeVirtualServiceOutput
 */
export interface DescribeVirtualServiceOutput {
  /**
   * @schema DescribeVirtualServiceOutput#virtualService
   */
  readonly virtualService: VirtualServiceData;

}

/**
 * @schema ListGatewayRoutesInput
 */
export interface ListGatewayRoutesInput {
  /**
   * @schema ListGatewayRoutesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListGatewayRoutesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema ListGatewayRoutesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema ListGatewayRoutesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGatewayRoutesInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema ListGatewayRoutesOutput
 */
export interface ListGatewayRoutesOutput {
  /**
   * @schema ListGatewayRoutesOutput#gatewayRoutes
   */
  readonly gatewayRoutes: GatewayRouteRef[];

  /**
   * @schema ListGatewayRoutesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMeshesInput
 */
export interface ListMeshesInput {
  /**
   * @schema ListMeshesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListMeshesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMeshesOutput
 */
export interface ListMeshesOutput {
  /**
   * @schema ListMeshesOutput#meshes
   */
  readonly meshes: MeshRef[];

  /**
   * @schema ListMeshesOutput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRoutesInput
 */
export interface ListRoutesInput {
  /**
   * @schema ListRoutesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListRoutesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema ListRoutesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema ListRoutesInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRoutesInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema ListRoutesOutput
 */
export interface ListRoutesOutput {
  /**
   * @schema ListRoutesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRoutesOutput#routes
   */
  readonly routes: RouteRef[];

}

/**
 * @schema ListTagsForResourceInput
 */
export interface ListTagsForResourceInput {
  /**
   * @schema ListTagsForResourceInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListTagsForResourceInput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceInput#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceOutput
 */
export interface ListTagsForResourceOutput {
  /**
   * @schema ListTagsForResourceOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceOutput#tags
   */
  readonly tags: TagRef[];

}

/**
 * @schema ListVirtualGatewaysInput
 */
export interface ListVirtualGatewaysInput {
  /**
   * @schema ListVirtualGatewaysInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListVirtualGatewaysInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema ListVirtualGatewaysInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema ListVirtualGatewaysInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVirtualGatewaysOutput
 */
export interface ListVirtualGatewaysOutput {
  /**
   * @schema ListVirtualGatewaysOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVirtualGatewaysOutput#virtualGateways
   */
  readonly virtualGateways: VirtualGatewayRef[];

}

/**
 * @schema ListVirtualNodesInput
 */
export interface ListVirtualNodesInput {
  /**
   * @schema ListVirtualNodesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListVirtualNodesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema ListVirtualNodesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema ListVirtualNodesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVirtualNodesOutput
 */
export interface ListVirtualNodesOutput {
  /**
   * @schema ListVirtualNodesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVirtualNodesOutput#virtualNodes
   */
  readonly virtualNodes: VirtualNodeRef[];

}

/**
 * @schema ListVirtualRoutersInput
 */
export interface ListVirtualRoutersInput {
  /**
   * @schema ListVirtualRoutersInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListVirtualRoutersInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema ListVirtualRoutersInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema ListVirtualRoutersInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVirtualRoutersOutput
 */
export interface ListVirtualRoutersOutput {
  /**
   * @schema ListVirtualRoutersOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVirtualRoutersOutput#virtualRouters
   */
  readonly virtualRouters: VirtualRouterRef[];

}

/**
 * @schema ListVirtualServicesInput
 */
export interface ListVirtualServicesInput {
  /**
   * @schema ListVirtualServicesInput#limit
   */
  readonly limit?: number;

  /**
   * @schema ListVirtualServicesInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema ListVirtualServicesInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema ListVirtualServicesInput#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListVirtualServicesOutput
 */
export interface ListVirtualServicesOutput {
  /**
   * @schema ListVirtualServicesOutput#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListVirtualServicesOutput#virtualServices
   */
  readonly virtualServices: VirtualServiceRef[];

}

/**
 * @schema TagResourceInput
 */
export interface TagResourceInput {
  /**
   * @schema TagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceInput#tags
   */
  readonly tags: TagRef[];

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
   * @schema UntagResourceInput#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceInput#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceOutput
 */
export interface UntagResourceOutput {
}

/**
 * @schema UpdateGatewayRouteInput
 */
export interface UpdateGatewayRouteInput {
  /**
   * @schema UpdateGatewayRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateGatewayRouteInput#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema UpdateGatewayRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateGatewayRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema UpdateGatewayRouteInput#spec
   */
  readonly spec: GatewayRouteSpec;

  /**
   * @schema UpdateGatewayRouteInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema UpdateGatewayRouteOutput
 */
export interface UpdateGatewayRouteOutput {
  /**
   * @schema UpdateGatewayRouteOutput#gatewayRoute
   */
  readonly gatewayRoute: GatewayRouteData;

}

/**
 * @schema UpdateMeshInput
 */
export interface UpdateMeshInput {
  /**
   * @schema UpdateMeshInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateMeshInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateMeshInput#spec
   */
  readonly spec?: MeshSpec;

}

/**
 * @schema UpdateMeshOutput
 */
export interface UpdateMeshOutput {
  /**
   * @schema UpdateMeshOutput#mesh
   */
  readonly mesh: MeshData;

}

/**
 * @schema UpdateRouteInput
 */
export interface UpdateRouteInput {
  /**
   * @schema UpdateRouteInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateRouteInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateRouteInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema UpdateRouteInput#routeName
   */
  readonly routeName: string;

  /**
   * @schema UpdateRouteInput#spec
   */
  readonly spec: RouteSpec;

  /**
   * @schema UpdateRouteInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema UpdateRouteOutput
 */
export interface UpdateRouteOutput {
  /**
   * @schema UpdateRouteOutput#route
   */
  readonly route: RouteData;

}

/**
 * @schema UpdateVirtualGatewayInput
 */
export interface UpdateVirtualGatewayInput {
  /**
   * @schema UpdateVirtualGatewayInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateVirtualGatewayInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateVirtualGatewayInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema UpdateVirtualGatewayInput#spec
   */
  readonly spec: VirtualGatewaySpec;

  /**
   * @schema UpdateVirtualGatewayInput#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema UpdateVirtualGatewayOutput
 */
export interface UpdateVirtualGatewayOutput {
  /**
   * @schema UpdateVirtualGatewayOutput#virtualGateway
   */
  readonly virtualGateway: VirtualGatewayData;

}

/**
 * @schema UpdateVirtualNodeInput
 */
export interface UpdateVirtualNodeInput {
  /**
   * @schema UpdateVirtualNodeInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateVirtualNodeInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateVirtualNodeInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema UpdateVirtualNodeInput#spec
   */
  readonly spec: VirtualNodeSpec;

  /**
   * @schema UpdateVirtualNodeInput#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema UpdateVirtualNodeOutput
 */
export interface UpdateVirtualNodeOutput {
  /**
   * @schema UpdateVirtualNodeOutput#virtualNode
   */
  readonly virtualNode: VirtualNodeData;

}

/**
 * @schema UpdateVirtualRouterInput
 */
export interface UpdateVirtualRouterInput {
  /**
   * @schema UpdateVirtualRouterInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateVirtualRouterInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateVirtualRouterInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema UpdateVirtualRouterInput#spec
   */
  readonly spec: VirtualRouterSpec;

  /**
   * @schema UpdateVirtualRouterInput#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema UpdateVirtualRouterOutput
 */
export interface UpdateVirtualRouterOutput {
  /**
   * @schema UpdateVirtualRouterOutput#virtualRouter
   */
  readonly virtualRouter: VirtualRouterData;

}

/**
 * @schema UpdateVirtualServiceInput
 */
export interface UpdateVirtualServiceInput {
  /**
   * @schema UpdateVirtualServiceInput#clientToken
   */
  readonly clientToken?: string;

  /**
   * @schema UpdateVirtualServiceInput#meshName
   */
  readonly meshName: string;

  /**
   * @schema UpdateVirtualServiceInput#meshOwner
   */
  readonly meshOwner?: string;

  /**
   * @schema UpdateVirtualServiceInput#spec
   */
  readonly spec: VirtualServiceSpec;

  /**
   * @schema UpdateVirtualServiceInput#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema UpdateVirtualServiceOutput
 */
export interface UpdateVirtualServiceOutput {
  /**
   * @schema UpdateVirtualServiceOutput#virtualService
   */
  readonly virtualService: VirtualServiceData;

}

/**
 * @schema GatewayRouteSpec
 */
export interface GatewayRouteSpec {
  /**
   * @schema GatewayRouteSpec#grpcRoute
   */
  readonly grpcRoute?: GrpcGatewayRoute;

  /**
   * @schema GatewayRouteSpec#http2Route
   */
  readonly http2Route?: HttpGatewayRoute;

  /**
   * @schema GatewayRouteSpec#httpRoute
   */
  readonly httpRoute?: HttpGatewayRoute;

}

/**
 * @schema TagRef
 */
export interface TagRef {
  /**
   * @schema TagRef#key
   */
  readonly key: string;

  /**
   * @schema TagRef#value
   */
  readonly value: string;

}

/**
 * @schema GatewayRouteData
 */
export interface GatewayRouteData {
  /**
   * @schema GatewayRouteData#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema GatewayRouteData#meshName
   */
  readonly meshName: string;

  /**
   * @schema GatewayRouteData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema GatewayRouteData#spec
   */
  readonly spec: GatewayRouteSpec;

  /**
   * @schema GatewayRouteData#status
   */
  readonly status: GatewayRouteStatus;

  /**
   * @schema GatewayRouteData#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema MeshSpec
 */
export interface MeshSpec {
  /**
   * @schema MeshSpec#egressFilter
   */
  readonly egressFilter?: EgressFilter;

}

/**
 * @schema MeshData
 */
export interface MeshData {
  /**
   * @schema MeshData#meshName
   */
  readonly meshName: string;

  /**
   * @schema MeshData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema MeshData#spec
   */
  readonly spec: MeshSpec;

  /**
   * @schema MeshData#status
   */
  readonly status: MeshStatus;

}

/**
 * @schema RouteSpec
 */
export interface RouteSpec {
  /**
   * @schema RouteSpec#grpcRoute
   */
  readonly grpcRoute?: GrpcRoute;

  /**
   * @schema RouteSpec#http2Route
   */
  readonly http2Route?: HttpRoute;

  /**
   * @schema RouteSpec#httpRoute
   */
  readonly httpRoute?: HttpRoute;

  /**
   * @schema RouteSpec#priority
   */
  readonly priority?: number;

  /**
   * @schema RouteSpec#tcpRoute
   */
  readonly tcpRoute?: TcpRoute;

}

/**
 * @schema RouteData
 */
export interface RouteData {
  /**
   * @schema RouteData#meshName
   */
  readonly meshName: string;

  /**
   * @schema RouteData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema RouteData#routeName
   */
  readonly routeName: string;

  /**
   * @schema RouteData#spec
   */
  readonly spec: RouteSpec;

  /**
   * @schema RouteData#status
   */
  readonly status: RouteStatus;

  /**
   * @schema RouteData#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema VirtualGatewaySpec
 */
export interface VirtualGatewaySpec {
  /**
   * @schema VirtualGatewaySpec#backendDefaults
   */
  readonly backendDefaults?: VirtualGatewayBackendDefaults;

  /**
   * @schema VirtualGatewaySpec#listeners
   */
  readonly listeners: VirtualGatewayListener[];

  /**
   * @schema VirtualGatewaySpec#logging
   */
  readonly logging?: VirtualGatewayLogging;

}

/**
 * @schema VirtualGatewayData
 */
export interface VirtualGatewayData {
  /**
   * @schema VirtualGatewayData#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualGatewayData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema VirtualGatewayData#spec
   */
  readonly spec: VirtualGatewaySpec;

  /**
   * @schema VirtualGatewayData#status
   */
  readonly status: VirtualGatewayStatus;

  /**
   * @schema VirtualGatewayData#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema VirtualNodeSpec
 */
export interface VirtualNodeSpec {
  /**
   * @schema VirtualNodeSpec#backendDefaults
   */
  readonly backendDefaults?: BackendDefaults;

  /**
   * @schema VirtualNodeSpec#backends
   */
  readonly backends?: Backend[];

  /**
   * @schema VirtualNodeSpec#listeners
   */
  readonly listeners?: Listener[];

  /**
   * @schema VirtualNodeSpec#logging
   */
  readonly logging?: Logging;

  /**
   * @schema VirtualNodeSpec#serviceDiscovery
   */
  readonly serviceDiscovery?: ServiceDiscovery;

}

/**
 * @schema VirtualNodeData
 */
export interface VirtualNodeData {
  /**
   * @schema VirtualNodeData#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualNodeData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema VirtualNodeData#spec
   */
  readonly spec: VirtualNodeSpec;

  /**
   * @schema VirtualNodeData#status
   */
  readonly status: VirtualNodeStatus;

  /**
   * @schema VirtualNodeData#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema VirtualRouterSpec
 */
export interface VirtualRouterSpec {
  /**
   * @schema VirtualRouterSpec#listeners
   */
  readonly listeners?: VirtualRouterListener[];

}

/**
 * @schema VirtualRouterData
 */
export interface VirtualRouterData {
  /**
   * @schema VirtualRouterData#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualRouterData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema VirtualRouterData#spec
   */
  readonly spec: VirtualRouterSpec;

  /**
   * @schema VirtualRouterData#status
   */
  readonly status: VirtualRouterStatus;

  /**
   * @schema VirtualRouterData#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema VirtualServiceSpec
 */
export interface VirtualServiceSpec {
  /**
   * @schema VirtualServiceSpec#provider
   */
  readonly provider?: VirtualServiceProvider;

}

/**
 * @schema VirtualServiceData
 */
export interface VirtualServiceData {
  /**
   * @schema VirtualServiceData#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualServiceData#metadata
   */
  readonly metadata: ResourceMetadata;

  /**
   * @schema VirtualServiceData#spec
   */
  readonly spec: VirtualServiceSpec;

  /**
   * @schema VirtualServiceData#status
   */
  readonly status: VirtualServiceStatus;

  /**
   * @schema VirtualServiceData#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema GatewayRouteRef
 */
export interface GatewayRouteRef {
  /**
   * @schema GatewayRouteRef#arn
   */
  readonly arn: string;

  /**
   * @schema GatewayRouteRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema GatewayRouteRef#gatewayRouteName
   */
  readonly gatewayRouteName: string;

  /**
   * @schema GatewayRouteRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema GatewayRouteRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema GatewayRouteRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema GatewayRouteRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema GatewayRouteRef#version
   */
  readonly version: number;

  /**
   * @schema GatewayRouteRef#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema MeshRef
 */
export interface MeshRef {
  /**
   * @schema MeshRef#arn
   */
  readonly arn: string;

  /**
   * @schema MeshRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema MeshRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema MeshRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema MeshRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema MeshRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema MeshRef#version
   */
  readonly version: number;

}

/**
 * @schema RouteRef
 */
export interface RouteRef {
  /**
   * @schema RouteRef#arn
   */
  readonly arn: string;

  /**
   * @schema RouteRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema RouteRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema RouteRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema RouteRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema RouteRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema RouteRef#routeName
   */
  readonly routeName: string;

  /**
   * @schema RouteRef#version
   */
  readonly version: number;

  /**
   * @schema RouteRef#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema VirtualGatewayRef
 */
export interface VirtualGatewayRef {
  /**
   * @schema VirtualGatewayRef#arn
   */
  readonly arn: string;

  /**
   * @schema VirtualGatewayRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema VirtualGatewayRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema VirtualGatewayRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualGatewayRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema VirtualGatewayRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema VirtualGatewayRef#version
   */
  readonly version: number;

  /**
   * @schema VirtualGatewayRef#virtualGatewayName
   */
  readonly virtualGatewayName: string;

}

/**
 * @schema VirtualNodeRef
 */
export interface VirtualNodeRef {
  /**
   * @schema VirtualNodeRef#arn
   */
  readonly arn: string;

  /**
   * @schema VirtualNodeRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema VirtualNodeRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema VirtualNodeRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualNodeRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema VirtualNodeRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema VirtualNodeRef#version
   */
  readonly version: number;

  /**
   * @schema VirtualNodeRef#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema VirtualRouterRef
 */
export interface VirtualRouterRef {
  /**
   * @schema VirtualRouterRef#arn
   */
  readonly arn: string;

  /**
   * @schema VirtualRouterRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema VirtualRouterRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema VirtualRouterRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualRouterRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema VirtualRouterRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema VirtualRouterRef#version
   */
  readonly version: number;

  /**
   * @schema VirtualRouterRef#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema VirtualServiceRef
 */
export interface VirtualServiceRef {
  /**
   * @schema VirtualServiceRef#arn
   */
  readonly arn: string;

  /**
   * @schema VirtualServiceRef#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema VirtualServiceRef#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema VirtualServiceRef#meshName
   */
  readonly meshName: string;

  /**
   * @schema VirtualServiceRef#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema VirtualServiceRef#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema VirtualServiceRef#version
   */
  readonly version: number;

  /**
   * @schema VirtualServiceRef#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema GrpcGatewayRoute
 */
export interface GrpcGatewayRoute {
  /**
   * @schema GrpcGatewayRoute#action
   */
  readonly action: GrpcGatewayRouteAction;

  /**
   * @schema GrpcGatewayRoute#match
   */
  readonly match: GrpcGatewayRouteMatch;

}

/**
 * @schema HttpGatewayRoute
 */
export interface HttpGatewayRoute {
  /**
   * @schema HttpGatewayRoute#action
   */
  readonly action: HttpGatewayRouteAction;

  /**
   * @schema HttpGatewayRoute#match
   */
  readonly match: HttpGatewayRouteMatch;

}

/**
 * @schema ResourceMetadata
 */
export interface ResourceMetadata {
  /**
   * @schema ResourceMetadata#arn
   */
  readonly arn: string;

  /**
   * @schema ResourceMetadata#createdAt
   */
  readonly createdAt: string;

  /**
   * @schema ResourceMetadata#lastUpdatedAt
   */
  readonly lastUpdatedAt: string;

  /**
   * @schema ResourceMetadata#meshOwner
   */
  readonly meshOwner: string;

  /**
   * @schema ResourceMetadata#resourceOwner
   */
  readonly resourceOwner: string;

  /**
   * @schema ResourceMetadata#uid
   */
  readonly uid: string;

  /**
   * @schema ResourceMetadata#version
   */
  readonly version: number;

}

/**
 * @schema GatewayRouteStatus
 */
export interface GatewayRouteStatus {
  /**
   * @schema GatewayRouteStatus#status
   */
  readonly status: string;

}

/**
 * @schema EgressFilter
 */
export interface EgressFilter {
  /**
   * @schema EgressFilter#type
   */
  readonly type: string;

}

/**
 * @schema MeshStatus
 */
export interface MeshStatus {
  /**
   * @schema MeshStatus#status
   */
  readonly status?: string;

}

/**
 * @schema GrpcRoute
 */
export interface GrpcRoute {
  /**
   * @schema GrpcRoute#action
   */
  readonly action: GrpcRouteAction;

  /**
   * @schema GrpcRoute#match
   */
  readonly match: GrpcRouteMatch;

  /**
   * @schema GrpcRoute#retryPolicy
   */
  readonly retryPolicy?: GrpcRetryPolicy;

  /**
   * @schema GrpcRoute#timeout
   */
  readonly timeout?: GrpcTimeout;

}

/**
 * @schema HttpRoute
 */
export interface HttpRoute {
  /**
   * @schema HttpRoute#action
   */
  readonly action: HttpRouteAction;

  /**
   * @schema HttpRoute#match
   */
  readonly match: HttpRouteMatch;

  /**
   * @schema HttpRoute#retryPolicy
   */
  readonly retryPolicy?: HttpRetryPolicy;

  /**
   * @schema HttpRoute#timeout
   */
  readonly timeout?: HttpTimeout;

}

/**
 * @schema TcpRoute
 */
export interface TcpRoute {
  /**
   * @schema TcpRoute#action
   */
  readonly action: TcpRouteAction;

  /**
   * @schema TcpRoute#timeout
   */
  readonly timeout?: TcpTimeout;

}

/**
 * @schema RouteStatus
 */
export interface RouteStatus {
  /**
   * @schema RouteStatus#status
   */
  readonly status: string;

}

/**
 * @schema VirtualGatewayBackendDefaults
 */
export interface VirtualGatewayBackendDefaults {
  /**
   * @schema VirtualGatewayBackendDefaults#clientPolicy
   */
  readonly clientPolicy?: VirtualGatewayClientPolicy;

}

/**
 * @schema VirtualGatewayListener
 */
export interface VirtualGatewayListener {
  /**
   * @schema VirtualGatewayListener#connectionPool
   */
  readonly connectionPool?: VirtualGatewayConnectionPool;

  /**
   * @schema VirtualGatewayListener#healthCheck
   */
  readonly healthCheck?: VirtualGatewayHealthCheckPolicy;

  /**
   * @schema VirtualGatewayListener#portMapping
   */
  readonly portMapping: VirtualGatewayPortMapping;

  /**
   * @schema VirtualGatewayListener#tls
   */
  readonly tls?: VirtualGatewayListenerTls;

}

/**
 * @schema VirtualGatewayLogging
 */
export interface VirtualGatewayLogging {
  /**
   * @schema VirtualGatewayLogging#accessLog
   */
  readonly accessLog?: VirtualGatewayAccessLog;

}

/**
 * @schema VirtualGatewayStatus
 */
export interface VirtualGatewayStatus {
  /**
   * @schema VirtualGatewayStatus#status
   */
  readonly status: string;

}

/**
 * @schema BackendDefaults
 */
export interface BackendDefaults {
  /**
   * @schema BackendDefaults#clientPolicy
   */
  readonly clientPolicy?: ClientPolicy;

}

/**
 * @schema Backend
 */
export interface Backend {
  /**
   * @schema Backend#virtualService
   */
  readonly virtualService?: VirtualServiceBackend;

}

/**
 * @schema Listener
 */
export interface Listener {
  /**
   * @schema Listener#connectionPool
   */
  readonly connectionPool?: VirtualNodeConnectionPool;

  /**
   * @schema Listener#healthCheck
   */
  readonly healthCheck?: HealthCheckPolicy;

  /**
   * @schema Listener#outlierDetection
   */
  readonly outlierDetection?: OutlierDetection;

  /**
   * @schema Listener#portMapping
   */
  readonly portMapping: PortMapping;

  /**
   * @schema Listener#timeout
   */
  readonly timeout?: ListenerTimeout;

  /**
   * @schema Listener#tls
   */
  readonly tls?: ListenerTls;

}

/**
 * @schema Logging
 */
export interface Logging {
  /**
   * @schema Logging#accessLog
   */
  readonly accessLog?: AccessLog;

}

/**
 * @schema ServiceDiscovery
 */
export interface ServiceDiscovery {
  /**
   * @schema ServiceDiscovery#awsCloudMap
   */
  readonly awsCloudMap?: AwsCloudMapServiceDiscovery;

  /**
   * @schema ServiceDiscovery#dns
   */
  readonly dns?: DnsServiceDiscovery;

}

/**
 * @schema VirtualNodeStatus
 */
export interface VirtualNodeStatus {
  /**
   * @schema VirtualNodeStatus#status
   */
  readonly status: string;

}

/**
 * @schema VirtualRouterListener
 */
export interface VirtualRouterListener {
  /**
   * @schema VirtualRouterListener#portMapping
   */
  readonly portMapping: PortMapping;

}

/**
 * @schema VirtualRouterStatus
 */
export interface VirtualRouterStatus {
  /**
   * @schema VirtualRouterStatus#status
   */
  readonly status: string;

}

/**
 * @schema VirtualServiceProvider
 */
export interface VirtualServiceProvider {
  /**
   * @schema VirtualServiceProvider#virtualNode
   */
  readonly virtualNode?: VirtualNodeServiceProvider;

  /**
   * @schema VirtualServiceProvider#virtualRouter
   */
  readonly virtualRouter?: VirtualRouterServiceProvider;

}

/**
 * @schema VirtualServiceStatus
 */
export interface VirtualServiceStatus {
  /**
   * @schema VirtualServiceStatus#status
   */
  readonly status: string;

}

/**
 * @schema GrpcGatewayRouteAction
 */
export interface GrpcGatewayRouteAction {
  /**
   * @schema GrpcGatewayRouteAction#target
   */
  readonly target: GatewayRouteTarget;

}

/**
 * @schema GrpcGatewayRouteMatch
 */
export interface GrpcGatewayRouteMatch {
  /**
   * @schema GrpcGatewayRouteMatch#serviceName
   */
  readonly serviceName?: string;

}

/**
 * @schema HttpGatewayRouteAction
 */
export interface HttpGatewayRouteAction {
  /**
   * @schema HttpGatewayRouteAction#target
   */
  readonly target: GatewayRouteTarget;

}

/**
 * @schema HttpGatewayRouteMatch
 */
export interface HttpGatewayRouteMatch {
  /**
   * @schema HttpGatewayRouteMatch#prefix
   */
  readonly prefix: string;

}

/**
 * @schema GrpcRouteAction
 */
export interface GrpcRouteAction {
  /**
   * @schema GrpcRouteAction#weightedTargets
   */
  readonly weightedTargets: WeightedTarget[];

}

/**
 * @schema GrpcRouteMatch
 */
export interface GrpcRouteMatch {
  /**
   * @schema GrpcRouteMatch#metadata
   */
  readonly metadata?: GrpcRouteMetadata[];

  /**
   * @schema GrpcRouteMatch#methodName
   */
  readonly methodName?: string;

  /**
   * @schema GrpcRouteMatch#serviceName
   */
  readonly serviceName?: string;

}

/**
 * @schema GrpcRetryPolicy
 */
export interface GrpcRetryPolicy {
  /**
   * @schema GrpcRetryPolicy#grpcRetryEvents
   */
  readonly grpcRetryEvents?: string[];

  /**
   * @schema GrpcRetryPolicy#httpRetryEvents
   */
  readonly httpRetryEvents?: string[];

  /**
   * @schema GrpcRetryPolicy#maxRetries
   */
  readonly maxRetries: number;

  /**
   * @schema GrpcRetryPolicy#perRetryTimeout
   */
  readonly perRetryTimeout: Duration;

  /**
   * @schema GrpcRetryPolicy#tcpRetryEvents
   */
  readonly tcpRetryEvents?: string[];

}

/**
 * @schema GrpcTimeout
 */
export interface GrpcTimeout {
  /**
   * @schema GrpcTimeout#idle
   */
  readonly idle?: Duration;

  /**
   * @schema GrpcTimeout#perRequest
   */
  readonly perRequest?: Duration;

}

/**
 * @schema HttpRouteAction
 */
export interface HttpRouteAction {
  /**
   * @schema HttpRouteAction#weightedTargets
   */
  readonly weightedTargets: WeightedTarget[];

}

/**
 * @schema HttpRouteMatch
 */
export interface HttpRouteMatch {
  /**
   * @schema HttpRouteMatch#headers
   */
  readonly headers?: HttpRouteHeader[];

  /**
   * @schema HttpRouteMatch#method
   */
  readonly method?: string;

  /**
   * @schema HttpRouteMatch#prefix
   */
  readonly prefix: string;

  /**
   * @schema HttpRouteMatch#scheme
   */
  readonly scheme?: string;

}

/**
 * @schema HttpRetryPolicy
 */
export interface HttpRetryPolicy {
  /**
   * @schema HttpRetryPolicy#httpRetryEvents
   */
  readonly httpRetryEvents?: string[];

  /**
   * @schema HttpRetryPolicy#maxRetries
   */
  readonly maxRetries: number;

  /**
   * @schema HttpRetryPolicy#perRetryTimeout
   */
  readonly perRetryTimeout: Duration;

  /**
   * @schema HttpRetryPolicy#tcpRetryEvents
   */
  readonly tcpRetryEvents?: string[];

}

/**
 * @schema HttpTimeout
 */
export interface HttpTimeout {
  /**
   * @schema HttpTimeout#idle
   */
  readonly idle?: Duration;

  /**
   * @schema HttpTimeout#perRequest
   */
  readonly perRequest?: Duration;

}

/**
 * @schema TcpRouteAction
 */
export interface TcpRouteAction {
  /**
   * @schema TcpRouteAction#weightedTargets
   */
  readonly weightedTargets: WeightedTarget[];

}

/**
 * @schema TcpTimeout
 */
export interface TcpTimeout {
  /**
   * @schema TcpTimeout#idle
   */
  readonly idle?: Duration;

}

/**
 * @schema VirtualGatewayClientPolicy
 */
export interface VirtualGatewayClientPolicy {
  /**
   * @schema VirtualGatewayClientPolicy#tls
   */
  readonly tls?: VirtualGatewayClientPolicyTls;

}

/**
 * @schema VirtualGatewayConnectionPool
 */
export interface VirtualGatewayConnectionPool {
  /**
   * @schema VirtualGatewayConnectionPool#grpc
   */
  readonly grpc?: VirtualGatewayGrpcConnectionPool;

  /**
   * @schema VirtualGatewayConnectionPool#http
   */
  readonly http?: VirtualGatewayHttpConnectionPool;

  /**
   * @schema VirtualGatewayConnectionPool#http2
   */
  readonly http2?: VirtualGatewayHttp2ConnectionPool;

}

/**
 * @schema VirtualGatewayHealthCheckPolicy
 */
export interface VirtualGatewayHealthCheckPolicy {
  /**
   * @schema VirtualGatewayHealthCheckPolicy#healthyThreshold
   */
  readonly healthyThreshold: number;

  /**
   * @schema VirtualGatewayHealthCheckPolicy#intervalMillis
   */
  readonly intervalMillis: number;

  /**
   * @schema VirtualGatewayHealthCheckPolicy#path
   */
  readonly path?: string;

  /**
   * @schema VirtualGatewayHealthCheckPolicy#port
   */
  readonly port?: number;

  /**
   * @schema VirtualGatewayHealthCheckPolicy#protocol
   */
  readonly protocol: string;

  /**
   * @schema VirtualGatewayHealthCheckPolicy#timeoutMillis
   */
  readonly timeoutMillis: number;

  /**
   * @schema VirtualGatewayHealthCheckPolicy#unhealthyThreshold
   */
  readonly unhealthyThreshold: number;

}

/**
 * @schema VirtualGatewayPortMapping
 */
export interface VirtualGatewayPortMapping {
  /**
   * @schema VirtualGatewayPortMapping#port
   */
  readonly port: number;

  /**
   * @schema VirtualGatewayPortMapping#protocol
   */
  readonly protocol: string;

}

/**
 * @schema VirtualGatewayListenerTls
 */
export interface VirtualGatewayListenerTls {
  /**
   * @schema VirtualGatewayListenerTls#certificate
   */
  readonly certificate: VirtualGatewayListenerTlsCertificate;

  /**
   * @schema VirtualGatewayListenerTls#mode
   */
  readonly mode: string;

}

/**
 * @schema VirtualGatewayAccessLog
 */
export interface VirtualGatewayAccessLog {
  /**
   * @schema VirtualGatewayAccessLog#file
   */
  readonly file?: VirtualGatewayFileAccessLog;

}

/**
 * @schema ClientPolicy
 */
export interface ClientPolicy {
  /**
   * @schema ClientPolicy#tls
   */
  readonly tls?: ClientPolicyTls;

}

/**
 * @schema VirtualServiceBackend
 */
export interface VirtualServiceBackend {
  /**
   * @schema VirtualServiceBackend#clientPolicy
   */
  readonly clientPolicy?: ClientPolicy;

  /**
   * @schema VirtualServiceBackend#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema VirtualNodeConnectionPool
 */
export interface VirtualNodeConnectionPool {
  /**
   * @schema VirtualNodeConnectionPool#grpc
   */
  readonly grpc?: VirtualNodeGrpcConnectionPool;

  /**
   * @schema VirtualNodeConnectionPool#http
   */
  readonly http?: VirtualNodeHttpConnectionPool;

  /**
   * @schema VirtualNodeConnectionPool#http2
   */
  readonly http2?: VirtualNodeHttp2ConnectionPool;

  /**
   * @schema VirtualNodeConnectionPool#tcp
   */
  readonly tcp?: VirtualNodeTcpConnectionPool;

}

/**
 * @schema HealthCheckPolicy
 */
export interface HealthCheckPolicy {
  /**
   * @schema HealthCheckPolicy#healthyThreshold
   */
  readonly healthyThreshold: number;

  /**
   * @schema HealthCheckPolicy#intervalMillis
   */
  readonly intervalMillis: number;

  /**
   * @schema HealthCheckPolicy#path
   */
  readonly path?: string;

  /**
   * @schema HealthCheckPolicy#port
   */
  readonly port?: number;

  /**
   * @schema HealthCheckPolicy#protocol
   */
  readonly protocol: string;

  /**
   * @schema HealthCheckPolicy#timeoutMillis
   */
  readonly timeoutMillis: number;

  /**
   * @schema HealthCheckPolicy#unhealthyThreshold
   */
  readonly unhealthyThreshold: number;

}

/**
 * @schema OutlierDetection
 */
export interface OutlierDetection {
  /**
   * @schema OutlierDetection#baseEjectionDuration
   */
  readonly baseEjectionDuration: Duration;

  /**
   * @schema OutlierDetection#interval
   */
  readonly interval: Duration;

  /**
   * @schema OutlierDetection#maxEjectionPercent
   */
  readonly maxEjectionPercent: number;

  /**
   * @schema OutlierDetection#maxServerErrors
   */
  readonly maxServerErrors: number;

}

/**
 * @schema PortMapping
 */
export interface PortMapping {
  /**
   * @schema PortMapping#port
   */
  readonly port: number;

  /**
   * @schema PortMapping#protocol
   */
  readonly protocol: string;

}

/**
 * @schema ListenerTimeout
 */
export interface ListenerTimeout {
  /**
   * @schema ListenerTimeout#grpc
   */
  readonly grpc?: GrpcTimeout;

  /**
   * @schema ListenerTimeout#http
   */
  readonly http?: HttpTimeout;

  /**
   * @schema ListenerTimeout#http2
   */
  readonly http2?: HttpTimeout;

  /**
   * @schema ListenerTimeout#tcp
   */
  readonly tcp?: TcpTimeout;

}

/**
 * @schema ListenerTls
 */
export interface ListenerTls {
  /**
   * @schema ListenerTls#certificate
   */
  readonly certificate: ListenerTlsCertificate;

  /**
   * @schema ListenerTls#mode
   */
  readonly mode: string;

}

/**
 * @schema AccessLog
 */
export interface AccessLog {
  /**
   * @schema AccessLog#file
   */
  readonly file?: FileAccessLog;

}

/**
 * @schema AwsCloudMapServiceDiscovery
 */
export interface AwsCloudMapServiceDiscovery {
  /**
   * @schema AwsCloudMapServiceDiscovery#attributes
   */
  readonly attributes?: AwsCloudMapInstanceAttribute[];

  /**
   * @schema AwsCloudMapServiceDiscovery#namespaceName
   */
  readonly namespaceName: string;

  /**
   * @schema AwsCloudMapServiceDiscovery#serviceName
   */
  readonly serviceName: string;

}

/**
 * @schema DnsServiceDiscovery
 */
export interface DnsServiceDiscovery {
  /**
   * @schema DnsServiceDiscovery#hostname
   */
  readonly hostname: string;

}

/**
 * @schema VirtualNodeServiceProvider
 */
export interface VirtualNodeServiceProvider {
  /**
   * @schema VirtualNodeServiceProvider#virtualNodeName
   */
  readonly virtualNodeName: string;

}

/**
 * @schema VirtualRouterServiceProvider
 */
export interface VirtualRouterServiceProvider {
  /**
   * @schema VirtualRouterServiceProvider#virtualRouterName
   */
  readonly virtualRouterName: string;

}

/**
 * @schema GatewayRouteTarget
 */
export interface GatewayRouteTarget {
  /**
   * @schema GatewayRouteTarget#virtualService
   */
  readonly virtualService: GatewayRouteVirtualService;

}

/**
 * @schema WeightedTarget
 */
export interface WeightedTarget {
  /**
   * @schema WeightedTarget#virtualNode
   */
  readonly virtualNode: string;

  /**
   * @schema WeightedTarget#weight
   */
  readonly weight: number;

}

/**
 * @schema GrpcRouteMetadata
 */
export interface GrpcRouteMetadata {
  /**
   * @schema GrpcRouteMetadata#invert
   */
  readonly invert?: boolean;

  /**
   * @schema GrpcRouteMetadata#match
   */
  readonly match?: GrpcRouteMetadataMatchMethod;

  /**
   * @schema GrpcRouteMetadata#name
   */
  readonly name: string;

}

/**
 * @schema Duration
 */
export interface Duration {
  /**
   * @schema Duration#unit
   */
  readonly unit?: string;

  /**
   * @schema Duration#value
   */
  readonly value?: number;

}

/**
 * @schema HttpRouteHeader
 */
export interface HttpRouteHeader {
  /**
   * @schema HttpRouteHeader#invert
   */
  readonly invert?: boolean;

  /**
   * @schema HttpRouteHeader#match
   */
  readonly match?: HeaderMatchMethod;

  /**
   * @schema HttpRouteHeader#name
   */
  readonly name: string;

}

/**
 * @schema VirtualGatewayClientPolicyTls
 */
export interface VirtualGatewayClientPolicyTls {
  /**
   * @schema VirtualGatewayClientPolicyTls#enforce
   */
  readonly enforce?: boolean;

  /**
   * @schema VirtualGatewayClientPolicyTls#ports
   */
  readonly ports?: number[];

  /**
   * @schema VirtualGatewayClientPolicyTls#validation
   */
  readonly validation: VirtualGatewayTlsValidationContext;

}

/**
 * @schema VirtualGatewayGrpcConnectionPool
 */
export interface VirtualGatewayGrpcConnectionPool {
  /**
   * @schema VirtualGatewayGrpcConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * @schema VirtualGatewayHttpConnectionPool
 */
export interface VirtualGatewayHttpConnectionPool {
  /**
   * @schema VirtualGatewayHttpConnectionPool#maxConnections
   */
  readonly maxConnections: number;

  /**
   * @schema VirtualGatewayHttpConnectionPool#maxPendingRequests
   */
  readonly maxPendingRequests?: number;

}

/**
 * @schema VirtualGatewayHttp2ConnectionPool
 */
export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * @schema VirtualGatewayHttp2ConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * @schema VirtualGatewayListenerTlsCertificate
 */
export interface VirtualGatewayListenerTlsCertificate {
  /**
   * @schema VirtualGatewayListenerTlsCertificate#acm
   */
  readonly acm?: VirtualGatewayListenerTlsAcmCertificate;

  /**
   * @schema VirtualGatewayListenerTlsCertificate#file
   */
  readonly file?: VirtualGatewayListenerTlsFileCertificate;

}

/**
 * @schema VirtualGatewayFileAccessLog
 */
export interface VirtualGatewayFileAccessLog {
  /**
   * @schema VirtualGatewayFileAccessLog#path
   */
  readonly path: string;

}

/**
 * @schema ClientPolicyTls
 */
export interface ClientPolicyTls {
  /**
   * @schema ClientPolicyTls#enforce
   */
  readonly enforce?: boolean;

  /**
   * @schema ClientPolicyTls#ports
   */
  readonly ports?: number[];

  /**
   * @schema ClientPolicyTls#validation
   */
  readonly validation: TlsValidationContext;

}

/**
 * @schema VirtualNodeGrpcConnectionPool
 */
export interface VirtualNodeGrpcConnectionPool {
  /**
   * @schema VirtualNodeGrpcConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * @schema VirtualNodeHttpConnectionPool
 */
export interface VirtualNodeHttpConnectionPool {
  /**
   * @schema VirtualNodeHttpConnectionPool#maxConnections
   */
  readonly maxConnections: number;

  /**
   * @schema VirtualNodeHttpConnectionPool#maxPendingRequests
   */
  readonly maxPendingRequests?: number;

}

/**
 * @schema VirtualNodeHttp2ConnectionPool
 */
export interface VirtualNodeHttp2ConnectionPool {
  /**
   * @schema VirtualNodeHttp2ConnectionPool#maxRequests
   */
  readonly maxRequests: number;

}

/**
 * @schema VirtualNodeTcpConnectionPool
 */
export interface VirtualNodeTcpConnectionPool {
  /**
   * @schema VirtualNodeTcpConnectionPool#maxConnections
   */
  readonly maxConnections: number;

}

/**
 * @schema ListenerTlsCertificate
 */
export interface ListenerTlsCertificate {
  /**
   * @schema ListenerTlsCertificate#acm
   */
  readonly acm?: ListenerTlsAcmCertificate;

  /**
   * @schema ListenerTlsCertificate#file
   */
  readonly file?: ListenerTlsFileCertificate;

}

/**
 * @schema FileAccessLog
 */
export interface FileAccessLog {
  /**
   * @schema FileAccessLog#path
   */
  readonly path: string;

}

/**
 * @schema AwsCloudMapInstanceAttribute
 */
export interface AwsCloudMapInstanceAttribute {
  /**
   * @schema AwsCloudMapInstanceAttribute#key
   */
  readonly key: string;

  /**
   * @schema AwsCloudMapInstanceAttribute#value
   */
  readonly value: string;

}

/**
 * @schema GatewayRouteVirtualService
 */
export interface GatewayRouteVirtualService {
  /**
   * @schema GatewayRouteVirtualService#virtualServiceName
   */
  readonly virtualServiceName: string;

}

/**
 * @schema GrpcRouteMetadataMatchMethod
 */
export interface GrpcRouteMetadataMatchMethod {
  /**
   * @schema GrpcRouteMetadataMatchMethod#exact
   */
  readonly exact?: string;

  /**
   * @schema GrpcRouteMetadataMatchMethod#prefix
   */
  readonly prefix?: string;

  /**
   * @schema GrpcRouteMetadataMatchMethod#range
   */
  readonly range?: MatchRange;

  /**
   * @schema GrpcRouteMetadataMatchMethod#regex
   */
  readonly regex?: string;

  /**
   * @schema GrpcRouteMetadataMatchMethod#suffix
   */
  readonly suffix?: string;

}

/**
 * @schema HeaderMatchMethod
 */
export interface HeaderMatchMethod {
  /**
   * @schema HeaderMatchMethod#exact
   */
  readonly exact?: string;

  /**
   * @schema HeaderMatchMethod#prefix
   */
  readonly prefix?: string;

  /**
   * @schema HeaderMatchMethod#range
   */
  readonly range?: MatchRange;

  /**
   * @schema HeaderMatchMethod#regex
   */
  readonly regex?: string;

  /**
   * @schema HeaderMatchMethod#suffix
   */
  readonly suffix?: string;

}

/**
 * @schema VirtualGatewayTlsValidationContext
 */
export interface VirtualGatewayTlsValidationContext {
  /**
   * @schema VirtualGatewayTlsValidationContext#trust
   */
  readonly trust: VirtualGatewayTlsValidationContextTrust;

}

/**
 * @schema VirtualGatewayListenerTlsAcmCertificate
 */
export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * @schema VirtualGatewayListenerTlsAcmCertificate#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema VirtualGatewayListenerTlsFileCertificate
 */
export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * @schema VirtualGatewayListenerTlsFileCertificate#certificateChain
   */
  readonly certificateChain: string;

  /**
   * @schema VirtualGatewayListenerTlsFileCertificate#privateKey
   */
  readonly privateKey: string;

}

/**
 * @schema TlsValidationContext
 */
export interface TlsValidationContext {
  /**
   * @schema TlsValidationContext#trust
   */
  readonly trust: TlsValidationContextTrust;

}

/**
 * @schema ListenerTlsAcmCertificate
 */
export interface ListenerTlsAcmCertificate {
  /**
   * @schema ListenerTlsAcmCertificate#certificateArn
   */
  readonly certificateArn: string;

}

/**
 * @schema ListenerTlsFileCertificate
 */
export interface ListenerTlsFileCertificate {
  /**
   * @schema ListenerTlsFileCertificate#certificateChain
   */
  readonly certificateChain: string;

  /**
   * @schema ListenerTlsFileCertificate#privateKey
   */
  readonly privateKey: string;

}

/**
 * @schema MatchRange
 */
export interface MatchRange {
  /**
   * @schema MatchRange#end
   */
  readonly end: number;

  /**
   * @schema MatchRange#start
   */
  readonly start: number;

}

/**
 * @schema VirtualGatewayTlsValidationContextTrust
 */
export interface VirtualGatewayTlsValidationContextTrust {
  /**
   * @schema VirtualGatewayTlsValidationContextTrust#acm
   */
  readonly acm?: VirtualGatewayTlsValidationContextAcmTrust;

  /**
   * @schema VirtualGatewayTlsValidationContextTrust#file
   */
  readonly file?: VirtualGatewayTlsValidationContextFileTrust;

}

/**
 * @schema TlsValidationContextTrust
 */
export interface TlsValidationContextTrust {
  /**
   * @schema TlsValidationContextTrust#acm
   */
  readonly acm?: TlsValidationContextAcmTrust;

  /**
   * @schema TlsValidationContextTrust#file
   */
  readonly file?: TlsValidationContextFileTrust;

}

/**
 * @schema VirtualGatewayTlsValidationContextAcmTrust
 */
export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * @schema VirtualGatewayTlsValidationContextAcmTrust#certificateAuthorityArns
   */
  readonly certificateAuthorityArns: string[];

}

/**
 * @schema VirtualGatewayTlsValidationContextFileTrust
 */
export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * @schema VirtualGatewayTlsValidationContextFileTrust#certificateChain
   */
  readonly certificateChain: string;

}

/**
 * @schema TlsValidationContextAcmTrust
 */
export interface TlsValidationContextAcmTrust {
  /**
   * @schema TlsValidationContextAcmTrust#certificateAuthorityArns
   */
  readonly certificateAuthorityArns: string[];

}

/**
 * @schema TlsValidationContextFileTrust
 */
export interface TlsValidationContextFileTrust {
  /**
   * @schema TlsValidationContextFileTrust#certificateChain
   */
  readonly certificateChain: string;

}
