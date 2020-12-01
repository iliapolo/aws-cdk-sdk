/**
 * @schema AddFacetToObjectRequest
 */
export interface AddFacetToObjectRequest {
  /**
   * @schema AddFacetToObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema AddFacetToObjectRequest#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet;

  /**
   * @schema AddFacetToObjectRequest#ObjectAttributeList
   */
  readonly objectAttributeList?: AttributeKeyAndValue[];

  /**
   * @schema AddFacetToObjectRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema AddFacetToObjectResponse
 */
export interface AddFacetToObjectResponse {
}

/**
 * @schema ApplySchemaRequest
 */
export interface ApplySchemaRequest {
  /**
   * @schema ApplySchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn: string;

  /**
   * @schema ApplySchemaRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema ApplySchemaResponse
 */
export interface ApplySchemaResponse {
  /**
   * @schema ApplySchemaResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn?: string;

  /**
   * @schema ApplySchemaResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * @schema AttachObjectRequest
 */
export interface AttachObjectRequest {
  /**
   * @schema AttachObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema AttachObjectRequest#ParentReference
   */
  readonly parentReference: ObjectReference;

  /**
   * @schema AttachObjectRequest#ChildReference
   */
  readonly childReference: ObjectReference;

  /**
   * @schema AttachObjectRequest#LinkName
   */
  readonly linkName: string;

}

/**
 * @schema AttachObjectResponse
 */
export interface AttachObjectResponse {
  /**
   * @schema AttachObjectResponse#AttachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema AttachPolicyRequest
 */
export interface AttachPolicyRequest {
  /**
   * @schema AttachPolicyRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema AttachPolicyRequest#PolicyReference
   */
  readonly policyReference: ObjectReference;

  /**
   * @schema AttachPolicyRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema AttachPolicyResponse
 */
export interface AttachPolicyResponse {
}

/**
 * @schema AttachToIndexRequest
 */
export interface AttachToIndexRequest {
  /**
   * @schema AttachToIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema AttachToIndexRequest#IndexReference
   */
  readonly indexReference: ObjectReference;

  /**
   * @schema AttachToIndexRequest#TargetReference
   */
  readonly targetReference: ObjectReference;

}

/**
 * @schema AttachToIndexResponse
 */
export interface AttachToIndexResponse {
  /**
   * @schema AttachToIndexResponse#AttachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema AttachTypedLinkRequest
 */
export interface AttachTypedLinkRequest {
  /**
   * @schema AttachTypedLinkRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema AttachTypedLinkRequest#SourceObjectReference
   */
  readonly sourceObjectReference: ObjectReference;

  /**
   * @schema AttachTypedLinkRequest#TargetObjectReference
   */
  readonly targetObjectReference: ObjectReference;

  /**
   * @schema AttachTypedLinkRequest#TypedLinkFacet
   */
  readonly typedLinkFacet: TypedLinkSchemaAndFacetName;

  /**
   * @schema AttachTypedLinkRequest#Attributes
   */
  readonly attributes: AttributeNameAndValue[];

}

/**
 * @schema AttachTypedLinkResponse
 */
export interface AttachTypedLinkResponse {
  /**
   * @schema AttachTypedLinkResponse#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: TypedLinkSpecifier;

}

/**
 * @schema BatchReadRequest
 */
export interface BatchReadRequest {
  /**
   * @schema BatchReadRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema BatchReadRequest#Operations
   */
  readonly operations: BatchReadOperation[];

  /**
   * @schema BatchReadRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema BatchReadResponse
 */
export interface BatchReadResponse {
  /**
   * @schema BatchReadResponse#Responses
   */
  readonly responses?: BatchReadOperationResponse[];

}

/**
 * @schema BatchWriteRequest
 */
export interface BatchWriteRequest {
  /**
   * @schema BatchWriteRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema BatchWriteRequest#Operations
   */
  readonly operations: BatchWriteOperation[];

}

/**
 * @schema BatchWriteResponse
 */
export interface BatchWriteResponse {
  /**
   * @schema BatchWriteResponse#Responses
   */
  readonly responses?: BatchWriteOperationResponse[];

}

/**
 * @schema CreateDirectoryRequest
 */
export interface CreateDirectoryRequest {
  /**
   * @schema CreateDirectoryRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDirectoryRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema CreateDirectoryResponse
 */
export interface CreateDirectoryResponse {
  /**
   * @schema CreateDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CreateDirectoryResponse#Name
   */
  readonly name: string;

  /**
   * @schema CreateDirectoryResponse#ObjectIdentifier
   */
  readonly objectIdentifier: string;

  /**
   * @schema CreateDirectoryResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn: string;

}

/**
 * @schema CreateFacetRequest
 */
export interface CreateFacetRequest {
  /**
   * @schema CreateFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CreateFacetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateFacetRequest#Attributes
   */
  readonly attributes?: FacetAttribute[];

  /**
   * @schema CreateFacetRequest#ObjectType
   */
  readonly objectType?: string;

  /**
   * @schema CreateFacetRequest#FacetStyle
   */
  readonly facetStyle?: string;

}

/**
 * @schema CreateFacetResponse
 */
export interface CreateFacetResponse {
}

/**
 * @schema CreateIndexRequest
 */
export interface CreateIndexRequest {
  /**
   * @schema CreateIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CreateIndexRequest#OrderedIndexedAttributeList
   */
  readonly orderedIndexedAttributeList: AttributeKey[];

  /**
   * @schema CreateIndexRequest#IsUnique
   */
  readonly isUnique: boolean;

  /**
   * @schema CreateIndexRequest#ParentReference
   */
  readonly parentReference?: ObjectReference;

  /**
   * @schema CreateIndexRequest#LinkName
   */
  readonly linkName?: string;

}

/**
 * @schema CreateIndexResponse
 */
export interface CreateIndexResponse {
  /**
   * @schema CreateIndexResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CreateObjectRequest
 */
export interface CreateObjectRequest {
  /**
   * @schema CreateObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema CreateObjectRequest#SchemaFacets
   */
  readonly schemaFacets: SchemaFacet[];

  /**
   * @schema CreateObjectRequest#ObjectAttributeList
   */
  readonly objectAttributeList?: AttributeKeyAndValue[];

  /**
   * @schema CreateObjectRequest#ParentReference
   */
  readonly parentReference?: ObjectReference;

  /**
   * @schema CreateObjectRequest#LinkName
   */
  readonly linkName?: string;

}

/**
 * @schema CreateObjectResponse
 */
export interface CreateObjectResponse {
  /**
   * @schema CreateObjectResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema CreateSchemaRequest
 */
export interface CreateSchemaRequest {
  /**
   * @schema CreateSchemaRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateSchemaResponse
 */
export interface CreateSchemaResponse {
  /**
   * @schema CreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema CreateTypedLinkFacetRequest
 */
export interface CreateTypedLinkFacetRequest {
  /**
   * @schema CreateTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CreateTypedLinkFacetRequest#Facet
   */
  readonly facet: TypedLinkFacet;

}

/**
 * @schema CreateTypedLinkFacetResponse
 */
export interface CreateTypedLinkFacetResponse {
}

/**
 * @schema DeleteDirectoryRequest
 */
export interface DeleteDirectoryRequest {
  /**
   * @schema DeleteDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema DeleteDirectoryResponse
 */
export interface DeleteDirectoryResponse {
  /**
   * @schema DeleteDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema DeleteFacetRequest
 */
export interface DeleteFacetRequest {
  /**
   * @schema DeleteFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema DeleteFacetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteFacetResponse
 */
export interface DeleteFacetResponse {
}

/**
 * @schema DeleteObjectRequest
 */
export interface DeleteObjectRequest {
  /**
   * @schema DeleteObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema DeleteObjectRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema DeleteObjectResponse
 */
export interface DeleteObjectResponse {
}

/**
 * @schema DeleteSchemaRequest
 */
export interface DeleteSchemaRequest {
  /**
   * @schema DeleteSchemaRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema DeleteSchemaResponse
 */
export interface DeleteSchemaResponse {
  /**
   * @schema DeleteSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema DeleteTypedLinkFacetRequest
 */
export interface DeleteTypedLinkFacetRequest {
  /**
   * @schema DeleteTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema DeleteTypedLinkFacetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteTypedLinkFacetResponse
 */
export interface DeleteTypedLinkFacetResponse {
}

/**
 * @schema DetachFromIndexRequest
 */
export interface DetachFromIndexRequest {
  /**
   * @schema DetachFromIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema DetachFromIndexRequest#IndexReference
   */
  readonly indexReference: ObjectReference;

