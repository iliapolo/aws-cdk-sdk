/**
 * @schema IoTThingsGraphAssociateEntityToThingRequest
 */
export interface IoTThingsGraphAssociateEntityToThingRequest {
  /**
   * @schema IoTThingsGraphAssociateEntityToThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTThingsGraphAssociateEntityToThingRequest#entityId
   */
  readonly entityId: string;

  /**
   * @schema IoTThingsGraphAssociateEntityToThingRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphAssociateEntityToThingResponse
 */
export interface IoTThingsGraphAssociateEntityToThingResponse {
}

/**
 * @schema IoTThingsGraphCreateFlowTemplateRequest
 */
export interface IoTThingsGraphCreateFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphCreateFlowTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphCreateFlowTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphCreateFlowTemplateResponse
 */
export interface IoTThingsGraphCreateFlowTemplateResponse {
  /**
   * @schema IoTThingsGraphCreateFlowTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphFlowTemplateSummary;

}

/**
 * @schema IoTThingsGraphCreateSystemInstanceRequest
 */
export interface IoTThingsGraphCreateSystemInstanceRequest {
  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#tags
   */
  readonly tags?: IoTThingsGraphTag[];

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#target
   */
  readonly target: string;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#greengrassGroupName
   */
  readonly greengrassGroupName?: string;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#metricsConfiguration
   */
  readonly metricsConfiguration?: IoTThingsGraphMetricsConfiguration;

  /**
   * @schema IoTThingsGraphCreateSystemInstanceRequest#flowActionsRoleArn
   */
  readonly flowActionsRoleArn?: string;

}

/**
 * @schema IoTThingsGraphCreateSystemInstanceResponse
 */
export interface IoTThingsGraphCreateSystemInstanceResponse {
  /**
   * @schema IoTThingsGraphCreateSystemInstanceResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemInstanceSummary;

}

/**
 * @schema IoTThingsGraphCreateSystemTemplateRequest
 */
export interface IoTThingsGraphCreateSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphCreateSystemTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphCreateSystemTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphCreateSystemTemplateResponse
 */
export interface IoTThingsGraphCreateSystemTemplateResponse {
  /**
   * @schema IoTThingsGraphCreateSystemTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemTemplateSummary;

}

/**
 * @schema IoTThingsGraphDeleteFlowTemplateRequest
 */
export interface IoTThingsGraphDeleteFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphDeleteFlowTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema IoTThingsGraphDeleteFlowTemplateResponse
 */
export interface IoTThingsGraphDeleteFlowTemplateResponse {
}

/**
 * @schema IoTThingsGraphDeleteNamespaceRequest
 */
export interface IoTThingsGraphDeleteNamespaceRequest {
}

/**
 * @schema IoTThingsGraphDeleteNamespaceResponse
 */
export interface IoTThingsGraphDeleteNamespaceResponse {
  /**
   * @schema IoTThingsGraphDeleteNamespaceResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphDeleteNamespaceResponse#namespaceName
   */
  readonly namespaceName?: string;

}

/**
 * @schema IoTThingsGraphDeleteSystemInstanceRequest
 */
export interface IoTThingsGraphDeleteSystemInstanceRequest {
  /**
   * @schema IoTThingsGraphDeleteSystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * @schema IoTThingsGraphDeleteSystemInstanceResponse
 */
export interface IoTThingsGraphDeleteSystemInstanceResponse {
}

/**
 * @schema IoTThingsGraphDeleteSystemTemplateRequest
 */
export interface IoTThingsGraphDeleteSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphDeleteSystemTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema IoTThingsGraphDeleteSystemTemplateResponse
 */
export interface IoTThingsGraphDeleteSystemTemplateResponse {
}

/**
 * @schema IoTThingsGraphDeploySystemInstanceRequest
 */
export interface IoTThingsGraphDeploySystemInstanceRequest {
  /**
   * @schema IoTThingsGraphDeploySystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * @schema IoTThingsGraphDeploySystemInstanceResponse
 */
export interface IoTThingsGraphDeploySystemInstanceResponse {
  /**
   * @schema IoTThingsGraphDeploySystemInstanceResponse#summary
   */
  readonly summary: IoTThingsGraphSystemInstanceSummary;

