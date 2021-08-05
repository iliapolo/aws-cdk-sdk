/**
 * @schema EbsCompleteSnapshotRequest
 */
export interface EbsCompleteSnapshotRequest {
  /**
   * @schema EbsCompleteSnapshotRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema EbsCompleteSnapshotRequest#ChangedBlocksCount
   */
  readonly changedBlocksCount: number;

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
 * @schema EbsCompleteSnapshotResponse
 */
export interface EbsCompleteSnapshotResponse {
  /**
   * @schema EbsCompleteSnapshotResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema EbsGetSnapshotBlockRequest
 */
export interface EbsGetSnapshotBlockRequest {
  /**
   * @schema EbsGetSnapshotBlockRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema EbsGetSnapshotBlockRequest#BlockIndex
   */
  readonly blockIndex: number;

  /**
   * @schema EbsGetSnapshotBlockRequest#BlockToken
   */
  readonly blockToken: string;

}

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
  readonly secondSnapshotId: string;

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
 * @schema EbsListSnapshotBlocksRequest
 */
export interface EbsListSnapshotBlocksRequest {
  /**
   * @schema EbsListSnapshotBlocksRequest#SnapshotId
   */
  readonly snapshotId: string;

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
 * @schema EbsPutSnapshotBlockRequest
 */
export interface EbsPutSnapshotBlockRequest {
  /**
   * @schema EbsPutSnapshotBlockRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema EbsPutSnapshotBlockRequest#BlockIndex
   */
  readonly blockIndex: number;

  /**
   * @schema EbsPutSnapshotBlockRequest#BlockData
   */
  readonly blockData: any;

  /**
   * @schema EbsPutSnapshotBlockRequest#DataLength
   */
  readonly dataLength: number;

  /**
   * @schema EbsPutSnapshotBlockRequest#Progress
   */
  readonly progress?: number;

  /**
   * @schema EbsPutSnapshotBlockRequest#Checksum
   */
  readonly checksum: string;

  /**
   * @schema EbsPutSnapshotBlockRequest#ChecksumAlgorithm
   */
  readonly checksumAlgorithm: string;

}

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
 * @schema EbsStartSnapshotRequest
 */
export interface EbsStartSnapshotRequest {
  /**
   * @schema EbsStartSnapshotRequest#VolumeSize
   */
  readonly volumeSize: number;

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