  /**
   * @schema DetachFromIndexRequest#TargetReference
   */
  readonly targetReference: ObjectReference;

}

/**
 * @schema DetachFromIndexResponse
 */
export interface DetachFromIndexResponse {
  /**
   * @schema DetachFromIndexResponse#DetachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema DetachObjectRequest
 */
export interface DetachObjectRequest {
  /**
   * @schema DetachObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema DetachObjectRequest#ParentReference
   */
  readonly parentReference: ObjectReference;

  /**
   * @schema DetachObjectRequest#LinkName
   */
  readonly linkName: string;

}

/**
 * @schema DetachObjectResponse
 */
export interface DetachObjectResponse {
  /**
   * @schema DetachObjectResponse#DetachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema DetachPolicyRequest
 */
export interface DetachPolicyRequest {
  /**
   * @schema DetachPolicyRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema DetachPolicyRequest#PolicyReference
   */
  readonly policyReference: ObjectReference;

  /**
   * @schema DetachPolicyRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema DetachPolicyResponse
 */
export interface DetachPolicyResponse {
}

/**
 * @schema DetachTypedLinkRequest
 */
export interface DetachTypedLinkRequest {
  /**
   * @schema DetachTypedLinkRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema DetachTypedLinkRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: TypedLinkSpecifier;

}

/**
 * @schema DisableDirectoryRequest
 */
export interface DisableDirectoryRequest {
  /**
   * @schema DisableDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema DisableDirectoryResponse
 */
export interface DisableDirectoryResponse {
  /**
   * @schema DisableDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema EnableDirectoryRequest
 */
export interface EnableDirectoryRequest {
  /**
   * @schema EnableDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema EnableDirectoryResponse
 */
export interface EnableDirectoryResponse {
  /**
   * @schema EnableDirectoryResponse#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema GetAppliedSchemaVersionRequest
 */
export interface GetAppliedSchemaVersionRequest {
  /**
   * @schema GetAppliedSchemaVersionRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema GetAppliedSchemaVersionResponse
 */
export interface GetAppliedSchemaVersionResponse {
  /**
   * @schema GetAppliedSchemaVersionResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn?: string;

}

/**
 * @schema GetDirectoryRequest
 */
export interface GetDirectoryRequest {
  /**
   * @schema GetDirectoryRequest#DirectoryArn
   */
  readonly directoryArn: string;

}

/**
 * @schema GetDirectoryResponse
 */
export interface GetDirectoryResponse {
  /**
   * @schema GetDirectoryResponse#Directory
   */
  readonly directory: Directory;

}

/**
 * @schema GetFacetRequest
 */
export interface GetFacetRequest {
  /**
   * @schema GetFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema GetFacetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetFacetResponse
 */
export interface GetFacetResponse {
  /**
   * @schema GetFacetResponse#Facet
   */
  readonly facet?: Facet;

}

/**
 * @schema GetLinkAttributesRequest
 */
export interface GetLinkAttributesRequest {
  /**
   * @schema GetLinkAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema GetLinkAttributesRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: TypedLinkSpecifier;

  /**
   * @schema GetLinkAttributesRequest#AttributeNames
   */
  readonly attributeNames: string[];

  /**
   * @schema GetLinkAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema GetLinkAttributesResponse
 */
export interface GetLinkAttributesResponse {
  /**
   * @schema GetLinkAttributesResponse#Attributes
   */
  readonly attributes?: AttributeKeyAndValue[];

}

/**
 * @schema GetObjectAttributesRequest
 */
export interface GetObjectAttributesRequest {
  /**
   * @schema GetObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema GetObjectAttributesRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema GetObjectAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema GetObjectAttributesRequest#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet;

  /**
   * @schema GetObjectAttributesRequest#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema GetObjectAttributesResponse
 */
export interface GetObjectAttributesResponse {
  /**
   * @schema GetObjectAttributesResponse#Attributes
   */
  readonly attributes?: AttributeKeyAndValue[];

}

/**
 * @schema GetObjectInformationRequest
 */
export interface GetObjectInformationRequest {
  /**
   * @schema GetObjectInformationRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema GetObjectInformationRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema GetObjectInformationRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema GetObjectInformationResponse
 */
export interface GetObjectInformationResponse {
  /**
   * @schema GetObjectInformationResponse#SchemaFacets
   */
  readonly schemaFacets?: SchemaFacet[];

  /**
   * @schema GetObjectInformationResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema GetSchemaAsJsonRequest
 */
export interface GetSchemaAsJsonRequest {
  /**
   * @schema GetSchemaAsJsonRequest#SchemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema GetSchemaAsJsonResponse
 */
export interface GetSchemaAsJsonResponse {
  /**
   * @schema GetSchemaAsJsonResponse#Name
   */
  readonly name?: string;

  /**
   * @schema GetSchemaAsJsonResponse#Document
   */
  readonly document?: string;

}

/**
 * @schema GetTypedLinkFacetInformationRequest
 */
export interface GetTypedLinkFacetInformationRequest {
  /**
   * @schema GetTypedLinkFacetInformationRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema GetTypedLinkFacetInformationRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetTypedLinkFacetInformationResponse
 */
export interface GetTypedLinkFacetInformationResponse {
  /**
   * @schema GetTypedLinkFacetInformationResponse#IdentityAttributeOrder
   */
  readonly identityAttributeOrder?: string[];

}

/**
 * @schema ListAppliedSchemaArnsRequest
 */
export interface ListAppliedSchemaArnsRequest {
  /**
   * @schema ListAppliedSchemaArnsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListAppliedSchemaArnsRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema ListAppliedSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppliedSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListAppliedSchemaArnsResponse
 */
export interface ListAppliedSchemaArnsResponse {
  /**
   * @schema ListAppliedSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema ListAppliedSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAttachedIndicesRequest
 */
export interface ListAttachedIndicesRequest {
  /**
   * @schema ListAttachedIndicesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListAttachedIndicesRequest#TargetReference
   */
  readonly targetReference: ObjectReference;

  /**
   * @schema ListAttachedIndicesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAttachedIndicesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAttachedIndicesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListAttachedIndicesResponse
 */
export interface ListAttachedIndicesResponse {
  /**
   * @schema ListAttachedIndicesResponse#IndexAttachments
   */
  readonly indexAttachments?: IndexAttachment[];

  /**
   * @schema ListAttachedIndicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDevelopmentSchemaArnsRequest
 */
export interface ListDevelopmentSchemaArnsRequest {
  /**
   * @schema ListDevelopmentSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDevelopmentSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDevelopmentSchemaArnsResponse
 */
export interface ListDevelopmentSchemaArnsResponse {
  /**
   * @schema ListDevelopmentSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema ListDevelopmentSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDirectoriesRequest
 */
export interface ListDirectoriesRequest {
  /**
   * @schema ListDirectoriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDirectoriesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDirectoriesRequest#state
   */
  readonly state?: string;

}

/**
 * @schema ListDirectoriesResponse
 */
export interface ListDirectoriesResponse {
  /**
   * @schema ListDirectoriesResponse#Directories
   */
  readonly directories: Directory[];

  /**
   * @schema ListDirectoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFacetAttributesRequest
 */
export interface ListFacetAttributesRequest {
  /**
   * @schema ListFacetAttributesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema ListFacetAttributesRequest#Name
   */
  readonly name: string;

  /**
   * @schema ListFacetAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFacetAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFacetAttributesResponse
 */
export interface ListFacetAttributesResponse {
  /**
   * @schema ListFacetAttributesResponse#Attributes
   */
  readonly attributes?: FacetAttribute[];

