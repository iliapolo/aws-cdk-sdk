/**
 * @schema AssociateEntityToThingRequest
 */
export interface AssociateEntityToThingRequest {
  /**
   * @schema AssociateEntityToThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema AssociateEntityToThingRequest#entityId
   */
  readonly entityId: string;

  /**
   * @schema AssociateEntityToThingRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema AssociateEntityToThingResponse
 */
export interface AssociateEntityToThingResponse {
}

/**
 * @schema CreateFlowTemplateRequest
 */
export interface CreateFlowTemplateRequest {
  /**
   * @schema CreateFlowTemplateRequest#definition
   */
  readonly definition: DefinitionDocument;

  /**
   * @schema CreateFlowTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema CreateFlowTemplateResponse
 */
export interface CreateFlowTemplateResponse {
  /**
   * @schema CreateFlowTemplateResponse#summary
   */
  readonly summary?: FlowTemplateSummary;

}

/**
 * @schema CreateSystemInstanceRequest
 */
export interface CreateSystemInstanceRequest {
  /**
   * @schema CreateSystemInstanceRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateSystemInstanceRequest#definition
   */
  readonly definition: DefinitionDocument;

  /**
   * @schema CreateSystemInstanceRequest#target
   */
  readonly target: string;

  /**
   * @schema CreateSystemInstanceRequest#greengrassGroupName
   */
  readonly greengrassGroupName?: string;

  /**
   * @schema CreateSystemInstanceRequest#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema CreateSystemInstanceRequest#metricsConfiguration
   */
  readonly metricsConfiguration?: MetricsConfiguration;

  /**
   * @schema CreateSystemInstanceRequest#flowActionsRoleArn
   */
  readonly flowActionsRoleArn?: string;

}

/**
 * @schema CreateSystemInstanceResponse
 */
export interface CreateSystemInstanceResponse {
  /**
   * @schema CreateSystemInstanceResponse#summary
   */
  readonly summary?: SystemInstanceSummary;

}

/**
 * @schema CreateSystemTemplateRequest
 */
export interface CreateSystemTemplateRequest {
  /**
   * @schema CreateSystemTemplateRequest#definition
   */
  readonly definition: DefinitionDocument;

  /**
   * @schema CreateSystemTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema CreateSystemTemplateResponse
 */
export interface CreateSystemTemplateResponse {
  /**
   * @schema CreateSystemTemplateResponse#summary
   */
  readonly summary?: SystemTemplateSummary;

}

/**
 * @schema DeleteFlowTemplateRequest
 */
export interface DeleteFlowTemplateRequest {
  /**
   * @schema DeleteFlowTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeleteFlowTemplateResponse
 */
export interface DeleteFlowTemplateResponse {
}

/**
 * @schema DeleteNamespaceRequest
 */
export interface DeleteNamespaceRequest {
}

/**
 * @schema DeleteNamespaceResponse
 */
export interface DeleteNamespaceResponse {
  /**
   * @schema DeleteNamespaceResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema DeleteNamespaceResponse#namespaceName
   */
  readonly namespaceName?: string;

}

/**
 * @schema DeleteSystemInstanceRequest
 */
export interface DeleteSystemInstanceRequest {
  /**
   * @schema DeleteSystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * @schema DeleteSystemInstanceResponse
 */
export interface DeleteSystemInstanceResponse {
}

/**
 * @schema DeleteSystemTemplateRequest
 */
export interface DeleteSystemTemplateRequest {
  /**
   * @schema DeleteSystemTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeleteSystemTemplateResponse
 */
export interface DeleteSystemTemplateResponse {
}

/**
 * @schema DeploySystemInstanceRequest
 */
export interface DeploySystemInstanceRequest {
  /**
   * @schema DeploySystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * @schema DeploySystemInstanceResponse
 */
export interface DeploySystemInstanceResponse {
  /**
   * @schema DeploySystemInstanceResponse#summary
   */
  readonly summary: SystemInstanceSummary;

