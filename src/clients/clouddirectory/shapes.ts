/**
 * @schema CloudDirectoryAddFacetToObjectRequest
 */
export interface CloudDirectoryAddFacetToObjectRequest {
  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#ObjectAttributeList
   */
  readonly objectAttributeList?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryAddFacetToObjectResponse
 */
export interface CloudDirectoryAddFacetToObjectResponse {
}

/**
 * @schema CloudDirectoryApplySchemaRequest
 */
export interface CloudDirectoryApplySchemaRequest {
  /**
   * @schema CloudDirectoryApplySchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn: string;

  /**
   * @schema CloudDirectoryApplySchemaRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryApplySchemaResponse
 */
export interface CloudDirectoryApplySchemaResponse {
  /**
   * @schema CloudDirectoryApplySchemaResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn?: string;

  /**
   * @schema CloudDirectoryApplySchemaResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * @schema CloudDirectoryAttachObjectRequest
 */
export interface CloudDirectoryAttachObjectRequest {
  /**
   * @schema CloudDirectoryAttachObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryAttachObjectRequest#ParentReference
   */
  readonly parentReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachObjectRequest#ChildReference
   */
  readonly childReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachObjectRequest#LinkName
   */
  readonly linkName: string;

}

/**
 * @schema CloudDirectoryAttachObjectResponse
 */
export interface CloudDirectoryAttachObjectResponse {
  /**
   * @schema CloudDirectoryAttachObjectResponse#AttachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryAttachPolicyRequest
 */
export interface CloudDirectoryAttachPolicyRequest {
  /**
   * @schema CloudDirectoryAttachPolicyRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryAttachPolicyRequest#PolicyReference
   */
  readonly policyReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachPolicyRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryAttachPolicyResponse
 */
export interface CloudDirectoryAttachPolicyResponse {
}

/**
 * @schema CloudDirectoryAttachToIndexRequest
 */
export interface CloudDirectoryAttachToIndexRequest {
  /**
   * @schema CloudDirectoryAttachToIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryAttachToIndexRequest#IndexReference
   */
  readonly indexReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachToIndexRequest#TargetReference
   */
  readonly targetReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryAttachToIndexResponse
 */
export interface CloudDirectoryAttachToIndexResponse {
  /**
   * @schema CloudDirectoryAttachToIndexResponse#AttachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryAttachTypedLinkRequest
 */
export interface CloudDirectoryAttachTypedLinkRequest {
  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#SourceObjectReference
   */
  readonly sourceObjectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#TargetObjectReference
   */
  readonly targetObjectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#TypedLinkFacet
   */
  readonly typedLinkFacet: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#Attributes
   */
  readonly attributes: CloudDirectoryAttributeNameAndValue[];

}

/**
 * @schema CloudDirectoryAttachTypedLinkResponse
 */
export interface CloudDirectoryAttachTypedLinkResponse {
  /**
   * @schema CloudDirectoryAttachTypedLinkResponse#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

}

/**
 * @schema CloudDirectoryBatchReadRequest
 */
export interface CloudDirectoryBatchReadRequest {
  /**
   * @schema CloudDirectoryBatchReadRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryBatchReadRequest#Operations
   */
  readonly operations: CloudDirectoryBatchReadOperation[];

  /**
   * @schema CloudDirectoryBatchReadRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryBatchReadResponse
 */
export interface CloudDirectoryBatchReadResponse {
  /**
   * @schema CloudDirectoryBatchReadResponse#Responses
   */
  readonly responses?: CloudDirectoryBatchReadOperationResponse[];

}

/**
 * @schema CloudDirectoryBatchWriteRequest
 */
export interface CloudDirectoryBatchWriteRequest {
  /**
   * @schema CloudDirectoryBatchWriteRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryBatchWriteRequest#Operations
   */
  readonly operations: CloudDirectoryBatchWriteOperation[];

}

/**
 * @schema CloudDirectoryBatchWriteResponse
 */
export interface CloudDirectoryBatchWriteResponse {
  /**
   * @schema CloudDirectoryBatchWriteResponse#Responses
   */
  readonly responses?: CloudDirectoryBatchWriteOperationResponse[];

}

/**
 * @schema CloudDirectoryCreateDirectoryRequest
 */
export interface CloudDirectoryCreateDirectoryRequest {
  /**
   * @schema CloudDirectoryCreateDirectoryRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryCreateDirectoryRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema CloudDirectoryCreateDirectoryResponse
 */
export interface CloudDirectoryCreateDirectoryResponse {
  /**
   * @schema CloudDirectoryCreateDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryCreateDirectoryResponse#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryCreateDirectoryResponse#ObjectIdentifier
   */
  readonly objectIdentifier: string;

  /**
   * @schema CloudDirectoryCreateDirectoryResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn: string;

}

/**
 * @schema CloudDirectoryCreateFacetRequest
 */
export interface CloudDirectoryCreateFacetRequest {
  /**
   * @schema CloudDirectoryCreateFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryCreateFacetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryCreateFacetRequest#Attributes
   */
  readonly attributes?: CloudDirectoryFacetAttribute[];

  /**
   * @schema CloudDirectoryCreateFacetRequest#ObjectType
   */
  readonly objectType?: string;

  /**
   * @schema CloudDirectoryCreateFacetRequest#FacetStyle
   */
  readonly facetStyle?: string;

}

/**
 * @schema CloudDirectoryCreateFacetResponse
 */
export interface CloudDirectoryCreateFacetResponse {
}

/**
 * @schema CloudDirectoryCreateIndexRequest
 */
export interface CloudDirectoryCreateIndexRequest {
  /**
   * @schema CloudDirectoryCreateIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryCreateIndexRequest#OrderedIndexedAttributeList
   */
  readonly orderedIndexedAttributeList: CloudDirectoryAttributeKey[];

  /**
   * @schema CloudDirectoryCreateIndexRequest#IsUnique
   */
  readonly isUnique: boolean;

  /**
   * @schema CloudDirectoryCreateIndexRequest#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryCreateIndexRequest#LinkName
   */
  readonly linkName?: string;

}

/**
 * @schema CloudDirectoryCreateIndexResponse
 */
export interface CloudDirectoryCreateIndexResponse {
  /**
   * @schema CloudDirectoryCreateIndexResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryCreateObjectRequest
 */
export interface CloudDirectoryCreateObjectRequest {
  /**
   * @schema CloudDirectoryCreateObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryCreateObjectRequest#SchemaFacets
   */
  readonly schemaFacets: CloudDirectorySchemaFacet[];

