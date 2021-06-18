import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ElasticInferenceClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeAcceleratorOfferings(input: shapes.ElasticInferenceDescribeAcceleratorOfferingsRequest): ElasticInferenceDescribeAcceleratorOfferings {
    return new ElasticInferenceDescribeAcceleratorOfferings(this, 'DescribeAcceleratorOfferings', this.__resources, input);
  }

  public describeAcceleratorTypes(): ElasticInferenceDescribeAcceleratorTypes {
    return new ElasticInferenceDescribeAcceleratorTypes(this, 'DescribeAcceleratorTypes', this.__resources);
  }

  public describeAccelerators(input: shapes.ElasticInferenceDescribeAcceleratorsRequest): ElasticInferenceDescribeAccelerators {
    return new ElasticInferenceDescribeAccelerators(this, 'DescribeAccelerators', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ElasticInferenceListTagsForResourceRequest): ElasticInferenceListTagsForResource {
    return new ElasticInferenceListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

export class ElasticInferenceDescribeAcceleratorOfferings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticInferenceDescribeAcceleratorOfferingsRequest) {
    super(scope, id);
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
          locationType: this.input.locationType,
          acceleratorTypes: this.input.acceleratorTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAcceleratorOfferings.acceleratorTypeOfferings', props);
    return resource.getResponseField('acceleratorTypeOfferings') as unknown as shapes.ElasticInferenceAcceleratorTypeOffering[];
  }

}

export class ElasticInferenceDescribeAcceleratorTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeAcceleratorTypes.acceleratorTypes', props);
    return resource.getResponseField('acceleratorTypes') as unknown as shapes.ElasticInferenceAcceleratorType[];
  }

}

export class ElasticInferenceDescribeAccelerators extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticInferenceDescribeAcceleratorsRequest) {
    super(scope, id);
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
          acceleratorIds: this.input.acceleratorIds,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerators.acceleratorSet', props);
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
          acceleratorIds: this.input.acceleratorIds,
          filters: this.input.filters,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccelerators.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ElasticInferenceListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElasticInferenceListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

