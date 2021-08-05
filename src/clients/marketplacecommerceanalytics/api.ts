import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MarketplaceCommerceAnalyticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public generateDataSet(input: shapes.MarketplaceCommerceAnalyticsGenerateDataSetRequest): MarketplaceCommerceAnalyticsResponsesGenerateDataSet {
    return new MarketplaceCommerceAnalyticsResponsesGenerateDataSet(this, this.__resources, input);
  }

  public startSupportDataExport(input: shapes.MarketplaceCommerceAnalyticsStartSupportDataExportRequest): MarketplaceCommerceAnalyticsResponsesStartSupportDataExport {
    return new MarketplaceCommerceAnalyticsResponsesStartSupportDataExport(this, this.__resources, input);
  }

}

export class MarketplaceCommerceAnalyticsResponsesGenerateDataSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCommerceAnalyticsGenerateDataSetRequest) {
  }

  public get dataSetRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'generateDataSet',
        service: 'MarketplaceCommerceAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCommerceAnalytics.GenerateDataSet.dataSetRequestId'),
        outputPath: 'dataSetRequestId',
        parameters: {
          dataSetType: this.__input.dataSetType,
          dataSetPublicationDate: this.__input.dataSetPublicationDate,
          roleNameArn: this.__input.roleNameArn,
          destinationS3BucketName: this.__input.destinationS3BucketName,
          destinationS3Prefix: this.__input.destinationS3Prefix,
          snsTopicArn: this.__input.snsTopicArn,
          customerDefinedValues: this.__input.customerDefinedValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GenerateDataSet.dataSetRequestId', props);
    return resource.getResponseField('dataSetRequestId') as unknown as string;
  }

}

export class MarketplaceCommerceAnalyticsResponsesStartSupportDataExport {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MarketplaceCommerceAnalyticsStartSupportDataExportRequest) {
  }

  public get dataSetRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSupportDataExport',
        service: 'MarketplaceCommerceAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('MarketplaceCommerceAnalytics.StartSupportDataExport.dataSetRequestId'),
        outputPath: 'dataSetRequestId',
        parameters: {
          dataSetType: this.__input.dataSetType,
          fromDate: this.__input.fromDate,
          roleNameArn: this.__input.roleNameArn,
          destinationS3BucketName: this.__input.destinationS3BucketName,
          destinationS3Prefix: this.__input.destinationS3Prefix,
          snsTopicArn: this.__input.snsTopicArn,
          customerDefinedValues: this.__input.customerDefinedValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSupportDataExport.dataSetRequestId', props);
    return resource.getResponseField('dataSetRequestId') as unknown as string;
  }

}