  /**
   * @schema ListFacetAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFacetNamesRequest
 */
export interface ListFacetNamesRequest {
  /**
   * @schema ListFacetNamesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema ListFacetNamesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFacetNamesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFacetNamesResponse
 */
export interface ListFacetNamesResponse {
  /**
   * @schema ListFacetNamesResponse#FacetNames
   */
  readonly facetNames?: string[];

  /**
   * @schema ListFacetNamesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIncomingTypedLinksRequest
 */
export interface ListIncomingTypedLinksRequest {
  /**
   * @schema ListIncomingTypedLinksRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListIncomingTypedLinksRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListIncomingTypedLinksRequest#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @schema ListIncomingTypedLinksRequest#FilterTypedLink
   */
  readonly filterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @schema ListIncomingTypedLinksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIncomingTypedLinksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListIncomingTypedLinksRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListIncomingTypedLinksResponse
 */
export interface ListIncomingTypedLinksResponse {
  /**
   * @schema ListIncomingTypedLinksResponse#LinkSpecifiers
   */
  readonly linkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @schema ListIncomingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIndexRequest
 */
export interface ListIndexRequest {
  /**
   * @schema ListIndexRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListIndexRequest#RangesOnIndexedValues
   */
  readonly rangesOnIndexedValues?: ObjectAttributeRange[];

  /**
   * @schema ListIndexRequest#IndexReference
   */
  readonly indexReference: ObjectReference;

  /**
   * @schema ListIndexRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListIndexRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIndexRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListIndexResponse
 */
export interface ListIndexResponse {
  /**
   * @schema ListIndexResponse#IndexAttachments
   */
  readonly indexAttachments?: IndexAttachment[];

  /**
   * @schema ListIndexResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListManagedSchemaArnsRequest
 */
export interface ListManagedSchemaArnsRequest {
  /**
   * @schema ListManagedSchemaArnsRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema ListManagedSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListManagedSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListManagedSchemaArnsResponse
 */
export interface ListManagedSchemaArnsResponse {
  /**
   * @schema ListManagedSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema ListManagedSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListObjectAttributesRequest
 */
export interface ListObjectAttributesRequest {
  /**
   * @schema ListObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListObjectAttributesRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListObjectAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListObjectAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListObjectAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema ListObjectAttributesRequest#FacetFilter
   */
  readonly facetFilter?: SchemaFacet;

}

/**
 * @schema ListObjectAttributesResponse
 */
export interface ListObjectAttributesResponse {
  /**
   * @schema ListObjectAttributesResponse#Attributes
   */
  readonly attributes?: AttributeKeyAndValue[];

  /**
   * @schema ListObjectAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListObjectChildrenRequest
 */
export interface ListObjectChildrenRequest {
  /**
   * @schema ListObjectChildrenRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListObjectChildrenRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListObjectChildrenRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListObjectChildrenRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListObjectChildrenRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListObjectChildrenResponse
 */
export interface ListObjectChildrenResponse {
  /**
   * @schema ListObjectChildrenResponse#Children
   */
  readonly children?: { [key: string]: string };

  /**
   * @schema ListObjectChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListObjectParentPathsRequest
 */
export interface ListObjectParentPathsRequest {
  /**
   * @schema ListObjectParentPathsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListObjectParentPathsRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListObjectParentPathsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListObjectParentPathsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListObjectParentPathsResponse
 */
export interface ListObjectParentPathsResponse {
  /**
   * @schema ListObjectParentPathsResponse#PathToObjectIdentifiersList
   */
  readonly pathToObjectIdentifiersList?: PathToObjectIdentifiers[];

  /**
   * @schema ListObjectParentPathsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListObjectParentsRequest
 */
export interface ListObjectParentsRequest {
  /**
   * @schema ListObjectParentsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListObjectParentsRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListObjectParentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListObjectParentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListObjectParentsRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema ListObjectParentsRequest#IncludeAllLinksToEachParent
   */
  readonly includeAllLinksToEachParent?: boolean;

}

/**
 * @schema ListObjectParentsResponse
 */
export interface ListObjectParentsResponse {
  /**
   * @schema ListObjectParentsResponse#Parents
   */
  readonly parents?: { [key: string]: string };

  /**
   * @schema ListObjectParentsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListObjectParentsResponse#ParentLinks
   */
  readonly parentLinks?: ObjectIdentifierAndLinkNameTuple[];

}

/**
 * @schema ListObjectPoliciesRequest
 */
export interface ListObjectPoliciesRequest {
  /**
   * @schema ListObjectPoliciesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListObjectPoliciesRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListObjectPoliciesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListObjectPoliciesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListObjectPoliciesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListObjectPoliciesResponse
 */
export interface ListObjectPoliciesResponse {
  /**
   * @schema ListObjectPoliciesResponse#AttachedPolicyIds
   */
  readonly attachedPolicyIds?: string[];

  /**
   * @schema ListObjectPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListOutgoingTypedLinksRequest
 */
export interface ListOutgoingTypedLinksRequest {
  /**
   * @schema ListOutgoingTypedLinksRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListOutgoingTypedLinksRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema ListOutgoingTypedLinksRequest#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @schema ListOutgoingTypedLinksRequest#FilterTypedLink
   */
  readonly filterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @schema ListOutgoingTypedLinksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListOutgoingTypedLinksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListOutgoingTypedLinksRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListOutgoingTypedLinksResponse
 */
export interface ListOutgoingTypedLinksResponse {
  /**
   * @schema ListOutgoingTypedLinksResponse#TypedLinkSpecifiers
   */
  readonly typedLinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @schema ListOutgoingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPolicyAttachmentsRequest
 */
export interface ListPolicyAttachmentsRequest {
  /**
   * @schema ListPolicyAttachmentsRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema ListPolicyAttachmentsRequest#PolicyReference
   */
  readonly policyReference: ObjectReference;

  /**
   * @schema ListPolicyAttachmentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPolicyAttachmentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListPolicyAttachmentsRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * @schema ListPolicyAttachmentsResponse
 */
export interface ListPolicyAttachmentsResponse {
  /**
   * @schema ListPolicyAttachmentsResponse#ObjectIdentifiers
   */
  readonly objectIdentifiers?: string[];

  /**
   * @schema ListPolicyAttachmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPublishedSchemaArnsRequest
 */
export interface ListPublishedSchemaArnsRequest {
  /**
   * @schema ListPublishedSchemaArnsRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema ListPublishedSchemaArnsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPublishedSchemaArnsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPublishedSchemaArnsResponse
 */
export interface ListPublishedSchemaArnsResponse {
  /**
   * @schema ListPublishedSchemaArnsResponse#SchemaArns
   */
  readonly schemaArns?: string[];

  /**
   * @schema ListPublishedSchemaArnsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsForResourceRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForResourceRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsForResourceResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypedLinkFacetAttributesRequest
 */
export interface ListTypedLinkFacetAttributesRequest {
  /**
   * @schema ListTypedLinkFacetAttributesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema ListTypedLinkFacetAttributesRequest#Name
   */
  readonly name: string;

  /**
   * @schema ListTypedLinkFacetAttributesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTypedLinkFacetAttributesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTypedLinkFacetAttributesResponse
 */
export interface ListTypedLinkFacetAttributesResponse {
  /**
   * @schema ListTypedLinkFacetAttributesResponse#Attributes
   */
  readonly attributes?: TypedLinkAttributeDefinition[];

  /**
   * @schema ListTypedLinkFacetAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypedLinkFacetNamesRequest
 */
export interface ListTypedLinkFacetNamesRequest {
  /**
   * @schema ListTypedLinkFacetNamesRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema ListTypedLinkFacetNamesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTypedLinkFacetNamesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTypedLinkFacetNamesResponse
 */
export interface ListTypedLinkFacetNamesResponse {
  /**
   * @schema ListTypedLinkFacetNamesResponse#FacetNames
   */
  readonly facetNames?: string[];

  /**
   * @schema ListTypedLinkFacetNamesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema LookupPolicyRequest
 */
export interface LookupPolicyRequest {
  /**
   * @schema LookupPolicyRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema LookupPolicyRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema LookupPolicyRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema LookupPolicyRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema LookupPolicyResponse
 */
export interface LookupPolicyResponse {
  /**
   * @schema LookupPolicyResponse#PolicyToPathList
   */
  readonly policyToPathList?: PolicyToPath[];

