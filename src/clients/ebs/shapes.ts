/**
 * @schema EbsCompleteSnapshotRequest
 */
export interface EbsCompleteSnapshotRequest {
  /**
   * @schema EbsCompleteSnapshotRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsCompleteSnapshotRequest#ChangedBlocksCount
   */
  readonly changedBlocksCount?: number;

  /**
   * @schema EbsCompleteSnapshotRequest#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema EbsCompleteSnapshotRequest#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

  /**
   * @schema EbsCompleteSnapshotRequest#ChecksumAggregationMethod
   */
  readonly checksumAggregationMethod?: string;

}

/**
 * Converts an object of type 'EbsCompleteSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsCompleteSnapshotRequest(obj: EbsCompleteSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'ChangedBlocksCount': obj.changedBlocksCount,
    'Checksum': obj.checksum,
    'ChecksumAlgorithm': obj.checksumAlgorithm,
    'ChecksumAggregationMethod': obj.checksumAggregationMethod,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsCompleteSnapshotResponse
 */
export interface EbsCompleteSnapshotResponse {
  /**
   * @schema EbsCompleteSnapshotResponse#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'EbsCompleteSnapshotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsCompleteSnapshotResponse(obj: EbsCompleteSnapshotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsGetSnapshotBlockRequest
 */
export interface EbsGetSnapshotBlockRequest {
  /**
   * @schema EbsGetSnapshotBlockRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsGetSnapshotBlockRequest#BlockIndex
   */
  readonly blockIndex?: number;

  /**
   * @schema EbsGetSnapshotBlockRequest#BlockToken
   */
  readonly blockToken?: string;

}

/**
 * Converts an object of type 'EbsGetSnapshotBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsGetSnapshotBlockRequest(obj: EbsGetSnapshotBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'BlockIndex': obj.blockIndex,
    'BlockToken': obj.blockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsGetSnapshotBlockResponse
 */
export interface EbsGetSnapshotBlockResponse {
  /**
   * @schema EbsGetSnapshotBlockResponse#DataLength
   */
  readonly dataLength?: number;

  /**
   * @schema EbsGetSnapshotBlockResponse#BlockData
   */
  readonly blockData?: any;

  /**
   * @schema EbsGetSnapshotBlockResponse#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema EbsGetSnapshotBlockResponse#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

}

/**
 * Converts an object of type 'EbsGetSnapshotBlockResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsGetSnapshotBlockResponse(obj: EbsGetSnapshotBlockResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataLength': obj.dataLength,
    'BlockData': obj.blockData,
    'Checksum': obj.checksum,
    'ChecksumAlgorithm': obj.checksumAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsListChangedBlocksRequest
 */
export interface EbsListChangedBlocksRequest {
  /**
   * @schema EbsListChangedBlocksRequest#FirstSnapshotId
   */
  readonly firstSnapshotId?: string;

  /**
   * @schema EbsListChangedBlocksRequest#SecondSnapshotId
   */
  readonly secondSnapshotId?: string;

  /**
   * @schema EbsListChangedBlocksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EbsListChangedBlocksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EbsListChangedBlocksRequest#StartingBlockIndex
   */
  readonly startingBlockIndex?: number;

}

/**
 * Converts an object of type 'EbsListChangedBlocksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsListChangedBlocksRequest(obj: EbsListChangedBlocksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FirstSnapshotId': obj.firstSnapshotId,
    'SecondSnapshotId': obj.secondSnapshotId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'StartingBlockIndex': obj.startingBlockIndex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsListChangedBlocksResponse
 */
export interface EbsListChangedBlocksResponse {
  /**
   * @schema EbsListChangedBlocksResponse#ChangedBlocks
   */
  readonly changedBlocks?: EbsChangedBlock[];

  /**
   * @schema EbsListChangedBlocksResponse#ExpiryTime
   */
  readonly expiryTime?: string;

  /**
   * @schema EbsListChangedBlocksResponse#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsListChangedBlocksResponse#BlockSize
   */
  readonly blockSize?: number;

  /**
   * @schema EbsListChangedBlocksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EbsListChangedBlocksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsListChangedBlocksResponse(obj: EbsListChangedBlocksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangedBlocks': obj.changedBlocks?.map(y => toJson_EbsChangedBlock(y)),
    'ExpiryTime': obj.expiryTime,
    'VolumeSize': obj.volumeSize,
    'BlockSize': obj.blockSize,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsListSnapshotBlocksRequest
 */
export interface EbsListSnapshotBlocksRequest {
  /**
   * @schema EbsListSnapshotBlocksRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsListSnapshotBlocksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EbsListSnapshotBlocksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EbsListSnapshotBlocksRequest#StartingBlockIndex
   */
  readonly startingBlockIndex?: number;

}

/**
 * Converts an object of type 'EbsListSnapshotBlocksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsListSnapshotBlocksRequest(obj: EbsListSnapshotBlocksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'StartingBlockIndex': obj.startingBlockIndex,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsListSnapshotBlocksResponse
 */
export interface EbsListSnapshotBlocksResponse {
  /**
   * @schema EbsListSnapshotBlocksResponse#Blocks
   */
  readonly blocks?: EbsBlock[];

  /**
   * @schema EbsListSnapshotBlocksResponse#ExpiryTime
   */
  readonly expiryTime?: string;

  /**
   * @schema EbsListSnapshotBlocksResponse#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsListSnapshotBlocksResponse#BlockSize
   */
  readonly blockSize?: number;

