import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MarketplaceCommerceAnalyticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public generateDataSet(input: shapes.MarketplaceCommerceAnalyticsGenerateDataSetRequest): MarketplaceCommerceAnalyticsGenerateDataSet {
    return new MarketplaceCommerceAnalyticsGenerateDataSet(this, 'GenerateDataSet', this.__resources, input);
  }

  public startSupportDataExport(input: shapes.MarketplaceCommerceAnalyticsStartSupportDataExportRequest): MarketplaceCommerceAnalyticsStartSupportDataExport {
    return new MarketplaceCommerceAnalyticsStartSupportDataExport(this, 'StartSupportDataExport', this.__resources, input);
  }

}

export class MarketplaceCommerceAnalyticsGenerateDataSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCommerceAnalyticsGenerateDataSetRequest) {
    super(scope, id);
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
          dataSetType: this.input.dataSetType,
          dataSetPublicationDate: this.input.dataSetPublicationDate,
          roleNameArn: this.input.roleNameArn,
          destinationS3BucketName: this.input.destinationS3BucketName,
          destinationS3Prefix: this.input.destinationS3Prefix,
          snsTopicArn: this.input.snsTopicArn,
          customerDefinedValues: this.input.customerDefinedValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GenerateDataSet.dataSetRequestId', props);
    return resource.getResponseField('dataSetRequestId') as unknown as string;
  }

}

export class MarketplaceCommerceAnalyticsStartSupportDataExport extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MarketplaceCommerceAnalyticsStartSupportDataExportRequest) {
    super(scope, id);
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
          dataSetType: this.input.dataSetType,
          fromDate: this.input.fromDate,
          roleNameArn: this.input.roleNameArn,
          destinationS3BucketName: this.input.destinationS3BucketName,
          destinationS3Prefix: this.input.destinationS3Prefix,
          snsTopicArn: this.input.snsTopicArn,
          customerDefinedValues: this.input.customerDefinedValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSupportDataExport.dataSetRequestId', props);
    return resource.getResponseField('dataSetRequestId') as unknown as string;
  }

}