  /**
   * @schema LookupPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PublishSchemaRequest
 */
export interface PublishSchemaRequest {
  /**
   * @schema PublishSchemaRequest#DevelopmentSchemaArn
   */
  readonly developmentSchemaArn: string;

  /**
   * @schema PublishSchemaRequest#Version
   */
  readonly version: string;

  /**
   * @schema PublishSchemaRequest#MinorVersion
   */
  readonly minorVersion?: string;

  /**
   * @schema PublishSchemaRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema PublishSchemaResponse
 */
export interface PublishSchemaResponse {
  /**
   * @schema PublishSchemaResponse#PublishedSchemaArn
   */
  readonly publishedSchemaArn?: string;

}

/**
 * @schema PutSchemaFromJsonRequest
 */
export interface PutSchemaFromJsonRequest {
  /**
   * @schema PutSchemaFromJsonRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema PutSchemaFromJsonRequest#Document
   */
  readonly document: string;

}

/**
 * @schema PutSchemaFromJsonResponse
 */
export interface PutSchemaFromJsonResponse {
  /**
   * @schema PutSchemaFromJsonResponse#Arn
   */
  readonly arn?: string;

}

/**
 * @schema RemoveFacetFromObjectRequest
 */
export interface RemoveFacetFromObjectRequest {
  /**
   * @schema RemoveFacetFromObjectRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema RemoveFacetFromObjectRequest#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet;

  /**
   * @schema RemoveFacetFromObjectRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema RemoveFacetFromObjectResponse
 */
export interface RemoveFacetFromObjectResponse {
}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: Tag[];

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
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateFacetRequest
 */
export interface UpdateFacetRequest {
  /**
   * @schema UpdateFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema UpdateFacetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateFacetRequest#AttributeUpdates
   */
  readonly attributeUpdates?: FacetAttributeUpdate[];

  /**
   * @schema UpdateFacetRequest#ObjectType
   */
  readonly objectType?: string;

}

/**
 * @schema UpdateFacetResponse
 */
export interface UpdateFacetResponse {
}

/**
 * @schema UpdateLinkAttributesRequest
 */
export interface UpdateLinkAttributesRequest {
  /**
   * @schema UpdateLinkAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema UpdateLinkAttributesRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: TypedLinkSpecifier;

  /**
   * @schema UpdateLinkAttributesRequest#AttributeUpdates
   */
  readonly attributeUpdates: LinkAttributeUpdate[];

}

/**
 * @schema UpdateLinkAttributesResponse
 */
export interface UpdateLinkAttributesResponse {
}

/**
 * @schema UpdateObjectAttributesRequest
 */
export interface UpdateObjectAttributesRequest {
  /**
   * @schema UpdateObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema UpdateObjectAttributesRequest#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema UpdateObjectAttributesRequest#AttributeUpdates
   */
  readonly attributeUpdates: ObjectAttributeUpdate[];

}

/**
 * @schema UpdateObjectAttributesResponse
 */
export interface UpdateObjectAttributesResponse {
  /**
   * @schema UpdateObjectAttributesResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema UpdateSchemaRequest
 */
export interface UpdateSchemaRequest {
  /**
   * @schema UpdateSchemaRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema UpdateSchemaRequest#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateSchemaResponse
 */
export interface UpdateSchemaResponse {
  /**
   * @schema UpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema UpdateTypedLinkFacetRequest
 */
export interface UpdateTypedLinkFacetRequest {
  /**
   * @schema UpdateTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema UpdateTypedLinkFacetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateTypedLinkFacetRequest#AttributeUpdates
   */
  readonly attributeUpdates: TypedLinkFacetAttributeUpdate[];

  /**
   * @schema UpdateTypedLinkFacetRequest#IdentityAttributeOrder
   */
  readonly identityAttributeOrder: string[];

}

/**
 * @schema UpdateTypedLinkFacetResponse
 */
export interface UpdateTypedLinkFacetResponse {
}

/**
 * @schema UpgradeAppliedSchemaRequest
 */
export interface UpgradeAppliedSchemaRequest {
  /**
   * @schema UpgradeAppliedSchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn: string;

  /**
   * @schema UpgradeAppliedSchemaRequest#DirectoryArn
   */
  readonly directoryArn: string;

  /**
   * @schema UpgradeAppliedSchemaRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema UpgradeAppliedSchemaResponse
 */
export interface UpgradeAppliedSchemaResponse {
  /**
   * @schema UpgradeAppliedSchemaResponse#UpgradedSchemaArn
   */
  readonly upgradedSchemaArn?: string;

  /**
   * @schema UpgradeAppliedSchemaResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * @schema UpgradePublishedSchemaRequest
 */
export interface UpgradePublishedSchemaRequest {
  /**
   * @schema UpgradePublishedSchemaRequest#DevelopmentSchemaArn
   */
  readonly developmentSchemaArn: string;

  /**
   * @schema UpgradePublishedSchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn: string;

  /**
   * @schema UpgradePublishedSchemaRequest#MinorVersion
   */
  readonly minorVersion: string;

  /**
   * @schema UpgradePublishedSchemaRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * @schema UpgradePublishedSchemaResponse
 */
export interface UpgradePublishedSchemaResponse {
  /**
   * @schema UpgradePublishedSchemaResponse#UpgradedSchemaArn
   */
  readonly upgradedSchemaArn?: string;

}

/**
 * @schema SchemaFacet
 */
export interface SchemaFacet {
  /**
   * @schema SchemaFacet#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemaFacet#FacetName
   */
  readonly facetName?: string;

}

/**
 * @schema AttributeKeyAndValue
 */
export interface AttributeKeyAndValue {
  /**
   * @schema AttributeKeyAndValue#Key
   */
  readonly key: AttributeKey;

  /**
   * @schema AttributeKeyAndValue#Value
   */
  readonly value: TypedAttributeValue;

}

/**
 * @schema ObjectReference
 */
export interface ObjectReference {
  /**
   * @schema ObjectReference#Selector
   */
  readonly selector?: string;

}

/**
 * @schema TypedLinkSchemaAndFacetName
 */
export interface TypedLinkSchemaAndFacetName {
  /**
   * @schema TypedLinkSchemaAndFacetName#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema TypedLinkSchemaAndFacetName#TypedLinkName
   */
  readonly typedLinkName: string;

}

/**
 * @schema AttributeNameAndValue
 */
export interface AttributeNameAndValue {
  /**
   * @schema AttributeNameAndValue#AttributeName
   */
  readonly attributeName: string;

  /**
   * @schema AttributeNameAndValue#Value
   */
  readonly value: TypedAttributeValue;

}

/**
 * @schema TypedLinkSpecifier
 */
export interface TypedLinkSpecifier {
  /**
   * @schema TypedLinkSpecifier#TypedLinkFacet
   */
  readonly typedLinkFacet: TypedLinkSchemaAndFacetName;

  /**
   * @schema TypedLinkSpecifier#SourceObjectReference
   */
  readonly sourceObjectReference: ObjectReference;

  /**
   * @schema TypedLinkSpecifier#TargetObjectReference
   */
  readonly targetObjectReference: ObjectReference;

  /**
   * @schema TypedLinkSpecifier#IdentityAttributeValues
   */
  readonly identityAttributeValues: AttributeNameAndValue[];

}

/**
 * @schema BatchReadOperation
 */
export interface BatchReadOperation {
  /**
   * @schema BatchReadOperation#ListObjectAttributes
   */
  readonly listObjectAttributes?: BatchListObjectAttributes;

  /**
   * @schema BatchReadOperation#ListObjectChildren
   */
  readonly listObjectChildren?: BatchListObjectChildren;

  /**
   * @schema BatchReadOperation#ListAttachedIndices
   */
  readonly listAttachedIndices?: BatchListAttachedIndices;

  /**
   * @schema BatchReadOperation#ListObjectParentPaths
   */
  readonly listObjectParentPaths?: BatchListObjectParentPaths;

  /**
   * @schema BatchReadOperation#GetObjectInformation
   */
  readonly getObjectInformation?: BatchGetObjectInformation;

