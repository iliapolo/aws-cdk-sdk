import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PricingClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeServices(input: shapes.PricingDescribeServicesRequest): PricingDescribeServices {
    return new PricingDescribeServices(this, 'DescribeServices', this.__resources, input);
  }

  public fetchAttributeValues(input: shapes.PricingGetAttributeValuesRequest): PricingFetchAttributeValues {
    return new PricingFetchAttributeValues(this, 'FetchAttributeValues', this.__resources, input);
  }

  public fetchProducts(input: shapes.PricingGetProductsRequest): PricingFetchProducts {
    return new PricingFetchProducts(this, 'FetchProducts', this.__resources, input);
  }

}

export class PricingDescribeServices extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PricingDescribeServicesRequest) {
    super(scope, id);
  }

  public get services(): shapes.PricingService[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServices',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.DescribeServices.Services'),
        outputPath: 'Services',
        parameters: {
          ServiceCode: this.input.serviceCode,
          FormatVersion: this.input.formatVersion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServices.Services', props);
    return resource.getResponseField('Services') as unknown as shapes.PricingService[];
  }

  public get formatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServices',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.DescribeServices.FormatVersion'),
        outputPath: 'FormatVersion',
        parameters: {
          ServiceCode: this.input.serviceCode,
          FormatVersion: this.input.formatVersion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServices.FormatVersion', props);
    return resource.getResponseField('FormatVersion') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServices',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.DescribeServices.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.input.serviceCode,
          FormatVersion: this.input.formatVersion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PricingFetchAttributeValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PricingGetAttributeValuesRequest) {
    super(scope, id);
  }

  public get attributeValues(): shapes.PricingAttributeValue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeValues',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.GetAttributeValues.AttributeValues'),
        outputPath: 'AttributeValues',
        parameters: {
          ServiceCode: this.input.serviceCode,
          AttributeName: this.input.attributeName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeValues.AttributeValues', props);
    return resource.getResponseField('AttributeValues') as unknown as shapes.PricingAttributeValue[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAttributeValues',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.GetAttributeValues.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.input.serviceCode,
          AttributeName: this.input.attributeName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAttributeValues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PricingFetchProducts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.PricingGetProductsRequest) {
    super(scope, id);
  }

  public get formatVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProducts',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.GetProducts.FormatVersion'),
        outputPath: 'FormatVersion',
        parameters: {
          ServiceCode: this.input.serviceCode,
          Filters: this.input.filters,
          FormatVersion: this.input.formatVersion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProducts.FormatVersion', props);
    return resource.getResponseField('FormatVersion') as unknown as string;
  }

  public get priceList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProducts',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.GetProducts.PriceList'),
        outputPath: 'PriceList',
        parameters: {
          ServiceCode: this.input.serviceCode,
          Filters: this.input.filters,
          FormatVersion: this.input.formatVersion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProducts.PriceList', props);
    return resource.getResponseField('PriceList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getProducts',
        service: 'Pricing',
        physicalResourceId: cr.PhysicalResourceId.of('Pricing.GetProducts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ServiceCode: this.input.serviceCode,
          Filters: this.input.filters,
          FormatVersion: this.input.formatVersion,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetProducts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

