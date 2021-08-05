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

  public describeObject(input: shapes.MediaStoreDataDescribeObjectRequest): MediaStoreDataResponsesDescribeObject {
    return new MediaStoreDataResponsesDescribeObject(this, this.__resources, input);
  }

  public fetchObject(input: shapes.MediaStoreDataGetObjectRequest): MediaStoreDataResponsesFetchObject {
    return new MediaStoreDataResponsesFetchObject(this, this.__resources, input);
  }

  public listItems(input: shapes.MediaStoreDataListItemsRequest): MediaStoreDataResponsesListItems {
    return new MediaStoreDataResponsesListItems(this, this.__resources, input);
  }

  public putObject(input: shapes.MediaStoreDataPutObjectRequest): MediaStoreDataResponsesPutObject {
    return new MediaStoreDataResponsesPutObject(this, this.__resources, input);
  }

}

export class MediaStoreDataResponsesDescribeObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreDataDescribeObjectRequest) {
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
          Path: this.__input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObject.ETag', props);
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
          Path: this.__input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObject.ContentType', props);
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
          Path: this.__input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObject.ContentLength', props);
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
          Path: this.__input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObject.CacheControl', props);
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
          Path: this.__input.path,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeObject.LastModified', props);
    return resource.getResponseField('LastModified') as unknown as string;
  }

}

export class MediaStoreDataResponsesFetchObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreDataGetObjectRequest) {
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.Body', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.CacheControl', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentRange', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentLength', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ContentType', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.ETag', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.LastModified', props);
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
          Path: this.__input.path,
          Range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetObject.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

}

export class MediaStoreDataResponsesListItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreDataListItemsRequest) {
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
          Path: this.__input.path,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListItems.Items', props);
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
          Path: this.__input.path,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListItems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MediaStoreDataResponsesPutObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MediaStoreDataPutObjectRequest) {
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
          Path: this.__input.path,
          ContentType: this.__input.contentType,
          CacheControl: this.__input.cacheControl,
          StorageClass: this.__input.storageClass,
          UploadAvailability: this.__input.uploadAvailability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.ContentSHA256', props);
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
          Path: this.__input.path,
          ContentType: this.__input.contentType,
          CacheControl: this.__input.cacheControl,
          StorageClass: this.__input.storageClass,
          UploadAvailability: this.__input.uploadAvailability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.ETag', props);
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
          Path: this.__input.path,
          ContentType: this.__input.contentType,
          CacheControl: this.__input.cacheControl,
          StorageClass: this.__input.storageClass,
          UploadAvailability: this.__input.uploadAvailability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutObject.StorageClass', props);
    return resource.getResponseField('StorageClass') as unknown as string;
  }

}

