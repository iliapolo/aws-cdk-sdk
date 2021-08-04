import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ResourceGroupsTaggingApiClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public describeReportCreation(): ResourceGroupsTaggingAPIResponsesDescribeReportCreation {
    return new ResourceGroupsTaggingAPIResponsesDescribeReportCreation(this, this.__resources);
  }

  public fetchComplianceSummary(input: shapes.ResourceGroupsTaggingApiGetComplianceSummaryInput): ResourceGroupsTaggingAPIResponsesFetchComplianceSummary {
    return new ResourceGroupsTaggingAPIResponsesFetchComplianceSummary(this, this.__resources, input);
  }

  public fetchResources(input: shapes.ResourceGroupsTaggingApiGetResourcesInput): ResourceGroupsTaggingAPIResponsesFetchResources {
    return new ResourceGroupsTaggingAPIResponsesFetchResources(this, this.__resources, input);
  }

  public fetchTagKeys(input: shapes.ResourceGroupsTaggingApiGetTagKeysInput): ResourceGroupsTaggingAPIResponsesFetchTagKeys {
    return new ResourceGroupsTaggingAPIResponsesFetchTagKeys(this, this.__resources, input);
  }

  public fetchTagValues(input: shapes.ResourceGroupsTaggingApiGetTagValuesInput): ResourceGroupsTaggingAPIResponsesFetchTagValues {
    return new ResourceGroupsTaggingAPIResponsesFetchTagValues(this, this.__resources, input);
  }

  public startReportCreation(input: shapes.ResourceGroupsTaggingApiStartReportCreationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.StartReportCreation'),
        parameters: {
          S3Bucket: input.s3Bucket,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartReportCreation', props);
  }

  public tagResources(input: shapes.ResourceGroupsTaggingApiTagResourcesInput): ResourceGroupsTaggingAPIResponsesTagResources {
    return new ResourceGroupsTaggingAPIResponsesTagResources(this, this.__resources, input);
  }

  public untagResources(input: shapes.ResourceGroupsTaggingApiUntagResourcesInput): ResourceGroupsTaggingAPIResponsesUntagResources {
    return new ResourceGroupsTaggingAPIResponsesUntagResources(this, this.__resources, input);
  }

}

export class ResourceGroupsTaggingAPIResponsesDescribeReportCreation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.DescribeReportCreation.Status'),
        outputPath: 'Status',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReportCreation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get s3Location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.DescribeReportCreation.S3Location'),
        outputPath: 'S3Location',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReportCreation.S3Location', props);
    return resource.getResponseField('S3Location') as unknown as string;
  }

  public get errorMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReportCreation',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.DescribeReportCreation.ErrorMessage'),
        outputPath: 'ErrorMessage',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReportCreation.ErrorMessage', props);
    return resource.getResponseField('ErrorMessage') as unknown as string;
  }

}

export class ResourceGroupsTaggingAPIResponsesFetchComplianceSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTaggingApiGetComplianceSummaryInput) {
  }

  public get summaryList(): shapes.ResourceGroupsTaggingApiSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceSummary',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetComplianceSummary.SummaryList'),
        outputPath: 'SummaryList',
        parameters: {
          TargetIdFilters: this.__input.targetIdFilters,
          RegionFilters: this.__input.regionFilters,
          ResourceTypeFilters: this.__input.resourceTypeFilters,
          TagKeyFilters: this.__input.tagKeyFilters,
          GroupBy: this.__input.groupBy,
          MaxResults: this.__input.maxResults,
          PaginationToken: this.__input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceSummary.SummaryList', props);
    return resource.getResponseField('SummaryList') as unknown as shapes.ResourceGroupsTaggingApiSummary[];
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getComplianceSummary',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetComplianceSummary.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          TargetIdFilters: this.__input.targetIdFilters,
          RegionFilters: this.__input.regionFilters,
          ResourceTypeFilters: this.__input.resourceTypeFilters,
          TagKeyFilters: this.__input.tagKeyFilters,
          GroupBy: this.__input.groupBy,
          MaxResults: this.__input.maxResults,
          PaginationToken: this.__input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetComplianceSummary.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

}

