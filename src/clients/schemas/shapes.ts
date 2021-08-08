/**
 * @schema SchemasCreateDiscovererRequest
 */
export interface SchemasCreateDiscovererRequest {
  /**
   * @schema SchemasCreateDiscovererRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateDiscovererRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasCreateDiscovererRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasCreateDiscovererRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasCreateDiscovererRequest(obj: SchemasCreateDiscovererRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'SourceArn': obj.sourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasCreateDiscovererResponse
 */
export interface SchemasCreateDiscovererResponse {
  /**
   * @schema SchemasCreateDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema SchemasCreateDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasCreateDiscovererResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasCreateDiscovererResponse(obj: SchemasCreateDiscovererResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DiscovererArn': obj.discovererArn,
    'DiscovererId': obj.discovererId,
    'SourceArn': obj.sourceArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasCreateRegistryRequest
 */
export interface SchemasCreateRegistryRequest {
  /**
   * @schema SchemasCreateRegistryRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateRegistryRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasCreateRegistryRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasCreateRegistryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasCreateRegistryRequest(obj: SchemasCreateRegistryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'RegistryName': obj.registryName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasCreateRegistryResponse
 */
export interface SchemasCreateRegistryResponse {
  /**
   * @schema SchemasCreateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasCreateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasCreateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasCreateRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasCreateRegistryResponse(obj: SchemasCreateRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'RegistryArn': obj.registryArn,
    'RegistryName': obj.registryName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasCreateSchemaRequest
 */
export interface SchemasCreateSchemaRequest {
  /**
   * @schema SchemasCreateSchemaRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasCreateSchemaRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateSchemaRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasCreateSchemaRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasCreateSchemaRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasCreateSchemaRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasCreateSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasCreateSchemaRequest(obj: SchemasCreateSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'Description': obj.description,
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasCreateSchemaResponse
 */
export interface SchemasCreateSchemaResponse {
  /**
   * @schema SchemasCreateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasCreateSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasCreateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasCreateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasCreateSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasCreateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasCreateSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema SchemasCreateSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * Converts an object of type 'SchemasCreateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasCreateSchemaResponse(obj: SchemasCreateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'LastModified': obj.lastModified,
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
    'VersionCreatedDate': obj.versionCreatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDeleteDiscovererRequest
 */
export interface SchemasDeleteDiscovererRequest {
  /**
   * @schema SchemasDeleteDiscovererRequest#DiscovererId
   */
  readonly discovererId?: string;

}

/**
 * Converts an object of type 'SchemasDeleteDiscovererRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDeleteDiscovererRequest(obj: SchemasDeleteDiscovererRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererId': obj.discovererId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDeleteRegistryRequest
 */
export interface SchemasDeleteRegistryRequest {
  /**
   * @schema SchemasDeleteRegistryRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'SchemasDeleteRegistryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDeleteRegistryRequest(obj: SchemasDeleteRegistryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDeleteResourcePolicyRequest
 */
export interface SchemasDeleteResourcePolicyRequest {
  /**
   * @schema SchemasDeleteResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'SchemasDeleteResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDeleteResourcePolicyRequest(obj: SchemasDeleteResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDeleteSchemaRequest
 */
export interface SchemasDeleteSchemaRequest {
  /**
   * @schema SchemasDeleteSchemaRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasDeleteSchemaRequest#SchemaName
   */
  readonly schemaName?: string;

}

/**
 * Converts an object of type 'SchemasDeleteSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDeleteSchemaRequest(obj: SchemasDeleteSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDeleteSchemaVersionRequest
 */
export interface SchemasDeleteSchemaVersionRequest {
  /**
   * @schema SchemasDeleteSchemaVersionRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasDeleteSchemaVersionRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasDeleteSchemaVersionRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * Converts an object of type 'SchemasDeleteSchemaVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDeleteSchemaVersionRequest(obj: SchemasDeleteSchemaVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeCodeBindingRequest
 */
export interface SchemasDescribeCodeBindingRequest {
  /**
   * @schema SchemasDescribeCodeBindingRequest#Language
   */
  readonly language?: string;