  /**
   * @schema BatchReadOperation#GetObjectAttributes
   */
  readonly getObjectAttributes?: BatchGetObjectAttributes;

  /**
   * @schema BatchReadOperation#ListObjectParents
   */
  readonly listObjectParents?: BatchListObjectParents;

  /**
   * @schema BatchReadOperation#ListObjectPolicies
   */
  readonly listObjectPolicies?: BatchListObjectPolicies;

  /**
   * @schema BatchReadOperation#ListPolicyAttachments
   */
  readonly listPolicyAttachments?: BatchListPolicyAttachments;

  /**
   * @schema BatchReadOperation#LookupPolicy
   */
  readonly lookupPolicy?: BatchLookupPolicy;

  /**
   * @schema BatchReadOperation#ListIndex
   */
  readonly listIndex?: BatchListIndex;

  /**
   * @schema BatchReadOperation#ListOutgoingTypedLinks
   */
  readonly listOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

  /**
   * @schema BatchReadOperation#ListIncomingTypedLinks
   */
  readonly listIncomingTypedLinks?: BatchListIncomingTypedLinks;

  /**
   * @schema BatchReadOperation#GetLinkAttributes
   */
  readonly getLinkAttributes?: BatchGetLinkAttributes;

}

/**
 * @schema BatchReadOperationResponse
 */
export interface BatchReadOperationResponse {
  /**
   * @schema BatchReadOperationResponse#SuccessfulResponse
   */
  readonly successfulResponse?: BatchReadSuccessfulResponse;

  /**
   * @schema BatchReadOperationResponse#ExceptionResponse
   */
  readonly exceptionResponse?: BatchReadException;

}

/**
 * @schema BatchWriteOperation
 */
export interface BatchWriteOperation {
  /**
   * @schema BatchWriteOperation#CreateObject
   */
  readonly createObject?: BatchCreateObject;

  /**
   * @schema BatchWriteOperation#AttachObject
   */
  readonly attachObject?: BatchAttachObject;

  /**
   * @schema BatchWriteOperation#DetachObject
   */
  readonly detachObject?: BatchDetachObject;

  /**
   * @schema BatchWriteOperation#UpdateObjectAttributes
   */
  readonly updateObjectAttributes?: BatchUpdateObjectAttributes;

  /**
   * @schema BatchWriteOperation#DeleteObject
   */
  readonly deleteObject?: BatchDeleteObject;

  /**
   * @schema BatchWriteOperation#AddFacetToObject
   */
  readonly addFacetToObject?: BatchAddFacetToObject;

  /**
   * @schema BatchWriteOperation#RemoveFacetFromObject
   */
  readonly removeFacetFromObject?: BatchRemoveFacetFromObject;

  /**
   * @schema BatchWriteOperation#AttachPolicy
   */
  readonly attachPolicy?: BatchAttachPolicy;

  /**
   * @schema BatchWriteOperation#DetachPolicy
   */
  readonly detachPolicy?: BatchDetachPolicy;

  /**
   * @schema BatchWriteOperation#CreateIndex
   */
  readonly createIndex?: BatchCreateIndex;

  /**
   * @schema BatchWriteOperation#AttachToIndex
   */
  readonly attachToIndex?: BatchAttachToIndex;

  /**
   * @schema BatchWriteOperation#DetachFromIndex
   */
  readonly detachFromIndex?: BatchDetachFromIndex;

  /**
   * @schema BatchWriteOperation#AttachTypedLink
   */
  readonly attachTypedLink?: BatchAttachTypedLink;

  /**
   * @schema BatchWriteOperation#DetachTypedLink
   */
  readonly detachTypedLink?: BatchDetachTypedLink;

  /**
   * @schema BatchWriteOperation#UpdateLinkAttributes
   */
  readonly updateLinkAttributes?: BatchUpdateLinkAttributes;

}

/**
 * @schema BatchWriteOperationResponse
 */
export interface BatchWriteOperationResponse {
  /**
   * @schema BatchWriteOperationResponse#CreateObject
   */
  readonly createObject?: BatchCreateObjectResponse;

  /**
   * @schema BatchWriteOperationResponse#AttachObject
   */
  readonly attachObject?: BatchAttachObjectResponse;

  /**
   * @schema BatchWriteOperationResponse#DetachObject
   */
  readonly detachObject?: BatchDetachObjectResponse;

  /**
   * @schema BatchWriteOperationResponse#UpdateObjectAttributes
   */
  readonly updateObjectAttributes?: BatchUpdateObjectAttributesResponse;

  /**
   * @schema BatchWriteOperationResponse#DeleteObject
   */
  readonly deleteObject?: BatchDeleteObjectResponse;

  /**
   * @schema BatchWriteOperationResponse#AddFacetToObject
   */
  readonly addFacetToObject?: BatchAddFacetToObjectResponse;

  /**
   * @schema BatchWriteOperationResponse#RemoveFacetFromObject
   */
  readonly removeFacetFromObject?: BatchRemoveFacetFromObjectResponse;

  /**
   * @schema BatchWriteOperationResponse#AttachPolicy
   */
  readonly attachPolicy?: BatchAttachPolicyResponse;

  /**
   * @schema BatchWriteOperationResponse#DetachPolicy
   */
  readonly detachPolicy?: BatchDetachPolicyResponse;

  /**
   * @schema BatchWriteOperationResponse#CreateIndex
   */
  readonly createIndex?: BatchCreateIndexResponse;

  /**
   * @schema BatchWriteOperationResponse#AttachToIndex
   */
  readonly attachToIndex?: BatchAttachToIndexResponse;

  /**
   * @schema BatchWriteOperationResponse#DetachFromIndex
   */
  readonly detachFromIndex?: BatchDetachFromIndexResponse;

  /**
   * @schema BatchWriteOperationResponse#AttachTypedLink
   */
  readonly attachTypedLink?: BatchAttachTypedLinkResponse;

  /**
   * @schema BatchWriteOperationResponse#DetachTypedLink
   */
  readonly detachTypedLink?: BatchDetachTypedLinkResponse;

  /**
   * @schema BatchWriteOperationResponse#UpdateLinkAttributes
   */
  readonly updateLinkAttributes?: BatchUpdateLinkAttributesResponse;

}

/**
 * @schema FacetAttribute
 */
export interface FacetAttribute {
  /**
   * @schema FacetAttribute#Name
   */
  readonly name: string;

  /**
   * @schema FacetAttribute#AttributeDefinition
   */
  readonly attributeDefinition?: FacetAttributeDefinition;

  /**
   * @schema FacetAttribute#AttributeReference
   */
  readonly attributeReference?: FacetAttributeReference;

  /**
   * @schema FacetAttribute#RequiredBehavior
   */
  readonly requiredBehavior?: string;

}

/**
 * @schema AttributeKey
 */
export interface AttributeKey {
  /**
   * @schema AttributeKey#SchemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema AttributeKey#FacetName
   */
  readonly facetName: string;

  /**
   * @schema AttributeKey#Name
   */
  readonly name: string;

}

/**
 * @schema TypedLinkFacet
 */
export interface TypedLinkFacet {
  /**
   * @schema TypedLinkFacet#Name
   */
  readonly name: string;

  /**
   * @schema TypedLinkFacet#Attributes
   */
  readonly attributes: TypedLinkAttributeDefinition[];

  /**
   * @schema TypedLinkFacet#IdentityAttributeOrder
   */
  readonly identityAttributeOrder: string[];

}

/**
 * @schema Directory
 */
export interface Directory {
  /**
   * @schema Directory#Name
   */
  readonly name?: string;

  /**
   * @schema Directory#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema Directory#State
   */
  readonly state?: string;

  /**
   * @schema Directory#CreationDateTime
   */
  readonly creationDateTime?: string;

}

/**
 * @schema Facet
 */
export interface Facet {
  /**
   * @schema Facet#Name
   */
  readonly name?: string;

  /**
   * @schema Facet#ObjectType
   */
  readonly objectType?: string;

  /**
   * @schema Facet#FacetStyle
   */
  readonly facetStyle?: string;

}

/**
 * @schema IndexAttachment
 */
export interface IndexAttachment {
  /**
   * @schema IndexAttachment#IndexedAttributes
   */
  readonly indexedAttributes?: AttributeKeyAndValue[];

