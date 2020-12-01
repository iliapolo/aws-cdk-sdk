/**
 * @schema CompleteSnapshotRequest
 */
export interface CompleteSnapshotRequest {
  /**
   * @schema CompleteSnapshotRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema CompleteSnapshotRequest#ChangedBlocksCount
   */
  readonly changedBlocksCount: number;

  /**
   * @schema CompleteSnapshotRequest#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema CompleteSnapshotRequest#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

  /**
   * @schema CompleteSnapshotRequest#ChecksumAggregationMethod
   */
  readonly checksumAggregationMethod?: string;

}

/**
 * @schema CompleteSnapshotResponse
 */
export interface CompleteSnapshotResponse {
  /**
   * @schema CompleteSnapshotResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema GetSnapshotBlockRequest
 */
export interface GetSnapshotBlockRequest {
  /**
   * @schema GetSnapshotBlockRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema GetSnapshotBlockRequest#BlockIndex
   */
  readonly blockIndex: number;

  /**
   * @schema GetSnapshotBlockRequest#BlockToken
   */
  readonly blockToken: string;

}

/**
 * @schema GetSnapshotBlockResponse
 */
export interface GetSnapshotBlockResponse {
  /**
   * @schema GetSnapshotBlockResponse#DataLength
   */
  readonly dataLength?: number;

  /**
   * @schema GetSnapshotBlockResponse#BlockData
   */
  readonly blockData?: any;

  /**
   * @schema GetSnapshotBlockResponse#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema GetSnapshotBlockResponse#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

}

/**
 * @schema ListChangedBlocksRequest
 */
export interface ListChangedBlocksRequest {
  /**
   * @schema ListChangedBlocksRequest#FirstSnapshotId
   */
  readonly firstSnapshotId?: string;

  /**
   * @schema ListChangedBlocksRequest#SecondSnapshotId
   */
  readonly secondSnapshotId: string;

  /**
   * @schema ListChangedBlocksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListChangedBlocksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListChangedBlocksRequest#StartingBlockIndex
   */
  readonly startingBlockIndex?: number;

}

/**
 * @schema ListChangedBlocksResponse
 */
export interface ListChangedBlocksResponse {
  /**
   * @schema ListChangedBlocksResponse#ChangedBlocks
   */
  readonly changedBlocks?: ChangedBlock[];

  /**
   * @schema ListChangedBlocksResponse#ExpiryTime
   */
  readonly expiryTime?: string;

  /**
   * @schema ListChangedBlocksResponse#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema ListChangedBlocksResponse#BlockSize
   */
  readonly blockSize?: number;

  /**
   * @schema ListChangedBlocksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSnapshotBlocksRequest
 */
export interface ListSnapshotBlocksRequest {
  /**
   * @schema ListSnapshotBlocksRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema ListSnapshotBlocksRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSnapshotBlocksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSnapshotBlocksRequest#StartingBlockIndex
   */
  readonly startingBlockIndex?: number;

}

/**
 * @schema ListSnapshotBlocksResponse
 */
export interface ListSnapshotBlocksResponse {
  /**
   * @schema ListSnapshotBlocksResponse#Blocks
   */
  readonly blocks?: Block[];

  /**
   * @schema ListSnapshotBlocksResponse#ExpiryTime
   */
  readonly expiryTime?: string;

  /**
   * @schema ListSnapshotBlocksResponse#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema ListSnapshotBlocksResponse#BlockSize
   */
  readonly blockSize?: number;

  /**
   * @schema ListSnapshotBlocksResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PutSnapshotBlockRequest
 */
export interface PutSnapshotBlockRequest {
  /**
   * @schema PutSnapshotBlockRequest#SnapshotId
   */
  readonly snapshotId: string;

  /**
   * @schema PutSnapshotBlockRequest#BlockIndex
   */
  readonly blockIndex: number;

  /**
   * @schema PutSnapshotBlockRequest#BlockData
   */
  readonly blockData: any;

  /**
   * @schema PutSnapshotBlockRequest#DataLength
   */
  readonly dataLength: number;

  /**
   * @schema PutSnapshotBlockRequest#Progress
   */
  readonly progress?: number;

  /**
   * @schema PutSnapshotBlockRequest#Checksum
   */
  readonly checksum: string;

  /**
   * @schema PutSnapshotBlockRequest#ChecksumAlgorithm
   */
  readonly checksumAlgorithm: string;

}

/**
 * @schema PutSnapshotBlockResponse
 */
export interface PutSnapshotBlockResponse {
  /**
   * @schema PutSnapshotBlockResponse#Checksum
   */
  readonly checksum?: string;

  /**
   * @schema PutSnapshotBlockResponse#ChecksumAlgorithm
   */
  readonly checksumAlgorithm?: string;

}

/**
 * @schema StartSnapshotRequest
 */
export interface StartSnapshotRequest {
  /**
   * @schema StartSnapshotRequest#VolumeSize
   */
  readonly volumeSize: number;

  /**
   * @schema StartSnapshotRequest#ParentSnapshotId
   */
  readonly parentSnapshotId?: string;

  /**
   * @schema StartSnapshotRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema StartSnapshotRequest#Description
   */
  readonly description?: string;

  /**
   * @schema StartSnapshotRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StartSnapshotRequest#Encrypted
   */
  readonly encrypted?: boolean;

  /**
   * @schema StartSnapshotRequest#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema StartSnapshotRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema StartSnapshotResponse
 */
export interface StartSnapshotResponse {
  /**
   * @schema StartSnapshotResponse#Description
   */
  readonly description?: string;

  /**
   * @schema StartSnapshotResponse#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema StartSnapshotResponse#OwnerId
   */
  readonly ownerId?: string;

  /**
   * @schema StartSnapshotResponse#Status
   */
  readonly status?: string;

  /**
   * @schema StartSnapshotResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema StartSnapshotResponse#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema StartSnapshotResponse#BlockSize
   */
  readonly blockSize?: number;

  /**
   * @schema StartSnapshotResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema StartSnapshotResponse#ParentSnapshotId
   */
  readonly parentSnapshotId?: string;

  /**
   * @schema StartSnapshotResponse#KmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema ChangedBlock
 */
export interface ChangedBlock {
  /**
   * @schema ChangedBlock#BlockIndex
   */
  readonly blockIndex?: number;

  /**
   * @schema ChangedBlock#FirstBlockToken
   */
  readonly firstBlockToken?: string;

  /**
   * @schema ChangedBlock#SecondBlockToken
   */
  readonly secondBlockToken?: string;

}

/**
 * @schema Block
 */
export interface Block {
  /**
   * @schema Block#BlockIndex
   */
  readonly blockIndex?: number;

  /**
   * @schema Block#BlockToken
   */
  readonly blockToken?: string;

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