  /**
   * @schema SchemasDescribeCodeBindingRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasDescribeCodeBindingRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasDescribeCodeBindingRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * Converts an object of type 'SchemasDescribeCodeBindingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeCodeBindingRequest(obj: SchemasDescribeCodeBindingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Language': obj.language,
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeCodeBindingResponse
 */
export interface SchemasDescribeCodeBindingResponse {
  /**
   * @schema SchemasDescribeCodeBindingResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SchemasDescribeCodeBindingResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasDescribeCodeBindingResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasDescribeCodeBindingResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SchemasDescribeCodeBindingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeCodeBindingResponse(obj: SchemasDescribeCodeBindingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationDate': obj.creationDate,
    'LastModified': obj.lastModified,
    'SchemaVersion': obj.schemaVersion,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeDiscovererRequest
 */
export interface SchemasDescribeDiscovererRequest {
  /**
   * @schema SchemasDescribeDiscovererRequest#DiscovererId
   */
  readonly discovererId?: string;

}

/**
 * Converts an object of type 'SchemasDescribeDiscovererRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeDiscovererRequest(obj: SchemasDescribeDiscovererRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererId': obj.discovererId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeDiscovererResponse
 */
export interface SchemasDescribeDiscovererResponse {
  /**
   * @schema SchemasDescribeDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema SchemasDescribeDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasDescribeDiscovererResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeDiscovererResponse(obj: SchemasDescribeDiscovererResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DiscovererArn': obj.discovererArn,
    'DiscovererId': obj.discovererId,
    'SourceArn': obj.sourceArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeRegistryRequest
 */
export interface SchemasDescribeRegistryRequest {
  /**
   * @schema SchemasDescribeRegistryRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'SchemasDescribeRegistryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeRegistryRequest(obj: SchemasDescribeRegistryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeRegistryResponse
 */
export interface SchemasDescribeRegistryResponse {
  /**
   * @schema SchemasDescribeRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasDescribeRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasDescribeRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasDescribeRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasDescribeRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeRegistryResponse(obj: SchemasDescribeRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'RegistryArn': obj.registryArn,
    'RegistryName': obj.registryName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeSchemaRequest
 */
export interface SchemasDescribeSchemaRequest {
  /**
   * @schema SchemasDescribeSchemaRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasDescribeSchemaRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasDescribeSchemaRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * Converts an object of type 'SchemasDescribeSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeSchemaRequest(obj: SchemasDescribeSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDescribeSchemaResponse
 */
export interface SchemasDescribeSchemaResponse {
  /**
   * @schema SchemasDescribeSchemaResponse#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasDescribeSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema SchemasDescribeSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * Converts an object of type 'SchemasDescribeSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDescribeSchemaResponse(obj: SchemasDescribeSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'Description': obj.description,
    'LastModified': obj.lastModified,
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
    'VersionCreatedDate': obj.versionCreatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasExportSchemaRequest
 */
export interface SchemasExportSchemaRequest {
  /**
   * @schema SchemasExportSchemaRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasExportSchemaRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasExportSchemaRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasExportSchemaRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasExportSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasExportSchemaRequest(obj: SchemasExportSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasExportSchemaResponse
 */
export interface SchemasExportSchemaResponse {
  /**
   * @schema SchemasExportSchemaResponse#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasExportSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasExportSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasExportSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasExportSchemaResponse#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasExportSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasExportSchemaResponse(obj: SchemasExportSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasGetCodeBindingSourceRequest
 */
export interface SchemasGetCodeBindingSourceRequest {
  /**
   * @schema SchemasGetCodeBindingSourceRequest#Language
   */
  readonly language?: string;

  /**
   * @schema SchemasGetCodeBindingSourceRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasGetCodeBindingSourceRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasGetCodeBindingSourceRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * Converts an object of type 'SchemasGetCodeBindingSourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasGetCodeBindingSourceRequest(obj: SchemasGetCodeBindingSourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Language': obj.language,
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasGetCodeBindingSourceResponse
 */
export interface SchemasGetCodeBindingSourceResponse {
  /**
   * @schema SchemasGetCodeBindingSourceResponse#Body
   */
  readonly body?: any;

}

/**
 * Converts an object of type 'SchemasGetCodeBindingSourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasGetCodeBindingSourceResponse(obj: SchemasGetCodeBindingSourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Body': obj.body,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasGetDiscoveredSchemaRequest
 */
export interface SchemasGetDiscoveredSchemaRequest {
  /**
   * @schema SchemasGetDiscoveredSchemaRequest#Events
   */
  readonly events?: string[];