  /**
   * @schema EbsListSnapshotBlocksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EbsListSnapshotBlocksResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsListSnapshotBlocksResponse(obj: EbsListSnapshotBlocksResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Blocks': obj.blocks?.map(y => toJson_EbsBlock(y)),
    'ExpiryTime': obj.expiryTime,
    'VolumeSize': obj.volumeSize,
    'BlockSize': obj.blockSize,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsPutSnapshotBlockRequest
 */
export interface EbsPutSnapshotBlockRequest {
  /**
   * @schema EbsPutSnapshotBlockRequest#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsPutSnapshotBlockRequest#BlockIndex
   */
  readonly blockIndex?: number;

  /**
   * @schema EbsPutSnapshotBlockRequest#BlockData
   */
  readonly blockData?: any;

  /**
   * @schema EbsPutSnapshotBlockRequest#DataLength
   */
  readonly dataLength?: number;

  /**
   * @schema EbsPutSnapshotBlockRequest#Progress
   */
  readonly progress?: number;

  /**
   * @schema EbsPutSnapshotBlockRequest#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema EbsPutSnapshotBlockRequest#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

}

/**
 * Converts an object of type 'EbsPutSnapshotBlockRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsPutSnapshotBlockRequest(obj: EbsPutSnapshotBlockRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'BlockIndex': obj.blockIndex,
    'BlockData': obj.blockData,
    'DataLength': obj.dataLength,
    'Progress': obj.progress,
    'Checksum': obj.checksum,
    'ChecksumAlgorithm': obj.checksumAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsPutSnapshotBlockResponse
 */
export interface EbsPutSnapshotBlockResponse {
  /**
   * @schema EbsPutSnapshotBlockResponse#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema EbsPutSnapshotBlockResponse#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

}

/**
 * Converts an object of type 'EbsPutSnapshotBlockResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsPutSnapshotBlockResponse(obj: EbsPutSnapshotBlockResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Checksum': obj.checksum,
    'ChecksumAlgorithm': obj.checksumAlgorithm,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsStartSnapshotRequest
 */
export interface EbsStartSnapshotRequest {
  /**
   * @schema EbsStartSnapshotRequest#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsStartSnapshotRequest#ParentSnapshotId
   */
  readonly parentSnapshotId?: string;

  /**
   * @schema EbsStartSnapshotRequest#Tags
   */
  readonly tags?: EbsTag[];

  /**
   * @schema EbsStartSnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema EbsStartSnapshotRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema EbsStartSnapshotRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema EbsStartSnapshotRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema EbsStartSnapshotRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * Converts an object of type 'EbsStartSnapshotRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsStartSnapshotRequest(obj: EbsStartSnapshotRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeSize': obj.volumeSize,
    'ParentSnapshotId': obj.parentSnapshotId,
    'Tags': obj.tags?.map(y => toJson_EbsTag(y)),
    'Description': obj.description,
    'ClientToken': obj.clientToken,
    'Encrypted': obj.encrypted,
    'KmsKeyArn': obj.kmsKeyArn,
    'Timeout': obj.timeout,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsStartSnapshotResponse
 */
export interface EbsStartSnapshotResponse {
  /**
   * @schema EbsStartSnapshotResponse#Description
   */
  readonly description?: string;

  /**
   * @schema EbsStartSnapshotResponse#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsStartSnapshotResponse#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema EbsStartSnapshotResponse#Status
   */
  readonly status?: string;

  /**
   * @schema EbsStartSnapshotResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema EbsStartSnapshotResponse#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsStartSnapshotResponse#BlockSize
   */
  readonly blockSize?: number;

  /**
   * @schema EbsStartSnapshotResponse#Tags
   */
  readonly tags?: EbsTag[];

  /**
   * @schema EbsStartSnapshotResponse#ParentSnapshotId
   */
  readonly parentSnapshotId?: string;

  /**
   * @schema EbsStartSnapshotResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * Converts an object of type 'EbsStartSnapshotResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsStartSnapshotResponse(obj: EbsStartSnapshotResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Description': obj.description,
    'SnapshotId': obj.snapshotId,
    'OwnerId': obj.ownerId,
    'Status': obj.status,
    'StartTime': obj.startTime,
    'VolumeSize': obj.volumeSize,
    'BlockSize': obj.blockSize,
    'Tags': obj.tags?.map(y => toJson_EbsTag(y)),
    'ParentSnapshotId': obj.parentSnapshotId,
    'KmsKeyArn': obj.kmsKeyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsChangedBlock
 */
export interface EbsChangedBlock {
  /**
   * @schema EbsChangedBlock#BlockIndex
   */
  readonly blockIndex?: number;

  /**
   * @schema EbsChangedBlock#FirstBlockToken
   */
  readonly firstBlockToken?: string;

  /**
   * @schema EbsChangedBlock#SecondBlockToken
   */
  readonly secondBlockToken?: string;

}

/**
 * Converts an object of type 'EbsChangedBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsChangedBlock(obj: EbsChangedBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockIndex': obj.blockIndex,
    'FirstBlockToken': obj.firstBlockToken,
    'SecondBlockToken': obj.secondBlockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsBlock
 */
export interface EbsBlock {
  /**
   * @schema EbsBlock#BlockIndex
   */
  readonly blockIndex?: number;

  /**
   * @schema EbsBlock#BlockToken
   */
  readonly blockToken?: string;

}

/**
 * Converts an object of type 'EbsBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsBlock(obj: EbsBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockIndex': obj.blockIndex,
    'BlockToken': obj.blockToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EbsTag
 */
export interface EbsTag {
  /**
   * @schema EbsTag#Key
   */
  readonly key?: string;

  /**
   * @schema EbsTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'EbsTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EbsTag(obj: EbsTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
