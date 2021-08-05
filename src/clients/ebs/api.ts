import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EbsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public completeSnapshot(input: shapes.EbsCompleteSnapshotRequest): EBSResponsesCompleteSnapshot {
    return new EBSResponsesCompleteSnapshot(this, this.__resources, input);
  }

  public fetchSnapshotBlock(input: shapes.EbsGetSnapshotBlockRequest): EBSResponsesFetchSnapshotBlock {
    return new EBSResponsesFetchSnapshotBlock(this, this.__resources, input);
  }

  public listChangedBlocks(input: shapes.EbsListChangedBlocksRequest): EBSResponsesListChangedBlocks {
    return new EBSResponsesListChangedBlocks(this, this.__resources, input);
  }

  public listSnapshotBlocks(input: shapes.EbsListSnapshotBlocksRequest): EBSResponsesListSnapshotBlocks {
    return new EBSResponsesListSnapshotBlocks(this, this.__resources, input);
  }

  public putSnapshotBlock(input: shapes.EbsPutSnapshotBlockRequest): EBSResponsesPutSnapshotBlock {
    return new EBSResponsesPutSnapshotBlock(this, this.__resources, input);
  }

  public startSnapshot(input: shapes.EbsStartSnapshotRequest): EBSResponsesStartSnapshot {
    return new EBSResponsesStartSnapshot(this, this.__resources, input);
  }

}

export class EBSResponsesCompleteSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EbsCompleteSnapshotRequest) {
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
          SnapshotId: this.__input.snapshotId,
          ChangedBlocksCount: this.__input.changedBlocksCount,
          Checksum: this.__input.checksum,
          ChecksumAlgorithm: this.__input.checksumAlgorithm,
          ChecksumAggregationMethod: this.__input.checksumAggregationMethod,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteSnapshot.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class EBSResponsesFetchSnapshotBlock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EbsGetSnapshotBlockRequest) {
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
          SnapshotId: this.__input.snapshotId,
          BlockIndex: this.__input.blockIndex,
          BlockToken: this.__input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSnapshotBlock.DataLength', props);
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
          SnapshotId: this.__input.snapshotId,
          BlockIndex: this.__input.blockIndex,
          BlockToken: this.__input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSnapshotBlock.BlockData', props);
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
          SnapshotId: this.__input.snapshotId,
          BlockIndex: this.__input.blockIndex,
          BlockToken: this.__input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSnapshotBlock.Checksum', props);
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
          SnapshotId: this.__input.snapshotId,
          BlockIndex: this.__input.blockIndex,
          BlockToken: this.__input.blockToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSnapshotBlock.ChecksumAlgorithm', props);
    return resource.getResponseField('ChecksumAlgorithm') as unknown as string;
  }

}

export class EBSResponsesListChangedBlocks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EbsListChangedBlocksRequest) {
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
          FirstSnapshotId: this.__input.firstSnapshotId,
          SecondSnapshotId: this.__input.secondSnapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangedBlocks.ChangedBlocks', props);
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
          FirstSnapshotId: this.__input.firstSnapshotId,
          SecondSnapshotId: this.__input.secondSnapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangedBlocks.ExpiryTime', props);
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
          FirstSnapshotId: this.__input.firstSnapshotId,
          SecondSnapshotId: this.__input.secondSnapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangedBlocks.VolumeSize', props);
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
          FirstSnapshotId: this.__input.firstSnapshotId,
          SecondSnapshotId: this.__input.secondSnapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangedBlocks.BlockSize', props);
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
          FirstSnapshotId: this.__input.firstSnapshotId,
          SecondSnapshotId: this.__input.secondSnapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangedBlocks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EBSResponsesListSnapshotBlocks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EbsListSnapshotBlocksRequest) {
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
          SnapshotId: this.__input.snapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSnapshotBlocks.Blocks', props);
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
          SnapshotId: this.__input.snapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSnapshotBlocks.ExpiryTime', props);
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
          SnapshotId: this.__input.snapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSnapshotBlocks.VolumeSize', props);
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
          SnapshotId: this.__input.snapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSnapshotBlocks.BlockSize', props);
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
          SnapshotId: this.__input.snapshotId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          StartingBlockIndex: this.__input.startingBlockIndex,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSnapshotBlocks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class EBSResponsesPutSnapshotBlock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EbsPutSnapshotBlockRequest) {
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
          SnapshotId: this.__input.snapshotId,
          BlockIndex: this.__input.blockIndex,
          BlockData: {
          },
          DataLength: this.__input.dataLength,
          Progress: this.__input.progress,
          Checksum: this.__input.checksum,
          ChecksumAlgorithm: this.__input.checksumAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSnapshotBlock.Checksum', props);
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
          SnapshotId: this.__input.snapshotId,
          BlockIndex: this.__input.blockIndex,
          BlockData: {
          },
          DataLength: this.__input.dataLength,
          Progress: this.__input.progress,
          Checksum: this.__input.checksum,
          ChecksumAlgorithm: this.__input.checksumAlgorithm,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSnapshotBlock.ChecksumAlgorithm', props);
    return resource.getResponseField('ChecksumAlgorithm') as unknown as string;
  }

}

export class EBSResponsesStartSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EbsStartSnapshotRequest) {
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.Description', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.SnapshotId', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.OwnerId', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.Status', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.StartTime', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.VolumeSize', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.BlockSize', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.Tags', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.ParentSnapshotId', props);
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
          VolumeSize: this.__input.volumeSize,
          ParentSnapshotId: this.__input.parentSnapshotId,
          Tags: this.__input.tags,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
          Encrypted: this.__input.encrypted,
          KmsKeyArn: this.__input.kmsKeyArn,
          Timeout: this.__input.timeout,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSnapshot.KmsKeyArn', props);
    return resource.getResponseField('KmsKeyArn') as unknown as string;
  }

}