  /**
   * @schema SchemasGetDiscoveredSchemaRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasGetDiscoveredSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasGetDiscoveredSchemaRequest(obj: SchemasGetDiscoveredSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Events': obj.events?.map(y => y),
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasGetDiscoveredSchemaResponse
 */
export interface SchemasGetDiscoveredSchemaResponse {
  /**
   * @schema SchemasGetDiscoveredSchemaResponse#Content
   */
  readonly content?: string;

}

/**
 * Converts an object of type 'SchemasGetDiscoveredSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasGetDiscoveredSchemaResponse(obj: SchemasGetDiscoveredSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Content': obj.content,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasGetResourcePolicyRequest
 */
export interface SchemasGetResourcePolicyRequest {
  /**
   * @schema SchemasGetResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'SchemasGetResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasGetResourcePolicyRequest(obj: SchemasGetResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasGetResourcePolicyResponse
 */
export interface SchemasGetResourcePolicyResponse {
  /**
   * @schema SchemasGetResourcePolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema SchemasGetResourcePolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'SchemasGetResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasGetResourcePolicyResponse(obj: SchemasGetResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListDiscoverersRequest
 */
export interface SchemasListDiscoverersRequest {
  /**
   * @schema SchemasListDiscoverersRequest#DiscovererIdPrefix
   */
  readonly discovererIdPrefix?: string;

  /**
   * @schema SchemasListDiscoverersRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListDiscoverersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListDiscoverersRequest#SourceArnPrefix
   */
  readonly sourceArnPrefix?: string;

}

/**
 * Converts an object of type 'SchemasListDiscoverersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListDiscoverersRequest(obj: SchemasListDiscoverersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererIdPrefix': obj.discovererIdPrefix,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'SourceArnPrefix': obj.sourceArnPrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListDiscoverersResponse
 */
export interface SchemasListDiscoverersResponse {
  /**
   * @schema SchemasListDiscoverersResponse#Discoverers
   */
  readonly discoverers?: SchemasDiscovererSummary[];

  /**
   * @schema SchemasListDiscoverersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'SchemasListDiscoverersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListDiscoverersResponse(obj: SchemasListDiscoverersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Discoverers': obj.discoverers?.map(y => toJson_SchemasDiscovererSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListRegistriesRequest
 */
export interface SchemasListRegistriesRequest {
  /**
   * @schema SchemasListRegistriesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListRegistriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListRegistriesRequest#RegistryNamePrefix
   */
  readonly registryNamePrefix?: string;