  /**
   * @schema DeploySystemInstanceResponse#greengrassDeploymentId
   */
  readonly greengrassDeploymentId?: string;

}

/**
 * @schema DeprecateFlowTemplateRequest
 */
export interface DeprecateFlowTemplateRequest {
  /**
   * @schema DeprecateFlowTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeprecateFlowTemplateResponse
 */
export interface DeprecateFlowTemplateResponse {
}

/**
 * @schema DeprecateSystemTemplateRequest
 */
export interface DeprecateSystemTemplateRequest {
  /**
   * @schema DeprecateSystemTemplateRequest#id
   */
  readonly id: string;

}

/**
 * @schema DeprecateSystemTemplateResponse
 */
export interface DeprecateSystemTemplateResponse {
}

/**
 * @schema DescribeNamespaceRequest
 */
export interface DescribeNamespaceRequest {
  /**
   * @schema DescribeNamespaceRequest#namespaceName
   */
  readonly namespaceName?: string;

}

/**
 * @schema DescribeNamespaceResponse
 */
export interface DescribeNamespaceResponse {
  /**
   * @schema DescribeNamespaceResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema DescribeNamespaceResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema DescribeNamespaceResponse#trackingNamespaceName
   */
  readonly trackingNamespaceName?: string;

  /**
   * @schema DescribeNamespaceResponse#trackingNamespaceVersion
   */
  readonly trackingNamespaceVersion?: number;

  /**
   * @schema DescribeNamespaceResponse#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema DissociateEntityFromThingRequest
 */
export interface DissociateEntityFromThingRequest {
  /**
   * @schema DissociateEntityFromThingRequest#thingName
   */
  readonly thingName: string;

  /**
   * @schema DissociateEntityFromThingRequest#entityType
   */
  readonly entityType: string;

}

/**
 * @schema DissociateEntityFromThingResponse
 */
export interface DissociateEntityFromThingResponse {
}

/**
 * @schema GetEntitiesRequest
 */
export interface GetEntitiesRequest {
  /**
   * @schema GetEntitiesRequest#ids
   */
  readonly ids: string[];

  /**
   * @schema GetEntitiesRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema GetEntitiesResponse
 */
export interface GetEntitiesResponse {
  /**
   * @schema GetEntitiesResponse#descriptions
   */
  readonly descriptions?: EntityDescription[];

}

/**
 * @schema GetFlowTemplateRequest
 */
export interface GetFlowTemplateRequest {
  /**
   * @schema GetFlowTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema GetFlowTemplateRequest#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * @schema GetFlowTemplateResponse
 */
export interface GetFlowTemplateResponse {
  /**
   * @schema GetFlowTemplateResponse#description
   */
  readonly description?: FlowTemplateDescription;

}

/**
 * @schema GetFlowTemplateRevisionsRequest
 */
export interface GetFlowTemplateRevisionsRequest {
  /**
   * @schema GetFlowTemplateRevisionsRequest#id
   */
  readonly id: string;

  /**
   * @schema GetFlowTemplateRevisionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFlowTemplateRevisionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetFlowTemplateRevisionsResponse
 */
export interface GetFlowTemplateRevisionsResponse {
  /**
   * @schema GetFlowTemplateRevisionsResponse#summaries
   */
  readonly summaries?: FlowTemplateSummary[];

  /**
   * @schema GetFlowTemplateRevisionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetNamespaceDeletionStatusRequest
 */
export interface GetNamespaceDeletionStatusRequest {
}

/**
 * @schema GetNamespaceDeletionStatusResponse
 */
export interface GetNamespaceDeletionStatusResponse {
  /**
   * @schema GetNamespaceDeletionStatusResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema GetNamespaceDeletionStatusResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema GetNamespaceDeletionStatusResponse#status
   */
  readonly status?: string;