  /**
   * @schema CloudDirectoryCreateObjectRequest#ObjectAttributeList
   */
  readonly objectAttributeList?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryCreateObjectRequest#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryCreateObjectRequest#LinkName
   */
  readonly linkName?: string;

}

/**
 * @schema CloudDirectoryCreateObjectResponse
 */
export interface CloudDirectoryCreateObjectResponse {
  /**
   * @schema CloudDirectoryCreateObjectResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryCreateSchemaRequest
 */
export interface CloudDirectoryCreateSchemaRequest {
  /**
   * @schema CloudDirectoryCreateSchemaRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryCreateSchemaResponse
 */
export interface CloudDirectoryCreateSchemaResponse {
  /**
   * @schema CloudDirectoryCreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema CloudDirectoryCreateTypedLinkFacetRequest
 */
export interface CloudDirectoryCreateTypedLinkFacetRequest {
  /**
   * @schema CloudDirectoryCreateTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryCreateTypedLinkFacetRequest#Facet
   */
  readonly facet: CloudDirectoryTypedLinkFacet;

}

/**
 * @schema CloudDirectoryCreateTypedLinkFacetResponse
 */
export interface CloudDirectoryCreateTypedLinkFacetResponse {
}

/**
 * @schema CloudDirectoryDeleteDirectoryRequest
 */
export interface CloudDirectoryDeleteDirectoryRequest {
  /**
   * @schema CloudDirectoryDeleteDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryDeleteDirectoryResponse
 */
export interface CloudDirectoryDeleteDirectoryResponse {
  /**
   * @schema CloudDirectoryDeleteDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryDeleteFacetRequest
 */
export interface CloudDirectoryDeleteFacetRequest {
  /**
   * @schema CloudDirectoryDeleteFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryDeleteFacetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryDeleteFacetResponse
 */
export interface CloudDirectoryDeleteFacetResponse {
}

/**
 * @schema CloudDirectoryDeleteObjectRequest
 */
export interface CloudDirectoryDeleteObjectRequest {
  /**
   * @schema CloudDirectoryDeleteObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryDeleteObjectRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryDeleteObjectResponse
 */
export interface CloudDirectoryDeleteObjectResponse {
}

/**
 * @schema CloudDirectoryDeleteSchemaRequest
 */
export interface CloudDirectoryDeleteSchemaRequest {
  /**
   * @schema CloudDirectoryDeleteSchemaRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema CloudDirectoryDeleteSchemaResponse
 */
export interface CloudDirectoryDeleteSchemaResponse {
  /**
   * @schema CloudDirectoryDeleteSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema CloudDirectoryDeleteTypedLinkFacetRequest
 */
export interface CloudDirectoryDeleteTypedLinkFacetRequest {
  /**
   * @schema CloudDirectoryDeleteTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryDeleteTypedLinkFacetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryDeleteTypedLinkFacetResponse
 */
export interface CloudDirectoryDeleteTypedLinkFacetResponse {
}

/**
 * @schema CloudDirectoryDetachFromIndexRequest
 */
export interface CloudDirectoryDetachFromIndexRequest {
  /**
   * @schema CloudDirectoryDetachFromIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryDetachFromIndexRequest#IndexReference
   */
  readonly indexReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryDetachFromIndexRequest#TargetReference
   */
  readonly targetReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryDetachFromIndexResponse
 */
export interface CloudDirectoryDetachFromIndexResponse {
  /**
   * @schema CloudDirectoryDetachFromIndexResponse#DetachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryDetachObjectRequest
 */
export interface CloudDirectoryDetachObjectRequest {
  /**
   * @schema CloudDirectoryDetachObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryDetachObjectRequest#ParentReference
   */
  readonly parentReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryDetachObjectRequest#LinkName
   */
  readonly linkName: string;

}

/**
 * @schema CloudDirectoryDetachObjectResponse
 */
export interface CloudDirectoryDetachObjectResponse {
  /**
   * @schema CloudDirectoryDetachObjectResponse#DetachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryDetachPolicyRequest
 */
export interface CloudDirectoryDetachPolicyRequest {
  /**
   * @schema CloudDirectoryDetachPolicyRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryDetachPolicyRequest#PolicyReference
   */
  readonly policyReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryDetachPolicyRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryDetachPolicyResponse
 */
export interface CloudDirectoryDetachPolicyResponse {
}

/**
 * @schema CloudDirectoryDetachTypedLinkRequest
 */
export interface CloudDirectoryDetachTypedLinkRequest {
  /**
   * @schema CloudDirectoryDetachTypedLinkRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryDetachTypedLinkRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: CloudDirectoryTypedLinkSpecifier;

}

/**
 * @schema CloudDirectoryDisableDirectoryRequest
 */
export interface CloudDirectoryDisableDirectoryRequest {
  /**
   * @schema CloudDirectoryDisableDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryDisableDirectoryResponse
 */
export interface CloudDirectoryDisableDirectoryResponse {
  /**
   * @schema CloudDirectoryDisableDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryEnableDirectoryRequest
 */
export interface CloudDirectoryEnableDirectoryRequest {
  /**
   * @schema CloudDirectoryEnableDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryEnableDirectoryResponse
 */
export interface CloudDirectoryEnableDirectoryResponse {
  /**
   * @schema CloudDirectoryEnableDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryGetAppliedSchemaVersionRequest
 */
export interface CloudDirectoryGetAppliedSchemaVersionRequest {
  /**
   * @schema CloudDirectoryGetAppliedSchemaVersionRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema CloudDirectoryGetAppliedSchemaVersionResponse
 */
export interface CloudDirectoryGetAppliedSchemaVersionResponse {
  /**
   * @schema CloudDirectoryGetAppliedSchemaVersionResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn?: string;

}

/**
 * @schema CloudDirectoryGetDirectoryRequest
 */
export interface CloudDirectoryGetDirectoryRequest {
  /**
   * @schema CloudDirectoryGetDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema CloudDirectoryGetDirectoryResponse
 */
export interface CloudDirectoryGetDirectoryResponse {
  /**
   * @schema CloudDirectoryGetDirectoryResponse#Directory
   */
  readonly directory: CloudDirectoryDirectory;

}

/**
 * @schema CloudDirectoryGetFacetRequest
 */
export interface CloudDirectoryGetFacetRequest {
  /**
   * @schema CloudDirectoryGetFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryGetFacetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryGetFacetResponse
 */
export interface CloudDirectoryGetFacetResponse {
  /**
   * @schema CloudDirectoryGetFacetResponse#Facet
   */
  readonly facet?: CloudDirectoryFacet;

}

/**
 * @schema CloudDirectoryGetLinkAttributesRequest
 */
export interface CloudDirectoryGetLinkAttributesRequest {
  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#AttributeNames
   */
  readonly attributeNames: string[];

  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryGetLinkAttributesResponse
 */
export interface CloudDirectoryGetLinkAttributesResponse {
  /**
   * @schema CloudDirectoryGetLinkAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeKeyAndValue[];

}

/**
 * @schema CloudDirectoryGetObjectAttributesRequest
 */
export interface CloudDirectoryGetObjectAttributesRequest {
  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema CloudDirectoryGetObjectAttributesResponse
 */
export interface CloudDirectoryGetObjectAttributesResponse {
  /**
   * @schema CloudDirectoryGetObjectAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeKeyAndValue[];

}

/**
 * @schema CloudDirectoryGetObjectInformationRequest
 */
export interface CloudDirectoryGetObjectInformationRequest {
  /**
   * @schema CloudDirectoryGetObjectInformationRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryGetObjectInformationRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryGetObjectInformationRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryGetObjectInformationResponse
 */
export interface CloudDirectoryGetObjectInformationResponse {
  /**
   * @schema CloudDirectoryGetObjectInformationResponse#SchemaFacets
   */
  readonly schemaFacets?: CloudDirectorySchemaFacet[];

  /**
   * @schema CloudDirectoryGetObjectInformationResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryGetSchemaAsJsonRequest
 */
export interface CloudDirectoryGetSchemaAsJsonRequest {
  /**
   * @schema CloudDirectoryGetSchemaAsJsonRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema CloudDirectoryGetSchemaAsJsonResponse
 */
export interface CloudDirectoryGetSchemaAsJsonResponse {
  /**
   * @schema CloudDirectoryGetSchemaAsJsonResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryGetSchemaAsJsonResponse#Document
   */
  readonly document?: string;

}

/**
 * @schema CloudDirectoryGetTypedLinkFacetInformationRequest
 */
export interface CloudDirectoryGetTypedLinkFacetInformationRequest {
  /**
   * @schema CloudDirectoryGetTypedLinkFacetInformationRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryGetTypedLinkFacetInformationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryGetTypedLinkFacetInformationResponse
 */
export interface CloudDirectoryGetTypedLinkFacetInformationResponse {
  /**
   * @schema CloudDirectoryGetTypedLinkFacetInformationResponse#IdentityAttributeOrder
   */
  readonly identityAttributeOrder?: string[];

}

/**
 * @schema CloudDirectoryListAppliedSchemaArnsRequest
 */
export interface CloudDirectoryListAppliedSchemaArnsRequest {
  /**
   * @schema CloudDirectoryListAppliedSchemaArnsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListAppliedSchemaArnsRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryListAppliedSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListAppliedSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListAppliedSchemaArnsResponse
 */
export interface CloudDirectoryListAppliedSchemaArnsResponse {
  /**
   * @schema CloudDirectoryListAppliedSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema CloudDirectoryListAppliedSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListAttachedIndicesRequest
 */
export interface CloudDirectoryListAttachedIndicesRequest {
  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#TargetReference
   */
  readonly targetReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListAttachedIndicesResponse
 */
export interface CloudDirectoryListAttachedIndicesResponse {
  /**
   * @schema CloudDirectoryListAttachedIndicesResponse#IndexAttachments
   */
  readonly indexAttachments?: CloudDirectoryIndexAttachment[];

  /**
   * @schema CloudDirectoryListAttachedIndicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListDevelopmentSchemaArnsRequest
 */
export interface CloudDirectoryListDevelopmentSchemaArnsRequest {
  /**
   * @schema CloudDirectoryListDevelopmentSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListDevelopmentSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListDevelopmentSchemaArnsResponse
 */
export interface CloudDirectoryListDevelopmentSchemaArnsResponse {
  /**
   * @schema CloudDirectoryListDevelopmentSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema CloudDirectoryListDevelopmentSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListDirectoriesRequest
 */
export interface CloudDirectoryListDirectoriesRequest {
  /**
   * @schema CloudDirectoryListDirectoriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListDirectoriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListDirectoriesRequest#state
   */
  readonly state?: string;

}

/**
 * @schema CloudDirectoryListDirectoriesResponse
 */
export interface CloudDirectoryListDirectoriesResponse {
  /**
   * @schema CloudDirectoryListDirectoriesResponse#Directories
   */
  readonly directories: CloudDirectoryDirectory[];

  /**
   * @schema CloudDirectoryListDirectoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListFacetAttributesRequest
 */
export interface CloudDirectoryListFacetAttributesRequest {
  /**
   * @schema CloudDirectoryListFacetAttributesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryListFacetAttributesRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryListFacetAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListFacetAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListFacetAttributesResponse
 */
export interface CloudDirectoryListFacetAttributesResponse {
  /**
   * @schema CloudDirectoryListFacetAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryFacetAttribute[];

  /**
   * @schema CloudDirectoryListFacetAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListFacetNamesRequest
 */
export interface CloudDirectoryListFacetNamesRequest {
  /**
   * @schema CloudDirectoryListFacetNamesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryListFacetNamesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListFacetNamesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListFacetNamesResponse
 */
export interface CloudDirectoryListFacetNamesResponse {
  /**
   * @schema CloudDirectoryListFacetNamesResponse#FacetNames
   */
  readonly facetNames?: string[];