  /**
   * @schema SchemasListRegistriesRequest#Scope
   */
  readonly scope?: string;

}

/**
 * Converts an object of type 'SchemasListRegistriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListRegistriesRequest(obj: SchemasListRegistriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'RegistryNamePrefix': obj.registryNamePrefix,
    'Scope': obj.scope,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListRegistriesResponse
 */
export interface SchemasListRegistriesResponse {
  /**
   * @schema SchemasListRegistriesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListRegistriesResponse#Registries
   */
  readonly registries?: SchemasRegistrySummary[];

}

/**
 * Converts an object of type 'SchemasListRegistriesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListRegistriesResponse(obj: SchemasListRegistriesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Registries': obj.registries?.map(y => toJson_SchemasRegistrySummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListSchemaVersionsRequest
 */
export interface SchemasListSchemaVersionsRequest {
  /**
   * @schema SchemasListSchemaVersionsRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListSchemaVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemaVersionsRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasListSchemaVersionsRequest#SchemaName
   */
  readonly schemaName?: string;

}

/**
 * Converts an object of type 'SchemasListSchemaVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListSchemaVersionsRequest(obj: SchemasListSchemaVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListSchemaVersionsResponse
 */
export interface SchemasListSchemaVersionsResponse {
  /**
   * @schema SchemasListSchemaVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemaVersionsResponse#SchemaVersions
   */
  readonly schemaVersions?: SchemasSchemaVersionSummary[];

}

/**
 * Converts an object of type 'SchemasListSchemaVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListSchemaVersionsResponse(obj: SchemasListSchemaVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'SchemaVersions': obj.schemaVersions?.map(y => toJson_SchemasSchemaVersionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListSchemasRequest
 */
export interface SchemasListSchemasRequest {
  /**
   * @schema SchemasListSchemasRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasListSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemasRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasListSchemasRequest#SchemaNamePrefix
   */
  readonly schemaNamePrefix?: string;

}

/**
 * Converts an object of type 'SchemasListSchemasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListSchemasRequest(obj: SchemasListSchemasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'RegistryName': obj.registryName,
    'SchemaNamePrefix': obj.schemaNamePrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListSchemasResponse
 */
export interface SchemasListSchemasResponse {
  /**
   * @schema SchemasListSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasListSchemasResponse#Schemas
   */
  readonly schemas?: SchemasSchemaSummary[];

}

/**
 * Converts an object of type 'SchemasListSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListSchemasResponse(obj: SchemasListSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Schemas': obj.schemas?.map(y => toJson_SchemasSchemaSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListTagsForResourceRequest
 */
export interface SchemasListTagsForResourceRequest {
  /**
   * @schema SchemasListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'SchemasListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListTagsForResourceRequest(obj: SchemasListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasListTagsForResourceResponse
 */
export interface SchemasListTagsForResourceResponse {
  /**
   * @schema SchemasListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasListTagsForResourceResponse(obj: SchemasListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasPutCodeBindingRequest
 */
export interface SchemasPutCodeBindingRequest {
  /**
   * @schema SchemasPutCodeBindingRequest#Language
   */
  readonly language?: string;

  /**
   * @schema SchemasPutCodeBindingRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasPutCodeBindingRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasPutCodeBindingRequest#SchemaVersion
   */
  readonly schemaVersion?: string;

}

/**
 * Converts an object of type 'SchemasPutCodeBindingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasPutCodeBindingRequest(obj: SchemasPutCodeBindingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Language': obj.language,
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasPutCodeBindingResponse
 */
export interface SchemasPutCodeBindingResponse {
  /**
   * @schema SchemasPutCodeBindingResponse#CreationDate
   */
  readonly creationDate?: string;

  /**
   * @schema SchemasPutCodeBindingResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasPutCodeBindingResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasPutCodeBindingResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'SchemasPutCodeBindingResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasPutCodeBindingResponse(obj: SchemasPutCodeBindingResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreationDate': obj.creationDate,
    'LastModified': obj.lastModified,
    'SchemaVersion': obj.schemaVersion,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasPutResourcePolicyRequest
 */
export interface SchemasPutResourcePolicyRequest {
  /**
   * @schema SchemasPutResourcePolicyRequest#Policy
   */
  readonly policy?: string;

  /**
   * @schema SchemasPutResourcePolicyRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasPutResourcePolicyRequest#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'SchemasPutResourcePolicyRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasPutResourcePolicyRequest(obj: SchemasPutResourcePolicyRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'RegistryName': obj.registryName,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasPutResourcePolicyResponse
 */
export interface SchemasPutResourcePolicyResponse {
  /**
   * @schema SchemasPutResourcePolicyResponse#Policy
   */
  readonly policy?: string;

  /**
   * @schema SchemasPutResourcePolicyResponse#RevisionId
   */
  readonly revisionId?: string;

}

/**
 * Converts an object of type 'SchemasPutResourcePolicyResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasPutResourcePolicyResponse(obj: SchemasPutResourcePolicyResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Policy': obj.policy,
    'RevisionId': obj.revisionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasSearchSchemasRequest
 */
export interface SchemasSearchSchemasRequest {
  /**
   * @schema SchemasSearchSchemasRequest#Keywords
   */
  readonly keywords?: string;