  /**
   * @schema GetNamespaceDeletionStatusResponse#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema GetNamespaceDeletionStatusResponse#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema GetSystemInstanceRequest
 */
export interface GetSystemInstanceRequest {
  /**
   * @schema GetSystemInstanceRequest#id
   */
  readonly id: string;

}

/**
 * @schema GetSystemInstanceResponse
 */
export interface GetSystemInstanceResponse {
  /**
   * @schema GetSystemInstanceResponse#description
   */
  readonly description?: SystemInstanceDescription;

}

/**
 * @schema GetSystemTemplateRequest
 */
export interface GetSystemTemplateRequest {
  /**
   * @schema GetSystemTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema GetSystemTemplateRequest#revisionNumber
   */
  readonly revisionNumber?: number;

}

/**
 * @schema GetSystemTemplateResponse
 */
export interface GetSystemTemplateResponse {
  /**
   * @schema GetSystemTemplateResponse#description
   */
  readonly description?: SystemTemplateDescription;

}

/**
 * @schema GetSystemTemplateRevisionsRequest
 */
export interface GetSystemTemplateRevisionsRequest {
  /**
   * @schema GetSystemTemplateRevisionsRequest#id
   */
  readonly id: string;

  /**
   * @schema GetSystemTemplateRevisionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetSystemTemplateRevisionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetSystemTemplateRevisionsResponse
 */
export interface GetSystemTemplateRevisionsResponse {
  /**
   * @schema GetSystemTemplateRevisionsResponse#summaries
   */
  readonly summaries?: SystemTemplateSummary[];

  /**
   * @schema GetSystemTemplateRevisionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetUploadStatusRequest
 */
export interface GetUploadStatusRequest {
  /**
   * @schema GetUploadStatusRequest#uploadId
   */
  readonly uploadId: string;

}

/**
 * @schema GetUploadStatusResponse
 */
export interface GetUploadStatusResponse {
  /**
   * @schema GetUploadStatusResponse#uploadId
   */
  readonly uploadId: string;

  /**
   * @schema GetUploadStatusResponse#uploadStatus
   */
  readonly uploadStatus: string;

  /**
   * @schema GetUploadStatusResponse#namespaceArn
   */
  readonly namespaceArn?: string;

  /**
   * @schema GetUploadStatusResponse#namespaceName
   */
  readonly namespaceName?: string;

  /**
   * @schema GetUploadStatusResponse#namespaceVersion
   */
  readonly namespaceVersion?: number;

  /**
   * @schema GetUploadStatusResponse#failureReason
   */
  readonly failureReason?: string[];

  /**
   * @schema GetUploadStatusResponse#createdDate
   */
  readonly createdDate: string;

}

/**
 * @schema ListFlowExecutionMessagesRequest
 */
export interface ListFlowExecutionMessagesRequest {
  /**
   * @schema ListFlowExecutionMessagesRequest#flowExecutionId
   */
  readonly flowExecutionId: string;

  /**
   * @schema ListFlowExecutionMessagesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFlowExecutionMessagesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFlowExecutionMessagesResponse
 */
export interface ListFlowExecutionMessagesResponse {
  /**
   * @schema ListFlowExecutionMessagesResponse#messages
   */
  readonly messages?: FlowExecutionMessage[];

  /**
   * @schema ListFlowExecutionMessagesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchEntitiesRequest
 */
export interface SearchEntitiesRequest {
  /**
   * @schema SearchEntitiesRequest#entityTypes
   */
  readonly entityTypes: string[];

  /**
   * @schema SearchEntitiesRequest#filters
   */
  readonly filters?: EntityFilter[];

  /**
   * @schema SearchEntitiesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchEntitiesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchEntitiesRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema SearchEntitiesResponse
 */
export interface SearchEntitiesResponse {
  /**
   * @schema SearchEntitiesResponse#descriptions
   */
  readonly descriptions?: EntityDescription[];

  /**
   * @schema SearchEntitiesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchFlowExecutionsRequest
 */
export interface SearchFlowExecutionsRequest {
  /**
   * @schema SearchFlowExecutionsRequest#systemInstanceId
   */
  readonly systemInstanceId: string;

  /**
   * @schema SearchFlowExecutionsRequest#flowExecutionId
   */
  readonly flowExecutionId?: string;

  /**
   * @schema SearchFlowExecutionsRequest#startTime
   */
  readonly startTime?: string;

