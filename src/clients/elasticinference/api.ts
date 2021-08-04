import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ElasticInferenceClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeAcceleratorOfferings(input: shapes.ElasticInferenceDescribeAcceleratorOfferingsRequest): ElasticInferenceResponsesDescribeAcceleratorOfferings {
    return new ElasticInferenceResponsesDescribeAcceleratorOfferings(this, this.__resources, input);
  }

  public describeAcceleratorTypes(): ElasticInferenceResponsesDescribeAcceleratorTypes {
    return new ElasticInferenceResponsesDescribeAcceleratorTypes(this, this.__resources);
  }

  public describeAccelerators(input: shapes.ElasticInferenceDescribeAcceleratorsRequest): ElasticInferenceResponsesDescribeAccelerators {
    return new ElasticInferenceResponsesDescribeAccelerators(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ElasticInferenceListTagsForResourceRequest): ElasticInferenceResponsesListTagsForResource {
    return new ElasticInferenceResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.ElasticInferenceTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.ElasticInferenceUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class ElasticInferenceResponsesDescribeAcceleratorOfferings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticInferenceDescribeAcceleratorOfferingsRequest) {
  }

  public get acceleratorTypeOfferings(): shapes.ElasticInferenceAcceleratorTypeOffering[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAcceleratorOfferings',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.DescribeAcceleratorOfferings.acceleratorTypeOfferings'),
        outputPath: 'acceleratorTypeOfferings',
        parameters: {
          locationType: this.__input.locationType,
          acceleratorTypes: this.__input.acceleratorTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAcceleratorOfferings.acceleratorTypeOfferings', props);
    return resource.getResponseField('acceleratorTypeOfferings') as unknown as shapes.ElasticInferenceAcceleratorTypeOffering[];
  }

}

export class ElasticInferenceResponsesDescribeAcceleratorTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get acceleratorTypes(): shapes.ElasticInferenceAcceleratorType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAcceleratorTypes',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.DescribeAcceleratorTypes.acceleratorTypes'),
        outputPath: 'acceleratorTypes',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAcceleratorTypes.acceleratorTypes', props);
    return resource.getResponseField('acceleratorTypes') as unknown as shapes.ElasticInferenceAcceleratorType[];
  }

}

export class ElasticInferenceResponsesDescribeAccelerators {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticInferenceDescribeAcceleratorsRequest) {
  }

  public get acceleratorSet(): shapes.ElasticInferenceElasticInferenceAccelerator[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerators',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.DescribeAccelerators.acceleratorSet'),
        outputPath: 'acceleratorSet',
        parameters: {
          acceleratorIds: this.__input.acceleratorIds,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerators.acceleratorSet', props);
    return resource.getResponseField('acceleratorSet') as unknown as shapes.ElasticInferenceElasticInferenceAccelerator[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccelerators',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.DescribeAccelerators.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          acceleratorIds: this.__input.acceleratorIds,
          filters: this.__input.filters,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccelerators.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ElasticInferenceResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElasticInferenceListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ElasticInference',
        physicalResourceId: cr.PhysicalResourceId.of('ElasticInference.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