  /**
   * @schema SchemasSearchSchemasRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema SchemasSearchSchemasRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasSearchSchemasRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'SchemasSearchSchemasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasSearchSchemasRequest(obj: SchemasSearchSchemasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Keywords': obj.keywords,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasSearchSchemasResponse
 */
export interface SchemasSearchSchemasResponse {
  /**
   * @schema SchemasSearchSchemasResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SchemasSearchSchemasResponse#Schemas
   */
  readonly schemas?: SchemasSearchSchemaSummary[];

}

/**
 * Converts an object of type 'SchemasSearchSchemasResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasSearchSchemasResponse(obj: SchemasSearchSchemasResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'Schemas': obj.schemas?.map(y => toJson_SchemasSearchSchemaSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasStartDiscovererRequest
 */
export interface SchemasStartDiscovererRequest {
  /**
   * @schema SchemasStartDiscovererRequest#DiscovererId
   */
  readonly discovererId?: string;

}

/**
 * Converts an object of type 'SchemasStartDiscovererRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasStartDiscovererRequest(obj: SchemasStartDiscovererRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererId': obj.discovererId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasStartDiscovererResponse
 */
export interface SchemasStartDiscovererResponse {
  /**
   * @schema SchemasStartDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasStartDiscovererResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'SchemasStartDiscovererResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasStartDiscovererResponse(obj: SchemasStartDiscovererResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererId': obj.discovererId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasStopDiscovererRequest
 */
export interface SchemasStopDiscovererRequest {
  /**
   * @schema SchemasStopDiscovererRequest#DiscovererId
   */
  readonly discovererId?: string;

}

/**
 * Converts an object of type 'SchemasStopDiscovererRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasStopDiscovererRequest(obj: SchemasStopDiscovererRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererId': obj.discovererId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasStopDiscovererResponse
 */
export interface SchemasStopDiscovererResponse {
  /**
   * @schema SchemasStopDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasStopDiscovererResponse#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'SchemasStopDiscovererResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasStopDiscovererResponse(obj: SchemasStopDiscovererResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererId': obj.discovererId,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasTagResourceRequest
 */
export interface SchemasTagResourceRequest {
  /**
   * @schema SchemasTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SchemasTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasTagResourceRequest(obj: SchemasTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasUntagResourceRequest
 */
export interface SchemasUntagResourceRequest {
  /**
   * @schema SchemasUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema SchemasUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'SchemasUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUntagResourceRequest(obj: SchemasUntagResourceRequest | undefined): Record<string, any> | undefined {
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
 * @schema SchemasUpdateDiscovererRequest
 */
export interface SchemasUpdateDiscovererRequest {
  /**
   * @schema SchemasUpdateDiscovererRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateDiscovererRequest#DiscovererId
   */
  readonly discovererId?: string;

}

/**
 * Converts an object of type 'SchemasUpdateDiscovererRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUpdateDiscovererRequest(obj: SchemasUpdateDiscovererRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DiscovererId': obj.discovererId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasUpdateDiscovererResponse
 */
export interface SchemasUpdateDiscovererResponse {
  /**
   * @schema SchemasUpdateDiscovererResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#State
   */
  readonly state?: string;

  /**
   * @schema SchemasUpdateDiscovererResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasUpdateDiscovererResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUpdateDiscovererResponse(obj: SchemasUpdateDiscovererResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'DiscovererArn': obj.discovererArn,
    'DiscovererId': obj.discovererId,
    'SourceArn': obj.sourceArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasUpdateRegistryRequest
 */
export interface SchemasUpdateRegistryRequest {
  /**
   * @schema SchemasUpdateRegistryRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateRegistryRequest#RegistryName
   */
  readonly registryName?: string;

}

/**
 * Converts an object of type 'SchemasUpdateRegistryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUpdateRegistryRequest(obj: SchemasUpdateRegistryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'RegistryName': obj.registryName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasUpdateRegistryResponse
 */
export interface SchemasUpdateRegistryResponse {
  /**
   * @schema SchemasUpdateRegistryResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateRegistryResponse#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasUpdateRegistryResponse#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasUpdateRegistryResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasUpdateRegistryResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUpdateRegistryResponse(obj: SchemasUpdateRegistryResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'RegistryArn': obj.registryArn,
    'RegistryName': obj.registryName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasUpdateSchemaRequest
 */
export interface SchemasUpdateSchemaRequest {
  /**
   * @schema SchemasUpdateSchemaRequest#ClientTokenId
   */
  readonly clientTokenId?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#Content
   */
  readonly content?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasUpdateSchemaRequest#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasUpdateSchemaRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUpdateSchemaRequest(obj: SchemasUpdateSchemaRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientTokenId': obj.clientTokenId,
    'Content': obj.content,
    'Description': obj.description,
    'RegistryName': obj.registryName,
    'SchemaName': obj.schemaName,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasUpdateSchemaResponse
 */
export interface SchemasUpdateSchemaResponse {
  /**
   * @schema SchemasUpdateSchemaResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasUpdateSchemaResponse#Type
   */
  readonly type?: string;

