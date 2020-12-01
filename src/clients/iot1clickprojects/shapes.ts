/**
 * @schema AssociateDeviceWithPlacementRequest
 */
export interface AssociateDeviceWithPlacementRequest {
  /**
   * @schema AssociateDeviceWithPlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema AssociateDeviceWithPlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema AssociateDeviceWithPlacementRequest#deviceId
   */
  readonly deviceId: string;

  /**
   * @schema AssociateDeviceWithPlacementRequest#deviceTemplateName
   */
  readonly deviceTemplateName: string;

}

/**
 * @schema AssociateDeviceWithPlacementResponse
 */
export interface AssociateDeviceWithPlacementResponse {
}

/**
 * @schema CreatePlacementRequest
 */
export interface CreatePlacementRequest {
  /**
   * @schema CreatePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema CreatePlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema CreatePlacementRequest#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema CreatePlacementResponse
 */
export interface CreatePlacementResponse {
}

/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema CreateProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateProjectRequest#placementTemplate
   */
  readonly placementTemplate?: PlacementTemplate;

  /**
   * @schema CreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateProjectResponse
 */
export interface CreateProjectResponse {
}

/**
 * @schema DeletePlacementRequest
 */
export interface DeletePlacementRequest {
  /**
   * @schema DeletePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema DeletePlacementRequest#projectName
   */
  readonly projectName: string;

}

/**
 * @schema DeletePlacementResponse
 */
export interface DeletePlacementResponse {
}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#projectName
   */
  readonly projectName: string;

}

/**
 * @schema DeleteProjectResponse
 */
export interface DeleteProjectResponse {
}

/**
 * @schema DescribePlacementRequest
 */
export interface DescribePlacementRequest {
  /**
   * @schema DescribePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema DescribePlacementRequest#projectName
   */
  readonly projectName: string;

}

/**
 * @schema DescribePlacementResponse
 */
export interface DescribePlacementResponse {
  /**
   * @schema DescribePlacementResponse#placement
   */
  readonly placement: PlacementDescription;

}

/**
 * @schema DescribeProjectRequest
 */
export interface DescribeProjectRequest {
  /**
   * @schema DescribeProjectRequest#projectName
   */
  readonly projectName: string;

}

/**
 * @schema DescribeProjectResponse
 */
export interface DescribeProjectResponse {
  /**
   * @schema DescribeProjectResponse#project
   */
  readonly project: ProjectDescription;

}

/**
 * @schema DisassociateDeviceFromPlacementRequest
 */
export interface DisassociateDeviceFromPlacementRequest {
  /**
   * @schema DisassociateDeviceFromPlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema DisassociateDeviceFromPlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema DisassociateDeviceFromPlacementRequest#deviceTemplateName
   */
  readonly deviceTemplateName: string;

}

/**
 * @schema DisassociateDeviceFromPlacementResponse
 */
export interface DisassociateDeviceFromPlacementResponse {
}

/**
 * @schema GetDevicesInPlacementRequest
 */
export interface GetDevicesInPlacementRequest {
  /**
   * @schema GetDevicesInPlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema GetDevicesInPlacementRequest#placementName
   */
  readonly placementName: string;

}

/**
 * @schema GetDevicesInPlacementResponse
 */
export interface GetDevicesInPlacementResponse {
  /**
   * @schema GetDevicesInPlacementResponse#devices
   */
  readonly devices: { [key: string]: string };

}

/**
 * @schema ListPlacementsRequest
 */
export interface ListPlacementsRequest {
  /**
   * @schema ListPlacementsRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema ListPlacementsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPlacementsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPlacementsResponse
 */
export interface ListPlacementsResponse {
  /**
   * @schema ListPlacementsResponse#placements
   */
  readonly placements: PlacementSummary[];

  /**
   * @schema ListPlacementsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsRequest
 */
export interface ListProjectsRequest {
  /**
   * @schema ListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProjectsResponse
 */
export interface ListProjectsResponse {
  /**
   * @schema ListProjectsResponse#projects
   */
  readonly projects: ProjectSummary[];

  /**
   * @schema ListProjectsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdatePlacementRequest
 */
export interface UpdatePlacementRequest {
  /**
   * @schema UpdatePlacementRequest#placementName
   */
  readonly placementName: string;

  /**
   * @schema UpdatePlacementRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema UpdatePlacementRequest#attributes
   */
  readonly attributes?: { [key: string]: string };

}

/**
 * @schema UpdatePlacementResponse
 */
export interface UpdatePlacementResponse {
}

/**
 * @schema UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * @schema UpdateProjectRequest#projectName
   */
  readonly projectName: string;

  /**
   * @schema UpdateProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema UpdateProjectRequest#placementTemplate
   */
  readonly placementTemplate?: PlacementTemplate;

}

/**
 * @schema UpdateProjectResponse
 */
export interface UpdateProjectResponse {
}

/**
 * @schema PlacementTemplate
 */
export interface PlacementTemplate {
  /**
   * @schema PlacementTemplate#defaultAttributes
   */
  readonly defaultAttributes?: { [key: string]: string };

  /**
   * @schema PlacementTemplate#deviceTemplates
   */
  readonly deviceTemplates?: { [key: string]: DeviceTemplate };

}

/**
 * @schema PlacementDescription
 */
export interface PlacementDescription {
  /**
   * @schema PlacementDescription#projectName
   */
  readonly projectName: string;

  /**
   * @schema PlacementDescription#placementName
   */
  readonly placementName: string;

  /**
   * @schema PlacementDescription#attributes
   */
  readonly attributes: { [key: string]: string };

  /**
   * @schema PlacementDescription#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema PlacementDescription#updatedDate
   */
  readonly updatedDate: string;

}

/**
 * @schema ProjectDescription
 */
export interface ProjectDescription {
  /**
   * @schema ProjectDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema ProjectDescription#projectName
   */
  readonly projectName: string;

  /**
   * @schema ProjectDescription#description
   */
  readonly description?: string;

  /**
   * @schema ProjectDescription#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema ProjectDescription#updatedDate
   */
  readonly updatedDate: string;

  /**
   * @schema ProjectDescription#placementTemplate
   */
  readonly placementTemplate?: PlacementTemplate;

  /**
   * @schema ProjectDescription#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PlacementSummary
 */
export interface PlacementSummary {
  /**
   * @schema PlacementSummary#projectName
   */
  readonly projectName: string;

  /**
   * @schema PlacementSummary#placementName
   */
  readonly placementName: string;

  /**
   * @schema PlacementSummary#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema PlacementSummary#updatedDate
   */
  readonly updatedDate: string;

}

/**
 * @schema ProjectSummary
 */
export interface ProjectSummary {
  /**
   * @schema ProjectSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema ProjectSummary#projectName
   */
  readonly projectName: string;

  /**
   * @schema ProjectSummary#createdDate
   */
  readonly createdDate: string;

  /**
   * @schema ProjectSummary#updatedDate
   */
  readonly updatedDate: string;

  /**
   * @schema ProjectSummary#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DeviceTemplate
 */
export interface DeviceTemplate {
  /**
   * @schema DeviceTemplate#deviceType
   */
  readonly deviceType?: string;

  /**
   * @schema DeviceTemplate#callbackOverrides
   */
  readonly callbackOverrides?: { [key: string]: string };

}
