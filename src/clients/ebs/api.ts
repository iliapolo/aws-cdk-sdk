import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EbsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public completeSnapshot(input: shapes.EbsCompleteSnapshotRequest): EBSCompleteSnapshot {
    return new EBSCompleteSnapshot(this, 'CompleteSnapshot', this.__resources, input);
  }

  public fetchSnapshotBlock(input: shapes.EbsGetSnapshotBlockRequest): EBSFetchSnapshotBlock {
    return new EBSFetchSnapshotBlock(this, 'FetchSnapshotBlock', this.__resources, input);
  }

  public listChangedBlocks(input: shapes.EbsListChangedBlocksRequest): EBSListChangedBlocks {
    return new EBSListChangedBlocks(this, 'ListChangedBlocks', this.__resources, input);
  }

  public listSnapshotBlocks(input: shapes.EbsListSnapshotBlocksRequest): EBSListSnapshotBlocks {
    return new EBSListSnapshotBlocks(this, 'ListSnapshotBlocks', this.__resources, input);
  }

  public putSnapshotBlock(input: shapes.EbsPutSnapshotBlockRequest): EBSPutSnapshotBlock {
    return new EBSPutSnapshotBlock(this, 'PutSnapshotBlock', this.__resources, input);
  }

  public startSnapshot(input: shapes.EbsStartSnapshotRequest): EBSStartSnapshot {
    return new EBSStartSnapshot(this, 'StartSnapshot', this.__resources, input);
  }

}

export class EBSCompleteSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EbsCompleteSnapshotRequest) {
    super(scope, id);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.CompleteSnapshot.Status'),
        outputPath: 'Status',
        parameters: {
          SnapshotId: this.input.snapshotId,
          ChangedBlocksCount: this.input.changedBlocksCount,
          Checksum: this.input.checksum,
          ChecksumAlgorithm: this.input.checksumAlgorithm,
          ChecksumAggregationMethod: this.input.checksumAggregationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteSnapshot.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class EBSFetchSnapshotBlock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EbsGetSnapshotBlockRequest) {
    super(scope, id);
  }

  public get dataLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSnapshotBlock',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.GetSnapshotBlock.DataLength'),
        outputPath: 'DataLength',
        parameters: {
          SnapshotId: this.input.snapshotId,
          BlockIndex: this.input.blockIndex,
          BlockToken: this.input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSnapshotBlock.DataLength', props);
    return resource.getResponseField('DataLength') as unknown as number;
  }

  public get blockData(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSnapshotBlock',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.GetSnapshotBlock.BlockData'),
        outputPath: 'BlockData',
        parameters: {
          SnapshotId: this.input.snapshotId,
          BlockIndex: this.input.blockIndex,
          BlockToken: this.input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSnapshotBlock.BlockData', props);
    return resource.getResponseField('BlockData') as unknown as any;
  }

  public get checksum(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSnapshotBlock',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.GetSnapshotBlock.Checksum'),
        outputPath: 'Checksum',
        parameters: {
          SnapshotId: this.input.snapshotId,
          BlockIndex: this.input.blockIndex,
          BlockToken: this.input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSnapshotBlock.Checksum', props);
    return resource.getResponseField('Checksum') as unknown as string;
  }

  public get checksumAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSnapshotBlock',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.GetSnapshotBlock.ChecksumAlgorithm'),
        outputPath: 'ChecksumAlgorithm',
        parameters: {
          SnapshotId: this.input.snapshotId,
          BlockIndex: this.input.blockIndex,
          BlockToken: this.input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSnapshotBlock.ChecksumAlgorithm', props);
    return resource.getResponseField('ChecksumAlgorithm') as unknown as string;
  }

}