  /**
   * @schema IoTThingsGraphDeploySystemInstanceResponse#greengrassDeploymentId
   */
  readonly greengrassDeploymentId?: string;

}

/**
 * @schema IoTThingsGraphDeprecateFlowTemplateRequest
 */
export interface IoTThingsGraphDeprecateFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphDeprecateFlowTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema IoTThingsGraphDeprecateFlowTemplateResponse
 */
export interface IoTThingsGraphDeprecateFlowTemplateResponse {
}

/**
 * @schema IoTThingsGraphDeprecateSystemTemplateRequest
 */
export interface IoTThingsGraphDeprecateSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphDeprecateSystemTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema IoTThingsGraphDeprecateSystemTemplateResponse
 */
export interface IoTThingsGraphDeprecateSystemTemplateResponse {
}

/**
 * @schema IoTThingsGraphDescribeNamespaceRequest
 */
export interface IoTThingsGraphDescribeNamespaceRequest {
  /**
   * @schema IoTThingsGraphDescribeNamespaceRequest#namespaceName
   */
  readonly namespaceName?: string;

}

/**
 * @schema IoTThingsGraphDescribeNamespaceResponse
 */
export interface IoTThingsGraphDescribeNamespaceResponse {
  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#trackingNamespaceName
   */
  readonly trackingNamespaceName?: string;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#trackingNamespaceVersion
   */
  readonly trackingNamespaceVersion?: number;

  /**
   * @schema IoTThingsGraphDescribeNamespaceResponse#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphDissociateEntityFromThingRequest
 */
export interface IoTThingsGraphDissociateEntityFromThingRequest {
  /**
   * @schema IoTThingsGraphDissociateEntityFromThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema IoTThingsGraphDissociateEntityFromThingRequest#entityType
   */
  readonly entityType: string;

}

/**
 * @schema IoTThingsGraphDissociateEntityFromThingResponse
 */
export interface IoTThingsGraphDissociateEntityFromThingResponse {
}

/**
 * @schema IoTThingsGraphGetEntitiesRequest
 */
export interface IoTThingsGraphGetEntitiesRequest {
  /**
   * @schema IoTThingsGraphGetEntitiesRequest#ids
   */
  readonly ids: string[];

  /**
   * @schema IoTThingsGraphGetEntitiesRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphGetEntitiesResponse
 */
export interface IoTThingsGraphGetEntitiesResponse {
  /**
   * @schema IoTThingsGraphGetEntitiesResponse#descriptions
   */
  readonly descriptions?: IoTThingsGraphEntityDescription[];

}

/**
 * @schema IoTThingsGraphGetFlowTemplateRequest
 */
export interface IoTThingsGraphGetFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphGetFlowTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetFlowTemplateRequest#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * @schema IoTThingsGraphGetFlowTemplateResponse
 */
export interface IoTThingsGraphGetFlowTemplateResponse {
  /**
   * @schema IoTThingsGraphGetFlowTemplateResponse#description
   */
  readonly description?: IoTThingsGraphFlowTemplateDescription;

}

/**
 * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest
 */
export interface IoTThingsGraphGetFlowTemplateRevisionsRequest {
  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphGetFlowTemplateRevisionsResponse
 */
export interface IoTThingsGraphGetFlowTemplateRevisionsResponse {
  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsResponse#summaries
   */
  readonly summaries?: IoTThingsGraphFlowTemplateSummary[];