export class ResourceGroupsTaggingAPIResponsesFetchResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTaggingApiGetResourcesInput) {
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetResources.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          PaginationToken: this.__input.paginationToken,
          TagFilters: this.__input.tagFilters,
          ResourcesPerPage: this.__input.resourcesPerPage,
          TagsPerPage: this.__input.tagsPerPage,
          ResourceTypeFilters: this.__input.resourceTypeFilters,
          IncludeComplianceDetails: this.__input.includeComplianceDetails,
          ExcludeCompliantResources: this.__input.excludeCompliantResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get resourceTagMappingList(): shapes.ResourceGroupsTaggingApiResourceTagMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetResources.ResourceTagMappingList'),
        outputPath: 'ResourceTagMappingList',
        parameters: {
          PaginationToken: this.__input.paginationToken,
          TagFilters: this.__input.tagFilters,
          ResourcesPerPage: this.__input.resourcesPerPage,
          TagsPerPage: this.__input.tagsPerPage,
          ResourceTypeFilters: this.__input.resourceTypeFilters,
          IncludeComplianceDetails: this.__input.includeComplianceDetails,
          ExcludeCompliantResources: this.__input.excludeCompliantResources,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetResources.ResourceTagMappingList', props);
    return resource.getResponseField('ResourceTagMappingList') as unknown as shapes.ResourceGroupsTaggingApiResourceTagMapping[];
  }

}

export class ResourceGroupsTaggingAPIResponsesFetchTagKeys {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTaggingApiGetTagKeysInput) {
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagKeys',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagKeys.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          PaginationToken: this.__input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTagKeys.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get tagKeys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagKeys',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagKeys.TagKeys'),
        outputPath: 'TagKeys',
        parameters: {
          PaginationToken: this.__input.paginationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTagKeys.TagKeys', props);
    return resource.getResponseField('TagKeys') as unknown as string[];
  }

}

export class ResourceGroupsTaggingAPIResponsesFetchTagValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTaggingApiGetTagValuesInput) {
  }

  public get paginationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagValues',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagValues.PaginationToken'),
        outputPath: 'PaginationToken',
        parameters: {
          PaginationToken: this.__input.paginationToken,
          Key: this.__input.key,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTagValues.PaginationToken', props);
    return resource.getResponseField('PaginationToken') as unknown as string;
  }

  public get tagValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTagValues',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.GetTagValues.TagValues'),
        outputPath: 'TagValues',
        parameters: {
          PaginationToken: this.__input.paginationToken,
          Key: this.__input.key,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTagValues.TagValues', props);
    return resource.getResponseField('TagValues') as unknown as string[];
  }

}

export class ResourceGroupsTaggingAPIResponsesTagResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTaggingApiTagResourcesInput) {
  }

  public get failedResourcesMap(): Record<string, shapes.ResourceGroupsTaggingApiFailureInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.TagResources.FailedResourcesMap'),
        outputPath: 'FailedResourcesMap',
        parameters: {
          ResourceARNList: this.__input.resourceArnList,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagResources.FailedResourcesMap', props);
    return resource.getResponseField('FailedResourcesMap') as unknown as Record<string, shapes.ResourceGroupsTaggingApiFailureInfo>;
  }

}

export class ResourceGroupsTaggingAPIResponsesUntagResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTaggingApiUntagResourcesInput) {
  }

  public get failedResourcesMap(): Record<string, shapes.ResourceGroupsTaggingApiFailureInfo> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResources',
        service: 'ResourceGroupsTaggingAPI',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroupsTaggingAPI.UntagResources.FailedResourcesMap'),
        outputPath: 'FailedResourcesMap',
        parameters: {
          ResourceARNList: this.__input.resourceArnList,
          TagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UntagResources.FailedResourcesMap', props);
    return resource.getResponseField('FailedResourcesMap') as unknown as Record<string, shapes.ResourceGroupsTaggingApiFailureInfo>;
  }

}