  /**
   * @schema CloudDirectoryListFacetNamesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListIncomingTypedLinksRequest
 */
export interface CloudDirectoryListIncomingTypedLinksRequest {
  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: CloudDirectoryTypedLinkAttributeRange[];

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#FilterTypedLink
   */
  readonly filterTypedLink?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListIncomingTypedLinksResponse
 */
export interface CloudDirectoryListIncomingTypedLinksResponse {
  /**
   * @schema CloudDirectoryListIncomingTypedLinksResponse#LinkSpecifiers
   */
  readonly linkSpecifiers?: CloudDirectoryTypedLinkSpecifier[];

  /**
   * @schema CloudDirectoryListIncomingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListIndexRequest
 */
export interface CloudDirectoryListIndexRequest {
  /**
   * @schema CloudDirectoryListIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListIndexRequest#RangesOnIndexedValues
   */
  readonly rangesOnIndexedValues?: CloudDirectoryObjectAttributeRange[];

  /**
   * @schema CloudDirectoryListIndexRequest#IndexReference
   */
  readonly indexReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListIndexRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListIndexRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListIndexRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListIndexResponse
 */
export interface CloudDirectoryListIndexResponse {
  /**
   * @schema CloudDirectoryListIndexResponse#IndexAttachments
   */
  readonly indexAttachments?: CloudDirectoryIndexAttachment[];

  /**
   * @schema CloudDirectoryListIndexResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListManagedSchemaArnsRequest
 */
export interface CloudDirectoryListManagedSchemaArnsRequest {
  /**
   * @schema CloudDirectoryListManagedSchemaArnsRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryListManagedSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListManagedSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListManagedSchemaArnsResponse
 */
export interface CloudDirectoryListManagedSchemaArnsResponse {
  /**
   * @schema CloudDirectoryListManagedSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema CloudDirectoryListManagedSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListObjectAttributesRequest
 */
export interface CloudDirectoryListObjectAttributesRequest {
  /**
   * @schema CloudDirectoryListObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListObjectAttributesRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListObjectAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListObjectAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListObjectAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema CloudDirectoryListObjectAttributesRequest#FacetFilter
   */
  readonly facetFilter?: CloudDirectorySchemaFacet;

}

/**
 * @schema CloudDirectoryListObjectAttributesResponse
 */
export interface CloudDirectoryListObjectAttributesResponse {
  /**
   * @schema CloudDirectoryListObjectAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryListObjectAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListObjectChildrenRequest
 */
export interface CloudDirectoryListObjectChildrenRequest {
  /**
   * @schema CloudDirectoryListObjectChildrenRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListObjectChildrenRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListObjectChildrenRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListObjectChildrenRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListObjectChildrenRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListObjectChildrenResponse
 */
export interface CloudDirectoryListObjectChildrenResponse {
  /**
   * @schema CloudDirectoryListObjectChildrenResponse#Children
   */
  readonly children?: { [key: string]: string };

  /**
   * @schema CloudDirectoryListObjectChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListObjectParentPathsRequest
 */
export interface CloudDirectoryListObjectParentPathsRequest {
  /**
   * @schema CloudDirectoryListObjectParentPathsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListObjectParentPathsRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListObjectParentPathsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListObjectParentPathsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListObjectParentPathsResponse
 */
export interface CloudDirectoryListObjectParentPathsResponse {
  /**
   * @schema CloudDirectoryListObjectParentPathsResponse#PathToObjectIdentifiersList
   */
  readonly pathToObjectIdentifiersList?: CloudDirectoryPathToObjectIdentifiers[];

  /**
   * @schema CloudDirectoryListObjectParentPathsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListObjectParentsRequest
 */
export interface CloudDirectoryListObjectParentsRequest {
  /**
   * @schema CloudDirectoryListObjectParentsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListObjectParentsRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListObjectParentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListObjectParentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListObjectParentsRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema CloudDirectoryListObjectParentsRequest#IncludeAllLinksToEachParent
   */
  readonly includeAllLinksToEachParent?: boolean;

}

/**
 * @schema CloudDirectoryListObjectParentsResponse
 */
export interface CloudDirectoryListObjectParentsResponse {
  /**
   * @schema CloudDirectoryListObjectParentsResponse#Parents
   */
  readonly parents?: { [key: string]: string };

  /**
   * @schema CloudDirectoryListObjectParentsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListObjectParentsResponse#ParentLinks
   */
  readonly parentLinks?: CloudDirectoryObjectIdentifierAndLinkNameTuple[];

}

/**
 * @schema CloudDirectoryListObjectPoliciesRequest
 */
export interface CloudDirectoryListObjectPoliciesRequest {
  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListObjectPoliciesResponse
 */
export interface CloudDirectoryListObjectPoliciesResponse {
  /**
   * @schema CloudDirectoryListObjectPoliciesResponse#AttachedPolicyIds
   */
  readonly attachedPolicyIds?: string[];

  /**
   * @schema CloudDirectoryListObjectPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListOutgoingTypedLinksRequest
 */
export interface CloudDirectoryListOutgoingTypedLinksRequest {
  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: CloudDirectoryTypedLinkAttributeRange[];

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#FilterTypedLink
   */
  readonly filterTypedLink?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListOutgoingTypedLinksResponse
 */
export interface CloudDirectoryListOutgoingTypedLinksResponse {
  /**
   * @schema CloudDirectoryListOutgoingTypedLinksResponse#TypedLinkSpecifiers
   */
  readonly typedLinkSpecifiers?: CloudDirectoryTypedLinkSpecifier[];

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListPolicyAttachmentsRequest
 */
export interface CloudDirectoryListPolicyAttachmentsRequest {
  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#PolicyReference
   */
  readonly policyReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema CloudDirectoryListPolicyAttachmentsResponse
 */
export interface CloudDirectoryListPolicyAttachmentsResponse {
  /**
   * @schema CloudDirectoryListPolicyAttachmentsResponse#ObjectIdentifiers
   */
  readonly objectIdentifiers?: string[];

  /**
   * @schema CloudDirectoryListPolicyAttachmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListPublishedSchemaArnsRequest
 */
export interface CloudDirectoryListPublishedSchemaArnsRequest {
  /**
   * @schema CloudDirectoryListPublishedSchemaArnsRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryListPublishedSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListPublishedSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListPublishedSchemaArnsResponse
 */
export interface CloudDirectoryListPublishedSchemaArnsResponse {
  /**
   * @schema CloudDirectoryListPublishedSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema CloudDirectoryListPublishedSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListTagsForResourceRequest
 */
export interface CloudDirectoryListTagsForResourceRequest {
  /**
   * @schema CloudDirectoryListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CloudDirectoryListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListTagsForResourceResponse
 */
export interface CloudDirectoryListTagsForResourceResponse {
  /**
   * @schema CloudDirectoryListTagsForResourceResponse#Tags
   */
  readonly tags?: CloudDirectoryTag[];

  /**
   * @schema CloudDirectoryListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListTypedLinkFacetAttributesRequest
 */
export interface CloudDirectoryListTypedLinkFacetAttributesRequest {
  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListTypedLinkFacetAttributesResponse
 */
export interface CloudDirectoryListTypedLinkFacetAttributesResponse {
  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryTypedLinkAttributeDefinition[];

  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryListTypedLinkFacetNamesRequest
 */
export interface CloudDirectoryListTypedLinkFacetNamesRequest {
  /**
   * @schema CloudDirectoryListTypedLinkFacetNamesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryListTypedLinkFacetNamesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryListTypedLinkFacetNamesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryListTypedLinkFacetNamesResponse
 */
export interface CloudDirectoryListTypedLinkFacetNamesResponse {
  /**
   * @schema CloudDirectoryListTypedLinkFacetNamesResponse#FacetNames
   */
  readonly facetNames?: string[];

  /**
   * @schema CloudDirectoryListTypedLinkFacetNamesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryLookupPolicyRequest
 */
export interface CloudDirectoryLookupPolicyRequest {
  /**
   * @schema CloudDirectoryLookupPolicyRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryLookupPolicyRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryLookupPolicyRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryLookupPolicyRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryLookupPolicyResponse
 */
export interface CloudDirectoryLookupPolicyResponse {
  /**
   * @schema CloudDirectoryLookupPolicyResponse#PolicyToPathList
   */
  readonly policyToPathList?: CloudDirectoryPolicyToPath[];

