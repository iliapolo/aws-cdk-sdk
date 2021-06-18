import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MediaStoreDataClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteObject(input: shapes.MediaStoreDataDeleteObjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.DeleteObject'),
        parameters: {
          Path: input.path,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteObject', props);
  }

  public describeObject(input: shapes.MediaStoreDataDescribeObjectRequest): MediaStoreDataDescribeObject {
    return new MediaStoreDataDescribeObject(this, 'DescribeObject', this.__resources, input);
  }

  public fetchObject(input: shapes.MediaStoreDataGetObjectRequest): MediaStoreDataFetchObject {
    return new MediaStoreDataFetchObject(this, 'FetchObject', this.__resources, input);
  }

  public listItems(input: shapes.MediaStoreDataListItemsRequest): MediaStoreDataListItems {
    return new MediaStoreDataListItems(this, 'ListItems', this.__resources, input);
  }

  public putObject(input: shapes.MediaStoreDataPutObjectRequest): MediaStoreDataPutObject {
    return new MediaStoreDataPutObject(this, 'PutObject', this.__resources, input);
  }

}

export class MediaStoreDataDescribeObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaStoreDataDescribeObjectRequest) {
    super(scope, id);
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.DescribeObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObject.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.DescribeObject.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObject.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get contentLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.DescribeObject.ContentLength'),
        outputPath: 'ContentLength',
        parameters: {
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObject.ContentLength', props);
    return resource.getResponseField('ContentLength') as unknown as number;
  }

  public get cacheControl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.DescribeObject.CacheControl'),
        outputPath: 'CacheControl',
        parameters: {
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObject.CacheControl', props);
    return resource.getResponseField('CacheControl') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.DescribeObject.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Path: this.input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeObject.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

}

export class MediaStoreDataFetchObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaStoreDataGetObjectRequest) {
    super(scope, id);
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.Body'),
        outputPath: 'Body',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.Body', props);
    return resource.getResponseField('Body') as unknown as any;
  }

  public get cacheControl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.CacheControl'),
        outputPath: 'CacheControl',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.CacheControl', props);
    return resource.getResponseField('CacheControl') as unknown as string;
  }

  public get contentRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.ContentRange'),
        outputPath: 'ContentRange',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentRange', props);
    return resource.getResponseField('ContentRange') as unknown as string;
  }

  public get contentLength(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.ContentLength'),
        outputPath: 'ContentLength',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentLength', props);
    return resource.getResponseField('ContentLength') as unknown as number;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.ContentType'),
        outputPath: 'ContentType',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ContentType', props);
    return resource.getResponseField('ContentType') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get lastModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.LastModified'),
        outputPath: 'LastModified',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

  public get statusCode(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.GetObject.StatusCode'),
        outputPath: 'StatusCode',
        parameters: {
          Path: this.input.path,
          Range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetObject.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

}

export class MediaStoreDataListItems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaStoreDataListItemsRequest) {
    super(scope, id);
  }

  public get items(): shapes.MediaStoreDataItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listItems',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.ListItems.Items'),
        outputPath: 'Items',
        parameters: {
          Path: this.input.path,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListItems.Items', props);
    return resource.getResponseField('Items') as unknown as shapes.MediaStoreDataItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listItems',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.ListItems.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Path: this.input.path,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListItems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaStoreDataPutObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MediaStoreDataPutObjectRequest) {
    super(scope, id);
  }

  public get contentSha256(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.PutObject.ContentSHA256'),
        outputPath: 'ContentSHA256',
        parameters: {
          Body: {
          },
          Path: this.input.path,
          ContentType: this.input.contentType,
          CacheControl: this.input.cacheControl,
          StorageClass: this.input.storageClass,
          UploadAvailability: this.input.uploadAvailability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.ContentSHA256', props);
    return resource.getResponseField('ContentSHA256') as unknown as string;
  }

  public get eTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.PutObject.ETag'),
        outputPath: 'ETag',
        parameters: {
          Body: {
          },
          Path: this.input.path,
          ContentType: this.input.contentType,
          CacheControl: this.input.cacheControl,
          StorageClass: this.input.storageClass,
          UploadAvailability: this.input.uploadAvailability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.ETag', props);
    return resource.getResponseField('ETag') as unknown as string;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putObject',
        service: 'MediaStoreData',
        physicalResourceId: cr.PhysicalResourceId.of('MediaStoreData.PutObject.StorageClass'),
        outputPath: 'StorageClass',
        parameters: {
          Body: {
          },
          Path: this.input.path,
          ContentType: this.input.contentType,
          CacheControl: this.input.cacheControl,
          StorageClass: this.input.storageClass,
          UploadAvailability: this.input.uploadAvailability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutObject.StorageClass', props);
    return resource.getResponseField('StorageClass') as unknown as string;
  }

}

