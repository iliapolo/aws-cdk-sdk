/**
 * @schema CloudDirectoryAddFacetToObjectRequest
 */
export interface CloudDirectoryAddFacetToObjectRequest {
  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#ObjectAttributeList
   */
  readonly objectAttributeList?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryAddFacetToObjectRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryAddFacetToObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAddFacetToObjectRequest(obj: CloudDirectoryAddFacetToObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'SchemaFacet': toJson_CloudDirectorySchemaFacet(obj.schemaFacet),
    'ObjectAttributeList': obj.objectAttributeList?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAddFacetToObjectResponse
 */
export interface CloudDirectoryAddFacetToObjectResponse {
}

/**
 * Converts an object of type 'CloudDirectoryAddFacetToObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAddFacetToObjectResponse(obj: CloudDirectoryAddFacetToObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryApplySchemaRequest
 */
export interface CloudDirectoryApplySchemaRequest {
  /**
   * @schema CloudDirectoryApplySchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn?: string;

  /**
   * @schema CloudDirectoryApplySchemaRequest#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryApplySchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryApplySchemaRequest(obj: CloudDirectoryApplySchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublishedSchemaArn': obj.publishedSchemaArn,
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryApplySchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryApplySchemaResponse(obj: CloudDirectoryApplySchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppliedSchemaArn': obj.appliedSchemaArn,
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttachObjectRequest
 */
export interface CloudDirectoryAttachObjectRequest {
  /**
   * @schema CloudDirectoryAttachObjectRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryAttachObjectRequest#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachObjectRequest#ChildReference
   */
  readonly childReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachObjectRequest#LinkName
   */
  readonly linkName?: string;

}

/**
 * Converts an object of type 'CloudDirectoryAttachObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachObjectRequest(obj: CloudDirectoryAttachObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'ChildReference': toJson_CloudDirectoryObjectReference(obj.childReference),
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryAttachObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachObjectResponse(obj: CloudDirectoryAttachObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedObjectIdentifier': obj.attachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttachPolicyRequest
 */
export interface CloudDirectoryAttachPolicyRequest {
  /**
   * @schema CloudDirectoryAttachPolicyRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryAttachPolicyRequest#PolicyReference
   */
  readonly policyReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachPolicyRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryAttachPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachPolicyRequest(obj: CloudDirectoryAttachPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'PolicyReference': toJson_CloudDirectoryObjectReference(obj.policyReference),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttachPolicyResponse
 */
export interface CloudDirectoryAttachPolicyResponse {
}

/**
 * Converts an object of type 'CloudDirectoryAttachPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachPolicyResponse(obj: CloudDirectoryAttachPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttachToIndexRequest
 */
export interface CloudDirectoryAttachToIndexRequest {
  /**
   * @schema CloudDirectoryAttachToIndexRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryAttachToIndexRequest#IndexReference
   */
  readonly indexReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachToIndexRequest#TargetReference
   */
  readonly targetReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryAttachToIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachToIndexRequest(obj: CloudDirectoryAttachToIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'IndexReference': toJson_CloudDirectoryObjectReference(obj.indexReference),
    'TargetReference': toJson_CloudDirectoryObjectReference(obj.targetReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryAttachToIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachToIndexResponse(obj: CloudDirectoryAttachToIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedObjectIdentifier': obj.attachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttachTypedLinkRequest
 */
export interface CloudDirectoryAttachTypedLinkRequest {
  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#SourceObjectReference
   */
  readonly sourceObjectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#TargetObjectReference
   */
  readonly targetObjectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#TypedLinkFacet
   */
  readonly typedLinkFacet?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryAttachTypedLinkRequest#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeNameAndValue[];

}

/**
 * Converts an object of type 'CloudDirectoryAttachTypedLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachTypedLinkRequest(obj: CloudDirectoryAttachTypedLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'SourceObjectReference': toJson_CloudDirectoryObjectReference(obj.sourceObjectReference),
    'TargetObjectReference': toJson_CloudDirectoryObjectReference(obj.targetObjectReference),
    'TypedLinkFacet': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.typedLinkFacet),
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeNameAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryAttachTypedLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttachTypedLinkResponse(obj: CloudDirectoryAttachTypedLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchReadRequest
 */
export interface CloudDirectoryBatchReadRequest {
  /**
   * @schema CloudDirectoryBatchReadRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryBatchReadRequest#Operations
   */
  readonly operations?: CloudDirectoryBatchReadOperation[];

  /**
   * @schema CloudDirectoryBatchReadRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * Converts an object of type 'CloudDirectoryBatchReadRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchReadRequest(obj: CloudDirectoryBatchReadRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'Operations': obj.operations?.map(y => toJson_CloudDirectoryBatchReadOperation(y)),
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchReadResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchReadResponse(obj: CloudDirectoryBatchReadResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Responses': obj.responses?.map(y => toJson_CloudDirectoryBatchReadOperationResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchWriteRequest
 */
export interface CloudDirectoryBatchWriteRequest {
  /**
   * @schema CloudDirectoryBatchWriteRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryBatchWriteRequest#Operations
   */
  readonly operations?: CloudDirectoryBatchWriteOperation[];

}

/**
 * Converts an object of type 'CloudDirectoryBatchWriteRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchWriteRequest(obj: CloudDirectoryBatchWriteRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'Operations': obj.operations?.map(y => toJson_CloudDirectoryBatchWriteOperation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchWriteResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchWriteResponse(obj: CloudDirectoryBatchWriteResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Responses': obj.responses?.map(y => toJson_CloudDirectoryBatchWriteOperationResponse(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateDirectoryRequest
 */
export interface CloudDirectoryCreateDirectoryRequest {
  /**
   * @schema CloudDirectoryCreateDirectoryRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryCreateDirectoryRequest#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryCreateDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateDirectoryRequest(obj: CloudDirectoryCreateDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateDirectoryResponse
 */
export interface CloudDirectoryCreateDirectoryResponse {
  /**
   * @schema CloudDirectoryCreateDirectoryResponse#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryCreateDirectoryResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryCreateDirectoryResponse#ObjectIdentifier
   */
  readonly objectIdentifier?: string;

  /**
   * @schema CloudDirectoryCreateDirectoryResponse#AppliedSchemaArn
   */
  readonly appliedSchemaArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryCreateDirectoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateDirectoryResponse(obj: CloudDirectoryCreateDirectoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'Name': obj.name,
    'ObjectIdentifier': obj.objectIdentifier,
    'AppliedSchemaArn': obj.appliedSchemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateFacetRequest
 */
export interface CloudDirectoryCreateFacetRequest {
  /**
   * @schema CloudDirectoryCreateFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryCreateFacetRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'CloudDirectoryCreateFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateFacetRequest(obj: CloudDirectoryCreateFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryFacetAttribute(y)),
    'ObjectType': obj.objectType,
    'FacetStyle': obj.facetStyle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateFacetResponse
 */
export interface CloudDirectoryCreateFacetResponse {
}

/**
 * Converts an object of type 'CloudDirectoryCreateFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateFacetResponse(obj: CloudDirectoryCreateFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateIndexRequest
 */
export interface CloudDirectoryCreateIndexRequest {
  /**
   * @schema CloudDirectoryCreateIndexRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryCreateIndexRequest#OrderedIndexedAttributeList
   */
  readonly orderedIndexedAttributeList?: CloudDirectoryAttributeKey[];

  /**
   * @schema CloudDirectoryCreateIndexRequest#IsUnique
   */
  readonly isUnique?: boolean;

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
 * Converts an object of type 'CloudDirectoryCreateIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateIndexRequest(obj: CloudDirectoryCreateIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'OrderedIndexedAttributeList': obj.orderedIndexedAttributeList?.map(y => toJson_CloudDirectoryAttributeKey(y)),
    'IsUnique': obj.isUnique,
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryCreateIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateIndexResponse(obj: CloudDirectoryCreateIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateObjectRequest
 */
export interface CloudDirectoryCreateObjectRequest {
  /**
   * @schema CloudDirectoryCreateObjectRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryCreateObjectRequest#SchemaFacets
   */
  readonly schemaFacets?: CloudDirectorySchemaFacet[];

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
 * Converts an object of type 'CloudDirectoryCreateObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateObjectRequest(obj: CloudDirectoryCreateObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'SchemaFacets': obj.schemaFacets?.map(y => toJson_CloudDirectorySchemaFacet(y)),
    'ObjectAttributeList': obj.objectAttributeList?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryCreateObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateObjectResponse(obj: CloudDirectoryCreateObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateSchemaRequest
 */
export interface CloudDirectoryCreateSchemaRequest {
  /**
   * @schema CloudDirectoryCreateSchemaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryCreateSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateSchemaRequest(obj: CloudDirectoryCreateSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryCreateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateSchemaResponse(obj: CloudDirectoryCreateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateTypedLinkFacetRequest
 */
export interface CloudDirectoryCreateTypedLinkFacetRequest {
  /**
   * @schema CloudDirectoryCreateTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryCreateTypedLinkFacetRequest#Facet
   */
  readonly facet?: CloudDirectoryTypedLinkFacet;

}

/**
 * Converts an object of type 'CloudDirectoryCreateTypedLinkFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateTypedLinkFacetRequest(obj: CloudDirectoryCreateTypedLinkFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Facet': toJson_CloudDirectoryTypedLinkFacet(obj.facet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryCreateTypedLinkFacetResponse
 */
export interface CloudDirectoryCreateTypedLinkFacetResponse {
}

/**
 * Converts an object of type 'CloudDirectoryCreateTypedLinkFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryCreateTypedLinkFacetResponse(obj: CloudDirectoryCreateTypedLinkFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteDirectoryRequest
 */
export interface CloudDirectoryDeleteDirectoryRequest {
  /**
   * @schema CloudDirectoryDeleteDirectoryRequest#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDeleteDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteDirectoryRequest(obj: CloudDirectoryDeleteDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteDirectoryResponse
 */
export interface CloudDirectoryDeleteDirectoryResponse {
  /**
   * @schema CloudDirectoryDeleteDirectoryResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDeleteDirectoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteDirectoryResponse(obj: CloudDirectoryDeleteDirectoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteFacetRequest
 */
export interface CloudDirectoryDeleteFacetRequest {
  /**
   * @schema CloudDirectoryDeleteFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryDeleteFacetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDeleteFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteFacetRequest(obj: CloudDirectoryDeleteFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteFacetResponse
 */
export interface CloudDirectoryDeleteFacetResponse {
}

/**
 * Converts an object of type 'CloudDirectoryDeleteFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteFacetResponse(obj: CloudDirectoryDeleteFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteObjectRequest
 */
export interface CloudDirectoryDeleteObjectRequest {
  /**
   * @schema CloudDirectoryDeleteObjectRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryDeleteObjectRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryDeleteObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteObjectRequest(obj: CloudDirectoryDeleteObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteObjectResponse
 */
export interface CloudDirectoryDeleteObjectResponse {
}

/**
 * Converts an object of type 'CloudDirectoryDeleteObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteObjectResponse(obj: CloudDirectoryDeleteObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteSchemaRequest
 */
export interface CloudDirectoryDeleteSchemaRequest {
  /**
   * @schema CloudDirectoryDeleteSchemaRequest#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDeleteSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteSchemaRequest(obj: CloudDirectoryDeleteSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryDeleteSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteSchemaResponse(obj: CloudDirectoryDeleteSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteTypedLinkFacetRequest
 */
export interface CloudDirectoryDeleteTypedLinkFacetRequest {
  /**
   * @schema CloudDirectoryDeleteTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryDeleteTypedLinkFacetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDeleteTypedLinkFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteTypedLinkFacetRequest(obj: CloudDirectoryDeleteTypedLinkFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDeleteTypedLinkFacetResponse
 */
export interface CloudDirectoryDeleteTypedLinkFacetResponse {
}

/**
 * Converts an object of type 'CloudDirectoryDeleteTypedLinkFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDeleteTypedLinkFacetResponse(obj: CloudDirectoryDeleteTypedLinkFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDetachFromIndexRequest
 */
export interface CloudDirectoryDetachFromIndexRequest {
  /**
   * @schema CloudDirectoryDetachFromIndexRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryDetachFromIndexRequest#IndexReference
   */
  readonly indexReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryDetachFromIndexRequest#TargetReference
   */
  readonly targetReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryDetachFromIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachFromIndexRequest(obj: CloudDirectoryDetachFromIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'IndexReference': toJson_CloudDirectoryObjectReference(obj.indexReference),
    'TargetReference': toJson_CloudDirectoryObjectReference(obj.targetReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryDetachFromIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachFromIndexResponse(obj: CloudDirectoryDetachFromIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetachedObjectIdentifier': obj.detachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDetachObjectRequest
 */
export interface CloudDirectoryDetachObjectRequest {
  /**
   * @schema CloudDirectoryDetachObjectRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryDetachObjectRequest#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryDetachObjectRequest#LinkName
   */
  readonly linkName?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDetachObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachObjectRequest(obj: CloudDirectoryDetachObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryDetachObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachObjectResponse(obj: CloudDirectoryDetachObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetachedObjectIdentifier': obj.detachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDetachPolicyRequest
 */
export interface CloudDirectoryDetachPolicyRequest {
  /**
   * @schema CloudDirectoryDetachPolicyRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryDetachPolicyRequest#PolicyReference
   */
  readonly policyReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryDetachPolicyRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryDetachPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachPolicyRequest(obj: CloudDirectoryDetachPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'PolicyReference': toJson_CloudDirectoryObjectReference(obj.policyReference),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDetachPolicyResponse
 */
export interface CloudDirectoryDetachPolicyResponse {
}

/**
 * Converts an object of type 'CloudDirectoryDetachPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachPolicyResponse(obj: CloudDirectoryDetachPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDetachTypedLinkRequest
 */
export interface CloudDirectoryDetachTypedLinkRequest {
  /**
   * @schema CloudDirectoryDetachTypedLinkRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryDetachTypedLinkRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

}

/**
 * Converts an object of type 'CloudDirectoryDetachTypedLinkRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDetachTypedLinkRequest(obj: CloudDirectoryDetachTypedLinkRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDisableDirectoryRequest
 */
export interface CloudDirectoryDisableDirectoryRequest {
  /**
   * @schema CloudDirectoryDisableDirectoryRequest#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDisableDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDisableDirectoryRequest(obj: CloudDirectoryDisableDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryDisableDirectoryResponse
 */
export interface CloudDirectoryDisableDirectoryResponse {
  /**
   * @schema CloudDirectoryDisableDirectoryResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryDisableDirectoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDisableDirectoryResponse(obj: CloudDirectoryDisableDirectoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryEnableDirectoryRequest
 */
export interface CloudDirectoryEnableDirectoryRequest {
  /**
   * @schema CloudDirectoryEnableDirectoryRequest#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryEnableDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryEnableDirectoryRequest(obj: CloudDirectoryEnableDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryEnableDirectoryResponse
 */
export interface CloudDirectoryEnableDirectoryResponse {
  /**
   * @schema CloudDirectoryEnableDirectoryResponse#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryEnableDirectoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryEnableDirectoryResponse(obj: CloudDirectoryEnableDirectoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetAppliedSchemaVersionRequest
 */
export interface CloudDirectoryGetAppliedSchemaVersionRequest {
  /**
   * @schema CloudDirectoryGetAppliedSchemaVersionRequest#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetAppliedSchemaVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetAppliedSchemaVersionRequest(obj: CloudDirectoryGetAppliedSchemaVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetAppliedSchemaVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetAppliedSchemaVersionResponse(obj: CloudDirectoryGetAppliedSchemaVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppliedSchemaArn': obj.appliedSchemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetDirectoryRequest
 */
export interface CloudDirectoryGetDirectoryRequest {
  /**
   * @schema CloudDirectoryGetDirectoryRequest#DirectoryArn
   */
  readonly directoryArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetDirectoryRequest(obj: CloudDirectoryGetDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetDirectoryResponse
 */
export interface CloudDirectoryGetDirectoryResponse {
  /**
   * @schema CloudDirectoryGetDirectoryResponse#Directory
   */
  readonly directory?: CloudDirectoryDirectory;

}

/**
 * Converts an object of type 'CloudDirectoryGetDirectoryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetDirectoryResponse(obj: CloudDirectoryGetDirectoryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Directory': toJson_CloudDirectoryDirectory(obj.directory),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetFacetRequest
 */
export interface CloudDirectoryGetFacetRequest {
  /**
   * @schema CloudDirectoryGetFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryGetFacetRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetFacetRequest(obj: CloudDirectoryGetFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetFacetResponse(obj: CloudDirectoryGetFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Facet': toJson_CloudDirectoryFacet(obj.facet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetLinkAttributesRequest
 */
export interface CloudDirectoryGetLinkAttributesRequest {
  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

  /**
   * @schema CloudDirectoryGetLinkAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetLinkAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetLinkAttributesRequest(obj: CloudDirectoryGetLinkAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
    'AttributeNames': obj.attributeNames?.map(y => y),
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetLinkAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetLinkAttributesResponse(obj: CloudDirectoryGetLinkAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetObjectAttributesRequest
 */
export interface CloudDirectoryGetObjectAttributesRequest {
  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryGetObjectAttributesRequest#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'CloudDirectoryGetObjectAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetObjectAttributesRequest(obj: CloudDirectoryGetObjectAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'ConsistencyLevel': obj.consistencyLevel,
    'SchemaFacet': toJson_CloudDirectorySchemaFacet(obj.schemaFacet),
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetObjectAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetObjectAttributesResponse(obj: CloudDirectoryGetObjectAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetObjectInformationRequest
 */
export interface CloudDirectoryGetObjectInformationRequest {
  /**
   * @schema CloudDirectoryGetObjectInformationRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryGetObjectInformationRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryGetObjectInformationRequest#ConsistencyLevel
   */
  readonly consistencyLevel?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetObjectInformationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetObjectInformationRequest(obj: CloudDirectoryGetObjectInformationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetObjectInformationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetObjectInformationResponse(obj: CloudDirectoryGetObjectInformationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaFacets': obj.schemaFacets?.map(y => toJson_CloudDirectorySchemaFacet(y)),
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetSchemaAsJsonRequest
 */
export interface CloudDirectoryGetSchemaAsJsonRequest {
  /**
   * @schema CloudDirectoryGetSchemaAsJsonRequest#SchemaArn
   */
  readonly schemaArn?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetSchemaAsJsonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetSchemaAsJsonRequest(obj: CloudDirectoryGetSchemaAsJsonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetSchemaAsJsonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetSchemaAsJsonResponse(obj: CloudDirectoryGetSchemaAsJsonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Document': obj.document,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryGetTypedLinkFacetInformationRequest
 */
export interface CloudDirectoryGetTypedLinkFacetInformationRequest {
  /**
   * @schema CloudDirectoryGetTypedLinkFacetInformationRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryGetTypedLinkFacetInformationRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryGetTypedLinkFacetInformationRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetTypedLinkFacetInformationRequest(obj: CloudDirectoryGetTypedLinkFacetInformationRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryGetTypedLinkFacetInformationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryGetTypedLinkFacetInformationResponse(obj: CloudDirectoryGetTypedLinkFacetInformationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IdentityAttributeOrder': obj.identityAttributeOrder?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListAppliedSchemaArnsRequest
 */
export interface CloudDirectoryListAppliedSchemaArnsRequest {
  /**
   * @schema CloudDirectoryListAppliedSchemaArnsRequest#DirectoryArn
   */
  readonly directoryArn?: string;

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
 * Converts an object of type 'CloudDirectoryListAppliedSchemaArnsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListAppliedSchemaArnsRequest(obj: CloudDirectoryListAppliedSchemaArnsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'SchemaArn': obj.schemaArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListAppliedSchemaArnsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListAppliedSchemaArnsResponse(obj: CloudDirectoryListAppliedSchemaArnsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArns': obj.schemaArns?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListAttachedIndicesRequest
 */
export interface CloudDirectoryListAttachedIndicesRequest {
  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListAttachedIndicesRequest#TargetReference
   */
  readonly targetReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListAttachedIndicesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListAttachedIndicesRequest(obj: CloudDirectoryListAttachedIndicesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'TargetReference': toJson_CloudDirectoryObjectReference(obj.targetReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListAttachedIndicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListAttachedIndicesResponse(obj: CloudDirectoryListAttachedIndicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexAttachments': obj.indexAttachments?.map(y => toJson_CloudDirectoryIndexAttachment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListDevelopmentSchemaArnsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListDevelopmentSchemaArnsRequest(obj: CloudDirectoryListDevelopmentSchemaArnsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListDevelopmentSchemaArnsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListDevelopmentSchemaArnsResponse(obj: CloudDirectoryListDevelopmentSchemaArnsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArns': obj.schemaArns?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListDirectoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListDirectoriesRequest(obj: CloudDirectoryListDirectoriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'state': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListDirectoriesResponse
 */
export interface CloudDirectoryListDirectoriesResponse {
  /**
   * @schema CloudDirectoryListDirectoriesResponse#Directories
   */
  readonly directories?: CloudDirectoryDirectory[];

  /**
   * @schema CloudDirectoryListDirectoriesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudDirectoryListDirectoriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListDirectoriesResponse(obj: CloudDirectoryListDirectoriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Directories': obj.directories?.map(y => toJson_CloudDirectoryDirectory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListFacetAttributesRequest
 */
export interface CloudDirectoryListFacetAttributesRequest {
  /**
   * @schema CloudDirectoryListFacetAttributesRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryListFacetAttributesRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'CloudDirectoryListFacetAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListFacetAttributesRequest(obj: CloudDirectoryListFacetAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListFacetAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListFacetAttributesResponse(obj: CloudDirectoryListFacetAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryFacetAttribute(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListFacetNamesRequest
 */
export interface CloudDirectoryListFacetNamesRequest {
  /**
   * @schema CloudDirectoryListFacetNamesRequest#SchemaArn
   */
  readonly schemaArn?: string;

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
 * Converts an object of type 'CloudDirectoryListFacetNamesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListFacetNamesRequest(obj: CloudDirectoryListFacetNamesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListFacetNamesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListFacetNamesResponse(obj: CloudDirectoryListFacetNamesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FacetNames': obj.facetNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListIncomingTypedLinksRequest
 */
export interface CloudDirectoryListIncomingTypedLinksRequest {
  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListIncomingTypedLinksRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListIncomingTypedLinksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListIncomingTypedLinksRequest(obj: CloudDirectoryListIncomingTypedLinksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'FilterAttributeRanges': obj.filterAttributeRanges?.map(y => toJson_CloudDirectoryTypedLinkAttributeRange(y)),
    'FilterTypedLink': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.filterTypedLink),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListIncomingTypedLinksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListIncomingTypedLinksResponse(obj: CloudDirectoryListIncomingTypedLinksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkSpecifiers': obj.linkSpecifiers?.map(y => toJson_CloudDirectoryTypedLinkSpecifier(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListIndexRequest
 */
export interface CloudDirectoryListIndexRequest {
  /**
   * @schema CloudDirectoryListIndexRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListIndexRequest#RangesOnIndexedValues
   */
  readonly rangesOnIndexedValues?: CloudDirectoryObjectAttributeRange[];

  /**
   * @schema CloudDirectoryListIndexRequest#IndexReference
   */
  readonly indexReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListIndexRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListIndexRequest(obj: CloudDirectoryListIndexRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'RangesOnIndexedValues': obj.rangesOnIndexedValues?.map(y => toJson_CloudDirectoryObjectAttributeRange(y)),
    'IndexReference': toJson_CloudDirectoryObjectReference(obj.indexReference),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListIndexResponse(obj: CloudDirectoryListIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexAttachments': obj.indexAttachments?.map(y => toJson_CloudDirectoryIndexAttachment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListManagedSchemaArnsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListManagedSchemaArnsRequest(obj: CloudDirectoryListManagedSchemaArnsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListManagedSchemaArnsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListManagedSchemaArnsResponse(obj: CloudDirectoryListManagedSchemaArnsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArns': obj.schemaArns?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListObjectAttributesRequest
 */
export interface CloudDirectoryListObjectAttributesRequest {
  /**
   * @schema CloudDirectoryListObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListObjectAttributesRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListObjectAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectAttributesRequest(obj: CloudDirectoryListObjectAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
    'FacetFilter': toJson_CloudDirectorySchemaFacet(obj.facetFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListObjectAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectAttributesResponse(obj: CloudDirectoryListObjectAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListObjectChildrenRequest
 */
export interface CloudDirectoryListObjectChildrenRequest {
  /**
   * @schema CloudDirectoryListObjectChildrenRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListObjectChildrenRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListObjectChildrenRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectChildrenRequest(obj: CloudDirectoryListObjectChildrenRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListObjectChildrenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectChildrenResponse(obj: CloudDirectoryListObjectChildrenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Children': ((obj.children) === undefined) ? undefined : (Object.entries(obj.children).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListObjectParentPathsRequest
 */
export interface CloudDirectoryListObjectParentPathsRequest {
  /**
   * @schema CloudDirectoryListObjectParentPathsRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListObjectParentPathsRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListObjectParentPathsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectParentPathsRequest(obj: CloudDirectoryListObjectParentPathsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListObjectParentPathsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectParentPathsResponse(obj: CloudDirectoryListObjectParentPathsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathToObjectIdentifiersList': obj.pathToObjectIdentifiersList?.map(y => toJson_CloudDirectoryPathToObjectIdentifiers(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListObjectParentsRequest
 */
export interface CloudDirectoryListObjectParentsRequest {
  /**
   * @schema CloudDirectoryListObjectParentsRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListObjectParentsRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListObjectParentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectParentsRequest(obj: CloudDirectoryListObjectParentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
    'IncludeAllLinksToEachParent': obj.includeAllLinksToEachParent,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListObjectParentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectParentsResponse(obj: CloudDirectoryListObjectParentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parents': ((obj.parents) === undefined) ? undefined : (Object.entries(obj.parents).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NextToken': obj.nextToken,
    'ParentLinks': obj.parentLinks?.map(y => toJson_CloudDirectoryObjectIdentifierAndLinkNameTuple(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListObjectPoliciesRequest
 */
export interface CloudDirectoryListObjectPoliciesRequest {
  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListObjectPoliciesRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListObjectPoliciesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectPoliciesRequest(obj: CloudDirectoryListObjectPoliciesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListObjectPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListObjectPoliciesResponse(obj: CloudDirectoryListObjectPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedPolicyIds': obj.attachedPolicyIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListOutgoingTypedLinksRequest
 */
export interface CloudDirectoryListOutgoingTypedLinksRequest {
  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListOutgoingTypedLinksRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListOutgoingTypedLinksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListOutgoingTypedLinksRequest(obj: CloudDirectoryListOutgoingTypedLinksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'FilterAttributeRanges': obj.filterAttributeRanges?.map(y => toJson_CloudDirectoryTypedLinkAttributeRange(y)),
    'FilterTypedLink': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.filterTypedLink),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListOutgoingTypedLinksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListOutgoingTypedLinksResponse(obj: CloudDirectoryListOutgoingTypedLinksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifiers': obj.typedLinkSpecifiers?.map(y => toJson_CloudDirectoryTypedLinkSpecifier(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListPolicyAttachmentsRequest
 */
export interface CloudDirectoryListPolicyAttachmentsRequest {
  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryListPolicyAttachmentsRequest#PolicyReference
   */
  readonly policyReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryListPolicyAttachmentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListPolicyAttachmentsRequest(obj: CloudDirectoryListPolicyAttachmentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'PolicyReference': toJson_CloudDirectoryObjectReference(obj.policyReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'ConsistencyLevel': obj.consistencyLevel,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListPolicyAttachmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListPolicyAttachmentsResponse(obj: CloudDirectoryListPolicyAttachmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifiers': obj.objectIdentifiers?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListPublishedSchemaArnsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListPublishedSchemaArnsRequest(obj: CloudDirectoryListPublishedSchemaArnsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListPublishedSchemaArnsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListPublishedSchemaArnsResponse(obj: CloudDirectoryListPublishedSchemaArnsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArns': obj.schemaArns?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListTagsForResourceRequest
 */
export interface CloudDirectoryListTagsForResourceRequest {
  /**
   * @schema CloudDirectoryListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

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
 * Converts an object of type 'CloudDirectoryListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListTagsForResourceRequest(obj: CloudDirectoryListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListTagsForResourceResponse(obj: CloudDirectoryListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': obj.tags?.map(y => toJson_CloudDirectoryTag(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListTypedLinkFacetAttributesRequest
 */
export interface CloudDirectoryListTypedLinkFacetAttributesRequest {
  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryListTypedLinkFacetAttributesRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'CloudDirectoryListTypedLinkFacetAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListTypedLinkFacetAttributesRequest(obj: CloudDirectoryListTypedLinkFacetAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListTypedLinkFacetAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListTypedLinkFacetAttributesResponse(obj: CloudDirectoryListTypedLinkFacetAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryTypedLinkAttributeDefinition(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryListTypedLinkFacetNamesRequest
 */
export interface CloudDirectoryListTypedLinkFacetNamesRequest {
  /**
   * @schema CloudDirectoryListTypedLinkFacetNamesRequest#SchemaArn
   */
  readonly schemaArn?: string;

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
 * Converts an object of type 'CloudDirectoryListTypedLinkFacetNamesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListTypedLinkFacetNamesRequest(obj: CloudDirectoryListTypedLinkFacetNamesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryListTypedLinkFacetNamesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryListTypedLinkFacetNamesResponse(obj: CloudDirectoryListTypedLinkFacetNamesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FacetNames': obj.facetNames?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryLookupPolicyRequest
 */
export interface CloudDirectoryLookupPolicyRequest {
  /**
   * @schema CloudDirectoryLookupPolicyRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryLookupPolicyRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryLookupPolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryLookupPolicyRequest(obj: CloudDirectoryLookupPolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryLookupPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryLookupPolicyResponse(obj: CloudDirectoryLookupPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyToPathList': obj.policyToPathList?.map(y => toJson_CloudDirectoryPolicyToPath(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryPublishSchemaRequest
 */
export interface CloudDirectoryPublishSchemaRequest {
  /**
   * @schema CloudDirectoryPublishSchemaRequest#DevelopmentSchemaArn
   */
  readonly developmentSchemaArn?: string;

  /**
   * @schema CloudDirectoryPublishSchemaRequest#Version
   */
  readonly version?: string;

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
 * Converts an object of type 'CloudDirectoryPublishSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPublishSchemaRequest(obj: CloudDirectoryPublishSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevelopmentSchemaArn': obj.developmentSchemaArn,
    'Version': obj.version,
    'MinorVersion': obj.minorVersion,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryPublishSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPublishSchemaResponse(obj: CloudDirectoryPublishSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublishedSchemaArn': obj.publishedSchemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryPutSchemaFromJsonRequest
 */
export interface CloudDirectoryPutSchemaFromJsonRequest {
  /**
   * @schema CloudDirectoryPutSchemaFromJsonRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryPutSchemaFromJsonRequest#Document
   */
  readonly document?: string;

}

/**
 * Converts an object of type 'CloudDirectoryPutSchemaFromJsonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPutSchemaFromJsonRequest(obj: CloudDirectoryPutSchemaFromJsonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Document': obj.document,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryPutSchemaFromJsonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPutSchemaFromJsonResponse(obj: CloudDirectoryPutSchemaFromJsonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryRemoveFacetFromObjectRequest
 */
export interface CloudDirectoryRemoveFacetFromObjectRequest {
  /**
   * @schema CloudDirectoryRemoveFacetFromObjectRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryRemoveFacetFromObjectRequest#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryRemoveFacetFromObjectRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryRemoveFacetFromObjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryRemoveFacetFromObjectRequest(obj: CloudDirectoryRemoveFacetFromObjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'SchemaFacet': toJson_CloudDirectorySchemaFacet(obj.schemaFacet),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryRemoveFacetFromObjectResponse
 */
export interface CloudDirectoryRemoveFacetFromObjectResponse {
}

/**
 * Converts an object of type 'CloudDirectoryRemoveFacetFromObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryRemoveFacetFromObjectResponse(obj: CloudDirectoryRemoveFacetFromObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTagResourceRequest
 */
export interface CloudDirectoryTagResourceRequest {
  /**
   * @schema CloudDirectoryTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CloudDirectoryTagResourceRequest#Tags
   */
  readonly tags?: CloudDirectoryTag[];

}

/**
 * Converts an object of type 'CloudDirectoryTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTagResourceRequest(obj: CloudDirectoryTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_CloudDirectoryTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTagResourceResponse
 */
export interface CloudDirectoryTagResourceResponse {
}

/**
 * Converts an object of type 'CloudDirectoryTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTagResourceResponse(obj: CloudDirectoryTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUntagResourceRequest
 */
export interface CloudDirectoryUntagResourceRequest {
  /**
   * @schema CloudDirectoryUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema CloudDirectoryUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'CloudDirectoryUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUntagResourceRequest(obj: CloudDirectoryUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUntagResourceResponse
 */
export interface CloudDirectoryUntagResourceResponse {
}

/**
 * Converts an object of type 'CloudDirectoryUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUntagResourceResponse(obj: CloudDirectoryUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateFacetRequest
 */
export interface CloudDirectoryUpdateFacetRequest {
  /**
   * @schema CloudDirectoryUpdateFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryUpdateFacetRequest#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'CloudDirectoryUpdateFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateFacetRequest(obj: CloudDirectoryUpdateFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
    'AttributeUpdates': obj.attributeUpdates?.map(y => toJson_CloudDirectoryFacetAttributeUpdate(y)),
    'ObjectType': obj.objectType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateFacetResponse
 */
export interface CloudDirectoryUpdateFacetResponse {
}

/**
 * Converts an object of type 'CloudDirectoryUpdateFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateFacetResponse(obj: CloudDirectoryUpdateFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateLinkAttributesRequest
 */
export interface CloudDirectoryUpdateLinkAttributesRequest {
  /**
   * @schema CloudDirectoryUpdateLinkAttributesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryUpdateLinkAttributesRequest#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryUpdateLinkAttributesRequest#AttributeUpdates
   */
  readonly attributeUpdates?: CloudDirectoryLinkAttributeUpdate[];

}

/**
 * Converts an object of type 'CloudDirectoryUpdateLinkAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateLinkAttributesRequest(obj: CloudDirectoryUpdateLinkAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
    'AttributeUpdates': obj.attributeUpdates?.map(y => toJson_CloudDirectoryLinkAttributeUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateLinkAttributesResponse
 */
export interface CloudDirectoryUpdateLinkAttributesResponse {
}

/**
 * Converts an object of type 'CloudDirectoryUpdateLinkAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateLinkAttributesResponse(obj: CloudDirectoryUpdateLinkAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateObjectAttributesRequest
 */
export interface CloudDirectoryUpdateObjectAttributesRequest {
  /**
   * @schema CloudDirectoryUpdateObjectAttributesRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryUpdateObjectAttributesRequest#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryUpdateObjectAttributesRequest#AttributeUpdates
   */
  readonly attributeUpdates?: CloudDirectoryObjectAttributeUpdate[];

}

/**
 * Converts an object of type 'CloudDirectoryUpdateObjectAttributesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateObjectAttributesRequest(obj: CloudDirectoryUpdateObjectAttributesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryArn': obj.directoryArn,
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'AttributeUpdates': obj.attributeUpdates?.map(y => toJson_CloudDirectoryObjectAttributeUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryUpdateObjectAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateObjectAttributesResponse(obj: CloudDirectoryUpdateObjectAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateSchemaRequest
 */
export interface CloudDirectoryUpdateSchemaRequest {
  /**
   * @schema CloudDirectoryUpdateSchemaRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryUpdateSchemaRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryUpdateSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateSchemaRequest(obj: CloudDirectoryUpdateSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryUpdateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateSchemaResponse(obj: CloudDirectoryUpdateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateTypedLinkFacetRequest
 */
export interface CloudDirectoryUpdateTypedLinkFacetRequest {
  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#AttributeUpdates
   */
  readonly attributeUpdates?: CloudDirectoryTypedLinkFacetAttributeUpdate[];

  /**
   * @schema CloudDirectoryUpdateTypedLinkFacetRequest#IdentityAttributeOrder
   */
  readonly identityAttributeOrder?: string[];

}

/**
 * Converts an object of type 'CloudDirectoryUpdateTypedLinkFacetRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateTypedLinkFacetRequest(obj: CloudDirectoryUpdateTypedLinkFacetRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'Name': obj.name,
    'AttributeUpdates': obj.attributeUpdates?.map(y => toJson_CloudDirectoryTypedLinkFacetAttributeUpdate(y)),
    'IdentityAttributeOrder': obj.identityAttributeOrder?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpdateTypedLinkFacetResponse
 */
export interface CloudDirectoryUpdateTypedLinkFacetResponse {
}

/**
 * Converts an object of type 'CloudDirectoryUpdateTypedLinkFacetResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpdateTypedLinkFacetResponse(obj: CloudDirectoryUpdateTypedLinkFacetResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpgradeAppliedSchemaRequest
 */
export interface CloudDirectoryUpgradeAppliedSchemaRequest {
  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn?: string;

  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaRequest#DirectoryArn
   */
  readonly directoryArn?: string;

  /**
   * @schema CloudDirectoryUpgradeAppliedSchemaRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'CloudDirectoryUpgradeAppliedSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpgradeAppliedSchemaRequest(obj: CloudDirectoryUpgradeAppliedSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublishedSchemaArn': obj.publishedSchemaArn,
    'DirectoryArn': obj.directoryArn,
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryUpgradeAppliedSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpgradeAppliedSchemaResponse(obj: CloudDirectoryUpgradeAppliedSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpgradedSchemaArn': obj.upgradedSchemaArn,
    'DirectoryArn': obj.directoryArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryUpgradePublishedSchemaRequest
 */
export interface CloudDirectoryUpgradePublishedSchemaRequest {
  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#DevelopmentSchemaArn
   */
  readonly developmentSchemaArn?: string;

  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#PublishedSchemaArn
   */
  readonly publishedSchemaArn?: string;

  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#MinorVersion
   */
  readonly minorVersion?: string;

  /**
   * @schema CloudDirectoryUpgradePublishedSchemaRequest#DryRun
   */
  readonly dryRun?: boolean;

}

/**
 * Converts an object of type 'CloudDirectoryUpgradePublishedSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpgradePublishedSchemaRequest(obj: CloudDirectoryUpgradePublishedSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DevelopmentSchemaArn': obj.developmentSchemaArn,
    'PublishedSchemaArn': obj.publishedSchemaArn,
    'MinorVersion': obj.minorVersion,
    'DryRun': obj.dryRun,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryUpgradePublishedSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryUpgradePublishedSchemaResponse(obj: CloudDirectoryUpgradePublishedSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UpgradedSchemaArn': obj.upgradedSchemaArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectorySchemaFacet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectorySchemaFacet(obj: CloudDirectorySchemaFacet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'FacetName': obj.facetName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttributeKeyAndValue
 */
export interface CloudDirectoryAttributeKeyAndValue {
  /**
   * @schema CloudDirectoryAttributeKeyAndValue#Key
   */
  readonly key?: CloudDirectoryAttributeKey;

  /**
   * @schema CloudDirectoryAttributeKeyAndValue#Value
   */
  readonly value?: CloudDirectoryTypedAttributeValue;

}

/**
 * Converts an object of type 'CloudDirectoryAttributeKeyAndValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttributeKeyAndValue(obj: CloudDirectoryAttributeKeyAndValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': toJson_CloudDirectoryAttributeKey(obj.key),
    'Value': toJson_CloudDirectoryTypedAttributeValue(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryObjectReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryObjectReference(obj: CloudDirectoryObjectReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Selector': obj.selector,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTypedLinkSchemaAndFacetName
 */
export interface CloudDirectoryTypedLinkSchemaAndFacetName {
  /**
   * @schema CloudDirectoryTypedLinkSchemaAndFacetName#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryTypedLinkSchemaAndFacetName#TypedLinkName
   */
  readonly typedLinkName?: string;

}

/**
 * Converts an object of type 'CloudDirectoryTypedLinkSchemaAndFacetName' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj: CloudDirectoryTypedLinkSchemaAndFacetName | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'TypedLinkName': obj.typedLinkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttributeNameAndValue
 */
export interface CloudDirectoryAttributeNameAndValue {
  /**
   * @schema CloudDirectoryAttributeNameAndValue#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema CloudDirectoryAttributeNameAndValue#Value
   */
  readonly value?: CloudDirectoryTypedAttributeValue;

}

/**
 * Converts an object of type 'CloudDirectoryAttributeNameAndValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttributeNameAndValue(obj: CloudDirectoryAttributeNameAndValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'Value': toJson_CloudDirectoryTypedAttributeValue(obj.value),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTypedLinkSpecifier
 */
export interface CloudDirectoryTypedLinkSpecifier {
  /**
   * @schema CloudDirectoryTypedLinkSpecifier#TypedLinkFacet
   */
  readonly typedLinkFacet?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryTypedLinkSpecifier#SourceObjectReference
   */
  readonly sourceObjectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryTypedLinkSpecifier#TargetObjectReference
   */
  readonly targetObjectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryTypedLinkSpecifier#IdentityAttributeValues
   */
  readonly identityAttributeValues?: CloudDirectoryAttributeNameAndValue[];

}

/**
 * Converts an object of type 'CloudDirectoryTypedLinkSpecifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedLinkSpecifier(obj: CloudDirectoryTypedLinkSpecifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkFacet': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.typedLinkFacet),
    'SourceObjectReference': toJson_CloudDirectoryObjectReference(obj.sourceObjectReference),
    'TargetObjectReference': toJson_CloudDirectoryObjectReference(obj.targetObjectReference),
    'IdentityAttributeValues': obj.identityAttributeValues?.map(y => toJson_CloudDirectoryAttributeNameAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchReadOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchReadOperation(obj: CloudDirectoryBatchReadOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListObjectAttributes': toJson_CloudDirectoryBatchListObjectAttributes(obj.listObjectAttributes),
    'ListObjectChildren': toJson_CloudDirectoryBatchListObjectChildren(obj.listObjectChildren),
    'ListAttachedIndices': toJson_CloudDirectoryBatchListAttachedIndices(obj.listAttachedIndices),
    'ListObjectParentPaths': toJson_CloudDirectoryBatchListObjectParentPaths(obj.listObjectParentPaths),
    'FetchObjectInformation': toJson_CloudDirectoryBatchGetObjectInformation(obj.fetchObjectInformation),
    'FetchObjectAttributes': toJson_CloudDirectoryBatchGetObjectAttributes(obj.fetchObjectAttributes),
    'ListObjectParents': toJson_CloudDirectoryBatchListObjectParents(obj.listObjectParents),
    'ListObjectPolicies': toJson_CloudDirectoryBatchListObjectPolicies(obj.listObjectPolicies),
    'ListPolicyAttachments': toJson_CloudDirectoryBatchListPolicyAttachments(obj.listPolicyAttachments),
    'LookupPolicy': toJson_CloudDirectoryBatchLookupPolicy(obj.lookupPolicy),
    'ListIndex': toJson_CloudDirectoryBatchListIndex(obj.listIndex),
    'ListOutgoingTypedLinks': toJson_CloudDirectoryBatchListOutgoingTypedLinks(obj.listOutgoingTypedLinks),
    'ListIncomingTypedLinks': toJson_CloudDirectoryBatchListIncomingTypedLinks(obj.listIncomingTypedLinks),
    'FetchLinkAttributes': toJson_CloudDirectoryBatchGetLinkAttributes(obj.fetchLinkAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchReadOperationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchReadOperationResponse(obj: CloudDirectoryBatchReadOperationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SuccessfulResponse': toJson_CloudDirectoryBatchReadSuccessfulResponse(obj.successfulResponse),
    'ExceptionResponse': toJson_CloudDirectoryBatchReadException(obj.exceptionResponse),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchWriteOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchWriteOperation(obj: CloudDirectoryBatchWriteOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateObject': toJson_CloudDirectoryBatchCreateObject(obj.createObject),
    'AttachObject': toJson_CloudDirectoryBatchAttachObject(obj.attachObject),
    'DetachObject': toJson_CloudDirectoryBatchDetachObject(obj.detachObject),
    'UpdateObjectAttributes': toJson_CloudDirectoryBatchUpdateObjectAttributes(obj.updateObjectAttributes),
    'DeleteObject': toJson_CloudDirectoryBatchDeleteObject(obj.deleteObject),
    'AddFacetToObject': toJson_CloudDirectoryBatchAddFacetToObject(obj.addFacetToObject),
    'RemoveFacetFromObject': toJson_CloudDirectoryBatchRemoveFacetFromObject(obj.removeFacetFromObject),
    'AttachPolicy': toJson_CloudDirectoryBatchAttachPolicy(obj.attachPolicy),
    'DetachPolicy': toJson_CloudDirectoryBatchDetachPolicy(obj.detachPolicy),
    'CreateIndex': toJson_CloudDirectoryBatchCreateIndex(obj.createIndex),
    'AttachToIndex': toJson_CloudDirectoryBatchAttachToIndex(obj.attachToIndex),
    'DetachFromIndex': toJson_CloudDirectoryBatchDetachFromIndex(obj.detachFromIndex),
    'AttachTypedLink': toJson_CloudDirectoryBatchAttachTypedLink(obj.attachTypedLink),
    'DetachTypedLink': toJson_CloudDirectoryBatchDetachTypedLink(obj.detachTypedLink),
    'UpdateLinkAttributes': toJson_CloudDirectoryBatchUpdateLinkAttributes(obj.updateLinkAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchWriteOperationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchWriteOperationResponse(obj: CloudDirectoryBatchWriteOperationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreateObject': toJson_CloudDirectoryBatchCreateObjectResponse(obj.createObject),
    'AttachObject': toJson_CloudDirectoryBatchAttachObjectResponse(obj.attachObject),
    'DetachObject': toJson_CloudDirectoryBatchDetachObjectResponse(obj.detachObject),
    'UpdateObjectAttributes': toJson_CloudDirectoryBatchUpdateObjectAttributesResponse(obj.updateObjectAttributes),
    'DeleteObject': toJson_CloudDirectoryBatchDeleteObjectResponse(obj.deleteObject),
    'AddFacetToObject': toJson_CloudDirectoryBatchAddFacetToObjectResponse(obj.addFacetToObject),
    'RemoveFacetFromObject': toJson_CloudDirectoryBatchRemoveFacetFromObjectResponse(obj.removeFacetFromObject),
    'AttachPolicy': toJson_CloudDirectoryBatchAttachPolicyResponse(obj.attachPolicy),
    'DetachPolicy': toJson_CloudDirectoryBatchDetachPolicyResponse(obj.detachPolicy),
    'CreateIndex': toJson_CloudDirectoryBatchCreateIndexResponse(obj.createIndex),
    'AttachToIndex': toJson_CloudDirectoryBatchAttachToIndexResponse(obj.attachToIndex),
    'DetachFromIndex': toJson_CloudDirectoryBatchDetachFromIndexResponse(obj.detachFromIndex),
    'AttachTypedLink': toJson_CloudDirectoryBatchAttachTypedLinkResponse(obj.attachTypedLink),
    'DetachTypedLink': toJson_CloudDirectoryBatchDetachTypedLinkResponse(obj.detachTypedLink),
    'UpdateLinkAttributes': toJson_CloudDirectoryBatchUpdateLinkAttributesResponse(obj.updateLinkAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryFacetAttribute
 */
export interface CloudDirectoryFacetAttribute {
  /**
   * @schema CloudDirectoryFacetAttribute#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'CloudDirectoryFacetAttribute' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryFacetAttribute(obj: CloudDirectoryFacetAttribute | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'AttributeDefinition': toJson_CloudDirectoryFacetAttributeDefinition(obj.attributeDefinition),
    'AttributeReference': toJson_CloudDirectoryFacetAttributeReference(obj.attributeReference),
    'RequiredBehavior': obj.requiredBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryAttributeKey
 */
export interface CloudDirectoryAttributeKey {
  /**
   * @schema CloudDirectoryAttributeKey#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema CloudDirectoryAttributeKey#FacetName
   */
  readonly facetName?: string;

  /**
   * @schema CloudDirectoryAttributeKey#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'CloudDirectoryAttributeKey' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryAttributeKey(obj: CloudDirectoryAttributeKey | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'FacetName': obj.facetName,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTypedLinkFacet
 */
export interface CloudDirectoryTypedLinkFacet {
  /**
   * @schema CloudDirectoryTypedLinkFacet#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryTypedLinkFacet#Attributes
   */
  readonly attributes?: CloudDirectoryTypedLinkAttributeDefinition[];

  /**
   * @schema CloudDirectoryTypedLinkFacet#IdentityAttributeOrder
   */
  readonly identityAttributeOrder?: string[];

}

/**
 * Converts an object of type 'CloudDirectoryTypedLinkFacet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedLinkFacet(obj: CloudDirectoryTypedLinkFacet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryTypedLinkAttributeDefinition(y)),
    'IdentityAttributeOrder': obj.identityAttributeOrder?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryDirectory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryDirectory(obj: CloudDirectoryDirectory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'DirectoryArn': obj.directoryArn,
    'State': obj.state,
    'CreationDateTime': obj.creationDateTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryFacet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryFacet(obj: CloudDirectoryFacet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'ObjectType': obj.objectType,
    'FacetStyle': obj.facetStyle,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryIndexAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryIndexAttachment(obj: CloudDirectoryIndexAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexedAttributes': obj.indexedAttributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly range?: CloudDirectoryTypedAttributeValueRange;

}

/**
 * Converts an object of type 'CloudDirectoryTypedLinkAttributeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedLinkAttributeRange(obj: CloudDirectoryTypedLinkAttributeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeName': obj.attributeName,
    'Range': toJson_CloudDirectoryTypedAttributeValueRange(obj.range),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryObjectAttributeRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryObjectAttributeRange(obj: CloudDirectoryObjectAttributeRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeKey': toJson_CloudDirectoryAttributeKey(obj.attributeKey),
    'Range': toJson_CloudDirectoryTypedAttributeValueRange(obj.range),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryPathToObjectIdentifiers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPathToObjectIdentifiers(obj: CloudDirectoryPathToObjectIdentifiers | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'ObjectIdentifiers': obj.objectIdentifiers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryObjectIdentifierAndLinkNameTuple' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryObjectIdentifierAndLinkNameTuple(obj: CloudDirectoryObjectIdentifierAndLinkNameTuple | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTag(obj: CloudDirectoryTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTypedLinkAttributeDefinition
 */
export interface CloudDirectoryTypedLinkAttributeDefinition {
  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#Name
   */
  readonly name?: string;

  /**
   * @schema CloudDirectoryTypedLinkAttributeDefinition#Type
   */
  readonly type?: string;

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
  readonly requiredBehavior?: string;

}

/**
 * Converts an object of type 'CloudDirectoryTypedLinkAttributeDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedLinkAttributeDefinition(obj: CloudDirectoryTypedLinkAttributeDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Type': obj.type,
    'DefaultValue': toJson_CloudDirectoryTypedAttributeValue(obj.defaultValue),
    'IsImmutable': obj.isImmutable,
    'Rules': ((obj.rules) === undefined) ? undefined : (Object.entries(obj.rules).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CloudDirectoryRule(i[1]) }), {})),
    'RequiredBehavior': obj.requiredBehavior,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryPolicyToPath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPolicyToPath(obj: CloudDirectoryPolicyToPath | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Path': obj.path,
    'Policies': obj.policies?.map(y => toJson_CloudDirectoryPolicyAttachment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryFacetAttributeUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryFacetAttributeUpdate(obj: CloudDirectoryFacetAttributeUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': toJson_CloudDirectoryFacetAttribute(obj.attribute),
    'Action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryLinkAttributeUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryLinkAttributeUpdate(obj: CloudDirectoryLinkAttributeUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeKey': toJson_CloudDirectoryAttributeKey(obj.attributeKey),
    'AttributeAction': toJson_CloudDirectoryLinkAttributeAction(obj.attributeAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryObjectAttributeUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryObjectAttributeUpdate(obj: CloudDirectoryObjectAttributeUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectAttributeKey': toJson_CloudDirectoryAttributeKey(obj.objectAttributeKey),
    'ObjectAttributeAction': toJson_CloudDirectoryObjectAttributeAction(obj.objectAttributeAction),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTypedLinkFacetAttributeUpdate
 */
export interface CloudDirectoryTypedLinkFacetAttributeUpdate {
  /**
   * @schema CloudDirectoryTypedLinkFacetAttributeUpdate#Attribute
   */
  readonly attribute?: CloudDirectoryTypedLinkAttributeDefinition;

  /**
   * @schema CloudDirectoryTypedLinkFacetAttributeUpdate#Action
   */
  readonly action?: string;

}

/**
 * Converts an object of type 'CloudDirectoryTypedLinkFacetAttributeUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedLinkFacetAttributeUpdate(obj: CloudDirectoryTypedLinkFacetAttributeUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': toJson_CloudDirectoryTypedLinkAttributeDefinition(obj.attribute),
    'Action': obj.action,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryTypedAttributeValue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedAttributeValue(obj: CloudDirectoryTypedAttributeValue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StringValue': obj.stringValue,
    'BinaryValue': obj.binaryValue,
    'BooleanValue': obj.booleanValue,
    'NumberValue': obj.numberValue,
    'DatetimeValue': obj.datetimeValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListObjectAttributes
 */
export interface CloudDirectoryBatchListObjectAttributes {
  /**
   * @schema CloudDirectoryBatchListObjectAttributes#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListObjectAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectAttributes(obj: CloudDirectoryBatchListObjectAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'FacetFilter': toJson_CloudDirectorySchemaFacet(obj.facetFilter),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListObjectChildren
 */
export interface CloudDirectoryBatchListObjectChildren {
  /**
   * @schema CloudDirectoryBatchListObjectChildren#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListObjectChildren' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectChildren(obj: CloudDirectoryBatchListObjectChildren | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListAttachedIndices
 */
export interface CloudDirectoryBatchListAttachedIndices {
  /**
   * @schema CloudDirectoryBatchListAttachedIndices#TargetReference
   */
  readonly targetReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListAttachedIndices' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListAttachedIndices(obj: CloudDirectoryBatchListAttachedIndices | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetReference': toJson_CloudDirectoryObjectReference(obj.targetReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListObjectParentPaths
 */
export interface CloudDirectoryBatchListObjectParentPaths {
  /**
   * @schema CloudDirectoryBatchListObjectParentPaths#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListObjectParentPaths' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectParentPaths(obj: CloudDirectoryBatchListObjectParentPaths | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchGetObjectInformation
 */
export interface CloudDirectoryBatchGetObjectInformation {
  /**
   * @schema CloudDirectoryBatchGetObjectInformation#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchGetObjectInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchGetObjectInformation(obj: CloudDirectoryBatchGetObjectInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchGetObjectAttributes
 */
export interface CloudDirectoryBatchGetObjectAttributes {
  /**
   * @schema CloudDirectoryBatchGetObjectAttributes#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchGetObjectAttributes#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryBatchGetObjectAttributes#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'CloudDirectoryBatchGetObjectAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchGetObjectAttributes(obj: CloudDirectoryBatchGetObjectAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'SchemaFacet': toJson_CloudDirectorySchemaFacet(obj.schemaFacet),
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListObjectParents
 */
export interface CloudDirectoryBatchListObjectParents {
  /**
   * @schema CloudDirectoryBatchListObjectParents#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListObjectParents' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectParents(obj: CloudDirectoryBatchListObjectParents | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListObjectPolicies
 */
export interface CloudDirectoryBatchListObjectPolicies {
  /**
   * @schema CloudDirectoryBatchListObjectPolicies#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListObjectPolicies' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectPolicies(obj: CloudDirectoryBatchListObjectPolicies | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListPolicyAttachments
 */
export interface CloudDirectoryBatchListPolicyAttachments {
  /**
   * @schema CloudDirectoryBatchListPolicyAttachments#PolicyReference
   */
  readonly policyReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListPolicyAttachments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListPolicyAttachments(obj: CloudDirectoryBatchListPolicyAttachments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyReference': toJson_CloudDirectoryObjectReference(obj.policyReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchLookupPolicy
 */
export interface CloudDirectoryBatchLookupPolicy {
  /**
   * @schema CloudDirectoryBatchLookupPolicy#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchLookupPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchLookupPolicy(obj: CloudDirectoryBatchLookupPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly indexReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListIndex(obj: CloudDirectoryBatchListIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RangesOnIndexedValues': obj.rangesOnIndexedValues?.map(y => toJson_CloudDirectoryObjectAttributeRange(y)),
    'IndexReference': toJson_CloudDirectoryObjectReference(obj.indexReference),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListOutgoingTypedLinks
 */
export interface CloudDirectoryBatchListOutgoingTypedLinks {
  /**
   * @schema CloudDirectoryBatchListOutgoingTypedLinks#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListOutgoingTypedLinks' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListOutgoingTypedLinks(obj: CloudDirectoryBatchListOutgoingTypedLinks | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'FilterAttributeRanges': obj.filterAttributeRanges?.map(y => toJson_CloudDirectoryTypedLinkAttributeRange(y)),
    'FilterTypedLink': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.filterTypedLink),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchListIncomingTypedLinks
 */
export interface CloudDirectoryBatchListIncomingTypedLinks {
  /**
   * @schema CloudDirectoryBatchListIncomingTypedLinks#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

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
 * Converts an object of type 'CloudDirectoryBatchListIncomingTypedLinks' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListIncomingTypedLinks(obj: CloudDirectoryBatchListIncomingTypedLinks | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'FilterAttributeRanges': obj.filterAttributeRanges?.map(y => toJson_CloudDirectoryTypedLinkAttributeRange(y)),
    'FilterTypedLink': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.filterTypedLink),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchGetLinkAttributes
 */
export interface CloudDirectoryBatchGetLinkAttributes {
  /**
   * @schema CloudDirectoryBatchGetLinkAttributes#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryBatchGetLinkAttributes#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'CloudDirectoryBatchGetLinkAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchGetLinkAttributes(obj: CloudDirectoryBatchGetLinkAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchReadSuccessfulResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchReadSuccessfulResponse(obj: CloudDirectoryBatchReadSuccessfulResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ListObjectAttributes': toJson_CloudDirectoryBatchListObjectAttributesResponse(obj.listObjectAttributes),
    'ListObjectChildren': toJson_CloudDirectoryBatchListObjectChildrenResponse(obj.listObjectChildren),
    'FetchObjectInformation': toJson_CloudDirectoryBatchGetObjectInformationResponse(obj.fetchObjectInformation),
    'FetchObjectAttributes': toJson_CloudDirectoryBatchGetObjectAttributesResponse(obj.fetchObjectAttributes),
    'ListAttachedIndices': toJson_CloudDirectoryBatchListAttachedIndicesResponse(obj.listAttachedIndices),
    'ListObjectParentPaths': toJson_CloudDirectoryBatchListObjectParentPathsResponse(obj.listObjectParentPaths),
    'ListObjectPolicies': toJson_CloudDirectoryBatchListObjectPoliciesResponse(obj.listObjectPolicies),
    'ListPolicyAttachments': toJson_CloudDirectoryBatchListPolicyAttachmentsResponse(obj.listPolicyAttachments),
    'LookupPolicy': toJson_CloudDirectoryBatchLookupPolicyResponse(obj.lookupPolicy),
    'ListIndex': toJson_CloudDirectoryBatchListIndexResponse(obj.listIndex),
    'ListOutgoingTypedLinks': toJson_CloudDirectoryBatchListOutgoingTypedLinksResponse(obj.listOutgoingTypedLinks),
    'ListIncomingTypedLinks': toJson_CloudDirectoryBatchListIncomingTypedLinksResponse(obj.listIncomingTypedLinks),
    'FetchLinkAttributes': toJson_CloudDirectoryBatchGetLinkAttributesResponse(obj.fetchLinkAttributes),
    'ListObjectParents': toJson_CloudDirectoryBatchListObjectParentsResponse(obj.listObjectParents),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchReadException' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchReadException(obj: CloudDirectoryBatchReadException | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchCreateObject
 */
export interface CloudDirectoryBatchCreateObject {
  /**
   * @schema CloudDirectoryBatchCreateObject#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet[];

  /**
   * @schema CloudDirectoryBatchCreateObject#ObjectAttributeList
   */
  readonly objectAttributeList?: CloudDirectoryAttributeKeyAndValue[];

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
 * Converts an object of type 'CloudDirectoryBatchCreateObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchCreateObject(obj: CloudDirectoryBatchCreateObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaFacet': obj.schemaFacet?.map(y => toJson_CloudDirectorySchemaFacet(y)),
    'ObjectAttributeList': obj.objectAttributeList?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'LinkName': obj.linkName,
    'BatchReferenceName': obj.batchReferenceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAttachObject
 */
export interface CloudDirectoryBatchAttachObject {
  /**
   * @schema CloudDirectoryBatchAttachObject#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachObject#ChildReference
   */
  readonly childReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachObject#LinkName
   */
  readonly linkName?: string;

}

/**
 * Converts an object of type 'CloudDirectoryBatchAttachObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachObject(obj: CloudDirectoryBatchAttachObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'ChildReference': toJson_CloudDirectoryObjectReference(obj.childReference),
    'LinkName': obj.linkName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDetachObject
 */
export interface CloudDirectoryBatchDetachObject {
  /**
   * @schema CloudDirectoryBatchDetachObject#ParentReference
   */
  readonly parentReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchDetachObject#LinkName
   */
  readonly linkName?: string;

  /**
   * @schema CloudDirectoryBatchDetachObject#BatchReferenceName
   */
  readonly batchReferenceName?: string;

}

/**
 * Converts an object of type 'CloudDirectoryBatchDetachObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachObject(obj: CloudDirectoryBatchDetachObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'LinkName': obj.linkName,
    'BatchReferenceName': obj.batchReferenceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchUpdateObjectAttributes
 */
export interface CloudDirectoryBatchUpdateObjectAttributes {
  /**
   * @schema CloudDirectoryBatchUpdateObjectAttributes#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchUpdateObjectAttributes#AttributeUpdates
   */
  readonly attributeUpdates?: CloudDirectoryObjectAttributeUpdate[];

}

/**
 * Converts an object of type 'CloudDirectoryBatchUpdateObjectAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchUpdateObjectAttributes(obj: CloudDirectoryBatchUpdateObjectAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
    'AttributeUpdates': obj.attributeUpdates?.map(y => toJson_CloudDirectoryObjectAttributeUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDeleteObject
 */
export interface CloudDirectoryBatchDeleteObject {
  /**
   * @schema CloudDirectoryBatchDeleteObject#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchDeleteObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDeleteObject(obj: CloudDirectoryBatchDeleteObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAddFacetToObject
 */
export interface CloudDirectoryBatchAddFacetToObject {
  /**
   * @schema CloudDirectoryBatchAddFacetToObject#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryBatchAddFacetToObject#ObjectAttributeList
   */
  readonly objectAttributeList?: CloudDirectoryAttributeKeyAndValue[];

  /**
   * @schema CloudDirectoryBatchAddFacetToObject#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchAddFacetToObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAddFacetToObject(obj: CloudDirectoryBatchAddFacetToObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaFacet': toJson_CloudDirectorySchemaFacet(obj.schemaFacet),
    'ObjectAttributeList': obj.objectAttributeList?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchRemoveFacetFromObject
 */
export interface CloudDirectoryBatchRemoveFacetFromObject {
  /**
   * @schema CloudDirectoryBatchRemoveFacetFromObject#SchemaFacet
   */
  readonly schemaFacet?: CloudDirectorySchemaFacet;

  /**
   * @schema CloudDirectoryBatchRemoveFacetFromObject#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchRemoveFacetFromObject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchRemoveFacetFromObject(obj: CloudDirectoryBatchRemoveFacetFromObject | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaFacet': toJson_CloudDirectorySchemaFacet(obj.schemaFacet),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAttachPolicy
 */
export interface CloudDirectoryBatchAttachPolicy {
  /**
   * @schema CloudDirectoryBatchAttachPolicy#PolicyReference
   */
  readonly policyReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachPolicy#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchAttachPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachPolicy(obj: CloudDirectoryBatchAttachPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyReference': toJson_CloudDirectoryObjectReference(obj.policyReference),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDetachPolicy
 */
export interface CloudDirectoryBatchDetachPolicy {
  /**
   * @schema CloudDirectoryBatchDetachPolicy#PolicyReference
   */
  readonly policyReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchDetachPolicy#ObjectReference
   */
  readonly objectReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchDetachPolicy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachPolicy(obj: CloudDirectoryBatchDetachPolicy | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyReference': toJson_CloudDirectoryObjectReference(obj.policyReference),
    'ObjectReference': toJson_CloudDirectoryObjectReference(obj.objectReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchCreateIndex
 */
export interface CloudDirectoryBatchCreateIndex {
  /**
   * @schema CloudDirectoryBatchCreateIndex#OrderedIndexedAttributeList
   */
  readonly orderedIndexedAttributeList?: CloudDirectoryAttributeKey[];

  /**
   * @schema CloudDirectoryBatchCreateIndex#IsUnique
   */
  readonly isUnique?: boolean;

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
 * Converts an object of type 'CloudDirectoryBatchCreateIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchCreateIndex(obj: CloudDirectoryBatchCreateIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OrderedIndexedAttributeList': obj.orderedIndexedAttributeList?.map(y => toJson_CloudDirectoryAttributeKey(y)),
    'IsUnique': obj.isUnique,
    'ParentReference': toJson_CloudDirectoryObjectReference(obj.parentReference),
    'LinkName': obj.linkName,
    'BatchReferenceName': obj.batchReferenceName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAttachToIndex
 */
export interface CloudDirectoryBatchAttachToIndex {
  /**
   * @schema CloudDirectoryBatchAttachToIndex#IndexReference
   */
  readonly indexReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachToIndex#TargetReference
   */
  readonly targetReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchAttachToIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachToIndex(obj: CloudDirectoryBatchAttachToIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexReference': toJson_CloudDirectoryObjectReference(obj.indexReference),
    'TargetReference': toJson_CloudDirectoryObjectReference(obj.targetReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDetachFromIndex
 */
export interface CloudDirectoryBatchDetachFromIndex {
  /**
   * @schema CloudDirectoryBatchDetachFromIndex#IndexReference
   */
  readonly indexReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchDetachFromIndex#TargetReference
   */
  readonly targetReference?: CloudDirectoryObjectReference;

}

/**
 * Converts an object of type 'CloudDirectoryBatchDetachFromIndex' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachFromIndex(obj: CloudDirectoryBatchDetachFromIndex | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexReference': toJson_CloudDirectoryObjectReference(obj.indexReference),
    'TargetReference': toJson_CloudDirectoryObjectReference(obj.targetReference),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAttachTypedLink
 */
export interface CloudDirectoryBatchAttachTypedLink {
  /**
   * @schema CloudDirectoryBatchAttachTypedLink#SourceObjectReference
   */
  readonly sourceObjectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachTypedLink#TargetObjectReference
   */
  readonly targetObjectReference?: CloudDirectoryObjectReference;

  /**
   * @schema CloudDirectoryBatchAttachTypedLink#TypedLinkFacet
   */
  readonly typedLinkFacet?: CloudDirectoryTypedLinkSchemaAndFacetName;

  /**
   * @schema CloudDirectoryBatchAttachTypedLink#Attributes
   */
  readonly attributes?: CloudDirectoryAttributeNameAndValue[];

}

/**
 * Converts an object of type 'CloudDirectoryBatchAttachTypedLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachTypedLink(obj: CloudDirectoryBatchAttachTypedLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceObjectReference': toJson_CloudDirectoryObjectReference(obj.sourceObjectReference),
    'TargetObjectReference': toJson_CloudDirectoryObjectReference(obj.targetObjectReference),
    'TypedLinkFacet': toJson_CloudDirectoryTypedLinkSchemaAndFacetName(obj.typedLinkFacet),
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeNameAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDetachTypedLink
 */
export interface CloudDirectoryBatchDetachTypedLink {
  /**
   * @schema CloudDirectoryBatchDetachTypedLink#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

}

/**
 * Converts an object of type 'CloudDirectoryBatchDetachTypedLink' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachTypedLink(obj: CloudDirectoryBatchDetachTypedLink | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchUpdateLinkAttributes
 */
export interface CloudDirectoryBatchUpdateLinkAttributes {
  /**
   * @schema CloudDirectoryBatchUpdateLinkAttributes#TypedLinkSpecifier
   */
  readonly typedLinkSpecifier?: CloudDirectoryTypedLinkSpecifier;

  /**
   * @schema CloudDirectoryBatchUpdateLinkAttributes#AttributeUpdates
   */
  readonly attributeUpdates?: CloudDirectoryLinkAttributeUpdate[];

}

/**
 * Converts an object of type 'CloudDirectoryBatchUpdateLinkAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchUpdateLinkAttributes(obj: CloudDirectoryBatchUpdateLinkAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
    'AttributeUpdates': obj.attributeUpdates?.map(y => toJson_CloudDirectoryLinkAttributeUpdate(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchCreateObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchCreateObjectResponse(obj: CloudDirectoryBatchCreateObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchAttachObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachObjectResponse(obj: CloudDirectoryBatchAttachObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'attachedObjectIdentifier': obj.attachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchDetachObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachObjectResponse(obj: CloudDirectoryBatchDetachObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'detachedObjectIdentifier': obj.detachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchUpdateObjectAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchUpdateObjectAttributesResponse(obj: CloudDirectoryBatchUpdateObjectAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDeleteObjectResponse
 */
export interface CloudDirectoryBatchDeleteObjectResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchDeleteObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDeleteObjectResponse(obj: CloudDirectoryBatchDeleteObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAddFacetToObjectResponse
 */
export interface CloudDirectoryBatchAddFacetToObjectResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchAddFacetToObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAddFacetToObjectResponse(obj: CloudDirectoryBatchAddFacetToObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchRemoveFacetFromObjectResponse
 */
export interface CloudDirectoryBatchRemoveFacetFromObjectResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchRemoveFacetFromObjectResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchRemoveFacetFromObjectResponse(obj: CloudDirectoryBatchRemoveFacetFromObjectResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchAttachPolicyResponse
 */
export interface CloudDirectoryBatchAttachPolicyResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchAttachPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachPolicyResponse(obj: CloudDirectoryBatchAttachPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDetachPolicyResponse
 */
export interface CloudDirectoryBatchDetachPolicyResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchDetachPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachPolicyResponse(obj: CloudDirectoryBatchDetachPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchCreateIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchCreateIndexResponse(obj: CloudDirectoryBatchCreateIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchAttachToIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachToIndexResponse(obj: CloudDirectoryBatchAttachToIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedObjectIdentifier': obj.attachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchDetachFromIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachFromIndexResponse(obj: CloudDirectoryBatchDetachFromIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetachedObjectIdentifier': obj.detachedObjectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchAttachTypedLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchAttachTypedLinkResponse(obj: CloudDirectoryBatchAttachTypedLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifier': toJson_CloudDirectoryTypedLinkSpecifier(obj.typedLinkSpecifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchDetachTypedLinkResponse
 */
export interface CloudDirectoryBatchDetachTypedLinkResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchDetachTypedLinkResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchDetachTypedLinkResponse(obj: CloudDirectoryBatchDetachTypedLinkResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryBatchUpdateLinkAttributesResponse
 */
export interface CloudDirectoryBatchUpdateLinkAttributesResponse {
}

/**
 * Converts an object of type 'CloudDirectoryBatchUpdateLinkAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchUpdateLinkAttributesResponse(obj: CloudDirectoryBatchUpdateLinkAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryFacetAttributeDefinition
 */
export interface CloudDirectoryFacetAttributeDefinition {
  /**
   * @schema CloudDirectoryFacetAttributeDefinition#Type
   */
  readonly type?: string;

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
 * Converts an object of type 'CloudDirectoryFacetAttributeDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryFacetAttributeDefinition(obj: CloudDirectoryFacetAttributeDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'DefaultValue': toJson_CloudDirectoryTypedAttributeValue(obj.defaultValue),
    'IsImmutable': obj.isImmutable,
    'Rules': ((obj.rules) === undefined) ? undefined : (Object.entries(obj.rules).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: toJson_CloudDirectoryRule(i[1]) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryFacetAttributeReference
 */
export interface CloudDirectoryFacetAttributeReference {
  /**
   * @schema CloudDirectoryFacetAttributeReference#TargetFacetName
   */
  readonly targetFacetName?: string;

  /**
   * @schema CloudDirectoryFacetAttributeReference#TargetAttributeName
   */
  readonly targetAttributeName?: string;

}

/**
 * Converts an object of type 'CloudDirectoryFacetAttributeReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryFacetAttributeReference(obj: CloudDirectoryFacetAttributeReference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TargetFacetName': obj.targetFacetName,
    'TargetAttributeName': obj.targetAttributeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudDirectoryTypedAttributeValueRange
 */
export interface CloudDirectoryTypedAttributeValueRange {
  /**
   * @schema CloudDirectoryTypedAttributeValueRange#StartMode
   */
  readonly startMode?: string;

  /**
   * @schema CloudDirectoryTypedAttributeValueRange#StartValue
   */
  readonly startValue?: CloudDirectoryTypedAttributeValue;

  /**
   * @schema CloudDirectoryTypedAttributeValueRange#EndMode
   */
  readonly endMode?: string;

  /**
   * @schema CloudDirectoryTypedAttributeValueRange#EndValue
   */
  readonly endValue?: CloudDirectoryTypedAttributeValue;

}

/**
 * Converts an object of type 'CloudDirectoryTypedAttributeValueRange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryTypedAttributeValueRange(obj: CloudDirectoryTypedAttributeValueRange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartMode': obj.startMode,
    'StartValue': toJson_CloudDirectoryTypedAttributeValue(obj.startValue),
    'EndMode': obj.endMode,
    'EndValue': toJson_CloudDirectoryTypedAttributeValue(obj.endValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryRule(obj: CloudDirectoryRule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryPolicyAttachment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryPolicyAttachment(obj: CloudDirectoryPolicyAttachment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyId': obj.policyId,
    'ObjectIdentifier': obj.objectIdentifier,
    'PolicyType': obj.policyType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryLinkAttributeAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryLinkAttributeAction(obj: CloudDirectoryLinkAttributeAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttributeActionType': obj.attributeActionType,
    'AttributeUpdateValue': toJson_CloudDirectoryTypedAttributeValue(obj.attributeUpdateValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryObjectAttributeAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryObjectAttributeAction(obj: CloudDirectoryObjectAttributeAction | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectAttributeActionType': obj.objectAttributeActionType,
    'ObjectAttributeUpdateValue': toJson_CloudDirectoryTypedAttributeValue(obj.objectAttributeUpdateValue),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListObjectAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectAttributesResponse(obj: CloudDirectoryBatchListObjectAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListObjectChildrenResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectChildrenResponse(obj: CloudDirectoryBatchListObjectChildrenResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Children': ((obj.children) === undefined) ? undefined : (Object.entries(obj.children).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchGetObjectInformationResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchGetObjectInformationResponse(obj: CloudDirectoryBatchGetObjectInformationResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaFacets': obj.schemaFacets?.map(y => toJson_CloudDirectorySchemaFacet(y)),
    'ObjectIdentifier': obj.objectIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchGetObjectAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchGetObjectAttributesResponse(obj: CloudDirectoryBatchGetObjectAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListAttachedIndicesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListAttachedIndicesResponse(obj: CloudDirectoryBatchListAttachedIndicesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexAttachments': obj.indexAttachments?.map(y => toJson_CloudDirectoryIndexAttachment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListObjectParentPathsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectParentPathsResponse(obj: CloudDirectoryBatchListObjectParentPathsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PathToObjectIdentifiersList': obj.pathToObjectIdentifiersList?.map(y => toJson_CloudDirectoryPathToObjectIdentifiers(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListObjectPoliciesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectPoliciesResponse(obj: CloudDirectoryBatchListObjectPoliciesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AttachedPolicyIds': obj.attachedPolicyIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListPolicyAttachmentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListPolicyAttachmentsResponse(obj: CloudDirectoryBatchListPolicyAttachmentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ObjectIdentifiers': obj.objectIdentifiers?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchLookupPolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchLookupPolicyResponse(obj: CloudDirectoryBatchLookupPolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PolicyToPathList': obj.policyToPathList?.map(y => toJson_CloudDirectoryPolicyToPath(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListIndexResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListIndexResponse(obj: CloudDirectoryBatchListIndexResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IndexAttachments': obj.indexAttachments?.map(y => toJson_CloudDirectoryIndexAttachment(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListOutgoingTypedLinksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListOutgoingTypedLinksResponse(obj: CloudDirectoryBatchListOutgoingTypedLinksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypedLinkSpecifiers': obj.typedLinkSpecifiers?.map(y => toJson_CloudDirectoryTypedLinkSpecifier(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchListIncomingTypedLinksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListIncomingTypedLinksResponse(obj: CloudDirectoryBatchListIncomingTypedLinksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LinkSpecifiers': obj.linkSpecifiers?.map(y => toJson_CloudDirectoryTypedLinkSpecifier(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'CloudDirectoryBatchGetLinkAttributesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchGetLinkAttributesResponse(obj: CloudDirectoryBatchGetLinkAttributesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attributes': obj.attributes?.map(y => toJson_CloudDirectoryAttributeKeyAndValue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'CloudDirectoryBatchListObjectParentsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudDirectoryBatchListObjectParentsResponse(obj: CloudDirectoryBatchListObjectParentsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParentLinks': obj.parentLinks?.map(y => toJson_CloudDirectoryObjectIdentifierAndLinkNameTuple(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