  /**
   * @schema IoTThingsGraphGetFlowTemplateRevisionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphGetNamespaceDeletionStatusRequest
 */
export interface IoTThingsGraphGetNamespaceDeletionStatusRequest {
}

/**
 * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse
 */
export interface IoTThingsGraphGetNamespaceDeletionStatusResponse {
  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTThingsGraphGetNamespaceDeletionStatusResponse#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema IoTThingsGraphGetSystemInstanceRequest
 */
export interface IoTThingsGraphGetSystemInstanceRequest {
  /**
   * @schema IoTThingsGraphGetSystemInstanceRequest#id
   */
  readonly id: string;

}

/**
 * @schema IoTThingsGraphGetSystemInstanceResponse
 */
export interface IoTThingsGraphGetSystemInstanceResponse {
  /**
   * @schema IoTThingsGraphGetSystemInstanceResponse#description
   */
  readonly description?: IoTThingsGraphSystemInstanceDescription;

}

/**
 * @schema IoTThingsGraphGetSystemTemplateRequest
 */
export interface IoTThingsGraphGetSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphGetSystemTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetSystemTemplateRequest#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * @schema IoTThingsGraphGetSystemTemplateResponse
 */
export interface IoTThingsGraphGetSystemTemplateResponse {
  /**
   * @schema IoTThingsGraphGetSystemTemplateResponse#description
   */
  readonly description?: IoTThingsGraphSystemTemplateDescription;

}

/**
 * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest
 */
export interface IoTThingsGraphGetSystemTemplateRevisionsRequest {
  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphGetSystemTemplateRevisionsResponse
 */
export interface IoTThingsGraphGetSystemTemplateRevisionsResponse {
  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsResponse#summaries
   */
  readonly summaries?: IoTThingsGraphSystemTemplateSummary[];

  /**
   * @schema IoTThingsGraphGetSystemTemplateRevisionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphGetUploadStatusRequest
 */
export interface IoTThingsGraphGetUploadStatusRequest {
  /**
   * @schema IoTThingsGraphGetUploadStatusRequest#uploadId
   */
  readonly uploadId: string;

}

/**
 * @schema IoTThingsGraphGetUploadStatusResponse
 */
export interface IoTThingsGraphGetUploadStatusResponse {
  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#uploadStatus
   */
  readonly uploadStatus: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#namespaceVersion
   */
  readonly namespaceVersion?: number;

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#failureReason
   */
  readonly failureReason?: string[];

  /**
   * @schema IoTThingsGraphGetUploadStatusResponse#createdDate
   */
  readonly createdDate: string;

}

/**
 * @schema IoTThingsGraphListFlowExecutionMessagesRequest
 */
export interface IoTThingsGraphListFlowExecutionMessagesRequest {
  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesRequest#flowExecutionId
   */
  readonly flowExecutionId: string;

  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphListFlowExecutionMessagesResponse
 */
export interface IoTThingsGraphListFlowExecutionMessagesResponse {
  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesResponse#messages
   */
  readonly messages?: IoTThingsGraphFlowExecutionMessage[];

  /**
   * @schema IoTThingsGraphListFlowExecutionMessagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphListTagsForResourceRequest
 */
export interface IoTThingsGraphListTagsForResourceRequest {
  /**
   * @schema IoTThingsGraphListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTThingsGraphListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTThingsGraphListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphListTagsForResourceResponse
 */
export interface IoTThingsGraphListTagsForResourceResponse {
  /**
   * @schema IoTThingsGraphListTagsForResourceResponse#tags
   */
  readonly tags?: IoTThingsGraphTag[];

  /**
   * @schema IoTThingsGraphListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphSearchEntitiesRequest
 */
export interface IoTThingsGraphSearchEntitiesRequest {
  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#entityTypes
   */
  readonly entityTypes: string[];

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#filters
   */
  readonly filters?: IoTThingsGraphEntityFilter[];

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTThingsGraphSearchEntitiesRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphSearchEntitiesResponse
 */
export interface IoTThingsGraphSearchEntitiesResponse {
  /**
   * @schema IoTThingsGraphSearchEntitiesResponse#descriptions
   */
  readonly descriptions?: IoTThingsGraphEntityDescription[];

  /**
   * @schema IoTThingsGraphSearchEntitiesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphSearchFlowExecutionsRequest
 */
export interface IoTThingsGraphSearchFlowExecutionsRequest {
  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#systemInstanceId
   */
  readonly systemInstanceId: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#flowExecutionId
   */
  readonly flowExecutionId?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphSearchFlowExecutionsResponse
 */
export interface IoTThingsGraphSearchFlowExecutionsResponse {
  /**
   * @schema IoTThingsGraphSearchFlowExecutionsResponse#summaries
   */
  readonly summaries?: IoTThingsGraphFlowExecutionSummary[];

  /**
   * @schema IoTThingsGraphSearchFlowExecutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphSearchFlowTemplatesRequest
 */
export interface IoTThingsGraphSearchFlowTemplatesRequest {
  /**
   * @schema IoTThingsGraphSearchFlowTemplatesRequest#filters
   */
  readonly filters?: IoTThingsGraphFlowTemplateFilter[];