  /**
   * @schema CloudDirectoryLookupPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryPublishSchemaRequest
 */
export interface CloudDirectoryPublishSchemaRequest {
  /**
   * @schema CloudDirectoryPublishSchemaRequest#DevelopmentSchemaArn
   */
  readonly developmentSchemaArn: string;

  /**
   * @schema CloudDirectoryPublishSchemaRequest#Version
   */
  readonly version: string;

  /**
   * @schema CloudDirectoryPublishSchemaRequest#MinorVersion
   */
  readonly minorVersion?: string;

  /**
   * @schema CloudDirectoryPublishSchemaRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema CloudDirectoryPublishSchemaResponse
 */
export interface CloudDirectoryPublishSchemaResponse {
  /**
   * @schema CloudDirectoryPublishSchemaResponse#PublishedSchemaArn
   */
  readonly publishedSchemaArn?: string;

}

/**
 * @schema CloudDirectoryPutSchemaFromJsonRequest
 */
export interface CloudDirectoryPutSchemaFromJsonRequest {
  /**
   * @schema CloudDirectoryPutSchemaFromJsonRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryPutSchemaFromJsonRequest#Document
   */
  readonly document: string;

}

/**
 * @schema CloudDirectoryPutSchemaFromJsonResponse
 */
export interface CloudDirectoryPutSchemaFromJsonResponse {
  /**
   * @schema CloudDirectoryPutSchemaFromJsonResponse#Arn
   */
  readonly arn?: string;

}

/**
 * @schema CloudDirectoryRemoveFacetFromObjectRequest
 */
export interface CloudDirectoryRemoveFacetFromObjectRequest {
  /**
   * @schema CloudDirectoryRemoveFacetFromObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryRemoveFacetFromObjectRequest#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryRemoveFacetFromObjectRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryRemoveFacetFromObjectResponse
 */
export interface CloudDirectoryRemoveFacetFromObjectResponse {
}

/**
 * @schema CloudDirectoryTagResourceRequest
 */
export interface CloudDirectoryTagResourceRequest {
  /**
   * @schema CloudDirectoryTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CloudDirectoryTagResourceRequest#Tags
   */
  readonly tags: CloudDirectoryTag[];

}

/**
 * @schema CloudDirectoryTagResourceResponse
 */
export interface CloudDirectoryTagResourceResponse {
}

/**
 * @schema CloudDirectoryUntagResourceRequest
 */
export interface CloudDirectoryUntagResourceRequest {
  /**
   * @schema CloudDirectoryUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema CloudDirectoryUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema CloudDirectoryUntagResourceResponse
 */
export interface CloudDirectoryUntagResourceResponse {
}

/**
 * @schema CloudDirectoryUpdateFacetRequest
 */
export interface CloudDirectoryUpdateFacetRequest {
  /**
   * @schema CloudDirectoryUpdateFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryUpdateFacetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryUpdateFacetRequest#AttributeUpdates
   */
  readonly attributeUpdates?: CloudDirectoryFacetAttributeUpdate[];

  /**
   * @schema CloudDirectoryUpdateFacetRequest#ObjectType
   */
  readonly objectType?: string;

}

/**
 * @schema CloudDirectoryUpdateFacetResponse
 */
export interface CloudDirectoryUpdateFacetResponse {
}

/**
 * @schema CloudDirectoryUpdateLinkAttributesRequest
 */
export interface CloudDirectoryUpdateLinkAttributesRequest {
  /**
   * @schema CloudDirectoryUpdateLinkAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryUpdateLinkAttributesRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryUpdateLinkAttributesRequest#AttributeUpdates
   */
  readonly attributeUpdates: CloudDirectoryLinkAttributeUpdate[];

}

/**
 * @schema CloudDirectoryUpdateLinkAttributesResponse
 */
export interface CloudDirectoryUpdateLinkAttributesResponse {
}

/**
 * @schema CloudDirectoryUpdateObjectAttributesRequest
 */
export interface CloudDirectoryUpdateObjectAttributesRequest {
  /**
   * @schema CloudDirectoryUpdateObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryUpdateObjectAttributesRequest#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryUpdateObjectAttributesRequest#AttributeUpdates
   */
  readonly attributeUpdates: CloudDirectoryObjectAttributeUpdate[];

}

/**
 * @schema CloudDirectoryUpdateObjectAttributesResponse
 */
export interface CloudDirectoryUpdateObjectAttributesResponse {
  /**
   * @schema CloudDirectoryUpdateObjectAttributesResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryUpdateSchemaRequest
 */
export interface CloudDirectoryUpdateSchemaRequest {
  /**
   * @schema CloudDirectoryUpdateSchemaRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryUpdateSchemaRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryUpdateSchemaResponse
 */
export interface CloudDirectoryUpdateSchemaResponse {
  /**
   * @schema CloudDirectoryUpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema CloudDirectoryUpdateTypedLinkFacetRequest
 */
export interface CloudDirectoryUpdateTypedLinkFacetRequest {
  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#AttributeUpdates
   */
  readonly attributeUpdates: CloudDirectoryTypedLinkFacetAttributeUpdate[];

  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#IdentityAttributeOrder
   */
  readonly identityAttributeOrder: string[];

}

/**
 * @schema CloudDirectoryUpdateTypedLinkFacetResponse
 */
export interface CloudDirectoryUpdateTypedLinkFacetResponse {
}

/**
 * @schema CloudDirectoryUpgradeAppliedSchemaRequest
 */
export interface CloudDirectoryUpgradeAppliedSchemaRequest {
  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn: string;

  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CloudDirectoryUpgradeAppliedSchemaResponse
 */
export interface CloudDirectoryUpgradeAppliedSchemaResponse {
  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaResponse#UpgradedSchemaArn
   */
  readonly upgradedSchemaArn?: string;

  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * @schema CloudDirectoryUpgradePublishedSchemaRequest
 */
export interface CloudDirectoryUpgradePublishedSchemaRequest {
  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#DevelopmentSchemaArn
   */
  readonly developmentSchemaArn: string;

  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn: string;

  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#MinorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema CloudDirectoryUpgradePublishedSchemaResponse
 */
export interface CloudDirectoryUpgradePublishedSchemaResponse {
  /**
   * @schema CloudDirectoryUpgradePublishedSchemaResponse#UpgradedSchemaArn
   */
  readonly upgradedSchemaArn?: string;

}

/**
 * @schema CloudDirectorySchemaFacet
 */
export interface CloudDirectorySchemaFacet {
  /**
   * @schema CloudDirectorySchemaFacet#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectorySchemaFacet#FacetName
   */
  readonly facetName?: string;

}

/**
 * @schema CloudDirectoryAttributeKeyAndValue
 */
export interface CloudDirectoryAttributeKeyAndValue {
  /**
   * @schema CloudDirectoryAttributeKeyAndValue#Key
   */
  readonly key: CloudDirectoryAttributeKey;

  /**
   * @schema CloudDirectoryAttributeKeyAndValue#Value
   */
  readonly value: CloudDirectoryTypedAttributeValue;

}

/**
 * @schema CloudDirectoryObjectReference
 */
export interface CloudDirectoryObjectReference {
  /**
   * @schema CloudDirectoryObjectReference#Selector
   */
  readonly selector?: string;

}

/**
 * @schema CloudDirectoryTypedLinkSchemaAndFacetName
 */
export interface CloudDirectoryTypedLinkSchemaAndFacetName {
  /**
   * @schema CloudDirectoryTypedLinkSchemaAndFacetName#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryTypedLinkSchemaAndFacetName#TypedLinkName
   */
  readonly typedLinkName: string;

}

/**
 * @schema CloudDirectoryAttributeNameAndValue
 */
export interface CloudDirectoryAttributeNameAndValue {
  /**
   * @schema CloudDirectoryAttributeNameAndValue#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema CloudDirectoryAttributeNameAndValue#Value
   */
  readonly value: CloudDirectoryTypedAttributeValue;

}

/**
 * @schema CloudDirectoryTypedLinkSpecifier
 */
export interface CloudDirectoryTypedLinkSpecifier {
  /**
   * @schema CloudDirectoryTypedLinkSpecifier#TypedLinkFacet
   */
  readonly typedLinkFacet: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryTypedLinkSpecifier#SourceObjectReference
   */
  readonly sourceObjectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryTypedLinkSpecifier#TargetObjectReference
   */
  readonly targetObjectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryTypedLinkSpecifier#IdentityAttributeValues
   */
  readonly identityAttributeValues: CloudDirectoryAttributeNameAndValue[];

}

/**
 * @schema CloudDirectoryBatchReadOperation
 */
export interface CloudDirectoryBatchReadOperation {
  /**
   * @schema CloudDirectoryBatchReadOperation#ListObjectAttributes
   */
  readonly listObjectAttributes?: CloudDirectoryBatchListObjectAttributes;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListObjectChildren
   */
  readonly listObjectChildren?: CloudDirectoryBatchListObjectChildren;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListAttachedIndices
   */
  readonly listAttachedIndices?: CloudDirectoryBatchListAttachedIndices;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListObjectParentPaths
   */
  readonly listObjectParentPaths?: CloudDirectoryBatchListObjectParentPaths;