  /**
   * @schema SearchFlowExecutionsRequest#endTime
   */
  readonly endTime?: string;

  /**
   * @schema SearchFlowExecutionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchFlowExecutionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchFlowExecutionsResponse
 */
export interface SearchFlowExecutionsResponse {
  /**
   * @schema SearchFlowExecutionsResponse#summaries
   */
  readonly summaries?: FlowExecutionSummary[];

  /**
   * @schema SearchFlowExecutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchFlowTemplatesRequest
 */
export interface SearchFlowTemplatesRequest {
  /**
   * @schema SearchFlowTemplatesRequest#filters
   */
  readonly filters?: FlowTemplateFilter[];

  /**
   * @schema SearchFlowTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchFlowTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchFlowTemplatesResponse
 */
export interface SearchFlowTemplatesResponse {
  /**
   * @schema SearchFlowTemplatesResponse#summaries
   */
  readonly summaries?: FlowTemplateSummary[];

  /**
   * @schema SearchFlowTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchSystemInstancesRequest
 */
export interface SearchSystemInstancesRequest {
  /**
   * @schema SearchSystemInstancesRequest#filters
   */
  readonly filters?: SystemInstanceFilter[];

  /**
   * @schema SearchSystemInstancesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchSystemInstancesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchSystemInstancesResponse
 */
export interface SearchSystemInstancesResponse {
  /**
   * @schema SearchSystemInstancesResponse#summaries
   */
  readonly summaries?: SystemInstanceSummary[];

  /**
   * @schema SearchSystemInstancesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchSystemTemplatesRequest
 */
export interface SearchSystemTemplatesRequest {
  /**
   * @schema SearchSystemTemplatesRequest#filters
   */
  readonly filters?: SystemTemplateFilter[];

  /**
   * @schema SearchSystemTemplatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchSystemTemplatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchSystemTemplatesResponse
 */
export interface SearchSystemTemplatesResponse {
  /**
   * @schema SearchSystemTemplatesResponse#summaries
   */
  readonly summaries?: SystemTemplateSummary[];

  /**
   * @schema SearchSystemTemplatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchThingsRequest
 */
export interface SearchThingsRequest {
  /**
   * @schema SearchThingsRequest#entityId
   */
  readonly entityId: string;

  /**
   * @schema SearchThingsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchThingsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchThingsRequest#namespaceVersion
   */
  readonly namespaceVersion?: number;

}

/**
 * @schema SearchThingsResponse
 */
export interface SearchThingsResponse {
  /**
   * @schema SearchThingsResponse#things
   */
  readonly things?: Thing[];

  /**
   * @schema SearchThingsResponse#nextToken
   */
  readonly nextToken?: string;

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
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UndeploySystemInstanceRequest
 */
export interface UndeploySystemInstanceRequest {
  /**
   * @schema UndeploySystemInstanceRequest#id
   */
  readonly id?: string;

}

/**
 * @schema UndeploySystemInstanceResponse
 */
export interface UndeploySystemInstanceResponse {
  /**
   * @schema UndeploySystemInstanceResponse#summary
   */
  readonly summary?: SystemInstanceSummary;

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
 * @schema UpdateFlowTemplateRequest
 */
export interface UpdateFlowTemplateRequest {
  /**
   * @schema UpdateFlowTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema UpdateFlowTemplateRequest#definition
   */
  readonly definition: DefinitionDocument;

  /**
   * @schema UpdateFlowTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema UpdateFlowTemplateResponse
 */
export interface UpdateFlowTemplateResponse {
  /**
   * @schema UpdateFlowTemplateResponse#summary
   */
  readonly summary?: FlowTemplateSummary;

}

/**
 * @schema UpdateSystemTemplateRequest
 */
export interface UpdateSystemTemplateRequest {
  /**
   * @schema UpdateSystemTemplateRequest#id
   */
  readonly id: string;

  /**
   * @schema UpdateSystemTemplateRequest#definition
   */
  readonly definition: DefinitionDocument;