  /**
   * @schema IoTThingsGraphSearchFlowTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchFlowTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphSearchFlowTemplatesResponse
 */
export interface IoTThingsGraphSearchFlowTemplatesResponse {
  /**
   * @schema IoTThingsGraphSearchFlowTemplatesResponse#summaries
   */
  readonly summaries?: IoTThingsGraphFlowTemplateSummary[];

  /**
   * @schema IoTThingsGraphSearchFlowTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphSearchSystemInstancesRequest
 */
export interface IoTThingsGraphSearchSystemInstancesRequest {
  /**
   * @schema IoTThingsGraphSearchSystemInstancesRequest#filters
   */
  readonly filters?: IoTThingsGraphSystemInstanceFilter[];

  /**
   * @schema IoTThingsGraphSearchSystemInstancesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchSystemInstancesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphSearchSystemInstancesResponse
 */
export interface IoTThingsGraphSearchSystemInstancesResponse {
  /**
   * @schema IoTThingsGraphSearchSystemInstancesResponse#summaries
   */
  readonly summaries?: IoTThingsGraphSystemInstanceSummary[];

  /**
   * @schema IoTThingsGraphSearchSystemInstancesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphSearchSystemTemplatesRequest
 */
export interface IoTThingsGraphSearchSystemTemplatesRequest {
  /**
   * @schema IoTThingsGraphSearchSystemTemplatesRequest#filters
   */
  readonly filters?: IoTThingsGraphSystemTemplateFilter[];

  /**
   * @schema IoTThingsGraphSearchSystemTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchSystemTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTThingsGraphSearchSystemTemplatesResponse
 */
export interface IoTThingsGraphSearchSystemTemplatesResponse {
  /**
   * @schema IoTThingsGraphSearchSystemTemplatesResponse#summaries
   */
  readonly summaries?: IoTThingsGraphSystemTemplateSummary[];

  /**
   * @schema IoTThingsGraphSearchSystemTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphSearchThingsRequest
 */
export interface IoTThingsGraphSearchThingsRequest {
  /**
   * @schema IoTThingsGraphSearchThingsRequest#entityId
   */
  readonly entityId: string;

  /**
   * @schema IoTThingsGraphSearchThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTThingsGraphSearchThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema IoTThingsGraphSearchThingsRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphSearchThingsResponse
 */
export interface IoTThingsGraphSearchThingsResponse {
  /**
   * @schema IoTThingsGraphSearchThingsResponse#things
   */
  readonly things?: IoTThingsGraphThing[];