  /**
   * @schema CloudDirectoryBatchReadOperation#FetchObjectInformation
   */
  readonly fetchObjectInformation?: CloudDirectoryBatchGetObjectInformation;

  /**
   * @schema CloudDirectoryBatchReadOperation#FetchObjectAttributes
   */
  readonly fetchObjectAttributes?: CloudDirectoryBatchGetObjectAttributes;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListObjectParents
   */
  readonly listObjectParents?: CloudDirectoryBatchListObjectParents;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListObjectPolicies
   */
  readonly listObjectPolicies?: CloudDirectoryBatchListObjectPolicies;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListPolicyAttachments
   */
  readonly listPolicyAttachments?: CloudDirectoryBatchListPolicyAttachments;

  /**
   * @schema CloudDirectoryBatchReadOperation#LookupPolicy
   */
  readonly lookupPolicy?: CloudDirectoryBatchLookupPolicy;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListIndex
   */
  readonly listIndex?: CloudDirectoryBatchListIndex;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListOutgoingTypedLinks
   */
  readonly listOutgoingTypedLinks?: CloudDirectoryBatchListOutgoingTypedLinks;

  /**
   * @schema CloudDirectoryBatchReadOperation#ListIncomingTypedLinks
   */
  readonly listIncomingTypedLinks?: CloudDirectoryBatchListIncomingTypedLinks;

  /**
   * @schema CloudDirectoryBatchReadOperation#FetchLinkAttributes
   */
  readonly fetchLinkAttributes?: CloudDirectoryBatchGetLinkAttributes;

}

/**
 * @schema CloudDirectoryBatchReadOperationResponse
 */
export interface CloudDirectoryBatchReadOperationResponse {
  /**
   * @schema CloudDirectoryBatchReadOperationResponse#SuccessfulResponse
   */
  readonly successfulResponse?: CloudDirectoryBatchReadSuccessfulResponse;

  /**
   * @schema CloudDirectoryBatchReadOperationResponse#ExceptionResponse
   */
  readonly exceptionResponse?: CloudDirectoryBatchReadException;

}

/**
 * @schema CloudDirectoryBatchWriteOperation
 */
export interface CloudDirectoryBatchWriteOperation {
  /**
   * @schema CloudDirectoryBatchWriteOperation#CreateObject
   */
  readonly createObject?: CloudDirectoryBatchCreateObject;

  /**
   * @schema CloudDirectoryBatchWriteOperation#AttachObject
   */
  readonly attachObject?: CloudDirectoryBatchAttachObject;

  /**
   * @schema CloudDirectoryBatchWriteOperation#DetachObject
   */
  readonly detachObject?: CloudDirectoryBatchDetachObject;

  /**
   * @schema CloudDirectoryBatchWriteOperation#UpdateObjectAttributes
   */
  readonly updateObjectAttributes?: CloudDirectoryBatchUpdateObjectAttributes;

  /**
   * @schema CloudDirectoryBatchWriteOperation#DeleteObject
   */
  readonly deleteObject?: CloudDirectoryBatchDeleteObject;

  /**
   * @schema CloudDirectoryBatchWriteOperation#AddFacetToObject
   */
  readonly addFacetToObject?: CloudDirectoryBatchAddFacetToObject;

  /**
   * @schema CloudDirectoryBatchWriteOperation#RemoveFacetFromObject
   */
  readonly removeFacetFromObject?: CloudDirectoryBatchRemoveFacetFromObject;

  /**
   * @schema CloudDirectoryBatchWriteOperation#AttachPolicy
   */
  readonly attachPolicy?: CloudDirectoryBatchAttachPolicy;

  /**
   * @schema CloudDirectoryBatchWriteOperation#DetachPolicy
   */
  readonly detachPolicy?: CloudDirectoryBatchDetachPolicy;

  /**
   * @schema CloudDirectoryBatchWriteOperation#CreateIndex
   */
  readonly createIndex?: CloudDirectoryBatchCreateIndex;

  /**
   * @schema CloudDirectoryBatchWriteOperation#AttachToIndex
   */
  readonly attachToIndex?: CloudDirectoryBatchAttachToIndex;

  /**
   * @schema CloudDirectoryBatchWriteOperation#DetachFromIndex
   */
  readonly detachFromIndex?: CloudDirectoryBatchDetachFromIndex;

  /**
   * @schema CloudDirectoryBatchWriteOperation#AttachTypedLink
   */
  readonly attachTypedLink?: CloudDirectoryBatchAttachTypedLink;

  /**
   * @schema CloudDirectoryBatchWriteOperation#DetachTypedLink
   */
  readonly detachTypedLink?: CloudDirectoryBatchDetachTypedLink;

  /**
   * @schema CloudDirectoryBatchWriteOperation#UpdateLinkAttributes
   */
  readonly updateLinkAttributes?: CloudDirectoryBatchUpdateLinkAttributes;

}

/**
 * @schema CloudDirectoryBatchWriteOperationResponse
 */
export interface CloudDirectoryBatchWriteOperationResponse {
  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#CreateObject
   */
  readonly createObject?: CloudDirectoryBatchCreateObjectResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#AttachObject
   */
  readonly attachObject?: CloudDirectoryBatchAttachObjectResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#DetachObject
   */
  readonly detachObject?: CloudDirectoryBatchDetachObjectResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#UpdateObjectAttributes
   */
  readonly updateObjectAttributes?: CloudDirectoryBatchUpdateObjectAttributesResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#DeleteObject
   */
  readonly deleteObject?: CloudDirectoryBatchDeleteObjectResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#AddFacetToObject
   */
  readonly addFacetToObject?: CloudDirectoryBatchAddFacetToObjectResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#RemoveFacetFromObject
   */
  readonly removeFacetFromObject?: CloudDirectoryBatchRemoveFacetFromObjectResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#AttachPolicy
   */
  readonly attachPolicy?: CloudDirectoryBatchAttachPolicyResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#DetachPolicy
   */
  readonly detachPolicy?: CloudDirectoryBatchDetachPolicyResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#CreateIndex
   */
  readonly createIndex?: CloudDirectoryBatchCreateIndexResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#AttachToIndex
   */
  readonly attachToIndex?: CloudDirectoryBatchAttachToIndexResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#DetachFromIndex
   */
  readonly detachFromIndex?: CloudDirectoryBatchDetachFromIndexResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#AttachTypedLink
   */
  readonly attachTypedLink?: CloudDirectoryBatchAttachTypedLinkResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#DetachTypedLink
   */
  readonly detachTypedLink?: CloudDirectoryBatchDetachTypedLinkResponse;

  /**
   * @schema CloudDirectoryBatchWriteOperationResponse#UpdateLinkAttributes
   */
  readonly updateLinkAttributes?: CloudDirectoryBatchUpdateLinkAttributesResponse;

}

/**
 * @schema CloudDirectoryFacetAttribute
 */
export interface CloudDirectoryFacetAttribute {
  /**
   * @schema CloudDirectoryFacetAttribute#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryFacetAttribute#AttributeDefinition
   */
  readonly attributeDefinition?: CloudDirectoryFacetAttributeDefinition;

  /**
   * @schema CloudDirectoryFacetAttribute#AttributeReference
   */
  readonly attributeReference?: CloudDirectoryFacetAttributeReference;

  /**
   * @schema CloudDirectoryFacetAttribute#RequiredBehavior
   */
  readonly requiredBehavior?: string;

}

/**
 * @schema CloudDirectoryAttributeKey
 */
export interface CloudDirectoryAttributeKey {
  /**
   * @schema CloudDirectoryAttributeKey#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CloudDirectoryAttributeKey#FacetName
   */
  readonly facetName: string;

  /**
   * @schema CloudDirectoryAttributeKey#Name
   */
  readonly name: string;

}

/**
 * @schema CloudDirectoryTypedLinkFacet
 */
export interface CloudDirectoryTypedLinkFacet {
  /**
   * @schema CloudDirectoryTypedLinkFacet#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryTypedLinkFacet#Attributes
   */
  readonly attributes: CloudDirectoryTypedLinkAttributeDefinition[];

  /**
   * @schema CloudDirectoryTypedLinkFacet#IdentityAttributeOrder
   */
  readonly identityAttributeOrder: string[];

}

/**
 * @schema CloudDirectoryDirectory
 */
export interface CloudDirectoryDirectory {
  /**
   * @schema CloudDirectoryDirectory#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryDirectory#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryDirectory#State
   */
  readonly state?: string;

  /**
   * @schema CloudDirectoryDirectory#CreationDateTime
   */
  readonly creationDateTime?: string;

}

/**
 * @schema CloudDirectoryFacet
 */
export interface CloudDirectoryFacet {
  /**
   * @schema CloudDirectoryFacet#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryFacet#ObjectType
   */
  readonly objectType?: string;