  /**
   * @schema UpdateSystemTemplateRequest#compatibleNamespaceVersion
   */
  readonly compatibleNamespaceVersion?: number;

}

/**
 * @schema UpdateSystemTemplateResponse
 */
export interface UpdateSystemTemplateResponse {
  /**
   * @schema UpdateSystemTemplateResponse#summary
   */
  readonly summary?: SystemTemplateSummary;

}

/**
 * @schema UploadEntityDefinitionsRequest
 */
export interface UploadEntityDefinitionsRequest {
  /**
   * @schema UploadEntityDefinitionsRequest#document
   */
  readonly document?: DefinitionDocument;

  /**
   * @schema UploadEntityDefinitionsRequest#syncWithPublicNamespace
   */
  readonly syncWithPublicNamespace?: boolean;

  /**
   * @schema UploadEntityDefinitionsRequest#deprecateExistingEntities
   */
  readonly deprecateExistingEntities?: boolean;

}

/**
 * @schema UploadEntityDefinitionsResponse
 */
export interface UploadEntityDefinitionsResponse {
  /**
   * @schema UploadEntityDefinitionsResponse#uploadId
   */
  readonly uploadId: string;

}

/**
 * @schema DefinitionDocument
 */
export interface DefinitionDocument {
  /**
   * @schema DefinitionDocument#language
   */
  readonly language: string;

  /**
   * @schema DefinitionDocument#text
   */
  readonly text: string;

}

/**
 * @schema FlowTemplateSummary
 */
export interface FlowTemplateSummary {
  /**
   * @schema FlowTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema FlowTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema FlowTemplateSummary#revisionNumber
   */
  readonly revisionNumber?: number;

  /**
   * @schema FlowTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value: string;

}

/**
 * @schema MetricsConfiguration
 */
export interface MetricsConfiguration {
  /**
   * @schema MetricsConfiguration#cloudMetricEnabled
   */
  readonly cloudMetricEnabled?: boolean;

  /**
   * @schema MetricsConfiguration#metricRuleRoleArn
   */
  readonly metricRuleRoleArn?: string;

}

/**
 * @schema SystemInstanceSummary
 */
export interface SystemInstanceSummary {
  /**
   * @schema SystemInstanceSummary#id
   */
  readonly id?: string;

  /**
   * @schema SystemInstanceSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema SystemInstanceSummary#status
   */
  readonly status?: string;

  /**
   * @schema SystemInstanceSummary#target
   */
  readonly target?: string;

  /**
   * @schema SystemInstanceSummary#greengrassGroupName
   */
  readonly greengrassGroupName?: string;

  /**
   * @schema SystemInstanceSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema SystemInstanceSummary#updatedAt
   */
  readonly updatedAt?: string;

  /**
   * @schema SystemInstanceSummary#greengrassGroupId
   */
  readonly greengrassGroupId?: string;

  /**
   * @schema SystemInstanceSummary#greengrassGroupVersionId
   */
  readonly greengrassGroupVersionId?: string;

}

/**
 * @schema SystemTemplateSummary
 */
export interface SystemTemplateSummary {
  /**
   * @schema SystemTemplateSummary#id
   */
  readonly id?: string;

  /**
   * @schema SystemTemplateSummary#arn
   */
  readonly arn?: string;

  /**
   * @schema SystemTemplateSummary#revisionNumber
   */
  readonly revisionNumber?: number;

  /**
   * @schema SystemTemplateSummary#createdAt
   */
  readonly createdAt?: string;

}

/**
 * @schema EntityDescription
 */
export interface EntityDescription {
  /**
   * @schema EntityDescription#id
   */
  readonly id?: string;

  /**
   * @schema EntityDescription#arn
   */
  readonly arn?: string;

  /**
   * @schema EntityDescription#type
   */
  readonly type?: string;

  /**
   * @schema EntityDescription#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EntityDescription#definition
   */
  readonly definition?: DefinitionDocument;

}

/**
 * @schema FlowTemplateDescription
 */
export interface FlowTemplateDescription {
  /**
   * @schema FlowTemplateDescription#summary
   */
  readonly summary?: FlowTemplateSummary;

  /**
   * @schema FlowTemplateDescription#definition
   */
  readonly definition?: DefinitionDocument;