export class EBSListChangedBlocks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EbsListChangedBlocksRequest) {
    super(scope, id);
  }

  public get changedBlocks(): shapes.EbsChangedBlock[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangedBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListChangedBlocks.ChangedBlocks'),
        outputPath: 'ChangedBlocks',
        parameters: {
          FirstSnapshotId: this.input.firstSnapshotId,
          SecondSnapshotId: this.input.secondSnapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangedBlocks.ChangedBlocks', props);
    return resource.getResponseField('ChangedBlocks') as unknown as shapes.EbsChangedBlock[];
  }

  public get expiryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangedBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListChangedBlocks.ExpiryTime'),
        outputPath: 'ExpiryTime',
        parameters: {
          FirstSnapshotId: this.input.firstSnapshotId,
          SecondSnapshotId: this.input.secondSnapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangedBlocks.ExpiryTime', props);
    return resource.getResponseField('ExpiryTime') as unknown as string;
  }

  public get volumeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangedBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListChangedBlocks.VolumeSize'),
        outputPath: 'VolumeSize',
        parameters: {
          FirstSnapshotId: this.input.firstSnapshotId,
          SecondSnapshotId: this.input.secondSnapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangedBlocks.VolumeSize', props);
    return resource.getResponseField('VolumeSize') as unknown as number;
  }

  public get blockSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangedBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListChangedBlocks.BlockSize'),
        outputPath: 'BlockSize',
        parameters: {
          FirstSnapshotId: this.input.firstSnapshotId,
          SecondSnapshotId: this.input.secondSnapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangedBlocks.BlockSize', props);
    return resource.getResponseField('BlockSize') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangedBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListChangedBlocks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FirstSnapshotId: this.input.firstSnapshotId,
          SecondSnapshotId: this.input.secondSnapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangedBlocks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EBSListSnapshotBlocks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EbsListSnapshotBlocksRequest) {
    super(scope, id);
  }

  public get blocks(): shapes.EbsBlock[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSnapshotBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListSnapshotBlocks.Blocks'),
        outputPath: 'Blocks',
        parameters: {
          SnapshotId: this.input.snapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSnapshotBlocks.Blocks', props);
    return resource.getResponseField('Blocks') as unknown as shapes.EbsBlock[];
  }

  public get expiryTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSnapshotBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListSnapshotBlocks.ExpiryTime'),
        outputPath: 'ExpiryTime',
        parameters: {
          SnapshotId: this.input.snapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSnapshotBlocks.ExpiryTime', props);
    return resource.getResponseField('ExpiryTime') as unknown as string;
  }

  public get volumeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSnapshotBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListSnapshotBlocks.VolumeSize'),
        outputPath: 'VolumeSize',
        parameters: {
          SnapshotId: this.input.snapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSnapshotBlocks.VolumeSize', props);
    return resource.getResponseField('VolumeSize') as unknown as number;
  }

  public get blockSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSnapshotBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListSnapshotBlocks.BlockSize'),
        outputPath: 'BlockSize',
        parameters: {
          SnapshotId: this.input.snapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSnapshotBlocks.BlockSize', props);
    return resource.getResponseField('BlockSize') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSnapshotBlocks',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.ListSnapshotBlocks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SnapshotId: this.input.snapshotId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          StartingBlockIndex: this.input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSnapshotBlocks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EBSPutSnapshotBlock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EbsPutSnapshotBlockRequest) {
    super(scope, id);
  }

  public get checksum(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSnapshotBlock',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.PutSnapshotBlock.Checksum'),
        outputPath: 'Checksum',
        parameters: {
          SnapshotId: this.input.snapshotId,
          BlockIndex: this.input.blockIndex,
          BlockData: {
          },
          DataLength: this.input.dataLength,
          Progress: this.input.progress,
          Checksum: this.input.checksum,
          ChecksumAlgorithm: this.input.checksumAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSnapshotBlock.Checksum', props);
    return resource.getResponseField('Checksum') as unknown as string;
  }

  public get checksumAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSnapshotBlock',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.PutSnapshotBlock.ChecksumAlgorithm'),
        outputPath: 'ChecksumAlgorithm',
        parameters: {
          SnapshotId: this.input.snapshotId,
          BlockIndex: this.input.blockIndex,
          BlockData: {
          },
          DataLength: this.input.dataLength,
          Progress: this.input.progress,
          Checksum: this.input.checksum,
          ChecksumAlgorithm: this.input.checksumAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSnapshotBlock.ChecksumAlgorithm', props);
    return resource.getResponseField('ChecksumAlgorithm') as unknown as string;
  }

}

export class EBSStartSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EbsStartSnapshotRequest) {
    super(scope, id);
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.Description'),
        outputPath: 'Description',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get snapshotId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.SnapshotId'),
        outputPath: 'SnapshotId',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.SnapshotId', props);
    return resource.getResponseField('SnapshotId') as unknown as string;
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.OwnerId'),
        outputPath: 'OwnerId',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.OwnerId', props);
    return resource.getResponseField('OwnerId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.Status'),
        outputPath: 'Status',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get volumeSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.VolumeSize'),
        outputPath: 'VolumeSize',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.VolumeSize', props);
    return resource.getResponseField('VolumeSize') as unknown as number;
  }

  public get blockSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.BlockSize'),
        outputPath: 'BlockSize',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.BlockSize', props);
    return resource.getResponseField('BlockSize') as unknown as number;
  }

  public get tags(): shapes.EbsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.Tags'),
        outputPath: 'Tags',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.EbsTag[];
  }

  public get parentSnapshotId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.ParentSnapshotId'),
        outputPath: 'ParentSnapshotId',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.ParentSnapshotId', props);
    return resource.getResponseField('ParentSnapshotId') as unknown as string;
  }

  public get kmsKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSnapshot',
        service: 'EBS',
        physicalResourceId: cr.PhysicalResourceId.of('EBS.StartSnapshot.KmsKeyArn'),
        outputPath: 'KmsKeyArn',
        parameters: {
          VolumeSize: this.input.volumeSize,
          ParentSnapshotId: this.input.parentSnapshotId,
          Tags: this.input.tags,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
          Encrypted: this.input.encrypted,
          KmsKeyArn: this.input.kmsKeyArn,
          Timeout: this.input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSnapshot.KmsKeyArn', props);
    return resource.getResponseField('KmsKeyArn') as unknown as string;
  }

}