  /**
   * @schema CloudDirectoryFacet#FacetStyle
   */
  readonly facetStyle?: string;

}

/**
 * @schema CloudDirectoryIndexAttachment
 */
export interface CloudDirectoryIndexAttachment {
  /**
   * @schema CloudDirectoryIndexAttachment#IndexedAttributes
   */
  readonly indexedAttributes?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryIndexAttachment#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryTypedLinkAttributeRange
 */
export interface CloudDirectoryTypedLinkAttributeRange {
  /**
   * @schema CloudDirectoryTypedLinkAttributeRange#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema CloudDirectoryTypedLinkAttributeRange#Range
   */
  readonly range: CloudDirectoryTypedAttributeValueRange;

}

/**
 * @schema CloudDirectoryObjectAttributeRange
 */
export interface CloudDirectoryObjectAttributeRange {
  /**
   * @schema CloudDirectoryObjectAttributeRange#AttributeKey
   */
  readonly attributeKey?: CloudDirectoryAttributeKey;

  /**
   * @schema CloudDirectoryObjectAttributeRange#Range
   */
  readonly range?: CloudDirectoryTypedAttributeValueRange;

}

/**
 * @schema CloudDirectoryPathToObjectIdentifiers
 */
export interface CloudDirectoryPathToObjectIdentifiers {
  /**
   * @schema CloudDirectoryPathToObjectIdentifiers#Path
   */
  readonly path?: string;

  /**
   * @schema CloudDirectoryPathToObjectIdentifiers#ObjectIdentifiers
   */
  readonly objectIdentifiers?: string[];

}

/**
 * @schema CloudDirectoryObjectIdentifierAndLinkNameTuple
 */
export interface CloudDirectoryObjectIdentifierAndLinkNameTuple {
  /**
   * @schema CloudDirectoryObjectIdentifierAndLinkNameTuple#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

  /**
   * @schema CloudDirectoryObjectIdentifierAndLinkNameTuple#LinkName
   */
  readonly linkName?: string;

}

/**
 * @schema CloudDirectoryTag
 */
export interface CloudDirectoryTag {
  /**
   * @schema CloudDirectoryTag#Key
   */
  readonly key?: string;

  /**
   * @schema CloudDirectoryTag#Value
   */
  readonly value?: string;

}

/**
 * @schema CloudDirectoryTypedLinkAttributeDefinition
 */
export interface CloudDirectoryTypedLinkAttributeDefinition {
  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#Name
   */
  readonly name: string;

  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#Type
   */
  readonly type: string;

  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#DefaultValue
   */
  readonly defaultValue?: CloudDirectoryTypedAttributeValue;

  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#IsImmutable
   */
  readonly isImmutable?: boolean;

  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#Rules
   */
  readonly rules?: { [key: string]: CloudDirectoryRule };

  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#RequiredBehavior
   */
  readonly requiredBehavior: string;

}

/**
 * @schema CloudDirectoryPolicyToPath
 */
export interface CloudDirectoryPolicyToPath {
  /**
   * @schema CloudDirectoryPolicyToPath#Path
   */
  readonly path?: string;

  /**
   * @schema CloudDirectoryPolicyToPath#Policies
   */
  readonly policies?: CloudDirectoryPolicyAttachment[];

}

/**
 * @schema CloudDirectoryFacetAttributeUpdate
 */
export interface CloudDirectoryFacetAttributeUpdate {
  /**
   * @schema CloudDirectoryFacetAttributeUpdate#Attribute
   */
  readonly attribute?: CloudDirectoryFacetAttribute;

  /**
   * @schema CloudDirectoryFacetAttributeUpdate#Action
   */
  readonly action?: string;

}

/**
 * @schema CloudDirectoryLinkAttributeUpdate
 */
export interface CloudDirectoryLinkAttributeUpdate {
  /**
   * @schema CloudDirectoryLinkAttributeUpdate#AttributeKey
   */
  readonly attributeKey?: CloudDirectoryAttributeKey;

  /**
   * @schema CloudDirectoryLinkAttributeUpdate#AttributeAction
   */
  readonly attributeAction?: CloudDirectoryLinkAttributeAction;

}

/**
 * @schema CloudDirectoryObjectAttributeUpdate
 */
export interface CloudDirectoryObjectAttributeUpdate {
  /**
   * @schema CloudDirectoryObjectAttributeUpdate#ObjectAttributeKey
   */
  readonly objectAttributeKey?: CloudDirectoryAttributeKey;

  /**
   * @schema CloudDirectoryObjectAttributeUpdate#ObjectAttributeAction
   */
  readonly objectAttributeAction?: CloudDirectoryObjectAttributeAction;

}

/**
 * @schema CloudDirectoryTypedLinkFacetAttributeUpdate
 */
export interface CloudDirectoryTypedLinkFacetAttributeUpdate {
  /**
   * @schema CloudDirectoryTypedLinkFacetAttributeUpdate#Attribute
   */
  readonly attribute: CloudDirectoryTypedLinkAttributeDefinition;

  /**
   * @schema CloudDirectoryTypedLinkFacetAttributeUpdate#Action
   */
  readonly action: string;

}

/**
 * @schema CloudDirectoryTypedAttributeValue
 */
export interface CloudDirectoryTypedAttributeValue {
  /**
   * @schema CloudDirectoryTypedAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema CloudDirectoryTypedAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

  /**
   * @schema CloudDirectoryTypedAttributeValue#BooleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema CloudDirectoryTypedAttributeValue#NumberValue
   */
  readonly numberValue?: string;

  /**
   * @schema CloudDirectoryTypedAttributeValue#DatetimeValue
   */
  readonly datetimeValue?: string;

}

/**
 * @schema CloudDirectoryBatchListObjectAttributes
 */
export interface CloudDirectoryBatchListObjectAttributes {
  /**
   * @schema CloudDirectoryBatchListObjectAttributes#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListObjectAttributes#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListObjectAttributes#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryBatchListObjectAttributes#FacetFilter
   */
  readonly facetFilter?: CloudDirectorySchemaFacet;

}

/**
 * @schema CloudDirectoryBatchListObjectChildren
 */
export interface CloudDirectoryBatchListObjectChildren {
  /**
   * @schema CloudDirectoryBatchListObjectChildren#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListObjectChildren#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListObjectChildren#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchListAttachedIndices
 */
export interface CloudDirectoryBatchListAttachedIndices {
  /**
   * @schema CloudDirectoryBatchListAttachedIndices#TargetReference
   */
  readonly targetReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListAttachedIndices#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListAttachedIndices#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchListObjectParentPaths
 */
export interface CloudDirectoryBatchListObjectParentPaths {
  /**
   * @schema CloudDirectoryBatchListObjectParentPaths#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListObjectParentPaths#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListObjectParentPaths#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchGetObjectInformation
 */
export interface CloudDirectoryBatchGetObjectInformation {
  /**
   * @schema CloudDirectoryBatchGetObjectInformation#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchGetObjectAttributes
 */
export interface CloudDirectoryBatchGetObjectAttributes {
  /**
   * @schema CloudDirectoryBatchGetObjectAttributes#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchGetObjectAttributes#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryBatchGetObjectAttributes#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema CloudDirectoryBatchListObjectParents
 */
export interface CloudDirectoryBatchListObjectParents {
  /**
   * @schema CloudDirectoryBatchListObjectParents#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListObjectParents#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListObjectParents#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchListObjectPolicies
 */
export interface CloudDirectoryBatchListObjectPolicies {
  /**
   * @schema CloudDirectoryBatchListObjectPolicies#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListObjectPolicies#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListObjectPolicies#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchListPolicyAttachments
 */
export interface CloudDirectoryBatchListPolicyAttachments {
  /**
   * @schema CloudDirectoryBatchListPolicyAttachments#PolicyReference
   */
  readonly policyReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListPolicyAttachments#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListPolicyAttachments#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchLookupPolicy
 */
export interface CloudDirectoryBatchLookupPolicy {
  /**
   * @schema CloudDirectoryBatchLookupPolicy#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchLookupPolicy#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchLookupPolicy#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchListIndex
 */
export interface CloudDirectoryBatchListIndex {
  /**
   * @schema CloudDirectoryBatchListIndex#RangesOnIndexedValues
   */
  readonly rangesOnIndexedValues?: CloudDirectoryObjectAttributeRange[];