  /**
   * @schema IndexAttachment#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema TypedLinkAttributeRange
 */
export interface TypedLinkAttributeRange {
  /**
   * @schema TypedLinkAttributeRange#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema TypedLinkAttributeRange#Range
   */
  readonly range: TypedAttributeValueRange;

}

/**
 * @schema ObjectAttributeRange
 */
export interface ObjectAttributeRange {
  /**
   * @schema ObjectAttributeRange#AttributeKey
   */
  readonly attributeKey?: AttributeKey;

  /**
   * @schema ObjectAttributeRange#Range
   */
  readonly range?: TypedAttributeValueRange;

}

/**
 * @schema PathToObjectIdentifiers
 */
export interface PathToObjectIdentifiers {
  /**
   * @schema PathToObjectIdentifiers#Path
   */
  readonly path?: string;

  /**
   * @schema PathToObjectIdentifiers#ObjectIdentifiers
   */
  readonly objectIdentifiers?: string[];

}

/**
 * @schema ObjectIdentifierAndLinkNameTuple
 */
export interface ObjectIdentifierAndLinkNameTuple {
  /**
   * @schema ObjectIdentifierAndLinkNameTuple#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

  /**
   * @schema ObjectIdentifierAndLinkNameTuple#LinkName
   */
  readonly linkName?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema TypedLinkAttributeDefinition
 */
export interface TypedLinkAttributeDefinition {
  /**
   * @schema TypedLinkAttributeDefinition#Name
   */
  readonly name: string;

  /**
   * @schema TypedLinkAttributeDefinition#Type
   */
  readonly type: string;

  /**
   * @schema TypedLinkAttributeDefinition#DefaultValue
   */
  readonly defaultValue?: TypedAttributeValue;

  /**
   * @schema TypedLinkAttributeDefinition#IsImmutable
   */
  readonly isImmutable?: boolean;

  /**
   * @schema TypedLinkAttributeDefinition#Rules
   */
  readonly rules?: { [key: string]: Rule };

  /**
   * @schema TypedLinkAttributeDefinition#RequiredBehavior
   */
  readonly requiredBehavior: string;

}

/**
 * @schema PolicyToPath
 */
export interface PolicyToPath {
  /**
   * @schema PolicyToPath#Path
   */
  readonly path?: string;

  /**
   * @schema PolicyToPath#Policies
   */
  readonly policies?: PolicyAttachment[];

}

/**
 * @schema FacetAttributeUpdate
 */
export interface FacetAttributeUpdate {
  /**
   * @schema FacetAttributeUpdate#Attribute
   */
  readonly attribute?: FacetAttribute;

  /**
   * @schema FacetAttributeUpdate#Action
   */
  readonly action?: string;

}

/**
 * @schema LinkAttributeUpdate
 */
export interface LinkAttributeUpdate {
  /**
   * @schema LinkAttributeUpdate#AttributeKey
   */
  readonly attributeKey?: AttributeKey;

  /**
   * @schema LinkAttributeUpdate#AttributeAction
   */
  readonly attributeAction?: LinkAttributeAction;

}

/**
 * @schema ObjectAttributeUpdate
 */
export interface ObjectAttributeUpdate {
  /**
   * @schema ObjectAttributeUpdate#ObjectAttributeKey
   */
  readonly objectAttributeKey?: AttributeKey;

  /**
   * @schema ObjectAttributeUpdate#ObjectAttributeAction
   */
  readonly objectAttributeAction?: ObjectAttributeAction;

}

/**
 * @schema TypedLinkFacetAttributeUpdate
 */
export interface TypedLinkFacetAttributeUpdate {
  /**
   * @schema TypedLinkFacetAttributeUpdate#Attribute
   */
  readonly attribute: TypedLinkAttributeDefinition;

  /**
   * @schema TypedLinkFacetAttributeUpdate#Action
   */
  readonly action: string;

}

/**
 * @schema TypedAttributeValue
 */
export interface TypedAttributeValue {
  /**
   * @schema TypedAttributeValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema TypedAttributeValue#BinaryValue
   */
  readonly binaryValue?: any;

  /**
   * @schema TypedAttributeValue#BooleanValue
   */
  readonly booleanValue?: boolean;

  /**
   * @schema TypedAttributeValue#NumberValue
   */
  readonly numberValue?: string;

  /**
   * @schema TypedAttributeValue#DatetimeValue
   */
  readonly datetimeValue?: string;

}

/**
 * @schema BatchListObjectAttributes
 */
export interface BatchListObjectAttributes {
  /**
   * @schema BatchListObjectAttributes#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListObjectAttributes#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListObjectAttributes#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchListObjectAttributes#FacetFilter
   */
  readonly facetFilter?: SchemaFacet;

}

/**
 * @schema BatchListObjectChildren
 */
export interface BatchListObjectChildren {
  /**
   * @schema BatchListObjectChildren#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListObjectChildren#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListObjectChildren#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchListAttachedIndices
 */
export interface BatchListAttachedIndices {
  /**
   * @schema BatchListAttachedIndices#TargetReference
   */
  readonly targetReference: ObjectReference;

  /**
   * @schema BatchListAttachedIndices#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListAttachedIndices#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchListObjectParentPaths
 */
export interface BatchListObjectParentPaths {
  /**
   * @schema BatchListObjectParentPaths#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListObjectParentPaths#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListObjectParentPaths#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchGetObjectInformation
 */
export interface BatchGetObjectInformation {
  /**
   * @schema BatchGetObjectInformation#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema BatchGetObjectAttributes
 */
export interface BatchGetObjectAttributes {
  /**
   * @schema BatchGetObjectAttributes#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchGetObjectAttributes#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet;

  /**
   * @schema BatchGetObjectAttributes#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema BatchListObjectParents
 */
export interface BatchListObjectParents {
  /**
   * @schema BatchListObjectParents#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListObjectParents#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListObjectParents#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchListObjectPolicies
 */
export interface BatchListObjectPolicies {
  /**
   * @schema BatchListObjectPolicies#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListObjectPolicies#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListObjectPolicies#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchListPolicyAttachments
 */
export interface BatchListPolicyAttachments {
  /**
   * @schema BatchListPolicyAttachments#PolicyReference
   */
  readonly policyReference: ObjectReference;

  /**
   * @schema BatchListPolicyAttachments#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListPolicyAttachments#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchLookupPolicy
 */
export interface BatchLookupPolicy {
  /**
   * @schema BatchLookupPolicy#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchLookupPolicy#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchLookupPolicy#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchListIndex
 */
export interface BatchListIndex {
  /**
   * @schema BatchListIndex#RangesOnIndexedValues
   */
  readonly rangesOnIndexedValues?: ObjectAttributeRange[];

  /**
   * @schema BatchListIndex#IndexReference
   */
  readonly indexReference: ObjectReference;

  /**
   * @schema BatchListIndex#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema BatchListIndex#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListOutgoingTypedLinks
 */
export interface BatchListOutgoingTypedLinks {
  /**
   * @schema BatchListOutgoingTypedLinks#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListOutgoingTypedLinks#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @schema BatchListOutgoingTypedLinks#FilterTypedLink
   */
  readonly filterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @schema BatchListOutgoingTypedLinks#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListOutgoingTypedLinks#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchListIncomingTypedLinks
 */
export interface BatchListIncomingTypedLinks {
  /**
   * @schema BatchListIncomingTypedLinks#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchListIncomingTypedLinks#FilterAttributeRanges
   */
  readonly filterAttributeRanges?: TypedLinkAttributeRange[];

  /**
   * @schema BatchListIncomingTypedLinks#FilterTypedLink
   */
  readonly filterTypedLink?: TypedLinkSchemaAndFacetName;

  /**
   * @schema BatchListIncomingTypedLinks#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema BatchListIncomingTypedLinks#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema BatchGetLinkAttributes
 */
export interface BatchGetLinkAttributes {
  /**
   * @schema BatchGetLinkAttributes#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: TypedLinkSpecifier;

  /**
   * @schema BatchGetLinkAttributes#AttributeNames
   */
  readonly attributeNames: string[];

}

/**
 * @schema BatchReadSuccessfulResponse
 */
export interface BatchReadSuccessfulResponse {
  /**
   * @schema BatchReadSuccessfulResponse#ListObjectAttributes
   */
  readonly listObjectAttributes?: BatchListObjectAttributesResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListObjectChildren
   */
  readonly listObjectChildren?: BatchListObjectChildrenResponse;