  /**
   * @schema IoTThingsGraphSearchThingsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTThingsGraphTagResourceRequest
 */
export interface IoTThingsGraphTagResourceRequest {
  /**
   * @schema IoTThingsGraphTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTThingsGraphTagResourceRequest#tags
   */
  readonly tags: IoTThingsGraphTag[];

}

/**
 * @schema IoTThingsGraphTagResourceResponse
 */
export interface IoTThingsGraphTagResourceResponse {
}

/**
 * @schema IoTThingsGraphUndeploySystemInstanceRequest
 */
export interface IoTThingsGraphUndeploySystemInstanceRequest {
  /**
   * @schema IoTThingsGraphUndeploySystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * @schema IoTThingsGraphUndeploySystemInstanceResponse
 */
export interface IoTThingsGraphUndeploySystemInstanceResponse {
  /**
   * @schema IoTThingsGraphUndeploySystemInstanceResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemInstanceSummary;

}

/**
 * @schema IoTThingsGraphUntagResourceRequest
 */
export interface IoTThingsGraphUntagResourceRequest {
  /**
   * @schema IoTThingsGraphUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTThingsGraphUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IoTThingsGraphUntagResourceResponse
 */
export interface IoTThingsGraphUntagResourceResponse {
}

/**
 * @schema IoTThingsGraphUpdateFlowTemplateRequest
 */
export interface IoTThingsGraphUpdateFlowTemplateRequest {
  /**
   * @schema IoTThingsGraphUpdateFlowTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphUpdateFlowTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphUpdateFlowTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphUpdateFlowTemplateResponse
 */
export interface IoTThingsGraphUpdateFlowTemplateResponse {
  /**
   * @schema IoTThingsGraphUpdateFlowTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphFlowTemplateSummary;

}

/**
 * @schema IoTThingsGraphUpdateSystemTemplateRequest
 */
export interface IoTThingsGraphUpdateSystemTemplateRequest {
  /**
   * @schema IoTThingsGraphUpdateSystemTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema IoTThingsGraphUpdateSystemTemplateRequest#definition
   */
  readonly definition: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphUpdateSystemTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphUpdateSystemTemplateResponse
 */
export interface IoTThingsGraphUpdateSystemTemplateResponse {
  /**
   * @schema IoTThingsGraphUpdateSystemTemplateResponse#summary
   */
  readonly summary?: IoTThingsGraphSystemTemplateSummary;

}

/**
 * @schema IoTThingsGraphUploadEntityDefinitionsRequest
 */
export interface IoTThingsGraphUploadEntityDefinitionsRequest {
  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsRequest#document
   */
  readonly document?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsRequest#syncWithPublicNamespace
   */
  readonly syncWithPublicNamespace?: boolean;

  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsRequest#deprecateExistingEntities
   */
  readonly deprecateExistingEntities?: boolean;

}

/**
 * @schema IoTThingsGraphUploadEntityDefinitionsResponse
 */
export interface IoTThingsGraphUploadEntityDefinitionsResponse {
  /**
   * @schema IoTThingsGraphUploadEntityDefinitionsResponse#uploadId
   */
  readonly uploadId: string;

}

/**
 * @schema IoTThingsGraphDefinitionDocument
 */
export interface IoTThingsGraphDefinitionDocument {
  /**
   * @schema IoTThingsGraphDefinitionDocument#language
   */
  readonly language: string;

  /**
   * @schema IoTThingsGraphDefinitionDocument#text
   */
  readonly text: string;

}

/**
 * @schema IoTThingsGraphFlowTemplateSummary
 */
export interface IoTThingsGraphFlowTemplateSummary {
  /**
   * @schema IoTThingsGraphFlowTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphFlowTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphFlowTemplateSummary#revisionNumber
   */
  readonly revisionNumber?: number;

  /**
   * @schema IoTThingsGraphFlowTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema IoTThingsGraphTag
 */
export interface IoTThingsGraphTag {
  /**
   * @schema IoTThingsGraphTag#key
   */
  readonly key: string;

  /**
   * @schema IoTThingsGraphTag#value
   */
  readonly value: string;

}

/**
 * @schema IoTThingsGraphMetricsConfiguration
 */
export interface IoTThingsGraphMetricsConfiguration {
  /**
   * @schema IoTThingsGraphMetricsConfiguration#cloudMetricEnabled
   */
  readonly cloudMetricEnabled?: boolean;

  /**
   * @schema IoTThingsGraphMetricsConfiguration#metricRuleRoleArn
   */
  readonly metricRuleRoleArn?: string;

}

/**
 * @schema IoTThingsGraphSystemInstanceSummary
 */
export interface IoTThingsGraphSystemInstanceSummary {
  /**
   * @schema IoTThingsGraphSystemInstanceSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#target
   */
  readonly target?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#greengrassGroupName
   */
  readonly greengrassGroupName?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceSummary#greengrassGroupVersionId
   */
  readonly greengrassGroupVersionId?: string;

}

/**
 * @schema IoTThingsGraphSystemTemplateSummary
 */
export interface IoTThingsGraphSystemTemplateSummary {
  /**
   * @schema IoTThingsGraphSystemTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphSystemTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphSystemTemplateSummary#revisionNumber
   */
  readonly revisionNumber?: number;

  /**
   * @schema IoTThingsGraphSystemTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema IoTThingsGraphEntityDescription
 */
export interface IoTThingsGraphEntityDescription {
  /**
   * @schema IoTThingsGraphEntityDescription#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#type
   */
  readonly type?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTThingsGraphEntityDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

}

/**
 * @schema IoTThingsGraphFlowTemplateDescription
 */
export interface IoTThingsGraphFlowTemplateDescription {
  /**
   * @schema IoTThingsGraphFlowTemplateDescription#summary
   */
  readonly summary?: IoTThingsGraphFlowTemplateSummary;