  /**
   * @schema CloudDirectoryBatchListIndex#IndexReference
   */
  readonly indexReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListIndex#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudDirectoryBatchListIndex#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListOutgoingTypedLinks
 */
export interface CloudDirectoryBatchListOutgoingTypedLinks {
  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinks#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinks#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: CloudDirectoryTypedLinkAttributeRange[];

  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinks#FilterTypedLink
   */
  readonly filterTypedLink?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinks#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinks#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchListIncomingTypedLinks
 */
export interface CloudDirectoryBatchListIncomingTypedLinks {
  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinks#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinks#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: CloudDirectoryTypedLinkAttributeRange[];

  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinks#FilterTypedLink
   */
  readonly filterTypedLink?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinks#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinks#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema CloudDirectoryBatchGetLinkAttributes
 */
export interface CloudDirectoryBatchGetLinkAttributes {
  /**
   * @schema CloudDirectoryBatchGetLinkAttributes#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryBatchGetLinkAttributes#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema CloudDirectoryBatchReadSuccessfulResponse
 */
export interface CloudDirectoryBatchReadSuccessfulResponse {
  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListObjectAttributes
   */
  readonly listObjectAttributes?: CloudDirectoryBatchListObjectAttributesResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListObjectChildren
   */
  readonly listObjectChildren?: CloudDirectoryBatchListObjectChildrenResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#FetchObjectInformation
   */
  readonly fetchObjectInformation?: CloudDirectoryBatchGetObjectInformationResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#FetchObjectAttributes
   */
  readonly fetchObjectAttributes?: CloudDirectoryBatchGetObjectAttributesResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListAttachedIndices
   */
  readonly listAttachedIndices?: CloudDirectoryBatchListAttachedIndicesResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListObjectParentPaths
   */
  readonly listObjectParentPaths?: CloudDirectoryBatchListObjectParentPathsResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListObjectPolicies
   */
  readonly listObjectPolicies?: CloudDirectoryBatchListObjectPoliciesResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListPolicyAttachments
   */
  readonly listPolicyAttachments?: CloudDirectoryBatchListPolicyAttachmentsResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#LookupPolicy
   */
  readonly lookupPolicy?: CloudDirectoryBatchLookupPolicyResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListIndex
   */
  readonly listIndex?: CloudDirectoryBatchListIndexResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListOutgoingTypedLinks
   */
  readonly listOutgoingTypedLinks?: CloudDirectoryBatchListOutgoingTypedLinksResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListIncomingTypedLinks
   */
  readonly listIncomingTypedLinks?: CloudDirectoryBatchListIncomingTypedLinksResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#FetchLinkAttributes
   */
  readonly fetchLinkAttributes?: CloudDirectoryBatchGetLinkAttributesResponse;

  /**
   * @schema CloudDirectoryBatchReadSuccessfulResponse#ListObjectParents
   */
  readonly listObjectParents?: CloudDirectoryBatchListObjectParentsResponse;

}

/**
 * @schema CloudDirectoryBatchReadException
 */
export interface CloudDirectoryBatchReadException {
  /**
   * @schema CloudDirectoryBatchReadException#Type
   */
  readonly type?: string;

  /**
   * @schema CloudDirectoryBatchReadException#Message
   */
  readonly message?: string;

}

/**
 * @schema CloudDirectoryBatchCreateObject
 */
export interface CloudDirectoryBatchCreateObject {
  /**
   * @schema CloudDirectoryBatchCreateObject#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet[];

  /**
   * @schema CloudDirectoryBatchCreateObject#ObjectAttributeList
   */
  readonly objectAttributeList: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryBatchCreateObject#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchCreateObject#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema CloudDirectoryBatchCreateObject#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * @schema CloudDirectoryBatchAttachObject
 */
export interface CloudDirectoryBatchAttachObject {
  /**
   * @schema CloudDirectoryBatchAttachObject#ParentReference
   */
  readonly parentReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachObject#ChildReference
   */
  readonly childReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachObject#LinkName
   */
  readonly linkName: string;

}

/**
 * @schema CloudDirectoryBatchDetachObject
 */
export interface CloudDirectoryBatchDetachObject {
  /**
   * @schema CloudDirectoryBatchDetachObject#ParentReference
   */
  readonly parentReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchDetachObject#LinkName
   */
  readonly linkName: string;

  /**
   * @schema CloudDirectoryBatchDetachObject#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * @schema CloudDirectoryBatchUpdateObjectAttributes
 */
export interface CloudDirectoryBatchUpdateObjectAttributes {
  /**
   * @schema CloudDirectoryBatchUpdateObjectAttributes#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchUpdateObjectAttributes#AttributeUpdates
   */
  readonly attributeUpdates: CloudDirectoryObjectAttributeUpdate[];

}

/**
 * @schema CloudDirectoryBatchDeleteObject
 */
export interface CloudDirectoryBatchDeleteObject {
  /**
   * @schema CloudDirectoryBatchDeleteObject#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchAddFacetToObject
 */
export interface CloudDirectoryBatchAddFacetToObject {
  /**
   * @schema CloudDirectoryBatchAddFacetToObject#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryBatchAddFacetToObject#ObjectAttributeList
   */
  readonly objectAttributeList: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryBatchAddFacetToObject#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchRemoveFacetFromObject
 */
export interface CloudDirectoryBatchRemoveFacetFromObject {
  /**
   * @schema CloudDirectoryBatchRemoveFacetFromObject#SchemaFacet
   */
  readonly schemaFacet: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryBatchRemoveFacetFromObject#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchAttachPolicy
 */
export interface CloudDirectoryBatchAttachPolicy {
  /**
   * @schema CloudDirectoryBatchAttachPolicy#PolicyReference
   */
  readonly policyReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachPolicy#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchDetachPolicy
 */
export interface CloudDirectoryBatchDetachPolicy {
  /**
   * @schema CloudDirectoryBatchDetachPolicy#PolicyReference
   */
  readonly policyReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchDetachPolicy#ObjectReference
   */
  readonly objectReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchCreateIndex
 */
export interface CloudDirectoryBatchCreateIndex {
  /**
   * @schema CloudDirectoryBatchCreateIndex#OrderedIndexedAttributeList
   */
  readonly orderedIndexedAttributeList: CloudDirectoryAttributeKey[];

  /**
   * @schema CloudDirectoryBatchCreateIndex#IsUnique
   */
  readonly isUnique: boolean;

  /**
   * @schema CloudDirectoryBatchCreateIndex#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchCreateIndex#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema CloudDirectoryBatchCreateIndex#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * @schema CloudDirectoryBatchAttachToIndex
 */
export interface CloudDirectoryBatchAttachToIndex {
  /**
   * @schema CloudDirectoryBatchAttachToIndex#IndexReference
   */
  readonly indexReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachToIndex#TargetReference
   */
  readonly targetReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchDetachFromIndex
 */
export interface CloudDirectoryBatchDetachFromIndex {
  /**
   * @schema CloudDirectoryBatchDetachFromIndex#IndexReference
   */
  readonly indexReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchDetachFromIndex#TargetReference
   */
  readonly targetReference: CloudDirectoryObjectReference;

}

/**
 * @schema CloudDirectoryBatchAttachTypedLink
 */
export interface CloudDirectoryBatchAttachTypedLink {
  /**
   * @schema CloudDirectoryBatchAttachTypedLink#SourceObjectReference
   */
  readonly sourceObjectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachTypedLink#TargetObjectReference
   */
  readonly targetObjectReference: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachTypedLink#TypedLinkFacet
   */
  readonly typedLinkFacet: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryBatchAttachTypedLink#Attributes
   */
  readonly attributes: CloudDirectoryAttributeNameAndValue[];

}

/**
 * @schema CloudDirectoryBatchDetachTypedLink
 */
export interface CloudDirectoryBatchDetachTypedLink {
  /**
   * @schema CloudDirectoryBatchDetachTypedLink#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: CloudDirectoryTypedLinkSpecifier;

}

/**
 * @schema CloudDirectoryBatchUpdateLinkAttributes
 */
export interface CloudDirectoryBatchUpdateLinkAttributes {
  /**
   * @schema CloudDirectoryBatchUpdateLinkAttributes#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryBatchUpdateLinkAttributes#AttributeUpdates
   */
  readonly attributeUpdates: CloudDirectoryLinkAttributeUpdate[];

}

/**
 * @schema CloudDirectoryBatchCreateObjectResponse
 */
export interface CloudDirectoryBatchCreateObjectResponse {
  /**
   * @schema CloudDirectoryBatchCreateObjectResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchAttachObjectResponse
 */
export interface CloudDirectoryBatchAttachObjectResponse {
  /**
   * @schema CloudDirectoryBatchAttachObjectResponse#attachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchDetachObjectResponse
 */
export interface CloudDirectoryBatchDetachObjectResponse {
  /**
   * @schema CloudDirectoryBatchDetachObjectResponse#detachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchUpdateObjectAttributesResponse
 */
export interface CloudDirectoryBatchUpdateObjectAttributesResponse {
  /**
   * @schema CloudDirectoryBatchUpdateObjectAttributesResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchDeleteObjectResponse
 */
export interface CloudDirectoryBatchDeleteObjectResponse {
}

/**
 * @schema CloudDirectoryBatchAddFacetToObjectResponse
 */
export interface CloudDirectoryBatchAddFacetToObjectResponse {
}

/**
 * @schema CloudDirectoryBatchRemoveFacetFromObjectResponse
 */
export interface CloudDirectoryBatchRemoveFacetFromObjectResponse {
}

/**
 * @schema CloudDirectoryBatchAttachPolicyResponse
 */
export interface CloudDirectoryBatchAttachPolicyResponse {
}

/**
 * @schema CloudDirectoryBatchDetachPolicyResponse
 */
export interface CloudDirectoryBatchDetachPolicyResponse {
}

/**
 * @schema CloudDirectoryBatchCreateIndexResponse
 */
export interface CloudDirectoryBatchCreateIndexResponse {
  /**
   * @schema CloudDirectoryBatchCreateIndexResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchAttachToIndexResponse
 */
export interface CloudDirectoryBatchAttachToIndexResponse {
  /**
   * @schema CloudDirectoryBatchAttachToIndexResponse#AttachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchDetachFromIndexResponse
 */
export interface CloudDirectoryBatchDetachFromIndexResponse {
  /**
   * @schema CloudDirectoryBatchDetachFromIndexResponse#DetachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchAttachTypedLinkResponse
 */
export interface CloudDirectoryBatchAttachTypedLinkResponse {
  /**
   * @schema CloudDirectoryBatchAttachTypedLinkResponse#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

}

/**
 * @schema CloudDirectoryBatchDetachTypedLinkResponse
 */
export interface CloudDirectoryBatchDetachTypedLinkResponse {
}

/**
 * @schema CloudDirectoryBatchUpdateLinkAttributesResponse
 */
export interface CloudDirectoryBatchUpdateLinkAttributesResponse {
}

/**
 * @schema CloudDirectoryFacetAttributeDefinition
 */
export interface CloudDirectoryFacetAttributeDefinition {
  /**
   * @schema CloudDirectoryFacetAttributeDefinition#Type
   */
  readonly type: string;