  /**
   * @schema BatchReadSuccessfulResponse#GetObjectInformation
   */
  readonly getObjectInformation?: BatchGetObjectInformationResponse;

  /**
   * @schema BatchReadSuccessfulResponse#GetObjectAttributes
   */
  readonly getObjectAttributes?: BatchGetObjectAttributesResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListAttachedIndices
   */
  readonly listAttachedIndices?: BatchListAttachedIndicesResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListObjectParentPaths
   */
  readonly listObjectParentPaths?: BatchListObjectParentPathsResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListObjectPolicies
   */
  readonly listObjectPolicies?: BatchListObjectPoliciesResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListPolicyAttachments
   */
  readonly listPolicyAttachments?: BatchListPolicyAttachmentsResponse;

  /**
   * @schema BatchReadSuccessfulResponse#LookupPolicy
   */
  readonly lookupPolicy?: BatchLookupPolicyResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListIndex
   */
  readonly listIndex?: BatchListIndexResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListOutgoingTypedLinks
   */
  readonly listOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListIncomingTypedLinks
   */
  readonly listIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

  /**
   * @schema BatchReadSuccessfulResponse#GetLinkAttributes
   */
  readonly getLinkAttributes?: BatchGetLinkAttributesResponse;

  /**
   * @schema BatchReadSuccessfulResponse#ListObjectParents
   */
  readonly listObjectParents?: BatchListObjectParentsResponse;

}

/**
 * @schema BatchReadException
 */
export interface BatchReadException {
  /**
   * @schema BatchReadException#Type
   */
  readonly type?: string;

  /**
   * @schema BatchReadException#Message
   */
  readonly message?: string;

}

/**
 * @schema BatchCreateObject
 */
export interface BatchCreateObject {
  /**
   * @schema BatchCreateObject#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet[];

  /**
   * @schema BatchCreateObject#ObjectAttributeList
   */
  readonly objectAttributeList: AttributeKeyAndValue[];

  /**
   * @schema BatchCreateObject#ParentReference
   */
  readonly parentReference?: ObjectReference;

  /**
   * @schema BatchCreateObject#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema BatchCreateObject#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * @schema BatchAttachObject
 */
export interface BatchAttachObject {
  /**
   * @schema BatchAttachObject#ParentReference
   */
  readonly parentReference: ObjectReference;

  /**
   * @schema BatchAttachObject#ChildReference
   */
  readonly childReference: ObjectReference;

  /**
   * @schema BatchAttachObject#LinkName
   */
  readonly linkName: string;

}

/**
 * @schema BatchDetachObject
 */
export interface BatchDetachObject {
  /**
   * @schema BatchDetachObject#ParentReference
   */
  readonly parentReference: ObjectReference;

  /**
   * @schema BatchDetachObject#LinkName
   */
  readonly linkName: string;

  /**
   * @schema BatchDetachObject#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * @schema BatchUpdateObjectAttributes
 */
export interface BatchUpdateObjectAttributes {
  /**
   * @schema BatchUpdateObjectAttributes#ObjectReference
   */
  readonly objectReference: ObjectReference;

  /**
   * @schema BatchUpdateObjectAttributes#AttributeUpdates
   */
  readonly attributeUpdates: ObjectAttributeUpdate[];

}

/**
 * @schema BatchDeleteObject
 */
export interface BatchDeleteObject {
  /**
   * @schema BatchDeleteObject#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema BatchAddFacetToObject
 */
export interface BatchAddFacetToObject {
  /**
   * @schema BatchAddFacetToObject#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet;

  /**
   * @schema BatchAddFacetToObject#ObjectAttributeList
   */
  readonly objectAttributeList: AttributeKeyAndValue[];

  /**
   * @schema BatchAddFacetToObject#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema BatchRemoveFacetFromObject
 */
export interface BatchRemoveFacetFromObject {
  /**
   * @schema BatchRemoveFacetFromObject#SchemaFacet
   */
  readonly schemaFacet: SchemaFacet;

  /**
   * @schema BatchRemoveFacetFromObject#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema BatchAttachPolicy
 */
export interface BatchAttachPolicy {
  /**
   * @schema BatchAttachPolicy#PolicyReference
   */
  readonly policyReference: ObjectReference;

  /**
   * @schema BatchAttachPolicy#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema BatchDetachPolicy
 */
export interface BatchDetachPolicy {
  /**
   * @schema BatchDetachPolicy#PolicyReference
   */
  readonly policyReference: ObjectReference;

  /**
   * @schema BatchDetachPolicy#ObjectReference
   */
  readonly objectReference: ObjectReference;

}

/**
 * @schema BatchCreateIndex
 */
export interface BatchCreateIndex {
  /**
   * @schema BatchCreateIndex#OrderedIndexedAttributeList
   */
  readonly orderedIndexedAttributeList: AttributeKey[];

  /**
   * @schema BatchCreateIndex#IsUnique
   */
  readonly isUnique: boolean;

  /**
   * @schema BatchCreateIndex#ParentReference
   */
  readonly parentReference?: ObjectReference;

  /**
   * @schema BatchCreateIndex#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema BatchCreateIndex#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * @schema BatchAttachToIndex
 */
export interface BatchAttachToIndex {
  /**
   * @schema BatchAttachToIndex#IndexReference
   */
  readonly indexReference: ObjectReference;

  /**
   * @schema BatchAttachToIndex#TargetReference
   */
  readonly targetReference: ObjectReference;

}

/**
 * @schema BatchDetachFromIndex
 */
export interface BatchDetachFromIndex {
  /**
   * @schema BatchDetachFromIndex#IndexReference
   */
  readonly indexReference: ObjectReference;

  /**
   * @schema BatchDetachFromIndex#TargetReference
   */
  readonly targetReference: ObjectReference;

}

/**
 * @schema BatchAttachTypedLink
 */
export interface BatchAttachTypedLink {
  /**
   * @schema BatchAttachTypedLink#SourceObjectReference
   */
  readonly sourceObjectReference: ObjectReference;

  /**
   * @schema BatchAttachTypedLink#TargetObjectReference
   */
  readonly targetObjectReference: ObjectReference;

  /**
   * @schema BatchAttachTypedLink#TypedLinkFacet
   */
  readonly typedLinkFacet: TypedLinkSchemaAndFacetName;