  /**
   * @schema FlowTemplateDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

}

/**
 * @schema SystemInstanceDescription
 */
export interface SystemInstanceDescription {
  /**
   * @schema SystemInstanceDescription#summary
   */
  readonly summary?: SystemInstanceSummary;

  /**
   * @schema SystemInstanceDescription#definition
   */
  readonly definition?: DefinitionDocument;

  /**
   * @schema SystemInstanceDescription#s3BucketName
   */
  readonly s3BucketName?: string;

  /**
   * @schema SystemInstanceDescription#metricsConfiguration
   */
  readonly metricsConfiguration?: MetricsConfiguration;

  /**
   * @schema SystemInstanceDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

  /**
   * @schema SystemInstanceDescription#validatedDependencyRevisions
   */
  readonly validatedDependencyRevisions?: DependencyRevision[];

  /**
   * @schema SystemInstanceDescription#flowActionsRoleArn
   */
  readonly flowActionsRoleArn?: string;

}

/**
 * @schema SystemTemplateDescription
 */
export interface SystemTemplateDescription {
  /**
   * @schema SystemTemplateDescription#summary
   */
  readonly summary?: SystemTemplateSummary;

  /**
   * @schema SystemTemplateDescription#definition
   */
  readonly definition?: DefinitionDocument;

  /**
   * @schema SystemTemplateDescription#validatedNamespaceVersion
   */
  readonly validatedNamespaceVersion?: number;

}

/**
 * @schema FlowExecutionMessage
 */
export interface FlowExecutionMessage {
  /**
   * @schema FlowExecutionMessage#messageId
   */
  readonly messageId?: string;

  /**
   * @schema FlowExecutionMessage#eventType
   */
  readonly eventType?: string;

  /**
   * @schema FlowExecutionMessage#timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema FlowExecutionMessage#payload
   */
  readonly payload?: string;

}

/**
 * @schema EntityFilter
 */
export interface EntityFilter {
  /**
   * @schema EntityFilter#name
   */
  readonly name?: string;

  /**
   * @schema EntityFilter#value
   */
  readonly value?: string[];

}

/**
 * @schema FlowExecutionSummary
 */
export interface FlowExecutionSummary {
  /**
   * @schema FlowExecutionSummary#flowExecutionId
   */
  readonly flowExecutionId?: string;

  /**
   * @schema FlowExecutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema FlowExecutionSummary#systemInstanceId
   */
  readonly systemInstanceId?: string;

  /**
   * @schema FlowExecutionSummary#flowTemplateId
   */
  readonly flowTemplateId?: string;

  /**
   * @schema FlowExecutionSummary#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema FlowExecutionSummary#updatedAt
   */
  readonly updatedAt?: string;

}

/**
 * @schema FlowTemplateFilter
 */
export interface FlowTemplateFilter {
  /**
   * @schema FlowTemplateFilter#name
   */
  readonly name: string;

  /**
   * @schema FlowTemplateFilter#value
   */
  readonly value: string[];

}

/**
 * @schema SystemInstanceFilter
 */
export interface SystemInstanceFilter {
  /**
   * @schema SystemInstanceFilter#name
   */
  readonly name?: string;

  /**
   * @schema SystemInstanceFilter#value
   */
  readonly value?: string[];

}

/**
 * @schema SystemTemplateFilter
 */
export interface SystemTemplateFilter {
  /**
   * @schema SystemTemplateFilter#name
   */
  readonly name: string;

  /**
   * @schema SystemTemplateFilter#value
   */
  readonly value: string[];

}

/**
 * @schema Thing
 */
export interface Thing {
  /**
   * @schema Thing#thingArn
   */
  readonly thingArn?: string;

  /**
   * @schema Thing#thingName
   */
  readonly thingName?: string;

}

/**
 * @schema DependencyRevision
 */
export interface DependencyRevision {
  /**
   * @schema DependencyRevision#id
   */
  readonly id?: string;

  /**
   * @schema DependencyRevision#revisionNumber
   */
  readonly revisionNumber?: number;

}