  /**
   * @schema CloudDirectoryFacetAttributeDefinition#DefaultValue
   */
  readonly defaultValue?: CloudDirectoryTypedAttributeValue;

  /**
   * @schema CloudDirectoryFacetAttributeDefinition#IsImmutable
   */
  readonly isImmutable?: boolean;

  /**
   * @schema CloudDirectoryFacetAttributeDefinition#Rules
   */
  readonly rules?: { [key: string]: CloudDirectoryRule };

}

/**
 * @schema CloudDirectoryFacetAttributeReference
 */
export interface CloudDirectoryFacetAttributeReference {
  /**
   * @schema CloudDirectoryFacetAttributeReference#TargetFacetName
   */
  readonly targetFacetName: string;

  /**
   * @schema CloudDirectoryFacetAttributeReference#TargetAttributeName
   */
  readonly targetAttributeName: string;

}

/**
 * @schema CloudDirectoryTypedAttributeValueRange
 */
export interface CloudDirectoryTypedAttributeValueRange {
  /**
   * @schema CloudDirectoryTypedAttributeValueRange#StartMode
   */
  readonly startMode: string;

  /**
   * @schema CloudDirectoryTypedAttributeValueRange#StartValue
   */
  readonly startValue?: CloudDirectoryTypedAttributeValue;

  /**
   * @schema CloudDirectoryTypedAttributeValueRange#EndMode
   */
  readonly endMode: string;

  /**
   * @schema CloudDirectoryTypedAttributeValueRange#EndValue
   */
  readonly endValue?: CloudDirectoryTypedAttributeValue;

}

/**
 * @schema CloudDirectoryRule
 */
export interface CloudDirectoryRule {
  /**
   * @schema CloudDirectoryRule#Type
   */
  readonly type?: string;

  /**
   * @schema CloudDirectoryRule#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema CloudDirectoryPolicyAttachment
 */
export interface CloudDirectoryPolicyAttachment {
  /**
   * @schema CloudDirectoryPolicyAttachment#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema CloudDirectoryPolicyAttachment#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

  /**
   * @schema CloudDirectoryPolicyAttachment#PolicyType
   */
  readonly policyType?: string;

}

/**
 * @schema CloudDirectoryLinkAttributeAction
 */
export interface CloudDirectoryLinkAttributeAction {
  /**
   * @schema CloudDirectoryLinkAttributeAction#AttributeActionType
   */
  readonly attributeActionType?: string;

  /**
   * @schema CloudDirectoryLinkAttributeAction#AttributeUpdateValue
   */
  readonly attributeUpdateValue?: CloudDirectoryTypedAttributeValue;

}

/**
 * @schema CloudDirectoryObjectAttributeAction
 */
export interface CloudDirectoryObjectAttributeAction {
  /**
   * @schema CloudDirectoryObjectAttributeAction#ObjectAttributeActionType
   */
  readonly objectAttributeActionType?: string;

  /**
   * @schema CloudDirectoryObjectAttributeAction#ObjectAttributeUpdateValue
   */
  readonly objectAttributeUpdateValue?: CloudDirectoryTypedAttributeValue;

}

/**
 * @schema CloudDirectoryBatchListObjectAttributesResponse
 */
export interface CloudDirectoryBatchListObjectAttributesResponse {
  /**
   * @schema CloudDirectoryBatchListObjectAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryBatchListObjectAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListObjectChildrenResponse
 */
export interface CloudDirectoryBatchListObjectChildrenResponse {
  /**
   * @schema CloudDirectoryBatchListObjectChildrenResponse#Children
   */
  readonly children?: { [key: string]: string };

  /**
   * @schema CloudDirectoryBatchListObjectChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchGetObjectInformationResponse
 */
export interface CloudDirectoryBatchGetObjectInformationResponse {
  /**
   * @schema CloudDirectoryBatchGetObjectInformationResponse#SchemaFacets
   */
  readonly schemaFacets?: CloudDirectorySchemaFacet[];

  /**
   * @schema CloudDirectoryBatchGetObjectInformationResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CloudDirectoryBatchGetObjectAttributesResponse
 */
export interface CloudDirectoryBatchGetObjectAttributesResponse {
  /**
   * @schema CloudDirectoryBatchGetObjectAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeKeyAndValue[];

}

/**
 * @schema CloudDirectoryBatchListAttachedIndicesResponse
 */
export interface CloudDirectoryBatchListAttachedIndicesResponse {
  /**
   * @schema CloudDirectoryBatchListAttachedIndicesResponse#IndexAttachments
   */
  readonly indexAttachments?: CloudDirectoryIndexAttachment[];

  /**
   * @schema CloudDirectoryBatchListAttachedIndicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListObjectParentPathsResponse
 */
export interface CloudDirectoryBatchListObjectParentPathsResponse {
  /**
   * @schema CloudDirectoryBatchListObjectParentPathsResponse#PathToObjectIdentifiersList
   */
  readonly pathToObjectIdentifiersList?: CloudDirectoryPathToObjectIdentifiers[];

  /**
   * @schema CloudDirectoryBatchListObjectParentPathsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListObjectPoliciesResponse
 */
export interface CloudDirectoryBatchListObjectPoliciesResponse {
  /**
   * @schema CloudDirectoryBatchListObjectPoliciesResponse#AttachedPolicyIds
   */
  readonly attachedPolicyIds?: string[];

  /**
   * @schema CloudDirectoryBatchListObjectPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListPolicyAttachmentsResponse
 */
export interface CloudDirectoryBatchListPolicyAttachmentsResponse {
  /**
   * @schema CloudDirectoryBatchListPolicyAttachmentsResponse#ObjectIdentifiers
   */
  readonly objectIdentifiers?: string[];

  /**
   * @schema CloudDirectoryBatchListPolicyAttachmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchLookupPolicyResponse
 */
export interface CloudDirectoryBatchLookupPolicyResponse {
  /**
   * @schema CloudDirectoryBatchLookupPolicyResponse#PolicyToPathList
   */
  readonly policyToPathList?: CloudDirectoryPolicyToPath[];

  /**
   * @schema CloudDirectoryBatchLookupPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListIndexResponse
 */
export interface CloudDirectoryBatchListIndexResponse {
  /**
   * @schema CloudDirectoryBatchListIndexResponse#IndexAttachments
   */
  readonly indexAttachments?: CloudDirectoryIndexAttachment[];

  /**
   * @schema CloudDirectoryBatchListIndexResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListOutgoingTypedLinksResponse
 */
export interface CloudDirectoryBatchListOutgoingTypedLinksResponse {
  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinksResponse#TypedLinkSpecifiers
   */
  readonly typedLinkSpecifiers?: CloudDirectoryTypedLinkSpecifier[];

  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchListIncomingTypedLinksResponse
 */
export interface CloudDirectoryBatchListIncomingTypedLinksResponse {
  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinksResponse#LinkSpecifiers
   */
  readonly linkSpecifiers?: CloudDirectoryTypedLinkSpecifier[];

  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema CloudDirectoryBatchGetLinkAttributesResponse
 */
export interface CloudDirectoryBatchGetLinkAttributesResponse {
  /**
   * @schema CloudDirectoryBatchGetLinkAttributesResponse#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeKeyAndValue[];

}

/**
 * @schema CloudDirectoryBatchListObjectParentsResponse
 */
export interface CloudDirectoryBatchListObjectParentsResponse {
  /**
   * @schema CloudDirectoryBatchListObjectParentsResponse#ParentLinks
   */
  readonly parentLinks?: CloudDirectoryObjectIdentifierAndLinkNameTuple[];

  /**
   * @schema CloudDirectoryBatchListObjectParentsResponse#NextToken
   */
  readonly nextToken?: string;

}