  /**
   * @schema BatchAttachTypedLink#Attributes
   */
  readonly attributes: AttributeNameAndValue[];

}

/**
 * @schema BatchDetachTypedLink
 */
export interface BatchDetachTypedLink {
  /**
   * @schema BatchDetachTypedLink#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: TypedLinkSpecifier;

}

/**
 * @schema BatchUpdateLinkAttributes
 */
export interface BatchUpdateLinkAttributes {
  /**
   * @schema BatchUpdateLinkAttributes#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier: TypedLinkSpecifier;

  /**
   * @schema BatchUpdateLinkAttributes#AttributeUpdates
   */
  readonly attributeUpdates: LinkAttributeUpdate[];

}

/**
 * @schema BatchCreateObjectResponse
 */
export interface BatchCreateObjectResponse {
  /**
   * @schema BatchCreateObjectResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema BatchAttachObjectResponse
 */
export interface BatchAttachObjectResponse {
  /**
   * @schema BatchAttachObjectResponse#attachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema BatchDetachObjectResponse
 */
export interface BatchDetachObjectResponse {
  /**
   * @schema BatchDetachObjectResponse#detachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema BatchUpdateObjectAttributesResponse
 */
export interface BatchUpdateObjectAttributesResponse {
  /**
   * @schema BatchUpdateObjectAttributesResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema BatchDeleteObjectResponse
 */
export interface BatchDeleteObjectResponse {
}

/**
 * @schema BatchAddFacetToObjectResponse
 */
export interface BatchAddFacetToObjectResponse {
}

/**
 * @schema BatchRemoveFacetFromObjectResponse
 */
export interface BatchRemoveFacetFromObjectResponse {
}

/**
 * @schema BatchAttachPolicyResponse
 */
export interface BatchAttachPolicyResponse {
}

/**
 * @schema BatchDetachPolicyResponse
 */
export interface BatchDetachPolicyResponse {
}

/**
 * @schema BatchCreateIndexResponse
 */
export interface BatchCreateIndexResponse {
  /**
   * @schema BatchCreateIndexResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema BatchAttachToIndexResponse
 */
export interface BatchAttachToIndexResponse {
  /**
   * @schema BatchAttachToIndexResponse#AttachedObjectIdentifier
   */
  readonly attachedObjectIdentifier?: string;

}

/**
 * @schema BatchDetachFromIndexResponse
 */
export interface BatchDetachFromIndexResponse {
  /**
   * @schema BatchDetachFromIndexResponse#DetachedObjectIdentifier
   */
  readonly detachedObjectIdentifier?: string;

}

/**
 * @schema BatchAttachTypedLinkResponse
 */
export interface BatchAttachTypedLinkResponse {
  /**
   * @schema BatchAttachTypedLinkResponse#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: TypedLinkSpecifier;

}

/**
 * @schema BatchDetachTypedLinkResponse
 */
export interface BatchDetachTypedLinkResponse {
}

/**
 * @schema BatchUpdateLinkAttributesResponse
 */
export interface BatchUpdateLinkAttributesResponse {
}

/**
 * @schema FacetAttributeDefinition
 */
export interface FacetAttributeDefinition {
  /**
   * @schema FacetAttributeDefinition#Type
   */
  readonly type: string;

  /**
   * @schema FacetAttributeDefinition#DefaultValue
   */
  readonly defaultValue?: TypedAttributeValue;

  /**
   * @schema FacetAttributeDefinition#IsImmutable
   */
  readonly isImmutable?: boolean;

  /**
   * @schema FacetAttributeDefinition#Rules
   */
  readonly rules?: { [key: string]: Rule };

}

/**
 * @schema FacetAttributeReference
 */
export interface FacetAttributeReference {
  /**
   * @schema FacetAttributeReference#TargetFacetName
   */
  readonly targetFacetName: string;

  /**
   * @schema FacetAttributeReference#TargetAttributeName
   */
  readonly targetAttributeName: string;

}

/**
 * @schema TypedAttributeValueRange
 */
export interface TypedAttributeValueRange {
  /**
   * @schema TypedAttributeValueRange#StartMode
   */
  readonly startMode: string;

  /**
   * @schema TypedAttributeValueRange#StartValue
   */
  readonly startValue?: TypedAttributeValue;

  /**
   * @schema TypedAttributeValueRange#EndMode
   */
  readonly endMode: string;

  /**
   * @schema TypedAttributeValueRange#EndValue
   */
  readonly endValue?: TypedAttributeValue;

}

/**
 * @schema Rule
 */
export interface Rule {
  /**
   * @schema Rule#Type
   */
  readonly type?: string;

  /**
   * @schema Rule#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema PolicyAttachment
 */
export interface PolicyAttachment {
  /**
   * @schema PolicyAttachment#PolicyId
   */
  readonly policyId?: string;

  /**
   * @schema PolicyAttachment#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

  /**
   * @schema PolicyAttachment#PolicyType
   */
  readonly policyType?: string;

}

/**
 * @schema LinkAttributeAction
 */
export interface LinkAttributeAction {
  /**
   * @schema LinkAttributeAction#AttributeActionType
   */
  readonly attributeActionType?: string;

  /**
   * @schema LinkAttributeAction#AttributeUpdateValue
   */
  readonly attributeUpdateValue?: TypedAttributeValue;

}

/**
 * @schema ObjectAttributeAction
 */
export interface ObjectAttributeAction {
  /**
   * @schema ObjectAttributeAction#ObjectAttributeActionType
   */
  readonly objectAttributeActionType?: string;

  /**
   * @schema ObjectAttributeAction#ObjectAttributeUpdateValue
   */
  readonly objectAttributeUpdateValue?: TypedAttributeValue;

}

/**
 * @schema BatchListObjectAttributesResponse
 */
export interface BatchListObjectAttributesResponse {
  /**
   * @schema BatchListObjectAttributesResponse#Attributes
   */
  readonly attributes?: AttributeKeyAndValue[];

  /**
   * @schema BatchListObjectAttributesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListObjectChildrenResponse
 */
export interface BatchListObjectChildrenResponse {
  /**
   * @schema BatchListObjectChildrenResponse#Children
   */
  readonly children?: { [key: string]: string };

  /**
   * @schema BatchListObjectChildrenResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchGetObjectInformationResponse
 */
export interface BatchGetObjectInformationResponse {
  /**
   * @schema BatchGetObjectInformationResponse#SchemaFacets
   */
  readonly schemaFacets?: SchemaFacet[];

  /**
   * @schema BatchGetObjectInformationResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

}

/**
 * @schema BatchGetObjectAttributesResponse
 */
export interface BatchGetObjectAttributesResponse {
  /**
   * @schema BatchGetObjectAttributesResponse#Attributes
   */
  readonly attributes?: AttributeKeyAndValue[];

}

/**
 * @schema BatchListAttachedIndicesResponse
 */
export interface BatchListAttachedIndicesResponse {
  /**
   * @schema BatchListAttachedIndicesResponse#IndexAttachments
   */
  readonly indexAttachments?: IndexAttachment[];

  /**
   * @schema BatchListAttachedIndicesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListObjectParentPathsResponse
 */
export interface BatchListObjectParentPathsResponse {
  /**
   * @schema BatchListObjectParentPathsResponse#PathToObjectIdentifiersList
   */
  readonly pathToObjectIdentifiersList?: PathToObjectIdentifiers[];

  /**
   * @schema BatchListObjectParentPathsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListObjectPoliciesResponse
 */
export interface BatchListObjectPoliciesResponse {
  /**
   * @schema BatchListObjectPoliciesResponse#AttachedPolicyIds
   */
  readonly attachedPolicyIds?: string[];

  /**
   * @schema BatchListObjectPoliciesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListPolicyAttachmentsResponse
 */
export interface BatchListPolicyAttachmentsResponse {
  /**
   * @schema BatchListPolicyAttachmentsResponse#ObjectIdentifiers
   */
  readonly objectIdentifiers?: string[];

  /**
   * @schema BatchListPolicyAttachmentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchLookupPolicyResponse
 */
export interface BatchLookupPolicyResponse {
  /**
   * @schema BatchLookupPolicyResponse#PolicyToPathList
   */
  readonly policyToPathList?: PolicyToPath[];

  /**
   * @schema BatchLookupPolicyResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListIndexResponse
 */
export interface BatchListIndexResponse {
  /**
   * @schema BatchListIndexResponse#IndexAttachments
   */
  readonly indexAttachments?: IndexAttachment[];

  /**
   * @schema BatchListIndexResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListOutgoingTypedLinksResponse
 */
export interface BatchListOutgoingTypedLinksResponse {
  /**
   * @schema BatchListOutgoingTypedLinksResponse#TypedLinkSpecifiers
   */
  readonly typedLinkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @schema BatchListOutgoingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchListIncomingTypedLinksResponse
 */
export interface BatchListIncomingTypedLinksResponse {
  /**
   * @schema BatchListIncomingTypedLinksResponse#LinkSpecifiers
   */
  readonly linkSpecifiers?: TypedLinkSpecifier[];

  /**
   * @schema BatchListIncomingTypedLinksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema BatchGetLinkAttributesResponse
 */
export interface BatchGetLinkAttributesResponse {
  /**
   * @schema BatchGetLinkAttributesResponse#Attributes
   */
  readonly attributes?: AttributeKeyAndValue[];

}

/**
 * @schema BatchListObjectParentsResponse
 */
export interface BatchListObjectParentsResponse {
  /**
   * @schema BatchListObjectParentsResponse#ParentLinks
   */
  readonly parentLinks?: ObjectIdentifierAndLinkNameTuple[];

  /**
   * @schema BatchListObjectParentsResponse#NextToken
   */
  readonly nextToken?: string;

}
