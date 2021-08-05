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
 * @schema IoT1ClickProjectsAssociateDeviceWithPlacementResponse
 */
export interface IoT1ClickProjectsAssociateDeviceWithPlacementResponse {
}

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
 * @schema IoT1ClickProjectsCreatePlacementResponse
 */
export interface IoT1ClickProjectsCreatePlacementResponse {
}

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
 * @schema IoT1ClickProjectsCreateProjectResponse
 */
export interface IoT1ClickProjectsCreateProjectResponse {
}

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
 * @schema IoT1ClickProjectsDeletePlacementResponse
 */
export interface IoT1ClickProjectsDeletePlacementResponse {
}

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
 * @schema IoT1ClickProjectsDeleteProjectResponse
 */
export interface IoT1ClickProjectsDeleteProjectResponse {
}

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
 * @schema IoT1ClickProjectsDescribePlacementResponse
 */
export interface IoT1ClickProjectsDescribePlacementResponse {
  /**
   * @schema IoT1ClickProjectsDescribePlacementResponse#placement
   */
  readonly placement: IoT1ClickProjectsPlacementDescription;

}

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
 * @schema IoT1ClickProjectsDescribeProjectResponse
 */
export interface IoT1ClickProjectsDescribeProjectResponse {
  /**
   * @schema IoT1ClickProjectsDescribeProjectResponse#project
   */
  readonly project: IoT1ClickProjectsProjectDescription;

}

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
 * @schema IoT1ClickProjectsDisassociateDeviceFromPlacementResponse
 */
export interface IoT1ClickProjectsDisassociateDeviceFromPlacementResponse {
}

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
 * @schema IoT1ClickProjectsGetDevicesInPlacementResponse
 */
export interface IoT1ClickProjectsGetDevicesInPlacementResponse {
  /**
   * @schema IoT1ClickProjectsGetDevicesInPlacementResponse#devices
   */
  readonly devices: { [key: string]: string };

}

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
 * @schema IoT1ClickProjectsListTagsForResourceRequest
 */
export interface IoT1ClickProjectsListTagsForResourceRequest {
  /**
   * @schema IoT1ClickProjectsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

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
 * @schema IoT1ClickProjectsTagResourceResponse
 */
export interface IoT1ClickProjectsTagResourceResponse {
}

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
 * @schema IoT1ClickProjectsUntagResourceResponse
 */
export interface IoT1ClickProjectsUntagResourceResponse {
}

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
 * @schema IoT1ClickProjectsUpdatePlacementResponse
 */
export interface IoT1ClickProjectsUpdatePlacementResponse {
}

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
 * @schema IoT1ClickProjectsUpdateProjectResponse
 */
export interface IoT1ClickProjectsUpdateProjectResponse {
}

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
