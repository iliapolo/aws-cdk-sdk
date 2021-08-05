import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class PricingClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeServices(input: shapes.PricingDescribeServicesRequest): PricingResponsesDescribeServices {
    return new PricingResponsesDescribeServices(this, this.__resources, input);
  }

  public fetchAttributeValues(input: shapes.PricingGetAttributeValuesRequest): PricingResponsesFetchAttributeValues {
    return new PricingResponsesFetchAttributeValues(this, this.__resources, input);
  }

  public fetchProducts(input: shapes.PricingGetProductsRequest): PricingResponsesFetchProducts {
    return new PricingResponsesFetchProducts(this, this.__resources, input);
  }

}

export class PricingResponsesDescribeServices {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PricingDescribeServicesRequest) {
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
          ServiceCode: this.__input.serviceCode,
          FormatVersion: this.__input.formatVersion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServices.Services', props);
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
          ServiceCode: this.__input.serviceCode,
          FormatVersion: this.__input.formatVersion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServices.FormatVersion', props);
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
          ServiceCode: this.__input.serviceCode,
          FormatVersion: this.__input.formatVersion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServices.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PricingResponsesFetchAttributeValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PricingGetAttributeValuesRequest) {
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
          ServiceCode: this.__input.serviceCode,
          AttributeName: this.__input.attributeName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeValues.AttributeValues', props);
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
          ServiceCode: this.__input.serviceCode,
          AttributeName: this.__input.attributeName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAttributeValues.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class PricingResponsesFetchProducts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.PricingGetProductsRequest) {
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
          ServiceCode: this.__input.serviceCode,
          Filters: this.__input.filters,
          FormatVersion: this.__input.formatVersion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProducts.FormatVersion', props);
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
          ServiceCode: this.__input.serviceCode,
          Filters: this.__input.filters,
          FormatVersion: this.__input.formatVersion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProducts.PriceList', props);
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
          ServiceCode: this.__input.serviceCode,
          Filters: this.__input.filters,
          FormatVersion: this.__input.formatVersion,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetProducts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