  /**
   * @schema IoTThingsGraphFlowTemplateDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphFlowTemplateDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphSystemInstanceDescription
 */
export interface IoTThingsGraphSystemInstanceDescription {
  /**
   * @schema IoTThingsGraphSystemInstanceDescription#summary
   */
  readonly summary?: IoTThingsGraphSystemInstanceSummary;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#metricsConfiguration
   */
  readonly metricsConfiguration?: IoTThingsGraphMetricsConfiguration;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#validatedDependencyRevisions
   */
  readonly validatedDependencyRevisions?: IoTThingsGraphDependencyRevision[];

  /**
   * @schema IoTThingsGraphSystemInstanceDescription#flowActionsRoleArn
   */
  readonly flowActionsRoleArn?: string;

}

/**
 * @schema IoTThingsGraphSystemTemplateDescription
 */
export interface IoTThingsGraphSystemTemplateDescription {
  /**
   * @schema IoTThingsGraphSystemTemplateDescription#summary
   */
  readonly summary?: IoTThingsGraphSystemTemplateSummary;

  /**
   * @schema IoTThingsGraphSystemTemplateDescription#definition
   */
  readonly definition?: IoTThingsGraphDefinitionDocument;

  /**
   * @schema IoTThingsGraphSystemTemplateDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

}

/**
 * @schema IoTThingsGraphFlowExecutionMessage
 */
export interface IoTThingsGraphFlowExecutionMessage {
  /**
   * @schema IoTThingsGraphFlowExecutionMessage#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionMessage#eventType
   */
  readonly eventType?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionMessage#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionMessage#payload
   */
  readonly payload?: string;

}

/**
 * @schema IoTThingsGraphEntityFilter
 */
export interface IoTThingsGraphEntityFilter {
  /**
   * @schema IoTThingsGraphEntityFilter#name
   */
  readonly name?: string;

  /**
   * @schema IoTThingsGraphEntityFilter#value
   */
  readonly value?: string[];

}

/**
 * @schema IoTThingsGraphFlowExecutionSummary
 */
export interface IoTThingsGraphFlowExecutionSummary {
  /**
   * @schema IoTThingsGraphFlowExecutionSummary#flowExecutionId
   */
  readonly flowExecutionId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#systemInstanceId
   */
  readonly systemInstanceId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#flowTemplateId
   */
  readonly flowTemplateId?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema IoTThingsGraphFlowExecutionSummary#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema IoTThingsGraphFlowTemplateFilter
 */
export interface IoTThingsGraphFlowTemplateFilter {
  /**
   * @schema IoTThingsGraphFlowTemplateFilter#name
   */
  readonly name: string;

  /**
   * @schema IoTThingsGraphFlowTemplateFilter#value
   */
  readonly value: string[];

}

/**
 * @schema IoTThingsGraphSystemInstanceFilter
 */
export interface IoTThingsGraphSystemInstanceFilter {
  /**
   * @schema IoTThingsGraphSystemInstanceFilter#name
   */
  readonly name?: string;

  /**
   * @schema IoTThingsGraphSystemInstanceFilter#value
   */
  readonly value?: string[];

}

/**
 * @schema IoTThingsGraphSystemTemplateFilter
 */
export interface IoTThingsGraphSystemTemplateFilter {
  /**
   * @schema IoTThingsGraphSystemTemplateFilter#name
   */
  readonly name: string;

  /**
   * @schema IoTThingsGraphSystemTemplateFilter#value
   */
  readonly value: string[];

}

/**
 * @schema IoTThingsGraphThing
 */
export interface IoTThingsGraphThing {
  /**
   * @schema IoTThingsGraphThing#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema IoTThingsGraphThing#thingName
   */
  readonly thingName?: string;

}

/**
 * @schema IoTThingsGraphDependencyRevision
 */
export interface IoTThingsGraphDependencyRevision {
  /**
   * @schema IoTThingsGraphDependencyRevision#id
   */
  readonly id?: string;

  /**
   * @schema IoTThingsGraphDependencyRevision#revisionNumber
   */
  readonly revisionNumber?: number;

}