  /**
   * @schema SchemasUpdateSchemaResponse#VersionCreatedDate
   */
  readonly versionCreatedDate?: string;

}

/**
 * Converts an object of type 'SchemasUpdateSchemaResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasUpdateSchemaResponse(obj: SchemasUpdateSchemaResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'LastModified': obj.lastModified,
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Type': obj.type,
    'VersionCreatedDate': obj.versionCreatedDate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasDiscovererSummary
 */
export interface SchemasDiscovererSummary {
  /**
   * @schema SchemasDiscovererSummary#DiscovererArn
   */
  readonly discovererArn?: string;

  /**
   * @schema SchemasDiscovererSummary#DiscovererId
   */
  readonly discovererId?: string;

  /**
   * @schema SchemasDiscovererSummary#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SchemasDiscovererSummary#State
   */
  readonly state?: string;

  /**
   * @schema SchemasDiscovererSummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasDiscovererSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasDiscovererSummary(obj: SchemasDiscovererSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DiscovererArn': obj.discovererArn,
    'DiscovererId': obj.discovererId,
    'SourceArn': obj.sourceArn,
    'State': obj.state,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasRegistrySummary
 */
export interface SchemasRegistrySummary {
  /**
   * @schema SchemasRegistrySummary#RegistryArn
   */
  readonly registryArn?: string;

  /**
   * @schema SchemasRegistrySummary#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasRegistrySummary#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'SchemasRegistrySummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasRegistrySummary(obj: SchemasRegistrySummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryArn': obj.registryArn,
    'RegistryName': obj.registryName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasSchemaVersionSummary
 */
export interface SchemasSchemaVersionSummary {
  /**
   * @schema SchemasSchemaVersionSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasSchemaVersionSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasSchemaVersionSummary#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasSchemaVersionSummary#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasSchemaVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasSchemaVersionSummary(obj: SchemasSchemaVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'SchemaVersion': obj.schemaVersion,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasSchemaSummary
 */
export interface SchemasSchemaSummary {
  /**
   * @schema SchemasSchemaSummary#LastModified
   */
  readonly lastModified?: string;

  /**
   * @schema SchemasSchemaSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasSchemaSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasSchemaSummary#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema SchemasSchemaSummary#VersionCount
   */
  readonly versionCount?: number;

}

/**
 * Converts an object of type 'SchemasSchemaSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasSchemaSummary(obj: SchemasSchemaSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LastModified': obj.lastModified,
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'VersionCount': obj.versionCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasSearchSchemaSummary
 */
export interface SchemasSearchSchemaSummary {
  /**
   * @schema SchemasSearchSchemaSummary#RegistryName
   */
  readonly registryName?: string;

  /**
   * @schema SchemasSearchSchemaSummary#SchemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema SchemasSearchSchemaSummary#SchemaName
   */
  readonly schemaName?: string;

  /**
   * @schema SchemasSearchSchemaSummary#SchemaVersions
   */
  readonly schemaVersions?: SchemasSearchSchemaVersionSummary[];

}

/**
 * Converts an object of type 'SchemasSearchSchemaSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasSearchSchemaSummary(obj: SchemasSearchSchemaSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistryName': obj.registryName,
    'SchemaArn': obj.schemaArn,
    'SchemaName': obj.schemaName,
    'SchemaVersions': obj.schemaVersions?.map(y => toJson_SchemasSearchSchemaVersionSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SchemasSearchSchemaVersionSummary
 */
export interface SchemasSearchSchemaVersionSummary {
  /**
   * @schema SchemasSearchSchemaVersionSummary#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema SchemasSearchSchemaVersionSummary#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema SchemasSearchSchemaVersionSummary#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'SchemasSearchSchemaVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SchemasSearchSchemaVersionSummary(obj: SchemasSearchSchemaVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CreatedDate': obj.createdDate,
    'SchemaVersion': obj.schemaVersion,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
